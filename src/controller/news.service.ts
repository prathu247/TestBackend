import NewsAPIClass from '../utils';

export const callNewsAPI = async (queryObject) => {
    const newsAPIInstance = NewsAPIClass.getInstance();
    try{
   const response =await newsAPIInstance.v2.everything(queryObject);
   return response;
    }
   catch(e){
          console.log('error===>',e);
          throw new Error("External Error");
      }

};

export default callNewsAPI;