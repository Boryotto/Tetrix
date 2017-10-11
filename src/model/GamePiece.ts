abstract class GamePiece {
	constructor(
		public color: number,
		public xOrientation: number, // Orientation: (turns) * 0.25
		public yOrientation: number,
		public zOrientation: number
	) {}

	public abstract blocks: boolean[][]; // A 2x4 matrix of booleans that contains the piece
}