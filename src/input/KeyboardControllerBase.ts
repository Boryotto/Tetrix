export default abstract class KeyboardControllerBase {
	public abstract onKeyClick(eventHandler: (keyNumber: number) => void): void;
}
