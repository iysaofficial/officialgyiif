export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top ">
      <div className="container-fluid">
        <div className="navbar-header navbar-fluid ">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img
              src="img/gyifLogo.png"
              alt="logo"
              style={{ width: "130px", height: "65px", marginTop: "-20px" }}
            />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#page-top" className="page-scroll">
                Home
              </a>
            </li>
            <li className="nav-item dropdown @@FinalResult">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-toggle="dropdown"
              >
                Media Coverage
                <span>
                  <i className="ti-angle-down"></i>
                </span>
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a
                    className="nav-news dropdown-item "
                    href="https://kemahasiswaan.umsu.ac.id/mahasiswa-umsu-berhasil-meraih-medali-emas-global-youth-invention-and-innovation-fair-gyiif-2023-di-institut-pertanian-bogor/"
                    target="_blank"
                  >
                    Mahasiswa UMSU Berhasil Meraih Medali Emas GYIIF 2023
                  </a>
                </li>
                <li>
                  <a
                    className="nav-news dropdown-item "
                    href="https://news.bakrie.ac.id/category/prestasi/1427-raihan-bronze-medal-oleh-mahasiswa-sistem-informasi-pada-gyiif-2023"
                    target="_blank"
                  >
                    Raihan Bronze Medal Oleh Mahasiswa Sistem Informasi Pada
                    GYIIF 2023
                  </a>
                </li>
                <li>
                  <a
                    className="nav-news dropdown-item "
                    href="https://unsoed.ac.id/id/delegasi-unsoed-raih-gold-medalist-global-youth-invention-innovation-gyiif-2023"
                    target="_blank"
                  >
                    Delegasi UNSOED Raih Gold Medal GYIIF 2023
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item "
                    href="https://drive.google.com/file/d/15kh-LQZkfM7OIu_JuRLl7LhLanf5QdwE/view?usp=sharing"
                    target="_blank"
                  >
                    Press Release 2023
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown @@FinalResult">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-toggle="dropdown"
              >
                List Of Winners
                <span>
                  <i className="ti-angle-down"></i>
                </span>
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="https://drive.google.com/file/d/1ysBGO0QXFyA027UJDfXFh_k-G_2rTD-N/view?usp=sharing"
                    target="_blank"
                  >
                    2023
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown @@Curation">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-toggle="dropdown"
              >
                Curation
                <span>
                  <i className="ti-angle-down"></i>
                </span>
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="https://drive.google.com/drive/folders/1dMkwPR-tSI3LORGagyfC52qlpmqSyG_3?usp=sharing"
                    target="_blank"
                  >
                    Curation 2023
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Gallery
              </a>
            </li>

            <li>
              <a
                href="https://drive.google.com/drive/folders/1Ct5_z9thpDI9-Zr9cYZOfBklt4E6YRS1?usp=share_link"
                target="_blank"
                className="page-scroll"
              >
                Certificate
              </a>
            </li>

            <li className="nav-item @@faq">
              <a className="nav-link" href="#FAQ">
                Faq
              </a>
            </li>

            <li>
              <a href="#contact" className="page-scroll">
                Contact Us
              </a>
            </li>

            {/* NAVBAR GUIDE BOOK */}
            {/* <li className="nav-item dropdown @@FinalResult">
              <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Guide Book
                <span>
                  <i className="ti-angle-down"></i>
                </span>
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="https://drive.google.com/file/d/1kjEQDn9qmt0WXlWyfDRGR238PNnqkDGT/view?usp=share_link" target="_blank">2023</a>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
