import React from 'react'

const WorkoutBloc = () => {
  return (
        <div className="mt-10">
            <h2 className="text-[2rem] text-white font-bold px-8 mb-3.5">Entraînement(s)</h2>
            <ul className="px-8 py-4 flex justify-between text-white text-[1.1rem] bg-buttonColor font-medium">
                <li>
                    Date
                </li>
                <li>
                    Distance parcourue
                </li>
            </ul>
        </div>
  )
}

export default WorkoutBloc
