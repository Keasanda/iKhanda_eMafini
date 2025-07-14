import React from 'react';
import { ArrowLeft, Package, Clock, RefreshCw, Shield } from 'lucide-react';

export default function ReturnPolicyPage() {
  return (
    <div className="min-h-screen bg-stone-50 pt-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-serif font-light text-stone-800 mb-4">
            Return Policy
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            We want you to love your handcrafted pieces. Here's everything you need to know about returns and exchanges.
          </p>
        </div>

        {/* Policy Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-amber-700" />
            </div>
            <h3 className="text-lg font-serif font-medium text-stone-800 mb-2">30-Day Window</h3>
            <p className="text-stone-600 text-sm">Return items within 30 days of delivery</p>
          </div>

          <div className="text-center">
            <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-amber-700" />
            </div>
            <h3 className="text-lg font-serif font-medium text-stone-800 mb-2">Original Condition</h3>
            <p className="text-stone-600 text-sm">Items must be unused and in original packaging</p>
          </div>

          <div className="text-center">
            <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="w-8 h-8 text-amber-700" />
            </div>
            <h3 className="text-lg font-serif font-medium text-stone-800 mb-2">Easy Process</h3>
            <p className="text-stone-600 text-sm">Simple return process with prepaid labels</p>
          </div>

          <div className="text-center">
            <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-amber-700" />
            </div>
            <h3 className="text-lg font-serif font-medium text-stone-800 mb-2">Quality Guarantee</h3>
            <p className="text-stone-600 text-sm">Full refund for defective items</p>
          </div>
        </div>

        {/* Detailed Policy */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg space-y-8">
          <section>
            <h2 className="text-2xl font-serif font-medium text-stone-800 mb-4">Return Eligibility</h2>
            <div className="space-y-4 text-stone-600">
              <p>
                We accept returns for most items within 30 days of delivery. To be eligible for a return, items must be:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>In original, unused condition</li>
                <li>In original packaging with all accessories</li>
                <li>Free from damage not caused by manufacturing defects</li>
                <li>Accompanied by original receipt or order confirmation</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium text-stone-800 mb-4">Custom Orders</h2>
            <div className="space-y-4 text-stone-600">
              <p>
                Due to the bespoke nature of our custom orders, these items are generally not eligible for return unless:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The item has a manufacturing defect</li>
                <li>The item significantly differs from the agreed specifications</li>
                <li>The item was damaged during shipping</li>
              </ul>
              <p>
                We work closely with customers during the design process to ensure satisfaction before production begins.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium text-stone-800 mb-4">Return Process</h2>
            <div className="space-y-4 text-stone-600">
              <p>To initiate a return, please follow these steps:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Contact us at hello@ikhandaemafini.co.za or +27 (0)11 123-4567</li>
                <li>Provide your order number and reason for return</li>
                <li>Receive return authorization and prepaid shipping label</li>
                <li>Package item securely in original packaging</li>
                <li>Attach the prepaid label and drop off at designated courier</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium text-stone-800 mb-4">Refunds & Processing</h2>
            <div className="space-y-4 text-stone-600">
              <p>
                Once we receive your returned item, we will inspect it and notify you of the approval or rejection of your refund.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Approved refunds are processed within 5-7 business days</li>
                <li>Refunds are issued to the original payment method</li>
                <li>Shipping costs are non-refundable unless item was defective</li>
                <li>Return shipping is free with our prepaid labels</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium text-stone-800 mb-4">Exchanges</h2>
            <div className="space-y-4 text-stone-600">
              <p>
                We offer exchanges for items of equal or greater value. Size or finish exchanges are subject to availability.
                For custom pieces, exchanges may require additional production time and costs.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium text-stone-800 mb-4">Damaged Items</h2>
            <div className="space-y-4 text-stone-600">
              <p>
                If you receive a damaged item, please contact us immediately with photos of the damage. We will:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Arrange for immediate replacement or repair</li>
                <li>Cover all shipping costs for damaged items</li>
                <li>Provide expedited processing for replacements</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-medium text-stone-800 mb-4">Contact Information</h2>
            <div className="bg-amber-50 rounded-2xl p-6">
              <p className="text-stone-700 mb-4">
                For any questions about returns or to initiate a return, please contact us:
              </p>
              <div className="space-y-2 text-stone-600">
                <p><strong>Email:</strong> hello@ikhandaemafini.co.za</p>
                <p><strong>Phone:</strong> +27 (0)11 123-4567</p>
                <p><strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center space-x-2 text-stone-600 hover:text-stone-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
        </div>
      </div>
    </div>
  );
}