export class Dataitem {
	id: number;
	user_id: number;
	experimentgroup_id: number;
	startDatetime: any;
	endDatetime: any;
	value: number;
	key: string;
	dataitems: Dataitem[];

	constructor(id: number, experimentgroup_id: number, key: string, value: number, startDatetime: any, endDatetime:any, dataitems: Dataitem[], user_id: number) {
		this.id = id;
		this.experimentgroup_id = experimentgroup_id;
		this.user_id = user_id;
		this.startDatetime = startDatetime;
		this.endDatetime = endDatetime;
		this.key = key;
		this.value = value;
	}
}