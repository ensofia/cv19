webpackJsonp([1],{

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const BACKEND_URL = "https://stag.cv19.app:8449";
/* harmony export (immutable) */ __webpack_exports__["g"] = BACKEND_URL;

const URL = BACKEND_URL + "/app";
/* harmony export (immutable) */ __webpack_exports__["a"] = URL;

const FORM_ID = "1";
/* harmony export (immutable) */ __webpack_exports__["d"] = FORM_ID;

const FORM_ID_PDF = "3";
/* harmony export (immutable) */ __webpack_exports__["f"] = FORM_ID_PDF;

const HOUSE_HOLD_NUMBERLHPED = "10";
/* harmony export (immutable) */ __webpack_exports__["b"] = HOUSE_HOLD_NUMBERLHPED;

const HOUSE_HOLD_NUMBER = "3";
/* harmony export (immutable) */ __webpack_exports__["c"] = HOUSE_HOLD_NUMBER;

const HOURS_LIMIT = 24;
/* harmony export (immutable) */ __webpack_exports__["e"] = HOURS_LIMIT;


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

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_newCreate_survey__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_newCreate_survey___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__pages_newCreate_survey__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_view_survey__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_view_survey___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__pages_view_survey__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_save_survey__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_save_survey___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__pages_save_survey__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_TwilioEX__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_TwilioEX___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__pages_TwilioEX__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_resource__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Layout_HomePage__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Layout_HomePage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_Layout_HomePage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_clinic_all_clinic__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_clinic_all_clinic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_clinic_all_clinic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_form_all_form__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_form_all_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_form_all_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_form_create_form__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_form_create_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__components_form_create_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_clinic_create_clinic__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_clinic_create_clinic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__components_clinic_create_clinic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_clinic_edit_clinic__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_clinic_edit_clinic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__components_clinic_edit_clinic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_clinic_delete_clinic__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_clinic_delete_clinic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__components_clinic_delete_clinic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_authentication_Login__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_authentication_Login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__components_authentication_Login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_authentication_Register__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_authentication_Register___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__components_authentication_Register__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_authentication_RegisterPhone__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_authentication_RegisterPhone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__components_authentication_RegisterPhone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_authentication_Dashboard__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_authentication_Dashboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__components_authentication_Dashboard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_authentication_disclamer__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_authentication_disclamer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__components_authentication_disclamer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_authentication_DoctorApprove__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_authentication_DoctorApprove___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__components_authentication_DoctorApprove__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_user_all_doctors__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_user_all_doctors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__components_user_all_doctors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_user_delete_doctor__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_user_delete_doctor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__components_user_delete_doctor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_table__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__pages_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_Layout_layout__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_Layout_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__components_Layout_layout__);





// import NewViewSurvey from '@/pages/newView-survey'














// import Dashboard1 from '@/components/authentication/dashboard'






__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_6_vue_resource__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  mode: 'history',
  routes: [{
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_23__components_Layout_layout___default.a,
    children: [{
      path: '/',
      name: 'HomePage',
      component: __WEBPACK_IMPORTED_MODULE_7__components_Layout_HomePage___default.a
    }, { path: '/all', name: 'AllClinic', component: __WEBPACK_IMPORTED_MODULE_8__components_clinic_all_clinic___default.a }, {
      path: '/all-form/:id',
      name: 'AllForm',
      component: __WEBPACK_IMPORTED_MODULE_9__components_form_all_form___default.a,
      children: []
    }, {
      path: '/create-clinic',
      name: 'CreateClinic',
      component: __WEBPACK_IMPORTED_MODULE_11__components_clinic_create_clinic___default.a
    }, {
      path: '/create-form/:id',
      name: 'CreateForm',
      component: __WEBPACK_IMPORTED_MODULE_10__components_form_create_form___default.a
    }, {
      path: '/edit-clinic/:id',
      name: 'EditClinic',
      component: __WEBPACK_IMPORTED_MODULE_12__components_clinic_edit_clinic___default.a
    }, {
      path: '/delete-clinic/:id',
      name: 'DeleteClinic',
      component: __WEBPACK_IMPORTED_MODULE_13__components_clinic_delete_clinic___default.a
    }, {
      path: '/create_Survey/:id',
      name: 'CreateSurvey',
      component: __WEBPACK_IMPORTED_MODULE_2__pages_newCreate_survey___default.a
    }, {
      path: '/view-survey/:id',
      name: 'ViewSurvey',
      component: __WEBPACK_IMPORTED_MODULE_3__pages_view_survey___default.a
    }, {
      path: '/save-survey/:id',
      name: 'SaveSurvey',
      component: __WEBPACK_IMPORTED_MODULE_4__pages_save_survey___default.a
    }, {
      path: '/login',
      name: 'login',
      component: __WEBPACK_IMPORTED_MODULE_14__components_authentication_Login___default.a
    }, {
      path: '/register',
      name: 'Register',
      component: __WEBPACK_IMPORTED_MODULE_15__components_authentication_Register___default.a
    }, {
      path: '/register-phone',
      name: 'RegisterPhone',
      component: __WEBPACK_IMPORTED_MODULE_16__components_authentication_RegisterPhone___default.a,
      props: route => ({
        phone: route.query.phone
      })
    }, {
      path: '/dashboard',
      name: 'Dashboard',
      component: __WEBPACK_IMPORTED_MODULE_17__components_authentication_Dashboard___default.a
    }, {
      path: '/disclamer',
      name: 'Disclamer',
      component: __WEBPACK_IMPORTED_MODULE_18__components_authentication_disclamer___default.a
    },
    // {
    //   path: '/newViewSurvey',
    //   name: 'NewViewSurvey',
    //   component: NewViewSurvey
    // },
    {
      path: '/doctorapprove',
      name: 'DoctorApprove',
      component: __WEBPACK_IMPORTED_MODULE_19__components_authentication_DoctorApprove___default.a
    }, {
      path: '/all-doctor',
      name: 'AllDoctor',
      component: __WEBPACK_IMPORTED_MODULE_20__components_user_all_doctors___default.a
    }, {
      path: '/delete-doctor/:id',
      name: 'DeleteDoctor',
      component: __WEBPACK_IMPORTED_MODULE_21__components_user_delete_doctor___default.a
    }, {
      path: '/twilioex',
      name: 'TwilioEX',
      component: __WEBPACK_IMPORTED_MODULE_5__pages_TwilioEX___default.a
    }, {
      path: '/table',
      name: 'table',
      component: __WEBPACK_IMPORTED_MODULE_22__pages_table___default.a
    }]

  }]
}));

/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(511)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(444),
  /* template */
  __webpack_require__(564),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__variables__ = __webpack_require__(17);



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
            Vue.refreshToken(operationName, obj, callBackfn, self, method);
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
            Vue.refreshToken(operationName, obj, callBackfn, self, method);
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
            Vue.refreshToken(operationName, obj, callBackfn, self, method);
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

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_variables__ = __webpack_require__(17);
//
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
  mounted() {
    window.localStorage.URL = __WEBPACK_IMPORTED_MODULE_1__components_variables__["a" /* URL */];
    if ("ontouchstart" in document.documentElement) {
      window.localStorage.isMobile = true;
    } else {
      window.localStorage.isMobile = false;
    }
    window.addEventListener("beforeunload", function (e) {
      debugger;

      // localStorage.clear();
      window.localStorage.URL = __WEBPACK_IMPORTED_MODULE_1__components_variables__["a" /* URL */];
      if ("ontouchstart" in document.documentElement) {
        window.localStorage.isMobile = true;
      } else {
        window.localStorage.isMobile = false;
      }

      this.$store.state.isLogin = window.localStorage.isLogin = false;
    });
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
    };
  }
});

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuejs_datepicker__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__variables__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(34);
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
        backend_url: __WEBPACK_IMPORTED_MODULE_2__variables__["g" /* BACKEND_URL */],
        household_number: __WEBPACK_IMPORTED_MODULE_2__variables__["c" /* HOUSE_HOLD_NUMBER */]
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
    // navigator.permissions.query({ name: "microphone" }).then(function(result) {
    //   if (result.state == "granted") {
    //   } else if (result.state == "prompt") {
    //   } else if (result.state == "denied") {
    //   }
    //   result.onchange = function() {};
    // });
    // navigator.mediaDevices.enumerateDevices().then(devices => {
    //   devices = devices.filter(d => d.kind === "audioinput");
    // });
    this.msgText = "WELCOME_MSG";
    this.sendMessage(), this.mutee();
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
        __WEBPACK_IMPORTED_MODULE_4_axios___default.a.post(__WEBPACK_IMPORTED_MODULE_2__variables__["g" /* BACKEND_URL */] + "/calendarcv02/send_bot_msg", {
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
              //   debugger;
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

          if (response.data.responseData.context.end_survery == true) {
            // ;
            self.context = {};
            self.context = {
              timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
              backend_url: __WEBPACK_IMPORTED_MODULE_2__variables__["g" /* BACKEND_URL */],
              household_number: __WEBPACK_IMPORTED_MODULE_2__variables__["c" /* HOUSE_HOLD_NUMBER */]
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

/***/ 446:
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

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variables_js__ = __webpack_require__(17);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Chat_chatbot__ = __webpack_require__(534);
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

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Header__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_Navbar__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_Navbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__authentication_Navbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer__ = __webpack_require__(537);
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

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(41);
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

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(41);
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

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_SBSAjax_js__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_notification__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_notification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_notification__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_tel_input__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__variables__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util_SBSAjax__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vue_loading_button__ = __webpack_require__(128);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      }
      // otp:{required}
    }
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
      this.submitted = true;
      this.isLoading = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.disabled = true;
      this.login();
    },
    setUserCode: function () {
      var formData = new FormData();
      let vm = this;
      const axios = __webpack_require__(34).default;

      if (this.notifications) this.notifications = [];
      if (this.form.phone) __WEBPACK_IMPORTED_MODULE_1_vue__["default"].putInvoke("/user/" + vm.userId, { code: this.form.otp }, function (response) {
        vm.login2();
      });
    },
    login: function () {
      var formData = new FormData();
      let vm = this;
      const axios = __webpack_require__(34).default;
      if (this.notifications) this.notifications = [];

      __WEBPACK_IMPORTED_MODULE_1_vue__["default"].InvokeLogin("/logincode", { pin: vm.form.pin, phone: vm.form.phone },
      // axios
      //   .get(URL + "/logincode?pin=" + vm.form.pin + "&phone=" + vm.form.phone)
      function (response) {
        if (response.data) {
          console.log(response);
          vm.userexist = true;
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
            vm.$store.state.isLogin = window.localStorage.isLogin = true;
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
      const axios = __webpack_require__(34).default;
      if (this.notifications) this.notifications = [];
      __WEBPACK_IMPORTED_MODULE_1_vue__["default"].InvokeLogin("/login", { pin: vm.form.pin, phone: vm.form.phone, code: vm.form.otp }, function (response) {
        if (response.data != "") {
          console.log(response);
          vm.$store.state.isLogin = window.localStorage.isLogin = true;

          window.localStorage.userId = response.data.id;
          window.localStorage.first_name = response.data.first_name;
          window.localStorage.last_name = response.data.last_name;
          window.localStorage.hous_hold = response.data.hous_hold;
          window.localStorage.email = response.data.email;
          window.localStorage.phone = response.data.phone;
          window.localStorage.birthday = response.data.birthday;
          window.localStorage.answerAgain = false;
          window.localStorage.answerId = response.data.answers && response.data.answers.length > 0 ? response.data.answers[0].id : 0;
          window.localStorage.lastAnswerDate = response.data.answers && response.data.answers.length > 0 ? response.data.answers[response.data.answers.length - 1].update_date : "";

          window.localStorage.answer = response.data.answers && response.data.answers.length > 0 ? JSON.stringify(response.data.answers) : "";

          if (response.data.doctor == 0) {
            if (window.localStorage.answer && window.localStorage.answer != "") {
              vm.$router.push({
                path: "/save-survey/" + __WEBPACK_IMPORTED_MODULE_6__variables__["d" /* FORM_ID */]
              });
              //  vm.$router.push({
              //   path: "/all",
              // });
            } else {
              window.localStorage.afterLogin = true;
              vm.$router.push({ path: "/view-survey/" + __WEBPACK_IMPORTED_MODULE_6__variables__["d" /* FORM_ID */] });
            }
          } else {
            if (response.data.verify == "true") {
              vm.$router.push({
                path: "/table"
              });
            } else {
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

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(49);
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




/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {};
  },
  computed: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["a" /* mapGetters */])({
    user: "user"
  })),
  mounted() {},
  methods: {
    signOut() {
      debugger;

      this.$store.state.isLogin = window.localStorage.isLogin = false;
      localStorage.clear();
      this.$router.push("/");
      // this.$router.push({ name: "HomePage" });
    }
  }
});

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuejs_datepicker__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_notification__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_notification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_notification__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_tel_input__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__variables__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_survey_vue__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_survey_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_survey_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_vue_loading_button__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__util_SBSAjax_js__ = __webpack_require__(42);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      birthday: { required: __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__["required"] },
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
    __WEBPACK_IMPORTED_MODULE_11__util_SBSAjax_js__["a" /* default */].resetUser();
    debugger;
    this.maxHouseHoldNumber = this.$store.state.housholdNumber ? __WEBPACK_IMPORTED_MODULE_6__variables__["b" /* HOUSE_HOLD_NUMBERLHPED */] : __WEBPACK_IMPORTED_MODULE_6__variables__["c" /* HOUSE_HOLD_NUMBER */];
  },
  methods: {
    validate(e) {
      //debugger;
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

    submit() {
      this.isLoading = true;
      if (this.form.phone == "") {
        this.showValidation = true;
      }
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.isLoading = false;
        return;
      }

      this.checkUserCanRegister();
    },
    checkUserCanRegister: function () {
      //debugger;
      let vm = this;
      if (this.form.phone == "") {
        this.showValidation = true;
      }
      const axios = __webpack_require__(34).default;
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
      const axios = __webpack_require__(34).default;
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

        if (vm.form.doctor == 0) vm.$router.push({ path: "/view-survey/" + __WEBPACK_IMPORTED_MODULE_6__variables__["d" /* FORM_ID */] });else vm.$router.push({ path: "/doctorapprove" });
      });
    }
  }
});

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(50);
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

/***/ 456:
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

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variables_js__ = __webpack_require__(17);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__notifications_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__variables_js__ = __webpack_require__(17);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__notifications_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__variables_js__ = __webpack_require__(17);
//
//
//
//
//
//
//
//
//
//
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

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__notifications_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__variables__ = __webpack_require__(17);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuedraggable__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuedraggable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuedraggable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__variables_js__ = __webpack_require__(17);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__notifications_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__variables_js__ = __webpack_require__(17);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 463:
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

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variables_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(20);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__notifications_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__variables_js__ = __webpack_require__(17);
//
//
//
//
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

/***/ 466:
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
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(280)))

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_variables__ = __webpack_require__(17);
//
//
//
//
//
//
//
//

// import Punny from './Punny';
// import  * as SurveyCreator from "survey-creator";
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
    let options = {
      showEmbededSurveyTab: true,
      showTranslationTab: true,
      showLogicTab: true,
      showState: true,
      haveCommercialLicense: true,
      showOptions: true,
      showSave: true
    };

    ;
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
      //   url: URL + "/form/" + FORM_ID_PDF,
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
      this.$http.put(__WEBPACK_IMPORTED_MODULE_0__components_variables__["a" /* URL */] + "/form/" + __WEBPACK_IMPORTED_MODULE_0__components_variables__["f" /* FORM_ID_PDF */], {
        questions: vm.surveyCreator.text
      }, {
        headers: {
          enctype: "multipart/form-data", 'authorization': 'Bearer ' + localStorage.token
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
      this.$http.get(__WEBPACK_IMPORTED_MODULE_0__components_variables__["a" /* URL */] + "/form/" + __WEBPACK_IMPORTED_MODULE_0__components_variables__["f" /* FORM_ID_PDF */], {
        headers: {
          enctype: "multipart/form-data", 'authorization': 'Bearer ' + localStorage.token
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

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_survey_vue__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_survey_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_survey_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_css__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_loading_button__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_variables__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vuex__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_util_SBSAjax__ = __webpack_require__(42);
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
      debugger;
      if (create_date != "") {
        var x = new __WEBPACK_IMPORTED_MODULE_2_moment___default.a(String(create_date));
        var y = new __WEBPACK_IMPORTED_MODULE_2_moment___default.a.utc();
        var duration = __WEBPACK_IMPORTED_MODULE_2_moment___default.a.duration(y.diff(x));
        this.hours = Math.abs(parseInt("" + duration.as("hours")));
        var mints5 = Math.abs(parseInt("" + duration.as("minutes")));
        var min = Math.abs(24 * 60 - Math.abs(parseInt("" + duration.as("minutes"))));
        var duration2 = __WEBPACK_IMPORTED_MODULE_2_moment___default.a.duration(min, "minutes");
        var taketime = duration2.days() * 24 + duration2.hours() + " hours " + (duration2.minutes() == 0 ? "" : duration2.minutes() + " min");
        this.takeAgain = this.hours >= __WEBPACK_IMPORTED_MODULE_4__components_variables__["e" /* HOURS_LIMIT */] ? true : false;
        if (this.$store.state.stagOrNot) this.takeAgain = mints5 >= 5 ? true : false;
        debugger;
        // ==index)?"1":answerArray[index].user_birthday)
        debugger;
        return this.takeAgain ? __WEBPACK_IMPORTED_MODULE_7_lodash___default.a.findLastIndex(answerArray, function (o) {
          return o.answer.user_birthday == answerArray[index].answer.user_birthday;
        }) == index ? "1" : "" : taketime;
      } else {
        return this.hours >= __WEBPACK_IMPORTED_MODULE_4__components_variables__["e" /* HOURS_LIMIT */] ? "1" : "24 hours";
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
        this.takeAgain = this.hours >= __WEBPACK_IMPORTED_MODULE_4__components_variables__["e" /* HOURS_LIMIT */] ? true : false;

        //for testing
        this.takeAgain = mints5 >= 5 ? true : false;
      } else {
        this.hours = 0;
        this.time = "24 hours";
      }
    },
    takeItAgain: function () {
      window.localStorage.takeAgain == 1;
      this.$router.push({ path: "/view-survey/" + __WEBPACK_IMPORTED_MODULE_4__components_variables__["d" /* FORM_ID */] });
    },
    answerAgain: function (json) {
      window.localStorage.takeAgain == 1;
      window.localStorage.answerAgain = JSON.stringify(json);
      this.$router.push({ path: "/view-survey/" + __WEBPACK_IMPORTED_MODULE_4__components_variables__["d" /* FORM_ID */] });
    },
    fetchAnswerData: function () {
      var userAnswers = JSON.parse(window.localStorage.answer);
      this.totalRows = userAnswers.length;
      for (let index = 0; index < userAnswers.length; index++) {
        const userAnswer = userAnswers[index];
        if (userAnswer.create_date) {
          userAnswer.answer.date_created = new __WEBPACK_IMPORTED_MODULE_2_moment___default.a(userAnswer.create_date).format("MM-DD-YYYY");
        } else {
          userAnswer.create_date = new __WEBPACK_IMPORTED_MODULE_2_moment___default.a.utc();
          userAnswer.answer.date_created = new __WEBPACK_IMPORTED_MODULE_2_moment___default.a.utc().format("MM-DD-YYYY");
        }
        userAnswer.answer.retake = this.retake(userAnswer.create_date, userAnswers, index);
        userAnswer.answer.index = index;

        this.items.push(userAnswer.answer);
      }
    },
    fetchFormData: function (json) {
      var vm = this;

      __WEBPACK_IMPORTED_MODULE_5_vue__["default"].getInvoke("/form/" + __WEBPACK_IMPORTED_MODULE_4__components_variables__["f" /* FORM_ID_PDF */], {}, function (response) {
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
        var surveyPDF = new SurveyPDF.SurveyPDF(vm.jsonQuestions, options);

        var answers = json;

        var x = new __WEBPACK_IMPORTED_MODULE_2_moment___default.a(String(answers.user_birthday));
        var y = new __WEBPACK_IMPORTED_MODULE_2_moment___default.a(String(new Date()));
        var duration = __WEBPACK_IMPORTED_MODULE_2_moment___default.a.duration(y.diff(x));
        var year = Math.abs(parseInt("" + duration.as("year")));
        //debugger;
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
      fields: [{ key: "date_created", sortable: true }, { key: "relation", sortable: true }, { key: "user_birthday", label: "Birth Date", sortable: true }, { key: "first_name", sortable: true }, { key: "last_name", sortable: true }, { key: "download", sortable: false }, { key: "repeat_in:", sortable: false }],
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

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap_vue__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_variables__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_notification__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_notification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_vue_notification__);
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







__WEBPACK_IMPORTED_MODULE_1_vue__["default"].component("b-table", __WEBPACK_IMPORTED_MODULE_2_bootstrap_vue__["c" /* BTable */]);
const createSortable = (el, options, vnode) => {
  return Sortable.create(el, _extends({}, options));
};

__WEBPACK_IMPORTED_MODULE_1_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_6_vue_notification___default.a);
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
      message: null,
      users: [],
      sortableOptions: {
        chosenClass: "is-selected"
      },
      dangerColum: ["user_has_cough", "user_has_fever", "user_has_nausea_vomiting", "user_has_short_breath"],
      sortedColum: ["relation", "user_exposed", "user_has_fever", "user_has_short_breath", "user_has_cough", "user_has_nausea_vomiting", "user_has_diarrhea", "user_fatigue", "user_has_muscle_aches", "user_has_sore_throat", "user_has_runny_nose", "user_smoker", "user_has_chronic_disease", "user_healh_prof"],
      fields: [{
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
        key: "birthday",
        label: "Age",
        sortable: true,
        class: "text-center"
      }, {
        key: "phone",
        label: "Phone",
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
      perPage: 5,
      pageOptions: [5, 10, 15],
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: [],
      forms: "",
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
                user.answers[i].birthday = '';
              }
              user.answers[i].phone = user.phone;
              user.answers[i].answer_date = new __WEBPACK_IMPORTED_MODULE_5_moment___default.a(user.answers[i].create_date).format("MM-DD-YYYY");
              user.answers[i].name = user.answers[i].answer.first_name + " " + user.answers[i].answer.last_name;
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
                  y[3] ? x = y[2].charAt(0).toUpperCase() + y[2].slice(1) + " " + y[3].charAt(0).toUpperCase() + y[3].slice(1) : x = y[2].charAt(0).toUpperCase() + y[2].slice(1);
                } else {
                  x = y[1].charAt(0).toUpperCase() + y[1].slice(1);
                }
              } else {
                x = element.charAt(0).toUpperCase() + element.slice(1);
              }
              // console.log("x is : " + x);

              self.fields[__WEBPACK_IMPORTED_MODULE_4_lodash___default.a.indexOf(self.sortedColum, element) + 6] = {
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
              }
            } else {
              {
                user[element] = user[element];
              }
              user["item"] = obj;
            }
          });
          user["_cellVariants"] = f;
          self.users.push(user);

          self.fields.push({
            key: "actions",
            label: "Communicate"
          });
        });

        self.totalRows = self.users.length;

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
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post("https://stag.cv19.app:8449/calendarcv02/send_SMS", {
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
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(280)))

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_survey_vue__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_survey_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_survey_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_variables__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_notification__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_notification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_notification__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_util_SBSAjax__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
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
  },
  components: {
    Survey: __WEBPACK_IMPORTED_MODULE_0_survey_vue__["Survey"],
    SBSAjax: __WEBPACK_IMPORTED_MODULE_5__components_util_SBSAjax__["a" /* default */]
  },
  methods: {
    fetchFormData: function () {
      this.answersAfterLogin = [];
      var id = __WEBPACK_IMPORTED_MODULE_1__components_variables__["d" /* FORM_ID */];
      var user_id = window.localStorage.userId;
      this.totalPersons = parseInt(window.localStorage.hous_hold);

      var vm = this;
      // var userSavedAnswers = {};
      // var userSavedAnswersCount = 0;
      // if (window.localStorage.takeAgain == 1) {
      //   var userSavedAnswers = JSON.parse(window.localStorage.answer);
      //   userSavedAnswers=_.find(users, { 'relation': 1, 'user_birthday': true });
      // }
      __WEBPACK_IMPORTED_MODULE_4_vue__["default"].getInvoke("/form/" + __WEBPACK_IMPORTED_MODULE_1__components_variables__["d" /* FORM_ID */], {}, function (response) {
        vm.question = response;

        var questions = JSON.parse(response.questions);
        var oPage = questions.pages[0];
        if (window.localStorage.answerAgain) {
          var elements = questions.pages[0].elements;
          __WEBPACK_IMPORTED_MODULE_6_lodash___default.a.forEach(elements, function (value, index) {
            console.log(value + " index " + index);
            if (value.name === "first_name" || value.name === "last_name" || value.name === "relation" || value.name === "user_birthday") {
              value.readOnly = true;
            }
          });
        }
        var model = new __WEBPACK_IMPORTED_MODULE_0_survey_vue__["Model"](questions);
        model.css = myCss;

        if (window.localStorage.answerAgain) {
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
          //debugger;
          __WEBPACK_IMPORTED_MODULE_4_vue__["default"].postInvoke("/answer", {
            answer: UserAnswers,
            form_id: __WEBPACK_IMPORTED_MODULE_1__components_variables__["d" /* FORM_ID */],
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
                  vm.$router.push({
                    path: "/save-survey/" + __WEBPACK_IMPORTED_MODULE_1__components_variables__["d" /* FORM_ID */]
                  });
                } else if (window.localStorage.answerAgain) {
                  window.localStorage.answerAgain = null;

                  var userAnswers = JSON.parse(window.localStorage.answer);
                  userAnswers.push({ answer: UserAnswers });
                  window.localStorage.answer = JSON.stringify(userAnswers);
                  vm.$router.push({
                    path: "/save-survey/" + __WEBPACK_IMPORTED_MODULE_1__components_variables__["d" /* FORM_ID */]
                  });
                } else {

                  setTimeout(function () {
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
      age: 0,
      json: {},
      survey: {},
      savePDF: {},
      question: {},
      persons: 1,
      answersAfterLogin: [],
      spouse: false,
      self: false,
      totalPersons: 1,
      appVerifier: "",
      notComplete: true,
      pdfs: [{ url: "http://www.pdf995.com/samples/pdf.pdf", name: "test" }]
    };
  }
});

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_resource__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bootstrap_vue__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_variables__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vuelidate__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vuelidate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_vuelidate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_util_SBSAjax__ = __webpack_require__(42);
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

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(41);



__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* default */].Store({
  state: {
    showHotline: window.localStorage.URL == "https://lhpeds.cv19.app:8451/app" ? false : true,
    housholdNumber: window.localStorage.URL.includes('lhpeds') ? true : false,
    stagOrNot: window.localStorage.URL.includes('stag') ? true : false,
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

/***/ 506:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 507:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 508:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 509:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 510:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 511:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 512:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 513:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 514:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 515:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 516:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 517:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 518:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 519:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 520:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 521:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 522:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 523:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 524:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 525:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 526:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 527:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 281,
	"./af.js": 281,
	"./ar": 288,
	"./ar-dz": 282,
	"./ar-dz.js": 282,
	"./ar-kw": 283,
	"./ar-kw.js": 283,
	"./ar-ly": 284,
	"./ar-ly.js": 284,
	"./ar-ma": 285,
	"./ar-ma.js": 285,
	"./ar-sa": 286,
	"./ar-sa.js": 286,
	"./ar-tn": 287,
	"./ar-tn.js": 287,
	"./ar.js": 288,
	"./az": 289,
	"./az.js": 289,
	"./be": 290,
	"./be.js": 290,
	"./bg": 291,
	"./bg.js": 291,
	"./bm": 292,
	"./bm.js": 292,
	"./bn": 293,
	"./bn.js": 293,
	"./bo": 294,
	"./bo.js": 294,
	"./br": 295,
	"./br.js": 295,
	"./bs": 296,
	"./bs.js": 296,
	"./ca": 297,
	"./ca.js": 297,
	"./cs": 298,
	"./cs.js": 298,
	"./cv": 299,
	"./cv.js": 299,
	"./cy": 300,
	"./cy.js": 300,
	"./da": 301,
	"./da.js": 301,
	"./de": 304,
	"./de-at": 302,
	"./de-at.js": 302,
	"./de-ch": 303,
	"./de-ch.js": 303,
	"./de.js": 304,
	"./dv": 305,
	"./dv.js": 305,
	"./el": 306,
	"./el.js": 306,
	"./en-SG": 307,
	"./en-SG.js": 307,
	"./en-au": 308,
	"./en-au.js": 308,
	"./en-ca": 309,
	"./en-ca.js": 309,
	"./en-gb": 310,
	"./en-gb.js": 310,
	"./en-ie": 311,
	"./en-ie.js": 311,
	"./en-il": 312,
	"./en-il.js": 312,
	"./en-nz": 313,
	"./en-nz.js": 313,
	"./eo": 314,
	"./eo.js": 314,
	"./es": 317,
	"./es-do": 315,
	"./es-do.js": 315,
	"./es-us": 316,
	"./es-us.js": 316,
	"./es.js": 317,
	"./et": 318,
	"./et.js": 318,
	"./eu": 319,
	"./eu.js": 319,
	"./fa": 320,
	"./fa.js": 320,
	"./fi": 321,
	"./fi.js": 321,
	"./fo": 322,
	"./fo.js": 322,
	"./fr": 325,
	"./fr-ca": 323,
	"./fr-ca.js": 323,
	"./fr-ch": 324,
	"./fr-ch.js": 324,
	"./fr.js": 325,
	"./fy": 326,
	"./fy.js": 326,
	"./ga": 327,
	"./ga.js": 327,
	"./gd": 328,
	"./gd.js": 328,
	"./gl": 329,
	"./gl.js": 329,
	"./gom-latn": 330,
	"./gom-latn.js": 330,
	"./gu": 331,
	"./gu.js": 331,
	"./he": 332,
	"./he.js": 332,
	"./hi": 333,
	"./hi.js": 333,
	"./hr": 334,
	"./hr.js": 334,
	"./hu": 335,
	"./hu.js": 335,
	"./hy-am": 336,
	"./hy-am.js": 336,
	"./id": 337,
	"./id.js": 337,
	"./is": 338,
	"./is.js": 338,
	"./it": 340,
	"./it-ch": 339,
	"./it-ch.js": 339,
	"./it.js": 340,
	"./ja": 341,
	"./ja.js": 341,
	"./jv": 342,
	"./jv.js": 342,
	"./ka": 343,
	"./ka.js": 343,
	"./kk": 344,
	"./kk.js": 344,
	"./km": 345,
	"./km.js": 345,
	"./kn": 346,
	"./kn.js": 346,
	"./ko": 347,
	"./ko.js": 347,
	"./ku": 348,
	"./ku.js": 348,
	"./ky": 349,
	"./ky.js": 349,
	"./lb": 350,
	"./lb.js": 350,
	"./lo": 351,
	"./lo.js": 351,
	"./lt": 352,
	"./lt.js": 352,
	"./lv": 353,
	"./lv.js": 353,
	"./me": 354,
	"./me.js": 354,
	"./mi": 355,
	"./mi.js": 355,
	"./mk": 356,
	"./mk.js": 356,
	"./ml": 357,
	"./ml.js": 357,
	"./mn": 358,
	"./mn.js": 358,
	"./mr": 359,
	"./mr.js": 359,
	"./ms": 361,
	"./ms-my": 360,
	"./ms-my.js": 360,
	"./ms.js": 361,
	"./mt": 362,
	"./mt.js": 362,
	"./my": 363,
	"./my.js": 363,
	"./nb": 364,
	"./nb.js": 364,
	"./ne": 365,
	"./ne.js": 365,
	"./nl": 367,
	"./nl-be": 366,
	"./nl-be.js": 366,
	"./nl.js": 367,
	"./nn": 368,
	"./nn.js": 368,
	"./pa-in": 369,
	"./pa-in.js": 369,
	"./pl": 370,
	"./pl.js": 370,
	"./pt": 372,
	"./pt-br": 371,
	"./pt-br.js": 371,
	"./pt.js": 372,
	"./ro": 373,
	"./ro.js": 373,
	"./ru": 374,
	"./ru.js": 374,
	"./sd": 375,
	"./sd.js": 375,
	"./se": 376,
	"./se.js": 376,
	"./si": 377,
	"./si.js": 377,
	"./sk": 378,
	"./sk.js": 378,
	"./sl": 379,
	"./sl.js": 379,
	"./sq": 380,
	"./sq.js": 380,
	"./sr": 382,
	"./sr-cyrl": 381,
	"./sr-cyrl.js": 381,
	"./sr.js": 382,
	"./ss": 383,
	"./ss.js": 383,
	"./sv": 384,
	"./sv.js": 384,
	"./sw": 385,
	"./sw.js": 385,
	"./ta": 386,
	"./ta.js": 386,
	"./te": 387,
	"./te.js": 387,
	"./tet": 388,
	"./tet.js": 388,
	"./tg": 389,
	"./tg.js": 389,
	"./th": 390,
	"./th.js": 390,
	"./tl-ph": 391,
	"./tl-ph.js": 391,
	"./tlh": 392,
	"./tlh.js": 392,
	"./tr": 393,
	"./tr.js": 393,
	"./tzl": 394,
	"./tzl.js": 394,
	"./tzm": 396,
	"./tzm-latn": 395,
	"./tzm-latn.js": 395,
	"./tzm.js": 396,
	"./ug-cn": 397,
	"./ug-cn.js": 397,
	"./uk": 398,
	"./uk.js": 398,
	"./ur": 399,
	"./ur.js": 399,
	"./uz": 401,
	"./uz-latn": 400,
	"./uz-latn.js": 400,
	"./uz.js": 401,
	"./vi": 402,
	"./vi.js": 402,
	"./x-pseudo": 403,
	"./x-pseudo.js": 403,
	"./yo": 404,
	"./yo.js": 404,
	"./zh-cn": 405,
	"./zh-cn.js": 405,
	"./zh-hk": 406,
	"./zh-hk.js": 406,
	"./zh-tw": 407,
	"./zh-tw.js": 407
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
webpackContext.id = 528;

/***/ }),

/***/ 532:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAYAAAA/mZ5CAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAFw1JREFUeNrtXWtwFNeVbknFGjAYiFNlkh+2Y/CLYIRH3T2ywFawyctASFLlHwlxsFP7czf707EdNhvHscvYPxy8xK6CQFIVBwTGL8APjI0xD82MBOIN5Wwgm+AEJIxACAnQo/c7PT1aATPS9Ex339Pd51R9jNBjpvve8/W597yupon4KmseekhLmea1acP4MjAlbZoP4PUR4ElgCf7fAHwANAN/Bv6B75/B33Tj6x6g30GP/T38zP6d7O82O3/bYL9X9j0X4v/325+Fz6TPpmsQEQmVZHR9LJTXtMlimi8AG4F9jvJfBKyAcNH5zH24ng14fZ6uia4NGCszJcJCmmtqKqCYRJrb8fojKOpSoAnoAC45VsRihn7n2jqca12Ka1/g3MNYoEJmVsR/8iQSlVC6W6GADwN/APYHbGX8tF50L7+nhwLucTIsa6XMuIgn0pRIaGldHw3l0qFcv0hln+JnmVobL60W3WPGuWe699GNyaQohIg7AXFGpgyjztnj7I84cYohFo3B8zQmINRI0RCRgoKnbiUIdDPwc2BvOus1swSXgcZkD8bqSbzeRGMmmiOibamv1xpNcwKU4vvAuxHZ7wS5r3oXZPoeMJ7GUiSebuqJsDyPQxmOAH1CjJLRS2MIMv0MmCiaFQ/yVGGyp2HiX3ZcwEIEb9GRorE1jLvwWiUaFzW3dTbmUwP8CZN9ThQ+EEK9mjKMxM7aWolNRcCBUAXyVON1HSa3SxQ8cJzH+K+lVUBjMikWKmxiZV3Yd2AiV9iTKQqtGp0g0+/Sun67JerJXz6dPJm8cF/EpD2LyTslCswObZibZ0Co6w9MmSIKy1GwdBiFiXoU+F9RWPb4KwhFGfCjRHOZCCaDrNA0TMxHTtmBKGo40IO52wxMxdyJIit2JkwAnhNHQqjRBTI9C4wXjQ6eQBVAvZNEKsoYDWRApvu219WJuzyQvZBpjkvThtU0L4jyRTKX7+mUYYwTTfd3P3Q3BnpnzLOx45BtvgNzPV003nsCjcDg/ivwuShabHAKS/efYAUyQhjgBYl0fQKItNJJjhQFi1lCLMi0gpxKwoQSZff06Voq2wknJQoVezSCTHeSToi488pVYvDmUSRclEjgoBV6MVe8ekUKlTrACv2HZGkLCmSV/1QSYId3bV+Lwfpv8coJhvHqLaGmNMKYQk4F01wj1aqCItAHy7QalkmyIa5wb0/EwHwilkjg0jJthd7cIAwiEpnmJAxGWhRDUCLIq3tLbAlkZUl0M3BIlEFQJg5iVXOTFUsSZU9mEBIJvCOTad5pxWw5J5ZI4Jtlis2eSEgk8NkyRXvP1JhMThTHgiAIB0RkvXlOnOgTmWRBQNgauTiTk7GwRuJEgiDjTBS0jUwGhJ07l037kYwFQeAZEJRORDoY/izubAKqWCKBOstkGP/elEiEM2ucakecUgjJ4hZwyBqfE8p6plQ24Cr1RAI29UzYq98RPg+dVLYK+GFnaPrn4UL/xemxIBMnYAdq5h+KhipOtx9pVCJg21AFD/pHue+L7paWWYIwtPqic7O4urrHOc0bZaJijMyMGdbub37TSieT3K91e0bXr+NGogqnjTDfeBEm9n8WLbK6jh61Wt9+22r+2tdE8T1Gy5w5VkdLi3Xp9Gnr76+8YmVqa7lX2D7NqisRLqg+zbkXNyb0L089ZfVdvGjl5PTWrdau2bOFAB5hz/z5VuehQwPj29/XZx1ftszK1NVxvu5uGIF7uVijCdxPhfjLL39p9XV1WZdJf7/V/sknVtO99woRygQt5ToPH7aulP6eHptMzK8/o9wlTod8OecT8bVEIFF/b69VSIhMYpm8s0T5hL1lMoxnlB52Riflpbke8oU9kb2cu9ISXfXY7LeXeU319UIMt5boW9+yOg8etIaTAcvE1wHRBSJ9VVWR3ijnuEmeJCJLdOmSVazYe6YHHhCCFOtYmDevKBINfmCxtkyGsRn6HOyZtnR6eDp78HEPRxIdJUvU3W25ErJMH39sNc+aJUQpwjt3bv9+y63kLFPmnns43hedabuwuaYm0CXdF9McTw/PLecuXLBKFbJMQibvSTRAJuxXGZPpGMh0fWCttGACn2Vricog0QCZYJlkmZeHRHPnWuf27St7fAfIxHCZB93+dVBpQHfYKRYM90Sul3PigHDl4i7HEoXIAdGGFddtfseMqGx8BcdgqxvHgisHhLjGs5bIQxJxd0BAz5djiVflZ9yoGh90nn2w1cOJjnvQdtfXv+4PiXgHbTtBpmm+kKi5pqYCb74uTMFWrySuQVuv9kTFCDvLZBhrt82cWeGHNaphE3wtNtjqoWWyvXkxSnS190R79lhByYBrnE+i63nofML7llqG8Scuk0xZ3IMTUIMSm0z33x99Ej34oNURIIkGJ7r+bckSTnulV8kv4KWTgVKBOrjcIJVCKJFc0DbCZNr97W/bpRCqpOvYMVbdh2BApnpZJvEyp8luXb9e2URHeZlHyzmVJLKo9GL5cm4evN96FTeayMkaEUiJSZlJqVVJ1HLz7OXc7t3qnk+9vdY/V63imPHQAQ6U15B/S309ORkeZ+mWnT3bat+2TallioprvBkPBKWWCHJi9WqraeZMrp2HHqP80nJy6ugEiSNcFYCU2CaTQssUdte4bYkUkogs0YmGBu49Hg6ndX18OXuj76eZN7/nYJnsdKL77gtfsBVjp3I5R2NHJAqBVaf2ct8tuQE+8G4YFIJy4tq3b1e6NGkP2Z7J9s7t2qWOQ3191ok1a7hmgecL0G7EXqmylAAsnfN6MUxPV+WWKST1TLu+8Q3rbHOzUu8ckYjrnqgAiAs3lkKkn4dx09y+Y4dSy8Q9aMuCRGvX2v3vQrenNIwn3JJoJP5wb1g9UMrJRJaJ4TKPeiyczWTULufCSqIsWsCNa9zEjuqo51eYM5bP7Nyp3gHBqJ6JiH22qUnpmJx87bWwhwu6wY3aolts4Q9eCH1sBHsVpWRiVM/EwRKdXLcuPI6FoZd3i4s6sIwOr8Uf7I9ELQ32A2dSKfVBW4WbasoCUWqJICdffz1KNV37QKZRxVgkPR2hM19peaWUTAqDtpQ7p9wSvfGGXTsWoZxEOi29phgi/VfkqjzJMjU2xirRlfZEqq2xbYlCGKguYnm3aOgq2ESiknsf79AqVs41HoA3T/mSFpaoFZYoxN654ZAmrgyVzXArfulsZPsPMNgz+V3PZHssVVpfh0QR73NxFlyZNBSRHo7S/qhgQDKdVm+ZfMiAoBQl1UvY1jffjEOzmH4s7xYUbG6CH/4hFp1xsPHnQCYvc/Nsa6vS3U+W6K23orycu7K0YmVLdXVFPifD2Ki4vYuOrSgOUNqucQ824+TEUGqJIHQKYiQdC0O7wcfkW9bdjh9eilO7KVpeqY6xlOsaZ2GJ1q+PRrDVZRJrKl9HVrDrR7FsxcvAMpVaz0SWqF1xKlQbSBTj1s4/zGeRlsa1m6idh6YyIzpnmVzsmcg7pzQ51yER8zNi/Y4nvZSvGrYptgPCxTIVWc9E7nOlhYxiiXLIXNkAciy3TkGxrNUpop7JLhNRXMDYtmGDHGLtdBjKDHY4YFlnxs3RMGR+mmoyFahnsquAsQRUSqKNG+PmnRsKl8AdY7Cj4ZGoB2Jd9zNQ3BTEtkyDlk62Y0G1JXrnHVnOXZ3AunDw/ugFGZSrN/NKyTSonomFJSISxSTY6hKLbRKteeghItJGGRA+zeSvDNqq7t136r33YnUSh8sMh/WWsz+61o7SyqAU9JCdU0kmlQLyEoliGGx1g73g0GjaH30Z//mHDEhh0Eneqlv6qiKRWKJh8Rk49CUi0pQw9a9T6c2LjWUiEr3/vri4i8MF4hDtjx6QwQhHn2yxRGz3SbNyrm8ZEBdkOrd3b3RJtGmTuLjd48dEpCdlINynE0WOTDkSSbC1FIv0BBFpiQxGCQ4IOvF7//7I8OjzzZtD0becKZF+Q3ukBhmM0nPzQk8mWCIiUcga2nPDKiLSBzIQZVimefNCTSbbEsXgpHafsYmI1CwD4YFr/MCB8FmiDz8UF7dX5RT4588yEDGzTA6JxBJ5hk81yWrwkEzkGudumYhEH30kcSKPsxvIa3dGBsJjbx5XMuUskXjnvMZpSlrtloHwfpnXefAgOx6d3rJFlnP+oJuWdj0yEP5kQLAhExUKgkSSseBfpawmlbH+Yc/8+Vbn4cPqLVFAzfvjXCkrRPKbSEeOKCdSu8ftkQX5iSRLO7+WdocO8VnaUUMVWdr5t7QTZ4MPzobvfIcPiQYv8Xw+UibezgZxf8fCYzfY6SDubx/c3xKQ9TaGxNES5V3mCZk8DshKipB3jgWulqhATEkcEN6mCEnSqgcNJTm4ud1apnZYJink8y5pVcooyrVE3JdzwzggxDJ5U0YhhX1llJyHzhLls0x0PpOUU5RZ2Cel5qHOWpCgLYtS8xel+Ump3rkQORZcucalvKLk5icLZTBcxolCvCeSoK1f7bhM834ZCBcZC1GzRIUsk5DJDWZJy+JiSTRnTqQtkeTmlQynZbE00Y+8i1tc477iuN1EX451Gb5DUJS8cyW5xqXn3VDIHutCB43hiw0yIAzriZwjMO3T+hQeNCau8SE9dtmDxpyjL5+XQeFXT2Rv+qHApMS0zFK9Z5JS9bxYLIcxc60nyvVYGJQHRxt/m0wKLVOh09bjXBl72WHM+I9JVX4yMAzqiYZo3kjfI4IpI5PUM12Ji+COMZhIY/HNDslYmKvcEtnNG4dQVPoZh2WekMnGWXBnjDZY8M0mqSdSbImooX0RKToDZFK5zJN6pmz5xJWCby6VeiJ14rYXNykxedOknkmpx+6lq4lkGAski1udJSolVkNKTO5x1Q6I2Fomw/jBVUQCu26PW6oQh3qics8nYmGZ4lnPRKlBt+azSORw2C+WKEBL9MEHnmQNkBK3K7ZMMQza7gVnxuQjUgV++HvxzgVDIjr42EvPF4ugbYzqmbCCW9FcU6PlFfzw4agHZjkEW0+9/74vm3RSYhZB2+iXYFAgdoFWSPDDyeQbl3oiH0n03nu+ptrYQVuVZIpHPdMZrOAmFSRSRtcryTcu9UT+kSiIpY9NJsUOCNsyRXeZl9pTXV2pDSWwSr+QeiKfLFGAni0uy7xIOiAMY5E2nIBIepT2SRxc3EFZoryucSrBkHomT/dHIFKiGCKNjoobnCzRecX1RESiTF2dsjEgJZZ6Js8L+UYNSySwLRL1SXY9keI4Uds777DYJ+yaPZtHPVME0olAoueII0VJyjDq0iE+N4lDsJVI1DRjBpsxIU+hpBOVjS4QqVYrVhqTyZH4oz3Sd65EEm3cyLKatJlL0Da8JRgtGV2/RnMjYN6TQqISScR4CSP1TGUt6x7X3AqYd3OYklg5uLjb1q8PRfKm1DOVVg2LvdGNrokE9lFw9l1xLLggUYiag3DIGg+ZA2IDiFSplSIg0/fwBr3iWBhC+vpsEql0cZfsgJB6pmLRCy7M10oV/PF4vMkRCbYWltaQWaJ8rnEWQVveS+LDxIWSibSlvp7iSj8TS5TfErW+/baVueee0MdG7HomCdoO5WR47MCUKVpZgjeZyK3DEIcE1Na33opUvwKpZxqyU9ANmheCN3uZy41lZsywOlpa1FqiN9+0ryNqyZh2oqviPdPnmzZZmdpaTgmqSzWvBG92FxerRE3tL50+rY5Eb7wR6f4EquuZejC3NMdcrBF0f6pnRIJpqwJeZXFzyaT191desfqh1IEv5yJOIuX1TDTGr79uzzETa/THnbW1VZqXkjKMGrz5eRbLO5j+48uWWf09PcHML0h7EhMcxeUcm3omJ4zAqOTiPIzH3ZrXYjdHMYy1bPZKdXU2mYIQIlEcGyEGWc/UtmEDqzACSNTQUl1dofkhePNp+JBOTpPtp2XKWaI0p81v1FzjZIlAImZhhE7yC2h+SWMyWYUPWMFpogcsk9cTjfc7uW5dHBsf5q9n8mPPRKlVIBG7s2oNYzlQpfkp2CtRR9Y2VjeOzamXlsm2RK+9FolgK9t6JodEDPedrXk7qHotVnaJ9wy3ic5Zpv7e3rKXGifWrpVzU/0M2uaSfDnuOw3jV1pQgg+7Hh/6V3ZkggUpi0wOieLknSupBKOcZZ5jiTgumWEgjmL78oXAiER5R/hQOi6zhy2ZXC7zaDl3Ys0aIZGf9Uy8a7Z6qNMw5ZcGKrBKo4APOU60awcEfo9IJMs5l8s8N5YpZ4n4hhE2QZ9HaiqE0ieoIQTLgSnSAUHLwBMNDeJY8NMBkXNx87X259O6PkVTJTCFRKZnuU50MUFbIpG4uP2tZ2Lp4r58b/R0ptgWWz66w8dz7xeezzLZlmj1aj55XVEM2vIMtl7VxxvGYJzGQXAh93HugzfgGs8luuL1n6tWyZ7Iz6BtOPpYdEN3Z2pcZHtdHR1S9jTnnuGU6Pq3JUus7mPHrM9WrpQ9kU+JrlTweOH4cdvaM39Qka4+RTmkGifBEm8cLmyHKJQgJMvlbRldv07jKGD3dFzgKVEmAXO0QVenaZwlZZo/4d7CSxBrkG4+onGXRtMcwS1DXCAYhOVNNTUjtDAIrNIEXHCjTJqAGXaU1Z9OEZnutFPSZfIEPHASK6U7tLBJcyJBZJrLrSeeIJboAIke3D19uhZKofgSyPTTdITOpBWEDn3QwX9rTCYrtDCLXZ5umkvohmRSBUGTCHgROlipRUHSuj4aT4XVYpkEgWYuGMYqOlxci5LgqUDJrVtlggUBlYx/nNH18VoUhZqR29m2MtECf0nUCNygRVlwg7fgZg/KhAt8wgHo2Fe0OAhu9CYhk8AnEt2kxUWopVc6G7AVMgm8IxF0ytJiJpZYJoFYIg+XeaZ5izggBGU6Fr6iiQx487ZKnEngMk70ceS9c6XEmZygrWRACIrJWFgV2TiRFxkQTjqRWCbBkGk/KcMYLYwZJjfPSXSVrHHBVVncTgJqpTClCGlKJCqcEgypZxL8fz2Rrs9h1/WHu1DtiFMcKJW2gh1UlBfaeiIWSz3TJCfECmmoEtNGJYaxPHTl4YzJRA1VHpVWXzFrmWWaj2R0fYQwwPscvWoM7nbx6kU8PmSa29j3nQu7UHdMpz1ytyhd5NDttBG+TjQ9AHF6QdybZn4KhsAV6FSImeKVU7PUGw/QwdBdooihxXk8FH/N5miVGOfpUQP/qZiIzWmGZ9oKCoLmahOdlKf8kC+Rywg1ChOzEDgmSsoeR+ngY2VntooMLXTaOibnenupkHWfitLyQivm51eNpvmFwE8PFyk59nQbCPU7TF6nKLBydIJAy4BbRTPDSKZsAuw0TOBa2tSKQitxJDRg/O/K6HqVaGTIZWdtbUXKMBKY1FclqzwQnAV5/ojxvrululrc2RF0SFTR0xGvvxVC+UagpcBUPLzEAsWCVIZxAwj1GCb/sCTElplYijGksaSWAaJZMZRPJ0+mqlwK6n4X2AiFuCjEKBo0VhuA+RQYJ4+piAhZqEooxY1QiifwZG2RXL68oAySFozP4xgnGiupVBUpLFCQa0CsWrwuhuLsi3m2Od37XpDnOaA2o+vXiIaIuBKqyASZRkGBavD6n1CotL2hjjax6N7OOEmki4AEjUFzTY0ohIg30pxIVIJUk6BYC/C60rFWFyOy39nrVCL/EPc3aU91tSzbRPwXio9A4cZA+W5zlO8lp6yD3OqXmFqtfoc0ZFUzuPaXcN0/sO8B9yIxHxE20phMErmMVDaBdjFe19PTHvgMuBAgaeizjjuWZr1zLQudaxsjMyUSKqHDAuj4RTzxvwRMwdezoNQ/xit5B39DHUPtcoKsNfvUIdxpx2uYs2z9ztfdzs8+c3434/wtHfH4Ir0nvXeaPgOfRZ9Jn23JNPgu/wflo4zsHOVQUQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wMi0xM1QyMTo1NzowNS0wNzowMHO/Rt8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMDItMTNUMjE6NTc6MDUtMDc6MDAC4v5jAAAAAElFTkSuQmCC"

/***/ }),

/***/ 533:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSItNDc0OS40OCAtNTAyMCAzNS4wMzYgMzUuMDM2Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDpub25lO30uYntmaWxsOiM0ZThjZmY7fS5je2NsaXAtcGF0aDp1cmwoI2EpO30uZHtmaWxsOiNmZmY7fS5le2ZpbGw6I2VmZjRmOTt9PC9zdHlsZT48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGNsYXNzPSJhIiBkPSJNMC0zOTkuNDc5SDE3LjU1NXYxNy41NTVIMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMzk5LjQ3OSkiLz48L2NsaXBQYXRoPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDg4NiAtNTA3NSkiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0NS4xMyA2NCkiPjxnIGNsYXNzPSJjIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIj48cGF0aCBjbGFzcz0iZCIgZD0iTS0zODEuOTI0LTE5MC45NjJhOC43NzgsOC43NzgsMCwwLDAtOC43NzgtOC43NzgsOC43NzgsOC43NzgsMCwwLDAtOC43NzgsOC43NzgsOC43NDUsOC43NDUsMCwwLDAsMi4yNiw1Ljg3OXYxLjQ0MmMwLC44LjQ5MiwxLjQ1NywxLjEsMS40NTdoNS44M2EuODQzLjg0MywwLDAsMCwuMTgzLS4wMiw4Ljc3OCw4Ljc3OCwwLDAsMCw4LjE4NC04Ljc1NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzk5LjQ3OSAxOTkuNzQpIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiPjxwYXRoIGNsYXNzPSJlIiBkPSJNLTY4Ljc2My0xOTQuMDc5YTkuMjkyLDkuMjkyLDAsMCwxLDYuMzgtOC44ODhjLS4yNTItLjAyMi0uNTA2LS4wMzMtLjc2My0uMDMzYTguNzc0LDguNzc0LDAsMCwwLTguNzc4LDguNzc4QTkuNTA4LDkuNTA4LDAsMCwwLTY5LjctMTg4LjNjLjAwNSwwLDAsLjAwOSwwLC4wMS0uMzExLjM1Mi0xLjkyNCwyLjg0OS4wMjEsMi44NDloMi4yNWMtMS4yMy0uMDIyLDEuMjYzLTIuMTA3LjI2OS0zLjQ5NGE4LjIyNSw4LjIyNSwwLDAsMS0xLjYtNS4xNDEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcxLjkyNCAyMDMpIi8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(510)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(445),
  /* template */
  __webpack_require__(563),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(522)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(446),
  /* template */
  __webpack_require__(578),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(526)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(447),
  /* template */
  __webpack_require__(582),
  /* scopeId */
  "data-v-c97a0a38",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(520)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(448),
  /* template */
  __webpack_require__(573),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(525)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(449),
  /* template */
  __webpack_require__(581),
  /* scopeId */
  "data-v-bf9cc140",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(450),
  /* template */
  __webpack_require__(576),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(527)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(451),
  /* template */
  __webpack_require__(584),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(517)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(452),
  /* template */
  __webpack_require__(570),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(514)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(453),
  /* template */
  __webpack_require__(567),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(509)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(454),
  /* template */
  __webpack_require__(562),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(455),
  /* template */
  __webpack_require__(575),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(518)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(456),
  /* template */
  __webpack_require__(571),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(523)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(457),
  /* template */
  __webpack_require__(579),
  /* scopeId */
  "data-v-7928bd28",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(513)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(458),
  /* template */
  __webpack_require__(566),
  /* scopeId */
  "data-v-2b5746b1",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(459),
  /* template */
  __webpack_require__(559),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(512)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(460),
  /* template */
  __webpack_require__(565),
  /* scopeId */
  "data-v-255ed4e3",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(521)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(461),
  /* template */
  __webpack_require__(577),
  /* scopeId */
  "data-v-73e363a8",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(516)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(462),
  /* template */
  __webpack_require__(569),
  /* scopeId */
  "data-v-3747d669",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(524)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(464),
  /* template */
  __webpack_require__(580),
  /* scopeId */
  "data-v-7ed90bfa",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(465),
  /* template */
  __webpack_require__(583),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(466),
  /* template */
  __webpack_require__(574),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(515)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(467),
  /* template */
  __webpack_require__(568),
  /* scopeId */
  "data-v-33e66800",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(519)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(468),
  /* template */
  __webpack_require__(572),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(508)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(469),
  /* template */
  __webpack_require__(561),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(507)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(470),
  /* template */
  __webpack_require__(560),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 559:
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

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(463),
  /* template */
  __webpack_require__(585),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 560:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "background": "#f5fbff"
    }
  }, [_vm._m(0), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "container",
    attrs: {
      "id": "view"
    }
  }, [_c('div', {
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
  })], 1)])])])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('notifications', {
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
  }), _vm._v(" "), _c('p', [_vm._v("\n              This website / application is made by team EnSofia. It is our\n              humble effort to contribute and help the public to aid the\n              tremendous efforts and steps taken by many organizations to\n              flatten the curve.\n            ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-4 col-md-4"
  }, [_c('div', {
    staticClass: "single_service"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/ensofia/cv19/website/img/about/correct1.png",
      "width": "50"
    }
  }), _vm._v(" "), _c('p', [_c('strong', [_vm._v("What it is?")]), _vm._v("This website / application is built\n              to increase awareness and share information published by the US\n              – Centers for Disease Control and Prevention available at\n              CDC.gov\n            ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('br')])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-4 col-md-4"
  }, [_c('div', {
    staticClass: "single_service"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/ensofia/cv19/website/img/about/wrong.png",
      "width": "50"
    }
  }), _vm._v(" "), _c('p', [_c('strong', [_vm._v("What it is NOT?")]), _vm._v(" This is not diagnostic or\n              medical site. You should not use this website or its\n              communications for any medical advice. If you have medical\n              questions, contact your doctor. If you have an emergency call\n              911.\n            ")])])])])])])
}]}

/***/ }),

/***/ 561:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('b-container', {
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
    }]),
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
      "sm": "5",
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
      "sm": "7",
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
      "small": "",
      "stacked": "md",
      "items": _vm.users,
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
        return [_c('b-card', [_c('ul', _vm._l((row.item.item), function(value, key) {
          return _c('li', {
            key: key
          }, [_vm._v(_vm._s(key) + ": " + _vm._s(value))])
        }), 0)])]
      }
    }])
  }), _vm._v(" "), _c('b-modal', {
    ref: "smsModal",
    attrs: {
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
  }, [_vm._v("sendMessage")])]), _vm._v(" "), _c('b-modal', {
    ref: "callModal",
    attrs: {
      "no-close-on-backdrop": true,
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
  })])])]), _vm._v(" "), _c('notifications', {
    attrs: {
      "position": "top center"
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 562:
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
    staticClass: "col col-md-8"
  }, [_c('b-form-checkbox', {
    attrs: {
      "name": "check-button",
      "value": 1,
      "size": "lg",
      "unchecked-value": 0,
      "switch": ""
    },
    model: {
      value: (_vm.form.doctor),
      callback: function($$v) {
        _vm.$set(_vm.form, "doctor", $$v)
      },
      expression: "form.doctor"
    }
  })], 1)]), _vm._v(" "), (_vm.form.doctor == 0) ? _c('div', {
    staticClass: "row"
  }, [_vm._m(5), _vm._v("\n               \n              "), _c('b-form-spinbutton', {
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
  }, [_vm._m(6), _vm._v("\n               \n              "), _c('div', {
    staticClass: "form-group col col-9 datepicker"
  }, [_c('datepicker', {
    staticClass: "form-control col col-9",
    class: {
      'is-invalid': _vm.submitted && _vm.$v.form.birthday.$error,
    },
    attrs: {
      "disabledDates": _vm.state.disabledDates,
      "minimumView": 'day',
      "maximumView": 'year',
      "initialView": 'year',
      "id": "birthday-datepicker",
      "placeholder": "Date of Birth *",
      "aria-required": "required"
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
  }, [_vm._v("Date Of Birth is required")]) : _vm._e()])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_vm._m(7), _vm._v("\n               \n              "), _c('div', {
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
  }, [_vm._m(8), _vm._v("\n               \n              "), _c('div', {
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
  }, [_vm._m(9), _vm._v("\n               \n              "), _c('div', {
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
  }, [_c('p', [_vm._v("Doctor")])])
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

/***/ 563:
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
      "src": __webpack_require__(533)
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "sc-open-icon",
    attrs: {
      "src": __webpack_require__(532)
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

/***/ 564:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('router-view')
},staticRenderFns: []}

/***/ }),

/***/ 565:
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

/***/ 566:
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

/***/ 567:
/***/ (function(module, exports) {

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
    staticClass: "col-xl-6 col-md-6"
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
  }), _vm._v(" "), _c('strong', [_vm._v("(408) 413-4555")])]) : _vm._e()])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "main-header-area",
    attrs: {
      "id": "sticky-header"
    }
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row align-items-center"
  }, [_c('div', {
    staticClass: "col-md-2"
  }, [_c('div', {
    staticClass: "logo"
  }, [_c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('img', {
    staticClass: "logoImage",
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/ensofia/cv19/website/img/CV19.APP2.png",
      "alt": ""
    }
  })])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "col-md-10"
  }, [_c('div', {
    staticClass: "main-menu d-none d-lg-block"
  }, [_c('nav', [_c('ul', {
    attrs: {
      "id": "navigation"
    }
  }, [_c('li', [_c('router-link', {
    staticClass: "p-3 text-dark",
    attrs: {
      "to": ""
    }
  }, [_vm._v("Clinic Dashboard")])], 1), _vm._v(" "), _vm._m(2), _vm._v(" "), (_vm.$store.state.isLogin) ? _c('li', {
    staticClass: "rightFloat"
  }, [_c('a', {
    staticClass: "btn btn-info newStyle",
    attrs: {
      "href": "/"
    },
    on: {
      "click": _vm.signOut
    }
  }, [_vm._v("Logout")])]) : _vm._e(), _vm._v(" "), (!_vm.$store.state.isLogin) ? _c('li', {
    staticClass: "rightFloat"
  }, [_c('router-link', {
    staticClass: "btn btn-info newStyle",
    attrs: {
      "to": "/login"
    }
  }, [_vm._v("Login")])], 1) : _vm._e(), _vm._v(" "), (!_vm.$store.state.isLogin) ? _c('li', {
    staticClass: "rightFloat"
  }, [_c('router-link', {
    staticClass: "btn btn-info newStyle",
    attrs: {
      "to": "/disclamer"
    }
  }, [_vm._v("Register")])], 1) : _vm._e()])])])]), _vm._v(" "), _vm._m(3)])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-xl-6 col-md-6"
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

/***/ 568:
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

/***/ 569:
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

/***/ 570:
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
  }), _vm._v(" "), (_vm.submitted && _vm.$v.form.pin.$error) ? _c('div', {
    staticClass: "invalid-feedback"
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
  }, [_vm._v("Login")])], 1)]), _vm._v(" "), (_vm.userexist) ? _c('div', [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    attrs: {
      "for": "password"
    }
  }, [_vm._v("Code")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.form.otp),
      expression: "form.otp"
    }],
    staticClass: "form-control",
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
    staticClass: "btn btn-info btn-sm",
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
    staticClass: "btn btn-info btn-sm",
    attrs: {
      "loading": _vm.isLoadingVerify,
      "styled": _vm.isStyled
    },
    nativeOn: {
      "click": function($event) {
        return _vm.login2($event)
      }
    }
  }, [_vm._v("Verify")]) : _vm._e()], 1) : _vm._e()])])])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('notifications', {
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
}]}

/***/ }),

/***/ 571:
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

/***/ 572:
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

/***/ 573:
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
  }, [_vm._v(_vm._s(_vm.advices[0].key))]), _vm._v(" "), _c('p', {
    staticClass: "invisible",
    attrs: {
      "id": "_t1"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.advices[0].text)
    }
  }, [_vm._v(_vm._s(_vm.advices[0].text))])])])])])])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v(_vm._s(_vm.advices[1].key))]), _vm._v(" "), _c('p', {
    staticClass: "invisible",
    attrs: {
      "id": "_t2"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.advices[1].text)
    }
  }, [_vm._v(_vm._s(_vm.advices[1].text))])])])])])])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v(_vm._s(_vm.advices[2].key))]), _vm._v(" "), _c('p', {
    staticClass: "invisible",
    attrs: {
      "id": "_t3"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.advices[2].text)
    }
  }, [_vm._v(_vm._s(_vm.advices[2].text))])])])])])])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v(_vm._s(_vm.advices[3].key))]), _vm._v(" "), _c('p', {
    staticClass: "invisible",
    attrs: {
      "id": "_t4"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.advices[3].text)
    }
  }, [_vm._v(_vm._s(_vm.advices[3].text))])])])])])])])])])])])])]), _vm._v(" "), _c('chatbot'), _vm._v(" "), _c('div', {
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

/***/ 574:
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

/***/ 575:
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

/***/ 576:
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

/***/ 577:
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

/***/ 578:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    attrs: {
      "id": "header"
    }
  })
},staticRenderFns: []}

/***/ }),

/***/ 579:
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

/***/ 580:
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

/***/ 581:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-content-container custom-container container-fluid"
  }, [_c('navbar'), _vm._v(" "), _c('Header'), _vm._v(" "), _c('section', {
    staticClass: "section-container"
  }, [_c('router-view')], 1), _vm._v(" "), _c('Footer')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 582:
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
  return _c('p', [_c('strong', [_vm._v("If you have symptoms :")]), _vm._v("\n                  the reports will help you understand\n                  "), _c('br'), _vm._v("how you may manage your care from home,\n                  "), _c('br'), _vm._v("steps to\n                  help prevent the spread of COVID-19 and other information\n                  "), _c('br'), _vm._v(" "), _c('strong', [_vm._v("If you have no symptoms:")]), _vm._v("\n                  the reports will help you understand\n                  "), _c('br'), _vm._v("what you might do to prevent getting infected and\n                  other information\n                ")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h3', [_c('span', [_vm._v("Stay Home")]), _vm._v(" "), _c('br'), _vm._v("Stay Safe\n                ")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("\n                  Let’s all help each other\n                  "), _c('br'), _vm._v("reserve care for those in need.\n                  "), _c('br'), _vm._v("Take the self\n                  assessment, call you doctor\n                  "), _c('br'), _vm._v("or healthcare provider,\n                  and look for guidelines from CDC.gov\n                ")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h3', [_c('span', [_vm._v("EnSofia is here ..")]), _vm._v(" "), _c('br'), _vm._v("To help you\n                ")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("\n                  This website is made by team EnSofia.\n                  "), _c('br'), _vm._v("It is our humble effort to contribute to our community\n                  and help the public,\n                  "), _c('br'), _vm._v("the health care providers and\n                  healthcare systems.\n                  "), _c('br'), _vm._v("It is based on CDC guildlines.\n                  "), _c('br'), _vm._v("Always refer to CDC.gov for more information\n                ")])
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
  }, [_c('p', [_vm._v("Register, Keep your PIN")])]), _vm._v("  \n      "), _c('div', {
    attrs: {
      "id": "circle1"
    }
  }, [_vm._v("2")]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "pointer2"
    }
  }, [_c('p', [_vm._v("Take self assessment")])]), _vm._v("  \n      "), _c('div', {
    attrs: {
      "id": "circle1"
    }
  }, [_vm._v("3")]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "pointer3"
    }
  }, [_c('p', [_vm._v("Login, Get verification code")])]), _vm._v("  \n      "), _c('div', {
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

/***/ 583:
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

/***/ 584:
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

/***/ 585:
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

/***/ 613:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[471]);
//# sourceMappingURL=app.81ef6addcb590697c0c0.js.map