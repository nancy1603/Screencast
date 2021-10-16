

import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
// import data from '../env.json';
import Avatar from "@material-ui/core/Avatar";
import Loader from "./Loader";

const StyledTableCell = withStyles((theme) => ({
  head: {
    // backgroundColor: "rgba(1, 247, 247, 0.72)",
    color: "white",
    border: "none",
    fontFamily: "Russo One",
    fontSize: 16,
    background: "linear-gradient(112.76deg, rgba(255, 255, 255, 0.04) 7.77%, rgba(255, 255, 255, 0.01) 87.65%)",
    backdropFilter: "blur(100px)",
    boxShadow: "1px 1px 2px rgba(1, 247, 247, 0.72)",
    
  },
  body: {
    fontFamily: "Russo One",
    fontSize: 13,
    color: "#fff",
    border: "none",
    padding:"10px"
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(1)": {
      backgroundColor: "#064244 !important",
      color: "#000 !important"
    },
    "&:nth-of-type(2)": {
      backgroundColor: "#064244 !important",
      color: "#000 !important"
    },
    "&:nth-of-type(3)": {
      backgroundColor: "#064244 !important",
      color: "#000 !important"
    },
    "&:nth-of-type(odd)": {
      backgroundColor: "#064244",
      color: "#000 !important"
    },
    "&:nth-of-type(even)": {
      backgroundColor: "#064244",
      color: "white !important",
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    margin:"15px auto",
    maxWidth: "900px",
    minWidth:"100px",
    width:"90%",
    overflowX: "hidden",
    
  },
});

export default function Leadertable() {
  const [RankList, setRankList] = useState(false);
  const [loaded, setloaded] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get(process.env.api + "/api/leaderboard")
      .then((response) => {
        setRankList(response.data);

      })
      .then(() => {
        setloaded(true);
      });
  }, []);

  return (
    <div>
      { (loaded === true) ?
        <div className="rtable">
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Rank</StyledTableCell>
                <StyledTableCell></StyledTableCell>
                <StyledTableCell align="left">Player</StyledTableCell>
                <StyledTableCell align="left">Points</StyledTableCell>
              </TableRow>
            </TableHead>
            {RankList.length ? (
              <TableBody style={{ fontFamily: "'Barlow', sans-serif" }}>
                {RankList.map((row, index) => (
                  <StyledTableRow
                    key={index}
                    style={{ fontFamily: "'Barlow', sans-serif" }}
                  >
                    <StyledTableCell component="th" scope="row">
                      {row.rank}.
                  </StyledTableCell>
                    <StyledTableCell align="left">
                      <Avatar
                        alt={name}
                        src={row.imgurl}
                      /></StyledTableCell>
                    <StyledTableCell>{row.name}</StyledTableCell>
                    <StyledTableCell align="left">{row.score}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            ) : (
                <Typography
                  variant="h6"
                  className={classes.title}
                  style={{ fontFamily: "'Russo One', sans-serif", fontSize: 18, color: 'white' }}
                >
                  &nbsp;&nbsp;&nbsp;Loading...
                </Typography>
              )}
          </Table>
        </div>
        : <Loader />}
    </div>
  );
}
