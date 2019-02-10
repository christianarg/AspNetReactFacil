import * as React from "react";
import * as ReactDOM from "react-dom";
import { Header } from './Header';
import * as Ajax from './utils';

declare var mostrarHelloWorld: boolean;

interface ISomeData {
    Text: string;
}

interface IUnorderedListProps {
    result: ISomeData[];
    onClick: (value: string) => void;
}

function UnorderedList(props: IUnorderedListProps) {
    if (props.result) {
        return (
            <ul>
                {props.result.map(value =>
                    <li key={value.Text}
                        style={{ cursor: 'pointer' }}
                        onClick={() => props.onClick(value.Text)}>{value.Text}</li>)}
            </ul>
        );
    }
    return null;
}

interface IHelloWorldProps {
    show: boolean;
}

interface IHelloWorldState {
    result: ISomeData[];
    selectedValue: string;
}

class HelloWorld extends React.Component<IHelloWorldProps, IHelloWorldState> {
    constructor(props) {
        super(props);
        this.state = {
            result: null,
            selectedValue: null
        };
    }

    handleClick = (value: string) => {
        this.setState({ selectedValue: value });
    }

    componentDidMount() {
        Ajax.ajax({ url: '/Home/SomeData' }).then((result: ISomeData[]) => {
            this.setState({ result: result });
        });
    }
    
    render() {
        const selectedValue = this.state.selectedValue && <h2>SelectedValue: {this.state.selectedValue}</h2>
        return (
            this.props.show &&
            <div>
                <Header text="GROZO MANZ UltraZ!" />
                <div>Hello world Mostro!</div>
                <UnorderedList result={this.state.result} onClick={this.handleClick.bind(this)} />
                {selectedValue}
            </div>
        );
    }
}

ReactDOM.render(<HelloWorld show={true} />, document.getElementById('aquireact'));