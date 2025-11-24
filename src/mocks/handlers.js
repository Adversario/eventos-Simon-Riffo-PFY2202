import { http, HttpResponse, delay, graphql } from "msw";

const events = [
  {
    id: "1",
    name: "Concierto Santiago",
    date: "2025-12-05",
    location: "Movistar Arena",
    category: "Concierto"
  },
  {
    id: "2",
    name: "Evento Redbull",
    date: "2025-12-12",
    location: "Parque Bicentenario",
    category: "Deportivo"
  },
  {
    id: "3",
    name: "Taller de cerámica",
    date: "2025-12-20",
    location: "Casa Cultural Ñuñoa",
    category: "Taller"
  },
  {
    id: "4",
    name: "Festival Gastronomía",
    date: "2026-01-10",
    location: "Parque O'Higgins",
    category: "Festival"
  },
  {
    id: "5",
    name: "Feria nocturna",
    date: "2026-01-25",
    location: "Barrio Lastarria",
    category: "Feria"
  }
];

const detailsById = {
  "1": {
    organizer: "Productora Andes Live",
    attendees: 1200,
    description:
      "Concierto en vivo con artistas nacionales, producción profesional y experiencia de alto nivel."
  },
  "2": {
    organizer: "Red Bull Chile",
    attendees: 500,
    description:
      "Evento deportivo urbano con exhibiciones, competencias y activaciones para público general."
  },
  "3": {
    organizer: "Taller Manos de Barro",
    attendees: 35,
    description:
      "Taller práctico para aprender técnicas básicas de cerámica con materiales incluidos."
  },
  "4": {
    organizer: "Sabores de Chile",
    attendees: 800,
    description:
      "Festival gastronómico con comida típica, foodtrucks y presentaciones culturales."
  },
  "5": {
    organizer: "Colectivo Feria Urbana",
    attendees: 250,
    description:
      "Feria nocturna con emprendimientos locales, artesanías y música en vivo."
  }
};

export const handlers = [
  // REST: acepta /api/events y /<cualquier-cosa>/api/events
  http.get(/\/api\/events$/, async () => {
    await delay(600);
    return HttpResponse.json(events, { status: 200 });
  }),

  // GraphQL: acepta /graphql y /<cualquier-cosa>/graphql
  graphql.query("getEventDetails", async ({ variables }) => {
    await delay(500);

    const { id } = variables || {};
    const detail = detailsById[id];

    if (!detail) {
      return HttpResponse.json(
        { errors: [{ message: "Evento no encontrado" }] },
        { status: 404 }
      );
    }

    return HttpResponse.json({
      data: {
        eventDetails: {
          id,
          ...detail
        }
      }
    });
  })
];