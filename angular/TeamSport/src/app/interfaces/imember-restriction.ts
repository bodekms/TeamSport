import { TeamRole } from "../enums/team-role";
import { IRestriction } from "./irestriction";

export interface IMemberRestriction<T extends TeamRole> extends IRestriction {
    maxNum?: number;
    minNum?: number;
}
