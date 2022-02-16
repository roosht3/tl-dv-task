import Video, {validationSchema} from '../models/Video'
import {Request, Response} from 'express'

class VideoController {

    async index (req: Request, res: Response) {
        const limit = 10;
        const reqParam: number = parseInt(req.query.page as string);
        const page = reqParam >= 1 ? reqParam : 1;
        const skip = (page - 1) * limit;
        let query: any = {};

        if (req.body.public) {
            query.isPrivate = false
        }

        // if video is viewed more than 42 times. It is popular
        if (req.body.popular) {
            query.timesViewed = { $gt: 42 }
        }

        try {
            const results = await Video.find(query)
                            .limit(limit)
                            .skip(skip);
           
            return res.status(200).json(results);
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async view (req: Request, res: Response) {
        try {
            const video = await Video.findById(req.params.id);
            if (!video) {
                return res.status(404).send();
            }
            video.timesViewed = video.timesViewed + 1;
            await video.save();
            return res.json(video); 
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async create (req: Request, res: Response) {
        const { error, value } = validationSchema.validate(req.body);
        if (error) {
            return res.status(422).send(error);
        }
           
        try {
            const video = await Video.create(value);
            return res.json(video); 
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async update (req: Request, res: Response) {
        const { error, value } = validationSchema.validate(req.body)
        if (error) {
            return res.status(422).send(error);
        }

        try {
            const result = await Video.updateOne({_id: req.params.id}, value);
            if (result.matchedCount <= 0) {
                return res.status(404).send();
            }
            return res.status(204).json(result); 
        } catch (error) {
            return res.status(500).send(error);
        }
    }

    async delete (req: Request, res: Response) {
        try {
            const result = await Video.deleteOne({_id: req.params.id});
            if (result.deletedCount > 0) {
                return res.status(200).json(result); 
            }
            return res.status(404).send();
        } catch (error) {
            return res.status(500).send(error);
        }
    };
}

export default new VideoController();