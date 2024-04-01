import React from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from "react";
const data=[
    {scheme:1,name: "Product 1", idx:1,},
    {scheme:1,name:"Product 2", idx:2, },
    {scheme:1,name:"Product 3", idx:3,},
]
const Schemes=()=>{
    const valuetext = (value) => {
        return `${value}°C`;
      };
    const [schema,setShowScheme]=useState(false);
    return(
        <div>
            <div className='text-white ml-[5vw] my-10'>
            Schemes Available :

            </div>
            <div className='flex flex-row w-[700px] ml-[5vw] justify-between'>
            {data.map((item)=>(

              
                
              
              <div className='h-[200px] w-[200px] bg-amber-300  rounded-lg '>
            
            <div className='mt-10 text-red-600 text-lg '>
              {item.name}
  
            </div>
            <div>
            <Box sx={{ width: 150 }} className="ml-4 ">
              <Slider
                aria-label="Temperature"
                defaultValue={1}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                shiftStep={1}
                step={1}
                marks
                min={0}
                max={20}
              />
              {/* <Slider defaultValue={1} step={1} marks min={0} max={20} disabled /> */}
            </Box>
  
            </div>
  
          </div>
  
              
              

              

            
         ))}

            </div>
            
            
            
        </div>
        
    )
}
export default Schemes;