<script>
  import { linear } from "svelte/easing";
  import { fade } from "svelte/transition";
  let isNotificationVisible = false;
</script>

<button
  on:click={() => {
    isNotificationVisible = true;
  }}>Show notification</button
>
<p transition:fade class:hidden={!isNotificationVisible}>Hello world</p>

<style>
  .hidden {
    display: none;
  }
</style>
