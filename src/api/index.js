import { Router } from 'express';

import pi from './pi';

const router = new Router();

router.get('/pi', pi);

export default router;
