import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AuthProvider from '~/provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
    <AuthProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    </AuthProvider>,
)
