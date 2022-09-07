import React from "react";
import { Grid, Typography } from "@mui/material";

// components
import Image from "../../components/Image";

//constants
import { baseUrl, Post } from "../../constants/api";

export default function MobilePost({ list }) {
  return list?.length > 0
    ? list.map((data, index) => <PostItem key={data.id} data={data} />)
    : null;
}

function PostItem({ data }) {
  let { id, title, image } = data;
  let imgUrl = typeof image === "object" ? image.mediaUrl : image;

  return (
    <div className="mt-10">
      <Grid container>
        <Grid item xs={4} sm={4} md={4} className="box">
          <Typography className="p-20-10 label-overflow">{id}</Typography>
        </Grid>
        <Grid item xs={8} sm={8} md={8} className="box">
          <Typography className="p-20-10 label-overflow">{title}</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} className="box">
          <div className="m-20">
            <Image
              title={title}
              width="80%"
              height="80%"
              imgPath={`${baseUrl}${Post}/image/${imgUrl}`}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
