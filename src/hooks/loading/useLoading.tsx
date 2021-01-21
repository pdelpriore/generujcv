import { useState } from "react";

const useLoading = (initValue: boolean) => {
  const [loading, setLoading] = useState(initValue);

  const handleLoading = (value: boolean) => setLoading(value);

  return [loading, handleLoading] as const;
};

export default useLoading;
