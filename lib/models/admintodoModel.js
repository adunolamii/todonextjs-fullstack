const { default: mongoose } = require("mongoose");

const Schema = new mongoose.Schema({
    title:{
        type: String,
        require:true,
    },
    description:{
        type: String,
        require:true,
    },
    isCompleted:{
        type: Boolean,
        default:false,
    },
}, {
    timeStamp:true
})
const admintodoModel = mongoose.models.admintodo || mongoose.model("admintodo", Schema)

export default admintodoModel;