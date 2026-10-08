import Link from "next/link";

export const metadata = {
  title: "packers and movers hyderabad FAQs | Shifting Company Help",
  description: "Got questions about household shifting services near me, vehicle relocation, or pet care services? Find answers to frequently asked questions about DHL Packers And Movers.",
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
                        <h1 className="text-anime-style-2" data-cursor="-opaque">Faq</h1>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Faq</li>
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
                        {/* Page FAQs Catagery Start */}
                        <div className="page-faqs-catagery">
                            {/* FAQs section start */}

                            <div className="faq-accordion page-faq-accordion" id="residential_moving">
                                <div className="section-title">
                                    <h2 className="text-anime-style-2" data-cursor="-opaque">Residential <span>moving</span></h2>
                                </div>

                                {/* FAQ Accordion Start */}
                                <div className="faq-accordion" id="accordion">
                                    {/* FAQ Item Start */}
                                    <div className="accordion-item wow fadeInUp">
                                        <h2 className="accordion-header" id="heading1">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                                What is included in your residential moving service?
                                            </button>
                                        </h2>
                                        <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordion">
                                            <div className="accordion-body">
                                                <p>Our residential moving service includes packing, loading, transporting, unloading, and unpacking. Optional services include disassembly/reassembly of furniture and short/long-term storage.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* FAQ Item End */}

                                    {/* Start of Additional FAQs */}
                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.1s">
                                        <h2 className="accordion-header" id="heading2">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                                How far in advance should I book my residential move?
                                            </button>
                                        </h2>
                                        <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="heading2" data-bs-parent="#accordion">
                                            <div className="accordion-body">
                                                <p>We recommend booking at least 1–2 weeks in advance. During peak seasons or month-end, it's best to schedule even earlier to ensure availability.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                                        <h2 className="accordion-header" id="heading3">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                                Do you provide packing materials?
                                            </button>
                                        </h2>
                                        <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="heading3" data-bs-parent="#accordion">
                                            <div className="accordion-body">
                                                <p>Yes, we provide high-quality packing materials such as boxes, bubble wrap, tape, and protective padding for all your items.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.3s">
                                        <h2 className="accordion-header" id="heading4">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                                Are my belongings insured during the move?
                                            </button>
                                        </h2>
                                        <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordion">
                                            <div className="accordion-body">
                                                <p>Yes, we offer transit insurance options to ensure your belongings are protected throughout the moving process.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                                        <h2 className="accordion-header" id="heading5">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                                Can I schedule a home survey before my move?
                                            </button>
                                        </h2>
                                        <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="heading5" data-bs-parent="#accordion">
                                            <div className="accordion-body">
                                                <p>Absolutely! We offer free home surveys (physical or virtual) to understand your requirements and give you an accurate quote.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.5s">
                                        <h2 className="accordion-header" id="heading6">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                                Do you provide vehicle moving services for cars and bikes?
                                            </button>
                                        </h2>
                                        <div id="collapse6" className="accordion-collapse collapse" aria-labelledby="heading6" data-bs-parent="#accordion">
                                            <div className="accordion-body">
                                                <p>Yes, we offer secure vehicle moving services for both cars and two-wheelers across India using specialized open and enclosed carriers.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.6s">
                                        <h2 className="accordion-header" id="heading7">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                                                Can you move fragile or valuable items?
                                            </button>
                                        </h2>
                                        <div id="collapse7" className="accordion-collapse collapse" aria-labelledby="heading7" data-bs-parent="#accordion">
                                            <div className="accordion-body">
                                                <p>Yes, we use special packaging and care to safely handle fragile items like glassware, electronics, artwork, and antiques.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.7s">
                                        <h2 className="accordion-header" id="heading8">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                                                Do I need to be present on moving day?
                                            </button>
                                        </h2>
                                        <div id="collapse8" className="accordion-collapse collapse" aria-labelledby="heading8" data-bs-parent="#accordion">
                                            <div className="accordion-body">
                                                <p>It’s ideal if someone is available during the move to guide the team, but we can proceed based on prior instructions too.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.8s">
                                        <h2 className="accordion-header" id="heading9">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                                                How do you calculate moving costs?
                                            </button>
                                        </h2>
                                        <div id="collapse9" className="accordion-collapse collapse" aria-labelledby="heading9" data-bs-parent="#accordion">
                                            <div className="accordion-body">
                                                <p>Costs depend on the volume of goods, distance, floors involved, packing material, and any additional services you require.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item wow fadeInUp" data-wow-delay="0.9s">
                                        <h2 className="accordion-header" id="heading11">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
                                                Can I pack my own items?
                                            </button>
                                        </h2>
                                        <div id="collapse11" className="accordion-collapse collapse" aria-labelledby="heading11" data-bs-parent="#accordion">
                                            <div className="accordion-body">
                                                <p>Yes, you're welcome to pack your own items. However, we recommend professional packing for fragile or high-value goods.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item wow fadeInUp" data-wow-delay="1.1s">
                                        <h2 className="accordion-header" id="heading12">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
                                                Do you provide standalone loading and unloading services?
                                            </button>
                                        </h2>
                                        <div id="collapse12" className="accordion-collapse collapse" aria-labelledby="heading12" data-bs-parent="#accordion">
                                            <div className="accordion-body">
                                                <p>Yes, we offer professional loading and unloading services separately, using experienced movers to ensure heavy shifting and systematic stacking.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item wow fadeInUp" data-wow-delay="1.2s">
                                        <h2 className="accordion-header" id="heading13">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
                                                Can I move just a few items?
                                            </button>
                                        </h2>
                                        <div id="collapse13" className="accordion-collapse collapse" aria-labelledby="heading13" data-bs-parent="#accordion">
                                            <div className="accordion-body">
                                                <p>Yes, we offer mini-move and single-item transport solutions for smaller relocations at affordable rates.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item wow fadeInUp" data-wow-delay="1.3s">
                                        <h2 className="accordion-header" id="heading14">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
                                                Are there any hidden charges?
                                            </button>
                                        </h2>
                                        <div id="collapse14" className="accordion-collapse collapse" aria-labelledby="heading14" data-bs-parent="#accordion">
                                            <div className="accordion-body">
                                                <p>No, we provide transparent quotes upfront. Any additional costs are communicated and approved in advance.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item wow fadeInUp" data-wow-delay="1.4s">
                                        <h2 className="accordion-header" id="heading15">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse15" aria-expanded="false" aria-controls="collapse15">
                                                How can I get a quote?
                                            </button>
                                        </h2>
                                        <div id="collapse15" className="accordion-collapse collapse" aria-labelledby="heading15" data-bs-parent="#accordion">
                                            <div className="accordion-body">
                                                <p>You can get a quote by calling us, filling out our website form, or scheduling a free home survey. We'll respond quickly with a custom estimate.</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* FAQ Item End */}
                                </div>
                                {/* FAQ Accordion End */}
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
