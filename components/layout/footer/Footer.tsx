
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-primary text-white py-6'>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className='text-center md:text-left space-y-4'>
                    <Link href="/" className='text-2xl text-white font-bold'>
                        Logo
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, cupiditate.</p>
                </div>
<nav className='md:mt-o mt-16 space-x-4'>
     <Link href="/home" className='text-white font-bold hover:underline'> Home</Link>
                    <Link href="/about" className='text-white font-bold hover:underline'> About</Link>
                    <Link href="/blog" className='text-white font-bold hover:underline'> Blog</Link>
                    <Link href="/contact" className='text-white font-bold hover:underline'> Contact</Link>
</nav>
            </div>


        </div>
    )
}

export default Footer