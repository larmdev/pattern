
export class HelyBasilBuilder {

    meat: string;
    fishSauce: string;
    garlic: string;
    chili: string;

    constructor(meat: string) {
        this.meat = meat
        return this
    }

    FishSauce(fishSauce: string): HelyBasilBuilder {
        this.fishSauce = fishSauce;
        return this;
    }

    Garlic(garlic: string): HelyBasilBuilder {
        this.garlic = garlic;
        return this;
    }

    Chili(chili: string): HelyBasilBuilder {
        this.chili = chili;
        return this;
    }

    build(): HelyBasil {
        const helyBasil = new HelyBasil(this)
        return helyBasil
    }

}

export class HelyBasil {
    meat: string;
    fishSauce: string;
    garlic: string;
    chili: string;
    static HelyBasilBuilder: any;

    constructor(builder: HelyBasilBuilder) {
        this.meat = builder.meat;
        this.fishSauce = builder.fishSauce;
        this.garlic = builder.garlic;
        this.chili = builder.chili;
    }

    //ต้องมี getter แต่ไม่ต้องมี setter
    getMeat(): string {
        return this.meat;
    }
    getfishSauce(): string {
        return this.fishSauce;
    }
    getgarlic(): string {
        return this.garlic;
    }
    getchili(): string {
        return this.chili;
    }
    toString() {
        const order: string = "HolyBasil " + this.meat + ", fishSauce:" + this.fishSauce + ", garlic:" + this.garlic + ", chili:" + this.chili;
        return order;
    }


}


const dish1: HelyBasil = new HelyBasilBuilder("Pork")
    .FishSauce("นิดเดียว")
    .Garlic("เยอะๆ")
    .Chili("ไม่พริก")
    .build();

console.log(dish1)


const dish2: HelyBasil = new HelyBasilBuilder("cheken")
    .Chili("ไม่พริก")
    .build();

console.log(dish2)


