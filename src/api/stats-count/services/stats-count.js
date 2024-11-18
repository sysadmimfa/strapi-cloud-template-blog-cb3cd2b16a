'use strict';

/**
 * stats-count service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::stats-count.stats-count');
