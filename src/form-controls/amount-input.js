import React, {PropTypes} from 'react';
import NumberInput        from 'react-number-input/build/react-number-input';
import {safeParseFloat}   from 'js-lib';

const AmountInput = (props) => {
    return (
        <div className="form-group">
            <label className="control-label">{props.amountLabel}</label>
            <div className="input-group">
                <span className="input-group-addon">$</span>
                <NumberInput 
                    className="form-control"
                    placeholder="Amount"
                    format="0.00"
                    onBlur={(evt) => props.onChange(safeParseFloat(evt.target.value))}
                    value={props.amount} 
                />
            </div>
            <span className="help-block">{props.helpText}</span>
        </div>           
    );
}

AmountInput.propTypes = {
    amountLabel: PropTypes.string,
    amount: PropTypes.number,
    helpText: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

AmountInput.defaultProps = {
    amountLabel: 'Amount',
    amount: 0.00
};

export default AmountInput;