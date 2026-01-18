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
import { ImageSlide } from "@/components/events/ImageSlide";
import { Download } from "lucide-react";

import venueBar1 from "@/assets/venue-bar-1.jpg";
import venueLounge1 from "@/assets/venue-lounge-1.jpg";
import venueBar2 from "@/assets/venue-bar-2.jpg";
import venueFireplace from "@/assets/venue-fireplace.jpg";

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
      <ImageSlide src={venueBar1} alt="Christabel's Bar Interior" />
      <SpaceSlide />
      <ImageSlide src={venueLounge1} alt="Christabel's Lounge Area" />
      <AudienceSlide />
      <EventFormatsSlide />
      <BrandCollaborationsSlide />
      <ImageSlide src={venueBar2} alt="Christabel's Bar Detail" />
      <CaseStudySlide />
      <EntertainmentSlide />
      <BrettWattertonSlide />
      <JamesonStocksSlide />
      <ImageSlide src={venueFireplace} alt="Christabel's Fireplace Lounge" />
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
