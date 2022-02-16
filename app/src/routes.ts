import express, {Request, Response} from 'express'
import VideoController from './controllers/VideoController'


const router = express.Router();

router.get('/health-check', (req: Request, res: Response) => {
    return res.status(200).send('Ok');
});

router.get('/video', VideoController.index);
router.post('/video', VideoController.create);

router.get('/video/:id', VideoController.view);
router.put('/video/:id', VideoController.update);
router.delete('/video/:id', VideoController.delete);

export default router