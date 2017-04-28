import { Router } from 'express';
// import { middleware as body } from 'bodymen';

import { show, showProperties, showProperty } from './controller';

const router = new Router();

/**
 * Displays Pi's model.
 */
router.get('/', show);

/**
 * Returns Pi's properties.
 */
router.get('/properties', showProperties);

/**
 * Returns a Pi's single property.
 */
router.get('/properties/:id', showProperty);

export default router;
