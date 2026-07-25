import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Authors from "./pages/Authors";
import Tags from "./pages/Tags";
import Random from "./pages/Random";
import QuoteByAuthor from "./Dynamic/QuoteByAuthor";
import QuoteByTag from "./Dynamic/QuoteByTag";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <main className="max-w">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/random" element={<Random />} />
        <Route path="/QuoteByAuthor/:author" element={<QuoteByAuthor />} />
        <Route path="/QuoteByTag/:tag" element={<QuoteByTag />} />
      </Routes>
    </main>
  );
}