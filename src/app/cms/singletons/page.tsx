'use client';

import React, { useState } from 'react';
import { CmsHeader } from '@/components/cms/CmsHeader';

export default function SingletonsPage() {
  const [isRevalidating, setIsRevalidating] = useState(false);

  const handleRevalidate = () => {
    setIsRevalidating(true);
    setTimeout(() => {
      setIsRevalidating(false);
    }, 1500);
  };

  return (
    <>
      <CmsHeader
        breadcrumbTitle="Studio / Singletons"
        onRevalidate={handleRevalidate}
        isRevalidating={isRevalidating}
      />
      <main className="w-full pt-16 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          &#123;/* Sub-Header / Breadcrumb Toolbar */&#125;
          <section className="bg-surface-container-lowest px-space-lg py-space-md shadow-sm">
            <div className="max-w-[1560px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
              <div className="flex flex-col gap-1">
                <div className="flex flex-wrap items-center gap-2 font-body-sm text-body-sm text-on-surface-variant">
                  <span className="hover:text-on-surface cursor-pointer">Content Models</span>
                  <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                  <span className="hover:text-on-surface cursor-pointer">Single Types (Singleton)</span>
                  <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                  <span className="font-title-sm text-title-sm text-on-surface">
                    Hero Banner &amp; Pengaturan Beranda
                  </span>
                  <span className="px-1.5 py-0.5 rounded font-label-xs text-label-xs bg-surface-container font-mono text-on-surface">
                    api::hero-banner
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-space-sm mt-1">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-xs text-label-xs">
                    <span className="material-symbols-outlined text-[13px]">lock</span>
                    Singleton (1 Record Only · Fixed Schema)
                  </span>
                  <span className="font-mono text-label-xs text-on-surface-variant">UID: #singleton_hero_01</span>
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-container-low text-on-surface font-label-xs text-label-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Published / Live in Delivery API
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-space-sm self-end md:self-auto">
                <button
                  className="px-3 py-1.5 rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-colors"
                  type="button"
                >
                  Reset ke Default
                </button>
                <button
                  className="px-3 py-1.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors"
                  type="button"
                >
                  Simpan Draft
                </button>
                <button
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded bg-primary text-on-primary font-label-sm text-label-sm hover:bg-primary-container shadow-sm transition-colors"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">bolt</span>
                  Publish &amp; Revalidate ISR
                </button>
              </div>
            </div>
          </section>
          &#123;/* Main Canvas */&#125;
          <div className="max-w-[1560px] mx-auto w-full px-space-lg py-space-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
              &#123;/* LEFT COLUMN: Main Form Inputs (8 Cols) */&#125;
              <div className="lg:col-span-8 flex flex-col gap-space-lg">
                &#123;/* Singleton Info / Architecture Callout */&#125;
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm relative overflow-hidden">
                  <div className="flex items-start justify-between gap-space-md">
                    <div className="flex gap-space-md">
                      <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-on-surface text-[22px]">database</span>
                      </div>
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <h2 className="font-title-md text-title-md text-on-surface">
                            Arsitektur Model Singleton (1-Row Data Engine)
                          </h2>
                          <span className="px-2 py-0.5 rounded font-label-xs text-label-xs bg-surface-container text-on-surface font-semibold">
                            GLOBAL CONFIG
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant max-w-2xl leading-relaxed">
                          Model ini tidak memiliki slug dinamis, relasi paginasi, maupun multiple row items. Konten
                          bertindak sebagai konfigurasi tunggal yang di-serve via endpoint instan tanpa traversal query
                          kompleks:
                        </p>
                        <div className="mt-2 flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded font-mono text-label-xs text-on-surface w-fit">
                          <span className="font-bold text-primary">GET</span>
                          <span className="text-on-surface-variant">
                            /delivery/v1/content?contentType=hero-banner&amp;siteKey=kult-barber
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <div className="flex items-center gap-2">
                        <span className="font-label-xs text-label-xs text-on-surface-variant">Mode Singleton</span>
                        <button
                          aria-label="Toggle Single Type"
                          className="w-11 h-6 bg-primary rounded-full relative p-0.5 transition-colors cursor-pointer"
                          type="button"
                        >
                          <div className="w-5 h-5 bg-on-primary rounded-full translate-x-5 transition-transform"></div>
                        </button>
                      </div>
                      <span className="font-label-xs text-label-xs text-on-surface font-medium">
                        Terkunci (1 Record)
                      </span>
                    </div>
                  </div>
                </div>
                &#123;/* SECTION 1: Text & Copywriting Hero */&#125;
                <section className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between pb-space-sm bg-surface-container-lowest">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">edit_note</span>
                      <h3 className="font-title-md text-title-md text-on-surface">Data Utama Hero &amp; Copywriting</h3>
                    </div>
                    <span className="px-2 py-0.5 rounded font-label-xs text-label-xs bg-surface-container-low text-on-surface-variant">
                      Required Fields
                    </span>
                  </div>
                  &#123;/* Headline (H1) */&#125;
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <label
                        className="font-title-sm text-title-sm text-on-surface flex items-center gap-1"
                        htmlFor="headline-h1"
                      >
                        Headline Utama (H1)
                        <span className="text-error font-bold">*</span>
                      </label>
                      <span className="font-label-xs text-label-xs text-on-surface-variant font-mono">
                        38 / 80 karakter (SEO Optimal)
                      </span>
                    </div>
                    <input
                      className="w-full h-10 px-3 rounded bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm outline-none focus:bg-surface-container-low transition-colors"
                      id="headline-h1"
                      type="text"
                      value="Eksplorasi Gaya Klasik &amp; Modern Grooming Pria"
                    />
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Dirender langsung sebagai semantik H1 SSR pada First Contentful Paint.
                    </p>
                  </div>
                  &#123;/* Subheadline / Tagline */&#125;
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <label
                        className="font-title-sm text-title-sm text-on-surface flex items-center gap-1"
                        htmlFor="subheadline"
                      >
                        Sub-headline / Tagline Ringkas
                        <span className="text-error font-bold">*</span>
                      </label>
                      <span className="font-label-xs text-label-xs text-on-surface-variant font-mono">
                        81 / 160 karakter
                      </span>
                    </div>
                    <textarea
                      className="w-full p-3 rounded bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm outline-none focus:bg-surface-container-low transition-colors leading-relaxed"
                      id="subheadline"
                      rows={3}
                    >
                      Layanan pangkas rambut premium dan perawatan wajah eksklusif di pusat kota Jakarta.
                    </textarea>
                  </div>
                  &#123;/* Promo Badge Pill */&#125;
                  <div className="flex flex-col gap-1.5">
                    <label className="font-title-sm text-title-sm text-on-surface" htmlFor="badge-promo">
                      Badge Promo / Pill Highlight
                    </label>
                    <div className="relative flex items-center">
                      <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[18px]">
                        verified
                      </span>
                      <input
                        className="w-full h-10 pl-10 pr-3 rounded bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm outline-none focus:bg-surface-container-low transition-colors"
                        id="badge-promo"
                        type="text"
                        value="Promo Musim Panas: Diskon 20% Member Baru"
                      />
                    </div>
                  </div>
                  &#123;/* Call To Action Grid */&#125;
                  <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-sm mt-space-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-title-sm text-title-sm text-on-surface">
                        Call To Action (CTA Dual-Button)
                      </span>
                      <span className="font-label-xs text-label-xs text-on-surface-variant">
                        Client Route / External Link
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                      &#123;/* Primary CTA */&#125;
                      <div className="bg-surface-container-lowest p-space-sm rounded shadow-sm flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <span className="font-label-xs text-label-xs font-semibold text-on-surface">
                            Primary CTA (Button Solid)
                          </span>
                          <span className="w-2 h-2 rounded-full bg-primary"></span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="font-label-xs text-label-xs text-on-surface-variant">Label Teks</span>
                          <input
                            className="h-8 px-2 rounded bg-surface-container-low font-body-sm text-body-sm text-on-surface outline-none"
                            type="text"
                            value="Reservasi Sekarang"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="font-label-xs text-label-xs text-on-surface-variant">Tujuan URL</span>
                          <input
                            className="h-8 px-2 rounded bg-surface-container-low font-mono text-label-xs text-on-surface outline-none"
                            type="text"
                            value="/booking"
                          />
                        </div>
                      </div>
                      &#123;/* Secondary CTA */&#125;
                      <div className="bg-surface-container-lowest p-space-sm rounded shadow-sm flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <span className="font-label-xs text-label-xs font-semibold text-on-surface">
                            Secondary CTA (Outline)
                          </span>
                          <span className="w-2 h-2 rounded-full bg-outline"></span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="font-label-xs text-label-xs text-on-surface-variant">Label Teks</span>
                          <input
                            className="h-8 px-2 rounded bg-surface-container-low font-body-sm text-body-sm text-on-surface outline-none"
                            type="text"
                            value="Lihat Daftar Layanan"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="font-label-xs text-label-xs text-on-surface-variant">Tujuan URL</span>
                          <input
                            className="h-8 px-2 rounded bg-surface-container-low font-mono text-label-xs text-on-surface outline-none"
                            type="text"
                            value="/services"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                &#123;/* SECTION 2: Media Asset Hero (Focal-Point & CDN) */&#125;
                <section className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between pb-space-sm bg-surface-container-lowest">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">photo_camera</span>
                      <h3 className="font-title-md text-title-md text-on-surface">
                        Media Asset Hero (Focal-Point &amp; Edge CDN)
                      </h3>
                    </div>
                    <span className="font-mono text-label-xs text-on-surface-variant">
                      WebP &amp; AVIF Auto-Compress
                    </span>
                  </div>
                  &#123;/* Main Desktop Asset Preview Card */&#125;
                  <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-title-sm text-title-sm text-on-surface">Banner Desktop / Utama</span>
                        <span className="px-2 py-0.5 rounded font-label-xs text-label-xs bg-surface-container-highest text-on-surface font-mono">
                          16:9 Landscape
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-label-xs text-label-xs text-on-surface-variant">Focal Point:</span>
                        <span className="px-1.5 py-0.5 rounded font-mono text-label-xs bg-surface-container-lowest text-on-surface font-bold">
                          X: 52% · Y: 40%
                        </span>
                      </div>
                    </div>
                    &#123;/* Preview Image Canvas with Focal Pin */&#125;
                    <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-sm group">
                      <img
                        className="w-full h-full object-cover"
                        data-alt="Editorial cinematic photo of an upscale barbershop interior in Jakarta, warm ambient studio lighting, handcrafted leather chairs, dark wood surfaces, modern grooming setup, minimalist premium atmosphere with neutral tones"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjAVtfhuYYstsI6HnvyHb4C-JdLTVclOlKnR2KOAvpDNaTb_EzSYbFZvk0XB5Vif6A4G8-R4WMunf4ecs_RMLufzCIiNEhzU12l5RPFFJbtnGRPhbRGa6vOBSpUNrU9oDgHRQ5vGnVsU-8PzqhU3Ako0EglovpvN-VkR8tkjMsxpSl5R5uZkEm9fptGrccQGykljurnS8yezz2NHvxn5Tq_g5Sh3d-attgIF3FDeU"
                      />
                      &#123;/* Focal Pin Target Overlay */&#125;
                      <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <span className="font-label-xs text-label-xs text-on-primary bg-primary px-2.5 py-1 rounded shadow-md">
                          Klik untuk Mengubah Titik Fokus Visual
                        </span>
                      </div>
                      <div className="absolute top-[40%] left-[52%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                        <span className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg animate-ping absolute opacity-75"></span>
                        <span className="w-5 h-5 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg relative">
                          <span className="material-symbols-outlined text-[14px]">my_location</span>
                        </span>
                      </div>
                      &#123;/* Meta tag on image */&#125;
                      <div className="absolute bottom-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md px-2.5 py-1 rounded font-mono text-label-xs text-on-surface shadow-sm">
                        1920 × 1080 px · 340 KB · hero-barber-main.webp
                      </div>
                    </div>
                    &#123;/* Asset Actions */&#125;
                    <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
                      <div className="flex items-center gap-2">
                        <button
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm shadow-sm transition-colors"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[16px]">filter_center_focus</span>
                          Atur Focal Point
                        </button>
                        <button
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm shadow-sm transition-colors"
                          type="button"
                        >
                          <span className="material-symbols-outlined text-[16px]">swap_horiz</span>
                          Ganti Media dari Hub
                        </button>
                      </div>
                      <button
                        className="flex items-center gap-1 px-2.5 py-1.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm hover:opacity-90 transition-opacity"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">delete</span>
                        Hapus
                      </button>
                    </div>
                  </div>
                  &#123;/* Mobile Fallback Upload Input (9:16) */&#125;
                  <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col md:flex-row items-center justify-between gap-space-md">
                    <div className="flex items-center gap-space-md">
                      <div className="w-16 h-24 rounded bg-surface-container flex flex-col items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-on-surface-variant text-[24px]">
                          smartphone
                        </span>
                        <span className="font-mono text-label-xs text-on-surface-variant">9:16</span>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="font-title-sm text-title-sm text-on-surface">
                          Mobile Fallback Banner (Opsional)
                        </span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Asset berformat vertikal khusus viewport &lt; 768px untuk mencegah cropping tidak presisi pada
                          hero smartphone.
                        </p>
                        <span className="font-mono text-label-xs text-on-surface-variant mt-1">
                          Rekomendasi: 1080 × 1920 px (Max 400 KB)
                        </span>
                      </div>
                    </div>
                    <button
                      className="flex items-center gap-1.5 px-3 py-2 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-sm text-label-sm shadow-sm transition-colors shrink-0"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">cloud_upload</span>
                      Upload Asset Mobile
                    </button>
                  </div>
                </section>
                &#123;/* SECTION 3: Field JSONB Singleton Config */&#125;
                <section className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-space-sm gap-space-sm">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">data_object</span>
                      <div>
                        <h3 className="font-title-md text-title-md text-on-surface">
                          Dynamic Props &amp; JSONB Config
                        </h3>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Konfigurasi runtime frontend tanpa perlu migrasi schema Postgres
                        </span>
                      </div>
                    </div>
                    &#123;/* Segmented Control View Mode */&#125;
                    <div className="flex items-center p-1 rounded-lg bg-surface-container-low shadow-sm">
                      <button
                        className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface font-label-xs text-label-xs font-semibold shadow-sm"
                        type="button"
                      >
                        Visual Key-Value
                      </button>
                      <button
                        className="px-2.5 py-1 rounded text-on-surface-variant hover:text-on-surface font-label-xs text-label-xs transition-colors"
                        type="button"
                      >
                        Nested Repeater
                      </button>
                      <button
                        className="px-2.5 py-1 rounded text-on-surface-variant hover:text-on-surface font-label-xs text-label-xs transition-colors"
                        type="button"
                      >
                        Monaco Raw
                      </button>
                    </div>
                  </div>
                  &#123;/* Key-Value Items Stack */&#125;
                  <div className="flex flex-col gap-space-sm">
                    &#123;/* Item 1: slider_config */&#125;
                    <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-on-surface-variant text-[18px]">
                            account_tree
                          </span>
                          <span className="font-mono text-title-sm text-title-sm text-on-surface font-semibold">
                            slider_config
                          </span>
                          <span className="px-1.5 py-0.5 rounded font-label-xs text-label-xs bg-surface-container-highest text-on-surface">
                            Object
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <button className="p-1 text-on-surface-variant hover:text-on-surface" type="button">
                            <span className="material-symbols-outlined text-[18px]">drag_handle</span>
                          </button>
                          <button className="p-1 text-on-surface-variant hover:text-error" type="button">
                            <span className="material-symbols-outlined text-[18px]">close</span>
                          </button>
                        </div>
                      </div>
                      &#123;/* Nested Object Grid */&#125;
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm pl-space-md bg-surface-container-lowest p-space-sm rounded shadow-sm">
                        <div className="flex flex-col gap-1">
                          <span className="font-label-xs text-label-xs text-on-surface-variant font-mono">
                            autoplay (Boolean)
                          </span>
                          <div className="flex items-center gap-2 h-8">
                            <button
                              aria-label="Toggle Autoplay"
                              className="w-9 h-5 bg-primary rounded-full relative p-0.5 transition-colors cursor-pointer"
                              type="button"
                            >
                              <div className="w-4 h-4 bg-on-primary rounded-full translate-x-4 transition-transform"></div>
                            </button>
                            <span className="font-label-xs text-label-xs text-on-surface font-mono">true</span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="font-label-xs text-label-xs text-on-surface-variant font-mono">
                            autoplay_interval_ms (Number)
                          </span>
                          <input
                            className="h-8 px-2 rounded bg-surface-container-low font-mono text-label-xs text-on-surface outline-none"
                            type="number"
                            value="5000"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="font-label-xs text-label-xs text-on-surface-variant font-mono">
                            transition_effect (Select)
                          </span>
                          <select className="h-8 px-2 rounded bg-surface-container-low font-mono text-label-xs text-on-surface outline-none">
                            <option value="fade">fade</option>
                            <option value="slide">slide</option>
                            <option value="ken-burns">ken-burns</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    &#123;/* Item 2: operating_hours_badge */&#125;
                    <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-on-surface-variant text-[18px]">
                            schedule
                          </span>
                          <span className="font-mono text-title-sm text-title-sm text-on-surface font-semibold">
                            operating_hours_badge
                          </span>
                          <span className="px-1.5 py-0.5 rounded font-label-xs text-label-xs bg-surface-container-highest text-on-surface">
                            Object
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <button className="p-1 text-on-surface-variant hover:text-on-surface" type="button">
                            <span className="material-symbols-outlined text-[18px]">drag_handle</span>
                          </button>
                          <button className="p-1 text-on-surface-variant hover:text-error" type="button">
                            <span className="material-symbols-outlined text-[18px]">close</span>
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm pl-space-md bg-surface-container-lowest p-space-sm rounded shadow-sm">
                        <div className="flex flex-col gap-1">
                          <span className="font-label-xs text-label-xs text-on-surface-variant font-mono">
                            show_badge (Boolean)
                          </span>
                          <div className="flex items-center gap-2 h-8">
                            <button
                              aria-label="Toggle Show Badge"
                              className="w-9 h-5 bg-primary rounded-full relative p-0.5 transition-colors cursor-pointer"
                              type="button"
                            >
                              <div className="w-4 h-4 bg-on-primary rounded-full translate-x-4 transition-transform"></div>
                            </button>
                            <span className="font-label-xs text-label-xs text-on-surface font-mono">true</span>
                          </div>
                        </div>
                        <div className="md:col-span-2 flex flex-col gap-1">
                          <span className="font-label-xs text-label-xs text-on-surface-variant font-mono">
                            text (String)
                          </span>
                          <input
                            className="h-8 px-2 rounded bg-surface-container-low font-body-sm text-body-sm text-on-surface outline-none"
                            type="text"
                            value="Buka Setiap Hari: 10:00 - 21:00 WIB"
                          />
                        </div>
                      </div>
                    </div>
                    &#123;/* Item 3: floating_announcement */&#125;
                    <div className="bg-surface-container-low p-space-md rounded-lg flex flex-col gap-space-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-on-surface-variant text-[18px]">
                            campaign
                          </span>
                          <span className="font-mono text-title-sm text-title-sm text-on-surface font-semibold">
                            floating_announcement
                          </span>
                          <span className="px-1.5 py-0.5 rounded font-label-xs text-label-xs bg-surface-container-highest text-on-surface">
                            Object
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <button className="p-1 text-on-surface-variant hover:text-on-surface" type="button">
                            <span className="material-symbols-outlined text-[18px]">drag_handle</span>
                          </button>
                          <button className="p-1 text-on-surface-variant hover:text-error" type="button">
                            <span className="material-symbols-outlined text-[18px]">close</span>
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm pl-space-md bg-surface-container-lowest p-space-sm rounded shadow-sm">
                        <div className="flex flex-col gap-1">
                          <span className="font-label-xs text-label-xs text-on-surface-variant font-mono">
                            enabled (Boolean)
                          </span>
                          <div className="flex items-center gap-2 h-8">
                            <button
                              aria-label="Toggle Enabled"
                              className="w-9 h-5 bg-primary rounded-full relative p-0.5 transition-colors cursor-pointer"
                              type="button"
                            >
                              <div className="w-4 h-4 bg-on-primary rounded-full translate-x-4 transition-transform"></div>
                            </button>
                            <span className="font-label-xs text-label-xs text-on-surface font-mono">true</span>
                          </div>
                        </div>
                        <div className="md:col-span-2 flex flex-col gap-1">
                          <span className="font-label-xs text-label-xs text-on-surface-variant font-mono">
                            message (String)
                          </span>
                          <input
                            className="h-8 px-2 rounded bg-surface-container-low font-body-sm text-body-sm text-on-surface outline-none"
                            type="text"
                            value="Slot reservasi akhir pekan tersisa 3 meja"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  &#123;/* Add JSONB Field Toolbar */&#125;
                  <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="font-label-xs text-label-xs text-on-surface-variant">Tipe Data:</span>
                      <button
                        className="px-2 py-0.5 rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-mono text-label-xs"
                        type="button"
                      >
                        String
                      </button>
                      <button
                        className="px-2 py-0.5 rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-mono text-label-xs"
                        type="button"
                      >
                        Number
                      </button>
                      <button
                        className="px-2 py-0.5 rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-mono text-label-xs"
                        type="button"
                      >
                        Boolean
                      </button>
                      <button
                        className="px-2 py-0.5 rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-mono text-label-xs"
                        type="button"
                      >
                        Array
                      </button>
                      <button
                        className="px-2 py-0.5 rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-mono text-label-xs"
                        type="button"
                      >
                        Object
                      </button>
                    </div>
                    <button
                      className="flex items-center gap-1 px-3 py-1.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm shadow-sm transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">add</span>
                      Tambah Properti JSONB
                    </button>
                  </div>
                </section>
              </div>
              &#123;/* RIGHT COLUMN: Delivery Integration, Edge ISR & Developer Hub (4 Cols) */&#125;
              <div className="lg:col-span-4 flex flex-col gap-space-lg">
                &#123;/* CARD 1: Lifecycle & ISR Revalidation */&#125;
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between pb-space-xs">
                    <span className="font-title-sm text-title-sm text-on-surface flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">history</span>
                      Status &amp; Edge Lifecycle
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-low text-on-surface font-label-xs text-label-xs font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Live Edge
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 font-body-sm text-body-sm text-on-surface-variant">
                    <div className="flex justify-between py-1 bg-surface-container-low px-2.5 rounded">
                      <span>Editor Terakhir:</span>
                      <span className="font-title-sm text-title-sm text-on-surface">Bambang Hermanto</span>
                    </div>
                    <div className="flex justify-between py-1 px-2.5">
                      <span>Waktu Sinkronisasi:</span>
                      <span className="font-mono text-on-surface">2 menit lalu (14:32:09)</span>
                    </div>
                    <div className="flex justify-between py-1 px-2.5">
                      <span>Cache Invalidation Tags:</span>
                      <div className="flex gap-1">
                        <span className="px-1.5 py-0.5 rounded bg-surface-container font-mono text-label-xs text-on-surface">
                          hero-banner
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-surface-container font-mono text-label-xs text-on-surface">
                          homepage
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    className="w-full flex items-center justify-center gap-1.5 py-2 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm shadow-sm transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]">refresh</span>
                    Trigger Instant Invalidation (Purge Vercel CDN)
                  </button>
                </div>
                &#123;/* CARD 2: Live Delivery API Endpoint & Quick Copy */&#125;
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <span className="font-title-sm text-title-sm text-on-surface flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">terminal</span>
                      Delivery API Endpoint
                    </span>
                    <span className="px-2 py-0.5 rounded font-label-xs text-label-xs bg-surface-container font-mono text-on-surface">
                      TTL 300s
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Akses langsung singleton payload untuk framework headless frontend.
                  </p>
                  <div className="p-2.5 rounded bg-primary text-on-primary font-mono text-label-xs overflow-x-auto shadow-inner">
                    <div className="flex items-center justify-between text-on-primary-container pb-1 text-[10px]">
                      <span>REST ENDPOINT</span>
                      <span>GET 200 OK</span>
                    </div>
                    <code>/delivery/v1/content?contentType=hero-banner&amp;siteKey=kult-barber</code>
                  </div>
                  &#123;/* Raw Single-Record JSON Preview (Collapsible) */&#125;
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-label-xs text-label-xs text-on-surface-variant font-mono">
                        Payload Preview (Non-Array)
                      </span>
                      <button className="font-label-xs text-label-xs text-on-surface hover:underline" type="button">
                        Collapse
                      </button>
                    </div>
                    <pre className="p-3 rounded bg-surface-container-low font-mono text-label-xs text-on-surface overflow-x-auto max-h-48 leading-tight">
                      <code>
                        &#123; "code": 200, "siteKey": "kult-barber", "contentType": "hero-banner", "isSingleton": true,
                        "data": &#123; "headline": "Eksplorasi Gaya Klasik...", "subheadline": "Layanan pangkas
                        rambut...", "badgePromo": "Promo Musim Panas...", "cta": &#123; "primary": &#123; "label":
                        "Reservasi", "url": "/booking" &#125;, "secondary": &#123; "label": "Layanan", "url":
                        "/services" &#125; &#125;, "slider_config": &#123; "autoplay": true, "interval_ms": 5000 &#125;
                        &#125; &#125;
                      </code>
                    </pre>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      className="flex items-center justify-center gap-1 py-1.5 rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm shadow-sm transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">content_copy</span>
                      Salin URL
                    </button>
                    <button
                      className="flex items-center justify-center gap-1 py-1.5 rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm shadow-sm transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                      Swagger Docs
                    </button>
                  </div>
                </div>
                &#123;/* CARD 3: Next.js Server Component Snippet */&#125;
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-title-sm text-title-sm text-on-surface flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">code</span>
                      Next.js 15 Integration
                    </span>
                    <span className="px-1.5 py-0.5 rounded font-mono text-label-xs bg-surface-container text-on-surface">
                      App Router
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Contoh fetch instan dengan cache tag otomatis pada Server Component:
                  </p>
                  <pre className="p-3 rounded bg-surface-container-low font-mono text-[11px] text-on-surface overflow-x-auto leading-relaxed">
                    <code>
                      <span className="text-on-surface-variant">// app/page.tsx (Server Component)</span>
                      <span className="font-bold">const</span> res = <span className="font-bold">await</span> fetch(
                      <span className="text-secondary">
                        'https://cms.pub/api/delivery/v1/content?contentType=hero-banner'
                      </span>
                      , &#123; next: &#123; tags: [<span className="text-secondary">'hero-banner'</span>], revalidate:{' '}
                      <span className="font-bold">300</span> &#125; &#125; );
                      <span className="font-bold">const</span> hero = (<span className="font-bold">await</span>{' '}
                      res.json()).data;
                    </code>
                  </pre>
                </div>
                &#123;/* CARD 4: Cross-Reference Relations */&#125;
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm">
                  <span className="font-title-sm text-title-sm text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">hub</span>
                    Relasi Antar-Singleton
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Hero ini terikat langsung secara global dengan singleton profil:
                  </p>
                  <div className="flex flex-col gap-1.5 pt-1">
                    <div className="flex items-center justify-between p-2 rounded bg-surface-container-low text-on-surface font-body-sm text-body-sm">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-on-surface-variant text-[16px]">badge</span>
                        <span>api::site-identity</span>
                      </div>
                      <span className="font-mono text-label-xs text-on-surface-variant">Linked</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-surface-container-low text-on-surface font-body-sm text-body-sm">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-on-surface-variant text-[16px]">more_time</span>
                        <span>api::operating-hours</span>
                      </div>
                      <span className="font-mono text-label-xs text-on-surface-variant">Linked</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          &#123;/* Bottom Sticky Action Bar */&#125;
          <aside className="sticky bottom-0 left-0 right-0 bg-surface-container-lowest shadow-lg py-3 px-space-lg z-30">
            <div className="max-w-[1560px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-space-sm">
              <div className="flex items-center gap-2 text-on-surface font-body-sm text-body-sm">
                <span className="material-symbols-outlined text-primary text-[18px]">verified</span>
                <span className="font-title-sm text-title-sm">Validasi Skema Singleton:</span>
                <span className="text-on-surface-variant hidden md:inline">
                  100% Sesuai Spesifikasi Backend &amp; Prisma Model (No Unsaved Conflict)
                </span>
              </div>
              <div className="flex items-center gap-space-sm w-full sm:w-auto justify-end">
                <button
                  className="px-4 py-2 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors"
                  type="button"
                >
                  Batal
                </button>
                <button
                  className="flex items-center gap-1.5 px-5 py-2 rounded bg-primary text-on-primary font-label-sm text-label-sm hover:bg-primary-container shadow-sm transition-colors"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">bolt</span>
                  Publish &amp; Revalidate ISR
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
