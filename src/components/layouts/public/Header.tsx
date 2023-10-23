'use client'
import React from 'react'
import Logo from './../../shared/Logo'

import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineUser } from 'react-icons/ai'

import GetPhoneModal from './../../auth/GetPhoneModal'
import Link from 'next/link'

function Header() {

  const openModal = () => {
    let modal: any = document?.getElementById('my_modal_2');
    modal.showModal();
  }

  return (
    <header>
      <div className="flex justify-between items-center p-4 lg:hidden">
        <div className="flex justify-start items-center gap-x-2">
          <BiMenuAltRight size={24} />
          <Logo
            width={70}
            height={70}
          />
        </div>
        <div onClick={() => openModal()} className="border border-zinc-400 flex justify-center items-center p-2 rounded-xl cursor-pointer">
          <AiOutlineUser size={24} />
        </div>
        <GetPhoneModal />
      </div>
      <div className="hidden lg:flex lg:justify-between lg:items-center lg:p-4">
        <Logo
          width={70}
          height={70}
        />
        <ul className="flex justify-between items-center text-xs gap-x-4">
          <li>
            <Link href='/'>
              <p>خانه</p>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <p>خدمات</p>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <p>فروش تکی</p>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <p>فروش عمده</p>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <p>فناوران</p>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <p>درباره ما</p>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <p>ارتباط با ما</p>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <p>بلاگ</p>
            </Link>
          </li>
        </ul>
        <button className="btn btn-primary bg-[#6E3FF3]">
          <AiOutlineUser size={24} />
          ورود / عضویت
        </button>
      </div>
    </header>
  )
}

export default Header