<script>
  import { habits } from "../store/habits-store";

  export let toggleFormVisibility;
  let inputValue = "";

  function handleFormSubmit(event) {
    habits.update((prevHabits) => {
      return [
        ...prevHabits,
        {
          id: prevHabits.length + 1,
          habitName: inputValue,
          days: {
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false,
          },
        },
      ];
    });

    localStorage.setItem("habits", JSON.stringify($habits));

    toggleFormVisibility();
  }
</script>

<div class="form-overlay">
  <div class="form-container">
    <h3>Add New Habit</h3>
    <form on:submit|preventDefault={handleFormSubmit}>
      <input
        bind:value={inputValue}
        type="text"
        name="habitname"
        placeholder="Enter habit name"
        class="habit-input"
      />
      <div class="form-buttons">
        <button type="submit" class="btn btn-primary">Add Habit</button>
        <button
          on:click={toggleFormVisibility}
          type="button"
          class="btn btn-secondary">Cancel</button
        >
      </div>
    </form>
  </div>
</div>

<style>
  .form-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .form-container {
    background: white;
    padding: 24px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    width: 90%;
    max-width: 400px;
  }

  .form-container h3 {
    margin: 0 0 16px 0;
    color: #333;
  }

  .habit-input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 16px;
    box-sizing: border-box;
  }

  .habit-input:focus {
    outline: none;
    border-color: #4caf50;
  }

  .form-buttons {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
  }

  .btn {
    padding: 8px 16px;
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

  .btn-secondary {
    background: #f5f5f5;
    color: #333;
  }

  .btn-secondary:hover {
    background: #e0e0e0;
  }
</style>
