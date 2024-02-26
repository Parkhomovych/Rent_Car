import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HeadMessage = styled.h2`
  margin-bottom: 32px;
  padding: 14px;

  text-align: center;
`;
const RedMessage = styled.span`
  color: red;
  font-size: 24px;
`;

const Paragraph = styled.p`
  padding: 14px;
  margin-bottom: 32px;
  text-align: center;
`;
const NotFound = () => {
  const [time, setTime] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const showTimerId = setInterval(() => {
      setTime(pS => pS - 1);
    }, 1000);

    const timerId = setTimeout(() => {
      navigate('/');
    }, 5000);
    return () => {
      clearTimeout(timerId);
      clearInterval(showTimerId);
    };
  }, [navigate]);

  return (
    <section>
      <HeadMessage>
        The page you are looking for was not found{' '}
        <RedMessage>Not Found </RedMessage>
      </HeadMessage>
      <Paragraph>
        You will be redirected to the home page in{' '}
        <RedMessage>{time}</RedMessage> seconds
      </Paragraph>
    </section>
  );
};

export default NotFound;
