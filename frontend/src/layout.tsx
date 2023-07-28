import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <nav className="flex sm:justify-center space-x-4">
        <Link to="/sem-swr" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Sem swr</Link>
        <Link to="/com-swr" className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Com swr</Link>
      </nav>
      <div className="flex flex-1">
        <Outlet />
      </div>
    </div>
  );
};
