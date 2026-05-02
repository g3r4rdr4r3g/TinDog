export interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  image: string;
  imageAlt: string;
  name: string;
  location: string;
}

export interface PressLogo {
  id: number;
  src: string;
  alt: string;
}

export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  features: string[];
  highlighted: boolean;
}

export interface NavLink {
  id: number;
  label: string;
  href: string;
}

export interface SocialLink {
  id: number;
  icon: string;
  url: string;
  label: string;
}
