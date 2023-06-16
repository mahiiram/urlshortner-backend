import mongoose from "mongoose";


export const UrlSchema = new mongoose.Schema({
    shortId : {
        type: String,
        required : true,
    },
    redirectURL: {
        type: String,
        required: true
    },
    clicks:{
        type:Number,
        required:true,
        default:0
    },
    visitHistory:[{timestamp:{type:Number}}]
},{timestamps:true})
const UrlModel = mongoose.model('url',UrlSchema);
export default UrlModel;