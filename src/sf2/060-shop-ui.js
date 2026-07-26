// 060-shop-ui.js
// Domain: ui  |  42 class(es)  |  tree root(s): Vb, ig, Db, di, Rx, Wf, ae, Xo, Sx
// Edit here. Run `npm run build` to reassemble the full bundle.
  class Vb {
    constructor() {
      this.pv = new Fb();
      this.TM = m.l();
      this.T7 = m.l();
      this.ty = m.l();
      this.ga = null;
      this.Wgb = new V();
      this.C3 = new V();
      this.wS = new V();
      this.vS = new V();
    }
    Zua(a, b, c) {
      c == null && (c = !1);
      a != null &&
        m.find(this.ty, function (d) {
          return d.name == a.name;
        }) == null &&
        ((a.image = fz.o_a(a.image)),
        this.eqb(a, b, c),
        this.ty.push(a),
        this.vS.$(a));
    }
    DKa(a) {
      let b = m.find(this.ty, function (c) {
        return c.name == a;
      });
      if (b != null) {
        this.Anb(a);
        J.remove(this.ty, b);
        let c = this.wS;
        c != null && c.$(b);
      }
    }
    parse(a, b) {
      this.vL(a);
      this.ty.length = 0;
      for (a = this.ga.children.length - 1; a >= 0; ) {
        var c = this.ga.children[a];
        let d = c.attributes.get("Timer");
        b.lJ(d != null ? d : "") != null
          ? ((c = this.Ajb(c)), this.ty.push(c))
          : this.ga.Af(c);
        --a;
      }
    }
    Ajb(a) {
      let b = new ig();
      var c = a.attributes.get("Name");
      b.name = c != null ? c : "";
      c = a.attributes.get("Image");
      b.image = c != null ? c : "";
      c = a.attributes.get("Timer");
      b.Mc = c != null ? c : "";
      c = a.attributes.get("ImagePath");
      b.At = c != null ? c : "";
      c = a.attributes.get("Type");
      b.type = c != null ? c : "Image";
      b.coords = new H(
        u.H(a.attributes.get("X")),
        u.H(a.attributes.get("Y")),
        0,
        1,
      );
      b.bI = new H(
        u.H(a.attributes.get("AnchorMinX")),
        u.H(a.attributes.get("AnchorMinY")),
        0,
        1,
      );
      b.aI = new H(
        u.H(a.attributes.get("AnchorMaxX")),
        u.H(a.attributes.get("AnchorMaxY")),
        0,
        1,
      );
      b.Yd = new H(
        u.H(a.attributes.get("PivotX"), 0.5),
        u.H(a.attributes.get("PivotY"), 0.5),
        0,
        1,
      );
      b.Vo = a.attributes.get("X") == null || a.attributes.get("Y") == null;
      b.speed = u.H(a.attributes.get("Speed"));
      b.pause = u.H(a.attributes.get("Pause"));
      c = a.attributes.get("ShowType");
      b.Pr = c != null ? c : "Both";
      b.control = u.I(a.attributes.get("Control"), -1);
      b.kR = u.H(a.attributes.get("ImageScale"), 1);
      c = a.A("MapButtonImage");
      if (c != null) {
        debugger;
        b.fj = new fh(c);
      }
      b.fj == null &&
        ((a = a.attributes.get("Item")),
        (a = a != null ? a : ""),
        (a = a == null || a == "" ? null : p.items.$b(a)),
        (b.fj = a != null ? a.fj : null));
      return b;
    }
    vL(a) {
      a != null &&
        ((this.ga = a.A("MapButtons")),
        this.ga == null && (this.ga = a.appendChild("MapButtons")));
    }
    eqb(a, b, c) {
      let d = this.ga.appendChild("Button");
      d.set("Name", a.name);
      d.set("Image", a.image);
      var e = a.type;
      if (e != "Image" || e != "Sequence") e = "Image";
      d.set("Type", K.T(e));
      a.speed > 0 && d.set("Speed", a.speed == null ? "null" : "" + a.speed);
      a.pause > 0 && d.set("Pause", a.pause == null ? "null" : "" + a.pause);
      a.Vo ||
        (d.set("X", K.T(a.coords.x)),
        d.set("Y", K.T(a.coords.y)),
        d.set("AnchorMinX", K.T(a.bI.x)),
        d.set("AnchorMinY", K.T(a.bI.y)),
        d.set("AnchorMaxX", K.T(a.aI.x)),
        d.set("AnchorMaxY", K.T(a.aI.y)),
        d.set("PivotX", K.T(a.Yd.x)),
        d.set("PivotY", K.T(a.Yd.y)));
      e = a.At;
      e != null && e != "" && d.set("ImagePath", a.At);
      e = a.Mc;
      e != null && e != "" && d.set("Timer", a.Mc);
      d.set("ShowType", K.T(a.Pr));
      a.control != -1 && d.set("Control", K.T(a.control));
      e = a.kR - 1;
      (e > 0 ? e < 1e-10 : -e < 1e-10) || d.set("ImageScale", K.T(a));
      b != null && d.set("Item", b.name);
      if (c && a.fj != null) {
        debugger;
        d.Ts(a.fj.node.clone());
      }
      a = p.o;
      a != null && a.save();
    }
    Anb(a) {
      a = ag(this.ga, "Button", "Name", a);
      a != null && (this.ga.Af(a), p.o != null && p.o.save());
    }
    hya(a) {
      a == null && (a = !1);
      this.TM.length = 0;
      let b = m.l();
      this.qya(b, !0, a);
      return b;
    }
    qya(a, b, c) {
      c == null && (c = !1);
      let d = 0,
        e = this.ty;
      for (; d < e.length; ) {
        let f = e[d];
        ++d;
        if (c && a != null && a.length != 0) break;
        f != null && f.Vo == b && f.Pr == "Story" && a.push(this.Y1a(f));
      }
    }
    Y1a(a) {
      return this.s1a(a);
    }
    s1a(a) {
      let b = new ig(a),
        c = 0;
      b.Vo
        ? ((c = this.TM.length), this.TM.push(b.name))
        : ((c = this.T7.length), this.T7.push(b.name));
      if (b.type == "Sequence") debugger;
      b.Pr = "Story";
      a = new tk();
      a.Cla(b);
      let d = this;
      b.Vo
        ? a.oa.addListener(function () {
            d.dgb(c);
          })
        : a.oa.addListener(function () {
            d.Rg(b.name);
          });
      return a;
    }
    dgb(a) {
      let b = "";
      a < this.TM.length && (b = this.TM[a]);
      this.Rg(b);
    }
    Rg(a) {
      ha.F().ta.Fv = a;
      ha.F().Vf("QUEST_EVENT_MAP_BUTTON_PRESS");
      let b = this.Wgb;
      b != null && b.$(a);
    }
    Kgb() {
      Xc.jib();
    }
    F1a() {
      let a = new ig();
      a.name = "eventButton";
      a.image = "SaleTimerRibbon";
      a.Vo = !0;
      a.H1 = new H(-60, 65, 0, 1);
      let b = new tk();
      b.Cla(a);
      let c = this;
      b.oa.addListener(function () {
        c.Kgb();
      });
      return b;
    }
    r1a() {
      var a = new Ia();
      a.G = 0;
      var b = new Ia();
      b.G = 0;
      var c = new Ia();
      c.G = !1;
      p.o != null && this.Y6a(a, b, c);
      c = null;
      if (a.G <= 0) return c;
      a.G == 1
        ? ((b = this.hya(!0)), b != null && b.length != 0 && (c = b[0]))
        : ((c = this.F1a()),
          (c.EPa = !0),
          (a = c.Ki),
          (a.An = b.G),
          c.Cla(a),
          c.refresh());
      return c;
    }
    Y6a(a, b, c) {
      a.G = 0;
      b.G = 0;
      c.G = !1;
      try {
        if (p.o.Bl != null) {
          var d = 0;
          let g = this.ty;
          for (; d < g.length; ) {
            let h = g[d];
            ++d;
            this.pv.M += (h == null ? "NUL!" : h.name) + "\n";
            if (h.Vo) {
              a.G++;
              let k = p.o.Bl.lJ(h.Mc);
              k != null && (b.G > k.Sv || b.G == 0) && (b.G = k.Sv);
              this.pv.M = "";
            }
          }
        }
        d = 0;
        for (var e = p.items.Kp; d < e.length; ) {
          let g = e[d];
          ++d;
          this.pv.M += (g == null ? "NUL!" : g.name) + "\n";
          if (this.HEa(g)) {
            let h = g.fm();
            a.G++;
            debugger;
            let k = h.An - Math.trunc(ed.getTimezoneOffset());
            if (b.G > k || b.G == 0) b.G = k;
            this.pv.M = "";
          }
        }
        e = 0;
        let f = p.H7a();
        for (; e < f.length; ) {
          let g = f[e];
          ++e;
          this.pv.M += (g == null ? "NUL!" : g.name) + "\n";
          if (this.HEa(g)) {
            let h = g.fm();
            if (h != null) {
              a.G++;
              debugger;
              let k = h.An - Math.trunc(ed.getTimezoneOffset());
              if (b.G > k || b.G == 0) ((b.G = k), (c.G = !0));
              this.pv.M = "";
            }
          }
        }
      } catch (f) {}
    }
    HEa(a) {
      if (a == null) return !1;
      let b = a.isActive,
        c = !a.ni(),
        d = p.o.MJ(a.lock);
      return a.sEa() && b && c ? d : !1;
    }
    t1a() {
      this.T7.length = 0;
      let a = m.l();
      this.qya(a, !1);
      return a;
    }
    static F() {
      let a = Vb.Hb;
      return a != null ? a : (Vb.Hb = new Vb());
    }
  }
  Vb.g = "43E";
  Object.assign(Vb.prototype, { j: Vb });
  class ig {
    constructor(a) {
      this.fj = null;
      this.kR = 1;
      this.control = -1;
      this.Pr = "Story";
      this.speed = this.pause = 0;
      this.Vo = !1;
      this.H1 = null;
      this.Yd = new H(0.5, 0.5, 0, 1);
      this.aI = new H(0.5, 0.5, 0, 1);
      this.bI = new H(0.5, 0.5, 0, 1);
      this.coords = new H(0, 0, 0, 1);
      this.type = "Image";
      this.At = "";
      this.An = -1;
      this.name = this.image = this.Mc = "";
      a != null &&
        ((this.name = a.name),
        (this.image = a.image),
        (this.Mc = a.Mc),
        (this.An = a.An),
        (this.At = a.At),
        (this.type = a.type),
        (this.coords = a.coords),
        (this.bI = a.bI),
        (this.aI = a.aI),
        (this.Yd = a.Yd),
        (this.Vo = a.Vo),
        (this.speed = a.speed),
        (this.pause = a.pause),
        (this.Pr = a.Pr),
        (this.control = a.control),
        (this.kR = a.kR),
        (this.fj = a.fj));
    }
    E$a() {
      return this.Pr != "Both" ? this.Pr == "Story" : !0;
    }
    toString() {
      return "name=" + this.name + ", show=" + this.Pr;
    }
  }
  ig.g = "43F";
  Object.assign(ig.prototype, { j: ig });
  class $r extends O {
    constructor() {
      super();
      this.Qm = m.l();
      this.Uoa = this.appendChild(ra.Ya(O, [].slice()));
    }
    B() {
      super.B();
      this.Tja();
    }
    S3a() {
      let a = 0,
        b = this.Qm;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        c.Ki.E$a() && c.Y(!0);
      }
    }
    ZWa() {
      this.znb();
      this.ps = Vb.F().r1a();
      if (this.ps != null) {
        if (this.ps.Ki.Vo && this.Uoa != null) this.Uoa.appendChild(this.ps);
        else {
          debugger;
          this.appendChild(this.ps);
        }
        this.ps.refresh();
      }
    }
    xY() {
      var a = this.Qm;
      this.Qm = Vb.F().t1a();
      for (var b = 0, c = this.Qm; b < c.length; ) {
        let d = c[b];
        ++b;
        let e = null,
          f = 0,
          g = a;
        for (; f < g.length; ) {
          let h = g[f];
          ++f;
          if (d.name == h.name && d.Ki.image == h.Ki.image) {
            e = h;
            break;
          }
        }
        if (e != null) debugger;
      }
      a = 0;
      for (b = this.Qm; a < b.length; ) ((c = b[a]), ++a, this.appendChild(c));
    }
    znb() {
      this.ps != null && (this.ps.B(), (this.ps = null));
    }
    Tja() {
      let a = 0,
        b = this.Qm;
      for (; a < b.length; ) b[a++].B();
      this.Qm.length = 0;
    }
    Z(a) {
      super.Z(a);
      try {
        this.ps != null && this.EFa(this.ps);
        a = 0;
        let b = this.Qm;
        for (; a < b.length; ) this.EFa(b[a++]);
      } catch (b) {}
    }
    EFa(a) {
      var b = Ya.get();
      a.Df(b.ue.ve.size.y * 0.25);
      var c = a.node.Db;
      let d = a.W.ya() * c;
      c *= a.W.ra();
      b = b.ue.Xj.node.qa;
      a.C(this.node.za + d - d * 0.3);
      a.D((N.height + b) * 0.5);
      N.lc > 1.25 ? a.D(b - c / 2) : N.lc > 0.55 && a.D(N.height - c * 0.55);
    }
  }
  $r.g = "440";
  $r.u = O;
  Object.assign($r.prototype, { j: $r });
  class di {}
  di.g = "441";
  di.Ei = !0;
  Object.assign(di.prototype, { j: di });
  class bs extends O {
    constructor() {
      super();
      this.background = R.aa(E.get(256), y.xM, this.node);
      this.width = -1;
      this.appendChild(ra.Ya(O, [].slice()));
      this.jl = new ea(E.Na(), this.node);
      this.jl.Ia(128);
      this.jl.rd(!0);
      this.jl.La(Z.sc);
      this.jl.R(!1);
      this.Io = this.appendChild(ra.Ya(cs, [].slice()));
      this.Oo = this.appendChild(ra.Ya(ds, [].slice()));
      this.ds = this.appendChild(ra.Ya(es, [].slice()));
      this.Is = this.appendChild(ra.Ya(fs, [].slice()));
      this.Vm = new ea(E.Na(), this.node);
      this.Vm.La(Z.sc);
      this.Vm.Ia(128);
      this.Vm.rd(!0);
      this.Vm.Lc(0.6);
      this.Vm.IF(!0);
      this.clear();
    }
    Sn(a) {
      this.width = a.N - a.K;
      var b = this.background.Db * 28,
        c = this.background.Db * 24;
      vb.jg ? this.background.yb(y.soa) : this.background.yb(y.xM);
      this.background.mf(a.N - a.K);
      this.background.C(a.K);
      this.background.D(a.P);
      vb.jg
        ? a.offset(-b * 2, -b)
        : ((a = a.clone()), (a.K += b), (a.N -= b * 2), (a.P += c), (a.X -= c));
      b = a.N - a.K;
      c = a.X - a.P;
      var d = b * 0.2;
      this.Vm.C(a.K);
      this.Vm.D(a.P + c * 0.1);
      this.Vm.Fa(b, d);
      this.Vm.ua(d);
      this.Vm.pk();
      d = c * 0.15 + d;
      this.jl.C(a.K);
      this.jl.D(a.P);
      this.jl.Fa(a.N - a.K, a.X - a.P);
      this.jl.ua((a.N - a.K) * 0.16);
      this.jl.Lc(0.6);
      this.Io.active &&
        (this.Io.C(a.K), this.Io.D(a.P + d), this.Io.ba(b, c - d));
      this.Oo.active && (this.Oo.C(a.K), this.Oo.D(a.P), this.Oo.ba(b, c));
      this.ds.active && (this.ds.C(a.K), this.ds.D(a.P), this.ds.ba(b, c));
      this.Is.active && (this.Is.C(a.K), this.Is.D(a.P), this.Is.ba(b, c));
    }
    Pmb(a) {
      this.Io.Y(!0);
      this.Oo.Y(!1);
      this.ds.Y(!1);
      this.Is.Y(!1);
      this.jl.R(!1);
      a != null &&
        a.nb != null &&
        (this.K4(a.nb.getName(), a.nb.Be != 3 && !a.y0()),
        this.Io.refresh(a.nb, a.y0()));
    }
    Qmb(a) {
      this.Io.Y(!1);
      this.Oo.Y(!0);
      this.ds.Y(!1);
      this.Is.Y(!1);
      this.jl.R(!1);
      a == null || a.$p == null || a.tea() == null
        ? a != null && a.tea()
        : (this.K4(a.$p.name), this.Oo.refresh(a.$p, a.tea()));
    }
    Rmb(a) {
      this.Io.Y(!1);
      this.Oo.Y(!1);
      this.ds.Y(!0);
      this.Is.Y(!1);
      this.jl.R(!1);
      this.K4(a.ZO.name);
      this.ds.refresh(a.ZO, a.XZ);
    }
    Smb(a) {
      this.Io.Y(!1);
      this.Oo.Y(!1);
      this.ds.Y(!1);
      this.Is.Y(!0);
      this.jl.R(!1);
      this.K4(a.name);
      this.Is.refresh(a);
    }
    K4(a, b) {
      b == null && (b = !0);
      this.Vm.V(Y.na(a));
      this.Vm.R(b);
    }
    clear() {
      this.Vm.V("");
      this.jl.R(!0);
      this.Io.Y(!1);
      this.Oo.Y(!1);
      this.ds.Y(!1);
      this.Is.Y(!1);
    }
    nDa() {
      return this.Io.active ? this.Io.$k : null;
    }
    pDa() {
      return this.Oo.active ? this.Oo.Vp : null;
    }
  }
  bs.g = "442";
  bs.u = O;
  Object.assign(bs.prototype, { j: bs });
  class Yd extends O {
    constructor() {
      super();
      this.scroll = new Gg(500, 800, 0, 30);
      this.scroll.eba(30);
      this.node.appendChild(this.scroll.node);
      this.AT = R.aa(E.get(256), y.uoa, this.scroll.content);
    }
    init() {
      this.Pa = new Hg();
      this.scroll.content.appendChild(this.Pa.node);
      this.appendChild(this.Pa);
      this.Pa.init(this);
      this.Pa.AK.addListener(w(this, this.Jp));
      this.wPa();
      this.Y(!1);
    }
    Sn(a) {
      this.scroll.node.C(a.K);
      this.scroll.node.D(a.P);
      this.scroll.ba(a.N - a.K, a.X - a.P, (a.N - a.K) * 0.08);
      this.AT.xc(this.scroll.Lv + 5);
      this.AT.Qb(this.scroll.bz);
      this.Pa.C(4);
      this.Pa.ba(this.scroll.Lv - 8, this.scroll.bz);
    }
    B() {
      super.B();
      this.Pa = null;
    }
    Kha() {}
    wPa() {
      this.BZ();
      this.Pa.$K();
    }
    Ryb() {
      let a = 0,
        b = this.Pa.cells;
      for (; a < b.length; ) b[a++].co();
    }
    cna() {
      this.Jp(this.Pa.Ac);
    }
    dqb() {
      v.xNa.Tsb(this.xU, this.Pa.u6a());
    }
    F2() {
      let a = v.xNa.p9a(this.xU);
      a >= 0 && a < this.Pa.rm() && this.Pa.lj(a);
    }
    Jp() {
      this.dqb();
    }
    Cka() {
      this.Pa.lj(0);
    }
    sqb() {
      this.Pa.lj(this.Pa.rm() - 1);
    }
    b8a(a) {
      if (a == null) return null;
      a = a.Qn + 1;
      return a >= this.Pa.rm() ? null : this.Pa.nt(a);
    }
    NCa() {
      this.Ch == null && this.Pa.Ac != null && (this.Ch = this.Pa.Ac.rt());
      return this.Ch;
    }
    H5(a) {
      return (this.Ch = a);
    }
    sA() {
      return 0;
    }
    QC() {
      debugger;
      return null;
    }
  }
  Yd.g = "443";
  Yd.Rb = [di, $h, di];
  Yd.u = O;
  Object.assign(Yd.prototype, { j: Yd });
  class Rx {
    constructor() {
      this.QL = null;
    }
    eU(a) {
      this.QL != null && (this.QL.XEa = !1);
      this.QL = a;
      this.QL.XEa = !0;
    }
    bab() {
      return this.QL.NCa();
    }
    Kub(a) {
      this.QL.H5(a);
    }
    gka() {
      var a = !1;
      a == null && (a = !0);
      a && sb.VS();
      a = this.bab();
      a != null && a.Yo();
    }
  }
  Rx.g = "444";
  Object.assign(Rx.prototype, { j: Rx });
  class Wf {
    static Jj(a, b) {
      a = Wf.s9a(a);
      return Wf.Zs(a.first, a.second, b);
    }
    static Zs(a, b, c) {
      c = R.aa(E.get(262), null, c);
      c.yb(a);
      c.Xg(-b);
      c.Ga();
      return c;
    }
    static s9a(a) {
      switch (a) {
        case 1:
          return new Ca(Z.DQa, 0);
        case 2:
          return new Ca(Z.eG, 225);
        case 3:
          return new Ca(Z.eG, 180);
        case 4:
          return new Ca(Z.eG, 135);
        case 5:
          return new Ca(Z.AQa, 0);
        case 6:
          return new Ca(Z.eG, 45);
        case 7:
          return new Ca(Z.eG, 0);
        case 8:
          return new Ca(Z.eG, 315);
        case 9:
          return new Ca(Z.CQa, 0);
        case 10:
          return new Ca(Z.BQa, 0);
        default:
          return null;
      }
    }
  }
  Wf.g = "445";
  class gs extends Fg {
    constructor() {
      function a(c, d, e, f) {
        d = b.pP.appendChild(new Le(E.get(260), d, e, f));
        d.ee = c;
        b.buttons.push(d);
      }
      super();
      this.Xw = [0, 1, 2, 3];
      let b = this;
      a(0, y.oSa, y.qSa, y.pSa);
      a(1, y.uSa, y.wSa, y.vSa);
      a(2, y.lSa, y.nSa, y.mSa);
      a(3, y.rSa, y.tSa, y.sSa);
      this.init();
    }
    Z(a) {
      super.Z(a);
    }
    oa(a) {
      super.oa(a);
      vb.get().sla(a);
    }
    getCounterValue(a) {
      switch (a) {
        case 0:
          return p.o.fo.JCa();
        case 1:
          return p.o.HCa();
        case 2:
          return p.o.Ai.GCa();
        case 3:
          return p.o.KCa();
        default:
          return 0;
      }
    }
  }
  gs.g = "446";
  gs.u = Fg;
  Object.assign(gs.prototype, { j: gs });
  class gf extends ff {
    constructor() {
      super();
    }
  }
  gf.g = "447";
  gf.u = ff;
  Object.assign(gf.prototype, { j: gf });
  class vb extends ma {
    constructor(a, b) {
      super(a, b);
    }
    HD() {
      return 7;
    }
    ut() {
      let a = [];
      fa.add(a, 266, 267);
      fa.add(a, 256, 257);
      fa.add(a, 264, 265);
      fa.add(a, 260, 261);
      fa.add(a, 757);
      fa.add(a, 262, 263);
      fa.add(a, 246, 247);
      fa.add(a, 317);
      fa.add(a, 1360);
      fa.add(a, 248, 249);
      fa.add(a, 272, 273);
      fa.add(a, 1322, 1321);
      fa.add(a, 13, 14);
      fa.add(a, 11, 12);
      return a;
    }
    sla(a) {
      if (this.BV != a && a != 5) {
        var b = ha.F().ta;
        v.Ewa(wj.L0(b.II), Xo.BOa(a));
        this.BV = a;
        b.II = th.getName(Xo.BOa(a));
        this.pq != null && (this.pq.Pa.stop(), this.pq.Y(!1));
        this.Er.clear();
        this.KN.Y(!0);
        switch (this.BV) {
          case 0:
            this.Hvb();
            this.dv.eU((this.pq = this.Ul));
            this.dv.gka();
            b = Y.na(this.Ul.aDa() ? "profileSelectSkill" : "profileNoSkills");
            this.Er.jl.V(b);
            break;
          case 1:
            this.oga();
            this.dv.eU((this.pq = this.vv));
            this.dv.gka();
            this.vv.Cka();
            this.vv.cna();
            this.vv.Ryb();
            this.vv.qqb();
            break;
          case 2:
            this.oga();
            this.dv.eU((this.pq = this.fs));
            this.dv.gka();
            this.fs.dcb() ? this.fs.KLa() : this.fs.Cka();
            this.fs.cna();
            break;
          case 3:
            (this.oga(),
              this.dv.eU((this.pq = this.qv)),
              this.qv.Cka(),
              this.qv.cna());
        }
        this.pq != null && (this.pq.Kha(), this.pq.Y(!0));
        this.Ah.MU();
        this.Ah.Dda();
        this.Ah.Uya(a);
        this.Vya();
        this.layout();
      }
    }
    init(a) {
      this.BV = 5;
      this.cr = -1;
      this.sl = null;
      this.$L = 0;
      this.Ama = 1;
      this.bq = 0;
      this.P8 = !0;
      vb.jg = N.lc < vb.YS;
      ad.eE = !1;
      super.init(a);
      L.J.Ha.ET(Oa.dd(2756098));
      this.dv = new Rx();
      this.nC = this.To(O);
      let b;
      try {
        b = ob.eUa(a, xw);
      } catch (d) {
        b = null;
      }
      this.Sta = this.nC.appendChild(ra.Ya(O, [].slice()));
      this.$B = this.Sta.appendChild(ra.Ya(ei, [].slice()));
      this.Er = this.Sta.appendChild(ra.Ya(bs, [].slice()));
      this.KN = this.nC.appendChild(ra.Ya(O, [].slice()));
      this.Ah = this.To(gs);
      this.Ah.MU();
      this.qXa();
      a = this.Ad.Qa.wf();
      let c = Z.Qna;
      a.x = c.x;
      a.y = c.y;
      a.z = c.z;
      a.w = c.w;
      this.$B.init();
      this.L1();
      this.Ul = this.KN.appendChild(ra.Ya(hs, [].slice()));
      this.Ul.init();
      this.vv = this.KN.appendChild(ra.Ya(is, [].slice()));
      this.vv.init();
      this.vv.Y(!1);
      this.fs = this.KN.appendChild(ra.Ya(js, [].slice()));
      this.fs.init();
      this.fs.Y(!1);
      this.qv = this.KN.appendChild(ra.Ya(ks, [].slice()));
      this.qv.init();
      this.qv.mS.addListener(w(this, this.Ehb));
      this.qv.sqb();
      this.qv.Y(!1);
      this.Vya();
      this.sla(b != null && b.TJa != 5 ? b.TJa : 0);
      this.Ul.tqb();
      this.layout();
    }
    vm(a) {
      super.vm(a);
      E.B(757);
      a instanceof Uf || this.o_();
    }
    Z(a) {
      vb.jg = N.lc < vb.YS;
      if (this.elements == null) debugger;
      else {
        super.Z(a);
        if (N.io || this.P8) (this.layout(), (this.P8 = !1));
        this.$L += a;
        switch (this.bq) {
          case 1:
            a = Math.min(this.$L / 0.5, 1);
            this.nC.node.wa(dc.Nn()(a));
            a == 1 && (this.$B.Y(!0), (Ed.kba = !0), (this.bq = 0), v.Dma());
            break;
          case 2:
            ((a = Math.min(this.$L / 0.5, 1)),
              this.nC.node.wa(1 - a),
              a == 1 && ((this.bq = 0), this.IK()));
        }
        this.sl != null && this.fAb();
        if (this.vqb) {
          debugger;
          this.time < 0.5 ||
            this.Ul.Pa.ZQ() ||
            ((a = this.Ul.Pa.nt(0)),
            a != null && a.rt() != null && a.rt().Yo(),
            (this.vqb = !1));
        }
      }
    }
    Ea(a) {
      super.Ea(a);
      this.Ad != null && this.gza(this.Ad);
    }
    layout() {
      if (this.elements != null) {
        var a = N.lc,
          b =
            N.width *
            0.05 *
            (vb.jg ? 1 : ((a < 0.6 ? 0.6 : a > 1 ? 1 : a) - 0.6) / 0.4),
          c = this.nA.Zp * 1.4;
        b = new hb(b, c, N.width - b, N.height - this.nA.Zp * 1.5 * 1.3);
        b = b.hn(
          vb.jg
            ? 1.3
            : 1.85 +
                (((a < 0.6 ? 0.6 : a > 1 ? 1 : a) - 0.6) / 0.4) *
                  0.1499999999999999,
        );
        vb.jg &&
          ((a =
            c *
            1.5 *
            (0.7 + ((a - 0.6) / -0.09999999999999998) * 0.30000000000000004)),
          (c = b.X - b.P),
          (b.P = a),
          (b.X = a + c));
        a = b.hn(0.75);
        vb.jg && ((b = b.N), (c = a.N - a.K), (a.N = b), (a.K = b - c));
        b = (a.X - a.P) * 0.8;
        var d = (a.N - a.K) * 0.03;
        c = new hb(0, 0, b * 0.7, b);
        b = c.clone();
        var e = a.K + d,
          f = b.N - b.K;
        b.N = e;
        b.K = e - f;
        e = (a.P + a.X) * 0.5;
        f = (b.X - b.P) * 0.5;
        b.P = e - f;
        b.X = e + f;
        c = c.clone();
        d = a.N - d;
        e = c.N - c.K;
        c.K = d;
        c.N = d + e;
        d = (a.P + a.X) * 0.5;
        e = (c.X - c.P) * 0.5;
        c.P = d - e;
        c.X = d + e;
        vb.jg &&
          ((d = (a.K + a.N) * 0.5),
          (e = (c.N - c.K) * 0.5),
          (c.K = d - e),
          (c.N = d + e),
          (d = a.X),
          (e = c.X - c.P),
          (c.P = d),
          (c.X = d + e));
        this.$B.Sn(b);
        this.Er.Sn(c);
        this.pq.Sn(a);
      }
    }
    B(a) {
      this.Ul.B();
      this.vv.B();
      this.fs.B();
      this.qv.B();
      this.Ad.ng.removeListener(w(this, this.rS));
      this.sl = null;
      this.cr = -1;
      super.B(a);
    }
    qXa() {
      this.Ad = new Qi();
      this.elements.appendChild(this.Ad);
      this.Ad.nPa(null, 4, I.Loa);
      this.Ad.ng.addListener(w(this, this.rS));
      let a = this.Ad.Kc,
        b = p.v_.lDa();
      a.Vs(
        (((b.z * 255) | 0) & 255) |
          ((((b.y * 255) | 0) & 255) << 8) |
          ((((b.x * 255) | 0) & 255) << 16),
      );
    }
    ulb(a) {
      this.z6 != null ||
        this.bq != 0 ||
        this.Hga ||
        ((this.z6 = a.dr),
        (a = this.Ad.Qa.wf()),
        (a.x = 1),
        (a.y = 1),
        (a.z = 1),
        (a.w = 1),
        this.Mab());
    }
    Vya() {
      let a = this.Ah.HAa(3);
      a.Qf = this.qv.XA.length > 0;
      a.node.wa(a.Qf ? 1 : 0.5);
    }
    Mab() {
      this.$B.Y(!1);
      this.nC.node.Uc(!1);
      this.Ah.node.Uc(!1);
      Ed.kba = !1;
      v.Cha(!1);
      this.bq = 2;
      this.$L = 0;
    }
    rS() {
      if (this.Hga) {
        this.Ad.U4();
        this.Hga = !1;
        let a = this.Ad.Qa.wf(),
          b = Z.Qna;
        a.x = b.x;
        a.y = b.y;
        a.z = b.z;
        a.w = b.w;
        this.Jvb();
      }
    }
    Jvb() {
      this.Ah.node.Uc(!0);
      this.nC.node.Uc(!0);
      this.nC.Y(!0);
      this.bq = 1;
      this.$L = 0;
    }
    IK() {
      this.z6 != null &&
        (this.Ad.IK(this.z6.name), (this.Hga = !0), (this.z6 = null));
    }
    xF(a, b) {
      this.sla(a);
      b != null && b != "" && this.pq.Ir(b);
    }
    Hvb() {
      this.$B.show();
    }
    oga() {
      this.$B.rn();
    }
    Ehb(a) {
      this.Er.Smb(a.ac);
    }
    Dqb(a) {
      if (
        this.Ch != a &&
        (this.Ch != null && this.Ch.zL(!1), (this.Ch = a), this.Ch != null)
      ) {
        this.dv.eU(a.LS != null ? a.LS.ol : null);
        this.dv.Kub(a);
        this.Ch.zL(!0);
        switch (this.BV) {
          case 0:
            this.Ch instanceof fi && this.Er.Pmb(this.Ch);
            break;
          case 1:
            this.Ch instanceof uk && this.Er.Qmb(this.Ch);
            break;
          case 2:
            this.Ch instanceof vk && this.Er.Rmb(this.Ch);
        }
        this.P8 = !0;
      }
    }
    Iwa() {
      return this.cr == -1;
    }
    Yab(a) {
      return a == null
        ? !1
        : this.Iwa()
          ? ((this.sl = a), (this.cr = 0), !0)
          : !1;
    }
    Axb(a) {
      a.hS ||
        ((a.hS = !0),
        a.Nr(!1),
        p.o.Ai.Cca(a, !0),
        a.HE > 0 && p.o.Kr(p.o.Ob + a.HE),
        a.kP > 0 && p.o.xl(p.o.gd + a.kP, 2),
        this.nA.Vma(),
        sb.d4());
      a = this.fs.V5a(a);
      a != null && (a.GC.Hob(), a.GC.Yo());
      this.Ah.MU();
      this.fs.KLa(zc.KNa);
    }
    fAb() {
      switch (this.cr) {
        case 0:
          if (!this.Ul.WA(this.sl, 0.5)) {
            this.sl = null;
            this.cr = -1;
            break;
          }
          this.time = 0;
          this.cr = 1;
          break;
        case 1:
          if (this.time < 0.5) break;
          if (this.Ul.Pa.ZQ()) break;
          var a = this.Ul.X5a(this.sl);
          if (a == null) {
            this.sl = null;
            this.cr = -1;
            break;
          }
          let c = p.o.fo.e2a(this.sl);
          var b = p.o.fo.QS.CI(this.sl.getName(), this.sl.level);
          id.ot().tPa(b);
          this.$B.cva(c.nb);
          a.eca(this.sl.getName());
          if (b == null) {
            this.sl = null;
            this.cr = -1;
            break;
          }
          a = this.Ul.b8a(a);
          b = id.ot().N8a(b.level);
          a != null && b != null && this.Ul.Qyb(a.Qn);
          this.vv.wPa();
          this.nA.Xma();
          b = v.z9a(this.sl.IBa());
          b != null && p.o.ava(b.name);
          this.Ah.MU();
          if (a != null && !a.Yj.y0()) {
            this.Ul.WA(a.Yj.nb, 0.5);
            this.cr = 2;
            this.time = 0;
            break;
          }
          this.sl = null;
          this.cr = -1;
          break;
        case 2:
          this.time < 0.5 ||
            this.Ul.Pa.ZQ() ||
            ((this.sl = null), (this.cr = -1));
      }
    }
    static get() {
      return ma.Kg() instanceof vb ? ma.Kg() : null;
    }
  }
  vb.g = "448";
  vb.u = ma;
  Object.assign(vb.prototype, { j: vb });
  class Xo {
    static BOa(a) {
      switch (a) {
        case 0:
          return 10;
        case 1:
          return 11;
        case 2:
          return 12;
        case 3:
          return 13;
        case 4:
          return 15;
        default:
          return 0;
      }
    }
    static yOa(a) {
      switch (a) {
        case 10:
          return 0;
        case 11:
          return 1;
        case 12:
          return 2;
        case 13:
          return 3;
        case 15:
          return 4;
        default:
          return 5;
      }
    }
  }
  Xo.g = "449";
  class Ed extends O {
    constructor(a, b) {
      super();
      this.LS = null;
      this.V$ = this.gs = this.Co = !1;
      this.qN = 0;
      this.NX = !0;
      this.hO = this.Ay = 1;
      this.yO = "";
      this.VVa = a;
      this.Woa = zc.Jka.max / 255;
      this.rqa = zc.Jka.min / 255;
      this.IM = zc.Eva;
      this.icon = new Ea(this.node);
      this.LH = R.aa(E.get(260), y.CSa, this.icon);
      this.LH.Ga();
      this.LH.R(!1);
      this.Ks = R.aa(E.get(a), b, this.icon);
      this.Ks.Ga();
      this.eaa = R.aa(E.get(260), y.ySa, this.icon);
      this.eaa.Ga();
      this.gaa = R.aa(E.get(260), y.ASa, this.icon);
      this.gaa.Ga();
      this.MH = R.aa(E.get(260), y.zSa, this.icon);
      this.MH.Ga();
    }
    Rea() {
      let a = this.LH.ea;
      return new H(a.x, a.y, 0, 1);
    }
    s5(a) {
      this.Co = a;
      this.ozb();
    }
    setActive(a) {
      this.gs = a;
      this.UOa();
    }
    zL(a) {
      this.V$ = a;
      this.MH != null && this.MH.R(this.V$);
    }
    Yo() {
      vb.get().Dqb(this);
    }
    co() {}
    animate() {
      if (this.V$) {
        var a = this.Woa - this.rqa;
        a > 0 &&
          this.IM > 0 &&
          ((a = (a / this.IM) * this.qN),
          this.MH.wa(this.NX ? this.rqa + a : this.Woa - a));
      }
    }
    Bja() {
      var a = this.Ay - this.hO;
      a > 0 &&
        this.IM > 0 &&
        ((a = (a / this.IM) * this.qN),
        this.Ks.wa(this.NX ? this.hO + a : this.Ay - a));
    }
    eM() {
      this.Ks.sg(E.get(this.VVa));
      this.yO == "" ? this.Ks.R(!1) : (this.Ks.R(!0), this.Ks.yb(this.yO));
      this.MH.R(!1);
      this.eaa.R(!1);
      this.gaa.R(!1);
      this.UOa();
    }
    UOa() {
      this.gaa.R(!this.gs);
    }
    ozb() {
      this.eaa.R(this.Co);
      this.Ks.R(!this.Co);
    }
    B() {
      super.B();
      this.MH = null;
    }
    Z(a) {
      super.Z(a);
      Ed.kba && this.animate();
      !Sb.F().Bd() && L.J.ed().Eb(0) && this.icon.Bd(N.mn()) && this.PE();
      this.qN++;
      this.qN > this.IM && ((this.qN = 0), (this.NX = !this.NX));
    }
    Vqb() {
      this.LH.R(!0);
    }
    PE() {
      sb.VS();
      this.Yo();
    }
  }
  Ed.g = "44A";
  Ed.u = O;
  Object.assign(Ed.prototype, { j: Ed });
  class ei extends O {
    constructor() {
      super();
      this.RS = m.l();
      this.XEa = !1;
      this.Ud = R.aa(E.get(256), y.xM, this.node);
      this.Ud.Mr(!0);
      this.Oe = this.appendChild(ra.Ya(O, [].slice()));
      this.QB = R.aa(E.get(256), y.aV, this.node);
      this.HG = R.aa(E.get(256), y.aV, this.node);
      this.HG.K5();
      this.Es = new ea(E.Na(), this.node);
      this.Es.La(Z.sc);
      this.Es.Ia(128);
      this.Es.rd(!0);
      this.Es.V(Y.na("ProfileNoPerks"));
      this.vO = 0;
      this.Q7 = null;
      this.visible = !1;
    }
    Sn(a) {
      this.Q7 = a.clone();
      this.node.D(a.P);
      var b = (a.N - a.K) / this.Ud.ea.x;
      this.Ud.la(b);
      let c = this.Ud.Db * 28,
        d = this.Ud.Db * 24;
      this.QB.C(26 * b);
      this.QB.D(24 * b);
      this.QB.xc(a.N - a.K - c);
      this.QB.Qb(this.QB.ea.y * b);
      this.HG.C(this.QB.za);
      this.HG.xc(a.N - a.K - c);
      this.HG.Qb(this.QB.ra());
      this.HG.D(a.X - a.P - this.HG.ra() - d);
      b = 2 * c;
      a = a.clone();
      a.K += b;
      a.N -= c;
      a.P += c;
      a.X -= d;
      this.Es.C(c * 2);
      this.Es.D(c);
      this.Es.Fa(a.N - a.K, a.X - a.P);
      this.Es.ua((a.N - a.K) * 0.16);
      this.Es.Lc(0.6);
      this.Ik.spacing = -30;
      this.Ik.ba(a.N - a.K, a.X - a.P);
      this.Ik.C(b);
      this.Ik.D(c);
    }
    rn() {
      this.vO != 1 && ((this.cY = 1), (this.time = 0), (this.visible = !1));
    }
    show() {
      this.vO != 0 && ((this.cY = 2), (this.time = 0), this.Y(!0));
    }
    init() {
      this.Ik = new Hg();
      this.node.appendChild(this.Ik.node);
      this.appendChild(this.Ik);
      this.Ik.init(this);
      this.J0a();
      this.focus(!0);
    }
    J0a() {
      let a = 0,
        b = p.o.fo.pF;
      for (; a < b.length; ) this.cva(b[a++].nb, !1);
      this.Ik.$K();
    }
    focus(a) {
      let b = this.Ik.cells.length - 2;
      this.Ik.lj(0 < b ? b : 0, a ? 0 : 0.5);
    }
    cva(a, b) {
      b == null && (b = !0);
      if (a != null) {
        var c = this.ln(a.name);
        if (c != null) (c.M5(a), c.ula(a.description));
        else if (
          ((a = new Ih(a, 0, 2, 3)), (c = a.IBa()), c == null || c == "")
        )
          (this.YB == null || this.YB.Oa.length >= 2
            ? ((this.YB = new Jp()),
              this.YB.Oa.push(a),
              this.RS.push(this.YB),
              b && this.Ik.$K())
            : (this.YB.Oa.push(a),
              (b = this.Y5a(this.YB)),
              b != null && b.im(this.YB, this)),
            this.Es.R(!1),
            this.focus(!1));
      }
    }
    Z(a) {
      super.Z(a);
      a = Math.min(this.time / 0.3, 1);
      switch (this.cY) {
        case 1:
          this.vO = dc.Nn()(a);
          a == 1 && ((this.cY = 0), this.Y(!1));
          break;
        case 2:
          ((this.vO = dc.PK()(1 - a)),
            a == 1 && ((this.cY = 0), (this.visible = !0)));
      }
      a = this.Q7;
      this.node.C(this.Q7.K + this.vO * (a.N - a.K) * 1.05);
    }
    ln(a) {
      let b = 0,
        c = this.RS;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.Oa[0].getName() == a) return d.Oa[0];
        if (d.Oa.length > 1 && d.Oa[1].getName() == a) return d.Oa[1];
      }
      return null;
    }
    Y5a(a) {
      a = this.RS.indexOf(a);
      return a < 0 || a >= this.Ik.rm() ? null : this.Ik.nt(a);
    }
    NCa() {
      debugger;
      this.Ch == null && this.Ik.Ac != null && (this.Ch = this.Ik.Ac.rt());
      return this.Ch;
    }
    H5(a) {
      return (this.Ch = a);
    }
    sA() {
      return this.RS.length;
    }
    QC(a) {
      let b = new wk();
      b.im(this.RS[a], this);
      b.Qn = a;
      b.ba(312, 150);
      return b;
    }
  }
  ei.g = "44B";
  ei.Rb = [$h, di];
  ei.u = O;
  Object.assign(ei.prototype, { j: ei });
  class ls extends gf {
    constructor() {
      super();
    }
    rt() {
      return this.GC;
    }
    Wz() {
      this.GC = this.appendChild(ra.Ya(vk, [].slice()));
      this.GC.LS = this;
    }
    init(a, b, c) {
      this.clear();
      this.Wz();
      this.ol = c;
      this.GC.init(a, b);
    }
    ba(a, b) {
      super.ba(a, b);
      this.GC.ba(this.ce.x, this.ce.y);
    }
    co() {
      debugger;
      this.GC.co();
    }
    clear() {}
  }
  ls.g = "44C";
  ls.u = gf;
  Object.assign(ls.prototype, { j: ls });
  class es extends O {
    constructor() {
      super();
      this.t8 = new H(0, 0, 0, 1);
      this.iqa = 0;
      this.le = new ea(E.Na(), this.node);
      this.le.Ia(128);
      this.le.La(Z.sc);
      this.le.rd(!0);
      this.yq = new ea(E.Na(), this.node);
      this.yq.La(Z.sc);
      this.yq.Ia(2);
      this.yq.F5(10);
      this.sv = this.appendChild(new Bb("EButtonWhite"));
      this.sv.V(Y.na("achievement_BtnReward"));
      this.sv.oa.addListener(w(this, this.Vhb));
    }
    ba(a, b) {
      this.le.D(b * 0.25);
      this.le.Fa(a, b * 0.4);
      this.le.ua(a * 0.13);
      this.le.Lc(0.7);
      this.sv.C(a / 2);
      this.sv.Df(a * 0.4);
      this.sv.D(b - this.sv.ra());
      this.yq.Fa(a, 100);
      this.yq.ua(a * 0.15);
      this.yq.D(b - this.sv.ra() * 3);
      if (this.t8.x != a && this.t8.y != b) {
        let c = this.t8;
        c.x = a;
        c.y = b;
      }
    }
    refresh(a, b) {
      this.cs = a;
      this.iqa = b;
      this.le.V(Y.na(this.cs.description));
      this.yq.R(!this.cs.hS && (this.cs.HE > 0 || this.cs.kP > 0));
      this.yq.gg() &&
        ((this.PVa = this.cs.HE > 0 ? p.o.pf : Z.Zr),
        (a = this.cs.HE > 0 ? this.cs.HE : this.cs.kP),
        (b = Y.na("achievementReward")),
        this.yq.V(b + (" <image>" + this.PVa + "</image> " + a)));
      this.sv.Y(this.yq.gg() && this.iqa >= this.cs.counter);
    }
    Vhb() {
      vb.get().Axb(this.cs);
      this.sv.Y(!1);
      this.yq.R(!1);
    }
  }
  es.g = "44D";
  es.u = O;
  Object.assign(es.prototype, { j: es });
  class vk extends Ed {
    constructor() {
      super(272, y.cRa);
      this.AH = this.appendChild(new Vf(y.xSa, y.YRa, 260));
      this.zy = new ea(E.Na(), this.node);
    }
    init(a, b) {
      this.ZO = a;
      this.XZ = b;
      this.yO = Eb.replace(a.icon, ".", "/");
      this.Ay = zc.XE.max;
      this.hO = zc.XE.min;
      this.eM();
      this.setActive(!0);
      this.X1a();
      this.Bzb(b);
    }
    ba(a, b) {
      this.Rea();
      let c = b / 2;
      this.icon.Df(b * 0.8);
      this.icon.C(this.icon.ya() / 2 + b * 0.1);
      this.icon.D(c);
      let d = b * 0.2,
        e = this.icon.za + this.icon.ya() / 2 + d;
      this.icon.ra();
      a -= e + d;
      this.AH.C(e);
      this.AH.D(c - this.AH.ra());
      this.AH.mf(a);
      this.zy.C(e);
      this.zy.D(c * 0.8);
      this.zy.ua(b * 0.4);
      this.zy.Fa(a, b * 0.4);
      this.zy.pk();
    }
    Bzb(a) {
      this.XZ = a;
      this.AH.JF(a);
    }
    Hob() {
      this.Ks.wa(this.Ay);
    }
    animate() {
      super.animate();
      this.ZO != null && this.ZO.zj && this.Bja();
    }
    X1a() {
      var a = this.ZO.counter;
      this.AH.VT(a);
      let b = (this.XZ <= a ? this.XZ : a) | 0;
      a = b < a ? b + "/" + a : Y.na("achievement_Completed");
      this.zy.La(Z.sc);
      this.zy.V(a);
      this.zy.Ia(2);
    }
  }
  vk.g = "44E";
  vk.u = Ed;
  Object.assign(vk.prototype, { j: vk });
  class js extends Yd {
    constructor() {
      super();
      this.xU = "ACHIEVEMENT_SLIDER";
      this.mS = new V();
      this.Hl = m.l();
    }
    init() {
      super.init();
      this.Pa.spacing = 10;
      this.F2();
    }
    B() {
      super.B();
    }
    BZ() {
      this.Hl.length = 0;
      let a = v.zv.yI,
        b = m.Ib(p.o.Ai.pC),
        c = p.o.Ai.pO,
        d = 0,
        e = a.length;
      for (; d < e; ) {
        var f = d++;
        let g = a[f].name,
          h = 0;
        f = m.Ib(a[f].My);
        let k = 0,
          l = b.length;
        for (; k < l; ) {
          let n = k++,
            q = b[n];
          if (g == q.ab()) {
            h = q.DB;
            m.ye(b, n);
            break;
          }
        }
        this.yab(f, c, h);
      }
    }
    Jp(a) {
      a != null && (super.Jp(a), a.rt().Yo(), this.mS.$(a));
    }
    dcb() {
      let a = 0,
        b = this.Hl.length;
      for (; a < b; ) if (this.Hl[a++].first.zj) return !0;
      return !1;
    }
    Ir(a) {
      debugger;
      a = this.c9a(a);
      a < 0 ||
        a >= this.Pa.rm() ||
        (this.Pa.lj(a), (a = this.Pa.nt(a)), a != null && a.rt().Yo());
    }
    KLa(a) {
      a == null && (a = 0);
      let b = -1,
        c = 0,
        d = this.Hl.length;
      for (; c < d; ) {
        let e = c++;
        if (this.Hl[e].first.zj) {
          b = e;
          break;
        }
      }
      b < 0 || b >= this.Pa.rm() || this.Pa.lj(b, a);
    }
    V5a(a) {
      a = this.b9a(a);
      return a < 0 || a >= this.Pa.rm() ? null : this.Pa.nt(a);
    }
    b9a(a) {
      let b = 0,
        c = this.Hl.length;
      for (; b < c; ) {
        let d = b++;
        if (this.Hl[d].first == a) return d;
      }
      return -1;
    }
    c9a(a) {
      let b = 0,
        c = this.Hl.length;
      for (; b < c; ) {
        let d = b++;
        if (this.Hl[d].first.name == a) return d;
      }
      return -1;
    }
    yab(a, b, c) {
      for (var d = 0, e = b.length; d < e; ) {
        let f = b[d++].ab(),
          g = 0,
          h = a.length;
        for (; g < h; ) {
          let k = g++,
            l = a[k];
          if ((!l.hidden || l.completed) && f == l.name) {
            this.Hl.push(new Ca(l, l.counter));
            m.ye(a, k);
            break;
          }
        }
      }
      b = 0;
      for (d = a.length; b < d; )
        if (((e = b++), !a[e].hidden || a[e].completed))
          if ((this.Hl.push(new Ca(a[e], c)), c < a[e].counter)) break;
    }
    sA() {
      return this.Hl.length;
    }
    QC(a) {
      let b = new ls();
      b.init(this.Hl[a].first, this.Hl[a].second, this);
      b.Qn = a;
      b.ba(400, 130);
      return b;
    }
  }
  js.g = "44F";
  js.u = Yd;
  Object.assign(js.prototype, { j: js });
  class wk extends gf {
    constructor() {
      super();
      this.mC = new Sx();
      this.node.appendChild(this.mC.lw);
      this.Yj = this.appendChild(ra.Ya(fi, [].slice()));
      this.zi = this.appendChild(ra.Ya(fi, [].slice()));
    }
    bj(a, b, c, d) {
      this.R9 = 80;
      this.clear();
      this.Wz(this.Yj);
      this.Wz(this.zi);
      this.oPa(a.Oa);
      this.ol = d;
      this.mC.refresh(b, c, this.zi.active);
      this.ba(this.ce.x, this.ce.y);
    }
    im(a, b) {
      this.R9 = 63;
      this.clear();
      this.Wz(this.Yj);
      this.Wz(this.zi);
      this.oPa(a.Oa);
      this.ol = b;
      this.mC.lw.R(!1);
      this.ba(this.ce.x, this.ce.y);
    }
    ba(a, b) {
      super.ba(a, b);
      a = this.ce.x / 2;
      b = this.ce.y / 2;
      this.mC.lw.C(a);
      this.mC.lw.D(b);
      this.mC.lw.la(0.5);
      let c = this.Yj,
        d = this.zi,
        e = c.Rea(),
        f = this.ce.y * 0.7;
      c.node.la(f / e.y);
      d.node.la(f / e.y);
      this.zi.active ? (c.C(a - this.R9), d.C(a + this.R9)) : c.C(a);
      c.D(b);
      d.D(b);
    }
    rt() {
      return this.Yj;
    }
    co() {
      this.Yj.co();
      this.zi.active && this.zi.co();
    }
    clear() {
      this.Yj.clear();
      this.zi.clear();
      this.zi.Y(!1);
      this.mC.lw.R(!0);
    }
    Wz(a) {
      a.LS = this;
    }
    oPa(a) {
      this.Yj.init(a[0]);
      this.zi.Y(a.length > 1);
      this.Yj.position = 1;
      this.zi.position = 0;
      this.zi.active &&
        (this.zi.init(a[1]), (this.Yj.position = 2), (this.zi.position = 3));
    }
    eca(a) {
      this.Yj.nb.getName() == a ? this.Yj.Yo() : this.zi.Yo();
    }
    B() {
      super.B();
      this.zi = this.Yj = null;
    }
  }
  wk.g = "450";
  wk.u = gf;
  Object.assign(wk.prototype, { j: wk });
  class cs extends O {
    constructor() {
      super();
      this.If = new Ea(this.node);
      this.Ek = m.l();
      this.Co = !1;
      this.$k = this.appendChild(new Bb("EButtonWhite"));
      this.$k.Ym(null, y.tB);
      this.$k.V(Y.na("profile_BtnImprove"));
      this.$k.appendChild(ra.Ya(xk, [].slice()));
      this.$k.oa.addListener(w(this, this.Ugb));
      this.le = new ea(E.Na(), this.node);
      this.le.La(Z.sc);
      this.le.rd(!0);
      this.le.Ia(128);
      this.le.Lc(0.75);
      this.SB = this.appendChild(new Bb("EButtonWhite"));
      this.SB.V(Y.na("profile_LblImprove"));
      this.SB.W.R(!1);
    }
    ba(a, b) {
      var c = a * 0.05;
      this.If.C(c);
      this.If.D(b / 2);
      c = (a - 2 * c) / this.Ek.length;
      let d = c / 2,
        e = 0,
        f = this.Ek;
      for (; e < f.length; ) {
        let g = f[e];
        ++e;
        g.C(d);
        g.mf(c);
        d += c;
      }
      this.$k.mf(a);
      this.$k.C(a / 2);
      c = this.$k.ra();
      this.$k.D(b - c * 1.5);
      this.SB.la(this.$k.node.Db);
      this.SB.C(this.$k.node.za);
      this.SB.D(this.$k.node.qa);
      this.le.D(0);
      this.le.ua(a * 0.12);
      this.le.Fa(a, this.$k.node.qa - c);
    }
    refresh(a, b) {
      this.Nc = a;
      this.Co = b;
      this.qra = a.oBa();
      this.hPa();
      this.Lja();
      this.le.R(this.Nc.Be != 3 && !this.If.gg() && !this.Co);
      this.le.gg() && this.le.V(Y.na(this.Nc.MD()));
      this.SB.Y(this.Nc.Be == 2);
    }
    Lja() {
      this.gca();
      this.qra == null || this.Co ? this.If.R(!1) : (this.xca(), this.If.R(!0));
    }
    gca() {
      let a = 0,
        b = this.Ek;
      for (; a < b.length; ) b[a++].B();
      this.Ek.length = 0;
    }
    xca() {
      for (var a = this.qra.oJ().zn, b = 0, c = a.Hh; b < c.length; ) {
        let d = Wf.Jj(c[b++], this.If);
        this.Ek.push(d);
      }
      a.Hh.length > 0 && ((b = Wf.Zs(Z.Una, 0, this.If)), this.Ek.push(b));
      b = 0;
      for (a = a.th; b < a.length; )
        ((c = Wf.Jj(a[b++], this.If)), this.Ek.push(c));
    }
    Z(a) {
      super.Z(a);
      this.hPa();
    }
    hPa() {
      this.$k.Y(
        this.Nc.Be != 3 &&
          this.Nc.Be != 2 &&
          this.Nc.Be != 1 &&
          !this.Co &&
          vb.get().Iwa(),
      );
    }
    Ugb() {
      vb.get().Yab(this.Nc) && (this.$k.Y(!1), this.SB.Y(!0));
    }
  }
  cs.g = "451";
  cs.u = O;
  Object.assign(cs.prototype, { j: cs });
  class fi extends Ed {
    constructor() {
      super(248, y.zTa);
    }
    init(a) {
      this.position = 0;
      this.Iy = R.aa(E.get(260), y.BSa, this.node);
      this.Iy.R(!1);
      this.clear();
      this.nb = a;
      a != null &&
        (a.addEventListener(0, w(this, this.fIa)),
        a.addEventListener(1, w(this, this.dIa)),
        a.addEventListener(2, w(this, this.cIa)),
        a.addEventListener(3, w(this, this.eIa)));
      this.yO = a != null ? a.p7a() : "";
      this.LW = !1;
      this.Ay = zc.XE.max / 255;
      this.hO = zc.XE.min / 255;
      this.Vqb();
      this.eM();
      this.co();
      this.Fca();
      this.s5(p.o.bb() < a.level);
    }
    B() {
      super.B();
      this.clear();
      this.nb = null;
    }
    Z(a) {
      let b = this.parent;
      for (; b != null; ) {
        if (b instanceof ei && !b.visible) return;
        b = b.parent;
      }
      super.Z(a);
    }
    clear() {
      this.nb != null &&
        (this.nb.removeEventListener(0, w(this, this.fIa)),
        this.nb.removeEventListener(1, w(this, this.dIa)),
        this.nb.removeEventListener(2, w(this, this.cIa)),
        this.nb.removeEventListener(3, w(this, this.eIa)));
      this.position = 0;
    }
    s5(a) {
      this.LW = a;
      super.s5(this.LW || (this.nb != null && this.nb.Be == 3));
    }
    y0() {
      return this.LW || this.nb == null ? !0 : this.nb.Be == 3;
    }
    co() {
      if (this.nb != null) {
        switch (this.nb.Be) {
          case 0:
            this.setActive(!0);
            break;
          case 1:
            this.Ks.wa(this.Ay);
            this.setActive(!1);
            break;
          case 2:
            this.Ks.wa(this.Ay);
            this.setActive(!0);
            break;
          case 3:
            (this.setActive(!0), this.zL(!1));
        }
        this.s5(this.LW);
      }
    }
    PE() {
      this.y0() || super.PE();
    }
    animate() {
      super.animate();
      this.nb != null && this.nb.Be == 0 && this.Bja();
    }
    oBa() {
      if (this.nb == null) return null;
      let a = sa.Jfa(),
        b = 0,
        c = a.length;
      for (; b < c; ) {
        let d = b++;
        if (this.nb.Nc != null && a[d].name == this.nb.Nc.move) return a[d].dr;
      }
      return null;
    }
    E9a() {
      return "pieces/level" + (this.nb != null ? this.nb.UQ() : 1);
    }
    Fca() {
      if (this.nb != null) {
        var a = this.nb.UQ() == 1 && this.nb.type != 2;
        this.nb.UQ() <= 0 ||
          (a && this.nb.type != 3) ||
          (this.Iy.R(!0),
          this.Iy.yb(this.E9a()),
          this.Iy.la(0.8),
          this.Iy.C(this.LH.ea.x / 2 - this.Iy.ya() * 1.15),
          this.Iy.D(this.LH.ea.y / 2 - this.Iy.ra() * 1.15));
      }
    }
    fIa() {
      this.co();
    }
    dIa() {
      this.nb = null;
    }
    cIa() {
      this.eM();
      this.co();
      this.Fca();
    }
    eIa() {
      this.Fca();
    }
  }
  fi.g = "452";
  fi.u = Ed;
  Object.assign(fi.prototype, { j: fi });
  class Sx {
    constructor() {
      this.lw = new Ea();
      this.IO = R.aa(E.get(260), y.qoa, this.lw);
      this.SM = R.aa(E.get(260), y.qoa, this.lw);
      this.KW = new Ea(this.lw);
      var a = R.aa(E.get(260), y.DSa, this.KW);
      a.Ga();
      a = a.ya() / 2;
      this.IO.D(-a);
      this.SM.D(a);
      this.IO.Qb(130);
      this.IO.jk(0.5, 1);
      this.IO.Un(0.5, 1);
      this.SM.Qb(130);
      this.SM.jk(0.5, 0);
      this.SM.Un(0.5, 0);
      var b = R.aa(E.get(260), y.poa, this.KW);
      b.xc(50);
      b.jk(1, 0.5);
      b.Un(1, 0.5);
      b.C(-a);
      b = R.aa(E.get(260), y.poa, this.KW);
      b.xc(50);
      b.jk(0, 0.5);
      b.Un(0, 0.5);
      b.C(a);
    }
    refresh(a, b, c) {
      this.IO.R(!a);
      this.SM.R(!b);
      this.KW.R(c);
    }
  }
  Sx.g = "453";
  Object.assign(Sx.prototype, { j: Sx });
  class hs extends Yd {
    constructor() {
      super();
      this.xU = "POWERLEVELING_SLIDER";
      this.Yt = m.l();
    }
    init() {
      super.init();
      this.aDa() && this.F2();
    }
    Z(a) {
      super.Z(a);
      if (this.sE != null && !this.Pa.ZQ()) {
        debugger;
        this.tva(this.sE);
        this.sE = null;
      }
    }
    B() {
      super.B();
      this.mS = null;
    }
    BZ() {
      this.Yt = id.ot().zH;
    }
    aDa() {
      let a = id.ot().Oi,
        b = p.o.bb(),
        c = 0;
      for (; c < a.length; ) {
        let d = a[c];
        ++c;
        if (d.Be == 0 && b >= d.level) return !0;
      }
      return !1;
    }
    Qyb(a) {
      this.Pa.nt(a).bj(this.Yt[a], a == 0, a + 1 == this.Yt.length, this);
    }
    X5a(a) {
      a = this.dCa(a);
      return a < 0 || a >= this.Pa.rm() ? null : this.Pa.nt(a);
    }
    Ir(a) {
      var b = this.d9a(a);
      b < 0 ||
        b >= this.Pa.rm() ||
        (this.Pa.lj(b), (b = this.Pa.nt(b)), b != null && b.eca(a));
    }
    WA(a, b) {
      b == null && (b = 0);
      let c = this.dCa(a);
      if (c < 0 || c >= this.Pa.rm()) return !1;
      this.Pa.lj(c, b);
      b = this.Pa.nt(c);
      b != null && b.eca(a.getName());
      return !0;
    }
    tqb() {
      let a = -1,
        b = -1,
        c = id.ot().Oi,
        d = p.o.bb();
      this.sE = null;
      let e = 0;
      for (; e < c.length; ) {
        let f = c[e];
        ++e;
        if (f.Be == 3 || d < f.level) break;
        f.level > b && ((b = f.level), (this.sE = f), ++a);
      }
      a >= 0 && a < this.Pa.rm() ? this.Pa.lj(a) : this.Pa.lj(0);
      this.sE == null || this.Pa.ZQ() || (this.tva(this.sE), (this.sE = null));
    }
    tva(a) {
      let b = this.Pa.Ac;
      b != null && (b.Yj.nb == a ? b.Yj.Yo() : b.zi.nb == a && b.zi.Yo());
    }
    Jp(a) {
      a != null && super.Jp(a);
    }
    dCa(a) {
      let b = 0,
        c = this.Yt.length;
      for (; b < c; ) {
        let d = b++,
          e = 0,
          f = this.Yt[d].Oa;
        for (; e < f.length; ) if (f[e++] == a) return d;
      }
      return -1;
    }
    d9a(a) {
      let b = 0,
        c = this.Yt.length;
      for (; b < c; ) {
        let d = b++,
          e = 0,
          f = this.Yt[d].Oa;
        for (; e < f.length; ) if (f[e++].getName() == a) return d;
      }
      return -1;
    }
    H5(a) {
      return super.H5(a);
    }
    sA() {
      return this.Yt.length;
    }
    QC(a) {
      let b = new wk();
      b.bj(this.Yt[a], a == 0, a + 1 == this.Yt.length, this);
      b.Qn = a;
      b.ba(400, 150);
      return b;
    }
  }
  hs.g = "454";
  hs.u = Yd;
  Object.assign(hs.prototype, { j: hs });
  class fs extends O {
    constructor() {
      super();
      this.le = new ea(E.Na(), this.node);
      this.le.Ia(128);
      this.le.La(Z.sc);
      this.le.rd(!0);
      this.ib = null;
    }
    ba(a, b) {
      this.le.D(b * 0.2);
      this.le.Fa(a, b * 0.7);
      this.le.ua(a * 0.14);
      this.le.Lc(0.7);
    }
    refresh(a) {
      this.ib = a;
      this.le.V(Y.na(this.ib.text));
    }
  }
  fs.g = "455";
  fs.u = O;
  Object.assign(fs.prototype, { j: fs });
  class ks extends Yd {
    constructor() {
      super();
      this.mS = new V();
      this.XA = m.l();
    }
    init() {
      this.XA = m.l();
      this.xU = "SEALS_SLIDER";
      super.init();
      this.F2();
    }
    Kha() {
      let a = 0,
        b = p.o.xa.mJ(I.$r);
      for (; a < b.length; ) b[a++].ib.Nr(!1);
      p.o.save();
    }
    BZ() {
      let a = (this.XA.length = 0),
        b = p.o.xa.mJ(I.$r);
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        c.qd() > 0 && this.XA.push(c);
      }
    }
    Ir(a) {
      a = this.e9a(a);
      a < 0 || a >= this.Pa.rm() || this.Pa.lj(a);
    }
    e9a(a) {
      let b = 0,
        c = this.XA.length;
      for (; b < c; ) {
        let d = b++;
        if (this.XA[d].ab() == a) return d;
      }
      return -1;
    }
    Jp(a) {
      if (a != null) {
        super.Jp(a);
        this.mS.$(a);
        for (var b = 0, c = this.Pa.cells; b < c.length; ) c[b++].yl(0.5);
        a.yl(1);
      }
    }
    sA() {
      return this.XA.length;
    }
    QC(a) {
      let b = new ms();
      b.Qn = a;
      b.r5(this.XA[a].ib);
      b.ba(400, 300);
      return b;
    }
  }
  ks.g = "456";
  ks.u = Yd;
  Object.assign(ks.prototype, { j: ks });
  class ms extends ff {
    constructor() {
      super();
    }
    ba(a, b) {
      super.ba(a, b);
      this.image.la((b * 1.25) / this.image.size);
      this.image.C(a / 2);
      this.image.D(b / 2);
    }
    yl(a) {
      super.yl(a);
      this.image.node.wa(a);
    }
    r5(a) {
      if (a != null) {
        this.Kd("SealsTableViewCell(" + a.name + ")");
        var b = p.o.xa.te(a);
        this.ac = b != null && b.kw() != null ? b.kw() : a;
        this.ac != null && (this.image = this.appendChild(new oe(a.fileName)));
      }
    }
  }
  ms.g = "457";
  ms.u = ff;
  Object.assign(ms.prototype, { j: ms });
  class ns extends gf {
    constructor() {
      super();
    }
    Wz() {
      this.TH = this.appendChild(ra.Ya(uk, [].slice()));
      this.TH.LS = this;
    }
    init(a, b) {
      this.clear();
      this.Wz();
      this.ol = b;
      this.TH.init(a.image, a);
    }
    B() {
      super.B();
      this.TH = null;
    }
    ba(a, b) {
      super.ba(a, b);
      this.TH.ba(this.ce.x, this.ce.y);
    }
    rt() {
      return this.TH;
    }
    co() {
      this.TH.co();
    }
    clear() {}
  }
  ns.g = "458";
  ns.u = gf;
  Object.assign(ns.prototype, { j: ns });
  class ds extends O {
    constructor() {
      super();
      this.Vp = this.appendChild(new Bb("EButtonWhite"));
      this.Vp.Ym(null, y.tB);
      this.Vp.V(Y.na("profile_BtnShow"));
      this.Vp.oa.addListener(w(this, this.Ihb));
      this.Pu = new ea(E.Na(), this.node);
      this.Pu.Ia(128);
      this.Pu.rd(!0);
      this.Pu.La(Z.sc);
      this.us = m.l();
    }
    B() {
      super.B();
      this.LO = this.Vp = null;
    }
    ba(a, b) {
      this.Vp.Df(a * 0.4);
      this.Vp.C(a / 2);
      this.Vp.D(b - this.Vp.ra());
      this.Pu.D(b * 0.3);
      this.Pu.Fa(a, b * 0.4);
      this.Pu.ua(a * 0.2);
    }
    refresh(a, b) {
      this.LO = a;
      this.us = b;
      this.Pu.R(this.us.length > 0);
      this.Pu.gg() && this.Pu.V(this.F6a());
      this.Vp.Y(this.LO.dr != null && this.LO.dr.ucb);
    }
    F6a() {
      let a = new Fb(),
        b = 1,
        c = this.us.length,
        d = 0;
      for (; d < c; ) {
        let e = d++;
        e + 1 < c && this.us[e] == this.us[e + 1]
          ? ++b
          : ((a.M += "<image>" + y.MRa + "</image>"),
            (a.M += K.T((this.us[e] * 100) | 0)),
            b > 1 && ((a.M += " x " + b), (b = 1)),
            e < this.us.length - 1 && (a.M += "\n"));
      }
      return a.M;
    }
    Ihb() {
      this.LO != null && vb.get().ulb(this.LO);
    }
  }
  ds.g = "459";
  ds.u = O;
  Object.assign(ds.prototype, { j: ds });
  class uk extends Ed {
    constructor() {
      super(248, y.ATa);
    }
    init(a, b) {
      this.yO = a;
      this.$p = b;
      this.If = new Ea(this.node);
      this.If.R(!1);
      this.ai = new ea(E.Na(), this.node);
      this.ai.La(Z.sc);
      this.ai.Ia(64);
      this.ai.R(!1);
      this.Ay = zc.XE.max / 255;
      this.hO = zc.XE.min / 255;
      this.bta = b != null && b.hE;
      this.Ek = [];
      this.eM();
      this.setActive(!0);
      this.Lja();
      this.Umb();
    }
    ba(a, b) {
      var c = this.Rea().x,
        d = b / 2,
        e = b * 0.1;
      this.icon.Df(b * 0.8);
      this.icon.C(this.icon.ya() / 2 + e);
      this.icon.D(d);
      this.ai.C(this.icon.za + (this.icon.ya() / 2) * 1.2);
      this.ai.ua(b * 0.3);
      let f = this.Ek.length > 0;
      f
        ? (this.ai.Fa(a - (c + e), b / 2), this.ai.D(d))
        : (this.ai.Fa(a - (c + e), b), this.ai.D(0));
      a = this.ai.za + this.icon.ya() * 0.25;
      c = 0;
      for (e = this.Ek; c < e.length; ) {
        let g = e[c];
        ++c;
        g.Df(b * 0.4);
        g.C(a);
        a += g.ea.x * g.Db;
        g.D(d);
      }
      f &&
        this.ai.gg() &&
        ((b = this.If.getBounds(this.If).N),
        (d = this.ai.Pj()),
        (b -= (d.N - d.K) * 1.1),
        b > this.ai.za && this.ai.C(b));
      this.ai.pk();
    }
    tea() {
      let a = m.l();
      if (this.$p.dr != null) {
        let b = this.$p.dr.va.xb,
          c = 0,
          d = b.length;
        for (; c < d; ) {
          let e = c++;
          b[e].type == 4 && a.push(b[e].Xb);
        }
      }
      return a;
    }
    co() {
      this.bta = this.$p != null && this.$p.hE;
    }
    Lja() {
      this.gca();
      this.$p.dr.oJ() == null ? this.If.R(!1) : (this.xca(), this.If.R(!0));
    }
    gca() {
      let a = 0,
        b = this.Ek;
      for (; a < b.length; ) b[a++].B();
      this.Ek.length = 0;
    }
    xca() {
      for (var a = this.$p.dr.oJ().zn, b = 0, c = a.Hh; b < c.length; ) {
        let d = Wf.Jj(c[b++], this.If);
        this.Ek.push(d);
      }
      a.Hh.length > 0 && ((b = Wf.Zs(Z.Una, 0, this.If)), this.Ek.push(b));
      b = 0;
      for (a = a.th; b < a.length; )
        ((c = Wf.Jj(a[b++], this.If)), this.Ek.push(c));
    }
    Umb() {
      if (this.$p != null) {
        var a = this.$p.tFa;
        a = a == null || a == "";
      } else a = !0;
      a ? this.ai.R(!1) : (this.ai.V(Y.na(this.$p.tFa)), this.ai.R(!0));
    }
    animate() {
      super.animate();
      this.bta && this.Bja();
    }
  }
  uk.g = "45A";
  uk.u = Ed;
  Object.assign(uk.prototype, { j: uk });
  class is extends Yd {
    constructor() {
      super();
    }
    init() {
      this.Xl = m.l();
      this.xU = "SKILLS_SLIDER";
      super.init();
      this.Pa.spacing = 10;
      this.F2();
    }
    Kha() {
      let a = 0,
        b = v.AQ();
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        c.hE && ((c.hE = !1), p.o.Enb(c.name));
      }
      p.o.save();
    }
    BZ() {
      this.Xl = v.AQ(9);
      this.Xl.sort(function (a, b) {
        return qb(a.E4, b.E4);
      });
    }
    Ir(a) {
      var b;
      b == null && (b = 0);
      a = this.f9a(a);
      a < 0 ||
        a >= this.Pa.rm() ||
        (this.Pa.lj(a, b), (b = this.Pa.nt(a)), b != null && b.rt().Yo());
    }
    qqb() {
      var a;
      a == null && (a = 0);
      let b = p.o.TN,
        c = !1,
        d = -1,
        e = 0,
        f = this.Xl.length;
      for (; e < f; ) {
        let g = e++,
          h = 0,
          k = b.length;
        for (; h < k; )
          if (this.Xl[g].name == b[h++]) {
            d = g;
            c = !0;
            break;
          }
        if (c) break;
      }
      d < 0 || d >= this.Xl.length || this.Pa.lj(d, a);
    }
    f9a(a) {
      let b = 0,
        c = this.Xl.length;
      for (; b < c; ) {
        let d = b++;
        if (this.Xl[d].name == a) return d;
      }
      return -1;
    }
    Jp(a) {
      a != null && (super.Jp(a), a.rt().Yo());
    }
    sA() {
      return this.Xl.length;
    }
    QC(a) {
      let b = new ns();
      b.init(this.Xl[a], this);
      b.Qn = a;
      b.ba(400, 150);
      return b;
    }
  }
  is.g = "45B";
  is.u = Yd;
  Object.assign(is.prototype, { j: is });
  class yk extends O {
    constructor() {
      super();
      this.s3 = new V();
      this.buttons = [];
      this.Qa = R.Ed(-1, 1, 1, this.node);
      this.ii("Money +1m", 0);
      this.ii("Bonus +1m", 1);
      this.ii("Level +1", 2);
      this.ii("Open items", 3);
      this.ii("Reset progress", 4);
    }
    Sn(a) {
      this.Qa.lk(a.N - a.K, a.X - a.P);
      this.node.C(a.K);
      this.node.D(a.P);
      for (var b = 0, c = this.buttons; b < c.length; ) {
        var d = c[b];
        ++b;
        d.Df((a.N - a.K) * 0.3);
        d.C((a.N - a.K) / 2);
      }
      a = this.buttons[0].ra();
      b = 0;
      for (c = this.buttons; b < c.length; )
        ((d = c[b]), ++b, d.D(a), (a += d.ra() * 1.25));
    }
    ii(a, b) {
      let c = new Bb("EButtonWhite");
      c.ee = b;
      c.V(a);
      this.buttons.push(c);
      this.appendChild(c);
      c.oa.addListener(w(this, this.Rg));
      return c;
    }
    Rg(a) {
      switch (a) {
        case 0:
          p.Twa(1e6);
          break;
        case 1:
          p.Swa(1e6, 7);
          break;
        case 2:
          p.o.cMa(p.o.Rz());
          this.s3.$();
          break;
        case 3:
          yk.pyb();
          break;
        case 4:
          p.u0a();
      }
    }
    static pyb() {
      let a = p.o;
      a.Bq("ZONE_2", !0);
      a.Bq("ZONE_3", !0);
      a.Bq("ZONE_4", !0);
      a.Bq("ZONE_5", !0);
      a.Bq("ZONE_6", !0);
      a.Bq("ZONE_IM", !0);
      a.Bq("ZONE_7_1", !0);
      a.Bq("ZONE_7_2", !0);
      a.Bq("ZONE_7_3", !0);
      let b = 0,
        c =
          "WEAPON_NUNCHAKU WEAPON_NAGINATA WEAPON_KATANA WEAPON_WANDERER_STAFF WEAPON_HEAVY_KUSARIGAMA WEAPON_DADAO_JANISSARY WEAPON_STRANGER_KNUCKLES".split(
            " ",
          );
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        p.vf(d) == null && p.gXa(d);
      }
      a.save();
    }
  }
  yk.g = "45C";
  yk.u = O;
  Object.assign(yk.prototype, { j: yk });
  class hf extends O {
    constructor() {
      super();
      this.size = new H(0, 0, 0, 1);
    }
    ba(a, b) {
      let c = this.size;
      c.x = a;
      c.y = b;
    }
    yS() {
      this.kr = !0;
      this.yw = !1;
    }
    zK() {
      this.yw = this.kr = !1;
    }
    DS() {
      this.yw = !0;
    }
    CS() {
      this.yw = !1;
    }
    jn() {
      this.size.x > 0 && this.ba(this.size.x, this.size.y);
    }
  }
  hf.g = "45D";
  hf.u = O;
  Object.assign(hf.prototype, { j: hf });
  class Ne extends hf {
    constructor() {
      super();
      this.Cd = m.l();
      this.fPa = new V();
      this.af = this.Eh = this.Aa = null;
      this.PUa = this.u9 = this.rW = this.Hra = this.nW = !1;
      this.Xc = new ea(E.Na(), this.node);
      this.Xc.Ia(128);
      this.Xc.La(Z.sc);
      this.Xc.rd(!0);
      this.Xc.Lc(0.5);
      this.Xc.IF(!0);
      this.Tb = new ea(E.Na(), this.node);
      this.Tb.Ia(128);
      this.Tb.rd(!0);
      this.Tb.La(Z.sc);
      this.Tb.R(!1);
      this.zg = new ea(E.Na(), this.node);
      this.zg.Ia(2);
      this.zg.rd(!0);
      this.zg.La(Z.sc);
      this.zg.R(!1);
      this.zg.Lc(0.8);
      this.rH = this.appendChild(ra.Ya(os, [].slice()));
      this.uUa = this.appendChild(ra.Ya(O, [].slice()));
      this.ZV = this.ii("GoldButton", "EButtonGreen", p.o.pf, 1, null);
      this.HVa = this.ii("RubyButton", "EButtonGreen", Z.Zr, 2, null);
      this.dra = this.ii("GoldUpgradeButton", "EButtonYellow", p.o.pf, 8, null);
      this.IVa = this.ii("RubyUpgradeButton", "EButtonYellow", Z.Zr, 9, null);
      this.aVa = this.ii(
        "ImmediatelyDeliveryButton",
        "EButtonGreen",
        Z.Zr,
        11,
        null,
      );
      this.DUa = this.ii("ConsumableButton", "EButtonGreen", Z.Zr, 19, null);
      this.Osa = this.ii(
        "PaymentButton",
        "EButtonGreen",
        null,
        3,
        null,
        "0.00 USD",
      );
      this.VV = this.ii("FreeButton", "EButtonGreen", null, 14, null, "");
      this.ii("LotteryButton", "EButtonGreen", null, 4, null, "");
      this.Wl = new ea(E.Na(), this.node);
      this.Wl.R(!1);
      this.Wl.V("0");
      this.Wl.La(Z.sc);
      this.Wl.Ia(128);
      this.vJ();
      this.XUa = v.zAa();
      this.nv = 1;
    }
    Or(a) {
      this.Aa = a;
      this.refresh();
    }
    Tyb() {
      this.ZV.tL(p.o.pf);
      this.dra.tL(p.o.pf);
      this.mNa();
    }
    refresh() {
      this.af = p.o.xa.te(this.Aa);
      this.Aa =
        (this.nW = re.kEa(this.af)) &&
        this.af.kw() != null &&
        this.Aa.type != I.vB
          ? this.af.kw()
          : this.Aa;
      this.Hra = re.Ycb(this.Aa, this.af);
      this.rW = re.Tcb(this.af);
      this.u9 = re.udb(this.af);
      var a = null;
      if (this.Aa != null)
        ((a = this.Aa.Eg),
          (a = a == null || a == "" ? this.Aa.name : this.Aa.Eg));
      else if (this.af != null) {
        debugger;
        a = p.items.$b(this.af.ab());
        a = a != null ? a.Eg : null;
        if (a == null || a == "") a = this.af.ab();
      }
      a = Y.y9a(a);
      this.Xc.V(Y.na(a));
      a = p.o.wt("_FirstGemPurchaseBonusActive", 0);
      if (
        a != null &&
        a.value == "1" &&
        this.Aa != null &&
        this.Aa.type == I.yk &&
        this.Aa.Yb == I.fG
      )
        debugger;
      this.prb();
      this.vJ();
      this.Vp();
      this.Aa != null &&
      this.Aa.Bf <= p.o.bb() &&
      (this.Aa.type != I.yk || this.Aa.XCa())
        ? this.nyb()
        : this.ueb();
      a = this.af != null ? this.af.Si : null;
      let b = p.o.tC && this.nW,
        c = this.Aa != null && this.Aa.type != I.vB && this.Aa.type != I.Jm;
      this.rH.Y(c);
      c && this.rH.refresh(this.Aa, a, b && a != null);
      this.jn();
    }
    Z(a) {
      super.Z(a);
      this.bra &&
        ((this.nv += a),
        this.nv > 1 &&
          ((this.nv = 0),
          (a = fk.S1("button:shop:gems")),
          (this.VV.Qf = a),
          this.VV.node.wa(a ? 1 : 0.25)));
      a = this.D7a();
      a > 0 ? this.gtb(a) : (this.Wl.V(""), this.Wl.R(this.PUa));
    }
    ba(a, b) {
      super.ba(a, b);
      var c = a * 0.2;
      this.Xc.ua(c);
      this.Xc.Fa(a, c + c / 2);
      let d = b * 0.1;
      this.Xc.D(d - c / 2);
      this.Xc.pk();
      d += c * 1.3;
      this.rH.active &&
        (this.rH.ba(a, a * 0.22), this.rH.D(d), (d += this.rH.node.ra()));
      d += a * 0.01;
      this.Tb.gg() &&
        ((c = a * 0.2),
        this.Tb.Fa(a, c),
        this.Tb.ua(c),
        this.Tb.D(d),
        this.Tb.pk(),
        (d += c));
      this.zg.gg() &&
        (this.Tb.gg() || (d += a * 0.14),
        (c = a * 0.2),
        this.zg.Fa(a, c),
        this.zg.ua(c * 0.8),
        this.zg.D(d),
        (d += c));
      this.Wl.gg() &&
        (this.Wl.Fa(a, c), this.Wl.ua(c), this.Wl.D(d), this.Wl.pk());
      c = a * 0.05;
      d = b - c * 3;
      for (b = this.Cd.length; --b > -1; ) {
        let e = this.Cd[b];
        e.active && (e.C(a / 2), e.mf(a), e.D(d), (d -= e.ra() + c));
      }
    }
    ii(a, b, c, d, e, f) {
      f == null && (f = "0");
      c = new Rf(b, c);
      c.Kd(a);
      c.Ym(null, y.tB);
      c.YT(b);
      c.V(f);
      c.ee = d;
      c.control = e;
      c.oa.addListener(w(this, this.$hb));
      c.appendChild(new pe(a));
      this.uUa.appendChild(c);
      this.Cd.push(c);
      return c;
    }
    $hb(a) {
      if (a == 4 || !this.Clb(ha.F().ta))
        switch (a) {
          case 1:
            this.PGa(0, this.Aa.np(), w(this, this.rZa), this.Aa.Ec);
            break;
          case 2:
            this.mka(0, this.Aa.pn(), w(this, this.sZa));
            break;
          case 3:
            jb.Jha(this.Aa, this.L8);
            break;
          case 4:
            debugger;
            break;
          case 8:
            a = p.vf(this.Aa.name).Si;
            this.PGa(1, a.np(), w(this, this.uZa), a.Ec);
            break;
          case 9:
            this.mka(1, p.vf(this.Aa.name).Si.pn(), w(this, this.vZa));
            break;
          case 11:
            this.tZa();
            break;
          case 14:
            this.Aa.Yb == I.fG && fk.show("button:shop:gems");
            break;
          case 19:
            this.mka(0, this.Aa.pn(), w(this, this.qZa));
        }
    }
    PGa(a, b, c, d) {
      d == null && (d = 0);
      this.transaction(a, 0, b, p.o.Ob, c, 2, d);
    }
    mka(a, b, c) {
      var d;
      d == null && (d = 0);
      this.transaction(a, 1, b, p.o.gd, c, 3, d);
    }
    transaction(a, b, c, d, e, f, g) {
      g == null && (g = 0);
      this.jPa();
      c > d ? v.Gv(this.Aa, f) : Xc.vib(a, b, c, e, g, this.Eh.name);
    }
    jPa() {
      this.Eh = this.Aa;
    }
    Clb(a) {
      let b = a.Nb;
      a.Nb = ib.empty();
      a.Vv = "";
      a.hT = "";
      a.item = this.Aa;
      let c = ha.F().Vf("QUEST_EVENT_PREPURCHASE");
      a.Nb = b;
      return c;
    }
    rZa(a) {
      (a == null ? 0 : a) > 0 &&
        this.Eh != null &&
        (Pa.wwa(this.Eh) && p.o.xa.cp(this.Eh, !0), this.Xr());
    }
    sZa(a) {
      (a == null ? 0 : a) > 0 &&
        this.Eh != null &&
        (Pa.XYa(this.Eh) && p.o.xa.cp(this.Eh, !0), this.Xr());
    }
    uZa(a) {
      (a == null ? 0 : a) <= 0 ||
        this.Eh == null ||
        (Pa.WYa(this.Eh) && p.o.xa.cp(this.Eh, !0), this.Xr());
    }
    vZa(a) {
      (a == null ? 0 : a) <= 0 ||
        this.Eh == null ||
        (Pa.YYa(this.Eh) && p.o.xa.cp(this.Eh, !0), this.Xr());
    }
    tZa() {
      this.jPa();
      this.Eh != null && (Pa.uwa(this.Eh) && p.o.xa.cp(this.Eh, !0), this.Xr());
    }
    qZa(a) {
      (a == null ? 0 : a) > 0 &&
        this.Eh != null &&
        (Pa.SYa(this.Eh), this.Xr());
    }
    ueb() {
      let a = 0,
        b = this.Cd;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        c != null && (c.node.wa(0.7), (c.Qf = !1));
      }
    }
    nyb() {
      let a = 0,
        b = this.Cd;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        c != null && (c.node.wa(1), (c.Qf = !0));
      }
    }
    Vp() {
      this.bra = !1;
      if (this.Aa != null && !this.Aa.U5)
        switch (this.Aa.type) {
          case I.Tx:
            this.rvb();
            break;
          case I.Gu:
            this.l5(this.VV, this.Aa.AU, 0, !0);
            this.bra = !0;
            break;
          case I.Jm:
          case I.vB:
            break;
          case I.yk:
            this.Kvb();
            break;
          default:
            this.mNa();
        }
    }
    vJ() {
      let a = 0,
        b = this.Cd;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        c != null && c.Y(!1);
      }
    }
    pL(a, b, c) {
      b <= 0 || this.l5(a, ie.Tr(b), c);
    }
    l5(a, b, c, d) {
      d == null && (d = !1);
      a != null && (a.Y(!0), a.P5(c), d ? a.V(Y.na(b)) : a.V(b));
    }
    rvb() {
      let a = new H(0, 0, 0, 1);
      p.o.gd < this.Aa.pd && (a = Z.RED);
      this.Aa.Yb != I.WTa &&
        this.pL(
          this.DUa,
          this.Aa.pd,
          (((a.z * 255) | 0) & 255) |
            ((((a.y * 255) | 0) & 255) << 8) |
            ((((a.x * 255) | 0) & 255) << 16),
        );
    }
    Kvb() {
      if (this.Aa.Yb == I.XTa) this.l5(this.VV, this.Aa.AU, 0, !0);
      else {
        let a = this.Aa.Op + " " + this.Aa.YK;
        this.Aa.jda != null && (a = this.Aa.jda);
        L.J.Lca != null && this.Osa.Irb(L.J.Lca);
        this.l5(this.Osa, a, 0);
      }
    }
    mNa() {
      if (this.rW) {
        var a = this.af.Qz() ? this.af.Si : this.af.ib;
        a = a != null ? a : this.af.kw();
        var b = p.o.u1(a.Od) ? new H(0, 0, 0, 1) : sc.Iz();
        this.pL(
          this.aVa,
          a.Od,
          (((b.z * 255) | 0) & 255) |
            ((((b.y * 255) | 0) & 255) << 8) |
            ((((b.x * 255) | 0) & 255) << 16),
        );
      } else
        this.nW
          ? this.u9 &&
            p.o.tC &&
            ((a = this.af.Si),
            (b = p.o.ADa(a.np()) ? new H(0, 0, 0, 1) : sc.Iz()),
            this.pL(
              this.dra,
              a.np(),
              (((b.z * 255) | 0) & 255) |
                ((((b.y * 255) | 0) & 255) << 8) |
                ((((b.x * 255) | 0) & 255) << 16),
            ),
            (b = p.o.u1(a.pn()) ? new H(0, 0, 0, 1) : sc.Iz()),
            this.pL(
              this.IVa,
              a.pn(),
              (((b.z * 255) | 0) & 255) |
                ((((b.y * 255) | 0) & 255) << 8) |
                ((((b.x * 255) | 0) & 255) << 16),
            ))
          : ((a = p.o.ADa(this.Aa.np()) ? new H(0, 0, 0, 1) : sc.Iz()),
            this.pL(
              this.ZV,
              this.Aa.np(),
              (((a.z * 255) | 0) & 255) |
                ((((a.y * 255) | 0) & 255) << 8) |
                ((((a.x * 255) | 0) & 255) << 16),
            ),
            (a = p.o.u1(this.Aa.pn()) ? new H(0, 0, 0, 1) : sc.Iz()),
            this.pL(
              this.HVa,
              this.Aa.pn(),
              (((a.z * 255) | 0) & 255) |
                ((((a.y * 255) | 0) & 255) << 8) |
                ((((a.x * 255) | 0) & 255) << 16),
            ));
    }
    D7a() {
      if (this.rW && this.af != null) {
        var a = this.af.Dh - p.Dc;
        if (a > 0) return a;
      } else if (this.Aa != null && this.Aa.bA) {
        if (((a = this.Aa.fm()), a != null && ((a = a.An - p.Dc), a > 0)))
          return a;
      } else if (
        this.Aa != null &&
        (this.Aa.type == I.vB || this.Aa.type == I.Jm) &&
        ((a = this.Aa.fm()), a != null && ((a = a.An - p.Dc), a > 0))
      )
        return a;
      return 0;
    }
    gtb(a) {
      let b = !this.Wl.gg();
      this.Wl.R(!0);
      let c = a >= Z.VTa;
      this.Wl.V(
        Xe.Afa(
          a,
          !0,
          !0,
          !0,
          c,
          !1,
          !0,
          ":",
          Cc.F().nn(Ee.o7) + " ",
          !1,
          !0,
          !0,
          !0,
          !1,
          "",
          "",
          "",
          c ? 4 : 3,
        ),
      );
      b && this.jn();
    }
    prb() {
      this.Tb.R(!1);
      this.zg.R(!1);
      this.Aa != null && this.Aa.type == I.Tx
        ? this.frb()
        : this.Aa != null && this.Aa.type == I.Gu
          ? this.Drb()
          : this.Aa != null && this.Aa.type == I.yk
            ? this.Bsb()
            : this.lrb();
    }
    Drb() {
      var a = this.Aa.text;
      this.Aa.Yb == I.fG &&
        (a += "{{img::" + Z.Zr + "}}{{" + this.Aa.Pp + "}}");
      a = Y.na(a);
      a = a.replace(RegExp("\\{0\\}", ""), "<image>ruby</image>");
      a = a.replace(RegExp("\\{1\\}", ""), K.T(this.Aa.Pp));
      this.zg.Lc(0.8);
      this.zg.V(a);
      this.zg.R(!0);
    }
    frb() {
      this.zg.R(!0);
      this.zg.Lc(0.6);
      this.zg.V(Y.na(this.Aa.text));
    }
    Bsb() {
      let a = "",
        b = this.Aa.J0(),
        c = this.Aa.Pp,
        d = this.Aa.gJ(),
        e = this.Aa.On;
      b > 0 &&
        ((a =
          b == c
            ? this.Aa.Rs > 0
              ? Ne.PJa(Z.Zr, Ne.Cwa(b, this.Aa.Rs), b, this.Aa.Rs)
              : "<image>ruby</image> " + ie.Tr(b)
            : Ne.QJa()),
        (this.L8 = v.hBa(this.Aa, this.XUa)),
        this.L8 > 0 &&
          (a += "\n<image>" + p.o.pf + "</image> " + ie.Tr(this.L8)));
      d > 0 &&
        (a =
          d == e
            ? this.Aa.Rs > 0
              ? Ne.PJa(p.o.pf, Ne.Cwa(d, this.Aa.Rs), d, this.Aa.Rs)
              : "<image>" + p.o.pf + "</image>" + ie.Tr(d)
            : Ne.QJa());
      this.Aa.gF > 0 && (a = this.Pea());
      this.Aa.hF > 0 && (a = this.Pea());
      this.Aa.iF > 0 && (a = this.Pea());
      this.zg.V("");
      a != null && a != ""
        ? (this.zg.R(!0), this.zg.Lc(0.8), this.zg.V(a))
        : this.zg.R(!1);
    }
    Pea() {
      debugger;
      return null;
    }
    lrb() {
      this.Tb.R(!0);
      if (this.rW) this.Tb.V(Y.na("shopMaking"));
      else if (this.Hra) this.Tb.V(Y.na("shopOrder"));
      else if (this.u9 && p.o.tC) {
        var a = this.af != null ? this.af.Si : null;
        if (a != null) {
          a = a.r7a();
          let b = a != null ? a.index : 0;
          a.type == 1
            ? ((a = Y.na("shopUpgrade{img::star}{" + b + "}")),
              (a = Eb.replace(
                a,
                "<image>star</image>",
                "<image s=0.9 y=-0.2>star</image>",
              )),
              this.Tb.V(a))
            : this.Tb.V(Y.na("shopUpgrade{}{" + b + "}"));
        }
      } else (this.Tb.V(""), this.Tb.R(!1));
    }
    Xr() {
      let a = Ma.get();
      a != null &&
        (a.Za.Oja(this.Aa), this.refresh(), this.fPa.$(), a.Za.Eka());
    }
    gMa(a) {
      let b = 0,
        c = this.Cd;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        d.Wg(Cb(a, d.name));
      }
    }
    static Cwa(a, b) {
      return ((Math.trunc(a / (1 + b / 100)) / 10) | 0) * 10;
    }
    static QJa() {
      debugger;
      return null;
    }
    static PJa(a, b, c, d) {
      switch (d) {
        case 20:
          d = y.lTa;
          break;
        case 35:
          d = y.mTa;
          break;
        case 40:
          d = y.nTa;
          break;
        case 50:
          d = y.oTa;
          break;
        case 55:
          d = y.pTa;
          break;
        case 100:
          d = y.kTa;
          break;
        default:
          d = null;
      }
      return (
        "<image s=0.9>" +
        a +
        "</image> " +
        ie.Tr(c) +
        "\n(" +
        ie.Tr(b) +
        " <image s=0.5 y=-0.1>" +
        d +
        "</image>)"
      );
    }
  }
  Ne.g = "45E";
  Ne.u = hf;
  Object.assign(Ne.prototype, { j: Ne });
  class Oe extends O {
    constructor() {
      super();
      this.BA = new V();
      this.B3 = new V();
      this.Xya = !1;
      this.RD = !0;
      this.Aw = new H(0, 0, 0, 1);
      this.Hi = m.l();
      this.scroll = new Gg(500, 800, 0, 30);
      this.scroll.eba(30);
      this.node.appendChild(this.scroll.node);
      this.AT = R.aa(E.get(256), y.uoa, this.scroll.content);
      this.Pa = new Hg();
      this.scroll.content.appendChild(this.Pa.node);
      this.appendChild(this.Pa);
      this.Pa.init(this);
      this.Pa.AK.addListener(w(this, this.Jp));
      this.Pa.JHa.addListener(w(this, this.Uhb));
      this.Qr = new gk();
      this.scroll.content.appendChild(this.Qr.node);
      this.appendChild(this.Qr);
      this.Fn = new ea(E.Na(), this.scroll.content);
      this.Fn.Ia(128);
      this.Fn.rd(!0);
      this.Fn.V("noItems");
      this.Fn.La(Z.sc);
      this.Fn.R(!1);
    }
    RT(a) {
      this.Pa.spacing = a;
      this.Pa.aJ = !0;
    }
    Sn(a) {
      this.scroll.node.C(a.K);
      this.scroll.node.D(a.P);
      this.scroll.ba(a.N - a.K, a.X - a.P, (a.N - a.K) * 0.08);
      this.AT.xc(this.scroll.Lv + 5);
      this.AT.Qb(this.scroll.bz);
      this.Pa.C(4);
      let b = this.scroll.Lv - 8,
        c = this.scroll.bz;
      this.Pa.ba(b, c);
      this.Fn.C(4);
      this.Fn.Fa(b, c);
      this.Fn.ua(b * 0.12);
      this.Fn.Lc(0.6);
      a = (a.N - a.K) * 0.08;
      this.Qr.C(this.scroll.Lv - a * 0.15);
      this.Qr.D(0);
      this.Qr.ba(a, this.scroll.bz);
    }
    EF(a) {
      a != null &&
        (this.GNa(a),
        (this.Hi = a),
        this.Pa.$K(),
        this.Qr.reset(),
        (this.Qr.rr = this.Pa.cells.length));
    }
    zt() {
      return this.Ac != null ? this.Ac.ac : null;
    }
    B() {
      super.B();
      this.B3 = this.BA = null;
    }
    Z(a) {
      super.Z(a);
      this.Qr.tR
        ? this.Qr.G1 && this.Pa.lj(this.Qr.index)
        : this.Qr.PT(this.Pa.hu);
    }
    fnb() {
      this.Ac = null;
      this.Pa.Ac = null;
    }
    Jp(a) {
      this.Ac == null || this.Ac.Zg || this.Ac.yl(0.3);
      this.Ac = a;
      this.Ac != null && (this.Ac.yl(1), this.BA.$(this.Ac.ac));
    }
    Uhb(a) {
      this.B3.$(a);
    }
    OU() {
      let a = this.zt();
      this.GNa(this.Hi);
      this.Pa.$K();
      this.Ac != null && a != null && a != this.Ac.ac && this.Ir(a);
    }
    GNa(a) {
      this.Xya ||
        a.sort(function (b, c) {
          var d = p.o.xa.te(b),
            e = p.o.xa.te(c);
          d = d != null ? d.Ce : b.Ug;
          e = e != null ? e.Ce : c.Ug;
          return d == e ? qb(a.indexOf(b), a.indexOf(c)) : qb(d, e);
        });
    }
    Oja(a) {
      a = a != null ? a : this.zt();
      a != null && Oe.w2.set(Ma.get().Ig, a);
    }
    gnb(a) {
      let b = this.zt();
      b != null && Oe.w2.set(a, b);
    }
    Qsb() {
      let a = this.nqb();
      a ||
        ((a = this.uqb()),
        a ||
          ((a = this.Eka()),
          a || ((a = this.oqb()), a || (a = this.mqb()) || this.Pa.lj(0))));
    }
    mqb() {
      if (Ma.get().Ig != 5) return !1;
      let a = null,
        b = 0,
        c = this.Hi;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (Cb(d.name, "Casket_Gems")) {
          a = d;
          break;
        }
      }
      if (a == null) return !1;
      this.WA(a.name);
      return !0;
    }
    nqb() {
      if (Ma.get().Ig != 5) return !1;
      let a = this.K6a();
      if (a == null) return !1;
      this.WA(a.name);
      return !0;
    }
    uqb() {
      let a = null;
      m.forEach(this.Hi, function (b) {
        b.zj &&
          (a == null || a.pd < b.pd || (a.pd == b.pd && a.oi < b.oi)) &&
          (a = b);
      });
      if (a == null) return !1;
      this.Ir(a);
      return !0;
    }
    Eka() {
      var a = Ma.get();
      if (!X.Xa(Oe.w2, a.Ig)) return !1;
      let b = Oe.w2.get(a.Ig).name;
      a = m.find(this.Hi, function (c) {
        return c.name == b;
      });
      if (a == null) return !1;
      this.Ir(a);
      return !0;
    }
    oqb() {
      let a = m.sD(p.o.xa.items, function (b) {
        return b.Wu;
      });
      return this.pqb(function (b) {
        return (
          m.find(a, function (c) {
            return c.ib != null ? c.ib.name == b.name : !1;
          }) != null
        );
      });
    }
    pqb(a) {
      let b = null,
        c = 0,
        d = this.Hi.length;
      for (; c < d; ) {
        let e = c++;
        if (a(this.Hi[e])) {
          b = this.Hi[e];
          break;
        }
      }
      if (b == null) return !1;
      this.Ir(b);
      return !0;
    }
    Ir(a) {
      var b;
      b == null && (b = 0);
      a != null && this.WA(a.name, b);
    }
    WA(a) {
      if (a != null && a != "") {
        for (var b = null, c = 0, d = this.Hi; c < d.length; ) {
          let e = d[c];
          ++c;
          if (e.name == a) {
            b = e;
            break;
          }
          qd(e.name, a) && (b = e);
        }
        b != null && this.Pa.lj(this.Hi.indexOf(b));
      }
    }
    K6a() {
      let a = null,
        b = null,
        c = null,
        d = 0,
        e = this.Hi;
      for (; d < e.length; ) {
        let f = e[d];
        ++d;
        let g = f.fm(),
          h = f.cBa();
        if (
          g != null &&
          (c == null && (a = c = f),
          g.focus && b == null && (a = b = f),
          h == 1)
        ) {
          a = f;
          break;
        }
      }
      return a;
    }
    W5a(a) {
      debugger;
      let b = 0,
        c = this.Pa.cells;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.ac.name == a) return d;
      }
      return null;
    }
    sA() {
      return this.Hi.length;
    }
    QC(a) {
      if (a < 0 || a >= this.Hi.length) return null;
      let b = new ps();
      b.yl(0.3);
      b.XDa = 0.3;
      b.ow.R(this.RD);
      b.r5(this.Hi[a]);
      b.ba(this.Aw.x, this.Aw.y);
      return b;
    }
  }
  Oe.g = "45F";
  Oe.Rb = [$h];
  Oe.u = O;
  Object.assign(Oe.prototype, { j: Oe });
  class qs extends O {
    constructor() {
      super();
      this.background = R.aa(E.get(250), y.fTa, this.node);
      this.Vn = [
        R.aa(E.get(250), y.iTa, this.node),
        R.aa(E.get(250), y.hTa, this.node),
        R.aa(E.get(250), y.gTa, this.node),
      ];
      this.duration = 0;
      this.p6 = -1;
    }
    init() {
      let a = 0,
        b = this.Vn;
      for (; a < b.length; ) b[a++].zl(vc.lo(Jc.mo, 0));
    }
    ba(a, b) {
      this.node.Th(a / this.background.ea.x);
      this.node.oj(b / this.background.ea.y);
    }
    Lr(a, b) {
      var c;
      c == null && (c = 0);
      if (this.Vn.length > b) {
        let d = this.Vn[b];
        if (c > 0) {
          this.p6 = b;
          this.duration = c;
          debugger;
        } else d.zl(vc.lo(Jc.mo, a));
      }
    }
    Z(a) {
      super.Z(a);
      this.p6 != -1 &&
        ((a = this.fd(this.duration)),
        this.Vn[this.p6].zl(vc.lo(Jc.mo, a)),
        a == 1 && (this.p6 = -1));
    }
  }
  qs.g = "460";
  qs.u = O;
  Object.assign(qs.prototype, { j: qs });
  class gi extends O {
    constructor() {
      super();
      this.rba = "attributes";
      this.attributeName = null;
      this.jG =
        this.Jua =
        this.Hk =
        this.eC =
        this.xH =
        this.L9 =
        this.oO =
        this.FW =
          0;
      this.lra = R.Ed(-65281, 100, 100, this.node);
      this.lra.wa(0);
      this.i$ = new Ea(this.node);
      this.Mb = new ea(E.Na(), this.i$);
      this.Mb.Ia(64);
      this.Mb.La(Z.sc);
      this.jq = new ea(E.Na(), this.i$);
      this.jq.Ia(64);
      this.jq.La(Z.ITa);
      this.BH = this.appendChild(ra.Ya(qs, [].slice()));
      this.fb = new H(0, 0, 0, 1);
    }
    W$a() {
      return this.FW >= 0 && this.oO >= 0
        ? this.oO
        : p.o.bb() * this.L9 + this.Hk;
    }
    init(a, b, c, d, e, f, g) {
      g == null && (g = 1);
      this.Pbb(a, e, f);
      switch (this.rba) {
        case "attributes":
          a = E.get(250);
          e = "" + this.rba + "/" + b;
          Object.prototype.hasOwnProperty.call(
            a.re.mt.v,
            "" + this.rba + "/" + b,
          ) || ((a = E.get(268)), (e = b));
          this.icon = R.aa(a, e, this.node);
          break;
        case "enchantments":
          this.icon = R.aa(E.get(268), b, this.node);
      }
      this.icon.wa(g);
      this.BH.init();
      this.UT(c, d);
    }
    ba(a, b) {
      var c = this.fb;
      c.x = a / 2;
      c.y = b / 2;
      this.lra.lk(a, b);
      this.icon.Df(b);
      this.BH.ba(a - this.icon.ya(), b * 0.4);
      this.BH.C(this.icon.ya());
      var d = this.BH.node.ra();
      this.BH.D(b - d);
      c = a * 0.3;
      d = b - d;
      this.Mb.Fa(c, d);
      this.Mb.ua(b * 0.6);
      this.Mb.C(this.icon.ya() * 1.1);
      this.Mb.D(d * 0.1);
      this.Mb.pk();
      this.jq.Fa(c, d);
      this.jq.C(a * 0.6);
      this.jq.ua(this.Mb.effect.fontSize);
      this.jq.D(this.Mb.qa);
      this.jq.pk();
    }
    UT(a, b) {
      this.dtb(a, b);
      this.vsb(a, b);
    }
    dtb(a, b) {
      this.etb(a);
      this.Mqb(b - a);
      this.i$.R(this.Mb.gg() || this.jq.gg());
    }
    etb(a) {
      this.Mb.R(a > 0);
      a > 0 && ((this.Jua = a), this.Mb.V(ie.Tr(this.Jua)));
    }
    Mqb(a) {
      this.aYa(a);
    }
    aYa(a) {
      this.jG = a;
      this.jq.V(this.jG > 0 ? "(+" + this.jG + ")" : "(" + this.jG + ")");
      this.jq.La(this.jG > 0 ? Z.FTa : Z.RED);
      this.jq.R(this.jG != 0);
    }
    vsb(a, b) {
      b < a
        ? (this.Lr(b, 0), this.Lr(a, 2), this.Lr(b, 1))
        : (this.Lr(a, 0), this.Lr(b, 1), this.Lr(a, 2));
    }
    Pbb(a, b, c) {
      this.attributeName = a;
      c = this.mV = c;
      if (c == null || c == "")
        ((c = v.ho.A5a(a)), (this.mV = c != null ? c.iP : a));
      a = this.mV;
      a == null || a == ""
        ? ((this.oO = this.FW = -1), (this.L9 = 1), (this.Hk = 0))
        : ((a = v.bwa.M5a(this.mV)),
          (c = b ? a.z7a(p.o.bb()) : a.B5a(p.o.bb())),
          c == null && (c = b ? a.A7a() : a.C5a()),
          (this.oO = this.FW = 0),
          c != null &&
            ((this.FW = c.GFa),
            (this.oO = c.aLa),
            (this.L9 = c.NFa),
            (this.Hk = c.shift)),
          (this.xH = a.ek < 0 ? 0 : a.ek),
          (this.eC = a.min < 0 ? 0 : a.min),
          (this.pUa = a.type));
    }
    Lr(a, b) {
      b == null && (b = 0);
      this.BH.Lr(this.s8a(a), b);
    }
    s8a(a) {
      let b = this.W$a(),
        c;
      switch (this.pUa) {
        case "Exp":
          c = Math.pow(2, ((a - b) * this.xH) / v.IP);
          break;
        case "Linear":
          c = Math.pow(a / b, this.xH);
      }
      c < 0 ? (c = 0) : c > 1 && (c = 1);
      return (c = Math.max(c, this.eC));
    }
  }
  gi.g = "461";
  gi.u = O;
  Object.assign(gi.prototype, { j: gi });
  class os extends O {
    constructor() {
      super();
      this.ne = m.l();
    }
    refresh(a, b, c) {
      this.clear();
      this.setParameters(a, b, c);
    }
    ba(a, b) {
      let c = 0,
        d = 0,
        e = this.ne;
      for (; d < e.length; ) {
        let f = e[d];
        ++d;
        f.ba(a, b);
        f.D(c);
        c += f.node.ra();
      }
    }
    clear() {
      let a = 0,
        b = this.ne;
      for (; a < b.length; ) b[a++].B();
      this.ne.length = 0;
    }
    setParameters(a, b, c) {
      let d = new ja(0),
        e = new ja(0),
        f = 0,
        g = v.ho.attributes;
      for (; f < g.length; ) {
        let h = g[f];
        ++f;
        d.G = 0;
        a != null &&
          a.attributes.get(h.name, d) &&
          !h.hidden &&
          ((e.G = d.G),
          b != null && c && b.attributes.get(h.name, e),
          this.yca(h, d.G, e.G));
      }
    }
    yca(a, b, c) {
      let d = this.appendChild(ra.Ya(gi, [].slice()));
      d.init(a.name, a.icon, b, c, !0);
      this.ne.push(d);
    }
  }
  os.g = "462";
  os.u = O;
  Object.assign(os.prototype, { j: os });
  class rs extends hf {
    constructor() {
      super();
      this.Lqa = new Md();
      this.dO = m.l();
      this.qe = this.aX = !1;
      this.zca();
    }
    ba(a, b) {
      super.ba(a, b);
      let c = a * 0.22;
      b = (b - this.dO.length * c) / this.dO.length + 1;
      let d = 0,
        e = 0,
        f = this.dO;
      for (; e < f.length; ) {
        let g = f[e];
        ++e;
        g.ba(a, c);
        g.D(d);
        d += c;
        d += b;
      }
    }
    B() {
      super.B();
    }
    DS() {
      super.DS();
      this.aX && this.f3();
    }
    CS() {
      super.CS();
    }
    yS() {
      super.yS();
      this.aX && this.f3();
      this.qe = !0;
    }
    zK() {
      super.zK();
      this.qe = !1;
    }
    zca() {
      this.mH = new xc(p.o.Ca);
      this.mH.Hm();
      let a = 0,
        b = v.ho.attributes;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        c.hidden || c.Ula || this.yca(c);
      }
    }
    yca(a) {
      let b = this.appendChild(ra.Ya(gi, [].slice())),
        c = new ja(0);
      this.mH.attributes.get(a.name, c);
      b.Kd("ParameterScrollItem(" + a.name + ")");
      b.init(a.name, a.icon, c.G, c.G, !1);
      this.dO.push(b);
    }
    f3() {
      this.yw || this.kr ? this.N4a() : (this.Jx(), (this.aX = !0));
    }
    zfb(a) {
      this.ib = a;
      this.f3();
    }
    Jx() {
      let a = p.o.Ca;
      a.Am(this.Lqa);
      this.mH.qD(this.Lqa);
      this.ib != null && this.mH.ik(this.ib.type, this.ib);
      a.Hm();
      this.mH.Hm();
    }
    N4a() {
      this.aX = !1;
      this.Jx();
      let a = p.o.Ca,
        b = 0,
        c = this.dO;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        let e = new ja(0),
          f = new ja(0);
        a.attributes.get(d.attributeName, e);
        this.mH.attributes.get(d.attributeName, f);
        d.UT(e.G, f.G);
      }
    }
  }
  rs.g = "463";
  rs.u = hf;
  Object.assign(rs.prototype, { j: rs });
  class hi extends O {
    constructor() {
      super();
      this.Oa = m.l();
      this.uia = new V();
    }
    B() {
      this.clear();
      super.B();
    }
    Y(a) {
      let b = 0,
        c = this.Oa;
      for (; b < c.length; ) c[b++].Y(a);
      return super.Y(a);
    }
    clear() {
      let a = 0,
        b = this.Oa;
      for (; a < b.length; ) b[a++].B();
      this.Oa.length = 0;
    }
    ba(a, b) {
      if (this.Oa.length != 0) {
        var c = this.Oa[0].icon.ea.y;
        this.C(a / 2);
        this.D(b / 2);
        for (var d = 0, e = 0, f = this.Oa; e < f.length; ) {
          let g = f[e];
          ++e;
          g.C(d);
          g.la((b / c) * 1.3);
          d += g.node.ya();
        }
        this.C((a - this.node.ya()) / 2);
        this.C(this.node.za + this.Oa[0].node.ya() / 2);
      }
    }
    x5(a) {
      this.clear();
      if (a != null && a.length != 0) {
        a = m.Ib(a);
        a.sort(function (d, e) {
          return -qb(d.Yh, e.Yh);
        });
        for (var b = a.length, c = 0; c < a.length; ) this.CI(a[c++], b);
      }
    }
    CI(a) {
      let b = this.appendChild(ra.Ya(ek, [].slice()));
      b.M5(a);
      b.oa.addListener(w(this, this.fhb));
      this.Oa.push(b);
    }
    Nvb(a) {
      var b, c;
      c == null && (c = !1);
      b == null && (b = !1);
      if (this.active) {
        var d = a.node.Dm();
        this.qNa(a.Nc, d, a.icon.L, b, c);
      }
    }
    fhb(a) {
      this.Nvb(a);
    }
    qNa(a, b, c, d, e) {
      e == null && (e = !1);
      d == null && (d = !1);
      if (p.items.GR.YEa(a)) {
        let f = new ur();
        f.xPa(a);
        a = f.position;
        a.x = b.x;
        a.y = b.y;
        f.offset.y = 20;
        f.sender = c;
        f.rha = d;
        b = nd.F().W5(f);
        this.uia.$(b, e);
      }
    }
  }
  hi.g = "464";
  hi.u = O;
  Object.assign(hi.prototype, { j: hi });
  class ss extends hf {
    constructor() {
      super();
      m.l();
      this.VW = 0;
      this.Rgb = new V();
      this.Pgb = new V();
      this.Hgb = new V();
      this.Khb = new V();
      this.Mhb = new V();
      this.S8 = this.RN = !1;
    }
    Or(a) {
      this.ib = a;
      this.dS();
    }
    DS() {
      super.DS();
      this.RN && this.dS();
    }
    CS() {
      super.CS();
    }
    yS() {
      super.yS();
      this.RN && this.dS();
    }
    zK() {
      super.zK();
    }
    Sba() {
      return this.S8 || this.kr ? !0 : this.yw;
    }
    init() {
      this.RK = this.appendChild(ra.Ya(ts, [].slice()));
      this.U3a = new Eg();
      this.Xc = new ea(E.Na(), this.node);
      this.Xc.Ia(2);
      this.Xc.V(Y.na("shopEnchantments"));
      this.Xc.La(Z.sc);
      this.vy = new ea(E.Na(), this.node);
      this.vy.La(Oa.dd(3289650));
      this.vy.Ia(128);
      this.vy.V(Y.na("shopNoEnchantments"));
      this.S8 = !0;
      this.dS();
      this.S8 = !1;
    }
    ba(a, b) {
      super.ba(a, b);
      let c = b * 0.1;
      this.Xc.D(c);
      let d = a * 0.2;
      this.Xc.ua(d);
      this.Xc.Fa(a, d);
      this.Xc.gDa() && this.Xc.Uk();
      this.vy.Fa(a, b);
      this.vy.ua(d);
      this.RK.D(c + d * 1.5);
      this.RK.ba(a, b);
    }
    dS() {
      this.yfb();
      this.xfb();
      this.aHa();
      this.jn();
    }
    yfb() {
      if (this.Sba())
        if (this.ib == null) (this.RK.Y(!1), this.vy.R(!0));
        else {
          var a = p.GD(this.ib);
          a.length == 0
            ? (this.RK.Y(!1), this.vy.R(!0))
            : (this.RK.x5(a), this.RK.Y(!0), this.vy.R(!1));
        }
      else this.RN = !0;
    }
    xfb() {
      this.Sba() || (this.RN = !0);
    }
    aHa() {
      this.Sba() || (this.RN = !0);
    }
  }
  ss.g = "465";
  ss.u = hf;
  Object.assign(ss.prototype, { j: ss });
  class ts extends hi {
    constructor() {
      super();
      this.ne = m.l();
    }
    clear() {
      let a = 0,
        b = this.ne;
      for (; a < b.length; ) b[a++].B();
      this.ne.length = 0;
    }
    ba(a, b) {
      super.ba(a, b);
      let c = (b = 0),
        d = this.ne;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        e.ba(a, a * 0.22);
        e.D(b);
        b += e.node.ra();
      }
    }
    Z(a) {
      super.Z(a);
      if (L.J.ed().Eb(0)) {
        a = 0;
        let b = this.ne;
        for (; a < b.length; ) {
          let c = b[a];
          ++a;
          if (c.Bd()) {
            let d = c.node.Dm(c.fb);
            this.qNa(c.nb, d, c.icon.L);
          }
        }
      }
    }
    CI(a) {
      let b = this.appendChild(ra.Ya(gi, [].slice()));
      b.nb = a;
      let c = 1;
      a.Yh != 0 || v.$z(a) || (c = 0.5);
      b.init("", Ye.Kza(a), a.oM, a.oM, !1, a.iP, c);
      this.ne.push(b);
    }
  }
  ts.g = "466";
  ts.u = hi;
  Object.assign(ts.prototype, { j: ts });
  class us extends Fg {
    constructor() {
      function a(d, e, f, g) {
        e = c.pP.appendChild(new Le(E.get(250), e, f, g));
        e.ee = d;
        d = e.badge;
        d.C(d.node.za - 13);
        d = e.badge;
        d.D(d.node.qa - 12);
        e.badge.ba(65);
        c.buttons.push(e);
      }
      super();
      let b = !0;
      b = ya.hasFeature("iap");
      this.Xw = [0, 1, 2, 3, 4];
      b && this.Xw.push(5);
      let c = this;
      a(0, y.cTa, y.eTa, y.dTa);
      a(1, y.LSa, y.NSa, y.MSa);
      a(2, y.RSa, y.TSa, y.SSa);
      a(3, y.$Sa, y.bTa, y.aTa);
      a(4, y.USa, y.WSa, y.VSa);
      b && a(5, y.XSa, y.ZSa, y.YSa);
      L.J.ika && (this.Xw.push(7), a(7, y.OSa, y.QSa, y.PSa));
      this.init();
    }
    oa(a) {
      super.oa(a);
      Ma.get().o5(a);
    }
    getCounterValue(a) {
      return p.items.m6a(Dj.Vxb(a));
    }
    ILa(a) {
      a = Dj.u6(a);
      this.HAa(a).oa.$(a);
    }
  }
  us.g = "467";
  us.u = Fg;
  Object.assign(us.prototype, { j: us });
