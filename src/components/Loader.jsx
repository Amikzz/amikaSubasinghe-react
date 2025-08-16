import { useEffect } from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loading.json";

const Loader = ({ setLoading }) => {
  // Simulate loading duration (e.g., 2 seconds)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="fixed inset-0 bg-zinc-900 flex flex-col items-center justify-center z-50">
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        className="w-48 h-48"
      />
      <p className="mt-4 text-white text-lg font-medium">Loading...</p>
    </div>
  );
};

export default Loader;
