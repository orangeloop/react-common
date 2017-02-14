import React, {PropTypes}       from 'react';
import {OverlayTrigger,Popover} from 'react-bootstrap';
import ActiveButton             from './active-button';

const ConfirmButton = (props) => {
    const confirmPopover = 
            <Popover title={props.confirmTitle} id={props.confirmTitle}>
                <p>{props.confirmMessage}</p>
                <ActiveButton
                    buttonStyle="success"
                    block={true}
                    title="Yes"
                    active={props.active}
                    onClick={props.onConfirm} />
            </Popover> 
                    
    return (
        <OverlayTrigger trigger='click' placement='top' overlay={confirmPopover}>
            <button className={props.buttonStyle}>{props.buttonText}</button>
        </OverlayTrigger>                               
    );        
};

ConfirmButton.propTypes = {
    confirmTitle: PropTypes.string,
    confirmMessage: PropTypes.string,
    buttonStyle: PropTypes.string,
    buttonText: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    active: PropTypes.bool,
    onConfirm: PropTypes.func.isRequired
};

ConfirmButton.defaultProps = {
    confirmTitle: 'Are you sure?',
    confirmMessage: 'Are you sure?',
    buttonStyle: 'btn btn-primary',
    buttonText: 'Confirm',
    active: false
};

export default ConfirmButton;