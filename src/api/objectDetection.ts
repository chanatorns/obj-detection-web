const nvision = require("@nipacloud/nvision/dist/browser/nvision");

const objectDetectionService = nvision.objectDetection({
  apiKey: process.env.REACT_APP_NVISION_API_KEY
});

export const analyze = async (data) => {
  const result = await objectDetectionService.predict({
    rawData: data
  });

  return result;
}
