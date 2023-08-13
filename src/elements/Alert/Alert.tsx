import React from 'react'
import { toast, useToaster } from 'react-hot-toast/headless'
import { markdown } from 'markdown'
import PictoSvg from '~/elements/PictoSvg/PictoSvg'

const classNames = (...classes: any) => {
  return classes.join(' ')
}

const Alert = () => {
  const { handlers, toasts } = useToaster()
  const { startPause, endPause } = handlers

  return (
        <div className="fixed top-0 w-full">
            {toasts.filter(T => T.visible).map((T) => {
              const { id, type, message, duration } = T
              if (duration !== Infinity) {
                setTimeout(() => {
                  toast.dismiss(id)
                }, duration)
              }
              return <div key={id} onMouseEnter={startPause} onMouseLeave={endPause}
                          className={classNames(type === 'success' && 'bg-success', type === 'error' && 'bg-red-light', 'text-white items-center text-[1rem] text-center px-5 py-5 relative')}>
                  <p dangerouslySetInnerHTML={{ __html: markdown.toHTML(message) }} />
                  {duration === Infinity && <button className="absolute right-0.5 bottom-[1.2rem]" onClick={() => toast.dismiss(id)}><PictoSvg icon="close" /></button>}
                </div>
            })}

        </div>
  )
}

export default Alert
