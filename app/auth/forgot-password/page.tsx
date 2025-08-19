'use client'

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-secondary-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-secondary-900 mb-2">Forgot your password?</h1>
        <p className="text-secondary-600 mb-6">Enter your email and we'll send you a reset link.</p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">Email Address</label>
            <input type="email" className="input-field" placeholder="you@example.com" />
          </div>
          <button type="submit" className="w-full btn-primary">Send reset link</button>
        </form>
      </div>
    </div>
  )
}
