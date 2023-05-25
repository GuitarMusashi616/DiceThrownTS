export enum CardType {
    /**
     * Can only be played during your own Main Phase (blue)
     */
    HeroUpgrade,
    /**
     * Can only be played during your own Main Phase (blue)
     */
    MainPhaseAction,
    /**
     * Can be played during any player's Offensive / Targeting / Defensive Roll Phases (orange)
     */
    RollPhaseAction,
    AttackModifier,
    /**
     * Can be played at any time. These cards resolve immediately and can't be interrupted (red)
     */
    InstantAction,
}