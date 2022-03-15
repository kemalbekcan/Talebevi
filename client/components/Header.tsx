import Image from 'next/image';
import AddProperty from '@/buttons/AddProperty'
import { VscArrowSwap, VscHeart } from "react-icons/vsc";
import { FaRegUser } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";

function Header() {
    return (
        <header className="landing-page-navbar">
        <div className="landing-page-navbar-container">
          <div className="landing-page-navbar-container-logo">
            <Image src="/Majengoo.svg" width="150px" height="25px" alt="logo" />
          </div>
          <nav className="landing-page-navbar-container-lists">
            <ul className="landing-page-navbar-container-lists-list">
              <li className="landing-page-navbar-container-lists-list-item --active">
                <a
                  href="#"
                  className="landing-page-navbar-container-lists-list-item__link"
                >
                  Home
                </a>
              </li>
              <li className="landing-page-navbar-container-lists-list-item">
                <a
                  href="#"
                  className="landing-page-navbar-container-lists-list-item__link"
                >
                  About
                </a>
              </li>
              <li className="landing-page-navbar-container-lists-list-item">
                <a
                  href="#"
                  className="landing-page-navbar-container-lists-list-item__link"
                >
                  Property
                </a>
              </li>
              <li className="landing-page-navbar-container-lists-list-item">
                <a
                  href="#"
                  className="landing-page-navbar-container-lists-list-item__link"
                >
                  Pages
                </a>
              </li>
              <li className="landing-page-navbar-container-lists-list-item">
                <a
                  href="#"
                  className="landing-page-navbar-container-lists-list-item__link"
                >
                  Blog
                </a>
              </li>
              <li className="landing-page-navbar-container-lists-list-item">
                <a
                  href="#"
                  className="landing-page-navbar-container-lists-list-item__link"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="landing-page-navbar-container-settings">
            <ul className="landing-page-navbar-container-settings-lists">
              <li className='landing-page-navbar-container-settings-lists-list'>
                <a href="" className='landing-page-navbar-container-settings-lists-list__item'><VscArrowSwap /></a>
                <div><span>0</span></div>
              </li>
              <li className='landing-page-navbar-container-settings-lists-list'>
                <a href="" className='landing-page-navbar-container-settings-lists-list__item'><VscHeart /></a>
                <div><span>0</span></div>
              </li>
              <li className='landing-page-navbar-container-settings-lists-list'>
                <a href="" className='landing-page-navbar-container-settings-lists-list__item'><FaRegUser /></a>
              </li>
              <li className='landing-page-navbar-container-settings-lists-list'>
                <a href="" className='landing-page-navbar-container-settings-lists-list__item'><BsCart4 /></a>
                <div><span>0</span></div>
              </li>
              <li>
                  <AddProperty message={"Add Property"} />
              </li>
            </ul>
          </div>
        </div>
      </header>
    )
}

export default Header