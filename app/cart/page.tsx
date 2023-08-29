"use client"
import Image from 'next/image'
import React from 'react'
import { useCartStore } from '../utils/store';

const CartPage = () => {
    const { products, totalItems, totalPrice, removeFromCart } = useCartStore();
    return (
        <div className='p-4 lg:p-20 xl:px-40 md:h-[calc(100vh-9rem)] flex items-center justify-center'>
            <div className='flex flex-col text-red-500 md:flex-row w-full'>
                <div className='md:flex-1 md:px-4'>
                    {products.map((item) => (
                        <div className='flex items-center justify-between md:mb-2'>
                            {item.img &&
                                <Image src={item.img} alt='Pizza' width={100} height={100} />
                            }
                            <div>
                                <h1 className='uppercase font-bold text-xl'>{item.title}</h1>
                                <span className='font-semibold'>{item.optionTitle}</span>
                            </div>
                            <div className='font-bold'>${item.price}</div>
                            <div className='font-semibold cursor-pointer' onClick={() => removeFromCart(item)}>X</div>
                        </div>
                    ))}

                </div>
                <div className='md:flex-1'>
                    <div className='py-20 bg-red-100 px-4'>
                        <div className='flex items-center justify-between py-2'>
                            <p>Subtotal ({totalItems})</p>
                            <p>${totalPrice}</p>
                        </div>
                        <div className='flex items-center justify-between py-2'>
                            <p>Service Cost</p>
                            <p>$0.00</p>
                        </div>
                        <div className='flex items-center justify-between py-2'>
                            <p>Delivery Cost</p>
                            <p className='text-green-500'>FREE!</p>
                        </div>
                        <div className='flex items-center justify-between py-2'>
                            <p>TOTAL</p>
                            <p className='font-bold'>${totalPrice}</p>
                        </div>
                        <button className='bg-red-500 text-white px-6 py-2 rounded-md float-right'>CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage