'use client';

import { useRef, useEffect, useState } from 'react';

export function DesktopCanvas({
  w = 1440,
  h,
  children,
}: {
  w?: number;
  h: number;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function update() {
      if (!ref.current) return;
      const parentWidth = ref.current.parentElement?.clientWidth ?? w;
      setScale(Math.min(1, parentWidth / w));
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [w]);

  return (
    <div ref={ref} className="overflow-hidden mx-auto" style={{ height: h * scale, maxWidth: w, width: '100%' }}>
      <div
        className="relative"
        style={{
          width: w,
          height: h,
          transformOrigin: 'top left',
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
