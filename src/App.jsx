// src/App.jsx
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ListaPosts from "./components/ListaPosts";
import DetallePost from "./components/DetallePost";

function App() {
  return (
    <div className="App">
      <header>
        <h1>App de Posts</h1>
        <p>Aplicación para visualizar posts y sus detalles</p>
      </header>

      <main>
        <Routes>
          {/* Página principal con lista de posts */}
          <Route path="/" element={<ListaPosts />} />

          {/* Página de detalle del post */}
          <Route path="/posts/:id" element={<DetallePost />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
