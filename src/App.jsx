import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Team } from "./components/Team";
import { Testimonials } from "./components/testimonials";
import { Faq } from "./components/FAQ/faq";
import { Process } from "./components/Registration Process/process";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
// import  guideBook from "./components/guideBook";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      {/* <Gallery data={landingPageData.Gallery} /> */}
      <Process data={landingPageData.Process} />
      <Services data={landingPageData.Services} />
      {/* <Faq data={landingPageData.Faq} /> */}

      <Testimonials />
      {/* <Team/>    */}
      <Contact data={landingPageData.Contact} />
      <Footer />
    </div>
  );
};

export default App;
