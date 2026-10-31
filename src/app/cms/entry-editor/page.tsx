'use client';

import React, { useState } from 'react';
import { CmsHeader } from '@/components/cms/CmsHeader';

export default function EntryEditorPage() {
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
        breadcrumbTitle="Studio / Entry Editor"
        onRevalidate={handleRevalidate}
        isRevalidating={isRevalidating}
      />
      <main className="w-full pt-16 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          &#123;/* Top Navigation & Context Bar */&#125;
          <div className="bg-surface-container-lowest shadow-sm px-space-lg py-space-md">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-space-md">
              &#123;/* Breadcrumb & Title Area */&#125;
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-space-xs text-on-surface-variant font-label-xs text-label-xs">
                  <span className="">Content Models</span>
                  <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                  <span className="">Form Input Entri Konten</span>
                  <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                  <span className="text-on-surface font-semibold">Artikel Blog (api::article)</span>
                </div>
                <div className="flex items-center gap-space-sm flex-wrap mt-0.5">
                  <h1 className="font-headline-sm text-headline-sm text-on-surface">
                    Editor Entri Konten &amp; Dynamic Form Input
                  </h1>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Type: Collection Entry (Dinamis)
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-xs text-label-xs font-mono">
                    UID: #art_92810
                  </span>
                </div>
              </div>
              &#123;/* Action & Auto-save Status */&#125;
              <div className="flex items-center gap-space-sm flex-wrap">
                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-label-xs text-label-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <span className="">Draft • Tersimpan otomatis 2d lalu</span>
                </div>
                <button
                  className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-sm text-label-sm"
                  type="button"
                >
                  Simpan Draft
                </button>
                <button
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-sm text-label-sm"
                  id="toggleLivePayloadBtn"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">terminal</span>
                  <span className="">Payload JSON</span>
                </button>
                <button
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container transition-colors font-label-sm text-label-sm shadow-sm"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">bolt</span>
                  <span className="">Publish &amp; Revalidate ISR</span>
                </button>
              </div>
            </div>
          </div>
          &#123;/* Main Canvas Container */&#125;
          <div className="max-w-7xl mx-auto w-full px-space-md md:px-space-lg py-space-lg flex flex-col gap-space-lg">
            &#123;/* Schema Architecture Adaptor: Collection vs Single Switcher */&#125;
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
              <div className="flex items-center gap-space-sm">
                <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
                  <span className="material-symbols-outlined text-[20px]">tune</span>
                </div>
                <div>
                  <div className="font-title-sm text-title-sm text-on-surface">Adaptor Form Engine Multimodel</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">
                    Skema rendering otomatis menyesuaikan entri tunggal (Singleton) atau multi-entri berseri.
                  </div>
                </div>
              </div>
              &#123;/* Segmented Mode Control */&#125;
              <div className="inline-flex p-1 rounded-xl bg-surface-container-low max-w-fit">
                <button
                  className="px-3.5 py-1.5 rounded-lg font-label-sm text-label-sm transition-all bg-surface-container-lowest shadow-sm text-on-surface flex items-center gap-1.5"
                  id="tabCollection"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">dynamic_feed</span>
                  <span className="">Collection Type (Artikel Blog)</span>
                  <span className="px-1.5 py-0.2 rounded bg-surface-container text-on-surface-variant font-label-xs text-label-xs font-mono">
                    N:Items
                  </span>
                </button>
                <button
                  className="px-3.5 py-1.5 rounded-lg font-label-sm text-label-sm transition-all text-on-surface-variant hover:text-on-surface flex items-center gap-1.5"
                  id="tabSingle"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">view_quilt</span>
                  <span className="">Single Type (Hero &amp; Brand)</span>
                  <span className="px-1.5 py-0.2 rounded bg-surface-container text-on-surface-variant font-label-xs text-label-xs font-mono">
                    1-Row
                  </span>
                </button>
              </div>
            </div>
            &#123;/* 2-Column Grid Workspace (7:5 desktop split) */&#125;
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              &#123;/* LEFT COLUMN: Primary Standard Inputs + Rich Text + JSONB Engine (7 Cols) */&#125;
              <div className="lg:col-span-7 flex flex-col gap-space-lg">
                &#123;/* Section A: Standard Core Fields */&#125;
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between pb-space-xs">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">title</span>
                      <span className="font-title-md text-title-md text-on-surface">Data Inti &amp; Slug Routing</span>
                    </div>
                    <span className="font-label-xs text-label-xs text-on-surface-variant">
                      Schema: <code className="font-mono">schema.articles.v1</code>
                    </span>
                  </div>
                  &#123;/* Title Input */&#125;
                  <div className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center">
                      <label className="font-label-sm text-label-sm text-on-surface font-medium" htmlFor="post-title">
                        Judul Konten <span className="text-error">*</span>
                      </label>
                      <span className="font-label-xs text-label-xs text-on-surface-variant">
                        54 / 70 karakter (SEO optimal)
                      </span>
                    </div>
                    <input
                      className="w-full h-10 px-3.5 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm outline-none focus:bg-surface-container-low transition-colors"
                      id="post-title"
                      placeholder="Ketik judul artikel di sini..."
                      type="text"
                      value="Panduan Lengkap Merawat Gaya Rambut Pompadour di Rumah"
                    />
                  </div>
                  &#123;/* UID Slug Auto-generation */&#125;
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <label className="font-label-sm text-label-sm text-on-surface font-medium" htmlFor="post-slug">
                        Canonical Slug UID
                      </label>
                      <div className="flex items-center gap-1 text-on-surface-variant font-label-xs text-label-xs cursor-pointer hover:text-on-surface">
                        <span className="material-symbols-outlined text-[14px]">lock_open</span>
                        <span className="">Auto-sync dari Title</span>
                      </div>
                    </div>
                    <div className="flex items-center rounded-lg bg-surface-container-low px-3 h-9 shadow-sm">
                      <span className="text-on-surface-variant font-mono font-body-sm text-body-sm mr-1">/blog/</span>
                      <input
                        className="w-full bg-transparent text-on-surface font-mono font-body-sm text-body-sm outline-none"
                        id="post-slug"
                        type="text"
                        value="panduan-lengkap-merawat-pompadour-di-rumah"
                      />
                      <button
                        className="p-1 text-on-surface-variant hover:text-on-surface"
                        title="Salin Full Path"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">content_copy</span>
                      </button>
                    </div>
                  </div>
                  &#123;/* Excerpt */&#125;
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm text-label-sm text-on-surface font-medium" htmlFor="post-excerpt">
                      Ringkasan Meta (Excerpt)
                    </label>
                    <textarea
                      className="w-full p-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-sm text-body-sm shadow-sm outline-none focus:bg-surface-container-low transition-colors"
                      id="post-excerpt"
                      placeholder="Deskripsi singkat untuk snippet Google dan OpenGraph..."
                      rows={2}
                    >
                      Tips praktis dan produk styling rekomendasi master barber kult-barber agar volume rambut pompadour
                      tetap kokoh seharian tanpa lepek.
                    </textarea>
                  </div>
                  &#123;/* Featured Cover Asset Picker */&#125;
                  <div className="flex flex-col gap-1.5 pt-1">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-on-surface font-medium">
                        Gambar Utama (Cover Asset)
                      </span>
                      <span className="font-label-xs text-label-xs text-on-surface-variant">
                        Focal Point: Center (50%, 42%)
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-space-sm p-space-sm rounded-xl bg-surface-container-low items-center">
                      <div className="sm:col-span-1 aspect-video sm:aspect-square rounded-lg overflow-hidden bg-surface-container shadow-sm relative group">
                        <img
                          className="w-full h-full object-cover"
                          data-alt="A clean, cinematic portrait of a classic pompadour fade haircut in a minimalist modern barbershop, with dramatic side lighting and crisp textured edges, shot on 35mm lens with neutral high contrast tones."
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6Ci5doGYXCfOfM8hw4WMXHPvgHODS2d1ZVgK6-QdtHhocBHpGHloDh3jb2eJp300TbXnULCXIJDmsghlmteofFftPIXrk4MciVoFSmVOp6Ra17LVmGJEPLddjiIgHhIjNwk_ezdZiyXOCavKBHv7sX0G1VWTrNsPYrm2Hxe6Je5ghgMS_Y7n2uaRjwBIXdcaZVGrFrKzdorxYyezOV5MueyRy_yAUjj9WpMFXKPs"
                        />
                        <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-on-primary">
                          <span className="material-symbols-outlined text-[20px]">crop</span>
                        </div>
                      </div>
                      <div className="sm:col-span-3 flex flex-col justify-between h-full gap-2">
                        <div>
                          <div className="font-title-sm text-title-sm text-on-surface">
                            pompadour-hero-master-v2.webp
                          </div>
                          <div className="font-label-xs text-label-xs text-on-surface-variant font-mono">
                            1920x1080 • 142 KB • WebP Optimized
                          </div>
                        </div>
                        <div className="flex items-center gap-space-sm flex-wrap">
                          <button
                            className="px-2.5 py-1 rounded-lg bg-surface-container-lowest text-on-surface font-label-xs text-label-xs hover:bg-surface-container transition-colors shadow-sm flex items-center gap-1"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[14px]">tune</span> Focal Center
                          </button>
                          <button
                            className="px-2.5 py-1 rounded-lg bg-surface-container-lowest text-on-surface font-label-xs text-label-xs hover:bg-surface-container transition-colors shadow-sm flex items-center gap-1"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[14px]">swap_horiz</span> Ganti Media
                          </button>
                          <button
                            className="px-2.5 py-1 rounded-lg text-error hover:bg-error-container/20 transition-colors font-label-xs text-label-xs"
                            type="button"
                          >
                            Hapus
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                &#123;/* Section B: Rich Text / Markdown Editor Preview */&#125;
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">format_align_left</span>
                      <span className="font-title-md text-title-md text-on-surface">
                        Konten Artikel (Block Markdown)
                      </span>
                    </div>
                    <div className="flex items-center gap-1 bg-surface-container-low p-0.5 rounded-lg text-on-surface-variant font-label-xs text-label-xs">
                      <button
                        className="px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface shadow-sm font-medium"
                        type="button"
                      >
                        Editor
                      </button>
                      <button className="px-2 py-0.5 rounded hover:text-on-surface" type="button">
                        Live Preview
                      </button>
                    </div>
                  </div>
                  &#123;/* Formatting Toolbar */&#125;
                  <div className="flex items-center gap-1 p-1 rounded-lg bg-surface-container-low flex-wrap">
                    <button
                      className="p-1.5 rounded hover:bg-surface-container text-on-surface"
                      title="Heading 2"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">format_h2</span>
                    </button>
                    <button
                      className="p-1.5 rounded hover:bg-surface-container text-on-surface"
                      title="Bold"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">format_bold</span>
                    </button>
                    <button
                      className="p-1.5 rounded hover:bg-surface-container text-on-surface"
                      title="Italic"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">format_italic</span>
                    </button>
                    <div className="w-[1px] h-4 bg-outline-variant/30 mx-1"></div>
                    <button
                      className="p-1.5 rounded hover:bg-surface-container text-on-surface"
                      title="Bullet List"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">format_list_bulleted</span>
                    </button>
                    <button
                      className="p-1.5 rounded hover:bg-surface-container text-on-surface"
                      title="Numbered List"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">format_list_numbered</span>
                    </button>
                    <button
                      className="p-1.5 rounded hover:bg-surface-container text-on-surface"
                      title="Quote"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">format_quote</span>
                    </button>
                    <div className="w-[1px] h-4 bg-outline-variant/30 mx-1"></div>
                    <button
                      className="p-1.5 rounded hover:bg-surface-container text-on-surface"
                      title="Insert Media"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">add_photo_alternate</span>
                    </button>
                    <button
                      className="p-1.5 rounded hover:bg-surface-container text-on-surface"
                      title="Code Snippet"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">code</span>
                    </button>
                    <button
                      className="p-1.5 rounded hover:bg-surface-container text-on-surface"
                      title="Hyperlink"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">link</span>
                    </button>
                  </div>
                  &#123;/* Content Textarea with Markdown Sample */&#125;
                  <textarea
                    className="w-full p-3.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md font-mono leading-relaxed outline-none shadow-sm focus:bg-surface-container-lowest transition-colors"
                    rows={6}
                  >
                    ## 1. Memulai dengan Rambut Lembap, Bukan Basah Kuyup Banyak orang salah kaprah dengan
                    mengaplikasikan *pomade heavy-hold* saat rambut masih meneteskan air. Kuncinya ada pada pre-styling
                    tonic... &gt; "Struktur pompadour bertumpu pada pengeringan akar dengan arah berlawanan." — Bambang,
                    Lead Barber Kult
                  </textarea>
                  <div className="flex justify-between items-center text-on-surface-variant font-label-xs text-label-xs">
                    <span className="">Estimasi Membaca: 4 Menit (842 kata)</span>
                    <span className="">Markdown AST Validated</span>
                  </div>
                </div>
                &#123;/* Section C: INOVASI & FOKUS UTAMA - SETUP & INPUT FIELD JSONB */&#125;
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-md flex flex-col gap-space-md">
                  &#123;/* Header JSONB Section (Shadcn UI Enterprise style) */&#125;
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-3 border-b border-surface-container-high/60">
                    <div className="flex items-start gap-space-sm">
                      <div className="w-8 h-8 rounded-lg bg-surface-container-high text-on-surface flex items-center justify-center shrink-0 mt-0.5">
                        <span className="material-symbols-outlined text-[18px]">data_object</span>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h2 className="font-title-md text-title-md text-on-surface">Field JSONB Fleksibel</h2>
                          <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs font-mono font-medium">
                            PostgreSQL JSONB
                          </span>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-low text-on-surface-variant font-label-xs text-label-xs font-mono">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            RFC 8259 Validated
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Atribut meta terstruktur, key-value arbitrer, &amp; data repeater dinamis.
                        </p>
                      </div>
                    </div>
                    &#123;/* Segmented Mode Control Tabs (Shadcn Zinc Enterprise tabs) */&#125;
                    <div
                      className="inline-flex p-1 rounded-lg bg-surface-container-low self-start sm:self-auto shadow-inner"
                      role="tablist"
                    >
                      <button
                        className="px-3 py-1 rounded-md bg-surface-container-lowest text-on-surface shadow-sm font-label-xs text-label-xs font-medium flex items-center gap-1.5 transition-all"
                        id="btnModeVisual"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[15px]">view_list</span>
                        <span className="">Visual Key-Value</span>
                      </button>
                      <button
                        className="px-3 py-1 rounded-md text-on-surface-variant hover:text-on-surface font-label-xs text-label-xs font-medium flex items-center gap-1.5 transition-all"
                        id="btnModeRepeater"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[15px]">schema</span>
                        <span className="">Nested Repeater</span>
                      </button>
                      <button
                        className="px-3 py-1 rounded-md text-on-surface-variant hover:text-on-surface font-label-xs text-label-xs font-medium flex items-center gap-1.5 transition-all"
                        id="btnModeRaw"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[15px]">code_blocks</span>
                        <span className="">Raw Monaco</span>
                      </button>
                    </div>
                  </div>
                  &#123;/* View 1: Visual Key-Value Interactive Builder (Shadcn Cards) */&#125;
                  <div className="flex flex-col gap-3" id="jsonbVisualView">
                    &#123;/* Field 1: Array of Tags (seo_keywords) */&#125;
                    <div className="p-3.5 rounded-lg bg-surface-container-low/70 flex flex-col gap-2.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-on-surface-variant text-[16px]">
                            drag_indicator
                          </span>
                          <span className="font-mono font-label-sm text-label-sm text-on-surface font-semibold">
                            seo_keywords
                          </span>
                          <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs font-mono">
                            Array&lt;string&gt;
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
                            title="Collapse"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[16px]">unfold_less</span>
                          </button>
                          <button
                            className="p-1 rounded text-on-surface-variant hover:text-error hover:bg-error-container/20 transition-colors"
                            title="Hapus Properti"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[16px]">delete</span>
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 pl-6">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-container-lowest shadow-sm text-on-surface font-label-sm text-label-sm">
                          <span className="">fade haircut</span>
                          <button
                            className="text-on-surface-variant hover:text-error transition-colors flex items-center"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[13px]">close</span>
                          </button>
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-container-lowest shadow-sm text-on-surface font-label-sm text-label-sm">
                          <span className="">barbershop jakarta</span>
                          <button
                            className="text-on-surface-variant hover:text-error transition-colors flex items-center"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[13px]">close</span>
                          </button>
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-container-lowest shadow-sm text-on-surface font-label-sm text-label-sm">
                          <span className="">pomade rekomendasi</span>
                          <button
                            className="text-on-surface-variant hover:text-error transition-colors flex items-center"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[13px]">close</span>
                          </button>
                        </span>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-container-lowest text-on-surface shadow-sm focus-within:bg-surface-container-low transition-colors">
                          <input
                            className="bg-transparent text-on-surface font-body-sm text-body-sm outline-none w-32 placeholder:text-on-surface-variant/70"
                            placeholder="Tambah item..."
                            type="text"
                          />
                          <button
                            className="text-on-surface-variant hover:text-on-surface flex items-center"
                            title="Tambah Tag"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[14px]">add</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    &#123;/* Field 2: Nested Object Config (social_share) */&#125;
                    <div className="p-3.5 rounded-lg bg-surface-container-low/70 flex flex-col gap-2.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-on-surface-variant text-[16px]">
                            drag_indicator
                          </span>
                          <span className="font-mono font-label-sm text-label-sm text-on-surface font-semibold">
                            social_share
                          </span>
                          <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs font-mono">
                            Object (Map)
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
                            title="Collapse"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[16px]">unfold_less</span>
                          </button>
                          <button
                            className="p-1 rounded text-on-surface-variant hover:text-error hover:bg-error-container/20 transition-colors"
                            title="Hapus Properti"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[16px]">delete</span>
                          </button>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-6">
                        <div className="flex flex-col gap-1 p-2.5 rounded-lg bg-surface-container-lowest shadow-sm">
                          <label className="font-mono font-label-xs text-label-xs text-on-surface-variant font-medium">
                            og_theme
                          </label>
                          <select className="h-8 px-2 rounded-md bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none transition-colors cursor-pointer">
                            <option>dark</option>
                            <option>light</option>
                            <option>minimalist</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1 p-2.5 rounded-lg bg-surface-container-lowest shadow-sm justify-between">
                          <label className="font-mono font-label-xs text-label-xs text-on-surface-variant font-medium">
                            show_author_badge
                          </label>
                          <div className="flex items-center h-8 gap-2">
                            <input
                              defaultChecked={true}
                              className="w-4 h-4 rounded bg-surface-container text-primary cursor-pointer"
                              id="checkAuthor"
                              type="checkbox"
                            />
                            <label
                              className="font-body-sm text-body-sm text-on-surface cursor-pointer select-none"
                              htmlFor="checkAuthor"
                            >
                              True (Tampilkan badge)
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    &#123;/* Field 3: Affiliate CTA Nested Structure (affiliate_cta) */&#125;
                    <div className="p-3.5 rounded-lg bg-surface-container-low/70 flex flex-col gap-2.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-on-surface-variant text-[16px]">
                            drag_indicator
                          </span>
                          <span className="font-mono font-label-sm text-label-sm text-on-surface font-semibold">
                            affiliate_cta
                          </span>
                          <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs font-mono">
                            Object (CTA Action)
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
                            title="Collapse"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[16px]">unfold_less</span>
                          </button>
                          <button
                            className="p-1 rounded text-on-surface-variant hover:text-error hover:bg-error-container/20 transition-colors"
                            title="Hapus Properti"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[16px]">delete</span>
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2.5 pl-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="flex flex-col gap-1 p-2.5 rounded-lg bg-surface-container-lowest shadow-sm">
                            <label className="font-mono font-label-xs text-label-xs text-on-surface-variant font-medium">
                              label (string)
                            </label>
                            <input
                              className="h-8 px-2.5 rounded-md bg-surface-container-low text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container-lowest transition-colors"
                              type="text"
                              value="Beli Pomade di Tokopedia"
                            />
                          </div>
                          <div className="flex flex-col gap-1 p-2.5 rounded-lg bg-surface-container-lowest shadow-sm">
                            <label className="font-mono font-label-xs text-label-xs text-on-surface-variant font-medium">
                              discount_code (string)
                            </label>
                            <input
                              className="h-8 px-2.5 rounded-md bg-surface-container-low font-mono text-on-surface font-body-sm text-body-sm outline-none uppercase focus:bg-surface-container-lowest transition-colors"
                              type="text"
                              value="KULT20"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 p-2.5 rounded-lg bg-surface-container-lowest shadow-sm">
                          <label className="font-mono font-label-xs text-label-xs text-on-surface-variant font-medium">
                            url (href)
                          </label>
                          <input
                            className="h-8 px-2.5 rounded-md bg-surface-container-low font-mono text-on-surface font-body-sm text-body-sm outline-none focus:bg-surface-container-lowest transition-colors"
                            type="text"
                            value="https://tokopedia.com/kult-barbershop/matte-clay-heavy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  &#123;/* View 2: Raw Monaco / Code Editor View (Toggled) */&#125;
                  <div className="hidden flex-col gap-2" id="jsonbRawView">
                    <div className="bg-primary-container p-3.5 rounded-lg text-inverse-on-surface font-mono text-body-sm leading-relaxed overflow-x-auto shadow-inner">
                      <pre className="font-mono text-[12px]">
                        &#123;
                        <span className="text-tertiary-fixed">"seo_keywords"</span>: [
                        <span className="text-primary-fixed">"fade haircut"</span>,
                        <span className="text-primary-fixed">"barbershop jakarta"</span>,
                        <span className="text-primary-fixed">"pomade rekomendasi"</span>
                        ],
                        <span className="text-tertiary-fixed">"social_share"</span>: &#123;
                        <span className="text-tertiary-fixed">"og_theme"</span>:{' '}
                        <span className="text-primary-fixed">"dark"</span>,
                        <span className="text-tertiary-fixed">"show_author_badge"</span>:{' '}
                        <span className="text-primary-fixed-dim">true</span>
                        &#125;,
                        <span className="text-tertiary-fixed">"affiliate_cta"</span>: &#123;
                        <span className="text-tertiary-fixed">"label"</span>:{' '}
                        <span className="text-primary-fixed">"Beli Pomade di Tokopedia"</span>,
                        <span className="text-tertiary-fixed">"url"</span>:{' '}
                        <span className="text-primary-fixed">
                          "https://tokopedia.com/kult-barbershop/matte-clay-heavy"
                        </span>
                        ,<span className="text-tertiary-fixed">"discount_code"</span>:{' '}
                        <span className="text-primary-fixed">"KULT20"</span>
                        &#125; &#125;
                      </pre>
                    </div>
                  </div>
                  &#123;/* Toolbar / Footer JSONB Action Bar (Shadcn Button variant=outline & clean schema badges)
                  */&#125;
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-sm pt-3 border-t border-surface-container-high/60">
                    <div className="flex items-center gap-space-xs flex-wrap">
                      <button
                        className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-xs text-label-xs font-medium flex items-center gap-1.5 shadow-sm"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">add_circle</span>
                        <span className="">+ Tambah Properti Baru</span>
                      </button>
                      <div className="flex items-center gap-1 text-on-surface-variant font-label-xs text-label-xs">
                        <span className="font-medium">Tipe:</span>
                        <button
                          className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors"
                          type="button"
                        >
                          String
                        </button>
                        <button
                          className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors"
                          type="button"
                        >
                          Number
                        </button>
                        <button
                          className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors"
                          type="button"
                        >
                          Boolean
                        </button>
                        <button
                          className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors"
                          type="button"
                        >
                          Array
                        </button>
                        <button
                          className="px-2 py-0.5 rounded bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors"
                          type="button"
                        >
                          Object
                        </button>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-surface-container-low text-on-surface-variant font-label-xs text-label-xs font-mono self-start sm:self-auto">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      <span className="">Ukuran: 1.2 KB</span>
                      <span className="text-on-surface-variant/40">•</span>
                      <span className="text-on-surface font-medium">Valid Schema JSON</span>
                    </div>
                  </div>
                </div>
              </div>
              &#123;/* RIGHT COLUMN: Publishing Status, Taxonomy, Headless Preview & SDK (5 Cols) */&#125;
              <div className="lg:col-span-5 flex flex-col gap-space-lg">
                &#123;/* Card 1: Publish Lifecycle & Schedule */&#125;
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <span className="font-title-md text-title-md text-on-surface">Lifecycle &amp; Workflow</span>
                    <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-xs text-label-xs font-semibold">
                      Status: Draft
                    </span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">calendar_today</span>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm text-on-surface font-medium">
                            Tanggal Publikasi
                          </span>
                          <span className="font-label-xs text-label-xs text-on-surface-variant">
                            Segera saat klik Publish
                          </span>
                        </div>
                      </div>
                      <button className="text-on-surface hover:text-primary font-label-xs text-label-xs" type="button">
                        Jadwalkan
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[18px]">cached</span>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm text-on-surface font-medium">
                            Next.js On-Demand ISR
                          </span>
                          <span className="font-label-xs text-label-xs text-on-surface-variant">
                            Tag: <code className="font-mono">collection:article</code>
                          </span>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs font-mono">
                        Sync Aktif
                      </span>
                    </div>
                  </div>
                </div>
                &#123;/* Card 2: Taxonomy Relations & Singleton Linking */&#125;
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <span className="font-title-md text-title-md text-on-surface">Relasi &amp; Taksonomi</span>
                    <span className="font-label-xs text-label-xs text-on-surface-variant font-mono">Graph Relasi</span>
                  </div>
                  <div className="flex flex-col gap-space-sm">
                    &#123;/* Many-to-One: Category */&#125;
                    <div className="flex flex-col gap-1">
                      <label className="font-label-xs text-label-xs text-on-surface-variant font-semibold">
                        Kategori Konten (M:1)
                      </label>
                      <select className="h-9 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm shadow-sm outline-none">
                        <option>Haircut &amp; Styling Guide</option>
                        <option>Beard Grooming</option>
                        <option>Event &amp; Lifestyle</option>
                        <option>Product Review</option>
                      </select>
                    </div>
                    &#123;/* Author Relation */&#125;
                    <div className="flex flex-col gap-1">
                      <label className="font-label-xs text-label-xs text-on-surface-variant font-semibold">
                        Master Barber / Author (M:1)
                      </label>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-low">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-on-primary font-label-xs text-label-xs">
                            BH
                          </div>
                          <span className="font-body-sm text-body-sm text-on-surface">Bambang Hermanto (Lead)</span>
                        </div>
                        <button
                          className="text-on-surface-variant hover:text-on-surface font-label-xs text-label-xs"
                          type="button"
                        >
                          Ganti
                        </button>
                      </div>
                    </div>
                    &#123;/* Tags Multiselect (N:M) */&#125;
                    <div className="flex flex-col gap-1">
                      <label className="font-label-xs text-label-xs text-on-surface-variant font-semibold">
                        Tags Terkait (N:M)
                      </label>
                      <div className="flex flex-wrap gap-1 p-2 rounded-lg bg-surface-container-low min-h-[38px] items-center">
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-xs text-label-xs shadow-sm flex items-center gap-1">
                          #Pompadour
                          <span className="material-symbols-outlined text-[12px] cursor-pointer">close</span>
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-xs text-label-xs shadow-sm flex items-center gap-1">
                          #StylingTips
                          <span className="material-symbols-outlined text-[12px] cursor-pointer">close</span>
                        </span>
                        <span className="px-2 py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-xs text-label-xs shadow-sm flex items-center gap-1">
                          #Grooming
                          <span className="material-symbols-outlined text-[12px] cursor-pointer">close</span>
                        </span>
                        <button
                          className="text-on-surface-variant hover:text-on-surface font-label-xs text-label-xs px-1"
                          type="button"
                        >
                          + Tag
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                &#123;/* Card 3: Live Headless Delivery API Payload */&#125;
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">api</span>
                      <span className="font-title-md text-title-md text-on-surface">Live Delivery Endpoint</span>
                    </div>
                    <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs font-mono">
                      CDN Edge Cached
                    </span>
                  </div>
                  <div className="p-2 rounded bg-surface-container-low flex items-center justify-between text-on-surface font-mono text-[11px] overflow-hidden">
                    <span className="truncate">
                      GET /delivery/v1/content/tips-merawat-pompadour?siteKey=kult-barber
                    </span>
                    <button
                      className="ml-2 text-on-surface-variant hover:text-on-surface shrink-0"
                      title="Copy endpoint"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[14px]">content_copy</span>
                    </button>
                  </div>
                  &#123;/* Payload Preview Box */&#125;
                  <div className="p-3 rounded-lg bg-surface-container text-on-surface font-mono text-[11px] leading-tight overflow-x-auto max-h-48 shadow-inner">
                    <pre>
                      &#123; "status": 200, "siteKey": "kult-barber", "data": &#123; "id": "art_92810", "type":
                      "api::article", "slug": "panduan-lengkap-merawat-pompadour-di-rumah", "title": "Panduan Lengkap
                      Merawat Gaya Rambut Pompadour di Rumah", "readingTimeMin": 4, "metadata": &#123; "seo_keywords":
                      ["fade haircut", "barbershop jakarta", "..."], "social_share": &#123; "og_theme": "dark",
                      "show_author_badge": true &#125;, "affiliate_cta": &#123; "discount_code": "KULT20", "label":
                      "Beli Pomade" &#125; &#125; &#125; &#125;
                    </pre>
                  </div>
                </div>
                &#123;/* Card 4: Next.js Frontend Consumption Snippet */&#125;
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px]">
                        integration_instructions
                      </span>
                      <span className="font-title-md text-title-md text-on-surface">Next.js Client Typecast</span>
                    </div>
                    <span className="font-label-xs text-label-xs text-on-surface-variant font-mono">TypeScript</span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Cara mengonsumsi field JSONB ber-type aman di komponen Server Next.js:
                  </p>
                  <div className="bg-surface-container-low p-3 rounded-lg text-on-surface font-mono text-[11px] leading-relaxed overflow-x-auto">
                    <pre>
                      // app/blog/[slug]/page.tsx interface ArticleJSONBMeta &#123; seo_keywords: string[];
                      affiliate_cta?: &#123; label: string; url: string; discount_code?: string &#125;; &#125; const
                      &#123; data &#125; = await getDeliveryContent('tips-merawat-pompadour'); const metadata =
                      data.metadata as ArticleJSONBMeta; console.log(metadata.affiliate_cta?.discount_code); // "KULT20"
                    </pre>
                  </div>
                </div>
              </div>
            </div>
            &#123;/* Bottom Action Ribbon */&#125;
            <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-space-md">
              <div className="flex items-center gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
                <span className="material-symbols-outlined text-primary text-[18px]">verified_user</span>
                <span className="">Validasi Skema: 100% Sesuai spesifikasi API Contract v1.</span>
              </div>
              <div className="flex items-center gap-space-sm w-full sm:w-auto justify-end">
                <button
                  className="px-4 py-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md"
                  type="button"
                >
                  Batalkan Perubahan
                </button>
                <button
                  className="px-5 py-2 rounded-lg bg-primary text-on-primary hover:bg-primary-container transition-colors font-label-md text-label-md flex items-center gap-2 shadow-sm"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">publish</span>
                  <span className="">Publish &amp; Revalidate ISR</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
