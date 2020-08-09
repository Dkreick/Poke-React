import React from "react";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import IconButton from "@material-ui/core/IconButton";

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <div>
      <IconButton disabled={!gotoPrevPage} onClick={gotoPrevPage}>
        <NavigateBeforeIcon />
      </IconButton>
      <IconButton disabled={!gotoNextPage} onClick={gotoNextPage}>
        <NavigateNextIcon />
      </IconButton>
    </div>
  );
}
