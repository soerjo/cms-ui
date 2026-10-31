'use client';

import React, { useState } from 'react';
import { CmsHeader } from '@/components/cms/CmsHeader';

export default function FormSubmissionsPage() {
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
        breadcrumbTitle="Studio / Form Submissions"
        onRevalidate={handleRevalidate}
        isRevalidating={isRevalidating}
      />
      <main className="w-full pt-16 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <div className="p-space-lg lg:p-margin flex flex-col gap-space-lg">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center gap-space-xs text-on-surface-variant font-label-xs text-label-xs uppercase tracking-wider">
                  <span>Engine Endpoint</span>
                  <span>•</span>
                  <span className="font-semibold text-on-surface">POST /delivery/v1/forms/:formKey/submissions</span>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                  Form Submissions &amp; Leads
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                  Inbox data leads, booking appointment, dan pesan kontak masuk dari form publik web profile Rena
                  Next.js secara terpusat dengan deteksi anti-spam adaptif.
                </p>
              </div>
              <div className="flex items-center flex-wrap gap-space-xs">
                <button
                  className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container-lowest text-on-surface shadow-sm hover:bg-surface-container-low transition-colors font-label-sm text-label-sm"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  <span>Ekspor CSV</span>
                </button>
                <button
                  className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container-lowest text-on-surface shadow-sm hover:bg-surface-container-low transition-colors font-label-sm text-label-sm"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">cell_tower</span>
                  <span>Webhook (Telegram / Email)</span>
                </button>
                <button
                  className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-primary text-on-primary shadow-sm hover:bg-primary-container transition-colors font-label-sm text-label-sm"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">shield_person</span>
                  <span>AI Spam Filter</span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group">
                <div className="flex items-center justify-between">
                  <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">
                    Total Submissions
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface">
                    <span className="material-symbols-outlined text-[18px]">inbox</span>
                  </div>
                </div>
                <div className="mt-space-md flex items-baseline gap-space-xs">
                  <span className="font-headline-lg text-headline-lg text-on-surface">142</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">leads masuk</span>
                </div>
                <div className="mt-space-xs flex items-center gap-1 text-on-surface-variant font-label-xs text-label-xs">
                  <span className="text-on-surface font-semibold">+18%</span>
                  <span>vs pekan lalu</span>
                </div>
                <div className="absolute -right-6 -bottom-6 w-20 h-20 rounded-full bg-surface-container-low/40 pointer-events-none group-hover:scale-125 transition-transform"></div>
              </div>
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group">
                <div className="flex items-center justify-between">
                  <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">
                    Pending Follow-up
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-error-container flex items-center justify-center text-on-error-container">
                    <span className="material-symbols-outlined text-[18px]">pending_actions</span>
                  </div>
                </div>
                <div className="mt-space-md flex items-baseline gap-space-xs">
                  <span className="font-headline-lg text-headline-lg text-on-surface">6</span>
                  <span className="font-body-sm text-body-sm text-error font-medium">butuh respon cepat</span>
                </div>
                <div className="mt-space-xs flex items-center gap-1 text-on-surface-variant font-label-xs text-label-xs">
                  <span className="w-2 h-2 rounded-full bg-error animate-ping"></span>
                  <span>SLA rata-rata: 14 menit</span>
                </div>
              </div>
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group">
                <div className="flex items-center justify-between">
                  <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">
                    Terproses / Konfirmasi
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface">
                    <span className="material-symbols-outlined text-[18px]">task_alt</span>
                  </div>
                </div>
                <div className="mt-space-md flex items-baseline gap-space-xs">
                  <span className="font-headline-lg text-headline-lg text-on-surface">132</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">selesai &amp; sync kalender</span>
                </div>
                <div className="mt-space-xs flex items-center gap-1 text-on-surface-variant font-label-xs text-label-xs">
                  <span>93% rasio konversi leads</span>
                </div>
              </div>
              <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group">
                <div className="flex items-center justify-between">
                  <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">
                    Spam Dicegah
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface">
                    <span className="material-symbols-outlined text-[18px]">verified_user</span>
                  </div>
                </div>
                <div className="mt-space-md flex items-baseline gap-space-xs">
                  <span className="font-headline-lg text-headline-lg text-on-surface">4</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">blokir otomatis</span>
                </div>
                <div className="mt-space-xs flex items-center gap-1 text-on-surface-variant font-label-xs text-label-xs">
                  <span className="font-semibold text-on-surface">0.01%</span>
                  <span>false positive rate</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-space-xs overflow-x-auto pb-1">
              <button
                className="px-space-md py-1.5 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:text-on-surface text-label-sm font-label-sm transition-colors whitespace-nowrap shadow-sm"
                type="button"
              >
                Semua Form (142)
              </button>
              <button
                className="px-space-md py-1.5 rounded-lg bg-primary text-on-primary text-label-sm font-label-sm transition-colors whitespace-nowrap shadow-sm flex items-center gap-1.5"
                type="button"
              >
                <span>Form Booking Appointment / RSVP</span>
                <span className="px-1.5 py-0.2 rounded-full bg-primary-container text-on-primary text-label-xs font-label-xs">
                  88
                </span>
              </button>
              <button
                className="px-space-md py-1.5 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:text-on-surface text-label-sm font-label-sm transition-colors whitespace-nowrap shadow-sm"
                type="button"
              >
                Form Kontak Umum (42)
              </button>
              <button
                className="px-space-md py-1.5 rounded-lg bg-surface-container-lowest text-on-surface-variant hover:text-on-surface text-label-sm font-label-sm transition-colors whitespace-nowrap shadow-sm"
                type="button"
              >
                Newsletter Leads (12)
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              <div className="lg:col-span-5 flex flex-col gap-space-sm">
                <div className="p-space-sm rounded-xl bg-surface-container-lowest shadow-sm flex items-center gap-space-sm">
                  <div className="flex-1 flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant">
                    <span className="material-symbols-outlined text-[18px]">search</span>
                    <input
                      className="w-full bg-transparent text-on-surface font-body-sm text-body-sm outline-none placeholder:text-outline"
                      placeholder="Cari nama, email, layanan..."
                      type="text"
                    />
                  </div>
                  <button
                    className="px-space-sm py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-xs text-label-xs flex items-center gap-1 hover:bg-surface-container transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]">swap_vert</span>
                    <span>Terbaru</span>
                  </button>
                </div>
                <div className="flex flex-col gap-space-xs" id="leads-list">
                  <div
                    className="p-space-md rounded-xl bg-surface-container-lowest shadow-md transition-all cursor-pointer relative overflow-hidden"
                    data-lead-id="1"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"></div>
                    <div className="flex items-start justify-between gap-space-xs pl-space-xs">
                      <div className="flex items-center gap-space-sm min-w-0">
                        <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center font-title-sm text-title-sm text-on-surface flex-shrink-0">
                          DA
                        </div>
                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="font-title-sm text-title-sm text-on-surface truncate">Dimas Anggara</span>
                            <span className="px-1.5 py-0.5 rounded bg-error-container text-on-error-container font-label-xs text-label-xs flex-shrink-0">
                              PENDING
                            </span>
                          </div>
                          <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                            The Royal Treatment (Haircut + Beard)
                          </span>
                        </div>
                      </div>
                      <span className="font-label-xs text-label-xs text-on-surface-variant flex-shrink-0">
                        Hari ini, 10:20
                      </span>
                    </div>
                    <div className="mt-space-sm pl-space-xs flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs">
                      <span className="flex items-center gap-1 truncate">
                        <span className="material-symbols-outlined text-[14px]">event</span>
                        <span>Sabtu, 18 Nov • 15:00 WIB</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        <span>Reza Barber</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all cursor-pointer"
                    data-lead-id="2"
                  >
                    <div className="flex items-start justify-between gap-space-xs">
                      <div className="flex items-center gap-space-sm min-w-0">
                        <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center font-title-sm text-title-sm text-on-surface flex-shrink-0">
                          KS
                        </div>
                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="font-title-sm text-title-sm text-on-surface truncate">Kevin Sanjaya</span>
                            <span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-label-xs text-label-xs flex-shrink-0">
                              PROCESSED
                            </span>
                          </div>
                          <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                            Booking Haircut &amp; Beard Trim
                          </span>
                        </div>
                      </div>
                      <span className="font-label-xs text-label-xs text-on-surface-variant flex-shrink-0">Kemarin</span>
                    </div>
                    <div className="mt-space-sm flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs">
                      <span className="flex items-center gap-1 truncate">
                        <span className="material-symbols-outlined text-[14px]">event</span>
                        <span>Jumat, 17 Nov • 19:30 WIB</span>
                      </span>
                      <span>Dandy Barber</span>
                    </div>
                  </div>
                  <div
                    className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all cursor-pointer"
                    data-lead-id="3"
                  >
                    <div className="flex items-start justify-between gap-space-xs">
                      <div className="flex items-center gap-space-sm min-w-0">
                        <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center font-title-sm text-title-sm text-on-surface flex-shrink-0">
                          RP
                        </div>
                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="font-title-sm text-title-sm text-on-surface truncate">Rendra Pratama</span>
                            <span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-label-xs text-label-xs flex-shrink-0">
                              PROCESSED
                            </span>
                          </div>
                          <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                            Pertanyaan Kerjasama Brand
                          </span>
                        </div>
                      </div>
                      <span className="font-label-xs text-label-xs text-on-surface-variant flex-shrink-0">Kemarin</span>
                    </div>
                    <div className="mt-space-sm flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs">
                      <span className="flex items-center gap-1 truncate">
                        <span className="material-symbols-outlined text-[14px]">mail</span>
                        <span>rendra@pomadebrand.com</span>
                      </span>
                      <span>Form Kontak</span>
                    </div>
                  </div>
                  <div
                    className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all cursor-pointer"
                    data-lead-id="4"
                  >
                    <div className="flex items-start justify-between gap-space-xs">
                      <div className="flex items-center gap-space-sm min-w-0">
                        <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center font-title-sm text-title-sm text-on-surface flex-shrink-0">
                          BS
                        </div>
                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="font-title-sm text-title-sm text-on-surface truncate">Bimo Setiawan</span>
                            <span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-label-xs text-label-xs flex-shrink-0">
                              PROCESSED
                            </span>
                          </div>
                          <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                            Reservasi Wedding Grooming Package
                          </span>
                        </div>
                      </div>
                      <span className="font-label-xs text-label-xs text-on-surface-variant flex-shrink-0">
                        3 hari lalu
                      </span>
                    </div>
                    <div className="mt-space-sm flex items-center justify-between text-on-surface-variant font-label-xs text-label-xs">
                      <span className="flex items-center gap-1 truncate">
                        <span className="material-symbols-outlined text-[14px]">event</span>
                        <span>Minggu, 26 Nov • 08:00 WIB</span>
                      </span>
                      <span>VIP Room (5 Pax)</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between px-space-sm pt-space-xs text-on-surface-variant font-label-xs text-label-xs">
                  <span>Menampilkan 4 dari 88 pesan booking</span>
                  <div className="flex items-center gap-1">
                    <button
                      className="p-1 rounded bg-surface-container-lowest shadow-sm hover:bg-surface-container transition-colors disabled:opacity-40"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">chevron_left</span>
                    </button>
                    <button
                      className="p-1 rounded bg-surface-container-lowest shadow-sm hover:bg-surface-container transition-colors"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 flex flex-col gap-space-md">
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-lg relative">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md pb-space-sm">
                    <div className="flex items-center gap-space-md">
                      <div className="w-14 h-14 rounded-2xl bg-surface-container-low flex items-center justify-center font-headline-md text-headline-md text-on-surface">
                        DA
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-space-xs flex-wrap">
                          <span className="font-headline-sm text-headline-sm text-on-surface">Dimas Anggara</span>
                          <span className="px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-xs text-label-xs font-semibold uppercase">
                            Pending Response
                          </span>
                        </div>
                        <div className="flex items-center gap-space-sm text-on-surface-variant font-body-sm text-body-sm mt-1 flex-wrap">
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">mail</span>
                            dimas@startup.id
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">call</span>
                            +62 813-2233-4455
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <button
                        className="p-2 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors"
                        title="Print slip booking"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[18px]">print</span>
                      </button>
                      <button
                        className="p-2 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors"
                        title="Download raw payload"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[18px]">code</span>
                      </button>
                    </div>
                  </div>
                  <div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
                    <div className="flex items-center gap-space-xs font-label-xs text-label-xs text-on-surface-variant truncate">
                      <span className="px-1.5 py-0.5 rounded bg-primary text-on-primary font-bold">POST</span>
                      <span className="font-mono text-on-surface truncate">
                        /delivery/v1/forms/booking/submissions?siteKey=kult-barber
                      </span>
                    </div>
                    <span className="font-label-xs text-label-xs text-on-surface-variant whitespace-nowrap">
                      ID: sub_9983948bf8
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-sm">
                    <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider font-semibold">
                      Form Payload Data
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm p-space-md rounded-xl bg-surface-container-low/50">
                      <div className="p-space-sm rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-1">
                        <span className="font-label-xs text-label-xs text-on-surface-variant">Layanan Pilihan</span>
                        <span className="font-title-sm text-title-sm text-on-surface font-semibold">
                          The Royal Treatment
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          Haircut + Beard Treatment + Hot Towel
                        </span>
                      </div>
                      <div className="p-space-sm rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-1">
                        <span className="font-label-xs text-label-xs text-on-surface-variant">Barber Preferensi</span>
                        <div className="flex items-center gap-space-xs mt-0.5">
                          <div className="w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center font-label-xs text-label-xs">
                            RZ
                          </div>
                          <span className="font-title-sm text-title-sm text-on-surface font-semibold">
                            Master Barber Reza
                          </span>
                        </div>
                        <span className="font-label-xs text-label-xs text-on-surface-variant">
                          Shift Sore (Kult Senopati Branch)
                        </span>
                      </div>
                      <div className="p-space-sm rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-1">
                        <span className="font-label-xs text-label-xs text-on-surface-variant">Jadwal Reservasi</span>
                        <span className="font-title-sm text-title-sm text-on-surface font-semibold">
                          Sabtu, 18 Nov 2026
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          15:00 WIB (Durasi ~60 Menit)
                        </span>
                      </div>
                      <div className="p-space-sm rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-1">
                        <span className="font-label-xs text-label-xs text-on-surface-variant">
                          Metode Konfirmasi Pilihan
                        </span>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="w-2 h-2 rounded-full bg-primary"></span>
                          <span className="font-title-sm text-title-sm text-on-surface font-semibold">
                            WhatsApp Bot + Kalender
                          </span>
                        </div>
                        <span className="font-label-xs text-label-xs text-on-surface-variant">
                          Notifikasi reminder otomatis H-2 jam
                        </span>
                      </div>
                      <div className="sm:col-span-2 p-space-sm rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-1">
                        <span className="font-label-xs text-label-xs text-on-surface-variant">
                          Catatan Khusus Klien
                        </span>
                        <p className="font-body-md text-body-md text-on-surface italic">
                          “Mohon siapkan pomade aroma sandalwood dan styling matte finish.”
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <span className="font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider font-semibold">
                      Security &amp; Spam Audit
                    </span>
                    <div className="p-space-md rounded-xl bg-surface-container-low/40 flex flex-col gap-space-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
                        <div className="flex items-center gap-space-xs">
                          <span className="material-symbols-outlined text-[18px] text-on-surface">shield</span>
                          <span className="font-title-sm text-title-sm text-on-surface">
                            AI Spam Score: 0.02 (Legitimate)
                          </span>
                        </div>
                        <span className="font-label-xs text-label-xs px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-medium">
                          Verified Captcha v3
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-xs font-mono text-label-xs text-on-surface-variant pt-space-xs">
                        <div>
                          <span className="text-on-surface-variant/80">IP Source:</span>
                          <span className="text-on-surface block font-medium">103.247.112.89</span>
                        </div>
                        <div>
                          <span className="text-on-surface-variant/80">Origin Geo:</span>
                          <span className="text-on-surface block font-medium">Jakarta Selatan, ID</span>
                        </div>
                        <div>
                          <span className="text-on-surface-variant/80">Device Client:</span>
                          <span className="text-on-surface block font-medium">Mobile Safari / iOS 17.5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-space-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-sm">
                    <div className="flex items-center gap-space-xs">
                      <button
                        className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm shadow-sm hover:bg-primary-container transition-colors"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">chat</span>
                        <span>Hubungi via WhatsApp</span>
                      </button>
                      <button
                        className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container-low text-on-surface font-label-sm text-label-sm hover:bg-surface-container transition-colors"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">mail</span>
                        <span>Kirim Email</span>
                      </button>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <button
                        className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container-low text-on-surface font-label-sm text-label-sm hover:bg-surface-container transition-colors"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[16px]">done_all</span>
                        <span>Tandai Selesai</span>
                      </button>
                      <button
                        className="p-2 rounded-lg text-error hover:bg-error-container transition-colors"
                        title="Laporkan sebagai spam"
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[18px]">report</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-title-sm text-title-sm text-on-surface">Webhook Dispatch Logs</span>
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <div className="flex items-center justify-between text-label-xs font-label-xs p-space-xs rounded bg-surface-container-low">
                        <div className="flex items-center gap-1.5 truncate">
                          <span className="font-semibold text-on-surface">Telegram Bot</span>
                          <span className="text-on-surface-variant truncate">#barber-senopati-ops</span>
                        </div>
                        <span className="text-on-surface font-mono">200 OK • 120ms</span>
                      </div>
                      <div className="flex items-center justify-between text-label-xs font-label-xs p-space-xs rounded bg-surface-container-low">
                        <div className="flex items-center gap-1.5 truncate">
                          <span className="font-semibold text-on-surface">Resend Mailer</span>
                          <span className="text-on-surface-variant truncate">dimas@startup.id</span>
                        </div>
                        <span className="text-on-surface font-mono">200 OK • 240ms</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-title-sm text-title-sm text-on-surface">Frontend Lead Stream</span>
                      <span className="font-label-xs text-label-xs text-on-surface-variant">Live Socket</span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Setiap kali formulir RSVP disubmit, data tersanitasi secara otomatis diteruskan ke queue
                      revalidasi agar ketersediaan slot jam barber terupdate secara real-time.
                    </p>
                    <div className="flex items-center gap-space-xs font-label-xs text-label-xs text-on-surface font-medium">
                      <span className="material-symbols-outlined text-[16px]">verified</span>
                      <span>Next.js Server Action Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
