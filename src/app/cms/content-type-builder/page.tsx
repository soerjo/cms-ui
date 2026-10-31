'use client';

import React, { useState } from 'react';
import { CmsHeader } from '@/components/cms/CmsHeader';

export default function ContentTypeBuilderPage() {
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
        breadcrumbTitle="Studio / Schema Builder"
        onRevalidate={handleRevalidate}
        isRevalidating={isRevalidating}
      />
      <main className="w-full pt-16 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          &#123;/* Top Context Navigation Ribbon */&#125;
          <div className="w-full bg-surface-container-lowest px-space-xl py-space-sm flex flex-wrap items-center justify-between gap-space-md shadow-sm">
            <div className="flex items-center gap-space-sm flex-wrap">
              <span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface-variant font-label-xs text-label-xs uppercase tracking-wider font-semibold">
                SCHEMA REGISTRY
              </span>
              <span className="text-outline-variant font-label-xs text-label-xs">•</span>
              <span className="font-label-xs text-label-xs text-on-surface-variant tracking-wide uppercase">
                ARCHITECTURE &amp; DATA MODELING
              </span>
              <span className="text-outline-variant font-label-xs text-label-xs">•</span>
              <span className="inline-flex items-center gap-1.5 px-space-xs py-0.5 rounded bg-surface-container-low text-on-surface font-label-xs text-label-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                Prisma ORM v5.19 • PostgreSQL 16
              </span>
            </div>
            <div className="flex items-center gap-space-xs">
              <span className="font-label-xs text-label-xs text-on-surface-variant">
                Model Count: <strong className="text-on-surface">7 Aktif</strong>
              </span>
              <span className="text-outline-variant font-label-xs text-label-xs">|</span>
              <span className="font-label-xs text-label-xs text-on-surface-variant">
                Last Migration: <span className="font-mono text-on-surface">2025-05-18 10:42:01 WIB</span>
              </span>
            </div>
          </div>
          &#123;/* Header Banner */&#125;
          <div className="w-full px-space-xl py-space-lg flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-lg bg-surface-container-lowest shadow-sm">
            <div className="flex flex-col gap-space-xs max-w-3xl">
              <div className="flex items-center gap-space-sm">
                <h1 className="font-headline-md text-headline-md text-on-surface font-semibold tracking-tight">
                  Content Type &amp; Schema Builder
                </h1>
                <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-xs text-label-xs font-semibold">
                  v2.4.0 Engine
                </span>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Rancang skema model data dinamis (Collection Type &amp; Single Type / Singleton), konfigurasi field
                atribut kustom, validasi Prisma/PostgreSQL, dan publikasikan secara instan ke Delivery API Next.js.
              </p>
            </div>
            &#123;/* Top Action Buttons */&#125;
            <div className="flex items-center gap-space-sm flex-wrap shrink-0">
              <button className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md shadow-sm transition-all">
                <span className="material-symbols-outlined text-[18px]">terminal</span>
                <span>Ekspor TypeScript Types</span>
              </button>
              <button
                className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md shadow-sm transition-all"
                id="btn-toggle-modal"
              >
                <span className="material-symbols-outlined text-[18px]">visibility</span>
                <span>API Schema Preview</span>
              </button>
              <button
                className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md shadow-md transition-all"
                id="btn-open-create-model"
              >
                <span className="material-symbols-outlined text-[18px]">add_circle</span>
                <span>+ Buat Content Type Baru</span>
              </button>
            </div>
          </div>
          &#123;/* Main Work Area: Master-Detail Two-Pane Grid */&#125;
          <div className="w-full px-space-xl py-space-lg">
            <div className="grid grid-cols-12 gap-gutter items-start">
              &#123;/* LEFT COLUMN: Content Type Selector (3.5 cols on desktop) */&#125;
              <div className="col-span-12 xl:col-span-4 flex flex-col gap-space-md">
                &#123;/* Search & Filter Card */&#125;
                <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-sm">
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-[18px] text-on-surface-variant">
                      search
                    </span>
                    <input
                      className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:bg-surface-container transition-all"
                      placeholder="Cari skema model / API key..."
                      type="text"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-space-xs text-on-surface-variant font-label-xs text-label-xs">
                    <span>Filter Kategori</span>
                    <span className="hover:text-on-surface cursor-pointer underline">Reset Filter</span>
                  </div>
                </div>
                &#123;/* Section 1: Collection Types */&#125;
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between pb-space-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary text-[18px]">database</span>
                      <span className="font-title-sm text-title-sm text-on-surface font-semibold">
                        Collection Types
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">(Dinamis)</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-surface-container font-label-xs text-label-xs text-on-surface font-semibold">
                      4 Model
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    &#123;/* Item 1: Artikel Blog (ACTIVE SELECTED) */&#125;
                    <div className="p-space-sm rounded-lg bg-primary-container text-on-primary shadow-sm flex items-center justify-between cursor-pointer transition-all">
                      <div className="flex items-start gap-space-sm">
                        <div className="w-8 h-8 rounded-lg bg-surface-container-lowest text-primary flex items-center justify-center shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-[18px]">article</span>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-1.5">
                            <span className="font-title-sm text-title-sm font-semibold text-surface-container-lowest">
                              Artikel Blog
                            </span>
                            <span className="px-1.5 py-0.2 rounded bg-surface-container-lowest/20 font-label-xs text-label-xs text-surface-container-low font-mono">
                              api::article
                            </span>
                          </div>
                          <span className="font-body-sm text-body-sm text-on-primary-container">
                            8 fields • 48 entri tersimpan
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        <span className="material-symbols-outlined text-[16px] text-surface-container-highest">
                          chevron_right
                        </span>
                      </div>
                    </div>
                    &#123;/* Item 2: Testimoni Klien */&#125;
                    <div className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface flex items-center justify-between cursor-pointer transition-all">
                      <div className="flex items-start gap-space-sm">
                        <div className="w-8 h-8 rounded-lg bg-surface-container text-on-surface-variant flex items-center justify-center shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-[18px]">reviews</span>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-1.5">
                            <span className="font-title-sm text-title-sm font-medium text-on-surface">
                              Testimoni Klien
                            </span>
                            <span className="px-1.5 py-0.2 rounded bg-surface-container-high font-label-xs text-label-xs text-on-surface-variant font-mono">
                              api::testimonial
                            </span>
                          </div>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">5 fields • 24 entri</span>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
                        chevron_right
                      </span>
                    </div>
                    &#123;/* Item 3: Layanan & Haircut */&#125;
                    <div className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface flex items-center justify-between cursor-pointer transition-all">
                      <div className="flex items-start gap-space-sm">
                        <div className="w-8 h-8 rounded-lg bg-surface-container text-on-surface-variant flex items-center justify-center shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-[18px]">content_cut</span>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-1.5">
                            <span className="font-title-sm text-title-sm font-medium text-on-surface">
                              Layanan &amp; Haircut
                            </span>
                            <span className="px-1.5 py-0.2 rounded bg-surface-container-high font-label-xs text-label-xs text-on-surface-variant font-mono">
                              api::service
                            </span>
                          </div>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">6 fields • 16 entri</span>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
                        chevron_right
                      </span>
                    </div>
                    &#123;/* Item 4: Portofolio Grooming */&#125;
                    <div className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface flex items-center justify-between cursor-pointer transition-all">
                      <div className="flex items-start gap-space-sm">
                        <div className="w-8 h-8 rounded-lg bg-surface-container text-on-surface-variant flex items-center justify-center shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-[18px]">photo_camera</span>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-1.5">
                            <span className="font-title-sm text-title-sm font-medium text-on-surface">
                              Portofolio Grooming
                            </span>
                            <span className="px-1.5 py-0.2 rounded bg-surface-container-high font-label-xs text-label-xs text-on-surface-variant font-mono">
                              api::portfolio
                            </span>
                          </div>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">7 fields • 32 entri</span>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
                        chevron_right
                      </span>
                    </div>
                  </div>
                </div>
                &#123;/* Section 2: Single Types / Singletons */&#125;
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between pb-space-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary text-[18px]">target</span>
                      <span className="font-title-sm text-title-sm text-on-surface font-semibold">Single Types</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">(Singleton)</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-surface-container font-label-xs text-label-xs text-on-surface font-semibold">
                      3 Model
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    &#123;/* Single 1 */&#125;
                    <div className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface flex items-center justify-between cursor-pointer transition-all">
                      <div className="flex items-start gap-space-sm">
                        <div className="w-8 h-8 rounded-lg bg-surface-container text-on-surface-variant flex items-center justify-center shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-[18px]">badge</span>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-1.5">
                            <span className="font-title-sm text-title-sm font-medium text-on-surface">
                              Profil &amp; Brand Identity
                            </span>
                            <span className="px-1.5 py-0.2 rounded bg-surface-container-high font-label-xs text-label-xs text-on-surface-variant font-mono">
                              api::site-identity
                            </span>
                          </div>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">6 fields • 1 entri</span>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
                        chevron_right
                      </span>
                    </div>
                    &#123;/* Single 2 */&#125;
                    <div className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface flex items-center justify-between cursor-pointer transition-all">
                      <div className="flex items-start gap-space-sm">
                        <div className="w-8 h-8 rounded-lg bg-surface-container text-on-surface-variant flex items-center justify-center shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-[18px]">view_carousel</span>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-1.5">
                            <span className="font-title-sm text-title-sm font-medium text-on-surface">
                              Hero Banner Beranda
                            </span>
                            <span className="px-1.5 py-0.2 rounded bg-surface-container-high font-label-xs text-label-xs text-on-surface-variant font-mono">
                              api::hero-banner
                            </span>
                          </div>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">5 fields • 1 entri</span>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
                        chevron_right
                      </span>
                    </div>
                    &#123;/* Single 3 */&#125;
                    <div className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface flex items-center justify-between cursor-pointer transition-all">
                      <div className="flex items-start gap-space-sm">
                        <div className="w-8 h-8 rounded-lg bg-surface-container text-on-surface-variant flex items-center justify-center shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-[18px]">schedule</span>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-1.5">
                            <span className="font-title-sm text-title-sm font-medium text-on-surface">
                              Jam Buka &amp; Reservasi
                            </span>
                            <span className="px-1.5 py-0.2 rounded bg-surface-container-high font-label-xs text-label-xs text-on-surface-variant font-mono">
                              api::operating-hours
                            </span>
                          </div>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">4 fields • 1 entri</span>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
                        chevron_right
                      </span>
                    </div>
                  </div>
                </div>
                &#123;/* Add New Schema Button */&#125;
                <button
                  className="w-full py-space-md px-space-md rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface flex items-center justify-center gap-space-sm font-title-sm text-title-sm font-semibold transition-all"
                  id="btn-quick-add-type"
                >
                  <span className="material-symbols-outlined text-[20px]">add</span>
                  <span>+ Tambah Content Type / Singleton</span>
                </button>
                &#123;/* Migration Health Card */&#125;
                <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-label-xs text-label-xs text-on-surface-variant uppercase font-semibold">
                      Database Sync Status
                    </span>
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-xs text-label-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Synced
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Skema database PostgreSQL sinkron penuh dengan skema visual CMS. Tidak ada pending migration.
                  </p>
                </div>
              </div>
              &#123;/* RIGHT COLUMN: Active Schema Builder & Field Composer (8 cols on desktop) */&#125;
              <div className="col-span-12 xl:col-span-8 flex flex-col gap-space-lg">
                &#123;/* Active Model Header Bar Card */&#125;
                <div className="p-space-lg bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                    <div className="flex items-center gap-space-md">
                      <div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0 shadow-md">
                        <span className="material-symbols-outlined text-[24px]">article</span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-space-sm flex-wrap">
                          <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                            Artikel Blog
                          </h2>
                          <span className="px-2 py-0.5 rounded bg-surface-container font-mono font-label-xs text-label-xs text-on-surface">
                            api::article
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-xs text-label-xs font-semibold">
                            Collection Type
                          </span>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-low text-on-surface font-label-xs text-label-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            Tersinkronisasi ke Delivery API
                          </span>
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                          Tabel Database: <span className="font-mono text-on-surface font-medium">cms_articles</span> •
                          8 Kolom Didefinisikan • Auto ISR Revalidate:{' '}
                          <span className="font-mono text-on-surface">tag('articles')</span>
                        </span>
                      </div>
                    </div>
                    &#123;/* Header Action Buttons */&#125;
                    <div className="flex items-center gap-space-xs shrink-0">
                      <button className="px-space-md py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-all">
                        Kembalikan Perubahan
                      </button>
                      <button className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-sm text-label-sm shadow-md transition-all">
                        <span className="material-symbols-outlined text-[16px]">save</span>
                        <span>Simpan &amp; Migrasi Skema</span>
                      </button>
                    </div>
                  </div>
                  &#123;/* Endpoint Preview Pill Bar */&#125;
                  <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
                    <div className="flex items-center gap-space-xs font-mono font-body-sm text-body-sm overflow-x-auto text-on-surface">
                      <span className="px-2 py-0.5 rounded bg-primary text-on-primary font-label-xs text-label-xs font-semibold uppercase">
                        GET
                      </span>
                      <span className="text-on-surface">
                        /delivery/v1/content?contentType=article&amp;siteKey=kult-barber
                      </span>
                    </div>
                    <div className="flex items-center gap-space-sm shrink-0">
                      <button className="text-on-surface-variant hover:text-on-surface font-label-xs text-label-xs flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">content_copy</span>
                        Salin URI
                      </button>
                      <button className="text-on-surface-variant hover:text-on-surface font-label-xs text-label-xs flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                        Buka di Postman
                      </button>
                    </div>
                  </div>
                </div>
                &#123;/* Schema Field Quick Add Bar */&#125;
                <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-label-xs text-label-xs text-on-surface-variant uppercase font-semibold tracking-wider">
                      Komposer Tambah Field Cepat
                    </span>
                    <span className="font-label-xs text-label-xs text-on-surface-variant">
                      Klik tipe untuk menyisipkan ke tabel
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-space-xs">
                    <button className="flex flex-col items-center justify-center p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface transition-all gap-1 text-center">
                      <span className="material-symbols-outlined text-[20px] text-primary">text_fields</span>
                      <span className="font-label-xs text-label-xs font-medium">Text</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface transition-all gap-1 text-center">
                      <span className="material-symbols-outlined text-[20px] text-primary">format_align_left</span>
                      <span className="font-label-xs text-label-xs font-medium">Rich Text</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface transition-all gap-1 text-center">
                      <span className="material-symbols-outlined text-[20px] text-primary">pin</span>
                      <span className="font-label-xs text-label-xs font-medium">Number</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface transition-all gap-1 text-center">
                      <span className="material-symbols-outlined text-[20px] text-primary">photo_library</span>
                      <span className="font-label-xs text-label-xs font-medium">Media Hub</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface transition-all gap-1 text-center">
                      <span className="material-symbols-outlined text-[20px] text-primary">link</span>
                      <span className="font-label-xs text-label-xs font-medium">Relation</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface transition-all gap-1 text-center">
                      <span className="material-symbols-outlined text-[20px] text-primary">toggle_on</span>
                      <span className="font-label-xs text-label-xs font-medium">Boolean</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface transition-all gap-1 text-center">
                      <span className="material-symbols-outlined text-[20px] text-primary">calendar_month</span>
                      <span className="font-label-xs text-label-xs font-medium">Date/Time</span>
                    </button>
                    <button className="flex flex-col items-center justify-center p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface transition-all gap-1 text-center">
                      <span className="material-symbols-outlined text-[20px] text-primary">data_object</span>
                      <span className="font-label-xs text-label-xs font-medium">JSONB</span>
                    </button>
                  </div>
                </div>
                &#123;/* Field List / Schema Table (Shadcn UI Table Style) */&#125;
                <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
                  <div className="px-space-lg py-space-md bg-surface-container-low flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="font-title-sm text-title-sm text-on-surface font-semibold">
                        Daftar Field &amp; Kolom Data
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-xs text-label-xs font-medium">
                        8 Field Terkonfigurasi
                      </span>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <button className="px-space-sm py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-xs text-label-xs flex items-center gap-1 transition-all">
                        <span className="material-symbols-outlined text-[14px]">swap_vert</span>
                        Urutkan Ulang (Drag)
                      </button>
                    </div>
                  </div>
                  &#123;/* Table Container */&#125;
                  <div className="overflow-x-auto w-full">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-surface-container-low/50 text-on-surface-variant font-label-xs text-label-xs uppercase tracking-wider">
                          <th className="py-3 px-space-md">Field &amp; API Key</th>
                          <th className="py-3 px-space-md">Tipe Data</th>
                          <th className="py-3 px-space-md">Validasi &amp; Atribut</th>
                          <th className="py-3 px-space-md">Penggunaan di Frontend</th>
                          <th className="py-3 px-space-md text-right">Aksi</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-transparent">
                        &#123;/* Row 1: title */&#125;
                        <tr className="hover:bg-surface-container-low/40 transition-colors">
                          <td className="py-3.5 px-space-md">
                            <div className="flex items-center gap-space-sm">
                              <span className="material-symbols-outlined text-outline text-[16px] cursor-grab">
                                drag_indicator
                              </span>
                              <div className="flex flex-col">
                                <span className="font-title-sm text-title-sm font-semibold text-on-surface">
                                  Judul Artikel
                                </span>
                                <span className="font-mono font-label-xs text-label-xs text-on-surface-variant">
                                  title
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md">
                            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs font-mono">
                              <span className="material-symbols-outlined text-[14px]">text_fields</span>
                              <span>Text (Short)</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md">
                            <div className="flex items-center gap-1 flex-wrap font-label-xs text-label-xs">
                              <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-semibold">
                                Required
                              </span>
                              <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant">
                                Max: 120
                              </span>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md">
                            <div className="flex items-center gap-1.5 text-on-surface font-body-sm text-body-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                              <span>Next.js Page H1 Heading</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md text-right">
                            <div className="inline-flex items-center gap-1">
                              <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface">
                                <span className="material-symbols-outlined text-[18px]">settings</span>
                              </button>
                              <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-error">
                                <span className="material-symbols-outlined text-[18px]">delete</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                        &#123;/* Row 2: slug */&#125;
                        <tr className="hover:bg-surface-container-low/40 transition-colors">
                          <td className="py-3.5 px-space-md">
                            <div className="flex items-center gap-space-sm">
                              <span className="material-symbols-outlined text-outline text-[16px] cursor-grab">
                                drag_indicator
                              </span>
                              <div className="flex flex-col">
                                <span className="font-title-sm text-title-sm font-semibold text-on-surface">
                                  URL Slug
                                </span>
                                <span className="font-mono font-label-xs text-label-xs text-on-surface-variant">
                                  slug
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md">
                            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs font-mono">
                              <span className="material-symbols-outlined text-[14px]">link</span>
                              <span>UID / Slug</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md">
                            <div className="flex items-center gap-1 flex-wrap font-label-xs text-label-xs">
                              <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-semibold">
                                Required
                              </span>
                              <span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-semibold">
                                Unique
                              </span>
                              <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant">
                                Auto-from: title
                              </span>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md">
                            <div className="flex items-center gap-1.5 text-on-surface font-body-sm text-body-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                              <span className="font-mono text-label-xs text-label-xs">/artikel/:slug</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md text-right">
                            <div className="inline-flex items-center gap-1">
                              <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface">
                                <span className="material-symbols-outlined text-[18px]">settings</span>
                              </button>
                              <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-error">
                                <span className="material-symbols-outlined text-[18px]">delete</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                        &#123;/* Row 3: excerpt */&#125;
                        <tr className="hover:bg-surface-container-low/40 transition-colors">
                          <td className="py-3.5 px-space-md">
                            <div className="flex items-center gap-space-sm">
                              <span className="material-symbols-outlined text-outline text-[16px] cursor-grab">
                                drag_indicator
                              </span>
                              <div className="flex flex-col">
                                <span className="font-title-sm text-title-sm font-semibold text-on-surface">
                                  Ringkasan / Excerpt
                                </span>
                                <span className="font-mono font-label-xs text-label-xs text-on-surface-variant">
                                  excerpt
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md">
                            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs font-mono">
                              <span className="material-symbols-outlined text-[14px]">notes</span>
                              <span>Text (Long)</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md">
                            <div className="flex items-center gap-1 flex-wrap font-label-xs text-label-xs">
                              <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant">
                                Optional
                              </span>
                              <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant">
                                Max: 250
                              </span>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md">
                            <div className="flex items-center gap-1.5 text-on-surface font-body-sm text-body-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                              <span>SEO Meta &amp; Card Standfirst</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md text-right">
                            <div className="inline-flex items-center gap-1">
                              <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface">
                                <span className="material-symbols-outlined text-[18px]">settings</span>
                              </button>
                              <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-error">
                                <span className="material-symbols-outlined text-[18px]">delete</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                        &#123;/* Row 4: content */&#125;
                        <tr className="hover:bg-surface-container-low/40 transition-colors">
                          <td className="py-3.5 px-space-md">
                            <div className="flex items-center gap-space-sm">
                              <span className="material-symbols-outlined text-outline text-[16px] cursor-grab">
                                drag_indicator
                              </span>
                              <div className="flex flex-col">
                                <span className="font-title-sm text-title-sm font-semibold text-on-surface">
                                  Konten Artikel
                                </span>
                                <span className="font-mono font-label-xs text-label-xs text-on-surface-variant">
                                  content
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md">
                            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs font-mono">
                              <span className="material-symbols-outlined text-[14px]">format_align_left</span>
                              <span>Rich Text Blocks</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md">
                            <div className="flex items-center gap-1 flex-wrap font-label-xs text-label-xs">
                              <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-semibold">
                                Required
                              </span>
                              <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant">
                                Markdown/MDX
                              </span>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md">
                            <div className="flex items-center gap-1.5 text-on-surface font-body-sm text-body-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                              <span>Server Component Article Body</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md text-right">
                            <div className="inline-flex items-center gap-1">
                              <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface">
                                <span className="material-symbols-outlined text-[18px]">settings</span>
                              </button>
                              <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-error">
                                <span className="material-symbols-outlined text-[18px]">delete</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                        &#123;/* Row 5: coverImage */&#125;
                        <tr className="hover:bg-surface-container-low/40 transition-colors">
                          <td className="py-3.5 px-space-md">
                            <div className="flex items-center gap-space-sm">
                              <span className="material-symbols-outlined text-outline text-[16px] cursor-grab">
                                drag_indicator
                              </span>
                              <div className="flex flex-col">
                                <span className="font-title-sm text-title-sm font-semibold text-on-surface">
                                  Cover Banner Image
                                </span>
                                <span className="font-mono font-label-xs text-label-xs text-on-surface-variant">
                                  coverImage
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md">
                            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs font-mono">
                              <span className="material-symbols-outlined text-[14px]">image</span>
                              <span>Media (Single)</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md">
                            <div className="flex items-center gap-1 flex-wrap font-label-xs text-label-xs">
                              <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-semibold">
                                Required
                              </span>
                              <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant">
                                Ratio: 16:9
                              </span>
                              <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant">
                                Focal Point
                              </span>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md">
                            <div className="flex items-center gap-1.5 text-on-surface font-body-sm text-body-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                              <span>CDN Next/Image Hero Asset</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md text-right">
                            <div className="inline-flex items-center gap-1">
                              <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface">
                                <span className="material-symbols-outlined text-[18px]">settings</span>
                              </button>
                              <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-error">
                                <span className="material-symbols-outlined text-[18px]">delete</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                        &#123;/* Row 6: category */&#125;
                        <tr className="hover:bg-surface-container-low/40 transition-colors">
                          <td className="py-3.5 px-space-md">
                            <div className="flex items-center gap-space-sm">
                              <span className="material-symbols-outlined text-outline text-[16px] cursor-grab">
                                drag_indicator
                              </span>
                              <div className="flex flex-col">
                                <span className="font-title-sm text-title-sm font-semibold text-on-surface">
                                  Kategori
                                </span>
                                <span className="font-mono font-label-xs text-label-xs text-on-surface-variant">
                                  category
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md">
                            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs font-mono">
                              <span className="material-symbols-outlined text-[14px]">account_tree</span>
                              <span>Relation (M:1)</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md">
                            <div className="flex items-center gap-1 flex-wrap font-label-xs text-label-xs">
                              <span className="px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-semibold">
                                Required
                              </span>
                              <span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-mono">
                                → api::category
                              </span>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md">
                            <div className="flex items-center gap-1.5 text-on-surface font-body-sm text-body-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                              <span>Taksonomi Filter Chip</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md text-right">
                            <div className="inline-flex items-center gap-1">
                              <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface">
                                <span className="material-symbols-outlined text-[18px]">settings</span>
                              </button>
                              <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-error">
                                <span className="material-symbols-outlined text-[18px]">delete</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                        &#123;/* Row 7: readingTime */&#125;
                        <tr className="hover:bg-surface-container-low/40 transition-colors">
                          <td className="py-3.5 px-space-md">
                            <div className="flex items-center gap-space-sm">
                              <span className="material-symbols-outlined text-outline text-[16px] cursor-grab">
                                drag_indicator
                              </span>
                              <div className="flex flex-col">
                                <span className="font-title-sm text-title-sm font-semibold text-on-surface">
                                  Estimasi Waktu Baca
                                </span>
                                <span className="font-mono font-label-xs text-label-xs text-on-surface-variant">
                                  readingTime
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md">
                            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs font-mono">
                              <span className="material-symbols-outlined text-[14px]">pin</span>
                              <span>Number (Int)</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md">
                            <div className="flex items-center gap-1 flex-wrap font-label-xs text-label-xs">
                              <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant">
                                Optional
                              </span>
                              <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant">
                                Default: 5 min
                              </span>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md">
                            <div className="flex items-center gap-1.5 text-on-surface font-body-sm text-body-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                              <span>Badge Estimasi Waktu Baca</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md text-right">
                            <div className="inline-flex items-center gap-1">
                              <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface">
                                <span className="material-symbols-outlined text-[18px]">settings</span>
                              </button>
                              <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-error">
                                <span className="material-symbols-outlined text-[18px]">delete</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                        &#123;/* Row 8: isFeatured */&#125;
                        <tr className="hover:bg-surface-container-low/40 transition-colors">
                          <td className="py-3.5 px-space-md">
                            <div className="flex items-center gap-space-sm">
                              <span className="material-symbols-outlined text-outline text-[16px] cursor-grab">
                                drag_indicator
                              </span>
                              <div className="flex flex-col">
                                <span className="font-title-sm text-title-sm font-semibold text-on-surface">
                                  Sorotan Beranda
                                </span>
                                <span className="font-mono font-label-xs text-label-xs text-on-surface-variant">
                                  isFeatured
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md">
                            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs font-mono">
                              <span className="material-symbols-outlined text-[14px]">toggle_on</span>
                              <span>Boolean (Switch)</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md">
                            <div className="flex items-center gap-1 flex-wrap font-label-xs text-label-xs">
                              <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant">
                                Default: false
                              </span>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md">
                            <div className="flex items-center gap-1.5 text-on-surface font-body-sm text-body-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                              <span>Carousel Flag Headline</span>
                            </div>
                          </td>
                          <td className="py-3.5 px-space-md text-right">
                            <div className="inline-flex items-center gap-1">
                              <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-on-surface">
                                <span className="material-symbols-outlined text-[18px]">settings</span>
                              </button>
                              <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-error">
                                <span className="material-symbols-outlined text-[18px]">delete</span>
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  &#123;/* Table Footer Summary */&#125;
                  <div className="p-space-md bg-surface-container-low flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm">
                    <span className="font-label-xs text-label-xs text-on-surface-variant">
                      Auto-Audit: 8 field tervalidasi skema TypeScript • Tidak ada konflik nama kunci API
                    </span>
                    <button className="flex items-center gap-1 px-space-md py-1.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-sm text-label-sm shadow-sm transition-all">
                      <span className="material-symbols-outlined text-[16px]">add</span>
                      <span>Tambah Field Lainnya</span>
                    </button>
                  </div>
                </div>
                &#123;/* Generated TypeScript & Delivery API Code Preview Block */&#125;
                <div
                  className="p-space-lg bg-primary-container text-on-primary rounded-xl shadow-md flex flex-col gap-space-md"
                  id="code-preview-drawer"
                >
                  <div className="flex items-center justify-between flex-wrap gap-space-sm">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-[20px] text-tertiary-fixed">code</span>
                      <div className="flex flex-col">
                        <span className="font-title-sm text-title-sm font-semibold text-surface-container-lowest">
                          Generated TypeScript Interface
                        </span>
                        <span className="font-label-xs text-label-xs text-on-primary-container">
                          Next.js 15 App Router • Statically Typed Payload Contract
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <span className="px-2 py-0.5 rounded bg-surface-container-lowest/10 text-on-primary font-mono font-label-xs text-label-xs">
                        types/cms/article.d.ts
                      </span>
                      <button
                        className="p-1.5 rounded hover:bg-surface-container-lowest/20 text-on-primary transition-all"
                        title="Copy Interface"
                      >
                        <span className="material-symbols-outlined text-[16px]">content_copy</span>
                      </button>
                    </div>
                  </div>
                  &#123;/* Code Snippet Area */&#125;
                  <div className="p-space-md rounded-lg bg-black/40 font-mono text-body-sm leading-relaxed overflow-x-auto text-inverse-on-surface">
                    <pre id="code-ts-block">
                      <code>
                        <span className="text-secondary-fixed">/**</span>
                        <span className="text-secondary-fixed">
                          * Generated automatically by PublishCore Schema Registry
                        </span>
                        <span className="text-secondary-fixed">
                          * Target Site: kult-barber | Collection: api::article
                        </span>
                        <span className="text-secondary-fixed">*/</span>
                        <span className="text-tertiary-fixed">export interface</span>{' '}
                        <span className="text-surface-container-lowest font-bold">ArticleModel</span> &#123; id:{' '}
                        <span className="text-tertiary-fixed-dim">string</span>; title:{' '}
                        <span className="text-tertiary-fixed-dim">string</span>; slug:{' '}
                        <span className="text-tertiary-fixed-dim">string</span>; excerpt?:{' '}
                        <span className="text-tertiary-fixed-dim">string</span>; content:{' '}
                        <span className="text-tertiary-fixed-dim">string</span>;{' '}
                        <span className="text-outline-variant">// MDX / Markdown blocks AST</span>
                        coverImage: <span className="text-surface-container-lowest">MediaAsset</span>; category:{' '}
                        <span className="text-surface-container-lowest">CategoryModel</span>;{' '}
                        <span className="text-outline-variant">// Foreign Key Relation</span>
                        readingTime?: <span className="text-tertiary-fixed-dim">number</span>; isFeatured:{' '}
                        <span className="text-tertiary-fixed-dim">boolean</span>; createdAt:{' '}
                        <span className="text-tertiary-fixed-dim">string</span>; updatedAt:{' '}
                        <span className="text-tertiary-fixed-dim">string</span>; publishedAt:{' '}
                        <span className="text-tertiary-fixed-dim">string</span>; &#125;
                        <span className="text-tertiary-fixed">export interface</span>{' '}
                        <span className="text-surface-container-lowest font-bold">MediaAsset</span> &#123; id:{' '}
                        <span className="text-tertiary-fixed-dim">string</span>; url:{' '}
                        <span className="text-tertiary-fixed-dim">string</span>; blurDataUrl?:{' '}
                        <span className="text-tertiary-fixed-dim">string</span>; width:{' '}
                        <span className="text-tertiary-fixed-dim">number</span>; height:{' '}
                        <span className="text-tertiary-fixed-dim">number</span>; altText:{' '}
                        <span className="text-tertiary-fixed-dim">string</span>; &#125;
                      </code>
                    </pre>
                  </div>
                  <div className="flex items-center justify-between text-on-primary-container font-body-sm text-body-sm pt-space-xs">
                    <span>
                      Sinkronisasi otomatis ke paket NPM internal{' '}
                      <code className="font-mono text-surface-container-lowest">@publishcore/types-kult-barber</code>
                    </span>
                    <span className="inline-flex items-center gap-1 text-emerald-400 font-label-xs text-label-xs">
                      <span className="material-symbols-outlined text-[14px]">check_circle</span>
                      Typecheck Passed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          &#123;/* Interactive Modal / Slide-Over: "Konfigurasi Field Baru" */&#125;
          <div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm hidden items-center justify-center p-space-md"
            id="modal-field-config"
          >
            <div className="bg-surface-container-lowest rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
              &#123;/* Modal Header */&#125;
              <div className="p-space-lg bg-surface-container-low flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">add_box</span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Konfigurasi Field Baru
                    </h3>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Model Target: <strong className="text-on-surface">Artikel Blog (api::article)</strong>
                    </span>
                  </div>
                </div>
                <button
                  className="p-1.5 rounded-lg hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors"
                  id="btn-close-modal"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>
              &#123;/* Modal Body */&#125;
              <div className="p-space-lg flex flex-col gap-space-lg max-h-[768px] overflow-y-auto">
                &#123;/* Step 1: Field Type Selection Grid */&#125;
                <div className="flex flex-col gap-space-xs">
                  <label className="font-title-sm text-title-sm text-on-surface font-medium">
                    1. Pilih Tipe Field Data
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-xs">
                    <div className="field-type-pill p-space-sm rounded-lg bg-primary-container text-on-primary flex flex-col items-center gap-1 cursor-pointer transition-all">
                      <span className="material-symbols-outlined text-[20px]">text_fields</span>
                      <span className="font-label-xs text-label-xs font-semibold">Text</span>
                    </div>
                    <div className="field-type-pill p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface flex flex-col items-center gap-1 cursor-pointer transition-all">
                      <span className="material-symbols-outlined text-[20px]">format_align_left</span>
                      <span className="font-label-xs text-label-xs font-medium">Rich Text</span>
                    </div>
                    <div className="field-type-pill p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface flex flex-col items-center gap-1 cursor-pointer transition-all">
                      <span className="material-symbols-outlined text-[20px]">pin</span>
                      <span className="font-label-xs text-label-xs font-medium">Number</span>
                    </div>
                    <div className="field-type-pill p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface flex flex-col items-center gap-1 cursor-pointer transition-all">
                      <span className="material-symbols-outlined text-[20px]">photo_library</span>
                      <span className="font-label-xs text-label-xs font-medium">Media Asset</span>
                    </div>
                    <div className="field-type-pill p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface flex flex-col items-center gap-1 cursor-pointer transition-all">
                      <span className="material-symbols-outlined text-[20px]">account_tree</span>
                      <span className="font-label-xs text-label-xs font-medium">Relation</span>
                    </div>
                    <div className="field-type-pill p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface flex flex-col items-center gap-1 cursor-pointer transition-all">
                      <span className="material-symbols-outlined text-[20px]">toggle_on</span>
                      <span className="font-label-xs text-label-xs font-medium">Boolean</span>
                    </div>
                    <div className="field-type-pill p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface flex flex-col items-center gap-1 cursor-pointer transition-all">
                      <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                      <span className="font-label-xs text-label-xs font-medium">Date/Time</span>
                    </div>
                    <div className="field-type-pill p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface flex flex-col items-center gap-1 cursor-pointer transition-all">
                      <span className="material-symbols-outlined text-[20px]">data_object</span>
                      <span className="font-label-xs text-label-xs font-medium">JSON Object</span>
                    </div>
                  </div>
                </div>
                &#123;/* Step 2: Field Details & API Key */&#125;
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md text-on-surface font-medium">
                      Nama Tampilan Field (Label)
                    </label>
                    <input
                      className="px-space-md py-2 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:bg-surface-container transition-all"
                      id="field-input-name"
                      type="text"
                      value="Penulis / Author Byline"
                    />
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Label yang terlihat oleh editor di form
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-md text-label-md text-on-surface font-medium">
                      API Key / JSON Property (camelCase)
                    </label>
                    <input
                      className="px-space-md py-2 rounded-lg bg-surface-container-low text-on-surface font-mono font-body-md text-body-md focus:outline-none focus:bg-surface-container transition-all"
                      id="field-input-key"
                      type="text"
                      value="authorByline"
                    />
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Kunci properti di response REST / GraphQL
                    </span>
                  </div>
                </div>
                &#123;/* Step 3: Validations & Options */&#125;
                <div className="flex flex-col gap-space-sm">
                  <label className="font-title-sm text-title-sm text-on-surface font-medium">
                    Aturan Validasi &amp; Database Index
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
                    <label className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer flex items-center gap-space-sm transition-all">
                      <input
                        defaultChecked={true}
                        className="w-4 h-4 rounded text-primary focus:ring-0"
                        type="checkbox"
                      />
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md text-on-surface font-medium">Wajib Diisi</span>
                        <span className="font-label-xs text-label-xs text-on-surface-variant">Field Required</span>
                      </div>
                    </label>
                    <label className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer flex items-center gap-space-sm transition-all">
                      <input className="w-4 h-4 rounded text-primary focus:ring-0" type="checkbox" />
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md text-on-surface font-medium">Nilai Unik</span>
                        <span className="font-label-xs text-label-xs text-on-surface-variant">Unique Constraint</span>
                      </div>
                    </label>
                    <label className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer flex items-center gap-space-sm transition-all">
                      <input
                        defaultChecked={true}
                        className="w-4 h-4 rounded text-primary focus:ring-0"
                        type="checkbox"
                      />
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md text-on-surface font-medium">B-Tree Index</span>
                        <span className="font-label-xs text-label-xs text-on-surface-variant">PostgreSQL DB Index</span>
                      </div>
                    </label>
                  </div>
                </div>
                &#123;/* Advanced Parameter Constraints Accordion */&#125;
                <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between cursor-pointer">
                    <div className="flex items-center gap-1.5 font-label-md text-label-md text-on-surface font-semibold">
                      <span className="material-symbols-outlined text-[18px]">tune</span>
                      <span>Pengaturan Lanjutan (Min/Max &amp; Default Value)</span>
                    </div>
                    <span className="material-symbols-outlined text-[16px] text-on-surface-variant">expand_more</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm pt-space-xs">
                    <div className="flex flex-col gap-1">
                      <span className="font-label-xs text-label-xs text-on-surface-variant">
                        Nilai Default (Opsional)
                      </span>
                      <input
                        className="px-space-sm py-1.5 rounded bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none"
                        placeholder="e.g. Redaksi Kult Barber"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-label-xs text-label-xs text-on-surface-variant">
                        Batas Karakter Maksimal
                      </span>
                      <input
                        className="px-space-sm py-1.5 rounded bg-surface-container-lowest text-on-surface font-body-sm text-body-sm focus:outline-none"
                        placeholder="80"
                        type="number"
                      />
                    </div>
                  </div>
                </div>
              </div>
              &#123;/* Modal Footer */&#125;
              <div className="p-space-lg bg-surface-container-low flex items-center justify-end gap-space-sm">
                <button
                  className="px-space-md py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all"
                  id="btn-cancel-modal"
                >
                  Batal
                </button>
                <button
                  className="flex items-center gap-1.5 px-space-lg py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md shadow-md transition-all"
                  id="btn-save-field"
                >
                  <span className="material-symbols-outlined text-[18px]">check</span>
                  <span>Tambah Field ke Model</span>
                </button>
              </div>
            </div>
          </div>
          &#123;/* Inline Micro-interactions Script */&#125;
        </div>
      </main>
    </>
  );
}
