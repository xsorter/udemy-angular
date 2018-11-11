let count = 0;
export class CounterService {
  doCount(){
    count++;
    console.log(`Action was taken ${count} times`);
  }
}