import React from 'react'
import { Pic } from 'types'
import { useUrbitReact } from '../context'

type PicProps = {
  pic: Pic
}

export default function PicItem(props: PicProps) {
  const { pic : { id, pic, desc }} = props
  const { urbit } = useUrbitReact()

  const onDelete = () => {
    urbit.poke({
      app: 'pics',
      mark: 'pics-action',
      json: {
        'del': { id }
      },
      onSuccess: () => console.log('success'),
      onError: () => console.log('error')
    })
  }

  return (
    <div style={{ maxWidth: '50%'}}>
      <img src={pic}/>
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        <span>{new Date(id).toDateString()}</span>
        <span>{desc}</span>
        <button
          onClick={e => {
            e.preventDefault()
            onDelete()
          }}
        >delete</button>
      </div>
      <hr/>
    </div>
  )
}