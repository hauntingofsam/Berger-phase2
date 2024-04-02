import React from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from "react";
import ProductSelect from "./Productselect.jsx";
const data=[
    {scheme:1,name: "Product 1", idx:1,},
    {scheme:1,name:"Product 2", idx:2, },
    {scheme:1,name:"Product 3", idx:3,},
    {scheme:2,name:"Product 2",idx:4},
    {scheme:2,name:"Product 3",idx:5},
    {scheme:2,name:"Product 4",idx:6},
]
function Schemes({showSchemes}){
    const valuetext = (value) => {
        return `${value}°C`;
      };
      
    
    return(
      <>
      {showSchemes?(
      <div >
        <div className='text-white ml-[5vw] my-10'>
        Schemes Available :

        </div>
        <div className="text-white text-2xl ml-[5vw] mt-10">
          Scheme 1 :

        </div>
        <div className='flex flex-row  ml-[5vw] gap-3'>
        {data.map((item)=>(

          
            
          (item.idx==1||item.idx==2||item.idx==3||item.idx==6)?(<div className='h-[200px] w-[200px] bg-amber-300  rounded-lg '>
        
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

        </div>):
        (<></>)
          

          
          

          

        
        ))}
        <div className="bg-green-300 rounded-lg h-[50px] w-[200px] mr-[5vw] pt-3 px-2">
          Max Profit : 7000/-

        </div>

        </div>
        <div className="text-white text-2xl ml-[5vw] mt-10">
          Scheme 2 :

        </div>
        <div className='flex flex-row ml-[5vw] justify-items-start gap-8'>
        {data.map((item)=>(

          
            
          (item.idx==4||item.idx==5||item.idx==6)?(<div className='h-[200px] w-[200px] bg-amber-300  rounded-lg '>
        
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

        </div>):
        (<></>)
          

          
          

          

        
        ))}
        <div className="bg-green-300 rounded-lg h-[50px] w-[200px] mr-[5vw] pt-3 px-2">
          Max Profit : 5000/-

        </div>

        </div>
        
        
        
      </div>):
      (<></>)}
      </>
        
        
    )
}
export default Schemes;