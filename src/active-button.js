import React, {PropTypes} from 'react';
import {Button}           from 'react-bootstrap';

const ActiveButton = (props) => { 
    return (
        <Button 
            bsStyle={props.buttonStyle}
            bsSize={props.buttonSize}
            block={props.block}
            onClick={props.onClick}
            disabled={props.active || !props.enabled}>
            {props.active?<i className="fa fa-circle-o-notch fa-spin"></i>:<span>{props.title}</span>}
        </Button>
    );
}

ActiveButton.propTypes = {
    buttonStyle: PropTypes.oneOf(['primary','default','danger','info','warning','success']),
    buttonSize: PropTypes.oneOf(['lg','large','sm','small','xs','xsmall']),
    enabled: PropTypes.bool,
    active: PropTypes.bool,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]).isRequired,
    onClick: PropTypes.func.isRequired,
    block: PropTypes.bool
};

ActiveButton.defaultProps = {
    buttonStyle: 'default',
    buttonSize: 'small',
    active: false,
    enabled: true,
    block: false
};

export default ActiveButton;