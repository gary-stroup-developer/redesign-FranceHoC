import React from 'react'
import Link from 'next/link';

export default function NavbarMenu({hidden}) {
  return (
    <ul className={hidden ? "hidden" : "row-start-3 row-span-3 col-start-2 md:flex md:justify-evenly md:row-start-2"}>
        <li className='hover:text-red-600 hover:bg-black'><Link href="/">Home</Link></li>
        <li className='hover:text-red-600 hover:bg-black'><Link href="/about">About</Link></li>
        <li className='hover:text-red-600 hover:bg-black'><Link href="/menu">Menu</Link></li>
        <li className='hover:text-red-600 hover:bg-black'><Link href="/order">Online Order</Link></li>
    </ul>
  )
}
