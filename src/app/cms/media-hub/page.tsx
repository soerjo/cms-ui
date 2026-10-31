'use client';

import React, { useState } from 'react';
import { CmsHeader } from '@/components/cms/CmsHeader';

export default function MediaHubPage() {
  const [isRevalidating, setIsRevalidating] = useState(false);

  const handleRevalidate = () => {
    setIsRevalidating(true);
    setTimeout(() => {
      setIsRevalidating(false);
    }, 1500);
  };

  return (
    <>
      <CmsHeader breadcrumbTitle="Studio / Media Hub" onRevalidate={handleRevalidate} isRevalidating={isRevalidating} />
      <main className="w-full pt-16 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <div className="p-space-lg lg:p-space-xl flex flex-col gap-space-lg">
            &#123;/* Header Section */&#125;
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md">
              <div className="flex flex-col gap-1 max-w-3xl">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-xs text-label-xs uppercase tracking-wider font-semibold">
                    CDN &amp; Storage Hub
                  </span>
                  <span className="inline-flex items-center gap-1 font-label-xs text-label-xs text-on-surface-variant">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Edge Node: ap-southeast-3
                  </span>
                </div>
                <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                  Media &amp; Asset Hub
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Penyimpanan aset terpusat dengan optimasi WebP otomatis, CDN delivery, dan pengaturan focal-point
                  untuk auto-cropping di frontend Rena Next.js.
                </p>
              </div>
              <div className="flex items-center gap-space-sm flex-shrink-0">
                <button
                  className="flex items-center gap-2 px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-sm hover:opacity-90 transition-all"
                  id="open-upload-btn"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">cloud_upload</span>
                  <span>+ Upload Media Baru</span>
                </button>
              </div>
            </div>
            &#123;/* Metric Strip (4 Cards) */&#125;
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
              &#123;/* Card 1 */&#125;
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between gap-3">
                <div className="flex items-center justify-between text-on-surface-variant">
                  <span className="font-label-sm text-label-sm font-medium">Total Aset Aktif</span>
                  <span className="material-symbols-outlined text-[20px]">perm_media</span>
                </div>
                <div>
                  <div className="font-headline-md text-headline-md text-on-surface">
                    428 <span className="font-title-sm text-title-sm text-on-surface-variant font-normal">file</span>
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant mt-1 flex items-center justify-between">
                    <span>Storage: 2.4 GB / 50 GB</span>
                    <span className="font-label-xs text-label-xs text-on-surface font-semibold">4.8%</span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden mt-2">
                    <div className="h-full bg-primary rounded-full" style={{ width: '4.8%' }}></div>
                  </div>
                </div>
              </div>
              &#123;/* Card 2 */&#125;
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between gap-3">
                <div className="flex items-center justify-between text-on-surface-variant">
                  <span className="font-label-sm text-label-sm font-medium">Bandwidth Egress Terselamatkan</span>
                  <span className="material-symbols-outlined text-[20px]">compress</span>
                </div>
                <div>
                  <div className="font-headline-md text-headline-md text-on-surface">71.4%</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant mt-1 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[15px]">trending_up</span>
                    <span>Auto WebP &amp; AVIF conversion</span>
                  </div>
                  <div className="mt-2 text-label-xs font-label-xs text-on-surface-variant">
                    Menghemat ~14.2 TB egress transfer/bln
                  </div>
                </div>
              </div>
              &#123;/* Card 3 */&#125;
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between gap-3">
                <div className="flex items-center justify-between text-on-surface-variant">
                  <span className="font-label-sm text-label-sm font-medium">CDN Edge Hit Ratio</span>
                  <span className="material-symbols-outlined text-[20px]">bolt</span>
                </div>
                <div>
                  <div className="font-headline-md text-headline-md text-on-surface">97.8%</div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant mt-1 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span>Fast delivery to Rena frontend</span>
                  </div>
                  <div className="mt-2 text-label-xs font-label-xs text-on-surface-variant">
                    Latensi rata-rata edge: 18ms
                  </div>
                </div>
              </div>
              &#123;/* Card 4 */&#125;
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between gap-3">
                <div className="flex items-center justify-between text-on-surface-variant">
                  <span className="font-label-sm text-label-sm font-medium">Missing Alt / Focal-Point</span>
                  <span className="material-symbols-outlined text-[20px]">verified</span>
                </div>
                <div>
                  <div className="font-headline-md text-headline-md text-on-surface">
                    0 <span className="font-title-sm text-title-sm text-on-surface-variant font-normal">Aset</span>
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant mt-1 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[15px]">check_circle</span>
                    <span>100% SEO Ready</span>
                  </div>
                  <div className="mt-2 text-label-xs font-label-xs text-on-surface-variant">
                    Semua media memenuhi standar WCAG 2.1
                  </div>
                </div>
              </div>
            </div>
            &#123;/* Action & Filter Bar */&#125;
            <div className="bg-surface-container-lowest p-space-sm sm:p-space-md rounded-xl shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-space-sm">
              <div className="flex flex-wrap items-center gap-space-xs sm:gap-space-sm flex-1">
                <div className="relative flex-1 sm:max-w-xs min-w-[200px]">
                  <span className="material-symbols-outlined absolute left-2.5 top-2.5 text-[18px] text-on-surface-variant">
                    search
                  </span>
                  <input
                    className="w-full h-9 pl-9 pr-3 text-body-sm font-body-sm bg-surface-container-low rounded-lg outline-none text-on-surface focus:bg-surface-container-lowest shadow-sm transition-all"
                    placeholder="Cari nama aset, slug, tag..."
                    type="text"
                  />
                </div>
                <div className="flex items-center gap-1 overflow-x-auto py-1">
                  <button
                    className="filter-btn active px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-xs text-label-xs font-medium whitespace-nowrap shadow-sm"
                    type="button"
                  >
                    Semua (428)
                  </button>
                  <button
                    className="filter-btn px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-xs text-label-xs font-medium whitespace-nowrap"
                    type="button"
                  >
                    Banner (16:9)
                  </button>
                  <button
                    className="filter-btn px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-xs text-label-xs font-medium whitespace-nowrap"
                    type="button"
                  >
                    Avatar (1:1)
                  </button>
                  <button
                    className="filter-btn px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-xs text-label-xs font-medium whitespace-nowrap"
                    type="button"
                  >
                    Logo SVG
                  </button>
                  <button
                    className="filter-btn px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-xs text-label-xs font-medium whitespace-nowrap"
                    type="button"
                  >
                    Gallery (4:3)
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-space-sm pt-2 lg:pt-0">
                <div className="flex items-center gap-1.5 text-on-surface-variant font-label-xs text-label-xs">
                  <input className="rounded cursor-pointer w-4 h-4 accent-primary" id="bulk-select" type="checkbox" />
                  <label className="cursor-pointer" htmlFor="bulk-select">
                    Pilih Semua
                  </label>
                </div>
                <div className="h-4 w-px bg-surface-container"></div>
                <div className="flex items-center gap-1">
                  <button
                    className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface font-label-xs text-label-xs"
                    title="Multi-select bulk actions"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]">folder_zip</span>
                    <span className="hidden sm:inline">Bulk Export</span>
                  </button>
                  <button
                    className="p-1.5 rounded-lg bg-surface-container-high text-on-surface"
                    title="Grid View"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">grid_view</span>
                  </button>
                  <button
                    className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container"
                    title="List View"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[18px]">view_list</span>
                  </button>
                </div>
              </div>
            </div>
            &#123;/* Split View Container: Main Grid + Inspector Side Panel */&#125;
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
              &#123;/* Left / Main: Media Gallery Grid (8 Cards) */&#125;
              <div className="xl:col-span-7 2xl:col-span-8 flex flex-col gap-space-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-space-md">
                  &#123;/* Card 1: ACTIVE SELECTED ASSET */&#125;
                  <div className="media-card active group relative bg-surface-container-lowest rounded-xl shadow-md p-space-sm flex flex-col justify-between gap-space-sm cursor-pointer transition-all">
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2 py-0.5 rounded-full bg-primary text-on-primary font-label-xs text-label-xs flex items-center gap-1 shadow-sm">
                        <span className="material-symbols-outlined text-[12px]">filter_center_focus</span>
                        <span>Active Target</span>
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 z-10">
                      <input
                        defaultChecked={true}
                        className="rounded cursor-pointer w-4 h-4 accent-primary"
                        type="checkbox"
                      />
                    </div>
                    <div className="w-full aspect-video rounded-lg overflow-hidden relative bg-surface-container-low">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        data-alt="A modern masculine barbershop interior in Senopati Jakarta, warm architectural spotlighting, sleek black leather grooming chairs, minimalist concrete texture, timber accent walls, elegant editorial photography."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxI_XT5oWEMtIK2qqRZ__ENnyQlpe4GoNaxrN8TJO91ncFNCF00RdoZW01R68nL5VMRHXWMUGD-u3K_ot5ha973UDRu0MbueDeQokFPiqY15MhtfU_CNARTM3DIZd8Hzp4uOWsj7JiDFT1R7XaPAE-MaJePeLUxQA-NxwO79iuBjvfDpXtcuVQEqCN1XU73ZCj8qHYxaXKWYv6LQPrH7FbbTn5q5r2OmU2B8qpHw8"
                      />
                      &#123;/* Crosshair preview badge */&#125;
                      <div className="absolute top-[38%] left-[52%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-surface-container-lowest/80 shadow flex items-center justify-center pointer-events-none">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-title-sm text-title-sm text-on-surface truncate font-semibold">
                          kult-hero-interior.webp
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs">
                        <span>1920 × 1080 px</span>
                        <span>240 KB</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-xs text-label-xs">
                          16:9 Banner
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-label-xs text-label-xs">
                          Focal Point Set
                        </span>
                      </div>
                    </div>
                  </div>
                  &#123;/* Card 2 */&#125;
                  <div className="media-card group relative bg-surface-container-lowest rounded-xl shadow-sm p-space-sm flex flex-col justify-between gap-space-sm cursor-pointer hover:shadow-md transition-all">
                    <div className="absolute top-3 right-3 z-10">
                      <input className="rounded cursor-pointer w-4 h-4 accent-primary" type="checkbox" />
                    </div>
                    <div className="w-full aspect-video rounded-lg overflow-hidden relative bg-surface-container-low">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        data-alt="Close up profile portrait of master barber working with high-end hair shears, focused expression, neat fade haircut, natural softbox lighting, monochromatic tones with dark slate backdrop."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwyZqF8nR-VgEQcdlDjZldFpVSyw8RQu4KKNhy-k0FEOyFgz282pEK2ZB2lVCNTJZw0L9V3hW_BMDfW8eDRqIASTrFXP_5ATRpQxZGM_J2U_b4ZZHw7aV2uah6BnKXSjI4P05DPjUrmu79JWhNMjGsvHeLxlLC0qHQSkoEuB7fTppwGMRcOzmu-7WzRFUsZU5AuG_AEiNymeAxb3rdFGXFACQ3cWele9YqGKdoHI8"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-title-sm text-title-sm text-on-surface truncate">
                          master-barber-reza.webp
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs">
                        <span>800 × 800 px</span>
                        <span>88 KB</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-xs text-label-xs">
                          1:1 Avatar
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-label-xs text-label-xs">
                          Focal Point Set
                        </span>
                      </div>
                    </div>
                  </div>
                  &#123;/* Card 3 */&#125;
                  <div className="media-card group relative bg-surface-container-lowest rounded-xl shadow-sm p-space-sm flex flex-col justify-between gap-space-sm cursor-pointer hover:shadow-md transition-all">
                    <div className="absolute top-3 right-3 z-10">
                      <input className="rounded cursor-pointer w-4 h-4 accent-primary" type="checkbox" />
                    </div>
                    <div className="w-full aspect-video rounded-lg overflow-hidden relative bg-surface-container-low flex items-center justify-center p-6">
                      &#123;/* Inline SVG Brand Logo */&#125;
                      <svg className="w-24 h-12 text-on-surface" fill="currentColor" viewBox="0 0 160 50">
                        <path d="M10 10 H22 V25 H38 V10 H50 V40 H38 V32 H22 V40 H10 Z M60 10 H72 V32 H88 V40 H60 Z M98 10 H110 V40 H98 Z M120 10 H148 V18 H139 V40 H129 V18 H120 Z"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-title-sm text-title-sm text-on-surface truncate">
                          kult-brandmark-dark.svg
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs">
                        <span>Vector SVG</span>
                        <span>8.4 KB</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-xs text-label-xs">
                          Logo SVG
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-xs text-label-xs">
                          Vector Scalable
                        </span>
                      </div>
                    </div>
                  </div>
                  &#123;/* Card 4 */&#125;
                  <div className="media-card group relative bg-surface-container-lowest rounded-xl shadow-sm p-space-sm flex flex-col justify-between gap-space-sm cursor-pointer hover:shadow-md transition-all">
                    <div className="absolute top-3 right-3 z-10">
                      <input className="rounded cursor-pointer w-4 h-4 accent-primary" type="checkbox" />
                    </div>
                    <div className="w-full aspect-video rounded-lg overflow-hidden relative bg-surface-container-low">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        data-alt="Still life flat lay of premium steel straight razors, grooming pomade jars with matte gold foil, brass bristle brush arranged neatly on dark slate stone tile."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKnIYifuc7uU4qRqXwJTiL56E513eqbd749FyxZFpe95pXH9Qy3giY_6P-eqsIRVqkydRB0RjfUICa6jApTk4ACJnKKIxoOwgMrXwHEf8EiEYdHrrKyUVaqzZlx1-iViYpSIN2aPvpkS96yx_pA9dZ85qaTTJtOhzYV9nE6yDhL2GBz5mvuJCA209dQNEI3blKqtc16Lwhmfu7YZilc3gwfpxskOCE96WiQ-Fi7bw"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-title-sm text-title-sm text-on-surface truncate">
                          equipment-tools-flatlay.webp
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs">
                        <span>1600 × 1200 px</span>
                        <span>176 KB</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-xs text-label-xs">
                          4:3 Gallery
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-label-xs text-label-xs">
                          Focal Point Set
                        </span>
                      </div>
                    </div>
                  </div>
                  &#123;/* Card 5 */&#125;
                  <div className="media-card group relative bg-surface-container-lowest rounded-xl shadow-sm p-space-sm flex flex-col justify-between gap-space-sm cursor-pointer hover:shadow-md transition-all">
                    <div className="absolute top-3 right-3 z-10">
                      <input className="rounded cursor-pointer w-4 h-4 accent-primary" type="checkbox" />
                    </div>
                    <div className="w-full aspect-video rounded-lg overflow-hidden relative bg-surface-container-low">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        data-alt="Architectural exterior entrance view of KULT Barber studio at dusk, warm glow through fluted glass doors, clean signage, pavement sidewalk with lush green tropical monstera planters."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjyzFeobc_OQ4Z1Peh-yDswTF_WqchFT7jtpPunQDeL1OsWNuc429dCaJFiYWBNf_FWrVCDFSY_taGMdbZSSZ_gC_Sj4Ed_GdWsaxX4jnNIXYW1LycoE16lr_YF79k-8wij5FpBaZI2qC2q9hG0Zc2RuqTqZX7hw_2PUw1G1hDp_nSeC8nOqODoxw59GVUjZ11_NNoBQplIozRDzrqHeXJR3e-pmeYt3PECGZW5Jg"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-title-sm text-title-sm text-on-surface truncate">
                          facade-senopati-dusk.webp
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs">
                        <span>2400 × 1350 px</span>
                        <span>312 KB</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-xs text-label-xs">
                          16:9 Banner
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-label-xs text-label-xs">
                          Focal Point Set
                        </span>
                      </div>
                    </div>
                  </div>
                  &#123;/* Card 6 */&#125;
                  <div className="media-card group relative bg-surface-container-lowest rounded-xl shadow-sm p-space-sm flex flex-col justify-between gap-space-sm cursor-pointer hover:shadow-md transition-all">
                    <div className="absolute top-3 right-3 z-10">
                      <input className="rounded cursor-pointer w-4 h-4 accent-primary" type="checkbox" />
                    </div>
                    <div className="w-full aspect-video rounded-lg overflow-hidden relative bg-surface-container-low">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        data-alt="Portrait of senior hair technician Dimas smiling politely in minimalist uniform, studio lighting against pure neutral grey backdrop, professional profile headshot."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT8ZSlWZTH707XbmuvDGvmHJZi5Hu7JRt1ykWOKHBEmfHv7BCF9FG11HMoweZCPp3GIeSQncKHRVP0IxCWUVo0MIGX49SW6XumJGcs2DQOMZRXfK2bX_WVTaSQZRan91bzmh8hSsrGE8wEbLxelqsAU-U1tSrV_eaD3LqNvy3shLHai2zFgHKiTnjy5XxswDDzPev4XVPKrkmqo26NqzhKy61WXB_dFhNr13Yc7TQ"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-title-sm text-title-sm text-on-surface truncate">
                          stylist-dimas-avatar.webp
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs">
                        <span>1000 × 1000 px</span>
                        <span>110 KB</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-xs text-label-xs">
                          1:1 Avatar
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-label-xs text-label-xs">
                          Focal Point Set
                        </span>
                      </div>
                    </div>
                  </div>
                  &#123;/* Card 7 */&#125;
                  <div className="media-card group relative bg-surface-container-lowest rounded-xl shadow-sm p-space-sm flex flex-col justify-between gap-space-sm cursor-pointer hover:shadow-md transition-all">
                    <div className="absolute top-3 right-3 z-10">
                      <input className="rounded cursor-pointer w-4 h-4 accent-primary" type="checkbox" />
                    </div>
                    <div className="w-full aspect-video rounded-lg overflow-hidden relative bg-surface-container-low">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        data-alt="Detailed macro shot of hot towel treatment and facial shave preparation, steam gently rising, moody cinematic atmosphere with crisp detail."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5TveboBoXh_g3IavSM02a0Nj4MB--AbvFuO7CDro1q2vOvHxVAX-z4jQQ4pywxa6DMK2bmMdAIlL7GkGOp_q2lLZHJwJPyU7DNxDfLYrnKAQisguRot899x_ZskbEHX8ZzLo4bEyKD3XtA3WI3Xu3l7NCiHYlKAbJ5jc6wSwxYQvOtn1zpgGggB-eAxIP799vnctAm10qT5yJGcBGrDQTP-5ZAlw5RJZ-3-MRyxI"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-title-sm text-title-sm text-on-surface truncate">
                          service-hottowel-ritual.webp
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs">
                        <span>1600 × 1200 px</span>
                        <span>195 KB</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-xs text-label-xs">
                          4:3 Gallery
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-label-xs text-label-xs">
                          Focal Point Set
                        </span>
                      </div>
                    </div>
                  </div>
                  &#123;/* Card 8 */&#125;
                  <div className="media-card group relative bg-surface-container-lowest rounded-xl shadow-sm p-space-sm flex flex-col justify-between gap-space-sm cursor-pointer hover:shadow-md transition-all">
                    <div className="absolute top-3 right-3 z-10">
                      <input className="rounded cursor-pointer w-4 h-4 accent-primary" type="checkbox" />
                    </div>
                    <div className="w-full aspect-video rounded-lg overflow-hidden relative bg-surface-container-low flex items-center justify-center p-6">
                      <svg className="w-20 h-14 text-on-surface" fill="currentColor" viewBox="0 0 100 100">
                        <polygon points="50,15 90,85 10,85"></polygon>
                        <circle cx="50" cy="60" fill="#ffffff" r="10"></circle>
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-title-sm text-title-sm text-on-surface truncate">
                          kult-monogram-shield.svg
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs">
                        <span>Vector SVG</span>
                        <span>4.1 KB</span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-xs text-label-xs">
                          Logo SVG
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-xs text-label-xs">
                          Vector Scalable
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                &#123;/* Pagination & Bulk Summary */&#125;
                <div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm p-space-sm bg-surface-container-lowest rounded-xl shadow-sm text-on-surface-variant font-label-xs text-label-xs">
                  <span>Menampilkan 1 - 8 dari 428 aset terunggah</span>
                  <div className="flex items-center gap-1">
                    <button
                      className="p-1 rounded bg-surface-container text-on-surface opacity-50 cursor-not-allowed"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">chevron_left</span>
                    </button>
                    <span className="px-2.5 py-1 rounded bg-primary text-on-primary font-semibold">1</span>
                    <button
                      className="px-2.5 py-1 rounded hover:bg-surface-container text-on-surface font-medium"
                      type="button"
                    >
                      2
                    </button>
                    <button
                      className="px-2.5 py-1 rounded hover:bg-surface-container text-on-surface font-medium"
                      type="button"
                    >
                      3
                    </button>
                    <span className="px-1">...</span>
                    <button
                      className="px-2.5 py-1 rounded hover:bg-surface-container text-on-surface font-medium"
                      type="button"
                    >
                      54
                    </button>
                    <button className="p-1 rounded hover:bg-surface-container text-on-surface" type="button">
                      <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    </button>
                  </div>
                </div>
              </div>
              &#123;/* Right: Asset Inspector & Focal-Point Editor Card */&#125;
              <div className="xl:col-span-5 2xl:col-span-4 bg-surface-container-lowest rounded-xl shadow-sm p-space-md sm:p-space-lg flex flex-col gap-space-md sticky top-20">
                &#123;/* Inspector Header */&#125;
                <div className="flex items-center justify-between pb-space-sm border-b-0">
                  <div className="flex flex-col">
                    <h2 className="font-title-md text-title-md text-on-surface font-semibold">
                      Detail Aset &amp; Smart Focal-Point
                    </h2>
                    <span className="font-label-xs text-label-xs text-on-surface-variant">
                      Konfigurasi koordinat auto-crop frontend Rena
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-xs text-label-xs font-semibold">
                    WEBP HD
                  </span>
                </div>
                &#123;/* Interactive Focal Point Pin Display */&#125;
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs">
                    <span>Visual Coordinate Selector</span>
                    <span className="font-mono text-on-surface font-medium">
                      X: <span id="label-x">52%</span> | Y: <span id="label-y">38%</span>
                    </span>
                  </div>
                  <div
                    className="relative w-full aspect-video rounded-xl overflow-hidden bg-surface-container cursor-crosshair select-none group shadow-inner"
                    id="focal-canvas-wrap"
                  >
                    <img
                      className="w-full h-full object-cover pointer-events-none"
                      data-alt="A modern masculine barbershop interior in Senopati Jakarta, warm architectural spotlighting, sleek black leather grooming chairs, minimalist concrete texture, timber accent walls, elegant editorial photography."
                      id="focal-source-image"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1gLf-xMvDd890d0ALYq1b_BDFFahDfgJZKQLJge3vW5PCOOLq3odoPYE7n8JC6oS4ogx496pgLMIFO_kL6A5Gt6_-S1s_w630DUTPGuCcIn6seLQmE-HFB9m9hH2OTd2azq08GHN7Vv1LQ4tPa_KA0YHG24OwLNOpDLOsRQ2MMNo3GTmdHYaFc4PgaDFeex7mOfpCm-BPx6SZYNzG1YDuN3Jp9H99XuIEOL56T5A"
                    />
                    &#123;/* Guideline grid overlay */&#125;
                    <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none opacity-20">
                      <div className="border-r border-b border-surface-container-lowest"></div>
                      <div className="border-r border-b border-surface-container-lowest"></div>
                      <div className="border-b border-surface-container-lowest"></div>
                      <div className="border-r border-b border-surface-container-lowest"></div>
                      <div className="border-r border-b border-surface-container-lowest"></div>
                      <div className="border-b border-surface-container-lowest"></div>
                      <div className="border-r border-surface-container-lowest"></div>
                      <div className="border-r border-surface-container-lowest"></div>
                      <div></div>
                    </div>
                    &#123;/* Focal Point Target Pin */&#125;
                    <div
                      className="absolute top-[38%] left-[52%] -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center transition-all duration-75"
                      id="focal-pin"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/20 animate-ping absolute"></div>
                      <div className="w-7 h-7 rounded-full bg-surface-container-lowest shadow-md flex items-center justify-center">
                        <span className="material-symbols-outlined text-[18px] text-primary">filter_center_focus</span>
                      </div>
                    </div>
                  </div>
                  <p className="font-label-xs text-label-xs text-on-surface-variant italic">
                    Klik di area gambar di atas atau geser slider di bawah untuk menyesuaikan target titik fokus.
                  </p>
                </div>
                &#123;/* Sliders: X-Axis & Y-Axis */&#125;
                <div className="grid grid-cols-2 gap-space-sm bg-surface-container-low p-space-sm rounded-lg">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs">
                      <label className="font-medium text-on-surface" htmlFor="slider-x">
                        X-Axis
                      </label>
                      <span className="font-mono" id="slider-x-val">
                        0.52
                      </span>
                    </div>
                    <input
                      className="w-full accent-primary h-1.5 bg-surface-container rounded-lg cursor-pointer"
                      id="slider-x"
                      max="100"
                      min="0"
                      type="range"
                      value="52"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs">
                      <label className="font-medium text-on-surface" htmlFor="slider-y">
                        Y-Axis
                      </label>
                      <span className="font-mono" id="slider-y-val">
                        0.38
                      </span>
                    </div>
                    <input
                      className="w-full accent-primary h-1.5 bg-surface-container rounded-lg cursor-pointer"
                      id="slider-y"
                      max="100"
                      min="0"
                      type="range"
                      value="38"
                    />
                  </div>
                </div>
                &#123;/* Live Auto-Crop Simulation Breakpoints */&#125;
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-title-sm text-title-sm text-on-surface font-semibold">
                      Simulasi Auto-Crop Rena (Next.js)
                    </span>
                    <span className="material-symbols-outlined text-[16px] text-on-surface-variant">aspect_ratio</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    &#123;/* 16:9 Banner Hero */&#125;
                    <div className="flex flex-col gap-1">
                      <div className="w-full aspect-video rounded-lg overflow-hidden bg-surface-container relative">
                        <img
                          className="w-full h-full object-cover"
                          data-alt="A modern masculine barbershop interior in Senopati Jakarta, warm architectural spotlighting, sleek black leather grooming chairs, minimalist concrete texture, timber accent walls, elegant editorial photography."
                          id="sim-16-9"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0vzSFyUe4u5hwcMCovpP2zFEBZlmw17MvnbDFJDSpXLeKfUmmNq-9Lb60k_pRHcr4tnVf_eY_n0qBenMOJD8X-Bu50TsrZI7ICzpV8zPpgtbOs-UVhGFpV18ltN9crlJvajTuHo2smGaehUuqdYabvEsn_6qbnm3sRvMFfvI7YfD4HNefJ-k6s6Yqy-5gMipZDVHh3NHXwoW8s-f-tmNQ8OkZi-3b7PNpFtyK4ag"
                          style={{ objectPosition: '52% 38%' }}
                        />
                      </div>
                      <span className="font-label-xs text-label-xs text-on-surface-variant text-center">
                        Hero (16:9)
                      </span>
                    </div>
                    &#123;/* 1:1 Square Card */&#125;
                    <div className="flex flex-col gap-1">
                      <div className="w-full aspect-square rounded-lg overflow-hidden bg-surface-container relative">
                        <img
                          className="w-full h-full object-cover"
                          data-alt="A modern masculine barbershop interior in Senopati Jakarta, warm architectural spotlighting, sleek black leather grooming chairs, minimalist concrete texture, timber accent walls, elegant editorial photography."
                          id="sim-1-1"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt2HYsNmPm6Q-j0GpJmGO_fx9DLIkrmWxRF0yNMH5hTsW3Dz8X26jSPZ_Fdn1eC8Wagn74lOzqj1-U6ovOH_r9D24MQ-sTML7IoVoCmr7w9l1ZIft4Aer0H-ZPoIlRpG68ExfItNRWhutc4KQfPP7rR3bdtEa7kj_YtOquzi1n-hfWqU2A9MbEfcbnKlSekQ3Xk2QNO4f_OSwKU-fjShjFUvPfYx8y3alqVQLzDyw"
                          style={{ objectPosition: '52% 38%' }}
                        />
                      </div>
                      <span className="font-label-xs text-label-xs text-on-surface-variant text-center">
                        Square (1:1)
                      </span>
                    </div>
                    &#123;/* 9:16 Portrait Mobile */&#125;
                    <div className="flex flex-col gap-1">
                      <div className="w-full h-full min-h-[72px] aspect-[9/16] rounded-lg overflow-hidden bg-surface-container relative mx-auto">
                        <img
                          className="w-full h-full object-cover"
                          data-alt="A modern masculine barbershop interior in Senopati Jakarta, warm architectural spotlighting, sleek black leather grooming chairs, minimalist concrete texture, timber accent walls, elegant editorial photography."
                          id="sim-9-16"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4b6ZYr4I-0nMKB2Lq4vsAsr2PUFb3qPx_sZrfZfWFlBMqaaFHkiGpnH1aUioh_EI-0DfK27oMi097S8SPMEgEAFaIKdAtoKJE0mQ5JcJwRSRo0Hw_QIGN_Q2qU82XWj0sqVZpVXoxncjp1siBzk4iEuHV5Q9wLlj9FqoXuH9wsLQ7M-SbKsxixPdKKLPRf-Lhq1D3eaZixaAmk4LYRyfQ_GU70Rn6C2SG_694gyc"
                          style={{ objectPosition: '52% 38%' }}
                        />
                      </div>
                      <span className="font-label-xs text-label-xs text-on-surface-variant text-center">
                        Mobile (9:16)
                      </span>
                    </div>
                  </div>
                </div>
                &#123;/* Metadata & SEO fields */&#125;
                <div className="flex flex-col gap-space-sm pt-2">
                  <div className="flex flex-col gap-1">
                    <label className="font-label-xs text-label-xs font-semibold text-on-surface uppercase tracking-wider">
                      Alt Text (Accessibility &amp; SEO)
                    </label>
                    <input
                      className="w-full h-9 px-3 text-body-sm font-body-sm bg-surface-container-low rounded-lg text-on-surface outline-none focus:bg-surface-container-lowest shadow-sm"
                      type="text"
                      value="Interior lounge KULT Barber cabang Senopati"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <label className="font-label-xs text-label-xs font-semibold text-on-surface uppercase tracking-wider">
                        Public CDN URL
                      </label>
                      <button
                        className="text-on-surface font-label-xs text-label-xs hover:underline flex items-center gap-1"
                        id="copy-url-btn"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[14px]">content_copy</span>
                        <span id="copy-text">Salin URL</span>
                      </button>
                    </div>
                    <div className="flex items-center bg-surface-container-low rounded-lg px-3 py-1.5">
                      <span
                        className="font-mono text-body-sm text-body-sm text-on-surface-variant truncate select-all"
                        id="cdn-url-string"
                      >
                        http://cdn.cms-service.id/kult-barber/media/hero-interior.webp
                      </span>
                    </div>
                  </div>
                </div>
                &#123;/* Inspector Actions */&#125;
                <div className="flex items-center justify-between gap-space-sm pt-space-xs">
                  <button
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container text-on-surface-variant hover:text-error hover:bg-surface-container-high transition-colors font-label-sm text-label-sm"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]">delete</span>
                    <span>Hapus Aset</span>
                  </button>
                  <div className="flex items-center gap-2">
                    <button
                      className="px-3 py-2 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high"
                      type="button"
                    >
                      Reset
                    </button>
                    <button
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm shadow-sm hover:opacity-90 transition-all"
                      id="save-focal-btn"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">check</span>
                      <span>Simpan Perubahan</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          &#123;/* Interactive Slide-over Upload Modal / Dropzone Drawer */&#125;
          <div
            className="fixed inset-0 z-50 flex justify-end bg-inverse-surface/40 backdrop-blur-sm hidden transition-opacity"
            id="upload-drawer"
          >
            <div className="w-full max-w-md bg-surface-container-lowest h-full shadow-2xl p-space-lg flex flex-col justify-between overflow-y-auto">
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between pb-space-sm border-b-0">
                  <div className="flex flex-col">
                    <h3 className="font-title-md text-title-md text-on-surface font-semibold">Upload Media Baru</h3>
                    <span className="font-label-xs text-label-xs text-on-surface-variant">
                      Proses kompresi otomatis WebP &amp; generator srcset
                    </span>
                  </div>
                  <button
                    className="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container"
                    id="close-upload-btn"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[20px]">close</span>
                  </button>
                </div>
                &#123;/* Dropzone Area */&#125;
                <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col items-center justify-center text-center gap-2 cursor-pointer hover:bg-surface-container transition-colors">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface">
                    <span className="material-symbols-outlined text-[24px]">cloud_upload</span>
                  </div>
                  <div className="font-title-sm text-title-sm text-on-surface font-medium">
                    Tarik &amp; Lepas File ke sini
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs">
                    Mendukung JPEG, PNG, WEBP, AVIF, dan SVG. Maksimal 25 MB per berkas.
                  </p>
                  <button
                    className="mt-2 px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-xs text-label-xs"
                    type="button"
                  >
                    Pilih File dari Komputer
                  </button>
                </div>
                &#123;/* Optimization Preferences */&#125;
                <div className="flex flex-col gap-space-sm">
                  <span className="font-label-xs text-label-xs font-semibold text-on-surface uppercase tracking-wider">
                    Otomasi Pipeline
                  </span>
                  <div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface font-medium">
                        WebP/AVIF Lossless Transcode
                      </span>
                      <span className="font-label-xs text-label-xs text-on-surface-variant">
                        Konversi otomatis saat upload sukses
                      </span>
                    </div>
                    <input defaultChecked={true} className="rounded w-4 h-4 accent-primary" type="checkbox" />
                  </div>
                  <div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface font-medium">
                        Auto Center Focal-Point
                      </span>
                      <span className="font-label-xs text-label-xs text-on-surface-variant">
                        Set default koordinat ke (0.50, 0.50)
                      </span>
                    </div>
                    <input defaultChecked={true} className="rounded w-4 h-4 accent-primary" type="checkbox" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end gap-space-sm pt-space-md border-t-0">
                <button
                  className="px-4 py-2 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm"
                  id="cancel-upload-btn"
                  type="button"
                >
                  Batal
                </button>
                <button
                  className="px-4 py-2 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm shadow-sm"
                  type="button"
                >
                  Mulai Upload
                </button>
              </div>
            </div>
          </div>
          &#123;/* Client-side Interactive Behavior */&#125;
        </div>
      </main>
    </>
  );
}
