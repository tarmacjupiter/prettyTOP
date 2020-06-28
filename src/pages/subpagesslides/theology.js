import React from "react";
import Logo from "../../components/elements/Logo";
import Bugs from "../../components/elements/Bugs";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "../../components/elements/Button";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    backgroundColor: "#424242",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    color: "white",
  },
});

function openTheology() {
  window.open("https://en.wikipedia.org/wiki/Theology");
}

export default function Theology() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Logo />
      <h1 style={{ textAlign: "center" }}>Theology</h1>
      <div>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
              the{bull}ol{bull}o{bull}gy
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              noun
            </Typography>
            <Typography
              variant="body2"
              component="p"
              style={{ color: "white" }}
            >
              the systematic study of the nature of the Divine and, more
              broadly, of religious belief. It is taught as an academic
              discipline, typically in universities and seminaries. "He has an
              interest in theology and pastoral work."
              <br />
              {'"monetarist orthodoxy"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={openTheology} color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </div>
      <Bugs />
    </div>
  );
}
