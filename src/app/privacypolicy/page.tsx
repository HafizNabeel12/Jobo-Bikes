"use client";

import React, { useState } from "react";

const sections = [
  {
    title: "1. Behandlingsansvarlig",
    content: `Det er Sykkellageret AS (org.nr. [sett inn org.nr]) som er behandlingsansvarlig for personopplysninger som behandles. VÃ¥r registrerte adresse er [sett inn adresse], Norge. SpÃ¸rsmÃ¥l om personvern kan sendes til support@sykkellageret.no.`,
  },
  {
    title: "2. Innsamling og behandling av personopplysninger",
    content: `Vi samler inn personopplysninger nÃ¥r du handler hos oss, registrerer deg for nyhetsbrev, bruker nettsiden vÃ¥r eller kommuniserer med oss. Dette kan inkludere:\n- Navn, e-post, telefonnummer\n- Leverings- og fakturaadresse\n- Betalingsinformasjon (via sikre tredjepartslÃ¸sninger)\n- IP-adresse og tekniske data (gjennom cookies)\n- KjÃ¸pshistorikk og bruk av nettstedet`,
  },
  {
    title: "3. FormÃ¥l og lovgrunnlag",
    content: `Vi behandler opplysninger for Ã¥:\n- Oppfylle kjÃ¸psavtaler (ordrebehandling, levering, kundeservice)\n- Overholde juridiske forpliktelser (bokfÃ¸ring, forbrukerrettigheter)\n- Gi kundeservice, hÃ¥ndtere reklamasjoner og returer\n- Sende nyhetsbrev og tilbud dersom du har gitt samtykke\n- Forbedre nettsiden og markedsfÃ¸ringen gjennom analyse (kun med samtykke)`,
  },
  {
    title: "4. Informasjonskapsler",
    content: `Vi bruker cookies for nÃ¸dvendige funksjoner (handlekurv, innlogging), analyse og markedsfÃ¸ring. Samtykke til ikke-nÃ¸dvendige cookies administreres via vÃ¥rt cookie-banner. Du kan nÃ¥r som helst endre eller trekke tilbake samtykket ditt.`,
  },
  {
    title: "5. Bruk av tredjeparter og overfÃ¸ring av data",
    content: `Vi samarbeider med tredjepartsleverandÃ¸rer for betaling (f.eks. Vipps, Klarna), frakt (f.eks. PostNord, Bring) og markedsfÃ¸ring (f.eks. Google, Meta). Disse mottar kun nÃ¸dvendige data for Ã¥ utfÃ¸re sine tjenester. Ved overfÃ¸ring utenfor EU/EÃ˜S benyttes EUs standardkontrakter (SCC).`,
  },
  {
    title: "6. Lagring og sletting",
    content: `- Ordre- og kjÃ¸psdata lagres minimum 5 Ã¥r i henhold til bokfÃ¸ringsloven.\n- MarkedsfÃ¸ringssamtykke lagres maks 24 mÃ¥neder etter siste aktivitet.\n- Supporthenvendelser slettes normalt innen 12 mÃ¥neder.\n- Data slettes nÃ¥r formÃ¥let opphÃ¸rer, med mindre lov krever videre lagring.`,
  },
  {
    title: "7. Sikkerhet",
    content: `Vi beskytter dataene dine med SSL-kryptering, brannmurer, tilgangskontroll og regelmessige sikkerhetsrutiner. Kun autoriserte personer har tilgang til personopplysninger.`,
  },
  {
    title: "8. Dine rettigheter",
    content: `Du har rett til innsyn, retting, sletting, begrensning av behandling, dataportabilitet og Ã¥ trekke tilbake samtykke. Du kan klage til Datatilsynet dersom du mener vi bryter regelverket.`,
  },
  {
    title: "9. Kontakt",
    content: `For spÃ¸rsmÃ¥l om personvern eller for Ã¥ utÃ¸ve dine rettigheter, kontakt oss pÃ¥ support@sykkellageret.no.`,
  },
];

const PrivacyPolicy = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 dark:text-white mt-24">
          PersonvernvilkÃ¥r
        </h1>
        <p className="text-center text-gray-500 mt-3 text-sm">
          Sist oppdatert: 24. september 2025
        </p>

        {/* Accordion */}
        <div className="mt-10 space-y-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleSection(index)}
                className="w-full flex justify-between items-center px-5 py-3 font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                {section.title}
                <span className="text-xl">
                  {openIndex === index ? "âˆ’" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
