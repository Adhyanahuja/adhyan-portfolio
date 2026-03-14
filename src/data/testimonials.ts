export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Adhyan consistently delivered high-quality results in AI model development and data pipelines. His problem-solving ability and communication made collaboration seamless.",
    name: "Kuldeep Singh Hada",
    title: "Data Science @ SMFG",
    avatar: "/images/testimonials/avatar-1.webp",
  },
  {
    quote:
      "An exceptional mentor with strong ownership and efficiency. Any team would be fortunate to have him.",
    name: "Sarthak Sharma",
    title: "Data Scientist @ Piramal Finance",
    avatar: "/images/testimonials/avatar-2.webp",
  },
];
