import UserFlowDiagram from "../UserFlowDiagram";

export default function UserFlowPanel() {
  return (
    <div>
      <h2 className="mb-10 font-['Instrument_Sans'] text-xl font-bold text-navy sm:text-[33px]">
        User Flow
      </h2>
      <UserFlowDiagram />
    </div>
  );
}
