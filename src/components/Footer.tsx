import { FaTwitter, FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";
import type { SocialLink } from "../types";
import navData from "../data/navigation.json";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
};

const socialLinks: SocialLink[] = navData.socialLinks;

function Footer() {
  return (
    <footer id="footer">
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon];
        return (
          <a
            key={link.id}
            href={link.url}
            aria-label={link.label}
            className="footer-icon-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {Icon && <Icon className="footer-icon" size={20} />}
          </a>
        );
      })}
      <p>&copy; Copyright {new Date().getFullYear()} TinDog</p>
    </footer>
  );
}

export default Footer;
