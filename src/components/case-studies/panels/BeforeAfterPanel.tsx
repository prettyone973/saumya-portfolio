import PhoneCropImage from "../PhoneCropImage";
import BeforeAfterCallout from "../BeforeAfterCallout";

import before1 from "../../../assets/case-studies/imobile/before-1.png";
import before2 from "../../../assets/case-studies/imobile/before-2.png";
import before3 from "../../../assets/case-studies/imobile/before-3.png";

import afterA1 from "../../../assets/case-studies/imobile/after-a1.png";
import afterA2 from "../../../assets/case-studies/imobile/after-a2.png";
import afterB1 from "../../../assets/case-studies/imobile/after-b1.png";
import afterB2 from "../../../assets/case-studies/imobile/after-b2.png";
import afterB3 from "../../../assets/case-studies/imobile/after-b3.png";
import afterC1 from "../../../assets/case-studies/imobile/after-c1.png";
import afterC2 from "../../../assets/case-studies/imobile/after-c2.png";
import afterD1 from "../../../assets/case-studies/imobile/after-d1.png";
import afterD2 from "../../../assets/case-studies/imobile/after-d2.png";
import afterD3 from "../../../assets/case-studies/imobile/after-d3.png";

const AFTER_ASPECT = 640 / 1296;

const beforePhones = [
  {
    src: before3,
    aspect: 833.571 / 1660.578,
    crop: { widthPct: 504.43, heightPct: 183.29, leftPct: -201.97, topPct: -41.53 },
    callouts: ["Inconsistent colours"],
  },
  {
    src: before2,
    aspect: 840.134 / 1660.578,
    crop: { widthPct: 494.41, heightPct: 180.89, leftPct: -197.05, topPct: -40.41 },
    callouts: ["Too many icons"],
  },
  {
    src: before1,
    aspect: 846.698 / 1660.578,
    crop: { widthPct: 491.09, heightPct: 179.56, leftPct: -194.96, topPct: -39.57 },
    callouts: ["Confusing navigation", "More cognitive load"],
  },
];

const afterGroups: { src: string; callouts?: string[] }[][] = [
  [
    { src: afterA2, callouts: ["Visually appealing"] },
    { src: afterA1, callouts: ["Less clutter"] },
  ],
  [{ src: afterB1 }, { src: afterB2, callouts: ["Consistent colours"] }, { src: afterB3 }],
  [{ src: afterC1 }, { src: afterC2 }],
  [{ src: afterD1, callouts: ["Less cognitive load"] }, { src: afterD2 }, { src: afterD3 }],
];

export default function BeforeAfterPanel() {
  return (
    <div>
      <h2 className="mb-6 font-['Instrument_Sans'] text-xl font-bold text-navy sm:mb-8 sm:text-[33px]">
        Before &amp; After
      </h2>

      <section>
        <h3 className="mb-6 font-['Instrument_Sans'] text-xl font-semibold text-clay sm:text-2xl">
          Before
        </h3>
        <div className="flex flex-wrap justify-center gap-8 sm:flex-nowrap sm:gap-10">
          {beforePhones.map((phone, i) => (
            <div key={i} className="w-full max-w-[220px] shrink-0">
              <PhoneCropImage src={phone.src} aspect={phone.aspect} crop={phone.crop} />
              {phone.callouts?.map((label) => (
                <BeforeAfterCallout key={label} label={label} />
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 sm:mt-16">
        <h3 className="mb-6 font-['Instrument_Sans'] text-xl font-semibold text-clay sm:text-2xl">
          After
        </h3>
        <div className="flex flex-col gap-10 sm:gap-12">
          {afterGroups.map((group, i) => (
            <div key={i} className="flex flex-wrap justify-center gap-8 sm:flex-nowrap sm:gap-10">
              {group.map((phone, j) => (
                <div key={j} className="w-full max-w-[220px] shrink-0">
                  <div
                    className="w-full overflow-hidden rounded-[10%]"
                    style={{ aspectRatio: AFTER_ASPECT }}
                  >
                    <img src={phone.src} alt="" className="size-full object-cover" />
                  </div>
                  {phone.callouts?.map((label) => (
                    <BeforeAfterCallout key={label} label={label} />
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
