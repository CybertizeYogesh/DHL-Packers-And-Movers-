import Link from "next/link";

export default function Header() {
  return (
    <>
      {/* Top Contact Header Start */}
      <div className="top-header py-2 text-dark" style={{ backgroundColor: "var(--primary-color, #FFD000)", color: "#000000" }}>
        <div className="container-fluid px-lg-5 px-2 px-sm-3">
          <div className="top-header-content d-flex align-items-center justify-content-lg-between justify-content-center flex-wrap flex-lg-nowrap">
            <div className="top-contact-item top-contact-address d-flex align-items-center justify-content-center text-center text-lg-start">
              <i className="fas fa-map-marker-alt me-1 me-sm-2 text-dark flex-shrink-0"></i>
              <span className="text-dark fw-medium text-nowrap">
                <span className="d-none d-sm-inline">Pan-India Services</span>
                <span className="d-inline d-sm-none">Pan India</span>
              </span>
            </div>
            <div className="top-contact-group d-flex align-items-center justify-content-center flex-wrap flex-sm-nowrap">
              <div className="top-contact-item top-contact-phone d-flex align-items-center justify-content-center px-1 px-sm-2">
                <i className="fas fa-phone-alt me-1 me-sm-2 text-dark flex-shrink-0"></i>
                <a href="tel:9390891355" className="text-decoration-none text-dark fw-medium text-nowrap">+91 93908 91355</a>
              </div>
              <div className="top-contact-item top-contact-email d-flex align-items-center justify-content-center px-1 px-sm-2">
                <i className="fas fa-envelope me-1 me-sm-2 text-dark flex-shrink-0"></i>
                <a href="mailto:info@durgahomelogistics.com" className="text-decoration-none text-dark fw-medium text-nowrap">info@durgahomelogistics.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Top Contact Header End */}

      {/* Header Start */}
      <header className="main-header" style={{ marginTop: "20px" }}>
        <div className="header-sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              {/* Logo Start */}
              <Link className="navbar-brand" href="/">
                <img
                  className="header-logo-default"
                  src="/images/dhl-logo.webp"
                  style={{ width: "300px", maxWidth: "100%", height: "auto" }}
                  alt="DHL Packers And Movers"
                />
                <img
                  className="header-logo-sticky"
                  src="/images/dhl-logo-sticky.webp"
                  style={{ width: "300px", maxWidth: "100%", height: "auto" }}
                  alt="DHL Packers And Movers"
                />
              </Link>
              {/* Logo End */}

              {/* Main Menu Start */}
              <div className="collapse navbar-collapse main-menu">
                <div className="nav-menu-wrapper">
                  <ul className="navbar-nav mr-auto" id="menu">
                    <li className="nav-item">
                      <Link className="nav-link" href="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/about">About Us</Link>
                    </li>
                    <li className="nav-item submenu">
                      <Link className="nav-link" href="/services">Services</Link>
                      <ul>
                        <li className="nav-item">
                          <Link className="nav-link" href="/services">All Services</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/services/household-goods-shifting">Household Goods Shifting</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/services/office-goods-shifting">Office Goods Shifting</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/services/loading-and-unloading">Loading and Unloading</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/services/packing-and-unpacking-services">Packing & Unpacking</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/services/moving-services">Moving Services</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/services/car-transportation">Car Transportation</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" href="/services/bike-transportation">Bike Transportation</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/faq">Faq</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/gallery">Gallery</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/blogs">Blogs</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>

                {/* Header Btn Start */}
                <div className="header-btn">
                  <Link href="/contact" className="btn-default btn-highlighted">get started</Link>
                </div>
                {/* Header Btn End */}
              </div>
              {/* Main Menu End */}
              <div className="navbar-toggle"></div>
            </div>
          </nav>
          <div className="responsive-menu"></div>
        </div>
      </header>
      {/* Header End */}
      {/* Services dropdown hover styling ensuring full visibility in both scrolled and static states */}
      <style>{`
        .main-menu ul.navbar-nav li.submenu ul,
        .main-menu ul ul,
        header.main-header .header-sticky.active .main-menu ul ul,
        header.main-header .header-sticky.active .main-menu ul.navbar-nav li.submenu ul {
          background: #E5252A !important;
          border-radius: 12px !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35) !important;
          padding: 8px 0 !important;
          min-width: 280px !important;
          width: max-content !important;
          z-index: 99999 !important;
        }
        .main-menu ul.navbar-nav li.submenu ul li a,
        .main-menu ul ul li a,
        header.main-header .header-sticky .main-menu ul ul li a,
        header.main-header .header-sticky.active .main-menu ul ul li a,
        header.main-header .header-sticky.active .main-menu ul.navbar-nav li.submenu ul li a {
          color: #FFFFFF !important;
          font-size: 15px !important;
          font-weight: 500 !important;
          padding: 10px 22px !important;
          display: block !important;
          white-space: nowrap !important;
          transition: all 0.2s ease-in-out !important;
          background-color: transparent !important;
          text-decoration: none !important;
          border-left: 3px solid transparent !important;
        }
        .main-menu ul.navbar-nav li.submenu ul li a:hover,
        .main-menu ul.navbar-nav li.submenu ul li a:focus,
        .main-menu ul ul li a:hover,
        .main-menu ul ul li a:focus,
        header.main-header .header-sticky .main-menu ul ul li a:hover,
        header.main-header .header-sticky .main-menu ul ul li a:focus,
        header.main-header .header-sticky.active .main-menu ul ul li a:hover,
        header.main-header .header-sticky.active .main-menu ul ul li a:focus,
        header.main-header .header-sticky.active .main-menu ul.navbar-nav li.submenu ul li a:hover,
        header.main-header .header-sticky.active .main-menu ul.navbar-nav li.submenu ul li a:focus {
          color: #FFD000 !important;
          background-color: rgba(0, 0, 0, 0.25) !important;
          padding: 10px 22px 10px 25px !important;
          border-left: 3px solid #FFD000 !important;
          text-decoration: none !important;
        }
      `}</style>
    </>
  );
}
