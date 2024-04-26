import { Button, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-[calc(100vh-105px)] flex flex-col items-center justify-center">
      <Text c={'theme'} fz={'140'} fw={'bolder'} mb={'-40'}>
        404
      </Text>
      <Text c={'gray.6'} fz={'40'} fw={'normal'}>
        Page Not Found
      </Text>
      <Button
        m={32}
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </Button>
    </section>
  );
};

export default ErrorPage;
