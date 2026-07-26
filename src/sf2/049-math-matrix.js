// 049-math-matrix.js
// Domain: tree-Kh  |  6 class(es)  |  tree root(s): Kh, Fc
// Edit here. Run `npm run build` to reassemble the full bundle.
  class Kh {
    constructor(a, b) {
      this.Zk = null;
      this.i1a = !0;
      this.controllers = null;
      this.PZ = this.Ow = !0;
      this.bn = 0;
      this.$e = null;
      this.aQa = this.W6 = !1;
      this.dc = new Lh();
      this.Jb = new Lh();
      this.name = this.parent = this.Ma = null;
      this.L = this;
      switch (a) {
        case Nf:
        case Td:
          (this.Jb.O5(), this.dc.O5());
      }
      this.fq = this.gya(a);
      this.oh = b;
    }
    B() {
      for (var a = this.controllers, b; a != null; )
        ((b = a.next), (a.L = null), (a.next = null), a.B(), (a = b));
      a = this.parent;
      a != null && a.removeChild(this);
      for (a = this.Zk; a != null; )
        ((b = a.next), (a.state.L = null), (a.next = null), (a = b));
      this.knb();
      this.$e = this.dc = this.Jb = null;
    }
    appendChild() {
      throw 139;
    }
    Iga(a) {
      let b = this.parent;
      for (; b != null; ) {
        if (b == a) return !0;
        b = b.parent;
      }
      return !1;
    }
    Mz() {
      let a = this;
      for (; a.parent != null; ) a = a.parent;
      return a;
    }
    vg(a, b) {
      b == null && (b = !0);
      a == null && (a = !0);
      this.mna(b);
      b && (this.XF(), a && this.xja());
    }
    yu() {
      let a = [];
      for (var b = this; b != null; ) (a.push(b), (b = b.parent));
      b = a.pop();
      var c = b.dc;
      b = b.Jb;
      if ((b.U & 256) > 0) {
        c.translate.x = b.translate.x;
        c.translate.y = b.translate.y;
        c.scale.x = b.scale.x;
        c.scale.y = b.scale.y;
        var d = c.matrix,
          e = b.matrix;
        d.m11 = e.m11;
        d.m12 = e.m12;
        d.m21 = e.m21;
        d.m22 = e.m22;
      } else
        ((d = c.translate),
          (e = b.translate),
          (d.x = e.x),
          (d.y = e.y),
          (d.z = e.z),
          (d = c.scale),
          (e = b.scale),
          (d.x = e.x),
          (d.y = e.y),
          (d.z = e.z),
          (d = c.matrix),
          (e = b.matrix),
          (d.m11 = e.m11),
          (d.m12 = e.m12),
          (d.m13 = e.m13),
          (d.m21 = e.m21),
          (d.m22 = e.m22),
          (d.m23 = e.m23),
          (d.m31 = e.m31),
          (d.m32 = e.m32),
          (d.m33 = e.m33));
      for (c.U = b.U | 240; a.length > 0; ) ((c = a.pop()), c.aQa || c.Vxa());
    }
    Hma(a) {
      var b = !1;
      b == null && (b = !0);
      a == null && (a = !0);
      if (a && this.oh) {
        let c = this.children;
        for (; c != null; ) (c.Hma(a), (c = c.Ma));
      }
      this.XF();
      b && this.xja();
    }
    Vxa() {
      if (this.parent != null) this.dc.tsb(this.parent.dc, this.Jb);
      else {
        let c = this.dc,
          d = this.Jb;
        if ((d.U & 256) > 0) {
          c.translate.x = d.translate.x;
          c.translate.y = d.translate.y;
          c.scale.x = d.scale.x;
          c.scale.y = d.scale.y;
          var a = c.matrix,
            b = d.matrix;
          a.m11 = b.m11;
          a.m12 = b.m12;
          a.m21 = b.m21;
          a.m22 = b.m22;
        } else
          ((a = c.translate),
            (b = d.translate),
            (a.x = b.x),
            (a.y = b.y),
            (a.z = b.z),
            (a = c.scale),
            (b = d.scale),
            (a.x = b.x),
            (a.y = b.y),
            (a.z = b.z),
            (a = c.matrix),
            (b = d.matrix),
            (a.m11 = b.m11),
            (a.m12 = b.m12),
            (a.m13 = b.m13),
            (a.m21 = b.m21),
            (a.m22 = b.m22),
            (a.m23 = b.m23),
            (a.m31 = b.m31),
            (a.m32 = b.m32),
            (a.m33 = b.m33));
        c.U = d.U | 240;
      }
    }
    mna() {
      this.aQa || this.Vxa();
    }
    XF() {}
    xja() {
      this.parent != null && (this.parent.XF(), this.parent.xja());
    }
    gya(a) {
      return ra.Ya(a, []);
    }
    Kx(a) {
      var b = a == null;
      if (b) a = Pf.Mlb(this);
      else {
        let c = this.Zk;
        for (; c != null; ) (a[c.state.type].push(c.state), (c = c.next));
      }
      this.UJa(a);
      if (b) Pf.w0a();
      else for (b = this.Zk; b != null; ) (a[b.state.type].pop(), (b = b.next));
    }
    vQ(a) {
      let b = this.Zk;
      for (; b != null; ) {
        if (b.state.type == a) return b.state;
        b = b.next;
      }
      return null;
    }
    $w(a) {
      if (a.L == null)
        if (((a.L = this), this.Zk == null)) this.Zk = new tq(a);
        else {
          for (var b = this.Zk; b != null; ) {
            if (b.state.type == a.type) {
              b.state = a;
              return;
            }
            b = b.next;
          }
          b = new tq(a);
          b.next = this.Zk;
          this.Zk = b;
        }
    }
    Rja(a) {
      let b = this.Zk,
        c = null;
      for (; b != null; ) {
        if (b.state.type == a) {
          c != null ? (c.next = b.next) : (this.Zk = b.next);
          b.next = null;
          b.state.L = null;
          break;
        }
        c = b;
        b = b.next;
      }
    }
    knb() {
      let a = this.Zk,
        b;
      for (; a != null; ) ((b = a.next), (a.next = null), (a = b));
      this.Zk = null;
    }
    LY(a) {
      this.controllers != null && (a.next = this.controllers);
      this.controllers = a;
      a.L = this;
    }
    f3a(a) {
      if (this.controllers == a) this.controllers = this.controllers.next;
      else {
        let b = this.controllers;
        for (; b.next != a; ) b = b.next;
        b.next = a.next;
      }
      a.next = null;
      a.L = null;
    }
    Hx(a) {
      if (this.controllers != null && this.i1a)
        for (var b = this.controllers, c; b != null; )
          ((c = b.next), b.update(a), (b = c));
    }
  }
  Kh.g = "326";
  Object.assign(Kh.prototype, { j: Kh });
  class Xb extends Kh {
    constructor(a) {
      a = a != null ? a : Xb.gD;
      super(a, !1);
      this.pm = this.gya(a);
      this.lu = Array(6);
      this.l1 = 0;
      this.effect = this.wK = null;
      this.type = ob.Vq(this);
    }
    B() {
      this.wK = null;
      this.effect != null && (this.effect.B(), (this.effect.hb = null));
      this.effect = null;
      super.B();
    }
    Zw(a) {
      this.effect != null && (this.effect = this.effect.hb = null);
      this.effect = a;
      a != null && this.effect.jx(this);
    }
    wk() {}
    Bd(a, b) {
      if (this.PZ || this.Ow == 0 || !this.fq.contains(a)) return !1;
      b != null && b.push(this);
      return !0;
    }
    EQ() {}
    XF() {
      this.W6 || this.pm.yma(this.dc, this.fq);
    }
    UJa(a) {
      let b = this.lu,
        c = 0,
        d = 0,
        e = 0;
      for (; e < a.length; ) {
        let f = a[e];
        ++e;
        let g = f.length;
        if (g == 0) b[c] = null;
        else {
          let h = f[g - 1];
          g > 1 && (h = h.mca(f));
          b[c] = h;
          d |= 1 << h.type;
        }
        ++c;
      }
      this.l1 = d;
    }
    static qAa(a, b) {
      let c = new Xb(void 0);
      c.Zw(a);
      b != null && b.appendChild(c);
      return c;
    }
  }
  Xb.g = "327";
  Xb.u = Kh;
  Object.assign(Xb.prototype, { j: Xb });
  class $e extends Xb {
    constructor(a, b) {
      super(b != null ? b : $e.gD);
      this.jp = a;
      this.wk();
      this.Uz = this.$F = null;
    }
    B() {
      this.jp = null;
      var a = this.$F;
      a != null && a.Ex();
      this.$F = null;
      a = this.Uz;
      a != null && a.Ex();
      this.Uz = null;
      super.B();
    }
    Bd() {
      return !1;
    }
    wk() {
      let a = this.jp.getData(0);
      this.pm.qca(a);
    }
  }
  $e.g = "328";
  $e.u = Xb;
  Object.assign($e.prototype, { j: $e });
  class Hd extends Kh {
    constructor(a, b) {
      a = a != null ? a : Hd.gD;
      super(a, !0);
      this.children = null;
      b != null && b.appendChild(this);
    }
    B() {
      let a = this.children;
      for (; a != null; ) {
        let b = a.Ma;
        a.$e != null ? a.$e.B() : a.B();
        a = b;
      }
      super.B();
    }
    EQ(a, b) {
      b = b != null ? b : new hb(pa.sd, pa.sd, pa.Ld, pa.Ld);
      let c = 3.4028234663852886e38,
        d = 3.4028234663852886e38,
        e = -3.4028234663852886e38,
        f = -3.4028234663852886e38,
        g = [];
      for (g.push(this); g.length > 0; ) {
        var h = g.pop();
        if (h.oh) for (h = h.children; h != null; ) (g.push(h), (h = h.Ma));
        else
          (h.EQ(a, b),
            b.K < c && (c = b.K),
            b.P < d && (d = b.P),
            b.N > e && (e = b.N),
            b.X > f && (f = b.X));
      }
      b.K = c;
      b.P = d;
      b.N = e;
      b.X = f;
    }
    Bd(a, b) {
      let c = !1;
      if (this.fq.contains(a)) {
        let d = this.children;
        for (; d != null; ) (d.Ow && d.Bd(a, b) && (c = !0), (d = d.Ma));
      }
      return c;
    }
    Hx(a) {
      super.Hx(a);
      let b = this.children,
        c;
      for (; b != null; ) ((c = b.Ma), b.Hx(a), (b = c));
    }
    $S(a) {
      this.children == null
        ? ((this.children = a), (a.Ma = null))
        : ((a.Ma = this.children), (this.children = a));
      a.parent = this;
      return this;
    }
    appendChild(a) {
      if (this.children == null) ((this.children = a), (a.Ma = null));
      else {
        let b = this.children;
        for (; b.Ma != null; ) b = b.Ma;
        b.Ma = a;
      }
      a.parent = this;
      return this;
    }
    IWa(a) {
      a.Ma = this.children;
      this.children = a;
      a.parent = this;
    }
    remove() {
      let a = this.parent;
      a != null && a.removeChild(this);
    }
    removeChild(a) {
      if (this.children == a) this.children = a.Ma;
      else {
        let b = this.children;
        for (; b.Ma != a; ) b = b.Ma;
        b.Ma = a.Ma;
      }
      a.Ma = null;
      a.parent = null;
      return this;
    }
    Fz(a) {
      let b = this.children,
        c = 0;
      for (; c <= a; ) {
        if (c == a) return b;
        b = b.Ma;
        ++c;
      }
      return null;
    }
    cJ(a) {
      let b = this.children,
        c = 0;
      for (; b != null; ) {
        if (b == a) return c;
        b = b.Ma;
        ++c;
      }
      return -1;
    }
    erb(a) {
      this.removeChild(a);
      this.IWa(a);
    }
    aw(a) {
      let b = this.children;
      for (; b != null; ) {
        if (b.name == a) return b;
        b = b.Ma;
      }
      return null;
    }
    q6(a, b) {
      let c = null,
        d = null;
      for (var e = 0, f = this.children; e < 2 && f != null; )
        (f.Ma == a ? ((c = f), ++e) : f.Ma == b && ((d = f), ++e), (f = f.Ma));
      e = a.Ma;
      f = b.Ma;
      a.Ma = null;
      b.Ma = null;
      e == b
        ? (c != null ? (c.Ma = b) : (this.children = b), (b.Ma = a), (a.Ma = f))
        : f == a
          ? (d != null ? (d.Ma = a) : (this.children = a),
            (a.Ma = b),
            (b.Ma = e))
          : (c != null ? (c.Ma = b) : (this.children = b),
            (b.Ma = e),
            d != null ? (d.Ma = a) : (this.children = a),
            (a.Ma = f));
    }
    eMa(a) {
      if (this.children != a) {
        for (var b = this.children; b.Ma != a; ) b = b.Ma;
        b.Ma = a.Ma;
        a.Ma = this.children;
        this.children = a;
      }
    }
    Qrb(a) {
      if (a.Ma != null) {
        var b = this.children;
        if (b == a) {
          for (; b.Ma != null; ) b = b.Ma;
          b.Ma = a;
          this.children = a.Ma;
        } else {
          for (; b.Ma != a; ) b = b.Ma;
          for (b = b.Ma = a.Ma; b.Ma != null; ) b = b.Ma;
          b.Ma = a;
        }
        a.Ma = null;
      }
    }
    mna(a) {
      super.mna(a);
      let b = this.children;
      for (; b != null; ) (b.vg(!1, a), (b = b.Ma));
    }
    XF() {
      if (!this.W6 && this.children != null) {
        var a = this.children;
        this.fq.from(a.fq);
        for (a = a.Ma; a != null; ) (this.fq.dga(a.fq), (a = a.Ma));
        super.XF();
      }
    }
    UJa(a) {
      let b = this.children;
      for (; b != null; ) (b.Kx(a), (b = b.Ma));
    }
  }
  Hd.g = "329";
  Hd.u = Kh;
  Object.assign(Hd.prototype, { j: Hd });
  class Zb extends Xb {
    constructor() {
      super(Zb.gD);
      this.size = new H(1, 1, 0, 1);
      this.wk();
    }
    ba(a, b) {
      let c = this.size;
      c.x = a;
      c.y = b;
      this.wk();
      return this;
    }
    Bd(a, b) {
      if (this.PZ || this.Ow == 0 || !this.fq.contains(a)) return !1;
      a = this.dc.fI(a, new H(0, 0, 0, 1));
      return a.x >= 0 && a.x <= this.size.x && a.y >= 0 && a.y <= this.size.y
        ? (b != null && b.push(this), !0)
        : !1;
    }
    EQ(a, b) {
      let c = new H(0, 0, 0, 1),
        d = 3.4028234663852886e38,
        e = 3.4028234663852886e38,
        f = -3.4028234663852886e38,
        g = -3.4028234663852886e38,
        h = this.size.x,
        k = this.size.y;
      if (a == this) ((e = d = 0), (f = h), (g = k));
      else {
        if (a == this.parent) {
          var l = this.Jb;
          c.x = 0;
          c.y = 0;
          l.$m(c, c);
          c.x < 3.4028234663852886e38 && (d = c.x);
          c.x > -3.4028234663852886e38 && (f = c.x);
          c.y < 3.4028234663852886e38 && (e = c.y);
          c.y > -3.4028234663852886e38 && (g = c.y);
          c.x = h;
          c.y = 0;
          l.$m(c, c);
          c.x < d && (d = c.x);
          c.x > f && (f = c.x);
          c.y < e && (e = c.y);
          c.y > g && (g = c.y);
          c.x = h;
          c.y = k;
          l.$m(c, c);
          c.x < d && (d = c.x);
          c.x > f && (f = c.x);
          c.y < e && (e = c.y);
          c.y > g && (g = c.y);
          c.x = 0;
          c.y = k;
          l.$m(c, c);
        } else
          a.parent == null
            ? ((l = this.dc),
              (c.x = 0),
              (c.y = 0),
              l.$m(c, c),
              c.x < 3.4028234663852886e38 && (d = c.x),
              c.x > -3.4028234663852886e38 && (f = c.x),
              c.y < 3.4028234663852886e38 && (e = c.y),
              c.y > -3.4028234663852886e38 && (g = c.y),
              (c.x = h),
              (c.y = 0),
              l.$m(c, c),
              c.x < d && (d = c.x),
              c.x > f && (f = c.x),
              c.y < e && (e = c.y),
              c.y > g && (g = c.y),
              (c.x = h),
              (c.y = k),
              l.$m(c, c),
              c.x < d && (d = c.x),
              c.x > f && (f = c.x),
              c.y < e && (e = c.y),
              c.y > g && (g = c.y),
              (c.x = 0),
              (c.y = k),
              l.$m(c, c))
            : ((l = this.dc),
              (a = a.dc),
              (c.x = 0),
              (c.y = 0),
              l.$m(c, c),
              a.fI(c, c),
              c.x < 3.4028234663852886e38 && (d = c.x),
              c.x > -3.4028234663852886e38 && (f = c.x),
              c.y < 3.4028234663852886e38 && (e = c.y),
              c.y > -3.4028234663852886e38 && (g = c.y),
              (c.x = h),
              (c.y = 0),
              l.$m(c, c),
              a.fI(c, c),
              c.x < d && (d = c.x),
              c.x > f && (f = c.x),
              c.y < e && (e = c.y),
              c.y > g && (g = c.y),
              (c.x = h),
              (c.y = k),
              l.$m(c, c),
              a.fI(c, c),
              c.x < d && (d = c.x),
              c.x > f && (f = c.x),
              c.y < e && (e = c.y),
              c.y > g && (g = c.y),
              (c.x = 0),
              (c.y = k),
              l.$m(c, c),
              a.fI(c, c));
        c.x < d && (d = c.x);
        c.x > f && (f = c.x);
        c.y < e && (e = c.y);
        c.y > g && (g = c.y);
      }
      b == null
        ? new hb(d, e, f, g)
        : ((b.K = d), (b.P = e), (b.N = f), (b.X = g));
    }
    wk() {
      var a = this.size.x / 2;
      let b = this.size.y / 2;
      this.pm.fb.x = a;
      this.pm.fb.y = b;
      this.pm.gb = Math.sqrt(a * a + b * b);
      this.pm instanceof Td &&
        ((a = this.pm.rect),
        (a.K = 0),
        (a.P = 0),
        (a.N = this.size.x),
        (a.X = this.size.y));
    }
    static qAa(a, b) {
      let c = new Zb();
      c.Zw(a);
      b != null && b.appendChild(c);
      return c;
    }
  }
  Zb.g = "32A";
  Zb.u = Xb;
  Object.assign(Zb.prototype, { j: Zb });
  class Fc {
    constructor() {
      let a = new Zb();
      a.Zw(new Mh());
      a.ba(1e6, 1e6);
      this.L = a;
      this.L.$e = this;
      this.L.W6 = !0;
    }
    B() {
      this.L != null && (this.L.B(), (this.L = this.L.$e = null));
    }
    update(a) {
      this.L.Hx(a);
      this.L.vg();
      this.L.Kx();
    }
    sg(a) {
      let b = this.L.effect;
      b.qc = a;
      a = b.color;
      a.x = 1;
      a.y = 1;
      a.z = 1;
      a.w = 1;
    }
    wf() {
      let a = this.L.effect;
      return a.qc != null ? null : a.color;
    }
    on() {
      let a = this.L.vQ(5);
      return a == null ? 1 : a.opacity;
    }
    wa(a) {
      if (a < 1) {
        let b = this.L.vQ(5);
        b == null ? (b = new wf(a)) : b.Ela(a);
        this.L.$w(b);
      } else this.L.Rja(5);
    }
    R(a) {
      this.L.bn = a ? 0 : 1;
    }
    A6(a, b, c) {
      let d = new Nh();
      this.L.LY(d);
      let e = this;
      d.FS = function (f) {
        e.wa(f);
      };
      d.Pt = b;
      d.du = 0;
      d.start(this.on(), a, 0.25, c != null ? c : dc.QFa());
    }
    static Ed(a, b) {
      let c = new Fc(),
        d = c.wf();
      a = Oa.Wv(a);
      d.x = a.x;
      d.y = a.y;
      d.z = a.z;
      d.w = a.w;
      b != null && b.appendChild(c.L);
      return c;
    }
    static aa(a, b) {
      let c = new Fc();
      c.sg(a);
      b != null && b.appendChild(c.L);
      return c;
    }
  }
  Fc.g = "32B";
  Object.assign(Fc.prototype, { j: Fc });
