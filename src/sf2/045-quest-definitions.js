// 045-quest-definitions.js
// Domain: tree-Kf  |  42 class(es)  |  tree root(s): Kf, Fp, Iw, It, Nj, Be, Lw, xe, id, Nw, Mw, Jw, If, fd
// Edit here. Run `npm run build` to reassemble the full bundle.
  class Kf {
    constructor(a) {
      this.Pb = 1;
      this.cb = !1;
      a != null && ((this.cb = a.cb), (this.Pb = a.Pb), (this.Wa = a.Wa));
    }
    parse(a) {
      let b = a.attributes.get("Player");
      this.Pb = this.jfa(b != null ? b : "");
      this.cb = u.I(a.attributes.get("Not")) != 0;
    }
    jfa(a) {
      return a == null || a == "" || a == "Me" ? 1 : a == "Enemy" ? 2 : 0;
    }
    bCa(a) {
      switch (a) {
        case "EndStance":
          return 3;
        case "Fight":
          return 2;
        case "StartStance":
          return 1;
        default:
          return 0;
      }
    }
  }
  Kf.g = "2B2";
  Object.assign(Kf.prototype, { j: Kf });
  class ec extends Kf {
    constructor() {
      super();
      this.info = null;
      this.type = 0;
    }
    Nh(a) {
      return this.Pb == 1 ? a : this.Pb == 2 ? a.jb : null;
    }
    static create(a, b) {
      let c = m.l();
      if (a == null) return c;
      a = a.children;
      let d = 0;
      for (; d < a.length; ) {
        let f = a[d++];
        var e = void 0;
        e = f.name;
        if (Qa.yD(e) != 0) e = new op();
        else
          switch (e) {
            case "Bullets":
              e = new pp();
              break;
            case "Combo":
              e = new qp();
              break;
            case "CurrentAnimation":
              e = new rp();
              break;
            case "CurrentInterval":
              e = new sp();
              break;
            case "Health":
              e = new tp();
              break;
            case "InTheArea":
              e = new up();
              break;
            case "Item":
              e = new vp();
              break;
            case "MagicCharge":
              e = new wp();
              break;
            case "ModExists":
              e = new xp();
              break;
            case "Operator":
              e = new yp();
              break;
            case "Pain":
              e = new zp();
              break;
            case "PerkStart":
              e = new Ap(b.name);
              break;
            case "Random":
              e = new Bp();
              break;
            case "Round":
              e = new Cp();
              break;
            case "RoundStage":
              e = new Dp();
              break;
            case "Style":
              e = new Ep();
              break;
            default:
              e = null;
          }
        e != null && ((e.Wa = b), e.parse(f), c.push(e));
      }
      return c;
    }
  }
  ec.g = "2B3";
  ec.u = Kf;
  Object.assign(ec.prototype, { j: ec });
  class Ze extends ec {
    constructor() {
      super();
      this.jh = new Qa();
    }
    isEqual(a) {
      a = this.Nh(a) != null;
      this.jh.Yy = ((T = this.Wa), w(T, T.Ye));
      this.jh.Us = ((T = this.Wa), w(T, T.Ze));
      return a;
    }
  }
  Ze.g = "2B4";
  Ze.u = ec;
  Object.assign(Ze.prototype, { j: Ze });
  class op extends Ze {
    constructor() {
      super();
      this.type = 17;
    }
    parse(a) {
      super.parse(a);
      let b = new Fb();
      b.M += "?Compare[";
      var c = a.attributes.get("Value1");
      b.M += c != null ? c : "";
      b.M += ",";
      c = a.attributes.get("Value2");
      b.M += c != null ? c : "";
      b.M += ",";
      b.M += a.name;
      b.M += "]";
      this.jh.parse(b.M);
      this.jh.target = this;
    }
    isEqual(a, b) {
      super.isEqual(a, b);
      return this.jh.Wb().Zn() > 0;
    }
  }
  op.g = "2B5";
  op.u = Ze;
  Object.assign(op.prototype, { j: op });
  class Bp extends Ze {
    constructor() {
      super();
      this.type = 1;
    }
    parse(a) {
      super.parse(a);
      a = a.attributes.get("Chance");
      this.jh.parse(a != null ? a : "");
      this.jh.target = this;
    }
    isEqual(a, b) {
      super.isEqual(a, b);
      return Da.iT(this.jh.Wb().uu() * 100);
    }
  }
  Bp.g = "2B6";
  Bp.u = Ze;
  Object.assign(Bp.prototype, { j: Bp });
  class Oc extends ec {
    constructor() {
      super();
      this.Cg = new Hw();
    }
    EE(a) {
      return (!this.Cg.Mga && this.Cg.min > a) ||
        (!this.Cg.Lga && this.Cg.max < a)
        ? !1
        : !0;
    }
  }
  Oc.g = "2B7";
  Oc.u = ec;
  Object.assign(Oc.prototype, { j: Oc });
  class Ep extends Oc {
    constructor() {
      super();
      this.type = 2;
    }
    parse(a) {
      debugger;
      super.parse(a);
      var b = a.attributes.get("Min");
      b = this.nCa(b != null ? b : "");
      a = a.attributes.get("Max");
      a = this.nCa(a != null ? a : "");
      this.Cg.Wb();
      b != -1 && ((this.Cg.min = b), (this.Cg.Mga = !1));
      a != -1 && ((this.Cg.max = a), (this.Cg.Lga = !1));
    }
    nCa(a) {
      debugger;
      switch (a) {
        case "Aggressive":
          return 3;
        case "Brutal":
          return 2;
        case "Crazy":
          return 4;
        case "Fantastic":
          return 5;
        case "Hard":
          return 1;
        case "Turtle":
          return 0;
        default:
          return -1;
      }
    }
    isEqual(a) {
      debugger;
      a = this.Nh(a);
      return a == null ? !1 : this.EE(a.iz);
    }
  }
  Ep.g = "2B8";
  Ep.u = Oc;
  Object.assign(Ep.prototype, { j: Ep });
  class qp extends Oc {
    constructor() {
      super();
      debugger;
      this.type = 3;
    }
    parse(a) {
      debugger;
      super.parse(a);
      this.Cg.parse(a, this, this.Wa);
    }
    isEqual(a) {
      debugger;
      let b = this.Nh(a);
      if (a == null) return !1;
      this.Cg.Wb();
      return this.EE(b.fw());
    }
  }
  qp.g = "2B9";
  qp.u = Oc;
  Object.assign(qp.prototype, { j: qp });
  class Dp extends ec {
    constructor() {
      super();
      this.Ke = 0;
      this.type = 4;
    }
    parse(a) {
      super.parse(a);
      a = a.attributes.get("Name");
      this.Ke = this.bCa(a != null ? a : "");
    }
    isEqual(a) {
      let b = this.Nh(a);
      return a == null || (this.Ke != 0 && this.Ke != b.Ke) ? !1 : !0;
    }
  }
  Dp.g = "2BA";
  Dp.u = ec;
  Object.assign(Dp.prototype, { j: Dp });
  class rp extends Oc {
    constructor() {
      super();
      this.name = null;
      this.type = 5;
    }
    parse(a) {
      super.parse(a);
      let b = a.attributes.get("Name");
      this.name = b != null ? b : "";
      this.Cg.parse(a, this, this.Wa);
    }
    isEqual(a) {
      let b = this.Nh(a);
      if (a == null) return !1;
      a = b.Tj();
      if (a == null || !a.bl(this.name)) return !1;
      this.Cg.Wb();
      return this.EE(b.mp());
    }
  }
  rp.g = "2BB";
  rp.u = Oc;
  Object.assign(rp.prototype, { j: rp });
  class sp extends ec {
    constructor() {
      super();
      this.Yz = this.rw = null;
      this.type = 6;
    }
    parse(a) {
      super.parse(a);
      let b = a.attributes.get("Name");
      this.rw = b != null ? b : "";
      a = a.attributes.get("Type");
      this.Yz = a != null ? a : "";
    }
    isEqual(a) {
      var b = this.Nh(a);
      if (a == null) return !1;
      a = b.X0();
      b = fe.N0(this.Yz);
      let c = this.rw == "",
        d = b == 0,
        e = 0;
      for (; e < a.length; ) {
        let f = a[e];
        ++e;
        c || this.rw != f.name || (c = !0);
        d || b != f.type || (d = !0);
      }
      return c ? d : !1;
    }
  }
  sp.g = "2BC";
  sp.u = ec;
  Object.assign(sp.prototype, { j: sp });
  class tp extends Oc {
    constructor() {
      super();
      this.type = 7;
    }
    parse(a) {
      super.parse(a);
      this.Cg.parse(a, this, this.Wa);
    }
    isEqual(a) {
      let b = this.Nh(a);
      if (a == null) return !1;
      this.Cg.Wb();
      return this.EE(b.parameters.hd);
    }
  }
  tp.g = "2BD";
  tp.u = Oc;
  Object.assign(tp.prototype, { j: tp });
  class zp extends Oc {
    constructor() {
      super();
      this.type = 13;
    }
    parse(a) {
      debugger;
      super.parse(a);
      this.Cg.parse(a, this, this.Wa);
    }
    isEqual(a) {
      debugger;
      let b = this.Nh(a);
      if (a == null) return !1;
      this.Cg.Wb();
      return this.EE(b.yr);
    }
  }
  zp.g = "2BE";
  zp.u = Oc;
  Object.assign(zp.prototype, { j: zp });
  class vp extends ec {
    constructor() {
      super();
      this.Yb = this.uc = this.name = null;
      this.type = 8;
    }
    parse(a) {
      super.parse(a);
      var b = a.attributes.get("Name");
      this.name = b != null ? b : "";
      b = a.attributes.get("Type");
      this.uc = b != null ? b : "";
      a = a.attributes.get("Subtype");
      this.Yb = a != null ? a : "";
    }
    isEqual(a) {
      var b = this.Nh(a);
      if (a == null) return !1;
      a = 0;
      for (b = b.parameters.Uea(); a < b.length; ) {
        let c = b[a];
        ++a;
        if (this.uc == "" || this.uc == c.type)
          if (this.Yb == "" || this.Yb == c.Yb)
            if (this.name == "" || this.name == c.name) return !0;
      }
      return !1;
    }
  }
  vp.g = "2BF";
  vp.u = ec;
  Object.assign(vp.prototype, { j: vp });
  class Cp extends Ze {
    constructor() {
      super();
      this.type = 9;
    }
    parse(a) {
      super.parse(a);
      a = a.attributes.get("Number");
      this.jh.parse(a != null ? a : "");
      this.jh.target = this;
    }
    isEqual(a) {
      debugger;
      let b = this.Nh(a);
      if (a == null) return !1;
      a = Uy(this.jh.Wb().result);
      return b.round != a ? !1 : !0;
    }
  }
  Cp.g = "2C0";
  Cp.u = Ze;
  Object.assign(Cp.prototype, { j: Cp });
  class pp extends Oc {
    constructor() {
      super();
      this.uc = null;
      this.type = 10;
    }
    parse(a) {
      super.parse(a);
      this.Cg.parse(a, this, this.Wa);
      a = a.attributes.get("Type");
      this.uc = a != null ? a : "";
    }
    isEqual(a) {
      debugger;
      let b = this.Nh(a);
      if (a == null) return !1;
      if (this.uc == "MagicBullet") a = b.dh;
      else if (this.uc == "RaidChargeBullet") a = b.jO;
      else return !1;
      this.Cg.Wb();
      return this.EE(a);
    }
  }
  pp.g = "2C1";
  pp.u = Oc;
  Object.assign(pp.prototype, { j: pp });
  class wp extends Oc {
    constructor() {
      super();
      this.type = 11;
    }
    parse(a) {
      debugger;
      super.parse(a);
      this.Cg.parse(a, this, this.Wa);
    }
    isEqual(a) {
      debugger;
      let b = this.Nh(a);
      if (a == null) return !1;
      this.Cg.Wb();
      return this.EE(b.sy);
    }
  }
  wp.g = "2C2";
  wp.u = Oc;
  Object.assign(wp.prototype, { j: wp });
  class xp extends ec {
    constructor() {
      super();
      this.Jd = this.name = null;
      this.type = 12;
    }
    parse(a) {
      super.parse(a);
      let b = a.attributes.get("Name");
      this.name = b != null ? b : "";
      a = a.attributes.get("Namespace");
      this.Jd = a != null ? a : "";
    }
    isEqual(a, b) {
      if (this.Jd != "" && bc.q_a(this.name, this.Jd)) return !0;
      this.Nh(a);
      if (a == null || b == null) return !1;
      for (a = 0; a < b.length; ) if (this.name == b[a++]) return !0;
      return !1;
    }
  }
  xp.g = "2C3";
  xp.u = ec;
  Object.assign(xp.prototype, { j: xp });
  class up extends ec {
    constructor() {
      super();
      this.type = 15;
    }
    isEqual(a) {
      let b = this.Nh(a);
      return a == null ? !1 : b.wR;
    }
  }
  up.g = "2C4";
  up.u = ec;
  Object.assign(up.prototype, { j: up });
  class Ap extends ec {
    constructor() {
      super();
      this.type = 16;
    }
    isEqual() {
      return !0;
    }
  }
  Ap.g = "2C5";
  Ap.u = ec;
  Object.assign(Ap.prototype, { j: Ap });
  class yp extends ec {
    constructor() {
      super();
      this.jv = 0;
      this.rb = m.l();
      this.type = 14;
    }
    parse(a) {
      super.parse(a);
      this.jv = 0;
      var b = a.attributes.get("Type");
      b = b != null ? b : "";
      b == "Or" ? (this.jv = 1) : b == "And" && (this.jv = 2);
      this.rb = ec.create(a, this.Wa);
    }
    isEqual(a, b) {
      if (a == null) return !1;
      let c = 0,
        d = this.rb;
      for (; c < d.length; ) {
        var e = d[c];
        ++c;
        let f = e.isEqual(a, b);
        e = e.cb ? !f : f;
        if (this.jv == 2 && !e) return !1;
        if (this.jv == 1 && e) return !0;
      }
      return this.jv != 1;
    }
  }
  yp.g = "2C6";
  yp.u = ec;
  Object.assign(yp.prototype, { j: yp });
  class Fp {
    constructor(a, b) {
      b == null && (b = !0);
      this.nb = a;
      this.enabled = b;
    }
  }
  Fp.g = "2C7";
  Object.assign(Fp.prototype, { j: Fp });
  class Ac extends Kf {
    constructor(a) {
      super();
      this.type = 0;
      a != null && (this.type = a.type);
    }
    isEqual(a) {
      return (this.Pb == 1 && a.GI != a.sk) || (this.Pb == 2 && a.GI == a.sk)
        ? !1
        : a.type == this.type;
    }
    parse(a) {
      super.parse(a);
      switch (a.name) {
        case "AnimationEnd":
          a = 10;
          break;
        case "AnimationInterrupted":
          a = 11;
          break;
        case "AnimationStart":
          a = 9;
          break;
        case "AreaEnter":
          a = 15;
          break;
        case "AreaExit":
          a = 16;
          break;
        case "Combo":
          a = 4;
          break;
        case "EveryFrame":
          a = 2;
          break;
        case "HitPostCrit":
          a = 6;
          break;
        case "HitPreCrit":
          a = 5;
          break;
        case "IntervalEnd":
          a = 13;
          break;
        case "IntervalStart":
          a = 12;
          break;
        case "MagicCharged":
          a = 8;
          break;
        case "ModExpires":
          a = 14;
          break;
        case "PostHit":
          a = 7;
          break;
        case "RoundStageStart":
          a = 1;
          break;
        case "Style":
          a = 3;
          break;
        default:
          a = 0;
      }
      this.type = a;
    }
    static create(a, b) {
      let c = m.l();
      if (a != null) {
        a = a.children;
        let d = 0;
        for (; d < a.length; ) {
          let e = a[d++],
            f;
          switch (e.name) {
            case "AnimationEnd":
              f = new Lj();
              break;
            case "AnimationStart":
              f = new Lj();
              break;
            case "AreaEnter":
              f = new Gh();
              break;
            case "AreaExit":
              f = new Gh();
              break;
            case "EveryFrame":
              f = new Gp();
              break;
            case "HitPostCrit":
              f = new Hh();
              break;
            case "HitPreCrit":
              f = new Hh();
              break;
            case "IntervalEnd":
              f = new Mj();
              break;
            case "IntervalStart":
              f = new Mj();
              break;
            case "ModExpires":
              f = new Hp();
              break;
            case "PerkEventMagicCharged":
              f = new Gh();
              break;
            case "PostHit":
              f = new Hh();
              break;
            case "RoundStageStart":
              f = new Ip();
              break;
            default:
              f = new Ac();
          }
          f.Wa = b;
          f.parse(e);
          f.type != 0 && c.push(f);
        }
      }
      return c;
    }
  }
  Ac.g = "2C8";
  Ac.u = Kf;
  Object.assign(Ac.prototype, { j: Ac });
  class Iw {
    constructor() {
      this.Jd = "";
      this.info = this.GI = this.sk = null;
      this.type = 0;
    }
  }
  Iw.g = "2C9";
  Object.assign(Iw.prototype, { j: Iw });
  class Hh extends Ac {
    constructor(a) {
      super(a);
      this.animation = this.Zi = null;
      this.JP = this.KP = this.vc = this.tw = this.rR = 0;
      if (a != null) {
        debugger;
        this.Zi = a.Zi;
        this.animation = a.animation;
        this.rR = a.rR;
        this.tw = a.tw;
        this.vc = a.vc;
        this.KP = a.KP;
        this.JP = a.JP;
      }
    }
    parse(a) {
      super.parse(a);
      var b = a.attributes.get("Defense");
      this.Zi = b != null ? b : "";
      this.rR = u.I(a.attributes.get("Block"), -1);
      this.tw = u.I(a.attributes.get("Critical"), -1);
      this.vc = u.I(a.attributes.get("Shock"), -1);
      b = a.attributes.get("Animation");
      this.animation = b != null ? b : "";
      this.KP = u.H(a.attributes.get("DamageMin"), -1);
      this.JP = u.H(a.attributes.get("DamageMax"), -1);
    }
    isEqual(a) {
      if (!super.isEqual(a) || a == null || a.info == null) return !1;
      var b = a.info;
      a = X.Xa(b, "Animation") ? b.get("Animation") : null;
      var c = X.Xa(b, "Defense") ? b.get("Defense") : null;
      let d = X.Xa(b, "Critical") && b.get("Critical"),
        e = X.Xa(b, "Shock") && b.get("Shock"),
        f = X.Xa(b, "Block") && b.get("Block");
      b = X.Xa(b, "Damage") ? b.get("Damage") : 0;
      if (this.Zi != "" && this.Zi != c) return !1;
      c = this.animation;
      return (c != null && c != "" && (a == null || !a.bl(this.animation))) ||
        (this.tw > -1 && this.tw != (d ? 1 : 0)) ||
        (this.vc > -1 && this.vc != (e ? 1 : 0)) ||
        (this.rR > -1 && this.rR != (f ? 1 : 0)) ||
        (this.KP > -1 && b < this.KP) ||
        (this.JP > -1 && b > this.JP)
        ? !1
        : !0;
    }
  }
  Hh.g = "2CA";
  Hh.u = Ac;
  Object.assign(Hh.prototype, { j: Hh });
  class Ip extends Ac {
    constructor(a) {
      super(a);
      this.Ke = 0;
      a != null && (this.Ke = a.Ke);
    }
    parse(a) {
      super.parse(a);
      a = a.attributes.get("Name");
      this.Ke = this.bCa(a != null ? a : "");
    }
    isEqual(a) {
      return !super.isEqual(a) || (this.Ke != 0 && this.Ke != a.sk.Ke)
        ? !1
        : !0;
    }
  }
  Ip.g = "2CB";
  Ip.u = Ac;
  Object.assign(Ip.prototype, { j: Ip });
  class Gp extends Ac {
    constructor(a) {
      super(a);
      this.step = 0;
      a != null && (this.step = a.step);
    }
    parse(a) {
      super.parse(a);
      this.step = u.I(a.attributes.get("Step"));
    }
    isEqual(a) {
      if (!super.isEqual(a) || a == null || a.info == null) return !1;
      if (this.step != 0 && ((a = a.info), a != null)) {
        let b = 0;
        X.Xa(a, "StepFrame") &&
          (b = Math.trunc(parseFloat(a.get("StepFrame"))));
        return 0 == b % this.step;
      }
      return !0;
    }
  }
  Gp.g = "2CC";
  Gp.u = Ac;
  Object.assign(Gp.prototype, { j: Gp });
  class Hp extends Ac {
    constructor(a) {
      super(a);
      this.Jd = this.si = null;
      a != null && ((this.si = a.si), (this.Jd = a.Jd));
    }
    parse(a) {
      super.parse(a);
      let b = a.attributes.get("Name");
      this.si = b != null ? b : "";
      a = a.attributes.get("Namespace");
      this.Jd = a != null ? a : "";
    }
    isEqual(a) {
      if (this.Jd == null || this.Jd == "") {
        if (!super.isEqual(a) || a == null || a.info == null) return !1;
      } else if (this.Jd == a.Jd) return !1;
      a = a.info;
      if (a != null) {
        let b = X.Xa(a, "ModExpires") ? a.get("ModExpires") : null;
        if (
          (X.Xa(a, "ParentPerk") ? a.get("ParentPerk") : null) == this.Wa &&
          (this.si == null || this.si == "" || this.si == b)
        )
          return !0;
      }
      return !1;
    }
  }
  Hp.g = "2CD";
  Hp.u = Ac;
  Object.assign(Hp.prototype, { j: Hp });
  class Lj extends Ac {
    constructor(a) {
      super(a);
      this.name = null;
      a != null && (this.name = a.name);
    }
    parse(a) {
      super.parse(a);
      a = a.attributes.get("Name");
      this.name = a != null ? a : "";
    }
    isEqual(a) {
      if (!super.isEqual(a) || a == null || a.info == null) return !1;
      a = a.info;
      a = X.Xa(a, "Animation") ? a.get("Animation") : null;
      return this.name == "" || (a != null && a.bl(this.name)) ? !0 : !1;
    }
  }
  Lj.g = "2CE";
  Lj.u = Ac;
  Object.assign(Lj.prototype, { j: Lj });
  class Mj extends Ac {
    constructor(a) {
      super(a);
      this.name = null;
      a != null && ((this.name = a.name), (this.type = a.type));
    }
    parse(a) {
      super.parse(a);
      let b = a.attributes.get("Name");
      this.name = b != null ? b : "";
      a = a.attributes.get("Type");
      this.type = fe.N0(a != null ? a : "");
    }
    isEqual(a) {
      debugger;
      if (!super.isEqual(a) || a == null || a.info == null) return !1;
      a = a.info;
      a = X.Xa(a, "Interval") ? a.get("Interval") : null;
      if (a != null) {
        var b = this.name;
        b = !(b == null || b == "") && a.name != this.name;
      } else b = !0;
      return b || (this.type != 0 && a.type != this.type) ? !1 : !0;
    }
  }
  Mj.g = "2CF";
  Mj.u = Ac;
  Object.assign(Mj.prototype, { j: Mj });
  class Gh extends Ac {
    constructor(a) {
      super(a);
    }
    isEqual(a) {
      return super.isEqual(a) && a != null ? !0 : !1;
    }
  }
  Gh.g = "2D0";
  Gh.u = Ac;
  Object.assign(Gh.prototype, { j: Gh });
  class It {
    constructor() {
      this.Oa = m.l();
    }
    parse(a) {
      this.Oa.length = 0;
      if (a != null) {
        a = a.children;
        for (var b = 0; b < a.length; ) {
          let c = a[b++],
            d = c.attributes.get("Perk");
          this.Oa.push(
            new Nj(d != null ? d : null, u.I(c.attributes.get("Value"))),
          );
        }
        this.Oa.sort(function (c, d) {
          return c.az(d);
        });
      }
    }
    E0(a) {
      let b = 0,
        c = this.Oa;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.level == a) return d;
      }
      return null;
    }
    Bcb(a) {
      return this.E0(a) != null;
    }
    CI(a, b) {
      if (this.Bcb(b) || a == "") return null;
      a = new Nj(a, b);
      this.Oa.push(a);
      p.o.fo.$pb(a);
      p.o.save();
      return a;
    }
  }
  It.g = "2D1";
  Object.assign(It.prototype, { j: It });
  class Nj {
    constructor(a, b) {
      this.name = a;
      this.level = b;
    }
    az(a) {
      return qb(this.level, a.level);
    }
  }
  Nj.g = "2D2";
  Nj.Rb = [al];
  Object.assign(Nj.prototype, { j: Nj });
  class Be {
    constructor() {
      this.Fm = m.l();
      this.wq = m.l();
      this.lC = new Map();
      this.G4 = m.l();
      this.attributes = new ud();
      this.r6 = null;
      this.Yh = 1;
      this.hidden = this.mEa = !1;
      this.level = this.dwa = this.oM = 0;
      this.id = -1;
      this.Vc = 0;
      this.description =
        this.Eg =
        this.iP =
        this.cwa =
        this.move =
        this.FR =
          "";
      this.name = null;
      this.image = "";
      this.g_ = null;
      this.ZP = this.isActive = !1;
    }
    bdb(a) {
      if (a == null || a == "") return !0;
      let b = 0,
        c = this.wq;
      for (; b < c.length; ) if (c[b++] == a) return !0;
      return !1;
    }
    v8a(a) {
      return X.Xa(this.lC, a) ? this.lC.get(a) : a;
    }
    zma(a) {
      debugger;
      let b = new Ia();
      a = X.wh(this.lC, a, b);
      b.G = b.G;
      return a;
    }
    clone(a, b) {
      var c = v.Sg.ln(this.name),
        d = null;
      c != null && c.g_ != null && (d = c.g_.clone());
      if (a != null) {
        c = null;
        d != null && (c = d.A("Set"));
        if (c == null) {
          debugger;
          d == null && (d = Rb.create("Perk"));
          c = d.appendChild("Set");
        }
        a = a.attributes.entries();
        let e = a.next();
        for (; !e.done; ) {
          let f = e.value;
          e = a.next();
          c.set(f[0], f[1]);
        }
      }
      b != null &&
        ((c = null),
        d != null && (c = d.A("RatingEvaluation")),
        c == null && (d == null && (d = Rb.create("Perk")), d.Ts(b)));
      b = new Be();
      d != null && b.parse(d);
      b.Vc = this.Vc;
      b.mEa = !0;
      b.A0a();
      return b;
    }
    A0a() {
      this.g_ = null;
    }
    parse(a) {
      this.g_ = a.clone();
      var b = a.clone();
      this.id = u.I(a.attributes.get("ID"), -1);
      this.level = u.I(a.attributes.get("Level"));
      var c = a.attributes.get("Name");
      this.name = c != null ? c : null;
      c = a.attributes.get("Alias");
      this.Eg = c != null ? c : null;
      c = a.attributes.get("BarScale");
      this.iP = c != null ? c : null;
      this.dwa = u.I(a.attributes.get("BarShift"));
      c = a.attributes.get("BarSetAttribute");
      this.cwa = c != null ? c : null;
      c = a.attributes.get("Image");
      this.image = c != null ? c : null;
      this.image = Ye.vI(this.image);
      c = b.attributes.get("Description");
      this.description = c != null ? c : "";
      c = b.attributes.get("Move");
      this.move = c != null ? c : null;
      this.hidden = u.ka(b.attributes.get("Hidden"), !1);
      c = b.attributes.get("ItemSet");
      this.FR = c != null ? c : null;
      c = a.attributes.get("Template");
      m.addRange(this.wq, (c != null ? c : "").split("|"));
      this.wq.push(this.name);
      this.Yh = 1;
      a = a.attributes.get("PerkType");
      (a != null ? a : "") == "Combo" && (this.Yh = 0);
      a = 0;
      for (c = v.ho.attributes; a < c.length; ) {
        var d = c[a];
        ++a;
        let e = b.attributes.get(d.name);
        e != null && this.attributes.set(d.name, u.I(e));
      }
      a = b.A("Set");
      a != null && this.ukb(a);
      this.oM = 0;
      a = this.lC.entries();
      for (c = a.next(); !c.done; )
        ((d = c.value),
          (c = a.next()),
          d[0] == this.cwa &&
            ((d = bd(d[1])),
            d != null && (this.oM = d | 0),
            (this.oM += this.dwa)));
      a = b.children;
      for (c = 0; c < a.length; )
        ((d = a[c++]), d.name == "Trigger" && (this.Ova(d), this.Kkb(d)));
      b = b.A("RatingEvaluation");
      b != null && this.pkb(b, this.lC);
    }
    Kkb(a) {
      let b = new Jw();
      b.Wa = this;
      b.parse(a);
      this.Fm.push(b);
    }
    Ova(a) {
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        let c = a[b++],
          d = c.attributes.entries(),
          e = d.next();
        for (; !e.done; ) {
          let f = e.value;
          e = d.next();
          this.Uqb(f[0], f[1], c);
        }
        c.children.length > 0 && this.Ova(c);
      }
    }
    Uqb(a, b, c) {
      let d = 0,
        e = Qa.lGa(b).tna;
      for (; d < e.length; ) {
        let f = e[d];
        ++d;
        if (f.body.charAt(0) == "_") {
          let g = this.v8a(J.substr(f.body, 1, f.body.length - 1));
          b = Rc(b, f.body, g);
        }
      }
      c.set(a, b);
    }
    ukb(a) {
      a = a.attributes.entries();
      let b = a.next();
      for (; !b.done; ) {
        let c = b.value;
        b = a.next();
        this.lC.set(c[0], c[1]);
      }
    }
    pkb(a, b) {
      a.children.length > 0 && (this.G4.length = 0);
      a = a.children;
      let c = 0;
      for (; c < a.length; ) {
        let d = a[c++];
        if (d.name != "Rating") continue;
        let e = new Kw();
        e.parse(d, b);
        this.G4.push(e);
      }
    }
    Fj(a, b) {
      let c = 0,
        d = this.Fm;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        let f = 0,
          g = e.Hc;
        for (; f < g.length; )
          if (g[f++].type == b) {
            a.push(e);
            break;
          }
      }
    }
    Ze() {}
    Ye(a) {
      let b = a.data,
        c = a.Fb;
      a = a.target;
      if (b != null) {
        var d = this.r6;
        d != null && c.result == "Enemy" && (d = d.jb);
        switch (b.method) {
          case "Abs":
            this.Xfb(c);
            break;
          case "Aspect":
            this.agb(b, c);
            break;
          case "CoordX":
            this.zgb(d, b, c);
            break;
          case "CoordY":
            this.Agb(d, b, c);
            break;
          case "CoordZ":
            this.Bgb(d, b, c);
            break;
          case "CurrentFight":
            this.Mgb(b, c);
            break;
          case "Hit":
            this.Tgb(d, b, c);
            break;
          case "Player":
            this.via(d, b, c);
            break;
          case "PlayerAttribute":
            this.jhb(d, b, c);
            break;
          case "PlayerParameter":
            this.khb(d, b, a, c);
            break;
          case "RandomAspect":
            this.rhb(b, c);
            break;
          case "Round":
            this.xhb(b, c);
            break;
          case "RoundParameter":
            this.yhb(b, c);
            break;
          case "StringInArray":
            this.Shb(b, c);
            break;
          case "UniformFloatRandom":
            this.bib(c);
            break;
          case "Variable":
            this.eib(d, b, c);
            break;
          default:
            ((a = b.method == "Compare") || Qa.yD(b.method) != 0) &&
              this.ugb(a, b, c);
        }
      }
    }
    Mgb(a, b) {
      ca.Ka() != null &&
        a.Sd == "isRaid" &&
        (b.result = ca.Ka().Da.type == "FightRaid" ? "1" : "0");
    }
    eib(a, b, c) {
      b.Ab.length == 0 && (c.result = "");
      b = b.Ab[0].body;
      a = a.Fc.Z3;
      X.Xa(a, b) ? (c.result = a.get(b)) : (c.result = "");
    }
    via(a, b, c) {
      if (a == null) c.result = "";
      else
        switch (b.Sd) {
          case "Animation":
            if (a.Tj() == null) {
              c.result = "";
              break;
            }
            b = new Fb();
            a = a.Tj().Al;
            let d = 0,
              e = a.length;
            for (; d < e; ) {
              let f = d++;
              b.M += a[f];
              f < a.length - 1 && (b.M += "|");
            }
            c.result = b.M;
            break;
          case "InAir":
            b = a.pa.Ic("NHeel_2").ma.y;
            c.result =
              0 - a.pa.Ic("NHeel_1").ma.y > 30 && 0 - b > 30 ? "1" : "0";
            break;
          case "IsPhysical":
            if (a.Tj() == null) {
              c.result = "";
              break;
            }
            c.result = a.Tj().SS ? "1" : "0";
            break;
          case "Level":
            c.result = K.T(p.o.bb());
        }
    }
    bib(a) {
      let b = Da.rg.B4(1);
      a.result = b == null ? "null" : "" + b;
    }
    jhb(a, b, c) {
      if (a != null && ((a = a.parameters), a != null)) {
        let d = new ja(0);
        a.attributes.get(b.Sd, d);
        c.result = d.G == null ? "null" : "" + d.G;
      }
    }
    khb(a, b, c, d) {
      if (a != null)
        switch (b.Sd) {
          case "AllFlags":
            b = new Fb();
            a = ca.Ka().tb.s0(a, c.Wa).$O;
            c = 0;
            for (var e = a.length; c < e; ) {
              var f = c++,
                g = a[f];
              g != null &&
                g != "" &&
                ((b.M += a[f]), f < a.length - 1 && (b.M += "|"));
            }
            d.result = b.M;
            break;
          case "AllPerks":
            b = new Fb();
            a = a.parameters.Oa;
            c = 0;
            for (e = a.length; c < e; ) {
              f = c++;
              g = a[f].Eg;
              if (g == null || g == "") g = a[f].name;
              g = Y.na(g);
              g != null &&
                g != "" &&
                ((b.M += g),
                f < a.length - 1 && (b.M += "|"),
                (f + 1) % 3 == 0 && (b.M += "\n"));
            }
            d.result = b.M;
            break;
          case "Armor":
            d.result = a.parameters.Fd(I.Ci).name;
            break;
          case "Combo":
            d.result = K.T(a.fw());
            break;
          case "DamageConverter":
            d.result = K.T(a.wo);
            break;
          case "Dan":
            d.result = "1";
            break;
          case "DefaultPerksAspect":
            d.result = K.T(a.EV);
            break;
          case "Disarm":
            d.result = a.un ? "1" : "0";
            break;
          case "Health":
            d.result = K.T(a.parameters.hd);
            break;
          case "Helm":
            d.result = a.parameters.Fd(I.Di).name;
            break;
          case "Magic":
            d.result = a.parameters.Fd(I.Ff).name;
            break;
          case "MagicBullet":
            d.result = K.T(a.dh);
            break;
          case "MagicCharge":
            d.result = K.T(a.sy);
            break;
          case "Pain":
            d.result = a.yr == null ? "null" : "" + a.yr;
            break;
          case "RaidSphere":
            d.result = "0";
            break;
          case "Ranged":
            d.result = a.parameters.Fd(I.Xh).name;
            break;
          case "Shock":
            d.result = a.vc ? "1" : "0";
            break;
          case "Skeleton":
            d.result = a.parameters.Fd(I.Ux).name;
            break;
          case "Style":
            d.result = a.GP;
            break;
          case "StyleGain":
            d.result = a.HI == null ? "null" : "" + a.HI;
            break;
          case "Weapon":
            d.result = a.parameters.Fd(I.xg).name;
            break;
          case "isPlayer":
            d.result = a.parameters.qb ? "1" : "0";
            break;
          default:
            debugger;
        }
    }
    yhb(a, b) {
      debugger;
      if (ca.Ka() != null)
        switch (a.Sd) {
          case "Number":
            b.result = K.T(ca.Ka().round.round);
            break;
          case "RoundTime":
            b.result = K.T(ca.Ka().e1());
            break;
          case "TimeLeft":
            b.result = K.T(ca.Ka().Z$a());
            break;
          case "TimePassed":
            b.result = K.T(ca.Ka().$$a());
        }
    }
    ugb(a, b, c) {
      if (c != null) {
        let d = new Fb();
        d.M += c.result;
        a || ((d.M += ","), (d.M += b.method));
        c.result = Qa.Ega(d.M) ? "1" : "0";
      }
    }
    zgb(a, b, c) {
      if (b.Ab.length < 2) c.result = "-10000";
      else {
        var d = b.Ab[0].body,
          e = b.Ab[1].body,
          f = "";
        b.Ab.length >= 3 && (f = b.Ab[2].body);
        b = new ee();
        b.Zs(d, e, f);
        d = 0;
        if (b.object != 1) d = b.TQ(a.Fc);
        else
          switch (b.pe) {
            case 1:
              f = a.pa.Ic(f);
              d = f.ma.x;
              break;
            case 2:
              f = a.jb.pa.Ic(f);
              d = f.ma.x;
              break;
            case 3:
              debugger;
              a = a.lb;
              f = a != null ? a.pa.Ic(f) : null;
              f != null && (d = f.ma.x);
              break;
            case 4:
              f = a.ff(4);
              f = f != null ? f.pa.Ge() : null;
              f != null && (d = f.ma.x);
              break;
            case 6:
              ((f = a.ff(6)),
                (f = f != null ? f.pa.Ge() : null),
                f != null && (d = f.ma.x));
          }
        c.result = d == null ? "null" : "" + d;
      }
    }
    Agb(a, b, c) {
      debugger;
      if (b.Ab.length < 2) c.result = "-10000";
      else {
        var d = b.Ab[0].body,
          e = b.Ab[1].body,
          f = "";
        b.Ab.length >= 3 && (f = b.Ab[2].body);
        b = new ee();
        b.Zs(d, e, f);
        d = 0;
        b.object != 1
          ? (d = b.lfa(a.Fc))
          : (b.pe == 1 && (d = a.pa.Ic(f).ma.y),
            b.pe == 2 && (d = a.jb.pa.Ic(f).ma.y));
        c.result = d == null ? "null" : "" + d;
      }
    }
    Bgb(a, b, c) {
      debugger;
      if (b.Ab.length < 2) c.result = "-10000";
      else {
        var d = b.Ab[0].body,
          e = b.Ab[1].body,
          f = "";
        b.Ab.length >= 3 && (f = b.Ab[2].body);
        b = new ee();
        b.Zs(d, e, f);
        d = 0;
        b.object != 1
          ? (d = b.I8a(a.Fc))
          : (b.pe == 1 && (d = a.pa.Ic(f).ma.z),
            b.pe == 2 && (d = a.jb.pa.Ic(f).ma.z));
        c.result = d == null ? "null" : "" + d;
      }
    }
    Xfb(a) {
      var b = a.result;
      let c = 0;
      aa.init();
      b = new je(b);
      b.XQ() == 0 && ((b = bd(K.T(b.Wb()))), b != null && (c = b));
      c = Math.abs(c);
      a.result = c == null ? "null" : "" + c;
    }
    rhb(a, b) {
      debugger;
      if (a.Ab.length < 2) b.result = "0";
      else {
        var c = Kg(a.Ab[0].body, 0);
        a = Kg(a.Ab[1].body, 0) + 1;
        Da.xL();
        c += ((a - c) * Da.rg.lf()) | 0;
        a = p.o.bb();
        c = ye.F().qea(a) + c;
        b.result = c == null ? "null" : "" + c;
      }
    }
    agb(a, b) {
      a.Ab.length != 1
        ? (b.result = "0")
        : ((a = Be.oea(kc(a.Ab[0].body))),
          (b.result = a == null ? "null" : "" + a));
    }
    xhb(a, b) {
      debugger;
      var c = 0;
      let d = 0,
        e = "trunc";
      if (a.Ab.length < 1) b.result = "RoundingError";
      else if (a.Ab.length > 3) b.result = "RoundingError";
      else if (
        (a.Ab.length >= 1 && (c = kc(a.Ab[0].body, 0)),
        a.Ab.length >= 2 && (d = Kg(a.Ab[1].body, 0)),
        a.Ab.length == 3 && (e = a.Ab[2].body),
        X.Xa(Be.mGa, e))
      )
        switch (((a = Be.mGa.get(e)), a)) {
          case 0:
            c = Da.gLa(c, d);
            b.result = c == null ? "null" : "" + c;
            break;
          case 1:
            c = Da.fLa(c, d);
            b.result = c == null ? "null" : "" + c;
            break;
          case 2:
            c = Da.eLa(c, d);
            b.result = c == null ? "null" : "" + c;
            break;
          case 3:
            c = Da.gpb(c, d);
            b.result = c == null ? "null" : "" + c;
            break;
          default:
            b.result = "";
        }
      else b.result = "RoundingError";
    }
    Shb(a, b) {
      debugger;
      if (a.Ab.length > 1) {
        let c = a.Ab[1].body;
        a = a.Ab[0].body.split("|");
        let d = 0,
          e = a.length;
        for (; d < e; )
          if (a[d++] == c) {
            b.result = "1";
            return;
          }
      }
      b.result = "0";
    }
    Tgb(a, b, c) {
      if (ca.Ka() != null) {
        var d = ca.Ka().Dya;
        if (d != null)
          switch (b.Sd) {
            case "Animations":
              a = new Fb();
              d = d.gI.Al;
              b = 0;
              for (var e = d.length; b < e; ) {
                let f = b++;
                a.M += d[f];
                f < d.length - 1 && (a.M += "|");
              }
              c.result = a.M;
              break;
            case "AttributesHitMultiplier":
              c.result = K.T(
                v.sea(
                  d.Pd.parameters.qb,
                  d.Pd.parameters,
                  d.model.parameters,
                  d.Uva.ZZ,
                  d.QP,
                ),
              );
              break;
            case "BaseDamage":
              a = d.bEa;
              b = 1;
              d.block &&
                ((b = new ja(0)),
                d.model.parameters.attributes.get(v.bZ.Ok, b),
                (b = Math.pow(2, b.G * v.bZ.Bc)));
              e = 1;
              d.se &&
                d.Pd != null &&
                ((e = new ja(0)),
                d.Pd.parameters.attributes.get(v.OZ.Ok, e),
                (e = Math.pow(2, e.G * v.OZ.Bc)));
              d = a * b * e;
              c.result = d == null ? "null" : "" + d;
              break;
            case "Block":
              c.result = d.block ? "1" : "0";
              break;
            case "BodyPart":
              c.result = d.QD.KC;
              break;
            case "Critical":
              c.result = d.se ? "1" : "0";
              break;
            case "Damage":
              c.result = d.aj == null ? "null" : "" + d.aj;
              break;
            case "DefenseAttribute":
              c.result = d.QP;
              break;
            case "Player":
              c.result = d.model == a ? "Me" : "Enemy";
              break;
            case "Shock":
              c.result = d.Ub ? "1" : "0";
          }
      }
    }
    HOa(a) {
      var b = a.indexOf("{");
      if (b == -1) return a;
      let c = a.lastIndexOf("}");
      if (c == -1) return a;
      let d = new Fb();
      d.M += a;
      var e = ha.F().ta;
      for (new yb().kk(e); b <= c; ) {
        var f = "";
        if (a.charAt(b) == "{") {
          e = a.indexOf("}", b);
          b = J.substr(a, b + 1, e - b - 1);
          if (b != null && b != "") {
            f = new Qa();
            f.Us = w(this, this.Ze);
            f.Yy = w(this, this.Ye);
            let g = this.lC.entries(),
              h = g.next();
            for (; !h.done; ) {
              let k = h.value;
              h = g.next();
              f.ntb(k[0], k[1]);
            }
            f.parse(b);
            f = f.Wb().result;
          }
          d.M = Eb.replace(d.M, b, f);
          b = e + 1;
        } else ++b;
      }
      return d.M;
    }
    l$a() {
      var a = this.FR;
      if (a == null || a == "") return this.HOa(this.description);
      var b = p.items.GR.tBa(this.FR);
      if (b == null) return this.HOa(this.description);
      a = new Fb();
      at.Iva(a, "^{0}^\n\n\n", b.MYa);
      b = new gd();
      p.o.xa.H0a(this, b);
      a.M += "\n";
      return a.M;
    }
    static oea(a) {
      let b = v.JY;
      return a >= 0
        ? b.wha - (b.wha - 1) * Math.pow(2, -a / b.mda)
        : b.Hva + Math.pow(2, a / b.mda);
    }
  }
  Be.g = "2D3";
  Object.assign(Be.prototype, { j: Be });
  class Lw {
    constructor() {
      this.zza = m.l();
      this.yza = m.l();
      this.xz = m.l();
      this.Gza = m.l();
      this.mQ = m.l();
      this.rz = m.l();
      this.vz = m.l();
      this.wz = m.l();
      this.sz = m.l();
      this.Fza = m.l();
      this.Dza = m.l();
      this.Eza = m.l();
      this.Bza = m.l();
      this.Cza = m.l();
      this.uz = m.l();
      this.Aza = m.l();
      this.Oa = m.l();
      this.actions = m.l();
      this.model = null;
    }
    w8a(a) {
      let b = 0,
        c = this.Oa;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.nb == a) return d;
      }
      return null;
    }
    B8a(a) {
      switch (a) {
        case 0:
          return null;
        case 1:
          return this.Fza;
        case 2:
          return this.uz;
        case 3:
          return this.Gza;
        case 4:
          return this.Aza;
        case 5:
          return this.Cza;
        case 6:
          return this.Bza;
        case 7:
          return this.Eza;
        case 8:
          return this.Dza;
        case 9:
          return this.sz;
        case 10:
          return this.rz;
        case 11:
          return this.mQ;
        case 12:
          return this.wz;
        case 13:
          return this.vz;
        case 14:
          return this.xz;
        case 15:
          return this.yza;
        case 16:
          return this.zza;
      }
    }
    nsb(a) {
      let b = 0,
        c = this.Oa;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.nb == a) {
          d.enabled = !1;
          break;
        }
      }
    }
  }
  Lw.g = "2D4";
  Object.assign(Lw.prototype, { j: Lw });
  class xe {
    constructor() {
      this.Eda = null;
      this.nl = m.l();
      this.q2 = m.l();
      this.name = "";
    }
    gZa() {
      let a = new Qa(),
        b = v.Sg.ln(this.name);
      if (b != null) {
        let c = m.l(),
          d = 0,
          e = this.nl;
        for (; d < e.length; ) {
          let f = e[d];
          ++d;
          a.parse(f.value);
          a.Yy = w(b, b.Ye);
          a.Us = w(b, b.Ze);
          let g = a.Wb();
          c.push(new rb(f.key, g.result));
        }
        this.nl = c;
      }
    }
    static Bz(a, b) {
      let c = new xe();
      c.Eda = a.Eda;
      c.name = a.name;
      c.q2 = m.l();
      m.forEach(a.q2, function (d) {
        c.q2.push(d);
      });
      c.nl = b;
      c.nl == null &&
        ((c.nl = m.l()),
        m.forEach(a.nl, function (d) {
          c.nl.push(new rb(d.key, d.value));
        }));
      return c;
    }
    static Qd(a) {
      let b = new xe();
      b.Eda = a;
      var c = a.attributes.get("Name");
      b.name = c != null ? c : "";
      c = a.attributes.get("ItemType");
      c = c != null ? c : "";
      c != null && m.addRange(b.q2, c.split("|"));
      a = a.A("Set");
      if (a != null)
        for (a = a.attributes.entries(), c = a.next(); !c.done; ) {
          let d = c.value;
          c = a.next();
          let e = d[1];
          b.nl.push(new rb(d[0], e != null ? e : ""));
        }
      return b;
    }
  }
  xe.g = "2D5";
  Object.assign(xe.prototype, { j: xe });
  class id {
    constructor() {
      this.Oi = m.l();
      this.zH = m.l();
      this.Xx = m.l();
    }
    clear() {
      this.Xx.length = 0;
      this.zxa();
    }
    zxa() {
      this.zH.length = 0;
      this.Oi.length = 0;
    }
    pya() {
      this.zxa();
      let a = id.ot().Xx,
        b = 0;
      for (; b < a.length; ) {
        let c = a[b];
        ++b;
        this.WWa(c.level, c.items.length == 1 ? 1 : 2);
      }
      a.length != 0 && this.uPa(a[0]);
      this.oyb();
      m.forEach(p.o.fo.QS.Oa, w(this, this.tPa));
    }
    tPa(a) {
      if (a != null) {
        this.Hnb(a.name);
        var b = this.Q5a(a.level);
        b != null && this.uPa(b);
        this.Azb(a);
      }
    }
    parse(a) {
      this.clear();
      a = a.children;
      let b = 0;
      for (; b < a.length; ) this.Hkb(a[b++]);
      this.Xx.sort(function (c, d) {
        return qb(c.level, d.level);
      });
    }
    H5a() {
      let a = 0,
        b = p.o.bb(),
        c = 0,
        d = this.Xx.length;
      for (; c < d && !(this.Xx[c++].level > b); ) ++a;
      return a;
    }
    O8a(a) {
      let b = m.l(),
        c = 0,
        d = this.Oi.length;
      for (; c < d; ) {
        let e = this.Oi[c++];
        if (e.level == a) b.push(e);
        else if (e.level > a) break;
      }
      return b;
    }
    TBa(a) {
      let b = 0,
        c = this.zH;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.level == a) return d;
      }
      return null;
    }
    N8a(a) {
      let b = 0,
        c = this.zH.length;
      for (; b < c; ) {
        let d = this.zH[b++];
        if (d.level > a) return d;
      }
      return null;
    }
    Q5a(a) {
      let b = 0,
        c = this.Xx.length;
      for (; b < c; ) {
        let d = this.Xx[b++];
        if (d.level > a) return d;
      }
      return null;
    }
    Hkb(a) {
      let b = u.I(a.attributes.get("Value")),
        c = new Mw(b);
      a = a.children;
      let d = 0;
      for (; d < a.length; ) {
        var e = a[d++];
        let f = this.E7a(e.name);
        e = e.attributes.get("Name");
        c.items.push(new Nw(f, e != null ? e : "", b));
      }
      this.Xx.push(c);
    }
    Inb(a) {
      let b = 0;
      for (; b != this.Oi.length; )
        this.Oi[b].level == a ? m.ye(this.Oi, b) : ++b;
      a = this.TBa(a);
      a != null && (a.Oa.length = 0);
    }
    EXa(a) {
      let b = a.K5a();
      a = this.TBa(a.level);
      let c = 0;
      for (; c < b.length; ) {
        var d = b[c];
        ++c;
        let e = this.y8a(d.name);
        e != null &&
          ((d = new Ih(e, d.level, 3, this.z8a(d.type))),
          this.Oi.push(d),
          a != null && a.Oa.push(d));
      }
    }
    WWa(a, b) {
      b == null && (b = 2);
      let c = new Jp(a);
      this.zH.push(c);
      let d = 0;
      for (; d < b; ) {
        ++d;
        let e = new Ih(null, a, 3);
        this.Oi.push(e);
        c.Oa.push(e);
      }
    }
    uPa(a) {
      this.Inb(a.level);
      this.EXa(a);
      this.Oi.sort(function (b, c) {
        return qb(b.level, c.level);
      });
    }
    Azb(a) {
      var b = this.O8a(a.level),
        c = 0;
      let d = b.length;
      for (; c < d; ) {
        let e = b[c++];
        e.Mla(e.getName() == a.name ? 2 : 1);
      }
      a = this.P8a(a.level);
      b = 0;
      for (c = a.length; b < c; ) a[b++].Mla(0);
    }
    oyb() {
      if (this.Oi.length > 0) {
        let a = this.Oi[0].level,
          b = this.Oi.length,
          c = 0;
        for (; c < b && a == this.Oi[c].level; ) (this.Oi[c].Mla(0), ++c);
      }
    }
    y8a(a) {
      let b = 0,
        c = v.Sg.cT;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.name == a) return d;
      }
      return v.Sg.ln(a);
    }
    Hnb(a) {
      let b = v.Sg.cT,
        c = 0,
        d = b.length;
      for (; c < d; ) {
        let e = c++;
        if (b[e].name == a) {
          m.ye(b, e);
          break;
        }
      }
    }
    E7a(a) {
      let b = 0;
      a == "Perk" ? (b = 1) : a == "Upgrade" && (b = 2);
      return b;
    }
    z8a(a) {
      switch (a) {
        case 1:
          return 1;
        case 2:
          return 2;
        default:
          return 0;
      }
    }
    P8a(a) {
      let b = m.l(),
        c = a,
        d = 0,
        e = this.Oi;
      for (; d < e.length; ) {
        let f = e[d];
        ++d;
        let g = f.level;
        if (g > c && c > a) break;
        g > a && ((c = g), b.push(f));
      }
      return b;
    }
    static ot() {
      let a = id.Hb;
      return a != null ? a : (id.Hb = new id());
    }
  }
  id.g = "2D6";
  Object.assign(id.prototype, { j: id });
  class Nw {
    constructor(a, b, c) {
      this.type = a;
      this.name = b;
      this.level = c;
    }
    S1() {
      var a = p.o.fo.a9a(this.name);
      let b = a != null;
      switch (this.type) {
        case 1:
          a = !b || a.bb() >= this.level;
          break;
        case 2:
          a = b && a.bb() <= this.level;
          break;
        default:
          a = !1;
      }
      return a;
    }
  }
  Nw.g = "2D7";
  Object.assign(Nw.prototype, { j: Nw });
  class Mw {
    constructor(a) {
      this.items = m.l();
      this.level = a;
    }
    K5a() {
      var a;
      a == null && (a = 2);
      let b = m.l(),
        c = 0,
        d = this.items.length;
      for (; c < d; ) {
        let e = this.items[c++];
        e.S1() && b.push(e);
        if (b.length >= a) break;
      }
      return b;
    }
  }
  Mw.g = "2D8";
  Object.assign(Mw.prototype, { j: Mw });
  class Jw {
    constructor() {
      this.name = this.Wa = this.Hc = this.rb = this.actions = null;
    }
    parse(a) {
      var b = a.attributes.get("Name");
      this.name = b != null ? b : "";
      b = a.A("Events");
      let c = a.A("Conditions");
      a = a.A("Actions");
      this.Hc = Ac.create(b, this.Wa);
      this.rb = ec.create(c, this.Wa);
      this.actions = Na.create(a, this.Wa, this);
    }
    M0a(a) {
      let b,
        c = 0,
        d = this.Hc.length;
      for (; c < d; ) {
        b = this.Hc[c++];
        let e = b.isEqual(a);
        if (b.cb ? !e : e) return !0;
      }
      return !1;
    }
    Oxa(a, b) {
      let c,
        d = 0,
        e = this.rb.length;
      for (; d < e; ) {
        c = this.rb[d++];
        let f = c.isEqual(a, b);
        if (c.cb ? f : !f) return !1;
      }
      return !0;
    }
  }
  Jw.g = "2D9";
  Object.assign(Jw.prototype, { j: Jw });
  class If {
    static R0a(a) {
      if (a != null) {
        let b = a.children,
          c = 0;
        for (; c < b.length; ) {
          let d = b[c++];
          if (d.name == "Perk") {
            let e = m.l();
            If.EGa(d, a, e);
            if (d.attributes.get("Template") != null && e.length > 0) {
              let f = "",
                g = 0,
                h = e;
              for (; g < h.length; ) f = "" + f + h[g++] + "|";
              f != null && f != "" && (f = nf(f, f.length - 1));
              d.set("Template", f);
            }
            e.length = 0;
          }
        }
      }
      If.dXa(a);
    }
    static yfa(a, b) {
      a = a.children;
      let c = 0;
      for (; c < a.length; ) {
        let d = a[c++];
        if (d.name == "Perk") {
          let e = d.attributes.get("Name");
          if (b == (e != null ? e : null)) return d;
        }
      }
      return null;
    }
    static Q2(a, b) {
      b = b.attributes.entries();
      let c = b.next();
      for (; !c.done; ) {
        let d = c.value;
        c = b.next();
        let e = d[0];
        a.attributes.get(e) == null && a.set(e, d[1]);
      }
    }
    static Nha(a, b) {
      b = b.children;
      let c = 0;
      for (; c < b.length; ) {
        let d = b[c++],
          e = d.name,
          f = a.A("Set");
        e == "Trigger" || (e == "Set" && f == null)
          ? a.Ts(d.clone())
          : e == "Set" && f != null && If.Q2(f, d);
      }
    }
    static EGa(a, b, c) {
      var d = m.l(),
        e = a.attributes.get("Template");
      if (e != null) {
        m.addRange(d, (e != null ? e : null).split("|"));
        e = d;
        d = m.l();
        for (var f = 0; f < e.length; ) {
          var g = e[f];
          ++f;
          d.includes(g) || d.push(g);
        }
        for (e = 0; e < d.length; )
          ((f = d[e]),
            ++e,
            (g = If.yfa(b, f)),
            g != null &&
              ((g = g.clone()), If.EGa(g, b, c), If.Q2(a, g), If.Nha(a, g)),
            c.push(f));
      }
    }
    static dXa(a) {
      let b = 0;
      if (a != null) {
        a = a.children;
        let c = 0;
        for (; c < a.length; ) {
          let d = a[c++];
          d.name == "Perk" && (d.set("ID", b == null ? "null" : "" + b), ++b);
        }
      }
    }
  }
  If.g = "2DA";
  class bc extends fd {
    constructor() {
      super();
      this.gj = m.l();
      this.N_ = m.l();
      this.DG = new Iw();
      this.oX = new Ow();
      this.pg = new Map();
    }
    Sh() {
      let a = 0,
        b = this.gj;
      for (; a < b.length; ) {
        let c = 0,
          d = b[a++].actions;
        for (; c < d.length; ) d[c++].Sh();
      }
    }
    ila(a) {
      this.rKa();
      let b = 0;
      for (; b < a.length; ) this.Jf(a[b++]);
    }
    Jf(a) {
      this.ym(a);
      let b = new Lw();
      b.model = a;
      this.gj.push(b);
      let c = 0;
      for (a = a.parameters.Oa; c < a.length; ) this.XWa(b, a[c++]);
    }
    ym(a) {
      let b = 0,
        c = this.gj;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.model == a) {
          J.remove(this.gj, d);
          break;
        }
      }
    }
    rKa() {
      this.gj.length = 0;
    }
    reset() {
      X.clear(bc.glb);
      let a = 0,
        b = this.gj;
      for (; a < b.length; ) {
        let c = 0,
          d = b[a++].actions;
        for (; c < d.length; ) d[c++].wP(!0);
      }
    }
    Hj(a, b, c) {
      c == null && (c = !1);
      this.pZa(a, b);
      let d = X.Xa(this.pg, "namespace") ? this.pg.get("namespace") : null,
        e = 0,
        f = this.gj.length;
      for (; e < f; ) {
        let g = this.gj[e++],
          h = g.B8a(b);
        if (h == null) continue;
        this.DG.type = b;
        this.DG.info = c ? this.pg : null;
        this.DG.GI = g.model;
        this.DG.sk = a;
        this.DG.Jd = d != null ? d : "";
        let k = 0,
          l = h.length;
        for (; k < l; ) this.O_a(g, a, this.DG, h[k++]);
      }
      this.Sh();
    }
    O_a(a, b, c, d) {
      var e;
      e == null && (e = !1);
      var f = a.w8a(d.Wa);
      f != null &&
        f.enabled &&
        ((f = this.pBa(a, d.Wa)),
        (f = f != null ? f.$O : m.l()),
        (d.Wa.r6 = a.model),
        (c == null || d.M0a(c)) && d.Oxa(a.model, f) && this.iLa(a, b, d, e));
    }
    ia() {
      let a = (this.N_.length = 0),
        b = this.gj.length;
      for (; a < b; ) {
        let c = this.gj[a++],
          d = 0,
          e = c.actions.length;
        for (; d < e; ) c.actions[d++].ia();
      }
    }
    $ea(a, b) {
      let c = (b.length = 0),
        d = this.gj.length;
      for (; c < d; ) {
        let e = this.gj[c++],
          f = 0,
          g = e.actions.length;
        for (; f < g; ) {
          let h = e.actions[f++],
            k = 0,
            l = h.actions.length;
          for (; k < l; ) {
            let n = h.actions[k++];
            n.model == a && b.push(n);
          }
        }
      }
    }
    $6a(a, b) {
      let c = (b.length = 0),
        d = this.N_.length;
      for (; c < d; ) {
        let e = this.N_[c++];
        e.model == a && b.push(e);
      }
    }
    s0(a, b) {
      let c = 0,
        d = this.gj;
      for (; c < d.length; ) {
        var e = d[c];
        ++c;
        if (a == e.model) {
          let f = 0;
          for (e = e.actions; f < e.length; ) {
            let g = e[f];
            ++f;
            if (g.Xt.nb == b) return g;
          }
        }
      }
      return null;
    }
    pBa(a, b) {
      return this.s0(a.model, b);
    }
    ME(a) {
      let b = this.$7a(a.model),
        c = 0;
      for (a = a.Oa; c < a.length; ) {
        let d = a[c];
        ++c;
        let e = 0,
          f = b.actions;
        for (; e < f.length; ) {
          let g = f[e];
          ++e;
          g.Xt.nb == d && g.wP(!0);
        }
        b.nsb(d);
      }
    }
    Q3a() {
      let a = 0,
        b = this.gj;
      for (; a < b.length; )
        m.forEach(b[a++].Oa, function (c) {
          c.enabled = !0;
        });
    }
    T4a() {
      let a = 0,
        b = this.gj;
      for (; a < b.length; ) {
        let c = 0,
          d = b[a++].actions;
        for (; c < d.length; ) d[c++].r0a();
      }
    }
    kpb(a, b) {
      var c = !0;
      c == null && (c = !1);
      let d = 0,
        e = this.gj;
      for (; d < e.length; ) {
        let f = e[d];
        ++d;
        if (a == f.model) {
          this.iLa(f, a, b, c);
          break;
        }
      }
    }
    iLa(a, b, c, d) {
      d == null && (d = !1);
      let e = this.pBa(a, c.Wa);
      e == null && ((e = new Gw()), (e.Xt = new Fp(c.Wa)), a.actions.push(e));
      let f = m.l(),
        g = 0;
      for (c = c.actions; g < c.length; ) {
        let h = c[g];
        ++g;
        let k = new np();
        k.model = h.y6a(a.model);
        k.sk = b;
        k.action = h;
        k.ww = !1;
        k.Nv = 0;
        k.Xf = 0;
        h.frames != null && (k.Xf = h.frames.Wb().Zn());
        d ? f.push(k) : e.sY.push(k);
      }
      f.length > 0 && e.rF(f);
    }
    XWa(a, b) {
      b != null &&
        (b.Fj(a.Aza, 4),
        b.Fj(a.uz, 2),
        b.Fj(a.Cza, 5),
        b.Fj(a.Bza, 6),
        b.Fj(a.Eza, 7),
        b.Fj(a.Dza, 8),
        b.Fj(a.Fza, 1),
        b.Fj(a.Gza, 3),
        b.Fj(a.sz, 9),
        b.Fj(a.wz, 12),
        b.Fj(a.vz, 13),
        b.Fj(a.rz, 10),
        b.Fj(a.mQ, 11),
        b.Fj(a.xz, 14),
        b.Fj(a.yza, 15),
        b.Fj(a.zza, 16),
        a.Oa.push(new Fp(b)));
    }
    $Wa(a) {
      this.N_.push(a);
    }
    $7a(a) {
      return m.find(this.gj, function (b) {
        return b.model == a;
      });
    }
    pZa(a, b) {
      b == 14 &&
        ((this.oX.model = a),
        (this.oX.L_ = b),
        (a = X.Xa(this.pg, "ModExpires") ? this.pg.get("ModExpires") : null),
        (this.oX.data = a),
        this.hh(b, this.oX));
    }
    static vWa(a) {
      if (a.action.qm) {
        let b = a.action;
        b != null &&
          (X.Xa(bc.Kt, b.Jd) ? m.cd(bc.Kt.get(b.Jd), a) : bc.Kt.set(b.Jd, [a]));
      }
    }
    static hnb(a) {
      if (a.action.qm) {
        let b = a.action;
        b != null && X.Xa(bc.Kt, b.Jd) && J.remove(bc.Kt.get(b.Jd), a);
      }
    }
    static q_a(a, b) {
      if (X.Xa(bc.Kt, b)) {
        let c = 0;
        for (b = bc.Kt.get(b); c < b.length; )
          if (b[c++].action.name == a) return !0;
      }
      return !1;
    }
    static r5a(a, b) {
      if (!X.Xa(bc.Kt, b)) return null;
      let c = 0;
      for (b = bc.Kt.get(b); c < b.length; ) {
        let d = b[c];
        ++c;
        if (d.action.name == a) return d;
      }
      return null;
    }
    static wAa(a) {
      let b = new Ia();
      return X.wh(bc.Kt, a, b) ? b.G : null;
    }
  }
  bc.g = "2DB";
  bc.u = fd;
  Object.assign(bc.prototype, { j: bc });
