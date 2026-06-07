type RawJitterStripProps = {
  values: number[];
};

export function RawJitterStrip({ values }: RawJitterStripProps) {
  return (
    <div aria-hidden="true" className="raw-jitter">
      {values.map((value, index) => (
        <span
          className="raw-jitter__bar jitter-bar"
          key={`${index}-${value}`}
          style={{
            animationDelay: `${index * 25}ms`,
            height: `${value}%`,
          }}
        />
      ))}
    </div>
  );
}
