export default class GameBlock {
	constructor(
		public front: GameBlock,
		public back: GameBlock,
		public left: GameBlock,
		public right: GameBlock,
		public top: GameBlock,
		public bottom: GameBlock
	) {}
}
