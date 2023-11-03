import searchIcon from '../icons/search.svg';
import likeIcon from '../icons/like.svg';


export default function Header(){
    return <>
    
    <nav className="flex px-5 md:px-10 py-3 shadow-xl ">
        <h1 className="text-3xl font-bold tracking-wider ">Product</h1>

        <div className="flex items-center ms-auto space-x-4">
            <button><img src={searchIcon} className="w-5 h-5" alt="search" /></button>
            <button><img src={likeIcon} className="w-6 h-6" alt="search" /></button>
        </div>
    </nav>
    
    </>
    
} 