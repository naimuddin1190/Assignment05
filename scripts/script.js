document.querySelector('.go-to-blog').addEventListener('click',()=>{
    window.location.href = 'Blog.html';
});

let options = { weekday: 'short', year: 'numeric', month: 'short', day: '2-digit' };
let date=new Date().toLocaleDateString('en-US', options);
let arr=date.split(',');
let create_date=document.querySelector('.date');
   create_date.textContent=arr[1]+' '+arr[2];
   create_date.previousElementSibling.textContent=arr[0];

function active_task(){
   const btn = document.querySelectorAll('.btn');
   const total_task = document.querySelectorAll('.card').length;
   let diactive_btn_count=0;
   let active_btn_count=0;
   btn.forEach(lp=>{
       if(lp.disabled){
           count++;
       }
       else{
           active_btn_count++;
       }
   });
   if((active_btn_count+diactive_btn_count) === total_task){
       return active_btn_count;
   }
   else{
       console.log('Some task has not completed button');
       return false;
   }
}

let total_task = active_task();
const task = document.querySelector('.task');
   task.textContent = total_task>9?total_task:'0'+total_task;

const btn = document.querySelectorAll('.btn');
btn.forEach(lp=>{
   lp.addEventListener('click',()=>{
       alert('Board updated Successfully');
       lp.disabled = true;
       lp.style.backgroundColor = '#c5caeb';
       lp.classList.remove('hover:bg-[#03179b]');
       total_task--;
       if(total_task===0){
           alert('Congrates!!! You have completed all current the task');
       }
       task.textContent = '0'+total_task;
       let element=document.querySelector('.done-task');
       element.textContent=parseInt(element.textContent)+1;
       let parent=document.querySelector('.activity');
       let p=document.createElement('p');
           p.innerHTML += `<p class="bg-[#F4F7FF] rounded-md p-2">
                       You have Completed The Task ${lp.parentElement.parentElement.children[1].textContent} at ${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}
                   </p>`;
       parent.appendChild(p);            
             
})});

document.querySelector('.clear-btn').addEventListener('click',()=>{
   let parent=document.querySelector('.activity');
   parent.innerHTML='';
});

function getRandomColor() {
       const letters = '0123456789ABCDEF';
       let color = '#';
       for (let i = 0; i < 6; i++) {
           color += letters[Math.floor(Math.random() * 16)];
       }
       return color;
   }
document.querySelector('.theme').addEventListener('click',()=>{
   document.body.style.backgroundColor = getRandomColor();
});
