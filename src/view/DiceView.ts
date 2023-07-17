import { BarbarianDiceValues } from "../barbarian/BarbarianDiceValues";
import { IGameController } from "../game/IGameController";
import { EventType } from "../subscribers/EventType";
import { IDiceView } from "./IDiceView";

const ID_INDEX_MAP: {[key: string]: number} = {
    'dice1': 0,
    'dice2': 1,
    'dice3': 2,
    'dice4': 3,
    'dice5': 4,
    'dice6': 5,
}


const NUM_AS_WORD_MAP: {[num: number]: string} = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
}
    
    

export class DiceView implements IDiceView {
    private controller: IGameController;
    private toggled: Array<boolean>;

    constructor(controller: IGameController) {
        this.controller = controller;
        this.toggled = [false, false, false, false, false, false];
    }

    toggleBorder(whichDie: string) {
        var element = document.getElementById(whichDie);
        var index = ID_INDEX_MAP[whichDie];
        if (element == null || index == undefined) {
            return;
        }

        if(element.style.border) {
            element.style.border = "";
            element.style.padding = "";
            element.style.borderRadius = "";
            this.toggled[index] = false;
        } else {
            element.style.border = "2px solid red";
            element.style.paddingBlock = "2px";
            element.style.paddingInline = "4px"
            element.style.borderRadius = "10px";
            this.toggled[index] = true;
        }
    }

    click(whichDie: string) {
        console.log("%s clicked", whichDie);
        this.toggleBorder(whichDie);
    }

    getToggledDice(): Array<boolean> {
        return this.toggled;
    }

    set(whichDie: string, num: number): void {
        let element = document.getElementById(whichDie);
        let asWord = NUM_AS_WORD_MAP[num];
        if (asWord == undefined || element == null) {
            return;
        }

        element.className = `fas fa-dice-${asWord}`
    }

    notify(eventType: EventType): void {
        if (eventType !== EventType.Roll ) {
            return;
        }
        const diceValues = this.controller.dice.getValues();
        const dice = new BarbarianDiceValues(diceValues);
        
        console.log(`dice has changed!\n${diceValues}`)
        console.log(dice.toString())

        for (let id in ID_INDEX_MAP) {
            let index = ID_INDEX_MAP[id];
            if (index == undefined) {
                continue;
            }
            let num = diceValues[index];
            if (num == undefined) {
                continue;
            }
            this.set(id, num);
        }
    }
}