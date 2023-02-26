/* 커링(curring) : 여러 개의 파라미터(매개변수)를 갖는 함수가 있을 때 그 중 일부의 파라미터만 필요로 하는 함수를 만드는 기법 */
const add = x => y => x + y;
const add10 = add(10); // const add10 = y => 10 + y;
console.log(add10(20));  
console.log(add(10)(20));
/* 커링은 파라미터를 여러 개 받는 함수를 분리해서 파라미터로 값이 모두 들어오면 값이 반환되고 부족하게 들어오면 함수를 반환하는 기법 */
const coffeeMachine = liquid => espresso => `${espresso} + ${liquid}`;
const americanoMachine = coffeeMachine('water');
const latteMachine = coffeeMachine('milk');
const americano = americanoMachine('coffee bean');
const latte = latteMachine('coffee bean');
console.log(americano);
console.log(latte);