"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
function Square(props) {
    return (React.createElement("button", { className: "square", onClick: props.onClick }, props.value));
}
var Board = /** @class */ (function (_super) {
    __extends(Board, _super);
    function Board(props) {
        var _this = _super.call(this, props) || this;
        var array = Array(9);
        _this.state = {
            squares: array.fill(null),
            xIsNext: true
        };
        return _this;
    }
    Board.prototype.handleClick = function (i) {
        var squares = this.state.squares.slice();
        squares[i] = this.getNextSymbol();
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });
    };
    Board.prototype.renderSquare = function (i) {
        var _this = this;
        return React.createElement(Square, { value: this.state.squares[i], onClick: function () { return _this.handleClick(i); } });
    };
    Board.prototype.getNextSymbol = function () {
        return this.state.xIsNext ? 'X' : 'O';
    };
    Board.prototype.render = function () {
        var status = "Next player: " + this.getNextSymbol();
        return (React.createElement("div", null,
            React.createElement("div", { className: "status" }, status),
            React.createElement("div", { className: "board-row" },
                this.renderSquare(0),
                this.renderSquare(1),
                this.renderSquare(2)),
            React.createElement("div", { className: "board-row" },
                this.renderSquare(3),
                this.renderSquare(4),
                this.renderSquare(5)),
            React.createElement("div", { className: "board-row" },
                this.renderSquare(6),
                this.renderSquare(7),
                this.renderSquare(8))));
    };
    return Board;
}(React.Component));
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Game.prototype.render = function () {
        return (React.createElement("div", { className: "game" },
            React.createElement("div", { className: "game-board" },
                React.createElement(Board, null)),
            React.createElement("div", { className: "game-info" },
                React.createElement("div", null),
                React.createElement("ol", null))));
    };
    return Game;
}(React.Component));
// ========================================
ReactDOM.render(React.createElement(Game, null), document.getElementById('root'));
//# sourceMappingURL=index.js.map