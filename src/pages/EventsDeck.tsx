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

import venueBar1 from "@/assets/venue-bar-1.jpg";
import venueLounge1 from "@/assets/venue-lounge-1.jpg";
import venueBar2 from "@/assets/venue-bar-2.jpg";
import venueFireplace from "@/assets/venue-fireplace.jpg";

const EventsDeck = () => {
  return (
    <div className="bg-background">
      <CoverSlide />
      <StorySlide />
      <ImageSlide src={venueBar1} alt="Christabel's Bar Interior" />
      <SpaceSlide />
      <ImageSlide src={venueLounge1} alt="Christabel's Lounge Area" />
      <AudienceSlide />
      <EventFormatsSlide />
      <BrandCollaborationsSlide />
      <CaseStudySlide />
      <EntertainmentSlide />
      <ImageSlide src={venueBar2} alt="Christabel's Bar Detail" />
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
