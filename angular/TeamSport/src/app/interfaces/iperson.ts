import { PersonType } from "../enums/person-role";

export interface IPerson {
    id: number;
    firstName: string;
    lastName: string;
    email?: string;
    type: PersonType;
}
