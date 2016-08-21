import { Experiment } from './experiment';
import { Experimentgroup } from './experimentgroup';
import { User } from './user';
import { Dataitem } from './dataitem';

export class Result {
	experiment: Experiment;
	experimentgroups: Experimentgroup[];
	users: User[];
	dataitems: Dataitem[];


	constructor(experiment: Experiment, experimentgroups: Experimentgroup[], users: User[], dataitems: Dataitem[]) {
		this.experiment = experiment;
		this.experimentgroups = experimentgroups;
	}
}