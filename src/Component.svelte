<script>
  import { onMount, onDestroy tick } from "svelte";

  let count = 0;

  onDestroy(() => {
    console.log("Destroy")
  })

  onMount(() => {
    const input = document.getElementById("input");
    // Input is available
    console.log(input);
  });

  const input = document.getElementById("input");
  // Input is NOT available
  console.log(input);

  function increment() {
    count += 1;
    await tick(); // If not available, theres a value mismatch, because the next line will run immediately before the state update happens
    const h1 = document.getElementById("h1");
    console.log(h1.textContent);
  }
</script>

<h1>Component</h1>
<h1 id="h1">{count}</h1>
<button on:click={increment}></button>
<input id="input" />
