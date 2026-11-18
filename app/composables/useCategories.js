import { createCommunicationManager } from "~/services/communicationManager";

export function useCategories() {
  const manager = createCommunicationManager();

  const categories = ref([]);
  const selected = ref(null);
  const items = ref([]);
  const loading = ref(false);
  const error = ref(null);

  async function loadCategories() {
    loading.value = true;
    error.value = null;
    try {
      categories.value = await manager.getCategories();
    } catch (e) {
      error.value = "No se pudieron cargar las categorías";
    } finally {
      loading.value = false;
    }
  }

  async function selectCategory(name) {
    selected.value = name;
    loading.value = true;
    error.value = null;
    try {
      items.value = await manager.getItemsByCategory(name);
    } catch (e) {
      error.value = "No se pudieron cargar las recetas";
    } finally {
      loading.value = false;
    }
  }

  return {
    categories,
    selected,
    items,
    loading,
    error,
    loadCategories,
    selectCategory,
  };
}
