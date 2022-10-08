import { TeamRole } from "../enums/team-role";
import { IPerson } from "./iperson";
import { ITeam } from "./iteam";

export interface ITeamMember {
    id: number;
    person: IPerson;
    team: ITeam;
    role: TeamRole
}
