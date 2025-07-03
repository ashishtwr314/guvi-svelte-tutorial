<script>
  let count = 0;
  function increment() {
    count = count + 1;
  }
  function decrement() {
    count = count - 1;
  }
</script>

<h1>{count}</h1>
<button on:click={increment}>Increment +</button>
<button on:click={decrement}>Decrement -</button>

<style>
</style>
