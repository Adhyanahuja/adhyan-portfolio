export interface Publication {
  title: string;
  venue: string;
  publisher: string;
  year: string;
  location: string;
  link: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt?: string;
  logo: string;
}

export const publications: Publication[] = [
  {
    title:
      "Adaptive Double Threshold Three Event Energy Detection Scheme for Cognitive Radio Networks",
    venue: "ICTIS 2025",
    publisher: "Springer",
    year: "2025",
    location: "Bangkok, Thailand",
    link: "https://link.springer.com/chapter/10.1007/978-981-96-8750-3_31",
    description:
      "Proposed a novel adaptive double-threshold energy detection model that dynamically adjusts sensing thresholds based on SNR conditions, outperforming conventional fixed-threshold methods in cognitive radio networks.",
    tags: ["Cognitive Radio", "Spectrum Sensing", "Signal Processing"],
    image: "/images/publications/springer-ictis.webp",
    imageAlt: "ICTIS 2025 Proceedings Book Cover — Springer",
    logo: "/images/publications/springer-logo.webp",
  },
  {
    title:
      "Comparative Study on Spectrum Sensing and Modulation Techniques in Cognitive Radio Networks",
    venue: "ICACCT 2024",
    publisher: "IEEE",
    year: "2024",
    location: "Delhi, India",
    link: "https://ieeexplore.ieee.org/document/10918496",
    description:
      "Conducted a comprehensive comparative analysis of spectrum sensing methods and modulation techniques, evaluating performance trade-offs across detection probability, false alarm rates, and throughput in CRN environments.",
    tags: ["Cognitive Radio", "Modulation", "Wireless Networks"],
    image: "/images/publications/ieee-icacct.webp",
    imageAlt: "Presenting research at ICTIS 2025, Bangkok Marriott Hotel Sukhumvit",
    logo: "/images/publications/ieee-logo.webp",
  },
];
