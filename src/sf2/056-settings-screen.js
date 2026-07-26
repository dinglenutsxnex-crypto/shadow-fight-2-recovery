// 056-settings-screen.js
// Domain: combat  |  32 class(es)  |  tree root(s): Ax, Db, ur, Ye, Ke, Of, Qc, Bx, Gg, Zh, fk, Df, Pz, $h
// Edit here. Run `npm run build` to reassemble the full bundle.
  class Ax {
    constructor(a, b) {
      function c(e, f) {
        let g = new ea(E.Na(), d.node);
        g.Fa(500, f);
        g.Lc(0.7);
        e = e.replace(RegExp("{br}\\s+$", "g"), "");
        e = e.replace(RegExp("{br}", "g"), "\n");
        g.rd(!0);
        g.V(e);
        g.ua(f);
        g.La(Oa.dd(13742453));
        return g;
      }
      this.node = new Ea();
      let d = this;
      this.kka = c(a, 60);
      this.kka.Ia(4);
      this.kka.C(-520);
      this.e3 = c(b, 50);
      this.e3.Ia(1);
      this.e3.C(20);
      a = this.e3;
      a.D(a.qa + 10);
      a = this.kka.Pj();
      a = a.X - a.P;
      b = this.e3.Pj();
      this.height = Math.max(a, b.X - b.P);
    }
  }
  Ax.g = "3D0";
  Object.assign(Ax.prototype, { j: Ax });
  class tr extends O {
    constructor() {
      super();
      this.Ud = R.aa(E.get(246), y.Aoa, this.node);
      this.Ud.zl(vc.wM(new Ec(17, 17, 1, 1), Th.YU));
      this.ns = R.aa(E.get(262), y.ioa, this.node);
      this.ns.jk(0.5, 0);
      this.ns.Un(0.5, 0);
      this.Ri = new ea(E.Na(), this.node);
      this.Ri.La(Oa.dd(3289650));
      this.Ri.Ia(2);
      this.Tb = new ea(E.Na(), this.node);
      this.Tb.La(this.Ri.wf());
      this.Tb.rd(!0);
      this.height = 0;
    }
    init(a, b) {
      var c = 35;
      L.J.wn && (N.lc > 1 && (a *= N.lc), (c = 49));
      this.Ud.xc(a);
      this.Ud.Qb(b);
      this.Ud.jk(a / 2, 0, !0);
      a *= 0.9;
      this.Ri.Fa(a, c);
      this.Ri.C(-a / 2);
      this.Ri.D(10);
      this.Ri.ua(c);
      this.Tb.Fa(a, b);
      this.Tb.ua(this.Ri.effect.fontSize * 0.8);
      this.Tb.C(this.Ri.za);
      this.Tb.D(this.Ri.qa + this.Ri.effect.fontSize * 1.25);
      this.Tb.Lc(0.6);
      b = this.ns.ra() * 0.6;
      this.Ud.D(b);
      c = this.Ri;
      c.D(c.qa + b);
      c = this.Tb;
      c.D(c.qa + b);
    }
    Mka(a, b) {
      this.Ri.V(Y.na(a));
      a = Y.cP;
      let c = !(Cb(b, " ") || Cb(b, "\n") || Cb(b, "\t")) && !Cb(b, a);
      this.Tb.V(Y.na(c ? "" + a + b + a : b));
      this.Tb.Ia(2);
      b = this.Tb.qa;
      a = this.Tb.Pj();
      this.height = b + (a.X - a.P) + 20;
      this.Ud.Qb(this.height);
    }
    ip() {
      this.ns.K5();
      this.ns.D(-this.ns.ra());
      this.Ud.D(-(this.Ud.qa + this.height));
      this.Ri.D(this.Ud.qa + 10);
      this.Tb.D(this.Ud.qa + this.Ri.effect.fontSize * 1.25);
    }
  }
  tr.g = "3D1";
  tr.u = O;
  Object.assign(tr.prototype, { j: tr });
  class nd extends O {
    constructor() {
      super();
      L.J.root.appendChild(this);
      this.hy = this.Om = null;
      this.Pi = 0;
      mc.J.df.appendChild(this.node.L);
    }
    B() {
      super.B();
      this.ar();
    }
    Z(a) {
      super.Z(a);
      if (this.Om != null)
        if (
          (this.Om.D(this.hy.dc.translate.y + this.OUa), L.J.Vfa().Efa() != 0)
        )
          this.ar();
        else {
          if (L.J.ed().Eb(0)) {
            let b = !1,
              c = N.c4.length;
            for (; --c > -1; ) N.c4[c] == this.hy && (b = !0);
            if (!b) {
              this.ar();
              return;
            }
          }
          L.J.Uj().S6() && this.ar();
          N.io && this.ar();
          this.Pi -= a;
          this.Pi <= 0 && this.ar();
        }
    }
    ar() {
      this.hy = null;
      let a = this.Om;
      a != null && a.B();
      this.Om = null;
    }
    W5(a) {
      this.Pi = a.rha ? 65535 : 5;
      if (this.hy == a.sender) return (this.ar(), !1);
      this.hy != null && this.hy != a.sender && this.Om != null && this.ar();
      this.Om = this.appendChild(ra.Ya(tr, [].slice()));
      this.Om.init(350, 100);
      this.hy = a.sender;
      this.Om.Mka(a.title, a.description);
      this.Om.C(a.position.x);
      this.Om.D(a.position.y + a.offset.y);
      this.OUa = this.Om.node.qa - this.hy.dc.translate.y;
      a.position.y > N.height - this.Om.height && this.Om.ip();
      return !0;
    }
    static F() {
      let a = nd.Hb;
      return a != null ? a : (nd.Hb = new nd());
    }
    static Sga() {
      return nd.Hb != null;
    }
  }
  nd.g = "3D2";
  nd.u = O;
  Object.assign(nd.prototype, { j: nd });
  class ur {
    constructor() {
      this.rha = !1;
      this.sender = null;
      this.offset = new H(0, 0, 0, 1);
      this.position = new H(0, 0, 0, 1);
      this.title = this.description = "";
    }
    xPa(a) {
      this.title = a.Eg;
      this.description = a.l$a();
    }
  }
  ur.g = "3D3";
  Object.assign(ur.prototype, { j: ur });
  class Ye {
    static Kza(a) {
      a = Ye.ayb(a.image);
      let b = a.indexOf("_");
      b >= 0 && (a = a.substring(0, b));
      return a;
    }
    static vI(a) {
      a != null && (a = Eb.replace(a, ".", "/"));
      return a;
    }
    static ayb(a) {
      let b = new Ua("[\\./]", "");
      b.match(a) && (a = J.substr(a, b.sGa().ca + 1, null));
      return a;
    }
  }
  Ye.g = "3D4";
  class Sf extends R {
    constructor(a, b) {
      super();
      a.indexOf("/") != -1
        ? ((a = a.split("/")), (a = a[0] + "/" + a[1].toLowerCase()))
        : (a = a.toLowerCase());
      a = a.replace(RegExp("-", "g"), "_");
      if (a.indexOf("/") != -1) {
        let c = a.toLowerCase().split("/");
        this.Yv = "res/items/images-1x/" + c[0] + "/" + c[1] + ".png";
      } else this.Yv = "res/items/images-1x/" + a + ".png";
      this.a0 = G.uf(this.Yv);
      G.data.v[this.a0] != null
        ? (this.sg(E.get(this.a0)), Qc.remove(this.Yv), vr.add(this.Yv))
        : (this.sg(E.get(834)), super.yb(a), this.L.LY(new wr(this)));
      b != null && b.appendChild(this);
      this.Ga();
    }
    B() {
      super.B();
      vr.Fe(this.Yv) && vr.remove(this.Yv) == 0 && Qc.add(this.Yv);
    }
    yb() {}
  }
  Sf.g = "3D5";
  Sf.u = R;
  Object.assign(Sf.prototype, { j: Sf });
  class wr extends Of {
    constructor(a) {
      super();
      this.W = a;
      this.isActive = !0;
      this.ri = G.load([a.a0]);
    }
    BK() {
      if (this.ri != null && this.ri.pp()) {
        let a = this.W.wf();
        this.W.sg(E.get(this.W.a0));
        let b = this.W.wf();
        b.x = a.x;
        b.y = a.y;
        b.z = a.z;
        b.w = a.w;
        vr.add(this.W.Yv);
        Qc.remove(this.W.Yv);
        this.W.Ga();
        this.ri = null;
        this.B();
      }
    }
  }
  wr.g = "3D6";
  wr.u = Of;
  Object.assign(wr.prototype, { j: wr });
  class Qc {
    static add(a) {
      Qc.init();
      let b = 0,
        c = Qc.list;
      for (; b < c.length; ) if (c[b++].path == a) return;
      Qc.list.push(new Bx(a));
    }
    static remove(a) {
      Qc.init();
      let b = 0,
        c = Qc.list;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.path == a) {
          J.remove(Qc.list, d);
          break;
        }
      }
    }
    static init() {
      Qc.active || ((Qc.active = !0), L.J.Qh.ei(Qc.Vr));
    }
    static Vr() {
      for (;;) {
        let a = !1,
          b = 0,
          c = Qc.list;
        for (; b < c.length; ) {
          let d = c[b];
          ++b;
          if (vr.Fe(d.path)) {
            J.remove(Qc.list, d);
            a = !0;
            break;
          }
          if (L.J.time - d.time > 1) {
            E.B(G.uf(d.path));
            J.remove(Qc.list, d);
            a = !0;
            break;
          }
        }
        if (!a) break;
      }
    }
  }
  Qc.g = "3D7";
  class Bx {
    constructor(a) {
      this.path = a;
      this.time = L.J.time;
    }
  }
  Bx.g = "3D8";
  Object.assign(Bx.prototype, { j: Bx });
  class Ci extends O {
    constructor() {
      super();
      this.Wy = Fc.Ed(16711935, mc.J.df);
      this.W = R.aa(E.get(262), y.moa, this.node);
      this.W.Ga();
    }
    B() {
      this.W.B();
      this.Wy.B();
      super.B();
    }
    Z(a) {
      super.Z(a);
      a = this.W;
      a.Xg(a.qO + 4);
      this.W.C(N.width / 2);
      this.W.D(N.height / 2);
    }
  }
  Ci.g = "3D9";
  Ci.u = O;
  Object.assign(Ci.prototype, { j: Ci });
  class xr extends ef {
    constructor() {
      super();
      this.wE = R.aa(E.get(821), null, this.node);
      this.wE.Ga();
      this.info = new ea(E.Na(), this.node);
      this.info.V("0%");
      this.info.Ia(128);
      this.info.Ga();
      this.info.La(Oa.dd(13743222));
      this.info.wa(0);
    }
    nj(a) {
      this.info != null && this.info.V(a);
    }
    B() {
      super.B();
      E.B(821);
      Sd.Hza() || E.B(822);
    }
    Z(a) {
      super.Z(a);
      this.layout();
      a = N.lc;
      a =
        (1.2 + (((a < 0.4 ? 0.4 : a > 1 ? 1 : a) - 0.4) / 0.6) * -1) *
        this.wE.ea.y;
      this.wE.D(-a);
      if (this.info != null) {
        let b = this.info;
        b.wa(b.on() + 0.1);
        this.info.C(this.wE.za);
        this.info.D(this.wE.qa + this.wE.ra() * 0.75);
      }
      this.Qa.D(-a);
    }
    yea() {
      return this.wE.ea.x;
    }
  }
  xr.g = "3DA";
  xr.u = ef;
  Object.assign(xr.prototype, { j: xr });
  class Gg {
    constructor(a, b, c, d) {
      this.orientation = c;
      this.height = this.width = -1;
      this.bz = this.Lv = this.xk = 0;
      this.Gl = null;
      this.node = new Ea();
      this.wc = new Ea(this.node);
      this.content = new Ea(this.node);
      this.ZPa = new Ea(this.node);
      R.aa(E.get(256), y.GSa, this.wc);
      R.aa(E.get(256), y.FSa, this.wc);
      R.aa(E.get(256), y.HSa, this.wc);
      this.ba(a, b, d);
    }
    eba(a, b, c) {
      c == null && (c = !0);
      b == null && (b = !0);
      this.xk = a;
      let d = this.width;
      var e = a;
      this.orientation == 1 && ((e = d), (d = a));
      this.Gl = [];
      b && (this.Gl[0] = new Zh(d, e, this.ZPa));
      c && (this.Gl[1] = new Zh(d, e, this.ZPa));
      a = this.width;
      this.width = 0;
      this.ba(a, this.height, this.nza);
    }
    ba(a, b, c) {
      if (this.width != a || this.height != b || this.nza != c) {
        this.width = a;
        this.height = b;
        this.nza = c;
        this.xk = this.Gl == null ? 0 : c;
        var d = 0;
        this.Gl != null &&
          (this.Gl[0] != null && (d = 1), this.Gl[1] != null && ++d);
        switch (this.orientation) {
          case 0:
            this.Lv = a - 2 * c;
            this.bz = b - d * this.xk;
            break;
          case 1:
            ((this.Lv = a - d * this.xk), (this.bz = b - 2 * c));
        }
        d = a;
        var e = b;
        this.orientation == 1 &&
          ((d = b), (e = a), this.wc.Xg(90), this.wc.C(a));
        var f = this.wc.Fz(0),
          g = this.wc.Fz(1),
          h = this.wc.Fz(2),
          k = c / f.ea.x;
        f.la(k);
        f.Qb(e);
        h.la(k);
        h.Qb(e);
        h.C(d - h.ya());
        g.C(f.za + f.ya());
        g.xc(Math.max(1, d - 2 * f.ya()));
        g.Qb(e);
        if (this.Gl != null)
          switch (this.orientation) {
            case 0:
              d = this.Gl[0];
              d != null && d.ba(a, this.xk);
              d = this.Gl[1];
              d != null && (d.ba(a, this.xk), d.node.D(b - this.xk));
              this.content.C(c);
              this.content.D(this.Gl[0] != null ? this.xk : 0);
              break;
            case 1:
              ((d = this.Gl[0]),
                d != null && d != null && d.ba(this.xk, b),
                (d = this.Gl[1]),
                d != null && (d.ba(this.xk, b), d.node.C(a - this.xk)),
                this.content.C(this.xk),
                this.content.D(c));
          }
        else
          switch (this.orientation) {
            case 0:
              this.content.C(c);
              break;
            case 1:
              this.content.D(c);
          }
      }
    }
  }
  Gg.g = "3DB";
  Object.assign(Gg.prototype, { j: Gg });
  class Zh {
    constructor(a, b, c) {
      this.node = new Ea(c);
      this.nf = new Ea(this.node);
      R.aa(E.get(256), y.toa, this.nf);
      R.aa(E.get(256), y.ISa, this.nf);
      R.aa(E.get(256), y.toa, this.nf).Mr(!0);
      this.Jc = R.Ed(16711935, 100, 100, this.nf);
      this.ba(a, b);
    }
    ba(a, b) {
      this.width = a;
      this.height = b;
      let c = b > a,
        d = c ? a : b,
        e = this.nf.Fz(0),
        f = this.nf.Fz(1),
        g = this.nf.Fz(2),
        h = d / e.ea.y;
      e.la(h);
      g.la(h);
      f.la(h);
      f.C(e.za + e.ya());
      f.xc(Math.max((c ? b : a) - 2 * e.ya(), 10));
      g.C(f.za + f.ya());
      this.nf.Xg(c ? 90 : 0);
      this.nf.C(c ? d : 0);
      this.Jc.lk(e.ya() * 2 + f.ya(), f.ra());
    }
  }
  Zh.g = "3DC";
  Object.assign(Zh.prototype, { j: Zh });
  class ek extends O {
    constructor() {
      super();
      this.icon = this.Nc = null;
      this.oa = new V();
      this.bp = !1;
      this.Lq = 0;
    }
    B() {
      super.B();
      this.oa.clear();
    }
    Z(a) {
      super.Z(a);
      a = null;
      for (var b = this.parent; b != null; ) {
        if (b instanceof Hg) {
          a = b;
          break;
        }
        b = b.parent;
      }
      b = !0;
      a != null && (b = a.ddb(this.node.Dm()));
      b &&
        (L.J.ed().Eb(0) && this.Bd()
          ? ((this.bp = !0), (this.Lq = L.J.ed().position[0].y))
          : L.J.ed().yh(0) &&
            (Math.abs(L.J.ed().position[0].y - this.Lq) < 5 &&
              this.Bd() &&
              this.oa.$(this),
            (this.bp = !1)));
    }
    M5(a) {
      this.Nc != a && ((this.Nc = a), this.refresh());
    }
    refresh() {
      var a = this.icon;
      a != null && a.B();
      a = Ye.Kza(this.Nc);
      this.icon = R.aa(E.get(268), a, this.node);
      this.icon.wa(this.Nc.Yh != 0 || v.$z(this.Nc) ? 1 : 0.5);
      this.icon.Ga();
    }
  }
  ek.g = "3DD";
  ek.u = O;
  Object.assign(ek.prototype, { j: ek });
  class fk {
    static S1(a) {
      return ya.jdb(a);
    }
    static show(a) {
      v.Cha();
      ya.Svb(a, function (b) {
        b && (la.flags.save(), p.tab(), fk.Tvb());
        v.Dma();
      });
    }
    static Tvb() {
      var a = Y.na("VideoSuccessMessage");
      a = a.replace(RegExp("\\{0\\}", ""), "<image>ruby</image>");
      a = a.replace(RegExp("\\{1\\}", ""), "3");
      a = new ph(
        "VideoSuccessTitle",
        a,
        1,
        "OK",
        null,
        "EButtonGreen",
        null,
        !1,
        !1,
        "",
        null,
      );
      a.zU = !1;
      Wb.openDialog(340, a);
    }
  }
  fk.g = "3DE";
  class gk extends O {
    constructor() {
      super();
      this.Xn = R.aa(E.get(262), y.eSa, this.node);
      this.size = new H(0, 0, 0, 1);
      this.Lq = this.index = this.value = this.state = 0;
      this.smooth = this.tR = this.G1 = !1;
      this.rr = this.ratio = 0;
    }
    reset() {
      this.index = this.value = this.state = 0;
      this.G1 = this.tR = !1;
      this.rr = 0;
      this.Xn.D(0);
    }
    ba(a, b) {
      if (this.size.x != a || this.size.y != b) {
        var c = this.size;
        c.x = a;
        c.y = b;
        this.Xn.mf(a);
      }
    }
    PT(a) {
      this.size.y != 0 &&
        (this.Xn.D((this.size.y - this.Xn.ra()) * a), (this.value = a));
    }
    Z() {
      if (this.rr == 0) this.node.R(!1);
      else {
        this.node.R(!0);
        this.G1 = !1;
        var a = N.mn(),
          b = this.node.$n(a),
          c = b.x >= 0 && b.y >= 0 && b.x <= this.size.x && b.y < this.size.y,
          d = L.J.ed().Eb(0);
        switch (this.state) {
          case 0:
            if (c && d && this.Xn.Bd(a)) {
              this.Lq = b.y - this.Xn.qa;
              this.state = 1;
              return;
            }
            break;
          case 1:
            L.J.ed().Xe(0)
              ? (this.rr > 0
                  ? ((b = b.y - this.Lq),
                    (c = this.size.y - this.Xn.ra()),
                    (a = this.size.y - this.Xn.ra()),
                    (b = (b < 0 ? 0 : b > c ? c : b) / a),
                    (this.ratio = b < 0 ? 0 : b > 1 ? 1 : b),
                    (b = Math.round(this.ratio * (this.rr - 1))),
                    this.smooth
                      ? this.Xn.D(a * this.ratio)
                      : this.Xn.D((a / (this.rr - 1)) * b),
                    this.index != b && ((this.index = b), (this.G1 = !0)))
                  : this.Xn.D(0),
                (this.tR = !0))
              : ((this.tR = !1), (this.state = 0));
        }
        this.value = this.Xn.qa / (this.size.y - this.Xn.ra());
      }
    }
  }
  gk.g = "3DF";
  gk.u = O;
  Object.assign(gk.prototype, { j: gk });
  class Xe extends O {
    constructor() {
      super();
      this.DJ = this.EJ = this.KJ = !0;
      this.Bt = !1;
      this.kM = this.XD = this.cE = this.FJ = this.LJ = !0;
      this.Gka = -1;
      this.tNa = this.Yvb = !1;
      this.hD = ":";
      this.label = new ea(E.Na(), this.node);
      this.label.Uc(!1);
      this.LLa = this.JGa = this.LDa = this.eD = null;
      this.cN = 0;
    }
    vrb(a) {
      let b = this.label.wf();
      this.BUa = Eb.HDa(
        (((b.z * 255) | 0) & 255) |
          ((((b.y * 255) | 0) & 255) << 8) |
          ((((b.x * 255) | 0) & 255) << 16),
      );
      this.label.B();
      this.label = a;
      this.Isa = a.OD();
      this.kna();
    }
    In() {
      super.In();
      Hb.Qh.addListener(w(this, this.J3));
    }
    B() {
      super.B();
      Hb.Qh.removeListener(w(this, this.J3));
    }
    MMa(a) {
      this.eD = Y.na(a);
    }
    dub(a) {
      this.LDa = Y.na(a);
    }
    rub(a) {
      this.JGa = Y.na(a);
    }
    Jub(a) {
      this.LLa = Y.na(a);
    }
    tla(a) {
      this.cN != a && ((this.cN = a), this.kna());
    }
    J3() {
      !this.Zg && this.cN > 0 && (--this.cN, this.kna());
    }
    kna() {
      let a = Xe.Afa(
        this.cN,
        this.KJ,
        this.EJ,
        this.DJ,
        this.Bt,
        this.Yvb,
        this.tNa,
        this.hD,
        this.eD,
        this.kM,
        this.LJ,
        this.FJ,
        this.cE,
        this.XD,
        this.LDa,
        this.JGa,
        this.LLa,
        this.Gka,
      );
      this.Isa != null
        ? this.label.V(
            this.Isa + (" <style color=" + this.BUa + ">") + a + "</color>",
          )
        : this.label.V(a);
    }
    static Afa(a, b, c, d, e, f, g, h, k, l, n, q, r, t, x, z, A, C) {
      function B(M, Q) {
        let U = M == null ? "null" : "" + M;
        Q && M < 10 && (U = "0" + U);
        return U;
      }
      C == null && (C = 3);
      A == null && (A = "");
      z == null && (z = "");
      x == null && (x = "");
      t == null && (t = !0);
      r == null && (r = !0);
      q == null && (q = !0);
      n == null && (n = !0);
      l == null && (l = !0);
      k == null && (k = "");
      h == null && (h = ":");
      g == null && (g = !1);
      f == null && (f = !1);
      e == null && (e = !1);
      d == null && (d = !0);
      c == null && (c = !0);
      b == null && (b = !0);
      a = ui.sAa(a);
      let D = "",
        F = 0;
      (e = e && (f || a.Tca >= 1) && C > 0) && (F = 1);
      (d = d && (g || a.hR >= 1) && C > F) && ++F;
      (c = c && C > F) && ++F;
      b = b && C > F;
      e && ((D = "" + B(a.Tca, t)), (D += k), l && (d || c || b) && (D += h));
      d && ((D += B(a.hR, r)), (D += x), c || b) && (D += h);
      c && ((D += B(a.R2, q)), (D += z), b && (D += h));
      b && ((D += B(a.h5, n)), (D += A));
      return D;
    }
  }
  Xe.g = "3E0";
  Xe.u = O;
  Object.assign(Xe.prototype, { j: Xe });
  class yr extends O {
    constructor(a) {
      super();
      this.node.wa(0);
      this.state = 0;
      this.Qa = R.aa(E.get(272), y.dRa, this.node);
      this.icon = R.aa(E.get(272), Eb.replace(a.icon, ".", "/"), this.node);
      this.icon.C(65);
      this.icon.D(25);
      this.info = new ea(E.Na(), this.node);
      this.info.Fa(440, this.icon.ea.y);
      this.info.C(this.icon.za + this.icon.ea.x + 10);
      this.info.D(25);
      this.info.V(Y.na(a.name));
      this.info.rd(!0);
      this.info.La(Z.sc);
      this.info.Ia(128);
      this.info.Lc(0.6);
      this.info.ua(this.Qa.ra() * 0.5);
      this.info.GL(this.info.effect.fontSize | 0);
      this.info.Uk();
      a = this.info.Pj();
      a = a.N - a.K;
      a = (this.info.ya() - a) / 2;
      let b = this.icon;
      b.C(b.za + a);
      this.node.Ga();
    }
    Z(a) {
      super.Z(a);
      a = Tf.p5a();
      this.node.la((a.N - a.K) / this.Qa.ea.x);
      this.node.C((a.K + a.N) * 0.5);
      this.node.D((a.P + a.X) * 0.5);
      switch (this.state) {
        case 0:
          a = this.fd(0.5);
          this.node.wa(a);
          a == 1 && ((this.time = 0), (this.state = 1));
          break;
        case 1:
          this.time >= 1.5 && ((this.state = 2), (this.time = 0));
          break;
        case 2:
          ((a = this.fd(1)),
            this.node.wa(1 - a),
            a == 1 && ((this.state = 3), Df.F().pia.$(), this.B()));
      }
    }
  }
  yr.g = "3E1";
  yr.u = O;
  Object.assign(yr.prototype, { j: yr });
  class Df {
    constructor() {
      this.pia = new V();
      this.container = new Db("achievements");
      L.J.root.appendChild(this.container);
    }
    mvb(a) {
      a = new yr(a);
      mc.J.df.appendChild(a.node.L);
      this.container.appendChild(a);
    }
    static F() {
      let a = Df.Hb;
      return a != null ? a : (Df.Hb = new Df());
    }
  }
  Df.g = "3E2";
  Object.assign(Df.prototype, { j: Df });
  class Pz {
    static ji() {
      return -1;
    }
  }
  class $h {}
  $h.g = "3E3";
  $h.Ei = !0;
  Object.assign($h.prototype, { j: $h });
  class Hg extends O {
    constructor() {
      super();
      this.DV = null;
      this.IEa = !1;
      this.size = new H(0, 0, 0, 1);
      this.spacing = 0;
      this.AK = new V();
      this.A3 = new V();
      this.JHa = new V();
      this.Ac = null;
      this.ij = this.Lq = this.ub = this.targetY = this.zz = this.state = 0;
      this.Dna = this.Px = !1;
      this.w_ = 0;
      this.dQ = this.Yha = this.aJ = !1;
      this.ama = -1;
      this.hu = 0;
      this.uOa = pa.sd;
      this.gi = new O();
      this.appendChild(this.gi);
      this.cells = [];
    }
    B() {
      super.B();
      this.Ac = this.cells = this.A3 = this.AK = null;
    }
    ddb(a) {
      a = this.node.$n(a);
      return a.x >= 0 && a.y >= 0 && a.x <= this.size.x && a.y < this.size.y;
    }
    nt(a) {
      return this.cells[a];
    }
    ba(a, b) {
      if (this.aJ || this.size.x != a || this.size.y != b) {
        this.aJ = !1;
        var c = this.size;
        c.x = a;
        c.y = b;
        if (this.cells.length != 0) {
          for (var d = (c = 0), e = this.cells; d < e.length; ) {
            let f = e[d];
            ++d;
            f.mf(a);
            f.D(c);
            c += f.ra() + this.spacing;
          }
          this.zz = (this.size.y - this.cells[0].ra()) / 2;
          this.gi.D((this.ij = this.zz));
          this.node.qL(new hb(0, 0, a, b));
          this.Ac != null && this.FNa(this.Ac.Qn);
        }
      }
    }
    ZQ() {
      return this.ub > 0;
    }
    stop() {
      this.state = this.ub = 0;
      this.dQ = !1;
      this.Px = !0;
    }
    init(a) {
      this.DV = a;
      this.$K();
    }
    Z(a) {
      super.Z(a);
      if (this.size.x != 0 && this.cells.length != 0)
        if (this.Yha) (this.AK.$(this.Ac), (this.Yha = !1));
        else {
          a = this.size.y / 2;
          for (var b = 0, c = this.cells; b < c.length; ) {
            var d = c[b];
            ++b;
            d.Sk = a - (this.gi.node.qa + (d.node.qa + d.ra() / 2));
            d.Y(Math.abs(d.Sk) <= this.size.y / 2 + d.node.ra() / 2);
          }
          if (!this.IEa)
            for (a = 0, b = this.cells; a < b.length; )
              ((c = b[a]),
                ++a,
                Math.abs(c.Sk) < 30 &&
                  this.Ac != c &&
                  ((this.Yha = !0), (this.Ac = c)));
          a = N.mn();
          c = this.node.$n(a);
          b = c.x >= 0 && c.y >= 0 && c.x <= this.size.x && c.y < this.size.y;
          (d = L.J.ed().Eb(0)) && b && (this.Dna = !0);
          d &&
            (Sb.F().Bd() && (d = !1),
            Wb.F().Lf instanceof oh && (d = !1),
            Wb.F().Lf instanceof vj && (d = !1));
          var e = this.cells[0].Sk,
            f = this.cells[this.cells.length - 1].Sk;
          e != f &&
            (this.hu =
              this.cells[0].Sk < 0
                ? 0
                : Math.min(Math.abs((this.gi.node.qa - this.zz) / (f - e)), 1));
          switch (this.state) {
            case 0:
              this.ub *= 0.9;
              a = this.gi;
              a.D(a.node.qa + this.ub);
              this.ij = this.gi.node.qa;
              if (b && d) {
                this.Lq = c.y;
                this.state = 1;
                this.dQ = !1;
                this.Px = !0;
                this.ub = 0;
                return;
              }
              a = L.J.Vfa().Efa();
              Sb.F().kwa && (a = 0);
              a != 0 &&
                b &&
                ((a = this.Ac.Qn + (a > 0 ? 1 : a < 0 ? -1 : 0)),
                (b = this.cells.length - 1),
                (a = this.cells[a < 0 ? 0 : a > b ? b : a]),
                a != this.Ac &&
                  ((this.targetY = -a.node.qa + this.zz), (this.state = 2)));
              this.Px && Math.abs(this.ub) < 3 && this.gwb();
              this.cells[0].Sk < -1
                ? (this.state = 4)
                : this.cells[this.cells.length - 1].Sk > 1 && (this.state = 5);
              break;
            case 1:
              if (L.J.ed().Xe(0))
                ((this.w_ = c.y - this.Lq),
                  Math.abs(this.w_) > 0 &&
                    !this.dQ &&
                    (this.A3.$(), (this.dQ = !0)),
                  (this.ub = L.J.ed().pM[0].y * 0.01),
                  this.gi.D(this.ij + this.w_));
              else {
                b = Math.abs(this.w_) < 10 && this.Dna;
                this.Dna = !1;
                if (b) {
                  b = this.ub = 0;
                  for (c = this.cells; b < c.length; )
                    if (((d = c[b]), ++b, d.active && d.node.Bd(a))) {
                      d != this.Ac
                        ? ((this.targetY = -d.node.qa + this.zz),
                          (this.state = 2))
                        : ((a = this.time - this.uOa),
                          (this.uOa = this.time),
                          a < 0.5 && this.JHa.$(this.Ac),
                          (this.state = 0));
                      break;
                    }
                  return;
                }
                this.ij = this.gi.node.qa;
                if (this.cells[0].Sk < 0) {
                  this.state = 4;
                  return;
                }
                if (this.cells[this.cells.length - 1].Sk > 0) {
                  this.state = 5;
                  return;
                }
                this.state = 0;
              }
              break;
            case 2:
              a = this.gi;
              a.D(a.node.qa + (this.targetY - this.gi.node.qa) * 0.3);
              a = this.targetY - this.gi.node.qa;
              if (a > 0 ? a < 1 : -a < 1)
                ((this.ij = this.gi.node.qa), (this.state = 0));
              break;
            case 3:
              this.ub = (this.ub += 0.1 * this.cells[this.ama].Sk) * 0.4;
              this.ij += this.ub;
              a = this.ub;
              if (a > 0 ? a < 0.1 : -a < 0.1)
                ((this.ub = 0), (this.ama = -1), (this.state = 0));
              this.gi.D(this.ij);
              if (b && d) {
                this.Lq = c.y;
                this.state = 1;
                this.dQ = !1;
                this.Px = !0;
                this.ub = 0;
                return;
              }
              break;
            case 4:
              if (b && d) {
                this.Lq = c.y;
                this.ub = 0;
                this.state = 1;
                return;
              }
              this.ub = (this.ub += 0.1 * this.cells[0].Sk) * 0.7;
              this.ij += this.ub;
              a = this.ub;
              if (a > 0 ? a < 0.1 : -a < 0.1)
                ((this.ij = this.zz), (this.state = this.ub = 0));
              this.gi.D(this.ij);
              break;
            case 5:
              if (b && d) {
                this.Lq = c.y;
                this.ub = 0;
                this.state = 1;
                return;
              }
              a = this.cells[this.cells.length - 1];
              this.ub = (this.ub += 0.1 * a.Sk) * 0.7;
              this.ij += this.ub;
              b = this.ub;
              if (b > 0 ? b < 0.1 : -b < 0.1)
                ((this.ij = -a.node.qa + (this.size.y - a.ra()) / 2),
                  (this.state = this.ub = 0));
              this.gi.D(this.ij);
          }
          a = 0;
          for (b = this.cells; a < b.length; ) b[a++].Ea(1);
        }
    }
    $K() {
      let a = null;
      this.Ac != null && (a = this.Ac.name);
      this.Ac = null;
      for (var b = 0, c = this.cells; b < c.length; ) c[b++].B();
      this.cells = [];
      if (
        this.rm() != 0 &&
        (this.y1a(),
        (this.aJ = !0),
        this.size.x != 0 && this.ba(this.size.x, this.size.y),
        a != null)
      ) {
        b = 0;
        for (c = this.cells; b < c.length; ) {
          let d = c[b];
          ++b;
          if (d.name == a) {
            this.Ac = d;
            break;
          }
        }
        this.Ac != null && (this.lj(this.Ac.Qn), this.AK.$(this.Ac));
      }
    }
    lj(a, b) {
      b == null && (b = 0);
      a < 0 ||
        this.cells.length == 0 ||
        (b == 0
          ? (this.FNa(a), (this.Ac = this.cells[a]), this.AK.$(this.Ac))
          : ((this.ub = 0),
            (this.targetY = -this.cells[a].node.qa + this.zz),
            (this.state = 2)));
    }
    gwb() {
      let a = pa.sd,
        b = null,
        c = 0,
        d = this.cells;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        Math.abs(e.Sk) < a && ((a = Math.abs(e.Sk)), (b = e));
      }
      this.Px = !1;
      this.ama = b.Qn;
      this.state = 3;
    }
    FNa(a) {
      this.ub = 0;
      a = -this.cells[a].node.qa + this.zz;
      this.gi.D(a);
      this.ij = a;
      this.state = 0;
    }
    y1a() {
      let a = this.DV.sA(),
        b = 0;
      for (; b < a; ) this.x1a(b++);
    }
    x1a(a) {
      this.Z0a(this.DV.QC(a), a);
    }
    Z0a(a, b) {
      a.Qn = b;
      this.gi.node.$S(a.node);
      this.gi.appendChild(a);
      this.cells.push(a);
    }
    u6a() {
      return this.Ac != null ? this.Ac.Qn : 0;
    }
    rm() {
      return this.DV.sA();
    }
  }
  Hg.g = "3E4";
  Hg.u = O;
  Object.assign(Hg.prototype, { j: Hg });
  class ff extends O {
    constructor() {
      super();
      this.ce = new H(300, 200, 0, 1);
      this.Sk = 0;
      this.Jc = R.Ed(-65281, 100, 100, this.node);
      this.Jc.wa(0);
      this.Qn = 0;
    }
    mf(a) {
      this.node.la(1);
      this.node.la(a / this.ce.x);
    }
    ra() {
      return this.ce.y * this.node.Db;
    }
    yl() {}
    B() {
      super.B();
    }
    ba(a, b) {
      let c = this.ce;
      c.x = a;
      c.y = b;
    }
    aJ() {
      this.ba(this.ce.x, this.ce.y);
    }
    Z(a) {
      super.Z(a);
      this.Jc.lk(this.ce.x, this.ce.y);
    }
  }
  ff.g = "3E5";
  ff.u = O;
  Object.assign(ff.prototype, { j: ff });
  class od extends O {
    constructor(a, b) {
      b == null && (b = 1530);
      a == null && (a = 2340);
      super();
      this.GV = new fc(a, b);
      this.S7 = m.l();
      this.H8 = new fd();
      this.c9 = "";
      this.b9 = !0;
      this.Tl = "";
      this.b$ = !0;
      this.c$ = "EButtonWhite";
      this.mq = "";
      this.V7 = !0;
      this.W7 = "EButtonDark";
      this.Gra = this.SEa = this.CEa = this.Jga = !1;
      this.$qa = 0;
      this.zq = m.l();
      this.Nqa = !1;
      this.Xc = this.Wx = this.Hy = this.Kb = this.Sb = null;
      this.rs = 1680;
      this.Md = 550;
      this.D8 = null;
      this.type = ob.Vq(this);
      this.mG = new Ea(this.node);
      this.cO = [
        R.aa(E.get(256), y.roa, this.mG),
        R.aa(E.get(256), y.ESa, this.mG),
        R.aa(E.get(256), y.roa, this.mG),
      ];
      this.cO[2].Mr(!0);
      this.Oe = new Ea(this.node);
      this.node.wa(0);
      this.Cd = this.appendChild(ra.Ya(O, [].slice()));
    }
    addEventListener(a, b) {
      return this.H8.addEventListener(a, b);
    }
    hh(a, b) {
      return this.H8.hh(a, b);
    }
    Pw() {
      this.H8.Pw();
    }
    Z(a) {
      super.Z(a);
      this.F4a();
      if (this.g8 || this.CEa || this.Nqa || !L.J.Uj().Eb(156))
        if (this.g8) {
          a = this.fd(0.25);
          var b = this.node;
          b.D(b.qa + 1e3 * (dc.PK()(a) / 1));
          this.node.wa(1 - dc.PK()(a));
          a == 1 && this.u_();
        } else
          ((a = this.fd(0.25)),
            this.node.wa(dc.Nn()(a)),
            (b = this.node),
            b.la(b.Db + (-0.2 + 0.2 * (dc.DYa()(a) / 1))));
      else ((this.Nqa = !0), this.He(this.wBa()));
    }
    F4a() {
      let a = N.lc;
      var b = N.hn(this.GV.x / this.GV.y);
      this.node.C((b.K + b.N) * 0.5);
      this.node.D((b.P + b.X) * 0.5);
      var c = (b.N - b.K) / this.GV.x;
      this.node.la(c);
      var d = b.hn(1.2);
      c = 1 / c;
      b = d.N - d.K;
      d = d.X - d.P;
      let e = this.cO[0].ea.x / 2,
        f = this.cO[0],
        g = this.cO[1],
        h = this.cO[2];
      a > 1.55
        ? (f.C(-e - (b / 2) * c),
          f.D(0),
          f.Xg(0),
          g.xc(b * c),
          g.Qb(N.height * c),
          g.Xg(0),
          h.C(e + (b / 2) * c),
          h.D(0),
          h.Xg(0))
        : a < 1
          ? (f.C(0),
            f.D(-(d / 2) * c - e),
            f.Qb(N.width * c),
            f.Xg(90),
            g.xc(d * c),
            g.Qb(N.width * c),
            g.Xg(90),
            h.C(0),
            h.D((d / 2) * c + e),
            h.Qb(N.width * c),
            h.Xg(90))
          : (f.C(-e - (b / 2) * c),
            f.D(0),
            f.Qb(g.ra()),
            f.Xg(0),
            g.xc(b * c),
            g.Qb(N.height * c),
            g.Xg(0),
            h.C(e + (b / 2) * c),
            h.D(0),
            h.Qb(g.ra()),
            h.Xg(0));
      f.Ga();
      g.Ga();
      h.Ga();
      a < 0.6 &&
        ((c = this.node),
        c.la(
          c.Db *
            (1.4 +
              (((a < 0.5 ? 0.5 : a > 0.6 ? 0.6 : a) - 0.5) /
                0.09999999999999998) *
                -0.3999999999999999),
        ));
    }
    bj() {
      this.rwa();
      this.im();
    }
    im(a, b, c, d) {
      d == null && (d = 0);
      c == null && (c = "CANCEL");
      b == null && (b = "OK");
      a == null && (a = "");
      this.rwa();
      this.c9 = a;
      this.Tl = b;
      this.mq = c;
      this.$qa = d;
    }
    start() {
      this.dB();
      this.fU(this.c9);
      this.KF(this.$qa);
      this.layout();
    }
    layout() {
      this.node.update();
      this.Oe.D(-this.Md / 2);
      let a = this.Md / 2;
      a < 300 && (a = 300);
      a > 1e3 && (a = 1e3);
      this.Xc.D(-(a + this.Xc.zfa().y));
      let b = this.Cd.node.ra() / 2;
      this.Cd.D(a + this.Cd.node.ra() / 2);
      this.Hy.D(this.Xc.qa + -25);
      this.Hy.Ga();
      this.Wx.D(this.Cd.node.qa + b);
      this.Wx.Ga();
    }
    B() {
      this.Jga || (super.B(), this.Pw(), (this.Jga = !0));
    }
    close(a) {
      a == null && (a = !1);
      this.He(1);
      a && this.u_();
    }
    He(a) {
      this.g8 || ((this.R7 = a), (this.g8 = !0), (this.time = 0));
    }
    u_() {
      this.Gra || ((this.Gra = !0), this.hh(0, this.R7));
      Wb.F().Xwb(this);
      this.B();
    }
    wBa() {
      return this.Kb != null ? this.Kb.ee : this.Sb != null ? this.Sb.ee : 1;
    }
    dB() {}
    KF(a) {
      let b = a == 3;
      this.S7.length = 0;
      this.Sb != null &&
        (b || a == 1
          ? (this.oR(this.Sb, 1),
            this.Sb.node.C(b ? this.Sb.width / 2 + 32 : 0),
            this.S7.push(this.Sb))
          : this.Sb.Y(!1));
      this.Kb != null &&
        (b || a == 2
          ? (this.oR(this.Kb, 2),
            this.Kb.node.C(b ? -(this.Kb.width / 2 + 32) : 0),
            this.S7.push(this.Kb))
          : this.Kb.Y(!1));
      b && this.Sb.ROa(this.Kb);
    }
    oR(a, b) {
      a.Y(!0);
      let c = "",
        d = 0,
        e = !0,
        f = "EButtonWhite";
      b == 2
        ? ((e = this.V7), (c = this.mq), (f = "EButtonDark"), (d = 0))
        : b == 1 &&
          ((e = this.b$), (c = this.Tl), (f = "EButtonWhite"), (d = 1));
      a.YT(f);
      a.V(e ? Y.na(c) : c);
      a.ee = d;
      a.oa.addListener(w(this, this.He));
      a.node.C(this.GV.x / 2);
    }
    fU(a) {
      a == "" && ((a = "SENSEI"), (this.b9 = !1));
      this.Xc = new ea(E.Na(), this.node);
      this.Xc.Fa(1560, 160);
      this.Xc.C(-780);
      this.Xc.ua(152);
      this.Xc.La(Z.h7);
      this.Xc.V(this.b9 ? Y.na(a) : a);
      this.Xc.Ia(128);
    }
    rwa() {
      this.D8 == null &&
        ((this.D8 = Fc.Ed(0, this.mG.L)), this.mG.L.erb(this.D8.L));
    }
    lMa() {}
    jMa() {}
    kMa() {}
    BMa() {}
    CMa() {}
    ii(a) {
      let b = new Bb("EButtonDark");
      b.Qb(125);
      b.Kd(a);
      this.Cd.appendChild(b);
      return b;
    }
  }
  od.g = "3E6";
  od.u = O;
  Object.assign(od.prototype, { j: od });
  class xn extends od {
    constructor() {
      super();
      this.Hy = R.aa(E.get(256), y.sB, this.node);
      this.Wx = R.aa(E.get(256), y.yM, this.node);
      this.Sb = new Bb("EButtonDark");
      this.Sb.Qb(125);
      this.Cd.appendChild(this.Sb);
    }
    bj(a) {
      super.bj(a);
      Vb.F().vS.addListener(w(this, this.Jn));
      Vb.F().wS.addListener(w(this, this.Jn));
      Vb.F().C3.addListener(w(this, this.Jn));
      this.im("salesTitle", "compareCloseBtn", null, 1);
      xa.F().v3.addListener(w(this, this.mIa));
    }
    B() {
      xa.F().v3.removeListener(w(this, this.mIa));
      Vb.F().vS.removeListener(w(this, this.Jn));
      Vb.F().wS.removeListener(w(this, this.Jn));
      Vb.F().C3.removeListener(w(this, this.Jn));
      super.B();
    }
    Jn() {
      this.dB();
      this.layout();
    }
    fU(a) {
      super.fU(a);
      this.Xc.Fa(1560, 160);
      this.Xc.C(-780);
    }
    dB() {
      var a = this.zO;
      a != null && a.B();
      a = this.UX;
      a != null && a.B();
      this.zO = this.appendChild(ra.Ya(O, [].slice()));
      this.UX = this.appendChild(ra.Ya(O, [].slice()));
      var b = Vb.F().hya();
      this.zO.C(-750);
      this.zO.D(-150);
      this.UX.C(-750);
      this.UX.D(150);
      a = [this.zO, this.UX];
      var c = b.length > 6 ? 4 : 3;
      let d = b.length > 6 ? 400 : 500,
        e = [0, 0];
      var f = 0;
      let g = 0,
        h = b.length;
      for (; g < h; ) {
        var k = g++;
        k % c == 0 && (f = d / 2);
        let l = (k / c) | 0;
        e[l]++;
        k = b[k];
        a[l].appendChild(k);
        k.mf(d);
        k.C(f);
        f += d + 100;
      }
      for (b = this.Md = 0; b < 2; ) {
        f = b++;
        c = e[f];
        this.Md += a[f].node.ra();
        if (c == 0) continue;
        f = a[f];
        f.C(f.node.za + (1500 - (c * d + (c - 1) * 100)) / 2);
      }
      e[1] == 0 && this.zO.D(0);
    }
    mIa() {
      this.He(null);
    }
  }
  xn.g = "3E7";
  xn.u = od;
  Object.assign(xn.prototype, { j: xn });
  class wn extends od {
    constructor() {
      super(2340, 1300);
      this.r_ = null;
      this.kb = new ea(E.Na(), this.Oe);
      this.kb.Lc(0.75);
      this.Hy = R.aa(E.get(256), y.sB, this.node);
      this.Wx = R.aa(E.get(256), y.yM, this.node);
      this.Sb = new Bb("EButtonDark");
      this.Cd.appendChild(this.Sb);
      this.Kb = new Bb("EButtonDark");
      this.Kb.Ym(null, y.tB);
      this.Cd.appendChild(this.Kb);
      this.Kb.Y(!1);
    }
    bj(a) {
      this.r_ = a;
      this.im(this.r_.title, "dlgExitButton", "CANCEL", 3);
    }
    dB() {
      this.kb.Fa(1100, 550);
      this.kb.Ia(2);
      this.kb.Lc(0.9);
      this.kb.ua(125);
      this.kb.C(-550);
      this.kb.rd(!0);
      this.kb.La(Z.sc);
      this.kb.V(Y.na(this.r_.content));
      this.Md = this.kb.jw();
    }
    KF(a) {
      super.KF(a);
      this.Sb.oa.clear();
      this.Sb.oa.addListener(w(this, this.h4a));
    }
    h4a(a) {
      this.Sb.Qf = !1;
      this.Kb.Qf = !1;
      let b = this;
      ya.g5a(function () {
        L.J.qx("button:exit:surrender", function () {
          b.l3a(a);
        });
      });
    }
    l3a(a) {
      this.r_.Xy();
      super.He(a);
    }
  }
  wn.g = "3E8";
  wn.u = od;
  Object.assign(wn.prototype, { j: wn });
  class Ib extends O {
    constructor() {
      super();
      this.T1 = this.IU = this.Bma = this.jr = !1;
      this.image = this.scroll = null;
      this.At = "";
      this.button = this.label = null;
      this.Iba = this.text = "";
      this.mwa = "EButtonWhite";
      this.XK = 0;
      this.TPa = !1;
      this.tk = null;
      this.Qda = !1;
      this.Xy = null;
      this.ny = 0;
      Ib.VDa();
      this.h2a();
      this.layout();
    }
    Z(a) {
      super.Z(a);
      this.XK -= a;
      this.XK <= 0 && (this.Bma = !0);
      this.layout();
      this.g_a();
      this.button != null &&
        this.button.Eb &&
        ((this.button.Qf = !1), this.H4(!0));
      !this.Qda &&
        Ld.Qfb.d4a &&
        L.J.Uj().Eb(156) &&
        ((this.Qda = !0), this.H4(!1));
    }
    layout() {
      var a = N.width,
        b = N.height;
      let c = Math.min(a * 0.75, b * 0.75) / this.scroll.width;
      this.node.la(c < 0.2 ? 0.2 : c > 1.1 ? 1.1 : c);
      this.node.C(a - this.scroll.width * this.node.Db);
      this.node.D(b * 0.1);
      za.instance != null &&
        ((a = za.instance.Zp),
        this.node.D(a),
        N.lc < 0.85 && ((b = this.node), b.D(b.qa + a)));
    }
    h2a() {
      this.scroll = this.appendChild(new hk(600, 250, 50, 0, !1));
      let a = new Gg(600, 250, 1, 30);
      this.scroll.nL.appendChild(a.node);
      this.scroll.collapse(0);
      this.scroll.t3.addListener(w(this, this.ggb));
      this.scroll.He.addListener(w(this, this.Dhb));
      this.scroll.button.Y(!1);
    }
    B() {
      super.B();
      Ib.Hb = null;
    }
    lib(a, b, c, d, e, f, g, h) {
      var k;
      k == null && (k = 1);
      h == null && (h = !0);
      g == null && (g = !1);
      f == null && (f = 0);
      this.zYa()
        ? (this.ZL(!1),
          (this.T1 = !1),
          (this.TPa = g),
          (this.Iba = d),
          (this.mwa = e),
          (this.Xy = c),
          (this.XK = f),
          (this.At = a),
          (this.tk = b),
          (this.ny = k),
          h &&
            ((this.Xz = Fc.Ed(-65281, this.node.L)),
            this.Xz.wa(0),
            this.node.L.eMa(this.Xz.L)),
          this.Xr(),
          (this.Bma = !1),
          this.node.R(!0),
          this.node.L.parent == null && ma.Kg().Rr.df.appendChild(this.node.L))
        : this.ZL(!1);
    }
    Zcb() {
      let a = !0;
      if (L.J.ed().Eb(0)) {
        this.Xz != null && (this.Xz.L.Ow = !1);
        let b = N.mn();
        this.node.Bd(b, []) && (a = !1);
        this.Xz != null && (this.Xz.L.Ow = !0);
      } else a = !1;
      return a;
    }
    g_a() {
      this.Bma && this.scroll.AJ && this.Zcb() && this.H4(!1);
    }
    nj(a) {
      var b = new Fb();
      let c = 0,
        d = a.length;
      for (; c < d; ) at.Iva(b, "^{0}^\n", a[c++].text);
      a = b.M.split("");
      for (b = a.length - 1; b >= 0 && a[b] == "\n"; ) --b;
      this.text = a.slice(0, b + 1).join("");
    }
    Xr() {
      if (this.jr) ((this.IU = !0), this.close(!1));
      else {
        this.nj(this.tk);
        var a = v.fJa(this.At),
          b = this.image;
        b != null && b.B();
        b = a.fileName.replace(RegExp("_small$", ""), "");
        this.image = R.aa(E.get(13), b, this.scroll.nL);
        this.image.Ga();
        this.image.C(this.image.ea.x / 2);
        this.image.D(130);
        this.image.Mr(a.ip);
        a = this.label;
        a != null && a.B();
        this.label = new ea(E.Na(), this.scroll.nL);
        a = 600 - this.image.ea.x + 20;
        this.label.Fa(a, 150);
        this.label.C(this.image.ea.x - 30);
        this.label.D(50);
        this.label.rd(!0);
        this.label.ua(50);
        this.label.GL(50);
        this.label.La(Z.sc);
        this.label.Lc(0.65);
        this.label.Ia(64);
        b = Y.na(this.text);
        let c = new Ua("<image>(ComboButtons/icon_[a-z]+)</image>", "g");
        c.match(b) && (b = b.replace(c.r, "<image s=0.75>$1</image>"));
        this.label.V(b);
        this.label.Uk();
        b = this.button;
        b != null && b.B();
        this.button = null;
        Ib.YP ? (b = !1) : ((b = this.Iba), (b = !(b == null || b == "")));
        b && this.Xy != null
          ? ((this.button = new Bb(this.mwa)),
            this.button.V(Y.na(this.Iba)),
            this.scroll.nL.appendChild(this.button.node),
            this.button.node.C(450),
            this.button.node.D(185),
            this.button.Df(100),
            this.button.Y(!0),
            this.button.oa.addListener(w(this, this.Fgb)),
            this.appendChild(this.button),
            this.label.Fa(a, 130),
            (a = this.label),
            a.ua(a.effect.fontSize - 10),
            this.label.Lc(0.65),
            this.label.Uk())
          : this.TPa || this.ZL(!1);
        this.open();
      }
    }
    ggb(a) {
      this.jr = a;
      this.jr || (this.IU || this.ZL(this.T1), (this.T1 = !1));
    }
    Dhb() {
      this.Qda = !0;
      this.IU
        ? ((this.IU = !1), this.Xr())
        : this.Xy == null && this.node.R(!1);
    }
    Fgb() {
      this.H4(!0);
    }
    H4(a) {
      this.jr && ((this.T1 = a), this.ZL(a), this.close(!1));
    }
    ZL(a) {
      if (this.Xy != null) {
        let b = this.Xy;
        this.Xy = null;
        b(a ? 1 : 0);
      }
    }
    open() {
      this.node.R(!0);
      this.scroll.expand(0.5);
    }
    close(a) {
      this.IU || this.ZL(!1);
      this.scroll.collapse(a ? 0 : 0.5);
      a = this.Xz;
      a != null && a.B();
      this.Xz = null;
    }
    zYa() {
      var a = xa.F().Td.Wf;
      return a == 0 ||
        a == 10 ||
        (a == 6 &&
          ((a = ai.get()),
          a != null &&
            a.Jg != null &&
            a.Jg.Da != null &&
            a.Jg.Da.type != "FightNone"))
        ? !1
        : !0;
    }
    static F() {
      Ib.Hb == null && ((Ib.Hb = new Ib()), L.J.root.appendChild(Ib.Hb));
      return Ib.Hb;
    }
    static Hxa() {
      Ib.Hb != null && Ib.Hb.jr && Ib.Hb.close(!1);
    }
    static VDa() {
      Ib.Hb != null && Ib.Hb.jr && Ib.Hb.close(!0);
    }
  }
  Ib.g = "3E9";
  Ib.u = O;
  Object.assign(Ib.prototype, { j: Ib });
  class Ve extends od {
    constructor() {
      super();
      this.z9 = "";
      this.Qra = !1;
      this.AG = null;
      new H(0, 0, 0, 1);
      this.kb = new ea(E.Na(), this.Oe);
      this.kb.Fa(1100, 550);
      this.kb.rd(!0);
      this.kb.Ia(128);
      this.kb.La(Z.sc);
      this.kb.C(-550);
      this.kb.Lc(0.9);
      this.kb.ua(125);
      this.Hy = R.aa(E.get(256), y.sB, this.node);
      this.Wx = R.aa(E.get(256), y.yM, this.node);
      this.Sb = this.ii("ok");
      this.Kb = this.ii("cancel");
    }
    bj(a) {
      let b = "",
        c = 0;
      a != null &&
        ((this.Tl = a.yHa),
        (this.c$ = a.xHa),
        (this.b$ = a.r3),
        (this.mq = a.Lwa),
        (this.W7 = a.Kwa),
        (this.V7 = a.Jwa),
        (this.AG = a.ge),
        (this.z9 = a.text),
        (this.Qra = a.zU),
        (b = a.Iab),
        (this.b9 = a.z1),
        (c = a.buttons));
      this.im(b, this.Tl, this.mq, c);
    }
    dB() {
      this.kb != null &&
        (this.Qra ? this.kb.V(Y.na(this.z9)) : this.kb.V(this.z9));
    }
    oR(a, b) {
      let c = "",
        d = 0,
        e = !0,
        f = "EButtonWhite";
      b == 2
        ? ((e = this.V7), (c = this.mq), (f = this.W7), (d = 0))
        : b == 1 && ((e = this.b$), (c = this.Tl), (f = this.c$), (d = 1));
      a.YT(f);
      e ? a.V(Y.na(c)) : a.V(c);
      a.ee = d;
      a.oa.addListener(w(this, this.He));
    }
  }
  Ve.g = "3EA";
  Ve.u = od;
  Object.assign(Ve.prototype, { j: Ve });
  class og extends Ve {
    constructor() {
      super();
      this.kb.ua(100);
      this.kb.Lc(0.8);
      this.Md += 100;
      this.qj = window.document.createElement("input");
      this.qj.type = "text";
      this.qj.id = "textInput";
      this.qj.maxLength = 8;
      this.qj.pattern = "[A-Za-z0-9]{0,8}";
      this.qj.addEventListener("input", function (a) {
        let b = J.substr(
          a.target.value.replace(RegExp("[^A-Za-z0-9]", "g"), ""),
          0,
          8,
        );
        a.target.value = b;
      });
      this.qj.autocomplete = "one-time-code";
      this.qj.style.position = "fixed";
      window.document.body.appendChild(this.qj);
      og.code = "";
    }
    B() {
      super.B();
      this.qj.remove();
    }
    bj(a) {
      super.bj(a);
      a.ge != null && ((this.AG = a.ge), this.addEventListener(0, a.ge));
    }
    Z(a) {
      super.Z(a);
      if (!this.Jga) {
        a = 1 / window.devicePixelRatio;
        var b = Math.round(500 * this.node.Db * a),
          c = Math.round(125 * this.node.Db * a),
          d = this.node.Dm(new H(0, 150, 0, 1)),
          e = Math.round(d.y * a - c / 2);
        this.qj.style.left = Math.round(d.x * a - b / 2) + "px";
        this.qj.style.top = e + "px";
        this.qj.style.width = b + "px";
        this.qj.style.height = c + "px";
        this.qj.style.boxSizing = "border-box";
        this.qj.style.fontSize = Math.round(c * 0.75) + "px";
        this.qj.focus();
        og.code = this.qj.value;
      }
    }
    u_() {
      this.R7 = this.R7 == 1 ? og.code : null;
      super.u_();
    }
  }
  og.g = "3EB";
  og.u = Ve;
  Object.assign(og.prototype, { j: og });
  class yn extends od {
    constructor() {
      function a(q, r) {
        let t = new ea(n.N8.v[n.ev], l);
        t.La(Z.sc);
        let x = q.ya() * 0.2;
        t.Fa(800 - q.ya() - x, q.ra());
        t.C(q.za + q.ya() / 2 + x * 0.2);
        t.D(q.qa - q.ra() / 2);
        t.V(n.Qj(r));
        t.rd(!0);
        t.Ia(64);
        t.Lc(0.6);
        t.Uc(!1);
        return t;
      }
      function b(q) {
        q = R.aa(E.get(252), q, l);
        q.C(-q.ya() * 0.9);
        q.D(k * q.ra() * 1.25);
        q.Ga();
        return q;
      }
      function c(q, r) {
        let t = r.ya(),
          x = r.ra(),
          z = R.Ed(65280, 800, x, l);
        z.D(k * x * 1.25 - x / 2);
        z.C(r.za - t / 2);
        r = $a.bJ(z.L);
        r = n.appendChild(r);
        r.ee = q;
        r.oa.addListener(w(n, n.GHa));
        return r;
      }
      super();
      this.$Va = {
        Settings_Title: {
          en: "SETTINGS",
          de: "EINSTELLUNGEN",
          it: "IMPOSTAZIONI",
          fr: "OPTIONS",
          pt: "OP\u00c7\u00d5ES",
          ru: "\u041d\u0410\u0421\u0422\u0420\u041e\u0419\u041a\u0418",
          es: "AJUSTES",
          tr: "AYARLAR",
          ja: "\u8a2d\u5b9a",
          ko: "\uc124\uc815",
        },
        Settings_Music: {
          en: "Music",
          de: "Musik",
          it: "Musica",
          fr: "Musique",
          pt: "Musica",
          ru: "\u041c\u0443\u0437\u044b\u043a\u0430",
          es: "M\u00fasica",
          tr: "M\u00fczik",
          ja: "\u97f3\u697d",
          ko: "\uc74c\uc545",
        },
        Settings_Sound: {
          en: "Sound",
          de: "T\u00f6ne",
          it: "Audio",
          fr: "Son",
          pt: "Som",
          ru: "\u0417\u0432\u0443\u043a",
          es: "Sonido",
          tr: "Ses",
          ja: "\u52b9\u679c\u97f3",
          ko: "\uc0ac\uc6b4\ub4dc",
        },
        Settings_Credits: {
          en: "Credits",
          de: "Credits",
          it: "Crediti",
          fr: "Credits",
          pt: "Cr\u00e9ditos",
          ru: "\u0410\u0432\u0442\u043e\u0440\u044b",
          es: "Cr\u00e9ditos",
          tr: "Krediler",
          ja: "\u30af\u30ec\u30b8\u30c3\u30c8",
          ko: "\uc81c\uc791\uc9c4",
        },
        Settings_Restore: {
          en: "Restore savegame",
          de: "Spielstand wiederherstellen",
          it: "Ripristina salvataggio",
          fr: "Restaurer la sauvegarde",
          pt: "Restaurar progresso",
          ru: "\u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435",
          es: "Restaurar partida guardada",
          tr: "Kay\u0131tl\u0131 oyunu geri y\u00fckle",
          ja: "\u30bb\u30fc\u30d6\u30c7\u30fc\u30bf\u3092\u5fa9\u5143",
          ko: "\uc800\uc7a5 \ub370\uc774\ud130 \ubcf5\uc6d0",
        },
        Restore_Info: {
          en: "Please enter the code you received from us by email:",
          de: "Gib bitte den Code ein, den du per E-Mail von uns erhalten hast:",
          it: "Inserisci il codice che hai ricevuto via e-mail:",
          fr: "Veuillez saisir le code que vous avez re\u00e7u par e-mail:",
          pt: "Por favor, insira o c\u00f3digo que recebeu por e-mail:",
          ru: "\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0434, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438 \u043f\u043e \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u0435:",
          es: "Por favor, introduce el c\u00f3digo que recibiste por correo electr\u00f3nico:",
          tr: "L\u00fctfen e-posta ile taraf\u0131m\u0131za g\u00f6nderilen kodu girin:",
          ja: "\u30e1\u30fc\u30eb\u3067\u304a\u9001\u308a\u3057\u305f\u30b3\u30fc\u30c9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044:",
          ko: "\uc774\uba54\uc77c\ub85c \ubc1b\uc740 \ucf54\ub4dc\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694",
        },
        Restore_Error: {
          en: "Invalid code entered. Please try again.",
          de: "Ung\u00fcltiger Code eingegeben. Bitte versuche es erneut.",
          it: "Codice non valido. Riprova.",
          fr: "Code invalide. Veuillez r\u00e9essayer.",
          pt: "C\u00f3digo inv\u00e1lido. Por favor, tente novamente.",
          ru: "\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043a\u043e\u0434. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.",
          es: "Por favor, introduce el c\u00f3digo que recibiste por correo electr\u00f3nico:",
          tr: "Ge\u00e7ersiz kod girildi. L\u00fctfen tekrar deneyin.",
          ja: "\u7121\u52b9\u306a\u30b3\u30fc\u30c9\u3067\u3059\u3002\u3082\u3046\u4e00\u5ea6\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
          ko: "\uc798\ubabb\ub41c \ucf54\ub4dc\uc785\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
        },
        ERROR: {
          en: "ERROR",
          de: "ERROR",
          it: "ERROR",
          fr: "ERROR",
          pt: "ERROR",
          ru: "ERROR",
          es: "ERROR",
          tr: "ERROR",
          ja: "ERROR",
          ko: "ERROR",
        },
        Settings_Language: {
          en: "English",
          de: "Deutsch",
          it: "Italiano",
          fr: "Fran\u00e7ais",
          pt: "Portugu\u00eas",
          ru: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
          es: "Espa\u00f1ol",
          tr: "T\u00fcrk\u00e7e",
          ja: "\u65e5\u672c\u8a9e",
          ko: "\ud55c\uad6d\uc5b4",
        },
        Settings_Back: {
          en: "BACK",
          de: "ZUR\u00dcCK",
          it: "INDIETRO",
          fr: "RETOUR",
          pt: "VOLTAR",
          ru: "\u041d\u0410\u0417\u0410\u0414",
          es: "ATR\u00c1S",
          tr: "GER\u0130",
          ja: "\u623b\u308b",
          ko: "\ub4a4\ub85c",
        },
        dlgSettingsRestart: {
          en: "Attention! Game must be restarted for these settings to apply.",
          de: "Achtung! Das Spiel muss neu gestartet werden, um die \u00c4nderungen zu \u00fcbernehmen.",
          it: "Attenzione! Devi riavviare il gioco affinch\u00e9 i cambiamenti abbiano effetto.",
          fr: "Attention ! Vous pouvez avoir \u00e0 relancer le jeu pour l'application de certains param\u00e8tres.",
          pt: "Aten\u00e7\u00e3o! O jogo deve ser reiniciado para que essas configura\u00e7\u00f5es sejam aplicadas.",
          ru: "\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435! \u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0432\u0441\u0442\u0443\u043f\u044f\u0442 \u0432 \u0441\u0438\u043b\u0443 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u0441\u043b\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0438\u0433\u0440\u044b.",
          es: "\u00a1Atenci\u00f3n! Hay que reiniciar el juego para que se aplique esta configuraci\u00f3n.",
          tr: "Dikkat! Bu ayarlar\u0131n uygulanmas\u0131 i\u00e7in oyunun tekrar ba\u015flamas\u0131 gerekiyor.",
          ja: "\u6ce8\u610f\uff01 \u30b2\u30fc \u30e0\u304c\u518d\u8d77\u52d5 \u3055\u308c\u308b\u307e\u3067 \u3053\u306e\u8a2d\u5b9a\u306f \u9069\u7528\u3055\u308c\u307e\u305b\u3093\u3002",
          ko: "\uc9d1\uc911! \uc774 \uc124\uc815\uc744 \uc801\uc6a9\ud558\ub824\uba74 \uac8c\uc784\uc744 \ub2e4\uc2dc \uc2dc\uc791\ud574\uc57c \ud569\ub2c8\ub2e4!",
        },
        dlgServiceRestart: {
          en: "RESTART",
          de: "NEU STARTEN",
          it: "RIAVVIA",
          fr: "REDEMARRER",
          pt: "RECOME\u00c7AR",
          ru: "\u041f\u0415\u0420\u0415\u0417\u0410\u041f\u0423\u0421\u0422\u0418\u0422\u042c",
          es: "REINICIAR",
          tr: "TEKRAR BA\u015eLA",
          ja: "\u518d\u8d77\u52d5",
          ko: "\ub2e4\uc2dc \uc2dc\uc791",
        },
      };
      var d = G.Uq(255);
      this.N8 = new ac();
      d = new cd(mb.ll(Pg.LI(d.b.Ev)));
      for (var e = 0, f = jv; e < f.length; ) {
        let q = f[e++];
        var g = d.ie(),
          h = new mb(new ArrayBuffer(g));
        d.fk(h, 0, g);
        g = L.J.Ha;
        let r = G.data.v[254];
        h = new xq().fk(h);
        h = g.CP(r, 24, new ve(yq.Wq(h), 1, yq.JAa(h)));
        this.N8.v[q] = h;
      }
      this.ev = G.lp();
      this.E9 = jv.indexOf(this.ev);
      this.Hy = R.aa(E.get(256), y.sB, this.node);
      this.Wx = R.aa(E.get(256), y.sB, this.node);
      let k = 0.5,
        l = null,
        n = this;
      d = e = !0;
      e = ya.hasFeature("audio");
      d = ya.hasFeature("credits");
      e || (k += 0.5);
      d || (k += 0.5);
      e &&
        ((l = e = new Ea(this.Oe, "sound")),
        (this.haa = b(db.Pz() ? y.yoa : y.xoa)),
        c(1, this.haa),
        (this.EW = a(this.haa, "Settings_Sound")),
        (l = f = new Ea(this.Oe, "music")),
        (this.faa = b(db.op() ? y.woa : y.voa)),
        c(0, this.faa),
        (this.DW = a(this.faa, "Settings_Music")),
        e.C(0),
        f.C(500),
        e.C(e.za - 300),
        f.C(f.za - 200),
        (k += 1));
      l = new Ea(this.Oe, "credits");
      d &&
        ((this.$ta = b(y.KSa)),
        c(2, this.$ta),
        (this.BW = a(this.$ta, "Settings_Credits")),
        (k += 1));
      l = new Ea(this.Oe, "lang");
      this.daa = b(G.lp());
      c(4, this.daa);
      this.J9 = a(this.daa, "Settings_Language");
      this.Pm = new ea(E.Na(), this.node);
      this.Pm.La(Z.sc);
      this.Pm.Fa(1500, 50);
      this.Pm.Ia(2);
      this.Pm.C(-750);
      this.Pm.D(250);
      this.Pm.ua(75);
      this.Pm.Lc(0.6);
      this.Pm.rd(!0);
      this.Pm.R(!1);
      this.Pm.V(Y.na("dlgSettingsRestart"));
      this.Kb = new Bb("EButtonDark");
      this.Cd.appendChild(this.Kb);
      this.Kb.ee = 0;
      this.Kb.Qb(150);
      this.Kb.V(Y.na("Settings_Back"));
      this.Kb.oa.addListener(w(this, this.He));
      this.Mm = new Bb("EButtonBeige");
      this.Cd.appendChild(this.Mm);
      this.Mm.ee = 5;
      this.Mm.C(500);
      this.Mm.Qb(150);
      this.Mm.V(Y.na("dlgServiceRestart"));
      this.Mm.Y(!1);
      this.Mm.oa.addListener(w(this, this.GHa));
      this.Md = 750;
    }
    B() {
      super.B();
      E.iD(252);
      G.Vr(253);
      E.iD(254);
      G.Vr(255);
    }
    bj() {
      super.im("Settings_Title", "Settings_Advanced", "Settings_Back", 3);
    }
    close() {
      debugger;
      this.He(0);
    }
    fU(a) {
      super.fU(a);
      this.Xc.Fa(1560, 160);
      this.Xc.C(-780);
    }
    KF() {}
    GHa(a) {
      sb.xm();
      switch (a) {
        case 0:
          db.aU(!db.op());
          this.faa.yb(db.op() ? y.woa : y.voa);
          ya.zQ(ua.gE && ua.fE);
          break;
        case 1:
          db.bU(!db.Pz());
          this.haa.yb(db.Pz() ? y.yoa : y.xoa);
          ya.zQ(ua.gE && ua.fE);
          break;
        case 2:
          xh.show();
          break;
        case 3:
          this.openDialog();
          break;
        case 4:
          a = jv;
          this.E9 = (this.E9 + 1) % a.length;
          this.ev = a[this.E9];
          this.D9 = G.lp() != this.ev;
          switch (this.ev) {
            case "ja":
            case "ko":
            case "ru":
              ea.i1 = 0.8;
              ea.j1 = 1.2;
              break;
            default:
              ((ea.i1 = 1), (ea.j1 = 1));
          }
          this.kzb();
          this.daa.yb(this.ev);
          this.D9
            ? (this.Mm.Y(!0),
              this.Kb.C(-this.Kb.width * 0.6),
              this.Mm.C(this.Mm.width * 0.6))
            : (this.Mm.Y(!1), this.Kb.C(0));
          break;
        case 5:
          (this.D9 && (G.cla(this.ev), p.YJ.save(!0)), L.J.reload());
      }
    }
    kzb() {
      let a = this.N8.v[this.ev];
      this.Xc.sg(a);
      this.Xc.V(this.Qj("Settings_Title"));
      this.Xc.ua(152);
      this.EW != null &&
        (this.EW.sg(a), this.EW.V(this.Qj("Settings_Sound")), this.EW.ua(100));
      this.DW != null &&
        (this.DW.sg(a), this.DW.V(this.Qj("Settings_Music")), this.DW.ua(100));
      this.BW != null &&
        (this.BW.sg(a),
        this.BW.V(this.Qj("Settings_Credits")),
        this.BW.ua(100));
      this.J9.sg(a);
      this.J9.V(this.Qj("Settings_Language"));
      this.J9.ua(100);
      this.Pm.R(this.D9);
      this.Pm.sg(a);
      this.Pm.V(this.Qj("dlgSettingsRestart"));
      this.Kb.label.sg(a);
      this.Kb.V(this.Qj("Settings_Back"));
      this.Mm.label.sg(a);
      this.Mm.V(this.Qj("dlgServiceRestart"));
    }
    Qj(a) {
      return Kb.Ve(Kb.Ve(this.$Va, a), this.ev);
    }
    openDialog() {
      let a = new ph(
        this.Qj("Settings_Restore"),
        this.Qj("Restore_Info"),
        3,
        this.Qj("OK"),
        this.Qj("CANCEL"),
        "EButtonGreen",
        "EButtonWhite",
        !1,
        !1,
        "",
        function () {},
      );
      a.zU = !1;
      a.r3 = !1;
      a.z1 = !1;
      let b = this;
      a.ge = function (c) {
        c != null &&
          ya.Jmb(c, function () {
            b.zvb();
          });
      };
      Wb.openDialog(500, a);
    }
    zvb() {
      let a = new ph(
        this.Qj("ERROR"),
        this.Qj("Restore_Error"),
        1,
        this.Qj("OK"),
        null,
        "EButtonGreen",
        null,
        !1,
        !1,
        "",
        function () {},
      );
      a.zU = !1;
      a.r3 = !1;
      a.z1 = !1;
      Wb.openDialog(340, a);
    }
  }
  yn.g = "3EC";
  yn.u = od;
  Object.assign(yn.prototype, { j: yn });
  class zn extends Ve {
    constructor() {
      super();
    }
    bj(a) {
      this.Go = m.l();
      this.qe = new O();
      this.Oe.appendChild(this.qe.node);
      this.appendChild(this.qe);
      this.Fqa = this.Gta = this.Ns = this.U$ = 0;
      a != null &&
        a instanceof Yo &&
        ((this.Ri = a.title),
        (this.Tl = a.jka),
        (this.c$ = a.X4),
        (this.mq = a.tha),
        (this.W7 = a.A2),
        a.ge != null && this.addEventListener(0, a.ge),
        (this.ON = a.zeb));
      a = this.mq;
      this.im(this.Ri, this.Tl, this.mq, a == null || lc(a) ? 1 : 3);
    }
    B() {
      super.B();
      this.Go.length = 0;
    }
    dB() {
      this.Abb(this.ON);
      this.Fta = this.qe.node.ra();
      this.Md = 600;
      if (this.Go.length > 1) {
        this.QX = R.aa(E.get(262), "slider_track");
        this.Oe.appendChild(this.QX);
        this.QX.C(this.rs / 2 - 39);
        this.QX.xc(40);
        this.QX.Qb(this.Md);
        this.Js = new gk();
        this.appendChild(this.Js);
        this.Js.smooth = !0;
        this.Js.C(this.rs / 2 - 40);
        this.Js.D(-this.Md / 2);
        this.Js.ba(40, this.Md);
        this.Js.reset();
        this.Js.rr = this.Go.length;
        let a = -this.rs / 2;
        this.Oe.qL(new hb(a, 0, a + this.rs, this.Md));
      }
    }
    Z(a) {
      super.Z(a);
      if (this.Go.length != 1 && this.node != null)
        if (this.Js.tR)
          (this.qe.D(-this.Js.ratio * (this.Fta - this.Md)), (this.Ns = 0));
        else {
          a = this.node.$n(N.mn(0));
          var b = this.rs / 2,
            c = this.Md / 2;
          c = a.x > -b && a.x < b && a.y > -c && a.y < c;
          b = this.Fta - this.Md;
          this.Js.PT(-this.qe.node.qa / b);
          switch (this.U$) {
            case 0:
              this.Ns *= 0.9;
              var d = this.qe;
              d.D(d.node.qa + this.Ns);
              this.Gta = this.qe.node.qa;
              d = L.J.Vfa().Efa();
              d != 0 && c && (this.Ns += (d > 0 ? 1 : d < 0 ? -1 : 0) * 10);
              c &&
                L.J.ed().Eb(0) &&
                ((this.Ns = 0), (this.Fqa = a.y), (this.U$ = 1));
              break;
            case 1:
              L.J.ed().Xe(0)
                ? ((a = a.y - this.Fqa),
                  (this.Ns = L.J.ed().pM[0].y * 0.01),
                  this.qe.D(this.Gta + a))
                : (this.U$ = 0);
          }
          this.qe.node.qa > 0 && (this.qe.D(0), (this.Ns = 0));
          this.qe.node.qa < -b && (this.qe.D(-b), (this.Ns = 0));
        }
    }
    Abb(a) {
      this.ON = a;
      a = this.Md = this.Go.length = 0;
      for (var b = this.ON; a < b.length; ) this.oya(b[a++]);
      a = 0;
      for (b = this.Go; a < b.length; ) b[a++].icon.zLa(800, 600);
      b = this.Go[0];
      b.D(b.node.ra() / 2);
      a = b.icon.ya() / 2;
      for (var c = 1, d = this.Go.length; c < d; ) {
        let e = this.Go[c++];
        e.icon.C(this.node.za);
        a = Math.max(e.icon.ya() / 2, a);
        e.D(b.node.qa + b.node.ra() / 2 + e.node.ra() / 2);
        b = e;
      }
      b = 0;
      for (c = this.Go; b < c.length; )
        ((d = c[b]), ++b, d.Lw.C(a + 100), d.text.C(a + 100 + d.Lw.node.ya()));
      b = this.rs = 0;
      for (c = this.Go; b < c.length; )
        this.rs = Math.max(this.rs, c[b++].node.ya());
      this.rs += 200;
      this.qe.C(-a / 2);
    }
    oya(a, b) {
      if (a != null)
        if (a.type == I.yk) {
          a.On > 0 &&
            this.LZ(function (d) {
              d.Kr(a.On);
            });
          a.Pp > 0 &&
            this.LZ(function (d) {
              d.xl(a.Pp);
            });
          var c = a.Lj;
          (c == null || c == "") &&
            a.cn > 0 &&
            v.Tq.AD(a.Lj) != null &&
            this.LZ(function () {});
          if (nt.Xga(a)) {
            c = 0;
            let d = a.Lt;
            for (; c < d.length; ) {
              let e = d[c];
              ++c;
              this.oya(p.items.$b(e.name), e.Fda);
            }
          }
        } else
          this.LZ(function (d) {
            d.setItem(a, 1, b);
          });
    }
    LZ(a) {
      let b = new zr();
      this.qe.appendChild(b);
      a(b);
      this.Go.push(b);
    }
  }
  zn.g = "3ED";
  zn.u = Ve;
  Object.assign(zn.prototype, { j: zn });
  class zr extends O {
    constructor() {
      super();
      this.$Ua = new H(0, -25, 0, 1);
      this.pX = m.l();
      this.Uc(!1);
      this.Lw = this.appendChild(ra.Ya(O, [].slice()));
      this.text = new ea(E.Na(), this.node);
      this.text.ua(100);
      this.text.Fa(125, 125);
      let a = this.text.wf();
      a.x = 0;
      a.y = 0;
      a.z = 0;
      a.w = 1;
      this.text.C(-62.5);
      this.text.D(-62.5);
    }
    B() {
      this.xP();
      super.B();
    }
    setItem(a, b, c) {
      let d = this.icon;
      d != null && d.B();
      a == null
        ? (this.text.R(!1), this.xP())
        : ((this.icon = new Sf(Eb.replace(a.fileName, ".", "/"), this.node)),
          this.x5(c),
          this.text.V("x " + b),
          this.layout());
    }
    Kr(a) {
      debugger;
      var b = this.icon;
      b != null && b.B();
      this.xP();
      b = p.o.pf;
      b = b == null || lc(b) ? "img_gold" : p.o.pf;
      this.icon = R.aa(E.get(262), b, this.node);
      this.icon.la(0.5);
      this.text.V("x " + a);
    }
    xl(a) {
      debugger;
      let b = this.icon;
      b != null && b.B();
      this.xP();
      this.icon = R.aa(E.get(262), Z.Zr, this.node);
      this.icon.la(0.5);
      this.text.V("x " + a);
    }
    layout() {
      this.Lw.C(this.icon.za + this.icon.ya() / 2);
      this.text.C(this.Lw.node.za + this.Lw.node.ya() + 50);
    }
    xP() {
      this.pX.length = 0;
      this.Lw.Y(!1);
    }
    x5(a) {
      this.xP();
      if (a != null) {
        for (var b = 0; b < a.length; ) this.CI(a[b++]);
        this.Lw.Y(this.pX.length > 0);
        this.Lw.la(1.5);
      }
    }
    CI(a) {
      let b = new ek();
      this.Lw.appendChild(b);
      b.M5(a);
      let c = this;
      b.oa.addListener(function (d) {
        c.Mvb(d);
      });
      a = b.icon.ya();
      b.C(a / 2 + this.pX.length * a);
      this.pX.push(b);
    }
    Mvb(a) {
      var b;
      b == null && (b = !1);
      var c = a.Nc;
      if (p.items.GR.YEa(c)) {
        let d = new ur();
        d.xPa(c);
        c = a.node.Dm(new H(0, a.node.ra(), 0, 1));
        d.position.x = c.x;
        d.position.y = c.y;
        d.offset = this.$Ua;
        d.sender = a.node.L;
        d.rha = b;
        nd.F().W5(d);
      } else debugger;
    }
  }
  zr.g = "3EE";
  zr.u = O;
  Object.assign(zr.prototype, { j: zr });
