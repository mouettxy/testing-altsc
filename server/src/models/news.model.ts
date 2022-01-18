import { Schema, Document, model } from 'mongoose'

export interface INews {
  title: string
  description: string
}

export default interface INewsModel extends Document, INews {}

const schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 3,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const News = model<INewsModel>('Store', schema)
