'use client'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="w-full px-2 sm:px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction and Acceptance</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Welcome to Faith Life Bookshop. These Terms of Service ("Terms") govern your use of our website, 
                mobile applications, and services (collectively, the "Services"). By accessing or using our Services, 
                you agree to be bound by these Terms and all applicable laws and regulations.
              </p>
              <p>
                If you do not agree with any of these terms, you are prohibited from using or accessing our Services. 
                The materials contained in our Services are protected by applicable copyright and trademark law.
              </p>
              <p>
                These Terms constitute a legally binding agreement between you and Faith Life Bookshop. We may update 
                these Terms from time to time, and your continued use of our Services after such changes constitutes 
                acceptance of the updated Terms.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Description</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Faith Life Bookshop provides educational materials, books, and related products through our online 
                platform and physical store. Our Services include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Online book sales and e-commerce platform</li>
                <li>Educational resource distribution</li>
                <li>Customer support and consultation services</li>
                <li>Bulk order processing for institutions</li>
                <li>Delivery and shipping services</li>
                <li>Account management and order tracking</li>
              </ul>
              <p>
                We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time 
                without prior notice.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts and Registration</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Account Creation</h3>
              <p>To access certain features of our Services, you may be required to create an account. When creating an account, you must:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Keep your account credentials secure and confidential</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Account Responsibilities</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>You are responsible for maintaining the confidentiality of your password</li>
                <li>You agree to accept responsibility for all activities that occur under your account</li>
                <li>You must be at least 18 years old or have parental consent to create an account</li>
                <li>You may not transfer or sell your account to another person</li>
                <li>We reserve the right to terminate accounts that violate these Terms</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Intellectual Property Rights</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Intellectual Property</h3>
              <p>
                All content, features, and functionality of our Services, including but not limited to text, 
                graphics, logos, images, audio clips, digital downloads, data compilations, and software, are 
                owned by Faith Life Bookshop or its licensors and are protected by copyright, trademark, and 
                other intellectual property laws.
              </p>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">License to Use</h3>
              <p>We grant you a limited, non-exclusive, non-transferable, and revocable license to access and use our Services for personal, non-commercial purposes, subject to these Terms. This license does not include:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Modifying or copying our materials</li>
                <li>Using materials for commercial purposes or public display</li>
                <li>Attempting to reverse engineer any software</li>
                <li>Removing copyright or proprietary notations</li>
                <li>Transferring materials to another person or mirroring on other servers</li>
                <li>Using our trademarks or trade dress without permission</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">User-Generated Content</h3>
              <p>
                By submitting content to our Services (reviews, comments, feedback), you grant us a worldwide, 
                non-exclusive, royalty-free license to use, reproduce, modify, and distribute such content. 
                You represent that you have the right to grant this license.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Product Information and Pricing</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Product Descriptions</h3>
              <p>
                We strive to provide accurate and complete product information, including descriptions, prices, 
                availability, and specifications. However, we do not warrant that product information is always 
                accurate, complete, reliable, current, or error-free.
              </p>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Pricing Information</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All prices are subject to change without prior notice</li>
                <li>Prices do not include applicable taxes, shipping, or handling fees</li>
                <li>We reserve the right to correct pricing errors</li>
                <li>Bulk order pricing may differ from individual item pricing</li>
                <li>Promotional prices are valid only for the specified time period</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Product Availability</h3>
              <p>
                Product availability is subject to change. We do not guarantee that products will be available 
                at the time of order placement. If a product becomes unavailable, we will notify you and provide 
                options for replacement or refund.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Ordering and Payment</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Order Process</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Orders are subject to acceptance and availability</li>
                <li>We reserve the right to refuse or cancel any order</li>
                <li>Order confirmation does not guarantee product availability</li>
                <li>Payment must be completed at the time of ordering</li>
                <li>Orders may be cancelled if payment cannot be processed</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Payment Methods</h3>
              <p>We accept various payment methods as indicated on our website:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Credit and debit cards (Visa, MasterCard, American Express)</li>
                <li>Bank transfers and direct deposits</li>
                <li>Digital payment platforms</li>
                <li>Cash on delivery (for eligible areas)</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Payment Security</h3>
              <p>
                By providing payment information, you represent and warrant that you have the legal right to use 
                the payment method. We implement industry-standard security measures to protect your payment 
                information, but we cannot guarantee absolute security.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Shipping and Delivery</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Delivery Options</h3>
              <p>We offer various delivery options to meet your needs:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Standard delivery (3-5 business days)</li>
                <li>Express delivery (1-2 business days)</li>
                <li>Same-day delivery (for eligible areas)</li>
                <li>Store pickup (available at our physical location)</li>
                <li>International shipping (subject to availability)</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Delivery Terms</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Delivery times are estimates and may vary based on location and circumstances</li>
                <li>Risk of loss and title transfer upon delivery to carrier</li>
                <li>We are not responsible for delays beyond our control</li>
                <li>Additional charges may apply for remote or international delivery</li>
                <li>Signature may be required for high-value orders</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Delivery Issues</h3>
              <p>
                If you experience delivery issues, please contact our customer service team immediately. 
                We will work with our shipping partners to resolve any problems and ensure your satisfaction.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Returns and Refunds</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Our return and refund policies are designed to ensure your satisfaction. Please refer to our 
                comprehensive <a href="/refund-policy" className="text-primary-600 hover:text-primary-700 underline">Refund Policy</a> for detailed information about:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Return eligibility and conditions</li>
                <li>Return process and procedures</li>
                <li>Refund processing and timelines</li>
                <li>Exchange options and policies</li>
                <li>Damaged or defective item handling</li>
                <li>Bulk order return policies</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Prohibited Uses and Conduct</h2>
            <div className="space-y-4 text-gray-700">
              <p>You may not use our Services for any unlawful purpose or in any way that could damage, disable, overburden, or impair our servers or networks. Prohibited activities include:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Using our Services for any illegal or unauthorized purpose</li>
                <li>Violating any applicable laws, regulations, or third-party rights</li>
                <li>Attempting to gain unauthorized access to our systems or networks</li>
                <li>Interfering with or disrupting our Services or servers</li>
                <li>Transmitting viruses, malware, or other harmful code</li>
                <li>Harassing, abusing, or harming other users</li>
                <li>Submitting false or misleading information</li>
                <li>Attempting to circumvent security measures</li>
                <li>Using automated systems to access our Services</li>
                <li>Reselling or redistributing our products without authorization</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Privacy and Data Protection</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Your privacy is important to us. Our collection, use, and protection of your personal information 
                is governed by our <a href="/privacy" className="text-primary-600 hover:text-primary-700 underline">Privacy Policy</a>. By using our Services, you consent to the collection 
                and use of your information as described in our Privacy Policy.
              </p>
              <p>
                We implement appropriate security measures to protect your personal information, but no method 
                of transmission over the internet is 100% secure. We cannot guarantee absolute security of your data.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Disclaimers and Limitations</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Service Availability</h3>
              <p>
                Our Services are provided "as is" and "as available" without warranties of any kind. We do not 
                guarantee that our Services will be uninterrupted, secure, or error-free.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Limitation of Liability</h3>
              <p>
                To the maximum extent permitted by law, Faith Life Bookshop shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Loss of profits, revenue, or data</li>
                <li>Business interruption or loss of use</li>
                <li>Damages resulting from third-party actions</li>
                <li>Incidental or consequential damages</li>
                <li>Damages exceeding the amount paid for our Services</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Indemnification</h3>
              <p>
                You agree to indemnify and hold harmless Faith Life Bookshop from any claims, damages, or expenses 
                arising from your use of our Services or violation of these Terms.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Termination and Suspension</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Termination by You</h3>
              <p>
                You may terminate your account at any time by contacting our customer service team. Upon termination, 
                your right to use our Services will cease immediately.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Termination by Us</h3>
              <p>We may terminate or suspend your account and access to our Services at any time, with or without cause, including but not limited to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Violation of these Terms</li>
                <li>Fraudulent or illegal activity</li>
                <li>Non-payment of fees</li>
                <li>Extended periods of inactivity</li>
                <li>At our sole discretion for any reason</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Effect of Termination</h3>
              <p>
                Upon termination, your account will be deactivated, and you will lose access to our Services. 
                We may retain certain information as required by law or for legitimate business purposes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Governing Law and Dispute Resolution</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Governing Law</h3>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of Nigeria, without 
                regard to its conflict of law provisions.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Dispute Resolution</h3>
              <p>
                Any disputes arising from these Terms or your use of our Services shall be resolved through 
                good faith negotiations. If such negotiations fail, disputes shall be resolved through binding 
                arbitration in accordance with Nigerian law.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Jurisdiction</h3>
              <p>
                You agree to submit to the personal jurisdiction of the courts located in Nigeria for any 
                legal proceedings arising from these Terms.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Changes to Terms</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately 
                upon posting on our website. We will notify users of material changes by:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Posting a notice on our website</li>
                <li>Sending email notifications to registered users</li>
                <li>Updating the "Last updated" date</li>
                <li>Displaying prominent notices on our Services</li>
              </ul>
              <p>
                Your continued use of our Services after such changes constitutes acceptance of the updated Terms. 
                If you do not agree to the changes, you must discontinue use of our Services.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Contact Information</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                If you have any questions, concerns, or requests regarding these Terms of Service, please contact us:
              </p>
                             <div className="bg-gray-50 rounded-lg p-6">
                 <div className="text-center">
                   <h3 className="font-semibold text-gray-800 mb-2">Legal Department</h3>
                   <p><strong>Email:</strong> legal@faithlife.com</p>
                   <p><strong>Phone:</strong> +234-812-200-5303</p>
                   <p><strong>Hours:</strong> Monday - Friday, 8:00 AM - 6:00 PM</p>
                   <p><strong>Address:</strong> Off FUOYE Road, Oye Ekiti, Ekiti State, Nigeria</p>
                 </div>
                <p className="mt-4 text-sm text-gray-600">
                  We will respond to your inquiry within 48 hours during business days.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
