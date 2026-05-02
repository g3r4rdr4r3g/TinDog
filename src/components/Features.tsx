import { FaCheckCircle, FaBullseye, FaHeart } from "react-icons/fa";
import type { Feature } from "../types";
import featuresData from "../data/features.json";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  FaCheckCircle,
  FaBullseye,
  FaHeart,
};

const features: Feature[] = featuresData;

function Features() {
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <div className="features-box col-lg-4" key={feature.id}>
                {Icon && <Icon className="features-icon" size={48} />}
                <h3 className="features-title">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
