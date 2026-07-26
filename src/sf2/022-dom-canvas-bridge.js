// 022-dom-canvas-bridge.js
// Domain: renderer-textures  |  11 class(es)  |  tree root(s): E, Db, ra, Pg, Xk, ia, Lb, X, $k, V, Jz
// Edit here. Run `npm run build` to reassemble the full bundle.
  class E {
    static get(a, b) {
      b == null && (b = 0);
      b = L.J.createTexture(a, b | 8, !0);
      G.eg(a).indexOf("mgc") != -1 && (E.O2.includes(a) || E.O2.push(a));
      return b;
    }
    static B(...a) {
      let b = 0;
      for (; b < a.length; ) L.J.jD(a[b++]);
    }
    static iD(...a) {
      let b = 0;
      for (; b < a.length; ) L.J.jD(a[b++], !0);
    }
    static Na() {
      return E.get(266, 16);
    }
    static mya(a) {
      let b = qc.init(a, 4),
        c = b.getContext(),
        d = c.createLinearGradient(0, 0, a, 0);
      E.Sua(d);
      c.fillStyle = d;
      c.fillRect(0, 0, a, 4);
      c.fill();
      a = L.J.Ha.CP(b);
      a.name = "gradientX";
      return (E.uJ[0] = a);
    }
    static K1a() {
      var a = qc.init(4, 1024);
      let b = a.getContext(),
        c = b.createLinearGradient(0, 0, 0, 1024);
      E.Sua(c);
      b.fillStyle = c;
      b.fillRect(0, 0, 4, 1024);
      b.fill();
      a = L.J.Ha.CP(a);
      a.name = "gradientY";
      return (E.uJ[1] = a);
    }
    static Rya() {
      L.J.Ha.jD(E.uJ[0]);
      E.uJ[0] = null;
    }
    static d3a() {
      L.J.Ha.jD(E.uJ[1]);
      E.uJ[1] = null;
    }
    static Sua(a) {
      a.addColorStop(0, "#00000020");
      a.addColorStop(0.25, "#00000080");
      a.addColorStop(0.5, "#00000080");
      a.addColorStop(0.75, "#00000080");
      a.addColorStop(1, "#00000020");
    }
  }
  E.g = "23";
  class Re extends Db {
    constructor(a, b) {
      super();
      this.jh = a;
      this.$ca = b;
      L.J.root.appendChild(this);
    }
    abort() {
      this.B();
    }
    B() {
      super.B();
      this.jh = null;
    }
    Z(a) {
      this.$ca -= a;
      this.$ca <= 0 && (this.jh(), this.B());
    }
  }
  Re.g = "24";
  Re.u = Db;
  Object.assign(Re.prototype, { j: Re });
  class ra {
    static Ya(a, b) {
      return new (Function.prototype.bind.apply(a, [null].concat(b)))();
    }
  }
  ra.g = "25";
  class Pg {
    static LI(a) {
      return new ti().read(a);
    }
  }
  Pg.g = "26";
  class Xk {
    constructor(a, b) {
      this.nga = this.Ena = !1;
      this.Tc = new V();
      this.kYa = b;
      L.J.window.canvas.style.visibility = "hidden";
      L.J.bg.YA(0);
      this.container = window.document.createElement("div");
      this.container.style.display = "flex";
      this.container.style.position = "fixed";
      this.container.style.left = "0px";
      this.container.style.top = "0px";
      this.container.style.width = "100%";
      this.container.style.height = "100%";
      this.container.style.justifyContent = "center";
      this.container.style.alignItems = "center";
      window.document.body.appendChild(this.container);
      let c = this;
      try {
        this.video = window.document.createElement("video");
        this.container.appendChild(this.video);
        let d = la.flags.aG == 0;
        ya.aE && (d = !0);
        this.video.muted = d;
        this.video.controls = !1;
        this.video.autoplay = !0;
        this.video.poster =
          "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
        this.video.playsInline = !0;
        this.video.addEventListener("ended", w(this, this.LHa), { once: !0 });
        this.video.style.width = "100%";
        this.video.style.height = "100%";
        this.video.style.bottom = "0";
        this.video.style.left = "0";
        this.video.style.objectFit = "contain";
        this.video.style.background = "black";
        G.data.v[a] != null
          ? (this.url = URL.createObjectURL(G.data.v[a]))
          : ((this.url = G.eg(a)), (this.url = G.r0(this.url)));
        this.video.src = this.url;
        this.video
          .play()
          .then(w(this, this.gIa))
          .catch(function (e) {
            e.name == "NotAllowedError"
              ? ((e = G.eg(7)), (e = G.r0(e)), c.bva(e, w(c, c.wlb)))
              : e.name == "NotSupportedError" && c.finish();
          });
      } catch (d) {
        this.finish();
      }
      L.J.window.Ip.ei(w(this, this.Ip));
      L.J.window.Gp.ei(w(this, this.Gp));
    }
    wlb() {
      this.video
        .play()
        .then(w(this, this.gIa))
        .catch(function () {});
    }
    gIa() {
      var a = this.jf;
      a != null && a.remove();
      this.video.addEventListener("mousedown", w(this, this.$Ha));
      this.video.addEventListener("touchend", w(this, this.zIa));
      this.video.muted && ((a = G.eg(8)), (a = G.r0(a)), this.bva(a));
    }
    bva(a, b) {
      this.jf = window.document.createElement("img");
      this.jf.style.position = "absolute";
      this.jf.style.display = "flex";
      this.jf.style.alignItems = "center";
      this.jf.style.justifyContent = "center";
      this.jf.style.width = "min(30vw, 30vh)";
      this.jf.style.objectFit = "contain";
      this.jf.style.userSelect = "none";
      this.jf.addEventListener("dragstart", function (c) {
        c.preventDefault();
      });
      this.jf.src = a;
      b != null
        ? (this.jf.addEventListener("click", b),
          (this.jf.style.cursor = "pointer"),
          (this.jf.style.pointerEvents = "auto"))
        : (this.jf.style.pointerEvents = "none");
      this.container.appendChild(this.jf);
    }
    $Ha() {
      if (!this.touched)
        if (this.video.muted) {
          this.video.muted = this.cS();
          let a = this.jf;
          a != null && a.remove();
          la.flags.aG = !0;
          la.flags.save();
        } else this.LOa();
    }
    zIa() {
      this.touched = !0;
      if (this.video.muted) {
        this.video.muted = this.cS();
        let a = this.jf;
        a != null && a.remove();
        la.flags.aG = !0;
        la.flags.save();
      } else this.LOa();
    }
    Ip() {
      this.Ena &&
        (this.video.play().catch(function () {}),
        (this.Ena = !1),
        this.container.classList.remove("paused"));
      this.video.muted = this.cS();
    }
    cS() {
      return ya.aE ? !0 : !1;
    }
    Gp() {
      this.video.paused || ((this.Ena = !0), this.video.pause());
    }
    LOa() {
      this.kYa && (p.o == null || p.YJ.n2(this.url)) && this.finish();
    }
    LHa() {
      this.nga = !0;
      this.finish();
    }
    finish() {
      this.video.pause();
      this.container.removeChild(this.video);
      window.document.body.removeChild(this.container);
      L.J.window.canvas.style.visibility = "";
      this.video.removeEventListener("mousedown", w(this, this.$Ha));
      this.video.removeEventListener("touchend", w(this, this.zIa));
      this.video.removeEventListener("ended", w(this, this.LHa));
      URL.revokeObjectURL(this.url);
      p.o != null && this.nga && p.YJ.Hia(this.url);
      L.J.window.Ip.detach(w(this, this.Ip));
      L.J.window.Gp.detach(w(this, this.Gp));
      this.Tc.$();
    }
  }
  Xk.g = "27";
  Object.assign(Xk.prototype, { j: Xk });
  class ia {
    constructor(a) {
      this.nodeType = a;
      this.children = [];
      this.OY = new ac();
    }
    get(a) {
      if (this.nodeType != ia.Element) throw 3;
      return this.OY.v[a];
    }
    set(a, b) {
      if (this.nodeType != ia.Element) throw 4;
      this.OY.v[a] = b;
    }
    Fe(a) {
      if (this.nodeType != ia.Element) throw 5;
      return Object.prototype.hasOwnProperty.call(this.OY.v, a);
    }
    attributes() {
      if (this.nodeType != ia.Element) throw 6;
      return new Yk(this.OY.v);
    }
    elements() {
      if (this.nodeType != ia.Document && this.nodeType != ia.Element) throw 7;
      let a = [],
        b = 0,
        c = this.children;
      for (; b < c.length; ) {
        let d = c[b];
        ++b;
        d.nodeType == ia.Element && a.push(d);
      }
      return new pf(a);
    }
    D4a() {
      if (this.nodeType != ia.Document && this.nodeType != ia.Element) throw 8;
      let a = 0,
        b = this.children;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        if (c.nodeType == ia.Element) return c;
      }
      return null;
    }
    od(a) {
      if (this.nodeType != ia.Document && this.nodeType != ia.Element) throw 9;
      a.parent != null && a.parent.removeChild(a);
      this.children.push(a);
      a.parent = this;
    }
    removeChild(a) {
      if (this.nodeType != ia.Document && this.nodeType != ia.Element) throw 10;
      return J.remove(this.children, a) ? ((a.parent = null), !0) : !1;
    }
    toString() {
      return Zk.print(this);
    }
    static parse(a) {
      return Vg.parse(a);
    }
    static createElement(a) {
      let b = new ia(ia.Element);
      if (b.nodeType != ia.Element) throw 11;
      b.nodeName = a;
      return b;
    }
    static MZ(a) {
      let b = new ia(ia.RTa);
      if (b.nodeType == ia.Document || b.nodeType == ia.Element) throw 12;
      b.nodeValue = a;
      return b;
    }
    static u1a(a) {
      let b = new ia(ia.kQa);
      if (b.nodeType == ia.Document || b.nodeType == ia.Element) throw 13;
      b.nodeValue = a;
      return b;
    }
    static createComment(a) {
      let b = new ia(ia.Comment);
      if (b.nodeType == ia.Document || b.nodeType == ia.Element) throw 14;
      b.nodeValue = a;
      return b;
    }
    static D1a(a) {
      let b = new ia(ia.vQa);
      if (b.nodeType == ia.Document || b.nodeType == ia.Element) throw 15;
      b.nodeValue = a;
      return b;
    }
    static createProcessingInstruction(a) {
      let b = new ia(ia.ProcessingInstruction);
      if (b.nodeType == ia.Document || b.nodeType == ia.Element) throw 16;
      b.nodeValue = a;
      return b;
    }
    static createDocument() {
      return new ia(ia.Document);
    }
  }
  ia.g = "28";
  Object.assign(ia.prototype, { j: ia });
  class Lb {
    static l(a) {
      return new cd(a);
    }
    static vl(a) {
      return a.wi() >>> 0;
    }
    static fk(a, b) {
      let c = new mb(new ArrayBuffer(b));
      a.fk(c, 0, b);
      return c;
    }
    static iKa(a, b) {
      return a.cu(b);
    }
    static vmb(a) {
      return a.WK();
    }
  }
  class X {
    static rAa(a) {
      let b = new Map();
      for (a = a.rFa(); a.yd(); ) {
        let c = a.next();
        b.set(c.key, c.value);
      }
      return b;
    }
    static Xa(a, b) {
      return a.has(b);
    }
    static remove(a, b) {
      return a.delete(b);
    }
    static clear(a) {
      a.clear();
    }
    static IOa(a, b, c) {
      if (a.has(b)) return !1;
      a.set(b, c);
      return !0;
    }
    static wh(a, b, c) {
      return a.has(b) ? ((c.G = a.get(b)), !0) : !1;
    }
    static values(a) {
      return Array.from(a.values());
    }
    static filter(a, b) {
      let c = new Map();
      a = a.entries();
      let d = a.next();
      for (; !d.done; ) {
        var e = d.value;
        d = a.next();
        let f = e[0];
        e = e[1];
        b(e) && c.set(f, e);
      }
      return c;
    }
  }
  class $k {
    static empty(a) {
      return a != null ? a.size <= 0 : !0;
    }
    static aba(a, b, c) {
      X.remove(a, b);
      a.set(b, c);
    }
  }
  $k.g = "29";
  class V {
    constructor() {
      this.pi = [];
    }
    qd() {
      return this.pi.length;
    }
    clear() {
      this.pi.length = 0;
    }
    addListener(a) {
      this.pi.push(a);
    }
    removeListener(a) {
      J.remove(this.pi, a);
    }
    $(...a) {
      if (this.pi.length > 0) {
        let b = 0,
          c = this.pi.slice();
        for (; b < c.length; ) {
          let d = c[b];
          ++b;
          d.apply(null, a);
        }
      }
    }
  }
  V.g = "2A";
  Object.assign(V.prototype, { j: V });
  class Jz {
    static Fe(a, b) {
      return a.pi.includes(b);
    }
  }
