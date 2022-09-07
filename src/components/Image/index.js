import React, { useState } from "react";
import Link from "@mui/material/Link";
import ImageDialog from "../../components/Dialog/Image";

function Image(props) {
  const { title, imgPath, width = 100, height = 100 } = props;
  const [isOpen, setOpen] = useState(false);

  const viewImage = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="text-center">
      {isOpen ? (
        <ImageDialog
          open={isOpen}
          title={title}
          imgPath={`${imgPath}`}
          handleClose={viewImage}
        />
      ) : (
        <></>
      )}
      <Link onClick={() => viewImage()}>
        {title && <img src={`${imgPath}`} height={height} width={width} />}
      </Link>
    </div>
  );
}

export default Image;
