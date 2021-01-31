import { useState, useCallback } from "react";

interface InitValue {
  [key: string]: boolean;
}

const useVisibility = (initValue: InitValue) => {
  const [isVisible, setVisible] = useState(initValue);

  const handleVisibility = useCallback(
    (component: string, value: boolean) =>
      setVisible((isVis) => ({
        ...isVis,
        [component]: value,
      })),
    [setVisible]
  );

  return [isVisible, handleVisibility] as const;
};

export default useVisibility;
