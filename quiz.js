function checkAnswer() {
    // Identify the correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected radio input
    const selected = document.querySelector('input[name="quiz"]:checked');

    // If a radio is selected, get its value; otherwise userAnswer will be undefined
    const userAnswer = selected ? selected.value : undefined;

    // Compare and show feedback
    const feedbackEl = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        feedbackEl.textContent = 'Correct! Well done.';
    } else {
        feedbackEl.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
