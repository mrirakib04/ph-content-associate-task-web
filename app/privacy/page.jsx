"use client";
import React from "react";
import {
  FaShieldAlt,
  FaLock,
  FaUserSecret,
  FaEyeSlash,
  FaShareAlt,
  FaUserCheck,
  FaDatabase,
  FaHandsHelping,
} from "react-icons/fa";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

const Privacy = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const sections = [
    {
      icon: <FaShieldAlt className="text-purple-500" />,
      title: "Data Protection Strategy",
      content:
        "We prioritize the security of your personal data using high-level AES 256-bit encryption. Our systems are regularly audited to ensure that your information remains confidential and protected from unauthorized access or potential data breaches. We maintain rigorous physical, electronic, and procedural safeguards.",
    },
    {
      icon: <FaUserSecret className="text-purple-500" />,
      title: "Information Collection & Usage",
      content:
        "We collect information necessary to provide you with a personalized news experience. This includes reading preferences, bookmarked categories (like Technology or Politics), and technical data such as IP addresses. This helps us optimize site performance and deliver content that truly matters to you.",
    },
    {
      icon: <FaLock className="text-purple-500" />,
      title: "Secure User Access",
      content:
        "Your account security is our top priority. We implement multi-factor authentication (MFA) possibilities and use industry-standard protocols (OAuth 2.0) to protect your login credentials. We never store plain-text passwords; everything is salted and hashed using modern cryptographic standards.",
    },
    {
      icon: <FaEyeSlash className="text-purple-500" />,
      title: "Cookie & Tracking Policy",
      content:
        "We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our audience is coming from. You have full control over these through your browser settings, allowing you to opt-out of non-essential cookies at any time.",
    },
    {
      icon: <FaShareAlt className="text-purple-500" />,
      title: "Data Sharing & Disclosure",
      content:
        "BookWorm Newspaper does not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners and trusted affiliates.",
    },
    {
      icon: <FaUserCheck className="text-purple-500" />,
      title: "Your Rights as a Reader",
      content:
        "Under GDPR and other privacy regulations, you have the right to access, rectify, or delete your personal data. You can request a copy of the data we hold about you or ask us to restrict the processing of your information. Simply contact our privacy team for any such requests.",
    },
    {
      icon: <FaDatabase className="text-purple-500" />,
      title: "Data Retention Period",
      content:
        "We retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our internal policies.",
    },
    {
      icon: <FaHandsHelping className="text-purple-500" />,
      title: "Third-Party Services",
      content:
        "Our service may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit, as we have no control over their content.",
    },
  ];

  return (
    <section className="w-full py-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20" data-aos="fade-down">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Privacy <span className="text-purple-500">Policy</span>
          </h1>
          <div className="h-2 w-32 bg-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            At BookWorm Newspaper, your trust is our most valuable asset. We are
            committed to transparency and protecting the digital privacy of our
            global reading community.
          </p>
        </div>

        {/* Content Grid - 2 Column for 7xl width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((item, index) => (
            <div
              key={index}
              className="bg-[#1E1B4B]/20 border border-purple-500/10 p-4 sm:p-8 md:p-10 rounded-[2.5rem] backdrop-blur-sm hover:border-purple-500/30 transition-all duration-500 hover:bg-[#1E1B4B]/30 group"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="text-3xl md:text-4xl p-5 bg-purple-600/10 rounded-3xl border border-purple-500/20 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-base">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Notice */}
        <div
          className="mt-20 p-8 border-t border-purple-500/10 text-center"
          data-aos="fade-up"
        >
          <p className="text-gray-500 text-sm mb-2">
            If you have any questions about this Privacy Policy, please contact
            our support team.
          </p>
          <div className="text-gray-500 text-xs font-medium uppercase tracking-widest">
            Last Updated: January 16, 2026 • Version 2.4.0
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
