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
              <a href="/" className="page-scroll">
                Home
              </a>
            </li>
            <li className="nav-item dropdown @@FinalResult">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown">
                Media Coverage
                <span>
                  <i className="fas fa-caret-down"></i>
                </span>
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item "
                    href="https://drive.google.com/file/d/1UVCaBsvxjac-0OF7VCAOfPJEOvskYBsz/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Press Release 2024
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item "
                    href="https://drive.google.com/file/d/15kh-LQZkfM7OIu_JuRLl7LhLanf5QdwE/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Press Release 2023
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item "
                    href="/news"
                    rel="noreferrer"
                  >
                    News
                  </a>
                </li>
                {/* <li>
                  <a
                    className="nav-news dropdown-item "
                    href=""
                    target="_blank"
                    rel="noreferrer"
                  >
                    Mahasiswa UMSU Berhasil Meraih Medali Emas GYIIF 2023
                  </a>
                </li>
                <li>
                  <a
                    className="nav-news dropdown-item "
                    href="https://news.bakrie.ac.id/category/prestasi/1427-raihan-bronze-medal-oleh-mahasiswa-sistem-informasi-pada-gyiif-2023"
                    target="_blank"
                    rel="noreferrer"
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
                    rel="noreferrer"
                  >
                    Delegasi UNSOED Raih Gold Medal GYIIF 2023
                  </a>
                </li> */}
              </ul>
            </li>
            <li className="nav-item @@faq ">
              <a className="nav-link page-scroll" href="/lowtahun">
                List of winners
              </a>
            </li>

            <li className="nav-item dropdown @@Curation">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown">
                Curation
                <span>
                  <i className="fas fa-caret-down"></i>
                </span>
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="https://drive.google.com/drive/folders/1ZykbgV1R2M9ILRT1QUn4RWCwcWjpsQVN?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Curation 2024
                  </a>
                  <a
                    className="dropdown-item"
                    href="https://drive.google.com/drive/folders/1dMkwPR-tSI3LORGagyfC52qlpmqSyG_3?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Curation 2023
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown @@FinalResult">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown">
                Gallery
                <span>
                  <i className="fas fa-caret-down"></i>
                </span>
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    href="https://drive.google.com/drive/folders/1v7k8qwGLENT3xXQHNN5yDR2dq6POKUaR?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    2024
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="https://drive.google.com/drive/folders/1qAs5LEt9Z5JQjBL8IzxbaTKgvRALq-Jt?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    2023
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a
                href="https://drive.google.com/drive/folders/19hlx4bvrRFJg2duFQvlTCRf6JswMegUm"
                target="_blank"
                rel="noreferrer"
                className="page-scroll"
              >
                Certificate
              </a>
            </li>
            <li className="nav-item @@faq ">
              <a className="nav-link page-scroll" href="/faq">
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
