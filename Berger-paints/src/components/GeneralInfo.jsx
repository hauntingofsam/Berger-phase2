import React from "react";
const GeneralInfo=()=>{
    return(
        <div className='flex flex-col md:flex-row gap-x-8 gap-y-6'>
        <div className='name bg-blue-500 text-white h-[50px] rounded-xl px-2 pt-3 mt-10 ml-[5vw]'>
          Name: Rajdhani Mosaic Traders

        </div>
        <div  className='text-white flex flex-row mt-10 items-center'>
          <div>
            Last Month CN:
          </div>
          <div className='bg-gray-900 text-yellow-300 rounded-lg  px-2 pt-3 h-[50px] ml-4'>
            400/-


          </div>


        </div>
        <div  className='text-white flex flex-row mt-10 items-center'>
          <div>
            Last Month Order value:
          </div>
          <div className='bg-gray-900 text-yellow-300 rounded-lg  px-2 pt-3 h-[50px] ml-4'>
            180,000/-


          </div>


        </div>
        

      </div>
    )
}
export default GeneralInfo;