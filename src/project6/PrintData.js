import React from 'react'

const PrintData = ({data,current}) => {
  return (
    <>
        
        {
            data.map((ele,index)=>{
                if(index===current){
                    return(
                        <div key={ele.id}>
                            <div className="card">
                                <h3 className="card-title">{ele.title}</h3>
                                <div className="card-body">
                                    <div className="card-text">{ele.company}</div>
                                    <p className="card-text">{ele.dates}</p>
                                    {ele.duties.map((curr,index)=>{
                                        return <p key={index} className="text">{curr}</p>
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                }
            })
        }
    </>
  )
}

export default PrintData