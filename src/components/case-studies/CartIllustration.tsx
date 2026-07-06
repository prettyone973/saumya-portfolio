import base from "../../assets/case-studies/sizzle/cart-illustration-base.svg";
import piece1 from "../../assets/case-studies/sizzle/cart-illustration-1.svg";
import piece2 from "../../assets/case-studies/sizzle/cart-illustration-2.svg";
import piece3 from "../../assets/case-studies/sizzle/cart-illustration-3.svg";
import piece4 from "../../assets/case-studies/sizzle/cart-illustration-4.svg";

const imgClass = "absolute inset-0 block h-full w-full max-w-none";

export default function CartIllustration() {
  return (
    <div className="relative aspect-[316/377.586] w-full max-w-[316px] shrink-0">
      <div className="absolute inset-[26.5%_71.22%_0_0]">
        <img src={base} alt="" className={imgClass} />
      </div>
      <div className="absolute inset-[21.85%_12.18%_47%_43.35%]">
        <img src={piece1} alt="" className={imgClass} />
      </div>
      <div className="absolute inset-[0_9.2%_89.62%_67.18%]">
        <img src={piece2} alt="" className={imgClass} />
      </div>
      <div className="absolute inset-[14.82%_0.04%_75.92%_73.71%]">
        <img src={piece3} alt="" className={imgClass} />
      </div>
      <div className="absolute inset-[8.67%_41.39%_82.66%_34.48%]">
        <img src={piece4} alt="" className={imgClass} />
      </div>
    </div>
  );
}
