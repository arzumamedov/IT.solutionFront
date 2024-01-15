import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <nav>
                <div className='navTop'>
                    <div className='navTopText'>
                        <p><span>Now Hiring:</span> Are you a driven and motivated 1st Line IT Support Engineer?</p>
                        <div className='icons'>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-linkedin-in"></i>
                            <i class="fa-brands fa-youtube"></i>
                        </div>
                    </div>
                </div>
                <div className='navBottom'>
                    <div className="navBottomText">
                        <div className="navBottomTextLeft">
                            <Link to={"/"}><img src="https://preview.colorlib.com/theme/itlock/assets/img/logo/logo.png" alt="" /></Link>
                            <Link to={"/"}><p>Home</p></Link>
                            <Link to={"/add"}><p>Add</p></Link>
                            <Link to={"/basket"}><p>Basket</p></Link>
                            <p>Case Study</p>
                            <p>Blog</p>
                            <p>Contact</p>
                        </div>
                        <div className='navBottomTextRight'>
                            <button>Free Quote</button>
                            <i class="fa-solid fa-headphones"></i>
                            <div className='pText'>
                                <p className='p1'>Have any Question?</p>
                                <p className='p2'>Call: 10 (78) 837 3647</p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar