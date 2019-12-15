import React, { useState, useEffect, useRef } from 'react';
import { Tipo, Republica, RepublicaPayload } from 'src/generated/graphql';
import './form.css';
import Map from 'pigeon-maps';
import { useDimensions } from 'src/hooks/useDimensions';
import { useBreakpoints } from 'src/hooks/useBreakpoints';
import { useRepublicaActions } from 'src/actions/useRepublicaActions';
import { useRepublicaStore } from 'src/store/reducers/republicas-reducer';
import Marker from 'pigeon-marker';
import { Popover, OverlayTrigger, Overlay } from 'react-bootstrap';
import PigeonOverlay from 'pigeon-overlay';

const popover = (republica: RepublicaPayload) => (
  <Popover id="popover-basic">
    <Popover.Content as="h3">{republica.nome}</Popover.Content>
    <Popover.Content>Distancia: {republica.distancia} km</Popover.Content>
    <Popover.Content>{republica.descricao}</Popover.Content>
  </Popover>
);

export function FomIput() {
  const [universidade, setUniversidade] = useState('asdd');
  const [tipo, setTipo] = useState(Tipo.Mista);
  const { width } = useDimensions();
  const { small } = useBreakpoints();
  const { fetchRepublicas } = useRepublicaActions();
  const [republicas, error, loading] = useRepublicaStore();
  const [centro, setCentro] = useState([0, 0]);
  const triggerRef = useRef<OverlayTrigger>(null);

  // useEffect(() => {}, [universidade])

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

  console.log({ triggerRef });

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
          <Marker anchor={[centro[1], centro[0]]} />
          {republicas.map(republica => {
            if (!republica.localizacao) return;

            return (
              <PigeonOverlay
                key={republica.nome}
                offset={[0, 0]}
                anchor={[republica.localizacao[1], republica.localizacao[0]]}
              >
                <OverlayTrigger ref={triggerRef} placement="right" trigger="click" overlay={popover(republica)}>
                  <Marker anchor={[republica.localizacao[1], republica.localizacao[0]]} />
                </OverlayTrigger>
              </PigeonOverlay>
            );
          })}
          {republicas.map(republica => {
            if (!republica.localizacao) return;

            return <Marker key={republica.nome} anchor={[republica.localizacao[1], republica.localizacao[0]]} />;
          })}
        </Map>
      )}
    </div>
  );
}
