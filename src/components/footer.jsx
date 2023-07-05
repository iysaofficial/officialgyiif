// import logo from '../public/img/gyifLogo.png';

export const Footer = (props) => {
  return (
    <div>
      <div id="footer" style={{ backgroundColor: "#B0E0E6" }}>
        <div className="footer-top">
          <div className="footer-section col-md-4 tulisan-tengah">
            <section>
              <h3>About Us</h3>
              <p>
                By looking at the development and knowledge of children today
                about science, invention and innovation, especially in the field
                of science, it requires us to know the extent of the students'
                insights, knowledge and abilities in applying their knowledge of
                science.
              </p>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/p/Indonesia-Young-scientist-Association-100063979907207/"
                    target="_blank"
                    style={{ width: "50px", marginLeft: "5px" }}
                  >
                    <i class="fa fa-facebook"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/gyiif_official/?hl=id"
                    target="_blank"
                    style={{ marginLeft: "10px" }}
                  >
                    <i class="fa fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/c/IYSAOfficial"
                    target="_blank"
                    style={{ marginLeft: "10px" }}
                  >
                    <i class="fa fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </section>
          </div>
          {/*  style={{ marginLeft: "70px", marginTop: "-2%" }} */}
          <div className=" footer-section col-md-3">
            <section>
              <h3>Information link </h3>
              <ul>
                <li style={{ marginTop: "5px" }}>
                  <a href="./#">Home</a>
                </li>
                <li style={{ marginTop: "5px" }}>
                  <a href="#about">About</a>
                </li>
                <li style={{ marginTop: "5px" }}>
                  <a href="#portfolio">Gallery</a>
                </li>
                <li style={{ marginTop: "5px" }}>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </section>
          </div>
          <div style={{ marginLeft: "10px", marginTop: "0%" }}>
            <section>
              <div
                className="container text-center"
                style={{ marginTop: "70px" }}
              >
                <p>
                  &copy; 2022 Official GYIIF. Design by{" "}
                  <a href="./#" rel="nofollow">
                    Web Developer
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
