import React, {PropTypes} from 'react';
import {safeParseInt}     from 'js-lib';
import NumberInput        from 'react-number-input/build/react-number-input';

const IntegerInput = (props) => {
    return (
        <div className="form-group">
            <label>{props.title}</label>
            <NumberInput 
                className="form-control"
                placeholder={props.placeholder}
                format="0"
                min={1}
                max={31}
                onBlur={(evt) => props.onChange(safeParseInt(evt.target.value))}
                value={props.value} 
            />
        </div>
    );
};

IntegerInput.propTypes = {
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.number,
    onChange: PropTypes.func.isRequired
};

IntegerInput.defaultProps = {
    title: 'Number',
    placeholder: 'Number',
    value: 0
};

export default IntegerInput;