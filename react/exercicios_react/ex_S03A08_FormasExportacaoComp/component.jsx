import React from 'react'

const Primeiro = (props) => (
  <h1>Primeiro Componente!</h1>
)

const Segundo = props => <h1>Segundo Componente!</h1>

export const Terceiro = props => <h1>Terceiro Componente!</h1>

export { Primeiro, Segundo }

export default props => <h1>Quarto Componente!</h1>