import { Link, Outlet } from "react-router-dom";
import wefitLogo from './assets/wefit.png'
import { useState } from "react";

type LinkType = 'com-swr' | 'sem-swr' | 'criar-empresa'

export const Layout = () => {
  const [activeLink, setActiveLink] = useState<LinkType>('sem-swr')

  const isLinkActive = (type: LinkType) => {
    if (activeLink === type) {
      return true;
    }
    return false
  }

  return (
    <div className="flex flex-col h-full w-full bg-gray-800 justify-center items-center py-28">
      <div className="flex max-w-xs">
        <img src={wefitLogo} style={{width: 360}}/>
      </div>
      <div className="flex items-center justify-center my-14">
        <h1 className="text-5xl font-bold color text-wefit-yellow">WELEARN</h1>
        <h1 className="text-5xl font-normal ml-4 text-gray-100">GESTÃO DE REQUISIÇÕES</h1>
      </div>
      <nav className="flex sm:justify-center space-x-10 mb-10">
        <Link 
          to="/sem-swr" 
          onClick={() => setActiveLink('sem-swr')} 
          className={`px-6 py-3 transition-shadow text-xl duration-200 ease-in-out transform hover:translate-y-px hover:shadow-lg font-semibold rounded-3xl ${isLinkActive('sem-swr') ? 'bg-wefit-yellow text-wefit-brown hover:wefit-yellow-hover' : 'bg-amber-100 text-wefit-brown'}`}>Sem swr</Link>
        <Link 
          to="/com-swr"
          onClick={() => setActiveLink('com-swr')}
          className={`px-6 py-3 transition-shadow text-xl duration-200 ease-in-out transform hover:translate-y-px hover:shadow-lg font-semibold rounded-3xl ${isLinkActive('com-swr')  ? 'bg-wefit-yellow text-wefit-brown hover:wefit-yellow-hover' : 'bg-amber-100 text-wefit-brown'}`}>Com swr</Link>
        <Link 
          to="/criar-empresa"
          onClick={() => setActiveLink('criar-empresa')}
          className={`px-6 py-3 transition-shadow text-xl duration-200 ease-in-out transform hover:translate-y-px hover:shadow-lg font-semibold rounded-3xl ${isLinkActive('criar-empresa')  ? 'bg-wefit-yellow text-wefit-brown hover:wefit-yellow-hover' : 'bg-amber-100 text-wefit-brown'}`}>Criar empresa</Link>
      </nav>
      <div className="flex flex-1 w-full h-96 justify-center">
        <Outlet />
      </div>
    </div>
  );
};
