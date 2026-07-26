// 025-camera-viewport.js
// Domain: ai  |  31 class(es)  |  tree root(s): ae, mc, be, Db, Ys, Ws, Rg, ti, Sc, wi, et, ft, gt, dl, fb, ry, fz, xi, Uc, el, zi, it, fl, jt, ot, jb, p
// Edit here. Run `npm run build` to reassemble the full bundle.
  class ae {
    constructor(a, b) {
      this.time = 0;
      this.active = this.T6 = this.Zg = !1;
      this.state = 0;
      this.elements = new Db("Elements");
      this.HZ = this.cf = this.parent = null;
      this.content = new Ea();
      this.node = new Hd();
      this.info = {};
      this.Rr = a;
      this.caller = b;
      this.system = a.system;
      this.node.bn = 1;
      this.content = new Ea();
      this.node.appendChild(this.content.L);
      this.name = Rs.hCa(this);
      this.Ue(0);
    }
    RC(a, b) {
      this.Rr.cba(a, this, b);
    }
    Zea() {
      let a = [],
        b = this.ut();
      fa.vKa(b);
      let c = 0;
      for (; c < b.length; ) {
        let d = b[c];
        ++c;
        (G.R1(d) && G.MI == null) || (G.data.v[d] == null && a.push(d));
      }
      return a;
    }
    yEa() {
      return !0;
    }
    ut() {
      return [];
    }
    zBa() {
      return null;
    }
    VQ() {
      return 0;
    }
    Yq() {
      return 0;
    }
    dJ() {
      return 0;
    }
    B() {
      this.Ue(7);
      this.node.B();
      this.node = null;
      this.elements.B();
      this.system =
        this.Rr =
        this.info =
        this.caller =
        this.parent =
        this.cf =
        this.elements =
          null;
      this.Zg = !0;
    }
    Ot() {}
    Kn() {}
    Z(a) {
      this.elements.zja(a);
    }
    Ea(a) {
      this.elements.yja(a);
    }
    vm() {}
    vr() {
      if (this.HZ != null) {
        let a = this.Rr.Mfa().hn(this.HZ.x / this.HZ.y);
        this.content.C(a.K);
        this.content.D(a.P);
        this.content.la((a.N - a.K) / this.HZ.x);
      }
    }
    Qt(a) {
      this.yl(a);
    }
    xA(a) {
      this.yl(1 - a);
    }
    yl(a) {
      this.h8a().Ela(a);
    }
    Ue(a) {
      switch (a) {
        case 2:
          this.node.bn = 0;
          this.yl(0);
          break;
        case 4:
          this.node.bn = 0;
          break;
        case 6:
          this.node.bn = 1;
      }
      switch (a) {
        case 2:
        case 3:
        case 5:
          this.active = !0;
          break;
        default:
          this.active = !1;
      }
      this.state = a;
    }
    h8a() {
      let a = this.node.vQ(5);
      a == null && (a = new wf(0));
      this.node.$w(a);
      return a;
    }
  }
  ae.g = "3F";
  Object.assign(ae.prototype, { j: ae });
  class Wg extends ae {
    constructor(a, b) {
      super(a, b);
    }
    Ot() {
      super.Ot();
      this.ri = G.load(this.caller.Zea());
      this.name += " (" + this.caller.name + ")";
    }
    pp() {
      return this.ri.pp();
    }
    c1() {
      return this.ri.c1();
    }
  }
  Wg.g = "40";
  Wg.u = ae;
  Object.assign(Wg.prototype, { j: Wg });
  class mc {
    constructor(a, b, c) {
      this.io = !1;
      this.transition = this.Bha = null;
      this.vu = 0;
      this.stack = [];
      this.Ta = new Ug();
      this.df = new Hd();
      this.back = new Hd();
      this.system = a;
      mc.J = this;
      let d = this;
      this.vhb = a.window.vr.ei(function () {
        d.io = !0;
      });
      a = Object.create(b.prototype);
      a.caller = null;
      a.Zea().length > 0
        ? this.cba(cl, null, { clss: b })
        : this.cba(b, null, c);
    }
    Mfa() {
      var a = this.system.Ha,
        b = 0,
        c = 0;
      let d = 1,
        e = 1;
      var f = 1,
        g = 1,
        h = a.Fl;
      let k = 0,
        l = h.length;
      for (; k < l; )
        ((b += f * h[k++]),
          (c += g * h[k++]),
          (d -= f * (1 - h[k++])),
          (e -= g * (1 - h[k++])),
          (f = d - b),
          (g = e - c));
      g = a.currentTarget.TP;
      f = a.currentTarget.width * g;
      a = a.currentTarget.height * g;
      g = (f * b) | 0;
      h = (a * c) | 0;
      return new hb(g, h, g + ((f * (d - b)) | 0), h + ((a * (e - c)) | 0));
    }
    ya() {
      let a = this.Mfa();
      return a.N - a.K;
    }
    ra() {
      let a = this.Mfa();
      return a.X - a.P;
    }
    B() {
      this.vhb();
      this.back.B();
      this.back = null;
      let a = 0,
        b = this.stack;
      for (; a < b.length; ) b[a++].B(null);
      this.stack = null;
      this.df.B();
      this.df = null;
      mc.J = null;
    }
    Z(a) {
      this.uob();
      this.back.Hx(a);
      this.back.vg();
      var b = !1;
      this.transition != null &&
        (this.transition.update(a), (b = this.transition.Lg)) &&
        (this.transition = null);
      if (this.vu == 1) {
        var c = this.stack;
        c = c[c.length - 1];
        c.state == 3 &&
          c.pp() &&
          ((this.Bha = c.caller),
          (this.transition = be.Epb(c)),
          (this.vu = 2),
          (b = this.transition.Lg)) &&
          (this.transition = null);
      }
      this.vu == 2 &&
        b &&
        (this.stack.pop(),
        this.stack.push(this.Bha),
        (this.transition = be.hLa(this.stack[0], this.stack[1])),
        (this.Bha = null),
        (this.vu = 3));
      this.vu == 3 && b && (this.stack.shift(), (this.vu = 0));
      b = 0;
      for (c = this.stack; b < c.length; ) {
        let d = c[b];
        for (++b; d != null; )
          (d.active &&
            ((d.T6 = !0),
            (d.time += a),
            this.io && d.vr(),
            d.Z(a),
            d.state != 7 && (d.node.Hx(a), d.node.vg())),
            (d = d.cf));
      }
      this.io = !1;
      this.df.Hx(a);
      this.df.vg();
    }
    Ea(a) {
      if (this.stack != null) {
        var b = this.system.Ha;
        this.back.Kx();
        b.Ea(this.back, this.Ta);
        for (var c = 0, d = this.stack; c < d.length; ) {
          let e = d[c];
          for (++c; e != null; )
            (e.active && (e.Ea(a), e.node.Kx(), b.Ea(e.node, this.Ta)),
              (e = e.cf));
        }
        this.df.Kx();
        b.Ea(this.df, this.Ta);
      }
    }
    cba(a, b, c) {
      a = ra.Ya(a, [this, b]);
      a.info = c;
      a.Zea().length > 0
        ? ((c = a.zBa()),
          (c = c != null ? c : new Wg(this, a)),
          this.stack.push(c),
          (this.transition = be.Gpb(b, c)),
          (this.vu = 1),
          this.transition.Lg && (this.transition = null))
        : (this.stack.push(a),
          this.stack.length == 2
            ? ((this.transition = be.hLa(b, a)), (this.vu = 3))
            : (this.transition = be.Opb(a)),
          this.transition.Lg &&
            ((this.transition = null),
            this.vu == 3 && ((this.vu = 0), this.stack.shift())));
    }
    uob() {
      this.Ta.ba(this.ya(), this.ra());
      this.Ta.T4();
      this.Ta.qT();
    }
  }
  mc.g = "41";
  Object.assign(mc.prototype, { j: mc });
  class be {
    constructor(a, b, c, d) {
      this.state = this.time = 0;
      this.Lg = !1;
      this.a = a;
      this.b = b;
      this.kind = c;
      this.Vob = d;
      this.time = this.state = 0;
      this.update(0);
    }
    update(a) {
      if (!this.Lg)
        switch (((this.time += a), this.kind)) {
          case 0:
            switch (this.state) {
              case 0:
                this.b.Ue(1);
                this.b.Ot();
                this.b.vr();
                this.next();
                this.update(0);
                break;
              case 1:
                if (this.time < this.b.VQ(null)) return;
                this.b.Ue(2);
                this.b.Qt(0);
                this.next();
                this.b.Yq() == 0 && this.update(0);
                break;
              case 2:
                ((a = this.fd(this.b.Yq())),
                  this.b.Qt(a),
                  a < 1 || (this.b.Ue(3), this.b.Kn(), (this.Lg = !0)));
            }
            break;
          case 1:
            switch (this.state) {
              case 0:
                this.b.Ue(1);
                this.b.Ot();
                this.b.vr();
                this.next();
                this.update(0);
                break;
              case 1:
                if (this.time < this.b.VQ(this.a)) return;
                this.a.state == 3 && this.a.Ue(5);
                this.b.Ue(2);
                this.b.Qt(0);
                this.next();
                this.b.Yq() == 0 && this.update(0);
                break;
              case 2:
                ((a = this.fd(this.b.Yq())),
                  this.b.Qt(a),
                  a < 1 ||
                    (this.b.yEa() && (this.a.Ue(6), this.a.vm(this.b)),
                    this.b.Ue(3),
                    this.b.Kn(),
                    (this.Lg = !0)));
            }
            break;
          case 2:
            switch (this.state) {
              case 0:
                this.a.Ue(5);
                this.a.xA(0);
                this.next();
                this.a.dJ() == 0 && this.update(0);
                break;
              case 1:
                ((a = this.fd(this.a.dJ())),
                  this.a.xA(a),
                  a == 1 &&
                    (this.a.Ue(6),
                    this.a.vm(this.b),
                    this.Vob &&
                      (this.b.state == 6 && this.b.Ue(4),
                      this.b.Ue(3),
                      this.b.Kn()),
                    this.a.B(this.b),
                    this.b != null && (this.b.cf = null),
                    (this.Lg = !0)));
            }
            break;
          case 3:
            switch (this.state) {
              case 0:
                this.a.state == 3 && this.a.Ue(5);
                this.Mz(this.a).xA(0);
                this.next();
                this.a.dJ() == 0 && this.update(0);
                break;
              case 1:
                a = this.fd(this.a.dJ() / 2);
                this.Mz(this.a).xA(a);
                this.next();
                a == 1 && this.update(0);
                break;
              case 2:
                this.a.state != 6 && (this.a.Ue(6), this.a.vm(this.b));
                for (a = this.a.parent; a != null && a instanceof ae; )
                  (a.state != 6 && (a.Ue(6), a.vm(this.b)), (a = a.parent));
                this.b.Ue(1);
                this.b.Ot();
                this.b.vr();
                this.next();
                this.update(0);
                break;
              case 3:
                if (this.time < this.b.VQ(this.a)) return;
                this.b.Ue(2);
                this.b.Qt(0);
                this.next();
                this.b.Yq() == 0 && this.update(0);
                break;
              case 4:
                ((a = this.fd(this.b.Yq() / 2)),
                  this.b.Qt(a),
                  a < 1 ||
                    (this.b.Ue(3),
                    this.b.Kn(),
                    this.Sya(this.a, this.b),
                    (this.Lg = !0)));
            }
            break;
          case 4:
            switch (this.state) {
              case 0:
                this.b.Ue(1);
                this.b.Ot();
                this.b.vr();
                this.next();
                this.update(0);
                break;
              case 1:
                if (this.time < this.b.VQ(this.a)) break;
                this.a.state == 3 && this.a.Ue(5);
                for (a = this.a; a.parent != null && a.parent instanceof ae; )
                  a = a.parent;
                this.Mz(this.a).xA(0);
                this.b.Ue(2);
                this.b.Qt(0);
                this.next();
                this.b.Yq() == 0 && this.update(0);
                break;
              case 2:
                if (
                  ((a = this.fd(this.b.Yq())),
                  this.Mz(this.a).xA(a),
                  this.b.Qt(a),
                  a == 1)
                ) {
                  this.a.Ue(6);
                  this.a.vm(this.b);
                  for (a = this.a; a.parent != null && a.parent instanceof ae; )
                    (a.state != 6 && (a.Ue(6), a.vm(this.b)), (a = a.parent));
                  this.Sya(this.a, this.b);
                  this.b.Ue(3);
                  this.b.Kn();
                  this.Lg = !0;
                }
            }
        }
    }
    Sya(a, b) {
      a = this.Mz(a);
      let c = [a];
      for (; a.cf != null; ) (c.push(a.cf), (a = a.cf));
      for (; c.length > 0; ) c.pop().B(b);
    }
    Mz(a) {
      for (; a.parent != null; ) a = a.parent;
      return a;
    }
    next() {
      this.state++;
      this.time = 0;
    }
    fd(a) {
      return a == 0 ? 1 : Math.min(1, this.time / a);
    }
    static Opb(a) {
      return new be(null, a, 0);
    }
    static Gpb(a, b) {
      return new be(a, b, 1);
    }
    static Epb(a) {
      return new be(a, a.parent, 2, !1);
    }
    static hLa(a, b) {
      return new be(a, b, 3);
    }
  }
  be.g = "42";
  Object.assign(be.prototype, { j: be });
  class Ok extends Db {
    constructor(a) {
      super();
      this.Rr = a;
    }
    B() {
      super.B();
      this.Rr.B();
    }
    Z(a) {
      super.Z(a);
      this.Rr.Z(a);
    }
    Ea(a) {
      super.Ea(a);
      this.Rr.Ea(a);
    }
    appendChild() {
      throw 111;
    }
  }
  Ok.g = "43";
  Ok.u = Db;
  Object.assign(Ok.prototype, { j: Ok });
  class cl extends ae {
    constructor(a, b) {
      super(a, b);
    }
    Kn() {
      super.Kn();
      this.RC(this.info.clss);
    }
  }
  cl.g = "44";
  cl.u = ae;
  Object.assign(cl.prototype, { j: cl });
  class Ys {
    constructor(a, b, c, d, e, f, g, h, k, l, n, q, r, t, x, z, A) {
      this.tDa = !1;
      this.rHa = 4;
      this.xha = !0;
      this.oA = 256;
      this.Zva = this.XPa = this.audio = this.SDa = !0;
      this.qOa = !1;
      this.Wva = this.$ja = null;
      this.eI = 2;
      this.TDa = 1;
      this.lang = "en";
      this.title = "title";
      a != null && (this.title = a);
      b != null && (this.lang = b);
      c != null && (this.TDa = c);
      d != null && (this.eI = d);
      e != null && (this.Wva = e);
      f != null && (this.$ja = f);
      g != null && (this.qOa = g);
      h != null && (this.Zva = h);
      k != null && (this.XPa = k);
      l != null && (this.audio = l);
      q != null && (this.SDa = q);
      r != null && (this.oA = r);
      x != null && (this.xha = x);
      z != null && (this.rHa = z);
      A != null && (this.tDa = A);
    }
  }
  Ys.g = "45";
  Object.assign(Ys.prototype, { j: Ys });
  class Ws {
    constructor() {
      this.Ly = 0.016666666666666666;
      this.Cp = !1;
      this.dAa = this.Pxb = this.s3a = 0;
      this.TL = 1;
      this.Cm = 0.016666666666666666;
    }
  }
  Ws.g = "46";
  Object.assign(Ws.prototype, { j: Ws });
  class Rg {
    constructor() {
      this.startTime = this.Yia = this.counter = 0;
      this.first = !0;
      this.now = 0;
      this.handle = -1;
      this.active = !1;
      this.S4a = 60;
    }
    Sh() {}
    start() {
      if (!this.active) {
        this.stop();
        this.active = !0;
        var a = null,
          b = ((T = window), w(T, T.requestAnimationFrame)),
          c = this;
        a = function (d) {
          c.handle = b(a);
          if (c.first)
            ((c.startTime = d), (c.now = d), (c.Yia = d), (c.first = !1));
          else {
            var e = d - c.now;
            c.now = d;
            c.Sh(e / 1e3);
            c.counter++;
            d > c.Yia + 1e3 &&
              ((c.Yia = d), (c.S4a = c.counter), (c.counter = 0));
          }
        };
        this.handle = b(a);
      }
    }
    stop() {
      this.active &&
        ((this.first = !0),
        this.handle < 0 ||
          (window.cancelAnimationFrame(this.handle),
          (this.handle = -1),
          (this.active = !1)));
    }
    static Zha(a) {
      queueMicrotask(a);
    }
  }
  Rg.g = "47";
  Object.assign(Rg.prototype, { j: Rg });
  class ti {
    constructor() {
      this.$ya == null &&
        ((this.$ya = this.tT(
          new Uint8Array([
            81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102,
            134, 70, 146, 4,
          ]),
          0,
          6,
        ).b),
        (this.k3a = this.tT(
          new Uint8Array([
            33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8,
            33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9,
          ]),
          0,
          6,
        ).b),
        (this.m3a = this.tT(
          new Uint8Array([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]),
          0,
          5,
        ).b),
        (this.Aha = new Uint8Array(
          new Int32Array([
            0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093,
          ]).buffer,
          0,
          36,
        )),
        (this.Udb = this.$va(this.Aha, 0)),
        (this.Rha = new Uint8Array(
          new Int32Array([
            0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048,
            252579084, 16,
          ]).buffer,
          0,
          53,
        )),
        (this.mfb = this.$va(this.Rha, 3)));
    }
    read(a, b) {
      a = new Uint8Array(a);
      let c = [],
        d = b == null ? 1 : 0;
      let e = 0;
      for (; a.length > 0; ) {
        var f = this.Tpb(a, d == 1 ? b : null).b;
        if (f != null) {
          d == 1
            ? ((b = null),
              f.w.length == f.NOa && ((b = f.w), c.push(b), (e += f.NOa)))
            : (c.push(b), (f.e = 0));
          for (; f.JR == 0; ) {
            let g = this.Spb(a, f, b);
            if (g == null) throw 112;
            b != null
              ? (f.e = f.y)
              : (c.push(g),
                (e += g.length),
                this.k1a(f.w, g.length),
                f.w.set(g, f.w.length - g.length));
          }
          f = f.b + f.c * 4;
        }
        a = a.subarray(f);
      }
      return this.HZa(c, e).buffer.slice(12);
    }
    $va(a, b) {
      let c = a.length,
        d = new Int32Array(c),
        e = 0;
      for (; e < c; ) {
        let f = e++;
        d[f] = b;
        b += 1 << a[f];
      }
      return d;
    }
    HZa(a, b) {
      if (a.length == 1) return a[0];
      b = new Uint8Array(b);
      let c = 0,
        d = 0;
      for (; c < a.length; ) {
        let e = a[c];
        b.set(e, d);
        d += e.length;
        ++c;
      }
      return b;
    }
    k1a(a, b) {
      a.copyWithin(0, b, void 0);
    }
    hKa(a, b, c) {
      let d = 0,
        e = 0;
      for (; d < c; ) ((e |= a[b++] << (d << 3)), ++d);
      return e;
    }
    CYa(a) {
      return (a[4] | (a[5] << 8) | (a[6] << 16) | (a[7] << 24)) >>> 0;
    }
    Tpb(a, b) {
      var c = a[0] | (a[1] << 8) | (a[2] << 16);
      if (c == 3126568 && a[3] == 253) {
        c = a[4];
        var d = (c >> 5) & 1,
          e = c & 3,
          f = c >> 6;
        if ((c & 8) != 0) throw 113;
        let h = 6 - d;
        var g = e == 3 ? 4 : e;
        e = this.hKa(a, h, g);
        h += g;
        g = f != 0 ? 1 << f : d;
        let k = (f = this.hKa(a, h, g) + (f == 1 ? 256 : 0));
        d == 0 &&
          ((d = 1 << (10 + (a[5] >> 3))), (k = d + (d >> 3) * (a[5] & 7)));
        if (k > 2145386496) throw 114;
        a = 0;
        b == null
          ? (f != 0 ? (a = f) : k != 0 && (a = k), (a += 12))
          : (a = b != null ? 12 : k + 12);
        a = new Uint8Array(a);
        a[0] = 1;
        a[4] = 4;
        a[8] = 8;
        b = new et(
          h + g,
          0,
          e,
          b != null ? b : a.subarray(12),
          k < 131072 ? k : 131072,
          f,
          (c >> 2) & 1,
          new Int32Array(a.buffer, 0, 3),
          k,
          null,
          null,
          0,
        );
        return new dl(0, b);
      }
      if (((c >> 4) | (a[3] << 20)) == 25481893)
        return new dl(this.CYa(a) + 8, null);
      throw 115;
    }
    g3a(a, b, c) {
      var d = (b.length + 3) >> 2,
        e = d << 1,
        f = d + e;
      var g = 6 + (a[0] | (a[1] << 8));
      var h = a.subarray(6, g),
        k = b.subarray(0, d),
        l = h.length,
        n = k.length,
        q = h[l - 1],
        r = (1 << c.b) - 1,
        t = -c.b;
      if (q == 0) throw 116;
      var x = 0,
        z = c.b;
      l = (l << 3) - 8 + this.qr(q) - z;
      for (q = -1; l > t && q < n; ) {
        let A = l >> 3;
        x =
          ((x << z) |
            ((h[A] | (h[A + 1] << 8) | (h[A + 2] << 16)) >> (l & 7))) &
          r;
        k[++q] = c.s[x];
        z = c.n[x];
        l -= z;
      }
      if (l != t || q + 1 != n) throw 117;
      h = a.subarray(g, (g += a[2] | (a[3] << 8)));
      d = b.subarray(d, e);
      z = h.length;
      k = d.length;
      l = h[z - 1];
      n = (1 << c.b) - 1;
      r = -c.b;
      if (l == 0) throw 118;
      t = 0;
      x = c.b;
      z = (z << 3) - 8 + this.qr(l) - x;
      for (l = -1; z > r && l < k; )
        ((q = z >> 3),
          (t =
            ((t << x) |
              ((h[q] | (h[q + 1] << 8) | (h[q + 2] << 16)) >> (z & 7))) &
            n),
          (d[++l] = c.s[t]),
          (x = c.n[t]),
          (z -= x));
      if (z != r || l + 1 != k) throw 119;
      d = a.subarray(g, (g += a[4] | (a[5] << 8)));
      e = b.subarray(e, f);
      x = d.length;
      h = e.length;
      z = d[x - 1];
      k = (1 << c.b) - 1;
      n = -c.b;
      if (z == 0) throw 120;
      r = 0;
      t = c.b;
      x = (x << 3) - 8 + this.qr(z) - t;
      for (z = -1; x > n && z < h; )
        ((l = x >> 3),
          (r =
            ((r << t) |
              ((d[l] | (d[l + 1] << 8) | (d[l + 2] << 16)) >> (x & 7))) &
            k),
          (e[++z] = c.s[r]),
          (t = c.n[r]),
          (x -= t));
      if (x != n || z + 1 != h) throw 121;
      a = a.subarray(g);
      b = b.subarray(f);
      k = a.length;
      f = b.length;
      n = a[k - 1];
      g = (1 << c.b) - 1;
      e = -c.b;
      if (n == 0) throw 122;
      d = 0;
      h = c.b;
      k = (k << 3) - 8 + this.qr(n) - h;
      for (n = -1; k > e && n < f; )
        ((r = k >> 3),
          (d =
            ((d << h) |
              ((a[r] | (a[r + 1] << 8) | (a[r + 2] << 16)) >> (k & 7))) &
            g),
          (b[++n] = c.s[d]),
          (h = c.n[d]),
          (k -= h));
      if (k != e || n + 1 != f) throw 123;
    }
    Spb(a, b, c) {
      var d = b.b,
        e = a[d],
        f = (e >> 1) & 3;
      b.JR = e & 1;
      var g = (e >> 3) | (a[d + 1] << 5) | (a[d + 2] << 13);
      e = (d += 3) + g;
      if (f == 1) {
        if (d >= a.length) return null;
        b.b = d + 1;
        return c != null
          ? (c.fill(a[d], b.y, (b.y += g)), c)
          : new Uint8Array(g).fill(a[d]);
      }
      if (e > a.length) return null;
      if (f == 0)
        return (
          (b.b = e),
          c != null
            ? (c.set(a.subarray(d, e), b.y), (b.y += g), c)
            : a.slice(d, e)
        );
      if (f == 2) {
        f = a[d];
        var h = f & 3;
        g = (f >> 2) & 3;
        var k = f >> 4,
          l = 0,
          n = 0;
        h < 2
          ? (g & 1) != 0
            ? ((k |= a[++d] << 4), (g & 2) > 0 && (k |= a[++d] << 12))
            : (k = f >> 3)
          : ((n = g),
            g < 2
              ? ((k |= (a[++d] & 63) << 4), (l = (a[d++] >> 6) | (a[d] << 2)))
              : g == 2
                ? ((k |= (a[++d] << 4) | ((a[++d] & 3) << 12)),
                  (l = (a[d++] >> 2) | (a[d] << 6)))
                : ((k |= (a[++d] << 4) | ((a[++d] & 63) << 12)),
                  (l = (a[d++] >> 6) | (a[d++] << 2) | (a[d] << 10))));
        ++d;
        f = c != null ? c.subarray(b.y, b.y + b.dj) : new Uint8Array(b.dj);
        g = f.length - k;
        if (h == 0) f.set(a.subarray(d, (d += k)), g);
        else if (h == 1) f.fill(a[d++], g);
        else {
          var q = b.v;
          if (h == 2)
            ((q = this.bpb(a, d)),
              (h = d),
              (d = q.a),
              (l += h - d),
              (q = q.b),
              (b.v = q));
          else if (q == null) throw 124;
          if (n != 0) this.g3a(a.subarray(d, (d += l)), f.subarray(g), q);
          else {
            l = a.subarray(d, (d += l));
            n = f.subarray(g);
            var r = l.length;
            h = n.length;
            var t = l[r - 1],
              x = (1 << q.b) - 1,
              z = -q.b;
            if (t == 0) throw 125;
            var A = 0,
              C = q.b;
            r = (r << 3) - 8 + this.qr(t) - C;
            for (t = -1; r > z && t < h; ) {
              var B = r >> 3;
              A =
                ((A << C) |
                  ((l[B] | (l[B + 1] << 8) | (l[B + 2] << 16)) >> (r & 7))) &
                x;
              n[++t] = q.s[A];
              C = q.n[A];
              r -= C;
            }
            if (r != z || t + 1 != h) throw 126;
          }
        }
        C = a[d++];
        if (C != 0) {
          C == 255
            ? (C = (a[d++] | (a[d++] << 8)) + 32512)
            : C > 127 && (C = ((C - 128) << 8) | a[d++]);
          k = a[d++];
          if ((k & 3) != 0) throw 127;
          q = [this.k3a, this.m3a, this.$ya];
          for (l = 2; l > -1; ) {
            n = (k >> ((l << 1) + 2)) & 3;
            if (n == 1)
              ((n = new Uint8Array([0, 0, a[d++]])),
                (q[l] = new vi(
                  n.subarray(2, 3),
                  n.subarray(0, 1),
                  new Uint16Array(n.buffer, 0, 1),
                  0,
                )));
            else if (n == 2)
              ((n = this.tT(a, d, 9 - (l & 1))), (d = n.a), (q[l] = n.b));
            else if (n == 3) {
              if (b.t == null) throw 128;
              q[l] = b.t[l];
            }
            --l;
          }
          b.t = q;
          d = q[0];
          k = q[1];
          q = q[2];
          l = a[e - 1];
          if (l == 0) throw 129;
          l = (e << 3) - 8 + this.qr(l) - q.b;
          t = l >> 3;
          n = 0;
          h = ((a[t] | (a[t + 1] << 8)) >> (l & 7)) & ((1 << q.b) - 1);
          t = (l -= k.b) >> 3;
          x = ((a[t] | (a[t + 1] << 8)) >> (l & 7)) & ((1 << k.b) - 1);
          t = (l -= d.b) >> 3;
          z = ((a[t] | (a[t + 1] << 8)) >> (l & 7)) & ((1 << d.b) - 1);
          for (A = 0; A < C; ) {
            ++A;
            var D = q.s[h],
              F = q.n[h];
            r = d.s[z];
            var M = d.n[z];
            B = k.s[x];
            var Q = k.n[x];
            t = (l -= B) >> 3;
            B = 1 << B;
            B +=
              ((a[t] |
                (a[t + 1] << 8) |
                (a[t + 2] << 16) |
                (a[t + 3] << 24)) >>>
                (l & 7)) &
              (B - 1);
            t = (l -= this.Rha[r]) >> 3;
            r =
              this.mfb[r] +
              (((a[t] | (a[t + 1] << 8) | (a[t + 2] << 16)) >> (l & 7)) &
                ((1 << this.Rha[r]) - 1));
            t = (l -= this.Aha[D]) >> 3;
            D =
              this.Udb[D] +
              (((a[t] | (a[t + 1] << 8) | (a[t + 2] << 16)) >> (l & 7)) &
                ((1 << this.Aha[D]) - 1));
            t = (l -= F) >> 3;
            h =
              q.t[h] + (((a[t] | (a[t + 1] << 8)) >> (l & 7)) & ((1 << F) - 1));
            t = (l -= M) >> 3;
            z =
              d.t[z] + (((a[t] | (a[t + 1] << 8)) >> (l & 7)) & ((1 << M) - 1));
            t = (l -= Q) >> 3;
            x =
              k.t[x] + (((a[t] | (a[t + 1] << 8)) >> (l & 7)) & ((1 << Q) - 1));
            B > 3
              ? ((b.Hn[2] = b.Hn[1]), (b.Hn[1] = b.Hn[0]), (b.Hn[0] = B -= 3))
              : ((t = B - (D != 0 ? 1 : 0)),
                t != 0
                  ? ((B = t == 3 ? b.Hn[0] - 1 : b.Hn[t]),
                    t > 1 && (b.Hn[2] = b.Hn[1]),
                    (b.Hn[1] = b.Hn[0]),
                    (b.Hn[0] = B))
                  : (B = b.Hn[0]));
            for (t = 0; t < D; ) ((F = t++), (f[n + F] = f[g + F]));
            n += D;
            g += D;
            B = n - B;
            if (B < 0) {
              t = -B;
              B = b.e + B;
              t > r && (t = r);
              F = 0;
              for (M = t; F < M; ) ((Q = F++), (f[n + Q] = b.w[B + Q]));
              n += t;
              r -= t;
              B = 0;
            }
            t = 0;
            for (F = r; t < F; ) ((M = t++), (f[n + M] = f[B + M]));
            n += r;
          }
          if (n != g) for (; g < f.length; ) f[n++] = f[g++];
          else n = f.length;
          c != null ? (b.y += n) : (f = f.slice(0, n));
        } else if (c != null) {
          if (((b.y += k), g != 0))
            for (a = 0, c = k; a < c; ) ((d = a++), (f[d] = f[g + d]));
        } else g != 0 && (f = f.slice(g));
        b.b = e;
        return f;
      }
      throw 130;
    }
    qr(a) {
      let b = 0;
      for (; 1 << b <= a; ) ++b;
      return b - 1;
    }
    tT(a, b, c) {
      let d = (b << 3) + 4;
      b = (a[b] & 15) + 5;
      if (b > c) throw 131;
      var e = (c = 1 << b),
        f = -1,
        g = c,
        h = new ArrayBuffer(512 + (c << 2)),
        k = new Int16Array(h, 0, 256);
      let l = new Uint16Array(h, 0, 256),
        n = new Uint16Array(h, 512, c);
      var q = 512 + (c << 1);
      let r = new Uint8Array(h, q, c);
      for (h = new Uint8Array(h, q + c); f < 255 && e > 0; ) {
        q = this.qr(e + 1);
        var t = d >> 3,
          x = (1 << (q + 1)) - 1;
        t = ((a[t] | (a[t + 1] << 8) | (a[t + 2] << 16)) >> (d & 7)) & x;
        var z = (1 << q) - 1;
        x = x - e - 1;
        var A = t & z;
        A < x ? ((d += q), (t = A)) : ((d += q + 1), t > z && (t -= x));
        k[++f] = --t;
        t == -1 ? ((e += t), (r[--g] = f)) : (e -= t);
        if (t == 0) {
          do
            ((q = d >> 3),
              (q = ((a[q] | (a[q + 1] << 8)) >> (d & 7)) & 3),
              (d += 2),
              (f += q));
          while (q == 3);
        }
      }
      if (f > 255 || e != 0) throw 132;
      a = 0;
      e = (c >> 1) + (c >> 3) + 3;
      q = c - 1;
      t = 0;
      for (f += 1; t < f; ) {
        z = t++;
        x = k[z];
        if (x < 1) {
          l[z] = -x;
          continue;
        }
        for (A = 0; A < x; ) {
          ++A;
          r[a] = z;
          do a = (a + e) & q;
          while (a >= g);
        }
      }
      if (a != 0) throw 133;
      for (g = 0; g < c; )
        ((k = g++),
          (f = l[r[k]]++),
          (n[k] = (f << (h[k] = b - this.qr(f))) - c));
      return new ft((d + 7) >> 3, new vi(r, h, n, b));
    }
    bpb(a, b) {
      var c = 0,
        d = -1,
        e = new Uint8Array(292),
        f = a[b];
      let g = e.subarray(0, 256);
      var h = e.subarray(256, 268);
      e = new Uint16Array(e.buffer, 268);
      if (f < 128) {
        var k = this.tT(a, b + 1, 6);
        c = k.b;
        b += f;
        f = k.a << 3;
        var l = a[b];
        if (l == 0) throw 134;
        var n = (k = 0),
          q = c.b;
        let r = q;
        for (l = (++b << 3) - 8 + this.qr(l); ; ) {
          l -= q;
          if (l < f) break;
          let t = l >> 3;
          k += ((a[t] | (a[t + 1] << 8)) >> (l & 7)) & ((1 << q) - 1);
          g[++d] = c.s[k];
          l -= r;
          if (l < f) break;
          t = l >> 3;
          n += ((a[t] | (a[t + 1] << 8)) >> (l & 7)) & ((1 << r) - 1);
          g[++d] = c.s[n];
          q = c.n[k];
          k = c.t[k];
          r = c.n[n];
          n = c.t[n];
        }
        if (++d > 255) throw 135;
      } else {
        for (d = f - 127; c < d; )
          ((f = a[++b]), (g[c] = f >> 4), (g[c + 1] = f & 15), (c += 2));
        ++b;
      }
      a = f = 0;
      for (c = d; a < c; ) {
        k = g[a++];
        if (k > 11) throw 136;
        k != 0 && (f += 1 << (k - 1));
      }
      a = this.qr(f) + 1;
      c = 1 << a;
      f = c - f;
      if ((f & (f - 1)) != 0) throw 137;
      g[d++] = this.qr(f) + 1;
      f = 0;
      for (k = d; f < k; )
        ((n = f++), (q = g[n]), (n = g[n] = q != 0 ? a + 1 - q : 0), h[n]++);
      k = new Uint8Array(c << 1);
      f = k.subarray(0, c);
      k = k.subarray(c);
      e[a] = 0;
      for (n = a; n > 0; )
        ((q = e[n]), k.fill(n, q, (e[n - 1] = q + h[n] * (1 << (a - n)))), --n);
      if (e[0] != c) throw 138;
      for (h = 0; h < d; )
        ((c = h++),
          (n = g[c]),
          n != 0 && ((q = e[n]), f.fill(c, q, (e[n] = q + (1 << (a - n))))));
      return new gt(b, new wi(a, f, k));
    }
  }
  ti.g = "48";
  Object.assign(ti.prototype, { j: ti });
  class ht extends Sc {
    constructor(a) {
      super(ti.J3a[a]);
    }
  }
  ht.g = "49";
  ht.u = Sc;
  Object.assign(ht.prototype, { j: ht });
  class wi {
    constructor(a, b, c) {
      this.b = a;
      this.s = b;
      this.n = c;
    }
  }
  wi.g = "4A";
  Object.assign(wi.prototype, { j: wi });
  class vi extends wi {
    constructor(a, b, c, d) {
      super();
      this.s = a;
      this.n = b;
      this.t = c;
      this.b = d;
    }
  }
  vi.g = "4B";
  vi.u = wi;
  Object.assign(vi.prototype, { j: vi });
  class et {
    constructor(a, b, c, d, e, f, g, h, k, l, n, q) {
      this.b = a;
      this.y = b;
      this.d = c;
      this.w = d;
      this.dj = e;
      this.NOa = f;
      this.c = g;
      this.Hn = h;
      this.e = k;
      this.v = l;
      this.t = n;
      this.JR = q;
    }
  }
  et.g = "4C";
  Object.assign(et.prototype, { j: et });
  class ft {
    constructor(a, b) {
      this.a = a;
      this.b = b;
    }
  }
  ft.g = "4D";
  Object.assign(ft.prototype, { j: ft });
  class gt {
    constructor(a, b) {
      this.a = a;
      this.b = b;
    }
  }
  gt.g = "4E";
  Object.assign(gt.prototype, { j: gt });
  class dl {
    constructor(a, b) {
      this.a = a;
      this.b = b;
    }
  }
  dl.g = "4F";
  Object.assign(dl.prototype, { j: dl });
  class fb {
    constructor() {
      this.stack = [];
      this.pi = [];
    }
    ei(a) {
      this.pi.push(a);
      let b = this;
      return function () {
        b.detach(a);
      };
    }
    detach(a) {
      J.remove(this.pi, a);
    }
    notify(...a) {
      if (this.pi.length != 0) {
        for (
          var b = fb.zka.length == 0 ? [] : fb.zka.pop(), c = 0, d = a.length;
          c < d;

        )
          b.push(a[c++]);
        a = this.pi;
        for (c = a.length; --c > -1; ) this.stack.push(a[c]);
        for (; this.stack.length > 0; )
          ((a = this.stack.pop()), b.push(a), a.apply(null, b), b.pop());
        for (; b.length > 0; ) b.pop();
        fb.zka.push(b);
      }
    }
  }
  fb.g = "50";
  Object.assign(fb.prototype, { j: fb });
  class ry {}
  ry.g = "51";
  class fz {
    static o_a(a) {
      if (a == "starter_pack" || !qd(a, "Payment")) return a;
      a = a.substring(a.indexOf(".") + 1);
      a = a.substring(a.indexOf("_") + 1);
      return "Textures/buttons/map/" + a;
    }
  }
  fz.g = "52";
  class xi {}
  xi.g = "53";
  class Uc {
    constructor() {
      this.g5 = 0;
      Uc.Gbb();
      Uc.Kna.push(this);
    }
    uF() {
      this.g5 = 0;
    }
    save(a) {
      a == null && (a = !1);
      a ? this.uF() : (this.g5 = 1);
    }
    static Bhb() {
      let a = 0,
        b = m.sD(Uc.Kna, function (c) {
          return c.g5 != 0;
        });
      for (; a < b.length; ) b[a++].uF();
    }
    static Gbb() {
      Uc.eA ||
        ((Uc.eA = !0), Hb.Qh.addListener(Uc.J3), xa.F().v3.addListener(Uc.Bhb));
    }
    static J3() {
      let a = m.find(Uc.Kna, function (b) {
        return b.g5 == 1;
      });
      a != null && a.uF();
    }
  }
  Uc.g = "54";
  Object.assign(Uc.prototype, { j: Uc });
  class yi extends Uc {
    constructor(a) {
      super();
      this.ga = a;
      let b = a.attributes.get("InstallID");
      this.sra = b != null ? b : "";
      this.sra == "" &&
        (this.sra = K.T(ed.getDate().getTime() + Math.random() * 1e3));
      this.bY = u.H(a.attributes.get("TotalPaymentSum"));
      this.lX = u.I(a.attributes.get("PaymentCount"));
      u.I(a.attributes.get("SaveSlot"));
      this.Ita = "";
    }
    Lub(a) {
      this.Ita = a;
      this.Hr("ServerUserID", this.Ita);
    }
    Sub(a) {
      a > this.bY &&
        ((this.bY = a), this.Hr("TotalPaymentSum", this.bY.toFixed(5)));
    }
    wub(a) {
      a > this.lX && ((this.lX = a), this.tF("PaymentCount", this.lX));
    }
    tF(a, b) {
      this.Hr(a, b == null ? "null" : "" + b);
    }
    mL(a, b) {
      this.Hr(a, b == null ? "null" : "" + b);
    }
    rka(a, b) {
      this.Hr(a, b ? "1" : "0");
    }
    Hr(a, b) {
      this.ga.set(a, b);
      this.save();
    }
  }
  yi.g = "55";
  yi.u = Uc;
  Object.assign(yi.prototype, { j: yi });
  class el {
    constructor() {
      this.lH = this.jH = 0;
      this.image = null;
    }
  }
  el.g = "56";
  Object.assign(el.prototype, { j: el });
  class zi {
    constructor() {
      this.S9 = 0;
      this.Fk = null;
    }
    lDa() {
      this.S9 == null && (this.S9 = this.Z7a());
      return Oa.dd(this.S9);
    }
    Z7a() {
      return zi.yP.v[this.Fk];
    }
  }
  zi.g = "57";
  Object.assign(zi.prototype, { j: zi });
  class it {
    constructor() {
      this.tV = this.wV = this.q8 = 0;
    }
    Ea() {
      this.wV > 0 && (this.wV--, this.wV == 0 && this.pzb());
    }
    reset() {
      this.q8 = this.wV = 0;
    }
    pzb() {
      this.q8 > 0 && (this.tV++, (this.q8 = 0));
    }
  }
  it.g = "58";
  Object.assign(it.prototype, { j: it });
  class fl {
    constructor() {}
    Eyb(a) {
      debugger;
      let b = new Ia();
      var c = 0;
      let d = p.mCa();
      for (; c < d.length; ) ++c;
      c = p.o.wt("_EclipseModeReplayTutorialBattle", 0);
      c != null ? ((c = c.value), (c = c == null || c == "")) : (c = !0);
      b.G != null &&
        (a || c) &&
        p.o.$A("EclipseModeReplayTutorialBattle", K.T(b.G), 0);
    }
    Lzb(a, b, c) {
      debugger;
      let d = new Ia();
      this.Xyb(a, fl.Vbb(), d, b) && Ya.get().qKa();
      a = p.o.wt("_EclipseModeReplayTutorialBattle", 0);
      a != null ? ((a = a.value), (a = a == null || a == "")) : (a = !0);
      d.G != null &&
        (c || a) &&
        p.o.$A("EclipseModeReplayTutorialBattle", K.T(d.G), 0);
    }
    Xyb(a, b, c, d) {
      d == null && (d = "FIGHT");
      debugger;
      c.G = null;
      if (a.bia.size == 0) return !1;
      var e = m.l();
      let f = m.l(),
        g = !1,
        h = !0;
      if (d != "TOGGLE") {
        var k = p.o.wt("_EclipseModeReplayTutorial", 0);
        h = k != null && Kg(k.value) > 0;
      }
      k = null;
      var l = !1;
      let n = a.bia.entries(),
        q = n.next();
      for (; !q.done; ) {
        var r = q.value;
        q = n.next();
        var t = r[0];
        r = r[1];
        var x = t.ob != null ? t.ob.FH : 0;
        if (
          b &&
          !p.o.$h &&
          x <= 0 &&
          t.type == "FightBossesIntermission" &&
          d == "TOGGLE" &&
          r.ob != null
        )
          (r.ob.kx(!0),
            e.push(r),
            t.ob != null &&
              ((x = p.o.Ds),
              (r = r.ob.Ck),
              x.Ne == r.Ne && x.Se == r.Se && (k = t.ob.Ck),
              t.ob.kx(!1),
              f.push(t.ob.Ck)));
        else if (
          b &&
          p.o.$h &&
          t.ob == null &&
          t.type == "FightBossesIntermission" &&
          r.type == "FightBossesReplayable" &&
          d == "FIGHT" &&
          r.ob != null
        ) {
          x = new ib();
          x.zm(t.pl.name, t.name, t.dg == null ? "null" : "" + t.dg);
          t = p.o.Xq(x);
          if (t == null || t.kN == 0) continue;
          r.ob.kx(!1);
          t = new ib();
          t.zm(r.pl.name, r.name, null);
          f.push(t);
        } else if (
          t.ob != null &&
          (d == "INIT" ||
            (d == "FIGHT" && r.ob == null) ||
            (d == "TOGGLE" && r.ob != null))
        ) {
          if (
            (t.type == "FightBosses" && b) ||
            (t.type == "FightBossesIntermission" && !b)
          )
            continue;
          x = new ib();
          x.zm(t.pl.name, t.name, t.dg == null ? "null" : "" + t.dg);
          x = p.o.Xq(x);
          if (x != null && x.qo != 0)
            if (
              (t.ob.ni() != p.o.$h && (t.ob.kx(p.o.$h), e.push(t)),
              d == "TOGGLE")
            )
              r.ob.ni() == p.o.$h && (r.ob.kx(!p.o.$h), e.push(r));
            else {
              if (
                d == "FIGHT" &&
                b &&
                (t.type == "FightBossesIntermission" ||
                  t.type == "FightFinalTitan")
              )
                continue;
              l = !p.o.$h;
              t = new ib();
              t.zm(r.pl.name, r.name, null);
              !h && p.o.$h && (c.G = t);
              x = p.o;
              let z = new ib();
              z.zm(r.pl.name, r.name, r.dg == null ? "null" : "" + r.dg);
              x = x.Xq(z);
              p.o.Saa(t, !0, !0, !1, l, x != null ? x.qo : 0);
              l = !0;
              x = this.t1(a);
              r.isActive = !0;
              Ya.get() == null ||
                g ||
                ((r = this.t1(a)),
                (!x && r) || (x && !r) ? (g = !0) : f.push(t));
            }
        }
      }
      l && p.F().Lx();
      if (Ya.get() != null && !g) {
        for (a = 0; a < e.length; ) Ya.get().Gma(e[a++]);
        e = d == "FIGHT" && p.o.$h && h;
        d = d != "FIGHT" || !p.o.$h;
        a = 0;
        for (b = f.length; a < b; )
          ((c = a++),
            Ya.get().Qaa(f[c], !0, (e && c == f.length - 1) || f[c] == k, d));
      }
      p.o.save();
      return g;
    }
    t1(a) {
      if (a == null) return !1;
      a = a.Fg;
      let b = 0,
        c = a.length;
      for (; b < c; ) if (a[b++].isActive) return !0;
      return !1;
    }
    static Vbb() {
      var a = p.o;
      let b = new ib();
      b.mj("ZONE_6|FINAL_BATTLE|1");
      a = a.Xq(b);
      return a == null ? !1 : a.qo > 0;
    }
  }
  fl.g = "59";
  Object.assign(fl.prototype, { j: fl });
  class jt {
    constructor() {
      this.GR = new kt();
      this.gVa = new lt();
      this.Oia = m.l();
      this.Nua = null;
      this.iYa = new gd();
      this.Zm = m.l();
      this.vHa = m.l();
      this.Z_ = m.l();
      this.rca = m.l();
      this.Kp = m.l();
      this.xqb = m.l();
      this.jGa = m.l();
      this.gKa = m.l();
      this.GDa = m.l();
      this.Qva = m.l();
      this.Fu = m.l();
    }
    ICa() {
      let a = 0,
        b = 0,
        c = this.Zm;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        d.type != I.$r && d.zj && ++a;
      }
      return a;
    }
    m6a(a) {
      return m.sD(this.Zm, function (b) {
        return b.type == a ? b.zj : !1;
      }).length;
    }
    $b(a) {
      return m.find(this.Zm, function (b) {
        return b.name == a;
      });
    }
    PQ(a) {
      function b(c) {
        return c.kf == a;
      }
      return m.Fe(this.Kp, b) ? m.sD(this.Kp, b) : m.l();
    }
    Mkb(a) {
      if (a != null) {
        a = a.children;
        for (var b = 0; b < a.length; ) {
          var c = a[b++];
          let e = new mt();
          var d = c.attributes.get("Name");
          e.type = d != null ? d : "";
          d = c.attributes.get("ItemType");
          e.HR = d != null ? d : "";
          c = c.children;
          for (d = 0; d < c.length; ) {
            let f = xf.Qd(c[d++], e.type, e.HR);
            e.pna.push(f);
          }
          this.Oia.push(e);
        }
      }
    }
    l8a(a) {
      let b = 0,
        c = this.Oia;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.type == a.N6) return d;
      }
      return null;
    }
    parse() {
      let a = Ja.mi(823);
      if (a != null) {
        this.Mkb(a.A("UpgradeList"));
        this.Via(a.A("Items"));
        this.GR.parse(a.A("ItemSets"));
        var b = this;
        Pa.lia.addListener(function (c) {
          b.Myb(c);
        });
        we.F().Pia.addListener(function (c) {
          if (c.kma)
            if (c.wm.length == 0) v.Y1 || (b.XOa(), b.VOa());
            else {
              c = c.wm;
              for (var d = Array(c.length), e = 0, f = c.length; e < f; ) {
                let g = e++;
                d[g] = c[g].pha;
              }
              b.kPa(d);
              b.VOa();
            }
        });
        xa.F().zia.addListener(function (c) {
          c.Wf == 4 && b.XOa();
        });
      }
    }
    Via(a) {
      if (a != null) {
        a = a.children;
        for (var b = 0; b < a.length; ) {
          let c = this.gVa.create(a[b++]);
          if (c != null)
            switch ((this.Zm.push(c), c.type)) {
              case I.Ci:
                this.Qva.push(c);
                break;
              case I.Tx:
                this.rca.push(c);
                break;
              case I.Gu:
                this.Z_.push(c);
                break;
              case I.Di:
                this.GDa.push(c);
                break;
              case I.yk:
                this.Kp.push(c);
                nt.Xga(c) && this.vHa.push(c);
                let d = c.kf;
                d == null || lc(d) || this.iYa.add(c.kf);
                break;
              case I.$r:
                this.xqb.push(c);
                break;
              case I.xg:
                this.Fu.push(c);
                break;
              case I.Ff:
                this.jGa.push(c);
                break;
              case I.Xh:
                this.gKa.push(c);
            }
        }
        m.find(this.rca, function (c) {
          return c.name == "Perk_Reset";
        });
      }
    }
    esb(a, b) {
      let c = this;
      m.forEach(
        m.tj(this.Zm, function (d) {
          return d.isActive ? d.lock == a : !1;
        }),
        function (d) {
          c.tMa(d, d.type == I.yk ? d.Bf : b);
        },
      );
    }
    tMa(a, b) {
      a != null && !a.ni() && p.o.MJ(a.lock) && b == a.Bf && a.Nr(!0);
    }
    Dnb(a) {
      m.forEach(
        m.tj(this.Zm, function (b) {
          return b.isActive && b.zj ? b.lock == a : !1;
        }),
        function (b) {
          b.Nr(!1);
        },
      );
    }
    S7a() {
      let a = -1,
        b = 0,
        c = this.Kp;
      for (; b < c.length; ) {
        var d = c[b++].fm();
        d != null && ((d = d.An), d > a && (a = d));
      }
      return a;
    }
    F7a() {
      let a = null,
        b = 0,
        c = 0,
        d = this.Kp;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        if (e.fm() == null) continue;
        let f = parseFloat(e.Op);
        f < b || ((b = f), (a = e));
      }
      return a;
    }
    mz(a) {
      a == null && (a = 0);
      for (var b = 0, c = this.Zm; b < c.length; ) c[b++].mz(a);
      b = 0;
      for (c = this.Oia; b < c.length; ) c[b++].mz(a);
      p.o.xa.Au();
    }
    n_(a) {
      var b;
      b == null && (b = 0);
      let c = 0;
      for (; c < a.length; ) a[c++].n_(b);
    }
    Myb(a) {
      function b(c, d, e) {
        var f = p.vf(c.name);
        f = f != null ? f.Ce : 0;
        let g = 0,
          h = p.o.wt(d, 0);
        h != null && (g = K.parseInt(h.value));
        f > g && (p.o.otb(d, f), e == null || lc(e) || p.o.$A(e, c.name, 0));
      }
      if (a != null && p.o != null)
        switch (a.type) {
          case I.Ci:
            b(a, "BestAcquiredArmorLevel", "BestArmor");
            break;
          case I.Di:
            b(a, "BestAcquiredHelmLevel");
            break;
          case I.xg:
            b(a, "BestAcquiredWeaponLevel");
            break;
          case I.Ff:
            b(a, "BestAcquiredMagicLevel");
            break;
          case I.Xh:
            b(a, "BestAcquiredRangedLevel");
        }
    }
    XOa() {
      let a = m.tj(Ai.instance.config.Wfa(), function (e) {
          return e.Kga() ? ((e = e.pha), !(e == null || lc(e))) : !1;
        }),
        b = Array(a.length),
        c = 0,
        d = a.length;
      for (; c < d; ) {
        let e = c++;
        b[e] = a[e].pha;
      }
      this.kPa(m.t_(b));
    }
    kPa(a) {
      m.forEach(a, function (b) {
        p.xMa(b, !0);
      });
    }
    VOa() {
      this.Nua = m.Cdb(p.items.Kp, function (a) {
        return a.Yb == I.Ioa ? a.$Ca() : !1;
      });
    }
  }
  jt.g = "5A";
  Object.assign(jt.prototype, { j: jt });
  class ot {
    constructor() {
      this.Mt = m.l();
      this.eia = m.l();
      this.wHa = m.l();
      this.a$ = this.ne = this.Dd = this.Qm = null;
      this.yra = !1;
      jb.ui.addListener(w(this, this.Olb));
    }
    initialize(a, b, c) {
      this.yra ||
        ((this.yra = !0),
        (this.ne = a),
        this.ne != null &&
          ((this.Dd = b),
          this.Dd != null &&
            ((this.Qm = c),
            this.Qm != null &&
              (this.U1a(), this.Dd.Bl.xIa.addListener(w(this, this.s_a))))));
    }
    t_a() {
      let a = this;
      (function () {
        let b = 0,
          c = m.tj(a.wHa, function (d) {
            return d.rc.state == "NotStarted";
          });
        for (; b < c.length; ) a.$ba(c[b++]);
      })();
      (function () {
        for (var b = 0, c = a.eia; b < c.length; )
          if (c[b++].isActive()) return;
        if (a.eHa != null && a.$ba(a.eHa)) a.eHa = null;
        else
          for (
            b = m.tj(a.eia, function (d) {
              return d.rc.state != "NotStarted" ? d.rc.state == "End" : !0;
            }),
              b.sort(function (d, e) {
                return gz.Zn(d.rc.state) - gz.Zn(e.rc.state);
              }),
              b.sort(function (d, e) {
                return d.rc.vx - e.rc.vx;
              }),
              c = 0;
            c < b.length && !a.$ba(b[c++]);

          );
      })();
    }
    ZYa(a) {
      let b = m.find(this.Mt, function (c) {
        return c.ab() == a;
      });
      return b == null ? !1 : this.$Ya(b);
    }
    l_a() {
      debugger;
      if (!this.nE())
        for (
          var a = 0,
            b = m.tj(this.Mt, function (c) {
              return c.rc.state == "Purchased" ? !c.rc.$H : !1;
            });
          a < b.length;

        )
          this.jxa(b[a++]);
    }
    n_a() {
      debugger;
      if (!this.nE())
        for (
          var a = 0,
            b = m.tj(this.Mt, function (c) {
              return c.rc.state == "Purchased";
            });
          a < b.length;

        )
          this.m_a(b[a++]);
    }
    U1a() {
      this.a$ == null && (this.a$ = new pt(this.Dd, this.Qm));
      let a = 0,
        b = m.tj(this.ne.vHa, function (c) {
          return c != null;
        });
      for (; a < b.length; ) {
        let c = this.a$.createOffer(b[a++]);
        c != null &&
          (c.qp() == 0 ? this.wHa.push(c) : c.qp() == 1 && this.eia.push(c),
          this.Mt.push(c));
      }
    }
    nE() {
      return this.Dd.Bi.$Q();
    }
    $ba(a) {
      let b = ha.F().ta;
      return !a.Yga() &&
        (a.QCa() <= 0 || a.QCa() < p.Dc) &&
        (a.V0() <= 0 || a.V0() > p.Dc) &&
        a.Vi(b)
        ? (this.Lwb(a), !0)
        : !1;
    }
    s_a(a) {
      if (qd(a, Bi.uHa)) {
        var b = m.find(this.Mt, function (c) {
          return c.tJ() == a;
        });
        b != null && this.W3a(b);
      }
    }
    Lwb(a) {
      a.Mwb();
      a.pXa();
      a.rc.state = "JustStarted";
      a.rc.vx++;
      this.Dd.save();
    }
    W3a(a) {
      a.rc.state != "Purchased" &&
        (a.CKa(),
        (a.rc.state = a.item.jU ? "LastChance" : "End"),
        this.Dd.save());
    }
    $Ya(a) {
      jb.Jha(a.item);
      return !0;
    }
    Olb(a) {
      let b = p.PQ(a);
      b != null &&
        nt.Xga(b) &&
        this.Plb(
          m.find(this.Mt, function (c) {
            return c.item == b;
          }),
        );
    }
    Plb(a) {
      a != null &&
        (a.qp() != 1 && a.X3a(),
        a.CKa(),
        (a.rc.x4 = p.Dc),
        (a.rc.state = "Purchased"),
        this.Dd.save(),
        this.jxa(a));
    }
    jxa(a) {
      if (a != null && !this.Dd.Bi.$Q())
        for (
          var b = 0,
            c = this,
            d = function (h) {
              let k = (b += 1);
              h.rc.$H = k == h.item.Lt.length;
              h.rc.$H && c.Dd.save();
            },
            e = 0,
            f = a.item.Lt;
          e < f.length;

        ) {
          let h = f[e];
          ++e;
          var g = this.Dd.xa.Rj(h.name);
          if (g != null && g.qd() > 0) {
            d(a, h.name, !1);
            this.KOa(h, g);
            continue;
          }
          g = this.ne.$b(h.name);
          g == null ||
            this.Dd.dha(g.lock) ||
            (Pa.qDa(g, 100 * this.Dd.bb() + I.Tfb, 1, !0, !0),
            h.TI.length > 0 && Pa.sDa(g, h.fBa(this.Dd.bb())),
            d(a, h.name, !0),
            Pa.bcb(a, g));
        }
    }
    m_a(a) {
      if (a != null) {
        var b = 0;
        for (a = a.item.Lt; b < a.length; ) {
          let c = a[b];
          ++b;
          let d = this.Dd.xa.Rj(c.name);
          d != null && d.qd() != 0 && this.KOa(c, d);
        }
      }
    }
    KOa(a, b) {
      debugger;
      if (a.TI.length != 0)
        if (b.be.length > 0) {
          a = b.be;
          b = Array(a.length);
          for (var c = 0, d = a.length; c < d; ) {
            var e = c++;
            b[e] = a[e].name;
          }
        } else
          for (
            Pa.rDa(a.name, a.fBa(this.Dd.bb())),
              a = a.TI,
              b = Array(a.length),
              c = 0,
              d = a.length;
            c < d;

          )
            ((e = c++), (b[e] = a[e].name));
    }
  }
  ot.g = "5B";
  Object.assign(ot.prototype, { j: ot });
  class jb {
    static lock() {
      jb.H2 == null &&
        (v.Cha(!1),
        (jb.H2 = L.J.root.appendChild(ra.Ya(Ci, [].slice()))),
        mc.J.df.appendChild(jb.H2.node.L));
    }
    static unlock() {
      v.Dma();
      let a = jb.H2;
      a != null && a.B();
      jb.H2 = null;
    }
    static Jha(a, b) {
      jb.lock();
      a.Yb == I.fG &&
        (b == null && (b = v.hBa(a, v.zAa())),
        p.o.$A("FirstGemPurchaseBonus", K.T(b), 0));
      ya.iR.NHa(jb.QDa);
      ya.iR.aZa(a.name);
    }
    static QDa(a) {
      switch (a.type) {
        case "PURCHASE_FAIL_EVENT":
          jb.unlock();
          jb.um.$();
          break;
        case "PURCHASE_SUCCESS_EVENT":
          a = Kb.Ve(a, "detail");
          let b = Kb.Ve(a, "sku");
          a = Kb.Ve(a, "purchase");
          switch (b) {
            case "Pack_Starter":
            case "Premium_Pack_Zone1":
            case "Premium_Pack_Zone2":
            case "Premium_Pack_Zone3":
            case "Premium_Pack_Zone4":
            case "Premium_Pack_Zone5":
            case "Premium_Pack_Zone6":
              ((la.flags.EK = b), la.flags.save());
          }
          ya.iR.d1a(
            a,
            function () {
              let c = p.items.$b(b).kf;
              la.flags.EK = null;
              la.flags.save();
              jb.b1a(p.PQ(c));
              jb.unlock();
            },
            function () {
              jb.unlock();
              jb.um.$();
            },
          );
          break;
        default:
          (jb.unlock(), jb.um.$());
      }
    }
    static b1a(a) {
      hz.ui(a.kf);
      Pa.Zz(a);
      yf.$ia.KWa(a.kf);
      jb.ui.$(a.kf);
    }
  }
  jb.g = "5C";
  class p {
    constructor() {
      this.yc = m.l();
      this.Lm = m.l();
      this.fN = m.l();
      this.kO = m.l();
      this.xC = m.l();
      this.wDa = m.l();
      this.yU = m.l();
      this.HB = this.Ou = this.BG = this.iN = null;
      this.Gf = m.l();
      this.IUa = m.l();
      this.YD = !1;
      this.O6 = 0;
      this.ypa = new gd();
      this.kea = -1;
    }
    $db() {
      this.rbb();
      v.pY.Vz();
      this.Via();
      this.skb();
      p.items.mz();
      this.jzb();
      this.Ejb();
      p.fkb();
      this.Qkb();
      this.Zkb();
      this.YD = !0;
      this.U3(Z.Vna);
      this.Dbb();
      this.BG = null;
      Hb.Qh.removeListener(w(this, this.Cx));
      Hb.Qh.addListener(w(this, this.Cx));
      p.Dc = Math.round(Hb.instance.getTime());
    }
    ofa(a, b) {
      let c = m.l();
      if (a.x$a()) {
        var d = 0;
        let h = m.l();
        for (var e = 0, f = a.groups.length; e < f; ) (++e, h.push(m.l()));
        for (e = 0; e < b; ) {
          f = e++;
          let k = 0,
            l = null,
            n = 0,
            q = a.groups;
          for (; n < q.length; ) {
            var g = q[n];
            ++n;
            let r = this.m7a(g.name);
            r != null &&
              (g.eb
                ? g.kK
                  ? ((g = r.T8a(h[k])),
                    d >= r.Nx.length - 1 ? (d = h[k].length = 0) : ++d)
                  : (g = r.S8a())
                : (g = r.Nx[f % r.Nx.length]),
              g != null &&
                (l == null
                  ? (l = g)
                  : ((l = this.zr(g.node, l)), this.rXa(l))));
            ++k;
          }
          l != null &&
            ((f =
              a.node.A("Template") == null
                ? this.zr(a.node, l)
                : l != null
                  ? l.clone()
                  : new xc()),
            c.push(f));
        }
      } else for (d = 0; d < b; ) (++d, c.push(a.clone()));
      c.length == 0 && c.push(a.clone());
      return c;
    }
    Oea(a) {
      let b = new ib();
      b.mj(a);
      b.mj(a);
      return p.bw(b);
    }
    bzb() {
      let a = 0,
        b = this.yc;
      for (; a < b.length; ) p.dM(b[a++]);
    }
    Nzb() {
      for (var a = 0, b = this.xC; a < b.length; ) b[a++].Lx();
      a = 0;
      for (b = this.kO; a < b.length; ) b[a++].Lx();
      a = 0;
      for (b = this.fN; a < b.length; ) b[a++].Lx();
    }
    Lx() {
      this.bzb();
      this.Nzb();
    }
    nE() {
      let a = p.o;
      return a != null ? a.Bi.$Q() : !1;
    }
    i0(a) {
      let b = 0,
        c = this.Gf;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.key == a) return d.value;
      }
      return "FightNone";
    }
    FAa(a) {
      let b = 0,
        c = this.Gf;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.value == a) return d.key;
      }
      return "DUMMY";
    }
    jzb() {
      let a = hd.F().vja.uBa(this.O6),
        b = new gd(),
        c = 0;
      for (; c < a.length; ) {
        let d = a[c];
        ++c;
        let e = p.items.$b(d.name);
        if (e == null || e.Op == d.Tg) continue;
        let f = hd.F().Qk.s6a(d.q2a),
          g = new Ia();
        e.czb(d, f, g);
        g.G && b.add(e);
      }
      p.items.n_(b.uma());
    }
    Ejb() {
      let a = hd.F().vja.uBa(this.O6),
        b = 0,
        c = p.items.Kp;
      for (; b < c.length; ) {
        let e = c[b];
        ++b;
        e.N4();
        let f = 0,
          g = a;
        for (; f < g.length; ) {
          let h = g[f];
          ++f;
          if (e.kf == h.kf && e.lock == h.groupId && this.R_a(h.P6)) {
            var d = void 0;
            h.cHa > 0 ? (d = !0) : ((d = h.kf), (d = !(d == null || d == "")));
            d &&
              ((e.Kv = new zf(
                h.kf,
                h.Ffb,
                h.endTime,
                h.cHa,
                h.Efb,
                h.sign,
                h.startTime,
                h.focus,
                !1,
                !0,
              )),
              Jd.UWa(e));
          }
        }
      }
    }
    jrb(a) {
      debugger;
      let b = this.HB.A("Root").A("Versions");
      b != null && b.A("DataVersion").set("Value", a);
      p.o.save(!0);
    }
    rbb() {
      this.Gf.push(new rb("DUMMY", "FightNone"));
      this.Gf.push(new rb("TUTORIAL", "FightTutorial"));
      this.Gf.push(new rb("CHALLENGE", "FightChallenge"));
      this.Gf.push(new rb("BOSSES", "FightBosses"));
      this.Gf.push(new rb("TOURNAMENT", "FightTournament"));
      this.Gf.push(new rb("STORY", "FightStory"));
      this.Gf.push(new rb("SURVIVAL", "FightSurvival"));
      this.Gf.push(new rb("TACTICS", "FightFriendly"));
      this.Gf.push(new rb("AUTO", "FightAuto"));
      this.Gf.push(new rb("AI", "FightAi"));
      this.Gf.push(new rb("HIDDEN", "FightUnregister"));
      this.Gf.push(new rb("FAKE", "FightFake"));
      this.Gf.push(new rb("PVP", "FightPVP"));
      this.Gf.push(new rb("PERIODIC", "FightPeriodic"));
      this.Gf.push(new rb("FINAL_BATTLE", "FightFinal"));
      this.Gf.push(new rb("FINAL_BATTLE_REPLAYABLE", "FightFinalReplayable"));
      this.Gf.push(new rb("BOSSES_INTERMISSION", "FightBossesIntermission"));
      this.Gf.push(new rb("REPLAYABLE", "FightReplayable"));
      this.Gf.push(new rb("BOSSES_REPLAYABLE", "FightBossesReplayable"));
      this.Gf.push(new rb("FINAL_BATTLE_TITAN", "FightFinalTitan"));
      this.Gf.push(new rb("RAID", "FightRaid"));
    }
    dyb(a) {
      if (this.ypa.contains(a)) return !1;
      this.ypa.add(a);
      return !0;
    }
    U3(a, b) {
      b == null && (b = "");
      if (a != null && a != "" && this.dyb(a)) {
        try {
          var c = Ja.mi(G.uf(a));
        } catch (e) {
          return;
        }
        c = c.children;
        for (var d = 0; d < c.length; ) {
          let e = c[d++];
          e.name == "Quest"
            ? ha.F().bP(new ce(e, a))
            : e.name == "Include" && this.nkb(e, b);
        }
      }
    }
    nkb(a, b) {
      var c = m.l();
      ce.MS(a.A("Conditions"), c);
      if (c.length > 0) {
        let d = ha.F().ta,
          e = 0;
        for (; e < c.length; ) if (!c[e++].compare(d)) return;
      }
      a = a.attributes.get("File");
      a = (a != null ? a : "").split("|");
      if (a != null && a.length != 0)
        for (c = 0; c < a.length; ) this.U3(a[c++], b + "--");
    }
    R_a(a) {
      let b = this;
      return a.length != 0
        ? m.any(a, function (c) {
            return b.O6 == c;
          })
        : !0;
    }
    uzb(a) {
      let b = 0,
        c = this.yc;
      for (; b < c.length; ) c[b++].fM(a);
    }
    $3a(a) {
      a != null && (a.cB(p.o.o4), a.aR() <= 0 && a.cB(0));
    }
    A3a() {
      debugger;
    }
    W2a() {
      debugger;
    }
    Twb() {
      debugger;
    }
    u2a(a) {
      if (a != null)
        if (a.data != null) {
          let b = p.o.Bl.lJ(a.data);
          b != null ? (a.cB(v.eJ(b.Sv)), a.aR() < 0 && a.cB(0)) : a.cB(0);
        } else a.cB(0);
    }
    rXa(a) {
      this.IUa.push(a);
    }
    zmb(a) {
      return this.Amb(a.jj);
    }
    Amb(a) {
      var b = a.Ob,
        c = a.Xo;
      let d = p.dbb(a.exp);
      b > 0 && p.Twa(b);
      c > 0 && p.Swa(c, 3);
      b = a.TAa();
      if (b.length > 0)
        for (c = 0; c < b.length; ) {
          var e = b[c];
          ++c;
          e.currency.SZ == 0 && p.o.Vua(e.currency, e.count);
        }
      b = a.$8a();
      if (b.length > 0)
        for (c = 0; c < b.length; )
          ((e = b[c]), ++c, p.o.Tw.QWa(e.Tw, e.count));
      a = a.items;
      if (a.length > 0)
        for (b = 0; b < a.length; )
          ((e = a[b]),
            ++b,
            (c = e.item),
            (e = e.lFa),
            c.ol != null && p.Py(c.ol, 1, 0, !1, !1),
            p.Py(c, 1, 0, !1, !1).tY(e.pJa, p.o.bb()));
      p.o.save();
      return d;
    }
    zr(a, b, c) {
      c == null && (c = !0);
      b = b != null ? b.clone() : new xc();
      if (a.attributes.get("Voice") != null) {
        var d = a.attributes.get("Voice");
        b.voice = d != null ? d : "";
      }
      a.attributes.get("Number") != null &&
        (b.number = u.I(a.attributes.get("Number")));
      a.attributes.get("NoDoubles") != null &&
        (b.kK = u.I(a.attributes.get("NoDoubles")) > 0);
      a.attributes.get(p.Pna) != null &&
        ((d = u.H(a.attributes.get(p.Pna), 1)),
        (b.a_ = d < 0 ? 0 : d > 1 ? 1 : d));
      a.attributes.get("FistsDamageMod") != null &&
        (b.T_ = u.H(a.attributes.get("FistsDamageMod"), 1));
      b.random = u.I(a.attributes.get("Random"));
      b.vba = u.H(a.attributes.get("AutoTuneFactor"));
      b.level = u.I(a.attributes.get("Level"), b.level);
      b.LP = u.I(a.attributes.get("Dan"), b.LP);
      b.Xb = u.H(a.attributes.get("Damage"), b.Xb);
      b.WP = u.H(a.attributes.get("Difficulty"), b.WP);
      b.qR =
        a.attributes.get("BeginnerCheat") != null &&
        u.I(a.attributes.get("BeginnerCheat")) > 0;
      b.UU = u.I(a.attributes.get("WarriorPower"));
      b.F4 = u.I(a.attributes.get("RatingCorrection"));
      b.SOa = u.ka(a.attributes.get("Unknown"), !1);
      d = v.ho.attributes;
      v.WZa();
      for (var e = 0; e < d.length; ) {
        var f = d[e];
        ++e;
        var g = a.attributes.get(f.name) == null;
        g && c
          ? ((g = new ja(0)),
            b.lM.get(f.name, g),
            (g.G = v.hEa(f.name) ? g.G + b.UU : g.G),
            b.lM.set(f.name, g.G))
          : g ||
            ((g = u.I(a.attributes.get(f.name))),
            v.hEa(f.name) && (g += b.UU),
            b.lM.set(f.name, g));
      }
      a.attributes.get("FirstName") != null &&
        ((d = a.attributes.get("FirstName")), (b.ft = d != null ? d : ""));
      a.attributes.get("LastName") != null &&
        ((d = a.attributes.get("LastName")), (b.BFa = d != null ? d : ""));
      if (a.attributes.get("Avatar") != null)
        ((d = a.attributes.get("Avatar")), (b.Kf = d != null ? d : ""));
      else if (((d = b.Kf), d == null || d == "")) b.Kf = v.Vca;
      a.attributes.get("AvatarScale") != null &&
        (b.xba = u.H(a.attributes.get("AvatarScale"), 1));
      a.attributes.get("AvatarPivotOffsetY") != null &&
        (b.wba = u.H(a.attributes.get("AvatarPivotOffsetY"), 0.5));
      a.attributes.get("PlayerRating") != null &&
        (b.f4 = u.H(a.attributes.get("PlayerRating")));
      a.attributes.get("EnemyRating") != null &&
        (b.J_ = u.H(a.attributes.get("EnemyRating")));
      a.attributes.get("PlayerRatingMagic") != null &&
        (b.ija = u.H(a.attributes.get("PlayerRatingMagic")));
      a.attributes.get("EnemyRatingMagic") != null &&
        (b.Mda = u.H(a.attributes.get("EnemyRatingMagic")));
      a.attributes.get("PlayerRatingRanged") != null &&
        (b.jja = u.H(a.attributes.get("PlayerRatingRanged")));
      a.attributes.get("EnemyRatingRanged") != null &&
        (b.Nda = u.H(a.attributes.get("EnemyRatingRanged")));
      d = a.A("AttributesAlign");
      if (d != null)
        for (d = d.children, e = 0; e < d.length; )
          ((f = d[e++]),
            (g = new Di()),
            (g.fp = u.H(f.attributes.get("Factor"))),
            (g.shift = u.H(f.attributes.get("Shift"))),
            (g.priority = u.I(f.attributes.get("Priority"))),
            f.attributes.get("Eclipse") == null
              ? (g.VP = 2)
              : (g.VP = u.I(f.attributes.get("Eclipse")) == 0 ? 1 : 0),
            b.PY.push(g));
      d = a.A("Groups");
      if (d != null)
        for (d = d.children, e = 0; e < d.length; ) {
          f = d[e++];
          g = new qt();
          let h = f.attributes.get("Name");
          g.name = h != null ? h : "";
          g.eb = u.ka(f.attributes.get("Random"));
          g.kK = u.ka(f.attributes.get("NoDoubles"));
          b.groups.push(g);
        }
      d = a.A("BossAbility");
      d != null &&
        ((e = d.attributes.get("Alias")),
        (b.Fba = e != null ? e : null),
        (b.lP = u.I(d.attributes.get("StartedCooldown"))));
      if (c) {
        c = a.A("Items");
        if (c != null)
          for (b.Pv.length = 0, c = c.children, d = 0; d < c.length; )
            ((e = c[d++]),
              (f = null),
              e.attributes.get("Name") != null
                ? ((f = e.attributes.get("Name")),
                  (f = p.items.$b(f != null ? f : "")))
                : e.attributes.get("Type") != null &&
                  ((f = e.attributes.get("Type")),
                  (f = b.Fd(f != null ? f : ""))),
              f != null &&
                (f.type == I.p7
                  ? b.Pv.push(f.clone())
                  : ((f = f.clone()),
                    (e = e.A("Enchantments")),
                    (f.pz.length = 0),
                    f.Njb(e),
                    b.ik(f.type, f),
                    this.YD || b.hXa(f))));
        c = a.A("Perks");
        if (c != null)
          for (c = c.children, d = 0; d < c.length; )
            if (
              ((e = c[d++]),
              (f = e.attributes.get("Name")),
              (f = v.Sg.ln(f != null ? f : "")),
              f != null && !b.FK.includes(f))
            ) {
              if (e.A("Set") != null || e.A("RatingEvaluation") != null)
                ((f = f.clone(e.A("Set"), e.A("RatingEvaluation"))), b.zXa(f));
              m.cd(b.FK, f);
            }
      } else
        (a.attributes.get(I.Ux) != null &&
          ((c = a.attributes.get(I.Ux)),
          (b.Rf = p.items.$b(c != null ? c : ""))),
          a.attributes.get(I.Ci) != null &&
            ((c = a.attributes.get(I.Ci)),
            (b.kg = p.items.$b(c != null ? c : ""))),
          a.attributes.get(I.Di) != null &&
            ((c = a.attributes.get(I.Di)),
            (b.Mg = p.items.$b(c != null ? c : ""))),
          a.attributes.get(I.xg) != null &&
            ((c = a.attributes.get(I.xg)),
            (b.Hd = p.items.$b(c != null ? c : ""))),
          a.attributes.get(I.Xh) != null &&
            ((c = a.attributes.get(I.Xh)),
            (b.lg = p.items.$b(c != null ? c : ""))),
          a.attributes.get(I.Ff) != null &&
            ((c = a.attributes.get(I.Ff)),
            (b.Ng = p.items.$b(c != null ? c : ""))),
          a.attributes.get(I.$r) != null &&
            ((c = a.attributes.get(I.$r)),
            (b.Dt = p.items.$b(c != null ? c : ""))));
      c = a.attributes.get("Tactic");
      b.Gc = P.wfa(c != null ? c : "");
      b.Gj = a.attributes.get("NotAI") == null;
      b.WD = a.attributes.get("NotAnimation") == null;
      b.Bu = a.attributes.get("Controlled") != null;
      b.qb = !1;
      b.zd = !1;
      b.mh = !1;
      b.hr = !1;
      b.qg = 0;
      b.ao = 0;
      b.oh || ((b.node = a), (b.oh = !0));
      return b;
    }
    XIa(a, b, c, d, e, f) {
      var g = b.attributes.get("Name");
      a.name = g != null ? g : "";
      a.type = c;
      a.repeat = u.I(b.attributes.get("Replays"));
      a.Wya = u.ka(b.attributes.get("DisableRetry"));
      a.Pn = u.I(b.attributes.get("ReplayInterval"));
      a.n4 = u.I(b.attributes.get("Power"), 1);
      a.vT = u.I(b.attributes.get("Rounds"), 2);
      a.a5 = u.I(b.attributes.get("RoundTime"), 60);
      g = b.attributes.get("Location");
      a.location = g != null ? g : d;
      d = b.attributes.get("Music");
      a.Ap = d != null ? d : e;
      a.e4a = u.H(b.attributes.get("EvaluatedRating"), -1);
      a.EDa = u.H(b.attributes.get("HealthRecovery"), 1);
      a.qh = u.H(b.attributes.get("PrizeBase"), -1);
      e = b.attributes.get("Description");
      a.ula(e != null ? e : "");
      a.locked = u.ka(b.attributes.get("Locked"), !1);
      e = b.attributes.get("RewardImage");
      a.ZKa = e != null ? e : "";
      a.Q1 = c != "FightNone" && c != "FightPVP";
      d = e = 0;
      Xa(b.attributes.get("RewardDigits"))
        ? f != null && (e = f.gL)
        : (e = u.I(b.attributes.get("RewardDigits")));
      Xa(b.attributes.get("PrizeBaseDigits"))
        ? f != null && (d = f.QK)
        : (d = u.I(b.attributes.get("PrizeBaseDigits")));
      a.gL = e;
      a.QK = d;
      f = b.A("Warriors");
      if (f != null)
        for (f = f.children, e = 0; e < f.length; ) {
          d = f[e++];
          Xa(d.attributes.get("Template"))
            ? (g = this.zr(d, null))
            : ((g = d.attributes.get("Template")),
              (g = this.xfa(g != null ? g : null)),
              (g = g != null ? this.zr(d, g.$e) : this.zr(d, null)));
          let h = d.attributes.get("Group");
          g.dKa = h != null ? h : null;
          g.random = u.I(d.attributes.get("Random"));
          g.node = d;
          a.aKa(g);
        }
      f = b.A("Rules");
      b = b.A("Rewards");
      this.UE(a, f);
      c != "FightRaid" && this.rkb(a, b);
    }
    Aq(a) {
      m.cd(this.yc, a);
      p.rra && (this.Gsb(a), p.dM(a));
    }
    xfa(a) {
      let b = 0,
        c = this.yU;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.name == a) return d;
      }
      return null;
    }
    Cx() {
      p.Dc = Math.round(Hb.instance.getTime());
      this.Gzb(p.Dc);
      this.jna(p.Dc);
      if (v.Y1) {
        let a = xa.F().Td.Wf != 0,
          b = xa.F().Td.Wf != 6,
          c = ca.Ka() != null && ca.Ka().A$a();
        a && (b || c) && (this.Mma(p.Dc), this.Vyb(p.Dc));
        p.o.Bl.M_a(p.Dc);
      }
    }
    Via() {
      p.items.parse();
    }
    skb() {
      this.HB = la.load();
      let a = this.Z9a(),
        b = this.HB.A("CurrentUser");
      var c = this.HB.A("Warriors");
      p.zT = u.I(b.attributes.get("LastSaveSlot"));
      p.zT = Math.max(0, p.zT) | 0;
      let d = this.onb(b);
      var e = u,
        f = e.I;
      var g = ky(this.HB, "GameLaunchIndex");
      g.attributes.get("Value") == null && g.set("Value", "0");
      g = g.attributes.get("Value");
      this.kea = f.call(e, g);
      ++this.kea;
      this.HB.A("GameLaunchIndex").set("Value", K.T(this.kea));
      this.Ou = null;
      c = c.children;
      for (e = 0; e < c.length; )
        if (
          ((f = c[e++]),
          (g = f.attributes.get("IsFake")),
          (g != null ? g : "") != "True" &&
            p.zT == u.I(f.attributes.get("SaveSlot")) &&
            a == u.I(f.attributes.get("ID")))
        ) {
          this.Vkb(f);
          break;
        }
      if (this.Ou == null) debugger;
      p.YJ = new sc(b);
      p.o.Ca.Hm();
      d && p.o.save();
    }
    onb(a) {
      let b = !1;
      a.attributes.get("Token") != null &&
        (a.removeAttribute("Token"), (b = !0));
      a.attributes.get("UseNewHash") != null &&
        (a.removeAttribute("UseNewHash"), (b = !0));
      return b;
    }
    Vkb(a) {
      a.set("SaveSlot", K.T(p.zT));
      this.Ou = a;
      p.o = this.lkb(this.Ou);
      p.o.xa.izb(p.items.Zm);
    }
    Z9a() {
      return u.I(this.HB.A("CurrentUser").attributes.get("ID"));
    }
    Qkb() {
      this.BG == null && (this.BG = Ja.mi(275));
      this.iN = this.BG.A("Warriors").clone();
      var a = this.iN.A("Templates");
      a = a.children;
      let b = 0;
      for (; b < a.length; ) this.djb(a[b++]);
      this.Hzb();
      a = this.iN.A("WarriorGroups");
      this.Pkb(a);
    }
    Nkb(a) {
      let b = new rt();
      b.node = a;
      var c = a.attributes.get("Template");
      b.SL = c != null ? c : "";
      c = a.attributes.get("Name");
      b.name = c != null ? c : "";
      b.$e = this.zr(a, null);
      return b;
    }
    djb(a) {
      a = this.Nkb(a);
      let b = 0,
        c = this.yU;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.name == a.name) {
          J.remove(this.yU, d);
          break;
        }
      }
      this.yU.push(a);
    }
    m7a(a) {
      let b = 0,
        c = this.wDa;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.name == a) return d;
      }
      return null;
    }
    Hzb() {
      this.Izb();
    }
    Izb() {
      let a,
        b = 0,
        c = this.yU;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.SL != null && d.SL != "") {
          a = this.xfa(d.SL);
          let e = this.iN.A("Templates_tmp");
          e == null && (e = this.iN.appendChild("Templates_tmp"));
          let f = !1,
            g = null,
            h = e.children,
            k = 0;
          for (; k < h.length; ) {
            let l = h[k++],
              n = l.attributes.get("Name");
            if ((n != null ? n : "") == d.name) {
              f = !0;
              g = l;
              break;
            }
          }
          f || ((g = e.Ts(a.$e.node.clone())), (g = this.DGa(g, d.node)));
          d.$e = this.zr(g, a.$e);
          d.$e.node = g;
        }
      }
    }
    Pkb(a) {
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        let d = a[b++],
          e = new st();
        e.node = d;
        var c = d.attributes.get("Name");
        e.name = c != null ? c : "";
        c = d.attributes.get("Template");
        e.SL = c != null ? c : "";
        this.Okb(d, e.Nx);
        this.wDa.push(e);
      }
    }
    Okb(a, b) {
      let c = 0;
      a = a.children;
      let d = 0;
      for (; d < a.length; ) {
        let f = a[d++];
        var e = f.attributes.get("Template");
        e = e != null ? e : "";
        e = e == "" ? null : this.xfa(e);
        e = e != null ? this.Y0a(e.$e, f) : this.zr(f, null);
        if (e != null) {
          let g = f.attributes.get("Group");
          e.dKa = g != null ? g : "";
          e.random = u.I(f.attributes.get("Random"));
          e.vga = c;
          b.push(e);
        }
        ++c;
      }
    }
    Y0a(a, b) {
      return a != null
        ? ((a = this.zr(b, a)), (a.node = this.DGa(a.node, b)), a)
        : null;
    }
    lkb(a) {
      return new yf(a, this.zr(a, null, !1));
    }
    Zkb() {
      this.BG = Ja.mi(275);
      for (var a = this.BG.A("Zones").children, b = 0; b < a.length; )
        this.xC.push(this.Ykb(a[b++]));
      a = 0;
      for (b = this.yc; a < b.length; ) {
        let d = b[a];
        ++a;
        var c = d.og;
        d.Nb.zm(c.pl.name, c.name, d.name);
        c = p.o.Xq(d.Nb);
        c != null && (d.lx(c), d.W4());
      }
      p.rra = !0;
    }
    Ykb(a) {
      var b = a.attributes.get("Name"),
        c = a.attributes.get("FileName");
      b = new tt(
        b != null ? b : "",
        c != null ? c : "",
        0 < u.I(a.attributes.get("Start")),
        2,
        0,
        u.I(a.attributes.get("RewardDigits")),
        u.I(a.attributes.get("PrizeBaseDigits")),
      );
      a = a.children;
      for (c = 0; c < a.length; ) {
        let d = this.ljb(a[c++], b);
        this.Fsb(d);
        d.ola();
        let e = new ib();
        e.zm(b.name, d.name, "");
        d.isActive = p.o.jEa(e);
        b.Fg.push(d);
      }
      return b;
    }
    ljb(a, b) {
      var c = !1;
      c == null && (c = !1);
      var d = new H(
          u.I(a.attributes.get("X")),
          u.I(a.attributes.get("Y")),
          0,
          1,
        ),
        e = a.attributes.get("Name");
      e = e != null ? e : "";
      var f = a.attributes.get("Alias");
      f = f != null ? f : "";
      var g = a.attributes.get("Title");
      g = g != null ? g : "";
      var h = a.attributes.get("Icon");
      h == null || h == ""
        ? (h = "training")
        : ((h = a.attributes.get("Icon")), (h = h != null ? h : ""));
      var k = a.attributes.get("IconAtlas");
      k = k != null ? k : "";
      var l = a.attributes.get("Preview");
      l = l != null ? l : "";
      var n = a.attributes.get("Description");
      n = n != null ? n : "";
      var q = a.attributes.get("Location");
      q = q != null ? q : v.Xca;
      var r = a.attributes.get("Music");
      r = r != null ? r : null;
      var t = a.attributes.get("Type");
      t = t != null ? t : null;
      var x = a.attributes.get("RewardImage");
      x = x != null ? x : null;
      var z = a.attributes.get("ShowResistance");
      z = z != null ? z : null;
      let A = u.ka(a.attributes.get("Hide"));
      var C = a.attributes.get("EclipseToggleName");
      C = C != null ? C : null;
      let B = 0,
        D = 0;
      var F = a.attributes.get("RewardDigits");
      F != null && F != ""
        ? (B = u.I(a.attributes.get("RewardDigits")))
        : b != null && (B = b.gL);
      F = a.attributes.get("PrizeBaseDigits");
      F != null && F != ""
        ? (D = u.I(a.attributes.get("PrizeBaseDigits")))
        : b != null && (D = b.QK);
      F = null;
      switch (this.i0(t)) {
        case "FightPeriodic":
          F = new Gb(t, d, e, h, l, n, B, D, f, g, q, r, x, z, A);
          break;
        case "FightRaid":
          break;
        case "FightBossesReplayable":
        case "FightFinalReplayable":
        case "FightReplayable":
          d = new gl(t, d, e, h, l, n, B, D, f, g, q, r, x, z, A);
          d.parse(a);
          F = d;
          break;
        default:
          F = new Lc(t, d, e, h, l, n, B, D, f, g, q, r, x, z, A, C);
      }
      k != null && k != "" && (k = null);
      F.jR = k;
      F.pl = b;
      F.vL(a);
      this.Lm.push(F);
      c && this.Ojb(F);
      return F;
    }
    Ojb(a) {
      let b = a.location,
        c = a.Ap,
        d = 0,
        e = 0,
        f = a.eX.kp("Fight");
      for (; e < f.length; ) {
        let g = new hl();
        this.XIa(g, f[e++], a.type, b, c, a);
        a.Aq(g, d);
        ++d;
      }
    }
    Gsb(a) {
      var b = a.og;
      a.Nb.zm(b.pl.name, b.name, a.name);
      b = p.o.Xq(a.Nb);
      b != null && (a.lx(b), a.W4());
    }
    UE(a, b) {
      if (b != null) {
        let c = m.l();
        cb.UE(b, c);
        for (b = 0; b < c.length; ) {
          let d = c[b];
          ++b;
          d != null && a.TK(d);
        }
      }
    }
    rkb(a, b) {
      b = b.children;
      let c = 0;
      for (; c < b.length; ) a.Ylb(new ut(b[c++], a.gL, a.QK));
      a.fM(p.o.bb());
    }
    Fsb(a) {
      if (a != null)
        for (var b = 0, c = p.o.oF.values(); b < c.length; ) {
          let d = c[b];
          ++b;
          let e = d.Ck,
            f = new ib();
          f.zm(e.Ne, e.Se, e.Rq);
          if (f.Ne == a.pl.name && f.Se == a.name) {
            a.ob = d;
            d.Aba = a;
            break;
          }
        }
    }
    Gzb(a) {
      for (var b = 0, c = this.xC.length; b < c; ) this.xC[b++].setTime(a);
      b = 0;
      for (c = this.kO.length; b < c; ) this.kO[b++].setTime(a);
      b = 0;
      for (c = this.fN.length; b < c; ) this.fN[b++].setTime(a);
    }
    jna(a) {
      let b = p.o;
      b != null && b.jna(a);
      za.instance != null && za.instance.aPa();
    }
    Mma(a) {
      let b = !1,
        c = 0,
        d = p.o.xa.H9a();
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        if (e.Dh > 0 && e.Dh <= a) {
          let f = e.jy > 0 ? e.$Aa() : e.GAa(p.o.tC);
          f != null &&
            (f.type == I.Gu ? p.U4a(f) : (v.mZ(f, 13), p.o.xa.Yda(e)),
            (b = !0));
        }
      }
      b && ((a = Ma.get()), a != null && a.refresh());
    }
    Vyb(a) {
      let b = 0,
        c = p.o.xa.Y8a();
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        d.ZK > 0 && d.ZK <= a && (v.mZ(d, 17), p.o.xa.A4a(d));
      }
    }
    Dbb() {
      Gb.qbb(p.o.l$);
    }
    DGa(a, b) {
      let c = b.attributes.entries(),
        d = c.next();
      for (; !d.done; ) {
        var e = d.value;
        d = c.next();
        let f = e[0];
        e = e[1];
        a.attributes.get(f) == null
          ? a.set(f, e)
          : a.attributes.get(f) != e && a.set(f, e);
      }
      b.A("Items") != null &&
        (a.A("Items") != null && a.Af(a.A("Items")),
        a.Ts(b.A("Items").clone()));
      b.A("Perks") != null &&
        (a.A("Perks") != null && a.Af(a.A("Perks")),
        a.Ts(b.A("Perks").clone()));
      b.A("AttributesAlign") != null &&
        (a.attributes.get("AttributesAlign") != null &&
          a.Af(a.A("AttributesAlign")),
        a.Ts(b.A("AttributesAlign").clone()));
      b.A("BossAbility") != null && a.Ts(b.A("BossAbility").clone());
      return a;
    }
    static F() {
      let a = p.Hb;
      return a != null ? a : (p.Hb = new p());
    }
    static H7a() {
      return m.l();
    }
    static sab(a) {
      var b = p.o;
      b.Sub(b.bY + kc(a.Op));
      b = p.o;
      b.wub(b.lX + 1);
      Pa.Yua(a, null, null, !1);
      p.o.save(!0);
    }
    static tab() {
      p.o.Qua(3, 4);
      p.o.save(!0);
    }
    static PQ(a) {
      a = p.items.PQ(a);
      if (a.length > 0 && p.o != null) {
        let b = 0,
          c = a.length;
        for (; b < c; ) {
          let d = b++;
          if (p.o.MJ(a[d].lock)) return a[d];
        }
      }
      return null;
    }
    static Y$a() {
      return p.o.Ca;
    }
    static Pba(a, b) {
      var c;
      c == null && (c = 1);
      return p.lEa(a, b, c).value != -1;
    }
    static lEa(a, b, c) {
      c == null && (c = 1);
      p.F();
      let d = new il(),
        e = p.o,
        f = 0,
        g = 0,
        h = !0;
      switch (b) {
        case 1:
        case 8:
          f = e.Ob;
          g = a.np() * c;
          break;
        case 2:
        case 9:
          f = e.gd;
          g = a.pn() * c;
          break;
        case 10:
        case 11:
        case 18:
          f = e.gd;
          g = a.Od;
          break;
        case 3:
        case 14:
          g = f = 0;
          break;
        case 16:
          h = a.lT.p_a();
          break;
        case 19:
          ((f = e.gd), (g = a.pn() * c));
      }
      c = f - g;
      d.type = 0;
      d.value = c;
      if ((b != 3 && b != 14) || L.J.EEa())
        if (a.Bf > e.bb()) ((d.type = 1), (d.value = -1));
        else if (c < 0) {
          switch (b) {
            case 1:
            case 8:
              d.type = 2;
              break;
            case 20:
              d.type = 6;
              break;
            default:
              d.type = 3;
          }
          d.value = -1;
        } else
          g < 0
            ? ((d.type = 0), (d.value = -1))
            : b != 16 || h || ((d.type = 5), (d.value = -1));
      else ((d.type = 4), (d.value = -1));
      return d;
    }
    static mI(a, b, c) {
      if (a == null) return !1;
      let d = v.m0(),
        e = -1;
      switch (b) {
        case 3:
          return p.VYa(a);
        case 1:
        case 8:
          p.Cab(a);
          p.o.Kr(c);
          e = a.Ec != 0 ? d + a.Ec : -1;
          break;
        case 2:
        case 9:
          p.ega(a, !1);
          p.o.xl(c, 10);
          break;
        case 11:
        case 18:
          p.ega(a, !0);
          p.o.xl(c, 11);
          e = 0;
          break;
        case 14:
          return !0;
        case 19:
          (p.ega(a, !1), p.UYa(a, c));
      }
      b != 18 && p.Bab(a, e);
      p.llb(b);
      return !0;
    }
    static Bab(a, b) {
      var c;
      c == null && (c = 1);
      p.o.xa.Rj(a.name);
      var d = b <= 0 || a.Ec == 0;
      b = p.Py(a, c, b, d);
      d = b.Y0() || d;
      if (a.type == I.yk || a.type == I.Tx) d = !1;
      p.eo(b, d);
      Pa.Zz(a);
    }
    static eo(a, b) {
      var c;
      c == null && (c = !0);
      if (a == null) return !1;
      a.zu(p.o.bb());
      let d = a.ib.c6;
      d && p.jwb(a, a.qd());
      b = b && !d;
      a.BL(b);
      return c ? p.o.setItem(a, b) : !0;
    }
    static Szb(a) {
      if (a != null) {
        var b = a.type;
        a = a.Yb;
        b == I.xg
          ? p.eo(p.vf("Fists"), !0)
          : b == I.Ci
            ? p.eo(p.vf("Body"), !0)
            : b == I.Di
              ? p.eo(p.vf("Head"), !0)
              : b == I.Xh
                ? p.eo(p.vf("NoRanged"), !0)
                : b == I.Ff
                  ? p.eo(p.vf("NoMagic"), !0)
                  : b == I.Jm && a == I.BM && p.eo(p.vf("NoRaidCharge"), !0);
      }
    }
    static jwb(a, b) {
      b == null && (b = 1);
      b > a.qd() && (b = a.qd());
      let c = 0;
      a.ib.type == I.cUa && (c = 1);
      c == 1 && (p.o.Omb(), a.nk(a.qd() - b));
    }
    static QOa(a) {
      let b = 0,
        c = p.o.xa.mJ(a.type, "", !1);
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        d.Wu && d.ab() != a.name && p.eo(d, !1);
      }
    }
    static V2a(a) {
      var b;
      b == null && (b = 1);
      if (a == null) return !1;
      a = p.Py(a, b, 0, !1);
      return p.o.setItem(a, !1);
    }
    static U4a(a) {
      debugger;
      if (a != null) {
        var b = p.vf(a.name);
        b.FF(0);
        b.$T(-1);
        a.Nr(!0);
        b != null && p.o.setItem(b, !1);
      }
    }
    static Gqb(a) {
      var b;
      b == null && (b = 1);
      debugger;
      let c = p.vf(a.name);
      if (c == null) return !1;
      b > c.qd() && (b = c.qd());
      if (b <= 0) return !1;
      p.o.$ua(a.cab() * b);
      p.BKa(c, b);
      return !0;
    }
    static gXa(a) {
      var b = 1,
        c = 0,
        d = !1,
        e;
      e == null && (e = !0);
      d == null && (d = !0);
      c == null && (c = 0);
      b == null && (b = 1);
      a = p.items.$b(a);
      a == null || p.Py(a, b, c, d, e);
    }
    static Py(a, b, c, d, e) {
      e == null && (e = !0);
      d == null && (d = !0);
      c == null && (c = 0);
      b == null && (b = 1);
      a.Yb == I.n7 &&
        (p.o.cU(!0), v.eka(), za.instance != null && za.instance.Nma());
      var f = p.vf(a.name);
      let g = p.o.bb();
      f == null
        ? ((f = p.o.s2),
          (b = new Af().CT(f, a.name, d, c > 0 ? 0 : b, -1, c)),
          b.Or(a),
          (f = p.o.xa.Ro(b)),
          f.zu(g),
          f.HF(!1),
          e && f.aP())
        : f.qd() != 0 || c <= 0
          ? (f.qd() != 0 && f.HF(!a.bA),
            a.ol == null &&
              (v.bR && v.pxa(f.ib)
                ? f.qd() == 0 && f.nk(1)
                : (f.nk(f.qd() + b), f.qd() < 0 && f.nk(0))),
            c <= 0 && (f.Up(a.Ug), f.zu(g)),
            f.FF(c),
            f.$T(a.Ug))
          : (f.zu(g), f.FF(c), f.$T(-1), f.HF(!1));
      v.bR = !1;
      d && p.eo(f, !0);
      return f;
    }
    static BKa(a, b) {
      var c;
      c == null && (c = !1);
      b == null && (b = 1);
      if (a != null) {
        var d = a.qd();
        d <= b && (b = d);
        a.nk(a.qd() - b);
        a.qd() == 0 &&
          (p.o.Pcb(a.ib) &&
            ((b = a.ib), b != null && b.sob(), p.eo(a, !1), p.Szb(a.ib)),
          c && p.o.xa.removeItem(a));
      }
    }
    static dbb(a) {
      return p.o.ebb(a);
    }
    static Twa(a) {
      a = p.o.Ob + a;
      a < 0 || p.o.Kr(a);
    }
    static Swa(a, b) {
      var c;
      c == null && (c = !1);
      a = p.o.gd + a;
      a < 0 || p.o.xl(a, b, c);
    }
    static qab() {
      for (var a = 0, b = p.F().xC; a < b.length; ) {
        var c = b[a];
        ++a;
        if (c.DR) return c;
      }
      a = 0;
      for (b = p.F().kO; a < b.length; ) if (((c = b[a]), ++a, c.DR)) return c;
      a = 0;
      for (b = p.F().fN; a < b.length; ) if (((c = b[a]), ++a, c.DR)) return c;
      return null;
    }
    static LD(a) {
      for (var b = 0, c = p.F().xC; b < c.length; ) {
        var d = c[b];
        ++b;
        if (d.name == a) return d;
      }
      b = 0;
      for (c = p.F().kO; b < c.length; )
        if (((d = c[b]), ++b, d.name == a)) return d;
      b = 0;
      for (c = p.F().fN; b < c.length; )
        if (((d = c[b]), ++b, d.name == a)) return d;
      return null;
    }
    static mCa() {
      return p.F().xC;
    }
    static a7a(a) {
      return m.Fe(p.F().yc, function (b) {
        return b.og == a;
      })
        ? m.sD(p.F().yc, function (b) {
            return b.og == a;
          })
        : [];
    }
    static bw(a) {
      if (a == null) return null;
      var b = 0;
      let c = p.F().yc;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.Nb.vza(a)) return d;
      }
      b = p.Wk(a);
      return b != null ? b.gBa(a.Rq) : null;
    }
    static Wk(a) {
      if (a == null) return null;
      let b = p.LD(a.Ne);
      return b != null ? b.DQ(a.Se) : null;
    }
    static vf(a) {
      return p.o.xa.Rj(a);
    }
    static Rxa(a, b) {
      b = b ? p.o.U0a(a.Nb) : p.o.Aeb(a.Nb);
      b != null && (b.DL(p.o.bb()), a.lx(b));
      p.F().Lx();
      return b;
    }
    static dM(a) {
      let b = a.repeat,
        c = a.Yc,
        d = a.type;
      b > 0 && c != null && d != "FightPeriodic" && c.qo >= b
        ? d == "FightReplayable" ||
          d == "FightBossesReplayable" ||
          d == "FightFinalReplayable"
          ? a.og.azb(a)
          : (a.status = 1)
        : a.ecb()
          ? (a.status = 2)
          : (a.status = 3);
    }
    static u0a() {
      la.reset();
      L.J.reload();
    }
    static GD(a, b) {
      b == null && (b = !0);
      return a == null
        ? m.l()
        : b && ((b = p.vf(a.name)), b != null)
          ? b.be
          : a.MF;
    }
    static HXa(a) {
      m.cd(p.xV, a);
    }
    static nxa() {
      var a = p.xV;
      if (a != null && a.length != 0) {
        a = 0;
        let b = p.xV;
        for (; a < b.length; ) b[a++].vgb();
        p.xV.length = 0;
      }
    }
    static Cab(a) {
      debugger;
      let b = Math.trunc(Math.max(0, a.np() - (p.o.Ob - p.o.kC)));
      a.Zib = b;
      p.o.XMa(p.o.kC - b);
    }
    static ega(a, b) {
      a.Yib = Math.trunc(Math.max(0, (b ? a.Od : a.pn()) - p.o.g7a()));
    }
    static fkb() {
      p.Hw.initialize(p.items, p.o, Vb.F());
    }
    static UYa(a, b) {
      debugger;
      a.Yb == I.m7
        ? (p.Py(a, 1, 0, !1), p.o.fo.dka())
        : a.Yb == I.l7
          ? p.o.ZH(a.Lj, a.cn)
          : p.Py(a, 1, 0, !1);
      p.o.xl(b, 10);
    }
    static VYa(a) {
      jb.Jha(a);
      return !0;
    }
    static llb(a) {
      switch (a) {
        case 8:
        case 9:
        case 11:
          sb.WS();
          break;
        case 1:
        case 2:
        case 3:
        case 19:
          sb.d4();
      }
    }
    static Gcb(a) {
      return p.d0 == 0 ? !0 : p.d0 == a;
    }
    static xZa(a) {
      debugger;
      let b = 0,
        c = p.items.Zm;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (
          !(d.oi == 0 || d.np() > a || p.o.dha(d.lock)) &&
          p.o.xa.te(d) == null
        )
          return !0;
      }
      return !1;
    }
    static xMa(a, b) {
      if (b ? p.o.Bq(a, !0) : p.o.Pnb(a))
        b ? p.items.esb(a, p.o.bb()) : p.items.Dnb(a);
    }
  }
  p.g = "5D";
  Object.assign(p.prototype, { j: p });
