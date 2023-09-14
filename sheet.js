const skills = {
    'Athletics': 'strength',
    'Acrobatics': 'dexterity',
    'Stealth': 'dexterity',
    'Constitution Save': 'constitution',
    'Arcana': 'intelligence',
    'History': 'intelligence',
    'Nature': 'intelligence',
    'Religion': 'intelligence',
    'Insight': 'wisdom',
    'Perception': 'wisdom',
    'Survival': 'wisdom',
    'Animal Handling': 'wisdom',
    'Deception': 'charisma',
    'Intimidation': 'charisma',
    'Performance': 'charisma',
    'Persuasion': 'charisma',
};

// Function to calculate modifiers and skills
function calculateModifiersAndSkills() {
    const stats = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];

    for (const stat of stats) {
        const abilityScore = parseInt(document.getElementById(stat).value);
        if (!isNaN(abilityScore)) {
            const modifier = Math.floor((abilityScore - 10) / 2);

            // Update modifier and skill for the current stat
            document.getElementById(`${stat}-modifier`).textContent = `Modifier: ${modifier}`;
            for (const skill in skills) {
                if (skills[skill] === stat) {
                    document.getElementById(`${stat}-skill`).textContent = `${skill}: ${modifier}`;
                }
            }
        }
    }
}

// Add event listeners to input fields to trigger updates
const inputFields = document.querySelectorAll('input[type="number"]');
inputFields.forEach(inputField => {
    inputField.addEventListener('input', calculateModifiersAndSkills);
});

// Initial calculation on page load
calculateModifiersAndSkills();
