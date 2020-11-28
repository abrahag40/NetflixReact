import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {

    const [show, sethandleShow] = useState()

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                sethandleShow(true)
            } else {
                sethandleShow(false)
            }
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <img className="nav__logo" src="https://assets.nflxext.com/en_us/layout/ecweb/common/logo-shadow2x.png" />
            <img className="nav__avatar" src="https://occ-0-29-987.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABTnff3KYbt0ABMaZvvVs6f7a3ebfrMkPDpQy7SpcBWF5w1HSYb1CkHPhJMrAvs2hYXD4kARaXuIrJx6kjW_6lKI.png?r=b97" alt=""/>
        </div>
    )
}

export default Nav
