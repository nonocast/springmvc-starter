/// <reference path="../../../typings/globals/react-global/index.d.ts" />
/// <reference path="./app.d.ts"/>

class Hello extends React.Component<any, any> {
    render() {
        return <h1>hello world, react</h1>
    }
}

ReactDOM.render(
    <Hello />,
    $('.react-container').get(0)
);
