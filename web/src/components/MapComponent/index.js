import React from 'react';
import './styles.scss';

class MapComponent extends React.Component {
    defaultProps = {};

    render() {
        return (
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4" id="map-component">
                <div className="p-8 flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded" id="map-container">
                    <div className="rounded-t mb-0 bg-transparent" id="map-title">
                        <div className="flex flex-wrap items-center text-center">
                            <div className="relative w-full max-w-full flex-grow flex-1">
                                <h6 className="uppercase text-xs font-semibold">
                                    MAPA NO OFICIAL - COMUNIDAD DE OPENSTREETMAPS
                                </h6>
                                <div class="block p-1"></div>
                                <h2 className="text-xl font-semibold">
                                    Mapa de evolución
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div class="block p-2"></div>
                    <div className="flex-auto h-full" id="map-content">
                        <iframe
                            title="map-openstreetmap"
                            width="100%"
                            height="500"
                            frameborder="0"
                            scrolling="no"
                            marginheight="0"
                            marginwidth="0"
                            src="https://www.openstreetmap.org/export/embed.html?bbox=-17.930374145507816%2C28.596429343855675%2C-17.858705520629886%2C28.629356696994105&amp;layer=mapnik"
                        />
                    </div>
                    <div class="block p-4"></div>
                    <div className="mb-0 text-center">
                        <a class="text-base uppercase text-black" href="https://www.openstreetmap.org/#map=15/28.6129/-17.8945" target="_blank" rel="noreferrer">
                            Ver el mapa en grande
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export { MapComponent };
