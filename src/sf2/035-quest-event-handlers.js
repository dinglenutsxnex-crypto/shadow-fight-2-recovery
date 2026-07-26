// 035-quest-event-handlers.js
// Domain: combat  |  28 class(es)  |  tree root(s): Ha, Xl, Ae, ng
// Edit here. Run `npm run build` to reassemble the full bundle.
  class Ha {
    constructor(a) {
      this.fl = 0;
      this.type = a;
      this.cb = !1;
    }
    init() {}
    he() {
      return !1;
    }
    tEa(a) {
      return this.he(a.Fc);
    }
    parse(a) {
      this.cb = u.ka(a.attributes.get("Not"));
      a = a.attributes.get("Player");
      this.fl = Od.ql(a != null ? a : "Me");
      this.init();
    }
    Xba(a) {
      return this.cb ? !a : a;
    }
    bfa(a, b) {
      return a.ff(b);
    }
    hla(a) {
      this.fl = a;
    }
  }
  Ha.g = "125";
  Object.assign(Ha.prototype, { j: Ha });
  class pm extends Ha {
    constructor(a) {
      super(22);
      a = a.attributes.get("Value");
      this.Wo = a != null ? a : "FightNone";
    }
    he(a) {
      a = a.Wo == this.Wo;
      return this.cb ? !a : a;
    }
  }
  pm.g = "126";
  pm.u = Ha;
  Object.assign(pm.prototype, { j: pm });
  class qm extends Ha {
    constructor(a) {
      super(16);
      a = a.attributes.get("Name");
      this.name = a != null ? a : "";
    }
    he(a) {
      let b = this.name;
      a = b == null || b == "" || this.name == a.fK;
      return this.cb ? !a : a;
    }
  }
  qm.g = "127";
  qm.u = Ha;
  Object.assign(qm.prototype, { j: qm });
  class rm extends Ha {
    constructor(a) {
      super(23);
      this.state = u.ka(a.attributes.get("Value"));
    }
    he() {
      return this.cb ? !0 : !1;
    }
  }
  rm.g = "128";
  rm.u = Ha;
  Object.assign(rm.prototype, { j: rm });
  class sm extends Ha {
    constructor(a) {
      super(14);
      var b = a.attributes.get("Type");
      b = b != null ? b : "";
      b == "MagicBullet"
        ? (this.pV = 0)
        : b == "RaidChargeBullet" && (this.pV = 1);
      a = $f(a, 0, 2147483647);
      this.jsa = a.first;
      this.mVa = a.second;
      (this.pV != 0 && this.pV != 1) || !v.jba || (this.jsa = 0);
    }
    he(a) {
      let b = 0;
      switch (this.pV) {
        case 0:
          b = a.el;
          break;
        case 1:
          b = a.bmb;
      }
      a = this.jsa <= b && b <= this.mVa;
      return this.cb ? !a : a;
    }
  }
  sm.g = "129";
  sm.u = Ha;
  Object.assign(sm.prototype, { j: sm });
  class mg extends Ha {
    constructor(a) {
      super(10);
      this.Ba = null;
      this.Dra = !1;
      if (a.attributes.get("Name") != null) {
        let b = a.attributes.get("Name");
        this.Ba = b != null ? b : "";
        this.Dra = this.Ba == "$NoAnimation$";
      }
      this.WG = u.ka(a.attributes.get("Physics"));
    }
    he(a) {
      let b = !1;
      var c = this.Ba;
      c != null && c != ""
        ? ((c = this.BQ(a)),
          "$Move" == this.Ba
            ? 0 < c.length && (b = mg.LEa(c[0], a.CK))
            : (b = this.Dra ? c.length == 0 : mg.LEa(this.Ba, c)))
        : ((b = this.x7a(a)), (b = b == this.WG));
      return this.cb ? !b : b;
    }
    BQ(a) {
      switch (this.fl) {
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
    x7a(a) {
      switch (this.fl) {
        case 1:
          return a.Zga;
        case 2:
          return a.PEa;
        case 3:
          return a.QEa;
        default:
          return a.Zga;
      }
    }
    static LEa(a, b) {
      let c = 0;
      for (; c < b.length; ) if (a == b[c++]) return !0;
      return !1;
    }
  }
  mg.g = "12A";
  mg.u = Ha;
  Object.assign(mg.prototype, { j: mg });
  class tm extends Ha {
    constructor(a) {
      super(21);
      this.direction = Fa.ida(a);
    }
    he(a) {
      let b = this.direction.gCa(a),
        c = 1;
      switch (this.fl) {
        case 1:
          c = a.sign;
          break;
        case 2:
          c = a.Xla;
          break;
        case 3:
          c = a.Yla;
      }
      a = b == c;
      return this.cb ? !a : a;
    }
    mB(a, b, c, d, e) {
      this.direction.from.lB(a, b, c, d, e);
      this.direction.to.lB(a, b, c, d, e);
    }
    Zo() {
      this.direction.from.$y();
      this.direction.to.$y();
    }
    bfa(a) {
      return a;
    }
    hla() {}
  }
  tm.g = "12B";
  tm.u = Ha;
  Object.assign(tm.prototype, { j: tm });
  class um extends Ha {
    constructor(a) {
      super(2);
      var b = a.attributes.get("Axis");
      b = b != null ? b : null;
      this.Mdb = b == null ? 2 : b == "X" ? 0 : 1;
      b = of(a, -1e6, 1e6);
      this.min = b.first;
      this.max = b.second;
      this.KK = new ee();
      this.KK.Jj(a.A("From"));
      this.LK = new ee();
      this.LK.Jj(a.A("To"));
    }
    he(a) {
      var b = 0;
      switch (this.Mdb) {
        case 0:
          b = this.LK.TQ(a) - this.KK.TQ(a);
          b *= a.Zl;
          break;
        case 1:
          b = this.LK.lfa(a) - this.KK.lfa(a);
          break;
        case 2:
          b = this.LK.tt(a);
          let c = this.KK.tt(a);
          debugger;
          a = c.x - b.x;
          b = c.y - b.y;
          b = Math.sqrt(a * a + b * b);
      }
      b = this.min <= b && b <= this.max;
      return this.cb ? !b : b;
    }
    mB(a, b, c, d, e) {
      this.KK.lB(a, b, c, d, e);
      this.LK.lB(a, b, c, d, e);
    }
    Zo() {
      this.KK.$y();
      this.LK.$y();
    }
  }
  um.g = "12C";
  um.u = Ha;
  Object.assign(um.prototype, { j: um });
  class vm extends Ha {
    constructor(a) {
      super(7);
      a = of(a);
      this.hfb = a.first;
      this.Zeb = a.second;
    }
    he(a) {
      a = a.MDa / a.NDa;
      a = this.hfb <= a && a <= this.Zeb;
      return this.cb ? !a : a;
    }
  }
  vm.g = "12D";
  vm.u = Ha;
  Object.assign(vm.prototype, { j: vm });
  class wm extends Ha {
    constructor(a) {
      super(24);
      let b = a.attributes.get("Type");
      this.xaa = b != null ? b : "";
      a = a.attributes.get("Name");
      this.Ba = a != null ? a : "";
    }
    he(a) {
      if (a.OL == null || a.OL.model == null) return !1;
      var b = !1;
      let c = this.xaa;
      if (
        c == null ||
        c == "" ||
        (this.xaa == "Critical" && a.OL.se) ||
        (this.xaa == "Shock" && a.OL.Ub)
      )
        ((a = a.OL.model.Vb.YC),
          (b = this.Ba),
          (b = b == null || b == "" || a == null || a == "" || this.Ba == a));
      return this.cb ? !b : b;
    }
  }
  wm.g = "12E";
  wm.u = Ha;
  Object.assign(wm.prototype, { j: wm });
  class xm extends Ha {
    constructor(a) {
      super(9);
      let b = a.attributes.get("Name");
      this.Ba = b != null ? b : "";
      a.attributes.get("Type") != null
        ? ((a = a.attributes.get("Type")),
          (a = a != null ? a : ""),
          a == "Attack"
            ? (this.uc = 4)
            : a == "Block"
              ? (this.uc = 5)
              : a == "Invulnerable" && (this.uc = 6))
        : (this.uc = 0);
    }
    he(a) {
      let b = !1;
      a = a.xb;
      if (a != null) {
        let c = 0;
        for (; c < a.length; ) {
          let d = a[c];
          ++c;
          if (this.uc == 0 || this.uc == d.type)
            if (this.Ba == "" || d.name == this.Ba) {
              b = !0;
              break;
            }
        }
      }
      return this.cb ? !b : b;
    }
  }
  xm.g = "12F";
  xm.u = Ha;
  Object.assign(xm.prototype, { j: xm });
  class ym extends Ha {
    constructor(a) {
      super(13);
      var b = a.attributes.get("Type");
      this.HR = b != null ? b : "";
      b = a.attributes.get("SubType");
      this.mFa = b != null ? b : "";
      a = a.attributes.get("Name");
      this.name = a != null ? a : "";
    }
    he(a) {
      let b = 0;
      for (a = a.items; b < a.length; ) {
        var c = a[b];
        ++b;
        var d = void 0;
        d = this.HR;
        d == null || d == "" || this.HR == c.type
          ? ((d = this.mFa), (d = d == null || d == "" || this.mFa == c.Yb))
          : (d = !1);
        d
          ? ((d = this.name), (c = d == null || d == "" || this.name == c.name))
          : (c = !1);
        if (c) return !this.cb;
      }
      return this.cb;
    }
  }
  ym.g = "130";
  ym.u = Ha;
  Object.assign(ym.prototype, { j: ym });
  class zm extends Ha {
    constructor(a) {
      super(4);
      this.zn = new zd();
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        var c = a[b++],
          d = c.attributes.get("Type");
        d = ta.MQ(0, d != null ? d : "");
        c = c.attributes.get("PressType");
        c = c != null ? c : "";
        c == "Hold"
          ? this.zn.Hh.push(d)
          : c == "Tap"
            ? this.zn.th.push(d)
            : c == "Release" && this.zn.released.push(d);
      }
      this.zn.Lob();
      this.gEa = this.zn.Ib();
      this.gEa.reverse(-1);
    }
    he(a) {
      a = a.jm ? (a.keys.a2 || a.Zl > 0 ? this.zn : this.gEa).kha(a.keys) : !0;
      return this.cb ? !a : a;
    }
    ycb(a) {
      a = this.zn.kha(a);
      return this.cb ? !a : a;
    }
  }
  zm.g = "131";
  zm.u = Ha;
  Object.assign(zm.prototype, { j: zm });
  class Am extends Ha {
    constructor(a, b) {
      super(8);
      this.yaa = a.attributes.get("Type") == "Or" ? 1 : 0;
      this.rb = b;
    }
    he(a) {
      a = this.uEa(a);
      return this.cb ? !a : a;
    }
    vEa(a) {
      a = this.uEa(a);
      return this.cb ? !a : a;
    }
    uEa(a) {
      let b = 0,
        c = this.rb;
      for (; b < c.length; ) {
        let d;
        if ((d = c[b++].he(a)) && this.yaa == 1) return !0;
        if (!d && this.yaa == 0) return !1;
      }
      return this.yaa == 0;
    }
  }
  Am.g = "132";
  Am.u = Ha;
  Object.assign(Am.prototype, { j: Am });
  class Bm extends Ha {
    constructor(a) {
      super(20);
      let b = a.attributes.get("Name");
      this.name = b != null ? b : "";
      a = a.attributes.get("Perk");
      this.nb = a != null ? a : "";
    }
    he(a) {
      let b = null;
      switch (this.fl) {
        case 1:
          b = a.bja;
          break;
        case 2:
          b = a.b4;
          break;
        case 5:
          ((b = m.Ib(a.bja)), m.addRange(b, a.b4));
      }
      a = !1;
      let c = 0,
        d = b.length;
      for (; c < d; ) {
        let e = b[c++],
          f = this.nb;
        if (
          (f == null || f == "" || this.nb == e.action.Wa.name) &&
          this.name == e.action.name
        ) {
          a = !0;
          break;
        }
      }
      return this.cb ? !a : a;
    }
  }
  Bm.g = "133";
  Bm.u = Ha;
  Object.assign(Bm.prototype, { j: Bm });
  class Cm extends Ha {
    constructor(a) {
      super(25);
      a = a.attributes.get("Name");
      this.Ba = a != null ? a : "";
    }
    he(a) {
      if (a.xr == null) return !1;
      var b = a.xr.ff(this.fl);
      if ((a = b.ab() == this.Ba)) return this.Xba(a);
      let c = 0;
      for (b = b.vd; c < b.length && !(a = b[c++].ab() == this.Ba); );
      return this.Xba(a);
    }
  }
  Cm.g = "134";
  Cm.u = Ha;
  Object.assign(Cm.prototype, { j: Cm });
  class Dm extends Ha {
    constructor() {
      super(19);
    }
    tEa(a, b) {
      a = this.V7a(a, b);
      return this.cb ? !a : a;
    }
    V7a(a, b) {
      return this.fl == 1 ? Te.dZa(a.pa, b.S2.wq.key, a.da.jd(), b.i$a()) : !1;
    }
  }
  Dm.g = "135";
  Dm.u = Ha;
  Object.assign(Dm.prototype, { j: Dm });
  class Em extends Ha {
    constructor(a) {
      super(17);
      a = a.attributes.get("Value");
      this.name = a != null ? a : "";
    }
    he(a) {
      a = a.fK == this.name;
      return this.cb ? !a : a;
    }
  }
  Em.g = "136";
  Em.u = Ha;
  Object.assign(Em.prototype, { j: Em });
  class Fm extends Ha {
    constructor(a) {
      super(15);
      a = a.attributes.get("Name");
      this.name = a != null ? a : "";
    }
    he(a) {
      function b(d) {
        if (Fd(d)) return !1;
        let e = 0;
        for (; e < d.length; ) {
          let f = d[e];
          ++e;
          if (f != null && c.name == f.name) return !0;
        }
        return !1;
      }
      let c = this;
      switch (this.fl) {
        case 0:
          a = !1;
          break;
        case 1:
          a = b(a.IA);
          break;
        case 2:
          a = b(a.qz);
          break;
        case 3:
          a = a.xr;
          a = a != null ? a.lb : null;
          a = b(a != null ? a.parameters.Oa : null);
          break;
        case 4:
          a = a.xr;
          a = a != null ? a.vBa() : null;
          a = b(a != null ? a.parameters.Oa : null);
          break;
        case 5:
          a = b(a.IA) && b(a.qz);
          break;
        case 6:
          a = a.xr;
          a = a != null ? a.jb : null;
          a = a != null ? a.vBa() : null;
          a = b(a != null ? a.parameters.Oa : null);
          break;
        case 7:
          a = a.xr;
          a = a != null ? a.Nf() : null;
          a = b(a != null ? a.parameters.Oa : null);
          break;
        default:
          a = !1;
      }
      return this.Xba(a);
    }
  }
  Fm.g = "137";
  Fm.u = Ha;
  Object.assign(Fm.prototype, { j: Fm });
  class Gm extends Ha {
    constructor(a) {
      super(11);
      a = of(a, -1, -1);
      this.min = a.first;
      this.max = a.second;
    }
    he(a) {
      let b = !1;
      (this.min == -1 || a.gea >= this.min) &&
        (this.max == -1 || a.gea <= this.max) &&
        (b = !0);
      return this.cb ? !b : b;
    }
  }
  Gm.g = "138";
  Gm.u = Ha;
  Object.assign(Gm.prototype, { j: Gm });
  class Hm extends Ha {
    constructor(a) {
      super(6);
      this.cVa = u.I(a.attributes.get("Number"), 1) == 1;
    }
    he(a) {
      a = this.cVa == a.qb;
      return this.cb ? !a : a;
    }
  }
  Hm.g = "139";
  Hm.u = Ha;
  Object.assign(Hm.prototype, { j: Hm });
  class Im extends Ha {
    constructor(a) {
      super(1);
      a = a.attributes.get("Name");
      this.$W = a != null ? a : "";
    }
    he(a) {
      let b = !1;
      if (
        (a.Ke == 1 && this.$W == "StartStance") ||
        (a.Ke == 2 && this.$W == "Fight") ||
        (a.Ke == 3 && this.$W == "EndStance") ||
        (a.Ke == 7 && this.$W == "TryOn")
      )
        b = !0;
      return this.cb ? !b : b;
    }
  }
  Im.g = "13A";
  Im.u = Ha;
  Object.assign(Im.prototype, { j: Im });
  class Jm extends Ha {
    constructor(a) {
      super(12);
      var b = a.attributes.get("Name");
      b = b != null ? b : "";
      a = a.attributes.get("Type");
      a = a != null ? a : "";
      this.uc = b == "Victory" ? 1 : b == "Defeat" ? 2 : 0;
      this.AO = a == "Timeout" ? 1 : a == "Ringout" ? 2 : 0;
    }
    he(a) {
      let b = !1;
      !a.mh ||
        (this.uc != 0 && !this.zd(a.zd)) ||
        (this.AO != 0 && !this.G_a(a.Oq)) ||
        (b = !0);
      return this.cb ? !b : b;
    }
    zd(a) {
      return a && this.uc == 1 ? !0 : a ? !1 : this.uc == 2;
    }
    G_a(a) {
      return (a == 3 && this.AO == 1) ||
        (a == 4 && this.AO == 1) ||
        (a == 2 && this.AO == 1)
        ? !0
        : a == 5
          ? this.AO == 1
          : !1;
    }
  }
  Jm.g = "13B";
  Jm.u = Ha;
  Object.assign(Jm.prototype, { j: Jm });
  class Km extends Ha {
    constructor(a) {
      super(18);
      a = a.attributes.get("Name");
      this.LVa = this.rfa(a != null ? a : "");
    }
    he(a) {
      a = a.wl == this.LVa;
      return this.cb ? !a : a;
    }
    rfa(a) {
      switch (a) {
        case "Fight":
          return 10;
        case "Profile":
          return 9;
        case "ShopArmor":
          return 1;
        case "ShopFree":
          return 7;
        case "ShopHelm":
          return 3;
        case "ShopMagic":
          return 5;
        case "ShopMissile":
          return 4;
        case "ShopRaidItemPack":
          return 8;
        case "ShopRuby":
          return 6;
        case "ShopWeapon":
          return 2;
        default:
          return 0;
      }
    }
  }
  Km.g = "13C";
  Km.u = Ha;
  Object.assign(Km.prototype, { j: Km });
  class Lm extends Ha {
    constructor(a) {
      super(5);
      var b = a.attributes.get("Type");
      this.uc = b != null ? b : "";
      b = a.attributes.get("SubType");
      this.mua = b != null ? b : "";
      a = a.attributes.get("Name");
      this.Ba = a != null ? a : "";
    }
    he(a) {
      if (a.oE) {
        let d = 0;
        for (a = a.items; d < a.length; ) {
          var b = a[d];
          ++d;
          var c = void 0;
          c = this.uc;
          c == null || c == "" || this.uc == b.type
            ? ((c = this.mua), (c = c == null || c == "" || this.mua == b.Yb))
            : (c = !1);
          c
            ? ((c = this.Ba), (b = c == null || c == "" || this.Ba == b.name))
            : (b = !1);
          if (b) return !this.cb;
        }
      }
      return this.cb;
    }
  }
  Lm.g = "13D";
  Lm.u = Ha;
  Object.assign(Lm.prototype, { j: Lm });
  class Xl {
    static create(a) {
      switch (ta.yD(a.name)) {
        case 1:
          a = new Im(a);
          break;
        case 2:
          a = new um(a);
          break;
        case 3:
          a = new mg(a);
          break;
        case 4:
          a = new zm(a);
          break;
        case 5:
          a = new Lm(a);
          break;
        case 6:
          a = new Hm(a);
          break;
        case 7:
          a = new vm(a);
          break;
        case 8:
          let b = m.l();
          Xl.S3(b, a);
          a = new Am(a, b);
          break;
        case 9:
          a = new xm(a);
          break;
        case 10:
          a = new mg(a);
          break;
        case 11:
          a = new Gm(a);
          break;
        case 12:
          a = new Jm(a);
          break;
        case 13:
          a = new ym(a);
          break;
        case 14:
          a = new sm(a);
          break;
        case 15:
          a = new Fm(a);
          break;
        case 16:
          a = new qm(a);
          break;
        case 17:
          a = new Em(a);
          break;
        case 18:
          a = new Km(a);
          break;
        case 19:
          a = new Dm(a);
          break;
        case 20:
          a = new Bm(a);
          break;
        case 21:
          a = new tm(a);
          break;
        case 22:
          a = new pm(a);
          break;
        case 23:
          a = new rm(a);
          break;
        case 24:
          a = new wm(a);
          break;
        case 25:
          a = new Cm(a);
          break;
        default:
          throw 30;
      }
      return a;
    }
    static S3(a, b) {
      a.length = 0;
      b = b.children;
      let c = 0;
      for (; c < b.length; ) {
        let d = b[c++],
          e = Xl.create(d);
        e != null && (e.parse(d), a.push(e));
      }
    }
  }
  Xl.g = "13E";
  class Ae {
    constructor() {
      this.Jda = new ng();
      this.cf = new ng();
      this.Pd = new ng();
      this.Pb = new ng();
      this.e4 = new ng();
      this.twa = this.el = this.bmb = 0;
      this.Iza = m.l();
      this.i4a = m.l();
      this.b4 = m.l();
      this.bja = m.l();
      this.OL = this.IA = this.qz = null;
      this.mh = this.zd = !1;
      this.gea = this.pw = 0;
      this.jm =
        this.qb =
        this.xcb =
        this.oE =
        this.Zga =
        this.PEa =
        this.QEa =
          !1;
      this.Oq =
        this.Zl =
        this.dI =
        this.sign =
        this.Xla =
        this.Yla =
        this.awb =
        this.MDa =
        this.NDa =
        this.Ke =
          0;
      this.Wo = this.rJa = this.QIa = this.sza = this.X_a = this.VZ = null;
      this.wl = 0;
      this.fK = null;
      this.Z3 = new Map();
      this.H_ = m.l();
      this.vZ = m.l();
      this.P3 = m.l();
      this.G_ = m.l();
      this.cI = m.l();
      this.CK = m.l();
      this.xr = this.keys = this.items = this.xb = this.Z3a = this.$ib = null;
    }
    reset() {
      X.clear(this.Z3);
      this.e4.clear();
      this.Pb.clear();
      this.Pd.clear();
      this.cf.clear();
    }
  }
  Ae.g = "13F";
  Object.assign(Ae.prototype, { j: Ae });
  class ng {
    constructor() {
      this.Qg = null;
      this.Eu = new H(0, 0, 0, 1);
      this.Du = new H(0, 0, 0, 1);
    }
    clear() {
      this.Qg = null;
    }
  }
  ng.g = "140";
  Object.assign(ng.prototype, { j: ng });
