import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-yellow-800 font-extrabold text-3xl tracking-tight">
          ShambaLako
        </span>
        <span className="text-white font-light text-3xl">Ventures</span>
      </div>
      <div className="w-10 h-10 border-3 border-white/15 border-t-yellow-800 rounded-full animate-spin" />
    </div>
  );
};

export default LoadingScreen;
