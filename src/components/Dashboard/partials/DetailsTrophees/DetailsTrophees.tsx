import React, {Fragment, useContext, useState} from 'react'
import { AuthContext } from '~/provider/AuthProvider'
import PictoSvg from '~/elements/PictoSvg/PictoSvg'

const classNames = (...classes: any) => {
  return classes.join(' ')
}

export function DetailsTrophees() {
  const { trophies } = useContext(AuthContext)
  const [showtext, setShowtext] = useState(null)

  const handleClicked = (index: any) => {
    setShowtext(prevState => prevState === index ? null : index)
  }

  return (
        <div className=" text-white">
            <h2 className="text-[2rem] font-bold px-8 mb-3.5">Mes trophée(s)</h2>
            <Fragment>
                {trophies.map((trophie, index) =>
                 <div className={classNames(trophie.earned ? 'border-b-white border-b-2 cursor-pointer' : 'opacity-25')}
                      onClick={e => trophie.earned
                        ? handleClicked(index)
                        : e.preventDefault()} key={index}>
                        <div className="flex justify-between items-center py-4">
                            <div className="flex pl-8">
                                <PictoSvg icon="trophy" />
                                <p className="ml-2">{trophie.label} {!trophie.earned && <span>[Vérouillé]</span>}</p>
                            </div>
                            {trophie.earned
                              ? <PictoSvg icon={showtext === index ? 'arrow-up' : 'arrow-down'} className="pr-8"/>
                              : <PictoSvg icon="lock" className="pr-8" /> }
                        </div>
                        {showtext === index && <p className="px-8 pb-4">{trophie.detail}</p>}
                    </div>)}
            </Fragment>
        </div>
  )
}
