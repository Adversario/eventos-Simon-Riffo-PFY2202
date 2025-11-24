import React from "react";
import { Link, useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="text-lg font-semibold tracking-wide">
            Centro de Eventos
          </Link>

          <nav className="flex items-center gap-4 text-sm">
            <Link
              to="/"
              className={`px-3 py-1 rounded-md transition ${
                location.pathname === "/"
                  ? "bg-white/10"
                  : "hover:bg-white/10"
              }`}
            >
              Eventos
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-6">
        {children}
      </main>

      <footer className="bg-slate-100 border-t">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-600">
          Todos los derechos reservados a Simón Riffo.
        </div>
      </footer>
    </div>
  );
}

export default Layout;