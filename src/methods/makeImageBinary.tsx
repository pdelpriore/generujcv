import imageCompression from "browser-image-compression";

export const makeImageBinary = (picture: File[]) => {
  return new Promise<string>(async (resolve) => {
    try {
      const fileReader = new FileReader();

      if (picture.length > 1 && picture[0].size < 300000) {
        picture = picture.splice(picture.length - 1, 1);

        fileReader.readAsDataURL(picture[0]);
        fileReader.onloadend = () => {
          resolve(fileReader.result as string);
        };
      } else {
        const imgCompressed = await imageCompression(picture[0], {
          maxSizeMB: 0.3,
          useWebWorker: true,
        });
        fileReader.readAsDataURL(imgCompressed);
        fileReader.onloadend = () => {
          resolve(fileReader.result as string);
        };
      }
    } catch (err) {
      if (err) console.log(err);
    }
  });
};
