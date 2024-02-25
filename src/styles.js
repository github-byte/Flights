import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  activeCommunityCard: {
    backgroundColor: "#FAFAFA",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: `${16} !important`,
    padding: theme.spacing(1.5),
    boxShadow: "0 0 10px 0 rgba(0,0,0,.12) !important",
    "&:hover": {
      boxShadow:
        "0px 1px 8px 0px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 3px 3px -2px rgba(0,0,0,0.12)",
    },
  },
  search: {
    width:200,
    '&:hover':{
      color: 'rgba(0,0,0)'
    }
  }
}));

export default useStyles;
