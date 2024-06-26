const { default: mongoose } = require("mongoose");

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name field required']
        },
        age: {
            type: Number,
            required: [true, 'age field required'],
            default: 18
        },

        qualification: {
            type: String,
            required: [true, 'Name field required']

        },
    }
);



const User = mongoose.model("User", UserSchema);

module.exports = User