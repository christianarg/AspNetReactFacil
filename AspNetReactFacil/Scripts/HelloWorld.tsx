import * as React from "react";
import * as ReactDOM from "react-dom";
import { Header } from './Header';

class HelloWorld extends React.Component{
    render() {
        return (
            <div>
                <Header text="GROZO" />
                <div>Hello world Mostro!</div>
            </div>
        );
    }
}

ReactDOM.render(<HelloWorld />, document.getElementById('aquireact'));