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
      <h2 className="text-3xl font-cormorant text-white mb-8 text-center">Family Memories</h2>
      
      <ImageUpload onUploadComplete={fetchImages} />
      
      {loading && (
        <div className="text-white text-center">Loading images...</div>
      )}

      {error && (
        <div className="text-red-500 text-center mb-4">
          Error: {error}
        </div>
      )}

      {!loading && !error && images.length === 0 && (
        <div className="text-white text-center">
          No images found in the gallery
        </div>
      )}
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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

      {/* Modal for enlarged image */}
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