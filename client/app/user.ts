import { Dataitem } from './dataitem';

export class User {
	id: number;
	username: string;
	dataitems: Dataitem[];

	constructor(id: number, username: string, dataitems: Dataitem[]) {
		this.id = id;
		this.username = username;
		this.dataitems = dataitems;
	}
}