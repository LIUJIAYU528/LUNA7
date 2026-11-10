(function(root){
  'use strict';
  const NOTICE='非真实数据',DATE='2026-11-09';
  const overview={registrations:1842,recharge:128450.50,withdraw:98420,winLoss:48216.75,bet:1339354.17,rtp:96.4,orderSuccess:97.8,orders:1468,pending:18,risk:8,bonus:6720,activePlayers:6284};
  const trend={labels:['00:00','02:00','04:00','06:00','08:00','10:00','12:00','14:00','16:00','18:00','20:00','22:00'],recharge:[3.2,2.5,2.1,3,4.8,7.2,10.4,14.8,15.2,18.6,21.2,25.4505],withdraw:[1.5,2,1.3,2.3,2.7,4.2,4.6,9.4,12.1,15.6,18.7,24.02],winLoss:[.5,.9,.7,1.2,1,2.4,1.7,3.8,5.4,8.1,9.2,13.31675]};
  const byKey={account:'luna_player',email:'player@example.com',phone:'+1 202-555-0147',platform:'Luna7 US',channel:'US · Search',origin:'Google / Organic',provider:'Provider-A',currency:'USD',name:'Luna7 Welcome Pack',regularPlanId:'PLAN-US-STANDARD',promotionPlanIds:'PLAN-US-WELCOME'};
  const player={name:'Jerry',uid:'10008001',email:'jerry@example.com',balance:'128.50',recharge:'2450.00',withdraw:'1480.00',bet:'58333.33',winLoss:'2100.00',rtp:'96.40%'};
  function active(connected){return connected===false}
  function value(key,label='',index=0,route={}){const k=String(key||'').toLowerCase(),l=String(label||''),n=index+1;
    if(index===0&&['totalrecharge','todayrecharge'].includes(k))return player.recharge;
    if(index===0&&['totalwithdraw','todaywithdraw'].includes(k))return player.withdraw;
    if(index===0&&k==='todaybet')return player.bet;
    if(index===0&&['winloss','todaywinloss'].includes(k))return player.winLoss;
    if(k==='samplecontext')return index===0?'Jerry':['Olivia','Lucas','Emma'][index%3];
    if(/password|secret|token|apikey/.test(k)||/密码|密钥/.test(l))return 'EXAMPLE_NOT_VALID_'+String(n).padStart(3,'0');
    if(/email/.test(k)||/邮箱/.test(l))return index===0?player.email:'player'+n+'@example.com';
    if(/phone|mobile/.test(k)||/手机|电话/.test(l))return '+1 202-555-'+String(100+index).padStart(4,'0');
    if(/^(account|nickname|username)$/.test(k))return index===0?player.name:'luna_player_'+String(101+index);
    if(/withdrawaccount|bankaccount/.test(k)||/收款账号|提现账号标识/.test(l))return 'SAMPLE-ACCT-'+String(101+index);
    if(/vip|level/.test(k)||/VIP|等级/.test(l))return 'VIP '+(1+index%6);
    if(/status|state|flag|loginlimit|withdrawlimit/.test(k)||/状态/.test(l))return ['正常','待审核','已完成','已暂停'][index%4];
    if(/type|mode/.test(k)||/类型|模式/.test(l))return ['标准','新增玩家','常规玩家'][index%3];
    if(/ip$|^ip/.test(k)||/IP/.test(l))return '192.0.2.'+(10+index);
    if(/url|domain|link/.test(k)||/网址|域名|链接/.test(l))return 'https://example.com/luna7/'+n;
    if(/time|date|createdat|updatedat/.test(k)||/时间|日期/.test(l))return DATE+' '+String(18-Math.floor(index/4)).padStart(2,'0')+':'+String((index*7)%60).padStart(2,'0')+':24';
    if(/rtp/.test(k)||/RTP/.test(l))return [96.4,95.8,101.2,97.1,92.6,96.9][index%6]+'%';
    if(/arpu|arppu/.test(k))return (56.8+index*3.75).toFixed(2);
    if(/rate|ratio/.test(k)||/率|比例|提充比/.test(l))return [23.8,26.1,21.4,29.6][index%4]+'%';
    if(/amount|balance|recharge|withdraw|winloss|bet|totalwin|profit/.test(k)||/金额|余额|输赢|盈亏|流水|收入|收分|送分/.test(l))return (128.5+index*37.25+(index%3)*120).toFixed(2);
    if(/status|state|flag/.test(k)||/状态/.test(l))return ['正常','待审核','已完成','已暂停'][index%4];
    if(/vip|level/.test(k)||/VIP|等级/.test(l))return 'VIP '+(1+index%6);
    if(/count|total$|size|sort|index/.test(k)||/次数|人数|局数|数量|排序/.test(l))return 12+index*7;
    if(/provider/.test(k)||/供应商|厂商/.test(l))return ['Provider-A','Provider-B','Provider-C'][index%3];
    if(/game/.test(k)||/游戏/.test(l))return ['Lunar Fortune','Star Vault','Nova Reels','Moon Gems'][index%4];
    if(/channel/.test(k)||/渠道/.test(l))return ['US · Search','US · Social','US · Affiliate'][index%3];
    if(/platform/.test(k)||/平台/.test(l))return 'Luna7 US';
    if(/origin/.test(k)||/来源/.test(l))return ['Google / Organic','Meta / Campaign','Affiliate / Partner'][index%3];
    if(/account|nickname|username/.test(k)||/账号|帐号|昵称/.test(l))return index===0?player.name:'luna_player_'+String(101+index);
    if(/order/.test(k)||/订单/.test(l))return 'L7-D-20261109-'+String(1001+index);
    if(/uid|id$|father/.test(k)||/编号|用户ID|玩家ID/.test(l))return String(10008001+index);
    if(/type|mode/.test(k)||/类型|模式/.test(l))return ['标准','新增玩家','常规玩家'][index%3];
    if(/reason|remark|desc|detail|note/.test(k)||/说明|备注|原因/.test(l))return ['活动资格核验通过','人工复核中','配置版本已保存'][index%3];
    if(/version/.test(k)||/版本/.test(l))return 'v2.'+(4+index%3)+'.'+index%4;
    if(/title|name/.test(k)||/名称|标题/.test(l))return ['Welcome Boost','Daily Mission','Weekend Spins','VIP Rewards'][index%4];
    if(/currency/.test(k)||/币种/.test(l))return 'USD';
    if(/path|component/.test(k)||/路径/.test(l))return '/luna7/'+(route.id||'workspace')+'/'+n;
    if(/code|key/.test(k)||/标识|短码/.test(l))return 'L7_US_'+String(n).padStart(3,'0');
    if(/operator|user|creator/.test(k)||/操作人|更新人|审核人/.test(l))return ['Olivia / Operations','Lucas / Planning','Emma / Finance'][index%3];
    return byKey[key]||['标准方案','增长策略','运营配置','玩家明细'][index%4]+' '+String(n).padStart(2,'0');
  }
  function form(field){if(field.type==='boolean')return 'true';if(field.type==='date')return DATE;if(field.type==='number'){let n=/rtp|rate/i.test(field.key)?96.4:/amount|balance|bet/i.test(field.key)?128.5:12;if(Number.isFinite(field.min))n=Math.max(n,field.min);if(Number.isFinite(field.max))n=Math.min(n,field.max);const base=Number.isFinite(field.min)?field.min:0;n=base+Math.floor(n-base);return String(Number(n.toFixed(8)))}if(/页面路径/.test(field.label)||/path/i.test(field.key))return '/luna7/welcome';if(field.type==='choice'){if(/agent/i.test(field.key))return 'Partner 01';if(/adtype/i.test(field.key))return 'Search';if(/apitype/i.test(field.key))return 'Standard API';if(/rtp/i.test(field.key))return '96.4%';if(/recharge|withdraw/i.test(field.key))return '允许';return '标准方案'}return value(field.key,field.label)}
  function columns(route){const list=route.columns.filter(c=>c.prop&&c.label),unique=[...new Map(list.map(c=>[c.prop,c])).values()],base=unique.length?unique:[{prop:'name',label:route.id==='v2-63'?'充值 Profile':'配置名称'},{prop:'platform',label:'平台'},{prop:'version',label:'版本'},{prop:'status',label:'状态'},{prop:'operator',label:'更新人'},{prop:'updateTime',label:'更新时间'}];return [{prop:'sampleContext',label:'示例关联'},...base]}
  function set(row,key,value){const keys=key.split('.');let target=row;for(const k of keys.slice(0,-1)){if(!target[k]||typeof target[k]!=='object')target[k]={};target=target[k]}target[keys.at(-1)]=value}
  function rows(route,date=DATE){return Array.from({length:24},(_,index)=>{const row={__luna7Demo:true,__demoIndex:index};for(const c of columns(route))set(row,c.prop,value(c.prop,c.label,index,route));for(const f of route.fields)if(row[f.key]==null)row[f.key]=value(f.key,f.label,index,route);for(const key of ['id','account','status','amount','platform','updateTime'])if(row[key]==null)row[key]=value(key,'',index,route);for(const c of columns(route)){if(/date|time/i.test(c.prop)){const keys=c.prop.split('.');let v=row;for(const k of keys.slice(0,-1))v=v[k];v[keys.at(-1)]=String(v[keys.at(-1)]).replace(DATE,date||DATE)}}return row})}
  const api={NOTICE,DATE,overview,trend,player,active,rows,columns,value,form};if(typeof module==='object'&&module.exports)module.exports=api;else root.Luna7Demo=api;
})(typeof window==='undefined'?globalThis:window);
