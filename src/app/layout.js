import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Best Packers and Movers in Hyderabad | DHL Packers And Movers",
  description: "DHL Packers And Movers is the Best Packers and Movers in Hyderabad, offering top-rated household shifting services, office moving services, and vehicle moving near me. Get a free quote!",
  keywords: "packers and movers hyderabad, best packers and movers, household shifting services, household shifting services near me, transport logistics company, pet care services, dog pick up services, Hyderabad pet, shifting company, relocation movers near me, vehicle moving services, office moving services",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollRevealInit from "@/components/ScrollRevealInit";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet" />

        {/* Stylesheets */}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/slicknav.min.css" />
        <link rel="stylesheet" href="/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/css/all.min.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/magnific-popup.css" />
        <link rel="stylesheet" href="/css/mousecursor.css" />
        <link rel="stylesheet" href="/css/custom.css?v=2.3" />
        <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.webp" />
      </head>
      <body>
        {/* Preloader Start */}
        <div className="preloader">
          <div className="loading-container">
            <div className="loading"></div>
            <div id="loading-text">
              <img src="/images/dhl-logo.webp" alt="DHL Packers And Movers" />
            </div>
          </div>
        </div>
        {/* Preloader End */}

        <Header />
        {children}
        <Footer />
        <ScrollRevealInit />

        {/* Custom cursor elements if the template uses them */}
        <div className="custom-cursor-outer" id="mycursor-outer"></div>
        <div className="custom-cursor-inner" id="mycursor-inner"></div>

        {/* Client scripts in correct loading order */}
        <Script src="/js/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/js/validator.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.slicknav.js" strategy="afterInteractive" />
        <Script src="/js/swiper-bundle.min.js" strategy="beforeInteractive" />
        <Script src="/js/jquery.waypoints.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.counterup.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/js/SmoothScroll.js" strategy="afterInteractive" />
        <Script src="/js/parallaxie.js" strategy="afterInteractive" />
        <Script src="/js/gsap.min.js" strategy="beforeInteractive" />
        <Script src="/js/magiccursor.js" strategy="afterInteractive" />
        <Script src="/js/SplitText.js" strategy="afterInteractive" />
        <Script src="/js/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="/js/wow.min.js" strategy="beforeInteractive" />
        <Script src="/js/function.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
