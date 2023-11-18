import DeleteIcon from "assets/icons/DeleteIcon";
import DocumentIcon from "assets/icons/DocumentIcon";
import Upload from "assets/icons/Upload";
import prettyBytes from "pretty-bytes";
import { ChangeEvent, FC, InputHTMLAttributes, useState } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string; // required to link a label and it's unique input
}

const FileInputField: FC<Props> = ({ label, id, ...restProps }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) setFile(event.target.files[0]);
  };
  const deleteFile = () => setFile(null);

  return (
    <div>
      <span>{label}</span>
      <div className="relative flex items-center p-4 mt-2 text-sm rounded-lg spaced-dashed-border gap-4">
        <span className="p-2 w-fit flex justify-center items-center rounded-full bg-[#F5EEDC] text-[#7E7E7E]">
          {file ? <DocumentIcon /> : <Upload />}
        </span>
        <div>
          {file ? (
            <>
              <span className="text-[#717171] line-clamp-1">File: {file.name}</span>
              <span className="block text-xs text-[#828282] mt-2">
                File size: {prettyBytes(file.size)}
              </span>
            </>
          ) : (
            <>
              <label htmlFor={id} className="underline text-primary-blue cursor-pointer">
                Click to upload
              </label>
              <span className="text-[#717171] ml-3">Or Drag and Drop</span>
              <span className="block text-xs text-[#828282] mt-2">
                Maximum file size <span className="text-black">12mb</span>
              </span>
            </>
          )}
        </div>
        <input type="file" id={id} className="hidden" onChange={handleFileChange} {...restProps} />
        {file && (
          <button
            className="p-2 w-fit flex justify-center items-center rounded-full bg-red-100/40 text-red-400 ml-auto"
            onClick={deleteFile}
          >
            <DeleteIcon />
          </button>
        )}
      </div>
    </div>
  );
};
export default FileInputField;
