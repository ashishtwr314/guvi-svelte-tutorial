<script>
  import { count } from "./stores/counterstore";
</script>

<button
  on:click={() => {
    count.update((prevVal) => prevVal + 1);
  }}>Increment +</button
>
<button
  on:click={() => {
    count.update((prevVal) => prevVal - 1);
  }}>Decrement -</button
>
