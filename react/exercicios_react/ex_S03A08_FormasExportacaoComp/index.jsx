import React from 'react'
import ReactDOM from 'react-dom'
import Quarto, { Primeiro, Segundo, Terceiro } from './component'

ReactDOM.render(
  <div>
    <Primeiro/>
    <Segundo/>
    <Terceiro/>
    <Quarto/>
  </div>
  , document.getElementById('app'))