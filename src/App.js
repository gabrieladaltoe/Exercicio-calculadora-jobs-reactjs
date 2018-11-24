import React, { Component } from 'react';
import Fieldset from './components/fieldSet/'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ganhoMes: '',
      horaDia: 0,
      diasSemana: 0,
      semanaFerias: 0,
      valueHour: 0,
    }
  }

  setGanhoMes = (e) => {
    // quando a function vem de um evento do js, sempre usa-se o 'e'
    this.setState({
      ganhoMes: e.target.value
      // target é o elemento que sofre o evento
    })
  }

  setHorasDias = (e) => {
    this.setState({
      horaDia: parseInt(e.target.value)
    })
  }

  setDiasSemana = (e) => {
    this.setState({
      diasSemana: parseInt(e.target.value)
    })
  }

  setSemanaFerias = (e) => {
    this.setState({
      semanaFerias: parseInt(e.target.value)
    })
  }


  // converteDinheiro = () => {
  //   return valor.replace(/[\D]+/g, "");
  // }

  // formataDinheiro = () => {
  //   valor = parseInt(converteDinheiro(valor)) + "";
  //   valor = valor.replace(/([0-9]{2})$/g, ".$1");
  //   if (valor.length > 6) {
  //     valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
  //   }
  //   return valor;
  // }


  // mascaraDinheiro = () => {
  //   let input = this;
  //   let valor = this.input;
  //   input.value = formataDinheiro(valor);
  // }


  calcValueHour = (evento) => {
    evento.preventDefault()

    // entrada

    // processamento
    const horasPorSemana = this.state.horaDia * this.state.diasSemana
    const horasDeFerias = horasPorSemana * this.state.semanaFerias
    const totalHoras =  (52.1 * horasPorSemana) - horasDeFerias
    const ganhoPorAno = this.state.ganhoMes * 12
    let valorDeHora = ganhoPorAno / (totalHoras) // divide o ganho anual por 52.1% das horas totais
    valorDeHora += 0.2 * valorDeHora; // soma 20% do valor da hora
    valorDeHora = parseFloat(valorDeHora).toFixed(2)

    this.setState({
      valueHour: valorDeHora
    })
  }


  render() {
    return (
      <React.Fragment>
        <main className='conteudo-principal'>
          <section className="secao secao-projeto">
            <header className="secao__cabecalho">Calcule o valor de um projeto!</header>
            <article className="secao__conteudo">
              <form onSubmit={this.calcValueHour} className="secao__formulario" >
                <Fieldset legend='Quanto você quer ganhar por mês?' label='Reais' idInput='ganho-mes' value={this.state.ganhoMes} onChange={this.setGanhoMes} />

                <Fieldset legend='Quantas horas você quer ganhar por dia?' label='Seu valor/hora' idInput='ganho-hora' type='number' value={this.state.horaDia} onChange={this.setHorasDias} />

                <Fieldset legend='Quantos dias você quer trabalhar por semana?' label='Horas por dia' idInput='projeto-horas' type='number' value={this.state.diasSemana} onChange={this.setDiasSemana} />

                <Fieldset legend='Quantas semanas por ano você quer tirar férias' label='Semanas' idInput='projeto-dias' type='number' value={this.state.semanaFerias} onChange={this.setSemanaFerias} />
                <button className="button">Calcular</button>

              </form>
            </article>
            <footer className="secao__rodape">
              <h3 className="secao__rodape__valor"><span>{this.state.valueHour}</span></h3>
              <p className="secao__rodape__legenda">Seu valor por hora</p>
            </footer>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
