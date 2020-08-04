import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const ConfirmDialog = (props) => {
  const { data, open, setOpen } = props;
  console.log(props.data);

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="confirm-dialog"
    >
      <DialogTitle id="confirm-dialog">{data.name}</DialogTitle>
      <DialogContent>
        Pokemon N°{data.order}
        <img src={data.sprites.other.dream_world.front_default} alt=""></img>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmDialog;
