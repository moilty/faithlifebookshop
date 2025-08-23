'use client'

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="w-full px-2 sm:px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Refund & Return Policy</h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Overview</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                At Faith Life Bookshop, we are committed to ensuring your complete satisfaction with every purchase. 
                We understand that sometimes products may not meet your expectations, and we want to make the return 
                and refund process as smooth and transparent as possible.
              </p>
              <p>
                This policy outlines the terms and conditions for returns, exchanges, and refunds for all products 
                purchased through our website, physical store, or any other sales channels.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Return Eligibility</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">General Return Conditions</h3>
              <p>To be eligible for a return, your item must meet the following criteria:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Return request must be initiated within 30 days of purchase</li>
                <li>Item must be in its original condition and packaging</li>
                <li>All original tags, labels, and accessories must be included</li>
                <li>Item must not show signs of wear, damage, or use beyond inspection</li>
                <li>Digital products and downloadable content are non-refundable</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Items Not Eligible for Return</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Digital books, e-books, and downloadable content</li>
                <li>Personalized or custom-printed materials</li>
                <li>Items marked as "Final Sale" or "Non-Returnable"</li>
                <li>Products that have been damaged due to customer misuse</li>
                <li>Items missing original packaging or accessories</li>
                <li>Gift cards and promotional vouchers</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Return Process</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Step-by-Step Return Process</h3>
              <ol className="list-decimal list-inside space-y-3 ml-4">
                <li>
                  <strong>Contact Customer Service:</strong> Email us at faithlifebookshop@gmail.com or call +234-812-200-5303 
                  within 30 days of purchase to initiate your return request.
                </li>
                <li>
                  <strong>Provide Order Information:</strong> Include your order number, item details, and reason for return.
                </li>
                <li>
                  <strong>Receive Return Authorization:</strong> We will review your request and provide a Return Authorization Number (RAN).
                </li>
                <li>
                  <strong>Package Your Return:</strong> Securely package the item with all original materials and include the RAN.
                </li>
                <li>
                  <strong>Ship Your Return:</strong> Send the package to our returns address using a trackable shipping method.
                </li>
                <li>
                  <strong>Processing:</strong> Once received, we will inspect the item and process your refund within 5-7 business days.
                </li>
              </ol>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Return Shipping</h3>
              <p>
                Customers are responsible for return shipping costs unless the return is due to our error 
                (wrong item shipped, defective product, etc.). We recommend using a trackable shipping method 
                to ensure your return reaches us safely.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Refund Processing</h2>
            <div className="space-y-4 text-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Refund Timeline</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Inspection Period:</strong> 1-2 business days after receiving your return</li>
                <li><strong>Refund Processing:</strong> 3-5 business days after approval</li>
                <li><strong>Bank Processing:</strong> 5-10 business days for credit/debit card refunds</li>
                <li><strong>Total Timeline:</strong> 7-17 business days from return receipt to refund</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Refund Methods</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Original Payment Method:</strong> Refunds will be issued to the original payment method used for purchase</li>
                <li><strong>Store Credit:</strong> Option to receive store credit for future purchases</li>
                <li><strong>Bank Transfer:</strong> Available for bank transfer payments (additional processing time may apply)</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Partial Refunds</h3>
              <p>
                Partial refunds may be issued in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Item returned in less than original condition</li>
                <li>Missing accessories or packaging</li>
                <li>Return shipping costs deducted (when applicable)</li>
                <li>Restocking fees (for certain items)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Exchange Policy</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We offer exchanges for items that are defective, damaged, or incorrect. Exchanges are subject to 
                the same eligibility criteria as returns.
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Exchange Options</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Same Item:</strong> Exchange for the same item in different size, color, or condition</li>
                <li><strong>Different Item:</strong> Exchange for a different item of equal or lesser value</li>
                <li><strong>Upgrade:</strong> Exchange for a higher-value item (price difference must be paid)</li>
                <li><strong>Store Credit:</strong> Receive credit for the returned item's value</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Exchange Process</h3>
              <p>
                The exchange process follows the same steps as returns, with the addition of selecting your 
                replacement item. We will ship the replacement item once we receive and approve your return.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Damaged or Defective Items</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                If you receive a damaged or defective item, please contact us immediately. We will provide 
                expedited processing for these cases.
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Required Information</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Order number and item details</li>
                <li>Description of the damage or defect</li>
                <li>Photographs of the damage (if possible)</li>
                <li>Date of delivery</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-6">Damaged Item Process</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We will provide a prepaid return shipping label</li>
                <li>Expedited processing and replacement shipping</li>
                <li>No restocking fees or return shipping costs</li>
                <li>Priority customer service support</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Bulk Orders and Institutional Purchases</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Special return policies apply to bulk orders (10+ items) and institutional purchases:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Extended Return Window:</strong> 45 days for bulk orders</li>
                <li><strong>Partial Returns:</strong> Allowed for bulk orders with valid reasons</li>
                <li><strong>Restocking Fees:</strong> May apply to large quantity returns</li>
                <li><strong>Custom Arrangements:</strong> Available for institutional customers</li>
                <li><strong>Dedicated Support:</strong> Specialized customer service for bulk orders</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. International Returns</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                International returns are subject to additional considerations:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Customs Duties:</strong> Customers are responsible for return shipping and customs duties</li>
                <li><strong>Extended Timeline:</strong> Longer processing times due to international shipping</li>
                <li><strong>Currency Conversion:</strong> Refunds will be issued in the original currency</li>
                <li><strong>Documentation:</strong> Additional customs documentation may be required</li>
                <li><strong>Restrictions:</strong> Some items may not be eligible for international return</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Customer Satisfaction Guarantee</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Our commitment to customer satisfaction extends beyond our standard return policy. We strive to 
                resolve any issues to your complete satisfaction.
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Satisfaction Measures</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Quality Assurance:</strong> All products are inspected before shipping</li>
                <li><strong>Expert Support:</strong> Knowledgeable staff to assist with product selection</li>
                <li><strong>Flexible Solutions:</strong> Custom arrangements for special circumstances</li>
                <li><strong>Continuous Improvement:</strong> We use feedback to improve our products and services</li>
                <li><strong>Loyalty Programs:</strong> Special benefits for repeat customers</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                For questions about returns, refunds, or exchanges, please contact us:
              </p>
                             <div className="bg-gray-50 rounded-lg p-6">
                 <div className="text-center">
                   <h3 className="font-semibold text-gray-800 mb-2">Returns Department</h3>
                   <p><strong>Email:</strong> returns@faithlife.com</p>
                   <p><strong>Phone:</strong> +234-812-200-5303</p>
                   <p><strong>Hours:</strong> Monday - Friday, 8:00 AM - 6:00 PM</p>
                   <p><strong>Address:</strong> Off FUOYE Road, Oye Ekiti, Ekiti State, Nigeria</p>
                 </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Policy Updates</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We reserve the right to modify this refund and return policy at any time. Changes will be 
                effective immediately upon posting on our website. We encourage customers to review this 
                policy periodically for any updates.
              </p>
              <p>
                For the most current version of this policy, please visit our website or contact our 
                customer service team.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
