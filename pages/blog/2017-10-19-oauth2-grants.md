---
layout: post
title: Oauth2 grants
path: "/blog/oauth2-grants.html"
date: 2017-10-19
tags: grants, oauth
description: "grants oauth2"
featured: false
---

# Grants

OAuth let's to authenticate using different methods. A grant is a method of acquiring an access token. Deciding which grants to implement depends on the type of client the end user will be using, and the experience intended for the users.

- Client Credentials Grant: Example when two machines need to communicate to each other, e.g. two APIs.

- Authorization Code Grant: The flow that occurs when user login to a service using Twitter, GitHub, Google etc.

- Implicit Grant: Similar to Authorization Code, only it's user-based.

- Password Grant: Users login using combination username/email and password.

- Refresh Grant: Used to generate a new token when the old one has expires.

Read [Official specification](https://tools.ietf.org/html/rfc6749).

# Which grants

![grants](https://oauth2.thephpleague.com/images/grants.svg "Oauth2 grants")

Image Source: _https://oauth2.thephpleague.com/authorization-server/which-grant/_