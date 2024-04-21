// import { useState } from 'react'
// import { useState } from 'react';
import './App.css'
import AmountField from './components/AmountField';








import DateRange from './components/DateRange';
import GeneralInfo from './components/GeneralInfo';
import ProductTable from './components/ProductTable';
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
    <div className="bg-violet-950 pb-[50vw]">
      <GeneralInfo/>
      <AmountField/>
      <DateRange/>
      {/* <ProductSelect/> */}
      {/* <Schemes/> */}
      {/* <ProductTable/> */}
      
      
      

      
      
      
    </div>
  )
}

export default App
