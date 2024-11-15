const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Service name is required"],
        },
        description: {
            type: String,
            required: [true, "Service description is required"],
        },
        price: {
            type: Number,
            required: [true, "Price is required"],
        },
        currency: {
            type: String,
            default: "INR",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Service", serviceSchema)