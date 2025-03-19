import React, { useState } from "react";
import Axios from "axios";

export default function UploadContent() {
  const [selectedUploadContent, setSelectedUploadContent] = useState("");
  const [succesfullyUploaded, setSuccesfullyUploaded] = useState(false);
  const uploadContentVideoPhoto = () => {
    let formData = new FormData();
    formData.append("file", selectedUploadContent);
    formData.append("upload_preset", "tzhnmdgj");
    Axios.post(
      "https://api.cloudinary.com/v1_1/dk5acaaxg/video/upload",
      formData
    ).then((Response) => {
      console.log(Response);
      console.log(Response.data.version);
    });
    setSuccesfullyUploaded(true);
    setTimeout(() => {
      setSuccesfullyUploaded(false);
    }, 3000);
  };
  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          setSelectedUploadContent(e.target.files[0]);
        }}
      />
      <button onClick={uploadContentVideoPhoto}>Upload Video</button>
      {succesfullyUploaded && "File is being Uploaded"}
    </div>
  );
}
