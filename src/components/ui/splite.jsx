import React, { Suspense, lazy, useEffect, useState } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

class SplineErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error('Spline failed to render:', error);
  }

  render() {
    if (this.state.hasError) {
      return <div className="spline-fallback">3D scene unavailable</div>;
    }

    return this.props.children;
  }
}

export function SplineScene({ scene, className = '' }) {
  const [canRenderSpline, setCanRenderSpline] = useState(false);

  useEffect(() => {
    setCanRenderSpline(true);
  }, []);

  if (!canRenderSpline) {
    return (
      <div className="spline-loader">
        <span />
      </div>
    );
  }

  return (
    <SplineErrorBoundary>
      <Suspense
        fallback={
          <div className="spline-loader">
            <span />
          </div>
        }
      >
        <Spline scene={scene} className={className} />
      </Suspense>
    </SplineErrorBoundary>
  );
}
