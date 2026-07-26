// 021-scene-graph.js
// Domain: renderer-textures  |  33 class(es)  |  tree root(s): Db, Ua, Ss, ya, Og, Ts, dd, J, oy, Qb, Ja, Kb, Qg, ed, dg, la, Vk, H, Dc, Ec, tf, y, K, uf, Eb
// Edit here. Run `npm run build` to reassemble the full bundle.
  class Db {
    constructor(a) {
      this.active = !0;
      this.T6 = this.Zg = !1;
      this.parent = this.cf = this.Ma = null;
      this.Ofb = this.Nfb = !1;
      this.time = 0;
      this.Kd(a != null ? a : Rs.hCa(this));
    }
    Kd(a) {
      return (this.name = a);
    }
    Y(a) {
      return (this.active = a);
    }
    B() {
      if (!this.Zg) {
        for (var a = this.cf; a != null; ) {
          let b = a.Ma;
          a.B();
          a = b;
        }
        this.remove();
        this.Zg = !0;
      }
    }
    remove() {
      if (this.parent != null) {
        if (this == this.parent.cf) this.parent.cf = this.Ma;
        else {
          let a = this.parent.cf;
          for (; a != null; ) {
            if (a.Ma == this) {
              a.Ma = this.Ma;
              break;
            }
            a = a.Ma;
          }
        }
        this.parent = this.Ma = null;
      }
    }
    W_a() {
      return new Dk(this, !1);
    }
    iterator() {
      return new Dk(this, !0);
    }
    find(a) {
      return this.aAa(function (b) {
        return ob.CM(b, a);
      });
    }
    aAa(a) {
      for (var b = this.parent; b != null; ) {
        if (a(b)) return b;
        b = b.parent;
      }
      b = 1;
      let c = [this];
      for (; b > 0; ) {
        let d = c[--b],
          e = d.cf;
        for (; e != null; ) ((c[b++] = e), (e = e.Ma));
        if (d != this && a(d)) return d;
      }
      return null;
    }
    Z() {}
    Ea() {}
    zja(a) {
      if (!this.Zg && this.active != 0) {
        this.T6 = !0;
        this.Z(a);
        for (var b = this.cf, c; b != null; )
          ((c = b.Ma), b.Ofb || b.Zg || b.zja(a), (b = c));
        this.time += a;
      }
    }
    yja(a) {
      if (!this.Zg && this.T6 != 0 && this.active != 0) {
        this.Ea(a);
        for (var b = this.cf, c; b != null; )
          ((c = b.Ma), b.Nfb || b.Zg == null || b.yja(a), (b = c));
      }
    }
    In() {}
    fd(a) {
      return a == 0 ? 1 : Math.min(1, this.time / a);
    }
    appendChild(a) {
      a.parent = this;
      var b = this.cf;
      if (b != null) {
        for (; b.Ma != null; ) b = b.Ma;
        b.Ma = a;
      } else this.cf = a;
      a.In();
      return a;
    }
  }
  Db.g = "1";
  Object.assign(Db.prototype, { j: Db });
  class O extends Db {
    constructor() {
      super();
      this.node = new Ea();
    }
    Kd(a) {
      this.node != null && this.node.Kd(a);
      return super.Kd(a);
    }
    C(a) {
      return this.node.C(a);
    }
    D(a) {
      return this.node.D(a);
    }
    la(a) {
      this.node.la(a);
    }
    B() {
      super.B();
      let a = this.node;
      a != null && a.B();
      this.node = null;
    }
    Y(a) {
      this.node.R(a);
      return super.Y(a);
    }
    Uc(a) {
      return this.node.Uc(a);
    }
    appendChild(a) {
      super.appendChild(a);
      a instanceof O && a.node.sJ() == null && this.node.appendChild(a.node);
      return a;
    }
    Bd() {
      return this.node.Bd(N.mn(0));
    }
  }
  O.g = "2";
  O.u = Db;
  Object.assign(O.prototype, { j: O });
  class Ua {
    constructor(a, b) {
      this.r = new RegExp(a, b.split("u").join(""));
    }
    match(a) {
      this.r.global && (this.r.lastIndex = 0);
      this.r.dj = this.r.exec(a);
      this.r.s = a;
      return this.r.dj != null;
    }
    mg(a) {
      if (this.r.dj != null && a >= 0 && a < this.r.dj.length)
        return this.r.dj[a];
      throw 0;
    }
    tGa() {
      if (this.r.dj == null) throw 1;
      let a = this.r.dj.index + this.r.dj[0].length;
      return J.substr(this.r.s, a, this.r.s.length - a);
    }
    sGa() {
      if (this.r.dj == null) throw 2;
      return { ca: this.r.dj.index, mr: this.r.dj[0].length };
    }
    Web(a, b) {
      var c;
      c == null && (c = -1);
      if (this.r.global) {
        this.r.lastIndex = b;
        this.r.dj = this.r.exec(c < 0 ? a : J.substr(a, 0, b + c));
        if ((b = this.r.dj != null)) this.r.s = a;
        return b;
      }
      if ((c = this.match(c < 0 ? J.substr(a, b, null) : J.substr(a, b, c))))
        ((this.r.s = a), (this.r.dj.index += b));
      return c;
    }
    split(a) {
      return a.replace(this.r, "#__delim__#").split("#__delim__#");
    }
    map(a, b) {
      let c = 0,
        d = "";
      do {
        if (c >= a.length) break;
        else if (!this.Web(a, c)) {
          d += K.T(J.substr(a, c, null));
          break;
        }
        let e = this.sGa();
        d += K.T(J.substr(a, c, e.ca - c));
        d += K.T(b(this));
        e.mr == 0
          ? ((d += K.T(J.substr(a, e.ca, 1))), (c = e.ca + 1))
          : (c = e.ca + e.mr);
      } while (this.r.global);
      !this.r.global &&
        c > 0 &&
        c < a.length &&
        (d += K.T(J.substr(a, c, null)));
      return d;
    }
  }
  Ua.g = "3";
  Object.assign(Ua.prototype, { j: Ua });
  class Ss {
    constructor() {}
    aZa(a) {
      window.GameInterface.iap.buyProduct(a);
    }
    L8a(a) {
      window.GameInterface.iap.getProducts().then((b) => a(b));
    }
    d1a(a, b, c) {
      window.GameInterface.iap
        .consumeProduct(a)
        .then(function () {
          b();
        })
        .catch(c);
    }
    NHa(a) {
      window.GameInterface.iap.onEvent(a);
    }
  }
  Ss.g = "4";
  Object.assign(Ss.prototype, { j: Ss });
  class ya {
    static Fe() {
      return window.GameInterface !== void 0;
    }
    static H8a() {
      return window.GameInterface.getSDKName();
    }
    static l9a() {
      return window.GameInterface.getVersionInfo().sequentialVersion;
    }
    static init() {
      ya.Wcb() && (ya.aE = !0);
    }
    static hasFeature(a) {
      return window.GameInterface.hasFeature(a);
    }
    static Wcb() {
      return window.GameInterface.isMuted();
    }
    static k2a(a) {
      return new Ek(a);
    }
    static Iqb(a) {
      window.GameInterface.sendPreloadProgress(a);
    }
    static h5a() {
      ya.Cna || (window.GameInterface.gameReady(), (ya.Cna = !0));
    }
    static j5a(a, b) {
      window.GameInterface.gameStart(a).then(b);
    }
    static d5a(a) {
      window.GameInterface.gameComplete().then(a);
    }
    static lea(a) {
      window.GameInterface.gameOver().then(a);
    }
    static f5a(a) {
      window.GameInterface.gamePause().then(a, a);
    }
    static i5a(a) {
      window.GameInterface.gameResume().then(a, a);
    }
    static g5a(a) {
      window.GameInterface.gameQuit().then(a, a);
    }
    static zQ(a) {
      window.GameInterface.gameMuted(a);
    }
    static w6a() {
      return window.GameInterface.getCurrentLanguage();
    }
    static dhb(a) {
      window.GameInterface.onPauseStateChange(function (b) {
        a(b);
      });
    }
    static ahb(a) {
      window.GameInterface.onMuteStateChange(function (b) {
        ya.aE = b;
        a(b);
      });
    }
    static adb() {
      return window.GameInterface.isPaused();
    }
    static qx(a, b) {
      window.GameInterface.showInterstitialAd(a).then(() => b());
    }
    static Svb(a, b) {
      window.GameInterface.showRewardedAd(a).then((c) => b(c.isRewardGranted));
    }
    static jdb(a) {
      return window.GameInterface.isRewardedAdAvailable(a);
    }
    static Jmb(a, b) {
      window.GameInterface.storage.redeemCode(a).then(() => b());
    }
    static bhb(a) {
      window.GameInterface.onOffsetChange(function () {
        let b = window.GameInterface.getOffsets();
        a(
          new Ts(
            Kb.Ve(b, "left"),
            Kb.Ve(b, "right"),
            Kb.Ve(b, "top"),
            Kb.Ve(b, "bottom"),
          ),
        );
      });
    }
  }
  ya.g = "5";
  class Og {
    constructor(a) {
      this.name = a;
    }
  }
  Og.g = "6";
  Object.assign(Og.prototype, { j: Og });
  class Ek extends Og {
    constructor(a) {
      super(a);
    }
    load() {
      let a = window.GameInterface.storage.getItem(this.name);
      return rc.jo(a);
    }
    save(a) {
      window.GameInterface.storage.setItem(this.name, a);
      return rc.jo(!0);
    }
    delete() {
      window.GameInterface.storage.removeItem(this.name);
      return rc.jo(!0);
    }
  }
  Ek.g = "7";
  Ek.u = Og;
  Object.assign(Ek.prototype, { j: Ek });
  class Ts {
    constructor(a, b, c, d) {
      this.JR = a;
      this.r = b;
      this.t = c;
      this.b = d;
    }
  }
  Ts.g = "8";
  Object.assign(Ts.prototype, { j: Ts });
  class dd {
    constructor(a) {
      this.isActive = !1;
      this.children = [];
      this.parent = null;
      this.an = [];
      this.name = a;
      this.node = new Hd();
    }
    LWa() {
      let a = new Fk();
      a.Zv = this;
      this.an.push(a);
      a.In();
      return a;
    }
    NWa() {
      let a = new Gk();
      a.Zv = this;
      this.an.push(a);
      a.In();
      return a;
    }
    MWa() {
      let a = new Hk();
      a.Zv = this;
      this.an.push(a);
      a.In();
      return a;
    }
    OWa() {
      let a = new oi();
      a.Zv = this;
      this.an.push(a);
      a.In();
      return a;
    }
    Ima() {
      if (this.an == null) debugger;
      else {
        for (var a = 0, b = this.an; a < b.length; ) b[a++].update();
        a = 0;
        for (b = this.children; a < b.length; ) b[a++].Ima();
        for (;;) {
          a = !1;
          b = 0;
          let c = this.an;
          for (; b < c.length; ) {
            let d = c[b];
            ++b;
            if (d.Zg) {
              debugger;
              J.remove(this.an, d);
              a = !0;
              break;
            }
          }
          if (!a) break;
        }
      }
    }
    ksb(a) {
      this.parent != a &&
        (this.parent != null && J.remove(this.parent.children, this),
        this.node.remove(),
        (this.parent = null),
        a.children.push(this),
        a.node.appendChild(this.node),
        (this.parent = a));
    }
    od(a) {
      a.parent = this;
      this.children.push(a);
      this.node.appendChild(a.node);
    }
    setActive(a) {
      this.isActive = a;
      this.node.bn = a ? 2 : 1;
    }
    B() {
      if (this.children != null) {
        var a = [];
        this.HJa(a);
        for (var b = 0; b < a.length; ) a[b++].e3a();
      }
    }
    HJa(a) {
      let b = 0,
        c = this.children;
      for (; b < c.length; ) c[b++].HJa(a);
      a.push(this);
    }
    e3a() {
      this.parent != null && J.remove(this.parent.children, this);
      let a = 0,
        b = this.an;
      for (; a < b.length; ) b[a++].B();
      this.an = null;
      this.node.B();
      this.parent = this.children = this.node = null;
    }
  }
  dd.g = "9";
  Object.assign(dd.prototype, { j: dd });
  class J {
    static Jh(a, b) {
      a = a.charCodeAt(b);
      if (a == a) return a;
    }
    static substr(a, b, c) {
      if (c == null) c = a.length;
      else if (c < 0)
        if (b == 0) c = a.length + c;
        else return "";
      return a.substr(b, c);
    }
    static remove(a, b) {
      b = a.indexOf(b);
      if (b == -1) return !1;
      a.splice(b, 1);
      return !0;
    }
    static now() {
      return Date.now();
    }
  }
  J.g = "A";
  class oy {
    constructor(a, b) {
      this.min = a;
      this.max = b;
    }
    yd() {
      return this.min < this.max;
    }
    next() {
      return this.min++;
    }
  }
  oy.g = "B";
  Object.assign(oy.prototype, { j: oy });
  class Qb {
    static Fe(a, b) {
      for (a = Qe(a); a.yd(); ) if (b(a.next())) return !0;
      return !1;
    }
    static R4a(a, b) {
      for (a = Qe(a); a.yd(); ) if (!b(a.next())) return !1;
      return !0;
    }
    static oFa(a, b) {
      for (a = Qe(a); a.yd(); ) b(a.next());
    }
    static filter(a, b) {
      let c = [];
      for (a = Qe(a); a.yd(); ) {
        let d = a.next();
        b(d) && c.push(d);
      }
      return c;
    }
    static count(a, b) {
      let c = 0;
      if (b == null) for (b = Qe(a); b.yd(); ) (b.next(), ++c);
      else for (a = Qe(a); a.yd(); ) b(a.next()) && ++c;
      return c;
    }
    static find(a, b) {
      for (a = Qe(a); a.yd(); ) {
        let c = a.next();
        if (b(c)) return c;
      }
      return null;
    }
    static findIndex(a, b) {
      let c = 0;
      for (a = Qe(a); a.yd(); ) {
        if (b(a.next())) return c;
        ++c;
      }
      return -1;
    }
  }
  Qb.g = "C";
  class Ja {
    static x5a(a) {
      return Ja.Nk.v[a];
    }
    static qyb() {
      function a(b) {
        return mb.ll(Pg.LI(G.data.v[b]));
      }
      Ja.xml = a(L.J.Mna);
      G.oS(Ja.Xea(), function () {
        Ja.tyb();
      });
      G.data.v[317] != null
        ? (Ja.Ra = a(317))
        : G.data.v[316] != null &&
          ((Ja.Ra = a(316)),
          G.oS(317, function (b) {
            Ja.Ra = a(b);
          }));
      G.data.v[1360] != null
        ? Ja.Oka(1360)
        : G.data.v[1359] != null &&
          (Ja.Oka(1359),
          G.oS(1360, function (b) {
            Ja.Oka(b);
            sa.load();
          }));
    }
    static tyb() {
      if (!Ja.kGa) {
        Ja.kGa = !0;
        for (
          var a = mb.ll(Pg.LI(G.data.v[Ja.Xea()])),
            b = 0,
            c = [
              396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408,
              409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421,
              422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434,
              435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447,
              448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460,
              461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473,
              474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486,
              487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499,
              500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512,
              513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525,
              526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538,
              539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551,
              552, 553,
            ];
          b < c.length;

        ) {
          let d = c[b];
          ++b;
          if (G.data.v[d] != null) continue;
          let e = G.eg(d);
          e.indexOf("json") != -1
            ? G.setData(d, Ja.Wda(a, e))
            : qc.load(Ja.Xza(a, e).b.Ev).Tc(function (f) {
                G.pnb(d);
                G.setData(d, f);
              });
        }
      }
    }
    static Xea() {
      return G.f_ == "dds" ? 395 : 394;
    }
    static mi(a) {
      let b = G.eg(a);
      a = G.nn(a);
      return a != null ? Rb.parse(a) : Rb.Xia(Ja.Wda(Ja.xml, b));
    }
    static Nh(a) {
      return Rb.Xia(Ja.Wda(Ja.Ra, a));
    }
    static Oka(a) {
      Ja.Nk.v = Object.create(null);
      a = new cd(mb.ll(Pg.LI(G.data.v[a])));
      for (var b = a.ie(), c = new ac(), d = 0; d < b; ) {
        ++d;
        var e = a.cu(a.fa(), qf.gG);
        let f = a.I4(),
          g = new mb(new ArrayBuffer(f));
        a.fk(g, 0, f);
        c.v[e] = g;
      }
      a = c.v;
      b = Object.keys(a);
      c = b.length;
      for (d = 0; d < c; ) ((e = b[d++]), (Ja.Nk.v[e] = a[e]));
    }
    static Wda(a, b) {
      a = Ja.Xza(a, b);
      return a != null ? Ja.decode(a.b.Ev) : null;
    }
    static Xza(a, b) {
      a = new cd(a);
      let c = a.ie(),
        d = 0;
      for (; d < c; ) {
        ++d;
        let e = a.cu(a.fa(), qf.gG),
          f = a.I4();
        if (e == b) return ((b = new mb(new ArrayBuffer(f))), a.fk(b, 0, f), b);
        a.Aub(a.ca + f);
      }
      return null;
    }
    static decode(a) {
      return new TextDecoder().decode(a);
    }
  }
  Ja.g = "D";
  class Ik extends Db {
    constructor(a) {
      super(a);
    }
    In() {
      super.In();
      this.tD = !0;
      this.W = R.aa(L.J.createTexture(314));
      mc.J.df.appendChild(this.W.L);
      this.W.wa(0);
    }
    Z(a) {
      super.Z(a);
      if (this.W != null) {
        if (N.io || this.tD) ((this.tD = !1), this.Uk());
        this.Dxb = $d.$o == 3 ? 0.2 : 0;
        a = this.W;
        a.wa(a.on() + (this.Dxb - this.W.on()) * 0.1);
      }
    }
    Uk() {
      let a = N.rect;
      this.W.Uc(!1);
      this.W.la(1);
      this.W.Ga();
      if (L.J.wn) {
        let b = this.W;
        b.la(b.Db * 1.5);
      }
      this.W.C(a.w / 2);
      this.W.D(a.v - (this.W.ra() / 2 + 10));
    }
  }
  Ik.g = "E";
  Ik.u = Db;
  Object.assign(Ik.prototype, { j: Ik });
  Math.g = "F";
  class Kb {
    static Ve(a, b) {
      try {
        return a[b];
      } catch (c) {
        return null;
      }
    }
  }
  Kb.g = "10";
  class Qg {
    constructor() {
      this.M_ = !1;
      this.href = va.location.href;
      this.Cxb = null;
      this.VD = [];
      this.Qh = new fb();
      this.wn = null;
      this.bg = new Us();
      this.window = this.Ha = null;
      this.Llb = new Vs();
      this.Mc = new Rg();
      this.uk = new Ws();
      this.time = 0;
      this.options = null;
      Qg.J = this;
      this.root = new Db();
      this.wn = this.Jxb();
      this.ZC = !1;
    }
    M$a() {
      let a = this.t0(1);
      return a != null ? a : this.wY(new Jk(this.window.canvas));
    }
    Vfa() {
      return this.M$a().state;
    }
    Ufa() {
      let a = this.t0(0);
      return a != null ? a : this.wY(new Kk());
    }
    Uj() {
      return this.Ufa().state;
    }
    Xfa() {
      let a = this.t0(3);
      return a != null ? a : this.wY(new Lk(this.window.canvas));
    }
    ed() {
      return this.Xfa().state;
    }
    WCa() {
      let a = this.t0(4);
      return a != null ? a : this.wY(new rf());
    }
    Pfa() {
      return this.WCa().state;
    }
    init(a, b) {
      this.up = !0;
      this.options = a;
      this.sbb = b;
      b = this.b6a();
      if (b != null && b < 120)
        window.alert(
          "We're sorry, but Shadow Fight 2 relies on modern web technologies that your current browser doesn't support. Please update your Chrome browser.",
        );
      else {
        va.console.info(
          "%c" + a.title.toUpperCase() + " %c" + cg.KTa,
          "font-weight:bold;",
          null,
        );
        a.tDa &&
          (window.addEventListener("error", w(this, this.wA)),
          window.addEventListener("unhandledrejection", w(this, this.wA)));
        this.Mc.Sh = w(this, this.Teb);
        G.nrb(a.TDa);
        G.cla(a.lang);
        G.BGa = a.rHa;
        b = 0;
        for (var c = G.Q7a(); b < c; ) {
          let g = b++;
          G.DEa(g) && G.Wua(g, w(this, this.F2a));
          G.R1(g) && G.Wua(g, w(this, this.C2a));
        }
        this.window = new Mk();
        a.eI == 2 &&
          (this.window.Qbb(a.$ja),
          (this.Ha = new Id()),
          this.window.tm.ei(w(this, this.tm)),
          this.window.uA.ei(w(this, this.uA)));
        if (this.Ha == null || a.eI == 1)
          (this.window.nbb(a.$ja),
            (this.Ha = new Nk()),
            this.window.tm.ei(w(this, this.tm)),
            this.window.uA.ei(w(this, this.uA)),
            (qc.flipY = !1),
            (qc.FPa = a.SDa));
        this.Ha.oA = a.oA;
        this.Ha.ZA(this.window);
        this.window.Gp.ei(w(this, this.Gp));
        this.window.Ip.ei(w(this, this.Ip));
        if (a.audio) {
          this.bg.enabled = !0;
          La.init();
          let g;
          b = a.Wva;
          g = b != null ? b : "m4a";
          b = va.navigator.userAgent;
          if (b.indexOf("OPR") > -1 || b.indexOf("YaBrowser") > -1) g = "ogg";
          Qb.Fe(G.LAa(), function (h) {
            return h == g;
          }) && G.wqb(g);
        }
        Kc.uB != null && G.ZLa("dds");
        Kc.dQa != null && G.ZLa("ktx");
        var d = function () {
            let g = G.RBa(),
              h = new Gd();
            g.length > 0
              ? G.load(G.RBa()).xK(function () {
                  h.complete();
                })
              : h.complete();
            return h.ef;
          },
          e = function (g) {
            G.mrb(g ? "avif" : a.XPa ? "webp" : "png");
          },
          f = this;
        this.Hxb()
          .Tc(function (g) {
            e(g);
          })
          .then(function () {
            return Ez();
          })
          .then(function () {
            return d();
          })
          .Tc(function () {
            Rg.Zha(w(f, f.mhb));
          });
      }
    }
    Hbb(a) {
      a = new mc(this, a, void 0);
      this.root.appendChild(new Ok(a));
    }
    Rda() {
      if (this.M_) {
        window.removeEventListener("error", w(this, this.wA));
        this.Mc.stop();
        this.Mc.Sh = null;
        this.M_ = !0;
        this.root.B();
        this.options = this.uk = this.root = null;
        for (var a = 0, b = this.VD; a < b.length; ) {
          let c = b[a];
          ++a;
          c != null && c.B();
        }
        this.VD = null;
        this.Ha.B();
        this.window.B();
        a = 0;
        for (b = G.o7a(); a < b.length; ) G.Vr(b[a++]);
        this.bg.B();
        G.init();
        pi.Rda();
        Qg.J = null;
        try {
          window.gc();
        } catch (c) {}
      } else this.M_ = !0;
    }
    EEa() {
      return va.navigator.onLine ? !0 : !1;
    }
    createTexture(a, b, c) {
      c == null && (c = !1);
      b == null && (b = 0);
      var d = G.eg(a),
        e = this.Ha.bAa(d);
      if (e != null) return e;
      b = this.Ha.CP(G.data.v[a], b, null, d);
      d = null;
      G.kga(a)
        ? (d = G.T7a(a))
        : ((e = G.Sea(a, "dat")),
          G.data.v[e] != null
            ? (d = G.Uq(e))
            : G.fdb(a) &&
              ((e = RegExp("-p\\.", "")),
              (e = G.Sea(G.uf(G.eg(a).replace(e, ".")), "dat")),
              G.data.v[e] != null && (d = G.Uq(e))));
      if (d != null) {
        d = new cd(d);
        e = d.fa();
        for (var f = 0; f < e; ) {
          ++f;
          var g = d.cu(d.ie(), qf.gG),
            h = d.ie();
          let k = new mb(new ArrayBuffer(h));
          d.fk(k, 0, h);
          h = ve.o3(k);
          this.Ha.l2a(b, h).name = g;
        }
      } else {
        d = ["json", "fnt", "tps"];
        e = null;
        for (f = 0; f < d.length; )
          if (((g = d[f]), ++f, (h = G.Sea(a, g)), h != -1)) {
            switch (g) {
              case "json":
                d = G.nn(h);
                d = new qi().jKa(d);
                e = new ve(Xs.Wq(d), d.aK.scale);
                break;
              case "fnt":
              case "tps":
                e = ve.o3(G.Uq(h));
            }
            break;
          }
        e != null && b.RLa(e);
      }
      c && ((c = G.q7a(a)), (b.kj *= 1 / (c / G.EBa(a))));
      return b;
    }
    jD(a, b) {
      b == null && (b = !1);
      if (a != -1 && G.DEa(a)) {
        var c = this.Ha.bAa(G.eg(a));
        c != null && this.Ha.jD(c);
        b && G.Vr(a);
      }
    }
    B_(a) {
      let b = 0,
        c = this.VD;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        d != null && d.GF(a);
      }
    }
    sNa() {
      var a = 16777215;
      a == null && (a = 0);
      this.JDa();
      var b = window.document.createElement("div");
      b.id = "VERSION";
      window.document.body.appendChild(b);
      b.innerText = this.Q0();
      b = b.style;
      b.fontFamily = "sans-serif";
      b.fontSize = "10px";
      let c = sf.Sx;
      b.color = "#" + c[(a >> 16) & 255] + c[(a >> 8) & 255] + c[a & 255];
      b.position = "absolute";
      b.bottom = "0";
      b.right = "0";
      b.padding = "1px";
      b.userSelect = "none";
      b.setProperty("-webkit-user-select", "none");
      setTimeout(w(this, this.JDa), 1e4);
    }
    JDa() {
      let a = window.document.getElementById("VERSION");
      a != null && window.document.body.removeChild(a);
    }
    Q0() {
      return cg.VERSION.toString();
    }
    k8a() {
      function a(c) {
        return b.indexOf(c) != -1;
      }
      let b = window.navigator.userAgent.toLowerCase();
      return a("windows")
        ? "Windows"
        : a("mac")
          ? "macOS"
          : a("linux") && !a("android")
            ? "Linux"
            : a("android")
              ? "Android"
              : a("iphone") || a("ipad")
                ? "iOS"
                : "Unknown";
    }
    F9a() {
      let a = new ac();
      new Ua("[?&]+([^=&]+)=?([^&]*)", "gi").map(this.href, function (b) {
        let c = b.mg(1);
        b = b.mg(2);
        a.v[c] = b;
        return null;
      });
    }
    reload(a) {
      a == null && (a = !1);
      a
        ? (window.location = window.location.pathname)
        : window.location.reload(!0);
    }
    HIa(a) {
      window.open(a, "_blank");
    }
    Teb(a) {
      if (!this.ZC)
        if (this.M_) this.Rda();
        else {
          this.window.update();
          this.Llb.Z(a);
          for (var b = 0, c = this.VD; b < c.length; ) {
            let d = c[b];
            ++b;
            d != null && d.h4();
          }
          this.time += a;
          b = this.uk;
          c = w(this, this.Z);
          b.Cp = !0;
          b.Ly += a * b.TL;
          b.Ly > 0.25 && (b.Ly = 0.25);
          for (a = !1; b.Ly >= b.Cm; )
            (b.Pxb++,
              c(b.Cm),
              (b.dAa += b.Cm),
              (b.Ly -= b.Cm),
              (b.Cp = !1),
              (a = !0));
          a && (this.Ea(b.Ly / b.Cm), b.s3a++);
        }
    }
    Z(a) {
      let b = this.options.xha && this.PFa(),
        c = 0,
        d = this.VD;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        e != null && e.state.update(a);
      }
      this.root.zja(a);
      this.Qh.notify();
      b && this.Ha.GJa();
    }
    Ea(a) {
      if (this.Ha.Cp()) {
        var b = this.options.xha && this.PFa();
        this.Ha.clear();
        this.root.yja(a);
        b && this.Ha.GJa();
      }
      this.Ha.hQ();
    }
    PFa() {
      var a = this.window.S9a(),
        b = this.window.V6;
      let c = this.window.U6;
      return a > 2.5
        ? ((a = (c / b) * 2.5),
          (b = (1 - a) / 2),
          this.Ha.ZJa(b, 0, b + a, 1),
          !0)
        : a < 0.4
          ? ((a = b / c / 0.4),
            (b = (1 - a) / 2),
            this.Ha.ZJa(0, b, 1, b + a),
            !0)
          : !1;
    }
    Bxb() {
      let a = window.document.querySelectorAll("meta[data-hash]").item(0)
          .dataset.hash,
        b = window.document.querySelectorAll("script[src]"),
        c = null,
        d = 0,
        e = b.length;
      for (
        ;
        d < e &&
        ((c = b.item(d++)), !new Ua(this.options.title, "i").match(c.src));

      );
      if (c != null) {
        var f = new XMLHttpRequest();
        f.open("GET", c.src);
        f.responseType = "arraybuffer";
        var g = this;
        f.onreadystatechange = function () {
          if (f.readyState == 4 && f.status == 200)
            try {
              window.crypto.subtle
                .digest("SHA-256", f.response)
                .then(function (h) {
                  h = btoa(String.fromCharCode.apply(null, new Uint8Array(h)));
                  g.Cxb = h != a;
                })
                .catch(function () {});
            } catch (h) {}
        };
        f.send();
      }
    }
    mhb() {
      this.options.qOa && this.Bxb();
      this.window.update();
      this.Mc.start();
      this.sbb(this);
    }
    tm() {
      this.Ha.tm();
      this.ZC = !0;
    }
    uA() {
      this.ZC = !1;
      this.Ha.restoreContext();
    }
    Ip() {
      this.resume();
      this.wn ? nc.Hp.ei(w(this, this.Hp)) : this.C6();
    }
    Gp() {
      this.pause();
      this.cS();
      this.wn && nc.Hp.detach(w(this, this.Hp));
    }
    Hp() {
      this.C6();
      nc.Hp.detach(w(this, this.Hp));
    }
    pause() {
      this.Mc.stop();
    }
    resume() {
      this.Mc.start();
    }
    cS() {
      this.bg.AF(0, 0);
    }
    C6() {
      this.bg.AF(1, 0);
    }
    wA() {
      this.Mc.stop();
      window.removeEventListener("error", w(this, this.wA));
      window.removeEventListener("unhandledrejection", w(this, this.wA));
      window.alert("GAME CRASHED \ud83d\udc80 \nSee console for details.");
    }
    t0(a) {
      return this.VD[a];
    }
    wY(a) {
      return (this.VD[a.JQ()] = a);
    }
    F2a(a, b) {
      function c(d, e) {
        let f = new Gd(),
          g = new FileReader();
        g.onload = function (h) {
          g.onload = null;
          g.onerror = null;
          py.Jza(mb.ll(h.target.result)).Tc(function (k) {
            G.Yrb(e, k);
            f.complete(d);
          });
        };
        g.onerror = function (h) {
          f.error(h);
        };
        g.readAsArrayBuffer(b);
        return f.ef;
      }
      return qc.load(b).then(function (d) {
        d.name = G.eg(a);
        return G.kga(a) ? c(d, a) : rc.jo(d);
      });
    }
    C2a(a, b) {
      function c(e) {
        return Tc.decode(b).then(function (f) {
          f.id = a;
          f.name = G.eg(a);
          f.ML = e;
          f.yR = new Ua("music", "").match(G.eg(a));
          d.bg.CWa(a, f);
          return rc.jo(f);
        });
      }
      let d = this;
      return G.kga(a)
        ? py.Jza(mb.ll(b)).then(function (e) {
            return c(Pk.o3(e));
          })
        : c(null);
    }
    Jxb() {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches
      );
    }
    Hxb() {
      if (!this.options.Zva) return rc.jo(!1);
      let a = new Gd(),
        b = new Image();
      b.onerror = function () {
        a.complete(!1);
      };
      b.onload = function () {
        a.complete(!0);
      };
      b.src =
        "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=";
      return a.ef;
    }
    b6a() {
      try {
        let a = va.navigator.userAgent,
          b = new Ua("Chrome/((?:\\d+\\.?)+)", "");
        if (b.match(a)) return K.parseInt(b.mg(1).split(".")[0]);
      } catch (a) {}
      return null;
    }
  }
  Qg.g = "11";
  Object.assign(Qg.prototype, { j: Qg });
  class ed {
    static Bfa() {
      return Math.round(ed.wxb + ed.getDate().getTime() / 1e3);
    }
    static getDate(a) {
      return a == null ? new Date() : new Date(a * 1e3);
    }
    static getTimezoneOffset() {
      debugger;
      return 0;
    }
    static sync(a) {
      a(ed.Bfa());
    }
  }
  ed.g = "12";
  class L extends Qg {
    constructor(a) {
      super();
      let b = this.wn ? 1 : 2;
      Tc.aGa = this.wn;
      v.OEa = !1;
      this.F9a();
      this.kU = !1;
      this.kja = ya.H8a();
      tf.ctb(this.kja);
      this.init(
        new Ys(
          "SF2",
          a,
          b,
          2,
          null,
          {
            alpha: !1,
            powerPreference: "high-performance",
            stencil: !0,
            depth: !1,
          },
          null,
          null,
          null,
          !0,
          null,
          null,
          0,
          null,
          !1,
          null,
          !1,
        ),
        w(this, this.kia),
      );
    }
    qx(a, b) {
      this.bg.AF(0);
      let c = this;
      ya.qx(a, function () {
        ya.aE || (c.bg.AF(1), c.window.canvas.focus());
        b();
      });
    }
    tzb(a) {
      let b = this.window.canvas.style;
      b.top = "" + a.t + "px";
      b.left = "" + a.JR + "px";
      b.width = "calc(100% - " + (a.r + a.JR) + "px)";
      b.height = "calc(100% - " + (a.b + a.t) + "px)";
    }
    zzb(a) {
      this.au = [];
      this.Lca = null;
      let b = this;
      ya.iR.L8a(function (c) {
        b.au = c;
        var d = null;
        c = 0;
        let e = b.au;
        for (; c < e.length; )
          if (
            ((d = e[c]),
            ++c,
            Object.prototype.hasOwnProperty.call(d, "currencyImageURI") &&
              ((d = Kb.Ve(d, "currencyImageURI")), d != null))
          ) {
            qc.load(d).Tc(function (f) {
              b.Lca = b.Ha.CP(f, 8);
              a();
            });
            return;
          }
        a();
      });
    }
    Q0() {
      return super.Q0() + "." + la.hP;
    }
    tm() {
      super.tm();
      this.reload();
    }
    Ip() {
      ya.hasFeature("visibilitychange") && super.Ip();
    }
    resume() {
      if (!ya.adb())
        try {
          if (window.SupportDialogApi.isOpen()) return;
        } catch (a) {}
      super.resume();
    }
    C6() {
      ya.aE || super.C6();
    }
    Gp() {
      ya.hasFeature("visibilitychange") && super.Gp();
    }
    kia() {
      this.Ha.ET(new H(0, 0, 0, 1));
      this.Ha.lma();
      this.Ha.type == Id &&
        (this.Ha.$d(new Qk()), this.Ha.$d(new Rk()), this.Ha.$d(new Sk()));
      ya.init();
      this.ika = ya.hasFeature("rewarded");
      ya.bhb(w(this, this.tzb));
      ya.hasFeature("version") && this.sNa();
      let a = this;
      ya.dhb(function (e) {
        e
          ? (a.Xfa().GF(!1), a.Mc.stop())
          : (a.Xfa().GF(!0), a.ed().reset(), a.Mc.start());
      });
      ya.ahb(function (e) {
        a.bg.AF(e ? 0 : 1);
      });
      ya.aE && this.bg.AF(0);
      (this.GJ = !la.Fe()) && la.init();
      let b = la.load();
      var c = b.xt().attributes.get("Language");
      c = c != null ? c : "";
      c != "" && Cc.bFa(c) && G.cla(c);
      switch (G.lp()) {
        case "ja":
        case "ko":
        case "ru":
          ((ea.i1 = 0.8), (ea.j1 = 1.2));
      }
      this.Mna = la.hP == 1 ? 0 : 1;
      this.dHa = !1;
      try {
        if (this.kja == "windows") {
          let e = la.n6;
          var d = ya.l9a();
          d = d != null ? d : 0;
          la.n6 = d;
          b.set("StoreVersion", d == null ? "null" : "" + d);
          la.save(b);
          e != 0 && d > e && (this.dHa = d > e);
        }
      } catch (e) {}
      ya.hasFeature("version") && this.sNa();
      this.KFa = -1;
      this.zzb(w(this, this.oeb));
    }
    oeb() {
      G.load([276, 277, 278, 279, 280, 281]).xK(w(this, this.start));
    }
    start() {
      this.root.appendChild(ra.Ya(N, [].slice()));
      this.root.appendChild(ra.Ya(Hb, [].slice()));
      this.root.appendChild(ra.Ya(ri, [].slice()));
      let a = new Db("dialogs");
      this.root.appendChild(a);
      this.Hbb(Tk);
      ya.hasFeature("copyright") &&
        this.root.appendChild(ra.Ya(Ik, [].slice()));
    }
    static Seb(a) {
      a == null && (a = "en");
      a = ya.w6a();
      Cc.bFa(a) || (a = "en");
      Da.rg = new Uk(L.seed);
      L.Ibb(function (b) {
        b && L.$mb();
        L.J = new L(a);
      });
    }
    static Lfb() {
      return (L.seed = (L.seed + 1) % 2147483647);
    }
    static eCa() {
      function a(d) {
        d = new TextEncoder().encode(d);
        return si.encode(window.fflate.gzipSync(d));
      }
      let b = la.TJ().stringify("");
      b = a(b);
      let c = la.load().stringify("");
      c = a(c);
      return { packs: b, users: c, seed: K.T(L.seed) };
    }
    static Ibb(a) {
      ya.hasFeature("standalone")
        ? a(!1)
        : tf.init("production", cg.VERSION.toString(), a);
    }
    static $mb() {
      tf.gwa = function (a) {
        try {
          a.state = L.eCa();
        } catch (b) {
          a.state = K.T(Sc.sP(b));
        }
      };
    }
  }
  Ka.SF2.main = L.Seb;
  L.g = "13";
  L.u = Qg;
  Object.assign(L.prototype, { j: L });
  class dg {
    constructor() {
      this.tD = !0;
      this.EK = null;
      this.aG = !1;
      this.P1 = 0;
      this.wJ = !1;
      var a = new Sg(dg.Z6).load().value;
      a == null
        ? ((this.json = {}), this.save())
        : ((this.json = JSON.parse(a)),
          (this.wJ = Kb.Ve(this.json, "i")),
          (a = Kb.Ve(this.json, "c")),
          (this.P1 = a != null ? a : 0),
          (this.aG = Kb.Ve(this.json, "m")),
          (this.EK = Kb.Ve(this.json, "p")),
          (this.tD = Kb.Ve(this.json, "f")));
    }
    save() {
      this.json.i = this.wJ;
      this.json.c = this.P1;
      this.json.m = this.aG;
      this.json.p = this.EK;
      this.json.f = this.tD;
      new Sg(dg.Z6).save(JSON.stringify(this.json));
    }
    reset() {
      new Sg(dg.Z6).delete();
    }
  }
  dg.g = "14";
  Object.assign(dg.prototype, { j: dg });
  class Sg extends Og {
    constructor(a) {
      super(a);
    }
    load() {
      let a = null;
      try {
        a = Zs.Wea().getItem(this.name);
      } catch (b) {}
      return rc.jo(a);
    }
    save(a) {
      try {
        return (Zs.Wea().setItem(this.name, a), rc.jo(!0));
      } catch (b) {
        a = Sc.sP(b).Ema();
        if (a instanceof DOMException) return rc.hAb(a);
        throw b;
      }
    }
    delete() {
      try {
        Zs.Wea().removeItem(this.name);
      } catch (a) {}
      return rc.jo(!0);
    }
  }
  Sg.g = "15";
  Sg.u = Og;
  Object.assign(Sg.prototype, { j: Sg });
  class la {
    static Fe() {
      return la.JD(la.bV).load().value != null;
    }
    static reset() {
      la.JD(la.bV).delete();
      la.JD(la.j7).delete();
      la.flags.reset();
    }
    static init() {
      let a = Ja.mi(10);
      a.A("Versions")
        .appendChild("HaxeVersion")
        .set("value", cg.VERSION.toString());
      a.set("BalancePatch", "1");
      la.hP = 1;
      a.set("StoreVersion", "0");
      la.n6 = 0;
      la.save(a);
    }
    static load() {
      let a = la.JD(la.bV).load().value;
      if (a == null) return null;
      try {
        let b = new cd(si.decode(a));
        a = b.cu(b.wi());
      } catch (b) {}
      try {
        la.hP = 0;
        let b = Rb.parse(a),
          c = K.parseInt(b.attributes.get("BalancePatch"));
        la.hP = c != null ? c : 0;
        let d = K.parseInt(b.attributes.get("StoreVersion"));
        la.n6 = d != null ? d : 0;
        return b;
      } catch (b) {
        return null;
      }
    }
    static save(a) {
      a = a.stringify("\t", !0);
      let b = mb.q3(a, qf.gG).length,
        c = new Tg();
      c.ke(b);
      c.Jna(a);
      a = si.encode(c.Uq().b.Ev);
      la.JD(la.bV).save(a);
    }
    static Zdb() {
      let a = window.document.createElement("input");
      a.type = "file";
      a.id = "fileInput";
      a.accept = ".sf2";
      a.style.display = "none";
      window.document.body.appendChild(a);
      a.addEventListener("change", function (b) {
        b = b.target.files[0];
        if (b != null) {
          let c = new FileReader();
          c.onload = function (d) {
            d = d.target.result;
            if (d.indexOf("SF2") == 0) {
              d = J.substr(d, 3, null);
              d = new cd(si.decode(d));
              la.save(Rb.parse(d.cu(d.wi())));
              la.ska(Rb.parse(d.cu(d.wi())));
              var e = d.fa();
              la.flags.wJ = e == 1;
              d = d.fa();
              la.flags.aG = d == 1;
            }
            L.J.reload();
          };
          c.onerror = function () {
            window.alert("An error occurred during file reading.");
          };
          c.readAsText(b);
        }
      });
      a.click();
    }
    static Zpb() {
      var a = new Tg(),
        b = la.load().stringify("\t", !0);
      a.ke(b.length);
      a.Jna(b);
      b = la.TJ().stringify("\t", !0);
      a.ke(b.length);
      a.Jna(b);
      a.gq(la.flags.wJ ? 1 : 0);
      a.gq(la.flags.aG ? 1 : 0);
      a = URL.createObjectURL(
        new Blob(["SF2" + si.encode(a.Uq().b.Ev)], {
          type: "text/plain;charset=utf-8",
        }),
      );
      b = window.document.createElement("a");
      b.href = a;
      b.download = "save" + K.T(cg.VERSION) + ".sf2";
      b.style.display = "none";
      window.document.body.appendChild(b);
      b.click();
      URL.revokeObjectURL(a);
      window.document.body.removeChild(b);
    }
    static TJ() {
      let a = la.JD(la.j7).load().value;
      return a == null ? new Rb("Packs") : Rb.parse(a);
    }
    static ska(a) {
      a = a.stringify("\t", !0);
      la.JD(la.j7).save(a);
    }
    static JD(a) {
      return ya.k2a(a);
    }
  }
  la.g = "16";
  class Vk {
    constructor() {
      this.bG = new Dc(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      this.u4 = new Dc(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      this.LA = new Dc(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }
    Czb() {
      let a = this.u4,
        b = this.bG;
      this.LA = new Dc(
        a.m11 * b.m11 + a.m12 * b.m21 + a.m13 * b.m31 + a.m14 * b.m41,
        a.m11 * b.m12 + a.m12 * b.m22 + a.m13 * b.m32 + a.m14 * b.m42,
        a.m11 * b.m13 + a.m12 * b.m23 + a.m13 * b.m33 + a.m14 * b.m43,
        a.m11 * b.m14 + a.m12 * b.m24 + a.m13 * b.m34 + a.m14 * b.m44,
        a.m21 * b.m11 + a.m22 * b.m21 + a.m23 * b.m31 + a.m24 * b.m41,
        a.m21 * b.m12 + a.m22 * b.m22 + a.m23 * b.m32 + a.m24 * b.m42,
        a.m21 * b.m13 + a.m22 * b.m23 + a.m23 * b.m33 + a.m24 * b.m43,
        a.m21 * b.m14 + a.m22 * b.m24 + a.m23 * b.m34 + a.m24 * b.m44,
        a.m31 * b.m11 + a.m32 * b.m21 + a.m33 * b.m31 + a.m34 * b.m41,
        a.m31 * b.m12 + a.m32 * b.m22 + a.m33 * b.m32 + a.m34 * b.m42,
        a.m31 * b.m13 + a.m32 * b.m23 + a.m33 * b.m33 + a.m34 * b.m43,
        a.m31 * b.m14 + a.m32 * b.m24 + a.m33 * b.m34 + a.m34 * b.m44,
        a.m41 * b.m11 + a.m42 * b.m21 + a.m43 * b.m31 + a.m44 * b.m41,
        a.m41 * b.m12 + a.m42 * b.m22 + a.m43 * b.m32 + a.m44 * b.m42,
        a.m41 * b.m13 + a.m42 * b.m23 + a.m43 * b.m33 + a.m44 * b.m43,
        a.m41 * b.m14 + a.m42 * b.m24 + a.m43 * b.m34 + a.m44 * b.m44,
      );
    }
    jAb(a, b) {
      var c = this.LA;
      let d = a.x,
        e = a.y,
        f = a.z,
        g = a.w,
        h = 1 / (c.m41 * d + c.m42 * e + c.m43 * f + c.m44 * g);
      a = b.w / 2;
      let k = b.v / 2,
        l = (c.m11 * d + c.m12 * e + c.m13 * f + c.m14 * g) * h;
      c = (c.m21 * d + c.m22 * e + c.m23 * f + c.m24 * g) * h;
      c = new H(a * l + 0 * c + (a + b.x), 0 * l + -k * c + (k + b.y), 0, 1);
      c.x -= b.x;
      c.y -= b.y;
      return c;
    }
  }
  Vk.g = "17";
  Object.assign(Vk.prototype, { j: Vk });
  class Ug extends Vk {
    constructor() {
      super();
      this.origin = new H(0, 0, 0, 1);
      this.position = new H(0, 0, 0, 1);
      this.rotation = 0;
      this.zoom = 1;
      this.eEa = new Dc(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      this.cEa = new Dc(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      this.dEa = new Dc(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      this.ba(1e3, 1e3);
    }
    C(a) {
      this.position.x = a;
      this.yA();
      return a;
    }
    D(a) {
      this.position.y = a;
      this.yA();
      return a;
    }
    IMa(a) {
      this.zoom != a && ((this.zoom = a), this.yA());
    }
    T4() {
      let a = this.position;
      a.x = 0;
      this.rotation = a.y = 0;
      this.zoom = 1;
      this.yA();
    }
    qT() {
      let a = this.origin;
      a.x = 0;
      a.y = 0;
      this.yA();
    }
    Rwa() {
      let a = this.origin;
      a.x = this.width / 2;
      a.y = this.height / 2;
      this.yA();
    }
    ba(a, b) {
      this.width = a;
      this.height = b;
      var c = this.u4;
      c.m11 = 2 / a;
      c.m12 = 0;
      c.m13 = 0;
      c.m14 = -1;
      c.m21 = 0;
      c.m22 = (2 / b) * -1;
      c.m23 = 0;
      c.m24 = 1;
      c.m31 = 0;
      c.m32 = 0;
      c.m33 = -0.001;
      c.m34 = 0;
      c.m41 = 0;
      c.m42 = 0;
      c.m43 = 0;
      c.m44 = 1;
      let d = c.m14;
      c = c.m24;
      let e = this.cEa;
      e.m11 = a / 2;
      e.m12 = 0;
      e.m13 = 0;
      e.m14 = -e.m11 * d + e.m12 * c;
      e.m21 = 0;
      e.m22 = -b / 2;
      e.m23 = 0;
      e.m24 = -e.m21 * d + e.m22 * c;
      e.m31 = 0;
      e.m32 = 0;
      e.m33 = -1e3;
      e.m34 = 0;
      e.m41 = 0;
      e.m42 = 0;
      e.m43 = 0;
      e.m44 = 1;
      this.yA();
    }
    sJa(a, b, c) {
      var d;
      d == null && (d = !1);
      return (d ? a >= c.x && a <= c.x + c.w && b >= c.y && b <= c.y + c.v : 1)
        ? ((a = -1 + (2 * (a - c.x)) / c.w),
          (b = -1 + (2 * (c.y - b)) / c.v),
          (c = this.dEa),
          new H(
            c.m11 * a + c.m12 * b + c.m14,
            c.m21 * a + c.m22 * b + c.m24,
            0,
            1,
          ))
        : null;
    }
    yA() {
      var a = this.bG;
      a.m11 = 1;
      a.m12 = 0;
      a.m13 = 0;
      a.m14 = 0;
      a.m21 = 0;
      a.m22 = 1;
      a.m23 = 0;
      a.m24 = 0;
      a.m31 = 0;
      a.m32 = 0;
      a.m33 = 1;
      a.m34 = 0;
      a.m41 = 0;
      a.m42 = 0;
      a.m43 = 0;
      a.m44 = 1;
      a = this.bG;
      var b = this.position,
        c = b.x;
      b = b.y;
      a.m14 += -c;
      a.m24 += -b;
      var d = this.zoom,
        e = this.zoom;
      a.m11 *= d;
      a.m12 *= d;
      a.m14 *= d;
      a.m21 *= e;
      a.m22 *= e;
      a.m24 *= e;
      e = this.rotation * 0.0174532925199432;
      d = Math.sin(e);
      e = Math.cos(e);
      var f = a.m11,
        g = a.m21;
      a.m11 = e * f - d * g;
      a.m21 = d * f + e * g;
      f = a.m12;
      g = a.m22;
      a.m12 = e * f - d * g;
      a.m22 = d * f + e * g;
      f = a.m14;
      g = a.m24;
      a.m14 = e * f - d * g;
      a.m24 = d * f + e * g;
      a.m14 += c;
      a.m24 += b;
      a.m14 += this.origin.x - this.position.x;
      a.m24 += this.origin.y - this.position.y;
      c = this.bG;
      c.m11 = a.m11;
      c.m12 = a.m12;
      c.m14 = a.m14;
      c.m21 = a.m21;
      c.m22 = a.m22;
      c.m24 = a.m24;
      this.Czb();
      a = this.eEa;
      var h = this.bG;
      c = h.m11;
      b = h.m12;
      d = h.m13;
      e = h.m14;
      f = h.m21;
      g = h.m22;
      var k = h.m23,
        l = h.m24,
        n = h.m31,
        q = h.m32,
        r = h.m33,
        t = h.m34,
        x = h.m41,
        z = h.m42,
        A = h.m43;
      h = h.m44;
      var C = c * g - b * f;
      let B = c * k - d * f,
        D = c * l - e * f,
        F = b * k - d * g,
        M = b * l - e * g,
        Q = d * l - e * k,
        U = n * z - q * x,
        W = n * A - r * x,
        da = n * h - t * x,
        na = q * A - r * z,
        ka = q * h - t * z,
        qa = r * h - t * A,
        oa = 1 / (C * qa - B * ka + D * na + F * da - M * W + Q * U);
      a.m11 = (g * qa - k * ka + l * na) * oa;
      a.m12 = (-b * qa + d * ka - e * na) * oa;
      a.m13 = (z * Q - A * M + h * F) * oa;
      a.m14 = (-q * Q + r * M - t * F) * oa;
      a.m21 = (-f * qa + k * da - l * W) * oa;
      a.m22 = (c * qa - d * da + e * W) * oa;
      a.m23 = (-x * Q + A * D - h * B) * oa;
      a.m24 = (n * Q - r * D + t * B) * oa;
      a.m31 = (f * ka - g * da + l * U) * oa;
      a.m32 = (-c * ka + b * da - e * U) * oa;
      a.m33 = (x * M - z * D + h * C) * oa;
      a.m34 = (-n * M + q * D - t * C) * oa;
      a.m41 = (-f * na + g * W - k * U) * oa;
      a.m42 = (c * na - b * W + d * U) * oa;
      a.m43 = (-x * F + z * B - A * C) * oa;
      a.m44 = (n * F - q * B + r * C) * oa;
      a = this.dEa;
      c = this.eEa;
      b = this.cEa;
      d = c.m11 * b.m12 + c.m12 * b.m22 + c.m13 * b.m32 + c.m14 * b.m42;
      e = c.m11 * b.m13 + c.m12 * b.m23 + c.m13 * b.m33 + c.m14 * b.m43;
      f = c.m11 * b.m14 + c.m12 * b.m24 + c.m13 * b.m34 + c.m14 * b.m44;
      g = c.m21 * b.m11 + c.m22 * b.m21 + c.m23 * b.m31 + c.m24 * b.m41;
      k = c.m21 * b.m12 + c.m22 * b.m22 + c.m23 * b.m32 + c.m24 * b.m42;
      l = c.m21 * b.m13 + c.m22 * b.m23 + c.m23 * b.m33 + c.m24 * b.m43;
      n = c.m21 * b.m14 + c.m22 * b.m24 + c.m23 * b.m34 + c.m24 * b.m44;
      q = c.m31 * b.m11 + c.m32 * b.m21 + c.m33 * b.m31 + c.m34 * b.m41;
      r = c.m31 * b.m12 + c.m32 * b.m22 + c.m33 * b.m32 + c.m34 * b.m42;
      t = c.m31 * b.m13 + c.m32 * b.m23 + c.m33 * b.m33 + c.m34 * b.m43;
      x = c.m31 * b.m14 + c.m32 * b.m24 + c.m33 * b.m34 + c.m34 * b.m44;
      z = c.m41 * b.m11 + c.m42 * b.m21 + c.m43 * b.m31 + c.m44 * b.m41;
      A = c.m41 * b.m12 + c.m42 * b.m22 + c.m43 * b.m32 + c.m44 * b.m42;
      h = c.m41 * b.m13 + c.m42 * b.m23 + c.m43 * b.m33 + c.m44 * b.m43;
      C = c.m41 * b.m14 + c.m42 * b.m24 + c.m43 * b.m34 + c.m44 * b.m44;
      a.m11 = c.m11 * b.m11 + c.m12 * b.m21 + c.m13 * b.m31 + c.m14 * b.m41;
      a.m12 = d;
      a.m13 = e;
      a.m14 = f;
      a.m21 = g;
      a.m22 = k;
      a.m23 = l;
      a.m24 = n;
      a.m31 = q;
      a.m32 = r;
      a.m33 = t;
      a.m34 = x;
      a.m41 = z;
      a.m42 = A;
      a.m43 = h;
      a.m44 = C;
    }
  }
  Ug.g = "18";
  Ug.u = Vk;
  Object.assign(Ug.prototype, { j: Ug });
  class H {
    constructor(a, b, c, d) {
      this.x = a;
      this.y = b;
      this.z = c;
      this.w = d;
    }
  }
  H.g = "19";
  Object.assign(H.prototype, { j: H });
  class Dc {
    constructor(a, b, c, d, e, f, g, h, k, l, n, q, r, t, x, z) {
      this.m11 = a;
      this.m12 = b;
      this.m13 = c;
      this.m14 = d;
      this.m21 = e;
      this.m22 = f;
      this.m23 = g;
      this.m24 = h;
      this.m31 = k;
      this.m32 = l;
      this.m33 = n;
      this.m34 = q;
      this.m41 = r;
      this.m42 = t;
      this.m43 = x;
      this.m44 = z;
    }
  }
  Dc.g = "1A";
  Object.assign(Dc.prototype, { j: Dc });
  class Ec {
    constructor(a, b, c, d) {
      this.x = a;
      this.y = b;
      this.w = c;
      this.v = d;
    }
  }
  Ec.g = "1B";
  Object.assign(Ec.prototype, { j: Ec });
  class N extends Db {
    constructor(a) {
      super(a);
    }
    Z(a) {
      super.Z(a);
      var b = L.J.Ha,
        c = 0,
        d = 0,
        e = (a = 1),
        f = 1,
        g = 1;
      let h = b.Fl,
        k = 0,
        l = h.length;
      for (; k < l; )
        ((c += f * h[k++]),
          (d += g * h[k++]),
          (a -= f * (1 - h[k++])),
          (e -= g * (1 - h[k++])),
          (f = a - c),
          (g = e - d));
      g = b.currentTarget.TP;
      f = b.currentTarget.width * g;
      b = b.currentTarget.height * g;
      N.rect = new Ec(
        (f * c) | 0,
        (b * d) | 0,
        (f * (a - c)) | 0,
        (b * (e - d)) | 0,
      );
      N.io = N.rect.w != N.width || N.rect.v != N.height;
      N.width = N.rect.w;
      N.height = N.rect.v;
      N.lc = N.width / N.height;
      a = N.width;
      e = N.height;
      N.Pha = a > e ? e : a;
      N.Ta.T4();
      N.Ta.qT();
      N.Ta.ba(N.width, N.height);
      L.J.ed().Eb(0) &&
        ((N.c4.length = 0), ma.Kg() != null && ma.Kg().node.Bd(N.mn(0), N.c4));
    }
    static mn(a) {
      a == null && (a = 0);
      a = L.J.ed().position[a];
      return N.Ta.sJa(a.x, a.y, N.rect);
    }
    static hn(a) {
      let b = N.rect;
      return new hb(b.x, b.y, b.x + b.w, b.y + b.v).hn(a);
    }
  }
  N.g = "1C";
  N.u = Db;
  Object.assign(N.prototype, { j: N });
  class tf {
    static gwa() {}
    static ctb(a) {
      if (tf.up)
        try {
          window.Sentry.setTag("sf2_portal", a);
        } catch (b) {}
    }
    static init(a, b, c) {
      if (window.Sentry === void 0) {
        let d = window.document.createElement("script");
        d.type = "text/javascript";
        d.src =
          "https://js-de.sentry-cdn.com/d909540e7ef16a3654c38f250e1b8fd7.min.js";
        d.setAttribute("crossorigin", "anonymous");
        d.setAttribute("data-lazy", "no");
        d.onload = function () {
          tf.init(a, b, c);
        };
        d.onerror = function () {
          c(!1);
        };
        window.document.body.append(d);
      } else
        (window.Sentry.init({
          dsn: "https://d909540e7ef16a3654c38f250e1b8fd7@o4511496128495616.ingest.de.sentry.io/4511496133738576",
          release: b,
          dist: a,
          environment: "production",
          beforeSend: function (d) {
            d.extra = {};
            tf.gwa(Kb.Ve(d, "extra"));
            return d;
          },
        }),
          c(!0),
          (tf.up = !0));
    }
  }
  tf.g = "1D";
  class Wk extends O {
    constructor() {
      super();
      this.mG = Fc.aa(E.get(281), this.node.L);
      this.sG = R.aa(E.get(280), null, this.node);
      this.sG.jk(0.5, 1);
      this.sG.Un(0.5, 1);
      this.qy = R.aa(E.get(277), null, this.node);
      this.qy.jk(0.5, 0);
      this.qy.Un(0.5, 0);
      this.qe = R.aa(E.get(276), null, this.node);
      this.qe.Ga();
      this.Mo = new ea(E.get(278, 16), this.node);
      this.Mo.Ia(128);
      this.Mo.La(Z.sc);
      this.Mo.IF(!0);
      this.v5(0);
    }
    v5(a) {
      let b;
      switch (G.lp()) {
        case "de":
          b = "Laden";
          break;
        case "es":
          b = "Cargando";
          break;
        case "fr":
          b = "Chargement";
          break;
        case "it":
          b = "Caricamento";
          break;
        case "ja":
          b = "\u8aad\u307f\u8fbc\u307f\u4e2d";
          break;
        case "ko":
          b = "\ub85c\ub529 \uc911";
          break;
        case "pt":
          b = "Carregando";
          break;
        case "ru":
          b = "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430";
          break;
        case "tr":
          b = "Y\u00fckleniyor";
          break;
        default:
          b = "Loading";
      }
      this.Mo.V("" + b + " " + a + "%");
    }
    B() {
      super.B();
      E.iD(276, 277, 278, 279, 280, 281);
      G.Vr(279);
    }
    Z(a) {
      super.Z(a);
      var b = N.width;
      a = N.height;
      let c = N.lc;
      this.qy.mf(
        Math.min(b, a) *
          (0.7 +
            (c < 1
              ? 0.2 + (((c < 0.5 ? 0.5 : c > 1 ? 1 : c) - 0.5) / 0.5) * -0.2
              : -0.2 * ((c < 1 ? 1 : c > 2 ? 2 : c) - 1))),
      );
      this.qy.C(b / 2);
      if (c < 0.6) {
        let d = this.qy,
          e = this.qy.ra();
        d.D(
          e +
            (((c < 0.5 ? 0.5 : c > 0.6 ? 0.6 : c) - 0.5) /
              0.09999999999999998) *
              (0 - e),
        );
      } else this.qy.D(this.qy.ra() * 0.25);
      this.sG.mf(
        b *
          (c < 1
            ? 2.2 +
              (((c < 0.5 ? 0.5 : c > 1 ? 1 : c) - 0.5) / 0.5) *
                -1.2000000000000002
            : 1 + -0.5 * ((c < 1 ? 1 : c > 2 ? 2 : c) - 1)),
      );
      this.sG.D(a);
      this.sG.C(b / 2);
      this.qe.C(b / 2);
      this.qe.D(this.sG.qa);
      c < 1 ? this.qe.mf(b * 0.5) : this.qe.mf(a * 0.4);
      b = this.qe;
      b.D(b.qa - a * 0.15);
      a = this.qe.ra();
      this.Mo.Fa(this.qe.ya() * 0.75, a);
      this.Mo.ua(a * 0.4);
      this.Mo.C(this.qe.za);
      this.Mo.D(this.qe.qa);
      this.Mo.Ga();
    }
  }
  Wk.g = "1E";
  Wk.u = O;
  Object.assign(Wk.prototype, { j: Wk });
  class y {}
  y.g = "1F";
  class K {
    static T(a) {
      return ob.DM(a, "");
    }
    static parseInt(a) {
      a = parseInt(a);
      return isNaN(a) ? null : a;
    }
  }
  K.g = "20";
  class uf {
    constructor() {
      this.b = "";
    }
  }
  uf.g = "21";
  Object.assign(uf.prototype, { j: uf });
  class Eb {
    static ODa(a, b) {
      let c = "",
        d = 0;
      for (; d < a.length; ) {
        var e = a;
        let f = d++,
          g = e.charCodeAt(f);
        g >= 55296 &&
          g <= 56319 &&
          (g = ((g - 55232) << 10) | (e.charCodeAt(f + 1) & 1023));
        e = g;
        e >= 65536 && ++d;
        switch (e) {
          case 34:
            c = b ? c + "&quot;" : c + String.fromCodePoint(e);
            break;
          case 38:
            c += "&amp;";
            break;
          case 39:
            c = b ? c + "&#039;" : c + String.fromCodePoint(e);
            break;
          case 60:
            c += "&lt;";
            break;
          case 62:
            c += "&gt;";
            break;
          default:
            c += String.fromCodePoint(e);
        }
      }
      return c;
    }
    static $Ea(a, b) {
      a = J.Jh(a, b);
      return a > 8 && a < 14 ? !0 : a == 32;
    }
    static cGa(a) {
      let b = a.length,
        c = 0;
      for (; c < b && Eb.$Ea(a, c); ) ++c;
      return c > 0 ? J.substr(a, c, b - c) : a;
    }
    static ipb(a) {
      let b = a.length,
        c = 0;
      for (; c < b && Eb.$Ea(a, b - c - 1); ) ++c;
      return c > 0 ? J.substr(a, 0, b - c) : a;
    }
    static trim(a) {
      return Eb.cGa(Eb.ipb(a));
    }
    static bGa(a) {
      var b;
      let c = "";
      for (b = 2 - a.length; c.length < b; ) c += "0";
      return c + (a == null ? "null" : "" + a);
    }
    static replace(a, b, c) {
      return a.split(b).join(c);
    }
    static HDa(a, b) {
      let c = "";
      do ((c = "0123456789ABCDEF".charAt(a & 15) + c), (a >>>= 4));
      while (a > 0);
      if (b != null) for (; c.length < b; ) c = "0" + c;
      return c;
    }
  }
  Eb.g = "22";
