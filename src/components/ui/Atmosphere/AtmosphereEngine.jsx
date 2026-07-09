import React, { useRef } from "react";
import AtmosphereLayer from "./AtmosphereLayer";
import useAtmosphere from "./hooks/useAtmosphere";
import "./styles/atmosphere.css";

export default function AtmosphereEngine() {
  // Individual refs for each layer
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);
  const layer4Ref = useRef(null);
  const layer5Ref = useRef(null);

  // Array passed to the animation hook
  const layerRefs = [
    layer1Ref,
    layer2Ref,
    layer3Ref,
    layer4Ref,
    layer5Ref,
  ];

  // Initialize the engine
  useAtmosphere(layerRefs);

  return (
    <div className="atmosphere-engine" aria-hidden="true">
      <AtmosphereLayer
        ref={layer1Ref}
        className="layer layer-1"
      />

      <AtmosphereLayer
        ref={layer2Ref}
        className="layer layer-2"
      />

      <AtmosphereLayer
        ref={layer3Ref}
        className="layer layer-3"
      />

      <AtmosphereLayer
        ref={layer4Ref}
        className="layer layer-4"
      />

      <AtmosphereLayer
        ref={layer5Ref}
        className="layer layer-5"
      />
    </div>
  );
}