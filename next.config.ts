import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  //this  will give me out file 
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

  async redirects() {
    return [
      // Main pages
      {
        source: "/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/my-en/about",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/my-en/contact-us",
        permanent: true,
      },
      {
        source: "/Career",
        destination: "/my-en/Career",
        permanent: true,
      },
      {
        source: "/our-services",
        destination: "/my-en/our-services",
        permanent: true,
      },

      // Background Screening subpages
      {
        source: "/background-screening/risk-intelligence",
        destination: "/my-en/background-screening/risk-intelligence",
        permanent: true,
      },
      {
        source: "/background-screening/due-diligence",
        destination: "/my-en/background-screening/due-diligence",
        permanent: true,
      },
      {
        source: "/background-screening/risk-audit",
        destination: "/my-en/background-screening/risk-audit",
        permanent: true,
      },
      {
        source: "/background-screening/compliance",
        destination: "/my-en/background-screening/compliance",
        permanent: true,
      },
      {
        source: "/background-screening/intellectual-property",
        destination: "/my-en/background-screening/intellectual-property",
        permanent: true,
      },
      {
        source: "/background-screening/counter-measures",
        destination: "/my-en/background-screening/counter-measures",
        permanent: true,
      },
      {
        source: "/background-screening/financial-crime",
        destination: "/my-en/background-screening/financial-crime",
        permanent: true,
      },
      {
        source: "/background-screening/hr-services",
        destination: "/my-en/background-screening/hr-services",
        permanent: true,
      },
      {
        source: "/background-screening/cyber-security",
        destination: "/my-en/background-screening/cyber-security",
        permanent: true,
      },
      //privacy pages

      {
        source: "/terms-and-conditions",
        destination: "/privacy/terms-and-conditions",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "/privacy/privacy-policy",
        permanent: true,
      },
      {
        source: "/security-policy",
        destination: "/privacy/security-policy",
        permanent: true,
      },
      {
        source: "/whistleblowing-policy",
        destination: "/privacy/whistleblowing-policy",
        permanent: true,
      },
      // Blog redirects
      {
        source: "/why-global-firms-need-certified-screening-help",
        destination: "/why-global-firms-need-certified-screening-help",
        permanent: true,
      },
      {
        source: "/future-of-background-screening-ai-privacy-ethics",
        destination: "/future-of-background-screening-ai-privacy-ethics",
        permanent: true,
      },
      {
        source: "/how-risk-intelligence-boosts-corporate-defense",
        destination: "/how-risk-intelligence-boosts-corporate-defense",
        permanent: true,
      },
      {
        source: "/the-growing-role-of-ai-in-detecting-financial-crimes",
        destination: "/the-growing-role-of-ai-in-detecting-financial-crimes",
        permanent: true,
      },
      {
        source: "/what-role-does-ai-play-in-reducing-false-positives-in-financial-crime-detection",
        destination: "/what-role-does-ai-play-in-reducing-false-positives-in-financial-crime-detection",
        permanent: true,
      },
      {
        source: "/top-tools-and-techniques-for-real-time-risk-monitoring",
        destination: "/top-tools-and-techniques-for-real-time-risk-monitoring",
        permanent: true,
      },
      {
        source: "/top-5-screening-mistakes-and-how-to-prevent-them",
        destination: "/top-5-screening-mistakes-and-how-to-prevent-them",
        permanent: true,
      },
      {
        source: "/the-dos-and-donts-of-background-screening-a-practical-guide",
        destination: "/the-dos-and-donts-of-background-screening-a-practical-guide",
        permanent: true,
      },
      {
        source: "/smart-hiring-tricks-to-make-background-checks-faster-safer-and-more-reliable",
        destination: "/smart-hiring-tricks-to-make-background-checks-faster-safer-and-more-reliable",
        permanent: true,
      },
      {
        source: "/how-to-spot-and-solve-background-check-red-flags-before-they-cost-you",
        destination: "/how-to-spot-and-solve-background-check-red-flags-before-they-cost-you",
        permanent: true,
      },
      {
        source: "/how-to-protect-your-brands-intellectual-property-in-emerging-markets",
        destination: "/how-to-protect-your-brands-intellectual-property-in-emerging-markets",
        permanent: true,
      },
      {
        source: "/how-to-integrate-risk-intelligence-into-day-to-day-business-operations",
        destination: "/how-to-integrate-risk-intelligence-into-day-to-day-business-operations",
        permanent: true,
      },
      {
        source: "/how-to-conduct-a-global-background-check-without-violating-local-laws",
        destination: "/how-to-conduct-a-global-background-check-without-violating-local-laws",
        permanent: true,
      },
      {
        source: "/how-cybersecurity-and-financial-crime-teams-must-collaborate-in-2025",
        destination: "/how-cybersecurity-and-financial-crime-teams-must-collaborate-in-2025",
        permanent: true,
      },
      {
        source: "/compliance-in-2025-key-regulations-every-business-should-know",
        destination: "/compliance-in-2025-key-regulations-every-business-should-know",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
