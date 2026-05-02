import { FaApple, FaGooglePlay } from "react-icons/fa";

function CallToAction() {
  return (
    <section id="cta">
      <h3 className="cta-title">Find the True Love of Your Dog's Life Today.</h3>
      <button type="button" className="btn btn-dark btn-lg download-button">
        <FaApple /> Download
      </button>
      <button type="button" className="btn btn-light btn-lg download-button">
        <FaGooglePlay /> Download
      </button>
    </section>
  );
}

export default CallToAction;
