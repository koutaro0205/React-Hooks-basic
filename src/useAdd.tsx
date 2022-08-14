import { ChangeEvent, useEffect, useState } from 'react';

const useAdd = ()=> {
  const [numA, setNumA] = useState(0);
  const [numB, setNumb] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    setResult(numA + numB);
  }, [numA, numB]);

  const changeNumA = (e: ChangeEvent<HTMLInputElement>) => {
    setNumA(e.target.valueAsNumber);
  };

  const changeNumB = (e: ChangeEvent<HTMLInputElement>) => {
    setNumb(e.target.valueAsNumber);
  };

  return { numA, numB, result, changeNumA, changeNumB };
}

export default useAdd
