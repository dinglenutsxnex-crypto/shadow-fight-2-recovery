!(function () {
  try {
    var e =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
            ? global
            : "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof self
                ? self
                : {},
      n = new e.Error().stack;
    n &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[n] = "866b53cd-9305-5d01-895b-268985eb1d1b"));
  } catch (e) {}
})();
(function () {
  function x(a) {
    a = String(a || "").toLowerCase();
    if (!a) return "en";
    a = a.split("-")[0].split("_")[0];
    return z.indexOf(a) >= 0 ? a : "en";
  }
  function v(a = null) {
    if (p) {
      var t = r;
      r = null;
      p.remove();
      p = null;
      t != void 0 && t(a);
    } else r = null;
  }
  let p = null,
    r = null;
  const z = "de en es fr it ja ko pt ru tr".split(" "),
    y = {
      de: {
        title: "Feedback senden",
        description: "Sage uns, was im Spiel schiefgelaufen ist.",
        problemLabel: "Welches Problem ist aufgetreten?",
        problemPlaceholder:
          "Beschreibe den Fehler, das Problem oder das unerwartete Verhalten...",
        emailLabel: "E-Mail (optional)",
        emailPlaceholder: "du@beispiel.de",
        submit: "Feedback senden",
        close: "Schlie\u00dfen",
        thankYou: "Danke!",
        successMessage: "Dein Feedback wurde erfolgreich eingereicht.",
        errorMessage:
          "Feedback konnte nicht gesendet werden. Bitte versuche es erneut.",
      },
      en: {
        title: "Send Feedback",
        description: "Tell us what went wrong in the game.",
        problemLabel: "What problem did you run into?",
        problemPlaceholder:
          "Describe the bug, issue, or unexpected behavior...",
        emailLabel: "Email (optional)",
        emailPlaceholder: "you@example.com",
        submit: "Submit Feedback",
        close: "Close",
        thankYou: "Thank you!",
        successMessage: "Your feedback has been submitted successfully.",
        errorMessage: "Failed to send feedback. Please try again.",
      },
      es: {
        title: "Enviar comentarios",
        description: "Cu\u00e9ntanos qu\u00e9 sali\u00f3 mal en el juego.",
        problemLabel: "\u00bfQu\u00e9 problema encontraste?",
        problemPlaceholder:
          "Describe el error, problema o comportamiento inesperado...",
        emailLabel: "Correo electr\u00f3nico (opcional)",
        emailPlaceholder: "tu@ejemplo.com",
        submit: "Enviar comentarios",
        close: "Cerrar",
        thankYou: "\u00a1Gracias!",
        successMessage: "Tu comentario ha sido enviado exitosamente.",
        errorMessage:
          "No se pudo enviar el comentario. Por favor, intenta de nuevo.",
      },
      fr: {
        title: "Envoyer un retour",
        description:
          "Dites-nous ce qui ne s'est pas bien pass\u00e9 dans le jeu.",
        problemLabel: "Quel probl\u00e8me avez-vous rencontr\u00e9 ?",
        problemPlaceholder:
          "D\u00e9crivez le bug, le probl\u00e8me ou le comportement inattendu...",
        emailLabel: "E-mail (facultatif)",
        emailPlaceholder: "vous@exemple.com",
        submit: "Envoyer le retour",
        close: "Fermer",
        thankYou: "Merci !",
        successMessage: "Votre retour a \u00e9t\u00e9 soumis avec succ\u00e8s.",
        errorMessage:
          "Impossible d'envoyer le retour. Veuillez r\u00e9essayer.",
      },
      it: {
        title: "Invia feedback",
        description: "Dicci cosa \u00e8 andato storto nel gioco.",
        problemLabel: "Quale problema hai riscontrato?",
        problemPlaceholder:
          "Descrivi il bug, il problema o il comportamento imprevisto...",
        emailLabel: "Email (facoltativa)",
        emailPlaceholder: "tuo@esempio.com",
        submit: "Invia feedback",
        close: "Chiudi",
        thankYou: "Grazie!",
        successMessage: "Il tuo feedback \u00e8 stato inviato con successo.",
        errorMessage: "Impossibile inviare il feedback. Riprova.",
      },
      ja: {
        title: "\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u9001\u4fe1",
        description:
          "\u30b2\u30fc\u30e0\u3067\u4f55\u304c\u554f\u984c\u3060\u3063\u305f\u304b\u6559\u3048\u3066\u304f\u3060\u3055\u3044\u3002",
        problemLabel:
          "\u3069\u306e\u3088\u3046\u306a\u554f\u984c\u304c\u767a\u751f\u3057\u307e\u3057\u305f\u304b\uff1f",
        problemPlaceholder:
          "\u4e0d\u5177\u5408\u3001\u554f\u984c\u3001\u4e88\u671f\u3057\u306a\u3044\u52d5\u4f5c\u3092\u8aac\u660e\u3057\u3066\u304f\u3060\u3055\u3044...",
        emailLabel:
          "\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\uff08\u4efb\u610f\uff09",
        emailPlaceholder: "you@example.com",
        submit: "\u9001\u4fe1\u3059\u308b",
        close: "\u9589\u3058\u308b",
        thankYou:
          "\u3042\u308a\u304c\u3068\u3046\u3054\u3056\u3044\u307e\u3059\uff01",
        successMessage:
          "\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u304c\u6b63\u5e38\u306b\u9001\u4fe1\u3055\u308c\u307e\u3057\u305f\u3002",
        errorMessage:
          "\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u9001\u4fe1\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002",
      },
      ko: {
        title: "\ud53c\ub4dc\ubc31 \ubcf4\ub0b4\uae30",
        description:
          "\uac8c\uc784\uc5d0\uc11c \ubb34\uc5c7\uc774 \uc798\ubabb\ub418\uc5c8\ub294\uc9c0 \uc54c\ub824\uc8fc\uc138\uc694.",
        problemLabel:
          "\uc5b4\ub5a4 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\ub098\uc694?",
        problemPlaceholder:
          "\ubc84\uadf8, \ubb38\uc81c \ub610\ub294 \uc608\uc0c1\uce58 \ubabb\ud55c \ub3d9\uc791\uc744 \uc124\uba85\ud558\uc138\uc694...",
        emailLabel: "\uc774\uba54\uc77c(\uc120\ud0dd \uc0ac\ud56d)",
        emailPlaceholder: "you@example.com",
        submit: "\ud53c\ub4dc\ubc31 \ubcf4\ub0b4\uae30",
        close: "\ub2eb\uae30",
        thankYou: "\uac10\uc0ac\ud569\ub2c8\ub2e4!",
        successMessage:
          "\ud53c\ub4dc\ubc31\uc774 \uc131\uacf5\uc801\uc73c\ub85c \uc804\uc1a1\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
        errorMessage:
          "\ud53c\ub4dc\ubc31\uc744 \ubcf4\ub0bc \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694.",
      },
      pt: {
        title: "Enviar feedback",
        description: "Conte o que deu errado no jogo.",
        problemLabel: "Que problema voc\u00ea encontrou?",
        problemPlaceholder:
          "Descreva o bug, problema ou comportamento inesperado...",
        emailLabel: "E-mail (opcional)",
        emailPlaceholder: "voce@exemplo.com",
        submit: "Enviar feedback",
        close: "Fechar",
        thankYou: "Obrigado!",
        successMessage: "Seu feedback foi enviado com sucesso.",
        errorMessage: "Falha ao enviar feedback. Tente novamente.",
      },
      ru: {
        title:
          "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043e\u0442\u0437\u044b\u0432",
        description:
          "\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435, \u0447\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a \u0432 \u0438\u0433\u0440\u0435.",
        problemLabel:
          "\u0421 \u043a\u0430\u043a\u043e\u0439 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u043e\u0439 \u0432\u044b \u0441\u0442\u043e\u043b\u043a\u043d\u0443\u043b\u0438\u0441\u044c?",
        problemPlaceholder:
          "\u041e\u043f\u0438\u0448\u0438\u0442\u0435 \u043e\u0448\u0438\u0431\u043a\u0443, \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0443 \u0438\u043b\u0438 \u043d\u0435\u043e\u0436\u0438\u0434\u0430\u043d\u043d\u043e\u0435 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435...",
        emailLabel:
          "\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430 (\u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e)",
        emailPlaceholder: "you@example.com",
        submit:
          "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043e\u0442\u0437\u044b\u0432",
        close: "\u0417\u0430\u043a\u0440\u044b\u0442\u044c",
        thankYou: "\u0421\u043f\u0430\u0441\u0438\u0431\u043e!",
        successMessage:
          "\u0412\u0430\u0448 \u043e\u0442\u0437\u044b\u0432 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d.",
        errorMessage:
          "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043e\u0442\u0437\u044b\u0432. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.",
      },
      tr: {
        title: "Geri bildirim g\u00f6nder",
        description:
          "Oyunda neyin yanl\u0131\u015f gitti\u011fini bize anlat\u0131n.",
        problemLabel: "Hangi sorunla kar\u015f\u0131la\u015ft\u0131n\u0131z?",
        problemPlaceholder:
          "Hata, sorun veya beklenmeyen davran\u0131\u015f\u0131 a\u00e7\u0131klay\u0131n...",
        emailLabel: "E-posta (iste\u011fe ba\u011fl\u0131)",
        emailPlaceholder: "siz@ornek.com",
        submit: "Geri bildirimi g\u00f6nder",
        close: "Kapat",
        thankYou: "Te\u015fekk\u00fcrler!",
        successMessage:
          "Geri bildiriminiz ba\u015far\u0131yla g\u00f6nderildi.",
        errorMessage:
          "Geri bildirim g\u00f6nderilemedi. L\u00fctfen tekrar deneyin.",
      },
    },
    A = x(navigator.language || navigator.userLanguage || "en");
  document.documentElement.lang = A;
  window.SupportDialogApi = {
    show: function (a, t, q) {
      r = q;
      const b = y[x(a)] || y.en;
      document.documentElement.lang = a;
      const g = document.createElement("div");
      g.className = "feedback-overlay";
      a = document.createElement("style");
      a.textContent =
        "\n        .feedback-overlay {\n          --bg: #e7dcc7;\n          --panel: #c8a97e;\n          --text: #3f2f22;\n          --muted: #6d5843;\n          --accent: #8b5e34;\n          --accent-hover: #734b2b;\n          --border: #7a5a3a;\n\n          position: fixed;\n          inset: 0;\n          z-index: 9999;\n          display: grid;\n          place-items: center;\n          padding: 16px;\n          background: rgba(0, 0, 0, 0.75);\n          backdrop-filter: blur(2px);\n        }\n\n        .feedback-overlay,\n        .feedback-overlay * {\n          box-sizing: border-box;\n        }\n\n        .feedback-dialog {\n          width: 100%;\n          max-width: 520px;\n          background: var(--panel);\n          border: 1px solid var(--border);\n          border-radius: 12px;\n          padding: 20px;\n          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.35);\n          color: var(--text);\n          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n        }\n\n        .feedback-dialog h2 {\n          margin: 0 0 8px;\n          font-size: 1.25rem;\n        }\n\n        .feedback-dialog p {\n          margin: 0 0 16px;\n          color: var(--muted);\n          font-size: 0.95rem;\n        }\n\n        .feedback-dialog .field {\n          margin-bottom: 14px;\n        }\n\n        .feedback-dialog label {\n          display: block;\n          margin-bottom: 6px;\n          font-size: 0.92rem;\n          font-weight: 600;\n        }\n\n        .feedback-dialog input,\n        .feedback-dialog textarea {\n          width: 100%;\n          padding: 10px 12px;\n          border: 1px solid var(--border);\n          border-radius: 8px;\n          background: #f2e6d2;\n          color: var(--text);\n          font: inherit;\n          outline: none;\n        }\n\n        .feedback-dialog textarea {\n          min-height: 120px;\n          resize: vertical;\n        }\n\n        .feedback-dialog input:focus,\n        .feedback-dialog textarea:focus {\n          border-color: var(--accent);\n          box-shadow: 0 0 0 3px rgba(139, 94, 52, 0.25);\n        }\n\n        .feedback-dialog .actions {\n          margin-top: 4px;\n        }\n\n        .feedback-dialog button {\n          width: 100%;\n          border: 0;\n          border-radius: 8px;\n          padding: 11px 14px;\n          background: var(--accent);\n          color: #fff8ee;\n          font-weight: 700;\n          cursor: pointer;\n          transition: background 0.15s ease;\n        }\n\n        .feedback-dialog button:hover {\n          background: var(--accent-hover);\n        }\n\n        .feedback-dialog .close-btn {\n          position: absolute;\n          top: 10px;\n          right: 10px;\n          width: auto;\n          padding: 6px 10px;\n          font-size: 0.85rem;\n          background: #9a744b;\n          color: #fff8ee;\n          border: 1px solid var(--border);\n        }\n\n        .feedback-dialog .close-btn:hover {\n          background: #7f5d3d;\n        }\n      ";
      g.appendChild(a);
      const c = document.createElement("section");
      c.className = "feedback-dialog";
      c.setAttribute("role", "dialog");
      c.setAttribute("aria-modal", "true");
      c.setAttribute("aria-labelledby", "feedback-title");
      c.style.position = "relative";
      a = document.createElement("button");
      a.type = "button";
      a.className = "close-btn";
      a.textContent = b.close;
      a.addEventListener("click", function () {
        v();
      });
      q = document.createElement("h2");
      q.id = "feedback-title";
      q.textContent = b.title;
      const w = document.createElement("p");
      w.textContent = b.description;
      const l = document.createElement("form"),
        u = document.createElement("div");
      u.className = "field";
      var d = document.createElement("label");
      d.htmlFor = "problem";
      d.textContent = b.problemLabel;
      const e = document.createElement("textarea");
      e.id = "problem";
      e.name = "problem";
      e.required = !0;
      e.placeholder = b.problemPlaceholder;
      u.appendChild(d);
      u.appendChild(e);
      d = document.createElement("div");
      d.className = "field";
      var h = document.createElement("label");
      h.htmlFor = "email";
      h.textContent = b.emailLabel;
      const m = document.createElement("input");
      m.id = "email";
      m.name = "email";
      m.type = "email";
      m.placeholder = b.emailPlaceholder;
      d.appendChild(h);
      d.appendChild(m);
      h = document.createElement("div");
      h.className = "actions";
      const f = document.createElement("button");
      f.type = "submit";
      f.textContent = b.submit;
      h.appendChild(f);
      l.appendChild(u);
      l.appendChild(d);
      l.appendChild(h);
      l.addEventListener("submit", function (n) {
        n.preventDefault();
        n = { message: e.value.trim() + "\n\n" + t, email: m.value.trim() };
        if (n.message) {
          f.disabled = !0;
          var B = f.textContent;
          f.textContent = "...";
          fetch(
            "https://us-central1-zooboom-cb593.cloudfunctions.net/mail-supportMessage",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(n),
            },
          )
            .then((k) => {
              if (!k.ok) throw Error(b.errorMessage);
              k = document.createElement("div");
              k.style.textAlign = "center";
              k.style.padding = "20px 0";
              k.innerHTML = `
               <h3 style='margin: 0 0 8px; color: var(--text);'>\u2714 ${b.thankYou}</h3>
               <p style='margin: 0; color: var(--muted);'>${b.successMessage}</p>
            `;
              w.remove();
              l.remove();
              c.appendChild(k);
            })
            .catch((k) => {
              alert(b.errorMessage);
              f.disabled = !1;
              f.textContent = B;
            });
        } else e.focus();
      });
      c.appendChild(a);
      c.appendChild(q);
      c.appendChild(w);
      c.appendChild(l);
      g.appendChild(c);
      g.addEventListener("click", function (n) {
        n.target === g && v();
      });
      document.body.appendChild(g);
      p = g;
      e.focus();
    },
    hide: v,
    isOpen: function () {
      return p != null;
    },
  };
})();

//# debugId=866b53cd-9305-5d01-895b-268985eb1d1b
