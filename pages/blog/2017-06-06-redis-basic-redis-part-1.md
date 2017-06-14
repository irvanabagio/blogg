---
layout: post
title: Redis Basic - Redis part 1
path: "/blog/redis-basic-redis-part-1.html"
date: 2017-06-06
tags: redis, nosql, database
description: "Redis basic"
featured: false
---

- [Redis - Basic](#redis-basic)
- [Redis - Overview](#redis-overview)
    - [Redis Advantages](#redis-advantages)
    - [Redis Versus Other Key-value Stores](#redis-versus-other-key-value-stores)
- [Redis - Environment](#redis-environment)
    - [Install Redis on Ubuntu](#install-redis-on-ubuntu)
    - [Start Redis](#start-redis)
    - [Check If Redis is Working](#check-if-redis-is-working)
    - [Install Redis Desktop Manager on Ubuntu](#install-redis-desktop-manager-on-ubuntu)
- [Redis - Configuration](#redis-configuration)
    - [Redis CONFIG Basic Syntax](#redis-config-basic-syntax)
    - [Edit Configuration](#edit-configuration)
- [Redis - Data types](#redis-data-types)
    - [Strings](#strings)
    - [Hashes](#hashes)
    - [Lists](#lists)
    - [Sets](#Sets)
    - [Sorted Sets](#sorted-sets)


## Redis - Basic

Redis is an open source, BSD licensed, advanced key-value store. It is often referred to as a data structure server, since the keys can contain strings, hashes, lists, sets and sorted sets. Redis is written in C.

## Redis - Overview

Redis is an open source, advanced key-value store and an apt solution for building highperformance, scalable web applications.

Redis has three main peculiarities that sets it apart.

- Redis holds its database entirely in the memory, using the disk only for persistence.

- Redis has a relatively rich set of data types when compared to many key-value data stores.

- Redis can replicate data to any number of slaves.

### Redis Advantages

Following are certain advantages of Redis.

- **Exceptionally fast** − Redis is very fast and can perform about 110000 SETs per second, about 81000 GETs per second.

- **Supports rich data types** − Redis natively supports most of the datatypes that developers already know such as list, set, sorted set, and hashes. This makes it easy to solve a variety of problems as we know which problem can be handled better by which data type.

- **Operations are atomic** − All Redis operations are atomic, which ensures that if two clients concurrently access, Redis server will receive the updated value.

- **Multi-utility tool** − Redis is a multi-utility tool and can be used in a number of use cases such as caching, messaging-queues (Redis natively supports Publish/Subscribe), any short-lived data in your application, such as web application sessions, web page hit counts, etc.

### Redis Versus Other Key-value Stores

- Redis is a different evolution path in the key-value DBs, where values can contain more complex data types, with atomic operations defined on those data types.

- Redis is an in-memory database but persistent on disk database, hence it represents a different trade off where very high write and read speed is achieved with the limitation of data sets that can't be larger than the memory.

- Another advantage of in-memory databases is that the memory representation of complex data structures is much simpler to manipulate compared to the same data structure on disk. Thus, Redis can do a lot with little internal complexity.


## Redis - Environment

### Install Redis on Ubuntu

To install Redis on Ubuntu, go to the terminal and type the following commands −

```
sudo apt-get update 
sudo apt-get install redis-server
```

This will install Redis on your machine.

### Start Redis

```
redis-server
```

### Check If Redis is Working

```
redis-cli 
```

This will open a redis prompt.

```
redis 127.0.0.1:6379>
```

In the above prompt, **127.0.0.1** is your machine's IP address and **6379** is the port on which Redis server is running. Now type the following **PING** command.

```
redis 127.0.0.1:6379> ping 
PONG
```

This shows that Redis is successfully installed on your machine.

### Install Redis Desktop Manager on Ubuntu

To install Redis desktop manager on Ubuntu, just download the package from [https://redisdesktop.com/download](https://redisdesktop.com/download).

Open the downloaded package and install it.

Redis desktop manager will give you UI to manage your Redis keys and data.


## Redis - Configuration

In Redis, there is a configuration file (redis.conf) available at the root directory of Redis. Although you can get and set all Redis configurations by Redis **CONFIG** command.

### Redis CONFIG Basic Syntax

Following is the basic syntax of Redis `CONFIG` command.

#### Syntax

```
redis 127.0.0.1:6379> CONFIG GET CONFIG_SETTING_NAME
```

#### Example

```
redis 127.0.0.1:6379> CONFIG GET loglevel  
1) "loglevel" 
2) "notice"
```

To get all configuration settings, use * in place of CONFIG_SETTING_NAME

#### Example

```
redis 127.0.0.1:6379> CONFIG GET *  
  1) "dbfilename" 
  2) "dump.rdb" 
  3) "requirepass" 
  4) "" 
  5) "masterauth" 
  6) "" 
  7) "unixsocket" 
  8) "" 
  9) "logfile" 
 10) "" 
 11) "pidfile" 
 12) "/var/run/redis.pid" 
 13) "maxmemory" 
 14) "0"
 15) "maxmemory-samples" 
 16) "3" 
 17) "timeout" 
 18) "0" 
 19) "tcp-keepalive" 
 20) "0" 
 21) "auto-aof-rewrite-percentage" 
 22) "100" 
 23) "auto-aof-rewrite-min-size" 
 24) "67108864" 
 25) "hash-max-ziplist-entries" 
 26) "512" 
 27) "hash-max-ziplist-value" 
 28) "64" 
 29) "list-max-ziplist-entries" 
 30) "512" 
 31) "list-max-ziplist-value" 
 32) "64" 
 33) "set-max-intset-entries" 
 34) "512" 
 35) "zset-max-ziplist-entries" 
 36) "128" 
 37) "zset-max-ziplist-value" 
 38) "64" 
 39) "hll-sparse-max-bytes" 
 40) "3000" 
 41) "lua-time-limit" 
 42) "5000" 
 43) "slowlog-log-slower-than" 
 44) "10000" 
 45) "latency-monitor-threshold" 
 46) "0" 
 47) "slowlog-max-len" 
 48) "128" 
 49) "port" 
 50) "6379" 
 51) "tcp-backlog" 
 52) "511" 
 53) "databases" 
 54) "16" 
 55) "repl-ping-slave-period" 
 56) "10" 
 57) "repl-timeout" 
 58) "60" 
 59) "repl-backlog-size" 
 60) "1048576" 
 61) "repl-backlog-ttl" 
 62) "3600" 
 63) "maxclients" 
 64) "4064" 
 65) "watchdog-period" 
 66) "0" 
 67) "slave-priority" 
 68) "100" 
 69) "min-slaves-to-write" 
 70) "0" 
 71) "min-slaves-max-lag" 
 72) "10" 
 73) "hz" 
 74) "10" 
 75) "no-appendfsync-on-rewrite" 
 76) "no" 
 77) "slave-serve-stale-data" 
 78) "yes" 
 79) "slave-read-only" 
 80) "yes" 
 81) "stop-writes-on-bgsave-error" 
 82) "yes" 
 83) "daemonize" 
 84) "no" 
 85) "rdbcompression" 
 86) "yes"
 87) "rdbchecksum" 
 88) "yes" 
 89) "activerehashing" 
 90) "yes" 
 91) "repl-disable-tcp-nodelay" 
 92) "no" 
 93) "aof-rewrite-incremental-fsync" 
 94) "yes" 
 95) "appendonly" 
 96) "no" 
 97) "dir" 
 98) "/home/deepak/Downloads/redis-2.8.13/src" 
 99) "maxmemory-policy" 
100) "volatile-lru" 
101) "appendfsync" 
102) "everysec" 
103) "save" 
104) "3600 1 300 100 60 10000" 
105) "loglevel" 
106) "notice" 
107) "client-output-buffer-limit" 
108) "normal 0 0 0 slave 268435456 67108864 60 pubsub 33554432 8388608 60" 
109) "unixsocketperm" 
110) "0" 
111) "slaveof" 
112) "" 
113) "notify-keyspace-events" 
114) "" 
115) "bind" 
116) "" 
```


### Edit Configuration

To update configuration, you can edit **redis.conf** file directly or you can update configurations via **CONFIG** set command.

#### Syntax

Following is the basic syntax of **CONFIG SET** command.

```
redis 127.0.0.1:6379> CONFIG SET CONFIG_SETTING_NAME NEW_CONFIG_VALUE
```

#### Example

```
redis 127.0.0.1:6379> CONFIG SET loglevel "notice" 
OK 
redis 127.0.0.1:6379> CONFIG GET loglevel  
1) "loglevel" 
2) "notice" 
```

## Redis - Data types

Redis supports 5 types of data types.

### Strings

Redis string is a sequence of bytes. Strings in Redis are binary safe, meaning they have a known length not determined by any special terminating characters. Thus, you can store anything up to 512 megabytes in one string.

#### Example

```
redis 127.0.0.1:6379> SET name "somename" 
OK 
redis 127.0.0.1:6379> GET name 
"somename"
```

In the above example, **SET** and **GET** are Redis commands, **name** is the key used in Redis and **somename** is the string value that is stored in Redis.

::: info
**Note** − A string value can be at max 512 megabytes in length.
:::

### Hashes

A Redis hash is a collection of key value pairs. Redis Hashes are maps between string fields and string values. Hence, they are used to represent objects.

#### Example

```
redis 127.0.0.1:6379> HMSET user:1 username somename password 
tutorialspoint points 200 
OK 
redis 127.0.0.1:6379> HGETALL user:1  
1) "username" 
2) "somename" 
3) "password" 
4) "somename" 
5) "points" 
6) "200"
```

In the above example, hash data type is used to store the user's object which contains basic information of the user. Here **HMSET**, **HGETALL** are commands for Redis, while **user:1** is the key.

Every hash can store up to 232 - 1 field-value pairs (more than 4 billion).

### Lists

Redis Lists are simply lists of strings, sorted by insertion order. You can add elements to a Redis List on the head or on the tail.

#### Example

```
redis 127.0.0.1:6379> lpush somelist redis 
(integer) 1 
redis 127.0.0.1:6379> lpush somelist mongodb 
(integer) 2 
redis 127.0.0.1:6379> lpush somelist rabitmq 
(integer) 3 
redis 127.0.0.1:6379> lrange somelist 0 10  

1) "rabitmq" 
2) "mongodb" 
3) "redis"
```

The max length of a list is 232 - 1 elements (4294967295, more than 4 billion of elements per list).

### Sets

Redis Sets are an unordered collection of strings. In Redis, you can add, remove, and test for the existence of members in O(1) time complexity.

#### Example

```
redis 127.0.0.1:6379> sadd somelist redis 
(integer) 1 
redis 127.0.0.1:6379> sadd somelist mongodb 
(integer) 1 
redis 127.0.0.1:6379> sadd somelist rabitmq 
(integer) 1 
redis 127.0.0.1:6379> sadd somelist rabitmq 
(integer) 0 
redis 127.0.0.1:6379> smembers somelist  

1) "rabitmq" 
2) "mongodb" 
3) "redis" 
```

::: info
**Note** − In the above example, **rabitmq** is added twice, however due to unique property of the set, it is added only once.
:::

The max number of members in a set is 232 - 1 (4294967295, more than 4 billion of members per set).

### Sorted Sets

Redis Sorted Sets are similar to Redis Sets, non-repeating collections of Strings. The difference is, every member of a Sorted Set is associated with a score, that is used in order to take the sorted set ordered, from the smallest to the greatest score. While members are unique, the scores may be repeated.

#### Example

```
redis 127.0.0.1:6379> zadd somelist 0 redis 
(integer) 1 
redis 127.0.0.1:6379> zadd somelist 0 mongodb 
(integer) 1 
redis 127.0.0.1:6379> zadd somelist 0 rabitmq 
(integer) 1 
redis 127.0.0.1:6379> zadd somelist 0 rabitmq 
(integer) 0 
redis 127.0.0.1:6379> ZRANGEBYSCORE somelist 0 1000  

1) "redis" 
2) "mongodb" 
3) "rabitmq" 
```




