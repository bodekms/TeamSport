import { ILeague } from "./ileague";

export interface IOrganization {
    id: number;
    name: string;
    leagues?: ILeague[] | null;
}
