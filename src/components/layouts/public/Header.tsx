'use client'
import React from 'react'
import Logo from './../../shared/Logo'

import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'

function Header() {
  return (
    <header>
      <div className="flex justify-between items-center p-4">
        <div className="flex justify-start items-center gap-x-2">
          <BiMenuAltRight size={24} />
          <Logo
            width={70}
            height={70}
          />
        </div>
        <div className="border border-zinc-400 flex justify-center items-center p-2 rounded-xl">
          <AiOutlineUser size={24} />
        </div>
      </div>
    </header>
  )
}

export default Header