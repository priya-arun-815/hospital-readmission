// src/components/USMap.jsx
import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleSequential } from "d3-scale";
import { interpolateReds } from "d3-scale-chromatic";
import { Tooltip } from "react-tooltip";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

// Readmission rate data per state (in %)
const stateReadmissionRates = {
  AK: 14.49, AL: 16.79, AR: 16.16, AZ: 15.18, CA: 17.68, CO: 13.92, CT: 17.23,
  DC: 17.91, DE: 15.73, FL: 17.69, GA: 17.52, HI: 15.57, IA: 14.38, ID: 11.17,
  IL: 17.79, IN: 16.76, KS: 13.25, KY: 17.87, LA: 17.18, MA: 17.16, MD: 16.91,
  ME: 13.68, MI: 18.59, MN: 14.51, MO: 17.12, MS: 17.66, MT: 12.67, NC: 15.84,
  ND: 14.45, NE: 14.45, NH: 15.92, NJ: 17.87, NM: 13.99, NV: 18.16, NY: 16.94,
  OH: 17.64, OK: 15.19, OR: 13.63, PA: 16.4, RI: 15.46, SC: 16.41, SD: 10.33,
  TN: 16.46, TX: 16.7, UT: 11.38, VA: 16.49, VT: 16.75, WA: 14.94, WI: 15.82,
  WV: 18.81, WY: 13.47
};

// Smooth gradient scale (interpolateReds)
const colorScale = scaleSequential()
  .domain([10, 19]) // Adjust min/max based on your data
  .interpolator(interpolateReds);

const USMap = () => {
  const [tooltipContent, setTooltipContent] = useState("");

  return (
    <div className="w-full h-auto">
      <h2 className="text-2xl font-semibold text-center mb-4">
        📍 Hospital Readmission Rates by State (CMS Data)
      </h2>
      <Tooltip>{tooltipContent}</Tooltip>

      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const abbrev = geo.id;
              const value = stateReadmissionRates[abbrev];

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={value ? colorScale(value) : "#EEE"}
                  stroke="#FFF"
                  onMouseEnter={() => {
                    setTooltipContent(
                      `${geo.properties.name}
                      \nReadmission Rate: ${value?.toFixed(2) || "N/A"}%`
                    );
                  }}
                  onMouseLeave={() => setTooltipContent("")}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#6366f1", outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default USMap;

