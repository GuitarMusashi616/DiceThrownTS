import { Card } from "../model/Card";

export interface ICardRegistry {
    getCards(): Card[];
}