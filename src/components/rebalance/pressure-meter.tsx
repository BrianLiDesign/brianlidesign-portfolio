type PressureMeterProps = {
  label: string;
  value: number;
  tone: "left" | "right";
};

export function PressureMeter({ label, value, tone }: PressureMeterProps) {
  return (
    <div className="pressure-meter">
      <div className="pressure-meter__label">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="pressure-meter__track">
        <span
          className={`pressure-meter__fill pressure-meter__fill--${tone}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
