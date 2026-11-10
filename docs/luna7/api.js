(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory(require('./reference.js'));else root.Luna7API=factory(root.Luna7Reference)})(typeof window==='undefined'?globalThis:window,function(ref){
  'use strict';
  class ServiceError extends Error{constructor(code,message,details={}){super(message);this.code=code;this.details=details}}
  function create(config={},deps={}){
    const cfg={mode:'disconnected',baseUrl:'/api',timeoutMs:30000,allowWrites:false,...config};let token='',userId='';
    const connected=()=>cfg.mode==='http';
    async function invoke(apiId,parameters={},options={}){
      const api=ref.endpoints.find(e=>e.id===apiId);if(!api)throw new ServiceError('UNKNOWN_ENDPOINT','没有对应的2.0接口定义。');
      if(!connected())throw new ServiceError('NOT_CONNECTED','未接入业务服务，未发送请求。');
      if(!api.registered)throw new ServiceError('ENDPOINT_UNVERIFIED','该封装未匹配到后台路由，不能冒充可用接口。');
      if(api.disabled)throw new ServiceError('METHOD_DISABLED','2.0服务明确禁用此方法。');
      if(!api.readCandidate&&!cfg.allowWrites)throw new ServiceError('WRITE_DISABLED','业务写操作未启用，未发送请求。');
      if(/\$\{|https?:\/\//.test(api.url)||!api.url.startsWith('/'))throw new ServiceError('UNRESOLVED_URL','接口路径含动态变量，需完成显式适配。');
      if(typeof location!=='undefined'&&location.protocol==='https:'&&/^http:\/\//i.test(cfg.baseUrl))throw new ServiceError('MIXED_CONTENT','HTTPS工作台不能直接访问内网HTTP服务。请使用本地前端或授权HTTPS网关。');
      const headers={Accept:'application/json',...(token?{'x-token':token}:{}),...(userId?{'x-user-id':String(userId)}:{})};let url=cfg.baseUrl.replace(/\/$/,'')+api.url,body;
      if(api.method==='GET'||api.binding==='query'){const q=new URLSearchParams();for(const [k,v] of Object.entries(parameters)){if(v===undefined||v===null||v==='')continue;if(Array.isArray(v))v.forEach(x=>q.append(k,String(x)));else q.set(k,typeof v==='object'?JSON.stringify(v):String(v))}if(q.size)url+='?'+q}
      else{body=JSON.stringify(parameters);headers['Content-Type']='application/json'}
      const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),cfg.timeoutMs);const abort=()=>controller.abort();options.signal?.addEventListener('abort',abort,{once:true});
      try{const response=await (deps.fetch||fetch)(url,{method:api.method,headers,body,credentials:'same-origin',signal:controller.signal});let envelope;try{envelope=await response.json()}catch{throw new ServiceError('INVALID_RESPONSE','接口没有返回有效JSON；结果不能视为成功。')}
        if(!response.ok)throw new ServiceError('HTTP_'+response.status,envelope.msg||'业务服务请求失败。',{status:response.status});
        if(envelope.code!==0)throw new ServiceError('BUSINESS_'+String(envelope.code??'UNKNOWN'),envelope.msg||'服务未明确确认成功。',{upstreamCode:envelope.code});
        // Returning code=0 does not turn outcome=unknown or refreshConfirmed=false into a completed business action.
        return envelope;
      }catch(e){if(e instanceof ServiceError)throw e;if(e.name==='AbortError')throw new ServiceError(api.readCandidate?'QUERY_CANCELLED':'OUTCOME_UNKNOWN',api.readCandidate?'查询已取消或超时；没有用零值替代结果。':'操作结果未知，请先核对原操作，不能自动重发。');throw new ServiceError('NETWORK_ERROR','未能连接业务服务；没有产生模拟结果。')}
      finally{clearTimeout(timer);options.signal?.removeEventListener('abort',abort)}
    }
    async function load(route,query={}){if(!route.available)return {state:'development',rows:null,total:null};if(!connected())return {state:'disconnected',rows:null,total:null};if(!route.readApiId)throw new ServiceError('BINDING_REQUIRED','本页面仍需完成明确的查询接口/响应映射。');const result=await invoke(route.readApiId,query);const d=result.data;let rows;if(Array.isArray(d))rows=d;else if(Array.isArray(d?.list))rows=d.list;else if(Array.isArray(d?.rows))rows=d.rows;else throw new ServiceError('RESPONSE_BINDING_REQUIRED','已收到响应，但列表结构未适配；不伪造空结果。');if(d?.total!==undefined&&!Number.isFinite(Number(d.total)))throw new ServiceError('INVALID_TOTAL','总数格式无效。');return {state:'loaded',rows,total:d?.total===undefined?rows.length:Number(d.total),raw:result}}
    return {invoke,load,connected,mode:cfg.mode,setSession(session){token=session?.token||'';userId=session?.userId||''},clearSession(){token='';userId=''},contract:()=>({baseUrl:cfg.baseUrl,mode:cfg.mode,writes:cfg.allowWrites})};
  }
  function validateLocal(fields,data){const errors={};for(const f of fields){const value=data[f.key];if(f.required&&(value===''||value==null))errors[f.key]='请填写'+f.label;if(value===''||value==null)continue;if(f.type==='number'){if(!Number.isFinite(Number(value)))errors[f.key]='请输入数字';else if(Number.isFinite(f.min)&&Number(value)<f.min)errors[f.key]='低于模板最小值';else if(Number.isFinite(f.max)&&Number(value)>f.max)errors[f.key]='高于模板最大值'}}return errors}
  return {create,ServiceError,validateLocal};
});
