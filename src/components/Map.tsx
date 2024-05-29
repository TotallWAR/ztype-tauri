import { Box } from '@mantine/core';
import { useSelector } from 'react-redux';
import { enemiesSelectors } from '@/lib/store/enemies/enemiesSelectors';
import { Enemy } from '@/components/Enemy';

type EnemyProps = {};

export const Map = () => {
  const enemies = useSelector(enemiesSelectors);
  return (
    <Box w="100vw" h="100vh">
      {enemies.map((e) => (
        <Enemy content={e.content} position={e.position} key={e.id} />
      ))}
    </Box>
  );
};
