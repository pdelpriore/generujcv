export const makeImageBinary = (picture: File[]) => {
  return new Promise<string>((resolve) => {
    if (picture.length > 1) picture = picture.splice(picture.length - 1, 1);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(picture[0]);
    fileReader.onloadend = () => {
      resolve(fileReader.result as string);
    };
  });
};
