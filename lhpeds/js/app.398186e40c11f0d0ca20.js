webpackJsonp([1],{

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const BACKEND_URL = "https://lhpeds.cv19.app:8451";
/* harmony export (immutable) */ __webpack_exports__["b"] = BACKEND_URL;

const URL = BACKEND_URL + "/app";
/* harmony export (immutable) */ __webpack_exports__["a"] = URL;

const FORM_ID = "1";
/* harmony export (immutable) */ __webpack_exports__["e"] = FORM_ID;

const FORM_ID_PDF = "3";
/* harmony export (immutable) */ __webpack_exports__["g"] = FORM_ID_PDF;

const HOUSE_HOLD_NUMBERLHPED = "10";
/* harmony export (immutable) */ __webpack_exports__["c"] = HOUSE_HOLD_NUMBERLHPED;

const HOUSE_HOLD_NUMBER = "10";
/* harmony export (immutable) */ __webpack_exports__["d"] = HOUSE_HOLD_NUMBER;

const HOURS_LIMIT = 24;
/* harmony export (immutable) */ __webpack_exports__["f"] = HOURS_LIMIT;

const YEARS = 18;
/* harmony export (immutable) */ __webpack_exports__["h"] = YEARS;

const EMAIL_TO = "lhcv19app@gmail.com";
/* harmony export (immutable) */ __webpack_exports__["j"] = EMAIL_TO;

const MESSAGE = "When you arrive to your appointment, please remain in the car and call us, and we will let you know when to come in. Keep a mask on at all times, and we will open and close the doors for you, Thank you. From Lighthouse pediatrics";
/* harmony export (immutable) */ __webpack_exports__["i"] = MESSAGE;

const MESSAGE_ARABIC = "عندما تصل إلى موعدك ، يرجى البقاء في السيارة والاتصال بنا ، وسنخبرك بموعد دخولك. احتفظ بقناع في جميع الأوقات ، وسنفتح لك الأبواب ونغلقها ، شكرًا لك. من طب الأطفال المنارة";
/* unused harmony export MESSAGE_ARABIC */


// export const URL_PRODUCTION = "https://lhpeds.cv19.app:8451/app"
// export const URL_STAGE = "https://stag.cv19.app:8449/app"
// export const URL_LOCAL = "http://127.0.0.1:5000"
// export const URL = "http://127.0.0.1:5000"
// export const URL_LHPEDS="https://lhpeds.cv19.app:8451/app"
// https://lhpeds.cv19.app:8451
// cv19: 5432
// stag:5433
// lhpeds:5434

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 308:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__variables__ = __webpack_require__(14);



// import { version } from "punycode";
// This is your plugin object. It can be exported to be used anywhere.

const SBSAjax = {
  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options.
  reloadpage() {

    __WEBPACK_IMPORTED_MODULE_0_vue__["default"].__DefaultBaseRootURL = "";
    __WEBPACK_IMPORTED_MODULE_0_vue__["default"].__BaseRootURL = "";
    __WEBPACK_IMPORTED_MODULE_0_vue__["default"].__BaseServiceRootURL = "";
    __WEBPACK_IMPORTED_MODULE_0_vue__["default"].__BaseServiceRootURLMatrix = "";
    __WEBPACK_IMPORTED_MODULE_0_vue__["default"].__WebSiteRootPath = window.location.pathname.substring(0, window.location.pathname.substring(1).indexOf("/") + 4);

    if (__WEBPACK_IMPORTED_MODULE_0_vue__["default"].__BaseRootURL === "") {
      if (window.location.port !== "" && window.location.port !== 84 && window.location.port !== 443) {
        // Vue.__BaseServiceRootURL = URL_LHPEDS
        __WEBPACK_IMPORTED_MODULE_0_vue__["default"].__BaseServiceRootURL = __WEBPACK_IMPORTED_MODULE_2__variables__["a" /* URL */];
      } else if (window.location.port == "8450") {
        // Vue.__BaseServiceRootURL = URL_PRODUCTION
        __WEBPACK_IMPORTED_MODULE_0_vue__["default"].__BaseServiceRootURL = __WEBPACK_IMPORTED_MODULE_2__variables__["a" /* URL */];
        // Vue.__BaseServiceRootURL = URL_LHPEDS
      } else {
        // Vue.__BaseServiceRootURL = URL_PRODUCTION
        __WEBPACK_IMPORTED_MODULE_0_vue__["default"].__BaseServiceRootURL = __WEBPACK_IMPORTED_MODULE_2__variables__["a" /* URL */];
        // Vue.__BaseServiceRootURL = URL_LHPEDS
      }
    }
  },
  resetUser() {
    window.localStorage.userId = null;
    window.localStorage.first_name = null;
    window.localStorage.last_name = null;
    window.localStorage.hous_hold = null;
    window.localStorage.email = null;
    window.localStorage.phone = null;
    window.localStorage.birthday = null;
    window.localStorage.answerId = false;
    window.localStorage.lastAnswerDate = false;
    window.localStorage.answerAgain = null;
    window.localStorage.takeAgain = 0;
    window.localStorage.answer = "";
  },
  logoutAfterTime() {
    if (window.setTimeOut) {
      clearTimeout(window.setTimeOut);
    }
    window.setTimeOut = setTimeout(function () {

      if (window.call) {} else {

        this.$router.push('/login');
        // window.localStorage.clear()
      }
    }, 1000 * 60 * 40);
  },
  install(Vue, options) {
    this.reloadpage();

    Vue.refreshToken = (operationName, obj, method, callBackfn) => {

      debugger;
      __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post(Vue.__BaseServiceRootURL + "/refresh", {}, {
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + window.localStorage.refreshToken
        }
      }).then(response => {
        debugger;
        if (response && response.data) {
          window.localStorage.token = response.data.token;
          switch (method) {
            case "put":
              Vue.putInvoke(operationName, obj, callBackfn);
              break;
            case "post":
              Vue.postInvoke(operationName, obj, callBackfn);
              break;
            case "get":
              Vue.getInvoke(operationName, obj, callBackfn);
              break;
          }
        }
      }).catch(error => {
        debugger;

        if (error.response.status == 401) {
          debugger;
          localStorage.clear();
          window.location.href = "/login";
        }
      });
    };
    Vue.loginInvoke = Vue.putInvoke = (operationName, obj, callBackfn) => {

      __WEBPACK_IMPORTED_MODULE_1_axios___default.a.put(Vue.__BaseServiceRootURL + operationName, obj, {
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + window.localStorage.token
        }
      }).then(response => {

        //window.__showloader(false);

        if (callBackfn) {
          callBackfn(response);
        }
      }).catch(error => {

        //window.__showloader(false);
        var msgStr = "";
        if (error && error.response) {
          // if(operationName == "registerAccountTemporally"){
          //   window.alert(error.response.data.message.error)
          // }
          if (error.response.status === 500) {
            Vue.Invoke(operationName, obj, callBackfn, self, method);
            return;
          } else if (error.response.status === 401 && window.localStorage.refreshToken && window.localStorage.refreshToken != "undefined") {
            debugger;
            var method = 'put';
            Vue.refreshToken(operationName, obj, method, callBackfn);;
            return;
          } else if (error.response.data && error.response.data) {

            if (error.response.data.message) msgStr += "\r\n" + error.response.data.message;

            for (var i in error.response.data) {
              msgStr += "\r\n" + error.response.data[i];
            }
          }

          if (msgStr == "") {
            for (var i in error.response) {
              msgStr += Array.isArray(error.response) ? "\r\n" : "" + error.response[i];
            }
          }

          if (msgStr == "") {
            msgStr += error;
          }
          if (msgStr == "") {
            msgStr += "Un expected error occured!";
          }
          window.alert(operationName + "Error(s): " + error.response.data.message.error);
        }
      });
    };
    Vue.getInvoke = (operationName, obj, callBackfn) => {
      __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get(Vue.__BaseServiceRootURL + operationName, {
        params: obj, headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + window.localStorage.token
        }
      }).then(response => {
        debugger;
        //window.__showloader(false);

        if (callBackfn) {
          callBackfn(response != null ? response.data : window.alert("response is null"));
        }
      }).catch(error => {

        //window.__showloader(false);
        var msgStr = "";
        if (error && error.response) {
          // if(operationName == "registerAccountTemporally"){
          //   window.alert(error.response.data.message.error)
          // }
          if (error.response.status === 500) {
            Vue.Invoke(operationName, obj, callBackfn, self, method);
            return;
          } else if (error.response.status === 401 && window.localStorage.refreshToken && window.localStorage.refreshToken != "undefined") {
            var method = 'get';
            debugger;
            Vue.refreshToken(operationName, obj, method, callBackfn);;
            return;
          } else if (error.response.data && error.response.data) {

            if (error.response.data.message) msgStr += "\r\n" + error.response.data.message;

            for (var i in error.response.data) {
              msgStr += "\r\n" + error.response.data[i];
            }
          }

          if (msgStr == "") {
            for (var i in error.response) {
              msgStr += Array.isArray(error.response) ? "\r\n" : "" + error.response[i];
            }
          }

          if (msgStr == "") {
            msgStr += error;
          }
          if (msgStr == "") {
            msgStr += "Un expected error occured!";
          }
          window.alert(operationName + "Error(s): " + error.response.data.message.error);
        }
      });
    };
    Vue.postInvoke = (operationName, obj, callBackfn) => {
      __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post(Vue.__BaseServiceRootURL + operationName, obj, {
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + window.localStorage.token
        }
      }).then(response => {
        debugger;
        //window.__showloader(false);

        if (callBackfn) {
          callBackfn(response != null ? response.data : window.alert("response is null"));
        }
      }).catch(error => {

        //window.__showloader(false);
        var msgStr = "";
        if (error && error.response) {
          // if(operationName == "registerAccountTemporally"){
          //   window.alert(error.response.data.message.error)
          // }
          if (error.response.status === 500) {
            Vue.Invoke(operationName, obj, callBackfn, self, method);
            return;
          } else if (error.response.status === 401 && window.localStorage.refreshToken && window.localStorage.refreshToken != "undefined") {
            debugger;
            var method = 'post';
            Vue.refreshToken(operationName, obj, method, callBackfn);;
            return;
          } else if (error.response.data && error.response.data) {

            if (error.response.data.message) msgStr += "\r\n" + error.response.data.message;

            for (var i in error.response.data) {
              msgStr += "\r\n" + error.response.data[i];
            }
          }

          if (msgStr == "") {
            for (var i in error.response) {
              msgStr += Array.isArray(error.response) ? "\r\n" : "" + error.response[i];
            }
          }

          if (msgStr == "") {
            msgStr += error;
          }
          if (msgStr == "") {
            msgStr += "Un expected error occured!";
          }
          window.alert(operationName + "Error(s): " + error.response.data.message.error);
        }
      });
    };

    Vue.InvokeLogin = (operationName, obj, callBackfn) => {
      //window.__showloader(true);
      __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post(Vue.__BaseServiceRootURL + operationName, obj).then(response => {
        //window.__showloader(false);

        if (response) {
          callBackfn(response);
        }
      }).catch(error => {

        //window.__showloader(false);
        if (error.response.status == 400) {
          window.alert("Please Enter Username and Password");
        } else if (error && error.response && error.response.data && error.response.data.message) {

          var msgStr = error.response.data.message;

          alert(msgStr);
        } else if (error && error.response && error.response.data) {
          var msgStr = "";
          for (var i in error.response.data) {
            msgStr += "\r\n" + error.response.data[i];
          }
          window.alert(operationName + "Error(s): " + msgStr);
        } else if (error && error.response) {
          var msgStr = "";
          for (var i in error.response) {
            msgStr += "\r\n" + error.response[i];
          }
          window.alert(operationName + "Error(s): " + msgStr);
        } else if (error) {
          window.alert(operationName + "  " + error);
        } else {
          window.alert(operationName + "Un expected error occured.");
        }

        if (self) {
          self.$router.push("login");
        }
        if (callBackfn) {
          callBackfn(null);
        }
      });
    };
  }
};
/* harmony default export */ __webpack_exports__["a"] = (SBSAjax);

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_newCreate_survey__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_newCreate_survey___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__pages_newCreate_survey__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_view_survey__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_view_survey___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__pages_view_survey__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_save_survey__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_save_survey___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__pages_save_survey__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_TwilioEX__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_TwilioEX___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__pages_TwilioEX__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_resource__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Layout_HomePage__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Layout_HomePage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_Layout_HomePage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_clinic_all_clinic__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_clinic_all_clinic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_clinic_all_clinic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_form_all_form__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_form_all_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_form_all_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_form_create_form__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_form_create_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__components_form_create_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_clinic_create_clinic__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_clinic_create_clinic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__components_clinic_create_clinic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_clinic_edit_clinic__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_clinic_edit_clinic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__components_clinic_edit_clinic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_clinic_delete_clinic__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_clinic_delete_clinic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__components_clinic_delete_clinic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_authentication_Login__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_authentication_Login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__components_authentication_Login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_authentication_Register__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_authentication_Register___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__components_authentication_Register__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_authentication_DoctorRegister__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_authentication_DoctorRegister___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__components_authentication_DoctorRegister__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_authentication_RegisterPhone__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_authentication_RegisterPhone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__components_authentication_RegisterPhone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_authentication_Dashboard__ = __webpack_require__(599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_authentication_Dashboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__components_authentication_Dashboard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_authentication_disclamer__ = __webpack_require__(606);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_authentication_disclamer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__components_authentication_disclamer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_authentication_DoctorApprove__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_authentication_DoctorApprove___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__components_authentication_DoctorApprove__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_user_all_doctors__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_user_all_doctors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__components_user_all_doctors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_user_delete_doctor__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_user_delete_doctor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__components_user_delete_doctor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_table__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__pages_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_Logs__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_Logs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24__pages_Logs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_clientPortal__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_clientPortal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25__pages_clientPortal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_Layout_layout__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_Layout_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26__components_Layout_layout__);





// import NewViewSurvey from '@/pages/newView-survey'















// import Dashboard1 from '@/components/authentication/dashboard'







__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_6_vue_resource__["a" /* default */]);

const router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  mode: 'history',
  routes: [{
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_26__components_Layout_layout___default.a,
    children: [{
      path: '/',
      name: 'HomePage',
      component: __WEBPACK_IMPORTED_MODULE_7__components_Layout_HomePage___default.a
    }, { path: '/all', name: 'AllClinic', component: __WEBPACK_IMPORTED_MODULE_8__components_clinic_all_clinic___default.a, meta: { requiresAuth: true } }, {
      path: '/all-form/:id',
      name: 'AllForm',
      component: __WEBPACK_IMPORTED_MODULE_9__components_form_all_form___default.a, meta: { requiresAuth: true }

    }, {
      path: '/create-clinic',
      name: 'CreateClinic',
      component: __WEBPACK_IMPORTED_MODULE_11__components_clinic_create_clinic___default.a, meta: { requiresAuth: true }

    }, {
      path: '/create-form/:id',
      name: 'CreateForm',
      component: __WEBPACK_IMPORTED_MODULE_10__components_form_create_form___default.a, meta: { requiresAuth: true }
    }, {
      path: '/edit-clinic/:id',
      name: 'EditClinic',
      component: __WEBPACK_IMPORTED_MODULE_12__components_clinic_edit_clinic___default.a, meta: { requiresAuth: true }
    }, {
      path: '/delete-clinic/:id',
      name: 'DeleteClinic',
      component: __WEBPACK_IMPORTED_MODULE_13__components_clinic_delete_clinic___default.a, meta: { requiresAuth: true }
    }, {
      path: '/create_Survey/:id',
      name: 'CreateSurvey',
      component: __WEBPACK_IMPORTED_MODULE_2__pages_newCreate_survey___default.a, meta: { requiresAuth: true }
    }, {
      path: '/view-survey/:id',
      name: 'ViewSurvey',
      component: __WEBPACK_IMPORTED_MODULE_3__pages_view_survey___default.a,
      meta: { requiresAuth: true }
    }, {
      path: '/save-survey/:id',
      name: 'SaveSurvey',
      component: __WEBPACK_IMPORTED_MODULE_4__pages_save_survey___default.a,
      meta: { requiresAuth: true }
    }, {
      path: '/login',
      name: 'login',
      component: __WEBPACK_IMPORTED_MODULE_14__components_authentication_Login___default.a
    }, {
      path: '/register',
      name: 'Register',
      component: __WEBPACK_IMPORTED_MODULE_15__components_authentication_Register___default.a
    }, {
      path: '/doctor_register',
      name: 'DoctorRegister',
      component: __WEBPACK_IMPORTED_MODULE_16__components_authentication_DoctorRegister___default.a
    }, {
      path: '/register-phone',
      name: 'RegisterPhone',
      component: __WEBPACK_IMPORTED_MODULE_17__components_authentication_RegisterPhone___default.a,
      props: route => ({
        phone: route.query.phone
      })
    }, {
      path: '/dashboard',
      name: 'Dashboard',
      component: __WEBPACK_IMPORTED_MODULE_18__components_authentication_Dashboard___default.a, meta: { requiresAuth: true }
    }, {
      path: '/disclamer',
      name: 'Disclamer',
      component: __WEBPACK_IMPORTED_MODULE_19__components_authentication_disclamer___default.a
    },
    // {
    //   path: '/newViewSurvey',
    //   name: 'NewViewSurvey',
    //   component: NewViewSurvey
    // },
    {
      path: '/doctorapprove',
      name: 'DoctorApprove',
      component: __WEBPACK_IMPORTED_MODULE_20__components_authentication_DoctorApprove___default.a
    }, {
      path: '/all-doctor',
      name: 'AllDoctor',
      component: __WEBPACK_IMPORTED_MODULE_21__components_user_all_doctors___default.a, meta: { requiresAuth: true }
    }, {
      path: '/delete-doctor/:id',
      name: 'DeleteDoctor',
      component: __WEBPACK_IMPORTED_MODULE_22__components_user_delete_doctor___default.a, meta: { requiresAuth: true }
    }, {
      path: '/twilioex',
      name: 'TwilioEX',
      component: __WEBPACK_IMPORTED_MODULE_5__pages_TwilioEX___default.a
    }, {
      path: '/table',
      name: 'table',
      component: __WEBPACK_IMPORTED_MODULE_23__pages_table___default.a,
      meta: { requiresAuth: true }

    }, {
      path: '/Logs',
      name: 'Logs',
      component: __WEBPACK_IMPORTED_MODULE_24__pages_Logs___default.a,
      meta: { requiresAuth: true }

    }, {
      path: '/clientPortal',
      name: 'clientPortal',
      component: __WEBPACK_IMPORTED_MODULE_25__pages_clientPortal___default.a,
      meta: { requiresAuth: true }

    }]

  }]
});
/* harmony default export */ __webpack_exports__["a"] = (router);

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requiresAuth)) {

    if (window.localStorage.token) return next();

    return next('/login');
  }

  next();
});

/***/ }),

/***/ 456:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(555)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(484),
  /* template */
  __webpack_require__(629),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(46);



__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* default */].Store({
  state: {
    showHotline: window.localStorage.URL == "https://lhpeds.cv19.app:8451/app" ? false : true,
    housholdNumber: window.localStorage.URL == "https://lhpeds.cv19.app:8451/app" ? true : false,
    // stagOrNot: window.localStorage.URL.includes('stag')
    stagOrNot: window.localStorage.URL == "https://stag.cv19.app:8449/app" ? true : false,
    isLogin: window.localStorage.isLogin == "true" ? true : false,
    user: {
      loggedIn: false,
      data: null
    }
  },

  getters: {
    user(state) {
      return state.user;
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    }
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);

      if (user) {
        commit("SET_USER", {
          displayName: user.name,
          email: user.email,
          user_id: user.id,
          phone: user.phone,
          birthday: user.birthday,
          lastAnswerDate: user.lastAnswerDate,
          answerId: user.answerId,
          answer: user.answer
        });
      } else {
        commit("SET_USER", null);
      }
    }
  }
}));

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_variables__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap_dist_css_bootstrap_min_css__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap_dist_css_bootstrap_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bootstrap_dist_css_bootstrap_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bootstrap_vue_dist_bootstrap_vue_css__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bootstrap_vue_dist_bootstrap_vue_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_bootstrap_vue_dist_bootstrap_vue_css__);
//
//
//
//
//
//
//
//
//
//

// import navbar from "./components/authentication/Navbar";




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "App",
  components: {
    // navbar,
  },
  methods: {
    handler() {
      window.localStorage.URL = __WEBPACK_IMPORTED_MODULE_1__components_variables__["a" /* URL */];
      this.$store.state.isLogin = window.localStorage.isLogin = false;
    }
  },

  created() {
    window.localStorage.URL = __WEBPACK_IMPORTED_MODULE_1__components_variables__["a" /* URL */];
    // if (window.localStorage.token) this.$store.state.isLogin = true;
    window.addEventListener("beforeunload", this.handler);
  },
  Destroy() {
    debugger;
    window.localStorage.clear();
    // window.removeEventListener("beforeunload", this.handler);
  },
  mounted() {
    window.localStorage.URL = __WEBPACK_IMPORTED_MODULE_1__components_variables__["a" /* URL */];

    // window.onhashchange = function() {
    //   if (window.innerDocClick) {
    //     window.innerDocClick = false;
    //   } else {
    //     if (
    //       window.$router.currentRoute.fullPath.include( "view-survey")
    //     ) {
    //       window.$router.push("/login");
    //     }
    //   }
    // };
    window.onpopstate = function (event) {
      if (event.target.location.pathname.includes("view-survey") || event.target.location.pathname == "/login") {
        location.pathname = "/login";
      }
      if (window.localStorage.isDoctor == "false" && event.target.location.pathname == "/table") {
        debugger;
        location.pathname = "/clientPortal";
      }
    };
  }
});

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuejs_datepicker__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__variables__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/*eslint-disable*/
//eslint-disable-next-line



// import Message from "vue-beautiful-chat";
// Vue.component("my-form", {
//   template: "#my-form",
// });

// Vue.component("vue-toggle-btn", VueToggleBtn);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "voice",
  components: {
    Datepicker: __WEBPACK_IMPORTED_MODULE_1_vuejs_datepicker__["a" /* default */]
  },
  data() {
    return {
      // date: "",
      stopAudio: false,

      disabledDatesOfBirthday: {
        from: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1)
      },

      disabledDatess: {
        from: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1),
        to: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 14)
      },
      showButton: false,
      messageList: [],
      audio: null,
      hideButton: true,
      typeMessagePlaceHolder: "Write text OR click mic to speak",
      //for LHPEdS "Madonna"
      showMic: window.localStorage.URL == "https://lhpeds.cv19.app:8451/app" ? false : true,

      color: {
        type: Object,
        required: false,
        validator: c => "header" in c && "bg" in c.header && "text" in c.header && "launcher" in c && "bg" in c.launcher && "messageList" in c && "bg" in c.messageList && "sentMessage" in c && "bg" in c.sentMessage && "text" in c.sentMessage && "receivedMessage" in c && "bg" in c.receivedMessage && "text" in c.receivedMessage && "userInput" in c && "bg" in c.userInput && "text" in c.userInput,
        default: function () {
          return {
            header: {
              bg: "#5DB2FF",
              text: "#ffffff"
            },
            launcher: {
              bg: "#5DB2FF"
            },
            messageList: {
              bg: "#ffffff"
            },
            sentMessage: {
              bg: "#5DB2FF",
              text: "#ffffff"
            },
            receivedMessage: {
              bg: "#f4f7f9",
              text: "#ffffff"
            },
            userInput: {
              bg: "#f4f7f9",
              text: "#565867"
            }
          };
        }
      },
      msgText: "",
      // :$store.state.titleChat,

      isOpen: true,
      context: {
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        backend_url: __WEBPACK_IMPORTED_MODULE_2__variables__["b" /* BACKEND_URL */],
        household_number: __WEBPACK_IMPORTED_MODULE_2__variables__["d" /* HOUSE_HOLD_NUMBER */]
      },
      isChatOpenChat: true,

      newMessagesCount: 0,
      isChatOpen: true,
      showTypingIndicator: "", // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: " #5DB2FF",
          text: "#ffffff"
        },
        launcher: {
          bg: " #5DB2FF"
        },
        messageList: {
          bg: "#ffffff"
        },
        sentMessage: {
          bg: " #5DB2FF",
          text: "#ffffff"
        },
        receivedMessage: {
          bg: "#eaeaea",
          text: "#222222"
        },
        userInput: {
          bg: "#f4f7f9",
          text: "#565867"
        }
      } // specifies the color scheme for the component
    };
  },
  mounted() {

    this.msgText = "WELCOME_MSG";
    this.sendMessage(), this.mutee();
    if (window.localStorage.isDoctor == 1) {
      this.stopSound(true);
    }
  },
  methods: {
    stopSound(vari) {
      if (vari == true) {
        this.stopAudio = true;
      } else {
        this.stopAudio = false;
      }
    },
    customFormatter(date) {
      return new Date();
    },
    sendOrOpenMic() {
      // document.getElementById("switchButton").style.background="rgba(83, 136, 64, 0.71)"

      this.showMic ? this.startRecording() : this.sendMessage();
    },
    keyHandler(event) {
      this.showMic = document.getElementById("output").value.trim() == "";

      if (event.keyCode === 13 && this.showMic == false) {
        this.sendMessage();
      }
    },
    stop() {
      if (document.visibilityState === "hidden") {
        this.muteSpeaker();
      }
    },
    stopStream() {
      // ;
      if (this.stream) {
        this.stream.stop();
        this.hideButton = true;
      }
      if (window.rec) {
        this.stopRecording();
        this.hideButton = true;
      }
    },
    getGoogleCloudSpeechToText(blob, callback) {
      var self = this;

      window.rec.exportWAV(function (blob) {
        //window.blob = blob;
        window.rec.clear();
        window.fileReader = new FileReader();
        window.fileReader.readAsDataURL(blob);
        window.fileReader.onerror = function (error) {
          console.log("Error: ", error);
        };
        self.GoogleWrite(window.fileReader);
      });
    },
    GoogleWrite(fileReader) {
      var self = this;

      window.fileReader = fileReader;
      if (window.fileReader.readyState == 2) {
        var conf = {
          config: {
            enableAutomaticPunctuation: false,
            encoding: "LINEAR16",
            languageCode: "en-US",
            // sampleRateHertz:
            //   window.localStorage.isMobile != "true" ? 44100 : 48000,
            // model: "command_and_search"
            model: "phone_call",
            use_enhanced: true
          },
          audio: {
            content: window.fileReader.result.split(",")[1]
          }
        };
        var googleCloudSpeechUrl = "https://speech.googleapis.com/v1p1beta1/speech:recognize?key=AIzaSyDKZjWQdLmfubzBc_Dv0hf6xIINJiO1fY0";
        __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post(googleCloudSpeechUrl, conf, {
          headers: {
            "Content-Type": "text/plain;charset=UTF-8"
          }
        }).then(response => {
          self.msgText = response.data.results[0].alternatives[0].transcript;
          self.sendMessage();
        }).catch(error => {});
      } else {
        console.log(window.fileReader.readyState);
        setTimeout(function () {
          self.GoogleWrite(window.fileReader);
        }, 200);
      }
    },
    startRecording() {
      var self = this;
      console.log("recordButton clicked");
      var constraints = {
        audio: true,
        video: false
      };
      navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
        console.log("getUserMedia() success, stream created, initializing Recorder.js ...");
        var audioContext = new AudioContext();

        window.gumStream = stream;

        var input = audioContext.createMediaStreamSource(stream);

        window.rec = new Recorder(input, {
          numChannels: 1
        });

        window.rec.record();
        self.hideButton = false;
        console.log("Recording started");
      }).catch(function (err) {
        self.micIsOn = false;
        console.error(err);
      });
    },
    stopRecording() {
      window.rec.stop();
      window.gumStream.getAudioTracks()[0].stop();

      this.getGoogleCloudSpeechToText();
    },
    open() {
      this.isOpen = true;
      this.isChatOpenChat = true;
    },
    close() {
      this.isOpen = false;
      this.isChatOpenChat = false;
      this.muteSpeaker();
    },
    mutee() {
      var self = this;
      document.onclick = function () {
        self.muteSpeaker();
      };
      document.addEventListener("visibilitychange", self.stop);
    },
    googleTTS(txt) {
      this.muteSpeaker();
      txt = this.stripHtml(txt);
      var self = this;
      __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post("https://texttospeech.googleapis.com/v1/text:synthesize", {
        input: {
          text: txt
        },
        voice: {
          languageCode: "en-US",
          name: "en-US-Wavenet-E",
          ssmlGender: "FEMALE"
        },
        audioConfig: {
          audioEncoding: "LINEAR16",
          pitch: 0,
          speakingRate: 0.9
        }
      }, {
        headers: {
          "x-goog-api-key": "AIzaSyCCvq8l4Lv0lh8oXsR1amaEf9jRU0nDxpo",
          "content-type": "application/json",
          "cache-control": "no-cache"
        }
      }).then(response => {
        {
          var byteCharacters = atob(response.data.audioContent);
          var byteNumbers = new Array(byteCharacters.length);
          for (var i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
          }
          var byteArray = new Uint8Array(byteNumbers);
          var blob = new Blob([byteArray], {
            type: "audio/mp3"
          });
          var url = window.URL.createObjectURL(blob);
          self.audio = new Audio(); // path to file
          self.audio.src = url;
          self.audio.play();
        }
        // });
      });
    },
    muteSpeaker() {
      if (this.audio) {
        this.audio.muted = true;
      }
    },
    sendMessage(message, type, index) {
      // var msg = this.msgText;
      if (type == "boolean") {
        if (message) {
          this.msgText = message;
        }
      }

      var radiobuttons = document.getElementsByName("buttonRadio");
      if (radiobuttons) {
        for (i = 0; i < radiobuttons.length; i++) {
          radiobuttons[i].style.display = "none";

          // var btn = document.getElementById("btn" + index);
          // btn.style.display = "none";
          // btn.checked = true;
        }
      }
      if (type == "date" || type == "birthdate") {
        if (message && message != "true" && message != "false") {
          this.msgText = __WEBPACK_IMPORTED_MODULE_3_moment___default()(message).format("MM-DD-YYYY");
        }
      }
      if (this.$refs.DateTime) {
        for (var i = 0; i < this.$refs.DateTime.length; i++) {
          if (this.$refs.DateTime[i].isOpen == true) {
            this.$refs.DateTime[i].close();
          }
        }
      }
      if (this.msgText && this.msgText.trim() != "") {
        var msg = this.msgText;
        if (this.msgText !== "WELCOME_MSG") {
          var msg = [{
            author: "me",
            data: {
              text: this.msgText
            },
            type: "text"
          }];
          var textmsg = msg[0].data.text;

          this.messageList.push(msg[0]);
        } else {
          textmsg = "hi";
        }
        this.msgText = "";
        //for LHPEdS "Madonna"
        this.showMic = window.localStorage.URL == "https://lhpeds.cv19.app:8451/app" ? false : true,
        // this.showMic = true;
        this.micIsOn = false;

        var self = this;
        __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post(__WEBPACK_IMPORTED_MODULE_2__variables__["b" /* BACKEND_URL */] + "/calendarcv02/send_bot_msg", {
          Text: textmsg,
          Context: this.context
        }).then(function (response) {
          var txtSpeak = "";
          var textSpeak = "";
          for (var t in response.data.responseData.output.text) {
            if (response.data.responseData.output.text[t] != "") {
              txtSpeak += self.stripHtml(response.data.responseData.output.text[t]) + " " + "<br>";
              textSpeak += self.sprit(response.data.responseData.output.text[t]);
              // if (
              //   textSpeak.includes("<br/>") ||
              //   textSpeak.includes("<a") ||
              //   textSpeak.includes("</a>")
              // ) {
              //     ;
              //   textSpeak = textSpeak.replaceAll("<br/>", textSpeak, " ");
              //   textSpeak = textSpeak.replaceAll("<br>", textSpeak, " ");

              //   textSpeak = textSpeak.replaceAll("<a>", textSpeak, " ");
              //   textSpeak = textSpeak.replaceAll("</a>", textSpeak, " ");
              // }
            }
          }
          if (self.stopAudio == false) {
            self.googleTTS(textSpeak);
          }

          self.messageList.push({
            author: "yours",
            data: {
              text: txtSpeak
            },
            type: response.data.responseData.context.question_type
          });
          self.context = response.data.responseData.context;

          console.log(response);
          if (response.data.responseData.context.end_survey == true) {
            // ;
            self.context = {};
            self.context = {
              timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
              backend_url: __WEBPACK_IMPORTED_MODULE_2__variables__["b" /* BACKEND_URL */],
              household_number: __WEBPACK_IMPORTED_MODULE_2__variables__["d" /* HOUSE_HOLD_NUMBER */]
            };

            self.sendMessage();
            setTimeout(() => {
              self.closeChat();
            }, 120000);
          }
          setTimeout(function () {
            self.$refs.scrollList.scrollTop = self.$refs.scrollList.scrollHeight, 3000;
          });
        });
      }
    },
    sprit(html) {
      var temporalDivElement = document.createElement("div");
      temporalDivElement.innerHTML = html;
      // return temporalDivElement.innerHTML;
      return temporalDivElement.textContent || temporalDivElement.innerText || "";
    },
    stripHtml: function (html) {
      var temporalDivElement = document.createElement("div");
      temporalDivElement.innerHTML = html;
      return temporalDivElement.innerHTML;
      //   return (
      //     temporalDivElement.textContent || temporalDivElement.innerText || ""
      //   );
    },
    closeChat() {
      this.isOpen = false;

      this.isChatOpenChat = false;
      this.muteSpeaker();
    }
  }
});

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Header"
});

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variables_js__ = __webpack_require__(14);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import Punny from './Punny';

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      clinics: [],
      originalClinics: [],
      clinicSearch: ""
    };
  },
  mounted: function () {
    // this.fetchClinicData();
  },
  methods: {
    fetchClinicData: function () {
      this.$http.get(__WEBPACK_IMPORTED_MODULE_0__variables_js__["a" /* URL */] + "/clinic").then(response => {
        this.clinics = response.body;
        this.originalClinics = this.clinics;
        //   for(var i = 0; i < this.clinics.length; i++) {
        //       this.clinics[i].date_updated = new Date(this.clinics[i].date_updated).toString();
        //       this.clinics[i].date_created = new Date(this.clinics[i].date_created).toString();
        //   }
      }, response => {});
    },
    searchClinics: function () {
      if (this.clinicSearch == "") {
        this.clinics = this.originalClinics;
        return;
      }
      var searchedClinics = [];
      for (var i = 0; i < this.originalClinics.length; i++) {
        var clinicTitle = this.originalClinics[i]["name"].toLowerCase();
        if (clinicTitle.indexOf(this.clinicSearch.toLowerCase()) >= 0) {
          searchedClinics.push(this.originalClinics[i]);
        }
      }
      this.clinics = searchedClinics;
    }
  }
});

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Chat_chatbot__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Chat_chatbot___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Chat_chatbot__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



function showForm(title, description) {
  alert("Amira");
  //Change the contents of the title
  document.getElementById("_h3").innerHTML = title;
  //And the description
  document.getElementById("_p").innerHTML = description;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    chatbot: __WEBPACK_IMPORTED_MODULE_0__Chat_chatbot___default.a
  },

  data() {
    return {
      key: "",
      text: "",
      show: false,
      advices: [{
        key: "Message to users",
        short: "Team EnSofia built this application to help you understand the CDC ...",
        text: "Team EnSofia built this application to help you understand the CDC (Center for Disease Control) guidelines as they apply to you. Our team is advised by USA certified physicians and technologies. This app is NOT a substitute for professional medical advice, diagnosis, or treatment. Always consult a medical professional for serious symptoms or emergencies. You will be presented with CDC questions and upon submitting your response, you will receive an SMS with a code, and second SMS with a link. In order to read your customized report, you will need to log in using your mobile phone number, the code sent to you, and a PIN number you chose. You can download your report and use it when talking to your doctor or physician. Your privacy is very important to us - we are in the same boat. We will not ask for your name, but you can provide it in an optional field. We will never sell your individual data or use it. We only use the aggregate data from all users together. Your data is secure on our website and encrypted in our database. If you would like to donate to this cause, please  <a href='https://ensofia.com/contact.html' target='_blank'>contact us</a>",
        show: true,
        image: "https://cdn.jsdelivr.net/gh/ensofia/cv19/website/img/about/patient.jpg"
      }, {
        key: "Message to the healthcare system",
        short: "This system is offered free to any clinic that wants to use it ...",
        text: "This system is offered free to any clinic that wants to use it. We will ask for a donation to cover third party expenses, such as hosting and telephony charges. This system is part of a bigger platform; it can be used for your screening and you can customize the questions based on specifics that you choose. From the platform, you can obtain all of the data analytics to help you with your health population management. With this platform, you have all the tools to connect with customers and patients, as well as within and among your own staff via phone, video, SMS, and other methods. In addition, you can connect to your EHR via HL7 V2 or HL7 FHIR.",
        show: true,
        image: "https://cdn.jsdelivr.net/gh/ensofia/cv19/website/img/about/clinic.png"
      }, {
        key: "Message to doctors and physicians",
        short: "If you would like to volunteer towards our efforts by analyzing aggregate data ...",
        text: "If you would like to volunteer towards our efforts by analyzing aggregate data that we provide or providing your clinic’s services to some users (you determine, when, how many etc.), please <a href='https://ensofia.com/contact.html' target='_blank'>contact us</a>",
        show: true,
        image: "https://cdn.jsdelivr.net/gh/ensofia/cv19/website/img/about/doctor.png"
      }, {
        key: "Message to providers and partners",
        short: "This system is provided for free to users and clinics, except for donations ...",
        text: "This system is provided for free to users and clinics, except for donations. We invite you to collaborate with us by sharing your resources with EnSofia. Together, we can offer your group’s services to a wider user’s base. This is also requested of technology providers and partners on a voluntary basis",
        show: true,
        image: "https://cdn.jsdelivr.net/gh/ensofia/cv19/website/img/about/partner.jpg"
      }]
    };
  },
  methods: {
    changeShow(idx, key, text) {
      this.advices[idx].show = !this.advices[idx].show;
      this.show = this.advices[idx].show;
      this.key = key;
      this.text = text;
    }
  }
});

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Header__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_Navbar__ = __webpack_require__(603);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_Navbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__authentication_Navbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__footer__);
//
//
//
//
//
//
//
//
//
//
//





// Vue.component("ContentWrapper", ContentWrapper);

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Header: __WEBPACK_IMPORTED_MODULE_0__Header___default.a,
    navbar: __WEBPACK_IMPORTED_MODULE_1__authentication_Navbar___default.a,
    Footer: __WEBPACK_IMPORTED_MODULE_2__footer___default.a
  }
});

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(46);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["a" /* mapGetters */])({
    user: "user"
  }))
});

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(46);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["a" /* mapGetters */])({
    user: "user"
  })),
  mounted() {
    window.scrollTo(0, 100);
  },
  methods: {
    goToDashboard() {
      // this.$router.push("table");
    }
  }
});

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuejs_datepicker__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_notification__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_notification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_notification__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_tel_input__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__variables__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_survey_vue__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_survey_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_survey_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_vue_loading_button__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__util_SBSAjax_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_libphonenumber_js__ = __webpack_require__(91);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


//Added by Madonna





__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4_vue_notification___default.a);









/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueTelInput: __WEBPACK_IMPORTED_MODULE_5_vue_tel_input__["a" /* VueTelInput */],
    Datepicker: __WEBPACK_IMPORTED_MODULE_2_vuejs_datepicker__["a" /* default */],
    VueLoadingButton: __WEBPACK_IMPORTED_MODULE_10_vue_loading_button__["a" /* default */]
  },
  validations: {
    form: {
      birthday: {
        required: __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__["required"]
      },
      email: {
        email: __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__["email"]
      },
      password: {
        required: __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__["required"],
        integer: __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__["integer"],
        maxLength: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__["maxLength"])(4),
        minLength: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__["minLength"])(4)
      },
      zipCode: {
        required: __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__["required"],
        integer: __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__["integer"],
        minLength: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__["minLength"])(5),
        maxLength: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__["maxLength"])(5)
      }
    }
  },
  data() {
    return {
      showValidationDate: false,
      max: new Date(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())),
      isLoading: false,
      isStyled: false,
      maxHouseHoldNumber: "3",
      showValidation: false,
      phone: {
        number: "",
        isValid: false,
        country: undefined
      },
      state: {
        disabledDates: {
          from: new Date()
        }
      },
      submitted: false,

      show: false,
      disabled: false,
      form: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        otp: "",
        doctor: 1,
        hous_hold: 1,
        birthday: "",
        countryCode: "",
        zipCode: "",

        password: ""
      },
      bindProps: {
        mode: "international",
        placeholder: "Enter a phone number",
        required: false,
        enabledCountryCode: true,
        enabledFlags: true,
        autocomplete: "off",
        name: "telephone",
        maxLen: 25,
        inputOptions: {
          showDialCode: true
        }
      },
      appVerifier: "",
      smssent: false,
      error: null
    };
  },

  mounted() {
    window.scrollTo(0, 100);
    __WEBPACK_IMPORTED_MODULE_11__util_SBSAjax_js__["a" /* default */].resetUser();
    this.maxHouseHoldNumber = this.$store.state.housholdNumber ? __WEBPACK_IMPORTED_MODULE_6__variables__["c" /* HOUSE_HOLD_NUMBERLHPED */] : __WEBPACK_IMPORTED_MODULE_6__variables__["d" /* HOUSE_HOLD_NUMBER */];
  },
  methods: {
    setDate(date) {
      debugger;

      var momentA = __WEBPACK_IMPORTED_MODULE_7_moment___default()(__WEBPACK_IMPORTED_MODULE_7_moment___default()(), "MM/DD/YYYY");
      var momentB = __WEBPACK_IMPORTED_MODULE_7_moment___default()(date, "MM/DD/YYYY");
      if (momentA > momentB) return this.showValidationDate = false;else if (momentA < momentB) return this.showValidationDate = true;else return 0;
    },
    validate(e) {
      // ;
      if (e.isValid == false && e.number.international) {
        this.showValidation = true;
      } else {
        this.showValidation = false;
      }
    },
    onInput({ number, isValid, country }) {
      this.phone.number = number;
      this.phone.isValid = isValid;
      this.phone.country = country;
    },
    goToLogin() {
      this.$router.push("login");
    },

    countryChanged(country) {
      this.countryCode = country.dialCode;
      console.log(country);
    },
    checkPhone() {
      const phoneNumber = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_libphonenumber_js__["a" /* parsePhoneNumberFromString */])(this.form.phone);
      if (phoneNumber) {
        // phoneNumber.country === 'RU'
        // phoneNumber.number === '+78005553535'
        if (phoneNumber.isValid() != true || phoneNumber.isPossible() != true) this.showValidation = true;
        this.isLoading = false;
      }
      this.isLoading = true;
      if (this.form.phone == "") {
        this.showValidation = true;
        this.isLoading = false;
      }
    },
    submit() {
      debugger;

      this.submitted = true;
      this.setDate(this.form.birthday);
      this.checkPhone();
      this.$v.$touch();
      if (this.$v.$invalid || this.showValidation == true || this.showValidationDate == true) {
        debugger;
        this.isLoading = false;
        return;
      } else {
        this.checkUserCanRegister();
      }
    },
    checkUserCanRegister: function () {
      // ;
      let vm = this;
      if (this.form.phone == "") {
        this.showValidation = true;
      }
      const axios = __webpack_require__(27).default;
      if (this.notifications) this.notifications = [];
      if (this.form.phone) __WEBPACK_IMPORTED_MODULE_1_vue__["default"].postInvoke("/usercancall", {
        pin: vm.form.password,
        phone: vm.form.phone,
        birthday: __WEBPACK_IMPORTED_MODULE_7_moment___default()(String(vm.form.birthday)).format("MM-DD-YYYY")
      }, function (response) {
        console.log(response);
        var message_code = response.message_code;
        var pin_exist = response.pin_exist;
        var birthday_per_phone_count = response.birthday_per_phone_count;

        vm.addUser();

        vm.isLoading = false;
      });
    },

    addUser: function () {
      let vm = this;
      const axios = __webpack_require__(27).default;
      if (this.notifications) this.notifications = [];
      if (this.form.phone) __WEBPACK_IMPORTED_MODULE_1_vue__["default"].postInvoke("/user", {
        first_name: this.form.first_name,
        last_name: this.form.last_name,
        phone: this.form.phone,
        email: this.form.email,
        zipCode: this.form.zipCode,
        pin: this.form.password,
        code: this.form.otp,
        birthday: __WEBPACK_IMPORTED_MODULE_7_moment___default()(String(vm.form.birthday)).format("MM-DD-YYYY"),
        doctor: this.form.doctor,
        hous_hold: this.form.hous_hold,
        verify: "false"
      }, function (response) {
        console.log(response);

        window.localStorage.userId = response.id;
        window.localStorage.first_name = vm.form.first_name;
        window.localStorage.last_name = vm.form.last_name;
        window.localStorage.hous_hold = vm.form.hous_hold;

        window.localStorage.email = vm.form.email;
        window.localStorage.phone = vm.form.phone;
        window.localStorage.birthday = vm.form.birthday;
        window.localStorage.afterLogin = false;

        if (!response.token) {
          localStorage.token = "";
        } else {
          localStorage.token = response.token;
        }

        if (vm.form.doctor == 0) vm.$router.push({
          path: "/view-survey/" + __WEBPACK_IMPORTED_MODULE_6__variables__["e" /* FORM_ID */]
        });else vm.$router.push({
          path: "/doctorapprove"
        });
      });
    }
  }
});

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_SBSAjax_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_notification__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_notification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_notification__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_tel_input__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__variables__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_SBSAjax__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vue_loading_button__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_libphonenumber_js__ = __webpack_require__(91);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4_vue_notification___default.a);







/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueTelInput: __WEBPACK_IMPORTED_MODULE_5_vue_tel_input__["a" /* VueTelInput */],
    VueLoadingButton: __WEBPACK_IMPORTED_MODULE_9_vue_loading_button__["a" /* default */]
  },
  validations: {
    form: {
      pin: {
        required: __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__["required"],
        integer: __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__["integer"],
        maxLength: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__["maxLength"])(4),
        minLength: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__["minLength"])(4)
        // otp:{required}
      } }
  },
  data() {
    return {
      showValidation: false,

      submitted: false,
      showWaring: true,
      isLoading: false,
      isLoadingVerify: false,
      isStyled: false,
      form: {
        phone: "",
        pin: "",
        otp: "",
        code: ""
      },
      haveCode: false,
      appVerifier: "",
      userId: -1,
      userexist: false,
      smssent: false,
      disabled: false,
      bindProps: {
        mode: "international",
        placeholder: "Enter a phone number",
        required: false,
        enabledCountryCode: true,
        enabledFlags: true,
        autocomplete: "off",
        name: "telephone",
        maxLen: 25,
        inputOptions: {
          showDialCode: true
        }
      },
      error: null
    };
  },
  mounted() {
    // window.localStorage.isLogin = false;
    window.scrollTo(0, 100);
    __WEBPACK_IMPORTED_MODULE_7__util_SBSAjax__["a" /* default */].resetUser();
  },
  created: function () {
    this.initReCaptcha();
  },
  methods: {
    validate(e) {
      if (e.isValid == false && e.number.international) {
        this.showValidation = true;
      } else {
        this.showValidation = false;
      }
    },
    sendOtp() {
      if (this.form.phone.length < 10) {
        this.$notify({
          type: "error",

          title: "Important message",
          text: "Invalid Phone Number Format !"
        });
        // alert("Invalid Phone Number Format !");
      } else {
        //
        let phoneNumber = this.form.phone;
        //
        let appVerifier = this.appVerifier;
        //
        var self = this;

        __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth().signInWithPhoneNumber(phoneNumber, appVerifier).then(function (confirmationResult) {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          self.$notify({
            type: "success",

            title: "Important message",
            text: "SMS sent"
          });
          //
          // alert("SMS sent");
        }).catch(function (error) {
          // Error; SMS not sent
          // ...
          self.$notify({
            type: "error",

            title: "Important message",
            text: "Error ! SMS not sent"
          });
          // alert("Error ! SMS not sent");
        });
      }
    },
    initReCaptcha() {
      setTimeout(() => {
        let vm = this;
        window.recaptchaVerifier = new __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.auth.RecaptchaVerifier("recaptcha-container", {
          size: "invisible",
          callback: function (response) {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            // ...
          },
          "expired-callback": function () {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
          }
        });
        //
        vm.appVerifier = window.recaptchaVerifier;
      }, 1000);
    },
    countryChanged(country) {
      this.countryCode = country.dialCode;
      console.log(country);
    },

    verifyOtp() {
      this.isLoadingVerify = true;
      if (this.form.phone.length < 10) {
        this.$notify({
          type: "error",

          title: "Important message",
          text: "Invalid Phone Number/OTP Format !"
        });
        // alert("Invalid Phone Number/OTP Format !");
      } else {
        //
        let vm = this;
        let code = this.form.otp;
        //
        if (window.confirmationResult) {
          window.confirmationResult.confirm(code).then(function (result) {
            vm.setUserCode();
            vm.showWaring = false;
            // ...
            //route to set password !
          }).catch(function (error) {
            vm.showWaring = true;
            // User couldn't sign in (bad verification code?)
            // ...
          });
          vm.isLoadingVerify = false;
        } else {
          vm.isLoadingVerify = false;
          vm.$notify({
            type: "error",

            title: "Important message",
            text: "Invalid verification code, Please try again"
          });
          // alert("Invalid verification code, Please try again");
        }
      }
    },
    submit() {
      const phoneNumber = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_libphonenumber_js__["a" /* parsePhoneNumberFromString */])(this.form.phone);
      if (phoneNumber) {
        // phoneNumber.country === 'RU'
        // phoneNumber.number === '+78005553535'
        if (phoneNumber.isValid() != true || phoneNumber.isPossible() != true) this.showValidation = true;
      }
      if (this.form.phone == "") {
        this.showValidation = true;
      }
      this.submitted = true;
      this.isLoading = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.isLoading = false;

        return;
      }
      this.disabled = true;
      this.login();
    },
    setUserCode: function () {
      var formData = new FormData();
      let vm = this;
      const axios = __webpack_require__(27).default;

      if (this.notifications) this.notifications = [];
      if (this.form.phone) __WEBPACK_IMPORTED_MODULE_1_vue__["default"].putInvoke("/user/" + vm.userId, { code: this.form.otp }, function (response) {
        vm.login2();
      });
    },
    login: function () {
      var formData = new FormData();
      let vm = this;
      const axios = __webpack_require__(27).default;
      if (this.notifications) this.notifications = [];

      __WEBPACK_IMPORTED_MODULE_1_vue__["default"].InvokeLogin("/logincode", { pin: vm.form.pin, phone: vm.form.phone },
      // axios
      //   .get(URL + "/logincode?pin=" + vm.form.pin + "&phone=" + vm.form.phone)
      function (response) {
        if (response.data) {
          console.log(response);
          vm.userexist = true;
          window.localStorage.refreshToken = response.data.refresh;

          if (response.data.code == "") {
            vm.userId = response.data.id;
            vm.haveCode = false;
            vm.sendOtp();
          } else {
            vm.haveCode = true;
          }
          vm.isLoading = false;
          if (!response.data.token) {
            localStorage.token = "";
          } else {
            localStorage.token = response.data.token;
          }
          //
        } else {
          vm.isLoading = false;
          ///TODO: user not exist or something wrong
          vm.$notify({
            type: "error",

            title: "Important message",
            text: "Wrong Phone or Pin , please try again "
          });
          // vm.$router.push({
          //   path: "/register"
          // });
        }
      });
    },
    login2: function () {
      this.isLoadingVerify = true;
      var formData = new FormData();
      let vm = this;
      const axios = __webpack_require__(27).default;
      if (this.notifications) this.notifications = [];
      __WEBPACK_IMPORTED_MODULE_1_vue__["default"].InvokeLogin("/login", { pin: vm.form.pin, phone: vm.form.phone, code: vm.form.otp }, function (response) {
        if (response.data != "") {
          debugger;
          console.log(response);
          vm.$store.state.isLogin = window.localStorage.isLogin = true;

          vm.$store.state.isLogin = window.localStorage.isLogin = true;
          window.localStorage.userId = response.data.id;
          window.localStorage.first_name = response.data.first_name;
          window.localStorage.last_name = response.data.last_name;
          window.localStorage.hous_hold = response.data.hous_hold;
          window.localStorage.email = response.data.email;
          window.localStorage.phone = response.data.phone;
          window.localStorage.birthday = response.data.birthday;
          window.localStorage.answerAgain = null;
          window.localStorage.answerId = response.data.answers && response.data.answers.length > 0 ? response.data.answers[0].id : 0;
          window.localStorage.lastAnswerDate = response.data.answers && response.data.answers.length > 0 ? response.data.answers[response.data.answers.length - 1].update_date : "";

          window.localStorage.answer = response.data.answers && response.data.answers.length > 0 ? JSON.stringify(response.data.answers) : "";

          if (response.data.doctor == 0) {
            window.localStorage.isDoctor = false;

            if (window.localStorage.answer && window.localStorage.answer != "") {
              vm.$router.push({
                path: "/save-survey/" + __WEBPACK_IMPORTED_MODULE_6__variables__["e" /* FORM_ID */]
              });
              //  vm.$router.push({
              //   path: "/all",
              // });
            } else {
              window.localStorage.afterLogin = true;
              vm.$router.push({ path: "/view-survey/" + __WEBPACK_IMPORTED_MODULE_6__variables__["e" /* FORM_ID */] });
            }
          } else {
            if (response.data.verify == "true") {
              window.localStorage.isDoctor = true;

              vm.$router.push({
                path: "/table"
              });
            } else {
              window.localStorage.isDoctor = false;

              vm.$router.push({
                path: "/doctorapprove"
              });
            }
          }
          vm.isLoadingVerify = false;
        } else {
          vm.isLoadingVerify = false;
          vm.$notify({
            type: "error",

            title: "Important message",
            text: "Invalid verification code, please try again"
          });
        }
      });
    }
  }
});

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(47);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  },
  computed: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["a" /* mapGetters */])({
    user: "user"
  })),
  mounted() {
    this.googleTranslateElementInit();
  },
  methods: {
    googleTranslateElementInit() {
      new google.translate.TranslateElement({
        pageLanguage: "en",
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        includedLanguages: "en,tr,es,ar,fr,de,el,hi,it,ja,ru"
      }, "google_translate_element");
    },
    signOut() {
      debugger;
      this.$store.state.isLogin = window.localStorage.isLogin = false;
      localStorage.clear();
      this.$router.push("/");
      location.reload();
      // this.$router.push({ name: "HomePage" });
    }
  }
});

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap_vue__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuejs_datepicker__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_bootstrap_dist_css_bootstrap_min_css__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_bootstrap_dist_css_bootstrap_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__node_modules_bootstrap_dist_css_bootstrap_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_bootstrap_vue_dist_bootstrap_vue_css__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_bootstrap_vue_dist_bootstrap_vue_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__node_modules_bootstrap_vue_dist_bootstrap_vue_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuelidate_lib_validators__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuelidate_lib_validators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vuelidate_lib_validators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_notification__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_notification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vue_notification__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue_tel_input__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__variables__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__store__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_survey_vue__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_survey_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_survey_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_vue_loading_button__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__util_SBSAjax_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_libphonenumber_js__ = __webpack_require__(91);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


//Added by Madonna


__WEBPACK_IMPORTED_MODULE_1_vue__["default"].component("b-form-datepicker", __WEBPACK_IMPORTED_MODULE_2_bootstrap_vue__["e" /* BFormDatepicker */]);






__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_7_vue_notification___default.a);









/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueTelInput: __WEBPACK_IMPORTED_MODULE_8_vue_tel_input__["a" /* VueTelInput */],
    Datepicker: __WEBPACK_IMPORTED_MODULE_3_vuejs_datepicker__["a" /* default */],
    VueLoadingButton: __WEBPACK_IMPORTED_MODULE_13_vue_loading_button__["a" /* default */]
  },
  validations: {
    form: {
      birthday: {
        required: __WEBPACK_IMPORTED_MODULE_6_vuelidate_lib_validators__["required"]
      },
      email: {
        email: __WEBPACK_IMPORTED_MODULE_6_vuelidate_lib_validators__["email"]
      },
      password: {
        required: __WEBPACK_IMPORTED_MODULE_6_vuelidate_lib_validators__["required"],
        integer: __WEBPACK_IMPORTED_MODULE_6_vuelidate_lib_validators__["integer"],
        maxLength: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_vuelidate_lib_validators__["maxLength"])(4),
        minLength: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_vuelidate_lib_validators__["minLength"])(4)
      },
      zipCode: {
        required: __WEBPACK_IMPORTED_MODULE_6_vuelidate_lib_validators__["required"],
        integer: __WEBPACK_IMPORTED_MODULE_6_vuelidate_lib_validators__["integer"],
        minLength: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_vuelidate_lib_validators__["minLength"])(5),
        maxLength: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_vuelidate_lib_validators__["maxLength"])(5)
      }
    }
  },
  data() {
    return {
      showValidationDate: false,
      max: new Date(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())),
      isLoading: false,
      isStyled: false,
      maxHouseHoldNumber: "3",
      showValidation: false,
      phone: {
        number: "",
        isValid: false,
        country: undefined
      },
      state: {
        disabledDates: {
          from: new Date()
        }
      },
      submitted: false,

      show: false,
      disabled: false,
      form: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        otp: "",
        doctor: 0,
        hous_hold: 1,
        birthday: "",
        countryCode: "",
        zipCode: "",

        password: ""
      },
      bindProps: {
        mode: "international",
        placeholder: "Enter a phone number",
        required: false,
        enabledCountryCode: true,
        enabledFlags: true,
        autocomplete: "off",
        name: "telephone",
        maxLen: 25,
        inputOptions: {
          showDialCode: true
        }
      },
      appVerifier: "",
      smssent: false,
      error: null
    };
  },

  mounted() {
    window.scrollTo(0, 100);
    __WEBPACK_IMPORTED_MODULE_14__util_SBSAjax_js__["a" /* default */].resetUser();
    this.maxHouseHoldNumber = this.$store.state.housholdNumber ? __WEBPACK_IMPORTED_MODULE_9__variables__["c" /* HOUSE_HOLD_NUMBERLHPED */] : __WEBPACK_IMPORTED_MODULE_9__variables__["d" /* HOUSE_HOLD_NUMBER */];
  },
  methods: {
    setDate(date) {
      debugger;

      var momentA = __WEBPACK_IMPORTED_MODULE_10_moment___default()(__WEBPACK_IMPORTED_MODULE_10_moment___default()(), "MM/DD/YYYY");
      var momentB = __WEBPACK_IMPORTED_MODULE_10_moment___default()(date, "MM/DD/YYYY");
      if (momentA > momentB) return this.showValidationDate = false;else if (momentA < momentB) return this.showValidationDate = true;else return 0;
    },
    validate(e) {
      //   ;
      if (e.isValid == false && e.number.international) {
        this.showValidation = true;
      } else {
        this.showValidation = false;
      }
    },
    onInput({ number, isValid, country }) {
      this.phone.number = number;
      this.phone.isValid = isValid;
      this.phone.country = country;
    },
    goToLogin() {
      this.$router.push("login");
    },

    countryChanged(country) {
      this.countryCode = country.dialCode;
      console.log(country);
    },
    checkPhone() {
      const phoneNumber = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15_libphonenumber_js__["a" /* parsePhoneNumberFromString */])(this.form.phone);
      if (phoneNumber) {
        // phoneNumber.country === 'RU'
        // phoneNumber.number === '+78005553535'
        if (phoneNumber.isValid() != true || phoneNumber.isPossible() != true) this.showValidation = true;
        this.isLoading = false;
      }
      this.isLoading = true;
      if (this.form.phone == "") {
        this.showValidation = true;
        this.isLoading = false;
      }
    },
    submit() {
      debugger;

      this.submitted = true;
      this.checkPhone();
      this.setDate(this.form.birthday);

      this.$v.$touch();
      if (this.$v.$invalid || this.showValidation == true || this.showValidationDate == true) {
        debugger;
        this.isLoading = false;
        return;
      } else {
        this.checkUserCanRegister();
      }
    },
    checkUserCanRegister: function () {
      //   ;
      let vm = this;
      if (this.form.phone == "") {
        this.showValidation = true;
      }
      const axios = __webpack_require__(27).default;
      if (this.notifications) this.notifications = [];
      if (this.form.phone) __WEBPACK_IMPORTED_MODULE_1_vue__["default"].postInvoke("/usercancall", {
        pin: vm.form.password,
        phone: vm.form.phone,
        birthday: __WEBPACK_IMPORTED_MODULE_10_moment___default()(String(vm.form.birthday)).format("MM-DD-YYYY")
      }, function (response) {
        console.log(response);
        var message_code = response.message_code;
        var pin_exist = response.pin_exist;
        var birthday_per_phone_count = response.birthday_per_phone_count;

        if (message_code == -25) {
          if (pin_exist != 0) {
            vm.$notify({
              type: "error",

              title: "Important message",
              text: "User already exist with the same pin"
            });
          } else if (birthday_per_phone_count != 0) {
            vm.$notify({
              type: "error",

              title: "Important message",
              text: "User already exist with the same birthday "
            });
          } else {
            vm.addUser();
          }
        } else if (message_code == -30) {
          vm.$notify({
            type: "error",

            title: "Important message",
            text: "you have reached max number of users registered with this mobile number. Please use another mobile number to register additional members"
          });
          // alert("You reach max use Limit ");
        } else {
          debugger;
          vm.$notify({
            type: "error",
            title: "Important message",
            text: "User already exist with the same birthday and same pin"
          });
        }
        vm.isLoading = false;
      });
    },

    addUser: function () {
      let vm = this;
      const axios = __webpack_require__(27).default;
      if (this.notifications) this.notifications = [];
      if (this.form.phone) __WEBPACK_IMPORTED_MODULE_1_vue__["default"].postInvoke("/user", {
        first_name: this.form.first_name,
        last_name: this.form.last_name,
        phone: this.form.phone,
        email: this.form.email,
        zipCode: this.form.zipCode,
        pin: this.form.password,
        code: this.form.otp,
        birthday: __WEBPACK_IMPORTED_MODULE_10_moment___default()(String(vm.form.birthday)).format("MM-DD-YYYY"),
        doctor: this.form.doctor,
        hous_hold: this.form.hous_hold,
        verify: "false"
      }, function (response) {
        console.log(response);

        window.localStorage.userId = response.id;
        window.localStorage.first_name = vm.form.first_name;
        window.localStorage.last_name = vm.form.last_name;
        window.localStorage.hous_hold = vm.form.hous_hold;

        window.localStorage.email = vm.form.email;
        window.localStorage.phone = vm.form.phone;
        window.localStorage.birthday = vm.form.birthday;
        window.localStorage.afterLogin = false;

        if (!response.token) {
          localStorage.token = "";
        } else {
          localStorage.token = response.token;
        }

        if (vm.form.doctor == 0) vm.$router.push({
          path: "/view-survey/" + __WEBPACK_IMPORTED_MODULE_9__variables__["e" /* FORM_ID */]
        });else vm.$router.push({
          path: "/doctorapprove"
        });
      });
    }
  }
});

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      form: { phone: '' },
      appVerifier: ''

    };
  },
  computed: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["a" /* mapGetters */])({
    user: "user"
  })),
  mounted: function () {
    this.initReCaptcha();
    console.log("hererere");
    console.log(this.appVerifier);
  },
  methods: {
    sendOtp(phone) {
      if (phone.length < 10) {
        alert("Invalid Phone Number Format !");
      } else {
        //
        let phoneNumber = phone;
        //
        let appVerifier = this.appVerifier;
        //
        __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signInWithPhoneNumber(phoneNumber, appVerifier).then(function (confirmationResult) {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;

          //
          alert("SMS sent");
        }).catch(function (error) {
          // Error; SMS not sent
          // ...
          alert("Error ! SMS not sent");
        });
      }
    },
    countryChanged(country) {
      this.countryCode = country.dialCode;
      console.log(country);
    },
    initReCaptcha() {
      setTimeout(() => {
        let vm = this;
        window.recaptchaVerifier = new __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth.RecaptchaVerifier("recaptcha-container", {
          size: "invisible",
          callback: function (response) {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            // ...
          },
          "expired-callback": function () {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
          }
        });
        //
        this.appVerifier = window.recaptchaVerifier;
      }, 1000);
    }

  }
});

/***/ }),

/***/ 497:
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variables_js__ = __webpack_require__(14);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import Punny from './Punny';

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            clinics: [],
            originalClinics: [],
            clinicSearch: ''
        };
    },
    mounted: function () {
        this.fetchClinicData();
    },
    methods: {
        fetchClinicData: function () {
            this.$http.get(__WEBPACK_IMPORTED_MODULE_0__variables_js__["a" /* URL */] + '/clinic', {
                headers: { 'authorization': 'Bearer ' + localStorage.token }
            }).then(response => {
                this.clinics = response.body;
                this.originalClinics = this.clinics;
                //   for(var i = 0; i < this.clinics.length; i++) {
                //       this.clinics[i].date_updated = new Date(this.clinics[i].date_updated).toString();
                //       this.clinics[i].date_created = new Date(this.clinics[i].date_created).toString();
                //   }
            }, response => {});
        },
        searchClinics: function () {
            if (this.clinicSearch == '') {
                this.clinics = this.originalClinics;
                return;
            }
            var searchedClinics = [];
            for (var i = 0; i < this.originalClinics.length; i++) {
                var clinicTitle = this.originalClinics[i]['name'].toLowerCase();
                if (clinicTitle.indexOf(this.clinicSearch.toLowerCase()) >= 0) {
                    searchedClinics.push(this.originalClinics[i]);
                }
            }
            this.clinics = searchedClinics;
        }
    }
});

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__notifications_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__variables_js__ = __webpack_require__(14);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            clinic: {},
            notifications: [],
            image: ''
        };
    },
    methods: {
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.clinic.file = files[0];
            this.createImage(files[0]);
        },
        createImage(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;

            reader.onload = e => {
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        removeImage: function (e) {
            this.image = '';
        },

        addClinic: function () {
            var formData = new FormData();
            formData.append('name', this.clinic.name);
            formData.append('other_info', this.clinic.other_info);
            formData.append('logo', 'this.clinic.file');

            if (this.notifications) this.notifications = [];
            if (this.clinic.name) this.$http.post(__WEBPACK_IMPORTED_MODULE_1__variables_js__["a" /* URL */] + '/clinic', formData, {
                headers: { 'enctype': 'multipart/form-data', 'authorization': 'Bearer ' + localStorage.token }

            }).then(response => {
                this.notifications.push({
                    type: 'success',
                    message: 'Clinic created successfully'
                });
            }, response => {
                this.notifications.push({
                    type: 'error',
                    message: 'Clinic not created'
                });
            });
        }
    },
    components: {
        'notification': __WEBPACK_IMPORTED_MODULE_0__notifications_vue___default.a
    }
});

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__notifications_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__variables_js__ = __webpack_require__(14);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            clinic: {},
            notifications: []
        };
    },

    mounted: function () {
        this.getClinic();
    },

    methods: {
        getClinic: function () {
            this.$http.get(__WEBPACK_IMPORTED_MODULE_1__variables_js__["a" /* URL */] + '/clinic/' + this.$route.params.id, {
                headers: { 'authorization': 'Bearer ' + localStorage.token }
            }).then(response => {
                this.clinic = response.body;
            }, response => {});
        },

        deleteClinic: function () {
            if (this.notifications) this.notifications = [];
            this.$http.delete(__WEBPACK_IMPORTED_MODULE_1__variables_js__["a" /* URL */] + '/clinic/' + this.$route.params.id, this.clinic, {
                headers: {
                    'Content-Type': 'application/json', 'authorization': 'Bearer ' + localStorage.token
                }
            }).then(response => {
                this.$router.push({ name: 'AllClinic' });
            }, response => {
                this.notifications.push({
                    type: 'danger',
                    message: 'Clinic could not deleted'
                });
            });
        }
    },

    components: {
        'notification': __WEBPACK_IMPORTED_MODULE_0__notifications_vue___default.a
    }
});

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__notifications_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__variables__ = __webpack_require__(14);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            clinic: {},
            notifications: [],
            image: ''
        };
    },
    mounted: function () {
        this.getClinic();
    },
    methods: {
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.clinic.file = files[0];
            this.createImage(files[0]);
        },
        createImage(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;

            reader.onload = e => {
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        removeImage: function (e) {
            this.image = '';
        },
        getClinic: function () {
            this.$http.get(__WEBPACK_IMPORTED_MODULE_1__variables__["a" /* URL */] + '/clinic/' + this.$route.params.id, {
                headers: { 'authorization': 'Bearer ' + localStorage.token }
            }).then(response => {
                this.clinic = response.body;
                this.image = this.clinic.thumbnail;
            }, response => {});
        },
        editClinic: function () {
            var formData = new FormData();
            formData.append('name', this.clinic.name);
            formData.append('other_info', this.clinic.other_info);
            formData.append('logo', 'this.clinic.file');
            if (this.notifications) this.notifications = [];
            if (this.image) this.$http.put(__WEBPACK_IMPORTED_MODULE_1__variables__["a" /* URL */] + '/clinic/' + this.$route.params.id, formData, {
                headers: {
                    // 'Content-Type' : 'multipart/form-data'
                    'enctype': 'multipart/form-data', 'authorization': 'Bearer ' + localStorage.token
                }
            }).then(response => {
                this.notifications.push({
                    type: 'success',
                    message: 'Clinic updated successfully'
                });
            }, response => {
                this.notifications.push({
                    type: 'error',
                    message: 'Clinic not updated'
                });
            });
        }
    },
    components: {
        'notification': __WEBPACK_IMPORTED_MODULE_0__notifications_vue___default.a
    }
});

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuedraggable__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuedraggable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuedraggable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__variables_js__ = __webpack_require__(14);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import Punny from './Punny';


/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        draggable: __WEBPACK_IMPORTED_MODULE_0_vuedraggable___default.a
    },
    data() {
        return {
            forms: [],
            originalForms: [],
            formSearch: '',
            id: '',
            dragging: false
        };
    },

    mounted: function () {
        this.fetchFormData();
    },
    methods: {
        fetchFormData: function () {
            this.$http.get(__WEBPACK_IMPORTED_MODULE_1__variables_js__["a" /* URL */] + '/form?clinic_id=' + this.$route.params.id, {
                headers: { 'authorization': 'Bearer ' + localStorage.token }
            }).then(response => {
                this.forms = response.body;
                this.originalForms = this.forms;
                for (var i = 0; i < this.forms.length; i++) {
                    this.forms[i].date_updated = new Date(this.forms[i].date_updated).toString();
                    this.forms[i].create_date = new Date(this.forms[i].create_date).toString();
                }
            }, response => {});
        },
        searchForms: function () {
            if (this.formSearch == '') {
                this.forms = this.originalForms;
                return;
            }
            var searchedForms = [];
            for (var i = 0; i < this.originalForms.length; i++) {
                var formTitle = this.originalForms[i]['name_en'].toLowerCase();
                if (formTitle.indexOf(this.formSearch.toLowerCase()) >= 0) {
                    searchedForms.push(this.originalForms[i]);
                }
            }
            this.forms = searchedForms;
        }
    }
});

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__notifications_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__variables_js__ = __webpack_require__(14);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            form: {},
            notifications: [],
            image: ''
        };
    },
    methods: {
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.form.file = files[0];
            this.createImage(files[0]);
        },
        createImage(file) {
            var image = new Image();
            var reader = new FileReader();
            var vm = this;

            reader.onload = e => {
                vm.image = e.target.result;
            };
            reader.readAsDataURL(file);
        },
        removeImage: function (e) {
            this.image = '';
        },

        addForm: function () {
            var formData = new FormData();

            formData.append('name_en', this.form.name_en);
            formData.append('description_en', this.form.description_en);
            formData.append('status', 'suspended');
            formData.append('category', this.form.category);
            formData.append('form_type', this.form.form_type);
            formData.append('clinic_id', this.$route.params.clinic_id);
            formData.append('image_url', 'this.form.file');
            formData.append('design_path', 'this.form.file');

            if (this.notifications) this.notifications = [];
            if (this.form.name_en) this.$http.post(__WEBPACK_IMPORTED_MODULE_1__variables_js__["a" /* URL */] + '/form', formData, {
                headers: {
                    'enctype': 'multipart/form-data', 'authorization': 'Bearer ' + localStorage.token
                }
            }).then(response => {
                this.notifications.push({
                    type: 'success',
                    message: 'Form created successfully'
                });
            }, response => {
                this.notifications.push({
                    type: 'error',
                    message: 'Form not created'
                });
            });
        }
    },
    components: {
        'notification': __WEBPACK_IMPORTED_MODULE_0__notifications_vue___default.a
    }
});

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {};
    },
    methods: {
        getNotificationClass: function (notification) {
            return 'alert alert-' + notification.type;
        }
    },
    props: ['notifications']
});

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variables_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(18);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import Punny from './Punny';


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      users: [],
      originalusers: [],
      userSearch: ""
    };
  },
  mounted: function () {
    this.fetchUserData();
  },
  methods: {
    fetchUserData: function () {
      this.$http.get(__WEBPACK_IMPORTED_MODULE_0__variables_js__["a" /* URL */] + "/doctors", {
        headers: { authorization: "Bearer " + localStorage.token }
      }).then(response => {
        this.users = response.body;
        this.originalusers = this.users;
        //   for(var i = 0; i < this.users.length; i++) {
        //       this.users[i].date_updated = new Date(this.users[i].date_updated).toString();
        //       this.users[i].date_created = new Date(this.users[i].date_created).toString();
        //   }
      }, response => {});
    },
    approveDoctor: function (id, index) {
      let vm = this;

      if (this.notifications) this.notifications = [];
      __WEBPACK_IMPORTED_MODULE_1_vue__["default"].putInvoke("/user/" + id, { verify: "true" }, function (response) {
        vm.users.splice(index, 1);
      });
    },
    searchusers: function () {
      if (this.userSearch == "") {
        this.users = this.originalusers;
        return;
      }
      var searchedusers = [];
      for (var i = 0; i < this.originalusers.length; i++) {
        var userTitle = this.originalusers[i]["name"].toLowerCase();
        if (userTitle.indexOf(this.userSearch.toLowerCase()) >= 0) {
          searchedusers.push(this.originalusers[i]);
        }
      }
      this.users = searchedusers;
    }
  }
});

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__notifications_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__variables_js__ = __webpack_require__(14);
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            user: {},
            notifications: []
        };
    },

    mounted: function () {
        this.getUser();
    },

    methods: {
        getUser: function () {
            this.$http.get(__WEBPACK_IMPORTED_MODULE_1__variables_js__["a" /* URL */] + '/user/' + this.$route.params.id, {
                headers: { 'authorization': 'Bearer ' + localStorage.token }
            }).then(response => {
                this.user = response.body;
            }, response => {});
        },

        deleteUser: function () {
            if (this.notifications) this.notifications = [];
            this.$http.delete(__WEBPACK_IMPORTED_MODULE_1__variables_js__["a" /* URL */] + '/user/' + this.$route.params.id, this.user, {
                headers: {
                    'Content-Type': 'application/json', 'authorization': 'Bearer ' + localStorage.token
                }
            }).then(response => {
                this.$router.push({ name: 'AllUser' });
            }, response => {
                this.notifications.push({
                    type: 'danger',
                    message: 'Doctor could not deleted'
                });
            });
        }
    },

    components: {
        'notification': __WEBPACK_IMPORTED_MODULE_0__notifications_vue___default.a
    }
});

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_vue__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_variables__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_notification__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_notification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_notification__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_tel_input__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_libphonenumber_js__ = __webpack_require__(91);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4_vue_notification___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_bootstrap_vue__["c" /* FormFilePlugin */]);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueTelInput: __WEBPACK_IMPORTED_MODULE_5_vue_tel_input__["a" /* VueTelInput */]
  },
  data() {
    return {
      disable: window.localStorage.isDoctor == "true" ? true : false,

      bindProps: {
        mode: "international",
        placeholder: "Enter a phone number",
        required: false,
        enabledCountryCode: true,
        enabledFlags: true,
        autocomplete: "off",
        name: "telephone",
        maxLen: 25,
        inputOptions: {
          showDialCode: true
        }
      },
      showValidation: false,
      errorMessage: false,

      number: null,
      displayFile: false,
      openNumber: false,
      openFile: false,
      picked: null,
      showOptions: false,
      messages: ["Please Fill the CV19 survey prior to your visit: https://lhpeds.cv19.app/register Thank you."],
      message: null,
      file: null
    };
  },
  mounted() {
    this.$store.state.isLogin = window.localStorage.isLogin = true;
  },
  methods: {
    countryChanged(country) {
      this.countryCode = country.dialCode;
      console.log(country);
    },
    validate(e) {
      //   ;
      if (e.isValid == false && e.number.international) {
        this.showValidation = true;
      } else {
        this.showValidation = false;
      }
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    sendFile() {
      debugger;
      if (this.message != "") {
        debugger;
        if (this.$store.state.showHotline == false) {
          this.message = this.message + " From Lighthouse pediatrics";
        } else {
          this.message = this.message;
        }
        const formData = new FormData();
        formData.append("attached_file", this.file);
        formData.append("filename", this.file.name);
        formData.append("message", this.message);

        var self = this;

        __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post(__WEBPACK_IMPORTED_MODULE_2__components_variables__["b" /* BACKEND_URL */] + "/calendarcv02/send_SMS_by_file", formData, {
          headers: {
            "Content-Type": "multipart/form-data",

            authorization: "Bearer " + localStorage.token
          }
        }).then(function (response) {
          self.$notify({
            type: "success",

            title: "Important message",
            text: "File sent"
          });
          console.log(response);
        }).catch(function (error) {
          self.$notify({
            type: "error",
            title: "Important message",
            text: "File not sent"
          });
          console.log(error);
        });
      } else {
        this.errorMessage = true;
      }
    },

    sendMessage(message, number) {
      if (message != "") {
        const phoneNumber = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_libphonenumber_js__["a" /* parsePhoneNumberFromString */])(number);
        if (phoneNumber) if (phoneNumber.isValid() != true || phoneNumber.isPossible() != true) {
          this.showValidation = true;
        } else {
          debugger;
          var self = this;
          if (this.$store.state.showHotline == false) {
            message = message + " From Lighthouse pediatrics";
          } else {
            message = message;
          }
          __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post(__WEBPACK_IMPORTED_MODULE_2__components_variables__["b" /* BACKEND_URL */] + "/calendarcv02/send_SMS_andLog", {
            smsbody: message,
            smsfrom: "+14084134555",
            smsto: number
          }, {
            headers: {
              authorization: "Bearer " + localStorage.token
            }
          }).then(function (response) {
            self.$notify({
              type: "success",

              title: "Important message",
              text: "SMS sent"
            });
            console.log(response);
          }).catch(function (error) {
            self.$notify({
              type: "error",
              title: "Important message",
              text: "SMS not sent"
            });
            console.log(error);
          });
        }
      } else {
        this.errorMessage = true;
      }
    },
    fileName() {
      this.displayFile = true;
      this.number = null;
      //   this.file = this.$refs.file.files[0];
    },
    selectFile() {
      debugger;
      document.getElementById("f-option").checked = true;

      this.openNumber = false;
      this.openFile = true;
      this.showValidation = false;
      this.number = null;
    },
    selectNumber() {
      document.getElementById("s-option").checked = true;

      this.openNumber = true;
      this.openFile = false;
      this.displayFile = false;
    },
    checkInput() {
      debugger;
      this.showOptions = true;
      this.openNumber == true ? this.openFile = false : this.openFile = true;
      this.errorMessage = false;
    },
    clearFiles() {
      this.$refs["file"].reset();
      this.displayFile = false;
    }
  }
});

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import store from "../../store/index";

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  },
  mounted() {
    $(function () {
      var speakerDevices = document.getElementById("speaker-devices");
      var ringtoneDevices = document.getElementById("ringtone-devices");
      var outputVolumeBar = document.getElementById("output-volume");
      // var inputVolumeBar = document.getElementById("input-volume");
      // var volumeIndicators = document.getElementById("volume-indicators");

      var device;
      var self = this;
      log("Requesting Capability Token...");
      $.getJSON("https://scintillating-power-4256.twil.io/capability-token").then(function (data) {
        log("Got a token.");
        console.log("Token: " + data.token);
        //   let twiml = new Twilio.twiml.VoiceResponse();

        // Setup Twilio.Device
        device = new Twilio.Device(data.token, {
          // Set Opus as our preferred codec. Opus generally performs better, requiring less bandwidth and
          // providing better audio quality in restrained network conditions. Opus will be default in 2.0.
          codecPreferences: ["opus", "pcmu"],
          // Use fake DTMF tones client-side. Real tones are still sent to the other end of the call,
          // but the client-side DTMF tones are fake. This prevents the local mic capturing the DTMF tone
          // a second time and sending the tone twice. This will be default in 2.0.
          fakeLocalDTMF: true,
          // Use `enableRingingState` to enable the device to emit the `ringing`
          // state. The TwiML backend also needs to have the attribute
          // `answerOnBridge` also set to true in the `Dial` verb. This option
          // changes the behavior of the SDK to consider a call `ringing` starting
          // from the connection to the TwiML backend to when the recipient of
          // the `Dial` verb answers.
          enableRingingState: true
        });

        device.on("ready", function (device) {
          log("Twilio.Device Ready!");
          document.getElementById("call-controls").style.display = "block";
        });

        device.on("error", function (error) {
          log("Twilio.Device Error: " + error.message);
        });

        device.on("connect", function (conn) {
          log("Successfully established call!");
          document.getElementById("button-call").style.display = "none";
          document.getElementById("button-hangup").style.display = "inline";
          // volumeIndicators.style.display = "block";
          // bindVolumeIndicators(conn);
        });

        device.on("disconnect", function (conn) {
          log("Call ended.");
          document.getElementById("button-call").style.display = "inline";
          document.getElementById("button-hangup").style.display = "none";
          // volumeIndicators.style.display = "none";
        });

        device.on("incoming", function (conn) {
          log("Incoming connection from " + conn.parameters.From);
          var archEnemyPhoneNumber = "+12093373517";

          if (conn.parameters.From === archEnemyPhoneNumber) {
            conn.reject();
            log("It's your nemesis. Rejected call.");
          } else {
            // accept the incoming connection and start two-way audio
            conn.accept();
          }
        });

        // setClientNameUI(data.identity);

        device.audio.on("deviceChange", updateAllDevices.bind(device));

        // Show audio selection UI if it is supported by the browser.
        if (device.audio.isOutputSelectionSupported) {
          document.getElementById("output-selection").style.display = "block";
        }
      }).catch(function (err) {
        console.log(err);
        log("Could not get a token from server!");
      });

      // Bind button to make call
      document.getElementById("button-call").onclick = function () {
        // get the phone number to connect the call to
        var params = {
          To: document.getElementById("phone-number").value
        };

        console.log("Calling " + params.To + "...");
        if (device) {
          var outgoingConnection = device.connect(params);
          outgoingConnection.on("ringing", function () {
            log("Ringing...");
          });
        }
      };
      var self = this;
      // Bind button to hangup call
      document.getElementById("button-hangup").onclick = function () {
        log("Hanging up...");
        if (device) {
          device.disconnectAll();
          // store.state.TwiliostartCall = false;
        }
      };

      // document.getElementById("get-devices").onclick = function() {
      //   navigator.mediaDevices
      //     .getUserMedia({ audio: true })
      //     .then(updateAllDevices.bind(device));
      // };

      speakerDevices.addEventListener("change", function () {
        var selectedDevices = [].slice.call(speakerDevices.children).filter(function (node) {
          return node.selected;
        }).map(function (node) {
          return node.getAttribute("data-id");
        });

        device.audio.speakerDevices.set(selectedDevices);
      });

      ringtoneDevices.addEventListener("change", function () {
        var selectedDevices = [].slice.call(ringtoneDevices.children).filter(function (node) {
          return node.selected;
        }).map(function (node) {
          return node.getAttribute("data-id");
        });

        device.audio.ringtoneDevices.set(selectedDevices);
      });

      // function bindVolumeIndicators(connection) {
      //   connection.on("volume", function(inputVolume, outputVolume) {
      //     var inputColor = "red";
      //     if (inputVolume < 0.5) {
      //       inputColor = "green";
      //     } else if (inputVolume < 0.75) {
      //       inputColor = "yellow";
      //     }

      //     // inputVolumeBar.style.width = Math.floor(inputVolume * 300) + "px";
      //     // inputVolumeBar.style.background = inputColor;

      //     var outputColor = "red";
      //     if (outputVolume < 0.5) {
      //       outputColor = "green";
      //     } else if (outputVolume < 0.75) {
      //       outputColor = "yellow";
      //     }

      //     outputVolumeBar.style.width = Math.floor(outputVolume * 300) + "px";
      //     outputVolumeBar.style.background = outputColor;
      //   });
      // }

      function updateAllDevices() {
        updateDevices(speakerDevices, device.audio.speakerDevices.get());
        updateDevices(ringtoneDevices, device.audio.ringtoneDevices.get());

        // updateDevices(speakerDevices, );
        // updateDevices(ringtoneDevices, device);
      }

      // Update the available ringtone and speaker devices
      function updateDevices(selectEl, selectedDevices) {
        selectEl.innerHTML = "";

        device.audio.availableOutputDevices.forEach(function (device, id) {
          var isActive = selectedDevices.size === 0 && id === "default";
          selectedDevices.forEach(function (device) {
            if (device.deviceId === id) {
              isActive = true;
            }
          });

          var option = document.createElement("option");
          option.label = device.label;
          option.setAttribute("data-id", id);
          if (isActive) {
            option.setAttribute("selected", "selected");
          }
          selectEl.appendChild(option);
        });
      }

      // Activity log
      function log(message) {
        var logDiv = document.getElementById("log");
        logDiv.innerHTML += "<p>&gt;&nbsp;" + message + "</p>";
        logDiv.scrollTop = logDiv.scrollHeight;
      }

      // Set the client name in the UI
      function setClientNameUI(clientName) {
        var div = document.getElementById("client-name");
        div.innerHTML = "Your client name: <strong>" + clientName + "</strong>";
      }
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(310)))

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_notification__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_notification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_notification__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(18);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_0_vue_notification___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      disable: window.localStorage.isDoctor == "true" ? true : false
    };
  },
  mounted() {
    this.$store.state.isLogin = window.localStorage.isLogin = true;
  },
  methods: {
    checkDoctor() {
      if (window.localStorage.isDoctor == "true") {
        this.$router.push("/table");
      } else {
        debugger;
        this.$notify({
          type: "error",
          title: "Important message",
          text: "Sorry, Its Available Only To Doctor"
        });
        this.$router.push("/clientPortal");

        // return false;
      }
    }
  }
});

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_variables__ = __webpack_require__(14);
//
//
//
//
//
//
//

// import Punny from './Punny';
// import * as SurveyCreator from "survey-creator";
//import "survey-creator/survey-creator.css";

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "survey-creator",
  props: {
    FORM_ID_PDF: Number
  },
  data() {
    return {
      old: "",
      surveyCreator: ""
    };
  },

  mounted: function () {
    this.$store.state.isLogin = window.localStorage.isLogin = true;

    let options = {
      showEmbededSurveyTab: true,
      showTranslationTab: true,
      showLogicTab: true,
      showState: true,
      haveCommercialLicense: true,
      showOptions: true,
      showSave: true
    };

    // if (!SurveyCreator) SurveyCreator = {};

    this.surveyCreator = new SurveyCreator.SurveyCreator("surveyCreatorContainer", options);
    this.getForm(this.surveyCreator);
    // surveyCreator.saveSurveyFunc = this.saveMySurvey();
  },
  methods: {
    saveMySurvey: function () {
      console.log(this.surveyCreator.text);
      // console.log(JSON.stringify(this.text));

      var vm = this;
      // $.ajax({
      //   url: URL + "/form/" + FORM_ID,
      //   type: "PUT",
      //   data: {
      //     questions: vm.surveyCreator.text
      //   },
      //   success: function(data) {
      //      //callback(saveNo, true);
      //   },
      //   error: function(xhr, ajaxOptions, thrownError) {
      //      //callback(saveNo, false);
      //     alert(thrownError);
      //   }
      // });
      this.$http.put(__WEBPACK_IMPORTED_MODULE_0__components_variables__["a" /* URL */] + "/form/" + FORM_ID_PDF, {
        questions: vm.surveyCreator.text
      }, {
        headers: {
          enctype: "multipart/form-data",
          authorization: "Bearer " + localStorage.token
        }
      }).then(response => {}).catch(err => {
        alert(err);
        reject(err);
      });
    },
    getForm: function (json) {
      var formData = new FormData();
      var vm = this;
      var oldv = json;
      if (this.notifications) this.notifications = [];
      this.$http.get(__WEBPACK_IMPORTED_MODULE_0__components_variables__["a" /* URL */] + "/form/" + FORM_ID_PDF, {
        headers: {
          enctype: "multipart/form-data",
          authorization: "Bearer " + localStorage.token
        }
      }).then(response => {
        console.log(response.data.questions);

        json.text = response.data.questions;
      }, response => {
        this.notifications.push({
          type: "error",
          message: "Form not created"
        });
      });
    }
  }
});

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_survey_vue__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_survey_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_survey_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_css__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_loading_button__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_variables__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuex__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_util_SBSAjax__ = __webpack_require__(43);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


// import * as SurveyPDF from "survey-pdf";

__WEBPACK_IMPORTED_MODULE_0_survey_vue__["Survey"].cssType = "bootstrap";

// var myloc = Survey.surveyLocalization.locales["localename"];
// myloc.completingSurvey = "Your text on completing survey";








/* harmony default export */ __webpack_exports__["default"] = ({
  name: "create",
  computed: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_vuex__["a" /* mapGetters */])({
    user: "user"
  })),
  components: {
    Survey: __WEBPACK_IMPORTED_MODULE_0_survey_vue__["Survey"],
    VueLoadingButton: __WEBPACK_IMPORTED_MODULE_3_vue_loading_button__["a" /* default */]
  },
  mounted: function () {
    this.$store.state.isLogin = window.localStorage.isLogin = true;

    this.fetchAnswerData();
    this.calculateAge();
    this.canTakeItAgain();
    // this.generateBase64();
  },
  methods: {
    generateBase64: function () {
      var _this = this;
      var _vm = this;

      var canvas = document.createElement("CANVAS");
      var img = document.createElement("img");
      img.src = "https://ensofia.com/img/logo.png";
      img.onload = function () {
        canvas.height = img.height;
        canvas.width = img.width;
        _this.base64 = canvas.toDataURL("image/png");
        canvas = null;
      };

      img.onerror = function (error) {
        _this.error = "Could not load image, please check that the file is accessible and an image!";
      };
    },
    retake: function (create_date, answerArray, index) {
      if (create_date != "") {
        var x = new __WEBPACK_IMPORTED_MODULE_2_moment___default.a(String(create_date));
        var y = new __WEBPACK_IMPORTED_MODULE_2_moment___default.a.utc();
        var duration = __WEBPACK_IMPORTED_MODULE_2_moment___default.a.duration(y.diff(x));
        this.hours = Math.abs(parseInt("" + duration.as("hours")));
        var mints5 = Math.abs(parseInt("" + duration.as("minutes")));
        var min = Math.abs(24 * 60 - Math.abs(parseInt("" + duration.as("minutes"))));
        var duration2 = __WEBPACK_IMPORTED_MODULE_2_moment___default.a.duration(min, "minutes");
        var taketime = duration2.days() * 24 + duration2.hours() + " hours " + (duration2.minutes() == 0 ? "" : duration2.minutes() + " min");
        this.takeAgain = this.hours >= __WEBPACK_IMPORTED_MODULE_4__components_variables__["f" /* HOURS_LIMIT */] ? true : false;
        if (this.$store.state.stagOrNot) this.takeAgain = mints5 >= 5 ? true : false;
        // ==index)?"1":answerArray[index].user_birthday)
        console.log(__WEBPACK_IMPORTED_MODULE_7_lodash___default.a.findLastIndex(answerArray, function (o) {
          return o.answer.user_birthday == answerArray[index].answer.user_birthday;
        }));
        return this.takeAgain ? __WEBPACK_IMPORTED_MODULE_7_lodash___default.a.findLastIndex(answerArray, function (o) {
          return o.answer.user_birthday == answerArray[index].answer.user_birthday;
        }) == index ? "1" : "" : taketime;
      } else {
        return this.hours >= __WEBPACK_IMPORTED_MODULE_4__components_variables__["f" /* HOURS_LIMIT */] ? "1" : "24 hours";
      }
    },
    canTakeItAgain: function () {
      if (window.localStorage.lastAnswerDate != "") {
        var x = new __WEBPACK_IMPORTED_MODULE_2_moment___default.a(String(window.localStorage.lastAnswerDate));
        var y = new __WEBPACK_IMPORTED_MODULE_2_moment___default.a.utc();
        var duration = __WEBPACK_IMPORTED_MODULE_2_moment___default.a.duration(y.diff(x));
        this.hours = Math.abs(parseInt("" + duration.as("hours")));
        //for testing
        // var mints5 = Math.abs(parseInt("" + duration.as("minutes")));

        var min = Math.abs(24 * 60 - Math.abs(parseInt("" + duration.as("minutes"))));
        var duration2 = __WEBPACK_IMPORTED_MODULE_2_moment___default.a.duration(min, "minutes");
        this.time = duration2.days() * 24 + duration2.hours() + " hours " + (duration2.minutes() == 0 ? "" : duration2.minutes() + " min");
        this.takeAgain = this.hours >= __WEBPACK_IMPORTED_MODULE_4__components_variables__["f" /* HOURS_LIMIT */] ? true : false;

        //for testing
        // this.takeAgain = mints5 >= 5 ? true : false;
      } else {
        this.hours = 0;
        this.time = "24 hours";
      }
    },
    takeItAgain: function () {
      window.localStorage.takeAgain = 1;
      this.$router.push({ path: "/view-survey/" + __WEBPACK_IMPORTED_MODULE_4__components_variables__["e" /* FORM_ID */] });
    },
    answerAgain: function (json) {
      window.localStorage.takeAgain = 1;
      window.localStorage.answerAgain = JSON.stringify(json);
      this.$router.push({ path: "/view-survey/" + __WEBPACK_IMPORTED_MODULE_4__components_variables__["e" /* FORM_ID */] });
    },
    fetchAnswerData: function () {
      var userAnswers = JSON.parse(window.localStorage.answer);
      userAnswers = __WEBPACK_IMPORTED_MODULE_7_lodash___default.a.sortBy(userAnswers, o => o.answer.first_name);
      debugger;
      this.totalRows = userAnswers.length;
      for (let index = 0; index < userAnswers.length; index++) {
        const userAnswer = userAnswers[index];
        if (userAnswer.answer.first_name === 'mam') {
          debugger;
        }
        if (userAnswer.create_date) {
          userAnswer.answer.date_created = new __WEBPACK_IMPORTED_MODULE_2_moment___default.a(userAnswer.create_date).format("MM-DD-YYYY");
        } else {
          userAnswer.create_date = new __WEBPACK_IMPORTED_MODULE_2_moment___default.a.utc();
          userAnswer.answer.date_created = new __WEBPACK_IMPORTED_MODULE_2_moment___default.a.utc().format("MM-DD-YYYY");
        }
        userAnswer.answer.retake = this.retake(userAnswer.create_date, userAnswers, index);
        userAnswer.answer.index = index;
        userAnswer.answer.user_birthday = new __WEBPACK_IMPORTED_MODULE_2_moment___default.a(String(userAnswer.answer.user_birthday)).format("YYYY-MM-DD");
        userAnswer.answer.user_birthday_Formated = new __WEBPACK_IMPORTED_MODULE_2_moment___default.a(String(userAnswer.answer.user_birthday)).format("MM-DD-YYYY");
        this.items.push(userAnswer.answer);
      }
    },
    fetchFormData: function (json) {
      var vm = this;

      __WEBPACK_IMPORTED_MODULE_5_vue__["default"].getInvoke("/form/" + __WEBPACK_IMPORTED_MODULE_4__components_variables__["g" /* FORM_ID_PDF */], {}, function (response) {
        vm.question = response;
        vm.jsonQuestions = JSON.parse(response.questions);
        vm.loaded = false;

        // 595px

        // var myloc =model.csurveyLocalization.locales["localename"];
        // myloc.completingSurvey = "Your text on completing survey";
        //console.log(model);

        vm.savePDF(json);
      });
    },
    savePDF: function (json) {
      this.isLoading = true;
      this.indexClicked = json.index;
      var vm = this;

      var options = {
        fontSize: 12,
        margins: {
          top: 7,
          bot: 7,
          left: 0
        },
        format: [210, 297]
      };
      if (vm.jsonQuestions == null) {
        vm.fetchFormData(json);
      } else {
        var model = new __WEBPACK_IMPORTED_MODULE_0_survey_vue__["Model"](vm.jsonQuestions);
        model.title = vm.question.name_en;
        vm.survey = model;
        var answers = json;

        var x = new __WEBPACK_IMPORTED_MODULE_2_moment___default.a(String(answers.user_birthday));
        var y = new __WEBPACK_IMPORTED_MODULE_2_moment___default.a(String(new Date()));
        var duration = __WEBPACK_IMPORTED_MODULE_2_moment___default.a.duration(y.diff(x));
        var year = Math.abs(parseInt("" + duration.as("year")));
        var elements = vm.jsonQuestions.pages[0].elements;
        __WEBPACK_IMPORTED_MODULE_7_lodash___default.a.forEach(elements, function (value, index) {
          if (value.name === "user_healh_prof") {
            debugger;
            value.visibleIf = "{user_birthday} < '" + new __WEBPACK_IMPORTED_MODULE_2_moment___default.a().subtract(__WEBPACK_IMPORTED_MODULE_4__components_variables__["h" /* YEARS */], "years").format("YYYY-MM-DD") + "'";
          } else if (value.name === "user_has_outside_activities") {
            debugger;
            value.visibleIf = "{user_birthday} >= '" + new __WEBPACK_IMPORTED_MODULE_2_moment___default.a().subtract(__WEBPACK_IMPORTED_MODULE_4__components_variables__["h" /* YEARS */], "years").format("YYYY-MM-DD") + "'";
          }
        });

        var surveyPDF = new SurveyPDF.SurveyPDF(vm.jsonQuestions, options);

        //   ;
        if (year >= 65) answers.age65 = true;

        surveyPDF.data = answers;
        ////

        surveyPDF.onRenderHeader.add(function (survey, canvas) {
          canvas.drawImage({
            base64: vm.base64,
            horizontalAlign: "left",
            width: (canvas.rect.yBot - canvas.rect.yTop) * 0.6,
            height: (canvas.rect.yBot - canvas.rect.yTop) * 0.6,
            margins: {
              left: (canvas.rect.yBot - canvas.rect.yTop) * 0.2
            }
          });
          canvas.drawText({
            text: "COVID 19 self-checker based on CDC guidelines",
            fontSize: 14,
            isBold: true,
            horizontalAlign: "center",
            margins: {
              right: 12
            }
          });
        });
        surveyPDF.onRenderFooter.add(function (survey, canvas) {
          canvas.drawText({
            text: "CV19.APP Made by EnSofia team",
            fontSize: 10
          });
          canvas.drawText({
            text: canvas.pageNumber + "/" + canvas.countPages,
            fontSize: 10,
            horizontalAlign: "right",
            margins: {
              right: 12
            }
          });
        });
        ////

        surveyPDF.haveCommercialLicense = true;

        var date = new Date(window.localStorage.birthday).toISOString().slice(0, 10);
        var today = new Date();

        var bdday = date.split("-")[2];
        var bdmonth = date.split("-")[1];
        var userdate = new Date(answers.user_birthday).toISOString().slice(0, 10);
        var userBdday = userdate.split("-")[2];
        var userBdmonth = userdate.split("-")[1];

        var dateobj = new Date(date);
        var userTimezoneOffset = dateobj.getTimezoneOffset() * 60000;
        var birthDate = new Date(dateobj.getTime() - userTimezoneOffset);

        // var birthDate = new Date(date);

        var myage = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
          myage--;
        }
        //console.log(" age.value: " + myage);

        var user_has_cough = answers.user_has_cough;
        var user_has_fever = answers.user_has_fever;
        var user_has_short_breath = answers.user_has_short_breath;
        var user_has_nausea_vomiting = answers.user_has_nausea_vomiting;
        var user_has_diarrhea = answers.user_has_diarrhea;

        var allNo = true;
        // render custome pdf
        surveyPDF.onRenderQuestion.add((survey, options) => {
          //change all boolean Questions red Yes and Blue No
          if (options.question.getType() === "boolean") {
            //console.log(options.question.value);
            if (options.question.value) allNo = false;
            var htmlQuestion = __WEBPACK_IMPORTED_MODULE_0_survey_vue__["QuestionFactory"].Instance.createQuestion("html", "html_question");
            //console.log(options.question);
            if (options.question.value) {
              var value = "";

              switch (options.question.name) {
                case "user_has_cough":
                  value = "<p><strong>" + options.question.title + '</strong><br><font color="#98b4d4"><strong>Yes,Since ' + answers.cough_started + " </strong></font></p>";
                  break;
                case "user_has_fever":
                  value = "<p><strong>" + options.question.title + '</strong><br><font color="#98b4d4"><strong>Yes,Since ' + answers.fever_started + " </strong></font></p>";
                  break;
                case "user_has_short_breath":
                  value = "<p><strong>" + options.question.title + '</strong><br><font color="#98b4d4"><strong>Yes,Since ' + answers.short_breath_started + " </strong></font></p>";
                  break;
                case "user_has_nausea_vomiting":
                  value = "<p><strong>" + options.question.title + '</strong><br><font color="#98b4d4"><strong>Yes,Since ' + answers.nausea_vomiting_started + "</strong></font></p>";
                  break;

                default:
                  value = "<strong>" + options.question.title + '</strong><br><font color="#98b4d4"><strong>Yes</strong></font>';
                  break;
              }

              // } else {

              // }
              //98b4d4
              htmlQuestion.html = value;
              // '<font color="#98b4d4"><strong>Yes</strong></font>';
            } else {
              //7fcdcd
              htmlQuestion.html =
              // '<font color="#7fcdcd"><strong>No</strong></font>';
              "<strong>" + options.question.title + '</strong><br><font color="#7fcdcd"><strong>No</strong></font>';
            }
            //console.log(options);
            var flatHtml = options.repository.create(survey, htmlQuestion, options.controller, "html");
            var commentBricks = options.bricks[0].unfold();
            var commentBrick = commentBricks.pop();
            var point = SurveyPDF.SurveyHelper.createPoint(commentBrick, true, true);
            return new Promise(function (resolve) {
              flatHtml.generateFlats(point).then(function (htmlBricks) {
                options.bricks = commentBricks;
                options.bricks.push(...htmlBricks);
                resolve();
              });
            });
          }

          if (options.question.inputType === "date") {
            //console.log(options.question.value);
            var htmlQuestion = __WEBPACK_IMPORTED_MODULE_0_survey_vue__["QuestionFactory"].Instance.createQuestion("html", "html_question");

            htmlQuestion.html = "";
            // '<p style="text-align: left;"><font color="#98b4d4"><strong>' +
            // options.question.value +
            // "</strong></font></p>";

            var flatHtml = options.repository.create(survey, htmlQuestion, options.controller, "html");
            var commentBricks = options.bricks[0].unfold();
            var commentBrick = commentBricks.pop();
            var point = SurveyPDF.SurveyHelper.createPoint(commentBrick, true, true);
            return new Promise(function (resolve) {
              flatHtml.generateFlats(point).then(function (htmlBricks) {
                options.bricks = commentBricks;
                options.bricks.push(...htmlBricks);
                resolve();
              });
            });
          }

          if (options.question.name === "name") {
            var htmlQuestion = __WEBPACK_IMPORTED_MODULE_0_survey_vue__["QuestionFactory"].Instance.createQuestion("html", "html_question");

            htmlQuestion.html = '<p style="text-align: center;"><font color="#2B60DE"><strong>User Phone #:' + window.localStorage.phone + "<br>Your " + (answers.relation === "other" || answers.relation === "Other" ? __WEBPACK_IMPORTED_MODULE_7_lodash___default.a.capitalize(answers["relation-Comment"]) : __WEBPACK_IMPORTED_MODULE_7_lodash___default.a.capitalize(answers.relation)) + ":" + __WEBPACK_IMPORTED_MODULE_7_lodash___default.a.capitalize(answers.first_name) + " " + __WEBPACK_IMPORTED_MODULE_7_lodash___default.a.capitalize(answers.last_name) + "(User DoB: " + userBdmonth + "/" + userBdday + ")" + "<strong></font></p>";
            // '<br> User DoB: '+((birthDate.getMonth() + 1) < 10 ? '0' + (birthDate.getMonth() + 1).toString() : (birthDate.getMonth() + 1).toString() ) + '/' + (birthDate.getDate()<10? '0' + birthDate.getDate().toString():birthDate.getDate().toString())+'<strong></font></p>';

            var flatHtml = options.repository.create(survey, htmlQuestion, options.controller, "html");
            var commentBricks = options.bricks[0].unfold();
            var commentBrick = commentBricks.pop();
            var point = SurveyPDF.SurveyHelper.createPoint(commentBrick, true, true);
            return new Promise(function (resolve) {
              flatHtml.generateFlats(point).then(function (htmlBricks) {
                options.bricks = commentBricks;
                options.bricks.push(...htmlBricks);
                resolve();
              });
            });
          }
        });
        vm.pdfs = [];
        if (user_has_cough || user_has_fever || user_has_short_breath || user_has_diarrhea || user_has_nausea_vomiting) {
          vm.pdfs.push({
            url: "https://" + window.location.hostname + "/10Things.pdf",
            name: "10Things"
          });
          vm.pdfs.push({
            url: "https://" + window.location.hostname + "/sick-with-2019-nCoV-fact-sheet.pdf",
            name: "sick-with-2019-nCoV-fact-sheet"
          });
          vm.pdfs.push({
            url: "https://" + window.location.hostname + "/03.16.20_coronavirus-guidance_8.5x11_315PM.pdf",
            name: "03.16.20_coronavirus-guidance_8.5x11_315PM"
          });
        } else {
          vm.pdfs.push({
            url: "https://" + window.location.hostname + "/stop-the-spread-of-germs.pdf",
            name: "stop-the-spread-of-germs"
          });
          vm.pdfs.push({
            url: "https://" + window.location.hostname + "/03.16.20_coronavirus-guidance_8.5x11_315PM.pdf",
            name: "03.16.20_coronavirus-guidance_8.5x11_315PM"
          });
        }
        // vm.pdfs.forEach(pdf => {
        //   vm.downloadWithVueResource(pdf.url, pdf.name);
        // });
        surveyPDF.save("Questionnaire results" + window.localStorage.phone + ".pdf");
        vm.isLoading = false;
        vm.indexClicked = -1;
        ///TODO: remove after fixing pdf download

        // setTimeout(function () {
        //   vm.$store.state.user.data = null;
        //   vm.$store.state.user.loggedIn = false;
        //   SBSAjax.resetUser();
        //   // location.herf = "#/";
        //   vm.$router.push("/");
        //   location.reload();
        // }, 3000);
      }
    },
    forceFileDownload(pdfurl, name) {
      const link = document.createElement("a");
      link.href = pdfurl;
      link.setAttribute("download", name + ".pdf"); //or any other extension
      link.setAttribute("target", "_blank");
      document.body.appendChild(link);
      link.click();
    },
    calculateAge: function (date) {
      let currentDate = new Date();
      let birthDate = new Date(date);
      let difference = currentDate - birthDate;
      let age = Math.floor(difference / 31557600000);
      this.age = age;
    },
    downloadWithVueResource(pdfurl, name) {
      this.$http({
        method: "get",
        url: pdfurl,
        responseType: "arraybuffer"
      }).then(response => {
        this.forceFileDownload(pdfurl, name);

        // let blob = new Blob([response.data], { type: "application/pdf" });
        // let link = document.createElement("a");
        // link.href = window.URL.createObjectURL(blob);
        // link.download = name+".pdf";
        // link.click();
      }).catch(() => console.log("error occured"));
    }
  },
  data() {
    return {
      currentPage: 1,
      perPage: 10,
      totalRows: 1,
      sortBy: "first_name",
      sortDesc: false,
      fields: [{ key: "date_created", sortable: true }, { key: "relation", sortable: true }, { key: "user_birthday_Formated", label: "Birth Date", sortable: true }, { key: "first_name", sortable: true }, { key: "last_name", sortable: true }, { key: "download", sortable: false }, { key: "repeat_in:", sortable: false }],
      age: 0,
      json: {},
      survey: null,
      loaded: true,
      items: [],
      question: {},
      notComplete: true,
      pdfs: [],
      base64: "",
      jsonQuestions: null,
      error: "",
      takeAgain: false,
      hours: 0,
      isLoading: false,
      indexClicked: -1,
      isStyled: false,
      time: ""
    };
  }
});

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap_vue__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_variables__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_loaders__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_notification__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_notification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vue_notification__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_6_vue_loaders__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_1_vue__["default"].component("b-table", __WEBPACK_IMPORTED_MODULE_2_bootstrap_vue__["d" /* BTable */]);
const createSortable = (el, options, vnode) => {
  return Sortable.create(el, _extends({}, options));
};

__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_7_vue_notification___default.a);
const sortable = {
  name: "sortable",
  bind(el, binding, vnode) {
    const table = el;
    table._sortable = createSortable(table.querySelector("tr"), binding.value, vnode);
  }
};

__WEBPACK_IMPORTED_MODULE_1_vue__["default"].directive("draggable", {
  //adapted from https://codepen.io/kminek/pen/pEdmoo
  inserted: function (el, binding, a) {
    Sortable.create(el, {
      draggable: ".draggable",
      onEnd: function (e) {
        /* vnode.context is the context vue instance: "This is not documented as it's not encouraged to manipulate the vm from directives in Vue 2.0 - instead, directives should be used for low-level DOM manipulation, and higher-level stuff should be solved with components instead. But you can do this if some usecase needs this. */
        // fixme: can this be reworked to use a component?
        // https://github.com/vuejs/vue/issues/4065
        // https://forum.vuejs.org/t/how-can-i-access-the-vm-from-a-custom-directive-in-2-0/2548/3
        // https://github.com/vuejs/vue/issues/2873 "directive interface change"
        // `binding.expression` should be the name of your array from vm.data
        // set the expression like v-draggable="items"
        var clonedItems = a.context[binding.expression].filter(function (item) {
          return item;
        });
        clonedItems.splice(e.newIndex, 0, clonedItems.splice(e.oldIndex, 1)[0]);
        a.context[binding.expression] = [];
        __WEBPACK_IMPORTED_MODULE_1_vue__["default"].nextTick(function () {
          a.context[binding.expression] = clonedItems;
        });
      }
    });
  }
});
/* harmony default export */ __webpack_exports__["default"] = ({
  directives: {
    sortable
  },

  data() {
    return {
      disable: window.localStorage.isDoctor == "true" ? true : false,
      loader: true,
      number: null,
      messages: ["Please Fill the CV19 survey prior to your visit: https://lhpeds.cv19.app/register Thank you"],
      message: null,
      users: [],
      usersGroups: [],
      UserRows: "",
      sortableOptions: {
        chosenClass: "is-selected"
      },
      dangerColum: ["user_has_cough", "user_has_fever", "user_has_nausea_vomiting", "user_has_short_breath"],
      sortedColum: ["relation", "user_exposed", "user_has_fever", "user_has_short_breath", "user_has_cough", "user_has_nausea_vomiting", "user_has_diarrhea", "user_fatigue", "user_has_muscle_aches", "user_has_sore_throat", "user_has_runny_nose", "user_smoker", "user_has_chronic_disease", "user_healh_prof", "user_has_outside_activities"],
      fields: [{
        key: "expand",
        label: "",
        class: "text-center"
      }, {
        key: "answer_date",
        label: "Date",
        sortable: true,
        sortDirection: "desc",
        class: "text-center"
      }, {
        key: "name",
        label: "Name",
        sortable: true,
        sortDirection: "desc",
        class: "text-center"
      }, {
        key: "phone",
        label: "Phone",
        sortable: true,
        class: "text-center"
      }],
      subFields: [{
        key: "name",
        label: "Name",
        sortable: true,
        sortDirectionSub: "desc",
        class: "text-center"
      }, {
        key: "birthday",
        label: "Age",
        sortable: true,
        class: "text-center"

        // {
        //   key: "actions",
        //   label: "Actions",
        //   sortable: true,
        //   class: "text-center",
        // },
      }],
      totalRows: 1,
      currentPage: 1,
      perPage: 30,
      pageOptions: [30, 40, 50],
      sortBy: "",
      sortBySub: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: [],
      forms: "",
      smsModalstatic: {
        id: "info-modal",
        title: "",
        content: "",
        number: ""
      },
      smsModal: {
        id: "info-modal",
        title: "",
        content: "",
        number: ""
      },
      callModal: {
        id: "info-modal",
        title: "",
        content: "",
        number: ""
      },
      URL: __WEBPACK_IMPORTED_MODULE_3__components_variables__["a" /* URL */]
    };
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields.filter(f => f.sortable).map(f => {
        return {
          text: f.label,
          value: f.key
        };
      });
    }
  },
  mounted() {
    this.$store.state.isLogin = window.localStorage.isLogin = true;

    // this.fetchFormDatas();
    this.fetchUserData();
  },

  methods: {
    fetchUserData: function () {
      var self = this;
      __WEBPACK_IMPORTED_MODULE_1_vue__["default"].getInvoke("/user", {}, function (response) {
        // axios.get(this.URL + "/user").then(function (response) {
        self.totalRows = response.length;
        // self.users = response;
        var userList = [];
        response.forEach(user => {
          if (user.answers && user.answers.length > 0) {
            for (var i = 0; i < user.answers.length; i++) {
              if (user.answers[i].answer.user_birthday) {
                var date = new Date(user.answers[i].answer.user_birthday).toISOString().slice(0, 10);
                var today = new Date();
                var birthDate = new Date(date);
                var age = today.getFullYear() - birthDate.getFullYear();
                var m = today.getMonth() - birthDate.getMonth();
                if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
                  age--;
                }

                user.answers[i].birthday = age;
              } else {
                user.answers[i].birthday = "";
              }
              user.answers[i].phone = user.phone;
              user.answers[i].answer_date = new __WEBPACK_IMPORTED_MODULE_5_moment___default.a(user.answers[i].create_date).format("MM-DD-YYYY");
              user.answers[i].name = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.capitalize(user.answers[i].answer.first_name) + " " + __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.capitalize(user.answers[i].answer.last_name);
              userList.push(user.answers[i]);
            }
          }
        });

        userList.forEach(user => {
          var obj = user.answer;
          var f = {};
          Object.keys(obj).forEach(element => {
            var x;
            if (!element.includes("Started") && !element.includes("first_name") && !element.includes("last_name") && !element.includes("birthday") && !element.includes("age65") && !element.includes("lung") && !element.includes("traveled") && !element.includes("retake") && !element.includes("index") && !element.includes("date_created") && !element.includes("self_or_not") && !element.includes("user_had_nausea_vomiting") && !element.includes("pdf") && !element.includes("started") && !element.includes("relation-Comment")) {
              if (element.includes("user_")) {
                var y = element.split("_");
                if (y.length > 2) {
                  y[3] ? x = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.capitalize(y[2]) + " " + __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.capitalize(y[3]) : x = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.capitalize(y[2]);
                } else {
                  x = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.capitalize(y[1]);
                }
              } else {
                x = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.capitalize(element);
              }
              // console.log("x is : " + x);
              if (!element.includes("relation")) {
                self.fields[__WEBPACK_IMPORTED_MODULE_4_lodash___default.a.indexOf(self.sortedColum, element) + 6] = {
                  key: element,
                  label: x,
                  sortable: true,
                  class: "text-center"
                };
              }
              self.subFields[__WEBPACK_IMPORTED_MODULE_4_lodash___default.a.indexOf(self.sortedColum, element) + 2] = {
                key: element,
                label: x,
                sortable: true,
                class: "text-center"
              };
            }
            user[element] = obj[element];
            if (user[element] == false) {
              user[element] = "No";
            } else if (user[element] == true) {
              var index = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.indexOf(self.dangerColum, element);
              if (index != -1) {
                switch (index) {
                  case 0:
                    user[element] = "Yes,Since " + user["cough_started"];
                    f[element] = "danger";

                    break;

                  case 1:
                    user[element] = "Yes,Since " + user["fever_started"];
                    f[element] = "danger";

                    break;
                  case 2:
                    user[element] = "Yes,Since " + user["nausea_vomiting_started"];
                    f[element] = "danger";

                    break;
                  case 3:
                    user[element] = "Yes,Since " + user["short_breath_started"];
                    f[element] = "danger";

                    break;
                }
              } else {
                user[element] = "Yes";
                f[element] = "danger";
              }
            } else {
              {
                user[element] = user[element];
              }
            }
          });
          user["_cellVariants"] = f;
          self.users.push(user);

          self.fields.push({
            key: "actions",
            label: "Communicate"
          });
        });
        var keys = {};
        var valuesRows = {};
        var mainElement = {};
        self.users.forEach(element => {
          var original = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.clone(element);
          if (!Object.keys(keys).includes(element.phone + element.answer_date)) {
            var o = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.clone(element);
            delete o.relation;
            delete o._cellVariants;

            keys[element.phone + element.answer_date] = o;
            valuesRows[element.phone + element.answer_date] = new Array();
          } else {
            var o = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.clone(element);
            delete o.relation;
            delete o._cellVariants;
            keys[element.phone + element.answer_date] = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.mergeWith(__WEBPACK_IMPORTED_MODULE_4_lodash___default.a.clone(keys[element.phone + element.answer_date]), o, (objValue, srcValue, objkey) => {
              if (__WEBPACK_IMPORTED_MODULE_4_lodash___default.a.startsWith(objValue, "Yes") || __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.startsWith(srcValue, "Yes")) {
                return "Yes";
              } else if (objkey !== "_cellVariants") {
                return objValue;
              }
              // else if(_.startsWith(objValue,'No') || _.startsWith(srcValue,'No')){
              //   return "No"
              // }
            });
          }
          __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.keys(original._cellVariants).forEach(key => {
            if (original[key] === "No") {
              debugger;
              delete original["_cellVariants"].key;
            }
          });
          valuesRows[element.phone + element.answer_date].push(original);
        });
        __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.values(keys).forEach(element => {
          var objDanger = {};
          __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.forEach(element, function (value, key) {
            if (__WEBPACK_IMPORTED_MODULE_4_lodash___default.a.startsWith(value, "Yes")) {
              objDanger[key] = "danger";
            }
          });
          element["_cellVariants"] = objDanger;
        });
        self.usersGroups = __WEBPACK_IMPORTED_MODULE_4_lodash___default.a.values(keys);
        debugger;
        self.UserRows = valuesRows;
        console.log(self.UserRows);
        self.loader = false;
        self.totalRows = self.usersGroups.length;

        self.perPage = Math.ceil(self.totalRows / perPage);
      });
    },
    fetchFormDatas() {
      __WEBPACK_IMPORTED_MODULE_1_vue__["default"].Invoke("/answer", {}, "get", function (response) {
        this.forms = response.body;
        console.log(this.forms);
        this.originalForms = this.forms;
      });
      // this.$http.get(URL + "/answer").then(
      //   (response) => {
      //     this.forms = response.body;
      //     console.log(this.forms);
      //     this.originalForms = this.forms;
      //     //   for(var i = 0; i < this.forms.length; i++) {
      //     //       this.forms[i].date_updated = new Date(this.forms[i].date_updated).toString();
      //     //       this.forms[i].create_date = new Date(this.forms[i].create_date).toString();
      //     //   }
      //   },
      //   (response) => {}
      // );
    },
    sendMessage(message, number) {
      var self = this;
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(__WEBPACK_IMPORTED_MODULE_3__components_variables__["b" /* BACKEND_URL */] + "/calendarcv02/send_SMS_andLog", {
        smsbody: message,
        smsfrom: "+14084134555",
        smsto: number
      }, {
        headers: {
          authorization: "Bearer " + localStorage.token
        }
      }).then(function (response) {
        self.$notify({
          type: "success",

          title: "Important message",
          text: "SMS sent"
        });
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    },
    openEmail(item, index, button) {
      var email = item.email;
      var subject = "COVId c19";
      var emailBody = "Hi " + message.from;
      document.location = "mailto:" + email + "?subject=" + subject + "&body=" + emailBody;
    },
    openSendstatic() {
      this.$refs["smsModalstatic"].show();

      // this.$root.$emit("bv::show::smsModal", this.smsModal.id, button);
    },
    openSend(item, index, button) {
      var number = item.phone;
      // this.smsModal.title = `Row index: ${index}`;
      // this.smsModal.content = JSON.stringify(item, null, 2);
      this.smsModal.number = number;
      this.$refs["smsModal"].show();

      // this.$root.$emit("bv::show::smsModal", this.smsModal.id, button);
    },
    info(item, index, button) {
      var number = item.phone;
      // this.callModal.title = `Row index: ${index}`;
      this.callModal.content = JSON.stringify(item, null, 2);
      this.callModal.number = number;
      this.$refs["callModal"].show();

      // this.$root.$emit("bv::show::modal", this.callModal.id, button);
      this.intialCall(number);
    },
    intialCall(number) {
      var x = this.$refs["callModal"];
      $(function () {
        var speakerDevices = document.getElementById("speaker-devices");
        var ringtoneDevices = document.getElementById("ringtone-devices");
        var outputVolumeBar = document.getElementById("output-volume");
        // var inputVolumeBar = document.getElementById("input-volume");
        // var volumeIndicators = document.getElementById("volume-indicators");
        document.getElementById("button-hangup").style.display = "none";

        var device;
        var self = this;
        log("Requesting Capability Token...");
        $.getJSON("https://scintillating-power-4256.twil.io/capability-token").then(function (data) {
          log("Got a token.");
          console.log("Token: " + data.token);
          device = new Twilio.Device(data.token, {
            codecPreferences: ["opus", "pcmu"],
            fakeLocalDTMF: true,
            enableRingingState: true
          });

          device.on("ready", function (device) {
            log("Twilio.Device Ready!");
            document.getElementById("call-controls").style.display = "block";
          });

          device.on("error", function (error) {
            log("Twilio.Device Error: " + error.message);
            console.log("Twilio.Device Error: " + error.message);

            // x.hide();
          });

          device.on("connect", function (conn) {
            log("Successfully established call!");
            document.getElementById("button-call").style.display = "none";
            document.getElementById("button-hangup").style.display = "inline";
          });

          device.on("disconnect", function (conn) {
            log("Call ended.");
            document.getElementById("button-call").style.display = "inline";
            document.getElementById("button-hangup").style.display = "inline";
            x.hide();
            if (device) {
              device.disconnectAll();
            }
          });

          device.on("incoming", function (conn) {
            log("Incoming connection from " + conn.parameters.From);
            var archEnemyPhoneNumber = "+12093373517";

            if (conn.parameters.From === archEnemyPhoneNumber) {
              conn.reject();
              log("It's your nemesis. Rejected call.");
            } else {
              conn.accept();
            }
          });

          device.audio.on("deviceChange", updateAllDevices.bind(device));

          if (device.audio.isOutputSelectionSupported) {
            document.getElementById("output-selection").style.display = "block";
          }
        }).catch(function (err) {
          console.log(err);
          log("Could not get a token from server!");
        });

        // Bind button to make call
        document.getElementById("button-call").onclick = function () {
          document.getElementById("button-call").style.display = "none";

          document.getElementById("button-hangup").style.display = "inline";

          //    ;
          // get the phone number to connect the call to
          var params = {
            To: number
          };

          console.log("Calling " + params.To + "...");
          if (device) {
            var outgoingConnection = device.connect(params);
            outgoingConnection.on("ringing", function () {
              log("Ringing...");
            });
          }
        };
        var self = this;
        // Bind button to hangup call
        document.getElementById("button-hangup").onclick = function () {
          document.getElementById("button-hangup").style.display = "none";
          log("Hanging up...");
          if (device) {
            device.disconnectAll();
          }
        };

        function updateAllDevices() {
          updateDevices(speakerDevices, device.audio.speakerDevices.get());
          updateDevices(ringtoneDevices, device.audio.ringtoneDevices.get());
        }

        function updateDevices(selectEl, selectedDevices) {
          selectEl.innerHTML = "";

          device.audio.availableOutputDevices.forEach(function (device, id) {
            var isActive = selectedDevices.size === 0 && id === "default";
            selectedDevices.forEach(function (device) {
              if (device.deviceId === id) {
                isActive = true;
              }
            });

            var option = document.createElement("option");
            option.label = device.label;
            option.setAttribute("data-id", id);
            if (isActive) {
              option.setAttribute("selected", "selected");
            }
            selectEl.appendChild(option);
          });
        }

        // Activity log
        function log(message) {
          var logDiv = document.getElementById("log");
          logDiv.innerHTML += "<p>&gt;&nbsp;" + message + "</p>";
          logDiv.scrollTop = logDiv.scrollHeight;
        }

        // Set the client name in the UI
        function setClientNameUI(clientName) {
          var div = document.getElementById("client-name");
          div.innerHTML = "Your client name: <strong>" + clientName + "</strong>";
        }
      });
    },
    resetInfoModal() {
      this.callModal.title = "";
      this.callModal.content = "";
    },
    resetSmsModalstatic() {
      this.smsModalstatic.title = "";
      // this.smsModal.content = "";
      this.smsModalstatic.number = "";
    },
    resetSmsModal() {
      this.smsModal.title = "";
      // this.smsModal.content = "";
      this.message = "";
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(310)))

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_survey_vue__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_survey_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_survey_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_variables__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_notification__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_notification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_notification__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_util_SBSAjax__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_axios__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_axios__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import SurveyCreator from "../components/SurveyCreator";

var myCss = {
  navigationButton: "button btn-lg"
};
// import firebase from "firebase";
// Survey.cssType = "bootstrap";



__WEBPACK_IMPORTED_MODULE_4_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_vue_notification___default.a);







/* harmony default export */ __webpack_exports__["default"] = ({
  name: "create",
  computed: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_vuex__["a" /* mapGetters */])({
    user: "user"
  })),

  mounted: function () {
    this.fetchFormData();
    this.name = __WEBPACK_IMPORTED_MODULE_6_lodash___default.a.capitalize(window.localStorage.first_name) + " " + __WEBPACK_IMPORTED_MODULE_6_lodash___default.a.capitalize(window.localStorage.last_name);
    this.phone = window.localStorage.phone;
  },
  components: {
    Survey: __WEBPACK_IMPORTED_MODULE_0_survey_vue__["Survey"],
    SBSAjax: __WEBPACK_IMPORTED_MODULE_5__components_util_SBSAjax__["a" /* default */]
  },
  methods: {
    sendMessage() {
      var self = this;
      __WEBPACK_IMPORTED_MODULE_8_axios___default.a.post(__WEBPACK_IMPORTED_MODULE_1__components_variables__["b" /* BACKEND_URL */] + "/calendarcv02/send_SMS_andLog", {
        smsbody: __WEBPACK_IMPORTED_MODULE_1__components_variables__["i" /* MESSAGE */],
        smsfrom: "+14084134555",
        smsto: window.localStorage.phone
      }, {
        headers: {
          authorization: "Bearer " + localStorage.token
        }
      }).then(function (response) {
        self.$notify({
          type: "success",

          title: "Important message",
          text: "SMS sent"
        });
        console.log(response);
      }).catch(function (error) {
        self.$notify({
          type: "error",
          title: "Important message",
          text: "SMS not sent"
        });
        console.log(error);
      });
    },
    sendEmail() {
      var self = this;
      var sendAnswers = [];
      self.attachedAnswers.forEach(obj => {
        var sendObj = {};
        Object.keys(obj).forEach(element => {
          if (!element.includes("Started") && !element.includes("age65") && !element.includes("lung") && !element.includes("last_name") && !element.includes("traveled") && !element.includes("retake") && !element.includes("index") && !element.includes("date_created") && !element.includes("self_or_not") && !element.includes("user_had_nausea_vomiting") && !element.includes("pdf") && !element.includes("started") && !element.includes("relation-Comment")) {
            var x = "";
            if (element.includes("user_")) {
              var y = element.split("_");
              if (y.length > 2) {
                y[3] ? x = __WEBPACK_IMPORTED_MODULE_6_lodash___default.a.capitalize(y[2]) + " " + __WEBPACK_IMPORTED_MODULE_6_lodash___default.a.capitalize(y[3]) : x = __WEBPACK_IMPORTED_MODULE_6_lodash___default.a.capitalize(y[2]);
              } else {
                x = __WEBPACK_IMPORTED_MODULE_6_lodash___default.a.capitalize(y[1]);
              }
            } else {
              if (element.includes("first_name")) {
                x = "Name";
              } else {
                x = __WEBPACK_IMPORTED_MODULE_6_lodash___default.a.capitalize(element);
              }
            }
            sendObj[x] = obj[element] ? obj[element] == true ? "Yes" : obj[element] : "No";
          }
        });
        debugger;
        sendObj["Birthday"] = sendObj["Birthday"] ? new __WEBPACK_IMPORTED_MODULE_7_moment___default.a(String(sendObj["Birthday"])).format("MM/DD/YYYY") : sendObj["Birthday"];
        sendAnswers.push(sendObj);
      });

      var formData = {};
      formData["attach"] = sendAnswers;
      formData["attach_type"] = "json";
      formData["emailTo"] = __WEBPACK_IMPORTED_MODULE_1__components_variables__["j" /* EMAIL_TO */];
      formData["filename"] = self.name + "(" + self.phone + ").pdf";
      formData["subject"] = "CV19 summary for " + self.name + "(" + self.phone + ")";

      formData["body"] = "CV19 summary for " + self.name + "(" + self.phone + ")";

      __WEBPACK_IMPORTED_MODULE_8_axios___default.a.post(__WEBPACK_IMPORTED_MODULE_1__components_variables__["b" /* BACKEND_URL */] + "/calendarcv02/sendEmail", formData, {
        headers: {
          "Content-Type": "application/json",
          authorization: "Bearer " + localStorage.token
        }
      }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    },

    fetchFormData: function () {
      this.answersAfterLogin = [];
      var id = __WEBPACK_IMPORTED_MODULE_1__components_variables__["e" /* FORM_ID */];
      var user_id = window.localStorage.userId;
      this.totalPersons = parseInt(window.localStorage.hous_hold);

      var vm = this;
      // var userSavedAnswers = {};
      // var userSavedAnswersCount = 0;
      // if (window.localStorage.takeAgain == 1) {
      //   var userSavedAnswers = JSON.parse(window.localStorage.answer);
      //   userSavedAnswers=_.find(users, { 'relation': 1, 'user_birthday': true });
      // }
      __WEBPACK_IMPORTED_MODULE_4_vue__["default"].getInvoke("/form/" + __WEBPACK_IMPORTED_MODULE_1__components_variables__["e" /* FORM_ID */], {}, function (response) {
        vm.question = response;
        debugger;
        vm.loader = false;

        var questions = JSON.parse(response.questions);
        var oPage = questions.pages[0];
        var elements = questions.pages[0].elements;

        if (window.localStorage.takeAgain == 1) {

          __WEBPACK_IMPORTED_MODULE_6_lodash___default.a.forEach(elements, function (value, index) {
            console.log(value + " index " + index);
            if (value.name === "first_name" || value.name === "last_name" || value.name === "relation" || value.name === "user_birthday") {
              value.readOnly = true;
            }
          });
        }
        __WEBPACK_IMPORTED_MODULE_6_lodash___default.a.forEach(elements, function (value, index) {
          if (value.name === "user_healh_prof") {
            debugger;
            value.visibleIf = "{user_birthday} < '" + new __WEBPACK_IMPORTED_MODULE_7_moment___default.a().subtract(__WEBPACK_IMPORTED_MODULE_1__components_variables__["h" /* YEARS */], "years").format("YYYY-MM-dd") + "'";
          } else if (value.name === "user_has_outside_activities") {
            debugger;
            value.visibleIf = "{user_birthday} >= '" + new __WEBPACK_IMPORTED_MODULE_7_moment___default.a().subtract(__WEBPACK_IMPORTED_MODULE_1__components_variables__["h" /* YEARS */], "years").format("YYYY-MM-dd") + "'";
          }
        });
        var model = new __WEBPACK_IMPORTED_MODULE_0_survey_vue__["Model"](questions);
        model.css = myCss;

        if (window.localStorage.takeAgain == 1 && window.localStorage.answerAgain) {
          model.data = __WEBPACK_IMPORTED_MODULE_6_lodash___default.a.clone(JSON.parse(window.localStorage.answerAgain));
          vm.totalPersons = 1;
        }

        if (vm.totalPersons != 1) {
          model.completeText = "Next";
        } else {
          model.completeText = "Submit";
        }
        vm.survey = model;
        // model.sendResultOnPageNext = true;
        // model.showPrevButton = false;
        var deletedpage = model.currentPage;
        var lastpage = false;

        var submit = function () {
          var learnQuestion = model.getQuestionByName("pdf");
          learnQuestion.value = true;
          var UserAnswers = model.data;

          // user_has_outside_activities

          //
          // var date = new Date(window.localStorage.birthday)
          //   .toISOString()
          //   .slice(0, 10);
          // var today = new Date();
          // var birthDate = new Date(date);
          // var myage = today.getFullYear() - birthDate.getFullYear();
          // var m = today.getMonth() - birthDate.getMonth();
          // if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          //   myage--;
          // }
          // console.log(" age.value: " + myage);
          // var age = model.getQuestionByName("age65");
          // myage > 65 ? (age.value = true) : (age.value = false);
          if (vm.persons >= vm.totalPersons) {
            vm.notComplete = false;
          }
          //  "relation": "Spouse",
          if (UserAnswers.relation === "Spouse") {
            vm.spouse = true;
          }
          if (UserAnswers.relation === "Self") {
            vm.self = true;
          }
          if (vm.persons <= vm.totalPersons - 1) {
            model.clear(true);
          }
          if (vm.persons == vm.totalPersons - 1) {
            model.completeText = "Submit";
          }
          vm.persons += 1;
          debugger;
          delete UserAnswers.retake;
          delete UserAnswers.user_birthday_Formated;
          delete UserAnswers.index;
          debugger;
          __WEBPACK_IMPORTED_MODULE_4_vue__["default"].postInvoke("/answer", {
            answer: UserAnswers,
            form_id: __WEBPACK_IMPORTED_MODULE_1__components_variables__["e" /* FORM_ID */],
            user_id: user_id
          }, function (response) {
            console.log(response);

            if (response == "") {
              vm.$notify({
                type: "error",

                title: "Important message",
                text: "You will be able to answer it again after 24 hours"
              });
              setTimeout(function () {
                vm.$store.state.user.data = null;
                vm.$store.state.user.loggedIn = false;
                __WEBPACK_IMPORTED_MODULE_5__components_util_SBSAjax__["a" /* default */].resetUser();
              }, 5000);
            } else {
              __WEBPACK_IMPORTED_MODULE_6_lodash___default.a.indexOf(__WEBPACK_IMPORTED_MODULE_6_lodash___default.a.keys(UserAnswers), 'user_healh_prof') == -1 ? UserAnswers['user_healh_prof'] = ' ' : UserAnswers['user_has_outside_activities'] = ' ';
              vm.attachedAnswers.push(UserAnswers);
              //debugger;
              if (vm.persons <= vm.totalPersons) {
                if (window.localStorage.afterLogin == "true") {
                  //debugger;
                  console.log(UserAnswers);
                  vm.answersAfterLogin.push({ answer: UserAnswers });
                }
              } else {
                if (vm.persons == vm.totalPersons + 1 && window.localStorage.afterLogin == "true") {
                  //debugger;
                  vm.answersAfterLogin.push({ answer: UserAnswers });
                  window.localStorage.answer = JSON.stringify(vm.answersAfterLogin);
                  window.localStorage.lastAnswerDate = "";
                  debugger;
                  if (vm.$store.state.showHotline == false) {
                    vm.sendMessage();
                    vm.sendEmail();
                  }

                  vm.$router.push({
                    path: "/save-survey/" + __WEBPACK_IMPORTED_MODULE_1__components_variables__["e" /* FORM_ID */]
                  });
                } else if (window.localStorage.takeAgain == 1 && window.localStorage.answerAgain) {
                  window.localStorage.answerAgain = null;
                  window.localStorage.takeAgain = 0;

                  var userAnswers = JSON.parse(window.localStorage.answer);
                  userAnswers.push({ answer: UserAnswers });
                  window.localStorage.answer = JSON.stringify(userAnswers);
                  if (vm.$store.state.showHotline == false) {
                    vm.sendMessage();
                    vm.sendEmail();
                  }

                  vm.$router.push({
                    path: "/save-survey/" + __WEBPACK_IMPORTED_MODULE_1__components_variables__["e" /* FORM_ID */]
                  });
                } else {
                  setTimeout(function () {
                    if (vm.$store.state.showHotline == false) {
                      vm.sendMessage();
                      vm.sendEmail();
                    }

                    vm.$store.state.user.data = null;
                    vm.$store.state.user.loggedIn = false;

                    __WEBPACK_IMPORTED_MODULE_5__components_util_SBSAjax__["a" /* default */].resetUser();
                    // location.herf = "#/";
                    // vm.$router.push("/");
                    // location.reload();
                  }, 5000);
                }
              }
            }
          });
        };
        // var next = function() {
        //   ///
        //   var learnQuestion = model.getQuestionByName("pdf");
        //   learnQuestion.value = true;

        //   //
        //   var date = new Date(window.localStorage.birthday)
        //     .toISOString()
        //     .slice(0, 10);
        //   var today = new Date();
        //   var birthDate = new Date(date);
        //   var myage = today.getFullYear() - birthDate.getFullYear();
        //   var m = today.getMonth() - birthDate.getMonth();
        //   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        //     myage--;
        //   }
        //   console.log(" age.value: " + myage);
        //   // var age = model.getQuestionByName("age65");
        //   // myage > 65 ? (age.value = true) : (age.value = false);
        //   vm.notComplete = false;
        //   Vue.postInvoke(
        //     "/answer",
        //     {
        //       answer: model.data,
        //       form_id: FORM_ID,
        //       user_id: user_id
        //     },
        //     function(response) {
        //       console.log(response);
        //       if (response == "") {
        //         vm.$notify({
        //           type: "error",

        //           title: "Important message",
        //           text: "You will be able to answer it again after 24 hours"
        //         });
        //       } else {
        //         model.clear(true);
        //         model.removePage(deletedpage);
        //       }
        //     }
        //   );

        //   ///
        // };
        var validate = function (s, options) {
          window.scroll(0, 100);
          if (options.name === "relation") {
            if (vm.spouse && options.value === "Spouse") {
              options.error = "Spouse relation not allowed twice.";
            } else if (vm.self && options.value === "Self") {
              options.error = "Self relation not allowed twice.";
            }
          }
          if (options.question.inputType === "date") {
            if (options.value) {
              var x = new __WEBPACK_IMPORTED_MODULE_7_moment___default.a(options.value);
              var y = new __WEBPACK_IMPORTED_MODULE_7_moment___default.a(String(new Date()));
              console.log(options);
              //  2021-01-31
              var duration = __WEBPACK_IMPORTED_MODULE_7_moment___default.a.duration(y.diff(x));
              var durations = __WEBPACK_IMPORTED_MODULE_7_moment___default.a.duration(x.diff(y));

              if (x.isAfter(y)) {
                options.error = "Future date not allowed.";
              } else if (duration.as("days") >= 15 && options.name !== "user_birthday") {
                options.error = "Please select date from last 15 days.";
              }
            } else {
              options.error = "Please enter a valid date.";
            }
          }
        };

        model.onValidateQuestion.add(validate);

        // model.onPartialSend.add(next);

        model.onComplete.add(submit);
      });
    },
    forceFileDownload(pdfurl, name) {
      const link = document.createElement("a");
      link.href = pdfurl;
      link.setAttribute("download", name + ".pdf"); //or any other extension
      document.body.appendChild(link);
      link.click();
    },

    downloadWithVueResource(pdfurl, name) {
      this.$http({
        method: "get",
        url: pdfurl,
        responseType: "arraybuffer"
      }).then(response => {
        this.forceFileDownload(pdfurl, name);
      }).catch(() => console.log("error occured"));
    }
  },
  data() {
    return {
      loader: true,
      age: 0,
      json: {},
      survey: {},
      savePDF: {},
      attachedAnswers: [],
      attachs: [],
      question: {},
      jsonQuestions: null,
      persons: 1,
      answersAfterLogin: [],
      spouse: false,
      self: false,
      totalPersons: 1,
      name: "",
      phone: "",
      appVerifier: "",
      notComplete: true,
      pdfs: [{ url: "http://www.pdf995.com/samples/pdf.pdf", name: "test" }]
    };
  }
});

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_resource__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bootstrap_vue__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_variables__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vuelidate__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vuelidate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_vuelidate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_util_SBSAjax__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_bootstrap_dist_css_bootstrap_css__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_bootstrap_dist_css_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_bootstrap_dist_css_bootstrap_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_bootstrap_vue_dist_bootstrap_vue_css__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_bootstrap_vue_dist_bootstrap_vue_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_bootstrap_vue_dist_bootstrap_vue_css__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.












__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_8_vuelidate___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_9__components_util_SBSAjax__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].http.options.emulateJSON = true;
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].http.headers.common['Access-Control-Allow-Origin'] = __WEBPACK_IMPORTED_MODULE_7__components_variables__["a" /* URL */];
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].http.headers.common['Access-Control-Request-Method'] = '*';
// Install BootstrapVue
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4_bootstrap_vue__["a" /* BootstrapVue */]);
// // Optionally install the BootstrapVue icon components plugin
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4_bootstrap_vue__["b" /* IconsPlugin */]);

// const configOptions = {
//   apiKey: "AIzaSyCqbA2Hjbi6i4tKbNVGhKbvXveTwu3mSI0",
//   authDomain: "lhpeds-cv19.firebaseapp.com",
//   databaseURL: "https://lhpeds-cv19.firebaseio.com",
//   projectId: "lhpeds-cv19",
//   storageBucket: "lhpeds-cv19.appspot.com",
//   messagingSenderId: "723271041238",
//   appId: "1:723271041238:web:5dd0bb7bfe7415e04dc977",
//   measurementId: "G-Y6HTF343H9"
// };
const configOptions = {
  apiKey: "AIzaSyBov43YgZIhBH6xLfcRUloec5ORDxF8pLg",
  authDomain: "cv19-fb498.firebaseapp.com",
  databaseURL: "https://cv19-fb498.firebaseio.com",
  projectId: "cv19-fb498",
  storageBucket: "cv19-fb498.appspot.com",
  messagingSenderId: "990026941051",
  appId: "1:990026941051:web:bf71720f51c9092fb898de",
  measurementId: "G-XZW3QB86ZW"
};

__WEBPACK_IMPORTED_MODULE_5_firebase__["initializeApp"](configOptions);

__WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().onAuthStateChanged(user => {
  __WEBPACK_IMPORTED_MODULE_6__store__["a" /* default */].dispatch("fetchUser", user);
});

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_6__store__["a" /* default */],
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a },
  template: '<App/>'
});

/***/ }),

/***/ 549:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 550:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 551:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 552:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 553:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 554:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 555:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 556:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 557:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 558:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 559:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 560:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 561:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 562:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 563:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 564:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 565:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 566:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 567:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 568:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 569:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 570:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 571:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 572:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 587:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 324,
	"./af.js": 324,
	"./ar": 331,
	"./ar-dz": 325,
	"./ar-dz.js": 325,
	"./ar-kw": 326,
	"./ar-kw.js": 326,
	"./ar-ly": 327,
	"./ar-ly.js": 327,
	"./ar-ma": 328,
	"./ar-ma.js": 328,
	"./ar-sa": 329,
	"./ar-sa.js": 329,
	"./ar-tn": 330,
	"./ar-tn.js": 330,
	"./ar.js": 331,
	"./az": 332,
	"./az.js": 332,
	"./be": 333,
	"./be.js": 333,
	"./bg": 334,
	"./bg.js": 334,
	"./bm": 335,
	"./bm.js": 335,
	"./bn": 336,
	"./bn.js": 336,
	"./bo": 337,
	"./bo.js": 337,
	"./br": 338,
	"./br.js": 338,
	"./bs": 339,
	"./bs.js": 339,
	"./ca": 340,
	"./ca.js": 340,
	"./cs": 341,
	"./cs.js": 341,
	"./cv": 342,
	"./cv.js": 342,
	"./cy": 343,
	"./cy.js": 343,
	"./da": 344,
	"./da.js": 344,
	"./de": 347,
	"./de-at": 345,
	"./de-at.js": 345,
	"./de-ch": 346,
	"./de-ch.js": 346,
	"./de.js": 347,
	"./dv": 348,
	"./dv.js": 348,
	"./el": 349,
	"./el.js": 349,
	"./en-SG": 350,
	"./en-SG.js": 350,
	"./en-au": 351,
	"./en-au.js": 351,
	"./en-ca": 352,
	"./en-ca.js": 352,
	"./en-gb": 353,
	"./en-gb.js": 353,
	"./en-ie": 354,
	"./en-ie.js": 354,
	"./en-il": 355,
	"./en-il.js": 355,
	"./en-nz": 356,
	"./en-nz.js": 356,
	"./eo": 357,
	"./eo.js": 357,
	"./es": 360,
	"./es-do": 358,
	"./es-do.js": 358,
	"./es-us": 359,
	"./es-us.js": 359,
	"./es.js": 360,
	"./et": 361,
	"./et.js": 361,
	"./eu": 362,
	"./eu.js": 362,
	"./fa": 363,
	"./fa.js": 363,
	"./fi": 364,
	"./fi.js": 364,
	"./fo": 365,
	"./fo.js": 365,
	"./fr": 368,
	"./fr-ca": 366,
	"./fr-ca.js": 366,
	"./fr-ch": 367,
	"./fr-ch.js": 367,
	"./fr.js": 368,
	"./fy": 369,
	"./fy.js": 369,
	"./ga": 370,
	"./ga.js": 370,
	"./gd": 371,
	"./gd.js": 371,
	"./gl": 372,
	"./gl.js": 372,
	"./gom-latn": 373,
	"./gom-latn.js": 373,
	"./gu": 374,
	"./gu.js": 374,
	"./he": 375,
	"./he.js": 375,
	"./hi": 376,
	"./hi.js": 376,
	"./hr": 377,
	"./hr.js": 377,
	"./hu": 378,
	"./hu.js": 378,
	"./hy-am": 379,
	"./hy-am.js": 379,
	"./id": 380,
	"./id.js": 380,
	"./is": 381,
	"./is.js": 381,
	"./it": 383,
	"./it-ch": 382,
	"./it-ch.js": 382,
	"./it.js": 383,
	"./ja": 384,
	"./ja.js": 384,
	"./jv": 385,
	"./jv.js": 385,
	"./ka": 386,
	"./ka.js": 386,
	"./kk": 387,
	"./kk.js": 387,
	"./km": 388,
	"./km.js": 388,
	"./kn": 389,
	"./kn.js": 389,
	"./ko": 390,
	"./ko.js": 390,
	"./ku": 391,
	"./ku.js": 391,
	"./ky": 392,
	"./ky.js": 392,
	"./lb": 393,
	"./lb.js": 393,
	"./lo": 394,
	"./lo.js": 394,
	"./lt": 395,
	"./lt.js": 395,
	"./lv": 396,
	"./lv.js": 396,
	"./me": 397,
	"./me.js": 397,
	"./mi": 398,
	"./mi.js": 398,
	"./mk": 399,
	"./mk.js": 399,
	"./ml": 400,
	"./ml.js": 400,
	"./mn": 401,
	"./mn.js": 401,
	"./mr": 402,
	"./mr.js": 402,
	"./ms": 404,
	"./ms-my": 403,
	"./ms-my.js": 403,
	"./ms.js": 404,
	"./mt": 405,
	"./mt.js": 405,
	"./my": 406,
	"./my.js": 406,
	"./nb": 407,
	"./nb.js": 407,
	"./ne": 408,
	"./ne.js": 408,
	"./nl": 410,
	"./nl-be": 409,
	"./nl-be.js": 409,
	"./nl.js": 410,
	"./nn": 411,
	"./nn.js": 411,
	"./pa-in": 412,
	"./pa-in.js": 412,
	"./pl": 413,
	"./pl.js": 413,
	"./pt": 415,
	"./pt-br": 414,
	"./pt-br.js": 414,
	"./pt.js": 415,
	"./ro": 416,
	"./ro.js": 416,
	"./ru": 417,
	"./ru.js": 417,
	"./sd": 418,
	"./sd.js": 418,
	"./se": 419,
	"./se.js": 419,
	"./si": 420,
	"./si.js": 420,
	"./sk": 421,
	"./sk.js": 421,
	"./sl": 422,
	"./sl.js": 422,
	"./sq": 423,
	"./sq.js": 423,
	"./sr": 425,
	"./sr-cyrl": 424,
	"./sr-cyrl.js": 424,
	"./sr.js": 425,
	"./ss": 426,
	"./ss.js": 426,
	"./sv": 427,
	"./sv.js": 427,
	"./sw": 428,
	"./sw.js": 428,
	"./ta": 429,
	"./ta.js": 429,
	"./te": 430,
	"./te.js": 430,
	"./tet": 431,
	"./tet.js": 431,
	"./tg": 432,
	"./tg.js": 432,
	"./th": 433,
	"./th.js": 433,
	"./tl-ph": 434,
	"./tl-ph.js": 434,
	"./tlh": 435,
	"./tlh.js": 435,
	"./tr": 436,
	"./tr.js": 436,
	"./tzl": 437,
	"./tzl.js": 437,
	"./tzm": 439,
	"./tzm-latn": 438,
	"./tzm-latn.js": 438,
	"./tzm.js": 439,
	"./ug-cn": 440,
	"./ug-cn.js": 440,
	"./uk": 441,
	"./uk.js": 441,
	"./ur": 442,
	"./ur.js": 442,
	"./uz": 444,
	"./uz-latn": 443,
	"./uz-latn.js": 443,
	"./uz.js": 444,
	"./vi": 445,
	"./vi.js": 445,
	"./x-pseudo": 446,
	"./x-pseudo.js": 446,
	"./yo": 447,
	"./yo.js": 447,
	"./zh-cn": 448,
	"./zh-cn.js": 448,
	"./zh-hk": 449,
	"./zh-hk.js": 449,
	"./zh-tw": 450,
	"./zh-tw.js": 450
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 587;

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/LH.1f10c0c.jpg";

/***/ }),

/***/ 592:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAYAAAA/mZ5CAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAFw1JREFUeNrtXWtwFNeVbknFGjAYiFNlkh+2Y/CLYIRH3T2ywFawyctASFLlHwlxsFP7czf707EdNhvHscvYPxy8xK6CQFIVBwTGL8APjI0xD82MBOIN5Wwgm+AEJIxACAnQo/c7PT1aATPS9Ex339Pd51R9jNBjpvve8/W597yupon4KmseekhLmea1acP4MjAlbZoP4PUR4ElgCf7fAHwANAN/Bv6B75/B33Tj6x6g30GP/T38zP6d7O82O3/bYL9X9j0X4v/325+Fz6TPpmsQEQmVZHR9LJTXtMlimi8AG4F9jvJfBKyAcNH5zH24ng14fZ6uia4NGCszJcJCmmtqKqCYRJrb8fojKOpSoAnoAC45VsRihn7n2jqca12Ka1/g3MNYoEJmVsR/8iQSlVC6W6GADwN/APYHbGX8tF50L7+nhwLucTIsa6XMuIgn0pRIaGldHw3l0qFcv0hln+JnmVobL60W3WPGuWe699GNyaQohIg7AXFGpgyjztnj7I84cYohFo3B8zQmINRI0RCRgoKnbiUIdDPwc2BvOus1swSXgcZkD8bqSbzeRGMmmiOibamv1xpNcwKU4vvAuxHZ7wS5r3oXZPoeMJ7GUiSebuqJsDyPQxmOAH1CjJLRS2MIMv0MmCiaFQ/yVGGyp2HiX3ZcwEIEb9GRorE1jLvwWiUaFzW3dTbmUwP8CZN9ThQ+EEK9mjKMxM7aWolNRcCBUAXyVON1HSa3SxQ8cJzH+K+lVUBjMikWKmxiZV3Yd2AiV9iTKQqtGp0g0+/Sun67JerJXz6dPJm8cF/EpD2LyTslCswObZibZ0Co6w9MmSIKy1GwdBiFiXoU+F9RWPb4KwhFGfCjRHOZCCaDrNA0TMxHTtmBKGo40IO52wxMxdyJIit2JkwAnhNHQqjRBTI9C4wXjQ6eQBVAvZNEKsoYDWRApvu219WJuzyQvZBpjkvThtU0L4jyRTKX7+mUYYwTTfd3P3Q3BnpnzLOx45BtvgNzPV003nsCjcDg/ivwuShabHAKS/efYAUyQhjgBYl0fQKItNJJjhQFi1lCLMi0gpxKwoQSZff06Voq2wknJQoVezSCTHeSToi488pVYvDmUSRclEjgoBV6MVe8ekUKlTrACv2HZGkLCmSV/1QSYId3bV+Lwfpv8coJhvHqLaGmNMKYQk4F01wj1aqCItAHy7QalkmyIa5wb0/EwHwilkjg0jJthd7cIAwiEpnmJAxGWhRDUCLIq3tLbAlkZUl0M3BIlEFQJg5iVXOTFUsSZU9mEBIJvCOTad5pxWw5J5ZI4Jtlis2eSEgk8NkyRXvP1JhMThTHgiAIB0RkvXlOnOgTmWRBQNgauTiTk7GwRuJEgiDjTBS0jUwGhJ07l037kYwFQeAZEJRORDoY/izubAKqWCKBOstkGP/elEiEM2ucakecUgjJ4hZwyBqfE8p6plQ24Cr1RAI29UzYq98RPg+dVLYK+GFnaPrn4UL/xemxIBMnYAdq5h+KhipOtx9pVCJg21AFD/pHue+L7paWWYIwtPqic7O4urrHOc0bZaJijMyMGdbub37TSieT3K91e0bXr+NGogqnjTDfeBEm9n8WLbK6jh61Wt9+22r+2tdE8T1Gy5w5VkdLi3Xp9Gnr76+8YmVqa7lX2D7NqisRLqg+zbkXNyb0L089ZfVdvGjl5PTWrdau2bOFAB5hz/z5VuehQwPj29/XZx1ftszK1NVxvu5uGIF7uVijCdxPhfjLL39p9XV1WZdJf7/V/sknVtO99woRygQt5ToPH7aulP6eHptMzK8/o9wlTod8OecT8bVEIFF/b69VSIhMYpm8s0T5hL1lMoxnlB52Riflpbke8oU9kb2cu9ISXfXY7LeXeU319UIMt5boW9+yOg8etIaTAcvE1wHRBSJ9VVWR3ijnuEmeJCJLdOmSVazYe6YHHhCCFOtYmDevKBINfmCxtkyGsRn6HOyZtnR6eDp78HEPRxIdJUvU3W25ErJMH39sNc+aJUQpwjt3bv9+y63kLFPmnns43hedabuwuaYm0CXdF9McTw/PLecuXLBKFbJMQibvSTRAJuxXGZPpGMh0fWCttGACn2Vricog0QCZYJlkmZeHRHPnWuf27St7fAfIxHCZB93+dVBpQHfYKRYM90Sul3PigHDl4i7HEoXIAdGGFddtfseMqGx8BcdgqxvHgisHhLjGs5bIQxJxd0BAz5djiVflZ9yoGh90nn2w1cOJjnvQdtfXv+4PiXgHbTtBpmm+kKi5pqYCb74uTMFWrySuQVuv9kTFCDvLZBhrt82cWeGHNaphE3wtNtjqoWWyvXkxSnS190R79lhByYBrnE+i63nofML7llqG8Scuk0xZ3IMTUIMSm0z33x99Ej34oNURIIkGJ7r+bckSTnulV8kv4KWTgVKBOrjcIJVCKJFc0DbCZNr97W/bpRCqpOvYMVbdh2BApnpZJvEyp8luXb9e2URHeZlHyzmVJLKo9GL5cm4evN96FTeayMkaEUiJSZlJqVVJ1HLz7OXc7t3qnk+9vdY/V63imPHQAQ6U15B/S309ORkeZ+mWnT3bat+2TallioprvBkPBKWWCHJi9WqraeZMrp2HHqP80nJy6ugEiSNcFYCU2CaTQssUdte4bYkUkogs0YmGBu49Hg6ndX18OXuj76eZN7/nYJnsdKL77gtfsBVjp3I5R2NHJAqBVaf2ct8tuQE+8G4YFIJy4tq3b1e6NGkP2Z7J9s7t2qWOQ3191ok1a7hmgecL0G7EXqmylAAsnfN6MUxPV+WWKST1TLu+8Q3rbHOzUu8ckYjrnqgAiAs3lkKkn4dx09y+Y4dSy8Q9aMuCRGvX2v3vQrenNIwn3JJoJP5wb1g9UMrJRJaJ4TKPeiyczWTULufCSqIsWsCNa9zEjuqo51eYM5bP7Nyp3gHBqJ6JiH22qUnpmJx87bWwhwu6wY3aolts4Q9eCH1sBHsVpWRiVM/EwRKdXLcuPI6FoZd3i4s6sIwOr8Uf7I9ELQ32A2dSKfVBW4WbasoCUWqJICdffz1KNV37QKZRxVgkPR2hM19peaWUTAqDtpQ7p9wSvfGGXTsWoZxEOi29phgi/VfkqjzJMjU2xirRlfZEqq2xbYlCGKguYnm3aOgq2ESiknsf79AqVs41HoA3T/mSFpaoFZYoxN654ZAmrgyVzXArfulsZPsPMNgz+V3PZHssVVpfh0QR73NxFlyZNBSRHo7S/qhgQDKdVm+ZfMiAoBQl1UvY1jffjEOzmH4s7xYUbG6CH/4hFp1xsPHnQCYvc/Nsa6vS3U+W6K23orycu7K0YmVLdXVFPifD2Ki4vYuOrSgOUNqucQ824+TEUGqJIHQKYiQdC0O7wcfkW9bdjh9eilO7KVpeqY6xlOsaZ2GJ1q+PRrDVZRJrKl9HVrDrR7FsxcvAMpVaz0SWqF1xKlQbSBTj1s4/zGeRlsa1m6idh6YyIzpnmVzsmcg7pzQ51yER8zNi/Y4nvZSvGrYptgPCxTIVWc9E7nOlhYxiiXLIXNkAciy3TkGxrNUpop7JLhNRXMDYtmGDHGLtdBjKDHY4YFlnxs3RMGR+mmoyFahnsquAsQRUSqKNG+PmnRsKl8AdY7Cj4ZGoB2Jd9zNQ3BTEtkyDlk62Y0G1JXrnHVnOXZ3AunDw/ugFGZSrN/NKyTSonomFJSISxSTY6hKLbRKteeghItJGGRA+zeSvDNqq7t136r33YnUSh8sMh/WWsz+61o7SyqAU9JCdU0kmlQLyEoliGGx1g73g0GjaH30Z//mHDEhh0Eneqlv6qiKRWKJh8Rk49CUi0pQw9a9T6c2LjWUiEr3/vri4i8MF4hDtjx6QwQhHn2yxRGz3SbNyrm8ZEBdkOrd3b3RJtGmTuLjd48dEpCdlINynE0WOTDkSSbC1FIv0BBFpiQxGCQ4IOvF7//7I8OjzzZtD0becKZF+Q3ukBhmM0nPzQk8mWCIiUcga2nPDKiLSBzIQZVimefNCTSbbEsXgpHafsYmI1CwD4YFr/MCB8FmiDz8UF7dX5RT4588yEDGzTA6JxBJ5hk81yWrwkEzkGudumYhEH30kcSKPsxvIa3dGBsJjbx5XMuUskXjnvMZpSlrtloHwfpnXefAgOx6d3rJFlnP+oJuWdj0yEP5kQLAhExUKgkSSseBfpawmlbH+Yc/8+Vbn4cPqLVFAzfvjXCkrRPKbSEeOKCdSu8ftkQX5iSRLO7+WdocO8VnaUUMVWdr5t7QTZ4MPzobvfIcPiQYv8Xw+UibezgZxf8fCYzfY6SDubx/c3xKQ9TaGxNES5V3mCZk8DshKipB3jgWulqhATEkcEN6mCEnSqgcNJTm4ud1apnZYJink8y5pVcooyrVE3JdzwzggxDJ5U0YhhX1llJyHzhLls0x0PpOUU5RZ2Cel5qHOWpCgLYtS8xel+Ump3rkQORZcucalvKLk5icLZTBcxolCvCeSoK1f7bhM834ZCBcZC1GzRIUsk5DJDWZJy+JiSTRnTqQtkeTmlQynZbE00Y+8i1tc477iuN1EX451Gb5DUJS8cyW5xqXn3VDIHutCB43hiw0yIAzriZwjMO3T+hQeNCau8SE9dtmDxpyjL5+XQeFXT2Rv+qHApMS0zFK9Z5JS9bxYLIcxc60nyvVYGJQHRxt/m0wKLVOh09bjXBl72WHM+I9JVX4yMAzqiYZo3kjfI4IpI5PUM12Ji+COMZhIY/HNDslYmKvcEtnNG4dQVPoZh2WekMnGWXBnjDZY8M0mqSdSbImooX0RKToDZFK5zJN6pmz5xJWCby6VeiJ14rYXNykxedOknkmpx+6lq4lkGAski1udJSolVkNKTO5x1Q6I2Fomw/jBVUQCu26PW6oQh3qics8nYmGZ4lnPRKlBt+azSORw2C+WKEBL9MEHnmQNkBK3K7ZMMQza7gVnxuQjUgV++HvxzgVDIjr42EvPF4ugbYzqmbCCW9FcU6PlFfzw4agHZjkEW0+9/74vm3RSYhZB2+iXYFAgdoFWSPDDyeQbl3oiH0n03nu+ptrYQVuVZIpHPdMZrOAmFSRSRtcryTcu9UT+kSiIpY9NJsUOCNsyRXeZl9pTXV2pDSWwSr+QeiKfLFGAni0uy7xIOiAMY5E2nIBIepT2SRxc3EFZoryucSrBkHomT/dHIFKiGCKNjoobnCzRecX1RESiTF2dsjEgJZZ6Js8L+UYNSySwLRL1SXY9keI4Uds777DYJ+yaPZtHPVME0olAoueII0VJyjDq0iE+N4lDsJVI1DRjBpsxIU+hpBOVjS4QqVYrVhqTyZH4oz3Sd65EEm3cyLKatJlL0Da8JRgtGV2/RnMjYN6TQqISScR4CSP1TGUt6x7X3AqYd3OYklg5uLjb1q8PRfKm1DOVVg2LvdGNrokE9lFw9l1xLLggUYiag3DIGg+ZA2IDiFSplSIg0/fwBr3iWBhC+vpsEql0cZfsgJB6pmLRCy7M10oV/PF4vMkRCbYWltaQWaJ8rnEWQVveS+LDxIWSibSlvp7iSj8TS5TfErW+/baVueee0MdG7HomCdoO5WR47MCUKVpZgjeZyK3DEIcE1Na33opUvwKpZxqyU9ANmheCN3uZy41lZsywOlpa1FqiN9+0ryNqyZh2oqviPdPnmzZZmdpaTgmqSzWvBG92FxerRE3tL50+rY5Eb7wR6f4EquuZejC3NMdcrBF0f6pnRIJpqwJeZXFzyaT191desfqh1IEv5yJOIuX1TDTGr79uzzETa/THnbW1VZqXkjKMGrz5eRbLO5j+48uWWf09PcHML0h7EhMcxeUcm3omJ4zAqOTiPIzH3ZrXYjdHMYy1bPZKdXU2mYIQIlEcGyEGWc/UtmEDqzACSNTQUl1dofkhePNp+JBOTpPtp2XKWaI0p81v1FzjZIlAImZhhE7yC2h+SWMyWYUPWMFpogcsk9cTjfc7uW5dHBsf5q9n8mPPRKlVIBG7s2oNYzlQpfkp2CtRR9Y2VjeOzamXlsm2RK+9FolgK9t6JodEDPedrXk7qHotVnaJ9wy3ic5Zpv7e3rKXGifWrpVzU/0M2uaSfDnuOw3jV1pQgg+7Hh/6V3ZkggUpi0wOieLknSupBKOcZZ5jiTgumWEgjmL78oXAiER5R/hQOi6zhy2ZXC7zaDl3Ys0aIZGf9Uy8a7Z6qNMw5ZcGKrBKo4APOU60awcEfo9IJMs5l8s8N5YpZ4n4hhE2QZ9HaiqE0ieoIQTLgSnSAUHLwBMNDeJY8NMBkXNx87X259O6PkVTJTCFRKZnuU50MUFbIpG4uP2tZ2Lp4r58b/R0ptgWWz66w8dz7xeezzLZlmj1aj55XVEM2vIMtl7VxxvGYJzGQXAh93HugzfgGs8luuL1n6tWyZ7Iz6BtOPpYdEN3Z2pcZHtdHR1S9jTnnuGU6Pq3JUus7mPHrM9WrpQ9kU+JrlTweOH4cdvaM39Qka4+RTmkGifBEm8cLmyHKJQgJMvlbRldv07jKGD3dFzgKVEmAXO0QVenaZwlZZo/4d7CSxBrkG4+onGXRtMcwS1DXCAYhOVNNTUjtDAIrNIEXHCjTJqAGXaU1Z9OEZnutFPSZfIEPHASK6U7tLBJcyJBZJrLrSeeIJboAIke3D19uhZKofgSyPTTdITOpBWEDn3QwX9rTCYrtDCLXZ5umkvohmRSBUGTCHgROlipRUHSuj4aT4XVYpkEgWYuGMYqOlxci5LgqUDJrVtlggUBlYx/nNH18VoUhZqR29m2MtECf0nUCNygRVlwg7fgZg/KhAt8wgHo2Fe0OAhu9CYhk8AnEt2kxUWopVc6G7AVMgm8IxF0ytJiJpZYJoFYIg+XeaZ5izggBGU6Fr6iiQx487ZKnEngMk70ceS9c6XEmZygrWRACIrJWFgV2TiRFxkQTjqRWCbBkGk/KcMYLYwZJjfPSXSVrHHBVVncTgJqpTClCGlKJCqcEgypZxL8fz2Rrs9h1/WHu1DtiFMcKJW2gh1UlBfaeiIWSz3TJCfECmmoEtNGJYaxPHTl4YzJRA1VHpVWXzFrmWWaj2R0fYQwwPscvWoM7nbx6kU8PmSa29j3nQu7UHdMpz1ytyhd5NDttBG+TjQ9AHF6QdybZn4KhsAV6FSImeKVU7PUGw/QwdBdooihxXk8FH/N5miVGOfpUQP/qZiIzWmGZ9oKCoLmahOdlKf8kC+Rywg1ChOzEDgmSsoeR+ngY2VntooMLXTaOibnenupkHWfitLyQivm51eNpvmFwE8PFyk59nQbCPU7TF6nKLBydIJAy4BbRTPDSKZsAuw0TOBa2tSKQitxJDRg/O/K6HqVaGTIZWdtbUXKMBKY1FclqzwQnAV5/ojxvrululrc2RF0SFTR0xGvvxVC+UagpcBUPLzEAsWCVIZxAwj1GCb/sCTElplYijGksaSWAaJZMZRPJ0+mqlwK6n4X2AiFuCjEKBo0VhuA+RQYJ4+piAhZqEooxY1QiifwZG2RXL68oAySFozP4xgnGiupVBUpLFCQa0CsWrwuhuLsi3m2Od37XpDnOaA2o+vXiIaIuBKqyASZRkGBavD6n1CotL2hjjax6N7OOEmki4AEjUFzTY0ohIg30pxIVIJUk6BYC/C60rFWFyOy39nrVCL/EPc3aU91tSzbRPwXio9A4cZA+W5zlO8lp6yD3OqXmFqtfoc0ZFUzuPaXcN0/sO8B9yIxHxE20phMErmMVDaBdjFe19PTHvgMuBAgaeizjjuWZr1zLQudaxsjMyUSKqHDAuj4RTzxvwRMwdezoNQ/xit5B39DHUPtcoKsNfvUIdxpx2uYs2z9ztfdzs8+c3434/wtHfH4Ir0nvXeaPgOfRZ9Jn23JNPgu/wflo4zsHOVQUQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wMi0xM1QyMTo1NzowNS0wNzowMHO/Rt8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMDItMTNUMjE6NTc6MDUtMDc6MDAC4v5jAAAAAElFTkSuQmCC"

/***/ }),

/***/ 593:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSItNDc0OS40OCAtNTAyMCAzNS4wMzYgMzUuMDM2Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDpub25lO30uYntmaWxsOiM0ZThjZmY7fS5je2NsaXAtcGF0aDp1cmwoI2EpO30uZHtmaWxsOiNmZmY7fS5le2ZpbGw6I2VmZjRmOTt9PC9zdHlsZT48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGNsYXNzPSJhIiBkPSJNMC0zOTkuNDc5SDE3LjU1NXYxNy41NTVIMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMzk5LjQ3OSkiLz48L2NsaXBQYXRoPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDg4NiAtNTA3NSkiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0NS4xMyA2NCkiPjxnIGNsYXNzPSJjIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIj48cGF0aCBjbGFzcz0iZCIgZD0iTS0zODEuOTI0LTE5MC45NjJhOC43NzgsOC43NzgsMCwwLDAtOC43NzgtOC43NzgsOC43NzgsOC43NzgsMCwwLDAtOC43NzgsOC43NzgsOC43NDUsOC43NDUsMCwwLDAsMi4yNiw1Ljg3OXYxLjQ0MmMwLC44LjQ5MiwxLjQ1NywxLjEsMS40NTdoNS44M2EuODQzLjg0MywwLDAsMCwuMTgzLS4wMiw4Ljc3OCw4Ljc3OCwwLDAsMCw4LjE4NC04Ljc1NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzk5LjQ3OSAxOTkuNzQpIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiPjxwYXRoIGNsYXNzPSJlIiBkPSJNLTY4Ljc2My0xOTQuMDc5YTkuMjkyLDkuMjkyLDAsMCwxLDYuMzgtOC44ODhjLS4yNTItLjAyMi0uNTA2LS4wMzMtLjc2My0uMDMzYTguNzc0LDguNzc0LDAsMCwwLTguNzc4LDguNzc4QTkuNTA4LDkuNTA4LDAsMCwwLTY5LjctMTg4LjNjLjAwNSwwLDAsLjAwOSwwLC4wMS0uMzExLjM1Mi0xLjkyNCwyLjg0OS4wMjEsMi44NDloMi4yNWMtMS4yMy0uMDIyLDEuMjYzLTIuMTA3LjI2OS0zLjQ5NGE4LjIyNSw4LjIyNSwwLDAsMS0xLjYtNS4xNDEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcxLjkyNCAyMDMpIi8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(553)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(485),
  /* template */
  __webpack_require__(627),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(567)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(486),
  /* template */
  __webpack_require__(644),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(571)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(487),
  /* template */
  __webpack_require__(648),
  /* scopeId */
  "data-v-c97a0a38",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(564)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(488),
  /* template */
  __webpack_require__(638),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(570)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(489),
  /* template */
  __webpack_require__(647),
  /* scopeId */
  "data-v-bf9cc140",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(490),
  /* template */
  __webpack_require__(642),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(572)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(491),
  /* template */
  __webpack_require__(650),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(549)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(492),
  /* template */
  __webpack_require__(623),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(561)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(493),
  /* template */
  __webpack_require__(635),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(558)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(494),
  /* template */
  __webpack_require__(632),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(552)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(495),
  /* template */
  __webpack_require__(626),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(496),
  /* template */
  __webpack_require__(640),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(562)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(497),
  /* template */
  __webpack_require__(636),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(568)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(498),
  /* template */
  __webpack_require__(645),
  /* scopeId */
  "data-v-7928bd28",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 608:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(557)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(499),
  /* template */
  __webpack_require__(631),
  /* scopeId */
  "data-v-2b5746b1",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(500),
  /* template */
  __webpack_require__(622),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(556)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(501),
  /* template */
  __webpack_require__(630),
  /* scopeId */
  "data-v-255ed4e3",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(566)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(502),
  /* template */
  __webpack_require__(643),
  /* scopeId */
  "data-v-73e363a8",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(560)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(503),
  /* template */
  __webpack_require__(634),
  /* scopeId */
  "data-v-3747d669",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(569)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(505),
  /* template */
  __webpack_require__(646),
  /* scopeId */
  "data-v-7ed90bfa",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(506),
  /* template */
  __webpack_require__(649),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(554)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(507),
  /* template */
  __webpack_require__(628),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(508),
  /* template */
  __webpack_require__(639),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(565)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(509),
  /* template */
  __webpack_require__(641),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(559)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(510),
  /* template */
  __webpack_require__(633),
  /* scopeId */
  "data-v-33e66800",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(563)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(511),
  /* template */
  __webpack_require__(637),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(551)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(512),
  /* template */
  __webpack_require__(625),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(550)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(513),
  /* template */
  __webpack_require__(624),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 622:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    attrs: {
      "id": "delete-product"
    }
  }, [_c('div', {
    staticClass: "row justify-content-center"
  }, [_c('div', {
    staticClass: "col-md-8"
  }, [_c('div', {
    staticClass: "module-box"
  }, [_c('h1', {
    staticClass: "mt-0 mb-5"
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'AllClinic'
      }
    }
  }, [_c('span', {
    staticClass: "material-icons"
  }, [_vm._v("keyboard_backspace")])]), _vm._v(" Delete Clinic " + _vm._s(_vm.clinic.title))], 1), _vm._v(" "), _c('notification', {
    attrs: {
      "notifications": _vm.notifications
    }
  }), _vm._v(" "), _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        return _vm.deleteClinic($event)
      }
    }
  }, [_vm._m(0)])], 1)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('button', {
    staticClass: "btn btn-danger"
  }, [_vm._v("Delete Clinic")])])
}]}

/***/ }),

/***/ 623:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "background": "#f5fbff"
    }
  }, [_vm._m(0), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row justify-content-center"
  }, [_c('div', {
    staticClass: "col-md-10 col-sm-12 login-module"
  }, [_c('div', {
    staticClass: "module-box"
  }, [_c('h1', {
    staticClass: "doctors_title mb-40"
  }, [_vm._v("Register")]), _vm._v(" "), (_vm.error) ? _c('div', {
    staticClass: "alert alert-danger"
  }, [_vm._v(_vm._s(_vm.error))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_vm._m(1), _vm._v("\n             \n            "), _c('vue-tel-input', _vm._b({
    staticClass: "form-control col col-9",
    attrs: {
      "placeholder": "Enter Your Phone  * "
    },
    on: {
      "validate": function($event) {
        return _vm.validate($event)
      },
      "country-changed": _vm.countryChanged
    },
    model: {
      value: (_vm.form.phone),
      callback: function($$v) {
        _vm.$set(_vm.form, "phone", $$v)
      },
      expression: "form.phone"
    }
  }, 'vue-tel-input', _vm.bindProps, false)), _vm._v(" "), _c('div', {
    staticClass: "col col-2"
  }), _vm._v(" "), (_vm.showValidation) ? _c('div', {
    staticClass: "showField col-9"
  }, [_c('span', [_vm._v("Phone numbers should be atleast 10 digits")])]) : _vm._e()], 1), _vm._v(" "), _c('form', {
    attrs: {
      "action": "#"
    },
    on: {
      "submit": function($event) {
        $event.preventDefault();
        return _vm.submit($event)
      }
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_vm._m(2), _vm._v("\n               \n              "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.first_name),
      expression: "form.first_name"
    }],
    staticClass: "form-control col col-9",
    attrs: {
      "id": "first_name",
      "placeholder": "Enter Your First Name (optional)"
    },
    domProps: {
      "value": (_vm.form.first_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "first_name", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_vm._m(3), _vm._v("\n               \n              "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.last_name),
      expression: "form.last_name"
    }],
    staticClass: "form-control col col-9",
    attrs: {
      "id": "last_name",
      "placeholder": "Enter Your Last Name (optional)"
    },
    domProps: {
      "value": (_vm.form.last_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "last_name", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_vm._m(4), _vm._v("\n               \n              "), _c('div', {
    staticClass: "col col-9"
  }, [_c('datepicker', {
    staticClass: "form-control col col-9",
    class: {
      'is-invalid': _vm.submitted && _vm.$v.form.birthday.$error,
    },
    attrs: {
      "format": "MM/dd/yyyy",
      "disabledDates": _vm.state.disabledDates,
      "minimumView": 'day',
      "maximumView": 'year',
      "initialView": 'year',
      "id": "birthday-datepicker",
      "placeholder": "Date of Birth (MM/DD/YYYY)*",
      "aria-required": "required",
      "typeable": true
    },
    on: {
      "input": function($event) {
        return _vm.setDate(_vm.form.birthday)
      }
    },
    model: {
      value: (_vm.form.birthday),
      callback: function($$v) {
        _vm.$set(_vm.form, "birthday", $$v)
      },
      expression: "form.birthday"
    }
  }, [(_vm.submitted && !_vm.$v.form.birthday.required) ? _c('div', {
    staticClass: "invalid-feedback"
  }, [_vm._v("Date Of Birth is required")]) : _vm._e()]), _vm._v(" "), (_vm.showValidationDate) ? _c('div', {
    staticClass: "col col-2"
  }) : _vm._e(), _vm._v(" "), (_vm.showValidationDate) ? _c('div', {
    staticClass: "showField col-9",
    staticStyle: {
      "margin-top": "0px"
    }
  }, [_c('span', [_vm._v("Date of birth is incorrect")])]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_vm._m(5), _vm._v("\n               \n              "), _c('div', {
    staticClass: "form-group col col-9"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.email),
      expression: "form.email"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.submitted && _vm.$v.form.email.$error
    },
    attrs: {
      "placeholder": "Enter Your Email (optional)",
      "id": "email",
      "name": "email"
    },
    domProps: {
      "value": (_vm.form.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "email", $event.target.value)
      }
    }
  }), _vm._v(" "), (_vm.submitted && _vm.$v.form.email.$error) ? _c('div', {
    staticClass: "invalid-feedback"
  }, [(!_vm.$v.form.email.email) ? _c('span', [_vm._v("Email is invalid")]) : _vm._e()]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_vm._m(6), _vm._v("\n               \n              "), _c('div', {
    staticClass: "form-group col col-9"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.password),
      expression: "form.password"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.submitted && _vm.$v.form.password.$error,
    },
    attrs: {
      "placeholder": "Enter any 4 digit PIN *",
      "id": "password",
      "type": "password",
      "name": "password"
    },
    domProps: {
      "value": (_vm.form.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "password", $event.target.value)
      }
    }
  }), _vm._v(" "), (_vm.submitted && _vm.$v.form.password.$error) ? _c('div', {
    staticClass: "invalid-feedback"
  }, [(!_vm.$v.form.password.required) ? _c('span', [_vm._v("PIN is required")]) : _vm._e(), _vm._v(" "), (
    !_vm.$v.form.password.maxLength ||
    !_vm.$v.form.password.minLength ||
    !_vm.$v.form.password.integer
  ) ? _c('span', [_vm._v("PIN must be 4 digit integers only")]) : _vm._e()]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_vm._m(7), _vm._v("\n               \n              "), _c('div', {
    staticClass: "form-group col col-9"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.zipCode),
      expression: "form.zipCode"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.submitted && _vm.$v.form.zipCode.$error,
    },
    attrs: {
      "placeholder": "Enter Your ZipCode *",
      "id": "zipCode",
      "type": "text",
      "name": "zipCode"
    },
    domProps: {
      "value": (_vm.form.zipCode)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "zipCode", $event.target.value)
      }
    }
  }), _vm._v(" "), (_vm.submitted && _vm.$v.form.zipCode.$error) ? _c('div', {
    staticClass: "invalid-feedback"
  }, [(!_vm.$v.form.zipCode.required) ? _c('span', [_vm._v("ZipCode is required")]) : _vm._e(), _vm._v(" "), (!_vm.$v.form.zipCode.minLength) ? _c('span') : _vm._e(), _vm._v(" "), (
    !_vm.$v.form.zipCode.maxLength ||
    !_vm.$v.form.zipCode.integer ||
    !_vm.$v.form.zipCode.minLength
  ) ? _c('span', [_vm._v("ZipCode must be 5 digit integers only")]) : _vm._e()]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('VueLoadingButton', {
    staticClass: "boxed-btn3 large_margin pull-right",
    attrs: {
      "loading": _vm.isLoading,
      "styled": _vm.isStyled
    },
    nativeOn: {
      "click": function($event) {
        return _vm.submit($event)
      }
    }
  }, [_vm._v("Register")])], 1), _vm._v(" "), _c('hr'), _vm._v(" "), _c('p', {
    staticClass: "btn btn-block mt-3 pointers",
    on: {
      "click": _vm.goToLogin
    }
  }, [_vm._v("Already a member? Log in")])])])])])]), _vm._v(" "), _c('notifications', {
    attrs: {
      "position": "top center"
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('br')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "service_area"
  }, [_c('div', {
    staticClass: "container p-0"
  }, [_c('div', {
    staticClass: "row no-gutters"
  }, [_c('div', {
    staticClass: "col-xl-4 col-md-4"
  }, [_c('div', {
    staticClass: "single_service"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/ensofia/cv19/website/img/about/pin.png",
      "width": "50"
    }
  }), _vm._v(" "), _c('p', [_vm._v("\n              Register and choose 4 digits PIN .You will use it when you log\n              in Please keep your PIN secure\n            ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-4 col-md-4"
  }, [_c('div', {
    staticClass: "single_service"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/ensofia/cv19/website/img/about/anonymous.png",
      "width": "50"
    }
  }), _vm._v(" "), _c('p', [_vm._v("For your privacy your name and email address are optional")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br')])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-4 col-md-4"
  }, [_c('div', {
    staticClass: "single_service"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/ensofia/cv19/website/img/about/united.png",
      "width": "50"
    }
  }), _vm._v(" "), _c('p', [_vm._v("\n              3 different people may register with the same mobile phone\n              number\n            ")])])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "col col-2",
    attrs: {
      "for": "phone"
    }
  }, [_c('p', [_vm._v("Phone")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "col col-2",
    attrs: {
      "for": "name"
    }
  }, [_c('p', [_vm._v("First Name")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "col col-2",
    attrs: {
      "for": "name"
    }
  }, [_c('p', [_vm._v("Last Name")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "col col-2",
    attrs: {
      "for": "name"
    }
  }, [_c('p', [_vm._v("Birthday")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "col col-2",
    attrs: {
      "for": "name"
    }
  }, [_c('p', [_vm._v("Email")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "col col-2",
    attrs: {
      "for": "name"
    }
  }, [_c('p', [_vm._v("PIN")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "col col-2",
    attrs: {
      "for": "name"
    }
  }, [_c('p', [_vm._v("ZipCode")])])
}]}

/***/ }),

/***/ 624:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "background": "#f5fbff"
    }
  }, [_c('div', [_vm._m(0), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "container",
    attrs: {
      "id": "view"
    }
  }, [(_vm.loader) ? _c('div', {
    staticClass: "row justify-content-center"
  }, [_c('vue-loaders-ball-scale-ripple-multiple', {
    staticClass: "class-based-color",
    staticStyle: {
      "margin": "0 auto"
    },
    attrs: {
      "color": "currentColor"
    }
  })], 1) : _vm._e(), _vm._v(" "), (!_vm.loader) ? _c('div', {
    staticClass: "row justify-content-center"
  }, [_c('div', {
    staticClass: "col-md-8"
  }, [_c('div', {
    staticClass: "module-box"
  }, [_c('h1', {
    staticClass: "text-center"
  }, [_vm._v(_vm._s(_vm.question.name_en))]), _vm._v(" "), (_vm.notComplete == 1) ? _c('div', [(_vm.totalPersons != 1) ? _c('h1', {
    staticClass: "text-center"
  }, [_vm._v("Person: " + _vm._s(_vm.persons) + "/ " + _vm._s(_vm.totalPersons))]) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.notComplete == 1) ? _c('h4', [_vm._v("Please answer these questions :")]) : _vm._e(), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "inline-block",
      "width": "100%"
    },
    attrs: {
      "id": "surveyElement"
    }
  }, [_c('survey', {
    staticClass: "survey",
    attrs: {
      "survey": _vm.survey
    }
  })], 1)])])]) : _vm._e()]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br')]), _vm._v(" "), _c('notifications', {
    attrs: {
      "position": "top center"
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "service_area"
  }, [_c('div', {
    staticClass: "container p-0"
  }, [_c('div', {
    staticClass: "row no-gutters"
  }, [_c('div', {
    staticClass: "col-xl-4 col-md-4"
  }, [_c('div', {
    staticClass: "single_service"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/ensofia/cv19/website/img/about/who.png",
      "width": "50"
    }
  }), _vm._v(" "), _c('p', [_vm._v("\n                This website / application is made by team EnSofia. It is our\n                humble effort to contribute and help the public to aid the\n                tremendous efforts and steps taken by many organizations to\n                flatten the curve.\n              ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-4 col-md-4"
  }, [_c('div', {
    staticClass: "single_service"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/ensofia/cv19/website/img/about/correct1.png",
      "width": "50"
    }
  }), _vm._v(" "), _c('p', [_c('strong', [_vm._v("What it is?")]), _vm._v("This website / application is\n                built to increase awareness and share information published by\n                the US – Centers for Disease Control and Prevention available\n                at CDC.gov\n              ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('br')])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-4 col-md-4"
  }, [_c('div', {
    staticClass: "single_service"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/ensofia/cv19/website/img/about/wrong.png",
      "width": "50"
    }
  }), _vm._v(" "), _c('p', [_c('strong', [_vm._v("What it is NOT?")]), _vm._v(" This is not diagnostic or\n                medical site. You should not use this website or its\n                communications for any medical advice. If you have medical\n                questions, contact your doctor. If you have an emergency call\n                911.\n              ")])])])])])])
}]}

/***/ }),

/***/ 625:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.disable) ? _c('b-container', {
    attrs: {
      "fluid": ""
    }
  }, [(_vm.loader) ? _c('div', {
    staticClass: "row justify-content-center"
  }, [_c('vue-loaders-ball-scale-ripple-multiple', {
    staticClass: "class-based-color",
    staticStyle: {
      "margin": "0 auto"
    },
    attrs: {
      "color": "currentColor"
    }
  })], 1) : _vm._e(), _vm._v(" "), (!_vm.loader) ? _c('div', [_c('b-row', [_c('b-col', {
    staticClass: "my-1",
    attrs: {
      "lg": "6",
      "md": "6",
      "sm": "5"
    }
  }, [_c('b-form-group', {
    staticClass: "mb-0",
    attrs: {
      "label": "Sort",
      "label-cols-sm": "3",
      "label-align-sm": "right",
      "label-": "",
      "size": "md",
      "label-for": "sortBySelect"
    }
  }, [_c('b-input-group', {
    attrs: {
      "size": "md"
    }
  }, [_c('b-form-select', {
    staticClass: "w-75",
    attrs: {
      "id": "sortBySelect",
      "options": _vm.sortOptions
    },
    scopedSlots: _vm._u([{
      key: "first",
      fn: function() {
        return [_c('option', {
          attrs: {
            "value": ""
          }
        }, [_vm._v("-- none --")])]
      },
      proxy: true
    }], null, false, 478637150),
    model: {
      value: (_vm.sortBy),
      callback: function($$v) {
        _vm.sortBy = $$v
      },
      expression: "sortBy"
    }
  }), _vm._v(" "), _c('b-form-select', {
    staticClass: "w-25",
    attrs: {
      "size": "md",
      "disabled": !_vm.sortBy
    },
    model: {
      value: (_vm.sortDesc),
      callback: function($$v) {
        _vm.sortDesc = $$v
      },
      expression: "sortDesc"
    }
  }, [_c('option', {
    domProps: {
      "value": false
    }
  }, [_vm._v("Asc")]), _vm._v(" "), _c('option', {
    domProps: {
      "value": true
    }
  }, [_vm._v("Desc")])])], 1)], 1)], 1), _vm._v(" "), _c('b-col', {
    staticClass: "my-1",
    attrs: {
      "lg": "6",
      "md": "6",
      "sm": "5"
    }
  }, [_c('b-form-group', {
    staticClass: "mb-0",
    attrs: {
      "label": "Filter",
      "label-cols-sm": "3",
      "label-align-sm": "right",
      "label-": "",
      "size": "md",
      "label-for": "filterInput"
    }
  }, [_c('b-input-group', {
    attrs: {
      "size": "md"
    }
  }, [_c('b-form-input', {
    staticClass: "w-75",
    attrs: {
      "lg": "1",
      "type": "search",
      "id": "filterInput",
      "placeholder": "Type to Search"
    },
    model: {
      value: (_vm.filter),
      callback: function($$v) {
        _vm.filter = $$v
      },
      expression: "filter"
    }
  }), _vm._v(" "), _c('b-input-group-append', {
    staticClass: "w-25"
  }, [_c('b-button', {
    attrs: {
      "disabled": !_vm.filter
    },
    on: {
      "click": function($event) {
        _vm.filter = ''
      }
    }
  }, [_vm._v("Clear")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('b-col', {
    staticClass: "my-1",
    attrs: {
      "sm": "6",
      "md": "6",
      "lg": "6"
    }
  }, [_c('b-form-group', {
    staticClass: "mb-0",
    attrs: {
      "label": "Per page",
      "label-cols-sm": "6",
      "label-cols-md": "4",
      "label-cols-lg": "3",
      "label-align-sm": "right",
      "label-": "",
      "size": "md",
      "label-for": "perPageSelect"
    }
  }, [_c('b-form-select', {
    attrs: {
      "id": "perPageSelect",
      "size": "md",
      "options": _vm.pageOptions
    },
    model: {
      value: (_vm.perPage),
      callback: function($$v) {
        _vm.perPage = $$v
      },
      expression: "perPage"
    }
  })], 1)], 1), _vm._v(" "), _c('b-col', {
    staticClass: "my-1",
    attrs: {
      "sm": "6",
      "md": "6",
      "lg": "6"
    }
  }, [_c('b-pagination', {
    staticClass: "my-0",
    attrs: {
      "total-rows": _vm.totalRows,
      "per-page": _vm.perPage,
      "align": "fill",
      "size": "md"
    },
    model: {
      value: (_vm.currentPage),
      callback: function($$v) {
        _vm.currentPage = $$v
      },
      expression: "currentPage"
    }
  })], 1)], 1), _vm._v(" "), _c('b-table', {
    staticClass: "table table-striped my-4 w-100 backColor",
    attrs: {
      "stickyColumn": true,
      "show-empty": "",
      "sticky-header": "",
      "small": "",
      "items": _vm.usersGroups,
      "fields": _vm.fields,
      "current-page": _vm.currentPage,
      "per-page": _vm.perPage,
      "filter": _vm.filter,
      "filterIncludedFields": _vm.filterOn,
      "sort-by": _vm.sortBy,
      "sort-desc": _vm.sortDesc,
      "sort-direction": _vm.sortDirection
    },
    on: {
      "update:sortBy": function($event) {
        _vm.sortBy = $event
      },
      "update:sort-by": function($event) {
        _vm.sortBy = $event
      },
      "update:sortDesc": function($event) {
        _vm.sortDesc = $event
      },
      "update:sort-desc": function($event) {
        _vm.sortDesc = $event
      },
      "filtered": _vm.onFiltered
    },
    scopedSlots: _vm._u([{
      key: "cell(expand)",
      fn: function(row) {
        return [_c('b-button', {
          staticClass: "btn-plus",
          attrs: {
            "size": "md"
          },
          on: {
            "click": row.toggleDetails
          }
        }, [_vm._v(_vm._s(row.detailsShowing ? "-" : "+"))])]
      }
    }, {
      key: "cell(actions)",
      fn: function(row) {
        return [_c('b-button', {
          staticClass: "btn btn-info",
          attrs: {
            "size": "md"
          },
          on: {
            "click": function($event) {
              return _vm.info(row.item, row.index, $event.target)
            }
          }
        }, [_c('i', {
          staticClass: "fa fa-phone"
        })]), _vm._v(" "), _c('b-button', {
          staticClass: "btn btn-info",
          attrs: {
            "size": "md"
          },
          on: {
            "click": function($event) {
              return _vm.openSend(row.item, row.index, $event.target)
            }
          }
        }, [_c('i', {
          staticClass: "fas fa-sms"
        })])]
      }
    }, {
      key: "row-details",
      fn: function(row) {
        return [_c('b-card', [_c('b-table', {
          staticClass: "table table-striped my-4 w-100 backColor",
          attrs: {
            "stickyColumn": true,
            "show-empty": "",
            "small": "",
            "sticky-header": "",
            "items": _vm.UserRows[(row.item.phone + row.item.answer_date)],
            "fields": _vm.subFields,
            "filter": _vm.filter,
            "filterIncludedFields": _vm.filterOn
          },
          on: {
            "filtered": _vm.onFiltered
          }
        })], 1)]
      }
    }], null, false, 2196989900)
  }), _vm._v(" "), _c('b-modal', {
    ref: "smsModal",
    attrs: {
      "centered": "",
      "no-close-on-backdrop": true,
      "id": _vm.smsModal.id,
      "title": _vm.smsModal.title,
      "hide-footer": ""
    },
    on: {
      "hide": _vm.resetSmsModal
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.smsModal.number),
      expression: "smsModal.number"
    }],
    attrs: {
      "disabled": ""
    },
    domProps: {
      "value": (_vm.smsModal.number)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.smsModal, "number", $event.target.value)
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.message),
      expression: "message"
    }],
    attrs: {
      "placeholder": "Enter Your Message"
    },
    domProps: {
      "value": (_vm.message)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.message = $event.target.value
      }
    }
  }), _vm._v(" "), _c('button', {
    on: {
      "click": function($event) {
        return _vm.sendMessage(_vm.message, _vm.smsModal.number)
      }
    }
  }, [_vm._v("Send Message")])]), _vm._v(" "), _c('b-modal', {
    ref: "callModal",
    attrs: {
      "no-close-on-backdrop": true,
      "centered": "",
      "hide-footer": "",
      "id": _vm.callModal.id,
      "title": _vm.callModal.title
    },
    on: {
      "hide": _vm.resetInfoModal
    }
  }, [_c('div', {
    staticClass: "vidcall",
    attrs: {
      "id": "videoWebRtc"
    }
  }, [_c('div', [_c('div', {
    attrs: {
      "id": "info"
    }
  }, [_c('div', {
    attrs: {
      "id": "client-name"
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "id": "output-selection",
      "hidden": ""
    }
  }, [_c('label', [_vm._v("Ringtone Devices")]), _vm._v(" "), _c('select', {
    attrs: {
      "id": "ringtone-devices",
      "multiple": ""
    }
  }), _vm._v(" "), _c('label', [_vm._v("Speaker Devices")]), _vm._v(" "), _c('select', {
    attrs: {
      "id": "speaker-devices",
      "multiple": ""
    }
  }), _vm._v(" "), _c('br')])]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "call-controls"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.callModal.number),
      expression: "callModal.number"
    }],
    attrs: {
      "id": "phone-number",
      "type": "text",
      "placeholder": "Enter a phone # or client name",
      "disabled": ""
    },
    domProps: {
      "value": (_vm.callModal.number)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.callModal, "number", $event.target.value)
      }
    }
  }), _vm._v(" "), _c('button', {
    attrs: {
      "id": "button-call"
    }
  }, [_vm._v("Call")]), _vm._v(" "), _c('button', {
    attrs: {
      "id": "button-hangup"
    }
  }, [_vm._v("Hangup")])]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "log",
      "hidden": ""
    }
  })])])])], 1) : _vm._e(), _vm._v(" "), _c('notifications', {
    attrs: {
      "position": "top center"
    }
  })], 1) : _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row justify-content-center"
  }, [_c('div', {
    staticClass: "col-md-10 col-sm-12 login-module"
  }, [_c('div', {
    staticClass: "module-box"
  }, [_c('h1', {
    staticClass: "doctors_title mb-40 text-center"
  }, [_vm._v("Dashboard")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-6"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-8"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "alert alert-success text-center",
    attrs: {
      "role": "alert"
    }
  }, [_vm._v("Sorry, It's Available Only For Doctors.")])])])])])])])])])])])])
},staticRenderFns: []}

/***/ }),

/***/ 626:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "background": "#f5fbff"
    }
  }, [_vm._m(0), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row justify-content-center"
  }, [_c('div', {
    staticClass: "col-md-10 col-sm-12 login-module"
  }, [_c('div', {
    staticClass: "module-box"
  }, [_c('h1', {
    staticClass: "doctors_title mb-40"
  }, [_vm._v("Register")]), _vm._v(" "), (_vm.error) ? _c('div', {
    staticClass: "alert alert-danger"
  }, [_vm._v(_vm._s(_vm.error))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_vm._m(1), _vm._v("\n             \n            "), _c('vue-tel-input', _vm._b({
    staticClass: "form-control col col-9",
    attrs: {
      "placeholder": "Enter Your Phone  * "
    },
    on: {
      "validate": function($event) {
        return _vm.validate($event)
      },
      "country-changed": _vm.countryChanged
    },
    model: {
      value: (_vm.form.phone),
      callback: function($$v) {
        _vm.$set(_vm.form, "phone", $$v)
      },
      expression: "form.phone"
    }
  }, 'vue-tel-input', _vm.bindProps, false)), _vm._v(" "), _c('div', {
    staticClass: "col col-2"
  }), _vm._v(" "), (_vm.showValidation) ? _c('div', {
    staticClass: "showField col-9"
  }, [_c('span', [_vm._v("Phone numbers should be atleast 10 digits")])]) : _vm._e()], 1), _vm._v(" "), _c('form', {
    attrs: {
      "action": "#"
    },
    on: {
      "submit": function($event) {
        $event.preventDefault();
        return _vm.submit($event)
      }
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_vm._m(2), _vm._v("\n               \n              "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.first_name),
      expression: "form.first_name"
    }],
    staticClass: "form-control col col-9",
    attrs: {
      "id": "first_name",
      "placeholder": "Enter Your First Name (optional)"
    },
    domProps: {
      "value": (_vm.form.first_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "first_name", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_vm._m(3), _vm._v("\n               \n              "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.last_name),
      expression: "form.last_name"
    }],
    staticClass: "form-control col col-9",
    attrs: {
      "id": "last_name",
      "placeholder": "Enter Your Last Name (optional)"
    },
    domProps: {
      "value": (_vm.form.last_name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "last_name", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('hr'), _vm._v(" "), (_vm.form.doctor == 0) ? _c('div', {
    staticClass: "row"
  }, [_vm._m(4), _vm._v("\n               \n              "), _c('b-form-spinbutton', {
    staticClass: "form-control col col-2",
    attrs: {
      "id": "demo-sb",
      "min": "1",
      "max": _vm.maxHouseHoldNumber
    },
    model: {
      value: (_vm.form.hous_hold),
      callback: function($$v) {
        _vm.$set(_vm.form, "hous_hold", $$v)
      },
      expression: "form.hous_hold"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "col col-3"
  }, [_c('p', [_vm._v("(Max " + _vm._s(_vm.maxHouseHoldNumber) + " people allowed)")])])], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_vm._m(5), _vm._v("\n               \n              "), _c('div', {
    staticClass: "col col-9"
  }, [_c('datepicker', {
    staticClass: "form-control col col-9",
    class: {
      'is-invalid': _vm.submitted && _vm.$v.form.birthday.$error,
    },
    attrs: {
      "format": "MM/dd/yyyy",
      "disabledDates": _vm.state.disabledDates,
      "minimumView": 'day',
      "maximumView": 'year',
      "initialView": 'year',
      "id": "birthday-datepicker",
      "placeholder": "Date of Birth (MM/DD/YYYY)*",
      "aria-required": "required",
      "typeable": true
    },
    on: {
      "input": function($event) {
        return _vm.setDate(_vm.form.birthday)
      }
    },
    model: {
      value: (_vm.form.birthday),
      callback: function($$v) {
        _vm.$set(_vm.form, "birthday", $$v)
      },
      expression: "form.birthday"
    }
  }, [(_vm.submitted && !_vm.$v.form.birthday.required) ? _c('div', {
    staticClass: "invalid-feedback"
  }, [_vm._v("\n                    Date Of Birth is required\n                  ")]) : _vm._e()]), _vm._v(" "), (_vm.showValidationDate) ? _c('div', {
    staticClass: "col col-2"
  }) : _vm._e(), _vm._v(" "), (_vm.showValidationDate) ? _c('div', {
    staticClass: "showField col-9",
    staticStyle: {
      "margin-top": "0px"
    }
  }, [_c('span', [_vm._v("Date of birth is incorrect")])]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_vm._m(6), _vm._v("\n               \n              "), _c('div', {
    staticClass: "form-group col col-9"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.email),
      expression: "form.email"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.submitted && _vm.$v.form.email.$error
    },
    attrs: {
      "placeholder": "Enter Your Email (optional)",
      "id": "email",
      "name": "email"
    },
    domProps: {
      "value": (_vm.form.email)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "email", $event.target.value)
      }
    }
  }), _vm._v(" "), (_vm.submitted && _vm.$v.form.email.$error) ? _c('div', {
    staticClass: "invalid-feedback"
  }, [(!_vm.$v.form.email.email) ? _c('span', [_vm._v("Email is invalid")]) : _vm._e()]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_vm._m(7), _vm._v("\n               \n              "), _c('div', {
    staticClass: "form-group col col-9"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.password),
      expression: "form.password"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.submitted && _vm.$v.form.password.$error,
    },
    attrs: {
      "placeholder": "Enter any 4 digit PIN *",
      "id": "password",
      "type": "password",
      "name": "password"
    },
    domProps: {
      "value": (_vm.form.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "password", $event.target.value)
      }
    }
  }), _vm._v(" "), (_vm.submitted && _vm.$v.form.password.$error) ? _c('div', {
    staticClass: "invalid-feedback"
  }, [(!_vm.$v.form.password.required) ? _c('span', [_vm._v("PIN is required")]) : _vm._e(), _vm._v(" "), (
    !_vm.$v.form.password.maxLength ||
    !_vm.$v.form.password.minLength ||
    !_vm.$v.form.password.integer
  ) ? _c('span', [_vm._v("PIN must be 4 digit integers only")]) : _vm._e()]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_vm._m(8), _vm._v("\n               \n              "), _c('div', {
    staticClass: "form-group col col-9"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.zipCode),
      expression: "form.zipCode"
    }],
    staticClass: "form-control",
    class: {
      'is-invalid': _vm.submitted && _vm.$v.form.zipCode.$error,
    },
    attrs: {
      "placeholder": "Enter Your ZipCode *",
      "id": "zipCode",
      "type": "text",
      "name": "zipCode"
    },
    domProps: {
      "value": (_vm.form.zipCode)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "zipCode", $event.target.value)
      }
    }
  }), _vm._v(" "), (_vm.submitted && _vm.$v.form.zipCode.$error) ? _c('div', {
    staticClass: "invalid-feedback"
  }, [(!_vm.$v.form.zipCode.required) ? _c('span', [_vm._v("ZipCode is required")]) : _vm._e(), _vm._v(" "), (!_vm.$v.form.zipCode.minLength) ? _c('span') : _vm._e(), _vm._v(" "), (
    !_vm.$v.form.zipCode.maxLength ||
    !_vm.$v.form.zipCode.integer ||
    !_vm.$v.form.zipCode.minLength
  ) ? _c('span', [_vm._v("ZipCode must be 5 digit integers only")]) : _vm._e()]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "form-group row"
  }, [_c('VueLoadingButton', {
    staticClass: "boxed-btn3 large_margin pull-right",
    attrs: {
      "loading": _vm.isLoading,
      "styled": _vm.isStyled
    },
    nativeOn: {
      "click": function($event) {
        return _vm.submit($event)
      }
    }
  }, [_vm._v("Register")])], 1), _vm._v(" "), _c('hr'), _vm._v(" "), _c('p', {
    staticClass: "btn btn-block mt-3 pointers",
    on: {
      "click": _vm.goToLogin
    }
  }, [_vm._v("\n              Already a member? Log in\n            ")])])])])])]), _vm._v(" "), _c('notifications', {
    attrs: {
      "position": "top center"
    }
  }), _vm._v(" "), _c('br'), _vm._v(" "), _c('br')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "service_area"
  }, [_c('div', {
    staticClass: "container p-0"
  }, [_c('div', {
    staticClass: "row no-gutters"
  }, [_c('div', {
    staticClass: "col-xl-4 col-md-4"
  }, [_c('div', {
    staticClass: "single_service"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/ensofia/cv19/website/img/about/pin.png",
      "width": "50"
    }
  }), _vm._v(" "), _c('p', [_vm._v("\n              Register and choose 4 digits PIN .You will use it when you log\n              in Please keep your PIN secure\n            ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-4 col-md-4"
  }, [_c('div', {
    staticClass: "single_service"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/ensofia/cv19/website/img/about/anonymous.png",
      "width": "50"
    }
  }), _vm._v(" "), _c('p', [_vm._v("For your privacy your name and email address are optional")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br')])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-4 col-md-4"
  }, [_c('div', {
    staticClass: "single_service"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/ensofia/cv19/website/img/about/united.png",
      "width": "50"
    }
  }), _vm._v(" "), _c('p', [_vm._v("\n              3 different people may register with the same mobile phone\n              number\n            ")])])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "col col-2",
    attrs: {
      "for": "phone"
    }
  }, [_c('p', [_vm._v("Phone")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "col col-2",
    attrs: {
      "for": "name"
    }
  }, [_c('p', [_vm._v("First Name")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "col col-2",
    attrs: {
      "for": "name"
    }
  }, [_c('p', [_vm._v("Last Name")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "col col-5",
    attrs: {
      "for": "name"
    }
  }, [_c('p', [_vm._v("How many people are in your household?")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "col col-2",
    attrs: {
      "for": "name"
    }
  }, [_c('p', [_vm._v("Birthday")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "col col-2",
    attrs: {
      "for": "name"
    }
  }, [_c('p', [_vm._v("Email")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "col col-2",
    attrs: {
      "for": "name"
    }
  }, [_c('p', [_vm._v("PIN")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "col col-2",
    attrs: {
      "for": "name"
    }
  }, [_c('p', [_vm._v("ZipCode")])])
}]}

/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "liveChat"
    }
  }, [_c('div', {
    staticClass: "live"
  }, [_c('div', {
    staticClass: "sc-launcher",
    class: {
      opened: _vm.isOpen
    },
    style: ({
      backgroundColor: _vm.colors.launcher.bg
    }),
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.isOpen ? _vm.close() : _vm.open()
      }
    }
  }, [_c('img', {
    staticClass: "sc-closed-icon",
    attrs: {
      "src": __webpack_require__(593)
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "sc-open-icon",
    attrs: {
      "src": __webpack_require__(592)
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "sc-chat-window",
    class: {
      opened: _vm.isChatOpenChat, closed: !_vm.isChatOpenChat
    }
  }, [_c('div', {
    staticClass: "sc-header",
    style: ({
      background: _vm.colors.header.bg,
      color: _vm.colors.header.text,
    })
  }, [_c('img', {
    staticClass: "sc-header--img",
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/ensofia/cv19/website/img/CV19.APP2.png"
    },
    on: {
      "click": function($event) {
        return _vm.closeChat()
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "sc-header--title",
    on: {
      "click": function($event) {
        return _vm.closeChat()
      }
    }
  }, [_vm._v("\n          COVID-19 Self-Checker\n        ")]), _vm._v(" "), (!_vm.stopAudio) ? _c('button', {
    staticClass: "sc-header--close-button fas fa-volume-up",
    on: {
      "click": function($event) {
        return _vm.stopSound(true)
      }
    }
  }) : _c('button', {
    staticClass: "sc-header--close-button fas fa-volume-mute",
    on: {
      "click": function($event) {
        return _vm.stopSound(false)
      }
    }
  })]), _vm._v(" "), _c('div', {
    ref: "scrollList",
    staticClass: "sc-message-list"
  }, _vm._l((_vm.messageList), function(message, index) {
    return _c('div', {
      staticClass: "sc-message"
    }, [_c('div', {
      staticClass: "sc-message--content",
      class: {
        sent: message.author === 'me',
          received: message.author !== 'me',
      }
    }, [_c('div', {
      staticClass: "buttonAppear"
    }, [_c('div', {
      staticClass: "sc-message--text"
    }, [_c('p', {
      domProps: {
        "innerHTML": _vm._s(message.data.text)
      }
    })]), _vm._v(" "), (
      message.type == 'boolean' ||
      message.type == 'date' ||
      message.type == 'birthdate'
    ) ? _c('div', {
      staticClass: "sent buttons"
    }, [(message.type == 'birthdate') ? _c('datepicker', {
      ref: "DateTime",
      refInFor: true,
      attrs: {
        "minimumView": 'day',
        "maximumView": 'year',
        "initialView": 'year',
        "inline": true,
        "formate": _vm.MM - _vm.DD - _vm.YYYY,
        "disabledDates": _vm.disabledDatesOfBirthday,
        "placeholder": "Select date please",
        "id": "birthday-datepicker"
      },
      on: {
        "selected": function($event) {
          return _vm.sendMessage($event, 'date', index)
        }
      }
    }) : _vm._e(), _vm._v(" "), (message.type == 'date') ? _c('datepicker', {
      ref: "DateTime",
      refInFor: true,
      attrs: {
        "formate": _vm.MM - _vm.DD - _vm.YYYY,
        "inline": true,
        "disabledDates": _vm.disabledDatess,
        "placeholder": "Select date please",
        "id": "birthday-datepicker"
      },
      on: {
        "selected": function($event) {
          return _vm.sendMessage($event, 'date', index)
        }
      }
    }) : _vm._e(), _vm._v(" "), (message.type == 'boolean') ? _c('button', {
      staticClass: "check",
      attrs: {
        "id": 'btn' + index,
        "name": "buttonRadio",
        "type": "radio"
      },
      on: {
        "click": function($event) {
          _vm.sendMessage((_vm.msgText = 'Yes'), 'boolean', index)
        }
      }
    }, [_vm._v("\n                  Yes\n                ")]) : _vm._e(), _vm._v(" "), (message.type == 'boolean') ? _c('button', {
      staticClass: "check",
      attrs: {
        "id": 'btn' + index,
        "name": "buttonRadio",
        "type": "radio"
      },
      on: {
        "click": function($event) {
          _vm.sendMessage((_vm.msgText = 'No'), 'boolean', index)
        }
      }
    }, [_vm._v("\n                  No\n                ")]) : _vm._e()], 1) : _vm._e()])])])
  }), 0), _vm._v(" "), _c('form', {
    staticClass: "sc-user-input"
  }, [_c('div', {
    staticClass: "sc-user-input--text",
    attrs: {
      "role": "button"
    }
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.msgText),
      expression: "msgText"
    }],
    staticClass: "sc-user-input--text",
    attrs: {
      "id": "output",
      "placeholder": _vm.typeMessagePlaceHolder
    },
    domProps: {
      "value": (_vm.msgText)
    },
    on: {
      "keyup": function($event) {
        return _vm.keyHandler($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.msgText = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "sc-user-input--buttons"
  }, [_c('div', {
    staticClass: "sc-user-input--button"
  }, [(_vm.hideButton == true) ? _c('button', {
    class: (_vm.showMic ? ' fas fa-microphone' : 'send-icon'),
    attrs: {
      "type": "button",
      "id": "switchButton"
    },
    on: {
      "click": function($event) {
        return _vm.sendOrOpenMic()
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.hideButton == false) ? _c('button', {
    staticClass: "button is-primary fas fa-pause-circle",
    attrs: {
      "id": "switchButton",
      "type": "button"
    },
    on: {
      "click": function($event) {
        return _vm.stopStream()
      }
    }
  }) : _vm._e()])])])])])])
},staticRenderFns: []}

/***/ }),

/***/ 628:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.disable) ? _c('b-container', {
    attrs: {
      "fluid": ""
    }
  }, [_c('b-row', [_c('b-col', {
    staticClass: "my-1",
    attrs: {
      "lg": "6",
      "md": "6",
      "sm": "5"
    }
  }, [_c('b-form-group', {
    staticClass: "mb-0",
    attrs: {
      "label": "Select SMS",
      "label-cols-sm": "6",
      "label-cols-md": "4",
      "label-cols-lg": "3",
      "label-align-sm": "right",
      "size": "md",
      "label-for": "filterInput"
    }
  }, [_c('b-input-group', [_c('b-form-select', {
    staticClass: "w-100",
    attrs: {
      "id": "sortBySelect",
      "options": _vm.messages,
      "aria-placeholder": "Select Your Message"
    },
    on: {
      "input": _vm.checkInput
    },
    scopedSlots: _vm._u([{
      key: "first",
      fn: function() {
        return [_c('b-form-select-option', {
          attrs: {
            "value": null,
            "disabled": ""
          }
        }, [_vm._v("-- Please Select Message --")])]
      },
      proxy: true
    }], null, false, 3007070261),
    model: {
      value: (_vm.message),
      callback: function($$v) {
        _vm.message = $$v
      },
      expression: "message"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('b-col', {
    staticClass: "my-1",
    attrs: {
      "lg": "6",
      "md": "6",
      "sm": "5"
    }
  }, [_c('b-form-group', {
    staticClass: "mb-0",
    attrs: {
      "label": "Enter SMS",
      "label-cols-sm": "6",
      "label-cols-md": "4",
      "label-cols-lg": "3",
      "label-align-sm": "right",
      "size": "md",
      "label-for": "filterInput"
    }
  }, [_c('b-input-group', {
    attrs: {
      "size": "md"
    }
  }, [_c('b-form-input', {
    staticClass: "w-75",
    attrs: {
      "lg": "1",
      "type": "search",
      "id": "filterInput",
      "placeholder": "Type to Search"
    },
    on: {
      "input": function($event) {
        this.errorMessage = false
      }
    },
    model: {
      value: (_vm.message),
      callback: function($$v) {
        _vm.message = $$v
      },
      expression: "message"
    }
  }), _vm._v(" "), _c('b-input-group-append', {
    staticClass: "w-25"
  })], 1), _vm._v(" "), (_vm.errorMessage) ? _c('div', {
    staticClass: "error"
  }, [_c('span', [_vm._v("Please Enter Or Select Message")]), _vm._v(" "), _c('br')]) : _vm._e()], 1)], 1)], 1), _vm._v(" "), _c('b-row', [(_vm.showOptions) ? _c('b-col', {
    staticClass: "my-1",
    attrs: {
      "lg": "6",
      "md": "6",
      "sm": "5"
    }
  }, [_c('b-form-group', {
    staticClass: "mb-0 ulSelect",
    attrs: {
      "label": "Select Type",
      "label-cols-sm": "6",
      "label-cols-md": "4",
      "label-cols-lg": "3",
      "label-align-sm": "right",
      "size": "md",
      "label-for": "filterInput"
    }
  }, [_c('ul', [_c('li', {
    on: {
      "click": _vm.selectFile
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.picked),
      expression: "picked"
    }],
    attrs: {
      "type": "radio",
      "id": "f-option",
      "name": "selector"
    },
    domProps: {
      "checked": _vm._q(_vm.picked, null)
    },
    on: {
      "click": _vm.selectFile,
      "change": function($event) {
        _vm.picked = null
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "f-option"
    },
    on: {
      "click": _vm.selectFile
    }
  }, [_vm._v("Upload File")]), _vm._v(" "), _c('div', {
    staticClass: "check"
  }, [_c('div', {
    staticClass: "inside"
  })])]), _vm._v(" "), _c('li', {
    on: {
      "click": _vm.selectNumber
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.picked),
      expression: "picked"
    }],
    attrs: {
      "type": "radio",
      "id": "s-option",
      "name": "selector",
      "value": "Enter Number"
    },
    domProps: {
      "checked": _vm._q(_vm.picked, "Enter Number")
    },
    on: {
      "click": _vm.selectNumber,
      "change": function($event) {
        _vm.picked = "Enter Number"
      }
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": "s-option"
    },
    on: {
      "click": _vm.selectNumber
    }
  }, [_vm._v("Enter Number")]), _vm._v(" "), _c('div', {
    staticClass: "check"
  }, [_c('div', {
    staticClass: "inside"
  })])])])])], 1) : _vm._e()], 1), _vm._v(" "), (_vm.openNumber == true || _vm.openFile == true) ? _c('b-row', [_c('b-col', {
    staticClass: "my-1",
    attrs: {
      "lg": "6",
      "md": "6",
      "sm": "5"
    }
  }, [_c('b-form-group', {
    staticClass: "mb-0",
    attrs: {
      "label": _vm.openNumber == true ? 'Enter number' : 'Upload File',
      "label-cols-sm": "6",
      "label-cols-md": "4",
      "label-cols-lg": "3",
      "label-align-sm": "right",
      "size": "md",
      "label-for": "filterInput"
    }
  }, [(_vm.openNumber) ? _c('vue-tel-input', _vm._b({
    staticClass: "form-control w-100",
    attrs: {
      "placeholder": "Enter Your Phone  * "
    },
    on: {
      "validate": function($event) {
        return _vm.validate($event)
      },
      "country-changed": _vm.countryChanged
    },
    model: {
      value: (_vm.number),
      callback: function($$v) {
        _vm.number = $$v
      },
      expression: "number"
    }
  }, 'vue-tel-input', _vm.bindProps, false)) : _vm._e(), _vm._v(" "), (_vm.showValidation) ? _c('div', {
    staticClass: "error"
  }, [_c('span', [_vm._v("Phone numbers should be atleast 10 digits")]), _vm._v(" "), _c('br')]) : _vm._e(), _vm._v(" "), (_vm.openFile) ? _c('b-form-file', {
    ref: "file",
    staticClass: "w-100",
    on: {
      "input": _vm.fileName
    },
    model: {
      value: (_vm.file),
      callback: function($$v) {
        _vm.file = $$v
      },
      expression: "file"
    }
  }) : _vm._e()], 1)], 1), _vm._v(" "), (_vm.number != null && _vm.message != null) ? _c('b-col', {
    staticClass: "my-1",
    attrs: {
      "lg": "6",
      "md": "6",
      "sm": "5"
    }
  }, [_c('b-input-group-append', {
    attrs: {
      "label-cols-sm": "5",
      "label-cols-md": "6",
      "label-cols-lg": "6"
    }
  }, [_c('b-button', {
    staticClass: "btn btn-info newStyle",
    on: {
      "click": function($event) {
        return _vm.sendMessage(_vm.message, _vm.number)
      }
    }
  }, [_vm._v("Send Message")])], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.displayFile && _vm.message != null) ? _c('b-col', {
    staticClass: "my-1",
    attrs: {
      "lg": "6",
      "md": "6",
      "sm": "5"
    }
  }, [_c('b-input-group-append', {
    attrs: {
      "label-cols-sm": "5",
      "label-cols-md": "6",
      "label-cols-lg": "6"
    }
  }, [_c('b-button', {
    staticClass: "btn btn-info newStyle",
    on: {
      "click": _vm.sendFile
    }
  }, [_vm._v("Send File")])], 1)], 1) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _c('br'), _vm._v(" "), _c('notifications', {
    attrs: {
      "position": "top center"
    }
  })], 1) : _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row justify-content-center"
  }, [_c('div', {
    staticClass: "col-md-10 col-sm-12 login-module"
  }, [_c('div', {
    staticClass: "module-box"
  }, [_c('h1', {
    staticClass: "doctors_title mb-40 text-center"
  }, [_vm._v("Logs")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-6"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-8"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "alert alert-success text-center",
    attrs: {
      "role": "alert"
    }
  }, [_vm._v("\n                        Sorry, It's Available Only For Doctors.\n                      ")])])])])])])])])])])])])
},staticRenderFns: []}

/***/ }),

/***/ 629:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('router-view')
},staticRenderFns: []}

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(504),
  /* template */
  __webpack_require__(651),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 630:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    attrs: {
      "id": "update-clinic"
    }
  }, [_c('div', {
    staticClass: "row justify-content-center"
  }, [_c('div', {
    staticClass: "col-md-8"
  }, [_c('div', {
    staticClass: "module-box"
  }, [_c('h1', {
    staticClass: "mt-0 mb-5"
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'AllClinic'
      }
    }
  }, [_c('span', {
    staticClass: "material-icons"
  }, [_vm._v("keyboard_backspace")])]), _vm._v(" Update Clinic")], 1), _vm._v(" "), _c('notification', {
    attrs: {
      "notifications": _vm.notifications
    }
  }), _vm._v(" "), _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        return _vm.editClinic($event)
      }
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "name": "clinic_name"
    }
  }, [_vm._v("Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.clinic.name),
      expression: "clinic.name"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "clinic_name"
    },
    domProps: {
      "value": (_vm.clinic.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.clinic, "name", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "name": "clinic_other_info"
    }
  }, [_vm._v("Other Info")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.clinic.other_info),
      expression: "clinic.other_info"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "clinic_other_info",
      "required": ""
    },
    domProps: {
      "value": (_vm.clinic.other_info)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.clinic, "other_info", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "name": "clinic_logo"
    }
  }, [_vm._v("Thumbnail")]), _vm._v(" "), (!_vm.image) ? _c('div', [_vm._v("\n            Select an image\n                    "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "file"
    },
    on: {
      "change": _vm.onFileChange
    }
  })]) : _c('div', [_c('img', {
    attrs: {
      "src": _vm.image
    }
  }), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.removeImage
    }
  }, [_vm._v("Remove image")])])]), _vm._v(" "), _vm._m(0)])], 1)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group"
  }, [_c('button', {
    staticClass: "btn btn-primary"
  }, [_vm._v("Update")])])
}]}

/***/ }),

/***/ 631:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    attrs: {
      "id": "create-clinic"
    }
  }, [_c('div', {
    staticClass: "row justify-content-center"
  }, [_c('div', {
    staticClass: "col-md-8"
  }, [_c('div', {
    staticClass: "module-box"
  }, [_c('h1', {
    staticClass: "mt-0 mb-5"
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'AllClinic'
      }
    }
  }, [_c('span', {
    staticClass: "material-icons"
  }, [_vm._v("keyboard_backspace")])]), _vm._v(" Create Clinic")], 1), _vm._v(" "), _c('notification', {
    attrs: {
      "notifications": _vm.notifications
    }
  }), _vm._v(" "), _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        return _vm.addClinic($event)
      }
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "name": "clinic_name"
    }
  }, [_vm._v("Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.clinic.name),
      expression: "clinic.name"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "clinic_name",
      "required": ""
    },
    domProps: {
      "value": (_vm.clinic.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.clinic, "name", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "name": "clinic_other_info"
    }
  }, [_vm._v("Other Info")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.clinic.other_info),
      expression: "clinic.other_info"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "clinic_other_info",
      "required": ""
    },
    domProps: {
      "value": (_vm.clinic.other_info)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.clinic, "other_info", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "name": "clinic_logo"
    }
  }, [_vm._v("Thumbnail")]), _vm._v(" "), (!_vm.image) ? _c('div', [_vm._v("\n            Select an image\n                    "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "file"
    },
    on: {
      "change": _vm.onFileChange
    }
  })]) : _c('div', [_c('img', {
    attrs: {
      "src": _vm.image
    }
  }), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.removeImage
    }
  }, [_vm._v("Remove image")])])]), _vm._v(" "), _vm._m(0)])], 1)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group"
  }, [_c('button', {
    staticClass: "btn btn-primary"
  }, [_vm._v("Create")])])
}]}

/***/ }),

/***/ 632:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "header-area"
  }, [_c('div', {
    staticClass: "header-top_area"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "col-xl-7 col-md-7"
  }, [_c('div', {
    staticClass: "short_contact_list"
  }, [_c('ul', [_vm._m(1), _vm._v(" "), _c('li', [(_vm.$store.state.showHotline) ? _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('strong', {
    staticClass: "share"
  }, [_vm._v("Hotline")]), _vm._v(" "), _c('i', {
    staticClass: "fa fa-phone"
  }), _vm._v(" "), _c('strong', [_vm._v("(408) 413-4555")])]) : _vm._e()]), _vm._v(" "), _vm._m(2)])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "main-header-area",
    attrs: {
      "id": "sticky-header"
    }
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row align-items-center"
  }, [(!_vm.$store.state.showHotline) ? _c('div', {
    staticClass: "col-md-2"
  }, [_vm._m(3)]) : _vm._e(), _vm._v(" "), _c('div', {
    class: _vm.$store.state.showHotline ? 'col-md-4' : 'col-md-2'
  }, [_vm._m(4)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-8"
  }, [_c('div', {
    staticClass: "main-menu d-none d-lg-block"
  }, [_c('nav', [_c('ul', {
    attrs: {
      "id": "navigation"
    }
  }, [_c('li', [_c('router-link', {
    staticClass: "p-3 text-dark",
    attrs: {
      "to": "/clientPortal"
    }
  }, [_vm._v("Client Portal")])], 1), _vm._v(" "), _c('li', [_c('router-link', {
    staticClass: "p-3 text-dark",
    attrs: {
      "to": "/doctor_register"
    }
  }, [_vm._v("Doctor Register")])], 1), _vm._v(" "), _vm._m(5), _vm._v(" "), (_vm.$store.state.isLogin) ? _c('li', {
    staticClass: "rightFloat"
  }, [_c('router-link', {
    staticClass: "btn btn-info newStyle",
    attrs: {
      "to": "/"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.signOut($event)
      }
    }
  }, [_vm._v("Logout")])], 1) : _vm._e(), _vm._v(" "), (!_vm.$store.state.isLogin) ? _c('li', {
    staticClass: "rightFloat"
  }, [_c('a', {
    staticClass: "btn btn-info newStyle",
    attrs: {
      "href": "/login"
    }
  }, [_vm._v("Login")])]) : _vm._e(), _vm._v(" "), (!_vm.$store.state.isLogin) ? _c('li', {
    staticClass: "rightFloat"
  }, [_c('a', {
    staticClass: "btn btn-info newStyle",
    attrs: {
      "href": "/disclamer"
    }
  }, [_vm._v("Register")])]) : _vm._e()])])])]), _vm._v(" "), _vm._m(6)])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-xl-5 col-md-5"
  }, [_c('div', {
    staticClass: "social_media_links"
  }, [_c('span', {
    staticClass: "share"
  }, [_c('strong', [_vm._v("Share with your family and friends  ")])]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "http://www.linkedin.com/shareArticle?mini=true&url=https://cv19.app/&src=sdkpreparse",
      "target": "popup",
      "onclick": "window.open('http://www.linkedin.com/shareArticle?mini=true&url=https://cv19.app/&src=sdkpreparse','popup','width=600,height=600'); return false;"
    }
  }, [_c('i', {
    staticClass: "fab fa-linkedin-in"
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "https://www.facebook.com/sharer/sharer.php?u=https://cv19.app/&src=sdkpreparse",
      "target": "popup",
      "onclick": "window.open('https://www.facebook.com/sharer/sharer.php?u=https://cv19.app/&src=sdkpreparse','popup','width=600,height=600'); return false;"
    }
  }, [_c('i', {
    staticClass: "fab fa-facebook"
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "http://twitter.com/share?url=https://cv19.app/&src=sdkpreparse",
      "target": "popup",
      "onclick": "window.open('http://twitter.com/share?url=https://cv19.app/&src=sdkpreparse','popup','width=600,height=600,top=200,left=0'); return false;"
    }
  }, [_c('i', {
    staticClass: "fab fa-twitter"
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "mailto:?subject=I wanted you to see this site&body=Check out this site https://cv19.app/&src=sdkpreparse",
      "title": "Share by Email"
    }
  }, [_c('i', {
    staticClass: "fa fa-envelope"
  })])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('a', {
    staticClass: "share",
    attrs: {
      "href": "mailto:info@ensofia.com?body=Thank you for getting in touch! "
    }
  }, [_c('strong', {
    staticClass: "share"
  }, [_c('i', {
    staticClass: "fa fa-envelope"
  }), _vm._v(" info@ensofia.com\n                    ")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('div', {
    staticClass: "share",
    attrs: {
      "id": "traducoes"
    }
  }, [_c('div', {
    attrs: {
      "id": "google_translate_element"
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "logo"
  }, [_c('a', {
    attrs: {
      "href": "/"
    }
  }, [_c('img', {
    staticClass: "logoImage",
    staticStyle: {
      "margin-left": "-5px"
    },
    attrs: {
      "src": __webpack_require__(591),
      "alt": ""
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "logo"
  }, [_c('a', {
    attrs: {
      "href": "/"
    }
  }, [_c('img', {
    staticClass: "logoImage",
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/ensofia/cv19/website/img/CV19.APP2.png",
      "alt": ""
    }
  })])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', [_c('a', {
    staticClass: "p-3 text-dark",
    attrs: {
      "href": "https://ensofia.com/contact.html",
      "target": "_blank"
    }
  }, [_vm._v("Contact Us")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-12"
  }, [_c('div', {
    staticClass: "mobile_menu d-block d-lg-none"
  })])
}]}

/***/ }),

/***/ 633:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('button', {
    on: {
      "click": _vm.saveMySurvey
    }
  }, [_vm._v("Save")]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "surveyCreatorContainer"
    }
  })])
},staticRenderFns: []}

/***/ }),

/***/ 634:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "create-form"
    }
  }, [_c('h1', [_vm._v("Create Form")]), _vm._v(" "), _c('p', [_c('router-link', {
    attrs: {
      "to": {
        name: 'AllForm',
        params: {
          id: this.$route.params.clinic_id
        }
      }
    }
  }, [_vm._v("Return to forms")])], 1), _vm._v(" "), _c('notification', {
    attrs: {
      "notifications": _vm.notifications
    }
  }), _vm._v(" "), _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        return _vm.addForm($event)
      }
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "name": "form_name"
    }
  }, [_vm._v("Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.name_en),
      expression: "form.name_en"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "form_name",
      "required": ""
    },
    domProps: {
      "value": (_vm.form.name_en)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "name_en", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "name": "form_description_en"
    }
  }, [_vm._v("Description")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.description_en),
      expression: "form.description_en"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "form_description_en",
      "required": ""
    },
    domProps: {
      "value": (_vm.form.description_en)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "description_en", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "name": "form_category"
    }
  }, [_vm._v("Category")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.category),
      expression: "form.category"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "form_category",
      "required": ""
    },
    domProps: {
      "value": (_vm.form.category)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "category", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "name": "form_form_type"
    }
  }, [_vm._v("Type")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.form_type),
      expression: "form.form_type"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "form_form_type",
      "required": ""
    },
    domProps: {
      "value": (_vm.form.form_type)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "form_type", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "name": "form_design_path"
    }
  }, [_vm._v("Design Path")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.design_path),
      expression: "form.design_path"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "form_design_path",
      "required": ""
    },
    domProps: {
      "value": (_vm.form.design_path)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "design_path", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "name": "form_image_url"
    }
  }, [_vm._v("Image")]), _vm._v(" "), (!_vm.image) ? _c('div', [_vm._v("\n            Select an image\n                    "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "file"
    },
    on: {
      "change": _vm.onFileChange
    }
  })]) : _c('div', [_c('img', {
    attrs: {
      "src": _vm.image
    }
  }), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.removeImage
    }
  }, [_vm._v("Remove image")])])]), _vm._v(" "), _vm._m(0)])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group"
  }, [_c('button', {
    staticClass: "btn btn-primary"
  }, [_vm._v("Create")])])
}]}

/***/ }),

/***/ 635:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "background": "#f5fbff"
    }
  }, [_vm._m(0), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row justify-content-center"
  }, [_c('div', {
    staticClass: "col-md-6 col-sm-12 login-module"
  }, [_c('div', {
    staticClass: "module-box"
  }, [_c('h1', {
    staticClass: "doctors_title mb-55"
  }, [_vm._v("Login")]), _vm._v(" "), (_vm.error) ? _c('div', {
    staticClass: "alert alert-danger"
  }, [_vm._v(_vm._s(_vm.error))]) : _vm._e(), _vm._v(" "), _c('form', {
    attrs: {
      "action": "#"
    },
    on: {
      "submit": function($event) {
        $event.preventDefault();
        return _vm.submit($event)
      }
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "row"
  }, [_vm._m(1), _vm._v(" "), _c('vue-tel-input', _vm._b({
    staticClass: "form-control col col-md-9",
    on: {
      "validate": function($event) {
        return _vm.validate($event)
      },
      "country-changed": _vm.countryChanged
    },
    model: {
      value: (_vm.form.phone),
      callback: function($$v) {
        _vm.$set(_vm.form, "phone", $$v)
      },
      expression: "form.phone"
    }
  }, 'vue-tel-input', _vm.bindProps, false)), _vm._v(" "), _c('div', {
    staticClass: "col col-2"
  }), _vm._v(" "), (_vm.showValidation) ? _c('div', {
    staticClass: "showField col-9"
  }, [_c('span', [_vm._v("Phone numbers should be atleast 10 digits")])]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "recaptcha-container"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "row"
  }, [_vm._m(2), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.pin),
      expression: "form.pin"
    }],
    staticClass: "form-control col col-md-9",
    class: {
      'is-invalid': _vm.submitted && _vm.$v.form.pin.$error,
    },
    attrs: {
      "id": "password",
      "type": "password",
      "name": "password"
    },
    domProps: {
      "value": (_vm.form.pin)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "pin", $event.target.value)
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "col-md-2"
  }), _vm._v(" "), (_vm.submitted && _vm.$v.form.pin.$error) ? _c('div', {
    staticClass: "invalid-feedback col-md-9"
  }, [(!_vm.$v.form.pin.required) ? _c('span', [_vm._v("PIN is required")]) : _vm._e(), _vm._v(" "), (
    !_vm.$v.form.pin.maxLength ||
    !_vm.$v.form.pin.minLength ||
    !_vm.$v.form.pin.integer
  ) ? _c('span', [_vm._v("PIN must be 4 digit integers")]) : _vm._e()]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('VueLoadingButton', {
    staticClass: "boxed-btn3 large_margin",
    attrs: {
      "loading": _vm.isLoading,
      "styled": _vm.isStyled
    },
    nativeOn: {
      "click": function($event) {
        return _vm.submit($event)
      }
    }
  }, [_vm._v("Login")])], 1)]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), (_vm.userexist) ? _c('div', [_c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "row"
  }, [_vm._m(3), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.otp),
      expression: "form.otp"
    }],
    staticClass: "form-control col col-9",
    attrs: {
      "id": "password",
      "type": "password",
      "name": "password",
      "placeholder": "Code"
    },
    domProps: {
      "value": (_vm.form.otp)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "otp", $event.target.value)
      }
    }
  })]), _vm._v(" "), (!_vm.haveCode) ? _c('VueLoadingButton', {
    staticClass: "boxed-btn3 large_margin",
    attrs: {
      "loading": _vm.isLoadingVerify,
      "styled": _vm.isStyled
    },
    nativeOn: {
      "click": function($event) {
        return _vm.verifyOtp($event)
      }
    }
  }, [_vm._v("Verify")]) : _vm._e(), _vm._v(" "), (_vm.haveCode) ? _c('VueLoadingButton', {
    staticClass: "boxed-btn3 large_margin",
    attrs: {
      "loading": _vm.isLoadingVerify,
      "styled": _vm.isStyled
    },
    nativeOn: {
      "click": function($event) {
        return _vm.login2($event)
      }
    }
  }, [_vm._v("Verify")]) : _vm._e()], 1)]) : _vm._e()])])])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('notifications', {
    attrs: {
      "position": "top center"
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "service_area"
  }, [_c('div', {
    staticClass: "container p-0"
  }, [_c('div', {
    staticClass: "row no-gutters"
  }, [_c('div', {
    staticClass: "col-xl-4 col-md-4"
  }, [_c('div', {
    staticClass: "single_service"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/ensofia/cv19/website/img/about/phone.png",
      "width": "50"
    }
  }), _vm._v(" "), _c('p', [_vm._v("\n              Log in to retrieve your personalized report, verification code\n              will received via mobile, keep it secure\n            ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-4 col-md-4"
  }, [_c('div', {
    staticClass: "single_service"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/ensofia/cv19/website/img/about/survay.png",
      "width": "50"
    }
  }), _vm._v(" "), _c('p', [_vm._v("Complete the screening questionnaire")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('br')])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-4 col-md-4"
  }, [_c('div', {
    staticClass: "single_service"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/ensofia/cv19/website/img/about/report.png",
      "width": "50"
    }
  }), _vm._v(" "), _c('p', [_vm._v("\n              The personalized report will include assessment against the CDC\n              Guidelines and relevant CDC information\n            ")])])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "col col-2",
    attrs: {
      "for": "phone"
    }
  }, [_c('p', [_vm._v("Phone")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "col col-2",
    attrs: {
      "for": "password"
    }
  }, [_c('p', [_vm._v("Pin")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "col col-2",
    attrs: {
      "for": "password"
    }
  }, [_c('p', [_vm._v("Code")])])
}]}

/***/ }),

/***/ 636:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "background": "#3498db"
    }
  }, [_c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "large_padding",
    staticStyle: {
      "background": "#ffffffdd"
    }
  }, [_c('h1', [_vm._v("This screening is for you, if you:")]), _vm._v(" "), _c('br'), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('router-link', {
    staticClass: "boxed-btn3 agree",
    attrs: {
      "to": "/register"
    }
  }, [_vm._v(">> I agree")])], 1)]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br')])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row justify-content-center"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/ensofia/cv19/website/img/about/disclamer.png"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('img', {
    attrs: {
      "width": "100",
      "height": "100",
      "src": "https://cdn.jsdelivr.net/gh/ensofia/cv19/website/img/about/emergency.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "col col-9"
  }, [_c('p', [_c('strong', [_vm._v("Do not need immediate medical attention")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "color": "#787878"
    }
  }, [_c('span', [_vm._v("This web site is NOT diagnostic or medical site. You should NOT\n              use this website or the personalized report for any medical\n              advice. It is NOT intended for people experiencing severe\n              symptoms. If you have medical questions, contact your doctor. If\n              you have an emergency call 911.")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('img', {
    attrs: {
      "width": "100",
      "height": "100",
      "src": "https://cdn.jsdelivr.net/gh/ensofia/cv19/website/img/about/age.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "col col-9"
  }, [_c('p', [_c('strong', [_vm._v("Are")]), _vm._v(" "), _c('strong', [_vm._v("18 years or older")])]), _vm._v(" "), _c('p', [_vm._v("\n            Please use this site if you are 18 year or older, 3 different\n            people may register with the same mobile phone number, each with a\n            different PIN\n          ")])])])
}]}

/***/ }),

/***/ 637:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    attrs: {
      "id": "view"
    }
  }, [_c('div', {
    staticClass: "row justify-content-center"
  }, [_c('div', {
    staticClass: "col-md-8"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "module-box"
  }, [_c('h1', {
    staticClass: "text-center"
  }, [_vm._v("COVID19")]), _vm._v(" "), _c('div', [_c('b-table', {
    attrs: {
      "hover": "",
      "sort-by": _vm.sortBy,
      "sort-desc": _vm.sortDesc,
      "items": _vm.items,
      "fields": _vm.fields,
      "current-page": _vm.currentPage,
      "per-page": _vm.perPage,
      "striped": "",
      "responsive": "sm"
    },
    on: {
      "update:sortBy": function($event) {
        _vm.sortBy = $event
      },
      "update:sort-by": function($event) {
        _vm.sortBy = $event
      },
      "update:sortDesc": function($event) {
        _vm.sortDesc = $event
      },
      "update:sort-desc": function($event) {
        _vm.sortDesc = $event
      }
    },
    scopedSlots: _vm._u([{
      key: "cell(download)",
      fn: function(row) {
        return [_c('VueLoadingButton', {
          staticClass: "btn btn-primary",
          attrs: {
            "size": "sm",
            "loading": _vm.isLoading && _vm.indexClicked === row.index,
            "disabled": _vm.isloading && _vm.indexClicked === _vm.index,
            "styled": _vm.isStyled
          },
          nativeOn: {
            "click": function($event) {
              return _vm.savePDF(row.item)
            }
          }
        }, [_vm._v("Download")])]
      }
    }, {
      key: "cell(repeat_in:)",
      fn: function(row) {
        return [(row.item.retake == '1') ? _c('b-button', {
          staticClass: "btn btn-primary",
          attrs: {
            "size": "sm"
          },
          on: {
            "click": function($event) {
              return _vm.answerAgain(row.item)
            }
          }
        }, [_vm._v("Now")]) : _vm._e(), _vm._v(" "), (row.item.retake != '1') ? _c('p', [_vm._v(_vm._s(row.item.retake))]) : _vm._e()]
      }
    }])
  }), _vm._v(" "), _c('b-row', [_c('b-col', {
    staticClass: "my-1",
    attrs: {
      "sm": "5",
      "md": "6"
    }
  }), _vm._v(" "), _c('b-col', {
    staticClass: "my-1",
    attrs: {
      "sm": "7",
      "md": "6"
    }
  }, [_c('b-pagination', {
    staticClass: "my-0",
    attrs: {
      "total-rows": _vm.totalRows,
      "per-page": _vm.perPage,
      "align": "fill",
      "size": "md"
    },
    model: {
      value: (_vm.currentPage),
      callback: function($$v) {
        _vm.currentPage = $$v
      },
      expression: "currentPage"
    }
  })], 1)], 1)], 1)])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "alert alert-info",
    attrs: {
      "role": "alert"
    }
  }, [_c('p', [_vm._v("\n          This website / application is made by team EnSofia. It is our humble\n          effort to contribute and help the public to aid the tremendous\n          efforts and steps taken by many organizations to flatten the curve.\n        ")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h4', {
    staticClass: "alert-heading"
  }, [_vm._v("What it is?")]), _vm._v(" "), _c('p', [_vm._v("\n          This website is built for awareness and sharing information\n          published by the US – Centers for Disease Control and Prevention\n          CDC.gov\n        ")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('h4', {
    staticClass: "alert-heading"
  }, [_vm._v("What it is NOT?")]), _vm._v(" "), _c('p', [_vm._v("\n          This is not diagnostic or medical site. You should not use this\n          website or its communications for any medical advice. If you have\n          medical questions, contact your doctor. If you have an emergency\n          call 911.\n        ")])])
}]}

/***/ }),

/***/ 638:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', {
    staticClass: "footer-container"
  }, [_c('div', {
    staticStyle: {
      "background": "#fff"
    }
  }, [_c('div', {
    staticClass: "expert_doctors_area"
  }, [_c('div', {
    staticClass: "container"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xl-12"
  }, [_c('div', {
    staticClass: "expert_active owl-carousel"
  }, [_c('div', {
    staticClass: "single_expert"
  }, [_c('a', {
    staticClass: "popup-with-form amira_margin2",
    attrs: {
      "href": "#test-form",
      "onclick": "document.getElementById('_h3').innerHTML = document.getElementById('_k1').innerHTML;document.getElementById('_p').innerHTML = document.getElementById('_t1').innerHTML;"
    }
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "experts_name text-center"
  }, [_c('h3', {
    staticClass: "amira_margin"
  }, [_vm._v(_vm._s(_vm.advices[0].key))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('p', {
    staticClass: "amira_margin"
  }, [_vm._v(_vm._s(_vm.advices[0].short))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "col-xl-3 col-lg-3 d-none d-lg-block"
  }, [_c('div', {
    staticClass: "Appointment"
  }, [_c('div', {
    staticClass: "book_btn d-none d-lg-block"
  }, [_c('p', {
    staticClass: "invisible",
    attrs: {
      "id": "_k1"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.advices[0].key) + "\n                          ")]), _vm._v(" "), _c('p', {
    staticClass: "invisible",
    attrs: {
      "id": "_t1"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.advices[0].text)
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.advices[0].text) + "\n                          ")])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "single_expert"
  }, [_c('a', {
    staticClass: "popup-with-form amira_margin2",
    attrs: {
      "href": "#test-form",
      "onclick": "document.getElementById('_h3').innerHTML = document.getElementById('_k2').innerHTML;document.getElementById('_p').innerHTML = document.getElementById('_t2').innerHTML;"
    }
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "experts_name text-center"
  }, [_c('h3', {
    staticClass: "amira_margin"
  }, [_vm._v(_vm._s(_vm.advices[1].key))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('p', {
    staticClass: "amira_margin"
  }, [_vm._v(_vm._s(_vm.advices[1].short))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "col-xl-3 col-lg-3 d-none d-lg-block"
  }, [_c('div', {
    staticClass: "Appointment"
  }, [_c('div', {
    staticClass: "book_btn d-none d-lg-block"
  }, [_c('p', {
    staticClass: "invisible",
    attrs: {
      "id": "_k2"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.advices[1].key) + "\n                          ")]), _vm._v(" "), _c('p', {
    staticClass: "invisible",
    attrs: {
      "id": "_t2"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.advices[1].text)
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.advices[1].text) + "\n                          ")])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "single_expert"
  }, [_c('a', {
    staticClass: "popup-with-form amira_margin2",
    attrs: {
      "href": "#test-form",
      "onclick": "document.getElementById('_h3').innerHTML = document.getElementById('_k3').innerHTML;document.getElementById('_p').innerHTML = document.getElementById('_t3').innerHTML;"
    }
  }, [_vm._m(3), _vm._v(" "), _c('div', {
    staticClass: "experts_name text-center"
  }, [_c('h3', {
    staticClass: "amira_margin"
  }, [_vm._v(_vm._s(_vm.advices[2].key))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('p', {
    staticClass: "amira_margin"
  }, [_vm._v(_vm._s(_vm.advices[2].short))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "col-xl-3 col-lg-3 d-none d-lg-block"
  }, [_c('div', {
    staticClass: "Appointment"
  }, [_c('div', {
    staticClass: "book_btn d-none d-lg-block"
  }, [_c('p', {
    staticClass: "invisible",
    attrs: {
      "id": "_k3"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.advices[2].key) + "\n                          ")]), _vm._v(" "), _c('p', {
    staticClass: "invisible",
    attrs: {
      "id": "_t3"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.advices[2].text)
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.advices[2].text) + "\n                          ")])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "single_expert"
  }, [_c('a', {
    staticClass: "popup-with-form amira_margin2",
    attrs: {
      "href": "#test-form",
      "onclick": "document.getElementById('_h3').innerHTML = document.getElementById('_k4').innerHTML;document.getElementById('_p').innerHTML = document.getElementById('_t4').innerHTML;"
    }
  }, [_vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "experts_name text-center"
  }, [_c('h3', {
    staticClass: "amira_margin"
  }, [_vm._v(_vm._s(_vm.advices[3].key))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('p', {
    staticClass: "amira_margin"
  }, [_vm._v(_vm._s(_vm.advices[3].short))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "col-xl-3 col-lg-3 d-none d-lg-block"
  }, [_c('div', {
    staticClass: "Appointment"
  }, [_c('div', {
    staticClass: "book_btn d-none d-lg-block"
  }, [_c('p', {
    staticClass: "invisible",
    attrs: {
      "id": "_k4"
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.advices[3].key) + "\n                          ")]), _vm._v(" "), _c('p', {
    staticClass: "invisible",
    attrs: {
      "id": "_t4"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.advices[3].text)
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.advices[3].text) + "\n                          ")])])])])])])])])])])])])]), _vm._v(" "), _c('chatbot'), _vm._v(" "), _c('div', {
    staticStyle: {
      "background": "#000"
    }
  }, [_c('div', {
    staticClass: "copy-right_text"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "footer_border"
  }), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xl-12"
  }, [_c('br'), _vm._v(" "), _c('p', {
    staticClass: "copy_right text-center"
  }, [_vm._v("\n              Copyright © @2020 All rights reserved | Ensofia Team\n              "), _c('span', {
    staticStyle: {
      "font-size": "smaller"
    }
  }, [_vm._v("release 5.05")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('font', {
    attrs: {
      "color": "#000"
    }
  }, [_vm._v("\n                This template is made with by\n                "), _c('a', {
    staticStyle: {
      "color": "black"
    },
    attrs: {
      "href": "https://colorlib.com",
      "target": "_blank"
    }
  }, [_vm._v("Colorlib")])])], 1)])])])])]), _vm._v(" "), _vm._m(5)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xl-12"
  }, [_c('div', {
    staticClass: "doctors_title mb-55"
  }, [_c('h3', [_vm._v("A Word for You")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "expert_thumb"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/ensofia/cv19/website/img/about/patient.jpg",
      "alt": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "expert_thumb"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/ensofia/cv19/website/img/about/clinic.png",
      "alt": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "expert_thumb"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/ensofia/cv19/website/img/about/doctor.png",
      "alt": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "expert_thumb"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/ensofia/cv19/website/img/about/partner.jpg",
      "alt": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    staticClass: "white-popup-block mfp-hide",
    attrs: {
      "id": "test-form"
    }
  }, [_c('div', {
    staticClass: "popup_box"
  }, [_c('div', {
    staticClass: "popup_inner"
  }, [_c('h3', {
    attrs: {
      "id": "_h3"
    }
  }), _vm._v(" "), _c('form', {
    attrs: {
      "action": "#"
    }
  }, [_c('div', {
    staticClass: "row"
  }, [_c('p', {
    attrs: {
      "id": "_p"
    }
  })])])])])])
}]}

/***/ }),

/***/ 639:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "vidcall",
    attrs: {
      "id": "videoWebRtc"
    }
  }, [_c('section', {
    staticClass: "app-mains"
  }, [_c('div', {
    staticClass: "columns vidclms app-contents"
  }, [_c('div', {
    attrs: {
      "id": "info"
    }
  }, [_c('div', {
    attrs: {
      "id": "client-name"
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "id": "output-selection",
      "hidden": ""
    }
  }, [_c('label', [_vm._v("Ringtone Devices")]), _vm._v(" "), _c('select', {
    attrs: {
      "id": "ringtone-devices",
      "multiple": ""
    }
  }), _vm._v(" "), _c('label', [_vm._v("Speaker Devices")]), _vm._v(" "), _c('select', {
    attrs: {
      "id": "speaker-devices",
      "multiple": ""
    }
  }), _vm._v(" "), _c('br')])]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "call-controls"
    }
  }, [_c('input', {
    attrs: {
      "id": "phone-number",
      "type": "text",
      "placeholder": "Enter a phone # or client name"
    }
  }), _vm._v(" "), _c('button', {
    attrs: {
      "id": "button-call"
    }
  }, [_vm._v("Call")]), _vm._v(" "), _c('button', {
    attrs: {
      "id": "button-hangup"
    }
  }, [_vm._v("Hangup")])]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "log",
      "hidden": ""
    }
  })])])])
}]}

/***/ }),

/***/ 640:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row justify-content-center"
  }, [_c('div', {
    staticClass: "col-md-8"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("Dashboard")]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "recaptcha-container"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [(_vm.user) ? _c('div', {
    staticClass: "alert alert-success",
    attrs: {
      "role": "alert"
    }
  }, [_vm._v("You are logged in!")]) : _vm._e(), _vm._v(" "), _vm._v("\n          ----- " + _vm._s(_vm.phone) + "\n        ")])])])])])
},staticRenderFns: []}

/***/ }),

/***/ 641:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row justify-content-center"
  }, [_c('div', {
    staticClass: "col-md-10 col-sm-12 login-module"
  }, [_c('div', {
    staticClass: "module-box"
  }, [_c('h1', {
    staticClass: "doctors_title mb-40 text-center"
  }, [_vm._v("Client Portal")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [(_vm.disable) ? _c('div', {
    staticClass: "col-6"
  }, [_c('router-link', {
    staticClass: "boxed-btn3 title",
    attrs: {
      "to": "/Logs"
    }
  }, [_c('i', {
    staticClass: "fas fa-sms message"
  }), _vm._v("\n              Message Logs\n            ")])], 1) : _vm._e(), _vm._v(" "), (_vm.disable) ? _c('div', {
    staticClass: "col-6"
  }, [_c('router-link', {
    staticClass: "boxed-btn3 title",
    attrs: {
      "to": "/table"
    }
  }, [_c('i', {
    staticClass: "fa fa-calendar message"
  }), _vm._v("Dashboard\n            ")])], 1) : _vm._e(), _vm._v(" "), (!_vm.disable) ? _c('div', {
    staticClass: "col-6"
  }, [_vm._m(0)]) : _vm._e()])])])]), _vm._v(" "), _c('notifications', {
    attrs: {
      "position": "top center"
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-8"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "alert alert-success text-center",
    attrs: {
      "role": "alert"
    }
  }, [_vm._v("Sorry, It's Available Only For Doctors.")])])])])])])
}]}

/***/ }),

/***/ 642:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row justify-content-center"
  }, [_c('div', {
    staticClass: "col-md-8"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("Dashboard")]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [(_vm.user) ? _c('div', {
    staticClass: "alert alert-success",
    attrs: {
      "role": "alert"
    }
  }, [_vm._v("You are logged in!")]) : _vm._e()])])])])])
},staticRenderFns: []}

/***/ }),

/***/ 643:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    attrs: {
      "id": "all-form"
    }
  }, [_c('div', {
    staticClass: "row justify-content-center"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "module-box"
  }, [_c('h1', {
    staticClass: "mt-0 mb-5"
  }, [_c('router-link', {
    attrs: {
      "to": {
        name: 'AllClinic'
      }
    }
  }, [_c('span', {
    staticClass: "material-icons"
  }, [_vm._v("keyboard_backspace")])]), _vm._v(" All Form "), _c('router-link', {
    staticClass: "btn btn-primary float-right",
    attrs: {
      "to": {
        name: 'CreateForm',
        params: {
          clinic_id: this.$route.params.id
        }
      }
    }
  }, [_vm._v("Create Form")])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.formSearch),
      expression: "formSearch"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "search",
      "placeholder": "Search form"
    },
    domProps: {
      "value": (_vm.formSearch)
    },
    on: {
      "keyup": _vm.searchForms,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.formSearch = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('table', {
    staticClass: "table table-hover",
    staticStyle: {
      "width": "100%"
    }
  }, [_vm._m(0), _vm._v(" "), _c('draggable', {
    attrs: {
      "tag": "tbody"
    },
    model: {
      value: (_vm.forms),
      callback: function($$v) {
        _vm.forms = $$v
      },
      expression: "forms"
    }
  }, _vm._l((_vm.forms), function(form) {
    return _c('tr', {
      key: form.id
    }, [_c('td', [_vm._v(_vm._s(form.id))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(form.name_en))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(form.description_en))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(form.create_date))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(form.update_date))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(form.status))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(form.category))]), _vm._v(" "), _c('td', [_c('img', {
      attrs: {
        "src": form.logo,
        "width": "50",
        "height": "50"
      }
    })]), _vm._v(" "), _c('td', [_vm._v(_vm._s(form.display_order))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(form.form_type))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(form.action_date))]), _vm._v(" "), _c('td', {
      staticStyle: {
        "min-width": "200px"
      }
    }, [_c('router-link', {
      staticClass: "btn btn-primary",
      attrs: {
        "to": {
          name: 'EditForm',
          params: {
            id: form.id
          }
        }
      }
    }, [_c('i', {
      staticClass: "material-icons"
    }, [_vm._v("edit")])]), _vm._v(" "), _c('router-link', {
      staticClass: "btn btn-danger",
      attrs: {
        "to": {
          name: 'DeleteForm',
          params: {
            id: form.id
          }
        }
      }
    }, [_c('i', {
      staticClass: "material-icons"
    }, [_vm._v("delete")])]), _vm._v(" "), _c('router-link', {
      staticClass: "btn btn-default",
      attrs: {
        "to": {
          name: 'CreateSurvey',
          params: {
            id: form.id
          }
        }
      }
    }, [_c('i', {
      staticClass: "material-icons"
    }, [_vm._v("Create")])]), _vm._v(" "), _c('router-link', {
      staticClass: "btn btn-success",
      attrs: {
        "to": {
          name: 'ViewSurvey',
          params: {
            id: form.id
          }
        }
      }
    }, [_c('i', {
      staticClass: "material-icons"
    }, [_vm._v("web")])])], 1)])
  }), 0)], 1)])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('td', [_vm._v("Id")]), _vm._v(" "), _c('td', [_vm._v("Name")]), _vm._v(" "), _c('td', [_vm._v("Description")]), _vm._v(" "), _c('td', [_vm._v("Create Date")]), _vm._v(" "), _c('td', [_vm._v("Update Date")]), _vm._v(" "), _c('td', [_vm._v("Status")]), _vm._v(" "), _c('td', [_vm._v("Category")]), _vm._v(" "), _c('td', [_vm._v("Thumbnail")]), _vm._v(" "), _c('td', [_vm._v("Display Order")]), _vm._v(" "), _c('td', [_vm._v("Type")]), _vm._v(" "), _c('td', [_vm._v("Action Date")]), _vm._v(" "), _c('td', [_vm._v("Actions")])])])
}]}

/***/ }),

/***/ 644:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    attrs: {
      "id": "header"
    }
  })
},staticRenderFns: []}

/***/ }),

/***/ 645:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    attrs: {
      "id": "all-clinic"
    }
  }, [_c('div', {
    staticClass: "row justify-content-center"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "module-box"
  }, [_c('h1', {
    staticClass: "mt-0 mb-5"
  }, [_vm._v("All Clinic\n               "), _c('router-link', {
    staticClass: "btn btn-primary float-right",
    attrs: {
      "to": {
        name: 'CreateClinic'
      }
    }
  }, [_vm._v("Create Clinic")])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.clinicSearch),
      expression: "clinicSearch"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "search",
      "placeholder": "Search clinic"
    },
    domProps: {
      "value": (_vm.clinicSearch)
    },
    on: {
      "keyup": _vm.searchClinics,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.clinicSearch = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('table', {
    staticClass: "table table-hover",
    staticStyle: {
      "width": "100%"
    }
  }, [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l((_vm.clinics), function(clinic) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(clinic.name))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(clinic.name))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(clinic.other_info))]), _vm._v(" "), _c('td', [_c('router-link', {
      staticClass: "btn btn-warning btn-sm",
      attrs: {
        "to": {
          name: 'EditClinic',
          params: {
            id: clinic.id
          }
        }
      }
    }, [_c('i', {
      staticClass: "material-icons"
    }, [_vm._v("edit")])]), _vm._v(" "), _c('router-link', {
      staticClass: "btn btn-danger btn-sm",
      attrs: {
        "to": {
          name: 'DeleteClinic',
          params: {
            id: clinic.id
          }
        }
      }
    }, [_c('i', {
      staticClass: "material-icons"
    }, [_vm._v("delete")])]), _vm._v(" "), _c('router-link', {
      staticClass: "btn btn-info btn-sm",
      attrs: {
        "to": {
          name: 'AllForm',
          params: {
            id: clinic.id
          }
        }
      }
    }, [_c('i', {
      staticClass: "material-icons"
    }, [_vm._v("web")])])], 1)])
  }), 0)])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('td', [_vm._v("ID")]), _vm._v(" "), _c('td', [_vm._v("Title")]), _vm._v(" "), _c('td', [_vm._v("Content")]), _vm._v(" "), _c('td', [_vm._v("Actions")])])])
}]}

/***/ }),

/***/ 646:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container",
    attrs: {
      "id": "all-user"
    }
  }, [_c('div', {
    staticClass: "row justify-content-center"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('div', {
    staticClass: "module-box"
  }, [_c('h1', {
    staticClass: "mt-0 mb-5"
  }, [_vm._v("\n          All Clinic\n          "), _c('router-link', {
    staticClass: "btn btn-primary float-right",
    attrs: {
      "to": {
        name: 'CreateClinic'
      }
    }
  }, [_vm._v("Create Clinic")])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userSearch),
      expression: "userSearch"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "name": "search",
      "placeholder": "Search user"
    },
    domProps: {
      "value": (_vm.userSearch)
    },
    on: {
      "keyup": _vm.searchusers,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userSearch = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('table', {
    staticClass: "table table-hover",
    staticStyle: {
      "width": "100%"
    }
  }, [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l((_vm.users), function(user, index) {
    return _c('tr', {
      key: user.id
    }, [_c('td', [_vm._v(_vm._s(user.id))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(user.name))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(user.phone))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(user.email))]), _vm._v(" "), _c('td', [_c('router-link', {
      staticClass: "btn btn-danger btn-sm",
      attrs: {
        "to": {
          name: 'DeleteClinic',
          params: {
            id: user.id
          }
        }
      }
    }, [_c('i', {
      staticClass: "material-icons"
    }, [_vm._v("delete")])]), _vm._v(" "), _c('a', {
      staticClass: "btn btn-success btn-sm",
      attrs: {
        "href": "#!",
        "title": "Approve Doctor"
      },
      on: {
        "click": function($event) {
          return _vm.approveDoctor(user.id, index)
        }
      }
    }, [_c('i', {
      staticClass: "material-icons"
    }, [_vm._v("done")])])], 1)])
  }), 0)])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('td', [_vm._v("ID")]), _vm._v(" "), _c('td', [_vm._v("Name")]), _vm._v(" "), _c('td', [_vm._v("Phone")]), _vm._v(" "), _c('td', [_vm._v("Email")]), _vm._v(" "), _c('td', [_vm._v("Actions")])])])
}]}

/***/ }),

/***/ 647:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-content-container custom-container container-fluid"
  }, [_c('navbar'), _vm._v(" "), _c('Header'), _vm._v(" "), _c('section', {
    staticClass: "section-container"
  }, [_c('router-view')], 1), _vm._v(" "), _c('Footer')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 648:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "all-clinic"
    }
  }, [_c('div', {
    staticClass: "slider_area"
  }, [_c('div', {
    staticClass: "slider_active owl-carousel"
  }, [_c('div', {
    staticClass: "single_slider d-flex align-items-center amira_bg_3"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xl-12"
  }, [_c('div', {
    staticClass: "slider_text"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('router-link', {
    staticClass: "boxed-btn3",
    attrs: {
      "to": "/disclamer"
    }
  }, [_vm._v("Start Screening NOW")]), _vm._v("  \n                "), (_vm.$store.state.showHotline) ? _c('strong', [_vm._v("OR")]) : _vm._e(), _vm._v("\n                  \n                "), (_vm.$store.state.showHotline) ? _c('a', {
    staticClass: "boxed-btn3",
    attrs: {
      "href": "tel: +14084134555"
    }
  }, [_vm._v("Dial the hotline")]) : _vm._e()], 1)])])])]), _vm._v(" "), _c('div', {
    staticClass: "single_slider d-flex align-items-center amira_bg_1"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xl-12"
  }, [_c('div', {
    staticClass: "slider_text"
  }, [_vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _c('router-link', {
    staticClass: "boxed-btn3",
    attrs: {
      "to": "/disclamer"
    }
  }, [_vm._v("Start Screening NOW")]), _vm._v("  \n                "), (_vm.$store.state.showHotline) ? _c('strong', [_vm._v("OR")]) : _vm._e(), _vm._v("\n                  \n                "), (_vm.$store.state.showHotline) ? _c('a', {
    staticClass: "boxed-btn3",
    attrs: {
      "href": "tel: +14084134555"
    }
  }, [_vm._v("Dial the hotline")]) : _vm._e()], 1)])])])]), _vm._v(" "), _c('div', {
    staticClass: "single_slider d-flex align-items-center amira_bg_2"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-xl-12"
  }, [_c('div', {
    staticClass: "slider_text"
  }, [_vm._m(4), _vm._v(" "), _vm._m(5), _vm._v(" "), _c('router-link', {
    staticClass: "boxed-btn3",
    attrs: {
      "to": "/disclamer"
    }
  }, [_vm._v("Start Screening NOW")]), _vm._v("  \n                "), (_vm.$store.state.showHotline) ? _c('strong', [_vm._v("OR")]) : _vm._e(), _vm._v("  \n                "), (_vm.$store.state.showHotline) ? _c('a', {
    staticClass: "boxed-btn3",
    attrs: {
      "href": "tel: +14084134555"
    }
  }, [_vm._v("Dial the hotline")]) : _vm._e()], 1)])])])])])]), _vm._v(" "), _vm._m(6), _vm._v(" "), _c('div', {
    staticClass: "service_area"
  }, [_c('div', {
    staticClass: "container p-0"
  }, [_c('div', {
    staticClass: "row no-gutters"
  }, [_vm._m(7), _vm._v(" "), _c('div', {
    staticClass: "col-xl-4 col-md-4"
  }, [_c('div', {
    staticClass: "single_service"
  }, [_vm._m(8), _vm._v(" "), _c('h3', [_vm._v("What it is Not")]), _vm._v(" "), _c('p', [_vm._v("\n              This web site is\n              "), _c('strong', [_vm._v("NOT")]), _vm._v(" diagnostic or medical site. You should\n              "), _c('strong', [_vm._v("NOT")]), _vm._v(" use this website or the personalized report\n              for any medical advice. It is\n              "), _c('strong', [_vm._v("NOT")]), _vm._v("\n              intended for people experiencing severe symptoms. If you have\n              medical questions, contact your doctor. If you have an emergency\n              call 911.\n              "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), (!_vm.$store.state.showHotline) ? _c('br') : _vm._e(), _vm._v(" "), (!_vm.$store.state.showHotline) ? _c('br') : _vm._e()]), _vm._v(" "), (_vm.$store.state.showHotline) ? _c('a', {
    staticClass: "boxed-btn3-white",
    attrs: {
      "href": "tel: +14084134555"
    }
  }, [_vm._v("+(408) 413-4555")]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-4 col-md-4"
  }, [_c('div', {
    staticClass: "single_service"
  }, [_vm._m(9), _vm._v(" "), _c('h3', [_vm._v("What it is")]), _vm._v(" "), _vm._m(10), _vm._v(" "), _c('router-link', {
    staticClass: "boxed-btn3-white",
    attrs: {
      "to": "/disclamer"
    }
  }, [_vm._v("Start Screening NOW")])], 1)])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h3', [_c('span', [_vm._v("How will this help me?")]), _vm._v(" "), _c('br'), _vm._v("Get your personalized reports\n                ")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('strong', [_vm._v("If you have symptoms :")]), _vm._v("\n                  the reports will help you understand\n                  "), _c('br'), _vm._v("how you may manage your care from home, "), _c('br'), _vm._v("steps to\n                  help prevent the spread of COVID-19 and other information\n                  "), _c('br'), _vm._v(" "), _c('strong', [_vm._v("If you have no symptoms:")]), _vm._v("\n                  the reports will help you understand\n                  "), _c('br'), _vm._v("what you might do to prevent getting infected and\n                  other information\n                ")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h3', [_c('span', [_vm._v("Stay Home")]), _vm._v(" "), _c('br'), _vm._v("Stay Safe\n                ")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("\n                  Let’s all help each other\n                  "), _c('br'), _vm._v("reserve care for those in need. "), _c('br'), _vm._v("Take the self\n                  assessment, call you doctor "), _c('br'), _vm._v("or healthcare provider,\n                  and look for guidelines from CDC.gov\n                ")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h3', [_c('span', [_vm._v("EnSofia is here ..")]), _vm._v(" "), _c('br'), _vm._v("To help you\n                ")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("\n                  This website is made by team EnSofia.\n                  "), _c('br'), _vm._v("It is our humble effort to contribute to our community\n                  and help the public, "), _c('br'), _vm._v("the health care providers and\n                  healthcare systems. "), _c('br'), _vm._v("It is based on CDC guildlines.\n                  "), _c('br'), _vm._v("Always refer to CDC.gov for more information\n                ")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "background": "#fff"
    }
  }, [_c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "row justify-content-center"
  }, [_c('div', {
    attrs: {
      "id": "circle1"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "pointer1"
    }
  }, [_c('p', [_vm._v("Register, Keep your PIN")])]), _vm._v("\n        \n      "), _c('div', {
    attrs: {
      "id": "circle1"
    }
  }, [_vm._v("2")]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "pointer2"
    }
  }, [_c('p', [_vm._v("Take self assessment")])]), _vm._v("\n        \n      "), _c('div', {
    attrs: {
      "id": "circle1"
    }
  }, [_vm._v("3")]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "pointer3"
    }
  }, [_c('p', [_vm._v("Login, Get verification code")])]), _vm._v("\n        \n      "), _c('div', {
    attrs: {
      "id": "circle1"
    }
  }, [_vm._v("4")]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "pointer4"
    }
  }, [_c('p', [_vm._v("Download your report")])])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br')])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-xl-4 col-md-4"
  }, [_c('div', {
    staticClass: "single_service"
  }, [_c('div', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "flaticon-electrocardiogram"
  })]), _vm._v(" "), _c('h3', [_vm._v("Made By")]), _vm._v(" "), _c('p', [_vm._v("\n              This website is made by team Ensofia. It's our humble effort to\n              contribute to community and help the public and the health care\n              providers and systems\n              "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('br')]), _vm._v(" "), _c('a', {
    staticClass: "boxed-btn3-white",
    attrs: {
      "href": "https://ensofia.com/contact.html",
      "target": "blank"
    }
  }, [_vm._v("Contact EnSofia")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "flaticon-emergency-call"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "flaticon-first-aid-kit"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("\n              This tool may help you understand what to do next about\n              COVID-19. Your privacy is extremely important to us, your name\n              and email are optional Recommendations provided by this tool do\n              not constitute medical advice and should not be used to diagnose\n              or treat medical conditions.\n              "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('br')])
}]}

/***/ }),

/***/ 649:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "delete-doctor"
    }
  }, [_c('h1', [_vm._v("Delete User " + _vm._s(_vm.user.title))]), _vm._v(" "), _c('notification', {
    attrs: {
      "notifications": _vm.notifications
    }
  }), _vm._v(" "), _c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        return _vm.deleteUser($event)
      }
    }
  }, [_vm._m(0)])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_c('button', {
    staticClass: "btn btn-danger"
  }, [_vm._v("Delete User")])])
}]}

/***/ }),

/***/ 650:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row justify-content-center"
  }, [_c('div', {
    staticClass: "col-md-8"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "card-header"
  }, [_vm._v("Dashboard")]), _vm._v(" "), _c('div', {
    staticClass: "card-body"
  }, [(_vm.user) ? _c('div', {
    staticClass: "alert alert-success",
    attrs: {
      "role": "alert"
    }
  }, [_vm._v("\n            You are resgistered, Please\n            "), _c('a', {
    staticClass: "contact",
    attrs: {
      "href": "https://ensofia.com/contact.html",
      "target": "_blank"
    }
  }, [_vm._v("Contact us")]), _vm._v("\n            to confirm you\n          ")]) : _vm._e()])])])])])
},staticRenderFns: []}

/***/ }),

/***/ 651:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "notifications"
    }
  }, _vm._l((_vm.notifications), function(notification) {
    return _c('div', {
      class: _vm.getNotificationClass(notification)
    }, [_vm._v("\n        " + _vm._s(notification.message) + "\n    ")])
  }), 0)
},staticRenderFns: []}

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[514]);
//# sourceMappingURL=app.398186e40c11f0d0ca20.js.map