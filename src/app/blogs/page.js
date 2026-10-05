import Link from "next/link";

export const metadata = {
  title: "packers and movers hyderabad Shifting Guide & Blog | DHL Packers And Movers",
  description: "Read shifting guides, packing tips, and logistics news from DHL Packers And Movers, the Best Packers and Movers in Hyderabad. Get advice on household shifting and office moving.",
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
                        <h1 className="text-anime-style-2" data-cursor="-opaque">Our Blogs</h1>
                        <nav className="wow fadeInUp">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Our Blogs</li>
                            </ol>
                        </nav>
                    </div>
                    {/* Page Header Box End */}
                </div>
            </div>
        </div>
    </div>
    {/* Page Header End */}





        {/* Blogs Section Start */}
        <div className="page-blogs" style={{padding: '100px 0 70px'}}>
            <div className="container">
                <div className="row" id="blog-container">

                    {/* Blog Item 1 */}
                    <div className="col-lg-4 col-md-6 mb-4 blog-card">
                        <div className="service-item wow fadeInUp" style={{display: 'flex', flexDirection: 'column', height: 'calc(100% - 30px)', width: '100%', border: '1px solid var(--divider-color)', borderRadius: '40px', padding: '30px', overflow: 'hidden', position: 'relative', background: 'var(--white-color)'}}>
                            <div className="icon-box" style={{width: '100% !important', height: '200px !important', borderRadius: '20px !important', overflow: 'hidden !important', display: 'block !important', marginBottom: '20px !important', background: 'transparent !important'}}>
                                <img src="/images/blog-1.webp" style={{width: '100% !important', height: '100% !important', objectFit: 'cover !important', borderRadius: '20px !important'}} alt="Home Relocation Tips" />
                            </div>
                            <div className="service-content" style={{flexGrow: '1 !important', display: 'flex !important', flexDirection: 'column !important', justifyContent: 'flex-start !important', textAlign: 'left'}}>
                                <span style={{fontSize: '14px', color: 'var(--accent-color)', fontWeight: 600, marginBottom: '10px', textTransform: 'uppercase'}}>Relocation Tips</span>
                                <h3 style={{fontSize: '20px', fontWeight: 'bold', lineHeight: '1.4', marginBottom: '15px'}}><Link href="/blogs/blog-home-relocation" style={{color: 'inherit', textDecoration: 'none'}}>10 Essential Tips for a Hassle-Free Home Relocation</Link></h3>
                                <p style={{fontSize: '15px', color: '#555', lineHeight: '1.6', marginBottom: '20px', flexGrow: 1}}>Moving to a new home doesn't have to be exhausting. From smart packing hacks and decluttering methods to labeling your boxes systematically, follow our ultimate guide to ensure a smooth, organized, and stress-free family relocation experience.</p>
                            </div>
                            <div className="service-btn" style={{marginTop: 'auto !important', textAlign: 'left'}}>
                                <Link href="/blogs/blog-home-relocation" className="readmore-btn" style={{color: 'var(--primary-color)', fontWeight: 600, textTransform: 'uppercase', fontSize: '14px'}}>read more</Link>
                        </div>
                    </div>
                </div>

                {/* Blog Item 2 */}
                <div className="col-lg-4 col-md-6 mb-4 blog-card">
                    <div className="service-item wow fadeInUp" data-wow-delay="0.2s" style={{display: 'flex', flexDirection: 'column', height: 'calc(100% - 30px)', width: '100%', border: '1px solid var(--divider-color)', borderRadius: '40px', padding: '30px', overflow: 'hidden', position: 'relative', background: 'var(--white-color)'}}>
                        <div className="icon-box" style={{width: '100% !important', height: '200px !important', borderRadius: '20px !important', overflow: 'hidden !important', display: 'block !important', marginBottom: '20px !important', background: 'transparent !important'}}>
                            <img src="/images/blog-2.webp" style={{width: '100% !important', height: '100% !important', objectFit: 'cover !important', borderRadius: '20px !important'}} alt="Packing Fragile Items" />
                        </div>
                        <div className="service-content" style={{flexGrow: '1 !important', display: 'flex !important', flexDirection: 'column !important', justifyContent: 'flex-start !important', textAlign: 'left'}}>
                            <span style={{fontSize: '14px', color: 'var(--accent-color)', fontWeight: 600, marginBottom: '10px', textTransform: 'uppercase'}}>Packing Hacks</span>
                            <h3 style={{fontSize: '20px', fontWeight: 'bold', lineHeight: '1.4', marginBottom: '15px'}}><Link href="/blogs/blog-fragile-packing" style={{color: 'inherit', textDecoration: 'none'}}>How to Safely Pack and Move Fragile Items</Link></h3>
                            <p style={{fontSize: '15px', color: '#555', lineHeight: '1.6', marginBottom: '20px', flexGrow: 1}}>Fragile items like glassware, mirrors, and premium ceramics require special handling. Learn how to wrap them securely using bubble wrap, use sturdy double-walled cartons, and arrange them inside transport vehicles to prevent damage.</p>
                        </div>
                        <div className="service-btn" style={{marginTop: 'auto !important', textAlign: 'left'}}>
                            <Link href="/blogs/blog-fragile-packing" className="readmore-btn" style={{color: 'var(--primary-color)', fontWeight: 600, textTransform: 'uppercase', fontSize: '14px'}}>read more</Link>
                        </div>
                    </div>
                </div>

                {/* Blog Item 3 */}
                <div className="col-lg-4 col-md-6 mb-4 blog-card">
                    <div className="service-item wow fadeInUp" data-wow-delay="0.4s" style={{display: 'flex', flexDirection: 'column', height: 'calc(100% - 30px)', width: '100%', border: '1px solid var(--divider-color)', borderRadius: '40px', padding: '30px', overflow: 'hidden', position: 'relative', background: 'var(--white-color)'}}>
                        <div className="icon-box" style={{width: '100% !important', height: '200px !important', borderRadius: '20px !important', overflow: 'hidden !important', display: 'block !important', marginBottom: '20px !important', background: 'transparent !important'}}>
                            <img src="/images/blog-3.webp" style={{width: '100% !important', height: '100% !important', objectFit: 'cover !important', borderRadius: '20px !important'}} alt="Office Relocation Guidelines" />
                        </div>
                        <div className="service-content" style={{flexGrow: '1 !important', display: 'flex !important', flexDirection: 'column !important', justifyContent: 'flex-start !important', textAlign: 'left'}}>
                            <span style={{fontSize: '14px', color: 'var(--accent-color)', fontWeight: 600, marginBottom: '10px', textTransform: 'uppercase'}}>Office Shifting</span>
                            <h3 style={{fontSize: '20px', fontWeight: 'bold', lineHeight: '1.4', marginBottom: '15px'}}><Link href="/blogs/blog-office-shifting" style={{color: 'inherit', textDecoration: 'none'}}>The Ultimate Checklist for Corporate Relocation</Link></h3>
                            <p style={{fontSize: '15px', color: '#555', lineHeight: '1.6', marginBottom: '20px', flexGrow: 1}}>Office relocations require meticulous coordination to minimize business downtime. Discover our corporate shifting checklist, covering early scheduling, tagging electronic systems, securely packing files, and setting up the new layout.</p>
                        </div>
                        <div className="service-btn" style={{marginTop: 'auto !important', textAlign: 'left'}}>
                            <Link href="/blogs/blog-office-shifting" className="readmore-btn" style={{color: 'var(--primary-color)', fontWeight: 600, textTransform: 'uppercase', fontSize: '14px'}}>read more</Link>
                        </div>
                    </div>
                </div>

            </div>
            
            {/* Pagination Section Start */}
            <div className="row">
                <div className="col-lg-12">
                    <div className="page-pagination wow fadeInUp" data-wow-delay="0.6s">
                        <ul className="pagination" id="pagination-list">
                            {/* JS will dynamically populate pagination items */}
                        </ul>
                    </div>
                </div>
            </div>
            {/* Pagination Section End */}
            
        </div>
    </div>
    {/* Blogs Section End */}
    </>
  );
}
