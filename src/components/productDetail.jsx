import { useState } from 'react';
import backIcon from '../icons/back.svg';
import bagIcon from '../icons/bag.svg';
import likeIcon from '../icons/like.svg';
import { Link, useLocation } from 'react-router-dom';


export default function ProductDetail() {

    const location = useLocation();
    const product = location.state;

    let [qty, setQty] = useState(1);

    function increaseqty(){
        if(qty<99){
            setQty(qty+1);
        }
    }
    
    function decreaseqty(){
        if(qty>1){
            setQty(qty-1);
        }
    }

    return <>

        <div className=" max-w-screen-xl mx-auto py-6 px-5 md:p-10">
            
            <div className="flex space-x-2 items-center">
                <Link to="/">
                    <img className='w-8 h-8' src={backIcon} alt="back" />
                </Link>
                <span className=' text-gray-700 font-black '>{product.category}</span>
            </div>

            <div className='md:flex mt-5 md:gap-16'>
                <div className="w-full md:w-1/3 flex justify-center">
                    <img src={product.image} className='w-56 md:w-60' alt="img" />
                </div>
                <div className='md:w-2/3 mt-8 md:mt-0'>
                    <h2 className='text-2xl md:text-3xl mb-5'>{product.title}</h2>
                    <p className='text-gray-600 text-sm max-w-2xl mb-5'>{product.description}</p>

                    <div className="flex gap-8 justify-between md:justify-start  item-center  my-5">
                        <div className='text-center'>
                            <span className=' text-gray-500 '>Colors</span>
                            <div className='space-x-2 rounded-full w-fit border-2 mt-1 p-1 px-1.5 flex'>

                                <div className='relative'>
                                    <input id="color1" type="radio" name="color" className="peer w-4 h-4 hidden" />
                                    <label htmlFor="color1" className="flex before:hidden peer-checked:before:block before:absolute text-white before:text-lg md:before:text-2xl before:left-1.5 md:before:left-1 before:top-0 md:before:-top-1 before:content-['✔'] cursor-pointer select-none h-7 w-7 rounded-full bg-blue-500"></label>
                                </div>
                                <div className='relative'>
                                    <input id="color2" type="radio" name="color" className="peer w-4 h-4 hidden" />
                                    <label htmlFor="color2" className="flex before:hidden peer-checked:before:block before:absolute text-white before:text-lg md:before:text-2xl before:left-1.5 md:before:left-1 before:top-0 md:before:-top-1 before:content-['✔'] cursor-pointer select-none h-7 w-7 rounded-full bg-rose-500"></label>
                                </div>

                                <div className='relative'>
                                    <input id="color3" type="radio" name="color" className="peer w-4 h-4 hidden" />
                                    <label htmlFor="color3" className="flex before:hidden peer-checked:before:block before:absolute text-white before:text-lg md:before:text-2xl before:left-1.5 md:before:left-1 before:top-0 md:before:-top-1 before:content-['✔'] cursor-pointer select-none h-7 w-7 rounded-full bg-purple-500" ></label>
                                </div>

                            </div>
                        </div>

                        <div className='text-center'>
                            <span className=' text-gray-500 '>Quantity</span>
                            <div className='flex mt-1'>

                                <button onClick={decreaseqty} className='text-2xl rounded-xl px-5 h-10 flex justify-center border-2 '>-</button>
                                <span className='w-10 text-2xl pt-1'>{qty}</span>
                                <button onClick={increaseqty} className='text-2xl rounded-xl px-5 h-10 flex justify-center border-2 '>+</button>



                            </div>
                        </div>

                    </div>

                    <div className="flex gap-5 items-baseline">
                        <p className='font-black  text-4xl mb-5 tracking-wide '>₹{product.price}</p>
                        <p className='text-gray-400 line-through  text-2xl mb-5 tracking-wide '>₹{parseFloat(product.price) + 180}</p>
                    </div>

                    <div className="space-x-5 pt-5 flex">
                        <button className='bg-blue-500 flex items-center w-full  md:w-48 justify-center text-white rounded-full py-2.5'>
                            <img src={bagIcon} className='w-6 mr-2' alt="bag" />

                            Add To Bag

                        </button>

                        <button className='flex items-center text-black w-32  md:w-48 justify-center rounded-full py-2.5'>
                            <img src={likeIcon} className='w-8 md:w-6 md:mr-2' alt="bag" />

                            <span className='hidden md:block'>Save To Favorites</span>

                        </button>
                    </div>


                </div>
            </div>

        </div>

    </>

} 