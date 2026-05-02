import { FaApple, FaGooglePlay } from "react-icons/fa";

function Hero() {
  return (
    <div className="row">
      <div className="col-lg-6">
        <h1>Meet new and interesting dogs nearby.</h1>
        <button type="button" className="btn btn-dark btn-lg download-button">
          <FaApple /> Download
        </button>
        <button type="button" className="btn btn-outline-light btn-lg download-button">
          <FaGooglePlay /> Download
        </button>
      </div>
      <div className="col-lg-6">
        <img
          className="title-image"
          src="/iphone6.png"
          alt="iphone-mockup"
        />
      </div>
    </div>
  );
}

export default Hero;
