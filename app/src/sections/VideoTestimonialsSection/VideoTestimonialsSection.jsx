import React, { useState } from "react";
import VideoTestimonialCard from "../../components/VideoTestimonialCard/VideoTestimonialCard";
import VideoModal from "../../components/VideoModal/VideoModal";
import "./VideoTestimonialsSection.css";

const VideoTestimonialsSection = ({ title, testimonials, layout = "grid" }) => {
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleCardClick = (videoId) => {
    setSelectedVideoId(videoId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideoId(null);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  if (layout === "carousel") {
    return (
      <section className="video-testimonials-section">
        <div className="video-testimonials-container">
          <h2 className="video-testimonials-title">{title}</h2>
          <div className="video-carousel-wrapper">
            <button
              className="carousel-arrow carousel-arrow-left"
              onClick={handlePrevious}
              aria-label="Anterior"
            >
              ‹
            </button>
            <div className="video-carousel-container">
              <div
                className="video-carousel-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="video-carousel-slide">
                    <VideoTestimonialCard
                      videoId={testimonial.videoId}
                      personName={testimonial.personName}
                      role={testimonial.role}
                      onClick={() => handleCardClick(testimonial.videoId)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <button
              className="carousel-arrow carousel-arrow-right"
              onClick={handleNext}
              aria-label="Siguiente"
            >
              ›
            </button>
          </div>
          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Ir al testimonio ${index + 1}`}
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
  }

  return (
    <section className="video-testimonials-section">
      <div className="video-testimonials-container">
        <h2 className="video-testimonials-title">{title}</h2>
        <div className="video-testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <VideoTestimonialCard
              key={index}
              videoId={testimonial.videoId}
              personName={testimonial.personName}
              role={testimonial.role}
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

export default VideoTestimonialsSection;
