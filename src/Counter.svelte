<script>
  import Buttons from "./Buttons.svelte";
  export let count;
  export let inc;
  export let dec;
</script>

<h1>{count}</h1>
<Buttons {inc} {dec} />
