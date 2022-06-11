import { Line } from "react-chartjs-2";
import App from './App'
import React , {useState , useRef ,useEffect } from 'react'
import Button from 'react-bootstrap/Button';

const Chart = ({ data, options, onUpdate ,refreshplot }) => {
  // const dataIn = data[0]; COMMENTED OUT
  // const optionsIn = options[0]; COMMENTED OUT
  // REMOVED onClick function
  useEffect(() => {
    onUpdate();
  }, []);
  return (
    <>
      <div className="header">
       
        <div style={{paddingBottom:'50px'}} >
          
        <br/>
        <Button onClick={onUpdate} variant="primary">Filter</Button>
   

        <Button onClick={refreshplot} variant="info">Remove filters</Button>

       
       

        </div>
      </div>
      
      <Line  data={data} options={options} />
    </>
  );
};

export default Chart;