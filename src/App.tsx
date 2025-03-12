import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "@/app/providers/router/app-router";
import { Navigation } from "@/widgets/navigation/ui/navigation";
import './styles/global.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <AppRouter />
    </BrowserRouter>
  );
}