
export default function Product(props) {
    return <>
        <div className="px-8 rounded-sm ">
            <div className="p-10">
                <img src={props.img} className='hover:scale-125 h-56 w-auto transition-all duration-700  hover:-rotate-6 ' alt="img" />
            </div>
            <div className="mt-4 text-center">
                <h5 className=" truncatse text-gray-700 text-lg  truncate ">{props.title}</h5>
                <div className="flex justify-between gap-3 items-baseline  ">
                    <p className="text-2xl font-bold">₹{props.price}</p>
                    <p className="text-xl mt-2 line-through text-gray-400 font-bold">₹{parseFloat(props.price) + 180}</p>
                </div>
            </div>

        </div>


    </>

} 