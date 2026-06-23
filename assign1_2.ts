export{}
let bookTitle: string = "อ่านชะตาวันสิ้นโลก";
let isbn: string = "978-616-06-0000-0";
let price: number = 550;
let isAvailable: boolean = true;

let bookSummary: [string,number] = [bookTitle,price];
let discountedPrice: number = price * (1 - 0.15);
let isPrmium: boolean = price > 500;

let canDisplay: boolean = isPrmium && isAvailable;

console.log(`-----------------------------`);
console.log(`ชื่อหนังสือ: ${bookSummary[0]}`);
console.log(`รหัสISBN: ${isbn}`);
console.log(`ราคาปกติ: ${price} บาท`);
console.log(`ราคาส่วนลด: (15%): ${discountedPrice.toFixed(2)} บาท`);
console.log(`ประเภทหนังสือ: Primium: ${isPrmium ? "ใช่" : "ไม่ใช่"}`);
console.log(`สถานะการยืม: ${isAvailable ? "ว่าง" : "ถูกยืม"}`);
console.log(`------------------------------`);

if (canDisplay) {
  console.log(`สถานะจัดแสดง: "สามารถจัดแสดงที่หน้าตู้โชว์ได้"`);
} else { 
  console.log(`สถานะจัดแสดง: "ไม่สามารถจัดแสดงที่หน้าตู้โชว์ได้"`);
}
console.log(`------------------------------`);