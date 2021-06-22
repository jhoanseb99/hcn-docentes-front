(this["webpackJsonphcn-docentes-front"] =
  this["webpackJsonphcn-docentes-front"] || []).push([
  [0],
  {
    112: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return v;
      }),
        n.d(t, "b", function () {
          return O;
        });
      var r = n(12),
        a = n(5),
        i = n.n(a),
        c = n(11),
        o = n(28),
        s = n(7),
        u = n(9),
        l = n(17);
      function f(e, t) {
        return new Promise(function (n, r) {
          Object(u.a)({
            path: "/Announcements/GetAllAnnouncements" + Object(l.c)(e),
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
      function d(e, t) {
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
              n(e);
            })
            .catch(function (e) {
              return r(e.message);
            });
        });
      }
      function h(e, t) {
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
              n(e);
            })
            .catch(function (e) {
              return r(e.message);
            });
        });
      }
      function p(e, t) {
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
      n(49);
      var m = n(39),
        b = "SET_LIST",
        j = function () {
          return (function () {
            var e = Object(c.a)(
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
                            f({ CourseID: r }, n().auth.authToken)
                              .then(function (e) {
                                t(
                                  O.actions.setList({
                                    type: b,
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
                                t(s.a.setNotification(e.message, "error")),
                                  t(
                                    O.actions.setList({
                                      type: b,
                                      list: m.b.filter(function (e) {
                                        return e.CourseID === r;
                                      }),
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
        v = {
          setList: function (e) {
            return function (t) {
              t(O.actions.setList({ type: b, list: e }));
            };
          },
          getAnnouncementsList: j,
          updateAnnouncement: function (e) {
            return (function () {
              var t = Object(c.a)(
                i.a.mark(function t(n, a) {
                  var c;
                  return i.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (c = a().courses.currentCourse.id),
                            t.abrupt(
                              "return",
                              d(
                                Object(r.a)(
                                  Object(r.a)({}, e),
                                  {},
                                  { CourseID: c }
                                ),
                                a().auth.authToken
                              )
                                .then(function () {
                                  n(
                                    s.a.setNotification(
                                      "Anuncio actualizado exitosamente"
                                    )
                                  ),
                                    n(j());
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
          createAnnouncement: function (e) {
            return (function () {
              var t = Object(c.a)(
                i.a.mark(function t(n, a) {
                  var c;
                  return i.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (c = a().courses.currentCourse.id),
                            t.abrupt(
                              "return",
                              h(
                                Object(r.a)(
                                  Object(r.a)({}, e),
                                  {},
                                  { CourseID: c }
                                ),
                                a().auth.authToken
                              )
                                .then(function () {
                                  n(
                                    s.a.setNotification(
                                      "Anuncio creado exitosamente"
                                    )
                                  ),
                                    n(j());
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
              var t = Object(c.a)(
                i.a.mark(function t(n, r) {
                  return i.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return t.abrupt(
                            "return",
                            p(e, r().auth.authToken)
                              .then(function () {
                                n(
                                  s.a.setNotification(
                                    "Anuncio eliminado exitosamente"
                                  )
                                ),
                                  n(j());
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
        O = Object(o.b)({
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
    126: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return D;
      }),
        n.d(t, "b", function () {
          return x;
        });
      var r = n(12),
        a = n(5),
        i = n.n(a),
        c = n(11),
        o = n(28),
        s = n(7),
        u = n(9),
        l = n(17);
      function f(e, t) {
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
      function d(e, t) {
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
              n(e);
            })
            .catch(function (e) {
              return r(e.message);
            });
        });
      }
      function h(e, t) {
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
      function p(e, t) {
        return new Promise(function (n, r) {
          Object(u.a)({
            path: "/Activities/DeleteActivity",
            method: "DELETE",
            headers: new Headers({ Token: t }),
            body: JSON.stringify({ ID: e.ID }),
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
      function m(e, t) {
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
      function b(e, t) {
        return new Promise(function (n, r) {
          Object(u.a)({
            path: "/SolvedHCN/CreateSolvedHCN",
            method: "POST",
            headers: new Headers({ Token: t }),
            body: JSON.stringify({
              CourseID: e.CourseID,
              ActivityID: e.ActivityID,
              OriginalHCN: e.OriginalHCN,
              TeacherID: e.TeacherID,
            }),
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
      function j(e, t) {
        return new Promise(function (n, r) {
          Object(u.a)({
            path: "/SolvedHCN/DeleteSolvedHCN",
            method: "DELETE",
            headers: new Headers({ Token: t }),
            body: JSON.stringify({ ActivityID: e.ActivityID }),
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
      var v = n(39),
        O = "SET_LIST",
        C = "SET_GRADE_LIST",
        y = function () {
          return (function () {
            var e = Object(c.a)(
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
                            f({ CourseID: r }, n().auth.authToken)
                              .then(function (e) {
                                t(
                                  x.actions.setList({
                                    type: O,
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
                                  t(x.actions.setList({ type: O, list: v.a }));
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
        D = {
          setList: function (e) {
            return function (t) {
              t(x.actions.setList({ type: O, list: e }));
            };
          },
          getActivitiesList: y,
          updateActivity: function (e) {
            return (function () {
              var t = Object(c.a)(
                i.a.mark(function t(n, a) {
                  var c;
                  return i.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (c = a().courses.currentCourse.id),
                            t.abrupt(
                              "return",
                              d(
                                Object(r.a)(
                                  Object(r.a)({}, e),
                                  {},
                                  { CourseID: c }
                                ),
                                a().auth.authToken
                              )
                                .then(function () {
                                  n(
                                    s.a.setNotification(
                                      "Actividad actualizada exitosamente"
                                    )
                                  ),
                                    n(y());
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
              var t = Object(c.a)(
                i.a.mark(function t(n, a) {
                  var c, o, u;
                  return i.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (c = a().courses.currentCourse.id),
                            (o = a().auth.user.ID),
                            (u = a().auth.authToken),
                            t.abrupt(
                              "return",
                              h(
                                Object(r.a)(
                                  Object(r.a)({}, e),
                                  {},
                                  { CourseID: c, TeacherID: o }
                                ),
                                u
                              )
                                .then(function (t) {
                                  return b(
                                    {
                                      CourseID: c,
                                      OriginalHCN: e.HCNID,
                                      TeacherID: o,
                                      ActivityID: t.ID,
                                    },
                                    u
                                  );
                                })
                                .then(function () {
                                  n(
                                    s.a.setNotification(
                                      "Actividad creada exitosamente"
                                    )
                                  ),
                                    n(y());
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
              var t = Object(c.a)(
                i.a.mark(function t(n, r) {
                  var a;
                  return i.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (a = r().auth.authToken),
                            t.abrupt(
                              "return",
                              j({ ActivityID: e }, a)
                                .then(function () {
                                  return p({ ID: e }, a);
                                })
                                .then(function () {
                                  n(
                                    s.a.setNotification(
                                      "Actividad eliminada exitosamente"
                                    )
                                  ),
                                    n(y());
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
          getAllSolvedHcn: function (e) {
            return (function () {
              var t = Object(c.a)(
                i.a.mark(function t(n, r) {
                  return i.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return t.abrupt(
                            "return",
                            m({ id: e }, r().auth.authToken)
                              .then(function (e) {
                                n(x.actions.setGradeList({ type: C, list: e }));
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
        x = Object(o.b)({
          name: "Activies",
          initialState: { activitieslist: [], gradeList: [] },
          reducers: {
            setList: function (e, t) {
              var n = t.payload.list;
              e.activitieslist = n;
            },
            setGradeList: function (e, t) {
              var n = t.payload.list;
              e.gradeList = n;
            },
          },
        });
    },
    17: function (e, t, n) {
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
          return c;
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
      var c = {
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
    189: function (e, t, n) {},
    302: function (e, t, n) {},
    303: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(2),
        a = n(0),
        i = n.n(a),
        c = n(30),
        o = n.n(c),
        s = (n(189), n(21)),
        u = n(163),
        l = n(24),
        f = n(22),
        d = n(52),
        h = n(53),
        p = n(164),
        m = n.n(p);
      var b = function () {
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
                    to: "/courses/announcements",
                    className: "nav-link",
                    children: [
                      Object(r.jsx)(d.a, {
                        icon: h.b,
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
                    to: "/courses/activities",
                    className: "nav-link",
                    children: [
                      Object(r.jsx)(d.a, { icon: h.a, className: "nav-icon" }),
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
                    to: "/courses/clinical-cases",
                    children: [
                      Object(r.jsx)(d.a, { icon: h.d }),
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
                    to: "/courses/hcn",
                    className: "nav-link",
                    children: [
                      Object(r.jsx)(d.a, { icon: h.e, className: "nav-icon" }),
                      Object(r.jsx)("span", {
                        className: "menu-text",
                        children: "HCN",
                      }),
                    ],
                  }),
                }),
                Object(r.jsx)("li", {
                  "aria-haspopup": "true",
                  className: "nav-item",
                  children: Object(r.jsxs)(l.b, {
                    to: "/courses/students",
                    className: "nav-link",
                    children: [
                      Object(r.jsx)(m.a, {}),
                      Object(r.jsx)("span", {
                        className: "menu-text",
                        children: "Estudiantes",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      };
      function j(e) {
        var t = e.children,
          n = e.aside,
          a = void 0 === n || n;
        return Object(r.jsxs)("div", {
          className: "d-flex flex-row",
          children: [
            a && Object(r.jsx)(b, {}),
            Object(r.jsx)("div", {
              className: "content ".concat(a ? "with-aside" : ""),
              children: t,
            }),
          ],
        });
      }
      var v = n(337),
        O = n(308),
        C = n(335),
        y = n(12),
        D = n(10),
        x = function (e) {
          return "" + e;
        };
      function w(e) {
        var t = e.component,
          n = e.aside,
          a = void 0 !== n && n,
          c = Object(D.a)(e, ["component", "aside"]);
        return Object(r.jsx)(
          f.b,
          Object(y.a)(
            Object(y.a)({}, c),
            {},
            {
              children: Object(r.jsx)(j, {
                aside: a,
                children: i.a.createElement(t),
              }),
            }
          )
        );
      }
      var g = n(49);
      var N = function () {
        var e = Object(s.d)(function (e) {
            return e.auth;
          }).user,
          t = Object(s.c)();
        return Object(r.jsxs)(v.a, {
          bg: "dark",
          variant: "dark",
          className: "header navbar-default navbar-fixed-top fixed-top",
          children: [
            Object(r.jsxs)(v.a.Brand, {
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
            Object(r.jsx)(O.a, {
              className: "mr-auto",
              children: Object(r.jsx)(O.a.Link, {
                href: "/courses",
                children: "Mis cursos",
              }),
            }),
            Object(r.jsx)(v.a.Collapse, {
              className: "justify-content-end navbar-dropdown",
              children: Object(r.jsxs)(C.a, {
                title: e.Name,
                id: "collasible-nav-dropdown",
                children: [
                  Object(r.jsx)(C.a.Divider, {}),
                  Object(r.jsx)(C.a.Item, {
                    children: Object(r.jsx)("button", {
                      className: "btn btn-danger",
                      onClick: function () {
                        return t(g.a.logout());
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
      function I(e) {
        var t = e.children;
        return Object(r.jsxs)("div", {
          className: "d-flex flex-column",
          children: [
            Object(r.jsx)(N, {}),
            Object(r.jsx)("div", { className: "page", children: t }),
          ],
        });
      }
      var T = n(67),
        k = n(72),
        A = n(48),
        L = function () {
          return Object(r.jsx)("div", {
            children: Object(r.jsx)("span", {
              children: "No hay datos para mostrar en este momento",
            }),
          });
        };
      var _ = function () {
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
            Object(r.jsx)(T.a, {
              title: "Cursos",
              className: "mb-5",
              children: n.length
                ? Object(r.jsx)(k.a, {
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
                              (t = e.ID), void a(A.a.setCurrentCourse("id", t))
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
                                Object(r.jsx)(d.a, { icon: h.c, size: "3x" }),
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
                : Object(r.jsx)(L, {}),
            }),
            Object(r.jsx)(T.a, {
              title: "Casos Cl\xednicos",
              className: "mb-5",
              children: t.length
                ? Object(r.jsx)(k.a, {
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
                : Object(r.jsx)(L, {}),
            }),
            Object(r.jsx)(T.a, {
              title: "Historias Cl\xednicas Nutricionales",
              className: "pb-5",
              children: e.length
                ? Object(r.jsx)(k.a, {
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
                : Object(r.jsx)(L, {}),
            }),
          ],
        });
      };
      var S = function () {
          var e = Object(s.d)(function (e) {
              return e.courses;
            }).coursesList,
            t = Object(s.c)();
          return (
            i.a.useEffect(
              function () {
                t(A.a.getCoursesList());
              },
              [t]
            ),
            Object(r.jsx)(T.a, {
              title: "Cursos",
              children: e
                ? Object(r.jsx)(k.a, {
                    data: e,
                    children: function (e) {
                      return Object(r.jsx)(l.b, {
                        to: "/courses",
                        children: Object(r.jsx)("div", {
                          className: "card custom-card",
                          style: { height: "150px" },
                          onClick: function () {
                            return (
                              (n = e.ID), void t(A.a.setCurrentCourse("id", n))
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
                                Object(r.jsx)(d.a, { icon: h.c, size: "3x" }),
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
        E = n(7),
        H = n(88),
        P = n(86),
        B = n(5),
        G = n.n(B),
        F = n(11),
        M = n(28),
        z = n(9),
        U = n(17);
      function R(e, t) {
        return new Promise(function (n, r) {
          Object(z.a)({
            path: "/Students/GetAllStudents" + Object(U.c)(e),
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
      var J = "SET_LIST",
        q = function (e) {
          return (function () {
            var t = Object(F.a)(
              G.a.mark(function t(n, r) {
                return G.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          "return",
                          R(e, r().auth.authToken)
                            .then(function (e) {
                              n(V.actions.setList({ type: J, list: e }));
                            })
                            .catch(function (e) {
                              console.log(e),
                                n(E.a.setNotification(e.message, "error"));
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
        V = Object(M.b)({
          name: "students",
          initialState: { studentsList: [] },
          reducers: {
            setList: function (e, t) {
              var n = t.payload.list;
              e.studentsList = n;
            },
          },
        }),
        W = n(339),
        X = n(336);
      function Y(e) {
        return Object(r.jsx)(
          X.a,
          Object(y.a)({ elevation: 6, variant: "filled" }, e)
        );
      }
      var K = function (e) {
          var t = e.open,
            n = e.setOpen,
            a = e.severity,
            i = e.anchorOrigin,
            c = void 0 === i ? { vertical: "bottom", horizontal: "right" } : i,
            o = e.message,
            s = function (e, t) {
              "clickaway" !== t && n(!1);
            };
          return Object(r.jsx)(W.a, {
            open: t,
            anchorOrigin: c,
            autoHideDuration: 4e3,
            onClose: s,
            children: Object(r.jsx)(Y, {
              onClose: s,
              severity: a,
              children: o,
            }),
          });
        },
        Q = n(334);
      var Z = function () {
          return Object(r.jsx)("div", {
            className: "container vh-100",
            children: Object(r.jsx)("div", {
              className: "row h-100 text-center",
              children: Object(r.jsx)("div", {
                className: "col align-self-center",
                children: Object(r.jsx)(Q.a, {
                  className: "ml-2",
                  size: 50,
                  color: "primary",
                }),
              }),
            }),
          });
        },
        $ = i.a.lazy(function () {
          return Promise.all([n.e(3), n.e(5)]).then(n.bind(null, 360));
        }),
        ee = i.a.lazy(function () {
          return n.e(4).then(n.bind(null, 363));
        }),
        te = i.a.lazy(function () {
          return n.e(6).then(n.bind(null, 361));
        });
      function ne() {
        var e = Object(s.c)(),
          t = Object(s.d)(function (e) {
            return e.notifications;
          }),
          n = t.open,
          a = t.message,
          c = t.variant;
        return (
          i.a.useEffect(
            function () {
              e(H.a.getCCasesList()),
                e(P.a.getHcnList()),
                e(A.a.getCoursesList()),
                e(q());
            },
            [e]
          ),
          Object(r.jsxs)(i.a.Suspense, {
            fallback: Object(r.jsx)(Z, {}),
            children: [
              Object(r.jsxs)(f.d, {
                children: [
                  Object(r.jsx)(f.a, { exact: !0, from: "/", to: "/home" }),
                  Object(r.jsx)(w, { exact: !0, path: "/home", component: _ }),
                  Object(r.jsx)(w, { path: "/clinical-cases", component: ee }),
                  Object(r.jsx)(w, { path: "/hcn", component: te }),
                  Object(r.jsx)(w, {
                    exact: !0,
                    path: "/courses/all",
                    component: S,
                  }),
                  Object(r.jsx)(w, {
                    path: "/courses",
                    aside: !0,
                    component: $,
                  }),
                  Object(r.jsx)(f.a, { to: "/error/404" }),
                ],
              }),
              Object(r.jsx)(K, {
                open: n,
                setOpen: function (t) {
                  e(E.a.setNotificationField("open", t));
                },
                message: a,
                severity: c,
              }),
            ],
          })
        );
      }
      function re() {
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
      function ae() {
        return Object(r.jsxs)(f.d, {
          children: [
            Object(r.jsx)(f.a, { from: "/error", exact: !0, to: "/error/404" }),
            Object(r.jsx)(f.b, { path: "/error/404", component: re }),
            Object(r.jsx)(f.a, { to: "/error" }),
          ],
        });
      }
      var ie = n(125),
        ce = n(89),
        oe = "/Authentication/Login";
      function se() {
        return (se = Object(F.a)(
          G.a.mark(function e(t, n) {
            return G.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      new Promise(function (e, r) {
                        Object(z.a)({
                          path: oe,
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
      var ue = { username: "", password: "" };
      var le = function () {
        var e = Object(s.c)(),
          t = ce
            .a()
            .shape({
              username: ce
                .b()
                .min(3, "M\xednimo 3 car\xe1cteres")
                .max(50, "M\xe1ximo 50 car\xe1cteres")
                .required("Campo requerido"),
              password: ce
                .b()
                .min(3, "M\xednimo 3 car\xe1cteres")
                .max(50, "M\xe1ximo 50 car\xe1cteres")
                .required("Campo requerido"),
            }),
          n = Object(ie.a)({
            initialValues: ue,
            validationSchema: t,
            onSubmit: function (t, n) {
              var r = n.setStatus,
                a = n.setSubmitting;
              setTimeout(function () {
                (function (e, t) {
                  return se.apply(this, arguments);
                })(t.username, t.password)
                  .then(function (t) {
                    a(!1);
                    var n = t.Token,
                      r = Object(D.a)(t, ["Token"]);
                    e(g.a.login(n)), e(g.a.fulfillUser(r));
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
                      Object(r.jsx)(X.a, {
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
                      Object(y.a)(
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
                      Object(y.a)(
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
                          Object(r.jsx)(Q.a, {
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
      var fe = function () {
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
              children: Object(r.jsxs)(f.d, {
                children: [
                  Object(r.jsx)(f.b, { path: "/auth/login", component: le }),
                  Object(r.jsx)(f.a, {
                    from: "/auth",
                    exact: !0,
                    to: "/auth/login",
                  }),
                  Object(r.jsx)(f.a, { to: "/auth/login" }),
                ],
              }),
            }),
          }),
        });
      };
      function de() {
        var e = Object(s.d)(function (e) {
          return { isAuthorized: null != e.auth.user };
        }, s.b).isAuthorized;
        return Object(r.jsxs)(f.d, {
          children: [
            e
              ? Object(r.jsx)(f.a, { from: "/auth", to: "/" })
              : Object(r.jsx)(f.b, { children: Object(r.jsx)(fe, {}) }),
            Object(r.jsx)(f.b, { path: "/error", component: ae }),
            e
              ? Object(r.jsx)(I, { children: Object(r.jsx)(ne, {}) })
              : Object(r.jsx)(f.a, { to: "/auth/login" }),
          ],
        });
      }
      n(302);
      var he = function (e) {
          var t = e.store,
            n = e.persistor,
            a = e.basename;
          return Object(r.jsx)(s.a, {
            store: t,
            children: Object(r.jsx)(u.a, {
              persistor: n,
              children: Object(r.jsx)(l.a, {
                basename: a,
                children: Object(r.jsx)(de, {}),
              }),
            }),
          });
        },
        pe = n(25),
        me = n(174),
        be = n(110),
        je = n(26),
        ve = n(112),
        Oe = n(126),
        Ce = Object(je.c)({
          auth: g.b,
          notifications: E.b.reducer,
          announcements: ve.b.reducer,
          activities: Oe.b.reducer,
          courses: A.b.reducer,
          clinicalCases: H.b.reducer,
          hcn: P.b.reducer,
          students: V.reducer,
        }),
        ye = Object(me.a)(),
        De = [].concat(
          Object(pe.a)(
            Object(M.c)({
              immutableCheck: !1,
              serializableCheck: !1,
              thunk: !0,
            })
          ),
          [ye]
        ),
        xe = Object(M.a)({ reducer: Ce, middleware: De, devTools: !1 }),
        we = Object(be.b)(xe),
        ge = xe,
        Ne = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(7)
              .then(n.bind(null, 358))
              .then(function (t) {
                var n = t.getCLS,
                  r = t.getFID,
                  a = t.getFCP,
                  i = t.getLCP,
                  c = t.getTTFB;
                n(e), r(e), a(e), i(e), c(e);
              });
        };
      o.a.render(
        Object(r.jsx)(he, { store: ge, persistor: we, basename: "" }),
        document.getElementById("root")
      ),
        Ne();
    },
    36: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return i;
      }),
        n.d(t, "c", function () {
          return u;
        }),
        n.d(t, "d", function () {
          return l;
        }),
        n.d(t, "a", function () {
          return f;
        });
      var r = n(9),
        a = n(17),
        i = "/Courses",
        c = i + "/GetAllCourses",
        o = i + "/GetCourse",
        s = i + "/GetAllStudentsCourse";
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
      function l(e, t) {
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
      function f(e, t) {
        return new Promise(function (n, i) {
          Object(r.a)({
            path: s + Object(a.c)(e),
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
          return c;
        }),
        n.d(t, "e", function () {
          return o;
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
        c = [
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
        o = [
          { ID: 1, TeacherID: 1 },
          { ID: 2, TeacherID: 1 },
          { ID: 3, TeacherID: 1 },
          { ID: 4, TeacherID: 2 },
          { ID: 5, TeacherID: 3 },
        ];
    },
    48: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return f;
      }),
        n.d(t, "b", function () {
          return d;
        });
      var r = n(5),
        a = n.n(r),
        i = n(11),
        c = n(28),
        o = n(36),
        s = (n(49), n(112), n(39)),
        u = {
          coursesList: [],
          currentCourse: {
            id: void 0,
            data: {},
            announcementsList: [],
            activitiesList: [],
            studentsList: [],
          },
        },
        l = { set_list: "SET_LIST", set_current_course: "SET_CURRENT_COURSE" },
        f = {
          setCurrentCourse: function (e, t) {
            return function (n) {
              n(
                d.actions.setCurrentCourse({
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
                              o
                                .c(void 0, n().auth.authToken)
                                .then(function (e) {
                                  t(
                                    d.actions.setCoursesList({
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
                                      d.actions.setCoursesList({
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
            return (function () {
              var t = Object(i.a)(
                a.a.mark(function t(n, r) {
                  return a.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return t.abrupt(
                            "return",
                            o
                              .d({ ID: e }, r().auth.authToken)
                              .then(function (e) {
                                n(
                                  d.actions.setCurrentCourse({
                                    type: l.set_current_course,
                                    field: "data",
                                    data: e,
                                  })
                                );
                              })
                              .catch(function (t) {
                                console.log(t),
                                  n(
                                    d.actions.setCurrentCourse({
                                      type: l.set_current_course,
                                      field: "data",
                                      data: s.d.find(function (t) {
                                        return t.ID === e;
                                      }),
                                    })
                                  );
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
          getAllStudentsCourse: function () {
            return (function () {
              var e = Object(i.a)(
                a.a.mark(function e(t, n) {
                  var r;
                  return a.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = n().courses.currentCourse.id),
                            e.abrupt(
                              "return",
                              o
                                .a({ ID: r }, n().auth.authToken)
                                .then(function (e) {
                                  console.log(e),
                                    t(
                                      d.actions.setCurrentCourse({
                                        type: l.set_current_course,
                                        field: "studentsList",
                                        data: e,
                                      })
                                    );
                                })
                                .catch(function (e) {
                                  console.log(e);
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
        },
        d = Object(c.b)({
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
    49: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return u;
      }),
        n.d(t, "a", function () {
          return l;
        });
      var r = n(12),
        a = n(110),
        i = n(168),
        c = n.n(i),
        o =
          (n(304),
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
          { storage: c.a, key: "v706-auth", whitelist: ["user", "authToken"] },
          function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : s,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case o.Login:
                var n = t.payload.authToken;
                return { authToken: n, user: void 0 };
              case o.Register:
                var a = t.payload.authToken;
                return { authToken: a, user: void 0 };
              case o.Logout:
                return s;
              case o.UserLoaded:
                var i = t.payload.user;
                return Object(r.a)(Object(r.a)({}, e), {}, { user: i });
              case o.setSessionExpired:
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
            return { type: o.Login, payload: { authToken: e } };
          },
          register: function (e) {
            return { type: o.Register, payload: { authToken: e } };
          },
          logout: function () {
            return { type: o.Logout };
          },
          requestUser: function (e) {
            return { type: o.UserRequested, payload: { user: e } };
          },
          fulfillUser: function (e) {
            return { type: o.UserLoaded, payload: { user: e } };
          },
          setUser: function (e) {
            return { type: o.SetUser, payload: { user: e } };
          },
          setSessionExpired: function () {
            return { type: o.setSessionExpired };
          },
        };
    },
    55: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return l;
      }),
        n.d(t, "e", function () {
          return f;
        }),
        n.d(t, "d", function () {
          return d;
        }),
        n.d(t, "a", function () {
          return h;
        }),
        n.d(t, "f", function () {
          return p;
        }),
        n.d(t, "b", function () {
          return m;
        }),
        n.d(t, "g", function () {
          return b;
        }),
        n.d(t, "h", function () {
          return j;
        });
      var r = n(9),
        a = n(17),
        i = n(36),
        c = i.b + "/GetAllClinicalCases",
        o = i.b + "/AddClinicalCase",
        s = i.b + "/RemoveClinicalCase",
        u = i.b + "/VisibilityClinicalCase";
      function l(e, t) {
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
      function f(e, t) {
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
            path: c + Object(a.c)(e),
            method: "GET",
            headers: new Headers({ Token: t }),
          })
            .then(function (e) {
              if (("404" == e.status && n([]), !e.ok))
                throw new Error(e.status);
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
            path: o,
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
      function p(e, t) {
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
              n(e);
            })
            .catch(function (e) {
              return a(e.message);
            });
        });
      }
      function b(e, t) {
        return new Promise(function (n, a) {
          Object(r.a)({
            path: "/ClinicalCases/UpdateClinicalCase",
            method: "PUT",
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
              n(e);
            })
            .catch(function (e) {
              return a(e.message);
            });
        });
      }
      function j(e, t) {
        return new Promise(function (n, a) {
          Object(r.a)({
            path: u,
            method: "POST",
            headers: new Headers({ Token: t }),
            body: JSON.stringify({
              CourseID: e.CourseID,
              ClinicalCaseID: e.ClinicalCaseID,
              Displayable: e.Displayable,
            }),
          })
            .then(function (e) {
              if (!e.ok) throw new Error(e.status);
              n(e);
            })
            .catch(function (e) {
              return a(e.message);
            });
        });
      }
    },
    67: function (e, t, n) {
      "use strict";
      var r = n(12),
        a = n(10),
        i = n(0),
        c = n.n(i),
        o = n(2);
      t.a = function (e) {
        var t = e.title,
          n = e.toolbar,
          s = e.component,
          u = e.children,
          l = e.className;
        return Object(o.jsxs)("div", {
          className: "container-fluid ".concat(
            null !== l && void 0 !== l ? l : ""
          ),
          children: [
            Object(o.jsxs)("div", {
              className: "row pb-3",
              children: [
                Object(o.jsx)("div", {
                  className: "col",
                  children: Object(o.jsx)("h3", {
                    className: "text-dark",
                    children: t,
                  }),
                }),
                n
                  ? Object(o.jsx)("div", {
                      className: "col text-right",
                      children: n.map(function (e, t) {
                        var n = e.title,
                          c = Object(a.a)(e, ["title"]);
                        return Object(i.createElement)(
                          "button",
                          Object(r.a)(Object(r.a)({}, c), {}, { key: t }),
                          n
                        );
                      }),
                    })
                  : s &&
                    Object(o.jsx)("div", {
                      className: "col text-right",
                      children: c.a.createElement(s),
                    }),
              ],
            }),
            u,
          ],
        });
      };
    },
    7: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      }),
        n.d(t, "b", function () {
          return o;
        });
      var r = n(28),
        a = "SET_NOTIFICATION",
        i = function (e) {
          var t = "Ocurri\xf3 un error";
          return e && e.length && (t = e), t;
        },
        c = {
          setNotificationField: function (e, t) {
            return function (n) {
              n(o.actions.setNotificationField({ type: a, field: e, data: t }));
            };
          },
          setNotification: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "success";
            return function (n) {
              n(
                o.actions.setNotification({
                  type: a,
                  message: i(e),
                  variant: t,
                })
              );
            };
          },
        },
        o = Object(r.b)({
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
    72: function (e, t, n) {
      "use strict";
      var r = n(2);
      n(0);
      t.a = function (e) {
        var t = e.data,
          n = e.size,
          a = void 0 === n ? 3 : n,
          i = e.limit,
          c = e.children;
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
                    children: c(e),
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
    86: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return k;
      }),
        n.d(t, "b", function () {
          return A;
        });
      var r = n(12),
        a = n(5),
        i = n.n(a),
        c = n(11),
        o = n(28),
        s = n(7),
        u = n(9),
        l = n(17),
        f = n(36),
        d = f.b + "/GetAllHCN",
        h = f.b + "/AddHCN",
        p = f.b + "/RemoveHCN",
        m = f.b + "/VisibilityHCN";
      function b(e, t) {
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
      function j(e, t) {
        return new Promise(function (n, r) {
          Object(u.a)({
            path: d + Object(l.c)(e),
            method: "GET",
            headers: new Headers({ Token: t }),
          })
            .then(
              (function () {
                var e = Object(c.a)(
                  i.a.mark(function e(t) {
                    var n;
                    return i.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (t.ok) {
                                e.next = 2;
                                break;
                              }
                              throw new Error(t.status);
                            case 2:
                              return (e.prev = 2), (e.next = 5), t.json();
                            case 5:
                              return (n = e.sent), e.abrupt("return", n);
                            case 9:
                              return (
                                (e.prev = 9),
                                (e.t0 = e.catch(2)),
                                e.abrupt("return", [])
                              );
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[2, 9]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()
            )
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
            path: h,
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
      function O(e, t) {
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
      function C(e, t) {
        return (
          console.log(e),
          new Promise(function (n, r) {
            Object(u.a)({
              path: "/HCN/UpdateHCNMongo",
              method: "PUT",
              headers: new Headers({ Token: t }),
              body: JSON.stringify(e),
            })
              .then(function (e) {
                if (!e.ok) throw new Error(e.status);
                n(e);
              })
              .catch(function (e) {
                return r(e.message);
              });
          })
        );
      }
      function y(e, t) {
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
      function D(e, t) {
        return new Promise(function (n, r) {
          Object(u.a)({
            path: "/SolvedHCN/UpdateSolvedHCN",
            method: "PUT",
            headers: new Headers({ Token: t }),
            body: JSON.stringify(e),
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
      function x(e, t) {
        return new Promise(function (n, r) {
          Object(u.a)({
            path: p,
            method: "DELETE",
            headers: new Headers({ Token: t }),
            body: JSON.stringify(e),
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
      function w(e, t) {
        return new Promise(function (n, r) {
          Object(u.a)({
            path: m,
            method: "POST",
            headers: new Headers({ Token: t }),
            body: JSON.stringify({
              CourseID: e.CourseID,
              HCNID: e.HCNID,
              Displayable: e.Displayable,
            }),
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
      var g = n(39),
        N = "SET_LIST",
        I = function () {
          return (function () {
            var e = Object(c.a)(
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
                            b(void 0, n().auth.authToken)
                              .then(function (e) {
                                t(
                                  A.actions.setList({
                                    type: N,
                                    list: e.filter(function (e) {
                                      return e.TeacherID === r;
                                    }),
                                  })
                                );
                              })
                              .catch(function (e) {
                                console.log(e),
                                  t(s.a.setNotification(e.message, "error")),
                                  t(A.actions.setList({ type: N, list: g.e }));
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
        T = function () {
          return (function () {
            var e = Object(c.a)(
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
                            j({ CourseID: r }, n().auth.authToken)
                              .then(
                                (function () {
                                  var e = Object(c.a)(
                                    i.a.mark(function e(n) {
                                      var r;
                                      return i.a.wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (e.next = 2),
                                                Promise.all(
                                                  n.map(
                                                    (function () {
                                                      var e = Object(c.a)(
                                                        i.a.mark(function e(t) {
                                                          return i.a.wrap(
                                                            function (e) {
                                                              for (;;)
                                                                switch (
                                                                  (e.prev =
                                                                    e.next)
                                                                ) {
                                                                  case 0:
                                                                    t.Displayable;
                                                                  case 1:
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
                                            case 2:
                                              t(
                                                A.actions.setListByCourse({
                                                  type: N,
                                                  list:
                                                    null !==
                                                      (r = n.filter(function (
                                                        e
                                                      ) {
                                                        return e.Displayable;
                                                      })) && void 0 !== r
                                                      ? r
                                                      : [],
                                                })
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
        k = {
          getHcnList: I,
          getHcnListByCourse: T,
          getHcn: function (e) {
            return (function () {
              var t = Object(c.a)(
                i.a.mark(function t(n, r) {
                  return i.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return t.abrupt(
                            "return",
                            y(e, r().auth.authToken).catch(function (e) {
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
              var t = Object(c.a)(
                i.a.mark(function t(n, a) {
                  var c;
                  return i.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (c = a().auth.user.ID),
                            t.abrupt(
                              "return",
                              O(
                                Object(r.a)(
                                  Object(r.a)({}, e),
                                  {},
                                  { TeacherID: c }
                                ),
                                a().auth.authToken
                              )
                                .then(function () {
                                  n(
                                    s.a.setNotification(
                                      "HCN creada exitosamente"
                                    )
                                  ),
                                    n(I());
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
              var t = Object(c.a)(
                i.a.mark(function t(n, r) {
                  return i.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return t.abrupt(
                            "return",
                            C(e, r().auth.authToken)
                              .then(function () {
                                n(
                                  s.a.setNotification(
                                    "HCN actualizada exitosamente"
                                  )
                                );
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
          updateFeedbackHcn: function (e, t) {
            return (function () {
              var n = Object(c.a)(
                i.a.mark(function n(r, a) {
                  var c;
                  return i.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (c = a().auth.authToken),
                            n.abrupt(
                              "return",
                              C(e, c)
                                .then(function () {
                                  if (t.Reviewed)
                                    return D(
                                      {
                                        ActivityID: t.ActivityID,
                                        Solver: t.Solver,
                                        Reviewed: 0,
                                      },
                                      c
                                    );
                                })
                                .then(function () {
                                  r(
                                    s.a.setNotification(
                                      "HCN actualizada exitosamente"
                                    )
                                  );
                                })
                                .catch(function (e) {
                                  console.log(e),
                                    r(s.a.setNotification(e.message, "error"));
                                })
                            )
                          );
                        case 2:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              );
              return function (e, t) {
                return n.apply(this, arguments);
              };
            })();
          },
          addHcnToCourse: function (e) {
            return (function () {
              var t = Object(c.a)(
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
                              v({ HCNID: e, CourseID: a }, r().auth.authToken)
                                .then(function () {
                                  n(
                                    s.a.setNotification(
                                      "HCN a\xf1adida exitosamente"
                                    )
                                  ),
                                    n(T());
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
          feedbackHcn: function (e) {
            return (function () {
              var t = Object(c.a)(
                i.a.mark(function t(n, r) {
                  var a;
                  return i.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (a = r().auth.authToken),
                            t.abrupt(
                              "return",
                              D(
                                {
                                  ActivityID: e.ActivityID,
                                  Solver: e.Solver,
                                  Reviewed: 1,
                                },
                                a
                              )
                                .then(function () {
                                  n(
                                    s.a.setNotification(
                                      "HCN calificada exitosamente"
                                    )
                                  );
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
          deleteHcn: function (e) {
            return (function () {
              var t = Object(c.a)(
                i.a.mark(function t(n, r) {
                  var a, c;
                  return i.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (a = r().courses.currentCourse.id),
                            (c = r().auth.authToken),
                            t.abrupt(
                              "return",
                              w({ HCNID: e, CourseID: a, Displayable: 0 }, c)
                                .then(function () {
                                  n(T()),
                                    n(
                                      s.a.setNotification(
                                        "HCN eliminada exitosamente"
                                      )
                                    );
                                })
                                .catch(function (e) {
                                  console.log(e),
                                    n(s.a.setNotification(e.message, "error"));
                                })
                            )
                          );
                        case 3:
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
          removeHcn: function (e) {
            return (function () {
              var t = Object(c.a)(
                i.a.mark(function t(n, r) {
                  var a, c;
                  return i.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (a = r().courses.currentCourse.id),
                            console.log(a),
                            (c = r().auth.authToken),
                            t.abrupt(
                              "return",
                              x({ HCNID: e, CourseID: a }, c)
                                .then(function () {
                                  n(T()),
                                    n(
                                      s.a.setNotification(
                                        "HCN removida exitosamente"
                                      )
                                    );
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
        },
        A = Object(o.b)({
          name: "hcn",
          initialState: { hcnList: [], hcnListByCourse: [], hcnObject: {} },
          reducers: {
            setList: function (e, t) {
              var n = t.payload.list;
              (e.hcnList = n),
                n.forEach(function (t) {
                  e.hcnObject[t.ID] = t;
                });
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
    88: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return m;
      }),
        n.d(t, "b", function () {
          return b;
        });
      var r = n(12),
        a = n(5),
        i = n.n(a),
        c = n(11),
        o = n(28),
        s = n(7),
        u = n(55),
        l = n(39),
        f = "SET_LIST",
        d = function () {
          return (function () {
            var e = Object(c.a)(
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
                            u
                              .c(void 0, n().auth.authToken)
                              .then(function (e) {
                                t(
                                  b.actions.setList({
                                    type: f,
                                    list: e.filter(function (e) {
                                      return e.TeacherID === r;
                                    }),
                                  })
                                );
                              })
                              .catch(function (e) {
                                console.log(e),
                                  t(s.a.setNotification(e.message, "error")),
                                  t(b.actions.setList({ type: f, list: l.c }));
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
        h = function () {
          return (function () {
            var e = Object(c.a)(
              i.a.mark(function e(t, n) {
                var r, a;
                return i.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r = n().courses.currentCourse.id),
                          (a = n().auth.authToken),
                          e.abrupt(
                            "return",
                            u
                              .d({ CourseID: r }, a)
                              .then(
                                (function () {
                                  var e = Object(c.a)(
                                    i.a.mark(function e(n) {
                                      return i.a.wrap(function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                t(
                                                  b.actions.setListByCourse({
                                                    type: f,
                                                    list: [],
                                                  })
                                                ),
                                                (e.next = 3),
                                                Promise.all(
                                                  n.map(
                                                    (function () {
                                                      var e = Object(c.a)(
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
                                                                      u.e(
                                                                        {
                                                                          ID: n.ClinicalCaseID,
                                                                        },
                                                                        a
                                                                      )
                                                                    );
                                                                  case 2:
                                                                    (r =
                                                                      e.sent),
                                                                      n.Displayable &&
                                                                        t(
                                                                          b.actions.addListByCourse(
                                                                            {
                                                                              type: f,
                                                                              value:
                                                                                r,
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
                                    b.actions.setListByCourse({
                                      type: f,
                                      list: l.c,
                                    })
                                  ),
                                  t(
                                    b.actions.sortListByCourse({
                                      type: f,
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
                      case 3:
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
        p = function (e) {
          return (function () {
            var t = Object(c.a)(
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
                              .f(
                                { ClinicalCaseID: e, CourseID: a },
                                r().auth.authToken
                              )
                              .then(function () {
                                n(
                                  s.a.setNotification(
                                    "Caso Cl\xednico removido exitosamente"
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
        m = {
          getCCasesListByCourse: h,
          getCCasesList: d,
          addCCaseToCourse: function (e) {
            return (function () {
              var t = Object(c.a)(
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
          createCCase: function (e) {
            return (function () {
              var t = Object(c.a)(
                i.a.mark(function t(n, a) {
                  var c;
                  return i.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (c = a().auth.user.ID),
                            t.abrupt(
                              "return",
                              u
                                .b(
                                  Object(r.a)(
                                    Object(r.a)({}, e),
                                    {},
                                    { TeacherID: c }
                                  ),
                                  a().auth.authToken
                                )
                                .then(function () {
                                  n(
                                    s.a.setNotification(
                                      "Caso Cl\xednico creado exitosamente"
                                    )
                                  ),
                                    n(d());
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
            return (function () {
              var t = Object(c.a)(
                i.a.mark(function t(n, a) {
                  var c;
                  return i.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (c = a().auth.user.ID),
                            t.abrupt(
                              "return",
                              u
                                .g(
                                  Object(r.a)(
                                    Object(r.a)({}, e),
                                    {},
                                    { TeacherID: c }
                                  ),
                                  a().auth.authToken
                                )
                                .then(function () {
                                  n(
                                    s.a.setNotification(
                                      "Caso Cl\xednico actualizado exitosamente"
                                    )
                                  ),
                                    n(d()),
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
          removeCCase: p,
          deleteCCaseByCourse: function (e) {
            return function (t, n) {
              var r = n().courses.currentCourse.id;
              return t(p(e))
                .then(function () {
                  return u.h(
                    { ClinicalCaseID: e, CourseID: r, Displayable: 0 },
                    n().auth.authToken
                  );
                })
                .then(function () {
                  t(
                    s.a.setNotification(
                      "Caso Cl\xednico eliminado exitosamente"
                    )
                  ),
                    t(d()),
                    t(h());
                })
                .catch(function (e) {
                  console.log(e), t(s.a.setNotification(e.message, "error"));
                });
            };
          },
        },
        b = Object(o.b)({
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
    9: function (e, t, n) {
      "use strict";
      var r = n(12),
        a = n(10),
        i = n(17);
      t.a = function (e) {
        var t = e.path,
          n = e.method,
          c = e.headers,
          o = Object(a.a)(e, ["path", "method", "headers"]),
          s = new AbortController(),
          u =
            (setTimeout(function () {
              return s.abort();
            }, 4e3),
            Object(r.a)(
              {
                method: n,
                headers: null !== c && void 0 !== c ? c : new Headers(),
                timeout: 4e3,
                signal: s.signal,
              },
              o
            )),
          l = new Request(i.a + t, u);
        return fetch(l);
      };
    },
  },
  [[303, 1, 2]],
]);
//# sourceMappingURL=main.ea7859ce.chunk.js.map
