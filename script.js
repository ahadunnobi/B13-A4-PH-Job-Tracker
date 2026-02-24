let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';

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
  const totalCount = getTotalJob.children.length;
  totalJob.innerText = totalCount;

  if (currentStatus === 'btn-Interview') {
    allJob.innerText = `${interviewList.length} of ${totalCount}`;
  } else if (currentStatus === 'btn-Rejected') {
    allJob.innerText = `${rejectedList.length} of ${totalCount}`;
  } else {
    allJob.innerText = totalCount;
  }

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
  currentStatus = id;
  selected.classList.remove("bg-gray-300", "text-black");
  selected.classList.add("bg-blue-800", "text-white");

  if (id == 'btn-Interview') {

    getTotalJob.classList.add('hidden');
    filteredjob.classList.remove('hidden');
    renderJob();

  } else if (id == 'btn-alljob') {

    getTotalJob.classList.remove('hidden');
    filteredjob.classList.add('hidden');

  } else if (id == 'btn-Rejected') {
    getTotalJob.classList.add('hidden');
    filteredjob.classList.remove('hidden');
    renderRejectedJob();
  }
  calculateJob();
}
mainContainer.addEventListener("click", function (event) {

  if (event.target.classList.contains("btn-Interview")) {

    const parent = event.target.closest('.job');
    const companyName = parent.querySelector(".companyName").innerText;
    const positionName = parent.querySelector(".position").innerText;
    const sallary = parent.querySelector(".sallary").innerText;
    const responsibility = parent.querySelector(".responsibility").innerText;

    
    const mainJob = Array.from(getTotalJob.children).find(child => child.querySelector('.companyName').innerText === companyName);
    if (mainJob) {
      const isAppliedBtn = mainJob.querySelector('.IsApplied');
      isAppliedBtn.innerText = 'Interview';
      isAppliedBtn.className = 'btn IsApplied rounded-2xl border-gray-400 bg-green-500 btn-outline btn-success font-bold text-white';
    }

    const jobInfo = {
      companyName,
      positionName,
      sallary,
      IsApplied: 'Interview',
      responsibility,
    };

    const isJobExist = interviewList.find(
      (item) => item.companyName == jobInfo.companyName,
    );

    if (!isJobExist) {
      interviewList.push(jobInfo);
    }
    rejectedList = rejectedList.filter(item => item.companyName != jobInfo.companyName);

    if (currentStatus === 'btn-Interview') renderJob();
    if (currentStatus === 'btn-Rejected') renderRejectedJob();
    calculateJob();
  } else if (event.target.classList.contains("btn-Rejected")) {

    const parent = event.target.closest('.job');
    const companyName = parent.querySelector(".companyName").innerText;
    const positionName = parent.querySelector(".position").innerText;
    const sallary = parent.querySelector(".sallary").innerText;
    const responsibility = parent.querySelector(".responsibility").innerText;

    const mainJob = Array.from(getTotalJob.children).find(child => child.querySelector('.companyName').innerText === companyName);
    if (mainJob) {
      const isAppliedBtn = mainJob.querySelector('.IsApplied');
      isAppliedBtn.innerText = 'Rejected';
      isAppliedBtn.className = 'btn IsApplied rounded-2xl border-gray-400 bg-red-500 btn-outline btn-error font-bold text-white';
    }

    const jobInfo = {
      companyName,
      positionName,
      sallary,
      IsApplied: 'Rejected',
      responsibility,
    };

    const isJobExist = rejectedList.find(
      (item) => item.companyName == jobInfo.companyName,
    );

    if (!isJobExist) {
      rejectedList.push(jobInfo);
    }
    interviewList = interviewList.filter(item => item.companyName != jobInfo.companyName);

    if (currentStatus === 'btn-Interview') renderJob();
    if (currentStatus === 'btn-Rejected') renderRejectedJob();
    calculateJob();
  } else if (event.target.closest('.delete-btn')) {
    const parent = event.target.closest('.job');
    const companyName = parent.querySelector(".companyName").innerText;


    interviewList = interviewList.filter(item => item.companyName !== companyName);
    rejectedList = rejectedList.filter(item => item.companyName !== companyName);

    const allMatchingJobs = document.querySelectorAll('.job');
    allMatchingJobs.forEach(job => {
      if (job.querySelector('.companyName').innerText === companyName) {
        job.remove();
      }
    });

    if (currentStatus === 'btn-Interview') renderJob();
    if (currentStatus === 'btn-Rejected') renderRejectedJob();
    calculateJob();
  }
});

function renderEmptyState(message) {
  filteredjob.innerHTML = `
    <div class="flex flex-col items-center justify-center py-20 px-4 text-center space-y-4 border-2 border-dashed border-gray-300 rounded-3xl bg-gray-50">
      <div class="text-6xl text-gray-300">
        <i class="fa-solid fa-clipboard-list"></i>
      </div>
      <div>
        <h3 class="text-2xl font-bold text-gray-500">${message}</h3>
        <p class="text-gray-400 mt-2">Try moving some jobs to this category to track your progress.</p>
      </div>
    </div>
  `;
}

function renderJob() {
  if (interviewList.length === 0) {
    renderEmptyState("No Interview invitations yet!");
    return;
  }
  filteredjob.innerHTML = '';
  for (let job of interviewList) {
    let div = document.createElement('div');
    div.className = "job relative flex flex-col md:flex-row justify-between items-start md:items-center border bg-primary-content border-gray-400 rounded-3xl p-6 gap-4"
    div.innerHTML = `<div class="space-y-2 w-full md:w-auto pr-12">
                    <div>
                        <p class="companyName text-3xl md:text-4xl pb-2 font-bold">${job.companyName}</p>
                        <p class="position text-xl md:text-2xl">${job.positionName}</p>
                    </div>
                    <p class="sallary text-sm md:text-base">${job.sallary}</p>
                    <button class="btn IsApplied rounded-2xl border-gray-400 btn-success font-bold text-white">${job.IsApplied}</button>
                    <p class="responsibility text-sm md:text-base">${job.responsibility}</p>
                    <div class="flex flex-wrap gap-3">
                        <button class="btn btn-outline btn-success font-bold btn-Interview flex-1 sm:flex-none">Interview</button>
                        <button class="btn btn-outline btn-error font-bold btn-Rejected flex-1 sm:flex-none">Rejected</button>
                    </div>
                </div>


                <div class="absolute top-4 right-4">
                    <button class="btn p-3 rounded-2xl delete-btn"><i class="fa-solid fa-trash-can"></i></button>
                </div>`;
    filteredjob.appendChild(div);


  }
}
function renderRejectedJob() {
  if (rejectedList.length === 0) {
    renderEmptyState("No Rejected applications.");
    return;
  }
  filteredjob.innerHTML = '';
  for (let job of rejectedList) {
    let div = document.createElement('div');
    div.className = "job relative flex flex-col md:flex-row justify-between items-start md:items-center border bg-primary-content border-gray-400 rounded-3xl p-6 gap-4"
    div.innerHTML = `<div class="space-y-2 w-full md:w-auto pr-12">
                    <div>
                        <p class="companyName text-3xl md:text-4xl pb-2 font-bold">${job.companyName}</p>
                        <p class="position text-xl md:text-2xl">${job.positionName}</p>
                    </div>
                    <p class="sallary text-sm md:text-base">${job.sallary}</p>
                    <button class="btn IsApplied btn-error rounded-2xl border-gray-400 font-bold text-white">${job.IsApplied}</button>
                    <p class="responsibility text-sm md:text-base">${job.responsibility}</p>
                    <div class="flex flex-wrap gap-3">
                        <button class="btn btn-outline btn-success font-bold btn-Interview flex-1 sm:flex-none">Interview</button>
                        <button class="btn btn-outline btn-error font-bold btn-Rejected flex-1 sm:flex-none">Rejected</button>
                    </div>
                </div>


                <div class="absolute top-4 right-4">
                    <button class="btn p-3 rounded-2xl delete-btn"><i class="fa-solid fa-trash-can"></i></button>
                </div>`;
    filteredjob.appendChild(div);


  }
}
