import axios from "axios";

const url = "http://localhost:3000/images/upload";

export async function createUploadImage(file: File) {
  const formData = new FormData();

  Object.entries({ file }).forEach(([key]) => {
    formData.append(key, file);
  });

  const res = await axios.post(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
}
