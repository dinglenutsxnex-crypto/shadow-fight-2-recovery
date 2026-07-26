// 030-content-loader.js
// Domain: physics  |  21 class(es)  |  tree root(s): vl, iz, gb, Db, jz, gu, Ef, Za, iu, Nc, vy, hu, yl, ze, Cf, Ri, ju, wd
// Edit here. Run `npm run build` to reassemble the full bundle.
  class vl {
    constructor() {
      this.RZ = this.CE = this.PP = this.el = this.HP = this.Fna = 0;
    }
  }
  vl.g = "B3";
  Object.assign(vl.prototype, { j: vl });
  class iz {
    static h0a() {
      let a = 0,
        b = G.h9a();
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        G.eg(c).indexOf("tactics/") != -1 && G.Vr(c);
      }
    }
  }
  iz.g = "B4";
  class gb {
    static init() {
      gb.eA || ((gb.eA = !0), L.J.Ufa().OE.ei(gb.OE));
    }
    static Z_() {
      gb.eA && (L.J.Ufa().OE.detach(gb.OE), (gb.eA = !1));
    }
    static OE(a, b, c) {
      if (!((c & 1) <= 0))
        switch (a) {
          case 48:
          case 137:
            gb.Of(22);
            break;
          case 49:
          case 138:
            gb.Of(4);
            break;
          case 50:
          case 139:
            gb.Of(5);
            break;
          case 51:
          case 140:
            gb.Of(9);
            break;
          case 52:
          case 141:
            gb.Of(10);
            break;
          case 53:
          case 142:
            gb.Of(6);
            break;
          case 54:
          case 143:
            gb.Of(7);
            break;
          case 55:
          case 144:
            gb.Of(18);
            break;
          case 56:
          case 145:
            gb.Of(20);
            break;
          case 57:
          case 146:
            gb.Of(21);
            break;
          case 66:
            gb.Of(15);
            break;
          case 77:
            gb.Of(8);
            break;
          case 85:
            gb.Of(16);
            break;
          case 121:
            gb.Of(13);
            break;
          case 123:
            gb.Of(11);
            break;
          case 45:
          case 124:
            gb.Of(1);
            break;
          case 125:
            gb.Of(2);
            break;
          case 126:
            gb.Of(23);
            break;
          case 127:
            gb.Of(24);
            break;
          case 130:
            gb.Of(17);
            break;
          case 131:
            gb.Of(14);
            break;
          case 132:
            gb.Of(12);
            break;
          case 61:
          case 135:
            gb.Of(3);
        }
    }
    static Of(a) {
      if (gb.eA) {
        var b = ca.Ka();
        if (b.ju == 2 || a == 3 || a == 1)
          switch (a) {
            case 1:
              b.yn = !b.yn;
              break;
            case 2:
              b.ZEa = !b.ZEa;
              break;
            case 3:
              b.yn && b.ia();
              break;
            case 4:
              b.iA(!1, !1);
              break;
            case 5:
              b.iA(!1, !0);
              break;
            case 6:
              b.iA(!0, !1);
              break;
            case 7:
              b.iA(!0, !0);
              break;
            case 9:
              b.eL();
              break;
            case 10:
              b.xob();
              break;
            case 12:
              a = gb.y8;
              a == null || a == ""
                ? ((gb.y8 = b.pb.sf.Gc.name), b.pb.A5("Test"))
                : (b.pb.A5(gb.y8), (gb.y8 = ""));
              break;
            case 13:
              b.fub(!b.AN);
              break;
            case 14:
              b.Ta.qzb();
              break;
            case 18:
              b.zb.oZ(1);
              b.zb.PA();
              b.tb.Hj(b.zb, 8, !0);
              break;
            case 19:
              b.zb.Hda = !b.zb.Hda;
              break;
            case 20:
              b.zb.nca();
              break;
            case 21:
              b.ha != null &&
                ((b = b.ha.mb != null ? b.ha.mb.Id : null),
                b != null && b.hbb());
              break;
            case 22:
              b.pb.Aga = !b.pb.Aga;
              break;
            case 23:
              b.zb.parameters.PMa(!b.zb.parameters.fW);
              break;
            case 24:
              b.pb.parameters.PMa(!b.pb.parameters.fW);
          }
      }
    }
  }
  gb.g = "B5";
  class Qi extends O {
    constructor() {
      super();
      this.hyb();
      this.TKa();
      this.Lb = new Cf();
      this.Lb.kn = new Ri(0);
      let a = this.Lb.kn.go.node.Jb;
      a.scale.x = 1.8;
      a.scale.y = 1.8;
      a.U = (a.U & -6) | 240;
      this.Qa = R.aa(E.get(757));
      this.Qa.Ga();
      this.node.appendChild(this.Qa);
      this.node.L.appendChild(this.Lb.kn.go.node);
      this.g$ = Fc.Ed(1342177280, this.node.L);
      this.rya();
      this.Ca = v.hw();
      this.Ca.Gj = !1;
      this.Ca.Bu = !1;
      this.T9 = new H(200, -93, 0, 1);
      this.T9.x = 0;
      this.ng = new V();
      this.wr = new V();
      this.Bra = this.p9 = this.wra = !1;
      this.SX = 0;
      this.caa = !1;
      this.Bj = null;
      this.xv = new Md();
      this.Dg = new Gc();
      this.Ra = m.l();
      this.Kc = null;
      this.yg = m.l();
      this.mv = m.l();
      this.Vpa = 4202505;
    }
    NMa(a) {
      a > 0 && (this.caa = !0);
    }
    TKa() {
      this.caa = !1;
    }
    pNa() {
      this.Kc != null && this.g$.A6(1);
    }
    Lab() {
      this.Kc != null && this.g$.A6(0);
    }
    mla(a) {
      let b = this.Lb.kn.go.node.Jb;
      b.translate.x = -200 + a;
      b.translate.y = 412;
      b.U = (b.U & -2) | 240;
    }
    Z(a) {
      super.Z(a);
      this.g$.update(a);
      this.ia();
    }
    B() {
      super.B();
      this.Kc != null &&
        (this.Kc.ng.removeListener(w(this, this.gia)),
        this.Kc.Jw.removeListener(w(this, this.ria)),
        this.Kc.yK.removeListener(w(this, this.sia)),
        this.Kc.wr.removeListener(w(this, this.Gia)),
        J.remove(this.Ra, this.Kc),
        this.Kc.SP(),
        (this.Kc = null),
        m.forEach(this.Ra, function (a) {
          a.SP();
        }),
        (this.Ra.length = 0));
    }
    hyb() {
      this.caa && v.dU(v.gB);
    }
    rya() {
      this.Bj != null && (this.Bj.B(), (this.Bj = null));
      this.Bj = new xl();
      this.Bj.init(this.Lb);
      this.Bj.go.setActive(!1);
    }
    Jx(a, b, c, d) {
      this.SX = c;
      this.rya();
      this.Kc != null &&
        (this.Kc.ng.removeListener(w(this, this.gia)),
        this.Kc.Jw.removeListener(w(this, this.ria)),
        this.Kc.yK.removeListener(w(this, this.sia)),
        this.Kc.wr.removeListener(w(this, this.Gia)),
        m.forEach(this.Ra, function (e) {
          e.SP();
        }),
        (this.Ra.length = 0),
        (this.Kc = null));
      this.Ca = b;
      b = this.T9;
      this.Ca.position = new H(b.x, b.y, 0, 1);
      this.Ca.Gj = !1;
      this.Ca.Bu = !1;
      this.Ca.wl = this.rfa(d);
      a != null &&
        (a.type == I.xg
          ? (this.Ca.Hd = a)
          : a.type == I.Ci
            ? (this.Ca.kg = a)
            : a.type == I.Di
              ? (this.Ca.Mg = a)
              : a.type == I.Xh
                ? (this.Ca.lg = a)
                : a.type == I.Ff && (this.Ca.Ng = a));
      this.Ca.iM();
      this.Ca.Am(this.xv);
      this.wzb(d);
      this.wra && ((this.wra = !1), this.Ca.Am(this.xv));
      this.p9 = !1;
      this.Kc = new wd(this.Ca);
      this.Kc.BI();
      this.NT(this.Kc);
      this.Dg.xxa();
      this.Dg.Jf(this.Kc);
      this.Ra.push(this.Kc);
      this.TNa();
      this.ia();
      this.olb();
    }
    nPa(a, b, c) {
      this.Jx(a, new xc(v.hw()), b, c);
    }
    TNa() {
      this.Kc.Vb.data = this.SX;
      this.Kc.Ke = this.SX;
      this.WF(this.Kc);
      this.Dg.Kh(1, this.Kc.Vb);
    }
    olb() {
      this.Bj.rh.Jf(this.Kc.pa, this.Vpa, !0);
      this.Bj.fQ(this.Kc);
      this.Bra = !0;
    }
    IK(a) {
      a = sa.Tea(a);
      a != null && this.Kc.uJa(a);
    }
    ria(a) {
      this.yg.push(a);
      this.NT(a);
      this.Bj.rh.Jf(a.pa, this.Vpa, !0);
      this.Bj.fQ(a);
      this.WF(a);
    }
    sia(a) {
      let b = 0,
        c = this.Ra;
      for (; b < c.length && c[b++] != a; );
      m.cd(this.mv, a);
    }
    WF(a) {
      let b = a.pa,
        c = a.parameters.qb,
        d = a.lb != null;
      a = a.me;
      for (var e = 0, f = this.Ra; e < f.length; ) this.M6(f[e++], a, b, c, d);
      e = 0;
      for (f = this.yg; e < f.length; ) this.M6(f[e++], a, b, c, d);
    }
    M6(a, b, c, d, e) {
      let f = 0,
        g = a.me;
      for (; f < g.length; ) g[f++].BF(c, d, e, c);
      c = a.pa;
      d = a.parameters.qb;
      a = a.lb != null;
      for (e = 0; e < b.length; ) b[e++].BF(c, d, a, c);
    }
    dE(a, b) {
      return a != null && b != null && a.name != b.name ? !0 : !1;
    }
    Ocb(a) {
      return this.dE(this.xv.kg, a.kg) ||
        this.dE(this.xv.Mg, a.Mg) ||
        this.dE(this.xv.Rf, a.Rf) ||
        this.dE(this.xv.Dt, a.Dt) ||
        this.dE(this.xv.Hd, a.Hd) ||
        this.dE(this.xv.Ng, a.Ng) ||
        this.dE(this.xv.lg, a.lg)
        ? !0
        : !1;
    }
    Rw() {
      let a = 0,
        b = this.mv;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        let d = 0,
          e = 0,
          f = this.Ra;
        for (; e < f.length && f[e++] != c; ) ++d;
        this.Uja(d, c);
      }
      this.mv.length = 0;
    }
    Uja(a, b) {
      let c = this.Ra.length;
      0 == c ||
        a < 0 ||
        c - 1 < a ||
        ((b = this.Ra[a]),
        this.Bj.rh.ym(a),
        this.Bj.z_(b),
        J.remove(this.Ra, b));
      this.ym(b);
    }
    ym(a) {
      var b = a.lb;
      b != null && b.GKa(a);
      b = 0;
      let c = this.Ra;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        d.yKa(a);
        d.jla();
      }
      this.Dg.ym(a);
      a.xKa();
      a.SP();
    }
    rfa(a) {
      switch (a) {
        case I.Ci:
          return 1;
        case I.Tx:
          return 6;
        case I.Gu:
          return 7;
        case I.Di:
          return 3;
        case I.Loa:
          return 9;
        case I.Jm:
          return 8;
        case I.vB:
          return 8;
        case I.yk:
          return 6;
        case I.xg:
          return 2;
        case I.Ff:
          return 5;
        case I.Xh:
          return 4;
        default:
          return 0;
      }
    }
    U4() {
      this.Dg.reset();
      this.Fob();
      this.TNa();
    }
    Fob() {
      if (this.Kc != null) {
        let a = this.T9;
        this.Kc.uL(new H(a.x, a.y, 0, 1));
      }
    }
    wzb(a) {
      a = v.hNa.m8a(a);
      if (a != null) {
        let b = p.items.$b(a.pE);
        this.Ca.ik(a.type, b);
        this.Ca.iM();
      }
    }
    NT(a) {
      a.FMa(-500, 500, 0, 0);
      a.ng.addListener(w(this, this.gia));
      a.Jw.addListener(w(this, this.ria));
      a.yK.addListener(w(this, this.sia));
      a.wr.addListener(w(this, this.Gia));
    }
    gia(a) {
      this.ng.$(a);
    }
    Gia() {
      this.wr.$();
    }
    ia() {
      if (this.Bra) {
        for (var a = 0, b = this.Ra; a < b.length; ) {
          var c = b[a];
          ++a;
          this.p9 || c.mp() == -1 || ((this.p9 = !0), this.Bj.go.setActive(!0));
          c.ia();
          this.C(0);
          N.lc < 1 &&
            ((c = this.Bj.rh.Ra[0]), c != null && this.C(-c.Ge().ma.x));
        }
        if (this.yg.length > 0) {
          a = 0;
          for (b = this.yg; a < b.length; )
            ((c = b[a]), ++a, c.ia(), this.Ra.push(c));
          this.yg.length = 0;
        }
        this.Dg.ia();
        this.Bj.Mq.bM();
        this.Bj.Nq.bM();
        this.Rw();
      }
    }
  }
  Qi.g = "B6";
  Qi.u = O;
  Object.assign(Qi.prototype, { j: Qi });
  class jz {
    static lCa(a) {
      switch (a) {
        case "EndStance":
          return 3;
        case "Fight":
          return 2;
        case "PeacefulRestore":
          return 6;
        case "PeacefulStart":
          return 4;
        case "ShopPurchase":
          return 5;
        case "StartStance":
          return 1;
        case "TryOn":
          return 7;
        default:
          return 0;
      }
    }
  }
  class gu {
    constructor() {
      function a(c, d, e, f) {
        c = new yl(c, 80);
        c.x = e;
        c.y = f;
        d.node.appendChild(c.node);
        return c;
      }
      this.node = new Ea();
      this.EHa = new V();
      this.FHa = new V();
      this.Cd = [];
      this.gh = new jg(y.gRa);
      this.gh.sp = y.fRa;
      this.gh.ee = 10;
      this.gh.C(-50);
      this.gh.D(198);
      this.node.appendChild(this.gh.node);
      this.Cd.push(this.gh);
      this.Ui = new jg(y.kRa);
      this.Ui.sp = y.jRa;
      this.Ui.ee = 9;
      this.Ui.C(120);
      this.Ui.D(28);
      this.node.appendChild(this.Ui.node);
      this.Cd.push(this.Ui);
      this.fi = new jg(y.mRa);
      this.fi.sp = y.lRa;
      this.fi.ee = 11;
      this.fi.C(-120);
      this.fi.D(-28);
      this.fi.hva();
      this.node.appendChild(this.fi.node);
      this.Cd.push(this.fi);
      this.Gg = new jg(y.iRa);
      this.Gg.sp = y.hRa;
      this.Gg.ee = 12;
      this.Gg.C(50);
      this.Gg.D(-198);
      this.Gg.hva();
      this.node.appendChild(this.Gg.node);
      this.Cd.push(this.Gg);
      this.Gg.wL(100, 1);
      this.U7 = new jd();
      let b = sc.UD;
      this.$f = [];
      this.$f[0] = a(b.get(9), this.Ui, 0, 80);
      this.$f[1] = a(b.get(10), this.gh, 0, 80);
      this.$f[2] = a(b.get(11), this.fi, 0, 80);
      this.$f[3] = a(b.get(12), this.Gg, 0, 80);
    }
    Ovb(a) {
      this.Ui.Y(a);
    }
    Gvb(a) {
      this.gh.Y(a);
    }
    Ivb(a) {
      this.Gg.Y(a);
    }
    Pvb(a) {
      this.fi.Y(a);
    }
    update() {
      for (var a = 0, b = this.Cd; a < b.length; ) b[a++].Z(L.J.uk.Cm);
      if ((a = !L.J.wn)) {
        b = -117;
        var c = 77;
        this.fi.active || this.Gg.active || (c = -25);
        this.Gg.active || (b = -12);
        this.Ui.C(b + -105);
        this.Ui.D(c + 105);
        this.gh.C(b + 105 + 20);
        this.gh.D(c + 105);
        this.fi.C(b + -105 + 101 + 10);
        this.fi.D(c + -105 + 15);
        this.Gg.C(b + 105 + 101 + 10 + 20);
        this.Gg.D(c + -105 + 15);
      } else
        (this.gh.C(-50),
          this.gh.D(198),
          this.Ui.C(120),
          this.Ui.D(28),
          this.fi.C(-120),
          this.fi.D(-28),
          this.Gg.C(50),
          this.Gg.D(-198));
      b = 0;
      for (c = this.$f; b < c.length; ) c[b++].node.R(a);
      if (a) {
        a = L.J.Uj();
        b = sc.UD;
        c = a.Xe(b.get(10));
        this.gh.cj || this.gh.bx(c);
        c && this.$f[1].Az();
        c = a.Xe(b.get(9));
        this.Ui.cj || this.Ui.bx(c);
        c && this.$f[0].Az();
        c = a.Xe(b.get(11));
        this.fi.cj || this.fi.bx(c);
        c && this.$f[2].Az();
        c = a.Xe(b.get(12));
        this.Gg.cj || this.Gg.bx(c);
        c && this.$f[3].Az();
        this.$f[3].Nna = (this.Gg.gy / 100) * -30;
        a = 0;
        for (b = ca.Ka().Ra; a < b.length; )
          ((c = b[a]),
            ++a,
            c.parameters.qb &&
              c.Ja.XR &&
              (this.$f[2].Nna = (this.fi.gy / 100) * -30));
        a = 0;
        for (b = this.$f; a < b.length; ) b[a++].update();
      }
    }
    csb(a, b, c) {
      c == null && (c = 0.5);
      switch (a) {
        case 9:
          this.Ui.wL(b, c);
          break;
        case 10:
          this.gh.wL(b, c);
          break;
        case 11:
          this.fi.wL(b, c);
          break;
        case 12:
          this.Gg.wL(b, c);
          break;
        case 14:
          this.gh.wL(b, c);
      }
    }
    Eob() {
      this.Gg.PKa();
    }
    xia(a) {
      let b = N.mn(a),
        c = 0,
        d = this.Cd;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        if (this.Qab(e, b)) {
          e.W.yb(e.sp);
          this.U7.v[a] = e;
          this.EHa.$(new Se(e.ee));
          e.cj = !0;
          break;
        }
      }
    }
    yia(a) {
      let b = this.U7.v[a];
      b != null &&
        (this.U7.remove(a),
        b.W.yb(b.frame),
        this.FHa.$(new Se(b.ee)),
        (b.cj = !1));
    }
    Qab(a, b) {
      if (!a.node.gg()) return !1;
      a = a.node.$n(b);
      return a.x * a.x + a.y * a.y < 13225;
    }
  }
  gu.g = "B7";
  Object.assign(gu.prototype, { j: gu });
  class Ef {
    constructor(a, b) {
      b == null && (b = 0);
      this.control = a;
      this.index = b;
    }
    bDa() {
      return this.control > 0 ? this.control <= 8 : !1;
    }
    G$a() {
      return this.control == 14;
    }
  }
  Ef.g = "B8";
  Object.assign(Ef.prototype, { j: Ef });
  class Za {
    constructor() {
      this.Lra = this.Cra = this.Nra = this.Ara = this.Kra = !0;
      this.isVisible = !1;
      this.enabled = !0;
      this.keyboard = new hu();
      this.xbb();
      this.uh = new ze();
      this.uh.node.wa(0);
      this.Nbb();
      this.gamepad = new iu();
      this.vbb();
      this.yla(!1);
    }
    TMa(a) {
      this.Kra = a;
      this.ug.Ovb(a);
    }
    QMa(a) {
      this.Ara = a;
      this.ug.Gvb(a);
    }
    jub() {
      this.Nra = !0;
      this.uh.setActive(!0);
    }
    SMa(a) {
      this.Cra = a;
      this.ug.Ivb(a);
    }
    UMa(a) {
      this.Lra = a;
      this.ug.Pvb(a);
    }
    yla(a) {
      this.keyboard.isActive = a;
      this.gamepad.isActive = a;
    }
    update() {
      this.keyboard.update();
      if (this.isVisible && this.enabled) {
        if (Wb.F().Lf != null) {
          var a = this.uh.node;
          a.wa(a.on() - 0.1);
          a = this.ug.node;
          a.wa(a.on() - 0.1);
        } else
          ((a = this.uh.node),
            a.wa(a.on() + 0.1),
            (a = this.ug.node),
            a.wa(a.on() + 0.1));
        N.Ta.qT();
        a = N.rect;
        var b = N.Pha,
          c = b * 0.05;
        N.GK == 0 && (c *= 2);
        var d = b * 0.03;
        N.lc < 1 && ((c = b * 0.04), (d = b * 0.1));
        if (L.J.wn) var e = b * 0.4;
        else ((e = Math.max(150, b * 0.2)), (d = c = 15));
        b = this.uh.node;
        var f = e / this.uh.JNa;
        b.la(f);
        f = (this.uh.JNa * f) / 2;
        b.C(f + c + N.GK);
        b.D(a.y + a.v - f - d);
        b.L.vg();
        b = this.ug.node;
        e /= 440;
        b.la(e);
        b.C(a.x + a.w - (440 * e) / 2 - (c + N.GK));
        b.D(a.y + a.v - (596 * e) / 2 - d);
        b.L.vg();
        a = !1;
        za.instance != null && za.instance.scroll.jr && (a = !0);
        if (!a)
          for (a = 0; a < 2; )
            ((c = a++),
              L.J.ed().Eb(c) && (this.uh.xia(c), this.ug.xia(c)),
              L.J.ed().UPa(c) && this.uh.lhb(c),
              L.J.ed().yh(c) && (this.uh.yia(c), this.ug.yia(c)));
        this.uh.update();
        this.ug.update();
        this.gamepad.update();
      }
    }
    Ea() {
      if (this.isVisible && this.enabled) {
        var a = this.uh.node;
        a.L.vg();
        a.L.Kx();
        L.J.Ha.Ea(a.L, N.Ta);
        a = this.ug.node;
        a.L.Kx();
        a.L.vg();
        L.J.Ha.Ea(a.L, N.Ta);
      }
    }
    Nbb() {
      this.uh.Dia.addListener(w(this, this.nS));
      this.uh.Eia.addListener(w(this, this.nS));
      this.uh.H3.addListener(w(this, this.x3));
      this.ug = new gu();
      this.ug.EHa.addListener(w(this, this.nS));
      this.ug.FHa.addListener(w(this, this.x3));
      this.ug.node.wa(0);
    }
    xbb() {
      this.keyboard.sr.addListener(w(this, this.nS));
      this.keyboard.vA.addListener(w(this, this.x3));
      let a = sc.UD;
      this.keyboard.De(2, 0, a.get(1), a.get(3));
      this.keyboard.De(8, 0, a.get(1), a.get(7));
      this.keyboard.De(4, 0, a.get(5), a.get(3));
      this.keyboard.De(6, 0, a.get(5), a.get(7));
      this.keyboard.De(1, 0, a.get(1));
      this.keyboard.De(5, 0, a.get(5));
      this.keyboard.De(7, 0, a.get(7));
      this.keyboard.De(3, 0, a.get(3));
      this.keyboard.De(9, 0, a.get(9));
      this.keyboard.De(10, 0, a.get(10));
      this.keyboard.De(11, 0, a.get(11));
      this.keyboard.De(12, 0, a.get(12));
      this.keyboard.De(13, 0, a.get(13));
      this.keyboard.De(14, 0, a.get(14));
    }
    vbb() {
      this.gamepad.sr.addListener(w(this, this.nS));
      this.gamepad.vA.addListener(w(this, this.x3));
      this.gamepad.De(2, 102, 101);
      this.gamepad.De(8, 102, 100);
      this.gamepad.De(4, 103, 101);
      this.gamepad.De(6, 103, 100);
      this.gamepad.De(1, 102);
      this.gamepad.De(5, 103);
      this.gamepad.De(7, 100);
      this.gamepad.De(3, 101);
      this.gamepad.De(10, 1);
      this.gamepad.De(9, 0);
      this.gamepad.De(11, 3);
      this.gamepad.De(12, 2);
    }
    init(a, b) {
      this.ug.Eob();
      this.refresh(a, b);
    }
    refresh(a, b) {
      this.TMa(!0);
      this.QMa(!0);
      this.jub();
      this.SMa(a);
      this.UMa(b);
    }
    nS(a) {
      if (a.control != 0 && this.REa(a.control)) {
        let b = ca.Ka();
        b != null && b.g1a(a);
      }
    }
    x3(a) {
      if (this.REa(a.control)) {
        let b = ca.Ka();
        b != null && b.h1a(a);
      }
    }
    REa(a) {
      return (!this.Kra && a == 9) ||
        (!this.Ara && a == 10) ||
        (!this.Nra && a > 0 && a <= 8) ||
        (!this.Lra && a == 11) ||
        (!this.Cra && a == 12)
        ? !1
        : !0;
    }
    static F() {
      let a = Za.Hb;
      return a != null ? a : (Za.Hb = new Za());
    }
    static B() {
      Za.Hb != null &&
        (Za.Hb.uh.B(), Za.Hb.keyboard.B(), Za.Hb.gamepad.B(), (Za.Hb = null));
    }
  }
  Za.g = "B9";
  Object.assign(Za.prototype, { j: Za });
  class iu {
    constructor() {
      this.sr = new V();
      this.vA = new V();
      this.isActive = !1;
      this.XL = m.l();
      this.ZD = !1;
    }
    B() {}
    update() {
      this.isActive && !this.Sfa() && L.J.WCa().cia != 0 && this.Zba(0);
    }
    Sfa() {
      return this.sr.qd() == 0 ? this.vA.qd() == 0 : !1;
    }
    De(a, ...b) {
      a = new zl(a, b.slice());
      this.XL.push(a);
    }
    Zba(a) {
      this.ZD = !1;
      let b = 0,
        c = this.XL;
      for (; b < c.length; ) this.Yba(c[b++], a);
    }
    Yba(a, b) {
      a.index = b;
      a.bDa() && (a.cj() || a.Eb())
        ? this.ZD || ((this.ZD = !0), this.sr.$(a))
        : a.G$a() && (a.cj() || a.Eb())
          ? this.sr.$(a)
          : a.Eb()
            ? this.sr.$(a)
            : a.yh() && this.vA.$(a);
    }
  }
  iu.g = "BA";
  Object.assign(iu.prototype, { j: iu });
  class Nc {
    static w$a() {
      return Nc.SG.length == 0;
    }
    static Nh(a) {
      a = Nc.a8a(a.Qfa(), a.index);
      return ca.Ka() != null ? ca.Ka().Y7a(a) : null;
    }
    static a8a(a, b) {
      a = Nc.v7a(a, b);
      return a != null ? a.Fxb : Nc.Yca;
    }
    static reset() {
      Nc.SG.length = 0;
      Nc.Yca = -1;
    }
    static v7a(a, b) {
      let c = 0,
        d = Nc.SG.length;
      for (; c < d; ) {
        let e = c++;
        if (Nc.SG[e].inputType == a && Nc.SG[e].f1a == b) return Nc.SG[e];
      }
      return null;
    }
  }
  Nc.g = "BB";
  class vy {
    constructor(a, b, c) {
      this.Fxb = a;
      this.inputType = b;
      this.f1a = c;
    }
  }
  vy.g = "BC";
  Object.assign(vy.prototype, { j: vy });
  class hu {
    constructor() {
      this.ZD = !1;
      this.XL = m.l();
      this.isActive = !0;
      this.vA = new V();
      this.sr = new V();
    }
    B() {
      this.vA = this.sr = this.XL = null;
    }
    De(a, b, ...c) {
      a = new Al(a, b, c.slice());
      this.XL.push(a);
    }
    update() {
      this.isActive && !this.Sfa() && this.Zba();
    }
    Sfa() {
      return this.sr.qd() == 0 ? this.vA.qd() == 0 : !1;
    }
    Zba() {
      this.ZD = !1;
      let a = 0,
        b = this.XL;
      for (; a < b.length; ) this.Yba(b[a++]);
    }
    Yba(a) {
      a.bDa() && (a.Eb() || a.cj())
        ? this.ZD || ((this.ZD = !0), this.sr.$(a))
        : a.Eb()
          ? this.sr.$(a)
          : a.yh() && this.vA.$(a);
    }
  }
  hu.g = "BD";
  Object.assign(hu.prototype, { j: hu });
  class yl {
    constructor(a, b) {
      this.Nna = this.y = this.x = 0;
      this.node = new Ea();
      this.Qa = R.Ed(-16777216, b, b, this.node);
      this.Qa.Ga();
      this.Qa.wa(0.2);
      this.label = R.aa(E.get(270), String.fromCodePoint(a), this.node);
      this.label.Ga();
    }
    Az() {
      this.node.wa(1);
      this.node.la(1.2);
    }
    update() {
      this.node.C(this.x);
      this.node.D(this.y + this.Nna);
      var a = this.node;
      a.wa(a.on() - 0.05);
      a = this.node;
      a.la(a.Db * 0.97);
      this.node.Db < 1 && this.node.la(1);
      this.node.on() < 0.75 && this.node.wa(0.75);
    }
  }
  yl.g = "BE";
  Object.assign(yl.prototype, { j: yl });
  class ze {
    constructor() {
      function a(e, f, g) {
        e = new yl(e, 85);
        e.x = f;
        e.y = g;
        c.x9.appendChild(e.node);
        return e;
      }
      function b(e) {
        e = R.aa(E.get(270), e);
        e.Ga();
        c.node.appendChild(e);
        return e;
      }
      ze.instance = this;
      this.node = new Ea();
      this.Ho =
        this.hta =
        this.Ko =
        this.gua =
        this.fra =
        this.Y8 =
        this.Cta =
        this.Q$ =
        this.ss =
          0;
      this.Zqa = 20;
      this.Jra = this.uW = this.pW = !1;
      this.A$ = m.l();
      this.IG = new Map();
      this.BB = m.l();
      this.Dia = new V();
      this.Eia = new V();
      this.H3 = new V();
      let c = this;
      this.Sl = b(y.nRa, 930);
      this.Sl.R(!1);
      this.Sl.wa(0);
      this.hX = b(y.pRa, 620);
      this.JNa = this.hX.ea.x;
      this.KH = b(y.oRa, 620);
      this.gX = b(y.rRa, 300);
      this.KX = b(y.qRa, 300);
      ze.htb(Lz);
      this.sqa = 90 - kz;
      this.gO = (kz * 3.141592653589793) / 180;
      this.C8 = (this.sqa * 3.141592653589793) / 180;
      this.eqa = Math.cos(this.gO / 2);
      this.Uta = Math.sin(this.gO / 2);
      this.WVa = Math.tan(this.C8);
      this.wsb();
      this.Orb(this.KH.ya() / 2);
      this.Xsb(this.Ko);
      this.Lsb(this.Ko / 2);
      this.asb(this.Ko * Mz);
      this.KH.R(!1);
      this.XT(!1);
      this.OX = new H(0, 0, 0, 1);
      this.Tta = new H(0, 0, 0, 1);
      let d = sc.UD;
      this.x9 = new Ea(this.node);
      this.$f = [];
      this.$f[0] = a(d.get(1), 0, -this.Ko * 0.7);
      this.$f[1] = a(d.get(3), this.Ko * 0.7, 0);
      this.$f[2] = a(d.get(5), 0, this.Ko * 0.7);
      this.$f[3] = a(d.get(7), -this.Ko * 0.7, 0);
    }
    B() {
      this.node.B();
      this.Sl =
        this.KX =
        this.gX =
        this.KH =
        this.hX =
        this.H3 =
        this.Eia =
        this.Dia =
        this.node =
          null;
      ze.instance = null;
    }
    setActive(a) {
      this.node.R(a);
    }
    update() {
      this.x9.R(!L.J.wn);
      if (this.x9.gg()) {
        var a = L.J.Uj();
        let d = sc.UD;
        var b = 0,
          c = 0;
        a.Xe(d.get(1)) && (this.$f[0].Az(), (c = -1));
        a.Xe(d.get(3)) && (this.$f[1].Az(), (b = 1));
        a.Xe(d.get(5)) && (this.$f[2].Az(), (c = 1));
        a.Xe(d.get(7)) && (this.$f[3].Az(), (b = -1));
        this.KH.R(this.Jra || b != 0 || c != 0);
        a = this.Tta;
        a.x = b;
        a.y = c;
        b = this.OX;
        c = this.Tta;
        a = this.OX;
        b.x += (c.x - a.x) * 0.1;
        b.y += (c.y - a.y) * 0.1;
        this.gX.C(this.OX.x * this.Ko);
        this.gX.D(this.OX.y * this.Ko);
        b = 0;
        for (c = this.$f; b < c.length; ) c[b++].update();
      }
      this.Sl != null &&
        this.Sl.gg() &&
        (this.Sl.wa(this.Ho / 255),
        this.uW
          ? this.Ho < 250
            ? (this.Ho += this.Zqa)
            : ((this.uW = !1), this.Ho > 250 && (this.Ho = 250))
          : this.Ho > 0
            ? (this.Ho -= this.Zqa)
            : ((this.uW = !0), this.Ho < 0 && (this.Ho = 0)));
    }
    cnb() {
      X.clear(this.IG);
      this.ss = this.BB.length = 0;
      this.n5(new H(0, 0, 0, 1));
      this.XT(!1);
      this.Sl != null && this.Sl.R(this.pW);
    }
    Lsb(a) {
      this.Q$ = a;
      this.Cta = this.Q$ * this.Q$;
    }
    asb(a) {
      this.Y8 = a;
      this.fra = this.Y8 * this.Y8;
    }
    Xsb(a) {
      this.gua = a;
    }
    Orb(a) {
      this.Ko = a;
      this.hta = this.Ko * this.Ko;
    }
    q5(a) {
      this.pW != a &&
        ((this.pW = a),
        this.Sl != null && this.Sl.R(a),
        (this.Ho = 0),
        (this.uW = !0));
    }
    G8a(a) {
      return a.x * a.x + a.y * a.y;
    }
    xia(a) {
      if (!this.Mpa) {
        var b = N.mn(a);
        b = this.node.$n(b);
        var c = this.G8a(b),
          d = this.hta * Math.pow(ze.yua, 2);
        X.remove(this.IG, a);
        J.remove(this.BB, a);
        c <= d &&
          ((this.Mpa = !0),
          this.BB.push(a),
          c <= this.fra
            ? (this.IG.set(a, b), (this.ss = 0), this.n5(new H(0, 0, 0, 1)))
            : ((this.ss = this.UBa(b)), this.n5(b)),
          this.hX.R(!1),
          this.KH.R(!0),
          this.Sl != null && this.Sl.R(!1),
          this.XT(!0),
          this.Dia.$(new Se(this.ss)));
      }
    }
    lhb(a) {
      if (this.BB.includes(a)) {
        var b = N.mn(a);
        b = this.node.$n(b);
        X.Xa(this.IG, a) && ((a = this.IG.get(a)), (b.x -= a.x), (b.y -= a.y));
        this.XT(!0);
        this.n5(b);
        a = this.UBa(b);
        this.ss != a && this.H3.$(new Se(this.ss));
        this.ss = a;
        this.Eia.$(new Se(this.ss));
      }
    }
    yia(a) {
      this.BB.includes(a) &&
        ((this.Mpa = !1),
        J.remove(this.BB, a),
        X.remove(this.IG, a),
        this.BB.length <= 0 && this.XT(!1),
        this.Sl != null && this.Sl.R(this.pW),
        this.H3.$(new Se(this.ss)),
        (this.ss = 0));
    }
    n5(a) {
      Nz.Z_a(a, this.gua);
      this.KX.C(a.x);
      this.KX.D(a.y);
    }
    UBa(a) {
      let b = 0;
      var c = a.x,
        d = a.y * -1,
        e = c * this.eqa + d * this.Uta;
      c = d * this.eqa - c * this.Uta;
      if (a.x * a.x + a.y * a.y < this.Cta) return 0;
      let f = e >= 0,
        g = c >= 0;
      d = a = 0;
      f && g
        ? ((b = 1), (a = Math.abs(e)), (d = Math.abs(c)))
        : f && !g
          ? ((b = 2), (a = Math.abs(c)), (d = Math.abs(e)))
          : f || g
            ? !f && g && ((b = 4), (a = Math.abs(c)), (d = Math.abs(e)))
            : ((b = 3), (a = Math.abs(e)), (d = Math.abs(c)));
      e = !1;
      this.sqa != 90 ? d <= a * this.WVa && (e = !0) : (e = !0);
      switch (b) {
        case 1:
          return e ? 2 : 1;
        case 2:
          return e ? 4 : 3;
        case 3:
          return e ? 6 : 5;
        case 4:
          return e ? 8 : 7;
        default:
          return 0;
      }
    }
    XT(a) {
      this.Jra = a;
      this.gX.R(!a);
      this.KX.R(a);
      this.hX.R(!a);
      this.KH.R(a);
    }
    wsb() {
      let a = this.gO / 2 + this.C8 + this.gO,
        b = (this.A$.length = 0);
      for (; b < 8; ) {
        let c = b++,
          d;
        d = c == 0 ? a : this.A$[c - 1].second;
        this.A$.push(new Ca(d, c % 2 == 0 ? d + this.C8 : d + this.gO));
      }
    }
    static htb(a) {
      ze.yua = a < 0.9 ? 0.9 : a > 5 ? 5 : a;
    }
  }
  ze.g = "BF";
  Object.assign(ze.prototype, { j: ze });
  class zl extends Ef {
    constructor(a, b) {
      super(a, 0);
      this.keys = b;
    }
    cj() {
      let a = 0,
        b = this.keys.length;
      for (; a < b; ) if (!L.J.Pfa().Xe(this.keys[a++])) return !1;
      return !0;
    }
    Eb() {
      let a = 0,
        b = this.keys.length;
      for (; a < b; ) if (!L.J.Pfa().Eb(this.keys[a++])) return !1;
      return !0;
    }
    yh() {
      let a = 0,
        b = this.keys.length;
      for (; a < b; ) if (L.J.Pfa().yh(this.keys[a++])) return !0;
      return !1;
    }
    Qfa() {
      return 2;
    }
  }
  zl.g = "C0";
  zl.u = Ef;
  Object.assign(zl.prototype, { j: zl });
  class Al extends Ef {
    constructor(a, b, c) {
      super(a, b);
      this.keys = c;
    }
    cj() {
      let a = 0,
        b = this.keys.length;
      for (; a < b; ) if (!L.J.Uj().Xe(this.keys[a++])) return !1;
      return !0;
    }
    Eb() {
      let a = 0,
        b = this.keys.length;
      for (; a < b; ) if (!L.J.Uj().Eb(this.keys[a++])) return !1;
      return !0;
    }
    yh() {
      let a = 0,
        b = this.keys.length;
      for (; a < b; ) if (L.J.Uj().yh(this.keys[a++])) return !0;
      return !1;
    }
    Qfa() {
      return 1;
    }
  }
  Al.g = "C1";
  Al.u = Ef;
  Object.assign(Al.prototype, { j: Al });
  class Se extends Ef {
    constructor(a, b) {
      b == null && (b = 0);
      super(a, b);
    }
    cj() {
      return !1;
    }
    Eb() {
      return !1;
    }
    yh() {
      return !1;
    }
    Qfa() {
      return 0;
    }
  }
  Se.g = "C2";
  Se.u = Ef;
  Object.assign(Se.prototype, { j: Se });
  class Cf {
    constructor(a) {
      this.name = a != null ? a : v.Xca;
      this.height = this.width = this.TU = this.gAa = this.jt = 0;
      this.VFa = this.Gt = this.kn = null;
      this.hja = new H(0, 0, 0, 1);
      this.I_ = new H(0, 0, 0, 1);
      this.W2 = 0;
    }
    init() {
      this.VFa = this.name;
      var a = Rb.parse(G.nn(G.uf(Cf.L7a(this.VFa)))),
        b = u.I(a.attributes.get("Pages"), 1),
        c = E.get(G.uf("locations/" + this.name + "/" + this.name + ".png")),
        d = 2;
      for (b += 1; d < b; )
        c.wXa(
          E.get(
            G.uf(
              "locations/" + this.name + "/" + this.name + "-" + d++ + ".png",
            ),
          ),
        );
      xd.pAa = u.H(a.attributes.get("FrictionForce"), xd.Iya);
      this.TU = u.H(a.attributes.get("Wall"));
      this.jt = u.H(a.attributes.get("Floor"));
      this.gAa = u.H(a.attributes.get("PositionY"));
      this.W2 = u.I(a.attributes.get("Color"));
      this.width = u.H(a.attributes.get("Width"));
      this.height = u.H(a.attributes.get("Height"));
      this.Gt = m.l();
      c = 0;
      a = a.children;
      for (d = 0; d < a.length; ) (this.Vjb(a[d++], c), (c += -3));
      a = 0;
      for (c = this.Gt; a < c.length; ) c[a++].ia();
    }
    B() {
      let a = 0,
        b = this.Gt;
      for (; a < b.length; ) b[a++].B();
      this.kn.B();
      this.kn = this.Gt = null;
    }
    V9a() {
      var a = this.hja;
      let b = this.I_;
      a = new H(a.x + b.x, a.y + b.y, a.z + b.z, 1);
      a.x *= 0.5;
      a.y *= 0.5;
      a.z *= 0.5;
      return a;
    }
    DCa() {
      return new H(this.width / 2, this.height / 2, 0, 1);
    }
    Vjb(a, b) {
      var c = u.I(a.attributes.get("Scaling"));
      b = new Ri(b);
      let d = "locations/" + this.name + "/" + this.name + ".png";
      b.kj = c > 0;
      b.type = u.I(a.attributes.get("Type"));
      b.fp = u.H(a.attributes.get("Factor"));
      c = a.attributes.get("Atlas");
      b.re = c != null ? c : null;
      a = a.children;
      for (c = 0; c < a.length; ) {
        var e = a[c++],
          f = e.name;
        if (f == "ModelsViewer") {
          f = this.hja;
          var g = u.H(e.attributes.get("PlayerPositionX"));
          let h = u.H(e.attributes.get("PlayerPositionY"));
          f.x = g;
          f.y = h;
          f.z = 0;
          f = this.I_;
          g = u.H(e.attributes.get("EnemyPositionX"));
          e = u.H(e.attributes.get("EnemyPositionY"));
          f.x = g;
          f.y = e;
          f.z = 0;
        } else
          f == "ParticleEffect"
            ? this.eJa(e, b)
            : f == "NewParticleEffect"
              ? this.eJa(e, b)
              : f == "Image"
                ? this.Qjb(e, d, b)
                : f == "SimpleEffect" && this.iJa(e, d, b);
      }
      this.Gt.push(b);
      b.zEa() && (this.kn = b);
    }
    Qjb(a, b, c) {
      var d = a.attributes.get("ClassName"),
        e = d != null ? d : null;
      d = null;
      a.has("Color") && (d = Oa.dd(K.parseInt(a.attributes.get("Color"))));
      e == "pixel_1"
        ? ((b = u.H(a.attributes.get("Width"))),
          (e = u.H(a.attributes.get("Height"))),
          (b = R.Ed(
            (((d.w * 255) | 0) << 24) |
              (((d.x * 255) | 0) << 16) |
              (((d.y * 255) | 0) << 8) |
              (d.z * 255) |
              0,
            b | 0,
            e | 0,
          )),
          b.Un(0.5, 0.5))
        : ((b = R.aa(E.get(G.uf(b)), e)),
          d != null &&
            ((e = b.wf()), (e.x = d.x), (e.y = d.y), (e.z = d.z), (e.w = d.w)));
      Cf.k4a(a, b);
      c.eXa(b);
      a.has("Flip") && b.Mr(!0);
    }
    iJa(a, b, c) {
      let d = null;
      if (a.attributes.get("Path") != null) debugger;
      var e = a.attributes.get("Type");
      e = e != null ? e : null;
      if (e == "Picture") {
        var f = a.attributes.get("ClassName");
        d = new Bl(0, a);
        d.PLa(u.H(a.attributes.get("Pause")));
        var g = u.H(a.attributes.get("Width"));
        d.lla(b, f != null ? f : null, g, u.H(a.attributes.get("Height")));
      }
      if (e == "Sequention") {
        if (v.ldb) return null;
        d = new Bl(1, a);
        d.PLa(u.H(a.attributes.get("Pause")));
        e = a.attributes.get("ClassName");
        f = u.H(a.attributes.get("Speed"));
        g = u.H(a.attributes.get("Width"));
        let h = u.H(a.attributes.get("Height"));
        if (
          !d.Rqb(
            e != null ? e : null,
            b,
            f,
            g,
            h,
            u.I(a.attributes.get("FrameStart"), 1) - 1,
            u.I(a.attributes.get("FrameEnd"), 0) - 1,
            u.H(a.attributes.get("Offset")),
          )
        )
          return null;
      }
      d.setPosition(u.H(a.attributes.get("X")), u.H(a.attributes.get("Y")));
      this.xkb(a, d, b, c);
      a.has("Flip") && d.W.Mr(!0);
      d.W.K5();
      c.HWa(d);
      return d;
    }
    xkb(a, b, c, d) {
      a = a.children;
      let e = 0;
      for (; e < a.length; ) {
        var f = a[e++];
        switch (f.name) {
          case "OscillationX":
            b.hsb(u.H(f.attributes.get("Offset")));
            f = f.children;
            for (var g = 0; g < f.length; ) {
              var h = f[g++];
              b.tXa(
                u.H(h.attributes.get("Period")),
                u.H(h.attributes.get("Value")),
                u.H(h.attributes.get("Ease")),
              );
            }
            break;
          case "OscillationY":
            b.isb(u.H(f.attributes.get("Offset")));
            f = f.children;
            for (g = 0; g < f.length; )
              ((h = f[g++]),
                b.uXa(
                  u.H(h.attributes.get("Period")),
                  u.H(h.attributes.get("Value")),
                  u.H(h.attributes.get("Ease")),
                ));
            break;
          case "ReappearX":
            b.Csb(of(f));
            break;
          case "ReappearY":
            b.Dsb(of(f));
            break;
          case "Rotation":
            b.wtb(u.H(f.attributes.get("StartAngle")));
            b.vtb(u.H(f.attributes.get("Offset")));
            f = f.children;
            for (g = 0; g < f.length; )
              ((h = f[g++]),
                b.ZXa(
                  u.H(h.attributes.get("Period")),
                  u.H(h.attributes.get("Value")),
                  u.H(h.attributes.get("Ease")),
                ));
            break;
          case "SimpleEffect":
            b.od(this.iJa(f, c, d));
            break;
          case "Speed":
            b.Vsb(u.H(f.attributes.get("X")), u.H(f.attributes.get("Y")));
            break;
          case "Transparency":
            for (
              b.Erb(u.H(f.attributes.get("Offset"))), f = f.children, g = 0;
              g < f.length;

            )
              ((h = f[g++]),
                b.bXa(
                  u.H(h.attributes.get("Period")),
                  u.H(h.attributes.get("Value")),
                  u.H(h.attributes.get("Ease")),
                ));
        }
      }
    }
    eJa(a, b) {
      if (!v.OEa) {
        var c = u.H(a.attributes.get("X")),
          d = u.H(a.attributes.get("Y"));
        b.xXa(new ih(a.xt(), c, d));
      }
    }
    static CAa(a) {
      switch (a.location) {
        case "arena":
          return [816, 817, 818, 819, 820];
        case "autumn":
          return [811, 812, 813, 814, 815];
        case "bamboo_grove":
          return [806, 807, 808, 809, 810];
        case "battlefield":
          return [801, 802, 803, 804, 805];
        case "burning_town":
          return [794, 795, 796, 797, 798, 799, 800];
        case "capsules":
          return [789, 790, 791, 792, 793];
        case "castle_and_bridge":
          return [782, 783, 784, 785, 786, 787, 788];
        case "cave":
          return [777, 778, 779, 780, 781];
        case "chess_yard":
          return [766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776];
        case "dark_room":
          return [761, 762, 763, 764, 765];
        case "eggs":
          return [752, 753, 754, 755, 756];
        case "emerald_forest":
          return [743, 744, 745, 746, 747, 748, 749, 750, 751];
        case "factory":
          return [738, 739, 740, 741, 742];
        case "flooded_village":
          return [733, 734, 735, 736, 737];
        case "flowers_field":
          return [726, 727, 728, 729, 730, 731, 732];
        case "flying_rocks":
          return [721, 722, 723, 724, 725];
        case "flying_rocks_small":
          return [716, 717, 718, 719, 720];
        case "fuji":
          return [711, 712, 713, 714, 715];
        case "graveyard_ships":
          return [706, 707, 708, 709, 710];
        case "heaven":
          return [701, 702, 703, 704, 705];
        case "ice_cave":
          return [696, 697, 698, 699, 700];
        case "lamps_on_water":
          return [687, 688, 689, 690, 691, 692, 693, 694, 695];
        case "magic_rocks":
          return [682, 683, 684, 685, 686];
        case "moon":
          return [677, 678, 679, 680, 681];
        case "mountain":
          return [668, 669, 670, 671, 672, 673, 674, 675, 676];
        case "neural_network":
          return [663, 664, 665, 666, 667];
        case "night_bridge":
          return [658, 659, 660, 661, 662];
        case "pink_lake":
          return [649, 650, 651, 652, 653, 654, 655, 656, 657];
        case "ruins_village":
          return [640, 641, 642, 643, 644, 645, 646, 647, 648];
        case "ruins_village_small":
          return [637, 638, 639];
        case "sakura":
          return [628, 629, 630, 631, 632, 633, 634, 635, 636];
        case "shadow_gate":
          return [621, 622, 623, 624, 625, 626, 627];
        case "ships":
          return [616, 617, 618, 619, 620];
        case "skyport":
          return [611, 612, 613, 614, 615];
        case "snowy_peak":
          return [606, 607, 608, 609, 610];
        case "spaceship":
          return [601, 602, 603, 604, 605];
        case "spaceship_thorny":
          return [596, 597, 598, 599, 600];
        case "statue":
          return [591, 592, 593, 594, 595];
        case "stone_dragon":
          return [586, 587, 588, 589, 590];
        case "stone_forest":
          return [581, 582, 583, 584, 585];
        case "stone_forest_thorny":
          return [576, 577, 578, 579, 580];
        case "swamp":
          return [569, 570, 571, 572, 573, 574, 575];
        case "village":
          return [564, 565, 566, 567, 568];
        case "volcano":
          return [559, 560, 561, 562, 563];
        case "waterfall":
          return [554, 555, 556, 557, 558];
        default:
          throw 20;
      }
    }
    static L7a(a) {
      return "locations/" + a + "/" + a + "_params.xml";
    }
    static k4a(a, b) {
      let c = u.H(a.attributes.get("X")),
        d = u.H(a.attributes.get("Y")),
        e = u.H(a.attributes.get("Rotation")),
        f = u.H(a.attributes.get("Width"));
      a = u.H(a.attributes.get("Height"));
      let g = b.ea.x,
        h = b.ea.y;
      b.C(c);
      b.D(d);
      b.Th(f / g);
      b.oj(a / h);
      b.Xg(e);
      b.jk(0.5, 0.5);
    }
  }
  Cf.g = "C3";
  Object.assign(Cf.prototype, { j: Cf });
  class Ri {
    constructor(a) {
      this.Hdb = a;
      this.go = new dd("LocationSelector");
      let b = this.go.node.Jb;
      b.translate.x = 0;
      b.translate.y = 0;
      b.translate.z = a;
      b.U = (b.U & -2) | 240;
      this.kj = !1;
      this.fp = this.type = 0;
      this.re = null;
      this.WH = 0;
      this.a8 = m.l();
      this.j$ = [];
    }
    B() {
      this.go.B();
      let a = 0,
        b = this.j$;
      for (; a < b.length; ) b[a++].B();
    }
    zEa() {
      return this.type == 2;
    }
    eXa(a) {
      this.go.node.appendChild(a.L);
      a.Ola(this.WH);
      this.WH += -0.01;
    }
    HWa(a) {
      this.go.node.appendChild(a.W.L);
      this.a8.push(a);
      a.W.Ola(this.WH);
      this.WH += -0.01;
    }
    xXa(a) {
      this.j$.push(a);
      this.go.node.appendChild(a.node);
      let b = 0;
      for (; b < 150; ) (++b, a.update(0.016666666666666666));
    }
    ia() {
      let a = 1 / v.qn();
      for (var b = 0, c = this.a8.length; b < c; ) this.a8[b++].ia(a);
      b = 0;
      for (c = this.j$; b < c.length; ) c[b++].update(0.016666666666666666 * a);
    }
    setScale(a) {
      let b = this.go.node.Jb;
      b.scale.x = a;
      b.scale.y = a;
      b.scale.z = 1;
      b.U = (b.U & -6) | 240;
    }
    rsb(a) {
      let b = this.go.node.Jb.translate,
        c = this.go.node.Jb;
      c.translate.x = a;
      c.translate.y = b.y;
      c.translate.z = b.z;
      c.U = (c.U & -2) | 240;
    }
    ssb(a) {
      let b = this.go.node.Jb.translate,
        c = this.go.node.Jb;
      c.translate.x = b.x;
      c.translate.y = a;
      c.translate.z = b.z;
      c.U = (c.U & -2) | 240;
    }
  }
  Ri.g = "C4";
  Object.assign(Ri.prototype, { j: Ri });
  class ju {
    constructor() {
      this.UV = 0;
      this.F1 = !1;
      this.Wi = this.xf = this.u2 = 0;
      this.Nt = new V();
    }
    Syb() {
      this.F1 &&
        (++this.UV,
        this.UV > v.ECa() &&
          ((this.u2 = this.Wi),
          this.reset(),
          this.u2 >= v.fw() && this.Nt.$(this.Wi)));
    }
    Sgb() {
      this.F1 = !0;
      this.UV = 0;
      ++this.xf;
      this.xf >= v.fw() && ((this.u2 = this.Wi = this.xf), this.Nt.$(this.Wi));
    }
    reset() {
      this.F1 = !1;
      this.Wi = this.xf = this.UV = 0;
    }
  }
  ju.g = "C5";
  Object.assign(ju.prototype, { j: ju });
  class wd {
    constructor(a) {
      this.Aga = !1;
      this.XW = new Map();
      this.color = new H(0, 0, 0, 0);
      this.isVisible = !0;
      this.Qy = 0;
      this.Tz = 1;
      this.PG = new H(1, 1, 1, 1);
      this.rU = 0;
      this.p_ = new Cl();
      this.MM = !1;
      this.sy = this.uaa = this.dh = this.jO = 0;
      this.Po = m.l();
      this.me = m.l();
      this.EV = 0;
      this.wo = 1;
      this.$x = new ju();
      this.Sra = 0;
      this.Hda = !1;
      this.round = 0;
      this.mUa = new Map();
      this.Wta = this.Xoa = 0;
      this.Kpa = !0;
      this.rta = 1;
      this.CN = this.Bs = !1;
      this.yr = 0;
      this.zG = -1;
      this.un = this.vc = this.wR = !1;
      this.by = -1;
      this.$G =
        this.lb =
        this.OH =
        this.Nd =
        this.Ku =
        this.da =
        this.sf =
          null;
      this.dua = new it();
      this.Nl = new Dl();
      this.pa = null;
      this.Fc = new Ae();
      this.Ba = null;
      this.Hf = m.l();
      this.vd = m.l();
      this.xza = this.GY = 0;
      this.$C = -1;
      this.HI = 0;
      this.GP = null;
      this.Vqa = this.xI = this.iz = 0;
      this.jm = this.tw = this.uR = !1;
      this.Ke = 0;
      this.yN = this.$i = !1;
      this.KB = m.l();
      this.zP = 0;
      this.cacheName = this.jb = null;
      this.index = 0;
      this.Ja = new ku();
      this.Z9 = new lu();
      this.Pl = new mu();
      this.$u = new nu();
      this.Os = new ou();
      this.vs = new pu();
      this.Cb = new qu();
      this.Vb = new Si();
      this.MB = new ru();
      this.Xu = new su();
      this.jS = new V();
      this.lS = new V();
      this.GS = new V();
      this.ME = new V();
      this.AS = new V();
      this.wr = new V();
      this.Nt = new V();
      this.AHa = new V();
      this.Fp = new V();
      this.tS = new V();
      this.sS = new V();
      this.Ut = new V();
      this.Tt = new V();
      this.St = new V();
      this.Jw = new V();
      this.yK = new V();
      this.ur = new V();
      this.qK = new V();
      this.ng = new V();
      this.Sf = new V();
      this.zA = new V();
      this.AA = new V();
      this.cache = new tu();
      this.go = new dd("Model");
      var b = new dd("Mesh");
      this.TW = b.MWa();
      this.go.od(b);
      b = new dd("ModelCapsules");
      this.Tba = this.go.NWa();
      this.go.od(b);
      this.parameters = a;
      this.En = new uu(this);
      this.$x.Nt.addListener(w(this, this.HHa));
      v.Cia.addListener(w(this, this.QT));
    }
    ztb(a) {
      if ((this.yN = a)) (this.Nl.reset(), this.Xka(0));
    }
    ab() {
      return this.Ba;
    }
    Kd(a) {
      this.Ba = a;
      return (this.Fc.fK = a);
    }
    Tj() {
      return this.da == null ? null : this.da.Ua;
    }
    X0() {
      return this.da == null ? m.l() : this.da.yj;
    }
    iub() {
      this.vc = !1;
    }
    zla(a) {
      this.Bs = a;
      let b = 0,
        c = this.vd.length;
      for (; b < c; ) this.vd[b++].zla(a);
    }
    Kla(a) {
      this.rta = a;
      let b = 0,
        c = this.vd.length;
      for (; b < c; ) this.vd[b++].Kla(a);
    }
    Nfa() {
      return this.lb != null ? this.lb.Nfa() : this.Kpa;
    }
    G5(a) {
      this.lb != null ? this.lb.G5(a) : (this.Kpa = a);
    }
    ND() {
      return this.lb != null ? this.lb.ND() : this.Wta;
    }
    bNa(a) {
      this.lb != null ? this.lb.bNa(a) : (this.Wta = a);
    }
    zCa() {
      return this.lb != null ? this.lb.zCa() : this.Xoa;
    }
    Atb(a) {
      this.lb == null && (this.Xoa = a);
    }
    Ifa() {
      return this.lb != null ? this.lb.Ifa() : this.mUa;
    }
    ZT(a) {
      this.wo = a;
      let b = 0,
        c = this.vd.length;
      for (; b < c; ) this.vd[b++].ZT(a);
    }
    J5(a) {
      this.EV = a;
      let b = 0,
        c = this.vd;
      for (; b < c.length; ) c[b++].J5(a);
    }
    EL(a) {
      this.sy = a > 1 ? 1 : a < 0 ? 0 : a;
    }
    FL(a) {
      this.dh = a;
    }
    Vs(a, b) {
      b == null && (b = !1);
      this.lb == null || b
        ? (this.Tba.Vs(a), this.TW.La(a), (this.color = Oa.dd(a)))
        : ((a = this.lb.color),
          this.Tba.Vs(
            (((a.z * 255) | 0) & 255) |
              ((((a.y * 255) | 0) & 255) << 8) |
              ((((a.x * 255) | 0) & 255) << 16),
          ),
          (a = this.lb.color),
          this.TW.La(
            (((a.z * 255) | 0) & 255) |
              ((((a.y * 255) | 0) & 255) << 8) |
              ((((a.x * 255) | 0) & 255) << 16),
          ));
    }
    SP() {
      this.cache.b3a();
      this.$x != null && this.$x.Nt.removeListener(w(this, this.HHa));
      this.go != null && this.go.B();
      this.pa.clear();
      this.clear();
      this.Fc != null && (this.Fc.reset(), (this.Fc = null));
      v.Cia.removeListener(w(this, this.QT));
    }
    Pda() {
      var a = this.da.NY;
      let b = this.pa.Ql.tI,
        c = 0;
      for (; c < a.length; ) a[c++].JKa();
      for (a = 0; a < b.length; ) b[a++].JKa();
    }
    init() {
      this.vc = this.un = this.tw = !1;
      this.$rb(this.parameters.sx);
      this.lF();
      this.wga();
      this.yga();
      this.Xu.LT(this.me);
      this.MB.C5(this.Po);
      this.H6();
      this.da.init();
      this.Vb.model = this;
      this.uL(this.parameters.position);
    }
    pmb() {
      this.vc = this.un = this.tw = !1;
      this.clear(!1);
      this.lF();
      this.Nd = new El(this.pa);
      this.OH = new Fl(this.pa);
      this.da = new Te(this.pa);
      this.Ku = new Gl(this.pa);
      this.sf = new de(
        this.da,
        this.parameters.Hd != null ? this.parameters.Hd.Yb : "",
        this.parameters,
      );
      this.sf.model = this;
      this.Vb = new Si();
      this.Nl.addEventListener(0, w(this, this.QHa));
      this.Nl.addEventListener(1, w(this, this.RHa));
      this.da.addEventListener("EStartAnimationEvent", w(this, this.G3));
      this.da.addEventListener("EStopAnimationEvent", w(this, this.tIa));
      this.da.addEventListener("EAnimationInterruptedEvent", w(this, this.pK));
      this.da.addEventListener("EStartIntervalEvent", w(this, this.rIa));
      this.da.addEventListener("EStopIntervalEvent", w(this, this.uIa));
      this.da.addEventListener("EActionStart", w(this, this.BHa));
      this.me.length = 0;
      this.wga();
      this.yga();
      this.Xu.LT(this.me);
      this.MB.C5(this.Po);
      this.H6();
      this.da.init();
      this.Vb.model = this;
      this.uL(this.parameters.position);
    }
    U4() {
      this.reset();
      this.uL(this.parameters.position);
    }
    reset() {
      this.Rnb();
      this.cp(this.$G, !1);
      this.lF();
      this.$G = null;
      this.by = -1;
      this.wR = this.$i = !1;
      this.iz = this.rU = this.xI = this.yr = 0;
      this.GP = "";
      this.HI = 0;
      this.dua.reset();
      this.pa.reset();
      this.Fc.reset();
      this.da != null && this.da.reset();
      X.clear(this.XW);
    }
    ia() {
      this.lob()
        ? (this.Pl.clear(), (this.MM = !1))
        : (this.hob(), this.Xnb() && (this.MM = !1));
      this.j_a();
      this.kob();
      this.gAb();
      this.parameters.WD &&
        (this.da.ia(),
        this.parameters.Bu && this.Nl.ia(),
        !this.da.Qe && this.Nd.qk && this.da.iob());
      this.Fx();
      this.Nd.ia();
      this.pa.F6();
      this.pa.aka();
      this.dua.Ea();
      ca.Ka() != null && ca.Ka().ju == 2 && this.cPa();
      this.Vb.data = this.uaa++;
      this.ur.$(this.Vb);
      this.Zmb();
    }
    IKa(a) {
      return !this.dDa() ||
        this.parameters.mh ||
        this.da.Ua == null ||
        this.Nd.qk
        ? !1
        : this.$Za(this.jb, a);
    }
    Wnb() {
      if ((this.parameters.Gj || P.mP) && this.Ke == 2) {
        let a = this.parameters.Gc;
        a != null && (a.type == 1 ? this.wJa() : a.type == 2 && this.tlb());
      }
    }
    tlb() {
      var a = this.jb;
      let b = null;
      this.Fc != null && (b = this.sf.ia(a, this.Vqa));
      b != null
        ? ((a = b.oJ()),
          a != null &&
            ((a = a.zn), (this.da.Fva = b), (a.a2 = !0), this.jlb(a)))
        : this.Nl.reset();
    }
    wJa(a) {
      a == null && (a = !0);
      if (a) {
        if (this.zG > 0) {
          this.zG--;
          return;
        }
        this.zG == 0 && ((this.CN = !0), (this.zG = -1));
        if (!this.CN) return;
        this.CN = !1;
      }
      this.Vb.data = null;
      ca.Ka() != null && ca.Ka().qhb(this.Vb);
    }
    $Za(a, b) {
      b == null && (b = !1);
      let c = !1,
        d = this.da.DD(4);
      d != null &&
        (a == null && (a = this.jb),
        (a.da.DD(6) == null ||
          (d.uga && d.tga.length == 0) ||
          (d.uga && a.da.k_a(d.tga))) &&
          this.Ku.ia(a.pa, this.da.NY, d) &&
          (b || this.fxb(a, d), (c = !0)));
      return c;
    }
    NJa(a) {
      (a == 12 && this.dh == 0 && !v.jba) ||
        (a == 11 && this.Ja.XR && this.Ja.pA < this.Ja.YR) ||
        (a == 10 && this.Ja.t2 && this.Ja.hA < this.Ja.IR) ||
        (a == 9 && this.Ja.w4 && this.Ja.NA < this.Ja.gT) ||
        (a == 14 && this.Ja.nu < this.Ja.vU) ||
        !this.yN ||
        this.Nl.nhb(a);
    }
    bnb(a) {
      this.yN && this.Nl.shb(a);
    }
    uL(a) {
      this.pa.uL(a);
      this.Nd.qE();
      this.pa.F6();
      this.pa.aka();
      this.pa.RKa();
    }
    bvb(a) {
      var b = !0;
      b == null && (b = !1);
      this.pa.evb(a);
      this.Nd.qE();
      this.pa.F6();
      this.pa.aka();
      this.pa.RKa();
      b && (this.da.Rla(a.x, a.y, a.z), this.da.avb(a));
    }
    Fmb() {
      this.me.length = 0;
      sa.Vza(this, !0);
      this.Xu.MKa();
      this.Xu.LT(this.me);
      this.H6();
      this.$i = !0;
      this.parameters.un = !0;
      ca.Ka() != null && ca.Ka().uhb(this);
    }
    dDa() {
      return this.KB.length > 0;
    }
    rJ() {
      return !1;
    }
    Rnb() {
      this.vd.length = 0;
    }
    jla() {
      this.jb = this.KB.length > 0 ? this.KB[0] : null;
      this.Vb != null && (this.Vb.Pd = this.jb);
      this.sf != null && this.sf.x4a(this.jb);
    }
    yKa(a) {
      J.remove(this.KB, a);
    }
    jd() {
      return this.da != null ? this.da.jd() : 1;
    }
    $rb(a) {
      this.clear();
      this.pa = new Hl();
      this.pa.model = this;
      Yc.load(this.pa, a);
      this.Nd = new El(this.pa);
      this.OH = new Fl(this.pa);
      this.da = new Te(this.pa);
      this.Ku = new Gl(this.pa);
      this.sf = new de(
        this.da,
        this.parameters.Hd != null ? this.parameters.Hd.Yb : "",
        this.parameters,
      );
      this.sf.model = this;
      this.Vb = new Si();
      this.Nl.addEventListener(0, w(this, this.QHa));
      this.Nl.addEventListener(1, w(this, this.RHa));
      this.da.addEventListener("EStartAnimationEvent", w(this, this.G3));
      this.da.addEventListener("EStopAnimationEvent", w(this, this.tIa));
      this.da.addEventListener("EAnimationInterruptedEvent", w(this, this.pK));
      this.da.addEventListener("EStartIntervalEvent", w(this, this.rIa));
      this.da.addEventListener("EStopIntervalEvent", w(this, this.uIa));
      this.da.addEventListener("EActionStart", w(this, this.BHa));
    }
    FMa(a, b, c, d) {
      this.Os.left = a;
      this.Os.right = b;
      this.Nd.EMa(this.Os.left, this.Os.right);
      this.da.OLa(a, b, c, d);
    }
    GMa(a, b) {
      this.da.OLa(this.da.Du, this.da.Eu, a, b);
    }
    Xaa(a) {
      this.da.O3 = this.lb != null ? this.lb.da : null;
      if (a != null) {
        this.KB.push(a);
        for (var b = 0, c = a.vd; b < c.length; ) this.KB.push(c[b++]);
        this.da.jQ = a.da;
        this.jla();
      }
    }
    NKa() {
      this.FL(0);
      this.EL(v.mA.t7a(this));
      this.PA();
    }
    Vwa(a) {
      this.dh == 0 && this.EL(this.sy + a);
    }
    RZa(a) {
      this.sf.QZa(a);
    }
    SZa(a) {
      this.sf.Wwa(a);
    }
    A5(a) {
      this.TT(P.wfa(a));
    }
    TT(a) {
      a != null && ((this.parameters.Gc = a), this.SZa(a));
    }
    oZ(a) {
      this.FL(this.dh + a);
    }
    PA() {
      var a = this.lb;
      a == null
        ? ((a = this.sy),
          1 <= a && (this.oZ(1), (a = 0), this.EL(0)),
          1 < this.dh && this.FL(1),
          (a = new yd(12, 0 == this.dh ? a : 1)),
          (a.Jt = this.gw()),
          (a.frames = 50),
          this.Fp.$(a))
        : a.PA();
    }
    S0() {
      return this.parameters.lg != null && this.parameters.lg.Yb == "NoRanged"
        ? 1
        : -1;
    }
    TS(a, b, c, d) {
      d == null && (d = -1);
      c == null && (c = !1);
      b == null && (b = 0);
      return this.parameters.WD && !this.Nd.qk
        ? (b == 0 && (b = this.jd()), this.da.nlb(a, b, !a.kHa, c, d))
        : !1;
    }
    jlb(a) {
      this.Nl.reset();
      this.Nl.lub(a);
      this.Nl.Fwa();
    }
    uJa(a, b, c, d) {
      d == null && (d = -1);
      c == null && (c = !1);
      b == null && (b = 0);
      this.Pl.animation = a;
      this.Pl.sign = b;
      this.Pl.bE = c;
      this.Pl.uD = d;
      c = a.$fa();
      d = c.x;
      (d > 0 ? d < 1e-4 : -d < 1e-4)
        ? ((d = c.y), (d = d > 0 ? d < 1e-4 : -d < 1e-4))
        : (d = !1);
      d ? ((c = c.z), (c = c > 0 ? c < 1e-4 : -c < 1e-4)) : (c = !1);
      c ||
        ((a = a.$fa()),
        (a = new H(a.x, a.y, a.z, 1)),
        (a.x *= b),
        this.da.ofb(a));
    }
    plb(a) {
      debugger;
      this.Z9.animation = a;
    }
    y0a() {
      this.vs.animation = null;
      this.vs.names = null;
      this.vs.iha = !1;
    }
    ZCa() {
      return this.Pl.animation != null;
    }
    F$a() {
      return this.vs.animation != null;
    }
    yJa(a, b) {
      this.vs.animation = a;
      this.vs.names = a.Al;
      this.vs.iha = b;
    }
    Xnb() {
      return this.ZCa()
        ? (this.Nd.qk && this.Nd.stop(),
          this.TS(this.Pl.animation, this.Pl.sign, this.Pl.bE, this.Pl.uD) &&
            this.Pl.clear(),
          !0)
        : !1;
    }
    hob() {
      this.Z9.animation != null && this.Z9.clear();
    }
    lob() {
      return this.F$a()
        ? (this.hxb(this.vs.names, this.vs.iha),
          this.da.reset(),
          this.da.Btb(this.vs.animation),
          this.y0a(),
          !0)
        : !1;
    }
    hAa() {
      let a = this.Tj(),
        b = this.jb;
      b != null && b.Nf().En.C_(!0, a);
      this.Nf().En.C_(!1, a);
    }
    QHa() {
      this.Vb.data = null;
      this.sS.$(this.Vb);
    }
    RHa() {
      this.Vb.data = null;
      this.tS.$(this.Vb);
    }
    G3(a) {
      this.Ku.Dob();
      this.Vb.data = a;
      this.Sf.$(this.Vb);
      a = this.jb;
      a == null || this.rJ() || (a.Iwb(this.da.Ua), a.Xka(0));
    }
    pK(a) {
      this.Vb.data = a;
      this.qK.$(this.Vb);
    }
    tIa(a) {
      this.Vb.data = a;
      a.Ida && (this.uR = a.Ida);
      this.hAa();
      this.ng.$(this.Vb);
    }
    rIa(a) {
      this.Vb.data = a;
      this.AA.$(this.Vb);
    }
    uIa(a) {
      this.Vb.data = a;
      this.zA.$(this.Vb);
      if (v.D4.Jcb(a.name)) {
        var b = this.Tj();
        b != null && (this.zG = v.D4.H6a(b.Al));
      }
      a.name == "Uninterrupt" &&
        ((a = this.da.Ua),
        (b = this.jb),
        b != null && b.Nf().En.yY(!0, a),
        this.Nf().En.yY(!1, a));
    }
    fxb(a, b) {
      let c = this.Ku.strike,
        d = new H(b.pw, b.lR, b.mR, 1);
      d.x *= this.da.jd();
      d.x *= this.PG.x;
      d.y *= this.PG.y;
      d.z *= this.PG.z;
      this.zP = b.zP;
      a.strike(c.QD, c.Uy, c.x$, c.y$, this, d);
    }
    strike(a, b, c, d, e, f) {
      ++this.rU;
      let g = e.da.DD(4);
      this.Vb.data = g;
      this.Vb.YC = g.W8a(e.U0());
      g.RDa && (g.sga.length == 0 ? this.nT(5) : this.Sja(g.sga));
      this.parameters.jE = !1;
      ca.Ka() != null && (ca.Ka().Dya = this.Cb);
      this.Cb.gR = 0;
      this.Cb.aj = 0;
      this.Cb.RJa.length = 0;
      this.Cb.model = this;
      this.Cb.Pd = e;
      this.Cb.target = this.parameters.qb ? 0 : 1;
      this.Cb.QD = a;
      let h = this.Cb.ig;
      h.x = f.x;
      h.y = f.y;
      h.z = f.z;
      this.Cb.Uy = b;
      this.Cb.gI = e.da.Ua;
      this.Cb.ck = c;
      this.Cb.CJa = d;
      this.Cb.bEa = g.Xb;
      this.Cb.Uva = g;
      this.Cb.block = this.icb();
      this.Cb.QP = wd.ZAa(g, this.Cb.block, a);
      this.Cb.block || (e.YCa() || this.Sra++, e.nca());
      this.Cb.K0a = this.Sra;
      ca.Ka() != null && ca.Ka().$gb(this.Vb);
      b = !this.Cb.block && !g.j3 && v.gdb(this.W9a());
      this.Cb.se = b;
      ca.Ka() != null && ca.Ka().Zgb(this.Vb);
      this.Cb.gR = this.qCa(g, this.Cb.block, this.Cb.se, a, e.da.Ua.XX);
      this.Cb.aj = this.Cb.gR;
      b = "";
      c = g.KC;
      c != null && c != "" ? (b = g.KC) : a != null && (b = a.KC);
      this.Cb.$q = b == "Head";
      this.Cb.Ub = this.m9a(e);
      this.Cb.$i = this.Cb.Ub;
      this.Cb.hp = this.xI == 0;
      this.MM = !0;
      this.xI++;
      g.cM(this.parameters.qb ? 2 : 1);
      this.Vb.Pd = e;
      this.Cb.block || (this.parameters.yJ = !1);
      this.Vb.data = g;
      ca.Ka() != null && ca.Ka().Ygb(this.Vb);
      this.Vb.Pd = this.jb;
      this.cXa(e, this.Cb.gI, this.Cb.aj);
    }
    gxb(a, b) {
      this.da.bda();
      this.Nd.start(a);
      ca.Ka() != null && ca.Ka().ghb(this.Vb);
      this.Pva(b);
    }
    hxb(a, b) {
      let c = null;
      b && (c = this.Cb);
      this.gxb(a, c);
    }
    Pva(a) {
      a != null &&
        (this.OH.strike(this.Cb.QD, this.Cb.CJa, this.Cb.ig), this.Nd.qE());
    }
    H6() {
      let a = 0,
        b = this.me;
      for (; a < b.length; ) {
        let d = b[a];
        ++a;
        if (d.va.align.$E == -1 && d.va.align.aF == "EObjectNodes") {
          var c = this.GBa(d.va.align.dja);
          d.va.align.$E = c.D0(d.va.align.HK);
          d.va.align.cja = c.SQ(d.va.align.$E);
        }
        (d.va.align.ZS != -1 && d.va.align.l4 != 2) ||
          d.va.align.OK != "EObjectNodes" ||
          ((c = this.GBa(d.va.align.l4)),
          c != null
            ? ((d.va.align.ZS = c.D0(d.va.align.nja)),
              (d.va.align.mja = c.SQ(d.va.align.ZS)))
            : (d.va.align.ZS = 0));
      }
    }
    Vea(a) {
      return this.Nl.Vea(a);
    }
    cDa() {
      return this.uR ? !0 : !this.parameters.WD;
    }
    WAa(a, b, c) {
      return a
        ? ((a = new ja(0)),
          this.parameters.attributes.get(b, a),
          Math.pow(2, a.G * c))
        : 1;
    }
    uea(a) {
      let b = v.bZ;
      return this.WAa(a, b.Ok, b.Bc);
    }
    Aea(a) {
      let b = v.OZ;
      return this.WAa(a, b.Ok, b.Bc);
    }
    qCa(a, b, c, d, e) {
      let f = this.jb;
      for (var g = a.ZZ, h = 0; h < g.length; )
        if (g[h++].first == "RaidChargeDamage") debugger;
      d = wd.ZAa(a, b, d);
      h = v.PCa();
      let k = new ja(0);
      f.parameters.attributes.get(v.OCa(), k);
      k.G = Math.min(k.G, v.$9a() | 0) | 0;
      h = Math.pow(2, h * k.G);
      b = this.uea(b);
      c = f.Aea(c);
      g = v.sea(f.parameters.qb, f.parameters, this.parameters, g, d);
      g = (a.Xb + f.Qy) * g * b * c * h * f.parameters.a_;
      g = Math.max(g, 0);
      g = f.parameters.w2a(e, g);
      g *= a.Mea(f.parameters.qb ? 1 : 2).fp;
      g *= f.rta;
      return (g *= f.wo);
    }
    JYa() {
      return this.da.DD(5);
    }
    icb() {
      return this.JYa() != null;
    }
    BI(a) {
      this.lb = a;
      this.jb = a != null ? a.jb : null;
      this.sf = this.Ku = this.da = this.Nd = this.OH = null;
      this.iz = 0;
      this.GP = "";
      this.HI = 0;
      this.by = -1;
      this.$i = !1;
      this.xI = this.yr = 0;
      this.$G = null;
      this.yN = !1;
      this.jm = !0;
      this.uR = !1;
      this.Pl.clear();
      this.uaa = 0;
      this.init();
      a != null && (this.Ke = a.Ke);
      this.CN = !1;
    }
    mmb() {
      this.jb = this.lb != null ? this.lb.jb : null;
      this.sf = this.Ku = this.da = this.Nd = this.OH = null;
      this.iz = 0;
      this.GP = "";
      this.HI = 0;
      this.by = -1;
      this.$i = !1;
      this.xI = this.yr = 0;
      this.$G = null;
      this.yN = !1;
      this.jm = !0;
      this.uR = !1;
      this.Pl.clear();
      this.uaa = 0;
      this.pmb();
      this.lb != null && (this.Ke = this.lb.Ke);
      this.CN = !1;
    }
    Nf() {
      return this.lb != null ? this.lb.Nf() : this;
    }
    ff(a) {
      switch (a) {
        case 1:
          return this;
        case 2:
          return this.jb;
        case 3:
          return this.lb;
        case 4:
          return this.vd.length != 0 ? this.vd[this.vd.length - 1] : null;
        case 6:
          return this.lb != null
            ? this.lb.ff(a)
            : this.jb == null || this.jb.vd == null || this.jb.vd.length < 1
              ? null
              : this.jb.vd.length == 1
                ? this.jb.vd[0]
                : this.d6a(this, this.jb.vd);
        default:
          throw 21;
      }
    }
    aw(a) {
      let b = 0,
        c = this.vd;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.ab() == a) return d;
      }
      return this.vd.length > 0 ? this.vd[0] : null;
    }
    d6a(a, b) {
      let c = 3.4028234663852886e38,
        d = null,
        e = 0;
      for (; e < b.length; ) {
        let g = b[e];
        ++e;
        var f = a.pa.Ge();
        let h = g.pa.Ge();
        if (f == null || h == null) continue;
        f = f.ma.x - h.ma.x;
        f = Math.abs(f);
        c > f && ((c = f), (d = g));
      }
      return d;
    }
    Xka(a) {
      this.zG = a;
    }
    Oxb() {
      var a = this.jb;
      a != null && ((a = a.Nf()), a.parameters.Gj && a.sf.Pwb());
    }
    GKa(a) {
      J.remove(this.vd, a);
    }
    EKa(a) {
      a == null && (a = !1);
      this.xKa();
      this.Pw();
      if (this instanceof hh && this.lb != null) {
        var b = this.cacheName;
        b = !(b == null || b == "");
      } else b = !1;
      b && !a
        ? (this.U4(),
          this.clear(!1),
          this.Fc.reset(),
          (this.Fc = null),
          this.lb.cache.push(this.cacheName, this))
        : this.SP();
    }
    n0a() {
      debugger;
      let a = 0,
        b = this.pa.Va.all;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        c.hFa && c.vla(!1);
      }
    }
    jsb(a) {
      this.yr += a;
      return !this.pa.vc && this.yr > v.Ub.threshold ? !0 : !1;
    }
    I3(a, b, c) {
      this.iz = a;
      this.GP = b;
      this.HI = c;
    }
    HHa() {
      this.Nt.$(this);
    }
    b1() {
      return this.$G != null;
    }
    vY(a) {
      this.da != null && this.da.vY(a);
    }
    wwb(a) {
      var b = a.Cva;
      if (b != null && b != "") {
        let c;
        switch (a.pe) {
          case 4:
            c = this.aw(a.qxa);
            break;
          case 6:
            b = this.jb;
            c = b != null ? b.aw(a.qxa) : null;
            break;
          default:
            c = this.ff(a.pe);
        }
        c != null &&
          ((b = m.find(c.me, function (d) {
            return d.name == a.Cva;
          })),
          b != null &&
            (Gc.Jma(c.Fc, c),
            (a.L4a || b.aA(c)) &&
              c.TS(b, b.CD(c.Fc, c.da.jd())) &&
              c.Pl.clear()));
      }
    }
    xwb(a) {
      let b = wd.tya(this.ff(a.pe), a.items, a.fK, a.cacheName);
      var c = a.ux;
      c != null &&
        c != "" &&
        ((c = m.find(b.me, function (d) {
          return d.name == a.ux;
        })),
        c != null &&
          (Gc.Jma(b.Fc, b), c.aA(b) && b.TS(c, c.CD(b.Fc, b.da.jd()))));
    }
    ywb(a) {
      a = this.ff(a.pe);
      this.hAa();
      this.yK.$(a);
    }
    zwb(a) {
      a.qka(this.parameters.voice) && ua.bk(a.name, a.yeb, a.volume);
    }
    Awb(a) {
      ua.exb(a.name);
    }
    Bwb(a) {
      a.qka(this.parameters.voice) && ua.bk(a.ab());
    }
    Cwb(a) {
      a.model = this;
      this.St.$(a);
      a.model = null;
    }
    nwb(a) {
      a.model = this.ff(a.pe);
      this.Tt.$(a);
      a.model = null;
    }
    owb(a) {
      let b = a.B6;
      if (b == 0)
        ((a = a.value), a < 0 && this.Hda && (a = 0), this.oZ(a), this.PA());
      else if (b == 1) {
        debugger;
        this.OZa(a.value);
        this.Wmb();
      }
    }
    pwb(a) {
      a.model = this;
      this.Ut.$(a);
      a.model = null;
    }
    qwb() {
      this.wr.$();
    }
    rwb(a) {
      this.AS.$(a);
    }
    swb(a) {
      this.$u.Sca &&
        ca.Ka() != null &&
        ca
          .Ka()
          .Vla(
            this.$u.ck,
            this.$u.ig,
            this.$u.time,
            a.BT,
            a.oza > 0 ? a.oza : this.Tz,
            a.Uwb,
          );
    }
    twb(a) {
      this.GS.$(a);
    }
    RNa(a) {
      a.model = this;
      this.lS.$(a);
      a.model = null;
    }
    uwb(a) {
      let b = a.duration;
      a = ta.MQ(0, a.Fv);
      this.LKa(a);
      this.k5(a, b);
    }
    vwb(a) {
      debugger;
      a.model = this;
      this.jS.$(a);
      a.model = null;
    }
    RWa(a) {
      this.vd.push(a);
      this.Jw.$(a);
    }
    VWa(a) {
      this.Hf.includes(a) || this.Hf.push(a);
    }
    tnb(a) {
      J.remove(this.Hf, a);
    }
    xKa() {
      let a = 0,
        b = this.Hf;
      for (; a < b.length; ) b[a++].model = null;
    }
    mp() {
      return this.Nd.qk
        ? this.Nd.frameCount
        : this.Tj() != null
          ? this.da.mp()
          : -1;
    }
    U0() {
      return this.Nd.qk
        ? this.Nd.frameCount
        : this.Tj() != null
          ? this.da.U0()
          : -1;
    }
    Uma(a, b, c, d, e) {
      let f = this.lb;
      f != null
        ? f.Uma(a, b, c, d, e)
        : 0 == this.dh &&
          ((b = b.Nf()),
          e
            ? ((e = v.mA.D6a(this)), (c = b.uea(c)), (b = this.Aea(d)))
            : ((e = v.mA.p8a(this)), (c = this.uea(c)), (b = b.Aea(d))),
          this.Vwa(Math.pow(2, e) * c * b * a),
          this.PA());
    }
    fw() {
      return this.lb != null ? this.lb.fw() : this.$x.Wi;
    }
    nka(a, b) {
      let c = ca.Ka();
      c != null && c.nka(this, a, b);
    }
    d5(a, b) {
      let c = ca.Ka();
      c != null && c.d5(this, a, b);
    }
    nT(a) {
      this.da.nT(a);
    }
    O4(a) {
      this.da.O4(a);
    }
    Sja(a) {
      debugger;
      this.da.Sja(a);
    }
    Gwb() {
      this.by < 0 && (this.by = v.Ub.$Fa);
    }
    i3(a) {
      this.round = a;
      this.G5(!0);
      this.Xka(-1);
      this.iub();
      this.En.eL();
    }
    iu(a) {
      this.parameters.iu(a);
    }
    Vaa(a) {
      this.parameters.Vaa(a);
    }
    t$a() {
      return !this.parameters.Tfa();
    }
    WF(a) {
      let b = this.pa,
        c = this.parameters.qb,
        d = this.lb != null,
        e = 0;
      for (; e < a.length; ) a[e++].M6(this.me, b, c, d, this.Po);
    }
    M6(a, b, c, d, e) {
      for (var f = 0, g = this.me; f < g.length; ) g[f++].BF(b, c, d, b);
      f = 0;
      for (g = this.Po; f < g.length; ) g[f++].BF(b, c, d, b);
      b = this.pa;
      c = this.parameters.qb;
      d = this.lb != null;
      for (f = 0; f < a.length; ) a[f++].BF(b, c, d, b);
      for (a = 0; a < e.length; ) e[a++].BF(b, c, d, b);
    }
    veb(a, b, c) {
      this.p_.add(a, b, c);
    }
    SNa(a) {
      let b = 0;
      for (; b < a.length; ) a[b++].Wh(this);
    }
    Hrb(a, b, c) {
      this.$u.ck = a;
      this.$u.ig = b;
      this.$u.time = c;
      this.$u.Sca = !0;
    }
    Aob() {
      this.$u.Sca = !1;
    }
    LKa(a) {
      switch (a) {
        case 9:
          this.Ja.w4 = !1;
          this.Ja.NA = 0;
          a = new yd(9, 0, 0);
          a.Jt = this.gw();
          this.Fp.$(a);
          break;
        case 10:
          this.Ja.t2 = !1;
          this.Ja.hA = 0;
          a = new yd(10, 0, 0);
          a.Jt = this.gw();
          this.Fp.$(a);
          break;
        case 11:
          this.Ja.XR = !1;
          this.Ja.pA = 0;
          a = new yd(11, 0, 0);
          a.Jt = this.gw();
          this.Fp.$(a);
          break;
        case 14:
          ((this.Ja.uU = !1),
            (this.Ja.nu = 0),
            (a = new yd(14, 0, 0)),
            (a.Jt = this.gw()),
            this.Fp.$(a));
      }
    }
    k5(a, b) {
      b <= 0 && (b = 1);
      switch (a) {
        case 9:
          this.Ja.w4 = !0;
          this.Ja.Peb = b;
          break;
        case 10:
          this.Ja.t2 = !0;
          this.Ja.vFa = b;
          break;
        case 11:
          this.Ja.XR = !0;
          this.Ja.KGa = b;
          break;
        case 14:
          ((this.Ja.uU = !0), (this.Ja.kOa = b));
      }
    }
    APa() {
      this.yga(!0);
      this.MB.Rob();
      this.MB.C5(this.Po);
    }
    ZOa(a) {
      this.wga(!0);
      this.WF(a);
      this.Xu.MKa();
      this.Xu.LT(this.me);
      this.H6();
    }
    Lrb(a) {
      this.mMa(a.x, a.y, a.z);
    }
    mMa(a, b, c) {
      let d = this.PG;
      d.x = a;
      d.y = b;
      d.z = c;
    }
    Cob() {
      let a = this.PG;
      a.x = 1;
      a.y = 1;
      a.z = 1;
    }
    Bob() {
      this.Tz = 1;
    }
    tob() {
      this.Qy = 0;
    }
    OZa(a) {
      this.jO += a;
    }
    Wmb() {
      var a = this.lb;
      a == null
        ? this.parameters.qb &&
          (this.jO == 0 && this.Fp.$(new yd(13, 0, 0)),
          (a = new yd(13, -1, -1, this.jO)),
          this.AHa.$(a))
        : a.PA();
    }
    YCa() {
      return this.lb != null ? this.lb.YCa() : this.$x.F1;
    }
    wga(a) {
      a == null && (a = !1);
      this.me.length = 0;
      sa.Vza(this, a);
      this.Dlb();
    }
    yga(a) {
      a == null && (a = !1);
      this.Po.length = 0;
      sa.y4a(this, a);
      this.Flb();
    }
    gAb() {
      if (!this.Nd.qk) {
        let a = this.Os.left,
          b = this.Os.right,
          c = this.Os.left,
          d = this.Os.right,
          e = this.pa.Va.all,
          f = 0,
          g = e.length;
        for (; f < g; ) {
          let h = e[f++].ma.x;
          h < c && h < a && (c = h);
          d < h && b < h && (d = h);
        }
        this.Nd.EMa(c, d);
      }
    }
    clear(a) {
      a == null && (a = !0);
      this.Pw();
      this.Ku != null && this.Nl.Pw();
      this.da != null && this.da.Pw();
      this.sf = this.Ku = this.da = this.OH = this.Nd = null;
      this.Vb != null && (this.Vb.clear(), (this.Vb = null));
      this.KB.length = 0;
      this.vd.length = 0;
      a && (this.pa = null);
    }
    Pw() {
      this.AA = new V();
      this.zA = new V();
      this.Sf = new V();
      this.ng = new V();
      this.qK = new V();
      this.ur = new V();
      this.yK = new V();
      this.Jw = new V();
      this.St = new V();
      this.Tt = new V();
      this.Ut = new V();
      this.sS = new V();
      this.tS = new V();
      this.Fp = new V();
      this.AHa = new V();
      this.Nt = new V();
      this.wr = new V();
      this.AS = new V();
      this.ME = new V();
      this.GS = new V();
      this.lS = new V();
      this.jS = new V();
    }
    Iwb(a) {
      let b = this.jb;
      b != null &&
        (this.parameters.Gj || P.mP ? this.sf.Fwb(b) : this.sf.$La(b),
        b.parameters.Gj || P.mP ? b.sf.Ewb(a) : b.sf.$La(b));
    }
    cp(a, b, c, d) {
      d == null && (d = !0);
      c == null && (c = !0);
      if (a != null) {
        var e = this.parameters.Fd(a.type);
        e != null &&
          e.name != a.name &&
          ((this.$G = b ? e : null),
          this.parameters.ik(a.type, a),
          (b = v.Ub.VPa),
          (e = new ja(0)),
          a.attributes.get(b, e),
          this.parameters.attributes.set(b, d ? e.G : v.Ub.WPa),
          c && this.Fmb());
      }
    }
    rrb() {
      if (!this.pa.vc) {
        let a = this.parameters.Hd,
          b = p.items.$b(v.Ub.Fu);
        if (b != null) {
          this.cp(b, !0, !0, !1);
          this.pa.vc = !0;
          this.parameters.i3a();
          let c = 0,
            d = this.pa.Va.all;
          for (; c < d.length; ) {
            let e = d[c];
            ++c;
            if (e.vc) {
              let f = v.Ub.lR / e.weight,
                g = v.Ub.mR / e.weight,
                h = e.ma;
              h.x += v.Ub.pw / e.weight;
              h.y += f;
              h.z += g;
            }
          }
          this.sf.stb(b.Yb);
          this.ME.$(new vu(this, a.Oa));
        }
      }
    }
    kob() {
      !this.pa.vc && this.by >= 0 && (this.by == 0 && this.rrb(), this.by--);
      this.yr = Math.max(this.yr - v.Ub.kAa, 0);
    }
    B7a(a) {
      let b = new Il();
      b.level = 1;
      b.LP = 1;
      b.Xb = 1;
      b.WP = 1;
      b.ft = "";
      b.BFa = "";
      b.Kf = v.Vca;
      b.Gj = !1;
      b.WD = !0;
      b.qb = !1;
      b.Bu = !1;
      b.zd = !1;
      b.mh = !1;
      b.hr = !1;
      b.qg = 0;
      b.ao = 0;
      b.Rf = null;
      b.kg = null;
      b.Mg = null;
      b.Hd = null;
      b.lg = null;
      b.Ng = null;
      b.wp = null;
      if (a != null && a.length != 0) {
        let c = 0;
        for (; c < a.length; ) this.Ulb(a[c++], b);
      }
      b.iM();
      b.Hm();
      return b;
    }
    GBa(a) {
      let b = null;
      switch (a) {
        case 0:
        case 1:
          b = this.pa;
          break;
        case 2:
          this.jb != null && (b = this.jb.pa);
          break;
        case 3:
          this.lb != null && (b = this.lb.pa);
      }
      return b;
    }
    W9a() {
      return this.Aga ? 100 : v.uya.K8a(this.jb);
    }
    Zmb() {
      let a = ca.Ka();
      if (a != null) {
        var b = new ja(0);
        this.parameters.attributes.get(v.Mja.Ok, b) &&
          this.jb != null &&
          ((b = b.G * v.Mja.Bc * this.jb.wo),
          b != 0 && (b > 0 || !this.Bs) && a.gM(this, b));
      }
    }
    BHa(a) {
      this.SNa(a);
    }
    Dlb() {
      let a = 0,
        b = this.me;
      for (; a < b.length; ) sa.IJa(b[a++].va.actions);
    }
    Flb() {
      let a = 0,
        b = this.Po;
      for (; a < b.length; ) sa.IJa(b[a++].Cl.actions);
    }
    Ulb(a, b) {
      if (a != null && b != null) {
        var c = null,
          d = a.name;
        d != null &&
          d != "" &&
          ((d = p.items.$b(a.name)), d != null && (c = d.clone()));
        c == null ? ((d = a.$xa), (d = !(d == null || d == ""))) : (d = !1);
        d &&
          ((d = this.parameters.Fd(a.$xa, a.j1a)),
          d != null && (c = d.clone()));
        c != null && (c.bfb(a), b.ik(c.type, c), p.F());
      }
    }
    Fx() {
      this.lb != null ? this.lb.Fx() : this.$x.Syb();
    }
    nca() {
      this.lb != null ? this.lb.nca() : this.$x.Sgb();
    }
    j_a() {
      this.MM && this.da.Ua.SS && this.Pva(this.Cb);
      this.MM = !1;
    }
    cXa(a, b, c) {
      a = a.Nf();
      this.Nf().En.uY(!0, b, c);
      a.En.uY(!1, b, c);
    }
    m9a(a) {
      if (wd.Acb) return !0;
      if (this.vc) return !1;
      let b = this.Cb.aj / a.wo,
        c = this.jsb(this.Bs ? 0 : b);
      var d = a.parameters;
      a = v.Ub.wya;
      var e = new ja(0);
      d.attributes.get(v.Ub.vya, e);
      a *= e.G;
      e = v.Ub.DDa;
      var f = new ja(0);
      d.attributes.get(v.Ub.CDa, f);
      d = e * f.G;
      f = e = !1;
      this.Cb.se && (e = a * b > vf.fKa());
      this.Cb.$q && !this.Cb.block && (f = d * b > vf.fKa());
      return c || f ? !0 : e;
    }
    gw() {
      return ca.Ka() == null
        ? -1
        : this == ca.Ka().zb
          ? 0
          : this == ca.Ka().pb
            ? 1
            : -1;
    }
    cPa() {
      if (this.Ja.w4 && this.Ja.NA != this.Ja.gT) {
        this.Ja.NA += this.Ja.gT / (this.Ja.Nlb * v.qn());
        this.Ja.NA > this.Ja.gT && (this.Ja.NA = this.Ja.gT);
        var a = new yd(9, this.Ja.NA, 1);
        a.Jt = this.gw();
        this.Fp.$(a);
      }
      this.Ja.t2 &&
        this.Ja.hA != this.Ja.IR &&
        ((this.Ja.hA += this.Ja.IR / (this.Ja.vFa * v.qn())),
        this.Ja.hA > this.Ja.IR && (this.Ja.hA = this.Ja.IR),
        (a = new yd(10, this.Ja.hA, 1)),
        (a.Jt = this.gw()),
        this.Fp.$(a));
      this.Ja.XR &&
        this.Ja.pA != this.Ja.YR &&
        ((this.Ja.pA += this.Ja.YR / (this.Ja.KGa * v.qn())),
        this.Ja.pA > this.Ja.YR && (this.Ja.pA = this.Ja.YR),
        (a = new yd(11, this.Ja.pA, 1)),
        (a.Jt = this.gw()),
        this.Fp.$(a));
      this.Ja.uU &&
        this.Ja.nu < this.Ja.vU &&
        ((this.Ja.nu += this.Ja.vU / (this.Ja.kOa * v.qn())),
        (this.Ja.nu = Math.min(this.Ja.nu, this.Ja.vU)),
        (a = new yd(14, this.Ja.nu, 1)),
        (a.Jt = this.gw()),
        this.Fp.$(a),
        this.Ja.nu >= this.Ja.vU && (this.Ja.uU = !1));
    }
    UKa() {
      this.Ja.nu = 0;
      this.Ja.uU = !0;
      this.cPa();
    }
    QT(a, b) {
      this.lb == null &&
        (b == v.gB
          ? this.Qnb(a)
          : (this.Hwa(this.zCa(), a) && this.nba(a, b), this.OXa(a, b)));
    }
    nba(a, b) {
      if (this.lb == null)
        for (
          this.Atb(a),
            this.bNa(b),
            a = this.da,
            a != null && a.vPa(this.ND()),
            a = 0,
            b = this.vd;
          a < b.length;

        ) {
          let c = b[a++].da;
          c != null && c.vPa(this.ND());
        }
    }
    OXa(a, b) {
      let c = this.Ifa();
      X.Xa(c, a);
      c.set(a, b);
    }
    Hwa(a, b) {
      switch (a) {
        case 1:
          a = b == 0 ? !1 : !0;
          break;
        case 2:
          switch (b) {
            case 0:
              a = !1;
              break;
            case 1:
              a = !1;
              break;
            default:
              a = !0;
          }
          break;
        default:
          a = !0;
      }
      return a;
    }
    Qnb(a) {
      let b = this.Ifa();
      X.remove(b, a);
      if (b.size <= 0) this.lF();
      else {
        a = 0;
        for (var c = b.entries(), d = c.next(); !d.done; ) {
          var e = d.value;
          d = c.next();
          e = e[0];
          this.Hwa(a, e) && (a = e);
        }
        this.nba(a, b.get(a));
      }
    }
    lF() {
      this.lb == null && this.nba(0, v.gB);
    }
    cyb(a, b, c) {
      let d = new Ia();
      X.wh(this.XW, a, d)
        ? m.find(d.G, function (e) {
            return e.first == b;
          }) == null && d.G.push(new Ca(b, c))
        : this.XW.set(a, [new Ca(b, c)]);
    }
    j6a(a, b) {
      let c = new Ia();
      return X.wh(this.XW, a, c)
        ? ((a = m.find(c.G, function (d) {
            return d.first == b;
          })),
          a == null ? null : a.second)
        : null;
    }
    vBa() {
      if (this.vd.length <= 0) return null;
      let a = this.vd;
      return a[a.length - 1];
    }
    static wea(a, b) {
      return Hl.wea(a.Ju, b.Ju);
    }
    static tya(a, b, c, d) {
      c == null && (c = "");
      let e = null;
      if (a == null) return e;
      d != null && d != "" && (e = a.cache.pull(d));
      e == null
        ? ((b = a.B7a(b)), (b.qb = a.parameters.qb), (e = new hh(b)))
        : (e.Fc = new Ae());
      e.cacheName = d;
      e.Kd(c);
      e.zla(a.Bs);
      e.parameters.wl = a.parameters.wl;
      e.pa == null ? e.BI(a) : e.mmb();
      e.Xaa(a.jb);
      e.Lrb(a.PG);
      e.ZT(a.wo);
      a.RWa(e);
      return e;
    }
    static ZAa(a, b, c) {
      a = a.RP;
      if (a.length > 0) return a[0];
      if (b) return v.IYa;
      c != null ? ((b = c.Zi), (b = !(b == null || b == ""))) : (b = !1);
      return b ? c.Zi : v.CNa;
    }
  }
  wd.g = "C6";
  Object.assign(wd.prototype, { j: wd });
