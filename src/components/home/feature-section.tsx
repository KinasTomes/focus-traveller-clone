'use client';

interface FeatureSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  isReversed?: boolean;
  isAnimated?: boolean;
}

export const FeatureSection = ({
  title,
  description,
  imageSrc,
  imageAlt,
  isReversed = false,
  isAnimated = false
}: FeatureSectionProps) => {
  return (
    <div className={`py-12 md:py-16 ${isReversed ? 'bg-[#f7efe4]' : 'bg-[#faf3eb]'}`}>
      <div className="container-flex">
        <div className={`grid grid-cols-1 ${isReversed ? 'md:grid-cols-2' : 'md:grid-cols-2'} gap-8 md:gap-12 items-center`}>
          {/* Image Column */}
          <div className={`order-2 ${isReversed ? 'md:order-2' : 'md:order-1'} flex justify-center`}>
            {isAnimated ? (
              <img
                src={imageSrc}
                alt={imageAlt}
                className="max-w-full h-auto rounded-lg shadow-md"
                style={{ width: '300px' }}
              />
            ) : (
              <img
                src={imageSrc}
                alt={imageAlt}
                className="max-w-full h-auto rounded-lg shadow-md"
                style={{ width: '300px' }}
              />
            )}
          </div>

          {/* Content Column */}
          <div className={`order-1 ${isReversed ? 'md:order-1' : 'md:order-2'}`}>
            <h2 className="text-3xl font-semibold mb-4">{title}</h2>
            <p className="text-lg text-[#5f635e]">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
