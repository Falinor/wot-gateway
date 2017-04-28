import { Router } from 'express';

import pi from './pi';

const router = new Router();

router.use('/pi', pi);
// router.use('/things', things);

// Main route
router.get('/', (req, res, next) => {
  res.status(200).json('Welcome to Web of Things API');
});

export default router;
