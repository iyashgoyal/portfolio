import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles} overflow-hidden`}>
      <Image
        src={imgSrc}
        fill
        priority
        alt="dev image"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: 'contain', objectPosition: 'center', overflow: 'hidden' }}
      />
    </div>
  );
};

export default DevImg;
