/*jshint globalstrict: true*/
"use strict";

const express = require('express');

// 상수
const PORT = 80;
// 앱
const app = express();
app.get('/docker_test', (req, res) => {
	res.send('please Hello docker trigger world!!! \n');
});

app.listen(PORT);
