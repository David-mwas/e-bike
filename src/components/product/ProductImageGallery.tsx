import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ images, productName }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setIsZoomed(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setIsZoomed(false);
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
    setIsZoomed(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;

    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    setZoomPosition({ x, y });
  };

  const handleZoomToggle = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="w-full">
      {/* Main Image */}
      <div className="relative rounded-lg overflow-hidden bg-gray-100 mb-4">
        <div
          className={`relative h-96 md:h-[500px] overflow-hidden ${
            isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'
          }`}
          onClick={handleZoomToggle}
          onMouseMove={handleMouseMove}
        >
          <img
            src={images[currentImageIndex]}
            alt={`${productName} - Image ${currentImageIndex + 1}`}
            className={`h-full w-full object-contain transition-transform duration-300 ${
              isZoomed ? 'scale-150' : 'scale-100'
            }`}
            style={
              isZoomed
                ? {
                    transformOrigin: `${zoomPosition.x * 100}% ${zoomPosition.y * 100}%`,
                  }
                : undefined
            }
          />
        </div>

        {/* Zoom indicator */}
        <button
          className="absolute top-4 right-4 bg-white/80 p-2 rounded-full shadow-md text-gray-700 hover:text-blue-600 transition-colors"
          onClick={handleZoomToggle}
        >
          <ZoomIn className="h-5 w-5" />
        </button>

        {/* Navigation Arrows */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md text-gray-700 hover:text-blue-600 transition-colors"
          onClick={handlePrevImage}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md text-gray-700 hover:text-blue-600 transition-colors"
          onClick={handleNextImage}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`h-16 md:h-24 rounded-md overflow-hidden cursor-pointer border-2 ${
              index === currentImageIndex ? 'border-blue-500' : 'border-transparent'
            }`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={image}
              alt={`${productName} thumbnail ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;