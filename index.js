import React from 'react'
import {render} from 'react-dom'
import App from './src/components/App'
import {AuthContextProvider} from './src/store/auth-context'


render(<AuthContextProvider><App/></AuthContextProvider>,document.getElementById("app"))