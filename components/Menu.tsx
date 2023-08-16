'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import CartIcon from './CartIcon'

const links = [
    { id: 1, title: "Homepage", url: "/" },
    { id: 2, title: "Menu", url: "/" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 4, title: "Contact", url: "/" },
]

const Menu = () => {
    const [open, setOpen] = useState(false);

    const user = false;

    return (
        <div>
            {!open ? (
                <Image src='/hamburger.png' alt='Hamburger Menu' width={30} height={30} onClick={() => setOpen(!open)} />
            ) : (
                <Image src='/close.png' alt='Hamburger Menu' width={30} height={30} onClick={() => setOpen(!open)} />
            )}
            {open && <div className='bg-red-500 text-white absolute left-0 top-28 h-[calc(100vh-7rem)] w-full flex items-center justify-center flex-col text-3xl gap-8 z-10'>
                {links.map(item => (
                    <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>{item.title}</Link>
                ))}
                {!user ?
                    (<Link href='/login' onClick={() => setOpen(false)}>Login</Link>)
                    :
                    (<Link href='/orders' onClick={() => setOpen(false)}>Orders</Link>)
                }
                <Link href="/cart" onClick={() => setOpen(false)}>
                    <CartIcon />
                </Link>
            </div>}

        </div>
    )
}

export default Menu