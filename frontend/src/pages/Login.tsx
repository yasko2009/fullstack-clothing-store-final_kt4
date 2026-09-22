export default function Login() {
  return (
    <main className="flex min-h-[calc(100vh-73px)] items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">
          Sign in
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Enter your account details.
        </p>

        <div className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
          />

          <button className="w-full rounded-lg bg-black px-4 py-3 font-medium text-white transition hover:bg-gray-800">
            Sign in
          </button>
        </div>
      </div>
    </main>
  );
}