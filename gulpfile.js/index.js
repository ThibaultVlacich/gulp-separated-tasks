/*
  gulpfile.js
  ===========
  Automaticaly requires all gulp tasks defined
  in the /tasks/ folder.
*/

const path = require('path')
const gulp = require('gulp')
const requireDir = require('require-dir')

// Fallback for windows
process.env.PWD = process.env.PWD || process.cwd()

// Globally expose config objects
global.PATH_CONFIG = require('./path-config.json')

// Require all tasks in gulpfile.js/tasks, including subfolders
requireDir('./tasks', { recurse: true })
