"use client";

import React, { useEffect, useState, use } from 'react';
import { 
  ChevronRight, 
  Loader2, 
  ArrowLeft,
  Camera
} from 'lucide-react';
import Link from 'next/link';

interface GalleryImage {
  id: number;
  image_path: string;
}

interface Album {
  id: number;
  album_name: string;
  slug: string;
  images: GalleryImage[];
}

export default function AlbumDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  
  const [album, setAlbum] = useState<Album | null>(null);
  const [loading, setLoading] = useState(true);

  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://arimi.co.ke/thamani';
  const IMAGE_PATH = `${BASE_URL}/images/gallery/`;

  useEffect(() => {
    if (!resolvedParams.slug) return;
    const FETCH_URL = `${BASE_URL}/fetch-gallery-images.php?slug=${resolvedParams.slug}`;

    fetch(FETCH_URL)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setAlbum(null);
        } else {
          setAlbum(data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [resolvedParams.slug, BASE_URL]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <Loader2 className="w-10 h-10 text-sacco-light animate-spin" />
    </div>
  );

  if (!album) return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-black text-sacco-dark mb-4 uppercase">Album Not Found</h2>
      <Link href="/gallery" className="text-sacco-light font-bold flex items-center gap-2">
        <ArrowLeft size={16} /> BACK TO GALLERY
      </Link>
    </div>
  );

  return (
    <main className="bg-white pt-[76px] sm:pt-[116px] lg:pt-[126px]">
      {/* HERO BANNER */}
      <section className="relative h-[150px] w-full flex items-center justify-center overflow-hidden border-b-4 border-sacco-accent">
        <img src="/images/mobile-banking-bg02.jpg" className="absolute inset-0 w-full h-full object-cover opacity-80" alt="" />
        <div className="absolute inset-0 bg-sacco-dark/50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter">
            {album.album_name}
          </h1>
          <div className="flex justify-center items-center gap-2 text-white/70 text-[9px] font-bold uppercase tracking-widest mt-2">
            <Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link> 
            <ChevronRight size={10} className="text-sacco-accent" /> 
            <span className="text-sacco-accent">Viewing Album</span>
          </div>
        </div>
      </section>

      {/* IMAGE GRID */}
      <section className="py-12 lg:py-20 px-4 lg:px-16 bg-gray-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 text-sacco-light uppercase tracking-[0.3em] font-bold text-[10px] mb-10">
            <Camera size={14} />
            <span>{album.images?.length || 0} Professional Photos</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {album.images.map((img) => (
              <div 
                key={img.id} 
                className="relative aspect-[4/3] bg-white overflow-hidden border border-gray-100 shadow-sm transition-all duration-500"
              >
                <img
                  src={`${IMAGE_PATH}${img.image_path}`}
                  alt={album.album_name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}