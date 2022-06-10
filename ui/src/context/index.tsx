import { createContext, useContext, useState, useEffect } from 'react'
import type { Context, ReactNode } from 'react'
import {
  PatpNoSig,
  Urbit,
} from '@urbit/http-api'

export type UrbitContextType = {
  urbit: Urbit
}

interface Window {
  ship?: PatpNoSig;
}

const UrbitContext = createContext<UrbitContextType | undefined>(undefined)

export interface UrbitReactProviderProps {
  children: ReactNode
  fakeZodMode?: boolean 
}

export function UrbitReactProvider({
  children,
  fakeZodMode = false
}: UrbitReactProviderProps) {
  const [urbit, setUrbit] = useState(new Urbit(''))

  useEffect(() => {
    const connect = async () => {
      if (typeof window === 'undefined') {
        return
      } else {
        if (fakeZodMode) {
          const shp = 'zod'
          const urb = await Urbit.authenticate({
            ship: 'zod',
            url: 'localhost',
            code: 'lidlut-tabwed-pillex-ridrup',
            verbose: true,
          })
          urb.ship = shp
          setUrbit(urb)
        } else {
          urbit.ship = (window as Window).ship
        }
      }
    }

    connect()
  }, [])

  return (
    <UrbitContext.Provider
      value={{
        urbit,
      }}
    >
      {children}
    </UrbitContext.Provider>
  )
}

export function useUrbitReact(): UrbitContextType {
  const context = useContext(UrbitContext as Context<UrbitContextType | undefined>)
  if (!context) throw Error('useUrbitReact can only be used within the UrbitReactProvider component')
  return context
}