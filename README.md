# TelegramBotAPI-Cloudflare-Woker
一个白嫖赛博菩萨Cloudflare Worker的TelegramBotAPI中继网关。可以越过奇怪的防火墙，在嵌入式设备上轻松使用。

# 简介
Telegram的Bot非常好用。速度稳定性都不错。

不过，众所周知的原因，某些地区访问，需要特殊网络方案。

但是，如果我希望给我的电瓶车，咖啡机，国内服务器部署特殊网络方案，自然难度和成本都大大增加（某些服务器部署了proxy就等着封……妈蛋的）

所以，利用赛博菩萨的worker，做一个访问通达的程序，是优解。

# 部署
1. 把代码放入worker内
   ![image](https://github.com/user-attachments/assets/65907082-e9d9-468a-9c9c-324e5d86a290)
   ![image](https://github.com/user-attachments/assets/c93b1d21-1ccf-47af-b5a0-fb23c4a622fa)
   ![image](https://github.com/user-attachments/assets/84cec0ca-2f5d-4140-b189-51eaaeeff1ce)

  将仓库内的`woker.js`放入代码编辑区。

  **记得点击部署哈**
   
3. 修改密钥
   代码的13行：
```
const auths = ['xxxxxxxxxxxxx', 'yyyyyyyyyyyyy']
```
   就是简易的访问密钥。自己部署的时候，随意修改下即可。

4. 跑起来
   编辑完成，保存后，Worker就成功启动。
5. 访问
```bash
curl --request POST \
--url https://<Your-domain-url/sendMessage \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'Key: xxxxxxxxxxxxxx' \ # <----你自己修改的密钥
--header 'bot_token: <Bot-Token>' \
--data 'text=<b> hello , Here </b>' \
--data chat_id=-1002114987005 \
--data parse_mode=html 
```

# 关于
- 本产品基于Apache协议开源。
- 作者 米哈( [@MrMiHa](https://t.me/MrMiHa) )是一个苦逼程序员，不是煤场奴工，有问题别太理直气壮的跑来下命令。
- 讨论群组是 : https://t.me/DeveloperTeamGroup 欢迎加入后玩耍。实在搞不懂部署的，也可以群里问问。随缘解答。
- 随意Fork，记得保留`关于`的内容。

