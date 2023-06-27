import React from 'react'

const Color = (props) => {
  const {colorData,setcolor} = props
  return (
    <>
    <ul className="colors ps-0">
      {colorData && colorData?.map((item,index)=>{
          return <li
            onClick={()=>setcolor(item?._id)}          
           key={index} 
           style={{backgroundColor: item?.title}} ></li>
        })
      }
    </ul>
    </>
  )
}

export default Color