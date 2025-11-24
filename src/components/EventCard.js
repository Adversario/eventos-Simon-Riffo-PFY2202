import React from "react";
import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
    <article className="bg-white border rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-semibold">{event.name}</h2>

        <div className="text-sm text-slate-700">
          <p>
            <span className="font-medium">Fecha:</span> {event.date}
          </p>
          <p>
            <span className="font-medium">Lugar:</span> {event.location}
          </p>
          <p>
            <span className="font-medium">Categoría:</span> {event.category}
          </p>
        </div>

        <Link
          to={`/events/${event.id}`}
          className="mt-2 inline-flex items-center justify-center bg-slate-900 text-white text-sm px-3 py-2 rounded-md hover:bg-slate-800 transition"
        >
          Ver detalle
        </Link>
      </div>
    </article>
  );
}

export default EventCard;
