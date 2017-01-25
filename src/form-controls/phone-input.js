import React, {PropTypes, Component} from 'react';

class MaskedInput extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var self = this;
        const input = $(this.refs.maskedInput);

        input.inputmask('(999) 999-9999', {
            oncomplete: function () { 
                self.props.onChange(input.val());
            },
            oncleared: function () {
                self.props.onChange('');
            },
            clearIncomplete: true
        });
    }

    render() {
		return (
			<input 
                type="text" 
                ref="maskedInput" 
                className={this.props.className}
                defaultValue={this.props.defaultValue}
            />
		);
    }
}

MaskedInput.propTypes = {
    defaultValue: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

MaskedInput.defaultProps = {
    defaultValue: ''
};

export default MaskedInput;