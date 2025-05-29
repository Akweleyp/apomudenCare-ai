import { Schema, model } from "mongoose";
import normalize from "normalize-mongoose";

// create user schema for patients, doctors and nurses

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    telephoneNumber: {type:Number, required: true},

    role: {
      type: String,
      enum: ["patient","nurse", "doctor","admin"],
      // set the default role to user if not specified
      default: "user",
    },

       // 📸 New field for storing profile picture path or URL
    profilePicture: {
      type: String,
      default: "", // can be updated after upload
    },
    specialty: {type:String, required: true}

  }, {
    timestamps: true,
  }
);

userSchema.plugin(normalize);

export const UserModel = model("User", userSchema);
