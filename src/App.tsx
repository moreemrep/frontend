/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useRepublicaActions } from './actions/useRepublicaActions'
import { useRepublicaStore } from './store/reducers/republicas-reducer'

const App: React.FC = () => {
  const [republicas, error, loading] = useRepublicaStore()
  const { fetchRepublicas } = useRepublicaActions()

  useEffect(() => {
    fetchRepublicas()
  }, [])

  if (loading.FETCH_REPUBLICAS) return <div>loading...</div>

  if (error.FETCH_REPUBLICAS) return <div>{error.FETCH_REPUBLICAS}</div>

  return (
    <div>
      {republicas.map(republica => <p key={republica.nome}>{republica.nome}</p>)}
    </div>
  )
}

export default App
