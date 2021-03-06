"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Header_1 = require("./Header");
var Ajax = require("./utils");
function ListItem(props) {
    //return (<li>hola</li>);
    var someData = props.someData;
    return (React.createElement("li", { key: someData.Text, style: { cursor: 'pointer' }, onClick: function () { return props.onClick(someData.Text); } }, someData.Text));
}
function UnorderedList(props) {
    if (props.result) {
        return (React.createElement("ul", null, props.result.map(function (someData) {
            return React.createElement(ListItem, { someData: someData, onClick: props.onClick });
        })));
    }
    return null;
}
//const withGetSomeData = <P extends object>(Component: React.ComponentType<P>) => {
//    return class extends React.Component {
//        getSomeData(): Promise<ISomeData> {
//            return Ajax.ajax({ url: '/Home/SomeData' });
//        }
//    }
//}
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
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSomeData()];
                    case 1:
                        result = _a.sent();
                        this.setState({ result: result });
                        return [2 /*return*/];
                }
            });
        });
    };
    HelloWorld.prototype.getSomeData = function () {
        return Ajax.ajax({ url: '/Home/SomeData' });
    };
    HelloWorld.prototype.render = function () {
        var selectedValue = this.state.selectedValue && React.createElement("h2", null,
            "SelectedValue: ",
            this.state.selectedValue);
        return (this.props.show &&
            React.createElement("div", null,
                React.createElement(Header_1.Header, { text: "GROZO MANZ UltraZ!" }),
                React.createElement("h2", null, "Hello world Mostro!"),
                React.createElement(UnorderedList, { result: this.state.result, onClick: this.handleClick }),
                selectedValue));
    };
    return HelloWorld;
}(React.Component));
exports.HelloWorld = HelloWorld;
//const HelloWorldWithGetSomeData = withGetSomeData(HelloWorld);
//HelloWorldWithGetSomeData
//ReactDOM.render(<HelloWorld show={true} />, document.getElementById('aquireact'));
//# sourceMappingURL=HelloWorld.js.map