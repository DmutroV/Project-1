class sweet_water {
    constructor() {
        this.flavors = ['watermelon', 'apple', 'mint'];
        this.inventory = {
            watermelon: 10,
            apple: 5,
            mint: 3
    };
}
async order(flavor, sum) {
    try {
        const stock = await this.checkStock(flavor);
        if (stock < sum) {
            throw new Error(`є тільки ${stock} ${flavor} солодкої води.`);
        }
        await this.updateInventory(flavor, sum);
        const totalPrice = this.calculatePrice(flavor, sum);
        return `ваше замовлення ${sum} ${flavor} солодкої води готово. Вартість: $${totalPrice}.`;
    }
    catch (error) {
        return error.message;
    }
}
    async checkStock(flavor) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const stock = this.inventory[flavor];
                if (stock) {
                    resolve(stock);
                } 
                else {
                    reject(new Error(`немає стільки ${flavor} солодкої води.`));}
            }, 1000);
        });
    }
    async updateInventory(flavor, sum) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.inventory[flavor] -= sum;
                resolve();
            }, 2000);
        });
    }
    calculatePrice(flavor, sum) {
        const pricePerScoop = 2.5;
        return pricePerScoop * sum;
    }
}
const shop = new sweet_water();
    (async () => {
        console.log(await shop.order('watermelon', 2));
        console.log(await shop.order('apple', 3));
        console.log(await shop.order('mint', 5));
    })();