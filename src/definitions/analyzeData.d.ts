export type File = {
  base64: string
}

export type DetectedObjects = {
  bounding_box: BoundingBox,
  confidence: number,
  name: string,
  parent: string
}

export type AnalyzeData = {
  detected_objects: DetectedObjects[],
  service_id: string
}

export type BoundingBox = {
  bottom: number,
  left: number,
  right: number,
  top: number
}