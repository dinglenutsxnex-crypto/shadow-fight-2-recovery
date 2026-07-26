// 037-perk-areas.js
// Domain: tree-av  |  12 class(es)  |  tree root(s): av, Vt, bv, cv, ue, an, dv, ev, xl, fv
// Edit here. Run `npm run build` to reassemble the full bundle.
  class av {
    constructor() {
      this.RP = m.l();
      this.attributes = m.l();
      this.AYa = this.Yva = this.Cmb = this.Iha = 0;
      this.nodeName = this.attrName = this.nI = null;
    }
  }
  av.g = "167";
  Object.assign(av.prototype, { j: av });
  class Vt {
    constructor(a) {
      this.Eba = 0;
      this.cZ = m.l();
      this.mga = !1;
      this.Lb = this.Uf = null;
      this.Cj =
        this.Wra =
        this.qC =
        this.P9 =
        this.UW =
        this.Lo =
        this.gja =
        this.g4 =
          0;
      this.Vga = !1;
      this.cW =
        this.Hu =
        this.oo =
        this.LN =
        this.nO =
        this.Aj =
        this.Gs =
          null;
      this.fP = 0;
      this.yB = this.xo = null;
      this.go = new dd("Render");
      a.od(this.go);
    }
    I$a() {
      return this.Lb.height * this.Cj;
    }
    init(a) {
      this.Lb = a;
      this.Cj = 1;
      this.P9 = (this.Lb.height / 2 - this.Lb.jt) / 2;
      this.Awa();
      this.lXa();
      this.o1a();
      this.M1a();
      this.gja = 1;
      this.g4 = 0;
    }
    Awa() {
      let a = N.LTa;
      this.Wra = N.height / this.Lb.height;
      let b = N.width;
      N.lc > a
        ? ((N.GK = Math.round((N.width - a * N.height) / 2)),
          (b = N.lc <= a ? N.width : N.height * a))
        : (N.GK = 0);
      this.qC = b / this.Wra;
      N.lc < 1 && (this.qC *= N.lc);
      this.UW = this.qC / this.Lb.width;
    }
    Nyb(a, b, c) {
      this.sKa();
      let d = 0;
      for (; d < c; ) {
        ++d;
        let e = new bv(b, this.Lb.W2);
        e.W.C(a.x);
        e.W.D(a.y);
        e.W.la(0.3);
        this.Uf.rh.go.node.appendChild(e.W.L);
        this.cZ.push(e);
      }
      this.Eba = 0;
    }
    Ynb() {
      let a = 0,
        b = this.cZ;
      for (; a < b.length; ) b[a++].ia();
      this.Eba > 90 && this.sKa();
      this.Eba++;
    }
    sKa() {
      let a = 0,
        b = this.cZ;
      for (; a < b.length; ) b[a++].Onb();
      this.cZ.length = 0;
    }
    sXa(a, b, c) {
      c == null && (c = !0);
      return this.Uf.rh.Jf(a, b, c);
    }
    fob() {
      let a = 0,
        b = this.Lb.Gt;
      for (; a < b.length; ) b[a++].ia();
      this.WOa();
    }
    Gyb(a, b, c) {
      this.fP > ge.qba && (this.fP = 0);
      a.wa(0.5 + 0.5 * Math.sin((3.141592653589793 / ge.qba) * this.fP));
      a.C(b);
      a.D(c);
      a.Ola(-40);
      this.fP++;
    }
    dzb(a, b, c, d, e, f) {
      this.oo.axb();
      let g = this;
      d = this.oo.vJa(kg.eAa.v[d], function () {
        g.oo.R(!1);
      });
      this.oo.C(a.x);
      this.oo.D(a.y);
      this.oo.Ga();
      this.oo.la(e * 0.7);
      a = Bz(new H(b.x, b.y, 0, 1), new H(1, 0, 0, 1)) + f;
      this.oo.Xg(isNaN(a) ? 0 : -a);
      d.Rub(1 / c / 60);
      this.oo.R(!0);
    }
    visible(a) {
      this.Uf.go.setActive(a);
      this.yB.R(a);
    }
    Dl(a, b, c, d, e) {
      e == null && (e = 0);
      this.Awa();
      this.Lo = this.Lb.width / 2 - a.x;
      this.Cj = e > 0 ? e : this.MCa();
      a = 1;
      v.OC.maxWidth > 0 && (a = v.OC.maxWidth / this.Lb.width);
      a = this.UW / a;
      this.Cj < a &&
        ((this.Cj = a),
        (a = this.qC / this.Cj / 2),
        (b = -this.Lo),
        (d = this.zJa(a, d.x - this.Lb.width / 2 - b, this.g4)),
        (this.Lo += this.zJa(a, c.x - this.Lb.width / 2 - b, this.gja)),
        this.g4 > 0 && (this.Lo += d));
      this.Cj = 1;
      this.Cj = this.Vga ? this.UW : Math.max(this.Cj, this.UW);
      d = (this.Lb.width - v.OC.CGa) * this.Cj * 0.5 - this.qC * 0.5;
      if (ic.cA(this.gja, 0) || ic.cA(this.g4, 0)) this.Lo *= this.Cj;
      a = this.Lo;
      b = -d;
      this.Lo = a < b ? b : a > d ? d : a;
      d = 0;
      for (a = this.Lb.Gt; d < a.length; )
        ((b = a[d]),
          ++d,
          b.zEa() || b.kj
            ? b.setScale(this.Cj)
            : b.ssb(this.P9 * (1 - this.Cj)),
          b.rsb(this.Lo * b.fp));
      this.Gyb(
        this.yB,
        this.Lo - (this.Lb.width / 2 - c.x) * this.Cj,
        this.Lb.kn.go.node.Jb.translate.y + 2 * this.P9 * this.Cj + 10,
      );
    }
    zJa(a, b, c) {
      let d = v.OC.iwa;
      return Math.abs(b) + d > a
        ? -(b > 0 ? 1 : -1) * (Math.abs(b) - a + d) * c
        : 0;
    }
    Yyb(a, b) {
      let c = this.go.node.Jb;
      c.translate.x = a;
      c.translate.y = b;
      c.U = (c.U & -2) | 240;
    }
    KXa(a, b, c) {
      function d(n, q) {
        let r = R.aa(E.get(1305));
        r.yb("0");
        r.xc(n);
        r.Qb(h);
        r.C(q);
        r.D(-k);
        r.Ga();
        r.xeb(g);
        l.Hu.go.node.appendChild(r.L);
        return r;
      }
      this.mga = !0;
      c = (1 / (c / 60)) | 0;
      let e = [],
        f = 0;
      for (; f < 20; ) {
        let n = f++;
        e.push(n == null ? "null" : "" + n);
      }
      let g = lg.hea(e, c),
        h = 7 + 2 * this.Lb.jt,
        k = 7 + this.Lb.jt - this.Lb.height / 2,
        l = this;
      this.LN == null &&
        (this.LN = d(this.Lb.width / 2 + a, -this.Lb.width / 4 + a / 2));
      this.nO == null &&
        (this.nO = d(this.Lb.width / 2 - b, this.Lb.width / 4 + b / 2));
    }
    Lnb() {
      this.LN != null && (this.LN.B(), (this.LN = null));
      this.nO != null && (this.nO.B(), (this.nO = null));
    }
    Aca(a, b, c) {
      let d = J.substr(b, b.lastIndexOf("/") + 1, null);
      this.Aj = new Ea(null, "perkActivationArea");
      b = R.aa(E.get(1301), d, this.Aj);
      b.Ga();
      this.Hu.go.node.appendChild(this.Aj.L);
      this.Aj.R(!1);
      var e = b.ea;
      let f = e.x;
      e = e.y;
      b.Th(a / f);
      b.oj((this.Lb.height * 2) / e);
      this.Aj.D(
        this.Lb.kn.go.node.Jb.translate.y +
          (this.Lb.height / 2 - this.Lb.jt) * this.Cj +
          90 -
          (e * b.Tm) / 2,
      );
      c != null &&
        c != "" &&
        ((d = J.substr(c, c.lastIndexOf("/") + 1, null)),
        (this.Gs = R.aa(E.get(1301), d, this.Aj)),
        this.Gs.Ga(),
        (c = this.Gs.ea.y),
        (a = f / a),
        (b = e / this.Lb.height / b.Tm),
        this.Gs.Th(a),
        this.Gs.oj(a),
        this.Gs.D(c * b));
    }
    Yma(a, b) {
      b /= 255;
      this.Aj != null &&
        (this.Aj.R(!0), this.Aj.C(a), this.Aj.wa(b), this.Gs.wa(b));
    }
    Sda(a) {
      this.Aj != null &&
        ((a = this.Aj.on() - a / 255),
        a < 0 && (a = 0),
        this.Aj.wa(a),
        this.Gs.wa(a));
    }
    Wja() {
      this.Aj != null && (this.Gs.B(), this.Aj.B(), (this.Aj = this.Gs = null));
    }
    Wka(a) {
      this.xo != null && this.xo.wa(a / 255);
    }
    K1() {
      this.xo == null &&
        ((this.xo = R.Ed(-16777216, 1, 1)),
        this.xo.Ga(),
        this.xo.Th(this.Lb.width * 1.5),
        this.xo.oj(this.Lb.height * 3),
        this.xo.wa(0),
        this.Hu.go.node.appendChild(this.xo.L));
    }
    Qja() {
      this.xo != null && (this.xo.B(), (this.xo = null));
    }
    WOa() {
      var a = this.Hu.go.node.Jb,
        b = this.Lb.kn.go.node.Jb.scale;
      a.scale.x = b.x;
      a.scale.y = b.y;
      a.scale.z = b.z;
      a.U = (a.U & -6) | 240;
      a = this.Lb.kn.go.node.Jb.translate;
      b = this.Hu.go.node.Jb;
      b.translate.x = a.x;
      b.translate.y = a.y;
      b.U = (b.U & -2) | 240;
      this.Hu.ia();
    }
    fQ(a) {
      this.Uf.fQ(a);
    }
    z_(a) {
      this.Uf.z_(a);
    }
    iB() {
      this.Uf != null && this.Uf.iB();
    }
    MCa() {
      return Math.min(this.qC / (this.Uf.rh.TCa() + 300), 1);
    }
    o1a() {
      this.yB = R.aa(E.get(270), y.eRa);
      this.yB.Ga();
      this.yB.Th(0.5);
      this.yB.oj(0.5);
      this.go.node.appendChild(this.yB.L);
      this.fP = 0;
    }
    M1a() {
      this.cW = new Hd(null, this.Hu.go.node);
      var a = this.Uf.go.node.Jb.translate;
      let b = this.Uf.go.node.Jb.scale,
        c = b.x,
        d = b.y,
        e = this.cW.Jb;
      e.translate.x = a.x;
      e.translate.y = a.y;
      e.U = (e.U & -2) | 240;
      a = this.cW.Jb;
      a.scale.x = c;
      a.scale.y = d;
      a.scale.z = b.z;
      a.U = (a.U & -6) | 240;
      this.oo = R.aa(E.get(1311));
      this.oo.R(!1);
      this.cW.appendChild(this.oo.L);
    }
    lXa() {
      this.Uf = new xl();
      this.Uf.init(this.Lb);
      let a = 0,
        b = this.Lb.Gt;
      for (; a < b.length; ) this.go.od(b[a++].go);
      this.Hu = new Ri(this.Lb.Gt[this.Lb.Gt.length - 1].Hdb + -3);
      this.go.od(this.Hu.go);
      this.WOa();
    }
    clear() {
      this.Uf.clear();
      this.Lb.B();
      this.Lb = null;
    }
  }
  Vt.g = "168";
  Object.assign(Vt.prototype, { j: Vt });
  class bv {
    constructor(a, b) {
      this.ig = new H(0, 0, 0, 1);
      this.ig.x = a.x / 200 + pa.kT(-40, 40) / 10;
      this.ig.y = a.y / 200 + pa.kT(-60, 20) / 10;
      this.W = R.aa(E.get(262), y.ORa);
      a = this.W.wf();
      b = Oa.dd(b);
      a.x = b.x;
      a.y = b.y;
      a.z = b.z;
      a.w = b.w;
    }
    ia() {
      var a = this.W;
      a.C(a.za + this.ig.x);
      a = this.W;
      a.D(a.qa + this.ig.y);
      this.ig.y += 0.2;
      this.W.Xg(
        Math.atan2(this.ig.y, this.ig.x) *
          57.29577951308232 *
          (this.ig.x < 0 ? -1 : 1),
      );
    }
    Onb() {
      this.W.B();
      this.W = null;
    }
  }
  bv.g = "169";
  Object.assign(bv.prototype, { j: bv });
  class cv {
    constructor(a, b, c, d) {
      this.model = a;
      this.effect = b;
      this.container = c;
      this.animate = d;
      this.ima = !1;
    }
    rotate() {
      let a = this.container.node.Jb;
      var b = this.effect.fma * this.model.jd();
      let c = a.matrix,
        d = Math.cos(b);
      b = Math.sin(b);
      c.m11 = d;
      c.m12 = -b;
      c.m21 = b;
      c.m22 = d;
      a.U = (a.U & -4) | 248;
    }
    update() {
      var a = this.model.jd(),
        b = this.model.Fc;
      if (this.effect.MY != null)
        ((b = this.container.node.Jb),
          (b.scale.x = this.effect.scale.x),
          (b.scale.y = -a * this.effect.scale.y),
          (b.U = (b.U & -6) | 240),
          this.effect.MY.update(this.model, this.container));
      else {
        var c = this.container.node.Jb;
        c.scale.x = 1 * a * this.effect.scale.x;
        c.scale.y = this.effect.scale.y;
        c.U = (c.U & -6) | 240;
        a = this.effect.position.tt(b);
        b = this.container.node.Jb;
        b.translate.x = a.x;
        b.translate.y = a.y;
        b.U = (b.U & -2) | 240;
      }
    }
  }
  cv.g = "16A";
  Object.assign(cv.prototype, { j: cv });
  class Fk extends ue {
    constructor() {
      super();
      this.stroke = 1;
      this.G = this.e = null;
    }
    Etb(a) {
      this.Bc = a;
      this.stroke = a.stroke;
    }
    La(a) {
      this.e.color = Oa.dd(a);
    }
    In() {
      this.e = new Yi();
      this.e.color = Oa.dd(this.color);
      this.G = Xb.qAa(this.e, this.Zv.node);
      this.La(0);
    }
    B() {
      super.B();
      this.G.B();
      this.e = this.G = null;
    }
    update() {
      if (this.Bc != null && this.Bc.oU != null && this.Bc.wQ != null) {
        var a = this.Bc.oU,
          b = this.Bc.wQ,
          c = b.x - a.x,
          d = b.y - a.y;
        b = a.x + c * this.Bc.qGa;
        var e = a.y + d * this.Bc.qGa;
        c = a.x + c * (1 - this.Bc.pGa);
        a = a.y + d * (1 - this.Bc.pGa);
        Math.abs(this.stroke - this.Bc.stroke) > 0.001 &&
          (this.stroke = this.Bc.stroke);
        this.e.clear();
        this.e.add(b, e, c, a, this.stroke / 2);
      }
    }
  }
  Fk.g = "16B";
  Fk.u = ue;
  Object.assign(Fk.prototype, { j: Fk });
  class an {
    constructor() {
      this.Hf = null;
      this.td = m.l();
      this.go = new dd("EffectsContainer");
    }
    init() {
      this.E1a();
    }
    E1a() {
      this.Hf == null && ((this.Hf = new dv()), this.go.od(this.Hf.go));
    }
    clear() {
      this.td.length = 0;
    }
    bM() {
      this.Hf.bM();
    }
    St(a) {
      this.Hf.Hwb(a, a.model);
    }
    Tt(a) {
      this.Hf.Zwb(a, a.model);
    }
    Ut(a) {
      this.Hf.cxb(a, a.model);
    }
    iB() {
      this.Hf.iB();
    }
  }
  an.g = "16C";
  Object.assign(an.prototype, { j: an });
  class dv {
    constructor() {
      this.Hf = m.l();
      this.go = new dd("EffectsRunning");
    }
    bOa(a, b) {
      let c = this.Hf.length,
        d = 0;
      for (; d < c; ) {
        let e = d++,
          f = this.Hf[e];
        if (b == f.model && (a == f.effect.name || a == "")) {
          this.cOa(f, e);
          break;
        }
      }
    }
    cOa(a, b) {
      a.container.B();
      a.model != null && a.model.tnb(a);
      m.ye(this.Hf, b);
    }
    Zwb(a, b) {
      this.bOa(a.name, b);
    }
    bxb(a, b) {
      let c = 0,
        d = this.Hf;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        if (b == e.model && a == e.effect.name) {
          e.ima = !0;
          break;
        }
      }
    }
    Hwb(a, b) {
      var c = b.Fc;
      c.Zl = b.da.jd();
      let d = new dd(a.name);
      if (a.MY != null) a.MY.update(b, d);
      else {
        var e = a.position.tt(c),
          f = d.node.Jb;
        f.translate.x = e.x;
        f.translate.y = e.y;
        f.U = (f.U & -2) | 240;
      }
      e = d.node.Jb;
      e.scale.x = c.Zl * a.scale.x;
      e.scale.y = a.scale.y;
      e.U = (e.U & -6) | 240;
      this.go.od(d);
      c = a.TL / 60;
      e = J.substr(a.fileName, 4, null);
      f = d.OWa();
      var g = G.nn(G.uf("magic/" + a.fileName + ".json"));
      g = new qi().jKa(g);
      g = new ve(Xs.Wq(g), g.aK.scale);
      f.init(E.get(G.uf("magic/" + a.fileName + ".png")), g, e);
      f.iterations = a.Scb ? -1 : 1;
      a.EYa ? f.Srb() : f.fMa();
      f.tP = c;
      a = new cv(b, a, d, f);
      this.Hf.push(a);
      b.VWa(a);
      a.rotate();
    }
    bM() {
      let a = 1 / v.qn(),
        b = 0,
        c = this.Hf.length;
      for (; b < c; ) {
        let d = this.Hf[b];
        !d.animate.QJ || (d.effect.X1 && d.model == null && !d.ima)
          ? (this.bOa(d.effect.name, d.model), --c, --b)
          : (d.effect.X1 && !d.ima && d.update(), d.animate.ia(L.J.uk.Cm * a));
        ++b;
      }
    }
    cxb(a, b) {
      this.bxb(a.name, b);
    }
    iB() {
      for (; this.Hf.length > 0; ) this.cOa(this.Hf[0], 0);
    }
  }
  dv.g = "16D";
  Object.assign(dv.prototype, { j: dv });
  class ev {
    constructor() {
      this.FU = m.l();
      this.qM = m.l();
      this.wu = this.Yg = null;
    }
    WXa(a, b, c) {
      a = this.efa(a);
      b = this.efa(b);
      c = this.efa(c);
      this.FU.push(a);
      this.FU.push(b);
      this.FU.push(c);
    }
    efa(a) {
      if (this.qM.includes(a)) return this.qM.indexOf(a);
      this.qM.push(a);
      return this.qM.length - 1;
    }
    init() {
      this.wu = m.uma(this.FU);
      this.Yg = Array(this.qM.length * 2);
      this.FU = null;
    }
    ia() {
      let a = 0,
        b = 0,
        c = this.Yg.length >> 1;
      for (; b < c; ) {
        let d = this.qM[b++].ma;
        this.Yg[a++] = d.x;
        this.Yg[a++] = d.y;
      }
    }
  }
  ev.g = "16E";
  Object.assign(ev.prototype, { j: ev });
  class Hk extends ue {
    constructor() {
      super();
      this.up = !1;
      this.e = this.G = this.gK = null;
    }
    La(a) {
      this.e.color = Oa.dd(a);
    }
    In() {
      super.In();
      this.Bc = new ev();
      this.G = new Xb();
      this.e = new Zi();
      this.G.Zw(this.e);
      this.Zv.node.appendChild(this.G);
      this.La(0);
    }
    B() {
      super.B();
      this.G.B();
      this.e = this.G = null;
    }
    update() {
      this.up || (this.Bc.init(), (this.up = !0));
      this.gK == null || this.gK.update() || (this.gK = null);
      this.Bc.ia();
      this.Bc.Yg.length != 0 &&
        ((this.e.indices = this.Bc.wu),
        (this.e.we = this.Bc.wu.length),
        (this.e.Yg = this.Bc.Yg),
        (this.e.Rd = this.Bc.Yg.length));
    }
  }
  Hk.g = "16F";
  Hk.u = ue;
  Object.assign(Hk.prototype, { j: Hk });
  class Gk extends ue {
    constructor() {
      super();
      this.gv = [];
    }
    GWa(a) {
      this.gv.push(a);
    }
    Vs(a) {
      let b = 0,
        c = this.gv;
      for (; b < c.length; ) c[b++].La(a);
    }
    B() {
      super.B();
      this.gv = null;
    }
    update() {
      super.update();
      let a = 0,
        b = this.gv;
      for (; a < b.length; ) b[a++].update();
    }
  }
  Gk.g = "170";
  Gk.u = ue;
  Object.assign(Gk.prototype, { j: Gk });
  class xl {
    constructor() {
      this.go = new dd("RenderContainer");
      this.rh = new fv();
      this.Nq = this.Mq = null;
    }
    St(a) {
      a.bgb ? this.Mq.St(a) : this.Nq.St(a);
    }
    Tt(a) {
      this.Mq.Tt(a);
      this.Nq.Tt(a);
    }
    Ut(a) {
      this.Mq.Ut(a);
      this.Nq.Ut(a);
    }
    B() {
      this.rh.clear();
      this.rh = null;
      this.go.B();
      this.go = null;
    }
    init(a) {
      this.Ebb(a.jt);
      this.ubb(a.jt);
      let b = this.go.node.Jb;
      b.translate.x = -a.width / 2;
      b.translate.y = a.height / 2 - a.jt;
      b.translate.z = 0;
      b.U = (b.U & -2) | 240;
      a.kn.go.od(this.go);
    }
    Ebb(a) {
      this.rh.init(a);
      this.go.od(this.rh.go);
    }
    ubb(a) {
      this.Mq = new an();
      this.Mq.init(a);
      this.go.od(this.Mq.go);
      let b = this.Mq.go.node.Jb;
      b.translate.x = 0;
      b.translate.y = 0;
      b.translate.z = 0.01;
      b.U = (b.U & -2) | 240;
      this.Nq = new an();
      this.Nq.init(a);
      this.go.od(this.Nq.go);
      a = this.Nq.go.node.Jb;
      a.translate.x = 0;
      a.translate.y = 0;
      a.translate.z = 0.01;
      a.U = (a.U & -2) | 240;
    }
    clear() {
      this.rh.clear();
      this.Mq.clear();
      this.Nq.clear();
    }
    fQ(a) {
      a.St.addListener(w(this, this.St));
      a.Tt.addListener(w(this, this.Tt));
      a.Ut.addListener(w(this, this.Ut));
    }
    z_(a) {
      a.St.removeListener(w(this, this.St));
      a.Tt.removeListener(w(this, this.Tt));
      a.Ut.removeListener(w(this, this.Ut));
    }
    iB() {
      this.Mq.iB();
      this.Nq.iB();
    }
  }
  xl.g = "171";
  Object.assign(xl.prototype, { j: xl });
  class fv {
    constructor() {
      this.Vw = this.vF = null;
      this.Ra = m.l();
      this.go = new dd();
    }
    clear() {
      this.vF = this.Vw = null;
      this.Ra.length = 0;
    }
    init() {}
    Jf(a, b, c) {
      c &&
        (this.Vw == null
          ? ((this.Vw = a),
            (c = this.Vw.model.go.node.Jb),
            (c.translate.x = 0),
            (c.translate.y = 0),
            (c.translate.z = -0.001),
            (c.U = (c.U & -2) | 240))
          : (this.vF = a));
      a.model.go.ksb(this.go);
      a.model.Vs(b);
      this.Ra.push(a);
      return 0;
    }
    ym(a) {
      let b = this.Ra[a];
      b == this.Vw ? (this.Vw = null) : b == this.vF && (this.vF = null);
      m.ye(this.Ra, a);
    }
    E5(a, b) {
      let c = 0,
        d = this.Ra;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        if (e == a) {
          e.model.go.setActive(b);
          break;
        }
      }
    }
    TCa() {
      return this.Vw != null && this.vF != null
        ? Math.abs(this.Vw.Ju.ma.x - this.vF.Ju.ma.x)
        : 0;
    }
  }
  fv.g = "172";
  Object.assign(fv.prototype, { j: fv });
