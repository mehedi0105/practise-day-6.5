let marks = 95;

switch(true){
    case marks>0 && marks <33:
        console.log("Fail");
        break;
    case marks>=33 && marks <40:
        console.log("Grade D");
        break;
    case marks>=40 && marks <50:
        console.log("Grade C");
        break;
    case marks>=50 && marks <60:
        console.log("Grade B");
        break;
    case marks>=60 && marks <70:
        console.log("Grade A-");
        break;
    case marks>=70 && marks <80:
        console.log("Grade A");
        break;
    case marks>=80 && marks <1000:
        console.log("Grade A+");
        break;
    default:
        console.log("Invalid marks");
        break
}