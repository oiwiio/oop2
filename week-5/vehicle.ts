export abstract class Vehicle {
    readonly id: number;
    protected year: number;

    constructor(
        public brand: string,
        year: number
    ){
        this.id = Date.now() + Math.floor(Math.random() * 1000);
        this.year = year;
    }

    abstract getInfo(): string;

    startEngine(): void {
        console.log("двигатель запущен");
    }
}