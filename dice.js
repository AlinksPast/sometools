function rollDie(sides) {
    const result = Math.floor(Math.random() * sides) + 1;
    displayResult(`d${sides}: ${result}`);
}

function roll2d20() {
    const result1 = Math.floor(Math.random() * 20) + 1;
    const result2 = Math.floor(Math.random() * 20) + 1;
    displayResult(`2d20: ${result1}, ${result2}`);
}

function displayResult(resultText) {
    const resultsContainer = document.getElementById('results');
    const rollHistoryRadio = document.querySelector('input[name="roll-history"]:checked');
    const maxRollsToRemember = parseInt(rollHistoryRadio.value);
  
    // Remove the oldest roll results if the number of rolls exceeds maxRollsToRemember
    while (resultsContainer.children.length >= maxRollsToRemember) {
      resultsContainer.removeChild(resultsContainer.children[0]);
    }
  
    const resultElement = document.createElement('p');
    resultElement.textContent = resultText;
    resultsContainer.appendChild(resultElement);
  }
  

function clearResults() {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear the roll history
}

function rollWithModifier() {
    const modifier = parseInt(document.getElementById('modifier').value, 10);

    if (isNaN(modifier)) {
        alert('Please enter a valid modifier.');
        return;
    }

    const result = Math.floor(Math.random() * 20) + 1;
    const totalResult = result + modifier;
    displayResult(`d20 with Modifier (+${modifier}): ${totalResult}`);
}
