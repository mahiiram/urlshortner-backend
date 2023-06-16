import mongoose from "mongoose";
import shortId from 'shortid'

export const UrlSchema = new mongoose.Schema({
    shortId : {
        type: String,
        required : true,
        default:shortId.generate
    },
    redirectURL: {
        type: String,
        required: true
    },
    visitHistory:[{timestamp:{type:Number}}]
},{timestamps:true})
const UrlModel = mongoose.model('url',UrlSchema);
export default UrlModel;