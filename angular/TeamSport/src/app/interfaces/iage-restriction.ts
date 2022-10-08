import { IRestriction } from "./irestriction";

export interface IAgeRestriction extends IRestriction {
    maxAge?: number;
    minAge?: number;
    asOf: Date;
}
