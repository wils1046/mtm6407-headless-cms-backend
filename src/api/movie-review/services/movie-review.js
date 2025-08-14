'use strict';

/**
 * movie-review service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::movie-review.movie-review');
