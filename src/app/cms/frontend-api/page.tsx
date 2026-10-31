'use client';

import React, { useState } from 'react';
import { CmsHeader } from '@/components/cms/CmsHeader';

export default function FrontendApiPage() {
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
        breadcrumbTitle="Studio / Frontend API"
        onRevalidate={handleRevalidate}
        isRevalidating={isRevalidating}
      />
      <main className="w-full pt-16 bg-surface min-h-screen">
        <div className="flex flex-col w-full px-margin py-margin gap-space-xl">
          &#123;/* Top Level Notification Banner / Integration Heartbeat */&#125;
          <div className="w-full bg-surface-container-low rounded-xl p-space-md flex flex-wrap items-center justify-between gap-space-md shadow-sm">
            <div className="flex items-center gap-space-md">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-on-primary">
                <span className="material-symbols-outlined text-[20px]">hub</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-space-xs">
                  <span className="font-title-sm text-title-sm text-on-surface">Next.js Edge Runtime Sync</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-xs text-label-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    Telemetry v3.1.2 Online
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Pusat integrasi headless Next.js App Router, SSG, On-Demand ISR, dan dynamic webhook telemetry.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-space-sm">
              <button
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm hover:bg-surface-container transition-all"
                id="copyEnvBtn"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">content_copy</span>
                <span>Salin .env.local</span>
              </button>
              <button
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-all"
                id="openSwaggerBtn"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">menu_book</span>
                <span>Buka Swagger UI (/docs)</span>
              </button>
              <button
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm shadow-sm hover:bg-primary-container transition-all"
                id="triggerRevalModalBtn"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">bolt</span>
                <span>Trigger Global ISR</span>
              </button>
            </div>
          </div>
          &#123;/* Main Context Header */&#125;
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-space-xs text-on-surface-variant font-label-xs text-label-xs uppercase tracking-wider">
              <span>Integration Hub</span>
              <span>•</span>
              <span>Delivery Layer</span>
              <span>•</span>
              <span>Multi-Site Engine</span>
            </div>
            <div className="flex flex-wrap items-end justify-between gap-space-md">
              <div>
                <h1 className="font-headline-lg text-headline-lg text-on-surface">
                  Frontend API &amp; Integration Hub
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl mt-1">
                  Pusat panduan integrasi, webhook cache revalidation, dan dokumentasi Delivery API untuk frontend
                  engineer (Next.js / Rena).
                </p>
              </div>
              <div className="flex items-center gap-space-xs bg-surface-container-lowest p-1 rounded-lg shadow-sm">
                <span className="font-label-xs text-label-xs text-on-surface-variant px-2">Konektor:</span>
                <span className="px-2 py-0.5 rounded bg-surface-container font-label-xs text-label-xs text-on-surface">
                  REST Delivery
                </span>
                <span className="px-2 py-0.5 rounded bg-surface-container font-label-xs text-label-xs text-on-surface">
                  On-Demand Webhook
                </span>
                <span className="px-2 py-0.5 rounded bg-surface-container font-label-xs text-label-xs text-on-surface">
                  Sitemap / Robots
                </span>
              </div>
            </div>
          </div>
          &#123;/* Top Configuration & Credentials Bento Strip */&#125;
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
            &#123;/* Active Site & Host Config (7 cols) */&#125;
            <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between gap-space-md">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-space-sm">
                  <div className="w-8 h-8 rounded bg-surface-container-low flex items-center justify-center text-on-surface">
                    <span className="material-symbols-outlined text-[18px]">dns</span>
                  </div>
                  <div>
                    <h2 className="font-title-md text-title-md text-on-surface">Configuration Context</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Global routing target &amp; site scoped namespace
                    </p>
                  </div>
                </div>
                &#123;/* Site Switcher Dropdown */&#125;
                <div className="flex items-center gap-2 bg-surface-container-low px-2 py-1 rounded-lg">
                  <label className="font-label-xs text-label-xs text-on-surface-variant" htmlFor="siteSelector">
                    Site Scope:
                  </label>
                  <select
                    className="bg-surface-container-lowest text-on-surface font-title-sm text-title-sm px-2 py-1 rounded focus:outline-none cursor-pointer"
                    id="siteSelector"
                  >
                    <option value="kult-barber">kult-barber (Active)</option>
                    <option value="resto-nusantara">resto-nusantara</option>
                    <option value="jasa-demo">jasa-demo</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
                <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
                  <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">
                    API Base URL
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="font-title-sm text-title-sm text-on-surface font-mono" id="apiBaseDisplay">
                      http://cms-service.internal:3000/api
                    </span>
                    <button
                      className="text-on-surface-variant hover:text-on-surface transition-colors"
                      title="Copy Base URL"
                    >
                      <span className="material-symbols-outlined text-[16px]">content_copy</span>
                    </button>
                  </div>
                </div>
                <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
                  <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">
                    Delivery Headers
                  </span>
                  <div className="flex items-center justify-between">
                    <span className="font-title-sm text-title-sm text-on-surface font-mono" id="headerDisplay">
                      x-site-key: kult-barber
                    </span>
                    <button
                      className="text-on-surface-variant hover:text-on-surface transition-colors"
                      title="Copy Header"
                    >
                      <span className="material-symbols-outlined text-[16px]">copy_all</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-space-sm p-space-sm rounded-lg bg-surface-container text-on-surface">
                <div className="flex items-center gap-space-xs text-body-sm font-body-sm">
                  <span className="material-symbols-outlined text-[16px] text-primary">alt_route</span>
                  <span>Multi-site URI Prefix:</span>
                  <span
                    className="font-mono text-label-sm font-label-sm bg-surface-container-lowest px-2 py-0.5 rounded"
                    id="multiSitePathDisplay"
                  >
                    /api/s/kult-barber/delivery/v1/...
                  </span>
                </div>
                <span className="font-label-xs text-label-xs text-on-surface-variant">HTTP/2 Edge Cached</span>
              </div>
            </div>
            &#123;/* Security & Secret Card (5 cols) */&#125;
            <div className="lg:col-span-5 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between gap-space-md">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-space-sm">
                  <div className="w-8 h-8 rounded bg-surface-container-low flex items-center justify-center text-on-surface">
                    <span className="material-symbols-outlined text-[18px]">key</span>
                  </div>
                  <div>
                    <h2 className="font-title-md text-title-md text-on-surface">ISR Revalidation Secret</h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Bilateral auth token for Next.js On-Demand cache refresh
                    </p>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs">
                  Active
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between px-space-sm py-2 rounded-lg bg-surface-container-low">
                  <span
                    className="font-mono text-label-md font-label-md tracking-widest text-on-surface"
                    id="secretMasked"
                  >
                    ••••••••••••••••••••••••••••
                  </span>
                  <span className="font-mono text-label-sm font-label-sm text-on-surface hidden" id="secretPlain">
                    sec_live_99d42f88301ec9b
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all"
                      id="toggleSecretBtn"
                      title="Toggle visibility"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]" id="toggleSecretIcon">
                        visibility
                      </span>
                    </button>
                    <button
                      className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all"
                      id="copySecretBtn"
                      title="Copy Secret"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[18px]">content_copy</span>
                    </button>
                  </div>
                </div>
                <p className="font-label-xs text-label-xs text-on-surface-variant">
                  Digunakan pada header:{' '}
                  <code className="font-mono bg-surface-container-low px-1 rounded">x-revalidate-secret</code>
                </p>
              </div>
              <div className="flex items-center justify-between pt-2">
                <button
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-all"
                  id="regenSecretBtn"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[16px]">refresh</span>
                  <span>Regenerate Key</span>
                </button>
                <span className="font-label-xs text-label-xs text-on-surface-variant">Rotated 4 hari yang lalu</span>
              </div>
            </div>
          </div>
          &#123;/* Interactive Tabs Section */&#125;
          <div className="w-full flex flex-col gap-space-md">
            &#123;/* Tab Controls Navigation */&#125;
            <div className="flex items-center justify-between border-b-0 pb-1">
              <div className="flex items-center gap-space-xs p-1 rounded-xl bg-surface-container-low shadow-inner">
                <button
                  className="tab-btn active flex items-center gap-2 px-space-md py-1.5 rounded-lg bg-surface-container-lowest text-on-surface shadow-sm font-title-sm text-title-sm transition-all"
                  id="tabBtn1"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">route</span>
                  <span>Delivery Endpoints</span>
                  <span className="px-1.5 py-0.2 rounded-full bg-surface-container text-on-surface font-label-xs text-label-xs">
                    7
                  </span>
                </button>
                <button
                  className="tab-btn flex items-center gap-2 px-space-md py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-title-sm text-title-sm transition-all"
                  id="tabBtn2"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">code</span>
                  <span>Next.js Code Recipes</span>
                </button>
                <button
                  className="tab-btn flex items-center gap-2 px-space-md py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-title-sm text-title-sm transition-all"
                  id="tabBtn3"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">monitoring</span>
                  <span>Cache Invalidation &amp; ISR</span>
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                </button>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <span className="font-label-xs text-label-xs text-on-surface-variant">Specification:</span>
                <span className="px-2 py-0.5 rounded bg-surface-container font-mono text-label-xs text-label-xs">
                  OpenAPI 3.1.0
                </span>
              </div>
            </div>
            &#123;/* TAB 1: ENDPOINTS DELIVERY API TABLE */&#125;
            <div className="tab-pane flex flex-col gap-space-md" id="tabContent-endpoints">
              <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
                &#123;/* Interactive Table Header Filter Bar */&#125;
                <div className="p-space-md bg-surface-container-low flex flex-wrap items-center justify-between gap-space-sm">
                  <div className="flex items-center gap-space-sm flex-1 max-w-md bg-surface-container-lowest px-3 py-1.5 rounded-lg shadow-sm">
                    <span className="material-symbols-outlined text-on-surface-variant text-[18px]">filter_list</span>
                    <input
                      className="w-full bg-transparent text-on-surface placeholder:text-on-surface-variant focus:outline-none font-body-sm text-body-sm"
                      id="endpointSearchInput"
                      placeholder="Filter endpoint URI, method, query parameter..."
                      type="text"
                    />
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <button className="method-filter-btn px-2.5 py-1 rounded bg-primary text-on-primary font-label-xs text-label-xs">
                      ALL
                    </button>
                    <button className="method-filter-btn px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface font-label-xs text-label-xs hover:bg-surface-container">
                      GET
                    </button>
                    <button className="method-filter-btn px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface font-label-xs text-label-xs hover:bg-surface-container">
                      POST
                    </button>
                  </div>
                </div>
                &#123;/* Table View */&#125;
                <div className="w-full overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-surface-container-low text-on-surface-variant font-label-xs text-label-xs uppercase tracking-wider">
                        <th className="px-space-md py-3 font-semibold">Method</th>
                        <th className="px-space-md py-3 font-semibold">Endpoint Path</th>
                        <th className="px-space-md py-3 font-semibold">Parameters &amp; Headers</th>
                        <th className="px-space-md py-3 font-semibold">Cache TTL</th>
                        <th className="px-space-md py-3 font-semibold text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y-0 text-body-md font-body-md" id="endpointTableBody">
                      &#123;/* Item 1: Content Collection */&#125;
                      <tr
                        className="endpoint-row hover:bg-surface-container-low transition-colors"
                        data-method="GET"
                        data-path="/delivery/v1/content"
                      >
                        <td className="px-space-md py-3.5">
                          <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-xs text-label-xs font-semibold">
                            GET
                          </span>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="flex flex-col">
                            <span className="font-mono text-title-sm text-title-sm text-on-surface">
                              /delivery/v1/content
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">
                              List konten dinamis dengan filter taksonomi
                            </span>
                          </div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="flex flex-wrap gap-1 max-w-sm">
                            <span className="font-mono font-label-xs text-label-xs px-1.5 py-0.5 rounded bg-surface-container text-on-surface">
                              siteKey*
                            </span>
                            <span className="font-mono font-label-xs text-label-xs px-1.5 py-0.5 rounded bg-surface-container text-on-surface">
                              contentType*
                            </span>
                            <span className="font-mono font-label-xs text-label-xs px-1.5 py-0.5 rounded bg-surface-container-low text-on-surface-variant">
                              slug
                            </span>
                            <span className="font-mono font-label-xs text-label-xs px-1.5 py-0.5 rounded bg-surface-container-low text-on-surface-variant">
                              tag
                            </span>
                            <span className="font-mono font-label-xs text-label-xs px-1.5 py-0.5 rounded bg-surface-container-low text-on-surface-variant">
                              search
                            </span>
                            <span className="font-mono font-label-xs text-label-xs px-1.5 py-0.5 rounded bg-surface-container-low text-on-surface-variant">
                              page
                            </span>
                            <span className="font-mono font-label-xs text-label-xs px-1.5 py-0.5 rounded bg-surface-container-low text-on-surface-variant">
                              limit
                            </span>
                          </div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="flex items-center gap-1 font-body-sm text-body-sm text-on-surface">
                            <span className="material-symbols-outlined text-[14px]">timer</span>
                            <span>60s (SWR)</span>
                          </div>
                        </td>
                        <td className="px-space-md py-3.5 text-right">
                          <button className="px-3 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-primary hover:text-on-primary transition-all">
                            Test Call
                          </button>
                        </td>
                      </tr>
                      &#123;/* Item 2: Content Item Detail */&#125;
                      <tr
                        className="endpoint-row hover:bg-surface-container-low transition-colors"
                        data-method="GET"
                        data-path="/delivery/v1/content/:slug"
                      >
                        <td className="px-space-md py-3.5">
                          <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-xs text-label-xs font-semibold">
                            GET
                          </span>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="flex flex-col">
                            <span className="font-mono text-title-sm text-title-sm text-on-surface">
                              /delivery/v1/content/:slug
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">
                              Item detail spesifik via slug &amp; locale
                            </span>
                          </div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="flex flex-wrap gap-1 max-w-sm">
                            <span className="font-mono font-label-xs text-label-xs px-1.5 py-0.5 rounded bg-surface-container text-on-surface">
                              siteKey*
                            </span>
                            <span className="font-mono font-label-xs text-label-xs px-1.5 py-0.5 rounded bg-surface-container text-on-surface">
                              contentType*
                            </span>
                            <span className="font-mono font-label-xs text-label-xs px-1.5 py-0.5 rounded bg-surface-container-low text-on-surface-variant">
                              locale=id
                            </span>
                          </div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="flex items-center gap-1 font-body-sm text-body-sm text-on-surface">
                            <span className="material-symbols-outlined text-[14px]">timer</span>
                            <span>300s (ISR)</span>
                          </div>
                        </td>
                        <td className="px-space-md py-3.5 text-right">
                          <button className="px-3 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-primary hover:text-on-primary transition-all">
                            Test Call
                          </button>
                        </td>
                      </tr>
                      &#123;/* Item 3: Categories */&#125;
                      <tr
                        className="endpoint-row hover:bg-surface-container-low transition-colors"
                        data-method="GET"
                        data-path="/delivery/v1/categories"
                      >
                        <td className="px-space-md py-3.5">
                          <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-xs text-label-xs font-semibold">
                            GET
                          </span>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="flex flex-col">
                            <span className="font-mono text-title-sm text-title-sm text-on-surface">
                              /delivery/v1/categories
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">
                              Daftar taksonomi kategori site aktif
                            </span>
                          </div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <span className="font-mono font-label-xs text-label-xs px-1.5 py-0.5 rounded bg-surface-container text-on-surface">
                            siteKey*
                          </span>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="flex items-center gap-1 font-body-sm text-body-sm text-on-surface">
                            <span className="material-symbols-outlined text-[14px]">timer</span>
                            <span>600s</span>
                          </div>
                        </td>
                        <td className="px-space-md py-3.5 text-right">
                          <button className="px-3 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-primary hover:text-on-primary transition-all">
                            Test Call
                          </button>
                        </td>
                      </tr>
                      &#123;/* Item 4: Tags */&#125;
                      <tr
                        className="endpoint-row hover:bg-surface-container-low transition-colors"
                        data-method="GET"
                        data-path="/delivery/v1/tags"
                      >
                        <td className="px-space-md py-3.5">
                          <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-xs text-label-xs font-semibold">
                            GET
                          </span>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="flex flex-col">
                            <span className="font-mono text-title-sm text-title-sm text-on-surface">
                              /delivery/v1/tags
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">
                              Daftar global tags dan metadata count
                            </span>
                          </div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <span className="font-mono font-label-xs text-label-xs px-1.5 py-0.5 rounded bg-surface-container text-on-surface">
                            siteKey*
                          </span>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="flex items-center gap-1 font-body-sm text-body-sm text-on-surface">
                            <span className="material-symbols-outlined text-[14px]">timer</span>
                            <span>600s</span>
                          </div>
                        </td>
                        <td className="px-space-md py-3.5 text-right">
                          <button className="px-3 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-primary hover:text-on-primary transition-all">
                            Test Call
                          </button>
                        </td>
                      </tr>
                      &#123;/* Item 5: Form Submissions */&#125;
                      <tr
                        className="endpoint-row hover:bg-surface-container-low transition-colors"
                        data-method="POST"
                        data-path="/delivery/v1/forms/:formKey/submissions"
                      >
                        <td className="px-space-md py-3.5">
                          <span className="px-2 py-0.5 rounded bg-primary text-on-primary font-label-xs text-label-xs font-semibold">
                            POST
                          </span>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="flex flex-col">
                            <span className="font-mono text-title-sm text-title-sm text-on-surface">
                              /delivery/v1/forms/:formKey/submissions
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">
                              Ingest data lead formulir frontend
                            </span>
                          </div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="flex flex-wrap gap-1 max-w-sm">
                            <span className="font-mono font-label-xs text-label-xs px-1.5 py-0.5 rounded bg-surface-container text-on-surface">
                              formKey* (param)
                            </span>
                            <span className="font-mono font-label-xs text-label-xs px-1.5 py-0.5 rounded bg-surface-container text-on-surface">
                              Body: application/json
                            </span>
                          </div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <span className="font-label-xs text-label-xs text-on-surface-variant font-mono">
                            NO-STORE
                          </span>
                        </td>
                        <td className="px-space-md py-3.5 text-right">
                          <button className="px-3 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-primary hover:text-on-primary transition-all">
                            Test Call
                          </button>
                        </td>
                      </tr>
                      &#123;/* Item 6: Sitemap */&#125;
                      <tr
                        className="endpoint-row hover:bg-surface-container-low transition-colors"
                        data-method="GET"
                        data-path="/delivery/v1/sitemap.xml"
                      >
                        <td className="px-space-md py-3.5">
                          <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-xs text-label-xs font-semibold">
                            GET
                          </span>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="flex flex-col">
                            <span className="font-mono text-title-sm text-title-sm text-on-surface">
                              /delivery/v1/sitemap.xml
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">
                              Dynamic XML Sitemap generated per tenant
                            </span>
                          </div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <span className="font-mono font-label-xs text-label-xs px-1.5 py-0.5 rounded bg-surface-container text-on-surface">
                            siteKey*
                          </span>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="flex items-center gap-1 font-body-sm text-body-sm text-on-surface">
                            <span className="material-symbols-outlined text-[14px]">timer</span>
                            <span>1800s</span>
                          </div>
                        </td>
                        <td className="px-space-md py-3.5 text-right">
                          <button className="px-3 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-primary hover:text-on-primary transition-all">
                            Test Call
                          </button>
                        </td>
                      </tr>
                      &#123;/* Item 7: Robots */&#125;
                      <tr
                        className="endpoint-row hover:bg-surface-container-low transition-colors"
                        data-method="GET"
                        data-path="/delivery/v1/robots.txt"
                      >
                        <td className="px-space-md py-3.5">
                          <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-xs text-label-xs font-semibold">
                            GET
                          </span>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="flex flex-col">
                            <span className="font-mono text-title-sm text-title-sm text-on-surface">
                              /delivery/v1/robots.txt
                            </span>
                            <span className="font-body-sm text-body-sm text-on-surface-variant">
                              Crawling rules and sitemap direct pointers
                            </span>
                          </div>
                        </td>
                        <td className="px-space-md py-3.5">
                          <span className="font-mono font-label-xs text-label-xs px-1.5 py-0.5 rounded bg-surface-container text-on-surface">
                            siteKey*
                          </span>
                        </td>
                        <td className="px-space-md py-3.5">
                          <div className="flex items-center gap-1 font-body-sm text-body-sm text-on-surface">
                            <span className="material-symbols-outlined text-[14px]">timer</span>
                            <span>3600s</span>
                          </div>
                        </td>
                        <td className="px-space-md py-3.5 text-right">
                          <button className="px-3 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-primary hover:text-on-primary transition-all">
                            Test Call
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            &#123;/* TAB 2: NEXT.JS CODE RECIPES */&#125;
            <div className="tab-pane hidden flex-col gap-space-md" id="tabContent-recipes">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-space-md">
                &#123;/* Recipe Selector Sidebar */&#125;
                <div className="lg:col-span-1 bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex flex-col gap-1">
                  <span className="px-space-sm py-2 font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">
                    Recipes Directory
                  </span>
                  <button
                    className="recipe-btn active text-left px-space-sm py-2.5 rounded-lg bg-surface-container text-on-surface font-title-sm text-title-sm flex items-center justify-between"
                    id="rec-btn-singleton"
                  >
                    <span>1. getSiteIdentity</span>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </button>
                  <button
                    className="recipe-btn text-left px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-title-sm text-title-sm flex items-center justify-between"
                    id="rec-btn-articles"
                  >
                    <span>2. getBlogArticles</span>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </button>
                  <button
                    className="recipe-btn text-left px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-title-sm text-title-sm flex items-center justify-between"
                    id="rec-btn-slug"
                  >
                    <span>3. getArticleBySlug</span>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </button>
                  <button
                    className="recipe-btn text-left px-space-sm py-2.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-title-sm text-title-sm flex items-center justify-between"
                    id="rec-btn-form"
                  >
                    <span>4. submitContactForm</span>
                    <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  </button>
                </div>
                &#123;/* Recipe Code Viewer (3 cols) */&#125;
                <div className="lg:col-span-3 bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
                  <div className="bg-surface-container-low px-space-md py-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="font-mono text-label-sm font-label-sm text-on-surface" id="recipeFilePath">
                        lib/cms/getSiteIdentity.ts
                      </span>
                      <span className="px-2 py-0.5 rounded bg-surface-container font-label-xs text-label-xs text-on-surface">
                        Next.js 14+ App Router
                      </span>
                    </div>
                    <button
                      className="flex items-center gap-1 text-on-surface-variant hover:text-on-surface font-label-xs text-label-xs bg-surface-container-lowest px-2.5 py-1 rounded shadow-sm"
                      id="copyRecipeCodeBtn"
                    >
                      <span className="material-symbols-outlined text-[14px]">content_copy</span>
                      <span>Salin Snippet</span>
                    </button>
                  </div>
                  &#123;/* Code Snippet Area */&#125;
                  <div className="p-space-md bg-primary-container text-on-primary font-mono text-body-sm leading-relaxed overflow-x-auto min-h-[360px]">
                    <pre id="recipeCodeBlock">
                      <code>
                        // 1. Fetch Singleton Brand Identity (Logo, SEO meta, Working Hours) export async function
                        getSiteIdentity() &#123; const CMS_HOST = process.env.NEXT_PUBLIC_CMS_HOST ||
                        'http://cms-service.internal:3000/api'; const SITE_KEY = process.env.NEXT_PUBLIC_SITE_KEY ||
                        'kult-barber'; const res = await
                        fetch(`$&#123;CMS_HOST&#125;/delivery/v1/content?siteKey=$&#123;SITE_KEY&#125;&amp;contentType=identity_singleton`,
                        &#123; next: &#123; revalidate: 3600, // ISR hourly fallback tags:
                        [`identity-$&#123;SITE_KEY&#125;`] &#125;, headers: &#123; 'x-site-key': SITE_KEY, 'Accept':
                        'application/json' &#125; &#125;); if (!res.ok) &#123; throw new Error(`[CMS] Failed fetching
                        site identity for: $&#123;SITE_KEY&#125;`); &#125; const payload = await res.json(); return
                        payload.data?.[0]?.fields ?? null; &#125;
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
            &#123;/* TAB 3: CACHE INVALIDATION & ISR TELEMETRY */&#125;
            <div className="tab-pane hidden flex-col gap-space-md" id="tabContent-telemetry">
              &#123;/* Top Metrics for Webhook Delivery */&#125;
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-xs text-label-xs text-on-surface-variant uppercase">
                      Global Edge Hit Rate
                    </span>
                    <span className="font-headline-md text-headline-md text-on-surface">99.4%</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      Average across 14 PoPs
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface">
                    <span className="material-symbols-outlined text-[24px]">speed</span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-xs text-label-xs text-on-surface-variant uppercase">
                      Average Purge Latency
                    </span>
                    <span className="font-headline-md text-headline-md text-on-surface">42 ms</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">P99 SLA &lt; 150ms</span>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface">
                    <span className="material-symbols-outlined text-[24px]">electric_bolt</span>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-xs text-label-xs text-on-surface-variant uppercase">
                      Webhook Health status
                    </span>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
                      <span className="font-headline-sm text-headline-sm text-on-surface">200 OK</span>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      All clusters healthy
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface">
                    <span className="material-symbols-outlined text-[24px]">verified</span>
                  </div>
                </div>
              </div>
              &#123;/* Realtime Revalidation Logs Panel */&#125;
              <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
                <div className="px-space-md py-space-sm bg-surface-container-low flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                    <span className="font-title-sm text-title-sm text-on-surface">
                      Realtime ISR Invalidation Stream
                    </span>
                  </div>
                  <button
                    className="font-label-xs text-label-xs text-on-surface-variant hover:text-on-surface px-2 py-1 rounded hover:bg-surface-container"
                    id="clearLogsBtn"
                  >
                    Clear Logs
                  </button>
                </div>
                <div
                  className="p-space-md font-mono text-body-sm space-y-2.5 bg-surface-container-lowest"
                  id="telemetryLogContainer"
                >
                  &#123;/* Log Entry 1 */&#125;
                  <div className="flex flex-wrap items-center justify-between gap-2 p-2 rounded-lg bg-surface-container-low">
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded bg-primary text-on-primary font-label-xs text-label-xs">
                        200 OK
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface">
                        revalidatePath('/services/fade-cut')
                      </span>
                      <span className="text-on-surface-variant text-body-sm">→ Tag: [services-kult-barber]</span>
                    </div>
                    <div className="flex items-center gap-3 text-on-surface-variant font-label-xs text-label-xs">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> SIN1 (Singapore)
                      </span>
                      <span>28ms</span>
                      <span>12s ago</span>
                    </div>
                  </div>
                  &#123;/* Log Entry 2 */&#125;
                  <div className="flex flex-wrap items-center justify-between gap-2 p-2 rounded-lg bg-surface-container-low">
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded bg-primary text-on-primary font-label-xs text-label-xs">
                        200 OK
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface">
                        revalidateTag('identity-kult-barber')
                      </span>
                      <span className="text-on-surface-variant text-body-sm">→ Broadcast to Edge</span>
                    </div>
                    <div className="flex items-center gap-3 text-on-surface-variant font-label-xs text-label-xs">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> CGK1 (Jakarta)
                      </span>
                      <span>18ms</span>
                      <span>48s ago</span>
                    </div>
                  </div>
                  &#123;/* Log Entry 3 */&#125;
                  <div className="flex flex-wrap items-center justify-between gap-2 p-2 rounded-lg bg-surface-container-low">
                    <div className="flex items-center gap-2">
                      <span className="px-1.5 py-0.5 rounded bg-primary text-on-primary font-label-xs text-label-xs">
                        200 OK
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface">
                        revalidatePath('/sitemap.xml')
                      </span>
                      <span className="text-on-surface-variant text-body-sm">→ SEO Generator Flush</span>
                    </div>
                    <div className="flex items-center gap-3 text-on-surface-variant font-label-xs text-label-xs">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> HND1 (Tokyo)
                      </span>
                      <span>64ms</span>
                      <span>3m ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          &#123;/* Interactive Test Call Modal (Hidden by default) */&#125;
          <div
            className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-50 hidden flex items-center justify-center p-space-md"
            id="testCallModal"
          >
            <div className="bg-surface-container-lowest rounded-xl max-w-2xl w-full p-space-lg shadow-2xl flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">terminal</span>
                  <h3 className="font-title-md text-title-md text-on-surface">Live Delivery API Sandbox</h3>
                </div>
                <button className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all">
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-surface-container-low font-mono text-label-sm">
                <span className="px-2 py-0.5 rounded bg-primary text-on-primary font-semibold" id="modalMethodBadge">
                  GET
                </span>
                <span className="text-on-surface truncate" id="modalUriDisplay">
                  /delivery/v1/content
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="font-label-xs text-label-xs text-on-surface-variant uppercase">
                  Response Payload (HTTP 200 OK • Content-Type: application/json)
                </span>
                <div className="bg-primary-container text-on-primary font-mono text-body-sm p-space-md rounded-lg max-h-72 overflow-y-auto">
                  <pre id="modalJsonOutput">
                    <code>
                      &#123; "status": "success", "meta": &#123; "siteKey": "kult-barber", "timestamp": 1715893021,
                      "cacheStatus": "HIT-EDGE-SIN1" &#125;, "data": [ &#123; "id": "cnt_8829104", "slug":
                      "classic-pompadour-cut", "title": "Classic Pompadour Precision Cut", "category": "Haircuts",
                      "price": 120000, "duration": 45, "available": true &#125; ] &#125;
                    </code>
                  </pre>
                </div>
              </div>
              <div className="flex items-center justify-end gap-2 pt-2">
                <button className="px-4 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high">
                  Tutup Sandbox
                </button>
                <button className="px-4 py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm">
                  Salin Payload JSON
                </button>
              </div>
            </div>
          </div>
          &#123;/* Revalidation Toast / Notification Popup */&#125;
          <div
            className="fixed bottom-6 right-6 bg-primary text-on-primary px-space-md py-3 rounded-xl shadow-xl flex items-center gap-space-sm transform translate-y-24 opacity-0 transition-all duration-300 z-50"
            id="toastNotification"
          >
            <span className="material-symbols-outlined text-[18px]">check_circle</span>
            <span className="font-body-sm text-body-sm" id="toastMessage">
              Cache Revalidation berhasil dipicu!
            </span>
          </div>
        </div>
      </main>
    </>
  );
}
