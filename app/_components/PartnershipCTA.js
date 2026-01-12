"use client";

import { useParams } from "next/navigation";
import {
  EnvelopeIcon,
  PhoneIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";

const PARTNERSHIP_COPY = {
  id: {
    title: "Bangun Kemitraan Strategis dengan KIWI",
    description:
      "Kami siap menjadi mitra terpercaya dalam mengelola aset bermasalah dengan cara profesional, transparan, dan berkelanjutan.",
    labels: {
      email: "Email",
      phone: "Telepon",
      office: "Kantor",
    },
    officeAddress: "Treasury Tower Lt. 31, Jakarta",
    primaryButton: "Jadwalkan Diskusi Portofolio",
    secondaryButton: "Kirim Proposal Awal",
  },
  en: {
    title: "Build a Strategic Partnership with KIWI",
    description:
      "We are ready to become your trusted partner in managing distressed assets through professional, transparent, and sustainable solutions.",
    labels: {
      email: "Email",
      phone: "Phone",
      office: "Office",
    },
    officeAddress: "Treasury Tower, 31st Floor, Jakarta",
    primaryButton: "Schedule a Portfolio Discussion",
    secondaryButton: "Submit an Initial Proposal",
  },
};

const CONTACT = {
  whatsappNumber: "622150928827",
  whatsappMessage: {
    id: "Halo KIWI, saya ingin menjadwalkan diskusi terkait portofolio. Mohon informasinya. Terima kasih.",
    en: "Hello KIWI, I would like to schedule a portfolio discussion. Please advise. Thank you.",
  },
  email: "mitra@kiwi.co.id",
};



export default function PartnershipCTA() {
  const { lang } = useParams();
  const t = PARTNERSHIP_COPY[lang] || PARTNERSHIP_COPY.id;

  return (
    <section className="w-full py-20 px-6 bg-gradient-to-br from-[#0B1A3A] via-[#0F255C] to-[#09142E] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t.title}
        </h2>

        <p className="text-base md:text-lg text-gray-200 max-w-3xl mx-auto mb-12">
          {t.description}
        </p>

        <div
          className="
            grid grid-cols-1 md:grid-cols-3 gap-6
            bg-white/10 backdrop-blur-md
            rounded-2xl p-6 md:p-8
            mb-12
          "
        >
          <div className="flex flex-col items-center gap-2">
            <EnvelopeIcon className="w-6 h-6 text-primary-300" />
            <span className="text-sm text-gray-300">{t.labels.email}</span>
            <a
              href={`mailto:${CONTACT.email}`}
              className="font-medium hover:underline"
            >
              {CONTACT.email}
            </a>
          </div>

          <div className="flex flex-col items-center gap-2">
            <PhoneIcon className="w-6 h-6 text-primary-300" />
            <span className="text-sm text-gray-300">{t.labels.phone}</span>
            <a
              href={`https://wa.me/${CONTACT.phone}?text=${encodeURIComponent(
                CONTACT.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
            >
              +62 21 509 28827
            </a>
          </div>


          <div className="flex flex-col items-center gap-2">
            <BuildingOffice2Icon className="w-6 h-6 text-primary-300" />
            <span className="text-sm text-gray-300">{t.labels.office}</span>
            <span className="font-medium text-center">
              {t.officeAddress}
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
              CONTACT.whatsappMessage[lang] || CONTACT.whatsappMessage.id
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-8 py-4 rounded-full
              bg-primary-950 text-primary-0 font-semibold
              hover:bg-yellow-300 transition
              text-center
            "
          >
            {t.primaryButton}
          </a>


          <a
            href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(
              "Proposal Kemitraan – PT KIWI"
            )}&body=${encodeURIComponent(
              "Halo PT KIWI,\n\nKami tertarik untuk mengajukan proposal kemitraan awal.\n\nTerima kasih."
            )}`}
            className="
              px-8 py-4 rounded-full
              bg-white/10 text-white font-semibold
              border border-white/30
              hover:bg-white/20 transition
              text-center
            "
          >
            {t.secondaryButton}
          </a>

        </div>
      </div>
    </section>
  );
}
