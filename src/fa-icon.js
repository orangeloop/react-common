import React, {PropTypes} from 'react';
import Icon               from './icon';
import classNames         from 'classnames';

const FaIcon = (props) => {
    const icon = `fa-${props.icon}`;
    const classes = classNames({
        'fa': true,
        [icon]: true,
        'fa-fw': props.fixedWidth,
        'fa-spin': props.spinner
    });
    
    return (
        <Icon iconClasses={classes} />    
    );
}

FaIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    fixedWidth: PropTypes.bool,
    spinner: PropTypes.bool
}

FaIcon.defaultProps = {
    icon: '',
    fixedWidth: false,
    spinner: false
};

export default FaIcon;