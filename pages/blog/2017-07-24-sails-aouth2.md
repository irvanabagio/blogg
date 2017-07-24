---
layout: post
title: Sails oauth2
path: "/blog/sails-oauth2.html"
date: 2017-07-24
tags: sails, oauth
description: "Sails oauth2"
featured: false
---

## Start application

```bash
sails lift
```

## Start server for trustedClient.js and untrustedClient.js (for example)

```bash
cd examples
```

```bash
node trustedClient.js
```

```bash
node untrustedClient.js
```

## Authorization code grant

```bash
http://localhost:81/oauth/authorize?client_id=YOOS1PK7I5&response_type=code&redirect_uri=http://localhost:1338&scope=http://localhost:81
```
## Once the authorization code is received, exchange it against an access token with the following request

```bash
curl -XPOST -d 'client_id=YOOS1PK7I5&client_secret=JvYTKjvlVsqIImNkeUeiZJbNsXWZ6s&grant_type=authorization_code&redirect_uri=http://localhost:1338&code=CODE' http://localhost:81/oauth/token
```

Resource owner password flow (this flow is only available if the client is among the trusted clients)

```bash
curl -XPOST "http://localhost:1337/oauth/token" -d "grant_type=password&client_id=CLIENT_ID&client_secret=CLIENT_SECRET&username=USERNAME&password=PASSWORD"
```

Choose one of the method above, this returns an access token and a refresh token in a the following json format

```json
{
  "access_token":"wz80aFzNidTAE8hE0Yom2bi9zQNQ22VJcAoSN2lxm6vEBHV0N11xmDiW94Q3LZCsACv41H2CPhKeUO95vydzNbSytlyc6BGMRhbYQ5cqRK4klNxect3p6wim1O8COV1rplbcRO99QCBuRDPLo9aS92ThtSjqZK3mCceFabiy566EctdVT8xSBpwzCyqWw9tONedgIrEsL8SMdPNL8hVvDNJ7W77DE2nOZnFhrFYciS7RccPkc7vVuYcJ4Q49xEM",
  "refresh_token":"VIuRSlvAYLgn0xMaBHTF0LUxdyqR3i6hNwwEPu5iPqXRXLOftYkKQRuRfMhPqSAaY3Ym1gVKYQqtKrUQLg5xOB0MzBucEMd21Gzy0b5karTuuUrQTPzF96uCztOh37tQxplX9OQSlcO96N7N3RgN06nJxMLFQRZIalZkTtpRBSJc7Vs79tDkOv8dm95WSdYefnfoOuJSeUtc3D5d2XiEWXkjUHS8O5vm9rRhoGrpNAUHfijdLIYR6QzY3urAV5AI",
  "expires_in":3600,
  "token_type":"Bearer"
}
```

Once the access_token is retrieved, it needs to be passed in the Authorization header of each request to the API as in the following example:

```bash
curl -H 'Authorization: Bearer ACCESS_TOKEN' -GET "http://localhost:1337/api/info
```


## Footnotes

- Handle trusted and untrusted application
  1. Trusted application will use resource owner's password credential (no login form displayed to the user)
  2. Untrusted application will use authorization code grant (login form displayed and presenting the Allow / Deny options)
