// 038-quest-rule-system.js
// Domain: ai  |  53 class(es)  |  tree root(s): Mb, gv, kn, $t, fu, cb, eu
// Edit here. Run `npm run build` to reassemble the full bundle.
  class Mb {
    constructor(a, b) {
      this.LFa = 2147483647;
      this.MFa = 0;
      this.zta = m.l();
      this.eb = !1;
      this.active = this.$oa = !0;
      this.mode = 2;
      this.parentRule = null;
      this.type = a;
      this.zf = b;
      this.hJa(b);
      this.aJa(b);
    }
    setActive(a) {
      this.active = a;
    }
    pI(a) {
      if (!this.$oa) {
        let b = 0,
          c = this.zta;
        for (; b < c.length; ) if (c[b++] == a) return !0;
        return !1;
      }
      return !0;
    }
    Vi() {
      return this.w_a();
    }
    v_a(a) {
      return a >= this.MFa ? a <= this.LFa : !1;
    }
    w_a() {
      return this.v_a(p.o.bb());
    }
    parse(a) {
      this.hJa(a);
      this.aJa(a);
    }
    hJa(a) {
      a = a.attributes.get("Round");
      if (!Xa(a)) {
        this.$oa = !1;
        a = (a != null ? a : "").split("|");
        for (var b = 0; b < a.length; ) this.zta.push(K.parseInt(a[b++]));
      }
    }
    aJa(a) {
      let b = u.ka(a.attributes.get("Eclipse"));
      Xa(a.attributes.get("Eclipse"))
        ? (this.mode = 2)
        : (this.mode = b ? 0 : 1);
    }
  }
  Mb.g = "173";
  Object.assign(Mb.prototype, { j: Mb });
  class Ga extends Mb {
    constructor(a, b, c) {
      super(a, c);
      this.Ni = b;
      this.cv = !0;
      this.ura = !1;
      this.Tqa = new gd();
      this.ura = u.ka(c.attributes.get("Death"), !1);
    }
    Ib() {
      return null;
    }
    ag(a) {
      this.Tqa.add(a);
    }
    hg(a) {
      return this.Tqa.contains(a);
    }
    reset() {}
    compare(a) {
      this.rja(a);
      return this.Ni == 1 ? this.ih(a.tl) : this.Ni == 2 ? this.ih(a.ml) : !1;
    }
    ih() {
      return !1;
    }
    al() {}
    clear() {}
    stop() {}
    mc() {
      return this.Ni;
    }
    QLa(a) {
      this.Ni = a;
    }
    Gfa() {
      switch (this.Ni) {
        case 1:
          return this.cv ? 2 : 1;
        case 2:
          return this.cv ? 1 : 2;
        default:
          return 3;
      }
    }
    rja() {}
  }
  Ga.g = "174";
  Ga.u = Mb;
  Object.assign(Ga.prototype, { j: Ga });
  class Ce extends Ga {
    constructor(a, b, c) {
      super(a, b, c);
      this.KM = m.l();
      this.w4a(c);
    }
    Vba(a) {
      return a == null ? !1 : this.$wa(a.name);
    }
    $wa(a) {
      let b = 0,
        c = this.KM;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.name == a || d.m2(a)) return !0;
      }
      return !1;
    }
    w4a(a) {
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        var c = a[b++];
        c.name == "Animation" &&
          ((c = c.attributes.get("Name")), sa.Cz(c != null ? c : "", this.KM));
      }
    }
    Ib() {
      debugger;
      let a;
      a = new Ce(this.type, this.mc(), this.zf);
      a.eb = this.eb;
      return a;
    }
  }
  Ce.g = "175";
  Ce.u = Ga;
  Object.assign(Ce.prototype, { j: Ce });
  class $i extends Ga {
    constructor(a, b) {
      super("ERuleAttributes", b, a);
      this.zB = new Map();
      b = 0;
      let c = v.Bv;
      for (; b < c.length; ) this.zB.set(c[b++].name, 0);
      this.parse(a);
    }
    al(a) {
      let b = this.zB.entries(),
        c = b.next();
      for (; !c.done; ) {
        var d = c.value;
        c = b.next();
        let f = d[0];
        d = d[1];
        switch (this.Ni) {
          case 1:
            var e = new ja(0);
            a.HA.attributes.get(f, e);
            a.HA.attributes.set(f, e.G + (d | 0));
            break;
          case 2:
            ((e = new ja(0)),
              a.Lda.attributes.get(f, e),
              a.Lda.attributes.set(f, e.G + (d | 0)));
        }
      }
    }
    parse(a) {
      super.parse(a);
      a = a.attributes.entries();
      let b = a.next();
      for (; !b.done; ) {
        var c = b.value;
        b = a.next();
        var d = c[0];
        c = c[1];
        if (
          d != "Round" &&
          d != "ApplyTo" &&
          d != "Eclipse" &&
          d != "WarriorPower"
        )
          if (X.Xa(this.zB, d)) {
            var e = this.zB;
            e.set(d, e.get(d) + u.H(c));
          } else this.zB.set(d, u.H(c));
        if (d == "WarriorPower")
          for (d = 0, e = v.Bv; d < e.length; ) {
            let f = e[d++].name,
              g = this.zB;
            g.set(f, g.get(f) + u.H(c));
          }
      }
    }
    rea() {
      return this.zB;
    }
    Ib() {
      debugger;
      let a;
      a = new $i(this.zf, this.mc());
      a.eb = this.eb;
      return a;
    }
  }
  $i.g = "176";
  $i.u = Ga;
  Object.assign($i.prototype, { j: $i });
  class bn extends Mb {
    constructor(a) {
      super("ERuleAvatar", a);
      a = a.attributes.get("Name");
      this.name = a != null ? a : "";
    }
  }
  bn.g = "177";
  bn.u = Mb;
  Object.assign(bn.prototype, { j: bn });
  class cn extends Mb {
    constructor(a) {
      super("ERuleChangeFight", a);
      this.parse(a);
    }
    parse(a) {
      this.GVa = u.I(a.attributes.get("Rounds"), -1);
      this.FVa = u.I(a.attributes.get("RoundTime"), -1);
    }
  }
  cn.g = "178";
  cn.u = Mb;
  Object.assign(cn.prototype, { j: cn });
  class De extends Ga {
    constructor(a, b, c) {
      super(c, b, a);
      this.Bs = !1;
      this.ag(10);
    }
    al(a) {
      debugger;
      this.compare(a.p4a);
    }
    ih() {
      return !1;
    }
    ixa(a) {
      let b = this.Bs != a;
      this.Bs = a;
      return b;
    }
    acb() {
      this.Ni == 1 ? (this.Ni = 2) : this.Ni == 2 && (this.Ni = 1);
    }
    Ib() {
      debugger;
      let a;
      a = new De(this.zf, this.mc(), this.type);
      a.eb = this.eb;
      return a;
    }
  }
  De.g = "179";
  De.u = Ga;
  Object.assign(De.prototype, { j: De });
  class dn extends De {
    constructor(a, b) {
      super(a, b, "ERuleCombo");
      this.vV = 0;
      this.cv = !1;
      this.parse(a);
      this.ag(11);
    }
    ih(a) {
      debugger;
      return a.gp == 10 ? !1 : this.ixa(a.UZ < this.vV);
    }
    parse(a) {
      super.parse(a);
      this.vV = u.I(a.attributes.get("Value"));
    }
  }
  dn.g = "17A";
  dn.u = De;
  Object.assign(dn.prototype, { j: dn });
  class mh extends Mb {
    constructor(a, b) {
      a == null && (a = "ERuleComplex");
      super(a, b);
      this.Ae = m.l();
      this.parse(b);
    }
    setActive(a) {
      super.setActive(a);
      let b = 0,
        c = this.Ae;
      for (; b < c.length; ) c[b++].setActive(a);
    }
    kh() {
      return this.Ae;
    }
    parse(a) {
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        let c = cb.V3(a[b++]);
        c != null && this.Ae.push(c);
      }
    }
  }
  mh.g = "17B";
  mh.u = Mb;
  Object.assign(mh.prototype, { j: mh });
  class en extends De {
    constructor(a, b) {
      super(a, b, "ERuleCrazy");
      this.gqa = 0;
      this.cv = !1;
      this.parse(a);
      this.ag(8);
    }
    ih(a) {
      debugger;
      return a.gp == 10 ? !1 : this.ixa(a.EP < this.gqa);
    }
    parse(a) {
      super.parse(a);
      this.gqa = cb.jJa(a);
    }
  }
  en.g = "17C";
  en.u = De;
  Object.assign(en.prototype, { j: en });
  class nh extends Mb {
    constructor(a) {
      super("ERuleCurrencyCost", a);
      this.parse(a);
    }
    parse(a) {
      let b = a.attributes.get("Name");
      this.Lj = b != null ? b : "";
      this.cn = u.I(a.attributes.get("Value"));
      this.cn < 0 && (this.cn = 0);
    }
  }
  nh.g = "17D";
  nh.u = Mb;
  Object.assign(nh.prototype, { j: nh });
  class fn extends Ce {
    constructor(a, b) {
      super("ERuleDamageFactor", b, a);
      this.parse(a);
    }
    ih(a) {
      debugger;
      return this.Vba(a.FI);
    }
    al() {
      let a = 0,
        b = this.KM;
      for (; a < b.length; ) {
        let d = 0,
          e = b[a++].va.xb;
        for (; d < e.length; ) {
          var c = e[d];
          ++d;
          if (c.type == 4) {
            c = c.Mea(this.Ni);
            if (c.PU || c.QU) break;
            c.PU = !0;
            c.fp = this.SUa;
            c.QU = !0;
            c.bka = this.DVa;
          }
        }
      }
    }
    reset() {
      this.clear();
    }
    clear() {
      debugger;
      let a = 0,
        b = this.KM;
      for (; a < b.length; ) {
        let d = 0,
          e = b[a++].va.xb;
        for (; d < e.length; ) {
          var c = e[d];
          ++d;
          c.type == 4 &&
            ((c = c.Mea(this.Ni)), c.PU || c.QU) &&
            ((c.PU = !1), (c.fp = 1), (c.QU = !1), (c.bka = 1));
        }
      }
    }
    parse(a) {
      super.parse(a);
      let b = a.attributes.get("Animation");
      sa.Cz(b != null ? b : "", this.KM);
      this.SUa = u.H(a.attributes.get("Factor"), 1);
      this.DVa = u.H(a.attributes.get("RepeatFactor"), 1);
    }
  }
  fn.g = "17E";
  fn.u = Ce;
  Object.assign(fn.prototype, { j: fn });
  class aj extends Ga {
    constructor(a, b) {
      super("ERuleDarkness", b, a);
      this.Ii = new gn(0, 0, 0, 0);
      this.Ak = this.hc = 0;
      this.gs = !1;
      this.ag(1);
      this.parse(a);
    }
    al() {
      this.Ak = this.hc = 0;
    }
    setActive(a) {
      super.setActive(a);
      this.gs = a;
    }
    ih() {
      ++this.hc;
      this.hc <= this.Ii.pause
        ? (this.gs || (this.hc = 0), (this.Ak = 0))
        : (this.Ak =
            this.hc <= this.Ii.Vy
              ? (this.hc - this.Ii.pause) * this.N7
              : this.hc <= this.Ii.Ft
                ? 255
                : this.hc <= this.Ii.SJ
                  ? 255 - (this.hc - this.Ii.Ft) * this.M9
                  : (this.hc = 0));
      return !0;
    }
    parse(a) {
      super.parse(a);
      this.Ii.pause = u.I(a.attributes.get("LightLasting"));
      this.Ii.Vy = this.Ii.pause + u.I(a.attributes.get("DarkOn"));
      this.Ii.Ft = this.Ii.Vy + u.I(a.attributes.get("DarkLasting"));
      this.Ii.SJ = this.Ii.Ft + u.I(a.attributes.get("LightOn"));
      this.N7 = 255 / (this.Ii.Vy - this.Ii.pause);
      this.M9 = 255 / (this.Ii.SJ - this.Ii.Ft);
    }
    stop() {
      this.setActive(!1);
    }
    reset() {
      this.setActive(!0);
    }
    Ib() {
      debugger;
      let a;
      a = new aj(this.zf, this.mc());
      a.eb = this.eb;
      return a;
    }
  }
  aj.g = "17F";
  aj.u = Ga;
  Object.assign(aj.prototype, { j: aj });
  class hn extends Mb {
    constructor(a) {
      super("ERuleDescription", a);
      this.parse(a);
    }
    parse(a) {
      a = a.attributes.get("Alias");
      this.Eg = a != null ? a : "";
    }
  }
  hn.g = "180";
  hn.u = Mb;
  Object.assign(hn.prototype, { j: hn });
  class jn extends Ce {
    constructor(a, b) {
      super("ERuleHotGround", b, a);
      this.Va = m.l();
      this.hK = !0;
      this.hC = this.uy = 0;
      this.raa = this.hpa = !1;
      this.xO = 1;
      this.jc = this.Re = 0;
      this.ag(4);
      this.ag(1);
      this.parse(a);
      this.reset();
    }
    getTime() {
      return this.Re;
    }
    reset() {
      this.Re = this.gsa;
      this.jc = 0;
      this.hK = !0;
    }
    al(a) {
      a.location != null &&
        ((this.uy = -a.location.width / 2), (this.hC = -a.location.jt));
      switch (this.Ni) {
        case 1:
          a = a.Kc;
          break;
        case 2:
          a = a.VI;
          break;
        default:
          a = null;
      }
      if (a != null) {
        let b = 0,
          c = this.Va;
        for (; b < c.length; ) {
          let d = c[b];
          ++b;
          d.node = a.pa.Ic(d.name);
        }
      }
      this.reset();
    }
    ih(a) {
      switch (a.gp) {
        case 1:
          this.hpa && this.r_a()
            ? this.raa ||
              ((this.Re = this.gsa), (this.jc = 0), (this.raa = this.hK = !0))
            : ((this.jc += 1 / this.xO),
              this.jc >= 60 &&
                ((this.jc = 0), this.Re > 0 && (this.Re--, (this.hK = !0))));
          break;
        case 4:
          ((this.raa = !1), (this.hpa = this.Vba(a.FI)));
      }
      return this.Re <= 0;
    }
    rja(a) {
      this.xO = a.yNa;
    }
    parse(a) {
      super.parse(a);
      this.Wia(a);
      this.nVa = u.H(a.attributes.get("Frames"));
      this.gsa = (this.nVa / 60) | 0;
      if ((this.YUa = !Xa(a.attributes.get("Sequence"))))
        (a.attributes.get("Sequence"), a.attributes.get("SequenceWidth"));
    }
    Wia(a) {
      let b = 0;
      for (a = a.kp("Node"); b < a.length; ) this.Va.push(new gv(a[b++]));
    }
    r_a() {
      let a = 0,
        b = this.Va;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        let d = c.node.ma;
        d = new H(d.x + this.uy, -d.y, d.z, 1);
        if (!(d.x >= c.N || d.x <= c.K || d.y >= c.X || d.y <= c.P)) return !1;
      }
      return !0;
    }
  }
  jn.g = "181";
  jn.u = Ce;
  Object.assign(jn.prototype, { j: jn });
  class gv {
    constructor(a) {
      this.N = 3.4028234663852886e38;
      this.K = -3.4028234663852886e38;
      this.X = 3.4028234663852886e38;
      this.P = -3.4028234663852886e38;
      this.node = null;
      var b = a.attributes.get("Name");
      this.name = b != null ? b : "";
      b = a.attributes.get("Axis");
      b = b != null ? b : "";
      var c = -3.4028234663852886e38,
        d = 3.4028234663852886e38;
      d == null && (d = 0);
      c == null && (c = 0);
      a = of(a, c, d);
      if (b == "X" || b == "x") ((this.K = a.first), (this.N = a.second));
      if (b == "Y" || b == "y") ((this.P = a.first), (this.X = a.second));
    }
  }
  gv.g = "182";
  Object.assign(gv.prototype, { j: gv });
  class kn {
    constructor() {
      this.C1 =
        this.uw =
        this.Mia =
        this.i2 =
        this.qga =
        this.L3 =
        this.$q =
        this.D1 =
          !1;
      this.EP = this.UZ = this.$Z = this.Rca = 0;
      this.FI = this.gp = null;
      this.reset();
    }
    reset() {
      this.FI = null;
      this.Rca = this.$Z = this.UZ = this.EP = this.gp = 0;
      this.D1 =
        this.$q =
        this.L3 =
        this.qga =
        this.i2 =
        this.Mia =
        this.uw =
        this.C1 =
          !1;
    }
  }
  kn.g = "183";
  Object.assign(kn.prototype, { j: kn });
  class $t {
    constructor() {
      this.yNa = 0;
      this.ml = new kn();
      this.tl = new kn();
    }
  }
  $t.g = "184";
  Object.assign($t.prototype, { j: $t });
  class fu {
    constructor(a, b, c, d) {
      this.HA = this.Lda = null;
      this.Kc = a;
      this.VI = b;
      this.location = c;
      this.p4a = d;
    }
  }
  fu.g = "185";
  Object.assign(fu.prototype, { j: fu });
  class bj extends Ga {
    constructor(a) {
      super("ERuleInvertJoystick", 1, a);
      this.parse(a);
    }
    Ib() {
      debugger;
      let a = new bj(this.zf);
      a.eb = this.eb;
      return a;
    }
  }
  bj.g = "186";
  bj.u = Ga;
  Object.assign(bj.prototype, { j: bj });
  class ln extends De {
    constructor(a, b) {
      super(a, b, "ERuleInvulnerability");
      this.parse(a);
      this.acb();
      this.reset();
    }
    al() {
      this.Bs = !0;
    }
  }
  ln.g = "187";
  ln.u = De;
  Object.assign(ln.prototype, { j: ln });
  class Gf extends Mb {
    constructor(a, b) {
      b == null && (b = !0);
      super("ERuleItem", a);
      this.Zf = null;
      this.EC = u.ka(a.attributes.get("UseDefaultItem"), !1);
      this.TV = !1;
      this.NM = 1;
      b && this.nya(a);
      this.fjb(a);
    }
    mc() {
      return this.NM;
    }
    fjb(a) {
      let b = 1;
      a = a.attributes.get("ApplyTo");
      a = a != null ? a : "";
      a == "Player" ? (b = 1) : a == "Bot" ? (b = 2) : a == "All" && (b = 3);
      this.NM = b;
    }
    nya(a) {
      let b = I.Qd(a);
      this.Zf = new Af().CT(
        a,
        b.name,
        !1,
        1,
        u.I(a.attributes.get("MinLevel"), 0),
        0,
        0,
      );
      this.Zf.Or(b);
      !this.EC && this.Zf != null && iy(this.Zf.ab(), wy) && (this.EC = !0);
    }
  }
  Gf.g = "188";
  Gf.u = Mb;
  Object.assign(Gf.prototype, { j: Gf });
  class mn extends Gf {
    constructor(a) {
      super(a);
      this.TV = !0;
    }
    nya(a) {
      let b = I.Qd(a);
      this.Zf = new Af().CT(a, b.name, !1, 1, b.Ug, 0, 0);
      this.Zf.Or(b);
      !this.EC && this.Zf != null && iy(this.Zf.ab(), wy) && (this.EC = !0);
    }
  }
  mn.g = "189";
  mn.u = Gf;
  Object.assign(mn.prototype, { j: mn });
  class cj extends Ga {
    constructor(a, b) {
      super("ERuleLifeSteal", b, a);
      this.d9 = 0;
      this.ag(6);
      this.parse(a);
      this.reset();
    }
    ih(a) {
      return a.gp == 6 ? ((this.d9 = a.$Z * this.GUa), this.d9 != 0) : !1;
    }
    parse(a) {
      super.parse(a);
      this.GUa = u.H(a.attributes.get("DamagePart"));
    }
    Ib() {
      let a;
      a = new cj(this.zf, this.mc());
      a.eb = this.eb;
      return a;
    }
  }
  cj.g = "18A";
  cj.u = Ga;
  Object.assign(cj.prototype, { j: cj });
  class nn extends Ce {
    constructor(a, b) {
      super("ERuleLoseFall", b, a);
      this.zN = !1;
      this.HH = -1e5;
      this.eH = 1e5;
      this.NO = -1e5;
      this.jN = 1e5;
      this.hC = this.uy = 0;
      this.ga = null;
      this.parse(a);
      this.ag(4);
      this.ag(1);
      this.$wa("Physical") && this.ag(7);
    }
    aca() {
      if (this.ga == null || !this.zN) return !1;
      var a = this.ga.ma;
      a = new H(a.x + this.uy, -a.y + this.hC, a.z, 1);
      (a = a.x > this.HH || a.x < this.eH || a.y > this.NO || a.y < this.jN) &&
        this.setActive(!1);
      return a;
    }
    al(a) {
      this.reset();
      a.location != null &&
        ((this.uy = -a.location.width / 2), (this.hC = -a.location.gAa));
      switch (this.Ni) {
        case 1:
          a.Kc != null && (this.ga = a.Kc.pa.Ic(this.UN));
          break;
        case 2:
          a.VI != null && (this.ga = a.VI.pa.Ic(this.UN));
      }
    }
    reset() {
      this.zN = !1;
    }
    clear() {
      this.zN = !1;
    }
    ih(a) {
      switch (a.gp) {
        case 1:
          return this.aca();
        case 4:
          return ((this.zN = this.Vba(a.FI)), this.aca());
        case 7:
          return ((this.zN = !0), this.aca());
        default:
          return !1;
      }
    }
    parse(a) {
      super.parse(a);
      var b = a.attributes.get("Node");
      this.UN = b != null ? b : "";
      b = a.attributes.get("Axis");
      b = b != null ? b : "";
      a = of(a, 1e5, -1e5);
      b == "X" && ((this.eH = a.first), (this.HH = a.second));
      b == "Y" && ((this.jN = a.first), (this.NO = a.second));
    }
  }
  nn.g = "18B";
  nn.u = Ce;
  Object.assign(nn.prototype, { j: nn });
  class on extends Mb {
    constructor(a) {
      super("ERuleName", a);
      a = a.attributes.get("Name");
      this.name = a != null ? a : "";
    }
  }
  on.g = "18C";
  on.u = Mb;
  Object.assign(on.prototype, { j: on });
  class pn extends Mb {
    constructor(a) {
      super("ERuleNoAnimation", a);
      a = a.attributes.get("Name");
      this.nUa = a != null ? a : "";
    }
  }
  pn.g = "18D";
  pn.u = Mb;
  Object.assign(pn.prototype, { j: pn });
  class dj extends Ga {
    constructor(a, b) {
      super("ERuleNoBulletsReplenishment", b, a);
    }
    Ib() {
      debugger;
      let a;
      a = new dj(this.zf, this.mc());
      a.eb = this.eb;
      return a;
    }
  }
  dj.g = "18E";
  dj.u = Ga;
  Object.assign(dj.prototype, { j: dj });
  class qn extends Mb {
    constructor(a) {
      super("ERuleNoButton", a);
      this.vUa = this.njb(a);
    }
    njb(a) {
      a = a.attributes.get("Name");
      a = a != null ? a : "";
      if (a != "") {
        if (a == "Punch") return 0;
        if (a == "Kick") return 1;
        if (a == "Ranged") return 2;
        if (a == "Magic") return 3;
        if (a == "RaidCharge") return 4;
      }
      return 5;
    }
  }
  qn.g = "18F";
  qn.u = Mb;
  Object.assign(qn.prototype, { j: qn });
  class ej extends Ga {
    constructor(a, b) {
      super("ERuleNoHealthBar", b, a);
      this.parse(a);
    }
    ih() {
      return !1;
    }
    Ib() {
      let a;
      a = new ej(this.zf, this.mc());
      a.eb = this.eb;
      return a;
    }
  }
  ej.g = "190";
  ej.u = Ga;
  Object.assign(ej.prototype, { j: ej });
  class fj extends Ga {
    constructor(a, b) {
      super("ERuleNoPerks", b, a);
      a = a.attributes.get("Name");
      this.Ba = a != null ? a : "";
    }
    Ib() {
      let a;
      a = new fj(this.zf, this.mc());
      a.eb = this.eb;
      return a;
    }
  }
  fj.g = "191";
  fj.u = Ga;
  Object.assign(fj.prototype, { j: fj });
  class gj extends Ga {
    constructor(a, b) {
      super("ERulePerk", b, a);
      this.Nc = null;
      this.parse(a);
    }
    E0() {
      return this.Nc;
    }
    parse(a) {
      super.parse(a);
      let b = a.attributes.get("Name");
      this.Nc = v.Sg.ln(b != null ? b : "");
      this.Nc != null &&
        (this.Nc = this.Nc.clone(a.A("Set"), a.A("RatingEvaluation")));
    }
    Ib() {
      debugger;
      let a;
      a = new gj(this.zf, this.mc());
      a.eb = this.eb;
      return a;
    }
  }
  gj.g = "192";
  gj.u = Ga;
  Object.assign(gj.prototype, { j: gj });
  class hj extends Ga {
    constructor(a, b) {
      super("ERulePoints", b, a);
      this.wH = this.mN = 0;
      this.KV = !1;
      this.PH = 2;
      this.eO = 0;
      this.cv = !1;
      this.ag(6);
      this.ag(9);
      this.parse(a);
      this.reset();
    }
    reset() {
      this.wH = this.mN = 0;
      this.KV = !1;
    }
    compare(a) {
      this.rja(a);
      let b;
      b = (b = this.hxa(a.tl, a.ml, !0)) || this.hxa(a.ml, a.tl, !1);
      if (a.tl.gp == 9 || a.ml.gp == 9) b = this.KV = !0;
      return b;
    }
    al() {
      this.reset();
    }
    Gfa() {
      let a;
      switch (this.eO) {
        case 0:
          a = this.wH > this.mN ? 1 : 2;
          break;
        case 1:
          a = this.wH >= this.PW ? 1 : 2;
          break;
        default:
          a = 0;
      }
      return a;
    }
    parse(a) {
      super.parse(a);
      var b = a.attributes.get("Type");
      b = b != null ? b : "Contest";
      b == "Contest" ? (this.eO = 0) : b == "Score" && (this.eO = 1);
      this.PW = u.I(a.attributes.get("Max"));
      u.I(a.attributes.get("PointsPerHit"));
      this.xUa = !Xa(a.attributes.get("Block"));
      this.rUa = u.ka(a.attributes.get("Block"), !1);
      this.yUa = !Xa(a.attributes.get("Critical"));
      this.EUa = u.ka(a.attributes.get("Critical"), !1);
      this.AUa = !Xa(a.attributes.get("Shock"));
      this.NVa = u.ka(a.attributes.get("Shock"), !1);
      this.Akb(a);
    }
    Akb(a) {
      a = a.attributes.get("Defense");
      a = a != null ? a : "";
      a == ""
        ? (this.PH = 2)
        : a == "BodyDefense"
          ? (this.PH = 1)
          : a == "HeadDefense" && (this.PH = 0);
    }
    L_a(a) {
      return this.PH == 2 || (this.PH == 0 && a) ? !0 : this.PH == 1 ? !a : !1;
    }
    hxa(a, b, c) {
      let d = !this.yUa || a.qga == this.EUa;
      b = !this.AUa || b.i2 == this.NVa;
      return a.gp == 6 &&
        a.D1 &&
        (!this.xUa || a.C1 == this.rUa) &&
        this.L_a(a.$q) &&
        d &&
        b
        ? (c ? ++this.wH : ++this.mN,
          this.eO == 1 &&
            ((c && this.wH >= this.PW) || (!c && this.mN >= this.PW)) &&
            (this.KV = !0),
          !0)
        : !1;
    }
    Ib() {
      debugger;
      let a;
      a = new hj(this.zf, this.mc());
      a.eb = this.eb;
      return a;
    }
  }
  hj.g = "193";
  hj.u = Ga;
  Object.assign(hj.prototype, { j: hj });
  class ij extends Ga {
    constructor(a, b) {
      super("ERulePvp", b, a);
      this.parse(a);
      debugger;
    }
    ih() {
      return !1;
    }
    Ib() {
      debugger;
      let a;
      a = new ij(this.zf, this.mc());
      a.eb = this.eb;
      return a;
    }
  }
  ij.g = "194";
  ij.u = Ga;
  Object.assign(ij.prototype, { j: ij });
  class rn extends nh {
    constructor(a) {
      super(a);
      this.type = "ERuleRaidCurrencyCost";
      this.parse(a);
    }
    parse(a) {
      super.parse(a);
      a = a.attributes.get("PackName");
      this.qH = a != null ? a : "";
    }
  }
  rn.g = "195";
  rn.u = nh;
  Object.assign(rn.prototype, { j: rn });
  class sn extends Gf {
    constructor(a) {
      super(a, !1);
      this.type = "ERuleRandomAquiredItem";
      a = a.attributes.get("Type");
      this.fVa = a != null ? a : "";
      this.LJa();
    }
    LJa() {
      this.Zf = p.o.xa.I9a(this.fVa);
      !this.EC && this.Zf != null && iy(this.Zf.ab(), wy) && (this.EC = !0);
    }
  }
  sn.g = "196";
  sn.u = Gf;
  Object.assign(sn.prototype, { j: sn });
  class jj extends Ga {
    constructor(a) {
      super("ERuleRandomArea", 1, a);
      this.wX = null;
      this.Ao = this.Dk = "";
      this.hc = this.hqa = 0;
      this.ppa = -50;
      this.opa = 50;
      this.hK = !1;
      this.gs = !0;
      this.TB = !1;
      this.Ak = 0;
      this.Gi = new gn(0, 0, 0, 0);
      this.ag(1);
      this.parse(a);
    }
    al(a) {
      this.wX == null && (this.wX = new Uk(0));
      this.wX.yL(L.Lfb());
      this.ppa = -a.location.width / 2 + a.location.TU + this.Jaa / 2;
      this.opa = a.location.width / 2 - a.location.TU - this.Jaa / 2;
      this.Ak = this.hc = 0;
      this.TB = !1;
    }
    stop() {
      this.gs = !1;
    }
    reset() {
      this.gs = !0;
    }
    setActive(a) {
      super.setActive(a);
      this.gs = a;
    }
    ih() {
      ++this.hc;
      this.hc <= this.Gi.pause
        ? (this.gs || (this.hc = 0), (this.Ak = 0), (this.TB = !1))
        : this.hc <= this.Gi.Vy
          ? ((this.Ak = (this.hc - this.Gi.pause) * this.N7), (this.TB = !0))
          : this.hc <= this.Gi.Ft
            ? ((this.Ak = 255), (this.TB = !0))
            : this.hc <= this.Gi.SJ
              ? ((this.Ak = 255 - (this.hc - this.Gi.Ft) * this.M9),
                (this.TB = !0))
              : ((this.Ak = this.hc = 0), (this.TB = !1), this.Fyb());
      return !0;
    }
    parse(a) {
      super.parse(a);
      this.Jaa = u.H(a.attributes.get("Width"));
      var b = (this.Dk += "Textures/fight/rules/randomarea/"),
        c = a.attributes.get("Image");
      this.Dk = b + (c != null ? c : "");
      Xa(a.attributes.get("Icon")) ||
        ((b = this.Ao += "Textures/fight/rules/randomarea/"),
        (c = a.attributes.get("Icon")),
        (this.Ao = b + (c != null ? c : "")));
      this.Gi.pause = u.I(a.attributes.get("FramesOff"));
      this.Gi.Vy = this.Gi.pause + u.I(a.attributes.get("FadeIn"));
      this.Gi.Ft = this.Gi.Vy + u.I(a.attributes.get("FramesOn"));
      this.Gi.SJ = this.Gi.Ft + u.I(a.attributes.get("FadeOut"));
      this.N7 = 255 / (this.Gi.Vy - this.Gi.pause);
      this.M9 = 255 / (this.Gi.SJ - this.Gi.Ft);
    }
    Fyb() {
      this.hqa = this.wX.jT(this.ppa, this.opa);
    }
    Ib() {
      debugger;
      let a;
      a = new jj(this.zf);
      a.eb = this.eb;
      return a;
    }
  }
  jj.g = "197";
  jj.u = Ga;
  Object.assign(jj.prototype, { j: jj });
  class tn extends Mb {
    constructor(a) {
      super("ERuleRandom", a);
      this.Ae = m.l();
      this.FB = null;
      this.FC = m.l();
      this.k$ = m.l();
      this.parse(a);
    }
    V4() {
      let a = m.l();
      var b = 0;
      let c = this.FC;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        d.Vi() && a.push(d);
      }
      b = a.length;
      b > 0
        ? ((b = (b * Da.rg.lf()) | 0),
          (this.FB = a[b]),
          this.sVa && (m.ye(this.FC, b), this.k$.push(this.FB)))
        : this.k$.length > 0 && (this.OKa(), this.V4());
    }
    OKa() {
      debugger;
      this.FC.length = 0;
      m.addRange(this.FC, this.Ae);
      this.k$.length = 0;
      this.FB = null;
    }
    setActive(a) {
      super.setActive(a);
      let b = 0,
        c = this.FC;
      for (; b < c.length; ) c[b++].setActive(a);
    }
    kh() {
      return this.Ae;
    }
    parse(a) {
      cb.UE(a, this.Ae);
      this.FC.length = 0;
      m.addRange(this.FC, this.Ae);
      let b = 0,
        c = this.Ae;
      for (; b < c.length; ) c[b++].eb = !0;
      this.sVa = u.ka(a.attributes.get("NoDoubles"));
      a = a.attributes.get("Refresh");
      this.mta = (a != null ? a : "") == "EachRound" ? 2 : 1;
    }
  }
  tn.g = "198";
  tn.u = Mb;
  Object.assign(tn.prototype, { j: tn });
  class un extends Mb {
    constructor(a) {
      super("ERuleRatingEvaluation", a);
      this.wVa = u.H(a.attributes.get("PlayerRating"));
      this.RUa = u.H(a.attributes.get("EnemyRating"));
      a.attributes.get("PlayerRatingMagic");
      a.attributes.get("EnemyRatingMagic");
      a.attributes.get("PlayerRatingRanged");
      a.attributes.get("EnemyRatingRanged");
      this.BVa = u.H(a.attributes.get("RatingCorrection"));
    }
  }
  un.g = "199";
  un.u = Mb;
  Object.assign(un.prototype, { j: un });
  class kj extends Ga {
    constructor(a, b) {
      super("ERuleRechargeMagicEachRound", b, a);
    }
    al() {}
    Ib() {
      debugger;
      let a;
      a = new kj(this.zf, this.mc());
      a.eb = this.eb;
      return a;
    }
  }
  kj.g = "19A";
  kj.u = Ga;
  Object.assign(kj.prototype, { j: kj });
  class lj extends Ga {
    constructor(a, b) {
      super("ERuleRegeneration", b, a);
      this.jc = 0;
      this.ag(5);
      this.ag(1);
      this.parse(a);
      this.reset();
    }
    al() {
      this.jc = 0;
    }
    ih(a) {
      switch (a.gp) {
        case 1:
          this.jc++;
          if (this.dVa && a.uw) break;
          if (this.jc >= this.WUa) return !0;
          break;
        case 5:
          this.jc = 0;
      }
      return !1;
    }
    parse(a) {
      super.parse(a);
      this.WUa = u.H(a.attributes.get("FramesAfterHit"));
      this.CVa = u.H(a.attributes.get("Rate"));
      this.dVa = u.ka(a.attributes.get("WeaponStrike"), !1);
    }
    Ib() {
      debugger;
      let a;
      a = new lj(this.zf, this.mc());
      a.eb = this.eb;
      return a;
    }
  }
  lj.g = "19B";
  lj.u = Ga;
  Object.assign(lj.prototype, { j: lj });
  class mj extends Ga {
    constructor(a, b) {
      super("ERuleRemoveInterval", b, a);
      this.k9 = 0;
      this.parse(a);
    }
    ih() {
      return !1;
    }
    al(a) {
      switch (this.Ni) {
        case 1:
          a.Kc.vY(this.k9);
          break;
        case 2:
          a.VI.vY(this.k9);
      }
    }
    parse(a) {
      super.parse(a);
      a = a.attributes.get("Type");
      a = a != null ? a : "";
      this.k9 =
        a == "Attack"
          ? 4
          : a == "Block"
            ? 5
            : a == "Invulnerable"
              ? 6
              : a == "None"
                ? 0
                : a == "SelfUninterrupt"
                  ? 3
                  : a == "Uninterrupt"
                    ? 2
                    : a == "Unstable"
                      ? 1
                      : 0;
    }
    Ib() {
      debugger;
      let a;
      a = new mj(this.zf, this.mc());
      a.eb = this.eb;
      return a;
    }
  }
  mj.g = "19C";
  mj.u = Ga;
  Object.assign(mj.prototype, { j: mj });
  class nj extends Ga {
    constructor(a) {
      super("ERuleResistance", 3, a);
      this.parse(a);
      this.ag(12);
    }
    parse(a) {
      debugger;
      super.parse(a);
      let b = a.attributes.get("Name");
      this.sta = b != null ? b : "";
      this.CX = u.I(a.attributes.get("Value"));
      this.CX < 0 && (this.CX = 0);
    }
    Ib() {
      debugger;
      let a;
      a = new nj(this.zf, this.mc());
      a.eb = this.eb;
      return a;
    }
  }
  nj.g = "19D";
  nj.u = Ga;
  Object.assign(nj.prototype, { j: nj });
  class oj extends Ga {
    constructor(a, b) {
      super("ERuleRingout", b, a);
      this.NO = 1e5;
      this.eH = this.jN = -1e5;
      this.HH = 1e5;
      this.ga = null;
      this.hC = this.uy = 0;
      this.Hta = 3;
      this.ag(1);
      this.parse(a);
    }
    al(a) {
      a.location != null &&
        ((this.uy = -a.location.width / 2), (this.hC = -a.location.jt));
      switch (this.Ni) {
        case 1:
          a.Kc != null && (this.ga = a.Kc.pa.Ic(this.UN));
          break;
        case 2:
          a.VI != null && (this.ga = a.VI.pa.Ic(this.UN));
      }
    }
    ih() {
      if (this.ga == null) return !1;
      var a = this.ga.ma;
      a = new H(a.x + this.uy, -a.y + this.hC, a.z, 1);
      (a = a.x > this.HH || a.x < this.eH || a.y > this.NO || a.y < this.jN) &&
        this.setActive(!1);
      return a;
    }
    parse(a) {
      super.parse(a);
      var b = a.attributes.get("Node");
      this.UN = b != null ? b : "";
      b = a.attributes.get("Axis");
      b = b != null ? b : "";
      let c = of(a, -1e5, 1e5);
      b == "X" && ((this.eH = c.first), (this.HH = c.second));
      b == "Y" && ((this.jN = c.first), (this.NO = c.second));
      this.Hta = u.H(a.attributes.get("SequentionSpeed"), 3);
      a.attributes.get("Sequence");
    }
    Ib() {
      debugger;
      let a;
      a = new oj(this.zf, this.mc());
      a.eb = this.eb;
      return a;
    }
  }
  oj.g = "19E";
  oj.u = Ga;
  Object.assign(oj.prototype, { j: oj });
  class pj extends Ga {
    constructor(a, b) {
      super("ERuleLightInTheDarkness", b, a);
      debugger;
      a.attributes.get("LightRadius");
      a.attributes.get("LightShape");
      this.sua = null;
      this.ag(1);
    }
    update() {
      debugger;
    }
    al() {
      debugger;
    }
    stop() {
      debugger;
      this.setActive(!1);
    }
    reset() {
      debugger;
      this.setActive(!0);
    }
    Ib() {
      debugger;
      let a;
      a = new pj(this.zf, this.mc());
      a.eb = this.eb;
      return a;
    }
  }
  pj.g = "19F";
  pj.u = Ga;
  Object.assign(pj.prototype, { j: pj });
  class cb {
    static UE(a, b) {
      if (a != null) {
        a = a.children;
        for (var c = 0; c < a.length; ) {
          var d = a[c++];
          d.name == "Level"
            ? cb.Wjb(d, b)
            : ((d = cb.V3(d)), d != null && b.push(d));
        }
      }
    }
    static V3(a) {
      let b = a.name;
      return b == "RequireItem"
        ? new Gf(a)
        : b == "EquipItem"
          ? new mn(a)
          : b == "RandomAquiredItem"
            ? new sn(a)
            : b == "NoButton"
              ? new qn(a)
              : b == "NoAnimation"
                ? new pn(a)
                : b == "Ringout"
                  ? cb.xe("ERuleRingout", a)
                  : b == "HotGround"
                    ? cb.xe("ERuleHotGround", a)
                    : b == "LoseFall"
                      ? cb.xe("ERuleLoseFall", a)
                      : b == "Regeneration"
                        ? cb.xe("ERuleRegeneration", a)
                        : b == "Attributes"
                          ? cb.xe("ERuleAttributes", a)
                          : b == "DamageFactor"
                            ? cb.xe("ERuleDamageFactor", a)
                            : b == "RemoveInterval"
                              ? cb.xe("ERuleRemoveInterval", a)
                              : b == "Crazy"
                                ? cb.xe("ERuleCrazy", a)
                                : b == "Lifesteal"
                                  ? cb.xe("ERuleLifeSteal", a)
                                  : b == "Pvp"
                                    ? cb.xe("ERulePvp", a)
                                    : b == "NoHealthBar"
                                      ? cb.xe("ERuleNoHealthBar", a)
                                      : b == "TimeOutWin"
                                        ? cb.xe("ERuleTimeoutWin", a)
                                        : b == "Combo"
                                          ? cb.xe("ERuleCombo", a)
                                          : b == "Darkness"
                                            ? cb.xe("ERuleDarkness", a)
                                            : b == "Points"
                                              ? cb.xe("ERulePoints", a)
                                              : b == "NoBulletsReplenishment"
                                                ? cb.xe(
                                                    "ERuleNoBulletsReplenishment",
                                                    a,
                                                  )
                                                : b == "RechargeMagicEachRound"
                                                  ? cb.xe(
                                                      "ERuleRechargeMagicEachRound",
                                                      a,
                                                    )
                                                  : b == "Perk"
                                                    ? cb.xe("ERulePerk", a)
                                                    : b == "NoPerks"
                                                      ? cb.xe("ERuleNoPerks", a)
                                                      : b == "RandomRule"
                                                        ? new tn(a)
                                                        : b == "ComplexRule"
                                                          ? new mh(null, a)
                                                          : b ==
                                                              "RulesWithConditions"
                                                            ? new vn(a)
                                                            : b == "Description"
                                                              ? new hn(a)
                                                              : b == "WinCombo"
                                                                ? cb.xe(
                                                                    "ERuleWinCombo",
                                                                    a,
                                                                  )
                                                                : b ==
                                                                    "WinStyle"
                                                                  ? cb.xe(
                                                                      "ERuleWinStyle",
                                                                      a,
                                                                    )
                                                                  : b ==
                                                                      "WinShock"
                                                                    ? cb.xe(
                                                                        "ERuleWinShock",
                                                                        a,
                                                                      )
                                                                    : b ==
                                                                        "ChangeFight"
                                                                      ? new cn(
                                                                          a,
                                                                        )
                                                                      : b ==
                                                                          "SetTactic"
                                                                        ? cb.xe(
                                                                            "ERuleTactic",
                                                                            a,
                                                                          )
                                                                        : b ==
                                                                            "InvertJoystick"
                                                                          ? cb.xe(
                                                                              "ERuleInvertJoystick",
                                                                              a,
                                                                            )
                                                                          : b ==
                                                                              "RandomArea"
                                                                            ? cb.xe(
                                                                                "ERuleRandomArea",
                                                                                a,
                                                                              )
                                                                            : b ==
                                                                                "RatingEvaluation"
                                                                              ? new un(
                                                                                  a,
                                                                                )
                                                                              : b ==
                                                                                  "Invulnerability"
                                                                                ? cb.xe(
                                                                                    "ERuleInvulnerability",
                                                                                    a,
                                                                                  )
                                                                                : b ==
                                                                                    "CurrencyCost"
                                                                                  ? new nh(
                                                                                      a,
                                                                                    )
                                                                                  : b ==
                                                                                      "RaidCurrencyCost"
                                                                                    ? new rn(
                                                                                        a,
                                                                                      )
                                                                                    : b ==
                                                                                        "Resistance"
                                                                                      ? cb.xe(
                                                                                          "ERuleResistance",
                                                                                          a,
                                                                                        )
                                                                                      : b ==
                                                                                          "Avatar"
                                                                                        ? new bn(
                                                                                            a,
                                                                                          )
                                                                                        : b ==
                                                                                            "Name"
                                                                                          ? new on(
                                                                                              a,
                                                                                            )
                                                                                          : b ==
                                                                                              "LightInTheDarkness"
                                                                                            ? cb.xe(
                                                                                                "ERuleLightInTheDarkness",
                                                                                                a,
                                                                                              )
                                                                                            : null;
    }
    static jJa(a) {
      a = a.attributes.get("Type");
      a = a != null ? a : "";
      return a == "Turtle"
        ? 0
        : a == "Hard"
          ? 1
          : a == "Brutal"
            ? 2
            : a == "Aggressive"
              ? 3
              : a == "Crazy"
                ? 4
                : a == "Fantastic"
                  ? 5
                  : 0;
    }
    static xe(a, b) {
      var c = b.attributes.get("ApplyTo");
      c = c != null ? c : "All";
      c = c == "Player" ? 1 : c == "Bot" ? 2 : c == "All" ? 3 : 0;
      switch (a) {
        case "ERuleAttributes":
          return new $i(b, c);
        case "ERuleCombo":
          return new dn(b, c);
        case "ERuleCrazy":
          return new en(b, c);
        case "ERuleDamageFactor":
          return new fn(b, c);
        case "ERuleDarkness":
          return new aj(b, 1);
        case "ERuleHotGround":
          return new jn(b, c);
        case "ERuleInvertJoystick":
          return new bj(b);
        case "ERuleInvulnerability":
          return new ln(b, c);
        case "ERuleLifeSteal":
          return new cj(b, c);
        case "ERuleLightInTheDarkness":
          return new pj(b, c);
        case "ERuleLoseFall":
          return new nn(b, c);
        case "ERuleNoBulletsReplenishment":
          return new dj(b, c);
        case "ERuleNoHealthBar":
          return new ej(b, c);
        case "ERuleNoPerks":
          return new fj(b, c);
        case "ERulePerk":
          return new gj(b, c);
        case "ERulePoints":
          return new hj(b, 3);
        case "ERulePvp":
          return new ij(b, c);
        case "ERuleRandomArea":
          return new jj(b);
        case "ERuleRechargeMagicEachRound":
          return new kj(b, c);
        case "ERuleRegeneration":
          return new lj(b, c);
        case "ERuleRemoveInterval":
          return new mj(b, c);
        case "ERuleResistance":
          return new nj(b, c);
        case "ERuleRingout":
          return new oj(b, c);
        case "ERuleTactic":
          return new qj(b);
        case "ERuleTimeoutWin":
          return new rj(b, c);
        case "ERuleWinCombo":
          return new sj(b, c);
        case "ERuleWinShock":
          return new tj(b, c);
        case "ERuleWinStyle":
          return new uj(b, c);
        default:
          return null;
      }
    }
    static Wjb(a, b) {
      let c = $f(a, 0, 2147483647);
      a = a.children;
      let d = 0;
      for (; d < a.length; ) {
        let e = cb.V3(a[d++]);
        e != null && ((e.MFa = c.first), (e.LFa = c.second), b.push(e));
      }
    }
  }
  cb.g = "1A0";
  class eu {
    constructor(a, b) {
      this.hra = !1;
      this.Sm = 0;
      this.hz = 1;
      this.c5 = !1;
      this.Ae = m.l();
      this.V9 = m.l();
      this.I7 = m.l();
      this.vX = m.l();
      this.uG = m.l();
      this.bX = m.l();
      this.cX = m.l();
      this.MV = m.l();
      this.rX = m.l();
      this.v9 = m.l();
      this.Bo = m.l();
      this.BX = m.l();
      this.j8 = m.l();
      this.CV = m.l();
      this.paa = m.l();
      this.n8 = m.l();
      this.q$ = m.l();
      this.D7 = m.l();
      this.kaa = m.l();
      this.i9 = m.l();
      this.h8 = m.l();
      this.AX = m.l();
      this.lN = m.l();
      this.sX = m.l();
      this.NV = m.l();
      this.tX = m.l();
      this.UTa = -220;
      this.TTa = 0;
      this.Pe = null;
      this.init(a, b);
    }
    init(a, b) {
      this.Pe = a;
      this.c5 = !1;
      b.Yc != null && b.Yc.lga && (this.Asb(b.Yc.Sm), this.Frb());
      a = 0;
      for (b = b.kh(); a < b.length; ) this.TK(b[a++]);
    }
    Kh(a, b, c) {
      if (this.c5) {
        var d = !1;
        m.l();
        switch (a) {
          case 1:
            var e = this.AX;
            d = !0;
            break;
          case 2:
            e = this.h8;
            break;
          case 4:
            e = this.D7;
            break;
          case 5:
            e = this.i9;
            break;
          case 6:
            e = this.kaa;
            break;
          case 7:
            e = this.q$;
            break;
          case 8:
            e = this.n8;
            break;
          case 9:
          case 13:
            e = this.paa;
            break;
          case 10:
            e = this.CV;
            break;
          case 11:
            e = this.j8;
            break;
          case 12:
            e = this.BX;
            break;
          default:
            return;
        }
        for (a = 0; a < e.length; ) {
          let f = e[a];
          ++a;
          !f.active ||
            (f.mc() != b && f.mc() != 3 && b != 3) ||
            (f.compare(c) && this.jpb(f));
        }
        d && this.H_a();
      }
    }
    y_a() {
      var a = !1;
      let b = !1,
        c = !1,
        d = !1,
        e = 0,
        f = this.Bo;
      for (; e < f.length; ) {
        let g = f[e];
        ++e;
        if (g.active)
          switch (g.type) {
            case "ERuleDarkness":
              b || (this.Pe.K1(), (b = !0));
              break;
            case "ERuleHotGround":
              d || (d = !0);
              break;
            case "ERuleNoHealthBar":
              this.Pe.Jr(g.mc(), !1);
              break;
            case "ERulePoints":
              c || (this.Pe.DP(this.TTa, this.UTa, g.eO, g.PW), (c = !0));
              break;
            case "ERuleRandomArea":
              this.Pe.Aca(g.Jaa, g.Dk, g.Ao);
              break;
            case "ERuleRingout":
              a || ((a = g), this.Pe.a2a(a.eH, a.HH, a.Hta), (a = !0));
          }
      }
    }
    N1(a) {
      let b = 0,
        c = this.Bo;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.active)
          switch ((d.al(a), d.type)) {
            case "ERuleInvertJoystick":
              this.Pe.Tga = !0;
              break;
            case "ERuleRechargeMagicEachRound":
              this.Pe.Bmb(d.mc());
              break;
            case "ERuleTactic":
              this.Pe.brb(d.UVa);
          }
      }
      this.rZ(3);
      this.F_a();
    }
    Axa() {
      this.tX.length = 0;
      let a = (this.NV.length = 0),
        b = this.Bo;
      for (; a < b.length; ) b[a++].clear();
    }
    dxb() {
      let a = 0,
        b = this.Bo;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        c.active && (c.stop(), c.type == "ERuleDarkness" && this.Pe.YLa(0));
      }
    }
    Ksb() {
      let a;
      for (var b = 0, c = this.Bo; b < c.length; ) {
        var d = c[b];
        ++b;
        a = d.pI(this.hz) && d.Vi();
        d.setActive(a);
      }
      b = 0;
      for (c = this.cX; b < c.length; )
        ((d = c[b]), ++b, (a = d.pI(this.hz) && d.Vi()), d.setActive(a));
      b = 0;
      for (c = this.bX; b < c.length; )
        ((d = c[b]), ++b, (a = d.pI(this.hz) && d.Vi()), d.setActive(a));
      b = 0;
      for (c = this.v9; b < c.length; )
        ((d = c[b]), ++b, (a = d.pI(this.hz) && d.Vi()), d.setActive(a));
      b = 0;
      for (c = this.vX; b < c.length; )
        ((d = c[b]), ++b, (a = d.pI(this.hz) && d.Vi()), d.setActive(a));
    }
    IY(a, b) {
      let c = (a.eS.length = 0);
      for (; c < b.length; ) {
        let d = b[c++].Ba;
        a.eS.push(d);
      }
      a.Xja(a.Oa, a.eS);
    }
    Nva(a) {
      let b = (a.jK.length = 0),
        c = this.bX;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        d.active && a.jK.push(d.nUa);
      }
    }
    qYa(a) {
      for (var b = 0, c = this.I7; b < c.length; ) a.Kf = c[b++].name;
      b = 0;
      for (c = this.V9; b < c.length; ) a.ft = c[b++].name;
    }
    ZZa() {
      let a = 0,
        b = this.cX;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        c.active && this.rYa(c);
      }
    }
    rYa(a) {
      if (Za.Hb != null)
        switch (a.vUa) {
          case 0:
            Za.F().TMa(!1);
            break;
          case 1:
            Za.F().QMa(!1);
            break;
          case 2:
            Za.F().UMa(!1);
            break;
          case 3:
            Za.F().SMa(!1);
        }
    }
    Wba(a) {
      if (this.uG.length > 0) {
        let b = null,
          c = 0,
          d = this.uG;
        for (; c < d.length; ) {
          let e = d[c];
          ++c;
          e.active && (b = e);
        }
        b != null && this.sYa(this.uG[this.uG.length - 1], a);
      }
    }
    sYa(a, b) {
      let c = a.GVa;
      c > 0 && (b.vT = c);
      a = a.FVa;
      a > 0 && (b.a5 = a);
    }
    Mob() {
      this.t0a();
      this.hz == 1 && (this.hra ? Da.OT(this.Sm) : Da.xL(), this.SKa(1));
      Da.xL();
      this.SKa(2);
      this.Xlb();
    }
    Nob(a) {
      this.Axa();
      this.hz = a;
      this.Ksb();
      this.Mob();
      this.Nmb();
    }
    Glb(a) {
      let b = 0;
      for (; b < a.length; ) {
        let c = a[b];
        ++b;
        c != null && c.type == "ERuleRandomAquiredItem" && c.LJa();
      }
    }
    jpb(a) {
      let b = !1;
      switch (a.type) {
        case "ERuleCombo":
        case "ERuleCrazy":
          b = !0;
          break;
        case "ERuleHotGround":
        case "ERuleRingout":
          a.ura && this.Pe.pT(a.mc());
          this.Pe.HT(a);
          break;
        case "ERuleLifeSteal":
          var c = a.d9;
          c /= v.qn();
          this.Pe.lPa(a.mc(), c) && this.Pe.HT(a);
          break;
        case "ERulePoints":
          this.Pe.NU(a.wH, a.mN);
          a.KV && this.Pe.HT(a);
          break;
        case "ERuleRegeneration":
          c = a.CVa;
          c /= v.qn();
          this.Pe.lPa(a.mc(), c) && this.Pe.HT(a);
          break;
        case "ERuleLoseFall":
        case "ERuleTimeoutWin":
        case "ERuleWinCombo":
        case "ERuleWinShock":
        case "ERuleWinStyle":
          this.Pe.HT(a);
      }
      b && this.rZ(a.mc());
    }
    H_a() {
      let a = 0,
        b = this.AX;
      for (; a < b.length; ) {
        var c = b[a];
        ++a;
        if (c.active)
          switch (c.type) {
            case "ERuleDarkness":
              this.Pe.YLa(c.Ak);
              break;
            case "ERuleHotGround":
              c.hK &&
                (this.Pe.ha != null && this.Pe.ha.dAb(c.getTime(), c.mc()),
                (c.hK = !1));
              break;
            case "ERuleLightInTheDarkness":
              debugger;
              c.update();
              break;
            case "ERuleRandomArea":
              this.Pe.Yma(c.hqa, c.Ak, c.TB);
          }
      }
    }
    rZ(a) {
      if (a == 3) (this.rZ(1), this.rZ(2));
      else {
        for (var b = !0, c = 0, d = this.CV; c < d.length; ) {
          let e = d[c];
          ++c;
          e.active && e.mc() == a && (b = b && !e.Bs);
        }
        this.Pe.afa(a == 1 ? 2 : 1).zla(!b);
      }
    }
    F_a() {
      let a = this.Pe.afa(1),
        b = this.Pe.afa(2),
        c = 1,
        d = 1,
        e = 0,
        f = this.BX;
      for (; e < f.length; ) {
        debugger;
        var g = f[e++];
        if (g != null) {
          let h = g.CX;
          g = p.o.Tw.j0(g.sta);
          g < h &&
            ((c *= Math.pow(2, (g - h) / v.rT)),
            (d *= Math.pow(2, (h - g) / v.rT)));
        }
      }
      a.Kla(c);
      b.Kla(d);
    }
    bla(a) {
      a.hg(1) && this.AX.push(a);
      a.hg(2) && this.h8.push(a);
      a.hg(5) && this.i9.push(a);
      a.hg(4) && this.D7.push(a);
      a.hg(7) && this.q$.push(a);
      a.hg(8) && this.n8.push(a);
      a.hg(6) && this.kaa.push(a);
      a.hg(9) && this.paa.push(a);
      a.hg(10) && this.CV.push(a);
      a.hg(11) && this.j8.push(a);
      a.hg(12) && this.BX.push(a);
      m.cd(this.Bo, a);
      m.cd(this.Ae, a);
    }
    Gya(a) {
      a.hg(1) && J.remove(this.AX, a);
      a.hg(2) && J.remove(this.h8, a);
      a.hg(5) && J.remove(this.i9, a);
      a.hg(4) && J.remove(this.D7, a);
      a.hg(7) && J.remove(this.q$, a);
      a.hg(8) && J.remove(this.n8, a);
      a.hg(6) && J.remove(this.kaa, a);
      a.hg(9) && J.remove(this.paa, a);
      a.hg(10) && J.remove(this.CV, a);
      a.hg(11) && J.remove(this.j8, a);
      a.hg(12) && J.remove(this.BX, a);
    }
    removeRule(a) {
      switch (a.type) {
        case "ERuleAvatar":
          J.remove(this.I7, a);
          break;
        case "ERuleChangeFight":
          J.remove(this.uG, a);
          break;
        case "ERuleComplex":
          this.uKa(a);
          return;
        case "ERuleName":
          J.remove(this.V9, a);
          break;
        case "ERuleNoAnimation":
          J.remove(this.bX, a);
          break;
        case "ERuleNoButton":
          J.remove(this.cX, a);
          break;
        case "ERuleEquipItem":
        case "ERuleItem":
        case "ERuleRandomAquiredItem":
          J.remove(this.v9, a);
          J.remove(this.rX, a);
          J.remove(this.MV, a);
          break;
        case "ERuleDarkness":
        case "ERuleInvertJoystick":
        case "ERulePoints":
        case "ERuleRandomArea":
          this.zKa(a, !0);
          break;
        case "ERuleAttributes":
        case "ERuleCombo":
        case "ERuleCrazy":
        case "ERuleDamageFactor":
        case "ERuleHotGround":
        case "ERuleInvulnerability":
        case "ERuleLifeSteal":
        case "ERuleLoseFall":
        case "ERuleNoBulletsReplenishment":
        case "ERuleNoHealthBar":
        case "ERulePvp":
        case "ERuleRechargeMagicEachRound":
        case "ERuleRegeneration":
        case "ERuleRemoveInterval":
        case "ERuleResistance":
        case "ERuleRingout":
        case "ERuleTimeoutWin":
          this.zKa(a);
          break;
        case "ERulesWithConditions":
          this.uKa(a);
      }
      J.remove(this.Ae, a);
    }
    uKa(a) {
      let b = 0,
        c = a.kh();
      for (; b < c.length; ) this.removeRule(c[b++]);
      J.remove(this.Ae, a);
    }
    Wlb(a) {
      switch (a.mc()) {
        case 1:
          this.tX.push(a.E0());
          break;
        case 2:
          this.NV.push(a.E0());
      }
    }
    Vlb(a) {
      switch (a.mc()) {
        case 1:
          this.sX.push(a);
          break;
        case 2:
          this.lN.push(a);
          break;
        case 3:
          (this.sX.push(a), this.lN.push(a));
      }
    }
    Nmb() {
      this.tX.length = 0;
      let a = (this.NV.length = 0),
        b = this.Ae;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        c.active &&
          (c.type == "ERulePerk"
            ? this.Wlb(c)
            : c.type == "ERuleNoPerks" && this.Vlb(c));
      }
    }
    t0a() {
      let a = 0,
        b = m.sD(this.Ae, function (c) {
          return c.eb;
        });
      for (; a < b.length; ) this.removeRule(b[a++]);
    }
    SKa(a) {
      let b = 0,
        c = this.vX;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        d.active && d.mta == a && d.V4();
      }
    }
    Xlb() {
      let a = 0,
        b = this.vX;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        c.active && this.TK(c.FB);
      }
    }
    TK(a) {
      switch (a.type) {
        case "ERuleAvatar":
          this.I7.push(a);
          break;
        case "ERuleChangeFight":
          this.uG.push(a);
          break;
        case "ERuleComplex":
          this.$Ja(a);
          break;
        case "ERuleInvertJoystick":
          this.y4(a, !0);
          break;
        case "ERuleName":
          this.V9.push(a);
          break;
        case "ERuleNoAnimation":
          this.bX.push(a);
          break;
        case "ERuleNoButton":
          this.cX.push(a);
          break;
        case "ERuleDarkness":
        case "ERuleLightInTheDarkness":
        case "ERulePoints":
          this.y4(a, !0);
          return;
        case "ERuleRandom":
          this.vX.push(a);
          break;
        case "ERuleEquipItem":
        case "ERuleItem":
        case "ERuleRandomAquiredItem":
          this.Tlb(a);
          break;
        case "ERuleRandomArea":
          this.y4(a, !0);
          break;
        case "ERuleCurrencyCost":
        case "ERuleDescription":
        case "ERuleRaidCurrencyCost":
        case "ERuleRatingEvaluation":
          return;
        case "ERuleAttributes":
        case "ERuleCombo":
        case "ERuleCrazy":
        case "ERuleDamageFactor":
        case "ERuleHotGround":
        case "ERuleInvulnerability":
        case "ERuleLifeSteal":
        case "ERuleLoseFall":
        case "ERuleNoBulletsReplenishment":
        case "ERuleNoHealthBar":
        case "ERuleNoPerks":
        case "ERulePerk":
        case "ERulePvp":
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
          this.y4(a);
          break;
        case "ERulesWithConditions":
          if (!a.compare(ha.F().ta)) {
            a.rP = !1;
            return;
          }
          a.rP = !0;
          this.$Ja(a);
      }
      a.type != "ERuleRandom" && m.cd(this.Ae, a);
    }
    $Ja(a) {
      let b = 0,
        c = a.kh();
      for (; b < c.length; ) this.TK(c[b++]);
      m.cd(this.Ae, a);
    }
    Tlb(a) {
      switch (a.mc()) {
        case 1:
          this.rX.push(a);
          break;
        case 2:
          this.MV.push(a);
          break;
        case 3:
          (this.rX.push(a), this.MV.push(a));
      }
      this.v9.push(a);
    }
    y4(a, b) {
      b == null && (b = !1);
      if (b || a.mc() != 3) this.bla(a);
      else {
        b = a.Ib();
        let c = a.Ib();
        b.QLa(1);
        c.QLa(2);
        b.parentRule = a;
        c.parentRule = a;
        this.bla(b);
        this.bla(c);
      }
    }
    zKa(a, b) {
      b == null && (b = !1);
      if (b || a.mc() != 3)
        for (b = 0; b < this.Bo.length; ) {
          var c = this.Bo[b];
          if (a == c) {
            J.remove(this.Bo, c);
            this.Gya(c);
            break;
          }
          ++b;
        }
      else
        for (b = 0; b < this.Bo.length; )
          ((c = this.Bo[b]),
            c.parentRule == a ? (J.remove(this.Bo, c), this.Gya(c)) : ++b);
    }
    Asb(a) {
      this.Sm = a;
    }
    Frb() {
      this.hra = !0;
    }
  }
  eu.g = "1A1";
  Object.assign(eu.prototype, { j: eu });
  class vn extends mh {
    constructor(a) {
      super("ERulesWithConditions", a);
      this.ad = m.l();
      this.rP = !1;
    }
    parse(a) {
      this.ad == null && (this.ad = m.l());
      ce.MS(a.A("Conditions"), this.ad);
      this.UE(a.A("RuleList"));
    }
    UE(a) {
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        let c = cb.V3(a[b++]);
        c != null && this.Ae.push(c);
      }
    }
    compare(a) {
      this.ad == null && (this.ad = m.l());
      let b = 0,
        c = this.ad;
      for (; b < c.length; ) if (!c[b++].compare(a)) return !1;
      return !0;
    }
  }
  vn.g = "1A2";
  vn.u = mh;
  Object.assign(vn.prototype, { j: vn });
  class qj extends Ga {
    constructor(a, b) {
      b == null && (b = 2);
      super("ERuleTactic", b, a);
      this.parse(a);
    }
    parse(a) {
      a = a.attributes.get("Name");
      this.UVa = a != null ? a : "";
    }
    Ib() {
      debugger;
      let a;
      a = new qj(this.zf, this.mc());
      a.eb = this.eb;
      return a;
    }
  }
  qj.g = "1A3";
  qj.u = Ga;
  Object.assign(qj.prototype, { j: qj });
  class rj extends Ga {
    constructor(a, b) {
      super("ERuleTimeoutWin", b, a);
      this.cv = !1;
      this.ag(9);
      this.reset();
      this.Ni = 1;
    }
    ih() {
      return !0;
    }
    Ib() {
      debugger;
      let a;
      a = new rj(this.zf, this.mc());
      a.eb = this.eb;
      return a;
    }
  }
  rj.g = "1A4";
  rj.u = Ga;
  Object.assign(rj.prototype, { j: rj });
  class sj extends Ga {
    constructor(a, b) {
      super("ERuleWinCombo", b, a);
      this.parse(a);
      this.cv = !1;
      this.ag(11);
    }
    ih(a) {
      return a.UZ >= this.vV;
    }
    parse(a) {
      super.parse(a);
      this.vV = u.I(a.attributes.get("Value"));
    }
    Ib() {
      debugger;
      let a;
      a = new sj(this.zf, this.mc());
      a.eb = this.eb;
      return a;
    }
  }
  sj.g = "1A5";
  sj.u = Ga;
  Object.assign(sj.prototype, { j: sj });
  class tj extends Ga {
    constructor(a, b) {
      super("ERuleWinShock", b, a);
      this.cv = !1;
      this.ag(6);
    }
    ih(a) {
      return a.L3;
    }
    Ib() {
      let a;
      a = new tj(this.zf, this.mc());
      a.eb = this.eb;
      return a;
    }
  }
  tj.g = "1A6";
  tj.u = Ga;
  Object.assign(tj.prototype, { j: tj });
  class uj extends Ga {
    constructor(a, b) {
      super("ERuleWinStyle", b, a);
      this.parse(a);
      this.cv = !1;
      this.ag(8);
    }
    ih(a) {
      debugger;
      return a.EP >= this.TVa;
    }
    parse(a) {
      super.parse(a);
      this.TVa = cb.jJa(a);
    }
    Ib() {
      debugger;
      let a;
      a = new uj(this.zf, this.mc());
      a.eb = this.eb;
      return a;
    }
  }
  uj.g = "1A7";
  uj.u = Ga;
  Object.assign(uj.prototype, { j: uj });
