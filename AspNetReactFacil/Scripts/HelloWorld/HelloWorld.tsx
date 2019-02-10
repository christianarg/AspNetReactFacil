import * as React from "react";
import * as ReactDOM from "react-dom";
import { Header } from './Header';
import * as Ajax from './utils';

interface ISomeData {
    Text: string;
}

type ClickHandler = (value: string) => void;

interface IListItemProps {
    someData: ISomeData;
    onClick: ClickHandler;
}

function ListItem(props: IListItemProps) {
    //return (<li>hola</li>);
    const someData = props.someData;
    return (<li key={someData.Text}
        style={{ cursor: 'pointer' }}
        onClick={() => props.onClick(someData.Text)}>{someData.Text}</li>
    );
}


interface IUnorderedListProps {
    result: ISomeData[];
    onClick: ClickHandler;
}

function UnorderedList(props: IUnorderedListProps) {
    if (props.result) {
        return (
            <ul>
                {props.result.map(someData =>
                    <ListItem someData={someData} onClick={props.onClick} />)
                }
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

interface IGetSomeData {
    getSomeData(): Promise<ISomeData>;
}

//const withGetSomeData = <P extends object>(Component: React.ComponentType<P>) => {
//    return class extends React.Component {
//        getSomeData(): Promise<ISomeData> {
//            return Ajax.ajax({ url: '/Home/SomeData' });
//        }
//    }
//}

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

    async componentDidMount() {
        const result = await this.getSomeData();
        this.setState({ result: result });
    }

    getSomeData(): Promise<ISomeData[]> {
        return Ajax.ajax({ url: '/Home/SomeData' });
    }

    render() {
        const selectedValue = this.state.selectedValue && <h2>SelectedValue: {this.state.selectedValue}</h2>
        return (
            this.props.show &&
            <div>
                <Header text="GROZO MANZ UltraZ!" />
                <div>Hello world Mostro!</div>
                <UnorderedList result={this.state.result} onClick={this.handleClick} />
                {selectedValue}
            </div>
        );
    }
}

//const HelloWorldWithGetSomeData = withGetSomeData(HelloWorld);
//HelloWorldWithGetSomeData
ReactDOM.render(<HelloWorld show={true} />, document.getElementById('aquireact'));