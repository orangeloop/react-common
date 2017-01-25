import React, {PropTypes, Component} from 'react';
import {Modal,Button}                from 'react-bootstrap';
import ActiveButton                  from './active-button';

class ActionModal extends Component {
    render() {
        const {show, title, actionText, isWorking, errorMessage, onCancel, readonly, onAction, ...other} = this.props;

        const message = (errorMessage)
                            ? <span className="text-danger pull-left"><i className="fa fa-warning"></i> {errorMessage}</span>
                            : <span />;

        return (
            <Modal show={show} onHide={onCancel}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {React.cloneElement(this.props.children, other)}
                </Modal.Body>
                <Modal.Footer>
                    {message}
                    <Button bsStyle="link" onClick={onCancel}>cancel</Button>
                    {(readonly) ? <span /> : <ActiveButton buttonStyle="primary" onClick={onAction} active={isWorking} title={actionText} />}
                </Modal.Footer>
             </Modal>
        )
    }
}

ActionModal.propTypes = {
    show: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    actionText: PropTypes.string.isRequired,
    isWorking: PropTypes.bool,
    errorMessage: PropTypes.string,
    children: PropTypes.element.isRequired,
    onCancel: PropTypes.func.isRequired,
    onAction: PropTypes.func.isRequired,
    readonly: PropTypes.bool.isRequired
}

ActionModal.defaultProps = {
    isWorking: false,
    errorMessage: '',
    readonly: false
}

export default ActionModal;