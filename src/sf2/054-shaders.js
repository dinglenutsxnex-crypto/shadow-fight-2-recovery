// 054-shaders.js
// Domain: shaders  |  31 class(es)  |  tree root(s): Wa, ux, Sq, Uq, Qk, Wq, Yq, $q, Rk, ar, cr, er, Xh, Sk, ck, jr, lr
// Edit here. Run `npm run build` to reassemble the full bundle.
  class Wa {
    constructor() {
      this.Wc = [];
      this.Mp = this.Q6 = this.W_ = null;
      this.up = !1;
      this.vb = this.Gd = null;
      Wa.R5.push(this);
    }
    init(a) {
      this.up && this.delete();
      this.Ha = a;
      this.O = a.O;
      if (!this.createProgram()) return !1;
      this.YF = Kc.$zb;
      this.sna = this.YF != null;
      this.Gd = new Qq();
      this.Vj();
      return (this.up = !0);
    }
    delete() {
      J.remove(Wa.R5, this);
      this.vb != null && (this.vb.delete(), (this.vb = null));
      this.Gd != null && (this.Gd.delete(), (this.Gd = null));
      this.Wc.length = 0;
      this.O.isProgram(this.Mp) &&
        (this.O.detachShader(this.Mp, this.Q6),
        this.O.detachShader(this.Mp, this.W_),
        this.O.deleteShader(this.Q6),
        this.O.deleteShader(this.W_),
        this.O.deleteProgram(this.Mp));
      this.sna && (this.YF.deleteVertexArrayOES(this.SU), (this.SU = null));
      this.W_ = this.Q6 = this.Mp = this.O = this.Ha = null;
      this.up = !1;
    }
    Ti() {
      this.Ha.Mca != this && ((this.Ha.Mca = this), this.O.useProgram(this.Mp));
    }
    drawElements(a, b, c) {
      c == null && (c = 0);
      a != 0 &&
        (this.Bba(),
        this.O.drawElements(b, a - c, 5123, c * 2),
        this.POa(),
        this.Ha.ti++);
    }
    drawArrays(a, b, c) {
      c == null && (c = 0);
      a != 0 &&
        (this.Bba(), this.O.drawArrays(b, c, a - c), this.POa(), this.Ha.ti++);
    }
    u3a(a) {
      a.$F.bind();
      if (a.Uz != null) (a.Uz.bind(), this.O.drawElements(4, a.Uz.rr, 5123, 0));
      else {
        debugger;
        this.O.drawArrays(4, 0, a.jp.Rd);
      }
      this.Ha.ti++;
    }
    sb(a, b, c, d, e) {
      e == null && (e = !1);
      d == null && (d = -1);
      c == null && (c = 0);
      let f = Qb.find(this.Wc, function (g) {
        return g.location == a;
      });
      f.type = b;
      f.usage = d;
      f.normalize = e;
      f.hZ = c;
    }
    Kj(a, b) {
      let c = 0,
        d = 0;
      Qb.oFa(this.Wc, function (l) {
        l = l.hZ;
        d < l && (d = l);
      });
      let e = null;
      for (; c <= d; ) {
        for (var f = this.Wc, g = [], h = 0; h < f.length; ) {
          var k = f[h];
          ++h;
          k.hZ == c && g.push(k);
        }
        f = new tx();
        for (h = 0; h < g.length; )
          ((k = g[h]),
            ++h,
            f.zWa(k.type, k.location, k.name, k.usage, k.normalize));
        f.seal();
        g = new Vh(this.O, a, f, b);
        this.vb == null ? (this.vb = e = g) : (e = e.next = g);
        ++c;
      }
    }
    ez(a, b) {
      this.Gd = new Wh(this.O, a, b);
    }
    createProgram() {
      let a = (this.Q6 = this.TFa(35633, this.Sj())),
        b = (this.W_ = this.TFa(35632, this.Nj()));
      this.Mp = this.O.createProgram();
      this.O.attachShader(this.Mp, a);
      this.O.attachShader(this.Mp, b);
      this.O.linkProgram(this.Mp);
      return !0;
    }
    Bba() {
      this.SU != null
        ? this.YF.bindVertexArrayOES(this.SU)
        : this.sna
          ? ((this.SU = this.YF.createVertexArrayOES()),
            this.YF.bindVertexArrayOES(this.SU),
            this.vb.bind(),
            this.Gd.bind(),
            this.YF.bindVertexArrayOES(null),
            this.vb.Ex(),
            this.Gd.Ex(),
            this.Bba())
          : (this.vb.bind(), this.Gd.bind());
    }
    POa() {
      this.sna
        ? this.YF.bindVertexArrayOES(null)
        : (this.vb.Ex(), this.Gd.Ex());
    }
    TFa(a, b) {
      a = this.O.createShader(a);
      this.O.shaderSource(a, b);
      this.O.compileShader(a);
      return a;
    }
    Sj() {
      return null;
    }
    Nj() {
      return null;
    }
    xd(a) {
      return this.O.getAttribLocation(this.Mp, a);
    }
    getUniformLocation(a) {
      return this.O.getUniformLocation(this.Mp, a);
    }
    bo(a, b) {
      let c = Wa.xOa;
      c[0] = b.m11;
      c[4] = b.m12;
      c[8] = b.m13;
      c[12] = b.m14;
      c[1] = b.m21;
      c[5] = b.m22;
      c[9] = b.m23;
      c[13] = b.m24;
      c[2] = b.m31;
      c[6] = b.m32;
      c[10] = b.m33;
      c[14] = b.m34;
      c[3] = b.m41;
      c[7] = b.m42;
      c[11] = b.m43;
      c[15] = b.m44;
      this.O.uniformMatrix4fv(a, !1, Wa.xOa);
    }
    cq(a, b, c) {
      this.O.activeTexture(33984 + c);
      this.O.bindTexture(3553, b);
      this.O.uniform1i(a, c);
    }
    Vj() {}
  }
  Wa.g = "390";
  Object.assign(Wa.prototype, { j: Wa });
  class Rq extends Wa {
    constructor() {
      super();
    }
    Sj() {
      return "attribute vec2 a_position;\n\nvarying vec2 v_tcoord;\n\nvoid main()\n{\n\tgl_Position = vec4(2.0 * a_position - 1.0, 0.0, 1.0);\n\tv_tcoord = a_position;\n}";
    }
    Nj() {
      return "precision mediump float;\n\nvarying vec2 v_tcoord;\n\nuniform bool u_invert;\nuniform sampler2D u_image;\nuniform sampler2D u_mask;\n\nvoid main()\n{\n\tvec4 color = texture2D(u_image, v_tcoord);\n\tvec4 mask = texture2D(u_mask, v_tcoord);\n\tfloat alpha = u_invert ? 1.0 - mask.a : mask.a;\n\tgl_FragColor = color * alpha;\n}";
    }
    Vj() {
      this.Sa = this.xd("a_position");
      this.Wc.push(new lb(this.Sa, "a_position", null, null, null, null));
      this.sb(this.Sa, 17);
      this.eWa = this.getUniformLocation("u_invert");
      this.Gh = this.getUniformLocation("u_image");
      this.fWa = this.getUniformLocation("u_mask");
    }
  }
  Rq.g = "391";
  Rq.u = Wa;
  Object.assign(Rq.prototype, { j: Rq });
  class ux {
    constructor() {
      this.$a = null;
    }
    pda(a, b, c, d) {
      let e = this.$a;
      e == null &&
        ((e = new Rq()),
        e.init(a),
        e.Kj(4, 1),
        e.vb.setData(e.Sa, [0, 0, 1, 0, 0, 1, 1, 1]),
        (this.$a = e));
      e.Ti();
      e.cq(e.Gh, b.handle, 0);
      e.cq(e.fWa, c.handle, 1);
      e.O.uniform1i(e.eWa, d);
      e.drawArrays(4, 5);
    }
  }
  ux.g = "392";
  Object.assign(ux.prototype, { j: ux });
  class Sq {
    static MAa(a) {
      return Sq.xwa[a >> 2];
    }
  }
  class Tq extends Wa {
    constructor() {
      super();
    }
    Sj() {
      return "attribute vec2 a_position;\nattribute vec2 a_tcoord;\nattribute vec3 a_color;\n\nuniform mat4 u_matrix;\nuniform vec2 u_texture_size;\nuniform float u_zndc;\n\nvarying vec2 v_tcoord;\nvarying vec3 v_color;\n\nvoid main()\n{\n\tgl_Position = u_matrix * vec4(a_position, u_zndc, 1.0);\n\tv_tcoord = vec2(a_tcoord.x, u_texture_size.y - a_tcoord.y) / u_texture_size;  \n\tv_color = a_color;\n}";
    }
    Nj() {
      return "precision mediump float;\n\nuniform sampler2D u_image;\nuniform float u_alpha;\n\nuniform bool u_use_color_transform;\nuniform vec4 u_color_multiplier;\nuniform vec4 u_color_offset;\n\nvarying vec2 v_tcoord;\nvarying vec3 v_color;\n\nvoid main()\n{\n\tvec4 color = texture2D(u_image, v_tcoord);\n\n\t \n\n\t \n\t \n\t \n\t \n\t \n\n\tfloat a = color.a;\n\tvec4 straight = vec4(color.rgb / max(a, 0.001), a);\n\n\tif (u_use_color_transform)\n\t{\n\t\tstraight *= u_color_multiplier;\n\t\tstraight += u_color_offset;\n\t}\n\n\tstraight.a *= u_alpha;\n\tstraight.rgb *= v_color.rgb;\n\n\tvec4 premultiplied = vec4(straight.rgb * straight.a, straight.a);\n\n\t \n\n\t \n\n\tgl_FragColor = premultiplied;\n}\n\n \n \n \n \n \n\n   \n \n \n \n \n\n \n \n\n \n \n ";
    }
    kyb(a, b) {
      this.O.uniform2f(this.Qo, a, b);
    }
    GU(a, b, c, d) {
      this.O.uniform4f(this.Wm, a, b, c, d);
    }
    HU(a, b, c, d) {
      this.O.uniform4f(this.Xm, a, b, c, d);
    }
    Vj() {
      this.Sa = this.xd("a_position");
      this.Wc.push(new lb(this.Sa, "a_position", null, null, null, null));
      this.bd = this.xd("a_tcoord");
      this.Wc.push(new lb(this.bd, "a_tcoord", null, null, null, null));
      this.Ky = this.xd("a_color");
      this.Wc.push(new lb(this.Ky, "a_color", null, null, null, null));
      this.sb(this.Sa, 17);
      this.sb(this.bd, 17);
      this.sb(this.Ky, 18);
      this.eh = this.getUniformLocation("u_matrix");
      this.Qo = this.getUniformLocation("u_texture_size");
      this.Kk = this.getUniformLocation("u_zndc");
      this.Gh = this.getUniformLocation("u_image");
      this.Jk = this.getUniformLocation("u_alpha");
      this.MO = this.getUniformLocation("u_use_color_transform");
      this.Wm = this.getUniformLocation("u_color_multiplier");
      this.Xm = this.getUniformLocation("u_color_offset");
    }
  }
  Tq.g = "393";
  Tq.u = Wa;
  Object.assign(Tq.prototype, { j: Tq });
  class Uq {
    constructor() {
      this.yGa = 0;
      this.$a = new Tq();
      this.ae = Zb;
      this.Xd = Qh;
    }
    init(a) {
      let b = this.$a;
      b.init(a);
      b.sb(b.bd, 13);
      this.grow(64);
    }
    Ea(a) {
      var b = a.Ha;
      let c = a.effect;
      var d = c.qc;
      let e = this.$a;
      e.Ti();
      let f = c.Zq;
      var g = (f.length / 6) | 0;
      if (g != 0) {
        g > this.yGa && this.grow(g);
        var h = b.li(a.hb.dc);
        e.bo(e.eh, h);
        e.cq(e.Gh, d.handle, 0);
        e.O.uniform2f(e.Qo, d.width, d.height);
        e.O.uniform1f(e.Kk, b.KD(a.hb));
        (b.Qc & 2) > 0
          ? (e.O.uniform1i(e.MO, !0),
            (a = b.ki(1).transform),
            (h = a.gf),
            e.O.uniform4f(e.Wm, h.x, h.y, h.z, h.w),
            (a = a.offset),
            e.O.uniform4f(e.Xm, a.x, a.y, a.z, a.w))
          : (e.O.uniform1i(e.MO, !1), e.GU(1, 1, 1, 1), e.HU(0, 0, 0, 0));
        a = e.vb.ec[e.Sa];
        h = e.vb.ec[e.bd];
        var k = e.vb.ec[e.Ky],
          l = b.O;
        if (c.clip) {
          e.O.uniform1f(e.Jk, 0);
          e.vb.Cf();
          l.enable(2960);
          l.stencilFunc(519, 1, 255);
          l.stencilOp(7680, 7680, 7681);
          var n = c.width,
            q = c.height,
            r = a.view,
            t = a.ca;
          g = a.stride;
          r[t] = 0;
          r[t + 1] = q;
          t += g;
          r[t] = n;
          r[t + 1] = 0;
          t += g;
          r[t] = 0;
          r[t + 1] = 0;
          a.ca = t + g;
          r = a.view;
          t = a.ca;
          g = a.stride;
          r[t] = 0;
          r[t + 1] = q;
          t += g;
          r[t] = n;
          r[t + 1] = q;
          t += g;
          r[t] = n;
          r[t + 1] = 0;
          a.ca = t + g;
          h.bQa(0, 0);
          h.bQa(1, 1);
          n = k.view;
          for (q = 0; q < 6; )
            ((r = k.ca),
              (n[r] = 1),
              (n[r + 1] = 1),
              (n[r + 2] = 1),
              (k.ca += k.stride),
              ++q);
          e.O.uniform1f(e.Jk, 0);
          e.vb.upload(6);
          e.drawArrays(6, 4);
          l.stencilFunc(514, 1, 255);
        }
        e.vb.Cf();
        e.O.uniform1f(e.Jk, (b.Qc & 32) > 0 ? b.Yi : 1);
        (b.Qc & 2) > 0
          ? ((b = b.ki(1).transform),
            (n = b.gf),
            e.O.uniform4f(e.Wm, n.x, n.y, n.z, n.w),
            (b = b.offset),
            e.O.uniform4f(e.Xm, b.x, b.y, b.z, b.w))
          : (e.O.uniform4f(e.Wm, 1, 1, 1, 1),
            (b = new H(0, 0, 0, 0)),
            e.O.uniform4f(e.Xm, b.x, b.y, b.z, b.w));
        var x = d.re.kt,
          z = c.color.x,
          A = c.color.y,
          C = c.color.z;
        b = g = 0;
        for (n = f.length; b < n; ) {
          var B = f[b++];
          if (B == 65533) {
            b += 5;
            continue;
          }
          d = f[b++];
          q = f[b++];
          r = d + f[b++];
          t = q + f[b++];
          var D = a.view,
            F = a.ca,
            M = a.stride;
          D[F] = d;
          D[F + 1] = t;
          F += M;
          D[F] = r;
          D[F + 1] = q;
          F += M;
          D[F] = d;
          D[F + 1] = q;
          a.ca = F + M;
          D = a.view;
          F = a.ca;
          M = a.stride;
          D[F] = d;
          D[F + 1] = t;
          F += M;
          D[F] = r;
          D[F + 1] = t;
          F += M;
          D[F] = r;
          D[F + 1] = q;
          a.ca = F + M;
          t = x[B].Pc;
          d = t.x;
          q = t.y;
          r = d + t.w;
          t = q + t.v;
          B = h.view;
          D = h.ca;
          F = h.stride;
          B[D] = d;
          B[D + 1] = t;
          D += F;
          B[D] = r;
          B[D + 1] = q;
          D += F;
          B[D] = d;
          B[D + 1] = q;
          h.ca = D + F;
          B = h.view;
          D = h.ca;
          F = h.stride;
          B[D] = d;
          B[D + 1] = t;
          D += F;
          B[D] = r;
          B[D + 1] = t;
          D += F;
          B[D] = r;
          B[D + 1] = q;
          h.ca = D + F;
          r = f[b++];
          r != 16777215
            ? ((d = ((r >> 16) & 255) * 0.00392156862745098),
              (q = ((r >> 8) & 255) * 0.00392156862745098),
              (r = (r & 255) * 0.00392156862745098))
            : ((d = z), (q = A), (r = C));
          t = k.view;
          for (B = 0; B < 6; )
            ((D = k.ca),
              (t[D] = d),
              (t[D + 1] = q),
              (t[D + 2] = r),
              (k.ca += k.stride),
              ++B);
          ++g;
        }
        g > 0 && (e.vb.upload(g * 6), e.drawArrays(g * 6, 4));
        if (c.br.length > 0)
          for (g = -1, b = 0; b < n; ) {
            if (f[b++] != 65533) {
              b += 5;
              continue;
            }
            r = f[b++];
            A = f[b++];
            B = f[b++];
            C = f[b++];
            x = f[b++];
            z = c.br[++g];
            if (z == null) continue;
            d = z.qc;
            e.cq(e.Gh, d.handle, 0);
            e.kyb(d.width, d.height);
            e.vb.Cf();
            d = z.frame.ea;
            t = B / d.x;
            D = C / d.y;
            q = Math.min(t, D);
            t < D
              ? ((t = C), (C = d.y * q), (A += (t - C) / 2))
              : ((t = B), (B = d.x * q), (r += (t - B) / 2));
            z.frame.Dx &&
              ((t = z.frame.Pc),
              (B *= t.w / d.x),
              (C *= t.v / d.y),
              (r += z.frame.sj.x * q),
              (A += z.frame.sj.y * q));
            d = r;
            q = A;
            r += B;
            t = A + C;
            A = a.view;
            C = a.ca;
            B = a.stride;
            A[C] = d;
            A[C + 1] = t;
            C += B;
            A[C] = r;
            A[C + 1] = q;
            C += B;
            A[C] = d;
            A[C + 1] = q;
            a.ca = C + B;
            A = a.view;
            C = a.ca;
            B = a.stride;
            A[C] = d;
            A[C + 1] = t;
            C += B;
            A[C] = r;
            A[C + 1] = t;
            C += B;
            A[C] = r;
            A[C + 1] = q;
            a.ca = C + B;
            t = z.frame.Pc;
            d = t.x;
            q = t.y;
            r = d + t.w;
            t = q + t.v;
            z = h.view;
            A = h.ca;
            C = h.stride;
            z[A] = d;
            z[A + 1] = t;
            A += C;
            z[A] = r;
            z[A + 1] = q;
            A += C;
            z[A] = d;
            z[A + 1] = q;
            h.ca = A + C;
            z = h.view;
            A = h.ca;
            C = h.stride;
            z[A] = d;
            z[A + 1] = t;
            A += C;
            z[A] = r;
            z[A + 1] = t;
            A += C;
            z[A] = r;
            z[A + 1] = q;
            h.ca = A + C;
            d = ((x >> 16) & 255) * 0.00392156862745098;
            q = ((x >> 8) & 255) * 0.00392156862745098;
            r = (x & 255) * 0.00392156862745098;
            t = k.view;
            for (x = 0; x < 6; )
              ((z = k.ca),
                (t[z] = d),
                (t[z + 1] = q),
                (t[z + 2] = r),
                (k.ca += k.stride),
                ++x);
            e.vb.upload(6);
            e.drawArrays(6, 4);
          }
        c.clip && l.disable(2960);
      }
    }
    grow(a) {
      this.yGa = a;
      let b = this.$a;
      b.vb == null ? b.Kj(a * 6, 2) : b.vb.grow(a * 6);
    }
  }
  Uq.g = "394";
  Uq.Rb = [wb];
  Object.assign(Uq.prototype, { j: Uq });
  class Qk {
    constructor() {
      this.$a = new bk();
      this.ae = Xb;
      this.Xd = Yi;
    }
    init(a) {
      this.$a.init(a);
      this.$a.sb(this.$a.Sa, 17);
      this.$a.Kj(128, 2);
      this.$a.ez(128, 2);
    }
    Ea(a) {
      let b = a.effect,
        c = this.$a;
      c.Ti();
      let d = a.Ha.li(a.hb.dc);
      c.bo(c.eh, d);
      c.O.uniform1f(c.Kk, a.Ha.KD(a.hb));
      a = b.color;
      c.O.uniform4f(c.di, a.x, a.y, a.z, a.w);
      a = b.Rd;
      c.vb.grow(a);
      c.vb.Cf();
      c.vb.ec[c.Sa].X6(b.Yg, a);
      c.vb.upload(b.Rd);
      c.Gd.grow(b.we);
      c.Gd.setData(b.indices);
      c.Gd.upload(b.we);
      c.drawElements(b.we, 4);
    }
  }
  Qk.g = "395";
  Qk.Rb = [wb];
  Object.assign(Qk.prototype, { j: Qk });
  class Vq extends Wa {
    constructor() {
      super();
    }
    Sj() {
      return "attribute vec4 a_position;\nattribute vec2 a_tcoord;\nattribute vec4 a_color;\n\nvarying vec2 v_tcoord;\nvarying vec4 v_color;\n\nuniform vec2 u_texture_size;\nuniform mat4 u_matrix;\n\nvoid main()\n{\n\tgl_Position = u_matrix * a_position;\n\tv_tcoord = vec2(a_tcoord.x, u_texture_size.y - a_tcoord.y) / u_texture_size;  \n\tv_color = a_color.bgra;  \n}";
    }
    Nj() {
      return "precision mediump float;\n\nuniform sampler2D u_image;\nuniform int u_mode;\nuniform float u_alpha;\n\nvarying vec2 v_tcoord;\nvarying vec4 v_color;\n\nvoid main()\n{\n\tvec4 color;\n\tif (u_mode == 0)\n\t\tcolor = v_color;\n\telse\n\t{\n\t\tcolor = texture2D(u_image, v_tcoord);\n\t\tif (u_mode == 2)\n\t\t\tcolor = v_color * color.w;\n\t}\n\tgl_FragColor = color * u_alpha;\n}";
    }
    Vj() {
      this.Sa = this.xd("a_position");
      this.Wc.push(new lb(this.Sa, "a_position", null, null, null, null));
      this.bd = this.xd("a_tcoord");
      this.Wc.push(new lb(this.bd, "a_tcoord", null, null, null, null));
      this.Ky = this.xd("a_color");
      this.Wc.push(new lb(this.Ky, "a_color", null, null, null, null));
      this.sb(this.Sa, 19);
      this.sb(this.bd, 17);
      this.sb(this.Ky, 19);
      this.Qo = this.getUniformLocation("u_texture_size");
      this.eh = this.getUniformLocation("u_matrix");
      this.Gh = this.getUniformLocation("u_image");
      this.zaa = this.getUniformLocation("u_mode");
      this.Jk = this.getUniformLocation("u_alpha");
    }
  }
  Vq.g = "396";
  Vq.u = Wa;
  Object.assign(Vq.prototype, { j: Vq });
  class Wq {
    constructor() {
      this.UR = this.mK = 0;
      this.$a = new Vq();
      this.ae = Zb;
      this.Xd = Rj;
    }
    init(a) {
      let b = this.$a;
      b.init(a);
      b.sb(b.Sa, 9);
      b.sb(b.bd, 13);
      b.sb(b.Ky, 7, null, null, !0);
      this.mK = this.UR = 0;
      this.grow(100);
    }
    Ea(a) {
      var b = a.Ha,
        c = a.hb.effect,
        d = c.qc;
      let e = this.$a;
      e.Ti();
      a = c.IPa ? b.li(a.hb.dc) : b.nfa(a.hb.dc);
      e.bo(e.eh, a);
      this.mK = c.grid.length;
      this.mK > this.UR && this.grow(this.mK);
      e.cq(e.Gh, d.handle, 0);
      e.O.uniform2f(e.Qo, d.width, d.height);
      e.O.uniform1f(e.Jk, (b.Qc & 32) > 0 ? b.Yi : 1);
      b = c.grid;
      var f = c.charset;
      d = f.lineHeight;
      a = f.bea;
      let g;
      var h = c.fillColor != null;
      let k = c.Nxa;
      var l = c.fillColor;
      let n = e.vb.ec[e.Sa],
        q = e.vb.ec[e.bd],
        r = e.vb.ec[e.Ky],
        t,
        x;
      let z, A;
      if (h) {
        var C = c.cols * a;
        z = c.rows * d;
        n.xla(0);
        n.Ina(0, z, 0, 0, C, z, C, 0);
        r.xla(0);
        r.dG(l);
        e.O.uniform1i(e.zaa, 0);
        e.vb.upload(4);
        e.drawElements(6, 4);
      }
      if (k) {
        n.Cf();
        r.Cf();
        for (A = c = 0; c < this.mK; )
          ((g = b[c++]),
            g.UY != -1 &&
              ((t = g.x * a),
              (x = g.y * d),
              n.Ina(t, x + d, t, x, t + a, x + d, t + a, x),
              (C = g.UY != -1 ? -16777216 | g.UY : h ? l : 0),
              r.dG(C),
              ++A));
        A > 0 &&
          (e.O.uniform1i(e.zaa, 0),
          e.vb.upload(A * 4),
          e.drawElements(A * 6, 4));
      }
      f = f.Zy;
      n.Cf();
      q.Cf();
      r.Cf();
      for (A = c = 0; c < this.mK; ) {
        g = b[c++];
        if (g.code <= 32) continue;
        l = f[g.code];
        l == null && (l = f[63]);
        t = g.x * a + l.XU;
        x = g.y * d + l.sM;
        C = l.width;
        z = l.height;
        h = l.x;
        l = l.y;
        let B = h + C,
          D = l + z;
        n.Ina(t, x + z, t, x, t + C, x + z, t + C, x);
        q.VO(h, D, h, l, B, D, B, l);
        k && ((C = g.nma != -1 ? -16777216 | g.nma : 0), r.dG(C));
        ++A;
      }
      A != 0 &&
        (e.O.uniform1i(e.zaa, k ? 2 : 1),
        e.vb.upload(A * 4),
        e.drawElements(A * 6, 4));
    }
    grow(a) {
      var b = this.UR;
      let c = a - this.UR;
      this.UR = a;
      let d = this.$a;
      d.vb == null
        ? (d.ez(a * 6, 1), d.Kj(a * 4, 2))
        : (d.Gd.grow(a * 6), d.vb.grow(a * 4));
      let e = b;
      d.Gd.ec.sn = b * 6;
      for (b = 0; b < c; )
        (++b, d.Gd.rB(0, 2, 1, e * 4), d.Gd.rB(1, 2, 3, e * 4), ++e);
      d.Gd.upload(a * 6);
    }
  }
  Wq.g = "397";
  Wq.Rb = [wb];
  Object.assign(Wq.prototype, { j: Wq });
  class Xq extends Wa {
    constructor() {
      super();
    }
    Sj() {
      return "uniform mat4 u_pvw;\n\nattribute vec4 a_position;\n\nvoid main()\n{\n\tgl_Position = u_pvw * a_position;\n}";
    }
    Nj() {
      return "precision mediump float;\n\nuniform float u_alpha;\nuniform vec4 u_color;\nuniform vec4 u_color_multiplier;\nuniform vec4 u_color_offset;\n\nvoid main()\n{\n\tvec4 color = u_color * u_color_multiplier + u_color_offset;\n\tgl_FragColor = vec4(color.rgb * color.a, color.a * u_alpha);\n}";
    }
    Vj() {
      this.Sa = this.xd("a_position");
      this.Wc.push(new lb(this.Sa, "a_position", null, null, null, null));
      this.sb(this.Sa, 19);
      this.jWa = this.getUniformLocation("u_pvw");
      this.Jk = this.getUniformLocation("u_alpha");
      this.di = this.getUniformLocation("u_color");
      this.Wm = this.getUniformLocation("u_color_multiplier");
      this.Xm = this.getUniformLocation("u_color_offset");
    }
  }
  Xq.g = "398";
  Xq.u = Wa;
  Object.assign(Xq.prototype, { j: Xq });
  class Yq {
    constructor() {
      this.$a = new Xq();
      this.ae = $e;
      this.Xd = yg;
    }
    init(a) {
      let b = this.$a;
      b.init(a);
      b.sb(b.Sa, 18, 0, 0);
    }
    Ea(a) {
      var b = a.Ha;
      let c = this.$a;
      c.Ti();
      let d = a.hb;
      a = a.effect.color;
      c.O.uniform4f(c.di, a.x, a.y, a.z, a.w);
      a = b.H0(d.dc);
      c.bo(c.jWa, a);
      c.O.uniform1f(c.Jk, (b.Qc & 32) > 0 ? b.Yi : 1);
      (b.Qc & 2) > 0
        ? ((b = b.ki(1)),
          (a = b.transform.gf),
          c.O.uniform4f(c.Wm, a.x, a.y, a.z, a.w),
          (b = b.transform.offset),
          c.O.uniform4f(c.Xm, b.x, b.y, b.z, b.w))
        : (c.O.uniform4f(c.Wm, 1, 1, 1, 1),
          (b = new H(0, 0, 0, 0)),
          c.O.uniform4f(c.Xm, b.x, b.y, b.z, b.w));
      d.$F == null
        ? (c.Kj(d.jp.Rd, 1),
          c.vb.rL(d.jp),
          (d.$F = c.vb),
          d.$F.upload(24),
          d.jp.Zub &&
            (c.ez(d.jp.oK * 3, 1),
            c.Gd.rL(d.jp),
            (d.Uz = c.Gd),
            d.Uz.upload(36)))
        : (d.Uz.rL(d.jp), d.$F.rL(d.jp));
      c.u3a(d);
    }
  }
  Yq.g = "399";
  Yq.Rb = [wb];
  Object.assign(Yq.prototype, { j: Yq });
  class Zq extends Wa {
    constructor() {
      super();
    }
    Sj() {
      return "precision mediump float;\n\nuniform mat4 u_matrix;\nuniform vec2 u_size;\nuniform float u_zndc;\n\nuniform float u_alpha;\nuniform vec4 u_color;\nuniform vec4 u_color_multiplier;\nuniform vec4 u_color_offset;\n\nattribute vec2 a_position;\n\nvarying vec4 v_color;\n\nvoid main()\n{\n\tvec4 color = u_color;\n\tfloat alpha = max(color.a, 0.0001);  \n\n\tcolor = vec4(color.rgb / alpha, color.a) * u_color_multiplier + u_color_offset;\n\tcolor = clamp(color, 0.0, 1.0);\n\tcolor = vec4(color.rgb * color.a, color.a);\n\n\tv_color = color * u_alpha;\n\tgl_Position = u_matrix * vec4(a_position * u_size, u_zndc, 1.0);\n}";
    }
    Nj() {
      return "precision mediump float;\n\nvarying vec4 v_color;\n\nvoid main()\n{\n\tgl_FragColor = v_color;\n}";
    }
    GU(a, b, c, d) {
      this.O.uniform4f(this.Wm, a, b, c, d);
    }
    HU(a, b, c, d) {
      this.O.uniform4f(this.Xm, a, b, c, d);
    }
    Vj() {
      this.Sa = this.xd("a_position");
      this.Wc.push(new lb(this.Sa, "a_position", null, null, null, null));
      this.sb(this.Sa, 17);
      this.eh = this.getUniformLocation("u_matrix");
      this.Aaa = this.getUniformLocation("u_size");
      this.Kk = this.getUniformLocation("u_zndc");
      this.Jk = this.getUniformLocation("u_alpha");
      this.di = this.getUniformLocation("u_color");
      this.Wm = this.getUniformLocation("u_color_multiplier");
      this.Xm = this.getUniformLocation("u_color_offset");
    }
  }
  Zq.g = "39A";
  Zq.u = Wa;
  Object.assign(Zq.prototype, { j: Zq });
  class $q {
    constructor() {
      this.$a = new Zq();
      this.ae = Zb;
      this.Xd = yg;
    }
    init(a) {
      let b = this.$a;
      b.init(a);
      b.Kj(4, 1);
      b.vb.setData(b.Sa, [0, 1, 1, 1, 0, 0, 1, 0]);
      b.vb.upload(4);
    }
    Ea(a) {
      var b = a.Ha,
        c = a.hb,
        d = a.effect;
      a = this.$a;
      a.Ti();
      d = d.color;
      a.O.uniform4f(a.di, d.x, d.y, d.z, d.w);
      d = b.li(c.dc);
      a.bo(a.eh, d);
      a.O.uniform1f(a.Jk, (b.Qc & 32) > 0 ? b.Yi : 1);
      d = c.size;
      a.O.uniform2f(a.Aaa, d.x, d.y);
      a.O.uniform1f(a.Kk, b.KD(c));
      a.GU(1, 1, 1, 1);
      a.HU(0, 0, 0, 0);
      (b.Qc & 2) > 0 &&
        ((b = b.ki(1)),
        (c = b.transform.gf),
        a.O.uniform4f(a.Wm, c.x, c.y, c.z, c.w),
        (b = b.transform.offset),
        a.O.uniform4f(a.Xm, b.x, b.y, b.z, b.w));
      a.drawArrays(4, 5);
    }
  }
  $q.g = "39B";
  $q.Rb = [wb];
  Object.assign($q.prototype, { j: $q });
  class Rk {
    constructor() {
      this.$a = new bk();
      this.ae = Xb;
      this.Xd = Zi;
    }
    init(a) {
      this.$a.init(a);
      this.$a.sb(this.$a.Sa, 17);
      this.$a.Kj(1024, 1);
      this.$a.ez(1024, 1);
    }
    Ea(a) {
      let b = a.effect;
      if (b.we != 0) {
        var c = this.$a;
        c.Ti();
        var d = a.Ha.li(a.hb.dc);
        c.bo(c.eh, d);
        c.O.uniform1f(c.Kk, a.Ha.KD(a.hb));
        a = b.color;
        c.O.uniform4f(c.di, a.x, a.y, a.z, a.w);
        c.vb.grow(b.Rd);
        a = c.vb.ec[c.Sa];
        a.Cf();
        a.X6(b.Yg, b.Rd);
        c.vb.upload(b.Rd);
        c.Gd.grow(b.we);
        c.Gd.setData(b.indices);
        c.Gd.upload(b.we);
        c.drawElements(b.we, 4);
      }
    }
  }
  Rk.g = "39C";
  Rk.Rb = [wb];
  Object.assign(Rk.prototype, { j: Rk });
  class ar {
    constructor() {
      this.$s = new Xh();
      this.ae = Zb;
      this.Xd = Sj;
    }
    init(a) {
      this.$s.init(a);
    }
    Ea(a) {
      let b = a.effect;
      a.effect = a.effect.Ar;
      this.$s.Ea(a);
      a.effect = b;
    }
  }
  ar.g = "39D";
  ar.Rb = [wb];
  Object.assign(ar.prototype, { j: ar });
  class br extends Wa {
    constructor() {
      super();
    }
    Sj() {
      return "precision mediump float;\n\nuniform float u_zndc;\n\nattribute vec2 a_position;\nattribute vec2 a_tcoord;\nvarying vec2 v_tcoord;\n\nvoid main()\n{\n\tgl_Position.xy = 2.0 * a_position - 1.0;\n\tgl_Position.z = u_zndc;\n\tgl_Position.w = 1.0;\n\tv_tcoord = a_tcoord;\n}";
    }
    Nj() {
      return "precision mediump float;\n\nuniform bool u_useTexture;\nuniform sampler2D u_image;\nuniform float u_alpha;\nuniform vec4 u_color;\n\nvarying vec2 v_tcoord;\n\nvoid main()\n{\n\tif (u_useTexture)\n\t\tgl_FragColor = texture2D(u_image, v_tcoord) * u_alpha;\n\telse\n\t\tgl_FragColor = u_color * u_alpha;\n}\n";
    }
    Vj() {
      this.Sa = this.xd("a_position");
      this.Wc.push(new lb(this.Sa, "a_position", null, null, null, null));
      this.bd = this.xd("a_tcoord");
      this.Wc.push(new lb(this.bd, "a_tcoord", null, null, null, null));
      this.sb(this.Sa, 17);
      this.sb(this.bd, 17);
      this.Kk = this.getUniformLocation("u_zndc");
      this.zua = this.getUniformLocation("u_useTexture");
      this.Gh = this.getUniformLocation("u_image");
      this.Jk = this.getUniformLocation("u_alpha");
      this.di = this.getUniformLocation("u_color");
    }
  }
  br.g = "39E";
  br.u = Wa;
  Object.assign(br.prototype, { j: br });
  class cr {
    constructor() {
      this.$a = new br();
      this.ae = Zb;
      this.Xd = Mh;
    }
    init(a) {
      let b = this.$a;
      b.init(a);
      b.sb(b.Sa, 17);
      b.sb(b.bd, 17);
      b.Kj(4, 1);
      b.vb.setData(b.bd, [0, 0, 1, 0, 0, 1, 1, 1]);
      a = a.O;
      this.Oya = a.createTexture();
      a.bindTexture(3553, this.Oya);
      a.texImage2D(
        3553,
        0,
        6408,
        1,
        1,
        0,
        6408,
        5121,
        new Uint8Array([255, 255, 255, 255]),
      );
      a.texParameteri(3553, 10241, 9729);
      a.texParameteri(3553, 10240, 9729);
      a.bindTexture(3553, null);
    }
    Ea(a) {
      var b = a.Ha,
        c = a.effect,
        d = c.qc;
      let e = (a = 0),
        f = 1;
      var g = 1,
        h = c.ELa;
      h != null &&
        ((g = b.currentTarget),
        (a = h.x / g.width),
        (e = h.y / g.height),
        (f = h.w / g.width),
        (g = h.v / g.height),
        (e = 1 - g - e));
      h = this.$a;
      h.Ti();
      d != null
        ? (h.cq(h.Gh, d.handle, 0), h.O.uniform1i(h.zua, !0))
        : (h.cq(h.Gh, this.Oya, 0),
          (c = c.color),
          (d = c.w),
          h.O.uniform4f(h.di, c.x * d, c.y * d, c.z * d, d),
          h.O.uniform1i(h.zua, !1));
      h.O.uniform1f(h.Jk, (b.Qc & 32) > 0 ? b.Yi : 1);
      b = h.vb.ec[h.Sa];
      b.Cf();
      b.mY(a, e, a + f, e, a, e + g, a + f, e + g);
      h.vb.upload(4);
      h.drawArrays(4, 5);
    }
  }
  cr.g = "39F";
  cr.Rb = [wb];
  Object.assign(cr.prototype, { j: cr });
  class dr extends Wa {
    constructor() {
      super();
    }
    Sj() {
      return "uniform float u_zndc;\nuniform mat4 u_matrix;\nuniform vec2 u_texture_size;\nuniform vec4 u_startColor;\nuniform vec4 u_endColor;\nuniform vec2 u_pos[4];  \n\nattribute float a_t;  \nattribute float a_index;  \nattribute vec2 a_scale;\nattribute float a_rotation;\nattribute vec2 a_translation;\nattribute vec2 a_size;\nattribute vec2 a_tcoord;\nattribute float a_alpha;\n\nvarying vec2 v_tcoord;\nvarying vec4 v_color;\n\nvoid main()\n{\n\tfloat sx = a_scale.x;\n\tfloat sy = a_scale.y;\n\tfloat rx = sx * 0.5;\n\tfloat ry = sy * 0.5;\n\tfloat c = cos(a_rotation);\n\tfloat s = sin(a_rotation);\n\tfloat b11 = sx * c;\n\tfloat b21 = sy * s;\n\tfloat b12 = sx * -s;\n\tfloat b22 = sy * c;\n\tfloat bx = -(rx * c) + (ry * s) + a_translation.x;\n\tfloat by = -(rx * s) - (ry * c) + a_translation.y;\n\n\tmat4 m = mat4(b11, b21, 0.0, 0.0, b12, b22, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, bx, by, 0.0, 1.0);\n\tgl_Position = u_matrix * m * vec4(u_pos[int(a_index)] * a_size * 0.5, u_zndc, 1.0);\n\n\tv_tcoord = vec2(a_tcoord.x, u_texture_size.y - a_tcoord.y) / u_texture_size;  \n\tv_color = mix(u_startColor, u_endColor, a_t) * a_alpha;\n}";
    }
    Nj() {
      return "precision mediump float;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_tcoord;\nvarying vec4 v_color;\n\nvoid main()\n{\n\tgl_FragColor = texture2D(u_image, v_tcoord) * v_color;\n}";
    }
    jyb(a, b, c, d) {
      this.O.uniform4f(this.lWa, a, b, c, d);
    }
    iyb(a, b, c, d) {
      this.O.uniform4f(this.cWa, a, b, c, d);
    }
    Vj() {
      this.Maa = this.xd("a_t");
      this.Wc.push(new lb(this.Maa, "a_t", null, null, null, null));
      this.nY = this.xd("a_index");
      this.Wc.push(new lb(this.nY, "a_index", null, null, null, null));
      this.Laa = this.xd("a_scale");
      this.Wc.push(new lb(this.Laa, "a_scale", null, null, null, null));
      this.Kaa = this.xd("a_rotation");
      this.Wc.push(new lb(this.Kaa, "a_rotation", null, null, null, null));
      this.Naa = this.xd("a_translation");
      this.Wc.push(new lb(this.Naa, "a_translation", null, null, null, null));
      this.oY = this.xd("a_size");
      this.Wc.push(new lb(this.oY, "a_size", null, null, null, null));
      this.bd = this.xd("a_tcoord");
      this.Wc.push(new lb(this.bd, "a_tcoord", null, null, null, null));
      this.Jy = this.xd("a_alpha");
      this.Wc.push(new lb(this.Jy, "a_alpha", null, null, null, null));
      this.sb(this.Maa, 16);
      this.sb(this.nY, 16);
      this.sb(this.Laa, 17);
      this.sb(this.Kaa, 16);
      this.sb(this.Naa, 17);
      this.sb(this.oY, 17);
      this.sb(this.bd, 17);
      this.sb(this.Jy, 16);
      this.Kk = this.getUniformLocation("u_zndc");
      this.eh = this.getUniformLocation("u_matrix");
      this.Qo = this.getUniformLocation("u_texture_size");
      this.lWa = this.getUniformLocation("u_startColor");
      this.cWa = this.getUniformLocation("u_endColor");
      this.iWa = this.getUniformLocation("u_pos");
      this.Gh = this.getUniformLocation("u_image");
    }
  }
  dr.g = "3A0";
  dr.u = Wa;
  Object.assign(dr.prototype, { j: dr });
  class er {
    constructor() {
      this.first = !0;
      this.$Pa = new H(1, 1, 1, 1);
      this.$J = 0;
      this.$a = new dr();
      this.ae = Xb;
      this.Xd = Ah;
    }
    init(a) {
      let b = this.$a;
      b.init(a);
      b.sb(b.nY, 4, 1);
      b.sb(b.oY, 13);
      b.sb(b.bd, 13);
      this.grow(1024);
    }
    Ea(a) {
      var b = a.Ha,
        c = a.hb,
        d = a.effect;
      if (d.rl.length != 0) {
        a = d.qc;
        var e = b.li(c.dc),
          f = d.rl,
          g = d.rl.length;
        g > this.$J && this.grow(g + 100);
        var h = this.$a;
        h.Ti();
        h.cq(h.Gh, a.handle, 0);
        h.O.uniform2f(h.Qo, a.width, a.height);
        h.bo(h.eh, e);
        h.O.uniform1f(h.Kk, b.KD(c));
        this.first &&
          (b.O.uniform2fv(h.iWa, [-1, -1, 1, -1, 1, 1, -1, 1]),
          (this.first = !1));
        b = d.yP[0];
        b = b != null ? b : this.$Pa;
        h.jyb(b.x, b.y, b.z, b.w);
        d = d.yP[1];
        b = d != null ? d : this.$Pa;
        h.iyb(b.x, b.y, b.z, b.w);
        d = -1;
        var k = 0,
          l = 0,
          n = 0,
          q = 0;
        c = b = 0;
        var r = h.vb;
        r.Cf();
        e = r.ec[h.Laa];
        var t = r.ec[h.Kaa],
          x = r.ec[h.Naa],
          z = r.ec[h.oY],
          A = r.ec[h.bd],
          C = r.ec[h.Maa];
        r = r.ec[h.Jy];
        for (var B = 0; B < g; ) {
          var D = f[B++];
          D.frame != d &&
            ((d = D.frame),
            (k = a.re.kt[d]),
            k.Dx ? ((b = k.Pc.w), (c = k.Pc.v)) : ((b = k.ea.x), (c = k.ea.y)),
            (q = k.Pc),
            (k = q.x),
            (l = q.y),
            (n = k + q.w),
            (q = l + q.v));
          var F = D.uka;
          let M = D.vka;
          e.mY(F, M, F, M, F, M, F, M);
          F = D.rotation;
          t.lY(F, F, F, F);
          x.mY(D.x, D.y, D.x, D.y, D.x, D.y, D.x, D.y);
          z.VO(b, c, b, c, b, c, b, c);
          A.VO(k, q, n, q, n, l, k, l);
          F = D.cYa;
          C.lY(F, F, F, F);
          D = D.alpha;
          r.lY(D, D, D, D);
        }
        h.vb.upload(g * 4);
        h.drawElements(g * 6, 4);
      }
    }
    grow(a) {
      var b = this.$J;
      let c = a - this.$J;
      this.$J = a;
      let d = this.$a;
      d.vb == null
        ? (d.ez(a * 6, 1), d.Kj(a * 4, 2))
        : (d.Gd.grow(a * 6), d.vb.grow(a * 4));
      var e = d.Gd.ec;
      let f = b;
      e.sn = b * 6;
      let g = 0;
      for (; g < c; ) (++g, e.rB(0, 2, 1, f * 4), e.rB(0, 3, 2, f * 4), ++f);
      d.Gd.upload(a * 6);
      e = d.vb.next.ec[d.nY];
      e.xla(b * 4);
      for (b = 0; b < c; ) (++b, e.lAb());
      d.vb.next.upload(a * 4);
    }
  }
  er.g = "3A1";
  er.Rb = [wb];
  Object.assign(er.prototype, { j: er });
  class fr extends Wa {
    constructor() {
      super();
    }
    Sj() {
      return "attribute vec2 a_position;\n\nuniform mat4 u_matrix;\nuniform float u_zndc;\n\nvoid main()\n{\n\tgl_Position = u_matrix * vec4(a_position, u_zndc, 1.0);\n}";
    }
    Nj() {
      return "precision mediump float;\n\nuniform vec4 u_color;\n\nvoid main()\n{\n\tgl_FragColor = u_color.bgra;\n}";
    }
    Vj() {
      this.Sa = this.xd("a_position");
      this.Wc.push(new lb(this.Sa, "a_position", null, null, null, null));
      this.sb(this.Sa, 17);
      this.eh = this.getUniformLocation("u_matrix");
      this.Kk = this.getUniformLocation("u_zndc");
      this.di = this.getUniformLocation("u_color");
    }
  }
  fr.g = "3A2";
  fr.u = Wa;
  Object.assign(fr.prototype, { j: fr });
  class Xh {
    constructor() {
      this.Yn = Array(1024);
      this.Aka = new H(0, 0, 0, 0);
      this.$a = new fr();
      this.ae = Xb;
      this.Xd = ke;
    }
    init(a) {
      let b = this.$a;
      b.init(a);
      b.sb(b.Sa, 17);
      b.Kj(1, 2);
    }
    Ea(a) {
      var b = a.Ha;
      let c = this.$a;
      c.Ti();
      var d = a.effect;
      let e = d.wd,
        f = d.values;
      d = d.Sc;
      if (d != 0) {
        var g = null;
        (b.Qc & 2) > 0 && (g = b.ki(1).transform);
        var h = b.li(a.hb.dc);
        c.bo(c.eh, h);
        c.O.uniform4f(c.di, 0, 0, 0, 1);
        c.O.uniform1f(c.Kk, b.KD(a.hb));
        b = a = 0;
        h = this.Yn;
        h.length < f.length && (h = this.Yn = Array(f.length * 2));
        var k = c.vb;
        k.Cf();
        for (var l = 0, n = 0, q = 0, r = 0, t; a < d; ) {
          t = e[a++];
          switch (t) {
            case 1:
              r == 1 && (q -= 2);
              l = f[b++];
              n = f[b++];
              h[q++] = l;
              h[q++] = n;
              break;
            case 2:
              r == 2 && ((h[q++] = l), (h[q++] = n));
              l = f[b++];
              n = f[b++];
              h[q++] = l;
              h[q++] = n;
              break;
            case 3:
              r == 1
                ? ((q -= 2), (b += 2))
                : ((h[q++] = l),
                  (h[q++] = n),
                  (l = f[b++]),
                  (n = f[b++]),
                  (h[q++] = l),
                  (h[q++] = n));
              break;
            case 4:
              r = this.HQ(f[b++], Math.min(f[b++], 1), g);
              c.O.uniform4f(c.di, r.x, r.y, r.z, r.w);
              ++b;
              break;
            case 5:
              r = this.HQ(f[b++], Math.min(f[b++], 1), g);
              c.O.uniform4f(c.di, r.x, r.y, r.z, r.w);
              break;
            case 8:
              debugger;
              break;
            case 9:
              debugger;
              break;
            case 10:
              ((q >>= 1),
                q > 0 &&
                  (k.grow(q),
                  k.ec[c.Sa].Cf(),
                  k.ec[c.Sa].X6(h, q),
                  c.vb.upload(q),
                  c.drawArrays(q, 1),
                  (q = 0)));
          }
          r = t;
        }
      }
    }
    HQ(a, b, c) {
      var d = this.Aka;
      if (c != null) {
        d.x = ((a >> 16) & 255) / 255;
        d.y = ((a >> 8) & 255) / 255;
        d.z = (a & 255) / 255;
        d.w = b;
        a = c.gf;
        b = c.offset;
        let e = d;
        d = e.x * a.x + b.x;
        c = e.y * a.y + b.y;
        let f = e.z * a.z + b.z;
        a = e.w * a.w + b.w;
        d = new H(
          d < 0 ? 0 : d > 1 ? 1 : d,
          c < 0 ? 0 : c > 1 ? 1 : c,
          f < 0 ? 0 : f > 1 ? 1 : f,
          a < 0 ? 0 : a > 1 ? 1 : a,
        );
      } else
        ((c = d),
          (c.x = a & 255),
          (c.y = (a >> 8) & 255),
          (c.z = (a >> 16) & 255),
          (c.w = b));
      return d;
    }
  }
  Xh.g = "3A3";
  Xh.Rb = [wb];
  Object.assign(Xh.prototype, { j: Xh });
  class gr extends Wa {
    constructor() {
      super();
    }
    Sj() {
      return "precision mediump float;\n\nattribute vec2 a_position;\nuniform mat4 u_matrix;\nuniform float u_zndc;\n\nuniform vec4 u_frame;\nuniform float u_radius;\n\nvarying vec2 v_tcoord;\n\nvoid main()\n{\n\tgl_Position = u_matrix * vec4(a_position, u_zndc, 1.0);\n\tv_tcoord = ((a_position / u_radius) + 1.0) / 2.0;  \n\tv_tcoord *= u_frame.zw;\n\tv_tcoord += u_frame.xy;\n}";
    }
    Nj() {
      return "precision mediump float;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_tcoord;\n\nvoid main()\n{\n\tgl_FragColor = texture2D(u_image, v_tcoord);\n}";
    }
    Vj() {
      this.Sa = this.xd("a_position");
      this.Wc.push(new lb(this.Sa, "a_position", null, null, null, null));
      this.sb(this.Sa, 17);
      this.eh = this.getUniformLocation("u_matrix");
      this.Kk = this.getUniformLocation("u_zndc");
      this.dWa = this.getUniformLocation("u_frame");
      this.kWa = this.getUniformLocation("u_radius");
      this.Gh = this.getUniformLocation("u_image");
    }
  }
  gr.g = "3A4";
  gr.u = Wa;
  Object.assign(gr.prototype, { j: gr });
  class Sk {
    constructor() {
      this.$a = new gr();
      this.ae = Xb;
      this.Xd = Zj;
    }
    init(a) {
      this.$a.init(a);
      this.$a.sb(this.$a.Sa, 17);
      this.$a.Kj(128, 2);
      this.$a.ez(128, 2);
    }
    Ea(a) {
      let b = a.effect;
      if (b.we != 0) {
        var c = b.qc;
        if (!c.Zg) {
          var d = this.$a;
          d.Ti();
          d.cq(d.Gh, c.handle, 0);
          d.O.uniform1f(d.kWa, b.DA);
          var e = c.re.mt.v[b.frame].Pc,
            f = e.v / c.height;
          d.O.uniform4f(
            d.dWa,
            e.x / c.width,
            1 - (e.y / c.height + f),
            e.w / c.width,
            f,
          );
          a = a.Ha.li(a.hb.dc);
          d.bo(d.eh, a);
          d.O.uniform1f(d.Kk, 1);
          a = b.Rd;
          d.vb.grow(a);
          d.vb.Cf();
          d.vb.ec[d.Sa].X6(b.Yg, a);
          d.vb.upload(b.Rd);
          d.Gd.grow(b.we);
          d.Gd.setData(b.indices);
          d.Gd.upload(b.we);
          d.drawElements(b.we, 4);
        }
      }
    }
  }
  Sk.g = "3A5";
  Sk.Rb = [wb];
  Object.assign(Sk.prototype, { j: Sk });
  class hr extends Wa {
    constructor() {
      super();
    }
    Sj() {
      return "attribute vec2 a_position;\nattribute vec2 a_tcoord;\n\nuniform mat4 u_matrix;\nuniform vec2 u_size;\nuniform vec2 u_texture_size;\nuniform float u_zndc;\n\nvarying vec2 v_tcoord;\n\nvoid main()\n{\n\tgl_Position = u_matrix * vec4(a_position * u_size, u_zndc, 1.0);\n\tv_tcoord = vec2(a_tcoord.x, u_texture_size.y - a_tcoord.y) / u_texture_size;  \n}";
    }
    Nj() {
      return "precision mediump float;\n\nuniform sampler2D u_image;\nuniform float u_alpha;\n\nuniform bool u_use_color_transform;\nuniform vec4 u_color_multiplier;\nuniform vec4 u_color_offset;\n\nuniform vec4 u_color;\n\nvarying vec2 v_tcoord;\n\nvoid main()\n{\n\tvec4 color = texture2D(u_image, v_tcoord);\n\n\t \n\n\t \n\t \n\t \n\t \n\t \n\n\t \n\n\tfloat a = color.a;\n\tvec4 straight = vec4(color.rgb / max(a, 0.001), a);\n\n\tif (u_use_color_transform)\n\t{\n\t\tstraight *= u_color_multiplier;\n\t\tstraight += u_color_offset;\n\t}\n\n\tstraight.a *= u_alpha * u_color.a;\n\tstraight.rgb *= u_color.rgb;\n\n\tvec4 premultiplied = vec4(straight.rgb * straight.a, straight.a);\n\n\t \n\n\t \n\n\tgl_FragColor = premultiplied;\n}\n\n \n \n \n \n \n\n   \n \n \n \n \n\n \n \n\n \n \n ";
    }
    GU(a, b, c, d) {
      this.O.uniform4f(this.Wm, a, b, c, d);
    }
    HU(a, b, c, d) {
      this.O.uniform4f(this.Xm, a, b, c, d);
    }
    Vj() {
      this.Sa = this.xd("a_position");
      this.Wc.push(new lb(this.Sa, "a_position", null, null, null, null));
      this.bd = this.xd("a_tcoord");
      this.Wc.push(new lb(this.bd, "a_tcoord", null, null, null, null));
      this.sb(this.Sa, 17);
      this.sb(this.bd, 17);
      this.eh = this.getUniformLocation("u_matrix");
      this.Aaa = this.getUniformLocation("u_size");
      this.Qo = this.getUniformLocation("u_texture_size");
      this.Kk = this.getUniformLocation("u_zndc");
      this.Gh = this.getUniformLocation("u_image");
      this.Jk = this.getUniformLocation("u_alpha");
      this.MO = this.getUniformLocation("u_use_color_transform");
      this.Wm = this.getUniformLocation("u_color_multiplier");
      this.Xm = this.getUniformLocation("u_color_offset");
      this.di = this.getUniformLocation("u_color");
    }
  }
  hr.g = "3A6";
  hr.u = Wa;
  Object.assign(hr.prototype, { j: hr });
  class ck {
    constructor() {
      this.$a = new hr();
      this.ae = Zb;
      this.Xd = le;
    }
    init(a) {
      let b = this.$a;
      b.init(a);
      b.sb(b.Sa, 17);
      b.sb(b.bd, 17);
      b.Kj(4, 2);
    }
    Ea(a) {
      if (a.XY != null) debugger;
      var b = a.Ha,
        c = a.hb,
        d = a.effect,
        e = d.page;
      if (!e.Zg) {
        a = this.$a;
        a.Ti();
        a.cq(a.Gh, e.handle, 0);
        a.O.uniform2f(a.Qo, e.width, e.height);
        e = b.li(c.dc);
        a.bo(a.eh, e);
        e = d.color;
        a.O.uniform4f(a.di, e.x, e.y, e.z, e.w);
        a.O.uniform1f(a.Jk, (b.Qc & 32) > 0 ? b.Yi : 1);
        e = c.size;
        a.O.uniform2f(a.Aaa, e.x, e.y);
        a.O.uniform1f(a.Kk, b.KD(c));
        (b.Qc & 2) > 0
          ? (a.O.uniform1i(a.MO, !0),
            (b = b.ki(1).transform),
            (e = b.gf),
            a.O.uniform4f(a.Wm, e.x, e.y, e.z, e.w),
            (b = b.offset),
            a.O.uniform4f(a.Xm, b.x, b.y, b.z, b.w))
          : (a.O.uniform1i(a.MO, !1), a.GU(1, 1, 1, 1), a.HU(0, 0, 0, 0));
        var f = d.offsetX;
        f %= 1;
        f < 0 && ++f;
        var g = d.offsetY;
        g %= 1;
        g < 0 && ++g;
        var h = 0;
        f != 0 && (h = 1);
        g != 0 && (h |= 2);
        d.QA != 1 && (h |= 4);
        d.Sw != 1 && (h |= 8);
        b = a.vb;
        e = d.frame != null && d.frame.iL;
        var k = d.Pc,
          l = d.mode;
        switch (l.Ag) {
          case 0:
            l = k.x;
            let n = k.y,
              q = k.w,
              r = k.v;
            h == 1
              ? ((c = l + q * f),
                (k = n + d.offsetY * r),
                (e = l + q),
                (h = k + d.Sw * r),
                (d = b.wg[4]),
                (d[0] = 0),
                (d[1] = 1),
                (d[4] = 1 - f),
                (d[5] = 1),
                (d[8] = 0),
                (d[9] = 0),
                (d[12] = 1 - f),
                (d[13] = 0),
                (d = b.wg[4]),
                (d[2] = c),
                (d[3] = h),
                (d[6] = e),
                (d[7] = h),
                (d[10] = c),
                (d[11] = k),
                (d[14] = e),
                (d[15] = k),
                a.vb.upload(4),
                a.drawArrays(4, 5),
                (c = l),
                (e = q * f),
                (d = b.wg[4]),
                (d[0] = 1 - f),
                (d[1] = 1),
                (d[4] = 1),
                (d[5] = 1),
                (d[8] = 1 - f),
                (d[9] = 0),
                (d[12] = 1),
                (d[13] = 0),
                (b = b.wg[4]),
                (b[2] = c),
                (b[3] = h),
                (b[6] = e),
                (b[7] = h),
                (b[10] = c),
                (b[11] = k),
                (b[14] = e),
                (b[15] = k),
                a.vb.upload(4))
              : h == 2
                ? ((c = l + d.offsetX * q),
                  (k = n + r * g),
                  (e = c + d.QA * q),
                  (h = n + r),
                  (d = b.wg[4]),
                  (d[0] = 0),
                  (d[1] = 1 - g),
                  (d[4] = 1),
                  (d[5] = 1 - g),
                  (d[8] = 0),
                  (d[9] = 0),
                  (d[12] = 1),
                  (d[13] = 0),
                  (d = b.wg[4]),
                  (d[2] = c),
                  (d[3] = h),
                  (d[6] = e),
                  (d[7] = h),
                  (d[10] = c),
                  (d[11] = k),
                  (d[14] = e),
                  (d[15] = k),
                  a.vb.upload(4),
                  a.drawArrays(4, 5),
                  (k = n),
                  (h = r * g),
                  (d = b.wg[4]),
                  (d[0] = 0),
                  (d[1] = 1),
                  (d[4] = 1),
                  (d[5] = 1),
                  (d[8] = 0),
                  (d[9] = 1 - g),
                  (d[12] = 1),
                  (d[13] = 1 - g),
                  (b = b.wg[4]),
                  (b[2] = c),
                  (b[3] = h),
                  (b[6] = e),
                  (b[7] = h),
                  (b[10] = c),
                  (b[11] = k),
                  (b[14] = e),
                  (b[15] = k),
                  a.vb.upload(4))
                : ((h = c = 0),
                  d.frame != null &&
                    (d.flipX &&
                      ((c = -d.frame.sj.x / k.w),
                      (c += (d.frame.ea.x - (k.w + d.frame.sj.x)) / k.w)),
                    d.flipY &&
                      ((h = -d.frame.sj.y / k.v),
                      (h += (d.frame.ea.y - (k.v + d.frame.sj.y)) / k.v))),
                  (k = b.wg[4]),
                  (k[0] = c),
                  (k[1] = 1 + h),
                  (k[4] = 1 + c),
                  (k[5] = 1 + h),
                  (k[8] = c),
                  (k[9] = h),
                  (k[12] = 1 + c),
                  (k[13] = h),
                  e
                    ? ((c = l + d.offsetX * r),
                      (k = n + d.offsetY * q),
                      (e = c + d.QA * r),
                      (h = k + d.Sw * q),
                      (d = b.wg[4]),
                      (d[2] = c),
                      (d[3] = k),
                      (d[6] = c),
                      (d[7] = h),
                      (d[10] = e),
                      (d[11] = k),
                      (d[14] = e),
                      (d[15] = h))
                    : ((c = l + d.offsetX * q),
                      (k = n + d.offsetY * r),
                      (e = c + d.QA * q),
                      (h = k + d.Sw * r),
                      d.flipX && ((f = c), (c = e), (e = f)),
                      d.flipY && ((d = k), (k = h), (h = d)),
                      (d = b.wg[4]),
                      (d[2] = c),
                      (d[3] = h),
                      (d[6] = e),
                      (d[7] = h),
                      (d[10] = c),
                      (d[11] = k),
                      (d[14] = e),
                      (d[15] = k)),
                  b.upload(4));
            a.drawArrays(4, 5);
            break;
          case 1:
            this.rda(
              c,
              k,
              l.rect,
              d.frame != null ? d.frame.sj : new fc(0, 0),
              d.frame != null ? d.frame.ea : null,
            );
            break;
          case 2:
            this.sda(c, k, l.mode);
            break;
          case 3:
            this.nda(c, k, l.mode, l.amount);
        }
      }
    }
    nda(a, b, c, d) {
      if (d != 0) {
        a = this.$a;
        var e = a.vb;
        switch (c.Ag) {
          case 0:
            var f = e.wg[4];
            f[0] = 0;
            f[1] = 1;
            f[4] = d;
            f[5] = 1;
            f[8] = 0;
            f[9] = 0;
            f[12] = d;
            f[13] = 0;
            f = b.x;
            var g = b.y;
            var h = f + b.w * d;
            var k = g + b.v;
            break;
          case 1:
            f = e.wg[4];
            f[0] = 1 - d;
            f[1] = 1;
            f[4] = 1;
            f[5] = 1;
            f[8] = 1 - d;
            f[9] = 0;
            f[12] = 1;
            f[13] = 0;
            f = b.x + b.w * (1 - d);
            g = b.y;
            h = b.x + b.w;
            k = g + b.v;
            break;
          case 2:
            f = e.wg[4];
            f[0] = 0;
            f[1] = d;
            f[4] = 1;
            f[5] = d;
            f[8] = 0;
            f[9] = 0;
            f[12] = 1;
            f[13] = 0;
            f = b.x;
            g = b.y;
            h = f + b.w;
            k = g + b.v * d;
            break;
          case 3:
            ((f = e.wg[4]),
              (f[0] = 0),
              (f[1] = 1),
              (f[4] = 1),
              (f[5] = 1),
              (f[8] = 0),
              (f[9] = 1 - d),
              (f[12] = 1),
              (f[13] = 1 - d),
              (f = b.x),
              (g = b.y + b.v * (1 - d)),
              (h = f + b.w),
              (k = b.y + b.v));
        }
        b = e.wg[4];
        b[2] = f;
        b[3] = k;
        b[6] = h;
        b[7] = k;
        b[10] = f;
        b[11] = g;
        b[14] = h;
        b[15] = g;
        a.vb.upload(4);
        a.drawArrays(4, 5);
      }
    }
    sda(a, b) {
      let c, d, e;
      let f,
        g = 0,
        h = this.$a;
      var k = h.vb;
      let l = k.ec[h.Sa],
        n = k.ec[h.bd];
      var q = a.Jb.scale,
        r = a.size;
      a = r.x * Math.abs(q.x);
      q = r.y * Math.abs(q.y);
      r = b.x;
      let t = b.y,
        x = b.w,
        z = b.v;
      b = r;
      d = t;
      c = b + x;
      e = d + z;
      let A = c - b,
        C = e - d;
      var B = a / A;
      var D = q / C;
      let F = B | 0,
        M = B % 1,
        Q = D | 0,
        U = D % 1;
      k.grow((Math.ceil(B) * Math.ceil(D) + 1) * 6);
      k.Cf();
      if (F == 0 && Q == 0)
        ((B = k = 0),
          (f = D = 1),
          (b = r),
          (d = t),
          (c = r + x * M),
          (e = t + z * U),
          l.Bb(k, f, D, f, k, B),
          n.Bb(b, e, c, e, b, d),
          l.Bb(D, f, D, B, k, B),
          n.Bb(c, e, c, d, b, d),
          h.vb.upload(6),
          h.drawArrays(6, 4));
      else {
        for (var W = 0; W < Q; ) {
          B = (W * C) / q;
          f = B + C / q;
          let da = 0;
          for (; da < F; )
            ((k = (da * A) / a),
              (D = k + A / a),
              l.Bb(k, f, D, f, k, B),
              n.Bb(b, e, c, e, b, d),
              l.Bb(D, f, D, B, k, B),
              n.Bb(c, e, c, d, b, d),
              (g += 6),
              ++da);
          ++W;
        }
        if (M > 0)
          for (k = (F * A) / a, D = 1, b = r, c = b + x * M, W = 0; W < Q; )
            ((B = (W++ * C) / q),
              (f = B + C / q),
              l.Bb(k, f, D, f, k, B),
              n.Bb(b, e, c, e, b, d),
              l.Bb(D, f, D, B, k, B),
              n.Bb(c, e, c, d, b, d),
              (g += 6));
        if (U > 0)
          for (
            b = r,
              d = t,
              c = b + x,
              e = d + z * U,
              B = (Q * C) / q,
              f = 1,
              W = 0;
            W < F;

          )
            ((k = (W++ * A) / a),
              (D = k + A / a),
              l.Bb(k, f, D, f, k, B),
              n.Bb(b, e, c, e, b, d),
              l.Bb(D, f, D, B, k, B),
              n.Bb(c, e, c, d, b, d),
              (g += 6));
        b = r;
        c = b + x * M;
        d = t;
        e = d + z * U;
        k = (F * A) / a;
        B = (Q * C) / q;
        f = D = 1;
        l.Bb(k, f, D, f, k, B);
        n.Bb(b, e, c, e, b, d);
        l.Bb(D, f, D, B, k, B);
        n.Bb(c, e, c, d, b, d);
        g += 6;
        h.vb.upload(g);
        h.drawArrays(g, 4);
      }
    }
    rda(a, b, c, d) {
      let e = this.$a;
      var f = e.vb;
      f.grow(54);
      f.Cf();
      let g = f.ec[e.Sa];
      f = f.ec[e.bd];
      var h = c.x - d.x,
        k = c.x + c.w - d.x,
        l = c.y - d.y,
        n = c.y + c.v - d.y;
      let q = b.x,
        r = b.y;
      var t = b.w,
        x = b.v;
      a = a.Jb.scale;
      let z = 1 / a.x,
        A = 1 / a.y;
      a = q;
      b = q + h;
      c = r;
      d = r + l;
      var C = (h / t) * z;
      var B = (l / x) * A;
      g.Bb(0, 0, C, 0, 0, B);
      f.Bb(a, c, b, c, a, d);
      g.Bb(0, B, C, 0, C, B);
      f.Bb(a, d, b, c, b, d);
      a = q + k;
      b = q + t;
      c = r;
      d = r + l;
      C = (1 - k / t) * z;
      B = (l / x) * A;
      var D = 1 - C;
      g.Bb(1 - C, 0, 1, 0, D, B);
      f.Bb(a, c, b, c, a, d);
      g.Bb(D, B, 1, 0, 1, B);
      f.Bb(a, d, b, c, b, d);
      a = q;
      b = q + h;
      c = r + n;
      d = r + x;
      C = (h / t) * z;
      B = (1 - n / x) * A;
      D = 1 - B;
      g.Bb(0, 1 - B, C, D, 0, 1);
      f.Bb(a, c, b, c, a, d);
      g.Bb(0, 1, C, D, C, 1);
      f.Bb(a, d, b, c, b, d);
      b = q + t;
      d = r + x;
      a = q + k;
      c = d - (x - n);
      C = (1 - k / t) * z;
      B = (1 - n / x) * A;
      D = 1 - B;
      var F = 1 - C;
      g.Bb(1 - C, 1 - B, 1, D, F, 1);
      f.Bb(a, c, b, c, a, d);
      g.Bb(F, 1, 1, D, 1, 1);
      f.Bb(a, d, b, c, b, d);
      a = q + h;
      b = q + k;
      c = r;
      d = r + l;
      C = (h / t) * z;
      B = (1 - k / t) * z;
      D = (l / x) * A;
      F = 1 - B;
      g.Bb(C, 0, F, 0, C, D);
      f.Bb(a, c, b, c, a, d);
      g.Bb(C, D, F, 0, 1 - B, D);
      f.Bb(a, d, b, c, b, d);
      c = r + n;
      d = r + x;
      D = (1 - n / x) * A;
      F = 1 - B;
      var M = 1 - D;
      g.Bb(C, 1 - D, F, M, C, 1);
      f.Bb(a, c, b, c, a, d);
      g.Bb(C, 1, F, M, 1 - B, 1);
      f.Bb(a, d, b, c, b, d);
      a = q;
      b = q + h;
      c = r + l;
      d = r + n;
      B = (l / x) * A;
      D = (1 - n / x) * A;
      F = C = (h / t) * z;
      M = 1 - D;
      g.Bb(0, B, F, B, 0, M);
      f.Bb(a, c, b, c, a, d);
      g.Bb(0, M, F, B, C, 1 - D);
      f.Bb(a, d, b, c, b, d);
      a = q + k;
      b = q + t;
      c = r + l;
      d = r + n;
      B = (l / x) * A;
      D = (1 - n / x) * A;
      C = (1 - k / t) * z;
      F = 1 - C;
      M = 1 - D;
      g.Bb(1 - C, B, 1, B, F, M);
      f.Bb(a, c, b, c, a, d);
      g.Bb(F, M, 1, B, 1, 1 - D);
      f.Bb(a, d, b, c, b, d);
      a = q + h;
      c = r + l;
      b = q + h + (k - h);
      d = r + l + (n - l);
      h = (h / t) * z;
      l = (l / x) * A;
      k = (1 - k / t) * z;
      n = (1 - n / x) * A;
      t = 1 - k;
      x = 1 - n;
      g.Bb(h, l, t, l, h, x);
      f.Bb(a, c, b, c, a, d);
      g.Bb(h, x, t, l, 1 - k, 1 - n);
      f.Bb(a, d, b, c, b, d);
      e.vb.upload(54);
      e.drawArrays(54, 4);
    }
  }
  ck.g = "3A7";
  ck.Rb = [wb];
  Object.assign(ck.prototype, { j: ck });
  class ir extends Wa {
    constructor() {
      super();
    }
    Sj() {
      return "uniform vec2 u_texture_size;\n\nattribute vec2 a_position;\nattribute vec2 a_tcoord;\nattribute float a_alpha;\nattribute vec4 a_color_multiplier;\nattribute vec4 a_color_offset;\n\nvarying vec2 v_tcoord;\nvarying float v_alpha;\nvarying vec4 v_colorMultiplier;\nvarying vec4 v_colorOffset;\n\nvoid main()\n{\n\tgl_Position = vec4(a_position, 1, 1);\n\tv_tcoord = vec2(a_tcoord.x, u_texture_size.y - a_tcoord.y) / u_texture_size;  \n\tv_alpha = a_alpha;\n\tv_colorMultiplier = a_color_multiplier;\n\tv_colorOffset = a_color_offset;\n}";
    }
    Nj() {
      return "precision mediump float;\n\nuniform sampler2D u_image;\n\nvarying vec2 v_tcoord;\nvarying float v_alpha;\nvarying vec4 v_colorMultiplier;\nvarying vec4 v_colorOffset;\n\nvoid main()\n{\n\tvec4 color = texture2D(u_image, v_tcoord) * v_colorMultiplier.bgra + v_colorOffset.bgra;\n\tgl_FragColor = vec4(color.rgb * color.a, color.a) * v_alpha;\n}";
    }
    Vj() {
      this.Sa = this.xd("a_position");
      this.Wc.push(new lb(this.Sa, "a_position", null, null, null, null));
      this.bd = this.xd("a_tcoord");
      this.Wc.push(new lb(this.bd, "a_tcoord", null, null, null, null));
      this.Jy = this.xd("a_alpha");
      this.Wc.push(new lb(this.Jy, "a_alpha", null, null, null, null));
      this.XO = this.xd("a_color_multiplier");
      this.Wc.push(
        new lb(this.XO, "a_color_multiplier", null, null, null, null),
      );
      this.YO = this.xd("a_color_offset");
      this.Wc.push(new lb(this.YO, "a_color_offset", null, null, null, null));
      this.sb(this.Sa, 17);
      this.sb(this.bd, 17);
      this.sb(this.Jy, 16);
      this.sb(this.XO, 19);
      this.sb(this.YO, 19);
      this.Qo = this.getUniformLocation("u_texture_size");
      this.Gh = this.getUniformLocation("u_image");
    }
  }
  ir.g = "3A8";
  ir.u = Wa;
  Object.assign(ir.prototype, { j: ir });
  class jr {
    constructor() {
      this.$a = new ir();
      this.ae = Zb;
      this.Xd = le;
    }
    init(a) {
      let b = this.$a;
      b.init(a);
      debugger;
      b.sb(b.Sa, 17);
      b.sb(b.bd, 13);
      b.sb(b.Jy, 16);
      b.sb(b.XO, 7, null, null, !0);
      b.sb(b.YO, 7, null, null, !0);
      b.Kj(4096, 2);
      b.ez(6144, 1);
      for (a = 0; a < 1024; ) {
        let c = a++;
        b.Gd.ec.rB(0, 2, 3, c * 4);
        b.Gd.ec.rB(0, 1, 2, c * 4);
      }
    }
    Ea(a) {
      let b = a.Ha,
        c = a.XY;
      var d = a.effect.qc;
      a = 1024;
      b.oA > 0 && b.oA < 1024 && (a = b.oA);
      var e = this.$a;
      e.Ti();
      e.cq(e.Gh, d.handle, 0);
      e.O.uniform2f(e.Qo, d.width, d.height);
      d = c.length;
      e = (d / a) | 0;
      let f = 0;
      for (; f < e; ) (this.fwa(b, c, f * a, a), ++f);
      a *= e;
      d -= a;
      d > 0 && this.fwa(b, c, a, d);
    }
    fwa(a, b, c, d) {
      let e = c;
      c += d;
      let f = this.$a,
        g = f.vb;
      f.vb.Cf();
      f.Gd.Cf();
      for (var h, k, l, n; e < c; ) {
        var q = b[e++];
        a.$w(q);
        n = q.effect;
        var r = n.Pc;
        n.frame.iL
          ? ((h = r.x + n.offsetX * r.v),
            (k = r.y + n.offsetY * r.w),
            (l = h + n.QA * r.v),
            (n = k + n.Sw * r.w),
            g.ec[f.bd].VO(h, k, h, n, l, k, l, n))
          : ((h = r.x + n.offsetX * r.w),
            (k = r.y + n.offsetY * r.v),
            (l = h + n.QA * r.w),
            (n = k + n.Sw * r.v),
            g.ec[f.bd].VO(h, n, l, n, l, k, h, k));
        h = a.li(q.dc);
        q = q.size;
        r = q.x;
        n = q.y;
        q = h.m14;
        k = h.m24;
        l = h.m11 * r;
        r *= h.m21;
        let t = h.m12 * n + q;
        h = h.m22 * n + k;
        g.ec[f.Sa].mY(t, h, l + t, r + h, l + q, r + k, q, k);
        (a.Qc & 2) > 0
          ? ((h = a.ki(1).transform),
            (q = h.gf),
            (q =
              (((q.w * 255) | 0) << 24) |
              (((q.x * 255) | 0) << 16) |
              (((q.y * 255) | 0) << 8) |
              (q.z * 255) |
              0),
            g.ec[f.XO].dG(q),
            (h = h.offset),
            (q =
              (((h.w * 255) | 0) << 24) |
              (((h.x * 255) | 0) << 16) |
              (((h.y * 255) | 0) << 8) |
              (h.z * 255) |
              0),
            g.ec[f.YO].dG(q))
          : (g.ec[f.XO].dG(-1), g.ec[f.YO].dG(0));
        h = a.Yi;
        g.ec[f.Jy].lY(h, h, h, h);
      }
      f.vb.upload(d * 4);
      f.Gd.upload(d * 6);
      f.drawElements(6 * d, 4);
    }
  }
  jr.g = "3A9";
  jr.Rb = [Sw, wb];
  Object.assign(jr.prototype, { j: jr });
  class kr extends Wa {
    constructor() {
      super();
    }
    Sj() {
      return "uniform mat4 u_matrix;\nuniform vec2 u_texture_size;\nuniform vec2 u_offset;\n\nattribute vec2 a_position;\nattribute vec2 a_tcoord;\n\nvarying vec2 v_tcoord;\n\nvoid main()\n{\n\tgl_Position = u_matrix * vec4(a_position + u_offset, 0.0, 1.0);\n\tv_tcoord = vec2(a_tcoord.x, u_texture_size.y - a_tcoord.y) / u_texture_size;  \n}";
    }
    Nj() {
      return "precision highp float;\n\nuniform sampler2D u_image;\nuniform float u_alpha;\n\nvarying vec2 v_tcoord;\n\nvoid main()\n{\n\tgl_FragColor = texture2D(u_image, v_tcoord) * u_alpha;\n}";
    }
    Vj() {
      this.Sa = this.xd("a_position");
      this.Wc.push(new lb(this.Sa, "a_position", null, null, null, null));
      this.bd = this.xd("a_tcoord");
      this.Wc.push(new lb(this.bd, "a_tcoord", null, null, null, null));
      this.sb(this.Sa, 17);
      this.sb(this.bd, 17);
      this.eh = this.getUniformLocation("u_matrix");
      this.Qo = this.getUniformLocation("u_texture_size");
      this.gWa = this.getUniformLocation("u_offset");
      this.Gh = this.getUniformLocation("u_image");
      this.Jk = this.getUniformLocation("u_alpha");
    }
  }
  kr.g = "3AA";
  kr.u = Wa;
  Object.assign(kr.prototype, { j: kr });
  class lr {
    constructor() {
      this.Wn = [];
      this.Mn = [];
      let a = [],
        b = 0;
      for (; b < 4; ) (++b, a.push(null));
      this.jB = a;
      this.sHa = 0;
      this.$a = new kr();
      this.ae = Zb;
      this.Xd = Tj;
    }
    init(a) {
      let b = this.$a;
      b.init(a);
      b.sb(b.Sa, 13);
      b.sb(b.bd, 13);
      b.Kj(600, 2);
    }
    Ea(a) {
      var b = a.Ha;
      let c = this.$a;
      c.Ti();
      var d = a.effect;
      let e = d.rj,
        f = d.jB,
        g = d.rj.cols;
      var h = d.rj.rows;
      let k = d.tu;
      var l = d.zna;
      l = l < 0 ? 0 : l;
      var n = d.xna;
      n = n > g ? g : n;
      var q = d.Ana;
      q = q < 0 ? 0 : q;
      var r = d.yna;
      h = r > h ? h : r;
      r = (n - l + 1) * (h - q + 1);
      r > this.sHa && ((this.sHa = r), c.vb.grow(r * 6));
      for (; this.jB.length > 0; ) this.jB.pop();
      r = 0;
      for (var t = null, x = q; x < h; ) {
        for (var z = l; z < n; ) {
          var A = e.data[x * g + z];
          if (A > 0 && f[A] != t) {
            t = f[A];
            A = !1;
            for (var C = 0; C < r; ) {
              if (this.jB[C] == t) {
                A = !0;
                break;
              }
              ++C;
            }
            A || (this.jB[r++] = t);
          }
          ++z;
        }
        ++x;
      }
      d = d.gu;
      c.O.uniform2f(c.gWa, d.x, d.y);
      a = b.li(a.hb.dc);
      c.bo(c.eh, a);
      c.O.uniform1f(c.Jk, (b.Qc & 32) > 0 ? b.Yi : 1);
      b = 0;
      for (a = r; b < a; ) {
        d = this.jB[b++];
        r = d.re;
        z = x = t = 0;
        for (A = q; A < h; ) {
          for (C = l; C < n; ) {
            var B = e.data[A * g + C];
            if (B == 0) {
              ++C;
              continue;
            }
            if (f[B] != d) {
              ++C;
              continue;
            }
            let F = C * k,
              M = A * k,
              Q = F + k,
              U = M + k;
            var D = r.kt[B].Pc;
            B = D.x;
            let W = D.y,
              da = B + D.w;
            D = W + D.v;
            this.Mn[t++] = F;
            this.Mn[t++] = U;
            this.Mn[t++] = Q;
            this.Mn[t++] = M;
            this.Mn[t++] = F;
            this.Mn[t++] = M;
            this.Mn[t++] = F;
            this.Mn[t++] = U;
            this.Mn[t++] = Q;
            this.Mn[t++] = U;
            this.Mn[t++] = Q;
            this.Mn[t++] = M;
            this.Wn[x++] = B;
            this.Wn[x++] = D;
            this.Wn[x++] = da;
            this.Wn[x++] = W;
            this.Wn[x++] = B;
            this.Wn[x++] = W;
            this.Wn[x++] = B;
            this.Wn[x++] = D;
            this.Wn[x++] = da;
            this.Wn[x++] = D;
            this.Wn[x++] = da;
            this.Wn[x++] = W;
            ++z;
            ++C;
          }
          ++A;
        }
        c.vb.Cf();
        c.vb.ec[c.Sa].cQa(this.Mn, t >> 1);
        c.vb.ec[c.bd].cQa(this.Wn, x >> 1);
        c.cq(c.Gh, d.handle, 0);
        c.O.uniform2f(c.Qo, d.width, d.height);
        c.vb.upload(z * 6);
        c.drawArrays(z * 6, 4);
      }
    }
  }
  lr.g = "3AB";
  lr.Rb = [wb];
  Object.assign(lr.prototype, { j: lr });
  class bk extends Wa {
    constructor() {
      super();
    }
    Sj() {
      return "precision mediump float;\n\nattribute vec2 a_position;\n\nuniform mat4 u_matrix;\nuniform float u_zndc;\n\nvoid main()\n{\n\tgl_Position = u_matrix * vec4(a_position, u_zndc, 1.0);\n}";
    }
    Nj() {
      return "precision mediump float;\n\nuniform vec4 u_color;\n\nvoid main()\n{\n\tgl_FragColor = u_color;\n}";
    }
    Vj() {
      this.Sa = this.xd("a_position");
      this.Wc.push(new lb(this.Sa, "a_position", null, null, null, null));
      this.sb(this.Sa, 17);
      this.eh = this.getUniformLocation("u_matrix");
      this.Kk = this.getUniformLocation("u_zndc");
      this.di = this.getUniformLocation("u_color");
    }
  }
  bk.g = "3AC";
  bk.u = Wa;
  Object.assign(bk.prototype, { j: bk });
  class mr extends Wa {
    constructor() {
      super();
    }
    Sj() {
      return "attribute vec4 a_position;\n\nuniform mat4 u_camera;\nuniform float u_point_size;\n\nvoid main()\n{\n\tgl_PointSize = u_point_size;\n\tgl_Position = u_camera * a_position;\n}";
    }
    Nj() {
      return "precision mediump float;\n\nuniform vec4 u_color;\n\nvoid main()\n{\n\tgl_FragColor = u_color.bgra;  \n}";
    }
    Vj() {
      this.Sa = this.xd("a_position");
      this.Wc.push(new lb(this.Sa, "a_position", null, null, null, null));
      this.sb(this.Sa, 19);
      this.bWa = this.getUniformLocation("u_camera");
      this.hWa = this.getUniformLocation("u_point_size");
      this.di = this.getUniformLocation("u_color");
    }
  }
  mr.g = "3AD";
  mr.u = Wa;
  Object.assign(mr.prototype, { j: mr });
