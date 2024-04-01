import React from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { useState } from "react";
const DateRange=()=>{
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(),7),
          key: 'selection'
        }
      ]);
    return(
        <div className='flex flex-col md:flex-row gap-x-8 gap-y-6 mt-10  '>
      <div className=' flex flex-row  justify-around'>
          <div className='text-white ml-[5vw]'>
            Enter Date Range:
          </div>
          <div className='date relative flex flex-col md:flex-row justify-center'>
          <DateRangePicker
          onChange={item => setState([item.selection])}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={2}
          ranges={state}
          direction="horizontal"
          
          className=' w-[40vw] flex flex-col md:flex-row '
          
        />

          </div>

        
        

        </div>

      </div>
    )
}
export default DateRange;