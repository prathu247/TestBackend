import moment from 'moment'; 
import * as callNewsService  from './news.service';
interface QueryParam {
        q?: string,
        sources: string,
        domains: string,
        from?: string,
        to?: string,
        language: string,
        sortBy?: string,
        page: number
};

export const getData = async (req, res)=>{
    try {
    const {queryString, fromDate, toDate} = req.query;
    let queryObject:QueryParam  = {
        sources: 'bbc-news,the-verge',
        domains: 'bbc.co.uk, techcrunch.com', 
        language: 'en',
        page:1
    };
    if(fromDate != '' && toDate != ''){
        if(!moment(toDate).isSameOrAfter(moment(fromDate))){
            res.status(201).json({error:'Invalid Date Range provided'});
        }
    }
    if(queryString!=''){
        queryObject.q = queryString;
    }
    if(fromDate!=''){
        queryObject.from = fromDate;
    }
    if(toDate!=''){
        queryObject.to = toDate;
    }
    
    
    const response = await callNewsService.callNewsAPI(queryObject);
    console.log(response);
    res.status(200).json(response);
  
    } catch (e){
        console.log(e);
        res.status(500).json({error:'Error in external call'});
    }

    
}



export default {getData};


