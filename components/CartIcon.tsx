"use client"
import { useCartStore } from '@/app/utils/store'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
    const { totalItems } = useCartStore();
    console.log(totalItems)
    return (
        <Link href='/cart' className='flex items-center gap-1'>
            <span>Cart ({totalItems})</span>
            <div className='relative w-8 h-8'>
                <Image src='/shopping-cart.png' alt='Cart Icon' width={30} height={30} />
            </div>
        </Link>
    )
}

export default CartIcon