export{};
let fname: string = "Narongsak";
let lname: string = "Sengsay";
let course: string[] = ["Database","Mawin","Web"];
let mark: number[]  = [80,76,65];
let pass: boolean = true;

console.log("Hello %s %s",fname,lname);
console.log("ลงทะเบียนเรียนวิชา",course);
console.log("ได้คะแนน",mark);
console.log("คุณสอบผ่าน",pass);

console.log ("คุณสอบได้ %d คะแนน วิชา %s",mark[0],course[0]);
let mark1: number = 75;
let mark2: number = 80;
let total: number=mark[0]+mark1+mark2;
let avg: number= total /3.0;
console.log("คะแนนรวม",total);
console.log("คะแนนเฉลี่ย",avg);