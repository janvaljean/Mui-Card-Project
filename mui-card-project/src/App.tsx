import "./App.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Course from "./components/Course";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Csharp from "./images/ccsharp.png";
import CompleteWeb from "./images/kompleweb.jpg";

function App() {
  return (
    <div>
      <AppBar>
        <Toolbar sx={{ fontSize: 30 }}> Card Project</Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ marginTop: 10 }}>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Angular}
              title="Angular"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut a tempore voluptatum consectetur eius amet autem! Illum voluptate, optio, eius fugiat, dolores placeat sequi animi consequatur laborum totam debitis earumEx amet nemo necessitatibus tempore autem perspiciatis vel nihil, deleniti, magnam dolorum error id reprehenderit quisquam enim odit unde dolorem numquam assumenda molestiae quaerat debitis cum! Saepe deserunt molestias autem."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Bootstrap}
              title="Bootstrap"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut a tempore voluptatum consectetur eius amet autem! Illum voluptate, optio, eius fugiat, dolores placeat sequi animi consequatur laborum totam debitis earumEx amet nemo necessitatibus tempore autem perspiciatis vel nihil, deleniti, magnam dolorum error id reprehenderit quisquam enim odit unde dolorem numquam assumenda molestiae quaerat debitis cum! Saepe deserunt molestias autem."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={Csharp}
              title="Csharp"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut a tempore voluptatum consectetur eius amet autem! Illum voluptate, optio, eius fugiat, dolores placeat sequi animi consequatur laborum totam debitis earumEx amet nemo necessitatibus tempore autem perspiciatis vel nihil, deleniti, magnam dolorum error id reprehenderit quisquam enim odit unde dolorem numquam assumenda molestiae quaerat debitis cum! Saepe deserunt molestias autem."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Course
              image={CompleteWeb}
              title="CompleteWeb"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut a tempore voluptatum consectetur eius amet autem! Illum voluptate, optio, eius fugiat, dolores placeat sequi animi consequatur laborum totam debitis earumEx amet nemo necessitatibus tempore autem perspiciatis vel nihil, deleniti, magnam dolorum error id reprehenderit quisquam enim odit unde dolorem numquam assumenda molestiae quaerat debitis cum! Saepe deserunt molestias autem."
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
