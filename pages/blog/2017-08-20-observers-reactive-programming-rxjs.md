---
layout: post
title: Observers, Reactive Programming & RxJS
path: "/blog/observers-reactive-programming-rxjs.html"
date: 2017-08-20
tags: Reactive-Programming, RxJS
description: "Observers, Reactive Programming & RxJS"
featured: true
---

- [Introduction](#introduction)
- [Reactive Extensions](#reactive-extensions)
- [RxJS Libraries](#rxjs-libraries)
- [What Are Asynchronous Data Streams](#what-are-asynchronous-data-streams)
- [Examples of Asynchronous Data Streams](#examples-of-asynchronous-data-streams)
- [Observable Sequences (Observables)](#observable-sequences-observables)
- [Subscriptions](#subscriptions)
- [Observables, Observers and Future JavaScript ES7](#observables-observers-and-future-javascript-es7)

## Introduction

Reactive Extensions for JavaScript (RxJS) is a reactive streams library that allows us to work with asynchronous data streams. The project is actively developed by Microsoft in collaboration with a community of open source developers.

## Reactive Extensions

In computing, reactive programming is a programming paradigm oriented around data flows and the propagation of change. This means that it should be possible to express static or dynamic data flows with ease in the programming languages used, and that the underlying execution model will automatically propagate changes through the data flow. Reactive extensions code is available on almost every computing platform, not just JavaScript and its purpose is to bring the capability for reactive programming to the computing platform.

## RxJS Libraries

These are a set of libraries to compose asynchronous and event-based reactive programs using observable collections in JavaScript.

## What Are Asynchronous Data Streams ?

1. **Asynchronous**

In JavaScript means we can call a function and register a callback to be notified when results are available, so we can continue with execution and avoid the Web Page from being unresponsive. This is used for ajax calls, DOM-events, Promises, WebWorkers and WebSockets.

2. **Data**

Raw information in the form of JavaScript data types as: Number, String, Objects (Arrays, Sets, Maps).

3. **Streams**

Sequences of data made available over time. As an example, opposed to Arrays we don’t need all the information to be present in order to start using them.

## Examples of Asynchronous Data Streams

- Stock quotes.
- Tweets.
- Computer events, for example mouse clicks.
- Web service requests.

## Observable Sequences (Observables)

In RxJS, you represent Asynchronous Data Streams using Observable Sequences or also just called Observables. So, we could watch stock quotes or mouse clicks using Observables. Observables are flexible and can be used using push or pull patterns.

- **Push**

When using the push pattern, we subscribe to the source stream and react to new data as soon as is made available (emitted). We can listen to a stream and react accordingly.

- **Pull**

When using the pull pattern, we are using the same operations but synchronously. This happens when using Arrays, Generators or Iterables.

- **Operators**

Because observable sequences are data streams, we can query them using Operators implemented by the Observable type. Things we can do with Observable Operators (just a few of many):

- *Filter* – filter out stock changes for stocks we don’t own.
- *Aggregate* – get all the typing in the first 5 seconds.
- Perform time-based operations on multiple events.

## Observers

If Observables are things that can be watched, Observers are the things that watch them.

- *Observables* - A class that can be watched by another class, e.g. Stock ticker.

- *Observer* - A class that can watch another class

Observers are classes that can respond to events (things happening). To respond they must implement the following methods:

1. **onNext**

An Observable calls this method whenever the Observable emits an item. This method takes as a parameter the item emitted by the Observable.

2. **onError**

An Observable calls this method to indicate that it has failed to generate the expected data or has encountered some other error. This stops the Observable and it will not make further calls to onNext or onCompleted. The onError method takes as its parameter an indication of what caused the error.

3. **onCompleted**

An Observable calls this method after it has called onNext for the final time, if it has not encountered any errors.

## Subscriptions

A subscription is like a connection between an Observable and an Observer.

- Linking an Observable and Observer.

```typescript
const subscription: Rx.Subscription = observable.subscribe(
  // Observer
  function (x) {
    console.log('Next: ' + x);
  },
  function (err) {
    console.log('Error: ' + err);
  },
  function () {
    console.log('Completed');
  }
);
```

- Unlinking an Observable and Observer.

To unlink the Observable and Observer, call the method ‘dispose’ in the subscription:

`subscription.dispose();`

## Observables, Observers and Future JavaScript ES7

ES7 is an upcoming proposed standard for JavaScript. It is going to include `Object.observe`. It allows an observer to receive a time-ordered sequence of change records which describe the set of changes which took place to a set of observed objects.

Similar to what RxJS does, only native in the browser.

It’s already implemented in some browsers, for example Chrome 36.ss

## Operators

Operators perform a variety of tasks. Their purpose is to make it more convenient to Observe an Observable:

- **Create Observables.**
- **Filter Observables.**
- **Combine Observables.**
- **Handle Errors.**
- **Perform Utilities.**

Most operators operate on an Observable and return an Observable. This allows us to apply these operators one after the other, in a chain. Each operator in the chain modifies the Observable that results from the operation of the previous operator.