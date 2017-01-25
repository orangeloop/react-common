import React, {PropTypes} from 'react';
import {Button}           from 'react-bootstrap';

const ActiveButton = (props) => { 
    return (
        <Button 
            bsStyle={props.buttonStyle}
            onClick={props.onClick}
            disabled={props.active || !props.enabled}>
            {props.active?<i className="fa fa-circle-o-notch fa-spin"></i>:<span>{props.title}</span>}
        </Button>
    );
}

ActiveButton.propTypes = {
    buttonStyle: PropTypes.oneOf(['primary','default','danger','info','warning','success']),
    enabled: PropTypes.bool,
    active: PropTypes.bool,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

ActiveButton.defaultProps = {
    buttonStyle: 'default',
    active: false,
    enabled: true
};

export default ActiveButton;