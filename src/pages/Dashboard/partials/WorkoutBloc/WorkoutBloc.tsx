import React, { useContext } from 'react'
import { AuthContext } from '~/provider/AuthProvider'
import Button from '~/elements/Button/Button'
import PictoSvg from '~/elements/PictoSvg/PictoSvg'

const WorkoutBloc = () => {
  const { user } = useContext(AuthContext)
  const convertDate = (date: number) => {
    return new Date(date).toLocaleDateString('fr-FR')
  }
  return (
        <div className="mt-10">
            <h2 className="text-[2rem] text-white font-bold px-8 mb-3.5">Entraînement(s)</h2>
            <table className="w-full">
                <thead className="text-white text-[1.1rem] font-medium bg-buttonColor">
                <tr className="text-center">
                    <th className="py-4">Date</th>
                    <th className="py-4">Distance</th>
                    <th className="py-4">Temps/km</th>
                    <th className="py-4"></th>
                </tr>
                </thead>
                <tbody>
                {user.map(work => <tr key={work.id} className="text-center border-b-white border-b-2 cursor-pointer">
                    <td className="py-4">{convertDate(work.date)}</td>
                    <td className="py-4">{work.totalKilometer}</td>
                    <td className="py-4">{work.timeKilometer}</td>
                    <td className="py-4"><PictoSvg icon="eye-show" /></td>
                </tr>)}
                </tbody>
            </table>
            <div className="px-6 border-t-white border-t-1 text-center mt-[5rem] mb-[1.5rem]">
                <Button id="change-form" text='Ajouter un entraînement' className="text-white" iconButton="plus" />
            </div>
        </div>
  )
}

export default WorkoutBloc
