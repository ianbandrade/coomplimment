import { Router } from 'express';
import { AuthUserController } from '../controllers/AuthUserController';
import { CreateComplimentController } from '../controllers/CreateComplimentController';
import { CreateTagController } from '../controllers/CreateTagController';
import { CreateUserController } from '../controllers/CreateUserController';
import { ListTagController } from '../controllers/ListTagController';
import { ListUserReceivedComplimentsController } from '../controllers/ListUserReceivedComplimentsController';
import { ListUserSentComplimentsController } from '../controllers/ListUserSentComplimentsController';
import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuth } from '../middlewares/ensureAuth';

export const router = Router();

const authUserController = new AuthUserController();
const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();

const listUserReceivedComplimentsController =
  new ListUserReceivedComplimentsController();

const listUserSentComplimentsController =
  new ListUserSentComplimentsController();

const listTagController = new ListTagController();

router.post('/login', authUserController.handle);
router.post('/users', ensureAuth, ensureAdmin, createUserController.handle);
router.post('/tags', ensureAuth, ensureAdmin, createTagController.handle);
router.post('compliments', ensureAuth, createComplimentController.handle);

router.get(
  '/users/compliments/received',
  ensureAuth,
  listUserReceivedComplimentsController.handle
);
router.get(
  '/users/compliments/sent',
  ensureAuth,
  listUserSentComplimentsController.handle
);
router.get('/tags', listTagController.handle);
