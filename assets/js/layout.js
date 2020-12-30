'use strict';

const $ = require('jquery');
require('bootstrap-sass');
require('@fortawesome/fontawesome-free/js/all.js');

require('../css/main.scss');

require('babel-polyfill');

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

