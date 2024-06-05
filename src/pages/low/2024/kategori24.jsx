import React from "react";
import { Navigation } from "../../../components/navigation";
import { Footer } from "../../../components/footer";

const kategori24 = () => {
  return (
    <>
      <Navigation />
      <section className="low-section">
        <div id="kategori" className="low container">
          <h2 class="text-center mb-5">List of Winners</h2>
          <div className="row">
            <div className="title text-center">
              <h4>
                Choose based on the Category of the event you are participating
                in
              </h4>
            </div>
            <div className="content text-center">
              <a
                href="https://drive.google.com/file/d/1R4DqU4bRaqh-BiMuQSufpnRv23wiL-uC/view?usp=sharing"
                target="_blank"
                className="btn btn-custom"
              >
                Special Award
              </a>
              <a href="/jenjangofl24" className="btn btn-custom">
                GYIIF OFFLINE
              </a>
              <a href="/jenjangonl24" className="btn btn-custom">
                GYIIF ONLINE
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default kategori24;
