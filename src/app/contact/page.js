import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Best packers and movers hyderabad | DHL Packers And Movers",
  description: "Contact DHL Packers And Movers for professional household shifting services near me, vehicle moving, and pet care services in Hyderabad. Call +91 93908 91355.",
};

export default function Page() {
  return (
    <>
      {/* Page Header Start */}
    <div className="page-header parallaxie">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    {/* Page Header Box Start */}
                    <div className="page-header-box">
                        <h1 className="text-anime-style-2" data-cursor="-opaque">Contact Us</h1>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                            </ol>
                        </nav>
                    </div>
                    {/* Page Header Box End */}
                </div>
            </div>
        </div>
    </div>
    {/* Page Header End */}


    {/* Page Contact Us Start */}
    <div className="page-contact-us">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4">
                    {/* Contact Us Content Start */}
                    <div className="contact-us-content">
                        {/* Section Title Start */}
                        <div className="section-title section-title-center">
                            <h3 className="wow fadeInUp">contact form</h3>
                            <h2 className="text-anime-style-2" data-cursor="-opaque">Get in to <span>touch</span></h2>
                        </div>
                        {/* Section Title End */}

                        {/* Contact Info List Start */}
                        <div className="contact-info-list">
                            {/* Contact Info Item Start */}
                            <div className="contact-info-item wow fadeInUp" data-wow-delay="0.2s">
                                <div className="icon-box">
                                    <img src="/images/icon-phone.svg" alt="" />
                                </div>
                                <div className="contact-info-content">
                                    <p>call to question</p>
                                    <h6><a className="text-white" href="tel:9390891355">+91 93908 91355</a></h6>
                                </div>
                            </div>
                            {/* Contact Info Item End */}

                            {/* Contact Info Item Start */}
                            <div className="contact-info-item wow fadeInUp" data-wow-delay="0.4s">
                                <div className="icon-box">
                                    <img src="/images/icon-mail.svg" alt="" />
                                </div>
                                <div className="contact-info-content">
                                    <p>send e-mail</p>
                                    <h6><a className="text-white" href="mailto:info@durgahomelogisticsdomain.com">info@durgahomelogisticsdomain.com</a></h6>
                                </div>
                            </div>
                            {/* Contact Info Item End */}

                            {/* Contact Info Item Start */}
                            <div className="contact-info-item wow fadeInUp" data-wow-delay="0.6s">
                                <div className="icon-box">
                                    <img src="/images/icon-location.svg" alt="" />
                                </div>
                                <div className="contact-info-content">
                                    <p>visit anytime</p>
                                    <h6 className="text-white">Hyderabad Office: 33/2, Manikonda Rd, opposite K N Gupta Group Hotels Hotel Castle, Shirdi Sai Nagar, Hyderabad, Manikonda, Telangana 500089</h6>
                                </div>
                            </div>
                            {/* Contact Info Item End */}
                        </div>
                        {/* Contact Info List End */}
                    </div>
                    {/* Contact Us Content End */}
                </div>

                <div className="col-lg-8">
                    <ContactForm />
                </div>
            </div>
        </div>
    </div>
    {/* Page Contact Us End */}

    {/* Google Map Start */}
    <div className="google-map">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    {/* Google Map Start */}
                    <div className="google-map-iframe">
						
						<iframe src="https://maps.google.com/maps?q=33%2F2%2C%20Manikonda%20Rd%2C%20opposite%20K%20N%20Gupta%20Group%20Hotels%20Hotel%20Castle%2C%20Shirdi%20Sai%20Nagar%2C%20Hyderabad%2C%20Manikonda%2C%20Telangana%20500089&t=&z=15&ie=UTF8&iwloc=&output=embed" style={{border: 0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
						
                    </div>
                    {/* Google Map End */}
                </div>
            </div>
        </div>
    </div>
    {/* Google Map End */}




        {/* Our Testimonials Section Start */}
        <div className="our-testimonials">
            <div className="container">
                <div className="row section-row">
                    <div className="col-lg-12">
                        {/* Section Title Start */}
                        <div className="section-title section-title-center">
                            <h3 className="wow fadeInUp">testimonials</h3>
                            <h2 className="text-anime-style-2" data-cursor="-opaque">Words of appreciation from <span>our customers</span></h2>
                        </div>
                        {/* Section Title End */}
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        {/* Testimonial Slider Start */}
                        <div className="testimonial-slider">
                            <div className="swiper">
                                <div className="swiper-wrapper" data-cursor-text="Drag">
                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="testimonial-item">
                                            <div className="author-content">
                                                <div className="author-title">
                                                    <h3>Rohit Sharma, IT Professional</h3>
                                                </div>
                                                <div className="author-rating">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>Shifting my household from Hyderabad to Bangalore was a breeze with DHL Packers And Movers. Their household shifting services are top-notch. Highly recommended!</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}

                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="testimonial-item">
                                            <div className="author-content">
                                                <div className="author-title">
                                                    <h3>Priya Menon, HR Manager</h3>
                                                </div>
                                                <div className="author-rating">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>I was nervous about moving my delicate items, but their packing and unpacking services were absolute perfection. Everything arrived in pristine condition!</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}

                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="testimonial-item">
                                            <div className="author-content">
                                                <div className="author-title">
                                                    <h3>Amit Patel, Business Owner</h3>
                                                </div>
                                                <div className="author-rating">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>We shifted our entire corporate office from Hyderabad to Mumbai. The coordination of their office moving services was exceptionally professional and fast.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}

                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="testimonial-item">
                                            <div className="author-content">
                                                <div className="author-title">
                                                    <h3>Neha Kapoor, Interior Designer</h3>
                                                </div>
                                                <div className="author-rating">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>Their loading and unloading team was incredibly efficient. They handled our heavy lockers and furniture with absolute safety and systematic stacking. Great job!</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}

                                    {/* Testimonial Slide Start */}
                                    <div className="swiper-slide">
                                        <div className="testimonial-item">
                                            <div className="author-content">
                                                <div className="author-title">
                                                    <h3>Sachin Reddy, Student</h3>
                                                </div>
                                                <div className="author-rating">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                            <div className="testimonial-content">
                                                <p>Used their vehicle transportation service to move my bike from Hyderabad to Bangalore. The safe packing and timely delivery were amazing. Highly recommend!</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Testimonial Slide End */}
                                </div>
                                <div className="testimonial-btn">
                                    <div className="testimonial-btn-prev"></div>
                                    <div className="testimonial-btn-next"></div>
                                </div>
                            </div>
                        </div>
                        {/* Testimonial Slider End */}
                    </div>
                </div>
            </div>
        </div>
        {/* Our Testimonials Section End */}
    </>
  );
}
