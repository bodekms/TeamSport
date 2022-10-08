import { EventType } from "../enums/event-type";

export interface IEvent {
    id: number;
    name: string;
    type: EventType;
}
