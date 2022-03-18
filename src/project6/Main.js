import React, { useEffect, useState } from 'react';
import PrintData from './PrintData';
import Select from './Select';

const Main=()=>{
    const url='https://course-api.com/react-tabs-project';
    const [loading,setLoading]=useState(true);
    const [data,setData]=useState();
    const [current,setCurrent]=useState(0);

    const setDetails=(item)=>{
        
    }

    const fetchingApi= async ()=>{
        setLoading(true);
        try{
            const response=await fetch(url);
            const data=await response.json();
            setData(data);
            setLoading(false);
            console.log(data);
        }
        catch(error){
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchingApi();
    },[])
    if(loading){
        return(
            <>
                <h1>Welcome Ajay</h1>
            </>
        )
    }

    return(
        <>  
            <div className="container" style={{'display':'flex'}}>
                <div className="btns">
                    <Select data={data} setCurrent={setCurrent} />
                    
                </div>
                <div className="content">
                        <PrintData data={data} current={current} setDetails={setDetails} />
                </div>
            </div>
        </>
    )


}

export default Main;