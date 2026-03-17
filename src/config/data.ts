import { Cloud, Shield, BrainCircuit, Database, Laptop, Network, Lock, BarChart3, Workflow } from "lucide-react"

export const services = [
    {
        title: "Cloud Infrastructure",
        slug: "cloud-infrastructure",
        description: "Scalable cloud architectures designed for high availability, security, and performance. We help you migrate, manage, and optimize your cloud environment.",
        icon: Cloud,
        fullDescription: "Our Cloud Infrastructure service provides a comprehensive solution for businesses looking to leverage the power of the cloud. We design, deploy, and manage secure, scalable, and high-performance cloud environments tailored to your specific needs.",
        benefits: [
            "99.99% Uptime Guarantee",
            "Auto-scaling capabilities",
            "Optimized cost management",
            "24/7 proactive monitoring"
        ],
        features: [
            "Cloud Migration Strategy",
            "Hybrid Cloud Setup",
            "Serverless Architecture",
            "Disaster Recovery Planning"
        ]
    },
    {
        title: "Cybersecurity & Compliance",
        slug: "cybersecurity-compliance",
        description: "Comprehensive security audits, threat detection, and compliance management to protect your critical business data from evolving cyber threats.",
        icon: Shield,
        fullDescription: "In an era of increasing cyber threats, protecting your digital assets is paramount. Our Cybersecurity & Compliance service offers end-to-end protection, from risk assessment to incident response, ensuring your business meets all regulatory requirements.",
        benefits: [
            "Real-time threat detection",
            "GDPR and HIPAA compliance",
            "Zero-trust security model",
            "Regular penetration testing"
        ],
        features: [
            "Security Audits",
            "Endpoint Protection",
            "Identity & Access Management",
            "Security Awareness Training"
        ]
    },
    {
        title: "AI & Machine Learning",
        slug: "ai-machine-learning",
        description: "Leverage the power of artificial intelligence to automate processes, gain data-driven insights, and create smarter customer experiences.",
        icon: BrainCircuit,
        fullDescription: "Transform your business operations with our cutting-edge AI and Machine Learning solutions. We build intelligent systems that analyze data, predict trends, and automate complex tasks to drive efficiency and innovation.",
        benefits: [
            "Process automation",
            "Predictive analytics",
            "Enhanced customer personalization",
            "Data-driven decision making"
        ],
        features: [
            "Natural Language Processing",
            "Computer Vision",
            "Predictive Modeling",
            "Recommendation Engines"
        ]
    },
    {
        title: "Custom Software Development",
        slug: "custom-software",
        description: "Tailored software solutions built with modern technologies to solve your unique business challenges and drive digital transformation.",
        icon: Laptop,
        fullDescription: "We build bespoke software solutions that align perfectly with your business goals. From enterprise web applications to mobile apps, our development team delivers high-quality, scalable code.",
        benefits: [
            "Tailored to your workflow",
            "Scalable architecture",
            "Modern tech stack",
            "Agile development process"
        ],
        features: [
            "Web Application Development",
            "Mobile App Development",
            "API Integration",
            "Legacy System Modernization"
        ]
    },
    {
        title: "Data Analytics & BI",
        slug: "data-analytics",
        description: "Turn raw data into actionable intelligence. We implement robust data pipelines and visualization tools to empower decision-making.",
        icon: Database,
        fullDescription: "Unlock the hidden value in your data. Our Data Analytics & BI services help you collect, process, and visualize data to uncover actionable insights that drive strategic business decisions.",
        benefits: [
            "Real-time dashboards",
            "Consolidated data sources",
            "Improved operational efficiency",
            "Strategic forecasting"
        ],
        features: [
            "Data Warehousing",
            "ETL Pipeline Design",
            "PowerBI / Tableau Implementation",
            "Big Data Processing"
        ]
    },
    {
        title: "Network Solutions",
        slug: "network-solutions",
        description: "Enterprise-grade network design and management services ensuring reliable connectivity and optimal performance for your distributed workforce.",
        icon: Network,
        fullDescription: "Connect your global workforce with our robust Network Solutions. We design, implement, and manage secure, high-speed networks that support your critical business applications and communications.",
        benefits: [
            "High-speed connectivity",
            "Secure VPN access",
            "Optimized bandwidth",
            "Reliable uptime"
        ],
        features: [
            "SD-WAN Implementation",
            "Network Security",
            "WiFi Architecture",
            "Network Monitoring"
        ]
    },
]

export const products = [
    {
        title: "Zent Cloud Suite",
        slug: "zent-cloud-suite",
        description: "A comprehensive cloud management platform that gives you total control over your hybrid infrastructure. Monitor, manage, and optimize your resources from a single pane of glass.",
        icon: Cloud,
        fullDescription: "Zent Cloud Suite is the ultimate solution for managing complex hybrid cloud environments. It provides a unified dashboard to monitor performance, manage costs, and automate operations across AWS, Azure, and Google Cloud.",
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
        featured: true,
    },
    {
        title: "SecureGuard Pro",
        slug: "secureguard-pro",
        description: "Next-generation endpoint protection powered by AI. Defend your network against zero-day threats and sophisticated cyberattacks.",
        icon: Lock,
        fullDescription: "SecureGuard Pro utilizes advanced artificial intelligence to proactively detect and neutralize cyber threats before they cause damage. Protect every endpoint in your network with our lightweight, powerful agent.",
        features: [
            "Real-time threat detection",
            "AI-driven behavior analysis",
            "Automated incident response",
        ],
        benefits: [
            "Zero-day threat protection",
            "Minimal system impact",
            "Instant ransomware rollback",
            "24/7 global threat intelligence"
        ],
    },
    {
        title: "DataFlow Analytics",
        slug: "dataflow-analytics",
        description: "Enterprise business intelligence platform. Transform raw data into actionable insights with our powerful visualization engine.",
        icon: BarChart3,
        fullDescription: "DataFlow Analytics empowers your team to explore data and discover insights without needing SQL knowledge. Connect to any data source and create stunning, interactive dashboards in minutes.",
        features: [
            "Predictive modeling",
            "Interactive dashboards",
            "ETL pipeline integration",
        ],
        benefits: [
            "Self-service BI",
            "Real-time data streaming",
            "Collaboration features",
            "Mobile-ready reports"
        ],
    },
    {
        title: "DevOps Accelerator",
        slug: "devops-accelerator",
        description: "Streamline your CI/CD pipelines and boost developer productivity with our integrated DevOps toolchain.",
        icon: Workflow,
        fullDescription: "accelerate your software delivery lifecycle with DevOps Accelerator. Our platform integrates best-in-class tools for coding, testing, and deploying applications, enabling high-velocity software releases.",
        features: [
            "Automated testing workflows",
            "Container orchestration",
            "Dora metrics tracking",
        ],
        benefits: [
            "Faster time-to-market",
            "Improved code quality",
            "Automated infrastructure as code",
            "Seamless Kubernetes integration"
        ],
    },
]
