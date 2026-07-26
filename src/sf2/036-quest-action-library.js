// 036-quest-action-library.js
// Domain: tree-ub  |  38 class(es)  |  tree root(s): ub, lz, fe, Zm, Yu, Tu, Wl, Wu, ee, Xi, Zu, zu, Au, Vc, fd, $u, Di, $m, Md, Ff, qt, xc
// Edit here. Run `npm run build` to reassemble the full bundle.
  class ub {
    constructor(a) {
      a == null && (a = 0);
      this.type = a;
      this.CC = this.Mi = this.rb = null;
      this.cb = !1;
      this.Pb = null;
    }
    compare(a) {
      return this.type == a.type ? !0 : !1;
    }
    init(a) {
      var b = a.attributes.get("Name");
      this.Mi = b != null ? b : "";
      b = a.attributes.get("Type");
      this.CC = b != null ? b : "";
      a.attributes.get("Stage");
      this.cb = u.ka(a.attributes.get("Not"), !1);
      b = a.attributes.get("Player");
      this.Pb = Od.ql(b != null ? b : "Me");
      this.parse(a);
    }
    parse() {}
    static X6a(a) {
      switch (a) {
        case "":
          return 0;
        case "AnimationEnd":
          return 10;
        case "AnimationInterrupted":
          return 11;
        case "AnimationStart":
          return 9;
        case "Birth":
          return 15;
        case "EveryFrame":
          return 14;
        case "Hit":
          return 6;
        case "IntervalEnd":
          return 13;
        case "IntervalStart":
          return 12;
        case "KeyPressed":
          return 2;
        case "KeyReleased":
          return 3;
        case "ModExpires":
          return 16;
        case "RoundEnd":
          return 5;
        case "RoundStage":
          return 1;
        case "RoundStart":
          return 4;
        case "Strike":
          return 7;
        case "WallHit":
          return 8;
        default:
          return 0;
      }
    }
    static BQ(a, b) {
      switch (b) {
        case 1:
          return a.cI;
        case 2:
          return a.G_;
        case 3:
          return a.P3;
        case 4:
          return a.vZ;
        case 6:
          return a.H_;
        default:
          return a.cI;
      }
    }
  }
  ub.g = "141";
  Object.assign(ub.prototype, { j: ub });
  class Mm extends ub {
    constructor() {
      super(10);
    }
    compare(a) {
      if (!super.compare(a)) return !1;
      let b = this.Mi;
      if (b == null || b == "") return !0;
      a = this.sR(ub.BQ(a.rb, this.Pb), this.Mi);
      return this.cb ? !a : a;
    }
    sR(a, b) {
      let c = 0,
        d = a.length;
      for (; c < d; ) if (a[c++] == b) return !0;
      return !1;
    }
  }
  Mm.g = "142";
  Mm.u = ub;
  Object.assign(Mm.prototype, { j: Mm });
  class Nm extends ub {
    constructor() {
      super(11);
    }
    compare(a) {
      if (!super.compare(a)) return !1;
      let b = this.Mi;
      if (b == null || b == "") return !0;
      a = this.sR(ub.BQ(a.rb, this.Pb), this.Mi);
      return this.cb ? !a : a;
    }
    sR(a, b) {
      let c = 0,
        d = a.length;
      for (; c < d; ) if (a[c++] == b) return !0;
      return !1;
    }
  }
  Nm.g = "143";
  Nm.u = ub;
  Object.assign(Nm.prototype, { j: Nm });
  class Om extends ub {
    constructor() {
      super(9);
    }
    compare(a) {
      if (!super.compare(a)) return !1;
      let b = this.Mi;
      if (b == null || b == "") return !0;
      a = this.sR(ub.BQ(a.rb, this.Pb), this.Mi);
      return this.cb ? !a : a;
    }
    sR(a, b) {
      let c = 0,
        d = a.length;
      for (; c < d; ) if (a[c++] == b) return !0;
      return !1;
    }
  }
  Om.g = "144";
  Om.u = ub;
  Object.assign(Om.prototype, { j: Om });
  class Pm extends ub {
    constructor() {
      super(15);
      this.Ba = "";
    }
    parse(a) {
      a = a.attributes.get("Name");
      this.Ba = a != null ? a : null;
    }
    compare(a) {
      if (!super.compare(a)) return !1;
      let b = this.Ba;
      if (b == null || b == "") return !0;
      a = this.Ba == a.model.ab();
      return this.cb ? !a : a;
    }
  }
  Pm.g = "145";
  Pm.u = ub;
  Object.assign(Pm.prototype, { j: Pm });
  class Qm extends ub {
    constructor() {
      super(14);
      this.eua = 1;
    }
    parse(a) {
      this.eua = u.I(a.attributes.get("Step"), 1);
    }
    compare(a) {
      if (!super.compare(a)) return !1;
      a = a.data;
      if (typeof a != "number" || (a | 0) !== a) a = 0;
      if (a < 0) return !1;
      a = a % this.eua == 0;
      return this.cb ? !a : a;
    }
  }
  Qm.g = "146";
  Qm.u = ub;
  Object.assign(Qm.prototype, { j: Qm });
  class Rm extends ub {
    constructor() {
      super(6);
    }
    compare(a) {
      if (!super.compare(a)) return !1;
      var b = !1;
      let c = a.model.Cb,
        d = this.CC;
      if (
        d == null ||
        d == "" ||
        (this.CC == "Critical" && c.se) ||
        (this.CC == "Shock" && c.Ub)
      )
        ((b = this.Mi),
          (b = b == null || b == "" || a.data == null || this.Mi == a.YC));
      return this.cb ? !b : b;
    }
  }
  Rm.g = "147";
  Rm.u = ub;
  Object.assign(Rm.prototype, { j: Rm });
  class Sm extends ub {
    constructor() {
      super(13);
      this.DC = 0;
    }
    compare(a) {
      if (!super.compare(a)) return !1;
      let b = a.data;
      a.data instanceof fe || (b = null);
      a = !1;
      if (b == null) return !1;
      if (this.DC == 0 || this.DC == b.type) {
        let c = this.Mi;
        if (c == null || c == "" || this.Mi == b.name) a = !0;
      }
      return this.cb ? !a : a;
    }
    parse(a) {
      a = a.attributes.get("Type");
      a = a != null ? a : "";
      this.DC =
        a == "Attack" ? 4 : a == "Block" ? 5 : a == "Invulnerable" ? 6 : 0;
    }
  }
  Sm.g = "148";
  Sm.u = ub;
  Object.assign(Sm.prototype, { j: Sm });
  class Tm extends ub {
    constructor() {
      super(12);
      this.DC = 0;
    }
    compare(a) {
      if (!super.compare(a)) return !1;
      a = a.data;
      a instanceof fe || (a = null);
      let b = !1;
      if (a == null) return !1;
      if (this.DC == 0 || this.DC == a.type) {
        let c = this.Mi;
        if (c == null || c == "" || this.Mi == a.name) b = !0;
      }
      return this.cb ? !b : b;
    }
    parse(a) {
      a = a.attributes.get("Type");
      a = a != null ? a : "";
      this.DC =
        a == "Attack" ? 4 : a == "Block" ? 5 : a == "Invulnerable" ? 6 : 0;
    }
  }
  Tm.g = "149";
  Tm.u = ub;
  Object.assign(Tm.prototype, { j: Tm });
  class Um extends ub {
    constructor() {
      super(2);
    }
    compare(a) {
      return super.compare(a);
    }
  }
  Um.g = "14A";
  Um.u = ub;
  Object.assign(Um.prototype, { j: Um });
  class Vm extends ub {
    constructor() {
      super(3);
      debugger;
    }
    compare(a) {
      debugger;
      return super.compare(a);
    }
  }
  Vm.g = "14B";
  Vm.u = ub;
  Object.assign(Vm.prototype, { j: Vm });
  class Wm extends ub {
    constructor() {
      super(16);
    }
    compare(a) {
      if (!super.compare(a)) return !1;
      a = a.data;
      typeof a != "string" && (a = "");
      a = this.Mi == a;
      return this.cb ? !a : a;
    }
  }
  Wm.g = "14C";
  Wm.u = ub;
  Object.assign(Wm.prototype, { j: Wm });
  class lz {
    static create(a) {
      switch (a.name) {
        case "AnimationEnd":
          a = new Mm();
          break;
        case "AnimationInterrupted":
          a = new Nm();
          break;
        case "AnimationStart":
          a = new Om();
          break;
        case "Birth":
          a = new Pm();
          break;
        case "EveryFrame":
          a = new Qm();
          break;
        case "Hit":
          a = new Rm();
          break;
        case "IntervalEnd":
          a = new Sm();
          break;
        case "IntervalStart":
          a = new Tm();
          break;
        case "KeyPressed":
          a = new Um();
          break;
        case "KeyReleased":
          a = new Vm();
          break;
        case "ModExpires":
          a = new Wm();
          break;
        case "RoundStageStart":
          a = new Xm();
          break;
        case "Strike":
          a = new Ym();
          break;
        default:
          throw 31;
      }
      return a;
    }
  }
  lz.g = "14D";
  class Xm extends ub {
    constructor() {
      super(1);
      this.aua = 0;
    }
    compare(a) {
      if (!super.compare(a)) return !1;
      a = a.data == this.aua;
      return this.cb ? !a : a;
    }
    parse() {
      this.aua = jz.lCa(this.Mi);
    }
  }
  Xm.g = "14E";
  Xm.u = ub;
  Object.assign(Xm.prototype, { j: Xm });
  class Ym extends ub {
    constructor() {
      super(7);
    }
    compare(a) {
      if (!super.compare(a)) return !1;
      var b = !1;
      let c = a.Pd.Cb,
        d = this.CC;
      if (
        d == null ||
        d == "" ||
        (this.CC == "Critical" && c.se) ||
        (this.CC == "Shock" && c.Ub)
      )
        ((b = this.Mi),
          (b = b == null || b == "" || a.data == null || this.Mi == a.YC));
      return this.cb ? !b : b;
    }
  }
  Ym.g = "14F";
  Ym.u = ub;
  Object.assign(Ym.prototype, { j: Ym });
  class fe {
    constructor(a) {
      this.Dva = 2147483647;
      this.finish = this.start = 0;
      this.name = null;
      this.type = a;
      this.kl = null;
    }
    parse(a) {
      this.kl = a;
      u.I(a.attributes.get("ID"), -1);
    }
    init() {
      this.name = this.kl.attributes.get("Name");
      this.name == "Unstable"
        ? (this.type = 1)
        : this.name == "Uninterrupt"
          ? (this.type = 2)
          : this.name == "SelfUninterrupt" && (this.type = 3);
      this.start = u.I(this.kl.attributes.get("Start"));
      this.finish =
        this.kl.attributes.get("End") != null
          ? u.I(this.kl.attributes.get("End"), 2147483647)
          : this.Dva + 2;
      this.S3();
      this.kl = null;
    }
    S3() {}
    static N0(a) {
      switch (a) {
        case "Attack":
          return 4;
        case "Block":
          return 5;
        case "Invisible":
          return 7;
        case "Invulnerable":
          return 6;
        default:
          return 0;
      }
    }
  }
  fe.g = "150";
  Object.assign(fe.prototype, { j: fe });
  class Yl extends fe {
    constructor() {
      super(4);
      this.uga = !1;
      this.u$ = new Zm();
      this.LV = new Zm();
      this.oEa = !1;
      this.Xb = 0;
      this.j3 = !1;
      this.KC = null;
      this.mR = this.lR = this.pw = 0;
      this.ig = new H(0, 0, 0, 1);
      this.zP = 0;
      this.jta = m.l();
      this.RDa = this.JL = !1;
      this.tga = this.sga = null;
      this.tba = m.l();
      this.ZZ = m.l();
      this.RP = m.l();
    }
    W8a(a) {
      let b = 0,
        c = this.jta;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.start <= a && a <= d.end) return d.name;
      }
      return "";
    }
    cM(a) {
      switch (a) {
        case 1:
          this.u$.cM();
          break;
        case 2:
          this.LV.cM();
          break;
        case 3:
          (this.u$.cM(), this.LV.cM());
      }
    }
    Mea(a) {
      switch (a) {
        case 1:
          return this.u$;
        case 2:
          return this.LV;
        default:
          return this.LV;
      }
    }
    S3() {
      this.JL = !u.ka(this.kl.attributes.get("NoEffect"), !1);
      var a = this.kl.A("IgnoresBlock");
      a != null &&
        ((this.RDa = !0),
        (a = a.attributes.get("Name")),
        (this.sga = mi(a != null ? a : "", "|")));
      a = this.kl.A("IgnoresInvulnerable");
      a != null &&
        ((this.uga = !0),
        (a = a.attributes.get("Name")),
        (this.tga = mi(a != null ? a : "", "|")));
      a = this.kl.A("AttackingParts");
      if (a != null) {
        a = a.children;
        for (var b = 0; b < a.length; ) {
          var c = a[b++].attributes.get("Name");
          this.tba.push(c != null ? c : "");
        }
      }
      this.oEa = this.tba.length > 0;
      a = this.kl.children;
      for (b = 0; b < a.length; ) {
        var d = a[b++];
        if (d.name == "Hit") {
          c = d.attributes.get("Name");
          let e = u.I(d.attributes.get("Start"), this.start);
          d = u.I(d.attributes.get("End"), this.finish);
          let f = new Yu("", -1, -1);
          f.name = c != null ? c : "";
          f.start = e;
          f.end = d;
          this.jta.push(f);
        }
      }
      a = this.kl.A("Impulse");
      a != null &&
        ((this.pw = u.H(a.attributes.get("X"))),
        (this.lR = u.H(a.attributes.get("Y"))),
        (this.mR = u.H(a.attributes.get("Z"))));
      this.zP =
        this.kl.A("Combo") == null
          ? 0
          : u.I(this.kl.A("Combo").attributes.get("Time"));
      a = this.kl.A("Damage");
      this.Xb = u.H(a.attributes.get("Value"));
      this.j3 = u.ka(a.attributes.get("NoCritical"), !1);
      b = a.attributes.get("BodyPart");
      this.KC = b != null ? b : "";
      this.Mjb(a);
    }
    Mjb(a) {
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        var c = a[b++];
        let e = c.name;
        var d = c.attributes.get("Type");
        d = d != null ? d : "";
        c = u.H(c.attributes.get("Shift"));
        e == "Damage"
          ? this.ZZ.push(new Ca(d, c))
          : e == "Defense" && this.RP.push(d);
      }
    }
  }
  Yl.g = "151";
  Yl.u = fe;
  Object.assign(Yl.prototype, { j: Yl });
  class Zm {
    constructor() {
      this.fp = this.bka = 1;
      this.PU = this.QU = !1;
    }
    cM() {
      this.PU && this.QU && (this.fp *= this.bka);
    }
  }
  Zm.g = "152";
  Object.assign(Zm.prototype, { j: Zm });
  class Yu {
    constructor(a, b, c) {
      this.name = a;
      this.start = b;
      this.end = c;
    }
  }
  Yu.g = "153";
  Object.assign(Yu.prototype, { j: Yu });
  class Tu {
    constructor(a) {
      this.Cl = new Wl();
      a = a.attributes.get("Name");
      this.name = a != null ? a : "";
    }
    sw(a, b, c) {
      b = b != null ? b : this.Cl.rb;
      c != null && ((a.VZ = c), (c.rb = a));
      for (c = 0; c < b.length; ) if (!b[c++].he(a)) return !1;
      return !0;
    }
    aA(a, b, c) {
      let d = 0;
      for (b = b != null ? b : this.Cl.rb; d < b.length; ) {
        let g = b[d];
        ++d;
        let h = g.fl;
        var e = g.bfa(a, h);
        if (e == null) return !1;
        var f = e.Fc;
        c != null && ((f.VZ = c), (c.rb = f));
        g.hla(1);
        f = !1;
        g.type == 8
          ? ((e = g), e != null && (f = e.vEa(a.Fc)))
          : (f = g.he(e.Fc));
        if (!f) return ((g.fl = h), !1);
        g.fl = h;
      }
      return !0;
    }
    Yaa(a) {
      this.Cl.XXa(a);
    }
    BF(a, b, c, d) {
      this.Gx(this.Cl.rb, a, b, c, d, null);
      let e = 0,
        f = this.Cl.actions;
      for (; e < f.length; ) {
        let g = f[e];
        ++e;
        g.type == 5 && g.mB(a, b, null, c, d);
      }
    }
    qI(a) {
      let b = 0;
      for (; b < a.length; ) {
        var c = a[b];
        ++b;
        c.type == 2
          ? c != null && c.Zo()
          : c.type == 21
            ? c != null && c.Zo()
            : c.type == 8 && c != null && this.qI(c.rb);
      }
    }
    Zo() {
      this.qI(this.Cl.rb);
      let a = 0,
        b = this.Cl.actions;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        c.type == 5 && c.yxa();
      }
    }
    Gx(a, b, c, d, e, f) {
      let g = 0;
      for (; g < a.length; ) {
        var h = a[g];
        ++g;
        if (h != null) {
          if (h.type == 2) {
            let k = h;
            k != null && k.mB(b, c, f, d, e);
          }
          h.type == 21
            ? h != null && h.mB(b, c, f, d, e)
            : h.type == 8 && h != null && this.Gx(h.rb, b, c, d, e, f);
        }
      }
    }
  }
  Tu.g = "154";
  Object.assign(Tu.prototype, { j: Tu });
  class Wl {
    constructor() {
      this.actions = m.l();
      this.locks = m.l();
      this.rb = m.l();
      this.Hc = m.l();
    }
    XXa(a) {
      m.addRange(this.Hc, a.Hc);
      m.addRange(this.rb, a.rb);
      m.addRange(this.actions, a.actions);
      m.addRange(this.locks, a.locks);
    }
  }
  Wl.g = "155";
  Object.assign(Wl.prototype, { j: Wl });
  class Wu {
    constructor(a) {
      this.Gaa = !1;
      this.rG = this.rV = this.qV = null;
      this.parse(a);
    }
    parse(a) {
      if (a != null) {
        var b = a.attributes.get("Player");
        b = b != null ? b : "Null";
      } else b = "Null";
      this.pe = Od.ql(b);
      b = a.attributes.get("RootPoint");
      this.xta = b != null ? b : null;
      b = a.attributes.get("AttachPoint");
      this.wpa = b != null ? b : null;
      a.attributes.get("StartRotAngle");
      b = Yy(a.attributes.get("OffsetVector"));
      this.xpa = b != null ? b : new H(0, 0, 0, 1);
      this.bVa = u.ka(a.attributes.get("IsMirrored"));
    }
    rzb(a) {
      let b = this.mfa(a.Fc);
      b != null &&
        (b != this.qV && ((this.qV = b), this.LBa()),
        this.bVa &&
          a.da.xw != this.Gaa &&
          (a.da.xw
            ? (this.W7a(a), (this.Gaa = !0))
            : (this.LBa(), (this.Gaa = !1))));
    }
    LBa() {
      this.rG = this.qV.Qg.Ic(this.xta);
      this.rV = this.qV.Qg.Ic(this.wpa);
    }
    W7a(a) {
      debugger;
      a = a.pa;
      let b = a.D0(this.xta),
        c = a.D0(this.wpa);
      b = a.SQ(b);
      c = a.SQ(c);
      if (b != -1 || c != -1)
        ((this.rG = a.Va.all[b]), (this.rV = a.Va.all[c]));
    }
    update(a, b) {
      debugger;
      this.rzb(a);
      if (this.rV != null && this.rG != null) {
        var c = this.rV.ma,
          d = this.rG.ma,
          e = c.x - d.x;
        d = c.y - d.y;
        c = this.xpa;
        c.y = this.xpa.y * a.jd();
        a = Math.sqrt(e * e + d * d) + c.x;
        c = 0 * Math.sqrt(e * e + d * d) + c.y;
        e = Math.atan2(d, e);
        d = a * Math.sin(e) + c * Math.cos(e);
        var f = this.rG.ma.y;
        b = b.node.Jb;
        b.translate.x = this.rG.ma.x + (a * Math.cos(e) - c * Math.sin(e));
        b.translate.y = f + d;
        b.U = (b.U & -2) | 240;
      }
    }
    mfa(a) {
      debugger;
      switch (this.pe) {
        case 0:
        case 1:
          return a.Pb;
        case 2:
          return a.Pd;
        case 3:
          return a.e4;
        case 4:
          return a.cf;
        case 6:
          return a.Jda;
        default:
          return a.Pb;
      }
    }
  }
  Wu.g = "156";
  Object.assign(Wu.prototype, { j: Wu });
  class ee {
    constructor(a) {
      this.Pb = new Xi();
      this.dZ = new Xi();
      this.LC = m.l();
      this.cF = m.l();
      this.mx = this.nx = 0;
      this.e8 = this.part = null;
      this.Bga = !1;
      this.frame = this.object = this.pe = 0;
      a != null && this.Jj(a);
    }
    Jj(a) {
      if (a != null) {
        var b = a.attributes.get("Player");
        b = b != null ? b : "Null";
      } else b = "Null";
      this.pe = Od.ql(b);
      b = a != null ? a.attributes.get("Object") : null;
      this.object = ta.MQ(1, b != null ? b : "");
      b = a != null ? a.attributes.get("Part") : null;
      this.part = b != null ? b : "";
      this.object == 3 && (this.Bga = this.part == "Back");
      this.frame = 1;
      b = a != null ? a.attributes.get("Frame") : null;
      if ((b = b != null ? (b != null ? b : "") == "Previous" : !1))
        this.frame = 2;
      if (this.pe == 6 || this.pe == 4)
        ((b = a.attributes.get("ChildSkeletSybType")),
          (this.e8 = b != null ? b : null));
      this.mx = a != null ? u.H(a.attributes.get("ShiftX"), 0) : 0;
      this.nx = a != null ? u.H(a.attributes.get("ShiftY"), 0) : 0;
    }
    Zs(a, b, c) {
      this.pe = Od.ql(a);
      this.object = ta.MQ(1, b);
      this.object == 3 && (this.Bga = c == "Back");
      this.frame = 1;
      this.nx = this.mx = 0;
    }
    TQ(a) {
      return this.tt(a).x;
    }
    lfa(a) {
      return this.tt(a).y * -1;
    }
    I8a(a) {
      return this.tt(a).z;
    }
    tt(a) {
      var b = this.mfa(a),
        c = new H(0, 0, 0, 1);
      switch (this.object) {
        case 1:
          return (
            (b = this.RQ(a)),
            b != null && ((c = this.kfa(b)), (c = new H(c.x, c.y, c.z, 1))),
            (c.x += this.mx * a.Zl),
            (c.y -= this.nx),
            (c.z = 0),
            c
          );
        case 2:
          return (
            (b = this.D8a(a)),
            b != null && ((c = this.kfa(b)), (c = new H(c.x, c.y, c.z, 1))),
            (c.x += this.mx * a.Zl),
            (c.y -= this.nx),
            c
          );
        case 3:
          return (
            (c = this.M9a(a, b)),
            (c.x += this.mx * a.sign),
            (c.y -= this.nx),
            new H(c.x, c.y, 0, 1)
          );
        case 4:
          return new H(this.mx, -this.nx, 0, 1);
        case 5:
          return (
            (a = ca.Ka()),
            (a = a != null ? a.location : null),
            a == null
              ? new H(this.mx, -this.nx, 0, 1)
              : new H(a.DCa().x + this.mx, -a.DCa().y - this.nx, 0, 1)
          );
        case 6:
          return (
            (b = b.Qg.Ju),
            (c = this.kfa(b)),
            (c.x += this.mx * a.sign),
            (c.y -= this.nx),
            c
          );
        default:
          return new H(0, 0, 0, 1);
      }
    }
    lB(a, b, c, d, e) {
      let f = null;
      if (d) {
        d = !1;
        b = b ? this.cF : this.LC;
        let g = 0,
          h = b.length;
        for (; g < h; ) {
          let k = g++;
          if (b[k].xZ == e) {
            f = b[k].ck;
            d = !0;
            break;
          }
        }
        d || ((e = new Zu(e)), b.push(e), (f = e.ck));
      } else f = b ? this.Pb : this.dZ;
      this.object == 1 && (f.node = a.Ic(this.part));
      f.Yd = c;
    }
    M9a(a, b) {
      let c = 0;
      switch (this.pe) {
        case 0:
        case 1:
          c = a.Zl;
          break;
        case 2:
          c = a.Xla;
          break;
        case 3:
          c = a.Yla;
      }
      return c > 0 == this.Bga ? b.Du : b.Eu;
    }
    D8a(a) {
      let b = this.QBa(a).Yd;
      if (b != null) {
        let d = b.TE;
        if (d != null) {
          var c = a.Zl;
          a = a.dI;
          c = b.ma.x * c > d.ma.x * c;
          if ((a == 1 && !c) || (a == 2 && c)) b = d;
        }
      } else
        switch (this.pe) {
          case 0:
          case 1:
            b = a.rJa;
            break;
          case 2:
            b = a.sza;
            break;
          case 3:
            b = a.QIa;
            break;
          default:
            b = null;
        }
      return b;
    }
    RQ(a) {
      a = this.QBa(a);
      return a == null ? null : a.node;
    }
    mfa(a) {
      switch (this.pe) {
        case 0:
        case 1:
          return a.Pb;
        case 2:
          return a.Pd;
        case 3:
          return a.e4;
        case 6:
          return a.Jda;
        default:
          return a.Pb;
      }
    }
    kfa(a) {
      switch (this.frame) {
        case 1:
          return a.ma;
        case 2:
          return a.rf;
        default:
          return a.ma;
      }
    }
    QBa(a) {
      if (a.oE && this.pe != 2) return this.a6a(a);
      switch (this.pe) {
        case 0:
        case 1:
          return a.qb ? this.Pb : this.dZ;
        case 2:
          return a.qb ? this.dZ : this.Pb;
        case 3:
          return null;
        case 6:
          return this.Zza(a, a.qb ? this.LC : this.cF);
        default:
          return null;
      }
    }
    Zza(a, b) {
      var c = ca.Ka();
      if (c == null) return null;
      a = a.qb ? c.zb : c.pb;
      if (a == null) return null;
      a = a.ff(6);
      if (a == null) return null;
      for (c = 0; c < b.length; ) {
        let e = b[c];
        ++c;
        if (e.xZ != a.pa) continue;
        let f = e.xZ.model.parameters.Fd(I.Ux);
        var d = void 0;
        f != null ? ((d = this.e8), (d = d == null || d == "")) : (d = !0);
        if (!d && f.Yb == this.e8) return e.ck;
      }
      return null;
    }
    a6a(a) {
      let b = a.Pb.Qg,
        c;
      switch (this.pe) {
        case 0:
        case 1:
          c = a.qb ? this.cF : this.LC;
          break;
        case 2:
          c = a.qb ? this.LC : this.cF;
          break;
        case 3:
          return a.qb ? this.Pb : this.dZ;
        case 6:
          return ((c = a.qb ? this.LC : this.cF), this.Zza(a, c));
        default:
          return null;
      }
      a = 0;
      let d = c.length;
      for (; a < d; ) {
        let e = a++;
        if (c[e].xZ == b) return c[e].ck;
      }
      return null;
    }
    $y() {
      var a = this.cF;
      a != null && a.length != 0 && (this.cF.length = 0);
      a = this.LC;
      a != null && a.length != 0 && (this.LC.length = 0);
    }
  }
  ee.g = "157";
  Object.assign(ee.prototype, { j: ee });
  class Xi {
    constructor() {
      this.node = this.Yd = null;
    }
  }
  Xi.g = "158";
  Object.assign(Xi.prototype, { j: Xi });
  class Zu {
    constructor(a) {
      this.ck = new Xi();
      this.xZ = a;
    }
  }
  Zu.g = "159";
  Object.assign(Zu.prototype, { j: Zu });
  class zu {
    constructor(a, b) {
      this.gb = 0;
      this.name = null;
      this.length = this.nGa = this.oGa = 0;
      this.jcb = this.vc = !1;
      this.Oda = new Ck(0, 0, 0);
      this.Zi = null;
      this.CZ = !1;
      this.KC = null;
      this.Zda = new H(0, 0, 0, 1);
      this.ema = new H(0, 0, 0, 1);
      this.xx = a;
      this.oU = a.ma;
      this.et = b;
      this.wQ = b.ma;
    }
    iw() {
      return this.xx.ma;
    }
    pFa() {
      if (this.xx.fA || this.et.fA) {
        var a = this.xx.weight,
          b = this.et.weight,
          c = this.xx.ma,
          d = this.et.ma,
          e = d.x - c.x,
          f = d.y - c.y,
          g = d.z - c.z;
        e = this.length / Math.sqrt(e * e + f * f + g * g);
        f = (1 - e) / (a + b);
        a *= f;
        g = b * f;
        b = c.x * a + d.x * g;
        f = c.y * a + d.y * g;
        a = c.z * a + d.z * g;
        this.xx.fA &&
          ((c.x *= e),
          (c.y *= e),
          (c.z *= e),
          (c.x += b),
          (c.y += f),
          (c.z += a));
        this.et.fA &&
          ((d.x *= e),
          (d.y *= e),
          (d.z *= e),
          (d.x += b),
          (d.y += f),
          (d.z += a));
      }
    }
    JKa() {
      this.gob();
      Wy(this.iw(), this.et.ma, this.Oda);
    }
    gob() {
      let a = this.iw(),
        b = this.et.ma;
      Vy(a, b, this.nGa, this.ema);
      Vy(a, b, 1 - this.oGa, this.Zda);
    }
  }
  zu.g = "15A";
  Object.assign(zu.prototype, { j: zu });
  class Au {
    constructor(a, b) {
      this.Ba = a.name;
      this.qGa = u.H(a.attributes.get("Margin1"));
      this.pGa = u.H(a.attributes.get("Margin2"));
      this.stroke = u.H(a.attributes.get("Radius1")) * 2;
      this.oU = b.oU;
      this.wQ = b.wQ;
    }
    n2a(a) {
      let b = new dd(this.Ba),
        c = b.LWa();
      c.Etb(this);
      a.od(b);
      return c;
    }
  }
  Au.g = "15B";
  Object.assign(Au.prototype, { j: Au });
  class Vc {
    constructor(a, b) {
      this.qJa =
        this.Ira =
        this.WG =
        this.oy =
        this.UG =
        this.QPa =
        this.GN =
        this.fA =
        this.vc =
        this.nEa =
        this.hFa =
        this.Pga =
          !1;
      this.cAa = this.TG = !0;
      this.oh = !1;
      this.id = this.YPa = this.weight = this.Vva = this.hI = 0;
      this.rf = new H(0, 0, 0, 1);
      this.ma = new H(0, 0, 0, 1);
      this.A8 = new H(0, 0, 0, 1);
      this.TE = null;
      this.name = a;
      b == null && (b = new H(0, 0, 0, 1));
      this.A8 = new H(b.x, b.y, b.z, 1);
      a = this.ma;
      a.x = b.x;
      a.y = b.y;
      a.z = b.z;
      a = this.rf;
      a.x = b.x;
      a.y = b.y;
      a.z = b.z;
      this.eNa(0);
    }
    RCa() {
      let a = this.A8;
      return new H(a.x, a.y, a.z, 1);
    }
    Ttb(a) {
      let b = this.A8;
      b.x = a.x;
      b.y = a.y;
      b.z = a.z;
    }
    aB(a) {
      let b = this.ma;
      b.x = a.x;
      b.y = a.y;
      b.z = a.z;
    }
    Fla(a) {
      let b = this.rf;
      b.x = a.x;
      b.y = a.y;
      b.z = a.z;
    }
    qp() {
      return this.uc;
    }
    eNa(a) {
      this.uc = a;
      this.oh = a == 0;
      this.oy = this.WG && this.oh;
      this.UG = this.TG || !this.oh;
    }
    vla(a) {
      this.UG = (this.TG = a) || !this.oh;
    }
    ZMa(a) {
      this.Ira = this.oy = (this.WG = a) && this.oh;
    }
    gg() {
      return this.GN;
    }
    R(a) {
      this.GN = a;
    }
    reset() {
      var a = this.ma,
        b = this.RCa();
      a.x = b.x;
      a.y = b.y;
      a.z = b.z;
      a = this.rf;
      b = this.RCa();
      a.x = b.x;
      a.y = b.y;
      a.z = b.z;
      this.ZMa(this.qJa);
      this.hI = this.Vva;
      this.weight = this.YPa;
      this.vla(this.cAa);
      this.R(this.QPa);
    }
    Kob() {
      this.oh && (this.oy = this.Ira);
    }
    uxb() {
      this.oh && (this.oy = !1);
    }
    q4() {
      let a = this.rf,
        b = this.ma;
      a.x = b.x;
      a.y = b.y;
      a.z = b.z;
    }
    uk(a) {
      var b = Vc.BC,
        c = this.ma;
      b.x = c.x;
      b.y = c.y;
      b.z = c.z;
      b = Vc.BC;
      c = this.rf;
      b.x -= c.x;
      b.y -= c.y;
      b.z -= c.z;
      this.oy &&
        ((b = Vc.BC), (c = 1 - this.hI), (b.x *= c), (b.y *= c), (b.z *= c));
      b = Vc.BC;
      c = this.ma;
      b.x += c.x;
      b.y += c.y;
      b.z += c.z;
      Vc.BC.y += a;
      a = this.rf;
      b = this.ma;
      a.x = b.x;
      a.y = b.y;
      a.z = b.z;
      a = this.ma;
      b = Vc.BC;
      a.x = b.x;
      a.y = b.y;
      a.z = b.z;
    }
    toString() {
      return (
        "ModelNode(name = [" + this.name + "] c_pos= [" + K.T(this.ma) + "])"
      );
    }
  }
  Vc.g = "15C";
  Object.assign(Vc.prototype, { j: Vc });
  class Jl extends Vc {
    constructor(a, b) {
      super(a, b);
      this.eNa(1);
      this.dca = m.l();
      this.children = m.l();
    }
    oXa(a, b) {
      this.children.push(new Ca(a, b));
    }
    Oeb() {
      if (this.Pga) this.Pga = !1;
      else {
        var a = this.rf,
          b = this.ma;
        a.x = b.x;
        a.y = b.y;
        a.z = b.z;
        a = this.ma;
        a.x = 0;
        a.y = 0;
        a.z = 0;
        a = this.children.length;
        for (b = 0; b < a; ) {
          var c = this.children[b++];
          var d = this.ma,
            e = c.first.ma;
          c = c.second;
          d.x += e.x * c;
          d.y += e.y * c;
          d.z += e.z * c;
        }
      }
    }
  }
  Jl.g = "15D";
  Jl.u = Vc;
  Object.assign(Jl.prototype, { j: Jl });
  class Dl extends fd {
    constructor() {
      super();
      this.If = m.l();
      this.Re = 0;
      this.Bg = new zd();
      this.YV = new zd();
      let a = (this.kX = 0);
      for (; a < 150; ) {
        let b = new $u();
        b.code = b.index = a++ + 1;
        b.ul = !1;
        this.If.push(b);
      }
    }
    lub(a) {
      this.Bg = a.Ib();
      this.YV = a.Ib();
    }
    ia() {
      this.Re == 30 && (this.Bg.clear(), (this.Re = 0));
      this.kX >= 15 && (this.kX = this.Bg.th.length = 0);
      this.NLa();
      this.kX++;
      this.Re++;
    }
    reset() {
      this.YV.clear();
      this.Bg.clear();
      let a = (this.Bg.th.length = 0),
        b = this.If.length;
      for (; a < b; ) this.If[a++].ul = !1;
    }
    nhb(a) {
      a = this.getKey(a);
      if (a != null && !a.ul) {
        a.ul = !0;
        this.kX = 0;
        for (this.Bg.th.push(a.index); this.Bg.th.length > 2; )
          m.ye(this.Bg.th, 0);
        this.Bg.clear();
        this.NLa();
        this.Bg.kv = this.J8a(this.Bg.th, this.Bg.Hh);
        this.Fwa();
      }
    }
    shb(a) {
      a = this.getKey(a);
      a != null &&
        ((a.ul = !1),
        !this.Bg.th.includes(a.index) &&
          this.Bg.Hh.includes(a.index) &&
          (this.Bg.released.push(a.index),
          J.remove(this.Bg.Hh, a.index),
          this.oZa()));
    }
    Vea() {
      this.YV.set(this.Bg);
      return this.YV;
    }
    Fwa() {
      this.hh(0, this.Bg);
    }
    oZa() {
      this.hh(1, this.Bg);
    }
    getKey(a) {
      let b = 0,
        c = this.If;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.code == a) return d;
      }
      return null;
    }
    NLa() {
      let a = (this.Bg.Hh.length = 0),
        b = this.If;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        c.ul && this.Bg.Hh.push(c.index);
      }
    }
    J8a(a, b) {
      if (a.length == 1) return 0;
      let c = 0;
      for (; c < a.length; ) {
        let d = a[c++],
          e = 0,
          f = b;
        for (; e < f.length; ) if (d == f[e++]) return 0;
      }
      return 1;
    }
  }
  Dl.g = "15E";
  Dl.u = fd;
  Object.assign(Dl.prototype, { j: Dl });
  class $u {
    constructor() {
      this.ul = !1;
      this.code = this.index = 0;
    }
  }
  $u.g = "15F";
  Object.assign($u.prototype, { j: $u });
  class Di {
    constructor() {
      this.VP = 2;
      this.fp = this.shift = this.priority = 0;
    }
    static R7a(a) {
      let b = -2147483648,
        c = 0,
        d = a.length;
      for (; c < d; ) {
        let e = c++;
        b < a[e].priority && (b = a[e].priority);
      }
      return b;
    }
    static u5a(a, b) {
      let c = Di.R7a(a),
        d = 0,
        e = a.length;
      for (; d < e; ) {
        let f = d++;
        a[f].priority == c && b.push(a[f]);
      }
    }
  }
  Di.g = "160";
  Object.assign(Di.prototype, { j: Di });
  class $m {
    constructor() {
      this.attributes = m.l();
      this.nI = null;
      this.weight = 0;
      this.attrName = null;
    }
    Sia(a) {
      var b = a.attributes.get("Name");
      this.attrName = b != null ? b : null;
      this.weight = u.H(a.attributes.get("Weight"));
      b = a.attributes.get("CancellingItem");
      this.nI = b != null ? b : null;
      Ff.TIa(a, this.attributes);
    }
    static Ria(a, b) {
      a = a.children;
      let c = 0;
      for (; c < a.length; ) {
        let d = a[c++];
        if (d.name == "Defense") {
          let e = new $m();
          e.Sia(d);
          b.push(e);
        }
      }
    }
  }
  $m.g = "161";
  Object.assign($m.prototype, { j: $m });
  class Md {
    constructor() {
      this.Rf =
        this.Hd =
        this.kg =
        this.Mg =
        this.lg =
        this.Ng =
        this.wp =
        this.lr =
        this.Dt =
          null;
    }
    compare(a) {
      return a.kg == this.kg &&
        a.Mg == this.Mg &&
        a.Rf == this.Rf &&
        a.Hd == this.Hd &&
        a.Ng == this.Ng &&
        a.wp == this.wp &&
        a.lr == this.lr
        ? a.lg == this.lg
        : !1;
    }
  }
  Md.g = "162";
  Object.assign(Md.prototype, { j: Md });
  class Ff {
    constructor() {
      this.shift = 0;
      this.name = null;
    }
    Ria(a) {
      let b = a.attributes.get("Name");
      this.name = b != null ? b : null;
      this.shift = u.H(a.attributes.get("Shift"));
    }
    static TIa(a, b) {
      Ff.Sia(a, b, "Attribute");
    }
    static kjb(a, b) {
      b.AYa = u.H(a.attributes.get("AverageQuantity"));
    }
    static jjb(a, b) {
      b.Yva = u.H(a.attributes.get("AverageBaseDamage"));
      b.Cmb = u.H(a.attributes.get("RechargeRate"));
      b.Iha = u.H(a.attributes.get("MagicRechargeRate"));
    }
    static Sia(a, b, c) {
      a = a.children;
      let d = 0;
      for (; d < a.length; ) {
        let e = a[d++];
        if (e.name == c) {
          let f = new Ff();
          f.Ria(e);
          b.push(f);
        }
      }
    }
  }
  Ff.g = "163";
  Object.assign(Ff.prototype, { j: Ff });
  class qt {
    constructor() {
      this.eb = this.kK = !1;
      this.name = null;
    }
  }
  qt.g = "164";
  Object.assign(qt.prototype, { j: qt });
  class xc {
    constructor(a) {
      this.fW = !1;
      this.ZE = m.l();
      this.FK = m.l();
      this.dKa = this.BFa = this.$ha = null;
      this.eS = m.l();
      this.jK = m.l();
      this.items = m.l();
      this.Pv = m.l();
      this.sx = m.l();
      this.PY = m.l();
      this.groups = m.l();
      if (a != null) {
        this.Oa = m.Ib(a.Oa);
        this.FK = m.Ib(a.FK);
        this.ZE = m.Ib(a.ZE);
        this.attributes = ud.Bz(a.attributes);
        this.lM = ud.Bz(a.lM);
        this.level = a.level;
        this.ft = a.ft;
        this.Kf = a.Kf;
        this.xba = a.xba;
        this.wba = a.wba;
        this.Rf = a.Rf;
        this.Hd = a.Hd;
        this.kg = a.kg;
        this.Mg = a.Mg;
        this.lg = a.lg;
        this.Ng = a.Ng;
        m.addRange(this.sx, a.sx);
        this.qb = a.qb;
        this.Gj = a.Gj;
        this.Bu = a.Bu;
        this.zd = a.zd;
        this.mh = a.mh;
        this.hr = a.hr;
        this.jE = a.jE;
        this.WD = a.WD;
        this.Oq = a.Oq;
        this.number = a.number;
        this.ao = a.ao;
        this.qg = a.qg;
        this.w6 = a.w6;
        this.LP = a.LP;
        this.UU = a.UU;
        this.F4 = a.F4;
        this.Xb = a.Xb;
        this.a_ = a.a_;
        this.T_ = a.T_;
        this.WP = a.WP;
        this.vga = a.vga;
        this.SOa = this.qR = a.qR;
        this.voice = a.voice;
        this.kK = a.kK;
        this.Gc = a.Gc;
        this.oh = a.oh;
        this.node = a.node;
        this.uw = a.uw;
        this.vba = a.vba;
        let b = a.position;
        this.position = new H(b.x, b.y, b.z, 1);
        this.random = a.random;
        this.Dt = a.Dt;
        this.yJ = a.yJ;
        this.un = a.un;
        this.wl = a.wl;
        this.f4 = a.f4;
        this.J_ = a.J_;
        this.ija = a.ija;
        this.Mda = a.Mda;
        this.jja = a.jja;
        this.Nda = a.Nda;
        this.hd = a.hd;
        this.eB = a.eB;
        this.T5 = a.T5;
        this.Fba = a.Fba;
        this.lP = a.lP;
        this.PY = m.Ib(a.PY);
        this.Pv = m.Ib(a.Pv);
      } else
        ((this.ft = this.node = null),
          (this.level = 0),
          (this.Oa = m.l()),
          (this.attributes = new ud()),
          (this.lM = new ud()),
          (this.Kf = ""),
          (this.xba = 1),
          (this.wba = 0.5),
          (this.Ng = this.lg = this.Mg = this.kg = this.Hd = this.Rf = null),
          (this.qb = !1),
          (this.Gj = !0),
          (this.hr = this.mh = this.zd = this.Bu = !1),
          (this.WD = this.jE = !0),
          (this.Oq = 0),
          (this.number = 1),
          (this.Xb =
            this.F4 =
            this.UU =
            this.LP =
            this.w6 =
            this.qg =
            this.ao =
              0),
          (this.T_ = this.a_ = 1),
          (this.vga = this.WP = 0),
          (this.SOa = this.qR = !1),
          (this.voice = ""),
          (this.kK = !1),
          (this.Gc = null),
          (this.uw = this.oh = !1),
          (this.vba = 0),
          (this.position = new H(-100, -100, -100, 1)),
          (this.random = 0),
          (this.Dt = null),
          (this.un = this.yJ = !1),
          (this.wl = 0),
          (this.Nda = this.jja = this.Mda = this.ija = this.J_ = this.f4 = -1),
          (this.hd = 0),
          (this.T5 = this.eB = -1),
          (this.Fba = null),
          (this.lP = 100));
    }
    hXa(a) {
      m.cd(this.items, a);
    }
    zXa(a) {
      m.cd(this.FK, a);
    }
    Uea() {
      let a = m.l(),
        b = this.Fd(I.Ux);
      b != null && a.push(b);
      b = this.Fd(I.xg);
      b != null && a.push(b);
      b = this.Fd(I.Xh);
      b != null && a.push(b);
      b = this.Fd(I.Ff);
      b != null && a.push(b);
      b = this.Fd(I.Jm);
      b != null && a.push(b);
      b = this.Fd(I.Ci);
      b != null && a.push(b);
      b = this.Fd(I.Di);
      b != null && a.push(b);
      b = this.Fd(I.aUa);
      b != null && a.push(b);
      return a;
    }
    qt() {
      let a = m.l();
      this.Rf != null && a.push(this.Rf);
      this.Hd != null && a.push(this.Hd);
      this.lg != null && a.push(this.lg);
      this.Ng != null && a.push(this.Ng);
      this.kg != null && a.push(this.kg);
      this.Mg != null && a.push(this.Mg);
      return a;
    }
    Fd(a) {
      switch (a) {
        case I.Ci:
          return this.kg;
        case I.Di:
          return this.Mg;
        case I.Ux:
          return this.Rf;
        case I.xg:
          return this.Hd;
        case I.Ff:
          return this.Ng;
        case I.Xh:
          return this.lg;
        default:
          return null;
      }
    }
    ik(a, b) {
      switch (a) {
        case I.Ci:
          this.kg = b;
          break;
        case I.Di:
          this.Mg = b;
          break;
        case I.Ux:
          this.Rf = b;
          break;
        case I.xg:
          this.Hd = b;
          break;
        case I.Ff:
          this.Ng = b;
          break;
        case I.Xh:
          this.lg = b;
      }
    }
    iM() {
      this.sx.length = 0;
      if (this.Rf != null) {
        var a = this.Rf.model;
        a = !(a == null || a == "");
      } else a = !1;
      a && this.sx.push(this.QQ(this.Rf.model));
      this.Hd != null
        ? ((a = this.Hd.model), (a = !(a == null || a == "")))
        : (a = !1);
      a && this.sx.push(this.QQ(this.Hd.model));
      this.kg != null
        ? ((a = this.kg.model), (a = !(a == null || a == "")))
        : (a = !1);
      a && this.sx.push(this.QQ(this.kg.model));
      this.Mg != null
        ? ((a = this.Mg.model), (a = !(a == null || a == "")))
        : (a = !1);
      a && this.sx.push(this.QQ(this.Mg.model));
      a = 0;
      let b = this.Pv.length;
      for (; a < b; ) this.sx.push(this.QQ(this.Pv[a++].model));
    }
    G7a(a, b, c) {
      c.G = !1;
      let d = 0,
        e = 0,
        f = b.length;
      for (; e < f; ) {
        let g = new ja(0);
        b[e++].attributes.get(a, g) && ((c.G = !0), (d += g.G));
      }
      return d;
    }
    A8a(a, b) {
      let c = 0,
        d = 0,
        e = this.Oa.length;
      for (; d < e; ) {
        let f = new ja(0);
        this.Oa[d++].attributes.get(a, f) && ((b.G = !0), (c += f.G));
      }
      return c;
    }
    Hm() {
      this.d0a();
      let a = this.qt(),
        b = v.ho.attributes,
        c = 0,
        d = b.length;
      for (; c < d; ) {
        let g = c++,
          h = b[g].name;
        var e = new ja(0);
        if (this.lM.get(h, e)) {
          this.attributes.set(h, e.G, !0);
          continue;
        }
        let k = new ja(!1);
        e = this.G7a(h, a, k);
        e += this.A8a(h, k);
        var f = new ja(0);
        v.XNa.QY.get(h, f) && ((e += f.G), (k.G = !0));
        f = new ja(0);
        v.JFa.QY.get(h, f) && ((e += this.level * f.G), (k.G = !0));
        (!k.G && b[g].iEa) || this.attributes.set(h, e, !0);
      }
    }
    Yk() {
      let a = m.l();
      m.addRange(a, this.FK);
      m.addRange(a, this.ZE);
      let b = 0,
        c = this.qt();
      for (; b < c.length; ) {
        let g = c[b];
        ++b;
        let h = g.type == I.xg;
        for (var d = 0, e = g.Oa; d < e.length; ) {
          var f = e[d];
          ++d;
          f.ZP = h;
          a.push(f);
        }
        if (!g.kE && this.qb && p.o.xa.te(g) != null)
          for (d = 0, e = p.GD(g, this.qb); d < e.length; )
            ((f = e[d]),
              ++d,
              f.Yh == 0
                ? g.type == I.xg && v.$z(f) && ((f.ZP = h), a.push(f))
                : ((f.ZP = h), a.push(f)));
      }
      this.Xja(a, this.eS);
      return a;
    }
    $ma() {
      this.Oa.length = 0;
      m.addRange(this.Oa, this.Yk());
      this.Xja(this.Oa, this.eS);
    }
    QQ(a) {
      return a;
    }
    NBa(a) {
      debugger;
      let b = new ja(0);
      return this.attributes.get(a, b) ? b.G : -3.4028234663852886e38;
    }
    XBa(a, b) {
      let c = 0,
        d = m.l(),
        e = 0,
        f = xc.D$;
      for (; e < f.length; ) {
        var g = f[e];
        ++e;
        if (g.nodeName == "Damage") {
          if (this.BDa(g.nI)) continue;
          var h = g.Yva;
          d.length = 0;
          this.AWa(d, g.attributes);
          this.Isb(d, b);
          var k = g.RP;
          this.Jsb(a, k, b);
          let B = 0;
          for (var l = 0; l < k.length; ) {
            let D = k[l];
            ++l;
            if (this.BDa(D.nI)) continue;
            let F = Math.min(
              1,
              h * v.sea(this.qb, this, a, d, D.attributes[0].name),
            );
            for (var n = 0, q = this.Yk(); n < q.length; ) {
              var r = q[n];
              ++n;
              var t = r.G4;
              if (t.length == 0) continue;
              for (var x = 0; x < t.length; ) {
                var z = t[x];
                ++x;
                if (z.Pb != "Me") continue;
                var A = void 0;
                A = z.Xb;
                A == null || A == "" || z.Xb == g.attrName
                  ? ((A = z.Zi),
                    (A = A == null || A == "" || z.Zi == D.attrName))
                  : (A = !1);
                if (A) {
                  A = 0;
                  var C = xc.nX;
                  if (C != null && C != "") {
                    debugger;
                    C = new Ia();
                    r.zma(xc.nX) && (A = hy(C.G));
                  }
                  F *= 1 + (z.gf - 1) * Be.oea(A - a.NBa(z.kQ));
                }
              }
            }
            n = 0;
            for (q = a.Yk(); n < q.length; ) {
              r = q[n];
              ++n;
              t = r.G4;
              if (t.length == 0) continue;
              for (x = 0; x < t.length; ) {
                z = t[x];
                ++x;
                if (z.Pb != "Enemy") continue;
                A = z.Xb;
                A == null || A == "" || z.Xb == g.attrName
                  ? ((A = z.Zi),
                    (A = A == null || A == "" || z.Zi == D.attrName))
                  : (A = !1);
                if (A) {
                  A = 0;
                  C = xc.nX;
                  if (C != null && C != "") {
                    debugger;
                    C = new Ia();
                    r.zma(xc.nX) && (A = hy(C.G));
                  }
                  F /= 1 + (z.gf - 1) * Be.oea(A - a.NBa(z.kQ));
                }
              }
            }
            B += D.weight * F;
          }
          g.Iha > 0 &&
            ((g = g.Iha),
            (h = v.mA.q8a()),
            (l = v.mA.E6a()),
            (B *= g * (h * v.mA.MBa(this) + l * v.mA.XAa(this))));
          c += B;
        }
      }
      return c;
    }
    BDa(a) {
      let b = 0,
        c = this.qt();
      for (; b < c.length; ) if (c[b++].name == a) return !0;
      return !1;
    }
    Isb(a, b) {
      if (b != null)
        for (var c = 0; c < b.length; ) {
          var d = b[c];
          ++c;
          let e = d.first;
          d = d.second;
          let f = 0,
            g = a.length;
          for (; f < g; ) {
            let h = f++;
            if (a[h].first == e) {
              a[h] = new Ca(a[h].first, a[h].second + d);
              break;
            }
          }
        }
    }
    Jsb(a, b, c) {
      if (c != null)
        for (var d = 0; d < c.length; ) {
          var e = c[d];
          ++d;
          let f = e.first;
          e = e.second;
          let g = 0,
            h = b.length;
          for (; g < h; ) {
            let k = 0,
              l = b[g++].attributes;
            for (; k < l.length; )
              if (l[k++].name == f) {
                let n = new ja(0);
                a.attributes.get(f, n);
                a.attributes.set(f, (n.G + e) | 0);
              }
          }
        }
    }
    Xja(a, b) {
      let c = 0;
      for (; c < b.length; ) {
        let d = b[c++],
          e = a.length - 1;
        for (; e >= 0; ) (this.N0a(a[e], d) && m.ye(a, e), --e);
      }
    }
    N0a(a, b) {
      return a == null ? !1 : a.bdb(b);
    }
    x$a() {
      return this.groups.length > 0;
    }
    PMa(a) {
      this.fW = a;
    }
    iu(a) {
      this.hd = this.fW ? this.ao : a < 0 ? 0 : a > this.ao ? this.ao : a;
    }
    Vaa(a) {
      this.iu(this.hd + a);
    }
    AWa(a, b) {
      let c = 0;
      for (; c < b.length; ) {
        let d = b[c];
        ++c;
        a.push(new Ca(d.name, d.shift));
      }
    }
    S$a() {
      return this.hd / this.ao;
    }
    Tfa() {
      return this.hd <= 0;
    }
    pT(a) {
      a == null && (a = 1);
      let b = this.hd;
      b = Math.min(b + a, this.ao);
      b = Math.max(0, b);
      this.iu(b);
    }
    Qob() {
      this.iu(this.ao);
    }
    clone() {
      return new xc(this);
    }
    d0a() {
      this.attributes.clear();
    }
    Am(a) {
      a.kg = this.kg;
      a.Mg = this.Mg;
      a.Dt = this.Dt;
      a.Rf = this.Rf;
      a.Hd = this.Hd;
      a.Ng = this.Ng;
      a.lg = this.lg;
    }
    qD(a) {
      this.kg = a.kg;
      this.Mg = a.Mg;
      this.Dt = a.Dt;
      this.Rf = a.Rf;
      this.Hd = a.Hd;
      this.Ng = a.Ng;
      this.lg = a.lg;
    }
    nMa(a, b) {
      b == null && (b = 0);
      let c = p.o,
        d = 0;
      for (; d < a.length; ) {
        var e = a[d];
        ++d;
        if (b > 0 && !e.pI(b)) continue;
        var f = e.Zf;
        if (f == null) continue;
        var g = f.ab();
        if (g == null || g == "") continue;
        var h = c.xa.Rj(g);
        if (h == null) {
          if (((g = p.items.$b(g)), g == null)) continue;
        } else g = h.ib;
        (g != null && c.xa.Qcb(g)) || e.TV || (g = null);
        if (g != null) {
          h = new ja(null);
          let l = new ja(null);
          if (g.type == I.p7) this.Pv.push(g);
          else if (e.EC || e.mc() == 2)
            (e.Zf.Ce > 0
              ? (g.Au(p.o.bb(), e.Zf.Ce, h, l),
                h.G == null && (h.G = g.clone()),
                (h.G.kE = !0),
                this.ik(g.type, h.G))
              : ((e = g.clone()), (e.kE = !0), this.ik(g.type, e)),
              f.ib.Oa.length > 0 && m.addRange(this.Fd(g.type).Oa, f.ib.Oa));
          else {
            var k = c.xa.te(v.hw().Fd(g.type));
            e.Zf.Ce > 0
              ? g.Au(p.o.bb(), e.Zf.Ce, h, l)
              : c.xa.Rj(g.name) != null
                ? g.Au(p.o.bb(), k.Ce, h, l)
                : g.Au(
                    p.o.bb(),
                    p.o.bb() >= v.h1()
                      ? p.o.bb() * 100 + 40
                      : (p.o.bb() + 1) * 100,
                    h,
                    l,
                  );
            e = g;
            f = h.G;
            h = k;
            f == null && (f = e.clone());
            f.kE = !0;
            g = 0;
            for (h = h.be; g < h.length; )
              ((k = h[g]),
                ++g,
                k.Yh == 0
                  ? f.type == I.xg && v.$z(k) && ((k.ZP = !0), f.Oa.push(k))
                  : f.Oa.push(k));
            this.ik(e.type, f);
          }
        }
      }
    }
    i3a() {
      let a = 0,
        b = this.Oa;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        c.ZP && (c.isActive = !1);
      }
    }
    Job() {
      let a = 0,
        b = this.Oa;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        c != null && (c.isActive = !0);
      }
    }
    Pua(a) {
      let b = 0,
        c = a.length;
      for (; b < c; ) {
        var d = a[b++];
        let e = d.first;
        d = d.second;
        let f = new ja(0);
        this.attributes.get(e, f) && this.attributes.set(e, (f.G + d) | 0);
      }
    }
    z$a() {
      return this.Ng != null ? this.Ng.name != v.Gea("Magic") : !1;
    }
    B$a() {
      return this.lg != null ? this.lg.name != v.Gea("Ranged") : !1;
    }
    w2a(a, b) {
      if (a != null) {
        let c = 0,
          d = a.length;
        for (; c < d; ) if (a[c++] == "Fists") return b * this.T_;
      }
      return b;
    }
    static Wkb(a) {
      a.attributes.get("ImpossibleRatio");
      a.attributes.get("EasyRatio");
      xc.D$.length = 0;
      xc.nX = a.attributes.get("PerkAspectParameter");
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        let d = a[b++],
          e = new av();
        xc.D$.push(e);
        e.nodeName = d.name;
        var c = d.attributes.get("Name");
        e.attrName = c != null ? c : null;
        Ff.TIa(d, e.attributes);
        Ff.kjb(d, e);
        Ff.jjb(d, e);
        c = d.attributes.get("CancellingItem");
        e.nI = c != null ? c : null;
        $m.Ria(d, e.RP);
      }
    }
  }
  xc.g = "165";
  Object.assign(xc.prototype, { j: xc });
  class Il extends xc {
    constructor(a) {
      super(a);
      this.lr = this.wp = null;
    }
    Fd(a, b) {
      if (a == I.Jm) {
        if (b == I.BM) return this.wp;
        if (b == I.Koa) return this.lr;
      }
      return super.Fd(a, b);
    }
    ik(a, b) {
      a == I.Jm &&
        (b.Yb == I.BM ? (this.wp = b) : b.Yb == I.Koa && (this.lr = b));
      super.ik(a, b);
    }
    qt() {
      let a = super.qt();
      this.wp != null && a.push(this.wp);
      this.lr != null && a.push(this.lr);
      return a;
    }
    Hm() {}
    Am(a) {
      debugger;
      super.Am(a);
      a.wp = this.wp;
      a.lr = this.lr;
    }
    qD(a) {
      debugger;
      super.qD(a);
      this.wp = a.wp;
      this.lr = a.lr;
    }
  }
  Il.g = "166";
  Il.u = xc;
  Object.assign(Il.prototype, { j: Il });
