export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/science.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text tulisan-tengah">
              <h2>About Us</h2>
              <h3>{props.data ? props.data.title : "loading..."}</h3>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <p>{props.data ? props.data.paragraph2 : "loading..."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
