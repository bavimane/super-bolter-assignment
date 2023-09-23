import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import InfoIcon from "@mui/icons-material/Info";
import {
  ImageListItemBar,
  Badge,
  IconButton,
  ImageListItem,
  ImageList,
} from "@mui/material";

import { DATA } from "./constants";

const DesignList = () => {
  return (
    <>
      <ImageList cols={3} gap={8}>
        {DATA.map((item) => (
          <ImageListItem key={item.id}>
            <img src={item.image} alt={`info about ${item.id}`} />

            <ImageListItemBar
              actionIcon={
                <>
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.id}`}
                  >
                    <Badge badgeContent={item.likes} color="primary">
                      <ThumbUpAltIcon
                        style={{ color: "grey", display: "flex" }}
                      />
                    </Badge>
                  </IconButton>
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.id}`}
                  >
                    <InfoIcon style={{ color: "grey", display: "flex" }} />
                  </IconButton>
                </>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

export default DesignList;
