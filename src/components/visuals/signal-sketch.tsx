export function SignalSketch() {
  return (
    <figure className="signal-sketch" aria-label="Signal flow sketch from raw pressure to calibrated cue">
      <div className="signal-sketch__header">
        <span>Signal-flow/control-system sketch</span>
        <span>Rev 01</span>
      </div>
      <svg className="signal-sketch__canvas" viewBox="0 0 620 420" role="img">
        <title>Raw pressure is calibrated into a calmer cue</title>
        <defs>
          <marker
            id="signal-arrow"
            markerHeight="12"
            markerWidth="12"
            orient="auto"
            refX="9"
            refY="6"
          >
            <path d="M0 0 L12 6 L0 12 Z" fill="currentColor" />
          </marker>
        </defs>
        <rect className="sketch-box" x="38" y="58" width="150" height="88" />
        <text x="62" y="91">raw pressure</text>
        <path className="orange-line" d="M72 116 C92 86 112 145 132 112 S160 88 176 118" />

        <path className="dashed-line" d="M190 108 C280 98 260 210 330 214" markerEnd="url(#signal-arrow)" />
        <rect className="sketch-box" x="330" y="188" width="150" height="94" />
        <text x="372" y="226">calibrate</text>
        <text className="tiny-text" x="356" y="250">dead zone + offset</text>
        <circle className="calibration-ring" cx="405" cy="235" r="34" />

        <path className="teal-line" d="M480 236 C555 250 520 330 570 336" markerEnd="url(#signal-arrow)" />
        <rect className="sketch-box" x="494" y="302" width="122" height="72" />
        <text x="530" y="333">cue</text>
        <text className="teal-text" x="524" y="354">shift / center</text>

        <path className="thin-note" d="M452 181 C500 84 555 110 590 72" />
        <text className="note-text" x="488" y="74">feedback must be calmer than the sensor</text>
        <text className="note-text" x="62" y="205">annotation: no fake metrics; show the transformation</text>
        <text className="note-text" x="330" y="306">debug surface stays visible</text>
      </svg>
    </figure>
  );
}
