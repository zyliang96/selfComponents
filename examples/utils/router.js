/*! For license information please see router.js.LICENSE.txt */
!(function (e, t) {
	"object" == typeof exports && "object" == typeof module
		? (module.exports = t(require("react")))
		: "function" == typeof define && define.amd
		? define(["react"], t)
		: "object" == typeof exports
		? (exports.zyliangRouter = t(require("react")))
		: (e.zyliangRouter = t(e.React));
})(self, function (e) {
	return (() => {
		var t = {
				529: (e, t, r) => {
					"use strict";
					var n = r(40),
						o = {
							childContextTypes: !0,
							contextType: !0,
							contextTypes: !0,
							defaultProps: !0,
							displayName: !0,
							getDefaultProps: !0,
							getDerivedStateFromError: !0,
							getDerivedStateFromProps: !0,
							mixins: !0,
							propTypes: !0,
							type: !0,
						},
						a = {
							name: !0,
							length: !0,
							prototype: !0,
							caller: !0,
							callee: !0,
							arguments: !0,
							arity: !0,
						},
						i = {
							$$typeof: !0,
							compare: !0,
							defaultProps: !0,
							displayName: !0,
							propTypes: !0,
							type: !0,
						},
						c = {};
					function u(e) {
						return n.isMemo(e) ? i : c[e.$$typeof] || o;
					}
					(c[n.ForwardRef] = {
						$$typeof: !0,
						render: !0,
						defaultProps: !0,
						displayName: !0,
						propTypes: !0,
					}),
						(c[n.Memo] = i);
					var f = Object.defineProperty,
						l = Object.getOwnPropertyNames,
						s = Object.getOwnPropertySymbols,
						p = Object.getOwnPropertyDescriptor,
						y = Object.getPrototypeOf,
						h = Object.prototype;
					e.exports = function e(t, r, n) {
						if ("string" != typeof r) {
							if (h) {
								var o = y(r);
								o && o !== h && e(t, o, n);
							}
							var i = l(r);
							s && (i = i.concat(s(r)));
							for (var c = u(t), d = u(r), v = 0; v < i.length; ++v) {
								var m = i[v];
								if (!(a[m] || (n && n[m]) || (d && d[m]) || (c && c[m]))) {
									var b = p(r, m);
									try {
										f(t, m, b);
									} catch (e) {}
								}
							}
						}
						return t;
					};
				},
				903: (e, t) => {
					"use strict";
					function r(e) {
						return (r =
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
								  })(e);
					}
					var n = "function" == typeof Symbol && Symbol.for,
						o = n ? Symbol.for("react.element") : 60103,
						a = n ? Symbol.for("react.portal") : 60106,
						i = n ? Symbol.for("react.fragment") : 60107,
						c = n ? Symbol.for("react.strict_mode") : 60108,
						u = n ? Symbol.for("react.profiler") : 60114,
						f = n ? Symbol.for("react.provider") : 60109,
						l = n ? Symbol.for("react.context") : 60110,
						s = n ? Symbol.for("react.async_mode") : 60111,
						p = n ? Symbol.for("react.concurrent_mode") : 60111,
						y = n ? Symbol.for("react.forward_ref") : 60112,
						h = n ? Symbol.for("react.suspense") : 60113,
						d = n ? Symbol.for("react.suspense_list") : 60120,
						v = n ? Symbol.for("react.memo") : 60115,
						m = n ? Symbol.for("react.lazy") : 60116,
						b = n ? Symbol.for("react.block") : 60121,
						g = n ? Symbol.for("react.fundamental") : 60117,
						O = n ? Symbol.for("react.responder") : 60118,
						j = n ? Symbol.for("react.scope") : 60119;
					function S(e) {
						if ("object" === r(e) && null !== e) {
							var t = e.$$typeof;
							switch (t) {
								case o:
									switch ((e = e.type)) {
										case s:
										case p:
										case i:
										case u:
										case c:
										case h:
											return e;
										default:
											switch ((e = e && e.$$typeof)) {
												case l:
												case y:
												case m:
												case v:
												case f:
													return e;
												default:
													return t;
											}
									}
								case a:
									return t;
							}
						}
					}
					function w(e) {
						return S(e) === p;
					}
					(t.AsyncMode = s),
						(t.ConcurrentMode = p),
						(t.ContextConsumer = l),
						(t.ContextProvider = f),
						(t.Element = o),
						(t.ForwardRef = y),
						(t.Fragment = i),
						(t.Lazy = m),
						(t.Memo = v),
						(t.Portal = a),
						(t.Profiler = u),
						(t.StrictMode = c),
						(t.Suspense = h),
						(t.isAsyncMode = function (e) {
							return w(e) || S(e) === s;
						}),
						(t.isConcurrentMode = w),
						(t.isContextConsumer = function (e) {
							return S(e) === l;
						}),
						(t.isContextProvider = function (e) {
							return S(e) === f;
						}),
						(t.isElement = function (e) {
							return "object" === r(e) && null !== e && e.$$typeof === o;
						}),
						(t.isForwardRef = function (e) {
							return S(e) === y;
						}),
						(t.isFragment = function (e) {
							return S(e) === i;
						}),
						(t.isLazy = function (e) {
							return S(e) === m;
						}),
						(t.isMemo = function (e) {
							return S(e) === v;
						}),
						(t.isPortal = function (e) {
							return S(e) === a;
						}),
						(t.isProfiler = function (e) {
							return S(e) === u;
						}),
						(t.isStrictMode = function (e) {
							return S(e) === c;
						}),
						(t.isSuspense = function (e) {
							return S(e) === h;
						}),
						(t.isValidElementType = function (e) {
							return (
								"string" == typeof e ||
								"function" == typeof e ||
								e === i ||
								e === p ||
								e === u ||
								e === c ||
								e === h ||
								e === d ||
								("object" === r(e) &&
									null !== e &&
									(e.$$typeof === m ||
										e.$$typeof === v ||
										e.$$typeof === f ||
										e.$$typeof === l ||
										e.$$typeof === y ||
										e.$$typeof === g ||
										e.$$typeof === O ||
										e.$$typeof === j ||
										e.$$typeof === b))
							);
						}),
						(t.typeOf = S);
				},
				40: (e, t, r) => {
					"use strict";
					e.exports = r(903);
				},
				993: (e, t, r) => {
					"use strict";
					r.r(t),
						r.d(t, {
							BrowserRouter: () => M,
							HashRouter: () => U,
							Link: () => W,
							Redirect: () => T,
							Route: () => S,
							Router: () => l,
							Switch: () => R,
							WithRouter: () => Y,
							compilePath: () => m,
							matchPath: () => b,
						});
					var n = r(698),
						o = r.n(n);
					const a = function (e, t) {
						var r = o().createContext(t);
						return (r.displayName = e), r;
					};
					const i = a("Router");
					const c = a("Router-History");
					function u(e, t) {
						return (
							(function (e) {
								if (Array.isArray(e)) return e;
							})(e) ||
							(function (e, t) {
								if (
									"undefined" == typeof Symbol ||
									!(Symbol.iterator in Object(e))
								)
									return;
								var r = [],
									n = !0,
									o = !1,
									a = void 0;
								try {
									for (
										var i, c = e[Symbol.iterator]();
										!(n = (i = c.next()).done) &&
										(r.push(i.value), !t || r.length !== t);
										n = !0
									);
								} catch (e) {
									(o = !0), (a = e);
								} finally {
									try {
										n || null == c.return || c.return();
									} finally {
										if (o) throw a;
									}
								}
								return r;
							})(e, t) ||
							(function (e, t) {
								if (!e) return;
								if ("string" == typeof e) return f(e, t);
								var r = Object.prototype.toString.call(e).slice(8, -1);
								"Object" === r && e.constructor && (r = e.constructor.name);
								if ("Map" === r || "Set" === r) return Array.from(e);
								if (
									"Arguments" === r ||
									/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
								)
									return f(e, t);
							})(e, t) ||
							(function () {
								throw new TypeError(
									"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
								);
							})()
						);
					}
					function f(e, t) {
						(null == t || t > e.length) && (t = e.length);
						for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
						return n;
					}
					const l = function (e) {
						var t,
							r = e.children,
							a = e.history,
							f = e.staticContext,
							l = void 0 !== f && f,
							s = u((0, n.useState)(a.location), 2),
							p = s[0],
							y = s[1];
						return (
							(0, n.useEffect)(
								function () {
									y(a.location);
									var e = null;
									return (
										l ||
											(e = a.listen(function (e) {
												e.action;
												var t = e.location;
												y(t);
											})),
										function () {
											e && e();
										}
									);
								},
								[a]
							),
							o().createElement(
								i.Provider,
								{
									value: {
										history: a,
										location: p,
										match:
											((t = p.pathname),
											{ path: "/", url: "/", params: {}, isExact: "/" === t }),
										staticContext: l,
									},
								},
								o().createElement(c.Provider, { children: r, value: a })
							)
						);
					};
					var s = r(433);
					function p(e) {
						return (
							(function (e) {
								if (Array.isArray(e)) return e;
							})(e) ||
							(function (e) {
								if (
									"undefined" != typeof Symbol &&
									Symbol.iterator in Object(e)
								)
									return Array.from(e);
							})(e) ||
							(function (e, t) {
								if (!e) return;
								if ("string" == typeof e) return y(e, t);
								var r = Object.prototype.toString.call(e).slice(8, -1);
								"Object" === r && e.constructor && (r = e.constructor.name);
								if ("Map" === r || "Set" === r) return Array.from(e);
								if (
									"Arguments" === r ||
									/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
								)
									return y(e, t);
							})(e) ||
							(function () {
								throw new TypeError(
									"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
								);
							})()
						);
					}
					function y(e, t) {
						(null == t || t > e.length) && (t = e.length);
						for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
						return n;
					}
					var h = {},
						d = [],
						v = 0;
					function m(e) {
						var t =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: {};
						if (h[e]) return h[e];
						var r = [],
							n = (0, s.B)(e, r, t),
							o = { regexp: n, keys: r };
						if (v < 1e4) (h[e] = o), d.push(e), v++;
						else {
							var a = d.shift();
							delete h[a], (h[e] = o), d.push(e);
						}
						return o;
					}
					function b(e) {
						var t =
							arguments.length > 1 && void 0 !== arguments[1]
								? arguments[1]
								: {};
						("string" == typeof t || Array.isArray(t)) && (t = { path: t });
						var r = t,
							n = r.path,
							o = r.exact,
							a = void 0 !== o && o,
							i = r.strict,
							c = void 0 !== i && i,
							u = r.sensitive,
							f = void 0 !== u && u,
							l = [].concat(n);
						return l.reduce(function (t, r) {
							if (!r && "" !== r) return null;
							if (t) return t;
							var n = m(r, { end: a, strict: c, sensitive: f }),
								o = n.regexp,
								i = n.keys,
								u = o.exec(e);
							if (!u) return null;
							var l = p(u),
								s = l[0],
								y = l.slice(1),
								h = e === s;
							return a && !h
								? null
								: {
										path: r,
										url: "/" === r && "" === s ? "/" : s,
										isExact: h,
										params: i.reduce(function (e, t, r) {
											return (e[t.name] = y[r]), e;
										}, {}),
								  };
						}, null);
					}
					function g(e, t) {
						var r = Object.keys(e);
						if (Object.getOwnPropertySymbols) {
							var n = Object.getOwnPropertySymbols(e);
							t &&
								(n = n.filter(function (t) {
									return Object.getOwnPropertyDescriptor(e, t).enumerable;
								})),
								r.push.apply(r, n);
						}
						return r;
					}
					function O(e) {
						for (var t = 1; t < arguments.length; t++) {
							var r = null != arguments[t] ? arguments[t] : {};
							t % 2
								? g(Object(r), !0).forEach(function (t) {
										j(e, t, r[t]);
								  })
								: Object.getOwnPropertyDescriptors
								? Object.defineProperties(
										e,
										Object.getOwnPropertyDescriptors(r)
								  )
								: g(Object(r)).forEach(function (t) {
										Object.defineProperty(
											e,
											t,
											Object.getOwnPropertyDescriptor(r, t)
										);
								  });
						}
						return e;
					}
					function j(e, t, r) {
						return (
							t in e
								? Object.defineProperty(e, t, {
										value: r,
										enumerable: !0,
										configurable: !0,
										writable: !0,
								  })
								: (e[t] = r),
							e
						);
					}
					const S = function (e) {
						var t = e.path,
							r = e.component,
							n = e.children,
							a = e.render,
							c = e.computedMatch;
						return o().createElement(i.Consumer, null, function (u) {
							u.history;
							var f = u.location,
								l = u.match,
								s = e.location || f,
								p = c || (t ? b(s.pathname, e) : l),
								y = O(O({}, u), {}, { nowLocation: s, nowMatch: p });
							return (
								Array.isArray(n) &&
									(function (e) {
										return 0 === o().Children.count(e);
									})(n) &&
									((function (e) {
										throw new TypeError('"' + e + '" is read-only');
									})("children"),
									(n = null)),
								o().createElement(
									i.Provider,
									{ value: y },
									p
										? n
											? "function" == typeof n
												? n(y)
												: n
											: r
											? o().createElement(r, y)
											: a
											? a(y)
											: null
										: "function" == typeof n
										? n(y)
										: n
								)
							);
						});
					};
					var w = r(391);
					function P(e) {
						var t = e.onMount,
							r = e.onUpdate,
							o = e.to;
						return (
							(0, n.useEffect)(function () {
								t && t();
							}, []),
							(0, n.useEffect)(
								function () {
									console.log(2222222222), r(e);
								},
								[o]
							),
							null
						);
					}
					function x(e, t) {
						var r = Object.keys(e);
						if (Object.getOwnPropertySymbols) {
							var n = Object.getOwnPropertySymbols(e);
							t &&
								(n = n.filter(function (t) {
									return Object.getOwnPropertyDescriptor(e, t).enumerable;
								})),
								r.push.apply(r, n);
						}
						return r;
					}
					function E(e) {
						for (var t = 1; t < arguments.length; t++) {
							var r = null != arguments[t] ? arguments[t] : {};
							t % 2
								? x(Object(r), !0).forEach(function (t) {
										A(e, t, r[t]);
								  })
								: Object.getOwnPropertyDescriptors
								? Object.defineProperties(
										e,
										Object.getOwnPropertyDescriptors(r)
								  )
								: x(Object(r)).forEach(function (t) {
										Object.defineProperty(
											e,
											t,
											Object.getOwnPropertyDescriptor(r, t)
										);
								  });
						}
						return e;
					}
					function A(e, t, r) {
						return (
							t in e
								? Object.defineProperty(e, t, {
										value: r,
										enumerable: !0,
										configurable: !0,
										writable: !0,
								  })
								: (e[t] = r),
							e
						);
					}
					const T = function (e) {
						e.computedMatch;
						var t = e.to,
							r = e.push,
							n = void 0 !== r && r,
							a = e.from;
						return o().createElement(i.Consumer, null, function (r) {
							console.log("Redirect");
							var i = r.history,
								c = r.staticContext,
								u = r.location,
								f = n ? i.push : i.replace,
								l = e.location || u,
								s = a ? b(l.pathname, E({ path: a }, e)) : null,
								p = (0, w.createLocation)({ path: t }),
								y = function () {
									if (a) return s && f(p), null;
									f(p);
								};
							return c
								? (y(), null)
								: o().createElement(P, {
										onMount: function () {
											y();
										},
										onUpdate: function (e) {
											var t = (0, w.createLocation)({ path: e });
											(0, w.locationsAreEqual)(
												t,
												E(E({}, p), {}, { key: t.key })
											) || y();
										},
										to: t,
								  });
						});
					};
					function L(e, t) {
						var r = Object.keys(e);
						if (Object.getOwnPropertySymbols) {
							var n = Object.getOwnPropertySymbols(e);
							t &&
								(n = n.filter(function (t) {
									return Object.getOwnPropertyDescriptor(e, t).enumerable;
								})),
								r.push.apply(r, n);
						}
						return r;
					}
					function C(e) {
						for (var t = 1; t < arguments.length; t++) {
							var r = null != arguments[t] ? arguments[t] : {};
							t % 2
								? L(Object(r), !0).forEach(function (t) {
										$(e, t, r[t]);
								  })
								: Object.getOwnPropertyDescriptors
								? Object.defineProperties(
										e,
										Object.getOwnPropertyDescriptors(r)
								  )
								: L(Object(r)).forEach(function (t) {
										Object.defineProperty(
											e,
											t,
											Object.getOwnPropertyDescriptor(r, t)
										);
								  });
						}
						return e;
					}
					function $(e, t, r) {
						return (
							t in e
								? Object.defineProperty(e, t, {
										value: r,
										enumerable: !0,
										configurable: !0,
										writable: !0,
								  })
								: (e[t] = r),
							e
						);
					}
					const R = function (e) {
						return o().createElement(i.Consumer, null, function (t) {
							var r,
								n,
								a = e.location || t.location;
							return (
								o().Children.forEach(e.children, function (e) {
									if (null == n && o().isValidElement(e)) {
										r = e;
										var i = e.props.path || e.props.from;
										n = i
											? b(a.pathname, C(C({}, e.props), {}, { path: i }))
											: t.match;
									}
								}),
								n
									? o().cloneElement(r, { location: a, computedMatch: n })
									: null
							);
						});
					};
					function k(e, t) {
						return (
							(function (e) {
								if (Array.isArray(e)) return e;
							})(e) ||
							(function (e, t) {
								if (
									"undefined" == typeof Symbol ||
									!(Symbol.iterator in Object(e))
								)
									return;
								var r = [],
									n = !0,
									o = !1,
									a = void 0;
								try {
									for (
										var i, c = e[Symbol.iterator]();
										!(n = (i = c.next()).done) &&
										(r.push(i.value), !t || r.length !== t);
										n = !0
									);
								} catch (e) {
									(o = !0), (a = e);
								} finally {
									try {
										n || null == c.return || c.return();
									} finally {
										if (o) throw a;
									}
								}
								return r;
							})(e, t) ||
							(function (e, t) {
								if (!e) return;
								if ("string" == typeof e) return D(e, t);
								var r = Object.prototype.toString.call(e).slice(8, -1);
								"Object" === r && e.constructor && (r = e.constructor.name);
								if ("Map" === r || "Set" === r) return Array.from(e);
								if (
									"Arguments" === r ||
									/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
								)
									return D(e, t);
							})(e, t) ||
							(function () {
								throw new TypeError(
									"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
								);
							})()
						);
					}
					function D(e, t) {
						(null == t || t > e.length) && (t = e.length);
						for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
						return n;
					}
					const M = function (e) {
						var t = e.children,
							r = k(
								(0, n.useState)(function () {
									return (0, w.createBrowserHistory)();
								}),
								1
							)[0];
						return o().createElement(l, { history: r, children: t });
					};
					function H(e, t) {
						return (
							(function (e) {
								if (Array.isArray(e)) return e;
							})(e) ||
							(function (e, t) {
								if (
									"undefined" == typeof Symbol ||
									!(Symbol.iterator in Object(e))
								)
									return;
								var r = [],
									n = !0,
									o = !1,
									a = void 0;
								try {
									for (
										var i, c = e[Symbol.iterator]();
										!(n = (i = c.next()).done) &&
										(r.push(i.value), !t || r.length !== t);
										n = !0
									);
								} catch (e) {
									(o = !0), (a = e);
								} finally {
									try {
										n || null == c.return || c.return();
									} finally {
										if (o) throw a;
									}
								}
								return r;
							})(e, t) ||
							(function (e, t) {
								if (!e) return;
								if ("string" == typeof e) return B(e, t);
								var r = Object.prototype.toString.call(e).slice(8, -1);
								"Object" === r && e.constructor && (r = e.constructor.name);
								if ("Map" === r || "Set" === r) return Array.from(e);
								if (
									"Arguments" === r ||
									/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
								)
									return B(e, t);
							})(e, t) ||
							(function () {
								throw new TypeError(
									"Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
								);
							})()
						);
					}
					function B(e, t) {
						(null == t || t > e.length) && (t = e.length);
						for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
						return n;
					}
					const U = function (e) {
						var t = e.children,
							r = H(
								(0, n.useState)(function () {
									return (0, w.createHashHistory)();
								}),
								1
							)[0];
						return o().createElement(l, { history: r, children: t });
					};
					function I(e, t) {
						var r = Object.keys(e);
						if (Object.getOwnPropertySymbols) {
							var n = Object.getOwnPropertySymbols(e);
							t &&
								(n = n.filter(function (t) {
									return Object.getOwnPropertyDescriptor(e, t).enumerable;
								})),
								r.push.apply(r, n);
						}
						return r;
					}
					function V(e) {
						for (var t = 1; t < arguments.length; t++) {
							var r = null != arguments[t] ? arguments[t] : {};
							t % 2
								? I(Object(r), !0).forEach(function (t) {
										q(e, t, r[t]);
								  })
								: Object.getOwnPropertyDescriptors
								? Object.defineProperties(
										e,
										Object.getOwnPropertyDescriptors(r)
								  )
								: I(Object(r)).forEach(function (t) {
										Object.defineProperty(
											e,
											t,
											Object.getOwnPropertyDescriptor(r, t)
										);
								  });
						}
						return e;
					}
					function q(e, t, r) {
						return (
							t in e
								? Object.defineProperty(e, t, {
										value: r,
										enumerable: !0,
										configurable: !0,
										writable: !0,
								  })
								: (e[t] = r),
							e
						);
					}
					function N(e, t) {
						if (null == e) return {};
						var r,
							n,
							o = (function (e, t) {
								if (null == e) return {};
								var r,
									n,
									o = {},
									a = Object.keys(e);
								for (n = 0; n < a.length; n++)
									(r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
								return o;
							})(e, t);
						if (Object.getOwnPropertySymbols) {
							var a = Object.getOwnPropertySymbols(e);
							for (n = 0; n < a.length; n++)
								(r = a[n]),
									t.indexOf(r) >= 0 ||
										(Object.prototype.propertyIsEnumerable.call(e, r) &&
											(o[r] = e[r]));
						}
						return o;
					}
					var _ = function (e) {
							return e;
						},
						F = o().forwardRef;
					void 0 === F && (F = _);
					var K = function (e, t) {
						return "function" == typeof e ? e(t) : e;
					};
					var z = F(function (e, t) {
						var r = e.innerRef,
							n = e.navigate,
							a = e.onClick,
							i = N(e, ["innerRef", "navigate", "onClick"]),
							c = i.target,
							u = V(
								V({}, i),
								{},
								{
									onClick: function (e) {
										try {
											a && a(e);
										} catch (t) {
											throw (e.preventDefault(), t);
										}
										e.defaultPrevented ||
											0 !== e.button ||
											(c && "_self" !== c) ||
											(function (e) {
												return !!(
													e.metaKey ||
													e.altKey ||
													e.ctrlKey ||
													e.shiftKey
												);
											})(e) ||
											(e.preventDefault(), n());
									},
								}
							);
						return (u.ref = (_ !== F && t) || r), o().createElement("a", u);
					});
					const W = F(function (e, t) {
						var r = e.to,
							n = e.replace,
							a = void 0 !== n && n,
							c = e.innerRef,
							u = e.component,
							f = void 0 === u ? z : u,
							l = N(e, ["to", "replace", "innerRef", "component"]);
						return o().createElement(i.Consumer, null, function (e) {
							var n = e.history,
								i = e.location,
								u = (0, w.createLocation)({
									path: K(r, i),
									currentLocation: i,
								}),
								s = u ? (0, w.createPath)(u) : "",
								p = V(
									V({}, l),
									{},
									{
										href: s,
										navigate: function () {
											var t = K(r, e.location);
											(a ? n.replace : n.push)(t);
										},
									}
								);
							return (
								_ !== F ? (p.ref = t || c) : (p.innerRef = c),
								o().createElement(f, p)
							);
						});
					});
					var G = r(529),
						J = r.n(G);
					function Q() {
						return (Q =
							Object.assign ||
							function (e) {
								for (var t = 1; t < arguments.length; t++) {
									var r = arguments[t];
									for (var n in r)
										Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
								}
								return e;
							}).apply(this, arguments);
					}
					function X(e, t) {
						if (null == e) return {};
						var r,
							n,
							o = (function (e, t) {
								if (null == e) return {};
								var r,
									n,
									o = {},
									a = Object.keys(e);
								for (n = 0; n < a.length; n++)
									(r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
								return o;
							})(e, t);
						if (Object.getOwnPropertySymbols) {
							var a = Object.getOwnPropertySymbols(e);
							for (n = 0; n < a.length; n++)
								(r = a[n]),
									t.indexOf(r) >= 0 ||
										(Object.prototype.propertyIsEnumerable.call(e, r) &&
											(o[r] = e[r]));
						}
						return o;
					}
					const Y = function (e) {
						var t = "withRouter(".concat(e.displayName || e.name, ")"),
							r = function (t) {
								var r = t.wrappedComponentRef,
									n = X(t, ["wrappedComponentRef"]);
								return o().createElement(i.Consumer, null, function (t) {
									return o().createElement(e, Q({}, n, t, { ref: r }));
								});
							};
						return (r.displayName = t), (r.WrappedComponent = e), J()(r, e);
					};
				},
				391: (e, t, r) => {
					var n, o, a, i;
					function c(e, t) {
						var r = Object.keys(e);
						if (Object.getOwnPropertySymbols) {
							var n = Object.getOwnPropertySymbols(e);
							t &&
								(n = n.filter(function (t) {
									return Object.getOwnPropertyDescriptor(e, t).enumerable;
								})),
								r.push.apply(r, n);
						}
						return r;
					}
					function u(e) {
						for (var t = 1; t < arguments.length; t++) {
							var r = null != arguments[t] ? arguments[t] : {};
							t % 2
								? c(Object(r), !0).forEach(function (t) {
										f(e, t, r[t]);
								  })
								: Object.getOwnPropertyDescriptors
								? Object.defineProperties(
										e,
										Object.getOwnPropertyDescriptors(r)
								  )
								: c(Object(r)).forEach(function (t) {
										Object.defineProperty(
											e,
											t,
											Object.getOwnPropertyDescriptor(r, t)
										);
								  });
						}
						return e;
					}
					function f(e, t, r) {
						return (
							t in e
								? Object.defineProperty(e, t, {
										value: r,
										enumerable: !0,
										configurable: !0,
										writable: !0,
								  })
								: (e[t] = r),
							e
						);
					}
					function l(e) {
						return (l =
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
								  })(e);
					}
					(e = r.nmd(e)),
						self,
						(i = function () {
							return (function () {
								"use strict";
								var e = {
										"./config/index.js": function (e, t, r) {
											r.r(t),
												r.d(t, {
													BeforeUnloadEventType: function () {
														return n;
													},
													HashChangeEventType: function () {
														return o;
													},
													PopStateEventType: function () {
														return a;
													},
													actionType: function () {
														return i;
													},
													enumValueType: function () {
														return c;
													},
												});
											var n = "beforeunload",
												o = "hashchange",
												a = "popstate",
												i = { push: "PUSH", replace: "REPLACE", pop: "POP" },
												c = {
													object: "Object",
													array: "Array",
													basic: "Basic",
												};
										},
										"./node_modules/resolve-pathname/esm/resolve-pathname.js": function (
											e,
											t,
											r
										) {
											function n(e) {
												return "/" === e.charAt(0);
											}
											function o(e, t) {
												for (
													var r = t, n = r + 1, o = e.length;
													n < o;
													r += 1, n += 1
												)
													e[r] = e[n];
												e.pop();
											}
											r.r(t),
												r.d(t, {
													default: function () {
														return a;
													},
												});
											var a = function (e, t) {
												void 0 === t && (t = "");
												var r,
													a = (e && e.split("/")) || [],
													i = (t && t.split("/")) || [],
													c = e && n(e),
													u = t && n(t),
													f = c || u;
												if (
													(e && n(e)
														? (i = a)
														: a.length && (i.pop(), (i = i.concat(a))),
													!i.length)
												)
													return "/";
												if (i.length) {
													var l = i[i.length - 1];
													r = "." === l || ".." === l || "" === l;
												} else r = !1;
												for (var s = 0, p = i.length; p >= 0; p--) {
													var y = i[p];
													"." === y
														? o(i, p)
														: ".." === y
														? (o(i, p), s++)
														: s && (o(i, p), s--);
												}
												if (!f) for (; s--; s) i.unshift("..");
												!f || "" === i[0] || (i[0] && n(i[0])) || i.unshift("");
												var h = i.join("/");
												return r && "/" !== h.substr(-1) && (h += "/"), h;
											};
										},
										"./src/createBrowserHistory.js": function (e, t, r) {
											r.r(t),
												r.d(t, {
													default: function () {
														return i;
													},
												});
											var n = r("./utils/index.js"),
												o = r("./config/index.js"),
												a = r("./utils/LocationUtils.js");
											function i() {
												var e =
														arguments.length > 0 && void 0 !== arguments[0]
															? arguments[0]
															: {},
													t = e.window,
													r = void 0 === t ? document.defaultView : t,
													i = e.isShowBeforeUnload,
													c = void 0 !== i && i,
													u = e.basename
														? (0, n.stripTrailingSlash)(
																(0, n.addLeadingSlash)(e.basename)
														  )
														: "",
													f = r.history,
													l = (0, n.createEventList)({ removeCallback: d }),
													s = (0, n.createEventList)({
														isNeedResult: !0,
														removeCallback: d,
													}),
													p = o.actionType.pop,
													y = (0, a.createLocation)({
														path: r.location,
														basename: u,
														state: f.state,
													});
												function h(e) {
													var t = (0, a.createLocation)({
														path: r.location,
														basename: u,
														state: f.state,
													});
													(0, a.createPath)(t) !== (0, a.createPath)(y) &&
														(function (e) {
															if (v) (v = !1), console.log("blockedPopTx", v);
															else {
																var t = {
																	action: o.actionType.pop,
																	location: e,
																};
																if (s.length)
																	if (s.call(t)) console.log(y, e), (y = e);
																	else {
																		var r = y.state.index - e.state.index;
																		console.log("isNotOk", v, y, e), g(r);
																	}
																else b(t);
															}
														})(t);
												}
												function d() {
													r.removeEventListener(o.PopStateEventType, h);
												}
												r.addEventListener(o.PopStateEventType, h);
												var v = null;
												function m(e) {
													var t = e.action,
														r = e.location;
													return (
														!s.length || s.call({ action: t, location: r })
													);
												}
												function b(e) {
													(p = e.action),
														(y = e.location),
														l.call({ action: p, location: y });
												}
												function g(e) {
													f.go(e);
												}
												function O(e) {
													c && (e.preventDefault(), (e.returnValue = ""));
												}
												return {
													get action() {
														return p;
													},
													get location() {
														return y;
													},
													createHref: function (e) {
														if ("string" == typeof e)
															return (0, a.createPath)(
																(0, a.createLocation)({ path: e, basename: u })
															);
													},
													push: function (e, t) {
														var r = o.actionType.push,
															n = Object.assign({}, t, {
																index: y.state && y.state.index + 1,
															}),
															i = (0, a.createLocation)({
																path: e,
																state: n,
																basename: u,
															}),
															c = { action: r, location: i };
														if (m(c)) {
															try {
																var l =
																	(0, a.getBaseHref)() +
																	u +
																	(0, a.createPath)(i);
																f.pushState(n, "", l);
															} catch (e) {
																console.error(e);
															}
															b(c);
														}
													},
													replace: function (e, t) {
														var r = o.actionType.push,
															n = Object.assign({}, t, {
																index: y.state && y.state.index,
															}),
															i = (0, a.createLocation)({
																path: e,
																state: n,
																basename: u,
															}),
															c = { action: r, location: i };
														if (m(c)) {
															try {
																var l =
																	(0, a.getBaseHref)() +
																	u +
																	(0, a.createPath)(i);
																f.replaceState(n, "", l);
															} catch (e) {
																console.error(e);
															}
															b(c);
														}
													},
													go: g,
													back: function () {
														g(-1);
													},
													forward: function () {
														g(1);
													},
													listen: function (e) {
														return l.push(e);
													},
													block: function (e) {
														var t = s.push(e);
														return (
															1 === s.length &&
																r.addEventListener(o.BeforeUnloadEventType, O),
															function () {
																t(),
																	s.length ||
																		r.removeEventListener(
																			o.BeforeUnloadEventType,
																			O
																		);
															}
														);
													},
												};
											}
										},
										"./src/createHashHistory.js": function (e, t, r) {
											r.r(t),
												r.d(t, {
													default: function () {
														return i;
													},
												});
											var n = r("./utils/index.js"),
												o = r("./config/index.js"),
												a = r("./utils/LocationUtils.js");
											function i() {
												var e =
														arguments.length > 0 && void 0 !== arguments[0]
															? arguments[0]
															: {},
													t = e.window,
													r = void 0 === t ? document.defaultView : t,
													i = e.isShowBeforeUnload,
													c = void 0 !== i && i,
													u = e.basename
														? (0, n.stripTrailingSlash)(
																(0, n.addLeadingSlash)(e.basename)
														  )
														: "",
													f = r.history,
													l = (0, n.createEventList)({ removeCallback: d }),
													s = (0, n.createEventList)({
														isNeedResult: !0,
														removeCallback: d,
													}),
													p = o.actionType.pop,
													y = (0, a.createLocation)({
														path: r.location.hash.substr(1),
														basename: u,
														state: f.state,
													});
												function h(e) {
													var t = (0, a.createLocation)({
														path: r.location.hash.substr(1),
														basename: u,
														state: f.state,
													});
													(0, a.createPath)(t) !== (0, a.createPath)(y) &&
														(function (e) {
															var t = { action: o.actionType.pop, location: e };
															s.length
																? s.call(t)
																	? (y = e)
																	: b(y.state.index - e.state.index)
																: m(t);
														})(t);
												}
												function d() {
													r.removeEventListener(o.HashChangeEventType, h);
												}
												function v(e) {
													var t = e.action,
														r = e.location;
													return (
														!s.length || s.call({ action: t, location: r })
													);
												}
												function m(e) {
													(p = e.action),
														(y = e.location),
														l.call({ action: p, location: y });
												}
												function b(e) {
													f.go(e);
												}
												function g(e) {
													c && (e.preventDefault(), (e.returnValue = ""));
												}
												return (
													r.addEventListener(o.HashChangeEventType, h),
													{
														get action() {
															return p;
														},
														get location() {
															return y;
														},
														createHref: function (e) {
															if ("string" == typeof e)
																return (0, a.createPath)(
																	(0, a.createLocation)({
																		path: e,
																		basename: u,
																	})
																);
														},
														push: function (e, t) {
															var r = o.actionType.push,
																n = Object.assign({}, t, {
																	index: y.state && y.state.index + 1,
																}),
																i = (0, a.createLocation)({
																	path: e,
																	state: n,
																	basename: u,
																}),
																c = { action: r, location: i };
															if (v(c)) {
																try {
																	var l =
																		(0, a.getBaseHref)() +
																		"#" +
																		u +
																		(0, a.createPath)(i);
																	f.pushState(n, "", l);
																} catch (e) {
																	console.error(e);
																}
																m(c);
															}
														},
														replace: function (e, t) {
															var r = o.actionType.push,
																n = Object.assign({}, t, {
																	index: y.state && y.state.index,
																}),
																i = (0, a.createLocation)({
																	path: e,
																	state: n,
																	basename: u,
																}),
																c = { action: r, location: i };
															if (v(c)) {
																try {
																	var l =
																		(0, a.getBaseHref)() +
																		"#" +
																		u +
																		(0, a.createPath)(i);
																	f.replaceState(n, "", l);
																} catch (e) {
																	console.error(e);
																}
																m(c);
															}
														},
														go: b,
														back: function () {
															b(-1);
														},
														forward: function () {
															b(1);
														},
														listen: function (e) {
															return l.push(e);
														},
														block: function (e) {
															var t = s.push(e);
															return (
																1 === s.length &&
																	r.addEventListener(
																		o.BeforeUnloadEventType,
																		g
																	),
																function () {
																	t(),
																		s.length ||
																			r.removeEventListener(
																				o.BeforeUnloadEventType,
																				g
																			);
																}
															);
														},
													}
												);
											}
										},
										"./src/index.js": function (e, t, r) {
											r.r(t),
												r.d(t, {
													createHashHistory: function () {
														return n.default;
													},
													createBrowserHistory: function () {
														return o.default;
													},
													createLocation: function () {
														return a.createLocation;
													},
													createPath: function () {
														return a.createPath;
													},
													getBaseHref: function () {
														return a.getBaseHref;
													},
													hasBasename: function () {
														return a.hasBasename;
													},
													locationsAreEqual: function () {
														return a.locationsAreEqual;
													},
													parsePath: function () {
														return a.parsePath;
													},
													stripBasename: function () {
														return a.stripBasename;
													},
													addLeadingSlash: function () {
														return i.addLeadingSlash;
													},
													createEventList: function () {
														return i.createEventList;
													},
													getUniqueKey: function () {
														return i.getUniqueKey;
													},
													getValueType: function () {
														return i.getValueType;
													},
													isObject: function () {
														return i.isObject;
													},
													stripLeadingSlash: function () {
														return i.stripLeadingSlash;
													},
													stripTrailingSlash: function () {
														return i.stripTrailingSlash;
													},
													valueEqual: function () {
														return i.valueEqual;
													},
												});
											var n = r("./src/createHashHistory.js"),
												o = r("./src/createBrowserHistory.js"),
												a = r("./utils/LocationUtils.js"),
												i = r("./utils/index.js");
										},
										"./utils/LocationUtils.js": function (e, t, r) {
											r.r(t),
												r.d(t, {
													createLocation: function () {
														return o;
													},
													parsePath: function () {
														return a;
													},
													createPath: function () {
														return i;
													},
													hasBasename: function () {
														return c;
													},
													stripBasename: function () {
														return f;
													},
													getBaseHref: function () {
														return l;
													},
													locationsAreEqual: function () {
														return s;
													},
												});
											var n = r("./utils/index.js");
											function o() {
												var e =
														arguments.length > 0 && void 0 !== arguments[0]
															? arguments[0]
															: {},
													t = e.path,
													r = e.basename,
													o = e.key,
													i = void 0 === o ? (0, n.getUniqueKey)() : o,
													c = e.state,
													f = void 0 === c ? { index: 0 } : c,
													l = e.currentLocation;
												return u(u({}, a(t, r, l)), {}, { key: i, state: f });
											}
											function a(e, t, r) {
												var n = { pathname: "/", search: "", hash: "" };
												"string" == typeof e
													? (n.pathname = e || "/")
													: (n = Object.assign(n, u({}, e)));
												var o = n.pathname.indexOf("#");
												o > -1 &&
													((n.hash = n.pathname.substr(o)),
													(n.pathname = n.pathname.substr(0, o)));
												var a = n.pathname.indexOf("?");
												return (
													a > -1 &&
														((n.search = n.pathname.substr(a)),
														(n.pathname = n.pathname.substr(0, a))),
													(n.pathname = f(n.pathname, t)),
													r
														? n.pathname
															? "/" !== n.pathname.charAt(0) &&
															  (n.pathname = resolvePathname(
																	n.pathname,
																	r.pathname
															  ))
															: (n.pathname = r.pathname)
														: n.pathname || (n.pathname = "/"),
													{
														pathname: n.pathname,
														search: "?" === n.search ? "" : n.search,
														hash: "#" === n.hash ? "" : n.hash,
													}
												);
											}
											function i() {
												var e =
														arguments.length > 0 && void 0 !== arguments[0]
															? arguments[0]
															: {},
													t = e.pathname,
													r = e.search,
													n = e.hash,
													o = t || "/";
												return (
													r &&
														"?" !== r &&
														(o += "?" === r.charAt(0) ? r : "?".concat(r)),
													n &&
														"#" !== n &&
														(o += "#" === n.charAt(0) ? n : "#".concat(n)),
													o
												);
											}
											function c() {
												var e =
														arguments.length > 0 && void 0 !== arguments[0]
															? arguments[0]
															: "",
													t =
														arguments.length > 1 && void 0 !== arguments[1]
															? arguments[1]
															: "";
												return (
													0 === e.toLowerCase().indexOf(t.toLowerCase()) &&
													-1 !== "/?#".indexOf(e.charAt(t.length))
												);
											}
											function f() {
												var e =
														arguments.length > 0 && void 0 !== arguments[0]
															? arguments[0]
															: "",
													t =
														arguments.length > 1 && void 0 !== arguments[1]
															? arguments[1]
															: "";
												return c(e, t) ? e.substr(t.length) : e;
											}
											function l() {
												var e = document.querySelector("base"),
													t = "";
												if (e && e.getAttribute("href")) {
													var r = window.location.href,
														n = r.indexOf("#");
													t = -1 === n ? r : r.slice(0, n);
												}
												return t;
											}
											function s(e, t) {
												return (
													e.pathname === t.pathname &&
													e.search === t.search &&
													e.hash === t.hash &&
													e.key === t.key &&
													(0, n.valueEqual)(e.state, t.state)
												);
											}
											r(
												"./node_modules/resolve-pathname/esm/resolve-pathname.js"
											);
										},
										"./utils/index.js": function (e, t, r) {
											r.r(t),
												r.d(t, {
													createEventList: function () {
														return o;
													},
													getUniqueKey: function () {
														return a;
													},
													isObject: function () {
														return i;
													},
													getValueType: function () {
														return c;
													},
													valueEqual: function () {
														return u;
													},
													addLeadingSlash: function () {
														return f;
													},
													stripLeadingSlash: function () {
														return s;
													},
													stripTrailingSlash: function () {
														return p;
													},
												});
											var n = r("./config/index.js");
											function o() {
												var e =
														arguments.length > 0 && void 0 !== arguments[0]
															? arguments[0]
															: {},
													t = e.isNeedResult,
													r = void 0 !== t && t,
													n = e.removeCallback,
													o = [];
												return {
													get length() {
														return o.length;
													},
													push: function (e) {
														return (
															o.push(e),
															function () {
																(o = o.filter(function (t) {
																	return t !== e;
																})).length ||
																	(n && n());
															}
														);
													},
													call: function (e) {
														for (var t = !0, n = 0, a = o.length; n < a; n++) {
															var i = o[n];
															if (((t = i && i(e)), r && !t)) break;
														}
														return t;
													},
												};
											}
											function a() {
												for (
													var e =
															arguments.length > 0 && void 0 !== arguments[0]
																? arguments[0]
																: "",
														t = Date.now().toString(32) + e.toString(),
														r = [],
														n = 1,
														o = 0,
														a = 1,
														i = t.length;
													a <= i;
													a++
												)
													a === n &&
														((r[o] = String.fromCharCode(
															65 + Math.floor(22 * Math.random())
														)),
														o++,
														(n *= 2)),
														(r[o] = t[a - 1]),
														o++;
												return r.join("");
											}
											function i(e) {
												return (
													e &&
													"object" == l(e) &&
													"[object Object]" === toString.call(e)
												);
											}
											function c(e) {
												n.enumValueType.basic,
													i(e) && n.enumValueType.object,
													Array.isArray(e) && n.enumValueType.array;
											}
											function u(e, t) {
												var r = c(e);
												if (r !== c(t)) return !1;
												if (r === n.enumValueType.basic) return e === t;
												if (r === n.enumValueType.object)
													for (
														var o = Object.keys(e), a = 0, i = o.length;
														a < i;
														a++
													) {
														var f = o[a];
														if (!u(e[f], t[f])) return !1;
													}
												if (r === n.enumValueType.array) {
													if (e.length !== t.length) return falsei;
													for (var l = 0, s = e.length; l < s; l++)
														if (!u(e[l], t[l])) return !1;
												}
												return !1;
											}
											function f(e) {
												return "/" === e.charAt(0) ? e : "/" + e;
											}
											function s(e) {
												return "/" === e.charAt(0) ? e.substr(1) : e;
											}
											function p(e) {
												return "/" === e.charAt(e.length - 1)
													? e.slice(0, -1)
													: e;
											}
										},
									},
									t = {};
								function r(n) {
									if (t[n]) return t[n].exports;
									var o = (t[n] = { exports: {} });
									return e[n](o, o.exports, r), o.exports;
								}
								return (
									(r.d = function (e, t) {
										for (var n in t)
											r.o(t, n) &&
												!r.o(e, n) &&
												Object.defineProperty(e, n, {
													enumerable: !0,
													get: t[n],
												});
									}),
									(r.o = function (e, t) {
										return Object.prototype.hasOwnProperty.call(e, t);
									}),
									(r.r = function (e) {
										"undefined" != typeof Symbol &&
											Symbol.toStringTag &&
											Object.defineProperty(e, Symbol.toStringTag, {
												value: "Module",
											}),
											Object.defineProperty(e, "__esModule", { value: !0 });
									}),
									r("./src/index.js")
								);
							})();
						}),
						"object" == l(t) && "object" == l(e)
							? (e.exports = i())
							: ((o = []),
							  void 0 ===
									(a = "function" == typeof (n = i) ? n.apply(t, o) : n) ||
									(e.exports = a));
				},
				433: (e, t) => {
					"use strict";
					function r(e, t) {
						var r;
						if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
							if (
								Array.isArray(e) ||
								(r = (function (e, t) {
									if (!e) return;
									if ("string" == typeof e) return n(e, t);
									var r = Object.prototype.toString.call(e).slice(8, -1);
									"Object" === r && e.constructor && (r = e.constructor.name);
									if ("Map" === r || "Set" === r) return Array.from(e);
									if (
										"Arguments" === r ||
										/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
									)
										return n(e, t);
								})(e)) ||
								(t && e && "number" == typeof e.length)
							) {
								r && (e = r);
								var o = 0,
									a = function () {};
								return {
									s: a,
									n: function () {
										return o >= e.length
											? { done: !0 }
											: { done: !1, value: e[o++] };
									},
									e: function (e) {
										throw e;
									},
									f: a,
								};
							}
							throw new TypeError(
								"Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
							);
						}
						var i,
							c = !0,
							u = !1;
						return {
							s: function () {
								r = e[Symbol.iterator]();
							},
							n: function () {
								var e = r.next();
								return (c = e.done), e;
							},
							e: function (e) {
								(u = !0), (i = e);
							},
							f: function () {
								try {
									c || null == r.return || r.return();
								} finally {
									if (u) throw i;
								}
							},
						};
					}
					function n(e, t) {
						(null == t || t > e.length) && (t = e.length);
						for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
						return n;
					}
					function o(e) {
						throw new TypeError('"' + e + '" is read-only');
					}
					var a = "NAME",
						i = "CHAR",
						c = "OPEN",
						u = "CLOSE",
						f = "ESCAPED_CHAR",
						l = "MODIFIER",
						s = "PATTERN",
						p = "END";
					function y(e) {
						return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
					}
					function h(e) {
						for (var t = [], r = 0, n = e.length; r < n; ) {
							var o = e[r];
							if ("*" !== o && "+" !== o && "?" !== o)
								if ("\\" !== o)
									if ("{" !== o)
										if ("}" !== o)
											if (":" !== o)
												if ("(" !== o)
													t.push({ type: i, index: r, value: e[r++] });
												else {
													var y = r + 1,
														h = "",
														d = 1;
													if ("?" === e[y])
														throw new SyntaxError(
															'Pattern cannot start with "?" at '.concat(y)
														);
													for (; y < n; ) {
														var v = e[y];
														if ("\\" !== v) {
															if (")" === v) {
																if (0 === --d) {
																	y++;
																	break;
																}
															} else if ("(" === v && (d++, "?" !== e[y + 1]))
																throw new TypeError(
																	"Capturing groups are not allowed at ".concat(
																		y
																	)
																);
															h += e[y++];
														} else h += e[y++] + e[y++];
													}
													if (d)
														throw new TypeError(
															"Unbalanced pattern at ".concat(r)
														);
													if (!h)
														throw new TypeError(
															"Missing pattern at ".concat(r)
														);
													t.push({ type: s, index: r, value: h }), (r = y);
												}
											else {
												for (var m = "", b = r + 1; b < n; ) {
													var g = e.charCodeAt(b);
													if (
														!(
															(g >= 48 && g <= 57) ||
															(g >= 65 && g <= 90) ||
															(g >= 97 && g <= 122) ||
															95 === g
														)
													)
														break;
													m += e[b++];
												}
												if (!m)
													throw new TypeError(
														"Missing parameter name at ".concat(r)
													);
												t.push({ type: a, index: r, value: m }), (r = b);
											}
										else t.push({ type: u, index: r, value: o }), r++;
									else t.push({ type: c, index: r, value: o }), r++;
								else t.push({ type: f, index: r, value: o }), r++;
							else t.push({ type: l, index: r, value: o }), r++;
						}
						return t.push({ type: p, index: r, value: "" }), t;
					}
					function d(e) {
						return e && e.sensitive ? "" : "i";
					}
					function v(e, t, n) {
						return (function (e, t, n) {
							var o,
								a = n.strict,
								i = void 0 !== a && a,
								c = n.start,
								u = void 0 === c || c,
								f = n.end,
								l = void 0 === f || f,
								s = n.encode,
								p =
									void 0 === s
										? function (e) {
												return e;
										  }
										: s,
								h = "[".concat(y(n.endsWith || ""), "]|$"),
								v = "[".concat(y(n.delimiter || "/#?"), "]"),
								m = u ? "^" : "",
								b = r(e);
							try {
								for (b.s(); !(o = b.n()).done; ) {
									var g = o.value;
									if ("string" == typeof g) m += y(p(g));
									else {
										var O = y(p(g.prefix)),
											j = y(p(g.suffix));
										if (g.pattern)
											if ((t && t.push(g), O || j))
												if ("+" === g.modifier || "*" === g.modifier) {
													var S = "*" === g.modifier ? "?" : "";
													m += "(?:"
														.concat(O, "((?:")
														.concat(g.pattern, ")(?:")
														.concat(j)
														.concat(O, "(?:")
														.concat(g.pattern, "))*)")
														.concat(j, ")")
														.concat(S);
												} else
													m += "(?:"
														.concat(O, "(")
														.concat(g.pattern, ")")
														.concat(j, ")")
														.concat(g.modifier);
											else m += "(".concat(g.pattern, ")").concat(g.modifier);
										else m += "(?:".concat(O).concat(j, ")").concat(g.modifier);
									}
								}
							} catch (e) {
								b.e(e);
							} finally {
								b.f();
							}
							if (l)
								i || (m += "".concat(v, "?")),
									(m += n.endsWith ? "(?=".concat(h, ")") : "$");
							else {
								var w = e[e.length - 1],
									P =
										"string" == typeof w
											? v.indexOf(w[w.length - 1]) > -1
											: void 0 === w;
								i || (m += "(?:".concat(v, "(?=").concat(h, "))?")),
									P || (m += "(?=".concat(v, "|").concat(h, ")"));
							}
							return new RegExp(m, d(n));
						})(
							(function (e) {
								for (
									var t =
											arguments.length > 1 && void 0 !== arguments[1]
												? arguments[1]
												: {},
										r = h(e),
										n = t.prefixes,
										d = void 0 === n ? "./" : n,
										v = "[^".concat(y(t.delimiter || "/#?"), "]+?"),
										m = 0,
										b = r.length,
										g = [],
										O = "",
										j = 0,
										S = function (e) {
											var t = null;
											return (
												m < b && r[m].type === e && ((t = r[m].value), m++), t
											);
										},
										w = function (e) {
											var t = S(e);
											if (void 0 !== t) return t;
											var n = r[m],
												o = n.type,
												a = n.index;
											throw new TypeError(
												"Unexpected "
													.concat(o, " at ")
													.concat(a, ", expected ")
													.concat(e)
											);
										},
										P = function () {
											for (var e, t = ""; (e = S(i) || S(f)); ) t += e;
											return t;
										};
									m < b;

								) {
									var x = S(i),
										E = S(a),
										A = S(s);
									if (E || A) {
										var T = x || "";
										-1 === d.indexOf(T) && ((O += T), o("prefix"), (T = "")),
											O && (g.push(O), (O = "")),
											g.push({
												name: E || j++,
												prefix: T,
												suffix: "",
												pattern: A || v,
												modifier: S(l) || "",
											});
									} else {
										var L = x || S(f);
										if (L) O += L;
										else if (O) g.push(O), (O = "");
										else {
											if (S(c)) {
												var C = P(),
													$ = S(a) || "",
													R = S(s) || "",
													k = P();
												w(u),
													g.push({
														name: $ || (R ? j++ : ""),
														prefix: C,
														suffix: k,
														pattern: $ && !R ? v : R,
														modifier: S(l) || "",
													});
											} else w(p);
										}
									}
								}
								return g;
							})(e, n),
							t,
							n
						);
					}
					function m(e, t, r) {
						return e instanceof RegExp
							? (function (e, t) {
									if (!t) return e;
									for (
										var r = 0, n = /\((?:\?<(.*?)>)?(?!\?)/g.exec(e.source);
										n;

									)
										t.push({
											name: n[1] || r++,
											prefix: "",
											suffix: "",
											modifier: "",
											pattern: "",
										}),
											(n = groupsRegex.exec(e.source));
									return e;
							  })(e, t)
							: Array.isArray(e)
							? (function (e, t, r) {
									var n = e.map(function (e) {
										return m(e, t, r).source;
									});
									return new RegExp("(?:".concat(n.join("|"), ")"), d(r));
							  })(e, t, r)
							: v(e, t, r);
					}
					t.B = m;
				},
				698: (t) => {
					"use strict";
					t.exports = e;
				},
			},
			r = {};
		function n(e) {
			if (r[e]) return r[e].exports;
			var o = (r[e] = { id: e, loaded: !1, exports: {} });
			return t[e](o, o.exports, n), (o.loaded = !0), o.exports;
		}
		return (
			(n.n = (e) => {
				var t = e && e.__esModule ? () => e.default : () => e;
				return n.d(t, { a: t }), t;
			}),
			(n.d = (e, t) => {
				for (var r in t)
					n.o(t, r) &&
						!n.o(e, r) &&
						Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
			}),
			(n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
			(n.r = (e) => {
				"undefined" != typeof Symbol &&
					Symbol.toStringTag &&
					Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
					Object.defineProperty(e, "__esModule", { value: !0 });
			}),
			(n.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
			n(993)
		);
	})();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96eWxpYW5nUm91dGVyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly96eWxpYW5nUm91dGVyLy4uL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9kaXN0L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLmNqcy5qcyIsIndlYnBhY2s6Ly96eWxpYW5nUm91dGVyLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8venlsaWFuZ1JvdXRlci8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8venlsaWFuZ1JvdXRlci8uLi9zcmMvY3JlYXRlTmFtZUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8venlsaWFuZ1JvdXRlci8uLi9zcmMvUm91dGVyQ29udGV4dC5qcyIsIndlYnBhY2s6Ly96eWxpYW5nUm91dGVyLy4uL3NyYy9IaXN0b3J5Q29udGV4dC5qcyIsIndlYnBhY2s6Ly96eWxpYW5nUm91dGVyLy4uL3NyYy9Sb3V0ZXIuanMiLCJ3ZWJwYWNrOi8venlsaWFuZ1JvdXRlci8uLi9zcmMvbWF0Y2guanMiLCJ3ZWJwYWNrOi8venlsaWFuZ1JvdXRlci8uLi9zcmMvUm91dGUuanMiLCJ3ZWJwYWNrOi8venlsaWFuZ1JvdXRlci8uLi9zcmMvTGlmZWN5Y2xlLmpzIiwid2VicGFjazovL3p5bGlhbmdSb3V0ZXIvLi4vc3JjL1JlZGlyZWN0LmpzIiwid2VicGFjazovL3p5bGlhbmdSb3V0ZXIvLi4vc3JjL1N3aXRjaC5qcyIsIndlYnBhY2s6Ly96eWxpYW5nUm91dGVyLy4uL3NyYy9Ccm93c2VyUm91dGVyLmpzIiwid2VicGFjazovL3p5bGlhbmdSb3V0ZXIvLi4vc3JjL0hhc2hSb3V0ZXIuanMiLCJ3ZWJwYWNrOi8venlsaWFuZ1JvdXRlci8uLi9zcmMvTGluay5qcyIsIndlYnBhY2s6Ly96eWxpYW5nUm91dGVyLy4uL3NyYy9XaXRoUm91dGVyLmpzIiwid2VicGFjazovL3p5bGlhbmdSb3V0ZXIvenlsaWFuZ0hpc3Rvcnkvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3p5bGlhbmdSb3V0ZXIvenlsaWFuZ0hpc3RvcnkvY29uZmlnL2luZGV4LmpzIiwid2VicGFjazovL3p5bGlhbmdSb3V0ZXIvenlsaWFuZ0hpc3Rvcnkvbm9kZV9tb2R1bGVzL3Jlc29sdmUtcGF0aG5hbWUvZXNtL3Jlc29sdmUtcGF0aG5hbWUuanMiLCJ3ZWJwYWNrOi8venlsaWFuZ1JvdXRlci96eWxpYW5nSGlzdG9yeS9zcmMvY3JlYXRlQnJvd3Nlckhpc3RvcnkuanMiLCJ3ZWJwYWNrOi8venlsaWFuZ1JvdXRlci96eWxpYW5nSGlzdG9yeS9zcmMvY3JlYXRlSGFzaEhpc3RvcnkuanMiLCJ3ZWJwYWNrOi8venlsaWFuZ1JvdXRlci96eWxpYW5nSGlzdG9yeS91dGlscy9Mb2NhdGlvblV0aWxzLmpzIiwid2VicGFjazovL3p5bGlhbmdSb3V0ZXIvenlsaWFuZ0hpc3RvcnkvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8venlsaWFuZ1JvdXRlci96eWxpYW5nSGlzdG9yeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly96eWxpYW5nUm91dGVyL3p5bGlhbmdIaXN0b3J5L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly96eWxpYW5nUm91dGVyL3dlYnBhY2s6L3p5bGlhbmdIaXN0b3J5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly96eWxpYW5nUm91dGVyL3dlYnBhY2s6L3p5bGlhbmdIaXN0b3J5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8venlsaWFuZ1JvdXRlci93ZWJwYWNrOi96eWxpYW5nSGlzdG9yeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3p5bGlhbmdSb3V0ZXIvLi4vdXRpbHMvcGF0aC10by1yZWdleHAuanMiLCJ3ZWJwYWNrOi8venlsaWFuZ1JvdXRlci9leHRlcm5hbCB7XCJyb290XCI6XCJSZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwiLFwiY29tbW9uanNcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCJ9Iiwid2VicGFjazovL3p5bGlhbmdSb3V0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8venlsaWFuZ1JvdXRlci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8venlsaWFuZ1JvdXRlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly96eWxpYW5nUm91dGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly96eWxpYW5nUm91dGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8venlsaWFuZ1JvdXRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3p5bGlhbmdSb3V0ZXIvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciJdLCJuYW1lcyI6WyJyb290IiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJyZXF1aXJlIiwiZGVmaW5lIiwiYW1kIiwic2VsZiIsIl9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzY5OF9fIiwicmVhY3RJcyIsIlJFQUNUX1NUQVRJQ1MiLCJjaGlsZENvbnRleHRUeXBlcyIsImNvbnRleHRUeXBlIiwiY29udGV4dFR5cGVzIiwiZGVmYXVsdFByb3BzIiwiZGlzcGxheU5hbWUiLCJnZXREZWZhdWx0UHJvcHMiLCJnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IiLCJnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMiLCJtaXhpbnMiLCJwcm9wVHlwZXMiLCJ0eXBlIiwiS05PV05fU1RBVElDUyIsIm5hbWUiLCJsZW5ndGgiLCJwcm90b3R5cGUiLCJjYWxsZXIiLCJjYWxsZWUiLCJhcmd1bWVudHMiLCJhcml0eSIsIk1FTU9fU1RBVElDUyIsImNvbXBhcmUiLCJUWVBFX1NUQVRJQ1MiLCJnZXRTdGF0aWNzIiwiY29tcG9uZW50IiwiaXNNZW1vIiwiRm9yd2FyZFJlZiIsInJlbmRlciIsIk1lbW8iLCJkZWZpbmVQcm9wZXJ0eSIsIk9iamVjdCIsImdldE93blByb3BlcnR5TmFtZXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRQcm90b3R5cGVPZiIsIm9iamVjdFByb3RvdHlwZSIsImhvaXN0Tm9uUmVhY3RTdGF0aWNzIiwidGFyZ2V0Q29tcG9uZW50Iiwic291cmNlQ29tcG9uZW50IiwiYmxhY2tsaXN0IiwiaW5oZXJpdGVkQ29tcG9uZW50Iiwia2V5cyIsImNvbmNhdCIsInRhcmdldFN0YXRpY3MiLCJzb3VyY2VTdGF0aWNzIiwiaSIsImtleSIsImRlc2NyaXB0b3IiLCJlIiwiYiIsIlN5bWJvbCIsImMiLCJkIiwiZiIsImciLCJoIiwiayIsImwiLCJtIiwibiIsInAiLCJxIiwiciIsInQiLCJ2IiwidyIsIngiLCJ5IiwieiIsImEiLCJ1IiwiJCR0eXBlb2YiLCJBIiwiQXN5bmNNb2RlIiwiQ29uY3VycmVudE1vZGUiLCJDb250ZXh0Q29uc3VtZXIiLCJDb250ZXh0UHJvdmlkZXIiLCJFbGVtZW50IiwiRnJhZ21lbnQiLCJMYXp5IiwiUG9ydGFsIiwiUHJvZmlsZXIiLCJTdHJpY3RNb2RlIiwiU3VzcGVuc2UiLCJpc0FzeW5jTW9kZSIsImlzQ29uY3VycmVudE1vZGUiLCJpc0NvbnRleHRDb25zdW1lciIsImlzQ29udGV4dFByb3ZpZGVyIiwiaXNFbGVtZW50IiwiaXNGb3J3YXJkUmVmIiwiaXNGcmFnbWVudCIsImlzTGF6eSIsImlzUG9ydGFsIiwiaXNQcm9maWxlciIsImlzU3RyaWN0TW9kZSIsImlzU3VzcGVuc2UiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJ0eXBlT2YiLCJkZWZhdWx0VmFsdWUiLCJjb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVOYW1lQ29udGV4dCIsInByb3BzIiwicGF0aG5hbWUiLCJjaGlsZHJlbiIsImhpc3RvcnkiLCJzdGF0aWNDb250ZXh0IiwidXNlU3RhdGUiLCJsb2NhdGlvbiIsInNldExvY2F0aW9uIiwidXNlRWZmZWN0IiwidW5MaXN0ZW4iLCJsaXN0ZW4iLCJhY3Rpb24iLCJSb3V0ZXJDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIm1hdGNoIiwicGF0aCIsInVybCIsInBhcmFtcyIsImlzRXhhY3QiLCJIaXN0b3J5Q29udGV4dCIsImNhY2hlIiwiY2FjaGVQYXRoTGlzdCIsImNhY2hlQ291bnQiLCJjb21waWxlUGF0aCIsIm9wdGlvbnMiLCJyZWdleHAiLCJwYXRoVG9SZWdleHAiLCJyZXN1bHQiLCJwdXNoIiwicmVtb3ZlUGF0aCIsInNoaWZ0IiwibWF0Y2hQYXRoIiwibG9jYXRpb25QYXRoIiwiQXJyYXkiLCJpc0FycmF5IiwiZXhhY3QiLCJzdHJpY3QiLCJzZW5zaXRpdmUiLCJwYXRocyIsInJlZHVjZSIsIm1hdGNoZWQiLCJlbmQiLCJleGVjIiwidmFsdWVzIiwibWVtbyIsImluZGV4IiwiY29tcHV0ZWRNYXRjaCIsIkNvbnN1bWVyIiwibm93TG9jYXRpb24iLCJub3dNYXRjaCIsIm5ld1Byb3BzIiwiaXNFbXB0eUNoaWxkcmVuIiwiTGlmZWN5Y2xlIiwib25Nb3VudCIsIm9uVXBkYXRlIiwidG8iLCJjb25zb2xlIiwibG9nIiwiZnJvbSIsIm1ldGhvZCIsInJlcGxhY2UiLCJuZXdMb2NhdGlvbiIsImNyZWF0ZUxvY2F0aW9uIiwicmVkaXJlY3RGdW5jIiwidG9QYXRoIiwicHJldkxvY2F0aW9uIiwibG9jYXRpb25zQXJlRXF1YWwiLCJlbGVtZW50IiwiY2hpbGQiLCJjcmVhdGVIaXN0b3J5IiwiZm9yd2FyZFJlZlNoaW0iLCJDIiwiZm9yd2FyZFJlZiIsInJlc29sdmVUb0xvY2F0aW9uIiwiY3VycmVudExvY2F0aW9uIiwiTGlua0J1dHRvbiIsInJlZnMiLCJpbm5lclJlZiIsIm5hdmlnYXRlIiwib25DbGljayIsIm90aGVyc1Byb3BzIiwidGFyZ2V0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJidXR0b24iLCJtZXRhS2V5IiwiYWx0S2V5IiwiY3RybEtleSIsInNoaWZ0S2V5IiwiaXNNb2RpZmllZEV2ZW50IiwicmVmIiwiaHJlZiIsImNyZWF0ZVBhdGgiLCJDb21wb25lbnQiLCJ3cmFwcGVkQ29tcG9uZW50UmVmIiwicmVtYWluaW5nUHJvcHMiLCJXcmFwcGVkQ29tcG9uZW50IiwiaG9pc3RTdGF0aWNzIiwiQmVmb3JlVW5sb2FkRXZlbnRUeXBlIiwiSGFzaENoYW5nZUV2ZW50VHlwZSIsIlBvcFN0YXRlRXZlbnRUeXBlIiwiYWN0aW9uVHlwZSIsInBvcCIsImVudW1WYWx1ZVR5cGUiLCJvYmplY3QiLCJhcnJheSIsImJhc2ljIiwiaXNBYnNvbHV0ZSIsImNoYXJBdCIsInNwbGljZU9uZSIsImxpc3QiLCJoYXNUcmFpbGluZ1NsYXNoIiwidG9QYXJ0cyIsInNwbGl0IiwiZnJvbVBhcnRzIiwiaXNUb0FicyIsImlzRnJvbUFicyIsIm11c3RFbmRBYnMiLCJsYXN0IiwidXAiLCJwYXJ0IiwidW5zaGlmdCIsImpvaW4iLCJzdWJzdHIiLCJjcmVhdGVCcm93c2VySGlzdG9yeSIsIndpbmRvdyIsImRvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJpc1Nob3dCZWZvcmVVbmxvYWQiLCJiYXNlbmFtZSIsInN0cmlwVHJhaWxpbmdTbGFzaCIsImFkZExlYWRpbmdTbGFzaCIsImdsb2JhbEhpc3RvcnkiLCJsaXN0ZW5lcnMiLCJjcmVhdGVFdmVudExpc3QiLCJyZW1vdmVDYWxsYmFjayIsInJlbW92ZVBvcFN0YXRlRXZlbnRMaXN0ZW5GdW5jIiwiYmxvY2tlcnMiLCJpc05lZWRSZXN1bHQiLCJzdGF0ZSIsInBvcFN0YXRlRXZlbnRMaXN0ZW5GdW5jIiwibmV4dExvY2F0aW9uIiwiYmxvY2tlZFBvcFR4Iiwic2VuZERhdGEiLCJjYWxsIiwibGFzdEluZGV4IiwiZ28iLCJhcHBseVRvIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJhbGxvd1RvIiwicHJvbXB0QmVmb3JlVW5sb2FkIiwicmV0dXJuVmFsdWUiLCJjcmVhdGVIcmVmIiwibmV3QWN0aW9uIiwibmV3U3RhdGUiLCJhc3NpZ24iLCJnZXRCYXNlSHJlZiIsInB1c2hTdGF0ZSIsImVycm9yIiwicmVwbGFjZVN0YXRlIiwiYmFjayIsImZvcndhcmQiLCJsaXN0ZW5lciIsImJsb2NrIiwiYmxvY2tlciIsInVuYmxvY2siLCJjcmVhdGVIYXNoSGlzdG9yeSIsInJlbW92ZUhhc2hDaGFuZ2VFdmVudExpc3RlbkZ1bmMiLCJoYXNoIiwiaGFzaENoYW5nZUV2ZW50TGlzdGVuRnVuYyIsImdldFVuaXF1ZUtleSIsInBhcnNlUGF0aCIsImxvY2F0aW9uUmVzdWx0Iiwic2VhcmNoIiwiaGFzaEluZGV4IiwiaW5kZXhPZiIsInNlYXJjaEluZGV4Iiwic3RyaXBCYXNlbmFtZSIsInJlc29sdmVQYXRobmFtZSIsImhhc0Jhc2VuYW1lIiwicHJlZml4IiwidG9Mb3dlckNhc2UiLCJiYXNlIiwicXVlcnlTZWxlY3RvciIsImdldEF0dHJpYnV0ZSIsInNsaWNlIiwidmFsdWVFcXVhbCIsImZuIiwiZmlsdGVyIiwiaXRlbSIsImFyZyIsImxlbiIsImJhc2VEYXRhIiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwibmV3S2V5IiwidmVyaWZpY2F0aW9uRGF0YSIsIm5ld0tleUluZGV4IiwiaiIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImlzT2JqZWN0Iiwib2JqIiwiZ2V0VmFsdWVUeXBlIiwidmFsIiwidmFsdWVBIiwidmFsdWVCIiwidmFsdWVBVHlwZSIsImZhbHNlaSIsInN0cmlwTGVhZGluZ1NsYXNoIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImRlZmluaXRpb24iLCJvIiwiZW51bWVyYWJsZSIsImdldCIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsInRvU3RyaW5nVGFnIiwidG9rZW5zVHlwZSIsImVzY2FwZVN0cmluZyIsInN0ciIsImxleGVyIiwidG9rZW5zIiwic3RyTGVuZ3RoIiwiY2hhciIsInBhdHRlcm4iLCJjb3VudCIsIlN5bnRheEVycm9yIiwicGF0dGVybkNoYXIiLCJUeXBlRXJyb3IiLCJjb2RlIiwiY2hhckNvZGVBdCIsImZsYWdzIiwic3RyaW5nVG9SZWdleHAiLCJzdGFydCIsImVuY29kZSIsImVuZHNXaXRoIiwiZGVsaW1pdGVyIiwicm91dGUiLCJ0b2tlbiIsInN1ZmZpeCIsIm1vZGlmaWVyIiwibW9kIiwiZW5kVG9rZW4iLCJpc0VuZERlbGltaXRlZCIsInVuZGVmaW5lZCIsIlJlZ0V4cCIsInRva2Vuc1RvUmVnZXhwIiwicHJlZml4ZXMiLCJkZWZhdWx0UGF0dGVybiIsInRva2Vuc0xlbmd0aCIsInRyeUNvbnN1bWUiLCJtdXN0Q29uc3VtZSIsIm5leHRUeXBlIiwiY29uc3VtZVRleHQiLCJwYXJzZSIsImV4ZWNSZXN1bHQiLCJzb3VyY2UiLCJncm91cHNSZWdleCIsInJlZ2V4cFRvUmVnZXhwIiwicGFydHMiLCJtYXAiLCJhcnJheVRvUmVnZXhwIiwiaWQiLCJsb2FkZWQiLCJnZXR0ZXIiLCJfX2VzTW9kdWxlIiwibm1kIl0sIm1hcHBpbmdzIjoiO0NBQUEsU0FBMkNBLEVBQU1DLEdBQzFCLGlCQUFaQyxTQUEwQyxpQkFBWEMsT0FDeENBLE9BQU9ELFFBQVVELEVBQVFHLFFBQVEsVUFDUixtQkFBWEMsUUFBeUJBLE9BQU9DLElBQzlDRCxPQUFPLENBQUMsU0FBVUosR0FDUSxpQkFBWkMsUUFDZEEsUUFBdUIsY0FBSUQsRUFBUUcsUUFBUSxVQUUzQ0osRUFBb0IsY0FBSUMsRUFBUUQsRUFBWSxP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c291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wienlsaWFuZ1JvdXRlclwiXSA9IGZhY3RvcnkocmVxdWlyZShcInJlYWN0XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJ6eWxpYW5nUm91dGVyXCJdID0gZmFjdG9yeShyb290W1wiUmVhY3RcIl0pO1xufSkoc2VsZiwgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fNjk4X18pIHtcbnJldHVybiAiLCIndXNlIHN0cmljdCc7XG5cbnZhciByZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSwgWWFob28hIEluYy5cbiAqIENvcHlyaWdodHMgbGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgTGljZW5zZS4gU2VlIHRoZSBhY2NvbXBhbnlpbmcgTElDRU5TRSBmaWxlIGZvciB0ZXJtcy5cbiAqL1xudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gIGNoaWxkQ29udGV4dFR5cGVzOiB0cnVlLFxuICBjb250ZXh0VHlwZTogdHJ1ZSxcbiAgY29udGV4dFR5cGVzOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzOiB0cnVlLFxuICBtaXhpbnM6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBLTk9XTl9TVEFUSUNTID0ge1xuICBuYW1lOiB0cnVlLFxuICBsZW5ndGg6IHRydWUsXG4gIHByb3RvdHlwZTogdHJ1ZSxcbiAgY2FsbGVyOiB0cnVlLFxuICBjYWxsZWU6IHRydWUsXG4gIGFyZ3VtZW50czogdHJ1ZSxcbiAgYXJpdHk6IHRydWVcbn07XG52YXIgRk9SV0FSRF9SRUZfU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgcmVuZGVyOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWVcbn07XG52YXIgTUVNT19TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICBjb21wYXJlOiB0cnVlLFxuICBkZWZhdWx0UHJvcHM6IHRydWUsXG4gIGRpc3BsYXlOYW1lOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgVFlQRV9TVEFUSUNTID0ge307XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5Gb3J3YXJkUmVmXSA9IEZPUldBUkRfUkVGX1NUQVRJQ1M7XG5UWVBFX1NUQVRJQ1NbcmVhY3RJcy5NZW1vXSA9IE1FTU9fU1RBVElDUztcblxuZnVuY3Rpb24gZ2V0U3RhdGljcyhjb21wb25lbnQpIHtcbiAgLy8gUmVhY3QgdjE2LjExIGFuZCBiZWxvd1xuICBpZiAocmVhY3RJcy5pc01lbW8oY29tcG9uZW50KSkge1xuICAgIHJldHVybiBNRU1PX1NUQVRJQ1M7XG4gIH0gLy8gUmVhY3QgdjE2LjEyIGFuZCBhYm92ZVxuXG5cbiAgcmV0dXJuIFRZUEVfU1RBVElDU1tjb21wb25lbnRbJyQkdHlwZW9mJ11dIHx8IFJFQUNUX1NUQVRJQ1M7XG59XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIG9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5mdW5jdGlvbiBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIHNvdXJjZUNvbXBvbmVudCwgYmxhY2tsaXN0KSB7XG4gIGlmICh0eXBlb2Ygc291cmNlQ29tcG9uZW50ICE9PSAnc3RyaW5nJykge1xuICAgIC8vIGRvbid0IGhvaXN0IG92ZXIgc3RyaW5nIChodG1sKSBjb21wb25lbnRzXG4gICAgaWYgKG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgdmFyIGluaGVyaXRlZENvbXBvbmVudCA9IGdldFByb3RvdHlwZU9mKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBpbmhlcml0ZWRDb21wb25lbnQsIGJsYWNrbGlzdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICBrZXlzID0ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZUNvbXBvbmVudCkpO1xuICAgIH1cblxuICAgIHZhciB0YXJnZXRTdGF0aWNzID0gZ2V0U3RhdGljcyh0YXJnZXRDb21wb25lbnQpO1xuICAgIHZhciBzb3VyY2VTdGF0aWNzID0gZ2V0U3RhdGljcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKCFLTk9XTl9TVEFUSUNTW2tleV0gJiYgIShibGFja2xpc3QgJiYgYmxhY2tsaXN0W2tleV0pICYmICEoc291cmNlU3RhdGljcyAmJiBzb3VyY2VTdGF0aWNzW2tleV0pICYmICEodGFyZ2V0U3RhdGljcyAmJiB0YXJnZXRTdGF0aWNzW2tleV0pKSB7XG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZUNvbXBvbmVudCwga2V5KTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIEF2b2lkIGZhaWx1cmVzIGZyb20gcmVhZC1vbmx5IHByb3BlcnRpZXNcbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXRDb21wb25lbnQsIGtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldENvbXBvbmVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBob2lzdE5vblJlYWN0U3RhdGljcztcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7dmFyIGI9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvcixjPWI/U3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIik6NjAxMDMsZD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIik6NjAxMDYsZT1iP1N5bWJvbC5mb3IoXCJyZWFjdC5mcmFnbWVudFwiKTo2MDEwNyxmPWI/U3ltYm9sLmZvcihcInJlYWN0LnN0cmljdF9tb2RlXCIpOjYwMTA4LGc9Yj9TeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIik6NjAxMTQsaD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm92aWRlclwiKTo2MDEwOSxrPWI/U3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIik6NjAxMTAsbD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5hc3luY19tb2RlXCIpOjYwMTExLG09Yj9TeW1ib2wuZm9yKFwicmVhY3QuY29uY3VycmVudF9tb2RlXCIpOjYwMTExLG49Yj9TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIik6NjAxMTIscD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKTo2MDExMyxxPWI/XG5TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VfbGlzdFwiKTo2MDEyMCxyPWI/U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIik6NjAxMTUsdD1iP1N5bWJvbC5mb3IoXCJyZWFjdC5sYXp5XCIpOjYwMTE2LHY9Yj9TeW1ib2wuZm9yKFwicmVhY3QuYmxvY2tcIik6NjAxMjEsdz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5mdW5kYW1lbnRhbFwiKTo2MDExNyx4PWI/U3ltYm9sLmZvcihcInJlYWN0LnJlc3BvbmRlclwiKTo2MDExOCx5PWI/U3ltYm9sLmZvcihcInJlYWN0LnNjb3BlXCIpOjYwMTE5O1xuZnVuY3Rpb24geihhKXtpZihcIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hKXt2YXIgdT1hLiQkdHlwZW9mO3N3aXRjaCh1KXtjYXNlIGM6c3dpdGNoKGE9YS50eXBlLGEpe2Nhc2UgbDpjYXNlIG06Y2FzZSBlOmNhc2UgZzpjYXNlIGY6Y2FzZSBwOnJldHVybiBhO2RlZmF1bHQ6c3dpdGNoKGE9YSYmYS4kJHR5cGVvZixhKXtjYXNlIGs6Y2FzZSBuOmNhc2UgdDpjYXNlIHI6Y2FzZSBoOnJldHVybiBhO2RlZmF1bHQ6cmV0dXJuIHV9fWNhc2UgZDpyZXR1cm4gdX19fWZ1bmN0aW9uIEEoYSl7cmV0dXJuIHooYSk9PT1tfWV4cG9ydHMuQXN5bmNNb2RlPWw7ZXhwb3J0cy5Db25jdXJyZW50TW9kZT1tO2V4cG9ydHMuQ29udGV4dENvbnN1bWVyPWs7ZXhwb3J0cy5Db250ZXh0UHJvdmlkZXI9aDtleHBvcnRzLkVsZW1lbnQ9YztleHBvcnRzLkZvcndhcmRSZWY9bjtleHBvcnRzLkZyYWdtZW50PWU7ZXhwb3J0cy5MYXp5PXQ7ZXhwb3J0cy5NZW1vPXI7ZXhwb3J0cy5Qb3J0YWw9ZDtcbmV4cG9ydHMuUHJvZmlsZXI9ZztleHBvcnRzLlN0cmljdE1vZGU9ZjtleHBvcnRzLlN1c3BlbnNlPXA7ZXhwb3J0cy5pc0FzeW5jTW9kZT1mdW5jdGlvbihhKXtyZXR1cm4gQShhKXx8eihhKT09PWx9O2V4cG9ydHMuaXNDb25jdXJyZW50TW9kZT1BO2V4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT1rfTtleHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09aH07ZXhwb3J0cy5pc0VsZW1lbnQ9ZnVuY3Rpb24oYSl7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmYS4kJHR5cGVvZj09PWN9O2V4cG9ydHMuaXNGb3J3YXJkUmVmPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09bn07ZXhwb3J0cy5pc0ZyYWdtZW50PWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09ZX07ZXhwb3J0cy5pc0xhenk9ZnVuY3Rpb24oYSl7cmV0dXJuIHooYSk9PT10fTtcbmV4cG9ydHMuaXNNZW1vPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09cn07ZXhwb3J0cy5pc1BvcnRhbD1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PWR9O2V4cG9ydHMuaXNQcm9maWxlcj1mdW5jdGlvbihhKXtyZXR1cm4geihhKT09PWd9O2V4cG9ydHMuaXNTdHJpY3RNb2RlPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09Zn07ZXhwb3J0cy5pc1N1c3BlbnNlPWZ1bmN0aW9uKGEpe3JldHVybiB6KGEpPT09cH07XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZT1mdW5jdGlvbihhKXtyZXR1cm5cInN0cmluZ1wiPT09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhfHxhPT09ZXx8YT09PW18fGE9PT1nfHxhPT09Znx8YT09PXB8fGE9PT1xfHxcIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiYoYS4kJHR5cGVvZj09PXR8fGEuJCR0eXBlb2Y9PT1yfHxhLiQkdHlwZW9mPT09aHx8YS4kJHR5cGVvZj09PWt8fGEuJCR0eXBlb2Y9PT1ufHxhLiQkdHlwZW9mPT09d3x8YS4kJHR5cGVvZj09PXh8fGEuJCR0eXBlb2Y9PT15fHxhLiQkdHlwZW9mPT09dil9O2V4cG9ydHMudHlwZU9mPXo7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZU5hbWVDb250ZXh0ID0gKG5hbWUsIGRlZmF1bHRWYWx1ZSkgPT4ge1xyXG4gIGxldCBjb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUpO1xyXG4gIGNvbnRleHQuZGlzcGxheU5hbWUgPSBuYW1lO1xyXG4gIHJldHVybiBjb250ZXh0O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTmFtZUNvbnRleHQ7XHJcbiIsImltcG9ydCBjcmVhdGVOYW1lQ29udGV4dCBmcm9tIFwiLi9jcmVhdGVOYW1lQ29udGV4dFwiO1xyXG5jb25zdCBjb250ZXh0ID0gY3JlYXRlTmFtZUNvbnRleHQoXCJSb3V0ZXJcIik7XHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRleHQ7XHJcbiIsImltcG9ydCBjcmVhdGVOYW1lQ29udGV4dCBmcm9tIFwiLi9jcmVhdGVOYW1lQ29udGV4dFwiO1xyXG5jb25zdCBjb250ZXh0ID0gY3JlYXRlTmFtZUNvbnRleHQoXCJSb3V0ZXItSGlzdG9yeVwiKTtcclxuZXhwb3J0IGRlZmF1bHQgY29udGV4dDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyQ29udGV4dCBmcm9tIFwiLi9Sb3V0ZXJDb250ZXh0XCI7XHJcbmltcG9ydCBIaXN0b3J5Q29udGV4dCBmcm9tIFwiLi9IaXN0b3J5Q29udGV4dFwiO1xyXG5mdW5jdGlvbiBjb21wdXRlUm9vdE1hdGNoKHBhdGhuYW1lKSB7XHJcbiAgcmV0dXJuIHsgcGF0aDogXCIvXCIsIHVybDogXCIvXCIsIHBhcmFtczoge30sIGlzRXhhY3Q6IHBhdGhuYW1lID09PSBcIi9cIiB9O1xyXG59XHJcbmZ1bmN0aW9uIFJvdXRlcihwcm9wcykge1xyXG4gIGNvbnN0IHtcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgaGlzdG9yeSxcclxuICAgIHN0YXRpY0NvbnRleHQgPSBmYWxzZSwgLy8g5piv5ZCm5piv5pyN5Yqh56uv5riy5p+T55qE5qCH5b+XXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUoaGlzdG9yeS5sb2NhdGlvbik7IC8vIGxvY2F0aW9uXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRMb2NhdGlvbihoaXN0b3J5LmxvY2F0aW9uKTtcclxuICAgIGxldCB1bkxpc3RlbiA9IG51bGw7XHJcbiAgICAvLyDkuI3mmK/mnI3liqHnq6/muLLmn5PnmoTmg4XlhrXkuIvmiY1cclxuICAgIGlmICghc3RhdGljQ29udGV4dCkge1xyXG4gICAgICB1bkxpc3RlbiA9IGhpc3RvcnkubGlzdGVuKCh7IGFjdGlvbiwgbG9jYXRpb24gfSkgPT4ge1xyXG4gICAgICAgIHNldExvY2F0aW9uKGxvY2F0aW9uKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgaWYgKHVuTGlzdGVuKSB7XHJcbiAgICAgICAgdW5MaXN0ZW4oKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9LCBbaGlzdG9yeV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJvdXRlckNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBoaXN0b3J5LFxyXG4gICAgICAgIGxvY2F0aW9uLFxyXG4gICAgICAgIG1hdGNoOiBjb21wdXRlUm9vdE1hdGNoKGxvY2F0aW9uLnBhdGhuYW1lKSxcclxuICAgICAgICBzdGF0aWNDb250ZXh0LFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8SGlzdG9yeUNvbnRleHQuUHJvdmlkZXIgY2hpbGRyZW49e2NoaWxkcmVufSB2YWx1ZT17aGlzdG9yeX0gLz5cclxuICAgIDwvUm91dGVyQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXI7XHJcbiIsImltcG9ydCB7IHBhdGhUb1JlZ2V4cCB9IGZyb20gXCIuLi91dGlscy9wYXRoLXRvLXJlZ2V4cFwiO1xyXG4vKipcclxuICog57yT5a2Y5Yik5pat6L+H55qE5pWw5o2uXHJcbiAqL1xyXG5sZXQgY2FjaGUgPSB7fTtcclxubGV0IGNhY2hlUGF0aExpc3QgPSBbXTtcclxuY29uc3QgY2FjaGVMaW1pdCA9IDEwMDAwO1xyXG5sZXQgY2FjaGVDb3VudCA9IDA7XHJcbi8qKlxyXG4gKiDmr5TovoPliKTmlq1wYXRoXHJcbiAqIEBwYXJhbSB7Kn0gcGF0aFxyXG4gKiBAcGFyYW0geyp9IG9wdGlvbnNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlUGF0aChwYXRoLCBvcHRpb25zID0ge30pIHtcclxuXHRpZiAoY2FjaGVbcGF0aF0pIHtcclxuXHRcdHJldHVybiBjYWNoZVtwYXRoXTtcclxuXHR9XHJcblx0bGV0IGtleXMgPSBbXTtcclxuXHRjb25zdCByZWdleHAgPSBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XHJcblx0Y29uc3QgcmVzdWx0ID0geyByZWdleHAsIGtleXMgfTtcclxuXHJcblx0aWYgKGNhY2hlQ291bnQgPCBjYWNoZUxpbWl0KSB7XHJcblx0XHRjYWNoZVtwYXRoXSA9IHJlc3VsdDtcclxuXHRcdGNhY2hlUGF0aExpc3QucHVzaChwYXRoKTtcclxuXHRcdGNhY2hlQ291bnQrKztcclxuXHR9IGVsc2Uge1xyXG5cdFx0Ly8g6L+Z6YeM6YeH55So5pON5L2c57O757uf55qE57yT5a2Y566X5rOV77yM6ICD6JmR5Yiw5pW05L2T55qE5aSN5p2C5bqm77yM5oSf6KeJ6L+Y5piv5L2/55So5YWI6L+b5YWI5Ye6566X5rOVKEZJRk8p5a655piT5LiA54K577yM5Y+v5Lul6ICD6JmR5YW25LuW57yT5a2Y566X5rOVXHJcblx0XHRjb25zdCByZW1vdmVQYXRoID0gY2FjaGVQYXRoTGlzdC5zaGlmdCgpO1xyXG5cdFx0ZGVsZXRlIGNhY2hlW3JlbW92ZVBhdGhdO1xyXG5cdFx0Y2FjaGVbcGF0aF0gPSByZXN1bHQ7XHJcblx0XHRjYWNoZVBhdGhMaXN0LnB1c2gocGF0aCk7XHJcblx0fVxyXG5cdHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDliKTmlq3mmK/lkKbnrKblkIjot6/nlLHmnaHku7ZcclxuICogQHBhcmFtIHsqfSBwYXRoXHJcbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hQYXRoKGxvY2F0aW9uUGF0aCwgb3B0aW9ucyA9IHt9KSB7XHJcblx0aWYgKHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiIHx8IEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcclxuXHRcdG9wdGlvbnMgPSB7IHBhdGg6IG9wdGlvbnMgfTtcclxuXHR9XHJcblx0Y29uc3Qge1xyXG5cdFx0cGF0aCwgLy8g5Zyw5Z2AXHJcblx0XHRleGFjdCA9IGZhbHNlLCAvLyDnlKjkuo7ljLnphY3nu5PlsL5cclxuXHRcdHN0cmljdCA9IGZhbHNlLCAvLyDor6bnu4bljLnphY1cclxuXHRcdHNlbnNpdGl2ZSA9IGZhbHNlLCAvLyDlpKflsI/lhpnmlY/mhJ8sdHJ1ZSDkuI3ljLrliIYgZmFsc2XljLrliIZcclxuXHR9ID0gb3B0aW9ucztcclxuXHJcblx0Ly8g6YG/5YWNb3B0aW9ucyDmmK8g5pWw57uE55qE5oOF5Ya1XHJcblx0Y29uc3QgcGF0aHMgPSBbXS5jb25jYXQocGF0aCk7XHJcblx0Ly8g5Y+q5aSE55CG5pWw57uE55qE56ys5LiA5Liq77yM5YW25LuWXHJcblx0cmV0dXJuIHBhdGhzLnJlZHVjZSgobWF0Y2hlZCwgcGF0aCkgPT4ge1xyXG5cdFx0aWYgKCFwYXRoICYmIHBhdGggIT09IFwiXCIpIHJldHVybiBudWxsO1xyXG5cdFx0aWYgKG1hdGNoZWQpIHJldHVybiBtYXRjaGVkO1xyXG5cdFx0Y29uc3Qgb3B0aW9ucyA9IHtcclxuXHRcdFx0ZW5kOiBleGFjdCxcclxuXHRcdFx0c3RyaWN0LFxyXG5cdFx0XHRzZW5zaXRpdmUsXHJcblx0XHR9O1xyXG5cdFx0Ly8g55Sf5oiQcGF0aOeahOato+WImeihqOi+vuW8j1xyXG5cdFx0Y29uc3QgeyByZWdleHAsIGtleXMgfSA9IGNvbXBpbGVQYXRoKHBhdGgsIG9wdGlvbnMpO1xyXG5cclxuXHRcdC8vIOWIpOaWreaYr+WQpuWMuemFjei3r+eUseWTplxyXG5cdFx0Y29uc3QgbWF0Y2ggPSByZWdleHAuZXhlYyhsb2NhdGlvblBhdGgpO1xyXG5cclxuXHRcdGlmICghbWF0Y2gpIHJldHVybiBudWxsO1xyXG5cdFx0Ly8g56ys5LiA5Liq5YC85piv5Yy56YWN5Yiw55qEdXJs5YaF5a6577yM5ZCO6Z2i55qE5a+55bqUOnRlc3Qg6L+Z56eN5Yqo5oCB6Lev55Sx55qE5YC8XHJcblx0XHRjb25zdCBbdXJsLCAuLi52YWx1ZXNdID0gbWF0Y2g7XHJcblx0XHRjb25zdCBpc0V4YWN0ID0gbG9jYXRpb25QYXRoID09PSB1cmw7XHJcblxyXG5cdFx0Ly8g5LiN5Yy56YWN55qE5pe25YCZ6L+U5ZuebnVsbFxyXG5cdFx0aWYgKGV4YWN0ICYmICFpc0V4YWN0KSByZXR1cm4gbnVsbDtcclxuXHRcdC8vIFRPRE8g6L+Z6YeM6ZyA6KaB6ICD6JmR5LiA5Liq6Zeu6aKY77yM5aaC5p6c5a2Y5Zyo5Lik5Liq6YO96IO95Yy56YWN5Yiw55qE6Lev55Sx55qE5pe25YCZ77yM5LyY5YWI57qn5piv5oCO5LmI5qC355qEXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRwYXRoLCAvLyB0aGUgcGF0aCB1c2VkIHRvIG1hdGNoXHJcblx0XHRcdHVybDogcGF0aCA9PT0gXCIvXCIgJiYgdXJsID09PSBcIlwiID8gXCIvXCIgOiB1cmwsIC8vIHRoZSBtYXRjaGVkIHBvcnRpb24gb2YgdGhlIFVSTFxyXG5cdFx0XHRpc0V4YWN0LCAvLyB3aGV0aGVyIG9yIG5vdCB3ZSBtYXRjaGVkIGV4YWN0bHlcclxuXHRcdFx0cGFyYW1zOiBrZXlzLnJlZHVjZSgobWVtbywga2V5LCBpbmRleCkgPT4ge1xyXG5cdFx0XHRcdC8vIOeUn+aIkHBhcmFtc+WvueixoVxyXG5cdFx0XHRcdG1lbW9ba2V5Lm5hbWVdID0gdmFsdWVzW2luZGV4XTtcclxuXHRcdFx0XHRyZXR1cm4gbWVtbztcclxuXHRcdFx0fSwge30pLFxyXG5cdFx0fTtcclxuXHR9LCBudWxsKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXJDb250ZXh0IGZyb20gXCIuL1JvdXRlckNvbnRleHRcIjtcclxuaW1wb3J0IHsgbWF0Y2hQYXRoIH0gZnJvbSBcIi4vbWF0Y2hcIjtcclxuXHJcbi8vIOWIpOaWreaYr+WQpuaYr+epuueahOWtkOWIl+ihqFxyXG5mdW5jdGlvbiBpc0VtcHR5Q2hpbGRyZW4oY2hpbGRyZW4pIHtcclxuICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pID09PSAwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBSb3V0ZShwcm9wcykge1xyXG4gIGNvbnN0IHsgcGF0aCwgY29tcG9uZW50LCBjaGlsZHJlbiwgcmVuZGVyLCBjb21wdXRlZE1hdGNoIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPFJvdXRlckNvbnRleHQuQ29uc3VtZXI+XHJcbiAgICAgIHsoY29udGV4dCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgaGlzdG9yeSwgbG9jYXRpb24sIG1hdGNoIH0gPSBjb250ZXh0O1xyXG4gICAgICAgIGNvbnN0IG5vd0xvY2F0aW9uID0gcHJvcHMubG9jYXRpb24gfHwgbG9jYXRpb247XHJcbiAgICAgICAgLy8gbm93TWF0Y2gg5piv5qC55o2uIHBhdGgg55Sf5oiQ55qE5q2j5YiZ6KGo6L6+5piv5Yy56YWN55qE77yMY29tcHV0ZWRNYXRjaCDmmK/nlKjlnKhTd2l0Y2jkuK3nmoTvvIzov5nkuKrml7blgJnlt7Lnu4/ljLnphY3ov4fkuobvvIzmiYDku6XlsLHkuI3pnIDopoHlho3otbBtYXRjaFBhdGjnmoTpgLvovpHkuoZcclxuICAgICAgICBjb25zdCBub3dNYXRjaCA9IGNvbXB1dGVkTWF0Y2hcclxuICAgICAgICAgID8gY29tcHV0ZWRNYXRjaFxyXG4gICAgICAgICAgOiBwYXRoXHJcbiAgICAgICAgICA/IG1hdGNoUGF0aChub3dMb2NhdGlvbi5wYXRobmFtZSwgcHJvcHMpXHJcbiAgICAgICAgICA6IG1hdGNoO1xyXG4gICAgICAgIGNvbnN0IG5ld1Byb3BzID0geyAuLi5jb250ZXh0LCBub3dMb2NhdGlvbiwgbm93TWF0Y2ggfTtcclxuXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pICYmIGlzRW1wdHlDaGlsZHJlbihjaGlsZHJlbikpIHtcclxuICAgICAgICAgIGNoaWxkcmVuID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcblx0XHQgKiDliKTmlq3pgLvovpEgXHJcblx0XHQgKiAx44CB5Yik5patIG5vd01hdGNoIOaYr+WQpuWtmOWcqFxyXG5cdFx0ICogMuOAgW5vd01hdGNoIOWtmOWcqCDliJkg5Yik5patIGNoaWxkcmVuIOaYr+WQpuWtmOWcqFxyXG5cdFx0ICogXHRcdDIuMeOAgWNoaWxkcmVuIOWtmOWcqCDliKTmlq0gY2hpbGRyZW4g5piv5ZCm5pivIGZ1bmN0aW9uXHJcblx0XHQgKiBcdFx0XHQyLjEuMeOAgeaYr2Z1bmN0aW9uIOWImSBjaGlsZHJlbihuZXdQcm9wcylcclxuXHRcdCAqIFx0XHRcdDIuMS4y44CB5LiN5pivIGZ1bmN0aW9uIOWImSBjaGlsZHJlblxyXG5cdFx0ICpcdFx0Mi4y44CBY2hpbGRyZW4g5LiN5a2Y5ZyoIOWIpOaWrSBjb21wb25lbnQg5piv5ZCm5a2Y5ZyoXHJcblx0XHRcdFx0XHQgMi4yLjHjgIFjb21wb25lbnQg5a2Y5ZyoIOWImSBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgbmV3UHJvcHMpXHJcblx0XHRcdFx0XHQgMi4yLjLjgIFjb21wb25lbnQg5LiN5a2Y5ZyoIOWImSDliKTmlq0gcmVuZGVyIOaYr+WQpuWtmOWcqFxyXG5cdFx0XHRcdFx0XHQgMi4yLjIuMeOAgSByZW5kZXIg5a2Y5ZyoIOWImSByZW5kZXIobmV3UHJvcHMpXHJcblx0XHRcdFx0XHRcdCAyLjIuMi4y44CBIHJlbmRlciDkuI3lrZjlnKgg5YiZIG51bGxcdFx0XHQgXHJcblx0XHQgKiAz44CBbm93TWF0Y2gg5LiN5a2Y5ZyoIOWIpOaWrSBjaGlsZHJlbiDmmK/lkKbmmK8gZnVuY3Rpb25cclxuXHRcdCBcdFx0My4x44CB5pivZnVuY3Rpb24g5YiZIGNoaWxkcmVuKG5ld1Byb3BzKVxyXG5cdFx0XHRcdDMuMuOAgeS4jeaYryBmdW5jdGlvbiDliJkgY2hpbGRyZW5cclxuXHRcdCAqL1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8Um91dGVyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17bmV3UHJvcHN9PlxyXG4gICAgICAgICAgICB7bm93TWF0Y2hcclxuICAgICAgICAgICAgICA/IGNoaWxkcmVuXHJcbiAgICAgICAgICAgICAgICA/IHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJmdW5jdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgID8gY2hpbGRyZW4obmV3UHJvcHMpXHJcbiAgICAgICAgICAgICAgICAgIDogY2hpbGRyZW5cclxuICAgICAgICAgICAgICAgIDogY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBuZXdQcm9wcylcclxuICAgICAgICAgICAgICAgIDogcmVuZGVyXHJcbiAgICAgICAgICAgICAgICA/IHJlbmRlcihuZXdQcm9wcylcclxuICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgIDogdHlwZW9mIGNoaWxkcmVuID09PSBcImZ1bmN0aW9uXCJcclxuICAgICAgICAgICAgICA/IGNoaWxkcmVuKG5ld1Byb3BzKVxyXG4gICAgICAgICAgICAgIDogY2hpbGRyZW59XHJcbiAgICAgICAgICA8L1JvdXRlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgKTtcclxuICAgICAgfX1cclxuICAgIDwvUm91dGVyQ29udGV4dC5Db25zdW1lcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb3V0ZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaWZlY3ljbGUocHJvcHMpIHtcclxuICBjb25zdCB7IG9uTW91bnQsIG9uVXBkYXRlLCB0byB9ID0gcHJvcHM7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIG9uTW91bnQgJiYgb25Nb3VudCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKDIyMjIyMjIyMjIpO1xyXG4gICAgb25VcGRhdGUocHJvcHMpO1xyXG4gIH0sIFt0b10pO1xyXG4gIHJldHVybiBudWxsO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlckNvbnRleHQgZnJvbSBcIi4vUm91dGVyQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBjcmVhdGVMb2NhdGlvbiwgbG9jYXRpb25zQXJlRXF1YWwgfSBmcm9tIFwiLi4vdXRpbHMvaGlzdG9yeS5taW4uanNcIjtcclxuaW1wb3J0IExpZmVjeWNsZSBmcm9tIFwiLi9MaWZlY3ljbGVcIjtcclxuaW1wb3J0IHsgbWF0Y2hQYXRoIH0gZnJvbSBcIi4vbWF0Y2hcIjtcclxuXHJcbmZ1bmN0aW9uIFJlZGlyZWN0KHByb3BzKSB7XHJcbiAgY29uc3QgeyBjb21wdXRlZE1hdGNoLCB0bywgcHVzaCA9IGZhbHNlLCBmcm9tIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPFJvdXRlckNvbnRleHQuQ29uc3VtZXI+XHJcbiAgICAgIHsoY29udGV4dCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiUmVkaXJlY3RcIik7XHJcbiAgICAgICAgY29uc3QgeyBoaXN0b3J5LCBzdGF0aWNDb250ZXh0LCBsb2NhdGlvbiB9ID0gY29udGV4dDtcclxuICAgICAgICAvLyDlpoLmnpzmmK9wdXNo77yM5bCx55SoaGlzdG9yeS5wdXNoIOWQpuWImeS9v+eUqCBoaXN0b3J5LnJlcGxhY2VcclxuICAgICAgICBjb25zdCBtZXRob2QgPSBwdXNoID8gaGlzdG9yeS5wdXNoIDogaGlzdG9yeS5yZXBsYWNlO1xyXG4gICAgICAgIGNvbnN0IG5vd0xvY2F0aW9uID0gcHJvcHMubG9jYXRpb24gfHwgbG9jYXRpb247XHJcbiAgICAgICAgLy8g5qC55o2uZnJvbSDljLnphY1cclxuICAgICAgICBjb25zdCBub3dNYXRjaCA9IGZyb21cclxuICAgICAgICAgID8gbWF0Y2hQYXRoKG5vd0xvY2F0aW9uLnBhdGhuYW1lLCB7XHJcbiAgICAgICAgICAgICAgcGF0aDogZnJvbSxcclxuICAgICAgICAgICAgICAuLi5wcm9wcyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIDogbnVsbDtcclxuICAgICAgICAvLyDmoLnmja4g6Lez6L2s55qE5Zyw5Z2A55Sf5oiQbG9jYXRpb25cclxuICAgICAgICBjb25zdCBuZXdMb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKHtcclxuICAgICAgICAgIHBhdGg6IHRvLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDph43lrprlkJHmlrnms5VcclxuICAgICAgICAgKi9cclxuICAgICAgICBjb25zdCByZWRpcmVjdEZ1bmMgPSAoKSA9PiB7XHJcbiAgICAgICAgICAvLyBmcm9tIOWtmOWcqOeahOaXtuWAme+8jOimgeagueaNrmZyb23mmK/lkKbnrKblkIjlho3lgZrot7PovaxcclxuICAgICAgICAgIGlmIChmcm9tKSB7XHJcbiAgICAgICAgICAgIGlmIChub3dNYXRjaCkge1xyXG4gICAgICAgICAgICAgIG1ldGhvZChuZXdMb2NhdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBtZXRob2QobmV3TG9jYXRpb24pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChzdGF0aWNDb250ZXh0KSB7XHJcbiAgICAgICAgICByZWRpcmVjdEZ1bmMoKTtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxMaWZlY3ljbGVcclxuICAgICAgICAgICAgb25Nb3VudD17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJlZGlyZWN0RnVuYygpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvblVwZGF0ZT17KHRvUGF0aCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHByZXZMb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKHtcclxuICAgICAgICAgICAgICAgIHBhdGg6IHRvUGF0aCxcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAhbG9jYXRpb25zQXJlRXF1YWwocHJldkxvY2F0aW9uLCB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLm5ld0xvY2F0aW9uLFxyXG4gICAgICAgICAgICAgICAgICBrZXk6IHByZXZMb2NhdGlvbi5rZXksXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmVkaXJlY3RGdW5jKCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB0bz17dG99XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIH19XHJcbiAgICA8L1JvdXRlckNvbnRleHQuQ29uc3VtZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVkaXJlY3Q7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlckNvbnRleHQgZnJvbSBcIi4vUm91dGVyQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBtYXRjaFBhdGggfSBmcm9tIFwiLi9tYXRjaFwiO1xyXG5mdW5jdGlvbiBTd2l0Y2gocHJvcHMpIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PFJvdXRlckNvbnRleHQuQ29uc3VtZXI+XHJcblx0XHRcdHsoY29udGV4dCkgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGxvY2F0aW9uID0gcHJvcHMubG9jYXRpb24gfHwgY29udGV4dC5sb2NhdGlvbjtcclxuXHJcblx0XHRcdFx0bGV0IGVsZW1lbnQsIG1hdGNoO1xyXG5cclxuXHRcdFx0XHRSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKHByb3BzLmNoaWxkcmVuLCAoY2hpbGQpID0+IHtcclxuXHRcdFx0XHRcdC8vIOW+queOr+eahOaXtuWAme+8jOWmguaenG1hdGNo5a2Y5Zyo77yM5bCx6K+05piO5bey57uP5Yy56YWN5Yiw5LqG77yM6L+Z5Liq5pe25YCZ5bCx5LiN6ZyA6KaB57un57ut5Yy56YWN5LqGXHJcblx0XHRcdFx0XHRpZiAobWF0Y2ggPT0gbnVsbCAmJiBSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcclxuXHRcdFx0XHRcdFx0ZWxlbWVudCA9IGNoaWxkO1xyXG5cclxuXHRcdFx0XHRcdFx0Y29uc3QgcGF0aCA9IGNoaWxkLnByb3BzLnBhdGggfHwgY2hpbGQucHJvcHMuZnJvbTtcclxuXHJcblx0XHRcdFx0XHRcdG1hdGNoID0gcGF0aFxyXG5cdFx0XHRcdFx0XHRcdD8gbWF0Y2hQYXRoKGxvY2F0aW9uLnBhdGhuYW1lLCB7IC4uLmNoaWxkLnByb3BzLCBwYXRoIH0pXHJcblx0XHRcdFx0XHRcdFx0OiBjb250ZXh0Lm1hdGNoO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdC8vIOi/lOWbnueahOWPquacieS4gOS4quespuWQiOimgeaxgueahHJvdXRl77yM5YW25LuWcm91dGXkuI3kvJrpgKDmiJDlvbHlk41cclxuXHRcdFx0XHRyZXR1cm4gbWF0Y2hcclxuXHRcdFx0XHRcdD8gUmVhY3QuY2xvbmVFbGVtZW50KGVsZW1lbnQsIHsgbG9jYXRpb24sIGNvbXB1dGVkTWF0Y2g6IG1hdGNoIH0pXHJcblx0XHRcdFx0XHQ6IG51bGw7XHJcblx0XHRcdH19XHJcblx0XHQ8L1JvdXRlckNvbnRleHQuQ29uc3VtZXI+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3dpdGNoO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IGFzIGNyZWF0ZUhpc3RvcnkgfSBmcm9tIFwiLi4vdXRpbHMvaGlzdG9yeS5taW4uanNcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwiLi9Sb3V0ZXJcIjtcclxuXHJcbmZ1bmN0aW9uIEJyb3dzZXJSb3V0ZXIocHJvcHMpIHtcclxuICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcclxuICBjb25zdCBbaGlzdG9yeV0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICByZXR1cm4gY3JlYXRlSGlzdG9yeSgpO1xyXG4gIH0pO1xyXG4gIHJldHVybiA8Um91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9IGNoaWxkcmVuPXtjaGlsZHJlbn0gLz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJyb3dzZXJSb3V0ZXI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY3JlYXRlSGFzaEhpc3RvcnkgYXMgY3JlYXRlSGlzdG9yeSB9IGZyb20gXCIuLi91dGlscy9oaXN0b3J5Lm1pbi5qc1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCIuL1JvdXRlclwiO1xyXG5cclxuZnVuY3Rpb24gSGFzaFJvdXRlcihwcm9wcykge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtoaXN0b3J5XSA9IHVzZVN0YXRlKCgpID0+IHtcclxuICAgIHJldHVybiBjcmVhdGVIaXN0b3J5KCk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIDxSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0gY2hpbGRyZW49e2NoaWxkcmVufSAvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGFzaFJvdXRlcjtcclxuIiwiaW1wb3J0IHsgY3JlYXRlTG9jYXRpb24sIGNyZWF0ZVBhdGggfSBmcm9tIFwiLi4vdXRpbHMvaGlzdG9yeS5taW4uanNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyQ29udGV4dCBmcm9tIFwiLi9Sb3V0ZXJDb250ZXh0XCI7XHJcbi8vIOm7mOiupOeahGZvcndhcmRSZWbmlrnms5XvvIzkvKDku4DkuYjov5Tlm57ku4DkuYhcclxuY29uc3QgZm9yd2FyZFJlZlNoaW0gPSAoQykgPT4gQztcclxuXHJcbmxldCB7IGZvcndhcmRSZWYgfSA9IFJlYWN0O1xyXG5pZiAodHlwZW9mIGZvcndhcmRSZWYgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICBmb3J3YXJkUmVmID0gZm9yd2FyZFJlZlNoaW07XHJcbn1cclxuLy8g5aSE55CGZnVuY3Rpb25cclxuZXhwb3J0IGNvbnN0IHJlc29sdmVUb0xvY2F0aW9uID0gKHRvLCBjdXJyZW50TG9jYXRpb24pID0+IHtcclxuICByZXR1cm4gdHlwZW9mIHRvID09PSBcImZ1bmN0aW9uXCIgPyB0byhjdXJyZW50TG9jYXRpb24pIDogdG87XHJcbn07XHJcblxyXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcclxuICAvKipcclxuICAgKiBldmVudC5tZXRhS2V5IOi/lOWbnuS4gOS4qiDluIPlsJTlgLzvvIzlnKjpvKDmoIfkuovku7blj5HnlJ/ml7bvvIznlKjkuo7mjIfnpLogTWV0YSDplK7mmK/mjInkuIvnirbmgIHvvIh0cnVl77yJ77yM6L+Y5piv6YeK5pS+54q25oCB77yIZmFsc2XvvIlcclxuICAgKiBldmVudC5hbHRLZXkg5b2T5LqL5Lu26Kem5Y+R5pe277yM5aaC5p6cYWx0IOiiq+aMieS4i++8jOWImei/lOWbniB0cnVl77yM5ZCm5YiZ6L+U5ZueZmFsc2VcclxuICAgKiBldmVudC5jdHJsS2V5IOW9k+S6i+S7tuinpuWPkeaXtu+8jOWmguaenGN0cmwg6KKr5oyJ5LiL77yM5YiZ6L+U5ZueIHRydWXvvIzlkKbliJnov5Tlm55mYWxzZVxyXG4gICAqIGV2ZW50LnNoaWZ0S2V5IOW9k+S6i+S7tuinpuWPkeaXtu+8jOWmguaenHNoaWZ0IOiiq+aMieS4i++8jOWImei/lOWbniB0cnVl77yM5ZCm5YiZ6L+U5ZueZmFsc2VcclxuICAgKi9cclxuXHJcbiAgcmV0dXJuICEhKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xyXG59XHJcblxyXG5jb25zdCBMaW5rQnV0dG9uID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZnMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBpbm5lclJlZiwgLy8gVE9ETzogZGVwcmVjYXRlXHJcbiAgICBuYXZpZ2F0ZSxcclxuICAgIG9uQ2xpY2ssXHJcbiAgICAuLi5vdGhlcnNQcm9wc1xyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgeyB0YXJnZXQgfSA9IG90aGVyc1Byb3BzO1xyXG4gIGxldCBuZXdQcm9wcyA9IHtcclxuICAgIC4uLm90aGVyc1Byb3BzLFxyXG4gICAgb25DbGljayhldmVudCkge1xyXG4gICAgICAvLyDlpoLmnpzmnIljbGlja+aWueazle+8jOWwseaJp+ihjOm7mOiupOeahGNsaWNr5pa55rOVXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKG9uQ2xpY2spIHtcclxuICAgICAgICAgIG9uQ2xpY2soZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8vIOmYu+atoum7mOiupOS6i+S7tlxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhyb3cgZTtcclxuICAgICAgfVxyXG4gICAgICAvKipcclxuICAgICAgICogZXZlbnQuZGVmYXVsdFByZXZlbnRlZCDliKTmlq3mmK/lkKbosIPnlKjkuoZwcmV2ZW50RGVmYXVsdCDmlrnms5UsIOW5tuS4lOm8oOagh+W3pumUrueCueWHuyggZXZlbnQuYnV0dG9uID09PSAwIClcclxuICAgICAgICogdGFyZ2V0IOS4uiBfc2VsZiDlubbkuJTmsqHmnInmjIkgYWx0IGN0cmwgc2hpZnQgbWV0YemUrlxyXG4gICAgICAgKi9cclxuICAgICAgaWYgKFxyXG4gICAgICAgICFldmVudC5kZWZhdWx0UHJldmVudGVkICYmXHJcbiAgICAgICAgZXZlbnQuYnV0dG9uID09PSAwICYmXHJcbiAgICAgICAgKCF0YXJnZXQgfHwgdGFyZ2V0ID09PSBcIl9zZWxmXCIpICYmXHJcbiAgICAgICAgIWlzTW9kaWZpZWRFdmVudChldmVudClcclxuICAgICAgKSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBuYXZpZ2F0ZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIOWFtuS7luaDheWGteS8mui1sGHmoIfnrb7pu5jorqTnmoRocmVm55qE6Lev55Sx6Lez6L2sXHJcbiAgICB9LFxyXG4gIH07XHJcbiAgaWYgKGZvcndhcmRSZWZTaGltICE9PSBmb3J3YXJkUmVmKSB7XHJcbiAgICBuZXdQcm9wcy5yZWYgPSByZWZzIHx8IGlubmVyUmVmO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBuZXdQcm9wcy5yZWYgPSBpbm5lclJlZjtcclxuICB9XHJcbiAgcmV0dXJuIDxhIHsuLi5uZXdQcm9wc30gLz47XHJcbn0pO1xyXG5mdW5jdGlvbiBMaW5rQ29tcG9uZW50KHByb3BzLCByZWZzKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgdG8sIC8vIOi3s+i9rOmTvuaOpSDmjqXmlLYgc3RyaW5nIE9iamVjdCBmdW5jdGlvbiDkuInnp43nsbvlnotcclxuICAgIHJlcGxhY2UgPSBmYWxzZSwgLy8g5piv5ZCmcmVwbGFjZeaWueazlVxyXG4gICAgaW5uZXJSZWYsIC8vIHJlZu+8jOS4uuS6hnJlYWN0MTXlj4rku6XkuItcclxuICAgIGNvbXBvbmVudCA9IExpbmtCdXR0b24sIC8vIOe7hOS7tlxyXG4gICAgLi4ub3RoZXJzUHJvcHNcclxuICB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxSb3V0ZXJDb250ZXh0LkNvbnN1bWVyPlxyXG4gICAgICB7KGNvbnRleHQpID0+IHtcclxuICAgICAgICBjb25zdCB7IGhpc3RvcnksIGxvY2F0aW9uIH0gPSBjb250ZXh0O1xyXG4gICAgICAgIC8vIOeUn+aIkGxvY2F0aW9uXHJcbiAgICAgICAgY29uc3QgbmV3TG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbih7XHJcbiAgICAgICAgICBwYXRoOiByZXNvbHZlVG9Mb2NhdGlvbih0bywgbG9jYXRpb24pLFxyXG4gICAgICAgICAgY3VycmVudExvY2F0aW9uOiBsb2NhdGlvbixcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyDnlJ/miJBocmVmXHJcbiAgICAgICAgY29uc3QgaHJlZiA9IG5ld0xvY2F0aW9uID8gY3JlYXRlUGF0aChuZXdMb2NhdGlvbikgOiBcIlwiO1xyXG5cclxuICAgICAgICBsZXQgbmV3UHJvcHMgPSB7XHJcbiAgICAgICAgICAuLi5vdGhlcnNQcm9wcyxcclxuICAgICAgICAgIGhyZWYsXHJcbiAgICAgICAgICBuYXZpZ2F0ZSgpIHtcclxuICAgICAgICAgICAgY29uc3QgbG9jYXRpb24gPSByZXNvbHZlVG9Mb2NhdGlvbih0bywgY29udGV4dC5sb2NhdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnN0IG1ldGhvZCA9IHJlcGxhY2UgPyBoaXN0b3J5LnJlcGxhY2UgOiBoaXN0b3J5LnB1c2g7XHJcblxyXG4gICAgICAgICAgICBtZXRob2QobG9jYXRpb24pO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBSZWFjdCAxNSBjb21wYXRcclxuICAgICAgICBpZiAoZm9yd2FyZFJlZlNoaW0gIT09IGZvcndhcmRSZWYpIHtcclxuICAgICAgICAgIG5ld1Byb3BzLnJlZiA9IHJlZnMgfHwgaW5uZXJSZWY7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5ld1Byb3BzLmlubmVyUmVmID0gaW5uZXJSZWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIG5ld1Byb3BzKTtcclxuICAgICAgfX1cclxuICAgIDwvUm91dGVyQ29udGV4dC5Db25zdW1lcj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBMaW5rID0gZm9yd2FyZFJlZihMaW5rQ29tcG9uZW50KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpbms7XHJcbiIsIi8qKlxyXG4gKiBUT0RPIOmcgOimgeS6huino+S4gOS4i3JlYWN055qE5rqQ56CBXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBob2lzdFN0YXRpY3MgZnJvbSBcImhvaXN0LW5vbi1yZWFjdC1zdGF0aWNzXCI7XHJcblxyXG5pbXBvcnQgUm91dGVyQ29udGV4dCBmcm9tIFwiLi9Sb3V0ZXJDb250ZXh0LmpzXCI7XHJcblxyXG4vKipcclxuICogQSBwdWJsaWMgaGlnaGVyLW9yZGVyIGNvbXBvbmVudCB0byBhY2Nlc3MgdGhlIGltcGVyYXRpdmUgQVBJXHJcbiAqL1xyXG5mdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvbmVudCkge1xyXG5cdGNvbnN0IGRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWV9KWA7XHJcblx0Y29uc3QgQyA9IChwcm9wcykgPT4ge1xyXG5cdFx0Y29uc3QgeyB3cmFwcGVkQ29tcG9uZW50UmVmLCAuLi5yZW1haW5pbmdQcm9wcyB9ID0gcHJvcHM7XHJcblxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PFJvdXRlckNvbnRleHQuQ29uc3VtZXI+XHJcblx0XHRcdFx0eyhjb250ZXh0KSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHQ8Q29tcG9uZW50XHJcblx0XHRcdFx0XHRcdFx0ey4uLnJlbWFpbmluZ1Byb3BzfVxyXG5cdFx0XHRcdFx0XHRcdHsuLi5jb250ZXh0fVxyXG5cdFx0XHRcdFx0XHRcdHJlZj17d3JhcHBlZENvbXBvbmVudFJlZn1cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fX1cclxuXHRcdFx0PC9Sb3V0ZXJDb250ZXh0LkNvbnN1bWVyPlxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHRDLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XHJcblx0Qy5XcmFwcGVkQ29tcG9uZW50ID0gQ29tcG9uZW50O1xyXG5cdHJldHVybiBob2lzdFN0YXRpY3MoQywgQ29tcG9uZW50KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcjtcclxuIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wienlsaWFuZ0hpc3RvcnlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wienlsaWFuZ0hpc3RvcnlcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJleHBvcnQgY29uc3QgQmVmb3JlVW5sb2FkRXZlbnRUeXBlID0gXCJiZWZvcmV1bmxvYWRcIjtcclxuZXhwb3J0IGNvbnN0IEhhc2hDaGFuZ2VFdmVudFR5cGUgPSBcImhhc2hjaGFuZ2VcIjtcclxuZXhwb3J0IGNvbnN0IFBvcFN0YXRlRXZlbnRUeXBlID0gXCJwb3BzdGF0ZVwiO1xyXG5cclxuLyoqXHJcbiAqIOWOhuWPsuagiOS4iuS4gOasoeaTjeS9nOeahOexu+Wei1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFjdGlvblR5cGUgPSB7XHJcbiAgcHVzaDogXCJQVVNIXCIsIC8vIOaOqOWFpeagiFxyXG4gIHJlcGxhY2U6IFwiUkVQTEFDRVwiLCAvLyDmm7/mjaLmoIhcclxuICBwb3A6IFwiUE9QXCIsIC8vIOWIneWni+WAvFxyXG59O1xyXG5cclxuLyoqXHJcbiAqIOaVsOaNruexu+Wei+aemuS4vlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVudW1WYWx1ZVR5cGUgPSB7XHJcbiAgb2JqZWN0OiBcIk9iamVjdFwiLFxyXG4gIGFycmF5OiBcIkFycmF5XCIsXHJcbiAgYmFzaWM6IFwiQmFzaWNcIixcclxufTtcclxuIiwiZnVuY3Rpb24gaXNBYnNvbHV0ZShwYXRobmFtZSkge1xuICByZXR1cm4gcGF0aG5hbWUuY2hhckF0KDApID09PSAnLyc7XG59XG5cbi8vIEFib3V0IDEuNXggZmFzdGVyIHRoYW4gdGhlIHR3by1hcmcgdmVyc2lvbiBvZiBBcnJheSNzcGxpY2UoKVxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAodmFyIGkgPSBpbmRleCwgayA9IGkgKyAxLCBuID0gbGlzdC5sZW5ndGg7IGsgPCBuOyBpICs9IDEsIGsgKz0gMSkge1xuICAgIGxpc3RbaV0gPSBsaXN0W2tdO1xuICB9XG5cbiAgbGlzdC5wb3AoKTtcbn1cblxuLy8gVGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBiYXNlZCBoZWF2aWx5IG9uIG5vZGUncyB1cmwucGFyc2VcbmZ1bmN0aW9uIHJlc29sdmVQYXRobmFtZSh0bywgZnJvbSkge1xuICBpZiAoZnJvbSA9PT0gdW5kZWZpbmVkKSBmcm9tID0gJyc7XG5cbiAgdmFyIHRvUGFydHMgPSAodG8gJiYgdG8uc3BsaXQoJy8nKSkgfHwgW107XG4gIHZhciBmcm9tUGFydHMgPSAoZnJvbSAmJiBmcm9tLnNwbGl0KCcvJykpIHx8IFtdO1xuXG4gIHZhciBpc1RvQWJzID0gdG8gJiYgaXNBYnNvbHV0ZSh0byk7XG4gIHZhciBpc0Zyb21BYnMgPSBmcm9tICYmIGlzQWJzb2x1dGUoZnJvbSk7XG4gIHZhciBtdXN0RW5kQWJzID0gaXNUb0FicyB8fCBpc0Zyb21BYnM7XG5cbiAgaWYgKHRvICYmIGlzQWJzb2x1dGUodG8pKSB7XG4gICAgLy8gdG8gaXMgYWJzb2x1dGVcbiAgICBmcm9tUGFydHMgPSB0b1BhcnRzO1xuICB9IGVsc2UgaWYgKHRvUGFydHMubGVuZ3RoKSB7XG4gICAgLy8gdG8gaXMgcmVsYXRpdmUsIGRyb3AgdGhlIGZpbGVuYW1lXG4gICAgZnJvbVBhcnRzLnBvcCgpO1xuICAgIGZyb21QYXJ0cyA9IGZyb21QYXJ0cy5jb25jYXQodG9QYXJ0cyk7XG4gIH1cblxuICBpZiAoIWZyb21QYXJ0cy5sZW5ndGgpIHJldHVybiAnLyc7XG5cbiAgdmFyIGhhc1RyYWlsaW5nU2xhc2g7XG4gIGlmIChmcm9tUGFydHMubGVuZ3RoKSB7XG4gICAgdmFyIGxhc3QgPSBmcm9tUGFydHNbZnJvbVBhcnRzLmxlbmd0aCAtIDFdO1xuICAgIGhhc1RyYWlsaW5nU2xhc2ggPSBsYXN0ID09PSAnLicgfHwgbGFzdCA9PT0gJy4uJyB8fCBsYXN0ID09PSAnJztcbiAgfSBlbHNlIHtcbiAgICBoYXNUcmFpbGluZ1NsYXNoID0gZmFsc2U7XG4gIH1cblxuICB2YXIgdXAgPSAwO1xuICBmb3IgKHZhciBpID0gZnJvbVBhcnRzLmxlbmd0aDsgaSA+PSAwOyBpLS0pIHtcbiAgICB2YXIgcGFydCA9IGZyb21QYXJ0c1tpXTtcblxuICAgIGlmIChwYXJ0ID09PSAnLicpIHtcbiAgICAgIHNwbGljZU9uZShmcm9tUGFydHMsIGkpO1xuICAgIH0gZWxzZSBpZiAocGFydCA9PT0gJy4uJykge1xuICAgICAgc3BsaWNlT25lKGZyb21QYXJ0cywgaSk7XG4gICAgICB1cCsrO1xuICAgIH0gZWxzZSBpZiAodXApIHtcbiAgICAgIHNwbGljZU9uZShmcm9tUGFydHMsIGkpO1xuICAgICAgdXAtLTtcbiAgICB9XG4gIH1cblxuICBpZiAoIW11c3RFbmRBYnMpIGZvciAoOyB1cC0tOyB1cCkgZnJvbVBhcnRzLnVuc2hpZnQoJy4uJyk7XG5cbiAgaWYgKFxuICAgIG11c3RFbmRBYnMgJiZcbiAgICBmcm9tUGFydHNbMF0gIT09ICcnICYmXG4gICAgKCFmcm9tUGFydHNbMF0gfHwgIWlzQWJzb2x1dGUoZnJvbVBhcnRzWzBdKSlcbiAgKVxuICAgIGZyb21QYXJ0cy51bnNoaWZ0KCcnKTtcblxuICB2YXIgcmVzdWx0ID0gZnJvbVBhcnRzLmpvaW4oJy8nKTtcblxuICBpZiAoaGFzVHJhaWxpbmdTbGFzaCAmJiByZXN1bHQuc3Vic3RyKC0xKSAhPT0gJy8nKSByZXN1bHQgKz0gJy8nO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlc29sdmVQYXRobmFtZTtcbiIsImltcG9ydCB7XHJcbiAgY3JlYXRlRXZlbnRMaXN0LFxyXG4gIHN0cmlwVHJhaWxpbmdTbGFzaCxcclxuICBhZGRMZWFkaW5nU2xhc2gsXHJcbn0gZnJvbSBcIi4uL3V0aWxzL2luZGV4XCI7XHJcbmltcG9ydCB7XHJcbiAgQmVmb3JlVW5sb2FkRXZlbnRUeXBlLFxyXG4gIEhhc2hDaGFuZ2VFdmVudFR5cGUsXHJcbiAgUG9wU3RhdGVFdmVudFR5cGUsXHJcbiAgYWN0aW9uVHlwZSxcclxufSBmcm9tIFwiLi4vY29uZmlnL2luZGV4XCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlUGF0aCxcclxuICBjcmVhdGVMb2NhdGlvbixcclxuICBnZXRCYXNlSHJlZixcclxufSBmcm9tIFwiLi4vdXRpbHMvTG9jYXRpb25VdGlsc1wiO1xyXG4vKipcclxuICog5Yib5bu6aGlzdG9yeei3r+eUsVxyXG4gKiBAcGFyYW0geyp9IG9wdGlvbnNcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXJIaXN0b3J5KG9wdGlvbnMgPSB7fSkge1xyXG4gIGNvbnN0IHsgd2luZG93ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcsIGlzU2hvd0JlZm9yZVVubG9hZCA9IGZhbHNlIH0gPSBvcHRpb25zO1xyXG5cclxuICBjb25zdCBiYXNlbmFtZSA9IG9wdGlvbnMuYmFzZW5hbWVcclxuICAgID8gc3RyaXBUcmFpbGluZ1NsYXNoKGFkZExlYWRpbmdTbGFzaChvcHRpb25zLmJhc2VuYW1lKSlcclxuICAgIDogXCJcIjtcclxuXHJcbiAgLy8g5YWo5bGAaGlzdG9yeVxyXG4gIGNvbnN0IGdsb2JhbEhpc3RvcnkgPSB3aW5kb3cuaGlzdG9yeTtcclxuXHJcbiAgLy8g6K6i6ZiF6ICF6Zif5YiXXHJcbiAgY29uc3QgbGlzdGVuZXJzID0gY3JlYXRlRXZlbnRMaXN0KHtcclxuICAgIHJlbW92ZUNhbGxiYWNrOiByZW1vdmVQb3BTdGF0ZUV2ZW50TGlzdGVuRnVuYyxcclxuICB9KTtcclxuICAvLyDmj5DnpLrkuovku7bpmJ/liJdcclxuICBjb25zdCBibG9ja2VycyA9IGNyZWF0ZUV2ZW50TGlzdCh7XHJcbiAgICBpc05lZWRSZXN1bHQ6IHRydWUsXHJcbiAgICByZW1vdmVDYWxsYmFjazogcmVtb3ZlUG9wU3RhdGVFdmVudExpc3RlbkZ1bmMsXHJcbiAgfSk7XHJcblxyXG4gIGxldCBhY3Rpb24gPSBhY3Rpb25UeXBlLnBvcDtcclxuICBsZXQgbG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbih7XHJcbiAgICBwYXRoOiB3aW5kb3cubG9jYXRpb24sXHJcbiAgICBiYXNlbmFtZSxcclxuICAgIHN0YXRlOiBnbG9iYWxIaXN0b3J5LnN0YXRlLFxyXG4gIH0pO1xyXG5cclxuICAvKipcclxuICAgKiBQb3BTdGF0ZUV2ZW50IOebkeWQrOaWueazlVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIHBvcFN0YXRlRXZlbnRMaXN0ZW5GdW5jKGV2ZW50KSB7XHJcbiAgICBsZXQgbmV4dExvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oe1xyXG4gICAgICBwYXRoOiB3aW5kb3cubG9jYXRpb24sXHJcbiAgICAgIGJhc2VuYW1lLFxyXG4gICAgICBzdGF0ZTogZ2xvYmFsSGlzdG9yeS5zdGF0ZSxcclxuICAgIH0pO1xyXG4gICAgLy8gSWdub3JlIGV4dHJhbmVvdXMgaGFzaGNoYW5nZSBldmVudHMuXHJcbiAgICAvLyDov5nph4zmhJ/op4nlj6/ku6Xkvb/nlKhldmVudOS4reeahOaVsOaNru+8jOS9huaYr+i/meagt+WGmeWPr+S7pemBv+WFjeS4jeWQjOeOr+Wig2hhc2jkuK3mlbDmja7lvILluLjnmoTpl67pophcclxuICAgIGlmIChjcmVhdGVQYXRoKG5leHRMb2NhdGlvbikgIT09IGNyZWF0ZVBhdGgobG9jYXRpb24pKSB7XHJcbiAgICAgIGhhbmRsZVBvcChuZXh0TG9jYXRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlUG9wU3RhdGVFdmVudExpc3RlbkZ1bmMoKSB7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihQb3BTdGF0ZUV2ZW50VHlwZSwgcG9wU3RhdGVFdmVudExpc3RlbkZ1bmMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6K6+572u55uR5ZCsLOWPquacieWGjWdvLGJhY2ssZm9yd2FyZOS4ieenjeaDheWGteS4i+S8muinpuWPkVxyXG4gICAqL1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFBvcFN0YXRlRXZlbnRUeXBlLCBwb3BTdGF0ZUV2ZW50TGlzdGVuRnVuYyk7XHJcblxyXG4gIGxldCBibG9ja2VkUG9wVHggPSBudWxsO1xyXG4gIC8qKlxyXG4gICAqIGhhc2jmlLnlj5jlh7rlj5Hkuovku7ZcclxuICAgKi9cclxuICBmdW5jdGlvbiBoYW5kbGVQb3AobmV4dExvY2F0aW9uKSB7XHJcbiAgICBpZiAoYmxvY2tlZFBvcFR4KSB7XHJcbiAgICAgIGJsb2NrZWRQb3BUeCA9IGZhbHNlO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImJsb2NrZWRQb3BUeFwiLCBibG9ja2VkUG9wVHgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgbmV4dEFjdGlvbiA9IGFjdGlvblR5cGUucG9wO1xyXG4gICAgICBjb25zdCBzZW5kRGF0YSA9IHtcclxuICAgICAgICBhY3Rpb246IG5leHRBY3Rpb24sXHJcbiAgICAgICAgbG9jYXRpb246IG5leHRMb2NhdGlvbixcclxuICAgICAgfTtcclxuICAgICAgaWYgKGJsb2NrZXJzLmxlbmd0aCkge1xyXG4gICAgICAgIGxldCBpc09rID0gYmxvY2tlcnMuY2FsbChzZW5kRGF0YSk7XHJcbiAgICAgICAgaWYgKCFpc09rKSB7XHJcbiAgICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBsb2NhdGlvbi5zdGF0ZS5pbmRleCAtIG5leHRMb2NhdGlvbi5zdGF0ZS5pbmRleDtcclxuICAgICAgICAgIC8vIGJsb2NrZWRQb3BUeCA9IHRydWU7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImlzTm90T2tcIiwgYmxvY2tlZFBvcFR4LCBsb2NhdGlvbiwgbmV4dExvY2F0aW9uKTtcclxuICAgICAgICAgIGdvKGxhc3RJbmRleCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uLCBuZXh0TG9jYXRpb24pO1xyXG4gICAgICAgICAgbG9jYXRpb24gPSBuZXh0TG9jYXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFwcGx5VG8oc2VuZERhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDnlJ/miJDpk77mjqVcclxuICAgKi9cclxuICBmdW5jdGlvbiBjcmVhdGVIcmVmKHBhdGgpIHtcclxuICAgIGlmICh0eXBlb2YgcGF0aCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICByZXR1cm4gY3JlYXRlUGF0aChcclxuICAgICAgICBjcmVhdGVMb2NhdGlvbih7XHJcbiAgICAgICAgICBwYXRoLFxyXG4gICAgICAgICAgYmFzZW5hbWUsXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaYr+WQpuWFgeiuuOi3s+i9rFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGFsbG93VG8ocHJvcHMpIHtcclxuICAgIGNvbnN0IHsgYWN0aW9uLCBsb2NhdGlvbiB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCByZXN1bHQgPSAhYmxvY2tlcnMubGVuZ3RoIHx8IGJsb2NrZXJzLmNhbGwoeyBhY3Rpb24sIGxvY2F0aW9uIH0pO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWFgeiuuOi3s+i9rFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGFwcGx5VG8ocHJvcHMpIHtcclxuICAgIGFjdGlvbiA9IHByb3BzLmFjdGlvbjtcclxuICAgIGxvY2F0aW9uID0gcHJvcHMubG9jYXRpb247XHJcbiAgICBsaXN0ZW5lcnMuY2FsbCh7IGFjdGlvbiwgbG9jYXRpb24gfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmt7vliqDot6/nlLFcclxuICAgKi9cclxuICBmdW5jdGlvbiBwdXNoKHBhdGgsIHN0YXRlKSB7XHJcbiAgICBjb25zdCBuZXdBY3Rpb24gPSBhY3Rpb25UeXBlLnB1c2g7XHJcbiAgICBjb25zdCBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgIGluZGV4OiBsb2NhdGlvbi5zdGF0ZSAmJiBsb2NhdGlvbi5zdGF0ZS5pbmRleCArIDEsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IG5ld0xvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oe1xyXG4gICAgICBwYXRoLFxyXG4gICAgICBzdGF0ZTogbmV3U3RhdGUsXHJcbiAgICAgIGJhc2VuYW1lLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBzZW5kRGF0YSA9IHtcclxuICAgICAgYWN0aW9uOiBuZXdBY3Rpb24sXHJcbiAgICAgIGxvY2F0aW9uOiBuZXdMb2NhdGlvbixcclxuICAgIH07XHJcbiAgICBpZiAoYWxsb3dUbyhzZW5kRGF0YSkpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1cmwgPSBnZXRCYXNlSHJlZigpICsgYmFzZW5hbWUgKyBjcmVhdGVQYXRoKG5ld0xvY2F0aW9uKTtcclxuICAgICAgICBnbG9iYWxIaXN0b3J5LnB1c2hTdGF0ZShuZXdTdGF0ZSwgXCJcIiwgdXJsKTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgIH1cclxuICAgICAgYXBwbHlUbyhzZW5kRGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmm7/mjaJcclxuICAgKi9cclxuICBmdW5jdGlvbiByZXBsYWNlKHBhdGgsIHN0YXRlKSB7XHJcbiAgICBjb25zdCBuZXdBY3Rpb24gPSBhY3Rpb25UeXBlLnB1c2g7XHJcbiAgICBjb25zdCBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgIGluZGV4OiBsb2NhdGlvbi5zdGF0ZSAmJiBsb2NhdGlvbi5zdGF0ZS5pbmRleCxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgbmV3TG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbih7IHBhdGgsIHN0YXRlOiBuZXdTdGF0ZSwgYmFzZW5hbWUgfSk7XHJcbiAgICBjb25zdCBzZW5kRGF0YSA9IHtcclxuICAgICAgYWN0aW9uOiBuZXdBY3Rpb24sXHJcbiAgICAgIGxvY2F0aW9uOiBuZXdMb2NhdGlvbixcclxuICAgIH07XHJcbiAgICBpZiAoYWxsb3dUbyhzZW5kRGF0YSkpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1cmwgPSBnZXRCYXNlSHJlZigpICsgYmFzZW5hbWUgKyBjcmVhdGVQYXRoKG5ld0xvY2F0aW9uKTtcclxuICAgICAgICBnbG9iYWxIaXN0b3J5LnJlcGxhY2VTdGF0ZShuZXdTdGF0ZSwgXCJcIiwgdXJsKTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgIH1cclxuICAgICAgYXBwbHlUbyhzZW5kRGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDot7PovaxcclxuICAgKiBAcGFyYW0ge051bWJlcn0gaW5kZXhcclxuICAgKi9cclxuICBmdW5jdGlvbiBnbyhpbmRleCkge1xyXG4gICAgZ2xvYmFsSGlzdG9yeS5nbyhpbmRleCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlm57pgIBcclxuICAgKi9cclxuICBmdW5jdGlvbiBiYWNrKCkge1xyXG4gICAgZ28oLTEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5YmN6L+bXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gZm9yd2FyZCgpIHtcclxuICAgIGdvKDEpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5rOo5YaM6K6i6ZiF6ICFXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICAgKi9cclxuICBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcclxuICAgIHJldHVybiBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLliLfmlrDliY3nmoTlpITnkIbmk43kvZxcclxuICAgKiDlj6rmnIloaXN0b3J5LmJhY2soKSDlkowgaGlzdG9yeS5mb3J3YXJkKCnkvJrop6blj5FGXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gcHJvbXB0QmVmb3JlVW5sb2FkKGV2ZW50KSB7XHJcbiAgICBpZiAoIWlzU2hvd0JlZm9yZVVubG9hZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBDYW5jZWwgdGhlIGV2ZW50IGFzIHN0YXRlZCBieSB0aGUgc3RhbmRhcmQuXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gQ2hyb21lIHJlcXVpcmVzIHJldHVyblZhbHVlIHRvIGJlIHNldC5cclxuICAgIGV2ZW50LnJldHVyblZhbHVlID0gXCJcIjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOaPkOekulxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGJsb2NrKGJsb2NrZXIpIHtcclxuICAgIGxldCB1bmJsb2NrID0gYmxvY2tlcnMucHVzaChibG9ja2VyKTtcclxuICAgIGlmIChibG9ja2Vycy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoQmVmb3JlVW5sb2FkRXZlbnRUeXBlLCBwcm9tcHRCZWZvcmVVbmxvYWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHVuYmxvY2soKTtcclxuICAgICAgaWYgKCFibG9ja2Vycy5sZW5ndGgpIHtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihCZWZvcmVVbmxvYWRFdmVudFR5cGUsIHByb21wdEJlZm9yZVVubG9hZCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBsZXQgaGlzdG9yeSA9IHtcclxuICAgIGdldCBhY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiBhY3Rpb247XHJcbiAgICB9LFxyXG4gICAgZ2V0IGxvY2F0aW9uKCkge1xyXG4gICAgICByZXR1cm4gbG9jYXRpb247XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlSHJlZixcclxuICAgIHB1c2gsXHJcbiAgICByZXBsYWNlLFxyXG4gICAgZ28sXHJcbiAgICBiYWNrLFxyXG4gICAgZm9yd2FyZCxcclxuICAgIGxpc3RlbixcclxuICAgIGJsb2NrLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiBoaXN0b3J5O1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgY3JlYXRlRXZlbnRMaXN0LFxyXG4gIHN0cmlwVHJhaWxpbmdTbGFzaCxcclxuICBhZGRMZWFkaW5nU2xhc2gsXHJcbn0gZnJvbSBcIi4uL3V0aWxzL2luZGV4XCI7XHJcbmltcG9ydCB7XHJcbiAgQmVmb3JlVW5sb2FkRXZlbnRUeXBlLFxyXG4gIEhhc2hDaGFuZ2VFdmVudFR5cGUsXHJcbiAgUG9wU3RhdGVFdmVudFR5cGUsXHJcbiAgYWN0aW9uVHlwZSxcclxufSBmcm9tIFwiLi4vY29uZmlnL2luZGV4XCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlUGF0aCxcclxuICBjcmVhdGVMb2NhdGlvbixcclxuICBnZXRCYXNlSHJlZixcclxufSBmcm9tIFwiLi4vdXRpbHMvTG9jYXRpb25VdGlsc1wiO1xyXG4vKipcclxuICog5Yib5bu6aGlzdG9yeei3r+eUsVxyXG4gKiBAcGFyYW0geyp9IG9wdGlvbnNcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUhhc2hIaXN0b3J5KG9wdGlvbnMgPSB7fSkge1xyXG4gIGNvbnN0IHsgd2luZG93ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcsIGlzU2hvd0JlZm9yZVVubG9hZCA9IGZhbHNlIH0gPSBvcHRpb25zO1xyXG5cclxuICBjb25zdCBiYXNlbmFtZSA9IG9wdGlvbnMuYmFzZW5hbWVcclxuICAgID8gc3RyaXBUcmFpbGluZ1NsYXNoKGFkZExlYWRpbmdTbGFzaChvcHRpb25zLmJhc2VuYW1lKSlcclxuICAgIDogXCJcIjtcclxuXHJcbiAgLy8g5YWo5bGAaGlzdG9yeVxyXG4gIGNvbnN0IGdsb2JhbEhpc3RvcnkgPSB3aW5kb3cuaGlzdG9yeTtcclxuXHJcbiAgLy8g6K6i6ZiF6ICF6Zif5YiXXHJcbiAgY29uc3QgbGlzdGVuZXJzID0gY3JlYXRlRXZlbnRMaXN0KHtcclxuICAgIHJlbW92ZUNhbGxiYWNrOiByZW1vdmVIYXNoQ2hhbmdlRXZlbnRMaXN0ZW5GdW5jLFxyXG4gIH0pO1xyXG4gIC8vIOaPkOekuuS6i+S7tumYn+WIl1xyXG4gIGNvbnN0IGJsb2NrZXJzID0gY3JlYXRlRXZlbnRMaXN0KHtcclxuICAgIGlzTmVlZFJlc3VsdDogdHJ1ZSxcclxuICAgIHJlbW92ZUNhbGxiYWNrOiByZW1vdmVIYXNoQ2hhbmdlRXZlbnRMaXN0ZW5GdW5jLFxyXG4gIH0pO1xyXG5cclxuICBsZXQgYWN0aW9uID0gYWN0aW9uVHlwZS5wb3A7XHJcbiAgbGV0IGxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24oe1xyXG4gICAgcGF0aDogd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpLFxyXG4gICAgYmFzZW5hbWUsXHJcbiAgICBzdGF0ZTogZ2xvYmFsSGlzdG9yeS5zdGF0ZSxcclxuICB9KTtcclxuXHJcbiAgLyoqXHJcbiAgICogaGFzaENoYW5nZUV2ZW50IOebkeWQrOaWueazlVxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGhhc2hDaGFuZ2VFdmVudExpc3RlbkZ1bmMoZXZlbnQpIHtcclxuICAgIGxldCBuZXh0TG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbih7XHJcbiAgICAgIHBhdGg6IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cigxKSxcclxuICAgICAgYmFzZW5hbWUsXHJcbiAgICAgIHN0YXRlOiBnbG9iYWxIaXN0b3J5LnN0YXRlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gSWdub3JlIGV4dHJhbmVvdXMgaGFzaGNoYW5nZSBldmVudHMuXHJcbiAgICAvLyDov5nph4zmhJ/op4nlj6/ku6Xkvb/nlKhldmVudOS4reeahOaVsOaNru+8jOS9huaYr+i/meagt+WGmeWPr+S7pemBv+WFjeS4jeWQjOeOr+Wig2hhc2jkuK3mlbDmja7lvILluLjnmoTpl67pophcclxuICAgIGlmIChjcmVhdGVQYXRoKG5leHRMb2NhdGlvbikgIT09IGNyZWF0ZVBhdGgobG9jYXRpb24pKSB7XHJcbiAgICAgIGhhbmRsZVBvcChuZXh0TG9jYXRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlSGFzaENoYW5nZUV2ZW50TGlzdGVuRnVuYygpIHtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKEhhc2hDaGFuZ2VFdmVudFR5cGUsIGhhc2hDaGFuZ2VFdmVudExpc3RlbkZ1bmMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog6K6+572u55uR5ZCsLOWPquacieWGjWdvLGJhY2ssZm9yd2FyZOS4ieenjeaDheWGteS4i+S8muinpuWPkVxyXG4gICAqL1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKEhhc2hDaGFuZ2VFdmVudFR5cGUsIGhhc2hDaGFuZ2VFdmVudExpc3RlbkZ1bmMpO1xyXG5cclxuICBsZXQgYmxvY2tlZFBvcFR4ID0gbnVsbDtcclxuICAvKipcclxuICAgKiBoYXNo5pS55Y+Y5Ye65Y+R5LqL5Lu2XHJcbiAgICovXHJcbiAgZnVuY3Rpb24gaGFuZGxlUG9wKG5leHRMb2NhdGlvbikge1xyXG4gICAgaWYgKGJsb2NrZWRQb3BUeCkge1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgbmV4dEFjdGlvbiA9IGFjdGlvblR5cGUucG9wO1xyXG4gICAgICBjb25zdCBzZW5kRGF0YSA9IHtcclxuICAgICAgICBhY3Rpb246IG5leHRBY3Rpb24sXHJcbiAgICAgICAgbG9jYXRpb246IG5leHRMb2NhdGlvbixcclxuICAgICAgfTtcclxuICAgICAgaWYgKGJsb2NrZXJzLmxlbmd0aCkge1xyXG4gICAgICAgIGxldCBpc09rID0gYmxvY2tlcnMuY2FsbChzZW5kRGF0YSk7XHJcbiAgICAgICAgaWYgKCFpc09rKSB7XHJcbiAgICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBsb2NhdGlvbi5zdGF0ZS5pbmRleCAtIG5leHRMb2NhdGlvbi5zdGF0ZS5pbmRleDtcclxuICAgICAgICAgIGdvKGxhc3RJbmRleCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxvY2F0aW9uID0gbmV4dExvY2F0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhcHBseVRvKHNlbmREYXRhKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5oiQ6ZO+5o6lXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gY3JlYXRlSHJlZihwYXRoKSB7XHJcbiAgICBpZiAodHlwZW9mIHBhdGggPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgcmV0dXJuIGNyZWF0ZVBhdGgoXHJcbiAgICAgICAgY3JlYXRlTG9jYXRpb24oe1xyXG4gICAgICAgICAgcGF0aCxcclxuICAgICAgICAgIGJhc2VuYW1lLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmmK/lkKblhYHorrjot7PovaxcclxuICAgKi9cclxuICBmdW5jdGlvbiBhbGxvd1RvKHByb3BzKSB7XHJcbiAgICBjb25zdCB7IGFjdGlvbiwgbG9jYXRpb24gfSA9IHByb3BzO1xyXG4gICAgcmV0dXJuICFibG9ja2Vycy5sZW5ndGggfHwgYmxvY2tlcnMuY2FsbCh7IGFjdGlvbiwgbG9jYXRpb24gfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDlhYHorrjot7PovaxcclxuICAgKi9cclxuICBmdW5jdGlvbiBhcHBseVRvKHByb3BzKSB7XHJcbiAgICBhY3Rpb24gPSBwcm9wcy5hY3Rpb247XHJcbiAgICBsb2NhdGlvbiA9IHByb3BzLmxvY2F0aW9uO1xyXG4gICAgbGlzdGVuZXJzLmNhbGwoeyBhY3Rpb24sIGxvY2F0aW9uIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5re75Yqg6Lev55SxXHJcbiAgICovXHJcbiAgZnVuY3Rpb24gcHVzaChwYXRoLCBzdGF0ZSkge1xyXG4gICAgY29uc3QgbmV3QWN0aW9uID0gYWN0aW9uVHlwZS5wdXNoO1xyXG4gICAgY29uc3QgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICBpbmRleDogbG9jYXRpb24uc3RhdGUgJiYgbG9jYXRpb24uc3RhdGUuaW5kZXggKyAxLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBuZXdMb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uKHtcclxuICAgICAgcGF0aCxcclxuICAgICAgc3RhdGU6IG5ld1N0YXRlLFxyXG4gICAgICBiYXNlbmFtZSxcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc2VuZERhdGEgPSB7XHJcbiAgICAgIGFjdGlvbjogbmV3QWN0aW9uLFxyXG4gICAgICBsb2NhdGlvbjogbmV3TG9jYXRpb24sXHJcbiAgICB9O1xyXG4gICAgaWYgKGFsbG93VG8oc2VuZERhdGEpKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gZ2V0QmFzZUhyZWYoKSArIFwiI1wiICsgYmFzZW5hbWUgKyBjcmVhdGVQYXRoKG5ld0xvY2F0aW9uKTtcclxuICAgICAgICBnbG9iYWxIaXN0b3J5LnB1c2hTdGF0ZShuZXdTdGF0ZSwgXCJcIiwgdXJsKTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgIH1cclxuICAgICAgYXBwbHlUbyhzZW5kRGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDmm7/mjaJcclxuICAgKi9cclxuICBmdW5jdGlvbiByZXBsYWNlKHBhdGgsIHN0YXRlKSB7XHJcbiAgICBjb25zdCBuZXdBY3Rpb24gPSBhY3Rpb25UeXBlLnB1c2g7XHJcbiAgICBjb25zdCBuZXdTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgIGluZGV4OiBsb2NhdGlvbi5zdGF0ZSAmJiBsb2NhdGlvbi5zdGF0ZS5pbmRleCxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgbmV3TG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbih7IHBhdGgsIHN0YXRlOiBuZXdTdGF0ZSwgYmFzZW5hbWUgfSk7XHJcbiAgICBjb25zdCBzZW5kRGF0YSA9IHtcclxuICAgICAgYWN0aW9uOiBuZXdBY3Rpb24sXHJcbiAgICAgIGxvY2F0aW9uOiBuZXdMb2NhdGlvbixcclxuICAgIH07XHJcbiAgICBpZiAoYWxsb3dUbyhzZW5kRGF0YSkpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB1cmwgPSBnZXRCYXNlSHJlZigpICsgXCIjXCIgKyBiYXNlbmFtZSArIGNyZWF0ZVBhdGgobmV3TG9jYXRpb24pO1xyXG4gICAgICAgIGdsb2JhbEhpc3RvcnkucmVwbGFjZVN0YXRlKG5ld1N0YXRlLCBcIlwiLCB1cmwpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgfVxyXG4gICAgICBhcHBseVRvKHNlbmREYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOi3s+i9rFxyXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGdvKGluZGV4KSB7XHJcbiAgICBnbG9iYWxIaXN0b3J5LmdvKGluZGV4KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOWbnumAgFxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGJhY2soKSB7XHJcbiAgICBnbygtMSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDliY3ov5tcclxuICAgKi9cclxuICBmdW5jdGlvbiBmb3J3YXJkKCkge1xyXG4gICAgZ28oMSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiDms6jlhozorqLpmIXogIVcclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gICAqL1xyXG4gIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xyXG4gICAgcmV0dXJuIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouWIt+aWsOWJjeeahOWkhOeQhuaTjeS9nFxyXG4gICAqIOWPquaciWhpc3RvcnkuYmFjaygpIOWSjCBoaXN0b3J5LmZvcndhcmQoKeS8muinpuWPkUZcclxuICAgKi9cclxuICBmdW5jdGlvbiBwcm9tcHRCZWZvcmVVbmxvYWQoZXZlbnQpIHtcclxuICAgIGlmICghaXNTaG93QmVmb3JlVW5sb2FkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIENhbmNlbCB0aGUgZXZlbnQgYXMgc3RhdGVkIGJ5IHRoZSBzdGFuZGFyZC5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBDaHJvbWUgcmVxdWlyZXMgcmV0dXJuVmFsdWUgdG8gYmUgc2V0LlxyXG4gICAgZXZlbnQucmV0dXJuVmFsdWUgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICog5o+Q56S6XHJcbiAgICovXHJcbiAgZnVuY3Rpb24gYmxvY2soYmxvY2tlcikge1xyXG4gICAgbGV0IHVuYmxvY2sgPSBibG9ja2Vycy5wdXNoKGJsb2NrZXIpO1xyXG4gICAgaWYgKGJsb2NrZXJzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihCZWZvcmVVbmxvYWRFdmVudFR5cGUsIHByb21wdEJlZm9yZVVubG9hZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgdW5ibG9jaygpO1xyXG4gICAgICBpZiAoIWJsb2NrZXJzLmxlbmd0aCkge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKEJlZm9yZVVubG9hZEV2ZW50VHlwZSwgcHJvbXB0QmVmb3JlVW5sb2FkKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGxldCBoaXN0b3J5ID0ge1xyXG4gICAgZ2V0IGFjdGlvbigpIHtcclxuICAgICAgcmV0dXJuIGFjdGlvbjtcclxuICAgIH0sXHJcbiAgICBnZXQgbG9jYXRpb24oKSB7XHJcbiAgICAgIHJldHVybiBsb2NhdGlvbjtcclxuICAgIH0sXHJcbiAgICBjcmVhdGVIcmVmLFxyXG4gICAgcHVzaCxcclxuICAgIHJlcGxhY2UsXHJcbiAgICBnbyxcclxuICAgIGJhY2ssXHJcbiAgICBmb3J3YXJkLFxyXG4gICAgbGlzdGVuLFxyXG4gICAgYmxvY2ssXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGhpc3Rvcnk7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0VW5pcXVlS2V5LCB2YWx1ZUVxdWFsIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IHJlc29sdmVQYXRoTmFtZSBmcm9tIFwicmVzb2x2ZS1wYXRobmFtZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKHBhcmFtcyA9IHt9KSB7XHJcbiAgY29uc3Qge1xyXG4gICAgcGF0aCwgLy8g5Zyw5Z2AXHJcbiAgICBiYXNlbmFtZSwgLy9cclxuICAgIGtleSA9IGdldFVuaXF1ZUtleSgpLCAvLyDllK/kuIDlgLxcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICBpbmRleDogMCxcclxuICAgIH0sIC8vIOeKtuaAgeWPguaVsFxyXG4gICAgY3VycmVudExvY2F0aW9uLCAvLyDlvZPliY1sb2NhdGlvblxyXG4gIH0gPSBwYXJhbXM7XHJcbiAgY29uc3QgYmFzZVBhdGhJbmZvID0gcGFyc2VQYXRoKHBhdGgsIGJhc2VuYW1lLCBjdXJyZW50TG9jYXRpb24pO1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5iYXNlUGF0aEluZm8sXHJcbiAgICBrZXksXHJcbiAgICBzdGF0ZSxcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICog6Kej5p6Q6Lev5b6EXHJcbiAqIEBwYXJhbSB7Kn19IHBhdGhcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVBhdGgocGF0aCwgYmFzZW5hbWUsIGN1cnJlbnRMb2NhdGlvbikge1xyXG4gIGxldCBsb2NhdGlvblJlc3VsdCA9IHtcclxuICAgIHBhdGhuYW1lOiBcIi9cIixcclxuICAgIHNlYXJjaDogXCJcIixcclxuICAgIGhhc2g6IFwiXCIsXHJcbiAgfTtcclxuXHJcbiAgaWYgKHR5cGVvZiBwYXRoID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICBsb2NhdGlvblJlc3VsdC5wYXRobmFtZSA9IHBhdGggfHwgXCIvXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIGxvY2F0aW9uUmVzdWx0ID0gT2JqZWN0LmFzc2lnbihsb2NhdGlvblJlc3VsdCwgeyAuLi5wYXRoIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8g5YWI6L+H5rukaGFzaOWAvO+8jOeEtuWQjuWGjei/h+a7pHNlYXJjaOeahOWGheWuuVxyXG5cclxuICBjb25zdCBoYXNoSW5kZXggPSBsb2NhdGlvblJlc3VsdC5wYXRobmFtZS5pbmRleE9mKFwiI1wiKTtcclxuICAvLyDlrZjlnKhoYXNo5YC8XHJcbiAgaWYgKGhhc2hJbmRleCA+IC0xKSB7XHJcbiAgICAvLyBoYXNo5YC8XHJcbiAgICBsb2NhdGlvblJlc3VsdC5oYXNoID0gbG9jYXRpb25SZXN1bHQucGF0aG5hbWUuc3Vic3RyKGhhc2hJbmRleCk7XHJcbiAgICAvLyBwYXRobmFtZSDlgLxcclxuICAgIGxvY2F0aW9uUmVzdWx0LnBhdGhuYW1lID0gbG9jYXRpb25SZXN1bHQucGF0aG5hbWUuc3Vic3RyKDAsIGhhc2hJbmRleCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzZWFyY2hJbmRleCA9IGxvY2F0aW9uUmVzdWx0LnBhdGhuYW1lLmluZGV4T2YoXCI/XCIpO1xyXG4gIGlmIChzZWFyY2hJbmRleCA+IC0xKSB7XHJcbiAgICAvLyBzZWFyY2gg5YC8XHJcbiAgICBsb2NhdGlvblJlc3VsdC5zZWFyY2ggPSBsb2NhdGlvblJlc3VsdC5wYXRobmFtZS5zdWJzdHIoc2VhcmNoSW5kZXgpO1xyXG4gICAgLy8gcGF0aG5hbWUg5YC8XHJcbiAgICBsb2NhdGlvblJlc3VsdC5wYXRobmFtZSA9IGxvY2F0aW9uUmVzdWx0LnBhdGhuYW1lLnN1YnN0cigwLCBzZWFyY2hJbmRleCk7XHJcbiAgfVxyXG5cclxuICBsb2NhdGlvblJlc3VsdC5wYXRobmFtZSA9IHN0cmlwQmFzZW5hbWUobG9jYXRpb25SZXN1bHQucGF0aG5hbWUsIGJhc2VuYW1lKTtcclxuXHJcbiAgaWYgKGN1cnJlbnRMb2NhdGlvbikge1xyXG4gICAgaWYgKCFsb2NhdGlvblJlc3VsdC5wYXRobmFtZSkge1xyXG4gICAgICBsb2NhdGlvblJlc3VsdC5wYXRobmFtZSA9IGN1cnJlbnRMb2NhdGlvbi5wYXRobmFtZTtcclxuICAgIH0gZWxzZSBpZiAobG9jYXRpb25SZXN1bHQucGF0aG5hbWUuY2hhckF0KDApICE9PSBcIi9cIikge1xyXG4gICAgICBsb2NhdGlvblJlc3VsdC5wYXRobmFtZSA9IHJlc29sdmVQYXRobmFtZShcclxuICAgICAgICBsb2NhdGlvblJlc3VsdC5wYXRobmFtZSxcclxuICAgICAgICBjdXJyZW50TG9jYXRpb24ucGF0aG5hbWVcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgLy8gV2hlbiB0aGVyZSBpcyBubyBwcmlvciBsb2NhdGlvbiBhbmQgcGF0aG5hbWUgaXMgZW1wdHksIHNldCBpdCB0byAvXHJcbiAgICBpZiAoIWxvY2F0aW9uUmVzdWx0LnBhdGhuYW1lKSB7XHJcbiAgICAgIGxvY2F0aW9uUmVzdWx0LnBhdGhuYW1lID0gXCIvXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aG5hbWU6IGxvY2F0aW9uUmVzdWx0LnBhdGhuYW1lLFxyXG4gICAgc2VhcmNoOiBsb2NhdGlvblJlc3VsdC5zZWFyY2ggPT09IFwiP1wiID8gXCJcIiA6IGxvY2F0aW9uUmVzdWx0LnNlYXJjaCxcclxuICAgIGhhc2g6IGxvY2F0aW9uUmVzdWx0Lmhhc2ggPT09IFwiI1wiID8gXCJcIiA6IGxvY2F0aW9uUmVzdWx0Lmhhc2gsXHJcbiAgfTtcclxufVxyXG5cclxuLy8g5Yib5bu6cGF0aFxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGF0aChsb2NhdGlvbiA9IHt9KSB7XHJcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoLCBoYXNoIH0gPSBsb2NhdGlvbjtcclxuXHJcbiAgbGV0IHBhdGggPSBwYXRobmFtZSB8fCBcIi9cIjtcclxuXHJcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2ggIT09IFwiP1wiKVxyXG4gICAgcGF0aCArPSBzZWFyY2guY2hhckF0KDApID09PSBcIj9cIiA/IHNlYXJjaCA6IGA/JHtzZWFyY2h9YDtcclxuXHJcbiAgaWYgKGhhc2ggJiYgaGFzaCAhPT0gXCIjXCIpIHBhdGggKz0gaGFzaC5jaGFyQXQoMCkgPT09IFwiI1wiID8gaGFzaCA6IGAjJHtoYXNofWA7XHJcblxyXG4gIHJldHVybiBwYXRoO1xyXG59XHJcblxyXG4vLyDmmK/lkKbljIXlkKtiYXNlbmFtZVxyXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZW5hbWUocGF0aCA9IFwiXCIsIHByZWZpeCA9IFwiXCIpIHtcclxuICByZXR1cm4gKFxyXG4gICAgcGF0aC50b0xvd2VyQ2FzZSgpLmluZGV4T2YocHJlZml4LnRvTG93ZXJDYXNlKCkpID09PSAwICYmXHJcbiAgICBcIi8/I1wiLmluZGV4T2YocGF0aC5jaGFyQXQocHJlZml4Lmxlbmd0aCkpICE9PSAtMVxyXG4gICk7XHJcbn1cclxuXHJcbi8vIOWOu+mZpGJhc2VuYW1lXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHJpcEJhc2VuYW1lKHBhdGggPSBcIlwiLCBwcmVmaXggPSBcIlwiKSB7XHJcbiAgcmV0dXJuIGhhc0Jhc2VuYW1lKHBhdGgsIHByZWZpeCkgPyBwYXRoLnN1YnN0cihwcmVmaXgubGVuZ3RoKSA6IHBhdGg7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDojrflj5ZiYXNlbmFtZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJhc2VIcmVmKCkge1xyXG4gIGxldCBiYXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJhc2VcIik7XHJcbiAgbGV0IGhyZWYgPSBcIlwiO1xyXG5cclxuICBpZiAoYmFzZSAmJiBiYXNlLmdldEF0dHJpYnV0ZShcImhyZWZcIikpIHtcclxuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIGxldCBoYXNoSW5kZXggPSB1cmwuaW5kZXhPZihcIiNcIik7XHJcbiAgICBocmVmID0gaGFzaEluZGV4ID09PSAtMSA/IHVybCA6IHVybC5zbGljZSgwLCBoYXNoSW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGhyZWY7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBsb2NhdGlvbiDmr5TovoNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2NhdGlvbnNBcmVFcXVhbChhLCBiKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIGEucGF0aG5hbWUgPT09IGIucGF0aG5hbWUgJiZcclxuICAgIGEuc2VhcmNoID09PSBiLnNlYXJjaCAmJlxyXG4gICAgYS5oYXNoID09PSBiLmhhc2ggJiZcclxuICAgIGEua2V5ID09PSBiLmtleSAmJlxyXG4gICAgdmFsdWVFcXVhbChhLnN0YXRlLCBiLnN0YXRlKVxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgZW51bVZhbHVlVHlwZSB9IGZyb20gXCIuLi9jb25maWcvaW5kZXhcIjtcclxuLyoqXHJcbiAqIOWIm+W7uuS6i+S7tumYn+WIl1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUV2ZW50TGlzdChvcHRpb25zID0ge30pIHtcclxuICBjb25zdCB7IGlzTmVlZFJlc3VsdCA9IGZhbHNlLCByZW1vdmVDYWxsYmFjayB9ID0gb3B0aW9ucztcclxuICBsZXQgbGlzdCA9IFtdO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZ2V0IGxlbmd0aCgpIHtcclxuICAgICAgcmV0dXJuIGxpc3QubGVuZ3RoO1xyXG4gICAgfSxcclxuICAgIHB1c2goZm4pIHtcclxuICAgICAgbGlzdC5wdXNoKGZuKTtcclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBsaXN0ID0gbGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IGZuKTtcclxuICAgICAgICBpZiAoIWxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICByZW1vdmVDYWxsYmFjayAmJiByZW1vdmVDYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBjYWxsKGFyZykge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcclxuICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGxpc3QubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICBjb25zdCBmbiA9IGxpc3RbaV07XHJcbiAgICAgICAgcmVzdWx0ID0gZm4gJiYgZm4oYXJnKTtcclxuICAgICAgICBpZiAoaXNOZWVkUmVzdWx0ICYmICFyZXN1bHQpIHtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICog6I635Y+W5ZSv5LiAa2V5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5pcXVlS2V5KGJhc2VEYXRhID0gXCJcIikge1xyXG4gIGNvbnN0IHRpbWVTdHIgPSBEYXRlLm5vdygpLnRvU3RyaW5nKDMyKTtcclxuICBsZXQga2V5ID0gdGltZVN0ciArIGJhc2VEYXRhLnRvU3RyaW5nKCk7XHJcbiAgbGV0IG5ld0tleSA9IFtdO1xyXG4gIGxldCB2ZXJpZmljYXRpb25EYXRhID0gMTsgLy8g5qCh6aqM56CB5L2N572uXHJcbiAgbGV0IG5ld0tleUluZGV4ID0gMDtcclxuICAvLyDph4fnlKjmtbfkvKbmoKHpqoznoIHljp/nkIblpITnkIZcclxuICBmb3IgKGxldCBqID0gMSwgbGVuID0ga2V5Lmxlbmd0aDsgaiA8PSBsZW47IGorKykge1xyXG4gICAgaWYgKGogPT09IHZlcmlmaWNhdGlvbkRhdGEpIHtcclxuICAgICAgbmV3S2V5W25ld0tleUluZGV4XSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoXHJcbiAgICAgICAgNjUgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAweDE2KVxyXG4gICAgICApO1xyXG4gICAgICBuZXdLZXlJbmRleCsrO1xyXG4gICAgICB2ZXJpZmljYXRpb25EYXRhID0gMiAqIHZlcmlmaWNhdGlvbkRhdGE7XHJcbiAgICB9XHJcbiAgICBuZXdLZXlbbmV3S2V5SW5kZXhdID0ga2V5W2ogLSAxXTtcclxuICAgIG5ld0tleUluZGV4Kys7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3S2V5LmpvaW4oXCJcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdChvYmopIHtcclxuICByZXR1cm4gKFxyXG4gICAgb2JqICYmIHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIgJiYgdG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgT2JqZWN0XVwiXHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOiOt+WPluaVsOaNruexu+Wei1xyXG4gKiDov5nph4zlj6rogIPomZHln7rmnKzmlbDmja7nsbvlnovvvIxzeW1ib2znrYnkuI3lnKjogIPomZHojIPnlbTlhoVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZVR5cGUodmFsKSB7XHJcbiAgbGV0IHR5cGUgPSBlbnVtVmFsdWVUeXBlLmJhc2ljO1xyXG4gIGlmIChpc09iamVjdCh2YWwpKSB7XHJcbiAgICB0eXBlID0gZW51bVZhbHVlVHlwZS5vYmplY3Q7XHJcbiAgfVxyXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcclxuICAgIHR5cGUgPSBlbnVtVmFsdWVUeXBlLmFycmF5O1xyXG4gIH1cclxufVxyXG4vKipcclxuICog5q+U6L6D5Lik5Liq5YC85piv5ZCm55u4562JXHJcbiAqIEBwYXJhbSB7Kn0gQVxyXG4gKiBAcGFyYW0geyp9IEJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2YWx1ZUVxdWFsKHZhbHVlQSwgdmFsdWVCKSB7XHJcbiAgY29uc3QgdmFsdWVBVHlwZSA9IGdldFZhbHVlVHlwZSh2YWx1ZUEpO1xyXG4gIGNvbnN0IHZhbHVlQlR5cGUgPSBnZXRWYWx1ZVR5cGUodmFsdWVCKTtcclxuXHJcbiAgLy8g57G75Z6L5LiN55u4562J55qE6IKv5a6a5LiN5LiA5qC3XHJcbiAgaWYgKHZhbHVlQVR5cGUgIT09IHZhbHVlQlR5cGUpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8vIOWfuuehgOexu+Wei+ebtOaOpeWFqOetieWIpOaWrVxyXG4gIGlmICh2YWx1ZUFUeXBlID09PSBlbnVtVmFsdWVUeXBlLmJhc2ljKSB7XHJcbiAgICByZXR1cm4gdmFsdWVBID09PSB2YWx1ZUI7XHJcbiAgfVxyXG5cclxuICAvLyDlr7nosaHnmoTpgJLlvZLosIPnlKhcclxuICBpZiAodmFsdWVBVHlwZSA9PT0gZW51bVZhbHVlVHlwZS5vYmplY3QpIHtcclxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZUEpO1xyXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGtleXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcclxuICAgICAgY29uc3QgaXNFcXVhbCA9IHZhbHVlRXF1YWwodmFsdWVBW2tleV0sIHZhbHVlQltrZXldKTtcclxuICAgICAgaWYgKCFpc0VxdWFsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIOaVsOe7hOWFiOWIpOaWremVv+W6pu+8jOeEtuWQjuWGjeWIpOaWreavj+S4gOS4quWAvFxyXG4gIGlmICh2YWx1ZUFUeXBlID09PSBlbnVtVmFsdWVUeXBlLmFycmF5KSB7XHJcbiAgICBpZiAodmFsdWVBLmxlbmd0aCA9PT0gdmFsdWVCLmxlbmd0aCkge1xyXG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdmFsdWVBLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgaXNFcXVhbCA9IHZhbHVlRXF1YWwodmFsdWVBW2ldLCB2YWx1ZUJbaV0pO1xyXG4gICAgICAgIGlmICghaXNFcXVhbCkge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZhbHNlaTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLy8g5re75Yqg6aaW6YOo55qEIC9cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZExlYWRpbmdTbGFzaChwYXRoKSB7XHJcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSBcIi9cIiA/IHBhdGggOiBcIi9cIiArIHBhdGg7XHJcbn1cclxuLy8g5Y676Zmk6aaW6YOo55qEIC9cclxuZXhwb3J0IGZ1bmN0aW9uIHN0cmlwTGVhZGluZ1NsYXNoKHBhdGgpIHtcclxuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09IFwiL1wiID8gcGF0aC5zdWJzdHIoMSkgOiBwYXRoO1xyXG59XHJcbi8vIOWOu+mZpOWwvumDqOeahCAvXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHJpcFRyYWlsaW5nU2xhc2gocGF0aCkge1xyXG4gIHJldHVybiBwYXRoLmNoYXJBdChwYXRoLmxlbmd0aCAtIDEpID09PSBcIi9cIiA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aDtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XHJcblxyXG4vLyDor43ms5XliIbmnpDnsbvlnotcclxuY29uc3QgdG9rZW5zVHlwZSA9IHtcclxuICBuYW1lOiBcIk5BTUVcIiwgLy8g5ZCN56ewXHJcbiAgY2hhcjogXCJDSEFSXCIsIC8vIOWtl+esplxyXG4gIG9wZW46IFwiT1BFTlwiLCAvLyDlvIBcclxuICBjbG9zZTogXCJDTE9TRVwiLCAvLyDlhbNcclxuICBlc2NhcGVkQ2hhcjogXCJFU0NBUEVEX0NIQVJcIiwgLy8g5YiG5Ymy56ymXHJcbiAgbW9kaWZpZXI6IFwiTU9ESUZJRVJcIiwgLy8g5L+u6aWw56ymXHJcbiAgcGF0dGVybjogXCJQQVRURVJOXCIsIC8vIOiMg+W8jyDmmK/nlKjmnaXmj4/ov7BuYW1l55qEXHJcbiAgZW5kOiBcIkVORFwiLCAvLyDnu5PmnZ9cclxufTtcclxuXHJcbi8qKlxyXG4gKiDmi4bliIZzdHJpbmdcclxuICovXHJcbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcclxuICAvLyDlsIbpnZ4gISA6ICQgeyB9ICggKSBbIF0gLyBcXCDnmoTpg73mjInnhafovazkuYnlrZfnrKblpITnkIYs5a6e6ZmF5LiK55yL6LW35p2l5bCx5piv5bCG6YCa55So55qE5q2j5YiZ6KGo6L6+5byP5Lit5LiN5piv5pWw5o2u5aSE55CG55qE5pWw5o2u5YWo6YOo5YmU6ZmkXHJcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDor43ms5XliIbmnpBcclxuICog5a6e6ZmF5LiK5piv5YiG6K+NLOWPquS4jei/h+i/meS4gOatpeeahOWIhuivjeS4u+imgeaYr+WkhOeQhiDojIPlvI8ocGF0dGVybikg5ZKMIOWtl+auteWQjeensChuYW1lKSDov5nkuKTnp43nsbvlnoss5YW25LuW55qE5oOF5Ya16YO9566A5Y2V5aSE55CGLOavj+S4qmNoYXLpg73lj6/ku6XljZXni6zlsZXnpLpcclxuICogQHBhcmFtIHtBcnJheX0gc3RyXHJcbiAqL1xyXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcclxuICBsZXQgdG9rZW5zID0gW107XHJcbiAgbGV0IGkgPSAwO1xyXG4gIGNvbnN0IHN0ckxlbmd0aCA9IHN0ci5sZW5ndGg7XHJcbiAgd2hpbGUgKGkgPCBzdHJMZW5ndGgpIHtcclxuICAgIGNvbnN0IGNoYXIgPSBzdHJbaV07XHJcblxyXG4gICAgLy8g5aSE55CG5L+u6aWw56ymXHJcbiAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcclxuICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiB0b2tlbnNUeXBlLm1vZGlmaWVyLCBpbmRleDogaSwgdmFsdWU6IGNoYXIgfSk7XHJcbiAgICAgIGkrKztcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcbiAgICAvLyDlpITnkIbliIblibLnrKZcclxuICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xyXG4gICAgICAvLyBUT0RPIOi/memHjOWSjOa6kOeggeWunueOsOS4jeS4gOagt++8jOa6kOeggeS4reW6lOivpeaYr+WwhuWkmui/h+S6huS4gOS4quWtl+espuS4slxyXG4gICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IHRva2Vuc1R5cGUuZXNjYXBlZENoYXIsIGluZGV4OiBpLCB2YWx1ZTogY2hhciB9KTtcclxuICAgICAgaSsrO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuICAgIC8vIOWkhOeQhuW8gOagh+etviB7XHJcbiAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcclxuICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiB0b2tlbnNUeXBlLm9wZW4sIGluZGV4OiBpLCB2YWx1ZTogY2hhciB9KTtcclxuICAgICAgaSsrO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuICAgIC8vIOWkhOeQhumXreagh+etviB9XHJcbiAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcclxuICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiB0b2tlbnNUeXBlLmNsb3NlLCBpbmRleDogaSwgdmFsdWU6IGNoYXIgfSk7XHJcbiAgICAgIGkrKztcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5aSE55CG5a6a5LmJ55qE6ZqP5py657G75Z6LbmFtZVxyXG4gICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XHJcbiAgICAgIGxldCBuYW1lID0gXCJcIjtcclxuICAgICAgbGV0IGogPSBpICsgMTtcclxuICAgICAgLy8g5Y+Y6YeP5Y+q6IO95pivMC05IGEteiBBLVogXyjkuIvmu5Hnur8pLOi/meWSjOW+iOWkmueahOe8lueoi+ivreiogOS4reWPmOmHj+eahOWumuS5ieaYr+S4gOiHtOeahFxyXG4gICAgICB3aGlsZSAoaiA8IHN0ckxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcclxuXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgLy8gYDAtOWBcclxuICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XHJcbiAgICAgICAgICAvLyBgQS1aYFxyXG4gICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcclxuICAgICAgICAgIC8vIGBhLXpgXHJcbiAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcclxuICAgICAgICAgIC8vIGBfYFxyXG4gICAgICAgICAgY29kZSA9PT0gOTVcclxuICAgICAgICApIHtcclxuICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIOWmguaenOWQjeensOS4jeWtmOWcqCzliJnmj5DnpLrnsbvlnovplJnor69cclxuICAgICAgaWYgKCFuYW1lKSB0aHJvdyBuZXcgVHlwZUVycm9yKGBNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0ICR7aX1gKTtcclxuICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiB0b2tlbnNUeXBlLm5hbWUsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcclxuICAgICAgLy8g6Leo5Zu95Lit6Ze055qE5YC8LOebtOaOpeWIsG5hbWXkuYvlkI5cclxuICAgICAgaSA9IGo7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWkhOeQhnBhdHRlcm7ojIPlvI/nmoTmg4XlhrVcclxuICAgIGlmIChjaGFyID09PSBcIihcIikge1xyXG4gICAgICBsZXQgaiA9IGkgKyAxO1xyXG4gICAgICBsZXQgcGF0dGVybiA9IFwiXCI7XHJcbiAgICAgIC8vIOeUqOadpeWIpOaWreaYr+WQpumXreWQiFxyXG4gICAgICBsZXQgY291bnQgPSAxO1xyXG5cclxuICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcclxuICAgICAgICB0aHJvdyBuZXcgU3ludGF4RXJyb3IoYFBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXCI/XCIgYXQgJHtqfWApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB3aGlsZSAoaiA8IHN0ckxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IHBhdHRlcm5DaGFyID0gc3RyW2pdO1xyXG4gICAgICAgIC8vIOWmguaenOaYryBcXCAs5YiZ5re75Yqg5Lik5qyhLOWboOS4uuWcqOavlOi+g+eahOaXtuWAmSzlrZfnrKbkuLJcXFxcIOS8muiiq+i9rOS5ieaIkCBcXCDmiYDku6Xlrp7pmYXkuIrkuIDkuKpcXOWvueW6lOS4pOS4quWtl+espizpnIDopoHliqDkuKTmrKFcclxuICAgICAgICBpZiAocGF0dGVybkNoYXIgPT09IFwiXFxcXFwiKSB7XHJcbiAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwYXR0ZXJuQ2hhciA9PT0gXCIpXCIpIHtcclxuICAgICAgICAgIC8vIOWmguaenOaYrynlsLHpl63lkIjliKTmlq3nu5PmnZ9cclxuICAgICAgICAgIGNvdW50LS07XHJcbiAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgaisrO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHBhdHRlcm5DaGFyID09PSBcIihcIikge1xyXG4gICAgICAgICAgLy8g5aWX5aiDXHJcbiAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYENhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0ICR7an1gKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XHJcbiAgICAgIH1cclxuICAgICAgLy8gY291bnQg5a2Y5Zyo6K+05piO5rKh5pyJ5a6M5YWo6Zet5ZCI5oiW6ICF6Zet5ZCI6L+H5aSa5LqGXHJcbiAgICAgIGlmIChjb3VudCkgdGhyb3cgbmV3IFR5cGVFcnJvcihgVW5iYWxhbmNlZCBwYXR0ZXJuIGF0ICR7aX1gKTtcclxuICAgICAgaWYgKCFwYXR0ZXJuKSB0aHJvdyBuZXcgVHlwZUVycm9yKGBNaXNzaW5nIHBhdHRlcm4gYXQgJHtpfWApO1xyXG5cclxuICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiB0b2tlbnNUeXBlLnBhdHRlcm4sIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcclxuICAgICAgaSA9IGo7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOS4jeaYr+S7peS4iuWQhOenjeaDheWGtSzlsLHlhajpg6jorqTkuLrmmK8g5a2X56ymIChjaGFyKVxyXG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiB0b2tlbnNUeXBlLmNoYXIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XHJcbiAgfVxyXG4gIHRva2Vucy5wdXNoKHsgdHlwZTogdG9rZW5zVHlwZS5lbmQsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcclxuICByZXR1cm4gdG9rZW5zO1xyXG59XHJcblxyXG4vKipcclxuICog5qC55o2u6K+N5rOV5YiG5p6Q57uT5p6cIOWIhuivjSAs5oiW6ICF6K+05piv55Sf5oiQ5LiA5Liq5qCH5YeG5YyW55qE5pWw57uELOeUqOS6juWQjue7rei/nue7reaAp+WkhOeQhlxyXG4gKiDov5Tlm57lrZfnrKbkuLLmiJbogIUg6K+N5rOV5a+56LGhXHJcbiAqIOivjeazleWvueixoee7k+aehFxyXG4gKiB7XHJcbiAqICAgICAgbW9kaWZpZXI6JycsIC8vIOS/rumlsOesplxyXG4gICAgICAgIG5hbWU6J3Rlc3QnLCAvLyDlkI3np7BcclxuICAgICAgICBwYXR0ZXJuOidbXlxcXFwvI1xcXFw/XSs/JywgLy8g6IyD5byP77yI55So5LqO5a6e6ZmF5Yy56YWN77yJXHJcbiAgICAgICAgcHJlZml4OicvJywgLy8g5YmN57yAXHJcbiAgICAgICAgc3VmZml4OicnLCAvLyDlkI7nvIBcclxuICogfVxyXG4gKi9cclxuLy8gVE9ETyDlkI7nu63lj6/ku6XogIPomZHlsIbliIbor43lmajlkozmoLzlvI/ljJbnmoTnu5/kuIDmlbTlkIjvvIznm7TmjqXovpPlh7rliIbor43nu5PmnpxcclxuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zID0ge30pIHtcclxuICBjb25zdCB0b2tlbnMgPSBsZXhlcihzdHIpO1xyXG4gIGNvbnN0IHsgcHJlZml4ZXMgPSBcIi4vXCIgfSA9IG9wdGlvbnM7XHJcbiAgLy8gZGVmYXVsdFBhdHRlcm4g5bqU6K+l5piv5LiA5Liq54m55oCn55qE6IyD5byPLOeUqOadpeWMuemFjeS7u+aEj+WAvOWNs+WPryzlrp7pmYXkuIrnlKjmjpLpmaTms5Us5Zyo6Lev55Sx55qE5Yik5pat6YeMLOS4jeiDveeul+WcqOi3r+eUseS4reeahOWunumZheS4iuWPquaciSAvKHBhdGhuYW1lKSAjKGhhc2gpID8oc2VhcmNoKVxyXG4gIGNvbnN0IGRlZmF1bHRQYXR0ZXJuID0gYFteJHtlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIil9XSs/YDtcclxuICBsZXQgaSA9IDA7XHJcbiAgY29uc3QgdG9rZW5zTGVuZ3RoID0gdG9rZW5zLmxlbmd0aDtcclxuICBsZXQgcmVzdWx0ID0gW107XHJcbiAgbGV0IHBhdGggPSBcIlwiO1xyXG4gIGxldCBrZXkgPSAwO1xyXG5cclxuICAvKipcclxuICAgKiDlsJ3or5Xojrflj5bmjIflrprnsbvlnovnmoTlgLws5LiN5a2Y5Zyo5YiZ6L+U5ZuebnVsbFxyXG4gICAqL1xyXG4gIGNvbnN0IHRyeUNvbnN1bWUgPSAodHlwZSkgPT4ge1xyXG4gICAgbGV0IHJlc3VsdCA9IG51bGw7XHJcbiAgICBpZiAoaSA8IHRva2Vuc0xlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSkge1xyXG4gICAgICByZXN1bHQgPSB0b2tlbnNbaV0udmFsdWU7XHJcbiAgICAgIGkrKztcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICog5b+F6aG76I635Y+W5oyH5a6a5YC8LOWmguaenOS4jeaYr+aMh+WumuWAvOWImeaKpemUmVxyXG4gICAqL1xyXG4gIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XHJcbiAgICAvLyDmu6HotrPmnJ/mnJss5YiZ6L+U5Zue5YC8XHJcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcbiAgICAvLyDkuI3mu6HotrPmnJ/mnJvliJnmj5DnpLpcclxuICAgIGNvbnN0IHsgdHlwZTogbmV4dFR5cGUsIGluZGV4IH0gPSB0b2tlbnNbaV07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBVbmV4cGVjdGVkICR7bmV4dFR5cGV9IGF0ICR7aW5kZXh9LCBleHBlY3RlZCAke3R5cGV9YCk7XHJcbiAgfTtcclxuICAvKipcclxuICAgKiDojrflj5blm7rlrprnmoTliY3nvIBcclxuICAgKi9cclxuICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gXCJcIjtcclxuICAgIHZhciB2YWx1ZTtcclxuICAgIHdoaWxlIChcclxuICAgICAgKHZhbHVlID1cclxuICAgICAgICB0cnlDb25zdW1lKHRva2Vuc1R5cGUuY2hhcikgfHwgdHJ5Q29uc3VtZSh0b2tlbnNUeXBlLmVzY2FwZWRDaGFyKSlcclxuICAgICkge1xyXG4gICAgICByZXN1bHQgKz0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH07XHJcblxyXG4gIHdoaWxlIChpIDwgdG9rZW5zTGVuZ3RoKSB7XHJcbiAgICAvLyDojrflj5ZjaGFyXHJcbiAgICBjb25zdCBjaGFyID0gdHJ5Q29uc3VtZSh0b2tlbnNUeXBlLmNoYXIpO1xyXG4gICAgLy8g6I635Y+WbmFtZSDlkowgcGF0dGVyblxyXG4gICAgY29uc3QgbmFtZSA9IHRyeUNvbnN1bWUodG9rZW5zVHlwZS5uYW1lKTtcclxuICAgIGNvbnN0IHBhdHRlcm4gPSB0cnlDb25zdW1lKHRva2Vuc1R5cGUucGF0dGVybik7XHJcbiAgICAvLyBuYW1lIOaIluiAhSBwYXR0ZXJuIOWtmOWcqOivtOaYjuS6huWtmOWcqOWMuemFjeexu+Weiyzku47mnKzotKjkuIrnnIss6L+Z5Lik56eN5oOF5Ya155qE5aSE55CG6YC76L6R5piv5LiA6Ie055qELOmDveaYr+iuvue9rm5hbWXlgLws54S25ZCO6K6+572u6IyD5byPXHJcbiAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XHJcbiAgICAgIC8vIOWJjee8gOm7mOiupOS4umNoYXLnmoTlgLxcclxuICAgICAgY29uc3QgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xyXG4gICAgICAvKipcclxuICAgICAgICog5aaC5p6c5YmN57yA5LiN5a2Y5ZyoLOWImeihqOaYjmNoYXLmmK9wYXRo55qE5LiA6YOo5YiGLOWmguaenOWJjee8gOWtmOWcqOWImeebtOaOpeS9nOS4uuWJjee8gOS9v+eUqOWNs+WPryzov5jlrZjlnKjkuIDnp43nibnmrornmoTlnLrmma8s5bCx5piv5Zu65a6a55qE5YC85ZCO5Y+I5Yy56YWN5LqG5a+55bqU55qE5pWw5o2uLOaYr+S4gOS4quWKqOaAgeeahOi3r+eUsVxyXG4gICAgICAgKiDkuL7kuIDkuKrkvovlrZAs5Yqo5oCB6Lev55Sx55qE5YmN57yA6YO95pivL2RldGFpbCArIOWvueW6lOivpuaDhWlk55qE5b2i5byPLOeUqOS6jueahOWcuuaZr+WPr+iDveaYr+Wfi+eCueetiSzmmoLml7bogIPomZHkuI3liLDlrp7pmYXnmoTkvb/nlKjnlKjpgJQs5L2G5piv5bqU6K+l5pyJ5a2Y5Zyo55qE5Y+v6IO95oCnXHJcbiAgICAgICAqL1xyXG4gICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xyXG4gICAgICAgIHBhdGggKz0gcHJlZml4O1xyXG4gICAgICAgIHByZWZpeCA9IFwiXCI7XHJcbiAgICAgIH1cclxuICAgICAgLyoqXHJcbiAgICAgICAqIOWmguaenHBhdGjlrZjlnKjlsLHnm7TmjqXorr7nva7kuoZwYXRoLOWboOS4uuWvueS6jnBhdGjlrZjlnKjnmoTlnLrmma8s5pWw5o2u5piv5Zu65a6a5LqG6Lev55Sx55qELOaJgOS7peiMg+W8j+WSjOmFjee9rueahOWFtuS7luadoeS7tumDveaYr+ayoeacieeUqOeahFxyXG4gICAgICAgKiDmsqHmnInliY3nvIDnmoTml7blgJks5a6e6ZmF5LiK6K+05piO5LiK5LiA5Liq5pWw5o2u5piv5LiA5Liq55qE5Zu65a6a5YC8LOi/meWwseWPr+iDveaYr+S4gOS4quWKqOaAgei3r+eUseeahOWcuuaZr1xyXG4gICAgICAgKi9cclxuICAgICAgaWYgKHBhdGgpIHtcclxuICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcclxuICAgICAgICBwYXRoID0gXCJcIjtcclxuICAgICAgfVxyXG4gICAgICAvLyDpnIDopoHmjInnhafliqjmgIHlj4LmlbDnmoTljLnphY3lnLrmma/lpITnkIYs5pyJbmFtZeWwseS9v+eUqG5hbWUs5rKh5pyJ5bCx6buY6K6ka2V55YC85Y2z5Y+vLOWvueS6juS4gOS4qnVybOiAjOiogCzlrp7pmYXkuIrln7rmnKxrZXnkuI3kvJrlpKrlpJos5L+u6aWw56ym5qCH6K+GMeS4quWkmuS4queahOWFs+ezuyzlsLHmmK/mraPliJnooajovr7lvI/kuK3nmoQrID8gKlxyXG4gICAgICByZXN1bHQucHVzaCh7XHJcbiAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcclxuICAgICAgICBwcmVmaXgsXHJcbiAgICAgICAgc3VmZml4OiBcIlwiLFxyXG4gICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXHJcbiAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUodG9rZW5zVHlwZS5tb2RpZmllcikgfHwgXCJcIixcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOWIhuWJsuespuW9k+S9nOaYr+i3r+eUseeahOS4gOmDqOWIhizlj6/og73lsZ7kuo7kuIDnp43lpYfmgKrnmoTot6/nlLHlvaLlvI8s5YW25LuW5oOF5Ya15bCx5piv5LiN5pat55qE5ou85o6lY2hhciznn6XpgZPml6Dms5Xmi7zmjqXlrozmiJAo5pys6LSo5LiK5piv5bCG5LmL5YmN5ouG5YiG55qE5YiG6K+N57uE5ZCI6LW35p2lKVxyXG4gICAgY29uc3QgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUodG9rZW5zVHlwZS5lc2NhcGVkQ2hhcik7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgcGF0aCArPSB2YWx1ZTtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5aaC5p6ccGF0aOWtmOWcqOWwseebtOaOpeWhq+WFhVxyXG4gICAgaWYgKHBhdGgpIHtcclxuICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XHJcbiAgICAgIHBhdGggPSBcIlwiO1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvcGVuID0gdHJ5Q29uc3VtZSh0b2tlbnNUeXBlLm9wZW4pO1xyXG4gICAgaWYgKG9wZW4pIHtcclxuICAgICAgLyoqXHJcbiAgICAgICAqIG9wZW7kuK3nmoTlhoXlrrnlrp7pmYXkuIrkuZ/lj6rljIXlkKvkuInnp43nsbvlnoss6aaW5YWI5YmN6Z2iY2hhcuexu+Wei+eahCzkuIDlvIDlp4vojrflj5bliLDnmoRjaGFy57G75Z6L55qE5a6e6ZmF5LiK6YO95piv5YmN57yALOWboOS4uui/memDqOWIhuaYr+S4jeWPmOeahFxyXG4gICAgICAgKiDnhLblkI7ojrflj5bliLDnmoTnsbvlnovkuLogbmFtZSDlkowgcGF0dGVybiDkuKTnp40sICDmnIDlkI7nmoRjaGFy57G75Z6L5oyJ54Wn5ZCO57yA5p2lXHJcbiAgICAgICAqIOS9huaYr+W/hemhu+imgW9wZW4gY2xvc2Ug57uE5ZCI57uT5bC+LOS4jeiDveWkmuS4qm9wZW4s6L+Z56eN5oOF5Ya15LiN5YGa5aSE55CGXHJcbiAgICAgICAqL1xyXG4gICAgICBjb25zdCBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xyXG4gICAgICBjb25zdCBuYW1lID0gdHJ5Q29uc3VtZSh0b2tlbnNUeXBlLm5hbWUpIHx8IFwiXCI7XHJcbiAgICAgIGNvbnN0IHBhdHRlcm4gPSB0cnlDb25zdW1lKHRva2Vuc1R5cGUucGF0dGVybikgfHwgXCJcIjtcclxuICAgICAgY29uc3Qgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcclxuICAgICAgbXVzdENvbnN1bWUodG9rZW5zVHlwZS5jbG9zZSk7XHJcbiAgICAgIC8vIOaPkuWFpeWIpOaWreexu+WeiyxuYW1l5Y+q5pyJ5Zyo5a2Y5ZyoIG5hbWUg5oiW6ICFIHBhdHRlcm4g55qE5pe25YCZ5omN5piv5pyJ5Lu35YC855qE77yM5ZCm5YiZ5a6e6ZmF5LiK5bCx5piv5LiA5Liq5Zu65a6a5YC8XHJcbiAgICAgIHJlc3VsdC5wdXNoKHtcclxuICAgICAgICBuYW1lOiBuYW1lIHx8IChwYXR0ZXJuID8ga2V5KysgOiBcIlwiKSxcclxuICAgICAgICBwcmVmaXgsXHJcbiAgICAgICAgc3VmZml4LFxyXG4gICAgICAgIHBhdHRlcm46IG5hbWUgJiYgIXBhdHRlcm4gPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm4sXHJcbiAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUodG9rZW5zVHlwZS5tb2RpZmllcikgfHwgXCJcIixcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG4gICAgLy8g5b2T5omA5pyJ55qE5oOF5Ya16YO95LiN5Yy56YWN55qE5pe25YCZLOW/hemhu+aYr2VuZOe7k+WwvlxyXG4gICAgbXVzdENvbnN1bWUodG9rZW5zVHlwZS5lbmQpO1xyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vKipcclxuICog5Yik5pat5piv5ZCm5Yy65YiG5aSn5bCP5YaZXHJcbiAqL1xyXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XHJcbiAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlsIbliIbor43lpITnkIbov4fnmoTmlbDmja4s6L2s5o2i5oiQ5q2j5YiZ6KGo6L6+5byPXHJcbiAqL1xyXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcclxuICBjb25zdCB7XHJcbiAgICBzdHJpY3QgPSBmYWxzZSxcclxuICAgIHN0YXJ0ID0gdHJ1ZSxcclxuICAgIGVuZCA9IHRydWUsXHJcbiAgICBlbmNvZGUgPSAoeCkgPT4geCxcclxuICB9ID0gb3B0aW9ucztcclxuICAvLyDorr7nva7nmoTnu5PlsL7lrZfnrKbovazkuYnljJblpITnkIZcclxuICBjb25zdCBlbmRzV2l0aCA9IGBbJHtlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKX1dfCRgO1xyXG4gIC8vIOWMuemFjeeahOacgOWQjuS4gOS4quivjeeahOi9rOS5ieWMluWkhOeQhlxyXG4gIGNvbnN0IGRlbGltaXRlciA9IGBbJHtlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIil9XWA7XHJcbiAgbGV0IHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XHJcblxyXG4gIC8vIOmBjeWOhuWIhuivjeaVsOe7hFxyXG4gIGZvciAoY29uc3QgdG9rZW4gb2YgdG9rZW5zKSB7XHJcbiAgICAvLyDlpoLmnpzmmK/lrZfnrKbkuLLlsLHnm7TmjqXmi7zmjqXliLByb3V0ZeS4rVxyXG4gICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyDliIbor43lr7nosaHnmoTml7blgJnvvIzlhYjlpITnkIbliY3lkI7nvIDnmoTmraPliJlcclxuICAgICAgY29uc3QgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcclxuICAgICAgY29uc3Qgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcclxuXHJcbiAgICAgIC8vIOWmguaenOWtmOWcqOiMg+W8j1xyXG4gICAgICBpZiAodG9rZW4ucGF0dGVybikge1xyXG4gICAgICAgIC8vIOiuvue9ruWcqGtleXPkuK3kuLvopoHmmK/kuLrkuoblkI7nu63lpITnkIZ1cmzkuK1wYXJhbXPmlbDmja5cclxuICAgICAgICBpZiAoa2V5cykge1xyXG4gICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XHJcbiAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xyXG4gICAgICAgICAgICAvLyDlsIYgKyDlkowgKiDljZXni6zlpITnkIbkuobvvIzljbPmiYvliqjnmoTorr7nva7kuIDkuKrlrZjlnKjnmoTvvIznhLblkI7lho3orr7nva7kuIDkuKoqIOeahO+8jOeEtuWQjuaVtOS9k+S4uiA/XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcclxuICAgICAgICAgICAgcm91dGUgKz0gYCg/OiR7cHJlZml4fSgoPzoke3Rva2VuLnBhdHRlcm59KSg/OiR7c3VmZml4fSR7cHJlZml4fSg/OiR7dG9rZW4ucGF0dGVybn0pKSopJHtzdWZmaXh9KSR7bW9kfWA7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByb3V0ZSArPSBgKD86JHtwcmVmaXh9KCR7dG9rZW4ucGF0dGVybn0pJHtzdWZmaXh9KSR7dG9rZW4ubW9kaWZpZXJ9YDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8g5rKh5pyJ5YmN5ZCO57yA5bCx55u05o6l6K6+572u5q2j5YiZ5Y2z5Y+vXHJcbiAgICAgICAgICByb3V0ZSArPSBgKCR7dG9rZW4ucGF0dGVybn0pJHt0b2tlbi5tb2RpZmllcn1gO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBUT0RPIOayoeacieiMg+W8j++8jOivtOaYjuaYrz8/PyAs5rKh6ICD6JmR5riF5qWaXHJcbiAgICAgICAgcm91dGUgKz0gYCg/OiR7cHJlZml4fSR7c3VmZml4fSkke3Rva2VuLm1vZGlmaWVyfWA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLy8g5piv5ZCm5a2X56ym5Liy55qE57uT5bC+5Yy56YWNXHJcbiAgaWYgKGVuZCkge1xyXG4gICAgLy8g5YWB6K645bC+6YOo5YiG5Ymy56ym5aSE55CGXHJcbiAgICBpZiAoIXN0cmljdCkge1xyXG4gICAgICByb3V0ZSArPSBgJHtkZWxpbWl0ZXJ9P2A7XHJcbiAgICB9XHJcbiAgICAvLyDmmK/lkKborr7nva7nu5PmnZ/lrZfnrKbvvIzlpoLmnpzmsqHmnInliJnpu5jorqTkuLokIOWQpuWImeaMh+WumuWbuuWumuWAvFxyXG4gICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IGAoPz0ke2VuZHNXaXRofSlgO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyDlpoLmnpzmnIDlkI7ku6XmmK/lrZfnrKbkuLLvvIzliJnliKTmlq3mmK/lkKbmmK/lsL7pg6jliIblibLnrKZcclxuICAgIGNvbnN0IGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcclxuICAgIGNvbnN0IGlzRW5kRGVsaW1pdGVkID1cclxuICAgICAgdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXHJcbiAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxyXG4gICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xyXG5cclxuICAgIC8vIOWFgeiuuOWwvumDqOWIhuWJsuespuWkhOeQhlxyXG4gICAgaWYgKCFzdHJpY3QpIHtcclxuICAgICAgcm91dGUgKz0gYCg/OiR7ZGVsaW1pdGVyfSg/PSR7ZW5kc1dpdGh9KSk/YDtcclxuICAgIH1cclxuXHJcbiAgICAvLyDmnIDlkI7kuIDkuKrkuI3mmK/nu5PmnZ/liIblibLnrKbnmoTml7blgJnvvIzmiYvliqjmt7vliqBcclxuICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcclxuICAgICAgcm91dGUgKz0gYCg/PSR7ZGVsaW1pdGVyfXwke2VuZHNXaXRofSlgO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIOWtl+espuS4suWkhOeQhlxyXG4gKi9cclxuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xyXG4gIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmraPliJnovazmraPliJlcclxuICovXHJcbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcclxuICAvLyDmraPliJnnmoTlpITnkIblpoLmnpzmsqHmnIlrZXlz55qE77yM55u05o6l6L+U5Zue5Y2z5Y+vXHJcbiAgaWYgKCFrZXlzKSByZXR1cm4gcGF0aDtcclxuICAvLyBUT0RPIOWPquaYjueZveS6huimgeWwhiDmsqHmh4IgIFxcKCDlvIDlpLQgICAoPzpcXD88KC4qPyk+KSDpnZ7ojrflj5bljLnphY0/POS7u+aEj+WAvD4g55qE5pWw5o2uICAgICguKj8pIOS7u+aEj+Wtl+espuWtmOWcqDDkuKrmiJYx5Liq77yM5bm26I635Y+WICAgICAgKD8hXFw/KSDkuLrpnZ4/XHJcbiAgY29uc3QgZ3JvdXBzUmVnZXhwID0gL1xcKCg/OlxcPzwoLio/KT4pPyg/IVxcPykvZztcclxuXHJcbiAgbGV0IGluZGV4ID0gMDtcclxuICBsZXQgZXhlY1Jlc3VsdCA9IGdyb3Vwc1JlZ2V4cC5leGVjKHBhdGguc291cmNlKTtcclxuICB3aGlsZSAoZXhlY1Jlc3VsdCkge1xyXG4gICAga2V5cy5wdXNoKHtcclxuICAgICAgLy8gVXNlIHBhcmVudGhlc2l6ZWQgc3Vic3RyaW5nIG1hdGNoIGlmIGF2YWlsYWJsZSwgaW5kZXggb3RoZXJ3aXNlXHJcbiAgICAgIG5hbWU6IGV4ZWNSZXN1bHRbMV0gfHwgaW5kZXgrKyxcclxuICAgICAgcHJlZml4OiBcIlwiLFxyXG4gICAgICBzdWZmaXg6IFwiXCIsXHJcbiAgICAgIG1vZGlmaWVyOiBcIlwiLFxyXG4gICAgICBwYXR0ZXJuOiBcIlwiLFxyXG4gICAgfSk7XHJcbiAgICBleGVjUmVzdWx0ID0gZ3JvdXBzUmVnZXguZXhlYyhwYXRoLnNvdXJjZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcGF0aDtcclxufVxyXG5cclxuLyoqXHJcbiAqIOaVsOe7hOi9rOato+WImVxyXG4gKi9cclxuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xyXG4gIC8vIOW+queOr+iwg+eUqHBhdGhz77yM5q+P5Liq5Y2V54us5aSE55CG77yM54S25ZCO55Sf5oiQ5LiA5LiqfCDnmoTljLnphY3lvaLlvI/nmoTmraPliJlcclxuICBjb25zdCBwYXJ0cyA9IHBhdGhzLm1hcCgocGF0aCkgPT4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZSk7XHJcbiAgcmV0dXJuIG5ldyBSZWdFeHAoYCg/OiR7cGFydHMuam9pbihcInxcIil9KWAsIGZsYWdzKG9wdGlvbnMpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfEFycmF5fFJlZ0V4cH0gcGF0aFxyXG4gKiBAcGFyYW0ge0FycmF5fSBrZXlzXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXHJcbiAqL1xyXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xyXG4gIC8vIFRPRE8g5pWw57uE5ZKM5q2j5YiZ55qE6YO95LiN5aSq5LqG6Kej5L2/55So5Zy65pmvXHJcbiAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcclxuICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSkgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XHJcbiAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xyXG59XHJcblxyXG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGF0aC10by1yZWdleHAuanMubWFwXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fNjk4X187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDk5Myk7XG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==
