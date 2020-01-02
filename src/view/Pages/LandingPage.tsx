import React from 'react';
import { FomIput } from '../Componentes/form';
import { StyleSheet, css } from 'aphrodite';
import { ListaReps } from '../Componentes/ListaReps';
import '../style.css';

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
      {/* <div className="listcss"> */}
      {/* <ListaReps></ListaReps> */}
      {/* </div> */}
    </div>
  );
};

export default LandingPage;
