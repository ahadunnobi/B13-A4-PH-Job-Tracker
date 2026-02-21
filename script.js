let interviewList = [];
let rejectedList = [];

let totalJob = document.getElementById('totalJob');
let allJob = document.getElementById('AllJob');
let Interview =document.getElementById('Interview');
let Rejected=document.getElementById('Rejected');


let getTotalJob=document.getElementById('jobs');
let main = document.querySelectorAll('main');

let btnAllJob =document.getElementById('btn-alljob');
let btnInterview =document.getElementById('btn-Interview');
let btnRejected =document.getElementById('btn-Rejected');

function calculateJob(){
    totalJob.innerText = getTotalJob.children.length;
    allJob.innerText = getTotalJob.children.length;
    Interview.innerText = interviewList.length;
    Rejected.innerText = rejectedList.length;
}
calculateJob()
function toggle(id){
    btnAllJob.classList.remove('bg-blue-800', 'text-white');
    btnInterview.classList.remove('bg-blue-800', 'text-white');
    btnRejected .classList.remove('bg-blue-800', 'text-white');

    btnAllJob.classList.add('bg-gray-300', 'text-black');
    btnInterview.classList.add('bg-gray-300', 'text-black');
    btnRejected .classList.add('bg-gray-300', 'text-black');
    const selected = document.getElementById(id);
    selected.classList.remove('bg-gray-300', 'text-black');
    selected.classList.add('bg-blue-800', 'text-white');
}
