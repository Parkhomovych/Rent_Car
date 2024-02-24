import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    <>
      <h2
        style={{ textAlign: 'center', padding: '14px', marginBottom: '32px' }}
      >
        The page you are looking for was not found
        <span style={{ color: 'red' }}> Not Found </span>
      </h2>
      <p style={{ textAlign: 'center', padding: '14px', marginBottom: '32px' }}>
        You will be redirected to the home page in
        <span style={{ color: 'red', fontSize: '24px' }}> {time}</span> seconds
      </p>
    </>
  );
};

export default NotFound;
