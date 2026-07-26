// 039-ui-widgets.js
// Domain: ui  |  24 class(es)  |  tree root(s): hv, ye, iv, xy, Ee, Y, Cc, rd, Wb, kv, Xc, An, ov, xa, Mc, yy, Cn, qv, qg, qh, we, zy, yj, hz
// Edit here. Run `npm run build` to reassemble the full bundle.
  class hv {
    constructor(a) {
      a.attributes.get("Level") != null
        ? (this.lH = this.jH = u.I(a.attributes.get("Level")))
        : ((this.lH = u.I(a.attributes.get("MinLevel"))),
          (this.jH = u.I(a.attributes.get("MaxLevel"), 2147483647)));
      this.value = u.I(a.attributes.get("Value"));
    }
    YZa(a) {
      return a >= this.lH ? a <= this.jH : !1;
    }
  }
  hv.g = "1A8";
  Object.assign(hv.prototype, { j: hv });
  class ye {
    constructor() {
      this.mKa = m.l();
      this.G7 = m.l();
    }
    parse() {
      this.G7.length = 0;
      this.mKa.length = 0;
      let a = Ja.mi(1298);
      var b = a.A("AspectScale");
      if (b != null) {
        b = b.children;
        for (var c = 0; c < b.length; ) this.G7.push(new hv(b[c++]));
      }
      b = a.A("Recipes");
      if (b != null)
        for (b = b.children, c = 0; c < b.length; )
          this.mKa.push(new iv(b[c++]));
      u.I(a.attributes.get("MaxDeviation"), 30);
    }
    X8a(a) {
      var b = a.split("|");
      if (b.length == 0) return null;
      a = b.length > 1 ? b[1] : "";
      b = p.o.xa.Rj(b[0]);
      if (b == null) return null;
      b = b.EH;
      return b == null || b.lT.name != a ? null : b;
    }
    qea(a) {
      a = this.G5a(a);
      return a != null ? a.value : 0;
    }
    G5a(a) {
      let b = 0,
        c = this.G7;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.YZa(a)) return d;
      }
      return null;
    }
    static F() {
      let a = ye.Hb;
      return a != null ? a : (ye.Hb = new ye());
    }
  }
  ye.g = "1A9";
  Object.assign(ye.prototype, { j: ye });
  class iv {
    constructor() {
      this.name = "";
      debugger;
    }
    p_a() {
      debugger;
      return null;
    }
  }
  iv.g = "1AA";
  Object.assign(iv.prototype, { j: iv });
  class xy {
    constructor(a) {
      this.Xeb = m.l();
      debugger;
      a.attributes.get("Level") != null
        ? (this.lH = this.jH = u.I(a.attributes.get("Level")))
        : ((this.lH = u.I(a.attributes.get("MinLevel"))),
          (this.jH = u.I(a.attributes.get("MaxLevel"), 2147483647)));
      this.Ec = u.I(a.attributes.get("DeliveryTime"));
      this.Od = xb(a.attributes.get("BonusDeliveryPrice"));
      a = a.rea().v;
      let b = Object.keys(a),
        c = b.length,
        d = 0;
      for (; d < c; ) {
        var e = b[d++];
        let f = a[e];
        Cb(e, "Level") ||
          e == "DeliveryTime" ||
          e == "BonusDeliveryPrice" ||
          ((e = v.Tq.AD(e)), e != null && this.Xeb.push(new $g(e, u.I(f))));
      }
    }
  }
  xy.g = "1AB";
  Object.assign(xy.prototype, { j: xy });
  class Ee {}
  Ee.g = "1AC";
  class Y {
    static na(a, ...b) {
      if (!Y.L3a) {
        a = Cb(a, Y.cP) ? Y.k9a(a) : Y.jCa(a, ...b);
        b = a.split("");
        let c = 0;
        for (; c < b.length && b[c] == " "; ) ++c;
        a = a.substring(c);
      }
      return a;
    }
    static k9a(a) {
      if (a == null || a == "" || !Cb(a, Y.cP)) return a;
      Y.aN.M = "";
      Y.wG.M = "";
      var b = 0;
      let c = 0;
      for (; c < a.length; ) {
        var d = a.charAt(c++);
        d == Y.cP && ++b;
        b == 0 && (Y.wG.M += d);
        b == 1 && d != Y.cP && (Y.aN.M += d);
        b == 2 &&
          ((b = Y.wG), (d = Y.jCa(Y.aN.M)), (b.M += d), (Y.aN.M = ""), (b = 0));
      }
      a = Y.wG;
      a.M = Eb.replace(a.M, "{br}", "\n");
      return Y.wG.M;
    }
    static jCa(a, ...b) {
      return Cc.F().nn(a, ...b);
    }
    static y9a(a) {
      if (a == null || a == "") return Z.Coa;
      if (Cc.F().Xxa(a)) return a;
      debugger;
      let b = ["_s", "_Zone7", "_gp", "_Zone7_gp"],
        c = 0;
      for (; c < b.length; ) {
        let d = b[c];
        ++c;
        if (a.length <= d.length || !Zf(a, d)) continue;
        a = a.substring(0, a.length - d.length);
        if (Cc.F().Xxa(a)) return a;
        break;
      }
      return Z.Coa;
    }
  }
  Y.g = "1AD";
  class Cc {
    constructor() {
      this.WU = new Map();
      this.fYa = new gd();
      this.gYa = new gd();
      this.hYa = new gd();
      this.eeb();
      this.deb();
    }
    eeb() {
      function a(b, c) {
        b.clear();
        c = Rc(c, " ", "");
        let d = 0;
        for (; d < c.length; ) b.add(c.charAt(d++));
      }
      a(this.hYa, "`\u011fjJ_");
      a(
        this.fYa,
        "!? \u0130\u00ee khlifdt \u00d5\u00f5\u00c3\u00e3\u00cd\u00ed \u00d1\u00f1 \u0401\u0451\u0419\u0439 \u00c4\u00e4\u00d6\u00f6\u00dc\u00fc \u011e \u0401\u0451 \u00c9\u00e9 \u00cb\u00eb\u00cf\u00ef\u00dc\u00fc\u0178\u00ff \u00c0\u00e0\u00c8\u00e8\u00d9\u00f9 \u00c2\u00e2\u00ca\u00ea\u00ce\u00ee\u00d4\u00f4\u00db\u00fb \u00e1\u00e9\u00e8\u00ec\u00ed\u00ee\u00f2\u00f3\u00f9\u00fa \u00c1\u00c9\u00c8\u00cc\u00cd\u00ce\u00d2\u00d3\u00d9\u00da",
      );
      a(
        this.gYa,
        "Q\u0434\u0440\u0443\u0444\u0446\u0449 ,; \u00a1\u00bfqpyg \u015e\u015f\u00c7\u00e7",
      );
    }
    Xxa(a) {
      return a == null || a == "" ? !1 : X.Xa(this.WU, a);
    }
    nn(a, ...b) {
      if (a == null || a == "") return "";
      var c = m.l();
      b != null && m.addRange(c, b.slice());
      b = a;
      var d = !1,
        e = a.indexOf("{");
      e != -1 && ((d = !0), (b = a.substring(0, e)));
      if (!X.Xa(this.WU, b)) return Cc.A7;
      b = this.WU.get(b);
      b = Rc(Rc(Rc(b, "{br}", "\n"), "&lt;", "<"), "&gt;", ">");
      var f = new Ua("<size=\\d+>([\\s\\S]*?)</size>", "g");
      f.match(b) && (b = f.mg(1));
      if (d)
        for (d = e; d != -1; ) {
          e = a.indexOf("}", d + 1);
          if (
            (e > a.indexOf("{", d + 1) && a.indexOf("{", d + 1) != -1) ||
            e == -1
          )
            break;
          c.push(J.substr(a, d + 1, e - d - 1));
          d = a.indexOf("{", d + 1);
        }
      if (c.length != 0)
        for (a = b.indexOf("{"); a != -1; ) {
          d = b.indexOf("}", a + 1);
          if (
            (d > b.indexOf("{", a + 1) && b.indexOf("{", a + 1) != -1) ||
            d == -1
          )
            break;
          d = J.substr(b, a + 1, d - a - 1);
          f = K.parseInt(d);
          if (f == null) {
            e = K;
            f = e.parseInt;
            var g = d.toUpperCase(),
              h = Z.eQa;
            g = g.replace(new RegExp("^[" + h.join("") + "]+", "g"), "");
            g = g.replace(new RegExp("[" + h.join("") + "]+$", "g"), "");
            f = f.call(e, g);
          }
          e = "";
          f < 0 || f >= c.length || (e = c[f]);
          f = qd(e, "img::");
          g = qd(e, "prefabid::");
          h = qd(e, "strike::");
          if (f || g || h)
            (f
              ? ((f = e.split("::")[1]),
                f.indexOf("MiscSprites.") != -1 &&
                  ((f = J.substr(f, 12, null)), (e = "img::" + f)),
                (e = Rc(e, "img::", "<quad name=")))
              : g
                ? (e = Rc(e, "prefabid::", "<quad name=none prefabid="))
                : h && (e = Rc(e, "strike::", "<strike ")),
              (e = Rc(e, "^", " ")),
              (e = Rc(e, "::", "=")),
              Cb(e, " size=") || (e += " size=1 "),
              Cb(e, " width=") || (e += " width=1 "),
              (e += " >"));
          b = Rc(b, "{" + d + "}", e);
          a += 1;
          a = b.length <= a ? -1 : b.indexOf("{", a);
        }
      b = this.u_a(b);
      if (b.indexOf("<quad") != -1)
        for (
          c = new Ua(
            "<quad name=(\\S+)\\s+size=(\\d+)\\s+width=(\\d+)\\s+>",
            "",
          ),
            a = b;
          c.match(a);

        ) {
          a = c.mg(1);
          a = Eb.replace(a, ".", "/");
          d = K.parseInt(c.mg(2));
          e = K.parseInt(c.mg(3));
          if (d != 1 || e != 1) debugger;
          b = b.replace(c.r, "<image>" + a + "</image>");
          a = c.tGa();
        }
      return b;
    }
    u_a(a) {
      var b = a;
      for (a = a.indexOf("%"); a != -1; ) {
        if (a + 1 < b.length && b.charAt(a + 1) == "%")
          ((b = nf(b, a, 1)), (a += 1));
        else {
          let c = J.substr(b, a + 1, this.N9a(b, a) - a - 1);
          if (c == null || c == "") {
            b = nf(b, a, 1);
            if (a < 0 || a > b.length) throw 19;
            b = b.slice(0, a) + Cc.A7 + b.slice(a);
            a += Cc.A7.length;
          } else {
            let d = this.nn(c);
            b = Rc(b, "%" + c, d);
            a += d.length;
          }
        }
        a = a < b.length ? b.indexOf("%", a) : -1;
      }
      return b;
    }
    N9a(a, b) {
      a: {
        var c = Cc.dUa;
        b == null && (b = 0);
        let d = a.length;
        for (; b < d; ) {
          let e = b++,
            f = 0;
          for (; f < c.length; )
            if (a.charAt(e) == c[f++]) {
              c = e;
              break a;
            }
        }
        c = -1;
      }
      return c == -1 ? a.length : c;
    }
    deb() {
      X.clear(this.WU);
      var a = Rb.Xia(G.nn(G.uf("lang/" + G.lp() + ".xml"))).A("Words");
      if (a != null) {
        a = a.children;
        let b = 0;
        for (; b < a.length; ) {
          let c = a[b++],
            d = c.attributes.get("Title");
          this.mXa(d != null ? d : "", c.value);
        }
      }
    }
    mXa(a, b) {
      this.WU.set(a, b);
    }
    static bFa(a) {
      return new Ua("^(" + jv.join("|") + ")$", "").match(a);
    }
    static F() {
      let a = Cc.Hb;
      return a != null ? a : (Cc.Hb = new Cc());
    }
  }
  Cc.g = "1AE";
  Object.assign(Cc.prototype, { j: Cc });
  class rd {
    constructor() {
      this.ovb = !1;
      this.uVa = "push_full_energy";
      this.tVa = "push_energy_to_fight";
      this.vVa = "push_periodic";
      this.iX = "Shadow Fight 2";
    }
    Cvb() {
      return this.ovb ? !0 : !1;
    }
    T1a(a) {
      this.createNotification(2, this.iX, Y.na(this.vVa), a);
    }
    Q1a(a) {
      this.wca(4, this.iX, Y.na(this.tVa), a);
    }
    R1a(a) {
      this.wca(8, this.iX, Y.na(this.uVa), a);
    }
    S1a(a, b) {
      this.wca(16, this.iX, a, b);
    }
    wca(a, b, c, d) {
      this.Cvb() && this.createNotification(a, b, c, d);
    }
    createNotification() {}
    static F() {
      let a = rd.Hb;
      return a != null ? a : (rd.Hb = new rd());
    }
  }
  rd.g = "1AF";
  Object.assign(rd.prototype, { j: rd });
  class Wb {
    constructor() {
      this.NI = m.l();
      this.s_ = m.l();
      this.Qa = Fc.Ed(-2147483648);
      ma.Kg().Rr.df.appendChild(this.Qa.L);
      this.Qa.wa(0);
      this.Qa.R(!1);
    }
    spb(a, b) {
      switch (a) {
        case 40:
          this.Lf = new wn();
          break;
        case 50:
          this.Lf = new xn();
          break;
        case 280:
          this.Lf = new Pd();
          break;
        case 290:
        case 300:
          this.Lf = new vj();
          break;
        case 310:
          this.Lf = new yn();
          break;
        case 340:
          this.Lf = new Ve();
          break;
        case 350:
          this.Lf = new oh();
          break;
        case 370:
          this.Lf = new zn();
          break;
        case 500:
          this.Lf = new og();
      }
      this.NI.push(this.Lf);
      this.s_.push(new kv(this.Lf, !0));
      this.dPa();
      Ib.Hxa();
      this.Lf.bj(b);
      a = L.J.root.aAa(function (c) {
        return c.name == "dialogs";
      });
      ma.Kg().Rr.df.appendChild(this.Lf.node.L);
      a.appendChild(this.Lf);
      this.Lf.start();
      this.cxa();
    }
    cxa() {
      new An().a1a(this.NI);
    }
    dPa() {
      var a = this.s_;
      a = !(a == null || a.length == 0);
      let b = 0,
        c = this.s_;
      for (; b < c.length; )
        if (!c[b++].jNa) {
          a = !1;
          break;
        }
      this.R3a(a);
    }
    R3a(a) {
      let b = this;
      a
        ? (this.Qa.R(a), this.Qa.wa(0), this.Qa.A6(1, null, dc.Nn()))
        : (this.Qa.wa(1),
          this.Qa.A6(
            0,
            function () {
              b.Qa.R(!1);
            },
            dc.PK(),
          ));
    }
    Xwb(a) {
      m.jF(this.NI, function (c) {
        return c == a;
      });
      m.jF(this.s_, function (c) {
        return c.UP == a;
      });
      var b = this.NI;
      b != null && b.length != 0
        ? ((b = this.NI), (this.Lf = b[b.length - 1]))
        : (this.Lf = null);
      this.dPa();
      this.cxa();
    }
    F0a() {
      for (; this.Lf != null && !this.Lf.SEa; ) this.Lf.close(!0);
    }
    z4a(a) {
      return m.find(this.NI, function (b) {
        return ob.CM(b, a);
      });
    }
    static F() {
      let a = Wb.Hb;
      return a != null ? a : (Wb.Hb = new Wb());
    }
    static openDialog(a, b) {
      Wb.F().spb(a, b);
      return Wb.F().Lf;
    }
  }
  Wb.g = "1B0";
  Object.assign(Wb.prototype, { j: Wb });
  class kv {
    constructor(a, b) {
      this.jNa = !0;
      this.UP = a;
      b != null && (this.jNa = b);
    }
  }
  kv.g = "1B1";
  Object.assign(kv.prototype, { j: kv });
  class Xc {
    static vib(a, b, c, d, e, f) {
      var g;
      g == null && (g = !1);
      e == null && (e = 0);
      Wb.F().z4a(oh) == null && Wb.openDialog(350, new lv(a, b, c, d, e, f, g));
    }
    static pib(a) {
      return Wb.openDialog(370, a);
    }
    static iib(a) {
      return Xc.Lia(a);
    }
    static Lia(a) {
      return Xc.tib(a);
    }
    static tib(a) {
      let b = !0,
        c = 0,
        d = a.tk.length;
      for (; c < d; ) a.tk[c++].gNa() || (b = !1);
      if ((a.tk.length > 0 && a.tk[0].UC && a.tk[0].Mc <= 0) || (a.CY && !b))
        a.ge != null && a.ge(a.tk[0].id);
      else return Wb.openDialog(290, a);
      return null;
    }
    static qib(a, b, c, d, e, f, g, h, k, l, n, q, r, t) {
      let x = 3;
      if (c == null || c == "" || d == null || d == "")
        ((x = 0),
          c != null && c != "" ? (x = 1) : d != null && d != "" && (x = 2));
      a = new ph(a, b, x, c, d, f, g, h, k, l, e);
      a.zU = n;
      a.r3 = q;
      a.Jwa = r;
      a.z1 = t;
      n = Wb.openDialog(340, a);
      e != null && n.addEventListener(0, e);
      return n;
    }
    static GIa(a, b, c, d, e, f, g, h, k, l) {
      var n, q, r, t;
      t == null && (t = !0);
      r == null && (r = !0);
      q == null && (q = !0);
      n == null && (n = !0);
      l == null && (l = "");
      k == null && (k = !1);
      h == null && (h = !1);
      g == null && (g = "EButtonDark");
      f == null && (f = "EButtonWhite");
      d == null && (d = "");
      return Xc.qib(a, b, c, d, e, f, g, h, k, l, n, q, r, t);
    }
    static EIa() {
      Xc.GIa("dlgDuelLockedTitle", "dlgDuelLockedMessage", "OK", "");
    }
    static uib(a) {
      Wb.openDialog(
        40,
        new mv("dlgExitFightTitle", "dlgExitFightMessage", !1, a),
      );
    }
    static nib() {
      Wb.openDialog(310, null);
    }
    static sib(a, b, c, d, e, f, g, h, k, l, n) {
      var q = null,
        r = null;
      n == null && (n = 0);
      r == null && (r = !1);
      q == null && (q = !0);
      l == null && (l = "EButtonDark");
      k == null && (k = "EButtonWhite");
      h == null && (h = "");
      g == null && (g = !1);
      f == null && (f = "CANCEL");
      let t = 0;
      for (; t < c.length; ) c[t++].gNa();
      if (c.length > 0 && c[0].UC && c[0].Mc <= 0) e != null && e(c[0].id);
      else
        return Wb.openDialog(
          280,
          new nv(a, b, c, d, e, h, f, g, k, l, q, r, 840, n),
        );
      return null;
    }
    static jib() {
      Wb.openDialog(50, null);
    }
  }
  Xc.g = "1B2";
  class An {
    constructor() {}
    a1a(a) {
      if (a != null && a.length != 0) {
        for (var b = m.l(), c = 0; c < a.length; ) b.push(new ov(a[c++]));
        a = b.length - An.Z8a(b);
        a = a < 0 ? 0 : a > 2147483647 ? 2147483647 : a;
        for (c = 0; c < a; ) b[c++].setActive(!1);
        for (c = b.length; a < c; ) b[a++].setActive(!0);
      }
    }
    static Z8a(a) {
      if (a.length <= 1) return 1;
      a = a[a.length - 1].UP;
      return a == null ? 1 : a.type == Ve ? 2 : 1;
    }
  }
  An.g = "1B3";
  Object.assign(An.prototype, { j: An });
  class ov {
    constructor(a) {
      this.UP = a;
    }
    setActive(a) {
      this.UP != null && this.UP.Y(a);
    }
  }
  ov.g = "1B4";
  Object.assign(ov.prototype, { j: ov });
  class xa {
    constructor() {
      this.Y$ = null;
      this.MN = this.NN = this.Zpa = this.eta = this.AVa = !1;
      this.Td = new pv();
      this.NE = new V();
      this.v3 = new V();
      this.Tf = new V();
      this.z3 = new V();
      this.zia = new V();
    }
    rp(a, b, c, d) {
      d == null && (d = !0);
      if (!$d.CZa() || xa.KYa) return !1;
      var e = ha.F().ta;
      e.ALa = e.$o;
      e.CLa = Bn.zOa(a);
      e = wj.L0(e.II);
      let f = xa.q9a(a, b);
      if (b != null || (a != 4 && a != 7)) this.Td.data = b;
      if (d && v.Ewa(e, f)) return !1;
      za.instance != null && za.instance.K6();
      this.Td.OJa = this.Td.Wf;
      this.Td.Wf = a;
      this.Td.ge = c;
      this.zia.$(this.Td);
      this.Td.Wf == 6 ? ya.j5a(L.J.KFa, w(this, this.uLa)) : this.uLa();
      return !0;
    }
    uLa() {
      this.v3.$(this.Td.OJa);
      Wb.F().F0a();
      $d.load(this.Td.Wf);
      this.z3.$(this.Td.Wf);
    }
    Chb() {
      if (this.Td.Wf != 0)
        if (this.Td.ge != null) {
          debugger;
          this.Td.ge(null);
          this.Td.ge = null;
        } else ha.F().wT();
      this.Tf.$(this.Td.Wf);
      ha.F().ta.$o = Bn.zOa(this.Td.Wf);
      ha.F().Vf("QUEST_EVENT_SCENE_LOADED");
      this.NE.$();
    }
    kib() {
      this.Chb();
      v.LU();
    }
    nE() {
      return p.o == null ? !0 : p.o.Bi.$Q();
    }
    reload() {
      debugger;
    }
    ULa(a, b) {
      b == null && (b = !0);
      this.Zpa = a;
      this.gxa(b);
    }
    z5(a, b, c) {
      c == null && (c = 0);
      b == null && (b = !0);
      let d = this.Y$;
      d != null && d.B();
      this.Y$ = null;
      let e = this;
      if (c > 0 && a) {
        debugger;
        this.Y$ = new Re(function () {
          e.z5(a, b, 0);
        }, c / 1e3);
      } else ((this.eta = a), this.gxa(b));
    }
    gxa(a) {
      let b = this.Zpa || this.eta || this.AVa;
      this.MN != b
        ? ((this.MN = b),
          (this.NN = a),
          this.MN ? this.lock(this.NN) : this.unlock())
        : this.MN &&
          this.MN == b &&
          this.NN != a &&
          ((this.NN = a), this.unlock(), this.lock(this.NN));
    }
    lock(a) {
      xj.lock(a);
      L.J.B_(!1);
    }
    unlock() {
      xj.unlock();
      L.J.B_(!0);
    }
    static F() {
      let a = xa.Hb;
      return a != null ? a : (xa.Hb = new xa());
    }
    static q9a(a, b) {
      switch (a) {
        case 4:
          return b != null ? b.b6 : 1;
        case 5:
          return 16;
        case 7:
          return 10;
        default:
          return 0;
      }
    }
  }
  xa.g = "1B5";
  Object.assign(xa.prototype, { j: xa });
  class Mc {
    constructor() {
      this.Su = null;
      this.Xha = !1;
      this.Cq = m.l();
    }
    OS() {
      this.Su = la.TJ();
      let a = this.Su.children,
        b = 0;
      for (; b < a.length; ) {
        let d = this.dJa(a[b++]);
        this.Cq.push(d);
      }
      this.Cq.sort(pg.compare);
      let c = this;
      m.forEach(this.Cq, function (d) {
        c.Taa(d);
      });
      this.AKa();
      this.Cq.sort(pg.compare);
      m.forEach(this.Cq, function (d) {
        c.Taa(d);
      });
      this.AKa();
    }
    MEa(a) {
      return this.NEa(a) ? this.b2(a) : !0;
    }
    b2(a) {
      let b = hd.F().wm.NQ(a),
        c = m.find(this.Cq, function (d) {
          return d.name == a;
        });
      return c == null ? !1 : b != null ? b.url == c.url : !0;
    }
    reset() {
      this.Cq.length = 0;
      this.Xha = !1;
    }
    Taa(a) {
      a.PJ = !0;
    }
    dJa(a) {
      let b = new pg();
      var c = a.attributes.get("Name");
      b.name = c != null ? c : null;
      c = a.attributes.get("Url");
      b.url = c != null ? c : null;
      c = a.attributes.get("Version");
      b.version = c != null ? c : null;
      b.isReload = u.ka(a.attributes.get("Reload"));
      b.ei = u.ka(a.attributes.get("Attach"));
      c = a.attributes.get("Hash");
      b.hash = c != null ? c : "";
      b.priority = u.I(a.attributes.get("Priority"));
      return b;
    }
    AKa() {
      let a = 0,
        b = m.tj(this.Cq, function (c) {
          return !c.PJ;
        });
      for (; a < b.length; ) this.cda(b[a++].name);
    }
    $cb(a) {
      return this.n8a(a) != null;
    }
    n8a(a) {
      return m.find(this.Cq, function (b) {
        return b.name == a;
      });
    }
    NEa(a) {
      return hd.F().wm.NQ(a) != null;
    }
    vXa(a, b, c, d, e) {
      var f;
      f == null && (f = 0);
      if (this.Su != null) {
        this.$cb(a) && this.cda(a, !1);
        var g = this.Su.appendChild("Pack");
        g.set("Name", a);
        g.set("Url", b);
        g.set("Version", c);
        g.set("Attach", d ? "1" : "0");
        g.set("Hash", e);
        g.set("Priority", f == null ? "null" : "" + f);
        la.ska(this.Su);
        a = this.dJa(g);
        a != null && (this.Cq.push(a), this.Taa(a), a.PJ || this.cda(a.name));
      }
    }
    cda(a, b) {
      b == null && (b = !0);
      if (this.Su != null) {
        b = m.l();
        for (var c = this.Su.children, d = 0; d < c.length; ) {
          let e = c[d++],
            f = e.attributes.get("Name");
          (f != null ? f : null) == a && b.push(e);
        }
        if (b.length > 0) {
          for (c = 0; c < b.length; ) this.Su.Af(b[c++]);
          b.length = 0;
        }
        la.ska(this.Su);
        m.jF(this.Cq, function (e) {
          return e.name == a;
        });
      }
    }
    static F() {
      let a = Mc.Hb;
      return a != null ? a : (Mc.Hb = new Mc());
    }
  }
  Mc.g = "1B6";
  Object.assign(Mc.prototype, { j: Mc });
  class yy {}
  yy.g = "1B7";
  yy.Ei = !0;
  class Cn {
    constructor() {
      this.bqa = new Ai();
    }
    v5a() {
      return m.tj(this.bqa.config.Wfa(), function (a) {
        return a.Kga() ? !1 : a.dxa();
      });
    }
    J5a(a) {
      return m.tj(this.bqa.config.Wfa(), function (b) {
        return b.type != a || b.Kga() ? !1 : b.dxa();
      });
    }
  }
  Cn.g = "1B8";
  Cn.Rb = [yy];
  Object.assign(Cn.prototype, { j: Cn });
  class qv {
    constructor(a) {
      this.mWa = a;
      let b = this;
      xa.F().zia.addListener(function (c) {
        c.Wf == 4 && b.mWa.RU(new qg(!0));
      });
    }
  }
  qv.g = "1B9";
  Object.assign(qv.prototype, { j: qv });
  class qg {
    constructor(a, b, ...c) {
      b == null && (b = "");
      this.cza = "";
      this.SE = "{_$PacksSummarySize}";
      this.K4a = a;
      this.Wib = m.t_(c.slice());
      b == null || lc(b) || Zf(b, this.SE) || (b += this.SE);
      this.cza = b;
    }
  }
  qg.g = "1BA";
  Object.assign(qg.prototype, { j: qg });
  class qh {
    constructor(a, b) {
      this.kma = a;
      this.wm = b;
    }
  }
  qh.g = "1BB";
  Object.assign(qh.prototype, { j: qh });
  class we {
    constructor() {
      this.Lsa = new yj();
      this.Msa = new Cn();
      this.Pia = new V();
    }
    RU(a, b) {
      let c = this.o8a(a.Wib);
      if (c.length == 0)
        (this.Pia.$(new qh(!0, c)), b != null && b(new qh(!0, c)));
      else {
        var d = function () {
            let g = [],
              h = la.TJ().children,
              k = 0;
            for (; k < h.length; ) g.push(h[k++].attributes.get("Name"));
            return g;
          },
          e = d();
        this.Lsa = new yj();
        var f = this;
        this.Lsa.q3a(c, a, function (g) {
          let h = d();
          for (var k = 0; k < e.length; ) J.remove(h, e[k++]);
          h.sort(function (l, n) {
            return sy.Lxa(l, n);
          });
          k = !0;
          Qb.Fe(h, function (l) {
            return l.indexOf("mp4") != -1;
          }) && (k = !1);
          $d.$o == 0 && (k = !1);
          K.T(h) == "[VERSIONAL_ASSETS,ZONE_1]" &&
            (Mc.F().reset(), Mc.F().OS(), sa.load(), (k = !1));
          !L.J.GJ && k
            ? L.J.reload()
            : (f.Pia.$(new qh(g, c)), b != null && b(new qh(g, c)));
        });
      }
    }
    o8a(a) {
      if (a == null || a.length == 0) return m.t_(this.Msa.v5a());
      let b = Array(a.length);
      for (var c = 0, d = a.length; c < d; ) {
        var e = c++;
        b[e] = this.Msa.J5a(a[e]);
      }
      a = m.l();
      for (c = 0; c < b.length; )
        for (d = b[c], ++c, e = 0; e < d.length; ) a.push(d[e++]);
      return m.t_(a);
    }
    static F() {
      let a = we.Hb;
      return a != null ? a : (we.Hb = new we());
    }
  }
  we.g = "1BC";
  Object.assign(we.prototype, { j: we });
  class zy {}
  zy.g = "1BD";
  zy.Ei = !0;
  class yj {
    constructor() {
      this.MUa = "OnDownloadPacksEnd";
      this.LUa = "DownloadPacksAliasOverride";
      this.TUa = "DownloadPacksForced";
      this.dta = "QUEST_EVENT_REQUEST_DOWNLOAD_PACKS";
    }
    q3a(a, b, c) {
      for (var d = Array(a.length), e = 0, f = a.length; e < f; ) {
        var g = e++;
        d[g] = a[g].name;
      }
      d = ha.F();
      if (d.TEa(this.dta)) c(!1);
      else {
        e = d.ta;
        f = Array(a.length);
        g = 0;
        for (var h = a.length; g < h; ) {
          let k = g++;
          f[k] = a[k].name;
        }
        e.vzb(f, hd.F());
        p.o.ptb(this.TUa, b.K4a);
        p.o.$A(this.LUa, b.cza, 1);
        e.FWa(function (k) {
          k = k.length > 0 && k[0].R9a();
          c(k);
        }, this.MUa);
        d.Vf(this.dta);
      }
    }
  }
  yj.g = "1BE";
  yj.Rb = [zy];
  Object.assign(yj.prototype, { j: yj });
  class hz {
    static ui(a) {
      a = p.PQ(a);
      a != null && (p.sab(a), kc(a.Op, 0), p.o.save(!0));
    }
  }
  hz.g = "1BF";
