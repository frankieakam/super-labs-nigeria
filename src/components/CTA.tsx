export default function CTA() {
  const openCalendly = () => {
    window.open('https://calendly.com/superlabsng', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Something Super?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Stop juggling freelancers and complex projects. Partner with a single team that handles it all.
          </p>
          
          <button
            onClick={openCalendly}
            className="inline-block border border-blue-500 text-white px-12 py-4 rounded-lg font-semibold text-lg hover:bg-blue-500 transition-colors"
          >
            Start Your Project
          </button>
        </div>
      </div>
      {/* <div className="text-center mt-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            From Vision to Reality
          </h2>
        </div> */}

        {/* Testimonial */}
        {/* <div className="max-w-3xl mx-auto text-center mb-4">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-6xl text-gray-200 mb-4">&ldquo;</div>
            <p className="text-xl text-gray-700 italic mb-6">
              Super Labs Nigeria took our idea and built a complete brand and website. We didn&apos;t have to manage a thing. The process was seamless and the results exceeded our expectations.
            </p>
            <div className="font-semibold text-gray-900">
              Jane Doe, Founder of &apos;Bakery Name&apos;
            </div>
          </div>
        </div> */}
    </section>
  );
}