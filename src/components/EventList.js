import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";

function EventList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadEvents() {
      try {
        setLoading(true);
        setError("");

        const url = `${process.env.PUBLIC_URL}/api/events`;
        const res = await fetch(url);

        if (!res.ok) throw new Error("No se pudieron cargar los eventos.");
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadEvents();
  }, []);

  if (loading) return <Loading text="Cargando eventos..." />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-slate-900">Eventos disponibles</h1>

      {events.length === 0 ? (
        <p className="text-slate-600">No hay eventos disponibles.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </section>
  );
}

export default EventList;