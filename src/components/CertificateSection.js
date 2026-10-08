"use client";

import { useState, useEffect } from "react";

export default function CertificateSection() {
  const [isOpen, setIsOpen] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <section className="our-certifications-section">
        <div className="container">
          {/* Section Header */}
          <div className="row align-items-end mb-5">
            <div className="col-lg-8">
              <div className="section-title mb-0">
                <h3 style={{ textTransform: "uppercase", letterSpacing: "1px" }}>official certification</h3>
                <h2>
                  Govt. Recognized & Certified <span>Relocation Partner</span>
                </h2>
                <p style={{ marginTop: "15px" }}>
                  Trust, authenticity, and compliance are at the heart of our service. <strong>DHL Packers And Movers</strong> is officially registered with the <strong>Ministry of Micro, Small and Medium Enterprises (MSME), Government of India</strong> under Udyam Registration, affirming our verified standing and commitment to industry-leading relocation standards across India.
                </p>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">
              <a
                href="/documents/dhl-packers-and-movers-udyam-registration-certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-default cert-download-btn"
              >
                <i className="fa-solid fa-file-pdf me-2"></i> Download Official PDF
              </a>
            </div>
          </div>

          {/* Certificate Showcase & Detailed Credentials Grid */}
          <div className="row align-items-center">
            {/* Left: Certificate Preview Card */}
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="cert-card-outer">
                <div className="cert-card-frame">
                  {/* Verified Ribbon / Badge */}
                  <div className="cert-verified-pill">
                    <i className="fa-solid fa-circle-check"></i>
                    <span>Govt. of India Verified</span>
                  </div>

                  {/* Clickable Image Box */}
                  <div
                    className="cert-img-wrapper"
                    onClick={() => setIsOpen(true)}
                    role="button"
                    tabIndex={0}
                    aria-label="Click to enlarge Udyam Registration Certificate"
                    onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setIsOpen(true)}
                  >
                    <img
                      src="/images/dhl-udyam-registration-certificate.webp"
                      alt="DHL Packers And Movers - Government of India Udyam Registration Certificate"
                      className="img-fluid cert-display-img"
                    />
                    <div className="cert-hover-overlay">
                      <span className="cert-zoom-btn">
                        <i className="fa-solid fa-magnifying-glass-plus me-2"></i>
                        Click to View Full Certificate
                      </span>
                    </div>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="cert-card-footer">
                    <div>
                      <span className="cert-meta-label">Udyam Registration No:</span>
                      <p className="cert-meta-value">UDYAM-TS-02-0123867</p>
                    </div>
                    <button
                      type="button"
                      className="cert-btn-enlarge"
                      onClick={() => setIsOpen(true)}
                      title="Enlarge Certificate"
                    >
                      <i className="fa-solid fa-expand"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Accompanying Authority & Trust Content */}
            <div className="col-lg-7 ps-lg-5">
              <div className="cert-info-column">
                <div className="cert-badge-tag mb-3">
                  <i className="fa-solid fa-award me-2"></i>
                  <span>Ministry of MSME, Govt. of India Recognized</span>
                </div>

                <h3 className="cert-heading">
                  Official Legitimacy & Complete Peace of Mind
                </h3>

                <p className="cert-description">
                  When you entrust your household valuables, business assets, or personal vehicles to a moving company, regulatory compliance and traceability are paramount. Our <strong>Udyam Registration Certificate</strong> proves that <strong>DHL Packers And Movers</strong> is a legitimate, government-recognized transport logistics enterprise operating with full legal accountability.
                </p>

                {/* 4 Feature Highlights Grid */}
                <div className="row g-3 my-3">
                  <div className="col-sm-6">
                    <div className="cert-spec-box">
                      <div className="cert-spec-icon">
                        <i className="fa-solid fa-building-columns"></i>
                      </div>
                      <div>
                        <h4>Enterprise Name</h4>
                        <p>DHL PACKERS AND MOVERS</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="cert-spec-box">
                      <div className="cert-spec-icon">
                        <i className="fa-solid fa-hashtag"></i>
                      </div>
                      <div>
                        <h4>Registration No.</h4>
                        <p>UDYAM-TS-02-0123867</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="cert-spec-box">
                      <div className="cert-spec-icon">
                        <i className="fa-solid fa-truck-ramp-box"></i>
                      </div>
                      <div>
                        <h4>Activity Classification</h4>
                        <p>Land Transportation & Logistics</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="cert-spec-box">
                      <div className="cert-spec-icon">
                        <i className="fa-solid fa-location-dot"></i>
                      </div>
                      <div>
                        <h4>Registered Office</h4>
                        <p>Hyderabad, Telangana, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Benefits / Assurance Bullet Points */}
                <div className="cert-checkpoints">
                  <div className="cert-check-item">
                    <i className="fa-solid fa-circle-check text-accent me-2"></i>
                    <span>
                      <strong>Legally Bound Accountability:</strong> Physical registered premises, transparent billing, and recognized corporate standing.
                    </span>
                  </div>
                  <div className="cert-check-item">
                    <i className="fa-solid fa-circle-check text-accent me-2"></i>
                    <span>
                      <strong>Certified Logistics Handling:</strong> Standardized multi-layer packing materials and trained personnel for safe transit.
                    </span>
                  </div>
                  <div className="cert-check-item">
                    <i className="fa-solid fa-circle-check text-accent me-2"></i>
                    <span>
                      <strong>Pan-India Moving Network:</strong> Full operational license to conduct inter-state and city relocations seamlessly.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="cert-lightbox-backdrop"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="cert-lightbox-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="cert-lightbox-header">
              <div className="d-flex align-items-center">
                <i className="fa-solid fa-shield-halved text-warning me-2 fs-5"></i>
                <h5 className="mb-0 text-white fw-bold">
                  Udyam Registration Certificate &mdash; DHL Packers And Movers
                </h5>
              </div>
              <div className="d-flex align-items-center gap-2">
                <a
                  href="/documents/dhl-packers-and-movers-udyam-registration-certificate.pdf"
                  download="DHL-Packers-And-Movers-Udyam-Certificate.pdf"
                  className="cert-lightbox-action-btn"
                  title="Download Certificate PDF"
                >
                  <i className="fa-solid fa-download me-1"></i> Download PDF
                </a>
                <button
                  type="button"
                  className="cert-lightbox-close"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close Certificate Modal"
                >
                  &times;
                </button>
              </div>
            </div>

            {/* Modal Body with High-Res Image */}
            <div className="cert-lightbox-body">
              <img
                src="/images/dhl-udyam-registration-certificate.webp"
                alt="DHL Packers And Movers Udyam Registration Certificate Full View"
                className="img-fluid cert-lightbox-img"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
