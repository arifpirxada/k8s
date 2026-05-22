import mongoose from "mongoose";

const schema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        },
        subject: String,
    },
    {
        timestamps: true,
    }
);

const Email = mongoose.model("Email", schema);

export default Email;