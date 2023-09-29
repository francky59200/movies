import React from 'react'
import TropheeProgress from '~/elements/TropheeProgress/TropheeProgress'
import HeaderAccount from '~/components/HeaderAccount/HeaderAccount'
import { DetailsTrophees } from '~/pages/Dashboard/partials/DetailsTrophees/DetailsTrophees'

const Trophies = () => {
  React.useEffect(() => {
    document.body.style.backgroundColor = '#272832'
  }, [])

  return (
        <>
            <HeaderAccount />
            <TropheeProgress active={false} />
            <DetailsTrophees />
        </>
  )
}

export default Trophies
