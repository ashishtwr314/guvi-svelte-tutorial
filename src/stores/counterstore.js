import { derived, readable, writable } from "svelte/store";

export let count = writable(0);
export let countReadOnly = readable(0);
export let countDerived = derived(count, (prvCount) => {
  return prvCount * 2;
});
