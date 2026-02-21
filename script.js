let totalJob = document.getElementById('totalJob');
let allJob = document.getElementById('AllJob');
let Interview =document.getElementById('Interview');
let Rejected=document.getElementById('Rejected');
let alljob 

let getTotalJob=document.getElementById('jobs');
function calculateJob(){
    totalJob.innerText = getTotalJob.children.length;
    allJob.innerText = getTotalJob.children.length;
}
calculateJob()