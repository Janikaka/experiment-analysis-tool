import { Configuration } from './configuration';
import { User } from './user';

export class Experimentgroup {
	id: number;
	name: string;
	configurations: Configuration[];
	totalDataitems: number;
	users: User[];
	experiment_id: number;


	constructor(id: number, experiment_id: number, name: string, users: User[], configurations: Configuration[], totalDataitems: number) {
		this.id = id;
		this.name = name;
		this.configurations = configurations;
		this.totalDataitems = totalDataitems;
		this.users = users;
		this.experiment_id = experiment_id;
	}
}