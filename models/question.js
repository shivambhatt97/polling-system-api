const mongoose= require('mongoose');

const questionSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    option: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'option'
        }
    ],
    totalVotes:{
        type: Number,
        default:0
    },
},{
    timestamps: true
});

const Question= mongoose.model('Question', questionSchema);
module.exports = Question;