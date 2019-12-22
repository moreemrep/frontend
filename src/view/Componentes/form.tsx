/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState, useEffect } from 'react';
import { Tipo } from 'src/generated/graphql';
import './form.css';
import { useRepublicaActions } from 'src/actions/useRepublicaActions';
import { useRepublicaStore } from 'src/store/reducers/republicas-reducer';
import Marker from 'pigeon-marker';
import { ModalRepublica } from '../Pages/LandingPage/Modal';
import { Mapa } from './Mapa';

export function FomIput() {
  const [universidade, setUniversidade] = useState('asdd');
  const [tipo, setTipo] = useState(Tipo.Mista);
  const { fetchRepublicas } = useRepublicaActions();
  const [{ centro, republicas }, error, loading] = useRepublicaStore();
  const [republicaSelecionada, setRepublica] = useState();

  useEffect(() => {
    fetchRepublicas({
      distancia: 2000,
      tipo,
      universidade: '5df5848110318d066da24ee6'
    });
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
      {universidade && tipo && centro && (
        <Mapa center={[centro.latitude, centro.longitude]} zoom={14}>
          <Marker anchor={[centro.latitude, centro.longitude]} />
          {republicas.map(
            republica =>
              republica.localizacao && (
                <Marker
                  onClick={() => setRepublica(republica)}
                  key={republica.nome}
                  anchor={[republica.localizacao.latitude, republica.localizacao.longitude]}
                />
              )
          )}
        </Mapa>
      )}
      {republicaSelecionada && <ModalRepublica onHide={() => setRepublica(null)} republica={republicaSelecionada} />}
    </div>
  );
}
