import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import type { Pic } from 'types'
import PicForm from 'components/PicForm'
import PicItem from 'components/PicItem'
import { useUrbitReact } from 'context'

const Profile: NextPage = () => {
  const { urbit } = useUrbitReact()

  const [myPics, setMyPics] = useState<Pic[]>()

  useEffect(() => {
    const getMyPics = async () => {
      const myPics = await urbit.scry({
        app: 'pics',
        path: '/all'
      })
      setMyPics(myPics.feed)
    }

    getMyPics()
  })

  return (
    <>
      <main>
        <h1>
          Welcome to %pics {`~${urbit.ship}`}
        </h1>

        <p>Upload here:</p>
        <PicForm />
      </main>

      {
        myPics && myPics.map((pic, i) => (
          <PicItem
            key={i}
            pic={pic}
          />
        ))
      }
    </>
  )
}

export default Profile
