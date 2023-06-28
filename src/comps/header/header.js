'use client'

import Link from 'next/link'
import React, {useState} from 'react'
import {BiDownArrowAlt} from 'react-icons/bi'
const Header = () => {
    const render = () => {
        return (
            <>
            <nav className={"fixed-top navbar py-4 navbar-expand-lg bg-dark m-3 rounded shadow-lg "}>
            <div className="container-fluid">
                <Link href='/' className='link-button text-white fs-3 pe-2 text-decoration-underline' >
                    PLH Photography
                </Link>
              <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <BiDownArrowAlt/>
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item px-3">
                        <Link href='/about' className='nav-link link-button text-white fs-5'>
                            About
                        </Link>
                    </li>
                    <li className="nav-item px-3">
                        <Link href='/gallery' className='nav-link link-button text-white fs-5' >
                            Gallery
                        </Link>
                    </li>
                     <li className="nav-item px-3">
                        <Link href='/contact' className='nav-link link-button text-white fs-5' >
                            Contact
                        </Link>
                    </li>
                </ul>
                <span className="navbar-text text-white">
                    <Link href='/' className='nav-link link-button text-white fs-5 fw-bold pe-3' >
                            Login
                    </Link>
                </span>
              </div>
            </div>
          </nav>  
          <div className="header-h"></div>
          </>
        )
    }

    return (
            render()
    )
}

export default Header