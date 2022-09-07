import Image from "../../Image";

//constants
import { baseUrl, Post } from "../../../constants/api";

const renderImage = (params) => {
  let image = params.row.image;
  console.log(typeof image, "image");
  let imgUrl = typeof image === "object" ? image.mediaUrl : image;
  return (
    <div>
      <Image
        title={params.row.title}
        imgPath={`${baseUrl}${Post}/image/${imgUrl}`}
      />
    </div>
  );
};

export const postColumns = [
  {
    field: "id",
    headerName: "ID",
    flex: 1,
  },
  {
    field: "title",
    headerName: "Title",
    flex: 2,
  },
  {
    field: "image",
    headerName: "Image",
    flex: 1,
    renderCell: renderImage,
  },
];
