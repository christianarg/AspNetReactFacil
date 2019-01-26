import * as React from "react";
import * as ReactDOM from "react-dom";
import { Header } from './Header';

declare var mostrarHelloWorld : boolean;

interface IHelloWorld {
    show: boolean;
}

class HelloWorld extends React.Component<IHelloWorld, {}> {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            this.props.show &&
                <div>
                    <Header text="GROZO MANZ Ultra!" />
                    <div>Hello world Mostro!</div>
                </div>
        );
    }
}

ReactDOM.render(<HelloWorld show={true} />, document.getElementById('aquireact'));