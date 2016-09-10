#!/usr/bin/env node

'use strict';

var names = require('docker-names');
console.log( names.getRandomName().replace('_','-') );

