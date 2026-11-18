import axios from "axios";
import { useRuntimeConfig } from "#imports";

export function createCommunicationManager() {
  const config = useRuntimeConfig();
  const api = axios.create({
    baseURL: config.public.apiBase,
    timeout: 10000,
  });
  async function getCategories() {
    const response = await api.get("/categories.php");
    return response.data.categories;
  }
  async function searchItems(query) {
    const response = await api.get("/search.php", {
      params: { s: query },
    });
    return response.data.meals ?? [];
  }
  async function getItemsByCategory(category) {
    const response = await api.get("/filter.php", {
      params: { c: category },
    });
    return response.data.meals ?? [];
  }
  async function getItemById(id) {
    const response = await api.get("/lookup.php", {
      params: { i: id },
    });
    return response.data.meals?.[0] ?? null;
  }
  return {
    getCategories,
    searchItems,
    getItemsByCategory,
    getItemById,
  };
}
