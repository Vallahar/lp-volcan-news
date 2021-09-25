import React from 'react';

class CardComponent extends React.Component {
    defaultProps = {};

    render() {
        const { text, title, icon } = this.props;
        return (
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4" id="card-component">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                    <div className="flex-auto p-4">
                        <div className="flex flex-wrap">
                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                                    {title}
                                </h5>
                                <span className="font-semibold text-xl text-blueGray-700">
                                    {text}
                                </span>
                            </div>
                            <div className="relative w-auto pl-4 flex-initial">
                                {icon && <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-lightBlue-500">
                                    <i className={icon} />
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { CardComponent };
