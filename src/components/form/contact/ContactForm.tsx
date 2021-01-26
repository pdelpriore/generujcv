import React from "react";
import { FormInputTypes } from "../../../hooks/form/useForm";
import { Form } from "react-bootstrap";
import { capitalize } from "../../../methods/capitalize";
import "./contactForm.css";

type TOnchange = (e: React.ChangeEvent<HTMLInputElement>) => void;

interface ContactFormProps {
  inputs: FormInputTypes;
  onchangeAddress: TOnchange;
}

const ContactForm: React.FC<ContactFormProps> = ({
  inputs,
  onchangeAddress,
}) => {
  return (
    <Form className="formContact">
      <Form.Group controlId="formContactStreet">
        <Form.Label>{capitalize("ulica *")}</Form.Label>
        <Form.Control
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onchangeAddress(e)
          }
          value={inputs.userData.address.street || ""}
          name="street"
          type="text"
          placeholder="ulica"
        />
      </Form.Group>
      <Form.Group controlId="formContactStreetNumber">
        <Form.Label>{capitalize("numer budynku *")}</Form.Label>
        <Form.Control
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onchangeAddress(e)
          }
          value={inputs.userData.address.streetNumber || ""}
          name="streetNumber"
          type="text"
          placeholder="numer ulicy"
        />
      </Form.Group>
      <Form.Group controlId="formContactFlatNumber">
        <Form.Label>{capitalize("numer mieszkania")}</Form.Label>
        <Form.Control
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onchangeAddress(e)
          }
          value={inputs.userData.address.flatNumber || ""}
          name="flatNumber"
          type="text"
          placeholder="numer mieszkania"
        />
      </Form.Group>
      <Form.Group controlId="formContactPostCode">
        <Form.Label>{capitalize("kod pocztowy *")}</Form.Label>
        <Form.Control
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onchangeAddress(e)
          }
          value={inputs.userData.address.postCode || ""}
          name="postCode"
          type="text"
          placeholder="00-999"
        />
      </Form.Group>
      <Form.Group controlId="formContactCity">
        <Form.Label>{capitalize("miejscowość *")}</Form.Label>
        <Form.Control
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onchangeAddress(e)
          }
          value={inputs.userData.address.city || ""}
          name="city"
          type="text"
          placeholder="miejscowość"
        />
      </Form.Group>
    </Form>
  );
};

export default ContactForm;
