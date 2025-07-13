<script>
  export let habit;

  function getNoOfDaysCompleted(days) {
    return Object.values(days).filter((val) => val === true).length;
  }

  function getPercentage(days) {
    const noOfDaysCompleted = getNoOfDaysCompleted(days);
    return Math.round((noOfDaysCompleted / 7) * 100);
  }
</script>

<div class="progress-item">
  <div class="progress-info">
    <span class="habit-name">{habit.habitName}</span>
    <span class="progress-text">{getNoOfDaysCompleted(habit.days)}/7</span>
  </div>

  <div class="progress-bar">
    <div
      class="progress-fill"
      style="width: {getPercentage(habit.days)}%;"
    ></div>
  </div>
  <span class="percentage">{getPercentage(habit.days)}%<span> </span></span>
</div>

<style>
  .progress-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
  }

  .progress-info {
    flex: 1;
    min-width: 0;
  }

  .habit-name {
    display: block;
    font-weight: 500;
    color: #333;
    margin-bottom: 4px;
  }

  .progress-text {
    font-size: 12px;
    color: #666;
  }

  .progress-bar {
    flex: 1;
    height: 8px;
    background: #f0f0f0;
    border-radius: 4px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: #4caf50;
    transition: width 0.3s ease;
  }

  .percentage {
    font-size: 12px;
    color: #666;
    font-weight: 500;
    min-width: 35px;
    text-align: right;
  }
</style>
