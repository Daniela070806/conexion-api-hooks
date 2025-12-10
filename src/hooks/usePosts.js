// src/hooks/usePosts.js
import useFetch from "./useFetch";

const BASE_URL = "https://jsonplaceholder.typicode.com"; // cámbialo si usas otra API

export function usePosts() {
  const { data, loading, error } = useFetch(`${BASE_URL}/posts`);
  return { posts: data, loading, error };
}

export function usePost(id) {
  const { data, loading, error } = useFetch(id ? `${BASE_URL}/posts/${id}` : null);
  return { post: data, loading, error };
}
