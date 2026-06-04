type RawJitterStripProps = {
  values: number[];
};

export function RawJitterStrip({ values }: RawJitterStripProps) {
  return (
    <div aria-hidden="true" className="raw-jitter">
      {values.map((value, index) => (
        <span
          className="raw-jitter__bar"
          key={`${index}-${value}`}
          style={{ height: `${value}%` }}
        />
      ))}
    </div>
  );
}
