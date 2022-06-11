import logo from './logo.svg';
import './App.css';
import { Line } from 'react-chartjs-2'
import React , {useState , useRef ,useEffect } from 'react'
import faker from 'faker';
import Chart from './Chart';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { fa } from 'faker/lib/locales';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

var startini=false;

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: '',
    },

  },
};


//name on x axis
const labels = [0,1,2,3,4];


export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: [0,0,0,0,0],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    }
   
  ],
};

function App() {
  const texttodoref=useRef()
  

  

  const [datao, setData] = useState(data); 
  const [optionso, setOptions] = useState(options); 

  
  //function to generate random colors
  function random_rgba() {
    var o = Math.round, r = Math.random, s = 255 , s2=200;
    return 'rgba(' + o(r()*s2) + ',' + o(r()*s) + ',' + o(r()*s) + ',1)';
  }
  
  //read data from api and update the graph
  function fetchdata(filtervalue) {
    //
    // GET request using fetch with error handling
    fetch('http://127.0.0.1:8000/getseries?seriesname='+filtervalue)
        .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }


            console.log(data);
            const dataset_test=[]
            for(var kc=0;kc<data.length;kc++)
            {
              var color = random_rgba();
              //console.log(color)

              dataset_test[kc] ={
                label: data[kc]['fields']['name'],
                data: data[kc]['fields']['data'],
                borderColor: color,
                backgroundColor: color,
              }
            }
           

            const data2 = {
              labels,
              datasets:dataset_test ,
            }
        
        
            setData(data2)
            setOptions(options) 

            

        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });


}
  const updatePlot = () => 
  {

    //texttodoref.current.value=null;
    fetchdata(texttodoref.current.value);

        
   
  };

  const loadallPlot = () => 
  {
    texttodoref.current.value=null;
    fetchdata("");
   
  };

  
  const inputstyle = {
    maxWidth:'800px',
   
  };
  const appstyle = {
    padding:'50px',paddingRight:'100px'
   
  };
 

  return (
    <center>  
    <div style={{maxWidth:'1200px',padding:'70px'}}  className="App">
      

    <center>  
        <InputGroup style={inputstyle} className="mb-1">
    
            <FormControl ref={texttodoref}
              placeholder="Type name or part of name to filter"
              aria-label="Type name or part of name to filter"
              aria-describedby="basic-addon1"
            />
        </InputGroup>
    </center>

      
      <Chart   data={datao} options={optionso}  refreshplot={loadallPlot} onUpdate={updatePlot}></Chart>
     

    </div>
    </center>

      
    
  );

  
}

export default App;
