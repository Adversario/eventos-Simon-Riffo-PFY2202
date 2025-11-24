import React from "react";

function Loading({ text = "Cargando..." }) {
  return (
    <div className="w-full flex items-center justify-center py-10">
      <div className="text-slate-700 animate-pulse">{text}</div>
    </div>
  );
}

export default Loading;
