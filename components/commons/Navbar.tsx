import { ChevronLeft, ChevronRight, Search, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const navLinks = [
    { title: 'Categories' },
    { title: 'Sale' },
    { title: 'Clearance' },
    { title: 'New stock' },
    { title: 'Trending' },
]

const Navbar = () => {
    return (
        <>
            <div className='h-24 flex flex-col gap-5 px-10 py-5'>

                <div className='ml-auto flex gap-5'>
                    <Link
                        className='text-sm'
                        href={'/'}>
                        Help
                    </Link>
                    <Link
                        className='text-sm'
                        href={'/'}>
                        Orders and Return
                    </Link>
                    <Link
                        className='text-sm'
                        href={'/signup'}>
                        SignUp
                    </Link>
                </div>

                <div className='flex items-center justify-between'>
                    <Link
                        href={'/'}
                        className='text-2xl font-bold'
                    >
                        ECOMMERCE
                    </Link>
                    <div className='flex gap-5'>
                        {
                            navLinks.map((link) => (
                                <Link
                                    href={'/'}
                                >
                                    {link.title}
                                </Link>
                            ))
                        }
                    </div>

                    <div className='flex gap-10'>
                        <Search />
                        <ShoppingCart />
                    </div>
                </div>
            </div>

            <div className='py-2 mt-5 gap-5 flex items-center justify-center bg-neutral-100'>
                <ChevronLeft />
                <h1 className='text-sm'>
                    Get 10% off on business sign up
                </h1>
                <ChevronRight />
            </div>
        </>
    )
}

export default Navbar