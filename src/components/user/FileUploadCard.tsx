
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, Check, X } from 'lucide-react';

interface FileUploadCardProps {
  title: string;
  description: string;
  fileTypes: string[];
  onFileUpload: (file: File) => void;
}

const FileUploadCard = ({ title, description, fileTypes, onFileUpload }: FileUploadCardProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) setIsDragging(true);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (fileList: FileList) => {
    const uploadedFile = fileList[0];
    
    // Reset states
    setError(null);
    setIsUploaded(false);
    
    // Validate file type
    const fileExtension = uploadedFile.name.split('.').pop()?.toLowerCase() || '';
    const allowedExtensions = fileTypes.map(type => type.replace('.', '').toLowerCase());
    
    if (!allowedExtensions.includes(fileExtension)) {
      setError(`Please upload a valid ${fileTypes.join(' or ')} file.`);
      return;
    }
    
    // Size validation (max 10MB)
    if (uploadedFile.size > 10 * 1024 * 1024) {
      setError('File size should be less than 10MB.');
      return;
    }
    
    setFile(uploadedFile);
    setIsUploaded(true);
    onFileUpload(uploadedFile);
  };

  const promptFileSelection = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Card className={`${isDragging ? 'ring-2 ring-kelo-blue' : ''}`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileInputChange}
          accept={fileTypes.join(',')}
          className="hidden"
        />
        
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer
            ${isDragging ? 'border-kelo-blue bg-blue-50' : 'border-gray-300 hover:border-kelo-blue'}
            ${isUploaded ? 'bg-green-50 border-green-300' : ''}
            ${error ? 'bg-red-50 border-red-300' : ''}
          `}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={promptFileSelection}
        >
          {isUploaded ? (
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <p className="text-sm font-medium">{file?.name}</p>
              <p className="text-xs text-gray-500 mt-1">
                {(file?.size && (file.size / 1024 / 1024).toFixed(2)) || 0} MB
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-4"
                onClick={(e) => {
                  e.stopPropagation();
                  setFile(null);
                  setIsUploaded(false);
                }}
              >
                Upload a Different File
              </Button>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <X className="h-6 w-6 text-red-600" />
              </div>
              <p className="text-sm font-medium text-red-600">{error}</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-4"
                onClick={(e) => {
                  e.stopPropagation();
                  setError(null);
                }}
              >
                Try Again
              </Button>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Upload className="h-6 w-6 text-gray-500" />
              </div>
              <p className="text-sm font-medium">Drag and drop your file here</p>
              <p className="text-xs text-gray-500 mt-1">or click to browse</p>
              <p className="text-xs text-gray-400 mt-4">
                Supported formats: {fileTypes.join(', ')} (Max 10MB)
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default FileUploadCard;
