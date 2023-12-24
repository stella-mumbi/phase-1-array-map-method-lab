const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  // ... rest of the tutorial titles
];

function titleCased() {
  return tutorials.map((tutorial) => {
    const words = tutorial.split(' '); // Split the title into individual words
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    ); // Capitalize the first letter of each word
    return capitalizedWords.join(' '); // Join the words back into a title
  });
}

const titleCasedTutorials = titleCased();
console.log(titleCasedTutorials);
