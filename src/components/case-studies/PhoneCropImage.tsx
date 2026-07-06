type Props = {
  src: string;
  aspect: number;
  crop: { widthPct: number; heightPct: number; leftPct: number; topPct: number };
};

export default function PhoneCropImage({ src, aspect, crop }: Props) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-[10%]"
      style={{ aspectRatio: aspect }}
    >
      <img
        src={src}
        alt=""
        className="absolute max-w-none"
        style={{
          width: `${crop.widthPct}%`,
          height: `${crop.heightPct}%`,
          left: `${crop.leftPct}%`,
          top: `${crop.topPct}%`,
        }}
      />
    </div>
  );
}
