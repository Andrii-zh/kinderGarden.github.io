"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73],{73:function(t,e,n){function u(t){const e=Number(t.getAttribute("data-target")),n=Number(t.innerText),c=Math.max(1,Math.ceil((e-n)/10));n<e?(t.innerText=n+c,setTimeout((()=>u(t)),70)):t.innerText=e}function c(){document.querySelectorAll(".count").forEach((t=>{u(t)}))}n.d(e,{counter:function(){return c}})}}]);