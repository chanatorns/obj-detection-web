import { makeAutoObservable } from "mobx";
import { analyze } from '../api/objectDetection';
import { AnalyzeData, File } from "../definitions/analyzeData";

class DataStore {
  file: File = null;
  loading = false;
  analyzeData: AnalyzeData;

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

export default dataStore;