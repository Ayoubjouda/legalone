import useFileUpload from '@/hooks/useSystem';
import { ChangeEvent, FC } from 'react';
import { Progress } from './ui/progress';
import { CheckIcon } from 'lucide-react';

interface FileUploadProps {
  fileKey: string;
  downloaded?: boolean;
  formalityId?: string | number;
}

const FileUpload: FC<FileUploadProps> = ({
  fileKey,
  downloaded,
  formalityId,
}) => {
  const { uploadFile, progress, isLoading } = useFileUpload();
  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    console.log(field);
    if (file) {
      uploadFile({ file, field, formalityId: formalityId as number });
    }
  };

  if (downloaded)
    return (
      <div className='bg-white px-4 py-5 even:bg-gray-50 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6'>
        <dt className='col-span-2 text-sm font-medium text-gray-500'>
          Upload {fileKey}
        </dt>

        <dd className='mt-1 flex items-center gap-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
          <CheckIcon className='h-5 w-5 text-green-400' />
          Already Uploaded
        </dd>
      </div>
    );

  return (
    <div className='bg-white px-4 py-5 even:bg-gray-50 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6'>
      <dt className='col-span-2 text-sm font-medium text-gray-500'>
        Upload {fileKey}
      </dt>

      {isLoading ? (
        <div className='flex items-center gap-1'>
          <Progress
            value={progress}
            className='h-2 w-full'
          />
          <span className='text-xs text-black'>{progress}%</span>
        </div>
      ) : (
        <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
          <form>
            <label className='block'>
              <span className='sr-only'></span>
              <input
                type='file'
                className='block w-full text-sm text-gray-500
file:me-4 file:cursor-pointer file:rounded-lg
file:border-0 file:bg-black
file:px-4 file:py-2 file:text-sm
file:font-semibold file:text-white
hover:file:bg-black
file:disabled:pointer-events-none file:disabled:opacity-50
dark:file:bg-black
'
                onChange={(e) => handleFileChange(e, fileKey)}
              />
            </label>
          </form>
        </dd>
      )}
    </div>
  );
};

export default FileUpload;
