import React from 'react';
import ChartBar from '../Chart/ChartBar'
import './Chart.css'

const Chart = (props) => {
    return ( 
        <div className='Chart'>
        props.dataPoints.map((dataPoints)=>{
            <ChartBar 
            key={dataPoints.label}
            value={dataPoints.value}
            maxValue={null}
            label={dataPoints.label}   
            />
        })
        </div>
     );
}
 
export default Chart;