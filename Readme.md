# Command for activation of Cloudflared terminal with subdomains

## Table of content

[1. Login](#1-cloudflared-tunnel-login)\
[2. create Tunnel](#2-create-a-tunnel)\
[3. config.yml](#3-set-up-a-configuration-file-configureyml)\
[4. routes to subdomain](#4-route-your-domain-dns)\
[5. start the Tunnel](#5-start-the-tunnel)\
[6. check all Tunnel](#6-check-existing-tunnels)\
[7. check logs](#7-check-cloudflare-logs)\
[8. update cloudflared version](#8-update-cloudflared-version)

## 1. cloudflared tunnel login

```bat
cloudflared tunnel login
```

## 2. Create a Tunnel

```bat
 # This generates a tunnel UUID.

 cloudflared tunnel create my-tunnel
```

## 3. Set Up a Configuration File (configure.yml)

```yml
tunnel: YOUR_TUNNEL_UUID
credentials-file: C:\Users\YourUser\.cloudflared\YOUR_TUNNEL_UUID.json

ingress:
  - hostname: yourdomain.com
    service: http://localhost:3000
  - service: http_status:404
```

## 4. Route Your Domain (DNS)

```bat
cloudflared tunnel route dns my-tunnel yourdomain.com

# cloudflared tunnel route dns express-tunnel mao.irfans.dev

```

## 5. Start the Tunnel

```bat
cloudflared tunnel run my-tunnel
```

## 6. Check Existing Tunnels

```bat
cloudflared tunnel list
# or cloudflared tunnel info my-tunnel

```

## 7. Check Cloudflare logs

```bat
cloudflared tunnel log
```

## 8. Update Cloudflared Version:

```bat
cloudflared update
```

# 9. check generated avatar

![Avatar](https://mao.irfans.dev/avatar/image-1741344211974-143278984.png)
