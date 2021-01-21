import React from "react";
import ImageUploader from "react-images-upload";
import { Row, Col, Form, Image, Spinner } from "react-bootstrap";
import { capitalize } from "../../../methods/capitalize";
import "./photoForm.css";

type TOnChange = (picture: File[]) => void;

interface PhotoFormProps {
  onChangePhoto: TOnChange;
  loading: boolean;
  photo: string;
}

const PhotoForm: React.FC<PhotoFormProps> = ({
  onChangePhoto,
  loading,
  photo,
}) => {
  return (
    <>
      <Row>
        <Col xs={3} />
        <Col xs={6}>
          <div className="space"></div>
          <Form className="form">
            <Form.Group controlId="formBasicPhoto">
              <Form.Label className="form__label">
                {capitalize("zdjęcie")}
              </Form.Label>
              <ImageUploader
                fileContainerStyle={{
                  height: 55,
                  fontFamily: "OpenSans-Regular",
                  border: "1px solid #CED4DA",
                  backgroundColor: "#e2f3f5",
                }}
                withIcon={false}
                singleImage={true}
                withLabel={false}
                buttonText={capitalize("wybierz zdjęcie")}
                buttonStyles={{
                  fontFamily: "OpenSans-Regular",
                  fontSize: "0.8vw",
                }}
                onChange={(picture: File[]) => onChangePhoto(picture)}
                imgExtension={[".jpg", "jpeg", ".gif", ".png", ".gif"]}
                fileTypeError={capitalize("nieprawidłowy format pliku")}
              />
            </Form.Group>
          </Form>
        </Col>
        <Col xs={3} />
      </Row>
      <Row className="mt-4" />
      <Row>
        <Col xs={3} />
        <Col xs={6}>
          {loading && (
            <Spinner animation="border" role="status">
              <span className="sr-only">loading...</span>
            </Spinner>
          )}
          {photo.length > 0 && (
            <Image className="preview" src={photo} roundedCircle />
          )}
        </Col>
        <Col xs={3} />
      </Row>
    </>
  );
};

export default PhotoForm;
