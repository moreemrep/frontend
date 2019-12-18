import React, { useState, useEffect, Children } from 'react';
import { FomIput } from '../Componentes/form';
import { StyleSheet, css } from 'aphrodite';
import { useRepublicaStore } from 'src/store/reducers/republicas-reducer';
import { useRepublicaActions } from 'src/actions/useRepublicaActions';
import { Tipo } from 'src/generated/graphql';
import { ListaReps } from '../Componentes/ListaReps';

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const LandingPage: React.FC = () => {
  return (
    <div>
      <div className={css(styles.form)}>
        <FomIput></FomIput>
      </div>
      <div className="ajeitaLista">
        <ListaReps></ListaReps>
      </div>
    </div>
  );
};

export default LandingPage;
