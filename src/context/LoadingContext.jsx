import { createContext, useContext, useState } from "react";

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <LoadingContext.Provider value={{ isVideoLoaded, setIsVideoLoaded }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
