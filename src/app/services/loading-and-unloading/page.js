import Link from "next/link";

export const metadata = {
  title: "Safe Loading and Unloading Services | Transport Logistics Company",
  description: "Reliable loading and unloading services in Hyderabad. DHL Packers And Movers movers near me ensure safe handling of heavy goods, household items, and vehicles.",
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
                        <h1 className="text-anime-style-2" data-cursor="-opaque">Loading and Unloading Services</h1>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Loading and Unloading Services</li>
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
                            <p className="wow fadeInUp">DHL Packers And Movers offers reliable and professional Loading and Unloading Services across India. We understand that the physical handling of your assets requires extreme care, proper technique, and strong safety measures. Our team ensures that your items are systematically loaded into transit vehicles and securely unloaded at your destination—on time, every time.</p>
                            <p className="wow fadeInUp" data-wow-delay="0.2s">Whether you’re shifting household furniture, office files and computers, or heavy industrial machinery, we provide trained labor and specialized lifting gear. From single-item loading to large-scale container unloading, we handle everything with precision.</p>

                            {/* Service Solution Box Start */}
                            <div className="service-solution-box">
                                <h2 className="text-anime-style-2">Solutions for <span>every loading need</span></h2>
                                <p className="wow fadeInUp">Our expert planning, specialized equipment, and experienced team ensure that your goods are loaded and unloaded with care, safety, and full accountability.</p>

                                {/* Service Entry Step List Start */}
                                <div className="service-solution-steps">
                                    <div className="service-solution-step-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="service-solution-step-box">
                                            <div className="service-solution-step-no">
                                                <h2>01</h2>
                                            </div>
                                            <div className="service-solution-step-content">
                                                <h3>Pre-loading Assessment</h3>
                                                <p>We assess the weight, size, and fragility of your items to prepare the proper handling gear and loading layout.</p>
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
                                                <h3>Systematic Loading</h3>
                                                <p>Using safe lifting methods and secure positioning, we load your goods into transport vehicles to prevent shifting during transit.</p>
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
                                                <h3>Safe Unloading & Placement</h3>
                                                <p>Upon arrival, we carefully unload each item and place it in your designated rooms or office zones as requested.</p>
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
                                <h2 className="text-anime-style-2">Handling goods <span>with precision</span></h2>

                                <div className="service-entry-image-content">
                                    <div className="service-entry-image">
                                        <figure className="image-anime reveal">
                                            <img src="/services/loading-and-unloading.webp" alt="" />
                                        </figure>
                                    </div>

                                    <div className="service-entry-content">
                                        <div className="service-entry-content-item wow fadeInUp">
                                            <h3>Heavy Duty Lifting Gear</h3>
                                            <p>We use high-quality ramps, dollies, lifting belts, and safety gear for heavy cargo and equipment.</p>
                                        </div>

                                        <div className="service-entry-content-item wow fadeInUp" data-wow-delay="0.2s">
                                            <h3>Zero-Damage Guarantee</h3>
                                            <p>Our staff is trained to handle delicate glass, electronics, and heavy furniture without scratches or drops.</p>
                                        </div>

                                        <div className="service-entry-content-item wow fadeInUp" data-wow-delay="0.4s">
                                            <h3>Structured Stacking</h3>
                                            <p>We systematically arrange boxes inside the truck—heavier items at the bottom, fragile items on top.</p>
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
                                            <h3>Trained Crew</h3>
                                            <p>Our loading crew is physically fit, safety-conscious, and trained in ergonomic lifting methods.</p>
                                        </div>
                                    </div>

                                    <div className="service-entry-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="icon-box">
                                            <img src="/images/icon-service-entry-item-2.svg" alt="" />
                                        </div>
                                        <div className="service-entry-item-content">
                                            <h3>On-time Execution</h3>
                                            <p>We strictly follow timelines to ensure loading and unloading are completed without causing delays to your schedule.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="service-entry-list wow fadeInUp" data-wow-delay="0.4s">
                                    <ul>
                                        <li>Specialized Heavy Lifting Equipment</li>
                                        <li>Systematic Stacking & Cargo Securing</li>
                                        <li>Damage-Free Unloading and Placement</li>
                                        <li>Fragile and Antique Item Safety Protocols</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Service Entry End */}

                        {/* Page Single FAQs Start */}
                        <div className="page-single-faqs">
                            <div className="section-title">
                                <h2 className="text-anime-style-2" data-cursor="-opaque">Questions about <span>loading and unloading?</span></h2>
                            </div>

                            <div className="faq-accordion" id="faqaccordion">
                                <div className="accordion-item wow fadeInUp">
                                    <h2 className="accordion-header" id="heading1">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                            Do you provide loading and unloading services separately?
                                        </button>
                                    </h2>
                                    <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqaccordion">
                                        <div className="accordion-body">
                                            <p>Yes! You can hire our professional crew solely for loading or unloading your rented truck or container.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                    <h2 className="accordion-header" id="heading2">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                            How do you ensure fragile items aren't damaged?
                                        </button>
                                    </h2>
                                    <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqaccordion">
                                        <div className="accordion-body">
                                            <p>We use custom padding, double-wall boxes, and pack them securely at the top of the load, away from heavier objects.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                    <h2 className="accordion-header" id="heading3">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                            Do you handle heavy machinery or safe lockers?
                                        </button>
                                    </h2>
                                    <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqaccordion">
                                        <div className="accordion-body">
                                            <p>Yes, we have specialized tools like industrial rollers, jacks, and pulleys to lift and shift heavy assets safely.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                                    <h2 className="accordion-header" id="heading4">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                            Is loading and unloading labor covered under insurance?
                                        </button>
                                    </h2>
                                    <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqaccordion">
                                        <div className="accordion-body">
                                            <p>Yes, when you choose our full-service packing and moving package, loading and unloading transit insurance options are covered.</p>
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
