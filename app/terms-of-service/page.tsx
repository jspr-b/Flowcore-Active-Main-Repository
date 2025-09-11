"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#040405] to-[#0a0a0c] text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Terms of Service
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6 text-gray-300"
        >
          <p>
            The following Terms of Service ("Terms") constitute a legally binding agreement between you, the user
            ("User," "you," or "your"), and FlowCore ("Company," "we," "us," or "our"). These Terms govern your access
            to and use of the Company's website, services, and products (collectively, the "Services"). By accessing or
            using the Services, you acknowledge that you have read, understood, and agree to be bound by these Terms and
            all applicable laws and regulations. If you do not agree with any part of these Terms, you are expressly
            prohibited from using the Services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or utilizing the Services, you hereby affirm and warrant that you have the legal capacity and
            authority to enter into this agreement and comply with these Terms. If you are accessing or using the
            Services on behalf of a business entity, you represent and warrant that you have the authority to bind such
            entity to these Terms, in which case the terms "User," "you," or "your" shall refer to such entity.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Description of Services</h2>
          <p>
            FlowCore provides a suite of advanced artificial intelligence-powered automation and development services,
            including but not limited to the following:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Artificial Intelligence Agent Development and Integration</li>
            <li>Bespoke Artificial Intelligence Workflow Automation</li>
            <li>Intelligent Process Optimization and Reengineering</li>
            <li>Advanced Data Analytics and Predictive Insights Generation</li>
            <li>Artificial Intelligence-Driven Decision Support Systems</li>
            <li>Natural Language Processing and Understanding Solutions</li>
            <li>Machine Learning Model Development, Training, and Deployment</li>
            <li>Artificial Intelligence-Enhanced Web and Mobile Application Development</li>
            <li>Robotic Process Automation (RPA) Integration and Orchestration</li>
            <li>Artificial Intelligence Consulting and Strategic Implementation</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Responsibilities and Obligations</h2>
          <p>
            As a User of our Services, you hereby agree to and acknowledge the following responsibilities and
            obligations:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>To provide accurate, current, and complete information when utilizing our Services</li>
            <li>
              To use the Services solely for lawful purposes and in compliance with all applicable local, state,
              national, and international laws and regulations
            </li>
            <li>
              To refrain from any actions that may interfere with, disrupt, or impose an unreasonable burden on our
              Services or the servers and networks connected to our Services
            </li>
            <li>
              To comply with all applicable laws, regulations, and industry best practices regarding data privacy,
              security, and the ethical use of artificial intelligence technologies
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Intellectual Property Rights and Ownership</h2>
          <p>
            All content, designs, artificial intelligence models, algorithms, software, and any other materials
            developed, created, or provided by FlowCore, including but not limited to our proprietary artificial
            intelligence agents, machine learning models, automated workflows, and any derivative works thereof, shall
            remain the exclusive property of FlowCore, unless explicitly stated otherwise in a separate, written
            agreement. The User is expressly prohibited from copying, modifying, distributing, reverse engineering, or
            attempting to extract the source code of any part of our Services without prior written consent from
            FlowCore. Any artificial intelligence-generated content, insights, or outputs provided through our Services
            are licensed to the User for their use but do not transfer ownership of the underlying artificial
            intelligence models, algorithms, or intellectual property. The User acknowledges and agrees that any
            feedback, suggestions, or ideas provided to FlowCore regarding the Services may be used by FlowCore without
            any obligation to compensate the User for such use.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Payment Terms and Refund Policy</h2>
          <p>
            The payment terms for our Services shall be delineated in separate agreements or invoices provided to the
            User. Unless otherwise specified in writing, FlowCore does not offer refunds for completed work or services
            rendered. In the event of a dispute regarding payments or service delivery, the User agrees to engage in
            good faith negotiations with FlowCore to resolve such disputes before pursuing any legal remedies.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitation of Liability and Indemnification</h2>
          <p>
            FlowCore shall not be liable for any indirect, incidental, special, consequential, or punitive damages
            resulting from the User's use of our Services, including but not limited to loss of profits, data, or
            business opportunities. The User agrees that FlowCore's total liability in connection with these Terms or
            the use of the Services shall not exceed the amount paid by the User for the specific service in question.
            The User agrees to indemnify, defend, and hold harmless FlowCore, its officers, directors, employees,
            agents, and affiliates from and against any and all claims, damages, obligations, losses, liabilities,
            costs, and expenses (including attorney's fees) arising from: (i) the User's use of the Services; (ii) the
            User's violation of these Terms; (iii) the User's violation of any third party rights, including without
            limitation any copyright, property, or privacy right; or (iv) any claim that the User's use of the Services
            has caused damage to a third party.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Third-Party Services and Integrations</h2>
          <p>
            The Services may integrate with or rely upon third-party services, including but not limited to Calendly for
            appointment scheduling, Bubble.io for no-code application development, and Vercel for hosting and
            deployment. The User acknowledges and agrees that the use of such third-party services is subject to their
            respective terms and conditions, privacy policies, and data processing practices. FlowCore expressly
            disclaims any responsibility or liability for the practices, policies, or actions of these third-party
            service providers. The User is strongly encouraged to review and familiarize themselves with the terms of
            service, privacy policies, and any other relevant documentation provided by these third-party services
            before utilizing them in conjunction with FlowCore's Services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Hosting, Deployment, and Data Processing</h2>
          <p>
            FlowCore utilizes Vercel for hosting and deploying our website and certain components of our Services. By
            using our Services, the User expressly acknowledges and consents to the processing and storage of their data
            on Vercel's servers, subject to Vercel's own privacy policy and terms of service. For applications developed
            using Bubble.io, hosting and deployment are managed through the Bubble.io platform. The User's utilization
            of such applications is subject to Bubble.io's terms of service and privacy policy. The User hereby grants
            FlowCore and its third-party service providers all necessary rights and licenses to process, store, and
            transmit the User's data as required to provide the Services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Termination and Suspension of Services</h2>
          <p>
            FlowCore reserves the right, in its sole discretion, to terminate or suspend access to the Services
            immediately, without prior notice or liability, for any reason whatsoever, including without limitation if
            the User breaches any provision of these Terms. Upon termination, the User's right to use the Services will
            immediately cease. All provisions of these Terms which by their nature should survive termination shall
            survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity,
            and limitations of liability.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Governing Law and Jurisdiction</h2>
          <p>
            These Terms of Service shall be governed by and construed in accordance with the laws of the Netherlands,
            without regard to its conflict of law provisions. The User agrees to submit to the personal and exclusive
            jurisdiction of the courts located within the Netherlands for the resolution of any disputes arising out of
            or relating to these Terms or the Services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Modifications to Terms</h2>
          <p>
            FlowCore reserves the right, at its sole discretion, to modify or replace these Terms of Service at any
            time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking
            effect. What constitutes a material change will be determined at our sole discretion. By continuing to
            access or use our Services after any revisions become effective, the User agrees to be bound by the revised
            terms. If the User does not agree to the new terms, they are no longer authorized to use the Services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">12. Contact Information</h2>
          <p>
            If you have any questions, concerns, or require clarification regarding these Terms of Service, please
            direct your inquiries to:
          </p>
          <p className="mt-2">Electronic mail: legal@flowcore.com</p>

          <p className="mt-8 text-sm text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="mt-12">
            <Link href="/Home" className="text-primary hover:text-primary-dark transition-colors duration-200">
              Return to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
