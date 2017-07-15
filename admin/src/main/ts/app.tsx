/// <reference path="../../../typings/globals/react-global/index.d.ts" />
/// <reference path="./app.d.ts"/>

class Hello extends React.Component<any, any> {
    render() {
        return <div>hello world, react</div>
    }
}

ReactDOM.render(
    <Hello />,
    $('.container').get(0)
);
