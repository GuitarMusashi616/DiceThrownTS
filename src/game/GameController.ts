import { GameData } from "../model/GameData";
import { SetupPhase } from "../phases/SetupPhase";

class GameController implements IGameController {
    private model: IGameData;
    private phase: IPhase;

    constructor(model: GameData) {
        this.model = model;
        this.phase = new SetupPhase(this);
    }

    getModel(): IGameData {
        return this.model;
    }

    handle(event: EventType): void {

    }


}