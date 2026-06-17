import React, { useState } from "react";
import { FaPlay, FaTimes } from "react-icons/fa";
import testimonialsData from "../../data/testimonials.json";

const VideoTestimonials = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const videos = testimonialsData.filter((t) => t.type === "video");

  if (videos.length === 0) return null;

  return (
    <section className="bg-stone-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-yellow-800 font-semibold uppercase text-sm tracking-wide">
            Watch Their Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Video Testimonials
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <button
              key={video.id}
              type="button"
              onClick={() => setActiveVideo(video)}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              aria-label={`Play video testimonial from ${video.name}`}
              className="group relative h-64 rounded-xl overflow-hidden text-left"
            >
              <img
                src={video.videoThumbnail}
                alt={video.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="w-14 h-14 flex items-center justify-center rounded-full bg-white/90 text-yellow-800 group-hover:bg-yellow-800 group-hover:text-white transition-colors duration-300">
                  <FaPlay />
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-bold">{video.name}</p>
                <p className="text-gray-300 text-sm">{video.location}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Video testimonial from ${activeVideo.name}`}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
              className="absolute -top-12 right-0 text-white text-2xl hover:text-yellow-600 transition-colors duration-300"
            >
              <FaTimes />
            </button>
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                title={`Video testimonial from ${activeVideo.name}`}
                src={activeVideo.videoUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoTestimonials;
