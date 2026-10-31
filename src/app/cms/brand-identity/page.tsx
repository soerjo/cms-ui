'use client';

import React, { useState } from 'react';
import { CmsHeader } from '@/components/cms/CmsHeader';

export default function BrandIdentityPage() {
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
        breadcrumbTitle="Studio / Identitas Brand"
        onRevalidate={handleRevalidate}
        isRevalidating={isRevalidating}
      />
      <main className="w-full pt-16 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <div className="p-margin-sm lg:p-margin flex flex-col gap-space-lg max-w-7xl mx-auto w-full">
            &#123;/* Header Section */&#125;
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-space-xs">
                  <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs font-semibold tracking-wider uppercase">
                    Schema: Singleton Type
                  </span>
                  <span className="text-outline-variant font-label-xs text-label-xs">/</span>
                  <span className="text-on-surface-variant font-label-xs text-label-xs">v1.4 ISR Enabled</span>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                  Identitas Brand &amp; Singletons
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Kelola konten singleton statis tunggal untuk situs{' '}
                  <span className="text-on-surface font-medium">kult-barber</span> yang dikonsumsi langsung oleh Server
                  Component Next.js.
                </p>
              </div>
              <div className="flex items-center gap-space-sm flex-wrap">
                <button
                  className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all shadow-sm"
                  id="btn-preview-json"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">code</span>
                  <span>Preview JSON Response</span>
                </button>
                <button
                  className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-all shadow-sm"
                  id="btn-revalidate"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">sync</span>
                  <span>Simpan &amp; Revalidasi Frontend</span>
                </button>
              </div>
            </div>
            &#123;/* Shadcn Styled Tab Selector */&#125;
            <div className="p-1 rounded-xl bg-surface-container-high flex flex-wrap gap-1 items-center shadow-inner">
              <button
                className="tab-button px-4 py-2 rounded-lg bg-surface-container-lowest text-on-surface shadow-sm font-label-md text-label-md flex items-center gap-2 transition-all"
                data-tab="profil"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">storefront</span>
                <span>Profil Brand &amp; Logo</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              </button>
              <button
                className="tab-button px-4 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center gap-2 transition-all"
                data-tab="hero"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">ad_units</span>
                <span>Hero Banner &amp; Tagline</span>
              </button>
              <button
                className="tab-button px-4 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center gap-2 transition-all"
                data-tab="jam"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">schedule</span>
                <span>Jam Operasional</span>
              </button>
              <button
                className="tab-button px-4 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center gap-2 transition-all"
                data-tab="kontak"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">location_on</span>
                <span>Kontak &amp; Lokasi</span>
              </button>
              <button
                className="tab-button px-4 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md flex items-center gap-2 transition-all"
                data-tab="footer"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">dock_to_bottom</span>
                <span>Footer &amp; Social Links</span>
              </button>
            </div>
            &#123;/* Notification Toast Simulation */&#125;
            <div
              className="hidden fixed bottom-6 right-6 z-50 p-4 rounded-xl bg-primary text-on-primary shadow-xl flex items-center gap-3"
              id="revalidate-toast"
            >
              <span className="material-symbols-outlined text-[20px] text-primary-fixed">check_circle</span>
              <div className="flex flex-col">
                <span className="font-title-sm text-title-sm text-on-primary">Edge Cache Revalidated</span>
                <span className="font-body-sm text-body-sm text-on-primary-container">
                  Next.js revalidateTag('site-identity') success in 142ms.
                </span>
              </div>
              <button className="ml-4 text-on-primary-container hover:text-on-primary" type="button">
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
            &#123;/* Main Content Layout: Form Left (7 Cols), Live Simulator Right (5 Cols) */&#125;
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              &#123;/* Left Column: Form Sections */&#125;
              <form className="lg:col-span-7 flex flex-col gap-space-lg" id="singleton-form">
                &#123;/* Card 1: Informasi Utama Web Profile */&#125;
                <section className="rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden">
                  <div className="p-space-lg flex items-center justify-between bg-surface-container-lowest">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
                        <span className="material-symbols-outlined text-[18px]">badge</span>
                      </div>
                      <div className="flex flex-col">
                        <h2 className="font-title-md text-title-md text-on-surface">Informasi Utama Web Profile</h2>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Atribut identitas global yang muncul pada header nav dan SEO metadata
                        </span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs">
                      Immutable UID
                    </span>
                  </div>
                  <div className="p-space-lg pt-0 flex flex-col gap-space-md">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                      <div className="flex flex-col gap-1.5">
                        <label
                          className="font-label-sm text-label-sm text-on-surface font-medium flex items-center justify-between"
                          htmlFor="brand-name"
                        >
                          <span>Brand Name</span>
                          <span className="text-error font-normal text-label-xs">*required</span>
                        </label>
                        <input
                          className="h-9 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
                          id="brand-name"
                          placeholder="Masukkan nama brand..."
                          type="text"
                          value="KULT Barber"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-label-sm text-label-sm text-on-surface-variant font-medium flex items-center justify-between">
                          <span>Site Key System Identifier</span>
                          <span className="material-symbols-outlined text-[14px]">lock</span>
                        </label>
                        <div className="h-9 px-3 rounded-lg bg-surface-container flex items-center justify-between">
                          <span className="font-label-sm text-label-sm text-on-surface font-semibold tracking-wide">
                            kult-barber
                          </span>
                          <span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface-variant font-label-xs text-label-xs">
                            read-only
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="font-label-sm text-label-sm text-on-surface font-medium"
                        htmlFor="brand-tagline"
                      >
                        Tagline / Motto
                      </label>
                      <input
                        className="h-9 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
                        id="brand-tagline"
                        placeholder="Contoh: Modern Grooming Experience"
                        type="text"
                        value="The Modern Grooming Experience for Gentlemen"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <label
                          className="font-label-sm text-label-sm text-on-surface font-medium"
                          htmlFor="brand-excerpt"
                        >
                          Deskripsi Singkat / Excerpt
                        </label>
                        <span className="font-label-xs text-label-xs text-on-surface-variant">148 / 250 karakter</span>
                      </div>
                      <textarea
                        className="p-3 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary shadow-inner resize-none"
                        id="brand-excerpt"
                        rows={3}
                      >
                        Destinasi grooming pria kontemporer di Senopati Jakarta dengan standar barbering premium,
                        konsultasi gaya rambut personal, dan hospitality kelas satu.
                      </textarea>
                    </div>
                  </div>
                </section>
                &#123;/* Card 2: Media Aset Singleton */&#125;
                <section className="rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden">
                  <div className="p-space-lg flex items-center justify-between bg-surface-container-lowest">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
                        <span className="material-symbols-outlined text-[18px]">photo_library</span>
                      </div>
                      <div className="flex flex-col">
                        <h2 className="font-title-md text-title-md text-on-surface">Media Aset Singleton</h2>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Aset gambar brand yang di-host di CDN Edge dengan dynamic focal point
                        </span>
                      </div>
                    </div>
                    <button
                      className="px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-xs text-label-xs flex items-center gap-1 transition-all"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[14px]">upload_file</span>
                      <span>Open Media Hub</span>
                    </button>
                  </div>
                  <div className="p-space-lg pt-0 grid grid-cols-1 md:grid-cols-2 gap-space-md">
                    &#123;/* Primary Logo */&#125;
                    <div className="flex flex-col gap-2 p-3.5 rounded-xl bg-surface-container-low">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                          Primary Brand Logo (SVG/PNG)
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-xs text-label-xs">
                          Dark &amp; Light
                        </span>
                      </div>
                      <div className="relative h-36 rounded-lg bg-surface-container-highest flex items-center justify-center overflow-hidden group">
                        <img
                          className="object-cover w-full h-full mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                          data-alt="Minimalist luxury barber shop logo emblem in black and monochrome gold tone vector glyph modern sans serif typography isolated on neutral crisp studio grey background studio lighting high detail"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrHMJ8of9i5z2DnV5sGn4YOMR4Fnh4dWuzrZuoDBtiu4EUrxlzgSYoHgbYt8bP3iOa_zkdvEZCwu6BazLYKm9qCBVT3OF8T-K-Lwxw33jKT4mg-Q0y7LRgWrm0VHw8MH8QjVJiFRrOKxBU-tjS8jK4vkL8TTrTQlvYhPumfGAFMlJdYJqi13jnzOIpzv3aHT2Ikr4lcZneUle36KOdO1_wQVxDzXZ21bhg3VZxd8U"
                        />
                        <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 transition-opacity">
                          <button
                            className="px-2.5 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-xs text-label-xs shadow-md hover:bg-surface-bright flex items-center gap-1"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[14px]">crop</span>
                            <span>Set Focal Point</span>
                          </button>
                          <button
                            className="px-2.5 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-xs text-label-xs shadow-md hover:bg-surface-bright flex items-center gap-1"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[14px]">swap_horiz</span>
                            <span>Replace</span>
                          </button>
                        </div>
                        <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-label-xs text-label-xs shadow-xs">
                          Focal: Center (50%, 50%)
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs pt-1">
                        <span>kult-logo-vector-master.webp</span>
                        <span>84.2 KB • WebP</span>
                      </div>
                    </div>
                    &#123;/* Favicon & OG Card Fallback */&#125;
                    <div className="flex flex-col gap-2 p-3.5 rounded-xl bg-surface-container-low">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-on-surface font-semibold">
                          OpenGraph Card (1200×630)
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-xs text-label-xs">
                          Social Share
                        </span>
                      </div>
                      <div className="relative h-36 rounded-lg bg-surface-container-highest overflow-hidden group">
                        <div
                          className="bg-cover bg-center w-full h-full transition-transform duration-300 group-hover:scale-105"
                          data-alt="Interior view of a modern luxury gentlemen barbershop with dark leather chairs vintage mirrors warm architectural lighting clean timber accents stylish hair styling products arranged neatly on dark marble counter"
                          style={{
                            backgroundImage:
                              "url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuC3L7FFPoGAvvW20baobh0UvLSpoZ4NPHyN9g92YwSWDa66n-1N8-VljyXKV-1N8SrzowRWezLyJoljIU2WzyCCe-6RdBfRmgr5T1S-3AiHEhRWrzCQAnLkmdWb88T-pm0OCh24TT-pVL7bm96fzHv8jDQV_vBdiPQOsPKEulpdKzbc4Q-J0z825bB-6QGyEFxgY4QIicgva8ySymzVSuPL1IFOT0J7iPojuAhD08o\')",
                          }}
                        ></div>
                        <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 transition-opacity">
                          <button
                            className="px-2.5 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-xs text-label-xs shadow-md hover:bg-surface-bright flex items-center gap-1"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[14px]">edit</span>
                            <span>Preview Card</span>
                          </button>
                          <button
                            className="px-2.5 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-xs text-label-xs shadow-md hover:bg-surface-bright flex items-center gap-1"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[14px]">refresh</span>
                            <span>Regenerate OG</span>
                          </button>
                        </div>
                        <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-label-xs text-label-xs shadow-xs">
                          Auto 1200×630 Ratio
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs pt-1">
                        <span>og-banner-senopati.jpg</span>
                        <span>218.4 KB • Edge Cached</span>
                      </div>
                    </div>
                  </div>
                </section>
                &#123;/* Card 3: Kontak & Operasional */&#125;
                <section className="rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden">
                  <div className="p-space-lg flex items-center justify-between bg-surface-container-lowest">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
                        <span className="material-symbols-outlined text-[18px]">contact_phone</span>
                      </div>
                      <div className="flex flex-col">
                        <h2 className="font-title-md text-title-md text-on-surface">Kontak &amp; Operasional</h2>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Direferensikan langsung di Contact CTA, WhatsApp booking, dan Local Business Schema
                        </span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs">
                      SEO Microdata
                    </span>
                  </div>
                  <div className="p-space-lg pt-0 flex flex-col gap-space-md">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                      <div className="flex flex-col gap-1.5">
                        <label
                          className="font-label-sm text-label-sm text-on-surface font-medium flex items-center gap-1.5"
                          htmlFor="contact-email"
                        >
                          <span className="material-symbols-outlined text-[16px] text-on-surface-variant">mail</span>
                          <span>Email Official</span>
                        </label>
                        <input
                          className="h-9 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
                          id="contact-email"
                          type="email"
                          value="info@kult.id"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label
                          className="font-label-sm text-label-sm text-on-surface font-medium flex items-center gap-1.5"
                          htmlFor="contact-phone"
                        >
                          <span className="material-symbols-outlined text-[16px] text-on-surface-variant">call</span>
                          <span>Telepon / WhatsApp Hotline</span>
                        </label>
                        <input
                          className="h-9 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
                          id="contact-phone"
                          type="text"
                          value="+62 812-9988-7711"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        className="font-label-sm text-label-sm text-on-surface font-medium flex items-center gap-1.5"
                        htmlFor="contact-address"
                      >
                        <span className="material-symbols-outlined text-[16px] text-on-surface-variant">pin_drop</span>
                        <span>Alamat Lengkap Flagship Store</span>
                      </label>
                      <input
                        className="h-9 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
                        id="contact-address"
                        type="text"
                        value="Jl. Senopati No. 42, Kebayoran Baru, Jakarta Selatan"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                      <div className="flex flex-col gap-1.5">
                        <label
                          className="font-label-sm text-label-sm text-on-surface font-medium flex items-center gap-1.5"
                          htmlFor="contact-hours"
                        >
                          <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
                            schedule
                          </span>
                          <span>Jam Buka Display</span>
                        </label>
                        <input
                          className="h-9 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
                          id="contact-hours"
                          type="text"
                          value="Senin - Minggu: 10:00 - 21:00 WIB"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label
                          className="font-label-sm text-label-sm text-on-surface font-medium flex items-center gap-1.5"
                          htmlFor="contact-instagram"
                        >
                          <span className="material-symbols-outlined text-[16px] text-on-surface-variant">
                            alternate_email
                          </span>
                          <span>Instagram Handle</span>
                        </label>
                        <input
                          className="h-9 px-3 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary shadow-inner"
                          id="contact-instagram"
                          type="text"
                          value="@kult.barbershop"
                        />
                      </div>
                    </div>
                  </div>
                </section>
                &#123;/* Bottom Form Action Footer */&#125;
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-2 text-on-surface-variant">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="font-label-xs text-label-xs">Autosaved to draft buffer (12s ago)</span>
                  </div>
                  <div className="flex items-center gap-space-sm">
                    <button
                      className="px-space-md py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-all"
                      type="button"
                    >
                      Batal
                    </button>
                    <button
                      className="px-space-md py-1.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-sm text-label-sm shadow-sm transition-all"
                      type="button"
                    >
                      Simpan Perubahan
                    </button>
                  </div>
                </div>
              </form>
              &#123;/* Right Column: Live Next.js Server Component Simulation & JSON Inspector */&#125;
              <aside className="lg:col-span-5 flex flex-col gap-space-md sticky top-20">
                &#123;/* Top Status Card */&#125;
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-xs text-label-xs font-bold">
                      ⚡
                    </div>
                    <div className="flex flex-col">
                      <span className="font-title-sm text-title-sm text-on-surface">ISR Pipeline Simulator</span>
                      <span className="font-label-xs text-label-xs text-on-surface-variant">
                        Live revalidation endpoint preview
                      </span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-xs text-label-xs font-semibold">
                    200 OK
                  </span>
                </div>
                &#123;/* Next.js Server Component Code Block */&#125;
                <div className="rounded-xl bg-primary text-on-primary shadow-sm overflow-hidden flex flex-col">
                  <div className="px-space-md py-2.5 bg-primary-container flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest/20"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest/20"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest/20"></span>
                      <span className="ml-2 font-label-xs text-label-xs text-on-primary-container">
                        app/layout.tsx (Server Component)
                      </span>
                    </div>
                    <span className="text-on-primary-container font-label-xs text-label-xs uppercase tracking-wider">
                      TSX
                    </span>
                  </div>
                  <div className="p-space-md font-mono text-body-sm text-body-sm leading-relaxed overflow-x-auto text-inverse-on-surface bg-primary">
                    <span className="text-on-primary-container">// Fetch singleton brand identity at build/ISR</span>
                    <br />
                    <span className="text-primary-fixed">export async function</span>{' '}
                    <span className="text-tertiary-fixed">getSiteIdentity</span>() &#123;
                    <br />
                      <span className="text-primary-fixed">const</span> res ={' '}
                    <span className="text-primary-fixed">await</span> <span className="text-tertiary-fixed">fetch</span>
                    (<br />
                        
                    <span className="text-surface-variant">
                      'https://core.publish.io/api/delivery/v1/content?contentType=site-identity&amp;siteKey=kult-barber'
                    </span>
                    ,<br />
                        &#123; <span className="text-on-primary-container">next</span>: &#123;{' '}
                    <span className="text-on-primary-container">revalidate</span>:{' '}
                    <span className="text-tertiary-fixed">300</span>,{' '}
                    <span className="text-on-primary-container">tags</span>: [
                    <span className="text-surface-variant">'site-identity'</span>] &#125; &#125;
                    <br />
                      );
                    <br />
                      <span className="text-primary-fixed">return</span> res.
                    <span className="text-tertiary-fixed">json</span>();
                    <br />
                    &#125;
                  </div>
                </div>
                &#123;/* Live JSON Delivery Preview */&#125;
                <div className="rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden flex flex-col">
                  <div className="p-space-md bg-surface-container-lowest flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-on-surface">data_object</span>
                      <span className="font-title-sm text-title-sm text-on-surface">Live JSON Payload</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                      <span className="font-label-xs text-label-xs text-on-surface-variant">Live Synced</span>
                    </div>
                  </div>
                  <div className="p-space-md pt-0">
                    <pre
                      className="p-3.5 rounded-lg bg-surface-container-low font-mono text-body-sm text-body-sm text-on-surface overflow-x-auto leading-relaxed shadow-inner max-h-[380px] overflow-y-auto"
                      id="json-preview-box"
                    >
                      &#123; "statusCode": 200, "contentType": "site-identity", "siteKey": "kult-barber", "environment":
                      "production", "timestamp": "2025-05-18T09:41:22.840Z", "data": &#123; "brandName": "KULT Barber",
                      "tagline": "The Modern Grooming Experience for Gentlemen", "excerpt": "Destinasi grooming pria
                      kontemporer di Senopati Jakarta...", "logo": &#123; "assetId": "ast_kult_0918", "url":
                      "https://cdn.publishcore.io/assets/kult-logo-vector-master.webp", "focalPoint": &#123; "x": 0.5,
                      "y": 0.5 &#125;, "width": 512, "height": 512 &#125;, "contact": &#123; "email": "info@kult.id",
                      "phone": "+62 812-9988-7711", "address": "Jl. Senopati No. 42, Kebayoran Baru, Jakarta Selatan",
                      "openingHours": "Senin - Minggu: 10:00 - 21:00 WIB", "social": &#123; "instagram":
                      "@kult.barbershop" &#125; &#125; &#125; &#125;
                    </pre>
                  </div>
                  <div className="p-space-sm px-space-md bg-surface-container-low flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs">
                    <span>Cache Status: HIT-EDGE-SIN1</span>
                    <span>Content-Length: 1.14 KB</span>
                  </div>
                </div>
                &#123;/* Quick Tip Metric Card */&#125;
                <div className="p-space-md rounded-xl bg-surface-container shadow-sm flex items-start gap-3">
                  <span className="material-symbols-outlined text-[20px] text-on-surface mt-0.5">tips_and_updates</span>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-title-sm text-title-sm text-on-surface">Tips Integrasi Singleton</span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Gunakan hook{' '}
                      <code className="px-1 py-0.5 rounded bg-surface-container-highest text-on-surface font-mono text-label-xs">
                        revalidateTag('site-identity')
                      </code>{' '}
                      saat memicu webhook untuk memastikan navigasi header dan footer tetap terbarukan tanpa full-site
                      rebuild.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
