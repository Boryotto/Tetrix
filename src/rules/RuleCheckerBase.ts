import Board from "../model/Board";

export default abstract class RuleCheckerBase {
	constructor(private board: Board) {}

	public abstract isGameOver(): boolean;
	public abstract getRowsToDelete(): number[];
	public abstract getPlanesToDelete(): number[];
}
