import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
    return (
        <Link href='/cart' className='flex items-center gap-1'>
            <span>Cart (3)</span>
            <div className='relative w-8 h-8'>
                <Image src='/shopping-cart.png' alt='Cart Icon' width={30} height={30} />
            </div>
        </Link>
    )
}

export default CartIcon