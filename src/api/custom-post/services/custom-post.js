'use strict';

/**
 * custom-post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::custom-post.custom-post');
