
import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {CgClose} from 'react-icons/cg'
import './Navbar.css'
function Navbar() {

    const [click, setClick]= useState(false)
    const [showButton, setShowButton]=useState(true)

    const handleMenuBtnClick=()=>{
        setClick(!click)
    }
    const showBurger = ()=>{
        if (window.innerWidth <=960){
            setShowButton(true)

        } else{
            setClick(false)
            setShowButton(false)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', showBurger)
        return () => {
            window.removeEventListener('resize', showBurger)
        }
    }, [])

    return (
        <div className="navbar">
            <div className="logo-container">
                <h1 className="logo">LOGO</h1>
            </div>
            <ul className={click? "mobile-menu full":"nav-items"}>
                <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
                <button className={click? "nav-item signup-btn":" hidden"}>
                    SIGN UP
                </button>
            </ul>
            <button className={click? "signup-btn":"hidden"}>
                SIGN UP
            </button>

            <div onClick={handleMenuBtnClick} className={showButton?"menu-btn":"hidden"}>
                {click ? <CgClose/>: <FaBars/>}
            </div>
            
            
        </div>
    )
}

export default Navbar
