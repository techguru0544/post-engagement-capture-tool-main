import { Box, Skeleton } from '@mantine/core';

const SkeSideMenu = () => {
  return (
    <Box p="sm">
      {Array(1)
        .fill(0)
        .map((_, index) => (
          <Skeleton key={index} h={45} mt="sm" animate />
        ))}
    </Box>
  );
};

export default SkeSideMenu;
