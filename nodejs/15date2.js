const today1=new Date();
console.log(today1.toLocaleDateString());

const getyymmdd = (date) => {
    const yyyy=date.getFullYear();
    const mm=date.getMonth() < 9 ? `0${date.getMonth()+1}` : $(date.getMonth()+1);
    const dd=date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(); 
    return `${yyyy}-${mm}-${dd}`;
}

const today2=getyymmdd(new Date());
const today3=getyymmdd(new Date(2023,5-1,5));
console.log(today2);
console.log(today3);