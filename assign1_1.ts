export {};

let productName: string = "กระเป๋า";
let pricePerUnit: number= 600;
let quantity: number = 3;
let isMember: boolean = false;

let totalPrice: number = pricePerUnit * quantity;
let hasDiscount: boolean = false;
let discount: number = 0;

if (totalPrice > 1000  || isMember ){
    hasDiscount = true;
    discount = totalPrice * 0.1;

}

const netPrice: number = totalPrice - discount;

    console.log("------------------------------");
    console.log("สินค้าของคุณคือ ${productName} (จำนวน ${quantity} ชิ้น)");
    console.log("ราคาต่อหน่วยคือ ${pricePerUnit} บาท");
    console.log("ราคารวมทั้งหมด ${totalPrice} บาท");
    console.log("ระบุว่าได้รับส่วนลดหรือไม่ ${hasDiscount}");
    console.log("ราคาสุทธิหลังหักส่วนลดคือ ${netPrice} บาท");
    console.log("------------------------------");