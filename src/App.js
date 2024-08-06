import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import data from './data.js';
import Tours from './Components/Tours.js';
export default  function App() {
  const [tours, setTours] = useState(data);
  function removeTour(id) {
    const newTours=tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }
  if(tours.length === 0) {
    return (
        <div className="flex flex-col items-center justify-center h-[100vh] ">
          <h2>No Tours Left</h2>
          <button className="mt-[18px] w-[15rem] p-5 cursor-pointer rounded-[10px] text-[18px] border-[1px] border-[#b4161b] border-solid bg-[#b4161b21] hover:ease-in duration-200  hover:bg-red-700 hover:text-white" onClick={() => setTours(data)}>
            Refresh
          </button>
        </div>
    );
  }
  return (
    <div className='' >
      
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}


