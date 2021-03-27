import { useState, useCallback } from "react";

const useLoader = (initValue: boolean) => {
  const [loading, setLoading] = useState(initValue);

  const handleLoading = useCallback((value: boolean) => setLoading(value), [
    setLoading,
  ]);

  return [loading, handleLoading] as const;
};

export default useLoader;
