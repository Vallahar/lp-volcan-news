import React, { Component } from "react";

import { CardComponent } from "../../components/CardComponent";
import { InfoCardComponent, IconElementComponent } from "../../components/InfoCardComponent";
import { MapComponent } from "../../components/MapComponent";
import { TwitterFeed } from "../../components/TwitterFeedComponent";
import './styles.scss';

class DashboardPage extends Component {

  constructor(props) {
    super(props)
    this.myRef = React.createRef();
  };


  firstRow() {
    return (<div className="px-4 md:px-10 mx-auto w-full">
      <div>
        {/* Card stats */}
        <div
          className="ml-4 mb-4 text-white"
        >Artículos útiles</div>
        <div className="flex flex-wrap">
          <CardComponent
            title="AYUDAS"
            text="¿Qué puedo solicitar y cómo?"
            icon="far fa-chart-bar"
          />
          <CardComponent
            title="INICIATIVAS"
            text="Iniciativas de la comunidad, local y externa"
            icon="fas fa-users"
          />
          <CardComponent
            title="APOYO EMOCIONAL"
            text="¿Qué me puede ayudar a gestionar lo que siento?"
            icon="fas fa-users"
          />
          <CardComponent
            title="DONACIONES"
            text="¿Dónde puedo aportar mi granito de arena?"
            icon="fas fa-euro-sign"
          />
        </div>
      </div>
    </div>)
  }

  seconsRow() {
    return (
      <div className="row flex flex-wrap justify-center w-full">
        <h2 class="text-white text-xl font-semibold">Ayuntamientos</h2>
        <div className="section-content flex flex-wrap mt-">
          <InfoCardComponent
            logoURL="https://upload.wikimedia.org/wikipedia/commons/1/19/Los-llanos-de-aridane_escudo.png"
            title="Ayuntamiento Los Llanos de Aridane"
            address="Address test"
            description="An artist of considerable range, Jenna the name taken
                  by Melbourne-raised, Brooklyn-based Nick Murphy
                  writes, performs and records all of his own music,
                  giving it a warm, intimate feel with a solid groove
                  structure. An artist of considerable range."
          >
            <IconElementComponent
              icon="fas fa-briefcase"
            >
              Text testing tester
            </IconElementComponent>
            <IconElementComponent
              icon="fas fa-briefcase"
            >
              Text testing tester
            </IconElementComponent>
            <IconElementComponent
              icon="fas fa-briefcase"
            >
              Text testing tester
            </IconElementComponent>
          </InfoCardComponent>
          <InfoCardComponent
            logoURL="https://upload.wikimedia.org/wikipedia/commons/1/19/Los-llanos-de-aridane_escudo.png"
            title="Ayuntamiento Los Llanos de Aridane"
            address="Address test"
            description="An artist of considerable range, Jenna the name taken
                  by Melbourne-raised, Brooklyn-based Nick Murphy
                  writes, performs and records all of his own music,
                  giving it a warm, intimate feel with a solid groove
                  structure. An artist of considerable range."
          >
            <IconElementComponent
              icon="fas fa-briefcase"
            >
              Text testing tester
            </IconElementComponent>
            <IconElementComponent
              icon="fas fa-briefcase"
            >
              Text testing tester
            </IconElementComponent>
            <IconElementComponent
              icon="fas fa-briefcase"
            >
              Text testing tester
            </IconElementComponent>
          </InfoCardComponent>
          <InfoCardComponent
            logoURL="https://upload.wikimedia.org/wikipedia/commons/1/19/Los-llanos-de-aridane_escudo.png"
            title="Ayuntamiento Los Llanos de Aridane"
            address="Address test"
            description="An artist of considerable range, Jenna the name taken
                  by Melbourne-raised, Brooklyn-based Nick Murphy
                  writes, performs and records all of his own music,
                  giving it a warm, intimate feel with a solid groove
                  structure. An artist of considerable range."
          >
            <IconElementComponent
              icon="fas fa-briefcase"
            >
              Text testing tester
            </IconElementComponent>
            <IconElementComponent
              icon="fas fa-briefcase"
            >
              Text testing tester
            </IconElementComponent>
            <IconElementComponent
              icon="fas fa-briefcase"
            >
              Text testing tester
            </IconElementComponent>
          </InfoCardComponent>
        </div>
      </div>

    )
  }

  rightSocialElement() {
    return (
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full h-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Últimas noticias
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          <TwitterFeed />
        </div>
      </div>
    )
  }

  scrollTo = (ref) => {
    if (ref && ref.current /* + other conditions */) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }


  render() {
    return (
      <>
        <div id="dashboard-page">
          {/* Header */}
          <div className="first-row relative pb-32 pt-12">
            {this.firstRow()}
          </div>
          <div className="second-row px-4 md:px-10 mx-auto w-full -m-24">
            <div className="flex flex-wrap" >
              {<MapComponent />}
            </div>
            <div className="flex flex-wrap py-6">
              <div className="left-container flex flex-wrap justify-center w-full xl:w-8/12 mb-12 xl:mb-0 px-4 py-4">
                {this.seconsRow()}
              </div>
              <div className="right-container w-full xl:w-4/12 px-4">
                {this.rightSocialElement()}
              </div>
            </div>
            {/* <footer className="block py-4">
              <div className="container mx-auto px-4">
                <hr className="mb-4 border-b-1 border-blueGray-200" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                  <div className="w-full md:w-4/12 px-4">
                    <div className="text-sm text-blueGray-500 font-semibold py-1">
                      Copyright © {new Date().getFullYear()}{" "}
                      <a
                        href="https://www.creative-tim.com"
                        className="text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1"
                      >
                        Creative Tim
                      </a>
                    </div>
                  </div>
                  <div className="w-full md:w-8/12 px-4">
                    <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                      <li>
                        <a
                          href="https://www.creative-tim.com"
                          className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                        >
                          Creative Tim
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.creative-tim.com/presentation"
                          className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://blog.creative-tim.com"
                          className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/creativetimofficial/tailwind-starter-kit/blob/main/LICENSE.md"
                          className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                        >
                          MIT License
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer> */}
          </div>
        </div>
      </>
    );
  }
}

export { DashboardPage };
