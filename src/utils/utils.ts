import { reject } from "lodash";

export const getImageDimensions = (file: string) => {
  return new Promise (function (resolved, rejected) {
    var i = new Image()
    i.onload = () => {
      resolved({ w: i.width, h: i.height })
    };
    i.onerror = () => {
      reject('get image dimension failed : error load image')
    }
    i.src = file
  })
}