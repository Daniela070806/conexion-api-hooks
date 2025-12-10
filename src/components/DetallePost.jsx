import { useParams } from "react-router";
import { useEffect, useState } from "react";

function DetallePost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const cargarPost = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await res.json();
      setPost(data);

      // 📌 cargar usuario del post
      const resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`);
      const userData = await resUser.json();
      setUsuario(userData);
    };

    cargarPost();
  }, [id]);

  if (!post) return <p>Cargando...</p>;

  return (
    <div className="detalle">
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      {/* 🧑 Información del usuario */}
      {usuario && (
        <div className="usuario-info">
          <h3>👤 Usuario</h3>
          <p><strong>Nombre:</strong> {usuario.name}</p>
          <p><strong>Email:</strong> {usuario.email}</p>
          <p><strong>Ciudad:</strong> {usuario.address.city}</p>
        </div>
      )}
    </div>
  );
}

export default DetallePost;
