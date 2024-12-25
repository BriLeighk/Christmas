'use client';

import { useState } from 'react';
import { storage } from '@/lib/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function ImageUpload({ onUploadComplete }: { onUploadComplete: () => void }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file');
      return;
    }

    try {
      setUploading(true);
      setError(null);

      // Create a unique filename
      const fileName = `${file.name}_${Date.now()}`;
      const storageRef = ref(storage, fileName);

      // Upload the file
      await uploadBytes(storageRef, file);
      
      // Get the download URL
      await getDownloadURL(storageRef);

      // Notify parent component to refresh the gallery
      onUploadComplete();

      // Reset the input
      e.target.value = '';
    } catch (err) {
      console.error('Upload error:', err);
      setError('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="mb-8 text-center">
      <label className="relative inline-block">
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          disabled={uploading}
          className="hidden"
        />
        <span className={`px-6 py-3 bg-[#e6f3ff] text-gray-800 rounded-sm cursor-pointer hover:bg-[#d9edff] transition-colors
          ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {uploading ? 'Uploading...' : 'Upload New Photo'}
        </span>
      </label>

      {error && (
        <p className="text-red-500 mt-2">{error}</p>
      )}
    </div>
  );
} 