
import UrlModel from "../model/url.model.js";
import shortId from 'shortid'
export async function handleGenerateNewShortUrl (req,res) {

      const url = req.query.url;
      if(!url) return res.status(400).json({error:'url is required'})
      const shortID = shortId() 
      const record = new UrlModel({
        redirectURL: url,
        shortId:shortID
      })
      await record.save()

      return res.status(201).json({record})

}

export async function generateshortId (req,res) {
         const shortId = req.params.shortId;
       const entry =  await UrlModel.findOneAndUpdate(
         {
            shortId
         },{
            $push:{
                visitHistory:{
                    timestamp: Date.now()
                }
            }
         })
         entry.clicks++
         await entry.save()
         res.redirect(entry.redirectURL)
} 