import { Router } from 'express';
import { AuthUserController } from '../controllers/AuthUserController';
import { CreateComplimentController } from '../controllers/CreateComplimentController';
import { CreateTagController } from '../controllers/CreateTagController';
import { CreateUserController } from '../controllers/CreateUserController';
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

router.post('/login', authUserController.handle);
router.post('/users', ensureAdmin, createUserController.handle);
router.post('/tags', ensureAdmin, createTagController.handle);
router.post('compliments', ensureAuth, createComplimentController.handle);

router.get(
  'users/compliments/received',
  ensureAuth,
  listUserReceivedComplimentsController.handle
);
router.get(
  'users/compliments/sent',
  ensureAuth,
  listUserSentComplimentsController.handle
);
