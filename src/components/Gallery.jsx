import React, { useEffect, useState, useCallback, useMemo } from "react";
import "./Styles/Gallery.css";

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [lightbox, setLightbox] = useState({ open: false, index: 0 });

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch("https://skillup-backend-production.up.railway.app/api/cloudinary-images");
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                const data = await response.json();
                if (!data?.images?.length) throw new Error("No images found in response");
                
                const sortedImages = [...data.images]
                    .sort((a, b) => parseInt(a.publicId.match(/\d+/) || 0) - parseInt(b.publicId.match(/\d+/) || 0))
                    .slice(0, 50);
                
                setImages(sortedImages);
                setError(null);
            } catch (error) {
                console.error("Fetch error:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchImages();
    }, []);

    const openLightbox = useCallback((index) => setLightbox({ open: true, index }), []);
    const closeLightbox = useCallback(() => setLightbox({ open: false, index: 0 }), []);
    const prevImage = useCallback(() => setLightbox((prev) => ({ open: true, index: (prev.index - 1 + images.length) % images.length })), [images]);
    const nextImage = useCallback(() => setLightbox((prev) => ({ open: true, index: (prev.index + 1) % images.length })), [images]);

    const optimizedImages = useMemo(() => images, [images]);

    if (loading) return <div className="p-4">Loading gallery...</div>;
    if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

    return (
        <div className="p-4 main-1">
            <h1 className="main-heading text-center mb-6">Gallery</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {optimizedImages.map((image, index) => (
                    <div 
                        key={image.publicId} 
                        className="aspect-square overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105"
                        onClick={() => openLightbox(index)}
                    >
                        <img 
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                            src={`${image.url}?f_auto&q_auto&w=300`} 
                            alt={`Gallery ${index + 1}`} 
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>

            {lightbox.open && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
                    <button className="absolute top-4 right-4 text-white text-3xl" onClick={closeLightbox}>✕</button>
                    <button className="absolute left-4 text-white text-3xl" onClick={prevImage}>❮</button>
                    <img src={`${images[lightbox.index].url}?f_auto&q_auto&w=1200`} alt="Full View" className="max-w-full max-h-full p-4" />
                    <button className="absolute right-4 text-white text-3xl" onClick={nextImage}>❯</button>
                </div>
            )}
        </div>
    );
};

export default Gallery;
