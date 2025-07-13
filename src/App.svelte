<script>
  import HabitSection from "./components/HabitSection.svelte";
  import SummarySection from "./components/SummarySection.svelte";
  let currentView = "habits";
</script>

<div class="app">
  <header class="navbar">
    <div class="nav-container">
      <div class="logo">
        <span class="logo-icon">📊</span>
        <span class="logo-text">HabitTracker</span>
      </div>

      <nav class="nav-buttons">
        <button
          on:click={() => {
            currentView = "habits";
          }}
          class:active={currentView === "habits"}
          class="nav-btn">Habits</button
        >

        <button
          on:click={() => {
            currentView = "summary";
          }}
          class:active={currentView === "summary"}
          class="nav-btn">Summary</button
        >
      </nav>
    </div>
  </header>

  <main class="main-content">
    {#if currentView == "habits"}
      <HabitSection />
    {:else if currentView === "summary"}
      <SummarySection />
    {:else}
      <h1>404 Not Found</h1>
    {/if}
  </main>
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      sans-serif;
    background-color: #f8f9fa;
    color: #333;
  }

  :global(*) {
    box-sizing: border-box;
  }

  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .navbar {
    background: white;
    border-bottom: 1px solid #e0e0e0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .logo-icon {
    font-size: 24px;
  }

  .logo-text {
    font-size: 20px;
    font-weight: 700;
    color: #333;
  }

  .nav-buttons {
    display: flex;
    gap: 8px;
  }

  .nav-btn {
    padding: 8px 16px;
    border: none;
    background: transparent;
    color: #666;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.2s ease;
  }

  .nav-btn:hover {
    background: #f5f5f5;
    color: #333;
  }

  .nav-btn.active {
    background: #4caf50;
    color: white;
  }

  .nav-btn.active:hover {
    background: #45a049;
  }

  .main-content {
    flex: 1;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }

  @media (max-width: 768px) {
    .nav-container {
      padding: 0 16px;
    }

    .logo-text {
      display: none;
    }

    .nav-btn {
      font-size: 14px;
      padding: 6px 12px;
    }
  }
</style>
