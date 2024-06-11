import React from "react";
import { Navigation } from "../../../components/navigation";
import { Footer } from "../../../components/footer";

const Jenjangonl23 = () => {
  return (
    <>
      <Navigation />
      <section className="low-section">
        <div id="kategori" className="low container">
          <h2 class="text-center mb-5">List of Winners 2023</h2>
          <div className="row">
            <div className="title text-center">
              <h4>
                Choose based on the Level of the Online event you are
                participating in
              </h4>
            </div>
            <div className="content text-center">
              <a
                href="https://drive.google.com/file/d/1bjBG4-E4-bjIulBuZ1jvAcxxlDn-b06_/view?usp=sharing"
                target="_blank" rel="noreferrer"
                className="btn btn-custom"
              >
                University
              </a>
              <a
                href="https://drive.google.com/file/d/1eCt2KaVj-EvOXU4utWEwaSI6QJLAeeg9/view?usp=sharing"
                target="_blank" rel="noreferrer"
                className="btn btn-custom"
              >
                Senior High School
              </a>
              <a
                href="https://drive.google.com/file/d/1Zg4ZYjqvBM-4zXzDPUiDuSKjZO0yEzkN/view?usp=sharing"
                target="_blank" rel="noreferrer"
                className="btn btn-custom"
              >
                Junior High School
              </a>
              <a
                href="https://drive.google.com/file/d/1EWRK9UuK7ayHTgjitr3qqPzkjcDDWavL/view?usp=sharing"
                target="_blank" rel="noreferrer"
                
                className="btn btn-custom"
              >
                Elementary School
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Jenjangonl23;
