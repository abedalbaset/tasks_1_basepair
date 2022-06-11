from django.shortcuts import render
from . models import Series
from django.core import serializers
from django.http import HttpResponse
from rest_framework.views import APIView
import json


class get_series(APIView):
    def filter_json(self,jsondata,namevalue):
        
        json_obj=json.loads(jsondata)
        output_dict = [x for x in json_obj if (((x['fields']['name']).lower().find(namevalue.lower()) ) != -1 )]
        output_json = json.dumps(output_dict)
        #print(output_json)
        return output_json


    def get(self, request):
        all_series_objs=Series.objects.all()
        series_json = serializers.serialize("json",all_series_objs)
        seriesname = request.GET.get("seriesname")
        if(seriesname):
            return HttpResponse(self.filter_json(series_json,seriesname))
        else:
            return HttpResponse(series_json)
    
       

    







