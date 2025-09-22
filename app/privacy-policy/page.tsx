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
          className="space-y-6 text-gray-300 max-w-4xl mx-auto"
        >
          <div className="bg-blue-900 bg-opacity-20 p-6 rounded-lg mb-8 border border-blue-700">
            <h3 className="text-xl font-semibold mb-3 text-blue-300">Quick Summary</h3>
            <p className="text-sm">
              We're Praevion B.V., based in Amsterdam. We take your privacy seriously and comply with GDPR. 
              We only collect data we need to provide our services, we protect it carefully, and you have 
              full control over your information. Read on for details, or contact us at privacy@praevion.com 
              if you have questions.
            </p>
          </div>

          <div className="bg-gray-900 p-4 rounded-lg mb-6">
            <p className="text-sm">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}<br />
              <strong>Company:</strong> Praevion B.V.<br />
              <strong>Location:</strong> Amsterdam, Netherlands<br />
              <strong>Contact:</strong> privacy@praevion.com<br />
              <strong>Supervisory Authority:</strong> Autoriteit Persoonsgegevens (Dutch DPA)
            </p>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Who We Are</h2>
          <p>
            We're Praevion B.V., a tech company based in Amsterdam that provides no-code and low-code development 
            services. Under GDPR, we act as the "data controller" for the personal information you provide to us.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. What Information We Collect and Why</h2>
          <p>We only collect information we actually need. Here's what we collect and our legal basis for doing so:</p>
          
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full bg-gray-900 rounded-lg overflow-hidden">
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-4 py-3 text-left">Type of Data</th>
                  <th className="px-4 py-3 text-left">Why We Need It</th>
                  <th className="px-4 py-3 text-left">Legal Basis</th>
                  <th className="px-4 py-3 text-left">How Long We Keep It</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-700">
                  <td className="px-4 py-3">Contact details (name, email, phone)</td>
                  <td className="px-4 py-3">To communicate about projects</td>
                  <td className="px-4 py-3">Contract performance</td>
                  <td className="px-4 py-3">3 years after last contact</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-4 py-3">Company information</td>
                  <td className="px-4 py-3">To deliver services</td>
                  <td className="px-4 py-3">Contract performance</td>
                  <td className="px-4 py-3">7 years (tax requirements)</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-4 py-3">Payment information</td>
                  <td className="px-4 py-3">To process payments</td>
                  <td className="px-4 py-3">Contract performance</td>
                  <td className="px-4 py-3">7 years (tax requirements)</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-4 py-3">Website usage data</td>
                  <td className="px-4 py-3">To improve our website</td>
                  <td className="px-4 py-3">Legitimate interest</td>
                  <td className="px-4 py-3">12 months</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-4 py-3">Marketing preferences</td>
                  <td className="px-4 py-3">To send relevant updates</td>
                  <td className="px-4 py-3">Consent</td>
                  <td className="px-4 py-3">Until you withdraw consent</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td className="px-4 py-3">Security logs</td>
                  <td className="px-4 py-3">To protect our systems</td>
                  <td className="px-4 py-3">Legitimate interest</td>
                  <td className="px-4 py-3">6 months</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Your Rights</h2>
          <p>Under GDPR, you have strong rights over your data. Here's what you can do:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-300 mb-2">✓ Access Your Data</h3>
              <p className="text-sm">Ask us for a copy of all information we have about you</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-300 mb-2">✓ Correct Mistakes</h3>
              <p className="text-sm">Tell us if any information is wrong so we can fix it</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-300 mb-2">✓ Delete Your Data</h3>
              <p className="text-sm">Ask us to delete your information (with some legal exceptions)</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-300 mb-2">✓ Limit Processing</h3>
              <p className="text-sm">Ask us to stop using your data in certain ways</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-300 mb-2">✓ Data Portability</h3>
              <p className="text-sm">Get your data in a format you can transfer elsewhere</p>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-300 mb-2">✓ Object to Processing</h3>
              <p className="text-sm">Tell us to stop processing for marketing or other purposes</p>
            </div>
          </div>

          <div className="bg-green-900 bg-opacity-20 p-4 rounded-lg mt-4 border border-green-700">
            <p className="text-sm">
              <strong>How to use your rights:</strong> Email us at privacy@praevion.com. We'll respond within 
              30 days. It's free unless your request is excessive or repetitive.
            </p>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Where We Store Your Data</h2>
          <p>
            Your data is primarily stored in the European Union (specifically in Amsterdam data centers). 
            We use the following trusted providers:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Cloud hosting: AWS EU (Frankfurt/Amsterdam regions)</li>
            <li>Email: Google Workspace (EU data residency)</li>
            <li>Analytics: Privacy-focused EU providers</li>
          </ul>
          <p className="mt-4">
            <strong>International transfers:</strong> If we ever need to transfer data outside the EU, we'll use:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Standard Contractual Clauses approved by the EU</li>
            <li>Countries with EU adequacy decisions</li>
            <li>Your explicit consent for specific transfers</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. How We Protect Your Data</h2>
          <p>We take security seriously. Here's what we do:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Encrypt all data in transit (TLS 1.3) and at rest (AES-256)</li>
            <li>Regular security audits and penetration testing</li>
            <li>Access controls and two-factor authentication for our team</li>
            <li>Security training for all staff</li>
            <li>ISO 27001 certified data centers</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. If Something Goes Wrong</h2>
          <div className="bg-red-900 bg-opacity-20 p-4 rounded-lg border border-red-700">
            <p>
              <strong>Data breach commitment:</strong> If there's a breach that affects your rights and freedoms:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>We'll notify the Dutch DPA within 72 hours</li>
              <li>We'll inform you directly if there's high risk to your rights</li>
              <li>We'll tell you what happened and what we're doing about it</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Cookies and Tracking</h2>
          <p>
            We use cookies to make our website work better. When you first visit, you'll see a cookie banner 
            where you can:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Accept all:</strong> Allow all cookies</li>
            <li><strong>Reject non-essential:</strong> Only keep necessary cookies</li>
            <li><strong>Customize:</strong> Choose which types you're comfortable with</li>
          </ul>
          
          <div className="bg-gray-900 p-4 rounded-lg mt-4">
            <p className="font-semibold mb-2">Types of cookies we use:</p>
            <ul className="list-disc list-inside ml-4 text-sm">
              <li><strong>Essential:</strong> Make the website work (always on)</li>
              <li><strong>Analytics:</strong> Help us understand how people use our site (optional)</li>
              <li><strong>Preferences:</strong> Remember your settings (optional)</li>
              <li><strong>Marketing:</strong> We don't use marketing cookies</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Children's Privacy</h2>
          <p>
            Our services are for businesses, not children. In the Netherlands, you must be 16 or older to 
            use our services without parental consent. If we learn we've collected data from someone under 16, 
            we'll delete it immediately.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Third Parties We Work With</h2>
          <p>We carefully select partners who help us provide services:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Cloud infrastructure providers (all GDPR compliant)</li>
            <li>Payment processors (PCI-DSS certified)</li>
            <li>Communication tools (with data processing agreements)</li>
          </ul>
          <p className="mt-2">
            All our partners are required to protect your data at least as well as we do.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Automated Decision Making</h2>
          <p>
            We don't use automated decision-making or profiling that affects you in any significant way. 
            All important decisions about our services are made by humans.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Changes to This Policy</h2>
          <p>
            We'll update this policy if our practices change or laws require it. We'll notify you of 
            significant changes via email or a prominent notice on our website.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">12. Contact Us or File a Complaint</h2>
          <div className="bg-gray-900 p-6 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-blue-300">Contact Us First</h3>
                <p className="text-sm mb-2">We're here to help with any privacy concerns:</p>
                <p className="text-sm">
                  <strong>Email:</strong> privacy@praevion.com<br />
                  <strong>Response time:</strong> Within 30 days<br />
                  <strong>Company:</strong> Praevion B.V.<br />
                  <strong>Location:</strong> Amsterdam, Netherlands
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-blue-300">File a Complaint</h3>
                <p className="text-sm mb-2">If you're not satisfied, you can contact:</p>
                <p className="text-sm">
                  <strong>Autoriteit Persoonsgegevens</strong><br />
                  (Dutch Data Protection Authority)<br />
                  <strong>Website:</strong> autoriteitpersoonsgegevens.nl<br />
                  <strong>Phone:</strong> 0900-2001201
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700">
            <Link href="/Home" className="text-primary hover:text-primary-dark transition-colors duration-200">
              ← Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}