<script>
  import HabitCard from "./HabitCard.svelte";
  import HabitForm from "./HabitForm.svelte";
  import { habits } from "../store/habits-store";
  import { onMount } from "svelte";
  let addNewHabitFormVisible = false;
  function toggleFormVisibility() {
    addNewHabitFormVisible = !addNewHabitFormVisible;
  }
  onMount(() => {
    const habitsFromTheLS = localStorage.getItem("habits");
    if (habitsFromTheLS) {
      habits.set(JSON.parse(habitsFromTheLS));
    }
  });
</script>

<div class="habits-view">
  <div class="habits-header">
    <h2>Your Habits</h2>
    <button on:click={toggleFormVisibility} class="btn btn-primary"
      >+ New Habit</button
    >
  </div>

  <div class="habits-list">
    {#each $habits as habit}
      <HabitCard {habit} />
    {/each}
  </div>

  {#if addNewHabitFormVisible}
    <HabitForm {toggleFormVisibility} />
  {/if}
</div>

<style>
  .habits-view {
    padding: 20px;
  }

  .habits-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  .habits-header h2 {
    margin: 0;
    color: #333;
    font-size: 24px;
  }

  .btn {
    padding: 10px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
  }

  .btn-primary {
    background: #4caf50;
    color: white;
  }

  .btn-primary:hover {
    background: #45a049;
  }

  .habits-list {
    max-width: 800px;
  }

  .empty-state {
    text-align: center;
    padding: 40px;
    color: #666;
  }

  .empty-state p {
    margin: 0;
    font-size: 16px;
  }
</style>
