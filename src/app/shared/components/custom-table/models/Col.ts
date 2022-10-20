import { Pipe } from "@angular/core";

export interface ICol {
  field: string;
  header: string;
  pipe?: Pipe;
  pipeArgs?: any[];
}
