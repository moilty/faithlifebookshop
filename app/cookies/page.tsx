'use client'

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="w-full px-2 sm:px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction to Cookies</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) 
                when you visit our website. These files contain information that helps us provide you with a 
                better browsing experience and allows us to understand how you interact with our site.
              </p>
              <p>
                At Faith Life Bookshop, we use cookies and similar technologies to enhance your experience, 
                improve our services, and provide personalized content. This Cookie Policy explains what cookies 
                are, how we use them, and how you can manage your cookie preferences.
              </p>
              <p>
                By continuing to use our website, you consent to our use of cookies in accordance with this policy. 
                If you do not agree to our use of cookies, you should set your browser settings accordingly or 
                refrain from using our website.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How Cookies Work</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Cookie Functionality</h3>
              <p>Cookies serve several important functions on our website:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Authentication:</strong> Remember your login status and preferences</li>
                <li><strong>Session Management:</strong> Maintain your shopping cart and order information</li>
                <li><strong>Personalization:</strong> Customize content based on your interests and behavior</li>
                <li><strong>Analytics:</strong> Help us understand how visitors use our website</li>
                <li><strong>Security:</strong> Protect against fraud and ensure secure transactions</li>
                <li><strong>Performance:</strong> Optimize website speed and functionality</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Cookie Storage</h3>
              <p>
                Cookies are stored in your web browser and can be accessed by our website or third-party services 
                when you visit our site. They can store various types of information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>User preferences and settings</li>
                <li>Authentication tokens and session data</li>
                <li>Analytics and tracking information</li>
                <li>Advertising and marketing data</li>
                <li>Website performance metrics</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Essential Cookies (Strictly Necessary)</h3>
                <p>
                  These cookies are absolutely necessary for the website to function properly and cannot be disabled. 
                  They are typically set in response to actions you take, such as:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Setting your privacy preferences</li>
                  <li>Logging into your account</li>
                  <li>Adding items to your shopping cart</li>
                  <li>Processing payments</li>
                  <li>Maintaining security features</li>
                </ul>
                <p className="mt-2">
                  <strong>Examples:</strong> Authentication cookies, session cookies, security cookies
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Performance Cookies (Analytics)</h3>
                <p>
                  These cookies help us understand how visitors interact with our website by collecting and 
                  reporting information anonymously. They help us:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Count page visits and traffic sources</li>
                  <li>Identify the most and least popular pages</li>
                  <li>Understand user navigation patterns</li>
                  <li>Measure website performance and loading times</li>
                  <li>Identify and fix technical issues</li>
                </ul>
                <p className="mt-2">
                  <strong>Examples:</strong> Google Analytics cookies, performance monitoring cookies
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Functional Cookies (Preference)</h3>
                <p>
                  These cookies enable enhanced functionality and personalization. They may be set by us or by 
                  third-party providers whose services we have added to our pages. They help us:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Remember your language preferences</li>
                  <li>Store your shopping cart contents</li>
                  <li>Remember your login information</li>
                  <li>Provide personalized recommendations</li>
                  <li>Enable social media sharing features</li>
                </ul>
                <p className="mt-2">
                  <strong>Examples:</strong> Language preference cookies, shopping cart cookies, user preference cookies
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Targeting Cookies (Marketing)</h3>
                <p>
                  These cookies may be set through our site by our advertising partners. They may be used by 
                  those companies to build a profile of your interests and show you relevant advertisements. 
                  They help us:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Deliver relevant advertisements</li>
                  <li>Measure the effectiveness of advertising campaigns</li>
                  <li>Limit the number of times you see an ad</li>
                  <li>Provide social media features</li>
                  <li>Track conversions and sales</li>
                </ul>
                <p className="mt-2">
                  <strong>Examples:</strong> Advertising network cookies, social media cookies, remarketing cookies
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party Cookies and Services</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Third-Party Services</h3>
              <p>We use various third-party services that may place cookies on your device:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> Website analytics and performance monitoring</li>
                <li><strong>Payment Processors:</strong> Secure payment processing (PayPal, Stripe, etc.)</li>
                <li><strong>Social Media Platforms:</strong> Social sharing and integration (Facebook, Twitter, Instagram)</li>
                <li><strong>Advertising Networks:</strong> Targeted advertising and remarketing</li>
                <li><strong>Customer Support:</strong> Live chat and support services</li>
                <li><strong>Content Delivery Networks:</strong> Website performance optimization</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Third-Party Privacy Policies</h3>
              <p>
                Third-party services have their own privacy policies and cookie practices. We encourage you to 
                review their policies to understand how they collect and use your information. We are not 
                responsible for the privacy practices of third-party services.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookie Duration and Expiration</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Types of Cookie Duration</h3>
              <p>Cookies have different lifespans based on their purpose:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Session Cookies:</strong> Temporary cookies that are deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain on your device for a set period (days, months, or years)</li>
                <li><strong>First-Party Cookies:</strong> Set by our website and typically have shorter lifespans</li>
                <li><strong>Third-Party Cookies:</strong> Set by external services with varying expiration times</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Cookie Expiration Times</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Session duration or up to 1 year</li>
                <li><strong>Analytics Cookies:</strong> 1-2 years for persistent tracking</li>
                <li><strong>Functional Cookies:</strong> 30 days to 1 year</li>
                <li><strong>Marketing Cookies:</strong> 30 days to 2 years</li>
                <li><strong>Security Cookies:</strong> Session duration or up to 6 months</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Managing Your Cookie Preferences</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Browser Settings</h3>
              <p>You can control cookies through your web browser settings:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
                <li><strong>Mobile Browsers:</strong> Settings → Privacy → Cookie settings</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Cookie Consent Management</h3>
              <p>Our website provides a cookie consent banner that allows you to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Accept all cookies</li>
                <li>Reject non-essential cookies</li>
                <li>Customize your cookie preferences</li>
                <li>Change your preferences at any time</li>
                <li>View detailed information about each cookie category</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Third-Party Opt-Outs</h3>
              <p>You can opt out of third-party cookies by visiting:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> Google Analytics Opt-out Browser Add-on</li>
                <li><strong>Advertising Networks:</strong> Network Advertising Initiative (NAI) opt-out</li>
                <li><strong>Social Media:</strong> Individual platform privacy settings</li>
                <li><strong>Digital Advertising Alliance:</strong> YourAdChoices opt-out tool</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Impact of Disabling Cookies</h3>
              <p>
                Please note that disabling certain cookies may affect the functionality of our website. 
                Essential cookies cannot be disabled as they are necessary for basic website operation. 
                Disabling other cookies may result in:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Loss of personalized features and preferences</li>
                <li>Inability to complete purchases or transactions</li>
                <li>Reduced website performance and functionality</li>
                <li>Loss of shopping cart contents</li>
                <li>Inability to access certain features or content</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Mobile Applications and Cookies</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Our mobile applications may also use cookies and similar technologies. Mobile apps may use:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>App Cookies:</strong> Stored within the mobile application</li>
                <li><strong>WebView Cookies:</strong> When the app opens web content</li>
                <li><strong>Device Identifiers:</strong> Unique device IDs for analytics</li>
                <li><strong>Local Storage:</strong> App-specific data storage</li>
                <li><strong>Push Notifications:</strong> Marketing and service notifications</li>
              </ul>
              <p>
                You can manage mobile app permissions through your device settings and the app's privacy settings.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. International Cookie Compliance</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">GDPR Compliance</h3>
              <p>
                For users in the European Union, we comply with the General Data Protection Regulation (GDPR) 
                requirements for cookie consent and data processing.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">CCPA Compliance</h3>
              <p>
                For users in California, we comply with the California Consumer Privacy Act (CCPA) requirements 
                for cookie disclosure and opt-out rights.
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Other Jurisdictions</h3>
              <p>
                We strive to comply with applicable privacy laws in all jurisdictions where we operate. 
                Our cookie practices are designed to respect user privacy and provide appropriate controls.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Updates to This Cookie Policy</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices, 
                technology, legal requirements, or other factors. We will notify you of any material changes by:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Posting the updated policy on our website</li>
                <li>Updating the "Last updated" date</li>
                <li>Sending email notifications for significant changes</li>
                <li>Displaying prominent notices on our website</li>
                <li>Updating our cookie consent banner</li>
              </ul>
              <p>
                We encourage you to review this Cookie Policy periodically to stay informed about our 
                cookie practices and your options for managing them.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                If you have any questions, concerns, or requests regarding our use of cookies or this Cookie Policy, 
                please contact us:
              </p>
                             <div className="bg-gray-50 rounded-lg p-6">
                 <div className="text-center">
                   <h3 className="font-semibold text-gray-800 mb-2">Privacy Team</h3>
                   <p><strong>Email:</strong> privacy@faithlife.com</p>
                   <p><strong>Phone:</strong> +234-812-200-5303</p>
                   <p><strong>Hours:</strong> Monday - Friday, 8:00 AM - 6:00 PM</p>
                   <p><strong>Address:</strong> Off FUOYE Road, Oye Ekiti, Ekiti State, Nigeria</p>
                 </div>
                <p className="mt-4 text-sm text-gray-600">
                  We will respond to your inquiry within 48 hours during business days. For urgent privacy 
                  concerns, please include "URGENT" in your email subject line.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
