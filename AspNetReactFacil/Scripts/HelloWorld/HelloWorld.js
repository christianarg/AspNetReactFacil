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
var Header_1 = require("./Header");
var Ajax = require("./utils");
function UnorderedList(props) {
    if (props.result) {
        return (React.createElement("ul", null, props.result.map(function (value) {
            return React.createElement("li", { key: value.Text, style: { cursor: 'pointer' }, onClick: function () { return props.onClick(value.Text); } }, value.Text);
        })));
    }
    return null;
}
var HelloWorld = /** @class */ (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClick = function (value) {
            _this.setState({ selectedValue: value });
        };
        _this.state = {
            result: null,
            selectedValue: null
        };
        return _this;
    }
    HelloWorld.prototype.componentDidMount = function () {
        var _this = this;
        Ajax.ajax({ url: '/Home/SomeData' }).then(function (result) {
            _this.setState({ result: result });
        });
    };
    HelloWorld.prototype.render = function () {
        var selectedValue = this.state.selectedValue && React.createElement("h2", null,
            "SelectedValue: ",
            this.state.selectedValue);
        return (this.props.show &&
            React.createElement("div", null,
                React.createElement(Header_1.Header, { text: "GROZO MANZ UltraZ!" }),
                React.createElement("div", null, "Hello world Mostro!"),
                React.createElement(UnorderedList, { result: this.state.result, onClick: this.handleClick.bind(this) }),
                selectedValue));
    };
    return HelloWorld;
}(React.Component));
ReactDOM.render(React.createElement(HelloWorld, { show: true }), document.getElementById('aquireact'));
//# sourceMappingURL=HelloWorld.js.map