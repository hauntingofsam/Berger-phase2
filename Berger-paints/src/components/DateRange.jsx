import React from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { DateRange } from 'react-date-range'
import { addDays } from 'date-fns';
import { useState,useEffect,useRef } from "react";
import ProductTable from "./ProductTable";
import "../App.css";
import format from 'date-fns/format'
import ProductSelect from "./Productselect";
const DateRangeChoose=()=>{
    // const [state, setState] = useState([
    //     {
    //       startDate: new Date(),
    //       endDate: addDays(new Date(),7),
    //       key: 'selection'
    //     }
    //   ]);
      const [range, setRange] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection'
        }
      ])
    
      // open close
      const [open, setOpen] = useState(false)
      const [tableopen,setTableOpen]=useState(false);
    
      // get the target element to toggle 
      const refOne = useRef(null)
    
      useEffect(() => {
        // event listeners
        document.addEventListener("keydown", hideOnEscape, true)
        document.addEventListener("click", hideOnClickOutside, true)
      }, [])
    
      // hide dropdown on ESC press
      const hideOnEscape = (e) => {
        // console.log(e.key)
        if( e.key === "Escape" ) {
          setOpen(false)
        }
      }
    
      // Hide dropdown on outside click
      const hideOnClickOutside = (e) => {
        
        if( refOne.current && !refOne.current.contains(e.target) ) {
          setOpen(false)
        }
      }
      const handleok = (e) => {
        // console.log(refOne.current)
        // console.log(e.target)
        setOpen(true);
      }
      // const [showProduct,setShowProduct]=useState(false);
    return(
      <>
      <div className='flex flex-col md:flex-row gap-y-6 mt-10 gap-x-6 '>
         
      
         <div className='text-white ml-[5vw]'>
           Enter Date Range:
         </div>
         
         

       
       

       
       <div className="calendarWrap flex flex-col md:flex-row">

               <input
                 value={`${format(range[0].startDate, "dd/MM/yyyy")}`}
                 readOnly
                 className="inputBox"
                 onClick={ () => setOpen(open => !open) }
               />
               <div className="text-white text-xl my-auto pl-6">
                 To
               </div>
               <input
                 value={`${format(range[0].endDate, "dd/MM/yyyy")}`}
                 readOnly
                 className="inputBox"
                 // onClick={ () => setOpen(open => !open) }
               />

               <div ref={refOne}>
                 {open && 
                   <DateRange
                     onChange={item => setRange([item.selection])}
                     editableDateInputs={true}
                     moveRangeOnFirstSelection={false}
                     ranges={range}
                     months={2}
                     direction="horizontal"
                     className="calendarElement"
                    //  id="calendarElement"
                   />
                 }
               </div>

        </div>
        <button className="h-[50px] w-[80px] bg-green-300 text-center py-2 rounded-lg " onClick={(e)=>{setTableOpen(true)}}>
          Ok

        </button>


      </div>
      {tableopen && <ProductTable />}
      
      </>
      
         

      
        
    )
}
export default DateRangeChoose;