import React from "react";
import { Navigation } from "../../../components/navigation";
import { Footer } from "../../../components/footer";

const jenjangofl24 = () => {
  return (
    <>
      <Navigation />
      <section className="low-section">
        <div id="kategori" className="low container">
          <h2 class="text-center mb-5">List of Winners 2024</h2>
          <div className="row">
            <div className="title text-center">
              <h4>
              Choose based on the Level of the Offline event you are participating in
              </h4>
            </div>
            <div className="content text-center">
              <a
                href="https://drive.google.com/file/d/1gZzaSjcfRdoEt83v6jIY2FUbcpXOJZ76/view?usp=sharing"
                target="_blank" rel="noreferrer"
                className="btn btn-custom"
              >
                University
              </a>
              <a href="https://drive.google.com/file/d/1P7DvPc2OTVvAGmW9C6DHD5keBB4_5aRH/view?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-custom">
                Junior High School
              </a>
              <a
                href="https://drive.google.com/file/d/16-8-mUAJnRzEu4rTrXcgzXFptMkGKHY2/view?usp=sharing"
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

export default jenjangofl24;
