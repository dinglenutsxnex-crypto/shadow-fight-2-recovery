// 061-menu-ui.js
// Domain: ui  |  34 class(es)  |  tree root(s): re, ae, Dj, Db, pz, rg, wh, Sc, mb, Ng, Tx, Qd, ac, Yk, Ux, Vx, vs, ws, xs, Xx, jf, pf, Uw, Ny, Vg, Zk
// Edit here. Run `npm run build` to reassemble the full bundle.
  class re {
    static kEa(a) {
      return a != null ? (a.Dh <= p.Dc ? !0 : a.Qz()) : !1;
    }
    static Ycb(a, b) {
      return b == null && a != null ? a.Ec > 0 : !1;
    }
    static Tcb(a) {
      return a != null ? a.Dh > p.Dc : !1;
    }
    static udb(a) {
      return a != null && a.UB ? !a.FN : !1;
    }
    static Cga(a, b, c) {
      a.G = !1;
      b.G = !1;
      c != null &&
        ((c = p.o.xa.te(c)), c != null && ((a.G = re.kEa(c)), (b.G = c.Wu)));
    }
    static mdb(a) {
      return a;
    }
    static GEa(a) {
      var b;
      b == null && (b = !1);
      if (a == null) return !1;
      a = p.o.xa.te(a);
      return a != null ? (b ? a.qd() > 0 : !0) : !1;
    }
  }
  re.g = "468";
  class Ma extends ma {
    constructor(a, b) {
      super(a, b);
    }
    ut() {
      let a = [];
      fa.add(a, 266, 267);
      fa.add(a, 256, 257);
      fa.add(a, 264, 265);
      fa.add(a, 250, 251);
      fa.add(a, 757);
      fa.add(a, 262, 263);
      fa.add(a, 246, 247);
      fa.add(a, 268, 269);
      fa.add(a, 13, 14);
      fa.add(a, 11, 12);
      fa.add(a, 834, 835);
      fa.add(a, 317);
      fa.add(a, 1360);
      fa.add(a, ...this.Yea());
      return a;
    }
    HD() {
      return 4;
    }
    uub() {
      if (this.VW != 0) {
        debugger;
        this.VW = 0;
      }
    }
    lF() {
      v.dU(v.gB);
      this.Ad.TKa();
      this.Ad.pNa();
    }
    o5(a) {
      if (this.Ig != a && a != 8) {
        this.lF();
        this.Za.Xya = !1;
        this.Za.Oja();
        this.Ig = a;
        this.Y5(!0);
        this.Wma();
        this.Ah.Dda();
        this.Ah.Uya(a);
        L.J.hi && this.SC.Y(!1);
        switch (a) {
          case 0:
            var b = this.Za.Aw;
            b.x = 300;
            b.y = 220;
            this.Za.RD = !0;
            this.Za.EF(this.Haa);
            this.Za.RT(50);
            break;
          case 1:
            b = this.Za.Aw;
            b.x = 300;
            b.y = 400;
            this.Za.RD = !0;
            this.Za.EF(this.F7);
            this.Za.RT(20);
            break;
          case 2:
            b = this.Za.Aw;
            b.x = 300;
            b.y = 280;
            this.Za.RD = !0;
            this.Za.EF(this.e9);
            this.Za.RT(100);
            break;
          case 3:
            b = this.Za.Aw;
            b.x = 300;
            b.y = 220;
            this.Za.EF(this.C$);
            this.Za.RD = !0;
            this.Za.Fn.V(Y.na("shopRangedLocked"));
            this.Za.RT(50);
            break;
          case 4:
            b = this.Za.Aw;
            b.x = 300;
            b.y = 220;
            this.Za.EF(this.Q9);
            this.Za.Fn.V(Y.na("shopMagicLocked"));
            this.Za.RT(50);
            break;
          case 5:
            b = this.Za.Aw;
            b.x = 300;
            b.y = 320;
            this.Za.RD = !0;
            this.Za.EF(
              m.sD(this.jC, function (c) {
                return c.type == I.yk ? c.XCa() : !0;
              }),
            );
            break;
          case 7:
            ((this.Za.Aw = new H(670, 500, 0, 1)),
              this.Za.EF(this.WV),
              (this.Za.RD = !1));
        }
        b = this.YOa();
        this.Za.Fn.R(!b);
        this.Y5(b);
        this.uub();
        this.Ad.SX == 7 && this.ES();
        this.Za.Qsb();
        this.Za.fnb();
        b || this.BA(null);
        if (this.Ig == 6 || a != 6) (za.instance.Ob.KU(), za.instance.Ob.M4a());
        this.layout();
      }
    }
    YOa() {
      return this.Za.Hi.length > 0;
    }
    init(a) {
      this.ysa = 0;
      this.Haa = m.l();
      this.F7 = m.l();
      this.e9 = m.l();
      this.C$ = m.l();
      this.Q9 = m.l();
      this.jC = m.l();
      this.WV = m.l();
      this.VW = 0;
      this.Ig = 8;
      Ma.jg = N.lc < Ma.YS;
      ad.eE = !1;
      super.init(a);
      L.J.Ha.ET(Oa.dd(2756098));
      this.JH = a instanceof Hj ? a : null;
      this.QUa = new Eg();
      this.fB = this.To(O);
      this.Ah = this.To(us);
      this.qP = this.fB.appendChild(ra.Ya(O, [].slice()));
      this.aq = new Bb("EButtonWhite");
      this.qP.appendChild(this.aq);
      this.aq.oa.addListener(w(this, this.aib));
      L.J.hi &&
        ((this.uP = new Bb("EButtonWhite")),
        this.uP.V("Cheats"),
        this.qP.appendChild(this.uP),
        this.uP.oa.addListener(w(this, this.Whb)));
      this.N3 = new O();
      this.N3.Kd("center");
      this.HFa = this.N3.appendChild(ra.Ya(O, [].slice()));
      this.Za = this.N3.appendChild(ra.Ya(Oe, [].slice()));
      this.Za.Kd("center");
      this.ac = this.fB.appendChild(new ii(1, !1));
      this.ac.Kd("right");
      a = new Ne();
      a.fPa.addListener(w(this, this.cib));
      this.ac.init(a, !0);
      this.fB.appendChild(this.N3);
      this.RJ = this.HFa.appendChild(new ii(-1, !0));
      this.RJ.Uha = 0.3;
      a = new rs();
      this.RJ.init(a, !1);
      this.vp = this.HFa.appendChild(new ii(-1, !0));
      this.vp.Uha = 0.5;
      a = new ss();
      a.init();
      this.vp.init(a, !1);
      a.Rgb.addListener(w(this, this.Qgb));
      a.Pgb.addListener(w(this, this.Ogb));
      a.Hgb.addListener(w(this, this.Ggb));
      a.Khb.addListener(w(this, this.Jhb));
      a.Mhb.addListener(w(this, this.Lhb));
      this.xAa();
      this.Kab();
      this.Za.BA.addListener(w(this, this.BA));
      this.Za.B3.addListener(w(this, this.pIa));
      this.Za.Pa.A3.addListener(w(this, this.oIa));
      this.Ad = new Qi();
      this.elements.appendChild(this.Ad);
      L.J.hi &&
        ((this.SC = this.To(yk)),
        this.SC.s3.addListener(w(this, this.s3)),
        this.SC.Y(!1));
      this.L1();
      this.rqb();
      this.Jx(p.o.Ca.Hd);
      this.lU();
      this.Dd = p.o;
      this.Dd.tK.addListener(w(this, this.tK));
      this.Dd.uS.addListener(w(this, this.Kja));
      p.o != null &&
        p.o.xa != null &&
        p.o.xa.mia.addListener(w(this, this.OHa));
      this.layout();
    }
    B(a) {
      this.lF();
      this.xFa();
      this.Za.gnb(this.Ig);
      this.Za.BA.removeListener(w(this, this.BA));
      this.Za.B3.removeListener(w(this, this.pIa));
      this.Za.Pa.A3.removeListener(w(this, this.oIa));
      let b = p.o;
      b != null && b.save();
      this.Dd.xa.mia.removeListener(w(this, this.OHa));
      this.Dd.tK.removeListener(w(this, this.tK));
      this.Dd.uS.removeListener(w(this, this.Kja));
      this.Dd = null;
      E.B(250);
      super.B(a);
    }
    vm(a) {
      super.vm(a);
      E.B(757);
      a instanceof Uf || this.o_();
    }
    Z(a) {
      Ma.jg = N.lc < Ma.YS;
      if (this.elements != null) {
        this.bza && ((this.bza = !1), this.Jx(null, 6));
        var b = this.Za.zt();
        b != null && re.GEa(b) && this.vp.content.aHa();
        super.Z(a);
        N.io && this.layout();
      }
    }
    Ea(a) {
      this.Ad != null && this.gza(this.Ad);
      super.Ea(a);
    }
    layout() {
      if (this.elements != null) {
        var a = N.lc,
          b =
            N.width *
            0.05 *
            (Ma.jg ? 1 : ((a < 0.6 ? 0.6 : a > 1 ? 1 : a) - 0.6) / 0.4),
          c = this.nA.Zp * 1.4;
        b = new hb(b, c, N.width - b, N.height - this.nA.Zp * 1.5 * 1.3);
        b = b.hn(
          Ma.jg
            ? 1.3
            : 1.85 +
                (((a < 0.6 ? 0.6 : a > 1 ? 1 : a) - 0.6) / 0.4) *
                  0.1499999999999999,
        );
        if (Ma.jg) {
          c =
            c *
            1.5 *
            (0.7 + ((a - 0.6) / -0.09999999999999998) * 0.30000000000000004);
          var d = b.X - b.P;
          b.P = c;
          b.X = c + d;
        }
        c = b.hn(0.75);
        d = this.fB.node;
        var e = d.aw("center"),
          f = d.aw("right");
        if (Ma.jg) {
          b = b.N;
          var g = c.N - c.K;
          c.N = b;
          c.K = b - g;
        }
        Ma.jg
          ? d.cJ(e) > d.cJ(f) && d.q6(e, f)
          : d.cJ(f) > d.cJ(e) && d.q6(f, e);
        b = (c.X - c.P) * 0.8;
        e = (c.N - c.K) * 0.03;
        d = new hb(0, 0, b * 0.7, b);
        b = d.clone();
        f = c.K + e;
        g = b.N - b.K;
        b.N = f;
        b.K = f - g;
        f = (c.P + c.X) * 0.5;
        g = (b.X - b.P) * 0.5;
        b.P = f - g;
        b.X = f + g;
        d = d.clone();
        e = c.N - e;
        f = d.N - d.K;
        d.K = e;
        d.N = e + f;
        e = (c.P + c.X) * 0.5;
        f = (d.X - d.P) * 0.5;
        d.P = e - f;
        d.X = e + f;
        Ma.jg &&
          ((e = (c.K + c.N) * 0.5),
          (f = (d.N - d.K) * 0.5),
          (d.K = e - f),
          (d.N = e + f),
          (e = c.X),
          (f = d.X - d.P),
          (d.P = e),
          (d.X = e + f));
        this.RJ.Sn(b);
        this.vp.Sn(b);
        this.Za.Sn(c);
        this.ac.gFa = Ma.jg;
        this.ac.Sn(d);
        this.qP.C((b.K + b.N) * 0.5 * 0.9);
        Ma.jg ||
          ((d = this.qP),
          d.C(
            d.node.za +
              (25 + (((a < 0.6 ? 0.6 : a > 1 ? 1 : a) - 0.6) / 0.4) * -25),
          ));
        this.aq.mf(b.N - b.K);
        this.qP.D(b.P + this.aq.ra());
        L.J.hi &&
          (this.uP.mf(b.N - b.K),
          this.uP.D(-this.aq.ra() * 1.25),
          this.SC.Sn(c));
      }
    }
    tK(a) {
      a != null && a.currency != null && a.currency.SZ == 1 && this.refresh();
    }
    dnb() {
      this.xAa();
      this.Za.Oja();
      this.Za.OU();
      this.Za.Eka();
      this.refresh();
      this.Za.Fn.R(!this.YOa());
      let a = this.Ig;
      this.Ig = null;
      this.o5(a);
    }
    BA(a) {
      this.Za.Pa.IEa ||
        (this.fzb(a),
        this.ana(a),
        this.J6(a),
        this.JU(a),
        this.ePa(),
        this.layout());
    }
    oIa() {
      this.xFa();
      nd.Sga() && nd.F().ar();
    }
    Whb() {
      this.SC.Y(!this.SC.active);
      this.SC.active
        ? (this.Ah.Dda(), this.aq.Y(!1), this.Y5(!1))
        : (this.aq.Y(!0), this.Y5(!0));
    }
    rqb() {
      this.JH != null
        ? (this.n1(this.JH.b6),
          (this.JH.b6 == 8 && this.JH.item == null) || this.Za.Ir(this.JH.item),
          this.Ah.ILa(this.JH.b6))
        : (this.n1(1), this.Ah.ILa(1));
    }
    Kja() {
      this.Za.OU();
      this.Wma();
    }
    s3() {
      this.Kja();
    }
    JLa(a, b) {
      this.n1(a);
      this.Za.WA(b);
    }
    Dka(a, b) {
      this.o5(a);
      this.Za.WA(b);
    }
    wF(a, b) {
      this.n1(a);
      this.Za.Ir(b);
    }
    n1(a) {
      this.o5(Dj.u6(a));
    }
    xAa() {
      this.Haa.length = 0;
      this.F7.length = 0;
      this.e9.length = 0;
      this.C$.length = 0;
      this.Q9.length = 0;
      this.jC.length = 0;
      this.WV.length = 0;
      v.$v(p.items.Fu, this.Haa);
      v.$v(p.items.Qva, this.F7);
      v.$v(p.items.GDa, this.e9);
      v.$v(p.items.gKa, this.C$);
      v.$v(p.items.jGa, this.Q9);
      v.$v(p.items.Kp, this.jC);
      v.$v(p.items.rca, this.jC);
      v.$v(p.items.Z_, this.WV);
      let a = [];
      var b = 0;
      let c = this.jC;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        let e = Qb.find(L.J.au, function (f) {
          return Kb.Ve(f, "sku") == d.name;
        });
        e != null ? (d.jda = Kb.Ve(e, "displayPrice")) : d.HJ && a.push(d);
      }
      for (b = 0; b < a.length; ) J.remove(this.jC, a[b++]);
    }
    Kab() {
      (this.jC.length != 0 && L.J.au.length != 0) || this.Ah.vJ(5);
      this.WV.length == 0 && this.Ah.vJ(7);
      this.Ah.vJ(6);
    }
    Wma() {
      this.Za.Hi != null &&
        m.forEach(this.Za.Hi, function (b) {
          b.Nr(!1);
        });
      let a = p.items.ICa();
      this.ysa != a && ((this.ysa = a), this.Ah.MU(), this.nA.hM(), p.o.save());
    }
    pIa() {}
    cib() {
      this.I6();
      this.Za.OU();
      let a = this.Za.zt();
      a != null && (this.J6(a), this.JU(a), this.ePa());
    }
    D$a() {
      return this.Ig != 0 &&
        this.Ig != 1 &&
        this.Ig != 2 &&
        this.Ig != 3 &&
        this.Ig != 4
        ? this.Ig == 6
        : !0;
    }
    fzb(a) {
      a != null && this.ac.content.Or(a);
    }
    J6(a) {
      a != null && this.RJ.content.zfb(a);
    }
    ana(a) {
      if (a != null) {
        var b = a.MF.length > 0;
        this.vp.vub(b ? y.wTa : y.xTa);
        this.vp.Itb(b ? y.sTa : y.tTa);
        this.vp.content.Or(a);
      }
    }
    JU(a) {
      if (a == null) this.aq.Y(!1);
      else {
        var b = new Ia(),
          c = new Ia();
        re.Cga(b, c, a);
        this.aq.Y(re.mdb(this.D$a()));
        c.G
          ? this.aq.V(Y.na("btnShopUnequip"))
          : b.G || a.type == I.vB
            ? this.aq.V(Y.na("btnShopEquip"))
            : this.aq.V(Y.na("btnShopTry"));
      }
    }
    ePa() {
      this.QUa.nk(0);
      this.vp.kr && this.vp.content.U3a.nk(0);
    }
    xFa() {
      nd.Sga() && nd.F().ar();
    }
    aib() {
      let a = this.Za.zt();
      if (a != null) {
        var b = new Ia(),
          c = new Ia();
        re.Cga(b, c, a);
        b.G && c.G
          ? (p.o.xa.lyb(a),
            this.Za.OU(),
            this.I6(),
            this.J6(a),
            this.ana(a),
            this.JU(a))
          : b.G && !c.G
            ? (p.o.xa.cp(a, !0),
              this.Za.OU(),
              this.I6(a),
              this.J6(a),
              this.ana(a),
              this.JU(a))
            : (Jz.Fe(this.Ad.wr, w(this, this.ES)) &&
                this.Ad.wr.removeListener(w(this, this.ES)),
              this.Ad.wr.addListener(w(this, this.ES)),
              this.Jx(a, 7),
              this.Ad.Z(L.J.uk.Cm),
              this.Oab());
      }
    }
    Qgb() {
      debugger;
    }
    Ogb() {}
    Ggb() {}
    Jhb() {
      debugger;
    }
    Lhb() {
      debugger;
    }
    ES() {
      this.Ad.wr.removeListener(w(this, this.ES));
      this.Ad.pNa();
      this.lU();
      this.bza = !0;
    }
    OHa() {
      debugger;
    }
    refresh() {
      this.ac.content.refresh();
      this.RJ.content.f3();
      this.vp.content.dS();
      let a = this.Za.Ac;
      a != null && (this.JU(a.ac), a.hzb(), a.aJ());
    }
    I6(a) {
      this.Ad.Ocb(p.o.Ca) && this.Jx(a);
    }
    Jx(a, b) {
      b == null && (b = 4);
      var c = a;
      a == null && ((c = this.Za.zt()), (c = c != null ? c : p.o.Ca.kg));
      c != null &&
        (c.type == I.xg || c.type == I.Ff || c.type == I.Xh
          ? this.Ad.NMa(4)
          : this.Ad.NMa(2),
        this.Ad.nPa(a, b, c.type),
        (a = this.Ad.Kc),
        (b = p.v_.lDa()),
        a.Vs(
          (((b.z * 255) | 0) & 255) |
            ((((b.y * 255) | 0) & 255) << 8) |
            ((((b.x * 255) | 0) & 255) << 16),
        ));
    }
    lU() {
      this.fB.node.xh(6, 1, 0.1);
      this.fB.node.Uc(!0);
    }
    Xcb() {
      switch (this.Ig) {
        case 1:
        case 2:
          return !1;
        default:
          return !0;
      }
    }
    Oab() {
      this.Xcb() &&
        (this.Ad.Lab(),
        this.fB.node.xh(6, 0, 0.1),
        this.fB.node.Uc(!1),
        nd.Sga() && nd.F().ar());
    }
    Y5(a) {
      let b = a && this.Ig != 5 && this.Ig != 7 && this.Ig != 6;
      this.ac.Y(a);
      this.RJ.Y(b);
      this.vp.Y(b);
    }
    static get() {
      return ma.Kg() instanceof Ma ? ma.Kg() : null;
    }
  }
  Ma.g = "469";
  Ma.u = ma;
  Object.assign(Ma.prototype, { j: Ma });
  class Dj {
    static u6(a) {
      switch (a) {
        case 1:
          return 0;
        case 2:
          return 1;
        case 3:
          return 2;
        case 4:
          return 3;
        case 5:
          return 4;
        case 6:
          return 5;
        case 7:
          return 7;
        case 8:
          return 6;
        default:
          return 8;
      }
    }
    static Vxb(a) {
      switch (a) {
        case 0:
          return I.xg;
        case 1:
          return I.Ci;
        case 2:
          return I.Di;
        case 3:
          return I.Xh;
        case 4:
          return I.Ff;
        case 5:
          return I.yk;
        case 6:
          return I.Jm;
        case 7:
          return I.Gu;
        default:
          return null;
      }
    }
  }
  Dj.g = "46A";
  class ps extends ff {
    constructor() {
      super();
      this.XDa = 0;
      this.Oe = new Ea(this.node);
      this.ow = new Ea(this.Oe);
      this.py = R.aa(E.get(262), y.fSa, this.ow);
      this.fv = new ea(E.Na(), this.ow);
      this.fv.Ia(512);
      this.fv.La(Z.sc);
      this.OV = R.aa(E.get(262), y.kSa, this.ow);
      this.WB = R.aa(E.get(262), y.XRa, this.ow);
      this.uv = new ea(E.Na(), this.node);
      this.uv.La(Z.sc);
      this.uv.R(!1);
      this.YE = new hi();
      this.ow.appendChild(this.YE.node);
      this.appendChild(this.YE);
      this.dC = R.aa(E.get(262), y.$Ra, this.node);
      this.dC.Ga();
    }
    yl(a) {
      super.yl(a);
      this.iPa();
    }
    B() {
      super.B();
      this.uv =
        this.Km =
        this.Fi =
        this.uqa =
        this.vqa =
        this.fv =
        this.py =
        this.OV =
        this.WB =
        this.dC =
        this.NG =
        this.Dk =
        this.Oe =
          null;
    }
    Y(a) {
      this.YE.Y(a);
      return super.Y(a);
    }
    ba(a, b) {
      super.ba(a, b);
      var c = this.ce.x * 0.8;
      this.Dk != null &&
        (this.Dk.zLa(c, this.ce.y * 0.8),
        this.Dk.C(this.ce.x / 2),
        this.Dk.D(this.ce.y / 2),
        this.Dk.Ga());
      this.NG != null &&
        (this.NG.la(c / this.NG.size),
        this.NG.C(this.ce.x / 2),
        this.NG.D(this.ce.y / 2));
      this.py.Df(40);
      this.fv.Fa(this.py.ya() * 2, this.py.ra() * 0.7);
      this.fv.C(this.py.ya());
      this.fv.D(this.py.qa + this.py.ra() * 0.2);
      this.fv.Uk();
      this.WB.Df(40);
      this.WB.C(this.ce.x - this.WB.ya());
      this.OV.Df(40);
      this.OV.C(this.WB.za - this.WB.ya());
      this.uv.Fa(a, b * 0.3);
      this.uv.C(a * 0.05);
      this.uv.D(b * 0.8);
      this.uv.ua(a * 0.1);
      this.ow.D(this.ce.y - 40);
      this.dC.mf(a * 0.2);
      this.dC.C(this.ce.x / 2);
      this.dC.D(this.ce.y / 2);
      this.YE.ba(this.ce.x, 40);
      this.Fi != null &&
        (this.Fi.mf(a * 0.55),
        (c = this.Fi.ra()),
        this.Fi.C(a - this.Fi.ya()),
        this.Fi.D(b - 2.5 * c),
        this.Km != null &&
          (this.Km.C(this.Fi.za),
          this.Km.D(this.Fi.qa),
          this.Km.Fa(a * 0.55, c),
          this.Km.ua(c)));
    }
    N4() {
      debugger;
      this.vqa.R(!1);
    }
    r5(a) {
      if (a != null) {
        this.Kd("ShopTableViewCell(" + a.name + ")");
        var b = p.o.xa.te(a);
        this.ac = b != null && b.kw() != null && a.type != I.vB ? b.kw() : a;
        if (this.ac != null) {
          this.dC.R(a.Bf > p.o.bb() && !re.GEa(a));
          this.WB.R(
            b != null &&
              a.type != I.Gu &&
              a.type != I.$r &&
              a.type != I.Tx &&
              a.type != I.Jm &&
              !a.bA,
          );
          b = new Ia();
          re.Cga(new Ia(), b, a);
          this.OV.R(b.G);
          (b = this.ac.Bf > 0) && this.fv.V(K.T(this.ac.Bf));
          this.fv.R(b);
          this.py.R(b);
          b = Ye.vI(a.fileName);
          if (a.type == I.$r) this.NG = this.appendChild(new oe(b));
          else {
            var c = this.Dk;
            c != null && c.B();
            this.Dk = new Sf(b, this.Oe);
          }
          this.ac != null &&
            (this.YE.x5(p.GD(this.ac)),
            this.YE.uia.clear(),
            this.YE.uia.addListener(function (e, f) {
              let g = Ma.get();
              f || g.VW != 0 || g.vp.kla(e);
            }));
          this.iPa();
          if ((b = a.type == I.Tx && a.Yb == I.l7))
            ((c = p.o.zD(a.Lj)),
              this.uv.V(Y.na("shop_amount", c == null ? "null" : "" + c)));
          this.uv.R(b);
          this.appendChild(new pe(a.name));
          a = this.ac.bA && this.ac.Rs > 0;
          b = this.ac.fm(0);
          c = !a && b != null && this.ac.vcb() && this.ac.type != I.yk;
          var d = p.o.t5a(this.ac.name) == null;
          if (c && d) {
            debugger;
            this.vqa = R.aa(E.get(250), y.zM, this.ow);
            this.uqa = new ea(E.Na(), this.ow);
            this.uqa.V("-" + b.$P + "%");
          }
          c = this.ac.name == I.GTa;
          a
            ? ((this.Fi = R.aa(E.get(250), y.zM, this.Oe)),
              (this.Km = new ea(E.Na(), this.Oe)),
              this.Km.La(Oa.dd(16776613)),
              this.Km.Ia(128),
              this.Km.V(""),
              b != null && b.An > p.Dc
                ? (this.Fi.yb(y.zM), this.Km.V(Y.na("shopSale")))
                : (this.ac.badge == I.gQa
                    ? this.Fi.yb(y.uTa)
                    : this.ac.badge == I.fQa
                      ? this.Fi.yb(y.jTa)
                      : this.ac.Yb == I.fG
                        ? this.Fi.yb(y.zoa)
                        : this.Fi.yb(y.qTa),
                  this.Km.R(!1)))
            : c
              ? (this.Fi = R.aa(E.get(250), y.zoa, this.Oe))
              : ((a = this.ac.hU),
                a != null &&
                  a != "" &&
                  (this.Fi.R(!0),
                  this.Fi.yb(y.zM),
                  this.Km.V(Y.na(this.ac.hU)),
                  this.Km.R(!0)));
        }
      }
    }
    iPa() {
      this.Oe.wa(this.dC.gg() ? this.XDa : 1);
    }
    hzb() {
      this.r5(this.ac);
    }
  }
  ps.g = "46B";
  ps.u = ff;
  Object.assign(ps.prototype, { j: ps });
  class ii extends O {
    constructor(a, b) {
      super();
      this.sIa = new V();
      this.kr = !0;
      this.gFa = this.yw = !1;
      this.bq = 0;
      this.$vb = a;
      this.WEa = b;
      this.Ih = null;
      this.e$ = y.vTa;
      this.Tpa = y.rTa;
      b &&
        ((this.hl = this.appendChild($a.Xv(E.get(250), this.e$))),
        this.hl.oa.addListener(w(this, this.oa)),
        (this.hl.mOa = !0));
      this.Uha = this.duration = this.gu = this.hu = 0;
      this.background = R.aa(E.get(256), y.xM, this.node);
      a < 0 && this.background.Mr(!0);
      this.WEa &&
        ((this.o1 = R.aa(E.get(256), y.aV, this.node)),
        (this.cR = R.aa(E.get(256), y.aV, this.node)),
        this.cR.K5());
    }
    Sn(a) {
      this.Ih = a.clone();
      this.gu = this.hu * (a.N - a.K);
      this.node.C(this.Ih.K + this.gu);
      this.node.D(this.Ih.P);
      this.background.mf(a.N - a.K);
      let b = this.background.Db * 28,
        c = this.background.Db * 24;
      if (this.WEa) {
        let d = (a.X - a.P) * 0.2;
        this.o1.xc(a.N - a.K - b);
        this.o1.Qb(d);
        this.o1.C(b);
        this.o1.D(c);
        this.cR.xc(a.N - a.K - b);
        this.cR.Qb(d);
        this.cR.C(b);
        this.cR.D(a.X - a.P - d - c);
      }
      this.vva();
      this.gFa
        ? (this.background.yb(y.soa),
          a.offset(-b * 2, -b),
          this.content.C(b * 2))
        : (this.background.yb(y.xM),
          (a = a.clone()),
          this.$vb > 0
            ? ((a.K += b),
              (a.N -= b * 2),
              (a.P += c),
              (a.X -= c),
              this.content.C(b))
            : ((a.K += b * 2),
              (a.N -= b),
              (a.P += c),
              (a.X -= c),
              this.content.C(b * 2)));
      this.content.D(c);
      this.content.ba(a.N - a.K, a.X - a.P);
    }
    vub(a) {
      this.e$ = a;
      this.E6(this.kr);
    }
    Itb(a) {
      this.Tpa = a;
      this.E6(this.kr);
    }
    init(a, b) {
      b == null && (b = !0);
      this.content = a;
      this.appendChild(a);
      this.kla(b, 0);
    }
    oa() {
      this.kla(!this.kr);
    }
    E6(a) {
      this.hl != null &&
        (a
          ? (this.hl.W.yb(this.e$), this.hl.node.yF())
          : (this.hl.W.yb(this.Tpa), this.hl.node.j5()));
    }
    kla(a, b) {
      b == null && (b = 0.5);
      (a && (this.kr || this.yw)) ||
        ((this.duration = b),
        (b = b > 0)
          ? ((this.bq = a ? 1 : -1),
            (this.time = 0),
            this.content.Uc(!1),
            this.hl.Uc(!1))
          : (this.bq = 0),
        (this.yw = b && a),
        (this.kr = a)
          ? ((this.hu = b ? 1 : 0),
            this.content.DS(),
            this.E6(a),
            this.node.yF())
          : ((this.hu = b ? 0 : 1), this.content.CS(), this.E6(a)));
    }
    Z(a) {
      super.Z(a);
      switch (this.bq) {
        case -1:
          this.hu = a = dc.Nn()(this.fd(this.duration));
          var b = this.Ih;
          this.gu = this.hu * (b.N - b.K);
          a == 1 &&
            (this.content.zK(),
            this.content.Uc(!1),
            this.hl.Uc(!0),
            this.content.zK(),
            this.sIa.$(!1),
            (this.bq = 0));
          this.node.C(this.Ih.K + this.gu);
          this.node.D(this.Ih.P);
          break;
        case 1:
          ((a = dc.Nn()(this.fd(this.duration))),
            (this.hu = 1 - a),
            (b = this.Ih),
            (this.gu = this.hu * (b.N - b.K)),
            a == 1 &&
              (this.content.Uc(!0),
              this.hl.Uc(!0),
              this.content.yS(),
              this.sIa.$(!0),
              (this.bq = 0),
              (this.yw = !1)),
            this.node.C(this.Ih.K + this.gu),
            this.node.D(this.Ih.P));
      }
      this.vva();
    }
    vva() {
      if (this.hl != null) {
        var a = this.Ih;
        this.hl.D(this.Uha * (a.X - a.P));
        a = this.Ih;
        a = (a.N - a.K) * 0.2;
        this.hl.mf(a);
        this.kr ? this.hl.C(a * 0.25) : this.hl.C(-a / 2);
      }
    }
  }
  ii.g = "46C";
  ii.u = O;
  Object.assign(ii.prototype, { j: ii });
  class he extends O {
    constructor(a) {
      super();
      this.sua = a;
      this.fua = 0.8;
      this.lVa = 30;
      this.hV = 0;
      this.iV = !1;
      this.Ty = R.aa(E.get(262), y.JRa, this.node);
      this.Ty.Ga();
      this.Ty.Uc(!1);
      L.J.root.appendChild(this);
      mc.J.df.appendChild(this.node.L);
      this.Z(0);
    }
    Z() {
      if (this.Ty != null) {
        this.node.yF();
        this.Ty.la((Math.min(N.width, N.height) * 0.1) / this.Ty.ea.x);
        var a = this.sua.fq.rect;
        this.Ty.D(this.Ty.qa - (this.iV ? this.fua : -this.fua));
        this.node.C((a.K + a.N) * 0.5);
        this.node.D(a.X + this.Ty.ra() * 0.1);
        this.iV
          ? this.hV < this.lVa
            ? this.hV++
            : (this.iV = !1)
          : this.hV > 0
            ? this.hV--
            : (this.iV = !0);
      }
    }
    static show(a) {
      he.instance = new he(a);
    }
    static rn() {
      let a = he.instance;
      a != null && a.B();
      he.instance = null;
    }
  }
  he.g = "46D";
  he.u = O;
  Object.assign(he.prototype, { j: he });
  class Sb extends Db {
    constructor() {
      super();
      this.Wy = R.Ed(255, 1, 1);
      this.mk(!1);
      mc.J.df.appendChild(this.Wy.L);
      L.J.root.appendChild(this);
    }
    Bd() {
      return this.Wy.gg() ? ma.Bd(this.Wy.L) : !1;
    }
    Z(a) {
      super.Z(a);
      this.Wy.xc(N.width);
      this.Wy.Qb(N.height);
    }
    mk(a) {
      this.Wy.R(a);
      this.kwa = a;
    }
    static F() {
      let a = Sb.Hb;
      return a != null ? a : (Sb.Hb = new Sb());
    }
  }
  Sb.g = "46E";
  Sb.u = Db;
  Object.assign(Sb.prototype, { j: Sb });
  class xk extends Db {
    constructor() {
      super();
      this.isActive = !1;
    }
  }
  xk.g = "46F";
  xk.u = Db;
  Object.assign(xk.prototype, { j: xk });
  class pz {
    static A2a(a) {
      for (a = a.iterator(); a.yd(); ) {
        let b = a.next();
        if (b instanceof xk) {
          b.isActive = !1;
          return;
        }
      }
      debugger;
    }
  }
  pz.g = "470";
  class pe extends Db {
    constructor(a) {
      super();
      this.id = a;
      this.Kd("TutorialNode[" + a + "]");
      this.Va = m.l();
      this.Fs = null;
    }
    init() {
      for (var a = this.parent.parent; a != null; ) {
        let b = !1,
          c = a.W_a();
        for (; c.yd(); ) {
          let d = c.next();
          if (d instanceof pe) {
            this.Fs = d;
            b = !0;
            break;
          }
        }
        if (b) break;
        a = a.parent;
      }
      this.Fs != null ? this.Fs.Va.push(this) : rg.LXa(this);
      a = this.id;
      a == null || a == "" || Cb(this.id, ".");
    }
    B() {
      super.B();
      this.Fs != null
        ? (J.remove(this.Fs.Va, this), (this.Fs = null))
        : rg.Mnb(this);
    }
    RQ(a) {
      let b = 0,
        c = this.Va;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.active && d.id == a) return d;
      }
      return null;
    }
  }
  pe.g = "471";
  pe.u = Db;
  Object.assign(pe.prototype, { j: pe });
  class rg {
    static LXa(a) {
      rg.N$.push(a);
    }
    static Mnb(a) {
      J.remove(rg.N$, a);
    }
    static RQ(a) {
      let b = a.split(".");
      if (b.length == 0) return null;
      a = m.find(rg.N$, function (e) {
        return e.id == b[0];
      });
      let c = 1,
        d = b.length;
      for (; c < d; ) {
        let e = c++;
        if (a == null) return null;
        a = a.RQ(b[e]);
      }
      return a;
    }
  }
  rg.g = "472";
  class wh {
    constructor(a) {
      let b = this;
      this.id = setInterval(function () {
        b.Sh();
      }, a);
    }
    stop() {
      this.id != null && (clearInterval(this.id), (this.id = null));
    }
    Sh() {}
    static delay(a, b) {
      let c = new wh(b);
      c.Sh = function () {
        c.stop();
        a();
      };
      return c;
    }
  }
  wh.g = "474";
  Object.assign(wh.prototype, { j: wh });
  class bl extends Sc {
    constructor(a, b, c) {
      super(String(a), b, c);
      this.value = a;
    }
    Ema() {
      return this.value;
    }
  }
  bl.g = "475";
  bl.u = Sc;
  Object.assign(bl.prototype, { j: bl });
  class mb {
    constructor(a) {
      this.length = a.byteLength;
      this.b = new Uint8Array(a);
      this.b.Ev = a;
      a.Sab = this;
      a.bytes = this.b;
    }
    sub(a, b) {
      if (a < 0 || b < 0 || a + b > this.length) throw 49;
      return new mb(
        this.b.buffer.slice(a + this.b.byteOffset, a + this.b.byteOffset + b),
      );
    }
    nn(a, b, c) {
      if (a < 0 || b < 0 || a + b > this.length) throw 50;
      c == null && (c = qf.gG);
      let d = "",
        e = this.b,
        f = a;
      a += b;
      switch (c.Ag) {
        case 0:
          for (; f < a; )
            if (((c = e[f++]), c < 128)) {
              if (c == 0) break;
              d += String.fromCodePoint(c);
            } else
              c < 224
                ? ((c = ((c & 63) << 6) | (e[f++] & 127)),
                  (d += String.fromCodePoint(c)))
                : c < 240
                  ? ((c =
                      ((c & 31) << 12) |
                      ((e[f++] & 127) << 6) |
                      (e[f++] & 127)),
                    (d += String.fromCodePoint(c)))
                  : ((c =
                      ((c & 15) << 18) |
                      ((e[f++] & 127) << 12) |
                      ((e[f++] & 127) << 6) |
                      (e[f++] & 127)),
                    (d += String.fromCodePoint(c)));
          break;
        case 1:
          for (; f < a; )
            ((c = e[f++] | (e[f++] << 8)), (d += String.fromCodePoint(c)));
      }
      return d;
    }
    toString() {
      return this.nn(0, this.length);
    }
    Uxb() {
      let a = "",
        b = [];
      for (var c = 0; c < 16; ) b.push(J.Jh("0123456789abcdef", c++));
      c = 0;
      let d = this.length;
      for (; c < d; ) {
        let e = this.b[c++];
        a += String.fromCodePoint(b[e >> 4]);
        a += String.fromCodePoint(b[e & 15]);
      }
      return a;
    }
    static q3(a, b) {
      if (b == qf.Eoa) {
        b = new Uint8Array(a.length << 1);
        for (var c = 0, d = a.length; c < d; ) {
          let e = c++,
            f = a.charCodeAt(e);
          b[e << 1] = f & 255;
          b[(e << 1) | 1] = f >> 8;
        }
        return new mb(b.buffer);
      }
      b = [];
      for (c = 0; c < a.length; )
        ((d = a.charCodeAt(c++)),
          55296 <= d &&
            d <= 56319 &&
            (d = ((d - 55232) << 10) | (a.charCodeAt(c++) & 1023)),
          d <= 127
            ? b.push(d)
            : (d <= 2047
                ? b.push(192 | (d >> 6))
                : (d <= 65535
                    ? b.push(224 | (d >> 12))
                    : (b.push(240 | (d >> 18)), b.push(128 | ((d >> 12) & 63))),
                  b.push(128 | ((d >> 6) & 63))),
              b.push(128 | (d & 63))));
      return new mb(new Uint8Array(b).buffer);
    }
    static ll(a) {
      let b = a.Sab;
      return b != null ? b : new mb(a);
    }
  }
  mb.g = "476";
  Object.assign(mb.prototype, { j: mb });
  var qf = (bg["haxe.io.Encoding"] = {
    hG: !0,
    bs: null,
    gG: { xj: "UTF8", Ag: 0, zh: "haxe.io.Encoding", toString: Ra },
    Eoa: { xj: "RawNative", Ag: 1, zh: "haxe.io.Encoding", toString: Ra },
  });
  qf.bs = [qf.gG, qf.Eoa];
  class Ng {
    static decode(a, b) {
      b == null && (b = !0);
      if (b) for (; J.Jh(a, a.length - 1) == 61; ) a = J.substr(a, 0, -1);
      return new Tx(Ng.iQa).D2a(mb.q3(a));
    }
  }
  Ng.g = "477";
  class Tx {
    constructor(a) {
      let b = a.length,
        c = 1;
      for (; b > 1 << c; ) ++c;
      if (c > 8 || b != 1 << c) throw 51;
      this.Bc = a;
      this.ufb = c;
    }
    Lbb() {
      let a = [];
      for (var b = 0; b < 256; ) a[b++] = -1;
      b = 0;
      let c = this.Bc.length;
      for (; b < c; ) {
        let d = b++;
        a[this.Bc.b[d]] = d;
      }
      this.rOa = a;
    }
    D2a(a) {
      let b = this.ufb;
      this.rOa == null && this.Lbb();
      let c = this.rOa,
        d = (a.length * b) >> 3,
        e = new mb(new ArrayBuffer(d)),
        f = 0,
        g = 0,
        h = 0,
        k = 0;
      for (; k < d; ) {
        for (; g < 8; ) {
          g += b;
          f <<= b;
          let l = c[a.b[h++]];
          if (l == -1) throw 52;
          f |= l;
        }
        g -= 8;
        e.b[k++] = (f >> g) & 255;
      }
      return e;
    }
  }
  Tx.g = "478";
  Object.assign(Tx.prototype, { j: Tx });
  class Qd {
    static sort(a, b) {
      Qd.Hja(a, b, 0, a.length);
    }
    static Hja(a, b, c, d) {
      var e = (c + d) >> 1;
      if (d - c < 12) {
        if (!(d <= c))
          for (e = c + 1; e < d; ) {
            let f = e++;
            for (; f > c; ) {
              if (b(a[f], a[f - 1]) < 0) Qd.lOa(a, f - 1, f);
              else break;
              --f;
            }
          }
      } else
        (Qd.Hja(a, b, c, e),
          Qd.Hja(a, b, e, d),
          Qd.aza(a, b, c, e, d, e - c, d - e));
    }
    static aza(a, b, c, d, e, f, g) {
      for (;;) {
        let h, k, l, n;
        if (f == 0 || g == 0) break;
        if (f + g == 2) {
          b(a[d], a[c]) < 0 && Qd.lOa(a, d, c);
          break;
        }
        f > g
          ? ((l = f >> 1),
            (h = c + l),
            (k = Qd.lower(a, b, d, e, h)),
            (n = k - d))
          : ((n = g >> 1),
            (k = d + n),
            (h = Qd.upper(a, b, c, d, k)),
            (l = h - c));
        Qd.rotate(a, b, h, d, k);
        d = h + n;
        Qd.aza(a, b, c, h, d, l, n);
        c = d;
        d = k;
        f -= l;
        g -= n;
      }
    }
    static rotate(a, b, c, d, e) {
      if (c != d && d != e)
        for (b = Qd.n5a(e - c, d - c); b-- != 0; ) {
          let f = a[c + b],
            g = d - c,
            h = c + b,
            k = c + b + g;
          for (; k != c + b; )
            ((a[h] = a[k]),
              (h = k),
              (k = e - k > g ? k + g : c + (g - (e - k))));
          a[h] = f;
        }
    }
    static n5a(a, b) {
      for (; b != 0; ) {
        let c = a % b;
        a = b;
        b = c;
      }
      return a;
    }
    static upper(a, b, c, d, e) {
      d -= c;
      let f, g;
      for (; d > 0; )
        ((f = d >> 1),
          (g = c + f),
          b(a[e], a[g]) < 0 ? (d = f) : ((c = g + 1), (d = d - f - 1)));
      return c;
    }
    static lower(a, b, c, d, e) {
      d -= c;
      let f, g;
      for (; d > 0; )
        ((f = d >> 1),
          (g = c + f),
          b(a[g], a[e]) < 0 ? ((c = g + 1), (d = d - f - 1)) : (d = f));
      return c;
    }
    static lOa(a, b, c) {
      let d = a[b];
      a[b] = a[c];
      a[c] = d;
    }
  }
  Qd.g = "479";
  class ac {
    constructor() {
      this.v = Object.create(null);
    }
    get(a) {
      return this.v[a];
    }
    keys() {
      return new Yk(this.v);
    }
    iterator() {
      return new Ux(this.v);
    }
    rFa() {
      return new Vx(this.v);
    }
  }
  ac.g = "47A";
  ac.Rb = [Pj];
  Object.assign(ac.prototype, { j: ac });
  class Yk {
    constructor(a) {
      this.v = a;
      this.keys = Object.keys(a);
      this.length = this.keys.length;
      this.current = 0;
    }
    yd() {
      return this.current < this.length;
    }
    next() {
      return this.keys[this.current++];
    }
  }
  Yk.g = "47B";
  Object.assign(Yk.prototype, { j: Yk });
  class Ux {
    constructor(a) {
      this.v = a;
      this.keys = Object.keys(a);
      this.length = this.keys.length;
      this.current = 0;
    }
    yd() {
      return this.current < this.length;
    }
    next() {
      return this.v[this.keys[this.current++]];
    }
  }
  Ux.g = "47C";
  Object.assign(Ux.prototype, { j: Ux });
  class Vx {
    constructor(a) {
      this.v = a;
      this.keys = Object.keys(a);
      this.length = this.keys.length;
      this.current = 0;
    }
    yd() {
      return this.current < this.length;
    }
    next() {
      let a = this.keys[this.current++];
      return { key: a, value: this.v[a] };
    }
  }
  Vx.g = "47D";
  Object.assign(Vx.prototype, { j: Vx });
  class Wx extends eg {
    constructor(a, b, c) {
      a == null && (a = "Not implemented");
      super(a, b, c);
    }
  }
  Wx.g = "47E";
  Wx.u = eg;
  Object.assign(Wx.prototype, { j: Wx });
  class vs {
    constructor() {
      this.size = this.ca = 0;
    }
    Rua(a) {
      this.ca == this.size && this.grow(1);
      this.view.setUint8(this.ca++, a);
    }
    EWa(a, b, c) {
      if (b < 0 || c < 0 || b + c > a.length) throw 53;
      this.ca + c > this.size && this.grow(c);
      this.size != 0 &&
        ((a = new Uint8Array(a.b.buffer, a.b.byteOffset + b, c)),
        this.OOa.set(a, this.ca),
        (this.ca += c));
    }
    grow(a) {
      var b = this.ca + a;
      for (a = this.size == 0 ? 16 : this.size; a < b; ) a = (a * 3) >> 1;
      b = new ArrayBuffer(a);
      let c = new Uint8Array(b);
      this.size > 0 && c.set(this.OOa);
      this.size = a;
      this.buffer = b;
      this.OOa = c;
      this.view = new DataView(this.buffer);
    }
    Uq() {
      if (this.size == 0) return new mb(new ArrayBuffer(0));
      let a = new mb(this.buffer);
      a.length = this.ca;
      return a;
    }
  }
  vs.g = "47F";
  Object.assign(vs.prototype, { j: vs });
  class ws {
    fa() {
      throw 142;
    }
    fk(a, b, c) {
      let d = c,
        e = a.b;
      if (b < 0 || c < 0 || b + c > a.length) throw 54;
      try {
        for (; d > 0; ) ((e[b] = this.fa()), ++b, --d);
      } catch (f) {
        if (!(Sc.sP(f).Ema() instanceof Xx)) throw f;
      }
      return c - d;
    }
    umb(a, b) {
      for (var c = 0; b > 0; ) {
        let d = this.fk(a, c, b);
        if (d == 0) throw 55;
        c += d;
        b -= d;
      }
    }
    kKa() {
      let a = new vs(),
        b;
      for (;;) {
        b = this.fa();
        if (b == 0) break;
        a.Rua(b);
      }
      a.Uq();
    }
    WK() {
      return jf.Tab(this.wi());
    }
    smb() {
      let a = this.wi(),
        b = this.wi();
      return this.jP ? jf.PDa(b, a) : jf.PDa(a, b);
    }
    Zd() {
      var a = this.fa();
      let b = this.fa();
      a = this.jP ? b | (a << 8) : a | (b << 8);
      return (a & 32768) != 0 ? a - 65536 : a;
    }
    ie() {
      let a = this.fa(),
        b = this.fa();
      return this.jP ? b | (a << 8) : a | (b << 8);
    }
    I4() {
      let a = this.fa(),
        b = this.fa(),
        c = this.fa();
      return this.jP ? c | (b << 8) | (a << 16) : a | (b << 8) | (c << 16);
    }
    wi() {
      let a = this.fa(),
        b = this.fa(),
        c = this.fa(),
        d = this.fa();
      return this.jP
        ? d | (c << 8) | (b << 16) | (a << 24)
        : a | (b << 8) | (c << 16) | (d << 24);
    }
    cu(a, b) {
      let c = new mb(new ArrayBuffer(a));
      this.umb(c, a);
      return c.nn(0, a, b);
    }
  }
  ws.g = "480";
  Object.assign(ws.prototype, { j: ws });
  class cd extends ws {
    constructor(a, b, c) {
      super();
      b == null && (b = 0);
      c == null && (c = a.length - b);
      if (b < 0 || c < 0 || b + c > a.length) throw 56;
      this.b = a.b;
      this.ca = b;
      this.UF = this.mr = c;
    }
    Aub(a) {
      a < 0 ? (a = 0) : a > this.UF && (a = this.UF);
      this.mr = this.UF - a;
      this.ca = a;
    }
    fa() {
      if (this.mr == 0) throw 57;
      this.mr--;
      return this.b[this.ca++];
    }
    fk(a, b, c) {
      if (b < 0 || c < 0 || b + c > a.length) throw 58;
      if (this.mr == 0 && c > 0) throw 59;
      this.mr < c && (c = this.mr);
      let d = this.b;
      a = a.b;
      let e = 0,
        f = c;
      for (; e < f; ) {
        let g = e++;
        a[b + g] = d[this.ca + g];
      }
      this.ca += c;
      this.mr -= c;
      return c;
    }
  }
  cd.g = "481";
  cd.u = ws;
  Object.assign(cd.prototype, { j: cd });
  class xs {
    gq() {
      throw 143;
    }
    Gna(a, b, c) {
      if (b < 0 || c < 0 || b + c > a.length) throw 60;
      a = a.b;
      let d = c;
      for (; d > 0; ) (this.gq(a[b]), ++b, --d);
      return c;
    }
    kAb(a, b) {
      for (var c = 0; b > 0; ) {
        let d = this.Gna(a, c, b);
        c += d;
        b -= d;
      }
    }
    ke(a) {
      this.jP
        ? (this.gq(a >>> 24),
          this.gq((a >> 16) & 255),
          this.gq((a >> 8) & 255),
          this.gq(a & 255))
        : (this.gq(a & 255),
          this.gq((a >> 8) & 255),
          this.gq((a >> 16) & 255),
          this.gq(a >>> 24));
    }
    Jna(a) {
      a = mb.q3(a);
      this.kAb(a, a.length);
    }
  }
  xs.g = "482";
  Object.assign(xs.prototype, { j: xs });
  class Tg extends xs {
    constructor() {
      super();
      this.b = new vs();
    }
    gq(a) {
      this.b.Rua(a);
    }
    Gna(a, b, c) {
      this.b.EWa(a, b, c);
      return c;
    }
    Uq() {
      return this.b.Uq();
    }
  }
  Tg.g = "483";
  Tg.u = xs;
  Object.assign(Tg.prototype, { j: Tg });
  class Xx {
    constructor() {}
    toString() {
      return "Eof";
    }
  }
  Xx.g = "484";
  Object.assign(Xx.prototype, { j: Xx });
  var ys = (bg["haxe.io.Error"] = {
    hG: !0,
    bs: null,
    jQa: { xj: "Blocked", Ag: 0, zh: "haxe.io.Error", toString: Ra },
    QTa: { xj: "Overflow", Ag: 1, zh: "haxe.io.Error", toString: Ra },
    PTa: { xj: "OutsideBounds", Ag: 2, zh: "haxe.io.Error", toString: Ra },
    tQa:
      ((T = function (a) {
        return { Ag: 3, e: a, zh: "haxe.io.Error", toString: Ra };
      }),
      (T.xj = "Custom"),
      (T.iG = ["e"]),
      T),
  });
  ys.bs = [ys.jQa, ys.QTa, ys.PTa, ys.tQa];
  class jf {
    static Tab(a) {
      jf.dR.setInt32(0, a, !0);
      return jf.dR.getFloat32(0, !0);
    }
    static PDa(a, b) {
      jf.dR.setInt32(0, a, !0);
      jf.dR.setInt32(4, b, !0);
      return jf.dR.getFloat64(0, !0);
    }
  }
  jf.g = "485";
  class pf {
    constructor(a) {
      this.current = 0;
      this.Rva = a;
    }
    yd() {
      return this.current < this.Rva.length;
    }
    next() {
      return this.Rva[this.current++];
    }
  }
  pf.g = "486";
  Object.assign(pf.prototype, { j: pf });
  class Uw {
    constructor(a) {
      this.map = a;
      this.keys = a.keys();
    }
    yd() {
      return this.keys.yd();
    }
    next() {
      let a = this.keys.next();
      return { value: this.map.get(a), key: a };
    }
  }
  Uw.g = "487";
  Object.assign(Uw.prototype, { j: Uw });
  class Ny {
    constructor(a, b, c) {
      this.xml = b;
      this.message = a;
      this.position = c;
      this.lineNumber = 1;
      for (a = this.lja = 0; a < c; ) {
        let d = b.charCodeAt(a++);
        d == 10 ? (this.lineNumber++, (this.lja = 0)) : d != 13 && this.lja++;
      }
    }
    toString() {
      return (
        ob.Vq(this).g +
        ": " +
        this.message +
        " at line " +
        this.lineNumber +
        " char " +
        this.lja
      );
    }
  }
  Ny.g = "488";
  Object.assign(Ny.prototype, { j: Ny });
  class Vg {
    static parse(a, b) {
      b == null && (b = !1);
      let c = ia.createDocument();
      Vg.bQ(a, b, 0, c);
      return c;
    }
    static bQ(a, b, c, d) {
      c == null && (c = 0);
      let e = null;
      var f = 1,
        g = 1;
      let h = null;
      var k = 0;
      let l = 0,
        n = 0,
        q = new uf();
      var r = 1;
      let t = -1;
      for (; c < a.length; ) {
        let x = a.charCodeAt(c);
        switch (f) {
          case 0:
            switch (x) {
              case 9:
              case 10:
              case 13:
              case 32:
                break;
              default:
                f = g;
                continue;
            }
            break;
          case 1:
            if (x == 60) ((f = 0), (g = 2));
            else {
              k = c;
              f = 13;
              continue;
            }
            break;
          case 2:
            switch (x) {
              case 33:
                if (a.charCodeAt(c + 1) == 91) {
                  c += 2;
                  if (J.substr(a, c, 6).toUpperCase() != "CDATA[") throw 61;
                  c += 5;
                  f = 17;
                } else if (
                  a.charCodeAt(c + 1) == 68 ||
                  a.charCodeAt(c + 1) == 100
                ) {
                  if (J.substr(a, c + 2, 6).toUpperCase() != "OCTYPE") throw 62;
                  c += 8;
                  f = 16;
                } else {
                  if (a.charCodeAt(c + 1) != 45 || a.charCodeAt(c + 2) != 45)
                    throw 63;
                  c += 2;
                  f = 15;
                }
                k = c + 1;
                break;
              case 47:
                if (d == null) throw 64;
                k = c + 1;
                f = 0;
                g = 10;
                break;
              case 63:
                f = 14;
                k = c;
                break;
              default:
                f = 3;
                k = c;
                continue;
            }
            break;
          case 3:
            if (
              !(
                (x >= 97 && x <= 122) ||
                (x >= 65 && x <= 90) ||
                (x >= 48 && x <= 57) ||
                x == 58 ||
                x == 46 ||
                x == 95 ||
                x == 45
              )
            ) {
              if (c == k) throw 65;
              e = ia.createElement(J.substr(a, k, c - k));
              d.od(e);
              ++l;
              f = 0;
              g = 4;
              continue;
            }
            break;
          case 4:
            switch (x) {
              case 47:
                f = 11;
                break;
              case 62:
                f = 9;
                break;
              default:
                f = 5;
                k = c;
                continue;
            }
            break;
          case 5:
            if (
              !(
                (x >= 97 && x <= 122) ||
                (x >= 65 && x <= 90) ||
                (x >= 48 && x <= 57) ||
                x == 58 ||
                x == 46 ||
                x == 95 ||
                x == 45
              )
            ) {
              if (k == c) throw 66;
              h = J.substr(a, k, c - k);
              if (e.Fe(h)) throw 67;
              f = 0;
              g = 6;
              continue;
            }
            break;
          case 6:
            if (x == 61) ((f = 0), (g = 7));
            else throw 68;
            break;
          case 7:
            switch (x) {
              case 34:
              case 39:
                q = new uf();
                f = 8;
                k = c + 1;
                t = x;
                break;
              default:
                throw 69;
            }
            break;
          case 8:
            switch (x) {
              case 38:
                r = c - k;
                q.b += r == null ? J.substr(a, k, null) : J.substr(a, k, r);
                f = 18;
                r = 8;
                k = c + 1;
                break;
              case 60:
              case 62:
                if (b) throw 70;
                x == t &&
                  ((g = c - k),
                  (q.b += g == null ? J.substr(a, k, null) : J.substr(a, k, g)),
                  (g = q.b),
                  (q = new uf()),
                  e.set(h, g),
                  (f = 0),
                  (g = 4));
                break;
              default:
                x == t &&
                  ((g = c - k),
                  (q.b += g == null ? J.substr(a, k, null) : J.substr(a, k, g)),
                  (g = q.b),
                  (q = new uf()),
                  e.set(h, g),
                  (f = 0),
                  (g = 4));
            }
            break;
          case 9:
            k = c = Vg.bQ(a, b, c, e);
            f = 1;
            break;
          case 10:
            if (
              !(
                (x >= 97 && x <= 122) ||
                (x >= 65 && x <= 90) ||
                (x >= 48 && x <= 57) ||
                x == 58 ||
                x == 46 ||
                x == 95 ||
                x == 45
              )
            ) {
              if (k == c) throw 71;
              g = J.substr(a, k, c - k);
              if (d == null || d.nodeType != 0) throw 72;
              if (d.nodeType != ia.Element) throw 73;
              if (g != d.nodeName) {
                if (d.nodeType != ia.Element) throw 74;
                throw 75;
              }
              f = 0;
              g = 12;
              continue;
            }
            break;
          case 11:
            if (x == 62) f = 1;
            else throw 76;
            break;
          case 12:
            if (x == 62) return (l == 0 && d.od(ia.MZ("")), c);
            throw 77;
          case 13:
            x == 60
              ? ((g = c - k),
                (q.b += g == null ? J.substr(a, k, null) : J.substr(a, k, g)),
                (g = ia.MZ(q.b)),
                (q = new uf()),
                d.od(g),
                ++l,
                (f = 0),
                (g = 2))
              : x == 38 &&
                ((r = c - k),
                (q.b += r == null ? J.substr(a, k, null) : J.substr(a, k, r)),
                (f = 18),
                (r = 13),
                (k = c + 1));
            break;
          case 14:
            x == 63 &&
              a.charCodeAt(c + 1) == 62 &&
              (++c,
              d.od(
                ia.createProcessingInstruction(J.substr(a, k + 1, c - k - 2)),
              ),
              ++l,
              (f = 1));
            break;
          case 15:
            x == 45 &&
              a.charCodeAt(c + 1) == 45 &&
              a.charCodeAt(c + 2) == 62 &&
              (d.od(ia.createComment(J.substr(a, k, c - k))),
              ++l,
              (c += 2),
              (f = 1));
            break;
          case 16:
            x == 91
              ? ++n
              : x == 93
                ? --n
                : x == 62 &&
                  n == 0 &&
                  (d.od(ia.D1a(J.substr(a, k, c - k))), ++l, (f = 1));
            break;
          case 17:
            x == 93 &&
              a.charCodeAt(c + 1) == 93 &&
              a.charCodeAt(c + 2) == 62 &&
              (d.od(ia.u1a(J.substr(a, k, c - k))), ++l, (c += 2), (f = 1));
            break;
          case 18:
            if (x == 59) {
              k = J.substr(a, k, c - k);
              if (k.charCodeAt(0) == 35)
                ((k =
                  k.charCodeAt(1) == 120
                    ? K.parseInt("0" + J.substr(k, 1, k.length - 1))
                    : K.parseInt(J.substr(k, 1, k.length - 1))),
                  (q.b += String.fromCodePoint(k)));
              else if (Object.prototype.hasOwnProperty.call(Vg.lQ.v, k))
                q.b += K.T(Vg.lQ.v[k]);
              else {
                if (b) throw 78;
                q.b += K.T("&" + k + ";");
              }
              k = c + 1;
              f = r;
            } else if (
              !(
                (x >= 97 && x <= 122) ||
                (x >= 65 && x <= 90) ||
                (x >= 48 && x <= 57) ||
                x == 58 ||
                x == 46 ||
                x == 95 ||
                x == 45
              ) &&
              x != 35
            ) {
              if (b) throw 79;
              q.b += String.fromCodePoint(38);
              f = c - k;
              q.b += f == null ? J.substr(a, k, null) : J.substr(a, k, f);
              --c;
              k = c + 1;
              f = r;
            }
        }
        ++c;
      }
      f == 1 && ((k = c), (f = 13));
      if (f == 13) {
        if (d.nodeType == 0) {
          if (d.nodeType != ia.Element) throw 80;
          throw 81;
        }
        if (c != k || l == 0)
          ((b = c - k),
            (q.b += b == null ? J.substr(a, k, null) : J.substr(a, k, b)),
            d.od(ia.MZ(q.b)));
        return c;
      }
      if (!b && f == 18 && r == 13)
        return (
          (q.b += String.fromCodePoint(38)),
          (b = c - k),
          (q.b += b == null ? J.substr(a, k, null) : J.substr(a, k, b)),
          d.od(ia.MZ(q.b)),
          c
        );
      throw 82;
    }
  }
  Vg.g = "489";
  class Zk {
    constructor(a) {
      this.output = new uf();
      this.JA = a;
    }
    Hna(a, b) {
      switch (a.nodeType) {
        case 0:
          this.output.b += K.T(b + "<");
          if (a.nodeType != ia.Element) throw 83;
          this.output.b += K.T(a.nodeName);
          for (var c = a.attributes(); c.yd(); ) {
            var d = c.next();
            this.output.b += K.T(" " + d + '="');
            d = Eb.ODa(a.get(d), !0);
            this.output.b += K.T(d);
            this.output.b += '"';
          }
          if (this.Eab(a)) {
            this.output.b += ">";
            this.JA && (this.output.b += "\n");
            if (a.nodeType != ia.Document && a.nodeType != ia.Element) throw 84;
            c = a.children;
            for (d = 0; d < c.length; )
              this.Hna(c[d++], this.JA ? b + "\t" : b);
            this.output.b += K.T(b + "</");
            if (a.nodeType != ia.Element) throw 85;
            this.output.b += K.T(a.nodeName);
            this.output.b += ">";
          } else this.output.b += "/>";
          this.JA && (this.output.b += "\n");
          break;
        case 1:
          if (a.nodeType == ia.Document || a.nodeType == ia.Element) throw 86;
          a = a.nodeValue;
          a.length != 0 &&
            ((b += Eb.ODa(a)),
            (this.output.b += K.T(b)),
            this.JA && (this.output.b += "\n"));
          break;
        case 2:
          this.output.b += K.T(b + "<![CDATA[");
          if (a.nodeType == ia.Document || a.nodeType == ia.Element) throw 87;
          this.output.b += K.T(a.nodeValue);
          this.output.b += "]]\x3e";
          this.JA && (this.output.b += "\n");
          break;
        case 3:
          if (a.nodeType == ia.Document || a.nodeType == ia.Element) throw 88;
          a = a.nodeValue;
          a = a.replace(RegExp("[\n\r\t]+", "g"), "");
          this.output.b += b == null ? "null" : "" + b;
          this.output.b += K.T(Eb.trim("\x3c!--" + a + "--\x3e"));
          this.JA && (this.output.b += "\n");
          break;
        case 4:
          if (a.nodeType == ia.Document || a.nodeType == ia.Element) throw 89;
          this.output.b += K.T("<!DOCTYPE " + a.nodeValue + ">");
          this.JA && (this.output.b += "\n");
          break;
        case 5:
          if (a.nodeType == ia.Document || a.nodeType == ia.Element) throw 90;
          this.output.b += K.T("<?" + a.nodeValue + "?>");
          this.JA && (this.output.b += "\n");
          break;
        case 6:
          if (a.nodeType != ia.Document && a.nodeType != ia.Element) throw 91;
          a = a.children;
          for (c = 0; c < a.length; ) this.Hna(a[c++], b);
      }
    }
    Eab(a) {
      if (a.nodeType != ia.Document && a.nodeType != ia.Element) throw 92;
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        let c = a[b++];
        switch (c.nodeType) {
          case 0:
          case 1:
            return !0;
          case 2:
          case 3:
            if (c.nodeType == ia.Document || c.nodeType == ia.Element) throw 93;
            if (Eb.cGa(c.nodeValue).length != 0) return !0;
        }
      }
      return !1;
    }
    static print(a, b) {
      b == null && (b = !1);
      b = new Zk(b);
      b.Hna(a, "");
      return b.output.b;
    }
  }
  Zk.g = "48A";
  Object.assign(Zk.prototype, { j: Zk });
