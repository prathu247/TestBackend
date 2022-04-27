import sinon from 'sinon';
import {getData} from './news.controller';
import * as newsService from './news.service';
interface ResponseFormat{
	status?:any,
	json?: any
} 
const mockResponse = () => {
	const res:ResponseFormat = {};
	res.status = jest.fn().mockReturnValue(res);
	res.json = jest.fn().mockReturnValue(res);
	return res;
  };

module.exports = () => {
	describe("News controller", () => {
		let callNewsAPIStub;

		beforeEach(() => {
			callNewsAPIStub = sinon.stub(newsService, "callNewsAPI");
			callNewsAPIStub.returns(Promise.resolve({}));
		});
		afterEach(() => {
			sinon.restore();
		});
		it("calls stub for success", async () => {
			// arrange
			
			
			const req = {
				query: {
					queryString: "",
					fromDate: "",
					toDate:""
				},
			};
			const res = mockResponse();
    
			// act
			await getData(req, res);
			// assert
			expect(res.status).toHaveBeenCalledWith(200);
		});
    });
};


