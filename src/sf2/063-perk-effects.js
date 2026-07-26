// 063-perk-effects.js
// Domain: audio  |  11 class(es)  |  tree root(s): Pe, dy, Pk, Cx, ey, nc
// Edit here. Run `npm run build` to reassemble the full bundle.
  class Pe {
    constructor(a, b) {
      this.n = a;
      this.type = b;
      this.inputs = [];
      this.output = null;
    }
    B() {
      this.n = this.output = this.inputs = null;
    }
    connect(a) {
      this.output = a;
      a.inputs.push(this);
      this.n.disconnect();
      this.n.connect(a.n);
    }
    append(a) {
      J.remove(this.output.inputs, this);
      a.connect(this.output);
      this.connect(a);
    }
  }
  Pe.g = "4B7";
  Object.assign(Pe.prototype, { j: Pe });
  class Ds extends Pe {
    constructor() {
      super(La.context.destination, 8);
    }
  }
  Ds.g = "4B8";
  Ds.u = Pe;
  Object.assign(Ds.prototype, { j: Ds });
  class Fs extends Pe {
    constructor() {
      super(La.context.createBufferSource(), 0);
    }
    B() {
      this.n.onended = null;
      super.B();
    }
    play(a, b, c, d) {
      let e = this.n;
      e.buffer = a;
      e.loop = b;
      e.onended = d;
      e.start(0, c);
    }
    stop(a) {
      a == null && (a = 0);
      this.n.stop(a);
    }
  }
  Fs.g = "4B9";
  Fs.u = Pe;
  Object.assign(Fs.prototype, { j: Fs });
  class ji extends Pe {
    constructor() {
      super(La.context.createGain(), 2);
    }
    ala(a) {
      this.n.gain.value = a;
    }
    hmb(a, b) {
      let c = La.context.currentTime,
        d = this.n;
      d.gain.cancelScheduledValues(0);
      d.gain.linearRampToValueAtTime(a, c + b);
    }
  }
  ji.g = "4BA";
  ji.u = Pe;
  Object.assign(ji.prototype, { j: ji });
  class Es extends Pe {
    constructor() {
      super(La.context.createStereoPanner(), 1);
    }
    fc(a) {
      let b = this.n;
      b.pan.cancelScheduledValues(0);
      b.pan.setTargetAtTime(a, La.context.currentTime, 0.005);
    }
  }
  Es.g = "4BB";
  Es.u = Pe;
  Object.assign(Es.prototype, { j: Es });
  class dy {
    constructor(a, b) {
      this.offset = 0;
      this.loop = !1;
      this.Pb = a;
      this.audio = b;
    }
    B() {
      let a = this.lI;
      a: for (; a != null; ) {
        let b = a.output;
        switch (a.type) {
          case 0:
            this.lI.stop(0);
            break;
          case 1:
          case 2:
            break;
          default:
            break a;
        }
        J.remove(a.output.inputs, a);
        a.n.disconnect();
        a.B();
        a = b;
      }
      this.Pb.Nhb(this);
      this.Pb = this.audio = this.lI = null;
    }
    play() {
      this.lI = new Fs();
      let a = this.Pb;
      this.lI.connect(this.audio.yR ? a.BBa() : a.CBa());
      this.startTime = La.context.currentTime;
      this.lI.play(
        this.audio.data,
        this.loop,
        this.offset,
        w(this, this.onended),
      );
    }
    stop(a) {
      a == null && (a = 0);
      this.stopped ||
        ((this.stopped = !0), this.lI.stop(La.context.currentTime + a));
    }
    tt() {
      return (
        (this.offset + (La.context.currentTime - this.startTime)) %
        this.audio.data.duration
      );
    }
    G0() {
      return this.tt() / this.audio.data.duration;
    }
    onended() {
      this.B();
    }
  }
  dy.g = "4BC";
  Object.assign(dy.prototype, { j: dy });
  class Pk {
    constructor(a, b, c, d) {
      this.id = a;
      this.name = b;
      this.min = c;
      this.max = d;
    }
    static o3(a) {
      a = new cd(a);
      let b = [],
        c = 0,
        d = a.ie();
      for (; c < d; ) {
        c++;
        let e = "",
          f = 0,
          g = a.ie();
        for (; f < g; ) {
          f++;
          let h = a.fa();
          e += String.fromCodePoint(h);
        }
        b.push(new Pk(a.ie(), e, a.I4(), a.I4()));
      }
      return b;
    }
  }
  Pk.g = "4BD";
  Object.assign(Pk.prototype, { j: Pk });
  class Cx {
    constructor(a, b) {
      b == null && (b = 0.5);
      var c = La.context;
      let d = c.currentTime,
        e = c.createGain();
      e.gain.setValueAtTime(b, d);
      e.gain.exponentialRampToValueAtTime(1e-5, d + b);
      e.connect(c.destination);
      c = c.createOscillator();
      c.type = "sine";
      c.frequency.value = a;
      c.connect(e);
      c.start(d);
      c.stop(d + b + 0.01);
    }
  }
  Cx.g = "4BE";
  Object.assign(Cx.prototype, { j: Cx });
  class ey {
    constructor(a) {
      this.UK = [];
      this.id = a;
      this.state = 0;
      this.cj = !1;
      this.nK = 0;
      this.e2 = !1;
      this.UK = [];
    }
    reset() {
      this.state = 0;
      this.cj = !1;
      this.nK = 0;
      this.e2 = !1;
      this.UK = [];
    }
    Eb() {
      return this.nK == 1;
    }
    yh() {
      return this.e2;
    }
    Xe() {
      return this.nK > 1;
    }
    yMa(a) {
      this.UK.push(a);
    }
    update() {
      this.e2 = !1;
      let a = 0,
        b = this.UK;
      for (; a < b.length; )
        switch (b[a++]) {
          case 1:
            this.cj = !0;
            this.nK = 0;
            break;
          case 3:
            ((this.cj = !1), (this.e2 = !0), (this.nK = 0));
        }
      for (this.cj && this.nK++; this.UK.length > 0; ) this.UK.pop();
    }
  }
  ey.g = "4BF";
  Object.assign(ey.prototype, { j: ey });
  class nc {
    constructor() {
      this.state = null;
      this.enabled = !0;
    }
    GF(a) {
      this.enabled = a;
    }
    h4() {}
  }
  nc.g = "4C1";
  Object.assign(nc.prototype, { j: nc });
  class rf extends nc {
    constructor() {
      super();
      this.Dgb = new fb();
      this.Egb = new fb();
      this.supported = "getGamepads" in navigator;
      this.state = new Gs();
      this.Lp = [];
      this.cia = 0;
      this.Qs();
    }
    B() {}
    JQ() {
      return 4;
    }
    h4() {
      if (this.supported)
        for (var a = va.navigator.getGamepads(), b = 0; b < a.length; ) {
          var c = a[b];
          ++b;
          if (c == null) continue;
          let g = c.index;
          for (var d = c.buttons, e = 0, f = d.length; e < f; ) {
            let h = e++,
              k = d[h].pressed,
              l = this.Lp[g][h];
            k && !l && this.state.ul(h);
            l && !k && this.state.release(h);
            this.Lp[g][h] = k;
          }
          c = c.axes;
          for (d = 0; d < 2; )
            ((f = d++),
              (e = c[f]),
              (this.state.BYa[f] = e),
              (f = 100 + f * 2),
              Math.abs(e) > rf.Y6
                ? e < -rf.Y6
                  ? this.Lp[g][f] || ((this.Lp[g][f] = !0), this.state.ul(f))
                  : e > rf.Y6 &&
                    !this.Lp[g][f + 1] &&
                    ((this.Lp[g][f + 1] = !0), this.state.ul(f + 1))
                : (this.Lp[g][f] &&
                    ((this.Lp[g][f] = !1), this.state.release(f)),
                  this.Lp[g][f + 1] &&
                    ((this.Lp[g][f + 1] = !1), this.state.release(f + 1))));
        }
    }
    k5a(a) {
      this.Lp[a.gamepad.index] = [];
      this.Dgb.notify(a.gamepad.index);
      this.cia++;
    }
    l5a(a) {
      this.Lp[a.gamepad.index] = null;
      this.Egb.notify(a.gamepad.index);
      this.cia--;
    }
    Qs() {
      window.addEventListener("gamepadconnected", w(this, this.k5a));
      window.addEventListener("gamepaddisconnected", w(this, this.l5a));
    }
  }
  rf.g = "4C2";
  rf.u = nc;
  Object.assign(rf.prototype, { j: rf });
