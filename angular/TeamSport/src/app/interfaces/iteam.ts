import { ITeamMember } from "./iteam-member";

export interface ITeam {
    id: number;
    name: string;
    members?: ITeamMember[];
}
