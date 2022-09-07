import MediaQuery from "react-responsive";

export default function ResponsiveWrapper(props) {
  return (
    <>
      <MediaQuery minWidth={786}>{props.large}</MediaQuery>
      <MediaQuery maxWidth={786}>{props.small}</MediaQuery>
    </>
  );
}
