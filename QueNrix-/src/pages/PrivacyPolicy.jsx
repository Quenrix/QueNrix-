import { Shield, Lock, Eye, FileText, Bell, UserCheck } from "lucide-react";
import SectionHeading from "@/Components/SectionHeading.jsx";

const PrivacyPolicy = () => {
  const lastUpdated = "March 11, 2026";

  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "We collect information you provide directly to us, including your name, email address, phone number, company name, and any other information you choose to provide when you contact us, sign up for our newsletter, or use our services."
        },
        {
          subtitle: "Automatically Collected Information",
          text: "We automatically collect certain information about your device and how you interact with our website, including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates/times of your visits."
        },
        {
          subtitle: "Cookies and Tracking",
          text: "We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent."
        }
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Service Delivery",
          text: "We use your information to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions."
        },
        {
          subtitle: "Communication",
          text: "We may use your contact information to send you marketing communications about our services, upcoming events, and other news. You can opt out of these communications at any time."
        },
        {
          subtitle: "Analytics and Improvement",
          text: "We analyze usage patterns to understand how our services are used, improve our website functionality, develop new features, and enhance user experience."
        }
      ]
    },
    {
      icon: Lock,
      title: "How We Protect Your Information",
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement industry-standard security measures to protect your personal information, including encryption, secure servers, firewalls, and regular security audits."
        },
        {
          subtitle: "Data Access",
          text: "Access to your personal information is restricted to employees and contractors who need to know that information to provide services to you. All personnel are bound by confidentiality agreements."
        },
        {
          subtitle: "Data Retention",
          text: "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law."
        }
      ]
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content: [
        {
          subtitle: "Access and Correction",
          text: "You have the right to access, update, or delete your personal information at any time. Contact us to exercise these rights."
        },
        {
          subtitle: "Data Portability",
          text: "You have the right to request a copy of your personal data in a structured, commonly used, and machine-readable format."
        },
        {
          subtitle: "Opt-Out",
          text: "You can opt out of receiving marketing communications from us by following the unsubscribe link in our emails or contacting us directly."
        },
        {
          subtitle: "Do Not Track",
          text: "We respect Do Not Track signals and do not track, plant cookies, or use advertising when a DNT browser mechanism is in place."
        }
      ]
    },
    {
      icon: Bell,
      title: "Third-Party Services",
      content: [
        {
          subtitle: "Service Providers",
          text: "We may employ third-party companies and individuals to facilitate our services, provide services on our behalf, or assist us in analyzing how our services are used. These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose."
        },
        {
          subtitle: "Analytics",
          text: "We use third-party analytics tools like Google Analytics to help us understand how users interact with our website. These tools may collect information about your use of our services and other websites."
        },
        {
          subtitle: "Links to Other Sites",
          text: "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies."
        }
      ]
    },
    {
      icon: Shield,
      title: "GDPR & CCPA Compliance",
      content: [
        {
          subtitle: "European Users (GDPR)",
          text: "If you are located in the European Economic Area, you have certain rights under the General Data Protection Regulation (GDPR), including the right to access, rectify, erase, restrict processing, object to processing, and data portability."
        },
        {
          subtitle: "California Users (CCPA)",
          text: "If you are a California resident, the California Consumer Privacy Act (CCPA) provides you with rights regarding your personal information, including the right to know, delete, and opt-out of the sale of personal information."
        },
        {
          subtitle: "International Transfers",
          text: "Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ."
        }
      ]
    }
  ];

  return (
    <div className="pt-16 bg-white min-h-screen">
      {/* Hero */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto text-center max-w-3xl">
          <div className="flex items-center justify-center mb-6">
            <Shield size={48} className="text-primary" />
          </div>
          <SectionHeading
            label="Privacy Policy"
            title="Your Privacy Matters to Us"
            description="We are committed to protecting your personal information and your right to privacy. Learn how we collect, use, and safeguard your data."
          />
          <p className="text-slate-600 mt-4">
            Last Updated: <span className="font-semibold text-slate-900">{lastUpdated}</span>
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-16">
            {sections.map((section, index) => (
              <div key={index} className="animate-fade-in">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                    <section.icon size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    {section.title}
                  </h2>
                </div>
                
                <div className="space-y-6 pl-16">
                  {section.content.map((item, idx) => (
                    <div key={idx}>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {item.subtitle}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Questions About Your Privacy?
            </h3>
            <p className="text-slate-600 mb-4">
              If you have any questions or concerns about our privacy practices, please don't hesitate to contact us at:
            </p>
            <div className="space-y-2 text-slate-700">
              <p><strong>Email:</strong> quenrix46@gmail.com</p>
              <p><strong>Phone:</strong> +91 93920 96698</p>
              <p><strong>Address:</strong> Hyderabad, Telangana 500038, IN</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
