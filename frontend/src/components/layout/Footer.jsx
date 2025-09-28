function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-auto">
      <div className="container">
        <div className="row text-center text-md-start">
          
          {/* Brand + About + Social Icons */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold text-primary">SmartLMS</h5>
            <p className="small">
              Empower your learning journey with our curated courses from top educators.
            </p>
            {/* Social Icons */}
            <div className="d-flex justify-content-center justify-content-md-start gap-3 fs-5 mt-3">
              <a href="#" className="text-light" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-light" aria-label="Twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="text-light" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-light" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/courses" className="text-light text-decoration-none">Courses</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold">Contact Us</h6>
            <p className="mb-1 small"><i className="bi bi-geo-alt-fill me-2"></i>Cyberpark, Gurugram</p>
            <p className="mb-1 small"><i className="bi bi-envelope-fill me-2"></i>info@smartlms.com</p>
            <p className="mb-0 small"><i className="bi bi-telephone-fill me-2"></i>+1 999 999 999</p>
          </div>
        </div>

        <hr className="border-secondary" />
        <div className="text-center small">
          &copy; {new Date().getFullYear()} SmartLMS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

