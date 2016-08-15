import React, {Component} from 'react';

class TranscludeComponent extends Component {
    constructor() {
        super();
        this.state = {title: null, body: []};
    }

    componentDidMount() {
        let body = [];
        let title = null;

        React.Children.map(this.props.children, (children) => {
            if (children.ref === 'title') {
                title = children;
            }
            else {
                body.push(children);
            }
        });

        this.setState({title, body});

    }

    render() {

        return (
            <div style={{backgroundColor: 'pink'}}>
                {this.state.title && this.state.title}
                {this.state.body.length > 0 && this.state.body}
            </div>
        );
    }
}

export default  TranscludeComponent;