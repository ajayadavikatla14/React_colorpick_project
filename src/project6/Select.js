import React from 'react'

const Select = ({data,setCurrent,setDetails}) => {
  return (
    <>
        {data.map((ele,index)=>{
            return(
                <div key={ele.id}>
                    <button className='btn' onClick={()=>setCurrent(index)} >{ele.company}</button>
                </div>
            )
        })}
    </>
  )
}

export default Select