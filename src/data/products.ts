
import {
    Cloud, Shield, BarChart3, Workflow,
    GraduationCap, Building, Briefcase,
    ShoppingCart, Globe, FileText,
    CreditCard, Users, type LucideIcon
} from "lucide-react"

export interface Product {
    id: string;
    title: string;
    slug: string;
    description: string;
    fullDescription: string;
    icon: LucideIcon;
    features: string[];
    benefits: string[];
    useCases: string[];
    featured?: boolean;
}

export const products: Product[] = [
    {
        id: "p1",
        title: "ERP",
        slug: "enterprise-resource-planning",
        description: "Complete enterprise resource planning suite for streamlined operations.",
        fullDescription: "A unified platform to manage all your core business processes in real-time. From finance and HR to supply chain and manufacturing, our ERP gives you the visibility and control you need to scale efficiently.",
        icon: Building,
        features: [
            "Financial Management",
            "Supply Chain Management",
            "Human Capital Management",
            "CRM Integration",
            "Real-time Analytics"
        ],
        benefits: [
            "Eliminate data silos",
            "Reduce operational costs",
            "Improve decision-making speed",
            "Automate routine tasks"
        ],
        useCases: [
            "Manufacturing Resource Planning",
            "Retail Inventory Management",
            "Service Industry Operations"
        ],
        featured: true
    },
    {
        id: "p2",
        title: "EduManage System",
        slug: "education-management-system",
        description: "Comprehensive management solution for educational institutions.",
        fullDescription: "Transform the way your school or university operates with EduManage. Connect students, teachers, parents, and administrators in a single collaborative environment.",
        icon: GraduationCap,
        features: [
            "Student Information System",
            "Learning Management System (LMS)",
            "Fee & Finance Management",
            "Examination & Grading",
            "Library Management"
        ],
        benefits: [
            "Streamlined administrative tasks",
            "Enhanced student engagement",
            "Transparent parent communication",
            "Digital record keeping"
        ],
        useCases: [
            "K-12 Schools",
            "Universities & Colleges",
            "Training Centers"
        ]
    },
    {
        id: "p3",
        title: "Payroll Master",
        slug: "payroll-software",
        description: "Automated payroll processing with tax compliance.",
        fullDescription: "Simplify your payroll process and ensure 100% accuracy with Payroll Master. Handle salaries, benefits, taxes, and deductions automatically, adhering to local regulations.",
        icon: CreditCard,
        features: [
            "Automated Salary Calculation",
            "Tax Filing & Compliance",
            "Direct Deposit Integration",
            "Employee Self-Service Portal",
            "Leave Management Integration"
        ],
        benefits: [
            "Compliance with labor laws",
            "Zero payroll errors",
            "Time-saving automation",
            "Employee satisfaction"
        ],
        useCases: [
            "Small to Medium Businesses",
            "Large Enterprises",
            "Remote Teams"
        ]
    },
    {
        id: "p4",
        title: "HRM",
        slug: "human-resource-management",
        description: "Modern HR software for the entire employee lifecycle.",
        fullDescription: "From recruitment to retirement, our HRM helps you manage your most valuable asset: your people. Foster a positive culture and streamline HR operations.",
        icon: Users,
        features: [
            "Recruitment & Onboarding",
            "Performance Management",
            "Time & Attendance Tracking",
            "Employee Database",
            "Benefits Administration"
        ],
        benefits: [
            "Improved retention rates",
            "Streamlined hiring process",
            "Data-driven HR insights",
            "Better employee experience"
        ],
        useCases: [
            "Corporate HR Departments",
            "Staffing Agencies",
            "Startups scaling up"
        ]
    },
    {
        id: "p5",
        title: "Retail POS",
        slug: "pos-system",
        description: "Cloud-based Point of Sale system for retail and hospitality.",
        fullDescription: "Run your retail business or restaurant smoothly with our intuitive POS system. Manage sales, inventory, and customers from an iPad or any device.",
        icon: ShoppingCart,
        features: [
            "Inventory Management",
            "Customer Loyalty Program",
            "Sales Reporting",
            "Multi-store Support",
            "Offline Mode"
        ],
        benefits: [
            "Faster checkout process",
            "Real-time inventory tracking",
            "Increased customer retention",
            "Detailed sales insights"
        ],
        useCases: [
            "Retail Stores",
            "Restaurants & Cafes",
            "Service Providers"
        ]
    },
    {
        id: "p6",
        title: "MicroFin Solution",
        slug: "microfinance-software",
        description: "Specialized software for microfinance institutions.",
        fullDescription: "Empower financial inclusion with MicroFin Solution. Manage loans, savings, and members efficiently with a system designed for the unique needs of microfinance operations.",
        icon: FileText,
        features: [
            "Loan Portfolio Management",
            "Savings Account Tracking",
            "Field Collections App",
            "Regulatory Reporting",
            "Credit Scoring"
        ],
        benefits: [
            "Reduced default rates",
            "Paperless operations",
            "Faster loan disbursement",
            "Transparent reporting"
        ],
        useCases: [
            "Microfinance Institutions",
            "Credit Unions",
            "Community Banks"
        ]
    },
    {
        id: "p7",
        title: "E-Com Platform",
        slug: "e-commerce-solutions",
        description: "Scalable e-commerce platform for modern online businesses.",
        fullDescription: "Launch and grow your online store with our robust E-Com Platform. Built for speed, SEO, and conversion, it offers everything you need to sell online.",
        icon: Globe,
        features: [
            "Customizable Storefront",
            "Secure Payment Gateway",
            "Order Management",
            "Marketing Tools",
            "Mobile App Integration"
        ],
        benefits: [
            "Higher conversion rates",
            "Seamless mobile experience",
            "Global selling capabilities",
            "Easy inventory management"
        ],
        useCases: [
            "DTC Brands",
            "B2B Wholesale",
            "Marketplaces"
        ]
    },
    {
        id: "p8",
        title: "Digital Bio",
        slug: "portfolio-website-development",
        description: "Professional portfolio and personal branding websites.",
        fullDescription: "Showcase your work and build your personal brand with a stunning portfolio website. Perfect for creatives, consultants, and professionals.",
        icon: Briefcase,
        features: [
            "Responsive Templates",
            "Project Showcase Gallery",
            "Resume/CV Integration",
            "Blog & Content Section",
            "Contact Forms"
        ],
        benefits: [
            "Strong online presence",
            "Showcase expertise",
            "Attract new clients",
            "SEO optimized"
        ],
        useCases: [
            "Designers & Artists",
            "Consultants",
            "Freelancers"
        ]
    },
    {
        id: "p9",
        title: "Cloud Suite",
        slug: "cloud-suite",
        description: "Integrated cloud management and orchestration platform.",
        fullDescription: "Cloud Suite is the ultimate solution for managing complex hybrid cloud environments. It provides a unified dashboard to monitor performance, manage costs, and automate operations across AWS, Azure, and Google Cloud.",
        icon: Cloud,
        features: [
            "Multi-cloud dashboard",
            "Automated scaling policies",
            "Cost optimization analytics",
            "Compliance reporting",
        ],
        benefits: [
            "Reduce cloud spend by up to 30%",
            "Single view for all assets",
            "Automated compliance checks",
            "Simplified resource provisioning"
        ],
        useCases: [
            "Enterprises with Hybrid Cloud",
            "Managed Service Providers",
            "Tech Startups"
        ],
        featured: true,
    },
    {
        id: "p10",
        title: "SecureGuard Pro",
        slug: "secureguard-pro",
        description: "AI-driven endpoint protection and threat intelligence.",
        fullDescription: "SecureGuard Pro utilizes advanced artificial intelligence to proactively detect and neutralize cyber threats before they cause damage. Protect every endpoint in your network with our lightweight, powerful agent.",
        icon: Shield,
        features: [
            "Real-time threat detection",
            "AI-driven behavior analysis",
            "Automated incident response",
            "Threat Intelligence Feed"
        ],
        benefits: [
            "Zero-day threat protection",
            "Minimal system impact",
            "Instant ransomware rollback",
            "24/7 global threat intelligence"
        ],
        useCases: [
            "Financial Institutions",
            "Healthcare Providers",
            "Government Agencies"
        ],
        featured: true,
    },
    {
        id: "p11",
        title: "DataFlow",
        slug: "dataflow-analytics",
        description: "Business intelligence and data visualization tool.",
        fullDescription: "DataFlow Analytics empowers your team to explore data and discover insights without needing SQL knowledge. Connect to any data source and create stunning, interactive dashboards in minutes.",
        icon: BarChart3,
        features: [
            "Predictive modeling",
            "Interactive dashboards",
            "ETL pipeline integration",
            "Natural Language Querying"
        ],
        benefits: [
            "Self-service BI",
            "Real-time data streaming",
            "Collaboration features",
            "Mobile-ready reports"
        ],
        useCases: [
            "Retail Analytics",
            "Supply Chain Optimization",
            "Marketing Performance"
        ]
    },
    {
        id: "p12",
        title: "DevOps Accel",
        slug: "devops-accelerator",
        description: "CI/CD automation and infrastructure management.",
        fullDescription: "Accelerate your software delivery lifecycle with DevOps Accelerator. Our platform integrates best-in-class tools for coding, testing, and deploying applications, enabling high-velocity software releases.",
        icon: Workflow,
        features: [
            "Automated testing workflows",
            "Container orchestration",
            "Dora metrics tracking",
            "Infrastructure as Code"
        ],
        benefits: [
            "Faster time-to-market",
            "Improved code quality",
            "Automated infrastructure",
            "Seamless Kubernetes integration"
        ],
        useCases: [
            "Software Development Teams",
            "SaaS Companies",
            "Enterprise IT"
        ]
    }
]
