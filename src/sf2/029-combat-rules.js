// 029-combat-rules.js
// Domain: audio  |  11 class(es)  |  tree root(s): Ut, Wt, Yt, Xt, ca, du, cu, wl, uy, bu, Zt
// Edit here. Run `npm run build` to reassemble the full bundle.
  class Ut {
    constructor() {
      this.isActive = !1;
      this.count = 0;
      this.WDa = new H(0, 0, 0, 1);
      this.ck = new H(0, 0, 0, 1);
    }
  }
  Ut.g = "A8";
  Object.assign(Ut.prototype, { j: Ut });
  class Wt {
    constructor() {
      this.Nu = new Lt();
      this.Pb = new Xt();
      this.cz = new Map();
      this.Sha = null;
      this.W1 = !1;
      this.LE = new V();
    }
    init(a, b, c, d) {
      this.Nu.Wo = c;
      this.Nu.ratio = d;
      this.cz = a;
      this.Sha = b;
      this.W1 = !1;
      a = this.cz.entries();
      for (b = a.next(); !b.done; ) {
        c = b.value;
        b = a.next();
        d = c[0];
        let e = new Yt();
        e.counter = c[1];
        e.value = 0;
        this.Pb.Mv.set(d, e);
      }
    }
    Hqb() {
      let a = new Fb(),
        b = !1,
        c = this.Pb.Mv.entries(),
        d = c.next();
      for (; !d.done; ) {
        let e = d.value;
        d = c.next();
        let f = e[1];
        f.value != 0 &&
          ((b = !0),
          (a.M += "Counter: " + e[0] + " Value: " + f.value + "\n\n"));
      }
      b && at.zga(a, 0, "Counters -------------------------------------\n");
    }
    fsb() {
      this.Hq("NoLose");
    }
    arb() {
      this.Hq("BossNoLose");
    }
    msb() {
      this.Hq("PerfectRound");
    }
    Vrb() {
      this.Hq("Losses");
    }
    Rsb() {
      this.Hq("ShockWin");
    }
    Zqb() {
      this.Hq("BodyguardsWin");
    }
    $qb() {
      this.Hq("BossWin");
    }
    itb() {
      this.Hq("TournamentsBeaten");
    }
    drb() {
      this.Hq("ChallangesBeaten");
    }
    ltb() {
      this.Hq("MaximumLevel");
    }
    qrb() {
      this.Hq("DifficultyWin");
    }
    ttb(a) {
      let b = 0,
        c = this.dm("WinBattle");
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        d.counter.a_a(a) && this.Pk(d);
      }
    }
    Xrb(a) {
      let b = 0,
        c = this.dm("ComboCount");
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        a >= d.counter.value && this.Pk(d);
      }
    }
    Zsb(a) {
      let b = 0,
        c = this.dm("Style");
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        a >= d.counter.value && this.Pk(d);
      }
    }
    utb(a) {
      let b = 0,
        c = this.dm("FightBeaten");
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        (a.WI(d.counter.m4a) || a.WI(d.counter.n4a)) && this.Pk(d);
      }
    }
    atb(a) {
      let b = 0,
        c = this.dm("SurvivalRounds");
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        a >= d.counter.value && this.Pk(d);
      }
    }
    Trb(a) {
      let b = 0,
        c = this.dm("HealthRemained");
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        a <= d.counter.value && this.Pk(d);
      }
    }
    setTime(a) {
      for (var b = 0, c = this.dm("RoundQuicker"); b < c.length; ) {
        var d = c[b];
        ++b;
        a <= d.counter.value && this.Pk(d);
      }
      b = 0;
      for (c = this.dm("RoundLonger"); b < c.length; )
        ((d = c[b]), ++b, a >= d.counter.value && this.Pk(d));
    }
    Yqb(a) {
      this.W1 = !0;
      let b = this.VAa();
      a || b == null || b.cb || (b.cb = !0);
    }
    Sqb(a, b, c, d, e, f) {
      if (!f && c) {
        c = 0;
        for (var g = this.dm("FirstHits"); c < g.length; ) this.Pk(g[c++]);
      }
      if (d) for (d = 0, c = this.dm("Disarm"); d < c.length; ) this.Pk(c[d++]);
      d = 0;
      for (c = this.dm("RestrictedAnimation"); d < c.length; ) {
        g = c[d];
        ++d;
        g.cb || a.m2(g.counter.animation) || (g.cb = !0);
        let h = g.counter.Fu;
        this.Sha.Hd != null && h != "" && this.Sha.Hd.name != h && (g.cb = !0);
        e && !g.cb && this.Pk(g);
      }
      if (e) {
        if (b)
          for (e = 0, d = this.dm("HeadHitRound"); e < d.length; )
            this.Pk(d[e++]);
        e = this.VAa();
        e != null && !e.cb && this.W1 && this.Pk(e);
      }
      if (!f && b)
        for (b = 0, f = this.dm("HeadKick"); b < f.length; )
          ((e = f[b]),
            ++b,
            e != null && a.m2(e.counter.animation) && this.Pk(e));
    }
    Hq(a) {
      let b = 0;
      for (a = this.dm(a); b < a.length; ) this.Pk(a[b++]);
    }
    complete(a, b) {
      b == null && (b = !1);
      if (!b) {
        b = this.Pb.Mv.entries();
        let d = b.next();
        for (; !d.done; ) {
          var c = d.value;
          d = b.next();
          c = c[1];
          c.counter.Vi(this.Nu) &&
            c.counter.uca == 2 &&
            ((c.value = c.value == a ? 1 : 0), this.LE.$(c));
        }
      }
    }
    TOa(a) {
      let b = this.cz.entries(),
        c = b.next();
      for (; !c.done; ) {
        let d = c.value;
        c = b.next();
        let e = d[1];
        (a && e.xEa) || (e.AP = this.Pb.Mv.get(d[0]).value);
      }
      this.Hqb();
    }
    eL() {
      this.W1 = !1;
      let a = this.Pb.Mv.entries(),
        b = a.next();
      for (; !b.done; ) {
        var c = b.value;
        b = a.next();
        c = c[1];
        c.counter.uca == 1 && (c.cb = !1);
      }
    }
    Pk(a) {
      let b = this.h_a(a.counter.u4a),
        c = this.d_a(a.counter.gfb, a.counter.Yeb);
      a.counter.Vi(this.Nu) &&
        b &&
        c &&
        (a.mbb(), a.counter.uca != 2 && this.LE.$(a));
    }
    dm(a) {
      let b = !0,
        c = this.Pb.Mv.entries(),
        d = c.next();
      for (; !d.done; ) {
        let e = d.value;
        d = c.next();
        if (e[1].counter.type == a) {
          b = !1;
          break;
        }
      }
      return b
        ? []
        : m.tj(X.values(this.Pb.Mv), function (e) {
            return e.counter.type == a;
          });
    }
    VAa() {
      return X.Xa(this.Pb.Mv, "BlockedRound")
        ? this.Pb.Mv.get("BlockedRound")
        : null;
    }
    h_a(a) {
      if (a == null || a == "") return !0;
      a = a.split("|");
      let b = 0,
        c = a.length;
      for (; b < c; ) if (p.F().i0(a[b++]) == this.Nu.Wo) return !0;
      return !1;
    }
    d_a(a, b) {
      if (a == "" && b == "") return !0;
      let c = a != "",
        d = b != "";
      a = this.YBa(a);
      b = this.YBa(b);
      return c && d
        ? this.Nu.ratio > a
          ? this.Nu.ratio < b
          : !1
        : c
          ? this.Nu.ratio > a
          : d
            ? this.Nu.ratio < b
            : !1;
    }
    YBa(a) {
      let b = 0,
        c = Wc.kD;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.first == a) return d.second;
      }
      return kc(a);
    }
  }
  Wt.g = "A9";
  Object.assign(Wt.prototype, { j: Wt });
  class Yt {
    constructor() {
      this.cb = !1;
      this.value = 0;
      this.counter = null;
    }
    mbb() {
      this.value++;
    }
  }
  Yt.g = "AA";
  Object.assign(Yt.prototype, { j: Yt });
  class Xt {
    constructor() {
      this.Mv = new Map();
    }
  }
  Xt.g = "AB";
  Object.assign(Xt.prototype, { j: Xt });
  class ca {
    constructor(a, b, c, d) {
      this.WW = m.l();
      this.tb = new bc();
      this.Dg = new Gc();
      this.w$ = !1;
      this.EX = this.sV = null;
      this.RX = 0;
      this.iaa = new Md();
      this.bua = new Md();
      this.zo = new Zt();
      this.DH = m.l();
      this.fe = new Wt();
      this.ze = new $t();
      this.DO = null;
      this.round = new au();
      this.mv = m.l();
      this.yg = m.l();
      this.Ra = m.l();
      this.NW = new bu();
      this.ha = d;
      ca.s8 = this;
      this.yn = this.Rba = !1;
      this.Da = a;
      this.loaded = !1;
      this.ri = null;
      this.go = new dd(
        "Fight:" +
          this.Da.location +
          "," +
          this.Da.name +
          ":" +
          this.Da.index +
          this.Da.type,
      );
      this.Tk = 0;
      this.kc = b;
      this.tf = c;
      this.mh = this.Oga = this.AN = this.Ct = this.OJ = this.CJ = !1;
      this.ju = 0;
      this.idb = this.f2 = !0;
      this.AR = this.gha = this.Dga = !1;
      this.Uu = null;
      this.Qza = this.frame = 0;
      this.Dya = null;
      this.wW = this.r9 = this.ZG = this.jY = !1;
      this.ud = this.pb = this.zb = null;
      this.aya = this.J7 = this.ky = 0;
      this.Rm = new vl();
      this.yo = new vl();
      this.XG = !1;
      this.wC = null;
      this.Tga = !1;
      this.n$ = this.m$ = -3.4028234663852886e38;
      this.o$ = 0;
      this.d$ = this.ZEa = this.q9 = this.a9 = !1;
      this.sW = !0;
      this.y9 = this.Pra = !1;
      new $s();
      L.J.hi && gb.init();
      this.kY = !1;
      a = 0;
      for (b = sa.Nk; a < b.length; ) b[a++].Zo();
      a = 0;
      for (b = sa.Fm; a < b.length; ) b[a++].Zo();
      this.Zb = this.tf[this.Tk];
      this.wC = this.Zb.Gc;
      this.Wsb();
      this.location = new Cf(this.Da.location, this.Da.Ap);
      this.location.init();
      a = this.kc.position;
      b = this.location.hja;
      a.x = b.x;
      a.y = b.y;
      a.z = b.z;
      a = this.Zb.position;
      b = this.location.I_;
      a.x = b.x;
      a.y = b.y;
      a.z = b.z;
      this.g2a();
      this.N1();
      this.Wba();
      this.ud.qYa(this.kc);
      this.ud.Nva(this.kc);
      this.ud.IY(this.kc, this.ud.sX);
      this.ud.IY(this.Zb, this.ud.lN);
      v.IFa = this.location.TU;
      v.bLa = this.location.width - this.location.TU;
      this.fe.init(v.pY.p6a(this.Da), this.kc, this.Da.type, v.Lz(this.Da));
      this.fe.LE.addListener(w(this, this.LE));
      this.Ta = new ul(this.go);
      this.Ta.init(this.location);
      this.Ta.addEventListener(0, w(this, this.egb));
      this.Ta.addEventListener(1, w(this, this.fgb));
      this.I1a();
    }
    Y7a(a) {
      switch (a) {
        case -1:
          return null;
        case 0:
          return this.zb;
        case 1:
          return this.pb;
      }
    }
    fub(a) {
      this.AN != a && ((this.AN = a), this.hx(a));
    }
    $0() {
      return !Ld.Tzb;
    }
    Z$a() {
      return this.ha != null ? this.ha.lab() : 0;
    }
    $$a() {
      return this.ha != null ? this.ha.mab() : 0;
    }
    e1() {
      return this.ha != null ? this.ha.nab() : 0;
    }
    A$a() {
      return this.Da != null ? this.Da.type == "FightNone" : !1;
    }
    fDa() {
      return this.kc.z$a();
    }
    iDa() {
      return this.kc.B$a();
    }
    Cgb() {
      this.Dga = !0;
      this.ha != null &&
        (this.ha.init(this.Da),
        this.ha.R6(this.$0()),
        this.ha.CA.addListener(w(this, this.Rhb)),
        this.ha.Rg.addListener(w(this, this.Rg)));
      this.Soa = Df.F();
      this.Soa.pia.addListener(w(this, this.zHa));
      this.tb.addEventListener(14, w(this, this.qia));
      this.Ta.CXa(this.ha);
      this.Ta.cG(!1);
      Za.F().init(this.fDa(), this.iDa());
      Nc.w$a() && (Nc.Yca = 0);
      this.round.round = 0;
      this.Da.type == "FightNone" ? (db.US(), this.Owb()) : (this.Da.Rga = !0);
      v.dU(v.gB);
      this.AR = !1;
      de.AY = !0;
    }
    B() {
      gb.Z_();
      Nc.reset();
      ca.Otb();
      this.Da.Rga = !1;
      this.Da.A_a();
      this.RA();
      v.dU(v.gB);
      this.tb.removeEventListener(14, w(this, this.qia));
      this.ud.Axa();
      this.dL();
      for (var a = 0, b = this.Ra; a < b.length; ) this.ym(b[a++]);
      this.Dg.xxa();
      this.Da.type != "FightNone" && db.US();
      this.Ta.Pw();
      this.Ta.clear();
      this.Ta.B();
      this.Ta = null;
      this.fe != null && this.fe.LE.removeListener(w(this, this.LE));
      this.tb.removeEventListener(14, w(this, this.qia));
      P.yZa() || P.Cxa();
      a = 0;
      for (b = sa.Nk; a < b.length; ) b[a++].Zo();
      a = 0;
      for (b = sa.Fm; a < b.length; ) b[a++].Zo();
      p.nxa();
      this.Soa.pia.removeListener(w(this, this.zHa));
    }
    Ea() {
      var a = this.ha;
      a != null && a.lsb(this.yn);
      this.yn
        ? ((a = this.ha), a != null && a.layout())
        : (this.Kzb(),
          this.ia(),
          (a = this.EX),
          a != null && a.Sh(this),
          (a = this.sV),
          a != null && a.Sh(this.Ta));
    }
    AA(a) {
      let b = a.data;
      b.type == 7 && this.Ta.ia.Uf.rh.E5(a.model.pa, !1);
      this.tb.pg.set("Interval", b);
      this.tb.Hj(a.model, 12, !0);
      this.Qhb(a);
    }
    zA(a) {
      let b = a.data;
      b.type == 7 && this.Ta.ia.Uf.rh.E5(a.model.pa, !0);
      this.tb.pg.set("Interval", b);
      this.tb.Hj(a.model, 13, !0);
      this.Ngb(a);
    }
    Sf(a) {
      if (this.ju == 3 && !this.mh) {
        var b = this.Ffa(!0);
        switch (b.Oq) {
          case 2:
            b.qb
              ? ((b = this.ha), b != null && b.Ica())
              : ((b = this.ha), b != null && b.Hca());
            break;
          case 3:
            b = this.ha;
            b != null && b.Eca();
            break;
          case 4:
            b = this.ha;
            b != null && b.Bca();
            break;
          default:
            this.ha.Te.type == 2 ||
              (!b.qb && this.Da.type != "FightPVP") ||
              (b.jE
                ? ((b = this.ha), b != null && b.NZ(!0))
                : b.S$a() <= v.vDa && ((b = this.ha), b != null && b.NZ(!1)));
        }
        this.mh = !0;
      }
      this.tb.pg.set("Animation", a.data);
      this.tb.Hj(a.model, 9, !0);
      this.TC(4, a.model.parameters.qb ? 1 : 2);
      a.model.isVisible ||
        (this.Ta.ia.Uf.rh.E5(a.model.pa, !0), (a.model.isVisible = !0));
    }
    ng(a) {
      this.tb.pg.set("Animation", a.data);
      this.tb.Hj(a.model, 10, !0);
      let b = a.model.jb;
      a = a.model.cDa() && b != null && b.cDa();
      this.ju == 1 &&
        a &&
        (this.txa(), this.Da.type != "FightNone" ? this.Bm() : this.DF(2));
      this.ju == 3 && a && (this.txa(), this.B4a());
    }
    pK(a) {
      this.tb.pg.set("Animation", a.data);
      this.tb.Hj(a.model, 11, !0);
    }
    ghb(a) {
      a.model.lb == null && this.TC(7, a.model.parameters.qb ? 1 : 2);
    }
    ur(a) {
      this.tb.pg.set("StepFrame", this.aya);
      this.tb.Hj(a.model, 2, !0);
      this.d$ = !0;
    }
    ME(a) {
      this.tb.ME(a);
    }
    qhb(a) {
      this.Dg.qlb(a);
    }
    DF(a) {
      a == 2 ? Za.F().yla(!0) : a == 3 && Za.F().yla(!1);
      this.ju = a;
      let b = 0,
        c = this.Ra;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        d.Vb.data = a;
        d.Ke = a;
        this.tb.Hj(d, 1);
        d.Vb.data = a;
        d.Ke = a;
        this.Dg.Kh(1, d.Vb);
      }
    }
    ia() {
      this.f2 && this.cob();
      this.idb && this.Znb();
      this.frame++;
    }
    cob() {
      this.round.$t && this.Qza++;
      this.y9 && (this.y9 = !1);
      this.d$ = !1;
      this.tb.ia();
      for (var a = 0, b = this.Ra.length; a < b; ) {
        var c = this.Ra[a++],
          d = c.ZCa();
        c.ia();
        d && ((d = c.da.Ua), d != null && d.Jpa == this.ju && this.WW.push(c));
      }
      this.d$ && this.aya++;
      this.WW.length > 1 && this.dYa(this.WW);
      this.WW.length = 0;
      if (this.yg.length > 0) {
        a = 0;
        for (b = this.yg; a < b.length; )
          ((c = b[a]), ++a, c.ia(), this.Ra.push(c));
        this.yg.length = 0;
      }
      this.J_a();
      if (!this.kc.mh)
        for (this.$nb(), this.Dg.Gx(), a = 0, b = this.Ra; a < b.length; )
          b[a++].Wnb();
      this.x_a();
      this.Dg.ia();
      this.tb.T4a();
      this.Dga &&
        (this.TC(1, 3),
        this.Ta.t3a(),
        this.Ta.r3a(),
        this.Ta.ia.Uf.Mq.bM(),
        this.Ta.ia.Uf.Nq.bM());
      this.gha && ((this.gha = !1), this.iNa());
      this.job();
      a = this.ha;
      a != null && a.ia();
      this.Rw();
      this.Gob();
      this.RX = this.Ct ? this.RX + L.J.uk.Cm : 0;
      this.Ct && this.RX >= v.AGa && this.hx(!1, !0);
    }
    Znb() {
      let a = this.ha;
      a != null && a.bL();
      this.mh && this.Sda(3);
      this.Ta.Ea();
    }
    $nb() {
      this.Pda();
      let a = !1;
      var b = this.Ra.length;
      if (this.frame % 2 == 0) {
        let c = 0;
        for (; c < b; ) a = this.Ra[c++].IKa(a);
      } else for (--b; b >= 0; ) ((a = this.Ra[b].IKa(a)), --b);
    }
    Kzb() {
      let a = this.zb.da.jd() > 0,
        b = this.pb.da.jd() > 0;
      this.zb.GMa(a ? 30 : 100, a ? 100 : 30);
      this.pb.GMa(b ? 30 : 100, b ? 100 : 30);
    }
    a2a(a, b, c) {
      this.Ta.ia.KXa(a, b, c);
    }
    Knb() {
      this.Ta.ia.Lnb();
    }
    Aca(a, b, c) {
      this.a9 = !0;
      this.o$ = a;
      this.Ta.ia.Aca(a, b, c);
    }
    Yma(a, b, c) {
      this.m$ = a - this.o$ / 2 + this.location.width / 2;
      this.n$ = a + this.o$ / 2 + this.location.width / 2;
      this.q9 = c;
      this.Ta.ia.Yma(a, b);
    }
    Wja() {
      this.a9 = !1;
      this.Ta.ia.Wja();
    }
    Jr(a, b) {
      let c = this.ha;
      c != null && c.Jr(a, b);
    }
    gM(a, b) {
      if (this.Da.type == "FightNone") return !1;
      a.Vaa(b);
      a.parameters.Tfa() && (a.parameters.hr = !0);
      return !a.t$a();
    }
    lPa(a, b) {
      switch (a) {
        case 1:
          a = this.zb;
          break;
        case 2:
          a = this.pb;
          break;
        default:
          return !1;
      }
      return this.gM(a, b);
    }
    YLa(a) {
      this.Ta.ia.Wka(a);
    }
    irb(a, b, c) {
      this.sV = new cu(a, b, c);
    }
    K1() {
      this.Ta.ia.K1(new H(0, 0, 0, 1));
    }
    Qja() {
      this.Ta.ia.Qja();
    }
    Dpb(a, b) {
      this.Ta.ia.Uf.rh.E5(a.pa, b);
    }
    nka(a, b, c) {
      let d = null;
      this.ha != null &&
        this.ha.mb != null &&
        (d = a.parameters.qb ? this.ha.mb.Id : this.ha.mb.je);
      d != null && (c ? d.Jab(b) : d.nvb(b));
    }
    d5(a, b, c) {
      let d = null;
      this.ha != null &&
        this.ha.mb != null &&
        (d = a.parameters.qb ? this.ha.mb.Id : this.ha.mb.je);
      d != null && d.Waa(b, c);
    }
    HT(a) {
      this.Uu = a;
      if (this.Uu != null)
        switch (this.Uu.type) {
          case "ERuleLifeSteal":
          case "ERuleRegeneration":
            this.ky = 5;
            break;
          case "ERuleRingout":
            this.ky = 4;
            break;
          case "ERuleCrazy":
          case "ERuleHotGround":
          case "ERuleLoseFall":
          case "ERulePoints":
          case "ERuleTimeoutWin":
          case "ERuleWinCombo":
          case "ERuleWinShock":
          case "ERuleWinStyle":
            this.ky = 2;
        }
    }
    pT(a) {
      let b = null;
      switch (a) {
        case 1:
          b = this.zb;
          break;
        case 2:
          b = this.pb;
      }
      b != null && b.iu(0);
    }
    bca(a, b, c) {
      let d = b.gI;
      this.tb.pg.set("Defense", b.QP);
      this.tb.pg.set("Animation", d);
      this.tb.pg.set("Critical", b.se);
      this.tb.pg.set("Shock", b.Ub);
      this.tb.pg.set("Block", b.block);
      this.tb.pg.set("Damage", b.aj);
      this.tb.Hj(a, c, !0);
    }
    $gb(a) {
      this.bca(a.model, a.model.Cb, 5);
    }
    Zgb(a) {
      this.bca(a.model, a.model.Cb, 6);
    }
    Ygb(a) {
      let b = a.model.Cb;
      var c = a.data;
      c.j3 && (b.se = !1);
      this.bca(a.model, b, 7);
      var d = a.model.parameters.hd;
      d < b.gR ? ((b.aj = d + 0.01), (b.Wza = !0)) : (b.Wza = !1);
      c.j3 && (b.se = !1);
      this.Da.type == "FightNone" && ((b.se = !1), (b.Ub = !1), (b.$i = !1));
      b.Ub && (a.model.vc ? (b.Ub = !1) : (a.model.vc = !0));
      b.$i &&
        ((d = p.items.$b(v.Ub.Fu)),
        a.model.un || (d != null && a.model.parameters.Hd.name == d.name)
          ? (b.$i = !1)
          : ((a.model.un = !0), a.model.Gwb()));
      b.hp = !this.Oga;
      if (b.Uy != null) {
        var e = b.Uy.xx,
          f = b.Uy.et;
        d = e.ma;
        e = e.rf;
        let g = f.ma;
        f = f.rf;
        d = new H(
          d.x - e.x + (g.x - f.x),
          d.y - e.y + (g.y - f.y),
          d.z - e.z + (g.z - f.z),
          1,
        );
        a.Pd.da.DD(4).JL &&
          a.model.Hrb(
            b.ck,
            d,
            b.se ? 0.016666666666666666 : 0.008333333333333333,
          );
        b.se && this.Ta.pvb(b.ck, b.ig);
      }
      b.block || (a.model.nT(5), (this.Oga = !0));
      d = a.model.parameters;
      this.ha != null &&
        this.ha.cAb(b.gI, b.aj, b.target, b.hp, b.$q, b.se, b.block, b.Ub);
      a.model.Bs && (b.aj = 0);
      a.model.veb(b.aj, this.C6a(c), b.QP);
      this.gM(a.model, -b.aj);
      this.Qdb(a.model.jb, b.aj);
      b.gI.Esa ||
        ((f = a.model.dh),
        (e = a.Pd.dh),
        (c = c.Xb),
        a.model.Uma(c, a.Pd, b.block, b.se, !1),
        a.Pd.Uma(c, a.model, b.block, b.se, !0),
        f < 1 && a.model.dh >= 1 && this.tb.Hj(a.model, 8, !0),
        e < 1 && a.Pd.dh >= 1 && this.tb.Hj(a.Pd, 8, !0));
      a.model.parameters.Tfa() && (a.model.parameters.hr = !0);
      this.hx(!1);
      if (b.se || (b.$q && !b.block) || b.Ub)
        ((c = this.mBa(b.se, b.$q && !b.block, b.Ub)),
          c != null && this.Ta.JL(c));
      a.model.tw = b.se;
      a.model.vc = b.Ub;
      this.$yb(b, a.model.parameters.qb ? 2 : 1);
      this.Dg.Kh(6, a);
      this.Dg.Kh(7, a);
      xa.F().nE() ||
        this.Da.type != "FightNone" ||
        this.Zb.ft != "Punchbag" ||
        a.model.xI != v.dya ||
        (this.Nwb(), (a.model.pa.vc = !0), a.model.n0a());
      this.TC(5, a.model.parameters.qb ? 1 : 2);
      this.TC(6, a.model.parameters.qb ? 2 : 1);
      c = d.hd <= 0;
      a.Pd.parameters.qb
        ? this.fe.Sqb(a.Pd.Tj(), b.$q, b.hp, b.$i, c, b.block)
        : (this.fe.Yqb(b.block), b.Ub && (this.w$ = !0));
    }
    Vla(a, b, c, d, e, f) {
      this.Ta.Vla(a, b, c, !1, d, e, f);
    }
    uhb(a) {
      a.WF(this.Ra);
      a.WF(this.yg);
    }
    dsb(a) {
      let b = a.value * 100;
      a.owa == 12 && b > 97 && b < 100 && (b = 97);
      (a.Jt != 0 && this.Da.type != "FightPVP") ||
        Za.F().ug.csb(a.owa, b, a.frames);
    }
    jS() {
      debugger;
    }
    afa(a) {
      switch (a) {
        case 1:
          return this.zb;
        case 2:
          return this.pb;
      }
      return null;
    }
    DP(a, b, c, d, e) {
      e == null && (e = 100);
      let f = this.ha;
      f != null && f.DP(a, b, e, c, d);
    }
    NU(a, b) {
      let c = this.ha;
      c != null && c.NU(a, b);
    }
    oT() {
      let a = this.ha;
      a != null && a.oT();
    }
    aL() {
      this.ha != null && this.ha.mb != null && this.ha.mb.aL();
    }
    Bmb(a) {
      switch (a) {
        case 1:
          this.zb.NKa();
          break;
        case 2:
          this.pb.NKa();
      }
    }
    $ma() {
      this.tb.rKa();
      this.pPa(this.zb);
      this.pPa(this.pb);
      this.zb.APa();
      this.zb.ZOa(this.Ra);
      this.pb.APa();
      this.pb.ZOa(this.Ra);
    }
    pPa(a) {
      a.parameters.$ma();
      let b = 0,
        c = this.g9a(a.parameters.qb);
      for (; b < c.length; ) a.parameters.Oa.push(c[b++]);
      this.ud.IY(a.parameters, this.d8a(a.parameters.qb));
      this.tb.Jf(a);
    }
    g9a(a) {
      return a ? this.ud.tX : this.ud.NV;
    }
    d8a(a) {
      return a ? this.ud.sX : this.ud.lN;
    }
    hwb() {
      this.DH.sort(function (a, b) {
        return qb(b.priority, a.priority);
      });
    }
    brb(a) {
      this.pb.A5(a);
    }
    ZBa(a) {
      if (!this.Tga) return a;
      switch (a) {
        case 1:
          return 5;
        case 2:
          return 6;
        case 3:
          return 7;
        case 4:
          return 8;
        case 5:
          return 1;
        case 6:
          return 2;
        case 7:
          return 3;
        case 8:
          return 4;
        default:
          return a;
      }
    }
    iA(a, b) {
      if (this.Da.type == "FightNone") return !1;
      var c = m.l();
      sa.Cz("PhysicalFall", c);
      if (c.length == 0) return !1;
      c = c[0];
      let d = !1,
        e = 0,
        f = this.Ra;
      for (; e < f.length; ) {
        let g = f[e];
        ++e;
        g.parameters.qb == a &&
          g.dDa() &&
          !g.parameters.mh &&
          g.da.Qe &&
          g.da.DD(6) == null &&
          ((g.Vb.data = null),
          (g.parameters.hr = !0),
          g.iu(0),
          g.yJa(c, !0),
          (d = !0),
          b && (g.jb.parameters.qg = this.round.jL));
      }
      d && b && !a && this.Da.xR() && (this.Tk = this.tf.length - 1);
      return d;
    }
    xob() {
      debugger;
      if (this.Da.type != "FightNone") {
        this.OJ = this.CJ = !1;
        this.RA();
        this.round.round = 0;
        this.P4(this.pb);
        for (var a = 0, b = this.tf; a < b.length; ) {
          let c = b[a];
          ++a;
          c.qg = 0;
          c.pT();
          c.zd = !1;
          c.hr = !1;
          c.jE = !0;
          c.mh = !1;
          c.un = !1;
          c.yJ = !0;
          c.uw = !1;
          c.Oq = 0;
        }
        this.Zb = this.tf[0];
        this.wC = this.Zb.Gc;
        this.Tk = 0;
        this.pb = this.Jf(this.Zb);
        this.Eja();
        a = this.zb.parameters;
        a.pT();
        a.qg = 0;
        this.Ta.cG(!1);
        this.tb.ila(this.Ra);
        this.Dg.Dla(this.Ra);
        this.ha != null &&
          (this.ha.reset(), this.ha.M1(), this.ha.R6(this.$0()));
        this.DF(0);
        this.yx();
      }
    }
    eL(a) {
      debugger;
      if (this.Da.type != "FightNone") {
        this.OJ = this.CJ = this.yn = !1;
        this.RA();
        this.round.round--;
        this.P4(this.pb);
        this.tf[this.Tk].iu(this.yo.RZ);
        this.tf[this.Tk].qg = this.yo.Fna;
        this.Zb = this.tf[this.Tk];
        this.wC = this.Zb.Gc;
        this.pb = this.Jf(this.Zb);
        this.pb.EL(this.yo.CE);
        this.pb.FL(this.yo.el);
        this.pb.J5(this.yo.PP);
        this.pb.ZT(this.yo.HP);
        this.Eja();
        var b = this.zb.parameters;
        a != null ? b.iu(a) : b.iu(this.Rm.RZ);
        b.qg = 0;
        this.zb.EL(this.Rm.CE);
        this.zb.FL(this.Rm.el);
        this.zb.J5(this.Rm.PP);
        this.zb.ZT(this.Rm.HP);
        this.Ta.cG(!1);
        this.tb.ila(this.Ra);
        this.Dg.Dla(this.Ra);
        this.ha != null &&
          (this.ha.reset(), this.ha.M1(), this.ha.R6(this.$0()));
        this.DF(0);
        this.yx();
        this.ha != null && this.ha.wna();
      }
    }
    Elb() {
      let a = 0,
        b = this.Ra.length;
      for (; a < b; ) this.tja(this.Ra[a++]);
    }
    tja(a) {
      let b = 0,
        c = a.me;
      for (; b < c.length; ) {
        let e = 0,
          f = c[b++].va.actions;
        for (; e < f.length; ) {
          var d = f[e];
          ++e;
          d.type == 0 &&
            ((d = wd.tya(a, d.items, d.fK, d.cacheName)),
            this.Vja(d),
            J.remove(this.yg, d));
        }
      }
      this.Rw();
    }
    Qdb(a, b) {
      let c = new ja(0);
      a.parameters.attributes.get(v.vha.Ok, c) &&
        ((b = c.G * v.vha.Bc * b * (a.jb.wo / a.wo)), b != 0 && this.gM(a, b));
    }
    I1a() {
      function a() {
        b.Cgb();
        b.loaded = !0;
      }
      this.loaded = !1;
      let b = this;
      this.zb = this.Jf(this.kc);
      this.pb = this.Jf(this.Zb);
      this.Da.type != "FightNone" ? this.UFa(a) : a();
    }
    Jf(a) {
      a.wl = 10;
      let b = new wd(a);
      b.BI();
      let c = 0,
        d = this.Ra;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        e != null && e != b && (b.Xaa(e), e.Xaa(b));
      }
      b.index = this.Ta.Jf(b, a.qb, !0, !0);
      this.NT(b);
      this.tb.Jf(b);
      this.Dg.Jf(b);
      this.Ra.push(b);
      return b;
    }
    $wb() {
      var a;
      var b = (a = null);
      this.ha != null && ((a = this.ha.vt(0)), (b = this.ha.vt(1)));
      v.XFa(this.zb, this.pb, a, b);
      this.kc.zd
        ? ((a = this.kc), (b = this.Zb), (this.zo.vD = 1))
        : ((this.sW = !1), (a = this.Zb), (b = this.kc), (this.zo.vD = 0));
      this.b_a(a);
      this.Rba = !1;
      this.r9 = !0;
      this.zo.qB = a;
      this.zo.I2 = b;
    }
    Ifb(a) {
      a == null && (a = !0);
      this.RA();
      this.Uda(this.pb);
      var b = this.Zb.qg;
      a &&
        (this.pb.TT(this.wC),
        this.P4(this.pb),
        this.Tk++,
        (this.Zb = this.tf[this.Tk]),
        (this.Zb.position = this.location.I_),
        (this.Zb.qg = b),
        (this.wC = this.Zb.Gc),
        this.ud.IY(this.Zb, this.ud.lN),
        (this.pb = this.Jf(this.Zb)),
        (this.XG = !0),
        this.Elb(),
        this.ela(this.pb));
      this.Zb.Am(this.iaa);
      this.tb.ila(this.Ra);
      this.Dg.Dla(this.Ra);
      this.OJ = this.CJ = !1;
      this.ha != null &&
        ((a = this.ha.vt(0)),
        (b = this.ha.vt(1)),
        this.ha.reset(),
        this.ha.M1(a, b),
        this.ha.R6(this.$0()));
      this.DF(0);
      this.yx();
    }
    Vja(a) {
      a.Nfa() || this.hx(!1);
      m.cd(this.mv, a);
    }
    Uja(a, b) {
      let c = this.Ra.length;
      0 == c || a < 0 || c - 1 < a
        ? (a = b)
        : ((a = this.Ra[a]), J.remove(this.Ra, a));
      this.ym(a);
    }
    P4(a) {
      let b = 0,
        c = 0,
        d = this.Ra;
      for (; c < d.length; ) {
        if (d[c++] == a) {
          this.Uja(b);
          return;
        }
        ++b;
      }
      this.ym(a);
    }
    x_a() {
      this.a9 && (this.kxa(this.zb), this.kxa(this.pb));
    }
    kxa(a) {
      let b = a.pa.Ge().ma.x;
      if (!a.wR)
        this.q9 &&
          b >= this.m$ &&
          b <= this.n$ &&
          ((a.wR = !0), this.tb.Hj(a, 15));
      else if (!this.q9 || b < this.m$ || b > this.n$)
        ((a.wR = !1), this.tb.Hj(a, 16));
    }
    Oaa(a) {
      let b = 0,
        c = this.Ra;
      for (; b < c.length; ) c[b++].ztb(a);
    }
    dL() {
      let a = 0,
        b = this.Ra;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        c.U4();
        c.lb != null && this.Vja(c);
      }
      this.tb.reset();
      this.Dg.reset();
      this.Rw();
    }
    Owb() {
      this.XKa();
      this.WNa();
      this.Oaa(!0);
      v.LU();
    }
    yx() {
      this.round.$t = !1;
      this.round.jL = this.Da.vT;
      this.round.time = 0;
      this.round.rma = this.Da.a5;
      this.round.hdb = this.Da.type == "FightRaid";
      let a = new wl();
      ca.wCa(this.Da, this.kc, this.Zb, this.tf, this.Tk, a);
      this.ha.aAb(this.round, this.kc, this.Zb, a.fha);
      if (
        this.Da.type == "FightBossesReplayable" ||
        this.Da.type == "FightBosses" ||
        this.Da.type == "FightFinalTitan"
      )
        a.lE = !1;
      this.ha.Gca(this.kc, a.pD, a.BP, a.g2, a.lE, a.CR, a.$ga);
      (this.ha.mb != null ? this.ha.mb.Id : null).Fia.addListener(
        w(this, this.I3),
      );
      (this.ha.mb != null ? this.ha.mb.je : null).Fia.addListener(
        w(this, this.I3),
      );
    }
    i3() {
      let a = ze.instance;
      a != null && a.cnb();
      this.Rm.RZ = this.kc.hd;
      this.Rm.CE = this.zb.sy;
      this.Rm.el = this.zb.dh;
      this.Rm.PP = this.zb.EV;
      this.Rm.HP = this.zb.wo;
      this.Rm.Fna = this.kc.qg;
      this.yo.RZ = this.tf[this.Tk].hd;
      this.yo.CE = this.pb.sy;
      this.yo.el = this.pb.dh;
      this.yo.PP = this.pb.EV;
      this.yo.HP = this.pb.wo;
      this.yo.Fna = this.tf[this.Tk].qg;
      this.Ta.ia.iB();
      this.s0a();
      this.Tga = this.mh = this.Oga = this.OJ = !1;
      this.ky = 0;
      this.Uu = null;
      this.w$ = !1;
      this.round.round++;
      this.ha != null &&
        (this.ha.o0a(),
        this.Da.type != "FightRaid" && this.ha.Dca(this.round.round, !1));
      this.XKa();
      let b = this;
      this.XG
        ? ((this.Da.type == "FightSurvival" && ca.hab()) ||
            ((this.loaded = !1),
            this.UFa(function () {
              b.aIa();
              b.loaded = !0;
            })),
          (this.XG = !1))
        : (this.aIa(), (this.loaded = !0));
    }
    aIa() {
      let a = 0,
        b = this.Ra;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        c.i3(this.round.round);
        c.parameters.Job();
      }
      this.tb.Q3a();
      this.hx(!1);
      this.XG = !1;
    }
    WNa() {
      this.Ta.cG(!0);
      this.DF(1);
    }
    C4a() {
      this.DF(3);
    }
    Bm() {
      let a = this.ha;
      a != null && a.dz();
    }
    mlb() {
      this.DF(2);
      this.Rba = !0;
      let a = this.ha;
      a != null && a.bAb();
      this.Oaa(!0);
      this.ud.c5 = !0;
      this.Hlb();
      this.Pra && ((this.y9 = !this.iA(!1, !1)), (this.Pra = !1));
      this.zb.k5(14, this.kc.lP);
      this.pb.k5(14, this.Zb.lP);
    }
    Rhb() {
      if (this.ha != null)
        switch (this.ha.qp()) {
          case 1:
            this.i3();
            break;
          case 2:
          case 3:
            this.WNa();
            break;
          case 5:
            this.mlb();
        }
    }
    Rg(a) {
      switch (a) {
        case 0:
          this.Kia();
          break;
        case 1:
          Xc.uib(w(this, this.qxb));
          break;
        case 2:
          this.AZ();
          break;
        default:
          L.J.hi && this.hgb(a);
      }
    }
    qxb() {
      this.AZ();
      this.e5a();
    }
    hgb(a) {
      if (this.ju == 2)
        switch (a) {
          case 3:
            this.iA(!1, !0);
            break;
          case 4:
            this.iA(!1, !1);
            break;
          case 5:
            this.iA(!0, !0);
        }
    }
    job() {
      if (this.r9) {
        let a = this.zo.qB.qg >= this.round.jL;
        if (!this.jY && !this.ZG) {
          this.r9 = !1;
          let b = this.zo.qB.qb && this.Tk < this.tf.length - 1,
            c = this.Da.xR();
          this.AR = !1;
          (!a && c) || (a && b)
            ? (this.Ta.cG(!1),
              this.dL(),
              this.Ifb(!c || (c && this.kc == this.zo.qB)),
              c ? this.ha.wna() : (this.kc.qg = 0))
            : a
              ? this.lea(this.zo.qB)
              : (this.Ta.cG(!1), this.dL(), this.RA(), this.i3());
        }
      } else
        this.CJ
          ? this.jY || this.ZG || this.kY || this.oD()
          : this.OJ && !this.CJ
            ? this.$wb()
            : this.Da.type != "FightNone" &&
              this.round.$t &&
              (this.kc.hr ||
                this.Zb.hr ||
                this.Uu != null ||
                (this.ha != null && this.ha.cFa())) &&
              (this.hx(!1),
              this.Oaa(!1),
              (this.round.$t = !1),
              this.ha != null &&
                this.ha.cFa() &&
                (this.Da.type == "FightPVP"
                  ? ((this.ky = 6), this.Pma(13), this.ud.Kh(13, 3, this.ze))
                  : ((this.ky = 3), this.Pma(9), this.ud.Kh(9, 3, this.ze))),
              this.Y3a(this.Ffa(!0), this.Ffa(!1), this.ky));
    }
    Y3a(a, b, c) {
      this.ud.c5 = !1;
      this.ud.dxb();
      if (c == 3 || c == 4 || c == 2) {
        a = !1;
        if (this.Uu != null)
          switch (this.Uu.Gfa()) {
            case 1:
              a = !0;
              break;
            case 2:
              a = !1;
          }
        a
          ? ((a = this.kc), (b = this.Zb))
          : ((this.sW = !1), (b = this.kc), (a = this.Zb));
      }
      c == 6
        ? ((a = this.kc),
          (b = this.Zb),
          this.kc.hd > this.Zb.hd
            ? (a.qg++, (a.zd = !0), (b.zd = !1))
            : this.kc.hd < this.Zb.hd
              ? ((a = this.Zb), (b = this.kc), a.qg++, (a.zd = !0), (b.zd = !1))
              : ((a.zd = !0), (b.zd = !0)))
        : (a.qg++, (a.zd = !0), (b.zd = !1));
      a.mh = !0;
      b.mh = !0;
      a.Oq = c;
      b.Oq = c;
      c = this.ha;
      c != null && c.wna();
      this.AN = !1;
      this.hx(!1);
      this.zb.UKa();
      this.pb.UKa();
      this.C4a();
      this.sV = this.EX = null;
    }
    B4a() {
      this.OJ = !0;
    }
    lea(a) {
      this.Urb();
      this.Da.type != "FightRaid" && this.RA();
      this.CJ = !0;
      this.Da.VU = this.Tk;
      this.c_a(a);
      if (this.DH.length > 0 || this.ZG) this.jY = !0;
      this.kY = !0;
      let b = this;
      a.Gj
        ? ya.lea(function () {
            b.kY = !1;
          })
        : ya.d5a(function () {
            b.kY = !1;
          });
    }
    Ffa(a) {
      if (this.ky != 5 && this.Uu != null)
        switch (this.Uu.Gfa()) {
          case 1:
            return this.kc;
          case 2:
            return this.Zb;
        }
      return this.kc.hd <= this.Zb.hd
        ? a
          ? this.Zb
          : this.kc
        : a
          ? this.kc
          : this.Zb;
    }
    RA() {
      for (var a = 0, b = this.Ra; a < b.length; ) {
        var c = b[a];
        ++a;
        c.un = !1;
        c.vc = !1;
        c = c.parameters;
        this.AR || c.pT(this.Da.EDa);
        c.zd = !1;
        c.hr = !1;
        c.jE = !0;
        c.mh = !1;
        c.un = !1;
        c.yJ = !0;
        c.uw = !1;
        c.Oq = 0;
        c.Hm();
      }
      this.AR || (this.AR = !0);
      b = a = null;
      this.ha != null &&
        this.ha.mb != null &&
        ((a = this.ha.mb.Id), (b = this.ha.mb.je));
      a != null && a.KKa();
      b != null && b.KKa();
      this.zb.ZT(this.Rm.HP);
      this.zb.J5(this.Rm.PP);
    }
    Qhb(a) {
      if (
        this.round.$t &&
        this.Da.type != "FightNone" &&
        a.model.Tj().name != "MineIdle" &&
        !this.Ct &&
        !this.wW &&
        a.model.Nfa()
      ) {
        var b = a.data;
        b.type == 4 &&
          a.Pd != null &&
          ((b = a.Pd.qCa(b, !1, !1, null, null)),
          a.Pd.parameters.hd <= b || ca.ewb) &&
          (a.model.G5(!1), (this.wW = !0), (this.EX = new du(a)));
      }
    }
    Ngb(a) {
      this.Ct && a.data.type == 4 && this.hx(!1);
    }
    hx(a, b) {
      b == null && (b = !1);
      this.Ct != a &&
        ((this.Ct = a),
        !b && this.AN && (this.Ct = !0),
        v.dU(this.Ct ? v.BNa : v.gB),
        this.Ct && (this.wW = !1),
        (this.RX = 0));
    }
    J_a() {
      this.wW && this.hx(!0);
    }
    egb() {
      let a = this.ha;
      a != null && a.Iw(!0);
      this.f2 = !1;
    }
    fgb() {
      if (this.ha != null) {
        let a = this.ha;
        a != null && a.Iw(!1);
      }
      this.f2 = !0;
    }
    txa() {
      let a = 0,
        b = this.Ra;
      for (; a < b.length; ) b[a++].uR = !1;
    }
    Pda() {
      let a = 0,
        b = this.Ra;
      for (; a < b.length; ) b[a++].Pda();
    }
    g2a() {
      this.ud = new eu(this, this.Da);
      this.ud.hz = this.round.round;
    }
    XKa() {
      this.pb.TT(this.wC);
      this.zb.parameters.Gj &&
        (this.kc.Gc != null ? this.zb.TT(this.kc.Gc) : this.zb.A5("Standard"));
      this.round.round >= 2 && this.N1();
      this.yob();
      this.ud.Nva(this.kc);
      this.omb();
      this.nmb();
      this.Zb.Hm();
      this.vYa();
      Za.F().refresh(this.fDa(), this.iDa());
      this.ud.ZZa();
      this.$ma();
    }
    Eja() {
      this.Uda(this.zb);
      m.cd(this.mv, this.zb);
      this.Rw();
      this.zb = this.Jf(this.kc);
      this.ela(this.zb);
      this.tja(this.zb);
      let a = 0,
        b = 0,
        c = this.Ra;
      for (; b < c.length; ) ((c[b++].index = a), ++a);
      this.yg.length = 0;
      this.Rw();
      this.dL();
      this.RA();
      this.XG = !0;
    }
    omb() {
      let a = new Md(),
        b = new Md();
      this.kc.Am(a);
      this.kc.qD(this.bua);
      this.kc.Hm();
      this.qPa(this.kc);
      this.kc.Am(b);
      b.compare(a) || (this.Eja(), (this.kc.attributes = this.DO.attributes));
    }
    lmb() {
      this.Uda(this.pb);
      m.cd(this.mv, this.pb);
      this.Rw();
      this.pb = this.Jf(this.Zb);
      this.ela(this.pb);
      this.tja(this.pb);
      let a = 0,
        b = 0,
        c = this.Ra;
      for (; b < c.length; ) ((c[b++].index = a), ++a);
      this.yg.length = 0;
      this.Rw();
      this.dL();
      this.RA();
      this.XG = !0;
    }
    nmb() {
      let a = new Md(),
        b = new Md();
      this.Zb.Am(a);
      this.Zb.qD(this.iaa);
      this.Zb.Hm();
      this.qPa(this.Zb);
      this.Zb.Am(b);
      b.compare(a) || (this.lmb(), (this.Zb.attributes = this.DO.attributes));
    }
    TC(a, b) {
      this.Pma(a);
      this.ud != null && this.ud.Kh(a, b, this.ze);
    }
    NT(a) {
      let b = a.rJ();
      a.FMa(v.IFa, v.bLa, b ? 0 : 100, b ? 0 : 30);
      a.Sf.addListener(w(this, this.Sf));
      a.ng.addListener(w(this, this.ng));
      a.qK.addListener(w(this, this.pK));
      a.AA.addListener(w(this, this.AA));
      a.zA.addListener(w(this, this.zA));
      a.ur.addListener(w(this, this.ur));
      a.yK.addListener(w(this, this.Vja));
      a.Jw.addListener(w(this, this.thb));
      a.Fp.addListener(w(this, this.dsb));
      a.jS.addListener(w(this, this.jS));
      a.Nt.addListener(w(this, this.dib));
      a.AS.addListener(w(this, this.AS));
      a.ME.addListener(w(this, this.ME));
      a.GS.addListener(w(this, this.GS));
      a.lS.addListener(w(this, this.lS));
    }
    Pma(a) {
      a == null && (a = 0);
      this.ze.tl.gp = a;
      this.ze.ml.gp = a;
      this.ze.tl.FI = this.zb.Tj();
      this.ze.ml.FI = this.pb.Tj();
      this.ze.tl.EP = this.zb.iz;
      this.ze.ml.EP = this.pb.iz;
      this.ze.tl.uw = this.zb.b1();
      this.ze.tl.Mia = this.pb.b1();
      this.ze.ml.uw = this.pb.b1();
      this.ze.ml.Mia = this.zb.b1();
      this.ze.tl.i2 = this.zb.vc;
      this.ze.tl.L3 = this.pb.vc;
      this.ze.ml.i2 = this.pb.vc;
      this.ze.ml.L3 = this.zb.vc;
      this.ze.yNa = v.qn();
    }
    $yb(a, b) {
      let c;
      switch (b) {
        case 1:
          b = this.ze.tl;
          c = this.ze.ml;
          break;
        case 2:
          b = this.ze.ml;
          c = this.ze.tl;
          break;
        default:
          return;
      }
      b.$Z = a.aj;
      b.Rca = 0;
      b.D1 = !0;
      b.C1 = a.block;
      b.qga = a.se;
      b.$q = a.$q;
      c.Rca = a.aj;
      c.$Z = 0;
      c.D1 = !1;
      c.C1 = a.block;
    }
    c_a(a) {
      let b = this.Da.type;
      var c = this.Da.og.Oz().length - 1;
      let d = this.Da.index;
      (a = a.qb)
        ? (b == "FightBosses" ||
          b == "FightBossesReplayable" ||
          b == "FightFinalTitan"
            ? ((c = d == c) ? c && this.fe.$qb() : this.fe.Zqb(),
              c && this.sW && this.fe.arb())
            : (b != "FightTournament" && b != "FightPVP") || d != c
              ? b == "FightChallenge" && d == c && this.fe.drb()
              : this.fe.itb(),
          this.fe.utb(this.Da.Nb),
          this.fe.ttb(this.Da.Nb),
          this.fe.qrb())
        : this.fe.Vrb();
      this.Q_a(a);
      (b != "FightSurvival" && b != "FightRaid") ||
        this.fe.atb(a ? this.Tk + 1 : this.Tk);
      this.fe.complete(this.round.jL);
    }
    b_a(a) {
      a.qb &&
        (this.fe.setTime(this.Da.a5 - this.ha.Sz()),
        this.fe.Trb(a.hd),
        a.jE && this.fe.msb(),
        this.w$ && this.fe.Rsb());
      this.fe.eL();
    }
    mBa(a, b, c) {
      let d = 0,
        e = v.KDa.Cda;
      for (; d < e.length; ) {
        let f = e[d];
        ++d;
        if (
          (c && f.type == "Shock") ||
          (a && f.type == "CriticalHit") ||
          (b && f.type == "HeadHit")
        )
          return f;
      }
      return null;
    }
    LE(a) {
      this.Da.Q1 &&
        a != null &&
        ((a = v.q5a(a.counter, a.value)),
        a != null && (this.DH.push(a), (this.gha = !0)));
    }
    I3(a) {
      let b = a.pxb,
        c = a.Yp,
        d = a.oxb,
        e = a.Z1,
        f = this.X7a(a.model);
      b != f.iz &&
        (a.model == 0 && this.fe.Zsb(b),
        this.tb.Hj(f, 3),
        f.I3(b, c, d, e),
        this.TC(8, a.model == 0 ? 1 : 2));
    }
    qia(a) {
      a.model.Vb.data = a.data;
      this.Dg.Kh(16, a.model.Vb);
    }
    X7a(a) {
      switch (a) {
        case 0:
          return this.zb;
        case 1:
          return this.pb;
        default:
          return null;
      }
    }
    dib(a) {
      if (a == this.zb || a == this.pb) {
        var b = a.fw();
        (a.parameters.qb ? this.ze.tl : this.ze.ml).UZ = b;
        this.TC(11, a.parameters.qb ? 1 : 2);
        a.parameters.qb && this.fe.Xrb(a.$x.u2);
        this.tb.Hj(a, 4);
        var c = a.zP;
        this.ha != null && this.ha.mb.Fx(a.parameters.qb, b, c);
      }
    }
    iNa() {
      if (!this.ZG) {
        this.ZG = !0;
        this.hwb();
        let a = this.DH[0];
        J.remove(this.DH, a);
        Df.F().mvb(a);
      }
    }
    zHa() {
      this.ZG = !1;
      this.DH.length == 0 ? (this.jY = !1) : this.iNa();
    }
    AS(a) {
      this.Ta.JL(a.mw);
    }
    GS(a) {
      this.Ta.Zvb(a.Ef);
    }
    lS() {
      debugger;
    }
    e5a() {
      this.lZa();
    }
    lZa() {
      this.f2 = !1;
      this.fe.complete(this.round.jL, !0);
      this.fe.TOa(!0);
      let a = null,
        b = null;
      this.ha != null && ((a = this.ha.vt(0)), (b = this.ha.vt(1)));
      v.XFa(this.zb, this.pb, a, b);
      v.oD(a, this.Da, null, null, -1, b, this.J7);
      this.Da.Q1 && p.o.Ai.tka();
      this.sV = this.EX = null;
    }
    Kia() {
      this.ha != null &&
        this.Rba &&
        !this.yn &&
        ((this.yn = !0),
        L.J.qx("button:fight:pause", ((T = this.ha), w(T, T.Kia))));
    }
    AZ() {
      this.ha != null && this.yn && ((this.yn = !1), this.ha.AZ());
    }
    Jia(a) {
      this.ha != null && ((this.yn = !0), this.ha.Jia(a));
    }
    fib(a) {
      a != null &&
        ((a.index = this.Ta.Jf(a, !1, !1)),
        this.yg.push(a),
        this.NT(a),
        this.tb.Jf(a),
        (a.isVisible = !1));
    }
    thb(a) {
      this.fib(a);
    }
    Rw() {
      let a = 0,
        b = this.mv;
      for (; a < b.length; ) this.P4(b[a++]);
      this.mv.length = 0;
    }
    ym(a) {
      if (a != null) {
        var b = a.lb;
        b != null && b.GKa(a);
        this.Ta.Fnb(a);
        b = 0;
        for (var c = this.Ra; b < c.length; ) {
          let d = c[b];
          ++b;
          d.yKa(a);
          d.jla();
        }
        this.tb.ym(a);
        this.Dg.ym(a);
        a.EKa();
      }
    }
    qPa(a) {
      this.DO = a;
      let b = this.round.round;
      b < 1 && (b = 1);
      let c = a.qb ? this.ud.rX : this.ud.MV;
      this.ud.Glb(c);
      this.ud != null && a.nMa(c, b);
      a.iM();
      this.DO.Hm();
      a.attributes = this.DO.attributes;
    }
    g1a(a) {
      let b = Nc.Nh(a);
      b != null &&
        b.parameters.Bu &&
        ((a = this.ZBa(a.control)),
        this.ju == 1 ? b.$C == -1 && (b.$C = a) : this.ju == 2 && b.NJa(a));
    }
    h1a(a) {
      let b = Nc.Nh(a);
      b != null &&
        b.parameters.Bu &&
        ((a = this.ZBa(a.control)), b.$C == a && (b.$C = -1), b.bnb(a));
    }
    s0a() {
      this.Qja();
      this.Jr(3, !0);
      this.Knb();
      this.oT();
      this.aL();
      this.Wja();
    }
    Wsb() {
      this.kc.Am(this.bua);
      this.Zb.Am(this.iaa);
    }
    dYa(a) {
      var b = 0,
        c = 0;
      let d = 0;
      var e = 0;
      let f = 0,
        g = a.length;
      for (; f < g; ) {
        var h = a[f++].pa;
        let k = h.$R;
        h = h.Ju.ma;
        b += h.x * k;
        c += h.y * k;
        d += h.z * k;
        e += k;
      }
      e = 1 / e;
      b *= e;
      c *= e;
      d *= e;
      e = this.Ta.Iu.ma;
      e = new H(e.x, e.y, e.z, 1);
      e.x -= b;
      e.y -= c;
      e.z -= d;
      e.y = 0;
      b = e.z = 0;
      for (c = a.length; b < c; ) a[b++].bvb(e);
    }
    oD(a) {
      a == null && (a = !0);
      this.yn = !0;
      (a && v.Blb(this.Da, this.zo.vD, this.J7)) ||
        (this.sW && this.fe.fsb(),
        (this.Ta.jha = !1),
        this.Ta.cG(!1),
        this.dL(),
        this.pb.TT(this.wC),
        this.ha != null && this.ha.qla(!1),
        v.oD(
          this.ha != null ? this.ha.vt(0) : null,
          this.Da,
          this.zo.qB,
          this.zo.I2,
          this.zo.vD,
          this.ha != null ? this.ha.vt(1) : null,
          this.J7,
          this.Qza / 60,
        ),
        this.fe.TOa(!1),
        v.T0a(),
        this.Da.Q1 && p.o.Ai.tka());
    }
    Uda(a) {
      a != null && ((this.NW.el = a.dh), (this.NW.CE = a.sy));
    }
    ela(a) {
      a != null && (a.FL(this.NW.el), a.EL(this.NW.CE));
    }
    Urb() {
      this.ha != null &&
        this.ha.mb != null &&
        (this.ha.mb.t5(!0, !0), this.ha.mb.t5(!1, !0));
    }
    N1() {
      this.ud.Nob(this.round.round > 0 ? this.round.round : 1);
      let a = this.Da;
      a != null && a.Uka();
    }
    vYa() {
      this.ud.y_a();
      let a = new fu(this.zb, this.pb, this.location, this.ze);
      a.HA = this.kc;
      a.Lda = this.Zb;
      this.ud.N1(a);
    }
    yob() {
      this.ze.tl.reset();
      this.ze.ml.reset();
    }
    Wba() {
      this.ud.Wba(this.Da);
    }
    Hlb() {
      let a = 0,
        b = this.Ra;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        c.$C != -1 && (c.NJa(c.$C), (c.$C = -1));
      }
    }
    UFa(a) {
      let b = m.l(),
        c = m.l();
      this.m5a(b, c);
      for (var d = 0; d < b.length; ) ++d;
      for (d = 0; d < b.length; ) ++d;
      ca.kcb(b, c)
        ? a()
        : (ca.cZa(b, c),
          P.Cxa(),
          (this.loaded = !1),
          (this.ri = G.jeb(P.RFa(b, c, !0))),
          this.ri.xK(function () {
            P.RFa(b, c, !1);
            a();
          }));
    }
    m5a(a, b) {
      var c = this.zb.parameters.Hd;
      if (c != null) {
        var d = c.Yb,
          e = c.pu;
        e != null && e != "" && (d = c.pu);
        m.cd(a, d);
        m.cd(b, d);
      }
      c = this.pb.parameters.Hd;
      c != null &&
        ((d = c.Yb),
        (e = c.pu),
        e != null && e != "" && (d = c.pu),
        m.cd(a, d),
        b.includes(d) ? J.remove(b, d) : m.cd(b, d));
    }
    Sda(a) {
      this.Dga && this.Ta.ia.Sda(a);
    }
    Gob() {
      let a = 0,
        b = this.Ra;
      for (; a < b.length; ) b[a++].Aob();
    }
    C6a(a) {
      a = a.ZZ;
      let b = a.length;
      if (b == 0) return "";
      let c = a[0].first,
        d = a[0].second,
        e = 1;
      for (; e < b; ) {
        let f = e++,
          g = a[f].second;
        g > d && ((c = a[f].first), (d = g));
      }
      return c;
    }
    Q_a(a) {
      let b = p.o.ws,
        c = p.o.Rz();
      a = v.l7a(this.Da, a);
      let d = p.o.bb();
      b + a >= c && d + 1 == v.h1() && this.fe.ltb();
    }
    Nwb() {
      debugger;
      this.Ta.JL(this.mBa(!1, !1, !0));
    }
    static Ka() {
      return ca.s8;
    }
    static Otb() {
      null != ca.s8 && (ca.s8 = null);
    }
    static hab() {
      return Ld.dwb;
    }
    static dab() {
      if (ca.lwb != null) {
        let a = m.find(ca.lwb, function (b) {
          return b.kwb == p.F().O6;
        });
        if (a != null) return a.Qvb;
      }
      return !1;
    }
    static wCa(a, b, c, d, e, f) {
      f.pD = null;
      f.BP = 0;
      f.g2 = !1;
      f.CR = !0;
      f.lE = !0;
      f.fha = !0;
      f.$ga = !1;
      let g = a.og;
      f.lE = !a.xR() || (b.qg == 0 && c.qg == 0);
      f.CR = f.lE;
      if (
        g.type == "FightBosses" ||
        g.type == "FightBossesReplayable" ||
        g.type == "FightFinalTitan"
      ) {
        f.pD = m.l();
        b = 0;
        for (c = g.Oz(); b < c.length; )
          ((d = v.d7a(c[b++].ct)), d != null && f.pD.push(d));
        f.BP = a.index;
        f.g2 = !0;
      } else ((f.pD = d), (f.BP = e));
      if (g.type == "FightSurvival" || g.type == "FightRaid")
        ((f.CR = !1), (f.lE = !1));
      f.fha = g.type != "FightRaid";
      g.type == "FightPVP" && (f.$ga = !0);
    }
    static kcb(a, b) {
      let c = m.l();
      m.addRange(c, a);
      m.addRange(c, b);
      if (ca.pG.length != c.length) return !1;
      a = 0;
      for (b = ca.pG.length; a < b; ) {
        let d = a++;
        if (ca.pG[d] != c[d]) return !1;
      }
      return !0;
    }
    static cZa(a, b) {
      ca.pG.length = 0;
      m.addRange(ca.pG, a);
      m.addRange(ca.pG, b);
    }
  }
  ca.g = "AC";
  Object.assign(ca.prototype, { j: ca });
  class du {
    constructor(a) {
      this.state = this.Mc = 0;
      this.model = a;
    }
    Sh(a) {
      this.state == 0 &&
        (this.Mc < (this.model.model instanceof hh ? v.ANa : v.zNa)
          ? a.yn || a.Ct || (this.Mc += L.J.uk.Cm)
          : (this.model != null &&
              this.model.model != null &&
              this.model.model.G5(!0),
            (this.state = -1)));
    }
  }
  du.g = "AD";
  Object.assign(du.prototype, { j: du });
  class cu {
    constructor(a, b, c) {
      this.color = a;
      this.frames = b;
      this.show = c;
      this.Z = 0;
    }
    Sh(a) {
      if (!(this.Z < 0)) {
        debugger;
        a.ia.K1();
        if (this.frames == 0) a.ia.Wka(255);
        else {
          let b = 255 / this.frames,
            c = 0;
          this.show || ((b = -b), (c = 255));
          this.Z < this.frames ? (a.ia.Wka(c + b), this.Z++) : (this.Z = -1);
        }
      }
    }
  }
  cu.g = "AE";
  Object.assign(cu.prototype, { j: cu });
  class wl {
    constructor() {
      this.$ga = !1;
      this.CR = this.lE = this.fha = !0;
      this.g2 = !1;
      this.BP = 0;
      this.pD = null;
    }
  }
  wl.g = "AF";
  Object.assign(wl.prototype, { j: wl });
  class uy {
    constructor() {
      this.Qvb = !1;
      this.kwb = 0;
    }
  }
  uy.g = "B0";
  Object.assign(uy.prototype, { j: uy });
  class bu {
    constructor() {
      this.el = this.CE = 0;
    }
  }
  bu.g = "B1";
  Object.assign(bu.prototype, { j: bu });
  class Zt {
    constructor() {
      this.qB = this.I2 = this.vD = null;
    }
  }
  Zt.g = "B2";
  Object.assign(Zt.prototype, { j: Zt });
