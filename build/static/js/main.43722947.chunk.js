(this["webpackJsonphcn-docentes-front"] =
  this["webpackJsonphcn-docentes-front"] || []).push([
  [0],
  {
    10: function (e, t, n) {
      "use strict";
      var r = n(11),
        a = n(9),
        i = n(18);
      t.a = function (e) {
        var t = e.path,
          n = e.method,
          o = e.headers,
          c = Object(a.a)(e, ["path", "method", "headers"]),
          s = new AbortController(),
          u =
            (setTimeout(function () {
              return s.abort();
            }, 4e3),
            Object(r.a)(
              {
                method: n,
                headers: o || new Headers(),
                timeout: 4e3,
                signal: s.signal,
              },
              c
            )),
          l = new Request(i.a + t, u);
        return fetch(l);
      };
    },
    109: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return b;
      }),
        n.d(t, "b", function () {
          return j;
        });
      var r = n(7),
        a = n.n(r),
        i = n(16),
        o = n(11),
        c = n(28),
        s = n(8),
        u = n(10),
        l = n(18);
      function d(e, t) {
        return new Promise(function (n, r) {
          Object(u.a)({
            path: "/Announcements/CreateAnnouncement",
            method: "POST",
            headers: new Headers({ Token: t }),
            body: JSON.stringify({
              CourseID: e.CourseID,
              Title: e.Title,
              Description: e.Description,
              CreationDate: e.CreationDate,
            }),
          })
            .then(function (e) {
              if (!e.ok) throw new Error(e.status);
              return e.json();
            })
            .then(function (e) {
              return n(e);
            })
            .catch(function (e) {
              return r(e.message);
            });
        });
      }
      function h(e, t) {
        return new Promise(function (n, r) {
          Object(u.a)({
            path: "/Announcements/DeleteAnnouncement",
            method: "DELETE",
            headers: new Headers({ Token: t }),
            body: JSON.stringify({ ID: e }),
          })
            .then(function (e) {
              if (!e.ok) throw new Error(e.status);
              n(e);
            })
            .catch(function (e) {
              return r(e.message);
            });
        });
      }
      n(40);
      var f = n(39),
        m = "SET_LIST",
        p = function () {
          return function (e, t) {
            var n,
              r,
              a = t().courses.currentCourse.id;
            return ((n = { CourseID: a }),
            (r = t().auth.authToken),
            new Promise(function (e, t) {
              Object(u.a)({
                path: "/Announcements/GetAllAnnouncements" + Object(l.c)(n),
                method: "GET",
                headers: new Headers({ Token: r }),
              })
                .then(function (e) {
                  if (!e.ok) throw new Error(e.status);
                  return e.json();
                })
                .then(function (t) {
                  return e(t);
                })
                .catch(function (e) {
                  return t(e.message);
                });
            }))
              .then(function (t) {
                e(
                  j.actions.setList({
                    type: m,
                    list: t
                      .filter(function (e) {
                        return e.CourseID === a;
                      })
                      .sort(function (e, t) {
                        return (
                          new Date(t.CreationDate) - new Date(e.CreationDate)
                        );
                      }),
                  })
                );
              })
              .catch(function (t) {
                e(s.a.setNotification(t.message, "error")),
                  e(
                    j.actions.setList({
                      type: m,
                      list: f.b.filter(function (e) {
                        return e.CourseID === a;
                      }),
                    })
                  );
              });
          };
        },
        b = {
          setList: function (e) {
            return function (t) {
              t(j.actions.setList({ type: m, list: e }));
            };
          },
          getAnnouncementsList: p,
          updateAnnouncement: function (e) {
            return function (t, n) {
              var r = n().courses.currentCourse.id;
              return (function (e, t) {
                return new Promise(function (n, r) {
                  Object(u.a)({
                    path: "/Announcements/UpdateAnnouncement",
                    method: "PUT",
                    headers: new Headers({ Token: t }),
                    body: JSON.stringify({
                      ID: e.ID,
                      CourseID: e.CourseID,
                      Title: e.Title,
                      Description: e.Description,
                      CreationDate: e.CreationDate,
                    }),
                  })
                    .then(function (e) {
                      if (!e.ok) throw new Error(e.status);
                      return e.json();
                    })
                    .then(function (e) {
                      return n(e);
                    })
                    .catch(function (e) {
                      return r(e.message);
                    });
                });
              })(
                Object(o.a)(Object(o.a)({}, e), {}, { CourseID: r }),
                n().auth.authToken
              )
                .then(function () {
                  t(s.a.setNotification("Anuncio actualizado exitosamente")),
                    t(p());
                })
                .catch(function (e) {
                  console.log(e), t(s.a.setNotification(e.message, "error"));
                });
            };
          },
          createAnnouncement: function (e) {
            return (function () {
              var t = Object(i.a)(
                a.a.mark(function t(n, r) {
                  var i;
                  return a.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (i = r().courses.currentCourse.id),
                            t.abrupt(
                              "return",
                              d(
                                Object(o.a)(
                                  Object(o.a)({}, e),
                                  {},
                                  { CourseID: i }
                                ),
                                r().auth.authToken
                              )
                                .then(function () {
                                  n(
                                    s.a.setNotification(
                                      "Anuncio creado exitosamente"
                                    )
                                  ),
                                    n(p());
                                })
                                .catch(function (e) {
                                  console.log(e),
                                    n(s.a.setNotification(e.message, "error"));
                                })
                            )
                          );
                        case 2:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e, n) {
                return t.apply(this, arguments);
              };
            })();
          },
          deleteAnnouncement: function (e) {
            return (function () {
              var t = Object(i.a)(
                a.a.mark(function t(n, r) {
                  return a.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return t.abrupt(
                            "return",
                            h(e, r().auth.authToken)
                              .then(function () {
                                n(
                                  s.a.setNotification(
                                    "Anuncio eliminado exitosamente"
                                  )
                                ),
                                  n(p());
                              })
                              .catch(function (e) {
                                console.log(e),
                                  n(s.a.setNotification(e.message, "error"));
                              })
                          );
                        case 1:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e, n) {
                return t.apply(this, arguments);
              };
            })();
          },
        },
        j = Object(c.b)({
          name: "Adv",
          initialState: { announcementslist: [], annState: { loading: !1 } },
          reducers: {
            setList: function (e, t) {
              var n = t.payload.list;
              e.announcementslist = n;
            },
          },
        });
    },
    125: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return C;
      }),
        n.d(t, "b", function () {
          return x;
        });
      var r = n(11),
        a = n(7),
        i = n.n(a),
        o = n(16),
        c = n(28),
        s = n(8),
        u = n(10),
        l = n(18);
      function d(e, t) {
        return new Promise(function (n, r) {
          Object(u.a)({
            path: "/Activities/GetAllActivities" + Object(l.c)(e),
            method: "GET",
            headers: new Headers({ Token: t }),
          })
            .then(function (e) {
              if (!e.ok) throw new Error(e.status);
              return e.json();
            })
            .then(function (e) {
              return n(e);
            })
            .catch(function (e) {
              return r(e.message);
            });
        });
      }
      function h(e, t) {
        return new Promise(function (n, r) {
          Object(u.a)({
            path: "/Activities/UpdateActivity",
            method: "PUT",
            headers: new Headers({ Token: t }),
            body: JSON.stringify({
              ID: e.ID,
              Title: e.Title,
              Description: e.Description,
              Type: e.Type,
              CreationDate: e.CreationDate,
              LimitDate: e.LimitDate,
              CourseID: e.CourseID,
              ClinicalCaseID: e.ClinicalCaseID,
              HCNID: e.HCNID,
              Difficulty: e.Difficulty,
            }),
          })
            .then(function (e) {
              if (!e.ok) throw new Error(e.status);
              return e.json();
            })
            .then(function (e) {
              return n(e);
            })
            .catch(function (e) {
              return r(e.message);
            });
        });
      }
      function f(e, t) {
        return new Promise(function (n, r) {
          Object(u.a)({
            path: "/Activities/CreateActivity",
            method: "POST",
            headers: new Headers({ Token: t }),
            body: JSON.stringify({
              Title: e.Title,
              Description: e.Description,
              Type: e.Type,
              CreationDate: e.CreationDate,
              LimitDate: e.LimitDate,
              CourseID: e.CourseID,
              ClinicalCaseID: e.ClinicalCaseID,
              HCNID: e.HCNID,
              Difficulty: e.Difficulty,
              TeacherID: e.TeacherID,
            }),
          })
            .then(function (e) {
              if (!e.ok) throw new Error(e.status);
              return e.json();
            })
            .then(function (e) {
              return n(e);
            })
            .catch(function (e) {
              return r(e.message);
            });
        });
      }
      function m(e, t) {
        return new Promise(function (n, r) {
          Object(u.a)({
            path: "/Activities/DeleteActivity",
            method: "DELETE",
            headers: new Headers({ Token: t }),
            body: JSON.stringify({ ID: e.ID }),
          })
            .then(function (e) {
              if (!e.ok) throw new Error(e.status);
              return "It Works!";
            })
            .then(function (e) {
              return n(e);
            })
            .catch(function (e) {
              return r(e.message);
            });
        });
      }
      function p(e, t) {
        return new Promise(function (n, r) {
          Object(u.a)({
            path: "/SolvedHCN/GetAllSolvedHCN" + Object(l.c)(e),
            method: "GET",
            headers: new Headers({ Token: t }),
          })
            .then(function (e) {
              if (!e.ok) throw new Error(e.status);
              return e.json();
            })
            .then(function (e) {
              return n(e);
            })
            .catch(function (e) {
              return r(e.message);
            });
        });
      }
      var b = n(39),
        j = "SET_LIST",
        O = "SET_GRADE_LIST",
        v = function () {
          return (function () {
            var e = Object(o.a)(
              i.a.mark(function e(t, n) {
                var r;
                return i.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r = n().courses.currentCourse.id),
                          e.abrupt(
                            "return",
                            d({ CourseID: r }, n().auth.authToken)
                              .then(function (e) {
                                t(
                                  x.actions.setList({
                                    type: j,
                                    list: e
                                      .filter(function (e) {
                                        return e.CourseID === r;
                                      })
                                      .sort(function (e, t) {
                                        return (
                                          new Date(t.CreationDate) -
                                          new Date(e.CreationDate)
                                        );
                                      }),
                                  })
                                );
                              })
                              .catch(function (e) {
                                console.log(e),
                                  t(s.a.setNotification(e.message, "error")),
                                  t(x.actions.setList({ type: j, list: b.a }));
                              })
                          )
                        );
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })();
        },
        C = {
          setList: function (e) {
            return function (t) {
              t(x.actions.setList({ type: j, list: e }));
            };
          },
          getActivitiesList: v,
          updateActivity: function (e) {
            return (function () {
              var t = Object(o.a)(
                i.a.mark(function t(n, a) {
                  var o;
                  return i.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (o = a().courses.currentCourse.id),
                            t.abrupt(
                              "return",
                              h(
                                Object(r.a)(
                                  Object(r.a)({}, e),
                                  {},
                                  { CourseID: o }
                                ),
                                a().auth.authToken
                              )
                                .then(function () {
                                  n(
                                    s.a.setNotification(
                                      "Actividad actualizada exitosamente"
                                    )
                                  ),
                                    n(v());
                                })
                                .catch(function (e) {
                                  console.log(e),
                                    n(s.a.setNotification(e.message, "error"));
                                })
                            )
                          );
                        case 2:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e, n) {
                return t.apply(this, arguments);
              };
            })();
          },
          createActivity: function (e) {
            return (function () {
              var t = Object(o.a)(
                i.a.mark(function t(n, a) {
                  var o, c;
                  return i.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (o = a().courses.currentCourse.id),
                            (c = a().auth.user.ID),
                            console.log(c),
                            t.abrupt(
                              "return",
                              f(
                                Object(r.a)(
                                  Object(r.a)({}, e),
                                  {},
                                  { CourseID: o, TeacherID: c }
                                ),
                                a().auth.authToken
                              )
                                .then(function () {
                                  n(
                                    s.a.setNotification(
                                      "Actividad creada exitosamente"
                                    )
                                  ),
                                    n(v());
                                })
                                .catch(function (e) {
                                  console.log(e),
                                    n(s.a.setNotification(e.message, "error"));
                                })
                            )
                          );
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e, n) {
                return t.apply(this, arguments);
              };
            })();
          },
          deleteActivity: function (e) {
            return (function () {
              var t = Object(o.a)(
                i.a.mark(function t(n, r) {
                  return i.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return t.abrupt(
                            "return",
                            m({ ID: e }, r().auth.authToken)
                              .then(function () {
                                n(
                                  s.a.setNotification(
                                    "Actividad eliminada exitosamente"
                                  )
                                ),
                                  n(v());
                              })
                              .catch(function (e) {
                                console.log(e),
                                  n(s.a.setNotification(e.message, "error"));
                              })
                          );
                        case 1:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e, n) {
                return t.apply(this, arguments);
              };
            })();
          },
          getAllSolvedHcn: function (e) {
            return (function () {
              var t = Object(o.a)(
                i.a.mark(function t(n, r) {
                  return i.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return t.abrupt(
                            "return",
                            p({ id: e }, r().auth.authToken)
                              .then(function (e) {
                                n(x.actions.setGradeList({ type: O, list: e }));
                              })
                              .catch(function (e) {
                                console.log(e),
                                  n(s.a.setNotification(e.message, "error"));
                              })
                          );
                        case 1:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e, n) {
                return t.apply(this, arguments);
              };
            })();
          },
        },
        x = Object(c.b)({
          name: "Activies",
          initialState: { activitieslist: [], gradeList: [] },
          reducers: {
            setList: function (e, t) {
              var n = t.payload.list;
              console.log(n), (e.activitieslist = n);
            },
            setGradeList: function (e, t) {
              var n = t.payload.list;
              console.log(n), (e.gradeList = n);
            },
          },
        });
    },
    18: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      }),
        n.d(t, "c", function () {
          return a;
        }),
        n.d(t, "b", function () {
          return i;
        }),
        n.d(t, "d", function () {
          return o;
        });
      var r = "http://104.44.129.29:3600";
      function a(e) {
        var t = "",
          n = !0;
        for (var r in e) {
          var a;
          if ("" !== e[r])
            n ? ((a = "?"), (n = !1)) : (a = "&"),
              (t += a + "".concat(r, "=").concat(e[r]));
        }
        return t;
      }
      function i(e) {
        for (
          var t = window.atob(e), n = t.length, r = new Uint8Array(n), a = 0;
          a < n;
          ++a
        )
          r[a] = t.charCodeAt(a);
        return new Blob([r], { type: "application/pdf" });
      }
      var o = {
        ConsultationReason: "",
        Interpretation: "",
        Feedback: "",
        GeneralData_ValorationDate: "",
        GeneralData_HCNNumber: "",
        GeneralData_AdmissionDate: "",
        GeneralData_Room: "",
        GeneralData_Interpretation: "",
        GeneralData_Feedback: "",
        PatientData_FullName: "",
        PatientData_Birthdate: "",
        PatientData_Gender: "",
        PatientData_Sex: "",
        PatientData_EPS: "",
        PatientData_Telephone: "",
        PatientData_Occupation: "",
        PatientData_CivilStatus: "",
        PatientData_Interpretation: "",
        PatientData_Feedback: "",
        Anthropometry_Interpretation: "",
        Anthropometry_Feedback: "",
        Anthropometry_Weight_Actual: "",
        Anthropometry_Weight_Usual: "",
        Anthropometry_Weight_Reference: "",
        Anthropometry_Weight_ChangeWeight: "",
        Anthropometry_Weight_Interpretation: "",
        Anthropometry_Weight_Feedback: "",
        Anthropometry_TricipitalFold_Value: "",
        Anthropometry_TricipitalFold_Interpretation: "",
        Anthropometry_TricipitalFold_Feedback: "",
        Anthropometry_BrachialPerimeter_Value: "",
        Anthropometry_BrachialPerimeter_Interpretation: "",
        Anthropometry_BrachialPerimeter_Feedback: "",
        Anthropometry_AbdominalPerimeter_Value: "",
        Anthropometry_AbdominalPerimeter_Interpretation: "",
        Anthropometry_AbdominalPerimeter_Feedback: "",
        Anthropometry_SubscapularFold_Value: "",
        Anthropometry_SubscapularFold_Interpretation: "",
        Anthropometry_SubscapularFold_Feedback: "",
        Anthropometry_Height_Value: "",
        Anthropometry_Height_Interpretation: "",
        Anthropometry_Height_Feedback: "",
        Anthropometry_Structure_Value: "",
        Anthropometry_Structure_Interpretation: "",
        Anthropometry_Structure_Feedback: "",
        Anthropometry_BMI_Value: "",
        Anthropometry_BMI_Interpretation: "",
        Anthropometry_BMI_Feedback: "",
        Biochemistry_Interpretation: "",
        Biochemistry_Feedback: "",
      };
    },
    183: function (e, t, n) {},
    295: function (e, t, n) {},
    296: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(2),
        a = n(0),
        i = n.n(a),
        o = n(30),
        c = n.n(o),
        s = (n(183), n(21)),
        u = n(161),
        l = n(26),
        d = n(22),
        h = n(52),
        f = n(53);
      var m = function () {
        return Object(r.jsx)("div", {
          id: "kt_aside",
          className: "sidebar d-flex flex-column flex-row-auto",
          children: Object(r.jsx)("div", {
            id: "kt_aside_menu",
            className: "my-4 scroll ps ps--active-y",
            "data-menu-vertical": "1",
            "data-menu-scroll": "1",
            "data-menu-dropdown-timeout": "500",
            children: Object(r.jsxs)("ul", {
              className: "nav",
              children: [
                Object(r.jsx)("li", {
                  "aria-haspopup": "true",
                  className: "nav-item",
                  children: Object(r.jsxs)(l.b, {
                    to: "announcements",
                    className: "nav-link",
                    children: [
                      Object(r.jsx)(h.a, {
                        icon: f.b,
                        width: "24",
                        height: "24",
                        className: "nav-icon",
                      }),
                      Object(r.jsx)("span", { children: "Anuncios" }),
                    ],
                  }),
                }),
                Object(r.jsx)("li", {
                  "aria-haspopup": "true",
                  className: "nav-item",
                  children: Object(r.jsxs)(l.b, {
                    to: "activities",
                    className: "nav-link",
                    children: [
                      Object(r.jsx)(h.a, { icon: f.a, className: "nav-icon" }),
                      Object(r.jsx)("span", {
                        className: "menu-text",
                        children: "Actividades",
                      }),
                    ],
                  }),
                }),
                Object(r.jsx)("li", {
                  "aria-haspopup": "true",
                  children: Object(r.jsxs)(l.b, {
                    to: "clinical-cases",
                    children: [
                      Object(r.jsx)(h.a, { icon: f.d }),
                      Object(r.jsx)("span", {
                        className: "menu-text",
                        children: "Casos cl\xednicos",
                      }),
                    ],
                  }),
                }),
                Object(r.jsx)("li", {
                  "aria-haspopup": "true",
                  className: "nav-item",
                  children: Object(r.jsxs)(l.b, {
                    to: "hcn",
                    className: "nav-link",
                    children: [
                      Object(r.jsx)(h.a, { icon: f.e, className: "nav-icon" }),
                      Object(r.jsx)("span", {
                        className: "menu-text",
                        children: "HCN",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      };
      function p(e) {
        var t = e.children,
          n = e.aside,
          a = void 0 === n || n;
        return Object(r.jsxs)("div", {
          className: "d-flex flex-row",
          children: [
            a && Object(r.jsx)(m, {}),
            Object(r.jsx)("div", {
              className: "content ".concat(a ? "with-aside" : ""),
              children: t,
            }),
          ],
        });
      }
      var b = n(331),
        j = n(302),
        O = n(329),
        v = n(11),
        C = n(9),
        x = function (e) {
          return "" + e;
        };
      function g(e) {
        var t = e.component,
          n = e.aside,
          a = void 0 !== n && n,
          o = Object(C.a)(e, ["component", "aside"]);
        return Object(r.jsx)(
          d.b,
          Object(v.a)(
            Object(v.a)({}, o),
            {},
            {
              children: Object(r.jsx)(p, {
                aside: a,
                children: i.a.createElement(t),
              }),
            }
          )
        );
      }
      var y = n(40);
      var D = function () {
        var e = Object(s.d)(function (e) {
            return e.auth;
          }).user,
          t = Object(s.c)();
        return Object(r.jsxs)(b.a, {
          bg: "dark",
          variant: "dark",
          className: "header navbar-default navbar-fixed-top fixed-top",
          children: [
            Object(r.jsxs)(b.a.Brand, {
              href: "/home",
              children: [
                Object(r.jsx)("img", {
                  className: "logo",
                  src: x("/media/logos/logo_v1.png"),
                }),
                " ",
                "Historias Cl\xednicas Nutricionales",
              ],
            }),
            Object(r.jsx)(j.a, {
              className: "mr-auto",
              children: Object(r.jsx)(j.a.Link, {
                href: "/courses",
                children: "Mis cursos",
              }),
            }),
            Object(r.jsx)(b.a.Collapse, {
              className: "justify-content-end navbar-dropdown",
              children: Object(r.jsxs)(O.a, {
                title: e.Name,
                id: "collasible-nav-dropdown",
                children: [
                  Object(r.jsx)(O.a.Divider, {}),
                  Object(r.jsx)(O.a.Item, {
                    children: Object(r.jsx)("button", {
                      className: "btn btn-danger",
                      onClick: function () {
                        return t(y.a.logout());
                      },
                      children: "Cerrar sesi\xf3n",
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      };
      function w(e) {
        var t = e.children;
        return Object(r.jsxs)("div", {
          className: "d-flex flex-column",
          children: [
            Object(r.jsx)(D, {}),
            Object(r.jsx)("div", { className: "page", children: t }),
          ],
        });
      }
      var N = n(65),
        T = n(69),
        I = n(49),
        k = function () {
          return Object(r.jsx)("div", {
            children: Object(r.jsx)("span", {
              children: "No hay datos para mostrar en este momento",
            }),
          });
        };
      var L = function () {
        var e = Object(s.d)(function (e) {
            return e.hcn;
          }).hcnList,
          t = Object(s.d)(function (e) {
            return e.clinicalCases;
          }).ccasesList,
          n = Object(s.d)(function (e) {
            return e.courses;
          }).coursesList,
          a = Object(s.c)();
        return Object(r.jsxs)(r.Fragment, {
          children: [
            Object(r.jsx)(N.a, {
              title: "Cursos",
              className: "mb-5",
              children: n.length
                ? Object(r.jsx)(T.a, {
                    data: n,
                    limit: 4,
                    size: 4,
                    children: function (e) {
                      return Object(r.jsx)(l.b, {
                        to: "/courses",
                        children: Object(r.jsx)("div", {
                          className: "card custom-card",
                          style: { height: "150px" },
                          onClick: function () {
                            return (
                              (t = e.ID), void a(I.a.setCurrentCourse("id", t))
                            );
                            var t;
                          },
                          children: Object(r.jsx)("div", {
                            className:
                              "d-flex card-body justify-content-center align-items-center",
                            children: Object(r.jsxs)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                              children: [
                                Object(r.jsx)(h.a, { icon: f.c, size: "3x" }),
                                Object(r.jsx)("span", {
                                  className: "mt-1",
                                  children: e.Name,
                                }),
                              ],
                            }),
                          }),
                        }),
                      });
                    },
                  })
                : Object(r.jsx)(k, {}),
            }),
            Object(r.jsx)(N.a, {
              title: "Casos Cl\xednicos",
              className: "mb-5",
              children: t.length
                ? Object(r.jsx)(T.a, {
                    data: t,
                    limit: 4,
                    size: 4,
                    children: function (e) {
                      return Object(r.jsx)(l.b, {
                        to: "/clinical-cases/".concat(e.ID),
                        children: Object(r.jsx)("div", {
                          className: "card custom-card",
                          style: { height: "150px" },
                          children: Object(r.jsx)("div", {
                            className:
                              "d-flex card-body justify-content-center align-items-center",
                            children: Object(r.jsx)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                              children: Object(r.jsx)("span", {
                                className: "mt-1",
                                children: e.Title,
                              }),
                            }),
                          }),
                        }),
                      });
                    },
                  })
                : Object(r.jsx)(k, {}),
            }),
            Object(r.jsx)(N.a, {
              title: "Historias Cl\xednicas Nutricionales",
              className: "pb-5",
              children: e.length
                ? Object(r.jsx)(T.a, {
                    data: e,
                    limit: 4,
                    size: 4,
                    children: function (e) {
                      return Object(r.jsx)(l.b, {
                        to: "/hcn/update/".concat(e.MongoID),
                        children: Object(r.jsx)("div", {
                          className: "card custom-card",
                          style: { height: "150px" },
                          children: Object(r.jsx)("div", {
                            className:
                              "d-flex card-body justify-content-center align-items-center",
                            children: Object(r.jsx)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                              children: Object(r.jsx)("span", {
                                className: "mt-1",
                                children: e.ID,
                              }),
                            }),
                          }),
                        }),
                      });
                    },
                  })
                : Object(r.jsx)(k, {}),
            }),
          ],
        });
      };
      var _ = function () {
          var e = Object(s.d)(function (e) {
              return e.courses;
            }).coursesList,
            t = Object(s.c)();
          return (
            i.a.useEffect(
              function () {
                t(I.a.getCoursesList());
              },
              [t]
            ),
            Object(r.jsx)(N.a, {
              title: "Cursos",
              children: e
                ? Object(r.jsx)(T.a, {
                    data: e,
                    children: function (e) {
                      return Object(r.jsx)(l.b, {
                        to: "/courses",
                        children: Object(r.jsx)("div", {
                          className: "card custom-card",
                          style: { height: "150px" },
                          onClick: function () {
                            return (
                              (n = e.ID), void t(I.a.setCurrentCourse("id", n))
                            );
                            var n;
                          },
                          children: Object(r.jsx)("div", {
                            className:
                              "d-flex card-body justify-content-center align-items-center",
                            children: Object(r.jsxs)("div", {
                              className:
                                "d-flex flex-column align-items-center",
                              children: [
                                Object(r.jsx)(h.a, { icon: f.c, size: "3x" }),
                                Object(r.jsx)("span", {
                                  className: "mt-1",
                                  children: e.Name,
                                }),
                              ],
                            }),
                          }),
                        }),
                      });
                    },
                  })
                : Object(r.jsx)("div", {
                    children: Object(r.jsx)("span", {
                      children: "No hay datos para mostrar en este momento",
                    }),
                  }),
            })
          );
        },
        A = n(8),
        E = n(85),
        S = n(87),
        P = n(7),
        H = n.n(P),
        B = n(16),
        G = n(28),
        F = n(10),
        M = n(18);
      function z(e, t) {
        return new Promise(function (n, r) {
          Object(F.a)({
            path: "/Students/GetAllStudents" + Object(M.c)(e),
            method: "GET",
            headers: new Headers({ Token: t }),
          })
            .then(function (e) {
              if (!e.ok) throw new Error(e.status);
              return e.json();
            })
            .then(function (e) {
              return n(e);
            })
            .catch(function (e) {
              return r(e.message);
            });
        });
      }
      var U = "SET_LIST",
        R = function (e) {
          return (function () {
            var t = Object(B.a)(
              H.a.mark(function t(n, r) {
                return H.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          "return",
                          z(e, r().auth.authToken)
                            .then(function (e) {
                              n(q.actions.setList({ type: U, list: e }));
                            })
                            .catch(function (e) {
                              console.log(e),
                                n(A.a.setNotification(e.message, "error"));
                            })
                        );
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            return function (e, n) {
              return t.apply(this, arguments);
            };
          })();
        },
        q = Object(G.b)({
          name: "students",
          initialState: { studentsList: [] },
          reducers: {
            setList: function (e, t) {
              var n = t.payload.list;
              e.studentsList = n;
            },
          },
        }),
        J = n(333),
        V = n(330);
      function W(e) {
        return Object(r.jsx)(
          V.a,
          Object(v.a)({ elevation: 6, variant: "filled" }, e)
        );
      }
      var X = function (e) {
          var t = e.open,
            n = e.setOpen,
            a = e.severity,
            i = e.anchorOrigin,
            o = void 0 === i ? { vertical: "bottom", horizontal: "right" } : i,
            c = e.message,
            s = function (e, t) {
              "clickaway" !== t && n(!1);
            };
          return Object(r.jsx)(J.a, {
            open: t,
            anchorOrigin: o,
            autoHideDuration: 4e3,
            onClose: s,
            children: Object(r.jsx)(W, {
              onClose: s,
              severity: a,
              children: c,
            }),
          });
        },
        Y = n(328);
      var K = function () {
          return Object(r.jsx)("div", {
            className: "container vh-100",
            children: Object(r.jsx)("div", {
              className: "row h-100 text-center",
              children: Object(r.jsx)("div", {
                className: "col align-self-center",
                children: Object(r.jsx)(Y.a, {
                  className: "ml-2",
                  size: 50,
                  color: "primary",
                }),
              }),
            }),
          });
        },
        Q = i.a.lazy(function () {
          return Promise.all([n.e(3), n.e(5)]).then(n.bind(null, 359));
        }),
        Z = i.a.lazy(function () {
          return n.e(4).then(n.bind(null, 362));
        }),
        $ = i.a.lazy(function () {
          return n.e(6).then(n.bind(null, 360));
        });
      function ee() {
        var e = Object(s.c)(),
          t = Object(s.d)(function (e) {
            return e.notifications;
          }),
          n = t.open,
          a = t.message,
          o = t.variant;
        return (
          i.a.useEffect(
            function () {
              e(E.a.getCCasesList()),
                e(S.a.getHcnList()),
                e(I.a.getCoursesList()),
                e(R());
            },
            [e]
          ),
          Object(r.jsxs)(i.a.Suspense, {
            fallback: Object(r.jsx)(K, {}),
            children: [
              Object(r.jsxs)(d.d, {
                children: [
                  Object(r.jsx)(d.a, { exact: !0, from: "/", to: "/home" }),
                  Object(r.jsx)(g, { exact: !0, path: "/home", component: L }),
                  Object(r.jsx)(g, { path: "/clinical-cases", component: Z }),
                  Object(r.jsx)(g, { path: "/hcn", component: $ }),
                  Object(r.jsx)(g, {
                    exact: !0,
                    path: "/courses/all",
                    component: _,
                  }),
                  Object(r.jsx)(g, {
                    path: "/courses",
                    aside: !0,
                    component: Q,
                  }),
                  Object(r.jsx)(d.a, { to: "/error/404" }),
                ],
              }),
              Object(r.jsx)(X, {
                open: n,
                setOpen: function (t) {
                  e(A.a.setNotificationField("open", t));
                },
                message: a,
                severity: o,
              }),
            ],
          })
        );
      }
      function te() {
        return Object(r.jsx)("div", {
          className: "container vh-100",
          children: Object(r.jsx)("div", {
            className: "row h-100 text-center",
            children: Object(r.jsx)("div", {
              className: "col align-self-center",
              children: Object(r.jsx)("h1", {
                children: "Page not found (404)",
              }),
            }),
          }),
        });
      }
      function ne() {
        return Object(r.jsxs)(d.d, {
          children: [
            Object(r.jsx)(d.a, { from: "/error", exact: !0, to: "/error/404" }),
            Object(r.jsx)(d.b, { path: "/error/404", component: te }),
            Object(r.jsx)(d.a, { to: "/error" }),
          ],
        });
      }
      var re = n(124),
        ae = n(86),
        ie = "/Authentication/Login";
      function oe() {
        return (oe = Object(B.a)(
          H.a.mark(function e(t, n) {
            return H.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      new Promise(function (e, r) {
                        Object(F.a)({
                          path: ie,
                          method: "POST",
                          body: JSON.stringify({ Email: t, Password: n }),
                        })
                          .then(function (e) {
                            if (!e.ok) throw new Error(e.status);
                            return e.json();
                          })
                          .then(function (t) {
                            return e(t);
                          })
                          .catch(function (e) {
                            return r(e.message);
                          });
                      })
                    );
                  case 4:
                    return e.abrupt(
                      "return",
                      new Promise(function (e, t) {
                        "123" === n
                          ? e({
                              token: "ashjkqwertyui",
                              user: {
                                username: "juancmartinez",
                                Name: "Juan Carlos Martinez",
                              },
                            })
                          : t(null);
                      })
                    );
                  case 5:
                    return e.abrupt(
                      "return",
                      new Promise(function (e, t) {
                        "123" === n
                          ? e({
                              token: "ashjkqwertyui",
                              user: {
                                username: "jhoanlozano",
                                Name: "Jhoan Lozano",
                              },
                            })
                          : t(null);
                      })
                    );
                  case 6:
                    return e.abrupt(
                      "return",
                      new Promise(function (e, t) {
                        "123" === n
                          ? e({
                              token: "ashjkqwertyui",
                              user: {
                                username: "xaviergarzon",
                                Name: "Xavier Garz\xf3n",
                              },
                            })
                          : t(null);
                      })
                    );
                  case 7:
                    return e.abrupt(
                      "return",
                      new Promise(function (e, t) {
                        console.log("aqui"), t("Rechazado");
                      })
                    );
                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      var ce = { username: "", password: "" };
      var se = function () {
        var e = Object(s.c)(),
          t = ae.a().shape({
            username: ae
              .b()
              .min(3, "M\xednimo 3 car\xe1cteres")
              .max(50, "M\xe1ximo 50 car\xe1cteres")
              .required("Campo requerido"),
            password: ae
              .b()
              .min(3, "M\xednimo 3 car\xe1cteres")
              .max(50, "M\xe1ximo 50 car\xe1cteres")
              .required("Campo requerido"),
          }),
          n = Object(re.a)({
            initialValues: ce,
            validationSchema: t,
            onSubmit: function (t, n) {
              var r = n.setStatus,
                a = n.setSubmitting;
              setTimeout(function () {
                (function (e, t) {
                  return oe.apply(this, arguments);
                })(t.username, t.password)
                  .then(function (t) {
                    a(!1);
                    var n = t.Token,
                      r = Object(C.a)(t, ["Token"]);
                    e(y.a.login(n)), e(y.a.fulfillUser(r));
                  })
                  .catch(function () {
                    a(!1), r("Usuario o contrase\xf1a incorrectos");
                  });
              }, 1e3);
            },
          });
        return Object(r.jsx)("div", {
          className: "align-self-center",
          children: Object(r.jsxs)("div", {
            className: "card col-12",
            style: { borderTop: "5px solid #1B7B52" },
            children: [
              Object(r.jsx)("img", {
                style: {
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                },
                alt: "HCN logo",
                src: x("/media/logos/menta4.png"),
                width: "100",
                height: "100",
              }),
              Object(r.jsx)("div", {
                className: "card-body",
                children: Object(r.jsxs)("form", {
                  onSubmit: n.handleSubmit,
                  children: [
                    n.status &&
                      Object(r.jsx)(V.a, {
                        variant: "standard",
                        severity: "error",
                        children: n.status,
                      }),
                    Object(r.jsx)("label", {
                      htmlFor: "username",
                      children: "Nombre de usuario",
                    }),
                    Object(r.jsx)(
                      "input",
                      Object(v.a)(
                        {
                          type: "text",
                          id: "username",
                          name: "username",
                          className: "form-control ".concat(
                            n.touched.username
                              ? n.errors.username
                                ? "is-invalid"
                                : "is-valid"
                              : ""
                          ),
                          placeholder: "Nombre de usuario",
                        },
                        n.getFieldProps("username")
                      )
                    ),
                    Object(r.jsx)("div", {
                      className: "invalid-feedback",
                      children: n.errors.username,
                    }),
                    Object(r.jsx)("label", {
                      htmlFor: "username",
                      className: "mt-2",
                      children: "Contrase\xf1a",
                    }),
                    Object(r.jsx)(
                      "input",
                      Object(v.a)(
                        {
                          type: "password",
                          id: "password",
                          name: "password",
                          className: "form-control ".concat(
                            n.touched.password
                              ? n.errors.password
                                ? "is-invalid"
                                : "is-valid"
                              : ""
                          ),
                          placeholder: "Contrase\xf1a",
                        },
                        n.getFieldProps("password")
                      )
                    ),
                    Object(r.jsx)("div", {
                      className: "invalid-feedback",
                      children: n.errors.password,
                    }),
                    Object(r.jsxs)("button", {
                      type: "submit",
                      className: "btn btn-secondary font-weight-bold my-3",
                      disabled: n.isSubmitting,
                      style: { backgroundColor: "#343a40" },
                      children: [
                        Object(r.jsx)("span", {
                          children: "Iniciar sesi\xf3n",
                        }),
                        n.isSubmitting &&
                          Object(r.jsx)(Y.a, {
                            className: "ml-2",
                            size: 10,
                            color: "inherit",
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      };
      var ue = function () {
        return Object(r.jsx)("div", {
          className: "container-fluid",
          style: {
            backgroundColor: "#E5E5E5",
            height: "100vh",
            padding: "0px",
          },
          children: Object(r.jsx)("div", {
            className:
              "d-flex flex-column flex-row-fluid p-3 overflow-hidden h-100",
            children: Object(r.jsx)("div", {
              className:
                "d-flex flex-column-fluid flex-center justify-content-center align-self-center h-100",
              children: Object(r.jsxs)(d.d, {
                children: [
                  Object(r.jsx)(d.b, { path: "/auth/login", component: se }),
                  Object(r.jsx)(d.a, {
                    from: "/auth",
                    exact: !0,
                    to: "/auth/login",
                  }),
                  Object(r.jsx)(d.a, { to: "/auth/login" }),
                ],
              }),
            }),
          }),
        });
      };
      function le() {
        var e = Object(s.d)(function (e) {
          return { isAuthorized: null != e.auth.user };
        }, s.b).isAuthorized;
        return Object(r.jsxs)(d.d, {
          children: [
            e
              ? Object(r.jsx)(d.a, { from: "/auth", to: "/" })
              : Object(r.jsx)(d.b, { children: Object(r.jsx)(ue, {}) }),
            Object(r.jsx)(d.b, { path: "/error", component: ne }),
            e
              ? Object(r.jsx)(w, { children: Object(r.jsx)(ee, {}) })
              : Object(r.jsx)(d.a, { to: "/auth/login" }),
          ],
        });
      }
      n(295);
      var de = function (e) {
          var t = e.store,
            n = e.persistor,
            a = e.basename;
          return Object(r.jsx)(s.a, {
            store: t,
            children: Object(r.jsx)(u.a, {
              persistor: n,
              children: Object(r.jsx)(l.a, {
                basename: a,
                children: Object(r.jsx)(le, {}),
              }),
            }),
          });
        },
        he = n(24),
        fe = n(171),
        me = n(107),
        pe = n(25),
        be = n(109),
        je = n(125),
        Oe = Object(pe.c)({
          auth: y.b,
          notifications: A.b.reducer,
          announcements: be.b.reducer,
          activities: je.b.reducer,
          courses: I.b.reducer,
          clinicalCases: E.b.reducer,
          hcn: S.b.reducer,
          students: q.reducer,
        }),
        ve = Object(fe.a)(),
        Ce = [].concat(
          Object(he.a)(
            Object(G.c)({
              immutableCheck: !1,
              serializableCheck: !1,
              thunk: !0,
            })
          ),
          [ve]
        ),
        xe = Object(G.a)({ reducer: Oe, middleware: Ce, devTools: !1 }),
        ge = Object(me.b)(xe),
        ye = xe,
        De = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(7)
              .then(n.bind(null, 357))
              .then(function (t) {
                var n = t.getCLS,
                  r = t.getFID,
                  a = t.getFCP,
                  i = t.getLCP,
                  o = t.getTTFB;
                n(e), r(e), a(e), i(e), o(e);
              });
        };
      c.a.render(
        Object(r.jsx)(de, {
          store: ye,
          persistor: ge,
          basename: "",
        }),
        document.getElementById("root")
      ),
        De();
    },
    39: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      }),
        n.d(t, "d", function () {
          return a;
        }),
        n.d(t, "b", function () {
          return i;
        }),
        n.d(t, "c", function () {
          return o;
        }),
        n.d(t, "e", function () {
          return c;
        });
      var r = [
          {
            ID: 1,
            Title: "Primera tarea rey, matrices dispersas",
            Description: "Re easy pri, solo busquen en Google.",
            Type: "Calificable",
            CreationDate: "2021-01-08 12:00:00",
            LimitDate: "2021-01-10 12:00:00",
            CourseID: 1,
            ClinicalCaseID: 3,
            HCNID: 1,
            Difficulty: 3,
          },
          {
            ID: 2,
            Title: "Actividad de prueba",
            Description: "Por favor ignoren esta actividad, gracias.",
            Type: "Prueba",
            CreationDate: "2021-01-09 11:43:21",
            LimitDate: "2021-01-19 10:59:59",
            CourseID: 2,
            ClinicalCaseID: 2,
            HCNID: 2,
            Difficulty: 1,
          },
        ],
        a = [
          {
            ID: 1,
            TeacherID: 1,
            Name: "Introducci\xf3n a Matlab",
            CreationDate: "2021-01-01 12:00:00",
          },
          {
            ID: 2,
            TeacherID: 1,
            Name: "Matlab avanzado",
            CreationDate: "2021-01-01 12:20:08",
          },
          {
            ID: 3,
            TeacherID: 2,
            Name: "Clases de piano",
            CreationDate: "2021-01-06 15:21:50",
          },
          {
            ID: 4,
            TeacherID: 3,
            Name: "Manejando en Cali",
            CreationDate: "2021-01-05 11:40:12",
          },
        ],
        i = [
          {
            ID: 1,
            CourseID: 1,
            Title: "\xa1Bienvenidos al curso!",
            Description: "Este es un curso b\xe1sico de Matlab. LOS AMO.",
            CreationDate: "2021-01-19 03:33:48",
          },
          {
            ID: 2,
            CourseID: 1,
            Title: "\xa1Primera tarea!",
            Description: "Resuelvan una matriz dispersa 100x100.",
            CreationDate: "2021-01-19 03:33:48",
          },
          {
            ID: 3,
            CourseID: 1,
            Title: "Hola a todos",
            Description: "Hola muchachos, los quiero mucho. Estudien bye!",
            CreationDate: "2021-01-19 03:33:48",
          },
          {
            ID: 4,
            CourseID: 1,
            Title: "Material gu\xeda",
            Description:
              'Busquen en Youtube. "Accidentes de tr\xe1nsito graves sin censura."',
            CreationDate: "2021-01-19 03:33:48",
          },
        ],
        o = [
          {
            ID: 1,
            Title: "El joven parchado",
            Description: "Benjam\xf3n era un joven con IMC PARCHADO.",
            Media: "../activitiesresources/img1.png",
            TeacherID: 1,
          },
          {
            ID: 2,
            Title: "El pianista de la selva",
            Description: "Re La Mi Do#",
            Media: "../activitiesresources/img2.png",
            TeacherID: 2,
          },
          {
            ID: 3,
            Title: "Muerte accidental",
            Description:
              "\xbfPor qu\xe9 se fue? \xbfY por qu\xe9 muri\xf3? \xbfPor qu\xe9 el Se\xf1or me la quit\xf3? Se ha ido al cielo y para poder ir yo...",
            Media: "../activitiesresources/ElUltimoBeso.mp3",
            TeacherID: 3,
          },
        ],
        c = [
          { ID: 1, TeacherID: 1 },
          { ID: 2, TeacherID: 1 },
          { ID: 3, TeacherID: 1 },
          { ID: 4, TeacherID: 2 },
          { ID: 5, TeacherID: 3 },
        ];
    },
    40: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return u;
      }),
        n.d(t, "a", function () {
          return l;
        });
      var r = n(11),
        a = n(107),
        i = n(162),
        o = n.n(i),
        c =
          (n(297),
          {
            Login: "[Login] Action",
            Logout: "[Logout] Action",
            Register: "[Register] Action",
            UserRequested: "[Request User] Action",
            UserLoaded: "[Load User] Auth API",
            setSessionExpired: "SET_SESSION_EXPIRED",
          }),
        s = { user: void 0, authToken: void 0, sessionExpired: !1 },
        u = Object(a.a)(
          { storage: o.a, key: "v706-auth", whitelist: ["user", "authToken"] },
          function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : s,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case c.Login:
                var n = t.payload.authToken;
                return { authToken: n, user: void 0 };
              case c.Register:
                var a = t.payload.authToken;
                return { authToken: a, user: void 0 };
              case c.Logout:
                return s;
              case c.UserLoaded:
                var i = t.payload.user;
                return Object(r.a)(Object(r.a)({}, e), {}, { user: i });
              case c.setSessionExpired:
                return Object(r.a)(
                  Object(r.a)({}, e),
                  {},
                  { sessionExpired: !0 }
                );
              default:
                return e;
            }
          }
        ),
        l = {
          login: function (e) {
            return { type: c.Login, payload: { authToken: e } };
          },
          register: function (e) {
            return { type: c.Register, payload: { authToken: e } };
          },
          logout: function () {
            return { type: c.Logout };
          },
          requestUser: function (e) {
            return { type: c.UserRequested, payload: { user: e } };
          },
          fulfillUser: function (e) {
            return { type: c.UserLoaded, payload: { user: e } };
          },
          setUser: function (e) {
            return { type: c.SetUser, payload: { user: e } };
          },
          setSessionExpired: function () {
            return { type: c.setSessionExpired };
          },
        };
    },
    44: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "b", function () {
          return s;
        }),
        n.d(t, "c", function () {
          return u;
        });
      var r = n(10),
        a = n(18),
        i = "/Courses",
        o = i + "/GetAllCourses",
        c = i + "/GetCourse";
      function s(e) {
        return (
          console.log(e),
          new Promise(function (t, n) {
            Object(r.a)({
              path: o,
              method: "GET",
              headers: new Headers({ Token: e }),
            })
              .then(function (e) {
                if (!e.ok) throw new Error(e.status);
                return e.json();
              })
              .then(function (e) {
                return t(e);
              })
              .catch(function (e) {
                return n(e.message);
              });
          })
        );
      }
      function u(e, t) {
        return new Promise(function (n, i) {
          Object(r.a)({
            path: c + Object(a.c)(e),
            method: "GET",
            headers: new Headers({ Token: t }),
          })
            .then(function (e) {
              if (!e.ok) throw new Error(e.status);
              return e.json();
            })
            .then(function (e) {
              return n(e);
            })
            .catch(function (e) {
              return i(e.message);
            });
        });
      }
    },
    49: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      }),
        n.d(t, "b", function () {
          return h;
        });
      var r = n(7),
        a = n.n(r),
        i = n(16),
        o = n(28),
        c = n(44),
        s = (n(40), n(109), n(39)),
        u = {
          coursesList: [],
          currentCourse: {
            id: void 0,
            data: {},
            announcementsList: [],
            activitiesList: [],
          },
        },
        l = { set_list: "SET_LIST", set_current_course: "SET_CURRENT_COURSE" },
        d = {
          setCurrentCourse: function (e, t) {
            return function (n) {
              n(
                h.actions.setCurrentCourse({
                  type: l.setCurrentCourse,
                  field: e,
                  data: t,
                })
              );
            };
          },
          getCoursesList: function () {
            return (function () {
              var e = Object(i.a)(
                a.a.mark(function e(t, n) {
                  var r;
                  return a.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = n().auth.user.ID),
                            e.abrupt(
                              "return",
                              c
                                .b(void 0, n().auth.authToken)
                                .then(function (e) {
                                  t(
                                    h.actions.setCoursesList({
                                      type: l.set_list,
                                      list: e
                                        .filter(function (e) {
                                          return e.TeacherID === r;
                                        })
                                        .sort(function (e, t) {
                                          return (
                                            new Date(t.CreationDate) -
                                            new Date(e.CreationDate)
                                          );
                                        }),
                                    })
                                  );
                                })
                                .catch(function (e) {
                                  console.log(e),
                                    t(
                                      h.actions.setCoursesList({
                                        type: l.set_list,
                                        list: s.d,
                                      })
                                    );
                                })
                            )
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })();
          },
          getCourseData: function (e) {
            return function (t, n) {
              return c
                .c({ id: e }, n().auth.authToken)
                .then(function (e) {
                  t(
                    h.actions.setCurrentCourse({
                      type: l.set_current_course,
                      field: "data",
                      data: e,
                    })
                  );
                })
                .catch(function (n) {
                  console.log(n),
                    t(
                      h.actions.setCurrentCourse({
                        type: l.set_current_course,
                        field: "data",
                        data: s.d.find(function (t) {
                          return t.ID === e;
                        }),
                      })
                    );
                });
            };
          },
        },
        h = Object(o.b)({
          name: "courses",
          initialState: u,
          reducers: {
            setCoursesList: function (e, t) {
              var n = t.payload.list;
              e.coursesList = n;
            },
            setCurrentCourse: function (e, t) {
              var n = t.payload,
                r = n.field,
                a = n.data;
              e.currentCourse[r] = a;
            },
          },
        });
    },
    55: function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return u;
      }),
        n.d(t, "f", function () {
          return l;
        }),
        n.d(t, "e", function () {
          return d;
        }),
        n.d(t, "a", function () {
          return h;
        }),
        n.d(t, "g", function () {
          return f;
        }),
        n.d(t, "b", function () {
          return m;
        }),
        n.d(t, "h", function () {
          return p;
        }),
        n.d(t, "c", function () {
          return b;
        });
      var r = n(10),
        a = n(18),
        i = n(44),
        o = i.a + "/GetAllClinicalCases",
        c = i.a + "/AddClinicalCase",
        s = i.a + "/RemoveClinicalCase";
      function u(e, t) {
        return new Promise(function (n, i) {
          Object(r.a)({
            path: "/ClinicalCases/GetAllClinicalCases" + Object(a.c)(e),
            method: "GET",
            headers: new Headers({ Token: t }),
          })
            .then(function (e) {
              if (!e.ok) throw new Error(e.status);
              return e.json();
            })
            .then(function (e) {
              return n(e);
            })
            .catch(function (e) {
              return i(e.message);
            });
        });
      }
      function l(e, t) {
        return new Promise(function (n, i) {
          Object(r.a)({
            path: "/ClinicalCases/GetClinicalCase" + Object(a.c)(e),
            method: "GET",
            headers: new Headers({ Token: t }),
          })
            .then(function (e) {
              if (!e.ok) throw new Error(e.status);
              return e.json();
            })
            .then(function (e) {
              return n(e);
            })
            .catch(function (e) {
              return i(e.message);
            });
        });
      }
      function d(e, t) {
        return new Promise(function (n, i) {
          Object(r.a)({
            path: o + Object(a.c)(e),
            method: "GET",
            headers: new Headers({ Token: t }),
          })
            .then(function (e) {
              if (!e.ok) throw new Error(e.status);
              return e.json();
            })
            .then(function (e) {
              return n(e);
            })
            .catch(function (e) {
              return i(e.message);
            });
        });
      }
      function h(e, t) {
        return new Promise(function (n, a) {
          Object(r.a)({
            path: c,
            method: "POST",
            headers: new Headers({ Token: t }),
            body: JSON.stringify({
              CourseID: e.CourseID,
              ClinicalCaseID: e.ClinicalCaseID,
              Displayable: 1,
            }),
          })
            .then(function (e) {
              if (!e.ok) throw new Error(e.status);
              return "It works!";
            })
            .then(function (e) {
              return n(e);
            })
            .catch(function (e) {
              return a(e.message);
            });
        });
      }
      function f(e, t) {
        return new Promise(function (n, a) {
          Object(r.a)({
            path: s,
            method: "DELETE",
            headers: new Headers({ Token: t }),
            body: JSON.stringify({
              CourseID: e.CourseID,
              ClinicalCaseID: e.ClinicalCaseID,
            }),
          })
            .then(function (e) {
              if (!e.ok) throw new Error(e.status);
              return "It works!";
            })
            .then(function (e) {
              return n(e);
            })
            .catch(function (e) {
              return a(e.message);
            });
        });
      }
      function m(e, t) {
        return new Promise(function (n, a) {
          Object(r.a)({
            path: "/ClinicalCases/CreateClinicalCase",
            method: "POST",
            headers: new Headers({ Token: t }),
            body: JSON.stringify({
              Title: e.Title,
              Description: e.Description,
              Media: e.Media,
              TeacherID: e.TeacherID,
            }),
          })
            .then(function (e) {
              if (!e.ok) throw new Error(e.status);
              return "It works!";
            })
            .then(function (e) {
              return n(e);
            })
            .catch(function (e) {
              return a(e.message);
            });
        });
      }
      function p(e, t) {
        return new Promise(function (n, a) {
          Object(r.a)({
            path: "/ClinicalCases/UpdateClinicalCase",
            method: "POST",
            headers: new Headers({ Token: t }),
            body: JSON.stringify({
              ID: e.ID,
              Title: e.Title,
              Description: e.Description,
              Media: e.Media,
              TeacherID: e.TeacherID,
            }),
          })
            .then(function (e) {
              if (!e.ok) throw new Error(e.status);
              return "It works!";
            })
            .then(function (e) {
              return n(e);
            })
            .catch(function (e) {
              return a(e.message);
            });
        });
      }
      function b(e, t) {
        return new Promise(function (n, a) {
          Object(r.a)({
            path: "/ClinicalCases/DeleteClinicalCase",
            method: "DELETE",
            headers: new Headers({ Token: t }),
            body: JSON.stringify({ ID: e.ID }),
          })
            .then(function (e) {
              if (!e.ok) throw new Error(e.status);
              return "It works!";
            })
            .then(function (e) {
              return n(e);
            })
            .catch(function (e) {
              return a(e.message);
            });
        });
      }
    },
    65: function (e, t, n) {
      "use strict";
      var r = n(11),
        a = n(9),
        i = n(0),
        o = n.n(i),
        c = n(2);
      t.a = function (e) {
        var t = e.title,
          n = e.toolbar,
          s = e.component,
          u = e.children,
          l = e.className;
        return Object(c.jsxs)("div", {
          className: "container-fluid ".concat(
            null !== l && void 0 !== l ? l : ""
          ),
          children: [
            Object(c.jsxs)("div", {
              className: "row pb-3",
              children: [
                Object(c.jsx)("div", {
                  className: "col",
                  children: Object(c.jsx)("h3", {
                    className: "text-dark",
                    children: t,
                  }),
                }),
                n
                  ? Object(c.jsx)("div", {
                      className: "col text-right",
                      children: n.map(function (e, t) {
                        var n = e.title,
                          o = Object(a.a)(e, ["title"]);
                        return Object(i.createElement)(
                          "button",
                          Object(r.a)(Object(r.a)({}, o), {}, { key: t }),
                          n
                        );
                      }),
                    })
                  : s &&
                    Object(c.jsx)("div", {
                      className: "col text-right",
                      children: o.a.createElement(s),
                    }),
              ],
            }),
            u,
          ],
        });
      };
    },
    69: function (e, t, n) {
      "use strict";
      var r = n(2);
      n(0);
      t.a = function (e) {
        var t = e.data,
          n = e.size,
          a = void 0 === n ? 3 : n,
          i = e.limit,
          o = e.children;
        return (function (e) {
          for (
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 3,
              n = [],
              r = 0;
            r < e.length;
            r += t
          )
            n.push(e.slice(r, r + t));
          return n;
        })(i ? t.slice(0, i) : t, a).map(function (e, t) {
          return Object(r.jsx)(
            "div",
            {
              className: "row mb-3",
              children: e.map(function (e, t) {
                return Object(r.jsx)(
                  "div",
                  {
                    className: "col-".concat(Math.ceil(12 / a)),
                    children: o(e),
                  },
                  t
                );
              }),
            },
            t
          );
        });
      };
    },
    8: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      }),
        n.d(t, "b", function () {
          return c;
        });
      var r = n(28),
        a = "SET_NOTIFICATION",
        i = function (e) {
          var t = "Ocurri\xf3 un error";
          return e && e.length && (t = e), t;
        },
        o = {
          setNotificationField: function (e, t) {
            return function (n) {
              n(c.actions.setNotificationField({ type: a, field: e, data: t }));
            };
          },
          setNotification: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "success";
            return function (n) {
              n(
                c.actions.setNotification({
                  type: a,
                  message: i(e),
                  variant: t,
                })
              );
            };
          },
        },
        c = Object(r.b)({
          name: "Notification",
          initialState: { open: !1, message: "", variant: "success" },
          reducers: {
            setNotificationField: function (e, t) {
              var n = t.payload,
                r = n.field,
                a = n.data;
              e[r] = a;
            },
            setNotification: function (e, t) {
              var n = t.payload,
                r = n.message,
                a = n.variant;
              (e.message = r), (e.variant = a), (e.open = !0);
            },
          },
        });
    },
    85: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return p;
      }),
        n.d(t, "b", function () {
          return b;
        });
      var r = n(11),
        a = n(7),
        i = n.n(a),
        o = n(16),
        c = n(28),
        s = n(8),
        u = n(55),
        l = n(39),
        d = "SET_LIST",
        h = function () {
          return function (e, t) {
            var n = t().auth.user.ID;
            return u
              .d(void 0, t().auth.authToken)
              .then(function (t) {
                e(
                  b.actions.setList({
                    type: d,
                    list: t.filter(function (e) {
                      return e.TeacherID === n;
                    }),
                  })
                );
              })
              .catch(function (t) {
                console.log(t),
                  e(s.a.setNotification(t.message, "error")),
                  e(b.actions.setList({ type: d, list: l.c }));
              });
          };
        },
        f = function () {
          return (function () {
            var e = Object(o.a)(
              i.a.mark(function e(t, n) {
                var r;
                return i.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r = n().courses.currentCourse.id),
                          e.abrupt(
                            "return",
                            u
                              .e({ id: r }, n().auth.authToken)
                              .then(
                                (function () {
                                  var e = Object(o.a)(
                                    i.a.mark(function e(n) {
                                      return i.a.wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                t(
                                                  b.actions.setListByCourse({
                                                    type: d,
                                                    list: [],
                                                  })
                                                ),
                                                (e.next = 3),
                                                Promise.all(
                                                  n.map(
                                                    (function () {
                                                      var e = Object(o.a)(
                                                        i.a.mark(function e(n) {
                                                          var r;
                                                          return i.a.wrap(
                                                            function (e) {
                                                              for (;;)
                                                                switch (
                                                                  (e.prev =
                                                                    e.next)
                                                                ) {
                                                                  case 0:
                                                                    return (
                                                                      (e.next = 2),
                                                                      u.f({
                                                                        id:
                                                                          n.ClinicalCaseID,
                                                                      })
                                                                    );
                                                                  case 2:
                                                                    (r =
                                                                      e.sent),
                                                                      t(
                                                                        b.actions.addListByCourse(
                                                                          {
                                                                            type: d,
                                                                            value: r,
                                                                          }
                                                                        )
                                                                      );
                                                                  case 4:
                                                                  case "end":
                                                                    return e.stop();
                                                                }
                                                            },
                                                            e
                                                          );
                                                        })
                                                      );
                                                      return function (t) {
                                                        return e.apply(
                                                          this,
                                                          arguments
                                                        );
                                                      };
                                                    })()
                                                  )
                                                )
                                              );
                                            case 3:
                                            case "end":
                                              return e.stop();
                                          }
                                      }, e);
                                    })
                                  );
                                  return function (t) {
                                    return e.apply(this, arguments);
                                  };
                                })()
                              )
                              .catch(function (e) {
                                console.log(e),
                                  t(s.a.setNotification(e.message, "error")),
                                  t(
                                    b.actions.sortListByCourse({
                                      type: d,
                                      sort_by: function (e, t) {
                                        return (
                                          new Date(t.CreationDate) -
                                          new Date(e.CreationDate)
                                        );
                                      },
                                    })
                                  );
                              })
                          )
                        );
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })();
        },
        m = function (e) {
          return function (t, n) {
            var r = n().courses.currentCourse.id;
            return u
              .g({ ClinicalCaseID: e, CourseID: r }, n().auth.authToken)
              .then(function () {
                t(s.a.setNotification("Caso Cl\xednico removido exitosamente")),
                  t(f());
              })
              .catch(function (e) {
                console.log(e), t(s.a.setNotification(e.message, "error"));
              });
          };
        },
        p = {
          getCCasesListByCourse: f,
          getCCasesList: h,
          addCCaseToCourse: function (e) {
            return (function () {
              var t = Object(o.a)(
                i.a.mark(function t(n, r) {
                  var a;
                  return i.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (a = r().courses.currentCourse.id),
                            t.abrupt(
                              "return",
                              u
                                .a(
                                  { ClinicalCaseID: e, CourseID: a },
                                  r().auth.authToken
                                )
                                .then(function () {
                                  n(
                                    s.a.setNotification(
                                      "Caso Cl\xednico a\xf1adido exitosamente"
                                    )
                                  ),
                                    n(f());
                                })
                                .catch(function (e) {
                                  console.log(e),
                                    n(s.a.setNotification(e.message, "error"));
                                })
                            )
                          );
                        case 2:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e, n) {
                return t.apply(this, arguments);
              };
            })();
          },
          createCCase: function (e) {
            return (function () {
              var t = Object(o.a)(
                i.a.mark(function t(n, a) {
                  var o;
                  return i.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (o = a().auth.user.ID),
                            t.abrupt(
                              "return",
                              u
                                .b(
                                  Object(r.a)(
                                    Object(r.a)({}, e),
                                    {},
                                    { TeacherID: o }
                                  ),
                                  a().auth.authToken
                                )
                                .then(function () {
                                  n(
                                    s.a.setNotification(
                                      "Caso Cl\xednico creado exitosamente"
                                    )
                                  ),
                                    n(h());
                                })
                                .catch(function (e) {
                                  console.log(e),
                                    n(s.a.setNotification(e.message, "error"));
                                })
                            )
                          );
                        case 2:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e, n) {
                return t.apply(this, arguments);
              };
            })();
          },
          updateCCase: function (e) {
            return function (t, n) {
              var a = n().auth.user.ID;
              return u
                .h(
                  Object(r.a)(Object(r.a)({}, e), {}, { TeacherID: a }),
                  n().auth.authToken
                )
                .then(function () {
                  t(
                    s.a.setNotification(
                      "Caso Cl\xednico actualizado exitosamente"
                    )
                  ),
                    t(h()),
                    t(f());
                })
                .catch(function (e) {
                  console.log(e), t(s.a.setNotification(e.message, "error"));
                });
            };
          },
          removeCCase: m,
          deleteCCaseByCourse: function (e) {
            return function (t, n) {
              return t(m(e))
                .then(function () {
                  return u.c({ ID: e }, n().auth.authToken);
                })
                .then(function () {
                  t(
                    s.a.setNotification(
                      "Caso Cl\xednico eliminado exitosamente"
                    )
                  ),
                    t(h()),
                    t(f());
                })
                .catch(function (e) {
                  console.log(e), t(s.a.setNotification(e.message, "error"));
                });
            };
          },
        },
        b = Object(c.b)({
          name: "clinical-cases",
          initialState: { ccasesList: [], ccasesListByCourse: [] },
          reducers: {
            setList: function (e, t) {
              var n = t.payload.list;
              e.ccasesList = n;
            },
            setListByCourse: function (e, t) {
              var n = t.payload.list;
              e.ccasesListByCourse = n;
            },
            addListByCourse: function (e, t) {
              var n = t.payload.value;
              e.ccasesListByCourse.push(n);
            },
            sortListByCourse: function (e, t) {
              var n = t.payload.sort_by;
              e.ccasesListByCourse.sort(n);
            },
          },
        });
    },
    87: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return y;
      }),
        n.d(t, "b", function () {
          return D;
        });
      var r = n(11),
        a = n(7),
        i = n.n(a),
        o = n(16),
        c = n(28),
        s = n(8),
        u = n(10),
        l = n(18),
        d = n(44),
        h = d.a + "/GetAllHCN",
        f = d.a + "/AddHCN";
      function m(e, t) {
        return new Promise(function (n, r) {
          Object(u.a)({
            path: "/HCN/GetAllHCN" + Object(l.c)(e),
            method: "GET",
            headers: new Headers({ Token: t }),
          })
            .then(function (e) {
              if (!e.ok) throw new Error(e.status);
              return e.json();
            })
            .then(function (e) {
              return n(e);
            })
            .catch(function (e) {
              return r(e.message);
            });
        });
      }
      function p(e, t) {
        return new Promise(function (n, r) {
          Object(u.a)({
            path: h + Object(l.c)(e),
            method: "GET",
            headers: new Headers({ Token: t }),
          })
            .then(function (e) {
              if (!e.ok) throw new Error(e.status);
              return e.json();
            })
            .then(function (e) {
              return n(e);
            })
            .catch(function (e) {
              return r(e.message);
            });
        });
      }
      function b(e, t) {
        return new Promise(function (n, r) {
          Object(u.a)({
            path: f,
            method: "POST",
            headers: new Headers({ Token: t }),
            body: JSON.stringify({
              HCNID: e.HCNID,
              CourseID: e.CourseID,
              Displayable: 1,
            }),
          })
            .then(function (e) {
              if (!e.ok) throw new Error(e.status);
              return "It works!";
            })
            .then(function (e) {
              return n(e);
            })
            .catch(function (e) {
              return r(e.message);
            });
        });
      }
      function j(e, t) {
        return new Promise(function (n, r) {
          Object(u.a)({
            path: "/HCN/CreateHCNMongo",
            method: "POST",
            headers: new Headers({ Token: t }),
            body: JSON.stringify(e),
          })
            .then(function (e) {
              if (!e.ok) throw new Error(e.status);
              return e.json();
            })
            .then(function (e) {
              return n(e);
            })
            .catch(function (e) {
              return r(e.message);
            });
        });
      }
      function O(e, t) {
        return new Promise(function (n, r) {
          Object(u.a)({
            path: "/HCN/UpdateHCNMongo",
            method: "POST",
            headers: new Headers({ Token: t }),
            body: JSON.stringify(e),
          })
            .then(function (e) {
              if (!e.ok) throw new Error(e.status);
              return e.json();
            })
            .then(function (e) {
              return n(e);
            })
            .catch(function (e) {
              return r(e.message);
            });
        });
      }
      function v(e, t) {
        return new Promise(function (n, r) {
          Object(u.a)({
            path: "/HCN/GetHCNMongo" + Object(l.c)(e),
            method: "GET",
            headers: new Headers({ Token: t }),
          })
            .then(function (e) {
              if (!e.ok) throw new Error(e.status);
              return e.json();
            })
            .then(function (e) {
              return n(e);
            })
            .catch(function (e) {
              return r(e.message);
            });
        });
      }
      n(40);
      var C = n(39),
        x = "SET_LIST",
        g = function () {
          return (function () {
            var e = Object(o.a)(
              i.a.mark(function e(t, n) {
                var r;
                return i.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r = n().courses.currentCourse.id),
                          e.abrupt(
                            "return",
                            p({ id: r }, n().auth.authToken)
                              .then(function (e) {
                                t(
                                  D.actions.setListByCourse({
                                    type: x,
                                    list: null !== e && void 0 !== e ? e : [],
                                  })
                                );
                              })
                              .catch(function (e) {
                                console.log(e),
                                  t(s.a.setNotification(e.message, "error"));
                              })
                          )
                        );
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })();
        },
        y = {
          getHcnList: function () {
            return (function () {
              var e = Object(o.a)(
                i.a.mark(function e(t, n) {
                  var r;
                  return i.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = n().auth.user.ID),
                            e.abrupt(
                              "return",
                              m(void 0, n().auth.authToken)
                                .then(function (e) {
                                  t(
                                    D.actions.setList({
                                      type: x,
                                      list: e.filter(function (e) {
                                        return e.TeacherID === r;
                                      }),
                                    })
                                  );
                                })
                                .catch(function (e) {
                                  console.log(e),
                                    t(s.a.setNotification(e.message, "error")),
                                    t(
                                      D.actions.setList({ type: x, list: C.e })
                                    );
                                })
                            )
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t, n) {
                return e.apply(this, arguments);
              };
            })();
          },
          getHcnListByCourse: g,
          getHcn: function (e) {
            return (function () {
              var t = Object(o.a)(
                i.a.mark(function t(n, r) {
                  return i.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return t.abrupt(
                            "return",
                            v(e, r().auth.authToken).catch(function (e) {
                              console.log(e),
                                n(s.a.setNotification(e.message, "error"));
                            })
                          );
                        case 1:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e, n) {
                return t.apply(this, arguments);
              };
            })();
          },
          createHcn: function (e) {
            return (function () {
              var t = Object(o.a)(
                i.a.mark(function t(n, a) {
                  var o;
                  return i.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (o = a().auth.user.ID),
                            t.abrupt(
                              "return",
                              j(
                                Object(r.a)(
                                  Object(r.a)({}, e),
                                  {},
                                  { TeacherID: o }
                                ),
                                a().auth.authToken
                              )
                                .then(function () {
                                  s.a.setNotification(
                                    "HCN creada exitosamente"
                                  ),
                                    n(g());
                                })
                                .catch(function (e) {
                                  console.log(e),
                                    n(s.a.setNotification(e.message, "error"));
                                })
                            )
                          );
                        case 2:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e, n) {
                return t.apply(this, arguments);
              };
            })();
          },
          updateHcn: function (e) {
            return (function () {
              var t = Object(o.a)(
                i.a.mark(function t(n, a) {
                  var o;
                  return i.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (o = a().auth.user.ID),
                            t.abrupt(
                              "return",
                              O(
                                Object(r.a)(
                                  Object(r.a)({}, e),
                                  {},
                                  { TeacherID: o }
                                ),
                                a().auth.authToken
                              )
                                .then(function () {
                                  s.a.setNotification(
                                    "HCN actualizada exitosamente"
                                  ),
                                    n(g());
                                })
                                .catch(function (e) {
                                  console.log(e),
                                    n(s.a.setNotification(e.message, "error"));
                                })
                            )
                          );
                        case 2:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e, n) {
                return t.apply(this, arguments);
              };
            })();
          },
          addHcnToCourse: function (e) {
            return (function () {
              var t = Object(o.a)(
                i.a.mark(function t(n, r) {
                  var a;
                  return i.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (a = r().courses.currentCourse.id),
                            t.abrupt(
                              "return",
                              b({ HCNID: e, CourseID: a }, r().auth.authToken)
                                .then(function () {
                                  s.a.setNotification(
                                    "HCN a\xf1adida exitosamente"
                                  ),
                                    n(g());
                                })
                                .catch(function (e) {
                                  console.log(e),
                                    n(s.a.setNotification(e.message, "error"));
                                })
                            )
                          );
                        case 2:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (e, n) {
                return t.apply(this, arguments);
              };
            })();
          },
        },
        D = Object(c.b)({
          name: "hcn",
          initialState: { hcnList: [], hcnListByCourse: [] },
          reducers: {
            setList: function (e, t) {
              var n = t.payload.list;
              e.hcnList = n;
            },
            setListByCourse: function (e, t) {
              var n = t.payload.list;
              e.hcnListByCourse = n;
            },
            addListByCourse: function (e, t) {
              var n = t.payload.value;
              e.hcnListByCourse.push(n);
            },
          },
        });
    },
  },
  [[296, 1, 2]],
]);
//# sourceMappingURL=main.43722947.chunk.js.map
