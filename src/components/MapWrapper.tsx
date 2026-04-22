'use client';

import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import('@/components/Map'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-125 bg-slate-100 animate-pulse flex items-center justify-center text-slate-400">
      Harita Yükleniyor...
    </div>
  )
});

export default function MapWrapper() {
  return <DynamicMap />;
}