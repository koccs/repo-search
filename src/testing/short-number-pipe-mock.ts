import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "shortNumber" })
export class ShortNumberPipeMock implements PipeTransform {
  transform(value: number): number {
    return value;
  }
}
