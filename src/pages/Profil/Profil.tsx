import React from 'react'
import image1 from '../../public/images/image1.png'
import image2 from '../../public/images/image2.png'
import font from '../../public/images/fond.jpeg'

const gradiant = {
  background: 'linear-gradient(360deg, white 0%, rgb(100, 33, 160, 0.9) 100%, rgb(100, 33, 160, 0.8) 100%)',
}

const Profil = () => {
  return (
        <div className="px-6 pb-8 pt-6" style={gradiant}>
            <div className="text-center text-white">
                <h1 className="text-[1.4rem] mb-3 font-bold">Que retenir du flot d'actualités sur l’énergie ?</h1>
                <p>Alors que la crise n’en finit pas, les enjeux socio-économiques,
                    politiques et climatiques qui en découlent sont devenus l’affaire de
                    tous : des grands industriels aux particuliers, en passant par les
                    petites entreprises et les collectivités.</p>
            </div>
            <div className="flex justify-between sm:text-[12px] md:text-[16px] lg:text-[16px] mt-12 mb-8">
                <div className="text-white flex items-center">
                    <img className="rounded-full w-[6rem] mr-3" src={image1} alt=""/>
                   <div>
                       <p className="font-bold mb-1">Marine Godelier</p>
                       <p>Journaliste Énergie de La Tribune</p>
                   </div>
                </div>
                <div className="text-white flex items-center">
                    <img className="rounded-full w-[6rem] mr-3" src={image2} alt=""/>
                    <div>
                        <p className="font-bold mb-1">Juliette Raymal</p>
                        <p>Journaliste Énergie de La Tribune</p>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-lg px-6 py-4 my-6">
                <p>
                    Pour y voir plus clair, les journalistes <span className="font-bold">Marine Godelier</span> et <span className="font-bold">Juliette
                    Raynal</span>, avec l’appui de l’ensemble de la rédaction de La Tribune, vous
                    proposent un nouveau rendez-vous hebdomadaire : la newsletter
                    Contre-Courant.
                </p>
                <p className="mt-4">
                    A travers des décryptages, des analyses et une plongée
                    dans les coulisses des décisions, elle décodera chaque vendredi cette
                    actualité complexe, et démêlera le vrai du faux.
                </p>
            </div>
            <p className="text-center  my-8 text-[#09156F] font-bold">Tous les vendredis à 11h la <span className="uppercase">Newsletter énergie</span> de la Tribune</p>
            <div className="flex justify-around">
                <img className=" w-[14rem]" src={font} alt=""/>
                <button className="rounded-full text-white font-bold px-10 py-2 bg-[#09156F] border-[#09156F]">S'abonner</button>
            </div>
        </div>
  )
}

export default Profil
