<script>
  import ProgressCard from "./ProgressCard.svelte";
  import { habits, topPerformers, needsFocus } from "../store/habits-store";
</script>

<div class="summary-view">
  <h2>Progress Summary</h2>

  <div class="summary-section">
    <h3>All habits porgress</h3>
    <div class="progress-list">
      {#each $habits as habit}
        <ProgressCard {habit} />
      {/each}
    </div>
  </div>

  <div class="summary-section">
    <h3>Top Performers</h3>
    {#each $topPerformers as topPerformer}
      <div class="habit-list">
        <div class="habit-badge success">{topPerformer.habitName}</div>
      </div>
    {/each}
  </div>

  <div class="summary-section">
    <h3>Needs Focus</h3>
    {#each $needsFocus as focus}
      <div class="habit-list">
        <div class="habit-badge warning">{focus.habitName}</div>
      </div>
    {/each}
  </div>
</div>

<style>
  .summary-view {
    padding: 20px;
    max-width: 800px;
  }

  .summary-view h2 {
    margin: 0 0 24px 0;
    color: #333;
    font-size: 24px;
  }

  .summary-section {
    margin-bottom: 32px;
  }

  .summary-section h3 {
    margin: 0 0 16px 0;
    color: #333;
    font-size: 18px;
    font-weight: 600;
  }

  .progress-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .habit-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .habit-badge {
    padding: 8px 12px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
  }

  .habit-badge.success {
    background: #e8f5e8;
    color: #2e7d32;
    border: 1px solid #c8e6c9;
  }

  .habit-badge.warning {
    background: #fff3e0;
    color: #f57c00;
    border: 1px solid #ffcc02;
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
