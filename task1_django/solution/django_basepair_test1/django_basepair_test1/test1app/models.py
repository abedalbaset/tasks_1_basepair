from django.db import models

class Series(models.Model):
    name=models.CharField(max_length=40)
    data=models.JSONField()

