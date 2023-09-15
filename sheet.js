// Function to calculate modifier
function calculateModifier(abilityScore) {
    return Math.floor((abilityScore - 10) / 2);
}

// Function to update the modifiers for a specific element
function updateModifierElement(elementId, abilityId) {
    const inputElement = document.getElementById(abilityId);
    const modifierElement = document.getElementById(elementId);
    const abilityScore = parseInt(inputElement.value);
    modifierElement.textContent = `${modifierElement.textContent.split(":")[0]}: ${calculateModifier(abilityScore)}`;
}

// Function to update all modifiers
function updateModifiers() {
    // Update ability score modifiers
    updateModifierElement("strength-modifier", "strength");
    updateModifierElement("dexterity-modifier", "dexterity");
    updateModifierElement("constitution-modifier", "constitution");
    updateModifierElement("intelligence-modifier", "intelligence");
    updateModifierElement("wisdom-modifier", "wisdom");
    updateModifierElement("charisma-modifier", "charisma");

    // Update skill modifiers
    const skillIds = [
        "Athletics-skill", "Acrobatics-skill", "Stealth-skill", "Arcana-skill",
        "History-skill", "Nature-skill", "Religion-skill", "Insight-skill",
        "Perception-skill", "Survival-skill", "Animal-Handling-skill",
        "Deception-skill", "Intimidation-skill", "Performance-skill", "Persuasion-skill"
    ];

    skillIds.forEach((skillId) => {
        const ability = skillId.split("-")[0]; // Extract the ability name
        updateModifierElement(skillId, ability.toLowerCase());
    });

    // Update saving throw modifiers
    const savingThrowIds = [
        "Strength-Save-skill", "Dexterity-Save-skill", "Constitution-Save-skill",
        "Intelligence-Save-skill", "Wisdom-Save-skill", "Charisma-Save-skill"
    ];

    savingThrowIds.forEach((savingThrowId) => {
        const ability = savingThrowId.split("-")[0]; // Extract the ability name
        updateModifierElement(savingThrowId, ability.toLowerCase());
    });
}

// Add event listeners to input elements to update modifiers
const abilityIds = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];
abilityIds.forEach((abilityId) => {
    const inputElement = document.getElementById(abilityId);
    inputElement.addEventListener("input", updateModifiers);
});

// Initial update of modifiers
updateModifiers();
