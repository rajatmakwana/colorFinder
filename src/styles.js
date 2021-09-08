import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
    root: {
        "& label": {
            width: "100%",
            textAlign: "center",
            fontSize: '1.2em',
            transformOrigin: "center",
            "&.Mui-focused": {
                transformOrigin: "center"
            }
        }
    },
    container: {
        padding: '0 5%',
        width: '100%',
        margin: 0,
    },
    input: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
})