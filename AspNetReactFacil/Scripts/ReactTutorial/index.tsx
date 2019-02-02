import * as React from "react";
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


interface IBoardState {
    squares: string[];
}

class Board extends React.Component<{}, IBoardState> {

    constructor(props) {
        super(props);

        const array: any = Array(9);

        this.state = {
            squares: array.fill(null)
        }
    }

    handleClick(i) {
        const squares = this.state.squares.slice();

        squares[i] = 'X';
        this.setState({ squares: squares });
    }

    renderSquare(i) {
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
    }

    render() {
        const status = 'Next player: X';

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
    document.getElementById('root')
);
