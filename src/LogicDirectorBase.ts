import RuleCheckerBase from "./rules/RuleCheckerBase";
import BoardManagerBase from "./mechanics/BoardManagerBase";

export default abstract class LogicDirectorBase {
	constructor(
		private ruleChecker: RuleCheckerBase,
		private boardManager: BoardManagerBase
	) {}
	public abstract advance(): void;
}
