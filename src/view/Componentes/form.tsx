import React, { useState } from 'react'
import { Tipo } from 'src/generated/graphql'
import './form.css'

export function FomIput() {
  const [universidade, setUniversidade] = useState('')
  const [tipo, setTipo] = useState()

  return (
    <div>
      <div id="namer">
        <div id="namer-input">
          <input
            type="text"
            name="namername"
            placeholder="Universidade"
            onChange={t => setUniversidade(t.target.value)}
          />
        </div>
      </div>
      <div className={`namer-controls ${universidade && 'active'}`}>
        <div onClick={() => setTipo(Tipo.Feminina)}>
          <span className={`${tipo === Tipo.Feminina && 'active'}`}>feminina</span>
        </div>
        <div onClick={() => setTipo(Tipo.Masculina)}>
          <span className={`${tipo === Tipo.Masculina && 'active'}`}>masculina</span>
        </div>
        <div onClick={() => setTipo(Tipo.Mista)}>
          <span className={`${tipo === Tipo.Mista && 'active'}`}>mista</span>
        </div>
      </div>
    </div>
  )
}
