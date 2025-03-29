import React, { useEffect, useState, useCallback } from "react";
import "./Styles/Gallery.css";
import api from "../utils/api";

const SkeletonItem = () => (
  <div className="aspect-square overflow-hidden animate-pulse">
    <div className="w-full h-full bg-gray-200 rounded-lg" />
  </div>
);

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [lightbox, setLightbox] = useState({ open: false, index: 0 });

    const fetchImages = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            
            const response = await api.get("/api/cloudinary-images");
            
            if (!response.data?.images?.length) throw new Error("No images found");
            
            const sortedImages = response.data.images
                .map(img => ({
                    ...img,
                    sortKey: parseInt((img.publicId.match(/\d+/) || [0])[0])
                }))
                .sort((a, b) => a.sortKey - b.sortKey)
                .slice(0, 50);
            
            setImages(sortedImages);
        } catch (error) {
            console.error("Fetch error:", error);
            setError(error.response?.data?.message || error.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchImages();
    }, [fetchImages]);

    const prevImage = useCallback(() => {
        setLightbox(prev => ({
            ...prev,
            index: (prev.index - 1 + images.length) % images.length
        }));
    }, [images.length]);

    const nextImage = useCallback(() => {
        setLightbox(prev => ({
            ...prev,
            index: (prev.index + 1) % images.length
        }));
    }, [images.length]);

    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
    }, [prevImage, nextImage]);

    useEffect(() => {
        if (lightbox.open) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        } else {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "auto";
        }
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [lightbox.open, handleKeyDown]);

    const openLightbox = useCallback((index) => {
        setLightbox({ open: true, index });
    }, []);

    const closeLightbox = useCallback(() => {
        setLightbox({ open: false, index: 0 });
    }, []);

    if (error) return (
        <div className="p-4 text-center">
            <p className="text-red-500 mb-4">Error: {error}</p>
            <button 
                onClick={fetchImages}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
                Retry
            </button>
        </div>
    );

    return (
        <div className="p-4 main-1">
            <h1 className="main-heading text-center mb-6">Gallery</h1>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {loading ? (
                    Array(8).fill().map((_, i) => <SkeletonItem key={i} />)
                ) : (
                    images.map((image, index) => (
                        <div 
                            key={image.publicId} 
                            className="aspect-square overflow-hidden cursor-pointer group"
                            onClick={() => openLightbox(index)}
                        >
                            <img 
                                className="w-full h-full object-cover rounded-lg shadow-lg 
                                           transition-transform duration-300 group-hover:scale-105"
                                src={`${image.url}?f_auto&q_auto&w=400`} 
                                alt={`Gallery ${index + 1}`}
                                loading="lazy"
                            />
                        </div>
                    ))
                )}
            </div>

            {lightbox.open && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-95 flex justify-center items-center z-50"
                    tabIndex={0}
                >
                    <button 
                        className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
                        onClick={closeLightbox}
                        aria-label="Close"
                    >
                        &times;
                    </button>
                    
                    <div className="flex items-center justify-center w-full px-4">
                        <button 
                            className="hidden md:block text-white text-4xl mx-4 hover:text-gray-300 transition-colors"
                            onClick={prevImage}
                            aria-label="Previous"
                        >
                            &lsaquo;
                        </button>
                        
                        <div className="relative max-w-full max-h-full">
                            <img 
                                src={`${images[lightbox.index].url}?f_auto&q_auto&w=1200`} 
                                alt="Full View" 
                                className="max-w-full max-h-[90vh] object-contain p-4"
                            />
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded">
                                {lightbox.index + 1} / {images.length}
                            </div>
                        </div>
                        
                        <button 
                            className="hidden md:block text-white text-4xl mx-4 hover:text-gray-300 transition-colors"
                            onClick={nextImage}
                            aria-label="Next"
                        >
                            &rsaquo;
                        </button>
                    </div>

                    {/* Mobile navigation */}
                    <div className="md:hidden fixed bottom-4 w-full flex justify-between px-4">
                        <button 
                            className="text-white text-3xl bg-black/50 rounded-full p-2 hover:bg-black/70"
                            onClick={prevImage}
                            aria-label="Previous"
                        >
                            &lsaquo;
                        </button>
                        <button 
                            className="text-white text-3xl bg-black/50 rounded-full p-2 hover:bg-black/70"
                            onClick={nextImage}
                            aria-label="Next"
                        >
                            &rsaquo;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
