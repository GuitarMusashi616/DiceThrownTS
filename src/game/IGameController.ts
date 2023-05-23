interface IGameController {
    getModel(): IGameData;

    handle(event: EventType): void;
}