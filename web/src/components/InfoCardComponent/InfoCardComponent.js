

import React from 'react';

class InfoCardComponent extends React.Component {
    defaultProps = {};

    render() {
        const {
            logoURL,
            title,
            address,
            description,
            url,
            children,
        } = this.props;
        return (
            <div className="info-card-component xl:w-4/12 px-3">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                    <div className="px-6 py-6">
                        <div className="info-card-logo flex flex-wrap justify-center mt-4">
                            <div className="w-full px-4 flex justify-center">
                                <img src={logoURL} alt="" style={{maxHeight: '200px'}} />
                            </div>
                        </div>
                        <div className="text-center mt-12">
                            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                {title}
                            </h3>
                            {address && <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                {address}
                            </div>}
                        </div>
                        {description && <div className="py-4 border-t border-blueGray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4">
                                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </div>}
                        <div className="text-center mt-1">
                            {children}
                        </div>
                        {url && <div className="text-center py-6">
                            <a href={url} className="font-normal text-pink-500">
                                Más información
                            </a>
                        </div>}
                    </div>
                </div>
            </div>
        )
    }
}

export { InfoCardComponent };
