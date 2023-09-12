import "./App.css";
import { useRef, useState } from "react";
import { createUploadImage } from "./fetcher";

function App() {
  const [previewImage, setPreviewImage] = useState("");
  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleChangePreview = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (!ev.target.files) {
      return;
    }
    const file = ev.target.files[0];

    setPreviewImage(URL.createObjectURL(file));
  };

  const [load, setLoad] = useState(false);

  const handleClickUpload = async () => {
    const fileList = inputFileRef.current?.files;

    if (!fileList || !fileList.length) {
      return;
    }
    const file = fileList[0];
    setLoad(true);
    const res = await createUploadImage(file);
    console.log(res);
    setLoad(false);
  };

  if (load) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2 className="text-3xl font-bold">画像をアップロード</h2>
      <div className="flex justify-center items-center mt-8">
        <img
          src={previewImage}
          alt="画像が選択されていません。"
          className="h-32 w-32"
        />
        <input
          type="file"
          onChange={handleChangePreview}
          ref={inputFileRef}
          accept="image/*"
          style={{ display: "none" }}
        />
      </div>
      <button onClick={() => inputFileRef.current?.click()}>
        ファイルを選択
      </button>
      {previewImage && (
        <button onClick={handleClickUpload}>アップロードする</button>
      )}
    </>
  );
}

export default App;
