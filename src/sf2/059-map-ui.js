// 059-map-ui.js
// Domain: combat  |  34 class(es)  |  tree root(s): Mx, Db, Nx, Ox, Px, ae, Qx
// Edit here. Run `npm run build` to reassemble the full bundle.
  class Mx {
    constructor() {
      this.mM = this.ZR = 0;
    }
  }
  Mx.g = "41C";
  Object.assign(Mx.prototype, { j: Mx });
  class pc extends O {
    constructor() {
      super();
      this.UI = new V();
      this.ld = -1;
      this.skipped = !1;
    }
    addListener(a) {
      this.UI.addListener(a);
    }
    removeListener(a) {
      this.UI.removeListener(a);
    }
    Xda() {
      this.skipped = !0;
    }
  }
  pc.g = "41D";
  pc.u = O;
  Object.assign(pc.prototype, { j: pc });
  class Tr extends pc {
    constructor(a, b, c) {
      super();
      this.V3a = a;
      this.D_ = b;
      this.lZ = c;
      this.exp = new Ig(60, !0);
      this.exp.sL(y.koa);
      this.exp.nj(c(0));
      this.node.appendChild(this.exp.node);
      this.ZGa = !0;
      this.gl = new Ig(60);
      this.gl.sL(p.o.pf);
      this.gl.node.C(pc.wB);
      this.node.appendChild(this.gl.node);
      this.RPa(!1);
      this.node.C((750 - (pc.wB + pc.uM)) / 2);
    }
    ux() {
      this.ZGa ? (this.RPa(!0), (this.ZGa = !1), this.UI.$()) : this.Jwb();
      this.time = 0;
    }
    Z() {
      if (this.ld == 0) {
        let b = this.fd(1);
        this.skipped && (b = 1);
        var a = dc.Nn()(b);
        a = Math.round(this.D_ * a);
        this.gl.nj(this.lZ(a));
        a = Math.round(this.V3a * b);
        this.exp.nj(a == null ? "null" : "" + a);
        b == 1 && ((this.ld = -1), this.UI.$());
      }
    }
    RPa(a) {
      this.exp.nj("0");
      this.exp.node.R(a);
      this.gl.nj(this.lZ(0));
      this.gl.node.R(a);
    }
    Jwb() {
      this.time = this.ld = 0;
    }
  }
  Tr.g = "41E";
  Tr.u = pc;
  Object.assign(Tr.prototype, { j: Tr });
  class Ig extends O {
    constructor(a, b) {
      b == null && (b = !1);
      super();
      this.fontSize = a;
      this.ip = b;
      this.icon = R.aa(E.get(262), null, this.node);
      this.icon.R(!1);
      this.label = new ea(E.Na(), this.node);
      this.label.Fa(100, 50);
      this.label.ua(a);
      this.label.La(Oa.dd(8908538));
      this.label.Ia(64);
    }
    ya() {
      let a = this.icon.ya() * 1.25,
        b = this.label.Pj();
      return a + (b.N - b.K);
    }
    sL(a) {
      this.icon.yb(a);
      this.icon.Ga();
      this.icon.la(this.fontSize / this.icon.ea.y);
      this.icon.R(!0);
      this.icon.D(25);
    }
    nj(a) {
      this.label.V(a);
      this.label.Pj();
      this.label.C(this.icon.ya() * 0.6);
    }
  }
  Ig.g = "41F";
  Ig.u = O;
  Object.assign(Ig.prototype, { j: Ig });
  class Rr extends O {
    constructor() {
      super();
    }
    setScale(a) {
      this.icon.la(a);
    }
    sL(a) {
      this.icon = new Sf(Ye.vI(a.fileName), this.node);
      this.icon.Ga();
    }
  }
  Rr.g = "420";
  Rr.u = O;
  Object.assign(Rr.prototype, { j: Rr });
  class Sr extends pc {
    constructor(a, b, c, d, e) {
      e == null && (e = "");
      super();
      this.D_ = b;
      this.E_ = c;
      this.lZ = d;
      this.$Ga = !0;
      this.BU = new ea(E.Na(), this.node);
      this.BU.Fa(pc.wB, 50);
      this.BU.ua(50);
      this.BU.Ia(64);
      a != null &&
        a != "" &&
        (e != null && (a = "" + a + "{" + e + "}"), this.BU.V(Y.na(a)));
      this.BU.La(Oa.dd(16776391));
      this.gl = this.appendChild(new Ig(50));
      this.gl.sL(p.o.pf);
      this.gl.nj(d(0));
      this.gl.Y(!1);
      this.gl.C(pc.wB);
      this.Uw = this.appendChild(new Ig(50));
      this.Uw.sL(y.noa);
      this.Uw.nj(We.bga(0));
      this.Uw.Y(!1);
      this.Uw.C(pc.wB);
      this.align();
      this.Wp = 0;
      this.F_ = (750 - (pc.wB + pc.uM)) / 2;
      this.node.wa(0);
    }
    ux() {
      this.$Ga
        ? ((this.ld = 0), (this.Wp = this.node.za), (this.$Ga = !1))
        : ((this.ld = 1),
          (this.D_ > 0 || this.E_ < 1) && this.gl.Y(!0),
          this.E_ > 0 && this.Uw.Y(!0));
      this.time = 0;
    }
    Z() {
      let a = this.fd(0.5);
      this.skipped && (a = 1);
      switch (this.ld) {
        case 0:
          let b = this.Wp;
          this.node.C(b + (this.F_ - b) * a);
          this.node.wa(a);
          a == 1 && ((this.ld = -1), this.UI.$());
          break;
        case 1:
          (this.gl.nj(this.lZ(Math.round(this.D_ * a))),
            this.E_ > 0 && this.Uw.nj(We.bga(Math.round(this.E_ * a))),
            this.align(),
            a == 1 && (this.UI.$(), (this.ld = -1)));
      }
    }
    align() {
      this.gl.active &&
        this.Uw.active &&
        this.Uw.C(this.gl.node.za - this.Uw.ya());
    }
  }
  Sr.g = "421";
  Sr.u = pc;
  Object.assign(Sr.prototype, { j: Sr });
  class Nx {
    constructor() {
      this.node = new Ea();
      this.Ax = m.l();
    }
    init(a) {
      this.type = a;
      this.background = R.aa(E.get(1299), y.$U, this.node);
      this.background.xc(200);
      this.background.Qb(43);
      this.background.HL(25 * (a == 0 ? -1 : 1));
    }
    AL(a) {
      this.background.xc(a);
      let b = 0,
        c = this.Ax;
      for (; b < c.length; ) c[b++].W.xc(a);
    }
    ia() {
      let a = 0,
        b = this.Ax.length;
      for (; a < b; ) this.Ax[a++].ia();
    }
    SXa(a) {
      if (a != null) {
        var b = new Ox(this.type);
        b.W.yb(a);
        b.W.xc(200);
        b.W.HL(25 * (this.type == 0 ? -1 : 1));
        this.node.appendChild(b.W);
        b.init(1);
        this.Ax.push(b);
      }
    }
    Lr(a, b) {
      let c = 0,
        d = this.Ax;
      for (; c < d.length; ) d[c++].fc(a, b);
    }
    UT(a, b, c) {
      this.Ax.length > c && this.Ax[c].fc(a, b);
    }
    Gb(a) {
      return this.Ax.length > a ? this.Ax[a].Tza : 0;
    }
  }
  Nx.g = "422";
  Object.assign(Nx.prototype, { j: Nx });
  class Ox {
    constructor(a) {
      this.Tza = this.jz = this.iK = this.Y_ = 0;
      this.W = R.aa(E.get(1299));
      this.type = a;
    }
    init(a) {
      this.Zka(a);
      this.iK = this.jz = a;
    }
    fc(a, b) {
      this.iK = a;
      this.Y_ = b;
      b <= 0 && ((this.jz = this.iK), this.Zka(this.jz));
    }
    ia() {
      this.jz != this.iK &&
        ((this.jz =
          this.Y_ <= 0 ? this.iK : this.jz - (this.jz - this.iK) / this.Y_),
        this.Zka(this.jz),
        this.Y_--);
    }
    Zka(a) {
      this.Tza = a;
      this.W.zl(vc.lo(this.type == 0 ? Jc.mo : Jc.ZU, a));
    }
  }
  Ox.g = "423";
  Object.assign(Ox.prototype, { j: Ox });
  class Jr extends O {
    constructor(a) {
      super();
      this.dn = 0;
      this.aT = new Map();
      this.type = a;
      this.Yp = R.aa(E.get(1315), null, this.node);
      this.Yp.R(!1);
      this.Yp.la(0.6);
      this.Yp.D(50);
      this.Xp = new Nx();
      this.Xp.init(a);
      this.node.appendChild(this.Xp.node);
      a = 0;
      let b = v.mu.rk;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        this.Xp.SXa(c.awa);
      }
      this.Xp.Lr(0, 0);
    }
    Ofa() {
      let a = v.mu.vfa(this.dn);
      return a != null ? a.name : "";
    }
    AL(a) {
      this.Xp.AL(a);
      switch (this.type) {
        case 0:
          this.Yp.C(10);
          break;
        case 1:
          ((a -= this.Yp.ya()), this.Yp.C(a - 10));
      }
    }
    Fzb() {
      let a = v.mu.vfa(this.dn);
      a != null && a.oma != "" && (this.Yp.R(!0), this.Yp.yb(a.oma));
    }
    XLa(a) {
      this.dn = a;
      this.Fzb();
    }
    t9a(a) {
      if (a == null) return 0;
      var b = 0;
      X.Xa(this.aT, a) && ((b = this.aT.get(a) + 1), this.aT.set(a, b));
      b == 0 && this.aT.set(a, b);
      return v.mu.jOa * v.mu.u9a(this.dn) * Math.pow(v.mu.nJa, -b) * a.hOa;
    }
    fna(a) {
      a = this.t9a(a);
      this.YDa(this.Xp.Gb(this.dn) + a);
    }
    YDa(a) {
      let b = this.dn + (a | 0);
      a %= 1;
      b >= v.mu.rk.length && ((b = v.mu.rk.length - 1), (a = 1));
      if (b != this.dn) {
        let c = b - 1;
        for (; c >= 0; ) (this.Xp.UT(1, 0, c), --c);
        this.XLa(b);
      }
      this.AMa(a);
    }
    AMa(a) {
      this.Xp.UT(a, 0, this.dn);
    }
    Nqb() {
      this.Xp.Lr(0, 0);
    }
    v9a() {
      return this.Xp.Gb(this.dn);
    }
    z0a() {
      X.clear(this.aT);
    }
    Pob() {
      this.XLa(0);
      this.Nqb();
      this.z0a();
      this.Yp != null && this.Yp.R(!1);
    }
    ia() {
      let a = v.mu.Hya / 60;
      a /= v.qn();
      this.AMa(Math.max(0, this.Xp.Gb(this.dn) - a));
      this.Xp.ia();
    }
  }
  Jr.g = "424";
  Jr.u = O;
  Object.assign(Jr.prototype, { j: Jr });
  class Ur extends $a {
    constructor(a) {
      super();
      this.os = a;
      this.AV = 1;
      this.locked = this.LG = !1;
      let b = a.yt();
      var c = a.jR;
      c = (c == null || lc(c)) == 0;
      this.jc = [
        (c
          ? this.Eea(a.jR, b ? "Lock" : "Base")
          : this.Fea(b ? "Lock" : "Base")) +
          "/" +
          (b ? a.q$a() : a.p$a()),
        (c
          ? this.Eea(a.jR, b ? "LockActive" : "Active")
          : this.Fea(b ? "LockActive" : "Active")) +
          "/" +
          (b ? a.r$a() : a.o$a()),
        (c ? this.Eea(a.jR, "Pressed") : this.Fea("Pressed")) + "/" + a.s$a(),
      ];
      this.ix(E.get(392), this.jc[0]);
      this.fC = new ea(E.Na(), this.node);
      this.fC.Fa(100, 55);
      this.fC.ua(60);
      this.fC.C(-50);
      this.fC.D(65);
      this.fC.La(new H(0, 0, 0, 1));
      this.fC.Ia(128);
      this.aWa = this.appendChild(new pe(""));
      this.K9 = null;
      this.dY = -1;
    }
    Ftb(a) {
      this.os = a;
      this.Kd(this.os.name);
      this.aWa.id = this.os.YQ();
    }
    wla(a) {
      this.LG = a;
      this.Y(this.os.isActive && !this.LG);
    }
    Mka(a) {
      this.fC.V(Y.na(a));
    }
    Lqb(a) {
      this.Qf = !a;
      this.W.yb(a ? this.jc[1] : this.jc[0]);
    }
    Qqb() {
      var a = 0.5;
      a == null && (a = 0);
      let b = this;
      if (!this.active && a < 0) {
        debugger;
        this.Nka(1);
      } else
        ((this.dY = a),
          (this.K9 = function (c) {
            let d = b.AV;
            return d + (1 - d) * c;
          }),
          (a = 0));
    }
    Nka(a) {
      let b = this.AV - a;
      (b > 0 ? b < 1e-6 : -b < 1e-6) ||
        ((this.AV = a < 0 ? 0 : a > 1 ? 1 : a), this.node.wa(this.AV));
    }
    Z(a) {
      super.Z(a);
      this.dY != -1 &&
        ((a = this.fd(this.dY)),
        this.Nka(this.K9(a)),
        a == 1 && ((this.K9 = null), (this.dY = -1)));
    }
    Fea(a) {
      return "BattleBtn" + a;
    }
    Eea(a, b) {
      return a + b;
    }
  }
  Ur.g = "425";
  Ur.u = $a;
  Object.assign(Ur.prototype, { j: Ur });
  class Sd extends ef {
    constructor() {
      super();
      this.E2 = this.step = 0;
      this.jf = Fc.Ed(-16777216, mc.J.df);
      this.jf.wa(0);
      this.label = new ea(E.Na(), this.node);
      this.label.V("0%");
      this.label.Ia(128);
      this.label.Ga();
      this.label.La(Oa.dd(13743222));
      mc.J.df.appendChild(this.node.L);
      L.J.root.appendChild(this);
      this.node.wa(0);
    }
    B() {
      mc.J.df.removeChild(this.node.L);
      E.B(822);
      this.jf.B();
      super.B();
      J.remove(Sd.o8, this);
    }
    bj(a, b) {
      this.ge = b;
      this.label.V(Y.na(a));
    }
    im(a, b) {
      this.lines = a;
      this.ge = b;
      this.label.V(Y.na(a[0].key));
    }
    end() {
      ua.fE || ((db.xJ = !1), db.US());
      this.B();
    }
    layout() {
      super.layout();
      this.label.Fa(
        (N.width / this.node.Db) * (0.9 + ((N.lc - 0.4) / 1.6) * -0.5),
        400,
      );
      this.label.rd(!0);
      this.label.ua(130);
      this.label.Lc(0.7);
      this.label.Ga();
    }
    Z(a) {
      super.Z(a);
      switch (this.step) {
        case 0:
          a = this.fd(1);
          this.jf.wa(a);
          db.VMa(1 - a);
          a == 1 && (this.step++, (this.time = 0), ua.jma(), this.Zt());
          break;
        case 1:
          a = this.fd(1);
          this.node.wa(a);
          a == 1 && (this.step++, (this.time = 0));
          break;
        case 2:
          this.lines != null ? this.step++ : (this.step += 2);
          this.time = 0;
          break;
        case 3:
          this.fd(this.lines[this.E2].value / 60) == 1 &&
            (this.E2++,
            (this.time = 0),
            this.E2 == this.lines.length
              ? (this.step = 5)
              : this.label.V(Y.na(this.lines[this.E2].key)));
          break;
        case 4:
          this.fd(5) == 1 && (this.step++, (this.time = 0));
          break;
        case 5:
          a = this.fd(1);
          this.node.wa(1 - a);
          a == 1 && (this.step++, (this.time = 0));
          break;
        case 6:
          try {
            this.ge();
          } catch (b) {}
          this.time = 0;
          this.step++;
          break;
        case 7:
          this.fd(0.5) == 1 && (this.step++, this.end());
      }
    }
    Zt() {
      db.VMa(1);
      ua.jma();
      db.xJ = !1;
      db.US("act", !1);
    }
    yea() {
      return 1024;
    }
    static Hza() {
      let a = Sd.o8;
      return !(a == null || a.length == 0);
    }
    static create() {
      let a = new Sd();
      Sd.o8.push(a);
      return a;
    }
  }
  Sd.g = "426";
  Sd.u = ef;
  Object.assign(Sd.prototype, { j: Sd });
  class Px {
    constructor() {
      this.W = R.aa(E.get(262), y.joa);
    }
    LMa(a) {
      let b;
      switch (a) {
        case 0:
          b = y.WRa;
          break;
        case 1:
          b = y.joa;
          break;
        case 2:
          b = y.VRa;
      }
      this.W.yb(b);
    }
  }
  Px.g = "427";
  Object.assign(Px.prototype, { j: Px });
  class Vr extends O {
    constructor() {
      super();
      let a = new ib();
      a.clear();
      this.so = a;
      this.appendChild(new pe("InfoBattle"));
      this.MG = this.appendChild(ra.Ya(Me, [].slice()));
      this.wc = new Gg(430, 800, 0, 50);
      this.wc.eba(50, !1, !0);
      this.node.appendChild(this.wc.node);
      this.uq = new ea(E.Na(), this.wc.content);
      this.uq.Ia(2);
      this.uq.La(Z.sc);
      this.uq.rd(!0);
      this.uq.Lc(0.6);
      this.av = R.aa(E.get(324), y.d7, this.wc.content);
      this.vj = new Bb("EButtonWhite");
      this.wc.content.appendChild(this.vj.node);
      this.vj.Y(!1);
      this.vj.oa.addListener(w(this, this.Lgb));
      this.appendChild(this.vj);
      this.vj.appendChild(new pe("FightButton"));
      this.vj.Ym(null, y.tB);
      L.J.hi && (this.j2a(), this.Z1a(), this.V1a());
      this.vxa();
      xa.F().z3.addListener(w(this, this.yka));
    }
    layout() {
      Ya.get().ue.layout(!1);
      var a = N.lc;
      let b = 0;
      var c = 50;
      za.instance != null && ((b = za.instance.Zp), (c = za.instance.Bka));
      let d = c * 0.4;
      this.wc.node.D(b);
      var e =
          (Math.min(N.width, N.height) *
            (Ya.zw
              ? 0.5 +
                (((a < 0.5 ? 0.5 : a > 0.9 ? 0.9 : a) - 0.5) / 0.4) *
                  -0.09999999999999998
              : 0.32 +
                (((a < 1 ? 1 : a > 1.6 ? 1.6 : a) - 1) / 0.6000000000000001) *
                  0.13)) /
          430,
        f = 430 * e,
        g =
          Ya.get().ue.Xj.node.qa *
          (1.1 +
            (((a < 1 ? 1 : a > 1.4 ? 1.4 : a) - 1) / 0.3999999999999999) *
              -0.15000000000000013);
      let h = Ya.get().ue.ve.node.qa - b;
      Ya.zw && ((g = h * 1.2), (f = 0.75 * g));
      if (g == 0) debugger;
      else {
        this.wc.ba(f, g, c);
        this.wc.Gl[1].ba(f, 50 * e);
        this.wc.Gl[1].node.D(g - 50 * e);
        c = this.wc.Lv;
        e = this.wc.bz;
        Ya.zw
          ? this.wc.node.C(N.rect.w - this.wc.width)
          : this.wc.node.C(
              N.rect.w -
                this.wc.width *
                  (1 + ((a < 2 ? 2 : a > 2.5 ? 2.5 : a) - 2) / 0.5),
            );
        g = c * 0.2;
        this.uq.C(d);
        this.uq.D(0);
        this.uq.ua(c * 0.17);
        this.uq.Fa(c - 2 * d, g);
        if (L.J.hi) {
          let k = [];
          this.AB.active && k.push(this.AB);
          this.oV.active && k.push(this.oV);
          this.nG.active && k.push(this.nG);
          let l = 0.1,
            n = 0;
          for (; n < k.length; ) {
            let q = k[n];
            ++n;
            q.Df(g);
            q.C(-f * 0.1);
            q.D(f * l);
            l += 0.17;
          }
        }
        f = 10 + g;
        this.uq.effect.Ep == 2 && (f += g * 0.5);
        f += 20;
        Ya.zw
          ? (this.MG.ba(N.width, h),
            this.MG.C(
              -125 + (((a < 0.4 ? 0.4 : a > 0.9 ? 0.9 : a) - 0.4) / 0.5) * 125,
            ),
            this.MG.D(b),
            this.MG.node.R(!0),
            this.av.R(!1))
          : (this.av.C(d),
            this.av.D(f),
            this.av.la((c - 2 * d) / this.av.ea.x),
            (f += this.av.ra()),
            (f += 20),
            this.av.R(!0),
            this.MG.node.R(!1));
        a = new hb(d, f, d + (c - 2 * d), f + (e - f));
        a.Wj() ||
          (this.Bh.node.C(a.K),
          this.Bh.node.D(a.P),
          this.Bh.ba(a.N - a.K, a.X - a.P),
          this.vj.Qb(c * 0.2),
          this.vj.C((a.K + a.N) * 0.5),
          this.vj.D(a.X - (this.vj.ra() / 2) * 2));
      }
    }
    B() {
      super.B();
      this.Bh = null;
      xa.F().z3.removeListener(w(this, this.yka));
    }
    Kyb(a) {
      !this.so.Wj() && this.so.uza(a.YQ()) && this.Wr(a);
    }
    Wr(a) {
      this.vxa();
      this.so.mj("");
      if (a != null) {
        var b = v.BD(a);
        if (b != null) {
          var c = b.Nb,
            d = new ib();
          d.zm(c.Ne, c.Se, c.Rq);
          this.so = d;
        } else this.so.zm(a.pl != null ? a.pl.name : "", a.name, "");
        this.uq.V(Y.na(a.t6));
        this.eM(a);
        b != null &&
          v.PF &&
          v.Vha != b.location + b.og.name + b.name &&
          (v.PF = !1);
        L.J.hi && (this.AB.Y(a.Fab()), this.nG.Y(a.type == "FightPeriodic"));
        var e = this;
        c = function (g) {
          e.wc.content.appendChild(g.node);
          g.wc = e.wc;
          e.appendChild(g);
          g.Y(!0);
          e.Bh = g;
          e.layout();
        };
        d = a.ob;
        if ((d != null && d.yt()) || a.type == "FightFake")
          c(new nk(a.description));
        else if (b != null && b.locked) c(new nk(b.MD()));
        else {
          d = b != null && !b.zR();
          var f = a.jJ();
          d || f == 1 || f == 3
            ? ((a = new Wr(a, this.so)),
              a.K3.addListener(w(this, this.Wr)),
              c(a))
            : (this.rib(a, b), this.layout());
        }
      }
    }
    vxa() {
      let a = this.Bh;
      a != null && a.B();
      this.Bh = null;
      this.so.mj("");
      this.uq.V("");
      this.vj.Y(!1);
      L.J.hi && (this.AB.Y(!1), this.nG.Y(!1));
    }
    Gz() {
      let a = this.BD();
      return a != null ? a.og : p.Wk(this.so);
    }
    BD() {
      return p.bw(this.so);
    }
    j2a() {
      let a = new Yh("Skip\nFight");
      this.wc.content.appendChild(a.node);
      this.oV = this.appendChild(a);
      this.oV.ee = 0;
      this.oV.oa.addListener(w(this, this.Zla));
    }
    V1a() {
      let a = new Yh("Reset\nPeriodic");
      this.wc.content.appendChild(a.node);
      this.nG = this.appendChild(a);
      this.nG.ee = 2;
      this.nG.oa.addListener(w(this, this.Zla));
    }
    Z1a() {
      let a = new Yh("Remove\nFight");
      this.wc.content.appendChild(a.node);
      this.AB = this.appendChild(a);
      this.AB.ee = 1;
      this.AB.oa.addListener(w(this, this.Zla));
      this.AB.Y(!1);
    }
    eM(a) {
      a = Ye.vI(a.Klb);
      this.MG.IT(a);
      this.av.sg(E.get(dz(a)));
      this.av.yb(a);
    }
    Zyb(a) {
      this.vj.V("");
      this.vj.Y(!0);
      if (a != null && a.rEa()) {
        debugger;
        a = a.l0();
        this.vj.V(
          Y.na(
            "^startFightFor{{img::" +
              v.Tq.AD(a[0].Lj).icon +
              "}}{{" +
              a[0].cn +
              "}}^",
          ),
        );
      } else this.vj.V(Y.na("^startFight^"));
      this.vj.P5(0);
    }
    Lgb() {
      if (!this.QV) {
        v.PF = !1;
        var a = p.bw(this.so),
          b = this;
        a != null &&
          (a.type == "FightPeriodic"
            ? L.J.EEa()
              ? Hb.instance.Kka(w(this, this.g6), w(this, this.g6))
              : Xc.EIa()
            : ((this.QV = !0),
              L.J.qx("button:map:fight", function () {
                b.Bm(a);
                b.QV = !1;
              })));
      }
    }
    rib(a, b) {
      let c = this.Bh;
      c != null && c.B();
      this.Bh = null;
      switch (a.type) {
        case "FightBossesIntermission":
          this.Bh = new ok(a);
          break;
        case "FightFinal":
        case "FightFinalReplayable":
          this.Bh = new pk(a, b);
          break;
        case "FightBosses":
        case "FightBossesReplayable":
        case "FightFinalTitan":
          this.Bh = b.index != a.dg - 1 ? new qk(a, b) : new pk(a, b);
          break;
        case "FightPeriodic":
          this.Bh = new Xr(a, b);
          this.Bh.K3.addListener(w(this, this.Wr));
          break;
        case "FightChallenge":
        case "FightPVP":
        case "FightReplayable":
        case "FightStory":
        case "FightTournament":
          this.Bh = new qk(a, b);
          break;
        case "FightSurvival":
          this.Bh = new ok(a);
          break;
        default:
          debugger;
      }
      this.Bh != null &&
        (this.wc.content.appendChild(this.Bh.node),
        this.appendChild(this.Bh),
        this.Bh.Y(!0));
      this.Zyb(b);
    }
    Bm(a) {
      let b = a.og;
      b.type == "FightSurvival" && p.o.eub();
      v.Bm(
        a,
        !1,
        b.type == "FightBosses" ||
          b.type == "FightBossesReplayable" ||
          b.type == "FightFinalTitan"
          ? b
          : null,
      );
    }
    Iob() {
      let a = this.Gz();
      a != null && (a.type == "FightPeriodic" && Gb.reset(!1), this.Wr(a));
    }
    Zla(a) {
      var b = this.Gz();
      if (b != null)
        switch (a) {
          case 1:
            this.z_a();
            b.pMa();
            p.F().Lx();
            this.Wr(b);
            break;
          case 2:
            this.Iob();
            break;
          default:
            ((v.PF = !0),
              (a = this.BD()),
              (v.Vha = a == null ? "" : a.location + a.og.name + a.name),
              a != null &&
                (a.type == "FightPeriodic"
                  ? Hb.instance.Kka(w(this, this.g6), w(this, this.g6))
                  : (this.Bm(a),
                    a != null &&
                      ((b = a.yi.length - 2), b < 0 && (b = 0), (a.VU = b)),
                    this.Wr(this.Gz()))));
        }
    }
    g6() {
      if (Hb.instance.l2) {
        var a = this.BD();
        if (a == null || a.zR()) {
          var b = this;
          a != null &&
            ((this.QV = !0),
            L.J.qx("button:map:fight", function () {
              b.Bm(a);
              b.QV = !1;
            }));
        } else this.Wr(this.Gz());
      } else (Xc.EIa(), this.Wr(this.Gz()));
    }
    yka() {
      xa.F().z3.removeListener(w(this, this.yka));
      v.PF = !1;
    }
    z_a() {
      var a = this.BD();
      a != null &&
        a.Nb.toString() == "ZONE_6|BOSS_SAMURAI|6" &&
        ((a = new ib()),
        a.zm("ZONE_6", "QuestBattle", ""),
        (a = p.Wk(a)),
        a != null && a.pMa());
    }
  }
  Vr.g = "428";
  Vr.u = O;
  Object.assign(Vr.prototype, { j: Vr });
  class Me extends O {
    constructor() {
      super();
      this.FG = null;
      this.zs = -1;
      this.OG = R.aa(E.get(324), y.d7, this.node);
      this.my = R.aa(E.get(324), y.d7, this.node);
      this.$$ = R.aa(E.get(256), y.JSa, this.node);
      this.tO = new H(100, 100, 0, 1);
    }
    B() {
      super.B();
      E.iD(this.zs);
    }
    ba(a, b) {
      let c = this.tO;
      c.x = a;
      c.y = b;
      this.my.Df(b);
      this.my.C(0);
      this.OG.la(this.my.Db);
      this.OG.C(this.my.ya());
      this.OG.Mr(!0);
      this.$$.D(this.my.ra());
      this.$$.Th(a / this.$$.ea.x);
    }
    IT(a) {
      if (this.FG != a) {
        this.FG = a;
        this.zs != -1 && (E.iD(this.zs), (this.zs = -1));
        var b = a.split("/")[0];
        this.zs = G.uf("res/map/images/" + a.split("/")[1] + ".img");
        Me.G2.includes(this.zs) || Me.G2.push(this.zs);
        G.data.v[this.zs] != null
          ? this.refresh()
          : ((b = dz(b)),
            this.my.sg(E.get(b)),
            this.OG.sg(E.get(b)),
            a.indexOf("preview_bosses") == 0 && (a += "_portrait"),
            this.my.yb(a),
            this.OG.yb(a),
            this.ba(this.tO.x, this.tO.y),
            (this.O9 = G.load([this.zs])));
      }
    }
    Z() {
      this.O9 != null &&
        this.O9.pp() &&
        !this.Zg &&
        ((this.O9 = null), this.refresh());
    }
    refresh() {
      let a = E.get(this.zs);
      this.my.sg(a);
      this.OG.sg(a);
      this.ba(this.tO.x, this.tO.y);
    }
    static myb() {
      E.B(...Me.G2);
      Me.G2 = [];
    }
  }
  Me.g = "429";
  Me.u = O;
  Object.assign(Me.prototype, { j: Me });
  class Yr extends O {
    constructor() {
      super();
      this.rK = new V();
      this.Fo = m.l();
      this.AW = m.l();
      this.B9 = m.l();
      this.C9 = m.l();
      this.bD = 0;
      this.A9 = new H(0, 0, 0, 1);
      this.tq = 255;
      this.gN = this.sq = 0;
      this.Y7 = !1;
      this.Z7 = this.gW = !0;
      this.hW = !1;
      this.bH = this.appendChild(ra.Ya(O, [].slice()));
      this.QG = new Ea(this.node);
      this.gN = Nb.Im.j_;
      this.XB = R.aa(E.get(262), y.foa, this.QG);
      this.XB.Ga();
      this.XB.Uc(!1);
      this.Fk = new ea(E.Na());
      this.Fk.V("");
      this.Fk.La(Oa.dd(13084531));
      this.Fk.Uc(!1);
      this.node.appendChild(this.Fk);
    }
    Z(a) {
      super.Z(a);
      this.Fo.length > 0 &&
        (this.XB.C(this.Fo[0].node.za),
        this.Fo.length > 1 &&
          ((a = this.XB),
          a.C(a.za + this.bD * (this.Fo[1].node.za - this.Fo[0].node.za))));
    }
    ba(a, b) {
      var c = N.lc;
      if (c > 1.45)
        ((a *=
          0.5 +
          (((c < 1 ? 1 : c > 1.6 ? 1.6 : c) - 1) / 0.6000000000000001) *
            -0.09999999999999998),
          this.Fk.Fa(a - 25, b * 0.7),
          this.Fk.ua(b * 0.82),
          this.Fk.Ia(4),
          (c = b * 0.5),
          (a += 25),
          (b /= 2));
      else {
        b = c > 0.6 ? 0.8 : 1;
        let d = Math.min(a * 0.1, 100);
        this.Fk.Fa(a, d * b);
        this.Fk.ua(d * b);
        this.Fk.Ia(2);
        c = d * 0.8 * b;
        a = (a - this.QG.ya()) / 2;
        b = d * b + this.bH.node.ra() * 0.4;
      }
      this.bH.la(c / E.get(262).$za(y.foa).ea.y);
      this.QG.la(this.bH.node.Db);
      this.bH.C(a);
      this.QG.C(a);
      this.bH.D(b);
      this.QG.D(b);
      this.XB.C(this.A9.x);
      this.XB.D(this.A9.y);
    }
    p0a() {
      for (var a = 0, b = this.Fo; a < b.length; ) b[a++].B();
      a = this.Fo.length = 0;
      for (b = this.AW; a < b.length; ) b[a++].B();
      this.AW.length = 0;
    }
    kXa(a) {
      let b = 0;
      for (; b < a; ) {
        var c = b++;
        let d = this.bH.appendChild($a.Xv(null, y.URa));
        d.ee = c;
        d.oa.addListener(w(this, this.Vgb));
        d.C(c * 80 + d.W.ya() / 2);
        d.D(0);
        this.Fo.push(d);
        c = R.aa(E.get(262), y.cSa, this.QG);
        c.wa(0);
        c.Uc(!1);
        c.C(d.node.za);
        c.Ga();
        this.AW.push(c);
      }
      this.XB.yF();
      this.bD = 0;
      this.WLa(this.bD);
    }
    Vka(a, b) {
      this.Fk.V(Y.na(b));
      this.bD = a;
      this.WLa(this.bD);
    }
    WLa(a) {
      if (this.Fo.length > 0) {
        let b = this.A9,
          c = this.Fo[a].node.qa;
        b.x = this.Fo[a].node.za;
        b.y = c;
      }
    }
    G4a() {
      if (this.gN > 0) this.gN--;
      else {
        var a = Nb.Im.HGa;
        Nb.Im.O_ <= 0 ||
          (this.Z7 &&
            (this.LZa(this.B9),
            this.tq <= a && this.hW && (this.Y7 = !0),
            this.tq <= 0 && (this.Z7 = !1)),
          this.Y7 &&
            (this.KZa(this.C9),
            this.sq <= a && this.gW && (this.Z7 = !0),
            this.sq <= 0 && (this.Y7 = !1)));
      }
    }
    lxa(a) {
      this.B9.length = 0;
      let b = (this.C9.length = 0),
        c = a.length;
      for (; b < c; ) {
        let d = b++,
          e = a[d].Rx;
        if (!e.DR) {
          if (!Ya.jFa(e)) break;
          Ya.iFa(e) && (this.B9.push(this.Fo[d]), this.C9.push(this.AW[d]));
        }
      }
    }
    Vgb(a) {
      a != this.bD && this.rK.$(a);
    }
    LZa(a) {
      var b = Nb.Im.O_;
      if (!(b <= 0)) {
        b = (255 / b) | 0;
        this.hW
          ? ((this.tq -= b), this.tq <= 0 && ((this.tq = 0), (this.hW = !1)))
          : ((this.tq += b),
            this.tq >= 255 &&
              ((this.tq = 255), (this.hW = !0), (this.gN = Nb.Im.j_)));
        b = 0;
        for (var c = a.length; b < c; ) a[b++].node.wa(this.tq / 255);
      }
    }
    KZa(a) {
      var b = Nb.Im.O_;
      if (!(b <= 0)) {
        b = (255 / b) | 0;
        this.gW
          ? ((this.sq -= b), this.sq <= 0 && ((this.sq = 0), (this.gW = !1)))
          : ((this.sq += b),
            this.sq >= 255 &&
              ((this.sq = 255), (this.gW = !0), (this.gN = Nb.Im.j_)));
        b = 0;
        for (var c = a.length; b < c; ) {
          let d = b++;
          a[d].R(!0);
          a[d].wa(this.sq / 255);
        }
      }
    }
  }
  Yr.g = "42A";
  Yr.u = O;
  Object.assign(Yr.prototype, { j: Yr });
  class Zr extends O {
    constructor() {
      super();
      this.sm = new V();
      this.QE = new V();
      this.size = new H(0, 0, 0, 1);
      this.gA = this.appendChild(ra.Ya(O, [].slice()));
      this.state = 0;
      this.Kq = null;
      this.items = [];
      this.LR = 0;
      this.Ww = null;
      this.ub = this.GLa = this.cQ = this.ratio = this.ca = 0;
      this.fka = !1;
      this.lqb = !0;
      this.Px = !1;
      this.HLa = 0.1;
    }
    Fka(a, b) {
      this.wF(this.items[a], b);
    }
    wF(a, b) {
      var c = N.lc;
      c =
        -a.node.za * this.gA.node.Db +
        (((c < 2 ? 2 : c > 2.5 ? 2.5 : c) - 2) / 0.5) * 300;
      c = Math.max(c, this.size.x - this.rCa() + 100);
      c = Math.min(c, 0);
      this.ub = 0;
      b == 0
        ? ((this.ca = c), this.gA.C(this.ca))
        : ((this.Ww = c), (this.HLa = 0.1 / (b / 0.6)), (this.time = 0));
      a != this.Kq && ((this.Kq = a), this.QE.$(a));
    }
    ba(a, b) {
      if (this.items.length != 0) {
        var c = this.size;
        c.x = a;
        c.y = b;
        this.gA.la(b / this.items[0].background.ea.y);
        this.fka = !0;
      }
    }
    Z(a) {
      super.Z(a);
      if (this.items.length != 0) {
        var b = this.rCa();
        if (N.width > b - 200) ((this.ca = 0), this.gA.C(0));
        else {
          a = N.mn();
          a = this.node.$n(a);
          var c =
              a.x >= 0 && a.y >= 0 && a.x <= this.size.x && a.y < this.size.y,
            d = this.size.x - b + 200;
          this.fka
            ? ((this.ca = this.ratio * d),
              (this.ub = 0),
              (d = this.Kq),
              (this.Kq = null),
              this.wF(d, 0),
              (this.Ww = null),
              (this.state = 0),
              (this.fka = !1))
            : (this.ratio = this.ca / d);
          switch (this.state) {
            case 0:
              this.Px = !1;
              if (this.lqb && L.J.ed().Eb(0) && c) {
                c = !1;
                d = 0;
                let e = this.items;
                for (; d < e.length; )
                  if (e[d++].Bd()) {
                    c = !0;
                    break;
                  }
                c &&
                  ((this.GLa = this.ca),
                  (this.cQ = a.x),
                  (this.state = 1),
                  (this.ub = 0),
                  (this.Ww = null));
              }
              this.Ww != null
                ? ((this.Ww = Math.max(this.Ww, this.size.x - b + 100)),
                  (a = this.Ww - this.ca),
                  (this.ca += a * this.HLa),
                  Math.abs(a) < 1 && ((this.ca = this.Ww), (this.Ww = null)))
                : ((this.ub *= 0.9),
                  (this.ca += this.ub),
                  this.ca > 0 && (this.ub = this.ca = 0),
                  (a = this.size.x - b + 100),
                  this.ca < a && ((this.ca = a + 100), (this.ub = 0)));
              break;
            case 1:
              L.J.ed().Xe(0) &&
                ((c = a.x - this.cQ),
                (this.Px = Math.abs(c) > 10),
                (this.ca = this.GLa + c));
              if ((c = this.ca > 0))
                ((this.LR = 0), this.ca > 100 && (this.ca = 100));
              b = this.size.x - b + 200;
              if ((d = this.ca < b))
                ((this.LR = b), this.ca < b - 100 && (this.ca = b - 100));
              L.J.ed().yh(0) &&
                (c || d
                  ? ((this.state = 2), (this.ub = 0))
                  : (Math.abs(a.x - this.cQ) < 10
                      ? (this.ub = 0)
                      : ((this.ub = L.J.ed().pM[0].x),
                        (this.ub *= 0.01),
                        this.ub < 0
                          ? ((a = this.nJ(this.Kq) + 1),
                            a < this.items.length && this.wF(this.items[a], 1))
                          : ((a = this.nJ(this.Kq) - 1),
                            this.wF(this.items[0 < a ? a : 0], 1))),
                    (this.state = 0)));
              break;
            case 2:
              if (
                ((this.ca += (this.LR - this.ca) * 0.3),
                (a = Math.abs(Math.abs(this.LR - this.ca))),
                a > 0 ? a < 1 : -a < 1)
              )
                ((this.ca = this.LR), (this.state = 0));
          }
          this.gA.C(-100 + this.ca);
        }
      }
    }
    B() {
      super.B();
      this.QE = this.sm = this.items = null;
    }
    nJ(a) {
      return this.ew().indexOf(a);
    }
    Hfa(a) {
      let b = 0,
        c = this.ew(),
        d = 0;
      for (; d < c.length && a != c[d++].Rx.name; ) ++b;
      b >= c.length && (b = -1);
      return b;
    }
    zY() {
      for (var a = p.mCa(), b = 0; b < a.length; ) this.$Xa(a[b++]);
      if (this.items.length == 1) {
        a = m.find(a, function (d) {
          return d.fileName == "Map1.2";
        });
        b = a.Fg;
        a.Fg = [];
        let c = this.gA.appendChild(new qe(this, a));
        c.Nga = !0;
        this.Ro(c);
        a.Fg = b;
      }
      this.Kq = this.items[0];
    }
    fga(a) {
      let b = 0,
        c = this.ew();
      for (; b < c.length; ) if (c[b++].FQ(a) != null) return !0;
      return !1;
    }
    Yw(a, b) {
      if (a != null)
        for (var c = 0, d = this.ew(); c < d.length; ) {
          let e = d[c];
          ++c;
          if (e.FQ(a) != null) {
            a = e.Y_a(a);
            e.MT(a);
            this.Kq != e && this.wF(e, b);
            break;
          }
        }
    }
    ew() {
      let a = m.l(),
        b = 0,
        c = this.items;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        d.Nga || a.push(d);
      }
      return a;
    }
    Nz(a) {
      let b = this.ew();
      return b != null && b.length > a ? b[a] : null;
    }
    Cea() {
      return this.nJ(this.Kq);
    }
    Dea() {
      return this.Kq;
    }
    clear() {
      let a = 0,
        b = this.items;
      for (; a < b.length; ) b[a++].B();
      this.items = [];
    }
    rCa() {
      let a = 0,
        b = 0,
        c = this.items;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.Nga) break;
        a += d.background.ea.x;
      }
      return (a *= this.gA.node.Db);
    }
    iS(a) {
      this.sm.$(a);
    }
    $Xa(a) {
      if (!a.DR) {
        for (var b = !0, c = 0, d = a.Fg; c < d.length; ) {
          let e = d[c++];
          b = b && !e.isActive;
        }
        b ||
          ((a = this.gA.appendChild(new qe(this, a))),
          a.sm.addListener(w(this, this.iS)),
          a.Ika(),
          this.Ro(a));
      }
    }
    Ro(a) {
      this.items.length == 0 && (this.Kq = a);
      this.items.push(a);
      a.C((this.items.length - 1) * a.background.ea.x);
    }
  }
  Zr.g = "42B";
  Zr.u = O;
  Object.assign(Zr.prototype, { j: Zr });
  class Ya extends ma {
    constructor(a, b) {
      super(a, b);
    }
    ut() {
      let a = [];
      fa.add(
        a,
        318,
        319,
        320,
        321,
        322,
        323,
        324,
        325,
        326,
        327,
        328,
        329,
        330,
        331,
        332,
        333,
        334,
        335,
        336,
        337,
        338,
        339,
        340,
        341,
        392,
        393,
      );
      fa.add(a, 266, 267);
      fa.add(a, 1358);
      fa.add(a, 1322);
      fa.add(a, 1321);
      fa.add(a, 256, 257);
      fa.add(a, 262, 263);
      fa.add(a, 246, 247);
      fa.add(a, 264, 265);
      fa.add(a, 11, 12);
      fa.add(a, 13, 14);
      fa.add(a, 834, 835);
      fa.add(a, 340, 341);
      fa.add(a, 250, 251);
      fa.add(a, 268, 269);
      return a;
    }
    HD() {
      return 5;
    }
    init(a) {
      Ya.zw = N.lc < 0.9;
      new V();
      new V();
      super.init(a);
      L.J.Ha.ET(Oa.dd(1050371));
      ad.eE = !1;
      db.xJ || db.US();
      this.Imb();
      this.er = this.To(Vr);
      Vb.F().vS.addListener(w(this, this.Jn));
      Vb.F().wS.addListener(w(this, this.Jn));
      Vb.F().C3.addListener(w(this, this.Jn));
      this.ue.xtb(p.o.jVa);
      this.Dd = p.o;
      this.Dd.xS.addListener(w(this, this.xS));
      this.Dd.qS.addListener(w(this, this.qS));
      this.Tma();
      a = ha.F().ta;
      this.ue.mib();
      this.Cqb(this.iVa);
      a.II = th.getName(16);
      this.Lma();
      this.Sma();
      this.hH = this.To($r);
      this.xY();
      this.qza();
      this.L1();
      L.J.ika &&
        ((this.Dj = $a.Xv(E.get(262), y.dSa)),
        this.Dj.Y(!1),
        this.elements.appendChild(this.Dj),
        this.content.appendChild(this.Dj.node),
        this.Dj.oa.addListener(w(this, this.ngb)),
        (this.nv = 1),
        (this.Hpa = this.nV = 0));
    }
    vr() {
      super.vr();
      this.ue.layout(!0);
      this.er.layout();
      if (L.J.ika) {
        var a = N.lc;
        a =
          Math.min(N.rect.w, N.rect.v) *
          (0.25 +
            (((a < 0.4 ? 0.4 : a > 0.7 ? 0.7 : a) - 0.4) /
              0.29999999999999993) *
              -0.1);
        var b = Ya.get();
        this.Dj.Df(b.ue.ve.size.y * (N.lc > 1.2 ? 0.2 : 0.25));
        b = b.ue.Xj.node.qa;
        this.Dj.C(N.rect.w - (a / 2) * 1.1);
        this.Dj.D((N.height + b) * 0.5);
        let c = this.Dj.W.ra();
        N.lc > 1.25
          ? (this.Dj.C(this.er.wc.node.za - (a / 2) * 1.25),
            this.Dj.D(b - (c / 2) * this.Dj.node.Db))
          : N.lc > 0.55 && this.Dj.D(N.height - c * 0.55);
      }
    }
    Z(a) {
      Ya.zw = N.lc < 0.9;
      super.Z(a);
      this.nv += a;
      this.nv > 1 &&
        ((this.uta = fk.S1("button:map:gems")),
        this.Dj.Y(this.uta),
        (this.nv = 0));
      this.hH.Qm.length == 0 &&
        ((this.nV += a),
        this.nV > 3 &&
          ((this.nV = 0),
          this.Dj.W.D(0),
          this.Hpa < 3 &&
            this.uta &&
            (this.Dj.W.D(-10), this.Dj.W.xh(4, 0, 2, dc.M3a()), this.Hpa++)));
    }
    B(a) {
      super.B(a);
      this.Dd.xS.removeListener(w(this, this.xS));
      this.Dd.qS.removeListener(w(this, this.qS));
      this.Dd = null;
      this.ue.iS.removeListener(w(this, this.sm));
      this.ue.Iia.removeListener(w(this, this.vIa));
      Vb.F().vS.removeListener(w(this, this.Jn));
      Vb.F().wS.removeListener(w(this, this.Jn));
      Vb.F().C3.removeListener(w(this, this.Jn));
      a = 0;
      let b = [338, 336, 334, 332, 330, 328, 326];
      for (; a < b.length; ) E.B(b[a++]);
      E.B(392);
      E.B(324);
      E.B(322);
      E.B(318);
      E.B(320);
      Me.myb();
    }
    Gma(a) {
      if (a.ob != null && a.pl != null) {
        var b = this.L6a(a.pl);
        b != null && b.Jyb(a);
      }
    }
    Lma() {
      this.vo != null && (this.vo.enabled(!1), (this.vo = null));
      let a = this.ue.Dea();
      a != null && ((this.vo = a), this.vo.enabled(!0));
    }
    Mzb() {
      this.ue.lzb();
    }
    qKa() {
      this.hH.Tja();
      this.ue.clear();
      this.ue.zY();
      this.vo = null;
      ha.F().ta.II = th.getName(16);
      this.Tma();
      this.Yw(p.Wk(p.o.Ds), 0);
      this.Lma();
      this.Sma();
    }
    Bqb(a, b) {
      b == null && (b = 0);
      a != null && a.og != null && this.Yw(a.og, b);
    }
    Cqb(a) {
      this.Yw(a.N5a(), 0);
    }
    Yw(a, b) {
      if (a != null) {
        var c = null;
        this.ue.fga(a) && (c = this.ue);
        c != null && (c.Yw(a, b), this.Lma(), this.Sma());
      }
    }
    Eqb(a, b) {
      this.Yw(a.Nz(b).rE, 0);
    }
    Qaa(a, b, c, d) {
      d == null && (d = !1);
      c == null && (c = !0);
      let e = this.dBa(a.Ne);
      e != null && e.rWa(a.Se, b, c, d);
    }
    qza() {
      this.hH.S3a();
    }
    xF() {}
    Imb() {
      this.ue = this.To(rk);
      this.ue.zY();
      this.ue.iS.addListener(w(this, this.sm));
      this.ue.Iia.addListener(w(this, this.vIa));
      this.ue.close();
    }
    Jn() {
      this.Hmb();
      this.qza();
    }
    ezb(a) {
      this.er.Wr(a);
      let b = this.er.BD();
      b == null && (b = v.J7a(a));
      b != null && p.o.pub(b.Nb);
    }
    Sma() {
      if (this.vo != null) {
        this.vo.Hka();
        var a = this.vo.Rx.name,
          b = this.ue.Cea();
        this.ue.Vka(b, a);
      }
    }
    Tma() {
      this.iVa = new Qx(p.o.Ds);
    }
    sm(a) {
      this.er != null && a != this.er.Gz() && (this.ezb(a), this.Tma());
    }
    vIa(a) {
      a = this.ue.nJ(a);
      a < 0 || this.Eqb(this.ue, a);
    }
    dBa(a) {
      a = this.ue.Hfa(a);
      return a >= 0 ? this.ue.Nz(a) : null;
    }
    xS() {
      debugger;
    }
    qS() {
      debugger;
    }
    L6a(a) {
      return this.dBa(a.name);
    }
    xY() {
      this.hH.xY();
      this.hH.ZWa();
    }
    Hmb() {
      this.hH.Tja();
      this.xY();
    }
    ngb() {
      fk.show("button:map:gems");
    }
    static get() {
      return ma.Kg() instanceof Ya ? ma.Kg() : null;
    }
    static iFa(a) {
      let b = Nb.Im.YY,
        c = 0,
        d = b.length;
      for (; c < d; ) {
        let e = a.DQ(b[c++]);
        if (e == null) continue;
        let f = e.jJ() == 2,
          g = !e.yt();
        if (f && g && e.isActive) return !0;
      }
      return !1;
    }
    static jFa(a) {
      if (a == null) return !1;
      let b = a.h0("FightBosses");
      m.addRange(b, a.h0("FightFinalTitan"));
      m.addRange(b, a.h0("FightBossesIntermission"));
      a = 0;
      let c = b.length;
      for (; a < c; ) if (b[a++].isActive) return !0;
      return !1;
    }
  }
  Ya.g = "42C";
  Ya.u = ma;
  Object.assign(Ya.prototype, { j: Ya });
  class Qx {
    constructor(a) {
      this.Ck = a;
    }
    N5a() {
      return this.Nz() != null ? this.Nz().DQ(this.Ck.Se) : null;
    }
    Nz() {
      return p.LD(this.Ck.Ne);
    }
  }
  Qx.g = "42D";
  Object.assign(Qx.prototype, { j: Qx });
  class bi extends O {
    constructor(a, b, c) {
      super();
      if (c != null) {
        var d = 0,
          e = 0;
        b && ((d = c.s4), (e = c.r4));
        d = v.Xk(d);
        a > 0 && ((d *= a), (e *= a));
        a = null;
        c.yi.length > 0 && (a = c.yi[c.yi.length - 1]);
        switch (c.type) {
          case "FightBosses":
          case "FightFinalTitan":
            c = 300;
            break;
          default:
            c = 200;
        }
        this.oc = this.appendChild(new ci(d, e, a.gm(p.o.bb()), 0, c, 105));
      }
    }
    ba(a, b) {
      this.oc.ba(a, b);
    }
  }
  bi.g = "42E";
  bi.u = O;
  Object.assign(bi.prototype, { j: bi });
  class as extends O {
    constructor(a, b) {
      super();
      this.Gba = new Ea();
      this.node.appendChild(this.Gba);
      this.label = new ea(E.Na(), this.node);
      this.label.La(Z.sc);
      this.label.Ia(128);
      this.I1 = [];
      let c = a.Oz(),
        d = c.length;
      (a.type != "FightBosses" &&
        a.type != "FightBossesReplayable" &&
        a.type != "FightFinalTitan") ||
        --d;
      if (
        (b =
          b.index != d ||
          (a.type != "FightBosses" && a.type != "FightBossesReplayable"))
      ) {
        for (var e = 0, f = 0, g = d; f < g; ) {
          let k = f++;
          var h = new Px();
          this.Gba.appendChild(h.W);
          this.I1.push(h);
          h = c[k].status == 1;
          let l = this.I1[k];
          c[k].locked ? l.LMa(2) : l.LMa(h ? 0 : 1);
          h && ++e;
        }
        this.$0a(a, d, e, b);
      }
    }
    ba(a, b) {
      let c = a * 0.16;
      this.label.ua(c);
      this.label.Fa(a, c);
      this.label.pk();
      this.Gba.D(c);
      this.Idb(a, b * 0.7);
    }
    $0a(a, b, c, d) {
      switch (a.type) {
        case "FightBosses":
        case "FightBossesReplayable":
        case "FightFinalTitan":
          d
            ? this.label.V(Y.na("bodyguards"))
            : this.label.V(Y.na(a.t6) + " " + Y.na("challengeBoss"));
          break;
        case "FightChallenge":
        case "FightPVP":
        case "FightRaid":
        case "FightReplayable":
        case "FightStory":
        case "FightTournament":
          this.label.V(Y.na("stage{" + (c + 1) + "}{" + b + "}"));
      }
    }
    Idb(a, b) {
      let c = this.I1.length,
        d = c > 12 ? 10 : 6;
      c == 16 && (d = 8);
      let e = !1,
        f = Math.ceil(c / d);
      var g = a / d,
        h = b / f;
      b = Math.min(g, h);
      if (f == 1 || g > h) e = !0;
      for (h = g = 0; h < f; ) {
        let l = h++;
        var k = l != f - 1 ? d : c % d;
        k == 0 && (k = d);
        let n = 0;
        e && (n = (a - k * b) / 2);
        let q = 0;
        for (; q < k; ) {
          let r = this.I1[l * d + q++];
          r.W.la(b / r.W.ea.x);
          r.W.C(n);
          r.W.D(g);
          n += b;
        }
        g += b;
      }
    }
  }
  as.g = "42F";
  as.u = O;
  Object.assign(as.prototype, { j: as });
  class rk extends O {
    constructor() {
      super();
      this.iS = new V();
      this.Iia = new V();
      this.appendChild(new pe("StoryMapBattles"));
      this.ve = this.appendChild(ra.Ya(Zr, [].slice()));
      this.ve.sm.addListener(w(this, this.sm));
      this.ve.QE.addListener(w(this, this.QE));
      this.Xj = this.appendChild(ra.Ya(Yr, [].slice()));
      this.Xj.rK.addListener(w(this, this.rK));
      this.oMa();
      this.layout(!0);
    }
    lU(a) {
      this.ve.Y(a);
    }
    layout(a) {
      if (N.io || a) {
        var b = 0;
        za.instance != null && (b = za.instance.Zp);
        var c = N.lc;
        a = N.rect;
        var d =
          (a.v - b) *
            (Ya.zw
              ? Math.min(c, 0.5)
              : 0.5 +
                (((c < 0.9 ? 0.9 : c > 1.5 ? 1.5 : c) - 0.9) / 0.6) * 0.5) -
          a.v * 0.1;
        this.ve.D(b);
        this.ve.ba(a.w, d);
        b = 0;
        Ya.zw
          ? this.ve.D((a.v - d) * Math.min(N.lc, 0.6))
          : c < 1.45 && (b = -a.w * 0.1);
        c = this.ve.node.qa + d;
        this.Xj.D(c);
        this.Xj.C(b);
        this.Xj.ba(a.w, N.height - c);
      }
    }
    B() {
      this.ve.sm.removeListener(w(this, this.sm));
      this.ve.QE.removeListener(w(this, this.QE));
      this.Xj.rK.removeListener(w(this, this.rK));
      super.B();
    }
    Z(a) {
      super.Z(a);
      this.Xj.G4a();
    }
    close() {
      this.lU(!0);
    }
    mib() {
      this.lU(!0);
      this.oMa();
    }
    nJ(a) {
      return this.ve.nJ(a);
    }
    Hfa(a) {
      return this.ve.Hfa(a);
    }
    Yw(a, b) {
      this.ve.Yw(a, b);
    }
    zY() {
      this.ve.zY();
      this.Prb();
      this.layout(!0);
    }
    Prb() {
      let a = this.ve.ew();
      this.Xj.p0a();
      this.Xj.kXa(a.length);
      this.Xj.lxa(a);
    }
    lzb() {
      let a = this.ve.ew();
      this.Xj.lxa(a);
    }
    clear() {
      this.ve.clear();
    }
    Nz(a) {
      return this.ve.Nz(a);
    }
    Vka(a, b) {
      this.Xj.Vka(a, b);
    }
    Fka(a, b) {
      this.ve.Fka(a, b);
    }
    Cea() {
      return this.ve.Cea();
    }
    Dea() {
      return this.ve.Dea();
    }
    oMa() {
      this.Xj.Y(!0);
    }
    fga(a) {
      return this.ve.fga(a);
    }
    xtb(a) {
      let b = 0,
        c = this.ve.ew();
      for (; b < c.length; ) c[b++].Wqb(a);
    }
    sm(a) {
      this.iS.$(a);
    }
    QE(a) {
      this.Iia.$(a);
    }
    rK(a) {
      let b = Math.min(50, Math.abs(this.Xj.bD - a) * 20) / 60;
      var c = this.ve.ew().length;
      a < 0 ||
        a >= c ||
        ((c = this.Nz(a)),
        this.Fka(a, b),
        (a = c.Rx),
        a != null && Ya.jFa(a) && Ya.iFa(a) && this.Aqb(a, c),
        sb.xJa());
    }
    Aqb(a, b) {
      a = a.Fg;
      let c = 0,
        d = Nb.Im.YY;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        let f = 0,
          g = a;
        for (; f < g.length; )
          if (rk.L0a(e, g[f++])) {
            b.Rrb(e);
            return;
          }
      }
    }
    static L0a(a, b) {
      if (b == null) return !1;
      a = a == b.name;
      b = b.jJ() == 2 && !b.yt();
      return a ? b : !1;
    }
  }
  rk.g = "430";
  rk.u = O;
  Object.assign(rk.prototype, { j: rk });
  class qe extends O {
    constructor(a, b) {
      super();
      this.sm = new V();
      this.buttons = m.l();
      this.rE = null;
      this.Rx = b;
      this.ve = a;
      this.p1a();
      this.q1a();
      this.Nga = !1;
      this.Yya = [0, 0];
    }
    Bd() {
      let a = 0,
        b = this.buttons;
      for (; a < b.length; ) if (b[a++].Bd()) return !0;
      return ma.Bd(this.background.L);
    }
    FQ(a) {
      let b = 0,
        c = this.buttons;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.os == a) return d;
      }
      return null;
    }
    Ika() {
      let a = this.Rx.Fg;
      if (a.length > 0) {
        let b = null,
          c = 0;
        for (; c < a.length; ) {
          let d = a[c];
          ++c;
          if (d.isActive) {
            b = d;
            break;
          }
        }
        this.MT(b != null ? b : a[0]);
      }
    }
    Hka() {
      (this.rE != null && this.rE.isActive) || this.Ika();
      this.Lyb();
      this.sm.$(this.rE);
    }
    Jyb(a) {
      a = this.FQ(a);
      a != null && this.bPa(a);
    }
    Rrb(a) {
      this.MT(this.Rx.DQ(a));
    }
    MT(a) {
      this.rE = a;
    }
    Wqb(a) {
      let b = this.background.wf();
      b.x = a.x;
      b.y = a.y;
      b.z = a.z;
      b.w = a.w;
    }
    enabled(a) {
      let b = 0,
        c = this.buttons;
      for (; b < c.length; ) c[b++].Qf = a;
    }
    rWa(a, b, c, d) {
      d == null && (d = !1);
      c == null && (c = !0);
      let e = 0,
        f = null,
        g = this.Rx.Fg,
        h = 0;
      for (; h < g.length; ) {
        let k = g[h];
        ++h;
        if (k.name == a) {
          f = k;
          break;
        }
        k.type == "FightUnregister" || k.IDa || ++e;
      }
      f != null && e < g.length && this.sWa(f, e, b, c, d);
    }
    Z(a) {
      super.Z(a);
      a = N.width / 2;
      let b = new H(0, 0, 0, 1);
      this.Yya[0] = a - this.background.Dm(b).x;
      b.x = this.background.ea.x;
      this.Yya[1] = a - this.background.Dm(b).x;
    }
    sWa(a, b, c, d, e) {
      e == null && (e = !1);
      d == null && (d = !0);
      a != null &&
        b < this.buttons.length &&
        ((b = this.buttons[b]),
        b.locked != a.yt() && (b = this.Gmb(a)),
        (a.isActive = c)
          ? (b != null && (e ? b.Y(!a.ni()) : (b.Nka(0), b.Y(!0), b.Qqb())),
            this.MT(a))
          : (b != null && b.Y(!1), a == this.rE && this.Ika()),
        d && this.Hka());
    }
    Gmb(a) {
      let b = this.FQ(a);
      if (b == null) return null;
      let c = 0,
        d = 0,
        e = this.buttons;
      for (; d < e.length && e[d++] != b; ) ++c;
      b.B();
      b = this.fya(a);
      b.C(a.position.x * qe.AM + this.background.ea.x / 2);
      b.D(-a.position.y * qe.AM + this.background.ea.y / 2);
      b.D(b.node.qa - 50);
      b.wla(a.ni());
      return (this.buttons[c] = b);
    }
    Lyb() {
      let a = 0,
        b = this.buttons;
      for (; a < b.length; ) this.bPa(b[a++]);
    }
    bPa(a) {
      let b = !1,
        c = a.os.ob;
      c != null && (b = c.ni());
      a.LG != b && a.wla(b);
      a.Lqb(a.os == this.rE);
    }
    p1a() {
      let a = K.parseInt(this.Rx.fileName.split(".")[1]) - 1;
      this.background = R.aa(
        E.get([338, 336, 334, 332, 330, 328, 326][a]),
        "map" + a,
        this.node,
      );
    }
    q1a() {
      let a = 0,
        b = this.Rx.Fg;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        if (c.type != "FightUnregister" && !c.IDa) {
          let d = this.fya(c);
          d.la(this.S5a());
          d.C(c.position.x * qe.AM + this.background.ea.x / 2);
          d.D(-c.position.y * qe.AM + this.background.ea.y / 2);
          d.D(d.node.qa - 50);
          this.buttons.push(d);
        }
      }
    }
    S5a() {
      return (150 / 225) * qe.AM;
    }
    fya(a) {
      let b = this.appendChild(new Ur(a));
      b.Mka(a.Eg);
      let c = this;
      b.oa.addListener(function () {
        c.Fhb(a);
      });
      b.locked = a.yt();
      b.Ftb(a);
      b.wla(a.ni());
      return b;
    }
    Fhb(a) {
      this.ve.Px || (sb.VS(), this.MT(a), this.Hka());
    }
    Y_a(a) {
      var b = this.FQ(a);
      a = b.node.za;
      b = b.node.qa;
      let c = 3.4028234663852886e38,
        d = null,
        e = this.buttons.length - 1;
      for (; e >= 0; ) {
        let f = this.buttons[e];
        if (f.os.isActive && !f.os.ni()) {
          let g = Math.pow(f.node.za - a, 2) + Math.pow(f.node.qa - b, 2);
          g < c && ((c = g), (d = f));
        }
        --e;
      }
      return d != null ? d.os : null;
    }
    B() {
      super.B();
      this.sm = null;
    }
  }
  qe.g = "431";
  qe.u = O;
  Object.assign(qe.prototype, { j: qe });
  class ci extends O {
    constructor(a, b, c) {
      super();
      this.Tu = m.l();
      a > 0 && ((a = this.appendChild(new Jg(p.o.pf, a))), this.Tu.push(a));
      b > 0 && ((b = this.appendChild(new Jg(Z.Zr, b))), this.Tu.push(b));
      b = 0;
      for (a = c.Qk; b < a.length; ) {
        var d = a[b];
        ++b;
        if (d.NF) {
          var e = v.Tq.AD(d.name);
          if (e != null) {
            debugger;
            d = d.U7a();
            e = this.appendChild(new Jg(e.icon, d));
            this.Tu.push(e);
          }
        }
      }
      b = 0;
      for (a = c.Dr; b < a.length; )
        if (((e = a[b]), ++b, e.NF && ((d = v.e0.$Ba(e.name)), d != null))) {
          debugger;
          e = this.appendChild(new Jg(d.icon, e.value));
          this.Tu.push(e);
        }
      b = 0;
      for (c = c.items; b < c.length; )
        if (
          ((a = c[b]),
          ++b,
          a.NF && ((a = p.items.$b(a.name)), p.o.xa.te(a) == null))
        ) {
          this.Ro(a);
          break;
        }
    }
    ba(a, b) {
      var c = a * 0.75;
      if (this.zW != null) (this.zW.mf(c), this.zW.C(a / 2), this.zW.D(b / 2));
      else if (this.HN != null)
        (this.HN.jqb(c), this.HN.C(a / 2), this.HN.D(b / 2));
      else {
        c = a * 0.05;
        for (
          var d = [],
            e = 0,
            f = 0,
            g = (this.Tu.length - 1) * c,
            h = 0,
            k = this.Tu;
          h < k.length;

        ) {
          let l = k[h];
          ++h;
          let n = l.ba(a - g, b);
          e += n;
          d.push(n);
          l.C(f);
          l.D((b - l.node.ra()) / 2);
          f += n + c;
        }
        a = (a - (e + g)) / 2;
        b = 0;
        for (c = this.Tu; b < c.length; ) ((d = c[b]), ++b, d.C(d.node.za + a));
      }
    }
    B() {
      super.B();
      this.Tu = [];
    }
    Ro(a) {
      var b = Ye.vI(a.fileName);
      a.type == I.$r
        ? ((this.HN = this.appendChild(new oe(b))), this.HN.node.Uc(!1))
        : (this.zW = new Sf(b, this.node));
      a = 0;
      for (b = this.Tu; a < b.length; ) b[a++].Y(!1);
    }
  }
  ci.g = "432";
  ci.u = O;
  Object.assign(ci.prototype, { j: ci });
  class Jg extends O {
    constructor(a, b) {
      super();
      new V();
      this.icon = R.aa(E.get(262), a, this.node);
      this.label = new ea(E.Na(), this.node);
      this.label.La(Z.sc);
      this.label.Ia(64);
      this.label.V(ie.Tr(b));
    }
    ba(a, b) {
      this.icon.la(b / this.icon.ea.y);
      this.label.C(this.icon.ya());
      this.label.Fa(50, b);
      this.label.ua(a * 0.16);
      a = this.label.Pj();
      return this.icon.ya() + (a.N - a.K);
    }
    B() {
      super.B();
    }
  }
  Jg.g = "433";
  Jg.u = O;
  Object.assign(Jg.prototype, { j: Jg });
  class pd extends O {
    constructor() {
      super();
      this.K3 = new V();
    }
    B() {
      super.B();
      this.K3 = null;
    }
    ba() {}
  }
  pd.g = "434";
  pd.u = O;
  Object.assign(pd.prototype, { j: pd });
  class pk extends pd {
    constructor(a, b) {
      super();
      this.Tb = new ea(E.Na(), this.node);
      a.type != "FightBosses" &&
      a.type != "FightBossesReplayable" &&
      a.type != "FightFinalTitan"
        ? this.Tb.V(Y.na(a.description))
        : this.Tb.V(Y.na("^" + a.t6 + "^ ^challengeBoss^"));
      this.Tb.La(Z.sc);
      this.Tb.rd(!0);
      this.Tb.Ia(128);
      this.Tb.Lc(0.6);
      this.By = new ea(E.Na(), this.node);
      this.bna(a);
      this.yy = this.appendChild(
        new bi(
          -1,
          (a.type != "FightBosses" &&
            a.type != "FightBossesReplayable" &&
            a.type != "FightFinalTitan") ||
            !this.Qga(b),
          b,
        ),
      );
    }
    ba(a) {
      this.By.Fa(a, a * 0.16);
      let b;
      this.Tb.Fa(a, a * 0.5);
      this.Tb.ua(a * 0.16);
      b = this.Tb.Pj().X;
      this.yy.D(b + a * 0.2);
      this.yy.ba(a, a * 0.15);
    }
    bna(a) {
      a.type != "FightFinalReplayable"
        ? this.By.R(!1)
        : ((a = K.T(a.pfa())),
          this.By.V(Y.na("^replays^: " + a)),
          this.By.R(!0));
    }
    Qga(a) {
      if (a == null) return !1;
      a = a.yi[a.yi.length - 1].gm(p.o.bb());
      if (a.items.length == 0) return !1;
      a = a.items[0];
      return a.NF ? p.items.$b(a.name) != null : !1;
    }
  }
  pk.g = "435";
  pk.u = pd;
  Object.assign(pk.prototype, { j: pk });
  class nk extends pd {
    constructor(a) {
      super();
      this.Qu = new ea(E.Na(), this.node);
      this.Qu.V(Y.na(a));
      this.Qu.Ia(2);
      this.Qu.La(Z.sc);
      this.Qu.Lc(0.65);
      this.Qu.rd(!0);
    }
    ba(a, b) {
      this.Qu.ua(a * 0.16);
      let c = a * 0.1;
      this.Qu.D(c);
      this.Qu.Fa(a, b - 2 * c);
      this.Qu.pk();
    }
  }
  nk.g = "436";
  nk.u = pd;
  Object.assign(nk.prototype, { j: nk });
  class Wr extends pd {
    constructor(a, b) {
      super();
      this.YKa = -1;
      this.p8 = a;
      let c = new ib();
      c.zm(b.Ne, b.Se, b.Rq);
      this.so = c;
      b = a.jJ() == 1;
      this.bv = R.aa(E.get(262), y.KRa, this.node);
      this.dH = new ea(E.Na(), this.node);
      this.dH.Ia(128);
      this.dH.La(Oa.dd(16711555));
      this.ZB = new ea(E.Na(), this.node);
      this.ZB.Ia(128);
      this.ZB.La(Z.sc);
      this.dH.V(
        Y.na(
          a.dg == 0
            ? "battleComingSoon"
            : b
              ? "battleCompleted"
              : "battleLocked",
        ),
      );
      if (a.type == "FightFinal" || a.type == "FightFinalTitan")
        ((this.oG = this.appendChild($a.Xv(E.get(262), y.TRa))),
          this.oG.oa.addListener(w(this, this.vlb)));
    }
    ba(a, b) {
      this.bv.Ga();
      this.bv.C(a / 2);
      this.bv.la((this.wc.width * 0.95) / this.bv.ea.x);
      let c = this.bv.ra();
      this.bv.D(c);
      this.dH.Fa(a, c);
      this.dH.ua(a * 0.17);
      this.dH.D(c / 2);
      this.ZB.Fa(a, this.bv.ra());
      this.ZB.ua(a * 0.25);
      this.ZB.D(this.bv.qa + (this.bv.ra() / 2) * 1.1);
      this.oG != null &&
        (this.oG.mf(a * 0.5),
        this.oG.C(a / 2),
        this.oG.D(b - (this.oG.node.ra() / 2) * 1.5));
    }
    Z(a) {
      super.Z(a);
      a = p.bw(this.so);
      if (a != null)
        if (a.zR()) this.K3.$(this.p8);
        else {
          var b = a.Pn - a.Yc.aR();
          if (b != this.YKa) {
            this.YKa = b;
            a = Math.floor(b / 3600);
            var c = Math.floor((b % 3600) / 60),
              d = b % 60;
            b = a > 0 ? (a == null ? "null" : "" + a).padStart(2, "0") : "";
            c = (c == null ? "null" : "" + c).padStart(2, "0");
            d = (d == null ? "null" : "" + d).padStart(2, "0");
            a > 0
              ? this.ZB.V("" + b + ":" + c + ":" + d)
              : this.ZB.V("" + c + ":" + d);
          }
        }
    }
    vlb() {
      sb.xm();
      we.F().RU(
        new qg(
          !1,
          "dlgServiceDownloadDemand{%" +
            this.p8.t6 +
            "}{img::UI/Atlases/MiscSprites.video_large usedsize=120}{_$PacksSummarySize}",
          2,
        ),
        function (a) {
          a.kma && ha.F().Vf("QUEST_EVENT_VIDEO_BUTTON_PRESS");
        },
      );
    }
  }
  Wr.g = "437";
  Wr.u = pd;
  Object.assign(Wr.prototype, { j: Wr });
  class Xr extends pd {
    constructor(a, b) {
      super();
      this.p8 = a;
      this.nd = new ea(E.Na(), this.node);
      this.nd.rd(!0);
      this.nd.V(Y.na(b.MD()));
      this.nd.La(Z.sc);
      this.nd.Ia(128);
      this.nd.Lc(0.6);
      this.yy = this.appendChild(
        new bi(
          -1,
          !this.Hab(b) ||
            (a.type != "FightBosses" &&
              a.type != "FightBossesReplayable" &&
              a.type != "FightFinalTitan"),
          b,
        ),
      );
      a.dg != 0 && (this.Nm = this.appendChild(new Wc(v.bBa(b))));
    }
    ba(a, b) {
      super.ba(a, b);
      b = a * 0.5;
      this.nd.ua(a * 0.16);
      this.nd.Fa(a, b);
      this.nd.pk();
      b += 0;
      this.Nm.D(b);
      this.Nm.ba(a, a * 0.25);
      b += this.Nm.node.ra();
      this.yy.D(b + 0);
      this.yy.ba(a, a * 0.15);
    }
    Hab(a) {
      if (a == null) return !1;
      a = a.yi[a.yi.length - 1].gm(p.o.bb());
      if (a.items.length == 0) return !1;
      debugger;
      a = a.items[0];
      return a.NF ? p.items.$b(a.name) != null : !1;
    }
  }
  Xr.g = "438";
  Xr.u = pd;
  Object.assign(Xr.prototype, { j: Xr });
  class ok extends pd {
    constructor(a) {
      super();
      var b = a.Oz();
      if (b.length != 0) {
        this.kH = new ea(E.Na(), this.node);
        this.kH.Ia(128);
        this.kH.La(Oa.dd(5517339));
        this.kH.V(Y.na("survive_min"));
        this.iH = new ea(E.Na(), this.node);
        this.iH.Ia(128);
        this.iH.La(Oa.dd(5517339));
        this.iH.V(Y.na("survive_max"));
        var c = b[0].yi;
        if (!(c.length < 2)) {
          var d = p.o.bb();
          b = c[1].gm(d);
          c = c[c.length - 1].gm(d);
          d = b.Xo;
          var e = c.Xo,
            f = b.Ob,
            g = c.Ob;
          f = v.Xk(f);
          g = v.Xk(g);
          var h = 105;
          a.type == "FightBossesIntermission" && (h = 80);
          this.oua = this.appendChild(new ci(f, d, b, 0, 100, h));
          this.nua = this.appendChild(new ci(g, e, c, 0, 100, h));
          a.type == "FightBossesIntermission" &&
            ((this.nd = new ea(E.Na(), this.node)),
            this.nd.V(Y.na(a.description)),
            this.nd.La(Z.sc),
            this.nd.rd(!0),
            this.nd.Lc(0.6),
            this.nd.Ia(2));
        }
      }
    }
    ba(a, b) {
      super.ba(a, b);
      let c = 0;
      this.nd != null &&
        (this.nd.Fa(a, b * 0.25),
        this.nd.ua(a * 0.16 * 0.8),
        this.nd.pk(),
        this.nd.D(0),
        (b = this.nd.Pj()),
        (c = b.X - b.P),
        (c += a * 0.1));
      this.kH.Fa(a, a * 0.1);
      this.kH.ua(a * 0.16 * 0.8);
      this.kH.D(c);
      c += a * 0.12;
      this.oua.ba(a, a * 0.15);
      this.oua.D(c);
      c += a * 0.2;
      this.iH.Fa(a, a * 0.1);
      this.iH.ua(a * 0.16 * 0.8);
      this.iH.D(c);
      c += a * 0.12;
      this.nua.ba(a, a * 0.15);
      this.nua.D(c);
    }
  }
  ok.g = "439";
  ok.u = pd;
  Object.assign(ok.prototype, { j: ok });
  class sk extends pd {
    constructor() {
      super();
      this.xy = m.l();
      this.xG = 0;
      this.EU = R.Ed(16711935, 1, 1, this.node);
      this.COa = this.appendChild($a.bJ(this.EU.L));
      this.COa.Y(!0);
      this.Be = 0;
    }
    Obb() {
      this.COa.oa.addListener(w(this, this.Wxb));
      this.lna();
      this.Be = 1;
      this.time = 0;
    }
    Z(a) {
      super.Z(a);
      a = Nb.challenge.Mza;
      let b = Nb.challenge.transitionDuration;
      switch (this.Be) {
        case 1:
          if (this.fd(a) < 1) break;
          this.time = 0;
          this.Be = 2;
          break;
        case 2:
          ((a = this.fd(b)),
            this.Aa.wa(1 - dc.Nn()(a)),
            this.Asa.wa(dc.PK()(a)),
            a < 1 || ((this.time = 0), (this.Be = 1), this.iHa()));
      }
    }
    lna() {
      var a = this.xG + 1;
      a >= this.xy.length && (a = 0);
      this.Aa = this.xy[this.xG];
      this.Asa = this.xy[a];
      a = 0;
      let b = this.xy;
      for (; a < b.length; ) b[a++].wa(0);
      this.Aa.wa(1);
    }
    Wxb() {
      this.Aa.wa(0);
      this.Asa.wa(1);
      this.time = 0;
      this.Be = 1;
      this.iHa();
    }
    iHa() {
      this.xG++;
      this.xG >= this.xy.length && (this.xG = 0);
      this.lna();
    }
  }
  sk.g = "43A";
  sk.u = pd;
  Object.assign(sk.prototype, { j: sk });
  class qk extends sk {
    constructor(a, b) {
      super();
      this.tUa = this.appendChild(new as(a, b));
      this.nd = new ea(E.Na(), this.node);
      this.nd.La(Z.sc);
      this.nd.Ia(2);
      this.nd.rd(!0);
      this.nd.Lc(0.6);
      this.By = new ea(E.Na(), this.node);
      this.bna(a);
      this.yy = this.appendChild(
        new bi(
          -1,
          !this.Qga(b) ||
            (a.type != "FightBosses" &&
              a.type != "FightBossesReplayable" &&
              a.type != "FightFinalTitan"),
          b,
        ),
      );
      this.Nm = this.appendChild(new Wc(v.bBa(b)));
      this.Nm.Y(a.dg != 0);
      this.Wyb(a, b);
      this.EU.yF();
    }
    ba(a, b) {
      super.ba(a, b);
      let c = b * 0.05;
      Ya.zw && (c *= (N.lc - 0.4) / 0.5);
      this.tUa.ba(a, b * 0.3);
      b = b * 0.35 + c;
      this.Nm.D(b);
      this.Nm.ba(a, a * 0.25);
      b += this.Nm.node.ra();
      this.yy.D(b);
      this.yy.ba(a, a * 0.15);
      this.nd.Fa(a, a * 0.2);
      this.nd.ua(a * 0.1);
      this.nd.GL((a * 0.15) | 0);
      this.nd.Uk();
      this.nd.D(this.Nm.node.qa);
      this.EU.lk(a, this.Nm.node.ra());
      this.EU.C(0);
      this.EU.D(this.Nm.node.qa);
    }
    Wyb(a, b) {
      if (a.type == "FightChallenge" || a.type == "FightReplayable") {
        a = b.MD();
        b = !b.zR();
        let c = !(a == null || a == "");
        this.nd.R(!b && c);
        c && (this.nd.V(Y.na(a)), this.Sbb());
      } else (this.nd.R(!1), this.Nm.node.wa(1));
    }
    bna(a) {
      a.type != "FightReplayable" && a.type != "FightBossesReplayable"
        ? this.By.R(!1)
        : (this.By.V(Y.na("^replays^: " + a.pfa())), this.By.R(!0));
    }
    Qga(a) {
      if (a == null) return !1;
      a = a.yi[a.yi.length - 1].gm(p.o.bb());
      let b = a.items;
      if (b == null || b.length == 0) return !1;
      a = a.items[0];
      return a.NF ? p.items.$b(a.name) != null : !1;
    }
    Sbb() {
      this.xy.length = 0;
      this.xy.push(this.nd);
      this.xy.push(this.Nm.node);
      this.xG = Nb.challenge.Tya == 0 ? 1 : 0;
      this.lna();
      this.Obb();
    }
  }
  qk.g = "43B";
  qk.u = sk;
  Object.assign(qk.prototype, { j: qk });
  class Wc extends O {
    constructor(a) {
      super();
      a = Wc.aBa(a);
      this.Vd = new Vf(y.NRa, Z.zQa[Wc.kD.indexOf(a)]);
      this.Vd.VT(100);
      this.Vd.JF(100);
      this.node.appendChild(this.Vd.node);
      this.appendChild(this.Vd);
      this.label = new ea(E.Na(), this.node);
      this.label.V(Y.na(a.first));
      this.label.La(Z.sc);
      this.label.Ia(128);
    }
    ba(a) {
      this.Vd.mf(a);
      let b = this.Vd.node.ra();
      this.label.ua(a * 0.16);
      this.label.Fa(a, this.label.effect.fontSize);
      this.label.D(b);
    }
    static aBa(a) {
      let b = Wc.kD[0],
        c = 0,
        d = Wc.kD;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        e.second < a && b.second < e.second && (b = e);
      }
      return b;
    }
    static h3a(a) {
      Wc.kD.length = 0;
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        let c = a[b++],
          d = c.attributes.get("Name");
        Wc.kD.push(
          new Ca(
            d != null ? d : "",
            u.H(c.attributes.get("RatingRatioTreshold")),
          ),
        );
      }
    }
  }
  Wc.g = "43C";
  Wc.u = O;
  Object.assign(Wc.prototype, { j: Wc });
  class tk extends $a {
    constructor() {
      super();
      this.EPa = !1;
      this.pra = new Eg();
      this.Ki = null;
      this.Qi = new Xe();
      this.appendChild(this.Qi);
      let a = this.Qi.label;
      a.La(Z.sc);
      a.Lc(0.5);
      a.Ia(128);
      a.Uc(!1);
    }
    B() {
      this.Zg || super.B();
    }
    Cla(a) {
      this.Ki != a && ((this.Ki = a), this.refresh());
    }
    refresh() {
      this.Tmb();
      this.Ymb();
    }
    Tmb() {
      if (this.Ki != null) {
        if (this.Ki.fj != null) debugger;
        else {
          let a = this.Ki.image;
          if (Cb(a, "/") && Cb(a, "raid_starter_pack")) debugger;
          if (Cb(a, "EnchantChest") && Zf(a, "_Sales_sale")) debugger;
          if (Zf(a, "_zone7") || Zf(a, "_coins_platinum"))
            a = nf(a, a.lastIndexOf("img_"), 4);
          Cb(a, "Coins") && Zf(a, "_sale") && (a = this.e6a(a));
          a == "Textures/buttons/map/starter_pack" && (a = "starter_pack");
          try {
            this.ix(E.get(340), a);
          } catch (b) {
            this.ix(E.get(262), y.hoa);
          }
          this.W.j5();
        }
        this.Ki.H1 != null &&
          (this.pra.C(this.Ki.H1.x), this.pra.D(this.Ki.H1.y));
      }
    }
    e6a(a) {
      debugger;
      Z.rQa.includes(a) && (a = nf(a, a.lastIndexOf("_") - 2, 2));
      return a;
    }
    Ymb() {
      if (this.Ki != null) {
        var a = this.Qi.label;
        if (this.EPa) {
          var b = this.W.ea,
            c = b.x;
          b = b.y;
          a.Fa(c, b);
          a.C(-c / 2);
          a.D((-b / 2) * 1.1);
          a.ua(45);
        } else (a.Fa(100, 100), a.D(-50), a.ua(40));
        a = -1;
        c = this.Ki.Mc;
        c != null && c != ""
          ? ((c = p.o.Bl.lJ(this.Ki.Mc)), c != null && (a = c.Sv))
          : (a = this.Ki.An);
        if ((c = a > 0))
          (this.Qi.MMa(Ee.o7),
            this.Qi.dub(Ee.YTa),
            this.Qi.rub(Ee.ZTa),
            this.Qi.Jub(Ee.$Ta),
            (this.Qi.hD = " "),
            (this.Qi.Bt = !0),
            (this.Qi.XD = !1),
            (this.Qi.Gka = 2),
            (this.Qi.cE = !1),
            this.Qi.tla(a - p.Dc));
        this.Qi.Y(c);
      }
    }
  }
  tk.g = "43D";
  tk.u = $a;
  Object.assign(tk.prototype, { j: tk });
