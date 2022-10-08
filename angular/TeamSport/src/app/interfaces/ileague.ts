import { IRestriction } from "./irestriction";
import { ITeam } from "./iteam";

export interface ILeague {
    id: number;
    name: string;
    restrictions?: IRestriction[];
    teams?: ITeam[];
}
