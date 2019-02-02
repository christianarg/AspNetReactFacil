﻿import * as React from "react";
import * as ReactDOM from "react-dom";
import { func } from "prop-types";
//import './index.css';

interface ISquareProps {
    value: string;
    onClick?: React.MouseEventHandler<any>
}

function Square(props: ISquareProps) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}


interface IBoardProps {
    squares: string[];
    onClick: React.MouseEventHandler<any>
}

class Board extends React.Component<IBoardProps> {

    renderSquare(i) {
        return <Square value={this.props.squares[i]}
                       onClick={() => this.props.onClick(i)} />;
    }

    render() {
        return (
            <div>
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

interface IGameState {
    squares: string[];
}

interface IGameComponentState {
    history: IGameState[];
    xIsNext: boolean;
}

class Game extends React.Component<{}, IGameComponentState> {

    constructor(props) {
        super(props);

        const array: any = Array(9);

        const initialState = {
            squares: array.fill(null),
           
        }
        this.state = {
            history: [initialState],
            xIsNext: true
        }
    }



    handleClick(i) {
        const history = this.state.history;
        const current = this.current();
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.getNextSymbol();

        this.setState({
            history: history.concat([{ squares: squares }]),
            xIsNext: !this.state.xIsNext
        });
    }

    current(): IGameState {
        const history = this.state.history;
        const current = history[history.length - 1];
        return current;
    }

    getNextSymbol(): string {
        return this.state.xIsNext ? 'X' : 'O';
    }

    render() {
        const current = this.current();

        const winner = calculateWinner(current.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + this.getNextSymbol();
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);


function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}