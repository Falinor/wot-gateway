import { Router } from 'express';

import { show, showProperties } from './controller';

const router = new Router();

router.get('/', show);
router.get('/properties', showProperties);

export default router;
