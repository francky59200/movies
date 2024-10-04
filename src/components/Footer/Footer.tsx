import React from 'react'
import tmb from '~/public/images/tmb.png'
import Button from '~/elements/Button/Button'

const Footer = () => {
  return (
        <footer className="bg-[#032541] py-10 mt-5">
            <div className='container mx-auto flex justify-between max-[640px]:flex-col'>
                <div className="flex flex-col gap-3">
                    <img
                        src={tmb}
                        alt="The Movie Database (TMDB)" width="130" height="94"/>
                    <Button text="Rejoindre la communauté"/>
                </div>

                <div className="flex flex-col text-white">
                    <h3 className='text-base font-bold'>Les bases</h3>
                    <ul>
                        <li><a href="/about">À propos de TMDB</a></li>
                        <li><a href="/about/staying-in-touch">Contactez-nous</a></li>
                        <li><a href="/talk">Forums d'assistance</a></li>
                        <li><a href="https://developer.themoviedb.org/docs" target="_blank">API</a></li>
                        <li><a href="https://status.themoviedb.org/" target="_blank" rel="noopener">Statut du
                            système</a>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col text-white">
                    <h3 className='text-base font-bold'>S'impliquer</h3>
                    <ul>
                        <li><a href="/bible"><span className="glyphicons glyphicons-asterisk"></span> Bible des
                            contributions</a></li>
                        <li><a href="/movie/new">Ajouter un film</a></li>
                        <li><a href="/tv/new">Ajouter une émission TV</a></li>
                    </ul>
                </div>
                <div className="flex flex-col text-white">
                    <h3 className='text-base font-bold'>Communauté</h3>
                    <ul>
                        <li><a href="/documentation/community/guidelines">Règles</a></li>
                        <li><a href="/discuss">Conversations</a></li>
                        <li><a href="/leaderboard">Top contributions</a></li>
                    </ul>
                </div>
            </div>
        </footer>
  )
}

export default Footer
