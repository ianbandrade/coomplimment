import { Router } from 'express';
import { AuthUserController } from '../controllers/AuthUserController';
import { CreateTagController } from '../controllers/CreateTagController';
import { CreateUserController } from '../controllers/CreateUserController';
import { ensureAdmin } from '../middlewares/ensureAdmin';

export const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authUserController = new AuthUserController();

router.post('/users', ensureAdmin, createUserController.handle);
router.post('/tags', ensureAdmin, createTagController.handle);
router.post('/login', authUserController.handle);
