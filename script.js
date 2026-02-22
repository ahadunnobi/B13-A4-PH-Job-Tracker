let interviewList = [];
let rejectedList = [];

let totalJob = document.getElementById("totalJob");
let allJob = document.getElementById("AllJob");
let Interview = document.getElementById("Interview");
let Rejected = document.getElementById("Rejected");

let getTotalJob = document.getElementById("jobs");
const mainContainer = document.querySelector("main");
let filteredjob = document.getElementById("filtered-job");

let btnAllJob = document.getElementById("btn-alljob");
let btnInterview = document.getElementById("btn-Interview");
let btnRejected = document.getElementById("btn-Rejected");

function calculateJob() {
  totalJob.innerText = getTotalJob.children.length;
  allJob.innerText = getTotalJob.children.length;

  Interview.innerText = interviewList.length;
  Rejected.innerText = rejectedList.length;
}
calculateJob();
function toggle(id) {
  btnAllJob.classList.remove("bg-blue-800", "text-white");
  btnInterview.classList.remove("bg-blue-800", "text-white");
  btnRejected.classList.remove("bg-blue-800", "text-white");

  btnAllJob.classList.add("bg-gray-300", "text-black");
  btnInterview.classList.add("bg-gray-300", "text-black");
  btnRejected.classList.add("bg-gray-300", "text-black");

  const selected = document.getElementById(id);
  
  selected.classList.remove("bg-gray-300", "text-black");
  selected.classList.add("bg-blue-800", "text-white");
  
  if(id == 'btn-Interview'){
    getTotalJob.classList.add('hidden');
    filteredjob.classList.remove('hidden');
  }else if(id == 'btn-alljob'){
    getTotalJob.classList.remove('hidden');
    filteredjob.classList.add('hidden')
  }
}
mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-Interview")) {
    const parent = event.target.parentNode.parentNode;
    const companyName = parent.querySelector(".companyName");
    const positionName = parent.querySelector(".position");
    const sallary = parent.querySelector(".sallary");
    const responsibility = parent.querySelector(".responsibility");
    const IsApplied = parent.querySelector(".IsApplied");
    // parent.querySelector('.IsApplied').innerText = 'Interview'
    console.log(parent.querySelector('.IsApplied').innerText = 'Interview');
    parent.querySelector('.IsApplied ').classList.add('bg-green-500', 'btn-outline', 'btn-success', 'font-bold','text-white')
    const jobInfo = {
      companyName,
      positionName,
      sallary,
      IsApplied ,
      responsibility,
    };
    const isJobExist = interviewList.find(
      (item) => item.companyName == jobInfo.companyName,
    );
    if (!isJobExist) {
      interviewList.push(jobInfo);
    }
    renderJob();
  }
});
function renderJob(){
    filteredjob.innerHTML='';
    for(let job of interviewList){
        let div =document.createElement('div');
        div.className ="job flex flex-row justify-between border bg-primary-content border-gray-400 rounded-3xl p-6"
        div.innerHTML=`<div class="space-y-2">
                    <div>
                        <p class="companyName text-4xl pb-2 font-bold">${job.companyName.innerText}</p>
                        <p class="position text-2xl">${job.positionName.innerText}</p>
                    </div>
                    <p class="sallary">${job.sallary.innerText}</p>
                    <button class="btn bg-green-500 btn-outline rounded-2xl font-bold border-gray-400 btn-successfont-bold text-white">${job.IsApplied.innerText}</button>
                    <p class="responsibility">${job.responsibility.innerText}</p>
                    <div class="flex gap-5">
                        <button class="btn btn-outline btn-success font-bold btn-Interview">Interview</button>
                        <button class="btn btn-outline btn-error font-bold">Rejected</button>
                    </div>
                </div>


                <div>
                    <button class="btn p-3 rounded-2xl"><i class="fa-solid fa-trash-can"></i></button>
                </div>`;
    filteredjob.appendChild(div);

    
    }
}