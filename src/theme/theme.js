import { createMuiTheme } from '@material-ui/core/styles';

const green = '#3da260';
const greenlight = '#84c341';
const orange = '#e71e26';
const orangelight = '#fbac36';
const dark = '#050706'

export default createMuiTheme({
    palette:{
        common:{
            green:`${green}`,
            orange: `${orange}`,
            black:`${dark}`
        },
        primary:{
            main:`${orange}`
        },
        secondary:{
            main:`${green}`
        }
    },
    typography:{
        fontFamily:'Open Sans Condensed'
    }
});