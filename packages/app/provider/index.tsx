import React, { ReactNode } from 'react'
import { SafeArea } from './safe-area'
import { Provider as PaperProvider } from 'react-native-paper';


export function Provider({ children }: { children: ReactNode }) {
  return (

    <SafeArea>
      <PaperProvider>
        {children}
      </PaperProvider>
    </SafeArea>

  )
}
