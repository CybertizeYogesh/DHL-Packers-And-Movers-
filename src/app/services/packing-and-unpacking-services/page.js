import Link from "next/link";

export const metadata = {
  title: "Best Packers and Movers Packing & Unpacking | DHL Packers And Movers",
  description: "Premium packing and unpacking services in Hyderabad. We use high-quality materials for household shifting services and office relocation to ensure zero damage.",
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
                        <h1 className="text-anime-style-2" data-cursor="-opaque">Packing and Unpacking Services</h1>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Packing and Unpacking Services</li>
                            </ol>
                        </nav>
                    </div>
                    {/* Page Header Box End */}
                </div>
            </div>
        </div>
    </div>
    {/* Page Header End */}


    {/* Page Service Single Start */}
    <div className="page-service-single">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    {/* Page Single Sidebar Start */}
                    <div className="page-single-sidebar">
                        {/* Page Sidebar Category List Start */}
                        <div className="page-sidebar-catagery-list wow fadeInUp">
                            <h3>Our Services</h3>
                            <ul>
                                <li><Link href="/services/household-goods-shifting">Household Goods Shifting</Link></li>
                                <li><Link href="/services/office-goods-shifting">Office Goods Shifting</Link></li>
                                <li><Link href="/services/loading-and-unloading">Loading and Unloading</Link></li>
                                <li><Link href="/services/packing-and-unpacking-services">Packing and Unpacking Services</Link></li>
                                <li><Link href="/services/moving-services">Moving Services</Link></li>
                                <li><Link href="/services/car-transportation">Car Transportation</Link></li>
                                <li><Link href="/services/bike-transportation">Bike Transportation</Link></li>
                            </ul>
                        </div>
                        {/* Page Sidebar Category List End */}

                        {/* Sidebar CTA Box Start */}
                        <div className="sidebar-cta-box wow fadeInUp" data-wow-delay="0.2s">
                            {/* Sidebar CTA Content Start */}
                            <div className="sidebar-cta-content">
                                <h3>How can we help?</h3>
                                <p>33/2, Manikonda Rd, opposite K N Gupta Group Hotels Hotel Castle, Shirdi Sai Nagar, Hyderabad, Manikonda, Telangana 500089</p>
                                <p><a href="mailto:info@durgahomelogisticsdomain.com">info@durgahomelogisticsdomain.com</a></p>
                            </div>
                            {/* Sidebar CTA Content End */}

                            {/* Sidebar CTA Button Start */}
                            <div className="sidebar-cta-btn" style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                                <a href="tel:9390891355"><img src="/images/icon-phone.svg" alt="" />+91 93908 91355</a>
                            </div>
                            {/* Sidebar CTA Button End */}
                        </div>
                        {/* Sidebar CTA Box End */}
                    </div>
                    {/* Page Single Sidebar End */}
                </div>

                <div className="col-lg-8">
                    {/* Service Single Content Start */}
                    <div className="service-single-contemt">
                        {/* Service Entry Start */}
                        <div className="service-entry">
                            <p className="wow fadeInUp">At DHL Packers And Movers, we understand that packing is the foundation of a successful move. Our expert Packing and Unpacking Services ensure your belongings are safely wrapped, boxed, labeled, and subsequently unpacked at your destination for a secure and stress-free relocation. Whether it's delicate crockery, heavy furniture, electronics, or official documents—we pack and unpack everything with precision and care.

With high-quality materials and trained professionals, we offer packing and unpacking solutions for homes, offices, and industrial needs. Choose from full-service packing and unpacking, partial packing, or custom packing options—whatever suits your requirements and budget.</p>

                            {/* Service Solution Box Start */}
                            <div className="service-solution-box">
                                <h2 className="text-anime-style-2">Your belongings <span>packed and unpacked with care</span></h2>
                                <p className="wow fadeInUp">Our team uses industry-approved packing and unpacking methods to protect your valuables during transit and help you settle in quickly at your new location.</p>

                                {/* Service Entry Step List Start */}
                                <div className="service-solution-steps">
                                    <div className="service-solution-step-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="service-solution-step-box">
                                            <div className="service-solution-step-no">
                                                <h2>01</h2>
                                            </div>
                                            <div className="service-solution-step-content">
                                                <h3>Assessment & Packing Plan</h3>
                                                <p>We evaluate your items and create a packing plan that suits the nature and fragility of your belongings.</p>
                                            </div>
                                        </div>
                                        <div className="icon-box">
                                            <img src="/images/icon-service-solution-step-1.svg" alt="" />
                                        </div>
                                    </div>

                                    <div className="service-solution-step-item active wow fadeInUp" data-wow-delay="0.4s">
                                        <div className="service-solution-step-box">
                                            <div className="service-solution-step-no">
                                                <h2>02</h2>
                                            </div>
                                            <div className="service-solution-step-content">
                                                <h3>Safe Packing & Securing</h3>
                                                <p>We use bubble wrap, foam, sturdy cartons, and stretch film to ensure maximum protection for every item.</p>
                                            </div>
                                        </div>
                                        <div className="icon-box">
                                            <img src="/images/icon-service-solution-step-2.svg" alt="" />
                                        </div>
                                    </div>

                                    <div className="service-solution-step-item wow fadeInUp" data-wow-delay="0.6s">
                                        <div className="service-solution-step-box">
                                            <div className="service-solution-step-no">
                                                <h2>03</h2>
                                            </div>
                                            <div className="service-solution-step-content">
                                                <h3>Systematic Unpacking & Setup</h3>
                                                <p>Once delivered, we systematically unpack each box, arrange items in their designated rooms, and clean up packing debris.</p>
                                            </div>
                                        </div>
                                        <div className="icon-box">
                                            <img src="/images/icon-service-solution-step-3.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Service Solution Box End */}

                            {/* Service Secure Box Start */}
                            <div className="service-secure-box">
                                <h2 className="text-anime-style-2">Pack smarter, <span>unpack easier</span></h2>

                                <div className="service-entry-image-content">
                                    <div className="service-entry-image">
                                        <figure className="image-anime reveal">
                                            <img src="/services/packing-services.webp" alt="" />
                                        </figure>
                                    </div>

                                    <div className="service-entry-content">
                                        <div className="service-entry-content-item wow fadeInUp">
                                            <h3>Expert Handling & Setup</h3>
                                            <p>Our trained staff knows exactly how to pack and unpack fragile, bulky, or awkwardly shaped items safely, and assist with initial room layouts.</p>
                                        </div>

                                        <div className="service-entry-content-item wow fadeInUp" data-wow-delay="0.2s">
                                            <h3>Eco-Friendly Materials</h3>
                                            <p>We use recyclable and reusable packing materials wherever possible to minimize environmental impact.</p>
                                        </div>

                                        <div className="service-entry-content-item wow fadeInUp" data-wow-delay="0.4s">
                                            <h3>Complete Debris Removal</h3>
                                            <p>After unpacking, our team will collect and dispose of all empty boxes, bubble wraps, and packing tapes, leaving your new home neat and ready to live in.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Service Secure Box End */}

                            {/* Service Entry Item Box Start */}
                            <div className="service-entry-item-box">
                                <div className="service-entry-item-list">
                                    <div className="service-entry-item wow fadeInUp">
                                        <div className="icon-box">
                                            <img src="/images/icon-service-entry-item-1.svg" alt="" />
                                        </div>
                                        <div className="service-entry-item-content">
                                            <h3>Residential & Commercial Packing & Unpacking</h3>
                                            <p>Whether you're moving your home, office, or showroom, we handle both packing and unpacking seamlessly.</p>
                                        </div>
                                    </div>

                                    <div className="service-entry-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="icon-box">
                                            <img src="/images/icon-service-entry-item-2.svg" alt="" />
                                        </div>
                                        <div className="service-entry-item-content">
                                            <h3>Time-Saving & Stress-Free</h3>
                                            <p>Our efficient packing services save you time and eliminate the hassle of last-minute preparations.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="service-entry-list wow fadeInUp" data-wow-delay="0.4s">
                                    <ul>
                                        <li>Full Packing & Unpacking Services</li>
                                        <li>Protective Materials for All Items</li>
                                        <li>Systematic Unpacking & Room Setup</li>
                                        <li>Complete Packing Debris Removal</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Service Entry End */}

                        {/* Page Single FAQs Start */}
                        <div className="page-single-faqs">
                            <div className="section-title">
                                <h2 className="text-anime-style-2" data-cursor="-opaque">Packing & Unpacking Questions? <span>We’ve got answers</span></h2>
                            </div>

                            <div className="faq-accordion" id="faqaccordion">
                                <div className="accordion-item wow fadeInUp">
                                    <h2 className="accordion-header" id="heading1">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                            What is included in unpacking services?
                                        </button>
                                    </h2>
                                    <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqaccordion">
                                        <div className="accordion-body">
                                            <p>Our unpacking services include carefully opening all boxes, placing items on flat surfaces or shelves in their designated rooms, and removing all empty boxes and packing materials.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                    <h2 className="accordion-header" id="heading2">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                            Do you offer unpacking services separately?
                                        </button>
                                    </h2>
                                    <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqaccordion">
                                        <div className="accordion-body">
                                            <p>Yes, if you have already moved your goods but need professional assistance in systematically unpacking and arranging them, we can provide a dedicated crew.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                    <h2 className="accordion-header" id="heading3">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                            Will you arrange the furniture in my new home?
                                        </button>
                                    </h2>
                                    <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqaccordion">
                                        <div className="accordion-body">
                                            <p>Absolutely. As part of our unpacking and setup service, we will place large furniture items (beds, sofas, cupboards) in their designated positions in each room.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                                    <h2 className="accordion-header" id="heading4">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                            How long does the unpacking process take?
                                        </button>
                                    </h2>
                                    <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqaccordion">
                                        <div className="accordion-body">
                                            <p>Unpacking is usually faster than packing. A typical 2 BHK unpacking and debris cleanup takes around 3–4 hours with our professional team.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
    {/* Page Service Single End */}



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
