export interface Beverage {
    brew(): void;
}

export class Cola implements Beverage {
    brew(): void {
        console.log('brew cola')
    }
}

export class Coffee implements Beverage {
    brew(): void {
        console.log('brew coffee')
    }
}

export class Barista {
    order(name: string): any {
        if (name === 'cola') return new Cola();
        else if (name === 'coffee') return new Coffee();
        return null
    }
}

const barista: Barista = new Barista();

const order1 = barista.order('coffee');
order1?.brew();

const order2 = barista.order('cola');
order2?.brew();

