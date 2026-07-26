// 055-ui-screens.js
// Domain: shaders  |  35 class(es)  |  tree root(s): nr, or, Jh, vx, lb, Wa, wx, xx, yx, tx, Kc, Qf, Oh, Db, rr, ob, ae, $d, oz, zx
// Edit here. Run `npm run build` to reassemble the full bundle.
  class nr {
    constructor() {
      this.Yn = [];
      this.$a = new mr();
      this.ae = $e;
      this.Xd = Uj;
    }
    init(a) {
      let b = this.$a;
      b.init(a);
      b.sb(b.Sa, 18);
      b.Kj(32, 1);
      b.ez(32, 1);
    }
    Ea(a) {
      var b = a.Ha,
        c = a.effect;
      let d = a.hb.jp,
        e = this.$a;
      e.Ti();
      a = b.H0(a.hb.dc);
      e.bo(e.bWa, a);
      a = c.color;
      e.O.uniform4f(e.di, a.x, a.y, a.z, a.w);
      e.O.uniform1f(e.hWa, c.BJa);
      a = this.Yn;
      b = c.flags;
      if ((b & 8) > 0) {
        var f = d.Rd;
        e.vb.grow(f);
        e.vb.setData(e.Sa, d.getData(0), f * 3);
        e.vb.upload(f);
        e.drawArrays(f, 0);
      }
      (b & 16) > 0 && this.tda(d, 3, c.lK);
      (b & 32) > 0 && this.tda(d, 4, c.lK);
      (b & 64) > 0 && this.tda(d, 5, c.lK);
      if ((b & 1) > 0) {
        f = d.wu;
        for (var g = d.getData(0), h = 0, k = 0, l = d.oK * 3, n = 0; h < l; ) {
          var q = f[h++] * 3,
            r = f[h++] * 3,
            t = f[h++] * 3,
            x = g[q],
            z = g[q + 1];
          q = g[q + 2];
          var A = g[r],
            C = g[r + 1];
          r = g[r + 2];
          var B = g[t],
            D = g[t + 1];
          t = g[t + 2];
          a[k++] = x;
          a[k++] = z;
          a[k++] = q;
          a[k++] = A;
          a[k++] = C;
          a[k++] = r;
          a[k++] = A;
          a[k++] = C;
          a[k++] = r;
          a[k++] = B;
          a[k++] = D;
          a[k++] = t;
          a[k++] = B;
          a[k++] = D;
          a[k++] = t;
          a[k++] = x;
          a[k++] = z;
          a[k++] = q;
          n += 6;
        }
        e.vb.grow(n);
        e.vb.setData(e.Sa, a, k);
        e.vb.upload(n);
        e.drawArrays(n, 1);
      }
      if ((b & 2) > 0) {
        f = d.getData(0);
        g = d.wu;
        l = k = h = 0;
        for (n = d.oK * 3; h < n; ) {
          z = g[h++] * 3;
          A = g[h++] * 3;
          B = g[h++] * 3;
          t = f[z];
          x = f[z + 1];
          z = f[z + 2];
          C = f[A];
          q = f[A + 1];
          A = f[A + 2];
          D = f[B];
          r = f[B + 1];
          B = f[B + 2];
          var F = C - t,
            M = q - x,
            Q = A - z;
          let W = D - t,
            da = r - x,
            na = B - z;
          var U = M * na - Q * da;
          Q = Q * W - F * na;
          F = F * da - M * W;
          M = c.lK / Math.sqrt(U * U + Q * Q + F * F);
          U *= M;
          Q *= M;
          F *= M;
          t = (t + C + D) * 0.3333333333333333;
          x = (x + q + r) * 0.3333333333333333;
          z = (z + A + B) * 0.3333333333333333;
          a[k++] = t;
          a[k++] = x;
          a[k++] = z;
          a[k++] = t + U;
          a[k++] = x + Q;
          a[k++] = z + F;
          l += 2;
        }
        e.vb.grow(l);
        e.vb.setData(e.Sa, a, k);
        e.vb.upload(l);
        e.drawArrays(l, 1);
      }
      if ((b & 4) > 0) {
        f = b = c = 0;
        for (g = d.Lza; f < g.length; )
          for (
            h = g[f],
              ++f,
              k = 1,
              l = h[0] * 3,
              n = h.length,
              x = 0,
              z = d.getData(0);
            x < n;

          )
            ((a[c++] = z[l]),
              (a[c++] = z[l + 1]),
              (a[c++] = z[l + 2]),
              (l = h[k++ % n] * 3),
              (a[c++] = z[l]),
              (a[c++] = z[l + 1]),
              (a[c++] = z[l + 2]),
              ++x,
              (b += 2));
        e.vb.grow(b);
        e.vb.setData(e.Sa, a, c);
        e.vb.upload(b);
        e.drawArrays(b, 1);
      }
    }
    tda(a, b, c) {
      let d = this.$a;
      d.Ti();
      let e = this.Yn,
        f = a.getData(0);
      a = a.getData(b);
      b = a.length;
      let g = 0,
        h = 0,
        k = 0;
      for (; h < b; ) {
        let l = f[h],
          n = f[h + 1],
          q = f[h + 2],
          r = l + a[h] * c,
          t = n + a[h + 1] * c,
          x = q + a[h + 2] * c;
        e[k++] = l;
        e[k++] = n;
        e[k++] = q;
        e[k++] = r;
        e[k++] = t;
        e[k++] = x;
        g += 2;
        h += 3;
      }
      d.vb.grow(g);
      d.vb.setData(d.Sa, e, k);
      d.vb.upload(g);
      d.drawArrays(g, 1);
    }
  }
  nr.g = "3AE";
  nr.Rb = [wb];
  Object.assign(nr.prototype, { j: nr });
  class or {
    constructor() {
      this.$s = new Xh();
      this.ae = Xb;
      this.Xd = Vj;
    }
    init(a) {
      this.$s.init(a);
    }
    Ea(a) {
      let b = a.effect;
      a.effect = a.effect;
      this.$s.Ea(a);
      a.effect = b;
    }
  }
  or.g = "3AF";
  or.Rb = [wb];
  Object.assign(or.prototype, { j: or });
  class Wh extends Jh {
    constructor(a, b, c) {
      super(b, 2, c);
      this.O = a;
      this.init();
    }
    delete() {
      this.O.isBuffer(this.Gq) && this.O.deleteBuffer(this.Gq);
      this.ec = this.view = this.O = this.Gq = null;
    }
    Cf() {
      let a = this.ec;
      a.view = a.M.view;
      a.sn = a.start;
    }
    rB(a, b, c, d) {
      d == null && (d = -1);
      let e = this.ec,
        f = d;
      d == null && (f = 0);
      d = e.view;
      d[e.sn++] = a + f;
      d[e.sn++] = b + f;
      d[e.sn++] = c + f;
    }
    setData(a) {
      let b = 0,
        c = a.length;
      for (; b < c; ) {
        let d = b++;
        this.view[d] = a[d];
      }
    }
    rL(a) {
      this.grow(a.oK * 3);
      this.setData(a.wu);
    }
    bind() {
      this.O.bindBuffer(34963, this.Gq);
    }
    Ex() {
      this.O.bindBuffer(34963, null);
    }
    upload(a, b) {
      b == null && (b = 0);
      this.O.bindBuffer(34963, this.Gq);
      let c = this.view;
      a < this.view.length && (c = this.view.subarray(0, a));
      let d = 35040 + this.DPa * 4;
      a * 2 < this.IE
        ? (this.O.bufferData(34963, this.IE, d),
          this.O.bufferSubData(34963, b * 2, c))
        : (this.O.bufferData(34963, c, d), (this.IE = c.byteLength));
    }
    grow(a) {
      return super.grow(a)
        ? (typeof this.data.transfer === "function"
            ? (this.data = this.data.transfer(this.Gn))
            : ((a = new ArrayBuffer(this.Gn)),
              new Uint8Array(a).set(
                new Uint8Array(this.data).subarray(0, this.Gn),
              ),
              (this.data = a)),
          (this.view = new Uint16Array(this.data)),
          (this.ec.view = this.view),
          !0)
        : !1;
    }
    init() {
      this.data = new ArrayBuffer(this.Gn);
      this.view = new Uint16Array(this.data);
      this.Gq = this.O.createBuffer();
      this.ec = new vx(this);
    }
  }
  Wh.g = "3B0";
  Wh.u = Jh;
  Object.assign(Wh.prototype, { j: Wh });
  class Qq extends Wh {
    constructor() {
      super(null, 0, -1);
    }
    delete() {}
    Cf() {}
    rB() {}
    setData() {}
    rL() {}
    bind() {}
    Ex() {}
    upload() {}
    grow() {
      return !1;
    }
    init() {}
  }
  Qq.g = "3B1";
  Qq.u = Wh;
  Object.assign(Qq.prototype, { j: Qq });
  class vx {
    constructor(a) {
      this.M = a;
      this.start = 0;
      this.view = this.M.view;
      this.sn = this.start;
    }
    rB(a, b, c, d) {
      d == null && (d = 0);
      let e = this.view;
      e[this.sn++] = a + d;
      e[this.sn++] = b + d;
      e[this.sn++] = c + d;
    }
  }
  vx.g = "3B2";
  Object.assign(vx.prototype, { j: vx });
  class lb {
    constructor(a, b, c, d, e, f) {
      this.hZ = 0;
      this.type = this.usage = -1;
      this.normalize = !1;
      this.location = a;
      this.name = b;
      c != null && (this.normalize = c);
      d != null && (this.type = d);
      e != null && (this.usage = e);
      f != null && (this.hZ = f);
    }
  }
  lb.g = "3B3";
  Object.assign(lb.prototype, { j: lb });
  class pr extends Wa {
    constructor() {
      super();
    }
    Sj() {
      return "uniform mat4 u_matrix;\n\nattribute vec2 a_position;\n\nvoid main()\n{\n\tgl_Position = u_matrix * vec4(a_position, 0, 1);\n}";
    }
    Nj() {
      return "precision mediump float;\n\nuniform vec4 u_color;\n\nvoid main()\n{\n\tgl_FragColor = u_color;\n}";
    }
    Vj() {
      this.Sa = this.xd("a_position");
      this.Wc.push(new lb(this.Sa, "a_position", null, null, null, null));
      this.sb(this.Sa, 17);
      this.eh = this.getUniformLocation("u_matrix");
      this.di = this.getUniformLocation("u_color");
    }
  }
  pr.g = "3B4";
  pr.u = Wa;
  Object.assign(pr.prototype, { j: pr });
  class wx {
    constructor() {
      this.Yn = [];
      this.$a = null;
    }
    pda(a, b) {
      let c = this.$a;
      c == null &&
        ((c = new pr()),
        c.init(a),
        c.sb(c.Sa, 17),
        c.Kj(4, 2),
        c.vb.setData(c.Sa, [0, 1, 1, 1, 0, 0, 1, 0]),
        (this.$a = c));
      c.Ti();
      var d = a.li(a.ki(4).L.dc);
      c.bo(c.eh, d);
      c.O.uniform4f(c.di, 0, 0, 0, 0);
      for (d = this.Yn.length = 0; d < b.length; ) {
        let e = b[d];
        ++d;
        this.Yn.push(e.x);
        this.Yn.push(e.y);
      }
      c.vb.grow(this.Yn.length);
      c.vb.setData(c.Sa, this.Yn);
      d = ++a.jHa;
      a.O.stencilFunc(519, d, 255);
      a.O.stencilOp(7680, 7680, 7681);
      c.vb.upload(b.length);
      c.drawArrays(b.length, 6);
      a.O.stencilFunc(514, d, 255);
    }
  }
  wx.g = "3B5";
  Object.assign(wx.prototype, { j: wx });
  class xx {
    constructor(a, b, c, d) {
      this.type = a;
      this.location = b;
      this.name = c;
      this.usage = d;
      this.n3 = (a % 4) + 1;
      this.Gn = this.n3 * Sq.xwa[a >> 2];
      this.offset = 0;
      this.mHa = !1;
    }
  }
  xx.g = "3B6";
  Object.assign(xx.prototype, { j: xx });
  class Vh extends Jh {
    constructor(a, b, c, d) {
      super(b, c.IC, d);
      this.format = c;
      this.O = a;
      this.next = null;
      this.Gq = a.createBuffer();
      this.data = new ArrayBuffer(this.Gn);
      this.wg = [];
      this.$Da();
      this.ec = [];
      for (a = c.iterator(); a.yd(); )
        ((b = a.next()), (this.ec[b.location] = new yx(this, b.location, 0)));
    }
    delete() {
      this.O.isBuffer(this.Gq) && this.O.deleteBuffer(this.Gq);
      this.data = this.wg = this.O = this.Gq = null;
    }
    grow(a) {
      return super.grow(a)
        ? (typeof this.data.transfer === "function"
            ? (this.data = this.data.transfer(this.Gn))
            : ((a = new ArrayBuffer(this.Gn)),
              new Uint8Array(a).set(
                new Uint8Array(this.data).subarray(0, this.Gn),
              ),
              (this.data = a)),
          this.$Da(),
          !0)
        : !1;
    }
    R0(a) {
      return this.wg[a >> 2];
    }
    bind() {
      this.O.bindBuffer(34962, this.Gq);
      var a = this.format;
      let b = 0,
        c = a.attributes.length;
      for (; b < c; ) {
        var d = b++;
        a.attributes[d] != null &&
          ((d = a.attributes[d]),
          this.O.enableVertexAttribArray(d.location),
          this.O.vertexAttribPointer(
            d.location,
            d.n3,
            Vh.uab[d.type >> 2],
            d.mHa,
            this.format.IC,
            d.offset,
          ));
      }
      a = this.next;
      a != null && a.bind();
    }
    upload(a, b) {
      b == null && (b = 0);
      this.O.bindBuffer(34962, this.Gq);
      let c = 35040 + this.DPa * 4,
        d = this.wg[0];
      a *= this.format.IC;
      a < d.byteLength && (d = this.wg[0].subarray(0, a));
      a <= this.IE
        ? ((b *= this.format.IC),
          this.O.bufferData(34962, this.IE, c),
          this.O.bufferSubData(34962, b, d))
        : (this.O.bufferData(34962, d, c), (this.IE = a));
    }
    Ex() {
      var a = this.O;
      a.bindBuffer(34962, null);
      let b = this.format,
        c = 0,
        d = b.attributes.length;
      for (; c < d; ) {
        let e = c++;
        b.attributes[e] != null &&
          a.disableVertexAttribArray(b.attributes[e].location);
      }
      a = this.next;
      a != null && a.Ex();
    }
    Cf() {
      let a = 0,
        b = this.ec;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        c != null && c.Cf();
      }
    }
    setData(a, b, c) {
      c == null && (c = 0);
      c == 0 && (c = b.length);
      var d = this.format.getAttribute(a);
      a = d.n3;
      var e = Sq.MAa(d.type);
      let f = (this.format.IC / e) | 0;
      e = (d.offset / e) | 0;
      d = this.R0(d.type);
      let g = 0;
      for (; g < c; ) ((d[e + ((g / a) | 0) * f + (g % a)] = b[g]), ++g);
    }
    rL(a) {
      this.grow(a.Rd);
      let b = this.format,
        c = 0,
        d = b.attributes.length;
      for (; c < d; ) {
        var e = c++;
        b.attributes[e] != null &&
          ((e = b.attributes[e]), this.setData(e.location, a.getData(e.usage)));
      }
    }
    $Da() {
      let a = this.data;
      this.wg = [
        new Int8Array(a),
        new Uint8Array(a),
        new Int16Array(a),
        new Uint16Array(a),
        new Float32Array(a),
        new Uint32Array(a),
      ];
    }
  }
  Vh.g = "3B7";
  Vh.u = Jh;
  Object.assign(Vh.prototype, { j: Vh });
  class yx {
    constructor(a, b, c) {
      c == null && (c = 0);
      this.M = a;
      let d = a.format;
      b = d.getAttribute(b);
      this.type = b.type;
      this.view = a.R0(this.type);
      a = Sq.MAa(this.type);
      this.stride = (d.IC / a) | 0;
      this.start = this.ca = ((b.offset / a) | 0) + c * this.stride;
    }
    xla(a) {
      this.view = this.M.R0(this.type);
      this.ca = this.start + a * this.stride;
    }
    Cf() {
      this.view = this.M.R0(this.type);
      this.ca = this.start;
    }
    lAb() {
      let a = this.view,
        b = this.ca,
        c = this.stride;
      a[b] = 0;
      b += c;
      a[b] = 1;
      b += c;
      a[b] = 2;
      b += c;
      a[b] = 3;
      this.ca = b + c;
    }
    lY(a, b, c, d) {
      let e = this.view,
        f = this.ca,
        g = this.stride;
      e[f] = a;
      f += g;
      e[f] = b;
      f += g;
      e[f] = c;
      f += g;
      e[f] = d;
      this.ca = f + g;
    }
    mY(a, b, c, d, e, f, g, h) {
      let k = this.view,
        l = this.ca,
        n = this.stride;
      k[l] = a;
      k[l + 1] = b;
      l += n;
      k[l] = c;
      k[l + 1] = d;
      l += n;
      k[l] = e;
      k[l + 1] = f;
      l += n;
      k[l] = g;
      k[l + 1] = h;
      this.ca = l + n;
    }
    Bb(a, b, c, d, e, f) {
      let g = this.view,
        h = this.ca,
        k = this.stride;
      g[h] = a;
      g[h + 1] = b;
      h += k;
      g[h] = c;
      g[h + 1] = d;
      h += k;
      g[h] = e;
      g[h + 1] = f;
      this.ca = h + k;
    }
    X6(a, b) {
      let c = this.view,
        d = this.ca,
        e = this.stride,
        f = 0;
      for (b *= 2; f < b; ) ((c[d] = a[f++]), (c[d + 1] = a[f++]), (d += e));
      this.ca = d;
    }
    Ina(a, b, c, d, e, f, g, h) {
      let k = this.view,
        l = this.ca,
        n = this.stride;
      k[l] = a;
      k[l + 1] = b;
      l += n;
      k[l] = c;
      k[l + 1] = d;
      l += n;
      k[l] = e;
      k[l + 1] = f;
      l += n;
      k[l] = g;
      k[l + 1] = h;
      this.ca = l + n;
    }
    bQa(a, b) {
      let c = this.view,
        d = this.ca,
        e = this.stride;
      c[d] = 0;
      c[d + 1] = 1;
      d += e;
      c[d] = 1;
      c[d + 1] = a;
      d += e;
      c[d] = b;
      c[d + 1] = 0;
      this.ca = d + e;
    }
    VO(a, b, c, d, e, f, g, h) {
      let k = this.view,
        l = this.ca,
        n = this.stride;
      k[l] = a;
      k[l + 1] = b;
      l += n;
      k[l] = c;
      k[l + 1] = d;
      l += n;
      k[l] = e;
      k[l + 1] = f;
      l += n;
      k[l] = g;
      k[l + 1] = h;
      this.ca = l + n;
    }
    cQa(a, b) {
      let c = this.view,
        d = this.ca,
        e = this.stride,
        f = 0;
      for (b *= 2; f < b; ) ((c[d] = a[f++]), (c[d + 1] = a[f++]), (d += e));
      this.ca = d;
    }
    dG(a) {
      let b = this.M.wg[5],
        c = this.stride >> 2,
        d = this.ca >> 2;
      b[d] = a;
      d += c;
      b[d] = a;
      d += c;
      b[d] = a;
      b[d + c] = a;
      this.ca += 4 * this.stride;
    }
  }
  yx.g = "3B8";
  Object.assign(yx.prototype, { j: yx });
  class tx {
    constructor() {
      this.attributes = [];
      this.vna = this.IC = 0;
    }
    getAttribute(a) {
      return this.attributes[a];
    }
    iterator() {
      return new pf(
        Qb.filter(this.attributes, function (a) {
          return a != null;
        }),
      );
    }
    zWa(a, b, c, d, e) {
      e == null && (e = !1);
      d == null && (d = -1);
      a = new xx(a, b, c, d);
      a.mHa = e;
      this.attributes[b] = a;
      this.vna += a.Gn;
    }
    seal() {
      let a = 0;
      for (var b = 0, c = [], d = this.iterator(); d.yd(); ) {
        let e = d.next();
        c.push((e.Gn / e.n3) | 0);
      }
      for (; b < c.length; ) ((d = c[b]), ++b, a < d && (a = d));
      b = this.iterator();
      c = b.next();
      for (d = b.next(); d != null; )
        ((d.offset = c.offset + Math.ceil(c.Gn / a) * a),
          (c = d),
          (d = b.next()));
      this.IC = Math.ceil(this.vna / a) * a;
    }
  }
  tx.g = "3B9";
  Object.assign(tx.prototype, { j: tx });
  class Kc {
    static init(a) {
      Kc.$zb = a.getExtension("OES_vertex_array_object");
      a.getExtension("WEBGL_compressed_texture_etc");
      Kc.dQa = a.getExtension("WEBGL_compressed_texture_astc");
      Kc.uB = a.getExtension("WEBGL_compressed_texture_s3tc");
      Kc.Doa = a.getExtension("EXT_texture_compression_rgtc");
    }
  }
  Kc.g = "3BA";
  class Id extends Qf {
    constructor() {
      super();
      this.gba = this.hma = this.Mca = this.O = null;
      this.s2a = [];
      this.gz = null;
      this.wda = new H(0, 0, 0, 1);
      this.Mw = [];
      this.jHa = 0;
    }
    lma() {
      this.$d(new Uq());
      this.$d(new Wq());
      this.$d(new $q());
      this.$d(new Yq());
      this.$d(new ar());
      this.$d(new cr());
      this.$d(new er());
      this.$d(new Xh());
      this.$d(new ck());
      let a;
      this.$d(new jr());
      a = new ck();
      this.$d(a);
      this.$d(new lr());
      this.$d(new nr());
      this.$d(new or());
    }
    tm() {
      super.tm();
      this.Mca = null;
    }
    restoreContext() {
      super.restoreContext();
      for (var a = 0, b = this.SI; a < b.length; ) b[a++].init(this);
      a = 0;
      for (b = this.kB; a < b.length; ) {
        let c = b[a];
        ++a;
        c.source != null && c.gx(c.source);
      }
    }
    B() {
      let a = 0,
        b = Wa.R5;
      for (; a < b.length; ) b[a++].delete();
      Wa.R5 = [];
      super.B();
      this.O = null;
    }
    ZA(a, b) {
      b == null && (b = !0);
      super.ZA(a);
      this.O = a.context;
      b && this.qtb();
    }
    clear(a) {
      super.clear();
      a == null && (a = this.clearColor);
      this.O.clearColor(a.x, a.y, a.z, a.w);
      this.O.clear(17664);
    }
    Cp() {
      if (!super.Cp()) return !1;
      this.jHa = 0;
      return this.O != null;
    }
    hQ() {
      super.hQ();
    }
    dMa(a) {
      a.enabled
        ? (this.O.enable(2884),
          this.O.frontFace(a.Pwa ? 2305 : 2304),
          this.O.cullFace(1029))
        : this.O.disable(2884);
    }
    aMa(a) {
      a.enabled
        ? (this.O.enable(2929), this.O.depthFunc(Id.Z2a[a.jh]))
        : (this.O.disable(2929), this.O.depthFunc(513));
    }
    jM() {
      if (!super.jM()) return !1;
      var a = this.currentTarget.width,
        b = this.currentTarget.height,
        c = 0,
        d = 0,
        e = 1,
        f = 1,
        g = 1,
        h = 1,
        k = this.Fl,
        l = 0;
      let n = k.length;
      for (; l < n; )
        ((c += g * k[l++]),
          (d += h * k[l++]),
          (e -= g * (1 - k[l++])),
          (f -= h * (1 - k[l++])),
          (g = e - c),
          (h = f - d));
      if (c == 0 && d == 0 && e == 1 && f == 1)
        return (
          this.O.viewport(0, 0, a, b),
          (this.cD = new Ec(0, 0, a, b)),
          this.O.disable(3089),
          !0
        );
      d = e = 0;
      g = f = a = c = 1;
      h = this.Fl;
      k = 0;
      for (l = h.length; k < l; )
        ((e += f * h[k++]),
          (d += g * h[k++]),
          (c -= f * (1 - h[k++])),
          (a -= g * (1 - h[k++])),
          (f = c - e),
          (g = a - d));
      g = e;
      e = d;
      h = this.currentTarget.width;
      f = this.currentTarget.height;
      d = (h * g) | 0;
      c = (h * (c - g)) | 0;
      a = (f * (a - e)) | 0;
      b = (b | 0) - a - ((f * e) | 0);
      this.O.viewport(d, b, c, a);
      this.cD = new Ec(d, b, c, a);
      this.O.enable(3089);
      this.O.scissor(d, b, c, a);
      return !0;
    }
    DT(a) {
      let b = 0,
        c = 0;
      if (a.premultipliedAlpha)
        switch (a.$Y) {
          case 0:
            b = 1;
            c = 0;
            break;
          case 1:
            b = 1;
            c = 771;
            break;
          case 2:
            b = 774;
            c = 771;
            break;
          case 3:
            b = 770;
            c = 772;
            break;
          case 4:
            b = 1;
            c = 769;
            break;
          case 5:
            ((b = Id.aZ[a.INa]), (c = Id.aZ[a.Qya]));
        }
      else
        switch (a.$Y) {
          case 0:
            b = 1;
            c = 0;
            break;
          case 1:
            b = 770;
            c = 771;
            break;
          case 2:
            b = 774;
            c = 771;
            break;
          case 3:
            b = 770;
            c = 1;
            break;
          case 4:
            b = 770;
            c = 1;
            break;
          case 5:
            ((b = Id.aZ[a.INa]), (c = Id.aZ[a.Qya]));
        }
      this.O.enable(3042);
      this.O.blendFunc(b, c);
      let d;
      switch (a.blendEquation) {
        case 1:
          d = 32774;
          break;
        case 2:
          d = 32778;
          break;
        case 3:
          d = 32779;
      }
      this.O.blendEquation(d);
    }
    fla(a) {
      let b = a.sI != this.gz;
      this.gz = a.sI;
      b &&
        (this.O.disable(2960),
        this.O.clearStencil(0),
        this.gz != null &&
          ((a = a.sI),
          this.O.enable(2960),
          this.hma == null && (this.hma = new wx()),
          this.hma.pda(this, a)));
    }
    nz(a) {
      let b = this.ki(4);
      if (b.JC == null) super.nz(a);
      else {
        var c = this.uQ(a.type, this.Wd.type, !1);
        c != null &&
          ((this.info.effect = a),
          (this.info.hb = this.Wd),
          this.qda(c, this.info, b));
      }
    }
    uda(a) {
      if (a.length != 0)
        if (this.oA != 0 && this.zba.includes(!0)) {
          var b = this.s2a,
            c = a[0];
          b.length = 0;
          b.push(c);
          var d = c.l1;
          this.Wd = c;
          c = 1;
          for (var e = a.length; c < e; ) {
            let h = a[c++];
            var f = this.Wd.effect,
              g = h.effect;
            if (
              f.type == g.type &&
              f.state == g.state &&
              (d & 29) == (h.l1 & 29) &&
              ((d & 1) > 0 ? this.Wd.lu[0].Oc == h.lu[0].Oc : 1) &&
              ((d & 4) > 0 ? this.Wd.lu[2].Oc == h.lu[2].Oc : 1) &&
              ((d & 8) > 0 ? this.Wd.lu[3].Oc == h.lu[3].Oc : 1) &&
              ((d & 16) > 0 ? this.Wd.lu[4].Oc == h.lu[4].Oc : 1)
            )
              b.push(h);
            else {
              if (b.length == 1) this.RI(b[0]);
              else if (
                ((this.Wd = b[0]),
                (d = this.uQ(this.Wd.effect.type, this.Wd.type, !0)),
                d != null)
              )
                (this.$w(this.Wd),
                  (f = this.Dq),
                  (this.Dq &= -30),
                  (this.info.effect = this.Wd.effect),
                  (this.info.XY = b),
                  (this.Qc & 16) > 0
                    ? ((g = this.ki(4)),
                      g.JC != null
                        ? this.qda(d, this.info, g)
                        : d.Ea(this.info))
                    : d.Ea(this.info),
                  (this.Dq = f));
              else for (d = 0; d < b.length; ) this.RI(b[d++]);
              b.length = 0;
              b.push(h);
              d = h.l1;
              this.Wd = h;
            }
          }
          if (b.length > 0)
            if (b.length == 1) this.RI(b[0]);
            else if (
              ((this.Wd = b[0]),
              (a = this.uQ(this.Wd.effect.type, this.Wd.type, !0)),
              a != null)
            )
              (this.$w(this.Wd),
                (c = this.Dq),
                (this.Dq &= -30),
                (this.info.effect = this.Wd.effect),
                (this.info.XY = b),
                (this.Qc & 16) > 0
                  ? ((b = this.ki(4)),
                    b.JC != null ? this.qda(a, this.info, b) : a.Ea(this.info))
                  : a.Ea(this.info),
                (this.Dq = c));
            else for (a = 0; a < b.length; ) this.RI(b[a++]);
        } else super.uda(a);
    }
    qda(a, b, c) {
      var d = this.cD.w,
        e = this.cD.v;
      let f = d != this.wda.x || e != this.wda.y,
        g = this.wda;
      g.x = d;
      g.y = e;
      this.Mw.length == 0 &&
        ((this.Mw[0] = this.kya(d, e, "flip")),
        (this.Mw[1] = this.kya(d, e, "flop")));
      f && (this.Mw[0].zF(d, e), this.Mw[1].zF(d, e));
      this.O.viewport(0, 0, d, e);
      d = null;
      (this.Qc & 1) > 0 && ((d = this.ki(0)), this.DT(this.Qv[0]));
      e = this.currentTarget;
      this.ZA(this.Mw[0], !1);
      this.O.clearColor(0, 0, 0, 0);
      this.O.clear(16640);
      a.Ea(b);
      this.ZA(this.Mw[1], !1);
      this.O.clearColor(0, 0, 0, 0);
      this.O.clear(16640);
      this.Wd = c.JC;
      a = this.Qc;
      this.Qc = 0;
      super.nz(c.JC.effect);
      this.Qc = a;
      this.ZA(e, !1);
      this.O.bindFramebuffer(36160, null);
      this.O.viewport(this.cD.x, this.cD.y, this.cD.w, this.cD.v);
      d != null && this.DT(d);
      this.gba == null && (this.gba = new ux());
      this.gba.pda(this, this.Mw[0], this.Mw[1], c.fEa);
    }
    O1(a) {
      return new qr(this.O, a);
    }
  }
  Id.g = "3BB";
  Id.u = Qf;
  Object.assign(Id.prototype, { j: Id });
  class qr extends af {
    constructor(a, b) {
      super(b);
      this.O = a;
      this.Uv = this.handle = null;
      this.s6 = (b & 1) > 0 ? 6407 : 6408;
      this.sOa = 5121;
    }
    B() {
      this.Uv != null && this.O.deleteFramebuffer(this.Uv);
      this.parent == null && this.O.deleteTexture(this.handle);
      this.O = this.handle = null;
      super.B();
    }
    zF(a, b) {
      super.zF(a, b);
      this.Pzb();
    }
    gx(a) {
      super.gx(a);
      this.upload(a);
    }
    od(a, b, c) {
      super.od(a, b, c);
      a.handle = this.handle;
    }
    Pka() {
      this.Uv == null
        ? ((this.Uv = this.O.createFramebuffer()),
          this.O.bindFramebuffer(36160, this.Uv),
          this.O.bindTexture(3553, this.handle),
          this.O.framebufferTexture2D(36160, 36064, 3553, this.handle, 0))
        : this.O.bindFramebuffer(36160, this.Uv);
      this.context = this.O;
    }
    upload(a) {
      this.createTexture();
      this.O.bindTexture(3553, this.handle);
      var b =
          (this.flags & 2) > 0 ? ((this.flags & 4) > 0 ? 33648 : 10497) : 33071,
        c = (this.flags & 8) > 0 ? 9729 : 9728;
      this.O.texParameteri(3553, 10242, b);
      this.O.texParameteri(3553, 10243, b);
      this.O.texParameteri(3553, 10241, c);
      this.O.texParameteri(3553, 10240, c);
      if (a.ocb) {
        var d = a.data;
        a = [];
        b = -1;
        var e = 0;
        c = this.width;
        let r = this.height;
        var f = new Uint32Array(d, 0, 31),
          g = f[0] == 542327876;
        if (f[0] == 1481919403) {
          b = f[7];
          e = f[14];
          g = 64 + f[15];
          Kc.uB != null &&
            b >= Kc.uB.COMPRESSED_RGB_S3TC_DXT1_EXT &&
            b <= Kc.uB.COMPRESSED_RGBA_S3TC_DXT5_EXT &&
            ((c = (this.width + 3) & -4), (r = (this.height + 3) & -4));
          f = 0;
          for (var h = e; f < h; ) {
            var k = new DataView(d, g, 4).getUint32(0, !0);
            g += 4;
            a[f++] = new Uint8Array(d, g, k);
            g += k + (3 - ((k + 3) % 4));
          }
        } else if (g) {
          g = 16;
          c = f[7];
          e = 1 < c ? c : 1;
          switch (f[21]) {
            case 826889281:
              b = Kc.Doa.COMPRESSED_RED_RGTC1_EXT;
              g = 8;
              break;
            case 827611204:
              b = Kc.uB.COMPRESSED_RGB_S3TC_DXT1_EXT;
              g = 8;
              break;
            case 861165636:
              b = Kc.uB.COMPRESSED_RGBA_S3TC_DXT3_EXT;
              break;
            case 894720068:
              b = Kc.uB.COMPRESSED_RGBA_S3TC_DXT5_EXT;
              break;
            case 1498952257:
              b = Kc.Doa.COMPRESSED_RED_GREEN_RGTC2_EXT;
          }
          c = (this.width + 3) & -4;
          r = (this.height + 3) & -4;
          f = 128;
          var l = this.width,
            n = this.height;
          h = 0;
          for (k = e; h < k; ) {
            let t = h++;
            var q = (l + 3) >> 2;
            let x = (n + 3) >> 2;
            q = (1 < q ? q : 1) * (1 < x ? x : 1) * g;
            a[t] = new Uint8Array(d, f, q);
            f += q;
            l >>= 1;
            l = 1 < l ? l : 1;
            n >>= 1;
            n = 1 < n ? n : 1;
          }
        }
        g = c;
        f = r;
        for (d = 0; d < e; )
          ((h = d++),
            this.O.compressedTexImage2D(3553, h, b, g, f, 0, a[h]),
            (g >>= 1),
            (g = 1 < g ? g : 1),
            (f >>= 1),
            (f = 1 < f ? f : 1));
        new H(this.width / c, this.height / r, 0, 1);
      } else if (
        (this.O.pixelStorei(37440, 1),
        this.O.pixelStorei(37441, 1),
        this.O.texImage2D(3553, 0, this.s6, this.s6, this.sOa, a.data),
        (this.flags & 112) > 0)
      )
        for (
          a = 9984,
            (this.flags & 16) > 0 && (a = 9985),
            (this.flags & 32) > 0 && (a = 9986),
            (this.flags & 64) > 0 && (a = 9987),
            this.O.texParameteri(3553, 10241, a),
            this.O.generateMipmap(3553),
            a = this.width >> 1,
            b = this.height >> 1;
          a >= 1 && b >= 1;

        )
          ((a >>= 1), (b >>= 1));
      this.O.bindTexture(3553, null);
      a = 0;
      for (b = this.children; a < b.length; )
        ((c = b[a]),
          ++a,
          (c.handle = this.handle),
          (c.width = this.width),
          (c.height = this.height));
    }
    Pzb() {
      this.createTexture();
      this.O.bindTexture(3553, this.handle);
      this.O.texImage2D(
        3553,
        0,
        this.s6,
        this.width,
        this.height,
        0,
        this.s6,
        this.sOa,
        null,
      );
      this.O.texParameteri(3553, 10240, 9728);
      this.O.texParameteri(3553, 10241, 9728);
    }
    createTexture() {
      this.Uv != null && (this.O.deleteFramebuffer(this.Uv), (this.Uv = null));
      this.handle != null &&
        (this.O.isTexture(this.handle) && this.O.deleteTexture(this.handle),
        (this.handle = null));
      this.handle == null && (this.handle = this.O.createTexture());
    }
  }
  qr.g = "3BC";
  qr.u = af;
  Object.assign(qr.prototype, { j: qr });
  class oe extends O {
    constructor(a) {
      super();
      a = a.toLowerCase();
      this.path = "res/users/images/" + a + ".png";
      this.E1 = G.uf(this.path);
      this.eea = !1;
      this.Kd(a);
      this.size = 0;
      this.ri = this.rj = null;
      var b = 512;
      let c = 4;
      this.size = 512;
      a.indexOf("_small") != -1 && ((b = 256), (c = 2));
      if (G.data.v[this.E1] != null) this.gx();
      else if (
        ((this.ri = G.load([this.E1])), !L.J.GJ || a != "character_sensei")
      ) {
        var d = E.get(11);
        d.$za("" + a + "_63") != null && ((b = 1024), (c = 8));
        this.rj = new Ea(this.node);
        this.rj.la(1 / ((48 * c) / b));
        for (var e = (b = 0), f = c; e < f; ) {
          let g = e++,
            h = 0,
            k = c;
          for (; h < k; ) {
            let l = R.aa(d, "" + a + "_" + b, this.rj),
              n = l.ea.x * c;
            l.C(-n / 2 + h++ * l.ea.x);
            l.D(-n / 2 + g * l.ea.y);
            ++b;
          }
        }
      }
    }
    ip() {
      this.eea = !this.eea;
      if (this.image != null) this.image.Mr(!this.image.e$a());
      else {
        var a = this.rj;
        a.Th(a.Db * -1);
      }
    }
    jqb(a) {
      this.node.la(1);
      this.node.la(a / this.size);
    }
    B() {
      this.node.B();
      this.node = null;
      My.Fe(this.path) && My.remove(this.path) == 0 && E.iD(this.E1);
    }
    Z() {
      this.ri != null && this.ri.pp() && !this.Zg && this.gx();
    }
    gx() {
      My.add(this.path);
      this.image = R.aa(E.get(this.E1));
      this.image.Ga();
      this.node.appendChild(this.image);
      this.image.Mr(this.eea);
      let a = this.rj;
      a != null && a.B();
      this.ri = this.rj = null;
    }
  }
  oe.g = "3BD";
  oe.u = O;
  Object.assign(oe.prototype, { j: oe });
  class rr {
    constructor() {
      this.map = new ac();
    }
    Fe(a) {
      return Object.prototype.hasOwnProperty.call(this.map.v, a);
    }
    add(a) {
      let b = this.map.v[a];
      this.map.v[a] = b != null ? b + 1 : 1;
    }
    remove(a) {
      let b = this.map.v[a] - 1;
      this.map.v[a] = b;
      if (b == 0) {
        let c = this.map;
        Object.prototype.hasOwnProperty.call(c.v, a) && delete c.v[a];
      }
      return b;
    }
  }
  rr.g = "3BE";
  Object.assign(rr.prototype, { j: rr });
  class xj extends Db {
    constructor(a) {
      super(a);
    }
    static lock(a) {
      Fc.Ed(a ? -2147483648 : 16777216, mc.J.df).L.name = "lock";
      L.J.B_(!1);
    }
    static unlock() {
      let a = mc.J.df.aw("lock");
      a != null && a.B();
      L.J.B_(!0);
    }
  }
  xj.g = "3BF";
  xj.u = Db;
  Object.assign(xj.prototype, { j: xj });
  class ob {
    static Vq(a) {
      if (a == null) return null;
      if (a instanceof Array) return Array;
      let b = a.j;
      if (b != null) return b;
      a = ob.Ooa(a);
      return a != null ? ob.jUa(a) : null;
    }
    static DM(a, b) {
      if (a == null) return "null";
      if (b.length >= 5) return "<...>";
      var c = typeof a;
      c == "function" && (a.g || a.hG) && (c = "object");
      switch (c) {
        case "function":
          return "<function>";
        case "object":
          if (a.zh) {
            var d = bg[a.zh].bs[a.Ag];
            c = d.xj;
            if (d.iG) {
              b += "\t";
              var e = [],
                f = 0;
              for (d = d.iG; f < d.length; ) {
                let g = d[f];
                f += 1;
                e.push(ob.DM(a[g], b));
              }
              return c + "(" + e.join(",") + ")";
            }
            return c;
          }
          if (a instanceof Array) {
            c = "[";
            b += "\t";
            e = 0;
            for (f = a.length; e < f; )
              ((d = e++), (c += (d > 0 ? "," : "") + ob.DM(a[d], b)));
            return c + "]";
          }
          try {
            e = a.toString;
          } catch (g) {
            return "???";
          }
          if (
            e != null &&
            e != Object.toString &&
            typeof e == "function" &&
            ((c = a.toString()), c != "[object Object]")
          )
            return c;
          c = "{\n";
          b += "\t";
          e = a.hasOwnProperty != null;
          f = null;
          for (f in a)
            (e && !a.hasOwnProperty(f)) ||
              f == "prototype" ||
              f == "__class__" ||
              f == "__super__" ||
              f == "__interfaces__" ||
              f == "__properties__" ||
              (c.length != 2 && (c += ", \n"),
              (c += b + f + " : " + ob.DM(a[f], b)));
          b = b.substring(1);
          return c + ("\n" + b + "}");
        case "string":
          return a;
        default:
          return String(a);
      }
    }
    static s7(a, b) {
      for (;;) {
        if (a == null) return !1;
        if (a == b) return !0;
        let c = a.Rb;
        if (c != null && (a.u == null || a.u.Rb != c)) {
          let d = 0,
            e = c.length;
          for (; d < e; ) {
            let f = c[d++];
            if (f == b || ob.s7(f, b)) return !0;
          }
        }
        a = a.u;
      }
    }
    static CM(a, b) {
      if (b == null) return !1;
      switch (b) {
        case Array:
          return a instanceof Array;
        case Vz:
          return typeof a == "boolean";
        case Wz:
          return a != null;
        case Xz:
          return typeof a == "number";
        case Yz:
          return typeof a == "number" ? (a | 0) === a : !1;
        case String:
          return typeof a == "string";
        default:
          if (a != null)
            if (typeof b == "function") {
              if (ob.fUa(a, b)) return !0;
            } else {
              if (typeof b == "object" && ob.hUa(b) && a instanceof b)
                return !0;
            }
          else return !1;
          return (b == vz && a.g != null) || (b == Zz && a.hG != null)
            ? !0
            : a.zh != null
              ? bg[a.zh] == b
              : !1;
      }
    }
    static fUa(a, b) {
      return a instanceof b ? !0 : b.Ei ? ob.s7(ob.Vq(a), b) : !1;
    }
    static gUa(a, b) {
      return ob.s7(ob.Vq(a), b);
    }
    static eUa(a, b) {
      if (a == null || ob.CM(a, b)) return a;
      throw 48;
    }
    static Ooa(a) {
      a = ob.kUa.call(a).slice(8, -1);
      return a == "Object" || a == "Function" || a == "Math" || a == "JSON"
        ? null
        : a;
    }
    static hUa(a) {
      return ob.Ooa(a) != null;
    }
    static jUa(a) {
      return va[a];
    }
  }
  ob.g = "3C0";
  class ma extends ae {
    constructor(a, b) {
      super(a, b);
    }
    ut() {
      return null;
    }
    Ot() {
      L.xka.push(this.name);
      L.xka.length > 10 && L.xka.shift();
      ma.QI == null &&
        ((ma.QI = Fc.Ed(-16777216)),
        ma.QI.wa(0),
        (ma.QI.L.Ow = !1),
        mc.J.df.appendChild(ma.QI.L));
      this.nA = null;
      this.BLa = this.HD();
      ma.Ntb(this);
      super.Ot();
      $d.$o = this.BLa;
      this.init(xa.F().Td.data);
      let a = this.elements.iterator();
      for (; a.yd(); ) {
        let b = a.next();
        b instanceof pe && b.init();
      }
      this.NGa = !1;
    }
    Kn() {
      super.Kn();
      ya.Cna || (ya.h5a(), ya.zQ(ua.gE && ua.fE), ya.iR.NHa(jb.QDa));
      this.NGa || ((this.NGa = !0), this.BLa != 2 && xa.F().kib());
    }
    zBa() {
      return new ad(this.Rr, this);
    }
    init() {}
    L1() {
      let a = za.instance;
      a != null && a.B();
      this.nA = this.To(za);
    }
    dM(a, b) {
      this.elements != null && (a.go.node.Hx(b), a.go.node.vg(), a.Ea());
    }
    gza(a) {
      let b = N.Ta;
      N.Ta.Rwa();
      let c = N.lc,
        d = N.height / 1152;
      a.Qa.C(0);
      a.mla(0);
      if (c <= 1) (a.mla(-100), (d *= Math.min(c, 1)));
      else if ((a.mla(-300 * ((c < 1 ? 1 : c > 2 ? 2 : c) - 1)), c > 1.7)) {
        d +=
          (((c < 1.7 ? 1.7 : c > 2.2 ? 2.2 : c) - 1.7) / 0.5000000000000002) *
          0.2;
        let e = b.position;
        e.x = 0;
        e.y =
          (((c < 1.7 ? 1.7 : c > 2.2 ? 2.2 : c) - 1.7) / 0.5000000000000002) *
          200;
        b.yA();
      }
      ma.Qq.N = N.width;
      ma.Qq.P = N.height / 2 - 576 * d;
      ma.Qq.X = N.height / 2 + 426 * d;
      b.IMa(d);
      a.Lb.kn.go.Ima();
      a.node.update();
      L.J.Ha.Ea(a.node.L, b);
      b.T4();
      b.qT();
    }
    fza(a) {
      let b = N.Ta;
      b.Rwa();
      var c = N.lc,
        d = a.Ta.ia.Uf.rh.TCa(),
        e = a.Ta.ia.I$a(),
        f = N.height / e;
      f *= c < 0.45 ? 0.45 : c > 1 ? 1 : c;
      a.Ta.ia.mga = !0;
      c < 0.8 &&
        a.Ta.ia.mga &&
        (f *=
          0.8 +
          (((c < 0.5 ? 0.5 : c > 0.8 ? 0.8 : c) - 0.5) / 0.30000000000000004) *
            0.19999999999999996);
      f *= Math.min(N.width / (d * f + 100), 1);
      d =
        0.6 +
        (((c < 0.5 ? 0.5 : c > 1 ? 1 : c) - 0.5) / 0.5) * 0.7000000000000001;
      d != 0 && (f < d ? (f = d) : b.C(0));
      b.IMa(f);
      c < 1 && b.D((Math.round((N.height - e * f) / 2) / f) * 0.5);
      c = -e / 2;
      f = N.rect;
      d = b.LA;
      var g = 1 / (d.m41 * 0 + d.m42 * c + d.m43 * 0 + d.m44),
        h = f.v / 2;
      c =
        (d.m11 * 0 + d.m12 * c + d.m13 * 0 + d.m14) * g * 0 +
        (d.m21 * 0 + d.m22 * c + d.m23 * 0 + d.m24) * g * -h +
        (h + f.y) -
        f.y;
      e /= 2;
      f = N.rect;
      d = b.LA;
      g = 1 / (d.m41 * 0 + d.m42 * e + d.m43 * 0 + d.m44);
      h = f.v / 2;
      e =
        (d.m11 * 0 + d.m12 * e + d.m13 * 0 + d.m14) * g * 0 +
        (d.m21 * 0 + d.m22 * e + d.m23 * 0 + d.m24) * g * -h +
        (h + f.y) -
        f.y;
      ma.Qq.N = N.width;
      ma.Qq.P = c;
      ma.Qq.X = e;
      f = a.go.node;
      a.go.Ima();
      f.vg();
      f.Kx();
      L.J.Ha.Ea(f, b);
      b.T4();
      b.qT();
      a = N.GK;
      a > 0 &&
        ((f = ma.eZ[0]),
        f.lk(a, N.height),
        (d = f.wf()),
        (g = ma.fZ),
        (d.x = g.x),
        (d.y = g.y),
        (d.z = g.z),
        (d.w = g.w),
        f.C(0),
        f.D(0),
        f.update(),
        L.J.Ha.Ea(f.L, b),
        (f = ma.eZ[1]),
        f.lk(a, N.height),
        (d = f.wf()),
        (g = ma.fZ),
        (d.x = g.x),
        (d.y = g.y),
        (d.z = g.z),
        (d.w = g.w),
        f.C(N.width - a),
        f.D(0),
        f.update(),
        L.J.Ha.Ea(f.L, b));
      c > 0 &&
        ((a = ma.eZ[0]),
        (f = a.wf()),
        (d = ma.fZ),
        (f.x = d.x),
        (f.y = d.y),
        (f.z = d.z),
        (f.w = d.w),
        a.lk(N.width, c),
        a.C(0),
        a.D(0),
        a.update(),
        L.J.Ha.Ea(a.L, b));
      e > 0 &&
        N.height - e > 0 &&
        ((a = ma.eZ[1]),
        (c = a.wf()),
        (f = ma.fZ),
        (c.x = f.x),
        (c.y = f.y),
        (c.z = f.z),
        (c.w = f.w),
        a.lk(N.width, N.height - e),
        a.C(0),
        a.D(e),
        a.update(),
        L.J.Ha.Ea(a.L, b));
    }
    To(a) {
      a = this.elements.appendChild(ra.Ya(a, [].slice()));
      this.content.appendChild(a.node);
      return a;
    }
    o_() {
      let a = 0,
        b = E.O2;
      for (; a < b.length; ) E.B(b[a++]);
      E.O2.length = 0;
    }
    Yea() {
      let a = !0,
        b = la.TJ().children,
        c = 0;
      for (; c < b.length; )
        b[c++].attributes.get("Name") == "ZONE_1" && (a = !1);
      return a ? [] : [Ja.Xea()];
    }
    dJ() {
      return 0.25;
    }
    Yq() {
      return 0.5;
    }
    yl() {}
    Qt(a) {
      ma.QI.wa(1 - a);
    }
    xA(a) {
      ma.QI.wa(a);
    }
    static Kg() {
      return ma.ma;
    }
    static Ntb(a) {
      ma.ma = a;
    }
    static Bd(a, b) {
      b == null && (b = !0);
      if (ma.Kg() == null) return !1;
      let c = N.mn(0),
        d = [];
      var e = mc.J.df.Bd(c, d);
      if (b) {
        if (e) return d[d.length - 1] == a;
      } else for (e = 0; e < d.length; ) if (d[e++] == a) return !0;
      d.length = 0;
      e = ma.Kg().node.Bd(c, d);
      if (b) {
        if (e) return d[d.length - 1] == a;
      } else for (b = 0; b < d.length; ) if (d[b++] == a) return !0;
      return !1;
    }
  }
  ma.g = "3C1";
  ma.u = ae;
  Object.assign(ma.prototype, { j: ma });
  class $d {
    static load(a) {
      if (a != $d.$o || a == 3)
        (a != 2 && (ad.hHa = a),
          (a = za.instance),
          a != null && a.B(),
          ad.load());
    }
    static CZa() {
      return !ad.eE;
    }
  }
  $d.g = "3C2";
  class $a extends O {
    constructor() {
      super();
      this.sp = this.frame = this.target = null;
      this.control = 0;
      this.KL = !1;
      this.Qf = !0;
      this.oa = new V();
      this.ee = null;
      this.vk = this.bp = this.Eb = !1;
      this.Jc = null;
      this.Wg(!1);
      this.Vk = this.W = null;
      this.ht = 0;
      this.aha = !1;
    }
    Wg(a) {
      this.dA = a;
      this.Vk != null && this.Vk.R(this.dA);
    }
    mf(a) {
      this.node.la(a / this.W.ya());
    }
    Df(a) {
      this.node.la(a / this.W.ra());
    }
    Ym(a, b) {
      this.Vk = R.aa(a != null ? a : E.get(262), b);
      this.Vk.Ga();
      this.Vk.R(!1);
      this.node.appendChild(this.Vk);
      this.ht = 0;
      this.Vk.wa(0);
      this.Vk.j5();
    }
    B() {
      super.B();
      this.W = null;
      this.oa.clear();
      this.oa = null;
    }
    Y(a) {
      this.Qf = a;
      this.target.bn = a ? 2 : 1;
      return super.Y(a);
    }
    Z(a) {
      this.Eb = !1;
      this.Vk != null &&
        (this.Vk.R(this.dA),
        this.dA &&
          (this.Vk.wa(this.ht / 255),
          this.aha
            ? ((this.ht += 600 * a),
              this.ht >= 250 && ((this.ht = 250), (this.aha = !1)))
            : ((this.ht -= 10),
              this.ht <= 0 && ((this.aha = !0), (this.ht = 0)))));
      if (Sb.F().kwa && this.vk)
        L.J.ed().Eb(0) && ma.Bd(this.target, !1) && this.q1();
      else if (this.Qf) {
        L.J.ed().Eb(0) &&
          ma.Bd(this.target) &&
          ((this.bp = !0),
          this.mOa &&
            ((a = L.J.ed().position[0]), (this.cQ = new H(a.x, a.y, 0, 1))),
          this.bx(!0));
        a = !1;
        if (this.mOa && this.bp && L.J.ed().UPa(0)) {
          var b = L.J.ed().position[0];
          let c = this.cQ,
            d = b.x - c.x;
          b = b.y - c.y;
          d * d + b * b > 25 && (a = !0);
        }
        (a || L.J.ed().yh(0)) &&
          this.bp &&
          ((this.bp = !1), this.bx(!1), a || ma.Bd(this.target)) &&
          (this.q1(), (this.Eb = !0), this.KL && (this.Qf = !1));
      }
    }
    q1() {
      this.oa.$(this.ee);
    }
    ix(a, b) {
      this.frame = b;
      let c = this.W;
      c != null && c.B();
      this.W = R.aa(a, b, this.node);
      this.W.Ga();
      this.W.Uc(!1);
      this.Jc = R.Ed(-65536, this.W.ea.x, this.W.ea.y, this.node);
      this.Jc.Ga();
      this.Jc.wa(0);
      this.target = this.Jc.L;
    }
    bx(a) {
      this.sp != null && (a ? this.W.yb(this.sp) : this.W.yb(this.frame));
    }
    static Xv(a, b) {
      let c = new $a();
      c.ix(a != null ? a : E.get(262), b);
      return c;
    }
    static bJ(a) {
      let b = new $a();
      b.target = a;
      return b;
    }
  }
  $a.g = "3C3";
  $a.u = O;
  Object.assign($a.prototype, { j: $a });
  class oz {
    static ji(a) {
      return a == "Red"
        ? "EButtonDark"
        : a == "Green"
          ? "EButtonGreen"
          : a == "White" || a == "Beige"
            ? "EButtonWhite"
            : a == "Gold"
              ? "EButtonGold"
              : "EButtonWhite";
    }
  }
  class Yh extends $a {
    constructor(a) {
      super();
      this.ix(E.get(262), y.f7);
      this.label = new ea(E.Na(), this.node);
      this.label.Fa(this.W.ya(), this.W.ra());
      this.label.Ia(128);
      this.label.ua(this.W.ra() * 0.3);
      this.label.C(-this.W.ya() / 2);
      this.label.D(-this.W.ra() / 2);
      this.label.rd(!0);
      this.label.Lc(0.6);
      this.label.CL(10);
      this.label.Uc(!1);
      this.label.V(a);
    }
  }
  Yh.g = "3C4";
  Yh.u = $a;
  Object.assign(Yh.prototype, { j: Yh });
  class dk extends $a {
    constructor() {
      super();
      this.ix(E.get(262), y.goa);
      this.L5(!1);
    }
    L5(a) {
      this.m9 = a;
      this.W.yb(a ? y.LRa : y.goa);
    }
    q1() {
      this.L5(!this.m9);
      super.q1();
    }
  }
  dk.g = "3C5";
  dk.u = $a;
  Object.assign(dk.prototype, { j: dk });
  class Bb extends $a {
    constructor(a) {
      super();
      this.label = null;
      this.ix(E.get(246), this.tza(a));
      this.W.zl(
        vc.wM(
          new Ec(((this.W.ea.x / 2) | 0) - 2, 0, 4, this.W.ea.y | 0),
          Th.Rna(1),
        ),
      );
      this.xc(600);
      this.time = 1;
    }
    OD() {
      return this.label.OD();
    }
    V(a) {
      this.label == null &&
        ((this.label = new ea(E.Na(), this.node)),
        this.label.Ia(128),
        this.label.La(Z.sc),
        this.label.IF(!0));
      let b = (this.W.ya() - 80) * 0.8;
      this.label.Fa(b, 106.39999999999999);
      this.label.ua(106.39999999999999);
      this.label.V(a);
      this.label.pk();
      this.label.Ga();
      this.Jc.yF();
    }
    P5(a) {
      this.label.La(Oa.dd(a));
    }
    YT(a) {
      this.W.yb(this.tza(a));
    }
    xc(a) {
      this.width = a;
      this.W.xc(a);
      this.node.la(1);
      this.label != null && this.V(this.OD());
      this.Jc.lk(a, 168);
      this.Jc.Ga();
      this.Vk != null && this.Vk.xc(a);
    }
    ra() {
      return 112 * this.node.Db;
    }
    Qb(a) {
      this.node.la(a / 112);
    }
    Ym(a, b) {
      super.Ym(a != null ? a : E.get(246), b);
      this.Vk.zl(
        vc.wM(
          new Ec(((this.W.ea.x / 2) | 0) - 2, 0, 4, this.W.ea.y | 0),
          Th.YU,
        ),
      );
      this.Vk.xc(this.width);
    }
    ROa(a) {
      let b = Math.min(this.label.effect.fontSize, a.label.effect.fontSize);
      this.label.ua(b);
      a.label.ua(b);
    }
    Z(a) {
      let b = this.fd(0.1);
      this.bp || (b = 1 - b);
      let c = Bb.STa,
        d = this.W.wf();
      d.x = 1 + (c.x - 1) * b;
      d.y = 1 + (c.y - 1) * b;
      d.z = 1 + (c.z - 1) * b;
      d.w = 1 + (c.w - 1) * b;
      super.Z(a);
    }
    bx(a) {
      super.bx(a);
      a && sb.xm();
      this.time = 0;
    }
    tza(a) {
      return "btn" + J.substr(K.T(a), 7, null);
    }
  }
  Bb.g = "3C6";
  Bb.u = $a;
  Object.assign(Bb.prototype, { j: Bb });
  class Rf extends Bb {
    constructor(a, b) {
      super(a);
      this.icon = null;
      this.tL(b);
    }
    tL(a) {
      a != null &&
        a != "" &&
        (this.icon == null
          ? (this.icon = R.aa(E.get(262), a, this.node))
          : this.icon.yb(a),
        this.icon.Ga(),
        this.label != null && this.V(this.OD()));
    }
    Irb(a) {
      this.icon == null
        ? (this.icon = R.aa(a, null, this.node))
        : this.icon.sg(a);
      this.icon.Ga();
      this.label != null && this.V(this.OD());
    }
    V(a) {
      super.V(a);
      if (this.icon != null) {
        a = this.label.zfa();
        this.label.Fa(a.x * 0.75, a.y);
        this.label.pk();
        this.label.Ga();
        a = this.label.Pj();
        this.icon.Df(89.60000000000001);
        let b = this.icon.ya() / 2;
        this.icon.C((-(a.N - a.K) / 2) * 1.1);
        this.icon.Ga();
        this.label.C(b * 1.1);
      }
    }
  }
  Rf.g = "3C7";
  Rf.u = Bb;
  Object.assign(Rf.prototype, { j: Rf });
  class jg extends $a {
    constructor(a) {
      super();
      this.cj = !1;
      this.uH = null;
      this.eC = 0;
      this.OW = 100;
      this.gy = 0;
      this.xh = null;
      this.state = 0;
      this.frame = a;
      this.W = R.aa(E.get(270), a, this.node);
      this.W.Ga();
      this.target = this.W.L;
      this.PKa();
    }
    Z(a) {
      super.Z(a);
      if (this.xh != null) {
        this.xh.time += a;
        a = Math.min(this.xh.time / this.xh.duration, 1);
        let b = this.xh.Wzb;
        this.w5(b + (this.xh.LPa - b) * a);
        a >= 1 && (this.xh = null);
      }
    }
    hva() {
      this.uH = R.aa(E.get(270), y.sRa, this.node);
      this.uH.Ga();
      this.uH.R(!1);
      this.ov = new Zj();
      this.ov.qc = E.get(270);
      this.ov.frame = y.coa;
      this.ov.DA = (this.ov.qc.re.mt.v[y.coa].ea.x / 2) * 1.01;
      this.ov.pR = this.ov.DA * 0.75;
      this.wta = new Xb();
      this.wta.Zw(this.ov);
      this.node.L.appendChild(this.wta);
    }
    wL(a, b) {
      b /= 60;
      this.xh != null && this.w5(this.xh.LPa);
      this.yFa();
      let c = this.eC,
        d = this.OW;
      a < c ? (a = c) : a > d && (a = d);
      this.gy != a &&
        (b == 0 ? this.w5(a) : (this.xh = new zx(0, b, this.gy, a)));
    }
    w5(a) {
      let b = this.eC,
        c = this.OW;
      this.gy = a < b ? b : a > c ? c : a;
      this.uH != null &&
        (this.eC >= this.gy && this.uH.R(!1),
        this.OW <= this.gy && this.uH.R(!0));
      this.ov != null && (this.ov.Vda = this.gy / this.OW);
    }
    PKa() {
      this.yFa();
      this.w5(this.eC);
    }
    yFa() {
      this.xh = null;
    }
  }
  jg.g = "3C8";
  jg.u = $a;
  Object.assign(jg.prototype, { j: jg });
  class zx {
    constructor(a, b, c, d) {
      this.time = a;
      this.duration = b;
      this.Wzb = c;
      this.LPa = d;
    }
  }
  zx.g = "3C9";
  Object.assign(zx.prototype, { j: zx });
  class Le extends $a {
    constructor(a, b, c, d) {
      super();
      this.ix(a, b);
      this.Jc.la(0.75);
      this.sp = c;
      this.Fqb = d;
      this.Ym(null, y.SRa);
      this.badge = this.appendChild(ra.Ya(Eg, [].slice()));
      this.badge.node.Uc(!1);
    }
    zL() {
      this.W.yb(this.Fqb);
    }
    uMa() {
      this.W.yb(this.frame);
    }
  }
  Le.g = "3CA";
  Le.u = $a;
  Object.assign(Le.prototype, { j: Le });
  class ef extends O {
    constructor() {
      super();
      Fc.Ed(-16777216, this.node.L);
      this.Qa = new Ea(this.node);
      let a = R.aa(E.get(822), null, this.Qa),
        b = R.aa(E.get(822), null, this.Qa);
      b.Mr(!0);
      a.C(a.za - a.ea.x);
      this.HYa = a.ea.x * 2;
      a.D(a.qa - a.ea.y / 2);
      b.D(b.qa - b.ea.y / 2);
    }
    B() {
      super.B();
      E.B(821);
      Sd.Hza() || E.B(822);
    }
    Z(a) {
      super.Z(a);
      this.layout();
    }
    layout() {
      var a = Math.min(1024, N.Pha),
        b = N.rect,
        c = b.y + b.v / 2;
      this.node.C(b.x + b.w / 2);
      this.node.D(c);
      this.node.la(a / (this.yea() * 1.1));
      a = N.lc;
      b = N.width / this.HYa / this.node.Db;
      this.Qa.Th(Math.min(2, b));
      c = 1 - a;
      a > 1 ? this.Qa.oj(b + c * 0.75) : this.Qa.oj(b + c);
    }
  }
  ef.g = "3CB";
  ef.u = O;
  Object.assign(ef.prototype, { j: ef });
  class Eg extends O {
    constructor() {
      super();
      this.icon = R.aa(E.get(262), y.f7, this.node);
      this.label = new ea(E.Na(), this.node);
      this.label.Ia(128);
      this.ba(72);
      this.C(71);
      this.D(48);
      this.nk(0);
    }
    nk(a) {
      this.count = a;
      this.node.R(a > 0);
      a > 0 &&
        (this.icon.yb(a < 10 ? y.f7 : y.bSa),
        this.icon.Ga(),
        this.label.V(a == null ? "null" : "" + a),
        this.label.Ga(),
        this.label.C(a == 1 ? -2 : 0));
    }
    ba(a) {
      this.icon.la(a / this.icon.ea.x);
      this.label.Fa(a, a);
      this.label.ua(a * 0.8);
    }
  }
  Eg.g = "3CC";
  Eg.u = O;
  Object.assign(Eg.prototype, { j: Eg });
  class Fg extends O {
    constructor() {
      super();
      this.Xw = m.l();
      this.buttons = m.l();
      this.background = R.Ed(-13034231, 1, 1, this.node);
      this.pP = this.appendChild(ra.Ya(O, [].slice()));
      this.height = 0;
    }
    init() {
      let a = 0,
        b = this.buttons.length;
      for (; a < b; ) {
        let c = a++;
        this.anb(this.buttons[c], this.Xw[c]);
      }
    }
    HAa(a) {
      let b = 0,
        c = this.buttons.length;
      for (; b < c; ) {
        let d = b++;
        if (this.Xw[d] == a) return this.buttons[d];
      }
      return null;
    }
    Z(a) {
      super.Z(a);
      var b = N.lc;
      a = N.rect;
      this.height = a.v * 0.1;
      za.instance != null &&
        (this.height =
          za.instance.Zp *
          (L.J.wn
            ? b < 0.9
              ? 0.9
              : b > 1.5
                ? 1.5
                : b
            : 1.3 +
              (((b < 1 ? 1 : b > 1.5 ? 1.5 : b) - 1) / 0.5) *
                -0.10000000000000009));
      this.node.D(a.v - this.height);
      b = b < 0.9 ? 0.9 : b > 1.2 ? 1.2 : b;
      var c = this.buttons[0].W.ea,
        d = c.x;
      c = this.height / c.y;
      var e = Qb.count(this.buttons, function (g) {
          return g.active;
        }),
        f = a.w * 0.96;
      e * d * c * b > f && (c = f / (e * d * b));
      e = d = 0;
      for (f = this.buttons; e < f.length; ) {
        let g = f[e];
        ++e;
        g.C(d);
        g.node.la(c);
        d += g.node.ya() * b;
      }
      this.pP.C((a.w - this.pP.node.ya()) / 2 + this.buttons[0].node.ya() / 2);
      this.pP.D(this.height / 2);
      this.background.lk(a.w, this.height);
    }
    anb(a, b) {
      a.ee = b;
      a.oa.addListener(w(this, this.oa));
    }
    vJ(a) {
      let b = 0,
        c = this.buttons.length;
      for (; b < c; ) {
        let d = b++;
        this.Xw[d] == a && this.buttons[d].Y(!1);
      }
    }
    Dda() {
      let a = 0,
        b = this.buttons;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        c.Qf = !0;
        c.uMa();
      }
    }
    Uya(a) {
      let b = 0,
        c = this.buttons.length;
      for (; b < c; ) {
        let d = b++;
        this.Xw[d] == a && ((this.buttons[d].Qf = !1), this.buttons[d].zL());
      }
    }
    MU() {
      let a = 0,
        b = this.buttons.length;
      for (; a < b; ) {
        let c = a++;
        this.buttons[c].badge.nk(this.getCounterValue(this.Xw[c]));
      }
    }
    oa() {
      sb.xJa();
    }
    getCounterValue() {
      return 0;
    }
  }
  Fg.g = "3CD";
  Fg.u = O;
  Object.assign(Fg.prototype, { j: Fg });
  class sr extends O {
    constructor(a) {
      super();
      let b = 0,
        c = a.images.length;
      for (; b < c; ) {
        let d = a.images[b++],
          e = new Sf(Eb.replace(d.name, ".", "/"), this.node),
          f = e.wf(),
          g = d.color;
        f.x = g.x;
        f.y = g.y;
        f.z = g.z;
        f.w = g.w;
        e.C(d.position.x);
        e.D(d.position.y);
        e.Xg(-d.rotation);
        d.scale.x != d.scale.y
          ? (e.Th(d.scale.x), e.oj(d.scale.y))
          : e.la(d.scale.x);
      }
    }
  }
  sr.g = "3CE";
  sr.u = O;
  Object.assign(sr.prototype, { j: sr });
  class xh extends ef {
    constructor(a) {
      super();
      this.ica = a;
      this.rows = [];
      this.content = new Ea(this.node);
      a = new ea(E.Na(), this.content);
      a.C(-500);
      a.Fa(1e3, 120);
      a.V(Y.na("credits"));
      a.ua(120);
      a.Ia(2);
      a.La(Oa.dd(13742453));
      var b = Ja.mi(1317),
        c = G.lp();
      c != "en" && c != "ru" && (c = "en");
      a = 220;
      b = b.A(c).children;
      for (c = 0; c < b.length; ) {
        var d = b[c++];
        d = new Ax(d.attributes.get("Name"), d.value);
        this.content.appendChild(d.node);
        d.node.D(a);
        a += d.height + 90;
        this.rows.push(d);
      }
      this.Et = new ea(E.Na(), this.content);
      this.Et.Fa(1e3, 120);
      this.Et.V(Y.na("CreditsFamilies"));
      this.Et.ua(120);
      this.Et.La(Oa.dd(13742453));
      this.Et.C(-500);
      this.Et.D(a + 60);
      this.Et.Ia(2);
      this.Et.Uk();
      this.layout();
      a = N.rect;
      a = N.Ta.sJa(0, a.y + a.v, N.rect).y;
      this.content.D(this.content.$n(new H(0, a, 0, 1)).y);
    }
    rn() {
      this.B();
    }
    B() {
      super.B();
      this.ica != null && (this.ica(), (this.ica = null));
    }
    Z(a) {
      super.Z(a);
      a = this.content;
      a.D(a.qa - 1.3);
      this.node.update();
      a = 0;
      let b = this.rows;
      for (; a < b.length; ) {
        let c = b[a];
        ++a;
        c.node.R(!this.rcb(c.node, c.height));
      }
      this.vma(this.Et.Dm(new H(0, this.Et.zfa().y, 0, 1)).y) < 0 && this.rn();
      L.J.ed().Eb(0) && this.rn();
    }
    rcb(a, b) {
      let c = this.vma(a.Dm(new H(0, 0, 0, 1)).y);
      if (c > N.height) return !0;
      c = this.vma(a.Dm(new H(0, b, 0, 1)).y);
      return c < 0 ? !0 : !1;
    }
    vma(a) {
      return N.Ta.jAb(new H(0, a, 0, 1), N.rect).y;
    }
    yea() {
      return 1024;
    }
    static show(a) {
      a = new xh(a != null ? a : function () {});
      mc.J.df.appendChild(a.node.L);
      L.J.root.appendChild(a);
    }
  }
  xh.g = "3CF";
  xh.u = ef;
  Object.assign(xh.prototype, { j: xh });
