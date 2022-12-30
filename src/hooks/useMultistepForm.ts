import { ReactElement, useState } from 'react';

export const useMultistepForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    setCurrentStepIndex((prevState) => {
      if (prevState >= steps.length - 1) {
        return prevState;
      }

      return prevState + 1;
    });
  };
  const back = () => {
    setCurrentStepIndex((prevState) => {
      if (prevState <= 0) {
        return prevState;
      }

      return prevState - 1;
    });
  };
  const goTo = (index: number) => {
    setCurrentStepIndex(index);
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    goTo,
    next,
    back,
  };
};
