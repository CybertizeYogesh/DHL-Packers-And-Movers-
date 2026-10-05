import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section Start */}
      <div className="hero hero-video dark-section">
        {/* Video Start */}
        <div className="hero-bg-video">
          <video autoPlay muted loop playsInline id="myVideo">
            <source src="/movein-video.webm" type="video/webm" />
            <source src="/movein-video.mp4" type="video/mp4" />
          </video>
        </div>
        {/* Video End */}

        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-12">
              {/* Hero Content Box Start */}
              <div className="hero-content-box">
                {/* Hero Content Start */}
                <div className="hero-content">
                  {/* Section Title Start */}
                  <div className="section-title">
                    <h1 className="text-anime-style-2" data-cursor="-opaque">
                      Effortless moving <span>experiences</span>
                    </h1>
                    <p className="wow fadeInUp">Best Packers and Movers in Hyderabad</p>
                  </div>
                  {/* Section Title End */}
                </div>
                {/* Hero Content End */}

                {/* Hero Customer Box Start */}
                <div className="hero-customer-box">
                  <div className="hero-customer-content wow fadeInUp">
                    <p>
                      Experience a stress-free move with our top-rated shifting company. From professional household shifting services near me to office moving services and vehicle moving services, we ensure seamless transport logistics and timely delivery.
                    </p>
                  </div>

                  {/* Satisfy Customer Box Start */}
                  <div className="satisfy-customer-box">
                    {/* Satisfy Customer Images Start */}
                    <div className="satisfy-customer-images">
                      <div className="satisfy-customer-image">
                        <figure className="image-anime reveal">
                          <img src="/images/satisfy-customer-img-1.webp" alt="Satisfied Customer 1" />
                        </figure>
                      </div>
                      <div className="satisfy-customer-image">
                        <figure className="image-anime reveal">
                          <img src="/images/satisfy-customer-img-2.webp" alt="Satisfied Customer 2" />
                        </figure>
                      </div>
                      <div className="satisfy-customer-image">
                        <figure className="image-anime reveal">
                          <img src="/images/satisfy-customer-img-3.webp" alt="Satisfied Customer 3" />
                        </figure>
                      </div>
                    </div>
                    {/* Satisfy Customer Images End */}

                    {/* Satisfy Customer Content Start */}
                    <div className="satisfy-customer-content">
                      <h3>Customer Satisfied</h3>
                      <p>
                        <span className="counter">4.9</span> (15K Reviews)
                      </p>
                    </div>
                    {/* Satisfy Customer Content End */}
                  </div>
                  {/* Satisfy Customer Box End */}

                  {/* Hero Button Start */}
                  <div className="hero-btn wow fadeInUp" data-wow-delay="0.2s">
                    <Link href="/contact" className="btn-default btn-highlighted">
                      Request a Quote
                    </Link>
                  </div>
                  {/* Hero Button End */}
                </div>
                {/* Hero Customer Box End */}
              </div>
              {/* Hero Content Box End */}
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section End */}

      {/* About Us Section Start */}
      <div className="about-us">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1 order-2">
              {/* About Us Image Start */}
              <div className="about-us-image">
                <figure className="image-anime reveal">
                  <img src="/images/about-image.webp" alt="About DHL Packers And Movers" />
                </figure>
              </div>
              {/* About Us Image End */}
            </div>

            <div className="col-lg-6 order-lg-2 order-1">
              {/* About Us Content Start */}
              <div className="about-us-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">About us</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Trusted experts in <span>packers & movers</span>
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    <strong>DHL Packers And Movers</strong> is the leading transport logistics company and shifting company in India. We pride ourselves on delivering seamless relocation experiences, specializing in household shifting services, office moving services, and vehicle moving services. With precision, care, and dedication, our team of relocation movers near me ensures your belongings reach their destination safely and on time.
                  </p>
                </div>
                {/* Section Title End */}

                {/* About Counter Box Start */}
                <div className="about-counter-box">
                  {/* About Counter Item Start */}
                  <div className="about-counter-item">
                    <h2>
                      <span className="counter">99</span>%
                    </h2>
                    <p>Customer satisfaction through every move</p>
                  </div>
                  {/* About Counter Item End */}

                  {/* About Counter Item Start */}
                  <div className="about-counter-item">
                    <h2>
                      <span className="counter">15000</span>+
                    </h2>
                    <p>Successful relocations across India and beyond</p>
                  </div>
                  {/* About Counter Item End */}
                </div>
                {/* About Counter Box End */}

                {/* About Us Button Start */}
                <div className="about-us-btn wow fadeInUp" data-wow-delay="0.4s">
                  <Link href="/about" className="btn-default">
                    more about us
                  </Link>
                </div>
                {/* About Us Button End */}
              </div>
              {/* About Us Content End */}
            </div>
          </div>
        </div>
      </div>
      {/* About Us Section End */}

      {/* Our Approach Section Start */}
      <div className="our-approach dark-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/* Our Approach Content Start */}
              <div className="our-approch-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">our approach</h3>
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    The driving force behind <span>our services</span>
                  </h2>
                  <p className="wow fadeInUp" data-wow-delay="0.2s">
                    At DHL Packers And Movers, we believe moving should be exciting—not exhausting. Our approach blends strategic planning, experienced manpower, and a personal touch to turn every relocation into a positive experience.
                  </p>
                </div>
                {/* Section Title End */}

                {/* Mission Vision List Start */}
                <div className="mission-vision-list">
                  {/* Mission Vision Item Start */}
                  <div className="mission-vision-item wow fadeInUp" data-wow-delay="0.4s">
                    <div className="icon-box">
                      <img src="/images/icon-our-mission.svg" alt="Our Mission" />
                    </div>
                    <div className="mission-vision-content">
                      <h3>our mission</h3>
                      <p>
                        To deliver safe, swift, and dependable moving solutions that exceed customer expectations across every city and town.
                      </p>
                    </div>
                  </div>
                  {/* Mission Vision Item End */}

                  {/* Mission Vision Item Start */}
                  <div className="mission-vision-item wow fadeInUp" data-wow-delay="0.6s">
                    <div className="icon-box">
                      <img src="/images/icon-our-vision.svg" alt="Our Vision" />
                    </div>
                    <div className="mission-vision-content">
                      <h3>our vision</h3>
                      <p>
                        To become India’s most trusted name in relocation by setting standards in quality, reliability, and customer care.
                      </p>
                    </div>
                  </div>
                  {/* Mission Vision Item End */}
                </div>
                {/* Mission Vision List End */}
              </div>
              {/* Our Approach Content End */}
            </div>

            <div className="col-lg-6">
              {/* Our Approach Image Start */}
              <div className="our-approach-image">
                {/* Our Approach Image Box Start */}
                <div className="our-approach-img-box">
                  <div className="our-approach-img-1">
                    <figure className="image-anime reveal">
                      <img src="/images/our-approach-image-1.webp" alt="Approach 1" />
                    </figure>
                  </div>

                  <div className="trusted-client-box wow fadeInUp">
                    <h3>Trusted by 15000+ happy clients across India.</h3>
                  </div>
                </div>
                {/* Our Approach Image Box End */}

                {/* Our Approach Image Box Start */}
                <div className="our-approach-img-box">
                  <div className="our-approach-img-2">
                    <figure className="image-anime reveal">
                      <img src="/images/our-approach-image-2.webp" alt="Approach 2" />
                    </figure>
                  </div>
                </div>
                {/* Our Approach Image Box End */}
              </div>
              {/* Our Approach Image End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Approach Section End */}

      {/* Our Services Section Start */}
      <div className="page-services">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              {/* Service Item Start */}
              <div className="service-item wow fadeInUp">
                <div className="icon-box">
                  <img src="/services/household-goods-shifting.webp" className="img-fluid" alt="Household Shifting" />
                </div>
                <div className="service-content">
                  <h3>
                    <Link href="/services/household-goods-shifting">Household Goods Shifting</Link>
                  </h3>
                  <p>
                    We offer reliable Household Goods Shifting Services with expert packing, safe handling, and timely delivery to ensure a smooth and stress-free moving experience for our clients.
                  </p>
                </div>
                <div className="service-btn">
                  <Link href="/services/household-goods-shifting" className="readmore-btn">
                    read more
                  </Link>
                </div>
              </div>
              {/* Service Item End */}
            </div>

            <div className="col-lg-4">
              {/* Service Item Start */}
              <div className="service-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="icon-box">
                  <img src="/services/office-goods-shifting.webp" alt="Office Shifting" />
                </div>
                <div className="service-content">
                  <h3>
                    <Link href="/services/office-goods-shifting">Office Goods Shifting</Link>
                  </h3>
                  <p>
                    We offer professional Office Goods Shifting Services ensuring safe packing, secure transport, and timely delivery of office items with minimal disruption to your business operations.
                  </p>
                </div>
                <div className="service-btn">
                  <Link href="/services/office-goods-shifting" className="readmore-btn">
                    read more
                  </Link>
                </div>
              </div>
              {/* Service Item End */}
            </div>

            <div className="col-lg-4">
              {/* Service Item Start */}
              <div className="service-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="icon-box">
                  <img src="/services/loading-and-unloading.webp" alt="Loading & Unloading" />
                </div>
                <div className="service-content">
                  <h3>
                    <Link href="/services/loading-and-unloading">Loading and Unloading</Link>
                  </h3>
                  <p>
                    Our Loading and Unloading Services provide secure, professional, and structured handling of your household, office, or commercial goods, ensuring damage-free loading and unloading by expert handlers.
                  </p>
                </div>
                <div className="service-btn">
                  <Link href="/services/loading-and-unloading" className="readmore-btn">
                    read more
                  </Link>
                </div>
              </div>
              {/* Service Item End */}
            </div>

            <div className="col-lg-4">
              {/* Service Item Start */}
              <div className="service-item wow fadeInUp" data-wow-delay="0.6s">
                <div className="icon-box">
                  <img src="/services/packing-services.webp" alt="Packing Services" />
                </div>
                <div className="service-content">
                  <h3>
                    <Link href="/services/packing-and-unpacking-services">Packing and Unpacking Services</Link>
                  </h3>
                  <p>
                    Our Packing and Unpacking Services provide secure, professional wrapping and box arrangement to protect your belongings during relocation, ensuring safe transport and a smooth settling-in experience.
                  </p>
                </div>
                <div className="service-btn">
                  <Link href="/services/packing-and-unpacking-services" className="readmore-btn">
                    read more
                  </Link>
                </div>
              </div>
              {/* Service Item End */}
            </div>

            <div className="col-lg-4">
              {/* Service Item Start */}
              <div className="service-item wow fadeInUp" data-wow-delay="0.8s">
                <div className="icon-box">
                  <img src="/services/moving-services.webp" alt="Moving Services" />
                </div>
                <div className="service-content">
                  <h3>
                    <Link href="/services/moving-services">Moving Services</Link>
                  </h3>
                  <p>
                    Our Moving Services offer safe, efficient, and timely transportation of your belongings, ensuring a smooth and stress-free relocation with expert handling and reliable delivery.
                  </p>
                </div>
                <div className="service-btn">
                  <Link href="/services/moving-services" className="readmore-btn">
                    read more
                  </Link>
                </div>
              </div>
              {/* Service Item End */}
            </div>

            <div className="col-lg-4">
              {/* Service Item Start */}
              <div className="service-item wow fadeInUp" data-wow-delay="1s">
                <div className="icon-box">
                  <img src="/services/car-transportation.webp" alt="Car Transportation" />
                </div>
                <div className="service-content">
                  <h3>
                    <Link href="/services/car-transportation">Car Transportation</Link>
                  </h3>
                  <p>
                    Our Car Transportation Services offer safe, reliable, and damage-free vehicle relocation using specialized carriers, ensuring timely delivery and complete protection of your car during transit.
                  </p>
                </div>
                <div className="service-btn">
                  <Link href="/services/car-transportation" className="readmore-btn">
                    read more
                  </Link>
                </div>
              </div>
              {/* Service Item End */}
            </div>

            <div className="col-lg-4">
              {/* Service Item Start */}
              <div className="service-item wow fadeInUp" data-wow-delay="1.4s">
                <div className="icon-box">
                  <img src="/services/bike-transportation.webp" alt="Bike Transportation" />
                </div>
                <div className="service-content">
                  <h3>
                    <Link href="/services/bike-transportation">Bike Transportation</Link>
                  </h3>
                  <p>
                    Our Bike Transportation Services ensure secure, scratch-free relocation of your two-wheeler using specialized packing and carriers, guaranteeing timely delivery and complete peace of mind.
                  </p>
                </div>
                <div className="service-btn">
                  <Link href="/services/bike-transportation" className="readmore-btn">
                    read more
                  </Link>
                </div>
              </div>
              {/* Service Item End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Services Section End */}

      {/* Our Work Process Section Start */}
      <div className="our-work-process dark-section">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              {/* Section Title Start */}
              <div className="section-title section-title-center">
                <h3 className="wow fadeInUp">our work process</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Smooth, efficient relocations <span>at every step</span>
                </h2>
              </div>
              {/* Section Title End */}
            </div>
          </div>

          <div className="row">
            {/* Work Process List Start */}
            <div className="wrok-process-list">
              {/* Work Process Item Start */}
              <div className="work-process-item wow fadeInUp">
                <div className="icon-box">
                  <img src="/images/icon-work-process-1.svg" alt="Work Process 1" />
                  <div className="work-process-number">
                    <h3>1</h3>
                  </div>
                </div>
                <div className="work-process-content">
                  <h3>request a callback</h3>
                  <p>
                    Reach out to us with your moving needs. Our team will contact you to understand your requirements in detail.
                  </p>
                </div>
              </div>
              {/* Work Process Item End */}

              {/* Work Process Item Start */}
              <div className="work-process-item wow fadeInUp" data-wow-delay="0.2s">
                <div className="icon-box">
                  <img src="/images/icon-work-process-2.svg" alt="Work Process 2" />
                  <div className="work-process-number">
                    <h3>2</h3>
                  </div>
                </div>
                <div className="work-process-content">
                  <h3>custom move planning</h3>
                  <p>
                    We design a tailored relocation strategy, including packing, transportation, and delivery schedules.
                  </p>
                </div>
              </div>
              {/* Work Process Item End */}

              {/* Work Process Item Start */}
              <div className="work-process-item wow fadeInUp" data-wow-delay="0.4s">
                <div className="icon-box">
                  <img src="/images/icon-work-process-3.svg" alt="Work Process 3" />
                  <div className="work-process-number">
                    <h3>3</h3>
                  </div>
                </div>
                <div className="work-process-content">
                  <h3>professional moving</h3>
                  <p>
                    Our skilled crew packs, loads, and transports your belongings with care using quality materials and tools.
                  </p>
                </div>
              </div>
              {/* Work Process Item End */}

              {/* Work Process Item Start */}
              <div className="work-process-item wow fadeInUp" data-wow-delay="0.6s">
                <div className="icon-box">
                  <img src="/images/icon-work-process-4.svg" alt="Work Process 4" />
                  <div className="work-process-number">
                    <h3>4</h3>
                  </div>
                </div>
                <div className="work-process-content">
                  <h3>final delivery & setup</h3>
                  <p>
                    We unpack and help arrange your items at your new location, ensuring a comfortable and stress-free start.
                  </p>
                </div>
              </div>
              {/* Work Process Item End */}
            </div>
            {/* Work Process List End */}
          </div>
        </div>
      </div>
      {/* Our Work Process Section End */}

      {/* Page Team Start */}
      <div className="page-team">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              {/* Team Item Start */}
              <div className="team-item wow fadeInUp">
                {/* Team Image Start */}
                <div className="team-image">
                  <figure className="image-anime">
                    <img src="/gallery/g1.webp" alt="Shifting Team 1" />
                  </figure>
                </div>
                {/* Team Image End */}
              </div>
              {/* Team Item End */}
            </div>

            <div className="col-lg-3 col-md-6">
              {/* Team Item Start */}
              <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
                {/* Team Image Start */}
                <div className="team-image">
                  <figure className="image-anime">
                    <img src="/gallery/g2.webp" alt="Shifting Team 2" />
                  </figure>
                </div>
                {/* Team Image End */}
              </div>
              {/* Team Item End */}
            </div>

            <div className="col-lg-3 col-md-6">
              {/* Team Item Start */}
              <div className="team-item wow fadeInUp" data-wow-delay="0.4s">
                {/* Team Image Start */}
                <div className="team-image">
                  <figure className="image-anime">
                    <img src="/gallery/g3.webp" alt="Shifting Team 3" />
                  </figure>
                </div>
                {/* Team Image End */}
              </div>
              {/* Team Item End */}
            </div>

            <div className="col-lg-3 col-md-6">
              {/* Team Item Start */}
              <div className="team-item wow fadeInUp" data-wow-delay="0.6s">
                {/* Team Image Start */}
                <div className="team-image">
                  <figure className="image-anime">
                    <img src="/gallery/g4.webp" alt="Shifting Team 4" />
                  </figure>
                </div>
                {/* Team Image End */}
              </div>
              {/* Team Item End */}
            </div>

            <div className="col-lg-3 col-md-6">
              {/* Team Item Start */}
              <div className="team-item wow fadeInUp" data-wow-delay="0.8s">
                {/* Team Image Start */}
                <div className="team-image">
                  <figure className="image-anime">
                    <img src="/gallery/g5.webp" alt="Shifting Team 5" />
                  </figure>
                </div>
                {/* Team Image End */}
              </div>
              {/* Team Item End */}
            </div>

            <div className="col-lg-3 col-md-6">
              {/* Team Item Start */}
              <div className="team-item wow fadeInUp" data-wow-delay="1s">
                {/* Team Image Start */}
                <div className="team-image">
                  <figure className="image-anime">
                    <img src="/gallery/g6.webp" alt="Shifting Team 6" />
                  </figure>
                </div>
                {/* Team Image End */}
              </div>
              {/* Team Item End */}
            </div>

            <div className="col-lg-3 col-md-6">
              {/* Team Item Start */}
              <div className="team-item wow fadeInUp" data-wow-delay="1.2s">
                {/* Team Image Start */}
                <div className="team-image">
                  <figure className="image-anime">
                    <img src="/gallery/g7.webp" alt="Shifting Team 7" />
                  </figure>
                </div>
                {/* Team Image End */}
              </div>
              {/* Team Item End */}
            </div>

            <div className="col-lg-3 col-md-6">
              {/* Team Item Start */}
              <div className="team-item wow fadeInUp" data-wow-delay="1.4s">
                {/* Team Image Start */}
                <div className="team-image">
                  <figure className="image-anime">
                    <img src="/gallery/g8.webp" alt="Shifting Team 8" />
                  </figure>
                </div>
                {/* Team Image End */}
              </div>
              {/* Team Item End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Team End */}

      {/* Our Testimonials Section Start */}
      <div className="our-testimonials">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              {/* Section Title Start */}
              <div className="section-title section-title-center">
                <h3 className="wow fadeInUp">testimonials</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Words of appreciation from <span>our customers</span>
                </h2>
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
                          <p>
                            Shifting my household from Hyderabad to Bangalore was a breeze with DHL Packers And Movers. Their household shifting services are top-notch. Highly recommended!
                          </p>
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
                          <p>
                            I was nervous about moving my delicate items, but their packing and unpacking services were absolute perfection. Everything arrived in pristine condition!
                          </p>
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
                          <p>
                            We shifted our entire corporate office from Hyderabad to Mumbai. The coordination of their office moving services was exceptionally professional and fast.
                          </p>
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
                          <p>
                            Their loading and unloading team was incredibly efficient. They handled our heavy lockers and furniture with absolute safety and systematic stacking. Great job!
                          </p>
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
                          <p>
                            Used their vehicle transportation service to move my bike from Hyderabad to Bangalore. The safe packing and timely delivery were amazing. Highly recommend!
                          </p>
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
