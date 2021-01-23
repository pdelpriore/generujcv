import { useState } from "react";

type component = {
  value: boolean;
};

interface InitValue {
  [key: string]: component;
}

const useVisibility = (initValue: InitValue) => {
  const [isVisible, setVisible] = useState(initValue);

  const handleVisibility = (component: string, value: boolean) =>
    setVisible((isVisible) => ({
      ...isVisible,
      [component]: { value: value },
    }));

  return [isVisible, handleVisibility] as const;
};

export default useVisibility;
