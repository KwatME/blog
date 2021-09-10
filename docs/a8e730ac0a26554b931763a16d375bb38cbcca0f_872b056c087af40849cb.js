(self.webpackChunk = self.webpackChunk || []).push([
  [32],
  {
    2993: function (e) {
      var t = "undefined" != typeof Element,
        n = "function" == typeof Map,
        r = "function" == typeof Set,
        a = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
      function i(e, o) {
        if (e === o) return !0;
        if (e && o && "object" == typeof e && "object" == typeof o) {
          if (e.constructor !== o.constructor) return !1;
          var c, s, u, l;
          if (Array.isArray(e)) {
            if ((c = e.length) != o.length) return !1;
            for (s = c; 0 != s--; ) if (!i(e[s], o[s])) return !1;
            return !0;
          }
          if (n && e instanceof Map && o instanceof Map) {
            if (e.size !== o.size) return !1;
            for (l = e.entries(); !(s = l.next()).done; )
              if (!o.has(s.value[0])) return !1;
            for (l = e.entries(); !(s = l.next()).done; )
              if (!i(s.value[1], o.get(s.value[0]))) return !1;
            return !0;
          }
          if (r && e instanceof Set && o instanceof Set) {
            if (e.size !== o.size) return !1;
            for (l = e.entries(); !(s = l.next()).done; )
              if (!o.has(s.value[0])) return !1;
            return !0;
          }
          if (a && ArrayBuffer.isView(e) && ArrayBuffer.isView(o)) {
            if ((c = e.length) != o.length) return !1;
            for (s = c; 0 != s--; ) if (e[s] !== o[s]) return !1;
            return !0;
          }
          if (e.constructor === RegExp)
            return e.source === o.source && e.flags === o.flags;
          if (e.valueOf !== Object.prototype.valueOf)
            return e.valueOf() === o.valueOf();
          if (e.toString !== Object.prototype.toString)
            return e.toString() === o.toString();
          if ((c = (u = Object.keys(e)).length) !== Object.keys(o).length)
            return !1;
          for (s = c; 0 != s--; )
            if (!Object.prototype.hasOwnProperty.call(o, u[s])) return !1;
          if (t && e instanceof Element) return !1;
          for (s = c; 0 != s--; )
            if (
              (("_owner" !== u[s] && "__v" !== u[s] && "__o" !== u[s]) ||
                !e.$$typeof) &&
              !i(e[u[s]], o[u[s]])
            )
              return !1;
          return !0;
        }
        return e != e && o != o;
      }
      e.exports = function (e, t) {
        try {
          return i(e, t);
        } catch (n) {
          if ((n.message || "").match(/stack|recursion/i))
            return (
              console.warn("react-fast-compare cannot handle circular refs"), !1
            );
          throw n;
        }
      };
    },
    4839: function (e, t, n) {
      "use strict";
      var r,
        a = n(7294),
        i = (r = a) && "object" == typeof r && "default" in r ? r.default : r;
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var c = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      e.exports = function (e, t, n) {
        if ("function" != typeof e)
          throw new Error("Expected reducePropsToState to be a function.");
        if ("function" != typeof t)
          throw new Error(
            "Expected handleStateChangeOnClient to be a function."
          );
        if (void 0 !== n && "function" != typeof n)
          throw new Error(
            "Expected mapStateOnServer to either be undefined or a function."
          );
        return function (r) {
          if ("function" != typeof r)
            throw new Error(
              "Expected WrappedComponent to be a React component."
            );
          var s,
            u = [];
          function l() {
            (s = e(
              u.map(function (e) {
                return e.props;
              })
            )),
              f.canUseDOM ? t(s) : n && (s = n(s));
          }
          var f = (function (e) {
            var t, n;
            function a() {
              return e.apply(this, arguments) || this;
            }
            (n = e),
              ((t = a).prototype = Object.create(n.prototype)),
              (t.prototype.constructor = t),
              (t.__proto__ = n),
              (a.peek = function () {
                return s;
              }),
              (a.rewind = function () {
                if (a.canUseDOM)
                  throw new Error(
                    "You may only call rewind() on the server. Call peek() to read the current state."
                  );
                var e = s;
                return (s = void 0), (u = []), e;
              });
            var o = a.prototype;
            return (
              (o.UNSAFE_componentWillMount = function () {
                u.push(this), l();
              }),
              (o.componentDidUpdate = function () {
                l();
              }),
              (o.componentWillUnmount = function () {
                var e = u.indexOf(this);
                u.splice(e, 1), l();
              }),
              (o.render = function () {
                return i.createElement(r, this.props);
              }),
              a
            );
          })(a.PureComponent);
          return (
            o(
              f,
              "displayName",
              "SideEffect(" +
                (function (e) {
                  return e.displayName || e.name || "Component";
                })(r) +
                ")"
            ),
            o(f, "canUseDOM", c),
            f
          );
        };
      };
    },
    8244: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return Ae;
        },
      });
      var r,
        a,
        i,
        o,
        c = n(7294),
        s = n(5697),
        u = n.n(s),
        l = n(4839),
        f = n.n(l),
        p = n(2993),
        m = n.n(p),
        d = n(6494),
        h = n.n(d),
        y = "bodyAttributes",
        b = "htmlAttributes",
        v = "titleAttributes",
        g = {
          BASE: "base",
          BODY: "body",
          HEAD: "head",
          HTML: "html",
          LINK: "link",
          META: "meta",
          NOSCRIPT: "noscript",
          SCRIPT: "script",
          STYLE: "style",
          TITLE: "title",
        },
        T =
          (Object.keys(g).map(function (e) {
            return g[e];
          }),
          "charset"),
        w = "cssText",
        E = "href",
        A = "http-equiv",
        O = "innerHTML",
        C = "itemprop",
        S = "name",
        j = "property",
        k = "rel",
        N = "src",
        x = "target",
        P = {
          accesskey: "accessKey",
          charset: "charSet",
          class: "className",
          contenteditable: "contentEditable",
          contextmenu: "contextMenu",
          "http-equiv": "httpEquiv",
          itemprop: "itemProp",
          tabindex: "tabIndex",
        },
        L = "defaultTitle",
        M = "defer",
        I = "encodeSpecialCharacters",
        R = "onChangeClientState",
        D = "titleTemplate",
        _ = Object.keys(P).reduce(function (e, t) {
          return (e[P[t]] = t), e;
        }, {}),
        H = [g.NOSCRIPT, g.SCRIPT, g.STYLE],
        q = "data-react-helmet",
        F =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        B = function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        },
        Y = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        K =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        U = function (e, t) {
          var n = {};
          for (var r in e)
            t.indexOf(r) >= 0 ||
              (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
          return n;
        },
        z = function (e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        },
        W = function (e) {
          var t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return !1 === t
            ? String(e)
            : String(e)
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#x27;");
        },
        Q = function (e) {
          var t = Z(e, g.TITLE),
            n = Z(e, D);
          if (n && t)
            return n.replace(/%s/g, function () {
              return Array.isArray(t) ? t.join("") : t;
            });
          var r = Z(e, L);
          return t || r || void 0;
        },
        V = function (e) {
          return Z(e, R) || function () {};
        },
        $ = function (e, t) {
          return t
            .filter(function (t) {
              return void 0 !== t[e];
            })
            .map(function (t) {
              return t[e];
            })
            .reduce(function (e, t) {
              return K({}, e, t);
            }, {});
        },
        G = function (e, t) {
          return t
            .filter(function (e) {
              return void 0 !== e[g.BASE];
            })
            .map(function (e) {
              return e[g.BASE];
            })
            .reverse()
            .reduce(function (t, n) {
              if (!t.length)
                for (var r = Object.keys(n), a = 0; a < r.length; a++) {
                  var i = r[a].toLowerCase();
                  if (-1 !== e.indexOf(i) && n[i]) return t.concat(n);
                }
              return t;
            }, []);
        },
        J = function (e, t, n) {
          var r = {};
          return n
            .filter(function (t) {
              return (
                !!Array.isArray(t[e]) ||
                (void 0 !== t[e] &&
                  re(
                    "Helmet: " +
                      e +
                      ' should be of type "Array". Instead found type "' +
                      F(t[e]) +
                      '"'
                  ),
                !1)
              );
            })
            .map(function (t) {
              return t[e];
            })
            .reverse()
            .reduce(function (e, n) {
              var a = {};
              n.filter(function (e) {
                for (
                  var n = void 0, i = Object.keys(e), o = 0;
                  o < i.length;
                  o++
                ) {
                  var c = i[o],
                    s = c.toLowerCase();
                  -1 === t.indexOf(s) ||
                    (n === k && "canonical" === e[n].toLowerCase()) ||
                    (s === k && "stylesheet" === e[s].toLowerCase()) ||
                    (n = s),
                    -1 === t.indexOf(c) ||
                      (c !== O && c !== w && c !== C) ||
                      (n = c);
                }
                if (!n || !e[n]) return !1;
                var u = e[n].toLowerCase();
                return (
                  r[n] || (r[n] = {}),
                  a[n] || (a[n] = {}),
                  !r[n][u] && ((a[n][u] = !0), !0)
                );
              })
                .reverse()
                .forEach(function (t) {
                  return e.push(t);
                });
              for (var i = Object.keys(a), o = 0; o < i.length; o++) {
                var c = i[o],
                  s = h()({}, r[c], a[c]);
                r[c] = s;
              }
              return e;
            }, [])
            .reverse();
        },
        Z = function (e, t) {
          for (var n = e.length - 1; n >= 0; n--) {
            var r = e[n];
            if (r.hasOwnProperty(t)) return r[t];
          }
          return null;
        },
        X =
          ((r = Date.now()),
          function (e) {
            var t = Date.now();
            t - r > 16
              ? ((r = t), e(t))
              : setTimeout(function () {
                  X(e);
                }, 0);
          }),
        ee = function (e) {
          return clearTimeout(e);
        },
        te =
          "undefined" != typeof window
            ? (window.requestAnimationFrame &&
                window.requestAnimationFrame.bind(window)) ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              X
            : n.g.requestAnimationFrame || X,
        ne =
          "undefined" != typeof window
            ? window.cancelAnimationFrame ||
              window.webkitCancelAnimationFrame ||
              window.mozCancelAnimationFrame ||
              ee
            : n.g.cancelAnimationFrame || ee,
        re = function (e) {
          return (
            console && "function" == typeof console.warn && console.warn(e)
          );
        },
        ae = null,
        ie = function (e, t) {
          var n = e.baseTag,
            r = e.bodyAttributes,
            a = e.htmlAttributes,
            i = e.linkTags,
            o = e.metaTags,
            c = e.noscriptTags,
            s = e.onChangeClientState,
            u = e.scriptTags,
            l = e.styleTags,
            f = e.title,
            p = e.titleAttributes;
          se(g.BODY, r), se(g.HTML, a), ce(f, p);
          var m = {
              baseTag: ue(g.BASE, n),
              linkTags: ue(g.LINK, i),
              metaTags: ue(g.META, o),
              noscriptTags: ue(g.NOSCRIPT, c),
              scriptTags: ue(g.SCRIPT, u),
              styleTags: ue(g.STYLE, l),
            },
            d = {},
            h = {};
          Object.keys(m).forEach(function (e) {
            var t = m[e],
              n = t.newTags,
              r = t.oldTags;
            n.length && (d[e] = n), r.length && (h[e] = m[e].oldTags);
          }),
            t && t(),
            s(e, d, h);
        },
        oe = function (e) {
          return Array.isArray(e) ? e.join("") : e;
        },
        ce = function (e, t) {
          void 0 !== e && document.title !== e && (document.title = oe(e)),
            se(g.TITLE, t);
        },
        se = function (e, t) {
          var n = document.getElementsByTagName(e)[0];
          if (n) {
            for (
              var r = n.getAttribute(q),
                a = r ? r.split(",") : [],
                i = [].concat(a),
                o = Object.keys(t),
                c = 0;
              c < o.length;
              c++
            ) {
              var s = o[c],
                u = t[s] || "";
              n.getAttribute(s) !== u && n.setAttribute(s, u),
                -1 === a.indexOf(s) && a.push(s);
              var l = i.indexOf(s);
              -1 !== l && i.splice(l, 1);
            }
            for (var f = i.length - 1; f >= 0; f--) n.removeAttribute(i[f]);
            a.length === i.length
              ? n.removeAttribute(q)
              : n.getAttribute(q) !== o.join(",") &&
                n.setAttribute(q, o.join(","));
          }
        },
        ue = function (e, t) {
          var n = document.head || document.querySelector(g.HEAD),
            r = n.querySelectorAll(e + "[" + "data-react-helmet]"),
            a = Array.prototype.slice.call(r),
            i = [],
            o = void 0;
          return (
            t &&
              t.length &&
              t.forEach(function (t) {
                var n = document.createElement(e);
                for (var r in t)
                  if (t.hasOwnProperty(r))
                    if (r === O) n.innerHTML = t.innerHTML;
                    else if (r === w)
                      n.styleSheet
                        ? (n.styleSheet.cssText = t.cssText)
                        : n.appendChild(document.createTextNode(t.cssText));
                    else {
                      var c = void 0 === t[r] ? "" : t[r];
                      n.setAttribute(r, c);
                    }
                n.setAttribute(q, "true"),
                  a.some(function (e, t) {
                    return (o = t), n.isEqualNode(e);
                  })
                    ? a.splice(o, 1)
                    : i.push(n);
              }),
            a.forEach(function (e) {
              return e.parentNode.removeChild(e);
            }),
            i.forEach(function (e) {
              return n.appendChild(e);
            }),
            { oldTags: a, newTags: i }
          );
        },
        le = function (e) {
          return Object.keys(e).reduce(function (t, n) {
            var r = void 0 !== e[n] ? n + '="' + e[n] + '"' : "" + n;
            return t ? t + " " + r : r;
          }, "");
        },
        fe = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return Object.keys(e).reduce(function (t, n) {
            return (t[P[n] || n] = e[n]), t;
          }, t);
        },
        pe = function (e, t, n) {
          switch (e) {
            case g.TITLE:
              return {
                toComponent: function () {
                  return (
                    (e = t.title),
                    (n = t.titleAttributes),
                    ((r = { key: e })[q] = !0),
                    (a = fe(n, r)),
                    [c.createElement(g.TITLE, a, e)]
                  );
                  var e, n, r, a;
                },
                toString: function () {
                  return (function (e, t, n, r) {
                    var a = le(n),
                      i = oe(t);
                    return a
                      ? "<" +
                          e +
                          ' data-react-helmet="true" ' +
                          a +
                          ">" +
                          W(i, r) +
                          "</" +
                          e +
                          ">"
                      : "<" +
                          e +
                          ' data-react-helmet="true">' +
                          W(i, r) +
                          "</" +
                          e +
                          ">";
                  })(e, t.title, t.titleAttributes, n);
                },
              };
            case y:
            case b:
              return {
                toComponent: function () {
                  return fe(t);
                },
                toString: function () {
                  return le(t);
                },
              };
            default:
              return {
                toComponent: function () {
                  return (function (e, t) {
                    return t.map(function (t, n) {
                      var r,
                        a = (((r = { key: n })[q] = !0), r);
                      return (
                        Object.keys(t).forEach(function (e) {
                          var n = P[e] || e;
                          if (n === O || n === w) {
                            var r = t.innerHTML || t.cssText;
                            a.dangerouslySetInnerHTML = { __html: r };
                          } else a[n] = t[e];
                        }),
                        c.createElement(e, a)
                      );
                    });
                  })(e, t);
                },
                toString: function () {
                  return (function (e, t, n) {
                    return t.reduce(function (t, r) {
                      var a = Object.keys(r)
                          .filter(function (e) {
                            return !(e === O || e === w);
                          })
                          .reduce(function (e, t) {
                            var a =
                              void 0 === r[t] ? t : t + '="' + W(r[t], n) + '"';
                            return e ? e + " " + a : a;
                          }, ""),
                        i = r.innerHTML || r.cssText || "",
                        o = -1 === H.indexOf(e);
                      return (
                        t +
                        "<" +
                        e +
                        ' data-react-helmet="true" ' +
                        a +
                        (o ? "/>" : ">" + i + "</" + e + ">")
                      );
                    }, "");
                  })(e, t, n);
                },
              };
          }
        },
        me = function (e) {
          var t = e.baseTag,
            n = e.bodyAttributes,
            r = e.encode,
            a = e.htmlAttributes,
            i = e.linkTags,
            o = e.metaTags,
            c = e.noscriptTags,
            s = e.scriptTags,
            u = e.styleTags,
            l = e.title,
            f = void 0 === l ? "" : l,
            p = e.titleAttributes;
          return {
            base: pe(g.BASE, t, r),
            bodyAttributes: pe(y, n, r),
            htmlAttributes: pe(b, a, r),
            link: pe(g.LINK, i, r),
            meta: pe(g.META, o, r),
            noscript: pe(g.NOSCRIPT, c, r),
            script: pe(g.SCRIPT, s, r),
            style: pe(g.STYLE, u, r),
            title: pe(g.TITLE, { title: f, titleAttributes: p }, r),
          };
        },
        de = f()(
          function (e) {
            return {
              baseTag: G([E, x], e),
              bodyAttributes: $(y, e),
              defer: Z(e, M),
              encode: Z(e, I),
              htmlAttributes: $(b, e),
              linkTags: J(g.LINK, [k, E], e),
              metaTags: J(g.META, [S, T, A, j, C], e),
              noscriptTags: J(g.NOSCRIPT, [O], e),
              onChangeClientState: V(e),
              scriptTags: J(g.SCRIPT, [N, O], e),
              styleTags: J(g.STYLE, [w], e),
              title: Q(e),
              titleAttributes: $(v, e),
            };
          },
          function (e) {
            ae && ne(ae),
              e.defer
                ? (ae = te(function () {
                    ie(e, function () {
                      ae = null;
                    });
                  }))
                : (ie(e), (ae = null));
          },
          me
        )(function () {
          return null;
        }),
        he =
          ((a = de),
          (o = i =
            (function (e) {
              function t() {
                return B(this, t), z(this, e.apply(this, arguments));
              }
              return (
                (function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof t
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    t &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, t)
                        : (e.__proto__ = t));
                })(t, e),
                (t.prototype.shouldComponentUpdate = function (e) {
                  return !m()(this.props, e);
                }),
                (t.prototype.mapNestedChildrenToProps = function (e, t) {
                  if (!t) return null;
                  switch (e.type) {
                    case g.SCRIPT:
                    case g.NOSCRIPT:
                      return { innerHTML: t };
                    case g.STYLE:
                      return { cssText: t };
                  }
                  throw new Error(
                    "<" +
                      e.type +
                      " /> elements are self-closing and can not contain children. Refer to our API for more information."
                  );
                }),
                (t.prototype.flattenArrayTypeChildren = function (e) {
                  var t,
                    n = e.child,
                    r = e.arrayTypeChildren,
                    a = e.newChildProps,
                    i = e.nestedChildren;
                  return K(
                    {},
                    r,
                    (((t = {})[n.type] = [].concat(r[n.type] || [], [
                      K({}, a, this.mapNestedChildrenToProps(n, i)),
                    ])),
                    t)
                  );
                }),
                (t.prototype.mapObjectTypeChildren = function (e) {
                  var t,
                    n,
                    r = e.child,
                    a = e.newProps,
                    i = e.newChildProps,
                    o = e.nestedChildren;
                  switch (r.type) {
                    case g.TITLE:
                      return K(
                        {},
                        a,
                        (((t = {})[r.type] = o),
                        (t.titleAttributes = K({}, i)),
                        t)
                      );
                    case g.BODY:
                      return K({}, a, { bodyAttributes: K({}, i) });
                    case g.HTML:
                      return K({}, a, { htmlAttributes: K({}, i) });
                  }
                  return K({}, a, (((n = {})[r.type] = K({}, i)), n));
                }),
                (t.prototype.mapArrayTypeChildrenToProps = function (e, t) {
                  var n = K({}, t);
                  return (
                    Object.keys(e).forEach(function (t) {
                      var r;
                      n = K({}, n, (((r = {})[t] = e[t]), r));
                    }),
                    n
                  );
                }),
                (t.prototype.warnOnInvalidChildren = function (e, t) {
                  return !0;
                }),
                (t.prototype.mapChildrenToProps = function (e, t) {
                  var n = this,
                    r = {};
                  return (
                    c.Children.forEach(e, function (e) {
                      if (e && e.props) {
                        var a = e.props,
                          i = a.children,
                          o = (function (e) {
                            var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {};
                            return Object.keys(e).reduce(function (t, n) {
                              return (t[_[n] || n] = e[n]), t;
                            }, t);
                          })(U(a, ["children"]));
                        switch ((n.warnOnInvalidChildren(e, i), e.type)) {
                          case g.LINK:
                          case g.META:
                          case g.NOSCRIPT:
                          case g.SCRIPT:
                          case g.STYLE:
                            r = n.flattenArrayTypeChildren({
                              child: e,
                              arrayTypeChildren: r,
                              newChildProps: o,
                              nestedChildren: i,
                            });
                            break;
                          default:
                            t = n.mapObjectTypeChildren({
                              child: e,
                              newProps: t,
                              newChildProps: o,
                              nestedChildren: i,
                            });
                        }
                      }
                    }),
                    (t = this.mapArrayTypeChildrenToProps(r, t))
                  );
                }),
                (t.prototype.render = function () {
                  var e = this.props,
                    t = e.children,
                    n = U(e, ["children"]),
                    r = K({}, n);
                  return (
                    t && (r = this.mapChildrenToProps(t, r)),
                    c.createElement(a, r)
                  );
                }),
                Y(t, null, [
                  {
                    key: "canUseDOM",
                    set: function (e) {
                      a.canUseDOM = e;
                    },
                  },
                ]),
                t
              );
            })(c.Component)),
          (i.propTypes = {
            base: u().object,
            bodyAttributes: u().object,
            children: u().oneOfType([u().arrayOf(u().node), u().node]),
            defaultTitle: u().string,
            defer: u().bool,
            encodeSpecialCharacters: u().bool,
            htmlAttributes: u().object,
            link: u().arrayOf(u().object),
            meta: u().arrayOf(u().object),
            noscript: u().arrayOf(u().object),
            onChangeClientState: u().func,
            script: u().arrayOf(u().object),
            style: u().arrayOf(u().object),
            title: u().string,
            titleAttributes: u().object,
            titleTemplate: u().string,
          }),
          (i.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
          (i.peek = a.peek),
          (i.rewind = function () {
            var e = a.rewind();
            return (
              e ||
                (e = me({
                  baseTag: [],
                  bodyAttributes: {},
                  encodeSpecialCharacters: !0,
                  htmlAttributes: {},
                  linkTags: [],
                  metaTags: [],
                  noscriptTags: [],
                  scriptTags: [],
                  styleTags: [],
                  title: "",
                  titleAttributes: {},
                })),
              e
            );
          }),
          o);
      he.renderStatic = he.rewind;
      var ye = n(5444);
      var be = function (e) {
        var t = e.pageTitle,
          n = e.pageDescription,
          r = (0, ye.useStaticQuery)("1003640200"),
          a = "",
          i = r.site.siteMetadata.title;
        a = void 0 === t ? i : t + " | " + i;
        var o = "";
        return (
          (o = void 0 === n ? r.site.siteMetadata.description : n),
          c.createElement(
            he,
            {
              title: a,
              meta: [
                { name: "description", content: o },
                { property: "og:title", content: a },
                { property: "og:description", content: o },
                { property: "og:type", content: "website" },
                { name: "twitter:card", content: "summary" },
                {
                  name: "twitter:creator",
                  content: r.site.siteMetadata.author,
                },
                { name: "twitter:title", content: a },
                { name: "twitter:description", content: o },
              ],
            },
            c.createElement("link", {
              rel: "stylesheet",
              href: "https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css",
            }),
            c.createElement("link", {
              rel: "stylesheet",
              href: "https://use.fontawesome.com/releases/v5.7.2/css/all.css",
              integrity:
                "sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr",
              crossOrigin: "anonymous",
            }),
            c.createElement("link", {
              rel: "stylesheet",
              href: "https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css",
            })
          )
        );
      };
      var ve = function (e) {
        var t = e.url,
          n = e.children;
        return c.createElement(
          "a",
          {
            className: "navbar-item",
            href: t,
            target: "_blank",
            rel: "noreferrer",
          },
          n
        );
      };
      var ge = function () {
        return c.createElement(
          c.Fragment,
          null,
          c.createElement(
            ve,
            { url: "https://github.com/KwatME" },
            c.createElement("i", { className: "fab fa-github" })
          ),
          c.createElement(
            ve,
            {
              url: "https://scholar.google.com/citations?user=PAM4lScAAAAJ&hl",
            },
            c.createElement("i", { className: "ai ai-google-scholar ai-lg" })
          ),
          c.createElement(
            ve,
            { url: "https://twitter.com/KwatME" },
            c.createElement("i", { className: "fab fa-twitter" })
          ),
          c.createElement(
            ve,
            { url: "https://www.instagram.com/Kwat.ME" },
            c.createElement("i", { className: "fab fa-instagram" })
          )
        );
      };
      var Te = function () {
        return c.createElement(
          c.Fragment,
          null,
          c.createElement(
            ye.Link,
            { className: "navbar-item", to: "/about" },
            "About"
          ),
          c.createElement(
            ye.Link,
            { className: "navbar-item", to: "/posts" },
            "Posts"
          )
        );
      };
      var we = function () {
        var e = c.useState(!1),
          t = e[0],
          n = e[1];
        return c.createElement(
          "nav",
          {
            className: "navbar",
            role: "navigation",
            "aria-label": "main navigation",
          },
          c.createElement(
            "span",
            { className: "navbar-brand" },
            c.createElement(
              ye.Link,
              { className: "navbar-item", to: "/" },
              c.createElement(
                "p",
                { className: "is-size-4 has-text-weight-bold" },
                "~"
              )
            ),
            c.createElement(
              "button",
              {
                className:
                  "navbar-burger button is-white " + (t ? "is-active" : ""),
                type: "button",
                "aria-label": "menu",
                "aria-expanded": "false",
                onClick: function () {
                  n(!t);
                },
              },
              c.createElement("span", { "aria-hidden": "true" }),
              c.createElement("span", { "aria-hidden": "true" }),
              c.createElement("span", { "aria-hidden": "true" })
            )
          ),
          c.createElement(
            "span",
            { className: "navbar-menu " + (t ? "is-active" : "") },
            c.createElement(
              "span",
              { className: "navbar-start" },
              c.createElement(Te, null)
            ),
            c.createElement(
              "span",
              { className: "navbar-end" },
              c.createElement(ge, null)
            )
          )
        );
      };
      var Ee = function () {
        var e = (0, ye.useStaticQuery)("893747738");
        return c.createElement(
          "footer",
          { className: "footer pb-6", role: "contentinfo" },
          c.createElement(
            "div",
            { className: "columns has-text-centered-touch" },
            c.createElement(
              "div",
              { className: "column" },
              c.createElement(
                "section",
                { className: "has-text-left-desktop" },
                c.createElement(
                  "p",
                  { className: "has-text-weight-medium is-italic" },
                  "Opinions are my own."
                )
              )
            ),
            c.createElement(
              "div",
              { className: "column" },
              c.createElement(
                "section",
                { className: "has-text-right-desktop" },
                c.createElement(
                  "p",
                  { className: "has-text-weight-medium" },
                  e.site.siteMetadata.author,
                  " © ",
                  new Date().getFullYear()
                )
              )
            )
          )
        );
      };
      var Ae = function (e) {
        var t = e.pageTitle,
          n = e.pageDescription,
          r = e.children;
        return c.createElement(
          c.Fragment,
          null,
          c.createElement(be, { pageTitle: t, pageDescription: n }),
          c.createElement(
            "div",
            {
              style: {
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
              },
            },
            c.createElement(we, null),
            c.createElement("main", { role: "main", style: { flex: 1 } }, r),
            c.createElement(Ee, null)
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=a8e730ac0a26554b931763a16d375bb38cbcca0f-872b056c087af40849cb.js.map
