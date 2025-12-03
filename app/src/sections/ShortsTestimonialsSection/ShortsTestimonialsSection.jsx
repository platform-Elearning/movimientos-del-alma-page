import React, { useState } from "react";
import ShortTestimonialCard from "../../components/ShortTestimonialCard/ShortTestimonialCard";
import VideoModal from "../../components/VideoModal/VideoModal";
import "./ShortsTestimonialsSection.css";

const ShortsTestimonialsSection = ({ title, testimonials }) => {
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (videoId) => {
    setSelectedVideoId(videoId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideoId(null);
  };

  return (
    <section className="shorts-testimonials-section">
      <div className="shorts-testimonials-container">
        {title && <h2 className="shorts-testimonials-title">{title}</h2>}
        <div className="shorts-testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <ShortTestimonialCard
              key={index}
              videoId={testimonial.videoId}
              label={testimonial.label}
              onClick={() => handleCardClick(testimonial.videoId)}
            />
          ))}
        </div>
      </div>
      <VideoModal
        videoId={selectedVideoId}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default ShortsTestimonialsSection;
