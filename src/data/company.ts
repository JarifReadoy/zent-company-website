
import { CheckCircle, Clock, Zap, Users } from "lucide-react"

export const company = {
    name: "Zent Technologies Ltd.",
    tagline: "Building the Future of Enterprise",
    contact: {
        address: "123 Innovation Dr, Tech City, TC 90210",
        phone: "+1 (555) 123-4567",
        email: "contact@zenttechnologies.com",
    },
    stats: [
        { label: "Years of Experience", value: "15+" },
        { label: "Projects Delivered", value: "500+" },
        { label: "Team Members", value: "120+" },
        { label: "Global Clients", value: "50+" },
    ],
    values: [
        {
            title: "Innovation First",
            description: "We constantly explore new technologies to keep you ahead of the curve.",
            icon: Zap,
        },
        {
            title: "Client-Centric",
            description: "Your success is our success. We build long-term partnerships.",
            icon: Users,
        },
        {
            title: "Quality Assurance",
            description: "Rigorous testing and code quality standards in every project.",
            icon: CheckCircle,
        },
        {
            title: "Timely Delivery",
            description: "We respect deadlines and deliver on our promises, every time.",
            icon: Clock,
        },
    ],
    process: [
        {
            step: "01",
            title: "Discover",
            description: "We dive deep into your business goals, requirements, and challenges.",
        },
        {
            step: "02",
            title: "Design",
            description: "Creating intuitive user experiences and scalable system architectures.",
        },
        {
            step: "03",
            title: "Build",
            description: "Agile development with regular updates and feedback loops.",
        },
        {
            step: "04",
            title: "Deploy",
            description: "Seamless deployment to production with robust CI/CD pipelines.",
        },
        {
            step: "05",
            title: "Support",
            description: "24/7 maintenance, monitoring, and continuous improvement.",
        }
    ],
    testimonials: [
        {
            quote: "Zent Technologies transformed our digital infrastructure. Their team is simply world-class.",
            author: "Sarah Johnson",
            role: "CTO, FinTech Global",
            image: "/images/avatars/sarah.jpg"
        },
        {
            quote: "Reliable, professional, and innovative. They delivered our complex project on time and within budget.",
            author: "Michael Chen",
            role: "Director of Operations, MediCare Plus",
            image: "/images/avatars/michael.jpg"
        },
        {
            quote: "The best development partner we've worked with. Their attention to detail is unmatched.",
            author: "Emily Davis",
            role: "Founder, EduLearn",
            image: "/images/avatars/emily.jpg"
        }
    ]
}
