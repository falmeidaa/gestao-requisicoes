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
    <div className="flex flex-col h-full w-full bg-white justify-center items-center">
      <div className="flex max-w-xs">
        <img src={wefitLogo}/>
      </div>
      <div className="my-10">
        <h1 className="text-wefit-brown text-3xl font-bold">WeLearn - Gestão de Requisições</h1>
      </div>
      <nav className="flex sm:justify-center space-x-10 mb-10">
        <Link 
          to="/sem-swr" 
          onClick={() => setActiveLink('sem-swr')} 
          className={`px-6 py-3  transition-shadow duration-200 ease-in-out transform hover:translate-y-px hover:shadow-lg font-semibold rounded-md ${isLinkActive('sem-swr') ? 'bg-wefit-yellow text-wefit-brown hover:wefit-yellow-hover' : 'bg-amber-100 text-wefit-brown'}`}>Sem swr</Link>
        <Link 
          to="/com-swr"
          onClick={() => setActiveLink('com-swr')}
          className={`px-6 py-3 transition-shadow duration-200 ease-in-out transform hover:translate-y-px hover:shadow-lg font-semibold rounded-md ${isLinkActive('com-swr')  ? 'bg-wefit-yellow text-wefit-brown hover:wefit-yellow-hover' : 'bg-amber-100 text-wefit-brown'}`}>Com swr</Link>
        <Link 
          to="/criar-empresa"
          onClick={() => setActiveLink('criar-empresa')}
          className={`px-6 py-3 transition-shadow duration-200 ease-in-out transform hover:translate-y-px hover:shadow-lg font-semibold rounded-md ${isLinkActive('criar-empresa')  ? 'bg-wefit-yellow text-wefit-brown hover:wefit-yellow-hover' : 'bg-amber-100 text-wefit-brown'}`}>Criar empresa</Link>
      </nav>
      <div className="flex flex-1 w-3/12 h-96">
        <Outlet />
      </div>
    </div>
  );
};
