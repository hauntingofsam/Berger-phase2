// import { useState } from 'react'
// import { useState } from 'react';
import './App.css'








import DateRange from './components/DateRange';
import ProductSelect from './components/Productselect';
import Schemes from './components/Schemes';





function App() {
  // const [selectedRange, setSelectedRange] = useState({
  //   startDate: new Date(),
  //   endDate: new Date(),
  // });
  // const handleSelect = useCallback((ranges) => {
  //   console.log(ranges);
  //   setSelectedRange(ranges.selection);
  // }, []);
  // const selectionRange = {
  //   startDate: selectedRange.startDate,
  //   endDate: selectedRange.endDate,
  //   key: 'selection',
  // };
  
  
  

  


  

  return (
    <div className="bg-violet-950 h-full">
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
      <div className='flex flex-col md:flex-row gap-x-8 gap-y-6 mt-10'>
        <div className=' flex flex-row mt-10 items-center ml-[5vw]'>
          <div className='text-white'>
            Enter Amount:
          </div>
          <div>
           <form className=' w-[250px]'>
            <input type="text" className='w-full h-[50px] pt-2 ml-4' placeholder='Enter aoumt'/>

           </form>


          </div>


        </div>
        

      </div>
      <DateRange/>
      <ProductSelect/>
      <Schemes/>
      
      
      

      
      
      
    </div>
  )
}

export default App
