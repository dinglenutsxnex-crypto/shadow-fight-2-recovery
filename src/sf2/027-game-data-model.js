// 027-game-data-model.js
// Domain: tree-Kd  |  25 class(es)  |  tree root(s): Kd, xt, yt, el, Xg, kl, Uc, Bt, ll, ml, Ki, Ht, Ft, gg, Et, ah, Dt, vt, zt, Zg
// Edit here. Run `npm run build` to reassemble the full bundle.
  class Kd {
    constructor() {
      this.vn = this.NF = !1;
      this.hL = 0;
    }
    parse(a) {
      this.vn = u.ka(a.attributes.get("Drop"));
      this.NF = u.ka(a.attributes.get("ShowReward"));
    }
  }
  Kd.g = "67";
  Object.assign(Kd.prototype, { j: Kd });
  class xt {
    constructor(a) {
      this.f8 = m.l();
      debugger;
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        let c = new yt(a[b++]);
        this.f8.push(c);
      }
    }
    K0() {
      debugger;
      var a = 0;
      let b = m.l();
      b.push(0);
      for (var c = 0, d = this.f8; c < d.length; )
        ((a += d[c++].weight), b.push(a));
      c = 0;
      a = Da.rg.jT(0, a);
      d = b.length - 1;
      let e = 0;
      for (; e < d; ) {
        let f = e++;
        if (b[f] <= a && b[f + 1] >= a) {
          c = f;
          break;
        }
      }
      return this.f8[c].apb;
    }
  }
  xt.g = "68";
  Object.assign(xt.prototype, { j: xt });
  class yt {
    constructor(a) {
      debugger;
      this.weight = u.H(a.attributes.get("Weight"), 1);
      let b = a.name;
      this.apb =
        b == "Item"
          ? Yg.$_(a)
          : b == "Money"
            ? new Ei(a)
            : b == "Currency"
              ? new Fi(a)
              : b == "Resistance"
                ? new Gi(a)
                : b == "Lottery"
                  ? new Hi().set(a, 0, 0)
                  : null;
    }
  }
  yt.g = "69";
  Object.assign(yt.prototype, { j: yt });
  class Fi extends Kd {
    constructor(a) {
      super();
      this.parse(a);
      this.hL = 3;
      let b = a.attributes.get("Name");
      this.name = b != null ? b : "";
      this.Pqa = Xa(a.attributes.get("ExpectedValue"));
      this.NB = u.H(a.attributes.get("ExpectedValue"));
      this.qqa = u.H(a.attributes.get("DeviationCoefficient"));
      this.dN = u.H(a.attributes.get("DecayCoefficient"));
      this.Eaa = u.H(a.attributes.get("ValueMultiplier"));
    }
    IAa() {
      debugger;
      this.fxa();
      var a = Math.floor(this.NB);
      var b = Math.floor(this.NB * this.qqa + 0.5);
      if (!(this.dN <= 0)) {
        let e = Math.min(b, a);
        let f = 0;
        if (this.dN >= 1) {
          var c = a - e / 2;
          var d = a + 1 + b / 2;
        } else
          ((f = Math.pow(this.dN, -1 / Math.max(b, 1))),
            (c =
              a -
              (1 - Math.pow(f, -e) * (e * Math.log(f) + 1)) /
                Math.pow(Math.log(f), 2)),
            (d =
              a +
              1 +
              (1 - Math.pow(f, -b) * (e * Math.log(f) + 1)) /
                Math.pow(Math.log(f), 2)));
        c = (this.NB - c) / (d - this.NB);
        d = Da.rg.jT(0, 1);
        Da.rg.jT(0, 1) <= 1 / (1 + c)
          ? this.dN >= 1
            ? (a -= Math.floor(d * e + 0.5))
            : ((b = -Math.log(1 - d * (1 - Math.pow(f, -e))) / Math.log(f)),
              (a -=
                b - Math.floor(b) <
                -Math.log((2 * Math.log(f) - f + 1) / (f * Math.log(f))) /
                  Math.log(f)
                  ? Math.floor(b)
                  : Math.floor(b) + 1))
          : this.dN >= 1
            ? (a = a + 1 + Math.floor(d * b + 0.5))
            : ((b = -Math.log(1 - d * (1 - Math.pow(f, -b))) / Math.log(f)),
              (a =
                a +
                1 +
                (b - Math.floor(b) <
                -Math.log((2 * Math.log(f) - f + 1) / (f * Math.log(f))) /
                  Math.log(f)
                  ? Math.floor(b)
                  : Math.floor(b) + 1)));
      }
      return a | 0;
    }
    U7a() {
      this.fxa();
      let a = Math.floor(this.NB - Math.floor(this.NB * this.qqa + 0.5));
      return a >= 0 ? a : 0;
    }
    fxa() {
      this.Pqa && ((this.NB = this.Eaa * v.zya.CQ(this.name)), (this.Pqa = !1));
    }
  }
  Fi.g = "6A";
  Fi.u = Kd;
  Object.assign(Fi.prototype, { j: Fi });
  class Yg extends Kd {
    constructor() {
      super();
      this.name = null;
      this.ona = 0;
      this.pJa = m.l();
      this.OFa = null;
    }
    xBa() {
      return Kg(
        Qa.ph(this.OFa, w(this, this.Ye), w(this, this.Ze)).Wb().result,
      );
    }
    Ze() {}
    Ye(a) {
      let b = a.data;
      b.method == "Player" && this.via(b, a.Fb);
    }
    via(a, b) {
      a.Sd == "Level" && (b.result = K.T(p.o.bb()));
    }
    static $_(a) {
      let b = new Yg();
      b.parse(a);
      b.hL = 1;
      var c = a.attributes.get("Name");
      b.name = c != null ? c : "";
      c = a.attributes.get("Level");
      b.OFa = c != null ? c : "";
      b.ona = u.I(a.attributes.get("UpgradeNumber"));
      a = a.A("Enchantments");
      if (a != null)
        for (a = a.children, c = 0; c < a.length; ) {
          let d = xe.Qd(a[c++]);
          b.pJa.push(d);
        }
      return b;
    }
  }
  Yg.g = "6B";
  Yg.u = Kd;
  Object.assign(Yg.prototype, { j: Yg });
  class Ii extends el {
    constructor(a, b, c, d, e) {
      e == null && (e = 65535);
      d == null && (d = -32768);
      super();
      this.lH = d;
      this.jH = e;
      fg.Qd(a, b, c);
      b = a.attributes.get("Image");
      this.image = b != null ? b : "";
      b = a.attributes.get("CancellingItem");
      this.nI = b != null ? b : "";
      a.attributes.get("ViewType");
      a.A("Money") == null && a.A("Currency");
    }
  }
  Ii.g = "6C";
  Ii.u = el;
  Object.assign(Ii.prototype, { j: Ii });
  class Hi extends Kd {
    constructor() {
      super();
      this.type = 1;
      this.tx = m.l();
    }
    set(a, b, c) {
      debugger;
      this.hL = 5;
      var d = a.attributes.get("Type");
      d = d != null ? d : null;
      this.type = 2;
      d == "Bronze" ? (this.type = 0) : d == "Silver" && (this.type = 1);
      this.tx = m.l();
      a = a.children;
      for (d = 0; d < a.length; ) {
        let e = a[d++];
        if (e.name == "Slot") this.tx.push(new Ii(e, b, c));
        else if (e.name == "Level") {
          let f = e.children,
            g = 0;
          for (; g < f.length; ) {
            let h = f[g++],
              k = $f(e, -2147483648, 2147483647);
            this.tx.push(new Ii(h, b, c, k.first, k.second));
          }
        }
      }
      return this;
    }
  }
  Hi.g = "6D";
  Hi.u = Kd;
  Object.assign(Hi.prototype, { j: Hi });
  class Ei extends Kd {
    constructor(a) {
      super();
      this.parse(a);
      this.hL = 2;
      this.Iua = Xa(a.attributes.get("Value"));
      this.Mb = u.I(a.attributes.get("Value"));
      this.Eaa = u.H(a.attributes.get("ValueMultiplier"));
    }
    T5a() {
      this.S_a();
      return (this.Mb = this.fpb(this.Mb));
    }
    S_a() {
      this.Iua &&
        ((this.Mb = Math.round(this.Eaa * v.OGa.CQ(p.o.bb()))),
        (this.Iua = !1));
    }
    fpb(a) {
      a == 0 && (a = 1);
      var b = Math.log10(a) + 1;
      if (b == 1) return a;
      let c = 1;
      b > 2 && ((c = Math.trunc(Math.pow(10, b - 2))), (a = Math.trunc(a / c)));
      b = a % 5;
      b != 0 && (a = b > 2.5 ? a + 5 - b : a - b);
      return a * c;
    }
  }
  Ei.g = "6E";
  Ei.u = Kd;
  Object.assign(Ei.prototype, { j: Ei });
  class Xg {
    constructor() {
      this.U1 = !1;
      this.Zj = null;
      this.yZ = m.l();
      this.Dr = m.l();
      this.Qk = m.l();
      this.Y2 = m.l();
      this.items = m.l();
      this.qh = -1;
      this.number = this.Ob = this.Xo = this.exp = 0;
    }
    parse(a, b, c) {
      c == null && (c = 0);
      b == null && (b = 0);
      this.number = u.I(a.attributes.get("Number"));
      this.Ob = Math.trunc(xb(a.attributes.get("Money")) * Math.pow(10, b));
      this.Xo = xb(a.attributes.get("Bonus"));
      this.exp = xb(a.attributes.get("Exp"));
      this.qh = u.H(a.attributes.get("PrizeBase"), -1);
      this.qh != -1 && (this.qh *= Math.pow(10, c));
      for (var d = 0, e = a.kp("Money"); d < e.length; ) {
        var f = e[d++];
        debugger;
        f = new Ei(f);
        this.Y2.push(f);
      }
      d = 0;
      for (e = a.kp("Currency"); d < e.length; ) {
        f = e[d++];
        debugger;
        f = new Fi(f);
        this.Qk.push(f);
      }
      d = 0;
      for (e = a.kp("Resistance"); d < e.length; ) {
        f = e[d++];
        debugger;
        f = new Gi(f);
        this.Dr.push(f);
      }
      d = 0;
      for (e = a.kp("Lottery"); d < e.length; ) {
        f = e[d++];
        debugger;
        f = new Hi().set(f, b, c);
        this.Zj == null ? (this.Zj = f) : m.addRange(this.Zj.tx, f.tx);
      }
      b = 0;
      for (c = a.kp("Item"); b < c.length; )
        ((d = Yg.$_(c[b++])), this.items.push(d));
      b = 0;
      for (a = a.kp("Choice"); b < a.length; ) {
        c = a[b++];
        debugger;
        c = new xt(c);
        this.yZ.push(c);
      }
    }
    sba(a) {
      this.Xo += a.Xo;
      this.Ob += a.Ob;
      this.exp += a.exp;
      this.qh < 0 ? (this.qh = a.qh) : a.qh > 0 && (this.qh += a.qh);
      m.addRange(this.items, a.items);
      m.addRange(this.Y2, a.Y2);
      m.addRange(this.Qk, a.Qk);
      m.addRange(this.Dr, a.Dr);
      m.addRange(this.yZ, a.yZ);
      this.Zj != null ? m.addRange(this.Zj.tx, a.Zj.tx) : (this.Zj = a.Zj);
    }
  }
  Xg.g = "6F";
  Object.assign(Xg.prototype, { j: Xg });
  class Gi extends Kd {
    constructor(a) {
      super();
      this.parse(a);
      this.hL = 4;
      let b = a.attributes.get("Name");
      this.name = b != null ? b : "";
      this.value = u.I(a.attributes.get("Value"));
    }
  }
  Gi.g = "70";
  Gi.u = Kd;
  Object.assign(Gi.prototype, { j: Gi });
  class kl {
    constructor() {
      this.sH = m.l();
    }
    save(a) {
      let b = p.o;
      b != null && b.save(a);
    }
    ikb(a) {
      this.sH.length = 0;
      a.A("InProgress");
      a = a.A("Completed");
      if (a != null) {
        let b = a.children,
          c = 0;
        for (; c < b.length; ) ((a = kl.clb(b[c++])), this.sH.push(a));
      }
    }
    KWa(a) {
      a = Ji.A1a(a);
      this.sH.push(a);
      this.save(!0);
    }
    aqb(a) {
      a.jF();
      if (this.sH.length > 0) {
        var b = a.A("Completed");
        a = b != null ? b : a.appendChild("Completed");
        a.jF();
        b = 0;
        let c = this.sH.length;
        for (; b < c; ) this.dlb(this.sH[b++], a);
      }
    }
    dlb(a, b) {
      b.appendChild("Payment").set("ProductId", a.kf);
    }
    static clb(a) {
      a = a.attributes.get("ProductId");
      return new Ji(a != null ? a : "");
    }
  }
  kl.g = "71";
  Object.assign(kl.prototype, { j: kl });
  class yf extends yi {
    constructor(a, b) {
      super(a);
      this.Ob = 0;
      this.tia = new V();
      this.jia = new V();
      this.tK = new V();
      this.uS = new V();
      this.iia = new V();
      this.qS = new V();
      this.xS = new V();
      this.pS = new V();
      this.xa = new Zg();
      this.Ai = new zt();
      this.Bi = new At();
      this.oF = new Bt();
      this.yc = m.l();
      this.qF = m.l();
      this.TN = m.l();
      this.aaa = new gd();
      this.Ol = m.l();
      this.Voa = m.l();
      m.l();
      this.qta = new gd();
      this.gd = this.qq = 0;
      this.o4 = -1;
      this.EN = !1;
      this.cH = null;
      var c = new ib();
      c.clear();
      this.Ds = c;
      this.WN = new Map();
      this.GG = new Map();
      this.upa = this.Nta = !1;
      this.cC = m.l();
      this.Pza = 0;
      this.qna = !1;
      c = a.attributes.get("ServerUserID");
      this.Lub(c != null ? c : "");
      this.Dtb(u.ka(a.attributes.get("AskedForDumps"), !1));
      this.Ca = b;
      this.Ca.eB = -1;
      this.Ca.T5 = -1;
      this.Xjb();
      u.I(a.attributes.get("IndexSlider"));
      b = a.attributes.get("CoinIcon");
      this.pf = b != null ? b : Z.Tna;
      this.pf = this.pf.replace(RegExp("^MiscSprites.", ""), "");
      this.Kr(xb(a.attributes.get("Money"), 0));
      this.xl(xb(a.attributes.get("Bonus"), 0), 0);
      this.bO = xb(a.attributes.get("PaidBonus"));
      this.kC = xb(a.attributes.get("PaidMoney"));
      this.qq = u.I(a.attributes.get("DenominationDigits"));
      this.Pya();
      this.DL(u.I(a.attributes.get("Level")));
      this.ws = u.I(a.attributes.get("Experience"));
      this.Br = v.oDa();
      this.dF = v.dF;
      this.ek = u.I(a.attributes.get("Power"));
      this.ek > this.Br && (this.ek = this.Br);
      this.cU(!1);
      this.fO = u.I(a.attributes.get("PowerSyncTime"));
      u.I(a.attributes.get("LastDailyTimeOffset"));
      u.I(a.attributes.get("LastEnergyTimeOffset"));
      b = a.attributes.get("FightIDS");
      this.xrb(b != null ? b : "");
      b = a.attributes.get("MapFocus");
      this.u5(b != null ? b : "");
      this.tC = u.ka(a.attributes.get("ShowUpgrades"), !1);
      a.attributes.get("AIvi");
      a.attributes.get("ShowForge");
      b = a.attributes.get("EclipseMode");
      this.$h = (b != null ? b : "Off") == "On";
      this.l$ = xb(a.attributes.get("PeriodicPlayTime"));
      this.QVa = u.I(a.attributes.get("StarterPackTimerEndTime"));
      b = a.attributes.get("CurrentZone");
      this.vo = b != null ? b : "";
      b = a.attributes.get("MapMaskColor");
      this.jVa = Oa.X4a(b != null ? b : "rgba(255,255,255,1)");
      this.Bi.parse(a);
      this.s2 = a.A("Items");
      this.xa.parse(this.s2, this.Ca.level);
      this.cU(this.xa.Rj("Unlimited_Energy") != null);
      this.qUa = a.A("Battles");
      b = this.qUa.children;
      for (c = 0; c < b.length; ) this.DWa(new ll(b[c++]));
      this.Lua = a.A("Fights");
      if (this.Lua != null)
        for (b = this.Lua.children, c = 0; c < b.length; )
          this.Aq(new ml(b[c++]));
      this.Lta = a.A("Shop");
      if (this.Lta != null)
        for (b = this.Lta.children, c = 0; c < b.length; ) {
          var d = b[c++].attributes.get("Name");
          this.Bq(d != null ? d : "");
        }
      this.fo = new Ct(this.Ca);
      this.fo.parse(a);
      this.wv = new Map();
      if (a.A("Quests") != null) {
        this.fta = a.A("Quests").A("Quests");
        if (this.fta != null)
          for (b = this.fta.children, c = 0; c < b.length; ) this.gJa(b[c++]);
        this.gta = a.A("Quests").A("Variables");
        if (this.gta != null)
          for (b = this.gta.children, c = 0; c < b.length; ) this.Skb(b[c++]);
      }
      this.Ai.parse(a);
      this.zsa = a.A("OpenTricks");
      if (this.zsa != null)
        for (b = this.zsa.children, c = 0; c < b.length; )
          ((d = b[c++].attributes.get("Name")),
            this.ava(d != null ? d : "", !1));
      this.z7 = a.A("ActiveLotteries");
      this.z7 == null && (this.z7 = a.appendChild("ActiveLotteries"));
      this.$jb();
      b = a.A("Timers");
      this.ZVa = b != null ? b : a.appendChild("Timers");
      this.Bl = new Dt(this.ZVa);
      this.bkb();
      Vb.F().parse(a, this.Bl);
      this.vG = a.A("Currencies");
      this.vG == null && (this.vG = a.appendChild("Currencies"));
      this.Tia(this.vG);
      this.mX = a.A("Payments");
      this.mX == null && (this.mX = a.appendChild("Payments"));
      yf.$ia.ikb(this.mX);
      this.Yoa = a.A("Advertising");
      this.Yoa == null && (this.Yoa = a.appendChild("Advertising"));
      this.Tw = new Et(ky(a, "Resistances"), w(this, this.save));
      this.XN = a.A("Offers");
      this.XN == null && (this.XN = a.appendChild("Offers"));
      this.geb();
    }
    Kr(a, b) {
      b == null && (b = !1);
      let c = Math.trunc(Math.pow(10, this.qq));
      c <= 0 && (c = 1);
      if (this.Ob != a) {
        var d = this.Ob;
        this.Ob = a;
        b && this.XMa(this.kC + (a - d));
        this.mL("Money", this.Ob * c);
        this.tia.$();
      }
    }
    $ua(a, b) {
      b == null && (b = !1);
      a = this.Ob + a;
      a < 0 && (a = 0);
      this.Kr(a, b);
    }
    xl(a, b, c) {
      c == null && (c = !1);
      if (this.gd != a) {
        var d = this.gd;
        this.gd = a;
        this.mL("Bonus", this.gd);
        var e = Math.trunc(Math.abs(d - a));
        b != 0 &&
          (a > d
            ? c && this.WMa(this.bO + e)
            : a < d &&
              this.WMa(this.bO - Math.trunc(Math.max(0, e - (d - this.bO)))));
        this.jia.$();
      }
    }
    Qua(a, b, c) {
      c == null && (c = !1);
      a = this.gd + a;
      a < 0 && (a = 0);
      this.xl(a, b, c);
    }
    XMa(a) {
      let b = Math.trunc(Math.pow(10, this.qq));
      b <= 0 && (b = 1);
      this.kC = a;
      this.mL("PaidMoney", a * b);
    }
    WMa(a) {
      this.bO = a;
      this.mL("PaidBonus", a);
    }
    f$a() {
      debugger;
      return this.zD(Z.a7);
    }
    $tb(a) {
      debugger;
      this.Tka(Z.a7, a);
    }
    g$a() {
      debugger;
      return this.zD(Z.b7);
    }
    aub(a) {
      debugger;
      this.Tka(Z.b7, a);
    }
    h$a() {
      debugger;
      return this.zD(Z.c7);
    }
    bub(a) {
      debugger;
      this.Tka(Z.c7, a);
    }
    eub() {
      this.tF("IndexSlider", 0);
    }
    Rz() {
      if (this.Ca != null) {
        let a = this.Ca.level - 1;
        if (a < this.cC.length) return this.cC[a];
      }
      return 2147483647;
    }
    cMa(a) {
      if (this.Ca == null) return !1;
      let b = !1;
      var c = this.Rz();
      a = this.ws = a;
      if (c <= a) {
        b = !0;
        let d = this.Ca.level;
        for (; c <= a; )
          ((a -= c),
            ++d,
            (this.Ca.level = d),
            (c = this.Rz()),
            a > v.Mha && (a = v.Mha));
        d > this.cC.length && ((d = this.cC.length), (a = this.Rz()), (b = !1));
        this.ws = a;
        this.Ca.level = d;
        this.tF("Level", this.Ca.level);
      }
      this.Ca.level == this.cC.length &&
        this.Ca.level > 1 &&
        (this.ws = a = this.cC[this.Ca.level - 2]);
      b &&
        (this.xa.Au(),
        this.xa.nzb(this.bb()),
        (c = Ma.get()),
        c != null && c.Wma(),
        p.F().uzb(this.bb()),
        this.uS.$());
      this.tF("Experience", this.ws);
      this.iia.$();
      return b;
    }
    ebb(a) {
      return this.cMa(this.ws + a);
    }
    N5(a) {
      this.fO = a;
      this.mL("PowerSyncTime", a);
    }
    cU(a) {
      this.EN = a;
    }
    YMa(a) {
      this.l$ = a;
      this.mL("PeriodicPlayTime", this.l$);
    }
    Oub() {
      this.tC = !0;
      this.rka("ShowUpgrades", this.tC);
    }
    Utb(a) {
      this.qq = a;
      this.tF("DenominationDigits", this.qq);
    }
    mub(a) {
      this.cH = a;
      this.Hr("FightIDS", this.cH.toString());
    }
    xrb(a) {
      if (this.cH != null) this.cH.mj(a);
      else {
        let b = new ib();
        b.mj(a);
        this.cH = b;
      }
    }
    Jtb(a) {
      this.pf = a.replace(RegExp("^MiscSprites.", ""), "");
      this.Hr("CoinIcon", this.pf);
    }
    pub(a) {
      this.Ds != a && this.u5(a.toString());
    }
    u5(a) {
      this.Ds.uza(a) || (this.Ds.mj(a), this.Hr("MapFocus", this.Ds.yCa()));
    }
    bb() {
      return this.qna ? this.Pza : this.Ca != null ? this.Ca.level : 0;
    }
    DL(a) {
      this.Ca != null && ((this.Ca.level = a), this.tF("Level", this.Ca.level));
    }
    HCa() {
      let a = 0,
        b = 0,
        c = v.AQ();
      for (; b < c.length; ) c[b++].hE && ++a;
      return a;
    }
    KCa() {
      let a = 0;
      var b = p.o;
      if (b == null) return 0;
      let c = 0;
      for (b = b.xa.mJ(I.$r); c < b.length; ) {
        let d = b[c];
        ++c;
        d.qd() > 0 && d.ib.zj && ++a;
      }
      return a;
    }
    MJ(a) {
      return a != null && a != "" ? this.eha(a) : !0;
    }
    dha(a) {
      return a != null && a != "" ? !this.eha(a) : !1;
    }
    jEa(a) {
      return this.oF.get(a) != null;
    }
    tfa(a) {
      a = this.ga.A("SessionSettings").A(a).attributes.get("Value");
      return a != null ? a : "";
    }
    VBa(a) {
      return m.find(this.qF, function (b) {
        return b.name == a;
      });
    }
    cha(a) {
      let b = this.ga.A("SessionSettings");
      return b == null || b.A(a) == null ? !1 : !0;
    }
    i8a(a) {
      let b = new Ia();
      X.wh(this.WN, a, b) ||
        ((b.G = new nl()), (b.G.name = a), this.WN.set(b.G.name, b.G));
      return b.G;
    }
    geb() {
      let a = this.XN.children,
        b = 0;
      for (; b < a.length; ) {
        let c = a[b++],
          d = new nl(),
          e = c.attributes.get("Name");
        d.name = e != null ? e : null;
        d.state = c.attributes.get("State");
        d.x4 = xb(c.attributes.get("PurchaseTime"));
        d.$H = u.ka(c.attributes.get("AllItemsRecieved"));
        d.vx = u.I(c.attributes.get("StartCount"));
        d.vx == 0 &&
          d.state != "NotStarted" &&
          d.state != "Unknown" &&
          (d.vx = 1);
        X.Xa(this.WN, d.name) || this.WN.set(d.name, d);
      }
    }
    szb() {
      this.XN.jF();
      let a = X.values(this.WN);
      a.sort(function (c, d) {
        return sy.Lxa(c.name, d.name);
      });
      let b = 0;
      for (; b < a.length; ) {
        let c = a[b];
        ++b;
        if (c.state == "NotStarted") continue;
        let d = this.XN.appendChild("Offer");
        d.set("Name", c.name);
        d.set("State", K.T(c.state));
        c.x4 > 0 && d.set("PurchaseTime", K.T(c.x4));
        c.$H && d.set("AllItemsRecieved", "1");
        c.vx > 0 && d.set("StartCount", c.vx == null ? "null" : "" + c.vx);
      }
    }
    hfa(a) {
      let b = this.Xq(a);
      return b != null ? b : this.sya(a);
    }
    Xq(a) {
      return m.find(this.yc, function (b) {
        return a.WI(b.EG);
      });
    }
    U0a(a) {
      a = this.Xq(a);
      a.abb();
      this.$h && a.bbb();
      return a;
    }
    Aeb(a) {
      a = this.Xq(a);
      return a != null ? (a.gbb(), this.$h && a.cbb(), a) : null;
    }
    sya(a) {
      let b = new ml(
        (this.ga.A("Fights") != null
          ? this.ga.A("Fights")
          : this.ga.appendChild("Fights")
        ).appendChild("Fight"),
      );
      b.Xtb(a.toString());
      this.yc.push(b);
      return b;
    }
    c2a(a) {
      var b =
        this.ga.A("Battles").children.length > 0
          ? this.ga.A("Battles")
          : this.ga.appendChild("Battles");
      let c = ag(b, "Battle", "Name", a.Ne + "|" + a.Se + "|");
      c == null && (c = b.appendChild("Battle"));
      b = new ll(c);
      b.JMa(a);
      this.oF.add(b);
      return b;
    }
    O4a(a) {
      var b =
        this.ga.A("Battles").children.length > 0
          ? this.ga.A("Battles")
          : this.ga.appendChild("Battles");
      a = a.Ne + "|" + a.Se + "|";
      ag(b, "Battle", "Name", a) == null &&
        ((b = b.appendChild("Battle")), b.set("Name", a));
    }
    Aq(a, b) {
      b == null && (b = !1);
      if (b) {
        debugger;
        b = !1;
        let c = 0,
          d = this.yc;
        for (; c < d.length; )
          if (d[c++].EG == a.EG) {
            b = !0;
            break;
          }
        b || this.yc.push(a);
      } else this.yc.push(a);
    }
    Saa(a, b, c, d, e, f) {
      f == null && (f = 0);
      e == null && (e = !1);
      d == null && (d = !1);
      c == null && (c = !0);
      b == null && (b = !1);
      if (a != null)
        if (c) {
          this.O4a(a);
          this.save();
          if (b && ((b = this.oF.get(a)), b != null)) {
            b.JMa(a);
            b.RMa(d);
            b.kx(e);
            b.Jla(f);
            return;
          }
          b = this.c2a(a);
          b.RMa(d);
          b.kx(e);
          b.Jla(f);
          a = p.Wk(a);
          a != null && ((b.Aba = a), (a.ob = b), a.ola());
        } else this.Pja(a);
    }
    DWa(a) {
      this.oF.add(a);
    }
    mnb(a) {
      let b = a.Ck.toString(),
        c = this.ga.A("Battles"),
        d = c.children,
        e = 0;
      for (; e < d.length; ) {
        let f = d[e++],
          g = f.attributes.get("Name");
        if ((g != null ? g : "") == b) {
          c.Af(f);
          break;
        }
      }
      this.save();
      this.oF.Pja(a);
      a = a.Aba;
      a != null && a.Nnb();
    }
    Pja(a) {
      let b = 0,
        c = this.oF.values();
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.Ck.vza(a)) {
          this.mnb(d);
          break;
        }
      }
    }
    bP(a, b) {
      var c =
        this.ga.A("Quests") != null
          ? this.ga.A("Quests")
          : this.ga.appendChild("Quests");
      c = (
        c.A("Quests") != null ? c.A("Quests") : c.appendChild("Quests")
      ).appendChild("Quest");
      c.set("Name", a);
      c.set("FileName", b);
      return this.gJa(c);
    }
    gJa(a) {
      a = new Ft(a);
      this.qF.push(a);
      return a;
    }
    Skb(a) {
      var b = a.attributes.get("Name");
      let c = "_" + (b != null ? b : "");
      b = this.wt(c, 0);
      b != null
        ? ((a = a.attributes.get("Value")), b.fc(a != null ? a : ""))
        : ((b = gg.Qd(a)), this.wv.set(c, b));
    }
    z5a(a) {
      let b = ha.F().x0(a);
      return b != null
        ? b
        : X.Xa(this.GG, a)
          ? this.GG.get(a)
          : X.Xa(this.wv, a)
            ? this.wv.get(a)
            : null;
    }
    wt(a, b) {
      if (b == 2) return ha.F().x0(a);
      if (b == 1)
        return X.Xa(this.GG, a)
          ? this.GG.get(a)
          : X.Xa(this.wv, a)
            ? (this.qta.contains(a) || this.qta.add(a), this.wv.get(a))
            : null;
      if (b == 0) {
        if (X.Xa(this.wv, a)) return this.wv.get(a);
        if (X.Xa(this.GG, a)) debugger;
      }
      return null;
    }
    otb(a, b) {
      this.$A(a, b == null ? "null" : "" + b, 0);
    }
    ptb(a, b) {
      this.$A(a, b ? "1" : "0", 1);
    }
    $A(a, b, c) {
      qd(a, "_");
      var d = this.wt("_" + a, c);
      if ((b != null && b != "") || c != 0)
        if (d != null) d.fc(b);
        else if (c == 0)
          ((c = this.ga.A("Quests")),
            (c = c != null ? c : this.ga.appendChild("Quests")),
            (d = c.A("Variables")),
            (c = (d != null ? d : c.appendChild("Variables")).appendChild(
              "Variable",
            )),
            c.set("Name", a),
            c.set("Value", b),
            (d = gg.Qd(c)),
            (a = "_" + d.name),
            this.wv.set(a, d));
        else
          switch (((d = gg.Ueb(a, b, c)), (a = "_" + d.name), c)) {
            case 1:
              this.GG.set(a, d);
              break;
            case 2:
              ha.F().Nja(d, a);
          }
      else if (d != null) {
        debugger;
        X.remove(this.wv, d.name);
      }
    }
    MLa(a, b) {
      let c = this.ga.A("SessionSettings");
      c == null && (c = this.ga.appendChild("SessionSettings"));
      let d = c.A(a);
      d == null && (d = c.appendChild(a));
      d.set("Value", b);
    }
    Lka(a, b) {
      this.MLa(a, b == null ? "null" : "" + b);
    }
    Pcb(a) {
      a = this.xa.te(a);
      return a != null ? a.Wu : !1;
    }
    g7a() {
      return this.gd - this.bO;
    }
    NZa(a) {
      if (a == 0) return !0;
      a = this.ek + a;
      let b = this.Br;
      a = a > b ? b : a;
      if (a < 0) return !1;
      this.y5(a);
      return !0;
    }
    y5(a) {
      var b = this.Br;
      a = a > b ? b : a;
      b = this.ek;
      a != b &&
        ((b = this.ek = a),
        this.tF("Power", b),
        b == this.Br && this.Br != 0 && (this.N5(-1), this.rPa(-1)));
    }
    jna(a) {
      let b = this.ek;
      if (b < this.Br) {
        if (this.fO == -1) this.N5(a);
        else {
          let c = a - this.fO,
            d = (c / this.dF) | 0;
          this.fO > a && this.N5(a);
          d > 0 && (this.N5(a - (c % this.dF)), this.y5(b + d));
        }
        this.rPa(a);
      }
    }
    setItem(a, b) {
      b == null && (b = !0);
      if (!b) return (this.save(), !0);
      if (this.Ca != null) {
        let c = a.ib;
        c.OQ(a.Ce) != null && (c = c.OQ(a.Ce));
        this.Ca.ik(c.type, c);
        this.Hr(c.type, b ? c.name : "");
        this.Ca.iM();
        return !0;
      }
      return !1;
    }
    L5a() {
      debugger;
      return this.Ca != null ? this.Ca.Kf : "";
    }
    Ssb(a) {
      debugger;
      this.Nta = a;
      this.rka("ShowBuyConsumablesConfirmation", this.Nta);
    }
    Omb() {
      this.y5(this.Br);
    }
    Hpb() {
      var a = null,
        b = 0;
      let c = m.l(),
        d = 0,
        e = this.qF;
      for (; d < e.length; ) {
        var f = e[d];
        ++d;
        if (f.parameters != null) {
          p.F().U3(f.fileName);
          let g = ha.F().FD(f.name);
          if (g != null) {
            if (g.eFa()) {
              g.Jxa();
              continue;
            }
            b == 0 && (a = f);
            f = 0;
            let h = c;
            for (; f < h.length; ) f++;
            c.push(g);
            ++b;
          } else (f.clearParameters(), (f.ww = !0));
        }
      }
      c.length > 0 &&
        (ha.F().uWa(c),
        a != null &&
          ((a = a.i9a()),
          (b = xa.F().Td.Wf),
          a == 6 && a != b
            ? xa.F().rp(3)
            : a != -1 && a != b && xa.F().rp(a, 0, null)));
    }
    Dtb(a) {
      this.upa = a;
      this.rka("AskedForDumps", this.upa);
    }
    Bq(a, b) {
      b == null && (b = !1);
      return this.MJ(a)
        ? !1
        : (b &&
            ((b = this.ga.A("Shop")),
            b == null && (b = this.ga.appendChild("Shop")),
            b.appendChild("Lock").set("Name", a)),
          this.aaa.add(a),
          !0);
    }
    Pnb(a) {
      if (this.eha(a)) {
        let b = this.ga.A("Shop"),
          c = ag(b, "Lock", "Name", a);
        c != null && b.Af(c);
        this.aaa.remove(a);
        return !0;
      }
      return !1;
    }
    eha(a) {
      return a == null || a == "" ? !1 : this.aaa.contains(a);
    }
    ava(a, b) {
      b == null && (b = !0);
      if (!this.TN.includes(a)) {
        this.TN.push(a);
        for (var c = 0, d = sa.Jfa(); c < d.length; ) {
          let e = d[c];
          ++c;
          if (e.name == a) {
            e.hE = !0;
            break;
          }
        }
        b &&
          ((b = this.ga.A("OpenTricks")),
          (b != null ? b : this.ga.appendChild("OpenTricks"))
            .appendChild("Trick")
            .set("Name", a),
          this.save());
      }
    }
    Enb(a) {
      var b;
      b == null && (b = !0);
      if (this.ga.A("OpenTricks") != null) {
        for (
          var c = this.ga.A("OpenTricks"), d = c.children, e = 0;
          e < d.length;

        ) {
          let f = d[e++],
            g = f.attributes.get("Name");
          if ((g != null ? g : "") == a) {
            c.Af(f);
            break;
          }
        }
        this.TN.includes(a) && J.remove(this.TN, a);
        b && this.save();
      }
    }
    bkb() {
      var a = this.ga.A("CounterItems");
      if (a != null && ((a = a.A("Items")), a != null)) {
        a = a.children;
        let c = 0;
        for (; c < a.length; ) {
          var b = a[c++].attributes.get("Name");
          b = p.items.$b(b != null ? b : null);
          b != null && b.mU == 0 && b.Nr(!0);
        }
      }
    }
    hM() {
      let a = m.l();
      m.forEach(p.items.Zm, function (c) {
        c.zj && a.push(c.name);
      });
      var b = this.ga.A("CounterItems");
      b != null && (this.ga.Af(b), (b = null));
      if (a.length > 0) {
        b = this.ga.appendChild("CounterItems");
        b = b.appendChild("Items");
        let c = 0;
        for (; c < a.length; ) {
          let d = a[c++];
          b.appendChild("Item").set("Name", d);
        }
      }
    }
    Tnb() {
      let a = this.qF.length - 1;
      for (; a >= 0; ) {
        let b = this.qF[a];
        if (b.parameters != null) {
          --a;
          continue;
        }
        let c = b.node;
        c.parent.Af(c);
        J.remove(this.qF, b);
        this.ga.attributes.get("LastConfigUrl") != null &&
          this.ga.removeAttribute("LastConfigUrl");
        this.ga.attributes.get("GamedataPackVersionOverride") != null &&
          this.ga.removeAttribute("GamedataPackVersionOverride");
        this.ga.attributes.get("FacebookLiked") != null &&
          this.ga.removeAttribute("FacebookLiked");
        this.ga.attributes.get("LastDumpTime") != null &&
          this.ga.removeAttribute("LastDumpTime");
        --a;
      }
    }
    f1() {
      this.cha("Disciple") || this.Lka("Disciple", 0);
      return Uy(this.tfa("Disciple"), 0) > 0;
    }
    Mub(a) {
      this.Lka("Disciple", a ? 1 : 0);
    }
    C$a() {
      this.cha("ShowDojoDisciple") || this.Lka("ShowDojoDisciple", 0);
      return Kg(this.tfa("ShowDojoDisciple"), 0) > 0;
    }
    Pya(a) {
      a == null && (a = 0);
      a = Math.pow(10, this.qq - a);
      let b;
      var c = this.Ob / a;
      a > 1 && ((b = Math.trunc(this.Ob % a)), 0 < b && ++c);
      this.Ob = Math.trunc(c);
      b = 0;
      c = this.kC / a;
      a > 1 && (b = Math.trunc(this.kC % a));
      0 < b && ++c;
      this.kC = Math.trunc(c);
      this.pS.$();
    }
    Tka(a, b) {
      debugger;
      let c = v.Tq.AD(a);
      c == null && ((c = hg.ji(a, a)), v.Tq.Xua(c));
      this.VLa(c, b);
    }
    VLa(a, b) {
      debugger;
      b < 0 && (b = 0);
      let c = this.UAa(a);
      c == null &&
        (this.Ol.push(new $g(a, b)), (c = this.Ol[this.Ol.length - 1]));
      c.count = b;
      a = c.currency.name;
      this.vG == null && (this.vG = this.ga.appendChild("Currencies"));
      this.vG.set(a, b == null ? "null" : "" + b);
      this.save();
      this.tK.$(c);
    }
    Bea(a) {
      return m.find(this.Ol, function (b) {
        return b.currency.name == a;
      });
    }
    UAa(a) {
      return m.find(this.Ol, function (b) {
        return b.currency == a;
      });
    }
    ZH(a, b) {
      debugger;
      let c = v.Tq.AD(a);
      c == null && ((c = hg.ji(a, a)), v.Tq.Xua(c));
      this.Vua(c, b);
    }
    Vua(a, b) {
      debugger;
      let c = this.UAa(a),
        d = 0;
      c != null && (d = c.count);
      this.VLa(a, d + b);
    }
    u1(a) {
      return this.zDa("Bonus", a);
    }
    ADa(a) {
      return this.zDa("Gold", a);
    }
    zDa(a, b) {
      return this.gga(a, a, b);
    }
    gga(a, b, c) {
      return this.scb(a, b) ? this.r6a(a, b) >= c : !1;
    }
    scb(a, b) {
      switch (a) {
        case "Bonus":
        case "Gold":
          return !0;
        case "Currency":
          return this.Bea(b) != null;
        default:
          return a != null && a != "" ? this.Bea(a) != null : !1;
      }
    }
    r6a(a, b) {
      switch (a) {
        case "Bonus":
          return this.gd;
        case "Currency":
          return this.zD(b);
        case "Gold":
          return this.Ob;
        default:
          return this.zD(a);
      }
    }
    zD(a) {
      a = this.Bea(a);
      return a != null ? a.count : 0;
    }
    Qka(a) {
      this.Ca != null && (this.Ca.Kf = a);
      this.Hr("Avatar", a);
    }
    rPa(a) {
      this.o4 = this.ek == this.Br ? -1 : this.dF - (a - this.fO);
    }
    Xjb() {
      let a = 0,
        b = v.KR.thresholds;
      for (; a < b.length; ) {
        let c;
        c = b[a++].second;
        this.cC.push(c);
      }
    }
    Ptb(a) {
      this.vo != a && ((this.vo = a), this.Hr("CurrentZone", this.vo));
    }
    $jb() {
      let a = this.z7.children,
        b = 0;
      for (; b < a.length; ) {
        let c = a[b++],
          d = c.attributes.get("Name"),
          e = c.attributes.get("TimerName");
        this.Voa.push(
          new Gt(
            d != null ? d : null,
            e != null ? e : "",
            u.ka(c.attributes.get("HideMainLottery"), !0),
          ),
        );
      }
    }
    t5a(a) {
      return m.find(this.Voa, function (b) {
        return b.name == a;
      });
    }
    Tia(a) {
      let b = 0,
        c = v.Tq.Ol;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        this.Ol.push(new $g(d, u.I(a.attributes.get(d.name))));
      }
    }
    uF() {
      super.uF();
      this.Dzb();
      la.save(this.ga.X$a());
    }
    Dzb() {
      this.hM();
      this.szb();
      this.Tnb();
      yf.$ia.aqb(this.mX);
    }
  }
  yf.g = "72";
  yf.u = yi;
  Object.assign(yf.prototype, { j: yf });
  class Bt {
    constructor() {
      this.Lm = new Map();
    }
    get(a) {
      let b = new Ia();
      X.wh(this.Lm, a.toString(), b);
      return b.G;
    }
    add(a) {
      this.get(a.Ck);
      this.Lm.set(a.Ck.toString(), a);
    }
    Pja(a) {
      X.remove(this.Lm, a.Ck.toString());
    }
    values() {
      let a = [],
        b = this.Lm.values(),
        c = b.next();
      for (; !c.done; ) {
        let d = c.value;
        c = b.next();
        a.push(d);
      }
      return a;
    }
  }
  Bt.g = "73";
  Object.assign(Bt.prototype, { j: Bt });
  class ll {
    constructor(a) {
      this.ga = a;
      this.Aba = null;
      this.Uzb = this.GPa = !1;
      this.lv = 0;
      this.N9 = -1;
      this.FH = this.Sm = 0;
      this.gra = this.bW = this.aW = !1;
      Xa(this.ga.attributes.get("Name")) && this.ga.set("Name", "");
      Xa(this.ga.attributes.get("Locked")) && this.ga.set("Locked", "0");
      this.Co = u.ka(this.ga.attributes.get("Locked"), !1);
      this.n9 = u.ka(this.ga.attributes.get("Hidden"), !1);
      var b = new ib();
      b.clear();
      this.Ck = b;
      b = this.ga.attributes.get("Name");
      this.Ck.mj(b != null ? b : "");
      this.aW = !Xa(a.attributes.get("RandomGroupSeed"));
      this.bW = !Xa(a.attributes.get("RandomRuleSeed"));
      this.aW && (this.lv = u.I(a.attributes.get("RandomGroupSeed")));
      this.N9 = xb(a.attributes.get("EndTime"), -1);
      this.bW && (this.Sm = u.I(a.attributes.get("RandomRuleSeed")));
      this.FH = u.I(a.attributes.get("ReplayCount"));
      (this.gra = !Xa(a.attributes.get("Fight"))) &&
        u.I(a.attributes.get("Fight"));
    }
    yt() {
      return this.Co;
    }
    RMa(a) {
      this.Co = a;
      this.ga.set("Locked", this.Co ? "1" : "0");
    }
    ni() {
      return this.n9 ? !0 : this.y$a();
    }
    kx(a) {
      this.n9 = a;
      this.ga.set("Hidden", this.n9 ? "1" : "0");
    }
    y$a() {
      return this.N9 != -1 ? this.H$a() <= 0 : !1;
    }
    JMa(a) {
      this.Ck = a;
      this.ga.set("Name", K.T(this.Ck));
    }
    Hla(a) {
      debugger;
      this.bW = !0;
      this.Sm = a;
      this.ga.set("RandomRuleSeed", K.T(this.Sm));
    }
    Gla(a) {
      this.aW = !0;
      this.lv = a;
      this.ga.set("RandomGroupSeed", K.T(this.lv));
    }
    H$a() {
      debugger;
      return this.N9 - p.Dc;
    }
    Jla(a) {
      this.FH = a;
      this.ga.set("ReplayCount", K.T(this.FH));
    }
    k$a() {
      debugger;
      return this.bW;
    }
  }
  ll.g = "74";
  Object.assign(ll.prototype, { j: ll });
  class ml {
    constructor(a) {
      this.Re = -1;
      this.B$ = 0;
      this.PIa = null;
      this.node = a;
      Xa(a.attributes.get("ID")) && a.set("ID", "-1");
      Xa(a.attributes.get("IDS")) && a.set("IDS", "-1|-1|-1");
      Xa(a.attributes.get("CompletedCount")) && a.set("CompletedCount", "0");
      Xa(a.attributes.get("LossCount")) && a.set("LossCount", "0");
      Xa(a.attributes.get("EclipseCompletedCount")) &&
        a.set("EclipseCompletedCount", "0");
      Xa(a.attributes.get("EclipseLossCount")) &&
        a.set("EclipseLossCount", "0");
      Xa(a.attributes.get("StoryCount")) && a.set("StoryCount", "0");
      Xa(a.attributes.get("CompletedTime")) && a.set("CompletedTime", "0");
      Xa(a.attributes.get("TimeLeft")) && a.set("TimeLeft", "0");
      Xa(a.attributes.get("RandomizeTimeLeft")) &&
        a.set("RandomizeTimeLeft", "0");
      Xa(a.attributes.get("Level")) && a.set("Level", "0");
      let b = a.attributes.get("IDS");
      this.EG = b != null ? b : "";
      u.I(a.attributes.get("ID"));
      this.qo = u.I(a.attributes.get("CompletedCount"));
      this.MW = u.I(a.attributes.get("LossCount"));
      this.kN = u.I(a.attributes.get("EclipseCompletedCount"));
      this.Hqa = u.I(a.attributes.get("EclipseLossCount"));
      this.Ls = xb(a.attributes.get("TimeLeft"));
      this.CH = xb(a.attributes.get("RandomizeTimeLeft"));
      u.I(a.attributes.get("StoryCount"));
      this.bC = u.I(a.attributes.get("Level"));
      this.lv = u.I(a.attributes.get("RandomGroupSeed"));
      this.Sm = u.I(a.attributes.get("RandomRuleSeed"));
      this.lga = this.lv != 0 || this.Sm != 0;
    }
    Mtb() {
      this.qo = 0;
      this.node.set("CompletedCount", K.T(this.qo));
    }
    Sz() {
      return this.Ls;
    }
    Nla(a) {
      this.Ls = a;
      this.node.set("TimeLeft", K.T(this.Ls));
    }
    bb() {
      return this.bC;
    }
    DL(a) {
      this.bC = a;
      this.node.set("Level", K.T(this.bC));
    }
    Vtb() {
      this.kN = 0;
      this.node.set("EclipseCompletedCount", K.T(this.kN));
    }
    bbb() {
      debugger;
      this.kN++;
      this.node.set("EclipseCompletedCount", K.T(this.kN));
    }
    cbb() {
      debugger;
      this.Hqa++;
      this.node.set("EclipseLossCount", K.T(this.Hqa));
    }
    Gla(a) {
      this.lv = a;
      this.node.set("RandomGroupSeed", K.T(this.lv));
    }
    Hla(a) {
      this.Sm = a;
      this.node.set("RandomRuleSeed", K.T(this.Sm));
      a = this.PIa;
      a != null && a.W4();
    }
    Ila(a) {
      this.CH = a;
      this.node.set("RandomizeTimeLeft", K.T(this.CH));
    }
    aR() {
      return this.Re;
    }
    cB(a) {
      this.Re = this.Ls <= 0 ? -1 : a - this.Ls;
    }
    Eub(a) {
      this.B$ = this.CH <= 0 ? -1 : a - this.CH;
    }
    Xtb(a) {
      this.EG = a;
      this.node.set("IDS", this.EG);
    }
    abb() {
      this.qo++;
      this.node.set("CompletedCount", K.T(this.qo));
    }
    gbb() {
      this.MW++;
      this.node.set("LossCount", K.T(this.MW));
    }
    mE(a) {
      return this.Re < 0 ? !0 : this.Re >= a;
    }
    mea() {
      this.Gla((2147483647 * Da.rg.lf()) | 0);
      this.Hla((2147483647 * Da.rg.lf()) | 0);
      this.lga = !0;
      this.Ila(p.Dc);
      p.o.save();
    }
    B_a(a) {
      return this.B$ >= a || this.B$ == -1 ? (this.mea(), !0) : !1;
    }
  }
  ml.g = "75";
  Object.assign(ml.prototype, { j: ml });
  class Ki {
    constructor(a) {
      this.ga = a;
      a = this.ga.attributes.get("Level");
      (a != null && a != "") || this.ga.set("Level", "0");
      let b = this.ga.attributes.get("Name");
      (b != null && b != "") || this.ga.set("Name", "");
      this.bC = u.I(a);
      this.Ba = b != null ? b : "";
      this.Ce = u.I(this.ga.attributes.get("UpgradeLevel"));
      this.nb = null;
    }
    bb() {
      return this.bC;
    }
    DL(a) {
      this.bC = a;
      this.ga.set("Level", K.T(this.bC));
    }
    Up(a) {
      this.Ce = a;
      this.ga.set("UpgradeLevel", K.T(this.Ce));
    }
    ab() {
      return this.Ba;
    }
    Kd(a) {
      this.Ba = a;
      this.ga.set("Name", a);
      return a;
    }
    Jva(a) {
      debugger;
      var b = this.ga.A("Set");
      b != null && this.ga.Af(b);
      if (a.size != 0) {
        b = this.ga.appendChild("Set");
        a = a.entries();
        for (var c = a.next(); !c.done; ) {
          let d = c.value;
          c = a.next();
          b.set(d[0], d[1]);
        }
      }
    }
  }
  Ki.g = "76";
  Object.assign(Ki.prototype, { j: Ki });
  class Ht {
    constructor() {
      this.nl = new Map();
      this.name = this.elb = null;
      this.level = this.Vc = 0;
    }
  }
  Ht.g = "77";
  Object.assign(Ht.prototype, { j: Ht });
  class Ft {
    constructor(a) {
      this.node = a;
      this.fileName = Z.Vna;
      this.node.attributes.get("FileName") != null &&
        ((this.fileName = this.node.attributes.get("FileName")),
        this.zrb(this.fileName));
      this.ww = !1;
      a = this.node.attributes.get("Name");
      this.name = a != null ? a : "";
      a = this.node.attributes.get("Type");
      this.type = a != null ? a : "";
      this.parameters = null;
      this.hkb();
    }
    hkb() {
      let a = this.node.A("QuestParameters");
      a != null && (this.parameters = new jl(a));
    }
    setParameters(a, b, c) {
      this.parameters == null &&
        (this.parameters = new jl(this.node.appendChild("QuestParameters")));
      this.parameters.Htb(c);
      this.parameters.Iub(b);
      this.parameters.Ytb(a.o0() != null ? a.o0().Nb.toString() : "");
      this.parameters.Ztb(a.Vv);
      this.parameters.Dub(a.hT);
      this.parameters.oub(a.D2);
      this.parameters.Bub(a.qja);
      this.parameters.Wtb(a.Q_);
    }
    zrb(a) {
      this.node.set("FileName", a);
      this.fileName = a;
    }
    clearParameters() {
      let a = this.node.A("QuestParameters");
      a != null && this.node.Af(a);
      this.parameters != null && (this.parameters = null);
    }
    i9a() {
      return this.parameters != null ? this.parameters.T$ : 0;
    }
    $5a() {
      return this.parameters != null ? this.parameters.b8 : 0;
    }
  }
  Ft.g = "78";
  Object.assign(Ft.prototype, { j: Ft });
  class gg {
    constructor() {
      this.name = this.value = "";
      this.node = null;
      this.DLa = 0;
    }
    fc(a) {
      this.value = a;
      this.node != null && this.node.set("Value", this.value);
    }
    static Ueb(a, b, c) {
      let d = new gg();
      d.name = a;
      d.value = b;
      d.DLa = c;
      return d;
    }
    static Qd(a) {
      let b = new gg();
      b.node = a;
      b.DLa = 0;
      let c = a.attributes.get("Name");
      b.name = c != null ? c : "";
      a = a.attributes.get("Value");
      b.value = a != null ? a : "";
      return b;
    }
  }
  gg.g = "79";
  Object.assign(gg.prototype, { j: gg });
  class Et {
    constructor(a, b) {
      this.GH = m.l();
      this.KVa = b;
      this.DX = a;
      a = 0;
      for (b = v.e0.items; a < b.length; ) {
        let c = b[a];
        ++a;
        Xa(this.DX.attributes.get(c.name)) && this.DX.set(c.name, "0");
        this.GH.push(new Li(c, u.I(this.DX.attributes.get(c.name))));
      }
    }
    grb(a, b) {
      debugger;
      var c = a.maxValue;
      b < 0 ? (b = 0) : b > c && (b = c);
      c = this.YAa(a);
      c == null && ((c = new Li(a, b)), this.GH.push(c));
      c.Ilb = c.count;
      c.count = b;
      this.DX.set(c.Tw.name, b == null ? "null" : "" + b);
      this.KVa(!1);
    }
    QWa(a, b) {
      debugger;
      let c = 0,
        d = this.YAa(a);
      d != null && (c = d.count);
      this.grb(a, c + b);
    }
    G6a(a) {
      debugger;
      let b = 0,
        c = this.GH;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.Tw.name == a) return d;
      }
      return null;
    }
    YAa(a) {
      debugger;
      return m.gn(this.GH, function (b) {
        return b.Tw == a;
      });
    }
    j0(a) {
      debugger;
      a = this.G6a(a);
      return a != null ? a.count : 0;
    }
  }
  Et.g = "7A";
  Object.assign(Et.prototype, { j: Et });
  class ah {
    constructor() {
      this.node = null;
      this.Sv = 0;
      this.name = null;
    }
    static ji(a, b) {
      let c = new ah();
      c.name = a;
      c.Sv = b;
      c.node = p.o.Bl.node.appendChild("Timer");
      c.node.set("Name", a);
      c.node.set("EndTime", K.T(b));
      return c;
    }
    static Qd(a) {
      let b = new ah();
      b.node = a;
      Xa(a.attributes.get("Name")) && a.set("Name", "");
      Xa(a.attributes.get("EndTime")) && a.set("EndTime", "0");
      let c = a.attributes.get("Name");
      b.name = c != null ? c : "";
      b.Sv = xb(a.attributes.get("EndTime"));
      return b;
    }
  }
  ah.g = "7B";
  Object.assign(ah.prototype, { j: ah });
  class Dt {
    constructor(a) {
      this.zq = new Map();
      this.xIa = new V();
      this.node = a;
      a = a.children;
      let b = 0;
      for (; b < a.length; ) this.UXa(a[b++]);
    }
    dba(a, b) {
      this.pva(ah.ji(a, b));
    }
    UXa(a) {
      this.pva(ah.Qd(a));
    }
    pva(a) {
      this.Q4(a.name);
      this.zq.set(a.name, a);
    }
    lJ(a) {
      let b = new Ia();
      X.wh(this.zq, a, b);
      return b.G;
    }
    Q4(a, b) {
      b == null && (b = !1);
      let c = new Ia();
      X.wh(this.zq, a, c) &&
        (b && this.Gwa(a),
        c.G != null && this.node.Af(c.G.node),
        X.remove(this.zq, a));
    }
    M_a(a) {
      if (this.zq.size != 0) {
        for (
          var b = m.l(),
            c = X.filter(this.zq, function (f) {
              return f.Sv <= a;
            }).entries(),
            d = c.next();
          !d.done;

        ) {
          let f = d.value;
          d = c.next();
          let g = f[1];
          this.Gwa(f[0]);
          b.push(g);
        }
        var e = this;
        m.forEach(b, function (f) {
          e.Q4(f.name);
        });
      }
    }
    Gwa(a) {
      this.xIa.$(a);
      ha.F().ta.rza = a;
      ha.F().Vf("QUEST_EVENT_TIMER_END");
    }
  }
  Dt.g = "7C";
  Object.assign(Dt.prototype, { j: Dt });
  class vt {
    constructor(a) {
      this.Ps = new Map();
      this.ga = a;
      let b = m.l();
      var c = a.children;
      let d = 0;
      for (; d < c.length; ) {
        let e = c[d++],
          f = e.attributes.get("Name").toString(),
          g = Kg(e.attributes.get("WatchedCount"), 0);
        X.Xa(this.Ps, f)
          ? (this.Ps.set(f, this.Ps.get(f) + g), b.push(e))
          : this.Ps.set(f, g);
      }
      for (c = 0; c < b.length; ) a.Af(b[c++]);
    }
    Hia(a) {
      if (a != null && a != "")
        if (X.Xa(this.Ps, a)) {
          var b = 1 + this.Ps.get(a);
          this.Ps.set(a, b);
          let c = this.ga.children,
            d = 0;
          for (; d < c.length; ) {
            let e = c[d++];
            e.attributes.get("Name") == a &&
              e.set("WatchedCount", b == null ? "null" : "" + b);
          }
        } else
          (this.Ps.set(a, 1),
            (b = this.ga.appendChild("Video")),
            b.set("Name", a),
            b.set("WatchedCount", "1"));
    }
    n2(a) {
      return a == null || a == ""
        ? !1
        : X.Xa(this.Ps, a)
          ? this.Ps.get(a) > 0
          : !1;
    }
  }
  vt.g = "7D";
  Object.assign(vt.prototype, { j: vt });
  class zt {
    constructor() {
      this.lO = this.FM = this.EM = null;
      this.pC = m.l();
      this.pO = m.l();
      this.I$ = m.l();
    }
    GCa() {
      let a = 0,
        b = v.zv.yI,
        c = 0,
        d = b.length;
      for (; c < d; ) {
        let e = b[c++].My,
          f = 0,
          g = e.length;
        for (; f < g; ) e[f++].zj && ++a;
      }
      return a;
    }
    parse(a) {
      this.EM = a.A("Counters");
      this.EM == null && (this.EM = a.appendChild("Counters"));
      for (var b = this.EM.children, c = 0; c < b.length; )
        this.pC.push(new ol(b[c++]));
      this.FM = a.A("Achievements");
      this.FM == null && (this.FM = a.appendChild("Achievements"));
      b = this.FM.children;
      for (c = 0; c < b.length; ) this.lva(new pl(b[c++]));
      this.lO = a.A("RepostAchievements");
      this.lO == null && (this.lO = a.appendChild("RepostAchievements"));
      a = this.lO.children;
      for (b = 0; b < a.length; ) this.I$.push(bh.Qd(a[b++]));
    }
    wD(a) {
      let b = 0,
        c = this.pC.length;
      for (; b < c; ) {
        let d = b++;
        if (this.pC[d].ab() == a) return this.pC[d];
      }
      return null;
    }
    tka() {
      var a = !1;
      let b = m.l(),
        c = v.pY.cz.values(),
        d = c.next();
      for (; !d.done; ) {
        let e = d.value;
        d = c.next();
        if (e.AP > 0) {
          b.push(e.name);
          let f = this.wD(e.name);
          f != null
            ? ((a = f.DB + e.AP),
              e.type == "WinBattle" && a > 1 && (a = 1),
              f.KMa(a))
            : ((a = e.AP), this.b2a(e.name, a));
          a = !0;
        }
        e.Sob();
      }
      v.Ypb(v.zv.UZa(b));
      a && p.o.save();
    }
    aCa(a) {
      let b = 0,
        c = this.pO;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.ab() == a) return d;
      }
      return null;
    }
    PZa(a, b, c) {
      c == null && (c = !0);
      a.mO != b && (a.$Ma(b), c && p.o.save());
    }
    Cca(a, b) {
      var c;
      c == null && (c = !0);
      b == null && (b = !0);
      if (a != null) {
        for (var d = a.name, e = 0, f = this.pO; e < f.length; ) {
          let g = f[e];
          ++e;
          if (d == g.ab()) {
            this.PZa(g, b, c);
            return;
          }
        }
        e = new pl(this.FM.appendChild("Achievement"));
        e.Kd(d);
        e.$Ma(b);
        this.lva(e, a);
        c && p.o.save();
      }
    }
    $1a(a) {
      debugger;
      let b = 0,
        c = this.I$;
      for (; b < c.length; ) if (c[b++].ab() == a) return;
      this.I$.push(bh.$4a(this.lO, a));
    }
    b2a(a, b) {
      let c = new ol(this.EM.appendChild("Counter"));
      c.Kd(a);
      c.KMa(b);
      this.pC.push(c);
    }
    lva(a, b) {
      b = b != null ? b : v.zv.o5a(a.ab());
      b != null && ((b.completed = !0), (b.hS = a.mO), b.Nr(!a.mO));
      this.pO.push(a);
    }
  }
  zt.g = "7E";
  Object.assign(zt.prototype, { j: zt });
  class Zg {
    constructor() {
      this.eda = m.l();
      this.m_ = m.l();
      this.l_ = m.l();
      this.k_ = m.l();
      this.items = m.l();
      this.vK = new V();
      this.uK = new V();
      this.mia = new V();
      Hb.Qh.addListener(w(this, this.Cx));
    }
    parse(a) {
      if (a != null) {
        a = a.children;
        let b = 0;
        for (; b < a.length; ) this.Ro(new Af().Kqb(a[b++]));
      }
    }
    Ro(a, b) {
      b == null && (b = !1);
      b
        ? ((b = m.findIndex(this.items, function (c) {
            return c.ab() == a.ab();
          })),
          b >= 0 ? (this.items[b] = a) : this.items.push(a))
        : this.items.push(a);
      a.Dh > 0 && this.k_.push(a);
      return a;
    }
    removeItem(a) {
      a != null &&
        (J.remove(this.items, a),
        J.remove(this.k_, a),
        J.remove(this.l_, a),
        J.remove(this.m_, a),
        a.node != null && a.node.parent != null && a.node.parent.Af(a.node));
    }
    te(a) {
      return a != null ? this.Rj(a.name) : null;
    }
    Rj(a) {
      return m.find(this.items, function (b) {
        return b.ab() == a;
      });
    }
    mJ(a, b, c) {
      c == null && (c = !0);
      b == null && (b = "");
      let d = m.l(),
        e = 0,
        f = this.items;
      for (; e < f.length; ) {
        let g = f[e];
        ++e;
        let h = g.ib;
        h != null &&
          (h.type != a ||
            (h.Yb != b && b != "") ||
            (!h.isActive && c) ||
            d.push(g));
      }
      return d;
    }
    Uga(a) {
      a = this.Rj(a);
      return a != null ? a.qd() > 0 : !1;
    }
    Qcb(a) {
      a = this.te(a);
      return a != null ? a.qd() > 0 : !1;
    }
    lyb(a) {
      if (a != null) {
        var b = this.Rj(v.Gea(a.type));
        if (b != null && b.ib != null) {
          p.o.Ca.ik(b.ib.type, b.ib);
          var c = Zg.hga(a),
            d = this.te(a);
          d != null && (d.BL(!1), b.BL(!0), p.o.setItem(b, !0), p.o.save());
          c &&
            !Zg.hga(a) &&
            ((a = m.find(p.GD(a), function (e) {
              return e.Yh == 0;
            })),
            this.gna(a != null ? a.name : "", !0, null, !1));
        }
      }
    }
    cp(a, b) {
      if (a != null && (p.o.Ca.ik(a.type, a), b)) {
        b = p.items.GR.U6a();
        var c = this.te(a);
        c != null &&
          c.Y0() &&
          (m.forEach(this.mJ(a.type), function (d) {
            d.BL(!1);
          }),
          c.BL(!0),
          p.o.setItem(c, !0),
          p.o.save());
        c = null;
        Zg.hga(a) &&
          ((a = m.find(p.GD(a), function (d) {
            return d.Yh == 0;
          })),
          (c = a != null ? a.name : ""));
        this.gna(b != null ? b.name : "", !0, c, !0);
      }
    }
    izb(a) {
      let b = p.o.Ca;
      if (b != null) {
        let c = (b.Pv.length = 0);
        for (; c < a.length; ) {
          let d = a[c];
          ++c;
          let e = this.te(d);
          e != null && (e.Or(d), e.Wu && d.type == I.p7 && b.Pv.push(d));
        }
        this.Au();
      }
    }
    Au() {
      m.forEach(this.items, function (a) {
        a.zu(p.o.bb());
      });
    }
    Mma() {
      let a = p.Dc,
        b = m.l(),
        c = !1,
        d = 0,
        e = this.k_;
      for (; d < e.length; ) {
        let g = e[d];
        ++d;
        g.Dh <= 0 ? b.push(g) : g.Dh <= a && (this.Yda(g), b.push(g), (c = !0));
      }
      let f = this;
      b.length > 0 &&
        (c && this.mia.$(b),
        m.forEach(b, function (g) {
          J.remove(f.k_, g);
        }));
    }
    Yda(a) {
      a != null &&
        (a.Qz() ? this.m_.push(a) : this.l_.push(a),
        this.uK.$(a),
        (ha.F().ta.item = a.ib),
        ha.F().Vf("QUEST_EVENT_DELIVERY"),
        a.qd() <= 0 && (a.nk(1), a.FF(-1)),
        a.jy > 0 && a.jy > a.Ce && (a.Up(a.jy), a.FF(-1)),
        a.zu(p.o.bb()),
        p.o.save());
    }
    gna(a, b, c, d) {
      if ((a != null && a != "") || (c != null && c != ""))
        (a != null &&
          a != "" &&
          b &&
          a != c &&
          ((ha.F().ta.aja = a), ha.F().Vf("QUEST_EVENT_DEACTIVATE_PERK")),
          c != null &&
            c != "" &&
            d &&
            ((ha.F().ta.aja = c), ha.F().Vf("QUEST_EVENT_ACTIVATE_PERK")));
    }
    A4a(a) {
      var b;
      b == null && (b = !0);
      debugger;
      this.vK.$(a);
      b &&
        (this.eda.push(a),
        (b = ha.F().ta),
        (b.Mf.pE = a.Cu.ab()),
        (b.Mf.Ija = a.lT.name),
        (b.Mf.Ec = 0),
        (b.Mf.Oza = ""),
        ha.F().Vf("QUEST_EVENT_DELIVERY"));
      a.Cu.Jnb();
      p.o.save();
    }
    I9a(a) {
      let b = m.l(),
        c = 0,
        d = this.items;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        let f = e.ib;
        f != null && f.type == a && b.push(e);
      }
      return b.length > 0 ? b[(b.length * Da.rg.lf()) | 0] : null;
    }
    H9a() {
      let a = m.l(),
        b = 0,
        c = this.items;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        d.Dh > 0 && a.push(d);
      }
      return a;
    }
    Lea() {
      let a = m.l(),
        b = 0,
        c = this.items;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        d.Wu && a.push(d);
      }
      return a;
    }
    Y8a() {
      let a = m.l(),
        b = 0,
        c = this.items;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        d.EH != null && a.push(d.EH);
      }
      return a;
    }
    nzb(a) {
      let b = 0,
        c = p.items.Zm;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        d.isActive && p.items.tMa(d, a);
      }
    }
    Cx() {
      this.Mma();
    }
    k0a() {
      this.eda.length = 0;
    }
    H0a(a, b) {
      debugger;
      let c = 0,
        d = this.Lea();
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        if (e.BEa(a))
          switch (e.ib.type) {
            case I.Ci:
              b.add(I.Ci);
              break;
            case I.Di:
              b.add(I.Di);
              break;
            case I.Jm:
              e.ib.Yb == I.BM && b.add(I.BM);
              break;
            case I.xg:
              b.add(I.xg);
              break;
            case I.Ff:
              b.add(I.Ff);
              break;
            case I.Xh:
              b.add(I.Xh);
          }
      }
    }
    static hga(a) {
      let b = 0;
      for (a = p.GD(a); b < a.length; ) {
        let c = a[b];
        ++b;
        if (c.Yh == 0) return v.$z(c);
      }
      return !1;
    }
  }
  Zg.g = "7F";
  Object.assign(Zg.prototype, { j: Zg });
