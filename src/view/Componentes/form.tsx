import React, { useState, useEffect } from 'react';
import { Tipo } from 'src/generated/graphql';
import './form.css';
import Map from 'pigeon-maps';
import { useDimensions } from 'src/hooks/useDimensions';
import { useBreakpoints } from 'src/hooks/useBreakpoints';
import { useRepublicaActions } from 'src/actions/useRepublicaActions';
import { useRepublicaStore } from 'src/store/reducers/republicas-reducer';
import Marker from 'pigeon-marker';

export function FomIput() {
  const [universidade, setUniversidade] = useState('');
  const [tipo, setTipo] = useState();
  const { width } = useDimensions();
  const { small } = useBreakpoints();
  const { fetchRepublicas } = useRepublicaActions();
  const [republicas, error, loading] = useRepublicaStore();
  const [centro, setCentro] = useState([0, 0]);

  // useEffect(() => {}, [universidade])
  console.log({ republicas });
  useEffect(() => {
    fetchRepublicas({
      distancia: 2000,
      tipo,
      universidade: '5df5848110318d066da24ee6'
    }).then(centro => centro && setCentro(centro));
  }, [tipo]);

  function handleTipoClick(tipo: Tipo) {
    if (universidade) setTipo(tipo);
  }

  function Button({ tipow, children }: any) {
    return (
      <div onClick={() => handleTipoClick(tipow)}>
        <span className={`${tipo === tipow && 'active'}`}>{children}</span>
      </div>
    );
  }

  return (
    <div>
      <div id="namer">
        <div id="namer-input">
          <input
            type="text"
            name="universidade"
            placeholder="Universidade"
            onChange={t => setUniversidade(t.target.value)}
          />
        </div>
      </div>
      <div className={`namer-controls ${universidade && 'active'}`}>
        <Button tipow={Tipo.Feminina}>feminina</Button>
        <Button tipow={Tipo.Masculina}>masculina</Button>
        <Button tipow={Tipo.Mista}>mista</Button>
      </div>
      {universidade && tipo && (
        <Map center={[centro[1], centro[0]]} zoom={14} width={small ? width : 500} height={400}>
          {republicas.map(
            republica =>
              republica.localizacao && (
                <Marker key={republica.nome} anchor={[republica.localizacao[1], republica.localizacao[0]]} />
              )
          )}
        </Map>
      )}
    </div>
  );
}
