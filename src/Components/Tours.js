import Card from "./Card";
export default function Tours({ tours, removeTour }) {
    return (<div>
        <div className="flex items-center justify-center flex-col">
            <h2 className="text-[3rem] m-[6vh] border-[7px] border-dashed
             border-[rgb(1,17,160)] rounded-[20px] p-[2rem] text-bold font-bold">Plan Tours</h2>
        </div>
        <div className="flex  justify-center flex-wrap mx-w-[1300px] m-x-0 m-y-auto" >
            {
                tours.map((tours) => {
                    return <Card key={tours.id} {...tours} removeTour={removeTour}></Card>
                })
            }
        </div>
    </div>);
}