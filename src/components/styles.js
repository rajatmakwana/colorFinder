import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    border: {
        border: 'solid',
    },
    fullHeightCard: {
        height: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingBottom: '5px',
        height: '100px',
        // borderBottom: '10px solid white',
    },
    activeCard: {
        borderBottom: '10px solid #22289a',
    },
    grid: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
    },
    title: {
        padding: '0 16px',
        marginRight: '100px',
        paddingRight: '100px',
        // color: 'white',
        color: 'white',
        // border: 'solid 3px #0ff',
        // outline: '2px solid white',
    },

});