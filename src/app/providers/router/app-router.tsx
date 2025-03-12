import { Routes, Route } from "react-router-dom";
import { routes } from "@/shared/config/routes";
import { Home } from "@/pages/home";
import { RandomPost } from "@/pages/random-post";

export function AppRouter() {
  return (
    <Routes>
      <Route path={routes.getHome()} element={<Home />} />
      <Route path={routes.getRandomPost()} element={<RandomPost />} />
    </Routes>
  );
}