import { useState, useEffect } from 'react';
import { Link } from "react-router";

function ListaPosts() {
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarPosts = async () => {
      try {
        setCargando(true);
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');

        if (!respuesta.ok) throw new Error('Error al cargar los posts');

        const datos = await respuesta.json();
        setPosts(datos);
        setFiltered(datos);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    cargarPosts();
  }, []);

  // 🔎 FILTRO EN TIEMPO REAL
  useEffect(() => {
    setFiltered(
      posts.filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search, posts]);

  if (cargando) {
    return (
      <div className="cargando">
        <div className="spinner"></div>
        <p>Cargando posts...</p>
      </div>
    );
  }

  if (error) return <p>❌ {error}</p>;

  return (
    <div>
      <h2>📝 Lista de Posts</h2>

      {/* 🔍 INPUT DE FILTRO */}
      <input 
        type="text"
        placeholder="Filtrar por título..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="input-filtro"
      />

      <div className="posts-grid">
        {filtered.map(post => (
          <div key={post.id} className="post-card">
            <Link to={`/posts/${post.id}`} className="post-link">Ver Detalle</Link>
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaPosts;
