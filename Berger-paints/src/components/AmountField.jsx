import React from "react";
const AmountField=()=>{
    return(
        <div className='flex flex-col md:flex-row gap-x-8 gap-y-6 mt-10'>
        <div className=' flex flex-row mt-10 items-center ml-[5vw]'>
          <div className='text-white'>
            Enter Amount:
          </div>
          <div>
           <form className=' w-[250px]'>
            <input type="text" className='w-full h-[50px] pt-1 ml-4' placeholder='Enter amount'/>

           </form>


          </div>


        </div>
        

      </div>
    )
};
export default AmountField;