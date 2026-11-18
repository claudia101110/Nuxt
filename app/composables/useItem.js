import { createCommunicationManager } from "~/services/communicationManager";

export function useItem(id) {
  const manager = createCommunicationManager();

  const { data, pending, error } = useAsyncData("item-" + id, async () => {
    return await manager.getItemById(id);
  });

  return { data, pending, error };
}