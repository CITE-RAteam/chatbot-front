import { useState } from "react";

export const useQuestionError = () => {
  const [questionError, setQuestionError] = useState<boolean>(false);

  const setQuestionErrorFlag = (flag: boolean) => {
    setQuestionError(flag);
  };

  return { questionError, setQuestionErrorFlag };
};
