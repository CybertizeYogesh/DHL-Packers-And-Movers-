import Link from "next/link";

export const metadata = {
  title: "Vehicle Moving Services Hyderabad | Secure Car Shifting Company",
  description: "Get top-rated vehicle moving services in Hyderabad. DHL Packers And Movers offers open and enclosed car carrier options for secure, damage-free vehicle relocation.",
  keywords: "vehicle moving services, transport logistics company, shifting company, relocation movers near me, packers and movers hyderabad",
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
                        <h1 className="text-anime-style-2" data-cursor="-opaque">Car Transportation Services</h1>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Car Transportation Services</li>
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
                                <p><a href="mailto:info@durgahomelogistics.com">info@durgahomelogistics.com</a></p>
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
                            <p className="wow fadeInUp">At DHL Packers And Movers, we understand how much your vehicle means to you. That’s why our Car Transportation Services are built on safety, reliability, and peace of mind. Whether you're relocating to a different city or sending your car across the country, we ensure a smooth, secure, and timely delivery.</p>

                            <p className="wow fadeInUp" data-wow-delay="0.2s">Using specialized car carriers and GPS-enabled tracking, we take every precaution to protect your vehicle from start to finish. Our experienced team handles everything—from pickup and loading to transport and doorstep delivery.</p>

                            {/* Service Solution Box Start */}
                            <div className="service-solution-box">
                                <h2 className="text-anime-style-2">Drive your <span>peace of mind</span> with us</h2>
                                <p className="wow fadeInUp">We treat your car like our own—with expert care, protective coverings, and trusted transport systems.</p>

                                {/* Service Entry Step List Start */}
                                <div className="service-solution-steps">
                                    <div className="service-solution-step-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="service-solution-step-box">
                                            <div className="service-solution-step-no">
                                                <h2>01</h2>
                                            </div>
                                            <div className="service-solution-step-content">
                                                <h3>Vehicle Inspection</h3>
                                                <p>We conduct a detailed pre-shipping inspection and document your car’s condition for transparency.</p>
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
                                                <h3>Secured Loading</h3>
                                                <p>Your car is loaded into a custom-designed carrier using hydraulic ramps and wheel locks for added safety.</p>
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
                                                <h3>Nationwide Delivery</h3>
                                                <p>Our fleet of enclosed and open carriers ensures reliable delivery across India, right to your doorstep.</p>
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
                                <h2 className="text-anime-style-2">Your car, <span>our responsibility</span></h2>

                                <div className="service-entry-image-content">
                                    <div className="service-entry-image">
                                        <figure className="image-anime reveal">
                                            <img src="/services/car-transportation.webp" alt="" />
                                        </figure>
                                    </div>

                                    <div className="service-entry-content">
                                        <div className="service-entry-content-item wow fadeInUp">
                                            <h3>Fully Insured Transit</h3>
                                            <p>We offer optional insurance plans to cover your vehicle during transit for added peace of mind.</p>
                                        </div>

                                        <div className="service-entry-content-item wow fadeInUp" data-wow-delay="0.2s">
                                            <h3>Door-to-Door Pickup</h3>
                                            <p>No terminal drop-offs needed—we pick up and deliver directly to your desired locations.</p>
                                        </div>

                                        <div className="service-entry-content-item wow fadeInUp" data-wow-delay="0.4s">
                                            <h3>Live Tracking Available</h3>
                                            <p>Track your vehicle in real-time through our GPS-enabled systems and customer support updates.</p>
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
                                            <h3>Open & Enclosed Carriers</h3>
                                            <p>Choose between budget-friendly open carriers or weatherproof enclosed options for added protection.</p>
                                        </div>
                                    </div>

                                    <div className="service-entry-item wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="icon-box">
                                            <img src="/images/icon-service-entry-item-2.svg" alt="" />
                                        </div>
                                        <div className="service-entry-item-content">
                                            <h3>Specialized Vehicle Handling</h3>
                                            <p>Our team is trained to handle everything from hatchbacks to sedans, SUVs, and luxury cars.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="service-entry-list wow fadeInUp" data-wow-delay="0.4s">
                                    <ul>
                                        <li>All-India Service Coverage</li>
                                        <li>Pre-Dispatch Condition Reports</li>
                                        <li>On-Time Guarantee</li>
                                        <li>Zero Hidden Costs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Service Entry End */}

                        {/* Page Single FAQs Start */}
                        <div className="page-single-faqs">
                            <div className="section-title">
                                <h2 className="text-anime-style-2" data-cursor="-opaque">Need clarity on car shipping? <span>Let’s answer your questions</span></h2>
                            </div>

                            <div className="faq-accordion" id="faqaccordion">
                                <div className="accordion-item wow fadeInUp">
                                    <h2 className="accordion-header" id="heading1">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                            How long does car transportation take?
                                        </button>
                                    </h2>
                                    <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#faqaccordion">
                                        <div className="accordion-body">
                                            <p>Depending on the distance, it usually takes 3–7 days for delivery within India. We'll provide you an estimated time based on your route.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                    <h2 className="accordion-header" id="heading2">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                            Will my car be insured during transit?
                                        </button>
                                    </h2>
                                    <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#faqaccordion">
                                        <div className="accordion-body">
                                            <p>Yes, we offer optional transit insurance to protect your car against unforeseen incidents during the move.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                    <h2 className="accordion-header" id="heading3">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                            Do I need to empty the car before shipping?
                                        </button>
                                    </h2>
                                    <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#faqaccordion">
                                        <div className="accordion-body">
                                            <p>Yes, please remove all personal belongings from the car before transport. This helps ensure safety and compliance during transit.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                                    <h2 className="accordion-header" id="heading4">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                            Can I track my car during transportation?
                                        </button>
                                    </h2>
                                    <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#faqaccordion">
                                        <div className="accordion-body">
                                            <p>Absolutely! We provide real-time GPS tracking and regular updates so you always know your vehicle’s location.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Page Single FAQs End */}
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
