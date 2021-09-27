import React from 'react';

class IconElementComponent extends React.Component {
    render() {
        const { children, icon, customClass } = this.props;
        console.log(customClass);
        return (
            <div className={`${customClass || 'mb-2 text-blueGray-600 mt-2'}`}>
                {icon && <i className={`${icon} mr-2 text-lg text-blueGray-400`}></i>}
                {children}
            </div>
        )
    }
}

export { IconElementComponent };
