import NewsAPI from 'newsapi';
class NewsAPIClass {
    private static instance:any;
    private constructor() { }
    public static getInstance(): any {
        if (!NewsAPIClass.instance) {
            NewsAPIClass.instance = new NewsAPI(process.env.API_KEY);
            
        }

        return NewsAPIClass.instance;
    }
}

export default NewsAPIClass;