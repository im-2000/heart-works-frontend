import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { postArtwork } from "../../store/user/actions";
import { useDispatch } from "react-redux";

export default function StartAuction() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [minimumBid, setMinimumBid] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // function submitForm(event) {
  //   event.preventDefault();

  //   // console.log(name, content, imageUrl);
  //   dispatch(postArtwork(title, minimumBid, imageUrl));
  // }

  return (
    <Form as={Col} md={{ span: 6, offset: 3 }}>
      <h1 className="mt-5 mb-5">
        Post one of your artworks to start receiving offers
      </h1>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder="Name of your artwork"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Minimum Bid</Form.Label>
        <Form.Control
          value={minimumBid}
          onChange={(event) => setMinimumBid(event.target.value)}
          type="text"
          placeholder="Minimum Bid"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Image url</Form.Label>
        <Form.Control
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
          type="text"
          placeholder="A picture says more than 1000 words"
        />
        {imageUrl ? (
          <Col className="mt-4" md={{ span: 8, offset: 2 }}>
            <Image src={imageUrl} alt="preview" thumbnail />
          </Col>
        ) : null}
      </Form.Group>

      <Form.Group className="mt-5">
        <Button variant="primary" type="submit">
          Post!
        </Button>
      </Form.Group>
    </Form>
  );
}
