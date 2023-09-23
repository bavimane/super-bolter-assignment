import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import BoltIcon from "@mui/icons-material/Bolt";

const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          color="transparent"
          style={{ background: "#8080803d" }}
        >
          <Toolbar>
            <BoltIcon />
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, marginLeft: 2 }}
            >
              Superbolt Interiors
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export { Header };
