"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#040405] to-[#0a0a0c] text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Privacy Policy
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6 text-gray-300"
        >
          <p>
            FlowCore, hereinafter referred to as "the Company," in its capacity as a purveyor of digital services,
            hereby promulgates this Privacy Policy to elucidate the methodologies, protocols, and practices employed in
            the collection, utilization, dissemination, and safeguarding of personal data pertaining to users of our
            digital platforms and services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information Acquisition and Aggregation</h2>
          <p>The Company may, at its discretion, procure and amass the following categories of data:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              Personally identifiable information, including but not limited to, appellations, electronic mail
              addresses, and telephonic contact numbers, voluntarily furnished through our designated communication
              channels
            </li>
            <li>Corporate entity information proffered in conjunction with service requisitions</li>
            <li>Usage metrics and analytical data harvested through our digital platforms</li>
            <li>
              Temporal and logistical information provided in the course of scheduling engagements via third-party
              applications
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Utilization of Acquired Information</h2>
          <p>
            The Company reserves the right to employ the accumulated data for multifarious purposes, encompassing, but
            not constrained to:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Facilitation and enhancement of our proprietary no-code and low-code development services</li>
            <li>
              Engagement in bilateral communication regarding our services, ongoing projects, and scheduled appointments
            </li>
            <li>Conducting analytical assessments of usage patterns and trends to augment user experience</li>
            <li>Ensuring the inviolability and integrity of our digital infrastructure</li>
            <li>Customization and optimization of our service offerings to align with user requirements</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Dissemination and Disclosure Protocols</h2>
          <p>The Company may, under certain circumstances, disseminate user information to:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Third-party service providers and strategic partners who facilitate our operational processes</li>
            <li>Regulatory authorities and law enforcement agencies, as mandated by applicable legal statutes</li>
            <li>Other entities, contingent upon explicit user authorization</li>
          </ul>
          <p>
            The Company categorically affirms that it does not engage in the commodification of personal user data to
            third-party entities.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security Measures</h2>
          <p>
            The Company implements industry-standard security protocols to safeguard user data, including but not
            limited to:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Utilization of state-of-the-art encryption methodologies for data in transit and at rest</li>
            <li>Periodic execution of comprehensive security audits and vulnerability assessments</li>
            <li>Implementation of robust access control mechanisms and multi-factor authentication protocols</li>
            <li>Adherence to secure development practices in our proprietary no-code and low-code solutions</li>
          </ul>
          <p>
            Notwithstanding the aforementioned measures, it is imperative to acknowledge that no method of data
            transmission or electronic storage can be guaranteed to be entirely impervious to security breaches.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation of Liability and User Responsibilities</h2>
          <p>
            Notwithstanding the implementation of stringent security measures, the Company hereby expressly disclaims
            any and all liability for data breaches, unauthorized access, or any other security incidents that may
            transpire. By availing themselves of our services, users explicitly acknowledge and acquiesce to the
            following stipulations:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>
              Users bear sole responsibility for maintaining the security and integrity of their proprietary data.
            </li>
            <li>
              Users are obligated to implement necessary precautionary measures to safeguard their sensitive
              information.
            </li>
            <li>
              The Company shall not be held liable for any unauthorized access, data loss, or consequential damages
              arising from such incidents.
            </li>
            <li>
              Users covenant to collaborate with the Company in maintaining data security, including the prompt
              reporting of any suspected breaches or unauthorized access attempts.
            </li>
          </ul>
          <p className="mt-2">
            This policy is meticulously crafted to preserve and protect the Company's interests while maintaining
            transparency regarding our data handling practices. Users are strongly admonished to exercise heightened
            caution and implement robust security measures when sharing sensitive information.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. User Rights and Prerogatives</h2>
          <p>Users are vested with certain inalienable rights, including but not limited to:</p>
          <ul className="list-disc list-inside ml-4">
            <li>The right to access, rectify, or expunge their personal information</li>
            <li>The option to opt out of marketing communications</li>
            <li>The ability to request a comprehensive copy of their data</li>
            <li>The prerogative to withdraw consent for data processing</li>
          </ul>
          <p>
            To exercise these rights, users are directed to communicate with our designated privacy officer at
            privacy@flowcore.com.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Cookies and Tracking Technologies</h2>
          <p>
            Our digital platforms employ cookies and analogous tracking technologies to enhance user experience and
            collect usage data. Users retain the ability to manage their cookie preferences through their respective
            browser settings.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Third-Party Links and Services</h2>
          <p>
            Our digital platforms may contain hyperlinks to third-party websites or services. These third-party entities
            operate under their own privacy policies, and the Company expressly disclaims any responsibility for their
            practices. Users are strongly encouraged to peruse the privacy policies of these third-party entities prior
            to divulging any personal information.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Children's Privacy</h2>
          <p>
            The Company's services are not intended for consumption by individuals under the age of 13. The Company does
            not knowingly solicit or collect personal information from children under 13. In the event that the Company
            becomes aware of the inadvertent collection of information from a child under 13, immediate action will be
            taken to expunge such information from our records.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Amendments to this Privacy Policy</h2>
          <p>
            The Company reserves the right to modify, amend, or update this Privacy Policy at any time to reflect
            changes in our practices or for legal, operational, or regulatory reasons. Users will be notified of any
            material changes through the posting of the updated Privacy Policy on this page, accompanied by a revision
            of the "Last updated" date.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Information</h2>
          <p>
            For any inquiries, concerns, or clarifications regarding this Privacy Policy or our data handling practices,
            please direct your communication to:
          </p>
          <p className="mt-2">Electronic mail: privacy@flowcore.com</p>

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
