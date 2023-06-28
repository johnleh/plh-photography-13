'use client'

import React, { useState } from 'react'
import {BiUpArrow, BiCaretUp,BiCaretUpFill} from 'react-icons/bi'
const ArrowButton = ({children,showArrow, onClick}) => {

    
    const [hover, setHover] = useState(false)

    const Arrow = ({children}) => {
        if (showArrow) {
            return (
                <>
                    <div className='row'>
                        {children}
                    </div>
                    <div className='row text-decoration-none text-white'>
                        <BiUpArrow className=''/>
                    </div>
                </>
            )
        } else if (hover) {
            return (
                <>
                    <div className='row'>
                        {children}
                    </div>
                    <div className='row text-decoration-none text-light'>
                        <BiCaretUp/>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div className='row'>
                        {children}
                    </div>
                    <div className='row text-decoration-none text-body-tertiary'>
                        <BiUpArrow/>
                    </div>
                </>
            )
        }
    }


    return (
        <div
             onMouseLeave={() => setHover(false)}
             onMouseOver={() => setHover(true)}>
            <button onClick={onClick} type="button" className="btn btn-link simple-button">
                <Arrow>
                    {children}
                </Arrow>
            </button>
        </div>
    )
}

export default ArrowButton
