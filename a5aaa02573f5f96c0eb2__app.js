(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{fn1XJMbM:function(e,t,a){},tjUo5Mom:function(e,t,a){"use strict";a.r(t);a("fn1XJMbM");var n=a("qkdHQ+9s"),l=a("t/UTLvsS");const s=document.querySelector(".ps-x"),r=(document.querySelector(".column-none"),document.querySelector(".column-add"),document.querySelector(".columns"));let o="",d="";new l.a(s,{suppressScrollY:!0,wheelPropagation:!0});r.addEventListener("click",(function(e){if(!e.target.closest("li"))return;let t=e.target.closest("li"),a=t.querySelector(".column-none"),s=t.querySelector(".column-add"),r=t.querySelector(".text-add"),c=t.cloneNode(!0),u=t.querySelector(".column-header"),i=c.querySelector(".column-none"),y=c.querySelector(".column-add"),p=c.querySelector(".text-add"),m=t.dataset.status;function b(){a.style.display="none",s.style.display="flex"}function v(){a.style.display="flex",s.style.display="none"}switch(t.addEventListener("click",e=>{e.target.closest(".btn-delete-task")&&e.target.closest(".column-task").remove()}),t.addEventListener("click",e=>{e.target.closest(".btn-edit-task")&&(b(),s.querySelector(".btn-apply").textContent="Изменить",o=e.target.parentNode.querySelector("p").innerText,s.querySelector(".text-add").value=o,t.dataset.status="task-changes-name")}),t.addEventListener("click",e=>{e.target.closest(".btn-edit-header")&&(b(),s.querySelector(".btn-apply").textContent="Изменить",o=e.target.parentNode.querySelector("p").innerText,s.querySelector(".text-add").value=o,d=t.dataset.status,t.dataset.status="header-changes-name")}),m){case"none":if(s.style.display&&"none"!==s.style.display||b(),e.target.matches(".btn-apply")||e.target.matches(".btn-close")){v();let e=s.querySelector(".btn-apply");p.value&&(t.insertAdjacentElement("afterend",c),t.dataset.status="column-has-name",t.insertAdjacentHTML("afterBegin",`<div class="column-header">\n            <p>${r.value}</p>\n            <button class="btn-edit btn-edit-header"><div></div></button>\n            <button class="btn-delete btn-delete-header"><div></div></button>\n            </div>`),r.value="",a.lastElementChild.textContent="Добавить еще одну карточку",i.style.display="flex",y.style.display="none"),p.value="",e.textContent="Добавить задачу"}break;case"column-has-name":if(s.style.display&&("none"!==s.style.display||e.target.matches(".btn-delete")||e.target.matches(".btn-edit"))||b(),e.target.matches(".btn-edit")){let e=t.querySelector(".column-header p");b(),s.querySelector(".text-add").value=e.textContent,s.querySelector(".text-add").value&&(e.textContent=s.querySelector(".text-add").value=e.textContent),t.dataset.status="column-changes-name"}if(e.target.matches(".btn-delete-header")&&t.remove(),e.target.matches(".btn-apply")||e.target.matches(".btn-close")){console.log(e.target),v();let a=s.querySelector(".text-add");if(a.value){t.dataset.status="column-has-tasks",u.insertAdjacentHTML("afterEnd",`<div class="ps-y">\n                <ul class="column-tasks tasks-1">\n                    <li class="column-task">\n                      <p>${a.value}</p>\n                      <button class="btn-edit btn-edit-task"><div></div></button>\n                      <button class="btn-delete btn-delete-task"><div></div></button>\n                    </li>\n                </ul>\n            </div>`),a.value="";let e=t.querySelector(".column-tasks"),s=t.querySelector(".ps-y");new n.a(e,{group:"shared",dragClass:"sortable-drag",animation:150}),new l.a(s,{suppressScrollX:!0,wheelPropagation:!0})}}break;case"column-has-tasks":if(s.style.display&&("none"!==s.style.display||e.target.matches(".btn-delete")||e.target.matches(".btn-edit"))||b(),e.target.matches(".btn-apply")||e.target.matches(".btn-close")){v();let e=s.querySelector(".text-add"),a=t.querySelector(".column-tasks");e.value&&(a.insertAdjacentHTML("beforeEnd",`<li class="column-task">\n                <p>${e.value}</p>\n                <button class="btn-edit btn-edit-task"><div></div></button>\n                <button class="btn-delete btn-delete-task"><div></div></button>\n            </li>`),e.value="")}e.target.matches(".btn-delete-header")&&t.remove();break;case"header-changes-name":if(e.target.matches(".btn-apply")){let a=e.target.parentNode;e.target.parentNode.parentNode.querySelector(".column-header").querySelector("p").textContent=a.querySelector(".text-add").value,a.querySelector(".btn-apply").textContent="Добавить задачу",t.dataset.status=d,o="",a.querySelector(".text-add").value="",v()}case"task-changes-name":if(e.target.matches(".btn-apply")){let a=e.target.parentNode,n=e.target.parentNode.parentNode.querySelectorAll(".column-task");for(let e=0;e<n.length;e++)n[e].innerText.trim()===o.trim()&&(n[e].querySelector("p").textContent=a.querySelector(".text-add").value);a.querySelector(".btn-apply").textContent="Добавить задачу",t.dataset.status="column-has-tasks",o="",a.querySelector(".text-add").value="",v()}}}))}},[["tjUo5Mom",1,2]]]);