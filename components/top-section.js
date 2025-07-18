export default function TopSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-white" style={{ backgroundImage: "url('/mainbg.jpg')" }}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Gemutly Clone</h1>
        <p className="text-lg mb-6">Simple redesign of landing page</p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition">
            Browse as Diner
          </button>
          <button className="px-6 py-3 bg-transparent border border-white rounded-xl font-semibold hover:bg-white hover:text-orange-500 transition">
            Become a Chef
          </button>
        </div>
      </div>
    </section>
  );
}
