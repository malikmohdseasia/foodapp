const UnderDevelopment = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-[#3E3D45] to-[#202020] px-4">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 text-center shadow-xl max-w-md w-full">
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#E91F63]/20">
          <span className="text-3xl">🚧</span>
        </div>

        <h1 className="text-2xl md:text-3xl font-semibold text-white mb-3">
          Page Under Development
        </h1>

        <p className="text-gray-300 text-sm md:text-base mb-6">
          We’re working hard to bring you this feature.  
          Please check back soon!
        </p>

        <button
          onClick={() => window.history.back()}
          className="px-6 py-2 rounded-lg bg-[#E91F63] text-white font-medium hover:bg-[#d81b60] transition-all duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default UnderDevelopment;
