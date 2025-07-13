<script>
  export let habit;
  let daysArray = Object.keys(habit.days);
  function updateLocalStroage(updatedHabit) {
    const getallhabitsfrommls = localStorage.getItem("habits");
    const allhabits = JSON.parse(getallhabitsfrommls);

    const modifiedHabits = allhabits.map((_habit) => {
      if (_habit.id == updatedHabit.id) {
        return { ..._habit, days: updatedHabit.days };
      }
      return _habit;
    });

    localStorage.setItem("habits", JSON.stringify(modifiedHabits));
  }
</script>

<div class="habit-card">
  <h3 class="habit-name">{habit.habitName}</h3>
  <div class="days-container">
    {#each daysArray as day}
      <div class="day-item">
        <label for={day} class="day-label">{day.slice(0, 3)}</label>
        <input
          bind:checked={habit.days[day]}
          name={day}
          type="checkbox"
          class="day-checkbox"
          on:change={() => updateLocalStroage(habit)}
        />
      </div>
    {/each}
  </div>
</div>

<style>
  .habit-card {
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .habit-name {
    margin: 0 0 16px 0;
    color: #333;
    font-size: 18px;
    font-weight: 600;
  }

  .days-container {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .day-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .day-label {
    font-size: 12px;
    color: #666;
    font-weight: 500;
    text-transform: capitalize;
  }

  .day-checkbox {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  .day-checkbox:checked {
    accent-color: #4caf50;
  }
</style>
