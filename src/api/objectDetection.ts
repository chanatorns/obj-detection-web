import { AnalyzeData } from "../definitions/analyzeData";

const nvision = require("@nipacloud/nvision/dist/browser/nvision");

const apiKey = process.env.REACT_APP_NVISION_API_KEY;
const objectDetectionService = nvision.objectDetection({
  apiKey: apiKey
});

export const analyze = async (data) => {
  if (!apiKey) {
    console.log('You run without api key response is mocked from example response.')
    const mockResponse = await import('../example/sample1.response').then(m => m.mock);
    return mockResponse;
  }

  const result = await objectDetectionService.predict({
    rawData: data
  });
  return result as AnalyzeData;
}
