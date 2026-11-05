export type LegalSlug = "privacy" | "terms" | "refunds" | "disclaimer" | "cookies" | "contact" | "accessibility";
export type LegalSection = { heading: string; paragraphs: string[] };
export type LegalDocument = { title: string; eyebrow: string; summary: string; sections: LegalSection[] };
export const legalDocuments: Record<LegalSlug, LegalDocument> = {
  "privacy": {
    "title": "Privacy Policy",
    "eyebrow": "DATA & TRUST",
    "summary": "How StartPick handles information in the current pre-launch build, and what must change before live research or payments.",
    "sections": [
      {
        "heading": "Scope and product status",
        "paragraphs": [
          "This Privacy Policy describes the StartPick website in its current pre-launch state. StartPick is a working product name, not a claim that a registered company exists under this name.",
          "The current site contains informational content and a path-selection preview. Working AI research, saved accounts, idea submissions and paid checkout are not connected. We will update this policy before enabling those features."
        ]
      },
      {
        "heading": "Information that may be processed",
        "paragraphs": [
          "The landing page does not ask for a name, email address, payment details or startup idea. Selecting a path on /start currently changes only temporary on-screen state and does not submit it to a StartPick database.",
          "If and when the site is hosted, infrastructure and security providers may process technical information such as IP addresses, browser details, requested URLs, timestamps, and access or error logs necessary to deliver and protect the site.",
          "If you later contact support, information you voluntarily provide may be used to respond. Avoid sending sensitive information."
        ]
      },
      {
        "heading": "Purposes and legal basis",
        "paragraphs": [
          "Technical data may be processed to deliver the website, investigate failures, and prevent abuse. Correspondence would be processed for the purpose of answering inquiries, subject to applicable law.",
          "Before any research intake or payment system launches, we will explain what data is collected, the purposes, relevant service providers, and the consent or other lawful basis that applies."
        ]
      },
      {
        "heading": "Cookies, analytics, and sharing",
        "paragraphs": [
          "The current frontend does not intentionally set tracking cookies or include third-party advertising, analytics, or session-recording scripts. Hosting or security systems may use essential technical mechanisms once the site is deployed; see the Cookie Policy.",
          "We have not connected an AI research provider or payment gateway to collect submitted user ideas or card payments through this codebase. When such services are implemented, this notice will identify their roles."
        ]
      },
      {
        "heading": "Retention, security, and transfers",
        "paragraphs": [
          "The current path selection is not stored in a StartPick backend. Any future infrastructure logs may be retained according to the real host's configuration and operational requirements. Exact retention details must be verified before launch.",
          "We aim to minimize data collection and apply reasonable safeguards. No system can promise absolute security. Service providers could operate outside your country; any relevant transfers and protections must be described when integrations go live."
        ]
      },
      {
        "heading": "Your rights and choices",
        "paragraphs": [
          "Depending on your location and applicable law, you may be entitled to request access to, correction of, or deletion of personal data, raise privacy objections, or contact a supervisory authority.",
          "A working support address must be published on our Contact page before collecting research submissions. Once available, use it for privacy requests. We may need to verify requests and retain records where required by law."
        ]
      },
      {
        "heading": "Minors and changes",
        "paragraphs": [
          "The service is aimed at people researching startup opportunities. Where law requires parental or guardian consent before processing a minor's data, appropriate consent must be obtained.",
          "This policy will be updated as the product evolves. Material changes to data use will be communicated in an updated notice before the relevant feature is enabled."
        ]
      }
    ]
  },
  "terms": {
    "title": "Terms of Use",
    "eyebrow": "PRODUCT & USE",
    "summary": "What the StartPick website provides today, permitted use, and the boundaries of future research recommendations.",
    "sections": [
      {
        "heading": "Current service",
        "paragraphs": [
          "StartPick is a developing product under a working brand name. Its current landing page and path selector are informational previews, not an operational research engine, checkout, or paid report delivery service.",
          "By using the site you agree to use it lawfully and to understand that previews, designs and example outputs do not represent completed customer research."
        ]
      },
      {
        "heading": "Appropriate use",
        "paragraphs": [
          "Do not interfere with availability, attempt unauthorized access, distribute harmful code, scrape or overload systems abusively, impersonate other users, or violate another person's privacy or rights.",
          "The website is offered for general educational and business-research purposes. You are responsible for your own decisions and how you use its information."
        ]
      },
      {
        "heading": "Research and recommendations",
        "paragraphs": [
          "Future reports may include automated analysis of publicly available sources. Such material can be wrong, incomplete, outdated, or biased. Independently verify important claims before committing money, time, or resources.",
          "Test, Pivot, and Pass labels are analytical suggestions rather than predictions, professional advice, or guarantees of revenue, growth, investment success, or valuation."
        ]
      },
      {
        "heading": "Pricing and transactions",
        "paragraphs": [
          "No live payment method is active on the current website. A one-time $29 full report is an intended product offering, not a current purchase facility.",
          "Before payment is enabled, checkout must display the actual product, total price and taxes, fulfillment conditions, payment/merchant details, refund rights and any applicable terms. The Terms and Refund Policy must then be reviewed and updated."
        ]
      },
      {
        "heading": "Intellectual property and links",
        "paragraphs": [
          "StartPick's original website design, content and branding may not be misrepresented as your own. Rights in linked third-party websites, marks and information remain with their respective owners.",
          "Links may change or become unavailable. Referencing another site does not mean its owner has endorsed StartPick."
        ]
      },
      {
        "heading": "Changes and availability",
        "paragraphs": [
          "Features may change, pause or remain unavailable during development. We do not promise particular uptime, data coverage, factual completeness or error-free service.",
          "The version date at the top of this page identifies the current terms. Updated terms will be published as features are launched."
        ]
      },
      {
        "heading": "Liability and consumer rights",
        "paragraphs": [
          "As far as applicable law permits, content is provided without promises that it is accurate, complete or suitable for any particular business decision. You remain responsible for decisions you make.",
          "Nothing here overrides mandatory consumer rights or excludes liability that cannot lawfully be excluded."
        ]
      }
    ]
  },
  "refunds": {
    "title": "Refund Policy",
    "eyebrow": "PURCHASE PROTECTION",
    "summary": "A transparent statement of the current no-checkout status and how purchase issues will be treated when sales begin.",
    "sections": [
      {
        "heading": "No checkout is live yet",
        "paragraphs": [
          "The current StartPick website does not accept payments or deliver paid reports. There is presently no transaction to cancel or refund.",
          "A $29 one-time decision report is planned. Final pricing, tax treatment, delivery details and refund conditions must be shown before anyone pays."
        ]
      },
      {
        "heading": "Rights at checkout",
        "paragraphs": [
          "Before selling a digital report, StartPick must clearly disclose what the buyer receives, the final amount due and the applicable cancellation and refund terms.",
          "Any policy will respect mandatory rights under the consumer laws that apply. A blanket rule saying refunds are impossible under every circumstance will not be used to remove legal rights."
        ]
      },
      {
        "heading": "Problems to report when purchasing is enabled",
        "paragraphs": [
          "Contact support for a duplicate charge, unauthorized payment, non-delivery, inaccessible purchase or materially defective report. Share the order reference, date and description of the problem.",
          "Do not share complete card numbers, passwords or API keys with support."
        ]
      },
      {
        "heading": "How requests will be handled",
        "paragraphs": [
          "Requests will be evaluated under the actual checkout agreement, delivery status, payment-provider procedures and applicable law. Approved refunds will normally return through the original payment method.",
          "We will publish practical timelines and the payment provider's relevant information when real checkout is introduced."
        ]
      },
      {
        "heading": "Before first sale",
        "paragraphs": [
          "A real monitored contact address, correct merchant details, finalized refund conditions and a working issue-resolution process must be in place before checkout is launched."
        ]
      }
    ]
  },
  "disclaimer": {
    "title": "Research Disclaimer",
    "eyebrow": "IMPORTANT CONTEXT",
    "summary": "How to interpret StartPick's illustrative research preview, future AI analysis, and startup decision recommendations.",
    "sections": [
      {
        "heading": "Illustrative content",
        "paragraphs": [
          "All market charts, sample briefs, mock research rows, verdicts and other research examples on the present landing page are illustrative interface content, not actual studies or verified market findings.",
          "Live research is not connected in this version of StartPick."
        ]
      },
      {
        "heading": "Research limitations",
        "paragraphs": [
          "Future research may summarize public sources and produce automated interpretations. Sources and outputs can be outdated, misleading, incomplete, promotional or factually mistaken. Relevant links do not remove the need for independent checking.",
          "A Test, Pivot, or Pass verdict should be understood as a reasoned suggestion based on available evidence and assumptions, not objective certainty."
        ]
      },
      {
        "heading": "No outcome promises",
        "paragraphs": [
          "StartPick cannot guarantee revenue, customers, funding, product-market fit, investor interest, valuation, profits or business success. Market evidence reduces some uncertainty but does not remove commercial risk."
        ]
      },
      {
        "heading": "Not regulated professional advice",
        "paragraphs": [
          "Content is not legal, financial, tax, investment or other regulated professional advice. Consult appropriate qualified professionals when necessary.",
          "Do not make irreversible decisions solely because of an example or an automated report."
        ]
      },
      {
        "heading": "Independent validation",
        "paragraphs": [
          "Check important source claims, speak to potential customers and test your assumptions. The final decision about what to build and invest in remains yours."
        ]
      }
    ]
  },
  "cookies": {
    "title": "Cookie Policy",
    "eyebrow": "BROWSER PRIVACY",
    "summary": "What cookies and tracking technologies are—and are not—part of the present StartPick frontend.",
    "sections": [
      {
        "heading": "Current frontend",
        "paragraphs": [
          "The current StartPick code does not intentionally set tracking or advertising cookies and contains no product analytics, retargeting pixels or session recording scripts.",
          "This statement describes the source code today. It is not a claim about settings that a future hosting or security provider might independently apply."
        ]
      },
      {
        "heading": "Essential website infrastructure",
        "paragraphs": [
          "When deployed, hosting or security providers may use cookies or technical identifiers necessary to deliver the site, mitigate abuse and keep the site secure. The final configuration must be checked before public launch."
        ]
      },
      {
        "heading": "Future tracking and consent",
        "paragraphs": [
          "If non-essential analytics, advertising or similar trackers are introduced, this policy will be updated and the appropriate notices and consent controls will be implemented where required by law.",
          "The current frontend has no non-essential cookie banner because it does not intentionally use non-essential cookies."
        ]
      },
      {
        "heading": "Browser settings",
        "paragraphs": [
          "You may inspect, remove or block cookies in your browser settings. Blocking essential technologies introduced later may affect website functionality. See the Privacy Policy for broader data practices."
        ]
      }
    ]
  },
  "contact": {
    "title": "Contact",
    "eyebrow": "GET IN TOUCH",
    "summary": "How to reach StartPick about support, privacy requests, accessibility and future purchases.",
    "sections": [
      {
        "heading": "General inquiries",
        "paragraphs": [
          "A monitored support email will be shown below after it is configured for the public website. The current build is not accepting customer reports, subscriptions or payments.",
          "Please do not share personal financial details, passwords, API keys or sensitive documents in general inquiries."
        ]
      },
      {
        "heading": "Privacy and accessibility",
        "paragraphs": [
          "For privacy or accessibility questions, include the relevant page, a short description of the issue and a safe way to respond. We will provide a working channel before collecting customer submissions.",
          "Privacy requests may require reasonable identity verification where applicable."
        ]
      },
      {
        "heading": "Future purchase support",
        "paragraphs": [
          "Once paid reports launch, include the purchase reference and the issue type if reporting a billing or delivery problem. Actual payment-provider and merchant support information will be provided before checkout opens."
        ]
      }
    ]
  },
  "accessibility": {
    "title": "Accessibility",
    "eyebrow": "INCLUSIVE EXPERIENCE",
    "summary": "The accessibility principles and known pre-launch limitations of the StartPick website.",
    "sections": [
      {
        "heading": "Design approach",
        "paragraphs": [
          "We aim for semantic heading structure, keyboard-operable controls, visible focus indicators, readable text, responsive layouts, and support for reduced-motion preferences.",
          "A skip-to-content link and page landmarks are included. This is not a claim that every assistive technology has been tested or that the site has a particular accessibility certification."
        ]
      },
      {
        "heading": "Known limitations and ongoing work",
        "paragraphs": [
          "Some illustrative research graphics have compact decorative labels, and the research workflow is still in development. We will check text scaling, contrast, focus order, touch sizes and screen-reader output before launch.",
          "Actual mobile-device and assistive-technology testing is required to confirm accessibility beyond code review."
        ]
      },
      {
        "heading": "Accessibility feedback",
        "paragraphs": [
          "If you encounter a barrier, send the page URL, device or assistive technology, and description of the problem through the public support channel once it is configured.",
          "A working feedback contact must be published before the product goes live."
        ]
      }
    ]
  }
};
export const legalLinks = [
  {
    "href": "/privacy",
    "label": "Privacy"
  },
  {
    "href": "/terms",
    "label": "Terms"
  },
  {
    "href": "/refunds",
    "label": "Refunds"
  },
  {
    "href": "/disclaimer",
    "label": "Disclaimer"
  },
  {
    "href": "/cookies",
    "label": "Cookies"
  },
  {
    "href": "/contact",
    "label": "Contact"
  },
  {
    "href": "/accessibility",
    "label": "Accessibility"
  }
];
