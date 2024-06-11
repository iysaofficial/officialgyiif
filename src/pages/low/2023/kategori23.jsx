import React from "react";
import { Navigation } from "../../../components/navigation";
import { Footer } from "../../../components/footer";

const Kategori23 = () => {
  return (
    <>
      <Navigation />
      <section className="low-section">
        <div id="kategori" className="low container">
          <h2 class="text-center mb-5">List of Winners 2023</h2>
          <div className="row">
            <div className="title text-center">
              <h4>
                Choose based on the Category of the event you are participating
                in
              </h4>
            </div>
            <div className="content text-center">
              <a
                href="https://drive.google.com/file/d/1x9xx0ffQ4PLBhHDd5GHksTQovfKowOkq/view?usp=sharing"
                target="_blank" rel="noreferrer"
                className="btn btn-custom"
              >
                Special Award
              </a>
              <a href="/jenjangofl23" className="btn btn-custom">
                GYIIF OFFLINE
              </a>
              <a href="/jenjangonl23" className="btn btn-custom">
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

export default Kategori23;
