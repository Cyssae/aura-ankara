

// Smooth scrolling (already partially handled by CSS html { scroll-behavior: smooth; } or manually below)
document.documentElement.style.scrollBehavior = 'smooth';

// Initialize features after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Countdown Timer logic for the events page
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');

    if (daysEl && hoursEl && minutesEl) {
        // Set target date 8 days from now just to show the timer running
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 8);
        targetDate.setHours(targetDate.getHours() + 14);
        targetDate.setMinutes(targetDate.getMinutes() + 42);

        function updateCountdown() {
            const now = new Date();
            const diff = targetDate - now;

            if (diff > 0) {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((diff / 1000 / 60) % 60);

                daysEl.textContent = String(days).padStart(2, '0');
                hoursEl.textContent = String(hours).padStart(2, '0');
                minutesEl.textContent = String(minutes).padStart(2, '0');
            }
        }
        
        // Initial call
        updateCountdown();
        // Update every 1 minute since seconds are not displayed
        setInterval(updateCountdown, 60000);
    }
});
