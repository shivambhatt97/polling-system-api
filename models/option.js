const mongoose= require('mongoose');

const optionSchema= new mongoose.Schema({
    text:{
        type: String,
        require: true
    },
    votes:{
        type:Number,
        default: 0
    },
    link_to_vote: {
        type:String
    },
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Question',
        require: true
    }
},{
    timestamps: true
});

const Option = mongoose.model('Option', optionSchema);

module.exports = Option;