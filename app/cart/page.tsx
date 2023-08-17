import Image from 'next/image'
import React from 'react'

const CartPage = () => {
    return (
        <div className='p-4 lg:p-20 xl:px-40 md:h-[calc(100vh-9rem)] flex items-center justify-center'>

            <div className='flex flex-col text-red-500 md:flex-row w-full'>
                <div className='md:flex-1 md:px-4'>
                    <div className='flex items-center justify-between md:mb-2'>
                        <Image src='/p3.png' alt='Pizza' width={100} height={100} />
                        <div>
                            <h1 className='uppercase font-bold text-xl'>sicilian pizza</h1>
                            <span className='font-semibold'>Large</span>
                        </div>
                        <div className='font-bold'>$24.90</div>
                        <div className='font-semibold'>X</div>
                    </div>
                    <div className='flex items-center justify-between md:mb-2'>
                        <Image src='/p4.png' alt='Pizza' width={100} height={100} />
                        <div>
                            <h1 className='uppercase font-bold text-xl'>bacon deluxe</h1>
                            <span className='font-semibold'>Exta BBQ sauce</span>
                        </div>
                        <div className='font-bold'>$24.90</div>
                        <div className='font-semibold'>X</div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <Image src='/p5.png' alt='Pizza' width={100} height={100} />
                        <div>
                            <h1 className='uppercase font-bold text-xl'>p. arrabbiata</h1>
                            <span className='font-semibold'>Large</span>
                        </div>
                        <div className='font-bold'>$24.90</div>
                        <div className='font-semibold'>X</div>
                    </div>
                </div>
                <div className='md:flex-1'>
                    <div className='py-20 bg-red-100 px-4'>
                        <div className='flex items-center justify-between py-2'>
                            <p>Subtotal (3items)</p>
                            <p>$81.70</p>
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
                            <p className='font-bold'>$81.70</p>
                        </div>
                        <button className='bg-red-500 text-white px-6 py-2 rounded-md float-right'>CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage