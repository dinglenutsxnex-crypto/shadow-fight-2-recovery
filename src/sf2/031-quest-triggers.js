// 031-quest-triggers.js
// Domain: animation  |  28 class(es)  |  tree root(s): tu, su, ru, Si, vu, yd, qu, pu, ou, nu, mu, lu, ku, fd, Gl, yu, Yc, Hl, Eu, Du, Cu, Bu, El, uu, Fu, Fl, wd, de
// Edit here. Run `npm run build` to reassemble the full bundle.
  class tu {
    constructor() {
      this.td = new Map();
    }
    push(a, b) {
      X.Xa(this.td, a) || this.td.set(a, m.l());
      b.go.setActive(!1);
      this.td.get(a).push(b);
    }
    pull(a) {
      var b = null;
      X.Xa(this.td, a) &&
        (this.td.get(a).length > 0
          ? ((b = this.td.get(a)), (b = b[b.length - 1]))
          : (b = null),
        b != null && J.remove(this.td.get(a), b));
      b != null && b.go.setActive(!0);
      return b;
    }
    b3a() {
      let a = this.td.values(),
        b = a.next();
      for (; !b.done; ) {
        let c = b.value;
        b = a.next();
        let d = 0,
          e = c;
        for (; d < e.length; ) e[d++].EKa(!0);
        c.length = 0;
      }
      X.clear(this.td);
    }
  }
  tu.g = "C7";
  Object.assign(tu.prototype, { j: tu });
  class su {
    constructor() {
      this.f4a = m.l();
      this.Tla = m.l();
      this.xz = m.l();
      this.nQ = m.l();
      this.uz = m.l();
      this.rQ = m.l();
      this.oQ = m.l();
      this.vz = m.l();
      this.wz = m.l();
      this.rz = m.l();
      this.sz = m.l();
      this.K_ = m.l();
      this.pQ = m.l();
      this.qQ = m.l();
      this.J1 = m.l();
    }
    MKa() {
      this.J1.length = 0;
      this.qQ.length = 0;
      this.pQ.length = 0;
      this.sz.length = 0;
      this.rz.length = 0;
      this.wz.length = 0;
      this.vz.length = 0;
      this.oQ.length = 0;
      this.rQ.length = 0;
      this.uz.length = 0;
      this.nQ.length = 0;
      this.xz.length = 0;
      this.Tla.length = 0;
      this.f4a.length = 0;
    }
    LT(a) {
      let b = 0,
        c = a.length;
      for (; b < c; ) {
        let d = a[b++];
        d.va.LF.nh && this.Tla.push(d);
        let e = d.va.Hc,
          f = 0,
          g = e.length;
        for (; f < g; ) {
          let h = this.nea(e[f++].type),
            k = h.length;
          (k != 0 && h[k - 1] == d) || h.push(d);
        }
        this.J1.push(d);
      }
    }
    Bnb(a) {
      let b = 0;
      for (; b < a.length; ) {
        let c = a[b];
        ++b;
        c.va.LF.nh && J.remove(this.Tla, c);
        let d = 0,
          e = c.va.Hc;
        for (; d < e.length; ) J.remove(this.nea(e[d++].type), c);
        J.remove(this.J1, c);
      }
    }
    nea(a) {
      switch (a) {
        case 1:
          return this.qQ;
        case 2:
          return this.pQ;
        case 3:
          return this.K_;
        case 6:
          return this.oQ;
        case 7:
          return this.rQ;
        case 9:
          return this.sz;
        case 10:
          return this.rz;
        case 12:
          return this.wz;
        case 13:
          return this.vz;
        case 14:
          return this.uz;
        case 15:
          return this.nQ;
        case 16:
          return this.xz;
        default:
          return this.J1;
      }
    }
  }
  su.g = "C8";
  Object.assign(su.prototype, { j: su });
  class ru {
    constructor() {
      this.xz = m.l();
      this.nQ = m.l();
      this.uz = m.l();
      this.rQ = m.l();
      this.oQ = m.l();
      this.vz = m.l();
      this.wz = m.l();
      this.mQ = m.l();
      this.rz = m.l();
      this.sz = m.l();
      this.K_ = m.l();
      this.pQ = m.l();
      this.qQ = m.l();
      this.Fm = m.l();
    }
    Rob() {
      this.Fm.length = 0;
      this.qQ.length = 0;
      this.pQ.length = 0;
      this.K_.length = 0;
      this.sz.length = 0;
      this.rz.length = 0;
      this.mQ.length = 0;
      this.wz.length = 0;
      this.vz.length = 0;
      this.oQ.length = 0;
      this.rQ.length = 0;
      this.uz.length = 0;
      this.nQ.length = 0;
      this.xz.length = 0;
    }
    C5(a) {
      let b = 0;
      for (; b < a.length; ) {
        let c = a[b];
        ++b;
        let d = 0,
          e = c.Cl.Hc;
        for (; d < e.length; ) {
          let f = this.Cfa(e[d++].type);
          (f.length != 0 && f.includes(c)) || f.push(c);
        }
        this.Fm.push(c);
      }
    }
    Snb(a) {
      let b = 0;
      for (; b < a.length; ) {
        let c = a[b];
        ++b;
        let d = 0,
          e = c.Cl.Hc;
        for (; d < e.length; ) J.remove(this.Cfa(e[d++].type), c);
        J.remove(this.Fm, c);
      }
    }
    Cfa(a) {
      switch (a) {
        case 1:
          return this.qQ;
        case 2:
          return this.pQ;
        case 3:
          return this.K_;
        case 6:
          return this.oQ;
        case 7:
          return this.rQ;
        case 9:
          return this.sz;
        case 10:
          return this.rz;
        case 11:
          return this.mQ;
        case 12:
          return this.wz;
        case 13:
          return this.vz;
        case 14:
          return this.uz;
        case 15:
          return this.nQ;
        case 16:
          return this.xz;
        default:
          return this.Fm;
      }
    }
  }
  ru.g = "C9";
  Object.assign(ru.prototype, { j: ru });
  class Si {
    constructor() {
      this.model = this.Pd = this.data = this.YC = null;
    }
    clear() {
      this.data = this.Pd = this.model = null;
    }
  }
  Si.g = "CA";
  Object.assign(Si.prototype, { j: Si });
  class vu {
    constructor(a, b) {
      this.model = a;
      this.Oa = b;
    }
  }
  vu.g = "CB";
  Object.assign(vu.prototype, { j: vu });
  class yd {
    constructor(a, b, c, d) {
      d == null && (d = -1);
      c == null && (c = -1);
      this.owa = a;
      this.value = b;
      this.frames = c;
      this.twa = d;
      this.Jt = -1;
    }
  }
  yd.g = "CC";
  Object.assign(yd.prototype, { j: yd });
  class qu {
    constructor() {
      this.K0a = 0;
      this.RJa = m.l();
      this.model = this.Pd = null;
      this.hp =
        this.$q =
        this.block =
        this.se =
        this.Ub =
        this.$i =
        this.Wza =
          !1;
      this.target = 0;
      this.QP = "";
      this.bEa = this.aj = this.gR = 0;
      this.QD = this.Uy = this.gI = this.Uva = null;
      this.ig = new H(0, 0, 0, 1);
      this.ck = this.CJa = null;
    }
    gva(a) {
      m.cd(this.RJa, a);
    }
  }
  qu.g = "CD";
  Object.assign(qu.prototype, { j: qu });
  class pu {
    constructor() {
      this.iha = !1;
      this.animation = this.names = null;
    }
  }
  pu.g = "CE";
  Object.assign(pu.prototype, { j: pu });
  class ou {
    constructor() {
      this.left = this.right = 0;
    }
  }
  ou.g = "CF";
  Object.assign(ou.prototype, { j: ou });
  class nu {
    constructor() {
      this.Sca = !1;
      this.time = 0;
      this.ck = this.ig = null;
    }
  }
  nu.g = "D0";
  Object.assign(nu.prototype, { j: nu });
  class mu {
    constructor() {
      this.uD = -1;
      this.bE = !1;
      this.sign = this.count = 0;
      this.animation = null;
    }
    clear() {
      this.animation = null;
      this.count = this.sign = 0;
      this.bE = !1;
      this.uD = -1;
    }
  }
  mu.g = "D1";
  Object.assign(mu.prototype, { j: mu });
  class lu {
    constructor() {
      this.animation = null;
    }
    clear() {
      this.animation = null;
    }
  }
  lu.g = "D2";
  Object.assign(lu.prototype, { j: lu });
  class ku {
    constructor() {
      this.kOa = 500;
      this.vU = 1;
      this.vFa = this.nu = 0;
      this.IR = 1;
      this.Nlb = this.hA = 0;
      this.gT = 1;
      this.KGa = this.NA = 0;
      this.YR = 1;
      this.Peb = this.pA = 0;
      this.uU = !0;
      this.XR = this.w4 = this.t2 = !1;
    }
  }
  ku.g = "D3";
  Object.assign(ku.prototype, { j: ku });
  class Te extends fd {
    constructor(a) {
      super();
      this.model = a;
      this.O3 = this.jQ = null;
      this.jW = -3;
      this.rq = 0;
      this.Qe = !1;
      this.MX = 1;
      this.ts = 0;
      this.currentNode = null;
      this.Zh = this.lG = this.Mj = this.Sq = 0;
      this.jX = 2147483647;
      this.Iaa = this.cua = 0;
      this.$da = this.Ua = null;
      this.xw = !1;
      this.Fva = null;
      this.vta = this.Vra = 0;
      this.BN = !1;
      this.dW = null;
      this.X_ = 0;
      this.cra = this.VG = !1;
      this.xW = a.model.lb != null;
      this.yG = 1;
      this.Sla = 0;
      this.Xqa = this.X9 = !1;
      this.V2 = this.Tha = 0;
      this.Mra = !1;
      this.Hk = new H(0, 0, 0, 1);
      this.u8 = new H(0, 0, 0, 1);
      this.JM = new H(0, 0, 0, 1);
      this.gV = new H(0, 0, 0, 1);
      this.Eu = this.Du = 0;
      this.jc = new wu();
      this.lq = m.l();
      this.Yx = this.po = 0;
      this.yj = m.l();
      this.tra = m.l();
      this.NY = m.l();
      this.Epa = new xu(0);
      this.Jo = new H(0, 0, 0, 1);
      this.stop();
    }
    jd() {
      return this.MX;
    }
    Pub(a) {
      this.MX = a < 0 ? -1 : 1;
    }
    iw() {
      return this.Qe ? this.cua : 0;
    }
    Btb(a) {
      this.Ua = a;
    }
    ia() {
      this.V2++;
      if (this.Qe) {
        this.jW != -3 ? this.jW++ : 0 == this.lG && (this.rq = 0);
        this.fvb();
        let a = this.jc.eab();
        this.isBuffer()
          ? (this.oda(),
            this.rq++,
            this.Zwa(),
            this.xW &&
              !this.isBuffer() &&
              this.Zh + 2 >= a &&
              (this.VG
                ? (this.Rka(this.Zh, this.Sq + 1), (this.Zh = this.Sq))
                : (this.aOa(), this.rS(this.Ua), this.bda())))
          : !this.xW && this.Zh + 2 >= a
            ? this.VG
              ? (this.Rka(this.Zh, this.Sq + 1),
                (this.Zh = this.Sq + 1),
                this.oda(),
                this.rq++)
              : (this.aOa(), this.rS(this.Ua), this.bda())
            : (this.Zh + 2 < a && !this.isBuffer() && this.Rka(),
              this.isBuffer() && this.oda(),
              this.rq++,
              this.lG++,
              this.Zh++,
              this.Cp());
      } else
        this.BN &&
          this.Ua != null &&
          ((this.Zh += 3), this.Cp(), (this.BN = !1));
    }
    iob() {
      this.lG++;
      this.Zh++;
      this.Cp();
    }
    aOa() {
      this.Qe = !1;
      this.stop();
    }
    bda() {
      this.Qe = !1;
      this.BN = !0;
    }
    mp() {
      return this.Ua.SS ? this.lG : this.U0();
    }
    U0() {
      return (this.Zh <= 2 ? 0 : this.Zh - 2) + this.Sq;
    }
    pJ() {
      return this.Qe ? this.rq : 0;
    }
    reset() {
      this.Qe = !1;
      this.MX = 1;
      this.ts = 0;
      this.currentNode = null;
      this.Zh = this.lG = this.Sq = 0;
      this.BN = !1;
      this.jX = 2147483647;
      this.Ua = null;
      this.stop();
    }
    e8a(a) {
      return this.model.Va.all[a];
    }
    Ge() {
      return this.Qe ? this.currentNode : null;
    }
    Ic(a, b) {
      if (a == null || a == "") return null;
      let c = this.model.Ic(a);
      if (c == null) return null;
      let d = c.TE;
      if (d == null) return c;
      a = a.charAt(a.length - 1);
      switch (b) {
        case -1:
          switch (a) {
            case "1":
              return c.ma.x < d.ma.x ? c : d;
            case "2":
              return c.ma.x < d.ma.x ? d : c;
          }
          break;
        case 1:
          switch (a) {
            case "1":
              return c.ma.x < d.ma.x ? d : c;
            case "2":
              return c.ma.x < d.ma.x ? c : d;
          }
          break;
        default:
          return c;
      }
      return null;
    }
    OLa(a, b, c, d) {
      this.Vra = c;
      this.vta = d;
      this.Du = a;
      this.Eu = b;
    }
    Rla(a, b, c) {
      c == null && (c = 0);
      b == null && (b = 0);
      this.jc.shift(a, b, c);
    }
    lfb() {
      this.MX == -1 && this.jc.ifb();
    }
    avb(a) {
      let b = 0,
        c = this.lq.length;
      for (; b < c; ) {
        let d = this.lq[b++],
          e = 0,
          f = d.length;
        for (; e < f; ) {
          let g = e++,
            h = d[g];
          h.x += a.x;
          h.y += a.y;
          h.z += a.z;
          d[g] = h;
        }
      }
    }
    nlb(a, b, c, d, e) {
      e == null && (e = -1);
      d == null && (d = !1);
      c == null && (c = !0);
      if (a != null) {
        this.Qe && this.hh("EAnimationInterruptedEvent", a);
        this.Fva = null;
        this.xW && (this.wxa(), this.fca());
        let f = a.wx;
        d ? (f = this.mp() + 1 + e) : -1 < e && (f = e);
        this.stop();
        this.Pub(b);
        this.Ua = a;
        this.Sq = f;
        this.Mj = this.Ua.Mj;
        this.VG = this.Ua.VG;
        this.Sq > this.Mj - 1 && (this.Sq = this.Mj - 1);
        if (this.Ua.Mk == null || this.Ua.Mk.length == 0) return (this.Qe = !1);
        (this.cra = c) && this.Mrb(this.Ua.fX);
        this.Ua.$ka(this.jc, f, !this.cra);
        this.hlb();
        this.hrb();
        this.kfb();
        this.cvb();
        m.resize(this.lq, a.fX, function () {
          return m.l();
        });
        this.Qe = !0;
        this.Zh = this.lG = 0;
        this.jX = 2147483647;
        this.rq = 0;
        this.po = 2147483647;
        this.jW = -3;
        this.BN = !1;
        a = this.u8;
        a.x = 0;
        a.y = 0;
        a.z = 0;
        this.Ua.Eta ||
          ((a = this.JM),
          (c = this.Ua.$fa()),
          (a.x = c.x),
          (a.y = c.y),
          (a.z = c.z),
          (this.JM.x *= b));
        a = this.gV;
        c = this.Ua.P9a();
        a.x = c.x;
        a.y = c.y;
        a.z = c.z;
        this.gV.x *= b;
        this.srb();
        this.G3(this.Ua);
        return !0;
      }
      return !1;
    }
    Nrb() {
      this.fca();
      var a = this.mp();
      this.Ua.w7a(a, this.yj, this.tra, this.dW);
      var b = 0;
      let c = this.yj;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        d.type == 4 && this.Tqb(d);
        (this.Sq <= d.start ? d.start : this.Sq) == a && this.Ohb(d);
      }
      a = 0;
      for (b = this.tra; a < b.length; ) this.KHa(b[a++]);
    }
    wxa() {
      let a = 0,
        b = this.yj;
      for (; a < b.length; ) this.KHa(b[a++]);
    }
    Ohb(a) {
      this.hh("EStartIntervalEvent", a);
    }
    KHa(a) {
      this.hh("EStopIntervalEvent", a);
    }
    G3(a) {
      this.hh("EStartAnimationEvent", a);
    }
    rS(a) {
      this.xW || (this.wxa(), this.fca());
      this.hh("EStopAnimationEvent", a);
    }
    Tqb(a) {
      let b = 0;
      for (a = a.tba; b < a.length; ) {
        var c = a[b];
        ++b;
        let d = c;
        if (this.xw && c.charAt(c.length - 2) == "_")
          switch (c.charAt(c.length - 1)) {
            case "1":
              d = nf(c, c.length - 1, 1) + "2";
              break;
            case "2":
              d = nf(c, c.length - 1, 1) + "1";
          }
        c = this.model.eBa(d);
        c != null && this.NY.push(c);
      }
    }
    fca() {
      this.NY.length = 0;
    }
    DD(a) {
      let b = 0,
        c = this.yj.length;
      for (; b < c; ) {
        let d = b++;
        if (a == this.yj[d].type) return this.yj[d];
      }
      return null;
    }
    qBa(a) {
      let b = 0,
        c = this.yj.length;
      for (; b < c; ) {
        let d = b++;
        if (this.yj[d].name == a) return this.yj[d];
      }
      return null;
    }
    nT(a) {
      let b = this.yj.length - 1;
      for (; b >= 0; ) (a == this.yj[b].type && m.ye(this.yj, b), --b);
    }
    O4(a) {
      let b = this.yj.length - 1;
      for (; b >= 0; ) (a == this.yj[b].name && m.ye(this.yj, b), --b);
    }
    Sja(a) {
      let b = 0;
      for (; b < a.length; ) this.O4(a[b++]);
    }
    k_a(a) {
      let b = 0,
        c = a.length;
      for (; b < c; ) if (this.qBa(a[b++]) != null) return !0;
      return !1;
    }
    init() {
      this.model.Ic(Z.NTa);
      this.model.Ic(Z.OTa);
    }
    vY(a) {
      this.dW == null && (this.dW = new gd());
      this.dW.add(a);
    }
    VZa(a) {
      if (this.Ua != null) {
        let b = this.Ua.va.actions;
        if (b.length > 0) {
          let c = m.l(),
            d = 0;
          for (; d < b.length; ) {
            let e = b[d];
            ++d;
            e.wfb(a, this.Ua, this.model.model) && c.push(e);
          }
          c.length > 0 && this.hh("EActionStart", c);
        }
      }
    }
    ofb(a) {
      let b = 0,
        c = this.model.Va.all;
      for (; b < c.length; ) {
        var d = c[b];
        ++b;
        d.q4();
        d = d.ma;
        d.x += a.x;
        d.y += a.y;
        d.z += a.z;
      }
    }
    srb() {
      var a = this.Ge();
      let b = this.Iaa,
        c = this.Ua.wx;
      this.X_ = (c - c) * (this.Ua.bK + 1);
      let d = 0;
      0 < this.X_ &&
        this.Ua.va.align.aF == "EObjectNodes" &&
        (this.xw
          ? ((a = a.TE), (a = a != null ? a.id : this.ts))
          : (a = this.ts),
        (d = this.Ua.Mk[c][a].x - this.Ua.Mk[c][a].x));
      this.cua = b += d * this.jd();
      this.Mra ||
        ((this.Tha = b), (this.$da = this.Ua), (this.V2 = -4), (this.Mra = !0));
    }
    stop() {
      this.jc.reset();
      this.po = 2147483647;
    }
    oda() {
      this.kbb();
      var a = this.lq.length;
      let b = 0;
      for (; b < a; ) {
        var c = b++;
        let e = this.model.Va.all[c];
        if (!this.model.vc || (this.model.vc && !e.vc)) {
          e.q4();
          var d = this.Jo;
          c = this.lq[c][this.po];
          d.x = c.x;
          d.y = c.y;
          d.z = c.z;
          d = this.Jo;
          c = this.u8;
          d.x += c.x;
          d.y += c.y;
          d.z += c.z;
          e.aB(this.Jo);
          e.Pga = !0;
        }
      }
      this.Ua.GX != 0 && this.uYa();
      a = this.lq[0].length;
      this.po == a - 1
        ? ++this.po
        : ((this.po +=
            this.Yx <= 1 ? 1 : (this.Yx / this.model.model.ND()) | 0),
          this.po > a - 1 && (this.po = a - 1));
      this.Xqa = this.po >= this.Yx;
      this.ibb();
    }
    Mrb(a) {
      if (this.Ua != null) {
        this.jc.Ybb(a);
        a = (this.Ua.bK + 1) / 2;
        for (
          var b = this.jc.Mh(0),
            c = this.jc.Mh(1),
            d = this.model.Va.all,
            e,
            f,
            g,
            h = 0,
            k = b.size;
          h < k;

        ) {
          let q = h++;
          var l = d[q].ma;
          g = d[q].rf;
          e = (l.x - g.x) * a;
          f = (l.y - g.y) * a;
          g = (l.z - g.z) * a;
          var n = b.data[q];
          n.x = l.x;
          n.y = l.y;
          n.z = l.z;
          n = b.data;
          let r = n[q];
          r.x -= e;
          r.y -= f;
          r.z -= g;
          n[q] = r;
          n = c.data[q];
          n.x = l.x;
          n.y = l.y;
          n.z = l.z;
          l = c.data;
          n = l[q];
          n.x += e;
          n.y += f;
          n.z += g;
          l[q] = n;
        }
      }
    }
    cvb() {
      var a = this.Ua.va.align,
        b = this.PBa(a.dja),
        c = this.PBa(a.l4),
        d = new H(0, 0, 0, 1),
        e = 0,
        f = 0,
        g = 0;
      c == null && (c = this);
      switch (a.aF) {
        case "EObjectAnimation":
          d.x = 0;
          d.y = 0;
          d.z = 0;
          break;
        case "EObjectNodes":
          b = b.xw && a.cja > -1 ? a.cja : a.$E;
          if (b < 0 || b >= this.jc.Mh(2).size) b = 0;
          b = this.jc.Mh(2).data[b];
          d.x = b.x;
          d.y = b.y;
          d.z = b.z;
          break;
        case "EObjectPivot":
          b = this.jc.Mh(2).data[this.ts];
          d.x = b.x;
          d.y = b.y;
          d.z = b.z;
          break;
        case "EObjectWall":
          ((d.x = 0),
            (d.y = 0),
            (d.z = 0),
            (d.x = (this.jd() == 1) == (a.HK == "Back") ? -this.Du : -this.Eu));
      }
      switch (a.OK) {
        case "EObjectAnimation":
          g = c.Hk;
          e = g.x;
          f = g.y;
          g = g.z;
          break;
        case "EObjectNodes":
          g = c.e8a(c.xw && a.mja > -1 ? a.mja : a.ZS).ma;
          e = g.x;
          f = g.y;
          g = g.z;
          break;
        case "EObjectPivot":
          c.currentNode != null &&
            ((g = c.currentNode.ma), (e = g.x), (f = g.y), (g = g.z));
          break;
        case "EObjectWall":
          ((g = f = 0),
            (e = (this.jd() == 1) == (a.nja == "Back") ? this.Du : this.Eu));
      }
      e += this.jd() * a.oja;
      f += a.pja;
      this.Iaa = e;
      c = this.Hk;
      c.x = e - d.x;
      c.y = f - d.y;
      c.z = g - d.z;
      this.Rla(
        a.iI ? this.Hk.x : a.oja,
        a.jI ? this.Hk.y : a.pja,
        a.TY ? this.Hk.z : 0,
      );
      d = a.Qla;
      if (d != null && d != "") {
        g = this.model.Ic(a.Qla);
        d = this.jc.Mh(2).data[g.id];
        f = g.ma;
        a = d.x - f.x;
        e = d.y - f.y;
        f = d.z - f.z;
        b = g.rf;
        g = d.x - b.x;
        c = d.y - b.y;
        d = d.z - b.z;
        b = 0;
        let k = this.model.Va.all;
        for (; b < k.length; ) {
          var h = k[b];
          ++b;
          let l = h.ma;
          l.x += a;
          l.y += e;
          l.z += f;
          h = h.rf;
          h.x += g;
          h.y += c;
          h.z += d;
        }
      }
    }
    gK(a, b, c) {
      debugger;
      let d, e;
      var f = this.jc.Mh(2).data[this.ts];
      d = f.x;
      e = f.y;
      f = f.z;
      this.Iaa = a.x;
      let g = this.Hk;
      g.x = a.x - d;
      g.y = a.y - e;
      g.z = a.z - f;
      this.Rla(b ? this.Hk.x : 0, c ? this.Hk.y : 0, 0);
    }
    kfb() {
      this.lfb();
      this.xw = !1;
      if (
        !this.Ua.S2.Wj &&
        (this.xw = Te.eZa(this.model, this.Ua, this.jd(), this.jc.Mh(2).data))
      ) {
        let a = this.model.SQ(this.ts);
        a > -1 &&
          ((this.ts = a), (this.currentNode = this.model.Va.all[this.ts]));
        this.Ua.jfb(this.model.Yf.l3, this.jc);
      }
    }
    isBuffer() {
      return 0 < this.lq.length ? this.po < this.lq[0].length : !1;
    }
    Rka(a, b) {
      b == null && (b = -1);
      a == null && (a = -1);
      if (-1 == a || -1 == b) ((a = this.Zh), (b = this.Zh + 1));
      this.jW = 1;
      this.Yx = this.model.model.ND();
      this.yG = 1 / this.Yx;
      a = this.jc.Mh(a).data;
      let c = this.jc.Mh(b).data;
      b = this.jc.Mh(b + 1).data;
      this.Epa.initialize((this.Ua.bK + 1) * this.Yx);
      let d = 0,
        e = this.lq.length;
      for (; d < e; ) {
        let f = d++;
        this.Epa.z6a(a[f], c[f], b[f], this.lq[f]);
      }
      this.po = 0;
    }
    vPa(a) {
      this.Yx = a;
      this.yG = 1 / this.Yx;
    }
    fvb() {
      var a = !1,
        b = 0;
      this.O3 != null && this.Ua.wva && ((b = this.O3.Sla), (a = !0));
      var c = this.Zh + 2;
      if (c > this.jc.size - 1) this.Sla = 0;
      else {
        var d = this.Vra,
          e = this.vta,
          f =
            this.jc.Mh(c).data[
              this.model.Ge() != null
                ? this.model.Ge().id
                : this.model.Va.all[0].id
            ].x;
        if (!this.Ua.mha || a) {
          if (a) f = b;
          else if (
            ((this.Sla = f =
              f < this.Du + d
                ? f - (this.Du + d)
                : f > this.Eu - e
                  ? f - (this.Eu - e)
                  : 0),
            f == 0)
          )
            return;
          a = c;
          for (c = this.jc.size < c + 2 ? this.jc.size : c + 2; a < c; )
            for (b = this.jc.Mh(a++), d = 0, e = b.size; d < e; )
              b.data[d++].x -= f;
        }
      }
    }
    Cp() {
      if (this.Ua != null) {
        let a = this.mp();
        a != this.jX && ((this.jX = a), this.Nrb(), (this.X9 = !0));
      }
      this.Zwa();
    }
    hrb() {
      let a = this.Ua.va.align.$E;
      a >= 0
        ? ((this.ts = a), (this.currentNode = this.model.Va.all[this.ts]))
        : (this.currentNode = null);
    }
    hlb() {
      this.model.QKa();
      let a = this.model.Va.all;
      var b = this.Ua.fX;
      if (a.length < b) {
        debugger;
        b = a.length;
      }
      let c = 0;
      for (; c < b; ) a[c++].uxb();
    }
    PBa(a) {
      switch (a) {
        case 0:
        case 1:
          return this;
        case 2:
          return this.jQ;
        case 3:
          return this.O3;
        default:
          return null;
      }
    }
    Zwa() {
      if (this.X9 && this.Xqa) {
        this.X9 = !1;
        var a = this.Ua.va.actions;
        if (a.length > 0) {
          let b = this.mp(),
            c = m.l(),
            d = 0;
          for (; d < a.length; ) {
            let e = a[d];
            ++d;
            e.vfb(b, this.Ua, this.model.model) && c.push(e);
          }
          c.length > 0 && this.hh("EActionStart", c);
        }
      }
    }
    kbb() {
      this.lbb(this.JM);
    }
    lbb(a) {
      var b = a.x;
      let c = a.y,
        d = a.z;
      a = b;
      let e = c;
      var f = d;
      this.yG != 1 && ((f = this.yG), (a = b * f), (e = c * f), (f *= d));
      b = this.u8;
      b.x += a;
      b.y += e;
      b.z += f;
    }
    ibb() {
      this.jbb(this.gV);
    }
    jbb(a) {
      var b = a.x;
      let c = a.y,
        d = a.z;
      a = b;
      let e = c;
      var f = d;
      this.yG != 1 && ((f = this.yG), (a = b * f), (e = c * f), (f *= d));
      b = this.JM;
      b.x += a;
      b.y += e;
      b.z += f;
    }
    uYa() {
      let a = this.model.Va.all;
      let b = this.Ua.HX.tt(this.model.model.Fc),
        c = (b.z = 0),
        d = this.lq.length;
      for (; d > 0; ) {
        let g = a[c];
        if (!this.model.vc || (this.model.vc && !g.vc)) {
          var e = g.ma;
          var f = new H(e.x, e.y, e.z, 1);
          e = this.Ua.GX;
          e *= 0.017453292519943295;
          let h = f.x - b.x;
          f = f.y - b.y;
          f = new H(
            Math.cos(e) * h - Math.sin(e) * f + b.x,
            Math.sin(e) * h + Math.cos(e) * f + b.y,
            0,
            1,
          );
          g.aB(f);
        }
        ++c;
        --d;
      }
    }
    jBa(a) {
      let b = this.jc.Mh(2);
      if (b == null || b.data.length <= a) return null;
      a = b.data[a];
      return new H(a.x, a.y, a.z, 1);
    }
    static dZa(a, b, c, d) {
      var e = !1;
      e == null && (e = !0);
      a = a.Ic(b);
      b = a != null ? a.TE : null;
      return a != null && b != null ? Te.zwa(a, b, c, d, e) : !1;
    }
    static zwa(a, b, c, d, e) {
      e == null && (e = !0);
      if (c == -1) {
        var f = a;
        a = b;
        b = f;
      }
      f = a.id;
      let g = b.id;
      if (!e && -1 == c) {
        debugger;
        c = f;
        f = g;
        g = c;
      }
      return a.ma.x >= b.ma.x != d[f].x >= d[g].x;
    }
    static eZa(a, b, c, d) {
      var e;
      e == null && (e = !0);
      a = a.Ic(b.S2.wq.key);
      b = a != null ? a.TE : null;
      return a != null && b != null ? Te.zwa(a, b, c, d, e) : !1;
    }
  }
  Te.g = "D4";
  Te.u = fd;
  Object.assign(Te.prototype, { j: Te });
  class Gl {
    constructor(a) {
      this.h9 = new H(0, 0, 0, 1);
      this.g9 = new H(0, 0, 0, 1);
      this.strike = new yu();
      this.kW = null;
      this.pa = a;
    }
    ia(a, b, c) {
      if (this.kW == c) return !1;
      if (!c.oEa)
        return (
          (this.kW = c),
          (this.strike.Uy = null),
          (this.strike.QD = null),
          (b = this.strike.x$),
          (b.x = 0),
          (b.y = 0),
          (b.z = 0),
          (b = this.strike.y$),
          (b.x = 0),
          (b.y = 0),
          (b.z = 0),
          !0
        );
      a = a.Ql.tI;
      let d = 0,
        e = b.length;
      for (; d < e; ) if (this.p2a(a, b[d++])) return ((this.kW = c), !0);
      return !1;
    }
    Dob() {
      this.kW = null;
    }
    p2a(a, b) {
      var c = this.g9;
      c.x = 0;
      c.y = 0;
      c.z = 0;
      c = this.h9;
      c.x = 0;
      c.y = 0;
      c.z = 0;
      c = b.gb;
      let d = b.ema,
        e = b.Zda,
        f = b.Oda,
        g = 0,
        h = a.length;
      for (; g < h; ) {
        let k = a[g++];
        if (k.CZ && Cz(d, e, c, k.ema, k.Zda, k.gb, this.g9, this.h9, f, k.Oda))
          return (this.RXa(b, k, this.g9, this.h9), !0);
      }
      return !1;
    }
    RXa(a, b, c, d) {
      this.strike.Uy = a;
      this.strike.QD = b;
      this.strike.yub(c);
      this.strike.zub(d);
    }
  }
  Gl.g = "D5";
  Object.assign(Gl.prototype, { j: Gl });
  class yu {
    constructor() {
      this.y$ = new H(0, 0, 0, 1);
      this.x$ = new H(0, 0, 0, 1);
      this.QD = this.Uy = null;
    }
    yub(a) {
      let b = this.x$;
      b.x = a.x;
      b.y = a.y;
      b.z = a.z;
    }
    zub(a) {
      let b = this.y$;
      b.x = a.x;
      b.y = a.y;
      b.z = a.z;
    }
  }
  yu.g = "D6";
  Object.assign(yu.prototype, { j: yu });
  class Yc {
    static Xzb(a, b) {
      let c = 0,
        d = Yc.K3a;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        if (a.indexOf(e.first) != -1) {
          b.G > e.second && (b.G = e.second);
          break;
        }
      }
    }
    static load(a, b) {
      if (b.length != 0) {
        for (var c = 0; c < b.length; ) {
          let d = b[c];
          ++c;
          if (d == "assets/models/.xml") continue;
          let e = Ja.Nh(d);
          e != null && Yc.parse(a, e, d);
        }
        a.osb();
        a.$sb();
        a.Arb(b);
        a.crb();
        a.rGa();
      }
    }
    static parse(a, b, c) {
      Yc.Wia(a, b);
      Yc.Gjb(a, b, c);
      Yc.pjb(a, b);
      Yc.Jkb(a, b);
    }
    static Wia(a, b) {
      var c = b.A("Nodes");
      if (c != null) {
        b = m.l();
        c = c.children;
        for (var d = 0; d < c.length; ) Yc.dkb(a, c[d++], b);
        a.JWa(b);
      }
    }
    static Gjb(a, b, c) {
      b = b.A("Edges");
      if (b != null) {
        b = b.children;
        for (var d = 0; d < b.length; ) {
          let e = b[d++],
            f = u.I(e.attributes.get("Iterations"), 1),
            g = e.name,
            h = 0;
          for (; h < f; ) {
            let k = h++,
              l;
            l = "" + g;
            k > 0 && (l += "CI" + (k == null ? "null" : "" + k));
            Yc.Fjb(a, e, l, c);
          }
        }
      }
    }
    static pjb(a, b) {
      b = b.A("Figures").children;
      let c = 0;
      for (; c < b.length; ) {
        let d = b[c++],
          e = d.attributes.get("Type");
        (e != null ? e : null) == "Capsule" && Yc.ojb(a, d);
      }
    }
    static Jkb(a, b) {
      b = b.A("Figures").children;
      let c = 0;
      for (; c < b.length; ) {
        let d = b[c++],
          e = d.attributes.get("Type");
        (e != null ? e : null) == "Triangle" && Yc.Ikb(a, d);
      }
    }
    static dkb(a, b, c) {
      let d = null,
        e = new H(
          u.H(b.attributes.get("X")),
          -u.H(b.attributes.get("Y")),
          u.H(b.attributes.get("Z")),
          1,
        );
      var f = b.attributes.get("Type");
      f = f != null ? f : null;
      let g = b.name,
        h = f == "CenterOfMass";
      f == "Node" || h
        ? ((d = new Vc(g, e)),
          d.ZMa(u.ka(b.attributes.get("Cloth"))),
          (d.qJa = d.WG),
          (d.hI = u.H(b.attributes.get("Attenuation"))),
          (d.Vva = d.hI),
          h && ((c.length = 0), Yc.UIa(c, b, !1)),
          a.Va.OF.push(d))
        : f == "MacroNode" &&
          ((e.x *= -1), (d = c = new Jl(g, e)), Yc.tjb(c, b), a.Va.ZJ.push(c));
      d != null &&
        (d.Ttb(e),
        (d.id = a.Va.all.length),
        (d.weight = u.H(b.attributes.get("Mass"))),
        (d.YPa = d.weight),
        d.vla(u.ka(b.attributes.get("Fixed"))),
        (d.cAa = d.TG),
        d.R(u.ka(b.attributes.get("Visible"))),
        (d.QPa = d.gg()),
        (d.vc = u.ka(b.attributes.get("Shock"))),
        (d.nEa = u.ka(b.attributes.get("Collisible"))),
        (d.hFa = u.ka(b.attributes.get("Weak"))),
        a.Va.all.push(d),
        X.Xa(a.Va.gda, d.name) || a.Va.gda.set(d.name, d));
    }
    static Fjb(a, b, c, d) {
      var e = b.attributes.get("End1");
      e = a.KBa(e != null ? e : null);
      var f = b.attributes.get("End2");
      let g = a.KBa(f != null ? f : null);
      f = u.H(b.attributes.get("Length"));
      let h = u.H(b.attributes.get("Radius")),
        k = u.H(b.attributes.get("Margin1"), 0),
        l = u.H(b.attributes.get("Margin2"), 0);
      var n = b.attributes.get("Type");
      n = n != null ? n : "";
      let q = b.attributes.get("BodyPart"),
        r = b.attributes.get("Defense"),
        t = u.ka(b.attributes.get("Collisible")),
        x = u.ka(b.attributes.get("Blood"));
      b = u.ka(b.attributes.get("Shock"));
      Yc.Xzb(d, new ja(h));
      d = new zu(e, g);
      d.length = f;
      d.name = c;
      d.CZ = t;
      d.KC = q != null ? q : "";
      d.Zi = r != null ? r : "";
      d.jcb = x;
      d.vc = b;
      d.gb = h;
      d.nGa = k;
      d.oGa = l;
      if (n == "Edge") (a.Ql.OF.push(d), t && a.Ql.tI.push(d));
      else if (n == "Muscle") a.Ql.UGa.push(d);
      else return;
      a.Ql.all.push(d);
    }
    static ojb(a, b) {
      var c = b.attributes.get("Edge");
      c = a.eBa(c != null ? c : null);
      c != null &&
        ((b = new Au(b, c)),
        (c = b.n2a(a.model.go)),
        a.model.Tba.GWa(c),
        a.Wqa.Mwa.push(b));
    }
    static Ikb(a, b) {
      var c = b.attributes.get("Node1");
      c = a.Ic(c != null ? c : null);
      if (c != null) {
        var d = b.attributes.get("Node2");
        d = a.Ic(d != null ? d : null);
        d != null &&
          ((b = b.attributes.get("Node3")),
          (b = a.Ic(b != null ? b : null)),
          b != null && a.model.TW.Bc.WXa(c, d, b));
      }
    }
    static tjb(a, b) {
      1 == a.qp() && Yc.UIa(a.dca, b, !0);
    }
    static UIa(a, b, c) {
      let d = u.I(b.attributes.get("NodesCount"));
      if (0 < d) {
        let e = 0;
        for (; e < d; ) {
          let f = e++,
            g = b.attributes.get("ChildNode" + (f + 1)),
            h = 0;
          c && (h = u.H(b.attributes.get("LCC" + (f + 1))));
          a.push(new Ca(g != null ? g : "", h));
        }
      }
    }
  }
  Yc.g = "D7";
  class Hl {
    constructor() {
      this.Wpa = new H(0, 0, 0, 1);
      this.i8 = new H(0, 0, 0, 1);
      this.FX = new H(0, 0, 0, 1);
      this.model = null;
      this.vc = !1;
      this.$R = 0;
      this.Yf = new Bu();
      this.Wqa = new Cu();
      this.Ql = new Du();
      this.Va = new Eu();
      this.Ju = new Vc("_CenterOfMass_");
      this.Va.Yd = null;
      this.qX = v.Kya;
    }
    Ge() {
      return this.Va.Yd;
    }
    T0() {
      return this.Va.lca.length > 0 ? this.Va.lca : this.Va.all;
    }
    SQ(a) {
      let b = 0,
        c = this.Yf.l3;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (a == d.first) return d.second;
        if (a == d.second) return d.first;
      }
      return -1;
    }
    Ic(a) {
      if (this.Va.Yd != null && a == this.qX) return this.Va.Yd;
      let b = new Ia();
      return X.wh(this.Va.gda, a, b) ? b.G : null;
    }
    KBa(a) {
      if (this.Va.Yd != null && a == this.qX) return this.Va.Yd;
      let b = this.Ic(a);
      if (b != null) return b;
      this.model != null &&
        this.model.lb != null &&
        (b = this.model.lb.pa.Ic(a));
      return b;
    }
    D0(a) {
      let b = 0,
        c = this.Va.all.length;
      for (; b < c; ) {
        let d = b++;
        if (a == this.Va.all[d].name) return d;
      }
      return -1;
    }
    eBa(a) {
      let b = 0,
        c = this.Ql.all;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (a == d.name) return d;
      }
      return null;
    }
    $sb() {
      let a = (this.$R = 0),
        b = this.T0();
      for (; a < b.length; ) this.$R += b[a++].weight;
    }
    F6() {
      var a = this.FX;
      a.x = 0;
      a.y = 0;
      a.z = 0;
      a = this.Wpa;
      var b = this.Ju.ma;
      a.x = b.x;
      a.y = b.y;
      a.z = b.z;
      a = 0;
      for (b = this.T0().length; a < b; ) {
        var c = a++,
          d = this.i8;
        let e = this.T0()[c].ma;
        d.x = e.x;
        d.y = e.y;
        d.z = e.z;
        d = this.i8;
        c = this.T0()[c].weight;
        d.x *= c;
        d.y *= c;
        d.z *= c;
        c = this.FX;
        d = this.i8;
        c.x += d.x;
        c.y += d.y;
        c.z += d.z;
      }
      a = this.FX;
      b = 1 / this.$R;
      a.x *= b;
      a.y *= b;
      a.z *= b;
      this.Ju.aB(this.FX);
      this.Ju.Fla(this.Wpa);
    }
    uL(a) {
      var b;
      b == null && (b = this.Ic(this.qX));
      if (b != null && 0 < this.Va.all.length) {
        var c = b.ma;
        let f = a.x - c.x,
          g = a.y - c.y;
        c = a.z - c.z;
        var d = b.rf;
        b = a.x - d.x;
        let h = a.y - d.y;
        a = a.z - d.z;
        d = 0;
        let k = this.Va.all;
        for (; d < k.length; ) {
          var e = k[d];
          ++d;
          let l = e.ma;
          l.x += f;
          l.y += g;
          l.z += c;
          e = e.rf;
          e.x += b;
          e.y += h;
          e.z += a;
        }
      }
    }
    evb(a) {
      let b = 0,
        c = this.Va.all.length;
      for (; b < c; ) {
        var d = this.Va.all[b++];
        let e = d.ma;
        e.x += a.x;
        e.y += a.y;
        e.z += a.z;
        d = d.rf;
        d.x += a.x;
        d.y += a.y;
        d.z += a.z;
      }
      this.F6();
    }
    osb() {
      let a = this.Ic(this.qX);
      a != null && (this.Va.Yd = a);
      this.Va.Yd == null &&
        (this.Va.Yd = this.Va.all.length > 0 ? this.Va.all[0] : null);
    }
    Arb(a) {
      m.addRange(this.Yf.v4a, a);
    }
    rGa() {
      let a = this.Va.ZJ.length,
        b = 0;
      for (; b < a; ) {
        let d = this.Va.ZJ[b++];
        var c = d.dca;
        if (c == null) continue;
        let e = 0;
        for (; e < c.length; ) {
          let f = c[e];
          ++e;
          let g = this.Ic(f.first);
          if (g != null) d.oXa(g, f.second);
          else throw 22;
        }
        d.dca = null;
      }
    }
    aka() {
      let a = this.Va.ZJ.length,
        b = 0;
      for (; b < a; ) this.Va.ZJ[b++].Oeb();
    }
    clear() {
      this.Ql.OF.length = 0;
      this.Ql.UGa.length = 0;
      this.Ql.tI.length = 0;
      this.Ql.all.length = 0;
      this.Wqa.Mwa.length = 0;
      this.Yf.l3.length = 0;
      this.Va.OF.length = 0;
      this.Va.ZJ.length = 0;
      this.Va.Yd != null && (this.Va.Yd = null);
      this.Va.all.length = 0;
      this.model = null;
    }
    reset() {
      this.vc = !1;
      let a = 0,
        b = this.Va.all;
      for (; a < b.length; ) b[a++].reset();
      this.rGa();
    }
    RKa() {
      let a = 0,
        b = this.Va.all;
      for (; a < b.length; ) b[a++].q4();
    }
    crb() {
      this.P5a(this.Va.all, this.Yf.l3);
    }
    QKa() {
      let a = 0,
        b = this.Va.all;
      for (; a < b.length; ) b[a++].Kob();
    }
    JWa(a) {
      let b = 0;
      for (; b < a.length; ) {
        let c = this.Ic(a[b++].first);
        this.Va.lca.push(c);
      }
    }
    P5a(a, b) {
      let c = (b.length = 0);
      for (; c < a.length; ) {
        let e = a[c];
        ++c;
        var d = e.name;
        if (J.substr(d, d.length - 2, 2) == "_1") {
          d = J.substr(d, 0, d.length - 2) + "_2";
          let f = 0,
            g = a;
          for (; f < g.length; ) {
            let h = g[f];
            ++f;
            if (h.name == d) {
              b.push(new Ca(e.id, h.id));
              e.TE = h;
              h.TE = e;
              break;
            }
          }
        }
      }
    }
    static wea(a, b) {
      a = a.ma;
      b = b.ma;
      return new H(
        a.x + (b.x - a.x) * 0.5,
        a.y + (b.y - a.y) * 0.5,
        a.z + (b.z - a.z) * 0.5,
        1,
      );
    }
  }
  Hl.g = "D8";
  Object.assign(Hl.prototype, { j: Hl });
  class Eu {
    constructor() {
      this.lca = m.l();
      this.gda = new Map();
      this.all = m.l();
      this.ZJ = m.l();
      this.OF = m.l();
      this.Yd = null;
    }
  }
  Eu.g = "D9";
  Object.assign(Eu.prototype, { j: Eu });
  class Du {
    constructor() {
      this.all = m.l();
      this.tI = m.l();
      this.UGa = m.l();
      this.OF = m.l();
    }
  }
  Du.g = "DA";
  Object.assign(Du.prototype, { j: Du });
  class Cu {
    constructor() {
      this.Mwa = m.l();
    }
  }
  Cu.g = "DB";
  Object.assign(Cu.prototype, { j: Cu });
  class Bu {
    constructor() {
      this.v4a = m.l();
      this.l3 = m.l();
    }
  }
  Bu.g = "DC";
  Object.assign(Bu.prototype, { j: Bu });
  class El {
    constructor(a) {
      this.frameCount = 0;
      this.names = m.l();
      this.qk = !1;
      this.TO = this.SO = 0;
      this.pa = a;
      this.HTa = xd.qE;
      this.sQa = xd.pAa;
    }
    ia() {
      this.uk();
      this.qE();
      this.qk && this.frameCount++;
    }
    EMa(a, b) {
      this.TO = a;
      this.SO = b;
    }
    j$a() {
      return xd.uDa / (this.pa.model.ND() * this.pa.model.ND());
    }
    start(a) {
      this.qk = !0;
      this.frameCount = 0;
      this.names.length = 0;
      a != null && m.addRange(this.names, a);
      this.pa.QKa();
    }
    stop() {
      this.qk = !1;
      this.frameCount = 0;
    }
    qE() {
      let a = this.pa.vc;
      var b = this.pa.Va.all;
      let c = this.pa.Ql.all;
      var d = b.length;
      for (var e = 0, f = d; e < f; )
        ((d = b[e++]),
          (d.fA = d.oh && !d.UG && (this.qk || d.oy || (a && d.vc))));
      b = 0;
      for (e = this.HTa; b < e; )
        for (++b, d = c.length, f = 0; f < d; ) {
          let g = c[f++];
          (a && g.vc) || this.Bdb(g);
        }
    }
    uk() {
      let a = 0,
        b = this.pa.Va.all;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        !c.UG && (this.qk || c.oy || (this.pa.vc && c.vc)) && c.uk(this.j$a());
      }
    }
    Bdb(a) {
      let b = a.xx,
        c = a.et;
      b.fA
        ? (this.qha(b), c.fA && this.qha(c), a.pFa())
        : c.fA && (this.qha(c), a.pFa());
    }
    qha(a) {
      let b = a.ma;
      b.y >= 0 && this.i7a(a);
      this.TO != this.SO &&
        (b.x < this.TO ? (b.x = this.TO) : this.SO < b.x && (b.x = this.SO));
    }
    i7a(a) {
      if (a.nEa && this.TO != this.SO) {
        var b = a.rf;
        a = a.ma;
        var c = a.x - b.x,
          d = a.z - b.z,
          e = c * c + d * d,
          f = a.y * this.sQa;
        a.x = b.x;
        a.y = 0;
        a.z = b.z;
        f * f < e &&
          ((f = 1 - f / Math.sqrt(e)),
          (a.x += c * f),
          (a.y += 0),
          (a.z += d * f));
      }
    }
  }
  El.g = "DD";
  Object.assign(El.prototype, { j: El });
  class uu {
    constructor(a) {
      this.ZX = m.l();
      this.oqa = new Map();
      this.lta = new Map();
      this.model = a;
    }
    M0(a, b) {
      a = a ? this.lta : this.oqa;
      if (X.Xa(a, b)) return a.get(b);
      let c = new Fu(b);
      a.set(b, c);
      return c;
    }
    uY(a, b, c) {
      let d = this.model.rU,
        e = this.ufa();
      this.M0(a, b).uY(c, d, e);
    }
    C_(a, b) {
      this.M0(a, b).C_();
    }
    yY(a, b) {
      let c = this.model.rU,
        d = this.ufa();
      this.M0(a, b).yY(c, d);
    }
    eL() {
      for (var a = 0, b = X.values(this.lta); a < b.length; ) {
        var c = b[a];
        ++a;
        c.count *= this.st();
        c.Xb *= this.st();
        c.ap *= this.st();
        c.xf *= this.st();
        c.pKa(this.st());
      }
      a = 0;
      for (b = X.values(this.oqa); a < b.length; )
        ((c = b[a]),
          ++a,
          (c.count *= this.st()),
          (c.Xb *= this.st()),
          (c.ap *= this.st()),
          (c.xf *= this.st()),
          c.pKa(this.st()));
    }
    l6a(a, b, c, d) {
      b.G = 0;
      c.G = 0;
      this.ZX.length = 0;
      sa.Cz(a, this.ZX);
      a = new ja(0);
      let e = new ja(0),
        f = new ja(0),
        g = 0,
        h = this.ZX.length;
      for (; g < h; )
        (this.k0(this.ZX[g++], a, e, f),
          (b.G += a.G),
          (c.G += e.G),
          (d.G += f.G));
    }
    k0(a, b, c, d) {
      a = this.M0(!0, a);
      let e = this.model.rU,
        f = this.ufa();
      b.G = a.j0(e, f);
      c.G = a.B6a(e, f);
      d.G = a.n7a(e, f);
    }
    ufa() {
      let a = 0;
      var b = this.model.sf;
      b != null && ((b = b.Gc), b != null && (a = b.RW.o6));
      return a;
    }
    st() {
      let a = 0;
      var b = this.model.sf;
      b != null && ((b = b.Gc), b != null && (a = b.RW.Z4));
      return a;
    }
  }
  uu.g = "DE";
  Object.assign(uu.prototype, { j: uu });
  class Fu {
    constructor(a) {
      this.animation = a;
      this.lua = this.ly = this.xf = this.count = this.ap = this.Xb = 0;
    }
    mT(a, b) {
      let c = a - this.lua;
      0 < c &&
        ((b = Math.pow(2, -c / b)),
        (this.Xb *= b),
        (this.ap *= b),
        (this.count *= b),
        (this.xf *= b),
        (this.ly *= b));
      this.lua = a;
    }
    uY(a, b, c) {
      this.mT(b, c);
      this.ap += a;
      this.ly += 1;
    }
    C_() {
      this.Xb += this.ap;
      this.ap = 0;
      this.xf += this.ly;
      this.ly = 0;
    }
    yY(a, b) {
      this.mT(a, b);
      this.count += 1;
    }
    B6a(a, b) {
      this.mT(a, b);
      return this.Xb;
    }
    j0(a, b) {
      this.mT(a, b);
      return this.count;
    }
    n7a(a, b) {
      this.mT(a, b);
      return this.xf;
    }
    pKa(a) {
      this.Xb *= a;
      this.ap *= a;
      this.count *= a;
      this.xf *= a;
      this.ly *= a;
    }
  }
  Fu.g = "DF";
  Object.assign(Fu.prototype, { j: Fu });
  class Fl {
    constructor(a) {
      this.pa = a;
    }
    strike(a, b, c) {
      if (a != null) {
        this.M2a();
        var d = a.xx,
          e = a.et;
        if (!d.TG || !e.TG) {
          var f = d.ma,
            g = e.ma,
            h = a.oU,
            k = a.wQ,
            l = k.x - h.x;
          h = k.y - h.y;
          l = Math.sqrt(l * l + h * h);
          k = d.ma;
          h = b.x - k.x;
          b = b.y - k.y;
          b = Math.sqrt(h * h + b * b);
          b = l < b ? 1 : b / l;
          d.UG ||
            ((d = (1 - b) / d.weight),
            (l = new H(c.x, c.y, c.z, 1)),
            (l.x *= d),
            (l.y *= d),
            (l.z *= d),
            (l.x += f.x),
            (l.y += f.y),
            (l.z += f.z),
            a.xx.aB(l));
          e.UG ||
            ((e = b / e.weight),
            (c = new H(c.x, c.y, c.z, 1)),
            (c.x *= e),
            (c.y *= e),
            (c.z *= e),
            (c.x += g.x),
            (c.y += g.y),
            (c.z += g.z),
            a.et.aB(c));
        }
      }
    }
    M2a() {
      let a = 0,
        b = this.pa.Va.all;
      for (; a < b.length; ) {
        var c = b[a];
        ++a;
        let d = c.rf;
        c = c.ma;
        d.x += c.x;
        d.y += c.y;
        d.z += c.z;
        d.x *= 0.5;
        d.y *= 0.5;
        d.z *= 0.5;
      }
    }
  }
  Fl.g = "E0";
  Object.assign(Fl.prototype, { j: Fl });
  class hh extends wd {
    constructor(a) {
      super(a);
      this.s9 = !1;
    }
    rJ() {
      return !0;
    }
    TS(a, b, c, d) {
      d == null && (d = -1);
      c == null && (c = !1);
      b == null && (b = 0);
      let e = !this.s9;
      this.s9 || (this.lb.Oxb(), (this.s9 = !0));
      a = super.TS(a, b, c, d);
      e && this.da.ia();
      return a;
    }
  }
  hh.g = "E1";
  hh.u = wd;
  Object.assign(hh.prototype, { j: hh });
  class de {
    constructor(a, b, c) {
      this.Li = a;
      this.UO = P.rBa(b);
      this.Ca = c;
      this.t$ = m.l();
      this.O7 = m.l();
      this.As = m.l();
      this.Cqa = !1;
      this.Dua = 0;
      this.zqa = !1;
      this.Cua = 0;
      this.iO = m.l();
      this.nN = m.l();
      this.Bqa = this.Eqa = 0;
      this.vH = this.Q8 = !1;
      this.wb = m.l();
      this.md = m.l();
      this.Owa = this.BO = this.HPa = this.Dba = this.lda = this.JZ = 0;
      this.Zu = new Ue(null, 0, 0);
      this.oN = new Ue(null, 0, 0);
      this.PV = new Ue(null, 0, 0);
      this.Qqa = new Ue(null, 0, 0);
      this.Rqa = new Ue(null, 0, 0);
      this.Rl = new Ue(null, 0, 0);
      this.Bk = new Ue(null, 0, 0);
      this.E$ = m.l();
      this.P7 = m.l();
      this.js = this.ks = null;
      this.rN = this.Ru = 0;
      this.gk = -1;
      this.tW = !1;
      this.iy = 0;
      this.nqa = 1;
      this.B7 = this.Il = 0;
      this.LB = !1;
      this.fh = 1;
      this.dX = !1;
      this.rC = 0;
      this.model = null;
      this.tG = this.maa = this.Fua = this.Do = !1;
      this.Gc = null;
      this.Opa = this.rua = this.Hua = 0;
      this.ieb();
    }
    x4a(a) {
      if (this.model.parameters.Gj && a != null && this.t$ != a.me) {
        this.t$ = a.me;
        this.E$.length = 0;
        var b = P.V$a(),
          c = new Gu();
        c.GI = this.model;
        c.sk = a;
        for (a = 0; a < b.length; ) {
          var d = b[a];
          ++a;
          for (var e = 0, f = this.t$; e < f.length; ) {
            if (!f[e++].bl(d.first)) continue;
            this.E$.push(d);
            let g = 0,
              h = d.second;
            for (; g < h.length; ) h[g++].init(c);
          }
        }
        if (this.O7 != this.model.me)
          for (
            this.O7 = this.model.me, b = this.P7.length = 0, a = P.U9a();
            b < a.length;

          )
            for (d = a[b], ++b, e = 0, f = this.O7; e < f.length; )
              f[e++].qZ(d.names) && (this.P7.push(d), d.init(c));
      }
    }
    ia(a) {
      if (!this.Z0()) return null;
      var b = a.da;
      this.tQ(this.Zu, a);
      this.Il = b.Qe ? b.pJ() + b.X_ + this.q0(this.Zu) : -1;
      this.B7 = this.Li.Qe ? this.Li.pJ() + this.Li.X_ : -1;
      if (this.tW && ((this.tW = !1), this.Li.Qe && b.Qe)) {
        var c = this.Li.Ua,
          d = b.Ua;
        if (c != null && d != null) {
          var e = c.fJ();
          switch (this.rC) {
            case 1:
              d = this.fh = d.w0(!0) - this.Il + 1;
              c = c.cfa();
              this.fh = d > c ? c : d;
              e > this.fh && (this.fh = e);
              --this.fh;
              break;
            case 2:
              d = this.fh = d.ED(!0) - this.Il + 1;
              c = c.cfa();
              this.fh = d > c ? c : d;
              e > this.fh && (this.fh = e);
              --this.fh;
              break;
            case 3:
              ((this.fh = e), --this.fh);
          }
        }
      }
      this.rC = 0;
      if (this.fh > 1) return (--this.fh, null);
      b = b.Ua;
      if (b != null) {
        e = !1;
        c = 0;
        for (d = P.U$a(); c < d.length; )
          if (d[c++].children.includes(b)) {
            e = !0;
            break;
          }
        e && this.eKa(a);
      }
      this.ysb();
      this.urb();
      if (!this.Dcb()) return null;
      this.nqa = this.zqb(a);
      this.HPa = this.Gc.G9a(this.Zu);
      this.Fua = this.Hua < this.HPa;
      this.BO = this.Gc.w9a(this.Zu);
      this.maa = this.rua < this.BO;
      this.xsb(this.Zu);
      this.trb(this.Zu);
      this.Owa = this.Gc.U5a(this.Zu);
      this.tG = this.Opa < this.Owa;
      this.Dua = this.Gc.P6a(this.Zu);
      this.Cqa = this.Eqa < this.Dua;
      this.Cua = this.Gc.O6a(this.Zu);
      this.zqa = this.Bqa < this.Cua;
      b = this.krb(a);
      this.Q8 ||
        this.gk == 11 ||
        ((b += this.D_a(a.da, this.E$)),
        (b += this.axa(this.P7)),
        this.oN.GZ.length > 0 && (this.gk = 11));
      b <= 0 && this.vH ? this.zsb() : (this.rC = 0);
      if (0 < b) {
        if (
          ((this.dX = !1),
          this.OBa(this.wb),
          this.B2a(),
          (a = this.oL(this.md)),
          -1 < a)
        )
          return ((this.fh = this.As[a]), this.md[a]);
      } else this.tW && (this.dX = !1);
      return null;
    }
    eKa(a) {
      this.Bk.i6 = this.model.En;
      this.Bk.T2 = this.model.S0();
      this.Bk.el = this.model.dh;
      let b = new ja(this.Bk.counter),
        c = new ja(this.Bk.Xb),
        d = new ja(this.Bk.xf);
      this.model.En.k0(this.ks, b, c, d);
      this.Bk.counter = b.G;
      this.Bk.Xb = c.G;
      this.Bk.xf = d.G;
      this.Bk.A1 = this.model.parameters.hd;
      this.Bk.B1 = a.parameters.hd;
      this.Bk.EY = a.da.pJ();
      this.Bk.wZ = this.cca(a);
      Da.lf();
      this.Hua = Da.lf();
      this.rua = Da.lf();
      this.Opa = Da.lf();
      this.Eqa = Da.lf();
      this.Bqa = Da.lf();
      this.Ru = this.Iea(this.Bk);
      this.rN = this.q0(this.Bk);
    }
    cca(a) {
      let b = 0,
        c = a.vd.length,
        d = 0;
      for (; d < c; ) {
        var e = a.vd[d++];
        e != null && ((e = e.da.V2), e > b && (b = e));
      }
      return b;
    }
    Ewb(a) {
      if (this.Z0()) {
        if (this.Li.Qe && a != null) {
          let b = a.WX;
          this.js = b != null ? b : a;
        } else this.js = null;
        this.Ecb(this.js) && (this.fh = 1);
      }
    }
    Fwb(a) {
      if (this.Z0()) {
        var b = a.da,
          c = b.Ua;
        if (b.Qe && c != null) {
          var d = c.WX;
          c = this.ks = d == null ? c : d;
          this.eKa(a);
          if (!this.Icb(c)) {
            this.Rl.i6 = this.model.En;
            this.Rl.T2 = this.model.S0();
            this.Rl.el = this.model.dh;
            c = new ja(this.Rl.counter);
            d = new ja(this.Rl.Xb);
            let e = new ja(this.Rl.xf);
            this.model.En.k0(this.ks, c, d, e);
            this.Rl.counter = c.G;
            this.Rl.Xb = d.G;
            this.Rl.xf = e.G;
            this.Rl.A1 = this.model.parameters.hd;
            this.Rl.B1 = a.parameters.hd;
            this.Rl.EY = b.pJ();
            this.Rl.wZ = this.cca(a);
            this.iy = this.qfa(this.Rl);
          }
        }
      }
    }
    $La(a) {
      a = a.da;
      let b = a.Ua;
      a.Qe && b != null && (this.ks = b);
    }
    Icb(a) {
      let b = 0,
        c = P.n$a();
      for (; b < c.length; ) if (a.bl(c[b++])) return !0;
      return !1;
    }
    Pwb() {
      this.Z0() && (this.fh = 1);
    }
    stb(a) {
      this.UO = P.rBa(a);
    }
    oL(a) {
      let b = this.model.jb;
      return b != null
        ? (this.tQ(this.oN, b.Nf()), this.Gc.oL(a, this.js, this.oN))
        : -1;
    }
    QZa(a) {
      this.Wwa(P.wfa(a));
    }
    Wwa(a) {
      a != null && (this.Gc = a);
    }
    qfa(a) {
      return this.Gc.qfa(a) + 1;
    }
    Iea(a) {
      return this.Gc.Iea(a);
    }
    q0(a) {
      return this.Gc.q0(a);
    }
    Kea(a) {
      return this.Gc.Kea(a);
    }
    ieb() {
      let a = this.Ca.Gc;
      a != null && (this.Gc = a);
    }
    dfa(a) {
      return a % P.zp == 0 ? a : 0 < a ? a - (a % P.zp) + P.zp : a - (a % P.zp);
    }
    Ecb(a) {
      if (this.Li.Qe && a != null) {
        let b = 0,
          c = P.oab();
        for (; b < c.length; ) if (a.bl(c[b++])) return !0;
      }
      return !1;
    }
    Ccb(a) {
      var b;
      b == null && (b = 0);
      if (a != null) {
        var c = null;
        b == 0 ? (c = P.mDa()) : b == 1 && (c = P.kDa());
        for (b = 0; b < c.length; ) if (a.bl(c[b++])) return !0;
      }
      return !1;
    }
    kdb(a) {
      let b = 0,
        c = P.aab();
      for (; b < c.length; ) if (a.bl(c[b++])) return !0;
      return !1;
    }
    Dcb() {
      for (var a = 0, b = P.Q$a(); a < b.length; )
        if (this.Li.qBa(b[a++]) != null) return !1;
      if (this.Li.Qe && this.js != null) {
        a = this.js;
        b = 0;
        let c = P.R$a();
        for (; b < c.length; ) if (a.bl(c[b++])) return !1;
      } else return !1;
      return !0;
    }
    KEa(a) {
      return this.AEa(a, P.K$a());
    }
    JEa(a) {
      return this.AEa(a, P.J$a());
    }
    AEa(a, b) {
      let c = !1;
      if (a != null) {
        let d = 0;
        for (; d < b.length; )
          if (b[d++].children.includes(a)) {
            c = !0;
            break;
          }
      }
      return c;
    }
    uCa(a, b) {
      if (a.vd.length == 0 || this.model == null) return !1;
      let c = !1,
        d = 0;
      for (a = a.vd; d < a.length; ) {
        let e = a[d];
        ++d;
        if (e.da == null) continue;
        if (e.da != null && e.da.$da == null) continue;
        if (!this.KEa(e.da.Ua) && b == 0) continue;
        if (!this.JEa(e.da.Ua) && b == 1) continue;
        let f = this.model.pa.Ge().ma.x,
          g = e.pa.Va.all[0].ma.x;
        (f - g < 0 ? 1 : -1) * e.da.jd() < 0
          ? (c = !0)
          : Math.abs(g - f) < 100 && (c = !0);
      }
      return c;
    }
    zqb(a) {
      let b = Da.lf();
      this.tQ(this.PV, a);
      this.JZ = this.Gc.n6a(this.PV);
      this.lda = this.Gc.N6a(this.PV);
      this.Dba = this.Gc.O5a(this.PV);
      a = this.JZ;
      if (b < this.JZ) return 2;
      a += this.lda;
      if (b < a) return 3;
      a += this.Dba;
      return b < a ? 4 : 1;
    }
    ffa(a, b, c) {
      a = b.da.Ic(a, this.A0(b, c));
      return a != null ? a.ma.x : 3.4028234663852886e38;
    }
    zsb() {
      this.model.wJa(!1);
      this.gk = -2;
      this.tW = !0;
      this.fh = -2147483648;
    }
    F0(a, b, c) {
      c == null && (c = !1);
      let d = 0,
        e = a.length;
      var f = this.model.Fc;
      if (f == null) return 0;
      f.jm = !1;
      for (f = 0; f < e; ) {
        let g = f++,
          h = a[g];
        h != null &&
          (c ? this.qdb(h) : this.d2(h)) &&
          ((a[d] = a[g]), b != null && (b[d] = b[g]), ++d);
      }
      m.resize(a, d, function () {
        return new jc();
      });
      b != null &&
        m.resize(b, d, function () {
          return 0;
        });
      return d;
    }
    OBa(a) {
      let b = 0,
        c = a.length;
      var d = this.model.Fc;
      if (d == null) return 0;
      d.jm = !1;
      for (d = 0; d < c; ) {
        let e = d++,
          f = a[e].animation;
        if (f == null || this.d2(f)) ((a[b] = a[e]), ++b);
      }
      m.resize(a, b, function () {
        return new kd();
      });
      return b;
    }
    d2(a) {
      let b = this.model.me;
      if (!b.includes(a)) return !1;
      let c = this.model.Fc;
      c.jm = !1;
      c.CK = a.Al;
      c.Zl = a.CD(c, this.Li.jd());
      c.dI = a.va.align.bF;
      if (!a.aA(this.model, null, a.LQ(2))) return !1;
      var d = a.X7;
      if (0 < d.eR.length) {
        let e = 0;
        for (d = d.eR; e < d.length; ) {
          let f = d[e];
          ++e;
          if (
            b.includes(f) &&
            ((c.CK = f.Al),
            (c.Zl = f.CD(c, this.Li.jd())),
            (c.dI = f.va.align.bF),
            f.aA(this.model, null, a.LQ(2)))
          )
            return !1;
        }
      }
      return !0;
    }
    qdb(a) {
      if (!this.model.me.includes(a)) return !1;
      let b = this.model.Fc;
      b.jm = !1;
      return a.va.Ys.length > 0 &&
        ((b.CK = a.Al),
        (b.Zl = a.CD(b, this.Li.jd())),
        (b.dI = a.va.align.bF),
        !a.sw(this.model.Fc, a.va.Ys, a.LQ(2)))
        ? !1
        : !0;
    }
    v6a(a) {
      a = a.Ge();
      let b = this.Li.Ge();
      return a == null || b == null ? 0 : a.ma.x - b.ma.x >= 0 ? 1 : -1;
    }
    D_a(a, b) {
      let c = a.Ua;
      if (c == null) return 0;
      a = m.find(b, function (d) {
        return c.bl(d.first);
      });
      return a != null ? this.axa(a.second) : 0;
    }
    axa(a) {
      a = this.Gc.yqb(a);
      if (a == null || a.length < 1) return 0;
      for (var b = this.wb.length, c = 0; c < b; ) {
        let d = c++;
        this.wb[d] != null &&
          this.wb[d].animation != null &&
          J.remove(a, this.wb[d].animation.name);
      }
      b = m.l();
      sa.BAa(a, b);
      for (a = 0; a < b.length; )
        ((c = b[a]),
          ++a,
          c != null && (this.wb.push(new kd(c, 0)), this.oN.GZ.push(c.name)));
      return this.wb.length;
    }
    krb(a) {
      this.wb.length = 0;
      this.oN.GZ.length = 0;
      this.vH = this.Q8 = !1;
      var b = a.da;
      if (this.v6a(b) * b.jd() > 0)
        return ((this.vH = this.Q8 = !0), (this.rC = 3), 0);
      var c = !1;
      this.uCa(a, 0) && this.Cqa && (this.iBa(a, 0), (this.gk = 2), (c = !0));
      this.zqa && this.uCa(a, 1) && (this.iBa(a, 1), (this.gk = 2), (c = !0));
      if (c) return this.wb.length;
      if (this.iy < b.pJ() && !de.tdb(b))
        if (this.ks.Lcb(this.Il)) {
          if (de.gcb(b)) {
            if (
              (this.Fua &&
                ((b = this.lBa(a)),
                0 < b && (this.gk = 1),
                this.Do || 0 < b)) ||
              (this.maa &&
                ((b = this.kBa(a)), 0 < b && (this.gk = 0), this.Do || 0 < b))
            )
              return this.wb.length;
            if (this.tG) {
              b = P.CCa();
              var d = a.da.Ua;
              c = 0;
              d != null && a.da.Qe && (c = d.ED(!0) - this.Il + 1);
              for (a = this.wb.length = 0; a < b.length; ) {
                d = 0;
                for (var e = b[a++].children; d < e.length; ) {
                  var f = e[d];
                  ++d;
                  var g = c,
                    h = f.cfa();
                  g > h && (g = h);
                  h = f.fJ();
                  h > g && (g = h);
                  this.wb.push(new kd(f, g));
                }
              }
              0 < this.wb.length && (this.gk = 5);
              return this.wb.length;
            }
            this.rC = 2;
            this.vH = !0;
            return 0;
          }
          switch (this.nqa) {
            case 2:
              return (
                (b = this.lBa(a)),
                0 < b
                  ? (this.gk = 1)
                  : 0 == b && ((b = this.Qea(a)), 0 < b && (this.gk = 2)),
                b
              );
            case 3:
              return ((a = this.Qea(a)), 0 < a && (this.gk = 2), a);
            case 4:
              return ((this.gk = 10), 0);
            default:
              return ((this.rC = 1), (this.vH = !0), 0);
          }
        } else return 0;
      e = !1;
      b = this.iO.length;
      c = this.Gc.fF;
      for (d = 0; d < b; )
        if (((f = d++), this.iO[f].U_))
          for (g = m.l(), sa.Cz(c[f].first, g), f = 0; f < g.length; )
            ((h = g[f]),
              ++f,
              h != null &&
                this.d2(h) &&
                ((e = h.fJ()), this.wb.push(new kd(h, e)), (e = !0)));
      e && (this.gk = 6);
      this.LB = !1;
      b = this.nN.length;
      c = this.Gc.rD;
      for (d = 0; d < b && !this.LB; ) {
        if (
          this.nN[d].U_ &&
          ((g = m.l()), sa.Cz(c[d].first, g), (e = a.sf), e != null)
        )
          for (f = 0; f < g.length; )
            if (((h = g[f]), ++f, h != null && e.d2(h))) {
              this.LB = !0;
              break;
            }
        ++d;
      }
      this.tQ(this.Qqa, a);
      b = this.Gc.Z6a(this.js, this.Qqa);
      b < 1 && (b = 1);
      1 - 1 / b < Da.lf() && (this.dX = !0);
      if (this.dX || this.LB) {
        b = 0;
        if (this.maa) {
          b = this.kBa(a);
          0 < b && (this.gk = 0);
          if (this.Do && !this.LB) return this.wb.length;
          if (0 < b) return b;
        }
        if (this.LB) {
          a = P.c$a();
          for (b = this.wb.length = 0; b < a.length; )
            for (c = 0, d = a[b++].children; c < d.length; )
              ((e = d[c]), ++c, (f = e.fJ()), this.wb.push(new kd(e, f)));
          b = this.wb.length;
          0 < b && (this.gk = 9);
        } else if (this.tG) {
          a = P.CCa();
          for (b = this.wb.length = 0; b < a.length; )
            for (c = 0, d = a[b++].children; c < d.length; )
              ((e = d[c]), ++c, (f = e.fJ()), this.wb.push(new kd(e, f)));
          b = this.wb.length;
          0 < b && (this.gk = 5);
        }
        if (0 == b)
          return ((this.rC = 3), (this.vH = !0), this.LB && this.xnb(), 0);
      }
      return this.wb.length;
    }
    xnb() {
      let a = 0,
        b = P.d$a(),
        c = 0,
        d = this.wb;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        let f = !0,
          g = 0,
          h = b;
        for (; g < h.length; )
          if (e.animation.bl(h[g++])) {
            f = !1;
            break;
          }
        f && ((this.wb[a] = e), ++a);
      }
    }
    Z0() {
      return de.AY ? (this.Ca.Gj ? !0 : P.mP) : !1;
    }
    B2a() {
      this.md.length = 0;
      let a = (this.As.length = 0),
        b = this.wb;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        this.md.push(c.animation);
        this.As.push(c.wait);
      }
    }
    lBa(a) {
      this.Do = this.Il % P.zp != 0 ? !0 : !1;
      if (this.js != null && this.ks != null) {
        var b = this.j7a(
          a,
          this.js,
          this.ks,
          this.Li.iw(),
          a.da.iw(),
          this.B7,
          this.Il,
          this.Ru,
        );
        0 < b && (b = this.OBa(this.wb));
        if (0 < b) {
          let c = 0,
            d = 0;
          for (; d < b; ) {
            let e = d++,
              f = this.wb[e].animation;
            if (f == null || this.mma(f, this.model, a))
              (c < e && (this.wb[c] = this.wb[e]), ++c);
          }
          b = c;
          m.resize(this.wb, b, function () {
            return new kd();
          });
        }
        return b;
      }
      return 0;
    }
    j7a(a, b, c, d, e, f, g, h) {
      this.wb.length = 0;
      let k = null;
      var l = 0;
      for (c = c.g1()[1]; l < c.length; ) {
        var n = c[l];
        ++l;
        if (this.UO == n.second) {
          l = n.first;
          for (c = 0; c < l.length; )
            if (((n = l[c]), ++c, this.UO == n.cga)) {
              k = n;
              break;
            }
          break;
        }
      }
      if (k != null) {
        l = a.da.jd();
        if (this.Ccb(b)) {
          n = b.va.align.HK;
          c = g - f;
          var q = this.dfa(c);
          c = q - c;
          this.wb.length = 0;
          this.cCa(k, n, q, l * (d - e) + h, this.wb);
          d = 0;
          for (n = this.wb; d < n.length; )
            if (((q = n[d]), ++d, b == q.animation)) {
              f = q.wait - f + c;
              this.wb.length = 0;
              if (0 < f) return (this.wb.push(new kd(null, f)), this.wb.length);
              break;
            }
        }
        f = g % P.zp != 0 ? g + P.zp - (g % P.zp) : g;
        this.wb.length = 0;
        d = this.Li.jd();
        c = 0;
        n = k.ou.length;
        for (q = 0; q < n; ) {
          let r = k.ou[q++].label,
            t = this.ffa(r, this.model, a);
          c += this.cCa(
            k,
            r,
            f,
            l * (t + (b.gU.Hea(f, r) - b.gU.Hea(g, r)) * d - e) + h,
            this.wb,
          );
        }
        if (f == g || 0 == c) return c;
        this.wb.length = 0;
        this.wb.push(new kd(null, f - g));
        return 1;
      }
      return this.wb.length;
    }
    kBa(a) {
      this.wb.length = 0;
      if (this.Il % P.zp != 0) return ((this.Do = !0), 0);
      this.Do = !1;
      this.tQ(this.Rqa, a);
      for (
        var b = this.Kea(this.Rqa), c = null, d = 0, e = this.ks.g1()[0];
        d < e.length;

      ) {
        var f = e[d];
        ++d;
        if (this.UO == f.second) {
          d = f.first;
          for (e = 0; e < d.length; )
            if (((f = d[e]), ++e, this.UO == f.cga)) {
              c = f;
              break;
            }
          break;
        }
      }
      if (c != null) {
        f = a.da;
        d = this.Il;
        e = f.iw();
        f = f.jd();
        var g = c.ou.length;
        this.md.length = 0;
        this.As.length = 0;
        b = this.Il + b;
        let l = 0;
        for (; l < g; ) {
          var h = c.ou[l++],
            k = h.g0(d);
          if (-1 < k) {
            let n = f * (this.ffa(h.label, this.model, a) - e) + this.Ru,
              q = 0;
            for (h = h.frames[k].Sy; q < h.length; ) {
              k = h[q];
              ++q;
              if (k.animation == null) continue;
              let r = k.u0(n);
              0 < r &&
                k.animation != null &&
                r <= b &&
                (this.md.push(k.animation), this.As.push(k.animation.fJ()));
            }
          }
        }
        e = this.md.length;
        0 < e && (e = this.F0(this.md, this.As));
        if (0 < e) {
          for (d = c = 0; d < e; )
            ((f = d++),
              (g = this.md[f]),
              this.mma(g, this.model, a) &&
                (c < f && ((this.md[c] = g), (this.As[c] = this.As[f])), ++c));
          e = c;
          m.resize(this.md, e, function () {
            return new jc();
          });
          m.resize(this.As, e, function () {
            return 0;
          });
        }
        a = 0;
        for (c = e; a < c; )
          ((d = a++), this.wb.push(new kd(this.md[d], this.As[d])));
      }
      return this.wb.length;
    }
    Qea(a, b) {
      b == null && (b = 0);
      var c = (this.wb.length = 0);
      b == 0 ? (c = this.Il) : b == 1 && (c = a.da.V2);
      c % P.zp != 0
        ? b == 0
          ? (this.Do = !0)
          : b == 1 && (this.Do = !1)
        : (this.Do = !1);
      let d = null;
      b == 0 ? (d = a.da.Ua) : b == 1 && (d = a.da.$da);
      var e = null,
        f = d.g1()[2];
      if (1 == f.length)
        if (((f = f[0].first), 1 == f.length)) e = f[0];
        else return 0;
      else return 0;
      if (e != null) {
        var g = null,
          h = null;
        b == 0
          ? ((g = P.P$a()), (h = P.mDa()))
          : b == 1 && ((g = P.L$a()), (h = P.kDa()));
        f = a.da;
        var k = this.js;
        if (this.Li.Qe && k != null) {
          var l = k.WX;
          l != null && (k = l);
          l = !1;
          for (var n = 0; n < h.length; )
            if (k.bl(h[n++])) {
              l = !0;
              break;
            }
          if (l) {
            var q = e.pCa(k.va.align.HK);
            if (q != null) {
              var r = q.g0(this.dfa(c - this.B7));
              if (-1 < r) {
                h = f.iw();
                b == 1 && (h = f.Tha);
                h = f.jd() * (this.Li.iw() - h) + this.Ru;
                l = !1;
                n = 0;
                for (q = q.frames[r].Sy; n < q.length; )
                  if (((r = q[n]), ++n, r.animation == k && 0 < r.u0(h))) {
                    l = !0;
                    break;
                  }
                if (!l)
                  return (
                    this.wb.push(new kd(null, d.w0(!0) - this.Il + 1)),
                    this.wb.length
                  );
              }
            }
          }
        }
        if (c % P.zp != 0) {
          if (b == 0) return ((this.Do = !0), (this.wb.length = 0));
          b == 1 && (this.Do = !1);
        } else this.Do = !1;
        this.md.length = 0;
        sa.BAa(g, this.md);
        g = this.md.length;
        for (h = k = 0; h < g; )
          ((l = h++),
            (n = this.md[l]),
            n != null &&
              this.mma(n, this.model, a) &&
              (k < l && (this.md[k] = n), ++k));
        g = k;
        m.resize(this.md, g, function () {
          return new jc();
        });
        k = f.iw();
        b == 1 && (k = f.Tha);
        h = f.jd();
        l = 0;
        for (e = e.ou; l < e.length; )
          if (
            ((q = e[l]),
            ++l,
            (n = q.label),
            (r = b == 1 ? c : q.g0(this.dfa(c))),
            -1 < r)
          ) {
            n = h * (this.ffa(n, this.model, a.Nf()) - k) + this.Ru;
            var t = null;
            t = r < q.frames.length ? q.frames[r] : q.frames[0];
            q = 0;
            for (r = t.Sy; q < r.length; )
              if (((t = r[q]), ++q, 0 < t.u0(n))) {
                let x = 0,
                  z = g;
                for (; x < z; ) {
                  let A = x++;
                  if (this.md[A] == t.animation) {
                    --g;
                    this.md[A] = this.md[g];
                    break;
                  }
                }
              }
          } else g = 0;
        m.resize(this.md, g, function () {
          return new jc();
        });
        a = d;
        c = f.Qe;
        if (f.DD(2) != null && a != null && c) {
          a = a.ED(!0) - this.Il;
          for (c = 0; c < g; )
            ((f = this.md[c]),
              a <= f.ED(!0) &&
                !this.kdb(f) &&
                (--g, (this.md[c] = this.md[g]), --c),
              ++c);
          m.resize(this.md, g, function () {
            return new jc();
          });
        }
        0 < this.md.length && this.F0(this.md);
        if (this.md.length == 0 && b == 0) {
          b = 0;
          for (a = P.b$a(); b < a.length; )
            for (c = 0, f = a[b++].children; c < f.length; )
              this.md.push(f[c++]);
          this.F0(this.md, null, !0);
        }
        a = this.md.length;
        0 < a && (a = this.F0(this.md));
        for (b = 0; b < a; )
          ((c = d.w0(!0) - this.Il + 1), this.wb.push(new kd(this.md[b++], c)));
      }
      return this.wb.length;
    }
    iBa(a, b) {
      let c = m.l(),
        d = m.Ib(this.wb),
        e = 0,
        f = a.vd.length;
      for (; e < f; ) {
        let g = a.vd[e++],
          h = m.Ib(c);
        (!this.KEa(g.da.Ua) && b == 0) ||
          (!this.JEa(g.da.Ua) && b == 1) ||
          g.da.Ua == null ||
          (this.Qea(g, 1),
          (c = c.length > 0 ? this.intersection(h, this.wb) : m.Ib(this.wb)));
      }
      this.wb = d.length != 0 ? this.intersection(d, c) : c;
    }
    cCa(a, b, c, d, e) {
      let f = e.length;
      a = a.pCa(b);
      if (a != null && ((a = a.e7a(c)), a != null))
        for (c = 0, a = a.Sy; c < a.length; ) {
          b = a[c];
          ++c;
          let g = b.u0(d);
          0 < g && e.push(new kd(b.animation, g));
        }
      return e.length - f;
    }
    A0(a, b) {
      return a.pa.Ge() == null || b.pa.Ge() == null
        ? 0
        : a.pa.Ge().ma.x < b.pa.Ge().ma.x
          ? 1
          : -1;
    }
    intersection(a, b) {
      let c = m.l(),
        d = 0;
      for (; d < a.length; ) {
        let e = a[d];
        ++d;
        let f = 0,
          g = b;
        for (; f < g.length; ) g[f++].animation == e.animation && c.push(e);
      }
      return c;
    }
    mma(a, b, c) {
      return this.Kxb(a, b, c.Nf());
    }
    Kxb(a, b, c) {
      let d = a.ED(!0);
      d < 0 && (d = 0);
      a = b.pa.Ic("NPivot").ma.x + this.A0(b, c) * a.gU.Hea(d, "NPivot");
      c = b.da.Eu;
      return !(a < b.da.Du || c < a);
    }
    ysb() {
      m.resize(this.iO, this.Gc.fF.length, function () {
        return new Kl();
      });
      let a = 0,
        b = this.iO;
      for (; a < b.length; ) b[a++].C4 = Da.lf();
    }
    xsb(a) {
      let b = this.Gc.fF,
        c = b.length,
        d = 0;
      for (; d < c; ) {
        let e = d++,
          f = this.iO[e];
        f.nZ = b[e].second.Gb(a);
        f.U_ = f.C4 < f.nZ;
      }
    }
    urb() {
      m.resize(this.nN, this.Gc.rD.length, function () {
        return new Kl();
      });
      let a = 0,
        b = this.nN;
      for (; a < b.length; ) b[a++].C4 = Da.lf();
    }
    trb(a) {
      let b = this.Gc.rD,
        c = b.length,
        d = 0;
      for (; d < c; ) {
        let e = d++,
          f = this.nN[e];
        f.nZ = b[e].second.Gb(a);
        f.U_ = f.C4 < f.nZ;
      }
    }
    M6a(a) {
      let b = this.A0(a.jb.Nf(), a),
        c = a.da.Ic(P.UCa(), this.A0(a, a.jb.Nf()));
      a = a.jb.Nf().da.Ic(P.UCa(), b);
      return c != null && a != null ? Math.abs(c.ma.x - a.ma.x) : 0;
    }
    tQ(a, b) {
      a.i6 = this.model.En;
      a.T2 = this.model.S0();
      a.el = this.model.dh;
      let c = new ja(a.counter),
        d = new ja(a.Xb),
        e = new ja(a.xf);
      this.model.En.k0(this.ks, c, d, e);
      a.counter = c.G;
      a.Xb = d.G;
      a.xf = e.G;
      a.A1 = this.model.parameters.hd;
      a.B1 = b.parameters.hd;
      a.EY = b.da.pJ();
      a.wZ = this.cca(b);
      a.Zya = this.M6a(this.model);
      a.WGa = this.model.da.Ua;
      a.jQ = b.da.Ua;
    }
    static tdb(a) {
      if (a.Qe) {
        let b = a.Ua;
        if (b != null && a.mp() <= b.ED(!1)) return !1;
      }
      return !0;
    }
    static gcb(a) {
      if (a.Qe) {
        let b = a.Ua;
        if (b != null && a.mp() <= b.w0(!1)) return !1;
      }
      return !0;
    }
  }
  de.g = "E2";
  Object.assign(de.prototype, { j: de });
