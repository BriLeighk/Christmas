'use client';

import { useState, useEffect } from 'react';
import { storage } from '@/lib/firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import Image from 'next/image';
import ImageUpload from './ImageUpload';

export default function Gallery() {
  const [images, setImages] = useState<{ url: string; name: string }[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchImages = async () => {
    try {
      setLoading(true);
      console.log('Fetching images from Firebase...');
      
      const imagesRef = ref(storage, '/');
      console.log('Storage ref path:', imagesRef.fullPath);
      
      const imagesList = await listAll(imagesRef);
      console.log('Found images:', imagesList.items.length);
      
      const urls = await Promise.all(
        imagesList.items.map(async (item) => {
          console.log('Processing image:', item.fullPath);
          const url = await getDownloadURL(item);
          return {
            url,
            name: item.name
          };
        })
      );
      
      console.log('Processed URLs:', urls);
      setImages(urls);
    } catch (err) {
      console.error('Error fetching images:', err);
      setError(err instanceof Error ? err.message : 'Failed to load images');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto mt-16 px-4">
      <h2 className="text-4xl font-cormorant font-bold text-[#3E4E54] mb-8 text-center">Family Memories</h2>
      
      <div className="relative w-full mx-auto px-8 py-10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
        <div className="absolute inset-0 bg-white/10 rounded-sm" />
        <div className="absolute inset-[-2px] border-2 border-white/20 rounded-sm" />
        
        <div className="relative">
          <div className="absolute -top-14 left-1/2 -translate-x-1/2 z-10">
            <ImageUpload onUploadComplete={fetchImages} />
          </div>

          {loading && (
            <div className="text-[#4F656E] text-center">Loading images...</div>
          )}

          {error && (
            <div className="text-red-500 text-center mb-4">
              Error: {error}
            </div>
          )}

          {!loading && !error && images.length === 0 && (
            <div className="text-[#4F656E] text-center">
              No images found in the gallery
            </div>
          )}
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
            {images.map((image) => (
              <div 
                key={image.name}
                className="relative aspect-square cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedImage(image.url)}
              >
                <Image
                  src={image.url}
                  alt={image.name}
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage}
              alt="Enlarged view"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
} 