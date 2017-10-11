abstract class BoardManagerBase {
	constructor(private board: Board) {}

	public abstract deleteRow(planeIndex: number, rowIndex: number): void;
	public abstract deletePlane(planeIndex: number): void;
	public abstract spawnPiece(): GamePiece;
	public abstract dropCurrentPiece(): void;
	public abstract lowerCurrentPiece(): void;
	public abstract rotateCurrentPiece(xRotations, yRotations, zRotations): void;
}
