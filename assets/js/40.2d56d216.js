(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{469:function(t,e,a){"use strict";a.r(e);var s=a(18),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"call-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#call-service"}},[t._v("#")]),t._v(" Call Service")]),t._v(" "),a("p",[t._v("Sends a request to home assistant for any domain and service available ("),a("code",[t._v("light/turn_on")]),t._v(", "),a("code",[t._v("input_select/select_option")]),t._v(", etc..)")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Helpful Examples")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/guide/call-service.html"}},[t._v("Call Service Tips and Tricks")])],1)]),t._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("h3",{attrs:{id:"domain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#domain"}},[t._v("#")]),t._v(" Domain "),a("Badge",{attrs:{text:"required"}})],1),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Accepts "),a("RouterLink",{attrs:{to:"/guide/mustache-templates.html"}},[t._v("Mustache Templates")])],1)]),t._v(" "),a("p",[t._v("Service domain to call")]),t._v(" "),a("h3",{attrs:{id:"service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service"}},[t._v("#")]),t._v(" Service "),a("Badge",{attrs:{text:"required"}})],1),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Accepts "),a("RouterLink",{attrs:{to:"/guide/mustache-templates.html"}},[t._v("Mustache Templates")])],1)]),t._v(" "),a("p",[t._v("Service service to call")]),t._v(" "),a("h3",{attrs:{id:"entity-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entity-id"}},[t._v("#")]),t._v(" Entity Id")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("Accepts "),a("RouterLink",{attrs:{to:"/guide/mustache-templates.html"}},[t._v("Mustache Templates")])],1)]),t._v(" "),a("p",[t._v("A comma-delimited list of entity ids.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTICE")]),t._v(" "),a("p",[t._v("If "),a("code",[t._v("entity_id")]),t._v(" exists in the data property it will have precedence over this value.")])]),t._v(" "),a("h3",{attrs:{id:"data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[t._v("#")]),t._v(" Data")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("JSONata | JSON")])]),t._v(" "),a("li",[t._v("Accepts "),a("RouterLink",{attrs:{to:"/guide/mustache-templates.html"}},[t._v("Mustache Templates")]),t._v(" when data type is JSON")],1)]),t._v(" "),a("p",[t._v("JSON object to pass along.")]),t._v(" "),a("h3",{attrs:{id:"merge-context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#merge-context"}},[t._v("#")]),t._v(" Merge Context")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])])]),t._v(" "),a("p",[t._v("If defined will attempt to merge the global and flow context variable into the config")]),t._v(" "),a("h3",{attrs:{id:"alternative-template-tags"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alternative-template-tags"}},[t._v("#")]),t._v(" Alternative Template Tags")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("boolean")])])]),t._v(" "),a("p",[t._v("Will change the tags used for mustache template to "),a("code",[t._v("<%")]),t._v(" and "),a("code",[t._v("%>")])]),t._v(" "),a("h3",{attrs:{id:"queue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#queue"}},[t._v("#")]),t._v(" Queue")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("none | first | all | last")])])]),t._v(" "),a("p",[t._v("Will store the first, last or all messages received while disconnected from Home Assistant and send them once connected again")]),t._v(" "),a("h2",{attrs:{id:"input"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input"}},[t._v("#")]),t._v(" Input")]),t._v(" "),a("p",[t._v("All properties need to be under "),a("code",[t._v("msg.payload")]),t._v(".")]),t._v(" "),a("h4",{attrs:{id:"merging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#merging"}},[t._v("#")]),t._v(" Merging")]),t._v(" "),a("p",[t._v("If the incoming message has a "),a("code",[t._v("payload")]),t._v(" property with "),a("code",[t._v("domain")]),t._v(", "),a("code",[t._v("service")]),t._v(" set it will override any config values if set.")]),t._v(" "),a("p",[t._v("If the incoming message has a "),a("code",[t._v("payload.data")]),t._v(" that is an object or parsable into an object these properties will be "),a("strong",[t._v("merged")]),t._v(" with any config values set.")]),t._v(" "),a("p",[t._v("If the node has a property value in its config for "),a("code",[t._v("Merge Context")]),t._v(" then the "),a("code",[t._v("flow")]),t._v(" and "),a("code",[t._v("global")]),t._v(" contexts will be checked for this property which should be an object that will also be merged into the data payload.")]),t._v(" "),a("h4",{attrs:{id:"merge-resolution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#merge-resolution"}},[t._v("#")]),t._v(" Merge Resolution")]),t._v(" "),a("p",[t._v("As seen above the "),a("code",[t._v("data")]),t._v(" property has a lot going on in the way of data merging, in the end, all of these are optional and the rightmost will win if a property exists in multiple objects")]),t._v(" "),a("p",[t._v("Config Data, Global Data, Flow Data, Payload Data ( payload data property always\nwins if provided")]),t._v(" "),a("h3",{attrs:{id:"domain-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#domain-2"}},[t._v("#")]),t._v(" domain")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])])]),t._v(" "),a("p",[t._v("Service domain to call")]),t._v(" "),a("h3",{attrs:{id:"service-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-2"}},[t._v("#")]),t._v(" service")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("string")])])]),t._v(" "),a("p",[t._v("Service service to call")]),t._v(" "),a("h3",{attrs:{id:"data-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-2"}},[t._v("#")]),t._v(" data")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("Object")])])]),t._v(" "),a("p",[t._v("Service data to send with API call")]),t._v(" "),a("h2",{attrs:{id:"output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[t._v("#")]),t._v(" Output")]),t._v(" "),a("p",[t._v("Value types:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("sent data")]),t._v(": data sent to Home Assistant")]),t._v(" "),a("li",[a("code",[t._v("config")]),t._v(": config properties of the node")])])])}),[],!1,null,null,null);e.default=i.exports}}]);