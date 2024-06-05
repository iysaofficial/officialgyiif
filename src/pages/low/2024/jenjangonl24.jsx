import React from "react";
import { Navigation } from "../../../components/navigation";
import { Footer } from "../../../components/footer";

const jenjangonl24 = () => {
  return (
    <>
      <Navigation />
      <section className="low-section">
        <div id="kategori" className="low container">
          <h2 class="text-center mb-5">List of Winners</h2>
          <div className="row">
            <div className="title text-center">
              <h4>
                Choose based on the Level of the Online event you are
                participating in
              </h4>
            </div>
            <div className="content text-center">
              <a
                href="https://drive.google.com/file/d/1nfvekJ6PQl4YnePKiUOD6n-oRDl3yx9M/view?usp=sharing"
                target="_blank"
                className="btn btn-custom"
              >
                University
              </a>
              <a
                href="https://drive.google.com/file/d/1vIIXOodRouj7Hh2T5T-IFCUpwz6_hXEC/view?usp=sharing"
                target="_blank"
                className="btn btn-custom"
              >
                Senior High School
              </a>
              <a
                href="https://drive.google.com/file/d/169ChRtCeiTFyGxBlC-Ss_xAM8BQk_1Ag/view?usp=sharing"
                target="_blank"
                className="btn btn-custom"
              >
                Junior High School
              </a>
              <a
                href="https://drive.google.com/file/d/1VEbuQsjzHeMgxGsGt-7fplm6uc_ptiFt/view?usp=sharing"
                target="_blank"
                className="btn btn-custom"
              >
                Elementary
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default jenjangonl24;
