import { useEffect, useState } from 'react';
import { BtnPhone, SvgPhone, TextCall } from './CallBtn.styled';

export const CallBtn = () => {
  const [isShow, setIsShow] = useState(false);

  const hendleShow = () => {
    setIsShow(pS => !pS);
  };
  useEffect(() => {
    const idInterval = setInterval(() => {
      hendleShow();
    }, 2000);

    return () => {
      clearInterval(idInterval);
    };
  }, []);

  return (
    <>
      <BtnPhone>
        {isShow ? <SvgPhone /> : <TextCall>Call me</TextCall>}
      </BtnPhone>
    </>
  );
};
