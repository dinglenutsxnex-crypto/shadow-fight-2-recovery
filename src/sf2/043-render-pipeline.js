// 043-render-pipeline.js
// Domain: combat  |  51 class(es)  |  tree root(s): Rd, Fv, Bh, Gv, Hv, Iv, qz, Cy, Bn, Z, wj, th, Ej, nv, Yo, lv, mv, Fj, Jv, Lv, Mv, Nv, Eh, Pv, Qv, Rv, Tv, Uv, Wv, ip, Xv, Yv, Zv, aw, bw, cw, ew, fw, hw, iw, jw, lw, mw, ow, pw, v
// Edit here. Run `npm run build` to reassemble the full bundle.
  class Rd {
    constructor() {
      this.hha = this.Lg = !1;
    }
    start() {
      this.hha = !0;
      this.Lg = !1;
    }
    stop() {
      this.hha = !1;
    }
    update() {}
  }
  Rd.g = "23F";
  Object.assign(Rd.prototype, { j: Rd });
  class dp extends Rd {
    constructor() {
      super();
    }
    start() {
      super.start();
      let a = this;
      nz.Ipb(ha.F(), function () {
        a.Lg = !0;
      });
    }
  }
  dp.g = "240";
  dp.u = Rd;
  Object.assign(dp.prototype, { j: dp });
  class ep extends Rd {
    constructor() {
      super();
    }
    start() {
      super.start();
      td.reb();
      Mc.F().OS();
      hd.F().fyb();
    }
    update() {
      super.update();
      this.Lg = !0;
    }
  }
  ep.g = "241";
  ep.u = Rd;
  Object.assign(ep.prototype, { j: ep });
  class Fv {
    constructor() {
      this.WZ = 0;
      this.aS = m.l();
      this.Lg = !1;
    }
    addModule(a) {
      m.cd(this.aS, a);
    }
    update() {
      if (!this.Lg)
        if (this.WZ < this.aS.length) {
          let a = this.aS[this.WZ];
          a.hha ? (a.Lg ? (a.stop(), this.WZ++) : a.update()) : a.start();
        } else this.Lg = !0;
    }
    T$a() {
      return this.aS.length == 0
        ? 100
        : Math.round((this.WZ / this.aS.length) * 100);
    }
  }
  Fv.g = "242";
  Object.assign(Fv.prototype, { j: Fv });
  class fp extends Rd {
    constructor() {
      super();
    }
    start() {
      super.start();
      ha.F().Vf("QUEST_EVENT_START_APPLICATION");
      this.upb();
    }
    stop() {
      super.stop();
    }
    upb() {
      v.Dmb();
      ha.F().VA("QUEST_EVENT_LOGIN_END") || this.Qpb();
    }
    Qpb() {
      let a = we.F();
      new qv(a);
      let b = this;
      a.RU(new qg(!0), function () {
        b.xpb();
      });
    }
    xpb() {
      let a = ha.F().ta;
      a.o0() == null && ((a.Nb = ib.empty()), (a.Vv = ""));
      ha.F().Vf("QUEST_EVENT_LOGIN_END");
      this.Lg = !0;
    }
  }
  fp.g = "243";
  fp.u = Rd;
  Object.assign(fp.prototype, { j: fp });
  class gp extends Rd {
    constructor() {
      super();
    }
    start() {
      super.start();
    }
    update() {
      td.leb();
      sa.load();
      P.Vdb();
      p.F().$db();
      id.ot().pya();
      Cc.F();
      this.Lg = !0;
    }
  }
  gp.g = "244";
  gp.u = Rd;
  Object.assign(gp.prototype, { j: gp });
  class hp extends Rd {
    constructor() {
      super();
    }
    start() {
      super.start();
      super.start();
      v.Kwb();
      v.Qwb();
      this.Lg = !0;
    }
  }
  hp.g = "245";
  hp.u = Rd;
  Object.assign(hp.prototype, { j: hp });
  class Bh {
    constructor() {
      this.value = 0;
      this.name = null;
    }
    parse(a) {
      let b = a.attributes.get("Name");
      this.name = b != null ? b : null;
      this.value = u.H(a.attributes.get("Value"));
    }
    static Gb(a, b) {
      let c = 0,
        d = a.length;
      for (; c < d; ) {
        let e = c++;
        if (a[e].name == b) return a[e].value;
      }
      return 0;
    }
    static Zjb(a) {
      let b = m.l();
      a = a.children;
      let c = 0;
      for (; c < a.length; ) {
        let d = new Bh();
        d.parse(a[c++]);
        b.push(d);
      }
      return b;
    }
  }
  Bh.g = "246";
  Object.assign(Bh.prototype, { j: Bh });
  class Gv {
    constructor() {
      this.kq = 0;
      this.name = this.Ok = "";
    }
    parse(a) {
      var b = a.attributes.get("Name");
      this.name = b != null ? b : "";
      b = a.attributes.get("Attribute");
      this.Ok = b != null ? b : "";
      this.kq = u.H(a.attributes.get("Base"));
    }
    Gb(a, b, c, d) {
      a = (a - b * c) / d;
      return (
        (a < 0 ? this.kq * Math.pow(2, a) : this.kq * (2 - Math.pow(2, -a))) | 0
      );
    }
  }
  Gv.g = "247";
  Object.assign(Gv.prototype, { j: Gv });
  class Hv {
    constructor() {
      this.mda = this.wha = this.Hva = 0;
    }
  }
  Hv.g = "248";
  Object.assign(Hv.prototype, { j: Hv });
  class Iv {
    constructor() {
      this.value = this.Pdb = 0;
    }
  }
  Iv.g = "249";
  Object.assign(Iv.prototype, { j: Iv });
  class qz {
    static W4a(a) {
      qd(a, "{") && (a = a.substring(1, a.length - 2));
      var b = Cb(a, "_") ? a.split("_") : a.split(",");
      a = K.parseInt(b[0]);
      a > 255 && (a = 255);
      let c = K.parseInt(b[1]);
      c > 255 && (c = 255);
      b = K.parseInt(b[2]);
      b > 255 && (b = 255);
      return new H(a / 255, c / 255, b / 255, 1);
    }
  }
  qz.g = "24A";
  class Cy {
    constructor() {
      this.Nb = null;
      this.type = this.Rfb = this.count = this.compare = 0;
    }
  }
  Cy.g = "24B";
  Object.assign(Cy.prototype, { j: Cy });
  class Bn {
    static zOa(a) {
      switch (a) {
        case 0:
          return "Preloader";
        case 2:
          return "Loader";
        case 3:
          return "Dojo";
        case 4:
          return "Shop";
        case 5:
          return "Map";
        case 6:
          return "Fight";
        case 7:
          return "Profile";
        case 8:
          return "GeneralMenu";
        case 9:
          return "Pvp";
        default:
          return "";
      }
    }
    static AOa(a) {
      switch (a) {
        case "Dojo":
          return 3;
        case "Fight":
          return 6;
        case "GeneralMenu":
          return 8;
        case "Loader":
          return 2;
        case "Map":
          return 5;
        case "Preloader":
          return 0;
        case "Profile":
          return 7;
        case "Pvp":
          return 9;
        case "Shop":
          return 4;
        default:
          return 11;
      }
    }
  }
  Bn.g = "24C";
  class Z {}
  Z.g = "24D";
  class wj {
    static L0(a) {
      switch (a) {
        case "Achievements":
          return 12;
        case "Armor":
          return 2;
        case "BattlePass":
          return 15;
        case "Cheat":
          return 9;
        case "Count":
          return 14;
        case "Free":
          return 7;
        case "Helm":
          return 3;
        case "Magic":
          return 5;
        case "Moves":
          return 11;
        case "Perks":
          return 10;
        case "QuestItems":
          return 13;
        case "RaidConsumable":
          return 8;
        case "RaidMapStage":
          return 17;
        case "Ranged":
          return 4;
        case "Ruby":
          return 6;
        case "StoryMapStage":
          return 16;
        case "Weapon":
          return 1;
        default:
          return 0;
      }
    }
    static sfa(a) {
      switch (a) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
          return 4;
        case 10:
        case 11:
        case 12:
        case 13:
        case 15:
          return 7;
        case 16:
        case 17:
          return 5;
        default:
          return 11;
      }
    }
  }
  wj.g = "24E";
  class th {
    static getName(a) {
      switch (a) {
        case 1:
          return "Weapon";
        case 2:
          return "Armor";
        case 3:
          return "Helm";
        case 4:
          return "Ranged";
        case 5:
          return "Magic";
        case 6:
          return "Ruby";
        case 7:
          return "Free";
        case 8:
          return "RaidConsumable";
        case 9:
          return "Cheat";
        case 10:
          return "Perks";
        case 11:
          return "Moves";
        case 12:
          return "Achievements";
        case 13:
          return "QuestItems";
        case 14:
          return "Count";
        case 15:
          return "BattlePass";
        case 16:
          return "StoryMapStage";
        case 17:
          return "RaidMapStage";
        default:
          return "Default";
      }
    }
  }
  class Ej {
    constructor(a, b, c, d, e, f, g, h, k, l) {
      k == null && (k = 0);
      f == null && (f = -1);
      e == null && (e = 0);
      d == null && (d = "");
      c == null && (c = "");
      b == null && (b = "");
      a == null && (a = "");
      this.offsetX = this.offsetY = 0;
      this.$I = Z.sc;
      this.UC = this.nha = !1;
      this.Kba = this.fontSize = -1;
      this.Lba = this.font = "";
      this.rn = "0";
      this.text = a;
      this.NC = b;
      this.item = c;
      this.Mf = d;
      this.id = f;
      this.Mc = e;
      this.Cu = g;
      this.J4 = l;
      this.Me = h;
      this.contentType = k;
    }
    gNa() {
      if (this.item != "" || this.Mf != "") {
        let a = p.vf(this.item),
          b = ye.F().X8a(this.Mf);
        this.Mc = a == null ? (b == null ? 0 : b.Sz()) : v.eJ(a.Dh);
        this.UC = !0;
        this.Cu = a;
        this.J4 = b;
        if (this.Mc == 0) return !1;
      }
      return !0;
    }
    static a5a(a) {
      let b = new Ej();
      b.rn = a.rn;
      b.text = a.text;
      b.NC = a.NC;
      b.item = a.item;
      b.Mf = a.Mf;
      b.id = a.id;
      b.Mc = a.Mc;
      b.Cu = a.Cu;
      b.J4 = a.J4;
      a.Me != null && (b.Me = Gj.from(a.Me));
      b.UC = a.UC;
      b.contentType = a.contentType;
      b.fontSize = a.fontSize;
      b.font = a.font;
      b.$I = a.$I;
      b.Lba = a.Lba;
      b.Kba = a.Kba;
      b.nha = a.nha;
      b.offsetX = a.offsetX;
      b.offsetY = a.offsetY;
      return b;
    }
  }
  Ej.g = "24F";
  Object.assign(Ej.prototype, { j: Ej });
  class nv {
    constructor(a, b, c, d, e, f, g, h, k, l, n, q, r, t) {
      t == null && (t = 0);
      r == null && (r = 840);
      q == null && (q = !1);
      n == null && (n = !0);
      l == null && (l = "EButtonDark");
      k == null && (k = "EButtonWhite");
      h == null && (h = !1);
      g == null && (g = "CANCEL");
      f == null && (f = "");
      this.i4 = a;
      this.title = b;
      this.tk = c;
      this.Jv = d;
      this.ge = e;
      this.Wfb = f;
      this.FZa = g;
      this.Vfb = k;
      this.EZa = l;
      this.scrollWidth = r;
      this.Oha = t;
      this.mcb = h;
      this.jg = n;
      this.CY = q;
    }
  }
  nv.g = "250";
  Object.assign(nv.prototype, { j: nv });
  class Yo {
    constructor(a, b, c, d, e, f, g) {
      this.X4 = this.A2 = "EButtonBeige";
      this.zeb = a;
      this.title = b;
      this.jka = c;
      d != null && (this.X4 = d);
      this.tha = e;
      f != null && (this.A2 = f);
      this.ge = g;
    }
  }
  Yo.g = "251";
  Object.assign(Yo.prototype, { j: Yo });
  class lv {
    constructor(a, b, c, d, e, f, g) {
      g == null && (g = !1);
      e == null && (e = 0);
      c == null && (c = 0);
      b == null && (b = 0);
      this.action = a;
      this.value = b;
      this.Yzb = c;
      this.ge = d;
      this.U2a = e;
      this.KS = f;
      this.IL = g;
    }
  }
  lv.g = "252";
  Object.assign(lv.prototype, { j: lv });
  class mv {
    constructor(a, b, c, d) {
      this.title = a;
      this.content = b;
      this.Xy = d;
    }
  }
  mv.g = "253";
  Object.assign(mv.prototype, { j: mv });
  class Fj {
    constructor(
      a,
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      k,
      l,
      n,
      q,
      r,
      t,
      x,
      z,
      A,
      C,
      B,
      D,
      F,
      M,
      Q,
      U,
    ) {
      this.tZ = null;
      this.nNa = this.CY = this.IL = this.uZ = !1;
      this.i4 = a;
      this.title = b;
      this.tk = c;
      this.Jv = d;
      this.ratio = e;
      this.jka = f;
      this.tha = g;
      this.efb = h;
      this.X4 = k;
      this.A2 = l;
      this.cfb = n;
      this.cpb = q;
      this.Ldb = r;
      this.dfb = t;
      x != null && (this.nNa = x);
      z != null && (this.CY = z);
      A != null && (this.IL = A);
      C != null && (this.uZ = C);
      this.qvb = B;
      D != null && (this.tZ = D);
      this.e1a = F;
      this.Oha = M;
      this.bu = Q;
      this.ge = U;
    }
  }
  Fj.g = "254";
  Object.assign(Fj.prototype, { j: Fj });
  class Jv {
    constructor() {
      this.yI = m.l();
    }
    parse(a) {
      this.yI.length = 0;
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        let c = new Kv(a[b++]);
        this.yI.push(c);
      }
    }
    wD(a) {
      let b = 0,
        c = this.yI;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.name == a) return d;
      }
      return null;
    }
    o5a(a) {
      let b = 0,
        c = this.yI;
      for (; b < c.length; ) {
        let d = 0,
          e = c[b++].My;
        for (; d < e.length; ) {
          let f = e[d];
          ++d;
          if (f.name == a) return f;
        }
      }
      return null;
    }
    UZa(a) {
      let b = m.l(),
        c = 0;
      for (; c < a.length; ) {
        var d = a[c];
        ++c;
        var e = v.zv.wD(d);
        d = p.o.Ai.wD(d);
        if (e == null || d == null) continue;
        d = d.DB;
        let f = 0;
        for (e = e.My; f < e.length; ) {
          let g = e[f];
          ++f;
          v.ccb(g.name) || b.push(new Ca(g, d));
          if (d < g.counter) break;
        }
      }
      return b;
    }
    w5a() {
      let a = m.l(),
        b = p.o.Ai.pC,
        c = 0,
        d = b.length;
      for (; c < d; ) {
        let f = b[c++];
        var e = f.ab();
        e = v.zv.wD(e);
        if (e == null) continue;
        e = e.My;
        let g = 0,
          h = e.length;
        for (; g < h; ) {
          let k = e[g++];
          f.DB >= k.counter && a.push(k);
        }
      }
      return a;
    }
  }
  Jv.g = "255";
  Object.assign(Jv.prototype, { j: Jv });
  class Lv {
    constructor() {
      this.A4 = new Map();
      this.y_ = new Map();
      this.m3 = new Map();
      this.cz = new Map();
    }
    parse(a) {
      X.clear(this.cz);
      X.clear(this.m3);
      X.clear(this.y_);
      X.clear(this.A4);
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        let c = new Kt(a[b++]);
        this.cz.set(c.name, c);
        switch (c.cya) {
          case 0:
            this.y_.set(c.name, c);
            break;
          case 1:
            this.m3.set(c.name, c);
            break;
          case 2:
            this.A4.set(c.name, c);
            break;
          case 3:
            (this.y_.set(c.name, c), this.m3.set(c.name, c));
        }
      }
    }
    Vz() {
      let a = this.cz.values(),
        b = a.next();
      for (; !b.done; ) {
        let c = b.value;
        b = a.next();
        c.Vz();
      }
    }
    o6a(a) {
      switch (a) {
        case 0:
          return this.y_;
        case 2:
          return this.A4;
        default:
          return this.m3;
      }
    }
    p6a(a) {
      return a != null && a.type == "FightRaid"
        ? this.A4
        : this.o6a(p.o.$h ? 0 : 1);
    }
  }
  Lv.g = "256";
  Object.assign(Lv.prototype, { j: Lv });
  class Mv {
    constructor() {
      this.JV = new Map();
    }
    parse(a) {
      X.clear(this.JV);
      a = a.A("EnchantmentsCountExclusion");
      if (a != null) {
        a = a.children;
        let c = 0;
        for (; c < a.length; ) {
          let d = a[c++];
          if (d.name == "Item") {
            var b = d.attributes.get("Name");
            b = b != null ? b : null;
            X.Xa(this.JV, b) ||
              this.JV.set(b, u.I(d.attributes.get("EnchantmentsCount")));
          }
        }
      }
    }
    JOa(a, b) {
      return X.wh(this.JV, a, b);
    }
  }
  Mv.g = "257";
  Object.assign(Mv.prototype, { j: Mv });
  class Nv {
    constructor() {
      this.K7 = m.l();
    }
    parse(a) {
      this.K7.length = 0;
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        var c = a[b++];
        let d = new Ov();
        d.yBa(c.A("AttributeLimits"), d.uba);
        d.yBa(c.A("ItemLimits"), d.oha);
        let e = c.attributes.get("Name");
        d.name = e != null ? e : null;
        d.ek = u.H(c.attributes.get("Power"));
        d.min = u.H(c.attributes.get("Min"));
        c = c.attributes.get("Type");
        d.type = c != null ? c : "Linear";
        this.K7.push(d);
      }
    }
    M5a(a) {
      return m.find(this.K7, function (b) {
        return b.name == a;
      });
    }
  }
  Nv.g = "258";
  Object.assign(Nv.prototype, { j: Nv });
  class Eh {
    constructor() {
      this.Bc = 0;
      this.Ok = null;
    }
    parse(a) {
      let b = a.attributes.get("Attribute");
      this.Ok = b != null ? b : "COM";
      this.Bc = u.H(a.attributes.get("Base"));
    }
  }
  Eh.g = "259";
  Object.assign(Eh.prototype, { j: Eh });
  class Pv {
    constructor() {
      this.iwa = this.CGa = this.maxWidth = 0;
      this.Cba = null;
    }
    parse(a) {
      a = a.A("CameraSettings");
      a.attributes.get("CameraNode");
      let b = a.attributes.get("BindingNode");
      this.Cba = b != null ? b : "NPivot";
      this.iwa = u.H(a.attributes.get("BindingLength"));
      this.maxWidth = u.H(a.attributes.get("MaxWidth"), -1);
      this.CGa = u.H(a.attributes.get("MaxWidthDelta"));
    }
  }
  Pv.g = "25A";
  Object.assign(Pv.prototype, { j: Pv });
  class Qv {
    constructor() {
      this.us = new Ca(0, null);
      this.yH = new Ca(0, null);
    }
    parse(a) {
      var b = a.A("Probability");
      this.yH.first = u.H(b.attributes.get("Base"));
      b = b.attributes.get("Attribute");
      this.yH.second = b != null ? b : "";
      a = a.A("Damage");
      this.us.first = u.H(a.attributes.get("Base"));
      a = a.attributes.get("Attribute");
      this.us.second = a != null ? a : "";
    }
    K8a(a) {
      let b = new ja(0);
      a.parameters.attributes.get(this.yH.second, b)
        ? ((a = this.yH.second), (a = !(a == null || a == "")))
        : (a = !1);
      return a ? this.yH.first * b.G : this.yH.first;
    }
  }
  Qv.g = "25B";
  Object.assign(Qv.prototype, { j: Qv });
  class Rv {
    constructor() {
      this.yba = m.l();
    }
    parse(a) {
      this.yba.length = 0;
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        var c = a[b++];
        c.name == "Currency" && ((c = new Sv(c)), this.yba.push(c));
      }
    }
    CQ(a) {
      let b = 0,
        c = this.yba;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.Lj == a) return d.CQ(p.o.bb());
      }
      return 0;
    }
  }
  Rv.g = "25C";
  Object.assign(Rv.prototype, { j: Rv });
  class Tv {
    constructor() {
      this.Ol = m.l();
    }
    parse(a) {
      this.Ol.length = 0;
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        let c = hg.Qd(a[b++]);
        this.Ol.push(c);
      }
    }
    Xua(a) {
      debugger;
      this.Ol.push(a);
    }
    AD(a) {
      debugger;
      let b = 0,
        c = this.Ol;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.name == a) return d;
      }
      return null;
    }
  }
  Tv.g = "25D";
  Object.assign(Tv.prototype, { j: Tv });
  class Uv {
    constructor() {
      this.items = m.l();
    }
    parse(a) {
      this.items.length = 0;
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        let c = new Vv(a[b++]);
        this.items.push(c);
      }
    }
    $Ba(a) {
      debugger;
      return m.gn(this.items, function (b) {
        return b.name == a;
      });
    }
  }
  Uv.g = "25E";
  Object.assign(Uv.prototype, { j: Uv });
  class Wv {
    constructor() {
      this.Cda = m.l();
    }
    parse(a) {
      this.Cda.length = 0;
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        let c = new im();
        c.parse(a[b++]);
        this.Cda.push(c);
      }
    }
  }
  Wv.g = "25F";
  Object.assign(Wv.prototype, { j: Wv });
  class ip {
    constructor() {
      this.QY = new ud();
    }
    parse(a) {
      this.QY.clear();
      a = a.attributes.entries();
      let b = a.next();
      for (; !b.done; ) {
        let c = b.value;
        b = a.next();
        this.QY.set(c[0], u.I(c[1]));
      }
    }
  }
  ip.g = "260";
  Object.assign(ip.prototype, { j: ip });
  class Xv {
    constructor() {
      this.thresholds = m.l();
    }
    parse(a) {
      this.thresholds.length = 0;
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        let c = a[b++];
        this.thresholds.push(
          new Ca(u.I(c.attributes.get("Level")), u.I(c.attributes.get("Exp"))),
        );
      }
    }
  }
  Xv.g = "261";
  Object.assign(Xv.prototype, { j: Xv });
  class Yv {
    constructor() {
      this.rob = m.l();
    }
    parse(a) {
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        let c = a[b++];
        c.name == "RerollPrice" &&
          this.rob.push(u.I(c.attributes.get("Value")));
      }
    }
  }
  Yv.g = "262";
  Object.assign(Yv.prototype, { j: Yv });
  class Zv {
    constructor() {
      this.XM = m.l();
    }
    N7a(a) {
      let b = 0,
        c = this.XM.length;
      for (; b < c; ) {
        let d = b++;
        if (this.XM[d].name == a) return this.XM[d];
      }
      return null;
    }
    parse(a) {
      this.XM.length = 0;
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        let c = a[b++],
          d = new $v();
        this.XM.push(d);
        d.parse(c);
      }
    }
    GQ(a, b) {
      a = this.N7a(a);
      if (a == null) return 0;
      if (b == null) return a.Bc;
      let c = new ja(0);
      return b.attributes.get(a.Ok, c) ? a.Bc * c.G : a.Bc;
    }
    t7a(a) {
      return this.u7a(a.parameters);
    }
    p8a(a) {
      return this.MBa(a.parameters);
    }
    D6a(a) {
      return this.XAa(a.parameters);
    }
    u7a(a) {
      return this.GQ("InitialCharge", a);
    }
    MBa(a) {
      return this.GQ("PainRecharge", a);
    }
    q8a() {
      return this.GQ("PainRecharge");
    }
    XAa(a) {
      return this.GQ("DamageRecharge", a);
    }
    E6a() {
      return this.GQ("DamageRecharge");
    }
  }
  Zv.g = "263";
  Object.assign(Zv.prototype, { j: Zv });
  class aw {
    constructor() {
      this.v8 = m.l();
    }
    A6a(a) {
      let b = 0,
        c = this.v8.length;
      for (; b < c; ) {
        let d = b++;
        if (this.v8[d].name == a) return this.v8[d];
      }
      return null;
    }
  }
  aw.g = "264";
  Object.assign(aw.prototype, { j: aw });
  class bw {
    constructor() {
      this.nr = m.l();
    }
    parse(a) {
      this.nr.length = 0;
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        var c = a[b++];
        c.name == "Level" && ((c = new jp(c)), this.nr.push(c));
      }
    }
    CQ(a) {
      let b = 0,
        c = this.nr;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (a >= d.min && a <= d.max) return d.value;
      }
      return 0;
    }
  }
  bw.g = "265";
  Object.assign(bw.prototype, { j: bw });
  class cw {
    constructor() {
      this.types = m.l();
    }
    parse(a) {
      this.types.length = 0;
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        let c = new dw();
        c.parse(a[b++]);
        this.types.push(c);
      }
    }
    Gb(a) {
      let b = 0,
        c = this.types;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.sdb(a)) return d.value;
      }
      return this.types.length > 0 ? this.types[0].value : 0;
    }
  }
  cw.g = "266";
  Object.assign(cw.prototype, { j: cw });
  class ew {
    constructor() {
      this.KPa = m.l();
      this.cT = m.l();
      this.a4 = m.l();
    }
    parse(a) {
      this.a4.length = 0;
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        let c = new Be();
        c.parse(a[b++]);
        c.mEa = !1;
        this.a4.push(c);
      }
    }
    sPa(a) {
      this.cT.length = 0;
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        var c = a[b++],
          d = c.attributes.get("Name"),
          e = d != null ? d : "";
        if (e != null && e != "") {
          d = u.I(c.attributes.get("Level"));
          var f = c.attributes.get("Description");
          f = f != null ? f : "";
          var g = c.attributes.get("Move");
          g = g != null ? g : "";
          e = this.ln(e);
          if (e != null)
            if (c.children.length > 0) {
              var h = this.B0a(e, c);
              h != e && this.Cja(h, d, f, g);
              c = c.children;
              for (h = 0; h < c.length; ) {
                let k = c[h++];
                k.name == "UpgradeLevel" && this.Cja(this.C0a(e, k), d, f, g);
              }
            } else this.Cja(e, d, f, g);
        }
      }
    }
    Cja(a, b, c, d) {
      c != null && c != "" && (a.description = c);
      a.hidden = !1;
      a.level = b;
      a.move = d;
      this.cT.push(a);
    }
    B0a(a, b) {
      let c = a,
        d = b.A("Set");
      b = b.A("RatingEvaluation");
      if (d != null || b != null) {
        debugger;
        c = a.clone(d, b);
      }
      return c;
    }
    C0a(a, b) {
      a = a.clone(b.A("Set"), b.A("RatingEvaluation"));
      var c = b.attributes.get("Description");
      c = c != null ? c : "";
      b = u.I(b.attributes.get("Value"));
      c != null && c != "" && (a.description = c);
      a.Vc = b;
      return a;
    }
    ln(a) {
      let b = 0,
        c = this.a4;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.name == a) return d;
      }
      return null;
    }
    J9a() {
      debugger;
      return null;
    }
    M8a() {
      debugger;
      return null;
    }
  }
  ew.g = "267";
  Object.assign(ew.prototype, { j: ew });
  class fw {
    constructor() {
      this.hwa = 0;
      this.ada = m.l();
      this.xb = m.l();
    }
    parse(a) {
      this.ada.length = 0;
      for (var b = a.A("Intervals").children, c = 0; c < b.length; ) {
        var d = b[c++].attributes.get("Name");
        this.xb.push(d != null ? d : "");
      }
      b = a.A("Delays").children;
      for (c = 0; c < b.length; ) {
        var e = b[c++];
        d = new gw();
        let f = e.attributes.get("Animation");
        d.animation = f != null ? f : "";
        e = $f(e);
        d.min = e.first;
        d.max = e.second;
        this.ada.push(d);
      }
      this.hwa = u.H(a.A("BeginnerCheat").attributes.get("Treshold"));
    }
    Jcb(a) {
      return this.xb.includes(a);
    }
    H6a(a) {
      let b = 0,
        c = this.ada;
      for (; b < c.length; ) {
        ++b;
        let d = 0,
          e = a;
        for (; d < e.length; ) d++;
      }
      return 0;
    }
  }
  fw.g = "268";
  Object.assign(fw.prototype, { j: fw });
  class hw {
    constructor() {
      this.Bp = "Value";
      this.rk = m.l();
      this.oJa = this.hp = this.Wi = this.Lya = this.Ub = 0;
    }
    parse(a) {
      this.Lya = u.H(a.A("DefaultPrizeBaseFactor").attributes.get(this.Bp));
      this.oJa = u.H(a.A("Perfect").attributes.get(this.Bp));
      this.hp = u.H(a.A("FirstStrike").attributes.get(this.Bp));
      this.Wi = u.H(a.A("ComboCount").attributes.get(this.Bp));
      a.A("HeadShot").attributes.get(this.Bp);
      this.Ub = u.H(a.A("Shock").attributes.get(this.Bp));
      this.Bkb(a);
    }
    Bkb(a) {
      this.rk.length = 0;
      a = a.A("Styles");
      this.rk.push(u.H(a.A("Turtle").attributes.get(this.Bp)));
      this.rk.push(u.H(a.A("Hard").attributes.get(this.Bp)));
      this.rk.push(u.H(a.A("Brutal").attributes.get(this.Bp)));
      this.rk.push(u.H(a.A("Agressive").attributes.get(this.Bp)));
      this.rk.push(u.H(a.A("Crazy").attributes.get(this.Bp)));
      this.rk.push(u.H(a.A("Fantastic").attributes.get(this.Bp)));
    }
  }
  hw.g = "269";
  Object.assign(hw.prototype, { j: hw });
  class iw {
    constructor() {
      this.WPa = this.pw = this.lR = this.mR = 0;
      this.Fu = this.VPa = null;
      this.$Fa = 0;
      this.CDa = null;
      this.DDa = 0;
      this.vya = null;
      this.threshold = this.kAa = this.wya = 0;
    }
    parse(a) {
      this.threshold = u.H(a.A("Treshold").attributes.get("Value"));
      this.kAa = u.H(a.A("FrameReduction").attributes.get("Value"));
      this.$Fa = u.I(a.A("LooseningDelay").attributes.get("Frames"));
      var b = a.A("Weapon").attributes.get("Name");
      this.Fu = b != null ? b : "";
      b = a.A("SetAttribute").attributes.get("Name");
      this.VPa = b != null ? b : "";
      this.WPa = u.I(a.A("SetAttribute").attributes.get("Value"));
      this.wya = u.H(a.A("CriticalHitChance").attributes.get("Base"));
      b = a.A("CriticalHitChance").attributes.get("Attribute");
      this.vya = b != null ? b : "";
      this.DDa = u.H(a.A("HeadHitChance").attributes.get("Base"));
      b = a.A("HeadHitChance").attributes.get("Attribute");
      this.CDa = b != null ? b : "";
      this.pw = u.H(a.A("Impulse").attributes.get("X"));
      this.lR = u.H(a.A("Impulse").attributes.get("Y"));
      this.mR = u.H(a.A("Impulse").attributes.get("Z"));
    }
  }
  iw.g = "26A";
  Object.assign(iw.prototype, { j: iw });
  class jw {
    constructor() {
      this.sca = m.l();
    }
    parse(a) {
      this.sca.length = 0;
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        var c = a[b++];
        let e = new kw();
        var d = c.attributes.get("Type");
        e.type = d != null ? d : null;
        d = c.attributes.get("Screen");
        e.screen = d != null ? d : null;
        c = c.attributes.get("Name");
        e.pE = c != null ? c : null;
        this.sca.push(e);
      }
    }
    m8a(a) {
      return m.find(this.sca, function (b) {
        return b.screen == a;
      });
    }
  }
  jw.g = "26B";
  Object.assign(jw.prototype, { j: jw });
  class lw {
    constructor() {
      this.ZDa = new Map();
    }
    Tsb(a, b) {
      this.ZDa.set(a, b);
    }
    p9a(a) {
      let b = -1,
        c = this.ZDa.entries(),
        d = c.next();
      for (; !d.done; ) {
        let e = d.value;
        d = c.next();
        if (e[0] == a) {
          b = e[1];
          break;
        }
      }
      a == "SHOP_RUBY_SLIDER" ? (b = 4) : a == "SHOP_FREE_SLIDER" && (b = 1);
      return b;
    }
  }
  lw.g = "26C";
  Object.assign(lw.prototype, { j: lw });
  class mw {
    constructor() {
      this.jOa = this.Hya = this.nJa = 0;
      this.rk = m.l();
    }
    vfa(a) {
      return this.rk.length > a ? this.rk[a] : null;
    }
    u9a(a) {
      a = this.vfa(a);
      return a != null ? a.iOa : 0;
    }
    parse(a) {
      this.rk.length = 0;
      var b = a.attributes.get("StylePerHit");
      b != null && (this.jOa = u.H(b));
      b = a.attributes.get("DecreaseSpeed");
      b != null && (this.Hya = u.H(b));
      b = a.attributes.get("Penalty");
      b != null && (this.nJa = u.H(b));
      a = a.children;
      for (b = 0; b < a.length; ) {
        var c = a[b++];
        let e = new nw();
        var d = c.attributes.get("Name");
        e.name = d != null ? d : "";
        e.iOa = u.H(c.attributes.get("StyleMultiplier"));
        d = c.attributes.get("TextImage");
        e.oma = d != null ? d : "";
        c = c.attributes.get("BarImage");
        e.awa = c != null ? c : "";
        this.rk.push(e);
      }
    }
  }
  mw.g = "26D";
  Object.assign(mw.prototype, { j: mw });
  class ow {
    constructor() {
      this.qU = m.l();
      this.h_ = 0;
      this.Zca = "";
    }
    parse(a) {
      var b = a.A("TutorialWeapon").attributes.get("Name");
      this.Zca = b != null ? b : "WEAPON_KNIVES";
      a.A("TutorialBoss").attributes.get("Name");
      a.A("TutorialTournament").attributes.get("Name");
      this.h_ = u.H(a.A("TutorialStepTimeout").attributes.get("Value"));
      a = a.A("StepsNames").children;
      for (b = 0; b < a.length; ) {
        var c = a[b++];
        c.name == "Step" &&
          ((c = c.attributes.get("Name")), this.qU.push(c != null ? c : null));
      }
    }
    pdb(a) {
      return this.qU.includes(a);
    }
  }
  ow.g = "26E";
  Object.assign(ow.prototype, { j: ow });
  class pw {
    constructor() {
      this.attributes = m.l();
      this.RY = new Map();
    }
    parse(a) {
      this.attributes.length = 0;
      X.clear(this.RY);
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        var c = a[b++];
        let e = new kp();
        var d = c.attributes.get("Name");
        e.name = d != null ? d : null;
        d = c.attributes.get("Icon");
        e.icon = d != null ? d : null;
        d = c.attributes.get("Alias");
        e.Eg = d != null ? d : null;
        e.ck = u.I(c.attributes.get("Point"));
        d = c.attributes.get("Format");
        e.format = d != null ? d : null;
        e.hidden = u.ka(c.attributes.get("Hidden"));
        e.Ula = u.ka(c.attributes.get("ShopHidden"));
        e.SJa = u.ka(c.attributes.get("ProfileHidden"));
        c = c.attributes.get("BarScale");
        e.iP = c != null ? c : null;
        e.format == "Percent" && (e.format = "%");
        this.attributes.push(e);
        this.RY.set(e.name, e);
      }
    }
    A5a(a) {
      return X.Xa(this.RY, a) ? this.RY.get(a) : null;
    }
  }
  pw.g = "26F";
  Object.assign(pw.prototype, { j: pw });
  class v {
    static qn() {
      return v.xO;
    }
    static dU(a) {
      v.xO = a;
      v.Cia.$(0, a);
    }
    static oDa() {
      return v.Xsa;
    }
    static Cub(a) {
      v.Xsa = a;
    }
    static PCa() {
      return v.kqa;
    }
    static Rtb(a) {
      v.kqa = a;
    }
    static OCa() {
      return v.jqa;
    }
    static Qtb(a) {
      v.jqa = a;
    }
    static $9a() {
      return v.lqa;
    }
    static Stb(a) {
      v.lqa = a;
    }
    static ECa() {
      return v.Ypa;
    }
    static Ltb(a) {
      v.Ypa = a;
    }
    static fw() {
      return v.tV;
    }
    static Ktb(a) {
      v.tV = a;
    }
    static Q9a() {
      return v.npa;
    }
    static Ctb(a) {
      v.npa = a;
    }
    static m$a() {
      return v.mra;
    }
    static cub(a) {
      v.mra = a;
    }
    static h1() {
      let a = v.KR.thresholds.length;
      return a == 0 ? 0 : v.KR.thresholds[a - 1].first;
    }
    static q5a(a, b) {
      let c = null;
      var d = v.zv.wD(a.name);
      if (d == null) return null;
      var e = p.o.Ai.wD(a.name);
      e = e != null ? e.DB : 0;
      d = d.My;
      b = e + b;
      let f = 0,
        g = d.length;
      for (; f < g; ) {
        let h = d[f++];
        if (h.counter >= e && h.counter <= b && !h.completed)
          ((c = h), a.xEa ? v.t7.push(h) : (h.completed = !0));
        else if (h.counter >= e && h.counter >= b) break;
      }
      return c;
    }
    static Ypb(a) {
      let b = p.o,
        c = m.l(),
        d = 0,
        e = a.length;
      for (; d < e; ) {
        let f = d++,
          g = a[f].first;
        a[f].second >= g.counter && b.Ai.Cca(g, !1);
        c.push(g.name);
      }
    }
    static ccb(a) {
      let b = 0,
        c = p.o.Ai.pO;
      for (; b < c.length; ) if (c[b++].ab() == a) return !0;
      return !1;
    }
    static Dmb() {
      let a = 0,
        b = v.zv.w5a();
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        p.o.Ai.aCa(c.name) == null && (p.o.Ai.Cca(c, !1), p.o.Ai.$1a(c.name));
      }
    }
    static hEa(a) {
      return (
        m.find(v.Bv, function (b) {
          return b.name == a;
        }) != null
      );
    }
    static WZa() {
      if (
        m.find(v.Bv, function (a) {
          a = a.name;
          return a != null ? a == "" : !0;
        }) != null
      ) {
        let a = 0,
          b = v.Bv;
        for (; a < b.length; ) a++;
      }
    }
    static gdb(a) {
      return Da.iT(a * 100);
    }
    static Lz(a) {
      let b = v.KQ(a.ct);
      return a.Lz(p.o.Ca.clone(), b);
    }
    static vNa(a) {
      let b = p.o.$h;
      return !((b && a.VP == 0) || (!b && a.VP == 1) || a.VP == 2);
    }
    static DAa(a, b, c, d, e, f, g, h) {
      let k = Bh.Gb(v.Bv, e),
        l = 0 - k,
        n = 0,
        q = 0,
        r = new ja(0);
      c.attributes.get(e, r);
      e = r.G;
      let t = -3.4028234663852886e38,
        x = m.l();
      Di.u5a((a ? c : b).PY, x);
      c = 0;
      let z = d.length;
      for (; c < z; ) {
        var A = c++,
          C = d[A].first;
        r.G = 0;
        b.attributes.get(C, r);
        var B = r.G + d[A].second;
        A = Bh.Gb(v.Bv, C);
        let W;
        if (a) {
          W = 3.4028234663852886e38;
          for (var D = 0, F = x; D < F.length; ) {
            var M = F[D];
            ++D;
            if (v.vNa(M)) continue;
            var Q = M.fp;
            M = M.shift;
            var U = (B - e) * (1 - Q) + (A - k) * Q - M;
            U < W && ((W = U), (n = Q), (q = M));
          }
        } else
          for (W = -3.4028234663852886e38, D = 0, F = x; D < F.length; ) {
            M = F[D];
            ++D;
            if (v.vNa(M)) continue;
            Q = M.fp;
            M = M.shift;
            U = (B - e) * (1 - Q) + (A - k) * Q + M;
            W < U && ((W = U), (n = Q), (q = M));
          }
        C = v.nfb.A6a(C);
        C != null &&
          W >= C.ffb &&
          a == (C.yYa == "Player") &&
          ((B = v.IP),
          (D = C.Bfb),
          (W =
            (Math.log((1 - (1 - D) * Math.pow(C.x2a, -W / B)) / D) /
              Math.log(2)) *
            B));
        t < W && ((t = W), (l = A - k));
      }
      f.G = l;
      g.G = n;
      h.G = q;
      return t;
    }
    static sea(a, b, c, d, e) {
      let f = new ja(0),
        g = new ja(0),
        h = new ja(0),
        k = v.DAa(a, b, c, d, e, f, g, h);
      k > 10 && (k = v.DAa(a, b, c, d, e, f, g, h));
      return v.F5a(k);
    }
    static F5a(a) {
      return Math.pow(2, a / v.IP);
    }
    static d7a(a) {
      let b = 0;
      for (; b < a.length; ) {
        var c = a[b];
        ++b;
        for (c = p.F().ofa(c, c.number); 0 < c.length; ) return v.gla(c[0]);
      }
      return null;
    }
    static KQ(a) {
      let b = m.l(),
        c = 0;
      for (; c < a.length; ) {
        var d = a[c];
        ++c;
        let e = 0;
        for (d = p.F().ofa(d, d.number); e < d.length; ) b.push(v.gla(d[e++]));
      }
      return b;
    }
    static hw() {
      let a = p.Y$a(),
        b = a.Uea(),
        c = p.o,
        d = 0,
        e = b.length;
      for (; d < e; ) {
        let g = d++;
        var f = b[g];
        f != null &&
          ((f = c.xa.Rj(f.name)), f != null && f.yW && a.ik(b[g].type, f.kw()));
      }
      v.gla(a);
      a.Bu = !0;
      a.Gj = !1;
      a.qb = !0;
      return a;
    }
    static gla(a) {
      a.Rf == null && (a.Rf = p.items.$b(v.Nya));
      a.qg = 0;
      a.qb = !1;
      let b = a.eB;
      a.ao = b > 0 ? b : 1;
      a.un = !1;
      a.yJ = !0;
      a.Qob();
      a.iM();
      a.Hm();
      return a;
    }
    static LU() {
      za.instance != null &&
        (za.instance.LU(), za.instance.vvb(xa.F().Td.Wf == 3 && p.o.C$a()));
    }
    static Cha(a) {
      a == null && (a = !0);
      xa.F().ULa(!0, a);
    }
    static Dma() {
      xa.F().ULa(!1);
    }
    static BD(a) {
      if (a == null) return null;
      a = a.Oz();
      if (a == null || a.length == 0) return null;
      let b = 0;
      for (; b < a.length; ) {
        let c = a[b];
        ++b;
        if (c.status == 2) return c;
      }
      return null;
    }
    static J7a(a) {
      return a != null && ((a = a.Oz()), a.length > 0) ? a[a.length - 1] : null;
    }
    static KJa(a, b, c) {
      if (a == null) ((b.G = null), (c.G = null));
      else {
        var d = v.hw().clone(),
          e = m.l();
        switch (a.type) {
          case "FightPVP":
            break;
          case "FightPeriodic":
            a.Yc.lga || a.Yc.mea();
            Da.OT(a.Yc.lv);
            e = v.KQ(a.ct);
            Da.xL();
            break;
          default:
            e = v.KQ(a.ct);
        }
        b.G = d;
        c.G = e;
        c = 0;
        for (a = a.kh(); c < a.length; )
          ((d = a[c]),
            ++c,
            d.type == "ERuleAvatar"
              ? (b.G.Kf = d.name)
              : d.type == "ERuleName" && (b.G.ft = d.name));
      }
    }
    static G1a(a) {
      let b = new Ia(),
        c = new Ia();
      v.KJa(a, b, c);
      return v.lya(a, b.G, c.G, null);
    }
    static lya(a, b, c, d) {
      ha.F().ta.II = th.getName(0);
      return new ca(a, b, c, d);
    }
    static C1a(a) {
      return p.o.f1() ? ((a = a.og.Oz()), a[a.length - 1]) : a;
    }
    static mZ(a, b) {
      var c;
      c == null && (c = 1);
      return v.nZa(a, p.vf(a.name), b, c);
    }
    static nZa(a, b, c, d) {
      d == null && (d = 1);
      ha.F().ta.P_ = "";
      var e = new il();
      if (
        c == 1 ||
        c == 2 ||
        c == 3 ||
        c == 8 ||
        c == 9 ||
        c == 11 ||
        c == 16 ||
        c == 18 ||
        c == 19 ||
        c == 20
      )
        if (((e = p.lEa(a, c, d)), e.value == -1))
          return (c == 16 ? v.kZa(a) : v.Gv(a, e.type), !1);
      ((a.Ec == 0 && (c == 1 || c == 8)) ||
        (b != null && b.Y0()) ||
        c == 2 ||
        c == 5 ||
        c == 9 ||
        c == 11) &&
        p.QOa(a);
      b != null && b.Wu && (c == 6 || (c == 7 && b.qd() >= 1)) && p.F();
      let f = !1;
      d = null;
      let g = !1;
      var h = !1;
      switch (c) {
        case 5:
          h = p.eo(b, !0);
          break;
        case 6:
          h = p.eo(b, !1);
          break;
        case 7:
          h = p.Gqb(a);
          break;
        case 13:
          h = p.V2a(a);
          break;
        case 15:
          h = !0;
          break;
        case 16:
          break;
        case 17:
          debugger;
          break;
        case 18:
          b != null &&
            ((h = b.KAa()), h != null && ((d = h.name), (g = v.$z(h))));
          f = !0;
          h = p.mI(a, c, e.value);
          break;
        case 1:
        case 2:
        case 3:
        case 8:
        case 9:
        case 11:
        case 14:
        case 19:
        case 20:
          h = p.mI(a, c, e.value);
          break;
        default:
          debugger;
      }
      a = p.vf(a.name);
      f &&
        (p.o.Ai.tka(),
        (c = null),
        (e = !1),
        b != null &&
          ((b = b.KAa()), b != null && ((c = b.name), (e = v.$z(b)))),
        p.o.xa.gna(d, g, c, e));
      a != null && a.Dh > 0 ? v.iya(a) : a != null && a.Dh == 0 && v.qnb(a);
      return h;
    }
    static Gv(a, b) {
      let c = ha.F().ta;
      c.item = a;
      switch (b) {
        case 2:
          a = p.nQa;
          break;
        case 3:
          a = p.qQa;
          break;
        case 4:
          a = p.mQa;
          break;
        case 6:
          a = p.pQa;
          break;
        default:
          a = null;
      }
      c.P_ = a;
      ha.F().Vf("QUEST_EVENT_PURCHASE_UNSUCCESSFUL");
    }
    static kZa(a) {
      debugger;
      let b = ha.F().ta;
      b.Mf.pE = a.Cu.ab();
      b.Mf.Ija = a.lT.name;
      b.Mf.Ec = p.Dc + a.Emb.Ec;
      b.Mf.Oza = p.oQa;
      ha.F().Vf("QUEST_EVENT_ENCHANTMENT_UNSUCCESSFUL");
    }
    static hBa(a, b) {
      var c = p.o.wt("_FirstGemPurchaseBonusActive", 0);
      if (c != null && c.value == "1") {
        c = v.yAa(p.items.Kp);
        c.sort(function (f, g) {
          return qb(f.J0(), g.J0());
        });
        let d = 0,
          e = 0;
        for (; e < c.length; ) {
          let f = c[e];
          ++e;
          if (f.Yb == I.fG) {
            if (f.name == a.name) break;
            ++d;
          }
        }
        return b.length <= d
          ? b[b.length - 1].gJ() * 2
          : Math.trunc(b[d].gJ() / 2);
      }
      return 0;
    }
    static Ewa(a, b) {
      let c = ha.F().ta;
      c.nOa = th.getName(a);
      c.oOa = th.getName(b);
      return ha.F().Vf("QUEST_EVENT_CHANGE_TAB");
    }
    static l7a(a, b) {
      let c = new lp();
      c.type = a.type;
      c.Pf = a.Nb;
      let d = a.VU;
      b && ++d;
      a.xR() && (d = b ? 1 : 0);
      c.Dwa(a.K0(d), null, a);
      return c.jj.exp;
    }
    static Exa(a) {
      a.type != "FightPVP" && xa.F().rp(5);
    }
    static Blb(a, b, c) {
      let d = ha.F().ta;
      d.Nb = a.Nb;
      d.Vv = b == 1 ? "Win" : a == null || b == -1 ? "Surrender" : "Loss";
      d.Q_ = c;
      return ha.F().Vf("QUEST_EVENT_FIGHT_PRE_END");
    }
    static oD(a, b, c, d, e, f, g, h) {
      h == null && (h = 0);
      g == null && (g = 0);
      let k = d == null && f == null,
        l = b == null || e == -1;
      var n = p.o;
      b == null && (b = p.bw(n.cH));
      f = new lp();
      f.Da = b;
      f.type = b.type;
      let q = b.Nb,
        r = new ib();
      r.zm(q.Ne, q.Se, q.Rq);
      f.Pf = r;
      f.qB = c;
      f.I2 = d;
      f.vD = e;
      f.t4a = h;
      c = b.VU;
      f.zd() && ++c;
      b.xR() && (c = f.zd() ? 1 : 0);
      f.Dwa(b.K0(c), a, b);
      c = !1;
      if (!l) {
        b.og.wMa(b, f.zd());
        b.type == "FightPeriodic" &&
          (f.zd() && (b.og.update(p.Dc), b.Yc.mea(), Gb.nla(b.Yc.CH)),
          v.H1a(b, f.zd()));
        if (
          b.type == "FightReplayable" ||
          b.type == "FightBossesReplayable" ||
          b.type == "FightFinalReplayable"
        )
          ((a = b.og), a.jJ() == 1 && p.HXa(a));
        c = p.F().zmb(f);
      }
      a = ha.F().ta;
      a.Nb = b.Nb;
      a.Vv = f.zd() ? "Win" : l ? "Surrender" : "Loss";
      a.D2 = c ? 1 : 0;
      a.Q_ = g;
      g = !1;
      c = 0;
      for (d = b.yi; c < d.length; )
        if (d[c++].gm(n.bb()).Zj != null) {
          g = !0;
          break;
        }
      n = b.type == "FightRaid";
      if ((g = g && f.zd())) ha.F().amb = a;
      !g &&
        ((!n && ha.F().VA("QUEST_EVENT_FIGHT_END")) ||
          (n && ha.F().VA("QUEST_EVENT_RAID_FIGHT_END"))) &&
        k &&
        ha.F().wT();
      p.o.save();
      v.lcb(b.Nb.toString()) && f.zd();
      za.instance != null && za.instance.Vma();
      k
        ? p.nxa()
        : b.type != "FightRaid" &&
          (l ? v.Exa(f) : ((b = ca.Ka()), b != null && b.Jia(f)));
      v.Igb.$();
    }
    static Kwb() {
      v.Y1 = !0;
    }
    static Qwb() {
      ha.F().Vf("QUEST_EVENT_SESSION");
    }
    static Uob() {
      debugger;
      v.Bm(v.SVa, v.kua, v.RVa, v.jua, !1, !0);
    }
    static Bm(a, b, c, d, e, f) {
      f == null && (f = !1);
      e == null && (e = !0);
      d == null && (d = !0);
      b == null && (b = !1);
      L.J.KFa = a.Nb.Zn();
      v.SVa = a;
      v.kua = b;
      v.RVa = c;
      v.jua = d;
      b = xa.F().Td.Wf;
      b != 6 && (f = !1);
      if (a != null) {
        c = null;
        if (b == 3 || b == 6) c = ry.Da;
        if (a != c || f)
          (a.lx(p.o.hfa(a.Nb)),
            a.og.type != "FightUnregister" && p.o.mub(a.Nb),
            we.F().RU(new qg(!0), function (g) {
              if (g.kma) {
                if (
                  e &&
                  ((g = ha.F().ta),
                  (g.Nb = a.Nb),
                  (g.Vv = ""),
                  (g.hT = ""),
                  (a.type != "FightRaid" &&
                    ha.F().VA("QUEST_EVENT_FIGHT_ENTER")) ||
                    (a.type == "FightRaid" &&
                      ha.F().VA("QUEST_EVENT_RAID_FIGHT_ENTER")))
                ) {
                  ha.F().wT();
                  return;
                }
                if (p.o.EN || v.JZa(-a.n4))
                  (a.type != "FightPeriodic" && a.Yc.Nla(p.Dc),
                    p.o.save(),
                    d && sb.rlb(),
                    !v.PF ||
                    (v.Vha != a.location + a.og.name + a.name &&
                      a.Nb.Se != "QuestBattle")
                      ? xa.F().rp(6, a)
                      : ((v.PF = !1),
                        a.lx(p.o.hfa(a.Nb)),
                        (g = a.yi.length - 2),
                        g < 0 && (g = 0),
                        (a.VU = g),
                        v.oD(new Fh(), a, p.o.Ca, null, 1),
                        (g = Ya.get()),
                        g != null && g.er.Wr(g.er.Gz())),
                    (ry.Da = a));
              }
            }));
      }
    }
    static JZa(a) {
      a = p.o.NZa(a);
      rd.F();
      rd.F();
      let b = p.o.ek;
      var c = p.o.Br;
      c > b &&
        ((c = (c - b) * p.o.dF), rd.F().R1a(c), b == 0 && rd.F().Q1a(p.o.o4));
      return a;
    }
    static eka() {
      p.o.y5(p.o.Br);
      p.o.save();
      rd.F();
      rd.F();
    }
    static Bjb(a) {
      v.z8.length = 0;
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        var c = a[b++];
        if ("Item" == c.name) {
          let d = c.attributes.get("Type");
          c = c.attributes.get("Name");
          v.z8.push(new Ca(d != null ? d : "", c != null ? c : ""));
        }
      }
    }
    static Gea(a) {
      let b = 0,
        c = v.z8;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.first == a) return d.second;
      }
      return "";
    }
    static m0() {
      return p.Dc;
    }
    static eJ(a) {
      let b = v.m0();
      return a > b ? a - b : 0;
    }
    static xvb(a, b) {
      Sd.create().bj(a, b);
    }
    static yvb(a, b) {
      Sd.create().im(a, b);
    }
    static z9a(a) {
      return m.find(v.AQ(), function (b) {
        return b.name == a;
      });
    }
    static AQ(a) {
      a == null && (a = 10);
      let b = m.l();
      sa.A9a(b, v.hw().qt(), v.hw().Yk(), a);
      return b;
    }
    static lcb(a) {
      let b = v.Gsa.length,
        c = 0;
      for (; c < b; ) if (v.Gsa[c++] == a) return !1;
      return !0;
    }
    static XFa(a, b, c, d) {
      v.mPa(c, a);
      v.mPa(d, b);
    }
    static mPa(a, b) {
      a != null && b != null && a.p_.append(b.p_);
    }
    static R2a() {
      debugger;
      let a = Ma.get();
      a != null && a.refresh();
    }
    static iya(a) {
      if (a != null) {
        var b = Y.na("item_notification", Y.na(a.ab()));
        a = a.Dh - v.m0();
        a > 0 && rd.F().S1a(b, a);
      }
    }
    static qnb(a) {
      a != null && rd.F();
    }
    static H1a(a, b) {
      if (a.type == "FightPeriodic") {
        let c = a.Yc;
        a = b ? c.Sz() + a.Pn - p.Dc : c.CH + a.Pn - p.Dc;
        rd.F().T1a(a);
      }
    }
    static bBa(a) {
      let b = v.KQ(a.ct),
        c = v.hw().clone();
      c.Hm();
      a = a.Lz(c, b);
      b.length = 0;
      return a;
    }
    static ijb(a) {
      let b = (v.KY.length = 0);
      a = a.children;
      let c = 0;
      for (; c < a.length; ) {
        let d = a[c++];
        if (d.name == "Aspect") {
          let e = new Gv();
          e.parse(d);
          v.KY.push(e);
          ++b;
        }
      }
    }
    static hjb(a) {
      v.JY.Hva = u.H(a.attributes.get("Antilimit"));
      v.JY.mda = u.H(a.attributes.get("DoublingRange"));
      v.JY.wha = u.H(a.attributes.get("Limit"));
    }
    static yWa() {
      let a = 0,
        b = v.KY;
      for (; a < b.length; ) {
        let c = new kp();
        c.name = b[a++].name;
        c.hidden = !0;
        c.Ula = !0;
        c.SJa = !0;
        c.iEa = !0;
        v.ho.attributes.push(c);
      }
    }
    static pea(a) {
      let b = 0,
        c = v.KY;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.name == a) return d;
      }
      return null;
    }
    static T0a() {
      let a = 0,
        b = v.t7;
      for (; a < b.length; ) b[a++].completed = !0;
      v.t7.length = 0;
    }
    static Xk(a, b) {
      b == null && (b = 0);
      return Math.ceil(a / Math.pow(10, p.o.qq - b));
    }
    static b4a(a) {
      debugger;
      a = a.l0();
      if (a.length == 0) return !0;
      let b = 0;
      for (; b < a.length; ) {
        let c = a[b++].Lj;
        if (c != "") {
          let d = p.o.zD(c),
            e = 0,
            f = 0,
            g = a;
          for (; f < g.length; ) {
            let h = g[f];
            ++f;
            h.Lj == c && (e += h.cn);
          }
          if (d < e) return !1;
        }
      }
      return !0;
    }
    static $z(a) {
      let b = p.o.xa.Lea(),
        c = 0,
        d = b.length;
      for (; c < d; ) {
        let e = c++;
        if (v.pxa(b[e].ib) && !b[e].BEa(a)) return !1;
      }
      return !0;
    }
    static pxa(a) {
      if (a == null) return !1;
      a = a.type;
      return a != I.xg && a != I.Ci && a != I.Di && a != I.Xh ? a == I.Ff : !0;
    }
    static fJa(a) {
      a = a.split("|");
      var b = a[0].lastIndexOf("/");
      b = b >= 0 ? a[0].substring(b + 1) : a[0];
      let c = !1,
        d = 0;
      for (; d < a.length; )
        if (a[d++].toLowerCase() == "flip") {
          c = !0;
          break;
        }
      return new qw(c, b);
    }
    static $v(a, b) {
      let c = 0;
      for (; c < a.length; ) {
        let d = a[c];
        ++c;
        !d.isActive || d.ni() || p.o.dha(d.lock) || d.ndb() || b.push(d);
      }
    }
    static yAa(a) {
      let b = m.l();
      v.$v(a, b);
      return b;
    }
    static zAa() {
      let a = v.yAa(p.items.Kp),
        b = m.l(),
        c = 0;
      for (; c < a.length; ) {
        let d = a[c];
        ++c;
        d.Yb == I.Ioa && b.push(d);
      }
      b.sort(function (d, e) {
        return qb(d.gJ(), e.gJ());
      });
      return b;
    }
  }
  v.g = "270";
