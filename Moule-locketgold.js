#!name=Locket Gold 
#!desc=By:  Phạm Trọng-GenzPVPT.Com

[Script]
revenuecat = type=http-response, pattern=^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$), script-path=https://raw.githubusercontent.com/Trong1726/File-K-ch-Ho-t-Vip/refs/heads/main/Locketgold1.js, requires-body=true, max-size=-1, timeout=60

deleteHeader = type=http-request, pattern=^https:\/\/api\.revenuecat\.com\/.+\/(receipts|subscribers), script-path=https://raw.githubusercontent.com/Trong1726/File-K-ch-Ho-t-Vip/refs/heads/main/Locketgold.js, timeout=60

[MITM]
hostname = %APPEND% api.revenuecat.com
