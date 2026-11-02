// Parker Cleaning Group - Central Business Data & Source of Truth

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  idealFor: string;
  image: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
  highlights: string[];
}

export const BUSINESS_INFO = {
  name: "Parker Cleaning Group",
  tagline: "Commercial Cleaning, Yorkshire.",
  positioning: "Reliable, tailored commercial cleaning solutions designed for businesses across Yorkshire.",
  facebookUrl: "https://www.facebook.com/share/1JC8pvYPhK/?mibextid=wwXIfr",
  isFullyInsured: true,
  region: "Yorkshire, United Kingdom",
  
  // Verified business telephone
  phone: "07446 406234",
  phoneRaw: "07446406234",
  phoneTel: "tel:07446406234",
  phoneDisplay: "07446 406234",
  phoneIntl: "+44 7446 406234",
  phoneIntlTel: "tel:+447446406234",
  
  // Pending verification from business brief - marked development placeholders
  unverifiedDataNotice: "Certain contact details are awaiting business verification prior to public launch.",
  emailPlaceholder: "enquiries@[awaiting-confirmation].co.uk",
  addressPlaceholder: "Commercial Operations Centre, Yorkshire, UK (Exact address awaiting business verification)",
  operatingHours: "Flexible commercial schedules arranged 7 days a week, tailored around business operating hours",
  
  // Google Map verified location status
  mapStatus: "REGIONAL_YORKSHIRE_COVERAGE" as const,
  mapPlaceholderNote: "Regional Yorkshire commercial service active. Servicing business facilities across all Yorkshire postcodes."
};

export const SERVICES: ServiceItem[] = [
  {
    id: "daily-commercial-cleaning",
    title: "Daily Commercial Cleaning",
    shortDesc: "Routine, high-standard maintenance designed for high-traffic workplaces requiring dependable day-to-day cleanliness.",
    fullDesc: "Our daily commercial cleaning service ensures your premises remain immaculate, hygienic, and welcoming for staff and visitors every single day. We arrange schedules around your operational hours to ensure minimal workplace disruption.",
    features: [
      "Workstation, desk, and high-touch surface sanitisation",
      "Restroom hygiene replenishment and sanitisation",
      "Floor vacuuming, mopping, and hard floor maintenance",
      "Communal kitchen and breakroom hygiene",
      "Waste removal and recycling management"
    ],
    idealFor: "Corporate offices, shared business centres, professional practices, and multi-tenant facilities.",
    image: "/images/service-routine.jpg"
  },
  {
    id: "weekly-commercial-cleaning",
    title: "Weekly Commercial Cleaning",
    shortDesc: "Structured scheduled cleaning providing consistent, thorough maintenance for small-to-medium premises.",
    fullDesc: "Ideal for businesses that do not require daily attendances but demand dependable, systematic cleaning routines to maintain corporate standards, health and safety hygiene, and a professional workspace.",
    features: [
      "Deep surface dust removal and wipe-down",
      "Complete washroom and sanitary maintenance",
      "Kitchenette and tea-point thorough clean",
      "Internal glass and partition cleaning",
      "Full vacuuming and floor sanitisation"
    ],
    idealFor: "Boutique offices, training studios, consulting firms, and commercial facilities.",
    image: "/images/service-office.jpg"
  },
  {
    id: "deep-intensive-cleaning",
    title: "Deep & Intensive Cleaning",
    shortDesc: "Comprehensive, detail-oriented commercial cleaning addressing high-level hygiene and hard-to-reach areas.",
    fullDesc: "An intensive cleaning regime deployed to restore premises to pristine standards. We target built-up grime, deep washroom sanitisation, high-level dusting, and deep extraction cleaning.",
    features: [
      "Steam cleaning and advanced bactericidal sanitisation",
      "High-level dust removal from ducting, vents, and fixtures",
      "Deep hard-floor scrub, buffing, and grime extraction",
      "Thorough sanitisation of sanitary ware and tile grout",
      "Intensive communal kitchen degreasing and deep clean"
    ],
    idealFor: "Periodic hygiene resets, post-renovation premises, audit preparations, and seasonal resets.",
    image: "/images/service-deep.jpg"
  },
  {
    id: "one-off-periodic-cleaning",
    title: "One-Off & Periodic Cleaning",
    shortDesc: "Specialised cleaning interventions tailored for specific corporate events, moves, or scheduled milestones.",
    fullDesc: "Designed for businesses needing a dedicated cleaning session for occasions such as tenancy handovers, post-event restorations, annual facility deep cleans, or unexpected commercial cleaning requirements.",
    features: [
      "End-of-lease commercial sparkle cleans",
      "Pre-event and post-corporate conference cleans",
      "Targeted intensive room or floor resets",
      "Flexible deployment aligned with your timeline",
      "Rapid turnaround without ongoing contracts"
    ],
    idealFor: "Commercial landlords, facility transitions, event spaces, and moving premises.",
    image: "/images/service-warehouse.jpg"
  },
  {
    id: "tailored-commercial-cleaning",
    title: "Tailored Commercial Cleaning",
    shortDesc: "Bespoke cleaning specifications engineered around your exact facility layout, industry protocols, and shifts.",
    fullDesc: "Every commercial facility has unique operational demands. We conduct a thorough assessment of your premises, staff traffic, and hygiene requirements to craft a bespoke cleaning schedule that fits your business seamlessly.",
    features: [
      "Custom cleaning frequency (multi-shift, evening, or weekend)",
      "Sector-specific hygiene protocols and check-sheets",
      "Dedicated account management and consistent cleaning personnel",
      "Scalable arrangements that adapt to your business growth",
      "Transparent service agreements with no hidden fees"
    ],
    idealFor: "Facilities with distinct regulatory requirements, shifting work hours, or complex commercial layouts.",
    image: "/images/services-hero.jpg"
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "offices",
    name: "Offices & Professional Premises",
    description: "Maintaining spotless, distraction-free boardrooms, open-plan workspaces, and reception areas that project corporate excellence.",
    iconName: "Briefcase",
    highlights: ["Desk & phone sanitisation", "Meeting room readiness", "Confidentiality-trained staff"]
  },
  {
    id: "retail",
    name: "Retail & Commercial Premises",
    description: "Gleaming display areas, spotless customer zones, and pristine entrances that elevate customer brand perception.",
    iconName: "Store",
    highlights: ["Streak-free glass & mirrors", "High-traffic floor care", "Pre-opening cleaning slots"]
  },
  {
    id: "warehouses",
    name: "Warehouses & Industrial Units",
    description: "Heavy-duty commercial cleaning for logistics hubs, distribution centres, and industrial workshops focusing on safety.",
    iconName: "Warehouse",
    highlights: ["Industrial floor scrubbing", "Dust control & safety lines", "Breakroom & locker hygiene"]
  },
  {
    id: "education",
    name: "Schools & Educational Facilities",
    description: "Hygienic learning spaces, lecture halls, and staff areas upholding clean, healthy environments for students and educators.",
    iconName: "GraduationCap",
    highlights: ["Child-safe non-toxic products", "Term-time & holiday resets", "High-touch point disinfection"]
  },
  {
    id: "healthcare",
    name: "Healthcare & Care Environments",
    description: "Rigorous hygiene standards for clinics, medical practices, care facilities, and community health centers.",
    iconName: "ShieldAlert",
    highlights: ["Infection control awareness", "Sanitary waste care", "Hospital-grade disinfectants"]
  },
  {
    id: "hospitality",
    name: "Hospitality & Leisure",
    description: "Immaculate presentation for dining venues, lounges, conference centers, and leisure spaces where first impressions matter.",
    iconName: "Coffee",
    highlights: ["Front-of-house polish", "Restroom management", "Flexible late/early shifts"]
  },
  {
    id: "facilities",
    name: "Property & Facilities Management",
    description: "Reliable commercial cleaning partnerships for managing agents, commercial landlords, and facility directors.",
    iconName: "Building2",
    highlights: ["Common area maintenance", "Tenancy transitions", "Consistent standards auditing"]
  }
];

export const CLEANING_PROCESS = [
  {
    step: "01",
    title: "Get in Touch",
    description: "Submit our simple commercial quotation form outlining your premises type and cleaning goals."
  },
  {
    step: "02",
    title: "Discuss Your Requirements",
    description: "Our commercial cleaning specialists discuss your layout, operational hours, and specific hygiene priorities."
  },
  {
    step: "03",
    title: "Receive a Tailored Quote",
    description: "We provide a clear, transparent, itemised commercial cleaning proposal tailored to your requirements."
  },
  {
    step: "04",
    title: "Agree on Cleaning Arrangements",
    description: "We confirm service schedules, access protocols, task checklists, and emergency contact details."
  },
  {
    step: "05",
    title: "Begin the Service",
    description: "Our vetted, fully insured commercial cleaners commence regular cleaning to the agreed standards."
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Commercial Cleaning Focus",
    description: "We specialise strictly in commercial business environments, understanding corporate expectations, compliance, and discretion.",
    icon: "Building"
  },
  {
    title: "Tailored Cleaning Plans",
    description: "No cookie-cutter packages. Every cleaning schedule is customized around your facility layout and working hours.",
    icon: "Sliders"
  },
  {
    title: "Reliable Service",
    description: "Dependable, punctual commercial teams you can trust day after day to keep your working environment pristine.",
    icon: "Clock"
  },
  {
    title: "Professional Approach",
    description: "Uniformed, trained, and thoroughly supervised cleaning professionals who treat your premises with utmost care.",
    icon: "CheckCircle2"
  },
  {
    title: "Fully Insured",
    description: "Full commercial insurance coverage giving Yorkshire business owners and facilities managers complete peace of mind.",
    icon: "ShieldCheck"
  }
];
