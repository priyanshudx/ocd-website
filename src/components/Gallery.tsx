
import { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";


import video1 from "../assets/gallery/AQNxrVlfd7skb115IEqL82B5nbo74OpF7v7Tscy3dSEJzcfNx6JbVV6ExEUEJShcuOeY7MFcdiQ-HsI6YF7YlrIXFiviKAGo.mp4";
import video2 from "../assets/gallery/AQPEXkwB3q_EzYb-Rlwof7gY27-aYiXFR0TvvqL1C3ElRpu0YWtscEIbktkT0ZMO7DqgN53ECxxah8vX5BOGC56H9dRbfwpD.mp4";
import video3 from "../assets/gallery/AQMVpdzxKS0IVC_c2Nc6Jqx7aGmOwbn741vAq6f3fPjjF6wtbcujsI7F4vgTX63pIGDL2bVVmSUyafMJiOk8NG1JhiRwIkPU.mp4";
import video4 from "../assets/gallery/AQP5Uh5M3twa7_ErdMxotV2IB6GDpl48HXH_MTMmXfKUhdnKdH1y10PDFcDOvE1TtHBCn9-9s5dSTQ0P3viSZJWAqKw40YEK.mp4";
import video5 from "../assets/gallery/AQMfhgvScAxX-Dbob9vbTT1eZgRYs1e73Mvw1WfQUARZa8OBZx-xtdYPFcwc6U-Jxhl9rbk7iaEA3nlRY3aTiPykpCHciUtF.mp4";
import video6 from "../assets/gallery/AQMz1vOANUZN1uRgSnPsIP5eGeuwpF4Y7JVyXVqTUbsOoyyxKa6_ew38Xbtq8FIavorctRuxTj7ULPEfRwnzfSkKLLFo52YN.mp4";

const galleryVideos = [video1, video2, video3, video4, video5, video6];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [modalVideo, setModalVideo] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[var(--yellow-primary)]/10 text-[var(--yellow-primary)] mb-6">
            <span className="text-sm font-medium">Gallery</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our <span className="text-[var(--yellow-primary)]">Work</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our recent detailing projects. Play any video below or maximize for fullscreen!
          </p>
        </div>

        {/* Video tiles grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryVideos.map((src, idx) => (
            <div
              key={idx}
              className="relative aspect-[9/16] bg-black rounded-xl overflow-hidden shadow-lg group"
              style={{ maxHeight: '420px' }}
            >
              <video
                src={src}
                className="w-full h-full object-contain rounded-xl group-hover:opacity-80 transition"
                muted
                playsInline
                controls
                poster=""
              />
              <button
                className="absolute top-2 right-2 z-10 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 transition"
                title="Maximize"
                onClick={() => { setModalVideo(src); setOpen(true); }}
                type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V6a2 2 0 012-2h2m8 0h2a2 2 0 012 2v2m0 8v2a2 2 0 01-2 2h-2m-8 0H6a2 2 0 01-2-2v-2" /></svg>
              </button>
            </div>
          ))}
        </div>

        {/* Modal for video viewing */}
        <Dialog.Root open={open} onOpenChange={(v) => { setOpen(v); if (!v) setModalVideo(null); }}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80" />
            <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center">
              <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg aspect-[9/16] bg-black rounded-lg flex items-center justify-center">
                <button onClick={() => setOpen(false)} className="absolute top-2 right-2 z-10 text-white bg-black/60 rounded-full p-2 hover:bg-black/80">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                {modalVideo && (
                  <video
                    src={modalVideo}
                    className="w-full h-full object-contain rounded-lg"
                    controls
                    autoPlay
                    playsInline
                    style={{ background: 'black' }}
                  />
                )}
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  );
}