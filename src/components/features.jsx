import { Card } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>ORGANIZED BY</h2>
        </div>
        <div>
          <div className="iysa col-xs-12 col-md-6">
            {" "}
            <img
              src="img/team/iysa.png"
              className="img-responsive "
              alt=""
            />{" "}
          </div>
          <div className="ipb col-xs-12 col-md-6">
            {" "}
            <img
              src="img/team/logo-ITP3.png"
              className="img-responsive"
              alt=""
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
