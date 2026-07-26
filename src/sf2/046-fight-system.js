// 046-fight-system.js
// Domain: ai  |  43 class(es)  |  tree root(s): np, Ow, fd, Jp, Kw, Kf, Pw, Lc, ib, hl
// Edit here. Run `npm run build` to reassemble the full bundle.
  class np {
    constructor(a) {
      this.yz = 0;
      this.ox = !1;
      this.image = this.stack = "";
      this.Nv = this.Xf = 0;
      this.ww = !1;
      a != null &&
        ((this.ww = a.ww),
        (this.sk = a.sk),
        (this.model = a.model),
        (this.action = a.action),
        (this.Nv = a.Nv),
        (this.Xf = a.Xf),
        (this.image = a.image),
        (this.stack = a.stack),
        (this.ox = a.ox),
        (this.yz = a.yz));
    }
  }
  np.g = "2DC";
  Object.assign(np.prototype, { j: np });
  class Ow {
    constructor() {
      this.L_ = 0;
      this.model = this.data = null;
    }
  }
  Ow.g = "2DD";
  Object.assign(Ow.prototype, { j: Ow });
  class Ih extends fd {
    constructor(a, b, c, d) {
      d == null && (d = 0);
      c == null && (c = 0);
      super();
      this.Be = c;
      this.level = b;
      this.Nc = a;
      this.hE = !1;
      this.type = d;
      this.Tb = this.Nc != null ? this.Nc.description : "";
    }
    Mla(a) {
      this.Be = a;
      this.hh(0, this.Be);
    }
    M5(a) {
      this.Nc = a;
      this.hh(2, 0);
    }
    MD() {
      return this.Tb;
    }
    ula(a) {
      this.Tb = a;
      this.hh(3, 0);
    }
    UQ() {
      return this.Nc != null ? this.Nc.Vc : 0;
    }
    IBa() {
      return this.Nc != null ? this.Nc.move : "";
    }
    getName() {
      return this.Nc != null ? this.Nc.name : "";
    }
    p7a() {
      return this.Nc != null ? this.Nc.image : "";
    }
    oBa() {
      if (this.Nc == null) return null;
      let a = sa.Jfa(),
        b = 0,
        c = a.length;
      for (; b < c; ) {
        let d = b++;
        if (a[d].name == this.Nc.move) return a[d].dr;
      }
      return null;
    }
  }
  Ih.g = "2DE";
  Ih.u = fd;
  Object.assign(Ih.prototype, { j: Ih });
  class Jp {
    constructor(a) {
      this.Oa = m.l();
      this.level = a != null ? a : 0;
    }
  }
  Jp.g = "2DF";
  Object.assign(Jp.prototype, { j: Jp });
  class Kw {
    constructor(a) {
      this.kQ = "";
      this.gf = 0;
      this.Pb = this.Xb = this.Zi = "";
      a != null &&
        ((this.Pb = a.Pb),
        (this.Xb = a.Xb),
        (this.Zi = a.Zi),
        (this.gf = a.gf),
        (this.kQ = a.kQ));
    }
    parse(a, b) {
      if (b != null) {
        let d = a.attributes.entries(),
          e = d.next();
        for (; !e.done; ) {
          let f = e.value;
          e = d.next();
          var c = f[1];
          c = c != null ? c : "";
          c.charAt(0) == "_" &&
            ((c = J.substr(c, 1, c.length - 1)),
            a.set(f[0], X.Xa(b, c) ? b.get(c) : c));
        }
      }
      b = a.attributes.get("Player");
      this.Pb = b != null ? b : "Me";
      b = a.attributes.get("Damage");
      this.Xb = b != null ? b : null;
      b = a.attributes.get("Defense");
      this.Zi = b != null ? b : null;
      this.gf = u.H(a.attributes.get("Multiplier"));
      a = a.attributes.get("EnemyAttribute");
      this.kQ = a != null ? a : null;
    }
  }
  Kw.g = "2E0";
  Object.assign(Kw.prototype, { j: Kw });
  class Na extends Kf {
    constructor(a) {
      super(a);
      this.Jd = this.d3 = this.name = null;
      this.type = 0;
      this.qm = !1;
      this.frames = this.EA = null;
      a != null &&
        ((this.name = a.name),
        (this.d3 = a.d3),
        (this.Jd = a.Jd),
        (this.type = a.type),
        (this.qm = a.qm),
        (this.EA = a.EA),
        (this.frames = a.frames));
    }
    parse(a) {
      super.parse(a);
      this.d3 = a.name;
      var b = a.attributes.get("Name");
      this.name = b != null ? b : "";
      b = a.attributes.get("Frames");
      b = b != null ? b : "";
      b != null &&
        b != "" &&
        (this.frames = Qa.ph(
          b,
          ((T = this.Wa), w(T, T.Ye)),
          ((T = this.Wa), w(T, T.Ze)),
          this,
        ));
      a = a.attributes.get("Namespace");
      this.Jd = a != null ? a : "";
    }
    y6a(a) {
      return this.Pb == 1 ? a : this.Pb == 2 ? a.jb : null;
    }
    static create(a, b, c) {
      let d = m.l();
      a = a.children;
      let e = 0;
      for (; e < a.length; ) {
        let f = a[e++],
          g;
        switch (f.name) {
          case "AddBullets":
            g = new Kp();
            break;
          case "AddMagicCharge":
            g = new Lp();
            break;
          case "ApplyModEffect":
            g = new Mp();
            break;
          case "ChangeAdditionalDamageValue":
            g = new Np();
            break;
          case "ChangeHitEffectScale":
            g = new Op();
            break;
          case "ChangeImpulse":
            g = new Pp();
            break;
          case "ChangeModelColor":
            g = new Qp();
            break;
          case "ClearMods":
            g = new Rp();
            break;
          case "DisableInterval":
            g = new Sp();
            break;
          case "Lifesteal":
            g = new Tp();
            break;
          case "MarkPerkAsUsed":
            g = new Up();
            break;
          case "ModAttributes":
            g = new Vp();
            break;
          case "ModFlag":
            g = new Wp();
            break;
          case "ModHealthChange":
            g = new Xp();
            break;
          case "ModIcon":
            g = new Yp();
            break;
          case "ModInvisibility":
            g = new Zp();
            break;
          case "MoveModel":
            g = new $p();
            break;
          case "Provoke":
            g = new aq();
            break;
          case "SetCooldown":
            g = new bq();
            break;
          case "SetDarkness":
            g = new cq();
            break;
          case "SetHit":
            g = new dq();
            break;
          case "SetModFrames":
            g = new eq();
            break;
          case "SetModVariable":
            g = new fq();
            break;
          case "SetRangeVariable":
            g = new gq();
            break;
          case "SetTactic":
            g = new hq();
            break;
          case "ShowDebugLine":
            g = new iq();
            break;
          case "SlowModel":
            g = new jq();
            break;
          case "StealMagicMod":
            g = new Lf();
            break;
          case "Switch":
            g = new kq();
            break;
          case "TurnOffCollision":
            g = new lq();
            break;
          default:
            g = null;
        }
        g != null && ((g.Wa = b), (g.EA = c), g.parse(f), d.push(g));
      }
      return d;
    }
  }
  Na.g = "2E1";
  Na.u = Kf;
  Object.assign(Na.prototype, { j: Na });
  class Kp extends Na {
    constructor(a) {
      super(a);
      this.value = this.jZ = null;
      a != null && ((this.jZ = a.jZ), (this.value = a.value));
    }
    parse(a) {
      super.parse(a);
      this.type = 7;
      let b = a.attributes.get("BulletType");
      this.jZ = b != null ? b : "";
      a = a.attributes.get("Value");
      a = a != null ? a : "";
      a != null &&
        a != "" &&
        (this.value = Qa.ph(
          a,
          ((T = this.Wa), w(T, T.Ye)),
          ((T = this.Wa), w(T, T.Ze)),
          this,
        ));
    }
  }
  Kp.g = "2E2";
  Kp.u = Na;
  Object.assign(Kp.prototype, { j: Kp });
  class Lp extends Na {
    constructor(a) {
      super(a);
      this.value = null;
      a != null && (this.value = a.value);
    }
    parse(a) {
      super.parse(a);
      this.type = 8;
      a = a.attributes.get("Value");
      a = a != null ? a : "";
      a != null &&
        a != "" &&
        (this.value = Qa.ph(
          a,
          ((T = this.Wa), w(T, T.Ye)),
          ((T = this.Wa), w(T, T.Ze)),
          this,
        ));
    }
  }
  Lp.g = "2E3";
  Lp.u = Na;
  Object.assign(Lp.prototype, { j: Lp });
  class Tb extends Na {
    constructor(a) {
      super(a);
      this.qm = !0;
      a != null && (this.qm = a.qm);
    }
  }
  Tb.g = "2E4";
  Tb.u = Na;
  Object.assign(Tb.prototype, { j: Tb });
  class Np extends Tb {
    constructor(a) {
      super(a);
      this.Qy = null;
      a != null && (this.Qy = a.Qy);
    }
    parse(a) {
      super.parse(a);
      this.type = 22;
      a = a.attributes.get("Value");
      this.Qy = Qa.ph(
        a != null ? a : "0",
        ((T = this.Wa), w(T, T.Ye)),
        ((T = this.Wa), w(T, T.Ze)),
        this,
      );
    }
  }
  Np.g = "2E5";
  Np.u = Tb;
  Object.assign(Np.prototype, { j: Np });
  class Op extends Na {
    constructor(a) {
      super(a);
      this.Tz = 1;
      a != null && (this.Tz = a.Tz);
    }
    parse(a) {
      super.parse(a);
      this.type = 21;
      this.Tz = u.H(a.attributes.get("Scale"));
    }
  }
  Op.g = "2E6";
  Op.u = Na;
  Object.assign(Op.prototype, { j: Op });
  class Pp extends Na {
    constructor(a) {
      super(a);
      this.c3 = this.b3 = this.a3 = 1;
      a != null && ((this.a3 = a.a3), (this.b3 = a.b3), (this.c3 = a.c3));
    }
    parse(a) {
      super.parse(a);
      this.type = 20;
      this.a3 = u.H(a.attributes.get("MultiplierX"));
      this.b3 = u.H(a.attributes.get("MultiplierY"));
      this.c3 = u.H(a.attributes.get("MultiplierZ"));
    }
  }
  Pp.g = "2E7";
  Pp.u = Na;
  Object.assign(Pp.prototype, { j: Pp });
  class Qp extends Tb {
    constructor(a) {
      super(a);
      this.eK = null;
      a != null && (this.eK = a.eK);
    }
    parse(a) {
      super.parse(a);
      this.type = 29;
      this.eK = null;
      a = a.attributes.get("Color");
      a = a != null ? a : null;
      a != null &&
        a != "" &&
        (this.eK = Qa.ph(
          a,
          ((T = this.Wa), w(T, T.Ye)),
          ((T = this.Wa), w(T, T.Ze)),
          this,
        ));
    }
    Vs(a, b) {
      debugger;
      if (b) ca.Ka() != null && a.model.Vs(ca.Ka().location.W2);
      else if (this.eK != null) {
        debugger;
        a.model.Vs(K.parseInt(this.eK.Wb().result));
      }
    }
  }
  Qp.g = "2E8";
  Qp.u = Tb;
  Object.assign(Qp.prototype, { j: Qp });
  class Rp extends Na {
    constructor(a) {
      super(a);
      this.qA = null;
      a != null && (this.qA = a.qA);
    }
    parse(a) {
      super.parse(a);
      this.type = 4;
      a = a.attributes.get("Name");
      this.qA = a != null ? a : "";
    }
  }
  Rp.g = "2E9";
  Rp.u = Na;
  Object.assign(Rp.prototype, { j: Rp });
  class Sp extends Na {
    constructor(a) {
      super(a);
      this.Yz = this.rw = null;
      a != null && ((this.rw = a.rw), (this.Yz = a.Yz));
    }
    parse(a) {
      super.parse(a);
      this.type = 6;
      let b = a.attributes.get("IntervalName");
      this.rw = b != null ? b : "";
      a = a.attributes.get("IntervalType");
      this.Yz = a != null ? a : "";
    }
  }
  Sp.g = "2EA";
  Sp.u = Na;
  Object.assign(Sp.prototype, { j: Sp });
  class Wp extends Tb {
    constructor(a) {
      super(a);
    }
    parse(a) {
      super.parse(a);
      this.type = 5;
    }
  }
  Wp.g = "2EB";
  Wp.u = Tb;
  Object.assign(Wp.prototype, { j: Wp });
  class Tp extends Na {
    constructor(a) {
      super(a);
      this.b_ = 0;
      a != null && (this.b_ = a.b_);
    }
    parse(a) {
      super.parse(a);
      this.type = 14;
      this.b_ = u.H(a.attributes.get("DamagePart"));
    }
  }
  Tp.g = "2EC";
  Tp.u = Na;
  Object.assign(Tp.prototype, { j: Tp });
  class Up extends Na {
    constructor(a) {
      super(a);
    }
    parse(a) {
      super.parse(a);
      this.type = 24;
      this.qm = !1;
    }
  }
  Up.g = "2ED";
  Up.u = Na;
  Object.assign(Up.prototype, { j: Up });
  class Xp extends Tb {
    constructor(a) {
      super(a);
      this.X3 = 0;
      a != null && (this.X3 = a.X3);
    }
    parse(a) {
      super.parse(a);
      this.type = 12;
      this.X3 = u.H(a.attributes.get("PerFrameValue"));
    }
  }
  Xp.g = "2EE";
  Xp.u = Tb;
  Object.assign(Xp.prototype, { j: Xp });
  class Zp extends Tb {
    constructor(a) {
      super(a);
    }
    parse(a) {
      super.parse(a);
      this.type = 15;
    }
  }
  Zp.g = "2EF";
  Zp.u = Tb;
  Object.assign(Zp.prototype, { j: Zp });
  class $p extends Na {
    constructor(a) {
      super(a);
      this.$X = this.XV = 0;
      this.HW = this.ZN = this.YN = null;
      this.lV = this.kV = !1;
      a != null &&
        ((this.XV = a.XV),
        (this.$X = a.$X),
        (this.kV = a.kV),
        (this.lV = a.lV),
        (this.YN = a.YN),
        (this.ZN = a.ZN),
        (this.HW = a.HW));
    }
    parse(a) {
      super.parse(a);
      this.type = 31;
      var b = a.attributes.get("LerpSpeed");
      b = b != null ? b : "";
      b != null &&
        b != "" &&
        (this.HW = Qa.ph(
          b,
          ((T = this.Wa), w(T, T.Ye)),
          ((T = this.Wa), w(T, T.Ze)),
          this,
        ));
      b = a.attributes.get("FromPlayer");
      this.XV = this.jfa(b != null ? b : "");
      b = a.attributes.get("ToPlayer");
      this.$X = this.jfa(b != null ? b : "");
      b = a.attributes.get("PositionOffsetX");
      b = b != null ? b : null;
      b != null &&
        b != "" &&
        (this.YN = Qa.ph(
          b,
          ((T = this.Wa), w(T, T.Ye)),
          ((T = this.Wa), w(T, T.Ze)),
          this,
        ));
      b = a.attributes.get("PositionOffsetY");
      b = b != null ? b : null;
      b != null &&
        b != "" &&
        (this.ZN = Qa.ph(
          b,
          ((T = this.Wa), w(T, T.Ye)),
          ((T = this.Wa), w(T, T.Ze)),
          this,
        ));
      a = a.attributes.get("Axis");
      a = (a != null ? a : "").split("|");
      for (b = 0; b < a.length; ) {
        let c = a[b];
        ++b;
        c == "X" && (this.kV = !0);
        c == "Y" && (this.lV = !0);
      }
    }
    S(a) {
      debugger;
      a = a.sk;
      var b = this.XV == 2 ? a.jb : a,
        c = this.$X == 1 ? a : a.jb,
        d = c.pa.Ge().id;
      c = c.da.jBa(d);
      if (c != null) {
        d = this.YN != null ? this.YN.Wb().uu() : 0;
        var e = this.ZN != null ? this.ZN.Wb().uu() : 0;
        c.x += b.da.jd() * d;
        c.y += e;
        d = b.pa.Ge().id;
        b = b.da.jBa(d);
        a.TW.gK = new Pw(a.da, b, c, this.HW, this.kV, this.lV);
      }
    }
  }
  $p.g = "2F0";
  $p.u = Na;
  Object.assign($p.prototype, { j: $p });
  class Pw {
    constructor(a, b, c, d, e, f) {
      this.Qba = !0;
      this.QZ = 0;
      this.animation = a;
      this.start = b;
      this.target = c;
      this.iI = e;
      this.jI = f;
      a.model.model.qK.addListener(w(this, this.dOa));
      e = a.Ua.K7a() - 1;
      e <= 0 && (e = a.Ua.ED(!1) - 1);
      a = 1 / e;
      this.C2 = d != null ? d.Wb().uu() : 0.05;
      this.C2 = this.C2 < a ? a : this.C2;
      this.Swb = new H(b.x, b.y, b.z, 1);
      this.Exb = new H(c.x, c.y, c.z, 1);
    }
    update() {
      if (!this.Qba) return !1;
      if (this.QZ < 1) {
        let b = this.Swb,
          c = this.Exb;
        var a = this.QZ;
        a = a < 0 ? 0 : a > 1 ? 1 : a;
        this.animation.gK(
          new H(
            b.x + (c.x - b.x) * a,
            b.y + (c.y - b.y) * a,
            b.z + (c.z - b.z) * a,
            1,
          ),
          this.iI,
          this.jI,
        );
        this.QZ += this.C2;
        return !0;
      }
      this.animation.model.model.qK.removeListener(w(this, this.dOa));
      return (this.Qba = !1);
    }
    dOa() {
      this.Qba = !1;
    }
  }
  Pw.g = "2F1";
  Object.assign(Pw.prototype, { j: Pw });
  class aq extends Na {
    constructor(a) {
      super(a);
      this.YL = null;
      a != null && (this.YL = a.YL);
    }
    parse(a) {
      super.parse(a);
      this.type = 13;
      a = a.attributes.get("Trigger");
      this.YL = a != null ? a : "";
    }
  }
  aq.g = "2F2";
  aq.u = Na;
  Object.assign(aq.prototype, { j: aq });
  class Vp extends Tb {
    constructor(a) {
      super(a);
      this.gP = null;
      a != null && (this.gP = a.gP);
    }
    parse(a) {
      super.parse(a);
      this.type = 3;
      this.gP = new Map();
      let b = 0,
        c = v.ho.attributes;
      for (; b < c.length; ) {
        let e = c[b];
        ++b;
        var d = a.attributes.get(e.name);
        d != null &&
          this.gP.set(
            e.name,
            Qa.ph(
              d != null ? d : "",
              ((T = this.Wa), w(T, T.Ye)),
              ((T = this.Wa), w(T, T.Ze)),
              this,
            ),
          );
      }
    }
  }
  Vp.g = "2F3";
  Vp.u = Tb;
  Object.assign(Vp.prototype, { j: Vp });
  class bq extends Na {
    constructor(a) {
      super(a);
      this.IZ = 0;
      this.Fv = null;
      a != null && ((this.IZ = a.IZ), (this.Fv = a.Fv));
    }
    parse(a) {
      super.parse(a);
      this.type = 19;
      this.IZ = u.I(a.attributes.get("Frames"));
      a = a.attributes.get("Button");
      this.Fv = a != null ? a : "";
    }
  }
  bq.g = "2F4";
  bq.u = Na;
  Object.assign(bq.prototype, { j: bq });
  class cq extends Na {
    constructor(a) {
      super(a);
      this.color = null;
      this.lAa = 0;
      this.show = !1;
      a != null && (this.color = a.color);
    }
    parse(a) {
      super.parse(a);
      this.qm = !1;
      this.type = 25;
      let b = a.attributes.get("Opacity");
      var c = a.attributes.get("Color");
      c = qz.W4a((c != null ? c : "").toLowerCase());
      b != null && (c.w = u.H(b, 1));
      this.color = c;
      this.lAa = u.I(a.attributes.get("FrameTimer"));
      this.show = u.ka(a.attributes.get("Show"));
    }
  }
  cq.g = "2F5";
  cq.u = Na;
  Object.assign(cq.prototype, { j: cq });
  class dq extends Na {
    constructor(a) {
      super(a);
      this.$i = this.Ub = this.block = this.se = 0;
      this.Xb = null;
      a != null &&
        ((this.se = a.se),
        (this.block = a.block),
        (this.Ub = a.Ub),
        (this.$i = a.$i),
        (this.Xb = a.Xb));
    }
    parse(a) {
      super.parse(a);
      this.type = 9;
      this.se = u.I(a.attributes.get("Critical"), -1);
      this.block = u.I(a.attributes.get("Block"), -1);
      this.Ub = u.I(a.attributes.get("Shock"), -1);
      this.$i = u.I(a.attributes.get("Disarm"), -1);
      this.Xb = null;
      a = a.attributes.get("Damage");
      a = a != null ? a : "";
      a != null &&
        a != "" &&
        (this.Xb = Qa.ph(
          a,
          ((T = this.Wa), w(T, T.Ye)),
          ((T = this.Wa), w(T, T.Ze)),
          this,
        ));
    }
  }
  dq.g = "2F6";
  dq.u = Na;
  Object.assign(dq.prototype, { j: dq });
  class Mp extends Na {
    constructor(a) {
      super(a);
      this.U2 = 0;
      this.e6 = this.si = null;
      a != null && ((this.U2 = a.U2), (this.si = a.si), (this.e6 = a.e6));
    }
    parse(a) {
      super.parse(a);
      this.type = 11;
      var b = a.attributes.get("Name");
      this.si = b != null ? b : "";
      b = a.attributes.get("Type");
      this.U2 = this.Q6a(b != null ? b : "");
      a = a.attributes.get("StackCount");
      a = a != null ? a : null;
      a != null &&
        a != "" &&
        (this.e6 = Qa.ph(
          a,
          ((T = this.Wa), w(T, T.Ye)),
          ((T = this.Wa), w(T, T.Ze)),
          this,
        ));
    }
    Q6a(a) {
      return a == "Pulse" ? 1 : a == "Stack" ? 2 : 0;
    }
  }
  Mp.g = "2F7";
  Mp.u = Na;
  Object.assign(Mp.prototype, { j: Mp });
  class eq extends Na {
    constructor(a) {
      super(a);
      this.dK = this.si = null;
      a != null && ((this.si = a.si), (this.dK = a.dK));
    }
    parse(a) {
      super.parse(a);
      this.type = 10;
      let b = a.attributes.get("Name");
      this.si = b != null ? b : "";
      a.attributes.get("markUsed");
      this.dK = null;
      a = a.attributes.get("Frames");
      a = a != null ? a : "";
      a != null &&
        a != "" &&
        (this.dK = Qa.ph(
          a,
          ((T = this.Wa), w(T, T.Ye)),
          ((T = this.Wa), w(T, T.Ze)),
          this,
        ));
    }
  }
  eq.g = "2F8";
  eq.u = Na;
  Object.assign(eq.prototype, { j: eq });
  class fq extends Tb {
    constructor(a) {
      super(a);
      this.value = null;
      a != null && (this.value = a.value);
    }
    parse(a) {
      super.parse(a);
      this.type = 17;
      a = a.attributes.get("Value");
      a = a != null ? a : "";
      a != null &&
        a != "" &&
        (this.value = Qa.ph(
          a,
          ((T = this.Wa), w(T, T.Ye)),
          ((T = this.Wa), w(T, T.Ze)),
          this,
        ));
    }
  }
  fq.g = "2F9";
  fq.u = Tb;
  Object.assign(fq.prototype, { j: fq });
  class gq extends Na {
    constructor(a) {
      super(a);
      this.value = null;
      this.w1 = !1;
      this.minValue = null;
      this.v1 = !1;
      this.maxValue = null;
      a != null &&
        ((this.value = a.value),
        (this.w1 = a.w1),
        (this.minValue = a.minValue),
        (this.v1 = a.v1),
        (this.maxValue = a.maxValue));
    }
    parse(a) {
      super.parse(a);
      this.type = 18;
      var b = a.attributes.get("Value");
      b = b != null ? b : "";
      b != null &&
        b != "" &&
        (this.value = Qa.ph(
          b,
          ((T = this.Wa), w(T, T.Ye)),
          ((T = this.Wa), w(T, T.Ze)),
          this,
        ));
      b = a.attributes.get("MinValue");
      this.w1 = b != null;
      b = b != null ? b : "";
      b != null &&
        b != "" &&
        (this.minValue = Qa.ph(
          b,
          ((T = this.Wa), w(T, T.Ye)),
          ((T = this.Wa), w(T, T.Ze)),
          this,
        ));
      a = a.attributes.get("MaxValue");
      this.v1 = a != null;
      a = a != null ? a : "";
      a != null &&
        a != "" &&
        (this.maxValue = Qa.ph(
          a,
          ((T = this.Wa), w(T, T.Ye)),
          ((T = this.Wa), w(T, T.Ze)),
          this,
        ));
    }
  }
  gq.g = "2FA";
  gq.u = Na;
  Object.assign(gq.prototype, { j: gq });
  class hq extends Na {
    constructor(a) {
      super(a);
      this.RL = null;
      a != null && (this.RL = a.RL);
    }
    parse(a) {
      super.parse(a);
      this.type = 16;
      a = a.attributes.get("Name");
      this.RL = a != null ? a : "";
    }
  }
  hq.g = "2FB";
  hq.u = Na;
  Object.assign(hq.prototype, { j: hq });
  class iq extends Na {
    constructor(a) {
      super(a);
      this.color = this.text = null;
      a != null && ((this.text = a.text), (this.color = a.color));
    }
    parse(a) {
      super.parse(a);
      this.qm = !1;
      this.type = 23;
      a.attributes.get("LineName");
      var b = a.attributes.get("Text");
      b = b != null ? b : "";
      b != null &&
        b != "" &&
        (this.text = Qa.ph(
          b,
          ((T = this.Wa), w(T, T.Ye)),
          ((T = this.Wa), w(T, T.Ze)),
          this,
        ));
      a = a.attributes.get("Color");
      this.color = (a != null ? a : "").toLowerCase();
    }
  }
  iq.g = "2FC";
  iq.u = Na;
  Object.assign(iq.prototype, { j: iq });
  class Yp extends Tb {
    constructor(a) {
      super(a);
      this.image = null;
      this.ox = !1;
      this.yz = 0;
      a != null && ((this.image = a.image), (this.ox = a.ox), (this.yz = a.yz));
    }
    parse(a) {
      super.parse(a);
      this.type = 1;
      let b = a.attributes.get("Image");
      this.image = b != null ? b : "";
      a.attributes.get("MarkUsed");
      this.ox = u.ka(a.attributes.get("ShowExpiration"), !1);
      this.yz = u.I(a.attributes.get("ExpirationVer"));
    }
  }
  Yp.g = "2FD";
  Yp.u = Tb;
  Object.assign(Yp.prototype, { j: Yp });
  class jq extends Tb {
    constructor(a) {
      super(a);
      this.nU = 0;
      this.LL = null;
      a != null && ((this.LL = a.LL), (this.nU = a.nU));
    }
    parse(a) {
      super.parse(a);
      this.type = 28;
      this.nU = u.ka(a.attributes.get("IsRulePerk"), !1) ? 1 : 2;
      this.LL = null;
      a = a.attributes.get("Speed");
      a = a != null ? a : "";
      a != null &&
        a != "" &&
        (this.LL = Qa.ph(
          a,
          ((T = this.Wa), w(T, T.Ye)),
          ((T = this.Wa), w(T, T.Ze)),
          this,
        ));
    }
    fwb(a, b) {
      debugger;
      if (b) a.model.QT(this.nU, v.gB);
      else if (((b = this.LL == null ? v.qn() : this.LL.Wb().Zn()), !(b < 1)))
        switch (this.nU) {
          case 1:
            a.model.QT(1, b);
            break;
          case 2:
            a.model.QT(2, b);
        }
    }
  }
  jq.g = "2FE";
  jq.u = Tb;
  Object.assign(jq.prototype, { j: jq });
  class Lf extends Tb {
    constructor(a) {
      super(a);
      this.eN = null;
      this.nH = m.l();
      this.oH = m.l();
      this.B8 = -1;
      this.FV = null;
    }
    parse(a) {
      super.parse(a);
      this.type = 27;
    }
    cp(a, b) {
      debugger;
      b ? this.reset(a) : this.txb(a);
    }
    reset(a) {
      debugger;
      if (this.eN != null) {
        this.FV != null &&
          ((this.FV.priority = this.B8), (this.B8 = -1), (this.FV = null));
        a.model.parameters.ik(I.Ff, this.eN);
        for (var b = 0, c = this.oH; b < c.length; ) {
          var d = c[b++];
          J.remove(a.model.Po, d);
        }
        b = 0;
        for (c = this.nH; b < c.length; )
          ((d = c[b++]), J.remove(a.model.me, d));
        a.model.Xu.Bnb(this.nH);
        a.model.MB.Snb(this.oH);
        this.eN = null;
        this.nH.length = 0;
        this.oH.length = 0;
      }
    }
    txb(a) {
      debugger;
      let b = a.model.jb.parameters.Fd(I.Ff);
      b != null &&
        b.type == I.Ff &&
        b.name != I.bUa &&
        ((this.eN = a.model.parameters.Fd(I.Ff)),
        (b = b.clone()),
        (b.kE = !0),
        a.model.parameters.ik(I.Ff, b),
        this.j4a(a.model, a.model.jb));
    }
    j4a(a, b) {
      debugger;
      for (var c = 0, d = a.me; c < d.length; ) {
        var e = d[c];
        ++c;
        if (e.Al.includes(Lf.JTa) && e.XX.includes(this.eN.Yb)) {
          this.FV = e;
          this.B8 = e.priority;
          e.priority = 0;
          break;
        }
      }
      d = new Ae();
      d.items = m.l();
      d.items.push(a.parameters.Ng);
      d.items.push(a.parameters.Rf);
      d.xr = a;
      d.oE = !1;
      d.wl = a.parameters.wl;
      d.IA = a.parameters.Yk();
      d.qz = b.parameters.Yk();
      d.Wo = ca.Ka().Da.type;
      e = 0;
      for (var f = b.me; e < f.length; ) {
        let g = f[e];
        ++e;
        g.qZ(Lf.Qeb) &&
          ((c = g.va.locks),
          g.sw(d, c) &&
            ((a.parameters.jK != null && g.qZ(a.parameters.jK)) ||
              a.me.includes(g) ||
              this.nH.push(g)));
      }
      e = 0;
      for (b = b.Po; e < b.length; )
        ((f = b[e]),
          ++e,
          (c = f.Cl.locks),
          f.sw(d, c) && !a.Po.includes(f) && this.oH.push(f));
      m.addRange(a.Po, this.oH);
      m.addRange(a.me, this.nH);
      a.Xu.LT(this.nH);
      a.MB.C5(this.oH);
    }
  }
  Lf.g = "2FF";
  Lf.u = Tb;
  Object.assign(Lf.prototype, { j: Lf });
  class kq extends Na {
    constructor(a) {
      super(a);
      this.Uba = new Map();
      m.l();
      a != null && (this.Uba = a.Uba);
    }
    parse(a) {
      super.parse(a);
      this.type = 26;
      this.qm = !1;
      var b = a.attributes.get("Value");
      b = b != null ? b : null;
      b != null &&
        b != "" &&
        Qa.ph(
          b,
          ((T = this.Wa), w(T, T.Ye)),
          ((T = this.Wa), w(T, T.Ze)),
          this,
        );
      a = a.children;
      for (b = 0; b < a.length; ) {
        var c = a[b++],
          d = void 0;
        c.name == "Case"
          ? ((d = c.attributes.get("Value")), (d = d != null ? d : null))
          : (d = null);
        d != null
          ? ((c = Na.create(c, this.Wa, this.EA)), this.Uba.set(d, c))
          : c.name == "Default" && Na.create(c, this.Wa, this.EA);
      }
    }
    s5a() {
      debugger;
      return null;
    }
  }
  kq.g = "300";
  kq.u = Na;
  Object.assign(kq.prototype, { j: kq });
  class lq extends Tb {
    constructor(a) {
      super(a);
    }
    parse(a) {
      super.parse(a);
      this.type = 30;
    }
    S(a, b) {
      debugger;
      if (b) for (b = 0, a = a.sk.pa.Ql.tI; b < a.length; ) a[b++].CZ = !0;
      else for (b = 0, a = a.sk.pa.Ql.tI; b < a.length; ) a[b++].CZ = !1;
    }
  }
  lq.g = "301";
  lq.u = Tb;
  Object.assign(lq.prototype, { j: lq });
  class Lc {
    constructor(a, b, c, d, e, f, g, h, k, l, n, q, r, t, x, z) {
      this.eX = null;
      this.yc = m.l();
      this.K8 = m.l();
      this.jR = null;
      this.position = b;
      this.name = c;
      this.Eg = k;
      this.t6 = l;
      this.icon = d;
      switch (e) {
        case "preview_start.arena":
          e = "preview_main.arena";
          break;
        case "preview_start.lynx":
          e = "preview_bosses.lynx";
      }
      this.Klb = e;
      this.description = f;
      this.pl = null;
      this.isActive = !1;
      this.ob = null;
      this.gL = g;
      this.QK = h;
      this.OB = !1;
      this.Rza = 0;
      this.location = n;
      this.Ap = q;
      this.dg = 0;
      this.ZKa = r;
      this.IDa = x;
      this.mza = z;
      this.Lkb(a);
    }
    YQ() {
      return "" + this.pl.name + "|" + this.name + "|";
    }
    Nea(a) {
      let b = 0,
        c = this.yc;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.name == a) return d;
      }
      return null;
    }
    gBa(a) {
      if (!this.K8.includes(a)) return null;
      let b = this.Nea(a);
      if (b == null) {
        let c = 0,
          d = 0,
          e = this.eX.kp("Fight");
        for (; d < e.length; ) {
          let f = e[d];
          ++d;
          let g = f.attributes.get("Name");
          if ((g != null ? g : "") == a) {
            b = this.ZIa(f, c);
            break;
          }
          ++c;
        }
      }
      return b;
    }
    Oz() {
      this.OB || this.Wt();
      return this.yc;
    }
    gfa() {
      let a = 0,
        b = this.dg;
      for (; a < b; ) {
        let c = this.n0(a++);
        if (c.status == 2) return c;
      }
      return null;
    }
    n0(a) {
      if (a > this.dg - 1) return null;
      let b = 0,
        c = this.yc;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.index == a) return d;
      }
      return this.YIa(a);
    }
    p$a() {
      return Lc.FQa + this.icon;
    }
    o$a() {
      return Lc.EQa + this.icon;
    }
    s$a() {
      return Lc.IQa + this.icon;
    }
    q$a() {
      return Lc.GQa + this.icon;
    }
    r$a() {
      return Lc.HQa + this.icon;
    }
    jJ() {
      let a = this.dg;
      this.OB || this.Wt();
      return this.RAa(1) == a ? 1 : this.RAa(3) == a ? 3 : 2;
    }
    setStatus(a) {
      let b = 0,
        c = this.yc;
      for (; b < c.length; ) c[b++].status = a;
    }
    setTime(a) {
      let b = 0,
        c = this.yc;
      for (; b < c.length; ) c[b++].setTime(a);
    }
    update() {}
    wMa(a, b) {
      a.lx(p.Rxa(a, b));
    }
    pMa() {
      var a = null;
      this.OB || this.Wt();
      let b = 0,
        c = this.yc;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.status == 2) {
          d.index > 0 && (a = this.yc[d.index - 1]);
          break;
        }
      }
      a == null && (a = this.yc[this.yc.length - 1]);
      a = a.Yc;
      a != null && (a.Mtb(), a.Vtb());
    }
    Fab() {
      let a = 0,
        b = this.yc;
      for (; a < b.length; ) if (b[a++].status == 1) return !0;
      return !1;
    }
    yt() {
      return this.ob != null ? this.ob.yt() : !1;
    }
    Nnb() {
      this.ob = null;
    }
    ni() {
      return this.ob != null ? this.ob.ni() : !1;
    }
    vL(a) {
      this.W0a(a);
      this.eX = a;
    }
    Wt() {
      let a = 0,
        b = this.dg;
      for (; a < b; ) {
        let c = a++,
          d =
            m.find(this.yc, function (e) {
              return e.index == c;
            }) != null;
        d || (d = this.Qzb(c));
        d || this.YIa(c);
      }
    }
    Aq(a, b) {
      a.og = this;
      a.index = b;
      this.yc.push(a);
      p.F().Aq(a);
      ++this.Rza;
      this.Rza >= this.dg && (this.OB = !0);
      this.yc.sort(function (c, d) {
        return c.index - d.index;
      });
    }
    ola() {}
    Lkb(a) {
      this.type = p.F().i0(a);
    }
    Qzb(a) {
      let b = 0,
        c = p.a7a(this);
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.index == a) return (this.Aq(d, a), !0);
      }
      return !1;
    }
    YIa(a) {
      let b = 0,
        c = null,
        d = 0,
        e = this.eX.kp("Fight");
      for (; d < e.length; ) {
        let f = e[d++];
        if (a == b) {
          c = f;
          break;
        }
        ++b;
      }
      return this.ZIa(c, a);
    }
    ZIa(a, b) {
      p.F().YD = !1;
      let c = new hl();
      p.F().XIa(c, a, this.type, this.location, this.Ap, this);
      this.Aq(c, b);
      p.F().YD = !0;
      return c;
    }
    RAa(a) {
      let b = 0,
        c = 0,
        d = this.yc;
      for (; c < d.length; ) d[c++].status == a && ++b;
      return b;
    }
    W0a(a) {
      this.dg = 0;
      this.K8.length = 0;
      if (a != null) {
        a = a.kp("Fight");
        this.dg = a.length;
        let b = 0;
        for (; b < a.length; ) {
          let c = a[b++].attributes.get("Name");
          this.K8.push(c != null ? c : "");
        }
      }
    }
  }
  Lc.g = "302";
  Object.assign(Lc.prototype, { j: Lc });
  class Gb extends Lc {
    constructor(a, b, c, d, e, f, g, h, k, l, n, q, r, t, x) {
      super(a, b, c, d, e, f, g, h, k, l, n, q, r, t, x);
      Gb.Lm.push(this);
    }
    setTime(a) {
      Gb.time = Gb.Ls <= 0 ? -1 : a - Gb.Ls;
      let b = 0,
        c = this.yc;
      for (; b < c.length; ) c[b++].setTime(a);
    }
    dna(a) {
      let b = this.gfa();
      b == null && (Gb.reset(), this.yc.length > 0 && (b = this.yc[0]));
      if (b != null) {
        let c = p.o,
          d = b.Yc;
        d == null && ((d = c.sya(b.Nb)), b.lx(d));
        d.Nla(a);
        p.o.save();
      }
    }
    Oob(a) {
      a == null && (a = !0);
      let b = 0;
      for (var c = 0, d = this.yc; c < d.length; ) {
        var e = d[c];
        ++c;
        e.status = 2;
        e = e.Yc;
        e != null && a && (b = Math.trunc(Math.max(b, e.Sz())));
      }
      a = 0;
      for (c = this.yc; a < c.length; )
        ((d = c[a++].Yc), d != null && (d.Nla(b), d.Ila(0)));
      p.o.save();
    }
    yrb(a) {
      Gb.Pn = a;
      let b = 0,
        c = this.yc;
      for (; b < c.length; ) c[b++].Pn = a;
    }
    Aq(a, b) {
      super.Aq(a, b);
      this.setTime(Hb.instance.getTime());
    }
    update(a) {
      this.dna(a);
      let b = 0,
        c = Gb.Lm;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        d != this && d.dna(a);
      }
      Gb.Ls = a;
      p.o.YMa(a);
    }
    wMa(a, b) {
      let c = !1,
        d = 0,
        e = this.yc;
      for (; d < e.length; )
        if (e[d++] == a) {
          c = !0;
          break;
        }
      c && a.lx(p.Rxa(a, b));
    }
    static nla(a) {
      m.forEach(Gb.Lm, function (b) {
        m.forEach(b.yc, function (c) {
          c.nla(a);
        });
      });
    }
    static reset(a) {
      a == null && (a = !0);
      let b = Ya.get(),
        c = b != null ? b.er.Gz() : null,
        d = 0,
        e = Gb.Lm;
      for (; d < e.length; ) {
        let f = e[d];
        ++d;
        f.Oob(a);
        f.setTime(Hb.instance.getTime());
      }
      p.o.YMa(0);
      b != null && b.er.Wr(c);
    }
    static qbb(a) {
      Gb.Ls = a;
      let b = !1,
        c = 0,
        d = Gb.Lm;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        e.dna(a);
        v.Eya && e.yrb(v.Fya);
        !b && e.dg > 0 && ((Gb.Pn = e.n0(0).Pn), (b = !0));
      }
    }
  }
  Gb.g = "303";
  Gb.u = Lc;
  Object.assign(Gb.prototype, { j: Gb });
  class gl extends Lc {
    constructor(a, b, c, d, e, f, g, h, k, l, n, q, r, t, x) {
      super(a, b, c, d, e, f, g, h, k, l, n, q, r, t, x);
      this.Ae = m.l();
      this.K$ = m.l();
      this.Dpa = m.l();
      this.L$ = m.l();
      this.Ata = !1;
    }
    parse(a) {
      cb.UE(a.A("Rules"), this.Ae);
      a = a.A("Warriors");
      if (a != null) {
        a = a.children;
        let b = 0;
        for (; b < a.length; ) {
          let c = a[b++];
          c.name == "Warrior" && this.Dpa.push(p.F().zr(c, null, !1));
        }
      }
    }
    vAa() {
      debugger;
      let a = Da.xL();
      this.Psb(Math.trunc(a), Math.trunc(a + 123));
    }
    Psb(a, b) {
      debugger;
      this.ob != null && (this.ob.Hla(a), this.ob.Gla(b));
    }
    oKa() {
      debugger;
      this.ob == null || (this.ob.aW && this.ob.k$a()) || this.vAa();
      this.Lmb();
      this.Mmb();
      this.Ata = !0;
      let a = 0,
        b = this.yc;
      for (; a < b.length; ) this.Uza(b[a++]);
    }
    Lmb() {
      debugger;
      Da.OT(this.ob != null ? this.ob.Sm : (2147483647 * Da.rg.lf()) | 0);
      for (var a = 0, b = this.Ae; a < b.length; ) {
        var c = b[a];
        ++a;
        c.type == "ERuleRandom" && c.OKa();
      }
      this.K$.length = 0;
      b = 0;
      for (c = this.dg; b < c; ) {
        ++b;
        a = m.l();
        this.K$.push(a);
        let e = 0,
          f = this.Ae;
        for (; e < f.length; ) {
          var d = f[e];
          ++e;
          d.type == "ERuleRandom"
            ? (d.V4(), (d = d.FB), (d.eb = !1), a.push(d))
            : a.push(d);
        }
      }
    }
    Mmb() {
      debugger;
      Da.OT(this.ob != null ? this.ob.lv : (2147483647 * Da.rg.lf()) | 0);
      this.L$.length = 0;
      let a,
        b,
        c = 0,
        d = this.Dpa;
      for (; c < d.length; ) {
        let f = d[c];
        ++c;
        var e = p.F().YD;
        p.F().YD = !1;
        a = p.F().ofa(f, f.number * this.dg);
        p.F().YD = e;
        let g = (b = 0),
          h = this.dg;
        for (; g < h; ) {
          ++g;
          e = m.l();
          this.L$.push(e);
          let k = 0,
            l = f.number;
          for (; k < l; ) (++k, e.push(a[b]), ++b);
        }
      }
    }
    vgb() {
      if (this.ob != null) {
        var a = this.ob;
        a.Jla(a.FH + 1);
        this.ob.GPa && (this.vAa(), this.oKa());
        this.DIa();
        p.o.save();
      }
    }
    DIa() {
      this.OB || this.Wt();
      this.setStatus(2);
    }
    pfa() {
      return this.ob != null ? this.ob.FH : 0;
    }
    azb(a) {
      let b = this.pfa(),
        c = a.Yc,
        d = a.repeat;
      c != null && (a.status = c.qo >= d * (b + 1) ? 1 : 2);
    }
    gBa(a) {
      let b = this.Nea(a);
      return b != null ? b : this.OB ? null : (this.Wt(), this.Nea(a));
    }
    gfa() {
      debugger;
      this.OB || this.Wt();
      return super.gfa();
    }
    K_a() {
      this.jJ() == 1 && this.DIa();
    }
    n0(a) {
      debugger;
      for (;;) {
        if (a > this.dg - 1) return null;
        let b = 0,
          c = this.yc;
        for (; b < c.length; ) {
          let d = c[b];
          ++b;
          if (d.index == a) return d;
        }
        this.Wt();
      }
    }
    Oz() {
      this.Wt();
      return this.yc;
    }
    Wt() {
      super.Wt();
      this.K_a();
    }
    Aq(a, b) {
      super.Aq(a, b);
      this.Ata && this.Uza(a);
    }
    Uza(a) {
      debugger;
      a.e0a();
      a.f0a();
      var b = a.index,
        c = 0;
      let d = this.L$[b];
      for (; c < d.length; ) a.Slb(d[c++]);
      c = 0;
      for (b = this.K$[b]; c < b.length; ) a.Rlb(b[c++]);
      a.Uka();
    }
    ola() {
      if (
        this.type == "FightReplayable" ||
        this.type == "FightBossesReplayable" ||
        this.type == "FightFinalReplayable"
      )
        (this.ob != null && (this.ob.Uzb = !0),
          this.type == "FightReplayable" &&
            (this.oKa(), this.ob != null && (this.ob.GPa = !0)));
    }
  }
  gl.g = "304";
  gl.u = Lc;
  Object.assign(gl.prototype, { j: gl });
  class ib {
    constructor() {
      this.Ne = this.Se = this.Rq = this.U8 = null;
    }
    toString() {
      return this.U8;
    }
    Zn() {
      let a = "0";
      this.Ne.indexOf("ZONE_") != -1 && (a = J.substr(this.Ne, 5, null));
      let b = ib.hQa.indexOf(this.Se),
        c = this.Rq;
      c.indexOf("lvl") != -1 && (c = "0");
      return K.parseInt(
        (this.Se.indexOf("_INTERMISSION") != -1
          ? "2"
          : this.Ne == "ZONE_7"
            ? "3"
            : "1") +
          a +
          Eb.bGa(b == null ? "null" : "" + b) +
          Eb.bGa(c),
      );
    }
    yCa() {
      return this.Ne + "|" + this.Se;
    }
    mj(a) {
      if (a != null) {
        a = a.split("|");
        var b = a.length;
        this.Ne = b > 0 ? a[0] : "";
        this.Se = b > 1 ? a[1] : "";
        this.Rq = b > 2 ? a[2] : "";
        this.gPa();
      }
    }
    zm(a, b, c) {
      this.Ne = a != null ? a : "";
      this.Se = b != null ? b : "";
      this.Rq = c != null ? c : "";
      this.gPa();
    }
    WI(a) {
      return this.toString() == a;
    }
    vza(a) {
      return this.WI(a.toString());
    }
    uza(a) {
      a = a.split("|");
      let b = a.length;
      return this.c4a(b > 0 ? a[0] : "", b > 1 ? a[1] : "");
    }
    c4a(a, b) {
      return a == this.Ne ? b == this.Se : !1;
    }
    clear() {
      this.U8 = this.Rq = this.Se = this.Ne = "";
    }
    Wj() {
      var a = this.Ne;
      return a == null || a == ""
        ? ((a = this.Se), a != null ? a == "" : !0)
        : !1;
    }
    gPa() {
      this.U8 = this.Ne + "|" + this.Se + "|" + this.Rq;
    }
    static empty() {
      let a = new ib();
      a.clear();
      return a;
    }
  }
  ib.g = "305";
  Object.assign(ib.prototype, { j: ib });
  class hl {
    constructor() {
      this.ZKa = "";
      this.gL = this.QK = 0;
      this.L7 = m.l();
      this.apa = m.l();
      this.M7 = m.l();
      this.IV = m.l();
      this.Ae = m.l();
      this.r8 = null;
      this.VK = m.l();
      this.ER = m.l();
      this.yi = m.l();
      this.rb = m.l();
      this.ct = m.l();
      this.Ap = "";
      this.vT =
        this.a5 =
        this.VU =
        this.s4 =
        this.r4 =
        this.qh =
        this.e4a =
        this.EDa =
          0;
      this.locked = !1;
      this.status = 0;
      this.Q1 = this.Wya = this.Rga = this.P$ = !1;
      this.repeat = this.Pn = 0;
      this.index = -1;
      this.name = "";
      this.og = null;
      this.Tb = this.location = "";
      this.n4 = 0;
      this.Yc = null;
      this.type = "FightNone";
      let a = new ib();
      a.clear();
      this.Nb = a;
    }
    lx(a) {
      this.Yc = a;
      this.Yc.PIa = this;
    }
    MD() {
      let a = this.r8;
      return a != null && a != "" ? this.r8 : this.Tb;
    }
    ula(a) {
      this.Tb = a;
    }
    ecb() {
      let a = 0,
        b = this.rb;
      for (; a < b.length; ) if (!this.Fga(b[a++])) return !1;
      return !0;
    }
    B9a() {
      debugger;
      let a = this.Pn - this.Yc.aR();
      a < 0 && (a = 0);
      return a;
    }
    iJ(a) {
      let b = 0,
        c = this.ER;
      for (; b < c.length; ) {
        var d = c[b];
        ++b;
        if (d.Vi()) {
          if (d.TV) continue;
          d = d.Zf;
          if (d.ib.type == a) return d.ab();
        }
      }
      return "";
    }
    hJ(a) {
      let b = 0,
        c = this.ER;
      for (; b < c.length; ) {
        var d = c[b];
        ++b;
        if (d.Vi()) {
          if (d.TV) continue;
          d = d.Zf;
          if (d.ib.type == a) return d.Ce;
        }
      }
      return 0;
    }
    rEa() {
      return m.any(this.l0(), function (a) {
        let b = a.Lj;
        return b != null && b != "" ? a.cn > 0 : !1;
      });
    }
    t6a(a) {
      debugger;
      let b = 0;
      m.forEach(
        m.tj(this.l0(), function (c) {
          return c.Lj == a;
        }),
        function (c) {
          b += c.cn;
        },
      );
      return b;
    }
    K0(a) {
      return this.yi.length > a ? this.yi[a] : null;
    }
    zR() {
      return this.Yc != null ? this.Yc.mE(this.Pn) : !0;
    }
    Ylb(a) {
      this.yi.push(a);
    }
    kh() {
      return p.o.$h ? this.IV : this.Ae;
    }
    setTime(a) {
      this.Yc != null &&
        (this.type == "FightPeriodic" && (this.Yc.Eub(a), this.C_a()),
        this.Yc.cB(a));
    }
    nla(a) {
      this.Yc != null && this.Yc.Ila(a);
    }
    T6a() {
      let a = 0,
        b = 0,
        c = this.ct;
      for (; b < c.length; ) a += c[b++].number;
      return a;
    }
    V8a(a, b) {
      var c = 0;
      let d = 0,
        e = 0;
      var f = this.U8a();
      f != null && ((c = f.wVa), (d = f.RUa), (e = f.BVa));
      f = new Md();
      let g = new Md();
      a.Am(f);
      b.Am(g);
      this.Mva(a);
      this.Mva(b);
      var h = this.E5a(),
        k = this.D5a();
      c == 0 && (c = b.f4);
      c < 0 && (c = a.XBa(b, h));
      d == 0 && (d = b.J_);
      d < 0 && (d = b.XBa(a, k));
      let l = v.PCa();
      var n = v.OCa();
      let q = new ja(0),
        r = new ja(0);
      var t = b.clone(),
        x = a.clone();
      t.Pua(k);
      x.Pua(h);
      t.attributes.get(n, q);
      x.attributes.get(n, r);
      k = h = 1;
      t = this.kh();
      n = m.l();
      for (x = 0; x < t.length; ) {
        var z = t[x];
        ++x;
        z.type == "ERuleResistance" && z != null && n.push(z);
      }
      for (t = 0; t < n.length; )
        ((z = n[t++]),
          z != null &&
            ((x = z.CX),
            (z = p.o.Tw.j0(z.sta)),
            z < x &&
              ((k *= Math.pow(2, (x - z) / v.rT)),
              (h *= Math.pow(2, (z - x) / v.rT)))));
      c = ((d / c) * Math.pow(2, (q.G - r.G) * l) * k) / h;
      c *= Math.pow(2, (2 * (b.F4 + e)) / v.IP);
      a.qD(f);
      b.qD(g);
      return c;
    }
    Lz(a, b) {
      let c = 0,
        d = b.length;
      0 < d && (c = this.V8a(a, b[d - 1]));
      return c;
    }
    xR() {
      return this.ct.length > 1 ? this.vT > 1 : !1;
    }
    TK(a) {
      switch (a.type) {
        case "ERuleComplex":
          this.wka(a);
          break;
        case "ERuleAttributes":
        case "ERuleAvatar":
        case "ERuleChangeFight":
        case "ERuleCombo":
        case "ERuleCrazy":
        case "ERuleCurrencyCost":
        case "ERuleDamageFactor":
        case "ERuleDarkness":
        case "ERuleDescription":
        case "ERuleHotGround":
        case "ERuleInvertJoystick":
        case "ERuleInvulnerability":
        case "ERuleLifeSteal":
        case "ERuleLightInTheDarkness":
        case "ERuleLoseFall":
        case "ERuleName":
        case "ERuleNoAnimation":
        case "ERuleNoBulletsReplenishment":
        case "ERuleNoButton":
        case "ERuleNoHealthBar":
        case "ERuleNoPerks":
        case "ERulePerk":
        case "ERulePoints":
        case "ERulePvp":
        case "ERuleRaidCurrencyCost":
        case "ERuleRandomArea":
        case "ERuleRatingEvaluation":
        case "ERuleRechargeMagicEachRound":
        case "ERuleRegeneration":
        case "ERuleRemoveInterval":
        case "ERuleResistance":
        case "ERuleRingout":
        case "ERuleTactic":
        case "ERuleTimeoutWin":
        case "ERuleWinCombo":
        case "ERuleWinShock":
        case "ERuleWinStyle":
          break;
        case "ERuleRandom":
          m.cd(this.VK, a);
          break;
        case "ERuleEquipItem":
        case "ERuleItem":
        case "ERuleRandomAquiredItem":
          m.cd(this.ER, a);
          break;
        case "ERulesWithConditions":
          this.wka(a);
          break;
        default:
          return;
      }
      switch (a.mode) {
        case 0:
          m.cd(this.IV, a);
          break;
        case 1:
          m.cd(this.Ae, a);
          break;
        default:
          (m.cd(this.IV, a), m.cd(this.Ae, a));
      }
      m.cd(this.apa, a);
    }
    aKa(a) {
      m.cd(this.ct, a);
    }
    Slb(a) {
      debugger;
      m.cd(this.L7, a);
      this.aKa(a);
    }
    Rlb(a) {
      debugger;
      m.cd(this.M7, a);
      this.TK(a);
    }
    C_a() {
      this.Yc.B_a(this.Pn) &&
        !this.zR() &&
        ha.F().Vf("QUEST_EVENT_DUEL_UNLOCKED");
    }
    W4() {
      if (this.type == "FightPeriodic" && this.VK.length != 0)
        if (this.Rga) this.P$ = !0;
        else {
          Da.OT(this.Yc.Sm);
          for (var a = 0, b = this.VK; a < b.length; ) {
            let c = b[a];
            ++a;
            c.mta == 1 && c.V4();
          }
          Da.xL();
          this.Uka();
          this.P$ = !1;
        }
    }
    A_a() {
      this.P$ && this.W4();
    }
    fM(a) {
      var b = this.yi.length;
      b > 0
        ? ((b = this.yi[b - 1]),
          (a = b.gm(a)),
          (this.s4 = a.Ob),
          (this.r4 = a.Xo))
        : (this.r4 = this.s4 = 0);
    }
    e0a() {
      debugger;
      let a = 0,
        b = this.M7;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        J.remove(this.apa, c);
        switch (c.type) {
          case "ERuleEquipItem":
          case "ERuleItem":
          case "ERuleRandomAquiredItem":
            J.remove(this.ER, c);
            break;
          case "ERuleRandom":
            J.remove(this.VK, c);
        }
        J.remove(this.Ae, c);
        J.remove(this.IV, c);
      }
      this.M7.length = 0;
    }
    f0a() {
      debugger;
      let a = 0,
        b = this.L7;
      for (; a < b.length; ) J.remove(this.ct, b[a++]);
      this.L7.length = 0;
    }
    Uka() {
      this.r8 = this.I7a();
      let a = Ya.get();
      a != null && a.er.Kyb(this.og);
    }
    l0() {
      let a = this.kh();
      return (a = m.tj(a, function (b) {
        return b.type == "ERuleCurrencyCost";
      }));
    }
    v0(a) {
      switch (a.type) {
        case "ERuleComplex":
          for (a = a.kh(); 0 < a.length; ) return this.v0(a[0]);
          break;
        case "ERuleDescription":
          if (a != null) {
            var b = a.Eg;
            b = b == null || lc(b);
          } else b = !0;
          return b ? "" : a.Eg;
        case "ERuleRandom":
          return this.v0(a.FB);
        case "ERulesWithConditions":
          if (!a.rP) return "";
          b = "";
          let c = 0;
          for (a = a.kh(); c < a.length; ) {
            let d = this.v0(a[c++]);
            d == null ||
              lc(d) ||
              (b == null || lc(b) || (b += Y.uQa), (b += d));
          }
          return b;
      }
      return null;
    }
    I7a() {
      let a = 0,
        b = this.kh();
      for (; a < b.length; ) {
        var c = b[a];
        ++a;
        if (c.Vi() && ((c = this.v0(c)), c != null && !lc(c))) return c;
      }
      return null;
    }
    wka(a) {
      let b = 0;
      for (a = a.kh(); b < a.length; ) {
        let c = a[b];
        ++b;
        c.type == "ERuleRandom" && m.cd(this.VK, c);
        (c.type != "ERuleComplex" && c.type != "ERulesWithConditions") ||
          this.wka(c);
      }
    }
    U8a() {
      let a = 0,
        b = this.kh();
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        if (c.type == "ERuleRatingEvaluation") return c;
      }
      return null;
    }
    E5a() {
      return this.EAa(1);
    }
    D5a() {
      return this.EAa(2);
    }
    EAa(a) {
      let b = m.l(),
        c = 0,
        d = this.kh();
      for (; c < d.length; ) {
        var e = d[c];
        ++c;
        if (e.type == "ERuleAttributes") {
          let g = e.rea().entries(),
            h = g.next();
          for (; !h.done; ) {
            var f = h.value;
            h = g.next();
            let k = f[0];
            f = f[1];
            e.mc() == a || e.mc() == 3
              ? Cb(k, "Defense") || b.push(new Ca(k, f))
              : Cb(k, "Defense") && b.push(new Ca(k, f));
          }
        }
      }
      return b;
    }
    Mva(a) {
      let b = this.C7a(a.qb ? 1 : 2),
        c = m.l();
      for (var d = 0, e = this.VK; d < e.length; )
        for (var f = 0, g = e[d++].kh(); f < g.length; ) this.jXa(g[f++], c);
      d = v.h1() * 100 + 30;
      e = null;
      for (f = 0; f < c.length; ) {
        g = c[f];
        ++f;
        var h = g.Zf.ab();
        if (h == null || h == "") continue;
        if (g.Zf.Ce > 0 && d > g.Zf.Ce) {
          d = g.Zf.Ce;
          e = g;
          continue;
        }
        let k = p.o.xa.Rj(h);
        k == null
          ? ((h = p.items.$b(h)),
            h != null && d > h.Ug && ((e = g), (d = h.Ug)))
          : d > k.Ce && ((e = g), (d = k.Ce));
      }
      e != null && this.HC(e, b);
      a.nMa(b);
      a.Hm();
    }
    C7a(a) {
      return m.tj(this.ER, function (b) {
        return b.mc() != a ? b.mc() == 3 : !0;
      });
    }
    HC(a, b) {
      switch (a.type) {
        case "ERuleComplex":
          var c = 0;
          for (a = a.kh(); c < a.length; ) this.HC(a[c++], b);
          break;
        case "ERuleEquipItem":
        case "ERuleItem":
        case "ERuleRandomAquiredItem":
          b.push(a);
          break;
        case "ERuleRandom":
          this.HC(a.FB, b);
          break;
        case "ERulesWithConditions":
          if (a.rP) for (c = 0, a = a.kh(); c < a.length; ) this.HC(a[c++], b);
      }
    }
    jXa(a, b) {
      switch (a.type) {
        case "ERuleComplex":
          var c = 0;
          for (a = a.kh(); c < a.length; ) this.HC(a[c++], b);
          break;
        case "ERuleEquipItem":
        case "ERuleItem":
        case "ERuleRandomAquiredItem":
          b.push(a);
          break;
        case "ERuleRandom":
          c = 0;
          for (a = a.kh(); c < a.length; ) this.HC(a[c++], b);
          break;
        case "ERulesWithConditions":
          if (a.rP) for (c = 0, a = a.kh(); c < a.length; ) this.HC(a[c++], b);
      }
    }
    Fga(a) {
      debugger;
      return a.type != 2 || this.pcb(a) ? !0 : !1;
    }
    pcb(a) {
      debugger;
      let b = a.count,
        c = a.compare,
        d = 0,
        e = !0;
      a.Rfb == 3 && ((a = p.o.Xq(a.Nb)), a != null && (d = a.qo));
      switch (c) {
        case 0:
          e = d >= b;
          break;
        case 1:
          e = d <= b;
          break;
        case 2:
          e = d > b;
          break;
        case 3:
          e = d < b;
          break;
        case 4:
          e = d == b;
      }
      return e;
    }
  }
  hl.g = "306";
  Object.assign(hl.prototype, { j: hl });
