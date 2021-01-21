import { useState } from "react";

type app = {
  value: number;
};

interface InitValue {
  app: app;
}

const useViewport = (initValue: InitValue) => {
  const [viewports, setViewports] = useState(initValue);

  const handleViewport = (component: string, value: number) =>
    setViewports((viewports) => ({
      ...viewports,
      [component]: { value: value },
    }));

  return [viewports, handleViewport] as const;
};

export default useViewport;
