// 057-ui-components.js
// Domain: combat  |  18 class(es)  |  tree root(s): ph, Db, ae, Dx
// Edit here. Run `npm run build` to reassemble the full bundle.
  class ph {
    constructor(a, b, c, d, e, f, g, h, k, l, n) {
      this.ge = null;
      this.tZ = "";
      this.IL = this.uZ = !1;
      this.Kwa = "EButtonDark";
      this.xHa = "EButtonWhite";
      this.Jwa = !0;
      this.Lwa = "";
      this.r3 = !0;
      this.yHa = "";
      this.zU = !0;
      this.text = "";
      this.z1 = !0;
      this.Iab = a;
      this.text = b;
      this.buttons = c;
      this.yHa = d;
      this.Lwa = e;
      this.xHa = f;
      this.Kwa = g;
      this.IL = h;
      this.uZ = k;
      this.tZ = l;
      this.ge = n;
    }
  }
  ph.g = "3EF";
  Object.assign(ph.prototype, { j: ph });
  class Pd extends od {
    constructor() {
      super();
      this.eW = this.RB = 0;
      this.ny = 1;
      this.RH = !0;
      this.ro = 0;
      this.eY = !0;
      this.ci = m.l();
      this.$g = null;
      this.z$ = "";
      this.JG = !0;
      this.yV = null;
      this.wy = "";
      this.Hsa = this.Lpa = "EButtonDark";
      this.tv = new H(0, 0, 0, 1);
      this.F$ = this.af = this.Mu = null;
      this.qaa = 2147483647;
      this.t9 = !1;
      this.aC = 0;
      this.SV = m.l();
      this.ys = null;
      this.mW = !1;
      this.hv = 0;
      this.kb = new ea(E.Na(), this.Oe);
      this.No = new ea(E.Na(), this.Oe);
      this.No.R(!1);
      this.EO = new Ea(this.Oe);
      this.Hy = R.aa(E.get(256), y.sB, this.node);
      this.Wx = R.aa(E.get(256), y.yM, this.node);
      this.Sb = new Bb("EButtonDark");
      this.Sb.Qb(125);
      this.Cd.appendChild(this.Sb);
      this.Kb = new Bb("EButtonDark");
      this.Kb.Ym(null, y.tB);
      this.Cd.appendChild(this.Kb);
      this.Kb.Y(!1);
      this.Kb.Qb(125);
    }
    nBa() {
      return this.Mu != null && this.Mu.active ? this.Mu.node : this.$g.node;
    }
    bj(a) {
      let b = "";
      a != null &&
        ((b = a.title),
        (this.z$ = a.i4),
        (this.JG = a.jg),
        (this.ci = a.tk),
        (this.yV = a.Jv),
        (this.eY = a.mcb),
        (this.wy = a.Wfb),
        (this.Hsa = a.Vfb),
        (this.mq = a.FZa),
        (this.Lpa = a.EZa),
        (this.hv = a.Oha),
        a.ge != null && this.addEventListener(0, a.ge));
      Hb.Qh.addListener(w(this, this.Cx));
      this.im(b, this.wy, this.mq, 0);
    }
    Z(a) {
      super.Z(a);
      this.Sb.active && L.J.Uj().Eb(32) && this.Sb.oa.$(this.Sb.ee);
    }
    Ea(a) {
      super.Ea(a);
    }
    B() {
      super.B();
      Hb.Qh.removeListener(w(this, this.Cx));
    }
    close() {
      debugger;
    }
    dB() {
      this.yV != null
        ? ((this.Mu = new sr(this.yV)),
          this.Mu.C(-450 + this.RB),
          this.Mu.D(this.eW),
          this.Mu.Uc(!1),
          this.node.appendChild(this.Mu.node))
        : this.lla(this.z$);
      this.mW
        ? this.Oqb()
        : (this.No.R(!1), this.ci.length > 0 && this.hna(this.ci[0]));
    }
    KF() {
      if (this.mW) {
        debugger;
        this.ro = this.ci.length - 1;
      }
      this.ro + 1 < this.ci.length && this.SLa(this.ci[this.ro].NC);
      this.ro + 1 == this.ci.length
        ? ((this.Tl = this.wy == "" ? this.ci[this.ro].NC : this.wy), this.Q5())
        : this.ci.length == 0 &&
          ((this.Tl = this.wy == "" ? this.Tl : this.wy), this.Q5());
    }
    Q5() {
      super.KF(this.eY ? 3 : 1);
      this.Sb.oa.removeListener(w(this, this.He));
      this.Sb.oa.removeListener(w(this, this.g3));
      this.Sb.oa.addListener(w(this, this.g3));
      this.Kb.Y(this.eY);
      this.eY &&
        (this.Kb.oa.removeListener(w(this, this.He)),
        this.Kb.oa.addListener(w(this, this.Mfb)));
      this.wI();
    }
    lla(a) {
      var b = this.$g;
      b != null && b.B();
      a = v.fJa(a);
      this.$g = new oe(a.fileName);
      this.$g.node.Uc(!1);
      this.node.appendChild(this.$g.node);
      this.appendChild(this.$g);
      b = -450;
      let c = a.fileName;
      Object.prototype.hasOwnProperty.call(Pd.Foa.v, c) &&
        (b = -450 - Pd.Foa.v[c]);
      Object.prototype.hasOwnProperty.call(Pd.Goa.v, c) &&
        this.$g.D(Pd.Goa.v[c]);
      this.$g.C(b + this.RB);
      this.$g.la(1.8 * this.ny);
      a.ip && this.$g.ip();
    }
    wI() {
      var a = this.Sb != null && this.Sb.active;
      let b = this.Kb != null && this.Kb.active;
      a && this.Sb.C(850 - this.Sb.width / 2);
      b &&
        this.Kb.C(
          a
            ? this.Sb.node.za - 20 - (this.Sb.width + this.Kb.width) / 2
            : (1680 - this.Kb.width) / 2 - 850,
        );
      this.Sb.xc(600);
      this.Sb.Qb(125);
      this.Kb != null && (this.Kb.xc(600), this.Kb.Qb(125));
      a &&
        !b &&
        ((a = this.Sb),
        a.C(a.node.za + -50),
        (a = this.Sb),
        a.xc(a.width + 50));
    }
    hna(a) {
      this.Mbb(a.$I);
      this.nj(a.text);
      if (a.Me != null) debugger;
    }
    ftb(a) {
      this.t9 = !0;
      this.aC = a.Mc;
      this.qaa = a.id;
      this.af = a.Cu;
      this.F$ = a.J4;
      this.aC <= 0 && this.He(this.qaa);
      this.ina();
    }
    SLa(a) {
      this.Tl = a;
      this.oR(this.Sb, 1);
      this.Sb.oa.removeListener(w(this, this.He));
      this.Sb.oa.removeListener(w(this, this.g3));
      this.Sb.oa.addListener(w(this, this.g3));
      this.wI();
    }
    Cx() {
      this.zq.length > 0 &&
        (m.forEach(this.zq, function (a) {
          a.update();
        }),
        this.N_a());
      this.t9 && (this.aC <= 0 && this.He(this.qaa), this.hZa(), this.ina());
    }
    hZa() {
      this.af == null
        ? this.F$ == null
          ? --this.aC
          : (this.aC = v.eJ(this.F$.ZK))
        : (this.aC = v.eJ(this.af.Dh));
    }
    Mbb(a) {
      this.kb.ua(100);
      this.kb.La(a);
      this.kb.rd(!0);
      this.kb.Lc(0.9);
      this.kb.Fa(this.JG ? 900 : 1680, 800);
    }
    g3(a) {
      this.ro++;
      this.ro == this.ci.length - 1
        ? (this.hna(this.ci[this.ro]),
          (this.Tl = this.wy == "" ? this.ci[this.ro].NC : this.wy),
          this.Q5(),
          this.layout())
        : this.ro >= this.ci.length
          ? this.He(a)
          : (this.hna(this.ci[this.ro]),
            this.SLa(this.ci[this.ro].NC),
            this.wI(),
            this.layout());
    }
    Mfb(a) {
      super.He(a);
    }
    nj(a) {
      this.kb.V(Y.na(a));
      this.kb.gDa() && this.kb.Uk();
      this.Md = Math.max(this.kb.jw(), this.hv);
      this.JG && this.Xva(this.kb);
      this.wI();
      this.oba();
    }
    oba() {
      if (this.tv.x != 0) debugger;
      if (this.tv.y != 0) debugger;
      var a = this.kb;
      a.C(a.za + this.tv.x);
      a = this.kb;
      a.D(a.qa + this.tv.y);
    }
    Xva(a) {
      if (!this.JG) debugger;
      this.RH ? a.C(-100 + this.RB) : a.C(0);
    }
    ina() {
      if (this.No != null && this.t9) {
        var a = Xe.Afa(this.aC, !0, !0, !0, !0, !1, !0);
        this.No.V(a);
        this.No.R(!0);
        this.Xva(this.No);
      }
    }
    Wub() {
      var a = this.ys;
      a != null && a.B();
      this.ys = new Ea();
      this.Oe.appendChild(this.ys);
      var b = (a = 0);
      let c = this.SV;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        let e = R.aa(E.get(250), y.zM, this.ys);
        e.Kd("priceBackground");
        e.Ga();
        e.xc(1200);
        e.Qb(114);
        e.D(this.Md + e.ra() / 2);
        let f = new ea(E.Na(), this.ys);
        f.ua(d.fontSize > 0 ? d.fontSize : 100);
        f.La(d.$I);
        f.Ia(128);
        f.Fa(1680, 100);
        f.C(-840);
        f.D(e.qa - e.ra() / 2);
        f.V(Y.na(d.text));
        a += e.ra();
        d.Me != null && this.qva(f, d, this.ys);
      }
      a += 50;
      b = this.ys;
      b.D(b.qa + 50);
      if (this.$g != null || this.Mu != null)
        ((b = this.nBa()), b.D(b.qa - a / 2));
      this.Md += a;
    }
    oR(a, b) {
      a.Qf = !0;
      let c = "",
        d = 0,
        e = "EButtonWhite";
      b == 2
        ? ((c = this.mq), (e = this.Lpa), (d = 0))
        : b == 1 && ((c = this.Tl), (e = this.Hsa), (d = 1));
      a.YT(e);
      a.V(Y.na(c));
      a.ee = d;
      a.oa.addListener(w(this, this.He));
    }
    qva(a, b, c) {
      this.zq.push(b.Me);
      let d = this.m2a(b);
      d.vrb(a);
      b.Me.Ala(d);
      b.Me.update();
      c.appendChild(d.node);
      this.appendChild(d);
    }
    Oqb() {
      this.EO.R(!0);
      for (var a = this.EO.iterator(); a.yd(); ) a.next().B();
      this.Md = this.SV.length = 0;
      a = this.JG ? 900 : 1680;
      let b = 0,
        c = 0,
        d = this.ci.length;
      for (; c < d; ) {
        let e = this.ci[c++];
        if (e.UC)
          (this.No.V("0"),
            this.No.La(Z.h7),
            this.No.ua(100),
            this.No.R(!1),
            this.No.D(b),
            (b += this.No.jw() + e.offsetY),
            this.ftb(e));
        else
          switch (e.contentType) {
            case 0:
              let f = new ea(E.Na(), this.EO);
              f.rd(!0);
              f.ua(e.fontSize > 0 ? e.fontSize : 100);
              f.Fa(a, f.effect.fontSize);
              f.Lc(0.9);
              f.La(e.$I);
              f.Ia(1);
              let g = Y.na(e.text);
              E.get(262);
              g = Eb.replace(
                g,
                "<image>level</image>",
                "<image y=-0.1 s=0.6>level</image>",
              );
              g = Eb.replace(
                g,
                "<image>energy</image>",
                "<image y=0.2>energy</image>",
              );
              g = Eb.replace(
                g,
                "<image>ruby</image>",
                "<image s=0.8>ruby</image>",
              );
              g = Eb.replace(
                g,
                "<image>gold</image>",
                "<image s=0.8>gold</image>",
              );
              g = g.replace(
                RegExp("<color=#(\\w+)>(.*?)</color>", "g"),
                "<style color=$1>$2</style>",
              );
              f.V(g);
              f.D(b);
              b += f.jw() + e.offsetY;
              if (e.offsetY != 0) debugger;
              this.RH ? f.C(this.JG ? -100 : 0) : f.C(e.offsetX);
              e.Me != null && this.qva(f, e, this.EO);
              this.Md += f.jw();
              break;
            case 1:
              this.SV.push(e);
              break;
            default:
              debugger;
          }
      }
      this.SV.length > 0 && this.Wub();
    }
    m2a(a) {
      let b = new Xe();
      b.KJ = a.Me.KJ;
      b.EJ = a.Me.EJ;
      b.DJ = a.Me.DJ;
      b.Bt = a.Me.Bt;
      b.hD = a.Me.hD;
      b.eD = a.Me.eD;
      b.kM = a.Me.kM;
      b.LJ = a.Me.LJ;
      b.FJ = a.Me.FJ;
      b.cE = a.Me.cE;
      b.XD = a.Me.XD;
      b.label.ua(100);
      b.label.La(a.Me.color);
      b.Gka = a.Me.Bt ? 4 : 3;
      b.tNa = !0;
      b.MMa(a.Me.Bt ? Ee.o7 : "");
      return b;
    }
    N_a() {
      let a = 0,
        b = this.zq;
      for (; a < b.length; )
        if (b[a++].time <= 0) {
          this.He(0);
          break;
        }
    }
    lMa() {
      this.ny = 1;
    }
    kMa(a) {
      this.eW = a;
    }
    jMa(a) {
      this.RB = a;
      if (this.$g != null) {
        let b = this.$g;
        b.C(b.node.za + a);
      }
    }
    BMa(a) {
      this.tv = a;
    }
    CMa(a) {
      this.RH = a;
    }
  }
  Pd.g = "3F0";
  Pd.u = od;
  Object.assign(Pd.prototype, { j: Pd });
  class vj extends Pd {
    constructor() {
      super();
      this.hua =
        this.Qoa =
        this.nta =
        this.bu =
        this.iua =
        this.TX =
        this.Roa =
        this.cV =
        this.ota =
        this.zX =
        this.CB =
        this.Ij =
        this.pj =
        this.Lk =
        this.xi =
          null;
      this.Qpa = this.sC = this.Ota = !1;
      this.Ppa = "";
      this.ZM = 0;
      this.AG = null;
    }
    bj(a) {
      this.ci = a.tk;
      this.bu = a.bu;
      this.nta = a.A2;
      this.zX = a.tha;
      this.ota = a.Ldb;
      this.Qoa = a.cfb;
      this.cV = a.efb;
      this.Roa = a.dfb;
      this.hua = a.X4;
      this.TX = a.jka;
      this.iua = a.cpb;
      if ((this.Ota = a.nNa)) debugger;
      this.mW = a.CY;
      this.sC = a.IL;
      this.Qpa = a.uZ;
      this.Ppa = a.tZ;
      this.ZM = a.e1a;
      this.hv = a.Oha;
      if (this.hv != 0) debugger;
      a.ge != null && ((this.AG = a.ge), this.addEventListener(0, a.ge));
      Hb.Qh.addListener(w(this, this.Cx));
      this.z$ = a.i4;
      this.yV = a.Jv;
      let b = this;
      if (a.qvb) {
        debugger;
        this.Ij = this.appendChild(new Rf("EButtonDark", null));
        this.Ij.ee = 100;
        this.Ij.oa.addListener(function () {
          b.He(0);
        });
      }
      super.im(a.title, "dlgButtonWait", "dlgStoryBtnGoodbye", 0);
    }
    start() {
      this.xi = this.Cd.appendChild(new Rf("EButtonDark", null));
      this.Lk = this.Cd.appendChild(new Rf("EButtonDark", null));
      this.pj = this.Cd.appendChild(new Rf("EButtonDark", null));
      super.start();
      this.$g != null &&
        this.$g.name == "img_unlimited_energy" &&
        this.xi.ROa(this.pj);
      var a = this.bu;
      if (
        a != null &&
        a != "" &&
        this.ys != null &&
        ((a = this.ys.aw("priceBackground")), a != null)
      ) {
        let b = R.aa(E.get(340), this.bu, this.ys);
        b.Ga();
        b.la(2);
        b.C(-a.ya() / 2);
        b.D(a.qa);
      }
      this.c9 == "Unlimited_Energy" &&
        (Qb.Fe(L.J.au, function (b) {
          return Kb.Ve(b, "sku") == "Unlimited_Energy";
        }) ||
          this.pj.Y(!1));
    }
    B() {
      super.B();
      Hb.Qh.removeListener(w(this, this.Cx));
    }
    KF() {
      this.Vub();
      if (this.mW && this.PYa() < 3) {
        this.Sb = this.Jea(!0);
        let a = this.Jea(!1);
        this.Kb = a != this.Sb ? a : null;
        this.wI();
      }
      this.oba();
    }
    wBa() {
      return this.Jea(!1).ee;
    }
    Vub() {
      this.Kb != null && this.Kb.Y(!1);
      this.Sb != null && this.Sb.Y(!1);
      this.xga(this.xi, this.nta, this.zX, 0);
      this.xi.oa.removeListener(w(this, this.MC));
      this.xi.oa.addListener(w(this, this.MC));
      var a = this.zX;
      this.xi.Y(!(a == null || a == ""));
      try {
        this.xi.tL(this.ota);
      } catch (b) {}
      this.xga(this.Lk, this.Qoa, this.cV, 2);
      this.Lk.oa.removeListener(w(this, this.MC));
      this.Lk.oa.addListener(w(this, this.MC));
      a = this.cV;
      this.Lk.Y(!(a == null || a == ""));
      this.pj.tL(this.Roa);
      this.xga(this.pj, this.hua, this.TX, 1);
      this.pj.oa.removeListener(w(this, this.MC));
      this.pj.oa.addListener(w(this, this.MC));
      a = this.TX;
      this.pj.Y(!(a == null || a == ""));
      this.pj.tL(this.iua);
      this.xi.C(-(this.Lk.width + -30));
      this.Lk.C(0);
      this.pj.C(this.Lk.width + -30);
      this.Ij != null &&
        (this.Ij.D(this.xi.node.qa),
        this.Ij.C(this.xi.node.za - (this.xi.width + -30)));
      this.sC &&
        ((this.CB = new ea(E.Na(), this.Oe)),
        this.CB.Fa(500, 100),
        this.CB.ua(100),
        this.CB.La(Z.sc),
        this.CB.V(Y.na(this.Ppa)),
        this.CB.C(-250),
        this.CB.D(this.Md + 50),
        (this.qs = new dk()),
        this.Oe.appendChild(this.qs.node),
        this.appendChild(this.qs),
        this.qs.L5(this.Qpa),
        (this.qs.ee = 3),
        this.qs.oa.addListener(w(this, this.MC)),
        this.qs.C(-(250 + (this.qs.W.ya() / 2) * 1.1)),
        this.qs.D(this.qs.W.ra() / 2 + this.Md + 50),
        (this.Md += 150));
    }
    Q5() {
      debugger;
    }
    nj(a) {
      this.kb.V(Y.na(a));
      this.kb.C(0);
      this.RH &&
        this.kb.C(
          this.nBa().za - this.RB + this.$g.node.Db * this.$g.size * 0.35,
        );
      this.Md = this.kb.jw();
      this.ina();
      this.wI();
    }
    PYa() {
      let a = 0;
      var b = this.zX;
      b != null && b != "" && (a = 1);
      b = this.TX;
      b != null && b != "" && ++a;
      b = this.cV;
      b != null && b != "" && ++a;
      return a;
    }
    Jea(a) {
      return a
        ? this.pj.active
          ? this.pj
          : this.Lk.active
            ? this.Lk
            : this.xi.active
              ? this.xi
              : null
        : this.xi.active
          ? this.xi
          : this.Lk.active
            ? this.Lk
            : this.pj.active
              ? this.pj
              : null;
    }
    xga(a, b, c, d) {
      a.Y(!0);
      a.YT(b);
      b = Y.na(c);
      b.indexOf("<image>ruby</image>") != -1 &&
        (b = b.replace(RegExp("<image>", ""), "<image s=0.6 y=-0.1>"));
      a.V(b);
      a.ee = d;
    }
    MC(a) {
      switch (a) {
        case 0:
          this.He(a);
          break;
        case 1:
          this.He(a);
          break;
        case 2:
          this.He(a);
          break;
        case 3:
          this.AG != null && this.AG(this.qs.m9 ? 3 : 4);
      }
    }
    oba() {
      if (this.tv.x != 0) debugger;
      let a = this.EO;
      a.D(a.qa + this.tv.y);
    }
  }
  vj.g = "3F1";
  vj.u = Pd;
  Object.assign(vj.prototype, { j: vj });
  class oh extends od {
    constructor() {
      super();
      this.d8 = this.c8 = null;
      this.PN = this.GO = "";
      this.hN = this.GM = this.Mb = this.Daa = 0;
      this.bh = null;
      this.sC = !1;
      this.kb = new ea(E.Na(), this.Oe);
      this.kb.Fa(950, 550);
      this.kb.ua(125);
      this.kb.Ia(2);
      this.kb.La(Z.sc);
      this.kb.rd(!0);
      this.kb.Lc(0.9);
      this.kb.C(-475);
      this.Hy = R.aa(E.get(256), y.sB, this.node);
      this.Wx = R.aa(E.get(256), y.yM, this.node);
      this.Sb = new Bb("EButtonDark");
      this.Sb.Qb(125);
      this.Cd.appendChild(this.Sb);
      this.Kb = new Bb("EButtonDark");
      this.Kb.Ym(null, y.tB);
      this.Cd.appendChild(this.Kb);
      this.Kb.Y(!1);
      this.Kb.Qb(125);
    }
    bj(a) {
      a == null
        ? ((this.hN = this.GM = this.Daa = this.Mb = 0),
          (this.bh = null),
          (this.sC = !1))
        : ((this.Mb = a.value),
          (this.Daa = a.Yzb),
          (this.GM = a.action),
          (this.hN = a.U2a),
          (this.bh = a.KS),
          (this.sC = a.IL));
      let b;
      switch (this.GM) {
        case 0:
          b = "shopBuy";
          this.GO = "dlgBuyTitle";
          this.PN = "dlgBuyMessage";
          break;
        case 1:
          b = "dlgUpgradeButton";
          this.GO = "dlgUpgradeTitle";
          this.PN = "dlgUpgradeMessage";
          break;
        default:
          b = "OK";
      }
      this.hN > 0 &&
        (this.GM != 1
          ? ((b = "dlgOrderButton"),
            (this.GO = "dlgOrderTitle"),
            (this.PN = "dlgOrderMessage"))
          : ((b = "dlgUpgradeButton"),
            (this.GO = "dlgUpgradeTitle"),
            (this.PN = "dlgUpgradeMessage")));
      if (this.sC) {
        debugger;
        this.c8 = new dk();
        this.c8.L5(!1);
        this.d8 = new ea(E.Na(), this.node);
        this.d8.V(Y.na("dlgRaidFastBuy"));
        this.d8.R(!0);
      }
      this.Tl = b;
      a != null && a.ge != null && this.addEventListener(0, a.ge);
      this.im(this.GO, b, "CANCEL", 3);
    }
    dB() {
      var a = "img::";
      switch (this.Mb) {
        case 0:
          a = "img::" + p.o.pf;
          break;
        case 1:
          a = "img::" + Z.Zr;
      }
      a = "dlgCurrencyQuestion{" + a + "}{" + this.Daa + "}";
      a = Y.na(this.PN) + "\n" + Y.na(a);
      if (this.hN > 0) {
        let b = "";
        b = this.GM == 0 ? "dlgTimeDelivery" : "dlgTimeUpgrade";
        let c = function (f) {
            return f < 10 ? "0" + f : f == null ? "null" : "" + f;
          },
          d = ui.sAa(this.hN),
          e = "";
        e =
          d.hR > 0
            ? c(d.hR) + ":" + c(d.R2) + ":" + c(d.h5)
            : c(d.R2) + ":" + c(d.h5);
        a += "\n" + Y.na(b, e);
      }
      this.kb.V(a);
      this.Md = this.kb.jw();
    }
    He(a) {
      if (this.sC && (a == null ? 0 : a) > 0) {
        let b;
        b = this.c8.m9 ? !1 : !0;
        p.o != null && p.o.Ssb(b);
      }
      super.He(a);
    }
  }
  oh.g = "3F2";
  oh.u = od;
  Object.assign(oh.prototype, { j: oh });
  class uh extends ma {
    constructor(a, b) {
      super(a, b);
    }
    ut() {
      return [];
    }
    HD() {
      return 0;
    }
    init(a) {
      super.init(a);
      this.yya = this.ld = 0;
      this.view = this.To(Wk);
    }
    Kn() {
      this.load();
    }
    Ea(a) {
      super.Ea(a);
      if (this.state == 3)
        switch (this.ld) {
          case 0:
            this.vMa(this.ri.c1(), 0, 95);
            this.ri.pp() &&
              (Ja.qyb(),
              (this.vE = new Fv()),
              this.vE.addModule(new ep()),
              this.vE.addModule(new gp()),
              this.vE.addModule(new dp()),
              this.vE.addModule(new fp()),
              this.vE.addModule(new hp()),
              (this.ld = 1));
            break;
          case 1:
            (this.vE.update(), this.vMa(this.vE.T$a(), 95, 100));
        }
    }
    load() {
      let a = [];
      fa.add(a, L.J.Mna);
      fa.add(a, G.uf("lang/" + G.lp() + ".xml"));
      this.ri = G.load(a);
      a = a.concat(Object.create(Uf.prototype).ut());
      this.ri = G.load(a);
    }
    vMa(a, b, c) {
      a = Math.round(b + (a / 100) * (c - b));
      a != this.yya && ((this.yya = a), this.view.v5(a), ya.Iqb(a));
    }
    Yq() {
      return 0.25;
    }
  }
  uh.g = "3F3";
  uh.u = ma;
  Object.assign(uh.prototype, { j: uh });
  class Tk extends ma {
    constructor(a, b) {
      super(a, b);
    }
    HD() {
      return 0;
    }
    ut() {
      return [];
    }
    Kn() {
      let a = la.flags.tD;
      la.flags.tD = !1;
      la.flags.save();
      Ld.Evb && !la.flags.wJ && !a && la.flags.P1 < 2
        ? ((this.video = new Xk(9, !0)),
          this.video.Tc.addListener(w(this, this.Tc)))
        : this.Tc();
    }
    Z(a) {
      super.Z(a);
      this.next && (this.RC(uh), (this.next = !1));
    }
    Tc() {
      this.video != null &&
        (this.video.nga ? (la.flags.wJ = !0) : la.flags.P1++, la.flags.save());
      this.next = !0;
    }
    dJ() {
      return 0;
    }
    Yq() {
      return 0;
    }
    yl() {}
    Qt() {}
    xA() {}
  }
  Tk.g = "3F4";
  Tk.u = ma;
  Object.assign(Tk.prototype, { j: Tk });
  class ad extends Wg {
    constructor(a, b) {
      super(a, b);
    }
    Ot() {
      super.Ot();
      this.view = new xr();
      this.elements.appendChild(this.view);
      this.content.appendChild(this.view.node);
      this.pHa = 0;
      L.J.Ha.ET(new H(0, 0, 0, 1));
    }
    Ea(a) {
      super.Ea(a);
      super.pp()
        ? (this.view.nj("Loading 100%"), this.pHa++)
        : this.view.nj("Loading " + this.c1() + "%");
    }
    yEa() {
      return !1;
    }
    pp() {
      return super.pp() ? this.pHa > 30 : !1;
    }
    static load() {
      ad.eE = !0;
      switch (ad.hHa) {
        case 3:
          ma.Kg().RC(Uf);
          break;
        case 4:
          ma.Kg().RC(Ma);
          break;
        case 5:
          ma.Kg().RC(Ya);
          break;
        case 6:
          ma.Kg().RC(ai, { fightList: xa.F().Td.data });
          break;
        case 7:
          ma.Kg().RC(vb);
      }
    }
  }
  ad.g = "3F5";
  ad.u = Wg;
  Object.assign(ad.prototype, { j: ad });
  class Uf extends ma {
    constructor(a, b) {
      super(a, b);
    }
    ut() {
      let a = [];
      fa.add(a, 758, 759, 760);
      L.J.GJ
        ? (fa.add(a, 316), fa.add(a, 1359), fa.add(a, 197), fa.add(a, 1322))
        : (fa.add(a, 317),
          fa.add(a, 1360),
          fa.add(a, 11, 12),
          fa.add(a, 1322),
          fa.add(a, 1321),
          fa.add(a, ...this.Yea()),
          fa.add(a, 250, 251),
          fa.add(a, 340, 341),
          fa.add(a, 834, 835),
          fa.add(a, 268, 269));
      fa.add(a, 264, 265);
      fa.add(a, 270, 271);
      fa.add(a, 1311, 1312);
      fa.add(a, 262, 263);
      fa.add(a, 246, 247);
      fa.add(a, 266, 267);
      fa.add(a, 256, 257);
      fa.add(a, 13, 14);
      return a;
    }
    HD() {
      return 3;
    }
    Kn() {
      super.Kn();
      this.Ywa = [67, 72, 69, 69, 84, 65, 72, 77, 65, 78, 159];
      this.pZ = 0;
      this.pwa = [66, 85, 71, 159];
      this.iZ = 0;
    }
    vm(a) {
      super.vm(a);
      this.Jg.B();
      a instanceof Uf ||
        (Za.B(),
        E.iD(758, 759, 760),
        a instanceof Ma || this.o_(),
        L.J.GJ && (L.J.GJ = !1),
        Ib.F().B(),
        E.B(256),
        E.B(264),
        E.B(270));
    }
    VQ(a) {
      return a instanceof uh ? 1 : 0;
    }
    init(a) {
      super.init(a);
      ad.eE = !1;
      a = p.qab().h0("FightNone")[0].n0(0);
      a = v.C1a(a);
      a.lx(p.o.hfa(a.Nb));
      let b = p.v_.Fk;
      b == null || lc(b) || (a.location = p.v_.Fk);
      this.Jg = v.G1a(a);
      this.L1();
      L.J.kja == "yandex" || ya.hasFeature("standalone") || this.TXa();
      G.Vr(1360);
      G.Vr(L.J.Mna);
    }
    Z(a) {
      super.Z(a);
      Za.F().update();
      this.Jg != null && this.dM(this.Jg, a);
      if (L.J.Uj().S6())
        try {
          L.J.Uj().SBa() == this.Ywa[this.pZ]
            ? (this.pZ++,
              this.pZ == this.Ywa.length && ((L.J.hi = !0), new Cx(1e3)))
            : (this.pZ = 0);
        } catch (b) {}
      if (L.J.hi)
        try {
          L.J.Uj().S6() &&
            (L.J.Uj().SBa() == this.pwa[this.iZ]
              ? (this.iZ++,
                this.iZ == this.pwa.length && va.console.log(null.charAt(0)))
              : (this.iZ = 0));
        } catch (b) {}
      if ((this.bf != null && N.io) || this.FFa)
        if (
          ((this.FFa = !1),
          this.bf.node.la(1),
          this.bf.W.la(0.5),
          (a = za.instance),
          a != null)
        ) {
          let b = a.Ob.cg.node.Dm();
          this.bf.D(b.y);
          N.width - b.x < 125
            ? ((this.bf.frame = y.ooa),
              this.bf.W.yb(y.ooa),
              (this.bf.sp = y.hSa),
              this.bf.Jc.lk(this.bf.W.ea.x, this.bf.W.ea.y),
              this.bf.D(a.scroll.node.qa + a.scroll.nf.height),
              this.bf.la(a.Rn * 1.75),
              this.bf.C(N.width - (this.bf.W.ya() / 2) * this.bf.node.Db))
            : ((this.bf.frame = y.g7),
              this.bf.W.yb(y.g7),
              (this.bf.sp = y.gSa),
              this.bf.Jc.lk(this.bf.W.ea.x, this.bf.W.ea.y),
              this.bf.C(N.width - this.bf.W.ya()));
        }
    }
    Ea(a) {
      super.Ea(a);
      this.Jg != null && this.fza(this.Jg);
      Za.F().Ea();
    }
    TXa() {
      this.bf = this.elements.appendChild($a.Xv(null, y.g7));
      this.content.appendChild(this.bf.node);
      this.bf.oa.addListener(function () {
        try {
          let a = G.lp();
          L.J.Mc.stop();
          window.SupportDialogApi.show(
            a,
            L.J.Q0() + "\n" + JSON.stringify(L.eCa()),
            function () {
              L.J.Mc.start();
            },
          );
        } catch (a) {}
      });
      this.FFa = !0;
    }
  }
  Uf.g = "3F6";
  Uf.u = ma;
  Object.assign(Uf.prototype, { j: Uf });
  class za extends O {
    constructor() {
      super();
      za.instance = this;
      this.MVa = 0.25;
      this.EB = null;
      this.fY = this.vra = !0;
      this.Zp = 100;
      this.Bka = 50;
      this.wma = !0;
      this.jn = !1;
      this.Rn = this.Zsa = 1;
      this.Uub();
      this.Xub();
      this.VL = R.aa(E.get(262), y.iSa, this.node);
      this.VL.Uc(!1);
      this.Ur = this.appendChild(ra.Ya(O, [].slice()));
      this.ep = this.Ur.appendChild(ra.Ya(Ar, [].slice()));
      this.ep.UHa.addListener(w(this, this.sgb));
      this.Tv = this.Ur.appendChild(ra.Ya(Br, [].slice()));
      this.Tv.CHa.addListener(w(this, this.kgb));
      this.Ob = this.Ur.appendChild(ra.Ya(Cr, [].slice()));
      this.Ob.jIa.addListener(w(this, this.ogb));
      this.SW = R.Ed(16711935, 1, 1, this.node);
      this.SW.R(!1);
      L.J.hi &&
        L.J.kU &&
        ((this.Ej = this.appendChild($a.Xv(null, y.hoa))),
        this.Ej.Kd("skipTutorial"),
        this.Ej.oa.addListener(w(this, this.$la)),
        this.Ej.Jc.la(0.5),
        this.Ej.Y(xa.F().nE()));
      this.Vma();
      this.layout();
    }
    bB(a) {
      this.vra = a;
      this.SW.R(!a);
      !this.vra && this.scroll.AJ && this.scroll.collapse(0);
    }
    Z(a) {
      super.Z(a);
      if (N.io || this.jn) ((this.jn = !1), this.layout());
      this.Z$ != null &&
        this.Z$.pp() &&
        ((this.Z$ = null), this.Jta.B(), (this.Jta = null), this.Uvb());
      L.J.hi && (L.J.Uj().Eb(53) ? la.Zpb() : L.J.Uj().Eb(57) && la.Zdb());
    }
    layout() {
      this.Kdb();
      this.Jdb();
      if (this.Fq != null) {
        this.Fq.la((this.scroll.nf.width * 0.5) / this.Fq.W.ea.x);
        let a = this.Fq.node.ya();
        this.Fq.C(a / 2 + this.scroll.node.za);
        this.Fq.D(a / 2 + this.VL.ra() + this.scroll.nf.height);
      }
    }
    Kdb() {
      let a = N.rect;
      this.VL.la(1);
      this.VL.xc(a.w);
      this.VL.Qb(Math.min(a.v * 0.13, L.J.wn ? 230 : 100));
      this.Zp = this.VL.ra() * 0.78;
      let b = this.Zp * 0.65;
      this.Ur.C(0);
      this.Ur.la(1);
      let c = 50 * N.lc,
        d = 0;
      this.ep != null &&
        (this.ep.C(0), this.ep.layout(b), (d = this.ep.node.ya()), (d += c));
      this.Tv != null &&
        (this.Tv.C(d), this.Tv.layout(b), (d += this.Tv.node.ya()), (d += c));
      this.Ob.C(d);
      d += this.Ob.layout(b);
      d > a.w * 0.96 && this.Ur.la((a.w * 0.96) / d);
      this.Ur.C((a.w - this.Ur.node.ya()) / 2);
      this.Ur.D((this.Zp - b * this.Ur.node.Db) / 2);
      this.Ur.node.L.vg(!0, !0);
    }
    Jdb() {
      var a = this.Zp,
        b = N.lc;
      this.scroll.node.C(
        100 * (0.2 + (((b < 0.5 ? 0.5 : b > 2 ? 2 : b) - 0.5) / 1.5) * 0.8),
      );
      this.scroll.node.D(a);
      b = this.buttons[0].W.ea.y * 0.85;
      var c = b * this.buttons.length + 45;
      this.Rn = Math.max(0.1, (Math.min(N.width, N.height) * 0.35) / 430);
      var d = 430 * this.Rn,
        e = c * this.Rn;
      a = N.rect.v - a - 100;
      e > a && ((this.Rn = a / c), (d = 430 * this.Rn), (e = c * this.Rn));
      this.Bka = 50 * this.Rn;
      this.wc.ba(d, e, this.Bka);
      this.scroll.ba(d, e, 90 * this.Rn);
      a = (b / 2) * this.Rn;
      c = 0;
      for (d = this.buttons.length; c < d; ) {
        e = c++;
        let f = this.buttons[e];
        f.la(this.Rn);
        f.C(this.wc.Lv / 2);
        f.D(a + e * b * this.Rn);
      }
      this.SW.xc(N.rect.w);
      this.SW.Qb(N.rect.v / 4);
      L.J.hi &&
        L.J.kU &&
        this.Ej.active &&
        (this.Ej.W.la((90 * this.Rn * 0.75) / this.Ej.W.ea.y),
        this.Ej.C(N.rect.w - this.Ej.W.ya() / 2 - 10),
        this.Ej.D(this.Ej.W.ra() / 2 + 10));
    }
    B() {
      super.B();
      za.instance = null;
    }
    Xub() {
      this.buttons = [];
      this.scroll = this.appendChild(new hk(400, 800, 50, 1, !0, Y.na("menu")));
      this.scroll.dpb = !0;
      this.scroll.Ixa = !0;
      this.scroll.zS.addListener(w(this, this.whb));
      this.scroll.yIa.addListener(w(this, this.Yhb));
      this.scroll.collapse(0);
      this.wc = new Gg(400, 800, 0, 50);
      this.scroll.nL.appendChild(this.wc.node);
      var a = y.uRa,
        b = y.vRa,
        c = y.tRa;
      a = new Le(E.get(264), a, b, c);
      a.oa.addListener(w(this, this.jgb));
      a.KL = !0;
      this.wc.content.appendChild(a.node);
      this.appendChild(a);
      this.buttons.push(a);
      this.Hba = a;
      a = y.xRa;
      b = y.yRa;
      c = y.wRa;
      a = new Le(E.get(264), a, b, c);
      a.oa.addListener(w(this, this.lgb));
      a.KL = !0;
      this.wc.content.appendChild(a.node);
      this.appendChild(a);
      this.buttons.push(a);
      this.nwa = a;
      a = y.FRa;
      b = y.GRa;
      c = y.ERa;
      a = new Le(E.get(264), a, b, c);
      a.oa.addListener(w(this, this.rgb));
      a.KL = !0;
      this.wc.content.appendChild(a.node);
      this.appendChild(a);
      this.buttons.push(a);
      this.Jba = a;
      a = y.ARa;
      b = y.BRa;
      c = y.zRa;
      a = new Le(E.get(264), a, b, c);
      a.oa.addListener(w(this, this.mgb));
      a.KL = !0;
      this.wc.content.appendChild(a.node);
      this.appendChild(a);
      this.buttons.push(a);
      this.gZ = a;
      a = y.DRa;
      b = y.CRa;
      a = new Le(E.get(264), a, b, null);
      a.oa.addListener(w(this, this.qgb));
      a.KL = !0;
      this.wc.content.appendChild(a.node);
      this.appendChild(a);
      this.buttons.push(a);
      this.OYa = a;
      this.Uyb(xa.F().Td.Wf);
    }
    whb(a) {
      this.Zsa != a &&
        ((this.Zsa = a),
        a == 1
          ? ((this.fY = !0), (de.AY = !1))
          : a == 2 && this.fY && (de.AY = !0),
        a == 0 && this.Ezb());
    }
    Yhb() {
      debugger;
      sb.VS();
    }
    Ezb() {
      this.hM();
      this.Xma();
    }
    Kma() {
      this.Ob.Kma();
    }
    K6() {
      this.Ob.K6();
    }
    aPa() {
      let a = this.Tv;
      a != null && a.$Oa();
    }
    Nma() {
      let a = this.Tv;
      a != null && a.nB();
      this.jn = !0;
    }
    kgb() {
      this.wma &&
        !p.o.EN &&
        ha.F().Vf("QUEST_EVENT_ENERGY_BAR_PRESS") &&
        sb.xm();
    }
    Vma() {
      this.ep != null && this.ep.Y(!0);
      this.Tv != null && this.Tv.Y(!0);
      this.Kma();
      this.Xma();
      this.hM();
      this.aPa();
    }
    Gxa(a) {
      a == null && (a = 0);
      this.scroll.collapse(a);
    }
    ogb() {
      if (this.wma) {
        this.fY = !0;
        sb.xm();
        var a = p.items.F7a();
        a = a != null ? a : p.items.$b("Chest_Gems");
        var b = Ma.get();
        b != null ? b.wF(6, a) : xa.F().rp(4, new Hj(6, a));
      }
    }
    igb() {
      p.o.Mub(!p.o.f1());
      this.LU();
      sb.xm();
      xa.F().rp(3);
    }
    qgb() {
      this.Jta = this.appendChild(ra.Ya(Ci, [].slice()));
      this.Z$ = G.load([252, 253, 254, 255]);
    }
    Uvb() {
      this.fY = !1;
      sb.xm();
      Xc.nib();
      this.OYa.Qf = !0;
      this.Gxa(this.MVa);
    }
    jgb() {
      this.m1(3);
    }
    rgb() {
      this.m1(4);
    }
    lgb() {
      this.m1(5);
    }
    mgb() {
      this.m1(7);
    }
    m1(a) {
      sb.xm();
      xa.F().rp(a) || (this.Hba.Qf = !0);
    }
    $la() {
      if (p.F().nE()) {
        sb.xm();
        var a = ha.F().YZ;
        a = ha.F().FD(a);
        a != null && a.Sxa();
        Ib.VDa();
      }
      p.o.Bi.$la();
      L.J.hi && L.J.kU && this.Ej.Y(!1);
      Sb.F().mk(!1);
      this.bB(!0);
      p.o.save(!0);
      L.J.reload();
    }
    Uyb(a) {
      switch (a) {
        case 3:
          this.GT(this.Hba);
          break;
        case 4:
          this.GT(this.Jba);
          break;
        case 5:
          this.GT(this.nwa);
          break;
        case 7:
          this.GT(this.gZ);
          break;
        default:
          this.GT(null);
      }
    }
    R5a(a) {
      switch (a) {
        case 3:
          return this.Hba;
        case 4:
          return this.Jba;
        case 5:
          return this.nwa;
        case 7:
          return this.gZ;
        default:
          return null;
      }
    }
    Uub() {
      let a = p.o != null && p.o.f1() ? y.eoa : y.doa;
      this.Fq = this.appendChild($a.Xv(E.get(264), a));
      this.Fq.Jc.la(0.75);
      this.Fq.oa.addListener(w(this, this.igb));
      this.Fq.Y(!1);
    }
    LU() {
      let a = p.o != null && p.o.f1();
      this.Fq.W.yb(a ? y.eoa : y.doa);
    }
    vvb(a) {
      this.Fq.Y(a);
    }
    sgb() {
      if (this.wma) {
        var a = p.o;
        a =
          a.ws == a.Rz()
            ? Y.na("dlgComingSoonText")
            : Y.na("experienceHint", K.T(a.ws), K.T(a.Rz()));
        this.ep.W5(a);
      }
    }
    Xma() {
      this.gZ.badge.nk(0);
      if (p.o != null) {
        var a = p.o.fo.JCa() + p.o.Ai.GCa() + p.o.HCa() + p.o.KCa();
        this.gZ.badge.nk(a);
      }
    }
    hM() {
      this.Jba.badge.nk(p.items.ICa());
    }
    GT(a) {
      this.EB != null && ((this.EB.Qf = !0), this.EB.uMa());
      this.EB = a;
      this.EB != null && ((this.EB.Qf = !1), this.EB.zL());
    }
  }
  za.g = "3F7";
  za.u = O;
  Object.assign(za.prototype, { j: za });
  class Br extends O {
    constructor() {
      super();
      this.CHa = new V();
      this.icon = R.aa(E.get(262), y.PRa, this.node);
      this.tp = R.aa(E.get(262), y.jSa, this.node);
      let a = v.oDa(),
        b = 100 / a,
        c = m.l(),
        d = 0;
      for (; d <= a; ) (c.push((b * d) | 0), ++d);
      this.Vd = this.appendChild(ra.Ya(Dr, [].slice()));
      this.Vd.v5(c);
      p.o != null && p.o.EN && this.Vd.Y(!1);
      this.Jc = R.Ed(16711935, 220, 50, this.node);
      this.fR = this.appendChild($a.bJ(this.Jc.L));
      this.fR.oa.addListener(w(this, this.FYa));
      this.nB();
    }
    layout(a) {
      if (this.tp.gg()) this.tp.la(a / this.tp.ea.y);
      else {
        this.icon.la(a / this.icon.ea.y);
        let b = a * 0.4;
        this.Vd.C(this.icon.ya() * 1.1);
        this.Vd.D((a - b) / 2);
        this.Vd.Df(b);
      }
    }
    nB() {
      p.o != null &&
        (p.o.EN
          ? (this.icon.R(!1), this.Vd.Y(!1), this.tp.R(!0), this.Jc.R(!1))
          : (this.icon.R(!0), this.Vd.Y(!0), this.tp.R(!1), this.$Oa()));
    }
    $Oa() {
      if (p.o != null) {
        var a = p.o.ek;
        this.Vd.PD() != a && this.Vd.JF(a);
      }
    }
    FYa() {
      this.CHa.$();
    }
  }
  Br.g = "3F8";
  Br.u = O;
  Object.assign(Br.prototype, { j: Br });
  class Ar extends O {
    constructor() {
      super();
      this.hint = null;
      this.UHa = new V();
      this.nw = R.aa(E.get(262), y.koa, this.node);
      this.jA = new ea(E.Na(), this.node);
      this.jA.V("1");
      this.jA.Ia(64);
      this.tp = R.aa(E.get(262), y.aSa, this.node);
      this.Vd = this.appendChild(new Vf(y.loa, y.ZRa));
      this.Vd.VT(1);
      this.Vd.JF(0);
      this.Jc = R.Ed(16711935, 100, 100, this.node);
      this.fR = this.appendChild($a.bJ(this.Jc.L));
      this.fR.oa.addListener(w(this, this.Odb));
      this.o = p.o;
      this.o.uS.addListener(w(this, this.fM));
      this.o.iia.addListener(w(this, this.Oma));
      this.fM();
      this.Oma();
    }
    W5(a) {
      this.hint != null && (this.hint.node.B(), (this.hint = null));
      this.hint = new Dx(300, 80, a);
      this.eYa();
    }
    layout(a) {
      this.nw.la(a / this.nw.ea.y);
      var b = this.nw.ya() * 0.25;
      this.jA.Fa(this.nw.ya() / 2, a);
      this.jA.ua(a * 0.9);
      this.jA.C(this.nw.ya() + b);
      var c = a * 0.4;
      let d = this.Vd,
        e = this.jA.za,
        f = this.jA.Pj();
      d.C(e + (f.N - f.K) + b);
      this.Vd.Df(c);
      this.Vd.D((a - c) / 2);
      this.Jc.C(this.nw.za);
      b = this.nw.za;
      c = this.Vd.node.za + this.Vd.node.ya();
      this.Jc.lk(c - b, a);
      this.Jc.L.vg();
      this.tp.C(this.Vd.node.za);
      this.tp.Qb(this.nw.ra() / 2);
      this.tp.D((this.nw.ra() - this.tp.ra()) / 2);
    }
    B() {
      super.B();
      this.o.uS.removeListener(w(this, this.fM));
      this.o.iia.removeListener(w(this, this.Oma));
      this.o = null;
    }
    Z(a) {
      super.Z(a);
      this.hint != null &&
        (N.io || L.J.ed().yh(0) || L.J.Uj().S6()) &&
        (this.hint.B(), (this.hint = null));
    }
    fM() {
      this.jA.V(K.T(this.o.bb()));
      za.instance.jn = !0;
    }
    Oma() {
      this.Iyb(this.o.ws, this.o.Rz());
    }
    Iyb(a, b) {
      if (a == 0 || this.Vd.PD() != a)
        (this.Vd.VT(b),
          this.Vd.JF(a),
          v.KR.thresholds.length != 0 &&
            (this.o.bb() >= v.h1()
              ? (this.tp.R(!0), this.Vd.Y(!1), this.fR.Y(!1))
              : (this.tp.R(!1), this.Vd.Y(!0), this.fR.Y(!0))));
    }
    Odb() {
      this.UHa.$();
    }
    eYa() {
      let a = this.Jc.Dm(new H(this.Jc.ea.x / 2, this.Jc.ea.y / 2, 0, 1));
      this.hint.node.C(a.x);
      this.hint.node.D(a.y);
    }
  }
  Ar.g = "3F9";
  Ar.u = O;
  Object.assign(Ar.prototype, { j: Ar });
  class Dx {
    constructor(a, b, c) {
      this.node = new Ea();
      mc.J.df.appendChild(this.node.L);
      this.Ud = R.aa(E.get(246), y.Aoa, this.node);
      this.Ud.zl(vc.wM(new Ec(17, 17, 1, 1), Th.YU));
      this.Ud.xc(a);
      this.Ud.Qb(b);
      this.Ud.jk(a / 2, 0, !0);
      this.ns = R.aa(E.get(262), y.ioa, this.node);
      this.ns.jk(0.5, 0);
      this.ns.Un(0.5, 0);
      this.kb = new ea(E.Na(), this.node);
      this.kb.La(Oa.dd(3289650));
      this.kb.rd(!0);
      this.kb.Fa(a, b);
      this.kb.Ia(2);
      this.kb.V(c);
      this.kb.C(-a / 2);
      this.kb.D(5);
      this.kb.ua(35);
      this.kb.Lc(0.6);
      a = this.ns.ra() * 0.6;
      this.Ud.D(a);
      b = this.kb;
      b.D(b.qa + a);
    }
    B() {
      this.node.B();
      this.node = null;
    }
  }
  Dx.g = "3FA";
  Object.assign(Dx.prototype, { j: Dx });
  class Cr extends O {
    constructor() {
      super();
      this.jIa = new V();
      this.Jc = this.cg = null;
      this.R$ = -1;
      this.gd = this.YM = -2147483648;
      this.Xs = R.aa(E.get(262), y.RRa, this.node);
      this.Xs.Ga();
      this.Jq = new ea(E.Na(), this.node);
      this.Jq.V("0");
      this.Jq.CL(10);
      this.Jq.Ia(64);
      this.TA = R.aa(E.get(262), y.noa, this.node);
      this.TA.Ga();
      this.fu = new ea(E.Na(), this.node);
      this.fu.V("00");
      this.fu.CL(10);
      this.fu.Ia(64);
      this.wLa = this.Gr = null;
      this.f5 = 0;
      this.yT = -1;
      ya.hasFeature("iap") && this.f2a();
      this.o = p.o;
      this.kI = new sw(0);
      this.kI.uva = 0.1;
      this.kI.set(this.o.gd);
      this.o != null &&
        (this.o.tia.addListener(w(this, this.aM)),
        this.o.pS.addListener(w(this, this.aM)),
        this.o.pS.addListener(w(this, this.KU)),
        this.o.jia.addListener(w(this, this.D6)));
      this.aM();
      this.KU();
      this.D6();
    }
    layout(a) {
      var b = N.lc;
      b = (((b < 0.6 ? 0.6 : b > 2 ? 2 : b) - 0.6) / 1.4) * 100;
      this.Xs.la(a / this.Xs.ea.y);
      this.Xs.C(this.Xs.ya() / 2);
      this.Xs.D(a / 2);
      this.Jq.Fa(300, a);
      this.Jq.ua(a * 0.9);
      this.Jq.C(this.Xs.ya());
      var c = this.Jq.Pj();
      c = Math.ceil(c.N - c.K + 20 + 10);
      this.Jq.Fa(c, a);
      this.TA.la(a / this.TA.ea.y);
      this.TA.D(a / 2);
      this.TA.C(this.TA.ya() / 2 + this.Jq.za + c + b);
      this.fu.ua(a * 0.9);
      this.fu.C(this.TA.za + this.TA.ya() / 2);
      c = this.fu.Pj();
      c = Math.ceil(c.N - c.K + 20 + 10);
      this.fu.Fa(c, a);
      this.cg != null &&
        (this.cg.la(a / this.cg.W.ea.y),
        this.cg.C(this.fu.za + this.fu.ya() + this.cg.W.ya() / 2 + b),
        this.cg.D(a / 2));
      this.Gr != null &&
        (this.Gr.C(this.cg.node.za),
        this.Gr.D(this.cg.node.qa + this.cg.node.ra() / 2));
      this.cg != null &&
        ((c = this.cg.node.za + this.cg.node.ya() / 2),
        this.Jc.lk(c + 20, a + 20),
        this.Jc.C(-10),
        this.Jc.D(-10));
      return c;
    }
    B() {
      super.B();
      this.o.tia.removeListener(w(this, this.aM));
      this.o.pS.removeListener(w(this, this.aM));
      this.o.pS.removeListener(w(this, this.KU));
      this.o.jia.removeListener(w(this, this.D6));
      this.o = null;
      E.B(258);
    }
    Z(a) {
      this.Oyb();
      switch (this.f5) {
        case 1:
          this.wLa.pp() &&
            ((this.Gr = R.aa(E.get(258), "0", this.node)),
            this.Gr.C(this.cg.node.za),
            this.Gr.D(this.cg.node.qa + this.cg.node.ra() / 2),
            this.Gr.Ga(),
            this.Gr.Uc(!1),
            this.UNa(),
            (this.f5 = 2),
            (this.time = 0));
          break;
        case 2:
          this.yT -= a;
          this.yT < 0 && ((this.f5 = 0), this.Gr.B(), (this.Gr = null));
          if (this.time < 5) return;
          this.UNa();
          this.time = 0;
      }
      super.Z(a);
    }
    Oyb() {
      this.o != null &&
        (this.kI.update(),
        this.gd != this.kI.current &&
          ((this.gd = Math.trunc(this.kI.current)),
          this.fu.V(ie.Tr(this.gd)),
          this.jn()));
    }
    Kma() {
      this.aM();
      this.KU();
      this.D6();
    }
    M4a() {
      this.YM = this.o.Ob;
      this.Jq.V(ie.Tr(this.YM));
      this.jn();
    }
    aM() {
      this.o != null &&
        this.o.Ob != this.YM &&
        ((this.YM = this.o.Ob), this.Jq.V(ie.Tr(this.YM)), this.jn());
    }
    KU() {
      if (
        this.o != null &&
        this.Xs != null &&
        this.o.pf != this.Xs.currentFrame
      ) {
        let a = this.o.pf.replace(RegExp("^MiscSprites\\.", ""), "");
        this.Xs.yb(a);
      }
    }
    D6() {
      this.o != null && this.o.gd != this.gd && this.kI.TZa(this.o.gd);
    }
    K6() {
      this.Msb(p.items.S7a());
    }
    f2a() {
      this.cg = this.appendChild($a.Xv(null, y.HRa));
      this.cg.sp = y.IRa;
      this.cg.oa.addListener(w(this, this.pgb));
      this.Jc = R.Ed(16777215, 100, 100, this.node);
      this.cg.Jc.B();
      this.cg.Jc = this.Jc;
      this.cg.target = this.Jc.L;
      this.K6();
    }
    pgb() {
      this.jIa.$();
    }
    Msb(a) {
      this.R$ != a &&
        ((this.R$ = a),
        (this.yT = this.R$ - p.Dc),
        this.yT > 0 && ((this.wLa = G.load([258, 259])), (this.f5 = 1)));
    }
    UNa() {
      var a = [];
      let b = 0;
      for (; b < 26; ) {
        let c = b++;
        a.push(c == null ? "null" : "" + c);
      }
      a = lg.hea(a, 30);
      this.Gr.vJa(a);
    }
    jn() {
      za.instance.jn = !0;
    }
  }
  Cr.g = "3FB";
  Cr.u = O;
  Object.assign(Cr.prototype, { j: Cr });
  class hk extends O {
    constructor(a, b, c, d, e, f) {
      super();
      this.D3 = new V();
      this.He = new V();
      this.t3 = new V();
      this.zS = new V();
      this.yIa = new V();
      this.dza = this.lD = 0;
      this.jr = !1;
      this.width = a;
      this.height = b;
      this.xk = c;
      this.FLa = d;
      this.DI = 0;
      this.dpb = !0;
      this.Ixa = this.AJ = !1;
      this.Ama = this.EI = 0;
      this.node = new Ea();
      e &&
        ((this.background = Fc.Ed(-2147483648)),
        this.node.L.appendChild(this.background.L),
        this.background.wa(0),
        (this.background.L.Ow = !1));
      this.scroll = new Ea(this.node);
      this.nL = new Ea(this.scroll);
      this.rI = new hb(0, 0, this.width, this.height);
      this.scroll.qL(this.rI);
      switch (d) {
        case 0:
          this.nf = new Zh(c, this.height, this.node);
          break;
        case 1:
          this.nf = new Zh(this.width, c, this.node);
      }
      f != null &&
        ((this.Qx = new ea(E.Na(), this.nf.node)),
        this.Qx.V(f),
        this.Qx.La(Z.sc),
        this.Qx.Ia(128),
        this.Qx.Uc(!1));
      this.button = $a.bJ(this.nf.Jc.L);
      this.button.oa.addListener(w(this, this.Xgb));
      this.appendChild(this.button);
      this.VF = !1;
      this.collapse(0);
    }
    B() {
      super.B();
      this.yIa = this.zS = this.t3 = this.He = this.D3 = null;
    }
    Z(a) {
      super.Z(a);
      this.VF &&
        ((a = this.fd(this.Ama)),
        a == 1 && (this.VF = !1),
        this.bMa(dc.Nn()(this.AJ ? a : 1 - a)));
      this.nL.R(this.DI > 0);
      a = L.J.ed();
      if (
        !this.VF &&
        this.Ixa &&
        this.background != null &&
        this.DI > 0 &&
        a.Eb(0) &&
        ma.Bd(this.background.L, !0)
      )
        this.cgb();
      else if (!this.VF)
        switch (this.lD) {
          case 0:
            this.button.bp && ((this.dza = a.position[0].y), (this.lD = 1));
            break;
          case 1:
            if (!this.button.bp) {
              this.lD = 0;
              break;
            }
            a = a.position[0].y - this.dza;
            this.DI == 0 &&
              a > 2 * this.xk &&
              ((this.lD = 2), this.expand(0.3));
            this.DI == 1 &&
              a < -2 * this.xk &&
              a > -4e3 &&
              (this.collapse(0.3), (this.lD = 2));
            break;
          case 2:
            this.button.Eb && (this.lD = 0);
        }
    }
    ba(a, b, c) {
      this.width = a;
      this.height = b;
      var d = this.rI;
      d.N = d.K + a;
      d = this.rI;
      d.X = d.P + b;
      switch (this.FLa) {
        case 0:
          this.nf.ba(a, b);
          break;
        case 1:
          (this.Qx != null &&
            ((b = a * 0.2),
            (d = c * 0.2),
            this.Qx.Fa(a - 2 * b, c - 2 * d),
            this.Qx.C(b),
            this.Qx.D(d),
            this.Qx.Uk()),
            this.nf.ba(a, c));
      }
      this.PT(this.DI);
    }
    expand(a) {
      this.AJ = !0;
      this.Uwa(this.width, a);
    }
    collapse(a) {
      this.AJ = !1;
      (a > 0 && this.VF) || this.Uwa(0, a);
    }
    Xgb() {
      this.lD = 0;
      this.AJ ? this.collapse(0.3) : this.expand(0.3);
      sb.VS();
    }
    cgb() {
      this.collapse(0.3);
    }
    Hyb(a) {
      this.background != null &&
        (this.background.wa(a), (this.background.L.Ow = a > 0));
    }
    Uwa(a, b) {
      b <= 0
        ? ((this.VF = !1), this.bMa(a))
        : ((this.Ama = b), (this.VF = !0), (this.time = 0));
    }
    PT(a) {
      switch (this.FLa) {
        case 0:
          var b = this.width - a * this.width,
            c = this.rI,
            d = c.N - c.K;
          c.K = b;
          c.N = b + d;
          this.nf.node.C(b - this.xk + (a * this.nf.width) / 2);
          break;
        case 1:
          ((b = this.rI),
            (c = -this.height + a * this.height),
            (d = b.X - b.P),
            (b.P = c),
            (b.X = c + d),
            this.nf.node.D(a * this.height - (a * this.nf.height) / 2));
      }
      this.scroll.qL(this.rI);
    }
    bMa(a) {
      this.DI = a;
      this.PT(a);
      this.Hyb(a);
      let b = a == 0;
      this.jr = a == 1;
      b && this.EI != 2
        ? ((this.EI = 2), this.t3.$(!1), this.He.$())
        : this.jr && this.EI != 1
          ? ((this.EI = 1), this.t3.$(!0), this.D3.$())
          : b || this.jr || (this.EI = 0);
      this.zS.$(this.EI);
    }
  }
  hk.g = "3FC";
  hk.u = O;
  Object.assign(hk.prototype, { j: hk });
  class ik extends O {
    constructor(a) {
      super();
      this.Ud = a;
      this.node.appendChild(a);
      this.QN = this.uua = this.CG = this.Mb = this.Be = 0;
      this.QW = 1;
      this.iC = null;
    }
    ra() {
      return this.Ud.ea.y * this.node.Db;
    }
    mf(a) {
      this.node.la(a / this.Ud.ea.x);
    }
    Df(a) {
      this.node.la(a / this.Ud.ea.y);
      this.node.ya();
    }
    PD() {
      return this.Mb;
    }
    JF(a) {
      this.fc(a);
    }
    nB() {}
    VT(a) {
      this.QN = 0;
      this.QW = a;
      a = this.Mb;
      let b = this.QN,
        c = this.QW;
      this.Mb = a < b ? b : a > c ? c : a;
      this.nB();
    }
    fc(a, b, c) {
      b == null && (b = 0);
      if (this.Mb != a) {
        var d = this.QN,
          e = this.QW;
        a < d ? (a = d) : a > e && (a = e);
        b > 0
          ? ((this.CG = b),
            (this.uua = a),
            (this.iC = c),
            (this.time = 0),
            (this.Be = 1))
          : ((this.Mb = a),
            this.nB(),
            this.iC != null && (this.iC(), (this.iC = null)));
      }
    }
    Z(a) {
      super.Z(a);
      if (this.Be == 1) {
        a = this.fd(this.CG);
        let b = this.Mb;
        this.Mb = b + (this.uua - b) * a;
        this.nB();
        a == 1 &&
          (this.iC != null && (this.iC(), (this.iC = null)), (this.Be = 0));
      }
    }
    ratio() {
      return (this.Mb - this.QN) / (this.QW - this.QN);
    }
  }
  ik.g = "3FD";
  ik.u = O;
  Object.assign(ik.prototype, { j: ik });
  class Vf extends ik {
    constructor(a, b, c) {
      c = c != null ? c : 262;
      super(R.aa(E.get(c), a));
      this.nxb = R.aa(E.get(262), b, this.node);
      this.nB();
    }
    nB() {
      this.nxb.zl(vc.lo(Jc.mo, this.ratio()));
    }
  }
  Vf.g = "3FE";
  Vf.u = ik;
  Object.assign(Vf.prototype, { j: Vf });
  class Dr extends Vf {
    constructor() {
      super(y.loa, y.QRa);
      this.tH = null;
      this.VT(100);
    }
    PD() {
      return this.t8a(super.PD());
    }
    JF(a) {
      this.fc(a);
    }
    fc(a, b, c) {
      b == null && (b = 0);
      super.fc(this.u8a(a | 0), b, c);
    }
    v5(a) {
      this.tH = a;
      this.JF(0);
    }
    t8a(a) {
      let b = 0,
        c = 0,
        d = this.tH;
      for (; c < d.length; ) {
        if (d[c++] == a) return b;
        ++b;
      }
      return -1;
    }
    u8a(a) {
      let b = this.tH.length;
      return b == 0
        ? 0
        : a < 0
          ? this.tH[0]
          : b <= a
            ? this.tH[b - 1]
            : this.tH[a];
    }
  }
  Dr.g = "3FF";
  Dr.u = Vf;
  Object.assign(Dr.prototype, { j: Dr });
  class ai extends ma {
    constructor(a, b) {
      super(a, b);
    }
    ut() {
      let a = [],
        b = this.info.fightList;
      fa.add(a, ...Cf.CAa(b));
      fa.add(a, ua.B0(b.Ap));
      fa.add(a, 1322);
      fa.add(a, 1321);
      fa.add(a, 317);
      fa.add(a, 1360);
      fa.add(a, 2, 3);
      fa.add(a, 4);
      fa.add(a, 11, 12);
      fa.add(a, 248, 249);
      fa.add(a, 272, 273);
      fa.add(a, 1305, 1306);
      fa.add(a, 266, 267);
      fa.add(a, 1315, 1316);
      fa.add(a, 1311, 1312);
      fa.add(a, 1299, 1300);
      fa.add(a, 1301, 1302);
      fa.add(a, 1313, 1314);
      fa.add(a, 1303, 1304);
      fa.add(a, 1307, 1308);
      fa.add(a, 1309, 1310);
      fa.add(a, 834, 835);
      fa.add(a, ...this.Yea());
      return a;
    }
    HD() {
      return 6;
    }
    init(a) {
      super.init(a);
      ad.eE = !1;
      this.ha = this.To(Er);
      this.HA = new Ia();
      this.tf = new Ia();
      this.Aya = this.ld = 0;
      this.dz = !1;
      this.SY = Ch.I5a();
    }
    vm(a) {
      super.vm(a);
      E.B(270);
      E.B(272);
      E.B(1311);
      E.B(1299);
      E.B(1315);
      E.B(1301);
      E.B(1305);
      E.B(1313);
      E.B(1303);
      E.B(4);
      E.B(2);
      this.o_();
      iz.h0a();
      E.B(...Cf.CAa(this.Da));
      a = ua.B0(this.Da.Ap);
      L.J.bg.lnb(a);
      G.Vr(a);
    }
    B(a) {
      super.B(a);
      this.Jg.B();
      this.Jg = null;
      Za.B();
    }
    Z(a) {
      super.Z(a);
      if (!this.Zg)
        switch ((this.su != null && this.yPa(), this.ld)) {
          case 0:
            this.Da = this.info.fightList;
            this.Bm = this.dz = !1;
            v.KJa(this.Da, this.HA, this.tf);
            this.ZF = new wl();
            ca.wCa(this.Da, this.HA.G, this.tf.G[0], this.tf.G, 0, this.ZF);
            this.bk = !0;
            this.ZF.pD.length > 1 && this.ZF.lE
              ? ((this.bk = !1),
                this.Zt(),
                this.vca(this.ZF.pD, this.ZF.BP, this.ZF.g2))
              : this.ZF.CR
                ? ((this.bk = !1), this.Zt(), this.yx())
                : (this.Bm = this.dz = !0);
            this.ld = 1;
            break;
          case 1:
            if (!this.dz) break;
            this.Jg = v.lya(this.Da, this.HA.G, this.tf.G, this.ha);
            this.ld = 2;
            this.time = 0;
            this.Jg.Ta.ia.visible(!1);
            break;
          case 2:
            this.load(3);
            break;
          case 3:
            if (!this.Bm) break;
            this.bk && this.Zt();
            a = this.eq;
            a != null && a.B();
            this.Jg.yx();
            this.Jg.loaded
              ? (this.ld = 5)
              : ((this.ld = 4), (this.time = 0), this.dM(this.Jg, 0));
            break;
          case 4:
            this.load(5);
            break;
          case 5:
            if (this.Jg == null) break;
            if (!this.Jg.loaded) {
              this.ld = 6;
              this.time = 0;
              break;
            }
            Za.F().update();
            this.dM(this.Jg, a);
            break;
          case 6:
            this.load(5);
        }
    }
    Ea(a) {
      super.Ea(a);
      this.Jg != null && (this.fza(this.Jg), Za.F().Ea());
    }
    Zt() {
      ua.Zt(this.Da.Ap);
      db.xJ = !1;
    }
    yx() {
      var a = null;
      a = this.tf.G;
      if (a.length > this.Aya) a = a[this.Aya];
      else if (a.length > 0) a = a[0];
      else {
        this.Bm = !0;
        return;
      }
      this.eq = new jk(this.HA.G, a);
      let b = this;
      this.eq.ng = function () {
        b.dz = !0;
      };
      this.eq.F3 = function () {
        b.Bm = !0;
      };
      this.elements.appendChild(this.eq);
      this.content.appendChild(this.eq.node);
    }
    vca(a, b, c) {
      this.bt = this.To(kk);
      this.bt.init(a, b, c, this.R8a());
      this.bt.Tc.addListener(w(this, this.Jgb));
    }
    Jgb() {
      this.bt.B();
      this.bt = null;
      this.yx();
    }
    R8a() {
      if (this.SY.length > 0) {
        debugger;
        let a = (this.SY[this.SY.length - 1].Jca * Da.rg.lf()) | 0;
        return Qb.find(this.SY, function (b) {
          return a <= b.Jca;
        }).Eg;
      }
      return "";
    }
    load(a) {
      this.time > 1 && this.Xvb();
      this.Jg.loaded && (this.Nab(), (this.ld = a));
    }
    Xvb() {
      this.su == null &&
        ((this.su = R.aa(E.get(262), y.moa, this.content)),
        this.su.Ga(),
        this.yPa());
    }
    Nab() {
      let a = this.su;
      a != null && a.B();
      this.su = null;
    }
    yPa() {
      var a = this.su;
      a.Xg(a.qO + 4);
      a = ma.Qq;
      this.su.C((a.K + a.N) * 0.5);
      this.su.D((a.P + a.X) * 0.5);
      this.su.mf(Math.min(N.width, N.height) * 0.1);
      this.su.yF();
    }
    static get() {
      return ma.Kg() instanceof ai ? ma.Kg() : null;
    }
  }
  ai.g = "400";
  ai.u = ma;
  Object.assign(ai.prototype, { j: ai });
