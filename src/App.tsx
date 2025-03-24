import "./App.css";
import HomePage from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import ModelsPage from "./pages/ModelsPage";
import DocumentationPage from "./pages/DocumentationPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-gray-200 flex flex-col">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/documentation" element={<DocumentationPage />} />
            <Route path="/models" element={<ModelsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
