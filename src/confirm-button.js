import React, {PropTypes}       from 'react';
import {OverlayTrigger,Popover} from 'react-bootstrap';

const ConfirmButton = (props) => {
    const confirmPopover = 
            <Popover title={props.confirmTitle} id={props.confirmTitle}>
                <p>{props.confirmMessage}</p>
                <button className='btn btn-success btn-block' onClick={props.onConfirm}>Yes</button>
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
    buttonText: PropTypes.string,
    onConfirm: PropTypes.func.isRequired
};

ConfirmButton.defaultProps = {
    confirmTitle: 'Are you sure?',
    confirmMessage: 'Are you sure?',
    buttonStyle: 'btn btn-primary',
    buttonText: 'Confirm'
};

export default ConfirmButton;