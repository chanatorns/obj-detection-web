import { BoundingBox } from "@nipacloud/nvision/dist/proto/generated/NvisionRequest_pb";
import { makeAutoObservable } from "mobx";
import { analyze } from '../api/objectDetection';

class DataStore {
  private file: File = {
    base64: null
  };
  private loading = false;
  private analyzeData: AnalyzeData;

  constructor() {
    makeAutoObservable(this);
  }

  setLoading = v => this.loading = v;
  setFile = (v: File) => this.file = v;
  setAnalyzeData = v => this.analyzeData = v;


  fetchAnalyze = async () => {
    const result = await analyze(this.file.base64)
      .catch(() => null);
    this.setAnalyzeData(result);
  }
}

let dataStore: DataStore = null;
if (!dataStore) {
  dataStore = new DataStore();
}

type File = {
  base64: string
}

type DetectedObjects = {
  bounding_box: BoundingBox[],
  confidence: number,
  name: string,
  parent: string
}

type AnalyzeData = {
  detected_objects: DetectedObjects[],
  service_id: string
}

export default dataStore;