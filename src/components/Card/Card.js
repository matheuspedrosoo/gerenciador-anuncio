import React from 'react'

function Card(props) {
  return (
    <li>
      <div className="box" id="box">
        <p>Nome anuncio: {props.nome} </p>
        <p>Cliente: {props.cliente}</p>
        <p>Data Inicio:{props.data_inicio} </p>
        <p>Data Término: {props.data_fim} </p>
        <p>Investimento por dia: {props.investimento_dia} </p>
        <p>Dias válidos: {props.dias} </p>
        <div className="resumo">
          <div>Cliques:{props.cliques}</div>
          <div>Vizualizações:{props.vizualizacao}</div>
          <div>Compartilhamentos:{props.compartilhamento}</div>
        </div>
      </div>
    </li>
  )
}

export default Card
