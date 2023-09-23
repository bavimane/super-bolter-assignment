import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal({ openModal, toggleModal, selectedItem }) {
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
            />
            <Button
              variant="outlined"
              //   onClick={() => {
              //     handleAddComment();
              //   }}
            >
              Add
            </Button>
          </div>

          {comments.map((comment, index) => {
            return (
              <>
                <h5 key={index}>{comment}</h5>
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
