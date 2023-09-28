import React, { useContext, useEffect, useState } from 'react'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import { useNavigate } from 'react-router-dom'
import strophe from '~/public/images/trophee.svg'
import { AuthContext } from '~/provider/AuthProvider'

interface Props {
  active?: boolean
}
const stylesProgress: Record<string, unknown> = {
  rotation: 0.3,
  strokeLinecap: 'round',
  pathTransitionDuration: 1.5,
  pathColor: '#6F6DFF',
  trailColor: 'inherit',
  backgroundColor: '#6F6DFF',
}

const TropheeProgress = ({ active = false }: Props) => {
  const [percentage, setPercentage] = useState<number>(0)
  const { trophies } = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    const valueTrophie: number = Math.round(100 / trophies.length)
    const lengthTrophies: number = trophies.filter(t => t.earned).length
    setPercentage(lengthTrophies * valueTrophie)
  }, [trophies])

  return (
        <div className="text-center my-10 px-10 flex flex-col justify-center items-center">
            <div className="w-[200px] h-[200px]" data-cy-root="progress-circular">
                <CircularProgressbarWithChildren value={percentage} styles={buildStyles(stylesProgress)} >
                    <img className="pt-4" src={strophe} alt=""/>
                </CircularProgressbarWithChildren>
            </div>
            {active
              ? <div className="text-white cursor-pointer mt-5 block text-[1rem] font-medium underline" onClick={() => navigate('/account/trophies', {replace: true })}>
                Voir mes trophées</div>
              : <span className="text-primary-1 font-bold text-[2rem] mt-5">{`${percentage}% complété`}</span>}
        </div>
  )
}

export default TropheeProgress
