import React from "react";
import { useState,useCallback } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import Schemes from "./Schemes";
// import Schemes from "./Schemes.jsx";
const ProductSelect=()=>{
    const [showSchemes,setShowSchemes]=useState(false);
    const [selectedValues, setSelectedValues] = useState([
        {
          cat: 'Group 1',
          key: 'Product 1'
        },
        {
          cat: 'Group 1',
          key: 'Product 2'
        },
        
      ]);
    
      const handleSelect = (selectedList, selectedItem) => {
        setSelectedValues(selectedList);
      };
    return(
      <>
        <div className='flex flex-col md:flex-row gap-x-8 gap-y-6 mt-10  pb-10'>
        <div className=' flex flex-row  justify-around gap-8'>
          <div className='text-white ml-[5vw]'>
            Select Products:
          </div>
          <div className=' ml-20 flex flex-col md:flex-row  '>
            <Multiselect
            displayValue="key"
            options={[
              {
                cat: 'Group 1',
                key: 'Product 1'
              },
              {
                cat: 'Group 1',
                key: 'Product 2'
              },
              {
                cat: 'Group 1',
                key: 'Product 3'
              },
              {
                cat: 'Group 2',
                key: 'Product 4'
              },
              {
                cat: 'Group 2',
                key: 'Product 5'
              },
              {
                cat: 'Group 2',
                key: 'Product 6'
              },
              {
                cat: 'Group 2',
                key: 'Product 7'
              }
            ]}
            selectedValues={selectedValues}
            onSelect={handleSelect}
            onRemove={handleSelect}
            onSearch={() => {}}
            onKeyPressFn={() => {}}
            
          />  


          </div>
          <button className="h-[50px] w-[150px] rounded-lg bg-yellow-200 py-1 mr-[2vw] text-center" onClick={()=>setShowSchemes(!showSchemes)}>
            {showSchemes ? "Close":"Submit"}


          </button>


        </div>
    

        </div>
        <Schemes showSchemes={showSchemes}/>
      </>

    )
}
export default ProductSelect;