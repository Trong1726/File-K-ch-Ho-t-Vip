# Shadowrocket: 2025-02-08 20:16:42
[General]
bypass-system = true
skip-proxy = 192.168.0.0/16,10.0.0.0/8,172.16.0.0/12,localhost,*.local
tun-excluded-routes = 10.0.0.0/8, 100.64.0.0/10, 127.0.0.0/8, 169.254.0.0/16, 172.16.0.0/12, 192.0.0.0/24, 192.0.2.0/24, 192.88.99.0/24, 192.168.0.0/16, 198.51.100.0/24, 203.0.113.0/24, 224.0.0.0/4, 255.255.255.255/32, 239.255.255.250/32
dns-server = 119.29.29.29,114.114.114.114,223.5.5.5,system
fallback-dns-server = system
ipv6 = false
prefer-ipv6 = false
dns-fallback-system = false
dns-direct-system = false
icmp-auto-reply = true
always-reject-url-rewrite = false
private-ip-answer = false
update-url = https://whatshub.top/config/shadowrocket_basic.conf

[Proxy Group]
# 该配置策略组可实现特定规则走指定策略或节点；如想让netflix走新加坡节点 那么可以在相应代理分组里勾选新加坡节点；
# 更改代理分组策略的步骤(以🎥 Netflix策略为例)：点击界面底部配置--点击配置文件"ⓘ"符号---代理分组---点击🎥 Netflix策略的"ⓘ"符号---勾选🇸🇬 新加坡节点--保存。(新版小火箭只需首页下拉即可调出代理分组界面）

# ♻️ ALL策略表示对所有节点进行测速并选择延迟最低的节点；测速间隔600秒，容差100ms；
# 若不想用某些特定节点 可以通过正则排除 例：♻️ ALL = url-test,url=http://www.gstatic.com/generate_204,interval=600,tolerance=100,timeout=5,policy-regex-filter=^(?!.*?(国内|限速|试用)).*$
# 也可以让指定机场参与测速 比如你的订阅连接的备注名是 YBNET 就套用以下示例：（新版已支持订阅选择）
# 🚀 策略选择 = select,✈️ 机场选择,🇨🇳 台湾节点,🇬🇧 英国节点,🇯🇵 日本节点,🇭🇰 香港节点,🇸🇬 新加坡节点,🇺🇸 美国节点,🇰🇷 韩国节点,🇷🇺 俄罗斯节点,🇮🇳 印度,🇩🇪 德国,🇨🇦 加拿大,interval=86400,timeout=5,select=0,url=http://www.gstatic.com/generate_204
# ✈️ 机场选择 = url-test,YBNET,interval=600,tolerance=0,timeout=3,select=0,url=http://www.gstatic.com/generate_204


🚀 策略选择 = select,♻️ ALL,🇨🇳 台湾节点,🇬🇧 英国节点,🇯🇵 日本节点,🇭🇰 香港节点,🇸🇬 新加坡节点,🇺🇸 美国节点,🇰🇷 韩国节点,🇷🇺 俄罗斯节点,🇮🇳 印度,🇩🇪 德国,🇨🇦 加拿大,interval=600,timeout=5,select=0,url=http://www.gstatic.com/generate_204
♻️ ALL = url-test,url=http://www.gstatic.com/generate_204,interval=600,tolerance=100,timeout=5,policy-regex-filter=.*
🤖️ 人工智能 = select,🇺🇸 美国节点,🇬🇧 英国节点,🇩🇪 德国,🇨🇦 加拿大, select=0
📲 Telegram = select,🚀 策略选择,🇭🇰 香港节点,🇺🇸 美国节点,🇸🇬 新加坡节点,🇯🇵 日本节点,🇨🇳 台湾节点,🇬🇧 英国节点,🇰🇷 韩国节点, select=0
📹 YouTube = select,🚀 策略选择,🇭🇰 香港节点,🇺🇸 美国节点,🇸🇬 新加坡节点,🇯🇵 日本节点,🇨🇳 台湾节点,🇬🇧 英国节点, 🇰🇷 韩国节点,select=0
🎥 Netflix = select,🚀 策略选择,🇭🇰 香港节点,🇺🇸 美国节点,🇸🇬 新加坡节点,🇯🇵 日本节点,🇨🇳 台湾节点,🇬🇧 英国节点,🇰🇷 韩国节点,select=0
🎬 Disney+ = select,🚀 策略选择,🇭🇰 香港节点,🇺🇸 美国节点,🇸🇬 新加坡节点,🇯🇵 日本节点,🇨🇳 台湾节点,🇬🇧 英国节点,🇰🇷 韩国节点, select=0
🎻 Spotify = select,🚀 策略选择,🇭🇰 香港节点,🇺🇸 美国节点,🇸🇬 新加坡节点,🇯🇵 日本节点,🇨🇳 台湾节点,🇬🇧 英国节点,🇰🇷 韩国节点, select=0
📄 Twitter = select,🚀 策略选择,🇭🇰 香港节点,🇺🇸 美国节点,🇸🇬 新加坡节点,🇯🇵 日本节点,🇨🇳 台湾节点,🇬🇧 英国节点,🇰🇷 韩国节点, select=0
🪙 Paypal = select,🚀 策略选择,🇭🇰 香港节点,🇺🇸 美国节点,🇸🇬 新加坡节点,🇯🇵 日本节点,🇨🇳 台湾节点,🇬🇧 英国节点,🇰🇷 韩国节点, select=0
👤 Facebook = select,🚀 策略选择,🇭🇰 香港节点,🇺🇸 美国节点,🇸🇬 新加坡节点,🇯🇵 日本节点,🇨🇳 台湾节点,🇬🇧 英国节点,🇰🇷 韩国节点, select=0
📖 Reddit = select,🚀 策略选择,🇭🇰 香港节点,🇺🇸 美国节点,🇸🇬 新加坡节点,🇯🇵 日本节点,🇨🇳 台湾节点,🇬🇧 英国节点,🇰🇷 韩国节点, select=0
🐦 Discord = select,🚀 策略选择,🇭🇰 香港节点,🇺🇸 美国节点,🇸🇬 新加坡节点,🇯🇵 日本节点,🇨🇳 台湾节点,🇬🇧 英国节点,🇰🇷 韩国节点, select=0
📽 哔哩哔哩 = select, 🌐 全球直连, 🇭🇰 香港节点, 🇨🇳 台湾节点, select=0
🍿 国外媒体 = select,🚀 策略选择,🇭🇰 香港节点,🇺🇸 美国节点,🇸🇬 新加坡节点,🇯🇵 日本节点,🇨🇳 台湾节点,🇬🇧 英国节点,🇰🇷 韩国节点, select=0
🍔 国内媒体 = select, 🌐 全球直连, 🇭🇰 香港节点, 🇺🇸 美国节点, 🇸🇬 新加坡节点, 🇯🇵 日本节点, 🇨🇳 台湾节点, 🇬🇧 英国节点, select=0
🍟 新浪微博 = select, 🌐 全球直连, 🚀 策略选择, 🇭🇰 香港节点, 🇺🇸 美国节点, 🇸🇬 新加坡节点, 🇯🇵 日本节点, 🇨🇳 台湾节点, 🇬🇧 英国节点,🇰🇷 韩国节点, select=0
Ⓜ️ 微软服务 = select, 🌐 全球直连, 🚀 策略选择, 🇭🇰 香港节点, 🇺🇸 美国节点, 🇸🇬 新加坡节点, 🇯🇵 日本节点, 🇨🇳 台湾节点, 🇬🇧 英国节点,🇰🇷 韩国节点, select=0
🍎 苹果服务 = select, 🌐 全球直连, 🚀 策略选择, 🇭🇰 香港节点, 🇺🇸 美国节点, 🇸🇬 新加坡节点, 🇯🇵 日本节点, 🇨🇳 台湾节点, 🇬🇧 英国节点,🇰🇷 韩国节点, select=0
🎮 游戏平台 = select, 🌐 全球直连, 🚀 策略选择, 🇭🇰 香港节点, 🇺🇸 美国节点, 🇸🇬 新加坡节点, 🇯🇵 日本节点, 🇨🇳 台湾节点, 🇬🇧 英国节点,🇰🇷 韩国节点, select=0


# 以下国家地区节点筛选 请自行根据机场节点名称修改正则

🇭🇰 香港节点 = url-test,url=http://www.gstatic.com/generate_204,interval=600,tolerance=100,timeout=5,policy-regex-filter=(?=.*(港|HK|(?i)Hong))^((?!(台湾|日本|新加坡|美国|韩国|狮城|南朝鲜|US|SG|JP|KR|TW|台灣|美國|韓國|獅城)).)*$
🇨🇳 台湾节点 = url-test,url=http://www.gstatic.com/generate_204,interval=600,tolerance=100,timeout=5,policy-regex-filter=(?=.*(台|TW|(?i)Taiwan))^((?!(港|日|韩|新|美)).)*$
🇺🇸 美国节点 = url-test,url=http://www.gstatic.com/generate_204,interval=600,tolerance=100,timeout=5,policy-regex-filter=(?=.*(美国|美國|US|洛杉矶|西雅图|(?i)States|American))^((?!(香港|台湾|日本|新加坡|韩国|狮城|南朝鲜|SG|JP|KR|HK|TW|台灣|韓國|獅城)).)*$
🇰🇷 韩国节点 = url-test,url=http://www.gstatic.com/generate_204,interval=600,tolerance=100,timeout=5,policy-regex-filter=(?=.*(KR|Korea|KOR|首尔|韩|韓|(?i)Korea))^((?!(香港|台湾|新加坡|美国|狮城|南朝鲜|US|SG|HK|TW|台灣|美國|獅城)).)*$
🇷🇺 俄罗斯节点 = url-test,url=http://www.gstatic.com/generate_204,interval=600,tolerance=100,timeout=5,policy-regex-filter=🇷🇺|俄罗斯|RU|莫斯科|圣彼得堡|喀山|哈尔科夫|乌法|新西伯利亚|下诺夫哥罗德|沃罗涅什
🇬🇧 英国节点 = url-test,url=http://www.gstatic.com/generate_204,interval=600,tolerance=100,timeout=5,policy-regex-filter=🇬🇧|英国|UK|伦敦|英格兰|伯明翰|泰恩河畔纽卡斯尔|利兹|爱丁堡|格拉斯哥|苏格兰
🇯🇵 日本节点 = url-test,url=http://www.gstatic.com/generate_204,interval=600,tolerance=100,timeout=5,policy-regex-filter=(?=.*(日本|JP|(?i)Japan))^((?!(香港|台湾|新加坡|美国|韩国|狮城|南朝鲜|US|SG|KR|HK|TW|台灣|美國|韓國|獅城)).)*$
🇸🇬 新加坡节点 = url-test,url=http://www.gstatic.com/generate_204,interval=600,tolerance=100,timeout=5,policy-regex-filter=(?=.*(新加坡|狮城|SG|(?i)Singapore))^((?!(香港|台湾|日本|美国|韩国|南朝鲜|US|JP|KR|HK|TW|台灣|美國|韓國)).)*$
🇮🇳 印度 = url-test,url=http://www.gstatic.com/generate_204,interval=600,tolerance=100,timeout=5,policy-regex-filter=🇮🇳|印度|IN|IND|孟买|新德里|高知|Republic of India|India
🇩🇪 德国 = url-test,url=http://www.gstatic.com/generate_204,interval=600,tolerance=100,timeout=5,policy-regex-filter=🇩🇪|德国|DEU|DE|柏林|慕尼黑|汉堡|科隆|Germany
🇨🇦 加拿大 = url-test,url=http://www.gstatic.com/generate_204,interval=600,tolerance=100,timeout=5,policy-regex-filter=🇨🇦|加拿大|CA|渥太华
🌐 全球直连 = select, DIRECT

[Rule]

#RULE-SET,https://whatshub.top/rule/AntiAD.list,REJECT
RULE-SET,https://whatshub.top/rule/ai.list,🤖️ 人工智能
RULE-SET,https://whatshub.top/rule/Microsoft.list,Ⓜ️ 微软服务
RULE-SET,https://whatshub.top/rule/Apple.list,🍎 苹果服务
RULE-SET,https://whatshub.top/rule/AppStore.list,🍎 苹果服务
RULE-SET,https://whatshub.top/rule/AppleProxy.list,🚀 策略选择
RULE-SET,https://whatshub.top/rule/Telegram.list,📲 TELEGRAM
RULE-SET,https://whatshub.top/rule/Weibo.list,🍟 新浪微博
RULE-SET,https://whatshub.top/rule/WeChat.list,🌐 全球直连
DOMAIN-KEYWORD,weibo,🍟 新浪微博
RULE-SET,https://whatshub.top/rule/Twitter.list,📄 TWITTER
RULE-SET,https://whatshub.top/rule/PlayStation.list,🎮 游戏平台
RULE-SET,https://whatshub.top/rule/Epic.list,🎮 游戏平台
RULE-SET,https://whatshub.top/rule/Sony.list,🎮 游戏平台
RULE-SET,https://whatshub.top/rule/Steam.list,🎮 游戏平台
DOMAIN-KEYWORD,ubisoft,🎮 游戏平台
RULE-SET,https://whatshub.top/rule/Nintendo.list,🎮 游戏平台
RULE-SET,https://whatshub.top/rule/WanMeiShiJie.list,🎮 游戏平台
DOMAIN-KEYWORD,steam,🎮 游戏平台
RULE-SET,https://whatshub.top/rule/Blizzard.list,🎮 游戏平台
RULE-SET,https://whatshub.top/rule/Spotify.list,🎻 SPOTIFY
RULE-SET,https://whatshub.top/rule/PayPal.list,🪙 PAYPAL
RULE-SET,https://whatshub.top/rule/Facebook.list,👤 FACEBOOK
RULE-SET,https://whatshub.top/rule/Reddit.list,📖 REDDIT
RULE-SET,https://whatshub.top/rule/Discord.list,🐦 DISCORD
RULE-SET,https://whatshub.top/rule/YouTube.list,📹 YOUTUBE
RULE-SET,https://whatshub.top/rule/YouTubeMusic.list,📹 YOUTUBE
RULE-SET,https://whatshub.top/rule/Netflix.list,🎥 NETFLIX
RULE-SET,https://whatshub.top/rule/Disney.list,🎬 DISNEY+
DOMAIN-SUFFIX,api.bilibili.com,📽 哔哩哔哩
RULE-SET,https://whatshub.top/rule/BiliBili.list,📽 哔哩哔哩
RULE-SET,https://whatshub.top/rule/ChinaMedia.list,🍔 国内媒体
RULE-SET,https://whatshub.top/rule/ProxyMedia.list,🍿 国外媒体
RULE-SET,https://whatshub.top/rule/Twitch.list,🚀 策略选择
RULE-SET,https://whatshub.top/rule/Douyu.list,🌐 全球直连
RULE-SET,https://whatshub.top/rule/Google.list,🚀 策略选择
RULE-SET,https://whatshub.top/rule/Proxy.list,🚀 策略选择
DOMAIN-SET,https://whatshub.top/rule/Proxy.list,🚀 策略选择
RULE-SET,https://whatshub.top/rule/ASN-CN.list,🌐 全球直连
FINAL,🚀 策略选择

[URL Rewrite]
^https?://(www.)?g.cn https://www.google.com 302
^https?://(www.)?google.cn https://www.google.com 302

[MITM]
ca-passphrase = Shadowrocket
ca-p12 = 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
enable = true
hostname = api-account.kinemasters.com,us-central1-alight-creative.cloudfunctions.net,api.picsart.com,api.funimate.com,lapi.photomath.net,photos.adobe.io,api.revenuecat.com,app.algoriddim.com,buy.itunes.apple.com,web.vizmato.com,api.reface.video,api.busuu.com,api.calm.com,www.calm.com,api.unfold.app
