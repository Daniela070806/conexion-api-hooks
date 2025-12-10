// src/components/DetallePost.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import  useFetch  from "../hooks/useFetch";

export default function DetallePost() {
  // Obtenemos el ID desde la URL
  const { id } = useParams();

  // Cargar post por ID
  const {
    data: post,
    loading: loadingPost,
    error: errorPost,
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  // Cargar usuario (solo si ya tenemos el post)
  const {
    data: user,
    loading: loadingUser,
    error: errorUser,
  } = useFetch(
    post ? `https://jsonplaceholder.typicode.com/users/${post.userId}` : null
  );

  // Estados combinados
  const loading = loadingPost || loadingUser;
  const error = errorPost || errorUser;

  if (loading) {
    return (
      <div className="cargando">
        <div className="spinner"></div>
        <p>Cargando detalles...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <h2>❌ Error</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  if (!post) {
    return <div className="error">Post no encontrado</div>;
  }

  return (
    <div className="detalle-container">
      {/* Botón volver */}
      <Link to="/" className="boton-volver">← Volver a la lista</Link>

      <div className="detalle-post">
        <h2>{post.title}</h2>

        {user && (
          <div className="autor">
            <strong>Autor:</strong> {user.name} ({user.email})
          </div>
        )}

        <div className="contenido">
          <p>{post.body}</p>
        </div>
      </div>
    </div>
  );
}
