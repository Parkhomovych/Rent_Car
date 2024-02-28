import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeadMessage, Paragraph, RedMessage } from './NotFound.styled';

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
