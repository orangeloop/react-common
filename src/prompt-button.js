import React, {PropTypes, Component} from 'react';
import {OverlayTrigger,Popover}      from 'react-bootstrap';

class PromptButton extends Component {
    constructor(props) {
        super(props);
    }    

    render() {
        const denyReason = 
                <Popover title={this.props.promptTitle} id={this.props.promptTitle}>
                    <div className='form-group'>
                        <div className='input-group'>
                            <input ref={(input) => this.promptInput = input} type='text' className='form-control' placeholder={this.props.promptText} />
                            <span className='input-group-btn'>
                                <button className='btn btn-primary' onClick={() => this.props.onConfirm(this.promptInput.value)}>OK</button>
                            </span>
                        </div>
                    </div>
                </Popover> 
                        
        return (
            <OverlayTrigger trigger='click' placement='top' overlay={denyReason}>
                <button className={this.props.buttonStyle} style={{paddingTop: '3px', paddingBottom: '3px'}}>{this.props.buttonText}</button>
            </OverlayTrigger>                               
        );        
    }
};

PromptButton.propTypes = {
    promptTitle: PropTypes.string,
    promptText: PropTypes.string,
    buttonStyle: PropTypes.string,
    buttonText: PropTypes.string,
    onConfirm: PropTypes.func.isRequired
};

PromptButton.defaultProps = {
    promptTitle: 'Enter Message',
    promptText: 'Enter Message',
    buttonStyle: 'btn btn-primary',
    buttonText: 'Select'
};

export default PromptButton;