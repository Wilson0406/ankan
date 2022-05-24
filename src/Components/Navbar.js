import React from 'react'

function Navbar() {
  return (
    <div className="navbar">
        <ul className="nav-ul">
            <li className="nav-item"><a href="#"><i className="fa-solid fa-house home-icon"></i></a></li>
            <li className="nav-item"><a href="#">INDIA</a></li>
            <li className="nav-item"><a href="#">INTERNATIONAL</a></li>
            <li className="nav-item"><a href="#">POLITICAL</a></li>
            <li className="nav-item"><a href="#">GOVERNANCE</a></li>
            <li className="nav-item"><a href="#">ECONOMY</a></li>
            <li className="nav-item"><a href="#">SPORTS</a></li>
            <li className="nav-item"><a href="#">SCIENCE&TECH</a></li>
            <li className="nav-item"><a href="#">VIDEOS</a></li>
            <li className=" nav-item nav-dropdown">
                <a href="#">GET INVOVED</a>
                <ul className="dropdown-ul">
                    <li className="dropdown-items"><a href='#'>HealthCare</a></li>
                    <li className="dropdown-items"><a href='#'>Eduction</a></li>
                    <li className="dropdown-items"><a href='#'>Social Impact</a></li>
                    <li className="dropdown-items"><a href='#'>Empowerment</a></li>
                    <li className="dropdown-items"><a href='#'>Environment</a></li>
                    <li className="dropdown-items"><a href='#'>Fatafat News</a></li>
                    <li className="dropdown-items"><a href='#'>Autring's Blog</a></li>
                    <li className="dropdown-items"><a href='#'>Career</a></li>
                    <li className="dropdown-items"><a href='#'>Connect with us</a></li>
                    <li className="dropdown-items"><a href='#'>support to Journalism</a></li>
                </ul>
            </li>
            <li><a href="#" className='search_btn'><i className="fa-solid fa-magnifying-glass"></i></a></li>
        </ul>
    </div>
    
  )
}

export default Navbar