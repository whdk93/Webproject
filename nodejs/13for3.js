const scores=[96,78,74,86,95];
 let sum=0;
/* for(let i=0; i<scores.length; i++) {
    sum+=scores[i];
} */
//for of 반복문
// for(score of scores) {
//     sum+=score;
// }
//forEach()와 화살표 함수
scores.forEach(score => sum+=score); // () 생략 가능
console.log('점수의 총합= ',sum);