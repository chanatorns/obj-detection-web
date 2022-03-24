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
  setAnalyzeData = (v: AnalyzeData) => this.analyzeData = v;


  fetchAnalyze = async () => {
    this.setLoading(true);
    const result = await analyze(this.file.base64)
      .catch(() => null);
    this.setAnalyzeData(result);
    this.setLoading(false);
  }
}

let dataStore: DataStore = null;
if (!dataStore) {
  dataStore = new DataStore();
}

export default dataStore;