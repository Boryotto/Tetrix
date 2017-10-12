import GamePiece from "./GamePiece";

export default class Board {
	public contents: GamePiece[][][];

	constructor(
		public height: number,
		public width: number,
		public depth: number
	) {
		this.contents = new Array<GamePiece[][]>(height);
		for (let y = 0; y < height; y++) {
			let floor = new Array<GamePiece[]>(width);
			for (let x = 0; x < width; x++) {
				floor[x] = new Array<GamePiece>(depth);
			}
			this.contents[y] = floor;
		}
	}
}
