'use client'
import Link from 'next/link'
import React from 'react'

const TabSection = () => {
  return (
    <div className="flex justify-between items-center fixed top-0 right-0 left-0 w-full px-4 bg-transparent backdrop-filter backdrop-blur-md z-30 pt-5">
      <div className="py-1 px-3 rounded-2xl cursor-pointer text-xl relative z-10">
        <Link href={'/#hero'}>Hero</Link>
      </div>
      <div className="text-xl py-1 px-3 rounded-2xl">
        <Link href={'/#about'}>About</Link>
      </div>
      <div className="text-xl py-1 px-3 rounded-2xl">
        <Link href={'/#projects'}>Projects</Link>
      </div>
      <div className="text-xl py-1 px-3 rounded-2xl">
        <Link href={'/#contact'}>Contact</Link>
      </div>
    </div>
  )
}

export default TabSection
