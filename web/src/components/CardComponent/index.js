import React from 'react';

import './style.scss';

class CardComponent extends React.Component {
    defaultProps = {};

    render() {
        const { text, title, icon } = this.props;
        return (
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4" id="card-component">
                <div className="h-full relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                    <div className="flex items-center justify-center text-center flex-auto p-4">
                        <div className="flex-col flex flex-wrap">
                        <div className="relative w-auto flex-initial">
                                {icon && <div className="icon text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full">
                                    <i className={icon} />
                                </div>}
                        </div>
                        <h5 className="my-2	text-blueGray-400 uppercase font-bold text-xs">{title}</h5>
                        <span className="font-semibold text-xl text-blueGray-700">{text}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { CardComponent };
