import { derived, writable } from "svelte/store";

export const habits = writable([
  {
    id: 1,
    habitName: "Drink 20l of water",
    days: {
      monday: true,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false,
    },
  },
]);

export const topPerformers = derived(habits, ($habits) => {
  return $habits.filter((habit) => {
    const noOfDaysCompleted = Object.values(habit.days).filter(
      (val) => val === true
    ).length;
    return noOfDaysCompleted > 5;
  });
});

export const needsFocus = derived(habits, ($habits) => {
  return $habits.filter((habit) => {
    const noOfDaysCompleted = Object.values(habit.days).filter(
      (val) => val === true
    ).length;
    return noOfDaysCompleted < 3;
  });
});
