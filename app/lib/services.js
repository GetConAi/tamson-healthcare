import { DollarSign, ShieldCheck, Settings, Compass } from "lucide-react";

export const services = [
  {
    id: "rcm",
    title: "Revenue Cycle Management",
    tagline: "Capture every dollar you've earned.",
    icon: DollarSign,
    summary:
      "End-to-end optimization of billing, coding, collections, and denial management to protect and grow your bottom line.",
    details: [
      "Charge capture and coding accuracy audits",
      "Denial prevention and appeals workflows",
      "Days-in-A/R and clean-claim-rate improvement",
      "Payer contract analysis and negotiation support",
    ],
  },
  {
    id: "compliance",
    title: "Regulatory Compliance",
    tagline: "Stay ready for every survey and audit.",
    icon: ShieldCheck,
    summary:
      "Proactive compliance programs that keep you aligned with CMS, HIPAA, and Joint Commission requirements.",
    details: [
      "Mock surveys and gap assessments",
      "HIPAA privacy and security risk analysis",
      "Policy, procedure, and documentation review",
      "Staff training and corrective action planning",
    ],
  },
  {
    id: "operations",
    title: "Operational Efficiency",
    tagline: "Do more with the resources you have.",
    icon: Settings,
    summary:
      "Workflow redesign and performance improvement that reduce waste, wait times, and burnout across your teams.",
    details: [
      "Patient flow and throughput optimization",
      "Staffing models and capacity planning",
      "Supply chain and cost-reduction initiatives",
      "Lean and Six Sigma process improvement",
    ],
  },
  {
    id: "strategy",
    title: "Strategic Planning",
    tagline: "Build the health system of the future.",
    icon: Compass,
    summary:
      "Data-driven strategy for growth, service-line expansion, mergers, and long-term financial sustainability.",
    details: [
      "Market and competitive analysis",
      "Service-line growth and de novo planning",
      "M&A advisory and integration support",
      "Multi-year financial and capital planning",
    ],
  },
];
