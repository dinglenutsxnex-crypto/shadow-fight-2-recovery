// 033-quest-conditions.js
// Domain: physics  |  28 class(es)  |  tree root(s): yc, Gu, Mu, wu, Nu, Gc, Ou, Ui, sa, zd, jc, Ul, Pu, Qu, Ru, Vi, Vl, Wi, ta, Fa, kh, Uu
// Edit here. Run `npm run build` to reassemble the full bundle.
  class yc {
    constructor() {
      this.f$ = 0;
      this.uo = null;
      this.cb = !1;
    }
    parse(a) {
      this.cb = u.ka(a.attributes.get("Not"));
      this.f$ = u.I(a.attributes.get("Operator"), 2);
    }
    init(a) {
      this.uo = a.GI;
    }
    static kJa(a) {
      let b;
      switch (a.name) {
        case "Animation":
          b = new Ol();
          break;
        case "AnimationFrame":
          b = new Pl();
          break;
        case "Distance":
          b = new Ql();
          break;
        case "ModelItem":
          b = new Rl();
          break;
        case "Operator":
          b = new Sl();
          break;
        case "Random":
          b = new Tl();
          break;
        default:
          throw 24;
      }
      b.parse(a);
      return b;
    }
    static Pxa(a, b, c) {
      switch (a) {
        case 0:
          return b < c;
        case 1:
          return b > c;
        case 2:
          return b == c;
        case 3:
          return b <= c;
        case 4:
          return b >= c;
        default:
          return !1;
      }
    }
    static K9a(a, b) {
      debugger;
      a = a.sf;
      if (a == null || a.Gc == null) return 0;
      if (!qd(b, "_")) return parseFloat(b);
      switch (b) {
        case "_BlockChance":
          return a.Dba;
        case "_CounterAttackChance":
          return a.JZ;
        case "_DodgeChance":
          return a.lda;
        default:
          return 0;
      }
    }
  }
  yc.g = "F4";
  Object.assign(yc.prototype, { j: yc });
  class Ol extends yc {
    constructor() {
      super();
      this.Um = this.zC = null;
      this.C7 = m.l();
    }
    parse(a) {
      super.parse(a);
      var b = a.attributes.get("Player");
      this.zC = Od.ql(b != null ? b : "Me");
      a = a.attributes.get("Animations");
      a = mi(a != null ? a : "", "|");
      for (b = 0; b < a.length; ) this.C7.push(a[b++]);
    }
    init(a) {
      super.init(a);
      this.Um = this.uo.ff(this.zC);
    }
    compare() {
      this.Um == null && (this.Um = this.uo.ff(this.zC));
      let a = this;
      return this.C7.length != 0
        ? this.Um != null && this.Um.Tj() != null
          ? m.byb(this.C7, function (b) {
              return a.Um.Tj().bl(b);
            })
          : !1
        : !0;
    }
  }
  Ol.g = "F5";
  Ol.u = yc;
  Object.assign(Ol.prototype, { j: Ol });
  class Pl extends yc {
    constructor() {
      super();
      this.Um = this.zC = null;
      this.FG = 0;
    }
    parse(a) {
      super.parse(a);
      let b = a.attributes.get("Player");
      this.zC = Od.ql(b != null ? b : "Me");
      this.FG = u.I(a.attributes.get("Frame"), -1);
    }
    init(a) {
      super.init(a);
      this.Um = this.uo.ff(this.zC);
    }
    compare() {
      debugger;
      this.Um == null && (this.Um = this.uo.ff(this.zC));
      return this.Um != null
        ? this.FG > 0
          ? this.Um.da != null
            ? yc.Pxa(this.f$, this.Um.da.mp(), this.FG)
            : !1
          : !0
        : !1;
    }
  }
  Pl.g = "F6";
  Pl.u = yc;
  Object.assign(Pl.prototype, { j: Pl });
  class Ql extends yc {
    constructor() {
      super();
      this.taa = this.PB = null;
      this.wqa = 0;
      this.HO = this.sN = null;
    }
    parse(a) {
      super.parse(a);
      var b = a.attributes.get("From");
      this.PB = Od.ql(b != null ? b : "Me");
      b = a.attributes.get("To");
      this.taa = Od.ql(b != null ? b : "Enemy");
      this.wqa = u.H(a.attributes.get("Distance"));
    }
    init(a) {
      super.init(a);
      a = this.uo.ff(this.PB);
      let b = this.uo.ff(this.taa);
      this.sN = a != null ? a.pa.Ge() : null;
      this.HO = b != null ? b.pa.Ge() : null;
    }
    compare() {
      if (this.sN == null) {
        var a = this.uo.ff(this.PB);
        this.sN = a != null ? a.pa.Ge() : null;
      }
      this.HO == null &&
        ((a = this.uo.ff(this.taa)), (this.HO = a != null ? a.pa.Ge() : null));
      if (this.sN != null && this.HO != null)
        a = Math.abs(this.sN.ma.x - this.HO.ma.x);
      else return !1;
      return yc.Pxa(this.f$, a, this.wqa);
    }
  }
  Ql.g = "F7";
  Ql.u = yc;
  Object.assign(Ql.prototype, { j: Ql });
  class Rl extends yc {
    constructor() {
      super();
      this.bh = this.w9 = this.Eo = this.Vta = this.PB = null;
    }
    parse(a) {
      super.parse(a);
      var b = a.attributes.get("Player");
      this.PB = Od.ql(b != null ? b : "Me");
      b = a.attributes.get("SlotType");
      this.Vta = b != null ? b : "Weapon";
      b = a.attributes.get("SubType");
      this.w9 = b != null ? b : "";
      a = a.attributes.get("ItemName");
      this.bh = a != null ? a : "";
    }
    init(a) {
      super.init(a);
      this.Eo = this.getItem();
    }
    getItem() {
      let a = this.uo.ff(this.PB);
      return a == null ? null : a.parameters.Fd(this.Vta);
    }
    compare() {
      if (this.Eo == null) {
        if (this.uo.ff(this.PB) == null) return !1;
        this.Eo = this.getItem();
      }
      if (this.Eo != null) {
        var a = this.w9;
        if (a == null || a == "" || this.Eo.Yb == this.w9)
          return (
            (a = this.bh),
            a != null && a != "" ? this.Eo.name == this.bh : !0
          );
      }
      return !1;
    }
  }
  Rl.g = "F8";
  Rl.u = yc;
  Object.assign(Rl.prototype, { j: Rl });
  class Sl extends yc {
    constructor() {
      super();
      this.jv = null;
      this.ad = m.l();
    }
    parse(a) {
      var b = a.attributes.get("Type");
      this.jv = b != null ? b : "And";
      a = a.children;
      for (b = 0; b < a.length; ) {
        let c = yc.kJa(a[b++]);
        this.ad.push(c);
      }
    }
    init(a) {
      super.init(a);
      let b = 0,
        c = this.ad;
      for (; b < c.length; ) c[b++].init(a);
    }
    compare() {
      switch (this.jv) {
        case "And":
          for (var a = 0, b = this.ad; a < b.length; ) {
            var c = b[a];
            ++a;
            var d = c.compare();
            c.cb && (d = !d);
            if (!d) return !1;
          }
          return !0;
        case "Or":
          a = 0;
          for (b = this.ad; a < b.length; )
            if (((c = b[a]), ++a, (d = c.compare()), c.cb && (d = !d), d))
              return !0;
          return !1;
        default:
          throw 25;
      }
    }
  }
  Sl.g = "F9";
  Sl.u = yc;
  Object.assign(Sl.prototype, { j: Sl });
  class Tl extends yc {
    constructor() {
      super();
      this.Psa = null;
    }
    compare() {
      return Da.iT(yc.K9a(this.uo, this.Psa));
    }
    parse(a) {
      super.parse(a);
      a = a.attributes.get("PercentPerFrame");
      this.Psa = a != null ? a : null;
    }
  }
  Tl.g = "FA";
  Tl.u = yc;
  Object.assign(Tl.prototype, { j: Tl });
  class Gu {
    constructor() {
      this.GI = this.sk = null;
    }
  }
  Gu.g = "FB";
  Object.assign(Gu.prototype, { j: Gu });
  class Mu {
    constructor() {
      this.YC = "";
      this.rb = new Ae();
      this.type = 0;
      this.eb = !1;
      this.model = this.Pd = this.data = null;
    }
  }
  Mu.g = "FC";
  Object.assign(Mu.prototype, { j: Mu });
  class wu {
    constructor() {
      this.size = this.Mua = 0;
      this.qW = !1;
      this.Yf = m.l();
    }
    eab() {
      return this.size - this.Mua;
    }
    Ybb(a) {
      this.size = 2;
      this.qW = !0;
      this.Yf.length < this.size && this.WKa(2, a);
      let b = 0,
        c = this.size;
      for (; b < c; ) {
        let d = this.Yf[b++];
        d.size != a &&
          (d.size < a &&
            m.resize(d.data, a, function () {
              return new H(0, 0, 0, 1);
            }),
          (d.size = a));
      }
    }
    Mh(a) {
      return this.size <= a ? null : this.Yf[a];
    }
    shift(a, b, c) {
      c == null && (c = 0);
      b == null && (b = 0);
      let d = this.qW ? 2 : 0;
      for (; d < this.size; ) {
        let e = this.Yf[d].size,
          f = 0;
        for (; f < e; ) {
          let g = f++,
            h = this.Yf[d].data,
            k = h[g];
          k.x += a;
          k.y += b;
          k.z += c;
          h[g] = k;
        }
        ++d;
      }
    }
    ifb() {
      let a = this.qW ? 2 : 0;
      for (; a < this.size; ) {
        let b = 0,
          c = this.Yf[a].size;
        for (; b < c; ) this.Yf[a].data[b++].x *= -1;
        ++a;
      }
    }
    reset() {
      this.Mua = this.size = 0;
      this.qW = !1;
    }
    $ka(a, b, c, d) {
      c &&
        ((c = Math.min(d.length - 1, a + 2) | 0), this.IT(d[c]), this.IT(d[c]));
      for (; a <= b; ) (this.IT(d[a]), ++a);
    }
    IT(a) {
      this.size++;
      this.Yf.length < this.size && this.WKa(1, a.length);
      let b = this.Yf[this.size - 1];
      b.size != a.length &&
        (b.size < a.length &&
          m.resize(b.data, a.length, function () {
            return new H(0, 0, 0, 1);
          }),
        (b.size = a.length));
      let c = 0,
        d = a.length;
      for (; c < d; ) {
        var e = c++;
        let f = b.data[e];
        e = a[e];
        f.x = e.x;
        f.y = e.y;
        f.z = e.z;
      }
    }
    WKa(a, b) {
      let c = 0;
      for (; c < a; ) {
        ++c;
        let d = new Nu();
        d.data = m.l();
        this.Yf.push(d);
        let e = 0;
        for (; e < b; ) (++e, d.data.push(new H(0, 0, 0, 1)));
        d.size = b;
      }
    }
  }
  wu.g = "FD";
  Object.assign(wu.prototype, { j: wu });
  class Nu {
    constructor() {
      this.size = 0;
      this.data = null;
    }
  }
  Nu.g = "FE";
  Object.assign(Nu.prototype, { j: Nu });
  class Gc {
    constructor() {
      this.Wsa = m.l();
      this.Vsa = m.l();
      this.waa = m.l();
      this.JB = m.l();
      this.Yu = m.l();
      this.Gk = m.l();
      this.yg = m.l();
      this.td = m.l();
      this.VUa = 0;
    }
    Dla(a) {
      this.td.length = 0;
      m.addRange(this.td, a);
    }
    Jf(a) {
      let b = this.td.length;
      m.cd(this.td, a) == b &&
        (a.Sf.addListener(w(this, this.Sf)),
        a.ng.addListener(w(this, this.ng)),
        a.qK.addListener(w(this, this.pK)),
        a.AA.addListener(w(this, this.AA)),
        a.zA.addListener(w(this, this.zA)),
        a.ur.addListener(w(this, this.ur)),
        a.Jw.addListener(w(this, this.Jw)),
        a.sS.addListener(w(this, this.sS)),
        a.tS.addListener(w(this, this.tS)),
        a.WF(this.td));
    }
    xxa() {
      this.td.length = 0;
      this.Yu.length = 0;
      this.JB.length = 0;
    }
    ym(a) {
      let b = this.td.length - 1;
      for (; b >= 0; )
        (this.td[b] == a &&
          (J.remove(this.td, a), this.tKa(a, this.Yu), this.tKa(a, this.JB)),
          --b);
    }
    Kh(a, b, c) {
      c == null && (c = !1);
      let d = new Mu();
      d.type = a;
      d.YC = b.YC;
      d.data = b.data;
      d.model = a == 7 ? b.Pd : b.model;
      d.Pd = d.model.Vb.Pd;
      d.eb = c;
      a == 13 ? this.JB.push(d) : this.Yu.push(d);
    }
    qlb(a) {
      this.Kh(2, a, !0);
      a = 0;
      let b = this.td;
      for (; a < b.length; ) b[a++].Vqa = this.VUa;
    }
    Gx() {
      let a = this.td.length,
        b = (this.Gk.length = 0);
      for (; b < a; ) {
        let c = b++;
        this.Gk.push(this.td[c].Fc);
        Gc.Jma(this.Gk[c], this.td[c]);
      }
    }
    ia() {
      this.Gx();
      this.bob();
    }
    reset() {
      this.JB.length = 0;
      this.Yu.length = 0;
    }
    Sf(a) {
      this.Kh(9, a);
    }
    ng(a) {
      this.Kh(10, a);
    }
    pK(a) {
      this.Kh(11, a);
    }
    AA(a) {
      this.Kh(12, a);
    }
    zA(a) {
      this.Kh(13, a);
    }
    ur(a) {
      this.Kh(14, a);
    }
    Jw(a) {
      this.Jf(a);
      this.yg.push(a);
      this.Kh(15, a.Vb);
    }
    sS(a) {
      this.Kh(2, a);
    }
    tS(a) {
      this.Kh(3, a);
    }
    bob() {
      this.yg.length = 0;
      this.exa(this.td, this.Vsa);
      for (var a = 0, b = this.Yu; a < b.length; ) {
        var c = b[a];
        ++a;
        c.model != null && c.model.da.VZa(c.type);
      }
      a = this.Yu.length = 0;
      for (b = this.waa; a < b.length; ) {
        var d = b[a];
        ++a;
        c = d.model;
        d = d.YL;
        c != null && d != null && c.SNa(d.Cl.actions);
      }
      this.yg.length > 0 && this.exa(this.yg, this.Wsa);
      this.x0a();
      this.rxa(this.td, this.Vsa);
      this.yg.length > 0 && this.rxa(this.yg, this.Wsa);
      this.JB.length > 0 &&
        (m.addRange(this.Yu, this.JB), (this.JB.length = 0));
    }
    oL(a, b) {
      let c = b.length;
      if (0 < c) {
        let d = m.l(),
          e = 0;
        for (; e < b.length; ) d.push(b[e++].animation);
        a = a.sf.oL(d);
        if (-1 < a && a < c) return b[a];
      }
      return null;
    }
    Oua(a, b) {
      let c = a.animation.priority,
        d = b.length > 0 ? b[0].animation.priority : 0;
      c >= d && (c > d && (b.length = 0), b.push(a));
    }
    IK(a, b, c) {
      c == null && (c = !1);
      let d = m.l(),
        e = null,
        f = m.l(),
        g = m.l(),
        h,
        k = 0,
        l = b.length;
      for (; k < l; )
        ((h = b[k++]),
          c || !h.eb || h.animation.aia || d.push(h),
          h.animation.aia ? this.Oua(h, g) : this.Oua(h, f));
      f.length > 0 && (e = f[vf.Dja(f.length)]);
      g.length > 0 && a.plb(g[vf.Dja(g.length)].animation);
      d.length > 0
        ? (e != null && d.push(e), this.klb(a, d))
        : e != null &&
          (e.animation.SS
            ? a.yJa(e.animation, e.Z1)
            : Gc.jtb(a, this.Gk[e.index], e.animation, e.sign),
          (a.GY = e.animation.type),
          (a.xza = e.L_));
    }
    klb(a, b) {
      var c = b.length;
      if (c > 0) {
        for (var d = 0, e = 0; e < c; ) {
          var f = b[e++],
            g = f.animation.X7;
          let h = !0,
            k = 0,
            l = b;
          for (; k < l.length; )
            if (!g.rdb(l[k++].animation)) {
              h = !1;
              break;
            }
          h && ((b[d] = f), ++d);
        }
        c = b.length;
        d < c &&
          (m.resize(b, d, function () {
            return new Ui();
          }),
          (c = d));
      }
      if (c > 0) {
        e = d = 0;
        for (c = b.length; e < c; )
          ((f = b[e++]),
            f.animation.va.Ys.length != 0
              ? ((a.Fc.CK = f.animation.Al),
                (a.Fc.Zl = f.animation.CD(a.Fc, a.da.jd())),
                (a.Fc.dI = f.animation.va.align.bF),
                f.animation.sw(a.Fc, f.animation.va.Ys, f.wza) &&
                  ((b[d] = f), ++d))
              : ((b[d] = f), ++d));
        c = b.length;
        d < c &&
          m.resize(b, d, function () {
            return new Ui();
          });
      }
      e = this.oL(a, b);
      if (e != null) {
        d = m.l();
        e = e.animation.oJ();
        for (c = 0; c < b.length; )
          ((f = b[c]),
            ++c,
            (g = f.animation.oJ()),
            e != null && g != null ? g.ycb(e.zn) && d.push(f) : d.push(f));
        this.IK(a, d, !0);
      }
    }
    exa(a, b) {
      for (var c = (b.length = 0), d = a.length; c < d; ) (++c, b.push(m.l()));
      let e = 0,
        f = this.Yu.length;
      for (; e < f; ) {
        c = this.Yu[e++];
        let g = 0,
          h = a.length;
        for (; g < h; ) {
          let k = g++;
          d = a[k];
          d.xza = 0;
          d.GY = "EAnimationNone";
          this.XZa(c, d, d.Xu.nea(c.type), k, b);
          this.P_a(c, d, d.MB.Cfa(c.type), k);
        }
      }
    }
    XZa(a, b, c, d, e) {
      let f,
        g,
        h = 0,
        k = c.length;
      for (; h < k; ) {
        f = c[h++];
        let n = 0,
          q = f.va.Hc.length;
        for (; n < q; )
          if (
            ((g = f.va.Hc[n++]),
            !Gc.fcb(f, e[d]) &&
              Gc.bHa(a.model, b, g.Pb) &&
              Gc.wEa(g, this.Gk[d], a))
          ) {
            this.Gk[d].CK = f.Al;
            var l = b.jb != null ? f.CD(this.Gk[d], b.da.jd()) : 1;
            this.Gk[d].Zl = l;
            this.Gk[d].dI = f.va.align.bF;
            a.type == 2 && a.eb && (this.Gk[d].jm = !1);
            if (f.aA(b, null, g)) {
              if (
                a.eb &&
                f.type == "EAnimationAttack" &&
                ((l = b.jb),
                b.parameters.Gj &&
                  b.parameters.qR &&
                  l != null &&
                  l.parameters.hd / l.parameters.ao <= v.D4.hwa)
              )
                continue;
              l = new Ui();
              l.animation = f;
              l.sign = this.Gk[d].Zl;
              l.Z1 = a.type == 6;
              l.L_ = a.type;
              l.eb = a.eb;
              l.index = d;
              l.wza = g;
              e[d].push(l);
            }
            a.type == 2 && a.eb && (this.Gk[d].jm = !0);
          }
      }
    }
    P_a(a, b, c, d) {
      let e,
        f,
        g = 0,
        h = c.length;
      for (; g < h; ) {
        e = c[g++];
        let k = 0,
          l = e.Cl.Hc.length;
        for (; k < l; )
          ((f = e.Cl.Hc[k++]),
            Gc.bHa(a.model, b, f.Pb) &&
              Gc.wEa(f, this.Gk[d], a) &&
              (a.type == 2 && a.eb && (this.Gk[d].jm = !1),
              e.aA(b, null, f) && (e.aA(b, null, f), this.YXa(e, b)),
              a.type == 2 && a.eb && (this.Gk[d].jm = !0)));
      }
    }
    rxa(a, b) {
      let c = 0,
        d = a.length;
      for (; c < d; ) {
        let f = c++;
        var e = void 0;
        b.length > f
          ? ((e = b[f]), (e = !(e == null || e.length == 0)))
          : (e = !1);
        e && this.IK(a[f], b[f]);
      }
    }
    YXa(a, b) {
      this.waa.push(new Ou(a, b));
    }
    x0a() {
      this.waa.length = 0;
    }
    tKa(a, b) {
      let c = b.length - 1;
      for (; c >= 0; ) (b[c].model == a && m.ye(b, c), --c);
    }
    static fcb(a, b) {
      let c = 0;
      for (; c < b.length; ) if (a == b[c++].animation) return !0;
      return !1;
    }
    static wEa(a, b, c) {
      c.rb = b;
      return a.compare(c);
    }
    static Jma(a, b) {
      var c = ca.Ka(),
        d = b.jb,
        e = b.ff(3),
        f = b.ff(4);
      let g = b.ff(6),
        h = "FightNone";
      c != null &&
        ((h = c.Da.type),
        c.tb.$ea(b, a.bja),
        c.tb.$6a(b, a.i4a),
        d != null
          ? (c.tb.$ea(d, a.b4), c.tb.$ea(d, a.Iza))
          : ((a.b4.length = 0), (a.Iza.length = 0)));
      a.xr = b;
      a.IA = b.parameters.Yk();
      a.qz = d != null ? d.parameters.Yk() : null;
      a.Wo = h;
      a.OL = b.Cb;
      a.xcb = d != null;
      a.sign = b.jd();
      a.Xla = d != null ? d.jd() : 1;
      a.Yla = e != null ? e.jd() : 1;
      a.awb = f != null ? f.jd() : 1;
      a.keys = b.Vea(a.sign);
      a.xb = b.X0();
      a.Z3a = d != null ? d.X0() : null;
      a.$ib = e != null ? e.X0() : null;
      a.qb = b.parameters.qb;
      a.oE = b.rJ();
      a.Ke = b.Ke;
      a.Zga = b.Nd.qk;
      a.PEa = d != null && d.Nd != null && d.Nd.qk;
      a.QEa = e != null && e.Nd != null && e.Nd.qk;
      a.gea = b.Nd.frameCount;
      a.mh = b.parameters.mh;
      a.zd = b.parameters.zd;
      a.Oq = b.parameters.Oq;
      a.jm = b.jm;
      a.pw = b.Cb.ig.x | 0;
      a.MDa = b.parameters.hd;
      a.NDa = b.parameters.ao;
      a.twa = b.S0();
      a.el = b.dh;
      a.rJa = b.da.Ge();
      a.sza = d != null ? d.da.Ge() : null;
      a.QIa = e != null && e.da != null ? e.da.Ge() : null;
      a.X_a = f != null ? f.da.Ge() : null;
      c = new ja(a.cI);
      Gc.FT(c, a.Pb, b);
      a.cI = c.G;
      b = new ja(a.P3);
      Gc.FT(b, a.e4, e);
      a.P3 = b.G;
      e = new ja(a.G_);
      Gc.FT(e, a.Pd, d);
      a.G_ = e.G;
      d = new ja(a.vZ);
      Gc.FT(d, a.cf, f);
      a.vZ = d.G;
      f = new ja(a.H_);
      Gc.FT(f, a.Jda, g);
      a.H_ = f.G;
    }
    static jtb(a, b, c, d) {
      let e = !1,
        f = -1,
        g = 0,
        h = c.va.y6;
      for (; g < h.length; ) {
        let k = h[g];
        ++g;
        if (k.ncb(b)) {
          k.bE && (e = !0);
          f = k.uD;
          break;
        }
      }
      a.uJa(c, d, e, f);
    }
    static bHa(a, b, c) {
      return c == 5 ||
        (c == 1 && b == a) ||
        (c == 2 && b != a) ||
        (c == 3 && a == b.lb) ||
        (c == 4 && a == b.ff(4))
        ? !0
        : c == 6
          ? a == b.ff(6)
          : !1;
    }
    static FT(a, b, c) {
      if (c != null) {
        if (c.Nd != null)
          if (c.Nd.qk) {
            var d = c.Nd.names;
            d.length > 0 && (a.G = d);
          } else ((d = c.Tj()), d != null && (a.G = d.Al));
        b.Qg = c.pa;
        b.Du.x = c.Os.left;
        b.Eu.x = c.Os.right;
      }
    }
  }
  Gc.g = "FF";
  Object.assign(Gc.prototype, { j: Gc });
  class Ou {
    constructor(a, b) {
      this.YL = a;
      this.model = b;
    }
  }
  Ou.g = "100";
  Object.assign(Ou.prototype, { j: Ou });
  class Ui {
    constructor() {
      this.wza = null;
      this.index = this.L_ = 0;
      this.Z1 = this.eb = !1;
      this.sign = 0;
      this.animation = null;
    }
  }
  Ui.g = "101";
  Object.assign(Ui.prototype, { j: Ui });
  class sa {
    static Jfa() {
      return sa.Xl;
    }
    static load() {
      sa.a0a();
      Fa.parse(sa.Nk, sa.Fsa, sa.AC, sa.Xl, sa.Fm);
      let a = 0,
        b = sa.Nk;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        X.IOa(sa.E8, c.name, c);
      }
      sa.w1a();
    }
    static a0a() {
      sa.Nk.length = 0;
      X.clear(sa.E8);
      sa.Fsa.clear();
      jc.c0a();
      sa.Xl.length = 0;
      X.clear(sa.AC);
      sa.Fm.length = 0;
      Fa.B();
    }
    static w1a() {
      let a = 0,
        b = sa.Nk;
      for (; a < b.length; ) sa.v1a(b[a++], sa.Nk);
    }
    static v1a(a, b) {
      let c = a.FCa();
      if (c.length > 0) {
        let d = 0;
        for (; d < b.length; ) {
          let e = b[d];
          ++d;
          if (a.priority < e.priority) {
            let f = e.FCa();
            if (f.length > 0) {
              let g = !1,
                h = 0,
                k = c;
              for (; h < k.length; ) {
                let l = k[h++].zn,
                  n = 0,
                  q = f;
                for (; n < q.length; )
                  if (q[n++].zn.kha(l)) {
                    g = !0;
                    break;
                  }
                if (g) break;
              }
              g && a.X7.eR.push(e);
            }
          }
        }
      }
    }
    static s7a(a, b, c, d, e) {
      var f;
      f == null && (f = "FightNone");
      d == null && (d = 10);
      c == null && (c = !1);
      m.l();
      let g = new Ae();
      g.items = b;
      g.oE = c;
      g.wl = d;
      g.IA = e;
      g.qz = void 0;
      g.Wo = f;
      c = 0;
      for (d = sa.Nk; c < d.length; )
        ((e = d[c]), ++c, (b = e.va.locks), e.sw(g, b) && a.push(e));
    }
    static Vza(a, b) {
      var c = null;
      if (a.jb != null) var d = a.jb.parameters;
      else ((d = ca.Ka()), (d = d != null ? d.Zb : null));
      d != null && (c = b ? d.Oa : d.Yk());
      var e = ca.Ka() != null ? ca.Ka().Da.type : "FightNone";
      m.l();
      d = new Ae();
      d.xr = a;
      d.items = a.parameters.qt();
      d.oE = a.rJ();
      d.wl = a.parameters.wl;
      d.IA = b ? a.Nf().parameters.Oa : a.Nf().parameters.Yk();
      d.qz = c;
      d.Wo = e;
      c = 0;
      for (e = sa.Nk; c < e.length; ) {
        let f = e[c];
        ++c;
        b = f.va.locks;
        f.sw(d, b) &&
          ((a.parameters.jK != null && f.qZ(a.parameters.jK)) || a.me.push(f));
      }
    }
    static y4a(a, b) {
      var c = b ? a.parameters.Oa : a.parameters.Yk(),
        d = null;
      a.jb != null &&
        a.jb.parameters != null &&
        (d = b ? a.jb.parameters.Oa : a.jb.parameters.Yk());
      var e = ca.Ka() != null ? ca.Ka().Da.type : "FightNone";
      b = a.Po;
      b.length = 0;
      let f = new Ae();
      f.xr = a;
      f.items = a.parameters.Uea();
      f.oE = a.rJ();
      f.wl = a.parameters.wl;
      f.IA = c;
      f.qz = d;
      f.Wo = e;
      c = 0;
      for (d = sa.Fm; c < d.length; )
        ((e = d[c]), ++c, (a = e.Cl.locks), e.sw(f, a) && b.push(e));
    }
    static BAa(a, b) {
      let c = 0,
        d = a.length;
      for (; c < d; ) sa.Cz(a[c++], b);
    }
    static Cz(a, b) {
      X.Xa(sa.AC, a) &&
        (b.length == 0
          ? m.addRange(b, sa.AC.get(a).children)
          : m.Zaa(b, sa.AC.get(a).children));
    }
    static x9a(a) {
      return X.Xa(sa.AC, a) ? sa.AC.get(a) : null;
    }
    static A9a(a, b, c, d) {
      var e = !1;
      d == null && (d = 10);
      e == null && (e = !1);
      let f = m.l();
      sa.s7a(f, b, e, d, c);
      b = 0;
      for (c = sa.Xl; b < c.length; ) {
        d = c[b];
        ++b;
        e = 0;
        let g = f;
        for (; e < g.length; ) d.dr == g[e++] && a.push(d);
      }
    }
    static Tea(a) {
      let b = new Ia();
      X.wh(sa.E8, a, b);
      return b.G;
    }
    static IJa(a) {
      let b = 0;
      for (; b < a.length; ) a[b++].preload();
    }
  }
  sa.g = "102";
  class zd {
    constructor() {
      this.a2 = !1;
      this.kv = 0;
      this.released = m.l();
      this.Hh = m.l();
      this.th = m.l();
    }
    set(a) {
      this.clear();
      this.th.length = 0;
      m.addRange(this.th, a.th);
      m.addRange(this.Hh, a.Hh);
      m.addRange(this.released, a.released);
      this.kv = a.kv;
    }
    Ib() {
      let a = new zd();
      a.th = m.Ib(this.th);
      a.Hh = m.Ib(this.Hh);
      a.released = m.Ib(this.released);
      a.kv = this.kv;
      a.a2 = this.a2;
      return a;
    }
    reverse(a) {
      a < 0 && (zd.Qha(this.Hh), zd.Qha(this.th), zd.Qha(this.released));
    }
    kha(a) {
      return zd.oca(this.th, a.th) && zd.oca(this.Hh, a.Hh)
        ? zd.oca(this.released, a.released)
        : !1;
    }
    clear() {
      this.Hh.length = 0;
      this.kv = this.released.length = 0;
    }
    Lob() {
      if (this.th.length == 1) this.kv = 0;
      else {
        for (var a = 0, b = this.th; a < b.length; ) {
          let c = b[a++],
            d = 0,
            e = this.Hh;
          for (; d < e.length; )
            if (c == e[d++]) {
              this.kv = 0;
              return;
            }
        }
        this.kv = 1;
      }
    }
    static oca(a, b) {
      return zd.$ab(b, a);
    }
    static $ab(a, b) {
      var c = a.length;
      if (b.length <= c) {
        let e = m.l();
        for (var d = 0; d < c; ) (++d, e.push(!1));
        for (c = 0; c < b.length; ) {
          d = b[c++];
          let f = !1,
            g = 0,
            h = a.length;
          for (; g < h; ) {
            let k = g++;
            if (e[k] == 0 && d == a[k]) {
              f = !0;
              e[k] = !0;
              break;
            }
          }
          if (!f) return !1;
        }
        return !0;
      }
      return !1;
    }
    static Qha(a) {
      let b = 0,
        c = a.length;
      for (; b < c; ) {
        let d = b++;
        switch (a[d]) {
          case 2:
            a[d] = 8;
            break;
          case 3:
            a[d] = 7;
            break;
          case 4:
            a[d] = 6;
            break;
          case 6:
            a[d] = 4;
            break;
          case 7:
            a[d] = 3;
            break;
          case 8:
            a[d] = 2;
        }
      }
    }
  }
  zd.g = "103";
  Object.assign(zd.prototype, { j: zd });
  class jc {
    constructor() {
      this.S2 = new Pu();
      this.WX = null;
      this.Al = m.l();
      this.X7 = new Qu();
      this.Mk = null;
      this.Jpa = 0;
      this.Esa = !1;
      this.GX = 0;
      this.HX = null;
      this.Eta = this.VG = !1;
      this.Kua = this.Poa = null;
      this.XX = m.l();
      this.fX = 0;
      this.wva = !1;
      this.hOa = 0;
      this.Ida = this.kHa = this.aia = !1;
      this.ucb = !0;
      this.mha = this.SS = !1;
      this.va = new Ul();
      this.name = this.fileName = this.Sza = null;
      this.bK = this.priority = this.id = this.wx = this.Mj = 0;
      this.type = "EAnimationNone";
      this.gU = new Nl();
      this.yC = null;
      this.va.align = new Vi();
      this.va.align.nh = !1;
      this.va.align.$E = -1;
      this.va.wj.nh = !1;
    }
    g1() {
      if (this.yC == null) {
        this.yC = m.l();
        let a = 0,
          b = P.pOa;
        for (; a < b; ) (++a, this.yC.push(m.l()));
      }
      return this.yC;
    }
    init() {
      this.va.wbb();
      this.va.obb();
      this.Mk != null && this.Mk.length > 0 && (this.fX = this.Mk[0].length);
    }
    w7a(a, b, c, d) {
      b.length = 0;
      let e = (c.length = 0),
        f = this.va.xb;
      for (; e < f.length; ) {
        let g = f[e];
        ++e;
        let h = g.finish <= this.Mj ? g.finish : this.Mj;
        (g.start >= this.wx ? g.start : this.wx) <= a && a <= h
          ? (d != null && d.contains(g.type)) || b.push(g)
          : a - 1 == h && ((d != null && d.contains(g.type)) || c.push(g));
      }
    }
    sw(a, b, c) {
      b = b != null ? b : this.va.rb;
      c != null && ((a.VZ = c), (c.rb = a));
      for (c = 0; c < b.length; ) if (!b[c++].he(a)) return !1;
      return !0;
    }
    aA(a, b, c) {
      b = b != null ? b : this.va.rb;
      let d = 0,
        e = b.length;
      for (; d < e; ) {
        let h = b[d++],
          k = h.fl;
        var f = h.bfa(a, k);
        if (f == null) return !1;
        var g = f.Fc;
        c != null && ((g.VZ = c), (c.rb = g));
        h.hla(1);
        g = !1;
        h.type == 8
          ? ((f = h), f != null && (g = f.vEa(a.Fc)))
          : (g = h.tEa(f, this));
        if (!g) return ((h.fl = k), !1);
        h.fl = k;
      }
      return !0;
    }
    jfb(a, b) {
      if (0 < a.length && 2 < b.size) {
        let e = b.Mh(2).size,
          f,
          g;
        let h = 2,
          k = b.size;
        for (; h < k; ) {
          let l = h++,
            n = 0,
            q = a.length;
          for (; n < q; ) {
            var c = n++;
            if (a[c].first < e && a[c].second < e) {
              var d = b.Mh(l).data[a[c].first];
              f = d.x;
              g = d.y;
              d = d.z;
              let r = b.Mh(l).data[a[c].first],
                t = b.Mh(l).data[a[c].second];
              r.x = t.x;
              r.y = t.y;
              r.z = t.z;
              c = b.Mh(l).data[a[c].second];
              c.x = f;
              c.y = g;
              c.z = d;
            }
          }
        }
      }
    }
    $ka(a, b, c) {
      a.$ka(b > -1 ? b : this.wx, this.Mj, c, this.Mk);
    }
    Fja() {
      let a = this.fileName;
      a != null &&
        a != "" &&
        (this.ACa() == null
          ? (this.tmb(this.Sza), jc.HY.push(new Ru(this.fileName, this.Mk)))
          : this.Ydb(this.ACa()));
    }
    ova(a) {
      m.cd(this.Al, a);
    }
    Yaa(a) {
      this.va != null &&
        (this.YWa(a.Hc),
        this.PWa(a.Ys),
        this.Uaa(a.rb),
        this.fXa(a.xb),
        this.nXa(a.locks),
        this.VXa(a.y6),
        this.Raa(a.actions),
        !this.va.LF.nh && a.LF.nh && (this.va.LF = a.LF),
        !this.va.align.nh && a.align.nh && (this.va.align = a.align),
        !this.va.wj.nh && a.wj.nh && (this.va.wj = a.wj));
    }
    nXa(a) {
      m.addRange(this.va.locks, a);
    }
    VXa(a) {
      m.addRange(this.va.y6, a);
    }
    Raa(a) {
      m.addRange(this.va.actions, a);
    }
    YWa(a) {
      m.addRange(this.va.Hc, a);
    }
    PWa(a) {
      m.addRange(this.va.Ys, a);
    }
    Uaa(a) {
      m.addRange(this.va.rb, a);
    }
    fXa(a) {
      let b = 0;
      for (; b < a.length; ) a[b++].Dva = this.Mj;
      m.addRange(this.va.xb, a);
    }
    tmb(a) {
      a = Ja.x5a(a);
      a != null && this.qmb(a);
    }
    qmb(a) {
      a = new cd(a);
      let b;
      this.Mk = m.l();
      if (a.fa() == 1) {
        b = a.fa();
        for (var c = 0, d = b; c < d; ) {
          var e = a.ie(),
            f = m.l();
          this.Mk[c++] = f;
          for (var g = 0; g < e; )
            f[g++] = new H(a.Zd() / 16, -(a.Zd() / 16), a.Zd() / 16, 1);
        }
      } else
        for (b = a.wi(), c = 0, d = b; c < d; )
          for (a.fa(), e = a.wi(), f = m.l(), this.Mk[c++] = f, g = 0; g < e; )
            f[g++] = new H(a.WK(), -a.WK(), a.WK(), 1);
      this.Mj == 0 && (this.Mj = b - 1);
    }
    Ydb(a) {
      a != null &&
        a.container != null &&
        ((this.Mk = a.container),
        this.Mj == 0 && (this.Mj = this.Mk.length - 1));
    }
    BF(a, b, c, d) {
      var e = null,
        f = this.va.align.$E;
      f >= 0 && f < a.Va.OF.length && (e = a.Va.OF[f]);
      this.Gx(this.va.rb, a, b, c, d, e);
      0 < this.va.Ys.length && this.Gx(this.va.Ys, a, b, c, d, e);
      this.va.wj.from.lB(a, b, null, c, d);
      this.va.wj.to.lB(a, b, null, c, d);
      this.GX != 0 && this.HX.lB(a, b, null, c, d);
      e = 0;
      for (f = this.va.actions; e < f.length; ) {
        let g = f[e];
        ++e;
        g.type == 5 && g.mB(a, b, null, c, d);
      }
    }
    Gx(a, b, c, d, e, f) {
      let g = 0;
      for (; g < a.length; ) {
        var h = a[g];
        ++g;
        if (h.type == 2) {
          let k = h;
          if (k != null) k.mB(b, c, f, d, e);
          else throw 26;
        }
        if (h.type == 21)
          if (h != null) h.mB(b, c, f, d, e);
          else throw 27;
        else if (h.type == 8)
          if (h != null) this.Gx(h.rb, b, c, d, e, f);
          else throw 28;
      }
    }
    qI(a) {
      let b = 0;
      for (; b < a.length; ) {
        var c = a[b];
        ++b;
        c.type == 2
          ? c != null && c.Zo()
          : c.type == 21
            ? c != null && c.Zo()
            : c.type == 8 && c != null && this.qI(c.rb);
      }
    }
    Zo() {
      this.qI(this.va.rb);
      this.qI(this.va.Ys);
      var a = 0;
      let b = this.va.actions;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        c.type == 5 && c.yxa();
      }
      this.va.wj.from.$y();
      this.va.wj.to.$y();
      a = this.HX;
      a != null && a.$y();
    }
    CD(a, b) {
      return this.va.wj.nh ? this.va.wj.gCa(a) : b;
    }
    w0(a) {
      let b = 0,
        c = 0,
        d = this.va.xb;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        e.type == 4 && b < e.finish && (b = e.finish);
      }
      a && (b = this.p0(b + 1) - 1);
      return b;
    }
    JBa(a) {
      let b = 0,
        c = 0,
        d = this.va.xb;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        a.includes(e.name) && b < e.finish && (b = e.finish);
      }
      return 0 < b ? (b = this.p0(b + 1)) : 0;
    }
    fJ() {
      return this.JBa(P.O$a());
    }
    cfa() {
      return this.JBa(P.N$a());
    }
    oJ() {
      return jc.NAa(this.va.rb);
    }
    FCa() {
      let a = m.l();
      jc.PAa(this.va.rb, a);
      return a;
    }
    bl(a) {
      return this.name != a ? this.m2(a) : !0;
    }
    m2(a) {
      let b = 0,
        c = this.Al.length;
      for (; b < c; ) if (this.Al[b++] == a) return !0;
      return !1;
    }
    qZ(a) {
      let b = 0,
        c = this.Al;
      for (; b < c.length; ) {
        let d = c[b++],
          e = 0,
          f = a;
        for (; e < f.length; ) if (d == f[e++]) return !0;
      }
      return !1;
    }
    Qub(a) {
      this.WX = a;
    }
    btb(a) {
      this.XX.length = 0;
      a != null && m.addRange(this.XX, a.split("|"));
    }
    ED(a) {
      let b = 0;
      var c = 0;
      let d = this.va.xb;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        "Uninterrupt" == e.name && b < e.finish && (b = e.finish);
      }
      c = this.Mj;
      c < b && (b = c);
      a && (b = this.p0(b + 1) - 1);
      return b;
    }
    K7a() {
      var a;
      a == null && (a = !1);
      debugger;
      let b = 0;
      var c = 0;
      let d = this.va.xb;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        "SelfUninterrupt" == e.name && b < e.finish && (b = e.finish);
      }
      c = this.Mj;
      c < b && (b = c);
      a && (b = this.p0(b + 1) - 1);
      return b;
    }
    p0(a) {
      return (a - this.wx + 1) * (this.bK + 1) + 1;
    }
    f7a(a) {
      return this.wx - 1 + (((a - 1) / (this.bK + 1)) | 0);
    }
    $fa() {
      let a = this.Kua;
      return new H(a.x, a.y, a.z, 1);
    }
    Tub(a) {
      this.Kua = new H(a.x, a.y, a.z, 1);
    }
    P9a() {
      let a = this.Poa;
      return new H(a.x, a.y, a.z, 1);
    }
    ytb(a) {
      this.Poa = new H(a.x, a.y, a.z, 1);
    }
    Hub(a) {
      this.Eta = a;
    }
    Gub(a) {
      this.HX = a;
    }
    hub(a) {
      this.Esa = a;
    }
    Fub(a) {
      this.GX = a;
    }
    Kcb(a) {
      let b = 0,
        c = this.va.xb;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.name == "Uninterrupt" && d.start <= a && a <= d.finish) return !0;
      }
      return !1;
    }
    Lcb(a) {
      return this.Kcb(this.f7a(a));
    }
    LQ(a) {
      return this.va != null ? this.va.LQ(a) : null;
    }
    gub(a) {
      this.VG = a;
    }
    Gtb(a) {
      this.Jpa = a;
    }
    i$a() {
      return this.Mk[this.wx];
    }
    ACa() {
      let a = this;
      return m.gn(jc.HY, function (b) {
        return a.fileName == b.fileName;
      });
    }
    static NAa(a) {
      let b = 0;
      for (; b < a.length; ) {
        var c = a[b];
        ++b;
        if (c.type == 8) {
          if (c != null && ((c = jc.NAa(c.rb)), c != null)) return c;
        } else if (((c = jc.pEa(c)), c != null)) return c;
      }
      return null;
    }
    static PAa(a, b) {
      let c = 0;
      for (; c < a.length; ) {
        var d = a[c];
        ++c;
        d.type == 8
          ? d != null && jc.PAa(d.rb, b)
          : ((d = jc.pEa(d)), d != null && b.push(d));
      }
    }
    static pEa(a) {
      return a.type == 4 ? a : null;
    }
    static c0a() {
      let a = 0,
        b = jc.HY;
      for (; a < b.length; ) b[a++].container = null;
      jc.HY.length = 0;
    }
  }
  jc.g = "104";
  Object.assign(jc.prototype, { j: jc });
  class Ul {
    constructor() {
      this.wj = new Wi();
      this.align = new Vi();
      this.LF = new Vl();
      this.actions = m.l();
      this.y6 = m.l();
      this.locks = m.l();
      this.xb = m.l();
      this.Ys = m.l();
      this.rb = m.l();
      this.Hc = m.l();
    }
    wbb() {
      let a = 0,
        b = this.xb.length;
      for (; a < b; ) this.xb[a++].init();
    }
    obb() {
      var a = this.align.HK;
      if (a != null && a.length > 2) {
        let b = a.length - 1,
          c = a.charAt(b);
        a = a.charAt(b - 1);
        c == "1" && a == "_"
          ? (this.align.bF = 1)
          : c == "2" && a == "_" && (this.align.bF = 2);
      }
    }
    LQ(a) {
      let b = 0,
        c = this.Hc.length;
      for (; b < c; ) {
        let d = b++;
        if (this.Hc[d].type == a) return this.Hc[d];
      }
      return null;
    }
  }
  Ul.g = "105";
  Object.assign(Ul.prototype, { j: Ul });
  class Pu {
    constructor() {
      this.wq = new rb("", "");
      this.Wj = !0;
    }
    bsb(a) {
      if (a != null && a != "") {
        let b,
          c = a.length;
        b = nf(a, c - 1, 1);
        b += a.charAt(c - 1) == "1" ? "2" : "1";
        this.wq = new rb(a, b);
        this.Wj = !1;
      } else ((this.wq = new rb("", "")), (this.Wj = !0));
    }
  }
  Pu.g = "106";
  Object.assign(Pu.prototype, { j: Pu });
  class Qu {
    constructor() {
      this.eR = m.l();
    }
    rdb(a) {
      let b = 0,
        c = this.eR.length;
      for (; b < c; ) if (this.eR[b++] == a) return !1;
      return !0;
    }
  }
  Qu.g = "107";
  Object.assign(Qu.prototype, { j: Qu });
  class Ru {
    constructor(a, b) {
      this.fileName = a;
      this.container = b;
    }
  }
  Ru.g = "108";
  Object.assign(Ru.prototype, { j: Ru });
  class Vi {
    constructor() {
      this.nh = !1;
      this.oja = this.pja = 0;
      this.dja = this.l4 = 1;
      this.HK = this.nja = this.Qla = "";
      this.iI = this.jI = this.TY = !1;
      this.bF = 0;
      this.$E = this.cja = this.ZS = this.mja = -1;
      this.aF = this.OK = "EObjectNone";
    }
  }
  Vi.g = "109";
  Object.assign(Vi.prototype, { j: Vi });
  class Vl {
    constructor() {
      this.animationName = "";
      this.nh = this.Apb = !1;
    }
  }
  Vl.g = "10A";
  Object.assign(Vl.prototype, { j: Vl });
  class Wi {
    constructor() {
      this.ig = 0;
      this.to = new ee();
      this.from = new ee();
      this.nh = !1;
    }
    gCa(a) {
      return (this.ig != 0
        ? this.ig == 1
          ? a.pw
          : a.pw * -1
        : this.to.TQ(a) - this.from.TQ(a)) >= 0
        ? 1
        : -1;
    }
    static Krb(a) {
      let b = 0;
      a != null &&
        a.name == "Impulse" &&
        (b = 0 < u.I(a.attributes.get("Reverse")) ? 2 : 1);
      return b;
    }
  }
  Wi.g = "10B";
  Object.assign(Wi.prototype, { j: Wi });
  class ta {
    static init() {
      ta.oe = new Map();
      ta.bi = new Map();
      ta.Cs = new Map();
      ta.oe.set("RoundStage", 1);
      ta.oe.set("Keys", 4);
      ta.oe.set("Distance", 2);
      ta.oe.set("Direction", 21);
      ta.oe.set("Weapon", 5);
      ta.oe.set("Player", 6);
      ta.oe.set("Health", 7);
      ta.oe.set("Operator", 8);
      ta.oe.set("CurrentInterval", 9);
      ta.oe.set("CurrentAnimation", 10);
      ta.oe.set("PhysicsFrameNumber", 11);
      ta.oe.set("RoundResult", 12);
      ta.oe.set("Item", 13);
      ta.oe.set("Perk", 15);
      ta.oe.set("Bullets", 14);
      ta.oe.set("Birth", 16);
      ta.oe.set("Name", 17);
      ta.oe.set("Screen", 18);
      ta.oe.set("ModelMirrored", 19);
      ta.oe.set("ModExists", 20);
      ta.oe.set("BattleType", 22);
      ta.oe.set("BossAbilityState", 23);
      ta.oe.set("Hit", 24);
      ta.oe.set("ModelExists", 25);
      ta.bi.set("Up", 1);
      ta.bi.set("Up-Forward", 2);
      ta.bi.set("Forward", 3);
      ta.bi.set("Down-Forward", 4);
      ta.bi.set("Down", 5);
      ta.bi.set("Down-Back", 6);
      ta.bi.set("Back", 7);
      ta.bi.set("Up-Back", 8);
      ta.bi.set("Punch", 9);
      ta.bi.set("Kick", 10);
      ta.bi.set("Ranged", 11);
      ta.bi.set("Magic", 12);
      ta.bi.set("RaidCharge", 13);
      ta.bi.set("Super", 14);
      ta.Cs.set("Nodes", 1);
      ta.Cs.set("Pivot", 2);
      ta.Cs.set("Wall", 3);
      ta.Cs.set("Floor", 4);
      ta.Cs.set("MapCenter", 5);
      ta.Cs.set("COM", 6);
    }
    static clear() {
      var a = ta.oe;
      a != null && X.clear(a);
      a = ta.bi;
      a != null && X.clear(a);
      a = ta.Cs;
      a != null && X.clear(a);
      ta.oe = null;
      ta.bi = null;
      ta.Cs = null;
    }
    static MQ(a, b) {
      switch (a) {
        case 0:
          return b == null ? 0 : X.Xa(ta.bi, b) ? ta.bi.get(b) : 0;
        case 1:
          return b == null ? 0 : X.Xa(ta.Cs, b) ? ta.Cs.get(b) : 0;
        default:
          return -1;
      }
    }
    static yD(a) {
      return X.Xa(ta.oe, a) ? ta.oe.get(a) : 0;
    }
  }
  ta.g = "10C";
  class Fa {
    static parse(a, b, c, d, e) {
      ta.init();
      var f = Ja.mi(315);
      let g = f.A("Templates"),
        h = f.A("Moves");
      f = f.A("Triggers");
      Fa.Gxb(g, c);
      Fa.pfb(h, c, a, b, d);
      Fa.$xb(f, e);
      X.clear(Fa.YX);
      Fa.YX = null;
    }
    static sMa(a, b, c) {
      b = b.attributes.get("Template");
      if (b != null) {
        b = b.split("|");
        for (var d = 0, e = b.length; d < e; ) {
          let g = d++;
          var f = !1;
          let h = 0,
            k = c.length;
          for (; h < k; )
            if (b[g] == c[h++].attributes.get("Name")) {
              f = !0;
              break;
            }
          f ||
            ((f = new Ia()),
            X.wh(Fa.YX, b[g], f) &&
              (c.push(f.G), Fa.BWa(a, f.G), Fa.sMa(a, f.G, c)));
        }
      }
    }
    static BWa(a, b) {
      b = b.attributes.entries();
      let c = b.next();
      for (; !c.done; ) {
        var d = c.value;
        c = b.next();
        let e = d[0];
        d = d[1];
        if (a.attributes.get(e) == null) {
          debugger;
          a.set(e, d);
        }
      }
    }
    static pfb(a, b, c, d, e) {
      let f = m.l();
      var g = m.l();
      a = a.children;
      for (var h = 0; h < a.length; ) {
        var k = a[h++],
          l = k.attributes.get("Name"),
          n = l != null ? l : "";
        l = k.attributes.get("Labels");
        if (!Fa.Ucb(l != null ? l : null)) continue;
        l = k.attributes.get("PackName");
        if (!Fa.Vcb(l != null ? l : null)) {
          d.add(n);
          continue;
        }
        g.length = 0;
        Fa.sMa(k, k, g);
        l = new jc();
        l.name = n;
        l.id = u.I(k.attributes.get("ID"));
        n = k.attributes.get("FileName");
        l.fileName = n != null ? n : "";
        l.Sza = l.fileName.replace(RegExp("\\.bytes$", ""), "");
        l.bK = u.I(k.attributes.get("MidFrames"));
        l.wx = u.I(k.attributes.get("FirstFrame"));
        l.Mj = u.I(k.attributes.get("EndFrame"));
        l.priority = u.I(k.attributes.get("Priority"));
        l.hub(u.ka(k.attributes.get("NoMagicRecharge")));
        l.type = "EAnimationNone";
        k.attributes.get("NoWallRepulsion") != null &&
          (l.mha = u.ka(k.attributes.get("NoWallRepulsion")));
        k.attributes.get("WallRepulsion") != null &&
          (l.mha = !u.ka(k.attributes.get("WallRepulsion")));
        l.hOa = u.H(k.attributes.get("StyleFactor"), 1);
        l.SS = u.ka(k.attributes.get("Physics"));
        l.Ida = u.ka(k.attributes.get("EndsStage"));
        l.gub(u.ka(k.attributes.get("Looped"), !1));
        l.kHa = u.ka(k.attributes.get("NoInterpolationFrames"));
        l.aia = u.ka(k.attributes.get("NoAnimation"));
        l.wva = u.ka(k.attributes.get("AlignOnParentWallCollision"));
        try {
          l.Fja();
        } catch (q) {
          continue;
        }
        l.ova(l.name);
        n = k.attributes.get("MirrorNode");
        n != null && l.S2.bsb(n != null ? n : "");
        n = k.attributes.get("CameraCOMAlignStage");
        n != null && l.Gtb(jz.lCa(n != null ? n : ""));
        n = k.attributes.get("TacticWeapon");
        l.btb(n != null ? n : "");
        n = k.attributes.get("TacticEquivalent");
        n = n != null ? n : "";
        n != null && n != "" && f.push(new Ca(l, n));
        l.priority = u.I(k.attributes.get("Priority"));
        n = k.attributes.get("Type");
        n != null &&
          ((n = n != null ? n : ""),
          n == "MOVE"
            ? (l.type = "EAnimationMove")
            : n == "ATTACK" && (l.type = "EAnimationAttack"));
        Fa.wmb(g, l, b);
        Fa.Tbb(k, g, l);
        Fa.Ukb(l, k, g);
        Fa.tkb(l, k.A("Rotation"));
        l.init();
        c.push(l);
        k = k.A("Profile");
        k != null && u.ka(k.attributes.get("Show"), !1) && e.push(new Su(k, l));
      }
      for (b = 0; b < f.length; ) {
        e = f[b];
        ++b;
        d = e.first;
        e = e.second;
        g = null;
        a = 0;
        for (h = c; a < h.length; )
          if (((k = h[a]), ++a, k.name == e)) {
            g = k;
            break;
          }
        if (g != null) d.Qub(g);
        else throw 29;
      }
    }
    static Ucb(a) {
      if (a == null || lc(a) || lc("PAID")) return !0;
      let b = [],
        c = 0;
      for (a = mi(a, Fa.MTa); c < a.length; ) {
        let d = a[c];
        ++c;
        lc(d) || b.push(d);
      }
      return b.length != 0 ? b.includes("PAID") : !0;
    }
    static Vcb(a) {
      return a == null || lc(a) ? !0 : Mc.F().b2(a);
    }
    static $xb(a, b) {
      a = a.children;
      let c = 0;
      for (; c < a.length; ) {
        let d = a[c++],
          e = new Tu(d),
          f = new Wl();
        f.Hc = Fa.VIa(d);
        f.rb = Fa.NS("Conditions", d);
        f.locks = Fa.NS("Locks", d);
        f.actions = Fa.RIa(d);
        e.Yaa(f);
        b.push(e);
      }
    }
    static Gxb(a, b) {
      X.clear(b);
      Fa.YX = new Map();
      if (a != null) {
        a = a.children;
        for (var c = 0; c < a.length; ) {
          let d = a[c++];
          if (d.name == "Template") {
            let e = kh.Qd(d);
            b.set(e.name, e);
            Fa.YX.set(e.name, d);
          }
        }
      }
    }
    static wmb(a, b, c) {
      let d = 0,
        e = a.length;
      for (; d < e; ) {
        var f = a[d++].attributes.get("Name");
        f = f != null ? f : null;
        X.Xa(c, f) && c.get(f).od(b);
      }
      X.Xa(c, b.name) || ((a = kh.V4a(b)), c.set(a.name, a));
    }
    static Tbb(a, b, c) {
      let d = new Ul();
      d.Hc = Fa.VIa(a, b);
      d.rb = Fa.NS("Conditions", a, b);
      d.locks = Fa.NS("Locks", a, b);
      d.xb = Fa.Tjb(a, b);
      d.actions = Fa.RIa(a, b);
      d.Ys = Fa.zjb(a, b);
      let e = a.A("Transitions");
      e != null && (d.y6 = Fa.Yxb(e));
      e = a.A("Shop");
      e != null && (d.LF = Fa.jvb(e));
      Fa.cjb(d, a, b);
      Fa.Djb(d, a, b);
      c.Yaa(d);
    }
    static VIa(a, b) {
      let c = m.l();
      Fa.WIa(a.A("Events"), c);
      if (b != null) {
        a = 0;
        let d = b.length;
        for (; a < d; ) Fa.WIa(b[a++].A("Events"), c);
      }
      return c;
    }
    static WIa(a, b) {
      if (a != null)
        for (var c = a.children, d = 0; d < c.length; ) {
          let e = c[d++];
          a = lz.create(e);
          a != null && (a.init(e), b.push(a));
        }
    }
    static NS(a, b, c) {
      let d = m.l();
      Fa.Q3(b.A(a), d);
      if (c != null) {
        b = 0;
        let e = c.length;
        for (; b < e; ) Fa.Q3(c[b++].A(a), d);
      }
      return d;
    }
    static Q3(a, b) {
      if (a != null) {
        a = a.children;
        for (var c = 0; c < a.length; ) {
          let d = a[c++],
            e = Xl.create(d);
          e != null && (e.parse(d), b.push(e));
        }
      }
    }
    static zjb(a, b) {
      let c = m.l(),
        d = a.A("Tactics");
      d != null && Fa.Q3(d.A("Conditions"), c);
      let e = 0;
      for (b = b.length; e < b; )
        (++e, (d = a.A("Tactics")), d != null && Fa.Q3(d.A("Conditions"), c));
      return c;
    }
    static jvb(a) {
      let b = new Vl();
      b.Apb = a.A("RunOnStart") != null;
      a = a.A("NextAnimation").attributes.get("Name");
      b.animationName = a != null ? a : "";
      b.nh = !0;
      return b;
    }
    static Yxb(a) {
      let b = m.l();
      a = a.children;
      let c = 0;
      for (; c < a.length; ) {
        let d = a[c++],
          e = new Uu(Fa.NS("Conditions", d));
        d.attributes.get("FirstFrame") != null &&
          ((e.bE = !1), (e.uD = u.I(d.attributes.get("FirstFrame"))));
        d.attributes.get("FrameShift") != null &&
          ((e.bE = !0), (e.uD = u.I(d.attributes.get("FrameShift"))));
        b.push(e);
      }
      return b;
    }
    static Tjb(a, b) {
      let c = m.l();
      Fa.$Ia(a.A("Intervals"), c);
      if (b != null) {
        a = 0;
        let d = b.length;
        for (; a < d; ) Fa.$Ia(b[a++].A("Intervals"), c);
      }
      return c;
    }
    static $Ia(a, b) {
      if (a != null) {
        a = a.children;
        for (var c = 0; c < a.length; ) {
          let e = a[c++];
          var d = e.attributes.get("Type");
          d = fe.N0(d != null ? d : "");
          d = d == 4 ? new Yl() : new fe(d);
          d.parse(e);
          b.push(d);
        }
      }
    }
    static RIa(a, b) {
      let c = m.l();
      Fa.SIa(a.A("Actions"), c);
      if (b != null) {
        a = 0;
        let d = b.length;
        for (; a < d; ) Fa.SIa(b[a++].A("Actions"), c);
      }
      return c;
    }
    static SIa(a, b) {
      if (a != null) {
        a = a.children;
        for (var c = 0; c < a.length; ) {
          let d = mz.create(a[c++]);
          d != null && b.push(d);
        }
      }
    }
    static cjb(a, b, c) {
      a.align.nh = !1;
      b = b.A("Align");
      if (b != null) ((a.align = Fa.xva(b)), (a.align.nh = !0));
      else
        for (var d = 0, e = c.length; d < e; )
          if (((b = c[d++].A("Align")), b != null)) {
            a.align = Fa.xva(b);
            a.align.nh = !0;
            break;
          }
    }
    static xva(a) {
      let b = new Vi();
      var c = a.A("Pivot");
      let d = a.A("Position");
      var e = c.attributes.get("Object");
      e = e != null ? e : "";
      var f = d.attributes.get("Object");
      f = f != null ? f : "";
      var g = c.attributes.get("Player");
      g = g != null ? g : "Me";
      var h = d.attributes.get("Player");
      h = h != null ? h : "Me";
      var k = a.attributes.get("Axis");
      b.iI = b.jI = b.TY = !1;
      if (k == null) ((b.iI = !0), (b.jI = !0), (b.TY = !0));
      else {
        k = (k != null ? k : "").split("|");
        let l = 0;
        for (; l < k.length; ) {
          let n = k[l];
          ++l;
          n == "X"
            ? (b.iI = !0)
            : n == "Y"
              ? (b.jI = !0)
              : n == "Z" && (b.TY = !0);
        }
      }
      a = a.attributes.get("ShiftModelNode");
      a != null && (b.Qla = a != null ? a : "");
      b.dja = Od.ql(g);
      b.l4 = Od.ql(h);
      c = c.attributes.get("Part");
      b.HK = c != null ? c : "";
      c = d.attributes.get("Part");
      b.nja = c != null ? c : "";
      b.oja = u.H(d.attributes.get("ShiftX"));
      b.pja = u.H(d.attributes.get("ShiftY"));
      e == "Nodes"
        ? (b.aF = "EObjectNodes")
        : e == "Animation"
          ? (b.aF = "EObjectAnimation")
          : e == "Wall"
            ? (b.aF = "EObjectWall")
            : e == "Pivot" && (b.aF = "EObjectPivot");
      f == "Nodes"
        ? (b.OK = "EObjectNodes")
        : f == "Animation"
          ? (b.OK = "EObjectAnimation")
          : f == "Wall"
            ? (b.OK = "EObjectWall")
            : f == "Pivot" && (b.OK = "EObjectPivot");
      return b;
    }
    static Djb(a, b, c) {
      a.wj.nh = !1;
      b = b.A("SetDirection");
      if (b != null) ((a.wj = Fa.ida(b)), (a.wj.nh = !0));
      else
        for (var d = 0, e = c.length; d < e; )
          if (((b = c[d++].A("SetDirection")), b != null)) {
            a.wj = Fa.ida(b);
            a.wj.nh = !0;
            break;
          }
    }
    static ida(a) {
      let b = new Wi(),
        c = a.A("From");
      b.from.Jj(c);
      c = a.A("To");
      b.to.Jj(c);
      c = a.A("Impulse");
      b.ig = Wi.Krb(c);
      return b;
    }
    static B() {
      ta.clear();
    }
    static Ukb(a, b, c) {
      b = b.A("Velocity");
      if (b == null) {
        var d = 0;
        let e = c.length;
        for (; d < e && ((b = c[d++].A("Velocity")), b == null); );
      }
      c = new H(0, 0, 0, 1);
      d = new H(0, 0, 0, 1);
      b != null &&
        ((c.x = u.H(b.attributes.get("X"), 0)),
        (c.y = u.H(b.attributes.get("Y"), 0)),
        (c.z = u.H(b.attributes.get("Z"), 0)),
        (d.x = u.H(b.attributes.get("Ax"), 0)),
        (d.y = u.H(b.attributes.get("Ay"), 0)),
        (d.z = u.H(b.attributes.get("Az"), 0)),
        a.Hub(u.ka(b.attributes.get("SaveVelocity"))));
      a.Tub(c);
      a.ytb(d);
    }
    static tkb(a, b) {
      let c = 0;
      b != null &&
        ((c = u.H(b.attributes.get("Angle"))),
        (b = b.A("Position")),
        b != null && a.Gub(new ee(b)));
      a.Fub(c);
    }
  }
  Fa.g = "10D";
  class kh {
    constructor() {
      this.children = m.l();
      this.name = null;
    }
    od(a) {
      m.cd(this.children, a);
      a.ova(this.name);
    }
    static Qd(a) {
      let b = new kh();
      a = a.attributes.get("Name");
      b.name = a != null ? a : null;
      return b;
    }
    static V4a(a) {
      let b = new kh();
      b.name = a.name;
      b.od(a);
      return b;
    }
  }
  kh.g = "10E";
  Object.assign(kh.prototype, { j: kh });
  class Uu {
    constructor(a) {
      this.bE = !1;
      this.uD = 0;
      this.ad = a != null ? a : m.l();
    }
    ncb(a) {
      let b = 0,
        c = this.ad.length;
      for (; b < c; ) if (!this.ad[b++].he(a)) return !1;
      return !0;
    }
  }
  Uu.g = "10F";
  Object.assign(Uu.prototype, { j: Uu });
