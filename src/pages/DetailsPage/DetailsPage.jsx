// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import ArtWork from "../../components/Space/Space";
// import StoryCarousel from "../../components/StoryCarousel/StoryCarousel";
// import Container from "react-bootstrap/Container";
// import Loading from "../../components/Loading";
// import { fetchSpaceById } from "../../store/space/actions";
// import { selectSpaceDetails } from "../../store/space/selector";

// export default function SpaceDetails() {
//   const { id } = useParams();
//   const space = useSelector(selectSpaceDetails);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchSpaceById(id));
//   }, [dispatch, id]);

//   if (!space || parseInt(space.id) !== parseInt(id)) return <Loading />;

//   return (
//     <>
//       <Space
//         style={{
//           backgroundColor: "black",
//           color: space.color,
//         }}
//         id={space.id}
//         title={space.title}
//         description={space.description}
//         backgroundColor={space.backgroundColor}
//         color={space.color}
//         showLink={false}
//         storyname={space.story}
//       />
//       <Container>
//         <StoryCarousel space={space} />
//       </Container>
//     </>
//   );
// }
