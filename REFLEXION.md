Reflexión sobre la implementación
1️⃣ ¿Cómo mejoraría la implementación de useFetch?

La implementación actual funciona, pero tiene limitaciones.
Yo la mejoraría así:

Agregar soporte para abortar peticiones con AbortController
→ Esto evita errores cuando cambiamos de página rápido.

Permitir recargar manualmente
→ Por ejemplo devolver una función refetch()

Agregar manejo de estados más detallados
→ “idle”, “loading”, “success”, “error”.

Evitar llamadas si la URL no cambia
→ Memorizar resultado con useMemo o cache.

Ejemplo de mejora:

"const controller = new AbortController();
fetch(url, { signal: controller.signal });
return () => controller.abort();"

En el formulario de creación/edición de post, ¿cómo actualizamos el estado sin manejar cada campo por separado?

La forma más eficiente es manejar un único estado objeto, por ejemplo:

const [form, setForm] = useState({
  title: "",
  body: "",
  userId: 1
});

Y actualizarlo así:

setForm({
  ...form,
  [e.target.name]: e.target.value
});
Esto evita tener 3, 5 o 10 useState diferentes y hace el formulario más fácil de mantener.