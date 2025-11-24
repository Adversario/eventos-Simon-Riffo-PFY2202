import React from "react";
import { useParams, Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";

const GET_EVENT_DETAILS = gql`
  query getEventDetails($id: ID!) {
    eventDetails(id: $id) {
      id
      organizer
      attendees
      description
    }
  }
`;

function EventDetail() {
  const { id } = useParams();

  const { data, loading, error } = useQuery(GET_EVENT_DETAILS, {
    variables: { id }
  });

  if (loading) return <Loading text="Cargando detalle del evento..." />;
  if (error) return <ErrorMessage message="No se pudo cargar el detalle." />;

  const detail = data?.eventDetails;

  if (!detail) {
    return <ErrorMessage message="Detalle no encontrado." />;
  }

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Detalle del evento</h1>
        <Link
          to="/"
          className="text-sm text-slate-700 hover:text-slate-900 underline"
        >
          Volver
        </Link>
      </div>

      <div className="bg-white border rounded-xl shadow-sm p-5 flex flex-col gap-3">
        <p>
          <span className="font-semibold">Organizador:</span>{" "}
          {detail.organizer}
        </p>
        <p>
          <span className="font-semibold">Asistentes estimados:</span>{" "}
          {detail.attendees}
        </p>
        <p className="text-slate-800 leading-relaxed">
          <span className="font-semibold">Descripción:</span>{" "}
          {detail.description}
        </p>
      </div>
    </section>
  );
}

export default EventDetail;
