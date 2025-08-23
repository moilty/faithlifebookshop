'use client'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="w-full px-2 sm:px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction and Scope</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                At Faith Life Bookshop, we are committed to protecting your privacy and ensuring the security 
                of your personal information. This Privacy Policy explains how we collect, use, disclose, and 
                safeguard your information when you visit our website, use our services, or interact with us 
                in any way.
              </p>
              <p>
                This policy applies to all users of our website, customers, and anyone who provides personal 
                information to us through any channel, including but not limited to our website, mobile applications, 
                physical store, customer service interactions, and social media platforms.
              </p>
              <p>
                By using our services, you consent to the collection and use of your information as described 
                in this Privacy Policy. If you do not agree with our policies and practices, please do not use 
                our services.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Personal Information You Provide</h3>
              <p>We collect information you provide directly to us, such as when you:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Create an account or register for our services</li>
                <li>Place orders for products or services</li>
                <li>Contact us for customer support or inquiries</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Participate in surveys, promotions, or contests</li>
                <li>Apply for employment opportunities</li>
                <li>Provide feedback or reviews</li>
                <li>Interact with us on social media platforms</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Types of Personal Information</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Identity Information:</strong> Name, email address, phone number, date of birth</li>
                <li><strong>Contact Information:</strong> Shipping and billing addresses, emergency contacts</li>
                <li><strong>Financial Information:</strong> Payment method details, transaction history</li>
                <li><strong>Account Information:</strong> Username, password, preferences, order history</li>
                <li><strong>Communication Records:</strong> Customer service interactions, feedback, reviews</li>
                <li><strong>Professional Information:</strong> Job title, company, educational institution (for bulk orders)</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Automatically Collected Information</h3>
              <p>When you visit our website or use our services, we automatically collect certain information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
                <li><strong>Usage Information:</strong> Pages visited, time spent on pages, click patterns, search queries</li>
                <li><strong>Location Information:</strong> General location based on IP address (with consent)</li>
                <li><strong>Technical Information:</strong> Cookies, web beacons, and similar tracking technologies</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Primary Uses</h3>
              <p>We use the information we collect for the following primary purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Order Processing:</strong> Process and fulfill your orders, manage payments, and handle returns</li>
                <li><strong>Customer Service:</strong> Respond to inquiries, provide support, and resolve issues</li>
                <li><strong>Account Management:</strong> Create and maintain your account, manage preferences</li>
                <li><strong>Communication:</strong> Send order confirmations, shipping updates, and service notifications</li>
                <li><strong>Marketing:</strong> Send promotional offers, newsletters, and product recommendations (with consent)</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Secondary Uses</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Service Improvement:</strong> Analyze usage patterns to improve our website and services</li>
                <li><strong>Personalization:</strong> Customize your experience based on preferences and behavior</li>
                <li><strong>Security:</strong> Detect and prevent fraud, abuse, and security threats</li>
                <li><strong>Legal Compliance:</strong> Comply with applicable laws, regulations, and legal obligations</li>
                <li><strong>Business Operations:</strong> Conduct research, analytics, and business development</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Legal Basis for Processing</h3>
              <p>We process your personal information based on the following legal grounds:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Contract Performance:</strong> To fulfill our contractual obligations to you</li>
                <li><strong>Legitimate Interest:</strong> To improve our services and prevent fraud</li>
                <li><strong>Consent:</strong> For marketing communications and optional features</li>
                <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">When We Share Your Information</h3>
              <p>We may share your personal information in the following circumstances:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
                <li><strong>Service Providers:</strong> With trusted third-party vendors who assist in our operations</li>
                <li><strong>Payment Processors:</strong> To process payments securely and efficiently</li>
                <li><strong>Shipping Partners:</strong> To fulfill and deliver your orders</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                <li><strong>Protection of Rights:</strong> To protect our rights, property, or safety, or that of others</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Categories of Service Providers</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Technology Providers:</strong> Website hosting, analytics, and security services</li>
                <li><strong>Payment Processors:</strong> Credit card processing and payment gateway services</li>
                <li><strong>Logistics Partners:</strong> Shipping, delivery, and warehouse management services</li>
                <li><strong>Marketing Services:</strong> Email marketing, advertising, and customer relationship management</li>
                <li><strong>Customer Support:</strong> Help desk and customer service platforms</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Data Protection Standards</h3>
              <p>
                All third-party service providers are contractually obligated to protect your information 
                and use it only for the purposes we specify. We do not sell, rent, or trade your personal 
                information to third parties for their marketing purposes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security and Protection</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Security Measures</h3>
              <p>We implement comprehensive security measures to protect your personal information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Encryption:</strong> SSL/TLS encryption for data transmission and storage</li>
                <li><strong>Access Controls:</strong> Role-based access controls and authentication systems</li>
                <li><strong>Network Security:</strong> Firewalls, intrusion detection, and monitoring systems</li>
                <li><strong>Data Backup:</strong> Regular backups with encryption and secure storage</li>
                <li><strong>Employee Training:</strong> Regular security awareness training for all staff</li>
                <li><strong>Incident Response:</strong> Procedures for detecting and responding to security incidents</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Data Retention</h3>
              <p>We retain your personal information only for as long as necessary to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide our services and maintain your account</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Resolve disputes and enforce our agreements</li>
                <li>Improve our services and prevent fraud</li>
              </ul>
              <p>
                When we no longer need your information, we securely delete or anonymize it in accordance 
                with our data retention policies.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Privacy Rights and Choices</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Your Rights</h3>
              <p>Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                <li><strong>Restriction:</strong> Request limitation of how we process your information</li>
                <li><strong>Objection:</strong> Object to certain types of processing</li>
                <li><strong>Withdrawal:</strong> Withdraw consent for processing based on consent</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Marketing Preferences</h3>
              <p>You can control your marketing preferences in several ways:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Unsubscribe from marketing emails using the link in each email</li>
                <li>Update your preferences in your account settings</li>
                <li>Contact our customer service team to update your preferences</li>
                <li>Opt-out of targeted advertising through your browser settings</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Cookie Management</h3>
              <p>
                You can control cookies through your browser settings. However, disabling certain cookies 
                may affect the functionality of our website. For more information, please see our 
                <a href="/cookies" className="text-primary-600 hover:text-primary-700 underline"> Cookie Policy</a>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. International Data Transfers</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Your personal information may be transferred to and processed in countries other than your 
                country of residence. We ensure that such transfers comply with applicable data protection laws.
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Transfer Safeguards</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Standard contractual clauses approved by data protection authorities</li>
                <li>Adequacy decisions for countries with equivalent data protection standards</li>
                <li>Certification schemes and codes of conduct</li>
                <li>Binding corporate rules for transfers within our corporate group</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Children's Privacy</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Our services are not intended for children under the age of 13. We do not knowingly collect 
                personal information from children under 13. If you are a parent or guardian and believe your 
                child has provided us with personal information, please contact us immediately.
              </p>
              <p>
                For users between 13 and 18 years old, we may collect limited information with parental consent 
                or as permitted by applicable law. We encourage parents to monitor their children's online 
                activities and to help us protect their privacy.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to This Privacy Policy</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, 
                technology, legal requirements, or other factors. We will notify you of any material changes by:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Posting the updated policy on our website with a new effective date</li>
                <li>Sending you an email notification for significant changes</li>
                <li>Displaying a prominent notice on our website</li>
                <li>Updating the "Last updated" date at the top of this policy</li>
              </ul>
              <p>
                We encourage you to review this Privacy Policy periodically to stay informed about how we 
                protect your information.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data 
                practices, please contact us:
              </p>
                             <div className="bg-gray-50 rounded-lg p-6">
                 <div className="text-center">
                   <h3 className="font-semibold text-gray-800 mb-2">Privacy Officer</h3>
                   <p><strong>Email:</strong> privacy@faithlife.com</p>
                   <p><strong>Phone:</strong> +234-812-200-5303</p>
                   <p><strong>Hours:</strong> Monday - Friday, 8:00 AM - 6:00 PM</p>
                   <p><strong>Address:</strong> Off FUOYE Road, Oye Ekiti, Ekiti State, Nigeria</p>
                 </div>
                <p className="mt-4 text-sm text-gray-600">
                  We will respond to your inquiry within 30 days of receipt. If you are not satisfied with 
                  our response, you may have the right to lodge a complaint with your local data protection authority.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
