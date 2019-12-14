import React, { useEffect, useState } from 'react'
import { useRepublicaActions } from '../actions/useRepublicaActions'
import { useRepublicaStore } from '../store/reducers/republicas-reducer'
import { Tipo } from '../generated/graphql'
import { useBreakpoints } from '../hooks/useBreakpoints'

const ProcurarRepublica: React.FC = () => {
  const [republicas, error, loading] = useRepublicaStore()
  const { fetchRepublicas } = useRepublicaActions()

  const { small } = useBreakpoints()

  const [filtro] = useState({ localizacao: [1, 2], tipo: Tipo.Mista })

  useEffect(() => {
    fetchRepublicas(filtro)
  }, [])

  if (loading.FETCH_REPUBLICAS) return <div>loading...</div>

  if (small) {
    return (
      <div>
        {error.FETCH_REPUBLICAS}
        small
        {republicas.map(republica => (
          <div key={republica.nome}>
            <p>
              {republica.nome}({republica.distancia} metros)
            </p>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      {error.FETCH_REPUBLICAS}

      {republicas.map(republica => (
        <div key={republica.nome}>
          <p>
            {republica.nome}({republica.distancia} metros)
          </p>
          <p>{republica.descricao}</p>
        </div>
      ))}
    </div>
  )
}

export default ProcurarRepublica
