import React from 'react';
import Map, { MapProps } from 'pigeon-maps';
import { useBreakpoints } from 'src/hooks/useBreakpoints';
import { useDimensions } from 'src/hooks/useDimensions';

export const Mapa: React.FC<MapProps> = ({ children, ...props }) => {
  // breakpoints do css
  const { medium, large } = useBreakpoints();

  //largura da tela
  const { width } = useDimensions();

  // largura do mapa para mobile
  let mapWidth = width * 0.98;

  if (medium) {
    // largura do mapa para tablet
    mapWidth = width * 0.9;
  } else if (large) {
    // largura do mapa monitor
    mapWidth = width * 0.7;
  }

  return (
    <Map {...props} width={mapWidth} height={400}>
      {children}
    </Map>
  );
};
