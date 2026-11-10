(function(root){
  'use strict';
  const definitions=[{id:'admin',name:'超级管理员',home:'overview'},{id:'planner_admin',name:'策划管理员',home:'v2-320'},{id:'planner',name:'策划',home:'v2-320'},{id:'operator_admin',name:'运营管理员',home:'overview'},{id:'operator',name:'运营',home:'overview'}];
  const base=role=>role==='planner_admin'?'planner':role==='operator_admin'?'operator':role;
  const teamScope=role=>role==='admin'?'all':role==='planner_admin'?'planning':role==='operator_admin'?'operations':null;
  function canManageAccount(role,account){const scope=teamScope(role);return !!scope&&(scope==='all'||scope===account.department&&account.role===({planning:'planner',operations:'operator'})[scope]);}
  const planning=['g320','g317','g53','g315','g319'],operations=['g1','g38','g166','g298','g167','g34','g35','g39'];
  function can(role,route){if(!route)return false;if(!definitions.some(r=>r.id===role))return false;if(role==='admin')return true;if(route.type==='team')return teamScope(role)===route.department;role=base(role);if(role==='planner')return planning.includes(route.group)||['v2-61','v2-111','v2-107','v2-314'].includes(route.id);if(role==='operator')return operations.includes(route.group)||['v2-123','v2-129','v2-134','v2-289','v2-318','v2-255','v2-314'].includes(route.id);return false;}
  function visible(role,route){return route.id!=='v2-99'&&can(role,route)}
  function get(id){return definitions.find(r=>r.id===id)||definitions[0]}
  function read(){try{return get(localStorage.getItem('luna7-role-view')).id}catch{return 'admin'}}
  function save(role){try{localStorage.setItem('luna7-role-view',get(role).id)}catch{}}
  const api={definitions,base,teamScope,canManageAccount,can,visible,get,read,save};if(typeof module==='object'&&module.exports)module.exports=api;else root.Luna7Roles=api;
})(typeof window==='undefined'?globalThis:window);
