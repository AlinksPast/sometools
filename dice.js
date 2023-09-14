// JavaScript code for rolling dice goes here
function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function highlightResult(result, isHigh) {
    const resultColor = isHigh ? 'green' : 'red';
    const formattedResult = `<span style="color: ${resultColor};">${result}</span>`;
    return formattedResult;
}

const diceButtons = document.querySelectorAll('.dice-button');
const resultDisplay = document.getElementById('result-display');
const historyList = document.getElementById('history-list');
const roll2d20Button = document.getElementById('roll-2d20-button');

const maxHistoryItems = 10;

diceButtons.forEach(button => {
    button.addEventListener('click', function () {
        const sides = parseInt(button.getAttribute('data-sides'));
        if (!isNaN(sides)) {
            const result = rollDice(sides);
            resultDisplay.innerHTML = `You rolled a D${sides} and got: ${result}`;

            const listItem = document.createElement('li');
            listItem.innerHTML = `D${sides}: ${result}`;

            if (historyList.children.length >= maxHistoryItems) {
                historyList.removeChild(historyList.children[0]);
            }

            historyList.appendChild(listItem);
        }
    });
});

roll2d20Button.addEventListener('click', function () {
    const roll1 = rollDice(20);
    const roll2 = rollDice(20);

    if (!isNaN(roll1) && !isNaN(roll2)) {
        const isRoll1High = roll1 > roll2;
        const highRoll = isRoll1High ? roll1 : roll2;
        const lowRoll = isRoll1High ? roll2 : roll1;

        const formattedHighRoll = highlightResult(highRoll, true);
        const formattedLowRoll = highlightResult(lowRoll, false);

        resultDisplay.innerHTML = `You rolled 2 D20s: ${formattedLowRoll} (Low) and ${formattedHighRoll} (High)`;

        const listItem1 = document.createElement('li');
        listItem1.innerHTML = `2 D20s: ${lowRoll} (Low) and ${highRoll} (High)`;

        if (historyList.children.length >= maxHistoryItems) {
            historyList.removeChild(historyList.children[0]);
        }

        historyList.appendChild(listItem1);
    }
});
