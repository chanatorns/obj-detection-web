import React, { useCallback, useMemo } from 'react'
import { useDropzone } from 'react-dropzone'
import { encode } from 'base64-arraybuffer';
import { observer } from 'mobx-react-lite';
import fileStore from '../../store/fileStore';
import { Wrapper } from './DropZone.styled';

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#275efe'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

const Dropzone = () => {
  const onDrop = useCallback((acceptedFiles) => {
    fileStore.setAnalyzeData(null);
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

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({ 
    accept: 'image/*',
    onDrop
  })
  
  const style = useMemo(() => ({
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);

  return (
    <Wrapper {...getRootProps({ style })}>
      <input {...getInputProps()} />
      <p>Drag n drop some files here, or click to select files</p>
    </Wrapper>
  )
}

export default observer(Dropzone);
