import { Link } from "react-router-dom";

export default function Product(props) {

    const title = props.product.title;
    const price = props.product.price;
    const image = props.product.image;
    const key = props.product.id; 

    return <>
        <div key={key} className="px-8 rounded-sm ">
            <Link to="/product" state={props.product}>
                <div className="p-10">
                    <img src={image} className='hover:scale-125 h-56 w-auto transition-all duration-700  hover:-rotate-6 ' alt="img" />
                </div>
            </Link>
            <div className="mt-4 text-center">
                <h5 className=" truncatse text-gray-700 text-lg  truncate ">{title}</h5>
                <div className="flex justify-between gap-3 items-baseline  ">
                    <p className="text-2xl font-bold">₹{price}</p>
                    <p className="text-xl mt-2 line-through text-gray-400 font-bold">₹{parseFloat(price) + 180}</p>
                </div>
            </div>

        </div>
    </>

} 