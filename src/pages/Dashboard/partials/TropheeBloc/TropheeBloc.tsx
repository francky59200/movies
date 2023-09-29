import React from 'react'
import TropheeProgress from '~/elements/TropheeProgress/TropheeProgress'

const TropheeBloc = () => {
  return (
        <div className="mt-10">
            <h2 className="text-[2rem] text-white font-bold px-8">Trophée(s)</h2>
            <TropheeProgress active={true} />
        </div>
  )
}

export default TropheeBloc
