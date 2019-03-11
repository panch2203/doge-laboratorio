// import Corgi, { eats } from './corgi2'; //en {} puedes meter varios funciones
// DDAU Data Down Actions Up

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

class Square extends React.Component {

render() {
    return (
      <button className="square" onClick={() =>  //Aquí se manda llamar la función onClick para realizar el cambio de valor
      	this.props.onClick()
      }>
        {this.props.value} 
      </button> //Aquí se guarda el valor almacenado en props que proviene del padre
    );
  }
} 

class Board extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			squares: Array(9).fill(null),   //Se crea un arreglo copia que inicializa el tablero con valores nulos
			xIsNext: true, //El valor booleano que determina si hubo un cambio de jugador cambia de valor
		}
	}
  renderSquare(i) {
    return <Square 
    value={this.state.squares[i]}  //Se plasma en el tablero el valor del arreglo de la posición del cuadro en el tablero
    onClick={() => this.handleClick(i)} //Se manda llamar la función que maneja el click
     />;
  }
  
  handleClick(i){
  	const squares = this.state.squares.slice(); //Genera una copia con el metodo slice() de la variable squares
  	if (this.calculateWinner(squares) || squares[i]){
  		return; //Función que determina si se cumplió una combinación ganadora comparando el tablero actual con todas las combinaciones ganadoras
  	}
  	squares[i] = this.state.xIsNext ? 'X' : 'O'; //Condición para checar el valor booleano y cambiar de valor el cuadro para marcar turnos
  	this.setState({
  		squares: squares,
  		xIsNext: !this.state.xIsNext, //Cambia el booleano para dar el turno al otro jugador
  	})
  }

  calculateWinner(squares) {
  	const lines = [ 
  		[0,1,2], 
  		[3,4,5],
  		[6,7,8]
  	] //Inicializar un arreglo con las combinaciones ganadoras

  	for (let i = 0; i < lines.length; i++) {
  		const [a,b,c] = lines[i];
  		if (squares[a] === squares[b] && squares[a] === squares[c])
  			return squares[a]; //Compara si el tablero tiene las combinaciones de un jugador con las ganadoras y retorna 
  	}

  	return null; //Retorna nulo si no hay combinacion ganadora en el tablero
  }

  render() {
  	const winner = this.calculateWinner(this.state.squares);
  	let status;
  	if(winner) {
  		status = 'Winner: ' + winner; //No hubo nulos lo cual significa que algun jugador ya gano y se manda mensaje
  	} else {
  		status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O'); //Da el turno e imprime el turno del jugador
  	}
    

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root') //En esta parte el componente padre que es Game se manda al elemento html con el id root
);













/* EJEMPLO DE SYNTAX

let colors = ['blue', 'red','green'];
let missing_colors = ['orange'];

let all_colors = [ ...colors, ...missing_colors]; //spread syntax
console.log(all_colors);

let jingleBells = {
	red: 2,
	blue: 3,
	orange: 5
}

const { red, blue, orange } =jingleBells;  //destructuring

console.log(red,blue,orange);
*/


/* EJEMPLO CLASES 

class Person { //Clases tiene this
	constructor(...args) {
		
		this.name = args[0];
		this.lastName = args[1];
		this.age = args[2];
	}

	talk() {
		console.log(this);
		return true;
	}
}

let person = new Person('Josh');

//ejecuto el metodo y el propio metodo imprime this
person.talk();

//console.log imprime el resultado de ejecutar el metodo return
console.log(person.talk());

class Student extends Person{
	constructor(name, lastName, age, studentId){
		super(name, lastName, age);
		this.studentId = studentId;
	}
}

let lulu = new Student('lulu', 'lll', 9, '123');
console.log(lulu);

let corgi = new Corgi('Thor'); //de todo el objeto que quiero exportar solo quiero corgi y lo pongo en {} en el import
console.log(corgi);
*/ 



