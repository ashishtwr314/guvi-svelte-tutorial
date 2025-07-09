<script>
  import { onMount } from "svelte";

  let userLoggedIn = false;

  let list = ["listitem1", "listitem2", "listitem3", "listitem4", "listitem5"];
  let blogPosts = [
    {
      title: "Weclome to post 1",
      description: "Lorem ipusim",
    },
    {
      title: "Weclome to post 2",
      description: "Lorem ipusim",
    },
  ];

  let blogPostsWithMarkup = [
    {
      title: "Weclome to post 1",
      description: "Lorem ipusim",
      markup:
        "<h4>Welcome to <span style='color:red'>Svelte in English</span></h4>",
    },
    {
      title: "Weclome to post 2",
      description: "Lorem ipusim",
      markup:
        "<h4>Welcome to <span style='color:red'>Svelte in English</span></h4>",
    },
  ];

  let blogPostsWithTimestamp = [
    {
      title: "Weclome to post 1",
      description: "Lorem ipusim",
      timestamp: "2025-07-09T11:59:41.417Z",
    },
    {
      title: "Weclome to post 2",
      description: "Lorem ipusim",
      timestamp: "2025-07-09T11:59:41.417Z",
    },
  ];

  let name = "sdkfjnsf";
  let checked = false;
  let inputReference;

  function someAction(node) {
    console.log(node.focus());
  }

  onMount(() => {});
</script>

{#if userLoggedIn}
  <p>User loggedIn</p>
{:else}
  <p>User NOT loggedIn</p>
{/if}

{#each list as listItem}
  <li>{listItem}</li>
{/each}

{#each blogPosts as post}
  <div>
    <h3>{post.title}</h3>
    <p>{post.description}</p>
  </div>
{/each}

{#each blogPostsWithMarkup as post}
  <div>
    <h3>{post.title}</h3>
    <p>{post.description}</p>
    <p>{@html post.markup}</p>
  </div>
{/each}

{#each blogPostsWithTimestamp as post}
  {@const timestampFormatted = new Date(post.timestamp).toLocaleDateString()}
  <div>
    <h3>{post.title}</h3>
    <p>{post.description}</p>
    <p>{timestampFormatted}</p>
  </div>
{/each}

<input bind:value={name} placeholder="Name" />
<h2>{name}</h2>

<input bind:checked type="checkbox" />
{checked}

<div>
  <input bind:this={inputReference} placeholder="Input" />
  <button
    on:click={() => {
      inputReference.style.height = "200px";
    }}>Focus</button
  >
</div>

<div class:green={userLoggedIn} class:red={!userLoggedIn} class="box"></div>
<br />
<br />
<br />

<div style:background-color={userLoggedIn ? "green" : "red"} class="box"></div>

<input placeholder="Autofocus" use:someAction />

<style>
  .red {
    background-color: red;
  }
  .green {
    background-color: green;
  }
  .box {
    height: 200px;
    width: 300px;
  }
</style>
