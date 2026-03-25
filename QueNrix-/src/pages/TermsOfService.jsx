import { FileText, CheckCircle, AlertCircle, Scale, Shield, Ban } from "lucide-react";
import SectionHeading from "@/Components/SectionHeading.jsx";

const TermsOfService = () => {
  const lastUpdated = "March 11, 2026";

  const sections = [
    {
      icon: FileText,
      title: "Agreement to Terms",
      content: [
        {
          text: "By accessing or using QueNrix's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services."
        },
        {
          text: "We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms of Service on this page and updating the 'Last Updated' date. Your continued use of our services after such modifications constitutes your acceptance of the updated terms."
        }
      ]
    },
    {
      icon: CheckCircle,
      title: "Services Description",
      content: [
        {
          subtitle: "Our Services",
          text: "QueNrix provides web development, UI/UX design, branding, digital marketing, custom software solutions, and training services. The specific scope, deliverables, timeline, and pricing for each project will be outlined in a separate Statement of Work (SOW) or project agreement."
        },
        {
          subtitle: "Service Availability",
          text: "We strive to ensure our services are available 24/7, but we do not guarantee uninterrupted access. We may need to suspend services for maintenance, updates, or unforeseen technical issues. We will provide advance notice when possible."
        },
        {
          subtitle: "Changes to Services",
          text: "We reserve the right to modify, suspend, or discontinue any aspect of our services at any time, with or without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuance of services."
        }
      ]
    },
    {
      icon: Scale,
      title: "User Responsibilities",
      content: [
        {
          subtitle: "Account Security",
          text: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account."
        },
        {
          subtitle: "Acceptable Use",
          text: "You agree to use our services only for lawful purposes and in accordance with these Terms. You may not use our services to transmit any harmful, offensive, or illegal content, or to violate the rights of others."
        },
        {
          subtitle: "Content Accuracy",
          text: "You are solely responsible for the accuracy, quality, and legality of any content you provide to us. You represent that you have all necessary rights to provide such content and that it does not infringe on any third-party rights."
        }
      ]
    },
    {
      icon: Shield,
      title: "Intellectual Property",
      content: [
        {
          subtitle: "Our IP Rights",
          text: "All content, features, and functionality of our services, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, are the exclusive property of QueNrix and are protected by international copyright, trademark, and other intellectual property laws."
        },
        {
          subtitle: "Client IP Rights",
          text: "Upon full payment for services rendered, you will own the final deliverables created specifically for your project, as outlined in your project agreement. However, we retain the right to use the work in our portfolio and for marketing purposes unless otherwise agreed."
        },
        {
          subtitle: "Third-Party IP",
          text: "Some services may include or require the use of third-party software, libraries, or assets. You agree to comply with all applicable third-party license terms and conditions."
        }
      ]
    },
    {
      icon: Ban,
      title: "Limitation of Liability",
      content: [
        {
          subtitle: "Service Warranty",
          text: "Our services are provided 'as is' and 'as available' without any warranties of any kind, either express or implied. We do not warrant that our services will be uninterrupted, secure, or error-free."
        },
        {
          subtitle: "Liability Cap",
          text: "To the maximum extent permitted by law, QueNrix shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or other intangible losses, resulting from your use of our services."
        },
        {
          subtitle: "Maximum Liability",
          text: "Our total liability to you for any claims arising from or related to these Terms or our services shall not exceed the amount you paid us for services in the twelve (12) months preceding the claim."
        }
      ]
    },
    {
      icon: AlertCircle,
      title: "Payment Terms",
      content: [
        {
          subtitle: "Pricing",
          text: "Pricing for our services will be specified in your project agreement or Statement of Work. All prices are in USD unless otherwise stated. We reserve the right to change our pricing at any time, but price changes will not affect projects already under contract."
        },
        {
          subtitle: "Payment Schedule",
          text: "Payment terms will be outlined in your project agreement. Typical payment schedules include: 30% upfront deposit, 40% at project midpoint, and 30% upon completion. Late payments may incur interest charges as specified in your agreement."
        },
        {
          subtitle: "Refunds",
          text: "Refund eligibility will be determined based on the specific terms of your project agreement. Generally, deposits are non-refundable, but we will work with you to resolve any dissatisfaction with our services."
        }
      ]
    },
    {
      icon: FileText,
      title: "Termination",
      content: [
        {
          subtitle: "Termination by You",
          text: "You may terminate your agreement with us at any time by providing written notice. You will be responsible for payment for all work completed up to the termination date, as well as any non-refundable expenses incurred."
        },
        {
          subtitle: "Termination by Us",
          text: "We reserve the right to terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including but not limited to breach of these Terms, non-payment, or illegal activity."
        },
        {
          subtitle: "Effect of Termination",
          text: "Upon termination, your right to use our services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability."
        }
      ]
    },
    {
      icon: Scale,
      title: "Dispute Resolution",
      content: [
        {
          subtitle: "Governing Law",
          text: "These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions."
        },
        {
          subtitle: "Arbitration",
          text: "Any dispute arising from or relating to these Terms or our services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall take place in San Francisco, California."
        },
        {
          subtitle: "Class Action Waiver",
          text: "You agree that any arbitration or legal proceeding shall be conducted on an individual basis and not as a class action, consolidated action, or representative action."
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
            <Scale size={48} className="text-primary" />
          </div>
          <SectionHeading
            label="Terms of Service"
            title="Our Terms & Conditions"
            description="Please read these terms carefully before using our services. By accessing or using QueNrix's services, you agree to be bound by these terms."
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
                      {item.subtitle && (
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                          {item.subtitle}
                        </h3>
                      )}
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
              Questions About These Terms?
            </h3>
            <p className="text-slate-600 mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="space-y-2 text-slate-700">
              <p><strong>Email:</strong> quenrix46@gmail.com</p>
              <p><strong>Phone:</strong> +91 93920 96698</p>
              <p><strong>Address:</strong> Hyderabad, Telangana 500038, IN</p>
            </div>
          </div>

          {/* Acknowledgment */}
          <div className="mt-8 p-6 rounded-xl bg-amber-50 border border-amber-200">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-amber-600 flex-shrink-0 mt-1" size={20} />
              <div>
                <h4 className="font-semibold text-amber-900 mb-1">
                  Important Notice
                </h4>
                <p className="text-sm text-amber-800">
                  By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
