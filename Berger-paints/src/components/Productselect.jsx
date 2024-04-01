import React from "react";
import { useState,useCallback } from 'react';
import Multiselect from 'multiselect-react-dropdown';
const ProductSelect=()=>{
    const [selectedValues, setSelectedValues] = useState([
        {
          cat: 'Group 1',
          key: 'Option 1'
        },
        {
          cat: 'Group 1',
          key: 'Option 2'
        },
        
      ]);
    
      const handleSelect = (selectedList, selectedItem) => {
        setSelectedValues(selectedList);
      };
    return(
        <div className='flex flex-col md:flex-row gap-x-8 gap-y-6 mt-10  '>
        <div className=' flex flex-row  justify-around '>
          <div className='text-white ml-[5vw]'>
            Select Products:
          </div>
          <div className=' ml-20 flex flex-col md:flex-row  '>
            <Multiselect
            displayValue="key"
            options={[
              {
                cat: 'Group 1',
                key: 'Option 1'
              },
              {
                cat: 'Group 1',
                key: 'Option 2'
              },
              {
                cat: 'Group 1',
                key: 'Option 3'
              },
              {
                cat: 'Group 2',
                key: 'Option 4'
              },
              {
                cat: 'Group 2',
                key: 'Option 5'
              },
              {
                cat: 'Group 2',
                key: 'Option 6'
              },
              {
                cat: 'Group 2',
                key: 'Option 7'
              }
            ]}
            selectedValues={selectedValues}
            onSelect={handleSelect}
            onRemove={handleSelect}
            onSearch={() => {}}
            onKeyPressFn={() => {}}
            
          />  


          </div>

        </div>
    

      </div>
    )
}
export default ProductSelect;