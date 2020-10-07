var all_menu = ['在线工具','常量查询','工具下载','刷题平台','比赛信息','友情链接','关于我们'];
let account_list = [
	"YmuwTXP+lEM/P3gF8swMqw==", "rzd8nHvFVSGoMyAGZPjNqw==", "Ro2D4Rv4lVR5+H2LwrdbhQ==", "in5aeZ3Tqm+cRyAwEUp/vA==", "Uhnc/XjPGm8KSXmD4HBtBQ==",
	"6skfUuwA/DOiLZ11KhnHSA==", "ecOXSORJn48Q3sQbxYpk2A==", "YI9u0Q2ZXqLfo4cslZPbcg==", "SyS47IrKxm2+lM6kYffBBw==", "3Huxw4mX0zHzrpcF5wpjAw==", 
	"bls6YqpMqflFFRdzJlsVhg==", "iQyZaJ6b6NQTggr8y/IuKw==", "Lh0GtLMsc6KQEshq9nPL3w==", "xxymOOQgIrgY7Oo0kmME1g==", "ExtTh9JsduZot474jMFSww==", 
	"ga0h788etURsJKHnwAMmQA==", "9L8gjx5ehqBJve6pc0UrLQ==", "axfNfowL/oiPe9a0j0R+Rw==", "IxPo0MP47gSwdkBNyP7LJA==", "f7gP1HEGmVoVMnzTHp4SdA==", 
	"L1HQ5rgJt4LeULvBggTHLA==", "yfbZdSrPqYZVQaGDJrjCNw==", "0vyquZDesprpAgreyqA8Kw==", "s2STVAVdyiRdN75HmCZjLg==", "wJzoEl+i2/iLbSBsxqfl6Q==", 
	"UqfkAdVEZuFjvXMDZZ24ug==", "XzeLN7PKfaG749uZqFmotA==", "9qxz56Vhb+yLa4EtmMX1Ug==", "0Ltd6nCvkGuFiQdggE7nWg==", "bd3tPzLUL91OyH74cy2clw==", 
	"qf+RpFcLokVheD3pSyo/jw==", "vkWcFnZG1auamnEtlN0R0w==", "vzSXJr1rkU73CXIlA/7tXg==", "Jdc379pdx4iiL0p/SmDStQ==", "2oZgBcOn0X9SxZQwFY5/Lw=="];
/*
list更新说明:
https://qun.qq.com/member.html#gid=216210928
```console
var group=document.getElementById('groupMember').children;
var str=[];
for(var i=1;i<group.length;++i){
	var list=group[i].children;
	var len=list.length;
	for(var j=0;j<len;++j){
		str.push(list[j].children[4].textContent.trim());
	}
}
console.log(str);
```
```console
var al=[];
al.map(a=>{return encode_account(a);})
```
*/
let addgroup="tencent://groupwpa/?subcmd=all&param=";
let tg=function(name,bgcolor,color){
	if(!bgcolor) bgcolor='#AAA';
	if(!color) color='#FFF';
	return {'name':name,'bgc':bgcolor,'c':color}
}
var tts = [
	tg('图片处理'),
	tg('编码解码'),
	tg('语言翻译'),
	tg('文本处理'),
	tg('音频视频'),
	tg('Base编码'),
	tg('数学计算'),
	tg('对称加密'),
	tg('代码运行'),
	tg('数据查询'),
	tg('hash计算'),
	tg('文件转换'),
	tg('综合工具')];//tool_tags
var cout={ expires: 3650, path: '' };
var menu = new Vue({
	el: '#menu',
	data: {
		contents: all_menu,
		active_name: ''
	},
    methods:{
		select_menu:function(i){
			this.active_name = i;
			Cookies.set('m',i,cout);
			location.reload();
		}
	},
    computed:{}
});
Vue.component('online-tool', {
	props: ['item'],
	template: "#tool"
});
Vue.component('constant-table', {
	props: ['item'],
	template: "#constant"
});
Vue.component('tool-download', {
	props: ['item'],
	template: "#download"
});
Vue.component('practise-online', {
	props: ['item'],
	template: "#practise"
});
Vue.component('campaign-list', {
	props: ['item'],
	template: "#campaign"
});
Vue.component('related-link', {
	props: ['item'],
	template: "#link"
});
Vue.component('about-us', {
	template: "#about"
});
let t=function(name,url,tagIds){
	var tags=[];
	if(tagIds){
		tagIds.forEach(t=>tags.push(tts[t]));
	}
	return {'name':name,'url':url,'tags':tags}
}
let c=function(name,url,type,num,timeinfo,inurl,remarks){
	return {'name':name,'url':url,'type':type,'num':num,'date':timeinfo,'inurl':inurl,'remarks':remarks}
}
function data2stemp(dd){
	return Date.parse(dd.replace('年','-').replace('月','-').replace('日',''));
}
let sj=function(s1,e1,s2,e2,mark){
	var timenow = new Date().getTime();
	var status = 0;// 报名前
	if(timenow > data2stemp(e2)){
		status = 4;// 比赛结束
	}else{
		status = 3;// 比赛中
		if(timenow < data2stemp(s2)){
			status = 2;// 报名结束比赛前
			if(e1=='' || timenow < data2stemp(e1)){
				status = 1;// 报名中
				if(s1 != '' && timenow < data2stemp(s1)){
					status = 0;
				}
			}
		}
	}
	// 显示内容优化
	if(mark!=''){
		s2 += '('+mark+')';
	}
	if(e1==e2){
		e1 += '(比赛结束前)';
	}
	if(e1==''){
		e1 = '比赛开始前';
	}else if(e1==s1){
		e1 += '(比赛开始前)';
	}
	return {'s1':s1,'e1':e1,'s2':s2,'e2':e2,'st':status,'m':mark}
}
let l=function(name,url,type){
	return {'name':name,'url':url,'type':type}
}
var items = new Vue({
	el: '#items',
	data: {
		contents: all_menu,
		seen: Cookies.get('m')?Cookies.get('m'):0,
		tools_screen: "",
		online_tool:[
			t('草料在线扫码','https://cli.im/deqr',[0,1]),
			t('二维码解析','https://merricx.github.io/qrazybox/',[0,1]),
			t('在线扫条形码','http://www.makepic.net/tool/deqrbarcode.html',[0,1]),
			t('汉信码在线生成器','http://www.efittech.com/hanxin/cp_hanxin_test.aspx',[0,1]),
			t('汉信码在线扫描','http://www.efittech.com/hxdec.html',[0,1]),
			t('中文电码查询','http://code.mcdvisa.com/',[1]),
			t('谷歌翻译','https://translate.google.cn/',[2]),
			t('与佛论禅','http://www.keyfc.net/bbs/tools/tudoucode.aspx',[1]),
			t('新约佛论禅','http://hi.pcmoe.net/buddha.html',[1]),
			t('词频分析','https://quipqiup.com/',[3]),
			t('乱码恢复','http://www.mytju.com/classcode/tools/messycoderecover.asp',[1,3]),
			t('图片EXIF信息查看','https://exif.tuchong.com/',[0]),
			t('摩尔斯电码转换','http://www.zhongguosou.com/zonghe/moErSiCodeConverter.aspx',[1]),
			t('摩尔斯音频解码','https://morsecode.scphillips.com/labs/audio-decoder-adaptive/',[1,4]),
			t('摩尔斯音频生成','http://www.dugwang.com/m/morse/codegen-start.html',[1,4]),
			t('培根密码','https://netair.xyz/tools/%E5%9F%B9%E6%A0%B9%E5%AF%86%E7%A0%81%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86.html',[1]),
			t('凯撒密码','https://www.qqxiuzi.cn/bianma/kaisamima.php',[1]),
			t('rot13','https://rot13.com/',[1]),
			t('ROT5/13/18/47','https://www.qqxiuzi.cn/bianma/ROT5-13-18-47.php',[1]),
			t('栅栏密码','https://www.qqxiuzi.cn/bianma/zhalanmima.php',[1]),
			t('栅栏密码(带偏移)','http://rumkin.com/tools/cipher/railfence.php',[1]),
			t('base64/图片互转','http://imgbase64.duoshitong.com/',[0,1]),
			t('Base92编码','http://ctf.ssleye.com/base92.html',[1,5]),
			t('Base91编码','https://www.dcode.fr/base-91-encoding',[1,5]),
			t('Base85编码','https://base85.io/',[1,5]),
			t('Base58编码','https://www.jisuan.mobi/pbHzbBHbzHB6uSJx.html',[1,5]),
			t('Base64编码','https://www.qqxiuzi.cn/bianma/base64.htm',[1,5]),
			t('Base62编码','http://encode-base62.nichabi.com/',[1,5]),
			t('Base32编码','https://www.qqxiuzi.cn/bianma/base.php',[1,5]),
			t('Base16编码','https://www.qqxiuzi.cn/bianma/base.php?type=16',[1,5]),
			t('2进制转字符串','http://www.5ixuexiwang.com/str/from-binary.php',[1,6]),
			t('16进制转字符串','http://www.5ixuexiwang.com/str/from-hex.php',[1,6]),
			t('进制转换(≤36)','http://tool.oschina.net/hexconvert/',[6]),
			t('进制转换(≤64)','https://tool.lu/hexconvert/',[6]),
			t('英文字母大小写转换','https://www.iamwawa.cn/daxiaoxie.html',[3]),
			t('AES/DES/RC4/Rabbit/TripleDes加解密','http://tool.oschina.net/encrypt',[7]),
			t('普莱费尔(playfair)密码加密/解密','http://www.atoolbox.net/Tool.php?Id=912',[1]),
			t('正则测试1','https://regex101.com/',[8]),
			t('正则测试2','http://tool.oschina.net/regex/',[8]),
			t('16进制转ARM指令','http://armconverter.com/hextoarm/',[1,6]),
			t('在线php代码测试','https://glot.io/snippets/fnrzjxfab4',[8]),
			t('在线python2代码测试','https://glot.io/snippets/fns02pjfoe',[8]),
			t('在线Bash命令测试','https://glot.io/snippets/fnrzv89qg6',[8]),
			t('sagemath在线运行','https://sagecell.sagemath.org/',[8]),
			t('JSFiddle在线网页开发','https://jsfiddle.net/',[8]),
			t('Brainfuck/Ook!','https://www.splitbrain.org/services/ook',[1,8]),
			t('Deadfish','https://www.dcode.fr/deadfish-language',[1,8]),
			t('Rockstar','https://codewithrockstar.com/online',[1,8]),
			t('Malbolge','https://zb3.me/malbolge-tools/',[1,8]),
			t('文言文运行/转js','https://ide.wy-lang.org/',[1,8]),
			t('js转文言文','https://zxch3n.github.io/wenyanizer/',[1,8]),
			t('JAVA在线混淆反编译','http://javare.cn/',[1,3]),
			t('json格式化','http://www.bejson.com/jsonviewernew/',[3]),
			t('js/html美化','https://www.html.cn/tool/js_beautify/',[3]),
			t('CSS代码压缩格式化','http://tool.chinaz.com/Tools/CssFormat.aspx',[3]),
			t('文本对比','http://wenbenbijiao.renrensousuo.com/',[3]),
			t('在线文件hash批量计算','http://www.atool.org/file_hash.php',[6,10]),
			t('MD文件在线转换','https://cloudconvert.com/md-converter',[11]),
			t('在线文件转换器','https://cn.office-converter.com/',[11]),
			t('文件转换器','https://convertio.co/zh/',[11]),
			t('百度在线语音合成','https://ai.baidu.com/tech/speech/tts_online',[11,4]),
			t('JWT解码1','http://jwt.calebb.net/',[1,7]),
			t('JWT解码2','https://jwt.io/',[1,7]),
			t('MD5查询(SOMD5)','https://www.somd5.com/',[9]),
			t('MD5查询(CMD5)','https://www.cmd5.com/',[9]),
			t('在线素数分解数据库','http://factordb.com/',[9]),
			t('在线UUID生成','http://www.uuid.online/',[]),
			t('Unicode编码','http://tool.chinaz.com/tools/unicode.aspx',[1]),
			t('UTF-8编码','http://tool.chinaz.com/tools/utf-8.aspx',[1]),
			t('URL编码解码','http://tool.chinaz.com/tools/urlencode.aspx',[1]),
			t('Unix时间戳','http://tool.chinaz.com/tools/unixtime.aspx',[1]),
			t('Ascii/Native编码互转','http://tool.chinaz.com/tools/native_ascii.aspx',[1]),
			t('Hex编码解码','http://stool.chinaz.com/hex',[1]),
			t('Html编码解码','http://tool.chinaz.com/tools/htmlencode.aspx',[1]),
			t('UUencode编码','http://web.chacuo.net/charsetuuencode',[1]),
			t('图片文件压缩','https://tinypng.com/',[0]),
			t('CTF在线工具集','https://www.wishingstarmoye.com/',[12]),
			t('综合编码解码','http://www.angelwatt.com/coding/character_translator.php',[12,1]),
			t('综合编码','https://r12a.github.io/app-conversion/',[12,1]),
			t('智能合约工具','/tools/blockchain/ethereum',[12]),
			t('在线魔方求解器','https://rubiks-cube-solver.com/zh/',),
			t('libc database search','https://libc.blukat.me/',),
		],
		constant_table:[
			{'title':'ASCII码对照表','url':'http://ascii.911cha.com/'},
			{'title':'CTF Wiki','url':'https://wiki.x10sec.org/'},
			{'title':'CTF Wiki','url':'https://ctf-wiki.github.io/ctf-wiki/'},
			{'title':'USB键盘码','url':'constant/keyboardcode.html'},
			{'title':'二维码介绍','url':'https://www.thonky.com/qr-code-tutorial/introduction'},
		],
		tool_download:[
			// {'name':'', 'url':'', 'type':''},
			{'name':'PentestBox', 'url':'https://pentestbox.org/zh/', 'type':'渗透环境'},
			{'name':'中国菜刀', 'url':'http://www.caidaomei.com/', 'type':'菜刀'},
			{'name':'Beyond Compare(文件/文本对比)', 'url':'http://www.scootersoftware.com/download.php','type':'文本对比'},
			{'name':'D盾防火墙','url':'http://www.d99net.net/','type':'webshell检测'},
			{'name':'typora-markdown编辑器','url':'https://typora.io/','type':'文本编辑器'},
			{'name':'JohnTheRipper', 'url':'https://www.openwall.com/john/', 'type':'密码爆破'},
			{'name':'JohnTheRipper-GUI', 'url':'https://openwall.info/wiki/john/johnny', 'type':'密码爆破'},
			{'name':'dtmf-decoder音频数字键识别', 'url':'https://github.com/ribt/dtmf-decoder', 'type':'隐写解码'},
			{'name':'dirsearch', 'url':'https://github.com/maurosoria/dirsearch', 'type':'web扫描'},
			{'name':'rockstar-py', 'url':'https://github.com/yyyyyyyan/rockstar-py', 'type':'编码解码'},
			{'name':'vulhub(漏洞库)', 'url':'https://github.com/vulhub/vulhub', 'type':'cve库'},
			{'name':'LD_PRELOAD', 'url':'https://github.com/yangyangwithgnu/bypass_disablefunc_via_LD_PRELOAD', 'type':'web绕过disable_function'},
			{'name':'蚁剑', 'url':'https://github.com/AntSwordProject/antSword.git', 'type':'webshell管理'},
			{'name':'冰蝎', 'url':'https://github.com/rebeyond/Behinder/releases', 'type':'webshell管理'},
			{'name':'php_mt_seed', 'url':'https://www.openwall.com/php_mt_seed/', 'type':'php随机数预测'},
			{'name':'FastJson-RCE', 'url':'https://github.com/CaijiOrz/fastjson-1.2.47-RCE.git', 'type':'fastjson-rce'},
			{'name':'微微二维码', 'url':'https://pc.wwei.cn', 'type':'扫码工具'},
			{'name':'apngasm', 'url':'http://apngasm.sourceforge.net/', 'type':'APNG工具'},
			
			// CTF资源
			// var ctfzy = [
			//     a("http://tools.jb51.net/transcoding","脚本之家编码转换工具"),
			
			//     a("http://www.mamicode.com/info-detail-2252602.html","CTF常见解密网站总结"),
			
			//     a("https://tool.bugku.com/","bug库工具集"),
			//     a("https://www.ctftools.com/down/","CTFtools工具集"),
			//     a("http://www.wechall.net/downloads","wechall工具下载"),
			
			//     a("https://ctftime.org/writeups/","writeup CTF Time"),
			//     a("https://www.ctfwp.com/","writeup CTF Writeup"),
			//     a("https://github.com/susers/Writeups","Writeups"),
			//     a("https://github.com/ctfs","CTFs Writeup"),
			//     a("https://github.com/CTFTraining","CTFTraining赛题复现"),
			//     // a("https://www.bugku.com/ctf.html","BUG库-打谱CTF"),
			//     // a("https://new.bugku.com/","BUG库-论剑场"),
			//     // a("https://nu1lctf.com/","NU1L"),
			//     // a("https://www.xctf.org.cn/","XCTF社区"),
			
			//     a("https://github.com/zardus/ctf-tools","ctf-tools"),
			//     a("https://github.com/0Chencc/CTFCrackTools","CTFCrackTools"),
			//     a("http://routerpwn.com/","routerpwn-路由器漏洞"),
			// ];
			
		],
		practise_online:[
			// {'name':'', 'url':''},
			{'name':'BUUCTF', 'url':'https://buuoj.cn/'},
			{'name':'XCTF攻防世界', 'url':'https://adworld.xctf.org.cn/'},
			{'name':'CTFhub(Venom战队)', 'url':'https://www.ctfhub.com/'},
			{'name':'i春秋CTF训练营', 'url':'https://www.ichunqiu.com/battalion'},
			{'name':'看雪CTF题库', 'url':'https://ctf.pediy.com/itembank.htm'},
			{'name':'合天网安实验室', 'url':'http://www.hetianlab.com/'},
			{'name':'CG-CTF(X1cT34m团队)', 'url':'http://cgctf.nuptsast.com/'},
			{'name':'xmctf(星盟安全)', 'url':'http://120.79.228.110/challenges'},
			{'name':'PWN(星盟安全)', 'url':'http://pwn.eonew.cn/challenge.php'},
			{'name':'空指针(Nu1l团队)', 'url':'https://www.npointer.cn/'},
			{'name':'pwnhub(胖哈勃)', 'url':'https://pwnhub.cn/'},
			{'name':'CTF秀', 'url':'https://ctf.show/'},
			{'name':'wgpsec','url':'https://ctf.wgpsec.org/'},
			{'name':'BugkuCTF', 'url':'https://ctf.bugku.com/'},
			{'name':'AmanCTF', 'url':'http://ctf.194nb.com/'},
			{'name':'信息安全小组', 'url':'http://hackinglab.cn/'},
			{'name':'X计划平台(比赛专用)', 'url':'https://www.linkedbyx.com/'},
			{'name':'WeChall', 'url':'http://www.wechall.net/'},
			{'name':'Hacker101 CTF', 'url':'https://ctf.hacker101.com/'},
			{'name':'hackthebox(渗透)', 'url':'https://www.hackthebox.eu/'},
			{'name':'Jarvis OJ','url':'https://www.jarvisoj.com/'},
			{'name':'实验吧(凉了)', 'url':'http://www.shiyanbar.com/ctf/'},
			{'name':'MOCTF(关闭)', 'url':'http://www.moctf.com/'},
		],
		campaign_list:[
			// 比赛名称(2019-XCTF)
			// 比赛平台连接(直通比赛答题页面)
			// 比赛类型(国际赛、国内赛、校招赛)
			// 参赛形式(每队最多人数)
			// 报名时间范围
			// 比赛时间范围
			// 报名链接
			// 其他备注：如比赛交流QQ群、比赛奖励、计分方式
			
			// c('名称','答题页面',
			// 	'类型','人数',
			// 	sj('2020年00月00日-报名开始','2020年00月00日-报名结束','2020年00月00日-比赛开始','2020年00月00日-比赛结束','备注'),
			// 	'报名链接','备注'),
			
			c('N1CTF','https://ctf2020.nu1l.com/',
				'未知','未知',
				sj('','','2020年10月17日 08:00','2020年10月19日 08:00',''),
				'https://ctf2020.nu1l.com/',''),
			c('字节跳动“安全范儿” 高校挑战赛','https://bytectf2020.xctf.org.cn/',
				'高校赛','4',
				sj('2020年09月15日','2020年10月22日 23:59','2020年10月24日','2020年10月25日',''),
				'https://security.bytedance.com/activity/','QQ群：328598614，参赛者必须为全日制在读学生，前20名队伍进入决赛'),
			c('西湖论剑网络安全大赛','https://game-pc.gcsis.cn/',
				'政府赛','3',
				sj('2020年09月14日 00:00','2020年10月03日 24:00','2020年10月08日 09:00','2020年10月08日 18:00',''),
				'https://game-pc.gcsis.cn/','<a href="https://mp.weixin.qq.com/s/kM2AaP4Oszk8WekOC83LWw" target="_blank">参考链接</a>'),
			c('2020-巅峰极客','https://www.ichunqiu.com/2020dfjk',
				'政府赛','4',
				sj('2020年09月07日 10:00','2020年09月22日 10:00','2020年09月26日 10:00','2020年09月26日 18:00',''),
				'https://www.ichunqiu.com/2020dfjk','QQ群：612273484'),
			c('“羊城杯”网络安全大赛','http://gzcup2020.linkedbyx.com/',
				'政府赛','4',
				sj('','2020年09月05日 24:00','2020年09月10日 09:00','2020年09月11日 09:00',''),
				'http://gzcup2020.linkedbyx.com/','官方QQ群：1148320638'),
			c('DDCTF','https://ddctf.didichuxing.com/',
				'高校赛','2',
				sj('2020年08月19日','2020年09月04日 11:00','2020年09月04日 11:00','2020年09月06日 11:00',''),
				'https://ddctf.didichuxing.com/','QQ群：1126082182'),
			c('GACTF 2020','https://gactf2020.xctf.org.cn/',
				'国际赛','组队',
				sj('','2020年08月31日 09:00','2020年08月29日 09:00','2020年08月31日 09:00',''),
				'https://gactf2020.xctf.org.cn/','Telegram: https://t.me/GACTF QQ群：282546'),
			c('首届“钓鱼城杯”国际网络安全创新大赛','https://dycb.xctf.org.cn/',
				'线上赛','10',
				sj('2020年08月14日 09:00','2020年08月25日 18:00','2020年08月27日 09:00','2020年08月27日 21:00',''),
				'https://dycb.xctf.org.cn/','大赛QQ群：1137625331'),
			// c('2020年新华三杯','http://39.106.157.109/home',
			// 	'组队','3',
			// 	sj('2020年07月25日','2020年08月20日','2020年08月25日','2020年08月25日',''),
			// 	'http://39.106.157.109/home','8月23-24日线上培训'),
			c('安恒八月赛','https://www.linkedbyx.com/taskinfo/1339/detail',
				'安恒月赛','三人一队',
				sj('','2020年08月24日 17:00','2020年08月25日 09:00','2020年08月25日 17:00',''),
				'http://dasctf.com','DASCTF官方QQ群：1070975652(②群)'),
			c('第四届强网杯','https://www.qiangwangbei.com/',
				'组队','10',
				sj('2020年08月03日 10:00','2020年08月21日 09:00','2020年08月22日','2020年08月23日',''),
				'https://www.qiangwangbei.com/','线上赛总群：551228751'),
			c('WMCTF','https://wmctf2020.xctf.org.cn/',
				'国际赛','组队',
				sj('','2020年08月03日 09:00','2020年08月01日 09:00','2020年08月03日 09:00',''),
				'https://wmctf2020.xctf.org.cn/','Telegram: https://t.me/WMCTF QQ群：282546'),
			c('电信“天翼杯”网络安全攻防大赛','https://www.linkedbyx.com/',
				'组队','三人一队',
				sj('2020年07月21日 00:00','2020年07月28日 17:00','2020年7月31日 14:00','2020年7月31日 18:00',''),
				'http://tianyi2020.linkedbyx.com/','<a href="https://mp.weixin.qq.com/s/D4sRF8D9odiZXQf-m4xAZA">相关链接</a>'),
			c('CyBRICS','https://cybrics.net/',
				'国际赛','组队',
				sj('','','2020年07月25日 18:00','2020年07月26日 18:00',''),
				'https://cybrics.net/','<a href="https://adworld.xctf.org.cn/competition/detail?id=145&hash=8aa323a4-ed35-42f1-9761-898cb84d512c.event">相关链接</a>'),
			c('安恒七月赛','https://www.linkedbyx.com',
				'安恒月赛','三人一队',
				sj('','2020年07月24日 20:00','2020年07月25日 10:00','2020年07月25日 15:00',''),
				'http://dasctf.com/',''),
			c('极棒云鼎杯云安全比赛','https://www.xctf.org.cn/ctfs/detail/223/',
				'云靶场挑战赛','不限',
				sj('','','2020年07月11日 10:00','2020年07月12日 22:00',''),
				'http://www.geekpwn.org/zh/index.html',''),
			c('SCTF 2020','https://sctf2020.xctf.org.cn',
				'国际赛','组队',
				sj('','2020年07月06日 09:00','2020年07月04日 09:00','2020年07月06日 09:00',''),
				'https://sctf2020.xctf.org.cn','Telegram: https://t.me/SCTF2020，QQ群：282546'),
			c('安恒六月赛','https://www.linkedbyx.com/',
				'安恒月赛','三人一队',
				sj('','2020年06月24日 22:00','2020年06月25日 09:00','2020年06月26日 21:00','每天09:00~21:00'),
				'https://t.cn/A6L5FaHz','比赛交流群：1070975652'),
			c('第五空间智能安全大赛','https://5space.360.cn/ad5/match/jeopardy/guide?event=3&hash=f34c1d8d-d03b-497e-b463-007dbff7eb79.event',
				'政府赛',4,
				sj('2020年06月01日','2020年06月20日','2020年06月24日 09:00','2020年06月24日 21:00',''),
				'https://5space.360.cn/','大赛QQ群：718962280（请备注队名）'),
			c('RCTF','https://rctf2020.xctf.org.cn',
				'国际赛','组队',
				sj('','2020年06月01日 09:00','2020年05月30日 09:00','2020年06月01日 09:00',''),
				'https://rctf2020.xctf.org.cn','QQ群：282546'),
			c('GKCTF','https://buuoj.cn/',
				'友谊赛',1,
				sj('','','2020年05月24日','2020年05月24日',''),
				'https://buuoj.cn/','防灾科技学院 Gingko 战队主办，QQ群：1071175756'),
			c('De1CTF2020','http://de1ctf2020.xctf.org.cn',
				'国际赛','组队',
				sj('2020年05月02日 09:00','2020年05月04日 09:00','2020年05月02日 09:00','2020年05月04日 09:00',''),
				'http://de1ctf2020.xctf.org.cn','<a href="https://mp.weixin.qq.com/s?__biz=MjM5NDU3MjExNw==&mid=2247488460&idx=1&sn=09f2e282cedae1d4426c17af89196d2f&chksm=a684e1f691f368e060d13677af5677903b3f089d696fe812f9f1c44d9572fce3e71c26ce1301&mpshare=1&scene=23&srcid=&sharer_sharetime=1586783771240&sharer_shareid=e4071e07f2fb853fb803cb29aaa379c1#rd" target="_blank">比赛介绍<a>'),
			c('第二届“网鼎杯”网络安全大赛','https://www.ichunqiu.com/competition/detail/196',
				'线上初赛',4,
				sj('2020年03月13日 10:00','2020年04月25日 17:00','2020年05月10日 09:00','2020年05月10日 17:00',''),
				'https://www.wangdingcup.com/','<a href="https://www.wangdingcup.com/" target="_blank">比赛介绍<a>'),
			c('看雪.安恒2020 KCTF 春季赛','https://ctf.pediy.com/game-team_list-11-9',
				'攻防赛',5,
				sj('','','2020年04月15日 12:00','2020年05月15日 12:00',''),
				'https://ctf.pediy.com/','<a href="https://mp.weixin.qq.com/s?__biz=MjM5NTc2MDYxMw==&mid=2458304662&idx=5&sn=ff66bc444965b2e3c90870fb7bc80767&chksm=b181f01c86f6790ac5c687e6f28fa61e4e13aa873868e04e8cbfce57e62bb9588a0aaca06351&mpshare=1&scene=23&srcid=&sharer_sharetime=1586563566532&sharer_shareid=57fa84f70a6f94253b5019591d35baaf#rd" target="_blank">比赛介绍<a>'),
			c('数字创新大赛/虎符网络安全赛','https://www.ichunqiu.com/competition/detail/199',
				'线上初赛',4,
				sj('2020年03月10日 10:00','2020年04月13日 10:00','2020年04月19日 09:00','2020年04月19日 17:00',''),
				'https://www.ichunqiu.com/hfctf','<a href="https://www.qianxin.com/2020/DCICHF/" target="_blank">比赛介绍<a>'),
			c('高校战“疫”网络安全分享赛','https://adworld.xctf.org.cn/match/guide?event=133&hash=2c3ce9b1-cba8-409d-b0a6-68fcbc2733ff.event',
				'国内赛','组队',
				sj('','','2020年03月07日 09:00','2020年03月09日 09:00',''),
				'http://gxzy.xctf.org.cn/','<a href="https://www.xctf.org.cn/ctfs/detail/207/" target="_blank">比赛介绍<a>'),
			c('“合天杯”御宅战疫','http://ipk.erangelab.com/studio/ctf',
				'国内赛',1,
				sj('','','2020年02月29日 14:00','2020年02月29日 17:00',''),
				'http://ipk.erangelab.com/','<a href="https://www.freebuf.com/column/227974.html" target="_blank">相关链接<a>'),
			c('安恒杯月赛之以赛战“疫”','https://www.linkedbyx.com/taskinfo/988/detail',
				'国内赛',1,
				sj('2020年02月24日','2020年02月26日 17:30','2020年02月26日 13:30','2020年02月26日 17:30',''),
				'https://www.linkedbyx.com/taskinfo/988/detail',''),
			c('2020春秋杯“新春战疫”','https://race.ichunqiu.com/game-gyctf',
				'国内赛',1,
				sj('2020年02月13日','2020年02月18日','2020年02月21日 12:00','2020年02月23日 22:00','每天12:00-22:00'),
				'https://www.ichunqiu.com/game-gyctf','官方q群1028988858 官方抖音号GAME.CTF'),
			// 元旦空指针web公开赛：https://www.npointer.cn/index.html
			// 元旦拼图：http://aidpuzzle.venomsec.org
			c('安恒月赛(2020元旦)','https://www.linkedbyx.com/taskinfo/941/detail',
				'国内赛',1,
				sj('2019年12月23日 00:00','2020年01月01日 17:30','2020年01月01日 13:30','2020年01月01日 17:30',''),
				'https://www.linkedbyx.com/','官方QQ群580275770'),
			c('XMan冬令营选拔赛','http://xman2019.xctf.org.cn/',
				'冬令营选拔赛',1,
				sj('','2019年12月21日 18:00','2019年12月21日 10:00','2019年12月21日 18:00',''),
				'http://xman2019.xctf.org.cn/','<a href="https://dwz.cn/TH7msdAb">查看详情</a>'),
			c('2019-GXY_CTF','https://www.linkedbyx.com/taskinfo/939/detail',
				'校招赛',3,
				sj('2019年12月20日','2019年12月21日 10:00','2019年12月21日 10:00','2019年12月21日 22:00',''),
				'https://reg.linkedbyx.com/register/ec454693419eaeb8ff8d6ccf9eab51e7','官方QQ群670829799'),
		],
		related_link:[
			l('pcat','https://github.com/phith0n','github'),
			l('pcat','https://www.cnblogs.com/pcat/','cnblogs'),
			l('小西','https://momomoxiaoxi.com/','blog'),
			l('evoA','https://evoa.me/','blog'),
			l('glzjin','https://github.com/glzjin','github'),
			l('Ex','http://blog.eonew.cn/','blog'),
			l('三叶草','https://www.sycsec.com/','team'),
			l('Cl4y','http://www.cl4y.top/','blog'),
			l('Lich','http://blog.lich.xin/','blog'),
			l('道格实验室','https://www.d0g3.cn/','team'),
			l('星盟安全','https://www.xmcve.com/','team'),
			l('米斯特安全','http://www.acmesec.cn/','team'),
			l('Tiaonmmn','https://tiaonmmn.github.io/','blog'),
			l('CTF Writeup官方群',addgroup+'7b2267726f757055696e223a3933373838363431302c2274696d655374616d70223a313537363733353834322c22617574684b6579223a2273336d6d444b6e6c5241676a466245566b4674774c2f33317142742b4e667a71374654717174675464764d484b4245764b7549597867566b2b31554a55635876227d','group'),
			l('Black Watch',addgroup+'7b2267726f757055696e223a3838313733353036312c2274696d655374616d70223a313537363733363331382c22617574684b6579223a223954536d51317939556762773834663762683647356a42304366746b31326e33467a766d4c727a6a62396c515866446d70372f3162612b43755243314b6d4d46227d','group'),
			l('CTF学习交流',addgroup+'7b2267726f757055696e223a3437333833313533302c2274696d655374616d70223a313537363733363536362c22617574684b6579223a226345366b774975775275734c65517a6c6a503456645969516b48744c67506d476851734242795a414d685561304c3777794637486b6e4248626c5653414c366f227d','group'),
			l('CTF网址导航','https://ctf.gs/','navigation'),
			l('吾爱破解','https://www.52pojie.cn/','forum'),
			l('CTF Time','https://ctftime.org/','navigation'),
			l('FreeBuf','https://www.freebuf.com/','forum'),
			l('安全客','https://www.anquanke.com/','forum'),
			l('先知社区','https://xz.aliyun.com/','forum'),
			l('看雪论坛','https://bbs.pediy.com/','forum'),
			l('T00ls','https://www.t00ls.net/','forum'),
			l('D0g3','https://www.0akarma.com/','blog'),
		],
	},
	methods: {
		screen: function () {
			$(".tool_box").each((i,box) => {
				if(this.tools_screen){
					if($(box).html().indexOf(this.tools_screen) > 0){
						$(box).show();
					}else{
						$(box).hide();
					}
				}else{
					$(box).show();
				}
			});
		}
	},
	computed:{}
});
let check_account = function(account){
	encrypt = encode_account(account);
	for(let i in account_list){
		if(encrypt === account_list[i]) return true;
	}
	return false;
}
let encode_account = function(account){
	return md5.base64(md5('t1m'+account+account+'ctf'));
}
var mask = new Vue({
	el: '#mask',
	data: {
		show_mask: true,
		qq: '',
		message: ''
	},
    methods:{
		enter_user:function(){
			try{
				if(check_account(this.qq)){
					Cookies.set('u',Base64.encode(this.qq),cout);
					location.reload();
				}else{
					this.message = '非我族类!!!给你两个选择：\n1.加群(216210928)入伙\n2.自行干掉遮罩层(so easy)';
				}
			}finally{
				
			}
		}
	},
    computed:{
		check_user:function(){
			try{
				this.show_mask = !check_account(Base64.decode(Cookies.get('u')));
			}finally{
				return this.show_mask;
			}
		}
	}
});
