import { useState } from "react";
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
import Modal from "./Modal";

const DesignList = () => {
  const [data, setData] = useState(DATA);
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const handleLike = (id) => {
    let dataClone = [...data];
    const selectedIndex = dataClone.findIndex((item) => item.id === id);

    dataClone[selectedIndex].likes = dataClone[selectedIndex].likes + 1;
    setData(dataClone);
  };

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const handleSaveSelectedItem = (id) => {
    const selectedData = data.find((item) => item.id === id);
    setSelectedItem(selectedData);
  };

  return (
    <>
      <ImageList cols={3} gap={8}>
        {DATA.map((item) => (
          <ImageListItem key={item.id}>
            <img src={item.image} alt={`info about ${item.id}`} />

            <ImageListItemBar
              title={item.title}
              actionIcon={
                <>
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.id}`}
                    onClick={() => handleLike(item.id)}
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
                    onClick={() => {
                      handleSaveSelectedItem(item.id);
                      toggleModal();
                    }}
                  >
                    <InfoIcon style={{ color: "grey", display: "flex" }} />
                  </IconButton>
                </>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Modal
        openModal={openModal}
        toggleModal={toggleModal}
        selectedItem={selectedItem}
      />
    </>
  );
};

export default DesignList;
