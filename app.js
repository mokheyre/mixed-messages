const button = document.getElementById('click');
const textDisplay = document.getElementById('randomText');

// Array of quotes for generating
const motivational_quotes = [
  "Believe you can and you're halfway there.",
  "It always seems impossible until it's done.",
  "Don't count the days, make the days count.",
  "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And you are the guy who'll decide where to go.",
  "Take your own advice and you'll be where you want to be.",
  "The key is to keep company only with people who uplift you, whose presence calls forth your best."
];

button.addEventListener('click', () => {
  // Generate a random index between 0 and the length of the motivational_quotes array - 1
  const randomIndex = Math.floor(Math.random() * motivational_quotes.length);

  // Switch statement to handle different cases based on randomIndex
  switch (randomIndex) {
    case 0:
      textDisplay.textContent = motivational_quotes[0];
      break;
    case 1:
      textDisplay.textContent = motivational_quotes[1];
      break;
    case 2:
      textDisplay.textContent = motivational_quotes[2];
      break;
    case 3:
      textDisplay.textContent = motivational_quotes[3];
      break;
    case 4:
      textDisplay.textContent = motivational_quotes[4];
      break;
    case 5:
      textDisplay.textContent = motivational_quotes[5];
      break;
    default:
      textDisplay.textContent = "It's over";
  }

  // Log the chosen index and quote for debugging purposes (optional)
  console.log(`Text index: ${randomIndex}, Text: "${motivational_quotes[randomIndex]}"`);
});
