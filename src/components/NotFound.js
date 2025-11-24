import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col gap-3 items-start">
      <h1 className="text-2xl font-bold">Ruta no encontrada</h1>
      <p className="text-slate-700">
        La página que buscas no existe.
      </p>
      <Link
        to="/"
        className="bg-slate-900 text-white text-sm px-3 py-2 rounded-md hover:bg-slate-800 transition"
      >
        Ir a eventos
      </Link>
    </div>
  );
}

export default NotFound;
