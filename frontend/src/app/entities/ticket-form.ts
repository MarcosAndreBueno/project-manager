import { FormControl, FormGroup } from "@angular/forms"
import { TicketStatusEnums } from "../enums/ticket-status";
import { User } from "./user";

export interface TicketForm {
    id: FormControl<number | null>;
    title: FormControl<string | null>;
    description: FormControl<string | null>;
    status: FormControl<TicketStatusEnums | null>;
    createdBy: FormGroup<{
        id: FormControl<number | null>;
        name: FormControl<string | null>;
    }>
    createdIn: FormControl<Date | null>;
    childTicketsId: FormControl<number[] | null>;
}