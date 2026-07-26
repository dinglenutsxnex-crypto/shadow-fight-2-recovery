// 050-canvas-renderer.js
// Domain: renderer-canvas  |  9 class(es)  |  tree root(s): Oh, Qf, ve, Qj, Lh
// Edit here. Run `npm run build` to reassemble the full bundle.
  class Oh {
    constructor() {
      this.context = null;
      this.TP = 1;
      this.width = this.height = 0;
    }
  }
  Oh.g = "32C";
  Object.assign(Oh.prototype, { j: Oh });
  class Qf {
    constructor() {
      this.ZC = !1;
      this.kB = [];
      this.Qc = 0;
      this.Dq = 63;
      this.Qv = Array(6);
      this.cL = Array(6);
      this.zba = [];
      this.vda = [];
      this.SI = [];
      this.pB = !1;
      this.Fl = [0, 0, 1, 1];
      this.Nca = new fc(0, 0);
      this.Pca = new hb(pa.sd, pa.sd, pa.Ld, pa.Ld);
      this.gz = null;
      this.Cya = new Dc(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      this.Bya = new Dc(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      this.xya = new sq();
      this.clearColor = new H(0, 0, 0, 1);
      this.am = null;
      this.wFa = 0.001;
      this.oA = 256;
      this.ti = 0;
      this.Yi = 1;
      this.currentTarget = this.Wd = null;
      Qf.current = this;
      this.type = ob.Vq(this);
      this.info = new Tw(this);
      this.Qv[0] = new uq(1, !0);
      this.Qv[1] = new wg();
      this.Qv[2] = new vq(!1, 1);
      this.Qv[3] = new wq(!1, !0);
      this.Qv[4] = new xg();
      this.Qv[5] = new wf(1);
    }
    B() {
      let a = this.kB.slice(),
        b = 0;
      for (; b < a.length; ) this.jD(a[b++]);
      this.Wd =
        this.xya =
        this.am =
        this.currentTarget =
        this.kB =
        this.SI =
          null;
    }
    ZA(a) {
      this.currentTarget = a;
      this.currentTarget.Pka();
    }
    ET(a) {
      let b = this.clearColor;
      b.x = a.x;
      b.y = a.y;
      b.z = a.z;
      b.w = a.w;
    }
    qtb() {
      let a = this.Fl;
      for (; a.length > 4; ) a.pop();
      a[0] = 0;
      a[1] = 0;
      a[2] = 1;
      a[3] = 1;
      this.pB = !0;
    }
    ZJa(a, b, c, d) {
      let e = this.Fl;
      e.push(a);
      e.push(b);
      e.push(c);
      e.push(d);
      this.pB = !0;
    }
    GJa() {
      let a = 0;
      for (; a < 4; ) (++a, this.Fl.pop());
      this.pB = !0;
    }
    j9a() {
      var a = !1;
      a == null && (a = !0);
      var b = 0,
        c = 0;
      let d = 1,
        e = 1;
      var f = 1;
      let g = 1,
        h = this.Fl,
        k = 0,
        l = h.length;
      for (; k < l; )
        ((b += f * h[k++]),
          (c += g * h[k++]),
          (d -= f * (1 - h[k++])),
          (e -= g * (1 - h[k++])),
          (f = d - b),
          (g = e - c));
      f = a ? this.currentTarget.TP : 1;
      a = this.currentTarget.width * f;
      f *= this.currentTarget.height;
      return new Ec(
        (a * b) | 0,
        (f * c) | 0,
        (a * (d - b)) | 0,
        (f * (e - c)) | 0,
      );
    }
    Cp() {
      this.ti = 0;
      this.zob();
      if (this.ZC) return !1;
      var a = this.currentTarget;
      if (a == null || a.context == null || a.width * a.height == 0) return !1;
      if (this.Nca.x != a.width || this.Nca.y != a.height) {
        let b = this.Nca;
        b.x = a.width;
        b.y = a.height;
        a = this.Pca;
        a.K = 0;
        a.P = 0;
        a.N = 0;
        a.X = 0;
        this.pB = !0;
      }
      return !0;
    }
    hQ() {}
    Ea(a, b) {
      this.am = b;
      this.pB && this.jM();
      if (a.oh) {
        a = this.xya.X0a(a);
        for (b = 0; b < a.length; ) a[b++].effect.update(this);
        this.uda(a);
      } else ((b = a.effect), b != null && b.update(this), this.RI(a));
      this.am = null;
    }
    RI(a) {
      a.effect != null &&
        a.effect.enabled != 0 &&
        a.bn != 1 &&
        (this.$w(a),
        this.Yi < this.wFa ||
          ((this.Wd = a), this.nz(a.effect), (this.Wd = null)));
    }
    clear() {
      this.pB && this.jM();
    }
    jM() {
      if (!this.pB) return !1;
      this.pB = !1;
      var a = 0,
        b = 0,
        c = 1,
        d = 1,
        e = 1;
      let f = 1,
        g = this.Fl,
        h = 0,
        k = g.length;
      for (; h < k; )
        ((a += e * g[h++]),
          (b += f * g[h++]),
          (c -= e * (1 - g[h++])),
          (d -= f * (1 - g[h++])),
          (e = c - a),
          (f = d - b));
      e = this.Pca;
      if (e.K == a && e.P == b && e.N == c && e.X == d) return !1;
      e = this.Pca;
      e.K = a;
      e.P = b;
      e.N = c;
      e.X = d;
      return !0;
    }
    zob() {
      this.Qc = 0;
      let a = this.Dq,
        b = 0;
      for (; b < 6; ) {
        let c = b++;
        this.cL[c] = this.Qv[c];
        (a & (1 << c)) != 0 && this.cL[c].set(this);
      }
    }
    uda(a) {
      let b = 0;
      for (; b < a.length; ) this.RI(a[b++]);
    }
    nz(a) {
      let b = this.uQ(a.type, this.Wd.type);
      b != null &&
        ((this.info.effect = a), (this.info.hb = this.Wd), b.Ea(this.info));
    }
    bAa(a) {
      let b = 0,
        c = this.kB;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.name == a) return d;
      }
      return null;
    }
    kya(a, b, c) {
      var d = null;
      d == null && (d = 0);
      d = this.O1(d);
      d.zF(a, b);
      this.kB.push(d);
      d.name = c != null ? c : "?";
      return d;
    }
    CP(a, b, c, d) {
      b == null && (b = 0);
      b = this.O1(b);
      this.kB.push(b);
      b.name = d != null ? d : "?";
      b.gx(a);
      c != null && b.RLa(c);
      return b;
    }
    l2a(a, b) {
      let c = this.O1(a.flags);
      c.name = "-";
      a.od(c, b.clone(), null);
      return c;
    }
    jD(a) {
      for (; a != null; ) {
        let b = a.nextPage;
        a.B();
        J.remove(this.kB, a);
        a = b;
      }
    }
    tm() {
      this.ZC = !0;
    }
    restoreContext() {
      this.ZC = !1;
    }
    lma() {}
    uQ(a, b, c) {
      c == null && (c = !1);
      let d = 0,
        e = this.SI.length;
      for (; d < e; ) {
        let f = d++;
        if (c != this.zba[f]) continue;
        let g = this.SI[f];
        if (g.Xd == a && g.ae == b)
          return (this.vda[f] == 0 && ((this.vda[f] = !0), g.init(this)), g);
      }
      return null;
    }
    H0(a) {
      let b = this.Bya,
        c = this.am.LA;
      (a.U & 240) > 0 && a.Qma();
      var d = a.hm;
      a = d.m11;
      var e = d.m12,
        f = d.m13,
        g = d.m14;
      let h = d.m21,
        k = d.m22,
        l = d.m23,
        n = d.m24,
        q = d.m31,
        r = d.m32,
        t = d.m33,
        x = d.m34,
        z = d.m41,
        A = d.m42,
        C = d.m43,
        B = d.m44;
      d = c.m11 * e + c.m12 * k + c.m13 * r + c.m14 * A;
      let D = c.m11 * f + c.m12 * l + c.m13 * t + c.m14 * C,
        F = c.m11 * g + c.m12 * n + c.m13 * x + c.m14 * B,
        M = c.m21 * e + c.m22 * k + c.m23 * r + c.m24 * A,
        Q = c.m21 * f + c.m22 * l + c.m23 * t + c.m24 * C,
        U = c.m21 * g + c.m22 * n + c.m23 * x + c.m24 * B,
        W = c.m31 * e + c.m32 * k + c.m33 * r + c.m34 * A,
        da = c.m31 * f + c.m32 * l + c.m33 * t + c.m34 * C,
        na = c.m31 * g + c.m32 * n + c.m33 * x + c.m34 * B;
      e = c.m41 * e + c.m42 * k + c.m43 * r + c.m44 * A;
      f = c.m41 * f + c.m42 * l + c.m43 * t + c.m44 * C;
      g = c.m41 * g + c.m42 * n + c.m43 * x + c.m44 * B;
      b.m11 = c.m11 * a + c.m12 * h + c.m13 * q + c.m14 * z;
      b.m12 = d;
      b.m13 = D;
      b.m14 = F;
      b.m21 = c.m21 * a + c.m22 * h + c.m23 * q + c.m24 * z;
      b.m22 = M;
      b.m23 = Q;
      b.m24 = U;
      b.m31 = c.m31 * a + c.m32 * h + c.m33 * q + c.m34 * z;
      b.m32 = W;
      b.m33 = da;
      b.m34 = na;
      b.m41 = c.m41 * a + c.m42 * h + c.m43 * q + c.m44 * z;
      b.m42 = e;
      b.m43 = f;
      b.m44 = g;
      return b;
    }
    li(a) {
      (a.U & 64) > 0 && a.Ix();
      var b = a.hm;
      a = b.m11;
      var c = b.m12,
        d = b.m14;
      let e = b.m21,
        f = b.m22,
        g = b.m24;
      b = new Dc(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      let h = this.am.LA,
        k = h.m11 * c + h.m12 * f,
        l = h.m11 * d + h.m12 * g + h.m14;
      c = h.m21 * c + h.m22 * f;
      d = h.m21 * d + h.m22 * g + h.m24;
      b.m11 = h.m11 * a + h.m12 * e;
      b.m12 = k;
      b.m14 = l;
      b.m21 = h.m21 * a + h.m22 * e;
      b.m22 = c;
      b.m24 = d;
      return b;
    }
    nfa(a) {
      (a.U & 64) > 0 && a.Ix();
      var b = a.hm;
      a = b.m11;
      var c = b.m12,
        d = b.m14;
      let e = b.m21,
        f = b.m22,
        g = b.m24;
      b = new Dc(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      let h = this.am.u4,
        k = h.m11 * c + h.m12 * f,
        l = h.m11 * d + h.m12 * g + h.m14;
      c = h.m21 * c + h.m22 * f;
      d = h.m21 * d + h.m22 * g + h.m24;
      b.m11 = h.m11 * a + h.m12 * e;
      b.m12 = k;
      b.m14 = l;
      b.m21 = h.m21 * a + h.m22 * e;
      b.m22 = c;
      b.m24 = d;
      return b;
    }
    ki(a) {
      return this.cL[a];
    }
    $d(a) {
      Qb.Fe(this.SI, function (b) {
        return b.Xd == a.Xd ? b.ae == a.ae : !1;
      }) || (this.SI.push(a), this.vda.push(!1), this.zba.push(ob.gUa(a, Sw)));
    }
    $w(a) {
      if (this.Dq != 0)
        for (var b = 0; b < 6; ) {
          if ((this.Dq & (1 << b)) == 0) {
            ++b;
            continue;
          }
          let c = a.lu[b];
          c != null
            ? c.Oc != this.cL[b].Oc &&
              ((this.cL[b] = c), (this.Qc |= 1 << b), c.set(this))
            : (this.Qc & (1 << b)) > 0 &&
              ((c = this.Qv[b]),
              (this.cL[b] = c),
              c.set(this),
              (this.Qc &= ~(1 << b)));
          ++b;
        }
    }
    gsb(a) {
      this.Yi = a.opacity;
    }
    dMa() {}
    aMa() {}
    DT(a) {
      this.fz = a.$Y;
    }
    fla() {}
    KD(a) {
      return -0.001 * a.Jb.translate.z;
    }
  }
  Qf.g = "32D";
  Object.assign(Qf.prototype, { j: Qf });
  class af extends Oh {
    constructor(a) {
      super();
      this.flags = a;
      this.id = af.Hfb++;
      this.parent = this.re = null;
      this.children = [];
      this.kj = 1;
      this.hj = -1;
      this.name = "?";
      this.nextPage = null;
      this.Xib = 0;
      new H(1, 1, 0, 1);
      this.Zg = !1;
      this.source = this.Qia = null;
    }
    B() {
      this.re = null;
      let a = 0,
        b = this.children;
      for (; a < b.length; ) b[a++].B();
      this.width = this.height = 0;
      this.Zg = !0;
      this.source != null && (this.source.CPa--, (this.source = null));
    }
    wXa(a) {
      let b = 0,
        c = this;
      for (; c.nextPage != null; ) ((c = c.nextPage), ++b);
      c.nextPage = a;
      a.Xib = b + 1;
    }
    $za(a) {
      let b = null,
        c = this;
      for (; c != null; ) {
        b = c.re.mt.v[a];
        if (b != null) break;
        c = c.nextPage;
      }
      return b;
    }
    zF(a, b) {
      this.width = a;
      this.height = b;
      this.TLa();
    }
    gx(a) {
      this.source != a && a.CPa++;
      this.source = a;
      this.width = a.width;
      this.height = a.height;
      let b = 0,
        c = this.children;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        d.width = a.width;
        d.height = a.height;
      }
      this.TLa();
    }
    RLa(a) {
      this.re = a;
      this.kj = 1 / a.scale;
      if (this.parent != null && this.Qia != null) {
        let b = this.parent.re.mt.v[this.Qia];
        a.offset(b.Pc.x, b.Pc.y);
      }
    }
    od(a, b, c) {
      this.children.push(a);
      a.parent = this;
      a.re = b;
      a.Qia = c;
      c != null && ((c = this.re.mt.v[c]), b.offset(c.Pc.x, c.Pc.y));
      a.width = this.width;
      a.height = this.height;
      a.kj = this.kj;
      a.hj = this.hj;
    }
    TLa() {
      this.hj++;
      let a = 0,
        b = this.children;
      for (; a < b.length; ) b[a++].hj = this.hj;
    }
  }
  af.g = "32E";
  af.u = Oh;
  Object.assign(af.prototype, { j: af });
  class ve {
    constructor(a, b, c) {
      b == null && (b = 1);
      this.mt = new ac();
      this.frames = a.slice();
      this.scale = b;
      this.rc = c;
      b = [];
      for (c = 0; c < a.length; ) b.push(a[c++].id);
      b.sort(function (d, e) {
        return d - e;
      });
      b = b[b.length - 1];
      this.kt = Array(b);
      for (c = 0; c < b; ) this.kt[c++] = null;
      for (b = 0; b < a.length; )
        ((c = a[b]), ++b, (this.kt[c.id] = c), (this.mt.v[c.name] = c));
    }
    offset(a, b) {
      let c = 0,
        d = this.frames;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        e.Pc.x += a;
        e.Pc.y += b;
      }
    }
    clone() {
      let a = [],
        b = 0,
        c = this.frames;
      for (; b < c.length; ) a.push(c[b++].clone());
      return new ve(a, this.scale, this.rc);
    }
    static o3(a) {
      switch (a.nn(0, 3)) {
        case "BMF":
          return ((a = new xq().fk(a)), new ve(yq.Wq(a), 1, yq.JAa(a)));
        case "TPS":
          return ((a = new qi().Fja(a)), new ve(Xs.Wq(a), a.aK.scale));
        default:
          throw 38;
      }
    }
  }
  ve.g = "32F";
  Object.assign(ve.prototype, { j: ve });
  class Qj {
    constructor(a, b, c, d, e, f, g, h) {
      this.id = a;
      this.name = b;
      this.ea = c;
      this.Pc = d;
      this.Dx = e;
      this.sj = f;
      this.iL = g;
      this.Yd = h;
    }
    clone() {
      let a = this.Pc;
      return new Qj(
        this.id,
        this.name,
        new fc(this.ea.x, this.ea.y),
        new Ec(a.x, a.y, a.w, a.v),
        this.Dx,
        this.sj != null ? new fc(this.sj.x, this.sj.y) : null,
        this.iL,
        this.Yd,
      );
    }
  }
  Qj.g = "330";
  Object.assign(Qj.prototype, { j: Qj });
  class Lh {
    constructor() {
      this.xDa = new Dc(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      this.hm = new Dc(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      this.U = 15;
      this.scale = new H(1, 1, 1, 1);
      this.translate = new H(0, 0, 0, 1);
      this.matrix = new Dc(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    O5() {
      this.U |= 256;
    }
    Jrb() {
      let a = this.matrix;
      a.m11 = 1;
      a.m12 = 0;
      a.m21 = 0;
      a.m22 = 1;
      this.U |= 250;
    }
    g8a() {
      let a, b;
      if ((this.U & 8) > 0) {
        a = Math.abs(this.scale.x);
        b = Math.abs(this.scale.y);
        var c = Math.abs(this.scale.z);
      } else
        ((c = this.matrix),
          (a = Math.abs(c.m11) + Math.abs(c.m12) + Math.abs(c.m13)),
          (b = Math.abs(c.m21) + Math.abs(c.m22) + Math.abs(c.m23)),
          (c = Math.abs(c.m31) + Math.abs(c.m32) + Math.abs(c.m33)));
      return Math.max(Math.max(a, b), c);
    }
    tsb(a, b) {
      if ((b.U & 256) > 0) this.usb(a, b);
      else {
        var c = a.U,
          d = b.U;
        if ((c & 1) > 0) {
          if ((b.U & 256) > 0) {
            this.translate.x = b.translate.x;
            this.translate.y = b.translate.y;
            this.scale.x = b.scale.x;
            this.scale.y = b.scale.y;
            let e = this.matrix,
              f = b.matrix;
            e.m11 = f.m11;
            e.m12 = f.m12;
            e.m21 = f.m21;
            e.m22 = f.m22;
          } else {
            let e = this.translate,
              f = b.translate;
            e.x = f.x;
            e.y = f.y;
            e.z = f.z;
            let g = this.scale,
              h = b.scale;
            g.x = h.x;
            g.y = h.y;
            g.z = h.z;
            let k = this.matrix,
              l = b.matrix;
            k.m11 = l.m11;
            k.m12 = l.m12;
            k.m13 = l.m13;
            k.m21 = l.m21;
            k.m22 = l.m22;
            k.m23 = l.m23;
            k.m31 = l.m31;
            k.m32 = l.m32;
            k.m33 = l.m33;
          }
          this.U = b.U | 240;
        } else if ((d & 1) > 0) {
          if ((a.U & 256) > 0) {
            this.translate.x = a.translate.x;
            this.translate.y = a.translate.y;
            this.scale.x = a.scale.x;
            this.scale.y = a.scale.y;
            let e = this.matrix,
              f = a.matrix;
            e.m11 = f.m11;
            e.m12 = f.m12;
            e.m21 = f.m21;
            e.m22 = f.m22;
          } else {
            let e = this.translate,
              f = a.translate;
            e.x = f.x;
            e.y = f.y;
            e.z = f.z;
            let g = this.scale,
              h = a.scale;
            g.x = h.x;
            g.y = h.y;
            g.z = h.z;
            let k = this.matrix,
              l = a.matrix;
            k.m11 = l.m11;
            k.m12 = l.m12;
            k.m13 = l.m13;
            k.m21 = l.m21;
            k.m22 = l.m22;
            k.m23 = l.m23;
            k.m31 = l.m31;
            k.m32 = l.m32;
            k.m33 = l.m33;
          }
          this.U = a.U | 240;
        } else if ((c & 12) == 12 && (d & 8) > 0) {
          if ((c & 2) > 0) {
            let f = b.matrix,
              g = this.matrix;
            g.m11 = f.m11;
            g.m12 = f.m12;
            g.m13 = f.m13;
            g.m21 = f.m21;
            g.m22 = f.m22;
            g.m23 = f.m23;
            g.m31 = f.m31;
            g.m32 = f.m32;
            g.m33 = f.m33;
          } else if ((d & 2) > 0) {
            let f = a.matrix,
              g = this.matrix;
            g.m11 = f.m11;
            g.m12 = f.m12;
            g.m13 = f.m13;
            g.m21 = f.m21;
            g.m22 = f.m22;
            g.m23 = f.m23;
            g.m31 = f.m31;
            g.m32 = f.m32;
            g.m33 = f.m33;
          } else {
            let f = a.matrix,
              g = b.matrix,
              h = g.m11,
              k = g.m12,
              l = g.m13,
              n = g.m21,
              q = g.m22,
              r = g.m23,
              t = g.m31,
              x = g.m32,
              z = g.m33,
              A = f.m11 * k + f.m12 * q + f.m13 * x,
              C = f.m11 * l + f.m12 * r + f.m13 * z,
              B = f.m21 * k + f.m22 * q + f.m23 * x,
              D = f.m21 * l + f.m22 * r + f.m23 * z,
              F = f.m31 * k + f.m32 * q + f.m33 * x,
              M = f.m31 * l + f.m32 * r + f.m33 * z,
              Q = this.matrix;
            Q.m11 = f.m11 * h + f.m12 * n + f.m13 * t;
            Q.m12 = A;
            Q.m13 = C;
            Q.m21 = f.m21 * h + f.m22 * n + f.m23 * t;
            Q.m22 = B;
            Q.m23 = D;
            Q.m31 = f.m31 * h + f.m32 * n + f.m33 * t;
            Q.m32 = F;
            Q.m33 = M;
          }
          this.U = (this.U & -4) | 248;
          let e = a.scale.x;
          if ((c & 2) > 0) {
            let f = a.scale.x,
              g = b.translate,
              h = a.translate;
            this.translate.x = g.x * f + h.x;
            this.translate.y = g.y * f + h.y;
            this.translate.z = g.z * f + h.z;
          } else {
            let f = a.scale.x,
              g = a.matrix,
              h = b.translate,
              k = h.x,
              l = h.y,
              n = h.z,
              q = a.translate;
            this.translate.x = (g.m11 * k + g.m12 * l + g.m13 * n) * f + q.x;
            this.translate.y = (g.m21 * k + g.m22 * l + g.m23 * n) * f + q.y;
            this.translate.z = (g.m31 * k + g.m32 * l + g.m33 * n) * f + q.z;
          }
          this.U = (this.U & -2) | 240;
          if ((d & 4) > 0)
            ((this.scale.x = this.scale.y = this.scale.z = e * b.scale.x),
              (this.U = (this.U & -2) | 244));
          else {
            let f = b.scale;
            this.scale.x = f.x * e;
            this.scale.y = f.y * e;
            this.scale.z = f.z * e;
            this.U = (this.U & -6) | 240;
          }
        } else {
          if ((c & 8) > 0 && (d & 8) > 0) {
            let e = a.matrix,
              f = a.scale,
              g = f.x,
              h = f.y,
              k = f.z,
              l = e.m11 * g,
              n = e.m12 * h,
              q = e.m13 * k,
              r = e.m21 * g,
              t = e.m22 * h,
              x = e.m23 * k,
              z = e.m31 * g,
              A = e.m32 * h,
              C = e.m33 * k,
              B = b.matrix,
              D = b.scale,
              F = D.x,
              M = D.y,
              Q = D.z,
              U = B.m11 * F,
              W = B.m12 * M,
              da = B.m13 * Q,
              na = B.m21 * F,
              ka = B.m22 * M,
              qa = B.m23 * Q,
              oa = B.m31 * F,
              Aa = B.m32 * M,
              Ta = B.m33 * Q,
              Ba = this.matrix;
            Ba.m11 = l * U + n * na + q * oa;
            Ba.m12 = l * W + n * ka + q * Aa;
            Ba.m13 = l * da + n * qa + q * Ta;
            Ba.m21 = r * U + t * na + x * oa;
            Ba.m22 = r * W + t * ka + x * Aa;
            Ba.m23 = r * da + t * qa + x * Ta;
            Ba.m31 = z * U + A * na + C * oa;
            Ba.m32 = z * W + A * ka + C * Aa;
            Ba.m33 = z * da + A * qa + C * Ta;
            this.U = 240;
            let ab = b.translate,
              hc = ab.x,
              Jb = ab.y,
              nb = ab.z,
              zb = a.translate;
            this.translate.x = l * hc + n * Jb + q * nb + zb.x;
            this.translate.y = r * hc + t * Jb + x * nb + zb.y;
            this.translate.z = z * hc + A * Jb + C * nb + zb.z;
          } else if ((c & 8) > 0) {
            let e = a.matrix,
              f = a.scale,
              g = f.x,
              h = f.y,
              k = f.z,
              l = e.m11 * g,
              n = e.m12 * h,
              q = e.m13 * k,
              r = e.m21 * g,
              t = e.m22 * h,
              x = e.m23 * k,
              z = e.m31 * g,
              A = e.m32 * h,
              C = e.m33 * k,
              B = b.matrix,
              D = B.m11,
              F = B.m12,
              M = B.m13,
              Q = B.m21,
              U = B.m22,
              W = B.m23,
              da = B.m31,
              na = B.m32,
              ka = B.m33,
              qa = this.matrix;
            qa.m11 = l * D + n * Q + q * da;
            qa.m12 = l * F + n * U + q * na;
            qa.m13 = l * M + n * W + q * ka;
            qa.m21 = r * D + t * Q + x * da;
            qa.m22 = r * F + t * U + x * na;
            qa.m23 = r * M + t * W + x * ka;
            qa.m31 = z * D + A * Q + C * da;
            qa.m32 = z * F + A * U + C * na;
            qa.m33 = z * M + A * W + C * ka;
            this.U = 240;
            let oa = b.translate,
              Aa = oa.x,
              Ta = oa.y,
              Ba = oa.z,
              ab = a.translate;
            this.translate.x = l * Aa + n * Ta + q * Ba + ab.x;
            this.translate.y = r * Aa + t * Ta + x * Ba + ab.y;
            this.translate.z = z * Aa + A * Ta + C * Ba + ab.z;
          } else if ((d & 8) > 0) {
            let e = a.matrix,
              f = b.matrix,
              g = b.scale,
              h = g.x,
              k = g.y,
              l = g.z,
              n = f.m11 * h,
              q = f.m12 * k,
              r = f.m13 * l,
              t = f.m21 * h,
              x = f.m22 * k,
              z = f.m23 * l,
              A = f.m31 * h,
              C = f.m32 * k,
              B = f.m33 * l,
              D = e.m11 * q + e.m12 * x + e.m13 * C,
              F = e.m11 * r + e.m12 * z + e.m13 * B,
              M = e.m21 * q + e.m22 * x + e.m23 * C,
              Q = e.m21 * r + e.m22 * z + e.m23 * B,
              U = e.m31 * q + e.m32 * x + e.m33 * C,
              W = e.m31 * r + e.m32 * z + e.m33 * B,
              da = this.matrix;
            da.m11 = e.m11 * n + e.m12 * t + e.m13 * A;
            da.m12 = D;
            da.m13 = F;
            da.m21 = e.m21 * n + e.m22 * t + e.m23 * A;
            da.m22 = M;
            da.m23 = Q;
            da.m31 = e.m31 * n + e.m32 * t + e.m33 * A;
            da.m32 = U;
            da.m33 = W;
            this.U = 240;
            let na = b.translate,
              ka = na.x,
              qa = na.y,
              oa = na.z,
              Aa = a.translate;
            this.translate.x = e.m11 * ka + e.m12 * qa + e.m13 * oa + Aa.x;
            this.translate.y = e.m21 * ka + e.m22 * qa + e.m23 * oa + Aa.y;
            this.translate.z = e.m31 * ka + e.m32 * qa + e.m33 * oa + Aa.z;
          } else {
            let e = a.matrix,
              f = b.matrix,
              g = f.m11,
              h = f.m12,
              k = f.m13,
              l = f.m21,
              n = f.m22,
              q = f.m23,
              r = f.m31,
              t = f.m32,
              x = f.m33,
              z = e.m11 * h + e.m12 * n + e.m13 * t,
              A = e.m11 * k + e.m12 * q + e.m13 * x,
              C = e.m21 * h + e.m22 * n + e.m23 * t,
              B = e.m21 * k + e.m22 * q + e.m23 * x,
              D = e.m31 * h + e.m32 * n + e.m33 * t,
              F = e.m31 * k + e.m32 * q + e.m33 * x,
              M = this.matrix;
            M.m11 = e.m11 * g + e.m12 * l + e.m13 * r;
            M.m12 = z;
            M.m13 = A;
            M.m21 = e.m21 * g + e.m22 * l + e.m23 * r;
            M.m22 = C;
            M.m23 = B;
            M.m31 = e.m31 * g + e.m32 * l + e.m33 * r;
            M.m32 = D;
            M.m33 = F;
            this.U = 240;
            let Q = b.translate,
              U = Q.x,
              W = Q.y,
              da = Q.z,
              na = a.translate;
            this.translate.x = e.m11 * U + e.m12 * W + e.m13 * da + na.x;
            this.translate.y = e.m21 * U + e.m22 * W + e.m23 * da + na.y;
            this.translate.z = e.m31 * U + e.m32 * W + e.m33 * da + na.z;
          }
          this.U = (this.U & -2) | 240;
        }
      }
    }
    usb(a, b) {
      let c = a.U,
        d = b.U;
      if ((c & 1) > 0) {
        this.translate.x = b.translate.x;
        this.translate.y = b.translate.y;
        this.scale.x = b.scale.x;
        this.scale.y = b.scale.y;
        let e = this.matrix,
          f = b.matrix;
        e.m11 = f.m11;
        e.m12 = f.m12;
        e.m21 = f.m21;
        e.m22 = f.m22;
        this.U = b.U | 240;
      } else if ((d & 1) > 0) {
        this.translate.x = a.translate.x;
        this.translate.y = a.translate.y;
        this.scale.x = a.scale.x;
        this.scale.y = a.scale.y;
        let e = this.matrix,
          f = a.matrix;
        e.m11 = f.m11;
        e.m12 = f.m12;
        e.m21 = f.m21;
        e.m22 = f.m22;
        this.U = a.U | 240;
      } else if ((c & 12) == 12 && (d & 8) > 0) {
        if ((c & 2) > 0) {
          let f = b.matrix,
            g = this.matrix;
          g.m11 = f.m11;
          g.m12 = f.m12;
          g.m21 = f.m21;
          g.m22 = f.m22;
        } else if ((d & 2) > 0) {
          let f = a.matrix,
            g = this.matrix;
          g.m11 = f.m11;
          g.m12 = f.m12;
          g.m21 = f.m21;
          g.m22 = f.m22;
        } else {
          let f = a.matrix,
            g = b.matrix,
            h = g.m11,
            k = g.m12,
            l = g.m21,
            n = g.m22,
            q = f.m11 * k + f.m12 * n,
            r = f.m21 * k + f.m22 * n,
            t = this.matrix;
          t.m11 = f.m11 * h + f.m12 * l;
          t.m12 = q;
          t.m21 = f.m21 * h + f.m22 * l;
          t.m22 = r;
        }
        this.U = (this.U & -4) | 248;
        let e = a.scale.x;
        if ((c & 2) > 0) {
          let f = a.scale.x,
            g = b.translate,
            h = a.translate;
          this.translate.x = g.x * f + h.x;
          this.translate.y = g.y * f + h.y;
        } else {
          let f = a.scale.x,
            g = a.matrix,
            h = b.translate,
            k = h.x,
            l = h.y,
            n = a.translate;
          this.translate.x = (g.m11 * k + g.m12 * l) * f + n.x;
          this.translate.y = (g.m21 * k + g.m22 * l) * f + n.y;
        }
        this.U = (this.U & -2) | 240;
        if ((d & 4) > 0)
          ((this.scale.x = this.scale.y = e * b.scale.x),
            (this.U = (this.U & -2) | 244));
        else {
          let f = b.scale;
          this.scale.x = f.x * e;
          this.scale.y = f.y * e;
          this.U = (this.U & -6) | 240;
        }
      } else {
        if ((c & 8) > 0 && (d & 8) > 0) {
          let e = a.matrix,
            f = a.scale,
            g = f.x,
            h = f.y,
            k = e.m11 * g,
            l = e.m12 * h,
            n = e.m21 * g,
            q = e.m22 * h,
            r = b.matrix,
            t = b.scale,
            x = t.x,
            z = t.y,
            A = r.m11 * x,
            C = r.m12 * z,
            B = r.m21 * x,
            D = r.m22 * z,
            F = this.matrix;
          F.m11 = k * A + l * B;
          F.m12 = k * C + l * D;
          F.m21 = n * A + q * B;
          F.m22 = n * C + q * D;
          this.U = (this.U & -16) | 240;
          let M = b.translate,
            Q = M.x,
            U = M.y,
            W = a.translate;
          this.translate.x = k * Q + l * U + W.x;
          this.translate.y = n * Q + q * U + W.y;
        } else if ((c & 8) > 0) {
          let e = a.matrix,
            f = a.scale,
            g = f.x,
            h = f.y,
            k = e.m11 * g,
            l = e.m12 * h,
            n = e.m21 * g,
            q = e.m22 * h,
            r = b.matrix,
            t = r.m11,
            x = r.m12,
            z = r.m21,
            A = r.m22,
            C = this.matrix;
          C.m11 = k * t + l * z;
          C.m12 = k * x + l * A;
          C.m21 = n * t + q * z;
          C.m22 = n * x + q * A;
          this.U = (this.U & -16) | 240;
          let B = b.translate,
            D = B.x,
            F = B.y,
            M = a.translate;
          this.translate.x = k * D + l * F + M.x;
          this.translate.y = n * D + q * F + M.y;
        } else if ((d & 8) > 0) {
          let e = a.matrix,
            f = b.matrix,
            g = b.scale,
            h = g.x,
            k = g.y,
            l = f.m11 * h,
            n = f.m12 * k,
            q = f.m21 * h,
            r = f.m22 * k,
            t = e.m11 * n + e.m12 * r,
            x = e.m21 * n + e.m22 * r,
            z = this.matrix;
          z.m11 = e.m11 * l + e.m12 * q;
          z.m12 = t;
          z.m21 = e.m21 * l + e.m22 * q;
          z.m22 = x;
          this.U = (this.U & -16) | 240;
          let A = b.translate,
            C = A.x,
            B = A.y,
            D = a.translate;
          this.translate.x = e.m11 * C + e.m12 * B + D.x;
          this.translate.y = e.m21 * C + e.m22 * B + D.y;
        } else {
          let e = a.matrix,
            f = b.matrix,
            g = f.m11,
            h = f.m12,
            k = f.m21,
            l = f.m22,
            n = e.m11 * h + e.m12 * l,
            q = e.m21 * h + e.m22 * l,
            r = this.matrix;
          r.m11 = e.m11 * g + e.m12 * k;
          r.m12 = n;
          r.m21 = e.m21 * g + e.m22 * k;
          r.m22 = q;
          this.U = (this.U & -16) | 240;
          let t = b.translate,
            x = t.x,
            z = t.y,
            A = a.translate;
          this.translate.x = e.m11 * x + e.m12 * z + A.x;
          this.translate.y = e.m21 * x + e.m22 * z + A.y;
        }
        this.U = (this.U & -2) | 240;
      }
    }
    tYa(a, b) {
      (this.U & 16) > 0 && this.Qma();
      var c = this.hm;
      let d = a.x,
        e = a.y;
      a = a.z;
      c = new H(
        c.m11 * d + c.m12 * e + c.m13 * a + c.m14,
        c.m21 * d + c.m22 * e + c.m23 * a + c.m24,
        c.m31 * d + c.m32 * e + c.m33 * a + c.m34,
        1,
      );
      b != null && ((b.x = c.x), (b.y = c.y), (b.z = c.z));
      return c;
    }
    $m(a, b) {
      (this.U & 64) > 0 && this.Ix();
      let c = this.hm;
      a = new H(
        c.m11 * a.x + c.m12 * a.y + c.m14,
        c.m21 * a.x + c.m22 * a.y + c.m24,
        0,
        1,
      );
      b != null && ((b.x = a.x), (b.y = a.y));
      return a;
    }
    fI(a, b) {
      (this.U & 128) > 0 && this.gzb();
      let c = this.xDa;
      a = new H(
        c.m11 * a.x + c.m12 * a.y + c.m14,
        c.m21 * a.x + c.m22 * a.y + c.m24,
        0,
        1,
      );
      b != null && ((b.x = a.x), (b.y = a.y));
      return a;
    }
    Qma() {
      let a = this.hm;
      if ((this.U & 1) > 0)
        ((a.m11 = 1),
          (a.m12 = 0),
          (a.m13 = 0),
          (a.m21 = 0),
          (a.m22 = 1),
          (a.m23 = 0),
          (a.m31 = 0),
          (a.m32 = 0),
          (a.m33 = 1),
          (a.m14 = 0),
          (a.m24 = 0),
          (a.m34 = 0));
      else {
        var b = this.matrix;
        if ((this.U & 8) > 0) {
          let c = this.scale.x,
            d = this.scale.y,
            e = this.scale.z;
          a.m11 = b.m11 * c;
          a.m12 = b.m12 * d;
          a.m13 = b.m13 * e;
          a.m21 = b.m21 * c;
          a.m22 = b.m22 * d;
          a.m23 = b.m23 * e;
          a.m31 = b.m31 * c;
          a.m32 = b.m32 * d;
          a.m33 = b.m33 * e;
        } else
          ((a.m11 = b.m11),
            (a.m12 = b.m12),
            (a.m13 = b.m13),
            (a.m21 = b.m21),
            (a.m22 = b.m22),
            (a.m23 = b.m23),
            (a.m31 = b.m31),
            (a.m32 = b.m32),
            (a.m33 = b.m33));
        b = this.translate;
        a.m14 = b.x;
        a.m24 = b.y;
        a.m34 = b.z;
      }
      this.U &= -81;
    }
    Ix() {
      let a = this.hm;
      if ((this.U & 1) > 0)
        ((a.m11 = 1),
          (a.m12 = 0),
          (a.m21 = 0),
          (a.m22 = 1),
          (a.m14 = 0),
          (a.m24 = 0));
      else {
        let c = this.matrix;
        if ((this.U & 8) > 0) {
          var b = this.scale;
          let d = b.x;
          b = b.y;
          a.m11 = c.m11 * d;
          a.m12 = c.m12 * b;
          a.m21 = c.m21 * d;
          a.m22 = c.m22 * b;
        } else
          ((a.m11 = c.m11), (a.m12 = c.m12), (a.m21 = c.m21), (a.m22 = c.m22));
        a.m14 = this.translate.x;
        a.m24 = this.translate.y;
      }
      this.U &= -65;
    }
    gzb() {
      let a = this.xDa;
      var b = this.matrix;
      if ((this.U & 1) > 0)
        ((a.m11 = 1),
          (a.m12 = 0),
          (a.m21 = 0),
          (a.m22 = 1),
          (a.m14 = 0),
          (a.m24 = 0));
      else {
        if ((this.U & 8) > 0)
          if ((this.U & 12) == 12) {
            var c = 1 / this.scale.x,
              d = b.m12 * c;
            a.m11 = b.m11 * c;
            a.m12 = b.m21 * c;
            a.m21 = d;
            a.m22 = b.m22 * c;
          } else {
            c = this.scale;
            var e = c.x,
              f = c.y;
            c = b.m11 * e;
            d = b.m12 * f;
            e *= b.m21;
            b = b.m22 * f;
            f = 1 / (c * b - d * e);
            a.m11 = b * f;
            a.m12 = -d * f;
            a.m21 = -e * f;
            a.m22 = c * f;
          }
        else
          ((this.U & 64) > 0 && this.Ix(),
            (b = this.hm),
            (c = 1 / (b.m11 * b.m22 - b.m12 * b.m21)),
            (d = b.m11 * c),
            (a.m11 = b.m22 * c),
            (a.m12 = -b.m12 * c),
            (a.m21 = -b.m21 * c),
            (a.m22 = d));
        a.m14 = -(a.m11 * this.translate.x + a.m12 * this.translate.y);
        a.m24 = -(a.m21 * this.translate.x + a.m22 * this.translate.y);
      }
      this.U &= -129;
    }
  }
  Lh.g = "331";
  Object.assign(Lh.prototype, { j: Lh });
  class Mk extends Oh {
    constructor(a) {
      super();
      this.GZa = a;
      this.eI = 0;
      this.isVisible = !0;
      this.fullscreen = !1;
      this.mF = this.gS = null;
      this.Nia = !1;
      this.LIa = 0;
      this.pi = [];
      this.fia = new fc(0, 0);
      this.vr = new fb();
      this.Ip = new fb();
      this.Gp = new fb();
      this.MHa = new fb();
      this.THa = new fb();
      this.bIa = new fb();
      this.tm = new fb();
      this.uA = new fb();
      new fb();
      let b = window.document,
        c = window,
        d = this;
      a != null
        ? ((this.canvas = b.getElementById(a)),
          this.canvas == null &&
            ((this.canvas = b.createElement("canvas")),
            (this.canvas.id = a),
            b.body.appendChild(this.canvas)))
        : ((this.canvas = b.createElement("canvas")),
          (this.canvas.id = "gfx"),
          (this.canvas.style.position = "absolute"),
          (this.canvas.style.width = "100%"),
          (this.canvas.style.height = "100%"),
          (this.canvas.style.touchAction = "none"),
          (this.canvas.style.userSelect = "none"),
          (this.canvas.style.outline = "none"),
          this.canvas.style.setProperty("-webkit-user-select", "none"),
          (this.canvas.style.zIndex = "0"),
          b.body.appendChild(this.canvas),
          (this.canvas.tabIndex = 0),
          this.addListener(c, "load", function () {
            let e = d.canvas;
            e != null && e.focus();
          }));
      this.width = this.canvas.width;
      this.height = this.canvas.height;
      this.V6 = Math.round(this.canvas.clientWidth * this.W0());
      this.U6 = Math.round(this.canvas.clientHeight * this.W0());
      this.addListener(c, "contextmenu", function (e) {
        e.preventDefault();
      });
      c.oncontextmenu = function () {
        return !1;
      };
      this.addListener(b, "visibilitychange", function () {
        d.isVisible = b.visibilityState == "visible";
        d.isVisible ? d.Ip.notify() : d.Gp.notify();
      });
      this.Fcb() &&
        this.addListener(b, "fullscreenchange", function () {
          d.fullscreen = document.fullscreen;
          d.fullscreen ? d.MHa.notify() : d.THa.notify();
        });
      this.addListener(c.screen.orientation, "change", function () {
        d.Nia = !0;
        d.LIa = window.performance.now();
      });
      this.canvas.addEventListener(
        "touchcancel",
        function (e) {
          e.preventDefault();
        },
        { passive: !1 },
      );
      this.canvas.addEventListener(
        "touchend",
        function (e) {
          e.preventDefault();
        },
        { passive: !1 },
      );
      this.canvas.addEventListener(
        "touchstart",
        function (e) {
          e.preventDefault();
        },
        { passive: !1 },
      );
      try {
        ((this.mF = new ResizeObserver(function (e) {
          try {
            let f = e[0];
            f.devicePixelContentBoxSize
              ? (d.gS = new fc(
                  f.devicePixelContentBoxSize[0].inlineSize,
                  f.devicePixelContentBoxSize[0].blockSize,
                ))
              : (d.mF.disconnect(), (d.mF = null));
          } catch (f) {}
        })),
          this.mF.observe(this.canvas, { box: ["device-pixel-content-box"] }));
      } catch (e) {
        this.mF = null;
      }
    }
    S9a() {
      return this.V6 / this.U6;
    }
    W0() {
      return window.devicePixelRatio;
    }
    nbb(a) {
      a == null && (a = { willReadFrequently: !1 });
      this.context = this.canvas.getContext("2d", a);
      this.eI = 1;
      let b = this;
      this.addListener(this.canvas, "contextlost", function (c) {
        c.preventDefault();
        b.tm.notify();
      });
      this.addListener(this.canvas, "contextrestored", function () {
        b.uA.notify();
      });
    }
    Qbb(a) {
      function b() {
        Kc.init(f.context);
        f.uA.notify();
      }
      function c(g) {
        g.preventDefault();
        f.tm.notify();
      }
      function d(g) {
        console.log(g.statusMessage || "Unknown error");
      }
      var e;
      e == null && (e = 1);
      a = a != null ? a : { stencil: !0 };
      let f = this;
      this.addListener(this.canvas, "webglcontextcreationerror", d);
      this.addListener(this.canvas, "webglcontextlost", c);
      this.addListener(this.canvas, "webglcontextrestored", b);
      try {
        if (
          ((this.context = this.canvas.getContext(
            "webgl" + (e == 2 ? "2" : ""),
            a,
          )),
          this.context != null)
        ) {
          this.eI = 2;
          Kc.init(this.context);
          return;
        }
      } catch (g) {
        this.context = null;
      }
      this.canvas.removeEventListener("webglcontextcreationerror", d);
      this.canvas.removeEventListener("webglcontextlost", c);
      this.canvas.removeEventListener("webglcontextrestored", b);
    }
    j8a() {
      try {
        switch (window.screen.orientation.type) {
          case "landscape-primary":
          case "landscape-secondary":
            return 1;
          case "portrait-primary":
          case "portrait-secondary":
            return 0;
          default:
            return null;
        }
      } catch (a) {
        return window.orientation == 0 ? 0 : 1;
      }
    }
    B() {
      this.Qw();
      this.uA =
        this.tm =
        this.bIa =
        this.THa =
        this.MHa =
        this.Gp =
        this.Ip =
        this.vr =
          null;
      this.GZa == null && this.canvas.remove();
      this.pi = this.context = this.canvas = null;
      window.oncontextmenu = null;
      this.mF != null && this.mF.disconnect();
    }
    update() {
      if (this.gS != null) (this.HMa(this.gS.x, this.gS.y), (this.gS = null));
      else {
        var a = !1;
        this.Nia &&
          ((this.canvas.style.visibility = "hidden"),
          window.performance.now() - this.LIa > 250 &&
            ((this.Nia = !1), (a = this.jAa = !0)));
        var b = Math.round(this.canvas.clientWidth * this.W0()),
          c = Math.round(this.canvas.clientHeight * this.W0());
        if (this.jAa || this.fia.x != b || this.fia.y != c)
          (this.HMa(b, c),
            a &&
              ((this.canvas.style.visibility = ""),
              this.bIa.notify(this.j8a())));
      }
    }
    Fcb() {
      return document.fullscreenEnabled === !0;
    }
    Pka() {
      this.context instanceof WebGLRenderingContext &&
        this.context.bindFramebuffer(36160, null);
    }
    HMa(a, b) {
      this.V6 = a;
      this.U6 = b;
      let c = this.fia;
      c.x = a;
      c.y = b;
      this.width = (this.V6 / this.TP) | 0;
      this.height = (this.U6 / this.TP) | 0;
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.jAa = !1;
      this.vr.notify();
    }
    addListener(a, b, c) {
      let d = {};
      d.target = a;
      d.type = b;
      d.listener = c;
      this.pi.push(d);
      a.addEventListener(b, c);
    }
    Qw() {
      let a = 0,
        b = this.pi;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        Kb.Ve(c, "target").removeEventListener(
          Kb.Ve(c, "type"),
          Kb.Ve(c, "listener"),
        );
      }
      window.screen.orientation.onchange = null;
    }
  }
  Mk.g = "332";
  Mk.u = Oh;
  Object.assign(Mk.prototype, { j: Mk });
  class Nk extends Qf {
    constructor() {
      super();
      this.Gva = 0;
      this.Dxa = !0;
      this.Cc = this.context = null;
      this.fz = 0;
      this.El = new Dc(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      this.globalCompositeOperation = null;
      this.XC = Array(5);
      this.XC[0] = "source-over";
      this.XC[1] = "source-over";
      this.XC[2] = "multiply";
      this.XC[3] = "lighter";
      this.XC[4] = "screen";
      this.Ox = this.It = null;
      this.Yxa = [];
      this.tA = [null];
      let a = 0;
      for (; a < 3; ) {
        ++a;
        var b = this.tA,
          c = b.push;
        let d = window.document
          .createElement("canvas")
          .getContext("2d", { alpha: !0, willReadFrequently: !0 });
        this.m5(d, 1024, 1024);
        c.call(b, d);
      }
    }
    lma() {
      this.$d(new zq());
      this.$d(new Aq());
      this.$d(new Bq());
      this.$d(new Cq());
      this.$d(new Dq());
      this.$d(new Eq());
      this.$d(new Ud());
      this.$d(new Fq());
      this.$d(new Gq());
      this.$d(new Hq());
      let a;
      this.$d(new Ud($e));
      a = new Ph();
      this.$d(a);
      this.$d(new Iq());
    }
    ZA(a, b) {
      b == null && (b = !0);
      super.ZA(a, b);
      this.context = a.context;
      this.tA[0] = this.context;
    }
    B() {
      super.B();
      this.Cc = this.context = null;
      let a = 0,
        b = this.tA;
      for (; a < b.length; ) this.m5(b[a++], 1, 1);
      this.tA = null;
    }
    clear(a) {
      super.clear();
      a = a != null ? a : this.clearColor;
      var b = 0,
        c = 0,
        d = 1,
        e = 1,
        f = 1,
        g = 1,
        h = this.Fl,
        k = 0;
      let l = h.length;
      for (; k < l; )
        ((b += f * h[k++]),
          (c += g * h[k++]),
          (d -= f * (1 - h[k++])),
          (e -= g * (1 - h[k++])),
          (f = d - b),
          (g = e - c));
      f = b;
      g = c;
      k = this.currentTarget.width;
      h = this.currentTarget.height;
      c = (k * f) | 0;
      b = (h * g) | 0;
      d = (k * (d - f)) | 0;
      e = (h * (e - g)) | 0;
      this.Dxa ||
        ((b = c = 0),
        (d = this.currentTarget.width),
        (e = this.currentTarget.height));
      this.clearRect(c, b, d, e);
      a.w > this.wFa &&
        ((f = ((a.x * 255) | 0) & 255),
        (g = ((a.y * 255) | 0) & 255),
        (h = ((a.z * 255) | 0) & 255),
        this.hk(
          a.w == 1
            ? "rgb(" + f + "," + g + "," + h + ")"
            : "rgba(" + f + "," + g + "," + h + "," + We.toFixed(a.w, 2) + ")",
        ),
        this.fillRect(c, b, d, e));
    }
    Cp() {
      if (!super.Cp()) return !1;
      this.Cc = this.context;
      var a = this.Ox;
      a != null && a.restore();
      this.Ox = null;
      a = this.It;
      a != null && a.restore();
      this.It = null;
      this.resetTransform();
      this.context.globalAlpha = 1;
      this.context.save();
      this.BPa();
      return !0;
    }
    hQ() {
      super.hQ();
      var a = this.Ox;
      a != null && a.restore();
      this.Ox = null;
      a = this.It;
      a != null && a.restore();
      this.It = null;
    }
    nz(a) {
      var b = this.ki(4);
      if (b.JC == null)
        ((b = this.XC[this.fz]), b != null && this.Tp(b), super.nz(a));
      else {
        var c = this.uQ(a.type, this.Wd.type, !1);
        c != null &&
          ((this.info.effect = a),
          (this.info.hb = this.Wd),
          this.y3a(c, this.info, b));
      }
    }
    y3a(a, b, c) {
      let d = c.JC;
      var e = this.li(new Lh());
      this.Wd.Hma(!1);
      var f = this.Wd.fq;
      if (f instanceof Td) {
        var g = f.rect.FBa();
        var h = g.x;
        g = g.y;
        h = new H(
          e.m11 * h + e.m12 * g + e.m14,
          e.m21 * h + e.m22 * g + e.m24,
          0,
          1,
        );
        g = f.rect.DBa();
        f = g.x;
        g = g.y;
        f = new H(
          e.m11 * f + e.m12 * g + e.m14,
          e.m21 * f + e.m22 * g + e.m24,
          0,
          1,
        );
      } else
        ((h = f.fb.x - f.gb),
          (g = f.fb.y - f.gb),
          (h = new H(
            e.m11 * h + e.m12 * g + e.m14,
            e.m21 * h + e.m22 * g + e.m24,
            0,
            1,
          )),
          (g = f.fb.x + f.gb),
          (f = f.fb.y + f.gb),
          (f = new H(
            e.m11 * g + e.m12 * f + e.m14,
            e.m21 * g + e.m22 * f + e.m24,
            0,
            1,
          )));
      d.Hma(!1);
      var k = d.fq;
      if (k instanceof Td) {
        var l = k.rect.FBa();
        g = l.x;
        l = l.y;
        g = new H(
          e.m11 * g + e.m12 * l + e.m14,
          e.m21 * g + e.m22 * l + e.m24,
          0,
          1,
        );
        l = k.rect.DBa();
        k = l.x;
        l = l.y;
        k = new H(
          e.m11 * k + e.m12 * l + e.m14,
          e.m21 * k + e.m22 * l + e.m24,
          0,
          1,
        );
      } else
        ((g = k.fb.x - k.gb),
          (l = k.fb.y - k.gb),
          (g = new H(
            e.m11 * g + e.m12 * l + e.m14,
            e.m21 * g + e.m22 * l + e.m24,
            0,
            1,
          )),
          (l = k.fb.x + k.gb),
          (k = k.fb.y + k.gb),
          (k = new H(
            e.m11 * l + e.m12 * k + e.m14,
            e.m21 * l + e.m22 * k + e.m24,
            0,
            1,
          )));
      e = g.x < h.x ? g.x : h.x;
      g = g.y < h.y ? g.y : h.y;
      h = Math.round((f.x < k.x ? k.x : f.x) - e);
      f = Math.round((f.y < k.y ? k.y : f.y) - g);
      this.SK();
      this.fL(h, f);
      k = this.El.m14;
      l = this.El.m24;
      this.El.m14 -= e;
      this.El.m24 -= g;
      a.Ea(b);
      this.Tp(c.fEa ? "destination-out" : "destination-in");
      this.Wd = d;
      super.nz(d.effect);
      this.El.m14 = k;
      this.El.m24 = l;
      a = this.NK();
      this.Cc = this.context;
      b = this.XC[this.fz];
      b != null && this.Tp(b);
      this.resetTransform();
      this.Cc.drawImage(a, 0, 0, h, f, e, g, h, f);
    }
    H0(a) {
      (a.U & 240) > 0 && a.Qma();
      var b = a.hm;
      a = b.m11;
      let c = b.m12,
        d = b.m13,
        e = b.m14,
        f = b.m21,
        g = b.m22,
        h = b.m23,
        k = b.m24,
        l = b.m31,
        n = b.m32,
        q = b.m33,
        r = b.m34,
        t = b.m41,
        x = b.m42,
        z = b.m43;
      b = b.m44;
      var A = this.am.LA;
      let C = this.Bya,
        B = this.El,
        D = B.m11 * A.m11 + B.m12 * A.m21 + B.m13 * A.m31 + B.m14 * A.m41,
        F = B.m11 * A.m12 + B.m12 * A.m22 + B.m13 * A.m32 + B.m14 * A.m42,
        M = B.m11 * A.m13 + B.m12 * A.m23 + B.m13 * A.m33 + B.m14 * A.m43,
        Q = B.m11 * A.m14 + B.m12 * A.m24 + B.m13 * A.m34 + B.m14 * A.m44,
        U = B.m21 * A.m11 + B.m22 * A.m21 + B.m23 * A.m31 + B.m24 * A.m41,
        W = B.m21 * A.m12 + B.m22 * A.m22 + B.m23 * A.m32 + B.m24 * A.m42,
        da = B.m21 * A.m13 + B.m22 * A.m23 + B.m23 * A.m33 + B.m24 * A.m43,
        na = B.m21 * A.m14 + B.m22 * A.m24 + B.m23 * A.m34 + B.m24 * A.m44,
        ka = B.m31 * A.m11 + B.m32 * A.m21 + B.m33 * A.m31 + B.m34 * A.m41,
        qa = B.m31 * A.m12 + B.m32 * A.m22 + B.m33 * A.m32 + B.m34 * A.m42,
        oa = B.m31 * A.m13 + B.m32 * A.m23 + B.m33 * A.m33 + B.m34 * A.m43,
        Aa = B.m31 * A.m14 + B.m32 * A.m24 + B.m33 * A.m34 + B.m34 * A.m44,
        Ta = B.m41 * A.m11 + B.m42 * A.m21 + B.m43 * A.m31 + B.m44 * A.m41,
        Ba = B.m41 * A.m12 + B.m42 * A.m22 + B.m43 * A.m32 + B.m44 * A.m42,
        ab = B.m41 * A.m13 + B.m42 * A.m23 + B.m43 * A.m33 + B.m44 * A.m43;
      A = B.m41 * A.m14 + B.m42 * A.m24 + B.m43 * A.m34 + B.m44 * A.m44;
      C.m11 = D * a + F * f + M * l + Q * t;
      C.m12 = D * c + F * g + M * n + Q * x;
      C.m13 = D * d + F * h + M * q + Q * z;
      C.m14 = D * e + F * k + M * r + Q * b;
      C.m21 = U * a + W * f + da * l + na * t;
      C.m22 = U * c + W * g + da * n + na * x;
      C.m23 = U * d + W * h + da * q + na * z;
      C.m24 = U * e + W * k + da * r + na * b;
      C.m31 = ka * a + qa * f + oa * l + Aa * t;
      C.m32 = ka * c + qa * g + oa * n + Aa * x;
      C.m33 = ka * d + qa * h + oa * q + Aa * z;
      C.m34 = ka * e + qa * k + oa * r + Aa * b;
      C.m41 = Ta * a + Ba * f + ab * l + A * t;
      C.m42 = Ta * c + Ba * g + ab * n + A * x;
      C.m43 = Ta * d + Ba * h + ab * q + A * z;
      C.m44 = Ta * e + Ba * k + ab * r + A * b;
      return C;
    }
    li(a) {
      (a.U & 64) > 0 && a.Ix();
      var b = a.hm;
      a = b.m11;
      let c = b.m12;
      var d = b.m14;
      let e = b.m21,
        f = b.m22,
        g = b.m24;
      b = this.Cya;
      let h = this.El,
        k = this.am.LA,
        l = h.m11 * k.m11 + h.m12 * k.m21,
        n = h.m11 * k.m12 + h.m12 * k.m22,
        q = h.m21 * k.m11 + h.m22 * k.m21,
        r = h.m21 * k.m12 + h.m22 * k.m22,
        t = l * d + n * g + (h.m11 * k.m14 + h.m12 * k.m24 + h.m14);
      d = q * d + r * g + (h.m21 * k.m14 + h.m22 * k.m24 + h.m24);
      b.m11 = l * a + n * e;
      b.m12 = l * c + n * f;
      b.m14 = t;
      b.m21 = q * a + r * e;
      b.m22 = q * c + r * f;
      b.m24 = d;
      return b;
    }
    nfa(a) {
      (a.U & 64) > 0 && a.Ix();
      var b = a.hm;
      a = b.m11;
      let c = b.m12;
      var d = b.m14;
      let e = b.m21,
        f = b.m22,
        g = b.m24;
      b = this.Cya;
      let h = this.El,
        k = this.am.u4,
        l = h.m11 * k.m11 + h.m12 * k.m21,
        n = h.m11 * k.m12 + h.m12 * k.m22,
        q = h.m21 * k.m11 + h.m22 * k.m21,
        r = h.m21 * k.m12 + h.m22 * k.m22,
        t = l * d + n * g + (h.m11 * k.m14 + h.m12 * k.m24 + h.m14);
      d = q * d + r * g + (h.m21 * k.m14 + h.m22 * k.m24 + h.m24);
      b.m11 = l * a + n * e;
      b.m12 = l * c + n * f;
      b.m14 = t;
      b.m21 = q * a + r * e;
      b.m22 = q * c + r * f;
      b.m24 = d;
      return b;
    }
    jM() {
      if (!super.jM()) return !1;
      this.BPa();
      this.resetTransform();
      var a = this.Ox;
      a != null && a.restore();
      this.Ox = null;
      a = this.It;
      a != null && a.restore();
      this.It = null;
      for (
        var b = (a = 0),
          c = 1,
          d = 1,
          e = 1,
          f = 1,
          g = this.Fl,
          h = 0,
          k = g.length;
        h < k;

      )
        ((a += e * g[h++]),
          (b += f * g[h++]),
          (c -= e * (1 - g[h++])),
          (d -= f * (1 - g[h++])),
          (e = c - a),
          (f = d - b));
      if (this.Dxa && (a != 0 || b != 0 || c != 1 || d != 1)) {
        a = new Path2D();
        d = e = 0;
        g = f = c = b = 1;
        h = this.Fl;
        k = 0;
        let l = h.length;
        for (; k < l; )
          ((e += f * h[k++]),
            (d += g * h[k++]),
            (b -= f * (1 - h[k++])),
            (c -= g * (1 - h[k++])),
            (f = b - e),
            (g = c - d));
        f = this.currentTarget.width;
        g = this.currentTarget.height;
        a.rect((f * e) | 0, (g * d) | 0, (f * (b - e)) | 0, (g * (c - d)) | 0);
        this.Ox = this.Cc;
        this.Ox.save();
        this.Ox.clip(a);
      }
      return !0;
    }
    DT(a) {
      this.fz = a.$Y;
    }
    fla(a) {
      var b = a.sI != this.gz;
      this.gz = a.sI;
      if (
        b &&
        ((b = this.It),
        b != null && b.restore(),
        (this.It = this.Cc),
        this.gz != null)
      ) {
        this.It.save();
        this.resetTransform();
        a = this.li(a.L.dc);
        b = this.gz;
        var c = new Path2D(),
          d = b[0],
          e = new H(
            a.m11 * d.x + a.m12 * d.y + a.m14,
            a.m21 * d.x + a.m22 * d.y + a.m24,
            0,
            1,
          );
        c.moveTo(e.x, e.y);
        for (d = 1; d < b.length; ) {
          e = b[d++];
          let f = a;
          e = new H(
            f.m11 * e.x + f.m12 * e.y + f.m14,
            f.m21 * e.x + f.m22 * e.y + f.m24,
            0,
            1,
          );
          c.lineTo(e.x, e.y);
        }
        c.closePath();
        this.It.clip(c);
      }
    }
    BPa() {
      var a = 0,
        b = 0,
        c = 1,
        d = 1,
        e = 1,
        f = 1,
        g = this.Fl;
      let h = 0,
        k = g.length;
      for (; h < k; )
        ((a += e * g[h++]),
          (b += f * g[h++]),
          (c -= e * (1 - g[h++])),
          (d -= f * (1 - g[h++])),
          (e = c - a),
          (f = d - b));
      e = this.currentTarget.width;
      f = this.currentTarget.height;
      c = ((e * (c - a)) | 0) / 2;
      d = ((f * (d - b)) | 0) / 2;
      g = this.El;
      g.m11 = c;
      g.m12 = 0;
      g.m13 = 0;
      g.m14 = c + ((e * a) | 0);
      g.m21 = 0;
      g.m22 = -d;
      g.m23 = 0;
      g.m24 = d + ((f * b) | 0);
    }
    O1(a) {
      return new Jq(a);
    }
    JT(a) {
      this.context.globalAlpha = a;
    }
    SK() {
      this.Yxa.push(this.Cc);
      this.Cc = this.tA.pop();
    }
    NK() {
      let a = this.Cc;
      this.tA.push(this.Cc);
      this.Cc = this.Yxa.pop();
      return a.canvas;
    }
    fL(a, b) {
      let c = this.Cc.canvas,
        d = !1,
        e = this.currentTarget.width,
        f = this.currentTarget.height;
      (c.width > e || c.height > f) && this.m5(this.Cc, e, f);
      if (c.width < a || c.height < b) d = !0;
      else
        try {
          this.Cc.reset();
        } catch (g) {
          d = !0;
        }
      d && this.m5(this.Cc, a, b);
    }
    drawImage(a, b, c, d, e, f, g, h, k) {
      this.Cc.drawImage(a, b, c, d, e, f, g, h, k);
      this.ti++;
    }
    hk(a) {
      this.Cc.fillStyle = a;
    }
    zMa(a) {
      this.Cc.strokeStyle = a;
    }
    Tp(a) {
      this.Cc.globalCompositeOperation = a;
    }
    resetTransform() {
      this.Cc.setTransform(1, 0, 0, 1, 0, 0);
    }
    CF(a) {
      a = this.li(a);
      this.Cc.setTransform(a.m11, a.m21, a.m12, a.m22, a.m14, a.m24);
    }
    clearRect(a, b, c, d) {
      this.Cc.clearRect(a, b, c, d);
      this.ti++;
    }
    fillRect(a, b, c, d) {
      this.Cc.fillRect(a, b, c, d);
      this.ti++;
    }
    Lva(a, b, c, d, e, f) {
      this.SK();
      this.fL(e, f);
      this.Tp("copy");
      var g;
      var h = a.gf;
      var k = a.offset;
      switch (a.hint) {
        case 0:
          this.drawImage(b, c, d, e, f, 0, 0, e, f);
          this.oYa(this.Cc, a, e, f);
          break;
        case 1:
          this.Cc.globalAlpha = a.gf.w;
          this.drawImage(b, c, d, e, f, 0, 0, e, f);
          break;
        case 2:
          h = 1 - h.x;
          k = k.x == 0 ? (a = g = 0) : (a = g = 1);
          g = ((g * 255) | 0) & 255;
          a = ((a * 255) | 0) & 255;
          k = ((k * 255) | 0) & 255;
          this.hk(
            h == 1
              ? "rgb(" + g + "," + a + "," + k + ")"
              : "rgba(" + g + "," + a + "," + k + "," + We.toFixed(h, 2) + ")",
          );
          this.fillRect(0, 0, e, f);
          this.Tp("destination-atop");
          this.drawImage(b, c, d, e, f, 0, 0, e, f);
          break;
        case 3:
          ((h = 1 - h.x),
            (g = k.x / h),
            (a = k.y / h),
            (k = k.z / h),
            (g = ((g * 255) | 0) & 255),
            (a = ((a * 255) | 0) & 255),
            (k = ((k * 255) | 0) & 255),
            this.hk(
              h == 1
                ? "rgb(" + g + "," + a + "," + k + ")"
                : "rgba(" +
                    g +
                    "," +
                    a +
                    "," +
                    k +
                    "," +
                    We.toFixed(h, 2) +
                    ")",
            ),
            this.fillRect(0, 0, e, f),
            this.Tp("destination-atop"),
            this.drawImage(b, c, d, e, f, 0, 0, e, f));
      }
      return this.NK();
    }
    wOa(a, b, c, d, e, f) {
      this.SK();
      this.fL(e, f);
      this.Tp("copy");
      this.drawImage(a, c, d, e, f, 0, 0, e, f);
      this.Tp("multiply");
      this.hk(
        "rgba(" + b.x * 255 + ", " + b.y * 255 + ", " + b.z * 255 + ", 1.0)",
      );
      this.fillRect(0, 0, e, f);
      this.Tp("destination-in");
      this.hk("rgba(0, 0, 0, " + b.w);
      this.drawImage(a, c, d, e, f, 0, 0, e, f);
      return this.NK();
    }
    Kva(a, b, c, d, e) {
      this.SK();
      this.fL(d, e);
      this.hk(Vw);
      let f = (this.Qc & 32) > 0 ? this.Yi : 1;
      f == 1
        ? (this.Tp("copy"),
          this.drawImage(a, b, c, d, e, 0, 0, d, e),
          this.Tp("destination-atop"))
        : (this.fillRect(0, 0, d, e),
          (this.Cc.globalAlpha = f),
          this.Tp("screen"),
          this.drawImage(a, b, c, d, e, 0, 0, d, e));
      this.fillRect(0, 0, d, e);
      return this.NK();
    }
    oYa(a, b, c, d) {
      c = a.getImageData(0, 0, c, d);
      d = c.data;
      let e = 0,
        f = d.length;
      var g = b.gf,
        h = b.offset;
      b = g.x;
      let k = g.y,
        l = g.z;
      g = g.w;
      let n = h.x,
        q = h.y,
        r = h.z;
      h = h.w;
      let t;
      for (; e < f; )
        ((t = d[e + 3] + 0.001),
          (d[e] = ((d[e] / t) * b + n) * 255),
          ++e,
          (d[e] = ((d[e] / t) * k + q) * 255),
          ++e,
          (d[e] = ((d[e] / t) * l + r) * 255),
          ++e,
          (d[e] = ((t / 255) * g + h) * 255),
          ++e);
      a.putImageData(c, 0, 0);
    }
    KT(a) {
      this.Cc.imageSmoothingEnabled = a;
    }
    pla(a) {
      this.KT((a.flags & 8) > 0);
    }
    m5(a, b, c) {
      a.canvas.width = b;
      a.canvas.height = c;
    }
  }
  Nk.g = "333";
  Nk.u = Qf;
  Object.assign(Nk.prototype, { j: Nk });
  class Jq extends af {
    constructor(a) {
      super(a);
      this.data = window.document.createElement("canvas");
      this.Ska();
    }
    B() {
      super.B();
      this.Xi = this.data = null;
    }
    Pka() {
      this.context = this.Xi;
    }
    zF(a, b) {
      super.zF(a, b);
      this.VKa();
      this.Ska();
    }
    gx(a) {
      super.gx(a);
      this.VKa();
      this.Ska();
      this.Xi.drawImage(a.data, 0, 0);
    }
    od(a, b, c) {
      super.od(a, b, c);
      a.data = this.data;
    }
    VKa() {
      this.data.width = this.width;
      this.data.height = this.height;
    }
    Ska() {
      this.Xi = this.data.getContext("2d", { alpha: (this.flags & 1) == 0 });
    }
  }
  Jq.g = "334";
  Jq.u = af;
  Object.assign(Jq.prototype, { j: Jq });
