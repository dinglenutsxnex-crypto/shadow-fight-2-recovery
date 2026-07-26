// 042-combat-system.js
// Domain: physics  |  52 class(es)  |  tree root(s): wv, S, xv, yv, Ay, Zo, zv, hd, yh, By, vg, Jj, pg, Bv, Bl, cp, ue, Cv, zh, ih, Dv, Ie, td
// Edit here. Run `npm run build` to reassemble the full bundle.
  class wv {
    constructor() {
      this.actions = new Yb();
      this.value = null;
    }
  }
  wv.g = "20B";
  Object.assign(wv.prototype, { j: wv });
  class sg extends S {
    constructor() {
      super();
      this.iq = new Yb();
      this.no = new Yb();
      this.uC = this.Mb = this.Ba = this.uc = "";
    }
    ab() {
      return ba.fg(this.ta, this.Ba);
    }
    qp() {
      return ba.fg(this.ta, this.uc);
    }
    PD() {
      return ba.o9a(this.ta, this.Mb);
    }
    parse(a) {
      super.parse(a);
      var b = a.attributes.get("Type");
      this.uc = b != null ? b : "";
      b = a.attributes.get("Name");
      this.Ba = b != null ? b : "";
      b = a.attributes.get("Value");
      this.Mb = b != null ? b : "";
      b = a.attributes.get("Sound");
      this.uC = b != null ? b : "";
      b = a.A("Success");
      a = a.A("Error");
      this.Ss(b, this.iq, w(this, this.hf));
      this.Ss(a, this.no, w(this, this.hf));
    }
    S(a) {
      this.Ie();
      super.S(a);
      let b = this.qp(),
        c = this.ab(),
        d = this.PD();
      p.o.gga(b, c, d)
        ? (sg.c1a(b, c, d),
          this.iq.S(a),
          (a = this.uC),
          a != null && a != "" && ua.bk(this.uC, null, 1))
        : this.no.S(a);
    }
    hf() {
      this.sa();
    }
    Ie() {
      this.iq.Vg();
      this.no.Vg();
    }
    static c1a(a, b, c) {
      let d = p.o;
      switch (a) {
        case "Bonus":
          d.xl(d.gd - c, 6);
          break;
        case "Currency":
          debugger;
          d.ZH(b, -c);
          break;
        case "Gold":
          d.Kr(d.Ob - c);
          break;
        default:
          if (a != "") {
            debugger;
            d.ZH(a, -c);
          }
      }
    }
  }
  sg.g = "20C";
  sg.u = S;
  Object.assign(sg.prototype, { j: sg });
  class Lo extends S {
    constructor() {
      super();
      this.Ms = !1;
      this.Ba = null;
    }
    parse(a) {
      super.parse(a);
      var b = a.attributes.get("Toggle");
      b = b != null ? b : "";
      this.Ms = b == "on" || b == "On";
      a = a.attributes.get("Name");
      this.Ba = a != null ? a : "";
    }
    S(a) {
      super.S(a);
      var b = new ib();
      b.clear();
      b.mj(ba.Rc(a, this.Ba));
      a = p.Wk(b);
      a != null &&
        a.ob != null &&
        ((b = !this.Ms),
        b != a.ob.ni() &&
          (a.ob.kx(b), (b = Ya.get()), b != null && b.Gma(a), p.o.save()));
      this.sa();
    }
  }
  Lo.g = "20D";
  Lo.u = S;
  Object.assign(Lo.prototype, { j: Lo });
  class Mo extends S {
    constructor() {
      super();
      this.Xra = this.Ms = null;
    }
    parse(a) {
      super.parse(a);
      let b = a.attributes.get("Toggle");
      this.Ms = b != null ? b : "on";
      a = a.attributes.get("Label");
      this.Xra = a != null ? a : "";
    }
    S(a) {
      super.S(a);
      p.xMa(ba.Rc(a, this.Xra), ba.Rc(a, this.Ms) == "on");
      this.sa();
    }
  }
  Mo.g = "20E";
  Mo.u = S;
  Object.assign(Mo.prototype, { j: Mo });
  class Bj extends S {
    constructor(a) {
      super();
      this.Ms = a;
      this.zra = this.Yra = !1;
      this.Zoa = this.H$ = this.Ba = this.LG = "";
    }
    parse(a) {
      super.parse(a);
      this.Yra = u.ka(a.attributes.get("Locked"), !1);
      var b = a.attributes.get("Name");
      this.Ba = b != null ? b : "";
      this.zra = u.ka(a.attributes.get("Instant"), !1);
      b = a.attributes.get("Hidden");
      this.LG = b != null ? b : "0";
      b = a.attributes.get("ReplayCount");
      this.H$ = b != null ? b : "";
      a = a.attributes.get("AllEqualBattles");
      this.Zoa = a != null ? a : "0";
    }
    S(a) {
      super.S(a);
      var b = new yb();
      b.kk(a);
      var c = new oc();
      b.fc(this.Ba, c);
      var d = new oc(),
        e = this.H$;
      e != null && e != "" && b.fc(this.H$, d);
      d = d.Je | 0;
      e = new oc();
      b.fc(this.LG, e);
      e = ic.cA(e.Je, 1, 0.01);
      b = new ib();
      b.clear();
      b.mj(c.Rh);
      p.o.Saa(b, !0, this.Ms, this.Yra, e, d);
      p.o.save();
      p.F().Lx();
      d = p.LD(b.Ne);
      c = p.ZY.t1(d);
      e = d != null ? d.DQ(b.Se) : null;
      e != null && (e.isActive = this.Ms);
      if (ba.dw(a, this.Zoa) && d != null)
        for (a = 0, e = d.Fg; a < e.length; ) {
          let f = e[a];
          ++a;
          f.name == b.Se && (f.isActive = this.Ms);
        }
      a = p.ZY.t1(d);
      d = Ya.get();
      d != null &&
        (((!c && a) || (c && !a)) && d.qKa(), d.Qaa(b, this.Ms, !1, this.zra));
      this.sa();
    }
  }
  Bj.g = "20F";
  Bj.u = S;
  Object.assign(Bj.prototype, { j: Bj });
  class Oo extends S {
    constructor() {
      super();
    }
    parse(a) {
      super.parse(a);
      a.attributes.get("Name");
    }
    S(a) {
      debugger;
      super.S(a);
      this.sa();
    }
  }
  Oo.g = "210";
  Oo.u = S;
  Object.assign(Oo.prototype, { j: Oo });
  class Po extends S {
    constructor() {
      super();
      this.vaa = "INIT";
      this.WO = "";
      this.G$ = !0;
    }
    parse(a) {
      debugger;
      super.parse(a);
      var b = a.attributes.get("Trigger");
      this.vaa = b != null ? b : null;
      b = a.attributes.get("Zone");
      this.WO = b != null ? b : "";
      this.G$ = u.ka(a.attributes.get("RefreshTutorialBattle"), !0);
    }
    S(a) {
      debugger;
      super.S(a);
      this.vaa == "FIGHT"
        ? ((a = p.LD(ba.fg(a, this.WO))),
          a != null && p.ZY.Lzb(a, this.vaa, this.G$))
        : p.ZY.Eyb(this.G$);
      this.sa();
    }
  }
  Po.g = "211";
  Po.u = S;
  Object.assign(Po.prototype, { j: Po });
  class Qo extends S {
    constructor() {
      super();
    }
    S(a) {
      debugger;
      super.S(a);
      this.sa();
    }
  }
  Qo.g = "212";
  Qo.u = S;
  Object.assign(Qo.prototype, { j: Qo });
  class Ro extends S {
    constructor() {
      super();
    }
    S(a) {
      debugger;
      super.S(a);
      xa.F().reload();
      this.sa();
    }
  }
  Ro.g = "213";
  Ro.u = S;
  Object.assign(Ro.prototype, { j: Ro });
  class So extends S {
    constructor() {
      super();
    }
    S(a) {
      debugger;
      super.S(a);
      a = Ma.get();
      a != null && (a.refresh(), a.I6());
      this.sa();
    }
  }
  So.g = "214";
  So.u = S;
  Object.assign(So.prototype, { j: So });
  class To extends S {
    constructor() {
      super();
    }
    S(a) {
      super.S(a);
      a = Ma.get();
      a != null && a.dnb();
      this.sa();
    }
  }
  To.g = "215";
  To.u = S;
  Object.assign(To.prototype, { j: To });
  class Co extends S {
    constructor() {
      super();
    }
    S(a) {
      super.S(a);
      p.o.Oub();
      a = Ma.get();
      a != null && a.refresh();
      this.sa();
    }
  }
  Co.g = "216";
  Co.u = S;
  Object.assign(Co.prototype, { j: Co });
  class Uo extends S {
    constructor() {
      super();
    }
    S(a) {
      super.S(a);
      we.F().RU(new qg(!0));
      this.sa();
    }
  }
  Uo.g = "217";
  Uo.u = S;
  Object.assign(Uo.prototype, { j: Uo });
  class xo extends S {
    constructor() {
      super();
      this.Mb = this.Ba = "";
      this.IH = 0;
    }
    parse(a) {
      super.parse(a);
      var b = a.attributes.get("Name");
      this.Ba = b != null ? b : "";
      b = a.attributes.get("Value");
      this.Mb = b != null ? b : "";
      a = a.attributes.get("Scope");
      if (a != null)
        switch (a) {
          case "Global":
            this.IH = 1;
            break;
          case "Local":
            this.IH = 2;
            break;
          case "Users":
            this.IH = 0;
        }
      else this.IH = 0;
    }
    S(a) {
      super.S(a);
      this.fqb(a);
      this.sa();
    }
    fqb(a) {
      p.o.$A(ba.Rc(a, this.Ba), ba.fg(a, this.Mb), this.IH);
      this.IH == 0 && p.o.save();
    }
  }
  xo.g = "218";
  xo.u = S;
  Object.assign(xo.prototype, { j: xo });
  class Vo extends S {
    constructor() {
      super();
      this.dqa = this.jc = null;
      this.ara = this.hc = 0;
      this.l8 = !1;
    }
    parse(a) {
      super.parse(a);
      let b = a.attributes.get("Frames");
      this.jc = b != null ? b : "0";
      a = a.attributes.get("ControlsLock");
      this.dqa = a != null ? a : "0";
    }
    S(a) {
      this.Ie();
      super.S(a);
      this.ara = ba.iCa(a, this.jc);
      if ((this.l8 = ba.dw(a, this.dqa)))
        (Sb.F().mk(!0), (a = Za.Hb), a != null && (a.enabled = !1));
      L.J.Qh.ei(w(this, this.ur));
    }
    ur() {
      this.hc++;
      this.hc >= this.ara && this.stop();
    }
    stop() {
      L.J.Qh.detach(w(this, this.ur));
      if (this.l8) {
        let a = Za.Hb;
        a != null && (a.enabled = !0);
        Sb.F().mk(!1);
      }
      this.sa();
    }
    Ie() {
      super.Ie();
      this.hc = 0;
    }
  }
  Vo.g = "219";
  Vo.u = S;
  Object.assign(Vo.prototype, { j: Vo });
  class Gn extends S {
    constructor() {
      super();
    }
    S(a) {
      debugger;
      super.S(a);
      Sb.F().mk(!0);
      this.sa();
    }
  }
  Gn.g = "21A";
  Gn.u = S;
  Object.assign(Gn.prototype, { j: Gn });
  class Rn extends S {
    constructor() {
      super();
      this.zk =
        this.nra =
        this.tpa =
        this.spa =
        this.rpa =
        this.Eua =
        this.Bua =
        this.tua =
          null;
      this.j9 = this.Caa = this.Baa = !1;
      this.S$ = null;
    }
    parse(a) {
      super.parse(a);
      var b = a.attributes.get("Target");
      this.tua = b != null ? b : "";
      b = a.attributes.get("UseArrow");
      this.Bua = b != null ? b : "0";
      b = a.attributes.get("UseFlashing");
      this.Eua = b != null ? b : "0";
      b = a.attributes.get("ArrowOffsetX");
      this.rpa = b != null ? b : "0";
      b = a.attributes.get("ArrowOffsetY");
      this.spa = b != null ? b : "0";
      b = a.attributes.get("ArrowRotation");
      this.tpa = b != null ? b : "0";
      a = a.attributes.get("IgnoreCallback");
      this.nra = a != null ? a : "0";
    }
    S(a) {
      super.S(a);
      this.zk = this.i6a(ba.Rc(a, this.tua), $a);
      this.zk == null
        ? this.sa()
        : ((this.Baa = ba.dw(a, this.Bua)),
          (this.Caa = ba.dw(a, this.Eua)),
          (this.j9 = ba.dw(a, this.nra)),
          Sb.F().mk(!0),
          this.Baa &&
            he.show(
              this.zk.target,
              new H(ba.Oj(a, this.rpa), ba.Oj(a, this.spa), 0, 1),
              ba.Oj(a, this.tpa),
            ),
          this.Caa && this.zk instanceof $a && this.zk.Wg(!0),
          (this.zk.vk = !0),
          this.j9 && ((this.S$ = this.zk.oa.pi.slice()), this.zk.oa.clear()),
          this.zk.oa.addListener(w(this, this.Rg)));
    }
    Rg() {
      this.Baa && he.rn();
      this.Caa && this.zk instanceof $a && this.zk.Wg(!1);
      this.zk.vk = !1;
      this.zk.oa.removeListener(w(this, this.Rg));
      this.j9 && ((this.zk.oa.pi = this.S$), (this.S$ = null));
      this.zk = null;
      Sb.F().mk(!1);
      this.sa();
    }
  }
  Rn.g = "21B";
  Rn.u = S;
  Object.assign(Rn.prototype, { j: Rn });
  class io extends S {
    constructor() {
      super();
      this.Ipa = "";
      this.xua = this.Hs = null;
    }
    parse(a) {
      super.parse(a);
      a = a.attributes.get("BtnName");
      this.Ipa = a != null ? a : "";
    }
    S(a) {
      super.S(a);
      this.g4a();
    }
    g4a() {
      za.instance.Gxa();
      Sb.F().mk(!0);
      let a = za.instance.scroll.button;
      a.vk = !0;
      if (L.J.hi && L.J.kU) {
        let b = za.instance.Ej;
        b.vk = !0;
        b.oa.addListener(w(this, this.BS));
      }
      he.show(a.target, new H(0, -125, 0, 1));
      za.instance.scroll.zS.addListener(w(this, this.oia));
      za.instance.scroll.D3.addListener(w(this, this.nia));
    }
    BS() {
      let a = za.instance.Ej;
      a.oa.removeListener(w(this, this.BS));
      a.vk = !1;
      this.oia(1);
      this.nia();
      this.lIa(null);
    }
    oia() {
      za.instance.scroll.zS.removeListener(w(this, this.oia));
      he.rn();
    }
    nia() {
      za.instance.scroll.D3.removeListener(w(this, this.nia));
      Ib.Hxa();
      za.instance.scroll.button.vk = !1;
      let a = Bn.AOa(ba.Rc(this.ta, this.Ipa));
      this.Hs = za.instance.R5a(a);
      this.Hs.Wg(!0);
      this.xua = this.Hs.oa;
      this.Hs.oa = new V();
      this.Hs.oa.addListener(w(this, this.lIa));
      this.Hs.vk = !0;
    }
    lIa() {
      Sb.F().mk(!1);
      this.Hs.oa = this.xua;
      this.Hs.Wg(!1);
      this.Hs.vk = !1;
      this.sa();
      this.Hs.oa.$(null);
    }
  }
  io.g = "21C";
  io.u = S;
  Object.assign(io.prototype, { j: io });
  class wo extends S {
    constructor() {
      super();
      this.ZNa = null;
    }
    parse(a) {
      super.parse(a);
      a = a.attributes.get("Value");
      this.ZNa = a != null ? a : "";
    }
    S(a) {
      super.S(a);
      p.o.Bi.dNa(this.ZNa);
      this.sa();
    }
  }
  wo.g = "21D";
  wo.u = S;
  Object.assign(wo.prototype, { j: wo });
  class Eo extends S {
    constructor() {
      super();
    }
    S() {
      var a = v.xu.Zca;
      p.o.xa.Rj(a) != null && this.sa();
      Sb.F().mk(!0);
      let b = Ma.get();
      b.Dka(0, a);
      a = b.ac.content.ZV;
      a.Wg(!0);
      a.oa.clear();
      a.oa.addListener(w(this, this.Rg));
      a.vk = !0;
      L.J.hi &&
        L.J.kU &&
        ((a = za.instance.Ej), (a.vk = !0), a.oa.addListener(w(this, this.BS)));
    }
    BS() {
      let a = za.instance.Ej;
      a.vk = !1;
      a.oa.removeListener(w(this, this.BS));
      this.Rg(null);
    }
    Rg() {
      Sb.F().mk(!1);
      let a = Ma.get();
      var b = a.ac.content.ZV;
      b.Wg(!1);
      b.oa.removeListener(w(this, this.Rg));
      b.vk = !1;
      b = p.items.$b(v.xu.Zca);
      b != null && (Pa.wwa(b) && p.o.xa.cp(b, !0), a.ac.content.Xr());
      this.sa();
    }
  }
  Eo.g = "21E";
  Eo.u = S;
  Object.assign(Eo.prototype, { j: Eo });
  class Fo extends S {
    constructor() {
      super();
      this.G9 = !1;
      this.Pi = null;
    }
    S(a) {
      super.S(a);
      za.instance != null ? za.instance.bB(!1) : new za().bB(!1);
      this.qJ() &&
        (Za.F().uh.q5(!0),
        (a = Za.F().ug.gh),
        a.Ym(E.get(270), y.e7),
        a.Wg(!0),
        ca.Ka().Ra[0].Sf.addListener(w(this, this.Sf)));
      this.Pi = new Re(w(this, this.Em), v.xu.h_);
      p.o.Bi.RE.addListener(w(this, this.Em));
    }
    Sf(a) {
      this.G9 && ((this.G9 = !1), this.Em());
      a.data.name == "DoubleSweep" && (this.G9 = !0);
    }
    Em() {
      p.o.Bi.RE.removeListener(w(this, this.Em));
      this.Pi.abort();
      za.instance.bB(!0);
      this.qJ() &&
        (Za.F().uh.q5(!1),
        Za.F().ug.gh.Wg(!1),
        ca.Ka().Ra[0].Sf.removeListener(w(this, this.Sf)));
      p.o.Bi.vW || this.sa();
    }
  }
  Fo.g = "21F";
  Fo.u = S;
  Object.assign(Fo.prototype, { j: Fo });
  class Go extends S {
    constructor() {
      super();
    }
    S(a) {
      super.S(a);
      Sb.F().mk(!0);
      a = vb.get();
      a == null
        ? this.sa()
        : (a.xF(0, "PERK_DOUBLE_SWEEP"),
          (a = a.Er.nDa()),
          a.Wg(!0),
          (a.vk = !0),
          a.oa.addListener(w(this, this.Rg)));
    }
    Rg() {
      Sb.F().mk(!1);
      let a = vb.get().Er.nDa();
      a.Wg(!1);
      pz.A2a(a);
      a.oa.removeListener(w(this, this.Rg));
      this.sa();
    }
  }
  Go.g = "220";
  Go.u = S;
  Object.assign(Go.prototype, { j: Go });
  class Ho extends S {
    constructor() {
      super();
      this.rsa = 0;
      this.pVa = 3;
      this.I9 = !1;
      this.Pi = null;
    }
    S(a) {
      super.S(a);
      za.instance.bB(!1);
      this.qJ() &&
        (Za.F().uh.q5(!0), ca.Ka().Ra[0].Sf.addListener(w(this, this.Sf)));
      this.Pi = new Re(w(this, this.Em), v.xu.h_);
      p.o.Bi.RE.addListener(w(this, this.Em));
    }
    Sf() {
      this.I9 &&
        ((this.I9 = !1), this.rsa++, this.rsa >= this.pVa && this.Em());
      ca.Ka().Ra[0].GY == "EAnimationMove" && (this.I9 = !0);
    }
    Em() {
      p.o.Bi.RE.removeListener(w(this, this.Em));
      this.Pi.abort();
      za.instance.bB(!0);
      this.qJ() &&
        (Za.F().uh.q5(!1), ca.Ka().Ra[0].Sf.removeListener(w(this, this.Sf)));
      p.o.Bi.vW || this.sa();
    }
  }
  Ho.g = "221";
  Ho.u = S;
  Object.assign(Ho.prototype, { j: Ho });
  class Io extends S {
    constructor() {
      super();
      this.Ora = 0;
      this.oVa = 3;
      this.H9 = !1;
      this.Pi = null;
    }
    S(a) {
      super.S(a);
      za.instance.bB(!1);
      this.qJ() &&
        ((a = Za.F().ug.Ui),
        a.Ym(E.get(270), y.e7),
        a.Wg(!0),
        (a = Za.F().ug.gh),
        a.Ym(E.get(270), y.e7),
        a.Wg(!0),
        ca.Ka().Ra[0].Sf.addListener(w(this, this.Sf)));
      this.Pi = new Re(w(this, this.Em), v.xu.h_);
      p.o.Bi.RE.addListener(w(this, this.Em));
    }
    Sf() {
      this.H9 &&
        ((this.H9 = !1), this.Ora++, this.Ora >= this.oVa && this.Em());
      ca.Ka().Ra[0].GY == "EAnimationAttack" && (this.H9 = !0);
    }
    Em() {
      p.o.Bi.RE.removeListener(w(this, this.Em));
      this.Pi.abort();
      za.instance.bB(!0);
      this.qJ() &&
        (Za.F().ug.Ui.Wg(!1),
        Za.F().ug.gh.Wg(!1),
        ca.Ka().Ra[0].Sf.removeListener(w(this, this.Sf)));
      p.o.Bi.vW || this.sa();
    }
  }
  Io.g = "222";
  Io.u = S;
  Object.assign(Io.prototype, { j: Io });
  class Jo extends S {
    constructor() {
      super();
    }
    S(a) {
      super.S(a);
      a = vb.get();
      if (a == null) this.sa();
      else {
        Sb.F().mk(!0);
        var b = v.AQ();
        b.sort(function (c, d) {
          return qb(c.E4, d.E4);
        });
        a.xF(1, b[0].dr.name);
        a = a.Er.pDa();
        a != null
          ? (a.Wg(!0), (a.vk = !0), a.oa.addListener(w(this, this.AIa)))
          : this.Qxa();
      }
    }
    AIa() {
      var a = vb.get();
      a.Ad.ng.addListener(w(this, this.DHa));
      a = a.Er.pDa();
      a.Wg(!1);
      a.vk = !1;
      a.oa.removeListener(w(this, this.AIa));
    }
    DHa() {
      vb.get().Ad.ng.removeListener(w(this, this.DHa));
      this.Qxa();
    }
    Qxa() {
      Sb.F().mk(!1);
      this.sa();
    }
  }
  Jo.g = "223";
  Jo.u = S;
  Object.assign(Jo.prototype, { j: Jo });
  class No extends S {
    constructor() {
      super();
    }
    S(a) {
      debugger;
      super.S(a);
      Sb.F().mk(!1);
      this.sa();
    }
  }
  No.g = "224";
  No.u = S;
  Object.assign(No.prototype, { j: No });
  class xv {
    constructor(a, b, c) {
      this.id = a;
      this.Eg = b;
      this.name = c;
    }
  }
  xv.g = "225";
  Object.assign(xv.prototype, { j: xv });
  class yv {
    constructor() {
      this.Kca = new Map();
    }
    reset() {
      X.clear(this.Kca);
    }
    SWa(a) {
      this.Kca.set(a.id, a);
    }
    TWa(a, b, c) {
      this.SWa(new xv(a, b, c));
    }
    s6a(a) {
      let b = new Ia();
      if (!X.wh(this.Kca, a, b)) throw 35;
      return b.G;
    }
  }
  yv.g = "226";
  Object.assign(yv.prototype, { j: yv });
  class Ay {}
  Ay.g = "227";
  Ay.Ei = !0;
  class Zo {}
  Zo.g = "228";
  Zo.Ei = !0;
  Object.assign(Zo.prototype, { j: Zo });
  class zv {}
  zv.g = "229";
  zv.Ei = !0;
  zv.Rb = [Ay, Zo];
  class hd {
    constructor() {
      this.Qk = new yv();
      this.vja = new $o();
      this.wm = new ap();
      this.Gfb = new bp();
    }
    fyb() {
      this.eyb(Ja.mi(1318));
    }
    eyb(a) {
      this.meb(a);
      this.heb(a);
    }
    E8a(a) {
      if (a == null) return null;
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        let c = a[b++];
        if (c.attributes.get("PlatformID") == "3") return c;
      }
      return null;
    }
    F8a(a) {
      if (a == null) return null;
      let b = [];
      a = a.children;
      let c = 0;
      for (; c < a.length; ) {
        let d = a[c++];
        d.attributes.get("PlatformID") == "3" && b.push(d);
      }
      return b;
    }
    heb(a) {
      this.wm.clear();
      this.OS(a.A("packs"));
      this.OS(a.A("video"));
    }
    OS(a) {
      if (a != null) {
        var b = new Map();
        for (a = Qe(this.F8a(a)); a.yd(); ) {
          var c = a.next(),
            d = c.attributes.get("Name");
          d = d != null ? d : "";
          var e = new Ia();
          X.wh(b, d, e) || ((e.G = m.l()), b.set(d, e.G));
          e.G.push(c);
        }
        b = b.entries();
        for (a = b.next(); !a.done; ) {
          c = a.value;
          a = b.next();
          d = c[1][0];
          e = d.attributes.get("Url");
          let f = d.attributes.get("Hash");
          this.wm.add(
            c[0],
            e != null ? e : null,
            u.I(d.attributes.get("Size")),
            u.ka(d.attributes.get("Reload")),
            f != null ? f : null,
            u.ka(d.attributes.get("Attach")),
          );
        }
      }
    }
    meb(a) {
      this.kkb(a.A("platform"));
      a.A("settings");
      this.ckb(a.A("news"));
      this.mkb(a.A("price"));
      this.Tia(a.A("currency"));
    }
    mkb(a) {
      a != null && a.children.length != 0 && this.vja.clear();
    }
    Tia(a) {
      if (a != null) {
        this.Qk.reset();
        a = a.children;
        for (var b = 0; b < a.length; ) {
          let c = a[b++],
            d = c.attributes.get("Alias"),
            e = c.attributes.get("Name");
          this.Qk.TWa(
            u.I(c.attributes.get("ID")),
            d != null ? d : null,
            e != null ? e : null,
          );
        }
      }
    }
    kkb(a) {
      if (
        a != null &&
        ((a = this.E8a(a)),
        a != null
          ? ((a = a.attributes.get("Name")), (a = a != null ? a : null))
          : (a = null),
        a == null || lc(a))
      )
        throw 36;
    }
    ckb() {
      this.Gfb.reset();
    }
    static F() {
      let a = hd.Hb;
      return a != null ? a : (hd.Hb = new hd());
    }
  }
  hd.g = "22A";
  hd.Rb = [zv];
  Object.assign(hd.prototype, { j: hd });
  class yh {
    constructor() {}
  }
  yh.g = "22B";
  Object.assign(yh.prototype, { j: yh });
  class Ij extends yh {
    constructor() {
      super();
      this.NUa = m.l();
      this.Xab = m.l();
    }
    reset() {
      this.Xab.length = 0;
      this.NUa.length = 0;
    }
  }
  Ij.g = "22C";
  Ij.u = yh;
  Object.assign(Ij.prototype, { j: Ij });
  class By {}
  By.g = "22D";
  By.Ei = !0;
  class vg {
    constructor() {
      this.zV = new Map();
    }
    Ro(a) {
      return X.IOa(this.zV, a.name, a) ? !0 : !1;
    }
    NQ(a) {
      return this.zV.get(a);
    }
    Zm() {
      let a = [],
        b = this.zV.values(),
        c = b.next();
      for (; !c.done; ) {
        let d = c.value;
        c = b.next();
        a.push(d);
      }
      return a;
    }
    clear() {
      X.clear(this.zV);
    }
  }
  vg.g = "22E";
  vg.Rb = [By];
  Object.assign(vg.prototype, { j: vg });
  class Jj {}
  Jj.g = "22F";
  Jj.Ei = !0;
  Object.assign(Jj.prototype, { j: Jj });
  class Av extends yh {
    constructor() {
      super();
      this.title = this.name = "";
      this.P6 = m.l();
      this.id = 0;
      this.buttons = m.l();
    }
  }
  Av.g = "230";
  Av.u = yh;
  Object.assign(Av.prototype, { j: Av });
  class bp extends Ij {
    constructor() {
      super();
    }
  }
  bp.g = "231";
  bp.u = Ij;
  Object.assign(bp.prototype, { j: bp });
  class ap extends vg {
    constructor() {
      super();
    }
    add(a, b, c, d, e, f) {
      let g = new pg();
      g.name = a;
      g.url = b;
      g.isReload = d;
      g.hash = e;
      g.ei = f;
      g.bZa = c;
      g.size = Ty(c / 1e6, 2);
      this.Ro(g);
    }
  }
  ap.g = "232";
  ap.u = vg;
  Object.assign(ap.prototype, { j: ap });
  class pg {
    constructor() {
      this.PJ = !0;
      this.bZa = this.priority = 0;
      this.hash = null;
      this.isReload = this.ei = !1;
      this.name = this.url = this.size = this.version = null;
    }
    static compare(a, b) {
      return b == null ? 1 : b.priority - a.priority;
    }
  }
  pg.g = "233";
  pg.Rb = [Jj];
  Object.assign(pg.prototype, { j: pg });
  class $o extends vg {
    constructor() {
      super();
    }
    uBa(a) {
      return m.tj(this.Zm(), function (b) {
        return b.P6.length != 0 ? b.P6.includes(a) : !0;
      });
    }
  }
  $o.g = "234";
  $o.u = vg;
  Object.assign($o.prototype, { j: $o });
  class Bv {
    constructor() {
      this.focus = !1;
      this.P6 = m.l();
      this.kf =
        this.Ffb =
        this.Tg =
        this.Efb =
        this.sign =
        this.bwb =
        this.groupId =
          null;
      this.amount = this.cHa = this.startTime = this.endTime = this.q2a = 0;
      this.name = null;
    }
  }
  Bv.g = "235";
  Bv.Rb = [Jj];
  Object.assign(Bv.prototype, { j: Bv });
  class Bl {
    constructor(a, b) {
      this.VX = this.Tra = this.Ura = this.kra = !1;
      this.Spa = m.l();
      this.Fs = null;
      this.gpa =
        this.Yta =
        this.Zta =
        this.PM =
        this.QM =
        this.hs =
        this.xB =
        this.Jl =
        this.kG =
          0;
      this.yX = new cp();
      this.xX = new cp();
      this.yta = 0;
      this.rO = new zh();
      this.KO = new zh();
      this.ZW = new zh();
      this.YW = new zh();
      this.W = this.vq = this.wsa = null;
      this.Yqa = !0;
      this.uc = a;
      b != null &&
        ((this.Tra = u.ka(b.attributes.get("EndAnimChildLaunch"))),
        (this.Ura = u.ka(b.attributes.get("ReappearChildLaunch"))),
        (this.kra = u.ka(b.attributes.get("HidePaused"))));
    }
    rxb() {
      this.VX = !0;
      let a = this.vq;
      a != null && a.Bxa();
      this.Yka(!1);
    }
    Fdb() {
      this.Jl = this.hs = 0;
      this.VX = !1;
      this.Yka(!0);
    }
    Yka(a) {
      this.W != null && this.W.R(a);
    }
    od(a) {
      a != null && (this.Spa.push(a), (a.Fs = this), (a.VX = !0));
    }
    pYa(a) {
      a > 0 ? (a = ly(a, 100)) : a < 0 && (a = 100 - ly(-a, 100));
      this.gpa = a / 100;
    }
    Rqb(a, b, c, d, e, f, g, h) {
      h == null && (h = 0);
      g == null && (g = -1);
      f == null && (f = 0);
      b = E.get(G.uf(b));
      this.vq = new oi();
      this.vq.init(b, null, a);
      this.W = this.vq.W;
      this.vq.tP = c / 60;
      this.vq.Crb(f, g);
      this.vq.fMa();
      this.pYa(h);
      this.xB = c * this.vq.frames.length + 1;
      a = this.W.ya();
      c = this.W.ra();
      this.W.Th(d / a);
      this.W.oj((e / c) * -1);
      this.W.jk(0.5, 0.5);
      return !0;
    }
    lla(a, b, c, d) {
      this.W = R.aa(E.get(G.uf(a)), b);
      this.W != null &&
        (this.W.Ga(),
        (a = d / this.W.ea.y),
        this.W.Th(c / this.W.ea.x),
        this.W.oj(-a));
    }
    setPosition(a, b) {
      this.PM = a;
      this.QM = b;
    }
    tXa(a, b, c) {
      this.YW.So(a, b, c);
    }
    hsb(a) {
      this.YW.update(a);
    }
    uXa(a, b, c) {
      this.ZW.So(a, b, c);
    }
    isb(a) {
      this.ZW.update(a);
    }
    PLa(a) {
      this.kG = a;
    }
    ZXa(a, b, c) {
      this.rO.So(a, b, c);
    }
    wtb(a) {
      this.yta = a;
    }
    vtb(a) {
      this.rO.update(a);
    }
    Vsb(a, b) {
      this.Yta = a;
      this.Zta = b;
    }
    bXa(a, b, c) {
      b = Math.max(0, b);
      b = Math.min(100, b);
      this.KO.So(a, b, c);
    }
    Erb(a) {
      this.KO.update(a);
    }
    Csb(a) {
      this.xX.enabled = !0;
      this.xX.min = a.first;
      this.xX.max = a.second;
    }
    Dsb(a) {
      this.yX.enabled = !0;
      this.yX.min = a.first;
      this.yX.max = a.second;
    }
    Gdb() {
      let a = 0,
        b = this.Spa;
      for (; a < b.length; ) b[a++].Fdb();
    }
    E4a() {
      if (this.Yqa) {
        this.uc == 1 && this.vq.Ndb(this.gpa);
        if (this.uc == 2 && this.wsa != null) debugger;
        this.Yqa = !1;
      }
    }
    ia(a) {
      a == null && (a = 1);
      if (this.Fs == null || !this.VX) {
        this.Yka(!(this.Jl > 0 && this.kra));
        var b = 0.016666666666666666 * a;
        this.E4a();
        if (this.uc == 2 && this.wsa != null) debugger;
        else {
          this.uc == 1 &&
            ((a = this.Fma(a)),
            a > 0
              ? this.vq.ia(0.016666666666666666 * a)
              : this.Jl > 0 && this.vq.Bxa());
          a = this.PM += this.Yta;
          this.YW.update(b);
          a += this.YW.Gb();
          var c = (this.QM += this.Zta);
          this.ZW.update(b);
          c += this.ZW.Gb();
          this.W.C(a);
          this.W.D(c);
          if (this.rO.active()) {
            this.rO.update(b);
            var d = this.rO.Gb() + this.yta;
            this.W.Xg(d);
          }
          this.KO.active() &&
            (this.KO.update(b), this.W.wa(this.KO.Gb() / 100));
          b = new ja(this.PM);
          d = new ja(this.QM);
          if (this.xX.mxa(a, b) || this.yX.mxa(c, d))
            ((this.PM = b.G), (this.QM = d.G), this.MOa(!0, !1));
        }
      }
    }
    MOa(a, b) {
      this.Fs != null && this.rxb();
      ((this.Tra && b) || (this.Ura && a)) && this.Gdb();
    }
    Fma(a) {
      a = ly(a, this.xB + this.kG);
      let b = this.Jl;
      if (b > 0 ? b < 1e-6 : -b < 1e-6) {
        this.hs < this.xB && this.hs + a >= this.xB && this.MOa(!1, !0);
        this.hs += a;
        if (this.hs < this.xB) return a;
        this.Jl += this.hs - this.xB;
        return this.Jl >= this.kG
          ? ((a = this.Jl - this.kG), (this.hs = this.Jl = 0), this.Fma(a))
          : this.xB - (this.hs - a + 1e-6);
      }
      this.Jl += a;
      if (this.Jl < this.kG) return 0;
      a = this.Jl - this.kG;
      this.hs = this.Jl = 0;
      return this.Fma(a);
    }
  }
  Bl.g = "236";
  Object.assign(Bl.prototype, { j: Bl });
  class cp {
    constructor() {
      this.min = this.max = 0;
      this.enabled = !1;
    }
    mxa(a, b) {
      return this.enabled
        ? a > this.max
          ? ((b.G = this.min - this.max + a), !0)
          : a < this.min
            ? ((b.G = this.max - this.min + a), !0)
            : !1
        : !1;
    }
  }
  cp.g = "237";
  Object.assign(cp.prototype, { j: cp });
  class oi extends ue {
    constructor() {
      super();
      this.frames = this.W = null;
      this.tP = 0.03;
      this.autoplay = !1;
      this.Vu = this.aY = this.rv = this.hc = this.Re = 0;
      this.U9 = 1;
      this.Zfb = new V();
      this.iterations = 0;
      this.QJ = !0;
    }
    init(a, b, c) {
      this.frames = [];
      for (b = a; b != null; ) {
        let d = 0,
          e = b.re.frames;
        for (; d < e.length; ) {
          let f = e[d];
          ++d;
          qd(f.name, c) && this.frames.push(f.name);
        }
        b = b.nextPage;
      }
      this.frames.sort(function (d, e) {
        return (
          K.parseInt(J.substr(d, d.length - 2, null)) -
          K.parseInt(J.substr(e, e.length - 2, null))
        );
      });
      this.Vu = this.frames.length - 1;
      this.aY = this.frames.length;
      this.QXa(a);
    }
    B() {
      super.B();
      let a = this.W;
      a != null && a.B();
      this.W = null;
    }
    update() {
      this.autoplay && this.ia(L.J.uk.Cm);
    }
    ia(a) {
      if (this.QJ && this.W != null)
        for (this.Re += a; this.Re >= this.tP; )
          (this.bYa(), (this.Re -= this.tP));
    }
    Bxa() {
      this.hc = this.rv;
      this.Re = 0;
      this.ST(this.hc);
      this.W.R(!1);
    }
    Crb(a, b) {
      b < 0 && (b = this.frames.length - 1);
      this.rv = a;
      this.Vu = b;
      this.hc = a;
      this.aY = this.Vu - this.rv + 1;
      this.Re = 0;
    }
    fMa() {
      this.U9 = 1;
      this.hc = this.rv;
      this.ST(this.rv);
      this.QJ = !0;
      this.Re = 0;
    }
    Srb() {
      this.U9 = -1;
      this.hc = this.Vu;
      this.ST(this.Vu);
      this.QJ = !0;
      this.Re = 0;
    }
    Ndb(a) {
      this.Re = this.y5a() * a;
      this.hc = (this.aY * a) | 0;
      this.hc += this.rv;
      this.hc >= this.Vu && (this.hc = this.Vu);
      this.ST(this.hc);
    }
    y5a() {
      return this.tP * this.aY;
    }
    ST(a) {
      a > this.Vu ||
        a < this.rv ||
        this.frames.length <= 0 ||
        this.W == null ||
        (this.W.yb(this.frames[a]), this.W.R(!0));
    }
    bYa() {
      this.ST(this.hc);
      this.hc += this.U9;
      if (this.hc > this.Vu || this.hc < this.rv)
        ((this.hc = this.rv),
          this.iterations > 0 &&
            ((this.QJ = --this.iterations > 0) || this.Zfb.$()));
    }
    QXa(a) {
      this.W = R.aa(a, this.frames[0]);
      this.W.Ga();
      this.Zv != null &&
        this.Zv.node != null &&
        this.Zv.node.appendChild(this.W.L);
    }
  }
  oi.g = "238";
  oi.u = ue;
  Object.assign(oi.prototype, { j: oi });
  class Cv {
    constructor() {
      this.Kw = this.value = this.nD = this.b = this.c = 0;
    }
  }
  Cv.g = "239";
  Object.assign(Cv.prototype, { j: Cv });
  class zh {
    constructor() {
      this.gr = this.Dp = 0;
      this.xb = m.l();
    }
    ymb() {
      let a,
        b,
        c = 0,
        d = this.xb.length;
      for (; c < d; ) {
        let e = c++;
        a = this.xb[e].value;
        b = e == this.xb.length - 1 ? this.xb[0].value : this.xb[e + 1].value;
        if (this.xb[e].Kw == 0) {
          this.xb[e].b = this.xb[e].c = 0;
          break;
        }
        this.xb[e].nD == 0
          ? ((this.xb[e].b = (b - a) / this.xb[e].Kw), (this.xb[e].c = a))
          : ((this.xb[e].b =
              (b - a - this.xb[e].nD * this.xb[e].Kw * this.xb[e].Kw) /
              (2 * this.xb[e].nD * this.xb[e].Kw)),
            (this.xb[e].c = a - this.xb[e].nD * this.xb[e].b * this.xb[e].b));
      }
    }
    So(a, b, c) {
      if (!(a < 0)) {
        var d = new Cv();
        d.Kw = a;
        d.value = b;
        d.nD = c;
        this.xb.push(d);
        this.ymb();
      }
    }
    update(a) {
      if (a < 0) return !1;
      if (!this.active()) return ((this.gr += a), !0);
      for (this.gr += a; this.gr > this.xb[this.Dp].Kw; )
        (this.gr > this.xb[this.Dp].Kw &&
          ((this.gr -= this.xb[this.Dp].Kw), this.Dp++),
          this.Dp >= this.xb.length && this.xb.length > 0 && (this.Dp = 0));
      return !0;
    }
    Gb() {
      if (this.xb.length == 0) return 0;
      let a;
      a =
        this.xb[this.Dp].nD != 0
          ? this.xb[this.Dp].nD *
            (this.gr + this.xb[this.Dp].b) *
            (this.gr + this.xb[this.Dp].b)
          : this.xb[this.Dp].b * this.gr;
      return (a += this.xb[this.Dp].c);
    }
    active() {
      return this.xb.length > 0 ? !0 : !1;
    }
  }
  zh.g = "23A";
  Object.assign(zh.prototype, { j: zh });
  class ih {
    constructor(a, b, c) {
      this.kA = new Ie(a.attributes.get("Life"));
      this.xab = u.H(a.attributes.get("Gravity"));
      this.P4a = new Ie(a.attributes.get("ForceX"));
      this.Q4a = new Ie(a.attributes.get("ForceY"));
      this.P3a = u.H(a.attributes.get("Rate"));
      this.A_ = this.Tkb(a.attributes.get("Emitter"));
      this.$J = u.I(a.attributes.get("MaxParticles"), 500);
      this.DY = new Ie(a.attributes.get("AngVel"));
      this.Rwb = new Ie(a.attributes.get("StartSize"));
      this.fma = new Ie(a.attributes.get("StartRotation"));
      this.VNa = u.H(a.attributes.get("StartSpeed"));
      this.velocityX = new Ie(a.attributes.get("VelocityX"));
      this.velocityY = new Ie(a.attributes.get("VelocityY"));
      this.rl = [];
      this.node = new Hd();
      let d = this.node.Jb;
      d.translate.x = b;
      d.translate.y = c;
      d.U = (d.U & -2) | 240;
      b = E.get(1309);
      this.tOa = b.re.mt.v[a.attributes.get("Frame")].id;
      this.FA = new Ah(null, 0);
      this.FA.qc = b;
      this.FA.yP = this.ujb(a.attributes.get("Color"));
      this.hb = new Xb();
      this.hb.Zw(this.FA);
      this.node.appendChild(this.hb);
      this.hb.pm.gb = 1e4;
      this.hb.W6 = !0;
      this.hb.bn = 2;
      this.hb.wk();
      b = this.hb.Jb;
      b.scale.x = 1;
      b.scale.y = -1;
      b.U = (b.U & -6) | 240;
      this.gQ = 0;
      if (a.attributes.get("Prewarm") == "1")
        for (a = 0; a < this.kA.max; )
          (this.update(0.016666666666666666), (a += 0.016666666666666666));
    }
    B() {
      this.hb.B();
      this.node.B();
      this.FA.rl = null;
    }
    update(a) {
      this.gQ += a;
      var b = 1 / this.P3a;
      this.gQ >= b &&
        ((this.gQ -= b),
        this.rl.length < this.$J &&
          this.iwb(
            pa.kT(-this.A_.x / 2, this.A_.x / 2),
            pa.kT(-this.A_.y / 2, this.A_.y / 2),
          ));
      b = 0;
      for (var c = this.rl.length; b < c; ) {
        var d = this.rl[b++];
        d.kA -= a;
        d.kA < 1
          ? (d.view.alpha = d.kA)
          : ((d.view.alpha += 0.1), d.view.alpha > 1 && (d.view.alpha = 1));
        d.ub.x += d.force.x * a;
        d.ub.y += d.force.y * a;
        d.ub.y += this.xab * 9.81 * 0.02;
        d.view.rotation += d.DY * a;
        d.ca.x += d.ub.x * a;
        d.ca.y += d.ub.y * a;
        d.view.x = d.ca.x;
        d.view.y = d.ca.y;
      }
      for (a = !0; a; )
        for (a = !1, b = 0, c = this.rl.length; b < c; )
          if (((d = this.rl[b++]), d.kA <= 0)) {
            J.remove(this.FA.rl, d.view);
            J.remove(this.rl, d);
            d.view = null;
            ih.count--;
            a = !0;
            break;
          }
      this.FA.submit();
    }
    iwb(a, b) {
      ih.count++;
      var c = new H(this.P4a.Gb(), this.Q4a.Gb(), 0, 1);
      c = new Dv(a, b, this.kA.Gb(), c);
      this.rl.push(c);
      var d = this.fma.Gb();
      c.view.rotation = d * 0.0174532925199432;
      c.view.alpha = 0;
      d = this.velocityX.Gb();
      let e = -this.velocityY.Gb();
      if (this.VNa > 0 && d != 0 && e != 0) {
        var f = Math.sqrt(d * d + e * e);
        let g = c.ub,
          h = this.VNa;
        g.x = (d / f) * h;
        g.y = (e / f) * h;
      }
      f = c.ub;
      f.x += d;
      f.y += e;
      c.DY = this.DY.Gb() * 0.0174532925199432;
      d = this.Rwb.Gb() / this.FA.qc.re.kt[this.tOa].ea.x;
      c.view.uka = d;
      c.view.vka = d;
      d = c.ca;
      d.x = a;
      d.y = b;
      c.view.frame = this.tOa;
      this.FA.rl.push(c.view);
    }
    Tkb(a) {
      a = a.split(",");
      return new H(parseFloat(a[0]), parseFloat(a[1]), 0, 1);
    }
    ujb(a) {
      if (a == null) return [null, null];
      let b = [];
      a.indexOf(",") != -1
        ? ((a = a.split(",")),
          b.push(Oa.Wv(K.parseInt(a[0]))),
          b.push(Oa.Wv(K.parseInt(a[1]))))
        : b.push(Oa.Wv(K.parseInt(a)));
      return b;
    }
  }
  ih.g = "23B";
  Object.assign(ih.prototype, { j: ih });
  class Dv {
    constructor(a, b, c, d) {
      this.view = new Ev();
      this.ca = new H(a, b, 0, 1);
      this.ub = new H(0, 0, 0, 1);
      this.DY = 0;
      this.kA = c;
      this.force = d;
    }
  }
  Dv.g = "23C";
  Object.assign(Dv.prototype, { j: Dv });
  class Ie {
    constructor(a) {
      this.min = this.max = 0;
      a != null &&
        (a.indexOf(",") != -1
          ? ((a = a.split(",")),
            (this.min = parseFloat(a[0])),
            (this.max = parseFloat(a[1])))
          : (this.min = this.max = parseFloat(a)));
    }
    Gb() {
      return this.min == this.max ? this.min : pa.kT(this.min, this.max);
    }
  }
  Ie.g = "23D";
  Object.assign(Ie.prototype, { j: Ie });
  class td {
    static leb() {
      td.ceb();
      td.qeb();
      td.keb();
      td.aeb();
      td.Xdb();
      td.Wdb();
    }
    static ceb() {
      td.Sjb(Ja.mi(1297));
    }
    static Sjb(a) {
      var b = a.A("Attributes");
      b != null && v.ho.parse(b);
      b = a.A("RatingEvaluation");
      b != null && xc.Wkb(b);
      b = a.A("DifficultyEvaluation");
      b != null && Wc.h3a(b);
      v.BNa = u.I(a.A("SlowMode").attributes.get("Value"), 10);
      v.AGa = u.H(a.A("SlowMode").attributes.get("MaxTime"), 100);
      v.ANa = u.H(a.A("SlowMode").attributes.get("RestoreWeapon"), 4);
      v.zNa = u.H(a.A("SlowMode").attributes.get("RestoreNonWeapon"), 2);
      b = a.A("SlowMotion").attributes.get("Defense");
      v.CNa = b != null ? b : "";
      b = a.A("Avatar").attributes.get("Name");
      v.Vca = b != null ? b : "avatar_hero";
      b = a.A("Skeleton").attributes.get("Player");
      v.Nya = b != null ? b : "Skeleton";
      b = a.A("DefaultItems");
      b != null && v.Bjb(b);
      b = a.A("Location").attributes.get("Name");
      v.Xca = b != null ? b : "dojo";
      v.xu.parse(a.A("Tutorial"));
      b = a.A("PivotNode").attributes.get("Name");
      v.Kya = b != null ? b : "NPivot";
      v.Mya = u.H(a.A("SellItems").attributes.get("Value"), 0.5);
      v.Ktb(u.I(a.A("Combo").attributes.get("MinHits"), 3));
      v.Ltb(u.I(a.A("Combo").attributes.get("Time"), 90));
      v.Ctb(u.I(a.A("Announcements").attributes.get("Time"), 60));
      v.cub(u.I(a.A("HotGroundTimer").attributes.get("Time"), 90));
      xd.parse(a.A("Physics"));
      v.vDa = u.H(a.A("Great").attributes.get("MaxHealth"), 0.3);
      v.Rtb(u.H(a.A("DamageFactor").attributes.get("Base")));
      v.Stb(u.I(a.A("DamageFactor").attributes.get("MaxValue"), 2e4));
      b = a.A("DamageFactor").attributes.get("Attribute");
      v.Qtb(b != null ? b : "");
      b = a.A("BlockDamageFactor");
      v.bZ.parse(b);
      b = a.A("CriticalHit").A("Damage");
      v.OZ.parse(b);
      b = a.A("BlockDefense").attributes.get("Attribute");
      v.IYa = b != null ? b : "";
      v.IP = u.H(a.A("DamageDoublingRange").attributes.get("Value"));
      v.rT = u.H(a.A("ResistanceDoublingRange").attributes.get("Value"));
      a.A("StartingMagic") != null &&
        a.A("StartingMagic").attributes.get("Attribute");
      v.Cub(
        a.A("Power") != null ? u.I(a.A("Power").attributes.get("Max"), 10) : 10,
      );
      v.dF =
        a.A("Power") != null
          ? u.I(a.A("Power").attributes.get("TimeMax"), 600)
          : 600;
      v.cl =
        a.A("LifeBar") != null
          ? u.H(a.A("LifeBar").attributes.get("Value"), 0)
          : 0;
      a.A("PushRetantionTime") != null &&
        u.I(a.A("PushRetantionTime").attributes.get("Value"), v.Qlb);
      b = a.A("OutdateLevels");
      b != null && v.MIa.parse(b);
      b = a.A("AlignTargetAttributes");
      b != null && ((v.Bv.length = 0), m.addRange(v.Bv, Bh.Zjb(b)));
      v.dya = u.I(a.A("CounterPunches").attributes.get("Value"), 2);
      b = a.A("RewardsPrize");
      v.nF.parse(b);
      b = a.A("CriticalHit");
      v.uya.parse(b);
      b = a.A("HitEffects");
      v.KDa.parse(b);
      b = a.A("Shock");
      v.Ub.parse(b);
      b = a.A("Camera");
      v.OC.parse(b);
      b = a.A("Shop");
      v.hNa.parse(b);
      b = a.A("Currencies");
      v.Tq.parse(b);
      b = a.A("Resistances");
      v.e0.parse(b);
      b = a.A("BarScales");
      v.bwa.parse(b);
      b = a.A("Magic");
      v.mA.parse(b);
      b = a.A("AchievementCounter");
      v.pY.parse(b);
      b = a.A("Regeneration");
      v.Mja.parse(b);
      b = a.A("Lifesteal");
      v.vha.parse(b);
      v.frameRate = u.I(a.A("FrameRate").attributes.get("Value"), 60);
      u.I(a.A("VideoAdCounterReset").attributes.get("Value"));
      ge.parse(a.A("GUI").A("Basic"));
      Nb.parse(a.A("GUI").A("Map"));
      Kj.parse(a.A("GUI").A("Fight"));
      zc.parse(a.A("GUI").A("Profile"));
      Je.parse(a.A("GUI").A("Lottery"));
      v.Ceb.parse(a.A("LotteryRerollPrices"));
      v.Eya = u.ka(a.A("DailyDebugMode").attributes.get("Value"));
      v.Fya = u.I(a.A("DailyDebugTime").attributes.get("Value"));
      b = a.A("Hints");
      b != null && Ch.parse(b);
      b = a.A("Aspects");
      b != null && v.ijb(b);
      b = a.A("Aspect");
      b != null && v.hjb(b);
      v.yWa();
      b = a.A("StyleLevels");
      b != null && v.mu.parse(b);
      v.Mha = u.I(a.A("MaximumExperience").attributes.get("Value"), 3e7);
      a = a.A("AntiCheatSettings");
      a != null && v.mba.parse(a);
    }
    static reb() {
      ug.version = new Dh(1, 0, 13, 0);
      ug.kz = new Dh(1, 0, 13, 0);
    }
    static qeb() {
      td.Ekb(Ja.mi(274));
    }
    static Xdb() {
      td.qjb(Ja.mi(1320));
    }
    static Wdb() {
      td.ajb(Ja.mi(1361));
    }
    static keb() {
      let a = Ja.mi(312);
      If.R0a(a);
      v.Sg.parse(a);
    }
    static aeb() {
      ye.F().parse();
    }
    static ajb(a) {
      v.zv.parse(a);
    }
    static qjb(a) {
      let b = a.A("Thresholds");
      a.A("LotteryThresholds");
      let c = a.A("Perks"),
        d = a.A("LevelAttributeGain"),
        e = a.A("StartingAttributes"),
        f = a.A("PerkTree"),
        g = a.A("CurrencyBaseValues");
      a = a.A("MoneyBaseValues");
      v.KR.parse(b);
      v.Sg.sPa(c);
      v.JFa.parse(d);
      v.XNa.parse(e);
      v.zya.parse(g);
      v.OGa.parse(a);
      id.ot().parse(f);
    }
    static enb() {
      let a = Ja.mi(1320).A("Perks");
      v.Sg.sPa(a);
    }
    static Ekb(a) {
      v.D4.parse(a.A("Random"));
    }
  }
  td.g = "23E";
