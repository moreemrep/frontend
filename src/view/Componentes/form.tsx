import React, { useState } from 'react'
import { Tipo } from 'src/generated/graphql'
import './form.css'
import Map from 'pigeon-maps'
import { useDimensions } from 'src/hooks/useDimensions'
import { useBreakpoints } from 'src/hooks/useBreakpoints'

export function FomIput() {
  const [universidade, setUniversidade] = useState('')
  const [tipo, setTipo] = useState()
  const { width } = useDimensions()
  const { small } = useBreakpoints()

  function handleTipoClick(tipo: Tipo) {
    if (universidade) setTipo(tipo)
  }

  function Button({ tipow, children }: any) {
    return (
      <div onClick={() => handleTipoClick(tipow)}>
        <span className={`${tipo === tipow && 'active'}`}>{children}</span>
      </div>
    )
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
        <Map center={[-23.186077, -50.657391]} zoom={15} width={small ? width : 500} height={400} />
      )}
    </div>
  )
}
