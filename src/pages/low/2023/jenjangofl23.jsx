import React from "react";
import { Navigation } from "../../../components/navigation";
import { Footer } from "../../../components/footer";

const Jenjangofl23 = () => {
  return (
    <>
      <Navigation />
      <section className="low-section">
        <div id="kategori" className="low container">
          <h2 class="text-center mb-5">List of Winners 2023</h2>
          <div className="row">
            <div className="title text-center">
              <h4>
              Choose based on the Level of the Offline event you are participating in
              </h4>
            </div>
            <div className="content text-center">
              <a
                href="https://drive.google.com/file/d/1eViE-28ggEt9RPCCepV-6AsE5H0CaUnK/view?usp=sharing"
                target="_blank" rel="noreferrer"
                className="btn btn-custom"
              >
                University
              </a>
              <a
                href="https://drive.google.com/file/d/1jFM5r3kJVIZIY_QlyNEUh9x5n9WeGJH5/view?usp=sharing"
                target="_blank" rel="noreferrer"
                className="btn btn-custom"
              >
                Senior High School
              </a>
              <a href="https://drive.google.com/file/d/1FMkE2r1tIprynmxfyo9osP92fEKBIxXf/view?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-custom">
                Junior High School
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Jenjangofl23;
