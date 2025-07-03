const filter = new Tone.Filter(800, "lowpass");
const feedbackDelay = new Tone.FeedbackDelay({
    delayTime: 0.25,
    feedback: 0.5,
    wet: 0.5,
});
const limiter = new Tone.Limiter(-25)
const filter2 = new Tone.Filter(400,"lowpass");
const filter3 = new Tone.Filter(400,"lowpass");
const reverb = new Tone.Reverb({
    decay: 5,
    preDelay: 1,
    wet: 0.8
});

filter.connect(feedbackDelay);
filter2.connect(reverb);

const synth = new Tone.PolySynth({
  maxPolyphony: 8, // 동시 발음 수 제한
  voice: Tone.Synth, // 사용할 보이스 타입 (기본은 Synth)
  volume: -15,
  options: {
    oscillator: {
      type: 'square'
    },
    envelope: {
      attack: 0.1,
      decay: 0,
      sustain: 1,
      release: 0
    }
  }
});

const synth2 = new Tone.PolySynth({
  maxPolyphony: 8, // 동시 발음 수 제한
  voice: Tone.Synth, // 사용할 보이스 타입 (기본은 Synth)
  volume: 0,
  options: {
    oscillator: {
      type: 'sawtooth' 
    },
    envelope: {
      attack: 5,
      decay: 0.2,
      sustain: 0.5,
      release: 15
    }
  }
});

const synth3 = new Tone.PolySynth({
  maxPolyphony: 8, // 동시 발음 수 제한
  voice: Tone.Synth, // 사용할 보이스 타입 (기본은 Synth)
  volume: 0,
  options: {
    oscillator: {
      type: 'triangle' 
    },
    envelope: {
      attack: 5,
      decay: 0.2,
      sustain: 0.5,
      release: 15
    }
  }
});

synth.chain(limiter, Tone.Destination);
synth2.chain(filter2, reverb,limiter, Tone.Destination);
synth3.chain(filter3, reverb,limiter, Tone.Destination);