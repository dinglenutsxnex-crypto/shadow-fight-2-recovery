// 052-sprite-base.js
// Domain: tree-Ke  |  25 class(es)  |  tree root(s): Ke, bx, ax, oq, Xj, Pb, dx, ex, Ev, Xw, Yw, Zw, $w, cx
// Edit here. Run `npm run build` to reassemble the full bundle.
  class Ke {
    constructor(a) {
      this.L = a;
      a.$e = this;
      this.flags = 6;
      this.Tm = this.Db = 1;
      this.PX = this.uO = this.qa = this.za = this.qO = 0;
      this.lL = this.xT = 1;
      this.Fr = 0;
      this.kL = 1;
      this.fja = this.eja = this.IS = this.HS = 0;
    }
    B() {
      this.L = null;
    }
    sJ() {
      var a = this.L.parent;
      return a != null && ((a = a.$e), a != null && a instanceof Ea) ? a : null;
    }
    Kd(a) {
      return (this.L.name = a);
    }
    on() {
      return this.kL;
    }
    wa(a) {
      a = a < 0 ? 0 : a > 1 ? 1 : a;
      if (a != this.kL)
        if (((this.kL = a), (a = this.L), this.kL < 1)) {
          let b = a.vQ(5);
          b == null ? (b = new wf(this.kL)) : b.Ela(this.kL);
          a.$w(b);
        } else a.Rja(5);
    }
    gg() {
      return this.L.bn == 0;
    }
    R(a) {
      this.L.bn = a ? 0 : 1;
    }
    Uc(a) {
      return (this.L.Ow = a);
    }
    Ola(a) {
      this.L.Jb.translate.z = a;
    }
    Th(a) {
      if (this.Db != a) {
        this.xT = this.Db = a;
        if (a > 0 ? a < 0.001 : -a < 0.001) this.xT = 0.001 * (a >= 0 ? 1 : -1);
        a == 1 && this.Tm == 1
          ? ((this.flags = (this.flags & -3) | 4),
            (a = this.L.Jb),
            (a.scale.x = 1),
            (a.scale.y = 1),
            (a.U |= 244))
          : (this.flags &= -7);
        this.Vh();
      }
    }
    oj(a) {
      if (this.Tm != a) {
        this.lL = this.Tm = a;
        if (a > 0 ? a < 0.001 : -a < 0.001) this.lL = 0.001 * (a >= 0 ? 1 : -1);
        a == 1 && this.Db == 1
          ? ((this.flags = (this.flags & -3) | 4),
            (a = this.L.Jb),
            (a.scale.x = 1),
            (a.scale.y = 1),
            (a.U |= 244))
          : (this.flags &= -7);
        this.Vh();
      }
    }
    la(a) {
      if (this.Db != a || this.Tm != a)
        ((this.Db = this.Tm = a),
          (this.xT = (a > 0 ? a < 0.001 : -a < 0.001)
            ? (this.lL = 0.001 * (a >= 0 ? 1 : -1))
            : (this.lL = a)),
          (this.flags |= 2),
          a == 1
            ? ((a = this.L.Jb),
              (a.scale.x = 1),
              (a.scale.y = 1),
              (a.U |= 244),
              (this.flags |= 4))
            : (this.flags &= -5),
          this.Vh());
    }
    Xg(a) {
      if (this.qO != a) {
        this.qO = a;
        var b = a % 360;
        b < 0 && (b += 360);
        this.Fr = b * 0.0174532925199432;
        a == 0 ? ((this.flags &= -2), this.L.Jb.Jrb()) : (this.flags |= 1);
        this.Vh();
      }
    }
    fab() {
      return Math.atan(this.uO) * 57.29577951308232;
    }
    HL(a) {
      a == 0
        ? ((this.uO = 0), this.PX == 0 && (this.flags &= -9))
        : ((this.flags |= 8),
          (this.uO = Math.tan(Math.min(a, 60) * 0.0174532925199432)));
      this.Vh();
    }
    gab() {
      return Math.atan(this.PX) * 57.29577951308232;
    }
    C(a) {
      if (this.za == a) return a;
      this.za = a;
      this.Vh();
      return a;
    }
    D(a) {
      if (this.qa == a) return a;
      this.qa = a;
      this.Vh();
      return a;
    }
    setPosition(a) {
      if (this.za != a.x || this.qa != a.y)
        ((this.za = a.x), (this.qa = a.y), this.Vh());
    }
    jk(a, b, c) {
      c == null && (c = !1);
      c || ((c = this.getBounds(this)), (a *= c.N - c.K), (b *= c.X - c.P));
      this.HS = a;
      this.IS = b;
      this.Vh();
    }
    Un(a, b) {
      var c;
      c == null && (c = !1);
      c || ((c = this.getBounds(this)), (a *= c.N - c.K), (b *= c.X - c.P));
      this.eja = a;
      this.fja = b;
      this.Vh();
    }
    Ga() {
      this.jk(0.5, 0.5);
      this.Un(0.5, 0.5);
    }
    update(a) {
      a != null && this.L.Hx(a);
      this.L.vg();
      this.L.Kx();
    }
    Dm(a) {
      this.L.yu();
      return this.L.dc.$m(a != null ? a : new H(0, 0, 0, 1), new H(0, 0, 0, 1));
    }
    $n(a) {
      this.L.yu();
      return this.L.dc.fI(a, new H(0, 0, 0, 1));
    }
    yF() {
      let a = this.L.parent;
      a != null && a.Qrb(this.L);
    }
    j5() {
      let a = this.L.parent;
      a != null && a.eMa(this.L);
    }
    xh(a, b, c, d, e, f) {
      new ax(this).xh(a, b, c, d, e, f);
      return this;
    }
    qL(a) {
      let b = this.L.vQ(4);
      a != null
        ? (b == null && ((b = new xg()), this.L.$w(b)), b.qL(a))
        : b != null && this.L.Rja(4);
    }
    Vh() {
      let a = this.L.Jb,
        b = this.za,
        c = this.qa,
        d = this.HS,
        e = this.IS,
        f = this.eja,
        g = this.fja,
        h = this.xT;
      var k = this.lL,
        l = this.flags;
      if ((l & 9) > 0) {
        let q = Math.sin(this.Fr),
          r = Math.cos(this.Fr);
        let t;
        var n = -q + this.uO;
        t = q + this.PX;
        let x = a.matrix;
        x.m11 = r;
        x.m12 = n;
        x.m21 = t;
        x.m22 = r;
        a.U = (a.U & -4) | 248;
        (l & 4) > 0
          ? ((a.translate.x = -(f * r) + g * q + f + b - d),
            (a.translate.y = -(f * q) - g * r + g + c - e))
          : (l & 2) > 0
            ? ((k = h * f),
              (l = h * g),
              (a.scale.x = a.scale.y = h),
              (a.U = (a.U & -2) | 244),
              (a.translate.x = -(k * r) + l * q + f + b - d),
              (a.translate.y = -(k * q) - l * r + g + c - e))
            : ((l = h * f),
              (n = k * g),
              (a.scale.x = h),
              (a.scale.y = k),
              (a.U = (a.U & -6) | 240),
              (a.translate.x = -(l * r) + n * q + f + b - d),
              (a.translate.y = -(l * q) - n * r + g + c - e));
      } else
        (l & 4) > 0
          ? ((a.translate.x = b - d), (a.translate.y = c - e))
          : (l & 2) > 0
            ? ((a.scale.x = a.scale.y = h),
              (a.U = (a.U & -2) | 244),
              (a.translate.x = -(h * f) + f + b - d),
              (a.translate.y = -(h * g) + g + c - e))
            : ((a.scale.x = h),
              (a.scale.y = k),
              (a.U = (a.U & -6) | 240),
              (a.translate.x = -(h * f) + f + b - d),
              (a.translate.y = -(k * g) + g + c - e));
      a.U = (a.U & -2) | 240;
    }
  }
  Ke.g = "346";
  Object.assign(Ke.prototype, { j: Ke });
  class Ea extends Ke {
    constructor(a, b) {
      super(new Hd(Td));
      this.L.Jb.O5();
      this.L.dc.O5();
      a != null && a.appendChild(this);
      this.L.name = b;
    }
    B() {
      this.L != null && (this.L.B(), super.B());
    }
    $S(a) {
      this.L.$S(a.L);
    }
    appendChild(a) {
      this.L.appendChild(a.L);
    }
    Fz(a) {
      return this.L.Fz(a).$e;
    }
    cJ(a) {
      return this.L.cJ(a.L);
    }
    aw(a) {
      a = this.L.aw(a);
      return a != null ? a.$e : null;
    }
    q6(a, b) {
      this.L.q6(a.L, b.L);
    }
    iterator() {
      return new bx(this);
    }
    Bd(a, b) {
      this.L.yu();
      this.L.vg(!1, !0);
      return this.L.Bd(a, b);
    }
    getBounds(a, b) {
      b == null && (b = !0);
      b &&
        (this.L.yu(),
        this.L.vg(!1, !1),
        a != null && (this.L.Iga(a.L) || a.L.yu()),
        (b = !1));
      let c = new hb(pa.sd, pa.sd, pa.Ld, pa.Ld),
        d = this.L.children;
      for (; d != null; )
        (d.$e != null &&
          d.bn != 1 &&
          d.$e instanceof Ke &&
          c.add(d.$e.getBounds(a, b)),
          (d = d.Ma));
      return c;
    }
    Df(a) {
      let b = this.getBounds(this);
      this.la(a / (b.X - b.P));
    }
    ya() {
      let a = this.getBounds(this.sJ());
      return a.Wj() ? 0 : a.N - a.K;
    }
    ra() {
      let a = this.getBounds(this.sJ());
      return a.Wj() ? 0 : a.X - a.P;
    }
  }
  Ea.g = "347";
  Ea.u = Ke;
  Object.assign(Ea.prototype, { j: Ea });
  class bx {
    constructor(a) {
      this.top = 0;
      this.stack = [];
      this.YJa(a);
    }
    yd() {
      return this.top > 0;
    }
    next() {
      let a = this.stack[--this.top];
      a.oh && a.$e != null && a.$e instanceof Ea && this.YJa(a.$e);
      return a.$e;
    }
    YJa(a) {
      for (a = a.L.children; a != null; )
        (a.$e != null && a.$e instanceof Ke && (this.stack[this.top++] = a),
          (a = a.Ma));
    }
  }
  bx.g = "348";
  Object.assign(bx.prototype, { j: bx });
  class ax {
    constructor(a) {
      this.object = a;
      this.Q2a = 0;
      this.P2a = dc.QFa();
      this.O2a = 1;
    }
    S_(a) {
      let b = this.object.L.controllers;
      for (; b != null; ) {
        let c = b;
        b = b.next;
        if (c instanceof Nh && c.id == a) return c;
      }
      return null;
    }
    xh(a, b, c, d, e, f) {
      let g;
      switch (a) {
        case 0:
          g = this.object.Db;
          break;
        case 1:
          g = this.object.Tm;
          break;
        case 2:
          g = this.object.qO;
          break;
        case 3:
          g = this.object.za;
          break;
        case 4:
          g = this.object.qa;
          break;
        case 5:
          g = this.object.Db;
          break;
        case 6:
          g = this.object.on();
      }
      let h = this.S_(a);
      h == null && ((h = new Nh()), (h.id = a), this.object.L.LY(h));
      h.du = e != null ? e : this.Q2a;
      let k;
      switch (a) {
        case 0:
          k = w(this, this.Nsb);
          break;
        case 1:
          k = w(this, this.Osb);
          break;
        case 2:
          k = w(this, this.Hsb);
          break;
        case 3:
          k = w(this, this.psb);
          break;
        case 4:
          k = w(this, this.qsb);
          break;
        case 5:
          k = w(this, this.setScale);
          break;
        case 6:
          k = w(this, this.Pqb);
      }
      h.FS = k;
      h.Pt = f;
      h.start(g, b, c != null ? c : this.O2a, d != null ? d : this.P2a);
      return h;
    }
    setScale(a) {
      this.object.la(a);
    }
    Nsb(a) {
      this.object.Th(a);
    }
    Osb(a) {
      this.object.oj(a);
    }
    Hsb(a) {
      this.object.Xg(a);
    }
    psb(a) {
      this.object.C(a);
    }
    qsb(a) {
      this.object.D(a);
    }
    Pqb(a) {
      this.object.wa(a);
    }
  }
  ax.g = "349";
  Object.assign(ax.prototype, { j: ax });
  class R extends Ke {
    constructor() {
      super(new Zb());
      this.Gm = new hb(0, 0, 0, 0);
      this.currentFrame = this.Oca = null;
      this.ea = new H(100, 100, 0, 1);
      this.mYa = -1;
    }
    zl(a) {
      this.L.effect.mode = a;
    }
    e$a() {
      let a = this.L.effect;
      if (a instanceof le) return a.flipX;
      throw 39;
    }
    Mr(a) {
      let b = this.L.effect;
      if (b instanceof le) b.flipX = a;
      else throw 40;
    }
    K5() {
      let a = this.L.effect;
      if (a instanceof le) a.flipY = !0;
      else throw 41;
    }
    B() {
      this.L != null && (this.L.B(), super.B());
    }
    lk(a, b) {
      let c = this.ea;
      c.x = a;
      c.y = b;
      this.L.ba(a, b);
    }
    vJa(a, b) {
      return new Xj(this).play(a, b, void 0);
    }
    axb() {
      new Xj(this).stop();
    }
    xeb(a) {
      var b;
      b == null && (b = !1);
      new Xj(this).loop(a, b);
    }
    Bd(a, b) {
      if (!this.gg()) return !1;
      this.L.yu();
      this.L.XF();
      return this.L.Bd(a, b);
    }
    getBounds(a, b) {
      b == null && (b = !0);
      let c = new hb(pa.sd, pa.sd, pa.Ld, pa.Ld);
      if (a == this)
        return (
          (c.K = -this.HS),
          (c.P = -this.IS),
          (c.N = this.ea.x - this.HS),
          (c.X = this.ea.y - this.IS),
          c
        );
      var d = this.Gm.K,
        e = this.Gm.P;
      let f = this.L;
      var g = f.size;
      let h = g.x;
      g = g.y;
      var k = this.Gm;
      if ((k = k.N - k.K > 0)) {
        var l = this.Gm,
          n = l.N - l.K;
        l.K = 0;
        l.N = n;
        l = this.Gm;
        n = l.X - l.P;
        l.P = 0;
        l.X = n;
        f.ba(this.ea.x, this.ea.y);
        this.Vh();
        this.L.vg(!1, !1);
      }
      b && (this.L.yu(), a == null || this.L.Iga(a.L) || a.L.yu());
      this.L.EQ(a == null ? this.L.Mz() : a.L, c);
      k &&
        ((a = this.Gm),
        (b = a.N - a.K),
        (a.K = d),
        (a.N = d + b),
        (d = this.Gm),
        (a = d.X - d.P),
        (d.P = e),
        (d.X = e + a),
        (e = f.size),
        (e.x = h),
        (e.y = g),
        f.wk(),
        this.Vh(),
        this.L.vg(!1, !1));
      return c;
    }
    Dm(a) {
      let b = this.Gm;
      var c = b.K;
      let d = b.P;
      var e = b.N - b.K > 0;
      if (e) {
        var f = b.N - b.K;
        b.K = 0;
        b.N = f;
        f = b.X - b.P;
        b.P = 0;
        b.X = f;
        this.Vh();
        this.L.vg(!1, !1);
      }
      a = super.Dm(a);
      e &&
        ((e = b.N - b.K),
        (b.K = c),
        (b.N = c + e),
        (c = b.X - b.P),
        (b.P = d),
        (b.X = d + c),
        this.Vh(),
        this.L.vg(!1, !1));
      return a;
    }
    $n(a) {
      let b = this.Gm;
      var c = b.K;
      let d = b.P;
      var e = b.N - b.K > 0;
      if (e) {
        var f = b.N - b.K;
        b.K = 0;
        b.N = f;
        f = b.X - b.P;
        b.P = 0;
        b.X = f;
        this.Vh();
        this.L.vg(!1, !1);
      }
      a = super.$n(a);
      e &&
        ((e = b.N - b.K),
        (b.K = c),
        (b.N = c + e),
        (c = b.X - b.P),
        (b.P = d),
        (b.X = d + c),
        this.Vh(),
        this.L.vg(!1, !1));
      return a;
    }
    Vh() {
      let a = this.L.Jb,
        b = this.za,
        c = this.qa,
        d = this.Gm.K,
        e = this.Gm.P,
        f = this.HS,
        g = this.IS,
        h = this.eja - d,
        k = this.fja - e,
        l = this.xT;
      var n = this.lL,
        q = this.flags;
      if ((q & 9) > 0) {
        let t = Math.sin(this.Fr),
          x = Math.cos(this.Fr);
        var r = a.matrix;
        let z, A;
        z = -t + this.uO;
        A = t + this.PX;
        let C = a.matrix;
        C.m11 = x;
        C.m12 = z;
        C.m13 = r.m13;
        C.m21 = A;
        C.m22 = x;
        C.m23 = r.m23;
        C.m31 = r.m31;
        C.m32 = r.m32;
        C.m33 = r.m33;
        a.U = (a.U & -4) | 248;
        (q & 4) > 0
          ? ((a.scale.x = 1),
            (a.scale.y = 1),
            (a.U |= 244),
            (a.translate.x = -(h * x) + k * t + h + b - f + d),
            (a.translate.y = -(h * t) - k * x + k + c - g + e))
          : (q & 2) > 0
            ? ((n = l * h),
              (q = l * k),
              (a.scale.x = a.scale.y = l),
              (a.U = (a.U & -2) | 244),
              (a.translate.x = -(n * x) + q * t + h + b - f + d),
              (a.translate.y = -(n * t) - q * x + k + c - g + e))
            : ((q = l * h),
              (r = n * k),
              (a.scale.x = l),
              (a.scale.y = n),
              (a.U = (a.U & -6) | 240),
              (a.translate.x = -(q * x) + r * t + h + b - f + d),
              (a.translate.y = -(q * t) - r * x + k + c - g + e));
      } else
        (q & 4) > 0
          ? ((a.scale.x = 1),
            (a.scale.y = 1),
            (a.U |= 244),
            (a.translate.x = b - f + d),
            (a.translate.y = c - g + e))
          : (q & 2) > 0
            ? ((a.scale.x = a.scale.y = l),
              (a.U = (a.U & -2) | 244),
              (a.translate.x = -(l * h) + h + b - f + d),
              (a.translate.y = -(l * k) + k + c - g + e))
            : ((a.scale.x = l),
              (a.scale.y = n),
              (a.U = (a.U & -6) | 240),
              (a.translate.x = -(l * h) + h + b - f + d),
              (a.translate.y = -(n * k) + k + c - g + e));
      a.U = (a.U & -2) | 240;
    }
    wIa() {
      var a = this.Oca;
      let b = this.ea;
      b.x = a.width * a.kj;
      b.y = a.height * a.kj;
      this.L.ba(this.ea.x, this.ea.y);
      a = this.currentFrame;
      a != null && ((this.currentFrame = null), this.yb(a));
    }
    sg(a) {
      if (this.Oca != a) {
        this.Oca = a;
        this.currentFrame = null;
        var b = this.L,
          c = !1,
          d = !1;
        b.effect != null &&
          b.effect.type == le &&
          ((c = b.effect.flipX), (d = b.effect.flipY));
        b.wK = w(this, this.wIa);
        a = new le(a);
        b.Zw(a);
        a.flipX = c;
        a.flipY = d;
        this.wIa();
        this.Gm = new hb(0, 0, 0, 0);
        this.Vh();
      }
    }
    yb(a) {
      if (this.currentFrame != a) {
        this.currentFrame = a;
        var b = this.L,
          c = b.effect;
        a = c.hMa(a);
        c = c.qc.kj;
        var d = this.ea;
        d.x = a.ea.x * c;
        d.y = a.ea.y * c;
        if (a.Dx) {
          var e = a.sj;
          d = a.Pc;
          let f = this.Gm,
            g = e.x * c;
          e = e.y * c;
          f.K = g;
          f.P = e;
          f.N = g + d.w;
          f.X = e + d.v;
          b.ba(d.w * c, d.v * c);
        } else
          (b.ba(this.ea.x, this.ea.y),
            (b = this.Gm),
            (b.K = 0),
            (b.P = 0),
            (b.N = 0),
            (b.X = 0));
        a.Yd != null && (this.Un(a.Yd.x, a.Yd.y), this.jk(a.Yd.x, a.Yd.y));
        this.Vh();
      }
    }
    wf() {
      let a = this.L.effect;
      a == null && ((a = new yg(new H(1, 1, 1, 1))), this.L.Zw(a));
      return a.color;
    }
    mf(a) {
      this.la(a / this.ea.x);
    }
    Df(a) {
      this.la(a / this.ea.y);
    }
    zLa(a, b) {
      this.la(Math.min(a / this.ea.x, b / this.ea.y));
    }
    ya() {
      if ((this.flags & 9) == 0) return this.ea.x * Math.abs(this.Db);
      if ((this.flags & 8) > 0) {
        var a = new Lh();
        a.scale.x = this.Db;
        a.scale.y = this.Tm;
        a.U = (a.U & -6) | 240;
        (a.U & 64) > 0 && a.Ix();
        var b = a.hm;
        a = b.m11;
        var c = b.m12,
          d = b.m14,
          e = b.m21,
          f = b.m22;
        b = b.m24;
        let g = new H(a * 1 + c * 0 + d, e * 1 + f * 0 + b, 0, 1),
          h = new H(a * 0 + c * 1 + d, e * 0 + f * 1 + b, 0, 1),
          k = new H(a * 1 + c * 1 + d, e * 1 + f * 1 + b, 0, 1),
          l = new hb(pa.sd, pa.sd, pa.Ld, pa.Ld);
        l.So(new H(a * 0 + c * 0 + d, e * 0 + f * 0 + b, 0, 1));
        l.So(g);
        l.So(h);
        l.So(k);
        a = Math.cos(this.Fr);
        c = Math.sin(this.Fr);
        d = Math.tan(this.fab());
        e = Math.tan(this.gab());
        b = this.Db;
        f = this.Tm;
        b = b * a - e * b * c;
        a = d * f * a - f * (1 + e * d) * c;
        return (
          ((b >= 0 ? b : b * 0) +
            (a >= 0 ? a : a * 0) -
            ((b >= 0 ? b * 0 : b) + (a >= 0 ? a * 0 : a))) *
          this.Db
        );
      }
      e = (this.ea.x * Math.abs(this.Db)) / 2;
      a = (this.ea.y * Math.abs(this.Tm)) / 2;
      c = -Math.sin(this.Fr);
      f = Math.cos(this.Fr);
      f > 0 ? ((d = -(f * e)), (e *= f)) : ((d = f * e), (e = -(f * e)));
      c > 0 ? ((d -= c * a), (e += c * a)) : ((d += c * a), (e -= c * a));
      return e - d;
    }
    xc(a) {
      this.Th(a / this.ea.x);
    }
    ra() {
      if ((this.flags & 9) == 0) return this.ea.y * Math.abs(this.Tm);
      var a = (this.ea.x * Math.abs(this.Db)) / 2;
      let b = (this.ea.y * Math.abs(this.Tm)) / 2,
        c = Math.sin(this.Fr),
        d = Math.cos(this.Fr),
        e;
      c > 0 ? ((e = -(c * a)), (a *= c)) : ((e = c * a), (a = -(c * a)));
      d > 0 ? ((e -= d * b), (a += d * b)) : ((e += d * b), (a -= d * b));
      return a - e;
    }
    Qb(a) {
      this.oj(a / this.ea.y);
    }
    OMa(a) {
      let b = this.L.effect;
      b.Esb(a, b.Sw);
    }
    static Ed(a, b, c, d) {
      let e = new R();
      e.lk(b, c);
      b = e.wf();
      a = Oa.Wv(a);
      b.x = a.x;
      b.y = a.y;
      b.z = a.z;
      b.w = a.w;
      d != null && d.appendChild(e);
      return e;
    }
    static aa(a, b, c) {
      let d = new R();
      d.sg(a);
      b != null && d.yb(b);
      c != null && c.appendChild(d);
      return d;
    }
  }
  R.g = "34A";
  R.u = Ke;
  Object.assign(R.prototype, { j: R });
  class lg extends oq {
    constructor(a) {
      super(a, 0);
    }
    static hea(a, b) {
      b = 1 / b;
      let c = [],
        d = 0;
      for (; d < a.length; ) c.push(new Rw(a[d++], b));
      return new lg(c);
    }
  }
  lg.g = "34B";
  lg.u = oq;
  Object.assign(lg.prototype, { j: lg });
  class Xj {
    constructor(a) {
      this.W = a;
    }
    play(a, b, c) {
      c == null && (c = 1);
      let d = this.zea();
      d.du = 0;
      d.R4 = c > 1 ? c - 1 : 0;
      d.start(a);
      d.Pt = b;
      return this;
    }
    loop(a, b) {
      b == null && (b = !1);
      let c = this.zea();
      c.du = b ? 2 : 1;
      c.start(a);
      return this;
    }
    stop() {
      this.zea().stop();
      return this;
    }
    S_() {
      let a = this.W.L.controllers;
      for (; a != null; ) {
        let b = a;
        a = a.next;
        if (b instanceof Wj) return b;
      }
      return null;
    }
    zea() {
      let a = this.S_();
      a == null && ((a = new Wj()), (a.NE = w(this, this.NE)), this.W.L.LY(a));
      return a;
    }
    NE(a, b, c) {
      this.W.mYa = c;
      this.W.yb(b);
    }
    Rub(a) {
      this.S_().TL = a;
    }
  }
  Xj.g = "34C";
  Object.assign(Xj.prototype, { j: Xj });
  class Cg extends Pb {
    constructor() {
      super();
      this.Ia(1);
      this.F5(0);
      this.oP = null;
      this.clip = !1;
      this.OPa = this.Rab = !0;
      this.ua(72);
      this.qub();
      this.GL(1024);
      this.CL(2);
      this.We = !0;
      this.xn = !1;
      this.kub();
      this.Lc(1);
      this.rd(!1);
      this.Ep = 0;
      this.tub();
      this.xub();
      this.V(null);
      this.tg = new hb(pa.sd, pa.sd, pa.Ld, pa.Ld);
      this.qu = null;
      this.nub();
      this.xc(100);
      this.Qb(100);
      this.IF(!1);
      this.cap = null;
    }
    Ia(a) {
      this.align = a;
      this.We = !0;
    }
    F5(a) {
      this.Ry = a;
      this.We = !0;
      return a;
    }
    ua(a) {
      this.fontSize = a;
      this.We = !0;
    }
    qub() {
      this.FGa = 6;
    }
    GL(a) {
      let b = this.FGa;
      this.vGa = a < b ? b : a;
    }
    CL(a) {
      this.kd = a;
      this.We = !0;
    }
    kub() {
      this.We = this.xp = !0;
    }
    IF(a) {
      this.Rzb = a;
      this.We = !0;
    }
    Lc(a) {
      this.yha = a;
      this.We = !0;
    }
    rd(a) {
      (this.multiline = a) ? this.lwa() : (this.qu = this.oP = null);
      this.We = !0;
    }
    tub() {
      this.LGa = " ";
      this.We = !0;
    }
    xub() {
      this.tJa = null;
      this.We = !0;
    }
    V(a) {
      this.text != a && ((this.text = a), this.lwa(), (this.We = !0));
    }
    nub() {
      this.letterSpacing = 0;
      this.We = !0;
    }
    xc(a) {
      this.width = a;
      this.We = !0;
      a = this.hb;
      a != null && a.wk();
    }
    Qb(a) {
      this.height = a;
      this.We = !0;
      a = this.hb;
      a != null && a.wk();
    }
    Pj() {
      return this.tg.clone();
    }
    B() {
      super.B();
      this.qu = this.tg = this.oP = null;
    }
    update(a) {
      super.update(a);
      this.We && this.apply();
    }
    jx(a) {
      super.jx(a);
      this.wk();
    }
    wk() {
      this.hb.ba(this.width, this.height);
      this.We = !0;
    }
    lwa() {
      this.oP == null && (this.oP = new cx());
      this.qu = this.text != null ? this.oP.Ysb(this.text) : [];
    }
    NYa(a, b) {
      let c = a,
        d = b,
        e = -1;
      for (a += (b - a) >> 1; ; ) {
        this.ua(a);
        this.apply(!0);
        if (this.xn) {
          if (a - e == 1) {
            this.ua(e);
            break;
          }
          d = a;
        } else c = e = a;
        a = c + ((d - c) >> 1);
        if (a == c) break;
      }
    }
  }
  Cg.g = "34D";
  Cg.u = Pb;
  Object.assign(Cg.prototype, { j: Cg });
  class Qh extends Cg {
    constructor(a) {
      super();
      this.qc = a;
      this.color = new H(1, 1, 1, 1);
      this.charset = a.re.rc;
      this.Xwa = 0;
      this.pma = a.kj;
      this.hj = 0;
      this.Zq = [];
      this.Iv = [];
      this.Ep = 1;
      this.ua(this.charset.kF);
      this.br = [];
      this.h3 = -1;
      this.Yza();
    }
    B() {
      super.B();
      this.Iv = this.Zq = this.charset = this.br = this.qc = null;
    }
    B5(a) {
      this.qc = a;
      this.pma = a.kj;
      this.charset = a.re.rc;
      this.Yza();
      this.We = !0;
    }
    V(a) {
      super.V(a);
      if (this.We && a != null && a.indexOf("<image") != -1) {
        this.We = !0;
        this.br.length = 0;
        var b = this.qu;
        a = [];
        for (var c = 0; c < b.length; ) {
          var d = b[c];
          ++c;
          d.image != null && a.push(d);
        }
        for (b = 0; b < a.length; ) {
          c = a[b];
          ++b;
          d = !1;
          let e = Qf.current.kB,
            f = 0;
          for (; f < e.length; ) {
            let g = e[f++];
            for (; g != null; ) {
              if (g.re != null) {
                let h = g.re.mt.v[c.value];
                if (h != null) {
                  this.br.push(
                    new dx(
                      g,
                      h,
                      h.ea.x,
                      h.ea.y,
                      c.image.x,
                      c.image.y,
                      c.image.scale,
                    ),
                  );
                  d = !0;
                  break;
                }
              }
              g = g.nextPage;
            }
            if (d) break;
          }
          d || this.br.push(null);
        }
      }
    }
    S4() {
      this.ua(this.charset.kF);
      this.We = !0;
    }
    pk() {
      let a = this.fontSize;
      this.Uk();
      this.fontSize > a && this.ua(a);
      this.apply();
    }
    Uk() {
      if (this.text != null)
        if (this.multiline)
          (this.apply(!0),
            this.NYa(this.FGa, this.vGa),
            (this.We = !0),
            this.apply());
        else {
          var a = this.width - 2 * this.kd,
            b = this.height - 2 * this.kd;
          this.S4();
          var c = b / this.charset.Bc;
          this.apply(!0);
          var d = this.tg,
            e = this.tg;
          a = Math.min(a / (d.N - d.K), b / (e.X - e.P));
          switch (this.align) {
            case 1:
            case 2:
            case 4:
              a = Math.min(c, a);
          }
          c = this.fontSize * a;
          a = this.vGa;
          this.ua(c < 6 ? 6 : c > a ? a : c);
          this.apply();
          this.xn = !1;
        }
    }
    apply(a) {
      a == null && (a = !1);
      if (
        this.We &&
        ((this.xn = !1),
        (this.Ep = 0),
        this.tg.Tn(),
        this.text != null && this.text.length != 0)
      ) {
        this.Ep = 1;
        for (var b = this.Zq; b.length > 0; ) b.pop();
        var c = this.charset,
          d = (this.fontSize / c.kF) * this.qc.kj * c.lineHeight * this.yha;
        c = this.kd;
        var e = this.kd + this.WQ();
        this.h3 = 0;
        var f = new hb(pa.sd, pa.sd, pa.Ld, pa.Ld);
        if (this.multiline) {
          var g = this.width - this.kd,
            h = 0,
            k = new hb(pa.sd, pa.sd, pa.Ld, pa.Ld);
          let l = 0,
            n = this.qu.length;
          for (; l < n; ) {
            if (!this.OPa && e > this.height - this.kd) {
              this.xn = !0;
              break;
            }
            let q = this.qu[l++],
              r = q.image != null ? this.UDa() : this.sU(q.value),
              t = b.length;
            f.Tn();
            c = this.print(r, c, e, q.color, b, f, a, !0);
            if (f.N > g) {
              if (f.N - f.K < this.width - 2 * this.kd) {
                for (; b.length > t; ) b.pop();
                f.Tn();
                this.Cv(k, h, b.length);
                h = b.length;
                this.tg.add(k);
                k.Tn();
                c = this.kd;
                e += d;
                this.Ep++;
                c = this.print(r, c, e, q.color, b, f, a, !0);
              } else this.xn = !0;
              k.add(f);
              l < n &&
                (this.xn || q.nP) &&
                !this.qu[l].nP &&
                (this.Cv(k, h, b.length),
                (h = b.length),
                this.tg.add(k),
                k.Tn(),
                (c = this.kd),
                (e += d),
                this.Ep++);
            } else
              (k.add(f),
                q.nP &&
                  (this.Cv(k, h, b.length),
                  (h = b.length),
                  this.tg.add(k),
                  k.Tn(),
                  (c = this.kd),
                  (e += d),
                  this.Ep++));
          }
          this.Cv(k, h, b.length);
          this.tg.add(k);
        } else {
          d = 0;
          for (g = this.qu; d < g.length; )
            ((h = g[d]),
              ++d,
              (k = h.image != null ? this.UDa() : this.sU(h.value)),
              f.Tn(),
              (c = this.print(k, c, e, h.color, b, f, a, this.Rab)),
              this.tg.add(f));
          this.Cv(this.tg, 0, b.length);
          this.xn = this.tg.N > this.width;
        }
        a = this.tg;
        a.X - a.P > this.height - 2 * this.kd && (this.xn = !0);
        this.BY(this.tg, 0, b.length);
        this.We = !1;
      }
    }
    update(a) {
      var b = this.qc.hj > this.hj;
      this.hj = this.qc.hj;
      b &&
        ((this.charset = this.qc.re.rc),
        (b = this.qc.kj),
        this.ua((this.pma / b) * this.fontSize),
        (this.pma = b),
        this.hb.wK != null && this.hb.wK(),
        (this.We = !0));
      super.update(a);
    }
    Cv(a, b, c) {
      if (this.align != 1 && !a.Wj()) {
        var d = this.width - 2 * this.kd,
          e = this.align;
        if ((e & 584) > 0) d = -a.K + this.kd;
        else if ((e & 1170) > 0) d = d / 2 - (a.K + a.N) * 0.5 + this.kd;
        else if ((e & 2340) > 0) d = d - a.N + this.kd;
        else return;
        this.Ry > 0 && ((e = this.Ry), (d = Math.round(d / e) * e));
        for (; b < c; ) ((this.Zq[b + 1] += d), (b += 6));
        c = a.K + d;
        b = a.N - a.K;
        a.K = c;
        a.N = c + b;
      }
    }
    BY(a, b, c) {
      if (!a.Wj()) {
        var d = this.height - 2 * this.kd,
          e = this.align;
        if ((e & 56) > 0) d = -a.P + this.kd;
        else if ((e & 448) > 0) d = d / 2 - (a.P + a.X) * 0.5 + this.kd;
        else if ((e & 3584) > 0) d = d - a.X + this.kd;
        else return;
        this.Ry > 0 && ((e = this.Ry), (d = Math.round(d / e) * e));
        for (; b < c; ) ((this.Zq[b + 2] += d), (b += 6));
        c = a.P + d;
        b = a.X - a.P;
        a.P = c;
        a.X = c + b;
      }
    }
    print(a, b, c, d, e, f, g, h) {
      let k = (this.fontSize / this.charset.kF) * this.qc.kj,
        l = a.length;
      let n,
        q = 0;
      for (; q < l; ) {
        var r = q++;
        let C = a[r];
        var t = b + C.XU * k;
        var x = c + C.sM * k - this.WQ();
        var z = C.width * k;
        n = C.height * k;
        if (!h && t > this.width + this.kd) break;
        !g &&
          C.id > 32 &&
          (e.push(C.id), e.push(t), e.push(x), e.push(z), e.push(n), e.push(d));
        if (C.id > 32) {
          var A = x + n;
          z = t + z;
          this.Rzb &&
            this.cap != null &&
            C.id != 65533 &&
            ((A = c + this.cap.sM * k - this.WQ()),
            (x = Math.max(x, A)),
            (A = Math.min(x + n, A + this.cap.height * k)));
          t < f.K && (f.K = t);
          t > f.N && (f.N = t);
          x < f.P && (f.P = x);
          x > f.X && (f.X = x);
          x = z;
          x < f.K && (f.K = x);
          x > f.N && (f.N = x);
          A < f.P && (f.P = A);
          A > f.X && (f.X = A);
        }
        A = C.Lna;
        this.Xwa > 0 && (A = this.Xwa);
        b += A * k + this.letterSpacing * k;
        this.xp &&
          r < l - 1 &&
          (String.fromCodePoint(C.id),
          String.fromCodePoint(a[r + 1].id),
          (r = this.charset.xp.v[(C.id << 16) | a[r + 1].id]),
          r != null && (b += r * k));
      }
      return b;
    }
    UDa() {
      let a = this.br[this.h3++],
        b = this.Iv;
      b.length = 0;
      b.push(this.ifa(a));
      return b;
    }
    sU(a) {
      let b = a.length,
        c = this.Iv;
      c.length = 0;
      let d = this.charset.Zy,
        e = this.charset.Rdb,
        f,
        g = d.length - 1;
      f = 1;
      var h = a.charCodeAt(0);
      h >= 32 &&
        ((h > g || d[h] == null) && h != 65533 && (h = J.Jh(this.LGa, 0)),
        h == 65533 ? c.push(this.ifa(this.br[this.h3++])) : c.push(d[h]));
      for (; f < b; ) {
        let k = a.charCodeAt(f++);
        k < 32 ||
          ((k > g || d[k] == null) && k != 65533 && (k = J.Jh(this.LGa, 0)),
          e != null &&
            h != 65533 &&
            k != 65533 &&
            ((h = e.v[(h << 16) | k]), h != null && (c.pop(), (k = h))),
          k == 65533 ? c.push(this.ifa(this.br[this.h3++])) : c.push(d[k]));
        h = k;
      }
      return c;
    }
    ifa(a) {
      if (this.tJa != null)
        return (
          (a = this.charset.Zy[J.Jh(this.tJa, 0)]),
          new Yj(65533, a.x, a.y, a.width, a.height, a.XU, a.sM, a.Lna)
        );
      let b = 0,
        c = 0,
        d = this.charset.kF,
        e = this.charset.lineHeight;
      a != null &&
        ((d = ((e / a.height) * a.width * a.scale) | 0),
        (e = (e * a.scale) | 0),
        (b = a.offsetX),
        (c = a.offsetY));
      return new Yj(
        65533,
        0,
        0,
        d,
        e,
        (b * d) | 0,
        ((c * e) | 0) + (((this.charset.lineHeight - e) / 2) | 0),
        d,
      );
    }
    WQ() {
      return (this.fontSize / this.charset.kF) * this.charset.Bc;
    }
    jw() {
      return this.tg.Wj() || this.Ep == 0
        ? 0
        : (this.fontSize / this.charset.kF) *
            this.qc.kj *
            this.charset.lineHeight *
            this.yha *
            this.Ep;
    }
    Yza() {
      for (var a = 0; a < 4; )
        if (((this.cap = this.charset.Zy[J.Jh("HEIM", a++)]), this.cap != null))
          return;
      for (a = 65; a < 91; )
        if (((this.cap = this.charset.Zy[a++]), this.cap != null)) return;
      for (
        a = 0;
        a < 4 &&
        ((this.cap = this.charset.Zy[J.Jh("\u041d\u041f\u0422\u0428", a++)]),
        this.cap == null);

      );
    }
  }
  Qh.g = "34E";
  Qh.u = Cg;
  Object.assign(Qh.prototype, { j: Qh });
  class dx {
    constructor(a, b, c, d, e, f, g) {
      this.qc = a;
      this.frame = b;
      this.width = c;
      this.height = d;
      this.offsetX = e;
      this.offsetY = f;
      this.scale = g;
    }
  }
  dx.g = "34F";
  Object.assign(dx.prototype, { j: dx });
  class Yi extends Pb {
    constructor() {
      super();
      this.precision = 0.1;
      this.color = new H(1, 0, 1, 1);
      this.Sp = [];
      this.Yg = [];
      this.Rd = 0;
      this.indices = [];
      this.we = 0;
    }
    update(a) {
      super.update(a);
      this.Rd = this.Yg.length = 0;
      a = this.we = this.indices.length = 0;
      let b = this.Sp.length;
      for (; a < b; )
        this.MXa(
          this.Sp[a++],
          this.Sp[a++],
          this.Sp[a++],
          this.Sp[a++],
          this.Sp[a++],
        );
    }
    clear() {
      this.Sp.length = 0;
    }
    add(a, b, c, d, e) {
      this.Sp.push(a);
      this.Sp.push(b);
      this.Sp.push(c);
      this.Sp.push(d);
      this.Sp.push(e);
    }
    MXa(a, b, c, d, e) {
      var f = c - a,
        g = d - b,
        h = Math.sqrt(f * f + g * g);
      if (h > 0) {
        var k = f / h;
        var l = g / h;
      } else l = k = 0;
      var n = -l,
        q = k;
      f = this.Yg;
      g = this.indices;
      h = f.length >> 1;
      f.push(a - n * e);
      f.push(b - q * e);
      this.Rd++;
      f.push(c - n * e);
      f.push(d - q * e);
      this.Rd++;
      f.push(c + n * e);
      f.push(d + q * e);
      this.Rd++;
      f.push(a + n * e);
      f.push(b + q * e);
      this.Rd++;
      g.push(h);
      g.push(h + 1);
      g.push(h + 2);
      this.we += 3;
      g.push(h);
      g.push(h + 2);
      g.push(h + 3);
      this.we += 3;
      n = (3.141592653589793 / (2 * Math.acos(1 - this.precision / e)) - 1) | 0;
      k = Math.atan2(l, k);
      l = k + 1.5707963267948966;
      q = this.Rd;
      let r = 0;
      for (; r <= n; ) {
        let t = l + (3.141592653589793 / n) * r,
          x = b + e * Math.sin(t);
        f.push(a + e * Math.cos(t));
        f.push(x);
        this.Rd++;
        ++r;
      }
      a = q;
      for (b = 0; b < n; )
        (++b, g.push(h + 3), g.push(a), g.push(a + 1), (this.we += 3), ++a);
      a = k - 1.5707963267948966;
      b = this.Rd;
      for (k = 0; k <= n; )
        ((l = a + (3.141592653589793 / n) * k),
          (q = d + e * Math.sin(l)),
          f.push(c + e * Math.cos(l)),
          f.push(q),
          this.Rd++,
          ++k);
      c = b;
      for (d = 0; d < n; )
        (++d, g.push(h + 2), g.push(c), g.push(c + 1), (this.we += 3), ++c);
    }
  }
  Yi.g = "350";
  Yi.u = Pb;
  Object.assign(Yi.prototype, { j: Yi });
  class Rj extends Pb {
    constructor(a, b, c) {
      super();
      this.qc = a;
      this.rows = this.cols = 0;
      this.grid = Array(1);
      this.charset = a.re.rc;
      a = [9633, 65533, 63];
      let d = 0;
      for (; d < 3; ) {
        let e = d++;
        if (this.charset.Zy[a[e]] != null) {
          this.pob = a[e];
          break;
        }
      }
      this.Nxa = this.IPa = !0;
      this.fillColor = null;
      this.lka = this.kca = 0;
      this.ba(b, c);
    }
    ba(a, b) {
      this.kca > 0 && a > this.kca && (a = this.kca);
      this.lka > 0 && b > this.lka && (b = this.lka);
      let c = a * b;
      if (this.cols * this.rows != c) {
        this.cols = a;
        this.rows = b;
        this.grid = Array(c);
        for (b = 0; b < c; ) {
          let d = b++;
          this.grid[d] = new ex(d % a, (d / a) | 0);
        }
        this.hb != null && this.wk();
      }
    }
    jx(a) {
      super.jx(a);
      this.wk();
    }
    wk() {
      this.hb.ba(
        this.charset.bea * this.cols,
        this.charset.lineHeight * this.rows,
      );
      this.hb.wk();
    }
  }
  Rj.g = "351";
  Rj.u = Pb;
  Object.assign(Rj.prototype, { j: Rj });
  class ex {
    constructor(a, b) {
      this.x = a;
      this.y = b;
      this.code = 0;
      this.UY = this.nma = -1;
    }
  }
  ex.g = "352";
  Object.assign(ex.prototype, { j: ex });
  class yg extends Pb {
    constructor(a) {
      super();
      this.color = a;
    }
  }
  yg.g = "353";
  yg.u = Pb;
  Object.assign(yg.prototype, { j: yg });
  class Zi extends Pb {
    constructor() {
      super();
      this.Yg = [];
      this.indices = [];
      this.we = this.Rd = 0;
      this.color = new H(0, 0, 0, 1);
      this.wu = [];
    }
  }
  Zi.g = "354";
  Zi.u = Pb;
  Object.assign(Zi.prototype, { j: Zi });
  class Sj extends Cg {
    constructor(a) {
      super();
      this.data = a;
      this.Ar = new ke();
      this.JPa = new H(1, 1, 0, 1);
      this.Zq = [];
      this.wU = this.Bx = 1;
      this.offset = new H(0, 0, 0, 1);
      this.Tdb = 0;
      this.Sdb = 1;
      this.lineWidth = 0;
    }
    apply(a) {
      a == null && (a = !1);
      this.xn = !1;
      this.Ep = 0;
      if (this.We || a) {
        this.We = !1;
        var b = this.Ar;
        a || this.MAb || (b.clear(), b.dla(this.Tdb, this.Sdb, this.lineWidth));
        if (this.text != null && this.text.length != null) {
          this.Ep = 1;
          this.Bx = (1 / this.data.Cma) * this.fontSize * this.JPa.x;
          this.wU = this.Bx * this.JPa.y;
          this.tg.Tn();
          var c = this.offset.x + this.kd,
            d = this.offset.y + this.kd + this.WQ();
          if (this.multiline) {
            var e = b.Sc,
              f = b.$c,
              g =
                ((this.data.Sva - this.data.a3a) / this.data.Cma) *
                this.fontSize *
                this.yha *
                this.wU;
            let k = new hb(pa.sd, pa.sd, pa.Ld, pa.Ld),
              l = 0,
              n = this.qu.length,
              q = 0;
            for (; l < n && !(q++ > 1e3); ) {
              let r = this.qu[l++];
              var h = this.sU(r.value);
              let t = this.measureText(h, c, d),
                x = t.N > this.width - this.kd,
                z = t.N - t.K < this.width - 2 * this.kd;
              x && !z && (this.xn = !0);
              if (x && z)
                ((h = this.Cv(k)),
                  h != 0 &&
                    (this.translate(h, 0, e, f), (e = b.Sc), (f = b.$c)),
                  this.tg.add(k),
                  k.Tn(),
                  --l);
              else if (
                (k.add(t),
                a
                  ? (c = this.fea(h, c, d, w(this, this.v3a)))
                  : ((c = this.fea(h, c, d, w(this, this.eza))), b.apply()),
                r.nP || l == n)
              )
                ((h = this.Cv(k)),
                  h != 0 &&
                    (this.translate(h, 0, e, f), (e = b.Sc), (f = b.$c)),
                  this.tg.add(k),
                  k.Tn());
              if (x || r.nP) {
                c = this.kd;
                d += g;
                if (
                  d > this.height - 2 * this.kd &&
                  ((this.xn = !0), !this.OPa)
                )
                  return;
                this.Ep++;
              }
            }
            a = this.BY(this.tg);
            a != 0 && this.translate(0, a, 0, 0);
          } else
            ((g = this.sU(this.text)),
              g.length != 0 &&
                ((e = this.tg),
                (f = this.measureText(g, c, d)),
                (e.K = f.K),
                (e.P = f.P),
                (e.N = f.N),
                (e.X = f.X),
                (c += this.Cv(this.tg)),
                (d += this.BY(this.tg)),
                a ||
                  (this.fea(g, c, d, w(this, this.eza)),
                  (this.xn = c > this.width),
                  b.apply())));
        }
      }
    }
    sU(a) {
      let b = [],
        c = 0,
        d = a.length;
      for (; c < d; ) {
        var e = c++;
        if (J.Jh(a, e) < 32) continue;
        e = this.data.Kxa.v[J.Jh(a, e)];
        e = e != null ? e : this.data.Kxa.v[63];
        e != null && b.push(this.data.Zq[e]);
      }
      return b;
    }
    measureText(a, b, c) {
      let d = new hb(pa.sd, pa.sd, pa.Ld, pa.Ld),
        e = (this.letterSpacing / 1e3) * this.fontSize,
        f = a.length,
        g = 0;
      for (; g < f; ) {
        var h = g++;
        let k = a[h],
          l = b + k.K * this.Bx,
          n = c - k.X * this.wU,
          q = c - k.P * this.wU;
        if (k.code > 32) {
          let r = b + k.N * this.Bx;
          l < d.K && (d.K = l);
          r > d.N && (d.N = r);
          n < d.P && (d.P = n);
          q > d.X && (d.X = q);
        }
        b += k.fba * this.Bx;
        this.xp &&
          this.data.xp != null &&
          h < f - 1 &&
          ((h = k.name + a[h + 1].name),
          Object.prototype.hasOwnProperty.call(this.data.xp.v, h) &&
            (b += this.data.xp.v[h] * this.Bx));
        b += e;
      }
      return d;
    }
    fea(a, b, c, d) {
      let e = (this.letterSpacing / 1e3) * this.fontSize,
        f = a.length,
        g = 0;
      for (; g < f; ) {
        var h = g++;
        let k = a[h];
        d(k, b, c, this.Bx, this.wU);
        k.fba != 0 && (b += k.fba * this.Bx);
        this.xp &&
          this.data.xp != null &&
          h < f - 1 &&
          ((h = k.name + "-" + a[h + 1].name),
          Object.prototype.hasOwnProperty.call(this.data.xp.v, h) &&
            (b += this.data.xp.v[h] * this.Bx));
        b += e;
      }
      return b;
    }
    eza(a, b, c, d, e) {
      a = a.eg(b, c, d, e);
      b = 0;
      for (c = a.wd.length; b < c; )
        switch (((d = a.wd[b++]), d.type)) {
          case 0:
            this.Ar.bS(d.x, d.y);
            break;
          case 1:
            this.Ar.tE(d.x, d.y);
            break;
          case 2:
            e = this.Ar;
            e.dea(e.current.x, e.current.y, d.x1, d.y1, d.x2, d.y2, d.x, d.y);
            break;
          case 3:
            e = this.Ar;
            e.cea(e.current.x, e.current.y, d.x1, d.y1, d.x, d.y);
            break;
          case 4:
            ((d = this.Ar), d.D0a(d.start.x, d.start.y));
        }
    }
    v3a() {}
    Cv(a) {
      if (a.Wj()) return 0;
      var b = this.width - 2 * this.kd,
        c = this.align;
      let d = 0;
      (c & 584) > 0
        ? (d = -a.K + this.kd)
        : (c & 1170) > 0
          ? (d = b / 2 - (a.K + a.N) * 0.5 + this.kd)
          : (c & 2340) > 0 && (d = b - a.N + this.kd);
      this.Ry > 0 && ((b = this.Ry), (d = Math.round(d / b) * b));
      b = a.K + d;
      c = a.N - a.K;
      a.K = b;
      a.N = b + c;
      return d;
    }
    BY(a) {
      if (a.Wj()) return 0;
      var b = this.height - 2 * this.kd,
        c = this.align;
      let d = 0;
      (c & 56) > 0
        ? (d = -a.P + this.kd)
        : (c & 448) > 0
          ? (d = b / 2 - (a.P + a.X) * 0.5 + this.kd)
          : (c & 3584) > 0 && (d = b - a.X + this.kd);
      this.Ry > 0 && ((b = this.Ry), (d = Math.round(d / b) * b));
      b = a.P + d;
      c = a.X - a.P;
      a.P = b;
      a.X = b + c;
      return d;
    }
    translate(a, b, c, d) {
      let e = this.Ar.Sc,
        f = this.Ar.wd,
        g = this.Ar.values;
      for (; c < e; )
        switch (f[c++]) {
          case 1:
          case 2:
          case 3:
            g[d] += a;
            g[d + 1] += b;
            d += 2;
            break;
          case 4:
            d += 3;
            break;
          case 5:
            d += 2;
        }
    }
    WQ() {
      return (this.data.Sva / this.data.Cma) * this.fontSize;
    }
  }
  Sj.g = "355";
  Sj.u = Cg;
  Object.assign(Sj.prototype, { j: Sj });
  class Mh extends Pb {
    constructor() {
      super();
      this.qc = null;
      this.color = new H(1, 1, 1, 1);
      this.ELa = null;
    }
    update(a) {
      super.update(a);
      a = a.j9a();
      this.hb.ba(a.w, a.v);
      this.hb.fq.from(this.hb.pm);
    }
  }
  Mh.g = "356";
  Mh.u = Pb;
  Object.assign(Mh.prototype, { j: Mh });
  class Ah extends Pb {
    constructor(a, b) {
      super();
      this.qc = a;
      this.rl = [];
      this.$kb = b;
      this.yP = [];
    }
    submit() {}
  }
  Ah.g = "357";
  Ah.u = Pb;
  Object.assign(Ah.prototype, { j: Ah });
  class Ev {
    constructor() {
      this.alpha = 1;
      this.frame = -1;
      this.rotation = this.x = this.y = this.gb = 0;
      this.uka = this.vka = 1;
      this.cYa = 0;
    }
  }
  Ev.g = "358";
  Object.assign(Ev.prototype, { j: Ev });
  class Xw {
    constructor(a, b, c) {
      this.color = a;
      this.alpha = b;
      this.width = c;
    }
  }
  Xw.g = "359";
  Object.assign(Xw.prototype, { j: Xw });
  class Yw {
    constructor(a, b) {
      this.color = a;
      this.alpha = b;
    }
  }
  Yw.g = "35A";
  Object.assign(Yw.prototype, { j: Yw });
  class Zw {
    constructor() {
      this.nR = 1;
      this.nc = this.qw = 0;
      this.zc = Array(2048);
    }
    flatten(a, b, c, d, e, f) {
      this.bm = 0.5 / this.nR;
      this.bm *= this.bm;
      this.nc = 0;
      this.RF(a, b, c, d, e, f, 0);
      this.zc[this.nc++] = e;
      this.zc[this.nc++] = f;
    }
    RF(a, b, c, d, e, f, g) {
      if (!(g > 10)) {
        var h = (a + c) * 0.5,
          k = (b + d) * 0.5,
          l = (c + e) * 0.5,
          n = (d + f) * 0.5,
          q = (h + l) * 0.5,
          r = (k + n) * 0.5,
          t = e - a,
          x = f - b,
          z = Math.abs((c - e) * x - (d - f) * t);
        if (z > 1e-30) {
          if (z * z <= this.bm * (t * t + x * x)) {
            if (this.qw < 0.01) {
              this.zc[this.nc++] = q;
              this.zc[this.nc++] = r;
              return;
            }
            z = Math.abs(Math.atan2(f - d, e - c) - Math.atan2(d - b, c - a));
            z >= 3.141592653589793 && (z = 6.283185307179586 - z);
            if (z < this.qw) {
              this.zc[this.nc++] = q;
              this.zc[this.nc++] = r;
              return;
            }
          }
        } else {
          z = t * t + x * x;
          if (z == 0) ((x = c - a), (t = d - b), (z = x * x + t * t));
          else {
            z = ((c - a) * t + (d - b) * x) / z;
            if (z > 0 && z < 1) return;
            z <= 0
              ? ((x = a - c), (t = b - d), (z = x * x + t * t))
              : z >= 1
                ? ((x = e - c), (t = f - d), (z = x * x + t * t))
                : ((t = a + z * t - c),
                  (x = b + z * x - d),
                  (z = t * t + x * x));
          }
          if (z < this.bm) {
            this.zc[this.nc++] = c;
            this.zc[this.nc++] = d;
            return;
          }
        }
        this.RF(a, b, h, k, q, r, g + 1);
        this.RF(q, r, l, n, e, f, g + 1);
      }
    }
  }
  Zw.g = "35B";
  Object.assign(Zw.prototype, { j: Zw });
  class $w {
    constructor() {
      this.nR = 1;
      this.nc = this.TD = this.qw = 0;
      this.zc = Array(2048);
    }
    flatten(a, b, c, d, e, f, g, h) {
      this.bm = 0.5 / this.nR;
      this.bm *= this.bm;
      this.nc = 0;
      this.RF(a, b, c, d, e, f, g, h, 0);
      this.zc[this.nc++] = g;
      this.zc[this.nc++] = h;
    }
    RF(a, b, c, d, e, f, g, h, k) {
      if (!(k > 10)) {
        var l = (a + c) * 0.5,
          n = (b + d) * 0.5,
          q = (c + e) * 0.5,
          r = (d + f) * 0.5,
          t = (e + g) * 0.5,
          x = (f + h) * 0.5,
          z = (l + q) * 0.5,
          A = (n + r) * 0.5,
          C = (q + t) * 0.5,
          B = (r + x) * 0.5,
          D = (z + C) * 0.5,
          F = (A + B) * 0.5,
          M = g - a,
          Q = h - b,
          U = Math.abs((c - g) * Q - (d - h) * M),
          W = Math.abs((e - g) * Q - (f - h) * M);
        switch (((U > 1e-30 ? 1 : 0) << 1) + (W > 1e-30 ? 1 : 0)) {
          case 0:
            W = M * M + Q * Q;
            if (W == 0)
              ((U = c - a),
                (Q = d - b),
                (U = U * U + Q * Q),
                (Q = e - g),
                (M = f - h),
                (W = Q * Q + M * M));
            else {
              W = 1 / W;
              U = W * ((c - a) * M + (d - b) * Q);
              W *= (e - a) * M + (f - b) * Q;
              if (U > 0 && U < 1 && W > 0 && W < 1) return;
              U <= 0
                ? ((U = a - c), (q = b - d), (U = U * U + q * q))
                : U >= 1
                  ? ((U = g - c), (q = h - d), (U = U * U + q * q))
                  : ((q = a + U * M - c),
                    (U = b + U * Q - d),
                    (U = q * q + U * U));
              W <= 0
                ? ((Q = a - e), (M = b - f), (W = Q * Q + M * M))
                : W >= 1
                  ? ((Q = g - e), (M = h - f), (W = Q * Q + M * M))
                  : ((M = a + W * M - e),
                    (Q = b + W * Q - f),
                    (W = M * M + Q * Q));
            }
            if (U > W) {
              if (U < this.bm) {
                this.zc[this.nc++] = c;
                this.zc[this.nc++] = d;
                return;
              }
            } else if (W < this.bm) {
              this.zc[this.nc++] = e;
              this.zc[this.nc++] = f;
              return;
            }
            break;
          case 1:
            if (W * W <= this.bm * (M * M + Q * Q)) {
              if (this.qw < 0.01) {
                this.zc[this.nc++] = q;
                this.zc[this.nc++] = r;
                return;
              }
              U = Math.abs(Math.atan2(h - f, g - e) - Math.atan2(f - d, e - c));
              U >= 3.141592653589793 && (U = 6.283185307179586 - U);
              if (U < this.qw) {
                this.zc[this.nc++] = c;
                this.zc[this.nc++] = d;
                this.zc[this.nc++] = e;
                this.zc[this.nc++] = f;
                return;
              }
              if (this.TD != 0 && U > this.TD) {
                this.zc[this.nc++] = e;
                this.zc[this.nc++] = f;
                return;
              }
            }
            break;
          case 2:
            if (U * U <= this.bm * (M * M + Q * Q)) {
              if (this.qw < 0.01) {
                this.zc[this.nc++] = q;
                this.zc[this.nc++] = r;
                return;
              }
              U = Math.abs(Math.atan2(f - d, e - c) - Math.atan2(d - b, c - a));
              U >= 3.141592653589793 && (U = 6.283185307179586 - U);
              if (U < this.qw) {
                this.zc[this.nc++] = c;
                this.zc[this.nc++] = d;
                this.zc[this.nc++] = e;
                this.zc[this.nc++] = f;
                return;
              }
              if (this.TD != 0 && U > this.TD) {
                this.zc[this.nc++] = c;
                this.zc[this.nc++] = d;
                return;
              }
            }
            break;
          case 3:
            if ((U + W) * (U + W) <= this.bm * (M * M + Q * Q)) {
              if (this.qw < 0.01) {
                this.zc[this.nc++] = q;
                this.zc[this.nc++] = r;
                return;
              }
              W = Math.atan2(f - d, e - c);
              U = Math.abs(W - Math.atan2(d - b, c - a));
              Q = Math.abs(Math.atan2(h - f, g - e) - W);
              U >= 3.141592653589793 && (U = 6.283185307179586 - U);
              Q >= 3.141592653589793 && (Q = 6.283185307179586 - Q);
              if (U + Q < this.qw) {
                this.zc[this.nc++] = q;
                this.zc[this.nc++] = r;
                return;
              }
              if (this.TD != 0) {
                if (U > this.TD) {
                  this.zc[this.nc++] = c;
                  this.zc[this.nc++] = d;
                  return;
                }
                if (Q > this.TD) {
                  this.zc[this.nc++] = e;
                  this.zc[this.nc++] = f;
                  return;
                }
              }
            }
        }
        this.RF(a, b, l, n, z, A, D, F, k + 1);
        this.RF(D, F, C, B, t, x, g, h, k + 1);
      }
    }
  }
  $w.g = "35C";
  Object.assign($w.prototype, { j: $w });
  class Zj extends Pb {
    constructor() {
      super();
      this.Yg = [];
      this.Rd = 0;
      this.indices = [];
      this.we = 0;
      this.precision = 0.1;
      this.Vda = 0;
      this.DA = 200;
      this.pR = 100;
      this.qc = null;
    }
    update(a) {
      super.update(a);
      this.Rd = this.Yg.length = 0;
      this.we = this.indices.length = 0;
      if (this.Vda != 0) {
        a = this.Yg;
        var b = this.indices,
          c = this.Vda,
          d = (c < 0 ? 0 : c > 1 ? 1 : c) * 3.141592653589793 * 2;
        c = (d / (2 * Math.acos(1 - this.precision / this.DA)) - 1) | 0;
        d /= c;
        for (var e = 0, f = 0; f < c; ) {
          var g = f++,
            h = -1.5707963267948966 + g * d,
            k = -1.5707963267948966 + g * d + d;
          g = Math.cos(h);
          var l = Math.sin(h),
            n = Math.cos(k),
            q = Math.sin(k);
          k = l * this.DA;
          h = n * this.DA;
          let r = q * this.DA,
            t = g * this.pR;
          l *= this.pR;
          n *= this.pR;
          q *= this.pR;
          a.push(g * this.DA);
          a.push(k);
          this.Rd++;
          a.push(h);
          a.push(r);
          this.Rd++;
          a.push(t);
          a.push(l);
          this.Rd++;
          a.push(n);
          a.push(q);
          this.Rd++;
          b.push(e);
          b.push(e + 1);
          b.push(e + 2);
          this.we += 3;
          b.push(e + 1);
          b.push(e + 3);
          b.push(e + 2);
          this.we += 3;
          e += 4;
        }
      }
    }
  }
  Zj.g = "35D";
  Zj.u = Pb;
  Object.assign(Zj.prototype, { j: Zj });
  class cx {
    constructor() {}
    Ysb(a) {
      function b(x) {
        x == null && (x = !1);
        if (k != "") {
          var z = k;
          if ((z = !new Ua("\\S", "").match(z)) && !x) throw 42;
          l.push(new fx(k, k == "\n", z ? null : f, e));
          k = "";
        }
      }
      function c(x) {
        var z = new Ua("<(/)?(style|image) ?(.*?)>", "g");
        if (z.match(x)) {
          x = z.mg(1) != "/";
          var A = z.mg(2),
            C = z.mg(3);
          if (x) {
            x = [];
            let B = [];
            for (z = new Ua("(\\w+)=([\\w\\.-]+)", ""); z.match(C); )
              (x.push(z.mg(1)), B.push(z.mg(2)), (C = z.tGa()));
            switch (A) {
              case "image":
                f = new gx(0, 0, 1);
                z = 0;
                for (A = x.length; z < A; ) {
                  C = z++;
                  let D = parseFloat(B[C]);
                  switch (x[C]) {
                    case "s":
                      f.scale = D;
                      break;
                    case "x":
                      f.x = D;
                      break;
                    case "y":
                      f.y = D;
                  }
                }
                break;
              case "style":
                for (z = 0, A = x.length; z < A; )
                  ((C = z++), x[C] == "color" && (e = K.parseInt("0x" + B[C])));
            }
          } else
            switch (A) {
              case "image":
                f = null;
                break;
              case "style":
                e = 16777215;
            }
        }
      }
      function d(x, z) {
        let A = x.length,
          C = null;
        if (x.charAt(z) == "<") {
          C = "<";
          for (++z; z < A && x.charAt(z) != ">"; ) C += x.charAt(z++);
          C += x.charAt(z);
        }
        return C;
      }
      let e = 16777215,
        f = null,
        g = 0,
        h = a.length,
        k = "",
        l = [],
        n = a.charAt(0) == "\n",
        q = J.Jh(a, 0) <= 32,
        r = a.charAt(0) == "-";
      var t = d(a, 0);
      t != null && (c(t), (g = t.length));
      k = a.charAt(g);
      for (++g; g < h; ) {
        t = d(a, g);
        if (t != null) {
          b(q);
          c(t);
          g += t.length;
          n = a.charAt(g) == "\n";
          q = J.Jh(a, g) <= 32;
          r = a.charAt(g) == "-";
          if (d(a, g) != null) continue;
          k = a.charAt(g++);
          continue;
        }
        t = a.charAt(g) == "\n";
        let x = J.Jh(a, g) <= 32,
          z = a.charAt(g) == "-";
        r && !q && b();
        t || n ? b(!0) : x ? q || b() : q && b(!0);
        n = t;
        q = x;
        r = z;
        k += a.charAt(g++);
      }
      k != "" && b(q);
      return l;
    }
  }
  cx.g = "35E";
  Object.assign(cx.prototype, { j: cx });
