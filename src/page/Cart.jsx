
import Container from '../components/Container'
import React, { useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

import { ImCross } from "react-icons/im";

import { useDispatch, useSelector } from 'react-redux';
import { productDecrement, productIncrement, removeProduct } from '../slice/ProductSlice';
import { ApiData } from '../components/ContextApi'


const Cart = () => {

  let { info, loading } = useContext(ApiData);
  let cartInfo = useSelector((state) => state.product.cartItem)
  let dispatch = useDispatch()

  let handleIncrement = (i) => {
    dispatch(productIncrement(i))

  }

  let handleDecrement = (i) => {
    dispatch(productDecrement(i))
  }

  let handleProductRemove = (i) => {
    dispatch(removeProduct(i))

  }

  let {totalPrice, totalQuantity} = cartInfo.reduce((acc, item)=>{
    acc.totalPrice += item.price * item.qun
    acc.totalQuantity += item.qun
  


  
    return acc
    
  },{totalPrice:0, totalQuantity:0})

  return (
   <section>
    <Container>
    <div className="flex items-center bg-[#F5F5F3] py-[32px] pl-3 border">
          <div className="w-1/4">
            <h4 className="font-DMs font-bold text-[16px] text-[#262626] ">
              Product
            </h4>
          </div>
          <div className="w-1/4">
            <h4 className="font-DMs font-bold text-[16px] text-[#262626] ">
              Price
            </h4>
          </div>
          <div className="w-1/4">
            <h4 className="font-DMs font-bold text-[16px] text-[#262626] ">
              Quantity
            </h4>
          </div>
          <div className="w-1/4">
            <h4 className="font-DMs font-bold text-[16px] text-[#262626] ">
              Total
            </h4>
          </div>
        </div>

        {cartInfo.map((item, i) => (

        <div className="my-5">
            <div className="flex items-center  py-[32px] pl-3 border">
              <div className="w-1/4 flex gap-10 items-center">
          <button onClick={()=>handleProductRemove(i)}>
          <ImCross  className='text-[20px] font-bold '/>
          </button>
                <img className='w-[20%]' src={item.thumbnail} alt="" />
                <h4 className="font-DMs font-bold text-[16px] text-[#262626] ">{item.title}</h4>
              </div>
              <div className="w-1/4">
                <h4 className="font-DMs font-bold text-[20px] text-[#262626] ">
                  ${item.price}
                </h4>
              </div>
              <div className="w-1/4">
                <button onClick={() => handleDecrement(i)} className='font-DMs font-bold text-[30px] text-[#262626]  px-5'>
                  -

                </button>
                <span className='font-DMs font-bold text-[30px] text-[#262626]  px-5'>{item.qun}</span>
                <button onClick={() => handleIncrement(i)} className='font-DMs font-bold text-[30px] text-[#262626]  px-5'>
                  +

                </button>
              </div>
              <div className="w-1/4">
                <h4 className="font-DMs font-bold text-[20px] text-[#262626] ">
                  ${(item.price * item.qun).toFixed(2)}
                </h4>
              </div>
            </div>



          </div>
            ))}
    </Container>
   </section>
  )
}

export default Cart
