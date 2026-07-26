// 028-scene-camera.js
// Domain: audio  |  42 class(es)  |  tree root(s): Ct, At, ch, ql, Ni, Jt, Kt, Lt, ty, ud, eh, Oi, Jd, I, nt, Ot, Pt, kt, lt, Mt, xf, Qt, Rt, mt, Nt, sl, gh, Bi, nl, gz, pt, St, Tt, Kz, Ai, fd
// Edit here. Run `npm run build` to reassemble the full bundle.
  class Ct {
    constructor(a) {
      this.ga = this.p$ = this.Ssa = null;
      this.QS = new It();
      this.pF = m.l();
      this.Ca = a;
    }
    JCa() {
      return id.ot().H5a() - this.QS.Oa.length;
    }
    parse(a) {
      if (
        a != null &&
        ((this.ga = a),
        (this.Ssa = a.A("PerkHistory")),
        this.QS.parse(this.Ssa),
        (this.p$ = a.A("Perks")),
        this.p$ != null)
      ) {
        a = this.p$.children;
        let b = 0;
        for (; b < a.length; ) {
          let c = new Ki(a[b++]);
          this.Zma(c, !1);
        }
      }
    }
    d2a(a) {
      debugger;
      for (var b = 0, c = this.pF; b < c.length; ) {
        var d = c[b];
        ++b;
        let e = d.ab() == a.name;
        if (e) {
          b = a.Vc;
          b > 0 && d.Up(b);
          d.Jva(a.nl);
          d.nb = null;
          this.eva(d, a);
          return;
        }
        d = a.name;
        if (e || d == null || d == "") return;
      }
      b = this.ga.A("Perks");
      b == null && (b = this.ga.appendChild("Perks"));
      b = new Ki(b.$S("Perk"));
      b.DL(a.level);
      b.Kd(a.name);
      c = a.Vc;
      c > 0 && b.Up(c);
      b.Jva(a.nl);
      this.eva(b, a);
    }
    e2a(a) {
      var b = 0;
      let c = this.pF;
      for (; b < c.length; ) {
        var d = c[b];
        ++b;
        let e = d.ab() == a.getName(),
          f = a.type == 2,
          g = a.getName() == "";
        if (e && f)
          return (
            (b = a.UQ()),
            b > 0 && d.Up(b),
            (d.nb = null),
            this.dva(d, a),
            d
          );
        if (e || g) return d;
      }
      d = new Ki(
        (this.ga.A("Perks") != null
          ? this.ga.A("Perks")
          : this.ga.appendChild("Perks")
        ).appendChild("Perk"),
      );
      d.DL(a.level);
      d.Kd(a.getName());
      b = a.UQ();
      b > 0 && d.Up(b);
      this.dva(d, a);
      return d;
    }
    $pb(a) {
      if (a != null) {
        var b = this.ga.A("PerkHistory");
        b = (b != null ? b : this.ga.appendChild("PerkHistory")).appendChild(
          "Level",
        );
        b.set("Value", a.level == null ? "null" : "" + a.level);
        b.set("Perk", a.name);
        p.o.save();
      }
    }
    dva(a, b) {
      this.FKa(b.Nc);
      a != null && this.Zma(a);
      p.o.save();
      sb.slb();
    }
    eva(a, b) {
      debugger;
      this.FKa(b.elb);
      a != null && this.Zma(a, !0);
      p.o.save();
    }
    a9a(a) {
      let b = 0,
        c = this.pF;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.ab() == a) return d;
      }
      return null;
    }
    dka() {
      var a = this.ga.A("Perks");
      a != null && this.ga.Af(a);
      a = this.ga.A("PerkHistory");
      a != null && this.ga.Af(a);
      a = this.ga.A("OpenTricks");
      a != null && this.ga.Af(a);
      p.o.save();
      this.pF.length = 0;
      this.QS.Oa.length = 0;
      id.ot().pya();
      this.Ca.ZE.length = 0;
      v.Sg.KPa.length = 0;
      td.enb();
    }
    Zma(a, b) {
      var c;
      c == null && (c = !0);
      b == null && (b = !1);
      for (var d = 0, e = v.Sg.KPa; d < e.length; ) {
        var f = e[d];
        ++d;
        var g = f.name == a.ab(),
          h = f.Vc == a.Ce;
        g && h && (a.nb = f);
      }
      if (a.nb == null)
        for (d = 0, e = v.Sg.cT; d < e.length; )
          ((f = e[d]),
            ++d,
            (g = f.name == a.ab()),
            (h = f.Vc == a.Ce),
            g && h && (a.nb = f));
      if (a.nb == null && c)
        for (c = 0, d = v.Sg.a4; c < d.length; )
          ((e = d[c]), ++c, e.name == a.ab() && (a.nb = e));
      a.nb != null &&
        (b ? m.zga(this.pF, 0, a) : this.pF.push(a), this.AXa(a.nb));
    }
    AXa(a) {
      this.Ca != null && this.Ca.ZE.push(a);
    }
    FKa(a) {
      if (this.Ca != null && a != null) {
        let b = m.find(this.Ca.ZE, function (c) {
          return c.name == a.name;
        });
        b != null && J.remove(this.Ca.ZE, b);
      }
    }
  }
  Ct.g = "80";
  Object.assign(Ct.prototype, { j: Ct });
  class At {
    constructor() {
      this.RE = new V();
      this.vW = !1;
      this.NH = "";
      this.jaa = null;
    }
    dNa(a) {
      this.NH != a &&
        ((this.NH = a), this.jaa.set("Tutorial", this.NH), p.o.save());
    }
    $la() {
      let a = v.xu.qU;
      this.dNa(a[a.length - 1]);
      this.vW = !0;
      this.RE.$();
    }
    $Q() {
      return this.NH != "END";
    }
    parse(a) {
      this.jaa = a;
      a.has("Tutorial") || a.set("Tutorial", v.xu.qU[0]);
      a = this.jaa.attributes.get("Tutorial");
      a = a != null ? a : null;
      this.NH = v.xu.pdb(a) ? a : v.xu.qU[0];
    }
  }
  At.g = "81";
  Object.assign(At.prototype, { j: At });
  class ch {
    constructor() {
      this.Era = !1;
    }
    isEqual() {
      return !1;
    }
    ir(a) {
      return this.Era ? !a : a;
    }
    Vz() {}
    parse(a) {
      this.Era = u.ka(a.attributes.get("Not"), !1);
    }
  }
  ch.g = "82";
  Object.assign(ch.prototype, { j: ch });
  class Mi extends ch {
    constructor(a) {
      super(1);
      this.Cpa = this.uc = null;
      this.parse(a);
    }
    isEqual(a) {
      return this.ir(a.Wo == this.Cpa);
    }
    Vz() {
      this.Cpa = p.F().i0(this.uc);
    }
    parse(a) {
      super.parse(a);
      a = a.attributes.get("Type");
      this.uc = a != null ? a : "";
    }
  }
  Mi.g = "83";
  Mi.u = ch;
  Object.assign(Mi.prototype, { j: Mi });
  class ql {}
  ql.g = "84";
  ql.Ei = !0;
  Object.assign(ql.prototype, { j: ql });
  class Ni {
    constructor() {
      this.Ba = null;
    }
    tn(a) {
      return this.s4a() || a.WI(this.Ba) ? !0 : !1;
    }
    s4a() {
      let a = p.o.yc,
        b = !1,
        c = new ib();
      c.clear();
      c.mj(this.Ba);
      let d = 0,
        e = a.length;
      for (; d < e; ) c.WI(a[d++].EG) && (b = !0);
      return b;
    }
    static Qd(a) {
      let b = new Ni();
      a = a.attributes.get("Name");
      b.Ba = a != null ? a : null;
      return b;
    }
  }
  Ni.g = "85";
  Ni.Rb = [ql];
  Object.assign(Ni.prototype, { j: Ni });
  class Jt {
    constructor() {
      this.ad = m.l();
    }
    Fga(a) {
      let b = 0,
        c = this.ad.length;
      for (; b < c; ) if (!this.ad[b++].tn(a)) return !1;
      return !0;
    }
    Uaa(a) {
      this.ad.push(a);
    }
  }
  Jt.g = "86";
  Object.assign(Jt.prototype, { j: Jt });
  class dh extends ch {
    constructor(a) {
      super(2);
      this.ad = m.l();
      a != null ? this.parse(a) : (this.type = 2);
    }
    isEqual(a) {
      let b = 0,
        c = this.ad;
      for (; b < c.length; ) {
        let d = c[b++].isEqual(a);
        if (this.type == 2 && !d) return this.ir(!1);
        if (this.type == 1 && d) return this.ir(!0);
      }
      return this.type == 2 ? this.ir(!0) : this.type == 1 ? this.ir(!1) : !1;
    }
    sjb(a) {
      this.ad.length = 0;
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        let c = ty.wjb(a[b++]);
        c != null && this.ad.push(c);
      }
    }
    Vz() {
      let a = 0,
        b = this.ad;
      for (; a < b.length; ) b[a++].Vz();
    }
    Tua(a) {
      this.ad.push(a);
    }
    parse(a) {
      super.parse(a);
      var b = a.attributes.get("Type");
      b = b != null ? b : null;
      this.type = b == "OR" ? 1 : b == "AND" ? 2 : 0;
      this.sjb(a);
    }
  }
  dh.g = "87";
  dh.u = ch;
  Object.assign(dh.prototype, { j: dh });
  class Kt {
    constructor(a) {
      this.Wxa = new Jt();
      this.rb = new dh();
      var b = a.attributes.get("Name");
      this.name = b != null ? b : "";
      this.value = u.H(a.attributes.get("Value"));
      b = a.attributes.get("Animation");
      this.animation = b != null ? b : "";
      b = a.attributes.get("Weapon");
      this.Fu = b != null ? b : "";
      b = a.attributes.get("Fight");
      this.m4a = b != null ? b : "";
      b = a.attributes.get("Fight2");
      this.n4a = b != null ? b : "";
      b = a.attributes.get("Type");
      this.type = b != null ? b : "";
      b = a.attributes.get("FightType");
      this.u4a = b != null ? b : "";
      b = a.attributes.get("MaxDifficulty");
      this.Yeb = b != null ? b : "";
      b = a.attributes.get("MinDifficulty");
      this.gfb = b != null ? b : "";
      this.xEa = u.ka(a.attributes.get("OnFightEnd"), !1);
      this.AP = 0;
      b = a.attributes.get("CounterSpan");
      this.Usb(b != null ? b : "");
      this.Zrb(a);
      this.rb.type = 2;
      ty.xjb(a, this.rb, this.Wxa);
    }
    Usb(a) {
      this.uca = a == "Round" ? 1 : a == "Fight" ? 2 : 0;
    }
    Zrb(a) {
      u.ka(a.attributes.get("RaidMode"))
        ? (this.cya = 2)
        : ((a = a.attributes.get("EclipseMode")),
          (a = a != null ? a : null),
          (this.cya = a == "1" ? 0 : a == "0" ? 1 : 3));
    }
    Vi(a) {
      return this.rb.isEqual(a);
    }
    a_a(a) {
      return this.Wxa.Fga(a);
    }
    Vz() {
      this.rb.Vz();
    }
    Sob() {
      this.AP = 0;
    }
  }
  Kt.g = "88";
  Object.assign(Kt.prototype, { j: Kt });
  class Lt {
    constructor() {
      this.ratio = 0;
      this.Wo = "FightNone";
    }
  }
  Lt.g = "89";
  Object.assign(Lt.prototype, { j: Lt });
  class ty {
    static wjb(a) {
      let b = a.name;
      return b == "Battle" ? new Mi(a) : b == "Operator" ? new dh(a) : null;
    }
    static xjb(a, b, c) {
      a = a.children;
      let d = 0;
      for (; d < a.length; ) {
        let e = a[d++],
          f = e.name;
        f == "Battle"
          ? b.Tua(new Mi(e))
          : f == "Operator"
            ? b.Tua(new dh(e))
            : f == "WinBattle" && c.Uaa(Ni.Qd(e));
      }
    }
  }
  ty.g = "8A";
  class ud {
    constructor() {
      this.attributes = new Map();
    }
    get(a, b, c, d) {
      d == null && (d = !1);
      c == null && (c = !0);
      if (d) {
        let e = v.pea(a);
        if (e != null) return this.get(e.Ok, b, c, d);
      }
      if ((d = a != null && X.Xa(this.attributes, a))) {
        d = this.attributes.get(a);
        if (c && ((a = v.pea(a)), a != null)) {
          b.G = a.Gb(d, p.o.bb(), v.Tva.Pdb, v.Tva.value);
          if ((d = X.Xa(this.attributes, a.Ok)))
            ((d = this.attributes.get(a.Ok)), (b.G += d));
          return !0;
        }
        b.G = d;
        return !0;
      }
      return !1;
    }
    set(a, b, c) {
      c == null && (c = !1);
      if (c && ((c = v.pea(a)), c != null)) {
        this.attributes.set(c.Ok, b);
        return;
      }
      this.attributes.set(a, b);
    }
    clear() {
      X.clear(this.attributes);
    }
    static Bz(a) {
      let b = new ud();
      a = a.attributes.entries();
      let c = a.next();
      for (; !c.done; ) {
        let d = c.value;
        c = a.next();
        b.attributes.set(d[0], d[1]);
      }
      return b;
    }
  }
  ud.g = "8B";
  Object.assign(ud.prototype, { j: ud });
  class eh {
    constructor(a) {
      this.node = a;
      this.width = u.H(a.attributes.get("Width"));
      this.height = u.H(a.attributes.get("Height"));
      this.images = m.l();
      a = a.children;
      let b = 0;
      for (; b < a.length; ) this.images.push(Oi.Qd(a[b++]));
    }
  }
  eh.g = "8C";
  Object.assign(eh.prototype, { j: eh });
  class Oi {
    constructor(a, b, c, d, e, f) {
      d == null && (d = 0);
      this.name = a;
      this.path = b == null || b == "" ? xi.nFa : b;
      this.position = c != null ? c : new H(0, 0, 0, 1);
      this.rotation = d;
      this.scale = e != null ? e : new H(1, 1, 1, 1);
      this.color = f != null ? f : new H(1, 1, 1, 1);
    }
    static Qd(a) {
      let b = a.attributes.get("Name");
      var c = a.attributes.get("Path");
      c = c != null ? c : xi.nFa;
      let d = new H(
          u.H(a.attributes.get("PosX")),
          u.H(a.attributes.get("PosY")),
          0,
          1,
        ),
        e = u.H(a.attributes.get("Rotation")),
        f = new H(
          u.H(a.attributes.get("ScaleX"), 1),
          u.H(a.attributes.get("ScaleY"), 1),
          1,
          1,
        ),
        g = RegExp("^#", "");
      a = a.attributes.get("Color");
      return new Oi(
        b != null ? b : "",
        c,
        d,
        e,
        f,
        Oa.dd(K.parseInt((a != null ? a : "#ffffff").replace(g, "0x"))),
      );
    }
  }
  Oi.g = "8D";
  Object.assign(Oi.prototype, { j: Oi });
  class Jd {
    static init() {
      debugger;
      Hb.Qh.addListener(Jd.e_a);
      Jd.wua = !0;
    }
    static UWa(a) {
      debugger;
      if (a != null && a.sEa() && !Jd.hVa.includes(a.name)) {
        Jd.wua || Jd.init();
        for (var b = null, c = 0, d = Jd.ne; c < d.length; ) {
          let e = d[c];
          ++c;
          if (e.name == a.name) {
            b = e;
            break;
          }
        }
        b != null && J.remove(Jd.ne, b);
        Jd.ne.push(a);
      }
    }
    static e_a() {
      debugger;
      ha.F();
    }
  }
  Jd.g = "8E";
  class I {
    constructor() {
      this.Kv = this.Np = null;
      this.Zib = this.Yib = 0;
      this.oB = new Map();
      this.cn = this.Rs = 0;
      this.Lj = "";
      this.lW = this.zj = !1;
      this.pz = m.l();
      this.sQ = m.l();
      this.MF = m.l();
      this.hB = m.l();
      this.Oa = m.l();
      this.attributes = new ud();
      this.kE = !1;
      this.Jv = this.fj = null;
      this.Lt = m.l();
      this.V_ = null;
      this.jU = !1;
      this.duration = vd.iea();
      this.d_ = vd.iea();
      this.e_ = vd.iea();
      this.JE = m.l();
      this.description = this.bu = this.kZ = null;
      this.badge = this.hU = "";
      this.a6 = this.U5 = !1;
      this.ol = null;
      this.On = this.Pp = this.gF = this.hF = this.iF = 0;
      this.HJ = !1;
      this.Pg =
        this.mU =
        this.Ug =
        this.Ec =
        this.oi =
        this.pd =
        this.Od =
        this.X2 =
          0;
      this.isActive = !0;
      this.hidden = !1;
      this.index = this.Bf = 0;
      this.c6 = !1;
      this.text = this.AU = this.N6 = "";
      this.M3 = "None";
      this.Cr = this.Op = this.YK = this.jda = null;
      this.kf = "";
      this.bA = !1;
      this.name =
        this.fileName =
        this.model =
        this.type =
        this.Yb =
        this.pu =
        this.Eg =
        this.lock =
          "";
    }
    Nr(a) {
      (a && this.mU != 0) || (this.zj = a);
    }
    vL(a) {
      var b = a.attributes.get("Name");
      this.name = b != null ? b : "";
      Xa(a.attributes.get("PackLabel")) ||
        ((b = a.attributes.get("PackLabel")), (this.lock = b != null ? b : ""));
      Xa(a.attributes.get("GroupID")) ||
        ((b = a.attributes.get("GroupID")), (this.lock = b != null ? b : ""));
      b = a.attributes.get("Image");
      this.fileName = b != null ? b : "";
      b = a.attributes.get("Model");
      this.model = b != null ? b : "";
      b = a.attributes.get("Type");
      this.type = b != null ? b : "";
      b = a.attributes.get("SubType");
      this.Yb = b != null ? b : "";
      b = a.attributes.get("Text");
      this.text = b != null ? b : "";
      b = a.attributes.get("TextButton");
      this.AU = b != null ? b : "";
      this.oi = xb(a.attributes.get("Price"));
      u.I(a.attributes.get("PriceDigits"));
      this.pd = xb(a.attributes.get("BonusPrice"));
      u.I(a.attributes.get("LotteryPrice"));
      this.mU = u.I(a.attributes.get("SilentRecieve"));
      this.a6 = u.ka(a.attributes.get("SingleTimeBuy"));
      this.U5 = u.ka(a.attributes.get("ShopButtonHide"));
      b = a.attributes.get("AndroidID");
      this.kf = b != null ? b : "";
      Xa(a.attributes.get("RealPrice")) ||
        ((b = a.attributes.get("RealPrice")),
        (this.Cr = b != null ? b : ""),
        (this.Op = Cb(J.substr(this.Cr, 1, null), " ")
          ? J.substr(this.Cr, 1, null).split(" ")[0]
          : J.substr(this.Cr, 1, null)),
        (this.YK = "USD"));
      Xa(a.attributes.get("RealPriceConst")) ||
        ((b = a.attributes.get("RealPriceConst")),
        (this.Op = b != null ? b : ""));
      Xa(a.attributes.get("RealPriceCurrency")) ||
        ((b = a.attributes.get("RealPriceCurrency")),
        (this.YK = b != null ? b : ""));
      this.bA = u.ka(a.attributes.get("ConsumableProduct"));
      this.HJ = u.ka(a.attributes.get("isPaid"));
      this.On = xb(a.attributes.get("RecieveGold"));
      this.Pp = xb(a.attributes.get("RecieveBonus"));
      this.gF = xb(a.attributes.get("ReceiveForgeMaterial1"));
      this.hF = xb(a.attributes.get("ReceiveForgeMaterial2"));
      this.iF = xb(a.attributes.get("ReceiveForgeMaterial3"));
      b = a.attributes.get("CurrencyName");
      this.Lj = b != null ? b : "";
      this.cn = u.I(a.attributes.get("CurrencyValue"));
      Ld.Wab ||
        Xa(a.attributes.get("ShopHide")) ||
        ((b = u.ka(a.attributes.get("ShopHide"))),
        (this.isActive = !b),
        (this.lW = !b));
      this.hidden = u.ka(a.attributes.get("Hidden"));
      Xa(a.attributes.get("Level"));
      this.Bf = u.I(a.attributes.get("Level"));
      this.Ug = u.I(a.attributes.get("UpgradeLevel"));
      this.c6 = u.ka(a.attributes.get("SpendAfterUse"));
      this.Ec = xb(a.attributes.get("DeliveryTime"));
      this.bxa();
      this.X2 = xb(a.attributes.get("MoneyDeliveryPrice"));
      this.Od = xb(a.attributes.get("BonusDeliveryPrice"));
      this.Pg = u.I(a.attributes.get("Milestone"));
      this.Rs = u.I(a.attributes.get("AddPercent"));
      a.attributes.get("Icon");
      b = a.attributes.get("PaidItem");
      this.M3 = b != null ? b : "None";
      b = a.attributes.get("Badge");
      this.badge = b != null ? b : "";
      b = a.attributes.get("ShopLabel");
      this.hU = b != null ? b : "";
      b = a.A("Upgrades");
      b != null
        ? ((b = b.attributes.get("Template")), (b = b != null ? b : ""))
        : (b = null);
      this.N6 = b;
      Xa(a.attributes.get("TacticSubtype")) ||
        ((b = a.attributes.get("TacticSubtype")),
        (this.pu = b != null ? b : ""));
      b = a.A("Perks");
      b != null && this.jkb(b);
      b = a.A("Enchantments");
      b != null && (this.wkb(b), this.Hjb(b));
      b = 0;
      let c = v.ho.attributes;
      for (; b < c.length; ) {
        let e = c[b];
        ++b;
        let f = a.attributes.get(e.name);
        Xa(f) || this.attributes.set(e.name, u.I(f));
      }
      b = a.attributes.get("Description");
      this.description = b != null ? b : null;
      b = a.attributes.get("ProfitImage");
      this.bu = b != null ? b : null;
      b = a.attributes.get("ButtonImage");
      this.kZ = b != null ? b : null;
      b = a.attributes.get("DateStart");
      this.e_.WT(b != null ? b : "0");
      b = a.attributes.get("DateEnd");
      this.d_.WT(b != null ? b : "0");
      b = a.attributes.get("Duration");
      this.duration.WT(b != null ? b : "0");
      this.jU = u.ka(a.attributes.get("ShowLastChance"));
      b = a.attributes.get("FocusOnBuy");
      this.V_ = b != null ? b : null;
      let d = null;
      d = function (e, f) {
        if (e != null)
          for (var g = e.children, h = 0; h < g.length; ) {
            let k = g[h++];
            e = new yb();
            e.parse(k);
            e.type == 6 && d(k, e.rb);
            f.push(e);
          }
      };
      this.JE.length = 0;
      d(a.A("OfferConditions"), this.JE);
      this.Lt.length = 0;
      (function (e, f) {
        if (e != null) {
          e = e.children;
          for (var g = 0; g < e.length; ) f.push(new Mt(e[g++]));
        }
      })(a.A("OfferItems"), this.Lt);
      this.Jv = null;
      b = a.A("CompositeImage");
      b != null && (this.Jv = new eh(b));
      this.fj = null;
      a = a.A("MapButtonImage");
      if (a != null) {
        this.fj = new fh(a);
        debugger;
      }
    }
    setItem(a) {
      this.name = a.name;
      this.fileName = a.fileName;
      this.model = a.model;
      this.type = a.type;
      this.Yb = a.Yb;
      this.pu = a.pu;
      this.Eg = a.Eg;
      this.lock = a.lock;
      this.kf = a.kf;
      this.bA = a.bA;
      this.Cr = a.Cr;
      this.Op = a.Op;
      this.YK = a.YK;
      this.M3 = a.M3;
      this.text = a.text;
      this.AU = a.AU;
      this.c6 = a.c6;
      this.N6 = a.N6;
      this.index = a.index;
      this.Bf = a.Bf;
      this.hidden = a.hidden;
      this.isActive = a.isActive;
      this.lW = a.lW;
      this.Pg = a.Pg;
      this.mU = a.mU;
      this.Ug = a.Ug;
      this.Ec = a.Ec;
      this.oi = a.oi;
      this.pd = a.pd;
      this.Od = a.Od;
      this.X2 = a.X2;
      this.HJ = a.HJ;
      this.On = a.On;
      this.Pp = a.Pp;
      this.gF = a.gF;
      this.hF = a.hF;
      this.iF = a.iF;
      this.ol = a.ol;
      this.kE = a.kE;
      this.zj = a.zj;
      this.Rs = a.Rs;
      this.oB = a.oB;
      this.a6 = a.a6;
      this.U5 = a.U5;
      this.badge = a.badge;
      this.hU = a.hU;
      this.attributes = ud.Bz(a.attributes);
      this.Oa = m.Ib(a.Oa);
      this.hB = m.Ib(a.hB);
      this.MF = m.Ib(a.MF);
      this.sQ = m.Ib(a.sQ);
      this.pz = m.Ib(a.pz);
      this.Jv = a.Jv;
      this.fj = a.fj;
      this.description = a.description;
      this.bu = a.bu;
      this.kZ = a.kZ;
      this.e_ = vd.jea(a.e_);
      this.d_ = vd.jea(a.d_);
      this.duration = vd.jea(a.duration);
      this.jU = a.jU;
      this.V_ = a.V_;
      this.JE.length = 0;
      m.addRange(this.JE, a.JE);
      this.Lt.length = 0;
      m.addRange(this.Lt, a.Lt);
    }
    iab() {
      switch (this.type) {
        case I.Ci:
          return 2;
        case I.Tx:
        case I.yk:
          return 6;
        case I.Gu:
          return 7;
        case I.Di:
          return 3;
        case I.Jm:
          return 8;
        case I.xg:
          return 1;
        case I.Ff:
          return 5;
        case I.Xh:
          return 4;
        default:
          return 0;
      }
    }
    fm(a) {
      a == null && (a = 0);
      switch (this.cBa(a)) {
        case 0:
          return null;
        case 1:
          return this.Np;
        case 2:
          return this.Kv;
      }
    }
    cBa(a) {
      a == null && (a = 0);
      return I.V1(this.Np, a) ? 1 : I.V1(this.Kv, a) ? 2 : 0;
    }
    ndb() {
      return this.a6 ? p.o.xa.Rj(this.name) != null : !1;
    }
    Yfa() {
      debugger;
      return this.Rfa() ? this.pd : this.oi;
    }
    cab() {
      return this.oi * (v.Mya | 0);
    }
    np() {
      return this.fm() != null ? Math.trunc(this.oi * this.SCa()) : this.oi;
    }
    pn() {
      return this.fm() != null ? Math.trunc(this.pd * this.SCa()) : this.pd;
    }
    Rfa() {
      return this.pd > 0;
    }
    eDa() {
      return this.oi > 0;
    }
    sob() {
      this.isActive = this.lW;
    }
    ni() {
      return this.hidden;
    }
    XCa() {
      return kc(this.Op) > 1e-10;
    }
    $Ca() {
      return !this.ni() && this.isActive && p.o != null
        ? p.o.MJ(this.lock)
        : !1;
    }
    clone() {
      let a = I.Z4a(this);
      a.pz.length = 0;
      this.Kv != null && (a.Kv = zf.from(this.Kv));
      this.Np != null && (a.Np = zf.from(this.Np));
      return a;
    }
    SCa() {
      let a = this.fm();
      return a != null ? parseFloat(a.OA) / this.Yfa() : 1;
    }
    N4() {
      this.Kv = this.Np = null;
    }
    J0() {
      let a = this.fm();
      return a != null && a.Fw > 0 && this.Pp > 0 ? a.Fw : this.Pp;
    }
    gJ() {
      let a = this.fm();
      return a != null && a.Fw > 0 && this.On > 0 ? a.Fw : this.On;
    }
    vcb() {
      debugger;
      let a = this.Op;
      var b = this.fm();
      b = b != null ? b.Gja : null;
      return a != null && a != "" && b != null && b != ""
        ? !ic.cA(kc(a), kc(b))
        : !0;
    }
    bfb(a) {
      var b = a.type;
      b != null && b != "" && (this.type = a.type);
      b = a.Yb;
      b != null && b != "" && (this.Yb = a.Yb);
      b = a.pu;
      b != null && b != "" && (this.pu = a.pu);
    }
    jkb(a) {
      this.Oa.length = 0;
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        let c = I.PS(a[b++]);
        c != null && this.Oa.push(c);
      }
    }
    wkb(a) {
      this.MF.length = 0;
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        let c = I.PS(a[b++]);
        c != null && this.MF.push(c);
      }
    }
    Njb(a) {
      this.m0a();
      if (a != null) {
        a = a.children;
        for (var b = 0; b < a.length; ) {
          let c = I.PS(a[b++]);
          c != null && (this.sQ.push(c), this.Oa.push(c));
        }
      }
    }
    Hjb(a) {
      this.vnb();
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        let c = xe.Qd(a[b++]);
        this.pz.push(c);
      }
    }
    vnb() {
      this.pz.length = 0;
    }
    mz(a) {
      a == null && (a = 0);
      this.oi = v.Xk(this.oi, a);
      this.X2a(a);
      this.Y2a(a);
      let b = 0,
        c = this.hB;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        d.values.Tg = v.Xk(d.values.Tg, a);
      }
      this.n_(a);
    }
    n_(a) {
      a == null && (a = 0);
      this.type == I.yk && (this.On = v.Xk(this.On, a));
    }
    X2a(a) {
      a == null && (a = 0);
      this.fda(this.Kv, a);
      this.fda(this.Np, a);
    }
    fda(a, b) {
      if (
        a != null &&
        (a.Fw > 0 && this.On > 0 && (a.Fw = v.Xk(a.Fw, b)),
        !this.Rfa() && this.eDa() && this.type.localeCompare(I.yk) != 0)
      ) {
        let c = Math.trunc(kc(a.OA));
        c = v.Xk(c, b);
        a.OA = K.T(c);
      }
    }
    Y2a(a) {
      a == null && (a = 0);
      let b = this.oB.values(),
        c = b.next();
      for (; !c.done; ) {
        let d = c.value;
        c = b.next();
        this.fda(d, a);
      }
    }
    sEa() {
      return I.V1(this.Np) ? !0 : I.V1(this.Kv);
    }
    PXa(a) {
      a = this.r8a(a);
      this.hB.push(a);
    }
    r9a() {
      let a = -2147483648;
      m.forEach(this.hB, function (b) {
        b.values.Vc > a && (a = b.values.Vc);
      });
      return a;
    }
    Dz(a, b) {
      b == null && (b = 1e6);
      a == null && (a = !1);
      let c = m.l(),
        d = m.l();
      var e = this.r9a();
      m.addRange(d, this.hB);
      var f = p.items.l8a(this);
      if (f != null) {
        var g = 0;
        for (f = f.pna; g < f.length; ) {
          let h = f[g];
          ++g;
          h.values.Vc > e && d.push(h);
        }
      }
      d.sort(function (h, k) {
        return h.az(k);
      });
      for (e = 0; e < d.length; )
        ((g = d[e]),
          ++e,
          (!a || g.values.Vc > this.Ug) && g.values.level <= b && c.push(g));
      return c;
    }
    MZa(a) {
      let b = 0,
        c = v.ho.attributes;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        let e = new ja(0);
        a.values.attributes.get(d.name, e) && this.attributes.set(d.name, e.G);
      }
      a.bc.Od && (this.Od = a.values.Od);
      a.bc.pd && (this.pd = a.values.pd);
      a.bc.Ec && ((this.Ec = a.values.Ec), this.bxa());
      a.bc.level && (this.Bf = a.values.level);
      a.bc.Pg && (this.Pg = a.values.Pg);
      a.bc.Tg && (this.oi = a.values.Tg);
      a.bc.Vc && (this.Ug = a.values.Vc);
    }
    OQ(a) {
      let b = 0,
        c = this.Dz();
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.values.Vc == a) return this.cw(d);
      }
      return null;
    }
    y7a(a) {
      var b = this.Dz();
      if (b.length != 0) {
        let c = 0;
        for (; c < b.length; ) {
          let d = b[c];
          ++c;
          if (d.values.Vc >= a) return this.cw(d);
        }
        b = b[b.length - 1];
        if (b != null && a > b.values.Vc) return this.cw(b);
      }
      return null;
    }
    D9a(a) {
      var b = !1;
      b == null && (b = !0);
      let c = null,
        d = null,
        e = null,
        f = !1,
        g = 0,
        h = this.Dz();
      for (; g < h.length; ) {
        let k = h[g];
        ++g;
        let l = k.values.level;
        f || l != a || ((c = k), (f = !0));
        if (l > a) {
          d = e;
          break;
        }
        e = k;
      }
      return c == null && d == null ? null : this.cw(b ? d : c);
    }
    C9a() {
      debugger;
      let a = this.Dz();
      return 0 < a.length ? this.cw(a[0]) : null;
    }
    r7a() {
      let a = new Nt(),
        b = 0;
      if (this.ol != null) {
        let c = 0,
          d = this.ol.Dz();
        for (; c < d.length; ) {
          let e = d[c++].values;
          e.level == this.Bf && e.Vc < this.Ug && e.Vc > this.ol.Ug && ++b;
        }
        this.ol.Bf == this.Bf && ++b;
      }
      b == 0 ? ((a.type = 1), (a.index = this.Bf)) : (a.index = b);
      return a;
    }
    Au(a, b, c, d) {
      let e = this.Dz(),
        f = null,
        g = null,
        h = null,
        k = v.MIa.Gb(this.type),
        l = b / 100,
        n = 0;
      for (; n < e.length; ) {
        let q = e[n];
        ++n;
        let r = q.values.Vc;
        r == b && (f = q);
        q.values.level <= a &&
          r > b &&
          (q.values.Pg > 0 &&
            q.values.level >= l + k &&
            (g == null || g.values.Vc < r) &&
            (g = q),
          q.values.Pg <= 0 && (h == null || h.values.Vc > r) && (h = q));
      }
      c.G = f != null ? this.cw(f) : null;
      g != null ? (d.G = this.cw(g)) : h != null && (d.G = this.cw(h));
    }
    Unb(a) {
      debugger;
      X.remove(this.oB, a);
    }
    cw(a) {
      if (a == null) return null;
      let b = this.clone();
      b.ol = this;
      b.MZa(a);
      b.Np = null;
      X.Xa(this.oB, b.Ug) && (b.Np = this.oB.get(b.Ug));
      return b;
    }
    m0a() {
      let a = this;
      m.forEach(this.sQ, function (b) {
        a.unb(b);
      });
      this.sQ.length = 0;
    }
    unb(a) {
      debugger;
      J.remove(this.Oa, a);
    }
    bxa() {
      this.Ec > 0 && I.d1() > 0 && (this.Ec = I.d1());
    }
    r8a(a) {
      a = xf.Bz(a);
      let b = 0,
        c = v.ho.attributes;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        let e = new ja(0);
        if (
          this.attributes.get(d.name, e) &&
          !a.values.attributes.get(d.name, e)
        ) {
          debugger;
          this.attributes.get(d.name, e);
          a.values.attributes.set(d.name, e.G);
        }
      }
      a.bc.Od || (a.values.Od = this.Od);
      a.bc.pd || (a.values.pd = this.pn());
      a.bc.Ec || (a.values.Ec = this.Ec);
      a.bc.level || (a.values.level = this.Bf);
      a.bc.Pg || (a.values.Pg = this.Pg);
      a.bc.Tg || (a.values.Tg = this.np());
      a.bc.Vc || (a.values.Vc = this.Ug);
      return a;
    }
    zkb(a) {
      var b = a.A("Upgrades");
      if (b != null) {
        a = b.attributes.get("Template");
        a = a != null ? a : "";
        b = b.children;
        let d = 0;
        for (; d < b.length; ) this.PXa(xf.Qd(b[d++], a, this.type));
      }
      this.hB.sort(function (d, e) {
        return d.az(e);
      });
      let c = 0;
      m.forEach(this.hB, function (d) {
        d.Ozb = c;
        c += 1;
      });
    }
    czb(a, b, c) {
      debugger;
      c.G = !1;
      this.kf = a.kf;
      this.Cr = a.Tg + a.sign;
      this.Op = a.Tg;
      this.YK = a.bwb;
      this.lock = a.groupId;
      switch (b.Eg) {
        case "bonus":
          this.Pp = a.amount;
          break;
        case "money":
          this.On = a.amount;
          c.G = !0;
          break;
        case Z.a7:
          this.gF = a.amount;
          break;
        case Z.b7:
          this.hF = a.amount;
          break;
        case Z.c7:
          this.iF = a.amount;
      }
    }
    static d1() {
      return Ld.ac.oob;
    }
    static Qd(a) {
      let b = new I();
      b.vL(a);
      return b;
    }
    static Z4a(a) {
      let b = new I();
      b.setItem(a);
      return b;
    }
    static PS(a) {
      var b = a.attributes.get("Name");
      b = v.Sg.ln(b != null ? b : "");
      if (b == null) return null;
      let c = a.A("Set"),
        d = a.A("RatingEvaluation");
      if (c != null || d != null)
        ((b = b.clone(c, d)),
          (a = a.attributes.get("Description")),
          (a = a != null ? a : ""),
          a != null && a != "" && (b.description = a));
      return b;
    }
    static Rkb(a) {
      var b = a.attributes.get("Name");
      b = v.Sg.ln(b != null ? b : null);
      if (b != null) {
        let c = a.A("Set"),
          d = a.A("RatingEvaluation");
        if (c != null || d != null)
          ((b = b.clone(c, d)),
            (a = a.attributes.get("Description")),
            (a = a != null ? a : null),
            a != null && a != "" && (b.description = a));
        return b;
      }
      return null;
    }
    static V1(a, b) {
      b == null && (b = 0);
      if (a == null) return !1;
      let c = ed.getTimezoneOffset();
      b = b > 0 ? b : p.Dc + Math.trunc(c);
      return a.mE ? (b > a.gma ? b < a.An : !1) : !0;
    }
  }
  I.g = "8F";
  Object.assign(I.prototype, { j: I });
  class rl extends I {
    constructor(a, b, c) {
      c == null && (c = "");
      b == null && (b = "");
      super();
      this.vL(a);
      this.$xa = b;
      this.j1a = c;
    }
  }
  rl.g = "90";
  rl.u = I;
  Object.assign(rl.prototype, { j: rl });
  class nt {
    static Xga(a) {
      return a.Yb != I.Joa ? a.Yb == I.Hoa : !0;
    }
  }
  nt.g = "91";
  class Ot {
    constructor(a) {
      debugger;
      var b = a.attributes.get("Name");
      this.name = b != null ? b : "";
      b = a.attributes.get("Title");
      this.title = b != null ? b : "";
      b = a.attributes.get("Text");
      this.text = b != null ? b : "";
      b = a.attributes.get("Brief");
      this.MYa = b != null ? b : "";
      a.attributes.get("DefaultComboPerk");
      this.items = m.l();
      a = a.children;
      for (b = 0; b < a.length; ) {
        let c = new Pt(a[b++]);
        this.items.push(c);
      }
    }
    u$a() {
      debugger;
      let a = 0,
        b = this.items;
      for (; a < b.length; ) {
        let c = b[a++].ac;
        if (c == null || p.o.xa.te(c) == null) return !1;
      }
      return !0;
    }
  }
  Ot.g = "92";
  Object.assign(Ot.prototype, { j: Ot });
  class Pt {
    constructor(a) {
      let b = a.attributes.get("Name");
      this.name = b != null ? b : "";
      this.scale = u.H(a.attributes.get("Scale"));
      this.rotate = u.H(a.attributes.get("Rotate"));
      this.x = u.H(a.attributes.get("X"));
      this.y = u.H(a.attributes.get("Y"));
      a.attributes.get("IconsY");
      this.ac = p.items.$b(this.name);
    }
  }
  Pt.g = "93";
  Object.assign(Pt.prototype, { j: Pt });
  class kt {
    constructor() {
      this.fNa = m.l();
    }
    parse(a) {
      if (a != null) {
        a = a.children;
        for (var b = 0; b < a.length; ) this.fNa.push(new Ot(a[b++]));
      }
    }
    tBa(a) {
      debugger;
      if (a == null || a == "") return null;
      let b = 0,
        c = this.fNa;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.name == a) return d;
      }
      return null;
    }
    YEa(a) {
      let b = a.FR;
      if (b == null || b == "") return !0;
      a = this.tBa(a.FR);
      return a != null ? a.u$a() : !1;
    }
    U6a() {
      var a = p.o.xa.Lea();
      let b = m.l();
      for (var c = 0; c < a.length; ) {
        let d = m.gn(p.GD(a[c++].ib), function (e) {
          return e.Yh == 0;
        });
        d != null &&
          m.gn(b, function (e) {
            return e.name == d.name;
          }) == null &&
          b.push(d);
      }
      for (a = 0; a < b.length; ) if (((c = b[a]), ++a, v.$z(c))) return c;
      return null;
    }
  }
  kt.g = "94";
  Object.assign(kt.prototype, { j: kt });
  class lt {
    constructor() {
      this.eVa = 0;
      this.FUa = "PAID";
    }
    create(a) {
      if (a == null || !this.Ncb(a) || !this.Mcb(a)) return null;
      let b = I.Qd(a);
      b.zkb(a);
      b.index = this.eVa++;
      return b;
    }
    Ncb(a) {
      a = a.attributes.get("Labels");
      a = mi(a != null ? a : "", "|");
      return a.length != 0 ? a.includes(this.FUa) : !0;
    }
    Mcb(a) {
      a = a.attributes.get("Type");
      return (a != null ? a : null) != I.Gu;
    }
  }
  lt.g = "95";
  Object.assign(lt.prototype, { j: lt });
  class fh extends eh {
    constructor(a) {
      super(a);
      (this.v2a = u.ka(a.attributes.get("CustomTimerBG"))) ||
        this.images.push(new Oi("MapBtnBG", xi.P2, new H(66, 11, 0, 1)));
    }
  }
  fh.g = "96";
  fh.u = eh;
  Object.assign(fh.prototype, { j: fh });
  class Mt {
    constructor(a) {
      this.Fda = m.l();
      this.TI = m.l();
      let b = a.attributes.get("Name");
      this.name = b != null ? b : "";
      this.Ijb(a.A("Enchantments"));
    }
    Ijb(a) {
      this.TI.length = 0;
      this.Fda.length = 0;
      if (a != null) {
        a = a.children;
        for (var b = 0; b < a.length; ) {
          var c = a[b++];
          this.TI.push(xe.Qd(c));
          c = I.PS(c);
          c != null && this.Fda.push(c);
        }
      }
    }
    fBa(a) {
      let b = m.l(),
        c = 0,
        d = this.TI;
      for (; c < d.length; ) {
        let f = d[c];
        ++c;
        let g = m.l(),
          h = 0,
          k = f.nl;
        for (; h < k.length; ) {
          var e = k[h];
          ++h;
          let l = e.key;
          e = e.value;
          l == "Aspect" && (e = K.T(ye.F().qea(a)));
          g.push(new rb(l, e));
        }
        b.push(xe.Bz(f, g));
      }
      return b;
    }
  }
  Mt.g = "97";
  Object.assign(Mt.prototype, { j: Mt });
  class Pi extends I {
    constructor() {
      super();
      this.Cu = this.Emb = this.lT = null;
      this.ZK = this.ylb = this.zdb = 0;
    }
    Sz() {
      return this.ZK > p.Dc ? this.ZK - p.Dc : 0;
    }
    jDa() {
      return "" + this.Cu.ab() + "|" + this.lT.name + "|" + this.Sz();
    }
    static $_(a, b) {
      debugger;
      let c = new Pi();
      c.Cu = b;
      c.zdb = u.I(a.attributes.get("ItemLevel"));
      c.ylb = u.I(a.attributes.get("PlayerLevel"));
      c.ZK = xb(a.attributes.get("DeliveryTime"));
      return c;
    }
  }
  Pi.g = "98";
  Pi.u = I;
  Object.assign(Pi.prototype, { j: Pi });
  class xf {
    constructor() {
      this.Ozb = 0;
      this.bc = new Qt();
      this.values = new Rt();
    }
    Cfb(a, b, c) {
      this.bc.Od = !1;
      this.bc.pd = !1;
      this.bc.Ec = !1;
      this.bc.level = !1;
      this.bc.Pg = !1;
      this.bc.Tg = !1;
      this.bc.Vc = !1;
      this.bc.Mx = !1;
      this.values.Od = 0;
      this.values.pd = 0;
      this.values.Tg = 0;
      this.values.Ec = 0;
      this.values.level = 0;
      this.values.Pg = 0;
      this.values.Vc = 0;
      this.values.Mx = b;
      this.values.nna = c;
      this.values.attributes = new ud();
      c = 0;
      let d = v.ho.attributes;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        let f = a.attributes.get(e.name);
        f != null && this.values.attributes.set(e.name, u.I(f));
      }
      c = a.attributes.get("DeliveryTime");
      c != null && ((this.bc.Ec = !0), (this.values.Ec = xb(c)));
      c = a.attributes.get("BonusDeliveryPrice");
      c != null && ((this.bc.Od = !0), (this.values.Od = xb(c)));
      this.bc.Mx = !0;
      this.values.Mx = b;
      b = a.attributes.get("Price");
      b != null && ((this.bc.Tg = !0), (this.values.Tg = xb(b)));
      b = a.attributes.get("BonusPrice");
      b != null && ((this.bc.pd = !0), (this.values.pd = xb(b)));
      b = a.attributes.get("Level");
      b != null && ((this.bc.level = !0), (this.values.level = u.I(b)));
      b = a.attributes.get("UpgradeLevel");
      b != null && ((this.bc.Vc = !0), (this.values.Vc = u.I(b)));
      a = a.attributes.get("Milestone");
      a != null && ((this.bc.Pg = !0), (this.values.Pg = u.I(a)));
    }
    Dfb(a) {
      this.bc.Od = a.bc.Od;
      this.bc.pd = a.bc.pd;
      this.bc.Ec = a.bc.Ec;
      this.bc.level = a.bc.level;
      this.bc.Pg = a.bc.Pg;
      this.bc.Tg = a.bc.Tg;
      this.bc.Vc = a.bc.Vc;
      this.bc.Mx = a.bc.Mx;
      this.values.attributes = a.values.attributes;
      this.values.Od = a.values.Od;
      this.values.pd = a.values.pd;
      this.values.Ec = a.values.Ec;
      this.values.level = a.values.level;
      this.values.Pg = a.values.Pg;
      this.values.Tg = a.values.Tg;
      this.values.Vc = a.values.Vc;
      this.values.Mx = a.values.Mx;
      this.values.nna = a.values.nna;
    }
    az(a) {
      return qb(this.values.Vc, a.values.Vc);
    }
    static Qd(a, b, c) {
      let d = new xf();
      d.Cfb(a, b, c);
      return d;
    }
    static Bz(a) {
      let b = new xf();
      b.Dfb(a);
      return b;
    }
  }
  xf.g = "99";
  xf.Rb = [al];
  Object.assign(xf.prototype, { j: xf });
  class Qt {
    constructor() {
      this.Ec =
        this.Od =
        this.Mx =
        this.Tg =
        this.pd =
        this.level =
        this.Vc =
        this.Pg =
          !1;
    }
  }
  Qt.g = "9A";
  Object.assign(Qt.prototype, { j: Qt });
  class Rt {
    constructor() {
      this.Ec = this.level = this.Vc = this.Pg = 0;
      this.Mx = this.nna = null;
      this.Od = this.pd = this.Tg = 0;
      this.attributes = null;
    }
  }
  Rt.g = "9B";
  Object.assign(Rt.prototype, { j: Rt });
  class mt {
    constructor() {
      this.pna = m.l();
      this.type = this.HR = "";
    }
    mz(a) {
      a == null && (a = 0);
      let b = 0,
        c = this.pna;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        d.values.Tg = v.Xk(d.values.Tg, a);
      }
    }
  }
  mt.g = "9C";
  Object.assign(mt.prototype, { j: mt });
  class Nt {
    constructor() {
      this.type = 2;
      this.index = 0;
    }
  }
  Nt.g = "9D";
  Object.assign(Nt.prototype, { j: Nt });
  class sl {}
  sl.g = "9E";
  sl.Ei = !0;
  Object.assign(sl.prototype, { j: sl });
  class gh {
    constructor(a, b, c) {
      this.item = a;
      this.rc = b.i8a(a.name);
      this.o = b;
      this.P2 = c;
    }
    qp() {
      return 0;
    }
    ab() {
      return this.item.name;
    }
    tJ() {
      return Bi.uHa + this.ab();
    }
    QCa() {
      return this.item.e_.Kfa();
    }
    V0() {
      return this.item.d_.Kfa();
    }
    a$a() {
      return this.item.duration.Kfa();
    }
    Vi(a) {
      if (this.item.JE == null) return !0;
      let b = 0,
        c = this.item.JE;
      for (; b < c.length; ) if (!c[b++].compare(a)) return !1;
      return !0;
    }
    Yga() {
      return this.o.xa.Uga(this.ab());
    }
    dFa() {
      let a = this.o.Bl.lJ(this.tJ());
      return a != null ? a.Sv - p.Dc > 0 : !1;
    }
    Mwb() {
      let a = this.V0() > 0 ? this.V0() : p.Dc + this.a$a();
      this.o.Bl.dba(this.tJ(), a);
    }
    X3a() {
      var a;
      a == null && (a = !1);
      this.o.Bl.Q4(this.tJ(), a);
    }
    isActive() {
      return this.dFa() ||
        this.rc.state == "JustStarted" ||
        this.rc.state == "Active"
        ? !0
        : this.rc.state == "LastChance";
    }
    pXa() {
      let a = new ig();
      a.name = this.ab();
      a.Mc = this.tJ();
      a.image = this.item.kZ;
      a.At = Bi.QYa;
      a.Pr = "Story";
      a.Vo = !0;
      a.fj = this.item.fj;
      this.P2.Zua(a, this.item);
    }
    CKa() {
      this.P2.DKa(this.ab());
    }
  }
  gh.g = "9F";
  gh.Rb = [sl];
  Object.assign(gh.prototype, { j: gh });
  class tl extends gh {
    constructor(a, b, c) {
      super(a, b, c);
    }
    qp() {
      return 1;
    }
    Yga() {
      let a = this;
      return super.Yga()
        ? !0
        : m.any(this.item.Lt, function (b) {
            return a.o.xa.Uga(b.name);
          });
    }
  }
  tl.g = "A0";
  tl.u = gh;
  Object.assign(tl.prototype, { j: tl });
  class Bi {}
  Bi.g = "A1";
  class nl {
    constructor() {
      this.vx = 0;
      this.$H = !1;
      this.x4 = 0;
      this.state = "NotStarted";
      this.name = null;
    }
  }
  nl.g = "A2";
  Object.assign(nl.prototype, { j: nl });
  class gz {
    static Zn(a) {
      switch (a) {
        case "Active":
          return 3;
        case "End":
          return 6;
        case "JustStarted":
          return 2;
        case "LastChance":
          return 5;
        case "NotStarted":
          return 1;
        case "Purchased":
          return 4;
        case "Unknown":
          return 0;
        default:
          return -1;
      }
    }
  }
  class pt {
    constructor(a, b) {
      this.Dd = a;
      this.bsa = b;
    }
    createOffer(a) {
      switch (a.Yb) {
        case I.Hoa:
          return new tl(a, this.Dd, this.bsa);
        case I.Joa:
          return new gh(a, this.Dd, this.bsa);
        default:
          return null;
      }
    }
  }
  pt.g = "A3";
  Object.assign(pt.prototype, { j: pt });
  class St {
    constructor(a) {
      this.NIa = new Map();
      if (a != null) {
        let b = 0;
        for (; b < a.length; ) {
          let c = a[b];
          ++b;
          this.NIa.set(c.name, c);
        }
      }
    }
    Wfa() {
      return X.values(this.NIa);
    }
  }
  St.g = "A4";
  Object.assign(St.prototype, { j: St });
  class Tt {
    constructor(a, b, c, d) {
      this.name = a;
      this.type = b;
      this.pha = c;
      this.p3a = d.slice();
    }
    Kga() {
      return Mc.F().MEa(this.name);
    }
    dxa() {
      let a = ha.F().ta,
        b = 0,
        c = this.p3a;
      for (; b < c.length; ) if (!c[b++].compare(a)) return !1;
      return !0;
    }
  }
  Tt.g = "A5";
  Object.assign(Tt.prototype, { j: Tt });
  class Kz {
    static ji(a) {
      switch (a) {
        case "Asian":
          return 3;
        case "Raid":
          return 1;
        case "Story":
          return 0;
        case "Video":
          return 2;
        default:
          return null;
      }
    }
  }
  class Ai {
    constructor() {
      Ai.instance = this;
      this.config = this.load();
    }
    load() {
      var a = Ja.mi(313);
      let b = null;
      b = function (e, f) {
        if (e != null) {
          e = e.children;
          for (var g = 0; g < e.length; ) {
            let h = e[g++],
              k = new yb();
            k.parse(h);
            k.type == 6 && b(h, k.rb);
            f.push(k);
          }
        }
      };
      let c = m.l();
      a = a.children;
      let d = 0;
      for (; d < a.length; ) {
        let e = a[d++],
          f = m.l();
        b(e.A("DownloadConditions"), f);
        let g = e.attributes.get("Name"),
          h = e.attributes.get("ItemsPackLabel");
        c.push(
          new Tt(
            g != null ? g : "",
            Kz.ji(e.attributes.get("Type")),
            h != null ? h : "",
            f,
          ),
        );
      }
      return new St(c);
    }
  }
  Ai.g = "A6";
  Object.assign(Ai.prototype, { j: Ai });
  class ul extends fd {
    constructor(a) {
      super();
      this.o2a(a);
      this.JO = new H(0, 0, 0, 1);
      this.Gy = new H(0, 0, 0, 1);
      this.oq = new H(0, 0, 0, 1);
      this.Ml = new H(0, 0, 0, 1);
      this.gY = new H(0, 0, 0, 1);
      this.iY = new H(0, 0, 0, 1);
      this.hY = new H(0, 0, 0, 1);
      this.OO = new H(0, 0, 0, 1);
      this.RO = new H(0, 0, 0, 1);
      this.aH = new H(0, 0, 0, 1);
      this.Iu = new Vc("Camera");
      this.Jo = new Vc("Position");
      this.td = m.l();
      this.Ef = this.s$ = this.r$ = this.Lb = this.Ysa = this.ia = null;
      this.NJ = this.c2 = !1;
      this.W3 = 0;
      this.BR = !1;
      this.V5 = this.iU = 0;
      this.mw = null;
      this.Z5 = 0;
      this.lha = !1;
      this.jha = !0;
      this.Dv = new Ut();
    }
    rtb() {
      this.ia.visible(!0);
    }
    Pyb() {
      this.Iu.q4();
      var a = this.ia.Uf.rh.Vw;
      let b = this.ia.Uf.rh.vF;
      if (a != null && b != null) {
        let c = this.Iu.ma;
        a = wd.wea(a, b);
        c.x = a.x;
        c.y = a.y;
        c.z = a.z;
      }
    }
    wZa() {
      if (this.jha) {
        this.Jo.uk(0);
        var a = this.JO,
          b = this.Iu.rf;
        a.x = b.x;
        a.y = b.y;
        a.z = b.z;
        a = this.Gy;
        b = this.Iu.ma;
        a.x = b.x;
        a.y = b.y;
        a.z = b.z;
        a = this.oq;
        b = this.Jo.rf;
        a.x = b.x;
        a.y = b.y;
        a.z = b.z;
        a = this.Ml;
        b = this.Jo.ma;
        a.x = b.x;
        a.y = b.y;
        a.z = b.z;
        this.JO.z = this.Gy.z = this.oq.z = this.Ml.z = 0;
        a = this.gY;
        a.x = this.Gy.x - this.JO.x;
        a.y = this.Gy.y - this.JO.y;
        a.z = this.Gy.z - this.JO.z;
        a = this.iY;
        a.x = this.oq.x + this.gY.x;
        a.y = this.oq.y + this.gY.y;
        a.z = this.oq.z + this.gY.z;
        a = this.hY;
        a.x = this.iY.x - this.Ml.x;
        a.y = this.iY.y - this.Ml.y;
        a.z = this.iY.z - this.Ml.z;
        a = this.OO;
        a.x = this.Gy.x - this.Ml.x;
        a.y = this.Gy.y - this.Ml.y;
        a.z = this.Gy.z - this.Ml.z;
        a = this.OO;
        a.x *= 0.15;
        a.y *= 0.15;
        a.z *= 0.15;
        a = this.RO;
        a.x = this.hY.x + this.OO.x;
        a.y = this.hY.y + this.OO.y;
        a.z = this.hY.z + this.OO.z;
        a = this.RO;
        b = Math.sqrt(a.x * a.x + a.y * a.y);
        b > 200 &&
          ((a = this.RO),
          (b = Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z)),
          b > 0
            ? ((a.x /= b), (a.y /= b), (a.z /= b))
            : ((a.x = 0), (a.y = 0), (a.z = 0)),
          (a = this.RO),
          (a.x *= 200),
          (a.y *= 200),
          (a.z *= 200));
        a = this.Ml;
        b = this.RO;
        a.x += b.x;
        a.y += b.y;
        a.z += b.z;
        a = this.aH;
        a.x = this.Ml.x - this.oq.x;
        a.y = this.Ml.y - this.oq.y;
        a.z = this.Ml.z - this.oq.z;
        a = this.aH;
        b = Math.sqrt(a.x * a.x + a.y * a.y);
        b > 50 &&
          ((a = this.aH),
          (b = 50 / b),
          (a.x *= b),
          (a.y *= b),
          (a.z *= b),
          (a = this.Ml),
          (a.x = this.oq.x + this.aH.x),
          (a.y = this.oq.y + this.aH.y),
          (a.z = this.oq.z + this.aH.z));
        this.Jo.aB(this.Ml);
      }
    }
    w3a() {
      let a = this.Iu.ma,
        b = new H(this.r$.ma.x, this.r$.ma.y, 0, 1),
        c = new H(this.s$.ma.x, this.s$.ma.y, 0, 1);
      this.ia.Dl(this.Jo.ma, a, b, c, this.NJ ? this.Ef.currentScale : 0);
    }
    x3a() {
      if (this.BR && this.mw != null) {
        var a = Ld.Yub;
        let g = this.V5,
          h = this.V5 - this.iU;
        var b = a.zva.x,
          c = a.zva.y,
          d = a.q_.x,
          e = a.q_.y,
          f = e - d;
        Math.abs(f) < 1e-8
          ? (b = (b + c) * 0.5)
          : 50 >= e
            ? (b = c)
            : 50 <= d ||
              (f < 0 && ((f = d), (d = e), (e = f), (f = b), (b = c), (c = f)),
              (b += ((c - b) / (e - d)) * (50 - d)));
        c = a.mAa.x;
        d = a.mAa.y;
        e = a.q_.x;
        a = a.q_.y;
        f = a - e;
        Math.abs(f) < 1e-8
          ? (a = (c + d) * 0.5)
          : 50 >= a
            ? (a = d)
            : 50 <= e
              ? (a = c)
              : (f < 0 &&
                  ((f = e), (e = a), (a = f), (f = c), (c = d), (d = f)),
                (a = c + ((d - c) / (a - e)) * (50 - e)));
        this.ia.Yyb(
          (this.mw.Ava * b * Math.sin(this.mw.nAa * a * h) * (g - h)) / g,
          (this.mw.Bva * b * Math.sin(this.mw.oAa * a * h) * (g - h)) / g,
        );
      }
    }
    z3a() {
      if (this.NJ) {
        let a = Math.abs(this.Ef.tM - this.Ef.JS) / (this.Ef.oz * 0.5);
        this.Ef.currentFrame <= this.Ef.oz / 2
          ? ((this.Ef.currentScale -= a),
            this.Ef.currentScale < this.Ef.tM &&
              (this.Ef.currentScale = this.Ef.tM))
          : ((this.Ef.currentScale += a),
            this.Ef.currentScale > this.Ef.JS &&
              (this.Ef.currentScale = this.Ef.JS));
        this.Ef.currentFrame++;
      }
    }
    aob() {
      this.c2 && (this.W3 <= 0 && ((this.c2 = !1), this.Xob()), this.W3--);
      this.BR && (this.iU <= 0 && ((this.BR = !1), this.Ywb()), this.iU--);
      this.NJ && (this.Z5 <= 0 && (this.NJ = !1), this.Z5--);
    }
    Xob() {
      this.hh(1, null);
      this.Dv.isActive &&
        (this.ia.Nyb(this.Dv.ck, this.Dv.WDa, this.Dv.count),
        (this.Dv.isActive = !1));
    }
    Ywb() {
      this.V5 = 0;
      this.hh(2, null);
    }
    o2a(a) {
      this.go = new dd("Camera");
      a.od(this.go);
    }
    clear() {
      this.ia.clear();
      this.ia = null;
    }
    B() {
      this.go.B();
      this.go = null;
    }
    init(a) {
      this.ia = new Vt(this.go);
      this.Jo.hI = 0;
      this.Iu.hI = 0;
      this.Lb = a;
      this.ia.init(this.Lb);
      a = this.Lb.V9a();
      this.Jo.aB(a);
      this.Jo.Fla(a);
      this.Iu.aB(a);
      this.Iu.Fla(a);
      this.iU = 0;
      this.BR = !1;
      this.W3 = 0;
      this.c2 = !1;
      this.Z5 = 0;
      this.NJ = !1;
    }
    Ea() {
      if (this.lha) {
        let a = !0,
          b = 0,
          c = this.td;
        for (; b < c.length; ) c[b++].mp() == -1 && (a = !1);
        a && (this.rtb(), (this.lha = !1));
      }
      this.jha &&
        (this.aob(),
        this.Pyb(),
        this.wZa(),
        this.w3a(),
        this.x3a(),
        this.z3a());
    }
    Vla(a, b, c, d, e, f, g) {
      this.ia.dzb(a, b, c, e, f, g);
    }
    pvb(a, b) {
      var c;
      c == null && (c = 4);
      let d = this.Dv.ck;
      d.x = a.x;
      d.y = a.y;
      d.z = a.z;
      a = this.Dv.WDa;
      a.x = b.x;
      a.y = b.y;
      a.z = b.z;
      this.Dv.count = c;
      this.Dv.isActive = !0;
    }
    cG(a) {
      let b = this.Ysa;
      b != null && b.SPa(a);
      (Za.F().isVisible = a) ? (this.lha = a) : this.ia.visible(a);
    }
    Gnb(a) {
      this.ia.Uf.rh.ym(a);
      this.ia.z_(this.td[a]);
      m.ye(this.td, a);
    }
    Fnb(a) {
      a = this.td.indexOf(a);
      a != -1 && this.Gnb(a);
    }
    Jf(a, b, c, d) {
      d == null && (d = !1);
      let e = -1;
      this.td.push(a);
      this.ia.fQ(a);
      d && (b ? (this.r$ = a.pa.Ic(v.OC.Cba)) : (this.s$ = a.pa.Ic(v.OC.Cba)));
      this.ia != null && (e = this.ia.sXa(a.pa, this.Lb.W2, c));
      return e;
    }
    JL(a) {
      a != null &&
        ((this.mw = a),
        (this.c2 = !0),
        (this.W3 = a.mJa),
        (this.BR = !0),
        (this.V5 = this.iU = a.oz),
        this.hh(0, null));
    }
    Zvb(a) {
      a != null &&
        ((this.NJ = !0),
        (this.Ef = a),
        a.tM < 1 && (a.tM = 1),
        (a.JS = this.ia.MCa()),
        (a.currentScale = a.JS),
        (a.currentFrame = 0),
        (this.Z5 = a.oz));
    }
    r3a() {
      this.ia.Ynb();
    }
    t3a() {
      this.ia.fob();
    }
    CXa(a) {
      this.Ysa = a;
    }
    qzb() {
      this.ia.Vga = !this.ia.Vga;
    }
  }
  ul.g = "A7";
  ul.u = fd;
  Object.assign(ul.prototype, { j: ul });
