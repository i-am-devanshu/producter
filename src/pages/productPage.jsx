import { useEffect, useState } from "react";
import Product from "../components/product";
import searchIcon from '../icons/search.svg'
import axios from 'axios'
import Pagination from "../components/pagination";




export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerPage] = useState(9);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const productRes = await axios.get('https://fakestoreapi.com/products');
      const categoriesRes = await axios.get('https://fakestoreapi.com/products/categories');
      setProducts(productRes.data);
      setCategories(categoriesRes.data);
      setLoading(false);

    }

    fetchData();
  }, [])

   const indexOfLastPost = currentPage * productPerPage;
   const indexOfFirstPost = indexOfLastPost - productPerPage;
   const currentProduct = products.slice(indexOfFirstPost,indexOfLastPost)

   const paginate = (page) => setCurrentPage(page);

  if (loading) {
    return <>
      <div className="absolute top-[50%] left-[48%]">
        <div class="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full">
        </div>
      </div>
    </>
  }


  return <>

    <div className="p-10">
      <div className="flex">
        <div className="w-1/4">
          <p className="font-black text-lg my-2">Sort</p>
          <div className="space-x-2">
            <input type="radio" name="pricesort" id="ascending" />
            <label htmlFor="ascending">Low to High Price</label>
          </div>
          <div className="space-x-2">
            <input type="radio" name="pricesort" id="descending" />
            <label htmlFor="descending">High to Low Price</label>
          </div>

          <p className="font-black text-lg my-2">Category</p>
          {
            categories.map((categorie) => (
              <div className="space-x-2">
                <input type="radio" name="category" id={categorie} />
                <label htmlFor={categorie}>{categorie}</label>
              </div>
            ))
          }


          <p className="font-black text-lg my-2">Ratings</p>
          <div className="space-x-2">
            <input type="checkbox" name="category" id="5star" />
            <label htmlFor="5star">⭐⭐⭐⭐⭐</label>
          </div>
          <div className="space-x-2">
            <input type="checkbox" name="category" id="4star" />
            <label htmlFor="4star">⭐⭐⭐⭐</label>
          </div>
          <div className="space-x-2">
            <input type="checkbox" name="category" id="3star" />
            <label htmlFor="3star">⭐⭐⭐</label>
          </div>
          <div className="space-x-2">
            <input type="checkbox" name="category" id="2star" />
            <label htmlFor="2star">⭐⭐</label>
          </div>
        </div>
        <div className="w-3/4">
          <div className="flex w-full gap-8">
          <div className="relative w-full" >
            <img src={searchIcon} className="absolute top-3.5 left-3 w-5 h-5" alt="search" />
            <input className="border rounded-sm w-full py-2 h-11 ps-10 pe-3 text-lg" placeholder="Search" type="text" />
          </div>
          <Pagination productPerPage={productPerPage} totalProducts={products.length} paginate={paginate} />
          </div>
          <div className="grid mt-5 gap-8 grid-cols-3 items-stretch">
            {currentProduct.map(product => (
              <Product title={product.title} price={product.price} img={product.image} />
            ))}
          </div>
        </div>
      </div>

    </div>

  </>

} 