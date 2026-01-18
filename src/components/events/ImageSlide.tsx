import { SectionWrapper } from "./SectionWrapper";

interface ImageSlideProps {
  src: string;
  alt: string;
}

export const ImageSlide = ({ src, alt }: ImageSlideProps) => {
  return (
    <SectionWrapper className="bg-background p-0">
      <div className="w-full h-full flex items-center justify-center">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
    </SectionWrapper>
  );
};
