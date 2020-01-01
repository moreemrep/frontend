/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState, useEffect } from 'react';
import { Tipo, Universidade } from 'src/generated/graphql';
import './form.css';
import { useRepublicaActions } from 'src/actions/useRepublicaActions';
import { useRepublicaStore } from 'src/store/reducers/republicas-reducer';
import Marker from 'pigeon-marker';
import { ModalRepublica } from '../Pages/LandingPage/Modal';
import { Mapa } from './Mapa';
import { useUniversidadeActions } from 'src/actions/useUniversidadeActions';
import { useUniversidadeStore } from 'src/store/reducers/universidades-reducer';
import useDebounce from 'src/hooks/useDebounce';
import { Universidades } from './Universidade';

export function FomIput() {
  const [universidade, setUniversidade] = useState('');
  const [tipo, setTipo] = useState();
  const { fetchRepublicas } = useRepublicaActions();
  const [{ centro, republicas }, error, loading] = useRepublicaStore();
  const [republicaSelecionada, setRepublica] = useState();
  const [universidadeSelecionada, setUniversidadeSelecionada] = useState();
  const { fetchUniversidades } = useUniversidadeActions();
  const [universidades, errorUni, loadingUni] = useUniversidadeStore();
  const [isSiglaSearch, setSiglaSearch] = useState(true);
  const [showUniversidades, setShowUniversidade] = useState(false);

  const universidadeDebounced = useDebounce(universidade, 500);

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
    if (!tipo || !universidadeSelecionada) return;
    fetchRepublicas({
      distancia: 2000,
      tipo,
      universidade: universidadeSelecionada.id
    });
  }, [tipo, universidadeSelecionada]);

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
      {universidadeSelecionada && universidadeSelecionada.nome}
      <div className={`namer-controls ${universidadeSelecionada && 'active'}`}>
        <Button tipow={Tipo.Feminina}>feminina</Button>
        <Button tipow={Tipo.Masculina}>masculina</Button>
        <Button tipow={Tipo.Mista}>mista</Button>
      </div>
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
      {republicaSelecionada && <ModalRepublica onHide={() => setRepublica(null)} republica={republicaSelecionada} />}
    </div>
  );
}
