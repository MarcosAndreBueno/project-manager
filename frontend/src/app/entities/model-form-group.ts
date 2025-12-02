import { FormControl, FormGroup } from "@angular/forms";
import { User } from "./user";

// this types will become nested formGroup
type typesToBecomeFormGroup = User;

export type ModelFormGroup<T> = FormGroup<{
  [K in keyof T]: T[K] extends typesToBecomeFormGroup
    ? ModelFormGroup<T[K]>           // if extends create nested formGroup
    : FormControl<T[K] | null>;      // if don't extend create formControl
}>;