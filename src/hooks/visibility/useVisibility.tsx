import { useState } from "react";

interface InitValue {
  [key: string]: boolean;
}

const useVisibility = (initValue: InitValue) => {
  const [isVisible, setVisible] = useState(initValue);

  const handleVisibility = (component: string, value: boolean) =>
    setVisible((isVisible) => ({
      ...isVisible,
      [component]: value,
    }));

  return [isVisible, handleVisibility] as const;
};

export default useVisibility;
