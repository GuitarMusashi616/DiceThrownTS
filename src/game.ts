import { Configuration } from './configuration';

let config = new Configuration();

function wireDie(id: string, config: Configuration) {
    var button = document.getElementById(id);
    if (button) {
        button.addEventListener("click", () => config.diceView.click(id));
    }
}

function wireRoll(id: string, config: Configuration) {
    // the roll button
    var roll = document.getElementById(id)
    if (roll) {
        roll.addEventListener("click", () => config.rollButton.click(config.diceView.getToggledDice()))
    }
}

function wireVoid(id: string, config: Configuration) {
    // the roll button
    var button = document.getElementById(id)
    if (button) {
        button.addEventListener("click", () => config.endButton.click())
    }
}

function wireAbilitySelect(id: string, num: number, config: Configuration) {
    var button = document.getElementById(id)
    if (button) {
        button.addEventListener("click", () => config.abilitySelector.select(num));
    }
}

window.onload = () => {
    config.startup();
    wireDie('dice1', config);
    wireDie('dice2', config);
    wireDie('dice3', config);
    wireDie('dice4', config);
    wireDie('dice5', config);
    wireDie('dice6', config);
    wireRoll('rollButton', config);
    wireVoid('endButton', config);
    wireAbilitySelect('ability1', 0, config);
    wireAbilitySelect('ability2', 1, config);
    wireAbilitySelect('ability3', 2, config);
    wireAbilitySelect('ability4', 3, config);
    wireAbilitySelect('ability5', 4, config);
    wireAbilitySelect('ability6', 5, config);
    wireAbilitySelect('ability7', 6, config);
    wireAbilitySelect('ability8', 7, config);
}
