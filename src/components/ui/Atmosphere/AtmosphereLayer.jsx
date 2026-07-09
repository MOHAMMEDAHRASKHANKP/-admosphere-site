import React, { forwardRef } from "react";

const AtmosphereLayer = forwardRef(
  ({ className = "", style = {} }, ref) => {
    return (
      <div
        ref={ref}
        className={`atmosphere-layer ${className}`}
        style={style}
      />
    );
  }
);

AtmosphereLayer.displayName = "AtmosphereLayer";

export default AtmosphereLayer;