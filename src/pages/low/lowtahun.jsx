import React from "react";
import { Navigation } from "../../components/navigation";
import { Footer } from "../../components/footer";

const lowtahun = () => {
  return (
    <>
      <Navigation />
      <section className="low-section">
        <div id="low" className="low container">
          <h2 class="text-center mb-5">List of Winners</h2>
          <div className="row">
            <div className="title text-center">
              <h4>Select by the year of the event you are participating in</h4>
            </div>
            <div className="content text-center">
              <a href="/kategori24" className="btn btn-custom">
                2024
              </a>
              <a
                href="/kategori23"
                className="btn btn-custom"
              >
                2023
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default lowtahun;
