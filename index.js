const express = require('express');
let API_KEYS = require('./config');
let Twit = require('twit');

let T = new Twit(API_KEYS);

console.log('Twitter Bot Starting...');

let getTweets = (query, count) => {
  T.get('search/tweets', { q: query, count: count }, (err, data, response) => {
    let tweets = data.statuses;
    for (let i = 0; i < tweets.length; i++) {
      console.log('Tweet ' + i + ' : ' + tweets[i].text);
    }
  });
};

let postTweet = (tweet) => {
  T.post('statuses/update', { status: tweet }, (err, data, response) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Tweeted: ${tweet}`);
    }
  });
};

// postTweet('First tweet by the Twitter Bot !');
