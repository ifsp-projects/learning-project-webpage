'use client'

import React, { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { textEditorAPK } from '@/environments/textEditorAPK'

type TextEditorProps = {
  value: string
  setValue: (newValue: string) => void
}

const TextEditor = ({ value, setValue }: TextEditorProps) => {
  const editorRef = useRef<any>(null)
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent())
    }
  }
  return (
    <>
      <Editor
        apiKey={textEditorAPK}
        onInit={(evt, editor) => (editorRef.current = editor)}
        value={value}
        onEditorChange={newValue => setValue(newValue)}
        init={{
          height: 400,
          menubar: false,
          plugins: [
            'advlist',
            'autolink',
            'lists',
            'link',
            'image',
            'charmap',
            'preview',
            'anchor',
            'searchreplace',
            'visualblocks',
            'code',
            'fullscreen',
            'insertdatetime',
            'media',
            'table',
            'code',
            'help',
            'wordcount'
          ],
          toolbar:
            'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
    </>
  )
}

export default TextEditor
