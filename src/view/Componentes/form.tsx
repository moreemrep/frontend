/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState, useEffect } from 'react';
import { Tipo, Universidade } from 'src/generated/graphql';
import './form.css';
import { useRepublicaActions } from 'src/actions/useRepublicaActions';
import Marker from 'pigeon-marker';
import { ModalRepublica } from '../Pages/LandingPage/Modal';
import { Mapa } from './Mapa';
import { useUniversidadeActions } from 'src/actions/useUniversidadeActions';
import useDebounce from 'src/hooks/useDebounce';
import { Universidades } from './Universidade';
import { InputRange } from './InputRange';
import { useSelector } from 'src/store/hooks/useSelector';

export function FomIput() {
  const [universidade, setUniversidade] = useState('');
  const [tipo, setTipo] = useState();
  const { fetchRepublicas } = useRepublicaActions();
  const [{ centro, republicas }, universidades] = useSelector(state => [state.republicas, state.universidades]);
  const [republicaSelecionada, setRepublica] = useState();
  const [universidadeSelecionada, setUniversidadeSelecionada] = useState();
  const { fetchUniversidades } = useUniversidadeActions();
  const [isSiglaSearch, setSiglaSearch] = useState(true);
  const [showUniversidades, setShowUniversidade] = useState(false);
  const [distancia, setDistancia] = useState(2);
  const universidadeDebounced = useDebounce(universidade, 500);
  const distanciaDebounced = useDebounce(distancia, 500);

  useEffect(() => {
    if (universidadeDebounced == '') return;
    fetchUniversidades(
      isSiglaSearch
        ? {
            sigla: universidadeDebounced
          }
        : {
            nome: universidadeDebounced
          }
    );
    setShowUniversidade(true);
  }, [universidadeDebounced]);

  useEffect(() => {
    if (!tipo || !universidadeSelecionada || distanciaDebounced < 1) return;
    fetchRepublicas({
      distancia: distanciaDebounced * 1000,
      tipo,
      universidade: universidadeSelecionada.id
    });
  }, [tipo, universidadeSelecionada, distanciaDebounced]);

  function handleTipoClick(tipo: Tipo) {
    if (universidadeSelecionada) setTipo(tipo);
  }

  function Button({ tipow, children }: any) {
    return (
      <div onClick={() => handleTipoClick(tipow)}>
        <span className={`${tipo === tipow && 'active'}`}>{children}</span>
      </div>
    );
  }

  function handleClickUniversidade(uni: Universidade) {
    setUniversidadeSelecionada(uni);
    setShowUniversidade(false);
  }

  return (
    <div>
      <input type="hidden" value="something" />
      <div id="namer">
        <div id="namer-input">
          <input
            type="text"
            autoComplete="off"
            name="universidade"
            onFocus={() => setShowUniversidade(true)}
            placeholder="Universidade"
            onChange={t => setUniversidade(t.target.value)}
          />
          {showUniversidades && <Universidades universidades={universidades} onClick={handleClickUniversidade} />}
        </div>
      </div>
      {universidadeSelecionada && `${universidadeSelecionada.nome} (${distancia} km)`}
      <div className={`namer-controls ${universidadeSelecionada && 'active'}`}>
        <Button tipow={Tipo.Feminina}>feminina</Button>
        <Button tipow={Tipo.Masculina}>masculina</Button>
        <Button tipow={Tipo.Mista}>mista</Button>
      </div>
      <div style={{ marginBottom: 30, alignSelf: 'center' }}>
        <InputRange min={1} max={20} onChangee={setDistancia} />
      </div>
      <div>
        {universidadeSelecionada && tipo && centro && (
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
      </div>
      {republicaSelecionada && <ModalRepublica onHide={() => setRepublica(null)} republica={republicaSelecionada} />}
    </div>
  );
}
