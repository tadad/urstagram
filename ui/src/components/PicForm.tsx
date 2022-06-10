import React, { useState } from 'react'
import { useUrbitReact } from '../context'

export default function PicForm() {
  const { urbit } = useUrbitReact()
  const [pic, setPic] = useState('https://dachus-tiprel.nyc3.digitaloceanspaces.com/dachus-tiprel/2022.5.22..13.21.47-B1826A01-1AA3-4C75-9347-7ADBE475607E.jpeg')
  const [desc, setDesc] = useState('My description Testing 123')

  const onSubmit = () => {
    const id = Date.now()
    
    urbit.poke({
      app: 'pics',
      mark: 'pics-action',
      json: {
        'add': {
          id,
          pic,
          desc
        }
      },
      onSuccess: () => console.log('success'),
      onError: () => console.log('error')
    })
  } 
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit()
      }}
    >
      <input
        placeholder='https://...'
        value={pic}
        onChange={e => setPic(e.target.value)}
      />
      <input
        placeholder='description'
        value={desc}
        onChange={e => setDesc(e.target.value)}
      />
      <button type="submit">post</button>
    </form>
  )
}