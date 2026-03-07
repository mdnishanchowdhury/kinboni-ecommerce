// Generic hook for temporary loading state
import { useState } from "react";

export const useLoading = (duration = 1500) => {
  const [isLoading, setIsLoading] = useState(false);

  const triggerLoading = (callback) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (callback) callback();
    }, duration);
  };

  return [isLoading, triggerLoading];
};