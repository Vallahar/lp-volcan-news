import React from 'react';
import './styles.scss';
import TabsComponent from '../TabsComponent/TabsComponent';

const mapTabs = [
    {
        id: 1,
        name: 'Mapa Cabildo de La Palma',
    },
    {
        id: 2,
        name: 'IGN',
    },
    {
        id: 4,
        name: 'Google Maps',
    },
    {
        id: 3,
        name: 'Open Street Maps',
    },
]
class MapComponent extends React.Component {
    defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {
            tabId: 1,
        }
    }

    getOpenStreetMap() {
        return (
            <>
                <div className="rounded-t mb-0 px-4 py-3 bg-transparent" id="map-title">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full max-w-full flex-grow flex-1">
                            <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                                MAPA NO OFICIAL - COMUNIDAD DE OPENSTREETMAPS
                            </h6>
                            <h2 className=" text-xl font-semibold">
                                Mapa de evolución
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="p-4 flex-auto h-full" id="map-content">
                    <iframe
                        title="map-openstreetmap"
                        width="100%"
                        height="650"
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=-17.930374145507816%2C28.596429343855675%2C-17.858705520629886%2C28.629356696994105&amp;layer=mapnik"
                    />
                </div>
                <div className="mb-0 px-4 pb-2">
                    <a className="" href="https://www.openstreetmap.org/#map=15/28.6129/-17.8945" target="_blank" rel="noreferrer">
                        Ver el mapa en grande
                    </a>
                </div>
            </>

        )
    }
    getGoogleMap() {
        return (
            <>
                <div className="rounded-t mb-0 px-4 py-3 bg-transparent" id="map-title">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full max-w-full flex-grow flex-1">
                            <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                                MAPA NO OFICIAL
                            </h6>
                            <h2 className=" text-xl font-semibold">
                                Mapa de evolución y perimetros restringidos
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="p-4 flex-auto h-full" id="map-content">
                    <iframe
                        title="map-openstreetmap"
                        width="100%"
                        height="650"
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                        src="https://www.google.com/maps/d/embed?mid=1u7vUeK3m__w4YRHPL-E08SVBkwMBcNcR"
                    />
                </div>
                <div className="mb-0 px-4 pb-2">
                    <a className="" href="https://www.openstreetmap.org/#map=15/28.6129/-17.8945" target="_blank" rel="noreferrer">
                        Ver el mapa en grande
                    </a>
                </div>
            </>

        )
    }

    getIgnMap() {
        return (
            <>
                <div className="rounded-t mb-0 px-4 py-3 bg-transparent" id="map-title">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full max-w-full flex-grow flex-1">
                            <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                                MAPA INSTITUTO GEOGRAFICO NACIONAL
                            </h6>
                            <h2 className=" text-xl font-semibold">
                                Mapa de evolución
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="p-4 flex-auto h-full" id="map-content">
                    <iframe
                        title="map-ign"
                        width="100%"
                        height="650"
                        frameborder="0"
                        scrolling="no"
                        allowfullscreen
                        src="https://arcg.is/0HHOma"
                    />
                </div>
                <div className="mb-0 px-4 pb-2">
                    <a className="" href="https://arcg.is/0HHOma" target="_blank" rel="noreferrer">
                        Ver el mapa en grande
                    </a>
                </div>
            </>

        )
    }

    getLaPalmaMap() {
        return (
            <>
                <div className="rounded-t mb-0 px-4 py-3 bg-transparent" id="map-title">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full max-w-full flex-grow flex-1">
                            <h6 className="uppercase mb-1 text-xs font-semibold">
                                MAPA CABILDO DE LA PALMA
                            </h6>
                            <h8 className="text-xl font-semibold">
                                Si aparece una ventana para iniciar sesión dele a cancelar
                            </h8>
                        </div>
                    </div>
                </div>
                <div className="p-4 flex-auto h-full" id="map-content">
                    <iframe
                        title="map-ign"
                        width="100%"
                        height="650"
                        frameborder="0"
                        scrolling="no"
                        allowfullscreen
                        src="https://arcg.is/1mKPfL"
                    />
                </div>
                <div className="mb-0 px-4 pb-2">
                    <a href="https://arcg.is/1mKPfL" target="_blank" rel="noreferrer">
                        Ver el mapa en grande
                    </a>
                </div>
            </>

        )
    }

    getMaps() {
        switch (this.state.tabId) {
            case 4:
                return this.getGoogleMap();        
            case 3:
                return this.getOpenStreetMap();        
            case 2:
                return this.getIgnMap();        
            case 1:
                return this.getLaPalmaMap();        
            default:
                break;
        }
    }

    render() {
        return (
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4" id="map-component">
                <div className="flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-800" id="map-container">
                    <TabsComponent
                        tabs={mapTabs}
                        tabActivated={this.state.tabId}
                        handleTabChange={(id) => this.setState({tabId: id})}
                    />
                    {this.getMaps()}
                </div>
            </div>
        )
    }
}

export { MapComponent };
