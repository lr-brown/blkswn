import React, { useCallback, useState } from "react";
import './style.css'

const Gallery = ({
  orientation,
  photos=['green', 'red', 'blue', 'yellow'],
  width = "85%",
}: {
  orientation: "landscape" | "portrait";
  photos?: string[];
  width?: string;
  }) => {
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
  // The layer underneath, visible while the new one fades in.
  const [previousMediaIndex, setPreviousMediaIndex] = useState(0);

  const handleChangeMainImage = useCallback((index: number) => {
    if (index === selectedMediaIndex) return;
    setPreviousMediaIndex(selectedMediaIndex);
    setSelectedMediaIndex(index);
  }, [selectedMediaIndex])

  return (
    <div className="gallery-wrapper" style={{ width }}>
      {orientation === 'landscape' && <div className="main-image" style={{ backgroundColor: photos[previousMediaIndex] }}>
        <div
          key={selectedMediaIndex}
          className="main-image-layer"
          style={{ backgroundColor: photos[selectedMediaIndex] }}
          onAnimationEnd={() => setPreviousMediaIndex(selectedMediaIndex)}
        />
      </div>}
      <div className="other-images-row">
        {photos.map((color, index) => (
          <div key={index} onClick={() => handleChangeMainImage(index)} className={`child${orientation ==='portrait' ? ' portrait' : ''}`} style={{ backgroundColor: color }}/>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
