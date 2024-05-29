import { Box } from '@mantine/core';
import { useMap } from '@mantine/hooks';
import { useMemo } from 'react';

interface Position {
  x: number;
  y: number;
}

interface Props {
  content: string;

  position: Position;
}

export const Enemy = ({ content, position, isActive }: Props) => {
  const letters = useMemo(() => content.split(''), [content])
  const lettersMap = useMap(letters.map(l => ({
    value: l,
    isAlive: true
  })))
  return (
    <Box
      className=""
      pos="absolute"
      bg="var(--secondary)"
      top={position.x}
      left={position.y}
    >
     {Array.from(map.entries()).map(([key, value]) => (

     )}
    </Box>
  );
};

const Letter = ({value}) => {

  return <Box>
  {value}
  </Box>
}
