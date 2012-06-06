/*jshint node:true */
'use strict';
var request = require('request');

exports.index = function(req, res) {
    res.end('');
};

exports.app = function(req, res) {
  res.render('index', {
    title: 'Directorate'
  });
};

exports.games = function(req, res) {
  request({url: 'http://www.twitch.tv/discovery/top', json: true, qs: req.query}, function(err, topRes) {
    if (err) throw err;
    res.json(topRes.body);
  });
};