///Q1
// -1)

// function* createfib1(last)
// {
//     let num1=0,num2=1;
//     for(let i=0;i<last;i++)
//     {
//         let value=num1;
//         num1 =num2;
//         num2=value+num1;
//         yield value;
//     }
//     yield "end of iteration"
// }
// let it1=createfib1(7);
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());

//////////////////////
//-2)

function* createfib2(maximum)
{
    let num1=0,num2=1;
    let value=num1;
    while(value<maximum)
    {
        value=num1;
        num1 =num2;
        num2=value+num1;
        yield value;
    }
    yield "end of iteration"
}
let it2=createfib2(10);
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
