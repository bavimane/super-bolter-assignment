import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import { ImageListItemBar } from "@mui/material";
import Badge from "@mui/material/Badge";

const DesignList = () => {
  const data = [
    {
      id: 1,
      image:
        "https://sbcdn1.superbolter.com/atom/themes/otlhHiPryHzjBhDcX7mJ2Q/medium_24F__1_.jpg",
      likes: 2,
      comments: [],
    },
    {
      id: 2,
      image:
        "https://sbcdn1.superbolter.com/atom/themes/ppVgaTAdU-l_pbfZXHqw7w/medium_23F__1_.jpg",
      likes: 0,
      comments: [],
    },
    {
      id: 3,
      image:
        "https://sbcdn1.superbolter.com/atom/themes/tohQXzghpooKZVMmmH04hA/medium_22F__1_.jpg",
      comments: [],
    },
    {
      id: 4,
      image:
        "https://sbcdn1.superbolter.com/atom/themes/8Yopql2EZmSztJBASV7WzA/medium_16F__1_.jpg",
      comments: [],
    },
    {
      id: 5,
      image:
        "https://sbcdn1.superbolter.com/atom/themes/LRn9ZWt-G-N_UZjleYxNBQ/medium_15F1.jpg",
      comments: [],
    },
    {
      id: 6,
      image:
        "https://sbcdn1.superbolter.com/atom/themes/knFzDSOK077cepRrTwdzmA/medium_14F1.jpg",
      comments: [],
    },
    {
      id: 7,
      image:
        "https://sbcdn1.superbolter.com/atom/themes/hMAvyhIgshzPhtG0m2uwFQ/medium_13F1.jpg",
      comments: [],
    },
    {
      id: 8,
      image:
        "https://sbcdn1.superbolter.com/atom/themes/Zc92-6ehMtPUN9eAezGcvg/medium_2F1.jpg",
      comments: [],
    },
    {
      id: 9,
      image:
        "https://sbcdn1.superbolter.com/atom/themes/tohQXzghpooKZVMmmH04hA/medium_22F__1_.jpg",
      comments: [],
    },
    {
      id: 10,
      image:
        "https://sbcdn1.superbolter.com/atom/themes/tohQXzghpooKZVMmmH04hA/medium_22F__1_.jpg",
      comments: [],
    },
  ];
  return (
    <div>
      <ImageList cols={3} gap={8}>
        {data.map((item) => (
          <ImageListItem key={item.image}>
            <img src={item.image} alt="" />

            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <>
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                  >
                    <Badge badgeContent={item.likes} color="primary">
                      <ThumbUpAltIcon
                        style={{ color: "grey", display: "flex" }}
                      />
                    </Badge>
                  </IconButton>
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                  >
                    <InfoIcon style={{ color: "grey", display: "flex" }} />
                  </IconButton>
                </>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default DesignList;
