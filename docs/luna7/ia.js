(function(root){
  'use strict';
  const areas=[
    {id:'operations',title:'运营数据看板',short:'运营',icon:'chart',number:'01',core:true,home:'overview',description:'经营总览、统计分析与业务报表',sections:[{id:'overview',title:'运营总览',groups:['g1']},{id:'statistics',title:'经营统计',groups:['g38','g166']},{id:'analytics',title:'数据分析',groups:['g298']},{id:'reports',title:'报表中心',groups:['g167']}]},
    {id:'planning',title:'策划配置后台',short:'策划',icon:'settings',number:'02',core:true,home:'v2-320',description:'活动、游戏、运营与资金规则配置',sections:[{id:'planning-home',title:'策划工作台',groups:['g320']},{id:'activity',title:'活动配置',groups:['g317']},{id:'rules',title:'运营规则配置',groups:['g36']},{id:'games',title:'游戏管理',groups:['g53']},{id:'media',title:'媒体资源管理',groups:['g315']},{id:'payment-rules',title:'资金规则配置',groups:['g319']}]},
    {id:'business',title:'业务管理',short:'业务',icon:'people',number:'03',home:'v2-49',description:'玩家、订单与代理日常管理',sections:[{id:'players',title:'用户管理',groups:['g34']},{id:'orders',title:'订单管理',groups:['g35']},{id:'agents',title:'代理管理',groups:['g39']}]},
    {id:'risk',title:'风险与安全',short:'风控',icon:'shield',number:'04',home:'v2-318',description:'风险查询、规则与控制配置',sections:[{id:'risk-control',title:'风控管理',groups:['g70']}]},
    {id:'platform',title:'平台管理',short:'平台',icon:'folder',number:'05',home:'v2-99',description:'平台、运营内容与后台权限',sections:[{id:'platform-config',title:'平台管理',groups:['g98']},{id:'operations-content',title:'运营管理',groups:['g313']},{id:'administration',title:'超级管理员',groups:['g3']}]},
    {id:'system',title:'系统运维',short:'运维',icon:'code',number:'06',home:'v2-301',description:'运维工具、服务器与时间设置',sections:[{id:'tools',title:'运维工具',groups:['g194']},{id:'time',title:'设置时间',groups:['g110']},{id:'servers',title:'服务器状态',groups:['g23']}]}
  ];
  function location(route){for(const area of areas){const section=area.sections.find(s=>s.groups.includes(route.group));if(section)return {area,section}}throw new Error('Unmapped route: '+route.id)}
  function pageTitle(route){return route.id==='overview'?'运营总览':route.id==='v2-320'?'策划工作台':route.title}
  function search(route,q){const at=location(route);return (route.title+' '+route.menuPath+' '+pageTitle(route)+' '+at.area.title+' '+at.section.title).toLowerCase().includes(q.trim().toLowerCase())}
  const api={areas,location,pageTitle,search};if(typeof module==='object'&&module.exports)module.exports=api;else root.Luna7IA=api;
})(typeof window==='undefined'?globalThis:window);
