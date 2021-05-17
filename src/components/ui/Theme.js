import {createMuiTheme} from '@material-ui/core/styles'

const mainBlue = "#00ACC1"
const mainPurple = "#9D45B0"
export default createMuiTheme({
    palette:{
        common:{
            blue:`${mainBlue}`,
            purple:`${mainPurple}`
        },
        primary:{
            main:`${mainBlue}`
        },
        secondary:{
            main:`${mainPurple}`
        }

    }
})