import React, {PropTypes, Component} from 'react';
import {Alert}                       from 'react-bootstrap';

class AlertComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: true
        }
    }
    
    render() {
        if (this.state.show) {
            return (
                <Alert bsStyle={this.props.alertType} onDismiss={() => this.setState({show: false})}>
                    <h4>{this.props.title}</h4>
                    {this.props.message}
                </Alert>  
            );            
        }

        return <span />;
    } 
};

AlertComponent.propTypes = {
    alertType: PropTypes.oneOf(['success','warning','danger','info']),
    title: PropTypes.string,
    message: PropTypes.string
};

AlertComponent.defaultProps = {
    title: '[Title]',
    message: '[Message]'
};

export default AlertComponent;