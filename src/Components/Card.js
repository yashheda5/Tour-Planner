import { useState } from "react";

export default function Card({ id, image, info, price, name ,removeTour}) {
    const [readmore, setReadmore] = useState(false);
    const desc = readmore ? info:`${info.substring(0, 200)}....`;
    function readmoreHandler() {
        setReadmore(!readmore);
    }
   
    return (<div  className="w-[400px] h-max m-[1rem] p-[1rem] flex flex-col rounded-[10px] custom-shadow ">
        <img src={image} className="w-[380px] object-cover aspect-square " alt="" />
        <div className="m-x-[20px] m-y-[5px]">
            <div className="">
                <h4 className="text-[#1faa59] text-[1.3rem] font-bold">₹{price}</h4>
                <h4 className="font-bold text-[1.5rem]">{name}</h4>
            </div>
            <div>
                {desc}
                <span className="text-[#12b0e8] cursor-pointer" onClick={()=>readmoreHandler(id)}>{readmore ? `Show less` : `Read more`}</span>
            </div>
        </div>
        <button className="mt-[18px] px-[10px] py-[10px] cursor-pointer rounded-[10px] text-[18px] border-[1px] border-[#b4161b] border-solid bg-[#b4161b21] hover:ease-in duration-200  hover:bg-red-700 hover:text-white"  onClick={() => removeTour(id)}>Not Interested</button>
    </div>);
}