export type TimelineType = "work" | "education" | "achievement" | "leadership";

export interface TimelineItem {
  company: string;
  role: string;
  period: string;
  location: string;
  year: number;
  type: TimelineType;
  metrics: { value: number; suffix: string; label: string }[];
  description: string;
}

export const experiences: TimelineItem[] = [
  {
    company: "D. E. Shaw Group",
    role: "Specialist — Global Analytics & Reporting",
    period: "Dec 2025 — Present",
    location: "Hyderabad, India",
    year: 2025,
    type: "work",
    metrics: [],
    description:
      "Supporting data-driven decision-making through advanced analytics, modeling, and structured reporting at a $60B+ AUM firm.",
  },
  {
    company: "Springer — ICTIS 2025",
    role: "Published Research Paper",
    period: "2025",
    location: "Bangkok, Thailand",
    year: 2025,
    type: "achievement",
    metrics: [],
    description:
      "Adaptive Double Threshold Three Event Energy Detection Scheme for Cognitive Radio Networks.",
  },
  {
    company: "Piramal Finance",
    role: "Data Scientist",
    period: "Sep 2024 — Dec 2025",
    location: "Bengaluru, India",
    year: 2024,
    type: "work",
    metrics: [
      { value: 22000, suffix: "", label: "hrs/mo → <1 hr (Automation)" },
      { value: 99, suffix: "%+", label: "AI Pipeline Accuracy" },
      { value: 60, suffix: "%", label: "Cost Reduction" },
    ],
    description:
      "Built end-to-end AI systems: intelligent document processing, agentic AI frameworks, conversational BI, and fraud detection models.",
  },
  {
    company: "BITS Pilani",
    role: "Dual Degree — B.E. EEE + M.Sc. Mathematics",
    period: "Aug 2019 — Jun 2024",
    location: "Pilani, India",
    year: 2024,
    type: "education",
    metrics: [
      { value: 8.44, suffix: "", label: "CGPA / 10" },
    ],
    description:
      "Graduated with a dual degree and a minor in Data Science. Coursework in ML, Deep Learning, Statistical Inference, and Optimization.",
  },
  {
    company: "IEEE — ICACCT 2024",
    role: "Published Research Paper",
    period: "2024",
    location: "Delhi, India",
    year: 2024,
    type: "achievement",
    metrics: [],
    description:
      "Comparative Study on Spectrum Sensing and Modulation Techniques in Cognitive Radio Networks.",
  },
  {
    company: "Google Cloud",
    role: "Cloud Digital Leader Certification",
    period: "2024 — 2027",
    location: "",
    year: 2024,
    type: "achievement",
    metrics: [],
    description:
      "Earned the Google Cloud Digital Leader certification, validating cloud strategy and digital transformation knowledge.",
  },
  {
    company: "Piramal Finance",
    role: "Risk Analytics Intern",
    period: "Jan 2024 — Jun 2024",
    location: "Bengaluru, India",
    year: 2024,
    type: "work",
    metrics: [
      { value: 0.75, suffix: "", label: "AUC-ROC Score" },
      { value: 70, suffix: "%+", label: "Capture Rate (3rd Decile)" },
    ],
    description:
      "Built a Fraud Detection ML model for unsecured business loans using XGBoost with end-to-end EDA and feature engineering.",
  },
  {
    company: "ITC Limited",
    role: "Data Science Intern",
    period: "May 2023 — Jul 2023",
    location: "Kolkata, India",
    year: 2023,
    type: "work",
    metrics: [
      { value: 1000, suffix: "+", label: "Retail Locations" },
      { value: 25, suffix: "%", label: "Target Improvement" },
    ],
    description:
      "Analyzed sales performance across 10 brands. Built regression models for realistic target setting using Factor Analysis.",
  },
  {
    company: "BITS Pilani",
    role: "Undergraduate Researcher",
    period: "Jan 2023 — Jun 2024",
    location: "Pilani, India",
    year: 2023,
    type: "work",
    metrics: [
      { value: 2, suffix: "", label: "Publications (Springer + IEEE)" },
    ],
    description:
      "Designed an Adaptive Double Threshold Energy Detection model for Cognitive Radio Networks, outperforming conventional methods.",
  },
  {
    company: "Mathematics Association, BITS Pilani",
    role: "Team Lead",
    period: "2022 — 2023",
    location: "Pilani, India",
    year: 2022,
    type: "leadership",
    metrics: [
      { value: 10, suffix: "+", label: "Events Led" },
      { value: 14, suffix: "%", label: "Participation Increase" },
    ],
    description:
      "Led a 4-member team executing 10+ events. Increased participation by 14% using predictive analytics and A/B testing.",
  },
  {
    company: "APOGEE, BITS Pilani",
    role: "Campus Ambassador",
    period: "2022",
    location: "Pilani, India",
    year: 2022,
    type: "leadership",
    metrics: [
      { value: 1200, suffix: "+", label: "Students Managed" },
    ],
    description:
      "Promoted the AAROHAN IQ exam across institutes and managed logistics for 1,200+ students.",
  },
  {
    company: "CSIR-CEERI",
    role: "ML Research Intern",
    period: "May 2021 — Aug 2021",
    location: "Pilani, India",
    year: 2021,
    type: "work",
    metrics: [
      { value: 95, suffix: "%", label: "Prediction Accuracy" },
      { value: 990, suffix: "", label: "Simulated Scenarios" },
    ],
    description:
      "Built ML models to predict leaks in water distribution networks, contributing to sustainability initiatives.",
  },
  {
    company: "BITS Pilani",
    role: "Started Dual Degree Program",
    period: "Aug 2019",
    location: "Pilani, India",
    year: 2019,
    type: "education",
    metrics: [],
    description:
      "Began B.E. Electrical & Electronics + M.Sc. Mathematics with a minor in Data Science at one of India's premier engineering institutions.",
  },
];
