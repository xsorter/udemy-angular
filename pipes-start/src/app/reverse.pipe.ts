import { PipeTransform, Pipe } from "@angular/core";


@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: string){
    if(value === ''){
      return ''
    }else{
      return this.transform(value.substr(1)) + value.charAt(0);
    }
  }
}