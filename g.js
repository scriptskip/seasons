var g = {
	a: {
		bg: { pause: function () {} },
		set l (l) { for (var id in l) { var a = new Audio (l[id]); g.a[id] = a; }; },
		p: function (a, b, c) {
			if (c) {
				g.a.bg.pause ();
				g.a.bg = (typeof (a) == 'string') ? new Audio (a) : a;
				g.a.bg.loop = true;
				g.a.bg.volume = b || 0.5;
				g.a.bg.play ();
			} else {
				if (typeof (a) == 'string') { a = new Audio (a); };
				a.volume = b || 0.7;
				a.play ();
			};
			return a;
		}
	},

	c: function () {
		var c = g.w.d.createElement ('canvas');
			c.c = c.getContext ('2d');
			c.d = true;
			c.ff = 'Arial';
			c.z = 0;

			c.a = function () { c.h (g.w.h); c.w (g.w.w); g.c.d = true; };
			c.b = function (c) { g.c.style.background = c; };
			c.bg = function (i) { g.c.style.background = 'transparent'; g.w.d.b.style.background = 'url(' + i.src + ')'; };
			c.fs = function (o) {
				var fs = o.h || c.H * 0.5;
				g.c.c.font = fs + 'px ' + c.ff;

				var w = g.c.c.measureText (o.t).width;
				var W = o.w * c.W;
				while (Math.abs (w - W) > 5) {
					fs = (w < W) ? fs * 1.6 : fs * 0.8;
					g.c.c.font = fs + 'px ' + c.ff;
					w = g.c.c.measureText (o.t).width;
				};
				return fs;
			};
			c.h = function (h) { c.H = h; c.height = c.H; };
			c.hk = function (o) { return (o.hk) ? (o.hk * o.w * g.c.W) / g.c.H : o.h };
			c.hwxy = function (o, x, y) {
				var r = {}; x = x || 0.5; y = y || 0.5;
				o.h = g.c.hk (o);
				o.w = g.c.wk (o);
				r.x = o.x - x * o.w;
				r.y = o.y - y * o.h;
				r.h = o.h;
				r.w = o.w;
				return r;
			};
			c.w = function (w) { c.W = w; c.width = c.W; };
			c.wk = function (o) { return (o.wk) ? (o.wk * o.h * g.c.H) / g.c.W : o.w };
			c.wipe = function (o) {
				var s = [];
				for (var i = g.s.length; i--;) {
					for (var k in o) {
						if (o[k] != g.s[i][k]) s.push (g.s[i]);
					};
				};
				g.s = s;
			};

		c.u = function () { switch (g.e.type) {
			case 'resize': c.a (); break;
		};};
		c.a ();
		g.w.d.b.appendChild (c);
		delete g.c;
		g.c = c;
	},

	cheat: {
		get fall () {
			var sun = g.o.find (function (o) { return o.id == 'sun'; });
				sun.season = 'summer'; sun.tan = 89;
				sun.time ();
		},
		get spring () {
			var sun = g.o.find (function (o) { return o.id == 'sun'; });
				sun.season = 'winter'; sun.tan = 269;
				sun.time ();
		},
		get summer () {
			var sun = g.o.find (function (o) { return o.id == 'sun'; });
				sun.season = 'spring'; sun.tan = 359;
				sun.time ();
		},
		get winter () {
			var sun = g.o.find (function (o) { return o.id == 'sun'; });
				sun.season = 'fall'; sun.tan = 179;
				sun.time ();
		}
	},

	d: function (d) {
		if (d) {
			d.type = 'box';
			d.type = (d.a != undefined) ? 'line' : d.type;
			d.type = (d.i != undefined) ? 'image' : d.type;
			d.type = (d.path != undefined) ? 'path' : d.type;
			d.type = (d.r) ? 'ring' : d.type;
			d.type = (d.t) ? 'text' : d.type;
			d.z = d.z || 0; g.c.z = (d.z > g.c.z) ? d.z : g.c.z;

			g.c.d = d.d || false;
			g.s.push (d);
		};

		if (g.c.d) {
			g.c.c.clearRect (0, 0, g.c.W, g.c.H);
			for (var z = 0; z <= g.c.z; z++) {
				for (var id = g.s.length; id--;) {
					var c = g.s[id];
					if (c.z == z) {
						var a = c.a * g.c.W >> 0;
						var b = c.b * g.c.H>> 0;
						var cos = c.cos || 2 * Math.PI;
						var h = c.h * g.c.H >> 0;
						var r = c.r * Math.min (g.c.H, g.c.W) >> 0;
						var sin = c.sin || 0;
						var w = c.w * g.c.W >> 0;
						var x = c.x * g.c.W >> 0;
						var y = c.y * g.c.H >> 0;

						if (c.f) g.c.c.fillStyle = c.f;
						if (c.lw) g.c.c.lineWidth = Math.floor (c.lw * Math.min (g.c.H, g.c.W));
						if (c.s) g.c.c.strokeStyle = c.s;
						if (c.tan) {
							var rx = x + 0.5 * w || r; ry = y + 0.5 * h || r;
							g.c.c.save ();
							g.c.c.translate (rx, ry);
							g.c.c.rotate (c.tan * Math.PI / 180);
							g.c.c.translate (-rx, -ry);
						};

						switch (c.type) {
							case 'box':
								if (c.f) g.c.c.fillRect (x, y, w, h);
								if (c.s) g.c.c.strokeRect (x, y, w, h);
							break;

							case 'image':
								if (w) g.c.c.drawImage (c.i, x, y, w, h); else g.c.c.drawImage (c.i, x, y);
							break;

							case 'line':
								g.c.c.beginPath (); g.c.c.moveTo (a, b); g.c.c.lineTo (x, y);
								if (c.f) g.c.c.fill (); if (c.s) g.c.c.stroke ();
							break;

							case 'path':
								if (c.path == 'begin') {
									g.c.c.beginPath ();
									g.c.c.moveTo (a, b); g.c.c.lineTo (x, y);
								};
								if (c.path == true) {
									g.c.c.lineTo (a, b); g.c.c.lineTo (x, y);
								};
								if (c.path == 'end') {
									g.c.c.lineTo (a, b); g.c.c.lineTo (x, y);
									g.c.c.closePath ();
								 	if (c.f) g.c.c.fill (); if (c.s) g.c.c.stroke ();
								};
							break;

							case 'ring':
								g.c.c.beginPath (); g.c.c.arc (x, y, r, sin, cos);
								if (c.f) g.c.c.fill (); if (c.s) g.c.c.stroke ();
							break;

							case 'text':
								if (h || w) { var fs = (w) ? g.c.fs (c) : h; g.c.c.font = fs + 'px ' + g.c.ff; };
								if (c.ta) g.c.c.textAlign = c.ta;
								if (c.tb) g.c.c.textBaseline = c.tb;
								if (c.f) g.c.c.fillText (c.t, x, y);
								if (c.s) g.c.c.strokeText (c.t, x, y);
							break;
						};

						if (c.tan) {
							g.c.c.restore ();
						};
					};
				};
			};
			g.c.d = false;
			if (g.op.fps) { g.op.fps  = g.s.length; };
		};
	},

	e: function () {
		var e = {};
			e._ = function () { return false; };
			e.$ = function (event) { g.e = event; g.u (); g.d (); };

		g.w.onclick = e.$;
		g.w.oncontextmenu = e._;
		g.w.onmousedown = e.$;
		g.w.onmousemove = e.$;
		g.w.onmouseup = e.$;
		g.w.onresize = e.$;
		g.w.ontick = e.$;

		delete g.e;
		g.e = e;
	},

	g: {
		set area (a) {
			a.tag = 'area';
			a.type = a.type || a.tag;
			a.id = a.id || a.type + g.o.length;

			a.a0 = a.a0 || g.a[g.op.area[a.type].a0] || g.a.tock;
			a.a1 = a.a1 || g.a[g.op.area[a.type].a1] || g.a.dig;
			a.hk = a.hk || g.op.area[a.type].hk || 1.8;
			a.i = a.i || g.i[g.op.area[a.type].i]; a.i1 = a.i1 || g.i[g.op.area[a.type].i1];
			a.price = a.price || g.op.area[a.type].price || 0;
			a.t = a.t || g.op.area[a.type].t;
			a.w = a.w || g.op.area[a.type].w || 0.04;
			a.x = a.x || g.r (g.op.dock.x - 0.4 * g.op.dock.w, g.op.dock.x + 0.4 * g.op.dock.w); a.y = a.y || g.op.dock.y;

			a.tick = function () {
				this.tax ();
				if (this.planted) {
					this.t += g.w.i;
					if (this.t > a.t) {
						this.i = g.i[g.op.area[this.type].i];
						this.i0 = g.i[g.op.area[this.type].i];
						this.planted = false;
						this.b ();
						this.s ();
						if (g.op.season != 'winter') {
							if (this.seed) {
								var item = g.op.area[this.type][this.seed].get;
								g.g.item = { type: item }; g.g.item = { type: item };
							};
						} else {
							g.a.p (g.a.fail);
						};
					};
				};
			};

			a.up = function () {
				for (var id = g.o.length; id--;) {
					if ((g.o[id].tag == 'item')) {
						var o = g.o[id];
						if ((Math.abs (o.x - this.x) < 0.5 * this.w) && (Math.abs (o.y - this.y) < 0.5 * this.h)) {
							if (g.op.season != 'winter') {
								switch (o.type) {
									case 'wheat':
										g.w.wipe ({ id: o.id }); g.c.wipe ({ id: o.id });
										this.i = g.i[g.op.area[this.type][o.type].i];
										this.i0 = g.i[g.op.area[this.type][o.type].i];
										this.planted = true;
										this.seed = o.type;
										this.t = 0;
										this.b ();
										this.s ();
										g.a.p (o.a1);
										break;
								};
							} else {
								if (g.op.area[this.type][o.type]) {
									g.w.wipe ({ id: o.id }); g.c.wipe ({ id: o.id });
									g.a.p (g.a.fail);
								};
							};
						};
					};
				};
			};

			g.g.build = { a0: a.a0, a1: a.a1, hk: a.hk, id: a.id, i: a.i, i1: a.i1, tag: a.tag, tick: a.tick, type: a.type, up: a.up, w: a.w, x: a.x, y: a.y };
		},

		set b (b) {
			b.id = b.id || 'button' + g.o.length;

			b.a = b.a || function () { g.w.l = b.id; b.wipe (); };
			b.c = b.c; if (b.c) {
				b.c.b = b.c.b || '#000'; b.c.ba = b.c.ba || b.c.b; b.c.bd = b.c.b;
				b.c.t = b.c.t || '#fff'; b.c.ta = b.c.ta || b.c.t; b.c.td = b.c.t;
			};
			b.in = b.in || function () {};
			b.out = b.out || function () {};
			b.over = false;
			b.wp = b.wp || 0.6;
			b.z = b.z || 0;

			b.action = function () { if (b.detect ()) { b.a (); };};

			b.active = function () {
				if (b.detect ()) {
					if (!b.over) {
						b.over = true; b.in ();
						if (b.c) {
							if (b.c.ba) b.c.b = b.c.ba;
							if (b.c.ta) b.c.t = b.c.ta;
						};
						b.s ();
					};
				} else {
					if (b.over) {
						b.over = false; b.out ();
						if (b.c) {
							if (b.c.ba) b.c.b = b.c.bd;
							if (b.c.ta) b.c.t = b.c.td;
						};
						b.s ();
					};
				}};

			b.detect = function () {
				var x = g.e.x || g.e.clientX; var y = g.e.y || g.e.clientY;
					x = x / g.c.W + 0.5 * b.w; y = y / g.c.H + 0.5 * b.h;
				return ((x >= b.x) && (x <= b.x + b.w) && (y >= b.y) && (y <= b.y + b.h));
			};

			b.s = function () {
				g.c.wipe ({ id: b.id });
				var o = g.c.hwxy (b);
				if (b.t) g.d ({ f: b.c.t, h: o.h, id: b.id, t: b.t, ta: 'center', tb: 'middle', w: o.w * b.wp, x: b.x, y: b.y, z: b.z });
				if (b.i) g.d ({ h: o.h, i: b.i, id: b.id, w: o.w, x: o.x, y: o.y, z: b.z });
				if (b.c) g.d ({ f: b.c.b, h: o.h, id: b.id, w: o.w, x: o.x, y: o.y, z: b.z });
				g.c.d = true;
			};

			b.u = function () { switch (g.e.type) {
				case 'mousedown': b.action (); break;
				case 'mousemove': b.active ();  break;
				case 'resize': b.s (); break;
			};};
			b.s ();
			g.o.push (b);
		},

		set build (b) {
			b.tag = b.tag || 'build';
			b.type = b.type || 'build';
			b.id = b.id || b.type + g.o.length;

			b.a0 = b.a0 || g.a[g.op.build[b.type].a0] || g.a.tock; b.a1 = b.a1 || g.a[g.op.build[b.type].a1] || g.a.tock2;
			b.drag = 0; b.drago = 1;
			b.hk = b.hk || g.op[b.tag][b.type].hk || 1.8; b.w = b.w || g.op[b.tag][b.type].w || 0.04;
			b.i = b.i || g.i[g.op[b.tag][b.type].i] || g.i.home; b.i0 = b.i; b.i1 = b.i1;
			b.price = b.price || g.op[b.tag][b.type].price || 0;
			b.power = b.power || (typeof (g.op[b.tag][b.type].power) == 'number') ? g.op[b.tag][b.type].power : undefined || (typeof (g.op[b.tag][b.type].power) == 'number') ? g.r (g.op[b.tag][b.type].power.min, g.op[b.tag][b.type].max, true) : undefined || 0;
			b.t = b.t || g.op[b.tag][b.type].t; b.time = 0;
			b.x = b.x || g.op[b.tag][b.type].x || 0.35; b.y = b.y || g.op[b.tag][b.type].y || 0.87; b.yin = b.y - 0.02;
			b.worked = b.worked || g.op[b.tag][b.type].worked;
			b.z = b.z || 1;

			b.a = function () {
				g.w.wipe ({ id: this.id });
				g.c.wipe ({ id: this.id });
				b.drag = 1;
			};
			b.docked = function () {
				return ((Math.abs (g.op.dock.y - b.y) < 0.5 * g.op.dock.h) && (Math.abs (g.op.dock.x - b.x) < 0.5 * g.op.dock.w));
			};
			b.drop = function () {
				if (b.drag > 2) {
					b.drag = 0;
					b.place ();
					g.c.wipe ({ id: this.id });

					if (b.tabled ()) {
						delete g.op.table.items[b.id];
						g.op.table.items[b.id] = b;
					} else {
						delete g.op.table.items[b.id]
					};

					if (!b.docked () && !b.tabled ()) { g.a.p (b.a1); };

					if (!b.sell ()) { b.b (); };
				};
			};

			b.hint = {};
			b.hint.hide = function () { g.c.wipe ({ id: b.hint.id }); };
			b.hint.show = function () {
				b.hint.id = 'hint' + b.id;
				b.hint.t = 0;
				g.c.wipe ({ id: b.hint.id });
				if (g.op[b.tag][b.type]) {
					g.op[b.hint.id] = g.op[b.tag][b.type].price;
					var o = g.c.hwxy (b);
					g.g.stat = { h: 0.025, i: g.i.yuan, id: b.hint.id, t: b.hint.id, wk: 2, x: b.x, y: b.y + 0.6 * o.h, z: b.z + 1 };
				};
				g.c.d = true;
			};

			b.marked = function () {
				return ((Math.abs (g.op.market.y - b.y) < 0.5 * g.op.market.h) && (Math.abs (g.op.market.x - b.x) < 0.5 * g.op.market.w));
			};
			b.move = function () {
				if (b.drag > 0) { b.drag++;
					b.x = g.e.x / g.c.W; b.y = g.e.y / g.c.H;
					var opt = 100 / (g.w.t / b.drago) >> 0;
					if (opt < 100) { b.drag = 3; b.drago = g.w.t; b.s (); };
				};
			};
			b.in = function () {
				b.hint.show ();
				if (b.docked () || b.tabled ()) {
					this.i = b.i1 || b.i; this.y -= 0.01;
				};
			};
			b.out = function () {
				b.hint.hide ();
				if (b.docked () || b.tabled ()) {
					this.i = b.i0; this.y += 0.01; g.a.p (b.a0);
				};
			};
			b.place = function () {
				if (!b.tabled () && !b.docked () && !b.marked ()) {
					this.placed = true;
					this.time = 0;
				} else {
					this.placed = false;
				};
			};
			b.sell = function () {
				var sell = false;
				if (b.marked ()) {
					sell = true;
					g.w.wipe ({ id: this.id }); g.w.wipe ({ id: 'button' + this.id });
					g.c.wipe ({ id: this.id }); g.c.wipe ({ id: 'button' + this.id });
					g.op.money += b.price;
					g.c.d = true;
					g.a.p (g.a.sell);
				};
				return sell;
			};
			b.tabled = function () {
				return ((Math.abs (g.op.table.y - b.y) < 0.5 * g.op.table.h) && (Math.abs (g.op.table.x - b.x) < 0.5 * g.op.table.w));
			};
			b.tax = function () {
				var tax = g.op[b.tag][b.type].tax;
				if (tax) {
					tax.t = (tax.t) ? tax.t + g.w.i : 1;
					if (tax.t > tax.time) {
						tax.t = 0;
						g.op.money -= tax.price;
					};
				};
			};
			b.tick = b.tick || function () {
				b.tax ();
				if (this.placed) {
					if (this.worked) {
						this.time += g.w.i;
						if (this.time > this.t) {
							this.time = 0;
							var item = g.op[b.tag][b.type].get;
							g.g.item = { type: item };
						};
					};
				};
			};

			b.up = b.up || function () {};

			b.b = function () {
				b.hint.hide ();
				g.g.b = { a: b.a, h: b.h, hk: b.hk, i: b.i, id: 'button' + b.id, in: b.in, out: b.out, w: b.w, wk: b.wk, x: b.x, y: b.y, z: b.z };
			};
			b.s = function () {
				b.hint.hide ();
				g.c.wipe ({ id: b.id });
				var i = b.i1 || b.i;
				var o = g.c.hwxy (b);
				g.h = o.h;
				g.d ({ h: o.h, i: i, id: b.id, w: o.w, x: o.x, y: o.y, z: b.z + 1 });
				g.c.d = true;
			};
			b.u = function () { switch (g.e.type) {
				case 'click': b.drop (); break;
				case 'mousedown': b.hint.hide (); break;
				case 'mousemove': b.move (); break;
				case 'mouseup': b.up (); break;
				case 'tick': b.tick (); break;
			};};
			b.b ();
			g.o.push (b);
		},

		set d (d) {
			d.id = d.id || 'dock';

			d.ahy = 0.7 * g.c.H;
			d.hide = true;
			d.hk = d.hk || g.op[d.id].hk; d.w = d.w || g.op[d.id].w;
			d.i = d.i || g.i[d.id];
			d.x = d.x || g.op[d.id].x; d.y = d.y || g.op[d.id].y;
			d.z = d.z || 0;

			d.ah = function () {
				if (g.op[d.id].auto) {
					if (g.e.y > d.ahy) { if (d.hide) { d.hide = false; d.s (); };
					} else { if (!d.hide) { d.hide = true; g.c.wipe ({id: d.id}); g.c.d = true; };};
				 };
			};

			d.s = function () {
				g.c.wipe ({id: d.id});
				var o = g.c.hwxy (d);
				g.op[d.id].h = o.h;
				g.d ({ h: o.h, i: d.i, id: d.id, w: o.w, x: o.x, y: o.y, z: d.z });
				g.c.d = true;
			};

			d.u = function () { switch (g.e.type) {
				case 'mousemove': d.ah (); break;
				case 'resize': d.s (); break;
			};};
			g.g.home = {};
			d.s ();
			g.o.push (d);
		},

		set item (a) {
			a.tag = 'item';
			a.type = a.type || a.tag;
			a.id = a.id || a.type + g.o.length;

			a.a0 = a.a0 || g.a[g.op.item[a.type].a0] || g.a.tock;
			a.a1 = a.a1 || g.a[g.op.item[a.type].a1] || g.a.shih;
			a.hk = a.hk || g.op.item[a.type].hk || 1.8;
			a.i = a.i || g.i[g.op.item[a.type].i]; a.i1 = a.i1 || g.i[g.op.item[a.type].i1];
			a.price = a.price || g.op.item[a.type].price || 0;
			a.t = a.t || g.op.item[a.type].t;
			a.w = a.w || g.op.item[a.type].w || 0.04;
			a.x = a.x || g.r (g.op.dock.x - 0.4 * g.op.dock.w, g.op.dock.x + 0.4 * g.op.dock.w); a.y = a.y || g.op.dock.y;

			g.g.build = { a0: a.a0, a1: a.a1, hk: a.hk, id: a.id, i: a.i, i1: a.i1, price: a.price, tag: a.tag, type: a.type, w: a.w, x: a.x, y: a.y };
		},

		set stat (s) {
			s.id = s.id || 'stat' + g.o.length;

			s.f = s.f || '#fff';
			s.old = '';
			s.t = s.t || 0;
			s.x = s.x || 0.1; s.y = s.y || 0.1;
			s.z = s.z || 2;

			s.upd = function () {
				if (s.old != g.op[s.t]) {
					s.old = g.op[s.t];
					s.s ();
				};
			};

			s.s = function () {
				g.c.wipe ({ id: s.id });
				var o = g.c.hwxy (s);
				var t = g.op[s.t] + '';
				g.d ({ h: o.h, i: s.i, id: s.id, w: o.w, x: o.x, y: o.y, z: s.z });
				g.d ({ f: s.f, h: o.h, id: s.id, t: t, ta: 'left', tb: 'middle', x: s.x + 0.75 * o.w, y: s.y, z: s.z });
				g.c.d = true;
			};
			s.u = function () { switch (g.e.type) {
				case 'resize': s.s (); break;
				case 'tick': s.upd (); break;
			}};
			s.s ();
			g.o.push (s);
		},

		set sun (s) {
			s.id = 'sun';

			s.c = '#FF6300';
			s.h = 0.1; s.wk = 1;
			s.i = g.i.sun;
			s.season = 'summer';
			s.tan = 0;
			s.t0 = 0; s.ti = 1000;
			s.x = s.x || 0.5; s.y = s.y || 0; s.z = 1;

			s.time = function () {
				if (g.w.t > s.t0 + s.ti) {
					s.t0 = g.w.t;
					s.tan = (s.tan < 360) ? s.tan + 1.5 : 0;
					switch (s.season) {
						case 'fall': if (s.tan >= 180) { s.c = '#69D9EF'; s.season = 'winter'; g.op.season = 'winter'; g.c.bg (g.i.snow); g.a.p (g.a.winter, 0.1, true); }; break;
						case 'spring': if (s.tan >= 360) { s.c = '#FF6300'; s.season = 'summer'; g.op.season = 'summer'; g.c.bg (g.i.grass); g.a.p (g.a.summer, 0.2, true); }; break;
						case 'summer': if (s.tan >= 90) { s.c = '#FBD200'; s.season = 'fall'; g.op.season = 'fall'; g.c.bg (g.i.grass_fall); g.a.p (g.a.fall, 0.2, true); }; break;
						case 'winter': if (s.tan >= 270) { s.c = '#ADC936'; s.season = 'spring'; g.op.season = 'spring'; g.c.bg (g.i.grass_spring); g.a.p (g.a.spring, 0.2, true); }; break;
					};
					s.s ();
				};
			};

			s.s = function () {
				g.c.wipe ({ id: s.id });
				var o = g.c.hwxy (s);
				g.d ({ h: o.h, i: s.i, id: s.id, tan: s.tan, w: o.w, x: o.x, y: o.y, z: s.z });
				g.d ({ id: s.id, lw: 10 / g.c.H, r: 0.5 * o.h, s: s.c, x: s.x, y: s.y, z: s.z +1 });
				g.c.d = true;
			};

			s.u = function () { switch (g.e.type) {
				case 'resize': s.s (); break;
				case 'tick': s.time (); break;
			};};
			s.s ();
			g.a.p (g.a.summer, 0.2, true);
			g.o.push (s);
		}
	},

	i: { set l (l) { for (var id in l) { var i = new Image (); i.src = l[id]; g.i[id] = i; };}},

	set run (l) { window.onload = function () { g.w (); g.c (); g.e (); l ();}; },

	lvl: {},
	o: [],

	op: {
		area: {
			area: { i: 'garden', t: 1000 },
			garbage: { t: 1000 },
			garden: { hk: 1, i: 'garden', price: 10, t: 60000, tax: { price: 2, t: 0, time: 240000 }, w: 0.07, wheat: { get: 'wheat', i: 'garden_wheat' }, y: 0.87 },
			yard: { t: 1000 }
		},
		build: {
			home: { a1: 'tock2', get: 'hammer', hk: 1.8, i: 'home', power: 3, price: 20, t: 240000, tax: { price: 1, t: 0,time: 240000 }, w: 0.05, worked: true, y: 0.87 }
		},
		dock: { auto: false, hk: 0.2, w: 0.55, x: 0.5, y: 0.9 },
		fps: true,
		item: {
			design_box: { a0: 'paper2', a1: 'paper', hk: 1, i: 'design_box', price: 5, w: 0.075, y: 0.86 },
			hammer: { hk: 0.9, i: 'hammer', i1: 'hammer_up', price: 2, w: 0.05, y: 0.9 },
			shovel: { hk: 3.5, i: 'shovel', price: 5, w: 0.025, y: 0.9 },
			item: { i: 'hammer' },
			wheat: { a0: 'wheat', hk: 2, i: 'wheat', price: 1, w: 0.025, y: 0.9 }
		},
		market: { auto: false, hk: 1, items: {}, w: 0.2, x: 0.9, y: 0.8 },
		money: 10,
		season: 'summer',
		table: { auto: false, hk: 1, items: {}, w: 0.2, x: 0.1, y: 0.8 },
	},

	r: function (a, b, c) {
		var r = Math.random ();
		if (a) {
			if (b) {
				if (typeof (b) == 'number') {
					r = (c != true) ? Math.random () * (b - a) + a : (Math.random () * (b - a + 1) + a) >> 0;
				};
			};
		};
		return r;
	},

	s: [],

	w: function () {
		var w = window; w.d = w.document; w.d.b = w.d.body;
			w.h = w.innerHeight; w.w = w.innerWidth;
			w.i = 50; w.t = 0;

		Object.defineProperties (w, {
			'l': { set: function (l) { w.console.log (l); }},
			'ontick': { set: function (f) { w.c = w.setInterval (function () { f ({i: w.i, t: w.t, type: 'tick' }); w.t += w.i; }, w.i); }},
		});

		w.wipe = function (o) {
			var s = [];
			for (var i = g.o.length; i--;) {
				for (var k in o) {
					if (o[k] != g.o[i][k]) s.push (g.o[i]);
				};
			};
			g.o = s;
		};

		w.u = function () { switch (g.e.type) { case 'resize': w.h = w.innerHeight; w.w = w.innerWidth; break; };};
		delete g.w;
		g.w = w;
	},

	wipe: function (o) { g.o = []; g.s = []; g.c.d = true; },

	u: function () { g.w.u (); g.c.u (); for (var i = g.o.length; i--;) if (g.o[i]) g.o[i].u (); }
};

g.a.l = {
	begin: 'data/begin.ogg',
	dig: 'data/dig.ogg',
	fail: 'data/fail.ogg',
	fall: 'data/fall.ogg',
	paper: 'data/paper.ogg', paper2: 'data/paper2.ogg',
	sell: 'data/sell.ogg',
	shih: 'data/shih.ogg',
	spring: 'data/spring.ogg',
	summer: 'data/summer.ogg',
	tk: 'data/tk.ogg',
	tock: 'data/tock.ogg', tock2: 'data/tock2.ogg',
	wheat: 'data/wheat.ogg',
	winter: 'data/winter.ogg'
};

g.i.l = {
	design_box: 'data/design_box.svg',
	dock: 'data/dock.svg',
	draw: 'data/draw.svg',
	hammer: 'data/hammer.svg', hammer_cursor: 'data/hammer_cursor.png', hammer_up: 'data/hammer_up.svg',
	home: 'data/home.svg',
	garden: 'data/garden.svg', garden_wheat: 'data/garden_wheat.svg',
	grass: 'data/grass.png', grass_fall: 'data/grass_fall.png', grass_spring: 'data/grass_spring.png',
	market: 'data/market.svg',
	shovel: 'data/shovel.svg',
	snow: 'data/snow.png',
	sun: 'data/sun.svg',
	table: 'data/table.svg',
	wheat: 'data/wheat.svg',
	yuan: 'data/yuan.svg'
};

g.run = function () {
	g.lvl.start ();
};

g.lvl.begin = function () {
	g.wipe ();
	g.c.bg (g.i.grass);
	g.w.t = 0;
	g.g.d = { id: 'dock', z: 0 };
	g.g.d = { i: g.i.table, id: 'table' };
	g.g.d = { i: g.i.market, id: 'market' };

	g.g.sun = {};
	g.g.stat = { h: 0.075, i: g.i.yuan, id: 'money', t: 'money', wk: 2, x: 0.05, y: 0.05 };
	g.g.stat = { h: 0.05, i: g.i.draw, id: 'date', t: 'fps', wk: 1, x: 0.9, y: 0.05 };

	g.g.build = { type: 'home', x: 0.3 };
	g.g.area = { type: 'garden', x: 0.4 };
	g.g.item = { type: 'hammer', x: 0.5 };
	g.g.item = { type: 'shovel', x: 0.55 };
	g.g.item = { type: 'wheat', x: 0.6 };
	g.g.item = { type: 'design_box', x: 0.7 };

	g.a.p (g.a.begin, 1);
};

g.lvl.option = function () {

};

g.lvl.start = function () {
	g.wipe ();
	g.c.b ('#bca');
	g.g.b = { a: g.lvl.begin, c: { b: 'transparent', ba: 'transparent', t: '#786', ta: '#896' }, h: 0.5, t: 'START', w: 0.3, wp: 1, x: 0.5, y: 0.5, z: 1 };
};