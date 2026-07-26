// 058-fight-ui.js
// Domain: ui  |  27 class(es)  |  tree root(s): Ex, Db, Fx, Gx, Hx, Ix, fd, Kx, Jx, Fh, Lx, Cl
// Edit here. Run `npm run build` to reassemble the full bundle.
  class Ex {
    constructor(a, b, c, d, e) {
      this.pxb = a;
      this.Yp = b;
      this.oxb = c;
      this.model = d;
      this.Z1 = e;
    }
  }
  Ex.g = "401";
  Object.assign(Ex.prototype, { j: Ex });
  class Fr extends O {
    constructor() {
      super();
    }
    init(a, b) {
      this.Ca = a;
      this.uc = b;
      this.QH = m.l();
      this.Bsa = null;
      this.Kta = this.sO = 0;
      a = b == 0 ? -1 : 1;
      b = E.get(1299);
      this.Ud = R.aa(b, y.$U, this.node);
      this.Ud.HL(25 * a);
      this.tN = R.aa(b, y.$Qa, this.node);
      this.tN.HL(25 * a);
      this.KG = R.aa(b, y.boa, this.node);
      this.KG.HL(25 * a);
      this.AL(425);
      this.Grb();
      this.zbb();
    }
    zbb() {
      this.FO = 0;
      this.WFa = !1;
      this.SN = this.gC = this.vN = this.uN = this.QO = this.PO = 0;
      this.sO = this.Ca.T5;
      this.Kta = this.Ca.eB;
      this.KG.yb(y.boa);
      this.KG.R(!1);
      this.tN.R(!1);
      this.QH.push(this.tN);
      this.QH.push(this.KG);
      this.fH = Math.max(1, this.Ca.hd);
      this.QH[1].R(!0);
      this.QH[0].R(!0);
      this.D5(this.Ca.hd);
      this.p5(this.Ca.hd);
      this.node.Uc(!1);
    }
    AL(a) {
      this.width = a;
      this.Ud.xc(a);
      this.tN.xc(a);
      this.KG.xc(a);
    }
    Grb() {
      this.Ud.Qb(43);
      this.tN.Qb(43);
      this.KG.Qb(43);
    }
    ia() {
      this.WFa || this.mzb();
      this.mob();
      this.eob();
      this.FO > 0 &&
        ((this.FO -= 1 / v.qn()), this.FO <= 0 && this.p5(this.gC, 30));
    }
    mob() {
      this.PO != this.gC &&
        (this.DMa(
          this.QO < 1 ? this.gC : this.PO - (this.PO - this.gC) / this.QO,
        ),
        this.QO--);
    }
    eob() {
      this.uN != this.SN &&
        (this.iMa(
          this.vN < 1 ? this.SN : this.uN + (this.SN - this.uN) / this.vN,
        ),
        this.vN--);
    }
    mzb() {
      let a = this.x6a(),
        b = a - this.gC;
      b != 0 &&
        (b > 0
          ? (this.D5(a, 10), this.p5(a, 30))
          : ((this.FO = Math.abs(b) < 0.01 ? 1 : 60), this.D5(a, 10)));
    }
    D5(a, b) {
      b == null && (b = 0);
      this.gC = a;
      this.QO = b;
      this.QO == 0 && this.DMa(this.gC);
    }
    p5(a, b) {
      b == null && (b = 0);
      this.SN = a;
      this.vN = b;
      this.vN == 0 && this.iMa(this.SN);
    }
    i_(a) {
      let b = 1;
      this.sO > 0 &&
        this.Kta > 0 &&
        ((b = (a / this.fH + 1) | 0), a != 0 && a % this.fH == 0 && --b);
      b < 1 && (b = 1);
      b > this.sO && this.sO > 0 && (b = this.sO);
      return b;
    }
    DMa(a) {
      a = this.vCa(a);
      var b = this.i_(this.PO);
      let c = this.i_(a);
      this.Jz(2 * b - 1).R(!1);
      b > 1 && this.Jz(2 * (b - 1) - 1).R(!1);
      b = this.Jz(2 * c - 1);
      b.R(!0);
      if (c > 1) {
        let d = this.Jz(2 * (c - 1) - 1),
          e = d.wf(),
          f = this.Bsa;
        e.x = f.x;
        e.y = f.y;
        e.z = f.z;
        e.w = f.w;
        d.R(!0);
      }
      b.zl(
        vc.lo(this.uc == 0 ? Jc.ZU : Jc.mo, (a - (c - 1) * this.fH) / this.fH),
      );
      this.PO = a;
    }
    vCa(a) {
      let b = a;
      a < 0 && (b = 0);
      this.Ca.eB > 0 && a > this.Ca.eB && (b = this.Ca.eB);
      return b;
    }
    Jz(a) {
      return a >= this.QH.length || a < 0 ? null : this.QH[a];
    }
    iMa(a) {
      a = this.vCa(a);
      var b = this.i_(this.uN);
      let c = this.i_(a);
      this.Jz(2 * b - 2).R(!1);
      b > 1 && this.Jz(2 * (b - 1) - 2).R(!1);
      b = this.Jz(2 * c - 2);
      b.R(!0);
      if (c > 1) {
        let d = this.Jz(2 * (c - 1) - 2),
          e = d.wf(),
          f = this.Bsa;
        e.x = f.x;
        e.y = f.y;
        e.z = f.z;
        e.w = f.w;
        d.R(!0);
      }
      b.zl(
        vc.lo(this.uc == 0 ? Jc.ZU : Jc.mo, (a - (c - 1) * this.fH) / this.fH),
      );
      this.uN = a;
    }
    x6a() {
      let a = this.Ca != null ? this.Ca.hd : 0;
      a > 0 && a < Kj.uha && (a = Kj.uha);
      return a;
    }
  }
  Fr.g = "402";
  Fr.u = O;
  Object.assign(Fr.prototype, { j: Fr });
  class Fx {
    constructor() {
      function a() {
        let d = new ea(E.get(1303), b.node);
        d.C(-50);
        d.D(-50);
        d.Ia(2);
        return d;
      }
      this.GW = this.M$ = 0;
      this.node = new Ea();
      this.type = 0;
      let b = this;
      var c = (this.B2 = a());
      c.C(c.za - 80);
      this.B2.Ia(4);
      this.B2.V("0");
      this.dda = a();
      this.dda.V(":");
      c = this.Y4 = a();
      c.C(c.za + 80);
      this.Y4.Ia(1);
      this.Y4.V("0");
    }
    Bla(a) {
      this.GW = a;
      this.B2.V(K.T(this.GW));
    }
    Lla(a) {
      this.M$ = a;
      this.Y4.V(K.T(this.M$));
    }
    B() {
      this.node.B();
      this.node = null;
    }
    init(a, b) {
      b == null && (b = 0);
      this.type = a;
      switch (a) {
        case 0:
          this.Bla(this.GW);
          this.Lla(this.M$);
          this.dda.V(":");
          break;
        case 1:
          (this.Bla(this.GW), this.Lla(b), this.dda.V("/"));
      }
    }
  }
  Fx.g = "403";
  Object.assign(Fx.prototype, { j: Fx });
  class Er extends O {
    constructor() {
      super();
      this.Rg = new V();
      this.CA = new V();
      this.Gda = this.WE = this.Te = this.mb = this.Da = null;
    }
    qla(a) {
      this.node.R(a);
      this.Y(a);
    }
    Sz() {
      return this.mb != null ? this.mb.TF : 0;
    }
    lab() {
      debugger;
      return this.mb != null ? this.mb.DU : 0;
    }
    mab() {
      debugger;
      return this.mb != null ? this.mb.e1() - this.mb.DU : 0;
    }
    nab() {
      return this.mb != null ? this.mb.e1() : 0;
    }
    qp() {
      return this.Te != null ? this.Te.type : 0;
    }
    init(a) {
      this.Da = a;
      this.M1();
    }
    M1(a, b) {
      this.mb == null &&
        ((this.mb = this.appendChild(ra.Ya(Tf, [].slice()))),
        this.mb.kS.addListener(w(this, this.kS)),
        this.mb.sja(a, b));
      this.Te == null &&
        ((this.Te = this.appendChild(ra.Ya(Gr, [].slice()))),
        this.Te.Y(!1),
        this.Te.CA.addListener(w(this, this.nIa)),
        this.Te.sja(this.Da));
      this.SPa(!1);
    }
    Kia() {
      this.WE = this.appendChild(ra.Ya(Hr, [].slice()));
      this.WE.hhb = w(this, this.chb);
      this.WE.Thb = w(this, this.ehb);
      sb.xm();
    }
    AZ() {
      let a = this.WE;
      a != null && a.B();
      this.WE = null;
      sb.xm();
    }
    Jia(a) {
      let b = this.Te;
      b != null && b.clear();
      this.Gda = new lk(a);
      this.node.sJ().appendChild(this.Gda.node);
      this.parent.appendChild(this.Gda);
    }
    ia() {
      let a = this.mb;
      a != null && a.ia();
    }
    bL() {
      let a = this.mb;
      a != null && a.bL();
    }
    aAb(a, b, c, d) {
      d == null && (d = !0);
      let e = this.mb;
      e != null && e.init(a, b, c, d);
    }
    bAb() {
      let a = this.mb;
      a != null && a.play();
    }
    cAb(a, b, c, d, e, f, g, h) {
      let k = this.mb;
      k != null && k.strike(a, b, c, d, e, f, g, h);
    }
    wna() {
      let a = this.mb;
      a != null && a.Jzb();
    }
    dAb(a, b) {
      let c = this.mb;
      c != null && c.Rma(a, b);
    }
    SPa(a) {
      let b = this.mb;
      b != null && b.qla(a);
    }
    R6(a) {
      this.mb != null && this.mb.blb(a);
    }
    reset() {
      this.Te != null &&
        (this.Te.CA.removeListener(w(this, this.nIa)),
        this.Te.B(),
        (this.Te = null));
      this.mb.B();
      this.mb = null;
      let a = this.WE;
      a != null && a.B();
      this.WE = null;
    }
    Gca(a, b, c, d, e, f, g) {
      this.Te.Gca(a, b, c, d, e, f, g);
    }
    Dca(a, b) {
      let c = this.Te;
      c != null && c.Dca(a, b);
      a = this.mb;
      a != null && a.reset();
    }
    dz() {
      let a = this.Te;
      a != null && a.dz();
    }
    NZ(a) {
      let b = this.Te;
      b != null && b.NZ(a);
      a && this.mb != null && this.mb.fCa(0).Lvb();
    }
    Eca() {
      let a = this.Te;
      a != null && a.Eca();
    }
    Bca() {
      let a = this.Te;
      a != null && a.Bca();
    }
    Hca() {
      let a = this.Te;
      a != null && a.Hca();
    }
    Ica() {
      let a = this.Te;
      a != null && a.Ica();
    }
    nIa(a) {
      let b = this.Te;
      b != null && b.clear();
      this.CA.$(a);
    }
    Iw(a) {
      this.mb != null && this.mb.Iw(a);
    }
    Jr(a, b) {
      this.mb != null && this.mb.Jr(a, b);
    }
    cFa() {
      return this.mb != null ? this.mb.TF <= 0 : !1;
    }
    vt(a) {
      return this.mb != null ? this.mb.vt(a) : null;
    }
    lsb(a) {
      this.Te != null && (this.Te.pause = a);
    }
    layout() {
      this.mb.layout();
    }
    o0a() {
      this.Te != null && this.Te.clear();
    }
    DP(a, b, c, d, e) {
      let f = this.mb;
      f != null && f.DP(a, b, c, d, e);
    }
    NU(a, b) {
      let c = this.mb;
      c != null && c.NU(a, b);
    }
    oT() {
      let a = this.mb;
      a != null && a.oT();
    }
    ehb() {
      this.Rg.$(1);
    }
    chb() {
      this.Rg.$(2);
    }
    kS(a) {
      this.Rg.$(a);
    }
  }
  Er.g = "404";
  Er.u = O;
  Object.assign(Er.prototype, { j: Er });
  class Ir extends O {
    constructor(a, b) {
      super();
      this.uT = m.l();
      let c = a == 0 ? -1 : 1,
        d = 0,
        e = b == 2 ? 40 : 32,
        f = e / 2,
        g = 0;
      for (; g < b; ) {
        ++g;
        let h = R.aa(E.get(1299), y.$U, this.node);
        a == 0 ? (h.C(-e + d), (d -= e + f)) : (h.C(d), (d += e + f));
        h.xc(e);
        h.HL(25 * c);
        h.Qb(43);
        this.uT.push(h);
      }
      this.node.Uc(!1);
    }
    L6(a) {
      var b = this.uT.length;
      a = a > b ? b : a;
      for (b = 0; b < a; ) this.uT[b++].yb(y.bRa);
      for (b = this.uT.length; a < b; ) this.uT[a++].yb(y.$U);
    }
  }
  Ir.g = "405";
  Ir.u = O;
  Object.assign(Ir.prototype, { j: Ir });
  class Gr extends O {
    constructor() {
      super();
      this.type = 0;
      this.Phb = new V();
      this.CA = new V();
      this.pause = !1;
      this.dt = new Gx();
      this.zGa = 0;
      this.CU = !1;
      this.Mc = 0;
      this.bt = this.eq = null;
      this.Qa = R.aa(E.K1a(), null, this.node);
      this.content = new Ea(this.node);
      this.image = R.aa(E.get(1315), null, this.content);
      this.image.R(!1);
      this.round = new ea(E.get(1303), this.content);
      this.round.Ia(64);
      this.round.ua(this.round.effect.fontSize * 1.6);
      this.round.R(!1);
    }
    B() {
      super.B();
      E.d3a();
    }
    sja(a) {
      this.zGa = a.vT * a.T6a();
      this.pause = !1;
    }
    Gca(a, b, c, d, e) {
      this.dt.parameters = a;
      this.dt.tf = b;
      this.dt.current = c;
      e && c > 0 ? this.vca(b, c, d) : ((this.type = 1), this.eOa());
    }
    Dca(a, b) {
      b == null && (b = !1);
      this.Ws();
      this.type = 2;
      a = b ? this.zGa : a;
      this.round.V(a == null ? "null" : "" + a);
      this.init(y.SQa, !0);
      this.ku(1.666);
      this.CU = !1;
      let c = this;
      wh.delay(function () {
        L.J.qx("break:round", function () {
          c.CU = !0;
        });
      }, 500);
    }
    dz() {
      (this.active && this.type == 5) ||
        (this.Ws(), (this.type = 5), this.init(y.LQa), this.ku(1.166));
    }
    NZ(a) {
      this.Ws();
      this.type = a ? 6 : 7;
      this.init(a ? y.QQa : y.NQa);
      this.ku(1.166);
    }
    Eca() {
      this.Ws();
      this.type = 9;
      this.init(y.UQa);
      this.ku(1.166);
    }
    Bca() {
      this.Ws();
      this.type = 10;
      this.init(y.RQa);
      this.ku(1.166);
    }
    Hca() {
      this.Ws();
      this.type = 11;
      this.init(y.Wna);
      this.ku(1.166);
    }
    Ica() {
      this.Ws();
      this.type = 12;
      this.init(y.Xna);
      this.ku(1.166);
    }
    clear() {
      this.Ws();
    }
    Ws() {
      this.image.R(!1);
      this.round.R(!1);
      this.Qa.R(!1);
      var a = this.eq;
      a != null && a.B();
      this.eq = null;
      a = this.bt;
      a != null && a.B();
      this.bt = null;
    }
    vca(a, b, c) {
      this.type = 8;
      this.Ws();
      this.node.R(!0);
      this.Y(!0);
      this.bt = this.appendChild(ra.Ya(kk, [].slice()));
      this.bt.init(a, b, c);
      this.ku(this.bt.FY);
      this.CA.addListener(w(this, this.oxa));
    }
    init(a, b) {
      b == null && (b = !1);
      this.Qa.R(!0);
      this.image.yb(a);
      this.image.R(!0);
      this.image.Ga();
      this.image.C(0);
      b &&
        ((b = this.image.getBounds(this.image.sJ())),
        (a = b.X - b.P),
        this.round.C(b.N + a * 0.25),
        this.round.D(b.P),
        this.round.Fa(a, a),
        this.round.R(!0),
        (b = this.image),
        b.C(b.za - a / 2),
        (b = this.round),
        b.C(b.za - a / 2));
      this.layout();
    }
    oxa(a) {
      a == 8 && (this.CA.removeListener(w(this, this.oxa)), this.yx());
    }
    yx() {
      this.type = 1;
      this.Ws();
      let a = null;
      if (this.dt.tf.length > this.dt.current) a = this.dt.tf[this.dt.current];
      else if (this.dt.tf.length > 0) a = this.dt.tf[0];
      else {
        this.ku(0);
        return;
      }
      this.eq = this.appendChild(new jk(this.dt.parameters, a));
      this.eq.ng = function () {};
      this.eq.F3 = function () {};
      this.ku(this.eq.FY);
    }
    ku(a) {
      this.Mc = a;
      this.Y(!0);
      this.CU = !0;
      this.Phb.$(this.type);
    }
    eOa() {
      this.Y(!1);
      this.CU = !1;
      this.CA.$(this.type);
    }
    layout() {
      let a = ma.Qq;
      this.content.setPosition(a.Z5a());
      this.content.la(
        (Math.min(800, Math.min(a.N - a.K, a.X - a.P)) / this.image.ea.x) * 0.6,
      );
      this.Qa.xc(N.width);
      this.Qa.Qb(N.height);
    }
    Z(a) {
      this.layout();
      !this.pause && this.CU && ((this.Mc -= a), this.Mc <= 0 && this.eOa());
    }
  }
  Gr.g = "406";
  Gr.u = O;
  Object.assign(Gr.prototype, { j: Gr });
  class Gx {
    constructor() {
      this.current = 0;
      this.parameters = this.tf = null;
    }
  }
  Gx.g = "407";
  Object.assign(Gx.prototype, { j: Gx });
  class mk extends O {
    constructor(a) {
      super();
      this.type = a;
      this.Wga = !1;
      this.parameters = null;
      this.rNa = !0;
      this.Fia = new V();
      this.tgb = new V();
      this.u3 = new V();
    }
    jab() {
      return this.Lh != null ? this.Lh.Ee : null;
    }
    cNa(a) {
      this.Lh != null && (this.Lh.Ee = a);
    }
    X9a() {
      return this.Uh != null ? this.Uh.dn : 0;
    }
    Ofa() {
      return this.Uh != null ? this.Uh.Ofa() : "";
    }
    Y9a() {
      return this.Uh != null ? this.Uh.v9a() : 0;
    }
    init(a, b) {
      b == null && (b = !0);
      this.parameters = a;
      this.rNa = b;
      this.Wga = !0;
      this.Kbb();
      this.ybb();
      b && this.Fbb();
      this.pbb();
      this.Cbb();
      this.n1a();
      this.tbb();
    }
    qMa() {
      this.cl.AL(330);
      this.Uh.AL(165);
      this.cl.node.C(this.type == 0 ? 130 : -460);
      this.Uh.node.C(this.type == 0 ? 130 : -295);
      this.yva(330);
    }
    yva(a) {
      let b = Math.tan(0.43633231299857994) * 43;
      switch (this.type) {
        case 0:
          this.b5.node.C(130 + a - b);
          break;
        case 1:
          this.b5.node.C(-a - 130 + b);
      }
    }
    pbb() {
      this.Kf = this.appendChild(new oe(this.parameters.Kf));
      this.type == 0 && this.Kf.ip();
      this.Kf.Uc(!1);
    }
    ybb() {
      this.cl = this.appendChild(ra.Ya(Fr, [].slice()));
      this.cl.init(this.parameters, this.type);
      this.cl.node.C(this.type == 0 ? 130 : -this.cl.width - 130);
      this.cl.node.D(-50);
    }
    Kbb() {
      this.Uh = this.appendChild(new Jr(this.type));
      this.Uh.node.C(this.type == 0 ? 130 : -330);
    }
    Fbb() {
      this.b5 = this.appendChild(new Ir(this.type, this.parameters.w6));
      this.yva(425);
    }
    Cbb() {
      function a(c, d, e) {
        d = new ea(E.Na(), b.node);
        d.Fa(400, 80);
        d.C((b.type == 0 ? 150 : -550) + c);
        d.D(-100 + c);
        d.Ia(b.type == 0 ? 8 : 32);
        d.ua(70);
        d.Uc(!1);
        b.parameters.$ha != null && b.parameters.$ha != ""
          ? d.V(b.parameters.$ha)
          : d.V(Y.na(b.parameters.ft));
        c = d.wf();
        c.x = e.x;
        c.y = e.y;
        c.z = e.z;
        c.w = e.w;
        return d;
      }
      let b = this;
      a(3, 3, Oa.Wv(-2147483648));
      a(0, 0, Oa.dd(16767392));
    }
    tbb() {
      this.Lh = new Kr(this.type);
      this.Lh.addEventListener(0, w(this, this.Nt));
      this.node.appendChild(this.Lh.node);
    }
    n1a() {
      this.YH = this.appendChild(new Lr(this.type == 0 ? 0 : 1));
    }
    fna(a) {
      this.Uh != null && (this.Uh.fna(a), this.Lh.Uua(this.Uh.dn), this.i5(!0));
    }
    hbb() {
      this.Uh != null && (this.Uh.YDa(1), this.Lh.Uua(this.Uh.dn), this.i5(!0));
    }
    L6() {
      this.rNa && this.b5 != null && this.b5.L6(this.parameters.qg);
    }
    Iw(a) {
      let b = this.Lh;
      b != null && b.Iw(a);
    }
    Jr(a) {
      this.cl != null && this.cl.node.R(a);
    }
    t5(a) {
      this.cl != null && (this.cl.WFa = a);
    }
    mZa() {
      this.i5(!0);
    }
    bL() {
      this.Lh.ia();
    }
    HKa() {
      this.YH != null && this.YH.ia();
    }
    ia(a) {
      if (L.J.hi && L.J.ed().Eb(0)) {
        var b = N.mn(0);
        b = this.node.$n(b);
        Math.sqrt(b.x * b.x + b.y * b.y) < 100 && this.u3.$(this.type);
      }
      this.cl.ia();
      this.Uh.ia();
      this.Uh != null && a && (this.Uh.ia(), this.i5(!1));
    }
    reset() {
      this.cl.D5(this.parameters.hd);
      this.cl.p5(this.parameters.hd);
      this.Uh.Pob();
      this.Lh.vob();
      this.Wga = !0;
    }
    tvb() {
      this.Lh.B1a();
    }
    Bvb() {
      this.Lh.J1a();
    }
    Dvb() {
      this.Lh.L1a();
    }
    Lvb() {
      this.Lh.yXa();
    }
    Vvb() {
      this.Lh.i2a();
    }
    X5(a) {
      this.Lh.Rma(a);
    }
    Fx(a, b) {
      this.Lh.Fx(a, b);
    }
    aL() {
      this.Lh.jnb();
    }
    nvb(a) {
      this.YH.xWa(a);
    }
    Waa(a, b) {
      this.YH.Waa(a, b);
    }
    Jab(a) {
      this.YH.inb(a);
    }
    KKa() {
      this.YH.c3a();
    }
    i5(a) {
      let b = this.type;
      a = new Ex(this.X9a(), this.Ofa(), this.Y9a(), b, a);
      this.Fia.$(a);
    }
    Nt(a) {
      let b = new Hx();
      b.info = a;
      this.tgb.$(b);
    }
  }
  mk.g = "408";
  mk.u = O;
  Object.assign(mk.prototype, { j: mk });
  class Hx {
    constructor() {
      this.info = null;
    }
  }
  Hx.g = "409";
  Object.assign(Hx.prototype, { j: Hx });
  class Tf extends O {
    constructor() {
      super();
      this.kS = new V();
      this.Kda = this.Ee = this.je = this.Id = this.dk = null;
      this.Wla = this.IJ = !1;
      this.TF = this.DU = 0;
      this.qma = -1;
      new H(-700, 580, 0, 1);
      new H(700, 580, 0, 1);
      Tf.instance = this;
      this.XH = new hb(pa.sd, pa.sd, pa.Ld, pa.Ld);
      this.Zia = !1;
      this.Ln = this.appendChild($a.Xv(E.get(1299), y.ZQa));
      this.Ln.sp = y.aRa;
      this.Ln.Jc.la(1.75);
      this.Ln.Qf = !1;
      let a = this;
      this.Ln.oa.addListener(function () {
        a.IJ &&
          a.round.$t &&
          !a.Zia &&
          ((a.Zia = !0),
          ya.f5a(function () {
            a.kS.$(0);
            a.Zia = !1;
          }));
      });
      this.Id = this.appendChild(new mk(0));
      this.je = this.appendChild(new mk(1));
    }
    e1() {
      return this.round != null ? this.round.rma * 60 : 0;
    }
    sja(a, b) {
      this.Ee = a;
      this.Kda = b;
      this.round = null;
      this.IJ = !1;
      this.Wla = !0;
      this.SA = new ea(E.Na(), this.node);
      this.SA.Ia(128);
      this.SA.La(Oa.Wv(-2147483648));
      this.SA.Uc(!1);
      this.Rp = new ea(E.Na(), this.node);
      this.Rp.Ia(128);
      this.Rp.La(Oa.dd(16767392));
      this.Rp.Uc(!1);
    }
    B() {
      super.B();
      Tf.instance = null;
    }
    init(a, b, c, d) {
      d == null && (d = !0);
      this.qma = -1;
      this.round = a;
      this.BI(this.Id, b, d);
      this.BI(this.je, c, d);
      this.Ee != null && this.Id != null && this.Id.cNa(this.Ee);
      this.Kda != null && this.je != null && this.je.cNa(this.Kda);
      this.reset();
    }
    BI(a, b, c) {
      b.w6 = this.round.jL;
      a.init(b, c);
      a.u3.addListener(w(this, this.u3));
    }
    u3(a) {
      this.kS.$(a == 0 ? 3 : 4);
    }
    ia() {
      this.layout();
      this.IJ && this.round.$t && this.zPa();
      this.Id.ia(this.round.$t);
      this.je.ia(this.round.$t);
      this.Id.HKa();
      this.je.HKa();
    }
    zPa() {
      --this.DU;
      this.TF = (this.DU / 60) | 0;
      this.TF != this.qma &&
        ((this.qma = this.TF),
        this.Rp.V(K.T((this.TF < 10 ? "0" : null) + Math.max(0, this.TF))),
        this.SA.V(this.Rp.OD()));
    }
    reset() {
      this.IJ = !1;
      this.DU = this.round.rma * 60 + 1;
      this.Id.reset();
      this.je.reset();
      this.zPa();
      this.Ln.Qf = !0;
    }
    bL() {
      this.IJ && (this.Id.bL(), this.je.bL());
    }
    layout() {
      var a = ma.Qq;
      let b = a.N - a.K;
      var c = b / (a.X - a.P);
      let d = c < 0.4 ? 0.4 : c > 1.5 ? 1.5 : c;
      c = Math.min(a.N - a.K, a.X - a.P) / 2;
      let e = d < 1 ? 1 : d > 1.1 ? 1.1 : d,
        f = c * 0.07;
      d < 1 && (f += (1 - d) * 200);
      let g =
        1 + (((d < 1 ? 1 : d > 1.5 ? 1.5 : d) - 1) / 0.5) * 0.10000000000000009;
      c = (c / 675) * g;
      this.Id.node.C((a.K + a.N) * 0.5 - 520 * c * e);
      this.Id.node.D(a.P + 150 * c + f * g);
      this.Id.node.la(c);
      this.Id.qMa();
      this.je.node.C((a.K + a.N) * 0.5 + 520 * c * e);
      this.je.node.D(a.P + 150 * c + f * g);
      this.je.node.la(c);
      this.je.qMa();
      this.Rp.C(b / 2);
      this.Rp.D(this.Id.node.qa - 120 * c);
      this.Rp.Ga();
      this.Rp.ua(120 * c);
      this.SA.C(this.Rp.za + 3);
      this.SA.D(this.Rp.qa + 3);
      this.SA.Ga();
      this.SA.ua(this.Rp.effect.fontSize);
      this.Ln.node.C(b / 2);
      a = 1 - d;
      this.Ln.node.D(this.Id.node.qa + (a < 0 ? 0 : a > 1 ? 1 : a) * 25);
      this.Ln.node.la(c * 0.8);
      a = 135 * c;
      this.XH.K = b / 2 - (a * 3.5) / 2;
      this.XH.N = b / 2 + (a * 3.5) / 2;
      this.XH.P = this.Ln.node.qa + 100 * c;
      this.XH.X = this.XH.P + a;
      this.dk != null &&
        (this.dk.node.C(b / 2),
        this.dk.node.D(this.Ln.node.qa + 100 * c),
        this.dk.node.la(c * 0.65));
    }
    play() {
      this.IJ = this.round.$t = !0;
      this.Ln.Qf = !0;
    }
    strike(a, b, c, d, e, f, g, h) {
      this.Id != null &&
        this.je != null &&
        ((b = c == 0 ? this.je : this.Id),
        (c = c == 0 ? this.Id : this.je),
        h && b.Vvb(),
        f && b.tvb(),
        g ? b.mZa() : (b.fna(a), d && b.Bvb(), e && b.Dvb(), (c.Wga = !1)));
    }
    Jzb() {
      var a = this.Id;
      a != null && a.L6();
      a = this.je;
      a != null && a.L6();
    }
    qla(a) {
      this.node.R(a);
      a && !ya.hasFeature("pause") && (a = !1);
      this.Ln.Y(this.Wla && a);
    }
    blb(a) {
      (this.Wla = a) && !ya.hasFeature("pause") && (a = !1);
      this.Ln.Y(a);
    }
    Rma(a, b) {
      switch (b) {
        case 1:
          b = this.Id;
          b != null && b.X5(a);
          break;
        case 2:
          b = this.je;
          b != null && b.X5(a);
          break;
        case 3:
          ((b = this.Id),
            b != null && b.X5(a),
            (b = this.je),
            b != null && b.X5(a));
      }
    }
    Iw(a) {
      this.Id.Iw(a);
      this.je.Iw(a);
    }
    Jr(a, b) {
      switch (a) {
        case 1:
          a = this.Id;
          a != null && a.Jr(b);
          break;
        case 2:
          a = this.je;
          a != null && a.Jr(b);
          break;
        case 3:
          ((a = this.Id),
            a != null && a.Jr(b),
            (a = this.je),
            a != null && a.Jr(b));
      }
    }
    fCa(a) {
      return a == 0 ? this.Id : this.je;
    }
    vt(a) {
      a = this.fCa(a);
      return a != null ? a.jab() : null;
    }
    DP(a, b, c, d, e) {
      this.dk == null &&
        ((this.dk = new Fx()),
        this.dk.init(d, e, c),
        this.dk.node.C(a),
        this.dk.node.D(b),
        this.node.appendChild(this.dk.node));
    }
    NU(a, b) {
      this.dk != null && (this.dk.Bla(a), this.dk.type == 0 && this.dk.Lla(b));
    }
    oT() {
      let a = this.dk;
      a != null && a.B();
      this.dk = null;
    }
    t5(a, b) {
      a = a ? this.Id : this.je;
      a != null && a.t5(b);
    }
    Fx(a, b, c) {
      a ? this.Id.Fx(b, c) : this.je.Fx(b, c);
    }
    aL() {
      var a = this.Id;
      a != null && a.aL();
      a = this.je;
      a != null && a.aL();
    }
    static p5a() {
      return Tf.instance.XH;
    }
  }
  Tf.g = "40A";
  Tf.u = O;
  Object.assign(Tf.prototype, { j: Tf });
  class Mr extends O {
    constructor() {
      super();
      this.action = null;
      this.oI = this.LX = this.Mta = this.rA = !1;
      this.YI = this.Rk = 0;
      this.fT = !1;
      this.d6 = this.eT = this.MA = 0;
      this.vC = this.xs = this.Ao = null;
    }
    aNa(a) {
      this.Mta = a;
      this.oI = !0;
    }
    LCa() {
      return this.action != null ? this.action.Nv : 0;
    }
    Zfa() {
      return this.action != null ? this.action.Xf : 0;
    }
    Nub(a) {
      this.LX = a;
      this.xs != null && this.xs.R(this.LX);
    }
    VCa() {
      return this.Zfa() - this.LCa();
    }
    init(a) {
      this.action = a;
      this.Kd(a.image);
      this.aNa(!0);
      this.oI = !0;
      this.rA = !1;
      this.Rk = 0;
      this.YI = Ob.YI;
      this.Nub(a.ox);
      this.Ao = R.aa(E.get(248), Eb.replace(a.image, ".", "/"), this.node);
      this.Ao.Ga();
      this.Ao.wa(0);
      this.xs = R.aa(E.get(248), y.yTa, this.node);
      this.xs.Ga();
      this.xs.wa(this.YI);
      this.xs.la(2);
      this.vC = new ea(E.Na(), this.node);
      this.vC.Fa(this.Ao.ya(), this.Ao.ra());
      this.vC.Ia(2);
      this.vC.Ga();
      this.vC.R(!1);
    }
    fbb() {
      this.Rk < 1 &&
        ((this.Rk += 1 / Ob.Nza.x),
        this.Rk >= 1 && ((this.Rk = 1), (this.oI = !1)),
        this.Ao.wa(this.Rk));
    }
    N2a() {
      this.Rk > 0 &&
        ((this.Rk -= 1 / Ob.Nza.y),
        this.Rk <= 0 && ((this.Rk = 0), (this.oI = !1)),
        this.Ao.wa(this.Rk));
    }
    ia() {
      this.v4();
      this.stack();
      if (this.LX && this.xs != null) {
        var a = this.Zfa() != 0 ? this.LCa() / this.Zfa() : 0;
        a = 1 + Math.round((a < 0 ? 0 : a > 1 ? 1 : a) * 72);
        this.xs.yb("fill/00" + (a < 10 ? "0" : "") + a);
      }
      this.oI &&
        (this.Mta ? this.fbb() : this.N2a(),
        this.LX && this.xs != null && this.xs.wa((this.YI / 1) * this.Rk),
        this.Rk == 0 && this.B());
    }
    v4() {
      if (!(this.eT <= 0)) {
        var a = Ob.WJa,
          b = Ob.VJa.x,
          c = Ob.VJa.y,
          d = Ob.v4.x,
          e = Ob.v4.y,
          f = (this.fT ? d : e) | 0,
          g = this.fT ? 1 : a;
        this.MA > f && ((this.fT = !this.fT), (this.MA = 0));
        this.MA <= f &&
          (this.fT
            ? (g =
                1 +
                ((a - 1) / d) *
                  ((b * Math.pow(this.MA, 2)) / d + (1 - b) * this.MA))
            : ((g =
                a -
                ((a - 1) / e) *
                  ((c * Math.pow(this.MA, 2)) / e + (1 - c) * this.MA)),
              g <= 1 && this.eT--));
        this.la(g * 0.5);
        this.MA++;
      }
    }
    stack() {
      this.vC.R(this.d6 > 0);
      this.d6 > 0 && this.vC.V(K.T(this.d6));
    }
    B() {
      super.B();
      this.rA = !0;
      this.oI = !1;
    }
    az(a) {
      return a == null ? 1 : qb(this.VCa(), a.VCa());
    }
  }
  Mr.g = "40B";
  Mr.u = O;
  Object.assign(Mr.prototype, { j: Mr });
  class Nr extends O {
    constructor() {
      super();
      this.stack = null;
      this.rA = !1;
      this.ZI = 0;
      this.uj = m.l();
    }
    init() {
      this.ZI = 0;
      this.rA = !1;
    }
    wWa(a) {
      this.appendChild(a);
      a.eT = 0;
      this.uj.push(a);
      this.uj.sort(function (b, c) {
        return b.az(c);
      });
      this.uj[this.uj.length - 1].eT++;
    }
    move() {
      if (this.node.za != this.ZI) {
        let a = this.ZI < this.node.za;
        this.C(this.node.za + (a ? -10 : 10));
        a != this.ZI < this.node.za && this.C(this.ZI);
      }
    }
    B() {
      super.B();
      this.rA = !0;
    }
    ia() {
      this.move();
      let a = m.l(),
        b = 0,
        c = this.uj;
      for (; b < c.length; ) {
        let e = c[b];
        ++b;
        e.ia();
        e.rA && a.push(e);
      }
      let d = this;
      m.forEach(a, function (e) {
        J.remove(d.uj, e);
      });
      this.uj.length == 0 && this.B();
    }
  }
  Nr.g = "40C";
  Nr.u = O;
  Object.assign(Nr.prototype, { j: Nr });
  class Lr extends O {
    constructor(a) {
      super();
      this.lUa = a;
      this.uj = m.l();
      this.Vx = m.l();
      let b = Ob.spacing;
      this.OVa = new H(b.x * 0.2, b.y * 0.2, 0, 1);
      this.node.C(a == 0 ? 185 : -185);
      this.node.D(140);
    }
    Waa(a, b) {
      b = b.action;
      let c = b.U2,
        d = 0,
        e = this.uj;
      for (; d < e.length; ) {
        let f = e[d];
        ++d;
        f.action == a && (c == 1 && f.eT++, c == 2 && (f.d6 = b.e6.Wb().Zn()));
      }
    }
    xWa(a) {
      a != null && this.m1a(a);
    }
    m1a(a) {
      let b = new Mr();
      b.init(a);
      let c = a.stack;
      a = null;
      if (c != "") {
        debugger;
        a = m.find(this.Vx, function (d) {
          return d.stack == c;
        });
      }
      a == null &&
        ((a = this.appendChild(ra.Ya(Nr, [].slice()))),
        a.init(Ob.PNa, Ob.QNa),
        (a.stack = c),
        this.Vx.push(a));
      a.wWa(b);
      this.uj.push(b);
    }
    inb(a) {
      if (a != null)
        for (var b = 0, c = this.uj; b < c.length; ) {
          let d = c[b];
          ++b;
          if (d.action == a) {
            d.aNa(!1);
            break;
          }
        }
    }
    c3a() {
      m.forEach(this.uj, function (a) {
        a.B();
      });
      this.uj.length = 0;
      m.forEach(this.Vx, function (a) {
        a.B();
      });
      this.Vx.length = 0;
    }
    qob() {
      let a = 0,
        b = this.OVa.x,
        c = this.lUa == 0 ? 1 : -1,
        d = 0,
        e = this.Vx;
      for (; d < e.length; ) {
        let f = e[d];
        ++d;
        f.ZI = a;
        a += b * c;
        a += f.node.ya() * c;
      }
    }
    ia() {
      let a = 0;
      for (; a < this.Vx.length; ) {
        let b = this.Vx[a];
        b.ia();
        b.rA && (m.ye(this.Vx, a), --a);
        ++a;
      }
      for (a = 0; a < this.uj.length; )
        (this.uj[a].rA && (m.ye(this.uj, a), --a), ++a);
      this.qob();
    }
  }
  Lr.g = "40D";
  Lr.u = O;
  Object.assign(Lr.prototype, { j: Lr });
  class Ix {
    constructor() {
      this.node = new Ea();
      this.DZ = 0;
      this.label = this.image = null;
    }
    init(a) {
      this.DZ = a;
      this.image = R.aa(E.get(1315), this.C8a(a), this.node);
      this.label = new ea(E.get(1313), this.node);
      this.label.Fa(100, this.image.ra());
      this.label.D(-this.image.ra() / 2);
      var b = this.image;
      b.C(b.za - this.image.ea.x);
      if (a == 4) {
        this.label.La(Oa.dd(16758585));
        b = this.image.ra();
        let c = b * 1.2;
        this.label.Fa(100, c);
        this.label.ua(c);
        this.label.Ia(64);
        this.label.D(-((c - b) / 2));
      }
      a == 3 && (this.label.La(Oa.dd(16777087)), this.label.S4());
    }
    G6(a) {
      this.label.V(a == null ? "null" : "" + a);
      this.label.R(!0);
    }
    C8a(a) {
      switch (a) {
        case 0:
          return y.MQa;
        case 1:
          return y.OQa;
        case 2:
          return y.KQa;
        case 3:
          return y.JQa;
        case 4:
          return y.PQa;
        case 5:
          return y.TQa;
        default:
          return "";
      }
    }
  }
  Ix.g = "40E";
  Object.assign(Ix.prototype, { j: Ix });
  class Kr extends fd {
    constructor(a) {
      super();
      this.CUa = new H(0, 200, 0, 1);
      this.Lu = m.l();
      this.Uqa = !1;
      this.saa = this.nq = this.Xpa = this.uV = 0;
      this.node = new Ea();
      this.Ee = new Fh();
      this.pe = a;
      this.Xpa = this.Wq(3);
    }
    zI(a) {
      let b = new Ix();
      b.init(a, this.pe);
      return b;
    }
    B1a() {
      this.Ee.Vwb++;
      this.addElement(this.zI(2));
    }
    i2a() {
      this.Ee.m6++;
      this.addElement(this.zI(5));
    }
    J1a() {
      this.Ee.k6++;
      this.addElement(this.zI(0));
    }
    L1a() {
      this.Ee.Wwb++;
      this.addElement(this.zI(1));
    }
    z1a(a) {
      let b = this.zI(3);
      b.G6(a);
      return this.addElement(b);
    }
    N1a(a) {
      let b = this.zI(4);
      b.G6(a);
      return this.addElement(b);
    }
    addElement(a) {
      this.node.appendChild(a.node);
      var b = this.CUa.y;
      let c,
        d = b;
      c = a.node.$n(new H(this.pe == 0 ? 0 : N.width, 0, 0, 1)).x;
      this.Lu.length > 0 && (d = b + this.Lu.length * 100);
      a.node.C(c);
      a.node.D(d);
      b = new Jx();
      b.count = this.Wq(a.DZ);
      b.target = a;
      b.type = a.DZ;
      b.VEa = a.DZ == 4;
      b.Wp = c;
      b.F_ = this.pe == 0 ? 400 : -400;
      this.Lu.push(b);
      return b;
    }
    Uua(a) {
      let b = this.Ee.j6;
      this.Ee.j6 = b < a ? a : b;
      this.Ee.YNa = this.Ee.q6a();
    }
    yXa() {
      this.Ee.l6++;
    }
    vob() {
      this.nq = 0;
    }
    Rma(a) {
      this.saa = a;
      a = m.find(this.Lu, function (b) {
        return b.type == 4;
      });
      a == null && (a = this.N1a(this.saa));
      a.count = this.Wq(a.type);
      a.target.G6(this.saa);
    }
    Iw(a) {
      this.Uqa = a;
    }
    Fx(a, b) {
      this.nq = a;
      this.nq > 0 && (this.uV = 0);
      if (this.nq >= v.fw()) {
        var c = m.find(this.Lu, function (d) {
          return d.type == 3;
        });
        a = !1;
        c == null && ((c = this.z1a(this.nq)), (a = !0));
        c.count = this.Wq(c.type, b);
        c.target.G6(this.nq);
        b = this.Ee.pU;
        c = this.nq;
        this.Ee.pU = b < c ? c : b;
        this.createEvent(a ? 0 : 1);
      }
    }
    jnb() {
      let a = 0,
        b = this.Lu;
      for (; a < b.length; ) b[a++].target.node.B();
      this.Lu.length = 0;
    }
    createEvent(a) {
      let b = new Kx();
      b.Wi = this.nq;
      b.type = a;
      this.hh(0, b);
    }
    Wq(a, b) {
      b == null && (b = 0);
      switch (a) {
        case 3:
          return ((a = v.ECa() + b), a < 0 ? 0 : a);
        case 4:
          return v.m$a();
        default:
          return v.Q9a();
      }
    }
    E_a(a) {
      return a.VEa ? !0 : !this.Uqa;
    }
    xzb() {
      let a = m.l();
      for (var b = 0, c = this.Lu; b < c.length; ) {
        let d = c[b];
        ++b;
        this.E_a(d) &&
          (d.count > 0
            ? ((d.Gga = !1),
              !d.move() ||
                (d.type == 4 && v.qn() != 1) ||
                ((d.Gga = !0), --d.count == 0 && ((d.ip = !0), (d.time = 0))))
            : ((d.Gga = !1), d.move() && a.push(d)));
      }
      for (b = 0; b < a.length; )
        ((c = a[b]), ++b, J.remove(this.Lu, c), c.target.node.B());
    }
    ia() {
      this.xzb();
      this.nq > 0 &&
        (this.uV >= this.Xpa
          ? (this.nq >= v.fw() && this.createEvent(2), (this.nq = this.uV = 0))
          : this.uV++);
    }
  }
  Kr.g = "40F";
  Kr.u = fd;
  Object.assign(Kr.prototype, { j: Kr });
  class Kx {
    constructor() {
      this.Wi = this.type = 0;
    }
  }
  Kx.g = "410";
  Object.assign(Kx.prototype, { j: Kx });
  class Jx {
    constructor() {
      this.ip = !1;
      this.Wp = this.F_ = this.time = 0;
      this.type = 3;
      this.Gga = this.VEa = !1;
      this.count = 0;
      this.target = null;
    }
    move() {
      this.time += L.J.uk.Cm;
      let a = Math.min(1, this.time / 0.5),
        b = this.ip ? dc.PK()(1 - a) : dc.Nn()(a),
        c = this.Wp;
      this.target.node.C(c + (this.F_ - c) * b);
      return a == 1;
    }
  }
  Jx.g = "411";
  Object.assign(Jx.prototype, { j: Jx });
  class Fh {
    constructor() {
      this.p_ = new Cl();
      this.oc = new Lx();
      this.l6 = this.Vwb = this.k6 = this.Wwb = this.pU = this.m6 = 0;
      this.YNa = Fh.SAa(0);
      this.j6 = 0;
    }
    DXa(a, b, c, d, e, f, g, h) {
      this.oc.ewa += a;
      this.oc.WY += v.Xk(b);
      this.oc.VY += c;
      this.oc.Y3 += v.Xk(Math.trunc(Math.ceil(a * d) * this.l6 + 0.5));
      this.oc.hp += v.Xk(Math.trunc(Math.ceil(a * e) * this.k6 + 0.5));
      this.oc.Wi += v.Xk(Math.trunc(Math.ceil(a * f) + 0.5) * this.pU);
      this.oc.KZ += v.Xk(Math.trunc(Math.ceil(a * h[this.j6]) + 0.5));
      this.oc.Ub += v.Xk(Math.trunc(Math.ceil(a * g) * this.m6 + 0.5));
      this.oc.v6 =
        this.oc.WY +
        this.oc.Y3 +
        this.oc.hp +
        this.oc.Wi +
        this.oc.KZ +
        this.oc.Ub;
      this.oc.DOa = this.oc.VY;
    }
    q6a() {
      return Fh.SAa(this.j6);
    }
    static SAa(a) {
      switch (a) {
        case 0:
          return "goldTurtleStyle";
        case 1:
          return "goldHardStyle";
        case 2:
          return "goldBrutalStyle";
        case 3:
          return "goldAgressiveStyle";
        case 4:
          return "goldCrazyStyle";
        case 5:
          return "goldFantasticStyle";
      }
    }
  }
  Fh.g = "412";
  Object.assign(Fh.prototype, { j: Fh });
  class Lx {
    constructor() {
      this.v6 =
        this.DOa =
        this.Y3 =
        this.hp =
        this.Wi =
        this.Ub =
        this.KZ =
        this.ewa =
        this.WY =
        this.VY =
          0;
    }
  }
  Lx.g = "413";
  Object.assign(Lx.prototype, { j: Lx });
  class Cl {
    constructor() {
      this.c_ = new Map();
    }
    add(a, b, c) {
      X.Xa(this.c_, b) || this.c_.set(b, new Map());
      b = this.c_.get(b);
      b.set(c, X.Xa(b, c) ? b.get(c) + a : a);
    }
    append(a) {
      a = a.c_.entries();
      let b = a.next();
      for (; !b.done; ) {
        var c = b.value;
        b = a.next();
        let d = c[0];
        c = c[1].entries();
        let e = c.next();
        for (; !e.done; ) {
          let f = e.value;
          e = c.next();
          this.add(f[1], d, f[0]);
        }
      }
    }
  }
  Cl.g = "414";
  Object.assign(Cl.prototype, { j: Cl });
  class Or extends O {
    constructor() {
      super();
      this.Kf = null;
    }
    Qka(a) {
      this.Kf = this.appendChild(new oe(a));
    }
    completed() {
      R.aa(E.get(2), y.BTa, this.node).Ga();
    }
  }
  Or.g = "415";
  Or.u = O;
  Object.assign(Or.prototype, { j: Or });
  class lk extends O {
    constructor(a) {
      super();
      this.Ji = a;
      this.Qa = R.aa(E.mya(750), null, this.node);
      this.Qa.wa(0);
      this.Qa.xh(6, 1, 1);
      this.Qa.Ga();
      this.content = this.appendChild(ra.Ya(O, [].slice()));
      this.ls = this.appendChild($a.bJ(Fc.Ed(0, this.node.L).L));
      this.ls.Y(!1);
      this.ls.Y(!0);
      a = this.Ji.zd();
      this.sT = R.aa(E.get(1315), null, this.content.node);
      this.sT.yb(a ? y.Xna : y.Wna);
      this.sT.Ga();
      this.sT.C(375);
      this.sT.D(60);
      this.sT.la(0.5);
      this.GH = this.Ji.jj.Dr;
      this.Ol = this.Ji.jj.Qk;
      this.Pta = this.kvb();
      this.Qta = this.GH.length > 0;
      this.baa = !0;
      if (this.Qta) debugger;
      if (this.Pta) debugger;
      this.Fxa();
    }
    B() {
      super.B();
      E.Rya();
    }
    Z(a) {
      super.Z(a);
      this.layout();
    }
    $fb() {
      this.IB.Xda();
      this.ls.Y(!1);
    }
    layout() {
      let a = ma.Qq,
        b = a.hn(1.0714285714285714);
      this.node.C(b.K);
      this.node.D(b.P);
      this.node.la((b.N - b.K) / 750);
      this.Qa.C(375);
      this.Qa.D(350);
      this.Qa.Th((a.N - a.K) / this.Qa.ea.x / this.node.Db);
      this.Qa.oj((a.X - a.P) / this.Qa.ea.y / this.node.Db);
    }
    kvb() {
      let a = 0,
        b = this.Ol;
      for (; a < b.length; )
        if (qd(b[a++].PL.currency.name, "ForgeMaterial")) return !0;
      return !1;
    }
    wvb() {
      this.zZ();
      let a = this;
      this.baa &&
        (this.ls.oa.addListener(w(this, this.$fb)),
        (this.baa = !1),
        (this.IB = this.content.appendChild(
          new Pr(this.Ji, this.ls, this.Yob(ca.Ka()), this.hvb(ca.Ka())),
        )),
        this.IB.jca.addListener(w(this, this.Fxa)),
        this.IB.lba.addListener(function () {
          a.ls.Y(!1);
        }),
        this.IB.hka.addListener(w(this, this.Zob)),
        this.IB.aga.addListener(lk.wab));
    }
    Rvb() {
      debugger;
      this.zZ();
    }
    Fxa() {
      this.zZ();
      let a = this;
      if (!this.Pta)
        if (this.baa)
          wh.delay(function () {
            L.J.qx("break:result", w(a, a.wvb));
          }, 500);
        else if (this.Qta) this.Rvb();
        else {
          let b = this.Ji;
          L.J.qx("button:result:continue", function () {
            v.Exa(b);
          });
        }
    }
    zZ() {
      let a = this.IB;
      a != null && a.B();
      this.IB = null;
    }
    Zob() {
      debugger;
      ha.F().hca();
      ha.F().Vf("QUEST_EVENT_REPLAY_BUTTON_PRESS") ||
        (this.zZ(), this.B(), v.Uob());
    }
    Yob(a) {
      return !ca.dab() || a.Da.Wya || Cb(a.Da.og.YQ(), "Stranger")
        ? !1
        : this.Ji.zd()
          ? a.Da.type == "FightSurvival"
          : !0;
    }
    hvb(a) {
      return a.Da.type == "FightSurvival" || p.o.Bi.$Q() ? !1 : !this.Ji.zd();
    }
    static wab() {
      ha.F().Vf("QUEST_EVENT_SHOP_BUTTON_PRESS");
    }
  }
  lk.g = "416";
  lk.u = O;
  Object.assign(lk.prototype, { j: lk });
  class kk extends O {
    constructor() {
      super();
      this.scrollX = this.Wp = this.index = this.FY = 0;
      this.jf = Fc.Ed(-16777216);
      this.node.L.appendChild(this.jf.L);
      this.content = this.appendChild(ra.Ya(O, [].slice()));
      this.Qa = R.aa(E.get(4, 6), null, this.content.node);
      this.Qa.Ga();
      this.Qa.C(512);
      this.Qa.D(512);
      this.iQ = this.content.appendChild(ra.Ya(O, [].slice()));
      this.state = 0;
      this.Tc = new V();
    }
    init(a, b, c, d) {
      d == null && (d = "");
      this.index = b;
      if (d != null && d != "") {
        debugger;
        this.seb.V("^" + d + "^");
        this.seb.R(!0);
      }
      d = this.scrollX = 0;
      this.Pq = [];
      let e = 0,
        f = 0;
      for (; f < a.length; ) {
        var g = a[f++],
          h = this.iQ.appendChild(ra.Ya(Or, [].slice()));
        h.Qka(g.Kf);
        b > e && h.completed();
        this.Pq.push(h);
        g = h.Kf.size;
        h.node.C(d);
        d += g * 0.8;
        ++e;
        e == a.length &&
          c &&
          (h.node.la(1.4), (h = h.node), h.C(h.za + (g * 1.4 - g) / 2));
      }
      a = this.Pq;
      this.Wp = -(a[a.length - 1].node.za - this.Pq[0].node.za);
      a = this.Pq;
      this.Wp =
        (this.Wp -= this.Pq[0].Kf.size / 2) - a[a.length - 1].Kf.size / 2;
      this.iQ.node.wa(0);
      this.FY = 4.6;
    }
    B() {
      super.B();
    }
    layout() {
      let a = N.hn(1);
      this.content.C(a.K);
      this.content.D(a.P);
      this.content.la((a.N - a.K) / 1024);
      this.Xqb();
    }
    Xqb() {
      let a = N.lc;
      a > 1 && this.Qa.Th(N.width / this.Qa.ea.x / this.content.node.Db);
      this.Qa.oj(
        (N.height / this.Qa.ea.y / this.content.node.Db) *
          (0.7 +
            (((a < 0.5 ? 0.5 : a > 1 ? 1 : a) - 0.5) / 0.5) *
              0.30000000000000004),
      );
      a > 1 && this.Qa.OMa(a);
      this.Qa.D(512);
    }
    Z(a) {
      super.Z(a);
      this.layout();
      switch (this.state) {
        case 0:
          this.scrollX = this.Wp;
          a = this.fd(0.1);
          this.iQ.node.wa(a);
          a == 1 && ((this.time = 0), this.state++);
          break;
        case 1:
          a = 2;
          this.index == this.Pq.length - 1 && (a = 1);
          a = this.fd(a);
          var b = this.Wp;
          this.scrollX = b + (512 - this.Pq[this.index].node.za - b) * a;
          a == 1 && ((this.time = 0), this.state++);
          break;
        case 2:
          this.time > 0.5 && ((this.time = 0), this.state++);
          break;
        case 3:
          a = this.fd(0.5);
          b = 0;
          let d = this.Pq.length;
          for (; b < d; ) {
            var c = b++;
            if (c == this.index) {
              let e = (c = this.index == this.Pq.length - 1) ? 1.4 : 1;
              this.Pq[this.index].node.la(e + ((c ? 2 : 1.4) - e) * a);
            } else this.Pq[c].Kf.node.wa(1 + -0.5 * a);
          }
          a == 1 && ((this.time = 0), this.state++);
          break;
        case 4:
          if (this.fd(1.5) == 1) {
            this.Tc.$();
            this.state++;
            return;
          }
      }
      this.iQ.C(this.scrollX);
      this.iQ.D(512);
    }
  }
  kk.g = "417";
  kk.u = O;
  Object.assign(kk.prototype, { j: kk });
  class Hr extends O {
    constructor() {
      function a(f) {
        f = new Qr(f);
        d.content.appendChild(f.node);
        d.appendChild(f);
        c.push(f);
        return f;
      }
      super();
      this.Qa = R.aa(E.mya(900), null, this.node);
      this.Qa.wa(0);
      this.Qa.xh(6, 1, 0.25);
      this.Qa.Ga();
      this.content = new Ea(this.node);
      var b = R.aa(E.get(1307), y.WQa, this.content);
      b.Ga();
      b.C(450);
      b.D(280);
      let c = [],
        d = this;
      this.home = a(y.VQa);
      this.Ap = a(db.op() ? y.Yna : y.Zna);
      this.cma = a(db.Pz() ? y.$na : y.aoa);
      this.play = a(y.YQa);
      L.J.bg.YA(db.op() ? 0 : 0.1);
      for (b = 0; b < 4; ) {
        var e = b++;
        c[e].node.C(e * (c[e].W.ea.x + 25));
        c[e].node.D(440.00000000000006);
      }
      b = c[0].W.ea.x;
      b = (900 - (4 * b + 75)) / 2 + b / 2;
      for (e = 0; e < 4; ) {
        let f = c[e++].node;
        f.C(f.za + b);
      }
      b = ca.Ka().Da.MD();
      b != null &&
        b != "" &&
        ((this.UA = new ea(E.Na(), this.content)),
        this.UA.Fa(800, 60),
        this.UA.C(50),
        this.UA.D(550),
        this.UA.ua(60),
        this.UA.Ia(128),
        this.UA.La(Oa.dd(16627016)),
        this.UA.V(Y.na(b)),
        this.UA.Uk());
    }
    B() {
      super.B();
      E.Rya();
      E.B(1307);
      L.J.bg.YA(db.op() ? 0 : 1);
    }
    Z(a) {
      super.Z(a);
      this.layout();
      this.home.Eb
        ? (sb.xm(), this.Thb())
        : this.Ap.Eb
          ? (db.aU(!db.op()),
            db.op() ? this.Ap.W.yb(y.Yna) : this.Ap.W.yb(y.Zna),
            sb.xm(),
            db.op() || L.J.bg.YA(0.1),
            ya.zQ(db.op() && db.Pz()))
          : this.cma.Eb
            ? (db.bU(!db.Pz()),
              db.Pz() ? this.cma.W.yb(y.$na) : this.cma.W.yb(y.aoa),
              sb.xm(),
              ya.zQ(db.op() && db.Pz()))
            : this.play.Eb && ya.i5a(w(this, this.resume));
    }
    resume() {
      L.J.bg.YA(db.op() ? 0 : 1);
      this.hhb();
    }
    layout() {
      let a = ma.Qq;
      var b = a.hn(1.125);
      this.content.C(b.K);
      this.content.D(b.P);
      this.content.la((b.N - b.K) / 900);
      b = N.rect;
      this.Qa.C(b.w / 2);
      this.Qa.D(b.v / 2);
      this.Qa.xc(a.N - a.K);
      this.Qa.oj(a.X - a.P);
    }
  }
  Hr.g = "418";
  Hr.u = O;
  Object.assign(Hr.prototype, { j: Hr });
  class Qr extends $a {
    constructor(a) {
      super();
      let b = E.get(1307);
      this.ix(b, a);
      this.fill = R.aa(b, y.XQa, this.node);
      this.fill.wa(0.5);
      this.fill.Ga();
      this.fill.j5();
      this.fill.R(!1);
    }
    bx(a) {
      this.fill.R(a);
    }
  }
  Qr.g = "419";
  Qr.u = $a;
  Object.assign(Qr.prototype, { j: Qr });
  class jk extends O {
    constructor(a, b) {
      function c(f, g, h, k) {
        let l = new ea(E.Na(), e.node);
        l.V(f);
        l.Fa(400, 50);
        l.C(g);
        l.D(h);
        l.Ga();
        l.ua(80);
        l.Ia(128);
        l.La(k);
        l.R(!1);
        return l;
      }
      super();
      this.ld = -1;
      this.F3 = this.ng = null;
      this.jf = Fc.Ed(-16777216);
      this.node.L.appendChild(this.jf.L);
      this.Qa = R.aa(E.get(4, 6), null, this.node);
      this.Qa.Ga();
      this.Qa.C(512);
      this.Qa.D(286);
      this.Vn = new Ea(this.node);
      this.Vn.C(512);
      this.Vn.D(286);
      this.Vn.la(1.6);
      this.Vn.Xg(27);
      this.QF = R.aa(E.get(2), y.CTa, this.Vn);
      this.QF.jk(1, 0.5);
      this.QF.Un(1, 0.5);
      this.QF.zl(vc.lo(Jc.mo, 0));
      this.zx = R.aa(E.get(2), y.DTa, this.Vn);
      this.zx.jk(0, 0.5);
      this.zx.Un(0, 0.5);
      this.zx.zl(vc.lo(Jc.mo, 0));
      var d = this.zx;
      d.C(d.za - 2);
      d = this.zx;
      d.D(d.qa - 6);
      this.Yr = R.aa(E.get(2), y.ETa, this.node);
      this.Yr.Ga();
      this.Yr.C(512);
      this.Yr.D(286);
      d = this.Yr;
      d.C(d.za - 26);
      d = this.Vn;
      d.D(d.qa + 10);
      this.Yr.la(10);
      this.Yr.wa(0);
      this.JK = this.appendChild(new oe(a.Kf));
      this.JK.C(512);
      this.JK.D(286);
      d = this.JK;
      d.C(d.node.za + -330);
      d = this.JK;
      d.D(d.node.qa + 80);
      this.JK.ip();
      this.XS = this.appendChild(new oe(b.Kf));
      this.XS.C(512);
      this.XS.D(286);
      d = this.XS;
      d.C(d.node.za + 330);
      d = this.XS;
      d.D(d.node.qa + -80);
      let e = this;
      a = Y.na(a.ft);
      this.rfb = c(a, 185, 114, Oa.Wv(-2147483648));
      this.qfb = c(a, 182, 111, Oa.dd(16767392));
      a = Y.na(b.ft);
      this.tfb = c(a, 845, 464, Oa.Wv(-2147483648));
      this.sfb = c(a, 842, 461, Oa.dd(16767392));
      this.FY = 3.4000000000000004;
      this.ld = 0;
      this.Z(0);
    }
    B() {
      super.B();
      E.B(4);
      E.B(2);
    }
    Z(a) {
      super.Z(a);
      this.layout();
      switch (this.ld) {
        case 0:
          var b = this.fd(0.6);
          this.JK.C(-388 + 570 * dc.Nn()(b));
          this.XS.C(1412 + -570 * dc.Nn()(b));
          b == 1 && b == 1 && ((this.time = 0), this.ld++);
          break;
        case 1:
          this.time > 0.2 && ((this.time = 0), this.ld++);
          break;
        case 2:
          b = this.fd(0.2);
          this.Yr.wa(b);
          this.Yr.la(10 + (this.eAb - 10) * dc.Nn()(b));
          b == 1 && ((this.time = 0), this.ld++);
          break;
        case 3:
          this.time > 0.2 && ((this.time = 0), this.ld++);
          break;
        case 4:
          b = this.fd(0.1);
          this.QF.zl(vc.lo(Jc.mo, b));
          b == 1 && ((this.time = 0), this.ld++);
          break;
        case 5:
          b = this.fd(0.1);
          this.zx.zl(vc.lo(Jc.mo, b));
          b == 1 && ((this.time = 0), this.ld++);
          break;
        case 6:
          this.time > 0.2 && ((this.time = 0), this.ld++);
          break;
        case 7:
          this.rfb.R(!0);
          this.qfb.R(!0);
          this.tfb.R(!0);
          this.sfb.R(!0);
          this.time > 0.1 && ((this.time = 0), this.ld++);
          break;
        case 8:
          this.ng();
          this.ng = null;
          this.time = 0;
          this.ld++;
          break;
        case 9:
          this.time > 2 && ((this.time = 0), this.ld++);
          break;
        case 10:
          (this.F3(), (this.F3 = null), (this.time = 0), this.ld++);
      }
      b = this.node;
      b != null && b.update(a);
    }
    layout() {
      var a = N.hn(1.7902097902097902);
      this.node.C(a.K);
      this.node.D(a.P);
      this.node.la((a.N - a.K) / 1024);
      a = N.lc;
      a > 1 && this.Qa.Th(N.width / this.Qa.ea.x / this.node.Db);
      this.Qa.oj(
        (N.height / this.Qa.ea.y / this.node.Db) *
          (0.7 +
            (((a < 0.5 ? 0.5 : a > 1 ? 1 : a) - 0.5) / 0.5) *
              0.30000000000000004),
      );
      a > 1 && this.Qa.OMa(a);
      this.Qa.D(286);
      if (a < 1) {
        var b = this.Qa;
        b.D(
          b.qa +
            (1 + (((a < 0.5 ? 0.5 : a > 1 ? 1 : a) - 0.5) / 0.5) * -1) * 100,
        );
      }
      this.Vn.la(1.6);
      this.Yr.la(1);
      this.QF.la(1);
      this.zx.la(1);
      if (a < 1) {
        b = 1 - a;
        this.QF.la(1 + b);
        this.zx.la(1 + b);
        var c = this.Yr;
        c.la(c.Db + b * 0.5);
      }
      a > 2.3 &&
        ((b = a - 2.3),
        (c = this.QF),
        c.Th(c.Db + b),
        (c = this.zx),
        c.Th(c.Db + b));
      this.eAb = this.Yr.Db;
      a < 1 && ((b = this.node), b.D(b.qa - (1 - a) * 300));
    }
  }
  jk.g = "41A";
  jk.u = O;
  Object.assign(jk.prototype, { j: jk });
  class Pr extends O {
    constructor(a, b, c, d) {
      d == null && (d = !1);
      c == null && (c = !1);
      super();
      this.lba = new V();
      this.jca = new V();
      this.hka = new V();
      this.aga = new V();
      this.qf = m.l();
      this.ne = m.l();
      this.ey = m.l();
      this.ls = b;
      this.ah = new Bb("EButtonWhite");
      this.ah.V(Y.na("OK"));
      this.ah.node.C(375);
      this.ah.Df(100);
      this.node.appendChild(this.ah.node);
      this.appendChild(this.ah);
      let e = this;
      c &&
        ((this.Kl = new Bb("EButtonWhite")),
        this.Kl.V(Y.na("RetryAfterFight_btn")),
        this.Kl.Df(100),
        this.node.appendChild(this.Kl.node),
        this.appendChild(this.Kl),
        this.Kl.Y(!1),
        this.Kl.oa.addListener(function () {
          e.hka.$();
        }));
      d &&
        ((this.Ll = new Bb("EButtonGreen")),
        this.Ll.V(Y.na("dlgStoryBtnStore")),
        this.Ll.Df(100),
        this.node.appendChild(this.Ll.node),
        this.appendChild(this.Ll),
        this.Ll.Y(!1),
        this.Ll.oa.addListener(function () {
          e.aga.$();
        }));
      pc.uM = 40;
      pc.wB = 400;
      b = a.Ee.oc.v6;
      b > 1e5 ? (pc.uM = 120) : b > 1e4 && (pc.uM = 80);
      this.Ji = a;
      this.bN = 0;
      this.ne = this.Ji.jj.qt(!0);
      this.ey = this.Ji.jj.TAa();
      this.Faa = !1;
      this.Gab() ? this.uvb() : this.ne.length > 0 ? this.Fvb() : this.oNa();
    }
    B() {
      super.B();
      this.lba = this.jca = this.aga = this.hka = null;
    }
    Z(a) {
      super.Z(a);
      this.Faa && ((this.Faa = !1), this.bN++, this.ux());
    }
    Gab() {
      return this.ey.length > 0
        ? !m.Fe(this.ey, function (a) {
            return qd(a.currency.name.toLowerCase(), "forgematerial");
          })
        : !1;
    }
    uvb() {
      debugger;
      this.ls.Y(!1);
    }
    Fvb() {
      this.ls.Y(!1);
      this.ne.length != 0 &&
        ((this.IN = this.appendChild(ra.Ya(Rr, [].slice()))),
        this.IN.sL(this.ne[0]),
        this.IN.setScale(1),
        this.IN.C(375),
        this.IN.D(350));
      this.ah.oa.addListener(w(this, this.PHa));
      this.ah.Y(!1);
      this.ah.D(700 - this.ah.ra() * 1.5);
      this.Kl != null && this.Kl.Y(!1);
      this.Ll != null && this.Ll.Y(!1);
      this.pza();
    }
    oNa() {
      this.ls.Y(!0);
      var a = this.Ji.Ee,
        b = a.oc.v6;
      this.qf.push(this.AI("goldPrize", a.oc.WY, a.oc.VY));
      this.qf.push(
        this.AI("goldPerfect", a.oc.Y3, 0, a.l6 == null ? "null" : "" + a.l6),
      );
      this.qf.push(
        this.AI(
          "goldFirstStrike",
          a.oc.hp,
          0,
          a.k6 == null ? "null" : "" + a.k6,
        ),
      );
      this.qf.push(
        this.AI("goldCombo", a.oc.Wi, 0, a.pU == null ? "null" : "" + a.pU),
      );
      this.qf.push(
        this.AI("goldShock", a.oc.Ub, 0, a.m6 == null ? "null" : "" + a.m6),
      );
      this.qf.push(this.AI(a.YNa, a.oc.KZ, 0));
      this.qf.push(this.P1a(Math.trunc(this.Ji.ep), b));
      a = this.qf.length;
      b = 0;
      for (var c = a - 1; b < c; ) this.qf[b++].node.C(-500);
      for (b = 0; b < a; ) ((c = b++), this.qf[c].node.D(125 + c * 60));
      a = this.qf[a - 1];
      b = a.node;
      b.D(b.qa + 20);
      this.ah.D(a.node.qa + 120);
      this.ah.Y(!1);
      let d = this;
      this.ah.oa.addListener(function () {
        d.jca.$();
      });
      a = this.ah.width * 0.22;
      this.Ll != null
        ? (this.ah.C(375 - a),
          this.Ll.C(375 + a),
          this.Ll.D(this.ah.node.qa),
          this.Ll.Y(!1))
        : this.Kl != null
          ? (this.ah.C(375 + a),
            this.Kl.C(375 - a),
            this.Kl.D(this.ah.node.qa),
            this.Kl.Y(!1))
          : this.ah.C(375);
      this.ux();
    }
    PHa() {
      this.ah.oa.removeListener(w(this, this.PHa));
      this.IN.B();
      this.oNa();
    }
    ux() {
      if (this.bN < this.qf.length) {
        var a = this.qf[this.bN];
        a.addListener(w(this, this.hia));
        a.ux();
      } else {
        a = this.qf.length > 0 ? this.qf[this.qf.length - 1] : null;
        a != null && a.addListener(w(this, this.lNa));
        a = 0;
        let b = this.qf;
        for (; a < b.length; ) b[a++].removeListener(w(this, this.hia));
      }
    }
    hia() {
      if (this.bN < this.qf.length) {
        let a = this.qf[this.bN];
        a.removeListener(w(this, this.hia));
        a.ux();
      }
      this.Faa = !0;
    }
    lNa() {
      this.lba.$();
      this.pza();
    }
    pza() {
      this.ah.Y(!0);
      this.Ll != null && this.Ll.Y(!0);
      this.Kl != null && this.Kl.Y(!0);
    }
    AI(a, b, c, d) {
      d == null && (d = "");
      return this.appendChild(
        new Sr(a, Math.trunc(b), c, w(this, this.ABa), d),
      );
    }
    P1a(a, b) {
      return this.appendChild(new Tr(a, b, w(this, this.ABa)));
    }
    Xda() {
      let a = 0,
        b = this.qf;
      for (; a < b.length; ) b[a++].Xda();
      this.lNa();
    }
    jZa(a) {
      let b = new Mx();
      a < 1e3
        ? ((b.mM = a), (b.ZR = 0))
        : a < 1e6
          ? ((b.mM = Math.trunc(a / 1e3)), (b.ZR = Math.trunc((a % 1e3) / 10)))
          : a < 1e9
            ? ((b.mM = Math.trunc(a / 1e6)),
              (b.ZR = Math.trunc((a % 1e6) / 1e4)))
            : ((b.mM = Math.trunc(a / 1e9)),
              (b.ZR = Math.trunc((a % 1e9) / 1e7)));
      return b;
    }
    ABa(a) {
      let b = this.jZa(a);
      a =
        a < 1e3
          ? null
          : a < 1e6
            ? "tsdShort"
            : a < 1e9
              ? "mlnShort"
              : "blnShort";
      if (a == null) return K.T(b.mM);
      a = Y.na(a);
      return "" + b.mM + "." + b.ZR + a;
    }
  }
  Pr.g = "41B";
  Pr.u = O;
  Object.assign(Pr.prototype, { j: Pr });
