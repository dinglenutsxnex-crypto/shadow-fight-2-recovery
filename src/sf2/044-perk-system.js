// 044-perk-system.js
// Domain: physics  |  65 class(es)  |  tree root(s): Xu, rw, Ch, qw, sw, Pa, $v, Od, Dy, ie, dw, hg, $g, Vv, Li, jp, Sv, au, pv, lp, uw, vw, ww, tw, Hj, xw, Gt, zf, pl, yw, Kv, ol, bh, gn, Gj, zw, Su, Af, ic, kp, xd, ua, db, sb, ge, Kj, Je, Aw, Bw, Cw, Dw, Ew, Nb, Ob, mp, zc, xu, Fw, Ov, im, gw, kw, nw, Gw, Hw
// Edit here. Run `npm run build` to reassemble the full bundle.
  class Xu {
    constructor() {
      this.oz = this.currentFrame = this.JS = this.currentScale = this.tM = 0;
    }
  }
  Xu.g = "271";
  Object.assign(Xu.prototype, { j: Xu });
  class rw {
    constructor(a, b, c, d) {
      this.Jca = 0;
      this.label = "";
      this.weight = 0;
      this.Eg = "";
      a != null && (this.Eg = a);
      b != null && (this.weight = b);
      c != null && (this.label = c);
      d != null && (this.Jca = d);
    }
  }
  rw.g = "272";
  Object.assign(rw.prototype, { j: rw });
  class Ch {
    static parse(a) {
      let b = (Ch.pga.length = 0);
      a = a.children;
      let c = 0;
      for (; c < a.length; ) {
        let e = a[c++];
        var d = e.attributes.get("Name");
        let f = e.attributes.get("Label");
        d = new rw(
          d != null ? d : null,
          u.I(e.attributes.get("Weight"), 0),
          f != null ? f : null,
          b + u.I(e.attributes.get("Weight"), 0),
        );
        b += u.I(e.attributes.get("Weight"));
        Ch.pga.push(d);
      }
    }
    static I5a() {
      let a = m.l(),
        b = 0,
        c = Ch.pga;
      for (; b < c.length; ) {
        let e = c[b];
        ++b;
        if (e.weight == 0) continue;
        var d = e.label;
        if (d == null || d == "") a.push(e);
        else {
          d = !1;
          let f = e.label.split("|"),
            g = 0;
          for (; g < f.length; ) f[g++] == "ADVERTISING" && (d = !0);
          d || a.push(e);
        }
      }
      return a;
    }
  }
  Ch.g = "273";
  class qw {
    constructor(a, b) {
      this.ip = a;
      this.fileName = b;
    }
  }
  qw.g = "274";
  Object.assign(qw.prototype, { j: qw });
  class sw {
    constructor(a) {
      a == null && (a = 0);
      this.uva = 1;
      this.fV = 0;
      this.wN = 1;
      this.min = 0;
      this.max = 3.4028234663852886e38;
      this.target = this.current = a;
      this.vR = !1;
      this.VH = 0;
    }
    set(a) {
      a > this.max ? (a = this.max) : a < this.min && (a = this.min);
      this.target = this.current = a;
      this.vR = !1;
      this.VH = 0;
    }
    TZa(a) {
      a < this.min ? (a = this.min) : a > this.max && (a = this.max);
      this.vR || ((this.vR = !0), (this.fV = 0), (this.wN = 1));
      this.target = a;
    }
    update() {
      this.vR &&
        ((this.VH += L.J.uk.Cm),
        this.VH < L.J.uk.Cm ||
          ((this.fV += this.uva * this.VH),
          (this.wN += Math.exp(this.fV)),
          this.target > this.current
            ? ((this.current += this.wN),
              this.current >= this.target && this.end())
            : ((this.current -= this.wN),
              this.current <= this.target && this.end())));
    }
    end() {
      this.VH = 0;
      this.vR = !1;
      this.current = this.target;
    }
  }
  sw.g = "275";
  Object.assign(sw.prototype, { j: sw });
  class Pa {
    static mI(a, b, c) {
      c == null && (c = !1);
      b == null && (b = !0);
      var d = p.o.xa.te(a);
      if (d == null) {
        d = new Af().CT(p.o.s2, a.name, !1, 1, -1, -1);
        d.Or(a);
        d.HF(!1);
        d.aP();
        p.o.xa.Ro(d);
        a = p.o.bb();
        d.zu(a);
        if (c && d.ib.Bf < a && !d.FN) {
          c = d.Si;
          if (c == null) return !1;
          Pa.Mba(c, d, !1);
        }
        b && sb.d4();
      } else d.nk(d.qd() + 1);
      return !0;
    }
    static S2a(a) {
      var b;
      b == null && (b = !0);
      if (p.o.xa.te(a) == null) {
        let c = p.Dc + a.Ec,
          d = new Af();
        d.CT(p.o.s2, a.name, !1, 0, -1, c);
        d.Or(a);
        d.HF(!1);
        d.aP();
        p.o.xa.Ro(d);
        d.zu(p.o.bb());
        b && sb.WS();
        v.iya(d);
        return !0;
      }
      return !1;
    }
    static Mba(a, b, c) {
      c == null && (c = !0);
      b.HF(!0);
      b.Up(a.Ug);
      b.zu(p.o.bb());
      c && sb.WS();
    }
    static T2a(a, b) {
      var c;
      c == null && (c = !0);
      b.FF(p.Dc + a.Ec);
      b.$T(a.Ug);
      b.HF(!0);
      b.be.length == 0 && b.aP();
      p.o.xa.Ro(b, !0);
      c && sb.WS();
    }
    static wwa(a) {
      if (a == null) return !1;
      if (p.o.Ob >= a.np()) {
        let b = p.o.Ob - a.np(),
          c = !1,
          d;
        a.Ec > 0 ? (d = Pa.S2a(a)) : (c = d = Pa.mI(a, !0, !1));
        d && (p.o.Kr(b), p.o.save(), Pa.Zz(a));
        return c;
      }
      v.Gv(a, 2);
      return !1;
    }
    static XYa(a) {
      if (a == null) return !1;
      if (p.o.gd >= a.pn()) {
        let b = p.o.gd - a.pn(),
          c = Pa.mI(a, !0, !0);
        c && (p.o.xl(b, 10), p.o.save(), Pa.Zz(a));
        return c;
      }
      v.Gv(a, 3);
      return !1;
    }
    static WYa(a) {
      if (a == null) return !1;
      var b = p.o.xa.te(a);
      if (b == null) return !1;
      let c = b.Si;
      if (c == null) return !1;
      if (p.o.Ob >= c.oi)
        return (
          (a = p.o.Ob - c.oi),
          c.Ec > 0 ? (Pa.T2a(c, b), (b = !1)) : (Pa.Mba(c, b), (b = !0)),
          p.o.Kr(a),
          p.o.save(),
          Pa.Zz(c),
          b
        );
      v.Gv(a, 2);
      return !1;
    }
    static YYa(a) {
      if (a == null) return !1;
      let b = p.o.xa.te(a);
      if (b == null) return !1;
      let c = b.Si;
      if (c == null) return !1;
      if (p.o.gd >= c.pd)
        return (
          (a = p.o.gd - c.pd),
          Pa.Mba(c, b),
          p.o.xl(a, 10),
          p.o.save(),
          Pa.Zz(c),
          !0
        );
      v.Gv(a, 3);
      return !1;
    }
    static BZa(a) {
      if (a == null || a == "") return !1;
      a = p.items.$b(a);
      if (a == null) return !1;
      let b = p.o.xa.te(a);
      if (b == null || b.Dh <= p.Dc) return !1;
      if (!b.Qz()) return p.o.gd >= a.Od;
      a = b.Si;
      return a != null ? p.o.u1(a.Od) : !1;
    }
    static AZa() {
      debugger;
      return null;
    }
    static TYa(a) {
      Pa.uwa(p.items.$b(a));
    }
    static uwa(a) {
      if (a == null) return !1;
      let b = p.o.xa.te(a);
      if (b == null || b.Dh <= p.Dc) return !1;
      if (b.Qz()) {
        let c = b.Si;
        if (c == null) return !1;
        if (p.o.gd >= c.Od) return (Pa.vwa(b, c), sb.WS(), !0);
        v.Gv(a, 3);
        return !1;
      }
      if (p.o.gd >= a.Od) return (Pa.vwa(b, a), sb.d4(), !0);
      v.Gv(a, 3);
      return !1;
    }
    static vwa(a, b) {
      let c = p.o.gd - b.Od;
      p.o.xa.Yda(a);
      p.o.xl(c, 11);
      p.o.save();
      Pa.Zz(b);
    }
    static SYa(a) {
      if (a != null)
        if (p.o.gd >= a.pd) {
          let b = p.o.gd - a.pd;
          if (Pa.mI(a)) {
            switch (a.Yb) {
              case I.l7:
                p.o.ZH(a.Lj, a.cn);
                break;
              case I.m7:
                p.o.fo.dka();
                break;
              case I.n7:
                (p.o.cU(!0), v.eka(), za.instance != null && za.instance.Nma());
            }
            p.o.xl(b, 10);
            p.o.save();
            Pa.Zz(a);
          }
        } else v.Gv(a, 3);
    }
    static Yua(a, b, c, d) {
      var e;
      e == null && (e = !0);
      d == null && (d = !0);
      c == null && (c = 0);
      b == null && (b = 1);
      if (a == null) return null;
      b = p.Py(a, b, c, d, e);
      c = a.gJ();
      c > 0 && p.o.$ua(c, a.HJ);
      c = a.J0();
      c > 0 && p.o.Qua(c, 1, a.HJ);
      c = a.gF;
      c > 0 && ((d = p.o), d.$tb(d.f$a() + c));
      c = a.hF;
      c > 0 && ((d = p.o), d.aub(d.g$a() + c));
      c = a.iF;
      c > 0 && ((d = p.o), d.bub(d.h$a() + c));
      c = a.Lj;
      c != null && c != "" && a.cn > 0 && p.o.ZH(a.Lj, a.cn);
      switch (a.Yb) {
        case I.m7:
          p.o.fo.dka();
          break;
        case I.n7:
          (p.o.cU(!0), v.eka(), za.instance != null && za.instance.Nma());
      }
      return b;
    }
    static rab(a, b, c, d, e) {
      a = p.items.$b(a);
      a != null && Pa.qDa(a, b, c, d, e);
    }
    static qDa(a, b, c, d, e) {
      if (a != null) {
        var f = b > 0 ? a.y7a(b) : null;
        d && p.QOa(a);
        var g = !1,
          h = !1;
        if (c > 0 || !p.o.xa.Uga(a.name)) {
          let k = v.bR;
          v.bR = e;
          let l = Pa.Yua(a, c, 0, d);
          v.bR = k;
          f != null &&
            (l.rla("Upgrade"),
            l.Up(e && b < a.Bf * 100 ? a.Bf * 100 + 30 : f.Ug),
            Pa.ktb(l, p.o.bb()),
            l.zu(p.o.bb()),
            (h = !0));
          a.Bf <= p.o.bb() && a.Nr(!0);
        } else
          c == 0
            ? d && (g = p.eo(p.vf(a.name), !0))
            : p.BKa(p.vf(a.name), c < 0 ? -c : c);
        b = Ma.get();
        b != null && (h && b.ac.content.Or(f), (g || h) && b.ac.content.Xr());
        c <= 0 &&
          !d &&
          ((a = p.vf(a.name)), a != null && (a.ib.Nr(!1), p.o.hM()));
        p.F();
      }
    }
    static ktb(a, b) {
      let c = a.node.A("Enchantments");
      if (c != null) {
        for (var d = c.children, e = 0; e < d.length; ) {
          var f = d[e++];
          if (f.A("Set") == null) continue;
          f = f.A("Set");
          f.has("Aspect") && f.set("Aspect", K.T(ye.F().qea(b)));
        }
        a.Uia(c);
        p.o.save();
      }
    }
    static rDa(a, b) {
      a = p.items.$b(a);
      a != null && Pa.sDa(a, b);
    }
    static sDa(a, b) {
      a != null &&
        b != null &&
        b.length != 0 &&
        ((a = p.vf(a.name)),
        a != null &&
          (a.nYa(b, p.o.bb()), a.Uia(a.node.A("Enchantments")), p.o.save()));
    }
    static Zz(a) {
      Pa.lia.$(a);
      let b = ha.F().ta,
        c = b.Nb;
      b.Nb = ib.empty();
      b.Vv = "";
      b.hT = "";
      b.item = a;
      ha.F().Vf("QUEST_EVENT_PURCHASE");
      b.Nb = c;
    }
    static bcb(a, b) {
      Pa.lia.$(b);
      let c = ha.F().ta,
        d = c.Nb;
      c.tHa = a;
      c.item = b;
      ha.F().Vf("QUEST_EVENT_OFFER_ITEM_RECIEVED");
      c.Nb = d;
    }
  }
  Pa.g = "276";
  class $v {
    constructor() {}
    parse(a) {
      this.name = a.name;
      this.Bc = u.H(a.attributes.get("Base"));
      a = a.attributes.get("Attribute");
      this.Ok = a != null ? a : null;
    }
  }
  $v.g = "277";
  Object.assign($v.prototype, { j: $v });
  class Od {
    static ql(a) {
      switch (a) {
        case "Both":
          return 5;
        case "Child":
          return 4;
        case "Enemy":
          return 2;
        case "EnemyChild":
          return 6;
        case "Me":
          return 1;
        case "Null":
          return 0;
        case "Parent":
          return 3;
        case "SuperParent":
          return 7;
        default:
          return 0;
      }
    }
  }
  class Dy {
    constructor() {
      this.yYa = null;
      this.x2a = this.Bfb = this.ffb = 0;
      this.name = null;
      debugger;
    }
  }
  Dy.g = "278";
  Object.assign(Dy.prototype, { j: Dy });
  class ie {
    static Tr(a) {
      return We.bga(a);
    }
  }
  ie.g = "279";
  class dw {
    constructor() {
      this.types = m.l();
      this.value = 0;
    }
    parse(a) {
      this.value = u.H(a.attributes.get("Value"));
      a = a.attributes.get("Type");
      a = a != null ? a : "";
      a != null && m.addRange(this.types, a.split("|"));
    }
    sdb(a) {
      let b = 0,
        c = this.types;
      for (; b < c.length; ) if (c[b++] == a) return !0;
      return !1;
    }
  }
  dw.g = "27A";
  Object.assign(dw.prototype, { j: dw });
  class hg {
    constructor() {
      this.name = this.icon = null;
      this.SZ = 0;
    }
    static Qd(a) {
      let b = new hg();
      var c = a.attributes.get("Name");
      b.name = c != null ? c : "";
      c = a.attributes.get("Icon");
      b.icon = c != null ? c : "";
      a = a.attributes.get("Group");
      a = a != null ? a : "";
      b.SZ = a == "Forge" ? 1 : a == "Raid" ? 2 : 0;
      return b;
    }
    static ji(a, b) {
      var c;
      c == null && (c = 0);
      let d = new hg();
      d.name = a;
      d.icon = b;
      debugger;
      d.SZ = c;
      return d;
    }
  }
  hg.g = "27B";
  Object.assign(hg.prototype, { j: hg });
  class $g {
    constructor(a, b) {
      this.currency = a;
      this.count = b;
    }
  }
  $g.g = "27D";
  Object.assign($g.prototype, { j: $g });
  class Vv {
    constructor(a) {
      var b = a.attributes.get("Name");
      this.name = b != null ? b : "";
      this.maxValue = u.I(a.attributes.get("MaxValue"));
      b = a.attributes.get("Icon");
      this.icon = b != null ? b : "";
      a = a.attributes.get("Color");
      this.color = a != null ? a : "";
    }
  }
  Vv.g = "27E";
  Object.assign(Vv.prototype, { j: Vv });
  class Li {
    constructor(a, b) {
      this.Ilb = 0;
      this.Tw = a;
      this.count = b;
    }
  }
  Li.g = "27F";
  Object.assign(Li.prototype, { j: Li });
  class jp {
    constructor(a) {
      let b = $f(a, 0, 2147483647);
      this.min = b.first;
      this.max = b.second;
      this.value = xb(a.attributes.get("Value"));
    }
  }
  jp.g = "280";
  Object.assign(jp.prototype, { j: jp });
  class Sv {
    constructor(a) {
      var b = a.attributes.get("Name");
      this.Lj = b != null ? b : "";
      this.nr = m.l();
      a = a.children;
      for (b = 0; b < a.length; ) {
        var c = a[b++];
        c.name == "Level" && ((c = new jp(c)), this.nr.push(c));
      }
    }
    CQ() {
      debugger;
      return null;
    }
  }
  Sv.g = "281";
  Object.assign(Sv.prototype, { j: Sv });
  class au {
    constructor() {
      this.$t = this.hdb = !1;
      this.time = this.rma = this.round = this.jL = 0;
    }
  }
  au.g = "282";
  Object.assign(au.prototype, { j: au });
  class pv {
    constructor() {
      this.data = this.ge = null;
      this.Wf = 0;
      this.OJa = 11;
    }
  }
  pv.g = "283";
  Object.assign(pv.prototype, { j: pv });
  class lp {
    constructor() {
      this.qB = this.I2 = this.Da = null;
      this.t4a = 0;
      this.Ee = null;
      this.ep = 0;
      this.Pf = null;
      this.type = "FightNone";
      this.jj = new tw();
      this.vD = -2;
    }
    yzb(a, b, c, d, e, f, g, h) {
      let k = this.Ee;
      k != null && k.DXa(a, b, c, d, e, f, g, h);
    }
    zd() {
      return this.vD == 1;
    }
    Dwa(a, b, c) {
      if (a == null) this.Ee = b;
      else {
        this.jj.clear();
        var d = p.o.$h ? a.lza : a.lHa,
          e = !0,
          f = p.o;
        if (
          a.f0.gm(f.bb()).qh > 0 ||
          (d != null && d.gm(f.bb()).qh > 0) ||
          c.qh > 0
        )
          e = !1;
        this.fva(a.f0, c.qh, b, e);
        this.fva(d, c.qh, b, e);
      }
    }
    fva(a, b, c, d) {
      if (a != null) {
        var e = a.gm(p.o.bb());
        this.ep = Math.trunc(this.ep) + (a != null ? e.exp : 0);
        this.Ee = c;
        c = a != null ? e.Ob : 0;
        this.yzb(
          Math.trunc(
            a != null && e.qh > 0
              ? e.qh
              : b >= 0
                ? b
                : d
                  ? Math.ceil(c * v.nF.Lya)
                  : 0,
          ),
          c,
          a != null ? e.Xo : 0,
          v.nF.oJa,
          v.nF.hp,
          v.nF.Wi,
          v.nF.Ub,
          v.nF.rk,
        );
        this.jj.Ob = this.g6a();
        this.jj.Xo = this.f6a();
        this.jj.exp += e.exp;
        a = 0;
        for (b = e.Y2; a < b.length; ) this.jj.bba(b[a++]);
        a = 0;
        for (b = e.Qk; a < b.length; ) this.jj.iva(b[a++]);
        a = 0;
        for (b = e.Dr; a < b.length; ) this.jj.jva(b[a++]);
        e.Zj != null && this.jj.kva(e.Zj);
        a = 0;
        for (b = e.items; a < b.length; ) this.jj.bba(b[a++]);
        a = 0;
        for (e = e.yZ; a < e.length; ) this.jj.bba(e[a++].K0());
      }
    }
    f6a() {
      return this.Ee != null ? this.Ee.oc.DOa : 0;
    }
    g6a() {
      return this.Ee != null ? this.Ee.oc.v6 : 0;
    }
  }
  lp.g = "284";
  Object.assign(lp.prototype, { j: lp });
  class uw {
    constructor() {
      this.vn = !1;
      this.item = this.lFa = null;
    }
  }
  uw.g = "285";
  Object.assign(uw.prototype, { j: uw });
  class vw {
    constructor() {
      this.vn = !1;
      this.PL = null;
    }
  }
  vw.g = "286";
  Object.assign(vw.prototype, { j: vw });
  class ww {
    constructor() {
      this.vn = !1;
      this.tU = null;
    }
  }
  ww.g = "287";
  Object.assign(ww.prototype, { j: ww });
  class tw {
    constructor() {
      this.Zj = null;
      this.Dr = m.l();
      this.Qk = m.l();
      this.items = m.l();
      this.Ob = this.Xo = this.exp = 0;
    }
    clear() {
      this.exp = this.Xo = this.Ob = 0;
      this.items.length = 0;
      this.Qk.length = 0;
      this.Dr.length = 0;
      this.Zj = null;
    }
    bba(a) {
      if (a != null)
        switch (a.hL) {
          case 1:
            this.JXa(a);
            break;
          case 2:
            this.IXa(a);
            break;
          case 3:
            this.iva(a);
            break;
          case 4:
            this.jva(a);
            break;
          case 5:
            this.kva(a);
        }
    }
    IXa(a) {
      debugger;
      this.Ob += a.T5a();
    }
    iva(a) {
      debugger;
      if (a != null) {
        var b = v.Tq.AD(a.name);
        if (b != null) {
          for (var c = 0, d = this.Qk; c < d.length; ) {
            var e = d[c];
            ++c;
            if (e.PL.currency == b) {
              b = e.PL.count;
              b += a.IAa();
              e.PL.count = b;
              return;
            }
          }
          e = a.IAa();
          e > 0 &&
            ((c = new vw()),
            (c.PL = new $g(b, e)),
            (c.vn = a.vn),
            this.Qk.push(c));
        }
      }
    }
    jva(a) {
      debugger;
      if (a != null) {
        var b = v.e0.$Ba(a.name);
        if (b != null) {
          for (var c = 0, d = this.Dr; c < d.length; ) {
            var e = d[c];
            ++c;
            if (e.tU.Tw == b) {
              b = e.tU.count;
              b += a.value;
              e.tU.count = b;
              return;
            }
          }
          e = a.value;
          e > 0 &&
            ((c = new ww()),
            (c.tU = new Li(b, e)),
            (c.vn = a.vn),
            this.Dr.push(c));
        }
      }
    }
    kva(a) {
      debugger;
      a != null &&
        (this.Zj == null ? (this.Zj = a) : m.addRange(this.Zj.tx, a.tx));
    }
    JXa(a) {
      if (a != null && p.o.xa.Rj(a.name) == null) {
        var b = p.items.$b(a.name);
        if (b != null) {
          var c = a.xBa() > 0 ? a.xBa() : p.o.bb();
          b.Bf == c ? (c = b) : ((c = b.D9a(c)), (c = c != null ? c : b));
          if (a.ona > 0) {
            let d = c.Dz(!0, c.Bf),
              e = d.length;
            e > 0 && ((c = a.ona), e - 1 < c && (c = e - 1), (c = b.cw(d[c])));
          }
          b = new uw();
          b.item = c;
          b.lFa = a;
          b.vn = a.vn;
          this.items.push(b);
        }
      }
    }
    qt(a) {
      a == null && (a = !1);
      let b = m.l(),
        c = 0,
        d = this.items;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        (a && !e.vn) || b.push(e.item);
      }
      return b;
    }
    TAa() {
      var a;
      a == null && (a = !1);
      let b = m.l(),
        c = 0,
        d = this.Qk;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        (a && !e.vn) || b.push(e.PL);
      }
      return b;
    }
    $8a() {
      var a;
      a == null && (a = !1);
      let b = m.l(),
        c = 0,
        d = this.Dr;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        (a && !e.vn) || b.push(e.tU);
      }
      return b;
    }
  }
  tw.g = "288";
  Object.assign(tw.prototype, { j: tw });
  class Hj {
    constructor(a, b) {
      this.b6 = a;
      this.item = b;
    }
  }
  Hj.g = "289";
  Object.assign(Hj.prototype, { j: Hj });
  class xw {
    constructor(a) {
      this.TJa = a;
    }
  }
  xw.g = "28A";
  Object.assign(xw.prototype, { j: xw });
  class Gt {
    constructor(a, b) {
      this.name = a;
      this.UL = b;
    }
  }
  Gt.g = "28B";
  Object.assign(Gt.prototype, { j: Gt });
  class zf {
    constructor(a, b, c, d, e, f, g, h, k, l) {
      l == null && (l = !1);
      k == null && (k = !1);
      h == null && (h = !1);
      g == null && (g = 0);
      f == null && (f = "");
      e == null && (e = "");
      d == null && (d = 0);
      debugger;
      this.j3a = b;
      this.kf = a;
      this.An = c;
      this.mE = !0;
      this.Fw = d;
      this.$P = "";
      this.gma = g;
      this.focus = h;
      this.e5 = k;
      this.Qwa = l;
      this.Gja = this.OA = f + e;
      this.lKa = "";
    }
    static from(a) {
      let b = new zf(a.kf, a.j3a, a.An);
      b.mE = a.mE;
      b.$P = a.$P;
      b.Fw = a.Fw;
      b.gma = a.gma;
      b.focus = a.focus;
      b.e5 = a.e5;
      b.Qwa = a.Qwa;
      b.OA = a.OA;
      b.Gja = a.Gja;
      b.lKa = a.lKa;
      return b;
    }
  }
  zf.g = "28C";
  Object.assign(zf.prototype, { j: zf });
  class pl {
    constructor(a) {
      this.ga = a;
      let b = a.attributes.get("Name");
      this.Ba = b != null ? b : "";
      this.mO = u.ka(a.attributes.get("ObtainedReward"));
    }
    ab() {
      return this.Ba;
    }
    Kd(a) {
      this.Ba = a;
      this.ga.set("Name", this.Ba);
      return a;
    }
    $Ma(a) {
      this.mO = a;
      this.ga.set("ObtainedReward", this.mO ? "true" : "false");
    }
  }
  pl.g = "28D";
  Object.assign(pl.prototype, { j: pl });
  class yw {
    constructor(a) {
      this.completed = this.hS = this.zj = !1;
      this.counter = u.I(a.attributes.get("CounterValue"));
      this.priority = u.I(a.attributes.get("Priority"));
      var b = a.attributes.get("Name");
      this.name = b != null ? b : "";
      b = a.attributes.get("Description");
      this.description = b != null ? b : "";
      b = a.attributes.get("Icon");
      this.icon = b != null ? b : "";
      this.HE = u.I(a.attributes.get("MoneyPrize"));
      this.kP = u.I(a.attributes.get("BonusPrize"));
      this.hidden = u.ka(a.attributes.get("Hidden"), !1);
      this.reset();
    }
    Nr(a) {
      this.zj = a && (this.HE > 0 || this.kP > 0);
    }
    reset() {
      this.zj = this.hS = this.completed = !1;
    }
  }
  yw.g = "28E";
  Object.assign(yw.prototype, { j: yw });
  class Kv {
    constructor(a) {
      this.My = m.l();
      var b = a.attributes.get("Name");
      this.name = b != null ? b : "";
      a = a.children;
      for (b = 0; b < a.length; ) {
        let c = new yw(a[b++]);
        this.My.push(c);
      }
      this.My.sort(function (c, d) {
        return qb(c.counter, d.counter);
      });
    }
  }
  Kv.g = "28F";
  Object.assign(Kv.prototype, { j: Kv });
  class ol {
    constructor(a) {
      this.ga = a;
      let b = a.attributes.get("Name");
      this.Ba = b != null ? b : "";
      this.DB = u.I(a.attributes.get("CurrentValue"));
    }
    ab() {
      return this.Ba;
    }
    Kd(a) {
      this.Ba = a;
      this.ga.set("Name", a);
      return a;
    }
    KMa(a) {
      this.DB = a;
      this.ga.set("CurrentValue", K.T(this.DB));
    }
  }
  ol.g = "290";
  Object.assign(ol.prototype, { j: ol });
  class bh {
    constructor() {
      this.Ba = "";
      this.ga = null;
    }
    ab() {
      return this.Ba;
    }
    Kd(a) {
      this.Ba = a;
      this.ga.set("Name", this.Ba);
      return a;
    }
    static Qd(a) {
      let b = new bh();
      b.ga = a;
      a = a.attributes.get("Name");
      b.Ba = a != null ? a : null;
      return b;
    }
    static $4a(a, b) {
      let c = new bh();
      c.ga = a.appendChild("RepostAchievement");
      c.Kd(b);
      return c;
    }
  }
  bh.g = "291";
  Object.assign(bh.prototype, { j: bh });
  class gn {
    constructor(a, b, c, d) {
      d == null && (d = 0);
      c == null && (c = 0);
      b == null && (b = 0);
      a == null && (a = 0);
      this.Vy = a;
      this.Ft = b;
      this.SJ = c;
      this.pause = d;
    }
  }
  gn.g = "292";
  Object.assign(gn.prototype, { j: gn });
  class Gj {
    constructor(a) {
      this.SH = new Xe();
      this.Rv = null;
      this.time = 0;
      this.Yf = null;
      this.color = new H(0, 0, 0, 1);
      this.kM = this.LJ = this.FJ = this.cE = this.XD = !0;
      this.Bt = !1;
      this.KJ = this.EJ = this.DJ = !0;
      this.iAa = "";
      this.eD = "d";
      this.hD = ":";
      this.Rv = a;
      this.vua = new zw(this, this.Yf);
    }
    I5(a) {
      this.Yf = a;
      this.vua.data = this.Yf;
    }
    Ala(a) {
      this.SH = a;
      this.SH != null && this.SH.tla(this.time);
    }
    update() {
      this.Rv != null && this.Rv(this.vua);
      this.SH != null && this.SH.tla(this.time);
    }
    static from(a) {
      let b = new Gj(a.Rv);
      b.time = a.time;
      b.I5(a.Yf);
      b.hD = a.hD;
      b.eD = a.eD;
      b.iAa = a.iAa;
      b.KJ = a.KJ;
      b.EJ = a.EJ;
      b.DJ = a.DJ;
      b.Bt = a.Bt;
      b.kM = a.kM;
      b.LJ = a.LJ;
      b.FJ = a.FJ;
      b.cE = a.cE;
      b.XD = a.XD;
      b.color = a.color;
      b.Ala(a.SH);
      return b;
    }
  }
  Gj.g = "293";
  Object.assign(Gj.prototype, { j: Gj });
  class zw {
    constructor(a, b) {
      this.data = this.oaa = null;
      this.data = b;
      this.oaa = a;
    }
    aR() {
      return this.oaa.time;
    }
    cB(a) {
      this.oaa.time = Math.trunc(a);
    }
  }
  zw.g = "294";
  Object.assign(zw.prototype, { j: zw });
  class Su {
    constructor(a, b) {
      var c = a.attributes.get("Icon");
      this.image = c != null ? c : "";
      this.image = Ye.vI(this.image);
      this.E4 = u.I(a.attributes.get("Rank"));
      c = a.attributes.get("KeysDescription");
      this.tFa = c != null ? c : "";
      a.attributes.get("EffectDescription");
      this.name = b.name;
      this.dr = b;
      this.hE = !1;
    }
  }
  Su.g = "295";
  Object.assign(Su.prototype, { j: Su });
  class Af {
    constructor() {
      this.be = m.l();
      this.u7 = null;
      this.UB = this.yW = this.FN = !1;
      this.EH = this.UH = this.Si = null;
      this.yv = !1;
      this.node = null;
      this.$M = this.Dh = this.jy = this.Ce = 0;
      this.Wu = !1;
      this.Ba = this.ib = null;
    }
    ab() {
      return this.Ba;
    }
    Kd(a) {
      this.Ba = a;
      this.yv && this.node.set("Name", a);
      return a;
    }
    Or(a) {
      this.ib = a;
      this.ib.bA || (this.ib.isActive = !0);
      this.Ce == -1 ? this.Up(this.ib.Ug) : this.Up(this.Ce);
    }
    BL(a) {
      this.Wu = a;
      this.yv && this.node.set("Equipped", a ? "1" : "0");
    }
    qd() {
      return this.$M;
    }
    nk(a) {
      this.$M = a;
      this.yv && this.node.set("Count", a == null ? "null" : "" + a);
    }
    FF(a) {
      this.Dh = a;
      this.yv && this.node.set("DeliveryTime", K.T(a));
    }
    $T(a) {
      this.jy = a;
      this.yv &&
        this.node.set("DeliveryUpgradeLevel", a == null ? "null" : "" + a);
    }
    Up(a) {
      this.Ce = a;
      this.yv && this.node.set("UpgradeLevel", a == null ? "null" : "" + a);
    }
    kw() {
      return this.UH == null ? this.ib : this.UH;
    }
    Qz() {
      return this.u7 == "Upgrade";
    }
    HF(a) {
      this.rla(a ? "Upgrade" : "Item");
    }
    rla(a) {
      this.u7 = a;
      this.yv && this.node.set("AcquireType", this.u7);
    }
    Y0() {
      return this.qd() > 0;
    }
    Kqb(a) {
      let b = a.attributes.get("Name"),
        c = u.I(a.attributes.get("Count")),
        d = u.I(a.attributes.get("UpgradeLevel"), -1),
        e = u.ka(a.attributes.get("Equipped"), !1),
        f = xb(a.attributes.get("DeliveryTime"));
      f > 0 && I.d1() > 0 && (f = I.d1());
      let g = u.I(a.attributes.get("DeliveryUpgradeLevel"), -1),
        h = a.attributes.get("AcquireType");
      if (a.attributes.get("IsUpgrade") != null) debugger;
      this.init(
        a,
        b != null ? b : "",
        e,
        c,
        d,
        f,
        g,
        !0,
        h != null ? h : "Item",
      );
      return this;
    }
    CT(a, b, c, d, e, f, g) {
      var h, k;
      k == null && (k = "Item");
      h == null && (h = !0);
      g == null && (g = -1);
      f == null && (f = 0);
      e == null && (e = -1);
      this.init(a.appendChild("Item"), b, c, d, e, f, g, h, k);
      return this;
    }
    init(a, b, c, d, e, f, g, h, k) {
      this.node = a;
      this.yv = h;
      this.Si = this.UH = this.EH = this.ib = null;
      this.FN = this.yW = this.UB = !1;
      this.Kd(b);
      this.BL(c);
      this.ib = p.items.$b(b);
      this.nk(d);
      this.Up(e);
      this.FF(f);
      this.$T(g);
      this.rla(k);
      a.A("Enchantments") != null && this.Uia(a.A("Enchantments"));
      a.A("RecipeDelivery") != null && this.qkb(a.A("RecipeDelivery"));
    }
    qkb(a) {
      debugger;
      this.EH = Pi.$_(a, this);
    }
    Uia(a) {
      this.l0a();
      for (
        var b = m.l(), c = m.l(), d = new Map(), e = a.children, f = 0;
        f < e.length;

      ) {
        var g = e[f++],
          h = I.Rkb(g);
        h != null && (d.set(h, g), h.Yh == 0 ? b.push(h) : c.push(h));
      }
      if (c != null && c.length != 0 && this.ib != null) {
        e = this.ib.MF;
        if (e.length > 0) {
          f = !0;
          for (g = 0; g < c.length; ) {
            h = c[g++];
            var k = !1,
              l = 0;
            let n = e;
            for (; l < n.length; )
              if (h.name == n[l++].name) {
                k = !0;
                break;
              }
            if (!k) {
              f = !1;
              break;
            }
          }
          if (
            f &&
            (c.length > 0 && this.be.push(c[0]),
            (e = new Ia()),
            v.mba.JOa(this.ib.name, e))
          )
            for (f = 1, g = c.length; f < g; ) {
              h = f++;
              if (h >= e.G - 1) break;
              this.be.push(c[h]);
            }
        }
        e = this.be;
        if (e == null || e.length == 0)
          for (e = [], f = 0; f < c.length; )
            if (
              ((g = c[f]),
              ++f,
              (h = new Ia()),
              (k = v.mba.JOa(this.ib.name, h)),
              (l = this.be),
              l == null || l.length == 0 || (k && this.be.length < h.G - 1))
            )
              for (h = 0; h < e.length; ) {
                if (g.name == e[h++].name) {
                  this.be.push(g);
                  break;
                }
              }
            else break;
      }
      b != null && b.length != 0 && this.be.push(b[0]);
      if (!$k.empty(d) && this.be.length < d.size)
        for (b = d.entries(), c = b.next(); !c.done; )
          ((d = c.value),
            (c = b.next()),
            (e = d[1]),
            this.be.includes(d[0]) || a.Af(e));
    }
    l0a() {
      var a, b;
      b == null && (b = !1);
      a == null && (a = !0);
      let c = m.l(),
        d = 0,
        e = this.be;
      for (; d < e.length; ) {
        let g = e[d];
        ++d;
        (g.Yh != 0 || a) && c.push(g);
      }
      let f = this;
      m.forEach(c, function (g) {
        J.remove(f.be, g);
        if (b) {
          debugger;
          let h = f.node.A("Enchantments");
          h.Af(ag(h, "Perk", "Name", g.name));
        }
      });
    }
    KAa() {
      debugger;
      let a = 0,
        b = this.be;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        if (c.Yh == 0) return c;
      }
      return null;
    }
    Jnb() {
      this.EH = null;
      debugger;
      this.node.removeChild("RecipeDelivery");
    }
    zu(a) {
      this.Si = this.UH = null;
      this.FN = this.yW = this.UB = !1;
      if (this.ib != null) {
        let b = new ja(null),
          c = new ja(null);
        this.ib.Au(a, this.Ce, b, c);
        this.UH = b.G;
        this.Si = c.G;
        this.yW = (this.UB = this.ib.Dz().length > 0) && this.UH != null;
        this.FN = this.UB && this.Si == null;
      }
    }
    GAa(a) {
      let b = null;
      a && this.UB && this.Y0() && (b = this.Si);
      b == null && this.Qz() && (b = this.kw());
      a = b;
      return a != null ? a : this.ib;
    }
    $Aa() {
      return this.jy > 0 && this.ib != null
        ? this.ib.OQ(this.jy)
        : this.GAa(p.o.tC);
    }
    aP() {
      this.tY(this.ib.pz, p.o.bb());
    }
    tY(a, b) {
      if (this.yv) {
        for (var c = !1, d = !1, e = 0; e < a.length; ) {
          var f = v.Sg.ln(a[e++].name);
          if (f != null)
            switch (f.Yh) {
              case 0:
                d = !0;
                break;
              case 1:
                c = !0;
            }
        }
        c && this.v0a();
        d && this.j0a();
        c = p.o;
        c.Pza = b;
        c.qna = !0;
        if (a.length > 0)
          for (
            b =
              this.node.A("Enchantments") == null
                ? this.node.appendChild("Enchantments")
                : this.node.A("Enchantments"),
              d = 0;
            d < a.length;

          ) {
            var g = a[d];
            ++d;
            e = b.appendChild("Perk");
            e.set("Name", g.name);
            if (g.nl.length > 0) {
              f = e.appendChild("Set");
              var h = xe.Bz(g);
              h.gZa();
              g = 0;
              for (h = h.nl; g < h.length; ) {
                let k = h[g];
                ++g;
                f.set(k.key, k.value);
              }
            }
            e = I.PS(e);
            e != null && this.be.push(e);
          }
        c.qna = !1;
      }
    }
    v0a() {
      for (var a = 0; a < this.be.length; ) {
        debugger;
        let b = this.be[a];
        if (b.Yh != 0) {
          J.remove(this.be, b);
          a = this.node.A("Enchantments");
          a.Af(ag(a, "Perk", "Name", b.name));
          break;
        } else ++a;
      }
    }
    j0a() {
      debugger;
      let a = 0;
      for (; a < this.be.length; ) {
        let b = this.be[a];
        if (b.Yh == 0) {
          J.remove(this.be, b);
          let c = this.node.A("Enchantments");
          c.Af(ag(c, "Perk", "Name", b.name));
        } else ++a;
      }
    }
    BEa(a) {
      debugger;
      let b = 0,
        c = this.be.length;
      for (; b < c; ) if (this.be[b++].name == a.name) return !0;
      return !1;
    }
    nYa(a, b) {
      this.wnb(a);
      this.tY(a, b);
    }
    wnb(a) {
      let b = this.node.A("Enchantments"),
        c = 0;
      for (; c < a.length; ) {
        let e = a[c];
        ++c;
        var d = m.find(this.be, function (f) {
          return f.name == e.name;
        });
        d != null && J.remove(this.be, d);
        d = ag(b, "Perk", "Name", e.name);
        d != null && b.Af(d);
      }
    }
  }
  Af.g = "296";
  Object.assign(Af.prototype, { j: Af });
  class ic {
    static cA(a, b, c) {
      c == null && (c = 1e-10);
      return Math.abs(a - b) < c;
    }
    static o2(a) {
      var b;
      b == null && (b = 1e-10);
      return Math.abs(a) < b;
    }
    static BJ(a, b, c) {
      return a >= b ? a <= c : !1;
    }
    static m4(a) {
      return a * a;
    }
  }
  ic.g = "297";
  class kp {
    constructor() {
      this.name = this.icon = this.Eg = this.format = this.iP = null;
      this.ck = 0;
      this.iEa = this.SJa = this.Ula = this.hidden = !1;
    }
  }
  kp.g = "298";
  Object.assign(kp.prototype, { j: kp });
  class xd {
    static parse(a) {
      xd.Iya = u.H(a.A("FrictionForce").attributes.get("Value"), 0.2);
      xd.uDa = u.H(a.A("Gravitation").attributes.get("Value"), 0.4);
      xd.qE = u.I(a.A("IterativeProcess").attributes.get("Value"), 2);
    }
  }
  xd.g = "299";
  class ua {
    static bk(a, b) {
      b == null && (b = !1);
      a = ua.kCa(a);
      if (a != null) {
        if (b) debugger;
        L.J.bg.play(a, b);
      }
    }
    static exb(a) {
      a = ua.kCa(a);
      a != null && L.J.bg.stop(a);
    }
    static Zt(a, b) {
      b == null && (b = !0);
      ua.jma();
      let c = ua.B0(a);
      ua.FP = a;
      G.data.v[c] == null && La.context != null
        ? ((ua.uE = new Jf()),
          ua.uE.load([c]).xK(function () {
            ua.xK(a);
          }))
        : L.J.bg.play(c, b);
    }
    static jma() {
      if (ua.FP != null) {
        let a = ua.B0(ua.FP);
        L.J.bg.stop(a);
        ua.FP = null;
      }
    }
    static xK(a) {
      ua.uE = null;
      ua.FP == a &&
        (La.a1()
          ? ua.Zt(a)
          : La.w3.ei(function () {
              ua.w3(a);
            }));
    }
    static w3(a) {
      ua.FP == a && ua.Zt(a);
    }
    static bU(a) {
      L.J.bg.rMa(a ? 0 : 1);
      ua.gE = a;
    }
    static aU(a) {
      L.J.bg.YA(a ? 0 : 1);
      ua.fE = a;
    }
    static kCa(a) {
      if (ua.HNa == null) {
        let b = new ac();
        b.v.snd_armor = 65558;
        b.v.snd_bodyfall1 = 65563;
        b.v.snd_bodyfall3 = 65564;
        b.v.snd_buy = 65569;
        b.v.snd_click_1 = 65535;
        b.v.snd_click_2 = 65570;
        b.v.snd_coin_hit4 = 65571;
        b.v.snd_disk = 65577;
        b.v.snd_f_pl_attack1 = 65581;
        b.v.snd_f_pl_attack2 = 65582;
        b.v.snd_f_pl_attack3 = 65583;
        b.v.snd_f_pl_attack4 = 65584;
        b.v.snd_f_pl_attack5 = 65585;
        b.v.snd_f_pl_attack6 = 65586;
        b.v.snd_f_pl_death = 65587;
        b.v.snd_f_pl_jump1 = 65588;
        b.v.snd_f_pl_jump2 = 65589;
        b.v.snd_f_pl_jump3 = 65590;
        b.v.snd_focus_1 = 65579;
        b.v.snd_gong = 65591;
        b.v.snd_hit1 = 65536;
        b.v.snd_hit2 = 65537;
        b.v.snd_hit3 = 65538;
        b.v.snd_hit4 = 65539;
        b.v.snd_hit5 = 65540;
        b.v.snd_hit6 = 65541;
        b.v.snd_knife = 65597;
        b.v.snd_learn = 65598;
        b.v.snd_m_pl_attack1 = 65542;
        b.v.snd_m_pl_attack2 = 65543;
        b.v.snd_m_pl_attack3 = 65544;
        b.v.snd_m_pl_attack4 = 65545;
        b.v.snd_m_pl_attack5 = 65546;
        b.v.snd_m_pl_attack6 = 65547;
        b.v.snd_m_pl_jump1 = 65548;
        b.v.snd_m_pl_jump2 = 65549;
        b.v.snd_m_pl_jump3 = 65550;
        b.v.snd_shopshuriken = 65665;
        b.v.snd_shopshurikencatch = 65666;
        b.v.snd_shuriken_fly = 65667;
        b.v.snd_smoke_bomb = 65670;
        b.v.snd_super_hit1 = 65673;
        b.v.snd_swish_sword1 = 65675;
        b.v.snd_swish_sword2 = 65676;
        b.v.snd_swish_sword3 = 65677;
        b.v.snd_swish1 = 65551;
        b.v.snd_swish2 = 65552;
        b.v.snd_swish3 = 65553;
        b.v.snd_swish4 = 65554;
        b.v.snd_swish5 = 65555;
        b.v.snd_swish6 = 65556;
        b.v.snd_swish7 = 65557;
        b.v.snd_throwing = 65679;
        b.v.snd_upgrade = 65696;
        b.v.snd_wall3 = 65697;
        b.v.snd_win = 65703;
        b.v.snd_blizzard_hit = 65562;
        b.v.snd_magic_bomb_end = 65618;
        b.v.snd_magic_acid_cloud = 65614;
        b.v.snd_magic_asteroid_end = 65616;
        b.v.snd_magic_asteroid_start = 65617;
        b.v.snd_magic_asteroid = 65615;
        b.v.snd_magic_bomb_middle = 65619;
        b.v.snd_magic_bomb_start = 65620;
        b.v.snd_magic_deathray = 65621;
        b.v.snd_magic_energyball_end = 65622;
        b.v.snd_magic_energyball_middle = 65623;
        b.v.snd_magic_energyball_start = 65624;
        b.v.snd_magic_fire_splash_end = 65630;
        b.v.snd_magic_fire_splash_middle1 = 65631;
        b.v.snd_magic_fire_splash_middle2 = 65632;
        b.v.snd_magic_fire_splash_middle3 = 65633;
        b.v.snd_magic_fire_splash_start = 65634;
        b.v.snd_magic_fireball_end = 65625;
        b.v.snd_magic_fireball_middle = 65626;
        b.v.snd_magic_fireball_start = 65627;
        b.v.snd_magic_firepillar_end = 65628;
        b.v.snd_magic_firepillar_start = 65629;
        b.v.snd_magic_ice_ball_end = 65635;
        b.v.snd_magic_ice_ball_start = 65636;
        b.v.snd_magic_ice_pins_end = 65637;
        b.v.snd_magic_ice_pins_middle = 65638;
        b.v.snd_magic_ice_pins_start = 65639;
        b.v.snd_magic_lightningarrow_end = 65640;
        b.v.snd_magic_lightningarrow_middle = 65641;
        b.v.snd_magic_lightningarrow_start = 65642;
        b.v.snd_magic_massbomb_end = 65643;
        b.v.snd_magic_massbomb_middle = 65644;
        b.v.snd_magic_massbomb_middle2 = 65645;
        b.v.snd_magic_massbomb_start = 65646;
        b.v.snd_magic_mind_throw_hit = 65647;
        b.v.snd_magic_mind_throw_start = 65648;
        b.v.snd_magic_saw_long = 65649;
        b.v.snd_magic_water_ball_end = 65650;
        b.v.snd_magic_water_ball_start = 65651;
        b.v.snd_magic_wave_end = 65652;
        b.v.snd_magic_wave_start = 65653;
        b.v.snd_blizzard_1 = 65559;
        b.v.snd_blizzard_2 = 65560;
        b.v.snd_blizzard_3 = 65561;
        b.v.snd_bow_fast = 65565;
        b.v.snd_bow_long = 65566;
        b.v.snd_bucher_jump_new = 65567;
        b.v.snd_bucher_touchdown = 65568;
        b.v.snd_composite_sword_heavy_slash1 = 65572;
        b.v.snd_composite_sword_heavy_slash2 = 65573;
        b.v.snd_composite_sword_heavy_slash3 = 65574;
        b.v.snd_composite_sword_stance = 65575;
        b.v.snd_composite_sword_whip = 65576;
        b.v.snd_earthquake = 65578;
        b.v.snd_f_cough = 65580;
        b.v.snd_harpoon_shoot = 65592;
        b.v.snd_hermit_lightning = 65593;
        b.v.snd_hermit_lightning2 = 65594;
        b.v.snd_hermit_storm_idle = 65595;
        b.v.snd_hermit_storm_start = 65596;
        b.v.snd_m_cough = 65656;
        b.v.snd_m_pl_hit2 = 65657;
        b.v.snd_musket_shot_1 = 65654;
        b.v.snd_musket_shot_2 = 65655;
        b.v.snd_roots_end = 65658;
        b.v.snd_roots_start = 65659;
        b.v.snd_sawblade_1 = 65660;
        b.v.snd_sawblade_2 = 65661;
        b.v.snd_sawblade_3 = 65662;
        b.v.snd_sawblade_long = 65663;
        b.v.snd_shoker2 = 65664;
        b.v.snd_smallsphere_middle = 65668;
        b.v.snd_smallsphere_start = 65669;
        b.v.snd_spin1 = 65671;
        b.v.snd_spin2 = 65672;
        b.v.snd_super_hit2 = 65674;
        b.v.snd_sword_pierce = 65678;
        b.v.snd_titan_attack1 = 65680;
        b.v.snd_titan_attack2 = 65681;
        b.v.snd_titan_attack3 = 65682;
        b.v.snd_titan_attack4 = 65683;
        b.v.snd_titan_death = 65684;
        b.v.snd_titan_hit1 = 65685;
        b.v.snd_titan_hit2 = 65686;
        b.v.snd_titan_hit3 = 65687;
        b.v.snd_titan_hit4 = 65688;
        b.v.snd_titan_laugh = 65689;
        b.v.snd_titan_loose = 65690;
        b.v.snd_titan_swish1 = 65691;
        b.v.snd_titan_swish2 = 65692;
        b.v.snd_titan_swish3 = 65693;
        b.v.snd_titan_swish4 = 65694;
        b.v.snd_titan_throw_hit = 65695;
        b.v.snd_wasp_fly_end = 65698;
        b.v.snd_wasp_fly_mid = 65699;
        b.v.snd_wasp_fly_start = 65700;
        b.v.snd_widow_teleport_end = 65701;
        b.v.snd_widow_teleport_start = 65702;
        ua.HNa = b;
      }
      return ua.HNa.v[a];
    }
    static B0(a) {
      if (ua.VGa == null) {
        let b = new ac();
        b.v.menu = 1323;
        b.v.act = 1358;
        b.v.fight1_samurai_spirit = 1347;
        b.v.fight2_blade_dance = 1339;
        b.v.fight3_vengeance = 1330;
        b.v.fight4_forest_of_death = 1329;
        b.v.fight5_ninja_in_the_night = 1328;
        b.v.fight6_sparring = 1327;
        b.v.fight7_fat_boss = 1326;
        b.v.fight8_final_boss = 1325;
        b.v.fight9_master_skills = 1324;
        b.v.fight10_black_warrior = 1357;
        b.v.fight11_ronin = 1356;
        b.v.fight12_deadly_smoke = 1355;
        b.v.fight13_old_sensei = 1354;
        b.v.fight14_ship_battle = 1353;
        b.v.fight15_shadow_lady = 1352;
        b.v.fight16_the_battlefield_flowers = 1351;
        b.v.fight17_cave = 1350;
        b.v.fight18_fuji = 1349;
        b.v.fight19_volcano = 1348;
        b.v.fight21_lesson_in_the_dark_room = 1346;
        b.v.fight22_heavenly_clouds = 1345;
        b.v.fight23_burning_town = 1344;
        b.v.fight24_ruins_village = 1343;
        b.v.fight25_hive = 1342;
        b.v.fight27_factory = 1341;
        b.v.fight28_flying_rocks = 1340;
        b.v.fight30_gates_of_shadows = 1338;
        b.v.fight31_graveyard_ships = 1337;
        b.v.fight32_starship = 1336;
        b.v.fight33_stone_forest = 1335;
        b.v.fight34_halls_of_the_dead_heroes = 1334;
        b.v.fight36_stardocks = 1333;
        b.v.fight37_Titan_Epic_Fight = 1332;
        b.v.fight38_sakura_forest = 1331;
        ua.VGa = b;
      }
      return ua.VGa.v[a];
    }
  }
  ua.g = "29A";
  Object.assign(ua.prototype, { j: ua });
  class db {
    static US(a, b) {
      b == null && (b = !0);
      a == null && (a = "menu");
      db.xJ || ((db.xJ = !0), ua.Zt(a, b));
    }
    static op() {
      return ua.fE;
    }
    static aU(a) {
      ua.aU(a);
      p.YJ.save();
    }
    static Pz() {
      return ua.gE;
    }
    static bU(a) {
      a != ua.gE && (ua.bU(a), p.YJ.save());
    }
    static VMa(a) {
      L.J.bg.YA(a);
    }
  }
  db.g = "29B";
  class sb {
    static WS() {
      ua.bk("snd_upgrade");
    }
    static d4() {
      ua.bk("snd_buy");
    }
    static slb() {
      ua.bk("snd_learn");
    }
    static rlb() {
      ua.bk("snd_gong");
    }
    static xm() {
      var a;
      a == null && (a = 1);
      ua.bk("snd_click_1", null, a);
    }
    static xJa() {
      var a;
      a == null && (a = 1);
      ua.bk("snd_click_2", null, a);
    }
    static VS() {
      var a;
      a == null && (a = 1);
      ua.bk("snd_focus_1", null, a);
    }
  }
  sb.g = "29C";
  class ge {
    static parse(a) {
      $f(a.A("ButtonWidth"), 242, 342);
      $f(a.A("HintWidth"), 242, 342);
      u.I(a.A("DefaultButtonCenterWidth").attributes.get("Value"));
      a.A("HintTimeout").attributes.get("Value");
      ge.qba = u.I(a.A("ArrowFlashingFrames").attributes.get("Value"), 120);
      a.A("ShowMenuTime").attributes.get("Value");
      ge.nHa = u.H(
        a.A("NotificationDlgDefaultReadTime").attributes.get("Value"),
      );
      a = a.A("CurrencyCounterRollTime");
      if (a != null) {
        X.clear(ge.eya);
        a = a.children;
        let b = 0;
        for (; b < a.length; ) {
          let c = a[b++];
          c.name == "DefaultRollTime"
            ? u.I(c.attributes.get("Value"), 120)
            : ge.eya.set(
                u.I(c.attributes.get("Gems")),
                u.I(c.attributes.get("Value")),
              );
        }
      }
    }
  }
  ge.g = "29D";
  class Kj {
    static parse(a) {
      Ob.parse(a.A("PerkIcons"));
      Kj.uha = u.H(a.A("LifeBarMin").attributes.get("Value"));
    }
  }
  Kj.g = "29E";
  class Je {
    static parse(a) {
      let b = a.A("Shake");
      Je.S5 = new Aw();
      Je.S5.time = kc(b.attributes.get("Time"));
      let c = new H(
        kc(b.attributes.get("PosInfluenceX")),
        kc(b.attributes.get("PosInfluenceY")),
        0,
        1,
      );
      Je.S5.Alb = c;
      Je.S5.Reb = kc(b.attributes.get("Magnitude"));
      Je.S5.epb = kc(b.attributes.get("Roughness"));
      a = a.A("PrizeEffect");
      Je.wja = new Bw();
      Je.wja.iqb = kc(a.attributes.get("ScaleTo"));
      Je.wja.hqb = kc(a.attributes.get("ScaleTime"));
      Je.wja.l4a = kc(a.attributes.get("FadeOutTime"));
    }
  }
  Je.g = "29F";
  class Aw {
    constructor() {
      this.Reb = this.epb = 0;
      this.Alb = new H(0, 0, 0, 1);
      this.time = 0;
    }
  }
  Aw.g = "2A0";
  Object.assign(Aw.prototype, { j: Aw });
  class Bw {
    constructor() {
      this.iqb = this.hqb = this.l4a = 0;
    }
  }
  Bw.g = "2A1";
  Object.assign(Bw.prototype, { j: Bw });
  class Cw {
    constructor() {
      this.Mza = this.transitionDuration = this.Tya = 0;
    }
  }
  Cw.g = "2A2";
  Object.assign(Cw.prototype, { j: Cw });
  class Dw {
    constructor() {
      this.Uib = this.Tib = 0;
    }
  }
  Dw.g = "2A3";
  Object.assign(Dw.prototype, { j: Dw });
  class Ew {
    constructor() {
      this.YY = null;
      this.HGa = this.O_ = this.j_ = 0;
    }
  }
  Ew.g = "2A4";
  Object.assign(Ew.prototype, { j: Ew });
  class Nb {
    static parse(a) {
      if (a != null) {
        var b = a.A("RewardLine"),
          c = b.A("OscillationPeriod").attributes.get("Value");
        Nb.$Ka.Uib = u.H(c);
        b = b.A("OscillationFactor").attributes.get("Value");
        Nb.$Ka.Tib = u.H(b);
        b = a.A("Challenge");
        c = b.A("FadeDelay").attributes.get("Value");
        Nb.challenge.Mza = u.H(c);
        c = b.A("TransitionDuration").attributes.get("Value");
        Nb.challenge.transitionDuration = u.H(c);
        b = b.A("DifficultyIsFirstFrame").attributes.get("Value");
        Nb.challenge.Tya = u.I(b);
        a = a.A("ZoneSwitch");
        b = a.A("MinOpacity").attributes.get("Value");
        Nb.Im.HGa = u.I(b);
        b = a.A("FadeSpeed").attributes.get("Value");
        Nb.Im.O_ = u.I(b);
        b = a.A("DelayBeforeFade").attributes.get("Value");
        Nb.Im.j_ = u.I(b);
        Nb.Im.YY = m.l();
        a = a.A("BattleTypes").children;
        for (b = 0; b < a.length; )
          ((c = a[b++].attributes.get("Name")),
            Nb.Im.YY.push(c != null ? c : ""));
      }
    }
  }
  Nb.g = "2A5";
  class Ob {
    static parse(a) {
      Ob.Nza = jy(a.A("FadeFrames"));
      Ob.VJa = jy(a.A("PulseAccel"));
      Ob.v4 = jy(a.A("PulseFrames"));
      Ob.spacing = new H(0, 0, 0, 1);
      Ob.spacing.x = u.H(a.A("Spacing").attributes.get("X"));
      Ob.spacing.y = u.H(a.A("Spacing").attributes.get("Y"));
      Ob.WJa = u.H(a.A("PulseAmp").attributes.get("Value"));
      a.A("RowCapacity").attributes.get("Value");
      Ob.YI = u.H(a.A("ExpirationOpacity").attributes.get("Value"));
      Ob.PNa = u.H(a.A("StackShiftX").attributes.get("Value"));
      Ob.QNa = u.H(a.A("StackShiftY").attributes.get("Value"));
      a.A("FontScale").attributes.get("Value");
    }
  }
  Ob.g = "2A6";
  class mp {
    constructor(a, b) {
      b == null && (b = 0);
      a == null && (a = 0);
      this.min = a;
      this.max = b;
    }
    parse(a, b, c) {
      c == null && (c = 0);
      b == null && (b = 0);
      a = of(a, b, c);
      this.min = a.first;
      this.max = a.second;
    }
  }
  mp.g = "2A7";
  Object.assign(mp.prototype, { j: mp });
  class zc {
    static parse(a) {
      zc.Eva = u.I(a.A("AnimationSpeed").attributes.get("Value"), 1);
      zc.XE.parse(a.A("PerkOpacity"), 1, 1);
      zc.Jka.parse(a.A("SelectOpacity"), 1, 1);
      zc.KNa = u.H(a.A("SpeedScrollAchievements").attributes.get("Value")) / 60;
    }
  }
  zc.g = "2A8";
  class xu {
    constructor(a) {
      this.GB = this.IX = this.Bta = this.$M = 0;
      this.isa = new H(0, 0, 0, 1);
      this.hsa = new H(0, 0, 0, 1);
      this.initialize(a);
    }
    initialize(a) {
      this.GB = 1 / a;
      this.IX = -this.GB / a;
      this.Bta = -this.IX - this.IX;
      this.$M = a;
      this.GB += this.GB;
    }
    curve(a, b, c, d, e) {
      let f = this.IX;
      if (e.length != d) {
        m.resize(e, d, function () {
          return new H(0, 0, 0, 1);
        });
        for (var g = 0; g < d; ) {
          var h = g++;
          if (e[h] == null) {
            e[h] = new H(0, 0, 0, 1);
            debugger;
          }
        }
      }
      d = 1;
      h = g = 0;
      let k = e.length,
        l = 0;
      for (; l < k; ) {
        let n = e[l++];
        f += this.Bta;
        d -= this.GB - f;
        g += this.GB - f - f;
        h += f;
        n.x = d * a.x + g * b.x + h * c.x;
        n.y = d * a.y + g * b.y + h * c.y;
        n.z = d * a.z + g * b.z + h * c.z;
      }
    }
    z6a(a, b, c, d) {
      let e = this.hsa;
      e.x = a.x + (b.x - a.x) * 0.5;
      e.y = a.y + (b.y - a.y) * 0.5;
      e.z = a.z + (b.z - a.z) * 0.5;
      a = this.isa;
      a.x = b.x + (c.x - b.x) * 0.5;
      a.y = b.y + (c.y - b.y) * 0.5;
      a.z = b.z + (c.z - b.z) * 0.5;
      this.curve(this.hsa, b, this.isa, this.$M, d);
    }
  }
  xu.g = "2A9";
  Object.assign(xu.prototype, { j: xu });
  class Fw {
    constructor() {
      this.NFa = this.shift = this.GFa = this.aLa = 0;
      this.nr = m.l();
    }
  }
  Fw.g = "2AA";
  Object.assign(Fw.prototype, { j: Fw });
  class Ov {
    constructor() {
      this.ek = this.min = 0;
      this.type = "Linear";
      this.name = null;
      this.oha = m.l();
      this.uba = m.l();
    }
    z7a(a) {
      return m.find(this.oha, function (b) {
        return b.nr.includes(a);
      });
    }
    A7a() {
      return m.find(this.oha, function (a) {
        return a.nr.length == 0;
      });
    }
    B5a(a) {
      return m.find(this.uba, function (b) {
        return b.nr.includes(a);
      });
    }
    C5a() {
      return m.find(this.uba, function (a) {
        return a.nr.length == 0;
      });
    }
    yBa(a, b) {
      if (a != null) {
        a = a.children;
        let d = 0;
        for (; d < a.length; ) {
          let e = a[d++],
            f = new Fw();
          f.GFa = u.I(e.attributes.get("LeftLimit"), -1);
          f.aLa = u.I(e.attributes.get("RightLimit"), -1);
          if (e.attributes.get("Level") != null) {
            var c = e.attributes.get("Level");
            c = c != null ? c : null;
            if (c != null && c != "") {
              c = c.split("|");
              let g = 0;
              for (; g < c.length; ) {
                let h = K.parseInt(c[g++]);
                h != null && f.nr.push(h);
              }
            }
          }
          f.NFa = u.H(e.attributes.get("LevelMultiplier"), -1);
          f.shift = u.I(e.attributes.get("Shift"), -1);
          b.push(f);
        }
      }
    }
  }
  Ov.g = "2AB";
  Object.assign(Ov.prototype, { j: Ov });
  class im {
    constructor() {
      this.mJa = this.oz = this.Ava = this.Bva = this.nAa = this.oAa = 0;
      this.type = null;
    }
    parse(a) {
      let b = a.attributes.get("Type");
      this.type = b != null ? b : "";
      this.mJa = u.I(a.attributes.get("PauseTime"));
      this.oz = u.I(a.attributes.get("EffectTime"));
      this.Ava = u.H(a.attributes.get("AmplitudeX"));
      this.Bva = u.H(a.attributes.get("AmplitudeY"));
      this.nAa = u.H(a.attributes.get("FrequencyX"));
      this.oAa = u.H(a.attributes.get("FrequencyY"));
    }
  }
  im.g = "2AC";
  Object.assign(im.prototype, { j: im });
  class gw {
    constructor() {
      this.min = this.max = 0;
      this.animation = null;
    }
  }
  gw.g = "2AD";
  Object.assign(gw.prototype, { j: gw });
  class kw {
    constructor() {
      this.screen = this.type = this.pE = null;
    }
  }
  kw.g = "2AE";
  Object.assign(kw.prototype, { j: kw });
  class nw {
    constructor() {
      this.iOa = 0;
      this.name = this.oma = this.awa = "";
    }
  }
  nw.g = "2AF";
  Object.assign(nw.prototype, { j: nw });
  class Gw {
    constructor() {
      this.MGa = m.l();
      this.$O = m.l();
      this.actions = m.l();
      this.sY = m.l();
      this.Xt = null;
    }
    hDa() {
      return this.Xt != null && this.Xt.nb != null && this.Xt.nb.r6 != null
        ? this.Xt.nb.r6.parameters.qb
        : !1;
    }
    ia() {
      let a = 0,
        b;
      for (; a < this.actions.length; ) {
        b = this.actions.length;
        let c = this.actions[a];
        this.Vnb(c);
        c.Xf > 0 && ((c.Nv >= c.Xf || c.ww) && this.$Na(c), (c.Nv += 1));
        b == this.actions.length && ++a;
      }
    }
    Vnb(a) {
      a.action.type == 12 && this.dob(a);
    }
    Sh() {
      this.sY.length > 0 && (this.rF(this.sY), (this.sY.length = 0));
    }
    YFa(a, b) {
      if (Ld.ZFa.Oa.all) {
        var c = new Fb();
        c.M += "PERK ----- ";
        c.M += b ? "ModStart " : "ModDestruction ";
        c.M +=
          "PerkName: " +
          c.M +
          " ModName: " +
          a.action.EA.Wa.name +
          " ModXML: " +
          a.action.d3;
      }
    }
    rF(a) {
      let b = 0;
      for (; b < a.length; ) {
        let d = a[b];
        ++b;
        let e = d.action.qm ? new np(d) : d;
        switch (d.action.type) {
          case 1:
            this.qLa(e, !1);
            break;
          case 3:
            this.jLa(e, !1);
            break;
          case 4:
            this.qpb(e);
            break;
          case 6:
            this.tpb(e);
            break;
          case 7:
            this.mpb(e);
            break;
          case 8:
            this.npb(e);
            break;
          case 9:
            this.Lpb(e);
            break;
          case 10:
            this.zpb(e);
            break;
          case 11:
            this.ypb(e);
            break;
          case 13:
            this.Fpb(e);
            break;
          case 14:
            this.wpb(e);
            break;
          case 15:
            this.rLa(e, !1);
            break;
          case 16:
            this.Mpb(e);
            break;
          case 17:
            this.oka(e);
            break;
          case 18:
            this.Npb(e);
            break;
          case 19:
            this.Jpb(e);
            break;
          case 20:
            this.mLa(e, !1);
            break;
          case 21:
            this.lLa(e, !1);
            break;
          case 22:
            this.kLa(e, !1);
            break;
          case 25:
            this.Kpb(e);
            break;
          case 26:
            this.Ppb(e);
            break;
          case 27:
            this.pLa(e, !1);
            break;
          case 28:
            this.vLa(e, !1);
            break;
          case 29:
            this.nLa(e, !1);
            break;
          case 30:
            var c = d;
            c != null && c.S(e, !1);
            break;
          case 31:
            ((c = e), c != null && c.S(e));
        }
        d.action.qm &&
          (this.actions.push(e),
          this.$O.push(e.action.name),
          e.action.Jd != "" && bc.vWa(e));
        this.YFa(d, !0);
      }
      a.length = 0;
      this.wP();
    }
    qLa(a, b) {
      let c = a.action;
      a.image = c.image != "" ? c.image : this.Xt.nb.image;
      a.ox = c.ox;
      a.yz = c.yz;
      a.model.nka(a, b);
    }
    jLa(a, b) {
      let c = b ? -1 : 1,
        d = a.action.gP.entries(),
        e = d.next();
      for (; !e.done; ) {
        var f = e.value;
        e = d.next();
        let h = f[0];
        var g = f[1].Wb();
        f = new ud();
        f.set(h, g.Zn());
        g = new ja(0);
        f.get(h, g);
        f = new ja(0);
        a.model.parameters.attributes.get(h, f, !1, !0);
        a.model.parameters.attributes.set(h, f.G + g.G * c, !0);
        h == "DamageFactor" && !b && this.hDa() && a.sk.Cb.gva(this.Xt.nb.id);
      }
    }
    mLa(a, b) {
      debugger;
      var c = a.action;
      let d = c.a3,
        e = c.b3;
      c = c.c3;
      b ? a.model.Cob() : a.model.mMa(d, e, c);
    }
    lLa(a, b) {
      debugger;
      let c = a.action.Tz;
      b ? a.model.Bob() : (a.model.Tz = c);
    }
    kLa(a, b) {
      debugger;
      let c = kc(a.action.Qy.Wb().result);
      b
        ? a.model.tob()
        : ((a.model.Qy = c), this.hDa() && a.sk.Cb.gva(this.Xt.nb.id));
    }
    rLa(a, b) {
      let c = ca.Ka();
      c != null && c.Dpb(a.model, b);
    }
    tpb(a) {
      let b = a.action;
      b.Yz != "" ? a.model.nT(fe.N0(b.Yz)) : b.rw != "" && a.model.O4(b.rw);
    }
    wpb(a) {
      debugger;
      let b = ca.Ka();
      if (b != null) {
        let c = a.sk.Cb;
        b.gM(a.model, a.action.b_ * c.aj * (a.model.jb.wo / c.model.wo));
      }
    }
    Lpb(a) {
      var b = a.action;
      a = a.sk.Cb;
      b.se > -1 && (a.se = b.se > 0);
      b.Ub > -1 && (a.Ub = b.Ub > 0);
      b.$i > -1 && (a.$i = b.$i > 0);
      b.block > -1 && (a.block = b.block > 0);
      b.Xb != null && ((b = b.Xb.Wb()), (a.gR = b.uu()), (a.aj = b.uu()));
    }
    Mpb(a) {
      a.model.RZa(a.action.RL);
    }
    mpb(a) {
      debugger;
      let b = a.action,
        c = b.value.Wb().Zn();
      b.jZ == "MagicBullet" && (a.model.oZ(c), a.model.PA());
    }
    npb(a) {
      debugger;
      let b = a.action.value.Wb().uu();
      a.model.Vwa(b);
      a.model.PA();
    }
    zpb(a) {
      a = a.action;
      a.dK.Wb();
      let b = a.dK.Wb().Zn();
      for (var c = 0, d = this.actions; c < d.length; ) {
        var e = d[c];
        ++c;
        a.si == e.action.name && ((e.Xf = b), (e.Nv = 0));
      }
      if (a.Jd != null && a.Jd != "")
        for (c = 0, d = bc.wAa(a.Jd); c < d.length; )
          ((e = d[c]), ++c, a.si == e.action.name && ((e.Xf = b), (e.Nv = 0)));
    }
    ypb(a) {
      var b = a.action,
        c = b.Jd;
      if (c != null && c != "")
        ((b = bc.r5a(b.si, c)), b != null && b.model.d5(b, a));
      else {
        c = 0;
        let d = this.actions;
        for (; c < d.length; ) {
          let e = d[c];
          ++c;
          b.si == e.action.name && e.model.d5(e, a);
        }
      }
    }
    Fpb(a) {
      let b = ca.Ka();
      if (b != null) {
        var c = a.action,
          d = c.EA.Wa,
          e = b.tb.s0(a.model, d);
        let f = null;
        e != null && (f = e.$O);
        e = m.l();
        let g = 0;
        for (d = d.Fm; g < d.length; ) {
          let h = d[g];
          ++g;
          h.name == c.YL && h.Oxa(a.model, f) && e.push(h);
        }
        for (c = 0; c < e.length; ) b.tb.kpb(a.model, e[c++]);
      }
    }
    Ppb(a) {
      debugger;
      let b = ca.Ka();
      if (b != null) {
        var c = a.action;
        a = b.tb.s0(a.model, c.EA.Wa);
        c = c.s5a();
        c != null && c.length != 0 && a.rF(c);
      }
    }
    pLa(a, b) {
      debugger;
      a.action.cp(a, b);
    }
    vLa(a, b) {
      debugger;
      a.action.fwb(a, b);
    }
    nLa(a, b) {
      a.action.Vs(a, b);
      debugger;
    }
    qpb(a) {
      a = a.action;
      for (var b = 0, c = this.actions; b < c.length; ) {
        var d = c[b];
        ++b;
        if (a.qA == "" || a.qA == d.action.name) d.ww = !0;
      }
      if (a.Jd != null && a.Jd != "" && ((b = bc.wAa(a.Jd)), b != null))
        for (c = 0; c < b.length; )
          if (
            ((d = b[c]),
            ++c,
            a.qA == null || a.qA == "" || a.qA == d.action.name)
          )
            d.ww = !0;
    }
    Kpb(a) {
      debugger;
      let b = ca.Ka();
      b != null && ((a = a.action), b.irb(a.color, a.lAa, a.show));
    }
    dob(a) {
      let b = ca.Ka();
      b != null && b.gM(a.model, a.action.X3);
    }
    $Na(a) {
      a.Xf = 0;
      a.action.frames != null && (a.Xf = a.action.frames.Wb().Zn());
      switch (a.action.type) {
        case 1:
          this.qLa(a, !0);
          break;
        case 3:
          this.jLa(a, !0);
          break;
        case 15:
          this.rLa(a, !0);
          break;
        case 20:
          this.mLa(a, !0);
          break;
        case 21:
          this.lLa(a, !0);
          break;
        case 22:
          this.kLa(a, !0);
          break;
        case 27:
          this.pLa(a, !0);
          break;
        case 28:
          this.vLa(a, !0);
          break;
        case 29:
          this.nLa(a, !0);
          break;
        case 30:
          a.action.S(a, !0);
      }
      this.YFa(a, !1);
      var b = a.action.qm;
      let c = a.action.name,
        d = a.model;
      this.b0a(a);
      if (b && ((b = ca.Ka()), b != null)) {
        let f = a.action;
        var e = f.Jd;
        e != null && e != "" && bc.hnb(a);
        e = new Ia();
        X.wh(b.tb.pg, "ModExpires", e) && this.MGa.push(e.G);
        $k.aba(b.tb.pg, "ModExpires", c);
        $k.aba(b.tb.pg, "Namespace", f.Jd);
        $k.aba(b.tb.pg, "ParentPerk", f.Wa);
        b.tb.Hj(d, 14, !0);
        b.tb.$Wa(a);
      }
    }
    b0a(a) {
      let b = 0,
        c = this.actions;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (a == d) {
          J.remove(this.actions, d);
          J.remove(this.$O, d.action.name);
          break;
        }
      }
    }
    oka(a) {
      var b = a.action;
      let c = b.name;
      b = b.value.Wb();
      a.model.Fc.Z3.set(c, b.result);
    }
    Npb(a) {
      var b = a.action;
      let c = b.name,
        d = b.value.Wb().uu();
      if (b.w1) {
        let e = b.minValue.Wb().uu();
        d < e && (d = e);
      }
      b.v1 && ((b = b.maxValue.Wb().uu()), d > b && (d = b));
      a.model.Fc.Z3.set(c, d == null ? "null" : "" + d);
    }
    Jpb(a) {
      var b = a.action;
      let c = b.IZ;
      b = ta.MQ(0, b.Fv);
      a.model.LKa(b);
      a.model.k5(b, c);
    }
    wP(a) {
      a == null && (a = !1);
      if (this.actions.length > 0) {
        let b = 0,
          c;
        for (; b < this.actions.length; ) {
          c = this.actions.length;
          let d = this.actions[b];
          (a || d.ww) && this.$Na(d);
          c == this.actions.length && ++b;
        }
      }
    }
    r0a() {
      this.MGa.length = 0;
      let a = ca.Ka();
      a != null && a.tb.pg.set("ModExpires", null);
    }
  }
  Gw.g = "2B0";
  Object.assign(Gw.prototype, { j: Gw });
  class Hw {
    constructor() {
      this.xQ = new Qa();
      this.yQ = new Qa();
      this.Mga = this.Lga = !0;
      this.min = this.max = 0;
    }
    parse(a, b, c) {
      let d = a.attributes.get("Min");
      d != null &&
        d != "" &&
        (this.yQ.parse(d != null ? d : ""), (this.Mga = !1));
      a = a.attributes.get("Max");
      a != null &&
        a != "" &&
        (this.xQ.parse(a != null ? a : ""), (this.Lga = !1));
      this.yQ.Yy = w(c, c.Ye);
      this.yQ.Us = w(c, c.Ze);
      this.yQ.target = b;
      this.xQ.Yy = w(c, c.Ye);
      this.xQ.Us = w(c, c.Ze);
      this.xQ.target = b;
    }
    Wb() {
      let a = this.yQ.Wb(),
        b = this.xQ.Wb();
      this.min = kc(a.result);
      this.max = kc(b.result);
    }
  }
  Hw.g = "2B1";
  Object.assign(Hw.prototype, { j: Hw });
