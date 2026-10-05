import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Footer Main Start */}
      <footer className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              {/* About Footer start */}
              <div className="about-footer">
                {/* Footer Logo Start */}
                <div className="footer-logo">
                  <img src="/global-logo.webp" alt="DHL Packers And Movers Logo" />
                </div>
                {/* Footer Logo End */}

                {/* Footer Contact Box Start */}
                <div className="about-footer-content">
                  <p style={{ textAlign: "justify" }}>
                    DHL Packers And Movers, located in Hyderabad, offers reliable and professional packing and moving services across India. We specialize in home, office, and vehicle relocation with a focus on safety and timely delivery. Our experienced team uses quality packing materials and the latest techniques to ensure a hassle-free move. Customer satisfaction, transparency, and care are at the heart of everything we do, making us a trusted name in the industry.
                  </p>
                </div>
                {/* Footer Contact Box End */}
              </div>
              {/* About Footer End */}
            </div>

            <div className="col-lg-2">
              {/* Footer Links Start */}
              <div className="footer-links">
                <h3>quick link</h3>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About us</Link></li>
                  <li><Link href="/services">Our Services</Link></li>
                  <li><Link href="/gallery">Our Gallery</Link></li>
                  <li><Link href="/faq">Faq</Link></li>
                  <li><Link href="/blogs">Blogs</Link></li>
                  <li><Link href="/contact">Contact us</Link></li>
                </ul>
              </div>
              {/* Footer Links End */}
            </div>

            <div className="col-lg-3">
              {/* Footer Links Start */}
              <div className="footer-links">
                <h3>Our Services</h3>
                <ul>
                  <li><Link href="/services/household-goods-shifting">Household Goods Shifting</Link></li>
                  <li><Link href="/services/office-goods-shifting">Office Goods Shifting</Link></li>
                  <li><Link href="/services/loading-and-unloading">Loading and Unloading</Link></li>
                  <li><Link href="/services/packing-and-unpacking-services">Packing & Unpacking</Link></li>
                  <li><Link href="/services/moving-services">Moving Services</Link></li>
                  <li><Link href="/services/car-transportation">Car Transportation</Link></li>
                  <li><Link href="/services/bike-transportation">Bike Transportation</Link></li>
                </ul>
              </div>
              {/* Footer Links End */}
            </div>

            <div className="col-lg-3">
              {/* Footer Links Start */}
              <div className="footer-links">
                <h3>contact us</h3>
                {/* Footer Contact Item Start */}
                <div className="footer-contact-item">
                  <div className="icon-box">
                    <img src="/images/icon-location.svg" alt="Location Icon" />
                  </div>
                  <div className="footer-contact-content">
                    <p>Hyderabad Office: 33/2, Manikonda Rd, opposite K N Gupta Group Hotels Hotel Castle, Shirdi Sai Nagar, Hyderabad, Manikonda, Telangana 500089</p>
                  </div>
                </div>
                {/* Footer Contact Item End */}

                {/* Footer Contact Item Start */}
                <div className="footer-contact-item">
                  <div className="icon-box">
                    <img src="/images/icon-mail.svg" alt="Mail Icon" />
                  </div>
                  <div className="footer-contact-content">
                    <p><a href="mailto:info@durgahomelogisticsdomain.com">info@durgahomelogisticsdomain.com</a></p>
                  </div>
                </div>
                {/* Footer Contact Item End */}

                {/* Footer Contact Item Start */}
                <div className="footer-contact-item">
                  <div className="icon-box">
                    <img src="/images/icon-phone.svg" alt="Phone Icon" />
                  </div>
                  <div className="footer-contact-content">
                    <p>
                      <a href="tel:9390891355" className="text-decoration-none">+91 93908 91355</a>
                    </p>
                  </div>
                </div>
                {/* Footer Contact Item End */}
              </div>
              {/* Footer Links End */}
            </div>

            <div className="col-lg-12">
              {/* Footer Copyright Section Start */}
              <div className="footer-copyright">
                {/* Footer Copyright Text Start */}
                <div className="footer-copyright-text">
                  <p>
                    Copyright © 2026 All Rights Reserved by <Link href="/" className="copyright-link">DHL Packers And Movers</Link> &nbsp; | &nbsp; Developed by <a href="https://cybertizegrowth.com/" target="_blank" rel="noopener noreferrer" className="copyright-link">Cybertize Growth</a>
                  </p>
                </div>
                {/* Footer Copyright Text End */}

                {/* Footer Social Link Start */}
                <div className="footer-social-links">
                  <ul>
                    <li><Link href="/#"><i className="fa-brands fa-dribbble"></i></Link></li>
                    <li><Link href="/#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                    <li><Link href="/#"><i className="fa-brands fa-instagram"></i></Link></li>
                  </ul>
                </div>
                {/* Footer Social Link End */}
              </div>
              {/* Footer Copyright Section End */}
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Main End */}

      {/* Floating Action Buttons */}
      <div className="whatsapp">
        <a href="https://api.whatsapp.com/send?phone=919390891355&source=&data=" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>
      <div className="call">
        <a href="tel:9390891355">
          <i className="fa-solid fa-phone"></i>
        </a>
      </div>
    </>
  );
}
