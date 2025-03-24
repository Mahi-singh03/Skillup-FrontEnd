const ComingSoon = () => {
    return (
      <div className="ComingSoonContainer">
        <picture>
          <source 
            srcSet="https://res.cloudinary.com/dufxj1sau/image/upload/v1742805570/Web_Photo_Editor_zsihwq.jpg" 
            media="(max-width: 768px)" 
          />
          <img 
            src="https://res.cloudinary.com/dufxj1sau/image/upload/v1742191095/image_copy_wd0df8_1_wyrw2e.jpg" 
            alt="Coming Soon"
          />
        </picture>
      </div>
    );
  };
  
  export default ComingSoon;