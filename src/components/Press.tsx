import type { PressLogo } from "../types";
import pressData from "../data/press.json";

const pressLogos: PressLogo[] = pressData;

function Press() {
  return (
    <section id="press">
      {pressLogos.map((logo) => (
        <img
          className="press-img"
          src={logo.src}
          alt={logo.alt}
          key={logo.id}
        />
      ))}
    </section>
  );
}

export default Press;
