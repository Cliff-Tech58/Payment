// Function to simulate a loading spinner and check payment status
function startCheckPayment() {
  const userName = document.getElementById("userName").value.trim();
  const loadingSpinner = document.getElementById("loadingSpinner");
  const paymentStatus = document.getElementById("paymentStatus");
  const gameWeek = document.getElementById("gameWeek");
  const points = document.getElementById("points");

  // Reset payment status, game week, and points, then show loading spinner
  paymentStatus.textContent = "";
  gameWeek.textContent = "";
  points.textContent = "";
  loadingSpinner.style.display = "block";

  // Simulate a delay (e.g., 2 seconds) before checking payment status
  setTimeout(() => {
    const participant = participants.find(p => p.name.toLowerCase() === userName.toLowerCase());
    if (participant) {
      if (participant.hasPaid) {
        paymentStatus.textContent = "In the competition gwk 26";
        paymentStatus.style.color = "green";
      } else {
        paymentStatus.textContent = "Unpaid";
        paymentStatus.style.color = "red";
      }
      // Display the game week and points
      gameWeek.textContent = `Game Week: ${participant.gameWeek}`;
      points.textContent = `Points: ${participant.points}`;
    } else {
      paymentStatus.textContent = "Not a member";
      paymentStatus.style.color = "red";
    }

    // Hide loading spinner
    loadingSpinner.style.display = "none";
  }, 2000); // 2 seconds delay
}
