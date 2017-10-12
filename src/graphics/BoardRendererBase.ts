import Board from "../model/Board";

export default abstract class BoardRendererBase {
	public abstract render(board: Board): void;
}
