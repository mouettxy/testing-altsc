import { Schema, Document, model } from 'mongoose'
import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import { JWT_EXPIRE, JWT_SECRET } from '../config/config'

export interface IUser {
  credentials: string
  email: string
  hashPassword: string
  salt: string
}

export interface IUserToAuthJSON {
  credentials: string
  name: string
  email: string
}

export default interface IUserModel extends Document, IUser {
  setPassword(password: string): void
  validPassword(password: string): boolean
  toAuthJSON(): IUserToAuthJSON
  generateJWT(): string
  generateAccessJWT(): string
  name: string
}

const schema = new Schema<IUserModel>(
  {
    credentials: {
      type: String,
      required: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
    },
    hashPassword: {
      type: String,
    },
    salt: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
)

schema.methods.setPassword = function (password: string) {
  this.salt = crypto.randomBytes(16).toString('hex')
  this.hashPassword = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex')
}

schema.methods.validPassword = function (password: string): boolean {
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex')
  return this.hashPassword === hash
}

schema.methods.generateJWT = function (): string {
  return jwt.sign(
    {
      id: this._id,
      credentials: this.credentials,
      email: this.email,
    },
    JWT_SECRET,
    {
      expiresIn: JWT_EXPIRE,
    },
  )
}

schema.methods.toAuthJSON = function () {
  const { credentials, name, email } = this

  return {
    name,
    credentials,
    email,
    token: this.generateJWT(),
  }
}

export const User = model<IUserModel>('User', schema)
