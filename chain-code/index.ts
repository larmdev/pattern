export abstract class Creator {
    public sayHello(): void {
        console.log('say hello')
    }
    public abstract sayWebsite(): void;
}


export class Sample extends Creator {
    sayWebsite(): void {
        console.log('say website')
    }
} 


const sample: Sample = new Sample();
sample.sayHello();
sample.sayWebsite();