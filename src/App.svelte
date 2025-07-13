<script>
  import Counter from "./Counter.svelte";
  import { count, countReadOnly, countDerived } from "./stores/counterstore";

  let selected;
  $: formFields =
    selected == "opt1"
      ? ["email", "password"]
      : ["username", "mobilenumber", "password"];
</script>

<select bind:value={selected} name="" id="">
  <option value="opt1">Opt 1</option>
  <option value="opt2">Opt 2</option>
</select>

<form>
  {#each formFields as formField}
    <input placeholder={formField} />
  {/each}
</form>

<button
  on:click={() => {
    count.update((c) => c + 1);
  }}
>
  Inc</button
>

<!-- <Counter /> -->

<style>
</style>
