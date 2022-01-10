import React from 'react';
import Data from'./dataj.json';
//import Chart from 'chart.js';
import { Radar } from 'react-chartjs-2';
function yearobj(datayear){
    let yearlist=[];
    Data.forEach(element =>{
        let d= new Date(element["added"]);
        let newd=Number(d.getFullYear());
        if(datayear[0]<=newd && newd<=datayear[1]){
            yearlist.push(element)
        }
    });
    return yearlist
}
function sectorobj(sectorlist,datasetset){
    let newdata=[];
    if(sectorlist==='all'){
        return datasetset
    }
    else{
        datasetset.forEach(element=>{
            if(sectorlist.includes(element.sector)){
                newdata.push(element)
            }
        });
        return newdata
    }

}

function jsonobj(dataset,filter,year,sector,topic,pest){
    let me=0;
    let times=0;
    let intenlist=[];
    let sectorlist=[];
    dataset=yearobj(year);
    dataset=sectorobj(sector,dataset);
    //dataset=topicobj(topic,dataset);

    dataset.forEach(element => {
        if (sectorlist.includes(element[filter])===false){
            sectorlist.push(element[filter]);
        }
    });
    sectorlist.forEach(element1=>{
        times=0;
        me=0;
        dataset.forEach(element2=>{
            if(element2[filter]===element1){
                times=times+1;
                me=me+Number(element2['intensity']);
            }
        });
        intenlist.push(me/times);
    });
    // console.log(intenlist);
    return [sectorlist,intenlist];
}

function Radarmap(params) {
    let a=jsonobj(params.params,params.fil,params.year,params.sector,"fff","iio");
        let data= {
            labels: a[0],
            datasets: [{data: a[1],
            backgroundColor:'rgba(135,206,235,0.5)',
            borderColor:'rgba(135,206,255,1)'
            }]
        }
      
    return <Radar data={data}/>
    
}
export default Radarmap
