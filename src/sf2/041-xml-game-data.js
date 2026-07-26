// 041-xml-game-data.js
// Domain: tree-oc  |  66 class(es)  |  tree root(s): oc, ba, vd, Db, ha, nz, sv, S, tv, vh, uv, vv
// Edit here. Run `npm run build` to reassemble the full bundle.
  class oc {
    constructor() {
      this.Rh = "";
      this.Je = 0;
    }
    toString() {
      return this.iE() ? K.T(this.Je) : this.Rh;
    }
    iE() {
      let a = this.Rh;
      return a != null ? a == "" : !0;
    }
    clear() {
      this.Rh = "";
      this.Je = 0;
    }
  }
  oc.g = "1C9";
  Object.assign(oc.prototype, { j: oc });
  class ba {
    static Kz(a, b) {
      var c = a.indexOf("{");
      if (c <= -1) return a;
      let d = new Fb();
      d.M += a;
      let e = a.lastIndexOf("}");
      if (e == -1) return d.M;
      let f = new oc(),
        g = new yb();
      for (g.kk(b); c <= e; )
        if (((b = ""), a.charAt(c) == "{")) {
          let h = a.indexOf("}", c);
          c = J.substr(a, c + 1, h - c - 1);
          c != "" && (f.clear(), g.fc(c, f), (b = f.toString()));
          c != null &&
            c != "" &&
            c != b &&
            (d.M = at.EVa(d.M, c, b, d.M.indexOf(c), c.length));
          c = h + 1;
        } else ++c;
      return d.M;
    }
    static ID(a, b) {
      ba.W8.kk(a);
      ba.X8.clear();
      ba.W8.fc(b, ba.X8);
      ba.W8.kk(null);
      return ba.X8;
    }
    static iCa(a, b) {
      return ba.ID(a, b).Je | 0;
    }
    static Oj(a, b) {
      return ba.ID(a, b).Je;
    }
    static n9a(a, b) {
      return ba.ID(a, b).Je;
    }
    static o9a(a, b) {
      return Math.trunc(ba.ID(a, b).Je);
    }
    static Rc(a, b) {
      return ba.ID(a, b).Rh;
    }
    static fg(a, b) {
      return ba.ID(a, b).toString();
    }
    static dw(a, b) {
      return ba.ID(a, b).Je > 0;
    }
  }
  ba.g = "1CA";
  class vd {
    constructor() {
      this.pH = this.Mb = null;
      this.W9 = !1;
    }
    Kfa() {
      return Math.trunc(this.BCa());
    }
    R9a() {
      return (this.BCa() | 0) != 0;
    }
    BCa() {
      return this.pH != null ? this.pH : ba.n9a(ha.F().ta, this.Mb);
    }
    mtb() {
      this.WT("0");
    }
    WT(a) {
      this.Mb = a;
      this.pH = bd(this.Mb);
      this.W9 = this.pH == null && vd.Afb(a);
    }
    static Afb(a) {
      let b = a.charAt(0);
      return a == null || lc(a)
        ? !1
        : b != "_" && b != "@" && b != "?" && b != "$"
          ? aa.h2(b)
          : !0;
    }
    static iea() {
      let a = new vd();
      a.mtb();
      return a;
    }
    static b5a(a) {
      let b = new vd();
      b.WT(a);
      return b;
    }
    static jea(a) {
      let b = new vd();
      b.Mb = a.Mb;
      b.pH = a.pH;
      b.W9 = a.W9;
      return b;
    }
  }
  vd.g = "1CB";
  Object.assign(vd.prototype, { j: vd });
  class ri extends Db {
    constructor() {
      super();
      this.Y(!1);
    }
    Z() {
      ha.F().update();
    }
  }
  ri.g = "1CC";
  ri.u = Db;
  Object.assign(ri.prototype, { j: ri });
  class ha {
    constructor() {
      this.JJ = !1;
      this.Cy = m.l();
      this.jra = new sv();
      this.Fh = m.l();
      this.oC = new Map();
      this.cKa = m.l();
      this.ta = new Cj();
      this.amb = new Cj();
      this.Aia = new V();
      this.zVa = m.l();
      this.JVa = m.l();
      this.YZ = this.r2a = "";
      this.DN = !1;
      L.J.root.find(ri).Y(!0);
    }
    update() {
      this.JJ && this.tLa();
    }
    phb(a) {
      this.Cy.push(a);
    }
    ohb(a) {
      if (!(this.Cy.length <= 0)) {
        var b = this.Cy;
        ce.equals(b[b.length - 1], a) && (this.Cy.pop(), m.gyb(this.JVa));
      }
    }
    Nja(a, b) {
      if (this.Cy.length > 0) {
        let c = this.Cy;
        c[c.length - 1].Nja(a, b);
      }
    }
    x0(a) {
      if (this.Cy.length <= 0) return null;
      let b = this.Cy;
      return b[b.length - 1].x0(a);
    }
    UEa(a) {
      return a.jYa
        ? !1
        : m.Fe(this.Fh, function (b) {
            return a.name == b.name;
          });
    }
    Rt(a) {
      if (a != null) {
        a.Tc.removeListener(w(this, this.Rt));
        var b = m.findLastIndex(this.Fh, function (c) {
          return c.name == a.name ? c.fileName == a.fileName : !1;
        });
        b >= 0 && m.ye(this.Fh, b);
        this.Fh.length > 0
          ? (this.JJ = !0)
          : (this.wP(), this.ta.i0a(), this.Aia.$());
      }
    }
    TEa(a) {
      var b = this.Fh;
      if (b == null || b.length == 0) return !1;
      a = this.WBa(a);
      b = 0;
      let c = this.Fh;
      for (; b < c.length; ) {
        let d = c[b++].name,
          e = 0,
          f = a.length;
        for (; e < f; ) if (d == a[e++].name) return !0;
      }
      return !1;
    }
    bma() {
      for (var a = 0, b = this.Fh.length; a < b; ) ++a;
      Qd.sort(this.Fh, function (c, d) {
        return c.az(d);
      });
      a = 0;
      for (b = this.Fh.length; a < b; ) ++a;
    }
    add(a) {
      a != null &&
        (this.Fh.push(a),
        (a = xa.F().Td.Wf),
        this.JJ || this.DN || a == 6 || (this.JJ = !0));
    }
    bP(a) {
      let b = 0,
        c = a.Hc.length;
      for (; b < c; ) {
        let d = a.Hc[b++].type;
        X.Xa(this.oC, d) || this.oC.set(d, m.l());
        this.oC.get(d).push(a);
        d == "QUEST_EVENT_ACTIVATE" && this.jra.bP(a);
      }
      this.cKa.push(a);
    }
    WBa(a) {
      if (a == "QUEST_EVENT_ACTIVATE") return this.jra.h6a();
      if (X.Xa(this.oC, a)) return this.oC.get(a);
      this.oC.set(a, m.l());
      return this.oC.get(a);
    }
    Vf(a) {
      return this.VA(a) ? (this.wT(), !0) : !1;
    }
    VA(a) {
      a = this.WBa(a);
      let b = !1;
      if (a.length > 0) {
        let c = 0,
          d = a.length;
        for (; c < d; ) {
          let e = a[c++];
          !this.UEa(e) && e.compare(this.ta) && (this.$aa(e), (b = !0));
        }
        b && this.bma();
      }
      return b;
    }
    $aa(a, b) {
      b == null && (b = !1);
      a.yLa(this.ta);
      this.add(a);
      b && this.bma();
    }
    FD(a) {
      return m.find(this.cKa, function (b) {
        return b.name == a;
      });
    }
    tLa() {
      if (this.Fh.length > 0) {
        this.DN = !0;
        let a = (this.JJ = !1);
        for (; !a && 0 < this.Fh.length; ) {
          let b = this.Fh[0];
          b != null && b.hcb()
            ? (b.Tc.addListener(w(this, this.Rt)),
              b.rF(this.ta, !1),
              (a = !0),
              (this.YZ = b.name))
            : m.ye(this.Fh, 0);
        }
        0 == this.Fh.length && ((this.DN = !1), (this.YZ = ""));
      }
    }
    wT() {
      this.DN || this.tLa();
    }
    uWa(a) {
      var b = a[0].Qp != null ? a[0].Qp.parameters : null;
      b != null && (this.ta = a[0].zca(b));
      for (b = 0; b < a.length; ) {
        let c = a[b];
        ++b;
        c.Qp == null || this.UEa(c) || (c.yLa(this.ta), this.add(c));
      }
      this.bma();
    }
    wP() {
      this.DN = this.JJ = !1;
      this.YZ = "";
      this.Fh.length = 0;
      this.zVa.length = 0;
    }
    hca(a) {
      let b = this.Fh.length - 1;
      for (; b >= 0; ) {
        let c = this.Fh[b];
        c.WC == 1 ||
          (a != null && a.length != 0 && !c.Hcb(a)) ||
          (c.Qp != null && c.Qp.clearParameters(),
          c.Tc.removeListener(w(this, this.Rt)),
          m.ye(this.Fh, b));
        --b;
      }
      p.o != null && p.o.save();
    }
    static F() {
      let a = ha.Hb;
      return a != null ? a : (ha.Hb = new ha());
    }
  }
  ha.g = "1CD";
  Object.assign(ha.prototype, { j: ha });
  class nz {
    static Ipb(a, b) {
      if (!a.TEa("QUEST_EVENT_CHECK_USER_UPDATE"))
        if (a.VA("QUEST_EVENT_CHECK_USER_UPDATE")) {
          var c = null;
          c = function () {
            a.Aia.removeListener(c);
            debugger;
            b();
          };
          a.Aia.addListener(c);
          a.wT();
        } else b();
    }
  }
  nz.g = "1CE";
  class sv {
    constructor() {
      this.O8 = new gd();
      this.q7 = "_$ActionID";
      this.eV = m.l();
      this.y7 = new Map();
      let a = aa.vM + aa.k7,
        b = 0;
      for (; b < a.length; ) {
        let c = a.charAt(b++);
        this.O8.contains(c) || this.O8.add(c);
      }
    }
    bP(a) {
      if (a.zcb()) {
        for (var b = new ja(null), c = 0, d = a.rb; c < d.length; ) {
          let e = d[c];
          ++c;
          if (e.type == 1 && !this.T_a(e.nM, e.rna, b)) {
            this.eV.push(a);
            return;
          }
        }
        this.GXa(a, b.G);
      }
    }
    T_a(a, b, c) {
      if (a != this.q7 && b != this.q7) return !0;
      if (a == b) return !1;
      a = a == this.q7 ? b : a;
      b = c.G;
      if ((b != null && b != "") || !this.I_a(a)) return !1;
      c.G = a;
      return !0;
    }
    I_a(a) {
      if (a == null || a == "") return !1;
      let b = 0;
      for (; b < a.length; ) if (this.O8.contains(a.charAt(b++))) return !1;
      return !0;
    }
    GXa(a, b) {
      if (b == null || b == "") this.eV.push(a);
      else {
        var c = new Ia();
        X.wh(this.y7, b, c)
          ? c.G.push(a)
          : ((c.G = m.l()), c.G.push(a), this.y7.set(b, c.G));
      }
    }
    h6a() {
      let a = m.l();
      var b = this.eV;
      b != null && b.length != 0 && m.addRange(a, this.eV);
      Ge.TZ != null &&
        ((b = new Ia()), X.wh(this.y7, Ge.TZ, b) && m.addRange(a, b.G));
      return a;
    }
  }
  sv.g = "1CF";
  Object.assign(sv.prototype, { j: sv });
  class Dn extends S {
    constructor() {
      super();
      this.Mo = "";
      this.qf = m.l();
    }
    parse(a) {
      super.parse(a);
      let b = a.attributes.get("Text");
      this.Mo = b != null ? b : "";
      this.Yjb(a);
    }
    Yjb(a) {
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        let c = a[b++],
          d = c.attributes.get("Text");
        this.qf.push(
          new rb(d != null ? d : "", u.I(c.attributes.get("Frames"))),
        );
      }
    }
    S(a) {
      super.S(a);
      this.qf.length > 0 ? this.Avb(a) : this.Wvb(a);
      a = Ya.get();
      a != null && a.Mzb();
    }
    Avb(a) {
      let b = m.l(),
        c = 0,
        d = this.qf;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        b.push(new rb(ba.Kz(e.key, a), e.value));
      }
      v.yvb(b, w(this, this.sa));
    }
    Wvb(a) {
      v.xvb(ba.Kz(this.Mo, a), w(this, this.sa));
    }
  }
  Dn.g = "1D0";
  Dn.u = S;
  Object.assign(Dn.prototype, { j: Dn });
  class Ge extends S {
    constructor() {
      super();
      this.Toa = "";
    }
    parse(a) {
      super.parse(a);
      a = a.attributes.get("ActionID");
      this.Toa = a != null ? a : "";
    }
    S(a) {
      super.S(a);
      Ge.lpb(ba.fg(a, this.Toa));
      this.sa();
    }
    static lpb(a) {
      Ge.TZ = a;
      ha.F().VA("QUEST_EVENT_ACTIVATE");
      Ge.TZ = null;
    }
  }
  Ge.g = "1D1";
  Ge.u = S;
  Object.assign(Ge.prototype, { j: Ge });
  class zj extends S {
    constructor() {
      super();
      this.sma = this.UL = null;
      this.absolute = !1;
    }
    parse(a) {
      super.parse(a);
      var b = a.attributes.get("Name");
      this.UL = b != null ? b : "";
      b = a.attributes.get("Value");
      this.sma = b != null ? b : "";
      this.absolute = u.ka(a.attributes.get("Absolute"), !1);
    }
    S(a) {
      super.S(a);
      let b = ba.Rc(a, this.UL);
      if (this.absolute) {
        a = this.sma;
        var c = void 0;
        c == null && (c = 0);
        a = Math.trunc(kc(a, c));
        a != 0 && p.o.Bl.dba(b, a);
      } else {
        c = new oc();
        let d = new yb();
        d.kk(a);
        d.fc(this.sma, c);
        p.o.Bl.dba(b, p.Dc + Math.trunc(c.Je));
      }
      this.sa();
    }
  }
  zj.g = "1D2";
  zj.u = S;
  Object.assign(zj.prototype, { j: zj });
  class Fn extends S {
    constructor() {
      super();
      this.filename = "";
    }
    parse(a) {
      super.parse(a);
      a = a.attributes.get("File");
      this.filename = a != null ? a : "";
    }
    S(a) {
      super.S(a);
      a = this.filename;
      a != null && a != "" && p.F().U3(this.filename);
      this.sa();
    }
  }
  Fn.g = "1D3";
  Fn.u = S;
  Object.assign(Fn.prototype, { j: Fn });
  class rh extends S {
    constructor() {
      super();
      this.ey = this.Ba = "";
      this.VB = 0;
      this.Ny = new Yb();
      this.Av = new Yb();
    }
    parse(a) {
      super.parse(a);
      var b = a.attributes.get("Name");
      this.Ba = b != null ? b : "";
      b = a.attributes.get("Currency");
      this.ey = b != null ? b : "";
      this.ey == "Coins"
        ? (this.VB = 1)
        : this.ey == "Ruby"
          ? (this.VB = 2)
          : this.ey == "Real" &&
            ((this.VB = 3),
            (b = a.A("Success")),
            (a = a.A("Error")),
            this.Ss(b, this.Ny, w(this, this.hf)),
            this.Ss(a, this.Av, w(this, this.hf)));
    }
    S(a) {
      this.Ie();
      super.S(a);
      let b = this.sBa(a);
      if (this.VB != 3) (b != null && v.mZ(b, this.VB), this.sa());
      else {
        if (
          b != null &&
          (jb.ui.addListener(w(this, this.ui)),
          jb.um.addListener(w(this, this.um)),
          v.mZ(b, this.VB))
        )
          return;
        jb.ui.removeListener(w(this, this.ui));
        jb.um.removeListener(w(this, this.um));
        this.Av.S(a);
      }
    }
    Ie() {
      this.Ny.Vg();
      this.Av.Vg();
    }
    hf() {
      this.sa();
    }
    ui() {
      jb.ui.removeListener(w(this, this.ui));
      jb.um.removeListener(w(this, this.um));
      this.Ny.S(this.ta);
    }
    um() {
      jb.ui.removeListener(w(this, this.ui));
      jb.um.removeListener(w(this, this.um));
      this.Av.S(this.ta);
    }
    Pba(a) {
      a = this.sBa(a);
      return a != null ? p.Pba(a, this.VB) : !1;
    }
    sBa(a) {
      return p.items.$b(ba.fg(a, this.Ba));
    }
  }
  rh.g = "1D4";
  rh.u = S;
  Object.assign(rh.prototype, { j: rh });
  class Hn extends S {
    constructor() {
      super();
      this.VN = null;
      this.iq = new Yb();
      this.no = new Yb();
    }
    parse(a) {
      super.parse(a);
      let b = a.attributes.get("Name");
      this.VN = b != null ? b : "";
      this.Ss(a.A("Success"), this.iq, w(this, this.hf));
      this.Ss(a.A("Error"), this.no, w(this, this.hf));
    }
    S(a) {
      this.Ie();
      super.S(a);
      let b = ba.Rc(a, this.VN);
      this.FXa();
      p.Hw.ZYa(b) || (this.Yja(), this.no.S(a), this.sa());
    }
    Ie() {
      this.iq.Vg();
      this.no.Vg();
      this.Yja();
    }
    FXa() {
      jb.ui.addListener(w(this, this.ui));
      jb.um.addListener(w(this, this.iIa));
    }
    Yja() {
      jb.ui.removeListener(w(this, this.ui));
      jb.um.removeListener(w(this, this.iIa));
    }
    hf() {
      this.Yja();
      this.sa();
    }
    ui() {
      this.iq.S(this.ta);
    }
    iIa() {
      this.no.S(this.ta);
    }
  }
  Hn.g = "1D5";
  Hn.u = S;
  Object.assign(Hn.prototype, { j: Hn });
  class In extends S {
    constructor() {
      super();
      this.Be = this.VN = null;
    }
    parse(a) {
      super.parse(a);
      let b = a.attributes.get("Name");
      this.VN = b != null ? b : "";
      a = a.attributes.get("Value");
      this.Be = a != null ? a : "";
    }
    S(a) {
      super.S(a);
      let b = ba.Rc(a, this.VN);
      a = ba.Rc(a, this.Be);
      if (a != "Unknown") {
        var c = m.gn(p.Hw.Mt, function (d) {
          return d.ab() == b;
        });
        c != null && c.rc.state != a && ((c.rc.state = a), p.o.save());
      }
      this.sa();
    }
  }
  In.g = "1D6";
  In.u = S;
  Object.assign(In.prototype, { j: In });
  class Jn extends S {
    constructor() {
      super();
      this.$g = null;
    }
    parse(a) {
      super.parse(a);
      a = a.attributes.get("Avatar");
      this.$g = a != null ? a : "";
    }
    S(a) {
      super.S(a);
      a = new ja("");
      this.Dfa(a);
      p.o.Qka(a.G);
      this.sa();
    }
    Dfa(a) {
      let b = new oc(),
        c = new yb();
      c.kk(this.ta);
      c.fc(this.$g, b);
      a.G = b.toString();
    }
  }
  Jn.g = "1D7";
  Jn.u = S;
  Object.assign(Jn.prototype, { j: Jn });
  class Kn extends S {
    constructor() {
      super();
      this.pqa = null;
      this.Gqa = this.pta = this.qG = !1;
    }
    parse(a) {
      super.parse(a);
      let b = a.attributes.get("Destination");
      this.pqa = b != null ? b : "";
      this.qG = u.ka(a.attributes.get("CallEvents"), !0);
      this.pta = u.ka(a.attributes.get("ReopenScene"), !1);
      this.Gqa = u.ka(a.attributes.get("DownloadBundle"), !1);
    }
    S(a) {
      super.S(a);
      xa.F().Tf.addListener(w(this, this.Tf));
      a = ba.Rc(a, this.pqa);
      a == null || a == "" ? this.FIa(3) : this.FIa(Bn.AOa(a));
    }
    Tf() {
      xa.F().Tf.removeListener(w(this, this.Tf));
      this.sa();
    }
    FIa(a) {
      let b = !1;
      a != xa.F().Td.Wf || this.pta
        ? a != 6
          ? (a == 5 &&
              this.Gqa &&
              p.o.Ds.Ne != "ZONE_1" &&
              p.o.u5(p.LD("ZONE_1").Fg[0].YQ()),
            (b = !xa.F().rp(a, null, null, this.qG)))
          : xa.F().rp(3, null, null, this.qG)
        : (b = !0);
      b && this.Tf(a);
    }
  }
  Kn.g = "1D8";
  Kn.u = S;
  Object.assign(Kn.prototype, { j: Kn });
  class Ln extends S {
    constructor() {
      super();
      this.pN = this.qua = null;
      this.Fy = 0;
      this.JX = 11;
    }
    parse(a) {
      super.parse(a);
      let b = a.attributes.get("Tab");
      this.qua = b != null ? b : "";
      a = a.attributes.get("Focus");
      this.pN = a != null ? a : "";
    }
    S(a) {
      super.S(a);
      debugger;
      this.Fy = wj.L0(ba.Rc(a, this.qua));
      this.JX = wj.sfa(this.Fy);
      if (xa.F().Td.Wf == this.JX)
        switch (this.JX) {
          case 4:
            a = Ma.get();
            if (a != null) a.Dka(Dj.u6(this.Fy), this.pN);
            else {
              xa.F().Tf.addListener(w(this, this.Tf));
              return;
            }
            break;
          case 5:
            a = Ya.get();
            if (a != null) a.xF(this.Fy);
            else {
              xa.F().Tf.addListener(w(this, this.Tf));
              return;
            }
            break;
          case 7:
            if (((a = vb.get()), a != null)) a.xF(Xo.yOa(this.Fy), this.pN);
            else {
              xa.F().Tf.addListener(w(this, this.Tf));
              return;
            }
        }
      this.sa();
    }
    Tf() {
      debugger;
      switch (this.JX) {
        case 4:
          var a = Ma.get();
          a != null && a.Dka(Dj.u6(this.Fy), this.pN);
          break;
        case 5:
          a = Ya.get();
          a != null && a.xF(this.Fy);
          break;
        case 7:
          ((a = vb.get()), a != null && a.xF(Xo.yOa(this.Fy), this.pN));
      }
      xa.F().Tf.removeListener(w(this, this.Tf));
      this.sa();
    }
  }
  Ln.g = "1D9";
  Ln.u = S;
  Object.assign(Ln.prototype, { j: Ln });
  class Mn extends S {
    constructor() {
      super();
    }
    parse(a) {
      super.parse(a);
    }
    S(a) {
      debugger;
      super.S(a);
      p.Hw.l_a();
      this.sa();
    }
  }
  Mn.g = "1DA";
  Mn.u = S;
  Object.assign(Mn.prototype, { j: Mn });
  class Nn extends S {
    constructor() {
      super();
    }
    parse(a) {
      super.parse(a);
    }
    S(a) {
      super.S(a);
      p.Hw.t_a();
      this.sa();
    }
  }
  Nn.g = "1DB";
  Nn.u = S;
  Object.assign(Nn.prototype, { j: Nn });
  class Pn extends S {
    constructor() {
      super();
    }
    S(a) {
      super.S(a);
      this.xLa(a);
      p.o.save();
      this.sa();
    }
    xLa(a) {
      let b = p.o.VBa(this.eF);
      b == null && ((b = p.o.bP(this.eF, this.R_)), this.y3.$(b));
      b.setParameters(a, this.Paa, this.index);
      b.fileName = this.R_;
      p.o.save();
    }
  }
  Pn.g = "1DC";
  Pn.u = S;
  Object.assign(Pn.prototype, { j: Pn });
  class On extends S {
    constructor() {
      super();
    }
    parse(a) {
      super.parse(a);
      var b = a.attributes.get("PremiumPack");
      this.qH = b != null ? b : "";
      b = a.attributes.get("PackAssert");
      this.Jsa = b != null ? b : "";
      b = a.attributes.get("RestoreQuest");
      this.tta = b != null ? b : "";
      this.h$ = m.l();
      a = a.children;
      for (b = 0; b < a.length; ) {
        var c = a[b++];
        if (c.attributes.get("ItemName") == null) continue;
        c = c.attributes.get("ItemName");
        this.h$.push(c != null ? c : "");
      }
    }
    S(a) {
      super.S(a);
      debugger;
      var b = this.qH;
      if (
        b != null &&
        b != "" &&
        ((b = this.tta),
        b != null &&
          b != "" &&
          ((b = this.Jsa), b == null || b == "" || Mc.F().b2(this.Jsa)))
      ) {
        b = p.items;
        var c = p.o.xa,
          d = b.$b(this.qH);
        if (d != null) {
          d = c.te(d);
          var e = d != null ? d.qd() : 0;
          if (!(e <= 0)) {
            d = 0;
            for (var f = this.h$.length; d < f; ) {
              e = b.$b(this.h$[d++]);
              if (e == null) {
                this.sa();
                return;
              }
              e = c.te(e);
              e = e != null ? e.qd() : 0;
              if (e <= 0) {
                this.Wob(a);
                return;
              }
            }
          }
        }
      }
      this.sa();
    }
    Wob(a) {
      let b = ha.F().FD(this.tta);
      b != null && b.compare(a) && ha.F().$aa(b);
      this.sa();
    }
  }
  On.g = "1DD";
  On.u = S;
  Object.assign(On.prototype, { j: On });
  class Qn extends S {
    constructor() {
      super();
      this.names = m.l();
    }
    parse(a) {
      super.parse(a);
      a = a.attributes.get("Name");
      m.addRange(this.names, (a != null ? a : "").split("|"));
    }
    S(a) {
      super.S(a);
      ha.F().hca(this.names);
      this.sa();
    }
  }
  Qn.g = "1DE";
  Qn.u = S;
  Object.assign(Qn.prototype, { j: Qn });
  class ho extends S {
    constructor() {
      super();
      this.ad = m.l();
      this.x7 = new Yb();
      this.w7 = new Yb();
    }
    parse(a) {
      super.parse(a);
      ce.MS(a.A("Conditions"), this.ad);
      this.Yl(a.A("Then"), this.x7, w(this, this.hf));
      this.Yl(a.A("Else"), this.w7, w(this, this.hf));
    }
    S(a) {
      this.Ie();
      super.S(a);
      this.compare(a) ? this.x7.S(a) : this.w7.S(a);
    }
    compare(a) {
      let b = 0,
        c = this.ad;
      for (; b < c.length; ) if (!c[b++].compare(a)) return !1;
      return !0;
    }
    hf() {
      this.sa();
    }
    Ie() {
      super.Ie();
      this.x7.Vg();
      this.w7.Vg();
    }
  }
  ho.g = "1DF";
  ho.u = S;
  Object.assign(ho.prototype, { j: ho });
  class to extends S {
    constructor() {
      super();
      this.mqa = this.ksa = this.asa = this.ata = this.T8 = null;
    }
    parse(a) {
      super.parse(a);
      var b = a.attributes.get("Full");
      this.T8 = b != null ? b : "";
      b = a.attributes.get("Production");
      this.ata = b != null ? b : "";
      b = a.attributes.get("Major");
      this.asa = b != null ? b : "";
      b = a.attributes.get("Minor");
      this.ksa = b != null ? b : "";
      a = a.attributes.get("DataVersion");
      this.mqa = a != null ? a : "";
    }
    S(a) {
      debugger;
      super.S(a);
      let b = this.k7a(a);
      if (b == null || b == "") b = this.O7a(a);
      debugger;
      p.F().jrb(b);
      this.sa();
    }
    k7a(a) {
      var b = this.T8;
      if (b == null || b == "") return null;
      debugger;
      a = ba.fg(a, this.T8);
      if (a == null || a == "") b = 0;
      else
        for (var c = (b = 0), d = a.length; c < d; )
          "." == a.charAt(c++) && ++b;
      return b == 3 ? a : null;
    }
    O7a(a) {
      debugger;
      return (
        "" +
        ba.fg(a, this.ata) +
        "." +
        ba.fg(a, this.asa) +
        "." +
        ba.fg(a, this.ksa) +
        "." +
        ba.fg(a, this.mqa)
      );
    }
  }
  to.g = "1E0";
  to.u = S;
  Object.assign(to.prototype, { j: to });
  class Hf extends S {
    constructor() {
      super();
      this.bh = this.F8 = null;
    }
    parse(a) {
      super.parse(a);
      let b = a.attributes.get("Item");
      this.bh = b != null ? b : "";
      a = a.attributes.get("Enchantment");
      this.F8 = a != null ? a : "";
    }
    S(a) {
      super.S(a);
      let b = ba.fg(a, this.bh);
      Hf.FEa(b)
        ? (Pa.TYa(b), Ma.get() != null && Ma.get().refresh())
        : v.R2a(ba.fg(a, this.F8));
      this.sa();
    }
    zZa() {
      let a = ba.fg(this.ta, this.bh);
      return Hf.FEa(a) ? Pa.BZa(a) : Pa.AZa(ba.fg(this.ta, this.F8));
    }
    static FEa(a) {
      return a != "0";
    }
  }
  Hf.g = "1E1";
  Hf.u = S;
  Object.assign(Hf.prototype, { j: Hf });
  class Sn extends S {
    constructor() {
      super();
      this.qq = 0;
      this.pf = Z.Tna;
    }
    parse(a) {
      super.parse(a);
      this.qq = u.I(a.attributes.get("DenominationDigits"), -1);
      a = a.attributes.get("CoinIcon");
      this.pf = a != null ? a : "";
    }
    S(a) {
      super.S(a);
      a = p.o.qq;
      p.o.Utb(this.qq);
      p.o.Jtb(this.pf);
      this.mz(a);
      a = Ma.get();
      a != null && a.ac.content.Tyb();
      xa.F().Td.Wf != 6 && xa.F().rp(xa.F().Td.Wf);
      p.o.save(!0);
      this.sa();
    }
    mz(a) {
      p.items.mz(a);
      p.o.Pya(a);
    }
  }
  Sn.g = "1E2";
  Sn.u = S;
  Object.assign(Sn.prototype, { j: Sn });
  class tv {
    constructor() {
      this.dP = !1;
      this.sZ = this.U_a = null;
      this.j2 = this.vP = !1;
    }
  }
  tv.g = "1E3";
  Object.assign(tv.prototype, { j: tv });
  class He extends S {
    constructor() {
      super();
      this.image = "";
      this.SD = !1;
      this.$pa = null;
      this.lines = m.l();
      this.Ij = this.Ph = this.sh = this.Og = null;
      this.tma = m.l();
      this.Hg = null;
      this.vOa = 5;
      this.hda = "";
      this.Vt = null;
    }
    parse(a) {
      super.parse(a);
      var b = a.attributes.get("Title");
      this.title = b != null ? b : "";
      b = a.attributes.get("Image");
      this.image += b != null ? b : "";
      a.attributes.get("ItemSetName");
      b = a.attributes.get("PackName");
      this.KS = b != null ? b : "";
      a.attributes.get("PackName2");
      b = a.attributes.get("Type");
      this.type = b != null ? b : "Regular";
      this.Vab = u.ka(a.attributes.get("IgnoreBack"), !1);
      this.H4a = u.ka(a.attributes.get("Mirrored"), !1);
      this.XK = u.H(a.attributes.get("ReadTime"), ge.nHa);
      b = a.attributes.get("WaitNotificationClose");
      this.oWa = b != null ? b : "0";
      a.attributes.get("ReadToEnd");
      this.ny = u.H(a.attributes.get("ImageScale"), 1);
      this.sUa = u.ka(a.attributes.get("BlockRaycast"), !0);
      this.ZM = u.H(a.attributes.get("ContentOffsetX"));
      this.hv = u.H(a.attributes.get("MinContentHeight"));
      b = a.attributes.get("ProfitImage");
      this.yVa = b != null ? b : null;
      this.JUa = u.ka(a.attributes.get("DisableNotificationsButtons"), !1);
      this.RB = u.H(a.attributes.get("ImageOffsetX"));
      this.eW = u.H(a.attributes.get("ImageOffsetY"));
      a.attributes.get("ImageRotation");
      b = Yy(a.attributes.get("TextOffset"));
      this.tv = b != null ? b : new H(0, 0, 0, 1);
      this.RH = u.ka(a.attributes.get("TextPosXByImage"), !0);
      b = a.attributes.get("Loot");
      this.ON = b != null ? b : "";
      b = a.attributes.get("Item");
      this.bh = b != null ? b : null;
      a = a.children;
      for (b = 0; b < a.length; ) {
        let c = a[b++],
          d = c.name;
        d == "Line" ||
        d == "LineButton" ||
        d == "DeliveryDelay" ||
        d == "PriceLine"
          ? this.Fkb(c)
          : d == "CompositeImage"
            ? this.vjb(c)
            : d == "Button"
              ? this.mjb(c)
              : d == "DifficultyOf"
                ? this.Cjb(c)
                : d == "CheckBox" && this.rjb(c);
      }
    }
    S(a) {
      this.Ie();
      super.S(a);
      this.Vt = a;
      Ib.YP = this.JUa;
      this.SD = !1;
      let b = this.Lz();
      var c = w(this, this.Bia);
      let d = this.Og != null ? this.Og.text : "dlgStoryNegative",
        e = this.sh != null ? this.sh.text : "dlgStoryPositive";
      var f = this.Ph != null ? this.Ph.text : "dlgButtonFight";
      d = ba.Rc(a, d);
      d = ba.Kz(d, a);
      e = ba.Rc(a, e);
      e = ba.Kz(e, a);
      f = ba.Rc(a, f);
      f = ba.Kz(f, a);
      var g = He.vea(this.Og, "Red"),
        h = He.vea(this.Ph);
      let k = He.vea(this.sh),
        l = this.sh != null ? e : "",
        n = this.Og != null ? d : "";
      var q = this.Ph != null ? f : "";
      f = ba.Rc(a, this.title);
      f = ba.Kz(f, a);
      var r = ba.Rc(a, this.image);
      let t = ba.Rc(a, this.yVa);
      var x = ba.Rc(a, this.bh);
      x = p.items.$b(x);
      var z = this.$pa;
      let A = z != null ? z : x != null ? x.Jv : null;
      this.H4a && (r += "|Flip");
      x = ba.dw(a, this.oWa);
      let C = null;
      z = m.l();
      let B = 0,
        D = this.lines;
      for (; B < D.length; ) {
        var F = D[B];
        ++B;
        if (F.rn != "0" && ba.dw(a, F.rn)) continue;
        F = Ej.a5a(F);
        var M = F.item;
        M != null && M != "" && (F.item = ba.Rc(a, F.item));
        M = F.Mf;
        M != null && M != "" && (F.Mf = ba.Rc(a, F.Mf));
        F.text = ba.fg(a, F.text);
        F.text = ba.Kz(F.text, a);
        F.Me != null && F.Me.I5(ba.fg(a, F.Me.Yf));
        z.push(F);
      }
      if (this.type == "Regular")
        C = Xc.sib(
          r,
          f,
          z,
          A,
          c,
          d,
          this.Og != null && this.sh != null,
          e,
          k,
          g,
          this.hv,
        );
      else if (this.type == "Stranger")
        ((C = Xc.Lia(
          new Fj(
            r,
            f,
            z,
            A,
            b,
            l,
            n,
            q,
            k,
            g,
            h,
            this.sh != null ? this.sh.icon : null,
            this.Og != null ? this.Og.icon : null,
            this.Ph != null ? this.Ph.icon : null,
            null,
            null,
            null,
            null,
            this.Ij != null,
            null,
            this.ZM,
            this.hv,
            t,
            c,
          ),
        )),
          this.ena(C));
      else if (this.type == "NoAvatar") {
        h = He.xea(this.Hg, a);
        r = z[0];
        if (f == "dlgServiceTitlePackDownload") {
          if (ma.Kg() instanceof uh) {
            c(1);
            return;
          }
          if (la.TJ().children.length == 1) {
            c(1);
            return;
          }
        }
        C = Xc.GIa(
          f,
          z.length > 0 ? ba.Kz(r.text, a) : "",
          l,
          n,
          c,
          k,
          g,
          h.j2,
          h.vP,
          h.sZ,
        );
      } else if (this.type == "Scroll") debugger;
      else if (this.type == "MultiLineScroll") debugger;
      else if (this.type == "ThreeButtons") debugger;
      else if (this.type == "Multiline") {
        a = He.xea(this.Hg, a);
        c = new Fj(
          r,
          f,
          z,
          A,
          0,
          l,
          n,
          q,
          k,
          g,
          h,
          this.sh != null ? this.sh.icon : null,
          this.Og != null ? this.Og.icon : null,
          this.Ph != null ? this.Ph.icon : null,
          !1,
          !0,
          a.j2,
          a.vP,
          this.Ij != null,
          a.sZ,
          this.ZM,
          this.hv,
          t,
          c,
        );
        if (this.wNa(c)) return;
        C = Xc.Lia(c);
        this.ena(C);
      } else if (this.type == "MultilineBig") {
        a = He.xea(this.Hg, a);
        c = new Fj(
          r,
          f,
          z,
          A,
          0,
          l,
          n,
          q,
          k,
          g,
          h,
          this.sh != null ? this.sh.icon : null,
          this.Og != null ? this.Og.icon : null,
          this.Ph != null ? this.Ph.icon : null,
          !1,
          !0,
          a.j2,
          a.vP,
          this.Ij != null,
          a.sZ,
          this.ZM,
          this.hv,
          t,
          c,
        );
        if (this.wNa(c)) return;
        C = Xc.iib(c);
      } else if (this.type == "Notification")
        ((g = this.Dab() ? l : ""),
          Ib.F().lib(r, z, c, g, k, this.XK, x, this.sUa));
      else if (this.type != "Probability")
        if (this.type == "ShowLoot") {
          a = ba.Rc(a, this.ON).split("|");
          h = m.l();
          for (r = 0; r < a.length; ) {
            q = a[r];
            ++r;
            if (q == "") continue;
            q = p.items.$b(q);
            q != null && h.push(q);
          }
          C = Xc.pib(new Yo(h, f, l, k, n, g, c));
        } else if (this.type == "ItemSetDialog") debugger;
        else if (this.type != "Native" && this.type == "MultilineTMP") {
          debugger;
          this.ena(C);
        }
      C != null
        ? (C.lMa(),
          C.jMa(this.RB),
          C.kMa(this.eW),
          C.BMa(this.tv),
          C.CMa(this.RH),
          (C.CEa = this.Vab),
          (C.SEa = !0))
        : (this.type == "Notification" && x) ||
          this.type == "Native" ||
          ((Ib.YP = !1), this.sa());
    }
    ena(a) {
      function b(d, e) {
        if (d != null) {
          d = d.actions.actions;
          var f = m.find(d, function (g) {
            return g instanceof rh;
          });
          if (f instanceof rh)
            ((d = f.Pba(c.Vt) ? new H(0, 0, 0, 1) : sc.Iz()),
              e.P5(
                (((d.z * 255) | 0) & 255) |
                  ((((d.y * 255) | 0) & 255) << 8) |
                  ((((d.x * 255) | 0) & 255) << 16),
              ));
          else if (
            ((f = m.find(d, function (g) {
              return g instanceof sg;
            })),
            f instanceof sg)
          ) {
            p.o.gga(f.qp(), f.ab(), f.PD()) || sc.Iz();
            debugger;
          } else
            ((d = m.find(d, function (g) {
              return g instanceof Hf;
            })),
              d instanceof Hf &&
                ((d = d.zZa() ? new H(0, 0, 0, 1) : sc.Iz()),
                e.P5(
                  (((d.z * 255) | 0) & 255) |
                    ((((d.y * 255) | 0) & 255) << 8) |
                    ((((d.x * 255) | 0) & 255) << 16),
                )));
        }
      }
      let c = this;
      a != null &&
        (a.xi != null &&
          (a.xi.Wg(this.Og != null && this.Og.dA), b(this.Og, a.xi)),
        a.pj != null &&
          (a.pj.Wg(this.sh != null && this.sh.dA), b(this.sh, a.pj)),
        a.Lk != null &&
          (a.Lk.Wg(this.Ph != null && this.Ph.dA), b(this.Ph, a.Lk)));
    }
    Ie() {
      var a = this.Og;
      a != null && a.actions.Vg();
      a = this.sh;
      a != null && a.actions.Vg();
      a = this.Ph;
      a != null && a.actions.Vg();
      a = this.Ij;
      a != null && a.actions.Vg();
      m.forEach(this.tma, function (b) {
        b != null && b.actions.Vg();
      });
      this.cka();
    }
    wNa(a) {
      let b;
      switch (a.i4) {
        case "img_starter_pack_dark_chest":
          b = "Premium_Pack_Zone2";
          break;
        case "premium_pack_zone1":
          b = "Premium_Pack_Zone1";
          break;
        case "starter_pack2":
          b = "Pack_Starter";
          break;
        case "starter_pack_zone3":
          b = "Premium_Pack_Zone3";
          break;
        case "starter_pack_zone4":
          b = "Premium_Pack_Zone4";
          break;
        case "starter_pack_zone5":
          b = "Premium_Pack_Zone5";
          break;
        case "starter_pack_zone6":
          b = "Premium_Pack_Zone6";
          break;
        default:
          b = null;
      }
      if (b != null) {
        let c = Qb.find(L.J.au, function (d) {
          return Kb.Ve(d, "sku") == b;
        });
        if (c != null) {
          let d = a.tk[a.tk.length - 1];
          d.text = d.text.replace(
            RegExp("{\\$[\\d\\.]+}", ""),
            "{" + K.T(Kb.Ve(c, "displayPrice")) + "}",
          );
        }
      }
      if (la.flags.EK != null && la.flags.EK == b) {
        if (
          Qb.Fe(a.tk, function (c) {
            return c.text.indexOf("dlgStarterPackOffer") != -1;
          })
        ) {
          let c = this;
          Rg.Zha(function () {
            c.Bia(0);
          });
          return !0;
        }
        if (
          Qb.Fe(a.tk, function (c) {
            return c.text == "dlgStarterPackRefusal";
          })
        ) {
          let c = this;
          Rg.Zha(function () {
            c.Bia(1);
          });
          return !0;
        }
      }
      return !1;
    }
    Fkb(a) {
      var b = a.name;
      let c = new Ej();
      var d = a.attributes.get("Hide");
      c.rn = d != null ? d : "0";
      d = a.attributes.get("Text");
      c.text = d != null ? d : "";
      d = a.attributes.get("ButtonText");
      c.NC = d != null ? d : "";
      c.Kba = u.H(a.attributes.get("ButtonHeight"), -1);
      d = a.attributes.get("ButtonUrl");
      c.Lba = d != null ? d : "";
      d = a.attributes.get("FontName");
      c.font = d != null ? d : "";
      c.fontSize = u.I(a.attributes.get("FontSize"), -1);
      d = a.attributes.get("Item");
      c.item = d != null ? d : "";
      d = a.attributes.get("Enchantment");
      c.Mf = d != null ? d : "";
      c.UC = u.ka(a.attributes.get("CheckTimer"), !1);
      c.nha = u.ka(a.attributes.get("Italic"), !1);
      c.offsetX = u.I(a.attributes.get("OffsetX"));
      c.offsetY = u.I(a.attributes.get("OffsetY"));
      c.contentType = b == "PriceLine" ? 1 : b == "LineButton" ? 2 : 0;
      b = a.attributes.get("TextColor");
      b = b != null ? b : "";
      qd(b, "0x") || (b = "0x" + b);
      b == "0x" && (b = "0x0");
      b = K.parseInt(b);
      b != 0 && (c.$I = Oa.dd(b));
      b = a.children;
      for (d = 0; d < b.length; ) {
        var e = b[d++];
        e.name == "Timer" && (c.Me = this.Gkb(e));
      }
      if (c.item != null || c.Mf != null) {
        b = new uv();
        b.actions.Tc.addListener(w(this, this.hf));
        b.id = this.vOa++;
        c.id = b.id;
        a = a.children;
        for (d = 0; d < a.length; )
          ((e = a[d++]), b.actions.Yl(Fe.Jj(e.name, this.eF, this.z4, e)));
        this.tma.push(b);
      }
      this.lines.push(c);
    }
    vjb(a) {
      this.$pa = new eh(a);
    }
    mjb(a) {
      var b = a.attributes.get("Type");
      b = b != null ? b : "";
      var c = a.attributes.get("Text");
      c = c != null ? c : "";
      var d = a.attributes.get("Color");
      d = d != null ? d : "";
      let e = u.ka(a.attributes.get("Flashing"), !1);
      var f = a.attributes.get("Icon");
      f = f != null ? f : "";
      let g = null;
      if (b != null)
        switch (b) {
          case "Close":
            g = this.Ij = new vh();
            break;
          case "Left":
            g = this.Og = new vh();
            break;
          case "Middle":
            g = this.Ph = new vh();
            break;
          case "Right":
            g = this.sh = new vh();
        }
      g != null &&
        ((g.dA = e),
        (g.text = c),
        (g.icon = f),
        (g.color = d),
        g.actions.Tc.addListener(w(this, this.hf)),
        this.Yl(a, g.actions));
    }
    Cjb(a) {
      a = a.attributes.get("Fight");
      this.hda = a != null ? a : "";
    }
    rjb(a) {
      this.Hg = new vv();
      var b = a.attributes.get("InitialValue");
      this.Hg.initialValue = b != null ? b : "";
      b = a.attributes.get("Text");
      this.Hg.text = b != null ? b : "";
      b = a.attributes.get("ShowButtonsMode");
      this.Hg.kNa = b != null ? b : "";
      b = a.attributes.get("AlignMiddle");
      this.Hg.dP = (b != null ? b : "0") == "1";
      a = a.children;
      for (b = 0; b < a.length; ) {
        let c = a[b++],
          d = c.name;
        d == "On"
          ? this.Yl(c, this.Hg.rY)
          : d == "Off" && this.Yl(c, this.Hg.qY);
      }
    }
    Gkb(a) {
      var b = a.attributes.get("Name");
      let c = b != null ? b : "";
      b = new Gj();
      b.color = Z.h7;
      b.Bt = u.ka(a.attributes.get("ShowDays"));
      c == "EnergyRefillTimer"
        ? (b.Rv = ((T = p.F()), w(T, T.$3a)))
        : c == "DuelAccessibilityTimer"
          ? (b.Rv = ((T = p.F()), w(T, T.A3a)))
          : c == "DeliveryTimer"
            ? ((b.Rv = ((T = p.F()), w(T, T.W2a))),
              (a = a.attributes.get("Item")),
              b.I5(p.vf(a != null ? a : "")))
            : c == "StarterPackTimer"
              ? (b.Rv = ((T = p.F()), w(T, T.Twb)))
              : ((b.Rv = ((T = p.F()), w(T, T.u2a))), b.I5(c));
      b.Ala(null);
      return b;
    }
    cka() {
      this.Hg != null && (this.Hg.rY.Vg(), this.Hg.qY.Vg());
    }
    Lz() {
      var a = -1;
      if (this.hda != "") {
        var b = new oc(),
          c = new yb();
        c.kk(this.Vt);
        c.fc(this.hda, b);
        c = new ib();
        c.clear();
        c.mj(b.Rh);
        b = p.bw(c);
        b != null && ((a = v.KQ(b.ct)), (a = b.Lz(v.hw(), a)));
      }
      return a;
    }
    Dab() {
      return (this.Og != null && this.Og.actions.actions.length > 0) ||
        (this.sh != null && this.sh.actions.actions.length > 0) ||
        (this.Ph != null && this.Ph.actions.actions.length > 0) ||
        (this.Ij != null && this.Ij.actions.actions.length > 0) ||
        (this.Hg != null && this.Hg.rY.actions.length > 0)
        ? !0
        : this.Hg != null
          ? this.Hg.qY.actions.length > 0
          : !1;
    }
    Bia(a) {
      this.SD || this.zhb(a != null ? a : 0);
    }
    zhb(a) {
      if (a == 0 && this.Og != null)
        ((this.SD = !0), this.Og.actions.S(this.Vt));
      else if (a == 0 && this.Og == null)
        ((this.SD = !0), (Ib.YP = !1), this.sa());
      else if (a == 1 && this.sh != null)
        ((this.SD = !0), this.sh.actions.S(this.Vt));
      else if (a == 2 && this.Ph != null)
        ((this.SD = !0), this.Ph.actions.S(this.Vt));
      else if (a == 100 && this.Ij != null) {
        debugger;
        this.SD = !0;
        this.Ij.actions.S(this.Vt);
      } else if (a == 3 && this.Hg != null) (this.Hg.rY.S(this.Vt), this.cka());
      else if (a == 4 && this.Hg != null) (this.Hg.qY.S(this.Vt), this.cka());
      else if (a < this.vOa) {
        let b = m.find(this.tma, function (c) {
          return c.id == a;
        });
        b != null && b.actions.S(this.Vt);
      }
    }
    hf() {
      Ib.YP = !1;
      this.sa();
    }
    Yl(a, b) {
      a = a.children;
      let c = 0;
      for (; c < a.length; ) {
        let d = a[c++];
        b.Yl(Fe.Jj(d.name, this.eF, this.z4, d));
      }
    }
    static xea(a, b) {
      let c = new tv();
      c.j2 = a != null;
      c.vP = !1;
      c.sZ = a != null ? a.text : "";
      c.U_a = a != null ? a.kNa : "";
      c.dP = !1;
      if (a != null) {
        c.dP = a.dP;
        let d = new oc(),
          e = new yb();
        e.kk(b);
        e.fc(a.initialValue, d);
        a = d.Je - 1;
        c.vP = a > 0 ? a < 0.01 : -a < 0.01;
      }
      return c;
    }
    static vea(a, b) {
      b == null && (b = "Beige");
      return a != null && a.color != "" ? oz.ji(a.color) : oz.ji(b);
    }
  }
  He.g = "1E4";
  He.u = S;
  Object.assign(He.prototype, { j: He });
  class vh {
    constructor() {
      this.icon = null;
      this.dA = !1;
      this.color = "";
      this.actions = new Yb();
      this.text = "";
    }
  }
  vh.g = "1E5";
  Object.assign(vh.prototype, { j: vh });
  class uv {
    constructor() {
      this.actions = new Yb();
      this.id = 0;
    }
  }
  uv.g = "1E6";
  Object.assign(uv.prototype, { j: uv });
  class vv {
    constructor() {
      this.qY = new Yb();
      this.rY = new Yb();
      this.kNa = this.initialValue = this.text = "";
      this.dP = !0;
    }
  }
  vv.g = "1E7";
  Object.assign(vv.prototype, { j: vv });
  class Tn extends S {
    constructor() {
      super();
      this.bh = "";
      this.Fra = this.tqa = "0";
      this.Dta = this.Y9 = this.xsa = this.Qsa = "";
    }
    parse(a) {
      debugger;
      super.parse(a);
      var b = a.attributes.get("Item");
      this.bh = b != null ? b : "";
      b = a.attributes.get("Percent");
      this.tqa = b != null ? b : "";
      b = a.attributes.get("Toggle");
      this.Fra = b != null ? b : "";
      b = a.attributes.get("NewAmount");
      this.xsa = b != null ? b : "0";
      b = a.attributes.get("NewPrice");
      this.Y9 = b != null ? b : "";
      b = a.attributes.get("Period");
      this.Qsa = b != null ? b : "0";
      a = a.attributes.get("Sale");
      this.Dta = a != null ? a : "";
    }
    S(a) {
      debugger;
      super.S(a);
      var b = new ja(null);
      let c = new ja(!1);
      var d = new ja(!1),
        e = new ja(0),
        f = new ja(0),
        g = new ja(0),
        h = new ja(0);
      let k = new ja("");
      this.getParameters(a, b, f, e, c, g, h, k, d);
      a = Math.trunc(ed.getTimezoneOffset());
      a = h.G > 0 ? p.Dc + h.G + a : 0;
      if (b.G != null) {
        if (c.G)
          if (f.G < 0)
            b.G.Np == null &&
              ((f = b.G.kf),
              (f = new zf(f == null || f == "" ? "" : b.G.kf, "", a, g.G, k.G)),
              (f.e5 = d.G),
              e.G > 0 &&
                ((d = ((100 - e.G) / 100) * b.G.Yfa()),
                (f.OA = d == null ? "null" : "" + d),
                (f.$P = K.T(e))),
              (f.mE = h.G > 0),
              (b.G.Np = f));
          else {
            if (X.Xa(b.G.oB, f.G) && b.G.OQ(f.G) != null) {
              var l = b.G.kf;
              let n = l == null || l == "" ? "#internalQuest#" : b.G.kf;
              l = b.G.OQ(f.G).Yfa() * ((100 - e.G) / 100);
              g = new zf(n, "#internalQuest#", a, g.G, k.G);
              g.OA = l == null ? "null" : "" + l;
              g.$P = K.T(e);
              g.mE = h.G > 0;
              g.e5 = d.G;
              b.G.oB.set(f.G, g);
            }
          }
        else f.G < 0 ? b.G.N4() : b.G.Unb(f.G);
        p.o.xa.Au();
        e = Ma.get();
        e != null &&
          ((h = e.Za.zt()),
          h != null && h.name == b.G.name && e.refresh(),
          c.G || ((b = e.Za.W5a(b.G.name)), b != null && b.N4()));
      }
      this.sa();
    }
    getParameters(a, b, c, d, e, f, g, h, k) {
      let l = new oc(),
        n = new yb();
      n.kk(a);
      n.fc(this.bh, l);
      let q = (a = ""),
        r = l.toString().split("|"),
        t = r.length;
      t > 0 && (a = r[0]);
      t >= 2 && (q = r[1]);
      q != "" ? (n.fc(q, l), (c.G = l.Je | 0)) : (c.G = -1);
      l.clear();
      n.fc(this.tqa, l);
      d.G = l.Je;
      l.clear();
      n.fc(this.Fra, l);
      e.G = l.Je > 0;
      l.clear();
      n.fc(this.xsa, l);
      f.G = Math.trunc(l.Je);
      l.clear();
      n.fc(this.Qsa, l);
      g.G = Math.trunc(l.Je);
      l.clear();
      n.fc(this.Y9, l);
      h.G =
        this.Y9 != "" && l.iE() ? (l.Je == null ? "null" : "" + l.Je) : l.Rh;
      l.clear();
      n.fc(this.Dta, l);
      k.G = l.Je > 0;
      b.G = p.items.$b(a);
    }
  }
  Tn.g = "1E8";
  Tn.u = S;
  Object.assign(Tn.prototype, { j: Tn });
  class Un extends S {
    constructor() {
      super();
      this.iq = new Yb();
      this.no = new Yb();
      this.Zx = this.qH = null;
    }
    parse(a) {
      super.parse(a);
      let b = a.attributes.get("Pack");
      this.qH = b != null ? b : null;
      a.attributes.get("ProgressBarTitle");
      this.Zx = null;
      this.Ss(a.A("Success"), this.iq, w(this, this.hf));
      this.Ss(a.A("Error"), this.no, w(this, this.hf));
    }
    hf() {
      this.Zx.isReload && (Mc.F().Xha = !0);
      this.sa();
    }
    Ie() {
      super.Ie();
      this.iq.Vg();
      this.no.Vg();
    }
    S(a) {
      this.Ie();
      super.S(a);
      let b = ba.Rc(a, this.qH);
      this.Zx = hd.F().wm.NQ(b);
      this.Zx == null
        ? this.no.S(a)
        : Ld.cwb &&
          (Mc.F().vXa(
            this.Zx.name,
            this.Zx.url,
            ug.version.toString(),
            this.Zx.ei,
            this.Zx.hash,
          ),
          this.iq.S(a));
    }
  }
  Un.g = "1E9";
  Un.u = S;
  Object.assign(Un.prototype, { j: Un });
  class Vn extends S {
    constructor() {
      super();
      this.UL = null;
    }
    parse(a) {
      super.parse(a);
      a = a.attributes.get("Name");
      this.UL = a != null ? a : "";
    }
    S(a) {
      super.S(a);
      a = p.o;
      a != null && a.Bl.Q4(this.UL);
      this.sa();
    }
  }
  Vn.g = "1EA";
  Vn.u = S;
  Object.assign(Vn.prototype, { j: Vn });
  class Wn extends S {
    constructor() {
      super();
      this.Ba = null;
    }
    parse(a) {
      super.parse(a);
      a = a.attributes.get("Name");
      this.Ba = a != null ? a : "";
    }
    S(a) {
      super.S(a);
      ha.F().hca();
      var b = new oc();
      let c = new yb();
      c.kk(a);
      c.fc(this.Ba, b);
      a = K.T(b);
      b = new ib();
      b.clear();
      b.mj(a);
      a = p.bw(b);
      a != null ? v.Bm(a) : xa.F().rp(3);
      this.sa();
    }
  }
  Wn.g = "1EB";
  Wn.u = S;
  Object.assign(Wn.prototype, { j: Wn });
  class Xn extends S {
    constructor() {
      super();
      this.Pi = this.iy = null;
    }
    parse(a) {
      super.parse(a);
      a = a.attributes.get("Delay");
      this.iy = a != null ? a : "0";
    }
    S(a) {
      super.S(a);
      if (ca.Ka() != null)
        if (((a = ba.Oj(a, this.iy)), a > 0)) {
          let b = ca.Ka();
          this.Pi = new Re(function () {
            b.oD(!1);
          }, a);
        } else ca.Ka().oD(!1);
      this.sa();
    }
  }
  Xn.g = "1EC";
  Xn.u = S;
  Object.assign(Xn.prototype, { j: Xn });
  class Yn extends S {
    constructor() {
      super();
      this.v$ = null;
    }
    parse(a) {
      debugger;
      super.parse(a);
      a.attributes.get("PlayerLife") != null
        ? ((a = a.attributes.get("PlayerLife")), (a = a != null ? a : "1"))
        : (a = null);
      this.v$ = a;
    }
    S(a) {
      debugger;
      super.S(a);
      ca.Ka() != null && ca.Ka().eL(this.v$ != null ? ba.Oj(a, this.v$) : null);
      this.sa();
    }
  }
  Yn.g = "1ED";
  Yn.u = S;
  Object.assign(Yn.prototype, { j: Yn });
  class Zn extends S {
    constructor() {
      super();
    }
    S(a) {
      debugger;
      super.S(a);
      a = !1;
      let b = new Ia(),
        c = 0,
        d = p.o.xa.items;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        let f = !1,
          g = 0,
          h = e.be;
        for (; g < h.length; )
          if (h[g++].zma("Aspect")) {
            let k;
            if (li(b.G) && ((k = parseFloat(b.G)), k == 0)) {
              f = !0;
              break;
            }
          }
        f && ((a = !0), e.aP());
      }
      a && p.o.save();
      this.sa();
    }
  }
  Zn.g = "1EE";
  Zn.u = S;
  Object.assign(Zn.prototype, { j: Zn });
  class $n extends S {
    constructor() {
      super();
      this.Ba = null;
    }
    parse(a) {
      super.parse(a);
      a = a.attributes.get("Name");
      this.Ba = a != null ? a : "";
    }
    S(a) {
      super.S(a);
      a = ha.F().FD(this.Ba);
      a != null && ha.F().$aa(a, !0);
      this.sa();
    }
  }
  $n.g = "1EF";
  $n.u = S;
  Object.assign($n.prototype, { j: $n });
  class Aj extends S {
    constructor() {
      super();
      this.o9 = this.YG = !1;
      this.Vl = null;
      this.Qg = m.l();
      this.rq = -1;
      this.size = 0;
      this.type = this.name = this.parameters = null;
      this.CIa = this.BIa = !1;
    }
    parse(a) {
      super.parse(a);
      var b = a.attributes.get("Type");
      this.type = Aj.getType(b != null ? b : null);
      b = a.attributes.get("Name");
      this.name = b != null ? b : "";
      this.BIa = u.ka(a.attributes.get("OnlyActiveBattles"));
      this.CIa = u.ka(a.attributes.get("NonRaidBattles"));
    }
    S(a) {
      super.S(a);
      this.rq = -1;
      this.size = 0;
      this.parameters = a;
      this.Vl = ha.F().FD(this.name);
      this.I0a();
      this.size = this.Qg.length;
      this.YG = !0;
      this.sLa();
    }
    I0a() {
      this.Qg.length = 0;
      switch (this.type) {
        case 1:
          this.vpb();
          break;
        case 2:
          this.oLa(!1);
          break;
        case 3:
          this.oLa(!0);
          break;
        case 4:
          this.Cpb();
          break;
        case 5:
          this.opb();
          break;
        case 6:
          this.rpb();
          break;
        case 7:
          this.sF();
          break;
        case 8:
          this.sF(function (a) {
            return a.rc.state == "NotStarted";
          });
          break;
        case 9:
          this.sF(function (a) {
            return a.rc.state == "JustStarted";
          });
          break;
        case 10:
          this.sF(function (a) {
            return a.rc.state == "Active";
          });
          break;
        case 11:
          this.sF(function (a) {
            return a.rc.state == "Purchased";
          });
          break;
        case 12:
          this.sF(function (a) {
            return a.rc.state == "LastChance";
          });
          break;
        case 13:
          this.sF(function (a) {
            return a.rc.state == "End";
          });
          break;
        case 14:
          this.Bpb(this.parameters);
      }
    }
    sLa() {
      for (this.o9 = !0; this.YG; ) this.Sh();
      this.o9 = !1;
    }
    Sh() {
      this.YG = !1;
      this.rq++;
      this.Vl == null || this.rq > this.size - 1
        ? (this.type == 2 || this.type == 3
            ? (p.o.xa.uK.removeListener(w(this, this.uK)),
              this.type == 2
                ? (p.o.xa.l_.length = 0)
                : this.type == 3 && (p.o.xa.m_.length = 0))
            : this.type == 6 &&
              (p.o.xa.vK.removeListener(w(this, this.vK)), p.o.xa.k0a()),
          this.sa(),
          (this.YG = !1))
        : ((this.parameters.iterator = this.Qg[this.rq]),
          this.Vl.compare(this.parameters)
            ? (this.Vl.sK.addListener(w(this, this.Rt)),
              this.Vl.rF(this.parameters, !1))
            : (this.YG = !0));
    }
    Rt(a) {
      a.sK.removeListener(w(this, this.Rt));
      this.YG = !0;
      this.o9 || this.sLa();
    }
    vpb() {
      let a = 0,
        b = p.o.xa.items;
      for (; a < b.length; ) this.Qg.push(b[a++].ab());
    }
    oLa(a) {
      let b = 0;
      for (a = a ? p.o.xa.m_ : p.o.xa.l_; b < a.length; )
        this.Qg.push(a[b++].ab());
      p.o.xa.uK.addListener(w(this, this.uK));
    }
    Cpb() {
      debugger;
      let a = p.items.Kp;
      if (a != null) {
        let b = 0;
        for (; b < a.length; ) this.Qg.push(a[b++].name);
      }
    }
    rpb() {
      let a = p.o,
        b = 0,
        c = a.xa.eda;
      for (; b < c.length; ) this.Qg.push(c[b++].jDa());
      a.xa.vK.addListener(w(this, this.vK));
    }
    opb() {
      debugger;
      let a = 0,
        b = p.F().Lm;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        (this.BIa && !c.isActive) ||
          (this.CIa && c.type == "FightRaid") ||
          this.Qg.push(c.YQ());
      }
    }
    sF(a) {
      debugger;
      let b = this;
      m.forEach(
        m.tj(p.Hw.Mt, function (c) {
          return a != null ? a(c) : !0;
        }),
        function (c) {
          b.Qg.push(c.ab());
        },
      );
    }
    Bpb(a) {
      a.wm != null && m.addRange(this.Qg, a.wm);
    }
    uK(a) {
      debugger;
      ((this.type == 2 && !a.Qz()) || (this.type == 3 && a.Qz())) &&
        this.Qg.push(a.ab());
      this.size = this.Qg.length;
    }
    vK(a) {
      debugger;
      this.type == 6 && (this.Qg.push(a.jDa()), (this.size = this.Qg.length));
    }
    static getType(a) {
      switch (a) {
        case "ActiveOffers":
          return 10;
        case "Battles":
          return 5;
        case "DeliveryEnchantments":
          return 6;
        case "DeliveryItems":
          return 2;
        case "DeliveryUpgrades":
          return 3;
        case "EndedOffers":
          return 13;
        case "Items":
          return 1;
        case "JustStartedOffers":
          return 9;
        case "LastChanceOffers":
          return 12;
        case "NotStartedOffers":
          return 8;
        case "Offers":
          return 7;
        case "Packs":
          return 14;
        case "PaidItems":
          return 4;
        case "PurchasedOffers":
          return 11;
        default:
          return 0;
      }
    }
  }
  Aj.g = "1F0";
  Aj.u = S;
  Object.assign(Aj.prototype, { j: Aj });
  class ao extends S {
    constructor() {
      super();
      this.uC = this.Mb = this.uc = null;
    }
    parse(a) {
      super.parse(a);
      var b = a.attributes.get("Type");
      this.uc = b != null ? b : "";
      b = a.attributes.get("Value");
      this.Mb = b != null ? b : "";
      a = a.attributes.get("Sound");
      this.uC = a != null ? a : "";
    }
    S(a) {
      debugger;
      super.S(a);
      a = p.o;
      let b = new ja(""),
        c = new ja(0);
      this.Dfa(b, c);
      b.G == "Gold"
        ? a.Kr(a.Ob + c.G)
        : b.G == "Bonus"
          ? a.xl(a.gd + c.G, 6)
          : b.G != "" && a.ZH(b.G, c.G);
      a = this.uC;
      a != null && a != "" && ua.bk(this.uC, null, 1);
      this.sa();
    }
    Dfa(a, b) {
      let c = new oc(),
        d = new yb();
      d.kk(this.ta);
      d.fc(this.uc, c);
      a.G = c.toString();
      c.clear();
      d.fc(this.Mb, c);
      b.G = Math.trunc(c.Je);
    }
  }
  ao.g = "1F1";
  ao.u = S;
  Object.assign(ao.prototype, { j: ao });
  class bo extends S {
    constructor() {
      super();
      this.Kqa = this.JN = this.cta = "";
      this.Ksa = !1;
    }
    parse(a) {
      super.parse(a);
      var b = a.attributes.get("Name");
      this.JN = b != null ? b : "";
      b = a.attributes.get("PutOn");
      this.Kqa = b != null ? b : "";
      b = a.attributes.get("Quantity");
      this.cta = b != null ? b : "";
      this.Ksa = u.ka(a.attributes.get("PackItem"));
    }
    S(a) {
      super.S(a);
      var b = mi(ba.Rc(a, this.JN), "|");
      let c = b.length > 0 ? b[0] : "";
      b = b.length > 1 ? K.parseInt(b[1]) : 0;
      let d = ba.dw(a, this.Kqa);
      Pa.rab(c, b, ba.iCa(a, this.cta), d, this.Ksa);
      this.sa();
    }
  }
  bo.g = "1F2";
  bo.u = S;
  Object.assign(bo.prototype, { j: bo });
  class co extends S {
    constructor() {
      super();
      this.Rsa = this.JN = "";
    }
    parse(a) {
      super.parse(a);
      let b = a.attributes.get("ItemName");
      this.JN = b != null ? b : "";
      a = a.attributes.get("PerkName");
      this.Rsa = a != null ? a : "";
    }
    S(a) {
      debugger;
      super.S(a);
      if (p.o != null) {
        var b = ba.Rc(a, this.JN),
          c = p.items.$b(b);
        c != null &&
          ((b = p.vf(c.name)),
          b != null &&
            ((a = this.S6a(c, ba.Rc(a, this.Rsa))),
            a != null &&
              a.length != 0 &&
              (b.tY(a, p.o.bb()), p.o.save(), this.sa())));
      }
    }
    S6a(a, b) {
      debugger;
      let c = m.l(),
        d = 0;
      for (a = a.pz; d < a.length; ) {
        let e = a[d];
        ++d;
        if (e.name == b) {
          c.push(e);
          break;
        }
      }
      return c;
    }
  }
  co.g = "1F3";
  co.u = S;
  Object.assign(co.prototype, { j: co });
  class eo extends S {
    constructor() {
      super();
      this.ga = this.Eo = this.NM = null;
    }
    parse(a) {
      super.parse(a);
      var b = a.attributes.get("ApplyTo");
      this.NM = b != null ? b : "";
      b = a.attributes.get("Item");
      this.Eo = b != null ? b : "";
      this.ga = a.xt().clone();
    }
    Zxa(a, b) {
      var c = a.attributes.entries();
      let d = c.next();
      for (; !d.done; ) {
        let e = d.value;
        d = c.next();
        b.set(e[0], e[1]);
      }
      a = a.children;
      for (c = 0; c < a.length; ) b.Ts(a[c++].clone());
    }
    S(a) {
      super.S(a);
      let b = new oc(),
        c = new yb();
      c.kk(a);
      b.clear();
      c.fc(this.NM, b);
      switch (b.toString()) {
        case "Item":
          this.iXa(b, c);
          break;
        case "Player":
          this.BXa(b, c);
      }
      this.sa();
    }
    BXa(a, b) {
      debugger;
      let c = new Rb(this.ga.name);
      this.Zxa(this.ga, c);
      this.Oba(c, a, b);
      this.W1a(c);
    }
    Oba(a, b, c) {
      a = a.children;
      let d = 0;
      for (; d < a.length; ) {
        let f = a[d++],
          g = f.attributes.entries(),
          h = g.next();
        for (; !h.done; ) {
          var e = h.value;
          h = g.next();
          let k = e[0];
          e = e[1];
          b.clear();
          c.fc(e, b);
          f.set(k, b.toString());
        }
        this.Oba(f, b, c);
      }
    }
    W1a(a) {
      debugger;
      a = a.children;
      let b = 0;
      for (; b < a.length; ) {
        let d = a[b++];
        var c = d.attributes.get("Name");
        c = c != null ? c : "";
        let e = u.I(d.attributes.get("Level"), 0),
          f = u.I(d.attributes.get("UpgradeLevel"), 0);
        if (this.x8a(c) != null) {
          let g = new Ht();
          g.name = c;
          g.level = e;
          g.Vc = f;
          this.vkb(d, g);
          p.o.fo.d2a(g);
        }
      }
    }
    vkb(a, b) {
      debugger;
      a = a.A("Set");
      if (a != null) {
        a = a.attributes.entries();
        for (var c = a.next(); !c.done; ) {
          let d = c.value;
          c = a.next();
          b.nl.set(d[0], d[1]);
        }
      }
    }
    x8a(a) {
      debugger;
      let b = v.Sg.J9a();
      b == null && (b = v.Sg.M8a());
      b == null && (b = v.Sg.ln(a));
      return b;
    }
    iXa(a, b) {
      let c = new Rb(this.ga.name);
      this.Zxa(this.ga, c);
      this.Oba(c, a, b);
      a.clear();
      b.fc(this.Eo, a);
      Pa.rDa(a.toString(), this.Ujb(c));
    }
    Ujb(a) {
      let b = m.l();
      b.push(xe.Qd(a));
      return b;
    }
  }
  eo.g = "1F4";
  eo.u = S;
  Object.assign(eo.prototype, { j: eo });
  class fo extends S {
    constructor() {
      super();
    }
    parse(a) {
      super.parse(a);
    }
    S(a) {
      debugger;
      super.S(a);
      this.sa();
    }
  }
  fo.g = "1F5";
  fo.u = S;
  Object.assign(fo.prototype, { j: fo });
  class go extends S {
    constructor() {
      super();
      this.Ba = "";
    }
    parse(a) {
      super.parse(a);
      a = a.attributes.get("Name");
      this.Ba = a != null ? a : "";
    }
    S(a) {
      super.S(a);
      a = ba.Rc(a, this.Ba);
      Vb.F().DKa(a);
      this.sa();
    }
  }
  go.g = "1F6";
  go.u = S;
  Object.assign(go.prototype, { j: go });
  class uo extends S {
    constructor() {
      super();
      this.Bpa = "";
      this.CG = 0;
    }
    parse(a) {
      let b = a.attributes.get("Battle");
      this.Bpa = b != null ? b : "";
      this.CG = u.H(a.attributes.get("Frames"), 0) / 60;
    }
    S(a) {
      super.S(a);
      p.o.u5(ba.Rc(a, this.Bpa));
      a = p.o.Ds;
      let b = Ya.get();
      if (b != null) {
        let c = p.bw(a);
        c != null ? b.Bqb(c, this.CG) : b.Yw(p.Wk(a), this.CG);
      }
      this.sa();
    }
  }
  uo.g = "1F7";
  uo.u = S;
  Object.assign(uo.prototype, { j: uo });
  class Bo extends S {
    constructor() {
      super();
    }
    S(a) {
      super.S(a);
      this.sa();
    }
  }
  Bo.g = "1F8";
  Bo.u = S;
  Object.assign(Bo.prototype, { j: Bo });
  class sh extends S {
    constructor() {
      super();
      this.iba = this.hba = this.url = null;
    }
    parse(a) {
      super.parse(a);
      let b = a.attributes.get("URL");
      this.url = b != null ? b : null;
      a = a.attributes.get("ALT_URL");
      this.hba = a != null ? a : null;
    }
    S(a) {
      super.S(a);
      var b = this.url;
      if (b != null && b != "") {
        b = new oc();
        var c = new yb();
        c.kk(a);
        c.fc(this.url, b);
        b = b.toString();
        b != null && b != "" && L.J.HIa(b);
      }
      b = this.hba;
      b != null &&
        b != "" &&
        ((b = new oc()),
        (c = new yb()),
        c.kk(a),
        c.fc(this.hba, b),
        (a = this.iba = b.toString()),
        a != null && a != "" && wh.delay(w(this, this.Dwb), Ld.hib));
      this.sa();
    }
    Dwb() {
      L.J.HIa(this.iba);
    }
  }
  sh.g = "1F9";
  sh.u = S;
  Object.assign(sh.prototype, { j: sh });
  class jo extends sh {
    constructor() {
      super();
    }
    parse(a) {
      super.parse(a);
    }
    S(a) {
      super.S(a);
    }
  }
  jo.g = "1FA";
  jo.u = sh;
  Object.assign(jo.prototype, { j: jo });
  class ko extends S {
    constructor() {
      super();
      this.Eo = this.pua = "";
      this.qG = !0;
      this.wO = 0;
      this.bh = "";
      this.M8 = this.ib = null;
    }
    parse(a) {
      super.parse(a);
      var b = a.attributes.get("Tab");
      this.pua = b != null ? b : "";
      b = a.attributes.get("Item");
      this.Eo = b != null ? b : "";
      this.qG = u.ka(a.attributes.get("CallEvents"), !0);
      a = a.attributes.get("FlashingButtons");
      this.M8 = a != null ? a : "";
    }
    S(a) {
      this.wO = wj.L0(ba.Rc(a, this.pua));
      this.bh = ba.Rc(a, this.Eo);
      this.ib = p.items.$b(this.bh);
      super.S(a);
      this.oib();
    }
    oib() {
      let a = Ma.get();
      if (a != null && this.wO != 0)
        (a.JLa(this.wO, this.bh), a.ac.content.gMa(this.M8), this.sa());
      else if (xa.F().Td.Wf == 4) {
        debugger;
        xa.F().Tf.addListener(w(this, this.qIa));
      } else
        (xa.F().Tf.addListener(w(this, this.Tf)),
          xa.F().rp(4, new Hj(this.wO, this.ib), null, this.qG) || this.sa());
    }
    qIa() {
      debugger;
      let a = Ma.get();
      a != null && (a.JLa(this.wO, this.bh), a.ac.content.gMa(this.M8));
      xa.F().Tf.removeListener(w(this, this.qIa));
      this.sa();
    }
    Tf() {
      xa.F().Tf.removeListener(w(this, this.Tf));
      this.sa();
    }
  }
  ko.g = "1FB";
  ko.u = S;
  Object.assign(ko.prototype, { j: ko });
  class lo extends S {
    constructor() {
      super();
    }
    S(a) {
      super.S(a);
      Gb.reset(!1);
      this.sa();
    }
  }
  lo.g = "1FC";
  lo.u = S;
  Object.assign(lo.prototype, { j: lo });
  class En extends S {
    constructor() {
      super();
    }
    S(a) {
      debugger;
      super.S(a);
      p.o.save(!0);
      this.sa();
    }
  }
  En.g = "1FD";
  En.u = S;
  Object.assign(En.prototype, { j: En });
  class mo extends S {
    constructor() {
      super();
    }
    S(a) {
      debugger;
      super.S(a);
      p.Hw.n_a();
      this.sa();
    }
  }
  mo.g = "1FE";
  mo.u = S;
  Object.assign(mo.prototype, { j: mo });
  class no extends S {
    constructor() {
      super();
      this.Ny = new Yb();
      this.Av = new Yb();
    }
    parse(a) {
      super.parse(a);
      let b = a.A("Success");
      a = a.A("Error");
      this.Ss(b, this.Ny, w(this, this.Yfb));
      this.Ss(a, this.Av, w(this, this.hf));
    }
    S(a) {
      this.Ie();
      super.S(a);
      let b = 0,
        c = 0,
        d = p.o.qF;
      for (; c < d.length; ) {
        var e = d[c];
        ++c;
        this.eF != e.name &&
          e.parameters != null &&
          ((e = ha.F().FD(e.name)), e == null || e.eFa() || ++b);
      }
      b != 0 || ($d.$o != 11 && $d.$o != 0 && $d.$o != 2 && $d.$o != 8)
        ? this.Ny.S(a)
        : this.Av.S(a);
    }
    hf() {
      this.sa();
    }
    Yfb() {
      this.sa();
      p.o.Hpb();
    }
    Ie() {
      this.Ny.Vg();
      this.Av.Vg();
    }
  }
  no.g = "1FF";
  no.u = S;
  Object.assign(no.prototype, { j: no });
  class oo extends S {
    constructor() {
      super();
      this.Vl = this.Ba = null;
    }
    parse(a) {
      super.parse(a);
      a = a.attributes.get("Name");
      this.Ba = a != null ? a : null;
    }
    Ie() {
      super.Ie();
      this.Vl != null &&
        (this.Vl.sK.removeListener(w(this, this.Rt)), (this.Vl = null));
    }
    S(a) {
      super.S(a);
      let b = ba.fg(a, this.Ba);
      this.Vl = ha.F().FD(b);
      this.Vl != null && this.Vl.compare(a)
        ? (this.Vl.sK.addListener(w(this, this.Rt)), this.Vl.rF(a, !1))
        : (this.Ie(), this.sa());
    }
    Rt(a) {
      a.sK.removeListener(w(this, this.Rt));
      this.Ie();
      this.sa();
    }
  }
  oo.g = "200";
  oo.u = S;
  Object.assign(oo.prototype, { j: oo });
  class po extends S {
    constructor() {
      super();
      this.Ba = null;
      this.qpa = m.l();
    }
    parse(a) {
      super.parse(a);
      var b = a.attributes.get("Name");
      this.Ba = b != null ? b : null;
      a = a.children;
      for (b = 0; b < a.length; ) {
        let c = a[b++].attributes.get("Value");
        this.qpa.push(vd.b5a(c != null ? c : ""));
      }
    }
    S(a) {
      super.S(a);
      let b = ba.fg(a, this.Ba);
      a.ppb(this.qpa, b);
      this.sa();
    }
  }
  po.g = "201";
  po.u = S;
  Object.assign(po.prototype, { j: po });
  class qo extends S {
    constructor() {
      super();
    }
    parse(a) {
      super.parse(a);
    }
    S(a) {
      debugger;
      super.S(a);
      this.sa();
    }
  }
  qo.g = "202";
  qo.u = S;
  Object.assign(qo.prototype, { j: qo });
  class vo extends S {
    constructor() {
      super();
      this.MPa = this.YGa = "";
    }
    parse(a) {
      super.parse(a);
      let b = a.attributes.get("Name");
      this.YGa = b != null ? b : "";
      a = a.attributes.get("Value");
      this.MPa = a != null ? a : "";
    }
    S(a) {
      super.S(a);
      a = p.o;
      a != null && a.MLa(this.YGa, this.MPa);
      p.o.save();
      this.sa();
    }
  }
  vo.g = "203";
  vo.u = S;
  Object.assign(vo.prototype, { j: vo });
  class ro extends S {
    constructor() {
      super();
      this.Ba = this.GN = "";
    }
    parse(a) {
      super.parse(a);
      let b = a.attributes.get("Name");
      this.Ba = b != null ? b : "";
      a = a.attributes.get("IsVisible");
      this.GN = a != null ? a : "0";
    }
    S(a) {
      debugger;
      super.S(a);
      var b = !ba.dw(a, this.GN),
        c = ba.Rc(a, this.Ba);
      a = new ib();
      a.clear();
      a.mj(c);
      c = p.Wk(a);
      if (c != null) {
        c.ob == null && (p.o.Saa(a, !1, !0, !1, b), p.o.save(), p.F().Lx());
        var d = b != c.ob.ni();
        if (d) {
          var e = p.LD(a.Ne);
          if (e != null) {
            let f = 0;
            for (e = e.Fg; f < e.length; ) {
              let g = e[f];
              ++f;
              g.name == a.Se && (g.isActive = !b);
            }
          }
          c.ob.kx(b);
          b = Ya.get();
          b != null && (b.Gma(c), b.Qaa(a, d, !0, !0));
          p.o.save();
        }
      }
      this.sa();
    }
  }
  ro.g = "204";
  ro.u = S;
  Object.assign(ro.prototype, { j: ro });
  class so extends S {
    constructor() {
      super();
      this.WO = "";
    }
    parse(a) {
      super.parse(a);
      a = a.attributes.get("Name");
      this.WO = a != null ? a : "";
    }
    S(a) {
      super.S(a);
      p.o.Ptb(ba.Rc(a, this.WO));
      this.sa();
    }
  }
  so.g = "205";
  so.u = S;
  Object.assign(so.prototype, { j: so });
  class yo extends S {
    constructor() {
      super();
      this.Ny = new Yb();
      this.Av = new Yb();
      new Yb();
    }
    parse(a) {
      debugger;
      super.parse(a);
    }
    S() {
      debugger;
    }
  }
  yo.g = "206";
  yo.u = S;
  Object.assign(yo.prototype, { j: yo });
  class zo extends S {
    constructor() {
      super();
    }
    S(a) {
      super.S(a);
      xh.show(w(this, this.sa));
    }
  }
  zo.g = "207";
  zo.u = S;
  Object.assign(zo.prototype, { j: zo });
  class Ao extends S {
    constructor() {
      super();
      this.Nsa =
        this.Xta =
        this.Usa =
        this.Tsa =
        this.cpa =
        this.bpa =
        this.epa =
        this.dpa =
        this.Noa =
        this.Moa =
        this.vpa =
        this.uc =
        this.Qi =
        this.Dk =
        this.Ba =
          "";
      this.zpa = !1;
      this.ny = this.cqa = this.Rta = "";
      this.csa = null;
    }
    parse(a) {
      super.parse(a);
      var b = a.attributes.get("Name");
      this.Ba = b != null ? b : "";
      b = a.attributes.get("Image");
      this.Dk = b != null ? b : "";
      b = a.attributes.get("Timer");
      this.Qi = b != null ? b : "";
      this.zpa = a.attributes.get("X") == null || a.attributes.get("Y") == null;
      b = a.attributes.get("X");
      this.Moa = b != null ? b : "0";
      b = a.attributes.get("Y");
      this.Noa = b != null ? b : "0";
      b = a.attributes.get("AnchorMinX");
      this.dpa = b != null ? b : "0.5";
      b = a.attributes.get("AnchorMinY");
      this.epa = b != null ? b : "0.5";
      b = a.attributes.get("AnchorMaxX");
      this.bpa = b != null ? b : "0.5";
      b = a.attributes.get("AnchorMaxY");
      this.cpa = b != null ? b : "0.5";
      b = a.attributes.get("PivotX");
      this.Tsa = b != null ? b : "0.5";
      b = a.attributes.get("PivotY");
      this.Usa = b != null ? b : "0.5";
      b = a.attributes.get("Type");
      this.uc = b != null ? b : "";
      b = a.attributes.get("ImagePath");
      this.vpa = b != null ? b : "Textures/buttons/map/";
      b = a.attributes.get("Speed");
      this.Xta = b != null ? b : "0";
      b = a.attributes.get("Pause");
      this.Nsa = b != null ? b : "0";
      b = a.attributes.get("ShowType");
      this.Rta = b != null ? b : "Both";
      b = a.attributes.get("Control");
      this.cqa = b != null ? b : "None";
      b = a.attributes.get("ImageScale");
      this.ny = b != null ? b : "1";
      a = a.A("MapButtonImage");
      a != null && (this.csa = new fh(a));
    }
    S(a) {
      super.S(a);
      let b = new ig();
      b.name = ba.Rc(a, this.Ba);
      b.image = ba.Rc(a, this.Dk);
      b.At = ba.Rc(a, this.vpa);
      b.Mc = ba.fg(a, this.Qi);
      b.type = ba.Rc(a, this.uc);
      b.coords = new H(ba.Oj(a, this.Moa), ba.Oj(a, this.Noa), 0, 1);
      b.bI = new H(ba.Oj(a, this.dpa), ba.Oj(a, this.epa), 0, 1);
      b.aI = new H(ba.Oj(a, this.bpa), ba.Oj(a, this.cpa), 0, 1);
      b.Yd = new H(ba.Oj(a, this.Tsa), ba.Oj(a, this.Usa), 0, 1);
      b.Vo = this.zpa;
      b.speed = ba.Oj(a, this.Xta);
      b.pause = ba.Oj(a, this.Nsa);
      let c = ba.Rc(a, this.Rta);
      b.Pr = c != null ? c : "Both";
      b.control = Pz.ji(ba.Rc(a, this.cqa));
      b.kR = ba.Oj(a, this.ny);
      b.fj = this.csa;
      Vb.F().Zua(b, null, !0);
      this.sa();
    }
  }
  Ao.g = "208";
  Ao.u = S;
  Object.assign(Ao.prototype, { j: Ao });
  class Do extends S {
    constructor() {
      super();
      this.usa = null;
      this.oW = !1;
    }
    parse(a) {
      super.parse(a);
      a = a.attributes.get("Name");
      this.usa = a != null ? a : "";
      this.oW = !1;
    }
    S(a) {
      this.oW = !1;
      super.S(a);
      a = "res/video/" + this.usa;
      let b = p.YJ.n2(a);
      this.video = new Xk(G.uf(a), b);
      this.video.Tc.addListener(w(this, this.ihb));
    }
    ihb() {
      this.V_a();
      this.video = null;
    }
    V_a() {
      this.oW || this.sa();
      this.oW = !0;
    }
  }
  Do.g = "209";
  Do.u = S;
  Object.assign(Do.prototype, { j: Do });
  class Ko extends S {
    constructor() {
      super();
      this.k8 = m.l();
      this.x8 = new Yb();
    }
    parse(a) {
      super.parse(a);
      var b = a.attributes.get("Value");
      this.Mb = b != null ? b : "";
      let c = a.children,
        d = 0;
      for (; d < c.length; ) {
        let e = c[d++];
        if (e.attributes.get("Value") != null) {
          b = new wv();
          let f = e.attributes.get("Value");
          b.value = f != null ? f : "";
          this.Yl(e, b.actions, w(this, this.hf));
          this.k8.push(b);
        }
      }
      this.Yl(a.A("Default"), this.x8, w(this, this.hf));
    }
    S(a) {
      debugger;
      this.Ie();
      super.S(a);
      let b = ba.fg(a, this.Mb),
        c,
        d = 0,
        e = this.k8;
      for (; d < e.length; ) {
        let f = e[d];
        ++d;
        c = ba.fg(a, f.value);
        if (b == c) {
          f.actions.S(a);
          return;
        }
      }
      this.x8.S(a);
    }
    hf() {
      debugger;
      this.sa();
    }
    Ie() {
      debugger;
      super.Ie();
      let a = 0,
        b = this.k8;
      for (; a < b.length; ) b[a++].actions.Vg();
      this.x8.Vg();
    }
  }
  Ko.g = "20A";
  Ko.u = S;
  Object.assign(Ko.prototype, { j: Ko });
