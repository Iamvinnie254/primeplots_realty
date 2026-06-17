import React from "react";
import TestimonialsHero from "../../components/testimonials/TestimonialsHero";
import VideoTestimonials from "../../components/testimonials/VideoTestimonials";
import ClientReviews from "../../components/testimonials/ClientReviews";
import SuccessStories from "../../components/testimonials/SuccessStories";

const Testimonials = () => {
  return (
    <div>
      <TestimonialsHero />
      <VideoTestimonials />
      <ClientReviews />
      <SuccessStories />
    </div>
  );
};

export default Testimonials;
