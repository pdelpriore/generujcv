import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/config/Store";
import ImageUploader from "react-images-upload";
import { Row, Col, Form, Image, Spinner } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { capitalize, capitalizeFirst } from "../../../methods/capitalize";
import "./photoForm.css";

type TOnChange = (picture: File[]) => void;
type TOnDelete = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;

interface PhotoFormProps {
  onChangePhoto: TOnChange;
  onDeletePhoto: TOnDelete;
  loading: boolean;
  photo: string;
}

const PhotoForm: React.FC<PhotoFormProps> = ({
  onChangePhoto,
  onDeletePhoto,
  loading,
  photo,
}) => {
  const { viewport } = useSelector((state: RootState) => state.viewportState);

  return (
    <>
      <Row>
        <Col xl={3} xs={1} />
        <Col xl={6} xs={10}>
          <div className="space"></div>
          <Form className="form">
            <Form.Group className="form__group" controlId="formBasicPhoto">
              <Form.Label className="form__label">
                {capitalize("zdjęcie")}
              </Form.Label>
              <div className="form__uploader">
                <ImageUploader
                  className="form__uploader-uploader"
                  fileContainerStyle={{
                    height: viewport > 319 && viewport <= 374 ? 20 : 55,
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
                    fontSize:
                      viewport > 319 && viewport <= 374 ? "2.7vw" : "0.8vw",
                  }}
                  onChange={(picture: File[]) => onChangePhoto(picture)}
                  imgExtension={[".jpg", "jpeg", ".gif", ".png", ".gif"]}
                  fileTypeError={capitalize("nieprawidłowy format pliku")}
                />
                <FontAwesomeIcon
                  onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) =>
                    onDeletePhoto(e)
                  }
                  className="form__uploader-delete"
                  icon={faTimes}
                />
              </div>
            </Form.Group>
          </Form>
        </Col>
        <Col xl={3} xs={1} />
      </Row>
      <Row
        className={`${viewport > 319 && viewport <= 374 ? "mt-1" : "mt-4"}`}
      />
      <Row>
        <Col xl={3} xs={1} />
        <Col xl={6} xs={10}>
          {loading && (
            <div className="loading">
              <Spinner
                className="loading__spinner"
                animation="border"
                size="sm"
                role="status"
              ></Spinner>
              <span className="loading__content">
                {capitalizeFirst("trwa ładowanie ...")}
              </span>
            </div>
          )}
          {photo.length > 0 && (
            <Image className="preview" src={photo} roundedCircle />
          )}
        </Col>
        <Col xl={3} xs={1} />
      </Row>
    </>
  );
};

export default PhotoForm;
