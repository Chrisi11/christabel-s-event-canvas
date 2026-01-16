import { CoverSlide } from "@/components/events/CoverSlide";
import { StorySlide } from "@/components/events/StorySlide";
import { SpaceSlide } from "@/components/events/SpaceSlide";
import { AudienceSlide } from "@/components/events/AudienceSlide";
import { EventFormatsSlide } from "@/components/events/EventFormatsSlide";
import { BrandCollaborationsSlide } from "@/components/events/BrandCollaborationsSlide";
import { CaseStudySlide } from "@/components/events/CaseStudySlide";
import { EntertainmentSlide } from "@/components/events/EntertainmentSlide";
import { BeverageDirectorSlide } from "@/components/events/BeverageDirectorSlide";
import { ProductionSlide } from "@/components/events/ProductionSlide";
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
      <BeverageDirectorSlide />
      <ProductionSlide />
      <PrivateHireSlide />
      <AmplificationSlide />
      <WhyChristabelsSlide />
      <ContactSlide />
    </div>
  );
};

export default EventsDeck;
