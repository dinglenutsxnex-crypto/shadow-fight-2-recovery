// 062-save-storage.js
// Domain: audio  |  42 class(es)  |  tree root(s): Zs, Oy, Py, pi, dc, fc, pa, Nz, Ck, Db, Da, Uk, Dh, ug, zk, Qa, Zx, Bk, Xf, zs, Ji, Yx, aa, je, wa, Yf, $x, ay, Jf, Cs, by, py, G, cy, wz, Tc, La, Us
// Edit here. Run `npm run build` to reassemble the full bundle.
  class Zs {
    static Wea() {
      try {
        let a = window.localStorage;
        a.getItem("");
        if (a.length == 0) {
          let b = "_hx_" + Math.random();
          a.setItem(b, b);
          a.removeItem(b);
        }
        return a;
      } catch (a) {
        return null;
      }
    }
  }
  Zs.g = "48B";
  Math.g = "48C";
  class Oy {
    constructor() {}
    B() {}
  }
  Oy.g = "48D";
  Object.assign(Oy.prototype, { j: Oy });
  class Py {
    constructor(a) {
      this.yDa = [];
      this.name = a;
      this.map = new ac();
    }
    B() {
      let a = 0,
        b = this.yDa;
      for (; a < b.length; ) b[a++].B();
      this.yDa = null;
    }
  }
  Py.g = "48E";
  Object.assign(Py.prototype, { j: Py });
  class pi {
    static Rda() {
      let a = pi.web.v,
        b = Object.keys(a),
        c = b.length,
        d = 0;
      for (; d < c; ) a[b[d++]].B();
      pi.web.v = Object.create(null);
      pi.up = !1;
    }
  }
  pi.g = "48F";
  class dc {
    static QFa() {
      return function (a) {
        return a;
      };
    }
    static PK() {
      return function (a) {
        return Math.pow(a, 2);
      };
    }
    static Nn() {
      return function (a) {
        return 1 - Math.pow(1 - a, 2);
      };
    }
    static DYa() {
      var a = 0.1;
      a == null && (a = 0.1);
      let b = 17.0158 * a;
      return function (c) {
        --c;
        return c * c * ((b + 1) * c + b) + 1;
      };
    }
    static M3a() {
      var a, b;
      b == null && (b = 0.3);
      a == null && (a = 0);
      let c, d;
      a < 1
        ? ((d = 1), (c = b * 0.25))
        : ((d = a), (c = (b / 6.283185307179586) * Math.asin(1 / d)));
      return function (e) {
        return (
          d *
            Math.pow(2, -10 * e) *
            Math.sin(((e - c) * 6.283185307179586) / b) +
          1
        );
      };
    }
  }
  dc.g = "490";
  class fc {
    constructor(a, b) {
      this.x = a;
      this.y = b;
    }
  }
  fc.g = "491";
  Object.assign(fc.prototype, { j: fc });
  class pa {
    static kT(a, b) {
      b -= a;
      b == null && (b = 1);
      return a + Math.random() * b;
    }
  }
  pa.g = "492";
  class Nz {
    static Z_a(a, b) {
      var c = a.x * a.x + a.y * a.y;
      c > b * b &&
        ((c = Math.sqrt(c)), (a.x = (a.x / c) * b), (a.y = (a.y / c) * b));
    }
  }
  class Ck {
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
    }
  }
  Ck.g = "495";
  Object.assign(Ck.prototype, { j: Ck });
  class Hb extends Db {
    constructor() {
      super();
      Hb.instance = this;
      this.l2 = !1;
      this.W$ = 0;
      this.$N = this.aO = null;
      this.X$ = ed.Bfa();
      this.laa = 0;
      this.Rra = new Date().getTime();
      this.Kka();
    }
    Z(a) {
      super.Z(a);
      Hb.BK.$();
      this.W$ != 0 &&
        ((a = new Date().getTime()),
        a - this.Rra > 1e3 && ((this.Rra = a), Hb.Qh.$()));
    }
    getTime() {
      return Math.trunc(this.now().getTime() / 1e3);
    }
    now() {
      return ed.getDate(this.X$ + (L.J.time - this.laa));
    }
    Kka(a, b) {
      this.aO = a;
      this.$N = b;
      this.l2 = !1;
      ed.sync(w(this, this.Hhb), w(this, this.Ghb));
    }
    Hhb(a) {
      this.W$ = 1;
      this.X$ = a;
      this.laa = L.J.time;
      this.l2 = !0;
      this.aO != null && (this.aO(), (this.$N = this.aO = null));
    }
    Ghb() {
      this.W$ = 2;
      this.X$ = ed.Bfa();
      this.laa = L.J.time;
      this.l2 = !1;
      this.$N != null && (this.$N(), (this.$N = this.aO = null));
    }
  }
  Hb.g = "496";
  Hb.u = Db;
  Object.assign(Hb.prototype, { j: Hb });
  class Da {
    static fLa(a, b) {
      debugger;
      return -Da.gLa(-a, b);
    }
    static gLa(a, b) {
      debugger;
      let c = Da.eLa(a, b);
      return a < c && a < 0 ? c - Math.pow(10, -b) : c;
    }
    static gpb(a, b) {
      debugger;
      return (a > 0 ? 1 : -1) * Da.fLa(Math.abs(a), b);
    }
    static eLa(a, b) {
      debugger;
      b = Math.pow(10, b);
      return ((a * b) / b) | 0;
    }
    static lf() {
      return Da.rg.lf();
    }
    static iT(a, b) {
      b == null && (b = 100);
      return a > b ? !0 : Da.rg.iT(a, b);
    }
    static xL() {
      let a = ed.getDate().getTime();
      Da.rg.yL(a);
      return a;
    }
    static OT(a) {
      Da.rg.yL(a);
    }
  }
  Da.g = "497";
  class Uk {
    constructor(a) {
      this.XGa = new Yx(a);
    }
    I0() {
      return this.XGa.I0();
    }
    yL(a) {
      this.XGa.yL(a);
    }
    lf() {
      return this.I0() / 2147483648 + this.I0() / 2147483648 / 2147483648;
    }
    B4(a) {
      return this.lf() * a;
    }
    jT(a, b) {
      return a + this.B4(b - a);
    }
    iT(a, b) {
      b == null && (b = 100);
      return this.B4(b) < a;
    }
  }
  Uk.g = "498";
  Object.assign(Uk.prototype, { j: Uk });
  class Dh {
    constructor(a, b, c, d) {
      this.bT = a;
      this.DE = b;
      this.GE = c;
      this.kz = d;
    }
    toString(a) {
      a == null && (a = !1);
      let b = "" + this.bT + "." + this.DE + "." + this.GE;
      a && (b += "." + this.kz);
      return b;
    }
  }
  Dh.g = "499";
  Object.assign(Dh.prototype, { j: Dh });
  class ug {}
  ug.g = "49A";
  class zk {
    constructor() {
      this.UM = this.VM = this.WM = 0;
    }
    Tda(a) {
      switch (a) {
        case "(":
          this.WM += 1;
          break;
        case ")":
          --this.WM;
          break;
        case "[":
          this.UM += 1;
          break;
        case "]":
          --this.UM;
          break;
        case "{":
          this.VM += 1;
          break;
        case "}":
          --this.VM;
      }
      if (this.UM < 0 || this.VM < 0 || this.WM < 0) throw 94;
    }
    qEa() {
      return this.UM == 0 && this.VM == 0 ? this.WM == 0 : !1;
    }
  }
  zk.g = "49B";
  Object.assign(zk.prototype, { j: zk });
  class Qa {
    constructor() {
      this.Upa = new Ia();
      this.target = null;
      this.Fb = new zs();
      this.dLa = new Ak();
      this.bya = 0;
      this.c5a = m.l();
      this.tna = m.l();
      this.NPa = m.l();
    }
    parse(a) {
      a = Qa.VC(a);
      a = aa.Mxa(a, this.Upa);
      this.dLa = this.R3("?Root[" + a + "]");
    }
    ntb(a, b) {
      let c = new Zx();
      c.name = a;
      c.value = b;
      this.NPa.push(c);
    }
    L9a(a) {
      let b = 0,
        c = this.NPa;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.name == a) return d;
      }
      return null;
    }
    Wb(a) {
      a == null && (a = !1);
      try {
        if (
          ((this.Fb.result = null),
          (this.Fb.Iq = 0),
          this.Bwa(this.dLa, this.Fb),
          (this.Fb.result = this.Nba(this.Fb.result)),
          this.Upa.G > 0 || this.Fb.Iq > 0)
        )
          this.Fb.result = aa.E2a(this.Fb.result);
      } catch (b) {
        if ((Sc.sP(b), a)) throw 95;
      }
      return this.Fb;
    }
    Nba(a) {
      if (a == null || a == "") return a;
      var b = m.l();
      Qa.LNa(b, a);
      if (b.length >= 2) {
        a = new Fb();
        let c = 0,
          d = b.length;
        for (; c < d; ) {
          let e = c++,
            f = this.Nba(b[e]);
          a.M += f;
          e < b.length - 1 && (a.M += ",");
        }
        return a.M;
      }
      aa.init();
      b = new je(a);
      return b.XQ() == 0
        ? ((b = b.Wb()),
          (b = b != null ? K.T(b) : ""),
          li(b) ? b : "(" + b + ")")
        : a;
    }
    Bwa(a, b) {
      let c = 0,
        d = a.eP;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        if (e.type == 1) {
          let f = e;
          f != null && this.Bwa(f, e.result);
        } else
          e.type == 2
            ? this.oka(e.body, e.result)
            : (e.result.result =
                e.body.charAt(0) == "@" ? Rc(e.body, "@", "") : e.body);
        b.Iq += e.result.Iq;
      }
      this.sxb(a, b);
    }
    sxb(a, b) {
      this.mwb(a, b);
      this.gjb(a, b);
      b.result = this.Nba(b.result);
      if (this.Yy != null) {
        let c = new Bk();
        c.data = a;
        c.Fb = b;
        c.target = this.target;
        this.Yy(c);
      }
      a.Ab.length = 0;
    }
    gjb(a, b) {
      aa.init();
      a.Ab.length = 0;
      let c = new Fb();
      var d = 3,
        e = b.result,
        f = new zk();
      let g = 0,
        h = e.length;
      for (; g < h; ) {
        let k = e.charAt(g++);
        f.Tda(k);
        let l = k == ",";
        if (d == 0 && l && f.qEa()) {
          if (c.M.length > 0) {
            d = new Xf();
            let n = new je(c.M);
            n.XQ() == 0 ? (d.body = n.Wb().toString()) : (d.body = c.M);
            d.type = 0;
            a.Ab.push(d);
            c.M = "";
          }
          d = 3;
        }
        d != 3 || l || (c.M.length > 0 && (c.M = ""), (d = 0));
        c.M += k;
      }
      f = c.M;
      f != null &&
        f != "" &&
        ((e = new Xf()),
        (f = new je(f)),
        f.XQ() == 0
          ? ((e.body = K.T(f.Wb())), (b.result = e.body))
          : (e.body = c.M),
        (e.type = 0),
        a.Ab.push(e));
    }
    oka(a, b) {
      if ((a.length > 1 ? a.charAt(1) : "_") == "$") {
        if (this.Us != null) {
          var c = new Bk();
          c.data = a;
          c.Fb = b;
          c.target = this.target;
          this.Us(c);
        }
      } else
        ((c = this.L9a(
          a.length > 0 && a.charAt(0) == "_" ? a.substring(1) : a,
        )),
          c != null
            ? (b.result = c.value)
            : this.Us != null &&
              ((c = new Bk()),
              (c.data = a),
              (c.Fb = b),
              (c.target = this.target),
              this.Us(c)));
    }
    mwb(a, b) {
      let c;
      c = "" + a.arguments;
      let d = 0;
      for (a = a.eP; d < a.length; ) {
        let e = a[d];
        ++d;
        c = Rc(c, e.body, e.result.result);
      }
      b.result = c.toString();
    }
    R3(a) {
      let b = a.indexOf("["),
        c = a.lastIndexOf("]"),
        d = a.lastIndexOf("."),
        e = new Ak();
      if (b < 0 || c < 0 || c <= b) return e;
      e.method = J.substr(a, 1, b - 1);
      e.arguments = J.substr(a, b + 1, c - b - 1);
      e.Sd = d > c ? J.substr(a, d + 1, a.length - d - 1) : "";
      e.body = a;
      e.name = "Function";
      e.name += this.bya;
      this.bya++;
      this.ekb(e);
      return e;
    }
    ekb(a) {
      let b = 0,
        c = !1,
        d = new Fb(),
        e = 3;
      var f = ",";
      let g = a.arguments,
        h = new zk(),
        k = 0,
        l = g.length;
      for (; k < l; ) {
        let n = g.charAt(k++);
        h.Tda(n);
        let q = (aa.bha(n) || n == ",") && n != "?" && n != "_";
        f = aa.bha(f) || f == ",";
        e == 1 &&
          (n == "["
            ? (++b, (c = !0))
            : n == "]"
              ? --b
              : q &&
                c &&
                b == 0 &&
                (d.M.length > 0 && (this.addElement(a, d.M, e), (d.M = "")),
                (e = 3)));
        e == 2 &&
          q &&
          (d.M.length > 0 && (this.addElement(a, d.M, e), (d.M = "")), (e = 3));
        e == 0 &&
          q &&
          (d.M.length > 0 && (this.addElement(a, d.M, e), (d.M = "")), (e = 3));
        e == 3 &&
          (n == "?"
            ? (d.M.length > 0 && (this.addElement(a, d.M, e), (d.M = "")),
              (e = 1),
              (b = 0),
              (c = !1))
            : n == "_"
              ? (d.M.length > 0 && (this.addElement(a, d.M, e), (d.M = "")),
                (e = 2))
              : n == "-" && f
                ? (d.M.length > 0 && (this.addElement(a, d.M, e), (d.M = "")),
                  (e = 0))
                : q ||
                  (d.M.length > 0 && (this.addElement(a, d.M, e), (d.M = "")),
                  (e = 0)));
        f = n;
        d.M += n;
      }
      d.M.length > 0 && this.addElement(a, d.M, e);
    }
    addElement(a, b, c) {
      switch (c) {
        case 0:
          this.sva(a, b, !1);
          break;
        case 1:
          this.aXa(a, b);
          break;
        case 2:
          this.sva(a, b, !0);
          break;
        case 3:
          this.NXa(a, b);
      }
    }
    aXa(a, b) {
      b != null &&
        b != "" &&
        ((b = this.R3(b)), (b.type = 1), a.eP.push(b), this.c5a.push(b));
    }
    sva(a, b, c) {
      if (b != null && b != "") {
        let d = new Xf();
        d.body = b;
        d.type = c ? 2 : 0;
        a.eP.push(d);
        this.tna.push(d);
      }
    }
    NXa(a, b) {
      if (b != null && b != "") {
        let c = new Xf();
        c.body = b;
        c.type = 3;
        a.eP.push(c);
        this.tna.push(c);
      }
    }
    static lGa(a) {
      let b = new Qa();
      b.parse(a);
      return b;
    }
    static ph(a, b, c, d) {
      let e = new Qa();
      e.parse(a);
      e.Yy = b;
      e.Us = c;
      e.target = d;
      return e;
    }
    static yD(a) {
      switch (a) {
        case "Equal":
          return 1;
        case "Greater":
          return 2;
        case "GreaterEqual":
          return 3;
        case "Less":
          return 4;
        case "LessEqual":
          return 5;
        default:
          return 0;
      }
    }
    static sCa(a) {
      aa.init();
      return new je(a).XQ() == 0 ? 2 : 1;
    }
    static mva(a, b, c, d) {
      b = d <= 0 ? J.substr(b, c, null) : J.substr(b, c, d);
      b = aa.Zja(b);
      a.push(b);
    }
    static LNa(a, b) {
      let c = new zk(),
        d = 0,
        e = 0,
        f = b.length;
      for (; e < f; ) {
        let h = e++;
        var g = b.charAt(h);
        c.Tda(g);
        g == "," &&
          c.qEa() &&
          ((g = h - d), g > 0 && Qa.mva(a, b, d, g), (d = h + 1));
      }
      a.length >= 1 ? Qa.mva(a, b, d, -1) : (a.length = 0);
    }
    static VC(a) {
      if (a == null) return "";
      let b = !1,
        c = "",
        d = 0,
        e = a.length;
      for (; d < e; ) {
        let f = a.charAt(d++),
          g = lc(f);
        (g && b) || (c += f);
        b = g;
      }
      return c.trim();
    }
    static dia(a, b, c) {
      switch (c) {
        case 1:
          return a == b;
        case 2:
          return a > b;
        case 3:
          return a >= b;
        case 4:
          return a < b;
        case 5:
          return a <= b;
        default:
          return !1;
      }
    }
    static Ega(a) {
      var b = m.l();
      Qa.LNa(b, a);
      if (b.length >= 3) {
        var c = Qa.sCa(b[0]);
        let d = Qa.sCa(b[1]);
        a = Qa.yD(b[2]);
        if (c == d) {
          if (c == 2)
            return (
              aa.init(),
              (c = new je(b[0])),
              (b = new je(b[1])),
              (c = bd(K.T(c.Wb()))),
              (b = bd(K.T(b.Wb()))),
              Qa.dia(c != null ? c : 0, b != null ? b : 0, a)
            );
          if (c == 1) return b[0] == b[1];
        }
      }
      return !1;
    }
  }
  Qa.g = "49C";
  Object.assign(Qa.prototype, { j: Qa });
  class Zx {
    constructor() {
      this.name = this.value = "";
    }
  }
  Zx.g = "49D";
  Object.assign(Zx.prototype, { j: Zx });
  class Bk {
    constructor() {
      this.target = this.data = this.Fb = null;
    }
  }
  Bk.g = "49E";
  Object.assign(Bk.prototype, { j: Bk });
  class Xf {
    constructor() {
      this.result = new zs();
      this.body = "";
      this.type = 0;
    }
  }
  Xf.g = "49F";
  Object.assign(Xf.prototype, { j: Xf });
  class Ak extends Xf {
    constructor() {
      super();
      this.type = 1;
      this.name = this.Sd = this.arguments = this.method = "";
      this.Ab = m.l();
      this.eP = m.l();
    }
    $l() {
      return this.Ab.length > 0 ? this.Ab[0].body : "";
    }
  }
  Ak.g = "4A0";
  Ak.u = Xf;
  Object.assign(Ak.prototype, { j: Ak });
  class zs {
    constructor() {
      this.Iq = 0;
      this.result = "";
    }
    Zn() {
      let a = bd(this.result);
      if (a == null)
        try {
          aa.init();
          let b = bd(K.T(new je(this.result).Wb()));
          a = b != null ? b : 0;
        } catch (b) {
          a = 0;
        }
      return a | 0;
    }
    uu() {
      let a = bd(this.result);
      if (a == null)
        try {
          debugger;
          aa.init();
          let b = bd(K.T(new je(this.result).Wb()));
          a = b != null ? b : 0;
        } catch (b) {
          a = 0;
        }
      return a;
    }
  }
  zs.g = "4A1";
  Object.assign(zs.prototype, { j: zs });
  class Ji {
    constructor(a) {
      this.qcb = !1;
      this.kf = a;
    }
    static A1a(a) {
      a = new Ji(a);
      a.mAb = 1;
      a.qcb = !1;
      return a;
    }
  }
  Ji.g = "4A2";
  Object.assign(Ji.prototype, { j: Ji });
  class Yx {
    constructor(a) {
      this.rf = 0;
      this.yL(a);
    }
    I0() {
      return (this.rf = this.jmb(this.rf));
    }
    yL(a) {
      this.rf = a;
    }
    jmb(a) {
      return ez.zlb(ez.Sr(a, 1103515245)) % 2147483648;
    }
  }
  Yx.g = "4A3";
  Object.assign(Yx.prototype, { j: Yx });
  class aa {
    static init() {
      if (!aa.xra) {
        aa.Bbb();
        let a = 0;
        for (; a < 52; ) {
          let b = aa.i7,
            c = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz".charAt(
              a++,
            );
          b.has(c) || b.add(c);
        }
      }
      aa.xra = !0;
    }
    static Pla(a, b) {
      a = aa.$ub(a);
      return (a = aa.Mxa(a, b));
    }
    static $ub(a) {
      let b = new Fb(),
        c = null,
        d = 0;
      for (; d < a.length; ) {
        let e = a.charAt(d++);
        e == "@" ||
          (c != null && c == "@") ||
          !Cb(aa.vM, e) ||
          Cb("", e) ||
          (b.M += "@");
        b.M += e;
        c = e;
      }
      return b.M;
    }
    static Mxa(a, b) {
      b.G = 0;
      if (!Cb(a, "@")) return a;
      let c = new Fb(),
        d = 0;
      for (; d < a.length - 1; ) {
        let e = a.charAt(d),
          f = a.charAt(d + 1);
        if (e == "@") {
          let g = aa.vM.indexOf(f);
          g >= 0 ? (++b.G, (c.M += aa.G0a(g))) : ((c.M += e), (c.M += f));
          d += 2;
          if (d == a.length - 1) {
            c.M += a.charAt(d);
            break;
          }
        } else if (((c.M += e), ++d, d == a.length - 1)) {
          c.M += f;
          break;
        }
      }
      return c.M;
    }
    static G0a(a) {
      return String.fromCodePoint(10240 + a);
    }
    static G2a(a) {
      return J.Jh(aa.vM, a - 10240);
    }
    static E2a(a) {
      let b = 10240 + aa.vM.length;
      for (var c = !1, d = 0; d < a.length; ) {
        var e = J.Jh(a.charAt(d++), 0);
        if (e >= 10240 && e < b) {
          c = !0;
          break;
        }
      }
      if (!c) return a;
      c = new Fb();
      for (d = 0; d < a.length; ) {
        e = a.charAt(d++);
        let f = J.Jh(e, 0);
        f >= 10240 && f < b
          ? ((e = String.fromCodePoint(aa.G2a(f))), (c.M += e))
          : (c.M += e);
      }
      return c.M;
    }
    static Bbb() {
      aa.tc.set("+", new wa(!1, "+", 4, wa.xib, 2, 0));
      aa.tc.set("-", new wa(!1, "-", 4, wa.Qib, 2, 0));
      aa.tc.set("+u", new wa(!1, "+", 7, wa.Rib, 1, 1));
      aa.tc.set("-u", new wa(!1, "-", 7, wa.Sib, 1, 1));
      aa.tc.set("*", new wa(!1, "*", 5, wa.Mib, 2, 0));
      aa.tc.set("/", new wa(!0, "/", 5, wa.Aib, 2, 0));
      aa.tc.set("%", new wa(!0, "%", 5, wa.Jib, 2, 0));
      aa.tc.set("^", new wa(!0, "^", 6, wa.KIa, 2, 1));
      aa.tc.set("(", new wa(!1, "(", 0, null, 0, 0));
      aa.tc.set(")", new wa(!1, ")", 0, null, 0, 0));
      aa.tc.set("{", new wa(!1, "{", 0, null, 0, 0));
      aa.tc.set("}", new wa(!1, "}", 0, null, 0, 0));
      aa.tc.set("sin", new wa(!1, "sin", 7, wa.Oib, 1, 1));
      aa.tc.set("cos", new wa(!1, "cos", 7, wa.zib, 1, 1));
      aa.tc.set("max", new wa(!1, "max", 7, wa.Hib, 2, 1));
      aa.tc.set("min", new wa(!1, "min", 7, wa.Iib, 2, 1));
      aa.tc.set("pow", new wa(!1, "pow", 6, wa.KIa, 2, 1));
      aa.tc.set("sqrt", new wa(!1, "sqrt", 6, wa.Pib, 1, 1));
      aa.tc.set("abs", new wa(!1, "abs", 7, wa.wib, 1, 1));
      aa.tc.set("ln", new wa(!1, "ln", 7, wa.Fib, 1, 1));
      aa.tc.set("lg", new wa(!1, "lg", 7, wa.Eib, 1, 1));
      aa.tc.set("log", new wa(!1, "log", 7, wa.Gib, 2, 1));
      aa.tc.set("exp", new wa(!1, "exp", 7, wa.Bib, 1, 1));
      aa.tc.set("==", new wa(!1, "==", 3, wa.IIa, 2, 0));
      aa.tc.set("!=", new wa(!1, "!=", 3, wa.JIa, 2, 0));
      aa.tc.set("and", new wa(!1, "and", 2, wa.yib, 2, 0));
      aa.tc.set("or", new wa(!1, "or", 1, wa.Nib, 2, 0));
      aa.tc.set("more", new wa(!1, "more", 3, wa.Lib, 2, 0));
      aa.tc.set("less", new wa(!1, "less", 3, wa.Dib, 2, 0));
      aa.tc.set("moreequal", new wa(!1, "moreequal", 3, wa.Kib, 2, 0));
      aa.tc.set("lessequal", new wa(!1, "lessequal", 3, wa.Cib, 2, 0));
      aa.tc.set("equal", new wa(!1, "equal", 3, wa.IIa, 2, 0));
      aa.tc.set("notequal", new wa(!1, "notequal", 3, wa.JIa, 2, 0));
    }
    static Pjb(a) {
      m.l();
      if (a == null || a == "") throw 96;
      a = aa.Zja(a);
      a = aa.Ljb(a);
      if (!aa.LYa(a)) throw 97;
      a = aa.hpb(a);
      if (a.length == 0) throw 98;
      return a;
    }
    static Wb(a) {
      if (a.length == 0 && a[0].type == 1) return a[0].eu.Gb();
      let b = m.l(),
        c = 0,
        d = a.length;
      for (; c < d; ) {
        let f = c++;
        if (a[f].type == 1) b.push(a[f].eu.Gb());
        else if (a[f].type == 0) {
          var e = m.l();
          let g = b.length - a[f].Le.pba,
            h = g,
            k = b.length;
          for (; h < k; ) e.push(bd(K.T(b[h++])));
          e = a[f].Le.jh(e);
          m.removeRange(b, g, a[f].Le.pba);
          b.push(e);
        }
      }
      return b[0];
    }
    static Zja(a) {
      a: {
        var b = 0;
        let c = a.length;
        for (; b < c; )
          if (a.charCodeAt(b++) < 33) {
            b = !0;
            break a;
          }
        b = !1;
      }
      return b ? a.replace(RegExp("\\s", "g"), "") : a;
    }
    static bha(a) {
      return Cb(aa.k7, a);
    }
    static h2(a) {
      return aa.bha(a) ? !0 : Lg(a);
    }
    static lxb(a) {
      return X.Xa(aa.tc, a.toLowerCase());
    }
    static kxb(a) {
      return a.length >= 2 && a.charAt(0) == "?" ? aa.i7.has(a.charAt(1)) : !1;
    }
    static mxb(a) {
      return a.length >= 2 && a.charAt(0) == "$" ? aa.i7.has(a.charAt(1)) : !1;
    }
    static bJa(a, b, c, d) {
      let e = new Fb();
      d != null && (e.M += d);
      for (var f = null; b < a.length; ) {
        d = a.charAt(b);
        var g = a.length > b + 1 ? a.charAt(b + 1) : null;
        if (!Lg(d)) {
          let h = d == ".";
          if (h && f == null) e.M += "0";
          else {
            let k = d != "e" && d != "E";
            f =
              f == null ||
              (f != "e" && f != "E") ||
              (g != "-" && g != "+" && !Lg(g));
            g = k || g == null || (g != "-" && g != "+" && !Lg(g));
            if (!k && g) break;
            if (!h && k && f) break;
          }
        }
        f = d;
        e.M += d;
        ++b;
      }
      c.G = e.M;
      return b;
    }
    static fFa(a) {
      let b = 0,
        c = a.length;
      for (; b < c; ) {
        let d = a.charAt(b++);
        if (!Lg(d) && d != ".") return !1;
      }
      return !0;
    }
    static Ljb(a) {
      let b = m.l();
      var c = 0;
      let d = a.length;
      for (var e = null, f = null, g = null; c < d; ) {
        let l = new $x();
        var h = void 0;
        a.charAt(c) == "." && a.length > c + 1
          ? ((h = a.charAt(c + 1)), (h = new Ua("\\d", "").match(h)))
          : (h = !1);
        var k = a.charAt(c);
        if (new Ua("\\d", "").match(k) || h)
          if (((e = new Ia()), (c = aa.bJa(a, c, e)), aa.fFa(e.G)))
            ((l.type = 1), (l.eu = new kf(e.G)));
          else {
            e = bd(e.G);
            if (e == null) throw 99;
            l.type = 1;
            l.eu = new kf(e);
          }
        else if (((h = a.charAt(c)), !new Ua("\\d", "").match(h))) {
          g = a.charAt(c);
          if (g == ",") {
            ++c;
            continue;
          }
          if (
            !(
              (g != "-" && g != "+") ||
              (f != null && f == ")") ||
              (e != null && e.type != 0)
            )
          ) {
            a: {
              f = a;
              for (c += 1; c < f.length; ) {
                if (!lc(f.charAt(c))) break a;
                ++c;
              }
              c = -1;
            }
            f = c;
            if (f < 1) throw 100;
            c = f - 1;
            h = a.charAt(f);
            if (
              new Ua("\\d", "").match(h) &&
              ((h = new Ia()), (k = aa.bJa(a, f, h, g)), f != k)
            ) {
              c = k;
              if (aa.fFa(h.G.toString())) ((l.type = 1), (l.eu = new kf(h)));
              else {
                e = bd(h.G);
                if (e == null) throw 101;
                l.type = 1;
                l.eu = new kf(e);
              }
              b.push(l);
              e = l;
              f = g;
              continue;
            }
          }
          for (f = ""; c < d; ) {
            g = a.charAt(c);
            h = aa.h2(g);
            k = f.length > 0 && aa.h2(f.charAt(0));
            if ((h || k) && aa.odb(f) && f.length > 0) {
              g != "=" || (f != "=" && f != "!") || ((f += g), ++c);
              break;
            }
            lc(g) || (f += g);
            ++c;
          }
          if ((c < d || aa.h2(f.charAt(f.length - 1))) && aa.lxb(f)) {
            g = f.toLowerCase();
            h = !1;
            if (f == "-" || f == "+")
              if (((h = e == null) || (h = e.Le != null && !e.Le.Boa()), !h)) {
                a: {
                  h = a;
                  k = c - 1;
                  let n = h.length - 1;
                  k > n && (k = n);
                  if (k < 0) {
                    h = -1;
                    break a;
                  }
                  for (; k >= 0; ) {
                    if (!lc(h.charAt(k))) {
                      h = k;
                      break a;
                    }
                    --k;
                  }
                  h = -1;
                }
                h = h < 0 || a.charAt(h) == ",";
              }
            g = h ? aa.tc.get(g + "u") : aa.tc.get(g);
            g.O9a() && g.DZa && (e == null || (e.Le != null && !e.Le.Boa()))
              ? ((l.type = 1), (l.eu = aa.cJa(f)))
              : ((l.type = 0), (l.Le = g));
          } else ((l.type = 1), (l.eu = aa.cJa(f)));
          g = f.charAt(f.length - 1);
        }
        b.push(l);
        e = l;
        f = g;
      }
      return b;
    }
    static odb(a) {
      let b = 0,
        c = 0,
        d = 0,
        e = a.length;
      for (; d < e; ) {
        let f = a.charAt(d++);
        f == "[" ? ++b : f == "]" && ++c;
      }
      return b == c;
    }
    static R3(a) {
      a = J.substr(a, 0, a.indexOf("["));
      a = J.substr(a, 1, a.length - 1);
      if (!X.Xa(aa.esa, a)) throw 102;
      return new As(aa.gkb(), aa.esa.get(a));
    }
    static cJa(a) {
      if (aa.kxb(a)) ((a = aa.Veb(a)), (a = aa.R3(a)));
      else if (li(a)) ((a = parseFloat(a)), (a = new kf(a)));
      else if (aa.mxb(a)) {
        debugger;
        a = J.substr(a, 1, a.length - 1);
        if (X.Xa(aa.dsa, a)) a = new Bs(aa.dsa.get(a));
        else throw 103;
      } else ((a = new kf(a)), (a.type = 2));
      return a;
    }
    static gkb() {
      debugger;
      return null;
    }
    static Veb(a) {
      for (; Cb(a, "."); ) a = aa.Cnb(a);
      return a;
    }
    static Cnb(a) {
      let b = a.indexOf(".");
      return (a =
        "?" +
        J.substr(a, b + 1, a.length - b - 1) +
        "[" +
        J.substr(a, 0, b) +
        "]");
    }
    static LYa(a) {
      let b = 0,
        c = 0,
        d = 0;
      for (; d < a.length; ) {
        let e = a[d];
        ++d;
        e.type == 0 &&
          (e.Le == aa.tc.get("(") ? ++b : e.Le == aa.tc.get(")") && ++c);
      }
      return b == c;
    }
    static hpb(a) {
      let b = m.l(),
        c = m.l(),
        d = 0;
      for (; d != a.length; )
        if (a[d].type == 1) (b.push(a[d]), ++d);
        else if (a[d].Le == aa.tc.get("(")) (c.push(a[d]), ++d);
        else if (a[d].Le == aa.tc.get(")")) {
          for (; c.length != 0 && c[c.length - 1].Le != aa.tc.get("("); )
            (b.push(c[c.length - 1]), m.ye(c, c.length - 1));
          c.length != 0 &&
            c[c.length - 1].Le == aa.tc.get("(") &&
            (m.ye(c, c.length - 1),
            c.length != 0 &&
              c[c.length - 1].Le.XP == 1 &&
              (b.push(c[c.length - 1]), m.ye(c, c.length - 1)));
          ++d;
        } else if (c.length == 0) (c.push(a[d]), ++d);
        else if (
          (a[d].Le.XP == 0 && c[c.length - 1].Le.KA < a[d].Le.KA) ||
          (a[d].Le.XP == 1 && c[c.length - 1].Le.KA <= a[d].Le.KA)
        )
          (c.push(a[d]), ++d);
        else if (
          (a[d].Le.XP == 0 && c[c.length - 1].Le.KA >= a[d].Le.KA) ||
          (a[d].Le.XP == 1 && c[c.length - 1].Le.KA > a[d].Le.KA)
        )
          (b.push(c[c.length - 1]), m.ye(c, c.length - 1));
      for (; c.length != 0; ) (b.push(c[c.length - 1]), m.ye(c, c.length - 1));
      return b;
    }
  }
  aa.g = "4A4";
  class je {
    constructor(a) {
      this.ne = m.l();
      aa.init();
      this.ne = aa.Pjb(a);
    }
    XQ() {
      return Qb.count(this.ne, function (a) {
        return a.eu != null ? a.eu.type == 2 : !1;
      });
    }
    Wb() {
      return aa.Wb(this.ne);
    }
  }
  je.g = "4A5";
  Object.assign(je.prototype, { j: je });
  class wa {
    constructor(a, b, c, d, e, f) {
      this.DZa = a;
      this.origin = b;
      this.KA = c;
      this.jh = d;
      this.pba = e;
      this.XP = f;
    }
    O9a() {
      return this.pba == 2;
    }
    Boa() {
      return this.origin != "}" && this.origin != ")" ? this.origin == "]" : !0;
    }
    static Rib(a) {
      return a.length != 1 ? 0 : a[0];
    }
    static Sib(a) {
      return a.length != 1 ? 0 : -a[0];
    }
    static xib(a) {
      return a.length != 2 ? 0 : a[0] + a[1];
    }
    static Qib(a) {
      return a.length != 2 ? 0 : a[0] - a[1];
    }
    static Mib(a) {
      return a.length != 2 ? 0 : a[0] * a[1];
    }
    static Aib(a) {
      return a.length != 2 ? 0 : a[1] != 0 ? a[0] / a[1] : 0;
    }
    static Jib(a) {
      return a.length != 2 ? 0 : (a[0] | 0) % (a[1] | 0);
    }
    static KIa(a) {
      return a.length != 2 ? 0 : Math.pow(a[0], a[1]);
    }
    static Oib(a) {
      return a.length != 1 ? 0 : Math.sin(a[0]);
    }
    static zib(a) {
      return a.length != 1 ? 0 : Math.cos(a[0]);
    }
    static Hib(a) {
      return a.length != 2 ? 0 : Math.max(a[0], a[1]);
    }
    static Iib(a) {
      return a.length != 2 ? 0 : Math.min(a[0], a[1]);
    }
    static Pib(a) {
      return a.length != 1 ? 0 : Math.sqrt(a[0]);
    }
    static wib(a) {
      return a.length != 1 ? 0 : Math.abs(a[0]);
    }
    static Fib(a) {
      return a.length != 1 ? 0 : Math.log(a[0]) / Math.log(Math.E);
    }
    static Eib(a) {
      return a.length != 1 ? 0 : Math.log10(a[0]);
    }
    static Gib(a) {
      if (a.length != 2) return 0;
      debugger;
      return null;
    }
    static Bib(a) {
      if (a.length != 1) return 0;
      debugger;
      return null;
    }
    static Lib(a) {
      return a.length != 2 ? 0 : a[0] > a[1] ? 1 : 0;
    }
    static Dib(a) {
      return a.length != 2 ? 0 : a[0] < a[1] ? 1 : 0;
    }
    static Kib(a) {
      return a.length != 2 ? 0 : a[0] >= a[1] ? 1 : 0;
    }
    static Cib(a) {
      return a.length != 2 ? 0 : a[0] <= a[1] ? 1 : 0;
    }
    static IIa(a) {
      return a.length != 2 ? 0 : a[0] == a[1] ? 1 : 0;
    }
    static JIa(a) {
      return a.length != 2 ? 0 : a[0] != a[1] ? 1 : 0;
    }
    static yib(a) {
      return a.length != 2 ? 0 : a[0] == 1 && a[1] == 1 ? 1 : 0;
    }
    static Nib(a) {
      return a.length != 2 ? 0 : a[0] == 1 || a[1] == 1 ? 1 : 0;
    }
  }
  wa.g = "4A6";
  Object.assign(wa.prototype, { j: wa });
  class Yf {
    constructor() {
      this.type = 0;
    }
    Gb() {
      return null;
    }
  }
  Yf.g = "4A7";
  Object.assign(Yf.prototype, { j: Yf });
  class $x {
    constructor() {
      this.Le = this.eu = null;
      this.type = -1;
    }
  }
  $x.g = "4A8";
  Object.assign($x.prototype, { j: $x });
  class As extends Yf {
    constructor() {
      super();
    }
    Gb() {
      debugger;
      return null;
    }
  }
  As.g = "4A9";
  As.u = Yf;
  Object.assign(As.prototype, { j: As });
  class kf extends Yf {
    constructor(a) {
      super();
      this.Mb = a;
      this.type = 1;
    }
    Gb() {
      return this.Mb;
    }
  }
  kf.g = "4AA";
  kf.u = Yf;
  Object.assign(kf.prototype, { j: kf });
  class Bs extends Yf {
    constructor(a) {
      super();
      this.nWa = a;
      this.type = 2;
    }
    Gb() {
      return this.nWa();
    }
  }
  Bs.g = "4AB";
  Bs.u = Yf;
  Object.assign(Bs.prototype, { j: Bs });
  class ay {
    constructor(a, b) {
      this.zJ = this.tn = this.tcb = !1;
      this.id = a;
      this.iAb = b;
    }
    Sh(a, b) {
      this.zJ = !0;
      this.ef = this.iAb(a, b);
      let c = this;
      this.ef.Tc(function (d) {
        c.tn = !0;
        c.zJ = !1;
        G.setData(a, d);
      });
    }
    reset() {
      this.zJ = this.tn = !1;
    }
  }
  ay.g = "4AC";
  Object.assign(ay.prototype, { j: ay });
  class Jf {
    constructor() {
      this.IGa = 0;
      this.rM = [];
      this.waiting = new Qw();
      this.oHa = 0;
    }
    load(a) {
      let b = [];
      a = a.slice();
      fa.vKa(a);
      let c = this;
      for (var d = [], e = 0; e < a.length; ) {
        var f = a[e];
        ++e;
        (function (g) {
          return (G.R1(g) && (G.MI == null || G.LAa().length == 0)) ||
            G.data.v[g] != null ||
            G.zJ(g)
            ? !1
            : c.vdb(g) || c.Rcb(g)
              ? (b.push(g), !1)
              : !0;
        })(f) && d.push(f);
      }
      a = d;
      d = 0;
      for (e = a; d < e.length; ) {
        f = e[d];
        ++d;
        this.oHa++;
        let g = G.eg(f);
        g = G.r0(g);
        f = new Cs(f, g);
        f.priority = this.IGa--;
        this.rM.length == G.BGa ? this.waiting.enqueue(f) : this.start(f);
      }
      return new by(this, a.concat(b));
    }
    G0(a) {
      function b(g) {
        return a != null ? a.indexOf(g) > -1 : !0;
      }
      if (this.oHa == 0) return 1;
      let c = 0,
        d = 0;
      var e = 0;
      let f = this.rM;
      for (; e < f.length; ) {
        let g = f[e];
        ++e;
        b(g.id) && ((d += g.progress), ++c);
      }
      for (e = this.waiting.iterator(); e.yd(); )
        b(e.next().id) && ((d += 0), ++c);
      for (e = 0; e < a.length; ) G.data.v[a[e++]] != null && (++d, ++c);
      e = Qb.Fe(a, function (g) {
        return G.data.v[g] == null;
      });
      return c == 0 ? 0 : Math.max(0, d / c - (e ? 0.01 : 0));
    }
    Rcb(a) {
      return (
        Qb.count(this.rM, function (b) {
          return b.id == a;
        }) > 0
      );
    }
    vdb(a) {
      return Qb.Fe(this.waiting, function (b) {
        return b.id == a;
      });
    }
    start(a) {
      this.rM.push(a);
      a.load().Tc(w(this, this.gib));
    }
    gib(a) {
      let b = a.id;
      Jf.xma += G.getSize(b);
      J.remove(this.rM, a);
      this.waiting.Oh == 0 && this.rM.length == 0 && (this.IGa = 0);
      b >= 0 && G.setData(b, a.data);
      this.waiting.Oh > 0 && this.start(this.waiting.$2a());
    }
  }
  Jf.g = "4AD";
  Object.assign(Jf.prototype, { j: Jf });
  class Cs {
    constructor(a, b) {
      this.priority = this.ca = 0;
      this.data = null;
      this.progress = 0;
      this.id = a;
      this.path = b;
    }
    load() {
      let a = wz.load(this.path),
        b = this;
      a.hIa(function (c) {
        b.progress = c;
      });
      a.Tc(function (c) {
        b.data = c;
      });
      return a.then(function () {
        return rc.jo(b);
      });
    }
  }
  Cs.g = "4AE";
  Cs.Rb = [nq];
  Object.assign(Cs.prototype, { j: Cs });
  class by {
    constructor(a, b) {
      this.uE = a;
      this.Pf = b.slice();
      this.percent = 0;
      this.qHa = this.Pf.length;
      let c = this;
      a = 0;
      for (b = this.Pf; a < b.length; )
        G.oS(b[a++], function () {
          --c.qHa == 0 &&
            (c.listener != null && c.listener(), (c.listener = null));
        });
    }
    pp() {
      let a = 0,
        b = this.Pf;
      for (; a < b.length; ) if (G.data.v[b[a++]] == null) return !1;
      return !0;
    }
    c1() {
      if (this.Pf.length == 0) return 100;
      let a = Math.round(this.uE.G0(this.Pf) * 100);
      a > this.percent && (this.percent = a);
      return this.percent;
    }
    xK(a) {
      this.qHa == 0 ? a() : (this.listener = a);
    }
  }
  by.g = "4AF";
  Object.assign(by.prototype, { j: by });
  class py {
    static Jza(a) {
      a = a.b.Ev;
      let b = new Uint8Array(a),
        c = b.byteLength,
        d = b[c - 7] | (b[c - 6] << 8) | (b[c - 5] << 16),
        e = a.slice(c - (d + 7), c - 7);
      if ((b[c - 4] & 1) > 0) {
        let f = new Gd();
        crypto.subtle
          .digest("SHA-256", a.slice(0, a.byteLength - (d + 7)))
          .then(function (g) {
            var h = mb.ll(g).Uxb();
            g = [];
            for (var k = 0; k < 64; ) g.push(J.Jh(h, k++));
            h = new Uint8Array(e);
            k = 0;
            let l = e.byteLength;
            for (; k < l; ) {
              let n = k++;
              h[n] ^= g[n & 63];
            }
            f.complete(mb.ll(e));
          });
        return f.ef;
      }
      return rc.jo(mb.ll(e));
    }
  }
  py.g = "4B0";
  class G {
    static init() {
      G.data = new jd();
      G.aK = new jd();
      Jf.xma = 0;
      G.uE = new Jf();
      G.Hv = [];
      G.lang = "en";
      G.BGa = 1;
      G.Wca = null;
      G.f_ = null;
      G.MI = null;
      G.Jya = 1;
      G.Uca = new jd();
      G.IHa = null;
      G.gHa = 0;
      G.uNa = [];
    }
    static load(a) {
      return G.uE.load(a);
    }
    static jeb(a) {
      var b = !0;
      b == null && (b = !1);
      let c = [],
        d = 0;
      for (; d < a.length; ) {
        let e = a[d];
        ++d;
        let f = G.uf(e);
        f == -1 && b ? c.push(G.O1a(e)) : c.push(f);
      }
      return G.uE.load(c);
    }
    static Q7a() {
      return G.fsa;
    }
    static Wua(a, b) {
      G.Uca.v[a] = new ay(a, b);
    }
    static pnb(a) {
      G.Uca.v[a] = null;
    }
    static IQ(a) {
      return G.Uca.v[a];
    }
    static O1a(a) {
      var b = G.xq.indexOf(a);
      if (b != -1) return b;
      b = 2048 + G.gHa++;
      G.xq[b] = a;
      G.pka.push(b);
      return b;
    }
    static lp() {
      return G.lang;
    }
    static cla(a) {
      a = a != null ? a : "en";
      a = a.toLowerCase();
      G.F9.length > 0 &&
        !Qb.Fe(G.F9, function (b) {
          return b == G.lang;
        }) &&
        (a = "en");
      G.lang = a;
    }
    static q7a(a) {
      var b = new RegExp("^(" + G.RM + "/)", "");
      a = G.eg(a).replace(b, "");
      b = new Ua("-(\\d)x", "");
      return b.match(a) ? K.parseInt(b.mg(1)) : 1;
    }
    static EBa(a) {
      return G.qVa[a];
    }
    static LAa() {
      return G.H7.slice();
    }
    static mrb(a) {
      G.Wca = a;
    }
    static ZLa(a) {
      G.f_ = a;
    }
    static nrb(a) {
      G.Jya = a;
    }
    static wqb(a) {
      G.MI = a;
    }
    static r0(a) {
      a = J.substr(a, G.RM.length + 1, null);
      let b = RegExp("\\.[abcdef0-9]{8}\\.", ""),
        c = 0,
        d = G.ZUa;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        if (e.replace(b, ".") == a) return "" + G.RM + "/" + e;
      }
      return null;
    }
    static eg(a) {
      var b = G.xq[a];
      if (b == null) return null;
      var c = new Ua("{(?:lang|image|audio|scale)}", "");
      if (c.match(b)) {
        c = new Ua("{lang}", "");
        c.match(b) && G.lang != null && (b = b.replace(c.r, "-" + G.lang));
        c = new Ua("{image}", "g");
        if (c.match(b)) {
          let d = "*",
            e = new Ua("(" + G.UUa[a] + ")", "");
          e.match(G.f_) ? (d = G.f_) : e.match(G.Wca) && (d = G.Wca);
          b = b.replace(c.r, d);
        }
        c = new Ua("{audio}", "g");
        c.match(b) && G.MI != null && (b = b.replace(c.r, G.MI));
        c = new Ua("{scale}", "g");
        c.match(b) &&
          (b = b.replace(c.r, "-" + Math.min(G.EBa(a), G.Jya) + "x"));
      }
      b = "" + G.RM + "/" + b;
      G.lang != "en" &&
        G.uf(b) == -1 &&
        ((c = G.lang), (G.lang = "en"), (b = G.eg(a)), (G.lang = c));
      return b;
    }
    static o7a() {
      let a = [],
        b = 0,
        c = G.fsa;
      for (; b < c; ) a.push(b++);
      return a.concat(G.pka);
    }
    static h9a() {
      return G.pka.slice();
    }
    static RBa() {
      let a = G.xVa,
        b = [],
        c = 0;
      for (; c < a.length; ) {
        let d = a[c];
        ++c;
        (G.R1(d) && G.MI == null) || b.push(d);
      }
      return b;
    }
    static Sea(a, b) {
      let c = RegExp("\\.(\\w+)$", "");
      return G.uf(G.eg(a).replace(c, "." + b));
    }
    static uf(a) {
      function b(d, e) {
        return a.replace(new RegExp(d, ""), e);
      }
      var c = G.xq.indexOf(a);
      if (c != -1) return c;
      a = b("\\?.*", "");
      a = b("^(" + G.RM + "/)(.*)", "$2");
      c = G.xq.indexOf(a);
      if (c != -1) return c;
      c = G.F9;
      c.length > 0 && (a = b("-(" + c.join("|") + ")", "{lang}"));
      a = b("[\\/-][124]x", "{scale}");
      c = G.xq.indexOf(a);
      if (c != -1) return c;
      new Ua("\\.img$", "").match(a)
        ? (a = Eb.replace(a, ".img", ".{image}"))
        : new Ua("(?:png|jpg|avif|webp|ktx|dds)", "g").match(a)
          ? G.ora.length > 0 &&
            ((c = G.ora.join("|")),
            (a = b("(.*?)\\.(" + c + ")$", "$1.{image}")),
            (a = b("((" + c + ")\\/)", "{image}/")))
          : new Ua("(?:m4a|ogg|wav)", "g").match(a) &&
            G.H7.length > 0 &&
            ((c = G.H7.join("|")),
            (a = b("(.*?)\\.(" + c + ")$", "$1.{audio}")),
            (a = b("((" + c + ")\\/)", "{audio}/")));
      return G.xq.indexOf(a);
    }
    static nn(a) {
      a = G.data.v[a];
      return typeof a == "string"
        ? a
        : a instanceof ArrayBuffer
          ? ((a = new DataView(a)), new TextDecoder("utf-8").decode(a))
          : null;
    }
    static Uq(a) {
      return mb.ll(G.data.v[a]);
    }
    static getSize(a) {
      return G.uNa[a];
    }
    static ba(a, b) {
      G.uNa[a] = b;
    }
    static decode(a, b) {
      let c = G.IQ(a);
      if (c == null || c.tn) b(a);
      else {
        let d = G.data.v[a];
        G.data.remove(a);
        c.Sh(a, d);
        G.oS(a, b);
      }
    }
    static setData(a, b) {
      if (b != null) {
        var c = G.IQ(a);
        if (c != null && !c.tn) {
          if (c.tcb) {
            G.data.v[a] = b;
            return;
          }
          c.Sh(a, b);
          return;
        }
        G.data.v.hasOwnProperty(a) && G.IHa != null && G.IHa(G.data.v[a], b);
        G.data.v[a] = b;
      }
      for (b = 0; b < G.Hv.length; )
        ((c = G.Hv[b]), c.id == a ? (c.jh(a), J.remove(G.Hv, c)) : ++b);
    }
    static Vr(a) {
      if (G.data.v[a] != null) {
        try {
          let b = G.data.v[a];
          b instanceof qc && b.B();
        } catch (b) {}
        G.data.remove(a);
        a = G.IQ(a);
        a != null && a.reset();
      }
    }
    static kga(a) {
      return G.rVa.includes(a);
    }
    static T7a(a) {
      return G.aK.v[a];
    }
    static Yrb(a, b) {
      G.aK.v[a] = b;
    }
    static R1(a) {
      return new Ua("{audio}", "g").match(G.xq[a])
        ? !0
        : new Ua("\\.(?:m4a|ogg|wav)$", "").match(G.xq[a]);
    }
    static DEa(a) {
      return new Ua("{image}", "g").match(G.xq[a])
        ? !0
        : new Ua("\\.(?:png|jpg|avif|webp|ktx|dds)$", "").match(G.xq[a]);
    }
    static fdb(a) {
      a = G.eg(a);
      return a == null ? !1 : new Ua("-p\\.", "").match(a);
    }
    static zJ(a) {
      return G.IQ(a) != null ? G.IQ(a).zJ : !1;
    }
    static oS(a, b) {
      G.eg(a) != null && (G.data.v[a] != null ? b(a) : G.Hv.push(new cy(a, b)));
    }
  }
  G.g = "4B1";
  class cy {
    constructor(a, b) {
      this.id = a;
      this.jh = b;
    }
  }
  cy.g = "4B2";
  Object.assign(cy.prototype, { j: cy });
  class wz {
    static load(a) {
      let b = new Gd(),
        c = new XMLHttpRequest();
      c.onerror = function () {
        c.onerror = c.onload = c.onprogress = null;
        b.complete(null);
      };
      c.onload = function (d) {
        G.ba(G.uf(a), d.total);
        b.progress(1);
        c.onerror = c.onload = c.onprogress = null;
        c.status == 404 ? b.complete(null) : b.complete(c.response);
      };
      c.onprogress = function (d) {
        b.progress(d.lengthComputable ? d.loaded / d.total : 0);
      };
      try {
        c.open("GET", a);
        let d = new Ua("\\.([a-z0-9]{3,4})$", "");
        d.match(a);
        let e;
        switch (d.mg(1)) {
          case "mp4":
            e = "blob";
            break;
          case "json":
          case "tmj":
          case "tsj":
          case "txt":
          case "xml":
            e = "text";
            break;
          default:
            e = "arraybuffer";
        }
        c.responseType = e;
        c.send();
      } catch (d) {
        b.complete(null);
      }
      return b.ef;
    }
  }
  wz.g = "4B3";
  class Tc {
    constructor(a) {
      this.CFa = -1;
      this.yR = !1;
      this.name = this.ML = null;
      this.id = -1;
      this.data = a;
    }
    static decode(a) {
      let b = new Gd();
      Tc.Xi == null && (Tc.Xi = new AudioContext({ sampleRate: 44100 }));
      Tc.Xi.decodeAudioData(
        a,
        function (c) {
          if (Tc.aGa) {
            let d = c.getChannelData(0),
              e = c.getChannelData(1);
            c = c.length >> 1;
            let f = Tc.Xi.createBuffer(1, c, 22050),
              g = f.getChannelData(0),
              h = 0;
            for (; h < c; ) {
              let k = h++,
                l = k * 2;
              g[k] = (d[l] + e[l]) * 0.5;
            }
            b.complete(new Tc(f));
          } else b.complete(new Tc(c));
        },
        function (c) {
          b.error(c);
        },
      );
      return b.ef;
    }
    static split(a) {
      function b(r, t) {
        r = new Tc(r);
        r.name = t.name;
        r.id = t.id;
        return r;
      }
      var c = a.data;
      let d = c.sampleRate,
        e = 0,
        f = a.ML.length,
        g = [];
      if (c.numberOfChannels == 1)
        for (var h = c.getChannelData(0); e < f; ) {
          c = a.ML[e++];
          var k = ((d / 1e3) * c.min) | 0,
            l = ((d / 1e3) * c.max) | 0,
            n = Tc.Xi.createBuffer(1, l - k, d);
          k = h.subarray(k, l);
          try {
            n.copyToChannel(k, 0);
          } catch (r) {
            n.getChannelData(0).set(k);
          }
          g.push(b(n, c));
        }
      else
        for (h = c.getChannelData(0), c = c.getChannelData(1); e < f; ) {
          n = a.ML[e++];
          var q = ((d / 1e3) * n.min) | 0;
          let r = ((d / 1e3) * n.max) | 0;
          k = Tc.Xi.createBuffer(2, r - q, d);
          l = h.subarray(q, r);
          q = c.subarray(q, r);
          try {
            (k.copyToChannel(l, 0), k.copyToChannel(q, 1));
          } catch (t) {
            (k.getChannelData(0).set(l), k.getChannelData(1).set(q));
          }
          g.push(b(k, n));
        }
      return g;
    }
  }
  Tc.g = "4B4";
  Object.assign(Tc.prototype, { j: Tc });
  class La {
    static init() {
      if (window.AudioContext || window.webkitAudioContext) {
        La.context != null &&
          (La.E0a(), window.removeEventListener("pointerup", La.MK));
        try {
          (typeof AudioContext !== "undefined"
            ? (La.context = new AudioContext())
            : typeof webkitAudioContext !== "undefined" &&
              (La.context = new webkitAudioContext()),
            (La.context.onstatechange = function () {
              La.a1() ? La.w3.notify() : La.ygb.notify();
            }),
            La.wgb.notify(),
            La.a1() || window.addEventListener("pointerup", La.MK));
        } catch (a) {
          La.context = null;
        }
      }
    }
    static E0a() {
      try {
        ((La.context.onstatechange = null), La.context.close());
      } catch (a) {}
      La.context = null;
    }
    static MK(a) {
      a.preventDefault();
      La.context != null &&
        La.context.state != "running" &&
        La.context.resume().then(
          function () {},
          function () {
            La.xgb.notify();
          },
        );
    }
    static a1() {
      return La.context != null ? La.context.state == "running" : !1;
    }
  }
  La.g = "4B5";
  class Us {
    constructor() {
      this.names = new jd();
      this.outputs = [];
      this.Nxb = new jd();
      this.Mxb = 0.05;
      this.Jfb = 4096;
      this.Oy = this.uGa = 0;
      this.$eb = 16;
      this.xGa = 2;
      this.Bw = new jd();
      this.enabled = !1;
    }
    B() {
      this.YA(1);
      this.rMa(1);
      this.AF(1);
      this.Wrb();
      let a = 0,
        b = this.outputs;
      for (; a < b.length; ) b[a++].B();
      this.Bw = this.SR = this.RR = this.TR = this.QR = this.outputs = null;
    }
    CWa(a, b) {
      G.eg(a);
      this.Bw.v[a] = b;
      this.names.v[a] = b.name;
      if (b.ML != null) {
        a = 0;
        let c = b.ML;
        for (; a < c.length; ) c[a++].id += 65535;
        try {
          a = 0;
          let d = Tc.split(b);
          for (; a < d.length; ) {
            let e = d[a];
            ++a;
            this.names.v[e.id] = e.name;
            this.Bw.v[e.id] = e;
          }
        } catch (d) {}
      }
    }
    lnb(a) {
      this.Bw.v[a] != null && ((this.Bw.v[a] = null), this.names.remove(a));
    }
    play(a, b, c, d) {
      d == null && (d = 0);
      c == null && (c = !1);
      b == null && (b = !1);
      if (!this.enabled) return -1;
      c = this.h7a(a, b, c);
      if (c < 0) return -1;
      a = new dy(this, this.Bw.v[a]);
      a.id = this.Jfb++;
      a.slot = c;
      a.loop = b;
      a.offset = d;
      a.play();
      this.outputs.push(a);
      this.outputs.length > this.uGa && (this.uGa = this.outputs.length);
      return a.id;
    }
    AF(a, b) {
      b == null && (b = 0);
      if (this.enabled && La.context != null) {
        var c = this.z0();
        b > 0 ? c.hmb(a, b) : c.ala(a);
      }
    }
    YA(a) {
      this.enabled && La.context != null && this.BBa().ala(a);
    }
    rMa(a) {
      this.enabled && La.context != null && this.CBa().ala(a);
    }
    Wrb() {
      this.enabled && La.context != null && this.P7a().fc(0);
    }
    stop(a, b) {
      b == null && (b = 0);
      let c = 0,
        d = 0,
        e = this.outputs,
        f = [],
        g = 0;
      for (; g < e.length; ) {
        let h = e[g];
        ++g;
        a == (a < 4096 ? h.audio.id : h.id) && f.push(h);
      }
      for (; d < f.length; ) (f[d++].stop(b), ++c);
      return c > 0;
    }
    cdb(a) {
      return Qb.Fe(this.outputs, function (b) {
        return a == (a < 4096 ? b.audio.id : b.id);
      });
    }
    z0() {
      this.QR == null &&
        ((this.QR = new ji()), (this.QR.type = 5), this.QR.connect(new Ds()));
      return this.QR;
    }
    CBa() {
      this.TR == null &&
        ((this.TR = new ji()), (this.TR.type = 3), this.TR.connect(this.z0()));
      return this.TR;
    }
    BBa() {
      this.RR == null &&
        ((this.RR = new ji()), (this.RR.type = 4), this.RR.connect(this.z0()));
      return this.RR;
    }
    P7a() {
      this.SR == null &&
        ((this.SR = new Es()), (this.SR.type = 6), this.z0().append(this.SR));
      return this.SR;
    }
    h7a(a, b, c) {
      b && (c = !0);
      if (
        this.Bw.v[a] == null ||
        !this.enabled ||
        La.context == null ||
        La.a1() == 0 ||
        (b && this.cdb(a)) ||
        (!c && this.Lxb(a))
      )
        return -1;
      a = this.c8a(this.Bw.v[a].yR, c);
      return a < 0 ? -1 : a;
    }
    Nhb(a) {
      this.Oy &= ~(1 << a.slot);
      J.remove(this.outputs, a);
      a.Tc != null && (a.Tc = null);
    }
    Lxb(a) {
      let b = this.Bw.v[a];
      if (b.yR) return !1;
      let c = J.now() / 1e3;
      a = this.Nxb.v[a];
      a == null && (a = this.Mxb);
      if (c - b.CFa < a) return !0;
      b.CFa = c;
      return !1;
    }
    c8a(a, b) {
      if (a) {
        for (b = 0; b < this.xGa; ) {
          if ((this.Oy & (1 << b)) == 0) return ((this.Oy |= 1 << b), b);
          ++b;
        }
        return -1;
      }
      a = -1;
      for (var c = this.xGa, d = c + this.$eb; c < d; ) {
        if ((this.Oy & (1 << c)) == 0) {
          this.Oy |= 1 << c;
          a = c;
          break;
        }
        ++c;
      }
      if (b && a < 0) {
        b = null;
        c = a = 0;
        for (d = this.outputs; c < d.length; ) {
          let e = d[c];
          ++c;
          !e.audio.yR && !e.loop && e.G0() > a && ((a = e.G0()), (b = e));
        }
        if (b == null) return -1;
        a = b.slot;
        b.stop();
      }
      return a;
    }
  }
  Us.g = "4B6";
  Object.assign(Us.prototype, { j: Us });
