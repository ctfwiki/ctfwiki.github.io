<style>
table th:first-of-type {
	width: 177px;
}
table {
    border-spacing: 0;
    border-collapse: collapse;
}
table th,table td {
    padding: 6px 13px;
    border: 1px solid #dfe2e5;
    text-align: left;
}
table tr:nth-child(2n) {
    background-color: #f6f8fa;
}
</style>
### 在线工具

#### 目录说明

1. 通用的js、css文件放在本目录对应文件夹下
2. 每个工具其他代码全放到单独的文件夹中


#### ctf在线工具

- 编码解密
	- 字符串编码
		<table>
			<thead>
				<tr>
					<th>编码名称</th>
					<th>示例（以 flag{fl4g_1s_n0t_h3r3} 为例）</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>
						<a href="base/index.html">base全家桶</a>
					</td>
					<td>
						<p>
							base16: 666c61677b666c34675f31735f6e30745f683372337d<br>
							base32: MZWGCZ33MZWDIZ27GFZV63RQORPWQM3SGN6Q====<br>
							base64: ZmxhZ3tmbDRnXzFzX24wdF9oM3IzfQ==
						</p>
					</td>
				</tr>
				<tr>
					<td>
						摩尔斯电码翻译
					</td>
					<td>
						-
					</td>
				</tr>
				<tr>
					<td>
						<a href="core_values/index.html">核心价值观编码</a>
					</td>
					<td>
						<p>
							公正公正公正诚信文明公正民主公正法治法治诚信民主公正公正公正友善公正和谐自由公正法治平等友善敬业和谐民主法治和谐平等诚信平等公正诚信自由和谐富强法治自由平等友善敬业公正爱国和谐和谐法治文明和谐和谐法治友善法治
						</p>
					</td>
				</tr>
				<tr>
					<td>
						<a href="peigen/index.html">培根密码</a>
					</td>
					<td>
						（待加密文本仅支持字母）
					</td>
				</tr>
				<tr>
					<td>
						当铺密码
					</td>
					<td>
						<p>
							特征特点：密文由[0-9]数字组成（以当前汉字有多少笔画出头，就是转化成对应的数字） 密文：0123456789 原文：口由中人工大王夫井羊非 在线解密&amp;工具： <a href="http://www.zjslove.com/3.decode/dangpu/index.html">http://www.zjslove.com/3.decode/dangpu/index.html</a>
						</p>
					</td>
				</tr>
				<tr>
					<td>
						<a href="aaencode/index.html">AAEncoder</a>
					</td>
					<td>
						<p>
							ﾟωﾟﾉ= /｀ｍ´）ﾉ ~┻━┻   //*´∇｀*/ ['_']; o=(ﾟｰﾟ)  =_=3; c=(ﾟΘﾟ) =(ﾟｰﾟ)-(ﾟｰﾟ); (ﾟДﾟ) =(ﾟΘﾟ)= (o^_^o)/ (o^_^o);(ﾟДﾟ)={ﾟΘﾟ: '_' ,ﾟωﾟﾉ : ((ﾟωﾟﾉ==3) +'_') [ﾟΘﾟ] ,ﾟｰﾟﾉ :(ﾟωﾟﾉ+ '_')[o^_^o -(ﾟΘﾟ)] ,ﾟДﾟﾉ:((ﾟｰﾟ==3) +'_')[ﾟｰﾟ] }; (ﾟДﾟ) [ﾟΘﾟ] =((ﾟωﾟﾉ==3) +'_') [c^_^o];(ﾟДﾟ) ['c'] = ((ﾟДﾟ)+'_') [ (ﾟｰﾟ)+(ﾟｰﾟ)-(ﾟΘﾟ) ];(ﾟДﾟ) ['o'] = ((ﾟДﾟ)+'_') [ﾟΘﾟ];(ﾟoﾟ)=(ﾟДﾟ) ['c']+(ﾟДﾟ) ['o']+(ﾟωﾟﾉ +'_')[ﾟΘﾟ]+ ((ﾟωﾟﾉ==3) +'_') [ﾟｰﾟ] + ((ﾟДﾟ) +'_') [(ﾟｰﾟ)+(ﾟｰﾟ)]+ ((ﾟｰﾟ==3) +'_') [ﾟΘﾟ]+((ﾟｰﾟ==3) +'_') [(ﾟｰﾟ) - (ﾟΘﾟ)]+(ﾟДﾟ) ['c']+((ﾟДﾟ)+'_') [(ﾟｰﾟ)+(ﾟｰﾟ)]+ (ﾟДﾟ) ['o']+((ﾟｰﾟ==3) +'_') [ﾟΘﾟ];(ﾟДﾟ) ['_'] =(o^_^o) [ﾟoﾟ] [ﾟoﾟ];(ﾟεﾟ)=((ﾟｰﾟ==3) +'_') [ﾟΘﾟ]+ (ﾟДﾟ) .ﾟДﾟﾉ+((ﾟДﾟ)+'_') [(ﾟｰﾟ) + (ﾟｰﾟ)]+((ﾟｰﾟ==3) +'_') [o^_^o -ﾟΘﾟ]+((ﾟｰﾟ==3) +'_') [ﾟΘﾟ]+ (ﾟωﾟﾉ +'_') [ﾟΘﾟ]; (ﾟｰﾟ)+=(ﾟΘﾟ); (ﾟДﾟ)[ﾟεﾟ]='\\'; (ﾟДﾟ).ﾟΘﾟﾉ=(ﾟДﾟ+ ﾟｰﾟ)[o^_^o -(ﾟΘﾟ)];(oﾟｰﾟo)=(ﾟωﾟﾉ +'_')[c^_^o];(ﾟДﾟ) [ﾟoﾟ]='\"';(ﾟДﾟ) ['_'] ( (ﾟДﾟ) ['_'] (ﾟεﾟ+(ﾟДﾟ)[ﾟoﾟ]+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ (ﾟｰﾟ)+ ((o^_^o) +(o^_^o))+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ ((ﾟｰﾟ) + (ﾟΘﾟ))+ (ﾟｰﾟ)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ (ﾟｰﾟ)+ (ﾟΘﾟ)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ (ﾟｰﾟ)+ ((ﾟｰﾟ) + (o^_^o))+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ ((ﾟｰﾟ) + (o^_^o))+ (o^_^o)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ (ﾟｰﾟ)+ ((o^_^o) +(o^_^o))+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ ((ﾟｰﾟ) + (ﾟΘﾟ))+ (ﾟｰﾟ)+ (ﾟДﾟ)[ﾟεﾟ]+((o^_^o) +(o^_^o))+ (ﾟｰﾟ)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ (ﾟｰﾟ)+ ((ﾟｰﾟ) + (o^_^o))+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ (o^_^o)+ ((ﾟｰﾟ) + (o^_^o))+ (ﾟДﾟ)[ﾟεﾟ]+((o^_^o) +(o^_^o))+ (ﾟΘﾟ)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ ((o^_^o) +(o^_^o))+ (o^_^o)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ (o^_^o)+ ((ﾟｰﾟ) + (o^_^o))+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ ((ﾟｰﾟ) + (ﾟΘﾟ))+ ((o^_^o) +(o^_^o))+ (ﾟДﾟ)[ﾟεﾟ]+((o^_^o) +(o^_^o))+ (c^_^o)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ ((o^_^o) +(o^_^o))+ (ﾟｰﾟ)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ (o^_^o)+ ((ﾟｰﾟ) + (o^_^o))+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ ((ﾟｰﾟ) + (ﾟΘﾟ))+ (c^_^o)+ (ﾟДﾟ)[ﾟεﾟ]+((o^_^o) +(o^_^o))+ (o^_^o)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ ((o^_^o) +(o^_^o))+ ((o^_^o) - (ﾟΘﾟ))+ (ﾟДﾟ)[ﾟεﾟ]+((o^_^o) +(o^_^o))+ (o^_^o)+ (ﾟДﾟ)[ﾟεﾟ]+(ﾟΘﾟ)+ ((ﾟｰﾟ) + (o^_^o))+ ((ﾟｰﾟ) + (ﾟΘﾟ))+ (ﾟДﾟ)[ﾟoﾟ]) (ﾟΘﾟ)) ('_');
						</p>
					</td>
				</tr>
				<tr>
					<td>
						JJEncoder
					</td>
					<td>
						<p>
							-
						</p>
					</td>
				</tr>
				<tr>
					<td>
						PPEncoder
					</td>
					<td>
						<p>
							ppencode-Perl把Perl代码转换成只有英文字母的字符串。<br>
							http://namazu.org/~takesako/ppencode/demo.html
						</p>
					</td>
				</tr>
				<tr>
					<td>
						RREncoder
					</td>
					<td>
						<p>
							rrencode可以把ruby代码全部转换成符号。<br>
							http://www.lab2.kuis.kyoto-u.ac.jp/~yyoshida/rrencode.html
						</p>
					</td>
				</tr>
				<tr>
					<td>
						JSfuck
					</td>
					<td>
						<p>
							http://www.jsfuck.com/
						</p>
					</td>
				</tr>
				<tr>
					<td>
						jother
					</td>
					<td>
						<p>
							http://tmxk.org/jother/
						</p>
					</td>
				</tr>
				<tr>
					<td>
						brainfuck
					</td>
					<td>
						<p>
							https://www.splitbrain.org/services/ook
						</p>
					</td>
				</tr>
			</tbody>
		</table>
	- 文件编码
		- base64与图片互转/<a href="base/filebase64.html">任意文件转base64</a>
		- <a href="qrcode/index.html">二维码（创建/识别内容）</a>
- <a href="blockchain/ethereum.html">智能合约</a>