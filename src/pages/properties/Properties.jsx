import React, { useState, useMemo } from "react";
import PropertiesHero from "../../components/property/propertiesHero/PropertiesHero";
import PropertyFilters from "../../components/property/propertyFilter/PropertyFilters";
import PropertyGrid from "../../components/property/propertyGrid/PropertyGrid";
import PropertyComparison from "../../components/property/propertyComparison/PropertyComparison";
import PropertyMap from "../../components/property/propertyMap/PropertyMap";
import PropertyCTA from "../../components/property/propertyCTA/PropertyCTA";
import propertiesData from "../../data/properties.json";

const Properties = () => {
  const [filters, setFilters] = useState({
    type: "",
    location: "",
    budget: "",
    sort: "",
  });

  const filteredProperties = useMemo(() => {
    let result = [...propertiesData];

    if (filters.type) {
      result = result.filter((p) => p.type === filters.type);
    }
    if (filters.location) {
      result = result.filter((p) =>
        p.location.toLowerCase().includes(filters.location.toLowerCase()),
      );
    }
    if (filters.budget) {
      const [min, max] = filters.budget.split("-");
      result = result.filter((p) => {
        if (filters.budget === "10000000+") return p.price >= 10000000;
        return p.price >= Number(min) && p.price <= Number(max);
      });
    }
    if (filters.sort === "price-asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sort === "price-desc") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [filters]);

  const resetFilters = () =>
    setFilters({ type: "", location: "", budget: "", sort: "" });

  return (
    <>
      <PropertiesHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10">
        <PropertyFilters
          filters={filters}
          onFilterChange={setFilters}
          onReset={resetFilters}
        />
        <PropertyGrid properties={filteredProperties} />
        <PropertyComparison properties={propertiesData} />
        <PropertyMap location="Kenya" />
        <PropertyCTA />
      </div>
    </>
  );
};

export default Properties;
