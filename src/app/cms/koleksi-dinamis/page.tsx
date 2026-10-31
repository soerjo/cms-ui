'use client';

import React, { useState } from 'react';
import { CmsHeader } from '@/components/cms/CmsHeader';

export default function KoleksiDinamisPage() {
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
        breadcrumbTitle="Studio / Koleksi Dinamis"
        onRevalidate={handleRevalidate}
        isRevalidating={isRevalidating}
      />
      <main className="w-full pt-16 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <div className="px-margin lg:px-margin-lg py-space-xl flex flex-col gap-space-xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center gap-space-xs text-primary font-label-xs text-label-xs uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  <span>Schema Registry &amp; Content Models</span>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-on-surface">Koleksi Dinamis</h1>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                  Data list dinamis yang disajikan secara headless melalui endpoint{' '}
                  <code className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs font-mono">
                    GET /delivery/v1/content
                  </code>{' '}
                  dengan caching ISR level multi-edge.
                </p>
              </div>
              <div className="flex items-center flex-wrap gap-space-sm">
                <button
                  className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors shadow-sm"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">terminal</span>
                  <span>API Inspector</span>
                </button>
                <button
                  className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors shadow-sm"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  <span>Ekspor JSON/CSV</span>
                </button>
                <button
                  className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm hover:bg-primary-container transition-colors shadow-md"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">add</span>
                  <span>+ Buat Entri Baru</span>
                </button>
              </div>
            </div>
            &#123;/* Collection Switcher Tabs */&#125;
            <div className="flex items-center gap-space-xs overflow-x-auto pb-1">
              <button
                className="flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm shadow-sm transition-all whitespace-nowrap"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">article</span>
                <span>Artikel Blog &amp; Tips</span>
                <span className="px-1.5 py-0.2 rounded-full bg-surface-container-lowest/20 text-on-primary font-label-xs text-label-xs">
                  48
                </span>
              </button>
              <button
                className="flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-sm text-label-sm shadow-sm transition-all whitespace-nowrap"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">format_quote</span>
                <span>Testimoni Klien</span>
                <span className="px-1.5 py-0.2 rounded-full bg-surface-container text-on-surface-variant font-label-xs text-label-xs">
                  24
                </span>
              </button>
              <button
                className="flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-sm text-label-sm shadow-sm transition-all whitespace-nowrap"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">content_cut</span>
                <span>Layanan &amp; Pricing</span>
                <span className="px-1.5 py-0.2 rounded-full bg-surface-container text-on-surface-variant font-label-xs text-label-xs">
                  16
                </span>
              </button>
              <button
                className="flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-sm text-label-sm shadow-sm transition-all whitespace-nowrap"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">photo_camera</span>
                <span>Portofolio Grooming</span>
                <span className="px-1.5 py-0.2 rounded-full bg-surface-container text-on-surface-variant font-label-xs text-label-xs">
                  32
                </span>
              </button>
            </div>
            &#123;/* Filter Control Bar */&#125;
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-space-md">
              <div className="flex-1 flex items-center gap-space-sm">
                <div className="relative w-full max-w-md">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">
                    search
                  </span>
                  <input
                    className="w-full pl-9 pr-14 py-2 rounded-lg bg-surface text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    placeholder="Cari berdasarkan judul, slug, atau tag..."
                    type="text"
                  />
                  <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center">
                    <kbd className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-xs text-label-xs">
                      ⌘K
                    </kbd>
                  </div>
                </div>
                <div className="h-6 w-[1px] bg-surface-container hidden sm:block"></div>
                <div className="hidden sm:flex items-center gap-1.5">
                  <button
                    className="px-space-sm py-1.5 rounded-lg bg-surface-container text-on-surface font-label-xs text-label-xs"
                    type="button"
                  >
                    Semua (48)
                  </button>
                  <button
                    className="px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface font-label-xs text-label-xs"
                    type="button"
                  >
                    Published (38)
                  </button>
                  <button
                    className="px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface font-label-xs text-label-xs"
                    type="button"
                  >
                    Draft (6)
                  </button>
                  <button
                    className="px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface font-label-xs text-label-xs"
                    type="button"
                  >
                    Scheduled (4)
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-space-sm">
                <div className="flex items-center gap-1.5 px-space-sm py-1.5 rounded-lg bg-surface text-on-surface font-label-sm text-label-sm cursor-pointer shadow-sm">
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant">filter_list</span>
                  <span>Kategori: Haircut</span>
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant">arrow_drop_down</span>
                </div>
                <div className="flex items-center gap-1.5 px-space-sm py-1.5 rounded-lg bg-surface text-on-surface font-label-sm text-label-sm cursor-pointer shadow-sm">
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant">sort</span>
                  <span>Terbaru</span>
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant">arrow_drop_down</span>
                </div>
              </div>
            </div>
            &#123;/* Shadcn Data Table Container */&#125;
            <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-surface-container-low text-on-surface-variant font-label-xs text-label-xs uppercase tracking-wider">
                      <th className="py-3 px-space-md w-12 text-center" scope="col">
                        <input
                          className="w-4 h-4 rounded bg-surface-container-lowest accent-primary cursor-pointer"
                          type="checkbox"
                        />
                      </th>
                      <th className="py-3 px-space-md" scope="col">
                        Judul &amp; Slug
                      </th>
                      <th className="py-3 px-space-md" scope="col">
                        Kategori &amp; Tag
                      </th>
                      <th className="py-3 px-space-md" scope="col">
                        Reading Time
                      </th>
                      <th className="py-3 px-space-md" scope="col">
                        Tanggal Rilis
                      </th>
                      <th className="py-3 px-space-md" scope="col">
                        Status
                      </th>
                      <th className="py-3 px-space-md text-right" scope="col">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y-0 text-on-surface">
                    &#123;/* Row 1 */&#125;
                    <tr className="hover:bg-surface-container-low transition-colors group">
                      <td className="py-3.5 px-space-md text-center">
                        <input className="w-4 h-4 rounded bg-surface accent-primary cursor-pointer" type="checkbox" />
                      </td>
                      <td className="py-3.5 px-space-md">
                        <div className="flex items-center gap-space-sm">
                          <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-surface-container">
                            <img
                              className="w-full h-full object-cover"
                              data-alt="Close up photography of vintage barber chair and classic high pompadour hairstyle grooming kit with pomade on wooden surface in moody barbershop setting"
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHcT1vojC-2Xvs0j76Hh0nRPzgj39b9Fs3HvqLsp3_fhwfVH4lslKbZYCb23DJpr8VbxWXG4Ur7Zj5U7G894ucUW63HhRw5-xx4b9vLf9XYAAAvPxELdzSjQol4897yZR--XFYdSgQlgiEyt2gIyeEWTpuANXNWCOzQza2e-ZrAVZbuBNvhQfvsUlghrHAlSQQGffxf-mgVrxMYPeYtlx4J_2O0xCoQeqti4k6Ucc"
                            />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-title-sm text-title-sm text-on-surface group-hover:text-primary transition-colors truncate">
                              5 Tips Merawat Classic Pompadour agar Tahan Seharian
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant font-mono">
                              /artikel/tips-merawat-pompadour
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-space-md">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-xs text-label-xs font-medium">
                            Haircut
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-surface-container-low text-on-surface-variant font-label-xs text-label-xs">
                            Pomade
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-space-md font-body-sm text-body-sm text-on-surface-variant">
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">schedule</span>
                          <span>4 min</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-space-md">
                        <div className="flex flex-col">
                          <span className="font-body-sm text-body-sm text-on-surface">12 Okt 2024</span>
                          <span className="font-label-xs text-label-xs text-on-surface-variant">14:22 WIB</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-space-md">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-primary font-label-xs text-label-xs font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          Published
                        </span>
                      </td>
                      <td className="py-3.5 px-space-md text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            className="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
                            title="Lihat Live"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                          </button>
                          <button
                            className="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
                            title="Edit Konten"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">edit</span>
                          </button>
                          <button
                            className="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
                            title="Menu Opsi"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">more_horiz</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    &#123;/* Row 2 */&#125;
                    <tr className="hover:bg-surface-container-low transition-colors group">
                      <td className="py-3.5 px-space-md text-center">
                        <input className="w-4 h-4 rounded bg-surface accent-primary cursor-pointer" type="checkbox" />
                      </td>
                      <td className="py-3.5 px-space-md">
                        <div className="flex items-center gap-space-sm">
                          <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-surface-container">
                            <img
                              className="w-full h-full object-cover"
                              data-alt="Amber dropper bottle containing organic beard oil next to boar bristle beard comb and scissors on rustic slate texture"
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0CtfiXgq3rA5d6Ab2HQMcVc-G9pJzEPtba2ByT8QKKXD4rc92ZsCSdiEER_trJzy-FaAm-kJnQKBKtl-erc_XyAuN_4HuWpUOHRMfKVq9IQ6PyzNIUrBAV4O6wKH2d9TtEZWHKqU4b-uqi9qSHblAgyJ3rhZomSdczArzWuHdZ5IIzUkIKT9FOcRDIqTSIsTaWzufyQCm24iZBz_gxvWWV6tud-o3mqCSK41NDes"
                            />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-title-sm text-title-sm text-on-surface group-hover:text-primary transition-colors truncate">
                              Panduan Beard Oil Alami untuk Pertumbuhan Jenggot Lebat
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant font-mono">
                              /artikel/panduan-beard-oil
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-space-md">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-xs text-label-xs font-medium">
                            Grooming
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-surface-container-low text-on-surface-variant font-label-xs text-label-xs">
                            Beard Care
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-space-md font-body-sm text-body-sm text-on-surface-variant">
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">schedule</span>
                          <span>6 min</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-space-md">
                        <div className="flex flex-col">
                          <span className="font-body-sm text-body-sm text-on-surface">28 Sep 2024</span>
                          <span className="font-label-xs text-label-xs text-on-surface-variant">09:10 WIB</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-space-md">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-primary font-label-xs text-label-xs font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          Published
                        </span>
                      </td>
                      <td className="py-3.5 px-space-md text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            className="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
                            title="Lihat Live"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                          </button>
                          <button
                            className="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
                            title="Edit Konten"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">edit</span>
                          </button>
                          <button
                            className="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
                            title="Menu Opsi"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">more_horiz</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    &#123;/* Row 3 */&#125;
                    <tr className="hover:bg-surface-container-low transition-colors group">
                      <td className="py-3.5 px-space-md text-center">
                        <input className="w-4 h-4 rounded bg-surface accent-primary cursor-pointer" type="checkbox" />
                      </td>
                      <td className="py-3.5 px-space-md">
                        <div className="flex items-center gap-space-sm">
                          <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-surface-container">
                            <img
                              className="w-full h-full object-cover"
                              data-alt="Modern high fade French crop haircut on male model with urban street editorial lighting and sleek styling"
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6IcFRqXByuAeZbIsJC4hKwi10o9nfzrPxk0upgdxNvAnTUOoC1oL90aa1Hb3OPd4Bvp6Js2rkUxm3mErr67YX500DPpt7ef4ZKp5UP0DhsTGQmmATv-ccQZFq_Km3ADcZS5GRBrvbnQqyOBtSbNbsc1I2tG6zIHVe7qmgUxmWx6uaWMgm1eegKIkcd-mdMTE5dSXYOqCA4B7kkhE8XhaLzVvrIyBKKPdFPqLR-IM"
                            />
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-title-sm text-title-sm text-on-surface group-hover:text-primary transition-colors truncate">
                              Tren Potongan Rambut Pria Urban 2025: Dari French Crop ke Mullet Modern
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant font-mono">
                              /artikel/tren-rambut-pria-2025
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-space-md">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-xs text-label-xs font-medium">
                            Style
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-surface-container-low text-on-surface-variant font-label-xs text-label-xs">
                            Trend 2025
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-space-md font-body-sm text-body-sm text-on-surface-variant">
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">schedule</span>
                          <span>5 min</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-space-md">
                        <div className="flex flex-col">
                          <span className="font-body-sm text-body-sm text-on-surface">15 Nov 2024</span>
                          <span className="font-label-xs text-label-xs text-on-surface-variant">08:00 WIB</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-space-md">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-xs text-label-xs font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                          Scheduled 15 Nov
                        </span>
                      </td>
                      <td className="py-3.5 px-space-md text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            className="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
                            title="Lihat Live"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                          </button>
                          <button
                            className="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
                            title="Edit Konten"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">edit</span>
                          </button>
                          <button
                            className="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
                            title="Menu Opsi"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">more_horiz</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                    &#123;/* Row 4 */&#125;
                    <tr className="hover:bg-surface-container-low transition-colors group">
                      <td className="py-3.5 px-space-md text-center">
                        <input className="w-4 h-4 rounded bg-surface accent-primary cursor-pointer" type="checkbox" />
                      </td>
                      <td className="py-3.5 px-space-md">
                        <div className="flex items-center gap-space-sm">
                          <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-surface-container flex items-center justify-center text-on-surface-variant">
                            <span className="material-symbols-outlined text-[20px]">feed</span>
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="font-title-sm text-title-sm text-on-surface group-hover:text-primary transition-colors truncate">
                              Behind The Chair: Wawancara Master Barber KULT Senopati
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant font-mono">
                              /artikel/behind-the-chair-senopati
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-space-md">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-xs text-label-xs font-medium">
                            Community
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-surface-container-low text-on-surface-variant font-label-xs text-label-xs">
                            Stories
                          </span>
                        </div>
                      </td>
                      <td className="py-3.5 px-space-md font-body-sm text-body-sm text-on-surface-variant">
                        <div className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">schedule</span>
                          <span>7 min</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-space-md">
                        <div className="flex flex-col">
                          <span className="font-body-sm text-body-sm text-on-surface">Belum Ditentukan</span>
                          <span className="font-label-xs text-label-xs text-on-surface-variant">Tersimpan lokal</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-space-md">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-xs text-label-xs font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                          Draft
                        </span>
                      </td>
                      <td className="py-3.5 px-space-md text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            className="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
                            title="Lihat Live"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                          </button>
                          <button
                            className="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
                            title="Edit Konten"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">edit</span>
                          </button>
                          <button
                            className="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
                            title="Menu Opsi"
                            type="button"
                          >
                            <span className="material-symbols-outlined text-[18px]">more_horiz</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              &#123;/* Table Footer / Pagination */&#125;
              <div className="p-space-md bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-sm">
                <div className="flex items-center gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
                  <span>
                    Menampilkan <strong className="text-on-surface">1 - 4</strong> dari{' '}
                    <strong className="text-on-surface">48</strong> entri
                  </span>
                  <div className="h-4 w-[1px] bg-secondary-container"></div>
                  <span className="font-label-xs text-label-xs">Baris per halaman: 6</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    className="p-1.5 rounded-lg bg-surface-container-lowest text-on-surface-variant opacity-50 cursor-not-allowed"
                    disabled={true}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                  </button>
                  <button
                    className="w-8 h-8 rounded-lg bg-primary text-on-primary font-label-xs text-label-xs flex items-center justify-center"
                    type="button"
                  >
                    1
                  </button>
                  <button
                    className="w-8 h-8 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-xs text-label-xs flex items-center justify-center transition-colors"
                    type="button"
                  >
                    2
                  </button>
                  <button
                    className="w-8 h-8 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-xs text-label-xs flex items-center justify-center transition-colors"
                    type="button"
                  >
                    3
                  </button>
                  <span className="text-on-surface-variant text-body-sm px-1">...</span>
                  <button
                    className="w-8 h-8 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-xs text-label-xs flex items-center justify-center transition-colors"
                    type="button"
                  >
                    8
                  </button>
                  <button
                    className="p-1.5 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
            &#123;/* Bottom Delivery API Reference Card */&#125;
            <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                <div className="flex items-center gap-space-sm">
                  <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[18px]">hub</span>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="font-title-md text-title-md text-on-surface">Delivery API Endpoint Reference</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Live query string format for Next.js getStaticProps &amp; client fetching
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  <span className="font-label-xs text-label-xs text-on-surface font-mono">Edge Cache: HIT (3ms)</span>
                </div>
              </div>
              <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col lg:flex-row lg:items-center justify-between gap-space-md overflow-hidden">
                <div className="flex items-center gap-space-sm overflow-x-auto min-w-0">
                  <span className="px-2 py-0.5 rounded bg-primary text-on-primary font-label-xs text-label-xs font-mono font-semibold">
                    GET
                  </span>
                  <code className="font-mono text-body-sm text-on-surface select-all whitespace-nowrap">
                    /delivery/v1/content?siteKey=kult-barber&amp;contentType=article&amp;page=1&amp;limit=6
                  </code>
                </div>
                <button
                  className="inline-flex items-center gap-1.5 px-space-sm py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-xs text-label-xs hover:bg-surface-container transition-colors shrink-0 shadow-sm"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">content_copy</span>
                  <span>Salin URI</span>
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-md pt-space-xs">
                <div className="p-space-sm rounded-lg bg-surface-container flex flex-col">
                  <span className="font-label-xs text-label-xs text-on-surface-variant">CURRENT PAGE</span>
                  <span className="font-title-md text-title-md text-on-surface font-mono">page: 1</span>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container flex flex-col">
                  <span className="font-label-xs text-label-xs text-on-surface-variant">ITEMS PER PAGE</span>
                  <span className="font-title-md text-title-md text-on-surface font-mono">limit: 6</span>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container flex flex-col">
                  <span className="font-label-xs text-label-xs text-on-surface-variant">TOTAL RECORDS</span>
                  <span className="font-title-md text-title-md text-on-surface font-mono">totalItems: 48</span>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container flex flex-col">
                  <span className="font-label-xs text-label-xs text-on-surface-variant">PAGINATION LIMIT</span>
                  <span className="font-title-md text-title-md text-on-surface font-mono">totalPages: 8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
