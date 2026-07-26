// 032-ai-tactics.js
// Domain: ai  |  17 class(es)  |  tree root(s): kd, Kl, P, Ll, Ml, Hu, Iu, Nl, Nd, Ju, Ue, cc, Ku, tb, Lu, Ti, jh
// Edit here. Run `npm run build` to reassemble the full bundle.
  class kd {
    constructor(a, b) {
      b == null && (b = 0);
      this.animation = a;
      this.wait = b;
    }
  }
  kd.g = "E3";
  Object.assign(kd.prototype, { j: kd });
  class Kl {
    constructor() {
      this.U_ = !1;
      this.nZ = this.C4 = 0;
    }
  }
  Kl.g = "E4";
  Object.assign(Kl.prototype, { j: Kl });
  class P {
    static kab() {
      if (P.CO == null) {
        P.CO = m.l();
        let a = 0,
          b = P.pOa;
        for (; a < b; ) (++a, P.CO.push(m.l()));
      }
      return P.CO;
    }
    static yZa() {
      return P.J4a;
    }
    static Vdb() {
      P.Vmb();
    }
    static RFa(a, b, c) {
      let d = [];
      if (!Ld.peb) return d;
      P.rnb(a);
      var e = v.Ub.Fu;
      m.cd(a, e);
      m.cd(a, "");
      J.remove(b, e);
      e = m.l();
      e.push("");
      e.push(v.Ub.Fu);
      P.wKa(e);
      for (e = P.OM.length = 0; e < a.length; ) {
        let g = a[e];
        ++e;
        if (!P.OM.includes(g)) {
          d.push(P.teb(g, c));
          let h = 0,
            k = a;
          for (; h < k.length; ) {
            var f = k[h];
            ++h;
            if (g == f && b.includes(g)) continue;
            f = P.feb(g, f, c);
            f != null && d.push(f);
          }
        }
      }
      P.OM.length = 0;
      m.Zaa(P.OM, a);
      return d;
    }
    static Cxa() {
      P.wKa(m.l());
      P.OM.length = 0;
    }
    static DK(a, b) {
      if (a != null) {
        a = a.children;
        for (var c = 0; c < a.length; ) {
          var d = a[c++];
          d.name == "Animation" &&
            ((d = d.attributes.get("Name")),
            (d = sa.x9a(d != null ? d : null)),
            d != null && b.push(d));
        }
      }
    }
    static VE(a, b, c) {
      c == null && (c = "Animation");
      if (a != null) {
        a = a.children;
        for (var d = 0; d < a.length; ) {
          var e = a[d++];
          e.name == c &&
            ((e = e.attributes.get("Name")), b.push(e != null ? e : null));
        }
      }
    }
    static Vmb() {
      var a = Ja.mi(274);
      a != null && jh.S0a(a);
      a != null && P.Xmb(a);
      a = Ja.mi(1319);
      if (a != null) {
        var b = a.A("TablesReduction");
        P.zp = u.I(b.A("MovementsTables").attributes.get("Step"), 1);
        u.I(b.A("MovementsTables").attributes.get("Step"), 1);
        b.A("AttackTables");
        b = a.A("MovementsTables").A("MovementsMainIterations");
        b = b.children;
        for (var c = 0; c < b.length; ) {
          var d = b[c++];
          d.name == "Animation" &&
            ((d = d.attributes.get("Name")), P.ssa.push(d != null ? d : ""));
        }
        b = a.A("MovementsTables").A("MovementsLastIteration");
        b = b.children;
        for (c = 0; c < b.length; )
          ((d = b[c++]),
            d.name == "Animation" &&
              ((d = d.attributes.get("Name")), P.tsa.push(d != null ? d : "")));
        b = a.A("MissileTables").A("MovementsMainIterations");
        b = b.children;
        for (c = 0; c < b.length; )
          ((d = b[c++]),
            d.name == "Animation" &&
              ((d = d.attributes.get("Name")), P.nsa.push(d != null ? d : "")));
        b = a.A("MissileTables").A("MovementsLastIteration");
        b = b.children;
        for (c = 0; c < b.length; )
          ((d = b[c++]),
            d.name == "Animation" &&
              ((d = d.attributes.get("Name")), P.osa.push(d != null ? d : "")));
        b = a.A("MoveLengthIntervals").A("Strict");
        b = b.children;
        for (c = 0; c < b.length; )
          ((d = b[c++]),
            d.name == "Interval" &&
              ((d = d.attributes.get("Name")), P.qsa.push(d != null ? d : "")));
        b = a.A("MoveLengthIntervals").A("Extended");
        b = b.children;
        for (c = 0; c < b.length; )
          ((d = b[c++]),
            d.name == "Interval" &&
              ((d = d.attributes.get("Name")), P.psa.push(d != null ? d : "")));
        b = a.A("OutcomeTables").A("Throws").A("Throws");
        b = b.children;
        for (c = 0; c < b.length; )
          ((d = b[c++]),
            d.name == "Animation" &&
              ((d = d.attributes.get("Name")), P.YVa.push(d != null ? d : "")));
        b = a.A("OutcomeTables").A("Throws").A("ThrowableIntervals");
        a = b.children;
        for (b = 0; b < a.length; )
          ((c = a[b++]),
            c.name == "Interval" &&
              ((c = c.attributes.get("Name")), P.XVa.push(c != null ? c : "")));
      }
    }
    static Xmb(a) {
      P.mP = u.ka(a.A("BothBot").attributes.get("Enabled"));
      var b = a.A("Tactics");
      b != null && P.Dkb(b);
      b = m.l();
      var c = a.A("ItemEquivalents");
      if (c != null) {
        c = c.children;
        for (var d = 0; d < c.length; ) {
          var e = c[d++];
          if (e.name == "Item") {
            e.attributes.get("Type");
            var f = e.attributes.get("SubType");
            f = f != null ? f : null;
            b.length = 0;
            e = e.children;
            let h = 0;
            for (; h < e.length; ) {
              var g = e[h++];
              g.name == "Equivalent" &&
                (g.attributes.get("Type"),
                (g = g.attributes.get("SubType")),
                b.push(g != null ? g : null));
            }
            P.Mqa.push(new Ca(f, b));
          }
        }
      }
      if (a != null) {
        b = Mg(Mg(a, "NoDecision"), "Intervals");
        P.VE(b, P.Csa, "Interval");
        b = Mg(Mg(a, "NoDecision"), "Moves");
        P.VE(b, P.Dsa, "Move");
        b = a.A("UnexpectedMoves");
        P.VE(b, P.Aua, "Move");
        b = a.A("IgnoredEnemyAnimations");
        P.VE(b, P.jpa, "Animation");
        b = a.A("SafeDodges");
        P.VE(b, P.lpa, "Animation");
        b = a.A("EmergencyDodges");
        P.DK(b, P.ipa);
        b = a.A("CautiousMovements");
        P.DK(b, P.tG);
        b = a.A("EvadeThrowDodges");
        P.DK(b, P.Oqa);
        b = a.A("RandomizingEnemyAnimation");
        P.DK(b, P.ita);
        b = a.A("MissileAnimations");
        P.DK(b, P.lsa);
        b = a.A("MagicAnimations");
        P.DK(b, P.Zra);
        b = a.A("EvadeUnsafeDodges");
        P.VE(b, P.kpa);
        b = a.A("AttackMoves");
        P.VE(b, P.oUa);
        b = a.A("ConditionalDecisions");
        if (b != null)
          for (b = b.children, c = 0; c < b.length; )
            ((d = b[c++]),
              d.name == "PlayerAnimation" &&
                d.xt() != null &&
                d.xt().name == "Reactions" &&
                ((f = P.yjb(d)), P.kta.push(f)),
              d.name == "BotAnimation" &&
                ((f = new Ll()), f.parse(d), P.Gpa.push(f)));
        b = Zy(Mg(a, "DistanceNode"), "Name");
        b = b != null ? b : null;
        b != null && b != "" && (P.KUa = b);
        Zy(Mg(Mg(a, "Debug"), "ShowErrorIfAnimationNotFound"), "Value");
      }
    }
    static yjb(a) {
      var b = a.attributes.get("Name");
      b = b != null ? b : "";
      var c = a.xt();
      a = m.l();
      c = c.children;
      let d = 0;
      for (; d < c.length; ) {
        let e = new Ll();
        e.parse(c[d++]);
        a.push(e);
      }
      return new Ca(b, a);
    }
    static Dkb(a) {
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        var c = a[b++];
        c.name == "Tactic" && ((c = new Nd(c)), P.yC.push(c));
      }
    }
    static rBa(a) {
      let b = 0,
        c = P.Mqa;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.first == a) break;
        else {
          let e = 0,
            f = d.second;
          for (; e < f.length; ) if (f[e++] == a) return d.first;
        }
      }
      return a;
    }
    static wfa(a) {
      let b = 0,
        c = P.yC;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.name == a) return d;
      }
      return null;
    }
    static oCa(a) {
      if (a >= P.CO.length || a < 0) throw 23;
      return P.CO[a];
    }
    static nva(a, b, c, d) {
      P.oCa(d).push(new Ca(a, new Ca(b, c)));
    }
    static i_a(a, b, c) {
      let d = 0;
      for (c = P.oCa(c); d < c.length; ) {
        let e = c[d];
        ++d;
        if (e.second.first == a && e.second.second == b) return !0;
      }
      return !1;
    }
    static Q$a() {
      return P.Csa;
    }
    static R$a() {
      return P.Dsa;
    }
    static oab() {
      return P.Aua;
    }
    static P$a() {
      return P.ssa;
    }
    static mDa() {
      return P.tsa;
    }
    static L$a() {
      return P.nsa;
    }
    static kDa() {
      return P.osa;
    }
    static O$a() {
      return P.qsa;
    }
    static N$a() {
      return P.psa;
    }
    static n$a() {
      return P.jpa;
    }
    static aab() {
      return P.lpa;
    }
    static d$a() {
      return P.kpa;
    }
    static b$a() {
      return P.ipa;
    }
    static CCa() {
      return P.tG;
    }
    static c$a() {
      return P.Oqa;
    }
    static U$a() {
      return P.ita;
    }
    static K$a() {
      return P.lsa;
    }
    static J$a() {
      return P.Zra;
    }
    static UCa() {
      return P.KUa;
    }
    static V$a() {
      return P.kta;
    }
    static U9a() {
      return P.Gpa;
    }
    static teb(a, b) {
      return P.neb(a, b);
    }
    static neb(a, b) {
      return Ti.yxb(a, b);
    }
    static feb(a, b, c) {
      return Ti.zxb(a, b, c);
    }
    static wKa(a) {
      for (var b = 0, c = sa.Nk; b < c.length; ) {
        var d = c[b];
        ++b;
        d.gU.clear();
        d.Zo();
        for (var e = 0; e < 3; ) {
          let f = d.g1()[e++],
            g = 0,
            h = f;
          for (; g < h.length; ) {
            let k = h[g];
            ++g;
            k.first != null && ((k.first = null), (k.second = "delete"));
          }
          f.length = 0;
        }
      }
      for (b = 0; b < 3; )
        for (c = P.kab()[b++], d = 0; d < c.length; ) {
          e = c[d];
          if (!e.first.empty()) {
            if (P.f_a(e.second.first, e.second.second, a)) {
              ++d;
              continue;
            }
            m.ye(c, d);
            --d;
          }
          ++d;
        }
    }
    static f_a(a, b, c) {
      let d = !1,
        e = !1,
        f = 0;
      for (; f < c.length; )
        if (a == c[f++]) {
          d = !0;
          break;
        }
      for (a = 0; a < c.length; )
        if (b == c[a++]) {
          e = !0;
          break;
        }
      return d ? e : !1;
    }
    static rnb(a) {
      let b = 0;
      for (; b < a.length; ) {
        let c = b + 1;
        for (; c < a.length; ) (a[b] == a[c] && (m.ye(a, c), --c), ++c);
        ++b;
      }
    }
  }
  P.g = "E5";
  class Ll {
    constructor() {
      this.names = m.l();
      this.priority = 0;
      this.ad = m.l();
    }
    parse(a) {
      var b = a.attributes.get("Names");
      b = (b != null ? b : "").split("|");
      for (var c = 0; c < b.length; ) this.names.push(b[c++]);
      this.priority = u.I(a.attributes.get("Priority"));
      if (!(a.children.length < 1))
        for (a = a.children, b = 0; b < a.length; )
          if (((c = a[b++]), c.name == "Conditions")) {
            c = c.children;
            let d = 0;
            for (; d < c.length; ) {
              let e = yc.kJa(c[d++]);
              this.ad.push(e);
            }
          }
    }
    init(a) {
      let b = 0,
        c = this.ad;
      for (; b < c.length; ) c[b++].init(a);
    }
    compare() {
      let a = 0,
        b = this.ad;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        let d = c.compare();
        c.cb && (d = !d);
        if (!d) return !1;
      }
      return !0;
    }
  }
  Ll.g = "E6";
  Object.assign(Ll.prototype, { j: Ll });
  class Ml {
    constructor() {
      this.cga = this.ou = null;
    }
    pCa(a) {
      let b = 0,
        c = this.ou.length;
      for (; b < c; ) {
        let d = b++;
        if (this.ou[d].label == a) return this.ou[d];
      }
      return null;
    }
  }
  Ml.g = "E7";
  Object.assign(Ml.prototype, { j: Ml });
  class Hu {
    constructor() {
      this.animation = this.OI = this.aEa = null;
    }
    wcb(a) {
      let b = this.OI.length - 1;
      return 0 < b && this.OI[0] <= a ? a < this.OI[b] : !1;
    }
    u0(a) {
      if (this.wcb(a)) {
        let b = 1,
          c = this.OI.length;
        for (; b < c; ) {
          let d = b++;
          if (a < this.OI[d]) return this.aEa[d - 1];
        }
      }
      return -1;
    }
  }
  Hu.g = "E8";
  Object.assign(Hu.prototype, { j: Hu });
  class Iu {
    constructor() {
      this.Sy = null;
    }
  }
  Iu.g = "E9";
  Object.assign(Iu.prototype, { j: Iu });
  class Nl {
    constructor() {
      this.animation = null;
      this.fS = m.l();
      this.gv = m.l();
    }
    clear() {
      this.gv.length = 0;
    }
    f8a(a) {
      let b = 0,
        c = 0,
        d = this.fS.length;
      for (; c < d; ) {
        if (a == this.fS[c++]) return b;
        ++b;
      }
      return -1;
    }
    SFa(a, b) {
      this.animation = a;
      this.beb(b, Lb.vl(b));
    }
    beb(a, b) {
      if (b > 0) {
        var c = this.Ckb(a);
        let e = this.fS.length;
        c = ((b - c) / 4) | 0;
        b = Array(c);
        for (var d = 0; d < c; ) b[d++] = Lb.vmb(a);
        d = a = 0;
        for (c = (c / e) | 0; d < c; )
          (++d, this.gv.push(tb.xD(b, a, e, tb.fAa)), (a += e));
      }
    }
    Ckb(a) {
      let b = 4,
        c = Lb.vl(a);
      this.fS.length = 0;
      let d,
        e = 0;
      for (; e < c; )
        (++e, (d = tb.kJ(a)), (b += d.length + 1), this.fS.push(d));
      return b;
    }
    Hea(a, b) {
      return a < this.gv.length && ((b = this.f8a(b)), -1 < b)
        ? m.N3a(this.gv, a)[b]
        : 0;
    }
  }
  Nl.g = "EA";
  Object.assign(Nl.prototype, { j: Nl });
  class Nd {
    constructor(a) {
      this.I8 = m.l();
      this.mpa = m.l();
      this.G8 = new Ca(new cc(), new cc());
      this.J$ = new Ca(new cc(), new cc());
      this.rN = new Ca(new cc(), new cc());
      this.Ru = new Ca(new cc(), new cc());
      this.Aqa = new cc();
      this.Dqa = new cc();
      this.Npa = new cc();
      this.rD = m.l();
      this.fF = m.l();
      this.BO = new cc();
      this.Gua = new cc();
      this.Fpa = new cc();
      this.yqa = new cc();
      this.fqa = new cc();
      this.name = "";
      this.RW = new Ju();
      this.type = 0;
      var b = a.attributes.get("Name");
      this.name = b != null ? b : "";
      b = a.attributes.get("Type");
      this.type = Nd.getType(b != null ? b : "");
      b = a.A("Memory");
      b != null &&
        ((this.RW.o6 = u.H(b.attributes.get("Strikes"))),
        (this.RW.Z4 = u.H(b.attributes.get("RoundFactor"))));
      b = a.A("UseDefense");
      b != null &&
        (this.fqa.parse(b.A("CounterAttackChance")),
        this.yqa.parse(b.A("DodgeChance")),
        this.Fpa.parse(b.A("BlockChance")));
      this.Gua.parse(a.A("UseSafeAttackChance"));
      this.BO.parse(a.A("TableAttackChance"));
      b = a.A("QuickAttacks");
      this.okb(b != null ? b : a.A("QuickAttacks21a"));
      b = a.A("Evades");
      this.Jjb(b != null ? b : a.A("Evades21a"));
      this.Npa.parse(a.A("CautiousMovementsChance"));
      this.Dqa.parse(a.A("DodgeMissilesChance"));
      this.Aqa.parse(a.A("DodgeMagicChance"));
      Nd.T3(a.A("DistanceError"), this.Ru);
      Nd.T3(a.A("FrameError"), this.rN);
      Nd.T3(a.A("ResponseDelay"), this.J$);
      Nd.T3(a.A("EnemyResponseDelay"), this.G8);
      b = a.A("AnimationWeights");
      if (b != null) {
        b = b.children;
        for (var c = 0; c < b.length; ) {
          var d = b[c++];
          if (d.name == "Animation") {
            var e = d.attributes.get("Name");
            let f = new cc();
            f.parse(d);
            this.mpa.push(new Ca(e != null ? e : "", f));
          }
        }
      }
      a = a.A("ExpectedWait");
      if (a != null)
        for (a = a.children, b = 0; b < a.length; )
          ((c = a[b++]),
            c.name == "Animation" &&
              ((d = c.attributes.get("Name")),
              (e = new cc()),
              e.parse(c),
              this.I8.push(new Ca(d != null ? d : "", e))));
    }
    n6a(a) {
      return this.fqa.Gb(a);
    }
    N6a(a) {
      return this.yqa.Gb(a);
    }
    O5a(a) {
      return this.Fpa.Gb(a);
    }
    G9a(a) {
      return this.Gua.Gb(a);
    }
    w9a(a) {
      return this.BO.Gb(a);
    }
    U5a(a) {
      return this.Npa.Gb(a);
    }
    P6a(a) {
      return this.Dqa.Gb(a);
    }
    O6a(a) {
      return this.Aqa.Gb(a);
    }
    Z6a(a, b) {
      if (a != null)
        for (var c = 0, d = this.I8; c < d.length; ) {
          var e = d[c];
          ++c;
          let f = e.first;
          if (f == null || f == "" || a.bl(e.first)) return e.second.Gb(b);
        }
      else
        for (a = 0, c = this.I8; a < c.length; )
          if (((d = c[a]), ++a, (e = d.first), e == null || e == ""))
            return d.second.Gb(b);
      return 1;
    }
    oL(a, b, c) {
      if (0 < a.length) {
        for (var d = 0, e = 0, f = a.length; e < f; ) {
          var g = a[e++];
          g == null && b != null && (g = b);
          g != null && (d += this.xCa(g, c));
        }
        if (0 < d)
          for (g = Da.rg.B4(d), e = d = 0, f = a.length; e < f; ) {
            let h = a[e++];
            h == null && b != null && (h = b);
            if (h != null) {
              g -= this.xCa(h, c);
              if (g < 0) return d;
              ++d;
            }
          }
      }
      return -1;
    }
    xCa(a, b) {
      let c = 0,
        d = this.mpa;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        let f = e.first;
        if (f == "" || a.bl(f)) return e.second.Gb(b, a.name);
      }
      return 0;
    }
    Iea(a) {
      return Nd.P0(this.Ru.first.Gb(a), this.Ru.second.Gb(a));
    }
    q0(a) {
      return Nd.P0(this.rN.first.Gb(a), this.rN.second.Gb(a)) | 0;
    }
    qfa(a) {
      return Nd.P0(this.J$.first.Gb(a), this.J$.second.Gb(a)) | 0;
    }
    Kea(a) {
      return Nd.P0(this.G8.first.Gb(a), this.G8.second.Gb(a)) | 0;
    }
    okb(a) {
      let b = this.fF.length;
      a = a.children;
      let c = 0;
      for (; c < a.length; ) {
        let d = a[c++];
        if (d.name == "QuickAttackChance") {
          let e = d.attributes.get("Animation");
          this.fF.push(new Ca("", new cc()));
          this.fF[b].first = e != null ? e : "";
          this.fF[b].second.parse(d);
          ++b;
        }
      }
    }
    Jjb(a) {
      let b = this.rD.length;
      a = a.children;
      let c = 0;
      for (; c < a.length; ) {
        let d = a[c++];
        if (d.name == "EvadeChance") {
          let e = d.attributes.get("Animation");
          this.rD.push(new Ca("", new cc()));
          this.rD[b].first = e != null ? e : "";
          this.rD[b].second.parse(d);
          ++b;
        }
      }
    }
    yqb(a) {
      for (var b = null, c = 0; c < a.length; ) {
        let d = a[c];
        ++c;
        d.names.length < 1 ||
          !d.compare() ||
          (b != null && b.priority > d.priority) ||
          (b = d);
      }
      if (b == null) return null;
      a = m.l();
      c = 0;
      for (b = b.names; c < b.length; ) a.push(b[c++]);
      return a;
    }
    static T3(a, b) {
      a != null && (b.first.parse(a.A("Min")), b.second.parse(a.A("Max")));
    }
    static getType(a) {
      return a == "Random" ? 1 : a == "Tabular" ? 2 : 0;
    }
    static P0(a, b) {
      return Da.rg.jT(a, b);
    }
  }
  Nd.g = "EB";
  Object.assign(Nd.prototype, { j: Nd });
  class Ju {
    constructor(a) {
      this.o6 = this.Z4 = 10;
      a != null && ((this.o6 = a.o6), (this.Z4 = a.Z4));
    }
  }
  Ju.g = "EC";
  Object.assign(Ju.prototype, { j: Ju });
  class Ue {
    constructor(a, b, c) {
      this.GZ = m.l();
      this.WGa = this.jQ = null;
      this.counter =
        this.Xb =
        this.A1 =
        this.B1 =
        this.EY =
        this.xf =
        this.wZ =
        this.Zya =
          0;
      this.T2 = b;
      this.el = c;
      this.i6 = a;
    }
  }
  Ue.g = "ED";
  Object.assign(Ue.prototype, { j: Ue });
  class cc {
    constructor() {
      this.Iqa = m.l();
      this.vsa = m.l();
      this.HM = m.l();
      this.J8 = 1;
      this.kq =
        this.m8 =
        this.w8 =
        this.ira =
        this.Jqa =
        this.fpa =
        this.$ra =
        this.msa =
        this.f9 =
        this.Rpa =
        this.xqa =
        this.JW =
        this.jV =
        this.Hk =
        this.aqa =
          0;
    }
    parse(a) {
      if (a != null) {
        this.kq = u.H(a.attributes.get("Base"));
        this.m8 = u.H(a.attributes.get("CounterFactor"));
        this.w8 = u.H(a.attributes.get("DamageFactor"));
        this.ira = u.H(a.attributes.get("HealthFactor"));
        this.Jqa = u.H(a.attributes.get("EnemyHealthFactor"));
        this.fpa = u.H(a.attributes.get("AnimationFramesFactor"));
        this.Rpa = u.H(a.attributes.get("ChildFramesFactor"));
        this.$ra = u.H(a.attributes.get("MagicBulletFactor"));
        this.msa = u.H(a.attributes.get("MissileBulletFactor"));
        this.f9 = u.H(a.attributes.get("HitFactor"));
        this.xqa = u.H(a.attributes.get("DistanceFactor"));
        this.Hk = u.H(a.attributes.get("Shift"));
        this.aqa = u.H(a.attributes.get("ConditionalDesigionFactor"));
        this.JW = u.H(a.attributes.get("Limit"));
        this.jV = u.H(a.attributes.get("AntiLimit"));
        var b = a.attributes.get("FactorType");
        this.wrb(b != null ? b : "");
        this.ejb(a);
      }
    }
    ejb(a) {
      let b = (this.HM.length = 0);
      a = a.children;
      let c = 0;
      for (; c < a.length; ) {
        var d = a[c++];
        if (d.name == "AnimationFactors") {
          this.HM.push(new Ca("", new cc()));
          var e = d.attributes.get("Animation");
          this.HM[b].first = e != null ? e : "";
          this.HM[b].second.parse(d);
          ++b;
        } else if (d.name == "CurrentAnimation") {
          var f = m.l();
          e = d.attributes.get("Animation");
          sa.Cz(e != null ? e : "", f);
          e = u.H(d.attributes.get("Factor"));
          d = d.attributes.get("Player");
          d = d != null ? d : "Me";
          let g = 0;
          for (; g < f.length; ) {
            let h = new Ca(f[g++], e);
            d == "Enemy" ? this.Iqa.push(h) : d == "Me" && this.vsa.push(h);
          }
        }
      }
    }
    Gb(a, b) {
      let c =
          a.counter * this.m8 +
          a.Xb * this.w8 +
          (1 - a.A1) * this.ira +
          (1 - a.B1) * this.Jqa +
          a.EY * this.fpa +
          a.el * this.$ra +
          a.T2 * this.msa +
          a.xf * this.f9 +
          a.wZ * this.Rpa +
          a.Zya * this.xqa +
          this.Hk,
        d = 0,
        e = this.HM;
      for (; d < e.length; ) {
        let f = e[d];
        ++d;
        let g = new ja(0),
          h = new ja(0),
          k = new ja(0);
        a.i6.l6a(f.first, g, h, k);
        c += g.G * f.second.m8 + h.G * f.second.w8 + k.G * f.second.f9;
      }
      c += this.AAa(a.WGa, this.vsa);
      c += this.AAa(a.jQ, this.Iqa);
      b != null && a.GZ.includes(b) && (c += this.aqa);
      return this.J8 == 0 ? this.fZa(c) : this.J8 == 1 ? this.iZa(c) : 0;
    }
    fZa(a) {
      return 0 <= a
        ? this.JW + (this.kq - this.JW) * Math.pow(2, -a)
        : this.jV + (this.kq - this.jV) * Math.pow(2, a);
    }
    iZa(a) {
      return 0 <= a
        ? this.kq + (this.JW - this.kq) * Math.min(1, a)
        : this.kq + (this.jV - this.kq) * Math.min(1, -a);
    }
    wrb(a) {
      this.J8 = a == "Linear" ? 1 : a == "Exponential" ? 0 : 1;
    }
    AAa(a, b) {
      let c = 0;
      for (; c < b.length; ) {
        let d = b[c];
        ++c;
        if (a == d.first) return d.second;
      }
      return 0;
    }
  }
  cc.g = "EE";
  Object.assign(cc.prototype, { j: cc });
  class Ku {
    constructor() {
      this.aea = 0;
      this.label = "";
      this.frames = null;
    }
    e7a(a) {
      a = this.g0(a);
      return -1 < a ? this.frames[a] : null;
    }
    g0(a) {
      a -= this.aea;
      return a < this.frames.length ? a : -1;
    }
  }
  Ku.g = "EF";
  Object.assign(Ku.prototype, { j: Ku });
  class tb {
    constructor() {
      this.LM = null;
      this.$V = this.naa = this.l9 = this.HV = 0;
    }
    load(a) {
      if (a.length > 0) {
        let b = m.l(),
          c = m.l();
        a = Lb.l(a);
        tb.rmb(a, b);
        tb.xmb(a, c);
        this.Pab(a, b, c);
      }
    }
    empty() {
      return this.$V == 0 || this.naa == 0 || this.l9 == 0 || this.HV == 0
        ? !0
        : !1;
    }
    Pab(a, b, c) {
      var d = Lb.vl(a);
      this.$V = Lb.vl(a);
      for (var e = [], f = 0, g = this.$V; f < g; ) (++f, e.push(new Ml()));
      f = 0;
      for (g = this.$V; f < g; ) e[f++] = new Ml();
      this.naa = Lb.vl(a);
      f = [];
      g = 0;
      for (var h = this.naa; g < h; ) (++g, f.push(new Ku()));
      this.l9 = Lb.vl(a);
      g = [];
      h = 0;
      for (var k = this.l9; h < k; ) (++h, g.push(new Iu()));
      var l = Lb.vl(a);
      h = [];
      for (k = 0; k < l; ) (++k, h.push(new Hu()));
      this.HV = Lb.vl(a);
      var n = Lb.vl(a);
      this.LM = m.l();
      for (k = 0; k < d; ) {
        ++k;
        var q = a.ie(),
          r = null;
        q < b.length && ((r = new Lu()), (r.animation = b[q]));
        this.LM.push(r);
      }
      k = a.Zd();
      d = [];
      q = 0;
      for (r = this.HV; q < r; ) (++q, d.push(0));
      q = 0;
      for (r = this.HV; q < r; ) d[q++] = k != 0 ? k * a.Zd() : a.Zd();
      k = [];
      for (q = 0; q < n; ) (++q, k.push(0));
      for (q = 0; q < n; ) k[q++] = a.wi();
      n = m.l();
      for (r = q = 0; r < l; ) (n.push(b[a.ie()]), n[r++] == null && ++q);
      b = m.l();
      for (l = 0; l < q; ) (++l, b.push(new jc()));
      let t = (r = q = l = 0),
        x = 0,
        z = 0,
        A = 0,
        C = this.LM;
      for (; A < C.length; ) {
        var B = C[A];
        ++A;
        var D = a.ie();
        B.animation == null && ((B.animation = new jc()), b.push(B.animation));
        B.container = tb.xD(e, l, D, tb.zab);
        l += D;
        let na = 0;
        for (B = B.container; na < B.length; ) {
          var F = B[na];
          ++na;
          F.cga = c[a.ie()];
          D = a.ie();
          F.ou = tb.xD(f, q, D, tb.xxb);
          q += D;
          let ka = 0;
          for (F = F.ou; ka < F.length; ) {
            var M = F[ka];
            ++ka;
            M.label = tb.kJ(a);
            D = a.ie();
            if (0 < D)
              for (
                M.frames = tb.xD(g, r, D, tb.$bb),
                  r += D,
                  M.aea = a.Zd(),
                  D = 0,
                  M = M.frames;
                D < M.length;

              ) {
                var Q = M[D];
                ++D;
                var U = a.ie();
                Q.Sy = tb.xD(h, x, U, tb.Zbb);
                if (0 < U) {
                  U = 0;
                  for (var W = Q.Sy; U < W.length; )
                    ((W[U++].animation = n[x]), ++x);
                  U = 0;
                  for (W = Q.Sy; U < W.length; ) {
                    var da = W[U++];
                    let qa = a.ie();
                    da.OI = tb.xD(d, t, qa, tb.fAa);
                    t += qa;
                  }
                  U = 0;
                  for (Q = Q.Sy; U < Q.length; )
                    ((W = Q[U++]),
                      (da = a.ie()),
                      (W.aEa = tb.xD(k, z, da, tb.Ubb)),
                      (z += da));
                }
              }
            else {
              debugger;
              M.frames = [];
              M.aea = 0;
            }
          }
        }
      }
      a = m.l();
      for (c = 0; c < b.length; )
        for (e = b[c++], f = 0, g = this.LM; f < g.length; )
          if (((h = g[f]), ++f, h.animation == e)) {
            a.push(h);
            break;
          }
      for (c = 0; c < a.length; ) J.remove(this.LM, a[c++]);
    }
    static rmb(a, b) {
      let c = a.ie(),
        d = Lb.fk(a, c),
        e = 0;
      for (; e < c; ) b.push(sa.Tea(Lb.iKa(a, d.b[e++])));
    }
    static xmb(a, b) {
      let c = a.Zd(),
        d = Lb.fk(a, c),
        e = 0;
      for (; e < c; ) b.push(Lb.iKa(a, d.b[e++]));
    }
    static xD(a, b, c, d) {
      if (c == 0) return d;
      d = a.slice(b, b + c);
      let e = [],
        f = b;
      for (b += c; f < b; ) e.push(a[f++]);
      return d;
    }
    static kJ(a) {
      let b = "",
        c = a.fa();
      for (; c != 0; ) ((b += String.fromCodePoint(c)), (c = a.fa()));
      return b;
    }
  }
  tb.g = "F0";
  Object.assign(tb.prototype, { j: tb });
  class Lu {
    constructor() {
      this.animation = this.container = null;
    }
  }
  Lu.g = "F1";
  Object.assign(Lu.prototype, { j: Lu });
  class Ti {
    static yxb(a, b) {
      if (a == null || a == "") a = "default";
      var c = Ti.b7a(a);
      if (b) return c;
      b = G.data;
      c = G.uf(c);
      c = b.v[c];
      if (c == null) return null;
      c = Pg.LI(c);
      for (c = Lb.l(mb.ll(c)); c.ca < c.UF; ) {
        b = Lb.vl(c);
        var d = tb.kJ(c);
        if (b != 7) {
          var e = Lb.vl(c);
          if (0 < e) {
            e = Lb.fk(c, e);
            var f = new tb();
            f.load(e, b, a);
            P.nva(f, d, d, b);
          }
        } else if (b == 7 && ((b = Lb.vl(c)), 0 < b))
          for (b = Lb.l(Lb.fk(c, b)), d = Lb.vl(b), e = 0; e < d; )
            (++e,
              (f = sa.Tea(tb.kJ(b))),
              f != null ? f.gU.SFa(f, b) : new Nl().SFa(null, b));
      }
      return null;
    }
    static zxb(a, b, c) {
      if (!Ti.wdb(a, b)) return null;
      var d = Ti.c7a(a, b);
      if (c) return d;
      c = G.data;
      d = G.uf(d);
      c = c.v[d];
      if (c == null) return null;
      c = Pg.LI(c);
      d = !1;
      for (c = Lb.l(mb.ll(c)); c.ca != c.UF; ) {
        let f,
          g,
          h = Lb.vl(c);
        if (P.i_a(a, b, h)) break;
        else Ld.ZFa.RL.wYa && !d && (d = !0);
        f = tb.kJ(c);
        g = tb.kJ(c);
        let k = null;
        var e = Lb.vl(c);
        e > 0 && (k = Lb.fk(c, e));
        e = new tb();
        e.load(k, h, g);
        P.nva(e, f, g, h);
      }
      return null;
    }
    static wdb(a, b) {
      return a == b || a == "" || (b != "" && a < b);
    }
    static b7a(a) {
      return "tactics/" + a.toLowerCase() + ".dat";
    }
    static c7a(a, b) {
      return "tactics/" + a.toLowerCase() + "_" + b.toLowerCase() + ".dat";
    }
  }
  Ti.g = "F2";
  class jh {
    static S0a(a) {
      a = a.A("Tactics");
      if (a != null) {
        let d = a.children,
          e = 0;
        for (; e < d.length; ) {
          let f = d[e++];
          if (f.name == "Tactic") {
            var b = f.attributes.get("Template");
            if (b != null) {
              var c = (b != null ? b : "").split("|");
              b = m.l();
              m.addRange(b, c);
              c = c.length;
              jh.snb(b);
              c > 0 && jh.afb(a, f, b);
              if (b.length != 0) {
                c = "";
                let g = 0;
                for (; g < b.length; ) c += b[g++] + "|";
                c != "" && (c = nf(c, c.length - 1));
                f.set("Template", c);
              }
            }
          }
        }
      }
    }
    static afb(a, b, c) {
      for (var d = 0; !(c.length <= d); ) {
        var e = jh.yfa(a, c[d]);
        if (
          e != null &&
          (jh.Q2(b, e),
          jh.Nha(b, e),
          (e = e.attributes.get("Template")),
          e != null)
        ) {
          let f = m.l();
          m.addRange(f, (e != null ? e : "").split("|"));
          m.Zaa(c, f);
        }
        d += 1;
      }
    }
    static yfa(a, b) {
      a = a.children;
      let c = 0;
      for (; c < a.length; ) {
        let d = a[c++];
        if (d.name == "Tactic") {
          let e = d.attributes.get("Name");
          if (b == (e != null ? e : "")) return d;
        }
      }
      return null;
    }
    static Q2(a, b) {
      var c;
      c == null && (c = !1);
      b = b.attributes.entries();
      let d = b.next();
      for (; !d.done; ) {
        var e = d.value;
        d = b.next();
        let f = e[0];
        e = e[1];
        a.attributes.get(f) == null ? a.set(f, e) : c && a.set(f, e);
      }
    }
    static Nha(a, b) {
      b = b.children;
      let c = 0;
      for (; c < b.length; ) {
        let d = b[c++];
        a.A(d.name) == null && a.Ts(d.clone());
      }
    }
    static snb(a) {
      let b = 0,
        c = a.length;
      for (; b < c; ) {
        let d = b++,
          e = d + 1;
        for (; e < a.length; ) (a[d] == a[e] && (m.ye(a, e), --e), ++e);
      }
    }
  }
  jh.g = "F3";
