function lefthand() {
    console.log("왼손은 거들뿐");
}
// try{
//     lefthand();
// }catch(e) {
//     console.error(e);
// }finally {
//     console.log('끝!');
// }
try{
    righthand();
}catch(e) {
    console.error(e);
}finally {
    console.log('끝!');
}