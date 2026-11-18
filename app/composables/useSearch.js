import { createCommunicationManager } from "~/services/communicationManager";

export function useSearch() {
  const manager = createCommunicationManager();

  const query = ref("");
  const results = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const searched = ref(false);

  async function search() {
    loading.value = true;
    error.value = null;
    try {
      results.value = await manager.searchItems(query.value);
    } catch (e) {
      error.value = "No se pudo conectar con la API";
    } finally {
      loading.value = false;
      searched.value = true;
    }
  }

  return { query, results, loading, error, searched, search };
}
