import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import TraumaDomain from "./pages/TraumaDomain";
import Lesson from "./pages/Lesson";
import SearchResults from "./pages/SearchResults";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-ivory text-ink">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trauma" element={<TraumaDomain />} />
          <Route path="/lessons/:slug" element={<Lesson />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
