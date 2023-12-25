interface TotalPrice{
    price: number
    discount: number
    isInstallment: boolean
    months: number
}

const totalPrice = ({ price, discount, isInstallment, months }: TotalPrice): number => {
    const priceWithoutInstallment: number = price / 100 * (100 - discount)
    
    return isInstallment ? priceWithoutInstallment / months : priceWithoutInstallment;
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250