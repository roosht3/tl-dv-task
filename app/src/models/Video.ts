import mongoose from 'mongoose';
import Joi from 'joi';
const { Schema } = mongoose;

export interface Video {
    name: string,
    url: string,
    thumbnailUrl: string,
    isPrivate: boolean,
    timesViewed: number,
}

const videoSchema = new Schema<Video>({
    name: String,
    url: String,
    thumbnailUrl: String,
    isPrivate: Boolean,
    timesViewed: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true
});

export const validationSchema = Joi.object({
    name: Joi.string().required(),
    url: Joi.string().uri().required(),
    thumbnailUrl: Joi.string().uri().required(),
    isPrivate: Joi.boolean().required(),
    timesViewed: Joi.number().integer(),
})


export default mongoose.model<Video>('Video', videoSchema);
