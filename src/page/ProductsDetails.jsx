import axios from 'axios'

import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Container from '../components/Container'
import { IoIosArrowForward } from "react-icons/io";

import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaPlus, FaMinus, } from "react-icons/fa";

import { Rate } from "antd";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slice/ProductSlice';



const ProductsDetails = () => {
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let productId = useParams()
  let [show, setShow] = useState(false);
  let [singleProduct, setSingleProduct] = useState({});



  let getSingleProduct = () => {
    axios.get(`https://dummyjson.com/products/${productId.id}`).then((Response) => {
      setSingleProduct(Response.data);
      


    });
  };


  useEffect(() => {
    getSingleProduct();

  }, [productId]);

  let clientRating = Array.from({length:5}, (_, index)=>{
    let number = index + 0.5
    return singleProduct.rating > index + 1 ? <FaStar className='text-[#FFD881] text-[20px]' /> : singleProduct.rating > number ?   <FaStarHalfAlt className='text-[#FFD881] text-[20px]' /> : <FaRegStar className='text-[#FFD881] text-[20px]' />

  })

 let discount = singleProduct.price * singleProduct.discountPercentage / 100
 let newPrice = singleProduct.price - discount

 let handleCart = (item) =>{
  
  dispatch(addToCart({...item, qun: 1}))
  
  toast("Welcome to Cart Page!");
  setTimeout(()=>{
    navigate("/cart")

  }, 2000)
  
 }
 
  



  return (
    <>
      <section>
        <Container>
          <div ><h2 className='text-[#6D6D60] font-bold text-[12px] font-DMs py-4n flex items-center cursor-pointer pt-5'> <Link to="/">Home</Link> <IoIosArrowForward /> <Link to="/shop">Products</Link></h2></div>

       <div className="w-[50%] border-[1px] border-[#dddd] bg-[#f8f9fa] rounded-[8px] shadow-inner mt-5">
        <img className='w-[80%]' src={singleProduct.thumbnail} alt="" />
       </div>


          <div className="">
            <h2 className='text-[49px] font-DMs font-bold text-[#262626] pt-10'>Product</h2>
          </div>
          <div className="flex gap-3 items-center">
            
           {clientRating} 
           
           
            <div className="">
              <h3 className='text-[14px] font-DMs font-normal text-[#767676] '>1 Review</h3>
            </div>



          </div>
          <div className="mt-5">
            
            <del className='text-[20px] font-DMs font-normal text-[#767676]'> ${singleProduct.price}</del>
            <p className='text-[30px] font-DMs font-bold text-[#262626]'>${newPrice.toFixed(2)}</p>
           
            {/* <h4 className='text-[20px] font-DMs font-bold text-[#262626] '>$44.00</h4> */}
          </div>

        


        

         

          <div className="">
            <div className="flex flex-wrap md:flex-nowrap my-5">
              <button className="px-[20px] md:px-[40px] py-[12px] md:py-[16px] text-[10px] md:text-[16px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300">
              Add to Wish List
              </button>
              <button onClick={()=>handleCart(singleProduct)} className="px-[20px] md:px-[40px] py-[12px] md:py-[16px] text-[10px] md:text-[16px] font-bold border-2 border-[#000] me-3 hover:bg-black hover:text-white duration-300">
              Add to Cart
              </button>
            </div>
          </div>

       

        


          <div className="flex mt-5 gap-3">
            <h4 className='text-[16px] text-[#262626] font-DMs font-normal'>John Ford</h4>
           {singleProduct &&
           <Rate disabled value={singleProduct.rating} />
           }
          </div>
       

         

         


        
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"

          />

<ToastContainer />


        </Container>
      </section>

    </>
  )
}

export default ProductsDetails
