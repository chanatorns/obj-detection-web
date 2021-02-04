import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { encode } from 'base64-arraybuffer';
import { observer } from 'mobx-react-lite';
import fileStore from '../../store/fileStore';

const Dropzone = () => {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        const arraybuffer: any = reader.result
        const base64String = encode(arraybuffer)
        fileStore.setFile({
          base64: base64String
        })
      }
      reader.readAsArrayBuffer(file)
    })
    
  }, [])

  const { getRootProps, getInputProps } = useDropzone({ 
    accept: 'image/*',
    onDrop
  })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag n drop some files here, or click to select files</p>
    </div>
  )
}

export default observer(Dropzone);
