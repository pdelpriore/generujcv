import { FormInputTypes } from "../hooks/form/formTypes";

export const getContacts = (inputs: FormInputTypes): string[] => [
  inputs.userData.contact.tel,
  inputs.userData.contact.email,
  `${inputs.userData.address.street} ${inputs.userData.address.streetNumber}${
    inputs.userData.address.flatNumber > 0
      ? `/${inputs.userData.address.flatNumber}`
      : ""
  }, ${inputs.userData.address.postCode} ${inputs.userData.address.city}`,
  decodeURI(inputs.userData.contact.linkedinUrl),
];
