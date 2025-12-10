# Proyecto de Posts con Custom Hooks

Este proyecto consiste en una pequeña aplicación de posts construida en React, donde se implementaron **custom hooks** para mejorar la organización, la reutilización del código y la separación de responsabilidades.

---

## Hooks implementados

### `useFetch`
Hook genérico para peticiones HTTP. Retorna `{ data, loading, error }` y usa `AbortController`.

### `usePosts` y `usePost`
Hooks específicos que usan `useFetch` para obtener la lista de posts y un post por id.

---

## Reflexión

El uso de custom hooks eliminó código repetido y dejó los componentes más centrados en la UI. Aprendí mejores prácticas para manejar efectos, limpieza de peticiones y separación de responsabilidades.

Mejoras futuras: retry, caché, tests unitarios.

---

## Ejecutar localmente

```bash
npm install
npm run dev
# o
yarn
yarn dev
