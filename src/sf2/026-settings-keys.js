// 026-settings-keys.js
// Domain: tree-il  |  9 class(es)  |  tree root(s): il, rt, st, Bf, Uc, jl, wt, fg, ut
// Edit here. Run `npm run build` to reassemble the full bundle.
  class il {
    constructor() {
      this.type = this.value = 0;
    }
  }
  il.g = "5E";
  Object.assign(il.prototype, { j: il });
  class rt {
    constructor() {
      this.$e = this.node = this.SL = this.name = null;
    }
  }
  rt.g = "5F";
  Object.assign(rt.prototype, { j: rt });
  class st {
    constructor() {
      this.node = this.name = this.SL = null;
      this.Nx = m.l();
    }
    S8a() {
      let a = (this.Nx.length * Da.rg.lf()) | 0;
      return this.Nx[a];
    }
    T8a(a) {
      let b = (this.Nx.length * Da.rg.lf()) | 0;
      for (;;) {
        let c = !1,
          d = 0,
          e = a;
        for (; d < e.length; )
          e[d++] == b && ((b = (this.Nx.length * Da.rg.lf()) | 0), (c = !0));
        if (!c) break;
      }
      a.push(b);
      return this.Nx[b];
    }
  }
  st.g = "60";
  Object.assign(st.prototype, { j: st });
  class Bf {
    constructor() {
      this.xN = null;
    }
    get(a) {
      let b = new Ia();
      return X.wh(this.xN, a, b) ? b.G : Bf.errorCode;
    }
    orb() {
      this.xN = new Map();
      let a = Bf.HUa.entries(),
        b = a.next();
      for (; !b.done; ) {
        let c = b.value;
        b = a.next();
        this.xN.set(c[0], c[1]);
      }
    }
    load(a) {
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        var c = a[b++];
        let d = u.I(c.attributes.get("Name"), -1);
        if (d == -1) continue;
        c = u.I(c.attributes.get("Value"), Bf.errorCode);
        X.Xa(this.xN, d);
        this.xN.set(d, c);
      }
    }
  }
  Bf.g = "61";
  Object.assign(Bf.prototype, { j: Bf });
  class sc extends Uc {
    constructor(a) {
      super();
      this.Ou = a;
      this.O$ = this.iW = null;
      this.ykb(a.A("Sounds"));
      this.Xkb(a);
      this.Rjb(a);
      u.I(a.attributes.get("LastSaveSlot"));
    }
    ykb(a) {
      ua.bU(u.ka(a.A("Sound").attributes.get("Mute"), !1));
      ua.aU(u.ka(a.A("Music").attributes.get("Mute"), !1));
    }
    Xkb(a) {
      this.O$ = new vt(ky(a, "WatchedVideos"));
    }
    Rjb(a) {
      this.iW = a.A("InputBind");
      sc.UD.orb();
      this.iW == null
        ? (this.iW = a.appendChild("InputBind"))
        : sc.UD.load(this.iW);
    }
    n2(a) {
      return a == null || a == "" ? !1 : this.O$.n2(a);
    }
    Hia(a) {
      a != null && a != "" && (this.O$.Hia(a), this.save());
    }
    uF() {
      super.uF();
      this.bqb(this.Ou);
      G.lp() != "en"
        ? this.Ou.set("Language", G.lp())
        : this.Ou.removeAttribute("Language");
      la.save(this.Ou.parent);
    }
    bqb(a) {
      a.A("Sounds/Sound").set("Mute", ua.gE ? "1" : "0");
      a.A("Sounds/Music").set("Mute", ua.fE ? "1" : "0");
    }
    static Iz() {
      let a = p.o.wt("_NotEnoughCurrencyColor", 0);
      if (a != null) {
        var b = a.value;
        b = !(b == null || b == "");
      } else b = !1;
      return Oa.dd(b ? K.parseInt(a.value) : 0);
    }
  }
  sc.g = "62";
  sc.u = Uc;
  Object.assign(sc.prototype, { j: sc });
  class jl {
    constructor(a) {
      this.node = a;
      this.node.has("ScreenIndex") || this.node.set("ScreenIndex", "0");
      this.node.has("ChekPointIndex") || this.node.set("ChekPointIndex", "0");
      this.node.A("FightResult") == null &&
        this.node.appendChild("FightResult").set("Name", "");
      this.node.A("RaidResult") == null &&
        this.node.appendChild("RaidResult").set("Name", "");
      this.node.A("Fight") == null &&
        this.node.appendChild("Fight").set("Name", "");
      this.node.A("LevelUp") == null &&
        this.node.appendChild("LevelUp").set("Value", "0");
      this.node.A("PowerAmount") == null &&
        this.node.appendChild("PowerAmount").set("Value", "0");
      this.node.A("FightAvgFPS") == null &&
        this.node.appendChild("FightAvgFPS").set("Value", "0");
      this.T$ = u.I(this.node.attributes.get("ScreenIndex"));
      this.b8 = u.I(this.node.attributes.get("ChekPointIndex"));
      a = this.node.A("FightResult").attributes.get("Name");
      this.Ji = a != null ? a : "";
      a = this.node.A("RaidResult").attributes.get("Name");
      this.uX = a != null ? a : "";
      a = this.node.A("Fight").attributes.get("Name");
      this.RV = a != null ? a : "";
      this.IW = u.I(this.node.A("LevelUp").attributes.get("Value"));
      this.xH = u.I(this.node.A("PowerAmount").attributes.get("Value"));
      this.Sqa = u.H(this.node.A("FightAvgFPS").attributes.get("Value"));
    }
    Ytb(a) {
      this.RV = a;
      a = this.RV != null ? this.RV : "";
      this.node.A("Fight").set("Name", a);
    }
    Ztb(a) {
      this.Ji = a;
      a = this.Ji != null ? this.Ji : "";
      this.node.A("FightResult").set("Name", a);
    }
    Dub(a) {
      this.uX = a;
      a = this.uX != null ? this.uX : "";
      this.node.A("RaidResult").set("Name", a);
    }
    oub(a) {
      this.IW = a;
      this.node.A("LevelUp").set("Value", K.T(this.IW));
    }
    Bub(a) {
      this.xH = a;
      this.node.A("PowerAmount").set("Value", K.T(this.IW));
    }
    Iub(a) {
      this.T$ = a;
      this.node.set("ScreenIndex", K.T(this.T$));
    }
    Htb(a) {
      this.b8 = a;
      this.node.set("ChekPointIndex", K.T(this.b8));
    }
    Wtb(a) {
      this.Sqa = a;
      this.node.A("FightAvgFPS").set("Value", K.T(this.Sqa));
    }
  }
  jl.g = "63";
  Object.assign(jl.prototype, { j: jl });
  class wt {
    constructor() {
      this.GGa = this.wGa = 0;
      this.oc = null;
    }
  }
  wt.g = "64";
  Object.assign(wt.prototype, { j: wt });
  class fg {
    constructor() {
      this.$sa = m.l();
      this.Apa = new Xg();
    }
    gm(a) {
      let b = new Xg();
      b.U1 = !0;
      b.sba(this.Apa);
      let c = 0,
        d = this.$sa;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        e.GGa <= a && a <= e.wGa && b.sba(e.oc);
      }
      return b;
    }
    static Qd(a, b, c) {
      c == null && (c = 0);
      b == null && (b = 0);
      let d = new fg();
      d.Apa.parse(a, b, c);
      let e = 0;
      for (a = a.kp("Level"); e < a.length; ) {
        var f = a[e];
        ++e;
        let g = new wt();
        g.oc = new Xg();
        g.oc.parse(f, b, c);
        f = $f(f, -2147483648, 2147483647);
        g.GGa = f.first;
        g.wGa = f.second;
        g.oc.U1 = !0;
        d.$sa.push(g);
      }
      return d;
    }
  }
  fg.g = "65";
  Object.assign(fg.prototype, { j: fg });
  class ut {
    constructor(a, b, c) {
      this.f0 = fg.Qd(a, b, c);
      let d = a.A("NormalModeReward");
      this.lHa = d != null ? fg.Qd(d, b, c) : null;
      a = a.A("EclipseModeReward");
      this.lza = a != null ? fg.Qd(a, b, c) : null;
    }
    gm(a) {
      let b = new Xg();
      this.f0 != null && ((b = this.f0.gm(a)), (b.U1 = !0));
      let c = p.o.$h ? this.lza : this.lHa;
      c != null && ((a = c.gm(a)), (a.U1 = !0), b.sba(a));
      return b;
    }
  }
  ut.g = "66";
  Object.assign(ut.prototype, { j: ut });
