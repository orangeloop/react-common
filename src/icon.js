import React, {PropTypes} from 'react';

const Icon = (props) => {
    return (
        <i className={props.iconClasses}></i>
    );
}

Icon.propTypes = {
    iconClasses: PropTypes.string.isRequired
};

Icon.defaultProps = {
    iconClasses: ''
};

export default Icon;