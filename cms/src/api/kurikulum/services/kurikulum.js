'use strict';

/**
 * kurikulum service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kurikulum.kurikulum');
