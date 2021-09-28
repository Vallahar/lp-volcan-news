import React from "react";
import { Link } from "react-router-dom";

import './styles.scss';

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav
        className="md:left-0 md:block md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
        id="sidebar"
      >
        <div className="md:flex-col flex md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 mr-0 ml-4 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            Ayuda Erupción
          </Link>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap justify-end  ">
                <div className="mt-4">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className="sidebar-link text-xs uppercase py-3 font-bold block"
                  to="/"
                >
                  <i className="fas fa-map-marked opacity-75 mr-2 text-sm"></i> Mapa de Evolución
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="sidebar-link text-xs uppercase py-3 font-bold block"
                  to="/articulos"
                >
                  <i className="fas fa-newspaper mr-2 text-sm"></i> Artículos útiles
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="sidebar-link text-xs uppercase py-3 font-bold block"
                  to="/"
                >
                  <i className="fas fa-address-book  mr-2 text-sm"></i> Servicios
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="sidebar-link text-xs uppercase py-3 font-bold block"
                  to="/"
                >
                  <i className="fas fa-hand-holding-usd  mr-2 text-sm"></i> Donaciones
                </Link>
              </li>


              <li className="items-center">
                <Link
                  className="sidebar-link text-xs uppercase py-3 font-bold block"
                  to="/"
                >
                  <i className="fas fa-image mr-2 text-sm"></i> Aportes
                </Link>
              </li>

              {/* <li className="items-center">
                <a
                  className="text-blueGray-300 text-xs uppercase py-3 font-bold block"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fas fa-tools text-blueGray-300 mr-2 text-sm"></i> Enlaces
                </a>
              </li> */}
            </ul>
            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Enlaces
            </h6>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="inline-flex">
                <Link
                  className="sidebar-link text-sm block mb-4 no-underline font-semibold"
                  to="/"
                >
                  <i className="fas fa-paint-brush mr-2  text-base"></i> Styles
                </Link>
              </li>

              <li className="inline-flex">
                <Link
                  className="sidebar-link text-sm block mb-4 no-underline font-semibold"
                  to="/"
                >
                  <i className="fab fa-css3-alt mr-2  text-base"></i> CSS Components
                </Link>
              </li>

              <li className="inline-flex">
                <Link
                  className="sidebar-link text-sm block mb-4 no-underline font-semibold"
                  to="/"
                >
                  <i className="fab fa-vuejs mr-2  text-base"></i> VueJS
                </Link>
              </li>

              <li className="inline-flex">
                <Link
                  className="sidebar-link  text-sm block mb-4 no-underline font-semibold"
                  to="/"
                >
                  <i className="fab fa-react mr-2  text-base"></i> React
                </Link>
              </li>

              <li className="inline-flex">
                <Link
                  className="sidebar-link  text-sm block mb-4 no-underline font-semibold"
                  to="/"
                >
                  <i className="fab fa-angular mr-2  text-base"></i> Angular
                </Link>
              </li>

              <li className="inline-flex">
                <Link
                  className="sidebar-link  text-sm block mb-4 no-underline font-semibold"
                  to="/"
                >
                  <i className="fab fa-js-square mr-2  text-base"></i> Javascript
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
