import React from 'react';
import { Universidade } from 'src/generated/graphql';

interface UniversidadeProps {
  universidade: Universidade;
  onClick: (uni: Universidade) => void;
}

const RenderUniversidade: React.FC<UniversidadeProps> = ({ universidade, onClick }) => {
  return (
    <button onClick={() => onClick(universidade)}>
      {universidade.sigla} - {universidade.nome}
    </button>
  );
};

interface UniversidadesProps {
  universidades: Universidade[];
  onClick: (uni: Universidade) => void;
}

export const Universidades: React.FC<UniversidadesProps> = ({ universidades, onClick }) => {
  return (
    <div>
      {universidades.map(universidade => (
        <RenderUniversidade key={universidade.id} universidade={universidade} onClick={onClick} />
      ))}
    </div>
  );
};
