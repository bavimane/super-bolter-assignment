import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal({
  openModal,
  toggleModal,
  selectedItem,
  handleAddComment,
}) {
  const [commentValue, setCommentValue] = React.useState("");
  const comments = (selectedItem && selectedItem.comments) || [];

  return (
    <Dialog
      open={openModal}
      TransitionComponent={Transition}
      keepMounted
      onClose={toggleModal}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{selectedItem.title}</DialogTitle>
      <DialogContent>
        <img src={selectedItem.image} alt="design-img" height={350} />

        <div>
          <h4>Comments</h4>
          <div className="comment-form-wrapper">
            <TextField
              id="outlined-multiline-flexible"
              label="Add Comment"
              multiline
              maxRows={3}
              variant="standard"
              value={commentValue}
              onChange={(e) => {
                setCommentValue(e.target.value);
              }}
              style={{ width: "50%" }}
            />
            <Button
              variant="outlined"
              onClick={() => {
                handleAddComment([...comments, commentValue]);
                setCommentValue("");
              }}
            >
              Add
            </Button>
          </div>

          {comments.map((comment, index) => {
            return (
              <>
                <div style={{ display: "flex", gap: "6px" }} key={index}>
                  <h5>{comment}</h5>
                  <IconButton
                    aria-label="delete"
                    onClick={() => {
                      const filteredComments = comments.filter(
                        (item) => item !== comment
                      );
                      handleAddComment([...filteredComments]);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
                <Divider />
              </>
            );
          })}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleModal}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
