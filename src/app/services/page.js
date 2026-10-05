import Link from "next/link";

export const metadata = {
  title: "Professional Shifting & Vehicle Moving Services | DHL Packers And Movers",
  description: "Explore our comprehensive range of services including household shifting services, office moving, vehicle moving services, and transport logistics in Hyderabad.",
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
                        <h1 className="text-anime-style-2" data-cursor="-opaque">Our Services</h1>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Our Services</li>
                            </ol>
                        </nav>
                    </div>
                    {/* Page Header Box End */}
                </div>
            </div>
        </div>
    </div>
    {/* Page Header End */}


        {/* Our Services Section Start */}
    <div className="page-services">
        <div className="container">
            <div className="row">

                <div className="col-lg-4">
                    {/* Service Item Start */}
                    <div className="service-item wow fadeInUp">
                         <div className="icon-box">
                             <img src="/services/household-goods-shifting.webp" className="img-fluid" />
                         </div>
                         <div className="service-content">
                             <h3><Link href="/services/household-goods-shifting">Household Goods Shifting</Link></h3>
                             <p>We offer reliable Household Goods Shifting Services with expert packing, safe handling, and timely delivery to ensure a smooth and stress-free moving experience for our clients.</p>
                         </div>
                         <div className="service-btn">
                             <Link href="/services/household-goods-shifting" className="readmore-btn">read more</Link>
                         </div>
                    </div>
                    {/* Service Item End */}
                </div>

                <div className="col-lg-4">
                    {/* Service Item Start */}
                    <div className="service-item wow fadeInUp" data-wow-delay="0.2s">
                         <div className="icon-box">
                             <img src="/services/office-goods-shifting.webp" alt="" />
                         </div>
                         <div className="service-content">
                             <h3><Link href="/services/office-goods-shifting">Office Goods Shifting</Link></h3>
                             <p>We offer professional Office Goods Shifting Services ensuring safe packing, secure transport, and timely delivery of office items with minimal disruption to your business operations.</p>
                         </div>
                         <div className="service-btn">
                             <Link href="/services/office-goods-shifting" className="readmore-btn">read more</Link>
                         </div>
                    </div>
                    {/* Service Item End */}
                </div>

                <div className="col-lg-4">
                    {/* Service Item Start */}
                    <div className="service-item wow fadeInUp" data-wow-delay="0.4s">
                         <div className="icon-box">
                             <img src="/services/loading-and-unloading.webp" alt="" />
                         </div>
                         <div className="service-content">
                             <h3><Link href="/services/loading-and-unloading">Loading and Unloading</Link></h3>
                             <p>Our Loading and Unloading Services provide secure, professional, and structured handling of your household, office, or commercial goods, ensuring damage-free loading and unloading by expert handlers.</p>
                         </div>
                         <div className="service-btn">
                             <Link href="/services/loading-and-unloading" className="readmore-btn">read more</Link>
                         </div>
                    </div>
                    {/* Service Item End */}
                </div>

                <div className="col-lg-4">
                    {/* Service Item Start */}
                    <div className="service-item wow fadeInUp" data-wow-delay="0.6s">
                         <div className="icon-box">
                             <img src="/services/packing-services.webp" alt="" />
                         </div>
                         <div className="service-content">
                             <h3><Link href="/services/packing-and-unpacking-services">Packing and Unpacking Services</Link></h3>
                             <p>Our Packing and Unpacking Services provide secure, professional wrapping and box arrangement to protect your belongings during relocation, ensuring safe transport and a smooth settling-in experience.</p>
                         </div>
                         <div className="service-btn">
                             <Link href="/services/packing-and-unpacking-services" className="readmore-btn">read more</Link>
                         </div>
                    </div>
                    {/* Service Item End */}
                </div>

                <div className="col-lg-4">
                    {/* Service Item Start */}
                    <div className="service-item wow fadeInUp" data-wow-delay="0.8s">
                         <div className="icon-box">
                             <img src="/services/moving-services.webp" alt="" />
                         </div>
                         <div className="service-content">
                             <h3><Link href="/services/moving-services">Moving Services</Link></h3>
                             <p>Our Moving Services offer safe, efficient, and timely transportation of your belongings, ensuring a smooth and stress-free relocation with expert handling and reliable delivery.</p>
                         </div>
                         <div className="service-btn">
                             <Link href="/services/moving-services" className="readmore-btn">read more</Link>
                         </div>
                    </div>
                    {/* Service Item End */}
                </div>

                <div className="col-lg-4">
                    {/* Service Item Start */}
                    <div className="service-item wow fadeInUp" data-wow-delay="1s">
                         <div className="icon-box">
                             <img src="/services/car-transportation.webp" alt="" />
                         </div>
                         <div className="service-content">
                             <h3><Link href="/services/car-transportation">Car Transportation</Link></h3>
                             <p>Our Car Transportation Services offer safe, reliable, and damage-free vehicle relocation using specialized carriers, ensuring timely delivery and complete protection of your car during transit.</p>
                         </div>
                         <div className="service-btn">
                             <Link href="/services/car-transportation" className="readmore-btn">read more</Link>
                         </div>
                    </div>
                    {/* Service Item End */}
                </div>

                <div className="col-lg-4">
                    {/* Service Item Start */}
                    <div className="service-item wow fadeInUp" data-wow-delay="1.4s">
                         <div className="icon-box">
                             <img src="/services/bike-transportation.webp" alt="" />
                         </div>
                         <div className="service-content">
                             <h3><Link href="/services/bike-transportation">Bike Transportation</Link></h3>
                             <p>Our Bike Transportation Services ensure secure, scratch-free relocation of your two-wheeler using specialized packing and carriers, guaranteeing timely delivery and complete peace of mind.</p>
                         </div>
                         <div className="service-btn">
                             <Link href="/services/bike-transportation" className="readmore-btn">read more</Link>
                         </div>
                    </div>
                    {/* Service Item End */}
                </div>

            </div>
        </div>
    </div>
    {/* Our Services Section End */}




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
