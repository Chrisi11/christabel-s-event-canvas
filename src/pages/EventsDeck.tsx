import { CoverSlide } from "@/components/events/CoverSlide";
import { StorySlide } from "@/components/events/StorySlide";
import { SpaceSlide } from "@/components/events/SpaceSlide";
import { AudienceSlide } from "@/components/events/AudienceSlide";
import { EventFormatsSlide } from "@/components/events/EventFormatsSlide";
import { BrandCollaborationsSlide } from "@/components/events/BrandCollaborationsSlide";
import { CaseStudySlide } from "@/components/events/CaseStudySlide";
import { EntertainmentSlide } from "@/components/events/EntertainmentSlide";
import { BrettWattertonSlide } from "@/components/events/BrettWattertonSlide";
import { JamesonStocksSlide } from "@/components/events/JamesonStocksSlide";
import { EventProductionSlide } from "@/components/events/EventProductionSlide";
import { PRSupportSlide } from "@/components/events/PRSupportSlide";
import { PrivateHireSlide } from "@/components/events/PrivateHireSlide";
import { AmplificationSlide } from "@/components/events/AmplificationSlide";
import { WhyChristabelsSlide } from "@/components/events/WhyChristabelsSlide";
import { ContactSlide } from "@/components/events/ContactSlide";
import { Download } from "lucide-react";

const EventsDeck = () => {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="bg-background">
      {/* Download PDF Button */}
      <button
        onClick={handleDownloadPDF}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-charcoal border border-gold/30 text-gold rounded-sm hover:bg-gold/10 hover:border-gold/50 transition-all duration-300 font-body text-sm tracking-wide print:hidden"
        aria-label="Download as PDF"
      >
        <Download className="w-4 h-4" />
        <span className="hidden sm:inline">Download PDF</span>
      </button>

      <CoverSlide />
      <StorySlide />
      <SpaceSlide />
      <AudienceSlide />
      <EventFormatsSlide />
      <BrandCollaborationsSlide />
      <CaseStudySlide />
      <EntertainmentSlide />
      <BrettWattertonSlide />
      <JamesonStocksSlide />
      <EventProductionSlide />
      <PRSupportSlide />
      <PrivateHireSlide />
      <AmplificationSlide />
      <WhyChristabelsSlide />
      <ContactSlide />
    </div>
  );
};

export default EventsDeck;
