<script>
  import Counter from "./Counter.svelte";

  let count = 0;
  function inc() {
    count = count + 1;
  }
  function dec() {
    count = count - 1;
  }
</script>

<Counter {count} {inc} {dec} />

<style>
</style>
