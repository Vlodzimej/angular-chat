class Group {
	constructor(
		public id: String,
		public numb: String,
		public name: String,
		public date: String,
		public time: String,
		public amountMsg: Number,
		public amountWarn: Number
	) {}
}

export class GroupMaker {
	static create(group: IGroup) {
		return new Group(
			group.id,
			group.numb,
			group.name,
			group.date,
			group.time,
			group.amountMsg,
			group.amountWarn
		);
	}
}
export interface IGroup {
	/**Идентификатор */
	id: String;

	/**Название */
	name: String;

	/**Номер */
	numb: String;

	/**Дата создания */
	date: String;

	/**Время создания */
	time: String;

	/**Кол-во сообщений */
	amountMsg: Number;

	/**Кол-во важных сообщений */
	amountWarn: Number;
}
