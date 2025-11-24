import React from "react";
import { Routes, Route } from "react-router-dom";
import EventList from "./components/EventList";
import EventDetail from "./components/EventDetail";
import NotFound from "./components/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<EventList />} />
      <Route path="/events/:id" element={<EventDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
