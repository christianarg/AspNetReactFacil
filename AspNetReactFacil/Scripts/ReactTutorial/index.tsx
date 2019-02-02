import * as React from "react";
import * as ReactDOM from "react-dom";
//import './index.css';

interface ISquareProps {
    value: string;
    onClick?: Function;
}

interface ISquareState {
    value: string;
}

class Square extends React.Component<ISquareProps, ISquareState> {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
    }

    render() {
        return (
            <button className="square" onClick={() => this.setState({ value: 'X' })}>
                {this.state.value}
            </button >
        );
    }
}

interface IBoardState {
    squares: [];
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
        alert(i);
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
