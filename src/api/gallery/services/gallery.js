'use strict';

/**
 * gallery service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gallery.gallery');
