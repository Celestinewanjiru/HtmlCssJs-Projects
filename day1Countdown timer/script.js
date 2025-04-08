// Set countdown target dates for each episode
// Each target date is in the format: 'YYYY-MM-DD HH:MM:SS'
const episodeDates = [
  "2025-04-20 12:00:00", // Episode 1
  "2025-04-22 15:00:00", // Episode 2
  "2025-04-25 09:00:00", // Episode 3
  "2025-04-30 18:00:00", // Episode 4
  "2025-05-02 20:00:00", // Episode 5
  "2025-05-05 10:00:00", // Episode 6
  "2025-05-07 17:00:00", // Episode 7
  "2025-05-10 19:00:00", // Episode 8
  "2025-05-12 14:00:00", // Episode 9
  "2025-05-15 08:00:00", // Episode 10
];

// Function to calculate the remaining time
function updateTimer(episodeIndex, targetDate) {
  const timerElement = document.getElementById("timer" + (episodeIndex + 1));
  const countDownDate = new Date(targetDate).getTime();

  // Update every second
  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance <= 0) {
      clearInterval(interval);
      timerElement.innerHTML = "Time's Up!";
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  }, 1000);
}

// Start countdown for all episodes
episodeDates.forEach((date, index) => {
  updateTimer(index, date);
});
