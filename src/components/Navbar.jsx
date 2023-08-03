import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
   <section>
     <div className='container'>
     <nav className="navbar navbar-expand-lg pt-2">
     <div className="container-fluid">
    <a class="navbar-brand" href="/">
        <img src="../../../assets/colored-logo3.png" alt="..." className='img-fluid me-4'
        style={{width:"6rem", height:"3rem"}}
         />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse mt-4" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-6 fw-medium ">
        <li className="nav-item me-4 ">
          <Link href="#services" class="nav-link text-color active font-weight-600"> Services
          </Link>
        </li>
        <li className="nav-item me-4 ">
          <Link href="#about" class="nav-link text-color active"> About
          </Link>
        </li>
    </ul>
         <button className="btn text-white bg-color fw-medium py-2 px-4 shadow-lg" type="submit">
          <a href="/getStarted">Get Started</a>
         </button>
     </div>
     </div>
    </nav>
    </div>
   </section>
  )
}

export default Navbar