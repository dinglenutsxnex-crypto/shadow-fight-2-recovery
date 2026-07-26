// 064-ai-controllers.js
// Domain: input  |  22 class(es)  |  tree root(s): Zd, Hs, Is, fy, nc, si, We, rc, Gd, Uz, Rs, Rb, u, ki
// Edit here. Run `npm run build` to reassemble the full bundle.
  class Zd {
    constructor() {
      this.buttons = [];
      this.enabled = !0;
      this.buttons = [];
    }
    update(a) {
      let b = 0,
        c = this.buttons;
      for (; b < c.length; ) c[b++].update(a);
    }
    g0a() {
      let a = 0,
        b = this.buttons;
      for (; a < b.length; ) b[a++].reset();
    }
    SBa() {
      if (!this.enabled) return 0;
      let a = this.buttons.length,
        b = 0;
      for (; b < a; ) {
        let c = b++;
        if (this.buttons[c].Eb()) return this.buttons[c].id;
      }
      return (void 0).length;
    }
    S6() {
      let a = 0,
        b = this.buttons;
      for (; a < b.length; ) if (b[a++].Eb()) return !0;
      return !1;
    }
    Eb(a) {
      if (!this.enabled) return !1;
      a = this.Ez(a);
      return a == null ? !1 : a.Eb();
    }
    yh(a) {
      if (!this.enabled) return !1;
      a = this.Ez(a);
      return a == null ? !1 : a.yh();
    }
    Xe(a) {
      if (!this.enabled) return !1;
      let b = this.Ez(a);
      return b == null ? !1 : this.Eb(a) ? !0 : b.Xe();
    }
    reset() {
      this.buttons.length = 0;
    }
    ul(a) {
      let b = this.Ez(a);
      b == null && ((b = new ey(a)), this.buttons.push(b));
      b.yMa(1);
    }
    release(a) {
      a = this.Ez(a);
      a != null && a.yMa(3);
    }
    Ez(a) {
      let b = 0,
        c = this.buttons.length;
      for (; b < c; ) {
        let d = this.buttons[b];
        if (d.id == a) return d;
        ++b;
      }
      return null;
    }
  }
  Zd.g = "4C3";
  Object.assign(Zd.prototype, { j: Zd });
  class Gs extends Zd {
    constructor() {
      super();
      this.BYa = [0, 0];
    }
    Eb(a) {
      return super.Eb(a);
    }
    yh(a) {
      return super.yh(a);
    }
    Xe(a) {
      return super.Xe(a);
    }
  }
  Gs.g = "4C4";
  Gs.u = Zd;
  Object.assign(Gs.prototype, { j: Gs });
  class Hs {
    constructor() {
      this.z2 = -1;
      this.v2 = new fc(0, 0);
    }
    FZ(a, b, c, d) {
      a = window.performance.now();
      if (this.z2 < 0)
        ((this.z2 = a),
          (c = this.v2),
          (c.x = b.x),
          (c.y = b.y),
          (d.x = 0),
          (d.y = 0));
      else {
        var e = (a - this.z2) / 1e3;
        e <= 0
          ? ((d.x = 0), (d.y = 0))
          : ((d.x = ((b.x - this.v2.x) / e) * c + (1 - c) * d.x),
            (d.y = ((b.y - this.v2.y) / e) * c + (1 - c) * d.y),
            (this.z2 = a),
            (d = this.v2),
            (d.x = b.x),
            (d.y = b.y));
      }
    }
  }
  Hs.g = "4C5";
  Object.assign(Hs.prototype, { j: Hs });
  class Is {
    constructor() {
      this.aQ = 0;
      this.MP = new fc(0, 0);
      this.lz = -1;
    }
    test(a, b, c) {
      let d = window.performance.now() / 1e3;
      if (this.lz == -1)
        return (
          (this.lz = d),
          (b = this.MP),
          (b.x = a.x),
          (b.y = a.y),
          (this.aQ = 0),
          !1
        );
      let e = d - this.lz;
      this.lz = d;
      let f = a.x - this.MP.x,
        g = a.y - this.MP.y,
        h = this.MP;
      h.x = a.x;
      h.y = a.y;
      if (e < b)
        if (this.aQ == 0) {
          if (f * f + g * g < c * c) return !0;
          this.aQ++;
        } else this.aQ = 0;
      else
        ((this.aQ = 0), (this.lz = d), (b = this.MP), (b.x = a.x), (b.y = a.y));
      return !1;
    }
  }
  Is.g = "4C6";
  Object.assign(Is.prototype, { j: Is });
  class fy {
    static ji(a) {
      Qs == null && Hz();
      return Qs.v[a];
    }
  }
  class Kk extends nc {
    constructor(a) {
      super();
      this.target = a != null ? a : window.document;
      this.OE = new fb();
      this.SHa = new fb();
      new fb();
      new fb();
      this.state = new Js();
      this.Qs();
      this.Jlb = [];
      this.event = null;
      new ac();
    }
    B() {
      this.Qw();
      this.SHa = this.OE = this.target = null;
    }
    JQ() {
      return 0;
    }
    sFa(a) {
      nc.Hp.notify();
      if (this.enabled) {
        var b = fy.ji(a.code);
        b == fy.ji("") && (b = a.which);
        this.Jlb[b] && a.preventDefault();
        a.repeat || this.state.ul(b);
        this.event = a;
        this.OE.notify(b, a.key, this.HBa(a));
        this.event = null;
      }
    }
    uFa(a) {
      if (this.enabled) {
        var b = fy.ji(a.code);
        b == fy.ji("") && (b = a.which);
        this.state.release(b);
        this.event = a;
        this.SHa.notify(b, a.key, this.HBa(a));
        this.event = null;
      }
    }
    HBa(a) {
      let b = 0;
      a.shiftKey && (b = 1);
      a.ctrlKey && (b |= 2);
      a.altKey && (b |= 4);
      a.repeat && (b |= 8);
      return b;
    }
    PPa() {
      this.state.g0a();
    }
    addListener(a, b, c) {
      this.target.addEventListener(a, b, c);
    }
    removeListener(a, b, c) {
      this.target.removeEventListener(a, b, c);
    }
    Qs() {
      this.addListener("keydown", w(this, this.sFa), !0);
      this.addListener("keyup", w(this, this.uFa), !0);
      this.addListener("visibilitychange", w(this, this.PPa), !1);
    }
    Qw() {
      this.removeListener("keydown", w(this, this.sFa), !0);
      this.removeListener("keyup", w(this, this.uFa), !0);
      this.removeListener("visibilitychange", w(this, this.PPa), !1);
    }
  }
  Kk.g = "4C7";
  Kk.u = nc;
  Object.assign(Kk.prototype, { j: Kk });
  class Js extends Zd {
    constructor() {
      super();
    }
    Eb(a) {
      return super.Eb(a);
    }
    yh(a) {
      return super.yh(a);
    }
    Xe(a) {
      return super.Xe(a);
    }
  }
  Js.g = "4C8";
  Js.u = Zd;
  Object.assign(Js.prototype, { j: Js });
  class Jk extends nc {
    constructor(a) {
      super();
      this.target = a;
      this.una = 0.8;
      this.n3a = 2;
      this.o3a = 0.5;
      this.Aja = new Hs();
      this.fn = new Is();
      this.state = new Ks();
      this.WHa = new fb();
      this.YHa = new fb();
      this.XHa = new fb();
      this.ZHa = new fb();
      this.VHa = new fb();
      this.Qs();
    }
    B() {
      this.Qw();
      this.VHa = this.ZHa = this.XHa = this.YHa = this.WHa = this.target = null;
    }
    JQ() {
      return 1;
    }
    h4() {
      let a = this.state;
      this.Aja.FZ(a, a.position, this.una, a.pM);
    }
    RGa(a) {
      nc.Hp.notify();
      if (this.enabled) {
        this.Dl(a);
        this.state.ul(a.button);
        var b = this.state;
        this.WHa.notify(a.button, b.position.x, b.position.y);
        this.fn.test(b.position, this.o3a, this.n3a) &&
          ((b.fn[a.button] = 2), this.VHa.notify(a.button));
      }
    }
    TGa(a) {
      if (this.enabled) {
        this.Dl(a);
        this.state.release(a.button);
        var b = this.state;
        this.YHa.notify(a.button, b.position.x, b.position.y);
      }
    }
    SGa(a) {
      nc.Hp.notify();
      if (this.enabled) {
        this.Dl(a);
        a = this.state;
        var b = a.position;
        this.XHa.notify(b.x, b.y);
        a.il = 2;
      }
    }
    nf(a) {
      if (this.enabled) {
        var b = this.state;
        b.wheelDelta[1] += a.deltaY | 0;
        this.ZHa.notify(b.wheelDelta[1]);
      }
    }
    Dl(a) {
      let b = a.clientX,
        c = a.clientY;
      if (this.target instanceof Element) {
        var d = this.target.getBoundingClientRect();
        b -= d.left;
        c -= d.top;
      }
      d = window.devicePixelRatio;
      let e = this.state;
      e.Ew[1].x += a.movementX;
      e.Ew[1].y += a.movementY;
      a = e.position;
      a.x = (b * d) | 0;
      a.y = (c * d) | 0;
    }
    addListener(a, b, c) {
      let d = this.target;
      (d != null ? d : window).addEventListener(a, b, c);
    }
    removeListener(a, b) {
      let c = this.target;
      (c != null ? c : window).removeEventListener(a, b);
    }
    Qs() {
      window.document.hasFocus()
        ? (this.addListener("mousedown", w(this, this.RGa)),
          this.addListener("mouseup", w(this, this.TGa)),
          this.addListener("mousemove", w(this, this.SGa)),
          this.addListener("wheel", w(this, this.nf), { passive: !0 }))
        : this.addListener("mouseup", w(this, this.focus));
    }
    Qw() {
      this.removeListener("mousedown", w(this, this.RGa));
      this.removeListener("mouseup", w(this, this.TGa));
      this.removeListener("mousemove", w(this, this.SGa));
      this.removeListener("wheel", w(this, this.nf));
    }
    focus() {
      this.removeListener("mouseup", w(this, this.focus));
      this.Qs();
    }
  }
  Jk.g = "4C9";
  Jk.u = nc;
  Object.assign(Jk.prototype, { j: Jk });
  class Ks extends Zd {
    constructor() {
      super();
      this.position = new fc(0, 0);
      this.Ew = [new fc(0, 0), new fc(0, 0)];
      this.wheelDelta = [0, 0];
      this.pM = new H(0, 0, 0, 1);
      this.il = 0;
      let a = [],
        b = 0;
      for (; b < 3; ) (++b, a.push(0));
      this.fn = a;
    }
    update(a) {
      super.update(a);
      a = this.Ew[0];
      var b = this.Ew[1];
      a.x = b.x;
      a.y = b.y;
      a = this.Ew[1];
      a.x = 0;
      a.y = 0;
      this.wheelDelta[0] = this.wheelDelta[1];
      this.wheelDelta[1] = 0;
      this.il > 0 && this.il--;
      for (a = 0; a < 3; ) ((b = a++), this.fn[b] > 0 && this.fn[b]--);
    }
    Efa() {
      return this.wheelDelta[0];
    }
    Eb(a) {
      return super.Eb(a);
    }
    yh(a) {
      return super.yh(a);
    }
    Xe(a) {
      let b = this.Ez(a);
      return b == null ? !1 : this.Eb(a) ? !0 : b.Xe();
    }
  }
  Ks.g = "4CA";
  Ks.u = Zd;
  Object.assign(Ks.prototype, { j: Ks });
  class Lk extends nc {
    constructor(a) {
      super();
      this.target = a;
      var b = va.navigator.maxTouchPoints;
      this.maxTouchPoints = b < 3 ? 3 : b;
      this.una = 0.8;
      this.y2a = 2;
      this.z2a = 50;
      this.lz = 0.5;
      b = [];
      for (var c = 0, d = this.maxTouchPoints; c < d; ) (c++, b.push(new Hs()));
      this.Aja = b;
      b = [];
      c = 0;
      for (d = this.maxTouchPoints; c < d; ) (c++, b.push(new Is()));
      this.fn = b;
      this.state = new se(this.maxTouchPoints);
      this.PE = new fb();
      this.E3 = new fb();
      this.wia = new fb();
      a.style.setProperty("touch-action", "none");
      this.Qs();
      this.reset();
    }
    B() {
      this.Qw();
      this.wia = this.E3 = this.PE = this.target = null;
    }
    JQ() {
      return 3;
    }
    h4() {
      let a = this.state,
        b = a.Ddb,
        c = a.position,
        d = a.Ew,
        e = 0,
        f = this.maxTouchPoints;
      for (; e < f; ) {
        let k = e++;
        var g = c[k].y - b[k].y,
          h = d[k];
        h.x = c[k].x - b[k].x;
        h.y = g;
        g = b[k];
        h = c[k];
        g.x = h.x;
        g.y = h.y;
        this.Aja[k].FZ(a, a.position[k], this.una, a.pM[k]);
      }
    }
    GF(a) {
      super.GF(a);
      this.reset();
    }
    reset() {
      let a = [],
        b = 0,
        c = this.maxTouchPoints;
      for (; b < c; ) a.push(b++);
      this.Pf = a;
      this.map = new Map();
    }
    EJa(a) {
      nc.Hp.notify();
      if (this.enabled)
        switch (a.pointerType) {
          case "mouse":
            var b = a.button;
            this.Dl(b, a);
            a = this.state;
            a.ul(b);
            a.type[b] = "mouse";
            this.PE.notify(b);
            this.fn[b].test(a.position[b], this.lz, this.y2a) && (a.fn[b] = 2);
            break;
          case "touch":
            if (this.Pf.length != 0) {
              b = this.Pf[0];
              var c = this.state;
              c.type[b] = "touch";
              for (var d = 1, e = this.Pf.length; d < e; ) {
                let f = d++;
                this.Pf[f] < b && (b = this.Pf[f]);
              }
              J.remove(this.Pf, b);
              this.map.set(this.key(a), b);
              this.state.ul(b);
              this.Dl(b, a);
              this.PE.notify(b);
              this.fn[b].test(c.position[b], this.lz, this.z2a) &&
                (c.fn[b] = 2);
            }
        }
    }
    MK(a) {
      if (this.enabled)
        switch (a.pointerType) {
          case "mouse":
            this.state.release(a.button);
            this.E3.notify(a.button);
            break;
          case "touch":
            let b = this.key(a);
            if (this.map.has(b)) {
              let c = this.map.get(b);
              this.Pf.push(c);
              this.map.delete(b);
              this.state.release(c);
              this.Dl(c, a);
              this.E3.notify(c);
            }
        }
    }
    DJa(a) {
      this.MK(a);
    }
    FJa(a) {
      nc.Hp.notify();
      if (this.enabled) {
        var b = this.state;
        switch (a.pointerType) {
          case "mouse":
            this.Dl(0, a);
            var c = b.position[0],
              d = b.position[2];
            d.x = c.x;
            d.y = c.y;
            d = b.position[1];
            d.x = c.x;
            d.y = c.y;
            b.il[0] = 2;
            this.wia.notify(a.button, c.x, c.y);
            break;
          case "touch":
            ((c = this.key(a)),
              this.map.has(c) &&
                ((c = this.map.get(c)),
                this.Dl(c, a) &&
                  ((b.il[c] = 2),
                  (a = this.state.position[c]),
                  this.wia.notify(c, a.x, a.y))));
        }
      }
    }
    QGa(a) {
      this.enabled &&
        a.pointerType == "mouse" &&
        (this.state.release(a.button), this.E3.notify(a.button));
    }
    key(a) {
      return a.pointerId;
    }
    Dl(a, b) {
      let c = b.clientX;
      b = b.clientY;
      var d = this.target.getBoundingClientRect();
      c -= d.left;
      b -= d.top;
      d = window.devicePixelRatio;
      c = (c * d) | 0;
      b = (b * d) | 0;
      a = this.state.position[a];
      d = a.x != c || a.y != b;
      a.x = c;
      a.y = b;
      return d;
    }
    addListener(a, b, c) {
      c == null && (c = !1);
      this.target.addEventListener(a, b, c);
    }
    removeListener(a, b) {
      this.target.removeEventListener(a, b);
    }
    Qs() {
      this.addListener("pointerdown", w(this, this.EJa));
      this.addListener("pointerup", w(this, this.MK));
      this.addListener("pointercancel", w(this, this.DJa));
      this.addListener("pointermove", w(this, this.FJa));
      window.addEventListener("pointerup", w(this, this.QGa));
    }
    Qw() {
      this.removeListener("pointerdown", w(this, this.EJa));
      this.removeListener("pointerup", w(this, this.MK));
      this.removeListener("pointercancel", w(this, this.DJa));
      this.removeListener("pointermove", w(this, this.FJa));
      window.removeEventListener("pointerup", w(this, this.QGa));
    }
  }
  Lk.g = "4CB";
  Lk.u = nc;
  Object.assign(Lk.prototype, { j: Lk });
  class se extends Zd {
    constructor(a) {
      super();
      this.Gw = a;
      a = [];
      for (var b = 0, c = this.Gw; b < c; ) (++b, a.push(new fc(se.hq, se.hq)));
      this.position = a;
      a = [];
      b = 0;
      for (c = this.Gw; b < c; ) (++b, a.push(new fc(se.hq, se.hq)));
      this.Ddb = a;
      a = [];
      b = 0;
      for (c = this.Gw; b < c; ) (++b, a.push(new fc(0, 0)));
      this.Ew = a;
      a = [];
      b = 0;
      for (c = this.Gw; b < c; ) (++b, a.push(new H(0, 0, 0, 1)));
      this.pM = a;
      a = [];
      b = 0;
      for (c = this.Gw; b < c; ) (++b, a.push(0));
      this.il = a;
      a = [];
      b = 0;
      for (c = this.Gw; b < c; ) (++b, a.push(null));
      this.type = a;
      a = [];
      b = 0;
      for (c = this.Gw; b < c; ) (++b, a.push(0));
      this.L4 = a;
      a = [];
      b = 0;
      for (c = this.Gw; b < c; ) (++b, a.push(0));
      this.fn = a;
    }
    update(a) {
      super.update(a);
      a = 0;
      for (var b = this.il.length; a < b; ) {
        var c = a++;
        this.il[c] > 0 && this.il[c]--;
        let d = this.L4[c];
        switch (d) {
          case 1:
            this.L4[c] = 0;
            c = this.position[c];
            c.x = se.hq;
            c.y = se.hq;
            break;
          case 2:
            this.L4[c] = d - 1;
        }
      }
      a = 0;
      for (b = this.Gw; a < b; ) ((c = a++), this.fn[c] > 0 && this.fn[c]--);
    }
    UPa(a) {
      return this.il[a] == 1;
    }
    Xe(a) {
      let b = this.Ez(a);
      return b == null ? !1 : this.Eb(a) ? !0 : b.Xe();
    }
    release(a) {
      super.release(a);
      this.L4[a] = 2;
    }
  }
  se.g = "4CC";
  se.u = Zd;
  Object.assign(se.prototype, { j: se });
  class lf extends nc {
    constructor(a, b) {
      b == null && (b = !0);
      super();
      this.target = a;
      this.uja = b;
      this.state = new mf();
      this.Zhb = new fb();
      this.Xhb = new fb();
      a.style.setProperty("touch-action", "none");
      this.Qs();
      this.reset();
    }
    B() {
      this.Qw();
      this.target = null;
    }
    JQ() {
      return 2;
    }
    GF(a) {
      super.GF(a);
      this.reset();
    }
    reset() {
      let a = [],
        b = 0,
        c = lf.maxTouchPoints;
      for (; b < c; ) a.push(b++);
      this.Pf = a;
      this.map = new Map();
    }
    GOa(a) {
      if (this.enabled) {
        this.uja && a.preventDefault();
        this.state.EOa = a.touches.length;
        var b = 0;
        for (a = a.changedTouches; b < a.length; ) {
          let c = a[b];
          ++b;
          let d = this.Pf[0],
            e = 1,
            f = this.Pf.length;
          for (; e < f; ) {
            let g = e++;
            this.Pf[g] < d && (d = this.Pf[g]);
          }
          J.remove(this.Pf, d);
          this.map.set(this.key(c), d);
          this.state.ul(d);
          this.Dl(d, c);
          this.Zhb.notify(d);
        }
      }
    }
    x6(a) {
      if (this.enabled) {
        this.uja && a.preventDefault();
        this.state.EOa = a.touches.length;
        var b = 0;
        for (a = a.changedTouches; b < a.length; ) {
          let c = a[b];
          ++b;
          let d = this.key(c);
          if (this.map.has(d)) {
            let e = this.map.get(d);
            this.Pf.push(e);
            this.map.delete(d);
            this.Dl(e, c);
            this.state.release(e);
            this.Xhb.notify(e);
          }
        }
      }
    }
    FOa(a) {
      if (this.enabled) {
        this.uja && a.preventDefault();
        var b = 0;
        for (a = a.changedTouches; b < a.length; ) {
          let d = a[b];
          ++b;
          var c = this.key(d);
          this.map.has(c) &&
            ((c = this.map.get(c)),
            this.Dl(c, d) && (this.state.il[c][1] = !0));
        }
      }
    }
    key(a) {
      return -(a.identifier + 1);
    }
    Dl(a, b) {
      let c = b.clientX;
      b = b.clientY;
      var d = this.target.getBoundingClientRect();
      c -= d.left;
      b -= d.top;
      d = window.devicePixelRatio;
      c = (c * d) | 0;
      b = (b * d) | 0;
      a = this.state.position[a];
      d = a.x != c || a.y != b;
      a.x = c;
      a.y = b;
      return d;
    }
    addListener(a, b, c) {
      c == null && (c = !1);
      this.target.addEventListener(a, b, c);
    }
    removeListener(a, b) {
      this.target.removeEventListener(a, b);
    }
    Qs() {
      this.addListener("touchstart", w(this, this.GOa));
      this.addListener("touchend", w(this, this.x6));
      this.addListener("touchcancel", w(this, this.x6));
      this.addListener("touchmove", w(this, this.FOa));
    }
    Qw() {
      this.removeListener("touchstart", w(this, this.GOa));
      this.removeListener("touchend", w(this, this.x6));
      this.removeListener("touchcancel", w(this, this.x6));
      this.removeListener("touchmove", w(this, this.FOa));
    }
  }
  lf.g = "4CD";
  lf.u = nc;
  Object.assign(lf.prototype, { j: lf });
  class mf extends Zd {
    constructor() {
      super();
      for (var a = [], b = 0, c = lf.maxTouchPoints; b < c; )
        (++b, a.push(new fc(mf.hq, mf.hq)));
      this.position = a;
      a = [];
      b = 0;
      for (c = lf.maxTouchPoints; b < c; ) (++b, a.push([!1, !1]));
      this.il = a;
      a = [];
      b = 0;
      for (c = lf.maxTouchPoints; b < c; ) (++b, a.push(0));
      this.M4 = a;
      this.EOa = 0;
    }
    release(a) {
      super.release(a);
      this.M4[a] = 2;
    }
    Xe(a) {
      let b = this.Ez(a);
      return b == null ? !1 : this.Eb(a) ? !0 : b.Xe();
    }
    update(a) {
      super.update(a);
      a = 0;
      let b = lf.maxTouchPoints;
      for (; a < b; ) {
        var c = a++;
        this.il[c][0] = this.il[c][1];
        this.il[c][1] = !1;
        let d = this.M4[c];
        switch (d) {
          case 1:
            this.M4[c] = 0;
            c = this.position[c];
            c.x = mf.hq;
            c.y = mf.hq;
            break;
          case 2:
            this.M4[c] = d - 1;
        }
      }
    }
  }
  mf.g = "4CE";
  mf.u = Zd;
  Object.assign(mf.prototype, { j: mf });
  class si {
    static encode(a) {
      let b = "";
      a = new Uint8Array(a);
      var c = a.byteLength;
      let d = c % 3;
      c -= d;
      let e, f, g;
      let h = 0;
      for (; h < c; ) {
        var k = (a[h] << 16) | (a[h + 1] << 8) | a[h + 2];
        e = (k & 16515072) >> 18;
        f = (k & 258048) >> 12;
        g = (k & 4032) >> 6;
        k &= 63;
        b += K.T(
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
            e
          ] +
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
              f
            ] +
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
              g
            ] +
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
              k
            ],
        );
        h += 3;
      }
      d == 1
        ? ((k = a[c]),
          (b +=
            K.T(
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
                (k & 252) >> 2
              ] +
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
                  (k & 3) << 4
                ],
            ) + "=="))
        : d == 2 &&
          ((k = (a[c] << 8) | a[c + 1]),
          (b +=
            K.T(
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
                (k & 64512) >> 10
              ] +
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
                  (k & 1008) >> 4
                ] +
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[
                  (k & 15) << 2
                ],
            ) + "="));
      return b;
    }
    static decode(a, b) {
      b == null && (b = !0);
      return Ng.decode(a, b);
    }
  }
  si.g = "4CF";
  class We {
    static bga(a) {
      var b = " ";
      b == null && (b = ".");
      let c = a + "";
      if (a < 1e6) {
        if (a < 1e3) return c;
        if (a < 1e4) return J.substr(c, 0, 1) + b + J.substr(c, 1, null);
        if (a < 1e5) return J.substr(c, 0, 2) + b + J.substr(c, 2, null);
        if (a < 1e6) return J.substr(c, 0, 3) + b + J.substr(c, 3, null);
      } else {
        if (a < 1e7)
          return (
            J.substr(c, 0, 1) + b + J.substr(c, 1, 3) + b + J.substr(c, 4, null)
          );
        if (a < 1e8)
          return (
            J.substr(c, 0, 2) + b + J.substr(c, 2, 3) + b + J.substr(c, 5, null)
          );
        if (a < 1e9)
          return (
            J.substr(c, 0, 3) + b + J.substr(c, 3, 3) + b + J.substr(c, 6, null)
          );
      }
      return a < 1e10
        ? J.substr(c, 0, 1) +
            b +
            J.substr(c, 1, 3) +
            b +
            J.substr(c, 4, 3) +
            b +
            J.substr(c, 7, null)
        : null;
    }
    static toFixed(a, b) {
      return a.toFixed(b);
    }
  }
  We.g = "4D0";
  class rc {
    constructor() {
      this.uI = this.XI = this.dT = null;
    }
    Tc(a) {
      a != null &&
        (this.tn
          ? a(this.value)
          : this.$D || (this.uI == null && (this.uI = []), this.uI.push(a)));
      return this;
    }
    wA(a) {
      a != null &&
        (this.$D
          ? a(this.error)
          : this.tn || (this.XI == null && (this.XI = []), this.XI.push(a)));
      return this;
    }
    hIa(a) {
      a != null && (this.dT == null && (this.dT = []), this.dT.push(a));
    }
    then(a) {
      if (this.tn) return a(this.value);
      if (this.$D) {
        let c = new rc();
        c.$D = !0;
        c.error = this.error;
        return c;
      }
      let b = new Gd();
      this.wA(w(b, b.error));
      this.hIa(w(b, b.progress));
      this.Tc(function (c) {
        c = a(c);
        c.wA(w(b, b.error));
        c.Tc(w(b, b.complete));
      });
      return b.ef;
    }
    static hAb(a) {
      let b = new rc();
      b.$D = !0;
      b.error = a;
      return b;
    }
    static jo(a) {
      let b = new rc();
      b.tn = !0;
      b.value = a;
      return b;
    }
  }
  rc.g = "4D1";
  Object.assign(rc.prototype, { j: rc });
  class Gd {
    constructor() {
      this.ef = new rc();
    }
    complete(a) {
      if (!this.ef.$D) {
        let b = this.ef;
        queueMicrotask(function () {
          b.tn = !0;
          b.value = a;
          if (b.uI != null) {
            let c = 0,
              d = b.uI;
            for (; c < d.length; ) d[c++](a);
            b.uI = null;
          }
        });
      }
    }
    error(a) {
      if (
        !this.ef.tn &&
        ((this.ef.$D = !0), (this.ef.error = a), this.ef.XI != null)
      ) {
        let b = 0,
          c = this.ef.XI;
        for (; b < c.length; ) c[b++](a);
        this.ef.XI = null;
      }
      return this;
    }
    progress(a) {
      if (!this.ef.$D && !this.ef.tn && this.ef.dT != null) {
        let b = 0,
          c = this.ef.dT;
        for (; b < c.length; ) c[b++](a);
      }
      return this;
    }
  }
  Gd.g = "4D2";
  Object.assign(Gd.prototype, { j: Gd });
  class Uz {
    static iterator(a) {
      return new pf(a);
    }
  }
  class Rs {
    static c6a(a) {
      for (;;) {
        if (ob.CM(a, vz)) return a.g;
        if (ob.Vq(a) != null) a = ob.Vq(a);
        else return null;
      }
    }
    static hCa(a) {
      a = Rs.c6a(a);
      a != null && (a = J.substr(a, a.lastIndexOf(".") + 1, null));
      return a;
    }
  }
  Rs.g = "4D3";
  class Rb {
    constructor(a) {
      this.children = [];
      this.attributes = new Map();
      this.name = this.value = this.parent = null;
      this.name = a;
    }
    A(a) {
      if (a.indexOf("/") != -1) {
        var b = this,
          c = 0;
        for (a = a.split("/"); c < a.length; )
          if (((b = b.A(a[c++])), b == null)) return null;
        return b;
      }
      b = 0;
      for (c = this.children; b < c.length; ) {
        let d = c[b];
        ++b;
        if (d.name == a) return d;
      }
      return null;
    }
    $S(a) {
      a = new Rb(a);
      a.parent = this;
      this.children.unshift(a);
      return a;
    }
    appendChild(a) {
      a = new Rb(a);
      a.parent = this;
      this.children.push(a);
      return a;
    }
    Ts(a) {
      this.children.push(a);
      a.parent = this;
      return a;
    }
    removeChild(a) {
      a = this.A(a);
      J.remove(this.children, a);
      a.parent = null;
    }
    Af(a) {
      J.remove(this.children, a);
      a.parent = null;
    }
    jF() {
      let a = 0,
        b = this.children;
      for (; a < b.length; ) b[a++].parent = null;
      this.children.length = 0;
    }
    kp(a) {
      let b = [],
        c = 0,
        d = this.children;
      for (; c < d.length; ) {
        let e = d[c];
        ++c;
        e.name == a && b.push(e);
      }
      return b;
    }
    set(a, b) {
      this.attributes.set(a, b);
    }
    has(a) {
      return this.attributes.has(a);
    }
    removeAttribute(a) {
      return this.attributes.delete(a);
    }
    hasAttributes() {
      return this.attributes.size > 0;
    }
    rea() {
      let a = new ac();
      this.attributes.forEach(function (b, c) {
        a.v[c] = b;
      });
      return a;
    }
    stringify(a, b) {
      b == null && (b = !1);
      a == null && (a = "\t");
      let c = null,
        d = this;
      c = function (e, f) {
        f == null && (f = "");
        var g = "";
        if (e.hasAttributes())
          if (((g = " "), b)) {
            var h = [];
            g = e.attributes.keys();
            for (var k = g.next(); !k.done; ) {
              var l = k.value;
              k = g.next();
              h.push(l);
            }
            h.length > 1 &&
              h.sort(function (n, q) {
                return n.toLowerCase() <= q.toLowerCase() ? -1 : 1;
              });
            g = [];
            for (k = 0; k < h.length; )
              ((l = h[k]),
                ++k,
                g.push("" + l + '="' + e.attributes.get(l) + '"'));
            g = " " + g.join(h.length >= 20 ? "\n" + f : " ");
          } else {
            h = [];
            g = e.attributes.entries();
            for (k = g.next(); !k.done; )
              ((l = k.value),
                (k = g.next()),
                h.push("" + l[0] + '="' + l[1] + '"'));
            g = " " + h.join(" ");
          }
        h = e.name;
        k = e.value;
        k = k != null ? k : "";
        if (e.children.length == 0)
          return (
            (f =
              e.value == null
                ? "" + f + "<" + h + g + " />"
                : "" + f + "<" + h + g + ">" + k + "</" + h + ">"),
            e != d && (f += "\n"),
            f
          );
        g = "" + f + "<" + h + g + ">" + k + "\n";
        k = e.children;
        if (b) {
          l = !1;
          let n = e.children[0].name,
            q = 1,
            r = e.children.length;
          for (; q < r; ) e.children[q++].name != n && (l = !0);
          l &&
            ((k = e.children.slice()),
            k.sort(function (t, x) {
              t = t.name.toLowerCase();
              x = x.name.toLowerCase();
              return t < x ? -1 : t > x ? 1 : 0;
            }));
        }
        for (l = 0; l < k.length; ) g += c(k[l++], f + a);
        g += "" + f + "</" + h + ">";
        e != d && (g += "\n");
        return g;
      };
      return c(this);
    }
    clone() {
      let a = null;
      a = function (c, d) {
        let e = 0;
        for (c = c.children; e < c.length; ) {
          let f = c[e];
          ++e;
          let g = new Rb(f.name);
          g.value = f.value;
          g.parent = d;
          g.attributes = new Map(f.attributes);
          d.children.push(g);
          a(f, g);
        }
      };
      let b = new Rb(this.name);
      b.value = this.value;
      b.attributes = new Map(this.attributes);
      a(this, b);
      return b;
    }
    X$a() {
      let a = this;
      for (; a.parent != null; ) a = a.parent;
      return a;
    }
    xt() {
      return this.children[0];
    }
    static create(a) {
      return new Rb(a);
    }
    static parse(a) {
      a = a.replace(RegExp(">\\s+<", "g"), "><");
      a = a.trim();
      let b = null;
      b = function (d, e) {
        if (d.nodeType != ia.Document && d.nodeType != ia.Element) throw 104;
        var f = d.children[0];
        if (f != null && f.nodeType == 1) {
          if (f.nodeType == ia.Document || f.nodeType == ia.Element) throw 105;
          if (f.nodeValue != "") {
            if (f.nodeType == ia.Document || f.nodeType == ia.Element)
              throw 106;
            e.value = f.nodeValue;
          }
        }
        for (f = d.attributes(); f.yd(); ) {
          var g = f.next();
          e.attributes.set(g, d.get(g));
        }
        for (d = d.elements(); d.yd(); ) {
          f = d.next();
          if (f.nodeType != ia.Element) throw 107;
          g = new Rb(f.nodeName);
          g.parent = e;
          b(f, g);
          e.children.push(g);
        }
      };
      a = ia.parse(a).D4a();
      if (a.nodeType != ia.Element) throw 108;
      let c = new Rb(a.nodeName);
      b(a, c);
      return c;
    }
    static Xia(a) {
      return ki.parse(a);
    }
  }
  Rb.g = "4D4";
  Object.assign(Rb.prototype, { j: Rb });
  class u {
    static ka(a, b) {
      b == null && (b = !1);
      return a == null ? b : a == "1" || a == "true" ? !0 : !1;
    }
    static I(a, b) {
      b == null && (b = 0);
      a = K.parseInt(a);
      return a != null ? a : b;
    }
    static H(a, b) {
      b == null && (b = 0);
      if (a == null) return b;
      a = parseFloat(a);
      return isNaN(a) ? b : a;
    }
  }
  class ki {
    static parse(a) {
      a = a.replace(RegExp(">\\s+<", "g"), "><");
      a = a.trim();
      let b = new Rb("doc");
      ki.bQ(a, 0, b);
      a = b.xt();
      a.parent = null;
      return a;
    }
    static bQ(a, b, c) {
      b == null && (b = 0);
      let d = null,
        e = 1;
      var f = 1;
      let g = null;
      var h = 0;
      let k = 0,
        l = 0,
        n = "",
        q = 1,
        r = -1;
      for (; b < a.length; ) {
        let t = a.charCodeAt(b);
        switch (e) {
          case 0:
            switch (t) {
              case 9:
              case 10:
              case 13:
              case 32:
                break;
              default:
                e = f;
                continue;
            }
            break;
          case 1:
            if (t == 60) ((e = 0), (f = 2));
            else {
              h = b;
              e = 13;
              continue;
            }
            break;
          case 2:
            switch (t) {
              case 33:
                a.charCodeAt(b + 1) == 91
                  ? ((b += 2), (b += 5), (e = 17), (h = b + 1))
                  : a.charCodeAt(b + 1) == 68 || a.charCodeAt(b + 1) == 100
                    ? ((b += 8), (e = 16), (h = b + 1))
                    : a.charCodeAt(b + 1) == 45 &&
                      a.charCodeAt(b + 2) == 45 &&
                      ((b += 2), (e = 15), (h = b + 1));
                break;
              case 47:
                h = b + 1;
                e = 0;
                f = 10;
                break;
              case 63:
                e = 14;
                h = b;
                break;
              default:
                e = 3;
                h = b;
                continue;
            }
            break;
          case 3:
            if (
              !(
                (t >= 97 && t <= 122) ||
                (t >= 65 && t <= 90) ||
                (t >= 48 && t <= 57) ||
                t == 58 ||
                t == 46 ||
                t == 95 ||
                t == 45
              )
            ) {
              d = new Rb(J.substr(a, h, b - h));
              c.children.push(d);
              d.parent = c;
              ++k;
              e = 0;
              f = 4;
              continue;
            }
            break;
          case 4:
            switch (t) {
              case 47:
                e = 11;
                break;
              case 62:
                e = 9;
                break;
              default:
                e = 5;
                h = b;
                continue;
            }
            break;
          case 5:
            if (
              !(
                (t >= 97 && t <= 122) ||
                (t >= 65 && t <= 90) ||
                (t >= 48 && t <= 57) ||
                t == 58 ||
                t == 46 ||
                t == 95 ||
                t == 45
              )
            ) {
              g = J.substr(a, h, b - h);
              e = 0;
              f = 6;
              continue;
            }
            break;
          case 6:
            t == 61 && ((e = 0), (f = 7));
            break;
          case 7:
            switch (t) {
              case 34:
              case 39:
                ((n = ""), (e = 8), (h = b + 1), (r = t));
            }
            break;
          case 8:
            t == 38
              ? ((n += J.substr(a, h, b - h)), (e = 18), (q = 8), (h = b + 1))
              : t == r &&
                ((n += J.substr(a, h, b - h)),
                (f = n.toString()),
                (n = ""),
                d.set(g, f),
                (e = 0),
                (f = 4));
            break;
          case 9:
            h = b = ki.bQ(a, b, d);
            e = 1;
            break;
          case 10:
            if (
              !(
                (t >= 97 && t <= 122) ||
                (t >= 65 && t <= 90) ||
                (t >= 48 && t <= 57) ||
                t == 58 ||
                t == 46 ||
                t == 95 ||
                t == 45
              )
            ) {
              e = 0;
              f = 12;
              continue;
            }
            break;
          case 11:
            t == 62 && (e = 1);
            break;
          case 12:
            if (t == 62) return b;
            break;
          case 13:
            t == 60
              ? ((n += J.substr(a, h, b - h)),
                (c.value = n.toString()),
                (n = ""),
                (e = 0),
                (f = 2))
              : t == 38 &&
                ((n += J.substr(a, h, b - h)), (e = 18), (q = 13), (h = b + 1));
            break;
          case 14:
            t == 63 && a.charCodeAt(b + 1) == 62 && (++b, (e = 1));
            break;
          case 15:
            t == 45 &&
              a.charCodeAt(b + 1) == 45 &&
              a.charCodeAt(b + 2) == 62 &&
              ((b += 2), (e = 1));
            break;
          case 16:
            t == 91 ? ++l : t == 93 ? --l : t == 62 && l == 0 && (e = 1);
            break;
          case 17:
            t == 93 &&
              a.charCodeAt(b + 1) == 93 &&
              a.charCodeAt(b + 2) == 62 &&
              ((c.value = J.substr(a, h, b - h)), (b += 2), (e = 1));
            break;
          case 18:
            t == 59
              ? ((h = J.substr(a, h, b - h)),
                h.charCodeAt(0) == 35
                  ? ((h =
                      h.charCodeAt(1) == 120
                        ? K.parseInt("0" + J.substr(h, 1, h.length - 1))
                        : K.parseInt(J.substr(h, 1, h.length - 1))),
                    (n += String.fromCodePoint(h)))
                  : (n = Object.prototype.hasOwnProperty.call(ki.lQ.v, h)
                      ? n + ki.lQ.v[h]
                      : n + ("&" + h + ";")),
                (h = b + 1),
                (e = q))
              : (t >= 97 && t <= 122) ||
                (t >= 65 && t <= 90) ||
                (t >= 48 && t <= 57) ||
                t == 58 ||
                t == 46 ||
                t == 95 ||
                t == 45 ||
                t == 35 ||
                ((n += "&"),
                (n += J.substr(a, h, b - h)),
                --b,
                (h = b + 1),
                (e = q));
        }
        ++b;
      }
      e == 1 && ((h = b), (e = 13));
      if (e == 13) {
        if (b != h || k == 0) ((n += J.substr(a, h, b - h)), (c.value = n));
        return b;
      }
      if (e == 18 && q == 13)
        return ((n = n + "&" + J.substr(a, h, b - h)), (c.value = n), b);
      throw 109;
    }
  }
  ki.g = "4D5";
  va.Ona |= 0;
  typeof performance != "undefined" &&
    typeof performance.now == "function" &&
    (J.now = performance.now.bind(performance));
  String.fromCodePoint == null &&
    (String.fromCodePoint = function (a) {
      return a < 65536
        ? String.fromCharCode(a)
        : String.fromCharCode((a >> 10) + 55232) +
            String.fromCharCode((a & 1023) + 56320);
    });
  Object.defineProperty(String.prototype, "__class__", {
    value: String,
    enumerable: !1,
    writable: !0,
  });
  String.g = "4D6";
  Array.g = "4D7";
  Date.prototype.j = Date;
  Date.g = "4D8";
