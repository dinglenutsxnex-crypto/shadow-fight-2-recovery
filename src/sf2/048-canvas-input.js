// 048-canvas-input.js
// Domain: renderer-canvas  |  6 class(es)  |  tree root(s): sd, Pf, tq, qc, Pj, jd
// Edit here. Run `npm run build` to reassemble the full bundle.
  class sd {
    constructor(a) {
      this.type = a;
      this.L = null;
      this.Oc = 0;
    }
    set() {}
    mca() {
      return this;
    }
  }
  sd.g = "320";
  Object.assign(sd.prototype, { j: sd });
  class Pf {
    static w0a() {
      let a = 0;
      for (; a < 6; ) {
        let b = Pf.f6[a++];
        for (; b.length > 0; ) b.pop();
      }
    }
    static Mlb(a) {
      Pf.f6 == null && Pf.Jbb();
      let b = Pf.f6;
      if (a.parent != null) {
        var c = a;
        let d = [];
        for (; c.parent != null; ) (d.push(c.parent), (c = c.parent));
        c = 0;
        let e = d.length;
        for (; c < e; ) {
          ++c;
          let f = d.pop().Zk;
          for (; f != null; ) (b[f.state.type].push(f.state), (f = f.next));
        }
      }
      for (a = a.Zk; a != null; ) (b[a.state.type].push(a.state), (a = a.next));
      return b;
    }
    static Jbb() {
      Pf.f6 = Array(6);
      let a = 0;
      for (; a < 6; ) Pf.f6[a++] = [];
    }
  }
  Pf.g = "321";
  class tq {
    constructor(a) {
      this.state = a;
    }
  }
  tq.g = "322";
  Object.assign(tq.prototype, { j: tq });
  class qc {
    constructor(a, b, c, d) {
      d == null && (d = !1);
      this.CPa = 0;
      this.data = null;
      this.data = a;
      this.width = b;
      this.height = c;
      this.ocb = d;
    }
    B() {
      if (this.data != null) {
        try {
          this.data instanceof HTMLImageElement
            ? (this.data.src =
                "data:image/gif;base64,vmwareR0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")
            : this.data instanceof HTMLCanvasElement
              ? ((this.data.width = 1), (this.data.height = 1))
              : this.data instanceof ImageBitmap && this.data.close();
        } catch (a) {}
        this.data = null;
        this.width = this.height = 0;
      }
    }
    getContext() {
      return this.data.getContext("2d", null);
    }
    static init(a, b) {
      let c = window.document.createElement("canvas");
      c.width = a;
      c.height = b != null ? b : a;
      return new qc(c, a, b != null ? b : a);
    }
    static load(a) {
      if ($y) {
        var b = new Gd(),
          c = Qz++;
        ny.v[c] = b;
        c = { src: a, id: c, flipY: qc.flipY };
        typeof a == "string" ? ni.postMessage(c) : ni.postMessage(c, [a]);
        a = b.ef;
      } else a = Gz(a, qc.flipY);
      return a;
    }
  }
  qc.g = "323";
  Object.assign(qc.prototype, { j: qc });
  class Pj {}
  Pj.g = "324";
  Pj.Ei = !0;
  Object.assign(Pj.prototype, { j: Pj });
  class jd {
    constructor() {
      this.v = {};
    }
    get(a) {
      return this.v[a];
    }
    remove(a) {
      if (!this.v.hasOwnProperty(a)) return !1;
      delete this.v[a];
      return !0;
    }
    keys() {
      let a = [];
      for (var b in this.v) this.v.hasOwnProperty(b) && a.push(+b);
      return new pf(a);
    }
    iterator() {
      return {
        Kmb: this.v,
        kFa: this.keys(),
        yd: function () {
          return this.kFa.yd();
        },
        next: function () {
          let a = this.kFa.next();
          return this.Kmb[a];
        },
      };
    }
    rFa() {
      return new Uw(this);
    }
  }
  jd.g = "325";
  jd.Rb = [Pj];
  Object.assign(jd.prototype, { j: jd });
