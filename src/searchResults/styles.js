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
    [theme.breakpoints.down("md")]: {
      width: "calc(25% - 20px)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    }
  },
  joinButton: {
    cursor: "pointer",
    borderRadius: "24px",
    width: "140px",
    marginTop: "3px",
  },
  mySpan: {
    display: "inline-block",
    width: "40px",
    height: "40px",
  },
  communityCardBox: {
    display: "flex",
    flexWrap: "wrap",
    gap: "26px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      flexWrap: "none",
      gap: "20px",
    },
  },
}));

export default useStyles;
