import { Router } from 'express';
import { AuthUserController } from '../controllers/AuthUserController';
import { CreateComplimentController } from '../controllers/CreateComplimentController';
import { CreateTagController } from '../controllers/CreateTagController';
import { CreateUserController } from '../controllers/CreateUserController';
import { ensureAdmin } from '../middlewares/ensureAdmin';

export const router = Router();

const authUserController = new AuthUserController();
const createTagController = new CreateTagController();
const createUserController = new CreateUserController();
const createComplimentController = new CreateComplimentController();

router.post('/login', authUserController.handle);
router.post('/users', ensureAdmin, createUserController.handle);
router.post('/tags', ensureAdmin, createTagController.handle);
router.post('compliments', createComplimentController.handle);
