import * as React from "react";

interface IHeaderProps {
    text: string;
}
export class Header extends React.Component<IHeaderProps, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return (<h1>{this.props.text}</h1>);
    }
}