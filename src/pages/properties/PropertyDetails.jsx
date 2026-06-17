import React, { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaRulerCombined,
  FaCheckCircle,
  FaArrowLeft,
  FaWhatsapp,
  FaPhoneAlt,
  FaFileContract,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import propertiesData from "../../data/properties.json";
import PropertyCard from "../../components/property/propertyCard/PropertyCard";
import PropertyMap from "../../components/property/propertyMap/PropertyMap";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = propertiesData.find((p) => String(p.id) === id);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImage(0);
  }, [id]);

  if (!property) {
    return <Navigate to="/404" replace />;
  }

  const {
    title,
    location,
    price,
    size,
    type,
    status,
    gallery,
    description,
    amenities,
    titleStatus,
    agent,
  } = property;

  const images = gallery && gallery.length > 0 ? gallery : [property.image];

  const relatedProperties = propertiesData
    .filter((p) => p.type === type && p.id !== property.id)
    .slice(0, 3);

  const nextImage = () => setActiveImage((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 sm:pt-10 sm:pb-20">
        <Link
          to="/properties"
          className="inline-flex items-center gap-2 text-yellow-800 font-semibold text-sm mb-6 hover:text-yellow-700 transition-colors duration-300"
        >
          <FaArrowLeft className="text-xs" />
          Back To All Properties
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10">
          {/* Left: gallery + details */}
          <div data-aos="fade-up">
            {/* Gallery */}
            <div className="relative rounded-2xl overflow-hidden h-72 sm:h-96 mb-3 bg-gray-100">
              <img
                src={images[activeImage]}
                alt={`${title} - image ${activeImage + 1}`}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-yellow-800 text-white text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full">
                {type}
              </span>
              {status && (
                <span className="absolute top-4 right-4 bg-white/90 text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <FaCheckCircle className="text-yellow-800" />
                  {status}
                </span>
              )}

              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevImage}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 text-gray-900 hover:bg-white transition-colors duration-300"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    type="button"
                    onClick={nextImage}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 text-gray-900 hover:bg-white transition-colors duration-300"
                  >
                    <FaChevronRight />
                  </button>
                </>
              )}
            </div>

            {images.length > 1 && (
              <div className="flex gap-3 mb-8 overflow-x-auto pb-1">
                {images.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    aria-label={`View image ${i + 1}`}
                    className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-colors duration-300 ${
                      activeImage === i
                        ? "border-yellow-800"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Title + meta */}
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              {title}
            </h1>
            <p className="flex items-center gap-2 text-gray-500 mb-5">
              <FaMapMarkerAlt className="text-yellow-800" />
              {location}
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-200">
              <div>
                <p className="text-gray-500 text-xs mb-1">Price</p>
                <p className="text-2xl font-bold text-yellow-800">
                  KES {Number(price).toLocaleString()}
                </p>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <FaRulerCombined className="text-gray-500" />
                <span className="text-sm">{size}</span>
              </div>
              {titleStatus && (
                <div className="flex items-center gap-2 text-gray-700">
                  <FaFileContract className="text-gray-500" />
                  <span className="text-sm">{titleStatus}</span>
                </div>
              )}
            </div>

            {/* Description */}
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              About This Property
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">{description}</p>

            {/* Amenities */}
            {amenities && amenities.length > 0 && (
              <>
                <h2 className="text-lg font-bold text-gray-900 mb-3">
                  Features & Amenities
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {amenities.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-gray-700 text-sm"
                    >
                      <FaCheckCircle className="text-yellow-800 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {/* Map */}
            <PropertyMap location={location} />
          </div>

          {/* Right: sticky agent + CTA sidebar */}
          <aside
            data-aos="fade-up"
            className="space-y-6 lg:sticky lg:top-24 lg:self-start"
          >
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">
                Interested In This Plot?
              </h3>

              {agent && (
                <div className="flex items-center gap-3 mb-5 pb-5 border-b border-gray-200">
                  <img
                    src={agent.photo}
                    alt={agent.name}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <p className="font-bold text-gray-900 text-sm">
                      {agent.name}
                    </p>
                    <p className="text-gray-500 text-xs">{agent.role}</p>
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <a
                  href={`https://wa.me/${agent?.phone?.replace(/\D/g, "") || "254700000000"}?text=${encodeURIComponent(
                    `Hi, I'm interested in ${title} (${location}).`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-3 rounded-lg transition-colors duration-300"
                >
                  <FaWhatsapp className="text-lg" />
                  Chat On WhatsApp
                </a>
                <a
                  href={`tel:${agent?.phone || "+254700000000"}`}
                  className="flex items-center justify-center gap-2 border-2 border-yellow-800 text-yellow-800 hover:bg-yellow-800 hover:text-white font-semibold px-5 py-3 rounded-lg transition-colors duration-300"
                >
                  <FaPhoneAlt />
                  Call Agent
                </a>
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 bg-yellow-800 hover:bg-yellow-700 text-white font-semibold px-5 py-3 rounded-lg transition-colors duration-300"
                >
                  Book A Consultation
                </Link>
              </div>
            </div>

            <div className="bg-amber-50 border border-gray-200 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-2 text-sm">
                Why Buy Through PrimePlot?
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Every listed plot undergoes full title verification, a registry
                search, and a physical survey before it reaches our site — so
                you can move forward with confidence.
              </p>
            </div>
          </aside>
        </div>

        {/* Related properties */}
        {relatedProperties.length > 0 && (
          <div className="mt-16">
            <h3
              data-aos="fade-up"
              className="text-2xl font-bold text-gray-900 mb-8"
            >
              Similar Properties
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProperties.map((p, i) => (
                <div key={p.id} data-aos="fade-up" data-aos-delay={i * 100}>
                  <PropertyCard property={p} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyDetails;
