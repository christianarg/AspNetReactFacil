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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var ProductCategoryRow = /** @class */ (function (_super) {
    __extends(ProductCategoryRow, _super);
    function ProductCategoryRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductCategoryRow.prototype.render = function () {
        var category = this.props.category;
        return (React.createElement("tr", null,
            React.createElement("th", { colSpan: 2 }, category)));
    };
    return ProductCategoryRow;
}(React.Component));
var ProductRow = /** @class */ (function (_super) {
    __extends(ProductRow, _super);
    function ProductRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductRow.prototype.render = function () {
        var product = this.props.product;
        var name = product.stocked ?
            product.name :
            React.createElement("span", { style: { color: 'red' } }, product.name);
        return (React.createElement("tr", null,
            React.createElement("td", null, name),
            React.createElement("td", null, product.price)));
    };
    return ProductRow;
}(React.Component));
var ProductTable = /** @class */ (function (_super) {
    __extends(ProductTable, _super);
    function ProductTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductTable.prototype.render = function () {
        var rows = [];
        var lastCategory = null;
        this.props.products.forEach(function (product) {
            if (product.category !== lastCategory) {
                rows.push(React.createElement(ProductCategoryRow, { category: product.category, key: product.category }));
            }
            rows.push(React.createElement(ProductRow, { product: product, key: product.name }));
            lastCategory = product.category;
        });
        return (React.createElement("table", null,
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null, "Name"),
                    React.createElement("th", null, "Price"))),
            React.createElement("tbody", null, rows)));
    };
    return ProductTable;
}(React.Component));
var SearchBar = /** @class */ (function (_super) {
    __extends(SearchBar, _super);
    function SearchBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchBar.prototype.render = function () {
        return (React.createElement("form", null,
            React.createElement("input", { type: "text", placeholder: "Search..." }),
            React.createElement("p", null,
                React.createElement("input", { type: "checkbox" }),
                ' ',
                "Only show products in stock")));
    };
    return SearchBar;
}(React.Component));
var FilterableProductTable = /** @class */ (function (_super) {
    __extends(FilterableProductTable, _super);
    function FilterableProductTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilterableProductTable.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(SearchBar, null),
            React.createElement(ProductTable, { products: this.props.products })));
    };
    return FilterableProductTable;
}(React.Component));
var PRODUCTS = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];
ReactDOM.render(React.createElement(FilterableProductTable, { products: PRODUCTS }), document.getElementById('container'));
//# sourceMappingURL=index.js.map