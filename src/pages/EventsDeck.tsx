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

const EventsDeck = () => {
  return (
    <div className="bg-background">
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
