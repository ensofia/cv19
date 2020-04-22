webpackJsonp([1],{

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const URL_PRODUCTION = "https://cv19.app:8446/app";
/* unused harmony export URL_PRODUCTION */

const URL_STAGE = "https://cv19.app:8449/app";
/* harmony export (immutable) */ __webpack_exports__["c"] = URL_STAGE;

const URL_LOCAL = "http://127.0.0.1:5000";
/* unused harmony export URL_LOCAL */

const URL = "https://cv19.app:8449/app";
/* harmony export (immutable) */ __webpack_exports__["a"] = URL;

const FORM_ID = "1";
/* harmony export (immutable) */ __webpack_exports__["b"] = FORM_ID;


/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_newCreate_survey__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_newCreate_survey___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__pages_newCreate_survey__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_view_survey__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_view_survey___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__pages_view_survey__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_save_survey__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_save_survey___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__pages_save_survey__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_TwilioEX__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_TwilioEX___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__pages_TwilioEX__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_resource__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Layout_HomePage__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Layout_HomePage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_Layout_HomePage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_clinic_all_clinic__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_clinic_all_clinic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_clinic_all_clinic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_form_all_form__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_form_all_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_form_all_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_form_create_form__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_form_create_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__components_form_create_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_clinic_create_clinic__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_clinic_create_clinic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__components_clinic_create_clinic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_clinic_edit_clinic__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_clinic_edit_clinic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__components_clinic_edit_clinic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_clinic_delete_clinic__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_clinic_delete_clinic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__components_clinic_delete_clinic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_authentication_Login__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_authentication_Login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__components_authentication_Login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_authentication_Register__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_authentication_Register___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__components_authentication_Register__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_authentication_RegisterPhone__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_authentication_RegisterPhone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__components_authentication_RegisterPhone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_authentication_Dashboard__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_authentication_Dashboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__components_authentication_Dashboard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_authentication_disclamer__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_authentication_disclamer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__components_authentication_disclamer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_authentication_DoctorApprove__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_authentication_DoctorApprove___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__components_authentication_DoctorApprove__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_user_all_doctors__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_user_all_doctors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__components_user_all_doctors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_user_delete_doctor__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_user_delete_doctor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__components_user_delete_doctor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_table__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__pages_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_Layout_layout__ = __webpack_require__(532);
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

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(507)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(440),
  /* template */
  __webpack_require__(558),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 440:
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

// import navbar from "./components/authentication/Navbar";

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "App",
  components: {
    // navbar,
  },
  mounted() {
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

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "voice",
  data() {
    return {
      messageList: [],
      audio: null,
      hideButton: true,
      typeMessagePlaceHolder: "Write text OR click mic to speak",
      showMic: true,

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
      context: {},
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
  },
  methods: {
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
            sampleRateHertz: 44100,
            // model: "command_and_search"
            model: "phone_call",
            use_enhanced: true
          },
          audio: {
            content: window.fileReader.result.split(",")[1]
          }
        };
        var googleCloudSpeechUrl = "https://speech.googleapis.com/v1p1beta1/speech:recognize?key=AIzaSyDKZjWQdLmfubzBc_Dv0hf6xIINJiO1fY0";
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post(googleCloudSpeechUrl, conf, {
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
      __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post("https://texttospeech.googleapis.com/v1/text:synthesize", {
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
    sendMessage() {
      // var msg = this.msgText;
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
        this.showMic = true;
        this.micIsOn = false;

        var self = this;
        __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post("https://cv19.app:8449/calendarcv02/send_bot_msg", {
          Text: textmsg,
          Context: this.context
        }).then(function (response) {
          var txtSpeak = "";
          for (var t in response.data.responseData.output.text) {
            if (response.data.responseData.output.text[t] != "") {
              txtSpeak += self.stripHtml(response.data.responseData.output.text[t]) + " " + "<br>";
            }
          }
          self.googleTTS(txtSpeak);

          self.messageList.push({
            author: "yours",
            data: {
              text: txtSpeak
            },
            type: "text"
          });
          self.context = response.data.responseData.context;

          console.log(response);

          setTimeout(function () {
            self.$refs.scrollList.scrollTop = self.$refs.scrollList.scrollHeight, 3000;
          });
        });
      }
    },
    stripHtml: function (html) {
      var temporalDivElement = document.createElement("div");
      temporalDivElement.innerHTML = html;
      return temporalDivElement.textContent || temporalDivElement.innerText || "";
    },
    closeChat() {
      this.isOpen = false;

      this.isChatOpenChat = false;
      this.muteSpeaker();
    }
  }
});

/***/ }),

/***/ 442:
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

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variables_js__ = __webpack_require__(19);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    this.fetchClinicData();
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

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Chat_chatbot__ = __webpack_require__(528);
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



function showForm(title, description) {
  alert("Amira");
  //Change the contents of the title
  document.getElementById("_h3").innerHTML = title;
  //And the description
  document.getElementById("_p").innerHTML = description;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  components: { chatbot: __WEBPACK_IMPORTED_MODULE_0__Chat_chatbot___default.a },

  data() {
    return {
      key: "",
      text: "",
      show: false,
      advices: [{
        key: "Message to users",
        short: "Team EnSofia built this application to help you understand the CDC ...",
        text: "Team EnSofia built this application to help you understand the CDC (Center for Disease Control) guidelines as they apply to you. Our team is advised by USA certified physicians and technologies. This app is NOT a substitute for professional medical advice, diagnosis, or treatment. Always consult a medical professional for serious symptoms or emergencies. You will be presented with CDC questions and upon submitting your response, you will receive an SMS with a code, and second SMS with a link. In order to read your customized report, you will need to log in using your mobile phone number, the code sent to you, and a PIN number you chose. You can download your report and use it when talking to your doctor or physician. Your privacy is very important to us - we are in the same boat. We will not ask for your name, but you can provide it in an optional field. We will never sell your individual data or use it. We only use the aggregate data from all users together. Your data is secure on our website and encrypted in our database. If you would like to donate to this cause, please <a href='https://ensofia.com/contact.html' target='_blank'>contact us</a>",
        show: true,
        image: "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/patient.jpg"
      }, {
        key: "Message to the healthcare system",
        short: "This system is offered free to any clinic that wants to use it ...",
        text: "This system is offered free to any clinic that wants to use it. We will ask for a donation to cover third party expenses, such as hosting and telephony charges. This system is part of a bigger platform; it can be used for your screening and you can customize the questions based on specifics that you choose. From the platform, you can obtain all of the data analytics to help you with your health population management. With this platform, you have all the tools to connect with customers and patients, as well as within and among your own staff via phone, video, SMS, and other methods. In addition, you can connect to your EHR via HL7 V2 or HL7 FHIR.",
        show: true,
        image: "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/clinic.png"
      }, {
        key: "Message to doctors and physicians",
        short: "If you would like to volunteer towards our efforts by analyzing aggregate data ...",
        text: "If you would like to volunteer towards our efforts by analyzing aggregate data that we provide or providing your clinic’s services to some users (you determine, when, how many etc.), please <a href='https://ensofia.com/contact.html' target='_blank'>contact us.</a>",
        show: true,
        image: "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/doctor.png"
      }, {
        key: "Message to providers and partners",
        short: "This system is provided for free to users and clinics, except for donations ...",
        text: "This system is provided for free to users and clinics, except for donations. We invite you to collaborate with us by sharing your resources with EnSofia. Together, we can offer your group’s services to a wider user’s base. This is also requested of technology providers and partners on a voluntary basis",
        show: true,
        image: "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/partner.jpg"
      }]
    };
  },
  methods: {
    changeShow(idx, key, text) {
      debugger;
      this.advices[idx].show = !this.advices[idx].show;
      this.show = this.advices[idx].show;
      this.key = key;
      this.text = text;
    }
  }
});

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Header__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_Navbar__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_Navbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__authentication_Navbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer__ = __webpack_require__(531);
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

/***/ 446:
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

/***/ 447:
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


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["a" /* mapGetters */])({
    user: "user"
  })),
  methods: {
    goToDashboard() {
      this.$router.push("table");
    }
  }
});

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_SBSAjax_js__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_notification__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_notification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_notification__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_tel_input__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__variables__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store__ = __webpack_require__(55);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VueTelInput: __WEBPACK_IMPORTED_MODULE_5_vue_tel_input__["a" /* VueTelInput */]
  },
  validations: {
    form: {
      phone: {
        required: __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__["required"],
        minLength: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__["minLength"])(12)
      },

      pin: { required: __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__["required"], integer: __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__["integer"], maxLength: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__["maxLength"])(4)
        // otp:{required}
      } }
  },
  data() {
    return {
      submitted: false,
      showWaring: true,
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
    window.localStorage.afterLogin = false;
    window.scrollTo(0, 100);
  },
  created: function () {
    this.initReCaptcha();
  },
  methods: {
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
      debugger;
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
            debugger;
            vm.setUserCode();
            vm.showWaring = false;
            // ...
            //route to set password !
          }).catch(function (error) {
            vm.showWaring = true;
            // User couldn't sign in (bad verification code?)
            // ...
          });
        } else {
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
      const axios = __webpack_require__(33).default;

      if (this.notifications) this.notifications = [];
      if (this.form.phone) __WEBPACK_IMPORTED_MODULE_1_vue__["default"].putInvoke("/user/" + vm.userId, { code: this.form.otp }, function (response) {
        vm.login2();
      });
    },
    login: function () {
      var formData = new FormData();
      let vm = this;
      const axios = __webpack_require__(33).default;
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

          if (!response.data.token) {
            localStorage.token = "";
          } else {
            localStorage.token = response.data.token;
            vm.$store.state.isLogin = window.localStorage.isLogin = true;
          }
          // debugger;
        } else {
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
      var formData = new FormData();
      let vm = this;
      const axios = __webpack_require__(33).default;
      if (this.notifications) this.notifications = [];
      __WEBPACK_IMPORTED_MODULE_1_vue__["default"].InvokeLogin("/login", { pin: vm.form.pin, phone: vm.form.phone, code: vm.form.otp }, function (response) {
        debugger;
        if (response.data != "") {
          console.log(response);

          window.localStorage.userId = response.data.id;
          window.localStorage.name = response.data.name;
          window.localStorage.email = response.data.email;
          window.localStorage.phone = response.data.phone;
          window.localStorage.birthday = response.data.birthday;
          window.localStorage.answerId = response.data.answers && response.data.answers.length > 0 ? response.data.answers[0].id : 0;
          window.localStorage.lastAnswerDate = response.data.answers && response.data.answers.length > 0 ? response.data.answers[0].update_date : "";
          window.localStorage.answer = response.data.answers && response.data.answers.length > 0 ? JSON.stringify(response.data.answers[0].answer) : "";

          if (response.data.doctor == 0) {
            if (window.localStorage.answer && window.localStorage.answer != "") {
              vm.$router.push({
                path: "/save-survey/" + __WEBPACK_IMPORTED_MODULE_6__variables__["b" /* FORM_ID */]
              });
            } else {
              window.localStorage.afterLogin = true;
              vm.$router.push({ path: "/view-survey/" + __WEBPACK_IMPORTED_MODULE_6__variables__["b" /* FORM_ID */] });
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
        } else {
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

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(55);
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




/* harmony default export */ __webpack_exports__["default"] = ({
  // data() {
  //   return { isLogin: null };
  // },
  computed: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_vuex__["a" /* mapGetters */])({
    user: "user"
  })),
  // mounted() {
  //   debugger;
  //   this.isLogin = this.$store.state.isLogin;
  // },

  methods: {
    signOut() {
      window.localStorage.isLogin = false;
      this.$router.push("/");
      __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].dispatch("fetchUser", null);
    }
  }
});

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuejs_datepicker__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_notification__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_notification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_notification__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_tel_input__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__variables__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_survey_vue__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_survey_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_survey_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Datepicker: __WEBPACK_IMPORTED_MODULE_2_vuejs_datepicker__["a" /* default */]
  },
  validations: {
    form: {
      phone: {
        required: __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__["required"],
        minLength: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__["minLength"])(12)
      },

      birthday: { required: __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__["required"] },
      email: {
        email: __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__["email"]
      },
      password: { required: __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__["required"], integer: __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__["integer"], maxLength: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__["maxLength"])(4) },
      zipCode: { required: __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__["required"], integer: __WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__["integer"], maxLength: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_vuelidate_lib_validators__["maxLength"])(5) }
    }
  },
  data() {
    return {
      state: {
        disabledDates: {
          from: new Date()
        }
      },
      submitted: false,

      show: false,
      disabled: false,
      form: {
        name: "",
        email: "",
        phone: "",
        otp: "",
        doctor: 0,
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
  },
  methods: {
    goToLogin() {
      debugger;
      this.$router.push("login");
    },

    countryChanged(country) {
      this.countryCode = country.dialCode;
      console.log(country);
    },

    submit() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.checkUserCanRegister();
    },
    checkUserCanRegister: function () {
      let vm = this;
      const axios = __webpack_require__(33).default;
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
            text: "You reach max use Limit "
          });
          // alert("You reach max use Limit ");
        } else {
          vm.$notify({
            type: "error",

            title: "Important message",
            text: "User already exist with the same birthday and same pin"
          });
        }
      });
    },

    addUser: function () {
      let vm = this;
      const axios = __webpack_require__(33).default;
      if (this.notifications) this.notifications = [];
      if (this.form.phone) __WEBPACK_IMPORTED_MODULE_1_vue__["default"].postInvoke("/user", {
        name: this.form.name,
        phone: this.form.phone,
        email: this.form.email,
        zipCode: this.form.zipCode,
        pin: this.form.password,
        code: this.form.otp,
        birthday: __WEBPACK_IMPORTED_MODULE_7_moment___default()(String(vm.form.birthday)).format("MM-DD-YYYY"),
        doctor: this.form.doctor,
        verify: "false"
      }, function (response) {
        console.log(response);

        window.localStorage.userId = response.id;
        window.localStorage.name = vm.form.name;
        window.localStorage.email = vm.form.email;
        window.localStorage.phone = vm.form.phone;
        window.localStorage.birthday = vm.form.birthday;
        window.localStorage.afterLogin = false;

        if (!response.token) {
          localStorage.token = "";
        } else {
          localStorage.token = response.token;
        }

        if (vm.form.doctor == 0) vm.$router.push({ path: "/view-survey/" + __WEBPACK_IMPORTED_MODULE_6__variables__["b" /* FORM_ID */] });else vm.$router.push({ path: "/doctorapprove" });
      });
    }
  }
});

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(41);
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

/***/ 452:
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

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variables_js__ = __webpack_require__(19);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__notifications_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__variables_js__ = __webpack_require__(19);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__notifications_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__variables_js__ = __webpack_require__(19);
//
//
//
//
//
//
//
//
//
//
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

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__notifications_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__variables__ = __webpack_require__(19);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuedraggable__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuedraggable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vuedraggable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__variables_js__ = __webpack_require__(19);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__notifications_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__variables_js__ = __webpack_require__(19);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/***/ 459:
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

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variables_js__ = __webpack_require__(19);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        headers: { 'authorization': 'Bearer ' + localStorage.token }
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
      var formData = new FormData();
      let vm = this;

      formData.append("verify", "true");

      if (this.notifications) this.notifications = [];

      this.$http.put(__WEBPACK_IMPORTED_MODULE_0__variables_js__["a" /* URL */] + "/user/" + id, formData, {
        headers: {
          enctype: "multipart/form-data", 'authorization': 'Bearer ' + localStorage.token
        }
      }).then(response => {
        vm.users.splice(index, 1);
      }, response => {});
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

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notifications_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__notifications_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__variables_js__ = __webpack_require__(19);
//
//
//
//
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

/***/ 462:
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
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(278)))

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_variables__ = __webpack_require__(19);
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
    form_id: Number
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

    debugger;
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
      this.$http.put(__WEBPACK_IMPORTED_MODULE_0__components_variables__["a" /* URL */] + "/form/" + __WEBPACK_IMPORTED_MODULE_0__components_variables__["b" /* FORM_ID */], {
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
      this.$http.get(__WEBPACK_IMPORTED_MODULE_0__components_variables__["a" /* URL */] + "/form/" + __WEBPACK_IMPORTED_MODULE_0__components_variables__["b" /* FORM_ID */], formData, {
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

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_survey_vue__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_survey_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_survey_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_css__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bootstrap_dist_css_bootstrap_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_variables__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex__ = __webpack_require__(41);
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


// import * as SurveyPDF from "survey-pdf";

__WEBPACK_IMPORTED_MODULE_0_survey_vue__["Survey"].cssType = "bootstrap";

// var myloc = Survey.surveyLocalization.locales["localename"];
// myloc.completingSurvey = "Your text on completing survey";




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "create",
  computed: _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_vuex__["a" /* mapGetters */])({
    user: "user"
  })),
  components: {
    Survey: __WEBPACK_IMPORTED_MODULE_0_survey_vue__["Survey"]
  },
  mounted: function () {
    this.fetchFormData();
    this.calculateAge();
    this.canTakeItAgain();
    this.generateBase64();
  },
  methods: {
    generateBase64: function () {
      var _this = this;

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
    canTakeItAgain: function () {
      if (window.localStorage.lastAnswerDate != "") {
        var x = new __WEBPACK_IMPORTED_MODULE_2_moment___default.a(String(window.localStorage.lastAnswerDate));
        var y = new __WEBPACK_IMPORTED_MODULE_2_moment___default.a(String(new Date()));
        var duration = __WEBPACK_IMPORTED_MODULE_2_moment___default.a.duration(x.diff(y));
        debugger;
        this.takeAgain = duration.as("hours") >= 24 ? true : false;
        this.hours = parseInt("" + duration.as("hours"));
      } else {
        this.hours = 0;
      }
    },
    takeItAgain: function () {
      this.$router.push({ path: "/view-survey/" + __WEBPACK_IMPORTED_MODULE_3__components_variables__["b" /* FORM_ID */] });
    },
    fetchFormData: function () {
      var id = this.$route.params.id;
      //this.user.data.user_id
      var user_id = window.localStorage.userId;
      var vm = this;
      var date = new Date(window.localStorage.birthday).toISOString().slice(0, 10);
      var birthDate = new Date(date);
      __WEBPACK_IMPORTED_MODULE_4_vue__["default"].getInvoke("/form/" + __WEBPACK_IMPORTED_MODULE_3__components_variables__["b" /* FORM_ID */], {}, function (response) {
        debugger;
        vm.question = response;

        var model = new __WEBPACK_IMPORTED_MODULE_0_survey_vue__["Model"](JSON.parse(response.questions));
        model.title = response.name_en;
        var options = {
          fontSize: 14,
          margins: {
            top: 18,
            bot: 12
          }
        };
        // var myloc =model.csurveyLocalization.locales["localename"];
        // myloc.completingSurvey = "Your text on completing survey";
        console.log(model);
        vm.survey = model;
        vm.savePDF = function () {
          var surveyPDF = new SurveyPDF.SurveyPDF(JSON.parse(response.questions), options);

          // age.value = true;
          debugger;
          surveyPDF.data = JSON.parse(window.localStorage.answer);
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
              text: "CV19.APP Made by team EnSofia",
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
          var learnQuestion = model.getQuestionByName("pdf");
          learnQuestion.value = true;

          var date = new Date(window.localStorage.birthday).toISOString().slice(0, 10);
          var today = new Date();

          var bdday = date.split("-")[2];
          var bdmonth = date.split("-")[1];

          var dateobj = new Date(date);
          var userTimezoneOffset = dateobj.getTimezoneOffset() * 60000;
          var birthDate = new Date(dateobj.getTime() - userTimezoneOffset);

          // var birthDate = new Date(date);

          var myage = today.getFullYear() - birthDate.getFullYear();
          var m = today.getMonth() - birthDate.getMonth();
          if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
            myage--;
          }
          console.log(" age.value: " + myage);

          var user_has_cough = window.localStorage.answer.user_has_cough;
          var user_has_fever = window.localStorage.answer.user_has_fever;
          var user_has_short_breath = window.localStorage.answer.user_has_short_breath;
          var user_has_nausea_vomiting = window.localStorage.answer.user_has_nausea_vomiting;
          var user_has_diarrhea = window.localStorage.answer.user_has_diarrhea;

          var allNo = true;
          // render custome pdf
          surveyPDF.onRenderQuestion.add((survey, options) => {
            //change all boolean Questions red Yes and Blue No
            if (options.question.getType() === "boolean") {
              console.log(options.question.value);
              if (options.question.value) allNo = false;
              var htmlQuestion = __WEBPACK_IMPORTED_MODULE_0_survey_vue__["QuestionFactory"].Instance.createQuestion("html", "html_question");
              console.log(options.question);

              if (options.question.value) {
                //98b4d4
                htmlQuestion.html = '<font color="#98b4d4"><strong>Yes</strong></font>';
              } else {
                //7fcdcd
                htmlQuestion.html = '<font color="#7fcdcd"><strong>No</strong></font>';
              }
              options.question.title = "";
              options.question.showTitle = false;

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
              console.log(options.question.value);
              var htmlQuestion = __WEBPACK_IMPORTED_MODULE_0_survey_vue__["QuestionFactory"].Instance.createQuestion("html", "html_question");

              htmlQuestion.html = '<font color="#98b4d4"><strong>' + options.question.value + "</strong></font>";

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

              htmlQuestion.html = '<p style="text-align: center;"><font color="#2B60DE"><strong>User Phone #:' + window.localStorage.phone + "<br> User DoB: " + bdmonth + "/" + bdday + "<strong></font></p>";
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
              url: "https://cv19.app/10Things.pdf",
              name: "10Things"
            });
            vm.pdfs.push({
              url: "https://cv19.app/sick-with-2019-nCoV-fact-sheet.pdf",
              name: "sick-with-2019-nCoV-fact-sheet"
            });
            vm.pdfs.push({
              url: "https://cv19.app/03.16.20_coronavirus-guidance_8.5x11_315PM.pdf",
              name: "03.16.20_coronavirus-guidance_8.5x11_315PM"
            });
          } else {
            vm.pdfs.push({
              url: "https://cv19.app/stop-the-spread-of-germs.pdf",
              name: "stop-the-spread-of-germs"
            });
            vm.pdfs.push({
              url: "https://cv19.app/03.16.20_coronavirus-guidance_8.5x11_315PM.pdf",
              name: "03.16.20_coronavirus-guidance_8.5x11_315PM"
            });
          }
          vm.pdfs.forEach(pdf => {
            vm.downloadWithVueResource(pdf.url, pdf.name);
          });
          surveyPDF.save("Questionnaire results" + window.localStorage.phone + ".pdf");
          ///TODO: remove after fixing pdf download

          setTimeout(function () {
            vm.$store.state.user.data = null;
            vm.$store.state.user.loggedIn = false;
            resetUser();
            // location.herf = "#/";
            vm.$router.push("/");
            location.reload();
          }, 3000);
        };
      });
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
      // هحط بتاعتي
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
      age: 0,
      json: {},
      survey: {},
      savePDF: {},
      question: {},
      notComplete: true,
      pdfs: [],
      base64: "",
      error: "",
      takeAgain: false,
      hours: 0
    };
  }
});

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap_vue__ = __webpack_require__(127);
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




__WEBPACK_IMPORTED_MODULE_1_vue__["default"].component("b-table", __WEBPACK_IMPORTED_MODULE_2_bootstrap_vue__["c" /* BTable */]);
const createSortable = (el, options, vnode) => {
  return Sortable.create(el, _extends({}, options));
};

const sortable = {
  name: "sortable",
  bind(el, binding, vnode) {
    const table = el;
    table._sortable = createSortable(table.querySelector("tr"), binding.value, vnode);
  }
};
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
      fields: [{
        key: "name",
        label: "Name",
        sortable: true,
        sortDirection: "desc"
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
      URL: "https://cv19.app:8446/app/"
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
      debugger;
      __WEBPACK_IMPORTED_MODULE_1_vue__["default"].getInvoke("/user", {}, function (response) {
        // axios.get(this.URL + "/user").then(
        debugger;
        self.totalRows = response.length;
        // self.users = response;
        response.forEach(user => {
          var date = new Date(user.birthday).toISOString().slice(0, 10);
          var today = new Date();
          var birthDate = new Date(date);
          var age = today.getFullYear() - birthDate.getFullYear();
          var m = today.getMonth() - birthDate.getMonth();
          if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
            age--;
          }

          user.birthday = age;

          // self.users.push(user);
        });
        response.forEach(user => {
          debugger;
          if (user.answers && user.answers.length > 0 && user.answers[0].answer && user.answers[0].answer != "") {
            var obj = user.answers[0].answer;
            Object.keys(obj).forEach(element => {
              var x;
              if (!element.includes("Started") && !element.includes("age65") && !element.includes("lung") && !element.includes("self_or_not") && !element.includes("user_had_nausea_vomiting") && !element.includes("pdf") && !element.includes("started")) {
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
                debugger;
                console.log("x is : " + x);
                self.fields.push({
                  key: element,
                  label: x,
                  sortable: true,
                  class: "text-center"
                });
              }
              debugger;

              user[element] = obj[element];
              if (user[element] == false) {
                user[element] = "No";
              } else if (user[element] == true) {
                user[element] = "Yes";
              } else {
                {
                  user[element] = "";
                }
                user["item"] = obj;
              }
            });
            self.users.push(user);
          }
        });

        self.fields.push({
          key: "actions",
          label: "Actions"
        });
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
      __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post("https://cv19.app:8449/calendarcv02/send_SMS", {
        smsbody: message,
        smsfrom: "+14084134555",
        smsto: number
      }, {
        headers: {
          authorization: "Bearer " + localStorage.token
        }
      }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    },

    openSend(item, index, button) {
      var number = item.phone;
      this.smsModal.title = `Row index: ${index}`;
      this.smsModal.content = JSON.stringify(item, null, 2);
      this.smsModal.number = number;
      this.$refs["smsModal"].show();

      // this.$root.$emit("bv::show::smsModal", this.smsModal.id, button);
    },
    info(item, index, button) {
      var number = item.phone;
      this.callModal.title = `Row index: ${index}`;
      this.callModal.content = JSON.stringify(item, null, 2);
      this.callModal.number = number;
      this.$refs["callModal"].show();

      // this.$root.$emit("bv::show::modal", this.callModal.id, button);
      this.intialCall(number);
    },
    intialCall(number) {
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
          });

          device.on("connect", function (conn) {
            log("Successfully established call!");
            document.getElementById("button-call").style.display = "none";
            document.getElementById("button-hangup").style.display = "inline";
          });

          device.on("disconnect", function (conn) {
            log("Call ended.");
            document.getElementById("button-call").style.display = "inline";
            document.getElementById("button-hangup").style.display = "none";
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
      this.smsModal.content = "";
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(278)))

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_survey_vue__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_survey_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_survey_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_variables__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_notification__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_notification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_notification__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_util_SBSAjax__ = __webpack_require__(75);
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

// import SurveyCreator from "../components/SurveyCreator";

var myCss = {
  matrix: {
    root: "table table-striped"
  },
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
    // this.initReCaptcha();
  },
  components: {
    Survey: __WEBPACK_IMPORTED_MODULE_0_survey_vue__["Survey"],
    SBSAjax: __WEBPACK_IMPORTED_MODULE_5__components_util_SBSAjax__["a" /* default */]
  },
  methods: {
    fetchFormData: function () {
      var id = __WEBPACK_IMPORTED_MODULE_1__components_variables__["b" /* FORM_ID */];
      var user_id = window.localStorage.userId;
      var vm = this;
      __WEBPACK_IMPORTED_MODULE_4_vue__["default"].getInvoke("/form/" + __WEBPACK_IMPORTED_MODULE_1__components_variables__["b" /* FORM_ID */], {}, function (response) {
        vm.question = response;

        var model = new __WEBPACK_IMPORTED_MODULE_0_survey_vue__["Model"](JSON.parse(response.questions));
        model.css = myCss;
        model.completeText = "Submit";
        vm.survey = model;

        var submit = function () {
          window.scrollTo(0, 100);
          var learnQuestion = model.getQuestionByName("pdf");
          learnQuestion.value = true;
          // debugger;
          var date = new Date(window.localStorage.birthday).toISOString().slice(0, 10);
          var today = new Date();
          var birthDate = new Date(date);
          var myage = today.getFullYear() - birthDate.getFullYear();
          var m = today.getMonth() - birthDate.getMonth();
          if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
            myage--;
          }
          console.log(" age.value: " + myage);
          var age = model.getQuestionByName("age65");
          myage > 65 ? age.value = true : age.value = false;
          vm.notComplete = false;
          const axios = __webpack_require__(33).default;

          // if (window.localStorage.answerId!=0) {

          //   axios
          //     .put(
          //       URL + "/answer/" + window.localStorage.answerId,
          //       {
          //         answer: model.data,
          //         form_id: FORM_ID,
          //         user_id: user_id
          //       },
          //       {
          //         headers: { authorization: "Bearer " + localStorage.token }
          //       }
          //     )
          //     .then(
          //       response => {
          //         console.log(response);
          //         setTimeout(function() {
          //           vm.$store.state.user.data = null;
          //           vm.$store.state.user.loggedIn = false;
          //           resetUser();
          //           // location.herf = "#/";
          //           vm.$router.push("/");
          //           location.reload();
          //         }, 3000);
          //       },
          //       response => {}
          //     );
          // } else {
          __WEBPACK_IMPORTED_MODULE_4_vue__["default"].postInvoke("/answer", {
            answer: model.data,
            form_id: __WEBPACK_IMPORTED_MODULE_1__components_variables__["b" /* FORM_ID */],
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
                debugger;
                __WEBPACK_IMPORTED_MODULE_5__components_util_SBSAjax__["a" /* default */].resetUser();
                // location.herf = "#/";
                // vm.$router.push("/");
                // location.reload();
              }, 5000);
            } else {
              if (window.localStorage.afterLogin == "true") {
                window.localStorage.answer = model.data;
                vm.$router.push({
                  path: "/save-survey/" + __WEBPACK_IMPORTED_MODULE_1__components_variables__["b" /* FORM_ID */]
                });
              } else {
                setTimeout(function () {
                  vm.$store.state.user.data = null;
                  vm.$store.state.user.loggedIn = false;
                  debugger;
                  __WEBPACK_IMPORTED_MODULE_5__components_util_SBSAjax__["a" /* default */].resetUser();
                  // location.herf = "#/";
                  vm.$router.push("/");
                  location.reload();
                }, 3000);
              }
            }
          });
          // axios
          //   .post(
          //     URL + "/answer",
          //     {
          //       answer: model.data,
          //       form_id: FORM_ID,
          //       user_id: user_id
          //     },
          //     {
          //       headers: { authorization: "Bearer " + localStorage.token }
          //     }
          //   )
          //   .then(
          //     response => {
          //       console.log(response);
          //       setTimeout(function() {
          //         vm.$store.state.user.data = null;
          //         vm.$store.state.user.loggedIn = false;
          //         resetUser();
          //         // location.herf = "#/";
          //         vm.$router.push("/");
          //         location.reload();
          //       }, 3000);
          //     },
          //     response => {}
          //   );
          // }
        };
        model.onComplete.add(submit);
      });
      // .then(
      //   response => {
      //     vm.question = response.body;
      //     vm.json = response.body.questions;
      //     console.log(this.json);

      //     var model = new Model(JSON.parse(response.body.questions));
      //     model.css = myCss;
      //     model.completeText = "Submit";
      //     vm.survey = model;

      //     var submit = function() {
      //       window.scrollTo(0, 100);
      //       var learnQuestion = model.getQuestionByName("pdf");
      //       learnQuestion.value = true;
      //       // debugger;
      //       var date = new Date(window.localStorage.birthday)
      //         .toISOString()
      //         .slice(0, 10);
      //       var today = new Date();
      //       var birthDate = new Date(date);
      //       var myage = today.getFullYear() - birthDate.getFullYear();
      //       var m = today.getMonth() - birthDate.getMonth();
      //       if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      //         myage--;
      //       }
      //       console.log(" age.value: " + myage);
      //       var age = model.getQuestionByName("age65");
      //       myage > 65 ? (age.value = true) : (age.value = false);
      //       vm.notComplete = false;
      //       const axios = require("axios").default;

      //       if (window.localStorage.answerId) {
      //         axios
      //           .put(
      //             URL + "/answer/" + window.localStorage.answerId,
      //             {
      //               answer: model.data,
      //               form_id: FORM_ID,
      //               user_id: user_id
      //             },
      //             {
      //               headers: { authorization: "Bearer " + localStorage.token }
      //             }
      //           )
      //           .then(
      //             response => {
      //               console.log(response);
      //               setTimeout(function() {
      //                 vm.$store.state.user.data = null;
      //                 vm.$store.state.user.loggedIn = false;
      //                 resetUser();
      //                 // location.herf = "#/";
      //                 vm.$router.push("/");
      //                 location.reload();
      //               }, 3000);
      //             },
      //             response => {}
      //           );
      //       } else {
      //         axios
      //           .post(
      //             URL + "/answer",
      //             {
      //               answer: model.data,
      //               form_id: FORM_ID,
      //               user_id: user_id
      //             },
      //             {
      //               headers: { authorization: "Bearer " + localStorage.token }
      //             }
      //           )
      //           .then(
      //             response => {
      //               console.log(response);
      //               setTimeout(function() {
      //                 vm.$store.state.user.data = null;
      //                 vm.$store.state.user.loggedIn = false;
      //                 resetUser();
      //                 // location.herf = "#/";
      //                 vm.$router.push("/");
      //                 location.reload();
      //               }, 3000);
      //             },
      //             response => {}
      //           );
      //       }
      //     };
      //     model.onComplete.add(submit);
      //   },
      //   response => {}
      // );
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
      appVerifier: "",
      notComplete: true,
      pdfs: [{ url: "http://www.pdf995.com/samples/pdf.pdf", name: "test" }]
    };
  }
});

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_resource__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_bootstrap_vue__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_variables__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vuelidate__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vuelidate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_vuelidate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_util_SBSAjax__ = __webpack_require__(75);
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

const configOptions = {
  apiKey: "AIzaSyBov43YgZIhBH6xLfcRUloec5ORDxF8pLg", authDomain: "cv19-fb498.firebaseapp.com", databaseURL: "https://cv19-fb498.firebaseio.com", projectId: "cv19-fb498", storageBucket: "cv19-fb498.appspot.com", messagingSenderId: "990026941051", appId: "1:990026941051:web:bf71720f51c9092fb898de", measurementId: "G-XZW3QB86ZW"
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

/***/ 502:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 503:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 504:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 505:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 279,
	"./af.js": 279,
	"./ar": 286,
	"./ar-dz": 280,
	"./ar-dz.js": 280,
	"./ar-kw": 281,
	"./ar-kw.js": 281,
	"./ar-ly": 282,
	"./ar-ly.js": 282,
	"./ar-ma": 283,
	"./ar-ma.js": 283,
	"./ar-sa": 284,
	"./ar-sa.js": 284,
	"./ar-tn": 285,
	"./ar-tn.js": 285,
	"./ar.js": 286,
	"./az": 287,
	"./az.js": 287,
	"./be": 288,
	"./be.js": 288,
	"./bg": 289,
	"./bg.js": 289,
	"./bm": 290,
	"./bm.js": 290,
	"./bn": 291,
	"./bn.js": 291,
	"./bo": 292,
	"./bo.js": 292,
	"./br": 293,
	"./br.js": 293,
	"./bs": 294,
	"./bs.js": 294,
	"./ca": 295,
	"./ca.js": 295,
	"./cs": 296,
	"./cs.js": 296,
	"./cv": 297,
	"./cv.js": 297,
	"./cy": 298,
	"./cy.js": 298,
	"./da": 299,
	"./da.js": 299,
	"./de": 302,
	"./de-at": 300,
	"./de-at.js": 300,
	"./de-ch": 301,
	"./de-ch.js": 301,
	"./de.js": 302,
	"./dv": 303,
	"./dv.js": 303,
	"./el": 304,
	"./el.js": 304,
	"./en-SG": 305,
	"./en-SG.js": 305,
	"./en-au": 306,
	"./en-au.js": 306,
	"./en-ca": 307,
	"./en-ca.js": 307,
	"./en-gb": 308,
	"./en-gb.js": 308,
	"./en-ie": 309,
	"./en-ie.js": 309,
	"./en-il": 310,
	"./en-il.js": 310,
	"./en-nz": 311,
	"./en-nz.js": 311,
	"./eo": 312,
	"./eo.js": 312,
	"./es": 315,
	"./es-do": 313,
	"./es-do.js": 313,
	"./es-us": 314,
	"./es-us.js": 314,
	"./es.js": 315,
	"./et": 316,
	"./et.js": 316,
	"./eu": 317,
	"./eu.js": 317,
	"./fa": 318,
	"./fa.js": 318,
	"./fi": 319,
	"./fi.js": 319,
	"./fo": 320,
	"./fo.js": 320,
	"./fr": 323,
	"./fr-ca": 321,
	"./fr-ca.js": 321,
	"./fr-ch": 322,
	"./fr-ch.js": 322,
	"./fr.js": 323,
	"./fy": 324,
	"./fy.js": 324,
	"./ga": 325,
	"./ga.js": 325,
	"./gd": 326,
	"./gd.js": 326,
	"./gl": 327,
	"./gl.js": 327,
	"./gom-latn": 328,
	"./gom-latn.js": 328,
	"./gu": 329,
	"./gu.js": 329,
	"./he": 330,
	"./he.js": 330,
	"./hi": 331,
	"./hi.js": 331,
	"./hr": 332,
	"./hr.js": 332,
	"./hu": 333,
	"./hu.js": 333,
	"./hy-am": 334,
	"./hy-am.js": 334,
	"./id": 335,
	"./id.js": 335,
	"./is": 336,
	"./is.js": 336,
	"./it": 338,
	"./it-ch": 337,
	"./it-ch.js": 337,
	"./it.js": 338,
	"./ja": 339,
	"./ja.js": 339,
	"./jv": 340,
	"./jv.js": 340,
	"./ka": 341,
	"./ka.js": 341,
	"./kk": 342,
	"./kk.js": 342,
	"./km": 343,
	"./km.js": 343,
	"./kn": 344,
	"./kn.js": 344,
	"./ko": 345,
	"./ko.js": 345,
	"./ku": 346,
	"./ku.js": 346,
	"./ky": 347,
	"./ky.js": 347,
	"./lb": 348,
	"./lb.js": 348,
	"./lo": 349,
	"./lo.js": 349,
	"./lt": 350,
	"./lt.js": 350,
	"./lv": 351,
	"./lv.js": 351,
	"./me": 352,
	"./me.js": 352,
	"./mi": 353,
	"./mi.js": 353,
	"./mk": 354,
	"./mk.js": 354,
	"./ml": 355,
	"./ml.js": 355,
	"./mn": 356,
	"./mn.js": 356,
	"./mr": 357,
	"./mr.js": 357,
	"./ms": 359,
	"./ms-my": 358,
	"./ms-my.js": 358,
	"./ms.js": 359,
	"./mt": 360,
	"./mt.js": 360,
	"./my": 361,
	"./my.js": 361,
	"./nb": 362,
	"./nb.js": 362,
	"./ne": 363,
	"./ne.js": 363,
	"./nl": 365,
	"./nl-be": 364,
	"./nl-be.js": 364,
	"./nl.js": 365,
	"./nn": 366,
	"./nn.js": 366,
	"./pa-in": 367,
	"./pa-in.js": 367,
	"./pl": 368,
	"./pl.js": 368,
	"./pt": 370,
	"./pt-br": 369,
	"./pt-br.js": 369,
	"./pt.js": 370,
	"./ro": 371,
	"./ro.js": 371,
	"./ru": 372,
	"./ru.js": 372,
	"./sd": 373,
	"./sd.js": 373,
	"./se": 374,
	"./se.js": 374,
	"./si": 375,
	"./si.js": 375,
	"./sk": 376,
	"./sk.js": 376,
	"./sl": 377,
	"./sl.js": 377,
	"./sq": 378,
	"./sq.js": 378,
	"./sr": 380,
	"./sr-cyrl": 379,
	"./sr-cyrl.js": 379,
	"./sr.js": 380,
	"./ss": 381,
	"./ss.js": 381,
	"./sv": 382,
	"./sv.js": 382,
	"./sw": 383,
	"./sw.js": 383,
	"./ta": 384,
	"./ta.js": 384,
	"./te": 385,
	"./te.js": 385,
	"./tet": 386,
	"./tet.js": 386,
	"./tg": 387,
	"./tg.js": 387,
	"./th": 388,
	"./th.js": 388,
	"./tl-ph": 389,
	"./tl-ph.js": 389,
	"./tlh": 390,
	"./tlh.js": 390,
	"./tr": 391,
	"./tr.js": 391,
	"./tzl": 392,
	"./tzl.js": 392,
	"./tzm": 394,
	"./tzm-latn": 393,
	"./tzm-latn.js": 393,
	"./tzm.js": 394,
	"./ug-cn": 395,
	"./ug-cn.js": 395,
	"./uk": 396,
	"./uk.js": 396,
	"./ur": 397,
	"./ur.js": 397,
	"./uz": 399,
	"./uz-latn": 398,
	"./uz-latn.js": 398,
	"./uz.js": 399,
	"./vi": 400,
	"./vi.js": 400,
	"./x-pseudo": 401,
	"./x-pseudo.js": 401,
	"./yo": 402,
	"./yo.js": 402,
	"./zh-cn": 403,
	"./zh-cn.js": 403,
	"./zh-hk": 404,
	"./zh-hk.js": 404,
	"./zh-tw": 405,
	"./zh-tw.js": 405
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
webpackContext.id = 521;

/***/ }),

/***/ 525:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAADSCAYAAAA/mZ5CAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAP8A/wD/oL2nkwAAFw1JREFUeNrtXWtwFNeVbknFGjAYiFNlkh+2Y/CLYIRH3T2ywFawyctASFLlHwlxsFP7czf707EdNhvHscvYPxy8xK6CQFIVBwTGL8APjI0xD82MBOIN5Wwgm+AEJIxACAnQo/c7PT1aATPS9Ex339Pd51R9jNBjpvve8/W597yupon4KmseekhLmea1acP4MjAlbZoP4PUR4ElgCf7fAHwANAN/Bv6B75/B33Tj6x6g30GP/T38zP6d7O82O3/bYL9X9j0X4v/325+Fz6TPpmsQEQmVZHR9LJTXtMlimi8AG4F9jvJfBKyAcNH5zH24ng14fZ6uia4NGCszJcJCmmtqKqCYRJrb8fojKOpSoAnoAC45VsRihn7n2jqca12Ka1/g3MNYoEJmVsR/8iQSlVC6W6GADwN/APYHbGX8tF50L7+nhwLucTIsa6XMuIgn0pRIaGldHw3l0qFcv0hln+JnmVobL60W3WPGuWe699GNyaQohIg7AXFGpgyjztnj7I84cYohFo3B8zQmINRI0RCRgoKnbiUIdDPwc2BvOus1swSXgcZkD8bqSbzeRGMmmiOibamv1xpNcwKU4vvAuxHZ7wS5r3oXZPoeMJ7GUiSebuqJsDyPQxmOAH1CjJLRS2MIMv0MmCiaFQ/yVGGyp2HiX3ZcwEIEb9GRorE1jLvwWiUaFzW3dTbmUwP8CZN9ThQ+EEK9mjKMxM7aWolNRcCBUAXyVON1HSa3SxQ8cJzH+K+lVUBjMikWKmxiZV3Yd2AiV9iTKQqtGp0g0+/Sun67JerJXz6dPJm8cF/EpD2LyTslCswObZibZ0Co6w9MmSIKy1GwdBiFiXoU+F9RWPb4KwhFGfCjRHOZCCaDrNA0TMxHTtmBKGo40IO52wxMxdyJIit2JkwAnhNHQqjRBTI9C4wXjQ6eQBVAvZNEKsoYDWRApvu219WJuzyQvZBpjkvThtU0L4jyRTKX7+mUYYwTTfd3P3Q3BnpnzLOx45BtvgNzPV003nsCjcDg/ivwuShabHAKS/efYAUyQhjgBYl0fQKItNJJjhQFi1lCLMi0gpxKwoQSZff06Voq2wknJQoVezSCTHeSToi488pVYvDmUSRclEjgoBV6MVe8ekUKlTrACv2HZGkLCmSV/1QSYId3bV+Lwfpv8coJhvHqLaGmNMKYQk4F01wj1aqCItAHy7QalkmyIa5wb0/EwHwilkjg0jJthd7cIAwiEpnmJAxGWhRDUCLIq3tLbAlkZUl0M3BIlEFQJg5iVXOTFUsSZU9mEBIJvCOTad5pxWw5J5ZI4Jtlis2eSEgk8NkyRXvP1JhMThTHgiAIB0RkvXlOnOgTmWRBQNgauTiTk7GwRuJEgiDjTBS0jUwGhJ07l037kYwFQeAZEJRORDoY/izubAKqWCKBOstkGP/elEiEM2ucakecUgjJ4hZwyBqfE8p6plQ24Cr1RAI29UzYq98RPg+dVLYK+GFnaPrn4UL/xemxIBMnYAdq5h+KhipOtx9pVCJg21AFD/pHue+L7paWWYIwtPqic7O4urrHOc0bZaJijMyMGdbub37TSieT3K91e0bXr+NGogqnjTDfeBEm9n8WLbK6jh61Wt9+22r+2tdE8T1Gy5w5VkdLi3Xp9Gnr76+8YmVqa7lX2D7NqisRLqg+zbkXNyb0L089ZfVdvGjl5PTWrdau2bOFAB5hz/z5VuehQwPj29/XZx1ftszK1NVxvu5uGIF7uVijCdxPhfjLL39p9XV1WZdJf7/V/sknVtO99woRygQt5ToPH7aulP6eHptMzK8/o9wlTod8OecT8bVEIFF/b69VSIhMYpm8s0T5hL1lMoxnlB52Riflpbke8oU9kb2cu9ISXfXY7LeXeU319UIMt5boW9+yOg8etIaTAcvE1wHRBSJ9VVWR3ijnuEmeJCJLdOmSVazYe6YHHhCCFOtYmDevKBINfmCxtkyGsRn6HOyZtnR6eDp78HEPRxIdJUvU3W25ErJMH39sNc+aJUQpwjt3bv9+y63kLFPmnns43hedabuwuaYm0CXdF9McTw/PLecuXLBKFbJMQibvSTRAJuxXGZPpGMh0fWCttGACn2Vricog0QCZYJlkmZeHRHPnWuf27St7fAfIxHCZB93+dVBpQHfYKRYM90Sul3PigHDl4i7HEoXIAdGGFddtfseMqGx8BcdgqxvHgisHhLjGs5bIQxJxd0BAz5djiVflZ9yoGh90nn2w1cOJjnvQdtfXv+4PiXgHbTtBpmm+kKi5pqYCb74uTMFWrySuQVuv9kTFCDvLZBhrt82cWeGHNaphE3wtNtjqoWWyvXkxSnS190R79lhByYBrnE+i63nofML7llqG8Scuk0xZ3IMTUIMSm0z33x99Ej34oNURIIkGJ7r+bckSTnulV8kv4KWTgVKBOrjcIJVCKJFc0DbCZNr97W/bpRCqpOvYMVbdh2BApnpZJvEyp8luXb9e2URHeZlHyzmVJLKo9GL5cm4evN96FTeayMkaEUiJSZlJqVVJ1HLz7OXc7t3qnk+9vdY/V63imPHQAQ6U15B/S309ORkeZ+mWnT3bat+2TallioprvBkPBKWWCHJi9WqraeZMrp2HHqP80nJy6ugEiSNcFYCU2CaTQssUdte4bYkUkogs0YmGBu49Hg6ndX18OXuj76eZN7/nYJnsdKL77gtfsBVjp3I5R2NHJAqBVaf2ct8tuQE+8G4YFIJy4tq3b1e6NGkP2Z7J9s7t2qWOQ3191ok1a7hmgecL0G7EXqmylAAsnfN6MUxPV+WWKST1TLu+8Q3rbHOzUu8ckYjrnqgAiAs3lkKkn4dx09y+Y4dSy8Q9aMuCRGvX2v3vQrenNIwn3JJoJP5wb1g9UMrJRJaJ4TKPeiyczWTULufCSqIsWsCNa9zEjuqo51eYM5bP7Nyp3gHBqJ6JiH22qUnpmJx87bWwhwu6wY3aolts4Q9eCH1sBHsVpWRiVM/EwRKdXLcuPI6FoZd3i4s6sIwOr8Uf7I9ELQ32A2dSKfVBW4WbasoCUWqJICdffz1KNV37QKZRxVgkPR2hM19peaWUTAqDtpQ7p9wSvfGGXTsWoZxEOi29phgi/VfkqjzJMjU2xirRlfZEqq2xbYlCGKguYnm3aOgq2ESiknsf79AqVs41HoA3T/mSFpaoFZYoxN654ZAmrgyVzXArfulsZPsPMNgz+V3PZHssVVpfh0QR73NxFlyZNBSRHo7S/qhgQDKdVm+ZfMiAoBQl1UvY1jffjEOzmH4s7xYUbG6CH/4hFp1xsPHnQCYvc/Nsa6vS3U+W6K23orycu7K0YmVLdXVFPifD2Ki4vYuOrSgOUNqucQ824+TEUGqJIHQKYiQdC0O7wcfkW9bdjh9eilO7KVpeqY6xlOsaZ2GJ1q+PRrDVZRJrKl9HVrDrR7FsxcvAMpVaz0SWqF1xKlQbSBTj1s4/zGeRlsa1m6idh6YyIzpnmVzsmcg7pzQ51yER8zNi/Y4nvZSvGrYptgPCxTIVWc9E7nOlhYxiiXLIXNkAciy3TkGxrNUpop7JLhNRXMDYtmGDHGLtdBjKDHY4YFlnxs3RMGR+mmoyFahnsquAsQRUSqKNG+PmnRsKl8AdY7Cj4ZGoB2Jd9zNQ3BTEtkyDlk62Y0G1JXrnHVnOXZ3AunDw/ugFGZSrN/NKyTSonomFJSISxSTY6hKLbRKteeghItJGGRA+zeSvDNqq7t136r33YnUSh8sMh/WWsz+61o7SyqAU9JCdU0kmlQLyEoliGGx1g73g0GjaH30Z//mHDEhh0Eneqlv6qiKRWKJh8Rk49CUi0pQw9a9T6c2LjWUiEr3/vri4i8MF4hDtjx6QwQhHn2yxRGz3SbNyrm8ZEBdkOrd3b3RJtGmTuLjd48dEpCdlINynE0WOTDkSSbC1FIv0BBFpiQxGCQ4IOvF7//7I8OjzzZtD0becKZF+Q3ukBhmM0nPzQk8mWCIiUcga2nPDKiLSBzIQZVimefNCTSbbEsXgpHafsYmI1CwD4YFr/MCB8FmiDz8UF7dX5RT4588yEDGzTA6JxBJ5hk81yWrwkEzkGudumYhEH30kcSKPsxvIa3dGBsJjbx5XMuUskXjnvMZpSlrtloHwfpnXefAgOx6d3rJFlnP+oJuWdj0yEP5kQLAhExUKgkSSseBfpawmlbH+Yc/8+Vbn4cPqLVFAzfvjXCkrRPKbSEeOKCdSu8ftkQX5iSRLO7+WdocO8VnaUUMVWdr5t7QTZ4MPzobvfIcPiQYv8Xw+UibezgZxf8fCYzfY6SDubx/c3xKQ9TaGxNES5V3mCZk8DshKipB3jgWulqhATEkcEN6mCEnSqgcNJTm4ud1apnZYJink8y5pVcooyrVE3JdzwzggxDJ5U0YhhX1llJyHzhLls0x0PpOUU5RZ2Cel5qHOWpCgLYtS8xel+Ump3rkQORZcucalvKLk5icLZTBcxolCvCeSoK1f7bhM834ZCBcZC1GzRIUsk5DJDWZJy+JiSTRnTqQtkeTmlQynZbE00Y+8i1tc477iuN1EX451Gb5DUJS8cyW5xqXn3VDIHutCB43hiw0yIAzriZwjMO3T+hQeNCau8SE9dtmDxpyjL5+XQeFXT2Rv+qHApMS0zFK9Z5JS9bxYLIcxc60nyvVYGJQHRxt/m0wKLVOh09bjXBl72WHM+I9JVX4yMAzqiYZo3kjfI4IpI5PUM12Ji+COMZhIY/HNDslYmKvcEtnNG4dQVPoZh2WekMnGWXBnjDZY8M0mqSdSbImooX0RKToDZFK5zJN6pmz5xJWCby6VeiJ14rYXNykxedOknkmpx+6lq4lkGAski1udJSolVkNKTO5x1Q6I2Fomw/jBVUQCu26PW6oQh3qics8nYmGZ4lnPRKlBt+azSORw2C+WKEBL9MEHnmQNkBK3K7ZMMQza7gVnxuQjUgV++HvxzgVDIjr42EvPF4ugbYzqmbCCW9FcU6PlFfzw4agHZjkEW0+9/74vm3RSYhZB2+iXYFAgdoFWSPDDyeQbl3oiH0n03nu+ptrYQVuVZIpHPdMZrOAmFSRSRtcryTcu9UT+kSiIpY9NJsUOCNsyRXeZl9pTXV2pDSWwSr+QeiKfLFGAni0uy7xIOiAMY5E2nIBIepT2SRxc3EFZoryucSrBkHomT/dHIFKiGCKNjoobnCzRecX1RESiTF2dsjEgJZZ6Js8L+UYNSySwLRL1SXY9keI4Uds777DYJ+yaPZtHPVME0olAoueII0VJyjDq0iE+N4lDsJVI1DRjBpsxIU+hpBOVjS4QqVYrVhqTyZH4oz3Sd65EEm3cyLKatJlL0Da8JRgtGV2/RnMjYN6TQqISScR4CSP1TGUt6x7X3AqYd3OYklg5uLjb1q8PRfKm1DOVVg2LvdGNrokE9lFw9l1xLLggUYiag3DIGg+ZA2IDiFSplSIg0/fwBr3iWBhC+vpsEql0cZfsgJB6pmLRCy7M10oV/PF4vMkRCbYWltaQWaJ8rnEWQVveS+LDxIWSibSlvp7iSj8TS5TfErW+/baVueee0MdG7HomCdoO5WR47MCUKVpZgjeZyK3DEIcE1Na33opUvwKpZxqyU9ANmheCN3uZy41lZsywOlpa1FqiN9+0ryNqyZh2oqviPdPnmzZZmdpaTgmqSzWvBG92FxerRE3tL50+rY5Eb7wR6f4EquuZejC3NMdcrBF0f6pnRIJpqwJeZXFzyaT191desfqh1IEv5yJOIuX1TDTGr79uzzETa/THnbW1VZqXkjKMGrz5eRbLO5j+48uWWf09PcHML0h7EhMcxeUcm3omJ4zAqOTiPIzH3ZrXYjdHMYy1bPZKdXU2mYIQIlEcGyEGWc/UtmEDqzACSNTQUl1dofkhePNp+JBOTpPtp2XKWaI0p81v1FzjZIlAImZhhE7yC2h+SWMyWYUPWMFpogcsk9cTjfc7uW5dHBsf5q9n8mPPRKlVIBG7s2oNYzlQpfkp2CtRR9Y2VjeOzamXlsm2RK+9FolgK9t6JodEDPedrXk7qHotVnaJ9wy3ic5Zpv7e3rKXGifWrpVzU/0M2uaSfDnuOw3jV1pQgg+7Hh/6V3ZkggUpi0wOieLknSupBKOcZZ5jiTgumWEgjmL78oXAiER5R/hQOi6zhy2ZXC7zaDl3Ys0aIZGf9Uy8a7Z6qNMw5ZcGKrBKo4APOU60awcEfo9IJMs5l8s8N5YpZ4n4hhE2QZ9HaiqE0ieoIQTLgSnSAUHLwBMNDeJY8NMBkXNx87X259O6PkVTJTCFRKZnuU50MUFbIpG4uP2tZ2Lp4r58b/R0ptgWWz66w8dz7xeezzLZlmj1aj55XVEM2vIMtl7VxxvGYJzGQXAh93HugzfgGs8luuL1n6tWyZ7Iz6BtOPpYdEN3Z2pcZHtdHR1S9jTnnuGU6Pq3JUus7mPHrM9WrpQ9kU+JrlTweOH4cdvaM39Qka4+RTmkGifBEm8cLmyHKJQgJMvlbRldv07jKGD3dFzgKVEmAXO0QVenaZwlZZo/4d7CSxBrkG4+onGXRtMcwS1DXCAYhOVNNTUjtDAIrNIEXHCjTJqAGXaU1Z9OEZnutFPSZfIEPHASK6U7tLBJcyJBZJrLrSeeIJboAIke3D19uhZKofgSyPTTdITOpBWEDn3QwX9rTCYrtDCLXZ5umkvohmRSBUGTCHgROlipRUHSuj4aT4XVYpkEgWYuGMYqOlxci5LgqUDJrVtlggUBlYx/nNH18VoUhZqR29m2MtECf0nUCNygRVlwg7fgZg/KhAt8wgHo2Fe0OAhu9CYhk8AnEt2kxUWopVc6G7AVMgm8IxF0ytJiJpZYJoFYIg+XeaZ5izggBGU6Fr6iiQx487ZKnEngMk70ceS9c6XEmZygrWRACIrJWFgV2TiRFxkQTjqRWCbBkGk/KcMYLYwZJjfPSXSVrHHBVVncTgJqpTClCGlKJCqcEgypZxL8fz2Rrs9h1/WHu1DtiFMcKJW2gh1UlBfaeiIWSz3TJCfECmmoEtNGJYaxPHTl4YzJRA1VHpVWXzFrmWWaj2R0fYQwwPscvWoM7nbx6kU8PmSa29j3nQu7UHdMpz1ytyhd5NDttBG+TjQ9AHF6QdybZn4KhsAV6FSImeKVU7PUGw/QwdBdooihxXk8FH/N5miVGOfpUQP/qZiIzWmGZ9oKCoLmahOdlKf8kC+Rywg1ChOzEDgmSsoeR+ngY2VntooMLXTaOibnenupkHWfitLyQivm51eNpvmFwE8PFyk59nQbCPU7TF6nKLBydIJAy4BbRTPDSKZsAuw0TOBa2tSKQitxJDRg/O/K6HqVaGTIZWdtbUXKMBKY1FclqzwQnAV5/ojxvrululrc2RF0SFTR0xGvvxVC+UagpcBUPLzEAsWCVIZxAwj1GCb/sCTElplYijGksaSWAaJZMZRPJ0+mqlwK6n4X2AiFuCjEKBo0VhuA+RQYJ4+piAhZqEooxY1QiifwZG2RXL68oAySFozP4xgnGiupVBUpLFCQa0CsWrwuhuLsi3m2Od37XpDnOaA2o+vXiIaIuBKqyASZRkGBavD6n1CotL2hjjax6N7OOEmki4AEjUFzTY0ohIg30pxIVIJUk6BYC/C60rFWFyOy39nrVCL/EPc3aU91tSzbRPwXio9A4cZA+W5zlO8lp6yD3OqXmFqtfoc0ZFUzuPaXcN0/sO8B9yIxHxE20phMErmMVDaBdjFe19PTHvgMuBAgaeizjjuWZr1zLQudaxsjMyUSKqHDAuj4RTzxvwRMwdezoNQ/xit5B39DHUPtcoKsNfvUIdxpx2uYs2z9ztfdzs8+c3434/wtHfH4Ir0nvXeaPgOfRZ9Jn23JNPgu/wflo4zsHOVQUQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wMi0xM1QyMTo1NzowNS0wNzowMHO/Rt8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMDItMTNUMjE6NTc6MDUtMDc6MDAC4v5jAAAAAElFTkSuQmCC"

/***/ }),

/***/ 526:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSItNDc0OS40OCAtNTAyMCAzNS4wMzYgMzUuMDM2Ij48ZGVmcz48c3R5bGU+LmF7ZmlsbDpub25lO30uYntmaWxsOiM0ZThjZmY7fS5je2NsaXAtcGF0aDp1cmwoI2EpO30uZHtmaWxsOiNmZmY7fS5le2ZpbGw6I2VmZjRmOTt9PC9zdHlsZT48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGNsYXNzPSJhIiBkPSJNMC0zOTkuNDc5SDE3LjU1NXYxNy41NTVIMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMzk5LjQ3OSkiLz48L2NsaXBQYXRoPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDg4NiAtNTA3NSkiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0NS4xMyA2NCkiPjxnIGNsYXNzPSJjIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIj48cGF0aCBjbGFzcz0iZCIgZD0iTS0zODEuOTI0LTE5MC45NjJhOC43NzgsOC43NzgsMCwwLDAtOC43NzgtOC43NzgsOC43NzgsOC43NzgsMCwwLDAtOC43NzgsOC43NzgsOC43NDUsOC43NDUsMCwwLDAsMi4yNiw1Ljg3OXYxLjQ0MmMwLC44LjQ5MiwxLjQ1NywxLjEsMS40NTdoNS44M2EuODQzLjg0MywwLDAsMCwuMTgzLS4wMiw4Ljc3OCw4Ljc3OCwwLDAsMCw4LjE4NC04Ljc1NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzk5LjQ3OSAxOTkuNzQpIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiPjxwYXRoIGNsYXNzPSJlIiBkPSJNLTY4Ljc2My0xOTQuMDc5YTkuMjkyLDkuMjkyLDAsMCwxLDYuMzgtOC44ODhjLS4yNTItLjAyMi0uNTA2LS4wMzMtLjc2My0uMDMzYTguNzc0LDguNzc0LDAsMCwwLTguNzc4LDguNzc4QTkuNTA4LDkuNTA4LDAsMCwwLTY5LjctMTg4LjNjLjAwNSwwLDAsLjAwOSwwLC4wMS0uMzExLjM1Mi0xLjkyNCwyLjg0OS4wMjEsMi44NDloMi4yNWMtMS4yMy0uMDIyLDEuMjYzLTIuMTA3LjI2OS0zLjQ5NGE4LjIyNSw4LjIyNSwwLDAsMS0xLjYtNS4xNDEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcxLjkyNCAyMDMpIi8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ 527:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/minus.3b8b1b1.png";

/***/ }),

/***/ 528:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(506)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(441),
  /* template */
  __webpack_require__(557),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(516)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(442),
  /* template */
  __webpack_require__(572),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(520)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(443),
  /* template */
  __webpack_require__(576),
  /* scopeId */
  "data-v-c97a0a38",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 531:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(514)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(444),
  /* template */
  __webpack_require__(567),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(519)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(445),
  /* template */
  __webpack_require__(575),
  /* scopeId */
  "data-v-bf9cc140",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(446),
  /* template */
  __webpack_require__(570),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(447),
  /* template */
  __webpack_require__(578),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(448),
  /* template */
  __webpack_require__(564),
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
__webpack_require__(510)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(449),
  /* template */
  __webpack_require__(561),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(505)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(450),
  /* template */
  __webpack_require__(556),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(451),
  /* template */
  __webpack_require__(569),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(452),
  /* template */
  __webpack_require__(565),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(459),
  /* template */
  __webpack_require__(579),
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
__webpack_require__(517)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(453),
  /* template */
  __webpack_require__(573),
  /* scopeId */
  "data-v-7928bd28",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(509)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(454),
  /* template */
  __webpack_require__(560),
  /* scopeId */
  "data-v-2b5746b1",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(455),
  /* template */
  __webpack_require__(553),
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
__webpack_require__(508)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(456),
  /* template */
  __webpack_require__(559),
  /* scopeId */
  "data-v-255ed4e3",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(515)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(457),
  /* template */
  __webpack_require__(571),
  /* scopeId */
  "data-v-73e363a8",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(512)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(458),
  /* template */
  __webpack_require__(563),
  /* scopeId */
  "data-v-3747d669",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(518)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(460),
  /* template */
  __webpack_require__(574),
  /* scopeId */
  "data-v-7ed90bfa",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(461),
  /* template */
  __webpack_require__(577),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(462),
  /* template */
  __webpack_require__(568),
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
__webpack_require__(511)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(463),
  /* template */
  __webpack_require__(562),
  /* scopeId */
  "data-v-33e66800",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(41);



__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* default */].Store({
  state: {
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

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(513)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(464),
  /* template */
  __webpack_require__(566),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(504)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(465),
  /* template */
  __webpack_require__(555),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(503)

var Component = __webpack_require__(12)(
  /* script */
  __webpack_require__(466),
  /* template */
  __webpack_require__(554),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 553:
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

/***/ 554:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "background": "#F5FBFF"
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
  }, [_vm._v(_vm._s(_vm.question.name_en))]), _vm._v(" "), (_vm.notComplete == 1) ? _c('h4', [_vm._v("Please answer these questions :")]) : _vm._e(), _vm._v(" "), _c('div', {
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
      "src": "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/who.png",
      "width": "50"
    }
  }), _vm._v(" "), _c('p', [_vm._v("\n              This website / application is made by team EnSofia. It is our\n              humble effort to contribute and help the public to aid the\n              tremendous efforts and steps taken by many organizations to\n              flatten the curve.\n            ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-4 col-md-4"
  }, [_c('div', {
    staticClass: "single_service"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/correct1.png",
      "width": "50"
    }
  }), _vm._v(" "), _c('p', [_c('strong', [_vm._v("What it is?")]), _vm._v("This website / application is built to increase awareness and share information published by the US\n              – Centers for Disease Control and Prevention available at CDC.gov\n            ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('br')])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-4 col-md-4"
  }, [_c('div', {
    staticClass: "single_service"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/wrong.png",
      "width": "50"
    }
  }), _vm._v(" "), _c('p', [_c('strong', [_vm._v("What it is NOT?")]), _vm._v(" This is not diagnostic or\n              medical site. You should not use this website or its\n              communications for any medical advice. If you have medical\n              questions, contact your doctor. If you have an emergency call\n              911.\n            ")])])])])])])
}]}

/***/ }),

/***/ 555:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('b-container', {
    attrs: {
      "fluid": ""
    }
  }, [_c('b-row', [_c('b-col', {
    staticClass: "my-1",
    attrs: {
      "lg": "6"
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
      "lg": "6"
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
    attrs: {
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
  }), _vm._v(" "), _c('b-input-group-append', [_c('b-button', {
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
      "md": "6"
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
  })], 1)], 1), _vm._v(" "), _c('b-table', {
    directives: [{
      name: "sortable",
      rawName: "v-sortable",
      value: (_vm.sortableOptions),
      expression: "sortableOptions"
    }],
    staticClass: "table table-striped my-4 w-100 backColor",
    attrs: {
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
          }, [_vm._v("\n            " + _vm._s(key) + ": " + _vm._s(value) + "\n          ")])
        }), 0)])]
      }
    }])
  }), _vm._v(" "), _c('b-modal', {
    ref: "smsModal",
    attrs: {
      "id": _vm.smsModal.id,
      "title": _vm.smsModal.title,
      "ok-only": ""
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
  }, [_vm._v("\n      sendMessage\n    ")])]), _vm._v(" "), _c('b-modal', {
    ref: "callModal",
    attrs: {
      "id": _vm.callModal.id,
      "title": _vm.callModal.title,
      "ok-only": ""
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
      "placeholder": "Enter a phone # or client name"
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
  })])])])], 1)
},staticRenderFns: []}

/***/ }),

/***/ 556:
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
  }, [_vm._v("Register")]), _vm._v(" "), (_vm.error) ? _c('div', {
    staticClass: "alert alert-danger"
  }, [_vm._v(_vm._s(_vm.error))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_vm._m(1), _vm._v("\n             \n            "), _c('vue-tel-input', _vm._b({
    staticClass: "form-control col col-9",
    class: {
      'is-invalid': _vm.submitted && _vm.$v.form.phone.$error,
    },
    attrs: {
      "placeholder": "Enter Your Phone  * "
    },
    on: {
      "country-changed": _vm.countryChanged
    },
    model: {
      value: (_vm.form.phone),
      callback: function($$v) {
        _vm.$set(_vm.form, "phone", $$v)
      },
      expression: "form.phone"
    }
  }, 'vue-tel-input', _vm.bindProps, false)), _vm._v(" "), (_vm.submitted && _vm.$v.form.phone.$error) ? _c('div', {
    staticClass: "invalid-feedback"
  }, [(!_vm.$v.form.phone.required) ? _c('span', [_vm._v("Phone is required")]) : _vm._e(), _vm._v(" "), (!_vm.$v.form.phone.minLength) ? _c('span', [_vm._v("Phone numbers should be atleast 10 digits")]) : _vm._e()]) : _vm._e()], 1), _vm._v(" "), _c('form', {
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
      value: (_vm.form.name),
      expression: "form.name"
    }],
    staticClass: "form-control col col-9",
    attrs: {
      "id": "name",
      "placeholder": "Enter Your Name (optional)"
    },
    domProps: {
      "value": (_vm.form.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.$set(_vm.form, "name", $event.target.value)
      }
    }
  })]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_vm._m(3), _vm._v("\n               \n              "), _c('b-form-checkbox', {
    staticClass: "col col-md-9",
    attrs: {
      "name": "check-button",
      "value": 1,
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
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_vm._m(4), _vm._v("\n               \n              "), _c('div', {
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
  }, [(!_vm.$v.form.password.required) ? _c('span', [_vm._v("PIN is required")]) : _vm._e(), _vm._v(" "), (!_vm.$v.form.password.maxLength) ? _c('span', [_vm._v("PIN must be 4 digit integers only")]) : _vm._e(), _vm._v(" "), (!_vm.$v.form.password.integer) ? _c('span') : _vm._e()]) : _vm._e()])]), _vm._v(" "), _c('div', {
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
  }, [(!_vm.$v.form.zipCode.required) ? _c('span', [_vm._v("ZipCode is required")]) : _vm._e(), _vm._v(" "), (!_vm.$v.form.zipCode.maxLength) ? _c('span', [_vm._v("ZipCode must be 5 digit integers only")]) : _vm._e(), _vm._v(" "), (!_vm.$v.form.zipCode.integer) ? _c('span', [_vm._v("ZipCode must be integers only")]) : _vm._e()]) : _vm._e()])]), _vm._v(" "), _vm._m(8), _vm._v(" "), _c('hr'), _vm._v(" "), _c('p', {
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
      "src": "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/pin.png",
      "width": "50"
    }
  }), _vm._v(" "), _c('p', [_vm._v("\n              Register and choose 4 digits PIN .You will use it when you log\n              in Please keep your PIN secure\n            ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-4 col-md-4"
  }, [_c('div', {
    staticClass: "single_service"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/anonymous.png",
      "width": "50"
    }
  }), _vm._v(" "), _c('p', [_vm._v("For your privacy your name and email address are optional")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br')])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-4 col-md-4"
  }, [_c('div', {
    staticClass: "single_service"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/united.png",
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
  }, [_c('p', [_vm._v("Name")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('label', {
    staticClass: "col col-2",
    attrs: {
      "for": "name"
    }
  }, [_c('p', [_vm._v("Doctor")])])
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
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "form-group row"
  }, [_c('div', [_c('button', {
    staticClass: "boxed-btn3 large_margin2",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Register")])])])
}]}

/***/ }),

/***/ 557:
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
      "src": __webpack_require__(526)
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "sc-open-icon",
    attrs: {
      "src": __webpack_require__(525)
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
      "src": "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/CV19.APP2.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "sc-header--title"
  }, [_vm._v("\n          COVID-19 Self-Checker\n        ")]), _vm._v(" "), _c('div', {
    staticClass: "sc-header--close-button"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(527),
      "alt": ""
    },
    on: {
      "click": function($event) {
        return _vm.closeChat()
      }
    }
  })])]), _vm._v(" "), _c('div', {
    ref: "scrollList",
    staticClass: "sc-message-list"
  }, _vm._l((_vm.messageList), function(message) {
    return _c('div', {
      staticClass: "sc-message"
    }, [_c('div', {
      staticClass: "sc-message--content",
      class: {
        sent: message.author === 'me',
          received: message.author !== 'me',
      }
    }, [_c('div', {
      staticClass: "sc-message--text"
    }, [_c('p', {
      domProps: {
        "innerHTML": _vm._s(message.data.text)
      }
    })])])])
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

/***/ 558:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('router-view')
},staticRenderFns: []}

/***/ }),

/***/ 559:
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

/***/ 560:
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

/***/ 561:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "header-area"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "main-header-area",
    attrs: {
      "id": "sticky-header"
    }
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row align-items-center"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
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
  }, [_vm._v("Register")])]) : _vm._e()])])])]), _vm._v(" "), _vm._m(3)])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header-top_area"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
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
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-6 col-md-6"
  }, [_c('div', {
    staticClass: "short_contact_list"
  }, [_c('ul', [_c('li', [_c('a', {
    staticClass: "share",
    attrs: {
      "href": "mailto:info@ensofia.com?body=Thank you for getting in touch! "
    }
  }, [_c('strong', {
    staticClass: "share"
  }, [_c('i', {
    staticClass: "fa fa-envelope"
  }), _vm._v(" info@ensofia.com")])])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('strong', {
    staticClass: "share"
  }, [_vm._v(" Hotline")]), _vm._v(" "), _c('i', {
    staticClass: "fa fa-phone"
  }), _vm._v(" "), _c('strong', [_vm._v("\n                      (408) 413-4555\n                    ")])])])])])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-2"
  }, [_c('div', {
    staticClass: "logo"
  }, [_c('a', {
    attrs: {
      "href": "/"
    }
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/CV19.APP2.png",
      "alt": "",
      "width": "250"
    }
  })])])])
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

/***/ 562:
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

/***/ 563:
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

/***/ 564:
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
    class: {
      'is-invalid': _vm.submitted && _vm.$v.form.phone.$error,
    },
    on: {
      "country-changed": _vm.countryChanged
    },
    model: {
      value: (_vm.form.phone),
      callback: function($$v) {
        _vm.$set(_vm.form, "phone", $$v)
      },
      expression: "form.phone"
    }
  }, 'vue-tel-input', _vm.bindProps, false)), _vm._v(" "), (_vm.submitted && _vm.$v.form.phone.$error) ? _c('div', {
    staticClass: "invalid-feedback"
  }, [(!_vm.$v.form.phone.required) ? _c('span', [_vm._v("Phone is required")]) : _vm._e(), _vm._v(" "), (!_vm.$v.form.phone.minLength) ? _c('span', [_vm._v("Phone numbers should be atleast 10 digits")]) : _vm._e()]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
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
  }, [(!_vm.$v.form.pin.required) ? _c('span', [_vm._v("PIN is required")]) : _vm._e(), _vm._v(" "), (!_vm.$v.form.pin.maxLength) ? _c('span', [_vm._v("PIN must be 4 digit integers")]) : _vm._e(), _vm._v(" "), (!_vm.$v.form.pin.integer) ? _c('span') : _vm._e()]) : _vm._e()])]), _vm._v(" "), _vm._m(3)]), _vm._v(" "), (_vm.userexist) ? _c('div', [_c('div', {
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
  })]), _vm._v(" "), (!_vm.haveCode) ? _c('button', {
    staticClass: "btn btn-info btn-sm",
    on: {
      "click": _vm.verifyOtp
    }
  }, [_vm._v("Verify")]) : _vm._e(), _vm._v(" "), (_vm.haveCode) ? _c('button', {
    staticClass: "btn btn-info btn-sm",
    on: {
      "click": _vm.login2
    }
  }, [_vm._v("Verify")]) : _vm._e()]) : _vm._e()])])])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('notifications', {
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
      "src": "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/phone.png",
      "width": "50"
    }
  }), _vm._v(" "), _c('p', [_vm._v("\n              Log in to retrieve your personalized report, verification code\n              will received via mobile, keep it secure\n            ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-4 col-md-4"
  }, [_c('div', {
    staticClass: "single_service"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/survay.png",
      "width": "50"
    }
  }), _vm._v(" "), _c('p', [_vm._v("Complete the screening questionnaire")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('br')])]), _vm._v(" "), _c('div', {
    staticClass: "col-xl-4 col-md-4"
  }, [_c('div', {
    staticClass: "single_service"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/report.png",
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
  return _c('div', {
    staticClass: "form-group"
  }, [_c('button', {
    staticClass: "boxed-btn3 large_margin",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Login")])])
}]}

/***/ }),

/***/ 565:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "background": "#3498DB"
    }
  }, [_c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "large_padding",
    staticStyle: {
      "background": "#ffffffdd"
    }
  }, [_c('h1', [_vm._v("This screening is for you, if you:")]), _vm._v(" "), _c('br'), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('router-link', {
    staticClass: "boxed-btn3 large_margin",
    attrs: {
      "to": "/register"
    }
  }, [_vm._v(">> I agree")])], 1)]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br')])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row justify-content-center"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/disclamer.png"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('img', {
    attrs: {
      "width": "100",
      "height": "100",
      "src": "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/emergency.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "col col-9"
  }, [_c('p', [_c('strong', [_vm._v("Do not need immediate medical attention")])]), _vm._v(" "), _c('p', {
    staticStyle: {
      "color": "#787878"
    }
  }, [_c('span', [_vm._v("This web site is NOT diagnostic or medical site. You should NOT use this website or the personalized report for any medical advice. It is NOT intended for people experiencing severe symptoms. If you have medical questions, contact your doctor. If you have an emergency call 911.")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row"
  }, [_c('img', {
    attrs: {
      "width": "100",
      "height": "100",
      "src": "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/age.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "col col-9"
  }, [_c('p', [_c('strong', [_vm._v("Are")]), _vm._v(" "), _c('strong', [_vm._v("18 years or older")])]), _vm._v(" "), _c('p', [_vm._v("Please use this site if you are 18 year or older, 3 different people may register with the same mobile phone number, each with a different PIN")])])])
}]}

/***/ }),

/***/ 566:
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
  }, [_vm._v(_vm._s(_vm.question.name_en))]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": _vm.savePDF
    }
  }, [_vm._v("\n          Get your report\n        ")]), _vm._v(" "), (!_vm.takeAgain) ? _c('p', [_vm._v("\n          You are able to answer it again after " + _vm._s(24 - _vm.hours) + " hours.\n        ")]) : _vm._e(), _vm._v(" "), (_vm.takeAgain) ? _c('button', {
    staticClass: "btn btn-primary",
    on: {
      "click": _vm.takeItAgain
    }
  }, [_vm._v("\n          take it again\n        ")]) : _vm._e()])])])])
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

/***/ 567:
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
  }, [_vm._v("\n                          " + _vm._s(_vm.advices[0].text) + "\n                        ")]), _vm._v(" "), _c('a', {
    staticClass: "popup-with-form amira_margin2",
    attrs: {
      "href": "#test-form",
      "onclick": "document.getElementById('_h3').innerHTML = document.getElementById('_k1').innerHTML;document.getElementById('_p').innerHTML = document.getElementById('_t1').innerHTML;"
    }
  }, [_vm._v("More")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "single_expert"
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
  }, [_vm._v("\n                          " + _vm._s(_vm.advices[1].text) + "\n                        ")]), _vm._v(" "), _c('a', {
    staticClass: "popup-with-form amira_margin2",
    attrs: {
      "href": "#test-form",
      "onclick": "document.getElementById('_h3').innerHTML = document.getElementById('_k2').innerHTML;document.getElementById('_p').innerHTML = document.getElementById('_t2').innerHTML;"
    }
  }, [_vm._v("More")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "single_expert"
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
  }, [_vm._v("\n                          " + _vm._s(_vm.advices[2].text) + "\n                        ")]), _vm._v(" "), _c('a', {
    staticClass: "popup-with-form amira_margin2",
    attrs: {
      "href": "#test-form",
      "onclick": "document.getElementById('_h3').innerHTML = document.getElementById('_k3').innerHTML;document.getElementById('_p').innerHTML = document.getElementById('_t3').innerHTML;"
    }
  }, [_vm._v("More")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "single_expert"
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
  }, [_vm._v("\n                          " + _vm._s(_vm.advices[3].text) + "\n                        ")]), _vm._v(" "), _c('a', {
    staticClass: "popup-with-form amira_margin2",
    attrs: {
      "href": "#test-form",
      "onclick": "document.getElementById('_h3').innerHTML = document.getElementById('_k4').innerHTML;document.getElementById('_p').innerHTML = document.getElementById('_t4').innerHTML;"
    }
  }, [_vm._v("More")])])])])])])])])])])])]), _vm._v(" "), _c('chatbot'), _vm._v(" "), _c('div', {
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
  }, [_vm._v("\n              Copyright © @2020 All rights reserved | Ensofia Team "), _c('span', {
    staticStyle: {
      "font-size": "smaller"
    }
  }, [_vm._v("release 4.15")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('font', {
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
      "src": "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/patient.jpg",
      "alt": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "expert_thumb"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/clinic.png",
      "alt": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "expert_thumb"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/doctor.png",
      "alt": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "expert_thumb"
  }, [_c('img', {
    attrs: {
      "src": "https://cdn.jsdelivr.net/gh/amiraelsayed/covid19/img/about/partner.jpg",
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

/***/ 568:
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
  }), _c('br')])]), _vm._v(" "), _c('div', {
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

/***/ 569:
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

/***/ 570:
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

/***/ 571:
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

/***/ 572:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    attrs: {
      "id": "header"
    }
  })
},staticRenderFns: []}

/***/ }),

/***/ 573:
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

/***/ 574:
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
  }, [_vm._v("All Clinic "), _c('router-link', {
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

/***/ 575:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main-content-container custom-container container-fluid"
  }, [_c('navbar'), _vm._v(" "), _c('Header'), _vm._v(" "), _c('section', {
    staticClass: "section-container"
  }, [_c('router-view')], 1), _vm._v(" "), _c('Footer')], 1)
},staticRenderFns: []}

/***/ }),

/***/ 576:
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
  }, [_vm._v("Start Screening NOW")]), _vm._v("  \n                "), _c('strong', [_vm._v("OR")]), _vm._v("\n                  \n                "), _c('a', {
    staticClass: "boxed-btn3",
    attrs: {
      "href": "tel: +14084134555"
    }
  }, [_vm._v("Dial the hotline")])], 1)])])])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("Start Screening NOW")]), _vm._v("  \n                "), _c('strong', [_vm._v("OR")]), _vm._v("\n                  \n                "), _c('a', {
    staticClass: "boxed-btn3",
    attrs: {
      "href": "tel: +14084134555"
    }
  }, [_vm._v("Dial the hotline")])], 1)])])])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("Start Screening NOW")]), _vm._v("  \n                "), _c('strong', [_vm._v("OR")]), _vm._v("  \n                "), _c('a', {
    staticClass: "boxed-btn3",
    attrs: {
      "href": "tel: +14084134555"
    }
  }, [_vm._v("Dial the hotline")])], 1)])])])])])]), _vm._v(" "), _vm._m(6), _vm._v(" "), _c('div', {
    staticClass: "service_area"
  }, [_c('div', {
    staticClass: "container p-0"
  }, [_c('div', {
    staticClass: "row no-gutters"
  }, [_vm._m(7), _vm._v(" "), _vm._m(8), _vm._v(" "), _c('div', {
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
  return _c('h3', [_c('span', [_vm._v("Take the survey ..")]), _vm._v(" "), _c('br'), _vm._v("Increase your awareness\n                ")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("\n                  The first step to defeat a pandemic is awareness and\n                  learning.\n                  "), _c('br'), _vm._v("This tool is built to increase awareness and share\n                  information\n                  "), _c('br'), _vm._v("which is published by the US Centers for Disease Control and\n                  Prevention.\n                  "), _c('br'), _vm._v("Visit CDC.gov for up to date information\n                ")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h3', [_c('span', [_vm._v("Stay Home")]), _vm._v(" "), _c('br'), _vm._v("Stay Safe\n                ")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("\n                  Let’s all help each other\n                  "), _c('br'), _vm._v("reserve care for those in need.\n                  "), _c('br'), _vm._v("Take the self assessment, call you doctor\n                  "), _c('br'), _vm._v("or healthcare provider, and look for guidelines from CDC.gov\n                ")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h3', [_c('span', [_vm._v("EnSofia is here ..")]), _vm._v(" "), _c('br'), _vm._v("To help you\n                ")])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("\n                  This website is made by team EnSofia.\n                  "), _c('br'), _vm._v("It is our humble\n                  effort to contribute to our community and help the public,\n                  "), _c('br'), _vm._v("the health care providers and healthcare systems.\n                  "), _c('br'), _vm._v("It is based on CDC guildlines.\n                  "), _c('br'), _vm._v("Always refer to CDC.gov\n                  for more information\n                ")])
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
  }, [_c('p', [_vm._v("Get verification code")])]), _vm._v("  \n      "), _c('div', {
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
    staticClass: "col-xl-4 col-md-4"
  }, [_c('div', {
    staticClass: "single_service"
  }, [_c('div', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "flaticon-emergency-call"
  })]), _vm._v(" "), _c('h3', [_vm._v("What it is Not")]), _vm._v(" "), _c('p', [_vm._v("\n              This web site is\n              "), _c('strong', [_vm._v("NOT")]), _vm._v(" diagnostic or medical\n              site. You should\n              "), _c('strong', [_vm._v("NOT")]), _vm._v(" use this website or the\n              personalized report for any medical advice. It is\n              "), _c('strong', [_vm._v("NOT")]), _vm._v("\n              intended for people experiencing severe\n              symptoms. If you have medical questions, contact your doctor. If\n              you have an emergency call 911.\n              "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('br')]), _vm._v(" "), _c('a', {
    staticClass: "boxed-btn3-white",
    attrs: {
      "href": "tel: +14084134555"
    }
  }, [_vm._v("+(408) 413-4555")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "icon"
  }, [_c('i', {
    staticClass: "flaticon-first-aid-kit"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("\n              This tool may help you understand what to do next\n              about COVID-19. Your privacy is extremely\n              important to us, your name and email are optional\n              Recommendations provided by this tool do not constitute medical\n              advice and should not be used to diagnose or treat medical\n              conditions.\n              "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('br')])
}]}

/***/ }),

/***/ 577:
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

/***/ 578:
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
  }, [_vm._v("\n            You are logged in! Please Contact us to confirm yourself\n          ")]) : _vm._e(), _vm._v(" "), _c('center', [_c('b-button', {
    attrs: {
      "variant": "outline-primary"
    },
    on: {
      "click": _vm.goToDashboard
    }
  }, [_vm._v("Primary")])], 1)], 1)])])])])
},staticRenderFns: []}

/***/ }),

/***/ 579:
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

/***/ 609:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__variables__ = __webpack_require__(19);



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
        // Vue.__BaseServiceRootURL = URL_LOCAL
        __WEBPACK_IMPORTED_MODULE_0_vue__["default"].__BaseServiceRootURL = __WEBPACK_IMPORTED_MODULE_2__variables__["c" /* URL_STAGE */];
      } else if (window.location.port == "8450") {
        __WEBPACK_IMPORTED_MODULE_0_vue__["default"].__BaseServiceRootURL = __WEBPACK_IMPORTED_MODULE_2__variables__["c" /* URL_STAGE */];
      } else {
        __WEBPACK_IMPORTED_MODULE_0_vue__["default"].__BaseServiceRootURL = __WEBPACK_IMPORTED_MODULE_2__variables__["c" /* URL_STAGE */];
      }
    }
  },
  resetUser() {
    window.localStorage.userId = null;
    window.localStorage.name = null;
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
        params: obj
      }, {
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
        debugger;
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

/***/ })

},[467]);
//# sourceMappingURL=app.b63695c06b2ebde73f5f.js.map