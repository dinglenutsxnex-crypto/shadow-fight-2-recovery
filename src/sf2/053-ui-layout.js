// 053-ui-layout.js
// Domain: ai  |  49 class(es)  |  tree root(s): gx, fx, Pb, hx, Yj, ix, jx, kx, lx, xq, yq, mx, md, Ps, te, nx, Dd, Uh, px, qx, rx, sx, ak, Os, ne, ox, wc, Lq, Mq, Nq, qi, Xs, Iy, Jy, Oq, Pq, Ky, Ly, Dg, Ke, sd
// Edit here. Run `npm run build` to reassemble the full bundle.
  class gx {
    constructor(a, b, c) {
      this.x = a;
      this.y = b;
      this.scale = c;
    }
  }
  gx.g = "35F";
  Object.assign(gx.prototype, { j: gx });
  class fx {
    constructor(a, b, c, d) {
      this.value = a;
      this.nP = b;
      this.image = c;
      this.color = d;
    }
  }
  fx.g = "360";
  Object.assign(fx.prototype, { j: fx });
  var Th = (bg["gfx.effect.TileMode"] = {
    hG: !0,
    bs: null,
    YU: { xj: "EContinuous", Ag: 0, zh: "gfx.effect.TileMode", toString: Ra },
    Rna:
      ((T = function (a) {
        return { Ag: 1, stretch: a, zh: "gfx.effect.TileMode", toString: Ra };
      }),
      (T.xj = "EAdaptive"),
      (T.iG = ["stretch"]),
      T),
  });
  Th.bs = [Th.YU, Th.Rna];
  var Jc = (bg["gfx.effect.FillMode"] = {
    hG: !0,
    bs: null,
    mo: { xj: "EHorizontal", Ag: 0, zh: "gfx.effect.FillMode", toString: Ra },
    ZU: {
      xj: "EHorizontalReverse",
      Ag: 1,
      zh: "gfx.effect.FillMode",
      toString: Ra,
    },
    xQa: { xj: "EVertical", Ag: 2, zh: "gfx.effect.FillMode", toString: Ra },
    yQa: {
      xj: "EVerticalReverse",
      Ag: 3,
      zh: "gfx.effect.FillMode",
      toString: Ra,
    },
  });
  Jc.bs = [Jc.mo, Jc.ZU, Jc.xQa, Jc.yQa];
  var vc = (bg["gfx.effect.DrawMode"] = {
    hG: !0,
    bs: null,
    Sna: { xj: "ENormal", Ag: 0, zh: "gfx.effect.DrawMode", toString: Ra },
    wM:
      ((T = function (a, b) {
        return {
          Ag: 1,
          rect: a,
          mode: b,
          zh: "gfx.effect.DrawMode",
          toString: Ra,
        };
      }),
      (T.xj = "ESliced"),
      (T.iG = ["rect", "mode"]),
      T),
    wQa:
      ((T = function (a) {
        return { Ag: 2, mode: a, zh: "gfx.effect.DrawMode", toString: Ra };
      }),
      (T.xj = "ETiled"),
      (T.iG = ["mode"]),
      T),
    lo:
      ((T = function (a, b) {
        return {
          Ag: 3,
          mode: a,
          amount: b,
          zh: "gfx.effect.DrawMode",
          toString: Ra,
        };
      }),
      (T.xj = "EFilled"),
      (T.iG = ["mode", "amount"]),
      T),
  });
  vc.bs = [vc.Sna, vc.wM, vc.wQa, vc.lo];
  class le extends Pb {
    constructor(a, b) {
      super();
      this.page = this.qc = null;
      this.Pc = new Ec(0, 0, 0, 0);
      this.frame = null;
      this.Sw = this.QA = 1;
      this.offsetY = this.offsetX = 0;
      this.flipY = this.flipX = !1;
      this.mode = vc.Sna;
      this.flags = 1;
      this.color = new H(1, 1, 1, 1);
      this.B5(a, b);
      this.hj = 0;
    }
    Esb(a, b) {
      this.QA = a;
      this.Sw = b;
      this.flags = (this.flags & -3) | ((a != 1 ? 1 : 0) * 2);
      this.flags = (this.flags & -5) | ((b != 1 ? 1 : 0) * 4);
    }
    B5(a, b) {
      this.qc = a;
      b != null
        ? this.hMa(b)
        : ((b = this.Pc),
          (b.x = 0),
          (b.y = 0),
          (b.w = a.width),
          (b.v = a.height),
          (this.page = a),
          (this.frame = null));
      this.state = a.id;
    }
    Brb(a) {
      if (this.frame == null || this.frame.id != a)
        for (var b = this.qc; b != null; ) {
          var c = b.re.kt[a];
          if (c != null) {
            this.page = b;
            this.frame = c;
            a = this.Pc;
            c = c.Pc;
            a.x = c.x;
            a.y = c.y;
            a.w = c.w;
            a.v = c.v;
            break;
          }
          b = b.nextPage;
        }
    }
    hMa(a) {
      if (this.frame != null && this.frame.name == a) return this.frame;
      let b = this.qc;
      for (; b != null; ) {
        var c = b.re.mt.v[a];
        if (c != null)
          return (
            (this.page = b),
            (this.frame = c),
            (a = this.Pc),
            (c = c.Pc),
            (a.x = c.x),
            (a.y = c.y),
            (a.w = c.w),
            (a.v = c.v),
            this.frame
          );
        b = b.nextPage;
      }
      return null;
    }
    B() {
      super.B();
      this.qc = null;
    }
    update() {
      var a = this.qc.hj > this.hj;
      this.hj = this.qc.hj;
      a &&
        ((this.hj = this.qc.hj),
        this.frame == null
          ? this.B5(this.qc)
          : ((a = this.frame), (this.frame = null), this.Brb(a.id)),
        this.hb.wK != null && this.hb.wK());
    }
  }
  le.g = "361";
  le.u = Pb;
  Object.assign(le.prototype, { j: le });
  class Tj extends Pb {
    constructor(a, b, c) {
      super();
      this.rj = a;
      this.tu = b;
      this.jB = c;
      this.OIa = new H(1, 1, 0, 1);
      this.gu = new H(0, 0, 0, 1);
      this.DFa = new H(0, 0, 0, 1);
      this.yna = this.xna = this.Ana = this.zna = 0;
      this.tA = !1;
      this.ENa = !0;
    }
    jx(a) {
      super.jx(a);
      a.ba(this.rj.cols * this.tu, this.rj.rows * this.tu);
      a.wk();
    }
    update(a) {
      var b = a.am,
        c = b.zoom,
        d = b.origin;
      a = b.width / c - d.x / c;
      c = b.height / c - d.y / c;
      d = b.rotation;
      if (d != 0) {
        var e = d * 0.0174532925199432;
        d = Math.cos(e);
        let f = Math.sin(e),
          g = d * a,
          h = f * c;
        e = Math.max(-3.4028234663852886e38, -g - h);
        e = Math.max(e, g - h);
        e = Math.max(e, -g + h);
        e = Math.max(e, g + h);
        g = -f * a;
        h = d * c;
        c = Math.max(-3.4028234663852886e38, -g - h);
        c = Math.max(c, g - h);
        c = Math.max(c, -g + h);
        c = Math.max(c, g + h);
        a = e;
      }
      e = b.position.y;
      d = b.position.x - this.hb.dc.translate.x;
      e -= this.hb.dc.translate.y;
      b = this.gu;
      b.x = d * (1 - this.OIa.x) + this.DFa.x;
      b.y = e * (1 - this.OIa.y) + this.DFa.y;
      this.zna = (((d - a - b.x) / this.tu) | 0) - 1;
      this.Ana = (((e - c - b.y) / this.tu) | 0) - 1;
      this.xna = (((d + a - b.x) / this.tu) | 0) + 1;
      this.yna = (((e + c - b.y) / this.tu) | 0) + 1;
      a = this.hb;
      a.ba(this.rj.cols * this.tu, this.rj.rows * this.tu);
      c = a.size;
      a.pm.fb.x = c.x / 2 + b.x;
      a.pm.fb.y = c.y / 2 + b.y;
      c = a.pm.rect;
      d = b.x;
      e = c.N - c.K;
      c.K = d;
      c.N = d + e;
      a = a.pm.rect;
      b = b.y;
      c = a.X - a.P;
      a.P = b;
      a.X = b + c;
    }
  }
  Tj.g = "362";
  Tj.u = Pb;
  Object.assign(Tj.prototype, { j: Tj });
  class Uj extends Pb {
    constructor(a) {
      a == null && (a = 1);
      super();
      this.flags = a;
      this.color = new H(0, 0, 0, 1);
      this.lK = 1;
      this.BJa = 4;
    }
  }
  Uj.g = "363";
  Uj.u = Pb;
  Object.assign(Uj.prototype, { j: Uj });
  class Vj extends ke {
    constructor() {
      super();
      let a = [],
        b = 0;
      for (; b < 4; ) (++b, a.push(new H(0, 0, 0, 1)));
    }
  }
  Vj.g = "364";
  Vj.u = ke;
  Object.assign(Vj.prototype, { j: Vj });
  class hx {
    constructor() {
      this.qFa = [];
      this.Iv = [];
    }
  }
  hx.g = "365";
  Object.assign(hx.prototype, { j: hx });
  class Yj {
    constructor(a, b, c, d, e, f, g, h) {
      this.id = a;
      this.x = b;
      this.y = c;
      this.width = d;
      this.height = e;
      this.XU = f;
      this.sM = g;
      this.Lna = h;
    }
  }
  Yj.g = "366";
  Object.assign(Yj.prototype, { j: Yj });
  class ix {
    constructor(a, b, c) {
      this.first = a;
      this.second = b;
      this.amount = c;
    }
  }
  ix.g = "367";
  Object.assign(ix.prototype, { j: ix });
  class jx {
    constructor(a, b, c, d) {
      this.Dyb = a;
      this.right = b;
      this.bp = c;
      this.left = d;
    }
  }
  jx.g = "368";
  Object.assign(jx.prototype, { j: jx });
  class kx {
    constructor(a, b) {
      this.size = a;
      this.padding = b;
    }
  }
  kx.g = "369";
  Object.assign(kx.prototype, { j: kx });
  class lx {
    constructor(a, b, c, d) {
      this.lineHeight = a;
      this.Bc = b;
      this.kqb = c;
      this.gqb = d;
    }
  }
  lx.g = "36A";
  Object.assign(lx.prototype, { j: lx });
  class xq {
    constructor() {}
    fk(a) {
      let b = new hx();
      a = new cd(a);
      var c = a.fa(),
        d = a.fa(),
        e = a.fa();
      if (c != 66 || d != 77 || e != 70) throw 43;
      if (a.fa() != 3) throw 44;
      a.fa();
      c = a.wi();
      d = a.Zd();
      a.fa();
      a.fa();
      a.ie();
      a.fa();
      e = a.fa();
      var f = a.fa(),
        g = a.fa(),
        h = a.fa();
      a.fa();
      a.fa();
      a.fa();
      a.cu(c - 14);
      b.info = new kx(d < 0 ? -d : d, new jx(e, f, g, h));
      a.fa();
      a.wi();
      c = a.ie();
      d = b.info.size;
      e = a.ie();
      f = a.ie();
      g = a.ie();
      a.ie();
      a.fa();
      a.fa();
      a.fa();
      a.fa();
      a.fa();
      b.EZ = new lx((c < d ? d : c) | 0, e, f, g);
      a.fa();
      c = a.wi();
      d = a.ca;
      a.kKa();
      d = a.ca - d;
      for (c -= d; c > 0; ) (a.kKa(), (c -= d));
      a.fa();
      c = (a.wi() / 20) | 0;
      for (d = 0; d < c; ) {
        ++d;
        e = a.wi();
        f = a.ie();
        g = a.ie();
        h = a.ie();
        let k = a.ie(),
          l = a.Zd(),
          n = a.Zd(),
          q = a.Zd();
        a.fa();
        a.fa();
        b.Iv.push(new Yj(e, f, g, h, k, l, n, q));
      }
      if (a.ca == a.UF) return b;
      a.fa();
      for (a.wi(); a.ca < a.UF; )
        ((c = a.wi()), (d = a.wi()), (e = a.Zd()), b.qFa.push(new ix(c, d, e)));
      return b;
    }
  }
  xq.g = "36B";
  Object.assign(xq.prototype, { j: xq });
  class yq {
    static JAa(a) {
      for (var b = 0, c = 0, d = a.Iv; c < d.length; ) {
        var e = d[c++].id + 1;
        b < e && (b = e);
      }
      c = Array(b);
      for (d = 0; d < b; ) c[d++] = null;
      b = 0;
      for (d = a.Iv; b < d.length; ) ((e = d[b]), ++b, (c[e.id] = e));
      b = [
        a.info.padding.Dyb,
        a.info.padding.right,
        a.info.padding.bp,
        a.info.padding.left,
      ];
      d = new jd();
      e = 0;
      let f = a.qFa;
      for (; e < f.length; ) {
        let g = f[e];
        ++e;
        d.v[(g.first << 16) | g.second] = g.amount;
      }
      e = new jd();
      return new mx(
        c,
        a.info.size,
        a.EZ.lineHeight,
        a.EZ.Bc,
        a.Iv[0].Lna,
        a.EZ.kqb,
        a.EZ.gqb,
        b,
        d,
        e,
      );
    }
    static Wq(a) {
      let b = [],
        c = 0;
      for (a = a.Iv; c < a.length; ) {
        let d = a[c];
        ++c;
        let e = d.id;
        b.push(
          new Qj(
            e,
            String.fromCodePoint(e),
            new fc(d.width, d.height),
            new Ec(d.x, d.y, d.width, d.height),
            !1,
            null,
            !1,
            null,
          ),
        );
      }
      return b;
    }
  }
  yq.g = "36C";
  class mx {
    constructor(a, b, c, d, e, f, g, h, k, l) {
      this.Zy = a;
      this.kF = b;
      this.lineHeight = c;
      this.Bc = d;
      this.bea = e;
      this.padding = h;
      this.xp = k;
      this.Rdb = l;
    }
  }
  mx.g = "36D";
  Object.assign(mx.prototype, { j: mx });
  class md {
    constructor() {}
    O0(a) {
      return new Uint32Array(this.G.buffer, a);
    }
    write(a) {
      let b = mb.ll(this.G.buffer);
      a.Gna(b, 0, b.length);
    }
    static Y4a(a) {
      let b = new md();
      b.G = new Uint8Array(a);
      b.p = 0;
      return b;
    }
    static init(a) {
      let b = new md();
      b.G = new Uint8Array(new ArrayBuffer(a));
      b.p = 0;
      return b;
    }
  }
  md.g = "36E";
  Object.assign(md.prototype, { j: md });
  class Ps {
    constructor() {
      this.Hha = Array(1);
      this.yf = new te();
      this.ej = new te();
      this.dl = new te();
      this.lm = new te();
      this.hGa =
        this.Ieb =
        this.Heb =
        this.K2 =
        this.Feb =
        this.BE =
        this.xE =
        this.yp =
        this.Cn =
        this.nm =
        this.Geb =
        this.Keb =
        this.M2 =
        this.N2 =
          0;
    }
  }
  Ps.g = "36F";
  Object.assign(Ps.prototype, { j: Ps });
  class te {
    constructor() {}
  }
  te.g = "370";
  Object.assign(te.prototype, { j: te });
  class nx {
    constructor() {
      this.nm = -1;
      this.BE = this.xE = this.yp = this.Cn = this.Eeb = this.M2 = this.N2 = 0;
    }
  }
  nx.g = "371";
  Object.assign(nx.prototype, { j: nx });
  class Dd {
    constructor() {
      this.yf = new wc(0);
      this.ej = new wc(0);
      this.dl = new wc(0);
      this.lm = new wc(0);
      this.NR = new ne();
      this.cc = new ox();
      this.Zc = null;
      this.K2 = 0;
      this.zE = null;
      this.Jeb = 519686845;
      this.Cw = Array(2);
      this.Dn = Array(2);
      let a = 0;
      for (; a < 2; ) {
        let b = a++;
        this.Cw[b] = new ne();
        this.Dn[b] = new ne();
      }
    }
    PJ() {
      return this.Jeb == 519686845;
    }
    init(a, b) {
      this.Zc = cz(a, b);
      if (this.Zc == null) return !1;
      this.zE = md.Y4a(a);
      this.K2 = b;
      return this.Rbb() && this.L2a() ? !0 : !1;
    }
    ryb(a, b, c, d) {
      let e = this.Zc.Hha[d],
        f = this.K2;
      d + 1 < this.Zc.yp && (f = this.Zc.Hha[d + 1]);
      let g = this.zE,
        h = new md();
      h.G = g.G;
      h.p = g.p + e;
      return this.syb(h, f - e, a, b, c, d);
    }
    syb(a, b, c, d, e, f) {
      var g = this.Zc.BE >> f;
      f = this.Zc.xE >> f;
      g = ((g > 1 ? g : 1) + 3) >> 2;
      f = ((f > 1 ? f : 1) + 3) >> 2;
      var h = (this.Zc.nm == 0 || this.Zc.nm == 9 ? 8 : 16) * g;
      if (e == 0) e = h;
      else if (e < h || (e & 3) != 0) return !1;
      if (d < e * f) return !1;
      d = (g + 1) >> 1;
      h = (f + 1) >> 1;
      if (!this.cc.NL(a, b)) return !1;
      switch (this.Zc.nm) {
        case 0:
          a = this.vyb(c, e, g, f, d, h);
          break;
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
          a = this.wyb(c, e, g, f, d, h);
          break;
        case 7:
        case 8:
          a = this.uyb(c, e, g, f, d, h);
          break;
        case 9:
          a = this.xyb(c, e, g, f, d, h);
          break;
        default:
          return !1;
      }
      return a ? !0 : !1;
    }
    Rbb() {
      let a = this.zE,
        b = new md();
      b.G = a.G;
      b.p = a.p + this.Zc.Meb;
      return this.cc.NL(b, this.Zc.Neb) &&
        this.cc.Ov(this.NR) &&
        (this.Zc.lm.ak != 0 || this.Zc.ej.ak != 0) &&
        (this.Zc.lm.ak == 0 ||
          (this.cc.Ov(this.Cw[0]) && this.cc.Ov(this.Dn[0]))) &&
        (this.Zc.ej.ak == 0 ||
          (this.cc.Ov(this.Cw[1]) && this.cc.Ov(this.Dn[1])))
        ? !0
        : !1;
    }
    L2a() {
      return (this.Zc.lm.ak == 0 || (this.J2a() && this.K2a())) &&
        (this.Zc.ej.ak == 0 || (this.H2a() && this.I2a()))
        ? !0
        : !1;
    }
    J2a() {
      let a = this.Zc.lm.ak;
      if (!this.lm.resize(a)) return !1;
      var b = this.zE,
        c = new md();
      c.G = b.G;
      c.p = b.p + this.Zc.lm.yE;
      if (!this.cc.NL(c, this.Zc.lm.AE)) return !1;
      b = [new ne(), new ne()];
      for (c = 0; c < 2; ) if (!this.cc.Ov(b[c++])) return !1;
      let d = (c = 0),
        e = 0,
        f = 0,
        g = 0,
        h = 0,
        k = 0,
        l = 0;
      for (; l < a; )
        (++l,
          (c = (c + this.cc.decode(b[0])) & 31),
          (d = (d + this.cc.decode(b[1])) & 63),
          (e = (e + this.cc.decode(b[0])) & 31),
          (f = (f + this.cc.decode(b[0])) & 31),
          (g = (g + this.cc.decode(b[1])) & 63),
          (h = (h + this.cc.decode(b[0])) & 31),
          (this.lm.data[k++] =
            e | (d << 5) | (c << 11) | (h << 16) | (g << 21) | (f << 27)));
      return !0;
    }
    K2a() {
      let a = this.Zc.dl.ak;
      var b = this.zE,
        c = new md();
      c.G = b.G;
      c.p = b.p + this.Zc.dl.yE;
      if (!this.cc.NL(c, this.Zc.dl.AE)) return !1;
      b = new ne();
      if (!this.cc.Ov(b)) return !1;
      c = Array(49);
      let d = Array(49);
      for (var e = -3, f = -3, g = 0; g < 49; ) {
        var h = g++;
        c[h] = e;
        d[h] = f;
        ++e > 3 && ((e = -3), ++f);
      }
      e = Array(16);
      for (f = 0; f < 16; ) e[f++] = 0;
      if (!this.dl.resize(a)) return !1;
      f = 0;
      g = Rz;
      for (h = 0; h < a; ) {
        ++h;
        let k = 0;
        for (; k < 8; ) {
          let l = k++,
            n = this.cc.decode(b);
          e[l * 2] = (c[n] + e[l * 2]) & 3;
          e[l * 2 + 1] = (d[n] + e[l * 2 + 1]) & 3;
        }
        this.dl.data[f++] =
          g[e[0]] |
          (g[e[1]] << 2) |
          (g[e[2]] << 4) |
          (g[e[3]] << 6) |
          (g[e[4]] << 8) |
          (g[e[5]] << 10) |
          (g[e[6]] << 12) |
          (g[e[7]] << 14) |
          (g[e[8]] << 16) |
          (g[e[9]] << 18) |
          (g[e[10]] << 20) |
          (g[e[11]] << 22) |
          (g[e[12]] << 24) |
          (g[e[13]] << 26) |
          (g[e[14]] << 28) |
          (g[e[15]] << 30);
      }
      return !0;
    }
    H2a() {
      let a = this.Zc.ej.ak;
      var b = this.zE,
        c = new md();
      c.G = b.G;
      c.p = b.p + this.Zc.ej.yE;
      if (!this.cc.NL(c, this.Zc.ej.AE)) return !1;
      b = new ne();
      if (!this.cc.Ov(b) || !this.ej.resize(a)) return !1;
      let d = (c = 0),
        e = 0,
        f = 0;
      for (; f < a; )
        (++f,
          (d = (this.cc.decode(b) + d) & 255),
          (e = (this.cc.decode(b) + e) & 255),
          (this.ej.data[c++] = d | (e << 8)));
      return !0;
    }
    I2a() {
      let a = this.Zc.yf.ak;
      var b = this.zE,
        c = new md();
      c.G = b.G;
      c.p = b.p + this.Zc.yf.yE;
      if (!this.cc.NL(c, this.Zc.yf.AE)) return !1;
      b = new ne();
      if (!this.cc.Ov(b)) return !1;
      c = Array(225);
      let d = Array(225);
      for (var e = -7, f = -7, g = 0; g < 225; ) {
        var h = g++;
        c[h] = e;
        d[h] = f;
        ++e > 7 && ((e = -7), ++f);
      }
      e = Array(16);
      for (f = 0; f < 16; ) e[f++] = 0;
      if (!this.yf.resize(a * 3)) return !1;
      f = 0;
      g = Sz;
      for (h = 0; h < a; ) {
        ++h;
        for (var k = 0; k < 8; ) {
          let l = k++,
            n = this.cc.decode(b);
          e[l * 2] = (c[n] + e[l * 2]) & 7;
          e[l * 2 + 1] = (d[n] + e[l * 2 + 1]) & 7;
        }
        k =
          ((g[e[0]] |
            (g[e[1]] << 3) |
            (g[e[2]] << 6) |
            (g[e[3]] << 9) |
            (g[e[4]] << 12) |
            (g[e[5]] << 15)) >>>
            0) &
          65535;
        this.yf.data[f++] = k;
        k =
          (((g[e[5]] >> 1) |
            (g[e[6]] << 2) |
            (g[e[7]] << 5) |
            (g[e[8]] << 8) |
            (g[e[9]] << 11) |
            (g[e[10]] << 14)) >>>
            0) &
          65535;
        this.yf.data[f++] = k;
        k =
          (((g[e[10]] >> 2) |
            (g[e[11]] << 1) |
            (g[e[12]] << 4) |
            (g[e[13]] << 7) |
            (g[e[14]] << 10) |
            (g[e[15]] << 13)) >>>
            0) &
          65535;
        this.yf.data[f++] = k;
      }
      return !0;
    }
    vyb(a, b, c, d, e, f) {
      let g = 1,
        h = this.lm.size,
        k = this.dl.size;
      var l = 0,
        n = 0;
      let q = this.Zc.Cn,
        r = b >> 2,
        t = new wc(4),
        x = 0;
      for (; x < q; ) {
        let M = a[x++],
          Q = 0,
          U = 0;
        for (; U < f; ) {
          var z = U++,
            A = 0;
          let W = e,
            da = 1,
            na = 16,
            ka = Q;
          (z & 1) > 0 &&
            ((A = e - 1), (da = W = -1), (na = -16), (ka += (e - 1) * 8 * 2));
          for (z = z == f - 1 && (d & 1) > 0; A != W; ) {
            g == 1 && ((g = this.cc.decode(this.NR)), (g |= 512));
            var C = g & 7;
            g >>>= 3;
            for (var B = Dd.b0[C], D = 0; D < B; ) {
              var F = D++;
              l += this.cc.decode(this.Cw[0]);
              l >= h && (l -= h);
              t.data[F] = this.lm.data[l];
            }
            B = Dd.c0[C];
            D = (c & 1) > 0 && A == e - 1;
            C = M.O0(ka);
            F = 0;
            if (z || D) {
              let qa = 0;
              for (; qa < 2; ) {
                let oa = qa++;
                F = ((F << 2) + b * oa) >> 2;
                let Aa = 0;
                for (; Aa < 2; ) {
                  let Ta = Aa++;
                  n += this.cc.decode(this.Dn[0]);
                  n >= k && (n -= k);
                  (Ta != 0 && D) ||
                    (oa != 0 && z) ||
                    ((C[F] = t.data[B[Ta + oa * 2]]),
                    (C[F + 1] = this.dl.data[n]));
                }
              }
            } else
              ((C[0] = t.data[B[0]]),
                (n += this.cc.decode(this.Dn[0])),
                n >= k && (n -= k),
                (C[1] = this.dl.data[n]),
                (C[2] = t.data[B[1]]),
                (n += this.cc.decode(this.Dn[0])),
                n >= k && (n -= k),
                (C[3] = this.dl.data[n]),
                (C[r] = t.data[B[2]]),
                (n += this.cc.decode(this.Dn[0])),
                n >= k && (n -= k),
                (C[1 + r] = this.dl.data[n]),
                (C[2 + r] = t.data[B[3]]),
                (n += this.cc.decode(this.Dn[0])),
                n >= k && (n -= k),
                (C[3 + r] = this.dl.data[n]));
            ka += na;
            A += da;
          }
          Q += b * 2;
        }
      }
      return !0;
    }
    wyb(a, b, c, d, e, f) {
      let g = 1,
        h = this.lm.size,
        k = this.dl.size,
        l = this.ej.size,
        n = this.Zc.yf.ak;
      var q = 0,
        r = 0,
        t = 0,
        x = 0;
      let z = this.Zc.Cn,
        A = new wc(4),
        C = new wc(4),
        B = 0;
      for (; B < z; ) {
        let na = a[B++],
          ka = 0,
          qa = 0;
        for (; qa < f; ) {
          var D = qa++,
            F = 0;
          let oa = e,
            Aa = 1,
            Ta = 32,
            Ba = ka;
          (D & 1) > 0 &&
            ((F = e - 1), (Aa = oa = -1), (Ta = -32), (Ba += (e - 1) * 16 * 2));
          for (D = D == f - 1 && (d & 1) > 0; F != oa; ) {
            g == 1 && ((g = this.cc.decode(this.NR)), (g |= 512));
            var M = g & 7;
            g >>>= 3;
            var Q = Dd.b0[M];
            M = Dd.c0[M];
            let ab = (c & 1) > 0 && F == e - 1,
              hc = na.O0(Ba),
              Jb = 0;
            for (var U = 0; U < Q; ) {
              var W = U++;
              t += this.cc.decode(this.Cw[1]);
              t >= l && (t -= l);
              C.data[W] = this.ej.data[t];
            }
            for (U = 0; U < Q; )
              ((W = U++),
                (q += this.cc.decode(this.Cw[0])),
                q >= h && (q -= h),
                (A.data[W] = this.lm.data[q]));
            for (Q = 0; Q < 2; ) {
              U = Q++;
              for (W = 0; W < 2; ) {
                var da = W++;
                x += this.cc.decode(this.Dn[1]);
                x >= n && (x -= n);
                r += this.cc.decode(this.Dn[0]);
                r >= k && (r -= k);
                if (!((da != 0 && ab) || (U != 0 && D))) {
                  da = M[da + U * 2];
                  let nb = x * 3;
                  hc[Jb] = C.data[da] | (this.yf.data[nb] << 16);
                  hc[Jb + 1] =
                    this.yf.data[nb + 1] | (this.yf.data[nb + 2] << 16);
                  hc[Jb + 2] = A.data[da];
                  hc[Jb + 3] = this.dl.data[r];
                }
                Jb += 4;
              }
              Jb = ((Jb << 2) - 32 + b) >> 2;
            }
            Ba += Ta;
            F += Aa;
          }
          ka += b * 2;
        }
      }
      return !0;
    }
    uyb(a, b, c, d, e, f) {
      let g = 1,
        h = this.ej.size,
        k = this.Zc.yf.ak;
      var l = 0,
        n = 0,
        q = 0,
        r = 0;
      let t = this.Zc.Cn,
        x = 0;
      for (; x < t; ) {
        let Q = a[x++],
          U = 0,
          W = 0;
        for (; W < f; ) {
          var z = W++,
            A = 0;
          let da = e,
            na = 1,
            ka = 32,
            qa = U;
          (z & 1) > 0 &&
            ((A = e - 1), (na = da = -1), (ka = -32), (qa += (e - 1) * 16 * 2));
          for (z = z == f - 1 && (d & 1) > 0; A != da; ) {
            let oa = new wc(4),
              Aa = new wc(4);
            g == 1 && ((g = this.cc.decode(this.NR)), (g |= 512));
            var C = g & 7;
            g >>>= 3;
            var B = Dd.b0[C];
            C = Dd.c0[C];
            let Ta = (c & 1) > 0 && A == e - 1,
              Ba = Q.O0(qa);
            for (var D = 0; D < B; ) {
              var F = D++;
              l += this.cc.decode(this.Cw[1]);
              l >= h && (l -= h);
              oa.data[F] = this.ej.data[l];
            }
            for (D = 0; D < B; )
              ((F = D++),
                (q += this.cc.decode(this.Cw[1])),
                q >= h && (q -= h),
                (Aa.data[F] = this.ej.data[q]));
            for (B = 0; B < 2; )
              for (D = B++, F = 0; F < 2; ) {
                var M = F++;
                n += this.cc.decode(this.Dn[1]);
                n >= k && (n -= k);
                r += this.cc.decode(this.Dn[1]);
                r >= k && (r -= k);
                if (!((M != 0 && Ta) || (D != 0 && z))) {
                  M = C[M + D * 2];
                  let ab = n * 3;
                  Ba[0] = oa.data[M] | (this.yf.data[ab] << 16);
                  Ba[1] = this.yf.data[ab + 1] | (this.yf.data[ab + 2] << 16);
                  Ba[2] = Aa.data[M] | (this.yf.data[ab] << 16);
                  Ba[3] = this.yf.data[ab + 1] | (this.yf.data[ab + 2] << 16);
                }
              }
            qa += ka;
            A += na;
          }
          U += b * 2;
        }
      }
      return !0;
    }
    xyb(a, b, c, d, e, f) {
      let g = 1,
        h = this.ej.size,
        k = this.Zc.yf.ak;
      var l = 0,
        n = 0;
      let q = this.Zc.Cn,
        r = 0;
      for (; r < q; ) {
        let D = a[r++],
          F = 0,
          M = 0;
        for (; M < f; ) {
          var t = M++,
            x = 0;
          let Q = e,
            U = 1,
            W = 16,
            da = F;
          (t & 1) > 0 &&
            ((x = e - 1), (U = Q = -1), (W = -16), (da += (e - 1) * 8 * 2));
          for (t = t == f - 1 && (d & 1) > 0; x != Q; ) {
            let na = new wc(4);
            g == 1 && ((g = this.cc.decode(this.NR)), (g |= 512));
            var z = g & 7;
            g >>>= 3;
            var A = Dd.b0[z];
            z = Dd.c0[z];
            let ka = (c & 1) > 0 && x == e - 1,
              qa = D.O0(da),
              oa = 0;
            for (var C = 0; C < A; ) {
              var B = C++;
              l += this.cc.decode(this.Cw[1]);
              l >= h && (l -= h);
              na.data[B] = this.ej.data[l];
            }
            for (A = 0; A < 2; ) {
              C = A++;
              for (B = 0; B < 2; ) {
                let Aa = B++;
                n += this.cc.decode(this.Dn[1]);
                n >= k && (n -= k);
                if (!((Aa != 0 && ka) || (C != 0 && t))) {
                  let Ta = n * 3;
                  qa[oa] = na.data[z[Aa + C * 2]] | (this.yf.data[Ta] << 16);
                  qa[oa + 1] = this.yf.data[1] | (this.yf.data[Ta + 2] << 16);
                }
                oa += 2;
              }
              oa = ((oa << 2) - 16 + b) >> 2;
            }
            da += W;
            x += U;
          }
          F += b * 2;
        }
      }
      return !0;
    }
  }
  Dd.g = "372";
  Object.assign(Dd.prototype, { j: Dd });
  class Uh {
    constructor() {
      this.zda = this.Ada = 0;
    }
    write(a) {
      a.ke(this.zda);
      a.ke(this.Ada);
    }
  }
  Uh.g = "373";
  Object.assign(Uh.prototype, { j: Uh });
  class px {
    constructor() {
      this.eQ =
        this.mD =
        this.iza =
        this.kza =
        this.H3a =
        this.G3a =
        this.C3a =
        this.I3a =
          0;
    }
    write(a) {
      a.ke(this.eQ);
      a.ke(this.mD);
      a.ke(this.iza);
      a.ke(this.kza);
      a.ke(this.H3a);
      a.ke(this.G3a);
      a.ke(this.C3a);
      a.ke(this.I3a);
    }
  }
  px.g = "374";
  Object.assign(px.prototype, { j: px });
  class qx {
    constructor() {
      this.x_ = this.hza = this.E3a = this.F3a = 0;
    }
    write(a) {
      a.ke(this.x_);
      a.ke(this.hza);
      a.ke(this.E3a);
      a.ke(this.F3a);
    }
  }
  qx.g = "375";
  Object.assign(qx.prototype, { j: qx });
  class rx {
    constructor() {
      this.Ada = 0;
      this.OP = new qx();
      this.NP = new px();
      this.Cyb = new Uh();
      this.Byb = new Uh();
      this.Ayb = new Uh();
      this.zyb = new Uh();
      this.eQ =
        this.mD =
        this.yda =
        this.Bda =
        this.zFa =
        this.D3a =
        this.jza =
        this.B3a =
        this.zda =
        this.Deb =
          0;
    }
    write(a) {
      a.ke(this.eQ);
      a.ke(this.mD);
      a.ke(this.yda);
      a.ke(this.Bda);
      a.ke(this.zFa);
      a.ke(this.D3a);
      a.ke(this.jza);
      a.ke(this.B3a);
      a.ke(this.zda);
      a.ke(this.Deb);
      this.zyb.write(a);
      this.Ayb.write(a);
      this.Byb.write(a);
      this.Cyb.write(a);
      this.NP.write(a);
      this.OP.write(a);
      a.ke(this.Ada);
    }
  }
  rx.g = "376";
  Object.assign(rx.prototype, { j: rx });
  class sx {
    constructor() {
      this.XJ = new wc(17);
      this.lA = new wc(17);
      this.fGa = 0;
      this.UJ = null;
      this.J2 = 0;
      this.OR = null;
    }
    init(a, b, c) {
      var d = new wc(16);
      if (a == 0 || c > 11) return !1;
      let e = new wc(17);
      for (var f = 0; f < a; ) {
        var g = b.data[f++];
        g != 0 && (e.data[g] += 1);
      }
      g = new wc(17);
      var h = 0,
        k = 0;
      f = 0;
      for (var l = 2147483647, n = 1; n < 17; ) {
        var q = n++,
          r = e.data[q];
        r == 0
          ? (this.lA.data[q - 1] = 0)
          : (l >= q && (l = q),
            f <= q && (f = q),
            (d.data[q - 1] = h),
            (this.lA.data[q - 1] = h + r - 1),
            (this.lA.data[q - 1] =
              1 + ((this.lA.data[q - 1] << (16 - q)) | ((1 << (16 - q)) - 1))),
            (this.XJ.data[q - 1] = k),
            (g.data[q] = k),
            (h += r),
            (k += r));
        h <<= 1;
      }
      if (
        k > this.J2 &&
        ((this.J2 = k),
        ak.edb(k) || ((h = ak.Kfb(k)), (this.J2 = a < h ? a : h)),
        (this.OR = new wc(this.J2)),
        this.OR == null)
      )
        return !1;
      this.gGa = l;
      for (l = 0; l < a; )
        ((h = l++),
          (k = b.data[h]),
          k != 0 &&
            ((n = g.data[k]), (g.data[k] = n + 1), (this.OR.data[n] = h)));
      c <= this.gGa && (c = 0);
      this.Leb = c;
      if (c != 0) {
        a = 1 << c;
        if (a > this.fGa) {
          this.fGa = a;
          if (this.UJ != null) debugger;
          this.UJ = [];
          if (this.UJ == null) return !1;
        }
        a = 0;
        for (b = 1 << c; a < b; ) this.UJ[a++] = -1;
        a = 1;
        for (b = c + 1; a < b; ) {
          g = a++;
          if (e.data[g] == 0) continue;
          l = c - g;
          h = 1 << l;
          k = d.data[g - 1];
          n = this.XJ.data[g - 1];
          q = k;
          for (r = this.pab(g) + 1; q < r; ) {
            let t = q++,
              x = this.OR.data[n + t - k],
              z = 0;
            for (; z < h; ) this.UJ[z++ + (t << l)] = x | (g << 16);
          }
        }
      }
      for (a = 0; a < 16; ) ((b = a++), (this.XJ.data[b] -= d.data[b]));
      this.iGa = 0;
      this.Gha = this.gGa;
      if (c != 0) {
        for (d = c; d >= 1; ) {
          if (e.data[d] != 0) {
            this.iGa = this.lA.data[d - 1];
            break;
          }
          --d;
        }
        if (d >= 1)
          for (this.Gha = c + 1, c += 1, d = f + 1; c < d; )
            if (((f = c++), e.data[f] != 0)) {
              this.Gha = f;
              break;
            }
      }
      this.lA.data[16] = -1;
      this.XJ.data[16] = 1048575;
      return !0;
    }
    pab(a) {
      let b = this.lA.data[a - 1];
      return b == 0 ? -1 : (b - 1) >> (16 - a);
    }
  }
  sx.g = "377";
  Object.assign(sx.prototype, { j: sx });
  class ak {
    static Xxb() {
      var a = 8192;
      let b = 0;
      for (; a > 0; ) ((a >>= 1), ++b);
      return b;
    }
    static IZa(a) {
      let b = ak.I4a(a);
      b != 32 && a > 1 << b && ++b;
      return b;
    }
    static I4a(a) {
      let b = 0;
      for (; a > 1; ) ((a >>= 1), ++b);
      return b;
    }
    static edb(a) {
      return a != 0 ? (a & (a - 1)) == 0 : !1;
    }
    static Kfb(a) {
      --a;
      a |= a >> 16;
      a |= a >> 8;
      a |= a >> 4;
      a |= a >> 2;
      return (a | (a >> 1)) + 1;
    }
  }
  ak.g = "378";
  class Os {
    constructor() {}
    read(a) {
      let b = new nx();
      var c = a.b.Ev;
      a = a.length;
      var d = cz(c, a);
      d == null
        ? (d = !1)
        : ((b.BE = d.BE),
          (b.xE = d.xE),
          (b.yp = d.yp),
          (b.Cn = d.Cn),
          (b.nm = d.nm),
          (b.Eeb = d.nm == 0 || d.nm == 9 ? 8 : 16),
          (b.M2 = d.M2),
          (b.N2 = d.N2),
          (d = !0));
      if (!d) throw 45;
      c == null || a < 62
        ? (c = null)
        : ((d = new Dd()), (c = d.init(c, a) ? d : null));
      if (c == null) throw 46;
      a = new Tg();
      a.ke(542327876);
      d = new rx();
      d.eQ = 124;
      d.mD = 4103 | (b.yp > 1 ? 131072 : 0);
      d.Bda = b.BE;
      d.yda = b.xE;
      d.jza = b.yp > 1 ? b.yp : 0;
      d.NP.eQ = 32;
      d.NP.mD = 4;
      a: {
        var e = b.nm;
        switch (e) {
          case 3:
          case 4:
          case 5:
          case 6:
            e = 2;
            break a;
        }
      }
      d.NP.iza = az(e);
      e != b.nm && (d.NP.kza = az(b.nm));
      d.OP.x_ = 4096;
      b.yp > 1 && (d.OP.x_ |= 4194312);
      b.Cn == 6 && (d.OP.hza = 65024);
      d.zFa = (((d.Bda + 3) & -4) * ((d.yda + 3) & -4) * bz(b.nm)) >> 3;
      d.mD |= 524288;
      d.write(a);
      d = Array(6);
      for (e = 0; e < 6; ) d[e++] = Array(16);
      e = new wc(16);
      for (var f = 0, g = b.yp; f < g; ) {
        var h = f++,
          k = b.BE >> h,
          l = b.xE >> h;
        k = ((1 < k ? k : 1) + 3) >> 2;
        var n = ((1 < l ? l : 1) + 3) >> 2;
        l = (1 < k ? k : 1) * ((bz(b.nm) << 4) >> 3);
        k = l * (1 < n ? n : 1);
        e.data[h] = k;
        n = 0;
        for (var q = b.Cn; n < q; ) {
          var r = md.init(k);
          d[n++][h] = r;
        }
        q = Array(6);
        n = 0;
        for (r = b.Cn; n < r; ) {
          let t = n++;
          q[t] = d[t][h];
        }
        n = c;
        if (
          n == null ||
          q == null ||
          k < 8 ||
          h >= 16 ||
          !n.PJ() ||
          !n.ryb(q, k, l, h)
        )
          throw 47;
      }
      f = 128;
      g = 0;
      for (h = b.Cn; g < h; )
        for (++g, l = 0, k = b.yp; l < k; ) f += e.data[l++];
      e = 0;
      for (g = b.Cn; e < g; )
        for (h = e++, l = 0, k = b.yp; l < k; ) d[h][l++].write(a);
      c != null && c.PJ();
      return a.Uq().sub(0, f);
    }
  }
  Os.g = "379";
  Object.assign(Os.prototype, { j: Os });
  class ne {
    constructor() {
      this.WJ = null;
      this.Ht = new wc(0);
    }
    JJa() {
      this.PR = this.Ht.size;
      this.WJ == null && (this.WJ = new sx());
      return this.WJ.init(this.PR, this.Ht, this.V0a());
    }
    V0a() {
      var a = 0;
      this.PR > 16 && ((a = 1 + ak.IZa(this.PR)), (a = a < 11 ? a : 11));
      return a;
    }
    clear() {
      this.PR = 0;
      this.Ht.clear();
      this.WJ != null && (this.WJ = null);
    }
  }
  ne.g = "37A";
  Object.assign(ne.prototype, { j: ne });
  class ox {
    constructor() {}
    NL(a, b) {
      if (b == 0) return !1;
      var c = new md();
      c.G = a.G;
      c.p = a.p;
      c = new md();
      c.G = a.G;
      c.p = a.p;
      this.VJ = c;
      c = new md();
      c.G = a.G;
      c.p = a.p + b;
      this.L2 = c;
      this.T9a();
      return !0;
    }
    Ov(a) {
      let b = this.fD(ak.Xxb());
      if (b == 0) return (a.clear(), !0);
      if (!a.Ht.resize(b)) return !1;
      for (var c = 0; c < b; ) a.Ht.data[c++] = 0;
      var d = this.fD(5);
      if (d < 1 || d > 21) return !1;
      c = new ne();
      if (!c.Ht.resize(21)) return !1;
      for (var e = 0; e < d; ) {
        var f = c.Ht;
        let g = Tz[e++],
          h = this.fD(3);
        f.data[g] = h;
      }
      if (!c.JJa()) return !1;
      for (d = 0; d < b; )
        if (((e = b - d), (f = this.decode(c)), f <= 16)) a.Ht.data[d++] = f;
        else if (f == 17) {
          f = this.fD(3) + 3;
          if (f > e) return !1;
          d += f;
        } else if (f == 18) {
          f = this.fD(7) + 11;
          if (f > e) return !1;
          d += f;
        } else if (f == 19 || f == 20) {
          f = f == 19 ? this.fD(2) + 3 : this.fD(6) + 7;
          if (d == 0 || f > e) return !1;
          e = a.Ht.data[d - 1];
          if (e == 0) return !1;
          for (f = d + f; d < f; ) a.Ht.data[d++] = e;
        } else return !1;
      return d != b ? !1 : a.JJa();
    }
    fD(a) {
      return a == 0
        ? 0
        : a > 16
          ? (this.Lfa(a - 16) << 16) | this.Lfa(16)
          : this.Lfa(a);
    }
    decode(a) {
      var b = a.WJ;
      if (this.$j < 24)
        if (this.$j < 16) {
          var c = 0,
            d = 0;
          let e = this.VJ;
          e.p < this.L2.p && (c = e.G[e.p++]);
          e.p < this.L2.p && (d = e.G[e.p++]);
          this.VJ = e;
          this.$j += 16;
          this.km |= ((c << 8) | d) << (32 - this.$j);
        } else
          (this.VJ.p < this.L2.p ? ((c = this.VJ), (c = c.G[c.p++])) : (c = 0),
            (this.$j += 8),
            (this.km |= c << (32 - this.$j)));
      d = (this.km >>> 16) + 1;
      if (d <= b.iGa)
        ((b = b.UJ[this.km >>> (32 - b.Leb)]), (a = b & 65535), (c = b >> 16));
      else {
        for (c = b.Gha; d > b.lA.data[c - 1]; ) ++c;
        d = b.XJ.data[c - 1] + (this.km >>> (32 - c));
        if (d >= a.PR) return 0;
        a = b.OR.data[d];
      }
      this.km <<= c;
      this.$j -= c;
      return a;
    }
    T9a() {
      this.$j = this.km = 0;
    }
    Lfa(a) {
      for (; this.$j < a; ) {
        var b = 0;
        this.VJ.p != this.L2.p && ((b = this.VJ), (b = b.G[b.p++]));
        this.$j += 8;
        this.km |= b << (32 - this.$j);
      }
      b = this.km >>> (32 - a);
      this.km <<= a;
      this.$j -= a;
      return b;
    }
  }
  ox.g = "37B";
  Object.assign(ox.prototype, { j: ox });
  class wc {
    constructor(a) {
      a == null && (a = 0);
      this.data = [];
      this.size = 0;
      this.data = Array(a);
      let b = 0;
      for (; b < a; ) this.data[b++] = 0;
      this.size = a;
    }
    clear() {
      this.data.length = 0;
    }
    resize(a) {
      if (this.size != a) {
        if (a < this.size) for (; this.size > a; ) this.data.pop();
        else {
          let b = this.size;
          for (; b < a; ) this.data[b++] = 0;
        }
        this.size = a;
      }
      return !0;
    }
  }
  wc.g = "37C";
  Object.assign(wc.prototype, { j: wc });
  class Lq {
    constructor(a, b) {
      this.frames = a;
      this.aK = b;
    }
  }
  Lq.g = "37D";
  Object.assign(Lq.prototype, { j: Lq });
  class Mq {
    constructor(a, b, c, d, e, f, g) {
      this.filename = a;
      this.frame = b;
      this.NNa = c;
      this.ea = d;
      this.iL = f;
      this.Dx = e;
      this.Yd = g;
    }
  }
  Mq.g = "37E";
  Object.assign(Mq.prototype, { j: Mq });
  class Nq {
    constructor(a, b, c) {
      this.width = a;
      this.height = b;
      this.scale = c;
    }
  }
  Nq.g = "37F";
  Object.assign(Nq.prototype, { j: Nq });
  class qi {
    constructor() {}
    jKa(a) {
      var b = JSON.parse(a);
      a = [];
      let c = Iz(Uz)(b.frames);
      for (; c.yd(); ) {
        let d = c.next(),
          e = d.frame,
          f = d.spriteSourceSize,
          g = d.sourceSize,
          h = d.pivot;
        a.push(
          new Mq(
            d.filename,
            new Ec(e.x, e.y, e.w, e.h),
            new Ec(f.x, f.y, f.w, f.h),
            new fc(g.w, g.h),
            d.trimmed,
            d.rotated,
            h != null ? new H(h.x, h.y, 0, 1) : null,
          ),
        );
      }
      b = b.meta;
      return new Lq(a, new Nq(b.size.w, b.size.h, parseFloat(b.scale)));
    }
    Fja(a) {
      function b(h) {
        let k = new Ec(c.Zd(), c.Zd(), c.Zd(), c.Zd()),
          l = new Ec(c.Zd(), c.Zd(), c.Zd(), c.Zd()),
          n = new fc(c.Zd(), c.Zd()),
          q = c.fa();
        return new Mq(
          h,
          k,
          l,
          n,
          (q & 1) > 0,
          (q & 2) > 0,
          (q & 4) > 0 ? new H(c.WK(), c.WK(), 0, 1) : null,
        );
      }
      let c = new cd(a);
      c.fa();
      c.fa();
      c.fa();
      a = new Nq(c.Zd(), c.Zd(), c.smb());
      let d = [],
        e = c.Zd(),
        f = 0;
      for (; f < e; ) {
        var g = c.cu(c.Zd());
        d.push(b(g));
        ++f;
      }
      e = c.Zd();
      for (f = 0; f < e; ) {
        g = c.Zd();
        let h = c.cu(c.Zd()),
          k = 0;
        for (; k < g; ) {
          let l = "" + (k + 1);
          for (; l.length < 4; ) l = "0" + l;
          d.push(b(h + l));
          ++k;
        }
        ++f;
      }
      return new Lq(d, a);
    }
  }
  qi.g = "380";
  Object.assign(qi.prototype, { j: qi });
  class Xs {
    static Wq(a) {
      let b = 0,
        c = [],
        d = 0;
      for (a = a.frames; d < a.length; ) {
        let e = a[d];
        ++d;
        c.push(
          new Qj(
            b++,
            e.filename,
            e.ea,
            e.frame,
            e.Dx,
            new fc(e.NNa.x, e.NNa.y),
            e.iL,
            e.Yd,
          ),
        );
      }
      return c;
    }
  }
  Xs.g = "381";
  class Iy {
    constructor() {
      this.Kxa = new jd();
      this.xp = null;
      this.Zq = [];
      this.Cma = this.Sva = this.a3a = 0;
    }
  }
  Iy.g = "382";
  Object.assign(Iy.prototype, { j: Iy });
  class Jy {
    constructor(a, b) {
      this.K = this.P = this.N = this.X = this.fba = 0;
      this.an = this.path = null;
      this.points = [];
      this.tca = [];
      this.code = 0;
      this.index = a;
      this.name = b;
    }
    swa() {
      function a(k, l) {
        let n = [],
          q = 0;
        for (; q < k.length; ) {
          let r = k[q];
          ++q;
          n.push(
            new Oq(
              r.x * l.Upb + r.y * l.Wpb,
              r.x * l.Vpb + r.y * l.Xpb,
              r.KE,
              r.sha,
            ),
          );
        }
        return n;
      }
      function b(k, l, n) {
        let q = [],
          r = 0;
        for (; r < k.length; ) {
          let t = k[r];
          ++r;
          q.push(new Oq(t.x + l, t.y + n, t.KE, t.sha));
        }
        return q;
      }
      if (this.an != null)
        for (var c = 0, d = this.an; c < d.length; ) {
          var e = d[c];
          ++c;
          var f = e.vab,
            g = e.transform,
            h = f.points;
          if (h == null) continue;
          f.swa();
          f = null;
          e.Lha != null
            ? (g != null && (f = a(h, g)),
              (g = this.points[e.Lha[0]]),
              (e = this.points[e.Lha[0]]),
              b(h, g.x - e.x, g.y - e.y))
            : g != null
              ? e.Zxb
                ? ((f = b(h, e.x, e.y)), (f = a(f, g)))
                : ((f = a(h, g)), (f = b(f, e.x, e.y)))
              : (f = b(h, e.x, e.y));
          this.points = this.points.concat(f);
        }
      this.tca = this.k6a();
      this.path = new Pq();
      for (c = 0; c < this.tca.length; ) {
        d = this.tca[c];
        h = null;
        e = d[d.length - 1];
        f = d[0];
        e.KE
          ? this.path.moveTo(e.x, e.y)
          : f.KE
            ? this.path.moveTo(f.x, f.y)
            : this.path.moveTo((e.x + f.x) / 2, (e.y + f.y) / 2);
        g = 0;
        let k = d.length;
        for (; g < k; )
          if (((h = e), (e = f), (f = d[(g++ + 1) % d.length | 0]), e.KE))
            this.path.lineTo(e.x, e.y);
          else {
            let l = h.x,
              n = h.y,
              q = f.x,
              r = f.y;
            h.KE ||
              ((l = (e.x + h.x) / 2),
              (n = (e.y + h.y) / 2),
              this.path.lineTo(l, n));
            f.KE || ((q = (e.x + f.x) / 2), (r = (e.y + f.y) / 2));
            this.path.lineTo(l, n);
            this.path.bKa(e.x, e.y, q, r);
          }
        this.path.close();
        ++c;
      }
    }
    k6a() {
      let a = [],
        b = [],
        c = 0,
        d = this.points;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        b.push(e);
        e.sha && (a.push(b), (b = []));
      }
      return a;
    }
    eg(a, b, c, d) {
      this.path == null && this.swa();
      let e = new Pq(),
        f = this.path.wd,
        g = 0,
        h = f.length;
      for (; g < h; ) {
        let k = f[g++];
        switch (k.type) {
          case 0:
            e.moveTo(a + k.x * c, b - k.y * d);
            break;
          case 1:
            e.lineTo(a + k.x * c, b - k.y * d);
            break;
          case 2:
            e.t2a(
              a + k.x1 * c,
              b - k.y1 * d,
              a + k.x2 * c,
              b - k.y2 * d,
              a + k.x * c,
              b - k.y * d,
            );
            break;
          case 3:
            e.bKa(a + k.x1 * c, b - k.y1 * d, a + k.x * c, b - k.y * d);
            break;
          case 4:
            e.close();
        }
      }
      return e;
    }
  }
  Jy.g = "383";
  Object.assign(Jy.prototype, { j: Jy });
  class Oq {
    constructor(a, b, c, d) {
      d == null && (d = !1);
      this.x = a;
      this.y = b;
      this.KE = c;
      this.sha = d;
    }
  }
  Oq.g = "384";
  Object.assign(Oq.prototype, { j: Oq });
  class Pq {
    constructor() {
      this.wd = [];
    }
    moveTo(a, b) {
      this.wd.push(new Dg(0, a, b));
    }
    lineTo(a, b) {
      this.wd.push(new Dg(1, a, b));
    }
    bKa(a, b, c, d) {
      c = new Dg(3, c, d);
      c.x1 = a;
      c.y1 = b;
      this.wd.push(c);
    }
    t2a(a, b, c, d, e, f) {
      e = new Dg(2, e, f);
      e.x1 = a;
      e.y1 = b;
      e.x2 = c;
      e.y2 = d;
      this.wd.push(e);
    }
    close() {
      this.wd.push(new Dg(4, 0, 0));
    }
  }
  Pq.g = "385";
  Object.assign(Pq.prototype, { j: Pq });
  class Ky {
    constructor(a, b, c, d) {
      this.Upb = a;
      this.Vpb = b;
      this.Wpb = c;
      this.Xpb = d;
    }
  }
  Ky.g = "386";
  Object.assign(Ky.prototype, { j: Ky });
  class Ly {
    constructor(a) {
      this.x = this.y = this.Lha = this.transform = null;
      this.Zxb = !1;
      this.vab = a;
    }
  }
  Ly.g = "387";
  Object.assign(Ly.prototype, { j: Ly });
  class Dg {
    constructor(a, b, c) {
      this.type = a;
      this.x = b;
      this.y = c;
      this.y2 = this.x2 = this.y1 = this.x1 = 0;
    }
  }
  Dg.g = "388";
  Object.assign(Dg.prototype, { j: Dg });
  class ea extends Ke {
    constructor(a, b) {
      let c = new Zb();
      super(c);
      this.effect = new Qh(a);
      c.Zw(this.effect);
      c.ba(this.effect.width, this.effect.height);
      b != null && b.appendChild(this);
      this.locked = !1;
    }
    OD() {
      return this.effect.text;
    }
    V(a) {
      this.effect.V(a);
      this.apply();
    }
    rd(a) {
      this.effect.rd(a);
      this.apply();
    }
    ua(a) {
      this.effect.ua(a * ea.i1);
      this.apply();
    }
    Ia(a) {
      this.effect.Ia(a);
      this.apply();
    }
    F5(a) {
      return this.effect.F5(a);
    }
    CL(a) {
      this.effect.CL(a);
      this.apply();
    }
    Lc(a) {
      this.effect.Lc(a * ea.j1);
      this.apply();
    }
    IF(a) {
      this.effect.IF(a);
      this.apply();
    }
    GL(a) {
      this.effect.GL(a);
      this.apply();
    }
    gDa() {
      this.apply();
      return this.effect.xn;
    }
    jw() {
      this.apply();
      return this.effect.jw();
    }
    wf() {
      return this.effect.color;
    }
    La(a) {
      let b = this.effect.color;
      b.x = a.x;
      b.y = a.y;
      b.z = a.z;
      b.w = a.w;
    }
    sg(a) {
      this.effect.B5(a);
    }
    B() {
      this.L != null && (this.L.B(), (this.L = null), super.B());
    }
    zfa() {
      return new H(this.effect.width, this.effect.height, 0, 1);
    }
    Fa(a, b) {
      this.L.ba(a, b);
      this.effect.xc(a);
      this.effect.Qb(b);
      this.apply();
    }
    Uk() {
      this.effect.Uk();
      this.apply();
    }
    pk() {
      this.effect.pk();
    }
    S4() {
      this.effect.S4();
      this.apply();
    }
    Pj() {
      let a = this.effect.Pj();
      a.Wj() && ((a.K = 0), (a.P = 0), (a.N = 0), (a.X = 0));
      return a;
    }
    apply() {
      this.locked || this.effect.apply();
    }
    getBounds(a, b) {
      b == null && (b = !0);
      let c = new hb(pa.sd, pa.sd, pa.Ld, pa.Ld);
      if (a == this)
        return (
          (c.K = 0),
          (c.P = 0),
          (c.N = this.effect.width),
          (c.X = this.effect.height),
          c
        );
      b && (this.L.yu(), a == null || this.L.Iga(a.L) || a.L.yu());
      this.L.EQ(a == null ? this.L.Mz() : a.L, c);
      return c;
    }
    ya() {
      let a = this.getBounds(this.sJ());
      return a.N - a.K;
    }
  }
  ea.g = "389";
  ea.u = Ke;
  Object.assign(ea.prototype, { j: ea });
  class uq extends sd {
    constructor(a, b) {
      b == null && (b = !0);
      super(0);
      this.$Y = a;
      this.Oc = (this.Oc & -16) | a;
      this.premultipliedAlpha = b;
      this.Oc &= -65537;
      b && (this.Oc |= 65536);
      this.blendEquation = 1;
      this.Oc = (this.Oc & -61441) | 4096;
      this.INa = 0;
      this.Oc = (this.Oc & -241) | 0;
      this.Qya = 0;
      this.Oc = (this.Oc & -3841) | 0;
    }
    set(a) {
      a.DT(this);
    }
  }
  uq.g = "38A";
  uq.u = sd;
  Object.assign(uq.prototype, { j: uq });
  class wg extends sd {
    constructor(a) {
      super(1);
      this.transform = a != null ? a : new qq();
      this.Oc = wg.next++;
    }
    set() {}
    mca(a) {
      let b = new qq();
      var c = a.length;
      b.set(a[c - 1].transform);
      for (c -= 2; c > -1; ) b.concat(a[c--].transform);
      return new wg(b);
    }
  }
  wg.g = "38B";
  wg.u = sd;
  Object.assign(wg.prototype, { j: wg });
  class wq extends sd {
    constructor(a, b) {
      b == null && (b = !0);
      super(3);
      this.enabled = a;
      this.Oc = (this.Oc &= -2) | (a ? 1 : 0);
      this.Pwa = b;
      this.Oc = (this.Oc &= -3) | (b ? 2 : 0);
    }
    set(a) {
      a.dMa(this);
    }
  }
  wq.g = "38C";
  wq.u = sd;
  Object.assign(wq.prototype, { j: wq });
  class vq extends sd {
    constructor(a, b) {
      b == null && (b = 1);
      super(2);
      this.enabled = a;
      this.Oc &= -257;
      a && (this.Oc |= 256);
      this.jh = b;
      this.Oc = (this.Oc & -256) | (1 << b);
    }
    set(a) {
      a.aMa(this);
    }
  }
  vq.g = "38D";
  vq.u = sd;
  Object.assign(vq.prototype, { j: vq });
  class xg extends sd {
    constructor() {
      super(4);
      this.fEa = !1;
      this.sI = this.JC = null;
      this.Oc = xg.next++;
    }
    set(a) {
      a.fla(this);
    }
    qL(a) {
      let b = a.K,
        c = a.P,
        d = a.N - a.K;
      a = a.X - a.P;
      this.sI = [
        new H(b, c, 0, 1),
        new H(b, c + a, 0, 1),
        new H(b + d, c + a, 0, 1),
        new H(b + d, c, 0, 1),
      ];
    }
  }
  xg.g = "38E";
  xg.u = sd;
  Object.assign(xg.prototype, { j: xg });
  class wf extends sd {
    constructor(a) {
      super(5);
      this.opacity = a < 0 ? 0 : a > 1 ? 1 : a;
      this.Oc = (a * 65535) | 0;
    }
    set(a) {
      a.gsb(this);
    }
    mca(a) {
      var b = a.length;
      let c = a[b - 1].opacity;
      for (b -= 2; b > -1; ) c *= a[b--].opacity;
      return new wf(c);
    }
    Ela(a) {
      this.opacity = a < 0 ? 0 : a > 1 ? 1 : a;
      this.Oc = (a * 65535) | 0;
    }
  }
  wf.g = "38F";
  wf.u = sd;
  Object.assign(wf.prototype, { j: wf });
