let Gross: number = 50000;
let Rate: number = 7;
let Paid: number = 0;
let Net: number = 0;

Paid = (Gross*Rate)/100;
Net = Gross-Paid;
console.log("---Tax Calulation Report---");
console.log("Gross Income %d",Gross);
console.log("Tax Rate %d%",Rate );
console.log("Tax Paid %d",Paid );
console.log("Net Income after Tex: %d",Net);
console.log("---------------------------");