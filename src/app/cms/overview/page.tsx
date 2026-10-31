'use client';

import React, { useState } from 'react';
import { CmsHeader } from '@/components/cms/CmsHeader';

export default function OverviewPage() {
  const [isRevalidating, setIsRevalidating] = useState(false);

  const handleRevalidate = () => {
    setIsRevalidating(true);
    setTimeout(() => {
      setIsRevalidating(false);
    }, 1500);
  };

  return (
    <>
      <CmsHeader breadcrumbTitle="Studio / Overview" onRevalidate={handleRevalidate} isRevalidating={isRevalidating} />
      <main className="w-full pt-16 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <div className="px-space-lg py-space-lg flex flex-col gap-space-lg">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
              <div className="flex flex-col gap-1.5">
                <div className="flex flex-wrap items-center gap-space-xs">
                  <h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">
                    Overview &amp; Delivery Metrics
                  </h1>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-xs text-label-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    siteKey: kult-barber • Live Headless Mode
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px]">dns</span>
                    API Base URL:{' '}
                    <code className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs">
                      http://cms-service:3000/api
                    </code>
                  </span>
                  <span className="text-outline-variant">•</span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px]">swap_calls</span>
                    Protocol: Next.js 15 App Router ISR Handler
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-space-sm self-start lg:self-center">
                <button
                  className="group flex items-center gap-2 px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-all shadow-sm active:scale-[0.98]"
                  id="revalidateBtn"
                  type="button"
                >
                  <span
                    className="material-symbols-outlined text-[18px] group-hover:rotate-180 transition-transform duration-500"
                    id="revalIcon"
                  >
                    sync
                  </span>
                  <span id="revalText">Purge &amp; Revalidate ISR (Next.js)</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between gap-space-md hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                      Total Delivery Hits
                    </span>
                    <span className="font-headline-xl text-headline-xl text-on-surface mt-1">4.82M</span>
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
                    <span className="material-symbols-outlined text-[20px]">cloud_done</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: '98.4%' }}></div>
                  </div>
                  <div className="flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs">
                    <span className="text-on-surface font-semibold">98.4% cached</span>
                    <span>Next.js ISR &amp; v1 Edge</span>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between gap-space-md hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                      Active Collections
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-headline-xl text-headline-xl text-on-surface">3</span>
                      <span className="font-title-sm text-title-sm text-on-surface-variant">Content Schemas</span>
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
                    <span className="material-symbols-outlined text-[20px]">folder_special</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-1 pt-1 text-center font-label-xs text-label-xs">
                  <div className="bg-surface-container p-1 rounded">
                    <span className="text-on-surface-variant block">Articles</span>
                    <span className="text-on-surface font-bold text-title-sm">48</span>
                  </div>
                  <div className="bg-surface-container p-1 rounded">
                    <span className="text-on-surface-variant block">Reviews</span>
                    <span className="text-on-surface font-bold text-title-sm">24</span>
                  </div>
                  <div className="bg-surface-container p-1 rounded">
                    <span className="text-on-surface-variant block">Services</span>
                    <span className="text-on-surface font-bold text-title-sm">16</span>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between gap-space-md hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                      Singletons Synced
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-headline-xl text-headline-xl text-on-surface">5/5</span>
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-surface-container font-label-xs text-label-xs text-on-surface">
                        100% Synced
                      </span>
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
                    <span className="material-symbols-outlined text-[20px]">token</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 font-label-xs text-label-xs text-on-surface-variant">
                  <span className="px-1.5 py-0.5 rounded bg-surface-container-low text-on-surface">Brand Identity</span>
                  <span className="px-1.5 py-0.5 rounded bg-surface-container-low text-on-surface">Hero Banner</span>
                  <span className="px-1.5 py-0.5 rounded bg-surface-container-low text-on-surface">Jam Buka</span>
                  <span className="px-1.5 py-0.5 rounded bg-surface-container-low text-on-surface">Footer</span>
                  <span className="px-1.5 py-0.5 rounded bg-surface-container-low text-on-surface">Contact</span>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between gap-space-md hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                      Form Submissions Today
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="font-headline-xl text-headline-xl text-on-surface">38</span>
                      <span className="font-title-sm text-title-sm text-on-surface">Leads Ingested</span>
                    </div>
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
                    <span className="material-symbols-outlined text-[20px]">contact_mail</span>
                  </div>
                </div>
                <div className="flex items-center justify-between font-label-xs text-label-xs pt-1">
                  <div className="flex items-center gap-1.5 text-on-surface">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span>
                      CVR: <strong>4.2%</strong>
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-medium">
                    0 Spam Blocked
                  </span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
              <div className="xl:col-span-8 flex flex-col gap-space-lg">
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-xs">
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md text-on-surface">Realtime Delivery Traffic</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Throughput &amp; edge response delivered to frontend Rena / Next.js 15 client
                      </span>
                    </div>
                    <div className="flex items-center gap-space-sm">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-container text-on-surface font-label-xs text-label-xs">
                        <span className="material-symbols-outlined text-[14px]">speed</span>
                        <span>
                          Avg TTFB: <strong className="font-title-sm text-title-sm">14ms</strong>
                        </span>
                      </div>
                      <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-surface-container text-on-surface-variant font-label-xs text-label-xs">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <span>24h Window</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-full h-52 bg-surface-container-low rounded-lg p-space-sm flex flex-col justify-end overflow-hidden">
                    <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none opacity-20">
                      <div className="w-full h-[1px] bg-outline"></div>
                      <div className="w-full h-[1px] bg-outline"></div>
                      <div className="w-full h-[1px] bg-outline"></div>
                    </div>
                    <svg className="w-full h-36 overflow-visible" preserveAspectRatio="none" viewBox="0 0 760 160">
                      <defs>
                        <linearGradient id="trafficGradient" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="currentColor" stopOpacity="0.3"></stop>
                          <stop offset="100%" stopColor="currentColor" stopOpacity="0.0"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        className="text-primary"
                        d="M0,130 C60,110 100,140 160,80 C220,20 280,70 340,50 C400,30 460,90 520,40 C580,-10 640,30 700,15 L760,25 L760,160 L0,160 Z"
                        fill="url(#trafficGradient)"
                      ></path>
                      <path
                        className="text-primary stroke-current"
                        d="M0,130 C60,110 100,140 160,80 C220,20 280,70 340,50 C400,30 460,90 520,40 C580,-10 640,30 700,15 L760,25"
                        fill="none"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                      ></path>
                      <circle className="fill-primary" cx="520" cy="40" r="4"></circle>
                      <circle className="fill-primary" cx="700" cy="15" r="4"></circle>
                    </svg>
                    <div className="flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs pt-2">
                      <span>00:00 (Edge Sync)</span>
                      <span>06:00 (Batch Refresh)</span>
                      <span>12:00 (Peak Ingestion)</span>
                      <span>18:00 (ISR Revalidate)</span>
                      <span>Now (Live 2.4k rps)</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm pt-space-xs">
                    <div className="bg-surface-container p-space-sm rounded-lg flex flex-col">
                      <span className="font-label-xs text-label-xs text-on-surface-variant">Cache Hit Ratio</span>
                      <span className="font-title-md text-title-md text-on-surface">99.1%</span>
                    </div>
                    <div className="bg-surface-container p-space-sm rounded-lg flex flex-col">
                      <span className="font-label-xs text-label-xs text-on-surface-variant">99th Percentile</span>
                      <span className="font-title-md text-title-md text-on-surface">32ms</span>
                    </div>
                    <div className="bg-surface-container p-space-sm rounded-lg flex flex-col">
                      <span className="font-label-xs text-label-xs text-on-surface-variant">Total Payloads</span>
                      <span className="font-title-md text-title-md text-on-surface">14.2 GB</span>
                    </div>
                    <div className="bg-surface-container p-space-sm rounded-lg flex flex-col">
                      <span className="font-label-xs text-label-xs text-on-surface-variant">Error Rate (5xx)</span>
                      <span className="font-title-md text-title-md text-on-surface">0.001%</span>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
                  <div className="px-space-lg py-space-md flex items-center justify-between bg-surface-container-lowest">
                    <div className="flex flex-col">
                      <span className="font-title-md text-title-md text-on-surface">Endpoints Breakdown</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Realtime delivery consumption across public headless endpoints
                      </span>
                    </div>
                    <span className="px-2 py-1 rounded bg-surface-container font-label-xs text-label-xs text-on-surface">
                      Live Routing
                    </span>
                  </div>
                  <div className="w-full overflow-x-auto">
                    <table className="w-full text-left font-body-sm text-body-sm">
                      <thead className="bg-surface-container-low text-on-surface-variant font-label-xs text-label-xs uppercase tracking-wider">
                        <tr>
                          <th className="px-space-md py-2.5">Endpoint &amp; Path</th>
                          <th className="px-space-md py-2.5">Behavior / Mode</th>
                          <th className="px-space-md py-2.5">Cache Policy</th>
                          <th className="px-space-md py-2.5">24h Requests</th>
                          <th className="px-space-md py-2.5 text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-none">
                        <tr className="hover:bg-surface-container-low transition-colors">
                          <td className="px-space-md py-3 font-title-sm text-title-sm text-on-surface flex items-center gap-2">
                            <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs">
                              GET
                            </span>
                            <code>/delivery/v1/content?contentType=site-identity</code>
                          </td>
                          <td className="px-space-md py-3 text-on-surface-variant">Singleton SiteConfig</td>
                          <td className="px-space-md py-3 text-on-surface">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-xs text-label-xs">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                              300s TTL (Edge)
                            </span>
                          </td>
                          <td className="px-space-md py-3 font-medium text-on-surface">420,180 reqs</td>
                          <td className="px-space-md py-3 text-right">
                            <span className="inline-flex items-center gap-1 text-on-surface font-label-xs text-label-xs font-semibold">
                              <span className="material-symbols-outlined text-[14px]">check_circle</span>
                              200 OK
                            </span>
                          </td>
                        </tr>
                        <tr className="hover:bg-surface-container-low transition-colors bg-surface-container/20">
                          <td className="px-space-md py-3 font-title-sm text-title-sm text-on-surface flex items-center gap-2">
                            <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs">
                              GET
                            </span>
                            <code>/delivery/v1/content?contentType=article</code>
                          </td>
                          <td className="px-space-md py-3 text-on-surface-variant">Dynamic Collection</td>
                          <td className="px-space-md py-3 text-on-surface">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-xs text-label-xs">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                              60s TTL (ISR)
                            </span>
                          </td>
                          <td className="px-space-md py-3 font-medium text-on-surface">1,824,930 reqs</td>
                          <td className="px-space-md py-3 text-right">
                            <span className="inline-flex items-center gap-1 text-on-surface font-label-xs text-label-xs font-semibold">
                              <span className="material-symbols-outlined text-[14px]">check_circle</span>
                              200 OK
                            </span>
                          </td>
                        </tr>
                        <tr className="hover:bg-surface-container-low transition-colors">
                          <td className="px-space-md py-3 font-title-sm text-title-sm text-on-surface flex items-center gap-2">
                            <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs">
                              GET
                            </span>
                            <code>/delivery/v1/content/:slug</code>
                          </td>
                          <td className="px-space-md py-3 text-on-surface-variant">Slug Item Detail</td>
                          <td className="px-space-md py-3 text-on-surface">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-xs text-label-xs">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                              Stale-While-Reval
                            </span>
                          </td>
                          <td className="px-space-md py-3 font-medium text-on-surface">850,420 reqs</td>
                          <td className="px-space-md py-3 text-right">
                            <span className="inline-flex items-center gap-1 text-on-surface font-label-xs text-label-xs font-semibold">
                              <span className="material-symbols-outlined text-[14px]">check_circle</span>
                              200 OK
                            </span>
                          </td>
                        </tr>
                        <tr className="hover:bg-surface-container-low transition-colors bg-surface-container/20">
                          <td className="px-space-md py-3 font-title-sm text-title-sm text-on-surface flex items-center gap-2">
                            <span className="px-1.5 py-0.5 rounded bg-primary text-on-primary font-label-xs text-label-xs">
                              POST
                            </span>
                            <code>/delivery/v1/forms/:formKey/submissions</code>
                          </td>
                          <td className="px-space-md py-3 text-on-surface-variant">Direct Ingestion</td>
                          <td className="px-space-md py-3 text-on-surface">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-xs text-label-xs">
                              No-Cache (Bypass)
                            </span>
                          </td>
                          <td className="px-space-md py-3 font-medium text-on-surface">38 reqs</td>
                          <td className="px-space-md py-3 text-right">
                            <span className="inline-flex items-center gap-1 text-on-surface font-label-xs text-label-xs font-semibold">
                              <span className="material-symbols-outlined text-[14px]">check_circle</span>
                              201 CREATED
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="xl:col-span-4 flex flex-col gap-space-lg">
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between pb-space-xs">
                    <span className="font-title-md text-title-md text-on-surface">Next.js Integration</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container text-on-surface font-label-xs text-label-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Healthy
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-sm">
                    <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
                      <span className="font-label-xs text-label-xs text-on-surface-variant">
                        CONNECTED FRONTEND APP
                      </span>
                      <div className="flex items-center justify-between">
                        <span className="font-title-sm text-title-sm text-on-surface">kult-barber-web</span>
                        <span className="font-label-xs text-label-xs px-2 py-0.5 rounded bg-surface-container text-on-surface font-medium">
                          Rena Next.js 15
                        </span>
                      </div>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Tailwind CSS • Server Components • ISR Dynamic
                      </span>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
                      <span className="font-label-xs text-label-xs text-on-surface-variant">
                        DEPLOYMENT TARGET &amp; BRANCH
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[16px] text-on-surface">
                          source_environment
                        </span>
                        <span className="font-body-md text-body-md text-on-surface font-medium">
                          main (Production Vercel / Docker)
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-space-sm">
                      <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
                        <span className="font-label-xs text-label-xs text-on-surface-variant">
                          REVALIDATION WEBHOOK
                        </span>
                        <div className="flex items-center gap-1.5 text-on-surface font-title-sm text-title-sm">
                          <span className="w-2 h-2 rounded-full bg-primary"></span>
                          <span>200 OK</span>
                        </div>
                        <span className="font-label-xs text-label-xs text-on-surface-variant">Triggered 4m ago</span>
                      </div>
                      <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
                        <span className="font-label-xs text-label-xs text-on-surface-variant">DYNAMIC SEO ENGINE</span>
                        <div className="flex items-center gap-1.5 text-on-surface font-title-sm text-title-sm">
                          <span className="material-symbols-outlined text-[16px]">verified</span>
                          <span>Healthy</span>
                        </div>
                        <span className="font-label-xs text-label-xs text-on-surface-variant">
                          sitemap.xml &amp; robots.txt
                        </span>
                      </div>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-container-high/60 flex items-center justify-between text-on-surface">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">verified_user</span>
                        <span className="font-label-xs text-label-xs font-medium">Delivery Token SHA: 9f8a...33cd</span>
                      </div>
                      <button
                        className="text-on-surface hover:text-on-surface-variant font-label-xs text-label-xs underline"
                        type="button"
                      >
                        Rotate
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <span className="font-title-md text-title-md text-on-surface">Content Activity</span>
                    <span className="font-label-xs text-label-xs text-on-surface-variant">Realtime Audit</span>
                  </div>
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-start gap-space-sm">
                      <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface shrink-0">
                        <span className="material-symbols-outlined text-[16px]">person</span>
                      </div>
                      <div className="flex flex-col flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="font-title-sm text-title-sm text-on-surface truncate">Bambang Hermanto</span>
                          <span className="font-label-xs text-label-xs text-on-surface-variant">12m ago</span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Updated Singleton:{' '}
                          <span className="text-on-surface font-medium">Jam Buka &amp; Jadwal Reservasi</span>
                        </p>
                        <div className="mt-1 flex items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-xs text-label-xs flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            Revalidated in 18ms
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-space-sm">
                      <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface shrink-0">
                        <span className="material-symbols-outlined text-[16px]">badge</span>
                      </div>
                      <div className="flex flex-col flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="font-title-sm text-title-sm text-on-surface truncate">Rena Editorial</span>
                          <span className="font-label-xs text-label-xs text-on-surface-variant">1h ago</span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Published Article:{' '}
                          <span className="text-on-surface font-medium">"Tren Pompadour Klasik 2025"</span>
                        </p>
                        <div className="mt-1 flex items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-xs text-label-xs flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            Revalidated in 22ms
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-space-sm">
                      <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface shrink-0">
                        <span className="material-symbols-outlined text-[16px]">system_update_alt</span>
                      </div>
                      <div className="flex flex-col flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="font-title-sm text-title-sm text-on-surface truncate">Webhook Engine</span>
                          <span className="font-label-xs text-label-xs text-on-surface-variant">3h ago</span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          Auto revalidated dynamic portfolio collection cache tags
                        </p>
                        <div className="mt-1 flex items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-label-xs text-label-xs flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                            Tag: collections:services
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-[20px] text-on-surface">tune</span>
                    <div className="flex flex-col">
                      <span className="font-title-sm text-title-sm text-on-surface">Frontend ISR Settings</span>
                      <span className="font-label-xs text-label-xs text-on-surface-variant">
                        Configure stale times &amp; tags
                      </span>
                    </div>
                  </div>
                  <button
                    className="px-3 py-1.5 rounded bg-surface-container hover:bg-surface-container-high transition-colors font-label-sm text-label-sm text-on-surface font-medium"
                    type="button"
                  >
                    Manage
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
