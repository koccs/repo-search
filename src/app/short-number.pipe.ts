import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "shortNumber"
})
export class ShortNumberPipe implements PipeTransform {
  transform(value: number): string {
    let result = value.toString();
    if (value >= 1000) {
      result = (value / 1000).toFixed(1) + "K";
    }
    return result;
  }
}
