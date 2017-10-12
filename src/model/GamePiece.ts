import GameBlock from "./GameBlock";

export default class GamePiece {
	constructor(
		public color: number,
		public xOrientation: number, // Orientation: (turns) * 0.25
		public yOrientation: number,
		public zOrientation: number,
		public blocks: GameBlock
	) {}
}
