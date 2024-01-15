import ParticlesBg from 'particles-bg';
export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <ParticlesBg
          type="circle"
          bg={{
            zIndex: 0,
            bgColor: '#554994',
            position: 'absolute',
            top: 0,
          }}
        />
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                {/* <h2 style={{ color: "yellow" }}>
                  {props.data ? props.data.coming : "Loading"}
                  <span></span>
                </h2> */}
                <h2 style={{ color: 'yellow' }}>
                  {props.data ? props.data.paragraph : 'Loading'}
                </h2>
                <h2 style={{ color: 'white' }}>
                  {props.data ? props.data.title : 'Loading'}
                  {/* <span></span> */}
                </h2>

                {/* REGIST BUTTON */}
                {/* <a
                  href=""
                  className="btn btn-custom btn-lg page-scroll"
                >
                  COMING SOON 2025
                </a>{' '} */}
                {/* GUIDEBOOK BUTTON */}
                {/* <a
                  href="https://drive.google.com/file/d/11l6b0ymm1pi-XlGBsBQYvqQUbGe46Iys/view?usp=sharing"
                  target="_blank"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  GuideBook
                </a>{' '} */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
