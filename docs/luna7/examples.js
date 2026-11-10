(function(root){
  'use strict';
  // Explicitly synthetic input illustrations. Never used as API responses or business records.
  function text(key,label=''){
    const k=String(key||'').toLowerCase(),l=String(label||'');
    if(/password|secret|token|apikey|accesskey/.test(k)||/密码|密钥|令牌/.test(l))return 'EXAMPLE_NOT_A_VALID_CREDENTIAL';
    if(/email/.test(k)||/邮箱/.test(l))return 'player@example.com';
    if(/phone|mobile/.test(k)||/手机号|电话/.test(l))return '+1 202-555-0147';
    if(/ip$|^ip|ipaddress/.test(k)||/IP/.test(l))return '192.0.2.10';
    if(/url|domain|link/.test(k)||/网址|域名|链接/.test(l))return 'https://example.com/luna7';
    if(/date|time|createdat|updatedat/.test(k)||/日期|时间/.test(l))return '2026-11-09 10:30:00';
    if(/currency/.test(k)||/币种/.test(l))return 'USD';
    if(/rtp|rate|ratio/.test(k)||/RTP|比例|比率|成功率/.test(l))return '96.20%';
    if(/amount|balance|recharge|withdraw|winloss|totalbet|betlimit/.test(k)||/金额|余额|流水|输赢|盈亏/.test(l))return '128.50';
    if(/count|number|total$|page|size|index|sort|level|vip/.test(k)||/人数|次数|局数|数量|等级|排序/.test(l))return '12';
    if(/status|state|type|flag|mode/.test(k)||/状态|类型|模式/.test(l))return '示例选项（以真实字典为准）';
    if(/channel/.test(k)||/渠道/.test(l))return 'EXAMPLE_CHANNEL_US';
    if(/platform/.test(k)||/平台/.test(l))return 'EXAMPLE_LUNA7_US';
    if(/provider/.test(k)||/供应商/.test(l))return 'EXAMPLE_PROVIDER';
    if(/game/.test(k)||/游戏/.test(l))return 'EXAMPLE_SLOT_001';
    if(/account|nickname|username/.test(k)||/账号|帐号|昵称/.test(l))return 'example_player_01';
    if(/uid|(^|_)id$|^id$|father|userid/.test(k)||/编号|用户ID|玩家ID/.test(l))return '10000001';
    if(/reason|remark|desc|note|detail/.test(k)||/原因|备注|说明|描述/.test(l))return '示例：Luna7 运营配置说明，仅用于输入演示';
    if(/title|name/.test(k)||/名称|标题/.test(l))return 'Luna7 示例配置';
    if(/code|origin|key/.test(k)||/标识|来源|代码/.test(l))return 'EXAMPLE_001';
    if(/json|config|parameter/.test(k)||/JSON|参数/.test(l))return '{"example":true}';
    return '示例：'+(l||key||'待实际结构确认');
  }
  function form(field){
    if(field.type==='boolean')return 'true';
    if(field.type==='number'){let value=/rtp|rate|ratio/i.test(field.key)?96.2:/amount|balance|bet|recharge|withdraw/i.test(field.key)?128.5:12;if(Number.isFinite(field.min))value=Math.max(value,field.min);if(Number.isFinite(field.max))value=Math.min(value,field.max);return String(value)}
    if(field.type==='date')return '2026-11-09';
    return text(field.key,field.label);
  }
  function column(c){if(!c.prop)return '动态展示示例（结构以真实数据为准）';return text(c.prop,c.label)}
  const api={text,form,column};if(typeof module==='object'&&module.exports)module.exports=api;else root.Luna7Examples=api;
})(typeof window==='undefined'?globalThis:window);
