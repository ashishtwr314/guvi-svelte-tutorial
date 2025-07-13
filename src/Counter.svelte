<script>
  import Buttons from "./Buttons.svelte";
  import { count } from "./stores/counterstore";
</script>

<h1>{$count}</h1>
<Buttons />
