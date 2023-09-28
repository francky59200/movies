import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PictoSvg from '~/elements/PictoSvg/PictoSvg'
import short from '~/public/images/short.svg'
import { logout } from '~/actions/account'
import { AuthContext } from '~/provider/AuthProvider'

interface Props {
  goBack?: boolean
}

const HeaderAccount = ({ goBack }: Props) => {
  // const location = useLocation()
  const navigate = useNavigate()
  const { profile } = useContext(AuthContext)
  const [url, setUrl] = useState<boolean>(false)

  useEffect(() => {
    const locationSplit = location.pathname.split('/')
    if (locationSplit.length > 2 && locationSplit.includes('account')) {
      setUrl(true)
    }
  }, [url])

  const loggedUser = () => {
    logout()
    navigate('/')
  }
  const homeAccount = () => {
    navigate('/account')
  }
  return (
      <Fragment>
          <div className="flex justify-between mt-3 mb-5 mx-5">
              <button onClick={loggedUser} className="mb-2">
                  <PictoSvg icon='logout' />
              </button>
              <div className="rounded-full border-white py-2 px-3 border-2">
                  <img className="w-[1.5rem]" src={short} alt=""/>
              </div>
              <button>
                  <PictoSvg className="w-1.5" icon='profil' />
                  <p className="text-white">{profile.lastname}</p>
              </button>
          </div>
          {url && <button className="flex ml-7 items-center" onClick={homeAccount}>
              <PictoSvg icon='left' /><span className="hover:underline text-white">Acceuil</span>
          </button>}

      </Fragment>
  )
}

export default HeaderAccount
