import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import MovieReviews from "../movieReviews";

const profilePathRoot = "https://image.tmdb.org/t/p/w300";

const boxStyle = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  listStyle: "none",
  padding: "10px",
  margin: "10px",
};

const chipStyle = { margin: "3px" };

const stackStyle = {
  margin: "10px"
}

const MovieDetails = ({ movie, actors }) => {
  // Don't miss this!
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3">
        <i>Overview</i>
      </Typography>

      <Paper className="overview">
        <Box sx={{ ...boxStyle }}>
          <Typography variant="h6" component="p">
            {movie.overview}
          </Typography>
        </Box>
      </Paper>

      <Typography variant="h5" component="h3">
        <i>Basic Info</i>
      </Typography>

      <Paper className="basic-info">
        <Box className="genres-box" component="ul" sx={{ ...boxStyle }}>
          <li>
            <Chip label="Genres" sx={{ ...chipStyle }} color="primary" />
          </li>
          {movie.genres.map((g) => (
            <li key={g.name}>
              <Chip label={g.name} sx={{ ...chipStyle }} />
            </li>
          ))}
        </Box>
        <Box className="info-box" component="ul" sx={{ ...boxStyle }}>
          <Chip
            icon={<AccessTimeIcon />}
            label={`${movie.runtime} min.`}
            sx={{ ...chipStyle }}
          />
          <Chip
            icon={<MonetizationIcon />}
            label={`${movie.revenue.toLocaleString()}`}
            sx={{ ...chipStyle }}
          />
          <Chip
            icon={<StarRate />}
            label={`${movie.vote_average} (${movie.vote_count})`}
            sx={{ ...chipStyle }}
          />
          <Chip
            label={`Released: ${movie.release_date}`}
            sx={{ ...chipStyle }}
          />
        </Box>
        <Box className="prod-countries-box" component="ul" sx={{ ...boxStyle }}>
          <li>
            <Chip
              label="Production countries"
              sx={{ ...chipStyle }}
              color="primary"
            />
          </li>
          {movie.production_countries.map((c) => (
            <li key={c.name}>
              <Chip label={c.name} sx={{ ...chipStyle }} />
            </li>
          ))}
        </Box>
      </Paper>

      <Typography variant="h5" component="h3">
        <i>Top Billed Cast</i>
      </Typography>

      <Paper>
        <Box className="actor-box" flexDirection="column" sx={{ ...boxStyle }}>
          {actors.cast
            .filter((c) => c.known_for_department === "Acting")
            .map((c) => {
              return (
                <Stack direction="row" spacing={2} alignItems="center" sx={{ ...stackStyle }}>
                  <Avatar alt={c.name} src={`${profilePathRoot}${c.profile_path}`} />
                  <Typography variant="body2">
                    <b>{c.name}</b>
                  </Typography>
                  <Typography variant="body2">
                    <i>as</i>
                  </Typography>
                  <Typography variant="body2">
                    <b>{c.character}</b>
                  </Typography>
                </Stack>
              );
            })}
        </Box>
      </Paper>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={{
          position: "fixed",
          bottom: "1em",
          right: "1em",
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <MovieReviews movie={movie} />
      </Drawer>
    </>
  );
};
export default MovieDetails;
