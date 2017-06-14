---
layout: post
title: Redis - Commands - Redis part 2
path: "/blog/redis-commands-redis-part-2.html"
date: 2017-06-06
tags: redis, nosql, database
description: "Redis commands"
featured: false
---

- [Redis - Commands](#redis-commands)
    - [Run Commands on the Remote Server](#run-commands-on-the-remote-server)
- [Redis - Keys](#redis-keys)
- [Redis - Strings](#redis-strings)
- [Redis - Hashes](#redis-hashes)
- [Redis - Lists](#redis-lists)
- [Redis - Sets](#redis-sets)
- [Redis - Sorted Sets](#redis-sorted-sets)
- [Redis - HyperLogLog](#redis-hyperLogLog)
- [Redis - Publish Subscribe](#redis-publish-subscribe)
- [Redis - Transactions](#redis-transactions)
- [Redis - Scripting](#redis-scripting)
- [Redis - Connections](#redis-connections)
- [Redis - Server](#redis-server)


* * *

## Redis - Commands

* * *

Redis commands are used to perform some operations on Redis server.

To run commands on Redis server, you need a Redis client. Redis client is available in Redis package, which we have installed earlier.

#### Syntax

Following is the basic syntax of Redis client.

```
$redis-cli 
```

#### Example

Following example explains how we can start Redis client.

To start Redis client, open the terminal and type the command **redis-cli**. This will connect to your local server and now you can run any command.

```
$redis-cli 
redis 127.0.0.1:6379> 
redis 127.0.0.1:6379> PING  
PONG
```

In the above example, we connect to Redis server running on the local machine and execute a command **PING**, that checks whether the server is running or not.

### Run Commands on the Remote Server

To run commands on Redis remote server, you need to connect to the server by the same client **redis-cli**

#### Syntax

```
$ redis-cli -h host -p port -a password
```

#### Example

Following example shows how to connect to Redis remote server, running on host 127.0.0.1, port 6379 and has password mypass.

```
$redis-cli -h 127.0.0.1 -p 6379 -a "mypass" 
redis 127.0.0.1:6379> 
redis 127.0.0.1:6379> PING  
PONG
```

* * *

## Redis - Keys

* * *

Redis keys commands are used for managing keys in Redis. Following is the syntax for using redis keys commands.

### Syntax

```
redis 127.0.0.1:6379> COMMAND KEY_NAME
```

### Example

```
redis 127.0.0.1:6379> 
SET tutorialspoint redis 
OK 
redis 127.0.0.1:6379> DEL somelist 
(integer) 1
```

In the above example, **DEL** is the command, while **somelist** is the key. If the key is deleted, then the output of the command will be (integer) 1, otherwise it will be (integer) 0.

## Redis Keys Commands

Following table lists some basic commands related to keys.

|No | Command & Description |
|-------|-----------------------|
| 1 | [DEL key](https://redis.io/commands/del) This command deletes the key, if it exists. |
| 2 | [DUMP key](https://redis.io/commands/dump) This command returns a serialized version of the value stored at the specified key. |
| 3 | [EXISTS key](https://redis.io/commands/exists) This command checks whether the key exists or not. |
| 4 | [EXPIRE key](https://redis.io/commands/expire) seconds Sets the expiry of the key after the specified time. |
| 5 | [EXPIREAT key timestamp](https://redis.io/commands/expireat) Sets the expiry of the key after the specified time. Here time is in Unix timestamp format. |
| 6 | [PEXPIRE key milliseconds](https://redis.io/commands/pexpire) Set the expiry of key in milliseconds. |
| 7 | [PEXPIREAT key milliseconds-timestamp](https://redis.io/commands/PEXPIREAT) Sets the expiry of the key in Unix timestamp specified as milliseconds. |
| 8 | [KEYS pattern](https://redis.io/commands/keys) Finds all keys matching the specified pattern. |
| 9 | [MOVE key db](https://redis.io/commands/move) Moves a key to another database. |
| 10 | [PERSIST key](https://redis.io/commands/persist) Removes the expiration from the key. |
| 11 | [PTTL key](https://redis.io/commands/pttl) Gets the remaining time in keys expiry in milliseconds. |
| 12 | [TTL key](https://redis.io/commands/ttl) Gets the remaining time in keys expiry. |
| 13 | [RANDOMKEY](https://redis.io/commands/randomkey) Returns a random key from Redis. |
| 14 | [RENAME key newkey](https://redis.io/commands/rename) Changes the key name. |
| 15 | [RENAMENX key newkey](https://redis.io/commands/renamenx) Renames the key, if a new key doesn't exist. |
| 16 | [TYPE key](https://redis.io/commands/type) Returns the data type of the value stored in the key. |

* * *

## Redis - Strings

* * *

Redis strings commands are used for managing string values in Redis. Following is the syntax for using Redis string commands.

#### Syntax

<pre class="result notranslate">redis 127.0.0.1:6379>
COMMAND KEY_NAME 
</pre>

#### Example

<pre class="result notranslate">redis 127.0.0.1:6379>
SET tutorialspoint redis 
OK 
redis 127.0.0.1:6379> GET tutorialspoint 
"redis" 
</pre>

In the above example, **SET** and **GET** are the commands, while **tutorialspoint** is the key.

### Redis Strings Commands

Following table lists some basic commands to manage strings in Redis.

|No | Command & Description |
|-------|-----------------------|
| 1 | [SET key value](https://redis.io/commands/set)This command sets the value at the specified key. |
| 2 | [GET key](https://redis.io/commands/get)Gets the value of a key. |
| 3 | [GETRANGE key start end](https://redis.io/commands/getrange)Gets a substring of the string stored at a key. |
| 4 | [GETSET key value](https://redis.io/commands/getset)Sets the string value of a key and return its old value. |
| 5 | [GETBIT key offset](https://redis.io/commands/getbit)Returns the bit value at the offset in the string value stored at the key. |
| 6 | [MGET key1 [key2..]](https://redis.io/commands/mget)Gets the values of all the given keys. |
| 7 | [SETBIT key offset value](https://redis.io/commands/setbit)Sets or clears the bit at the offset in the string value stored at the key. |
| 8 | [SETEX key seconds value](https://redis.io/commands/setex)Sets the value with the expiry of a key. |
| 9 | [SETNX key value](https://redis.io/commands/setnx)Sets the value of a key, only if the key does not exist. |
| 10 | [SETRANGE key offset value](https://redis.io/commands/setrange)Overwrites the part of a string at the key starting at the specified offset. |
| 11 | [STRLEN key](https://redis.io/commands/strlen)Gets the length of the value stored in a key. |
| 12 | [MSET key value [key value ...]](https://redis.io/commands/mset)Sets multiple keys to multiple values. |
| 13 | [MSETNX key value [key value ...]](https://redis.io/commands/msetnx)Sets multiple keys to multiple values, only if none of the keys exist. |
| 14 | [PSETEX key milliseconds value](https://redis.io/commands/psetex)Sets the value and expiration in milliseconds of a key. |
| 15 | [INCR key](https://redis.io/commands/incr)Increments the integer value of a key by one. |
| 16 | [INCRBY key increment](https://redis.io/commands/incrby)Increments the integer value of a key by the given amount. |
| 17 | [INCRBYFLOAT key increment](https://redis.io/commands/incrbyfloat)Increments the float value of a key by the given amount. |
| 18 | [DECR key](https://redis.io/commands/decr)Decrements the integer value of a key by one. |
| 19 | [DECRBY key decrement](https://redis.io/commands/decrby)Decrements the integer value of a key by the given number. |
| 20 | [APPEND key value](https://redis.io/commands/append)Appends a value to a key. |

* * *

## Redis - Hashes

* * *

Redis Hashes are maps between the string fields and the string values. Hence, they are the perfect data type to represent objects.

In Redis, every hash can store up to more than 4 billion field-value pairs.

## Example

```
redis 127.0.0.1:6379> HMSET tutorialspoint name "redis tutorial" 
description "redis basic commands for caching" likes 20 visitors 23000 
OK 
redis 127.0.0.1:6379> HGETALL tutorialspoint  
1) "name" 
2) "redis tutorial" 
3) "description" 
4) "redis basic commands for caching" 
5) "likes" 
6) "20" 
7) "visitors" 
8) "23000"
```

In the above example, we have set Redis tutorials detail (name, description, likes, visitors) in hash named ‘tutorialspoint’.

## Redis Hash Commands

Following table lists some basic commands related to hash.

|No | Command & Description |
|-------|-----------------------|
| 1 | [HDEL key field2 [field2]](https://redis.io/commands/hdel)Deletes one or more hash fields. |
| 2 | [HEXISTS key field](https://redis.io/commands/hexists)Determines whether a hash field exists or not. |
| 3 | [HGET key field](https://redis.io/commands/hget)Gets the value of a hash field stored at the specified key. |
| 4 | [HGETALL key](https://redis.io/commands/hgetall)Gets all the fields and values stored in a hash at the specified key. |
| 5 | [HINCRBY key field increment](https://redis.io/commands/hincrby)Increments the integer value of a hash field by the given number. |
| 6 | [HINCRBYFLOAT key field increment](https://redis.io/commands/hincrbyfloat)Increments the float value of a hash field by the given amount. |
| 7 | [HKEYS key](https://redis.io/commands/hkeys)Gets all the fields in a hash. |
| 8 | [HLEN key](https://redis.io/commands/hlen)Gets the number of fields in a hash. |
| 9 | [HMGET key field1 [field2]](https://redis.io/commands/hmget)Gets the values of all the given hash fields. |
| 10 | [HMSET key field1 value1 [field2 value2 ]](https://redis.io/commands/hmset)Sets multiple hash fields to multiple values. |
| 11 | [HSCAN key cursor [MATCH pattern] [COUNT count]](https://redis.io/commands/hscan)Iterates elements of Sets types. |
| 12 | [HSET key field value](https://redis.io/commands/hset)Sets the string value of a hash field. |
| 13 | [HSETNX key field value](https://redis.io/commands/hsetnx)Sets the value of a hash field, only if the field does not exist. |
| 14 | [HSTRLEN key field](https://redis.io/commands/hstrlen)Returns the string length of the value associated with field in the hash stored at key. If the key or the field do not exist, 0 is returned. |
| 15 | [HVALS key](https://redis.io/commands/hvals)Gets all the values in a hash. |


* * *

## Redis - Lists

* * *

Redis Lists are simply lists of strings, sorted by insertion order. You can add elements in Redis lists in the head or the tail of the list.

Maximum length of a list is 2<sup>32</sup> - 1 elements (4294967295, more than 4 billion of elements per list).

## Example

```
redis 127.0.0.1:6379> LPUSH tutorials redis 
(integer) 1 
redis 127.0.0.1:6379> LPUSH tutorials mongodb 
(integer) 2 
redis 127.0.0.1:6379> LPUSH tutorials mysql 
(integer) 3 
redis 127.0.0.1:6379> LRANGE tutorials 0 10  
1) "mysql" 
2) "mongodb" 
3) "redis"
```

In the above example, three values are inserted in Redis list named ‘tutorials’ by the command **LPUSH**.

## Redis Lists Commands

Following table lists some basic commands related to lists.

|No | Command & Description |
|-------|-----------------------|
| 1 | [BLPOP key1 [key2 ] timeout](https://redis.io/commands/blpop)Removes and gets the first element in a list, or blocks until one is available. |
| 2 | [BRPOP key1 [key2 ] timeout](https://redis.io/commands/brpop)Removes and gets the last element in a list, or blocks until one is available. |
| 3 | [BRPOPLPUSH source destination timeout](https://redis.io/commands/brpoplpush)Pops a value from a list, pushes it to another list and returns it; or blocks until one is available. |
| 4 | [LINDEX key index](https://redis.io/commands/lindex)Gets an element from a list by its index. |
| 5 | [LINSERT key BEFORE / AFTER pivot value](https://redis.io/commands/linsert)Inserts an element before or after another element in a list. |
| 6 | [LLEN key](https://redis.io/commands/llen)Gets the length of a list. |
| 7 | [LPOP key](https://redis.io/commands/lpop)Removes and gets the first element in a list. |
| 8 | [LPUSH key value1 [value2]](https://redis.io/commands/lpush)Prepends one or multiple values to a list. |
| 9 | [LPUSHX key value](https://redis.io/commands/lpushx)Prepends a value to a list, only if the list exists. |
| 10 | [LRANGE key start stop](https://redis.io/commands/lrange)Gets a range of elements from a list. |
| 11 | [LREM key count value](https://redis.io/commands/lrem)Removes elements from a list. |
| 12 | [LSET key index value](https://redis.io/commands/lset)Sets the value of an element in a list by its index. |
| 13 | [LTRIM key start stop](https://redis.io/commands/ltrim)Trims a list to the specified range. |
| 14 | [RPOP key](https://redis.io/commands/rpop)Removes and gets the last element in a list. |
| 15 | [RPOPLPUSH source destination](https://redis.io/commands/rpoplpush)Removes the last element in a list, appends it to another list and returns it. |
| 17 | [RPUSH key value [value ...]](https://redis.io/commands/rpush)Insert all the specified values at the tail of the list stored at key. |
| 18 | [RPUSHX key value](https://redis.io/commands/rpushx)Appends a value to a list, only if the list exists. |


* * *

## Redis - Sets

* * *

Redis Sets are an unordered collection of unique strings. Unique means sets does not allow repition of data in a key.

In Redis set add, remove, and test for the existence of members in O(1) (constant time regardless of the number of elements contained inside the Set). The maximum length of a list is 2<sup>32</sup> - 1 elements (4294967295, more than 4 billion of elements per set).

### Example

```
redis 127.0.0.1:6379> SADD tutorials redis 
(integer) 1 
redis 127.0.0.1:6379> SADD tutorials mongodb 
(integer) 1 
redis 127.0.0.1:6379> SADD tutorials mysql 
(integer) 1 
redis 127.0.0.1:6379> SADD tutorials mysql 
(integer) 0 
redis 127.0.0.1:6379> SMEMBERS tutorials  
1) "mysql" 
2) "mongodb" 
3) "redis"
```

In the above example, three values are inserted in Redis set named ‘tutorials’ by the command **SADD**.

## Redis Sets Commands

Following table lists some basic commands related to sets.

|No | Command & Description |
|-------|-----------------------|
| 1 | [SADD key member1 [member2]](https://redis.io/commands/sadd)Adds one or more members to a set. |
| 2 | [SCARD key](https://redis.io/commands/scard)Gets the number of members in a set. |
| 3 | [SDIFF key1 [key2]](https://redis.io/commands/sdiff)Subtracts multiple sets. |
| 4 | [SDIFFSTORE destination key1 [key2]](https://redis.io/commands/sdiffstore)Subtracts multiple sets and stores the resulting set in a key. |
| 5 | [SINTER key1 [key2]](https://redis.io/commands/sinter)Intersects multiple sets. |
| 6 | [SINTERSTORE destination key1 [key2]](https://redis.io/commands/sinterstore)Intersects multiple sets and stores the resulting set in a key. |
| 7 | [SISMEMBER key member](https://redis.io/commands/sismember)Determines if a given value is a member of a set. |
| 8 | [SMEMBERS key](https://redis.io/commands/smembers)Returns all the members of the set value stored at key. |
| 9 | [SMOVE source destination member](https://redis.io/commands/smove)Moves a member from one set to another. |
| 10 | [SPOP key](https://redis.io/commands/spop)Removes and returns a random member from a set. |
| 11 | [SRANDMEMBER key [count]](https://redis.io/commands/srandmember)Gets one or multiple random members from a set. |
| 12 | [SREM key member1 [member2]](https://redis.io/commands/srem)Removes one or more members from a set. |
| 13 | [SSCAN key cursor [MATCH pattern] [COUNT count]](https://redis.io/commands/sscan)Incrementally iterates set elements. |
| 14 | [SUNION key1 [key2]](https://redis.io/commands/sunion)Adds multiple sets. |
| 15 | [SUNIONSTORE destination key1 [key2]](https://redis.io/commands/sunionstore)Adds multiple sets and stores the resulting set in a key. |


* * *

## Redis - Sorted Sets

* * *

Redis Sorted Sets are similar to Redis Sets with the unique feature of values stored in a set. The difference is, every member of a Sorted Set is associated with a score, that is used in order to take the sorted set ordered, from the smallest to the greatest score.

In Redis sorted set, add, remove, and test for the existence of members in O(1) (constant time regardless of the number of elements contained inside the set). Maximum length of a list is 2<sup>32</sup> - 1 elements (4294967295, more than 4 billion of elements per set).

### Example

```
redis 127.0.0.1:6379> ZADD tutorials 1 redis 
(integer) 1 
redis 127.0.0.1:6379> ZADD tutorials 2 mongodb 
(integer) 1 
redis 127.0.0.1:6379> ZADD tutorials 3 mysql 
(integer) 1 
redis 127.0.0.1:6379> ZADD tutorials 3 mysql 
(integer) 0 
redis 127.0.0.1:6379> ZADD tutorials 4 mysql 
(integer) 0 
redis 127.0.0.1:6379> ZRANGE tutorials 0 10 WITHSCORES  
1) "redis" 
2) "1" 
3) "mongodb" 
4) "2" 
5) "mysql" 
6) "4" 
```

In the above example, three values are inserted with its score in Redis sorted set named ‘tutorials’ by the command **ZADD**.

## Redis Sorted Sets Commands

Following table lists some basic commands related to sorted sets.

|No | Command & Description |
|-------|-----------------------|
| 1 | [ZADD key score1 member1 [score2 member2]](https://redis.io/commands/zadd)Adds one or more members to a sorted set, or updates its score, if it already exists. |
| 2 | [ZCARD key](https://redis.io/commands/zcard)Gets the number of members in a sorted set. |
| 3 | [ZCOUNT key min max](https://redis.io/commands/zcount)Counts the members in a sorted set with scores within the given values. |
| 4 | [ZINCRBY key increment member](https://redis.io/commands/zincrby)Increments the score of a member in a sorted set. |
| 5 | [ZINTERSTORE destination numkeys key [key ...]](https://redis.io/commands/zinterstore)Intersects multiple sorted sets and stores the resulting sorted set in a new key. |
| 6 | [ZLEXCOUNT key min max](https://redis.io/commands/zlexcount)Counts the number of members in a sorted set between a given lexicographical range. |
| 7 | [ZRANGE key start stop [WITHSCORES]](https://redis.io/commands/zrange)Returns a range of members in a sorted set, by index. |
| 8 | [ZRANGEBYLEX key min max [LIMIT offset count]](https://redis.io/commands/zrangebylex)Returns a range of members in a sorted set, by lexicographical range. |
| 9 | [ZRANGEBYSCORE key min max [WITHSCORES] [LIMIT]](https://redis.io/commands/zrangebyscore)Returns a range of members in a sorted set, by score. |
| 10 | [ZRANK key member](https://redis.io/commands/zrank)Determines the index of a member in a sorted set. |
| 11 | [ZREM key member [member ...]](https://redis.io/commands/zrem)Removes one or more members from a sorted set. |
| 12 | [ZREMRANGEBYLEX key min max](https://redis.io/commands/zremrangebylex)Removes all members in a sorted set between the given lexicographical range. |
| 13 | [ZREMRANGEBYRANK key start stop](https://redis.io/commands/zremrangebyrank)Removes all members in a sorted set within the given indexes. |
| 14 | [ZREMRANGEBYSCORE key min max](https://redis.io/commands/zremrangebyscore)Removes all members in a sorted set within the given scores. |
| 15 | [ZREVRANGE key start stop [WITHSCORES]](https://redis.io/commands/zrevrange)Returns a range of members in a sorted set, by index, with scores ordered from high to low. |
| 16 | [ZREVRANGEBYSCORE key max min [WITHSCORES]](https://redis.io/commands/zrevrangebyscore)Returns a range of members in a sorted set, by score, with scores ordered from high to low. |
| 17 | [ZREVRANK key member](https://redis.io/commands/zrevrank)Determines the index of a member in a sorted set, with scores ordered from high to low. |
| 18 | [ZSCORE key member](https://redis.io/commands/zscore)Gets the score associated with the given member in a sorted set. |
| 19 | [ZUNIONSTORE destination numkeys key [key ...]](https://redis.io/commands/zunionstore) Adds multiple sorted sets and stores the resulting sorted set in a new key. |
| 20 | [ZSCAN key cursor [MATCH pattern] [COUNT count]](https://redis.io/commands/zscan)Incrementally iterates sorted sets elements and associated scores. |

* * *

## Redis - HyperLogLog

* * *

Redis HyperLogLog is an algorithm that uses randomization in order to provide an approximation of the number of unique elements in a set using just a constant, and small amount of memory.

HyperLogLog provides a very good approximation of the cardinality of a set even using a very small amount of memory around 12 kbytes per key with a standard error of 0.81%. There is no limit to the number of items you can count, unless you approach 2<sup>64</sup> items.

### Example

Following example explains how Redis HyperLogLog works.

```
redis 127.0.0.1:6379>
PFADD tutorials "redis"  
1) (integer) 1  
redis 127.0.0.1:6379> PFADD tutorials "mongodb"  
1) (integer) 1  
redis 127.0.0.1:6379> PFADD tutorials "mysql"  
1) (integer) 1  
redis 127.0.0.1:6379> PFCOUNT tutorials  
(integer) 3 
```

## Redis HyperLogLog Commands

Following table lists some basic commands related to Redis HyperLogLog.

|No | Command & Description |
|-------|-----------------------|
| 1 | [PFADD key element [element ...]](https://redis.io/commands/pfadd) Adds the specified elements to the specified HyperLogLog. |
| 2 | [PFCOUNT key [key ...]](https://redis.io/commands/pfcount) Returns the approximated cardinality of the set(s) observed by the HyperLogLog at key(s). |
| 3 | [PFMERGE destkey sourcekey [sourcekey ...]](https://redis.io/commands/pfmerge) Merges N different HyperLogLogs into a single one. |

* * *

## Redis - Publish Subscribe

* * *

Redis Pub/Sub implements the messaging system where the senders (in redis terminology called publishers) sends the messages while the receivers (subscribers) receive them. The link by which the messages are transferred is called **channel**.

In Redis, a client can subscribe any number of channels.

### Example

Following example explains how publish subscriber concept works. In the following example, one client subscribes a channel named ‘redisChat’.

```
redis 127.0.0.1:6379> SUBSCRIBE redisChat  
Reading messages... (press Ctrl-C to quit) 
1) "subscribe" 
2) "redisChat" 
3) (integer) 1 
```

Now, two clients are publishing the messages on the same channel named ‘redisChat’ and the above subscribed client is receiving messages.

```
redis 127.0.0.1:6379> PUBLISH redisChat "Redis is a great caching technique"  
(integer) 1  
redis 127.0.0.1:6379> PUBLISH redisChat "Learn redis by tutorials point"  
(integer) 1   
1) "message" 
2) "redisChat" 
3) "Redis is a great caching technique" 
1) "message" 
2) "redisChat" 
3) "Learn redis by tutorials point" 
```

## Redis PubSub Commands

Following table lists some basic commands related to Redis Pub/Sub.

|No | Command & Description |
|-------|-----------------------|
| 1 | [PSUBSCRIBE pattern [pattern ...]](https://redis.io/commands/psubscribe)Subscribes to channels matching the given patterns. |
| 2 | [PUBSUB subcommand [argument [argument ...]]](https://redis.io/commands/pubsub)Tells the state of Pub/Sub system. For example, which clients are active on the server. |
| 3 | [PUBLISH channel message](https://redis.io/commands/publish)Posts a message to a channel. |
| 4 | [PUNSUBSCRIBE [pattern [pattern ...]]](https://redis.io/commands/punsubscribe)Stops listening for messages posted to channels matching the given patterns. |
| 5 | [SUBSCRIBE channel [channel ...]](https://redis.io/commands/subscribe)Listens for messages published to the given channels. |
| 6 | [UNSUBSCRIBE [channel [channel ...]]](https://redis.io/commands/unsubscribe)Stops listening for messages posted to the given channels. |

* * *

## Redis - Transactions

* * *

Redis transactions allow the execution of a group of commands in a single step. Following are the two properties of Transactions.

*   All commands in a transaction are sequentially executed as a single isolated operation. It is not possible that a request issued by another client is served in the middle of the execution of a Redis transaction.

*   Redis transaction is also atomic. Atomic means either all of the commands or none are processed.

## Sample

Redis transaction is initiated by command **MULTI** and then you need to pass a list of commands that should be executed in the transaction, after which the entire transaction is executed by **EXEC** command.

```
redis 127.0.0.1:6379> MULTI 
OK 
List of commands here 
redis 127.0.0.1:6379> EXEC
```

### Example

Following example explains how Redis transaction can be initiated and executed.

```
redis 127.0.0.1:6379> MULTI 
OK 
redis 127.0.0.1:6379> SET tutorial redis 
QUEUED 
redis 127.0.0.1:6379> GET tutorial 
QUEUED 
redis 127.0.0.1:6379> INCR visitors 
QUEUED 
redis 127.0.0.1:6379> EXEC  
1) OK 
2) "redis" 
3) (integer) 1 
```

## Redis Transaction Commands

Following table shows some basic commands related to Redis transactions.

|No | Command & Description |
|-------|-----------------------|
| 1 | [DISCARD](https://redis.io/commands/discard)Discards all commands issued after MULTI. |
| 2 | [EXEC](https://redis.io/commands/exec)Executes all commands issued after MULTI. |
| 3 | [MULTI](https://redis.io/commands/multi)Marks the start of a transaction block. |
| 4 | [UNWATCH](https://redis.io/commands/unwatch)Forgets about all watched keys. |
| 5 | [WATCH key [key ...]](https://redis.io/commands/watch)Watches the given keys to determine the execution of the MULTI/EXEC block. |

* * *

## Redis - Scripting

* * *

Redis scripting is used to evaluate scripts using the Lua interpreter. It is built into Redis starting from version 2.6.0\. The command used for scripting is **EVAL** command.

## Syntax

Following is the basic syntax of **EVAL** command.

```
redis 127.0.0.1:6379> EVAL script numkeys key [key ...] arg [arg ...]
```

### Example

Following example explains how Redis scripting works.

```
redis 127.0.0.1:6379> EVAL "return {KEYS[1],KEYS[2],ARGV[1],ARGV[2]}" 2 key1 
key2 first second  
1) "key1" 
2) "key2" 
3) "first" 
4) "second"
```

## Redis Scripting Commands

Following table lists some basic commands related to Redis Scripting.

|No | Command & Description |
|-------|-----------------------|
| 1 | [EVAL script numkeys key [key ...] arg [arg ...]](https://redis.io/commands/eval)Executes a Lua script. |
| 2 | [EVALSHA sha1 numkeys key [key ...] arg [arg ...]](https://redis.io/commands/evalsha)Executes a Lua script. |
| 3 | [SCRIPT EXISTS script [script ...]](https://redis.io/commands/script-exists)Checks the existence of scripts in the script cache. |
| 4 | [SCRIPT FLUSH](https://redis.io/commands/script-flush)Removes all the scripts from the script cache. |
| 5 | [SCRIPT KILL](https://redis.io/commands/script-kill)Kills the script currently in execution.
| 6 | [SCRIPT LOAD script](https://redis.io/commands/script-load)Loads the specified Lua script into the script cache.

* * *

## Redis - Connections

* * *

Redis connection commands are basically used to manage client connections with Redis server.

### Example

Following example explains how a client authenticates itself to Redis server and checks whether the server is running or not.

```
redis 127.0.0.1:6379>
AUTH "password" 
OK 
redis 127.0.0.1:6379> PING 
PONG 
```

## Redis Connection Commands

Following table lists some basic commands related to Redis connections.

|No | Command & Description |
|-------|-----------------------|
| 1 | [AUTH password](https://redis.io/commands/auth)Authenticates to the server with the given password. |
| 2 | [ECHO message](https://redis.io/commands/echo)Prints the given string. |
| 3 | [PING](https://redis.io/commands/ping)Checks whether the server is running or not. |
| 4 | [QUIT](https://redis.io/commands/quit)Closes the current connection. |
| 5 | [SELECT index](https://redis.io/commands/select)Changes the selected database for the current connection.
| 6 | [SWAPDB index index](https://redis.io/commands/swapdb)This command swaps two Redis databases, so that immediately all the clients connected to a given database will see the data of the other database, and the other way around.

* * *

## Redis - Server

* * *

Redis server commands are basically used to manage Redis server.

### Example

Following example explains how we can get all statistics and information about the server.

```
redis 127.0.0.1:6379> INFO  

# Server 
redis_version:2.8.13 
redis_git_sha1:00000000 
redis_git_dirty:0 
redis_build_id:c2238b38b1edb0e2 
redis_mode:standalone 
os:Linux 3.5.0-48-generic x86_64 
arch_bits:64 
multiplexing_api:epoll 
gcc_version:4.7.2 
process_id:3856 
run_id:0e61abd297771de3fe812a3c21027732ac9f41fe 
tcp_port:6379 
uptime_in_seconds:11554 
uptime_in_days:0 hz:10 
lru_clock:16651447 
config_file:  

# Clients 
connected_clients:1
client_longest_output_list:0 
client_biggest_input_buf:0 
blocked_clients:0  

# Memory 
used_memory:589016 
used_memory_human:575.21K 
used_memory_rss:2461696 
used_memory_peak:667312 
used_memory_peak_human:651.67K 
used_memory_lua:33792 
mem_fragmentation_ratio:4.18 
mem_allocator:jemalloc-3.6.0  

# Persistence 
loading:0 
rdb_changes_since_last_save:3 
rdb_bgsave_in_progress:0 
rdb_last_save_time:1409158561 
rdb_last_bgsave_status:ok 
rdb_last_bgsave_time_sec:0 
rdb_current_bgsave_time_sec:-1 
aof_enabled:0 
aof_rewrite_in_progress:0 
aof_rewrite_scheduled:0 
aof_last_rewrite_time_sec:-1 
aof_current_rewrite_time_sec:-1 
aof_last_bgrewrite_status:ok 
aof_last_write_status:ok  

# Stats 
total_connections_received:24 
total_commands_processed:294 
instantaneous_ops_per_sec:0 
rejected_connections:0 
sync_full:0 
sync_partial_ok:0 
sync_partial_err:0 
expired_keys:0 
evicted_keys:0 
keyspace_hits:41
keyspace_misses:82 
pubsub_channels:0 
pubsub_patterns:0 
latest_fork_usec:264  

# Replication 
role:master 
connected_slaves:0 
master_repl_offset:0 
repl_backlog_active:0 
repl_backlog_size:1048576 
repl_backlog_first_byte_offset:0 
repl_backlog_histlen:0  

# CPU 
used_cpu_sys:10.49 
used_cpu_user:4.96 
used_cpu_sys_children:0.00 
used_cpu_user_children:0.01  

# Keyspace 
db0:keys = 94,expires = 1,avg_ttl = 41638810 
db1:keys = 1,expires = 0,avg_ttl = 0 
db3:keys = 1,expires = 0,avg_ttl = 0 
```

## Redis Server Commands

Following table lists some basic commands related to Redis server.

|No | Command & Description |
|-------|-----------------------|
| 1 | [BGREWRITEAOF](https://redis.io/commands/bgrewriteaof)Asynchronously rewrites the append-only file. |
| 2 | [BGSAVE](https://redis.io/commands/bgsave)Asynchronously saves the dataset to the disk. |
| 3 | [CLIENT KILL [ip:port] [ID client-id]](https://redis.io/commands/client-kill)Kills the connection of a client. |
| 4 | [CLIENT LIST](https://redis.io/commands/client-list)Gets the list of client connections to the server. |
| 5 | [CLIENT GETNAME](https://redis.io/commands/client-getname)Gets the name of the current connection. |
| 6 | [CLIENT PAUSE timeout](https://redis.io/commands/client-pause)Stops processing commands from the clients for a specified time. |
| 7 | [CLIENT SETNAME connection-name](https://redis.io/commands/client-setname)Sets the current connection name. |
| 8 | [CLUSTER SLOTS](https://redis.io/commands/cluster-slots)Gets an array of Cluster slot to node mappings. |
| 9 | [COMMAND](https://redis.io/commands/command)Gets an array of Redis command details. |
| 10 | [COMMAND COUNT](https://redis.io/commands/command-count)Gets total number of Redis commands. |
| 11 | [COMMAND GETKEYS](https://redis.io/commands/command-getkeys)Extracts the keys given a full Redis command. |
| 13 | [COMMAND INFO command-name [command-name ...]](https://redis.io/commands/command-info)Gets an array of specific Redis command details. |
| 14 | [CONFIG GET parameter](https://redis.io/commands/config-get)Gets the value of a configuration parameter. |
| 15 | [CONFIG REWRITE](https://redis.io/commands/config-rewrite)Rewrites the configuration file with the in-memory configuration. |
| 16 | [CONFIG SET parameter value](https://redis.io/commands/config-set)Sets a configuration parameter to the given value. |
| 17 | [CONFIG RESETSTAT](https://redis.io/commands/config-resetstat)Resets the stats returned by INFO. |
| 18 | [DBSIZE](https://redis.io/commands/dbsize)Returns the number of keys in the selected database. |
| 19 | [DEBUG OBJECT key](https://redis.io/commands/debug-object)Gets debugging information about a key. |
| 20 | [DEBUG SEGFAULT](https://redis.io/commands/debug-segfault)Makes the server crash. |
| 21 | [FLUSHALL](https://redis.io/commands/flushall)Removes all the keys from all databases. |
| 22 | [FLUSHDB](https://redis.io/commands/flushdb)Removes all the keys from the current database. |
| 23 | [INFO [section]](https://redis.io/commands/info)Gets information and statistics about the server. |
| 24 | [LASTSAVE](https://redis.io/commands/lastsave)Gets the UNIX time stamp of the last successful save to the disk. |
| 25 | [MONITOR](https://redis.io/commands/monitor)Listens for all the requests received by the server in real time. |
| 26 | [ROLE](https://redis.io/commands/role)Returns the role of the instance in the context of replication. |
| 27 | [SAVE](https://redis.io/commands/save)Synchronously saves the dataset to the disk. |
| 28 | [SHUTDOWN [NOSAVE] [SAVE]](https://redis.io/commands/shutdown)Synchronously saves the dataset to the disk and then shuts down the server. |
| 29 | [SLAVEOF host port](https://redis.io/commands/slaveof)Makes the server a slave of another instance, or promotes it as a master. |
| 30 | [SLOWLOG subcommand [argument]](https://redis.io/commands/slowlog)Manages the Redis slow queries log. |
| 31 | [SYNC](https://redis.io/commands/sync)Command used for replication. |
| 32 | [TIME](https://redis.io/commands/time)Returns the current server time. |

* * *
