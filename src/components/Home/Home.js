import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import moment from 'moment'

import 'bootstrap/dist/css/bootstrap.min.css'

import './home.scss'

function Home() {
  // base de dados
  const dataAnuncios = [
    {
      id: 1,
      nome: 'Anuncio 1',
      cliente: 'José',
      data_inicio: '01/01/2021',
      data_fim: '10/01/2021',
      investimento_dia: 1,
    },
    {
      id: 2,
      nome: 'Anuncio 2',
      cliente: 'Maria',
      data_inicio: '01/01/2021',
      data_fim: '01/02/2021',
      investimento_dia: 2,
    },
    {
      id: 3,
      nome: 'Anuncio 3',
      cliente: 'João',
      data_inicio: '01/01/2021',
      data_fim: '01/03/2021',
      investimento_dia: 4,
    },
    {
      id: 4,
      nome: 'Anuncio 4',
      cliente: 'José',
      data_inicio: '01/01/2021',
      data_fim: '01/04/2021',
      investimento_dia: 6,
    },
    {
      id: 5,
      nome: 'Anuncio 5',
      cliente: 'Carlos',
      data_inicio: '01/01/2021',
      data_fim: '01/12/2021',
      investimento_dia: 200,
    },
    {
      id: 6,
      nome: 'Anuncio 6',
      cliente: 'João',
      data_inicio: '01/01/2021',
      data_fim: '01/06/2021',
      investimento_dia: 12,
    },
  ]

  const [data, setData] = useState(dataAnuncios)
  const [buscaAnuncio, setBuscaAnuncio] = useState('')
  const [filtro, setFiltro] = useState([])
  const [modalInserir, setModalInserir] = useState(false)
  const [anuncioSelecionado, setAnuncioSelecionado] = useState({
    nome: '',
    cliente: '',
    data_inicio: '',
    data_fim: '',
    investimento_dia: '',
  })

  const handleChange = e => {
    const { name, value } = e.target
    setAnuncioSelecionado(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  // add novo anúncio
  const NovoAnuncio = () => {
    let verifica = anuncioSelecionado

    if (
      verifica.nome === '' ||
      verifica.cliente === '' ||
      verifica.data_inicio === '' ||
      verifica.data_fim === '' ||
      verifica.investimento_dia === ''
    ) {
      alert('Preencha os dados corretamente.')
      return
    } else {
      let data_inicio = anuncioSelecionado.data_inicio
      let data_fim = anuncioSelecionado.data_fim
      var diff = moment(data_fim, 'YYYY/MM/DD').diff(
        moment(data_inicio, 'YYYY/MM/DD')
      )
      var dias = moment.duration(diff).asDays()
      alert(dias + ' dias válidos para este anúncio.')

      let getValue = anuncioSelecionado
      getValue.id = data[data.length - 1].id + 1

      let newDate = data
      newDate.push(getValue)

      setFiltro(newDate)
      setModalInserir(false)
    }
  }
  // realiza a busca pelo nome do cliente
  useEffect(() => {
    const filter = data.filter(cli =>
      cli.cliente.toLowerCase().includes(buscaAnuncio.toLowerCase())
    )
    setFiltro(filter)
  }, [buscaAnuncio, data])

  // retorna o número de vizualizações
  function getView(vizualizacoes) {
    let cliques = 0
    let compartilhamentos = 0

    if (vizualizacoes >= 100) {
      for (let i = 0; i <= vizualizacoes; i++) {
        cliques += 12
        i += 100
        //console.log(i)
      }
    }
    if (cliques >= 20) {
      for (let c = 0; c <= cliques; c++) {
        compartilhamentos += 3
        let novas_vizualizacoes = compartilhamentos * 40
        vizualizacoes += novas_vizualizacoes
        c += 20
      }
    }
    for (let x = 1; x <= 4; x++) {
      let novas_vizualizacoes = 40
      vizualizacoes += novas_vizualizacoes
    }
    return vizualizacoes
  }

  // retorna o número de cliques
  function getClick(vizualizacoes) {
    let cliques = 0
    let compartilhamentos = 0

    if (vizualizacoes >= 100) {
      for (let i = 0; i <= vizualizacoes; i++) {
        cliques += 12
        i += 100
        //console.log(i)
      }
    }
    if (cliques >= 20) {
      for (let c = 0; c <= cliques; c++) {
        compartilhamentos += 3
        let novas_vizualizacoes = compartilhamentos * 40
        vizualizacoes += novas_vizualizacoes
        c += 20
      }
    }
    for (let x = 1; x <= 4; x++) {
      let novas_vizualizacoes = 40
      vizualizacoes += novas_vizualizacoes
    }
    return cliques
  }

  // retorna o número de compartilhamentos
  function getShare(vizualizacoes) {
    let cliques = 0
    let compartilhamentos = 0

    if (vizualizacoes >= 100) {
      for (let i = 0; i <= vizualizacoes; i++) {
        cliques += 12
        i += 100
        //console.log(i)
      }
    }
    if (cliques >= 20) {
      for (let c = 0; c <= cliques; c++) {
        compartilhamentos += 3
        let novas_vizualizacoes = compartilhamentos * 40
        vizualizacoes += novas_vizualizacoes
        c += 20
      }
    }
    for (let x = 1; x <= 4; x++) {
      let novas_vizualizacoes = 40
      vizualizacoes += novas_vizualizacoes
    }
    return compartilhamentos
  }

  // retorna a diferença entre data de início e data final
  function daysBetween(startDate, endDate) {
    var diff = moment(endDate, 'DD/MM/YYYY').diff(
      moment(startDate, 'DD/MM/YYYY')
    )
    var dias = moment.duration(diff).asDays()

    return dias
  }

  return (
    <>
      <div className="container">
        <div className="App">
          <h2 className="titulo">Gerenciador de Anúncios</h2>
          <div className="container-input">
            <input
              type="text"
              placeholder="digite o nome do cliente para pesquisa."
              value={buscaAnuncio}
              onChange={e => setBuscaAnuncio(e.target.value)}
            />
            <button
              className="btn btn-primary btn-novo"
              onClick={() => setModalInserir(true)}
            >
              Novo Anuncio
            </button>
          </div>
        </div>

        <ul>
          {filtro.map((a, index) => {
            return (
              <Card
                key={index}
                nome={a.nome}
                cliente={a.cliente}
                data_inicio={a.data_inicio}
                data_fim={a.data_fim}
                investimento_dia={a.investimento_dia}
                dias={daysBetween(a.data_inicio, a.data_fim)}
                cliques={getClick(a.investimento_dia * 30)}
                vizualizacao={getView(a.investimento_dia * 30)}
                compartilhamento={getShare(a.investimento_dia * 30)}
              />
            )
          })}
        </ul>
      </div>

      <Modal isOpen={modalInserir}>
        <ModalHeader>
          <div>
            <h3>Cadastro de anúncio</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <div className="form-group">
            <label>Id</label>
            <input
              className="form-control"
              type="text"
              name="id"
              disabled
              value={data[data.length - 1].id + 1}
              onChange={handleChange}
            />
            <br />

            <label>Nome do anúncio</label>
            <input
              className="form-control"
              type="text"
              name="nome"
              required
              value={anuncioSelecionado ? anuncioSelecionado.nome : ''}
              onChange={handleChange}
            />
            <br />

            <label>Cliente</label>
            <input
              className="form-control"
              type="text"
              name="cliente"
              required
              value={anuncioSelecionado ? anuncioSelecionado.cliente : ''}
              onChange={handleChange}
            />
            <br />

            <label>Data início</label>
            <input
              className="form-control"
              type="date"
              name="data_inicio"
              required
              value={anuncioSelecionado ? anuncioSelecionado.data_inicio : ''}
              onChange={handleChange}
            />
            <br />

            <label>Data término</label>
            <input
              className="form-control"
              type="date"
              name="data_fim"
              required
              value={anuncioSelecionado ? anuncioSelecionado.data_fim : ''}
              onChange={handleChange}
            />
            <br />

            <label>Investimento por dia</label>
            <input
              className="form-control"
              type="text"
              name="investimento_dia"
              required
              value={
                anuncioSelecionado ? anuncioSelecionado.investimento_dia : ''
              }
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => NovoAnuncio()}>
            Salvar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModalInserir(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default Home
