import Image from 'next/image';
import AddProperty from '@/buttons/AddProperty'
function Header() {
    return (
        <header className="landing-page-navbar">
        <div className="landing-page-navbar-container">
          <div className="landing-page-navbar-container-logo">
            <Image src="/talebevi.svg" width={157} height={40} />
          </div>
          <nav className="landing-page-navbar-container-lists">
            <ul className="landing-page-navbar-container-lists-list">
              <li className="landing-page-navbar-container-lists-list-item">
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
              <li>
                <a href="">Icon</a>
              </li>
              <li>
                <a href="">Icon</a>
              </li>
              <li>
                <a href="">Icon</a>
              </li>
              <li>
                <a href="">Icon</a>
              </li>
              <li>
                <a href="">Icon</a>
              </li>
              <li>
                <a href="">
                  <AddProperty message={"Add Property"} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    )
}

export default Header