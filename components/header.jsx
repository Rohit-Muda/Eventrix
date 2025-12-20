"use client";

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Button } from './ui/button';
import { Authenticated,Unauthenticated } from 'convex/react';   
import {BarLoader} from "react-spinners"
const Header = () => {
  return (
    <>
        <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl z-20 border-b">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* logo */}
                <Link href={"/"} className="flex items-center">
                    <Image 
                        src="/spott.png" 
                        alt="Eventrix Logo" 
                        width={500} 
                        height={500}
                        className='w-full h-11'
                    />
                </Link>
                {/* Search &Location - Desktop Only */}

                {/* Right Side Actions */}
                <div className='flex items-center'>
                    <Authenticated>
                        {/* Create Event */}
                        <UserButton />
                    </Authenticated>
                    <Unauthenticated>
                        <SignInButton mode='modal' >
                            <Button size="sm">Sign in</Button>
                        </SignInButton>
                    </Unauthenticated>
                    
                </div>
            </div>

            {/* mobile Search ad Location - Below Header */}

            {/* Loader */}
            <div className='absolute botom-0 lef-0 w-full'>
                <BarLoader width={"100%"} color="#a855f7"/>

            </div>
        </nav>

        {/* Modals */}

    </>
  )
}

export default Header;